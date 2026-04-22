"use strict";
n.d(t, { Y: () => h, p: () => m });
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(738188),
    u = n(885574),
    d = n(695366),
    c = n(628284),
    _ = n(776078),
    f = n(834730),
    E = n(292705),
    h =
        (((r = {}).WARNING = "warn"),
        (r.INFO = "info"),
        (r.ERROR = "danger"),
        (r.POSITIVE = "positive"),
        (r.PREVIEW = "preview"),
        r);
let p = (e) => {
    let { messageType: t, icon: n } = e,
        r = (function (e, t) {
            if (null != t) return t;
            switch (e) {
                case "warn":
                    return l.i;
                case "info":
                    return u.m;
                case "danger":
                    return d.E;
                case "positive":
                    return c.y;
                case "preview":
                    return _.g;
            }
        })(t, n);
    return s.createElement(r, { className: E.Kk, color: "currentColor" });
};
function m(e) {
    let {
            children: t,
            messageType: n,
            action: r,
            className: s,
            textColor: a = "text-default",
            textVariant: l = "text-sm/medium",
            icon: u,
            hidden: d = !1,
        } = e,
        c = (function (e) {
            switch (e) {
                case "warn":
                    return E.$e;
                case "info":
                    return E.pq;
                case "danger":
                    return E.z3;
                case "positive":
                case "preview":
                    return E.yj;
            }
        })(n);
    return (0, i.jsx)("div", {
        className: o()(E.kL, c, s, { [E.R]: d }),
        children: (0, i.jsxs)("div", {
            className: E.WH,
            children: [
                (0, i.jsx)("div", { className: E.XG, children: (0, i.jsx)(p, { messageType: n, icon: u }) }),
                (0, i.jsx)(f.E, { className: E.Qq, color: a, variant: l, children: t }),
                null != r ? (0, i.jsx)("div", { className: E.Ik, children: r }) : null,
            ],
        }),
    });
}
