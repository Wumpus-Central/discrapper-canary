n.d(t, { R: () => u }), n(35282);
var r = n(54381);
n(473749);
var l = n(120356),
    a = n.n(l),
    s = n(481060),
    i = n(774078),
    o = n(388032),
    c = n(594054);
let u = (e) => {
    let { endDate: t, size: n = "md", className: l } = e,
        { days: u, hours: d, minutes: f } = (0, i.Z)(t),
        g = (function (e, t, n) {
            let r = (e) => "".concat(e.toString().padStart(2, "0"));
            return [r(e), r(t), r(n)].join(":");
        })(u, d, f);
    return (0, r.jsxs)("div", {
        className: a()(c.container, l),
        role: "timer",
        children: [
            g.split("").map((e, t) =>
                ":" === e
                    ? (0, r.jsx)(
                          s.Text,
                          {
                              color: "none",
                              variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: c.delineator,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      )
                    : (0, r.jsx)(
                          s.Text,
                          {
                              color: "always-white",
                              variant: "md" === n ? "heading-md/bold" : "heading-xl/bold",
                              className: c.number,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, r.jsx)(s.nn4, {
                children: o.intl.format(o.t.j6IyVe, {
                    days: u,
                    hours: d,
                    minutes: f,
                }),
            }),
        ],
    });
};
