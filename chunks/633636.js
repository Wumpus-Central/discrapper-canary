var n = l(477900);
l(582128);
var a = l(834730),
    i = l(383668),
    r = l(258576),
    s = l(792996),
    u = l(391284);
function o(e) {
    return { labelId: `${e}-label`, markId: `${e}-mark`, helpId: `${e}-help` };
}
l.d(
    t,
    {},
    {
        A: function (e) {
            let { fieldId: t, label: l, help: d, labelsInput: c = !0, optional: f = !1, status: m } = e,
                { labelId: g, markId: p, helpId: h } = o(t);
            return (0, n.jsxs)("div", {
                className: u.R_,
                children: [
                    (0, n.jsxs)("div", {
                        className: u.Zz,
                        children: [
                            (0, n.jsx)(a.E, {
                                tag: c ? "label" : "span",
                                htmlFor: c ? t : void 0,
                                id: g,
                                variant: "body-sm/semibold",
                                color: "text-strong",
                                children: l,
                            }),
                            f
                                ? (0, n.jsx)(a.E, {
                                      tag: "span",
                                      id: p,
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      children: s.intl.string(r.default["3q5CYS"]),
                                  })
                                : null,
                            null != m ? (0, n.jsx)("span", { className: u.h5, children: m }) : null,
                        ],
                    }),
                    null != d && "" !== d
                        ? (0, n.jsx)("div", {
                              id: h,
                              children: (0, n.jsx)(i.A, {
                                  text: d,
                                  variant: "body-sm/normal",
                                  color: "text-subtle",
                                  shortLinks: !0,
                              }),
                          })
                        : null,
                ],
            });
        },
        x: o,
    },
);
