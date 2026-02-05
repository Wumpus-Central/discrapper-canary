n.d(t, { A: () => j });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
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
            questContent: i,
            contentPosition: r,
            rowIndex: m,
            impressionRef: b,
            sourceQuestContent: j,
        } = e,
        [A, C] = s.useState(!1),
        [S, T] = s.useState([]),
        y = (0, o.aC)(t),
        N = s.useMemo(() => (0, u.vv)(t), [t]),
        E = (0, d.u0)(),
        I = s.useCallback(() => {
            C(!0),
                E({
                    questId: t.id,
                    event: f.HAw.QUEST_HOVER,
                    properties: { content_id: i, content_name: (0, c.jO)(i), content_position: r },
                    sourceQuestContent: j,
                }),
                N && (0, h.l9)();
        }, [E, t.id, i, N, j, r]),
        k = s.useCallback(() => {
            C(!1),
                E({
                    questId: t.id,
                    event: f.HAw.QUEST_HOVER_OFF,
                    properties: { content_id: i, content_name: (0, c.jO)(i), content_position: r },
                    sourceQuestContent: j,
                });
        }, [E, t.id, i, j, r]),
        R = s.useContext(p.X),
        { visibilityElementRef: O, almostVisibleInViewport: w } = (function (e) {
            let [t, n] = s.useState(!1),
                a = s.useCallback((e) => {
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
                errorHints: S,
                warningHints: y,
                isVisibleInViewport: w,
                sourceQuestContent: j,
            }),
            (0, a.jsx)(_.A, {
                quest: t,
                questContent: i,
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
function j(e) {
    return (0, a.jsx)(m.R, {
        questOrQuests: e.quest,
        questContent: e.questContent,
        questContentPosition: e.contentPosition,
        questContentRowIndex: e.rowIndex,
        trackGuildAndChannelMetadata: e.questContent === r.uF.QUESTS_EMBED,
        sourceQuestContent: e.sourceQuestContent,
        children: (t) => (0, a.jsx)(b, { ...e, impressionRef: t }),
    });
}
