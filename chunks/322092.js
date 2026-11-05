var i = t(477900);
t(582128);
var s = t(503698),
    r = t.n(s),
    a = t(695366),
    l = t(696986),
    c = t(834730),
    u = t(821609),
    o = t(556452);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { message: e, error: t, onClick: s, submitting: d, className: m, ctaMessage: h } = n;
            return (0, i.jsxs)("div", {
                className: r()(o.kL, m),
                children: [
                    (0, i.jsxs)("div", {
                        className: o.FS,
                        children: [
                            (0, i.jsx)(a.CircleErrorIcon, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "currentColor",
                                className: o.QW,
                            }),
                            (0, i.jsx)(l.h, { size: 10, horizontal: !0 }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(l.h, { size: 1 }),
                                    (0, i.jsx)(c.E, { className: o.pq, variant: "body-sm/normal", children: e }),
                                    null != t &&
                                        (0, i.jsx)(c.E, {
                                            className: r()(o.pq, o.z3),
                                            variant: "body-sm/normal",
                                            children: t,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(l.h, { size: 16, horizontal: !0 }),
                    (0, i.jsx)(u.$, { variant: "critical-secondary", size: "sm", onClick: s, text: h, loading: d }),
                ],
            });
        },
    },
);
