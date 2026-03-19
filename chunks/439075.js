n.d(t, { A: () => j });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(341915),
    o = n(890687),
    d = n(18437),
    c = n(590202),
    u = n(792620),
    m = n(73473),
    h = n(545986),
    x = n(203879),
    p = n(321503),
    g = n(56853),
    _ = n(515038),
    f = n(652215),
    v = n(348655);
function b(e) {
    let {
            quest: t,
            className: n,
            questContent: s,
            contentPosition: r,
            rowIndex: m,
            impressionRef: b,
            sourceQuestContent: j,
        } = e,
        [A, C] = i.useState(!1),
        [y, T] = i.useState([]),
        S = (0, o.aC)(t),
        E = i.useMemo(() => (0, u.vv)(t), [t]),
        N = (0, d.u0)(),
        I = i.useCallback(() => {
            C(!0),
                N({
                    questId: t.id,
                    event: f.HAw.QUEST_HOVER,
                    properties: { content_id: s, content_name: (0, c.jO)(s), content_position: r },
                    sourceQuestContent: j,
                }),
                E && (0, h.l9)();
        }, [N, t.id, s, E, j, r]),
        k = i.useCallback(() => {
            C(!1),
                N({
                    questId: t.id,
                    event: f.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: s, content_name: (0, c.jO)(s), content_position: r },
                    sourceQuestContent: j,
                });
        }, [N, t.id, s, j, r]),
        R = i.useContext(p.X),
        { visibilityElementRef: O, almostVisibleInViewport: w } = (function (e) {
            let [t, n] = i.useState(!1),
                a = i.useCallback((e) => {
                    e.isIntersecting && n(!0);
                }, []);
            return {
                visibilityElementRef: (0, x.B)(
                    a,
                    { root: e ?? null, threshold: 0, rootMargin: "900px 0px 900px 0px" },
                    !0,
                ),
                almostVisibleInViewport: t,
            };
        })(R?.current?.getScrollerNode() ?? null);
    return (0, a.jsxs)("div", {
        id: `quest-tile-${t.id}`,
        ref: (e) => {
            (b.current = e), (O.current = e);
        },
        className: l()(v.k, n),
        onMouseEnter: I,
        onMouseLeave: k,
        onFocus: I,
        onBlur: k,
        children: [
            (0, a.jsx)(g.A, {
                quest: t,
                isHovering: A,
                errorHints: y,
                warningHints: S,
                isVisibleInViewport: w,
                sourceQuestContent: j,
            }),
            (0, a.jsx)(_.A, {
                quest: t,
                questContent: s,
                isHovering: A,
                contentPosition: r,
                rowIndex: m,
                onReceiveErrorHints: T,
                isVisibleInViewport: w,
                sourceQuestContent: j,
            }),
        ],
    });
}
let j = i.memo(function (e) {
    return (0, a.jsx)(m.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === r.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, a.jsx)(b, { ...e, impressionRef: t }),
    });
});
