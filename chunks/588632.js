n.d(t, { Z: () => d }), n(388685), n(539854);
var l = n(54381),
    i = n(473749),
    r = n(692547),
    o = n(481060),
    a = n(596454),
    c = n(388032),
    s = n(870269);
function u(e) {
    return null != e && (null != e.id || null != e.name);
}
function d(e) {
    let { options: t, value: n, onChange: d, canBeNew: m, memberCounts: p } = e,
        h = i.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        f = i.useMemo(() => {
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
        g = i.useCallback(
            (e) => {
                var t, n, i, r;
                if (null == e) return;
                let o = h.get(e.value);
                if (null != o && u(o.emoji))
                    return (0, l.jsx)(a.Z, {
                        emojiId: null == (t = o.emoji) ? void 0 : t.id,
                        emojiName: null == (n = o.emoji) ? void 0 : n.name,
                        animated: null != (r = null == (i = o.emoji) ? void 0 : i.animated) && r,
                    });
            },
            [h],
        ),
        j = i.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = h.get(e.value);
                if (null == n || !u(n.emoji)) return;
                let i = null == p || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => p[e])),
                    a = null != p && i > 0;
                return (0, l.jsxs)("div", {
                    className: s.suffix,
                    children: [
                        m &&
                            n.isUnseen &&
                            (0, l.jsx)(o.IGR, {
                                color: r.Z.unsafe_rawColors.BRAND_260.css,
                                text: c.intl.string(c.t.y2b7CA),
                                className: s.newBadge,
                            }),
                        a &&
                            (0, l.jsx)("div", {
                                className: s.memberCount,
                                "data-hover": !0,
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: c.intl.format(c.t.EgKsZA, { memberCount: i }),
                                }),
                            }),
                    ],
                });
            },
            [m, p, h],
        ),
        v = i.useCallback(
            (e) => {
                let t = [];
                e.forEach((e) => {
                    let n = h.get(e);
                    null != n && t.push(n);
                }),
                    d(t);
            },
            [d, h],
        );
    return (0, l.jsx)(o.VcW, {
        multi: !0,
        options: f,
        onChange: v,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: j,
        renderOptionPrefix: g,
    });
}
