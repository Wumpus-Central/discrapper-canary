n.d(e, { default: () => H });
var i = n(477900),
    s = n(582128),
    l = n(738822),
    r = n(309593),
    o = n(717200);
n(321073);
var a = n(323889),
    c = n(412703),
    u = n(928264),
    d = n(802516),
    C = n(22363),
    T = n(17928),
    g = n(663417),
    O = n(274670),
    E = n(144779),
    _ = n(287809),
    A = n(975571),
    L = n(178540),
    m = n(104886),
    S = n(18437),
    N = n(590202),
    f = n(971649),
    I = n(901406),
    P = n(801365),
    h = n(108811),
    p = n(123292),
    U = n(52093),
    x = n(114046),
    D = n(661531),
    W = n(834730),
    M = n(653766),
    y = n(695366),
    j = n(30370),
    X = n(814793),
    Y = n(375708),
    v = n(43330);
function R(t) {
    return (0, i.jsx)(W.E, { className: v.rf, color: "text-muted", variant: "text-xxs/normal", children: t.children });
}
function F(t) {
    let { quest: e, questContent: n, sourceQuestContent: l, errorHints: r } = t,
        o = (0, f.go)(),
        { header: a, renderBody: c } = s.useMemo(() => {
            let t = r.length > 0,
                s = e.config.messages.gameTitle;
            return {
                header: t
                    ? Y.intl.string(Y.t["20NLWC"])
                    : (0, X.ui)(e)
                      ? Y.intl.string(Y.t.YstzGO)
                      : Y.intl.formatToPlainString(Y.t.gX0Qcx, { gameTitle: s }),
                renderBody: t
                    ? function () {
                          return (0, i.jsx)(i.Fragment, {
                              children: r.map((t, s) => {
                                  if (t.type === x._.EXPIRED_CREDENTIAL) {
                                      let r = j.A.getAccount(t.connected_account_id, t.connected_account_type),
                                          a = (0, I.IG)(t),
                                          c = (0, I.$J)(t);
                                      return (0, i.jsx)(
                                          R,
                                          {
                                              children: Y.intl.format(a, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, I.v0)(
                                                          { quest: e, platformType: c },
                                                          {
                                                              content: n,
                                                              ctaContent: N.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: o,
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
                          (0, i.jsx)(W.E, {
                              className: v.rf,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, X.ui)(e)
                                  ? Y.intl.string(Y.t.bUyEZZ)
                                  : Y.intl.format(Y.t.GXqvC1, { gameTitle: s }),
                          }),
            };
        }, [r, e, o, n, l]);
    return (0, i.jsxs)("div", {
        className: v.kL,
        children: [
            (0, i.jsxs)("div", {
                className: v.wx,
                children: [
                    r.length > 0
                        ? (0, i.jsx)(M.e, { size: "sm", color: D.A.colors.ICON_FEEDBACK_CRITICAL.css })
                        : (0, i.jsx)(y.E, { size: "sm", color: D.A.colors.ICON_FEEDBACK_WARNING.css }),
                    (0, i.jsx)(W.E, { variant: "text-xs/semibold", children: a }),
                ],
            }),
            c(),
        ],
    });
}
var K = n(635576);
function Q(t) {
    let {
            quest: e,
            sourceQuestContent: n,
            selectedPlatform: o,
            supportedPlatforms: a,
            isConnected: c,
            noConsoleProgress: u,
            errorHints: d,
        } = t,
        C = (0, f.go)(),
        g = (0, T.bG)([_.default], () => _.default.getCurrentUser()),
        O = (0, r.fc)(e),
        E = e.userStatus?.completedAt != null,
        A = s.useMemo(
            () => ({
                renderContent: () =>
                    (0, i.jsx)(U.L5, {
                        children: Y.intl.formatToPlainString(Y.t.NIimTt, {
                            gameTitle: e.config.messages.gameTitle,
                            targetMinutes: O.targetMinutes,
                            rewardNameWithArticle: (0, P.mH)(e.config, g),
                        }),
                    }),
                isComplete: E,
            }),
            [e.config, O.targetMinutes, E, g],
        ),
        L = s.useMemo(
            () =>
                1 === a.length
                    ? [A]
                    : [
                          {
                              renderContent: () => (0, i.jsx)(U.L5, { children: Y.intl.string(Y.t["sI+PPN"]) }),
                              isComplete: !0,
                          },
                          A,
                      ],
            [A, a.length],
        ),
        m = s.useCallback(() => {
            (0, I.b6)(
                { quest: e },
                {
                    content: l.uF.PLAY_QUEST_MODAL,
                    ctaContent: N.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                    impressionId: C,
                    sourceQuestContent: n,
                },
            );
        }, [e, C, n]),
        S = s.useMemo(
            () => [
                {
                    renderContent: (t) =>
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(U.L5, { children: Y.intl.string(t ? Y.t["rmw++9"] : Y.t.yqSr9m) }),
                                t &&
                                    (0, i.jsx)(p.Q, {
                                        textVariant: "text-xs/medium",
                                        onClick: m,
                                        text: Y.intl.string(Y.t["qiS+xj"]),
                                    }),
                            ],
                        }),
                    isComplete: c || E,
                },
                A,
            ],
            [A, E, c, m],
        ),
        h = o === I.WU.DESKTOP ? L : S,
        x = c && (u || d.length > 0) && !E;
    return (0, i.jsx)(U.Ay, {
        heading: Y.intl.string(Y.t.dc9w4N),
        steps: h,
        className: K._,
        children:
            x && (0, i.jsx)(F, { quest: e, questContent: l.uF.PLAY_QUEST_MODAL, sourceQuestContent: n, errorHints: d }),
    });
}
var q = n(190107),
    b = n(652215);
function k(t) {
    switch (t) {
        case c.n.PLAY_ON_XBOX:
            return I.WU.XBOX;
        case c.n.PLAY_ON_PLAYSTATION:
            return I.WU.PLAYSTATION;
        case c.n.PLAY_ON_DESKTOP:
        default:
            return I.WU.DESKTOP;
    }
}
function B(t) {
    let { quest: e, sourceQuestContent: n } = t,
        o = (0, f.wW)(),
        c = (0, S.Ut)(),
        p = (0, T.bG)([_.default], () => _.default.getCurrentUser()),
        U = s.useCallback(() => {
            (0, I.pu)(e, {
                content: l.uF.PLAY_QUEST_MODAL,
                ctaContent: N.Cy.OPEN_GAME_LINK,
                impressionId: o(),
                sourceQuestContent: n,
            });
        }, [e, o, n]),
        x = (0, r.fc)(e),
        D = s.useMemo(() => (0, I.UR)(e), [e]),
        W = s.useMemo(() => (0, I.bg)(e), [e]),
        M = x.percentComplete > 0,
        y = null;
    1 === D.length ? (y = I.WU.DESKTOP) : M && (y = k(x.taskType));
    let [j, X] = s.useState(y),
        v = j === I.WU.XBOX || j === I.WU.PLAYSTATION,
        { xboxAccounts: R, playstationAccounts: F } = (0, r.Du)(),
        K = !1;
    v && (K = (j === I.WU.XBOX ? R : F).length > 0);
    let B = [
            ...[{ id: q.fO.DESKTOP, value: I.WU.DESKTOP, label: Y.intl.string(Y.t.g6Dr44), leading: u.I }].filter((t) =>
                D.includes(t.id),
            ),
            ...[
                { id: b.fg2.XBOX, value: I.WU.XBOX, label: Y.intl.string(Y.t.Nfvo72), leading: d.Y },
                { id: b.fg2.PLAYSTATION, value: I.WU.PLAYSTATION, label: Y.intl.string(Y.t.fFl4jo), leading: C.X },
            ].filter((t) => D.includes(q.fO.CONSOLE) && W.includes(t.id)),
        ],
        H = [
            {
                label: Y.intl.string(Y.t["TWSB/5"]),
                placeholder: Y.intl.string(Y.t["TWSB/5"]),
                options: B,
                value: j,
                onSelectionChange: (t) => {
                    if ((X(t), null != t)) {
                        let i = t === I.WU.DESKTOP ? N.Cy.SELECT_DESKTOP_PLATFORM : N.Cy.SELECT_CONSOLE_PLATFORM;
                        (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "play_quest_modal_left_panel")
                            ? (0, O.r)({
                                  type: E.F.CLICK_INTERNAL,
                                  adCreativeType: a.p.QUEST,
                                  adCreativeId: e.id,
                                  questContentCTA: i,
                                  surfaceId: l.uF.PLAY_QUEST_MODAL,
                                  sourceQuestContent: n,
                                  impressionId: o(),
                              })
                            : c({
                                  questId: e.id,
                                  questContent: l.uF.PLAY_QUEST_MODAL,
                                  questContentCTA: i,
                                  sourceQuestContent: n,
                              });
                    }
                },
                disabled: B.length <= 1,
            },
        ],
        w = (0, L.O)((t) => t.getErrorHints(e.id)),
        G = { [I.WU.XBOX]: [], [I.WU.PLAYSTATION]: [], [I.WU.DESKTOP]: [] };
    w.forEach((t) => {
        G["" === t.connected_account_type ? (j ?? I.WU.DESKTOP) : (0, I.$J)(t)].push(t);
    });
    let { startingConsoleQuest: z, startConsoleQuest: V } = (0, r.Wj)({
            questId: e.id,
            beforeRequest: () => {
                (0, m.E5)(m.kI.STEP_2_CLICKED_INTERNAL, "play_quest_modal_left_panel")
                    ? (0, O.r)({
                          type: E.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: e.id,
                          questContentCTA: N.Cy.DEFIBRILLATOR,
                          surfaceId: l.uF.PLAY_QUEST_MODAL,
                          sourceQuestContent: n,
                          impressionId: o(),
                      })
                    : c({
                          questId: e.id,
                          questContent: l.uF.PLAY_QUEST_MODAL,
                          questContentCTA: N.Cy.DEFIBRILLATOR,
                          sourceQuestContent: n,
                      });
            },
        }),
        Z = Y.intl.string(Y.t.qQmNEy);
    if (1 === D.length && j === I.WU.DESKTOP) Z = Y.intl.format(Y.t.Fo68kU, { gameTitle: e.config.messages.gameTitle });
    else if (
        v &&
        (K &&
            (Z = Y.intl.format(Y.t["0vGRCS"], {
                gameTitle: e.config.messages.gameTitle,
                targetMinutes: x.targetMinutes,
                rewardNameWithArticle: (0, P.mH)(e.config, p),
                onClickGameTitle: U,
            })),
        G[j]?.length > 0)
    ) {
        let t = A.A.getArticleURL(b.MVz.QUEST_HOW_TO_PLAYSTATION),
            e = A.A.getArticleURL(b.MVz.QUEST_HOW_TO_XBOX);
        Z = Y.intl.format(Y.t.HVS7nh, { helpdeskArticle: j === I.WU.PLAYSTATION ? t : e });
    }
    let J = Y.intl.string(Y.t["Gcmjy/"]);
    return (
        v ? (J = Y.intl.string(Y.t["5ZilMg"])) : j === I.WU.DESKTOP && (J = Y.intl.string(Y.t["93tEDn"])),
        (0, i.jsx)(h.A, {
            heading: J,
            subtitle: Z,
            methodSelect: H,
            ctaButton:
                j === I.WU.DESKTOP
                    ? { text: Y.intl.string(Y.t.E4kW5O), onClick: U }
                    : v
                      ? K
                          ? { text: Y.intl.string(Y.t.nPThNb), onClick: V, loading: z, icon: g.RefreshIcon }
                          : {
                                text: Y.intl.string(Y.t.S0W8Z5),
                                onClick: () => {
                                    (0, I.Ps)(
                                        { quest: e },
                                        {
                                            content: l.uF.PLAY_QUEST_MODAL,
                                            ctaContent: N.Cy.CONNECT_CONSOLE,
                                            impressionId: o(),
                                            sourceQuestContent: n,
                                        },
                                        j === I.WU.XBOX ? b.fg2.XBOX : b.fg2.PLAYSTATION,
                                    );
                                },
                            }
                      : void 0,
            children:
                null != j &&
                (0, i.jsx)(Q, {
                    quest: e,
                    sourceQuestContent: n,
                    selectedPlatform: j,
                    noConsoleProgress: v && j !== k(x.taskType),
                    supportedPlatforms: D,
                    isConnected: K,
                    errorHints: G[j],
                }),
        })
    );
}
let H = function (t) {
    let { initialQuest: e, sourceQuestContent: n, transitionState: s, onClose: a } = t,
        c = (0, r.C5)(e.id) ?? e;
    return (0, i.jsx)(o.A, {
        quest: c,
        questContent: l.uF.PLAY_QUEST_MODAL,
        sourceQuestContent: n,
        ariaLabel: Y.intl.string(Y.t.SHZo2x),
        transitionState: s,
        onClose: a,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, i.jsx)(B, { quest: c, sourceQuestContent: n }),
        location: q.rE.PLAY_QUEST_CONNECTION_MODAL,
    });
};
