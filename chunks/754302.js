var a = r(477900);
r(582128);
var c = r(503698),
    l = r.n(c),
    n = r(947641),
    i = r(534514),
    d = r(834730),
    o = r(563682);
r.d(
    e,
    {},
    {
        B: function (s) {
            let {
                icon: e,
                title: r,
                description: c,
                iconClassName: t,
                color: m,
                listType: u = "icon",
                completed: h = !1,
                index: x,
            } = s;
            return (0, a.jsxs)("div", {
                className: o.Hn,
                children: [
                    (function () {
                        if ("numbered" === u && null != x)
                            if (h)
                                return (0, a.jsx)("div", {
                                    className: o.ai,
                                    children: (0, a.jsx)(n.CheckmarkLargeBoldIcon, {
                                        color: "green",
                                        className: l()(o.Kk, t),
                                    }),
                                });
                            else
                                return (0, a.jsx)(i.D, {
                                    variant: "heading-sm/semibold",
                                    color: "text-brand",
                                    className: o.ai,
                                    children: x + 1,
                                });
                        if (null != e)
                            return (0, a.jsx)("div", {
                                className: o.zc,
                                children: (0, a.jsx)(e, { color: m ?? "currentColor", className: l()(o.Kk, t) }),
                            });
                    })(),
                    (0, a.jsxs)("div", {
                        className: o.FS,
                        children: [
                            (0, a.jsx)(d.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                className: l()({ [o.VA]: h }),
                                children: r,
                            }),
                            null != c &&
                                (0, a.jsx)(d.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: l()({ [o.VA]: h }),
                                    children: c,
                                }),
                        ],
                    }),
                ],
            });
        },
        q: function (s) {
            let { children: e } = s;
            return (0, a.jsx)("div", {
                className: o.MD,
                children: (0, a.jsx)("div", { className: o.Qs, children: e }),
            });
        },
    },
);
