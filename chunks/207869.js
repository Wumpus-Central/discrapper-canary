n.d(t, { f: () => w });
var i = n(627968),
    s = n(64700),
    l = n(821609),
    a = n(408278),
    r = n(862482),
    o = n(921853),
    d = n(793574),
    c = n(979286),
    u = n(341915),
    p = n(714510),
    h = n(890687),
    m = n(590202),
    _ = n(971649),
    A = n(651892),
    f = n(901406),
    g = n(92246),
    x = n(792620),
    E = n(814793),
    C = n(753386),
    T = n(201805),
    v = n(545986),
    S = n(194267),
    b = n(963713),
    j = n(758836),
    I = n(985018),
    R = n(519508);
function N(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, i.jsx)(l.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? m.Cy.ACCEPT_QUEST : m.Cy.WATCH_VIDEO;
            (0, v.d5)({ quest: t, questContent: u.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, C.WM)(s),
    });
}
let y = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, _.go)(),
            a = (0, A.wr)(t);
        return (0, i.jsx)(l.$, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, f.pu)(t, {
                    content: u.uF.QUEST_BAR_V2,
                    ctaContent: m.Cy.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: a,
        });
    },
    M = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, _.vU)()?.getId();
        return (0, i.jsx)(l.$, {
            fullWidth: !0,
            onClick: () =>
                (0, f.se)(
                    { quest: t },
                    {
                        content: u.uF.QUEST_BAR_V2,
                        ctaContent: m.Cy.CONNECT_CONSOLE,
                        impressionId: s,
                        sourceQuestContent: n,
                    },
                ),
            size: "sm",
            text: I.intl.string(I.t.csptqV),
        });
    },
    O = (e) => {
        let { quest: t } = e,
            n = (0, p.NA)({ quest: t }),
            { launchInGameActivity: s } = (0, h.zW)(t);
        return (0, E.vA)(t)
            ? (0, i.jsx)(l.$, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, v.Oz)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    U = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: a,
                onGameSheetOpened: r,
                onGameSheetClosed: o,
            } = e,
            { applications: d } = s;
        return (0, i.jsx)(S.A, {
            quest: t,
            sourceQuestContent: n,
            applications: d ?? [],
            targetElementRef: a,
            onGameSheetOpened: r,
            onGameSheetClosed: o,
            children: (e) =>
                (0, i.jsx)(l.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: I.intl.string(I.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    k = (e) => {
        let { quest: t, ctaLabel: n, onClick: a, questContent: o = u.uF.QUEST_BAR_V2, sourceQuestContent: p, ...h } = e,
            m = (0, T.ix)({ quest: t, questContent: o, sourceQuestContent: p }),
            _ = s.useCallback(
                (e) => {
                    a?.(e),
                        (0, g.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, c.Cz)({
                                  tab: j.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: d.A.QUEST_HOME_PAGE,
                              })
                            : m();
                },
                [a, t.config, t.userStatus?.claimedAt, m],
            );
        return (0, i.jsx)(l.$, {
            fullWidth: !0,
            onClick: _,
            text: n ?? I.intl.string(I.t.cfY4PE),
            ...h,
            size: h.size === r.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    P = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: l,
                isProgressing: a,
                activeScreen: r,
                popoutTargetElementRef: o,
            } = e,
            { quest: d, onGameSheetOpen: c, onGameSheetClose: p, taskDetails: h } = s.useContext(b.T),
            m = d.userStatus?.completedAt != null,
            _ = (0, x.vv)(d),
            A = r !== u.X0.SELECT && !l && !a,
            f = null;
        return (
            m
                ? (f = (0, i.jsx)(k, { quest: d, sourceQuestContent: t }))
                : _
                  ? (f = (0, i.jsx)(N, { quest: d, sourceQuestContent: t, taskDetails: h }))
                  : (0, E.vA)(d)
                    ? (f = (0, i.jsx)(O, { quest: d }))
                    : r === u.X0.CONSOLE && n
                      ? (f = (0, i.jsx)(M, { quest: d, sourceQuestContent: t }))
                      : A && (0, E.ui)(d)
                        ? (f = (0, i.jsx)(U, {
                              quest: d,
                              sourceQuestContent: t,
                              taskDetails: h,
                              popoutTargetElementRef: o,
                              onGameSheetOpened: c,
                              onGameSheetClosed: p,
                          }))
                        : A && (f = (0, i.jsx)(y, { quest: d, sourceQuestContent: t })),
            null == f ? null : (0, i.jsx)("div", { className: R.lO, children: f })
        );
    };
function w(e) {
    let t = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: R.oG,
        ref: t,
        children: [
            e.showBackButton &&
                (0, i.jsx)(a.K, {
                    size: "sm",
                    "aria-label": I.intl.string(I.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: o.n,
                    variant: "secondary",
                }),
            (0, i.jsx)(P, { ...e, popoutTargetElementRef: t }),
        ],
    });
}
