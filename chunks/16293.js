n.d(t, { A: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(499979),
    u = n(397927),
    d = n(263063),
    f = n(71393),
    p = n(854987),
    _ = n(719718),
    h = n(57882),
    m = n(927989),
    g = n(155286),
    E = n(573138),
    b = n(877272),
    y = n(398225),
    O = n(532294),
    A = n(622865),
    v = n(985018),
    S = n(308021),
    I = n(80577);
function T(e) {
    let { guild: t, checkpointGuild: n, primaryColor: i } = e,
        a = (0, y.vy)(),
        { unit: o, duration: l } = (0, h.oO)(n.numVoiceMinutes);
    return (0, r.jsx)(
        y.vw,
        {
            className: s()(I.bo, I.dl),
            spring: a,
            children: (0, r.jsxs)(m.A, {
                innerClassName: I.lm,
                useTopRightClipPath: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.OA,
                        children: [
                            (0, r.jsx)(d.A, {
                                guild: t,
                                size: d.A.Sizes.LARGER,
                                className: I.$f,
                            }),
                            (0, r.jsx)(b.A, {
                                className: I.J5,
                                variant: "heading-xl/medium",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: I.Tm,
                        style: { backgroundColor: i },
                        children: (0, r.jsx)(b.A, {
                            variant: "text-lg/normal",
                            className: S.sH,
                            children: "#1",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: I.dX,
                        children: [
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(b.A, {
                                        variant: "eyebrow",
                                        children: v.intl.string(A.default.wWKySP),
                                    }),
                                    (0, r.jsx)(b.A, {
                                        variant: "heading-xxl/normal",
                                        className: S.sH,
                                        children: n.numMessagesSent,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(b.A, {
                                        variant: "eyebrow",
                                        children:
                                            o === c.pJ.HOURS
                                                ? v.intl.format(A.default.Xu0QsX, { numHours: l })
                                                : v.intl.string(A.default.RmVTph),
                                    }),
                                    (0, r.jsx)(b.A, {
                                        variant: "heading-xxl/normal",
                                        className: S.sH,
                                        children: l,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        },
        t.id,
    );
}
function C(e) {
    let { guild: t, rank: n, primaryColor: i } = e,
        a = (0, y.vy)();
    return (0, r.jsx)(
        y.vw,
        {
            className: I.bo,
            spring: a,
            children: (0, r.jsxs)(m.A, {
                innerClassName: I.oQ,
                useTopRightClipPath: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.OA,
                        children: [
                            (0, r.jsx)(d.A, {
                                guild: t,
                                size: d.A.Sizes.LARGER,
                                className: I.$f,
                            }),
                            (0, r.jsx)(b.A, {
                                className: I.J5,
                                variant: "heading-xl/medium",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: I.Tm,
                        style: { backgroundColor: i },
                        children: (0, r.jsxs)(b.A, {
                            variant: "text-lg/normal",
                            className: S.sH,
                            children: ["#", n],
                        }),
                    }),
                ],
            }),
        },
        t.id,
    );
}
function N() {
    let e = (0, i.useContext)(p.P),
        t = (0, u.rdh)(e.primaryColor).hex(),
        { guilds: { guilds: n } = { guilds: [] } } = (0, l.bG)([_.A], () => _.A.getCheckpointData()),
        a = (0, i.useMemo)(
            () =>
                n
                    .map((e) => {
                        let { guild: t, numMessagesSent: n, numVoiceMinutes: r } = e;
                        return {
                            guild: f.A.getGuild(t.id),
                            numMessagesSent: n,
                            numVoiceMinutes: r,
                        };
                    })
                    .filter((e) => {
                        let { guild: t } = e;
                        return null != t;
                    }),
            [n],
        ),
        s = a.length > 0 ? a[0].guild : null;
    return (0, r.jsx)(E.A, {
        verticalFlow: !0,
        children: (0, r.jsxs)("div", {
            className: I.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: S.DD,
                    children: [
                        (0, r.jsx)(o.RR9, {
                            size: "refresh_sm",
                            color: t,
                            colorClass: S.d7,
                        }),
                        (0, r.jsx)(b.A, {
                            variant: "eyebrow",
                            className: S.UP,
                            children: v.intl.string(A.default.mAroeJ),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: I.wx,
                    children: [
                        (0, r.jsx)(b.A, {
                            variant: "display-lg",
                            className: I.Vy,
                            children: v.intl.string(v.t["7hB4kg"]),
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(b.A, {
                                    variant: "heading-xxl/medium",
                                    className: I.VA,
                                    children: v.intl.string(A.default.Q0EMOP),
                                }),
                                (0, r.jsx)(g.e, { slide: O.P7.GUILDS }),
                            ],
                        }),
                    ],
                }),
                null != s &&
                    (0, r.jsx)(T, {
                        guild: s,
                        checkpointGuild: a[0],
                        primaryColor: t,
                    }),
                (0, r.jsx)("div", {
                    className: I.Pl,
                    children: a.map((e, n) => {
                        let { guild: i } = e;
                        return 0 === n
                            ? null
                            : (0, r.jsx)(
                                  C,
                                  {
                                      guild: i,
                                      rank: n + 1,
                                      primaryColor: t,
                                  },
                                  i.id,
                              );
                    }),
                }),
            ],
        }),
    });
}
