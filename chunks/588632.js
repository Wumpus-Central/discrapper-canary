(n.d(t, { Z: () => u }), n(388685), n(539854));
var l = n(255367),
    r = n(73800),
    i = n(692547),
    a = n(481060),
    o = n(596454),
    s = n(388032),
    c = n(141475);
function d(e) {
    return null != e && (null != e.id || null != e.name);
}
function u(e) {
    let { options: t, value: n, onChange: u, canBeNew: m, memberCounts: h } = e,
        p = r.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        f = r.useMemo(() => {
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
        g = r.useCallback(
            (e) => {
                var t, n, r, i;
                if (null == e) return;
                let a = p.get(e.value);
                if (null != a && d(a.emoji))
                    return (0, l.jsx)(o.Z, {
                        emojiId: null == (t = a.emoji) ? void 0 : t.id,
                        emojiName: null == (n = a.emoji) ? void 0 : n.name,
                        animated: null != (i = null == (r = a.emoji) ? void 0 : r.animated) && i
                    });
            },
            [p]
        ),
        x = r.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = p.get(e.value);
                if (null == n || !d(n.emoji)) return;
                let r = null == h || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => h[e])),
                    o = null != h && r > 0;
                return (0, l.jsxs)('div', {
                    className: c.suffix,
                    children: [
                        m &&
                            n.isUnseen &&
                            (0, l.jsx)(a.IGR, {
                                color: i.Z.unsafe_rawColors.BRAND_260.css,
                                text: s.intl.string(s.t.y2b7CA),
                                className: c.newBadge
                            }),
                        o &&
                            (0, l.jsx)('div', {
                                className: c.memberCount,
                                'data-hover': !0,
                                children: (0, l.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    children: s.intl.format(s.t.EgKsZG, { memberCount: r })
                                })
                            })
                    ]
                });
            },
            [m, h, p]
        ),
        _ = r.useCallback(
            (e) => {
                let t = [];
                (e.forEach((e) => {
                    let n = p.get(e);
                    null != n && t.push(n);
                }),
                    u(t));
            },
            [u, p]
        );
    return (0, l.jsx)(a.VcW, {
        multi: !0,
        options: f,
        onChange: _,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: x,
        renderOptionPrefix: g
    });
}
