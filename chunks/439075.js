n.d(t, {
    A: () => _,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(341915),
    o = n(890687),
    c = n(18437),
    d = n(590202),
    u = n(792620),
    m = n(73473),
    p = n(545986),
    h = n(203879),
    x = n(321503),
    g = n(56853),
    f = n(515038),
    b = n(652215),
    v = n(348655);

function j(e) {
    var t, n;
    let {
            quest: r,
            className: s,
            questContent: m,
            contentPosition: j,
            rowIndex: _,
            impressionRef: y,
            sourceQuestContent: A,
        } = e,
        [C, S] = l.useState(!1),
        [O, T] = l.useState([]),
        E = (0, o.aC)(r),
        N = l.useMemo(() => (0, u.vv)(r), [r]),
        w = (0, c.u0)(),
        I = l.useCallback(() => {
            S(!0),
                w({
                    questId: r.id,
                    event: b.HAw.QUEST_HOVER,
                    properties: {
                        content_id: m,
                        content_name: (0, d.jO)(m),
                        content_position: j,
                    },
                    sourceQuestContent: A,
                }),
                N && (0, p.l9)();
        }, [w, r.id, m, N, A, j]),
        k = l.useCallback(() => {
            S(!1),
                w({
                    questId: r.id,
                    event: b.HAw.QUEST_HOVER_OFF,
                    properties: {
                        content_id: m,
                        content_name: (0, d.jO)(m),
                        content_position: j,
                    },
                    sourceQuestContent: A,
                });
        }, [w, r.id, m, A, j]),
        P = l.useContext(x.X),
        { visibilityElementRef: R, almostVisibleInViewport: D } = (function (e) {
            let [t, n] = l.useState(!1),
                a = l.useCallback((e) => {
                    e.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, h.B)(
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
        })(null != (t = null == P || null == (n = P.current) ? void 0 : n.getScrollerNode()) ? t : null);
    return (0, a.jsxs)("div", {
        id: "quest-tile-".concat(r.id),
        ref: (e) => {
            (y.current = e), (R.current = e);
        },
        className: i()(v.k, s),
        onMouseEnter: I,
        onMouseLeave: k,
        onFocus: I,
        onBlur: k,
        children: [
            (0, a.jsx)(g.A, {
                quest: r,
                isHovering: C,
                errorHints: O,
                warningHints: E,
                isVisibleInViewport: D,
                sourceQuestContent: A,
            }),
            (0, a.jsx)(f.A, {
                quest: r,
                questContent: m,
                isHovering: C,
                contentPosition: j,
                rowIndex: _,
                onReceiveErrorHints: T,
                isVisibleInViewport: D,
                sourceQuestContent: A,
            }),
        ],
    });
}

function _(e) {
    return (0, a.jsx)(m.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === s.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => {
            var n, l;
            return (0, a.jsx)(
                j,
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
                (l = l =
                    {
                        impressionRef: t,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n),
            );
        },
    });
}
