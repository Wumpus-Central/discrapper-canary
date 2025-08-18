n.d(t, { Z: () => d }), n(388685), n(539854);
var r = n(951288),
    l = n(647438),
    i = n(692547),
    o = n(481060),
    a = n(596454),
    s = n(388032),
    c = n(870269);
function u(e) {
    return null != e && (null != e.id || null != e.name);
}
function d(e) {
    let { options: t, value: n, onChange: d, canBeNew: m, memberCounts: f } = e,
        p = l.useMemo(() => {
            let e = new Map();
            return (
                t.forEach((t) => {
                    e.set(t.id, t);
                }),
                e
            );
        }, [t]),
        h = l.useMemo(() => {
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
        x = l.useCallback(
            (e) => {
                var t, n, l, i;
                if (null == e) return;
                let o = p.get(e.value);
                if (null != o && u(o.emoji))
                    return (0, r.jsx)(a.Z, {
                        emojiId: null == (t = o.emoji) ? void 0 : t.id,
                        emojiName: null == (n = o.emoji) ? void 0 : n.name,
                        animated: null != (i = null == (l = o.emoji) ? void 0 : l.animated) && i,
                    });
            },
            [p],
        ),
        g = l.useCallback(
            (e, t) => {
                if (null == e || t.inPill) return;
                let n = p.get(e.value);
                if (null == n || !u(n.emoji)) return;
                let l = null == f || null == n.roleIds ? 0 : Math.max(...n.roleIds.map((e) => f[e])),
                    a = null != f && l > 0;
                return (0, r.jsxs)("div", {
                    className: c.suffix,
                    children: [
                        m &&
                            n.isUnseen &&
                            (0, r.jsx)(o.IGR, {
                                color: i.Z.unsafe_rawColors.BRAND_260.css,
                                text: s.intl.string(s.t.y2b7CA),
                                className: c.newBadge,
                            }),
                        a &&
                            (0, r.jsx)("div", {
                                className: c.memberCount,
                                "data-hover": !0,
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "always-white",
                                    children: s.intl.format(s.t.EgKsZG, { memberCount: l }),
                                }),
                            }),
                    ],
                });
            },
            [m, f, p],
        ),
        v = l.useCallback(
            (e) => {
                let t = [];
                e.forEach((e) => {
                    let n = p.get(e);
                    null != n && t.push(n);
                }),
                    d(t);
            },
            [d, p],
        );
    return (0, r.jsx)(o.VcW, {
        multi: !0,
        options: h,
        onChange: v,
        value: n,
        closeOnSelect: !1,
        renderOptionSuffix: g,
        renderOptionPrefix: x,
    });
}
