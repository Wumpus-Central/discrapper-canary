a.d(t, { A: () => z });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(950305),
    o = a(231483),
    d = a(597770),
    c = a(433492),
    u = a(695458),
    m = a(796140),
    h = a(268791),
    p = a(836480),
    x = a(855473),
    g = a(626258),
    v = a(420854),
    b = a(373846),
    _ = a(657044),
    f = a(141060),
    j = a(608599),
    A = a(685761),
    y = a(157225),
    C = a(362704),
    E = a(625903),
    S = a(628284),
    N = a(241326),
    k = a(311907),
    I = a(331322),
    D = a(292666),
    T = a(821609),
    w = a(404778),
    O = a(834730),
    R = a(939249),
    L = a(320448),
    M = a(573613),
    P = a(238193),
    U = a(624622),
    B = a(844330),
    G = a(961350),
    F = a(277851);
let V = [r.n, o.l, d.o, c.K, u.m, m.c, h.$, p.Q, x.Z, g.A, v.E, b.C, _._, f.i, j.L, A.f, y.N, C.Y, E.Z],
    $ = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    W = () => {
        let [e, t] = l.useState(""),
            [a, i] = l.useState(""),
            [s, r] = l.useState(!1);
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("form", {
                    onSubmit: async (n) => {
                        n.preventDefault(), r(!0);
                        try {
                            await (0, P.gs)(e, a), t(""), i("");
                        } finally {
                            r(!1);
                        }
                    },
                    children: (0, n.jsxs)(I.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsxs)(I.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, n.jsx)(D.k, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: s,
                                    }),
                                    (0, n.jsx)(D.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: i,
                                        placeholder: "Password",
                                        disabled: s,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(I.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, n.jsx)(T.$, {
                                        type: "button",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "secondary",
                                        text: "Clear",
                                        onClick: () => {
                                            t(""), i("");
                                        },
                                        disabled: 0 === e.length || 0 === a.length || s,
                                    }),
                                    (0, n.jsx)(T.$, {
                                        type: "submit",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "primary",
                                        text: "Add Pool",
                                        disabled: 0 === e.length || 0 === a.length || s,
                                        loading: s,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                (0, n.jsx)(w.c, { gap: 4 }),
            ],
        });
    },
    H = (e) => {
        let { pool: t } = e,
            { id: a, summary: i } = t,
            o = U.A.getUsersForPool(a),
            d = (0, k.bG)([G.default], () => G.default.getId()),
            c = V[Number(a) % V.length],
            u = $[Number(a) % $.length],
            m = l.useCallback(() => {
                (0, P.cD)(a);
            }, [a]);
        return (0, n.jsx)(I.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, n.jsx)(B.A, {
                icon: (0, n.jsx)(O.E, {
                    variant: "text-md/medium",
                    color: u,
                    className: F.td,
                    children: (0, n.jsx)(c, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: i,
                className: F.JC,
                subtitle: `${o.length} users`,
                children: (0, n.jsxs)(I.B, {
                    direction: "vertical",
                    gap: 4,
                    padding: { left: 24, right: 8, bottom: 16 },
                    fullWidth: !1,
                    children: [
                        o.map((e, a) =>
                            (0, n.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        0 !== a && (0, n.jsx)(w.c, { gap: 4 }),
                                        (0, n.jsx)(
                                            R.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(), (0, P.sl)(t.id, e.id);
                                                },
                                                "aria-disabled": d === e.id,
                                                className: s()(F.vk, { [F.Pe]: d === e.id }),
                                                children: (0, n.jsxs)(
                                                    I.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, n.jsxs)(I.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: s()({ [F.WP]: d === e.id }),
                                                                children: [
                                                                    (0, n.jsx)(r.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, n.jsxs)("div", {
                                                                        children: [
                                                                            (0, n.jsx)(O.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, n.jsx)(O.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: F.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            d === e.id
                                                                ? (0, n.jsx)(O.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, n.jsx)(S.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, n.jsx)(L._, {
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
                        (0, n.jsx)("div", {
                            className: F.UD,
                            children: (0, n.jsx)(T.$, {
                                icon: N.u,
                                text: "",
                                size: "sm",
                                variant: "secondary",
                                onClick: m,
                            }),
                        }),
                    ],
                }),
            }),
        });
    };
function z() {
    let e = (0, k.yK)([U.A], () => U.A.getPools() ?? []);
    return (0, n.jsxs)(I.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: F.kL,
        children: [
            (0, n.jsx)(W, {}),
            (0, n.jsx)(M.Ip, { className: F.Ik, children: e?.map((e) => (0, n.jsx)(H, { pool: e }, e.id)) }),
        ],
    });
}
