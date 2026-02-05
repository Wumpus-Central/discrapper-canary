n.d(t, { f: () => M });
var a = n(627968),
    s = n(64700),
    i = n(732955),
    l = n(421380),
    r = n(397927),
    o = n(793574),
    d = n(979286),
    c = n(341915),
    u = n(714510),
    m = n(890687),
    h = n(590202),
    x = n(971649),
    p = n(651892),
    g = n(901406),
    _ = n(92246),
    f = n(792620),
    v = n(814793),
    b = n(753386),
    j = n(201805),
    A = n(545986),
    C = n(194267),
    S = n(963713),
    T = n(758836),
    y = n(985018),
    N = n(703653);
function E(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, a.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? h.Cy.ACCEPT_QUEST : h.Cy.WATCH_VIDEO;
            (0, A.d5)({ quest: t, questContent: c.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, b.WM)(s),
    });
}
let I = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, x.go)(),
            l = (0, p.wr)(t);
        return (0, a.jsx)(i.$nd, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, g.pu)(t, {
                    content: c.uF.QUEST_BAR_V2,
                    ctaContent: h.Cy.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: l,
        });
    },
    k = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, x.vU)()?.getId();
        return (0, a.jsx)(i.$nd, {
            fullWidth: !0,
            onClick: () =>
                (0, g.se)(
                    { quest: t },
                    {
                        content: c.uF.QUEST_BAR_V2,
                        ctaContent: h.Cy.CONNECT_CONSOLE,
                        impressionId: s,
                        sourceQuestContent: n,
                    },
                ),
            size: "sm",
            text: y.intl.string(y.t.csptqV),
        });
    },
    R = (e) => {
        let { quest: t } = e,
            n = (0, u.NA)({ quest: t }),
            { launchInGameActivity: s } = (0, m.zW)(t);
        return (0, v.vA)(t)
            ? (0, a.jsx)(i.$nd, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, A.Oz)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    O = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: l,
                onGameSheetOpened: r,
                onGameSheetClosed: o,
            } = e,
            { applications: d } = s;
        return (0, a.jsx)(C.A, {
            quest: t,
            sourceQuestContent: n,
            applications: d ?? [],
            targetElementRef: l,
            onGameSheetOpened: r,
            onGameSheetClosed: o,
            children: (e) =>
                (0, a.jsx)(i.$nd, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: y.intl.string(y.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    w = (e) => {
        let { quest: t, ctaLabel: n, onClick: r, questContent: u = c.uF.QUEST_BAR_V2, sourceQuestContent: m, ...h } = e,
            x = (0, j.ix)({ quest: t, questContent: u, sourceQuestContent: m }),
            p = s.useCallback(
                (e) => {
                    r?.(e),
                        (0, _.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, d.Cz)({
                                  tab: T.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: o.A.QUEST_HOME_PAGE,
                              })
                            : x();
                },
                [r, t.config, t.userStatus?.claimedAt, x],
            );
        return (0, a.jsx)(i.$nd, {
            fullWidth: !0,
            onClick: p,
            text: n ?? y.intl.string(y.t.cfY4PE),
            ...h,
            size: h.size === l.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    D = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: i,
                isProgressing: l,
                activeScreen: r,
                popoutTargetElementRef: o,
            } = e,
            { quest: d, onGameSheetOpen: u, onGameSheetClose: m, taskDetails: h } = s.useContext(S.T),
            x = d.userStatus?.completedAt != null,
            p = (0, f.vv)(d),
            g = r !== c.X0.SELECT && !i && !l,
            _ = null;
        return (
            x
                ? (_ = (0, a.jsx)(w, { quest: d, sourceQuestContent: t }))
                : p
                  ? (_ = (0, a.jsx)(E, { quest: d, sourceQuestContent: t, taskDetails: h }))
                  : (0, v.vA)(d)
                    ? (_ = (0, a.jsx)(R, { quest: d }))
                    : r === c.X0.CONSOLE && n
                      ? (_ = (0, a.jsx)(k, { quest: d, sourceQuestContent: t }))
                      : g && (0, v.ui)(d)
                        ? (_ = (0, a.jsx)(O, {
                              quest: d,
                              sourceQuestContent: t,
                              taskDetails: h,
                              popoutTargetElementRef: o,
                              onGameSheetOpened: u,
                              onGameSheetClosed: m,
                          }))
                        : g && (_ = (0, a.jsx)(I, { quest: d, sourceQuestContent: t })),
            null == _ ? null : (0, a.jsx)("div", { className: N.lO, children: _ })
        );
    };
function M(e) {
    let t = s.useRef(null);
    return (0, a.jsxs)("div", {
        className: N.oG,
        ref: t,
        children: [
            e.showBackButton &&
                (0, a.jsx)(i.K0, {
                    size: "sm",
                    "aria-label": y.intl.string(y.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: r.n2b,
                    variant: "secondary",
                }),
            (0, a.jsx)(D, { ...e, popoutTargetElementRef: t }),
        ],
    });
}
