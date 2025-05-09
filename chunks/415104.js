n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(434650),
    l = n(617136),
    c = n(113434),
    d = n(497505),
    u = n(918701),
    p = n(602667),
    m = n(341907),
    f = n(466962),
    g = n(439826),
    x = n(43779),
    h = n(981631),
    b = n(168989);
function j(e) {
    var t, n;
    let { quest: s, className: d, questContent: p, contentPosition: j, rowIndex: v, impressionRef: _ } = e,
        [y, C] = o.useState(!1),
        [O, w] = o.useState([]),
        S = (0, c.qb)(s),
        P = o.useMemo(() => (0, u.q8)(s), [s]),
        E = (0, l._F)(),
        T = o.useCallback(() => {
            C(!0),
                E({
                    questId: s.id,
                    event: h.rMx.QUEST_HOVER,
                    properties: (0, l.mH)(p)
                }),
                P && (0, m.loadVideoQuestModal)();
        }, [E, s.id, p, P]),
        N = o.useCallback(() => {
            C(!1),
                E({
                    questId: s.id,
                    event: h.rMx.QUEST_HOVER_OFF,
                    properties: (0, l.mH)(p)
                });
        }, [E, s.id, p]),
        A = o.useContext(f.t),
        { visibilityElementRef: R, almostVisibleInViewport: B } = (function (e) {
            let [t, n] = o.useState(!1),
                r = o.useCallback((e) => {
                    e.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, i.S)(
                    r,
                    {
                        root: null != e ? e : null,
                        threshold: 0,
                        rootMargin: '600px 0px 600px 0px'
                    },
                    !0
                ),
                almostVisibleInViewport: t
            };
        })(null != (n = null == A || null == (t = A.current) ? void 0 : t.getScrollerNode()) ? n : null);
    return (0, r.jsxs)('div', {
        id: 'quest-tile-'.concat(s.id),
        ref: (e) => {
            (_.current = e), (R.current = e);
        },
        className: a()(b.container, d),
        onMouseEnter: T,
        onMouseLeave: N,
        onFocus: T,
        onBlur: N,
        children: [
            (0, r.jsx)(g.Z, {
                quest: s,
                isHovering: y,
                errorHints: O,
                warningHints: S,
                isVisibleInViewport: B
            }),
            (0, r.jsx)(x.Z, {
                quest: s,
                questContent: p,
                isHovering: y,
                contentPosition: j,
                rowIndex: v,
                onReceiveErrorHints: w,
                isVisibleInViewport: B
            })
        ]
    });
}
function v(e) {
    return (0, r.jsx)(p.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === d.jn.QUESTS_EMBED,
        children: (t) => {
            var n, o;
            return (0, r.jsx)(
                j,
                ((n = (function (e) {
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
                })({}, e)),
                (o = o = { impressionRef: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                n)
            );
        }
    });
}
