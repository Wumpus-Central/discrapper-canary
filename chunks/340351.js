"use strict";
n.d(t, { C: () => h });
var i = n(627968),
    r = n(64700),
    a = n(464652),
    s = n(15626),
    l = n(650682),
    o = n(661531),
    d = n(789645),
    c = n(834730),
    u = n(543893);
function _(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: u.m4, style: { backgroundColor: r } });
            case "avatar":
                let { src: a } = t;
                return (0, i.jsx)("img", { className: u.my, src: a, alt: "" });
            case "image":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: u.Sl, src: s, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: "inline" === n ? "xs" : "sm" });
}
var E = n(659046);
function A(e) {
    let { label: t, layout: n, isDisabled: r, icon: s, accessibilityHint: u, ...A } = e,
        h = [t, u].filter(Boolean).join(", ");
    return (0, i.jsx)(a.vw, {
        ...A,
        className: E.Tc,
        textValue: h,
        isDisabled: r,
        children: (e) => {
            let { allowsRemoving: r } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != s && (0, i.jsx)(_, { graphic: s, layout: n }),
                    (0, i.jsx)(c.E, { variant: "inline" === n ? "text-sm/normal" : "text-md/normal", children: t }),
                    r &&
                        (0, i.jsx)(l.$, {
                            slot: "remove",
                            children: (0, i.jsx)(d.P, {
                                size: "inline" === n ? "xs" : "sm",
                                color: o.A.colors.ICON_DEFAULT,
                            }),
                        }),
                ],
            });
        },
    });
}
function h(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: l,
            selectionMode: o = "none",
            layout: d = "default",
            items: c,
            onRemove: u,
            children: _,
        } = e,
        [h, I] = r.useState(() => new Set()),
        f = r.useContext(s._);
    return (0, i.jsxs)(a.CR, {
        "aria-label": n,
        id: f?.controlId,
        "aria-describedby": f?.describedById,
        "data-layout": d,
        className: E.WD,
        selectionMode: o,
        selectedKeys: h,
        onSelectionChange: I,
        disabledKeys: l,
        onRemove: u,
        children: [
            (0, i.jsx)(a.LY, {
                ref: t,
                className: E.Tw,
                children: c.map((e) =>
                    (0, r.createElement)(A, { ...e, key: e.id, layout: d, accessibilityHint: e.accessibilityHint }),
                ),
            }),
            _,
        ],
    });
}
