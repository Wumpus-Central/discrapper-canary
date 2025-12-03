n.d(t, { Z: () => T });
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(959078),
    l = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    p = n(617136),
    m = n(915750),
    g = n(111382),
    f = n(49436),
    h = n(968843),
    x = n(387745),
    _ = n(254579),
    b = n(283689),
    j = n(659302),
    v = n(585857),
    C = n(187285),
    y = n(388032),
    E = n(260052);
function O(e) {
    return (0, r.jsx)(c.Text, {
        className: E.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function S(e) {
    let { quest: t, useReducedMotion: n } = e,
        o = (0, g.n)(),
        l = (0, j.k3)(t.id, f.jn.QUEST_BAR_V2, f.jn.QUEST_BAR_V2),
        d = (0, j.g2)({ useReducedMotion: n }),
        _ = (0, p.O5)(),
        v = (0, m.aM)(),
        {
            errorHints: C,
            startingConsoleQuest: S,
            startConsoleQuest: T,
        } = (0, h.GI)({
            questId: t.id,
            beforeRequest: () => {
                _({
                    questId: t.id,
                    questContent: f.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR,
                    sourceQuestContent: f.jn.QUEST_BAR_V2,
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation,
        }),
        { header: w, renderBody: P } = s.useMemo(() => {
            let e = C.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, b.Pb)(t)
                        ? y.intl.string(y.t.N33EuL)
                        : y.intl.formatToPlainString(y.t["28Ql27"], { gameTitle: n })
                    : (0, b.Pb)(t)
                      ? y.intl.string(y.t.YstzGO)
                      : y.intl.formatToPlainString(y.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, r.jsx)(r.Fragment, {
                              children: C.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && o) {
                                      let s = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          o = (0, x.C9)(e),
                                          a = (0, x._j)(e);
                                      return (0, r.jsx)(
                                          O,
                                          {
                                              children: y.intl.format(o, {
                                                  account_name: null == s ? void 0 : s.name,
                                                  onClick: () => {
                                                      (0, x.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: a,
                                                          },
                                                          {
                                                              content: f.jn.QUEST_BAR,
                                                              ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: v,
                                                              sourceQuestContent: f.jn.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, r.jsx)(O, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, r.jsx)(c.Text, {
                              className: E.microphoneUnitBodyText,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, b.Pb)(t)
                                  ? y.intl.string(y.t.bUyEZZ)
                                  : y.intl.format(y.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [C, t, o, v]);
    return (0, r.jsxs)("div", {
        className: E.microphoneUnit,
        children: [
            (0, r.jsxs)("div", {
                className: E.microphoneUnitHeader,
                children: [
                    (0, r.jsx)(c.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === C.length ? E.warningCircle : E.errorCircle,
                        width: 16,
                        height: 16,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: w,
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: a()(E.microphoneUnitRefreshIconWrapper, { [E.disabled]: S }),
                        onClick: () => T(),
                        children: d.render(),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()({ [E.opacity_50]: S }),
                children: [P(), 0 === C.length ? null : (0, r.jsx)(O, { children: l })],
            }),
        ],
    });
}
let T = function (e) {
    let { quest: t, taskDetails: n } = e,
        o = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, h.z6)(),
        i = s.useMemo(
            () => (0, x.B3)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [a.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: c,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m,
        } = s.useMemo(() => {
            var e;
            let s = i.length > 0,
                o = s && (0, _.Bz)(t),
                l = t.config.messages.gameTitle,
                c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => {
                            var e, n;
                            return (0, r.jsx)(
                                v.Q,
                                ((e = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, a)),
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
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(n)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                      }),
                                e),
                            );
                        },
                        isComplete: s || o || c,
                    },
                    {
                        renderContent: () =>
                            (0, r.jsx)(C.y3, {
                                children: (0, b.Pb)(t)
                                    ? y.intl.string(y.t["5tXqFe"])
                                    : y.intl.formatToPlainString(y.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: o || c,
                    },
                    {
                        renderContent: () =>
                            (0, r.jsx)(C.y3, {
                                children: y.intl.formatToPlainString(y.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: c,
                    },
                ],
                hasConnectedAccounts: s,
                isProgressingQuestForLaunchedGame: o,
                isQuestComplete: c,
            };
        }, [a, i.length, t, n.targetMinutes]);
    return (0, r.jsx)(C.ZP, {
        heading: y.intl.string(y.t.UPWlJu),
        steps: c,
        children:
            u &&
            !p &&
            !m &&
            (0, r.jsx)(S, {
                useReducedMotion: o,
                quest: t,
            }),
    });
};
