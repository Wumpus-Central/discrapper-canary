"use strict";
n.d(t, { Y: () => c, p: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(934551),
    l = n(834730),
    u = n(154624),
    c = (function (e) {
        return (
            (e.WARNING = "warn"),
            (e.INFO = "info"),
            (e.ERROR = "danger"),
            (e.POSITIVE = "positive"),
            (e.PREVIEW = "preview"),
            e
        );
    })({});
function d(e, t) {
    if (null != t) return t;
    switch (e) {
        case "warn":
            return o.WarningIcon;
        case "info":
            return o.CircleInformationIcon;
        case "danger":
            return o.CircleErrorIcon;
        case "positive":
            return o.CircleCheckIcon;
        case "preview":
            return o.ScienceIcon;
    }
}
function _(e) {
    switch (e) {
        case "warn":
            return u.$e;
        case "info":
            return u.pq;
        case "danger":
            return u.z3;
        case "positive":
        case "preview":
            return u.yj;
    }
}
let f = (e) => {
    let { messageType: t, icon: n } = e,
        r = d(t, n);
    return i.createElement(r, { className: u.Kk, color: "currentColor" });
};
function p(e) {
    let {
            children: t,
            messageType: n,
            action: i,
            className: a,
            textColor: o = "text-default",
            textVariant: c = "text-sm/medium",
            icon: d,
            hidden: p = !1,
        } = e,
        h = _(n);
    return (0, r.jsx)("div", {
        className: s()(u.kL, h, a, { [u.R]: p }),
        children: (0, r.jsxs)("div", {
            className: u.WH,
            children: [
                (0, r.jsx)("div", { className: u.XG, children: (0, r.jsx)(f, { messageType: n, icon: d }) }),
                (0, r.jsx)(l.E, { className: u.Qq, color: o, variant: c, children: t }),
                null != i ? (0, r.jsx)("div", { className: u.Ik, children: i }) : null,
            ],
        }),
    });
}
