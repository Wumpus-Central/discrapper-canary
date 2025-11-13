n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    a = n(670081),
    o = n(481060),
    s = n(509212),
    l = n(113434),
    c = n(497505),
    u = n(37303),
    d = n(722334),
    f = n(683650),
    _ = n(864306),
    p = n(506207);
function h(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: h,
            isFetchingCurrentQuests: m,
        } = (0, l.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        g = i.useMemo(() => (0, s._x)(t, n, h), [t, n, h]),
        E = i.useMemo(() => h.find((e) => e.id === t), [t, h]),
        b = i.useMemo(
            () => (null == g ? void 0 : g.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == g ? void 0 : g.config.features],
        );
    return m
        ? (0, r.jsx)(o.$jN, { className: p.spinner })
        : null == g
          ? null != E
              ? (0, r.jsx)(d.W, { questId: t })
              : (0, r.jsx)(f.o, {
                    questId: t,
                    reason: f.X.NOT_FOUND,
                })
          : (0, s.HJ)(g) && !b
            ? (0, r.jsx)(f.o, {
                  questId: t,
                  reason: f.X.MOBILE_ONLY,
              })
            : (0, s.vB)(g.config)
              ? (0, r.jsx)(
                    u.Z,
                    {
                        quest: g,
                        location: c.jn.QUESTS_EMBED,
                        sourceQuestContent: c.jn.QUESTS_EMBED,
                    },
                    g.id,
                )
              : (0, r.jsx)(_.J, { questId: t });
}
