n.d(t, {
    A: () => v,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(934551),
    o = n(311907),
    c = n(397927),
    d = n(238193),
    u = n(624622),
    m = n(844330),
    p = n(961350),
    h = n(372022);
let f = [
        s.UserIcon,
        s.ShieldIcon,
        s.GiftIcon,
        s.AchievementsIcon,
        s.PiggyBankIcon,
        s.TreehouseIcon,
        s.SpeedometerIcon,
        s.CompassIcon,
        s.SignPostIcon,
        s.CarIcon,
        s.TrainIcon,
        s.TeacupIcon,
        s.InventoryIcon,
        s.FoodIcon,
        s.BurgerIcon,
        s.MagicDoorIcon,
        s.PawPrintIcon,
        s.RecordPlayerIcon,
        s.SettingsIcon,
    ],
    x = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    b = () => {
        let [e, t] = l.useState(""),
            [n, i] = l.useState(""),
            [r, s] = l.useState(!1);
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("form", {
                    onSubmit: async (a) => {
                        a.preventDefault(), s(!0);
                        try {
                            await (0, d.gs)(e, n), t(""), i("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, a.jsxs)(c.BJc, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, a.jsxs)(c.BJc, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, a.jsx)(c.ksK, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: r,
                                    }),
                                    (0, a.jsx)(c.ksK, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: n,
                                        onChange: i,
                                        placeholder: "Password",
                                        disabled: r,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(c.BJc, {
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
                                            t(""), i("");
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
                (0, a.jsx)(c.cGx, {
                    gap: 4,
                }),
            ],
        });
    },
    g = (e) => {
        let { pool: t } = e,
            { id: n, summary: i } = t,
            b = u.A.getUsersForPool(n),
            g = (0, o.bG)([p.default], () => p.default.getId()),
            v = f[Number(n) % f.length],
            j = x[Number(n) % x.length],
            y = l.useCallback(() => {
                (0, d.cD)(n);
            }, [n]);
        return (0, a.jsx)(c.BJc, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, a.jsx)(m.A, {
                icon: (0, a.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: j,
                    className: h.td,
                    children: (0, a.jsx)(v, {
                        size: "custom",
                        width: 24,
                        height: 24,
                        color: "currentColor",
                    }),
                }),
                title: i,
                className: h.JC,
                subtitle: "".concat(b.length, " users"),
                children: (0, a.jsxs)(c.BJc, {
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
                                l.Fragment,
                                {
                                    children: [
                                        0 !== n &&
                                            (0, a.jsx)(c.cGx, {
                                                gap: 4,
                                            }),
                                        (0, a.jsx)(
                                            c.DUT,
                                            {
                                                onClick: (n) => {
                                                    n.stopPropagation(), (0, d.sl)(t.id, e.id);
                                                },
                                                "aria-disabled": g === e.id,
                                                className: r()(h.vk, {
                                                    [h.Pe]: g === e.id,
                                                }),
                                                children: (0, a.jsxs)(
                                                    c.BJc,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: {
                                                            right: 8,
                                                        },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, a.jsxs)(c.BJc, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: r()({
                                                                    [h.WP]: g === e.id,
                                                                }),
                                                                children: [
                                                                    (0, a.jsx)(s.UserIcon, {
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
                                                                                color: "text-muted",
                                                                                className: h.c1,
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
                                                                      children: (0, a.jsx)(s.CircleCheckIcon, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, a.jsx)(c._BQ, {
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
                            className: h.UD,
                            children: (0, a.jsx)(c.Button, {
                                icon: s.TrashIcon,
                                text: "",
                                size: "sm",
                                variant: "secondary",
                                onClick: y,
                            }),
                        }),
                    ],
                }),
            }),
        });
    };

function v() {
    let e = (0, o.yK)([u.A], () => {
        var e;
        return null != (e = u.A.getPools()) ? e : [];
    });
    return (0, a.jsxs)(c.BJc, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: h.kL,
        children: [
            (0, a.jsx)(b, {}),
            (0, a.jsx)(c.HOs, {
                className: h.Ik,
                children:
                    null == e
                        ? void 0
                        : e.map((e) =>
                              (0, a.jsx)(
                                  g,
                                  {
                                      pool: e,
                                  },
                                  e.id,
                              ),
                          ),
            }),
        ],
    });
}
