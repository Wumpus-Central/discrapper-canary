s.d(t, { A: () => g });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(341915),
    o = s(890687),
    c = s(18437),
    u = s(590202),
    d = s(792620),
    x = s(73473),
    m = s(545986),
    h = s(203879),
    C = s(321503),
    j = s(56853),
    E = s(515038),
    f = s(652215),
    v = s(355620);
function N(e) {
    let {
            quest: t,
            className: s,
            questContent: a,
            contentPosition: r,
            rowIndex: x,
            impressionRef: N,
            sourceQuestContent: g,
        } = e,
        [A, O] = i.useState(!1),
        [p, y] = i.useState([]),
        S = (0, o.aC)(t),
        T = i.useMemo(() => (0, d.vv)(t), [t]),
        I = (0, c.u0)(),
        _ = i.useCallback(() => {
            O(!0),
                I({
                    questId: t.id,
                    event: f.HAw.QUEST_HOVER,
                    properties: { content_id: a, content_name: (0, u.jO)(a), content_position: r },
                    sourceQuestContent: g,
                }),
                T && (0, m.l9)();
        }, [I, t.id, a, T, g, r]),
        w = i.useCallback(() => {
            O(!1),
                I({
                    questId: t.id,
                    event: f.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: a, content_name: (0, u.jO)(a), content_position: r },
                    sourceQuestContent: g,
                });
        }, [I, t.id, a, g, r]),
        Q = i.useContext(C.X),
        { visibilityElementRef: q, almostVisibleInViewport: L } = (function (e) {
            let [t, s] = i.useState(!1),
                n = i.useCallback((e) => {
                    e.isIntersecting && s(!0);
                }, []);
            return {
                visibilityElementRef: (0, h.B)(
                    n,
                    { root: e ?? null, threshold: 0, rootMargin: "900px 0px 900px 0px" },
                    !0,
                ),
                almostVisibleInViewport: t,
            };
        })(Q?.current?.getScrollerNode() ?? null);
    return (0, n.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            (N.current = e), (q.current = e);
        },
        className: l()(v.k, s),
        onMouseEnter: _,
        onMouseLeave: w,
        onFocus: _,
        onBlur: w,
        children: [
            (0, n.jsx)(j.A, {
                quest: t,
                isHovering: A,
                errorHints: p,
                warningHints: S,
                isVisibleInViewport: L,
                sourceQuestContent: g,
            }),
            (0, n.jsx)(E.A, {
                quest: t,
                questContent: a,
                isHovering: A,
                contentPosition: r,
                rowIndex: x,
                onReceiveErrorHints: y,
                isVisibleInViewport: L,
                sourceQuestContent: g,
            }),
        ],
    });
}
let g = i.memo(function (e) {
    return (0, n.jsx)(x.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === r.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, n.jsx)(N, { ...e, impressionRef: t }),
    });
});
