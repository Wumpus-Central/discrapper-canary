(l.r(t), l.d(t, { default: () => v }), l(388685), l(35282));
var s = l(255367),
    e = l(73800),
    c = l(873546),
    i = l(442837),
    r = l(481060),
    f = l(830064),
    d = l(388905),
    o = l(625128),
    n = l(362762),
    x = l(703656),
    h = l(617136),
    p = l(272008),
    j = l(497505),
    M = l(341907),
    k = l(46140),
    z = l(981631),
    u = l(186901),
    m = l(388032),
    L = l(984214),
    y = l(74830),
    g = l(13299);
i.ZP.initialize();
let b = c.tq || c.Em;
function v(a) {
    let { match: t } = a,
        l = (0, i.e7)([n.Z], () => n.Z.getState('quests')),
        c = t.params.questId,
        v = (function (a) {
            let [t, l] = e.useState(null);
            return (
                e.useEffect(() => {
                    (0, p.gU)(a)
                        .then((a) =>
                            l({
                                status: 'ok',
                                value: a
                            })
                        )
                        .catch(() => l({ status: 'error' }));
                }, [l, a]),
                t
            );
        })(c);
    e.useEffect(() => {
        b ||
            (null == l
                ? ((0, h.dA)({
                      questId: c,
                      event: z.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT,
                      sourceQuestContent: j.jn.QUEST_HOME_DESKTOP
                  }),
                  o.Z.openNativeAppModal('quests', z.Etm.DEEP_LINK, {
                      type: u.jE.QUEST_HOME,
                      params: { questId: c }
                  }))
                : l === z.kEZ.OPEN_FAIL &&
                  (0, x.dL)({
                      pathname: z.Z5c.QUEST_HOME,
                      hash: c
                  }));
    }, [l, c]);
    let O = e.useCallback(() => (0, M.openAppWithQuest)(c), [c]);
    if (b)
        return (0, s.jsxs)('div', {
            className: L.page,
            children: [
                (0, s.jsx)('img', {
                    className: L.bgImg,
                    src: g.ZP,
                    alt: ''
                }),
                (0, s.jsx)('div', {
                    className: L.logoContainer,
                    children: (0, s.jsx)('img', {
                        src: y,
                        alt: ''
                    })
                }),
                null != v &&
                    (0, s.jsxs)('div', {
                        className: L.card,
                        children: [
                            'ok' === v.status &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: L.gameTile,
                                            children: (0, s.jsx)('img', {
                                                src: ''.concat(k.tD).concat(c, '/dark/').concat(v.value.assets.gameTile),
                                                alt: '',
                                                className: L.gameTileImg
                                            })
                                        }),
                                        (0, s.jsx)(r.X6q, {
                                            variant: 'heading-lg/semibold',
                                            color: 'text-default',
                                            className: L.headingText,
                                            children: v.value.messages.questName
                                        })
                                    ]
                                }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: L.bodyText,
                                children: m.intl.string(m.t.NweJIy)
                            }),
                            (0, s.jsx)(r.zxk, {
                                variant: 'primary',
                                text: m.intl.string(m.t.UQvCf3),
                                fullWidth: !0,
                                onClick: O
                            })
                        ]
                    })
            ]
        });
    let W = null == l || l === z.kEZ.OPENING || l === z.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(f.Z, {
                className: L.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, s.jsx)('div', {
                className: L.container,
                children: (0, s.jsx)(d.ZP, {
                    children: W
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [(0, s.jsx)(d.Dx, { children: m.intl.string(m.t['Z+hCVV']) }), (0, s.jsx)(d.Hh, {})]
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, {
                                      className: L.appOpenedTitle,
                                      children: m.intl.string(m.t.csrAMD)
                                  }),
                                  (0, s.jsx)(d.DK, { children: m.intl.string(m.t.ghBJz8) })
                              ]
                          })
                })
            })
        ]
    });
}
