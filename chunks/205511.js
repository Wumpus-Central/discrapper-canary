n.d(t, { Z: () => E });
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(959078),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(553795),
    p = n(617136),
    m = n(915750),
    f = n(111382),
    g = n(113434),
    x = n(497505),
    h = n(918701),
    b = n(667105),
    j = n(585857),
    _ = n(795057),
    v = n(388032),
    y = n(22559);
function C(e) {
    return (0, r.jsx)(c.Text, {
        className: y.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function O(e) {
    let { quest: t, useReducedMotion: n } = e,
        o = (0, f.n)(),
        l = (0, b.k3)(t.id, x.jn.QUEST_BAR_V2, x.jn.QUEST_BAR_V2),
        u = (0, b.g2)({ useReducedMotion: n }),
        j = (0, p.O5)(),
        _ = (0, m.aM)(),
        {
            errorHints: O,
            startingConsoleQuest: E,
            startConsoleQuest: S
        } = (0, g.GI)({
            questId: t.id,
            beforeRequest: () => {
                j({
                    questId: t.id,
                    questContent: x.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR,
                    sourceQuestContent: x.jn.QUEST_BAR_V2
                }),
                    u.startAnimation();
            },
            afterRequest: u.stopAnimation
        }),
        { header: w, renderBody: P } = s.useMemo(() => {
            let e = O.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e ? v.intl.formatToPlainString(v.t['28Ql29'], { gameTitle: n }) : v.intl.formatToPlainString(v.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, r.jsx)(r.Fragment, {
                              children: O.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && o) {
                                      let s = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          o = (0, h.C9)(e),
                                          a = (0, h._j)(e);
                                      return (0, r.jsx)(
                                          C,
                                          {
                                              children: v.intl.format(o, {
                                                  account_name: null == s ? void 0 : s.name,
                                                  onClick: () => {
                                                      (0, h.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: a
                                                          },
                                                          {
                                                              content: x.jn.QUEST_BAR,
                                                              ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: _,
                                                              sourceQuestContent: x.jn.QUEST_BAR_V2
                                                          }
                                                      );
                                                  }
                                              })
                                          },
                                          n
                                      );
                                  }
                                  return (0, r.jsx)(C, { children: e.message }, n);
                              })
                          })
                    : () =>
                          (0, r.jsx)(c.Text, {
                              className: y.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: v.intl.format(v.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [O, t, o, _]);
    return (0, r.jsxs)('div', {
        className: y.microphoneUnit,
        children: [
            (0, r.jsxs)('div', {
                className: y.microphoneUnitHeader,
                children: [
                    (0, r.jsx)(c.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === O.length ? y.warningCircle : y.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: w
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: a()(y.microphoneUnitRefreshIconWrapper, { [y.disabled]: E }),
                        onClick: () => S(),
                        children: u.render()
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()({ [y.opacity_50]: E }),
                children: [P(), 0 === O.length ? null : (0, r.jsx)(C, { children: l })]
            })
        ]
    });
}
let E = function (e) {
    let { quest: t, taskDetails: n } = e,
        o = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        a = (0, g.z6)(),
        i = s.useMemo(() => (0, h.B3)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)), [a.xboxAndPlaystationAccounts, t]),
        {
            steps: c,
            hasConnectedAccounts: d,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m
        } = s.useMemo(() => {
            var e;
            let s = i.length > 0,
                o = s && (0, h.Bz)(t),
                l = t.config.messages.gameTitle,
                c = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () => {
                            var e, n;
                            return (0, r.jsx)(
                                j.Q,
                                ((e = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        'function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, a)),
                                (n = n =
                                    {
                                        quest: t,
                                        sourceQuestContent: x.jn.QUEST_BAR_V2
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
                                e)
                            );
                        },
                        isComplete: s || o || c
                    },
                    {
                        renderContent: () => (0, r.jsx)(_.y3, { children: v.intl.formatToPlainString(v.t['+8JB6e'], { gameTitle: l }) }),
                        isComplete: o || c
                    },
                    {
                        renderContent: () => (0, r.jsx)(_.y3, { children: v.intl.formatToPlainString(v.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: c
                    }
                ],
                hasConnectedAccounts: s,
                isProgressingQuestForLaunchedGame: o,
                isQuestComplete: c
            };
        }, [a, i.length, t, n.targetMinutes]);
    return (0, r.jsx)(_.ZP, {
        heading: v.intl.string(v.t.UPWlJi),
        steps: c,
        children:
            d &&
            !p &&
            !m &&
            (0, r.jsx)(O, {
                useReducedMotion: o,
                quest: t
            })
    });
};
