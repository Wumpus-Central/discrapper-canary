n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(670081),
    o = n(481060),
    s = n(49436),
    l = n(968843),
    c = n(862657),
    u = n(254579),
    d = n(283689),
    f = n(867305),
    p = n(557843),
    _ = n(10514),
    m = n(686834),
    h = n(159183);
function g(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: g,
            isFetchingCurrentQuests: E,
        } = (0, l.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        b = i.useMemo(() => (0, c._x)(t, n, g), [t, n, g]),
        y = i.useMemo(() => g.find((e) => e.id === t), [t, g]),
        O = i.useMemo(
            () => (null == b ? void 0 : b.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == b ? void 0 : b.config.features],
        );
    return E
        ? (0, r.jsx)(o.$jN, { className: h.spinner })
        : null == b
          ? null != y
              ? (0, r.jsx)(f.q, { questId: t })
              : (0, r.jsx)(p.W, {
                    questId: t,
                    reason: p.X.NOT_FOUND,
                })
          : (0, u.HJ)(b) && !O
            ? (0, r.jsx)(p.W, {
                  questId: t,
                  reason: p.X.MOBILE_ONLY,
              })
            : (0, d.VB)(b.config)
              ? (0, r.jsx)(
                    m.X,
                    {
                        quest: b,
                        location: s.jn.QUESTS_EMBED,
                        sourceQuestContent: s.jn.QUESTS_EMBED,
                    },
                    b.id,
                )
              : (0, r.jsx)(_.J, { questId: t });
}
