n.d(e, { default: () => k });
var i = n(477900),
    s = n(582128),
    r = n(738822),
    l = n(77870),
    o = n(717200);
n(321073);
var a = n(323889),
    c = n(412703),
    u = n(928264),
    d = n(17928),
    g = n(802516),
    T = n(22363),
    C = n(663417),
    O = n(507395),
    E = n(144779),
    m = n(287809),
    A = n(975571),
    _ = n(178540),
    L = n(590202),
    S = n(971649),
    f = n(684693),
    N = n(801365),
    P = n(108811),
    h = n(123292),
    I = n(52093),
    x = n(114046),
    U = n(661531),
    p = n(834730),
    W = n(653766),
    D = n(695366),
    j = n(30370),
    M = n(814793),
    X = n(105292),
    v = n(43330);
function y(t) {
    return (0, i.jsx)(p.E, { className: v.rf, color: "text-muted", variant: "text-xxs/normal", children: t.children });
}
function Y(t) {
    let { quest: e, questContent: n, sourceQuestContent: r, errorHints: l } = t,
        o = (0, S.go)(),
        { header: a, renderBody: c } = s.useMemo(() => {
            let t = l.length > 0,
                s = e.config.messages.gameTitle;
            return {
                header: t
                    ? X.intl.string(X.t["20NLWC"])
                    : (0, M.ui)(e)
                      ? X.intl.string(X.t.YstzGO)
                      : X.intl.formatToPlainString(X.t.gX0Qcx, { gameTitle: s }),
                renderBody: t
                    ? function () {
                          return (0, i.jsx)(i.Fragment, {
                              children: l.map((t, s) => {
                                  if (t.type === x._.EXPIRED_CREDENTIAL) {
                                      let l = j.A.getAccount(t.connected_account_id, t.connected_account_type),
                                          a = (0, f.IG)(t),
                                          c = (0, f.$J)(t);
                                      return (0, i.jsx)(
                                          y,
                                          {
                                              children: X.intl.format(a, {
                                                  account_name: l?.name,
                                                  onClick: () => {
                                                      (0, f.v0)(
                                                          { quest: e, platformType: c },
                                                          {
                                                              content: n,
                                                              ctaContent: L.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: o,
                                                              sourceQuestContent: r,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          s,
                                      );
                                  }
                                  return (0, i.jsx)(y, { children: t.message }, s);
                              }),
                          });
                      }
                    : () =>
                          (0, i.jsx)(p.E, {
                              className: v.rf,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, M.ui)(e)
                                  ? X.intl.string(X.t.bUyEZZ)
                                  : X.intl.format(X.t.GXqvC1, { gameTitle: s }),
                          }),
            };
        }, [l, e, o, n, r]);
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsxs)("div", {
                className: v.wx,
                children: [
                    l.length > 0
                        ? (0, i.jsx)(W.e, { size: "sm", color: U.A.colors.ICON_FEEDBACK_CRITICAL.css })
                        : (0, i.jsx)(D.E, { size: "sm", color: U.A.colors.ICON_FEEDBACK_WARNING.css }),
                    (0, i.jsx)(p.E, { variant: "text-xs/semibold", children: a }),
                ],
            }),
            c(),
        ],
    });
}
var b = n(635576);
function K(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            selectedPlatform: o,
            supportedPlatforms: a,
            isConnected: c,
            noConsoleProgress: u,
            errorHints: g,
        } = t,
        T = (0, S.go)(),
        C = (0, d.bG)([m.default], () => m.default.getCurrentUser()),
        O = (0, l.fc)(e),
        E = e.userStatus?.completedAt != null,
        A = s.useMemo(
            () => ({
                renderContent: () =>
                    (0, i.jsx)(I.L5, {
                        children: X.intl.formatToPlainString(X.t.NIimTt, {
                            gameTitle: e.config.messages.gameTitle,
                            targetMinutes: O.targetMinutes,
                            rewardNameWithArticle: (0, N.mH)(e.config, C),
                        }),
                    }),
                isComplete: E,
            }),
            [e.config, O.targetMinutes, E, C],
        ),
        _ = s.useMemo(
            () =>
                1 === a.length
                    ? [A]
                    : [
                          {
                              renderContent: () => (0, i.jsx)(I.L5, { children: X.intl.string(X.t["sI+PPN"]) }),
                              isComplete: !0,
                          },
                          A,
                      ],
            [A, a.length],
        ),
        P = s.useCallback(() => {
            (0, f.b6)(
                { quest: e },
                {
                    content: r.uF.PLAY_QUEST_MODAL,
                    ctaContent: L.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                    impressionId: T,
                    sourceQuestContent: n,
                },
            );
        }, [e, T, n]),
        x = s.useMemo(
            () => [
                {
                    renderContent: (t) =>
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(I.L5, { children: X.intl.string(t ? X.t["rmw++9"] : X.t.yqSr9m) }),
                                t &&
                                    (0, i.jsx)(h.Q, {
                                        textVariant: "text-xs/medium",
                                        onClick: P,
                                        text: X.intl.string(X.t["qiS+xj"]),
                                    }),
                            ],
                        }),
                    isComplete: c || E,
                },
                A,
            ],
            [A, E, c, P],
        ),
        U = o === f.WU.DESKTOP ? _ : x,
        p = c && (u || g.length > 0) && !E;
    return (0, i.jsx)(I.Ay, {
        heading: X.intl.string(X.t.dc9w4N),
        steps: U,
        className: b._,
        children:
            p && (0, i.jsx)(Y, { quest: e, questContent: r.uF.PLAY_QUEST_MODAL, sourceQuestContent: n, errorHints: g }),
    });
}
var Q = n(190107),
    R = n(652215);
function B(t) {
    switch (t) {
        case c.n.PLAY_ON_XBOX:
            return f.WU.XBOX;
        case c.n.PLAY_ON_PLAYSTATION:
            return f.WU.PLAYSTATION;
        case c.n.PLAY_ON_DESKTOP:
        default:
            return f.WU.DESKTOP;
    }
}
function F(t) {
    let { quest: e, sourceQuestContent: n } = t,
        o = (0, S.wW)(),
        c = (0, d.bG)([m.default], () => m.default.getCurrentUser()),
        h = s.useCallback(() => {
            (0, f.pu)(e, {
                content: r.uF.PLAY_QUEST_MODAL,
                ctaContent: L.Cy.OPEN_GAME_LINK,
                impressionId: o(),
                sourceQuestContent: n,
            });
        }, [e, o, n]),
        I = (0, l.fc)(e),
        x = s.useMemo(() => (0, f.UR)(e), [e]),
        U = s.useMemo(() => (0, f.bg)(e), [e]),
        p = I.percentComplete > 0,
        W = null;
    1 === x.length ? (W = f.WU.DESKTOP) : p && (W = B(I.taskType));
    let [D, j] = s.useState(W),
        M = D === f.WU.XBOX || D === f.WU.PLAYSTATION,
        { xboxAccounts: v, playstationAccounts: y } = (0, l.Du)(),
        Y = !1;
    M && (Y = (D === f.WU.XBOX ? v : y).length > 0);
    let b = [
            ...[{ id: Q.fO.DESKTOP, value: f.WU.DESKTOP, label: X.intl.string(X.t.g6Dr44), leading: u.I }].filter((t) =>
                x.includes(t.id),
            ),
            ...[
                { id: R.fg2.XBOX, value: f.WU.XBOX, label: X.intl.string(X.t.Nfvo72), leading: g.Y },
                { id: R.fg2.PLAYSTATION, value: f.WU.PLAYSTATION, label: X.intl.string(X.t.fFl4jo), leading: T.X },
            ].filter((t) => x.includes(Q.fO.CONSOLE) && U.includes(t.id)),
        ],
        F = [
            {
                label: X.intl.string(X.t["TWSB/5"]),
                placeholder: X.intl.string(X.t["TWSB/5"]),
                options: b,
                value: D,
                onSelectionChange: (t) => {
                    if ((j(t), null != t)) {
                        let i = t === f.WU.DESKTOP ? L.Cy.SELECT_DESKTOP_PLATFORM : L.Cy.SELECT_CONSOLE_PLATFORM;
                        (0, O.r)({
                            type: E.F.CLICK_INTERNAL,
                            adCreativeType: a.p.QUEST,
                            adCreativeId: e.id,
                            questContentCTA: i,
                            surfaceId: r.uF.PLAY_QUEST_MODAL,
                            sourceQuestContent: n,
                            impressionId: o(),
                        });
                    }
                },
                disabled: b.length <= 1,
            },
        ],
        k = (0, _.O)((t) => t.getErrorHints(e.id)),
        q = { [f.WU.XBOX]: [], [f.WU.PLAYSTATION]: [], [f.WU.DESKTOP]: [] };
    k.forEach((t) => {
        q["" === t.connected_account_type ? (D ?? f.WU.DESKTOP) : (0, f.$J)(t)].push(t);
    });
    let { startingConsoleQuest: H, startConsoleQuest: w } = (0, l.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (0, O.r)({
                    type: E.F.CLICK_INTERNAL,
                    adCreativeType: a.p.QUEST,
                    adCreativeId: e.id,
                    questContentCTA: L.Cy.DEFIBRILLATOR,
                    surfaceId: r.uF.PLAY_QUEST_MODAL,
                    sourceQuestContent: n,
                    impressionId: o(),
                });
            },
        }),
        G = X.intl.string(X.t.qQmNEy);
    if (1 === x.length && D === f.WU.DESKTOP) G = X.intl.format(X.t.Fo68kU, { gameTitle: e.config.messages.gameTitle });
    else if (
        M &&
        (Y &&
            (G = X.intl.format(X.t["0vGRCS"], {
                gameTitle: e.config.messages.gameTitle,
                targetMinutes: I.targetMinutes,
                rewardNameWithArticle: (0, N.mH)(e.config, c),
                onClickGameTitle: h,
            })),
        q[D]?.length > 0)
    ) {
        let t = A.A.getArticleURL(R.MVz.QUEST_HOW_TO_PLAYSTATION),
            e = A.A.getArticleURL(R.MVz.QUEST_HOW_TO_XBOX);
        G = X.intl.format(X.t.HVS7nh, { helpdeskArticle: D === f.WU.PLAYSTATION ? t : e });
    }
    let z = X.intl.string(X.t["Gcmjy/"]);
    return (
        M ? (z = X.intl.string(X.t["5ZilMg"])) : D === f.WU.DESKTOP && (z = X.intl.string(X.t["93tEDn"])),
        (0, i.jsx)(P.A, {
            heading: z,
            subtitle: G,
            methodSelect: F,
            ctaButton:
                D === f.WU.DESKTOP
                    ? { text: X.intl.string(X.t.E4kW5O), onClick: h }
                    : M
                      ? Y
                          ? { text: X.intl.string(X.t.nPThNb), onClick: w, loading: H, icon: C.RefreshIcon }
                          : {
                                text: X.intl.string(X.t.S0W8Z5),
                                onClick: () => {
                                    (0, f.Ps)(
                                        { quest: e },
                                        {
                                            content: r.uF.PLAY_QUEST_MODAL,
                                            ctaContent: L.Cy.CONNECT_CONSOLE,
                                            impressionId: o(),
                                            sourceQuestContent: n,
                                        },
                                        D === f.WU.XBOX ? R.fg2.XBOX : R.fg2.PLAYSTATION,
                                    );
                                },
                            }
                      : void 0,
            children:
                null != D &&
                (0, i.jsx)(K, {
                    quest: e,
                    sourceQuestContent: n,
                    selectedPlatform: D,
                    noConsoleProgress: M && D !== B(I.taskType),
                    supportedPlatforms: x,
                    isConnected: Y,
                    errorHints: q[D],
                }),
        })
    );
}
let k = function (t) {
    let { initialQuest: e, sourceQuestContent: n, transitionState: s, onClose: a } = t,
        c = (0, l.C5)(e.id) ?? e;
    return (0, i.jsx)(o.A, {
        quest: c,
        questContent: r.uF.PLAY_QUEST_MODAL,
        sourceQuestContent: n,
        ariaLabel: X.intl.string(X.t.SHZo2x),
        transitionState: s,
        onClose: a,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(F, { quest: c, sourceQuestContent: n }),
        location: Q.rE.PLAY_QUEST_CONNECTION_MODAL,
    });
};
