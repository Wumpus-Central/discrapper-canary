n.d(t, {
    Y: () => u,
    p: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(934551),
    l = n(834730),
    c = n(154624),
    u = (function (e) {
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
            return o.CheckmarkLargeIcon;
        case "preview":
            return o.ScienceIcon;
    }
}

function f(e) {
    switch (e) {
        case "warn":
            return c.$e;
        case "info":
            return c.pq;
        case "danger":
            return c.z3;
        case "positive":
        case "preview":
            return c.yj;
    }
}
let p = (e) => {
    let { messageType: t, icon: n } = e,
        r = d(t, n);
    return i.createElement(r, {
        className: c.Kk,
        color: "currentColor",
    });
};

function _(e) {
    let {
            children: t,
            messageType: n,
            action: i,
            className: a,
            textColor: o = "text-default",
            textVariant: u = "text-sm/medium",
            icon: d,
            hidden: _ = !1,
        } = e,
        h = f(n);
    return (0, r.jsx)("div", {
        className: s()(c.kL, h, a, {
            [c.R]: _,
        }),
        children: (0, r.jsxs)("div", {
            className: c.WH,
            children: [
                (0, r.jsx)("div", {
                    className: c.XG,
                    children: (0, r.jsx)(p, {
                        messageType: n,
                        icon: d,
                    }),
                }),
                (0, r.jsx)(l.E, {
                    className: c.Qq,
                    color: o,
                    variant: u,
                    children: t,
                }),
                null != i
                    ? (0, r.jsx)("div", {
                          className: c.Ik,
                          children: i,
                      })
                    : null,
            ],
        }),
    });
}
