n.d(t, { R: () => s }), n(35282);
var r = n(255367);
n(73800);
var l = n(481060),
    a = n(774078),
    i = n(388032),
    o = n(940326);
let s = (e) => {
    let { endDate: t } = e,
        { days: n, hours: s, minutes: c } = (0, a.Z)(t),
        u = (function (e, t, n) {
            let r = (e) => "".concat(e.toString().padStart(2, "0"));
            return [r(e), r(t), r(n)].join(":");
        })(n, s, c);
    return (0, r.jsxs)("div", {
        className: o.container,
        role: "timer",
        children: [
            u.split("").map((e, t) =>
                ":" === e
                    ? (0, r.jsx)(
                          l.Text,
                          {
                              "aria-hidden": !0,
                              tag: "div",
                              color: "none",
                              variant: "heading-lg/extrabold",
                              className: o.delineator,
                              children: e,
                          },
                          t,
                      )
                    : (0, r.jsx)(
                          l.Text,
                          {
                              "aria-hidden": !0,
                              tag: "div",
                              color: "always-white",
                              variant: "heading-md/medium",
                              className: o.number,
                              children: e,
                          },
                          t,
                      ),
            ),
            (0, r.jsx)(l.nn4, {
                children: i.intl.format(i.t.j6IyVV, {
                    days: n,
                    hours: s,
                    minutes: c,
                }),
            }),
        ],
    });
};
