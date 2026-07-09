n.d(e, { default: () => B });
var i = n(627968),
    s = n(64700),
    l = n(24001),
    r = n(347135),
    a = n(717200),
    o = n(323889),
    u = n(412703),
    c = n(928264),
    d = n(802516),
    C = n(22363),
    T = n(17928),
    g = n(663417),
    O = n(274670),
    _ = n(144779),
    E = n(287809),
    A = n(975571),
    L = n(104886),
    m = n(18437),
    S = n(590202),
    N = n(971649),
    f = n(901406),
    I = n(801365),
    P = n(108811),
    h = n(123292),
    x = n(52093),
    U = n(114046),
    p = n(661531),
    D = n(834730),
    W = n(653766),
    M = n(695366),
    j = n(30370),
    y = n(814793),
    X = n(375708),
    Y = n(876043);
function R(t) {
    return (0, i.jsx)(D.E, { className: Y.rf, color: "text-muted", variant: "text-xxs/normal", children: t.children });
}
function v(t) {
    let { quest: e, questContent: n, sourceQuestContent: l, errorHints: r } = t,
        a = (0, N.go)(),
        { header: o, renderBody: u } = s.useMemo(() => {
            let t = r.length > 0,
                s = e.config.messages.gameTitle;
            return {
                header: t
                    ? X.intl.string(X.t["20NLWC"])
                    : (0, y.ui)(e)
                      ? X.intl.string(X.t.YstzGO)
                      : X.intl.formatToPlainString(X.t.gX0Qcx, { gameTitle: s }),
                renderBody: t
                    ? function () {
                          return (0, i.jsx)(i.Fragment, {
                              children: r.map((t, s) => {
                                  if (t.type === U._.EXPIRED_CREDENTIAL) {
                                      let r = j.A.getAccount(t.connected_account_id, t.connected_account_type),
                                          o = (0, f.IG)(t),
                                          u = (0, f.$J)(t);
                                      return (0, i.jsx)(
                                          R,
                                          {
                                              children: X.intl.format(o, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, f.v0)(
                                                          { quest: e, platformType: u },
                                                          {
                                                              content: n,
                                                              ctaContent: S.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: a,
                                                              sourceQuestContent: l,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          s,
                                      );
                                  }
                                  return (0, i.jsx)(R, { children: t.message }, s);
                              }),
                          });
                      }
                    : () =>
                          (0, i.jsx)(D.E, {
                              className: Y.rf,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, y.ui)(e)
                                  ? X.intl.string(X.t.bUyEZZ)
                                  : X.intl.format(X.t.GXqvC1, { gameTitle: s }),
                          }),
            };
        }, [r, e, a, n, l]);
    return (0, i.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, i.jsxs)("div", {
                className: Y.wx,
                children: [
                    r.length > 0
                        ? (0, i.jsx)(W.e, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL.css })
                        : (0, i.jsx)(M.E, { size: "sm", color: p.A.colors.ICON_FEEDBACK_WARNING.css }),
                    (0, i.jsx)(D.E, { variant: "text-xs/semibold", children: o }),
                ],
            }),
            u(),
        ],
    });
}
var q = n(730177);
function F(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            selectedPlatform: a,
            supportedPlatforms: o,
            isConnected: u,
            noConsoleProgress: c,
            errorHints: d,
        } = t,
        C = (0, N.go)(),
        g = (0, T.bG)([E.default], () => E.default.getCurrentUser()),
        O = (0, r.fc)(e),
        _ = e.userStatus?.completedAt != null,
        A = s.useMemo(
            () => ({
                renderContent: () =>
                    (0, i.jsx)(x.L5, {
                        children: X.intl.formatToPlainString(X.t.NIimTt, {
                            gameTitle: e.config.messages.gameTitle,
                            targetMinutes: O.targetMinutes,
                            rewardNameWithArticle: (0, I.mH)(e.config, g),
                        }),
                    }),
                isComplete: _,
            }),
            [e.config, O.targetMinutes, _, g],
        ),
        L = s.useMemo(
            () =>
                1 === o.length
                    ? [A]
                    : [
                          {
                              renderContent: () => (0, i.jsx)(x.L5, { children: X.intl.string(X.t["sI+PPN"]) }),
                              isComplete: !0,
                          },
                          A,
                      ],
            [A, o.length],
        ),
        m = s.useCallback(() => {
            (0, f.b6)(
                { quest: e },
                {
                    content: l.uF.PLAY_QUEST_MODAL,
                    ctaContent: S.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                    impressionId: C,
                    sourceQuestContent: n,
                },
            );
        }, [e, C, n]),
        P = s.useMemo(
            () => [
                {
                    renderContent: (t) =>
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(x.L5, { children: X.intl.string(t ? X.t["rmw++9"] : X.t.yqSr9m) }),
                                t &&
                                    (0, i.jsx)(h.Q, {
                                        textVariant: "text-xs/medium",
                                        onClick: m,
                                        text: X.intl.string(X.t["qiS+xj"]),
                                    }),
                            ],
                        }),
                    isComplete: u || _,
                },
                A,
            ],
            [A, _, u, m],
        ),
        U = a === f.WU.DESKTOP ? L : P,
        p = u && (c || d.length > 0) && !_;
    return (0, i.jsx)(x.Ay, {
        heading: X.intl.string(X.t.dc9w4N),
        steps: U,
        className: q._,
        children:
            p && (0, i.jsx)(v, { quest: e, questContent: l.uF.PLAY_QUEST_MODAL, sourceQuestContent: n, errorHints: d }),
    });
}
var Q = n(190107),
    K = n(652215);
function b(t) {
    switch (t) {
        case u.n.PLAY_ON_XBOX:
            return f.WU.XBOX;
        case u.n.PLAY_ON_PLAYSTATION:
            return f.WU.PLAYSTATION;
        case u.n.PLAY_ON_DESKTOP:
        default:
            return f.WU.DESKTOP;
    }
}
function k(t) {
    let { quest: e, sourceQuestContent: n } = t,
        a = (0, N.wW)(),
        u = (0, m.Ut)(),
        h = (0, T.bG)([E.default], () => E.default.getCurrentUser()),
        x = s.useCallback(() => {
            (0, f.pu)(e, {
                content: l.uF.PLAY_QUEST_MODAL,
                ctaContent: S.Cy.OPEN_GAME_LINK,
                impressionId: a(),
                sourceQuestContent: n,
            });
        }, [e, a, n]),
        U = (0, r.fc)(e),
        p = s.useMemo(() => (0, f.UR)(e), [e]),
        D = s.useMemo(() => (0, f.bg)(e), [e]),
        W = U.percentComplete > 0,
        M = null;
    1 === p.length ? (M = f.WU.DESKTOP) : W && (M = b(U.taskType));
    let [j, y] = s.useState(M),
        Y = j === f.WU.XBOX || j === f.WU.PLAYSTATION,
        { xboxAccounts: R, playstationAccounts: v } = (0, r.Du)(),
        q = !1;
    Y && (q = (j === f.WU.XBOX ? R : v).length > 0);
    let k = [
            ...[{ id: Q.fO.DESKTOP, value: f.WU.DESKTOP, label: X.intl.string(X.t.g6Dr44), leading: c.I }].filter((t) =>
                p.includes(t.id),
            ),
            ...[
                { id: K.fg2.XBOX, value: f.WU.XBOX, label: X.intl.string(X.t.Nfvo72), leading: d.Y },
                { id: K.fg2.PLAYSTATION, value: f.WU.PLAYSTATION, label: X.intl.string(X.t.fFl4jo), leading: C.X },
            ].filter((t) => p.includes(Q.fO.CONSOLE) && D.includes(t.id)),
        ],
        B = [
            {
                label: X.intl.string(X.t["TWSB/5"]),
                placeholder: X.intl.string(X.t["TWSB/5"]),
                options: k,
                value: j,
                onSelectionChange: (t) => {
                    if ((y(t), null != t)) {
                        let i = t === f.WU.DESKTOP ? S.Cy.SELECT_DESKTOP_PLATFORM : S.Cy.SELECT_CONSOLE_PLATFORM;
                        (0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "play_quest_modal_left_panel")
                            ? (0, O.r)({
                                  type: _.F.CLICK_INTERNAL,
                                  adCreativeType: o.p.QUEST,
                                  adCreativeId: e.id,
                                  questContentCTA: i,
                                  surfaceId: l.uF.PLAY_QUEST_MODAL,
                                  sourceQuestContent: n,
                                  impressionId: a(),
                              })
                            : u({
                                  questId: e.id,
                                  questContent: l.uF.PLAY_QUEST_MODAL,
                                  questContentCTA: i,
                                  sourceQuestContent: n,
                              });
                    }
                },
                disabled: k.length <= 1,
            },
        ],
        [w, G] = s.useState({ [f.WU.XBOX]: [], [f.WU.PLAYSTATION]: [], [f.WU.DESKTOP]: [] }),
        { startingConsoleQuest: H, startConsoleQuest: z } = (0, r.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (0, L.E5)(L.kI.STEP_2_CLICKED_INTERNAL, "play_quest_modal_left_panel")
                    ? (0, O.r)({
                          type: _.F.CLICK_INTERNAL,
                          adCreativeType: o.p.QUEST,
                          adCreativeId: e.id,
                          questContentCTA: S.Cy.DEFIBRILLATOR,
                          surfaceId: l.uF.PLAY_QUEST_MODAL,
                          sourceQuestContent: n,
                          impressionId: a(),
                      })
                    : u({
                          questId: e.id,
                          questContent: l.uF.PLAY_QUEST_MODAL,
                          questContentCTA: S.Cy.DEFIBRILLATOR,
                          sourceQuestContent: n,
                      });
            },
            afterRequest: (t) => {
                G((e) => ({ ...e, [j]: t }));
            },
        }),
        V = X.intl.string(X.t.qQmNEy);
    if (1 === p.length && j === f.WU.DESKTOP) V = X.intl.format(X.t.Fo68kU, { gameTitle: e.config.messages.gameTitle });
    else if (
        Y &&
        (q &&
            (V = X.intl.format(X.t["0vGRCS"], {
                gameTitle: e.config.messages.gameTitle,
                targetMinutes: U.targetMinutes,
                rewardNameWithArticle: (0, I.mH)(e.config, h),
                onClickGameTitle: x,
            })),
        w[j]?.length > 0)
    ) {
        let t = A.A.getArticleURL(K.MVz.QUEST_HOW_TO_PLAYSTATION),
            e = A.A.getArticleURL(K.MVz.QUEST_HOW_TO_XBOX);
        V = X.intl.format(X.t.HVS7nh, { helpdeskArticle: j === f.WU.PLAYSTATION ? t : e });
    }
    let Z = X.intl.string(X.t["Gcmjy/"]);
    return (
        Y ? (Z = X.intl.string(X.t["5ZilMg"])) : j === f.WU.DESKTOP && (Z = X.intl.string(X.t["93tEDn"])),
        (0, i.jsx)(P.A, {
            heading: Z,
            subtitle: V,
            methodSelect: B,
            ctaButton:
                j === f.WU.DESKTOP
                    ? { text: X.intl.string(X.t.E4kW5O), onClick: x }
                    : Y
                      ? q
                          ? { text: X.intl.string(X.t.nPThNb), onClick: z, loading: H, icon: g.f }
                          : {
                                text: X.intl.string(X.t.S0W8Z5),
                                onClick: () => {
                                    (0, f.Ps)(
                                        { quest: e },
                                        {
                                            content: l.uF.PLAY_QUEST_MODAL,
                                            ctaContent: S.Cy.CONNECT_CONSOLE,
                                            impressionId: a(),
                                            sourceQuestContent: n,
                                        },
                                        j === f.WU.XBOX ? K.fg2.XBOX : K.fg2.PLAYSTATION,
                                    );
                                },
                            }
                      : void 0,
            children:
                null != j &&
                (0, i.jsx)(F, {
                    quest: e,
                    sourceQuestContent: n,
                    selectedPlatform: j,
                    noConsoleProgress: Y && j !== b(U.taskType),
                    supportedPlatforms: p,
                    isConnected: q,
                    errorHints: w[j],
                }),
        })
    );
}
let B = function (t) {
    let { initialQuest: e, sourceQuestContent: n, transitionState: s, onClose: o } = t,
        u = (0, r.C5)(e.id) ?? e;
    return (0, i.jsx)(a.A, {
        quest: u,
        questContent: l.uF.PLAY_QUEST_MODAL,
        sourceQuestContent: n,
        ariaLabel: X.intl.string(X.t.SHZo2x),
        transitionState: s,
        onClose: o,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(k, { quest: u, sourceQuestContent: n }),
        location: Q.rE.PLAY_QUEST_CONNECTION_MODAL,
    });
};
