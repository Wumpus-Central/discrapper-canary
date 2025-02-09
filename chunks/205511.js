n.d(t, { Z: () => y });
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
    x = n(111382),
    h = n(113434),
    g = n(497505),
    f = n(918701),
    _ = n(467628),
    C = n(667105),
    v = n(585857),
    j = n(795057),
    b = n(46140),
    T = n(388032),
    E = n(741095);
function N(e) {
    return (0, r.jsx)(c.Text, {
        className: E.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function S(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, x.n)(),
        l = (0, C.k3)(t.id, g.jn.QUEST_BAR_V2),
        d = (0, C.g2)({ useReducedMotion: n }),
        _ = (0, p.O5)(),
        v = (0, m.aM)(),
        {
            errorHints: j,
            startingConsoleQuest: b,
            startConsoleQuest: S
        } = (0, h.GI)({
            questId: t.id,
            beforeRequest: () => {
                _({
                    questId: t.id,
                    questContent: g.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: y, renderBody: A } = o.useMemo(() => {
            let e = j.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e ? T.intl.formatToPlainString(T.t['28Ql29'], { gameTitle: n }) : T.intl.formatToPlainString(T.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, r.jsx)(r.Fragment, {
                              children: j.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                                      let o = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, f.C9)(e),
                                          a = (0, f._j)(e);
                                      return (0, r.jsx)(
                                          N,
                                          {
                                              children: T.intl.format(s, {
                                                  account_name: null == o ? void 0 : o.name,
                                                  onClick: () => {
                                                      (0, f.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: a
                                                          },
                                                          {
                                                              content: g.jn.QUEST_BAR,
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
                                  return (0, r.jsx)(N, { children: e.message }, n);
                              })
                          })
                    : () =>
                          (0, r.jsx)(c.Text, {
                              className: E.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: T.intl.format(T.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [j, t, s, v]);
    return (0, r.jsxs)('div', {
        className: E.microphoneUnit,
        children: [
            (0, r.jsxs)('div', {
                className: E.microphoneUnitHeader,
                children: [
                    (0, r.jsx)(c.P4T, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === j.length ? E.warningCircle : E.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: y
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: a()(E.microphoneUnitRefreshIconWrapper, { [E.disabled]: b }),
                        onClick: () => S(),
                        children: d.render()
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()({ [E.opacity_50]: b }),
                children: [A(), 0 === j.length ? null : (0, r.jsx)(N, { children: l })]
            })
        ]
    });
}
let y = function (e) {
    let { quest: t, taskDetails: n } = e,
        s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, h.z6)(),
        i = (0, _.j)({ location: b.dr.QUESTS_BAR }),
        c = o.useMemo(() => (0, f.B3)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)), [a.xboxAndPlaystationAccounts, t]),
        {
            steps: u,
            hasConnectedAccounts: p,
            isProgressingQuestForLaunchedGame: m,
            isQuestComplete: x
        } = o.useMemo(() => {
            var e;
            let o = c.length > 0,
                s = o && (0, f.Bz)(t),
                i = t.config.messages.gameTitle,
                l = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, r.jsx)(v.Q, {
                                ...a,
                                quest: t
                            }),
                        isComplete: o || s || l
                    },
                    {
                        renderContent: () => (0, r.jsx)(j.y3, { children: T.intl.formatToPlainString(T.t['+8JB6e'], { gameTitle: i }) }),
                        isComplete: s || l
                    },
                    {
                        renderContent: () => (0, r.jsx)(j.y3, { children: T.intl.formatToPlainString(T.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: l
                    }
                ],
                hasConnectedAccounts: o,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: l
            };
        }, [a, c.length, t, n.targetMinutes]);
    return (0, r.jsxs)(j.ZP, {
        heading: T.intl.string(T.t.UPWlJi),
        steps: u,
        children: [
            i && (0, r.jsx)(j.Om, { quest: t }),
            p &&
                !m &&
                !x &&
                (0, r.jsx)(S, {
                    useReducedMotion: s,
                    quest: t
                })
        ]
    });
};
