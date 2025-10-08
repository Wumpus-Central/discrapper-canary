n.d(t, { R: () => o }), n(35282);
var r = n(951288);
n(647438);
var l = n(481060),
    s = n(774078),
    a = n(388032),
    i = n(321824);
let o = (e) => {
    let { endDate: t, size: n = "md" } = e,
        { days: o, hours: c, minutes: u } = (0, s.Z)(t),
        d = (function (e, t, n) {
            let r = (e) => "".concat(e.toString().padStart(2, "0"));
            return [r(e), r(t), r(n)].join(":");
        })(o, c, u);
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
                children: a.intl.format(a.t.j6IyVV, {
                    days: o,
                    hours: c,
                    minutes: u,
                }),
            }),
        ],
    });
};
