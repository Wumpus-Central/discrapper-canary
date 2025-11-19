n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(670081),
    o = n(481060),
    s = n(509212),
    l = n(113434),
    c = n(497505),
    u = n(722334),
    d = n(683650),
    f = n(864306),
    _ = n(752367),
    p = n(978221);
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
              ? (0, r.jsx)(u.W, { questId: t })
              : (0, r.jsx)(d.o, {
                    questId: t,
                    reason: d.X.NOT_FOUND,
                })
          : (0, s.HJ)(g) && !b
            ? (0, r.jsx)(d.o, {
                  questId: t,
                  reason: d.X.MOBILE_ONLY,
              })
            : (0, s.vB)(g.config)
              ? (0, r.jsx)(
                    _.X,
                    {
                        quest: g,
                        location: c.jn.QUESTS_EMBED,
                        sourceQuestContent: c.jn.QUESTS_EMBED,
                    },
                    g.id,
                )
              : (0, r.jsx)(f.J, { questId: t });
}
