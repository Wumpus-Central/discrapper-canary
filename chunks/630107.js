a.r(t), a.d(t, { default: () => f }), a(47120), a(301563);
var n = a(200651),
    s = a(192379),
    c = a(873546),
    l = a(442837),
    i = a(481060),
    r = a(830064),
    d = a(388905),
    o = a(625128),
    g = a(362762),
    u = a(703656),
    _ = a(617136),
    N = a(272008),
    E = a(341907),
    m = a(46140),
    p = a(981631),
    h = a(186901),
    x = a(388032),
    P = a(984214),
    k = a(74830),
    I = a(13299);
l.ZP.initialize();
let T = c.tq || c.Em;
function f(e) {
    let { match: t } = e,
        a = (0, l.e7)([g.Z], () => g.Z.getState('quests')),
        c = t.params.questId,
        f = (function (e) {
            let [t, a] = s.useState(null);
            return (
                s.useEffect(() => {
                    (0, N.gU)(e)
                        .then((e) =>
                            a({
                                status: 'ok',
                                value: e
                            })
                        )
                        .catch(() => a({ status: 'error' }));
                }, [a, e]),
                t
            );
        })(c);
    s.useEffect(() => {
        T ||
            (null == a
                ? ((0, _.dA)({
                      questId: c,
                      event: p.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT
                  }),
                  o.Z.openNativeAppModal('quests', p.Etm.DEEP_LINK, {
                      type: h.jE.QUEST_HOME,
                      params: { questId: c }
                  }))
                : a === p.kEZ.OPEN_FAIL &&
                  (0, u.dL)({
                      pathname: p.Z5c.QUEST_HOME,
                      hash: c
                  }));
    }, [a, c]);
    let A = s.useCallback(() => (0, E.openAppWithQuest)(c), [c]);
    if (T)
        return (0, n.jsxs)('div', {
            className: P.page,
            children: [
                (0, n.jsx)('img', {
                    className: P.bgImg,
                    src: I.ZP,
                    alt: ''
                }),
                (0, n.jsx)('div', {
                    className: P.logoContainer,
                    children: (0, n.jsx)('img', {
                        src: k,
                        alt: ''
                    })
                }),
                null != f &&
                    (0, n.jsxs)('div', {
                        className: P.card,
                        children: [
                            'ok' === f.status &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('div', {
                                            className: P.gameTile,
                                            children: (0, n.jsx)('img', {
                                                src: ''.concat(m.tD).concat(c, '/dark/').concat(f.value.assets.gameTile),
                                                alt: '',
                                                className: P.gameTileImg
                                            })
                                        }),
                                        (0, n.jsx)(i.X6q, {
                                            variant: 'heading-lg/semibold',
                                            color: 'text-normal',
                                            className: P.headingText,
                                            children: f.value.messages.questName
                                        })
                                    ]
                                }),
                            (0, n.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                className: P.bodyText,
                                children: x.NW.string(x.t.NweJIy)
                            }),
                            (0, n.jsx)(i.zxk, {
                                fullWidth: !0,
                                onClick: A,
                                children: x.NW.string(x.t.UQvCf3)
                            })
                        ]
                    })
            ]
        });
    let O = null == a || a === p.kEZ.OPENING || a === p.kEZ.OPEN_FAIL;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.Z, {
                className: P.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, n.jsx)('div', {
                className: P.container,
                children: (0, n.jsx)(d.ZP, {
                    children: O
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [(0, n.jsx)(d.Dx, { children: x.NW.string(x.t['Z+hCVV']) }), (0, n.jsx)(d.Hh, {})]
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(d.Dx, {
                                      className: P.appOpenedTitle,
                                      children: x.NW.string(x.t.csrAMD)
                                  }),
                                  (0, n.jsx)(d.DK, { children: x.NW.string(x.t.ghBJz8) })
                              ]
                          })
                })
            })
        ]
    });
}
