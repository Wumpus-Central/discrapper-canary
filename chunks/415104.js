n.d(t, { Z: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(617136),
    l = n(509212),
    c = n(113434),
    u = n(497505),
    d = n(602667),
    f = n(110560),
    _ = n(672188),
    p = n(466962),
    h = n(439826),
    m = n(43779),
    g = n(981631),
    E = n(974326);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let [t, n] = i.useState(!1),
        r = i.useCallback((e) => {
            e.isIntersecting && n(!0);
        }, []);
    return {
        visibilityElementRef: (0, _.S)(
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
}
function T(e) {
    var t, n;
    let {
            quest: a,
            className: u,
            questContent: d,
            contentPosition: _,
            rowIndex: b,
            impressionRef: y,
            sourceQuestContent: O,
        } = e,
        [v, T] = i.useState(!1),
        [S, A] = i.useState([]),
        C = (0, c.qb)(a),
        N = i.useMemo(() => (0, l.q8)(a), [a]),
        R = (0, s._F)(),
        P = i.useCallback(() => {
            T(!0),
                R({
                    questId: a.id,
                    event: g.rMx.QUEST_HOVER,
                    properties: {
                        content_id: d,
                        content_name: (0, s._b)(d),
                        content_position: _,
                    },
                    sourceQuestContent: O,
                }),
                N && (0, f.loadVideoQuestModal)();
        }, [R, a.id, d, N, O, _]),
        w = i.useCallback(() => {
            T(!1),
                R({
                    questId: a.id,
                    event: g.rMx.QUEST_HOVER_OFF,
                    properties: {
                        content_id: d,
                        content_name: (0, s._b)(d),
                        content_position: _,
                    },
                    sourceQuestContent: O,
                });
        }, [R, a.id, d, O, _]),
        D = i.useContext(p.t),
        { visibilityElementRef: x, almostVisibleInViewport: L } = I(
            null != (n = null == D || null == (t = D.current) ? void 0 : t.getScrollerNode()) ? n : null,
        );
    return (0, r.jsxs)("div", {
        id: "quest-tile-".concat(a.id),
        ref: (e) => {
            (y.current = e), (x.current = e);
        },
        className: o()(E.container, u),
        onMouseEnter: P,
        onMouseLeave: w,
        onFocus: P,
        onBlur: w,
        children: [
            (0, r.jsx)(h.Z, {
                quest: a,
                isHovering: v,
                errorHints: S,
                warningHints: C,
                isVisibleInViewport: L,
                sourceQuestContent: O,
            }),
            (0, r.jsx)(m.Z, {
                quest: a,
                questContent: d,
                isHovering: v,
                contentPosition: _,
                rowIndex: b,
                onReceiveErrorHints: A,
                isVisibleInViewport: L,
                sourceQuestContent: O,
            }),
        ],
    });
}
function S(e) {
    return (0, r.jsx)(d.A, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === u.jn.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, r.jsx)(T, v(y({}, e), { impressionRef: t })),
    });
}
