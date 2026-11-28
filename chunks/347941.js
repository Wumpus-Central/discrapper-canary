var n = l(477900);
l(582128);
var a = l(646514),
    i = l(628284),
    r = l(834730),
    s = l(821609),
    u = l(95477),
    o = l(998445),
    d = l(633636),
    c = l(258576),
    f = l(792996),
    m = l(272975);
l.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    fieldId: t,
                    name: l,
                    label: g,
                    help: p,
                    hosts: h,
                    stored: v,
                    replacing: x,
                    onReplace: b,
                    required: y = !1,
                    value: j,
                    onChange: k,
                    disabled: A = !1,
                } = e,
                S = v && !x && "" === j,
                { labelId: w, helpId: C } = (0, d.x)(t),
                E = `${t}-hosts`,
                I = null != p && "" !== p,
                P = null != h && h.length > 0,
                T = [I ? C : null, P ? E : null].filter((e) => null != e).join(" ");
            return (0, n.jsxs)("div", {
                className: m.gd,
                role: "group",
                "aria-labelledby": w,
                children: [
                    (0, n.jsx)(d.A, {
                        fieldId: t,
                        label: g,
                        help: p,
                        labelsInput: !S,
                        status: v
                            ? (0, n.jsxs)("span", {
                                  className: m.aW,
                                  children: [
                                      (0, n.jsx)(i.CircleCheckIcon, {
                                          size: "xs",
                                          color: a.A.colors.ICON_FEEDBACK_POSITIVE,
                                          "aria-hidden": !0,
                                      }),
                                      (0, n.jsx)(r.E, {
                                          variant: "body-xs/semibold",
                                          color: "text-feedback-positive",
                                          tag: "span",
                                          children: f.intl.string(c.default["6KzZZY"]),
                                      }),
                                  ],
                              })
                            : void 0,
                    }),
                    S
                        ? (0, n.jsxs)("div", {
                              className: m.su,
                              children: [
                                  (0, n.jsx)(r.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      "aria-hidden": !0,
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  (0, n.jsx)(s.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: f.intl.string(c.default.du47JY),
                                      "aria-label": f.intl.formatToPlainString(c.default.hqR5SF, { label: g }),
                                      disabled: A,
                                      onClick: b,
                                  }),
                              ],
                          })
                        : (0, n.jsx)("div", {
                              className: m.SP,
                              children: (0, n.jsx)(u.k, {
                                  id: t,
                                  name: l,
                                  type: "password",
                                  revealable: !0,
                                  autoComplete: "off",
                                  autoFocus: x,
                                  required: y && !v,
                                  "aria-describedby": "" === T ? void 0 : T,
                                  value: j,
                                  onChange: k,
                                  disabled: A,
                                  fullWidth: !0,
                              }),
                          }),
                    P
                        ? (0, n.jsxs)("div", {
                              className: m.S,
                              children: [
                                  (0, n.jsx)(o.GlobeEarthIcon, {
                                      size: "xxs",
                                      color: a.A.colors.ICON_MUTED,
                                      "aria-hidden": !0,
                                  }),
                                  (0, n.jsx)(r.E, {
                                      variant: "body-xs/normal",
                                      color: "text-muted",
                                      id: E,
                                      selectable: !0,
                                      children: f.intl.formatToPlainString(c.default.Ww9HFO, { hosts: h.join(", ") }),
                                  }),
                              ],
                          })
                        : null,
                ],
            });
        },
    },
);
