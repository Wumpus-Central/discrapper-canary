n.d(t, { Z: () => O });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(959078),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    m = n(617136),
    p = n(915750),
    h = n(111382),
    f = n(49436),
    x = n(968843),
    b = n(387745),
    g = n(254579),
    v = n(283689),
    j = n(659302),
    y = n(585857),
    C = n(187285),
    _ = n(388032),
    S = n(242359);
function E(e) {
    return (0, a.jsx)(c.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function T(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, h.n)(),
        o = (0, j.k3)(t.id, f.jn.QUEST_BAR_V2, f.jn.QUEST_BAR_V2),
        d = (0, j.g2)({ useReducedMotion: n }),
        g = (0, m.O5)(),
        y = (0, p.aM)(),
        {
            errorHints: C,
            startingConsoleQuest: T,
            startConsoleQuest: O,
        } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
                g({
                    questId: t.id,
                    questContent: f.jn.QUEST_BAR_V2,
                    questContentCTA: m.jZ.DEFIBRILLATOR,
                    sourceQuestContent: f.jn.QUEST_BAR_V2,
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation,
        }),
        { header: N, renderBody: P } = r.useMemo(() => {
            let e = C.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, v.Pb)(t)
                        ? _.intl.string(_.t.N33EuL)
                        : _.intl.formatToPlainString(_.t["28Ql27"], { gameTitle: n })
                    : (0, v.Pb)(t)
                      ? _.intl.string(_.t.YstzGO)
                      : _.intl.formatToPlainString(_.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, a.jsx)(a.Fragment, {
                              children: C.map((e, n) => {
                                  if (e.type === s.K.EXPIRED_CREDENTIAL && i) {
                                      let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, b.C9)(e),
                                          l = (0, b._j)(e);
                                      return (0, a.jsx)(
                                          E,
                                          {
                                              children: _.intl.format(i, {
                                                  account_name: null == r ? void 0 : r.name,
                                                  onClick: () => {
                                                      (0, b.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: l,
                                                          },
                                                          {
                                                              content: f.jn.QUEST_BAR,
                                                              ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: y,
                                                              sourceQuestContent: f.jn.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, a.jsx)(E, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, a.jsx)(c.Text, {
                              className: S.microphoneUnitBodyText,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, v.Pb)(t)
                                  ? _.intl.string(_.t.bUyEZZ)
                                  : _.intl.format(_.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [C, t, i, y]);
    return (0, a.jsxs)("div", {
        className: S.microphoneUnit,
        children: [
            (0, a.jsxs)("div", {
                className: S.microphoneUnitHeader,
                children: [
                    (0, a.jsx)(c.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === C.length ? S.warningCircle : S.errorCircle,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    (0, a.jsx)(c.P3F, {
                        className: l()(S.microphoneUnitRefreshIconWrapper, { [S.disabled]: T }),
                        onClick: () => O(),
                        children: d.render(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: l()({ [S.opacity_50]: T }),
                children: [P(), 0 === C.length ? null : (0, a.jsx)(E, { children: o })],
            }),
        ],
    });
}
let O = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        l = (0, x.z6)(),
        s = r.useMemo(
            () => (0, b.B3)(t).filter((e) => l.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [l.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: c,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: p,
        } = r.useMemo(() => {
            var e;
            let r = s.length > 0,
                i = r && (0, g.Bz)(t),
                o = t.config.messages.gameTitle,
                c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => {
                            var e, n;
                            return (0, a.jsx)(
                                y.Q,
                                ((e = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            a = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (a = a.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            a.forEach(function (t) {
                                                var a;
                                                (a = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: a,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = a);
                                            });
                                    }
                                    return e;
                                })({}, l)),
                                (n = n =
                                    {
                                        quest: t,
                                        sourceQuestContent: f.jn.QUEST_BAR_V2,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var a = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, a);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                      }),
                                e),
                            );
                        },
                        isComplete: r || i || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(C.y3, {
                                children: (0, v.Pb)(t)
                                    ? _.intl.string(_.t["5tXqFe"])
                                    : _.intl.formatToPlainString(_.t["+8JB6Y"], { gameTitle: o }),
                            }),
                        isComplete: i || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(C.y3, {
                                children: _.intl.formatToPlainString(_.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: c,
                    },
                ],
                hasConnectedAccounts: r,
                isProgressingQuestForLaunchedGame: i,
                isQuestComplete: c,
            };
        }, [l, s.length, t, n.targetMinutes]);
    return (0, a.jsx)(C.ZP, {
        heading: _.intl.string(_.t.UPWlJu),
        steps: c,
        children:
            u &&
            !m &&
            !p &&
            (0, a.jsx)(T, {
                useReducedMotion: i,
                quest: t,
            }),
    });
};
