n.d(t, { Z: () => v }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(657707),
    o = n(442837),
    c = n(481060),
    d = n(319738),
    u = n(163558),
    m = n(590149),
    p = n(314897),
    h = n(806992);
let x = [
        s.tBG,
        s.b7C,
        s.OgN,
        s.e5I,
        s.Ffc,
        s.WXD,
        s.EmW,
        s.Jmo,
        s.Vy8,
        s.yxC,
        s.RJm,
        s.y3H,
        s.vqy,
        s.ED8,
        s.ZRV,
        s.GsA,
        s.GuY,
        s.aXf,
        s.ewm,
    ],
    g = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    f = () => {
        let [e, t] = i.useState(""),
            [n, l] = i.useState(""),
            [r, s] = i.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("form", {
                    onSubmit: async (a) => {
                        a.preventDefault(), s(!0);
                        try {
                            await (0, d.UK)(e, n), t(""), l("");
                        } finally {
                            s(!1);
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
                                        disabled: r,
                                    }),
                                    (0, a.jsx)(c.oil, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: n,
                                        onChange: l,
                                        placeholder: "Password",
                                        disabled: r,
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
                                        disabled: 0 === e.length || 0 === n.length || r,
                                    }),
                                    (0, a.jsx)(c.Button, {
                                        type: "submit",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "primary",
                                        text: "Add Pool",
                                        disabled: 0 === e.length || 0 === n.length || r,
                                        loading: r,
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
    b = (e) => {
        let { pool: t } = e,
            { id: n, summary: l } = t,
            f = u.Z.getUsersForPool(n),
            b = (0, o.e7)([p.default], () => p.default.getId()),
            v = x[Number(n) % x.length],
            j = g[Number(n) % g.length],
            _ = i.useCallback(() => {
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
                subtitle: "".concat(f.length, " users"),
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
                        f.map((e, n) =>
                            (0, a.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        0 !== n && (0, a.jsx)(c.izJ, { gap: 4 }),
                                        (0, a.jsx)(
                                            c.P3F,
                                            {
                                                onClick: (n) => {
                                                    n.stopPropagation(), (0, d.TA)(t.id, e.id);
                                                },
                                                "aria-disabled": b === e.id,
                                                className: r()(h.clickable, { [h.clickableDisabled]: b === e.id }),
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
                                                                className: r()({ [h.userInfoDisabled]: b === e.id }),
                                                                children: [
                                                                    (0, a.jsx)(s.tBG, {
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
                                                            b === e.id
                                                                ? (0, a.jsx)(c.Text, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, a.jsx)(s.owK, {
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
                                icon: s.XHJ,
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
    let e = (0, o.Wu)([u.Z], () => {
        var e;
        return null != (e = u.Z.getPools()) ? e : [];
    });
    return (0, a.jsxs)(c.Kqy, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: h.container,
        children: [
            (0, a.jsx)(f, {}),
            (0, a.jsx)(c.Ttm, {
                className: h.poolsScroller,
                children: null == e ? void 0 : e.map((e) => (0, a.jsx)(b, { pool: e }, e.id)),
            }),
        ],
    });
}
