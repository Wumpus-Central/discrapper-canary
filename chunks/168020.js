n.d(t, { R: () => a }), n(35282);
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(774078),
    s = n(388032),
    o = n(64092);
let a = (e) => {
    let { endDate: t, size: n = "md" } = e,
        { days: a, hours: c, minutes: u } = (0, i.Z)(t),
        d = (function (e, t, n) {
            let r = (e) => "".concat(e.toString().padStart(2, "0"));
            return [r(e), r(t), r(n)].join(":");
        })(a, c, u);
    return (0, r.jsxs)("div", {
        className: o.container,
        role: "timer",
        children: [
            d.split("").map((e, t) =>
                ":" === e
                    ? (0, r.jsx)(
                          l.Text,
                          {
                              color: "none",
                              variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: o.delineator,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      )
                    : (0, r.jsx)(
                          l.Text,
                          {
                              color: "always-white",
                              variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                              className: o.number,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, r.jsx)(l.nn4, {
                children: s.intl.format(s.t.j6IyVe, {
                    days: a,
                    hours: c,
                    minutes: u,
                }),
            }),
        ],
    });
};
