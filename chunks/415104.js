n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(617136),
    l = n(113434),
    c = n(497505),
    d = n(918701),
    u = n(602667),
    p = n(341907),
    m = n(439826),
    f = n(43779),
    g = n(981631),
    x = n(168989);
function h(e) {
    let { quest: t, className: n, questContent: s, contentPosition: c, rowIndex: u, impressionRef: h } = e,
        [b, j] = o.useState(!1),
        [v, y] = o.useState([]),
        _ = (0, l.qb)(t),
        C = o.useMemo(() => (0, d.q8)(t), [t]),
        O = (0, i._F)(),
        w = o.useCallback(() => {
            j(!0),
                O({
                    questId: t.id,
                    event: g.rMx.QUEST_HOVER,
                    properties: (0, i.mH)(s)
                }),
                C && (0, p.loadVideoQuestModal)();
        }, [O, t.id, s, C]),
        S = o.useCallback(() => {
            j(!1),
                O({
                    questId: t.id,
                    event: g.rMx.QUEST_HOVER_OFF,
                    properties: (0, i.mH)(s)
                });
        }, [O, t.id, s]);
    return (0, r.jsxs)('div', {
        id: 'quest-tile-'.concat(t.id),
        ref: (e) => {
            h.current = e;
        },
        className: a()(x.container, n),
        onMouseEnter: w,
        onMouseLeave: S,
        onFocus: w,
        onBlur: S,
        children: [
            (0, r.jsx)(m.Z, {
                quest: t,
                isHovering: b,
                errorHints: v,
                warningHints: _
            }),
            (0, r.jsx)(f.Z, {
                quest: t,
                questContent: s,
                isHovering: b,
                contentPosition: c,
                rowIndex: u,
                onReceiveErrorHints: y
            })
        ]
    });
}
function b(e) {
    return (0, r.jsx)(u.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === c.jn.QUESTS_EMBED,
        children: (t) => {
            var n, o;
            return (0, r.jsx)(
                h,
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
