"use strict";
n.d(t, { v: () => d });
var r = n(627968),
    i = n(868903),
    a = n(650682),
    s = n(827734),
    o = n(789645),
    l = n(834730),
    u = n(444806),
    c = n(46751);
function d(e) {
    let { label: t, layout: n, isDisabled: d, icon: _, accessibilityHint: f, ...p } = e,
        h = [t, f].filter(Boolean).join(", ");
    return (0, r.jsx)(i.vw, {
        ...p,
        className: c.Tc,
        textValue: h,
        isDisabled: d,
        children: (e) => {
            let { allowsRemoving: i } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    null != _ && (0, r.jsx)(u.P, { graphic: _, layout: n }),
                    (0, r.jsx)(l.E, { variant: "inline" === n ? "text-sm/normal" : "text-md/normal", children: t }),
                    i &&
                        (0, r.jsx)(a.$, {
                            slot: "remove",
                            children: (0, r.jsx)(o.P, {
                                size: "inline" === n ? "xs" : "sm",
                                color: s.A.colors.ICON_DEFAULT,
                            }),
                        }),
                ],
            });
        },
    });
}
