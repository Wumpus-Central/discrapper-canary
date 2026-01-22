n.d(t, {
    IJ: () => u,
    LK: () => f,
    Ot: () => b,
    xs: () => C,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    o = n(397927),
    a = n(46054),
    s = n(31457),
    c = n(985018),
    d = n(712104);

function u(e) {
    let { terms: t, channelId: n, className: l } = e;
    return (0, r.jsx)("div", {
        className: i()(d.qE, l),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                "div",
                {
                    className: d.gJ,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: "".concat(t + 1, "."),
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: d.RQ,
                            children: a.A.parseGuildVerificationFormRule(e, !0, {
                                channelId: n,
                            }),
                        }),
                    ],
                },
                "term-".concat(t),
            ),
        ),
    });
}

function C(e) {
    let { onChange: t, checked: n, disabled: l } = e;
    return (0, r.jsx)("div", {
        className: d.kv,
        children: (0, r.jsx)(o.Checkbox, {
            checked: !!n,
            onChange: t,
            disabled: l,
            label: c.intl.string(c.t["2EXfGJ"]),
        }),
    });
}

function f(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.fu, {
        icon: o.B8Q,
        text: c.intl.string(c.t["2xbmoG"]),
        meetsRequirement: !!t.response,
    });
}
let b = (e) => {
    let { channelId: t, formField: n, onChange: l } = e;
    return (0, r.jsxs)(s.cS, {
        title: c.intl.string(c.t["Q8OFN+"]),
        children: [
            (0, r.jsx)(u, {
                className: d.n_,
                terms: n.values,
                channelId: t,
            }),
            (0, r.jsx)(C, {
                onChange: l,
                checked: n.response,
            }),
        ],
    });
};
