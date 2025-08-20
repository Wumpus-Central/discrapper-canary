n.d(t, { Z: () => g });
var r = n(951288),
    i = n(647438),
    a = n(670081),
    o = n(481060),
    s = n(509212),
    l = n(113434),
    c = n(497505),
    u = n(530691),
    d = n(37303),
    f = n(722334),
    _ = n(683650),
    p = n(864306),
    h = n(46140),
    m = n(506207);
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
        b = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        y = i.useMemo(() => g.find((e) => e.id === t), [t, g]),
        O = i.useMemo(
            () => (null == b ? void 0 : b.config.features.includes(a.S.MOBILE_ONLY_QUEST_PUSH_TO_MOBILE)) === !0,
            [null == b ? void 0 : b.config.features],
        );
    if (E) return (0, r.jsx)(o.$jN, { className: m.spinner });
    if (null != y) return (0, r.jsx)(f.W, { questId: t });
    if (null == b)
        return (0, r.jsx)(_.o, {
            questId: t,
            reason: _.X.NOT_FOUND,
        });
    if ((0, s.HJ)(b)) {
        let { enabled: e } = u.S.getCurrentConfig({ location: h.dr.EMBED_DESKTOP }, { autoTrackExposure: O });
        if (!O || !e)
            return (0, r.jsx)(_.o, {
                questId: t,
                reason: _.X.MOBILE_ONLY,
            });
    }
    return (0, s.vB)(b.config)
        ? (0, r.jsx)(
              d.Z,
              {
                  quest: b,
                  location: c.jn.QUESTS_EMBED,
                  sourceQuestContent: c.jn.QUESTS_EMBED,
              },
              b.id,
          )
        : (0, r.jsx)(p.J, { questId: t });
}
