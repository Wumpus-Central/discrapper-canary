n.d(t, { Z: () => T });
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
    x = n(49436),
    f = n(968843),
    g = n(387745),
    b = n(254579),
    v = n(283689),
    j = n(659302),
    _ = n(585857),
    y = n(187285),
    C = n(388032),
    S = n(260052);
function E(e) {
    return (0, a.jsx)(c.Text, {
        className: S.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function O(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, h.n)(),
        o = (0, j.k3)(t.id, x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR_V2),
        d = (0, j.g2)({ useReducedMotion: n }),
        b = (0, m.O5)(),
        _ = (0, p.aM)(),
        {
            errorHints: y,
            startingConsoleQuest: O,
            startConsoleQuest: T,
        } = (0, f.GI)({
            questId: t.id,
            beforeRequest: () => {
                b({
                    questId: t.id,
                    questContent: x.jn.QUEST_BAR_V2,
                    questContentCTA: m.jZ.DEFIBRILLATOR,
                    sourceQuestContent: x.jn.QUEST_BAR_V2,
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation,
        }),
        { header: N, renderBody: P } = r.useMemo(() => {
            let e = y.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, v.Pb)(t)
                        ? C.intl.string(C.t.N33EuL)
                        : C.intl.formatToPlainString(C.t["28Ql27"], { gameTitle: n })
                    : (0, v.Pb)(t)
                      ? C.intl.string(C.t.YstzGO)
                      : C.intl.formatToPlainString(C.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, a.jsx)(a.Fragment, {
                              children: y.map((e, n) => {
                                  if (e.type === s.K.EXPIRED_CREDENTIAL && i) {
                                      let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, g.C9)(e),
                                          l = (0, g._j)(e);
                                      return (0, a.jsx)(
                                          E,
                                          {
                                              children: C.intl.format(i, {
                                                  account_name: null == r ? void 0 : r.name,
                                                  onClick: () => {
                                                      (0, g.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: l,
                                                          },
                                                          {
                                                              content: x.jn.QUEST_BAR,
                                                              ctaContent: m.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: _,
                                                              sourceQuestContent: x.jn.QUEST_BAR_V2,
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
                                  ? C.intl.string(C.t.bUyEZZ)
                                  : C.intl.format(C.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [y, t, i, _]);
    return (0, a.jsxs)("div", {
        className: S.microphoneUnit,
        children: [
            (0, a.jsxs)("div", {
                className: S.microphoneUnitHeader,
                children: [
                    (0, a.jsx)(c.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === y.length ? S.warningCircle : S.errorCircle,
                        width: 16,
                        height: 16,
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    (0, a.jsx)(c.P3F, {
                        className: l()(S.microphoneUnitRefreshIconWrapper, { [S.disabled]: O }),
                        onClick: () => T(),
                        children: d.render(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: l()({ [S.opacity_50]: O }),
                children: [P(), 0 === y.length ? null : (0, a.jsx)(E, { children: o })],
            }),
        ],
    });
}
let T = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        l = (0, f.z6)(),
        s = r.useMemo(
            () => (0, g.B3)(t).filter((e) => l.xboxAndPlaystationAccounts.find((t) => t.type === e)),
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
                i = r && (0, b.Bz)(t),
                o = t.config.messages.gameTitle,
                c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => {
                            var e, n;
                            return (0, a.jsx)(
                                _.Q,
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
                                        sourceQuestContent: x.jn.QUEST_BAR_V2,
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
                            (0, a.jsx)(y.y3, {
                                children: (0, v.Pb)(t)
                                    ? C.intl.string(C.t["5tXqFe"])
                                    : C.intl.formatToPlainString(C.t["+8JB6Y"], { gameTitle: o }),
                            }),
                        isComplete: i || c,
                    },
                    {
                        renderContent: () =>
                            (0, a.jsx)(y.y3, {
                                children: C.intl.formatToPlainString(C.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: c,
                    },
                ],
                hasConnectedAccounts: r,
                isProgressingQuestForLaunchedGame: i,
                isQuestComplete: c,
            };
        }, [l, s.length, t, n.targetMinutes]);
    return (0, a.jsx)(y.ZP, {
        heading: C.intl.string(C.t.UPWlJu),
        steps: c,
        children:
            u &&
            !m &&
            !p &&
            (0, a.jsx)(O, {
                useReducedMotion: i,
                quest: t,
            }),
    });
};
