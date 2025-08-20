n.d(t, { Z: () => h });
var r = n(951288),
    i = n(647438),
    l = n(670081),
    o = n(481060),
    a = n(509212),
    s = n(113434),
    c = n(497505),
    u = n(530691),
    d = n(37303),
    p = n(722334),
    m = n(683650),
    f = n(864306),
    g = n(46140),
    _ = n(506207);
function h(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: h,
            isFetchingCurrentQuests: b,
        } = (0, s.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        E = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        C = i.useMemo(() => h.find((e) => e.id === t), [t, h]),
        v = i.useMemo(
            () => (null == E ? void 0 : E.config.features.includes(l.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == E ? void 0 : E.config.features],
        );
    if (b) return (0, r.jsx)(o.$jN, { className: _.spinner });
    if (null != C) return (0, r.jsx)(p.W, { questId: t });
    if (null == E)
        return (0, r.jsx)(m.o, {
            questId: t,
            reason: m.X.NOT_FOUND,
        });
    if ((0, a.HJ)(E)) {
        let { enabled: e } = u.S.getCurrentConfig({ location: g.dr.EMBED_DESKTOP }, { autoTrackExposure: v });
        if (!v || !e)
            return (0, r.jsx)(m.o, {
                questId: t,
                reason: m.X.MOBILE_ONLY,
            });
    }
    return (0, a.vB)(E.config)
        ? (0, r.jsx)(
              d.Z,
              {
                  quest: E,
                  location: c.jn.QUESTS_EMBED,
                  sourceQuestContent: c.jn.QUESTS_EMBED,
              },
              E.id,
          )
        : (0, r.jsx)(f.J, { questId: t });
}
