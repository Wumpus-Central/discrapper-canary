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
    b = n(467628),
    j = n(667105),
    v = n(585857),
    _ = n(795057),
    y = n(46140),
    O = n(388032),
    C = n(22559);
function w(e) {
    return (0, r.jsx)(c.Text, {
        className: C.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function S(e) {
    let { quest: t, useReducedMotion: n } = e,
        o = (0, f.n)(),
        l = (0, j.k3)(t.id, x.jn.QUEST_BAR_V2),
        u = (0, j.g2)({ useReducedMotion: n }),
        b = (0, p.O5)(),
        v = (0, m.aM)(),
        {
            errorHints: _,
            startingConsoleQuest: y,
            startConsoleQuest: S
        } = (0, g.GI)({
            questId: t.id,
            beforeRequest: () => {
                b({
                    questId: t.id,
                    questContent: x.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    u.startAnimation();
            },
            afterRequest: u.stopAnimation
        }),
        { header: E, renderBody: P } = s.useMemo(() => {
            let e = _.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e ? O.intl.formatToPlainString(O.t['28Ql29'], { gameTitle: n }) : O.intl.formatToPlainString(O.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, r.jsx)(r.Fragment, {
                              children: _.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && o) {
                                      let s = d.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          o = (0, h.C9)(e),
                                          a = (0, h._j)(e);
                                      return (0, r.jsx)(
                                          w,
                                          {
                                              children: O.intl.format(o, {
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
                                                              impressionId: v
                                                          }
                                                      );
                                                  }
                                              })
                                          },
                                          n
                                      );
                                  }
                                  return (0, r.jsx)(w, { children: e.message }, n);
                              })
                          })
                    : () =>
                          (0, r.jsx)(c.Text, {
                              className: C.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: O.intl.format(O.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [_, t, o, v]);
    return (0, r.jsxs)('div', {
        className: C.microphoneUnit,
        children: [
            (0, r.jsxs)('div', {
                className: C.microphoneUnitHeader,
                children: [
                    (0, r.jsx)(c.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === _.length ? C.warningCircle : C.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: E
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: a()(C.microphoneUnitRefreshIconWrapper, { [C.disabled]: y }),
                        onClick: () => S(),
                        children: u.render()
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()({ [C.opacity_50]: y }),
                children: [P(), 0 === _.length ? null : (0, r.jsx)(w, { children: l })]
            })
        ]
    });
}
let E = function (e) {
    let { quest: t, taskDetails: n } = e,
        o = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        a = (0, g.z6)(),
        i = (0, b.j)({ location: y.dr.QUESTS_BAR }),
        c = s.useMemo(() => (0, h.B3)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)), [a.xboxAndPlaystationAccounts, t]),
        {
            steps: d,
            hasConnectedAccounts: p,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: f
        } = s.useMemo(() => {
            var e;
            let s = c.length > 0,
                o = s && (0, h.Bz)(t),
                i = t.config.messages.gameTitle,
                l = (null == (e = t.userStatus) ? void 0 : e.completedAt) != null;
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
                                (n = n = { quest: t }),
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
                        isComplete: s || o || l
                    },
                    {
                        renderContent: () => (0, r.jsx)(_.y3, { children: O.intl.formatToPlainString(O.t['+8JB6e'], { gameTitle: i }) }),
                        isComplete: o || l
                    },
                    {
                        renderContent: () => (0, r.jsx)(_.y3, { children: O.intl.formatToPlainString(O.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: l
                    }
                ],
                hasConnectedAccounts: s,
                isProgressingQuestForLaunchedGame: o,
                isQuestComplete: l
            };
        }, [a, c.length, t, n.targetMinutes]);
    return (0, r.jsxs)(_.ZP, {
        heading: O.intl.string(O.t.UPWlJi),
        steps: d,
        children: [
            i && (0, r.jsx)(_.Om, { quest: t }),
            p &&
                !m &&
                !f &&
                (0, r.jsx)(S, {
                    useReducedMotion: o,
                    quest: t
                })
        ]
    });
};
