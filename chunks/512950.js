"use strict";
n.d(t, { Y: () => p, p: () => m });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(738188),
    u = n(885574),
    c = n(695366),
    d = n(628284),
    _ = n(776078),
    h = n(834730),
    f = n(292705),
    p =
        (((i = {}).WARNING = "warn"),
        (i.INFO = "info"),
        (i.ERROR = "danger"),
        (i.POSITIVE = "positive"),
        (i.PREVIEW = "preview"),
        i);
let E = (e) => {
    let { messageType: t, icon: n } = e,
        i = (function (e, t) {
            if (null != t) return t;
            switch (e) {
                case "warn":
                    return l.i;
                case "info":
                    return u.m;
                case "danger":
                    return c.E;
                case "positive":
                    return d.y;
                case "preview":
                    return _.g;
            }
        })(t, n);
    return s.createElement(i, { className: f.Kk, color: "currentColor" });
};
function m(e) {
    let {
            children: t,
            messageType: n,
            action: i,
            className: s,
            iconAlign: a,
            textColor: l = "text-default",
            textVariant: u = "text-sm/medium",
            icon: c,
            hidden: d = !1,
        } = e,
        _ = (function (e) {
            switch (e) {
                case "warn":
                    return f.$e;
                case "info":
                    return f.pq;
                case "danger":
                    return f.z3;
                case "positive":
                case "preview":
                    return f.yj;
            }
        })(n);
    return (0, r.jsx)("div", {
        className: o()(f.kL, _, s, { [f.R]: d }),
        children: (0, r.jsxs)("div", {
            className: f.WH,
            children: [
                (0, r.jsx)("div", {
                    className: o()(f.XG, { [f.AW]: "center" === a }),
                    children: (0, r.jsx)(E, { messageType: n, icon: c }),
                }),
                (0, r.jsx)(h.E, { className: f.Qq, color: l, variant: u, children: t }),
                null != i ? (0, r.jsx)("div", { className: f.Ik, children: i }) : null,
            ],
        }),
    });
}
