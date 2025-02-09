a.r(t), a.d(t, { default: () => A }), a(47120);
var n = a(200651),
    s = a(192379),
    i = a(873546),
    c = a(442837),
    l = a(481060),
    r = a(830064),
    d = a(388905),
    o = a(625128),
    g = a(362762),
    _ = a(703656),
    m = a(617136),
    u = a(272008),
    p = a(341907),
    E = a(46140),
    x = a(981631),
    h = a(186901),
    N = a(388032),
    T = a(9433),
    f = a(74830),
    j = a(13299);
c.ZP.initialize();
let k = i.tq || i.Em;
function A(e) {
    let { match: t } = e,
        a = (0, c.e7)([g.Z], () => g.Z.getState('quests')),
        i = t.params.questId,
        A = (function (e) {
            let [t, a] = s.useState(null);
            return (
                s.useEffect(() => {
                    (0, u.gU)(e)
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
        })(i);
    s.useEffect(() => {
        !k &&
            (null == a
                ? ((0, m.dA)({
                      questId: i,
                      event: x.rMx.QUEST_SHARE_LINK_DEEP_LINKED_INTO_DESKTOP_CLIENT
                  }),
                  o.Z.openNativeAppModal('quests', x.Etm.DEEP_LINK, {
                      type: h.jE.QUEST_HOME,
                      params: { questId: i }
                  }))
                : a === x.kEZ.OPEN_FAIL &&
                  (0, _.dL)({
                      pathname: x.Z5c.QUEST_HOME,
                      hash: i
                  }));
    }, [a, i]);
    let I = s.useCallback(() => (0, p.openAppWithQuest)(i), [i]);
    if (k)
        return (0, n.jsxs)('div', {
            className: T.page,
            children: [
                (0, n.jsx)('img', {
                    className: T.bgImg,
                    src: j.Z,
                    alt: ''
                }),
                (0, n.jsx)('div', {
                    className: T.logoContainer,
                    children: (0, n.jsx)('img', {
                        src: f,
                        alt: ''
                    })
                }),
                null != A &&
                    (0, n.jsxs)('div', {
                        className: T.card,
                        children: [
                            'ok' === A.status &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)('div', {
                                            className: T.gameTile,
                                            children: (0, n.jsx)('img', {
                                                src: ''.concat(E.tD).concat(i, '/dark/').concat(A.value.assets.gameTile),
                                                alt: '',
                                                className: T.gameTileImg
                                            })
                                        }),
                                        (0, n.jsx)(l.X6q, {
                                            variant: 'heading-lg/semibold',
                                            color: 'text-normal',
                                            className: T.headingText,
                                            children: A.value.messages.questName
                                        })
                                    ]
                                }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: T.bodyText,
                                children: N.intl.string(N.t.NweJIy)
                            }),
                            (0, n.jsx)(l.zxk, {
                                fullWidth: !0,
                                onClick: I,
                                children: N.intl.string(N.t.UQvCf3)
                            })
                        ]
                    })
            ]
        });
    let P = null == a || a === x.kEZ.OPENING || a === x.kEZ.OPEN_FAIL;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(r.Z, {
                className: T.backgroundArtwork,
                preserveAspectRatio: 'xMinYMin slice'
            }),
            (0, n.jsx)('div', {
                className: T.container,
                children: (0, n.jsx)(d.ZP, {
                    children: P
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [(0, n.jsx)(d.Dx, { children: N.intl.string(N.t['Z+hCVV']) }), (0, n.jsx)(d.Hh, {})]
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(d.Dx, {
                                      className: T.appOpenedTitle,
                                      children: N.intl.string(N.t.csrAMD)
                                  }),
                                  (0, n.jsx)(d.DK, { children: N.intl.string(N.t.ghBJz8) })
                              ]
                          })
                })
            })
        ]
    });
}
