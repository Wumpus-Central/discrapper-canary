n.d(t, { Z: () => j }), n(388685);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(617136),
    l = n(49436),
    c = n(968843),
    u = n(254579),
    d = n(602667),
    p = n(110560),
    m = n(672188),
    f = n(466962),
    g = n(439826),
    x = n(43779),
    h = n(981631),
    _ = n(88036);
function b(e) {
    var t, n;
    let {
            quest: o,
            className: l,
            questContent: d,
            contentPosition: b,
            rowIndex: j,
            impressionRef: v,
            sourceQuestContent: C,
        } = e,
        [y, E] = s.useState(!1),
        [O, S] = s.useState([]),
        T = (0, c.qb)(o),
        w = s.useMemo(() => (0, u.q8)(o), [o]),
        P = (0, i._F)(),
        N = s.useCallback(() => {
            E(!0),
                P({
                    questId: o.id,
                    event: h.rMx.QUEST_HOVER,
                    properties: {
                        content_id: d,
                        content_name: (0, i._b)(d),
                        content_position: b,
                    },
                    sourceQuestContent: C,
                }),
                w && (0, p.loadVideoQuestModal)();
        }, [P, o.id, d, w, C, b]),
        R = s.useCallback(() => {
            E(!1),
                P({
                    questId: o.id,
                    event: h.rMx.QUEST_HOVER_OFF,
                    properties: {
                        content_id: d,
                        content_name: (0, i._b)(d),
                        content_position: b,
                    },
                    sourceQuestContent: C,
                });
        }, [P, o.id, d, C, b]),
        A = s.useContext(f.t),
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
                        rootMargin: "900px 0px 900px 0px",
                    },
                    !0,
                ),
                almostVisibleInViewport: t,
            };
        })(null != (n = null == A || null == (t = A.current) ? void 0 : t.getScrollerNode()) ? n : null);
    return (0, r.jsxs)("div", {
        id: "quest-tile-".concat(o.id),
        ref: (e) => {
            (v.current = e), (B.current = e);
        },
        className: a()(_.container, l),
        onMouseEnter: N,
        onMouseLeave: R,
        onFocus: N,
        onBlur: R,
        children: [
            (0, r.jsx)(g.Z, {
                quest: o,
                isHovering: y,
                errorHints: O,
                warningHints: T,
                isVisibleInViewport: k,
                sourceQuestContent: C,
            }),
            (0, r.jsx)(x.Z, {
                quest: o,
                questContent: d,
                isHovering: y,
                contentPosition: b,
                rowIndex: j,
                onReceiveErrorHints: S,
                isVisibleInViewport: k,
                sourceQuestContent: C,
            }),
        ],
    });
}
function j(e) {
    return (0, r.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === l.jn.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => {
            var n, s;
            return (0, r.jsx)(
                b,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
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
                n),
            );
        },
    });
}
