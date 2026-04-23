"use strict";
n.d(t, { C: () => m });
var i = n(627968),
    r = n(64700),
    s = n(464652),
    a = n(15626),
    o = n(197867),
    l = n(661531),
    d = n(789645),
    _ = n(834730),
    u = n(543893);
function c(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: u.m4, style: { backgroundColor: r } });
            case "avatar":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: u.my, src: s, alt: "" });
            case "image":
                let { src: a } = t;
                return (0, i.jsx)("img", { className: u.Sl, src: a, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: "inline" === n ? "xs" : "sm" });
}
var E = n(659046);
function h(e) {
    let { label: t, layout: n, isDisabled: r, icon: a, accessibilityHint: u, ...h } = e,
        m = [t, u].filter(Boolean).join(", ");
    return (0, i.jsx)(s.vw, {
        ...h,
        className: E.Tc,
        textValue: m,
        isDisabled: r,
        children: (e) => {
            let { allowsRemoving: r } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != a && (0, i.jsx)(c, { graphic: a, layout: n }),
                    (0, i.jsx)(_.E, { variant: "inline" === n ? "text-sm/normal" : "text-md/normal", children: t }),
                    r &&
                        (0, i.jsx)(o.$, {
                            slot: "remove",
                            children: (0, i.jsx)(d.P, {
                                size: "inline" === n ? "xs" : "sm",
                                color: l.A.colors.ICON_DEFAULT,
                            }),
                        }),
                ],
            });
        },
    });
}
function m(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: o,
            selectionMode: l = "none",
            layout: d = "default",
            items: _,
            onRemove: u,
            children: c,
        } = e,
        [m, f] = r.useState(() => new Set()),
        g = r.useContext(a._);
    return (0, i.jsxs)(s.CR, {
        "aria-label": n,
        id: g?.controlId,
        "aria-describedby": g?.describedById,
        "data-layout": d,
        className: E.WD,
        selectionMode: l,
        selectedKeys: m,
        onSelectionChange: f,
        disabledKeys: o,
        onRemove: u,
        children: [
            (0, i.jsx)(s.LY, {
                ref: t,
                className: E.Tw,
                children: _.map((e) =>
                    (0, r.createElement)(h, { ...e, key: e.id, layout: d, accessibilityHint: e.accessibilityHint }),
                ),
            }),
            c,
        ],
    });
}
