l.r(t), l.d(t, { default: () => b }), l(388685), l(35282);
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
    j = l(341907),
    M = l(46140),
    k = l(981631),
    z = l(186901),
    u = l(388032),
    m = l(984214),
    L = l(74830),
    y = l(13299);
i.ZP.initialize();
let g = c.tq || c.Em;
function b(a) {
    let { match: t } = a,
        l = (0, i.e7)([n.Z], () => n.Z.getState('quests')),
        c = t.params.questId,
        b = (function (a) {
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
        g ||
            (null == l
                ? ((0, h.dA)({
                      questId: c,
                      event: k.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT
                  }),
                  o.Z.openNativeAppModal('quests', k.Etm.DEEP_LINK, {
                      type: z.jE.QUEST_HOME,
                      params: { questId: c }
                  }))
                : l === k.kEZ.OPEN_FAIL &&
                  (0, x.dL)({
                      pathname: k.Z5c.QUEST_HOME,
                      hash: c
                  }));
    }, [l, c]);
    let v = e.useCallback(() => (0, j.openAppWithQuest)(c), [c]);
    if (g)
        return (0, s.jsxs)('div', {
            className: m.page,
            children: [
                (0, s.jsx)('img', {
                    className: m.bgImg,
                    src: y.ZP,
                    alt: ''
                }),
                (0, s.jsx)('div', {
                    className: m.logoContainer,
                    children: (0, s.jsx)('img', {
                        src: L,
                        alt: ''
                    })
                }),
                null != b &&
                    (0, s.jsxs)('div', {
                        className: m.card,
                        children: [
                            'ok' === b.status &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)('div', {
                                            className: m.gameTile,
                                            children: (0, s.jsx)('img', {
                                                src: ''.concat(M.tD).concat(c, '/dark/').concat(b.value.assets.gameTile),
                                                alt: '',
                                                className: m.gameTileImg
                                            })
                                        }),
                                        (0, s.jsx)(r.X6q, {
                                            variant: 'heading-lg/semibold',
                                            color: 'text-normal',
                                            className: m.headingText,
                                            children: b.value.messages.questName
                                        })
                                    ]
                                }),
                            (0, s.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                className: m.bodyText,
                                children: u.intl.string(u.t.NweJIy)
                            }),
                            (0, s.jsx)(r.zxk, {
                                fullWidth: !0,
                                onClick: v,
                                children: u.intl.string(u.t.UQvCf3)
                            })
                        ]
                    })
            ]
        });
    let W = null == l || l === k.kEZ.OPENING || l === k.kEZ.OPEN_FAIL;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(f.Z, {
                className: m.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, s.jsx)('div', {
                className: m.container,
                children: (0, s.jsx)(d.ZP, {
                    children: W
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [(0, s.jsx)(d.Dx, { children: u.intl.string(u.t['Z+hCVV']) }), (0, s.jsx)(d.Hh, {})]
                          })
                        : (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(d.Dx, {
                                      className: m.appOpenedTitle,
                                      children: u.intl.string(u.t.csrAMD)
                                  }),
                                  (0, s.jsx)(d.DK, { children: u.intl.string(u.t.ghBJz8) })
                              ]
                          })
                })
            })
        ]
    });
}
