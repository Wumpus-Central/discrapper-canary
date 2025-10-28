n.d(t, { Z: () => v }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(657707),
    s = n(442837),
    c = n(481060),
    d = n(319738),
    u = n(163558),
    m = n(590149),
    p = n(314897),
    h = n(806992);
let x = [
        o.tBG,
        o.b7C,
        o.OgN,
        o.e5I,
        o.Ffc,
        o.WXD,
        o.EmW,
        o.Jmo,
        o.Vy8,
        o.yxC,
        o.RJm,
        o.y3H,
        o.vqy,
        o.ED8,
        o.ZRV,
        o.GsA,
        o.GuY,
        o.aXf,
        o.ewm,
    ],
    f = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    b = () => {
        let [e, t] = r.useState(""),
            [n, l] = r.useState(""),
            [i, o] = r.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("form", {
                    onSubmit: async (a) => {
                        a.preventDefault(), o(!0);
                        try {
                            await (0, d.UK)(e, n), t(""), l("");
                        } finally {
                            o(!1);
                        }
                    },
                    children: (0, a.jsxs)(c.Kqy, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(c.Kqy, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, a.jsx)(c.oil, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: i,
                                    }),
                                    (0, a.jsx)(c.oil, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: n,
                                        onChange: l,
                                        placeholder: "Password",
                                        disabled: i,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.Kqy, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, a.jsx)(c.Button, {
                                        type: "button",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "secondary",
                                        text: "Clear",
                                        onClick: () => {
                                            t(""), l("");
                                        },
                                        disabled: 0 === e.length || 0 === n.length || i,
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        type: "submit",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "primary",
                                        text: "Add Pool",
                                        disabled: 0 === e.length || 0 === n.length || i,
                                        loading: i,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, a.jsx)(c.izJ, { gap: 4 }),
            ],
        });
    },
    g = (e) => {
        let { pool: t } = e,
            { id: n, summary: l } = t,
            b = u.Z.getUsersForPool(n),
            g = (0, s.e7)([p.default], () => p.default.getId()),
            v = x[Number(n) % x.length],
            j = f[Number(n) % f.length],
            _ = r.useCallback(() => {
                (0, d.KZ)(n);
            }, [n]);
        return (0, a.jsx)(c.Kqy, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, a.jsx)(m.Z, {
                icon: (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: j,
                    className: h.iconText,
                    children: (0, a.jsx)(v, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: "currentColor",
                    }),
                }),
                title: l,
                className: h.accordion,
                subtitle: "".concat(b.length, " users"),
                children: (0, a.jsxs)(c.Kqy, {
                    direction: "vertical",
                    gap: 4,
                    padding: {
                        left: 24,
                        right: 8,
                        bottom: 16,
                    },
                    fullWidth: !1,
                    children: [
                        b.map((e, n) =>
                            (0, a.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        0 !== n && (0, a.jsx)(c.izJ, { gap: 4 }),
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                onClick: (n) => {
                                                    n.stopPropagation(), (0, d.TA)(t.id, e.id);
                                                },
                                                "aria-disabled": g === e.id,
                                                className: i()(h.clickable, { [h.clickableDisabled]: g === e.id }),
                                                children: (0, a.jsxs)(
                                                    c.Kqy,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, a.jsxs)(c.Kqy, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: i()({ [h.userInfoDisabled]: g === e.id }),
                                                                children: [
                                                                    (0, a.jsx)(o.tBG, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, a.jsxs)("div", {
                                                                        children: [
                                                                            (0, a.jsx)(c.Text, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, a.jsx)(c.Text, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-tertiary",
                                                                                className: h.emailText,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            g === e.id
                                                                ? (0, a.jsx)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, a.jsx)(o.owK, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, a.jsx)(c.Fbu, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                        ],
                                                    },
                                                    e.id,
                                                ),
                                            },
                                            e.id,
                                        ),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                        (0, a.jsx)("div", {
                            className: h.buttonContainer,
                            children: (0, a.jsx)(c.Button, {
                                icon: o.XHJ,
                                text: "",
                                size: "sm",
                                variant: "secondary",
                                onClick: _,
                            }),
                        }),
                    ],
                }),
            }),
        });
    };
function v() {
    let e = (0, s.Wu)([u.Z], () => {
        var e;
        return null != (e = u.Z.getPools()) ? e : [];
    });
    return (0, a.jsxs)(c.Kqy, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: h.container,
        children: [
            (0, a.jsx)(b, {}),
            (0, a.jsx)(c.Ttm, {
                className: h.poolsScroller,
                children: null == e ? void 0 : e.map((e) => (0, a.jsx)(g, { pool: e }, e.id)),
            }),
        ],
    });
}
