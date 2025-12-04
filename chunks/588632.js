n.d(t, { Z: () => m }), n(388685), n(539854);
var l = n(54381),
    i = n(473749),
    r = n(692547),
    o = n(668339),
    a = n(481060),
    c = n(596454),
    s = n(388032),
    u = n(870269);
function d(e) {
    return null != e && (null != e.id || null != e.name);
}
function m(e) {
    let { options: t, value: n, onChange: m, canBeNew: p, memberCounts: h } = e,
        f = i.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        g = i.useMemo(() => {
            let e = [];
            return (
                t.forEach((t) => {
                    e.push({
                        value: t.id,
                        label: t.title,
                        key: t.id,
                    });
                }),
                e
            );
        }, [t]),
        j = i.useCallback(
            (e) => {
                var t, n, i, r;
                if (null == e) return;
                let o = f.get(e.value);
                if (null != o && d(o.emoji))
                    return (0, l.jsx)(c.Z, {
                        emojiId: null == (t = o.emoji) ? void 0 : t.id,
                        emojiName: null == (n = o.emoji) ? void 0 : n.name,
                        animated: null != (r = null == (i = o.emoji) ? void 0 : i.animated) && r,
                    });
            },
            [f],
        ),
        v = i.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = f.get(e.value);
                if (null == n || !d(n.emoji)) return;
                let i = null == h || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => h[e])),
                    o = null != h && i > 0;
                return (0, l.jsxs)("div", {
                    className: u.suffix,
                    children: [
                        p &&
                            n.isUnseen &&
                            (0, l.jsx)(a.IGR, {
                                color: r.Z.unsafe_rawColors.BRAND_260.css,
                                text: s.intl.string(s.t.y2b7CA),
                                className: u.newBadge,
                            }),
                        o &&
                            (0, l.jsx)("div", {
                                className: u.memberCount,
                                "data-hover": !0,
                                children: (0, l.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: s.intl.format(s.t.EgKsZA, { memberCount: i }),
                                }),
                            }),
                    ],
                });
            },
            [p, h, f],
        ),
        x = i.useCallback(
            (e) => {
                let t = [];
                e.forEach((e) => {
                    let n = f.get(e);
                    null != n && t.push(n);
                }),
                    m(t);
            },
            [m, f],
        );
    return (0, l.jsx)(o.d, {
        multi: !0,
        options: g,
        onChange: x,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: v,
        renderOptionPrefix: j,
    });
}
