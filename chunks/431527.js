n.d(t, { C: () => T });
var i = n(477900);
let r = { xs: "body-xs/normal", sm: "body-sm/normal", md: "body-md/normal" },
    a = { xs: "xxs", sm: "xs", md: "sm" };
var s = n(582128),
    l = n(484746),
    o = n(15626),
    d = n(503698),
    c = n.n(d),
    u = n(51340),
    _ = n(646514),
    E = n(789645),
    A = n(834730),
    f = n(478576);
function h(e) {
    let { graphic: t, size: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: f.m4, "data-size": n, style: { backgroundColor: r } });
            case "avatar":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: f.my, "data-size": n, src: s, alt: "" });
            case "image":
                let { src: l } = t;
                return (0, i.jsx)("img", { className: f.Sl, "data-size": n, src: l, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: a[n], color: "currentColor" });
}
var I = n(70074),
    p = n(132473);
function m(e) {
    let { label: t, size: n, variant: s = "default", isDisabled: o, icon: d, accessibilityHint: f, ...m } = e,
        g = [t, f].filter(Boolean).join(", ");
    return (0, i.jsx)(l.vw, {
        ...m,
        "data-mana-component": "tag",
        className: c()(p.Tc, I.GA),
        "data-variant": s,
        textValue: g,
        isDisabled: o,
        children: (e) => {
            let { allowsRemoving: s } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != d && (0, i.jsx)(h, { graphic: d, size: n }),
                    (0, i.jsx)(A.E, { color: "none", variant: r[n], className: p.v6, children: t }),
                    s &&
                        (0, i.jsx)(u.$, {
                            slot: "remove",
                            children: (0, i.jsx)(E.XSmallIcon, { size: a[n], color: _.A.colors.ICON_DEFAULT }),
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
            disabled: r,
            disabledKeys: a,
            selectionMode: d = "none",
            selectionBehavior: c,
            layout: u = "default",
            size: _ = "md",
            variant: E,
            items: A,
            onRemove: f,
            children: h,
            selectedKeys: I,
            onSelectionChange: g,
            disallowEmptySelection: T,
        } = e,
        S = s.useContext(o._),
        N = s.useMemo(() => (r && "all" !== a ? new Set([...(a ?? []), ...A.map((e) => e.id)]) : a), [r, a, A]);
    return (0, i.jsxs)(l.CR, {
        "aria-label": n,
        id: S?.controlId,
        "data-mana-component": "tag-group",
        "aria-describedby": S?.describedById,
        "data-layout": u,
        "data-size": _,
        "data-variant": E,
        className: p.WD,
        selectionMode: d,
        selectionBehavior: c,
        selectedKeys: I,
        onSelectionChange: g,
        disabledKeys: N,
        disallowEmptySelection: T,
        onRemove: f,
        children: [
            (0, i.jsx)(l.LY, {
                ref: t,
                className: p.Tw,
                children: A.map((e) => (0, s.createElement)(m, { ...e, key: e.id, size: _, variant: E })),
            }),
            h,
        ],
    });
}
function T(e) {
    let { mode: t, variant: n = "default", layout: r = "default", size: a = "inline" === r ? "sm" : "md", ...s } = e;
    return (0, i.jsx)(g, { ...s, layout: r, size: a, variant: n });
}
