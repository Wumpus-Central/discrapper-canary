t.d(n, { Z: () => u }), t(47120), t(653041);
var r = t(200651),
    l = t(192379),
    a = t(692547),
    i = t(481060),
    o = t(596454),
    s = t(388032),
    c = t(141475);
function d(e) {
    return null != e && (null != e.id || null != e.name);
}
function u(e) {
    let { options: n, value: t, onChange: u, canBeNew: m, memberCounts: h } = e,
        p = l.useMemo(() => {
            let e = new Map();
            return (
                n.forEach((n) => {
                    e.set(n.id, n);
                }),
                e
            );
        }, [n]),
        f = l.useMemo(() => {
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
        g = l.useCallback(
            (e) => {
                var n, t, l, a;
                if (null == e) return;
                let i = p.get(e.value);
                if (null != i && d(i.emoji))
                    return (0, r.jsx)(o.Z, {
                        emojiId: null == (n = i.emoji) ? void 0 : n.id,
                        emojiName: null == (t = i.emoji) ? void 0 : t.name,
                        animated: null != (a = null == (l = i.emoji) ? void 0 : l.animated) && a
                    });
            },
            [p]
        ),
        x = l.useCallback(
            (e, n) => {
                if (null == e || n.inPill) return;
                let t = p.get(e.value);
                if (null == t || !d(t.emoji)) return;
                let l = null == h || null == t.roleIds ? 0 : Math.max(...t.roleIds.map((e) => h[e])),
                    o = null != h && l > 0;
                return (0, r.jsxs)('div', {
                    className: c.suffix,
                    children: [
                        m &&
                            t.isUnseen &&
                            (0, r.jsx)(i.IGR, {
                                color: a.Z.unsafe_rawColors.BRAND_260.css,
                                text: s.NW.string(s.t.y2b7CA),
                                className: c.newBadge
                            }),
                        o &&
                            (0, r.jsx)('div', {
                                className: c.memberCount,
                                'data-hover': !0,
                                children: (0, r.jsx)(i.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: s.NW.format(s.t.EgKsZG, { memberCount: l })
                                })
                            })
                    ]
                });
            },
            [m, h, p]
        ),
        _ = l.useCallback(
            (e) => {
                let n = [];
                e.forEach((e) => {
                    let t = p.get(e);
                    null != t && n.push(t);
                }),
                    u(n);
            },
            [u, p]
        );
    return (0, r.jsx)(i.VcW, {
        multi: !0,
        options: f,
        onChange: _,
        value: t,
        closeOnSelect: !1,
        renderOptionSuffix: x,
        renderOptionPrefix: g
    });
}
