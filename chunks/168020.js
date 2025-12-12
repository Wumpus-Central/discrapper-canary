n.d(t, { R: () => s }), n(35282);
var r = n(54381);
n(473749);
var l = n(481060),
    a = n(774078),
    o = n(388032),
    i = n(594054);
let s = (e) => {
    let { endDate: t, size: n = "md" } = e,
        { days: s, hours: c, minutes: u } = (0, a.Z)(t),
        d = (function (e, t, n) {
            let r = (e) => "".concat(e.toString().padStart(2, "0"));
            return [r(e), r(t), r(n)].join(":");
        })(s, c, u);
    return (0, r.jsxs)("div", {
        className: i.container,
        role: "timer",
        children: [
            d.split("").map((e, t) =>
                ":" === e
                    ? (0, r.jsx)(
                          l.Text,
                          {
                              color: "none",
                              variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: i.delineator,
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
                              className: i.number,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, r.jsx)(l.nn4, {
                children: o.intl.format(o.t.j6IyVe, {
                    days: s,
                    hours: c,
                    minutes: u,
                }),
            }),
        ],
    });
};
