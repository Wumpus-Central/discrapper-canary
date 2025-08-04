(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(617136),
    l = n(509212),
    c = n(113434),
    u = n(497505),
    d = n(602667),
    p = n(110560),
    m = n(672188),
    f = n(466962),
    g = n(439826),
    x = n(43779),
    h = n(981631),
    b = n(168989);
function j(e) {
    var t, n;
    let { quest: o, className: u, questContent: d, contentPosition: j, rowIndex: _, impressionRef: v, sourceQuestContent: C } = e,
        [y, O] = s.useState(!1),
        [E, S] = s.useState([]),
        w = (0, c.qb)(o),
        T = s.useMemo(() => (0, l.q8)(o), [o]),
        P = (0, i._F)(),
        A = s.useCallback(() => {
            (O(!0),
                P({
                    questId: o.id,
                    event: h.rMx.QUEST_HOVER,
                    properties: {
                        content_id: d,
                        content_name: (0, i._b)(d)
                    },
                    sourceQuestContent: C
                }),
                T && (0, p.loadVideoQuestModal)());
        }, [P, o.id, d, T, C]),
        N = s.useCallback(() => {
            (O(!1),
                P({
                    questId: o.id,
                    event: h.rMx.QUEST_HOVER_OFF,
                    properties: {
                        content_id: d,
                        content_name: (0, i._b)(d)
                    },
                    sourceQuestContent: C
                }));
        }, [P, o.id, d, C]),
        R = s.useContext(f.t),
        { visibilityElementRef: B, almostVisibleInViewport: k } = (function (e) {
            let [t, n] = s.useState(!1),
                r = s.useCallback((e) => {
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
        })(null != (n = null == R || null == (t = R.current) ? void 0 : t.getScrollerNode()) ? n : null);
    return (0, r.jsxs)('div', {
        id: 'quest-tile-'.concat(o.id),
        ref: (e) => {
            ((v.current = e), (B.current = e));
        },
        className: a()(b.container, u),
        onMouseEnter: A,
        onMouseLeave: N,
        onFocus: A,
        onBlur: N,
        children: [
            (0, r.jsx)(g.Z, {
                quest: o,
                isHovering: y,
                errorHints: E,
                warningHints: w,
                isVisibleInViewport: k,
                sourceQuestContent: C
            }),
            (0, r.jsx)(x.Z, {
                quest: o,
                questContent: d,
                isHovering: y,
                contentPosition: j,
                rowIndex: _,
                onReceiveErrorHints: S,
                isVisibleInViewport: k,
                sourceQuestContent: C
            })
        ]
    });
}
function _(e) {
    return (0, r.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === u.jn.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => {
            var n, s;
            return (0, r.jsx)(
                j,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, e)),
                (s = s = { impressionRef: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                n)
            );
        }
    });
}
