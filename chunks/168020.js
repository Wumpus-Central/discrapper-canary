r.d(t, { R: () => s }), r(35282);
var n = r(951288);
r(647438);
var l = r(481060),
    a = r(774078),
    i = r(388032),
    o = r(64092);
let s = (e) => {
    let { endDate: t, size: r = "md" } = e,
        { days: s, hours: c, minutes: u } = (0, a.Z)(t),
        d = (function (e, t, r) {
            let n = (e) => "".concat(e.toString().padStart(2, "0"));
            return [n(e), n(t), n(r)].join(":");
        })(s, c, u);
    return (0, n.jsxs)("div", {
        className: o.container,
        role: "timer",
        children: [
            d.split("").map((e, t) =>
                ":" === e
                    ? (0, n.jsx)(
                          l.Text,
                          {
                              color: "none",
                              variant: "md" === r ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: o.delineator,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      )
                    : (0, n.jsx)(
                          l.Text,
                          {
                              color: "always-white",
                              variant: "md" === r ? "heading-md/bold" : "heading-xl/bold",
                              className: o.number,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, n.jsx)(l.nn4, {
                children: i.intl.format(i.t.j6IyVV, {
                    days: s,
                    hours: c,
                    minutes: u,
                }),
            }),
        ],
    });
};
