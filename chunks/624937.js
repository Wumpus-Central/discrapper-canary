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
    f = n(620954),
    N = n(801365),
    P = n(108811),
    h = n(123292),
    I = n(52093),
    U = n(114046),
    p = n(661531),
    x = n(834730),
    W = n(653766),
    D = n(695366),
    j = n(30370),
    y = n(814793),
    M = n(105292),
    X = n(43330);
function v(t) {
    return (0, i.jsx)(x.E, { className: X.rf, color: "text-muted", variant: "footnote/normal", children: t.children });
}
function Y(t) {
    let { quest: e, questContent: n, sourceQuestContent: r, errorHints: l } = t,
        o = (0, S.go)(),
        { header: a, renderBody: c } = s.useMemo(() => {
            let t = l.length > 0,
                s = e.config.messages.gameTitle;
            return {
                header: t
                    ? M.intl.string(M.t["20NLWC"])
                    : (0, y.ui)(e)
                      ? M.intl.string(M.t.YstzGO)
                      : M.intl.formatToPlainString(M.t.gX0Qcx, { gameTitle: s }),
                renderBody: t
                    ? function () {
                          return (0, i.jsx)(i.Fragment, {
                              children: l.map((t, s) => {
                                  if (t.type === U._.EXPIRED_CREDENTIAL) {
                                      let l = j.A.getAccount(t.connected_account_id, t.connected_account_type),
                                          a = (0, f.IG)(t),
                                          c = (0, f.$J)(t);
                                      return (0, i.jsx)(
                                          v,
                                          {
                                              children: M.intl.format(a, {
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
                                  return (0, i.jsx)(v, { children: t.message }, s);
                              }),
                          });
                      }
                    : () =>
                          (0, i.jsx)(x.E, {
                              className: X.rf,
                              color: "text-muted",
                              variant: "footnote/normal",
                              children: (0, y.ui)(e)
                                  ? M.intl.string(M.t.bUyEZZ)
                                  : M.intl.format(M.t.GXqvC1, { gameTitle: s }),
                          }),
            };
        }, [l, e, o, n, r]);
    return (0, i.jsxs)("div", {
        className: X.kL,
        children: [
            (0, i.jsxs)("div", {
                className: X.wx,
                children: [
                    l.length > 0
                        ? (0, i.jsx)(W.e, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL.css })
                        : (0, i.jsx)(D.E, { size: "sm", color: p.A.colors.ICON_FEEDBACK_WARNING.css }),
                    (0, i.jsx)(x.E, { variant: "body-xs/semibold", children: a }),
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
                        children: M.intl.formatToPlainString(M.t.NIimTt, {
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
                              renderContent: () => (0, i.jsx)(I.L5, { children: M.intl.string(M.t["sI+PPN"]) }),
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
        U = s.useMemo(
            () => [
                {
                    renderContent: (t) =>
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(I.L5, { children: M.intl.string(t ? M.t["rmw++9"] : M.t.yqSr9m) }),
                                t &&
                                    (0, i.jsx)(h.Q, {
                                        textVariant: "body-xs/medium",
                                        onClick: P,
                                        text: M.intl.string(M.t["qiS+xj"]),
                                    }),
                            ],
                        }),
                    isComplete: c || E,
                },
                A,
            ],
            [A, E, c, P],
        ),
        p = o === f.WU.DESKTOP ? _ : U,
        x = c && (u || g.length > 0) && !E;
    return (0, i.jsx)(I.Ay, {
        heading: M.intl.string(M.t.dc9w4N),
        steps: p,
        className: b._,
        children:
            x && (0, i.jsx)(Y, { quest: e, questContent: r.uF.PLAY_QUEST_MODAL, sourceQuestContent: n, errorHints: g }),
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
        U = s.useMemo(() => (0, f.UR)(e), [e]),
        p = s.useMemo(() => (0, f.bg)(e), [e]),
        x = I.percentComplete > 0,
        W = null;
    1 === U.length ? (W = f.WU.DESKTOP) : x && (W = B(I.taskType));
    let [D, j] = s.useState(W),
        y = D === f.WU.XBOX || D === f.WU.PLAYSTATION,
        { xboxAccounts: X, playstationAccounts: v } = (0, l.Du)(),
        Y = !1;
    y && (Y = (D === f.WU.XBOX ? X : v).length > 0);
    let b = [
            ...[{ id: Q.fO.DESKTOP, value: f.WU.DESKTOP, label: M.intl.string(M.t.g6Dr44), leading: u.I }].filter((t) =>
                U.includes(t.id),
            ),
            ...[
                { id: R.fg2.XBOX, value: f.WU.XBOX, label: M.intl.string(M.t.Nfvo72), leading: g.Y },
                { id: R.fg2.PLAYSTATION, value: f.WU.PLAYSTATION, label: M.intl.string(M.t.fFl4jo), leading: T.X },
            ].filter((t) => U.includes(Q.fO.CONSOLE) && p.includes(t.id)),
        ],
        F = [
            {
                label: M.intl.string(M.t["TWSB/5"]),
                placeholder: M.intl.string(M.t["TWSB/5"]),
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
        G = M.intl.string(M.t.qQmNEy);
    if (1 === U.length && D === f.WU.DESKTOP) G = M.intl.format(M.t.Fo68kU, { gameTitle: e.config.messages.gameTitle });
    else if (
        y &&
        (Y &&
            (G = M.intl.format(M.t["0vGRCS"], {
                gameTitle: e.config.messages.gameTitle,
                targetMinutes: I.targetMinutes,
                rewardNameWithArticle: (0, N.mH)(e.config, c),
                onClickGameTitle: h,
            })),
        q[D]?.length > 0)
    ) {
        let t = A.A.getArticleURL(R.MVz.QUEST_HOW_TO_PLAYSTATION),
            e = A.A.getArticleURL(R.MVz.QUEST_HOW_TO_XBOX);
        G = M.intl.format(M.t.HVS7nh, { helpdeskArticle: D === f.WU.PLAYSTATION ? t : e });
    }
    let z = M.intl.string(M.t["Gcmjy/"]);
    return (
        y ? (z = M.intl.string(M.t["5ZilMg"])) : D === f.WU.DESKTOP && (z = M.intl.string(M.t["93tEDn"])),
        (0, i.jsx)(P.A, {
            heading: z,
            subtitle: G,
            methodSelect: F,
            ctaButton:
                D === f.WU.DESKTOP
                    ? { text: M.intl.string(M.t.E4kW5O), onClick: h }
                    : y
                      ? Y
                          ? { text: M.intl.string(M.t.nPThNb), onClick: w, loading: H, icon: C.RefreshIcon }
                          : {
                                text: M.intl.string(M.t.S0W8Z5),
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
                    noConsoleProgress: y && D !== B(I.taskType),
                    supportedPlatforms: U,
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
        ariaLabel: M.intl.string(M.t.SHZo2x),
        transitionState: s,
        onClose: a,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(F, { quest: c, sourceQuestContent: n }),
        location: Q.rE.PLAY_QUEST_CONNECTION_MODAL,
    });
};
