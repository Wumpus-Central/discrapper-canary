n.d(t, { Z: () => O });
var r = n(951288),
    s = n(647438),
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
    f = n(509212),
    h = n(113434),
    x = n(497505),
    b = n(667105),
    _ = n(585857),
    j = n(795057),
    v = n(388032),
    C = n(936289);
function y(e) {
    return (0, r.jsx)(c.Text, {
        className: C.microphoneUnitBodyText,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function E(e) {
    let { quest: t, useReducedMotion: n } = e,
        o = (0, g.n)(),
        l = (0, b.k3)(t.id, x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR_V2),
        d = (0, b.g2)({ useReducedMotion: n }),
        _ = (0, p.O5)(),
        j = (0, m.aM)(),
        {
            errorHints: E,
            startingConsoleQuest: O,
            startConsoleQuest: S,
        } = (0, h.GI)({
            questId: t.id,
            beforeRequest: () => {
                _({
                    questId: t.id,
                    questContent: x.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR,
                    sourceQuestContent: x.jn.QUEST_BAR_V2,
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation,
        }),
        { header: T, renderBody: w } = s.useMemo(() => {
            let e = E.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, f.Pb)(t)
                        ? v.intl.string(v.t.N33EuL)
                        : v.intl.formatToPlainString(v.t["28Ql27"], { gameTitle: n })
                    : (0, f.Pb)(t)
                      ? v.intl.string(v.t.YstzGO)
                      : v.intl.formatToPlainString(v.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, r.jsx)(r.Fragment, {
                              children: E.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && o) {
                                      let s = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          o = (0, f.C9)(e),
                                          a = (0, f._j)(e);
                                      return (0, r.jsx)(
                                          y,
                                          {
                                              children: v.intl.format(o, {
                                                  account_name: null == s ? void 0 : s.name,
                                                  onClick: () => {
                                                      (0, f.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: a,
                                                          },
                                                          {
                                                              content: x.jn.QUEST_BAR,
                                                              ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: j,
                                                              sourceQuestContent: x.jn.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, r.jsx)(y, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, r.jsx)(c.Text, {
                              className: C.microphoneUnitBodyText,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, f.Pb)(t)
                                  ? v.intl.string(v.t.bUyEZZ)
                                  : v.intl.format(v.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [E, t, o, j]);
    return (0, r.jsxs)("div", {
        className: C.microphoneUnit,
        children: [
            (0, r.jsxs)("div", {
                className: C.microphoneUnitHeader,
                children: [
                    (0, r.jsx)(c.Mgn, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === E.length ? C.warningCircle : C.errorCircle,
                        width: 16,
                        height: 16,
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        children: T,
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: a()(C.microphoneUnitRefreshIconWrapper, { [C.disabled]: O }),
                        onClick: () => S(),
                        children: d.render(),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a()({ [C.opacity_50]: O }),
                children: [w(), 0 === E.length ? null : (0, r.jsx)(y, { children: l })],
            }),
        ],
    });
}
let O = function (e) {
    let { quest: t, taskDetails: n } = e,
        o = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, h.z6)(),
        i = s.useMemo(
            () => (0, f.B3)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
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
                o = s && (0, f.Bz)(t),
                l = t.config.messages.gameTitle,
                c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => {
                            var e, n;
                            return (0, r.jsx)(
                                _.Q,
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
                                        sourceQuestContent: x.jn.QUEST_BAR_V2,
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
                            (0, r.jsx)(j.y3, {
                                children: (0, f.Pb)(t)
                                    ? v.intl.string(v.t["5tXqFe"])
                                    : v.intl.formatToPlainString(v.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: o || c,
                    },
                    {
                        renderContent: () =>
                            (0, r.jsx)(j.y3, {
                                children: v.intl.formatToPlainString(v.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: c,
                    },
                ],
                hasConnectedAccounts: s,
                isProgressingQuestForLaunchedGame: o,
                isQuestComplete: c,
            };
        }, [a, i.length, t, n.targetMinutes]);
    return (0, r.jsx)(j.ZP, {
        heading: v.intl.string(v.t.UPWlJu),
        steps: c,
        children:
            u &&
            !p &&
            !m &&
            (0, r.jsx)(E, {
                useReducedMotion: o,
                quest: t,
            }),
    });
};
