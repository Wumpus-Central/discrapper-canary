n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(419354),
    o = n(827734),
    d = n(990078),
    c = n(534514),
    u = n(834730),
    m = n(939249),
    _ = n(365199),
    h = n(770178),
    p = n(765548),
    g = n(341915),
    A = n(890687),
    f = n(918338),
    x = n(270045),
    C = n(57718),
    E = n(847641),
    I = n(398025);
n(433745);
var v = n(818348),
    b = n(985018),
    T = n(237732);
let S = (e) => {
    let {
            isQuestExpired: t,
            quest: n,
            location: a,
            size: S,
            expansionSpring: y,
            isAnimating: N,
            isExpanded: j,
            isInteracting: L,
            contentPosition: R,
            toggleExpanded: P,
            sourceQuestContent: w,
        } = e,
        [D, k] = l.useState(null),
        [O, M] = l.useState(null),
        U = (0, p.A)((e) => {
            let t = e.target;
            k(t.offsetWidth), M(t.scrollWidth);
        }),
        G = (0, h.w)(U),
        B = a === g.uF.QUESTS_EMBED,
        F = n.userStatus?.completedAt != null,
        H = (0, A.S5)(n.config.expiresAt),
        V = (0, A.S5)(n.config.rewardsConfig.rewardsExpireAt),
        q = l.useMemo(() => null != n.config.cosponsorMetadata, [n]),
        W = (0, i.jsx)(C.Ay, {
            className: T.Iu,
            logotypeClassName: q ? T.qN : void 0,
            gameTileSize: C.LU.MEDIUM,
            quest: n,
            separatorSpacing: C.C8.MEDIUM,
            theme: v.NJ.DARK,
            withGameTile: !B || null == n.config.cosponsorMetadata,
        });
    return (0, i.jsxs)("div", {
        className: s()(T.nw, { [T.Gg]: B, [T.e5]: "xs" === S }),
        "aria-label": b.intl.string(b.t.dcl9MQ),
        children: [
            (0, i.jsx)(f.A, {
                quest: n,
                isInteracting: L,
                containerClassName: T.v7,
                imageSize: { width: 660, height: 185 },
                imageClassName: T.Z5,
            }),
            (0, i.jsxs)("div", {
                className: T.wx,
                "aria-expanded": j,
                children: [
                    (0, i.jsx)(r.animated.div, {
                        className: s()(T.VW, { [T.eX]: B }),
                        children: (0, i.jsx)(r.animated.div, {
                            className: s()(T.Yu, { [T.Gg]: B }),
                            style: {
                                opacity: (0, I.a)(y.to({ range: [0, 1], output: [0, 1] })),
                                visibility: N || j ? "inherit" : "hidden",
                            },
                            "aria-hidden": !N && !j,
                            children: (0, i.jsxs)("div", {
                                className: T.uA,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: T._V,
                                        children: [W, B ? null : (0, i.jsx)(E.A, { color: "always-white" })],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: T.P9,
                                        children: [
                                            (0, i.jsx)(d.m, {
                                                __unsupportedReactNodeAsText: n.config.messages.questName,
                                                shouldShow: null != D && null != O && D < O,
                                                children: (0, i.jsx)(c.D, {
                                                    ref: G,
                                                    variant:
                                                        "lg" === S
                                                            ? "heading-xxl/bold"
                                                            : "sm" === S
                                                              ? "heading-xl/bold"
                                                              : "heading-lg/bold",
                                                    className: T.R_,
                                                    color: "always-white",
                                                    children: b.intl.format(b.t.EAYZAr, {
                                                        questName: n.config.messages.questName,
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "always-white",
                                                children: F
                                                    ? b.intl.formatToPlainString(b.t.APddvF, { expirationDate: V })
                                                    : t
                                                      ? b.intl.formatToPlainString(b.t.v7xMw7, { expirationDate: H })
                                                      : b.intl.formatToPlainString(b.t["pX+fmn"], {
                                                            expirationDate: H,
                                                        }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: T._q,
                        style: { top: 20 },
                        children: (0, i.jsx)(x.C, {
                            questContent: a,
                            quest: n,
                            questContentPosition: R,
                            shouldShowDisclosure: !0,
                            showShareLink: !t && B,
                            sourceQuestContent: w,
                            children: (e) =>
                                (0, i.jsx)(r.animated.div, {
                                    style: { opacity: (0, I.a)(y), visibility: N || j ? "inherit" : "hidden" },
                                    "aria-hidden": !N && !j,
                                    children: (0, i.jsx)(m.D, {
                                        ...e,
                                        className: T.P0,
                                        "aria-label": b.intl.string(b.t.DEoVWZ),
                                        children: (0, i.jsx)(_.j, { size: "md", color: o.A.colors.WHITE }),
                                    }),
                                }),
                        }),
                    }),
                ],
            }),
        ],
    });
};
