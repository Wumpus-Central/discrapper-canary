n.d(t, { Z: () => v }), n(388685);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(617136),
    l = n(113434),
    c = n(497505),
    u = n(918701),
    d = n(602667),
    p = n(341907),
    m = n(672188),
    f = n(466962),
    g = n(439826),
    x = n(43779),
    h = n(981631),
    b = n(168989);
function j(e) {
    var t, n;
    let { quest: s, className: c, questContent: d, contentPosition: j, rowIndex: v, impressionRef: y } = e,
        [_, O] = o.useState(!1),
        [C, w] = o.useState([]),
        S = (0, l.qb)(s),
        P = o.useMemo(() => (0, u.q8)(s), [s]),
        E = (0, i._F)(),
        T = o.useCallback(() => {
            O(!0),
                E({
                    questId: s.id,
                    event: h.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(d)
                }),
                P && (0, p.loadVideoQuestModal)();
        }, [E, s.id, d, P]),
        N = o.useCallback(() => {
            O(!1),
                E({
                    questId: s.id,
                    event: h.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(d)
                });
        }, [E, s.id, d]),
        A = o.useContext(f.t),
        { visibilityElementRef: R, almostVisibleInViewport: k } = (function (e) {
            let [t, n] = o.useState(!1),
                r = o.useCallback((e) => {
                    e.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, m.S)(
                    r,
                    {
                        root: null != e ? e : null,
                        threshold: 0,
                        rootMargin: '900px 0px 900px 0px'
                    },
                    !0
                ),
                almostVisibleInViewport: t
            };
        })(null != (n = null == A || null == (t = A.current) ? void 0 : t.getScrollerNode()) ? n : null);
    return (0, r.jsxs)('div', {
        id: 'quest-tile-'.concat(s.id),
        ref: (e) => {
            (y.current = e), (R.current = e);
        },
        className: a()(b.container, c),
        onMouseEnter: T,
        onMouseLeave: N,
        onFocus: T,
        onBlur: N,
        children: [
            (0, r.jsx)(g.Z, {
                quest: s,
                isHovering: _,
                errorHints: C,
                warningHints: S,
                isVisibleInViewport: k
            }),
            (0, r.jsx)(x.Z, {
                quest: s,
                questContent: d,
                isHovering: _,
                contentPosition: j,
                rowIndex: v,
                onReceiveErrorHints: w,
                isVisibleInViewport: k
            })
        ]
    });
}
function v(e) {
    return (0, r.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
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
