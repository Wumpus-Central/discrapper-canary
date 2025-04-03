n.d(t, { Z: () => P });
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(959078),
    l = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    p = n(617136),
    m = n(915750),
    f = n(111382),
    g = n(113434),
    x = n(497505),
    h = n(918701),
    b = n(467628),
    j = n(667105),
    v = n(585857),
    y = n(795057),
    _ = n(46140),
    C = n(388032),
    O = n(22559);
function w(e) {
    return (0, r.jsx)(c.Text, {
        className: O.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function S(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, f.n)(),
        l = (0, j.k3)(t.id, x.jn.QUEST_BAR_V2),
        d = (0, j.g2)({ useReducedMotion: n }),
        b = (0, p.O5)(),
        v = (0, m.aM)(),
        {
            errorHints: y,
            startingConsoleQuest: _,
            startConsoleQuest: S
        } = (0, g.GI)({
            questId: t.id,
            beforeRequest: () => {
                b({
                    questId: t.id,
                    questContent: x.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: P, renderBody: N } = o.useMemo(() => {
            let e = y.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e ? C.NW.formatToPlainString(C.t['28Ql29'], { gameTitle: n }) : C.NW.formatToPlainString(C.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, r.jsx)(r.Fragment, {
                              children: y.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                                      let o = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, h.C9)(e),
                                          a = (0, h._j)(e);
                                      return (0, r.jsx)(
                                          w,
                                          {
                                              children: C.NW.format(s, {
                                                  account_name: null == o ? void 0 : o.name,
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
                              className: O.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: C.NW.format(C.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [y, t, s, v]);
    return (0, r.jsxs)('div', {
        className: O.microphoneUnit,
        children: [
            (0, r.jsxs)('div', {
                className: O.microphoneUnitHeader,
                children: [
                    (0, r.jsx)(c.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === y.length ? O.warningCircle : O.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: P
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: a()(O.microphoneUnitRefreshIconWrapper, { [O.disabled]: _ }),
                        onClick: () => S(),
                        children: d.render()
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()({ [O.opacity_50]: _ }),
                children: [N(), 0 === y.length ? null : (0, r.jsx)(w, { children: l })]
            })
        ]
    });
}
let P = function (e) {
    let { quest: t, taskDetails: n } = e,
        s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, g.z6)(),
        i = (0, b.j)({ location: _.dr.QUESTS_BAR }),
        c = o.useMemo(() => (0, h.B3)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)), [a.xboxAndPlaystationAccounts, t]),
        {
            steps: u,
            hasConnectedAccounts: p,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: f
        } = o.useMemo(() => {
            var e;
            let o = c.length > 0,
                s = o && (0, h.Bz)(t),
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
                        isComplete: o || s || l
                    },
                    {
                        renderContent: () => (0, r.jsx)(y.y3, { children: C.NW.formatToPlainString(C.t['+8JB6e'], { gameTitle: i }) }),
                        isComplete: s || l
                    },
                    {
                        renderContent: () => (0, r.jsx)(y.y3, { children: C.NW.formatToPlainString(C.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: l
                    }
                ],
                hasConnectedAccounts: o,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: l
            };
        }, [a, c.length, t, n.targetMinutes]);
    return (0, r.jsxs)(y.ZP, {
        heading: C.NW.string(C.t.UPWlJi),
        steps: u,
        children: [
            i && (0, r.jsx)(y.Om, { quest: t }),
            p &&
                !m &&
                !f &&
                (0, r.jsx)(S, {
                    useReducedMotion: s,
                    quest: t
                })
        ]
    });
};
