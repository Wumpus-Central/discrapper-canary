n.d(t, { Z: () => y });
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(959078),
    l = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    p = n(617136),
    m = n(915750),
    x = n(111382),
    h = n(113434),
    g = n(497505),
    f = n(918701),
    v = n(467628),
    _ = n(667105),
    C = n(585857),
    j = n(795057),
    b = n(46140),
    T = n(388032),
    E = n(313750);
function S(e) {
    return (0, s.jsx)(c.Text, {
        className: E.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function N(e) {
    let { quest: t, useReducedMotion: n } = e,
        a = (0, x.n)(),
        l = (0, _.k3)(t.id, g.jn.QUEST_BAR_V2),
        d = (0, _.g2)({ useReducedMotion: n }),
        v = (0, p.O5)(),
        C = (0, m.aM)(),
        {
            errorHints: j,
            startingConsoleQuest: b,
            startConsoleQuest: N
        } = (0, h.GI)({
            questId: t.id,
            beforeRequest: () => {
                v({
                    questId: t.id,
                    questContent: g.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: y, renderBody: w } = r.useMemo(() => {
            let e = j.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e ? T.intl.formatToPlainString(T.t['28Ql29'], { gameTitle: n }) : T.intl.formatToPlainString(T.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, s.jsx)(s.Fragment, {
                              children: j.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && a) {
                                      let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          a = (0, f.C9)(e),
                                          o = (0, f._j)(e);
                                      return (0, s.jsx)(
                                          S,
                                          {
                                              children: T.intl.format(a, {
                                                  account_name: null == r ? void 0 : r.name,
                                                  onClick: () => {
                                                      (0, f.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: o
                                                          },
                                                          {
                                                              content: g.jn.QUEST_BAR,
                                                              ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: C
                                                          }
                                                      );
                                                  }
                                              })
                                          },
                                          n
                                      );
                                  }
                                  return (0, s.jsx)(S, { children: e.message }, n);
                              })
                          })
                    : () =>
                          (0, s.jsx)(c.Text, {
                              className: E.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: T.intl.format(T.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [j, t, a, C]);
    return (0, s.jsxs)('div', {
        className: E.microphoneUnit,
        children: [
            (0, s.jsxs)('div', {
                className: E.microphoneUnitHeader,
                children: [
                    (0, s.jsx)(c.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === j.length ? E.warningCircle : E.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: y
                    }),
                    (0, s.jsx)(c.P3F, {
                        className: o()(E.microphoneUnitRefreshIconWrapper, { [E.disabled]: b }),
                        onClick: () => N(),
                        children: d.render()
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: o()({ [E.opacity_50]: b }),
                children: [w(), 0 === j.length ? null : (0, s.jsx)(S, { children: l })]
            })
        ]
    });
}
let y = function (e) {
    let { quest: t, taskDetails: n } = e,
        a = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        o = (0, h.z6)(),
        i = (0, v.j)({ location: b.dr.QUESTS_BAR }),
        {
            steps: c,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m
        } = r.useMemo(() => {
            var e;
            let r = o.xboxAndPlaystationAccounts.length > 0,
                a = r && (0, f.Bz)(t),
                i = t.config.messages.gameTitle,
                l = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, s.jsx)(C.Q, {
                                ...o,
                                quest: t
                            }),
                        isComplete: r || a || l
                    },
                    {
                        renderContent: () => (0, s.jsx)(j.y3, { children: T.intl.formatToPlainString(T.t['+8JB6e'], { gameTitle: i }) }),
                        isComplete: a || l
                    },
                    {
                        renderContent: () => (0, s.jsx)(j.y3, { children: T.intl.formatToPlainString(T.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: l
                    }
                ],
                hasConnectedAccounts: r,
                isProgressingQuestForLaunchedGame: a,
                isQuestComplete: l
            };
        }, [o, t, n]);
    return (0, s.jsxs)(j.ZP, {
        heading: T.intl.string(T.t.UPWlJi),
        steps: c,
        children: [
            i && (0, s.jsx)(j.Om, { quest: t }),
            u &&
                !p &&
                !m &&
                (0, s.jsx)(N, {
                    useReducedMotion: a,
                    quest: t
                })
        ]
    });
};
