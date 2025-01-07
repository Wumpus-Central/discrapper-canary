var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(959078),
    l = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(553795),
    p = n(617136),
    m = n(111382),
    x = n(113434),
    f = n(497505),
    g = n(918701),
    h = n(667105),
    C = n(585857),
    v = n(388032),
    j = n(313750);
function _(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, o.jsxs)('li', {
        className: a()(j.stepWrapper, { [j.stepWrapperComplete]: n }, { [j.stepWrapperWithNextStep]: r }),
        children: [
            (0, o.jsxs)('div', {
                className: j.stepIndicator,
                children: [
                    (0, o.jsx)('div', {
                        className: j.stepIconWrapper,
                        children:
                            n &&
                            (0, o.jsx)(c.CheckmarkLargeBoldIcon, {
                                className: j.stepIcon,
                                color: c.tokens.colors.WHITE
                            })
                    }),
                    r && (0, o.jsx)('div', { className: j.stepConnector })
                ]
            }),
            (0, o.jsx)('div', {
                className: j.stepContent,
                children: t
            })
        ]
    });
}
function b(e) {
    return (0, o.jsx)(c.Text, {
        className: j.microphoneUnitBodyText,
        color: 'text-muted',
        variant: 'text-xxs/normal',
        children: e.children
    });
}
function N(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, m.n)(),
        l = (0, h.k3)(t.id, f.jn.QUEST_BAR_V2),
        d = (0, h.g2)({ useReducedMotion: n }),
        {
            errorHints: C,
            startingConsoleQuest: _,
            startConsoleQuest: N
        } = (0, x.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, p._3)({
                    questId: t.id,
                    questContent: f.jn.QUEST_BAR_V2,
                    questContentCTA: p.jZ.DEFIBRILLATOR
                }),
                    d.startAnimation();
            },
            afterRequest: d.stopAnimation
        }),
        { header: E, renderBody: B } = r.useMemo(() => {
            let e = C.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e ? v.intl.formatToPlainString(v.t['28Ql29'], { gameTitle: n }) : v.intl.formatToPlainString(v.t.gX0Qc3, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, o.jsx)(o.Fragment, {
                              children: C.map((e, n) => {
                                  if (e.type === i.K.EXPIRED_CREDENTIAL && s) {
                                      let r = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, g.C9)(e),
                                          a = (0, g._j)(e);
                                      return (0, o.jsx)(
                                          b,
                                          {
                                              children: v.intl.format(s, {
                                                  account_name: null == r ? void 0 : r.name,
                                                  onClick: () => {
                                                      (0, g.fY)(
                                                          {
                                                              quest: t,
                                                              platformType: a
                                                          },
                                                          {
                                                              content: f.jn.QUEST_BAR,
                                                              ctaContent: p.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
                                                          }
                                                      );
                                                  }
                                              })
                                          },
                                          n
                                      );
                                  }
                                  return (0, o.jsx)(b, { children: e.message }, n);
                              })
                          })
                    : () =>
                          (0, o.jsx)(c.Text, {
                              className: j.microphoneUnitBodyText,
                              color: 'text-muted',
                              variant: 'text-xxs/normal',
                              children: v.intl.format(v.t.GXqvCw, { gameTitle: n })
                          })
            };
        }, [t, C, s]);
    return (0, o.jsxs)('div', {
        className: j.microphoneUnit,
        children: [
            (0, o.jsxs)('div', {
                className: j.microphoneUnitHeader,
                children: [
                    (0, o.jsx)(c.CircleWarningIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: 0 === C.length ? j.warningCircle : j.errorCircle,
                        width: 16,
                        height: 16
                    }),
                    (0, o.jsx)(c.Text, {
                        variant: 'text-xs/medium',
                        children: E
                    }),
                    (0, o.jsx)(c.Clickable, {
                        className: a()(j.microphoneUnitRefreshIconWrapper, { [j.disabled]: _ }),
                        onClick: () => N(),
                        children: d.render()
                    })
                ]
            }),
            (0, o.jsxs)('div', {
                className: a()({ [j.opacity_50]: _ }),
                children: [B(), 0 === C.length ? null : (0, o.jsx)(b, { children: l })]
            })
        ]
    });
}
function E(e) {
    let { text: t } = e;
    return (0, o.jsx)(c.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: t
    });
}
t.Z = function (e) {
    let { quest: t, taskDetails: n } = e,
        s = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        a = (0, x.z6)(),
        {
            steps: i,
            hasConnectedAccounts: u,
            isProgressingQuestForLaunchedGame: p,
            isQuestComplete: m
        } = r.useMemo(() => {
            var e;
            let r = a.xboxAndPlaystationAccounts.length > 0,
                s = r && (0, g.Bz)(t),
                i = t.config.messages.gameTitle,
                l = (null === (e = t.userStatus) || void 0 === e ? void 0 : e.completedAt) != null;
            return {
                steps: [
                    {
                        renderContent: () =>
                            (0, o.jsx)(C.Q, {
                                ...a,
                                quest: t
                            }),
                        isComplete: r || s || l
                    },
                    {
                        renderContent: () => (0, o.jsx)(E, { text: v.intl.formatToPlainString(v.t['+8JB6e'], { gameTitle: i }) }),
                        isComplete: s || l
                    },
                    {
                        renderContent: () => (0, o.jsx)(E, { text: v.intl.formatToPlainString(v.t.HhfrYW, { numMinutes: n.targetMinutes }) }),
                        isComplete: l
                    }
                ],
                hasConnectedAccounts: r,
                isProgressingQuestForLaunchedGame: s,
                isQuestComplete: l
            };
        }, [a, t, n]);
    return (0, o.jsxs)('div', {
        className: j.wrapper,
        children: [
            (0, o.jsx)('div', {
                className: j.headingWrapper,
                children: (0, o.jsx)(c.Heading, {
                    className: j.heading,
                    variant: 'text-xs/medium',
                    children: v.intl.string(v.t.UPWlJi)
                })
            }),
            (0, o.jsxs)('div', {
                className: j.stepsWrapper,
                children: [
                    (0, o.jsx)('ul', {
                        children: i.map((e, t) =>
                            (0, o.jsx)(
                                _,
                                {
                                    isComplete: e.isComplete,
                                    hasNextStep: t < i.length - 1,
                                    children: e.renderContent()
                                },
                                t
                            )
                        )
                    }),
                    u &&
                        !p &&
                        !m &&
                        (0, o.jsx)(N, {
                            useReducedMotion: s,
                            quest: t
                        })
                ]
            })
        ]
    });
};
