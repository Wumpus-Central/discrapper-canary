n.d(t, { R: () => o }), n(35282);
var r = n(951288);
n(647438);
var l = n(481060),
    a = n(774078),
    i = n(388032),
    s = n(64092);
let o = (e) => {
    let { endDate: t, size: n = "md" } = e,
        { days: o, hours: c, minutes: u } = (0, a.Z)(t),
        d = (function (e, t, n) {
            let r = (e) => "".concat(e.toString().padStart(2, "0"));
            return [r(e), r(t), r(n)].join(":");
        })(o, c, u);
    return (0, r.jsxs)("div", {
        className: s.container,
        role: "timer",
        children: [
            d.split("").map((e, t) =>
                ":" === e
                    ? (0, r.jsx)(
                          l.Text,
                          {
                              color: "none",
                              variant: "md" === n ? "heading-lg/extrabold" : "heading-xxl/extrabold",
                              className: s.delineator,
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
                              className: s.number,
                              "aria-hidden": !0,
                              tag: "div",
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, r.jsx)(l.nn4, {
                children: i.intl.format(i.t.j6IyVV, {
                    days: o,
                    hours: c,
                    minutes: u,
                }),
            }),
        ],
    });
};
