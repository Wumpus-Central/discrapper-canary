"use strict";
n.d(t, { Y: () => h, p: () => f });
var i,
    r = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(738188),
    d = n(885574),
    c = n(695366),
    u = n(628284),
    _ = n(776078),
    E = n(834730),
    A = n(924953),
    h =
        (((i = {}).WARNING = "warn"),
        (i.INFO = "info"),
        (i.ERROR = "danger"),
        (i.POSITIVE = "positive"),
        (i.PREVIEW = "preview"),
        i);
let I = (e) => {
    let { messageType: t, icon: n } = e,
        i = (function (e, t) {
            if (null != t) return t;
            switch (e) {
                case "warn":
                    return o.i;
                case "info":
                    return d.m;
                case "danger":
                    return c.E;
                case "positive":
                    return u.y;
                case "preview":
                    return _.g;
            }
        })(t, n);
    return a.createElement(i, { className: A.Kk, color: "currentColor" });
};
function f(e) {
    let {
            children: t,
            messageType: n,
            action: i,
            className: a,
            iconAlign: s,
            textColor: o = "text-default",
            textVariant: d = "text-sm/medium",
            icon: c,
            hidden: u = !1,
        } = e,
        _ = (function (e) {
            switch (e) {
                case "warn":
                    return A.$e;
                case "info":
                    return A.pq;
                case "danger":
                    return A.z3;
                case "positive":
                case "preview":
                    return A.yj;
            }
        })(n);
    return (0, r.jsx)("div", {
        className: l()(A.kL, _, a, { [A.R]: u }),
        children: (0, r.jsxs)("div", {
            className: A.WH,
            children: [
                (0, r.jsx)("div", {
                    className: l()(A.XG, { [A.AW]: "center" === s }),
                    children: (0, r.jsx)(I, { messageType: n, icon: c }),
                }),
                (0, r.jsx)(E.E, { className: A.Qq, color: o, variant: d, children: t }),
                null != i ? (0, r.jsx)("div", { className: A.Ik, children: i }) : null,
            ],
        }),
    });
}
