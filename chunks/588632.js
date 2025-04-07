n.d(t, { Z: () => u }), n(388685), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(692547),
    i = n(481060),
    o = n(596454),
    s = n(388032),
    c = n(141475);
function d(e) {
    return null != e && (null != e.id || null != e.name);
}
function u(e) {
    let { options: t, value: n, onChange: u, canBeNew: m, memberCounts: h } = e,
        p = l.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        f = l.useMemo(() => {
            let e = [];
            return (
                t.forEach((t) => {
                    e.push({
                        value: t.id,
                        label: t.title,
                        key: t.id
                    });
                }),
                e
            );
        }, [t]),
        g = l.useCallback(
            (e) => {
                var t, n, l, a;
                if (null == e) return;
                let i = p.get(e.value);
                if (null != i && d(i.emoji))
                    return (0, r.jsx)(o.Z, {
                        emojiId: null == (t = i.emoji) ? void 0 : t.id,
                        emojiName: null == (n = i.emoji) ? void 0 : n.name,
                        animated: null != (a = null == (l = i.emoji) ? void 0 : l.animated) && a
                    });
            },
            [p]
        ),
        x = l.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = p.get(e.value);
                if (null == n || !d(n.emoji)) return;
                let l = null == h || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => h[e])),
                    o = null != h && l > 0;
                return (0, r.jsxs)('div', {
                    className: c.suffix,
                    children: [
                        m &&
                            n.isUnseen &&
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
                let t = [];
                e.forEach((e) => {
                    let n = p.get(e);
                    null != n && t.push(n);
                }),
                    u(t);
            },
            [u, p]
        );
    return (0, r.jsx)(i.VcW, {
        multi: !0,
        options: f,
        onChange: _,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: x,
        renderOptionPrefix: g
    });
}
