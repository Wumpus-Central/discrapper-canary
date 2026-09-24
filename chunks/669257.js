n.d(t, { C: () => S });
var i = n(477900),
    r = n(582128),
    a = n(877603),
    s = n(15626),
    l = n(503698),
    o = n.n(l),
    d = n(160844),
    c = n(661531),
    u = n(789645),
    _ = n(834730),
    E = n(478576);
let A = { xs: "xxs", sm: "xs", md: "sm" };
function h(e) {
    let { graphic: t, size: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: E.m4, "data-size": n, style: { backgroundColor: r } });
            case "avatar":
                let { src: a } = t;
                return (0, i.jsx)("img", { className: E.my, "data-size": n, src: a, alt: "" });
            case "image":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: E.Sl, "data-size": n, src: s, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: A[n], color: "currentColor" });
}
var I = n(70074),
    f = n(132473);
let p = { xs: "text-xs/normal", sm: "text-sm/normal", md: "text-md/normal" },
    T = { xs: "xxs", sm: "xs", md: "sm" };
function m(e) {
    let { label: t, size: n, variant: r = "default", isDisabled: s, icon: l, accessibilityHint: E, ...A } = e,
        m = [t, E].filter(Boolean).join(", ");
    return (0, i.jsx)(a.vw, {
        ...A,
        "data-mana-component": "tag",
        className: o()(f.Tc, I.GA),
        "data-variant": r,
        textValue: m,
        isDisabled: s,
        children: (e) => {
            let { allowsRemoving: r } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != l && (0, i.jsx)(h, { graphic: l, size: n }),
                    (0, i.jsx)(_.E, { color: "none", variant: p[n], children: t }),
                    r &&
                        (0, i.jsx)(d.$, {
                            slot: "remove",
                            children: (0, i.jsx)(u.P, { size: T[n], color: c.A.colors.ICON_DEFAULT }),
                        }),
                ],
            });
        },
    });
}
function g(e) {
    let {
            listRef: t,
            label: n,
            disabled: l,
            disabledKeys: o,
            selectionMode: d = "none",
            selectionBehavior: c,
            layout: u = "default",
            size: _ = "md",
            variant: E,
            items: A,
            onRemove: h,
            children: I,
            selectedKeys: p,
            onSelectionChange: T,
            disallowEmptySelection: g,
        } = e,
        S = r.useContext(s._),
        N = r.useMemo(() => (l && "all" !== o ? new Set([...(o ?? []), ...A.map((e) => e.id)]) : o), [l, o, A]);
    return (0, i.jsxs)(a.CR, {
        "aria-label": n,
        id: S?.controlId,
        "data-mana-component": "tag-group",
        "aria-describedby": S?.describedById,
        "data-layout": u,
        "data-size": _,
        "data-variant": E,
        className: f.WD,
        selectionMode: d,
        selectionBehavior: c,
        selectedKeys: p,
        onSelectionChange: T,
        disabledKeys: N,
        disallowEmptySelection: g,
        onRemove: h,
        children: [
            (0, i.jsx)(a.LY, {
                ref: t,
                className: f.Tw,
                children: A.map((e) => (0, r.createElement)(m, { ...e, key: e.id, size: _, variant: E })),
            }),
            I,
        ],
    });
}
function S(e) {
    let { mode: t, variant: n = "default", layout: r = "default", size: a = "inline" === r ? "sm" : "md", ...s } = e;
    return (0, i.jsx)(g, { ...s, layout: r, size: a, variant: n });
}
