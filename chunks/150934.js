"use strict";
n.d(t, { K: () => c, S: () => u });
var r = n(627968),
    i = n(64700),
    a = n(460890),
    s = n(834730),
    o = n(568385),
    l = n(27192);
function u(e) {
    let t = i.useContext(a.VO);
    return t?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")
        ? (0, r.jsx)(o.J, { ...e })
        : (0, r.jsx)(c, { ...e });
}
function c(e) {
    let { label: t, checked: n, onChange: a, labelType: o = "primary", description: u, leadingIcon: c } = e,
        d =
            null != t && "" !== t
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsxs)("div", {
                              style: { display: "flex", alignItems: "center", gap: "8px" },
                              children: [
                                  null != c &&
                                      i.createElement(c, {
                                          size: "sm",
                                          color: "currentColor",
                                          "aria-hidden": !0,
                                          focusable: !1,
                                      }),
                                  (0, r.jsx)(s.E, {
                                      variant: "text-md/normal",
                                      color: "primary" === o ? "text-strong" : "text-subtle",
                                      children: t,
                                  }),
                              ],
                          }),
                          null != u &&
                              "" !== u &&
                              (0, r.jsx)(s.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  style: { marginTop: "4px" },
                                  children: u,
                              }),
                      ],
                  })
                : null;
    return (0, r.jsx)(l.Kj, { ...e, value: n, onChange: (e, t) => a?.(t), children: d });
}
