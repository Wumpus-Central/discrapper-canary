n.d(t, { A: () => b });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(382222),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(770178),
    _ = n(765548),
    m = n(341915),
    h = n(890687),
    p = n(918338),
    g = n(270045),
    A = n(57718),
    x = n(847641),
    f = n(398025);
n(433745);
var C = n(818348),
    I = n(985018),
    E = n(798324);
let b = (e) => {
    let {
            isQuestExpired: t,
            quest: n,
            location: r,
            size: b,
            expansionSpring: v,
            isAnimating: T,
            isExpanded: y,
            isInteracting: S,
            contentPosition: N,
            toggleExpanded: j,
            sourceQuestContent: L,
        } = e,
        [R, P] = a.useState(null),
        [w, M] = a.useState(null),
        D = (0, _.A)((e) => {
            let t = e.target;
            P(t.offsetWidth), M(t.scrollWidth);
        }),
        k = (0, u.w)(D),
        O = r === m.uF.QUESTS_EMBED,
        U = n.userStatus?.completedAt != null,
        B = (0, h.S5)(n.config.expiresAt),
        G = (0, h.S5)(n.config.rewardsConfig.rewardsExpireAt),
        F = a.useMemo(() => null != n.config.cosponsorMetadata, [n]),
        H = (0, i.jsx)(A.Ay, {
            className: E.Iu,
            logotypeClassName: F ? E.qN : void 0,
            gameTileSize: A.LU.MEDIUM,
            quest: n,
            separatorSpacing: A.C8.MEDIUM,
            theme: C.NJ.DARK,
            withGameTile: !O || null == n.config.cosponsorMetadata,
        });
    return (0, i.jsxs)("div", {
        className: l()(E.nw, { [E.Gg]: O, [E.e5]: "xs" === b }),
        "aria-label": I.intl.string(I.t.dcl9MQ),
        children: [
            (0, i.jsx)(p.A, {
                quest: n,
                isInteracting: S,
                containerClassName: E.v7,
                imageSize: { width: 660, height: 185 },
                imageClassName: E.Z5,
            }),
            (0, i.jsxs)("div", {
                className: E.wx,
                "aria-expanded": y,
                children: [
                    (0, i.jsx)(s.animated.div, {
                        className: l()(E.VW, { [E.eX]: O }),
                        children: (0, i.jsx)(s.animated.div, {
                            className: l()(E.Yu, { [E.Gg]: O }),
                            style: {
                                opacity: (0, f.a)(v.to({ range: [0, 1], output: [0, 1] })),
                                visibility: T || y ? "inherit" : "hidden",
                            },
                            "aria-hidden": !T && !y,
                            children: (0, i.jsxs)("div", {
                                className: E.uA,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: E._V,
                                        children: [H, O ? null : (0, i.jsx)(x.A, { color: "always-white" })],
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: E.P9,
                                        children: [
                                            (0, i.jsx)(d.m, {
                                                __unsupportedReactNodeAsText: n.config.messages.questName,
                                                shouldShow: null != R && null != w && R < w,
                                                children: (0, i.jsx)(c.Heading, {
                                                    ref: k,
                                                    variant:
                                                        "lg" === b
                                                            ? "heading-xxl/bold"
                                                            : "sm" === b
                                                              ? "heading-xl/bold"
                                                              : "heading-lg/bold",
                                                    className: E.R_,
                                                    color: "always-white",
                                                    children: I.intl.format(I.t.EAYZAr, {
                                                        questName: n.config.messages.questName,
                                                    }),
                                                }),
                                            }),
                                            (0, i.jsx)(c.Text, {
                                                variant: "text-xs/normal",
                                                color: "always-white",
                                                children: U
                                                    ? I.intl.formatToPlainString(I.t.APddvF, { expirationDate: G })
                                                    : t
                                                      ? I.intl.formatToPlainString(I.t.v7xMw7, { expirationDate: B })
                                                      : I.intl.formatToPlainString(I.t["pX+fmn"], {
                                                            expirationDate: B,
                                                        }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, i.jsx)(s.animated.div, {
                        className: E._q,
                        style: { top: 20 },
                        children: (0, i.jsx)(g.C, {
                            questContent: r,
                            quest: n,
                            questContentPosition: N,
                            shouldShowDisclosure: !0,
                            showShareLink: !t && O,
                            sourceQuestContent: L,
                            children: (e) =>
                                (0, i.jsx)(s.animated.div, {
                                    style: { opacity: (0, f.a)(v), visibility: T || y ? "inherit" : "hidden" },
                                    "aria-hidden": !T && !y,
                                    children: (0, i.jsx)(c.DUT, {
                                        ...e,
                                        className: E.P0,
                                        "aria-label": I.intl.string(I.t.DEoVWZ),
                                        children: (0, i.jsx)(c.jNK, { size: "md", color: o.A.colors.WHITE }),
                                    }),
                                }),
                        }),
                    }),
                ],
            }),
        ],
    });
};
