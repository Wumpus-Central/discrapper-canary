n.d(t, { Z: () => j }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(617136),
    o = n(49436),
    c = n(968843),
    d = n(254579),
    u = n(602667),
    m = n(110560),
    p = n(672188),
    h = n(466962),
    x = n(439826),
    f = n(43779),
    g = n(981631),
    b = n(88036);
function v(e) {
    var t, n;
    let {
            quest: i,
            className: o,
            questContent: u,
            contentPosition: v,
            rowIndex: j,
            impressionRef: _,
            sourceQuestContent: y,
        } = e,
        [C, S] = r.useState(!1),
        [E, O] = r.useState([]),
        T = (0, c.qb)(i),
        N = r.useMemo(() => (0, d.q8)(i), [i]),
        P = (0, s._F)(),
        w = r.useCallback(() => {
            S(!0),
                P({
                    questId: i.id,
                    event: g.rMx.QUEST_HOVER,
                    properties: {
                        content_id: u,
                        content_name: (0, s._b)(u),
                        content_position: v,
                    },
                    sourceQuestContent: y,
                }),
                N && (0, m.loadVideoQuestModal)();
        }, [P, i.id, u, N, y, v]),
        I = r.useCallback(() => {
            S(!1),
                P({
                    questId: i.id,
                    event: g.rMx.QUEST_HOVER_OFF,
                    properties: {
                        content_id: u,
                        content_name: (0, s._b)(u),
                        content_position: v,
                    },
                    sourceQuestContent: y,
                });
        }, [P, i.id, u, y, v]),
        k = r.useContext(h.t),
        { visibilityElementRef: R, almostVisibleInViewport: A } = (function (e) {
            let [t, n] = r.useState(!1),
                a = r.useCallback((e) => {
                    e.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, p.S)(
                    a,
                    {
                        root: null != e ? e : null,
                        threshold: 0,
                        rootMargin: "900px 0px 900px 0px",
                    },
                    !0,
                ),
                almostVisibleInViewport: t,
            };
        })(null != (n = null == k || null == (t = k.current) ? void 0 : t.getScrollerNode()) ? n : null);
    return (0, a.jsxs)("div", {
        id: "quest-tile-".concat(i.id),
        ref: (e) => {
            (_.current = e), (R.current = e);
        },
        className: l()(b.container, o),
        onMouseEnter: w,
        onMouseLeave: I,
        onFocus: w,
        onBlur: I,
        children: [
            (0, a.jsx)(x.Z, {
                quest: i,
                isHovering: C,
                errorHints: E,
                warningHints: T,
                isVisibleInViewport: A,
                sourceQuestContent: y,
            }),
            (0, a.jsx)(f.Z, {
                quest: i,
                questContent: u,
                isHovering: C,
                contentPosition: v,
                rowIndex: j,
                onReceiveErrorHints: O,
                isVisibleInViewport: A,
                sourceQuestContent: y,
            }),
        ],
    });
}
function j(e) {
    return (0, a.jsx)(u.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === o.jn.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => {
            var n, r;
            return (0, a.jsx)(
                v,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r = { impressionRef: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                n),
            );
        },
    });
}
