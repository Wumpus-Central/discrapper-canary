n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(617136),
    l = n(509212),
    c = n(113434),
    d = n(497505),
    u = n(602667),
    p = n(110560),
    m = n(672188),
    g = n(466962),
    f = n(439826),
    h = n(43779),
    x = n(981631),
    b = n(88036);
function _(e) {
    var t, n;
    let {
            quest: o,
            className: d,
            questContent: u,
            contentPosition: _,
            rowIndex: j,
            impressionRef: v,
            sourceQuestContent: C,
        } = e,
        [y, E] = s.useState(!1),
        [O, S] = s.useState([]),
        T = (0, c.qb)(o),
        w = s.useMemo(() => (0, l.q8)(o), [o]),
        P = (0, i._F)(),
        N = s.useCallback(() => {
            E(!0),
                P({
                    questId: o.id,
                    event: x.rMx.QUEST_HOVER,
                    properties: {
                        content_id: u,
                        content_name: (0, i._b)(u),
                        content_position: _,
                    },
                    sourceQuestContent: C,
                }),
                w && (0, p.loadVideoQuestModal)();
        }, [P, o.id, u, w, C, _]),
        A = s.useCallback(() => {
            E(!1),
                P({
                    questId: o.id,
                    event: x.rMx.QUEST_HOVER_OFF,
                    properties: {
                        content_id: u,
                        content_name: (0, i._b)(u),
                        content_position: _,
                    },
                    sourceQuestContent: C,
                });
        }, [P, o.id, u, C, _]),
        R = s.useContext(g.t),
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
        })(null != (n = null == R || null == (t = R.current) ? void 0 : t.getScrollerNode()) ? n : null);
    return (0, r.jsxs)("div", {
        id: "quest-tile-".concat(o.id),
        ref: (e) => {
            (v.current = e), (B.current = e);
        },
        className: a()(b.container, d),
        onMouseEnter: N,
        onMouseLeave: A,
        onFocus: N,
        onBlur: A,
        children: [
            (0, r.jsx)(f.Z, {
                quest: o,
                isHovering: y,
                errorHints: O,
                warningHints: T,
                isVisibleInViewport: k,
                sourceQuestContent: C,
            }),
            (0, r.jsx)(h.Z, {
                quest: o,
                questContent: u,
                isHovering: y,
                contentPosition: _,
                rowIndex: j,
                onReceiveErrorHints: S,
                isVisibleInViewport: k,
                sourceQuestContent: C,
            }),
        ],
    });
}
function j(e) {
    return (0, r.jsx)(u.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === d.jn.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => {
            var n, s;
            return (0, r.jsx)(
                _,
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
