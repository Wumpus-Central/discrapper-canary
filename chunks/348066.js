n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(670081),
    o = n(481060),
    s = n(49436),
    l = n(509212),
    c = n(968843),
    u = n(867305),
    d = n(557843),
    f = n(10514),
    p = n(686834),
    _ = n(159183);
function m(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: m,
            isFetchingCurrentQuests: h,
        } = (0, c.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        g = i.useMemo(() => (0, l._x)(t, n, m), [t, n, m]),
        E = i.useMemo(() => m.find((e) => e.id === t), [t, m]),
        b = i.useMemo(
            () => (null == g ? void 0 : g.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == g ? void 0 : g.config.features],
        );
    return h
        ? (0, r.jsx)(o.$jN, { className: _.spinner })
        : null == g
          ? null != E
              ? (0, r.jsx)(u.q, { questId: t })
              : (0, r.jsx)(d.W, {
                    questId: t,
                    reason: d.X.NOT_FOUND,
                })
          : (0, l.HJ)(g) && !b
            ? (0, r.jsx)(d.W, {
                  questId: t,
                  reason: d.X.MOBILE_ONLY,
              })
            : (0, l.vB)(g.config)
              ? (0, r.jsx)(
                    p.X,
                    {
                        quest: g,
                        location: s.jn.QUESTS_EMBED,
                        sourceQuestContent: s.jn.QUESTS_EMBED,
                    },
                    g.id,
                )
              : (0, r.jsx)(f.J, { questId: t });
}
