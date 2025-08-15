n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    l = n(670081),
    a = n(481060),
    o = n(509212),
    s = n(113434),
    c = n(497505),
    u = n(530691),
    d = n(37303),
    p = n(722334),
    m = n(683650),
    f = n(46140),
    _ = n(506207);
function g(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: g,
            isFetchingCurrentQuests: h,
        } = (0, s.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        b = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        E = i.useMemo(() => g.find((e) => e.id === t), [t, g]),
        C = i.useMemo(
            () => (null == b ? void 0 : b.config.features.includes(l.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == b ? void 0 : b.config.features],
        );
    if (h) return (0, r.jsx)(a.$jN, { className: _.spinner });
    if (null != E) return (0, r.jsx)(p.W, { questId: t });
    if (null == b)
        return (0, r.jsx)(m.o, {
            questId: t,
            reason: m.X.NOT_FOUND,
        });
    if ((0, o.HJ)(b)) {
        let { enabled: e } = u.S.getCurrentConfig({ location: f.dr.EMBED_DESKTOP }, { autoTrackExposure: C });
        if (!C || !e)
            return (0, r.jsx)(m.o, {
                questId: t,
                reason: m.X.MOBILE_ONLY,
            });
    }
    return (0, r.jsx)(
        d.Z,
        {
            quest: b,
            location: c.jn.QUESTS_EMBED,
            sourceQuestContent: c.jn.QUESTS_EMBED,
        },
        b.id,
    );
}
