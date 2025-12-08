n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(379649),
    u = n(481060),
    d = n(565138),
    f = n(430824),
    p = n(324060),
    _ = n(5888),
    m = n(26118),
    h = n(539041),
    g = n(909397),
    E = n(198358),
    b = n(391876),
    y = n(883166),
    O = n(612776),
    v = n(860076),
    S = n(388032),
    I = n(417788),
    T = n(154326);
function A(e) {
    let { guild: t, checkpointGuild: n, primaryColor: i } = e,
        a = (0, y.gl)(),
        { unit: s, duration: l } = (0, m.Bi)(n.numVoiceMinutes);
    return (0, r.jsx)(
        y.QR,
        {
            className: o()(T.guildContainer, T.topGuild),
            spring: a,
            children: (0, r.jsxs)(h.Z, {
                innerClassName: T.topGuildBorder,
                useTopRightClipPath: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.guildInfo,
                        children: [
                            (0, r.jsx)(d.Z, {
                                guild: t,
                                size: d.Z.Sizes.LARGER,
                                className: T.guildIcon,
                            }),
                            (0, r.jsx)(b.Z, {
                                className: T.guildName,
                                variant: "heading-xl/medium",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: T.rank,
                        style: { backgroundColor: i },
                        children: (0, r.jsx)(b.Z, {
                            variant: "text-lg/normal",
                            className: I.numeric,
                            children: "#1",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: T.guildStats,
                        children: [
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        variant: "eyebrow",
                                        children: S.intl.string(v.default.wWKySP),
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        variant: "heading-xxl/normal",
                                        className: I.numeric,
                                        children: n.numMessagesSent,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        variant: "eyebrow",
                                        children:
                                            s === c.J6.HOURS
                                                ? S.intl.format(v.default.Xu0QsX, { numHours: l })
                                                : S.intl.string(v.default.RmVTph),
                                    }),
                                    (0, r.jsx)(b.Z, {
                                        variant: "heading-xxl/normal",
                                        className: I.numeric,
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
        a = (0, y.gl)();
    return (0, r.jsx)(
        y.QR,
        {
            className: T.guildContainer,
            spring: a,
            children: (0, r.jsxs)(h.Z, {
                innerClassName: T.guildBorder,
                useTopRightClipPath: !0,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.guildInfo,
                        children: [
                            (0, r.jsx)(d.Z, {
                                guild: t,
                                size: d.Z.Sizes.LARGER,
                                className: T.guildIcon,
                            }),
                            (0, r.jsx)(b.Z, {
                                className: T.guildName,
                                variant: "heading-xl/medium",
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: T.rank,
                        style: { backgroundColor: i },
                        children: (0, r.jsxs)(b.Z, {
                            variant: "text-lg/normal",
                            className: I.numeric,
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
    let e = (0, i.useContext)(p.Q),
        t = (0, u.dQu)(e.primaryColor).hex(),
        { guilds: { guilds: n } = { guilds: [] } } = (0, l.e7)([_.Z], () => _.Z.getCheckpointData()),
        a = (0, i.useMemo)(
            () =>
                n
                    .map((e) => {
                        let { guild: t, numMessagesSent: n, numVoiceMinutes: r } = e;
                        return {
                            guild: f.Z.getGuild(t.id),
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
        o = a.length > 0 ? a[0].guild : null;
    return (0, r.jsx)(E.Z, {
        verticalFlow: !0,
        children: (0, r.jsxs)("div", {
            className: T.container,
            children: [
                (0, r.jsxs)("div", {
                    className: I.title,
                    children: [
                        (0, r.jsx)(s.QTo, {
                            size: "refresh_sm",
                            color: t,
                            colorClass: I.iconColor,
                        }),
                        (0, r.jsx)(b.Z, {
                            variant: "eyebrow",
                            className: I.eyebrow,
                            children: S.intl.string(v.default.mAroeJ),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: T.header,
                    children: [
                        (0, r.jsx)(b.Z, {
                            variant: "display-lg",
                            className: T.display,
                            children: S.intl.string(S.t["7hB4kg"]),
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(b.Z, {
                                    variant: "heading-xxl/medium",
                                    className: T.subtitle,
                                    children: S.intl.string(v.default.Q0EMOP),
                                }),
                                (0, r.jsx)(g.o, { slide: O.yD.GUILDS }),
                            ],
                        }),
                    ],
                }),
                null != o &&
                    (0, r.jsx)(A, {
                        guild: o,
                        checkpointGuild: a[0],
                        primaryColor: t,
                    }),
                (0, r.jsx)("div", {
                    className: T.guilds,
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
