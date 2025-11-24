n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(670081),
    o = n(481060),
    s = n(313481),
    l = n(49436),
    c = n(509212),
    u = n(867305),
    d = n(557843),
    f = n(10514),
    _ = n(686834),
    p = n(159183);
function h(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: h,
            isFetchingCurrentQuests: m,
        } = (0, s.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        g = i.useMemo(() => (0, c._x)(t, n, h), [t, n, h]),
        E = i.useMemo(() => h.find((e) => e.id === t), [t, h]),
        b = i.useMemo(
            () => (null == g ? void 0 : g.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == g ? void 0 : g.config.features],
        );
    return m
        ? (0, r.jsx)(o.$jN, { className: p.spinner })
        : null == g
          ? null != E
              ? (0, r.jsx)(u.q, { questId: t })
              : (0, r.jsx)(d.W, {
                    questId: t,
                    reason: d.X.NOT_FOUND,
                })
          : (0, c.HJ)(g) && !b
            ? (0, r.jsx)(d.W, {
                  questId: t,
                  reason: d.X.MOBILE_ONLY,
              })
            : (0, c.vB)(g.config)
              ? (0, r.jsx)(
                    _.X,
                    {
                        quest: g,
                        location: l.jn.QUESTS_EMBED,
                        sourceQuestContent: l.jn.QUESTS_EMBED,
                    },
                    g.id,
                )
              : (0, r.jsx)(f.J, { questId: t });
}
