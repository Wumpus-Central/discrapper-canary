t.d(n, { Z: () => u }), t(47120), t(653041);
var l = t(200651),
    i = t(192379),
    a = t(692547),
    r = t(481060),
    o = t(596454),
    s = t(388032),
    d = t(28194);
function c(e) {
    return null != e && (null != e.id || null != e.name);
}
function u(e) {
    let { options: n, value: t, onChange: u, canBeNew: h, memberCounts: m } = e,
        x = i.useMemo(() => {
            let e = new Map();
            return (
                n.forEach((n) => {
                    e.set(n.id, n);
                }),
                e
            );
        }, [n]),
        _ = i.useMemo(() => {
            let e = [];
            return (
                n.forEach((n) => {
                    e.push({
                        value: n.id,
                        label: n.title,
                        key: n.id
                    });
                }),
                e
            );
        }, [n]),
        p = i.useCallback(
            (e) => {
                var n, t, i, a;
                if (null == e) return;
                let r = x.get(e.value);
                if (null != r && c(r.emoji))
                    return (0, l.jsx)(o.Z, {
                        emojiId: null === (n = r.emoji) || void 0 === n ? void 0 : n.id,
                        emojiName: null === (t = r.emoji) || void 0 === t ? void 0 : t.name,
                        animated: null !== (a = null === (i = r.emoji) || void 0 === i ? void 0 : i.animated) && void 0 !== a && a
                    });
            },
            [x]
        ),
        f = i.useCallback(
            (e, n) => {
                if (null == e || n.inPill) return;
                let t = x.get(e.value);
                if (null == t || !c(t.emoji)) return;
                let i = null == m || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => m[e])),
                    o = null != m && i > 0;
                return (0, l.jsxs)('div', {
                    className: d.suffix,
                    children: [
                        h &&
                            t.isUnseen &&
                            (0, l.jsx)(r.IGR, {
                                color: a.Z.unsafe_rawColors.BRAND_260.css,
                                text: s.intl.string(s.t.y2b7CA),
                                className: d.newBadge
                            }),
                        o &&
                            (0, l.jsx)('div', {
                                className: d.memberCount,
                                'data-hover': !0,
                                children: (0, l.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: s.intl.format(s.t.EgKsZG, { memberCount: i })
                                })
                            })
                    ]
                });
            },
            [h, m, x]
        ),
        g = i.useCallback(
            (e) => {
                let n = [];
                e.forEach((e) => {
                    let t = x.get(e);
                    null != t && n.push(t);
                }),
                    u(n);
            },
            [u, x]
        );
    return (0, l.jsx)(r.VcW, {
        multi: !0,
        options: _,
        onChange: g,
        value: t,
        closeOnSelect: !1,
        renderOptionSuffix: f,
        renderOptionPrefix: p
    });
}
