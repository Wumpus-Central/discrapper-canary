s.d(t, { A: () => g });
var n = s(627968),
    i = s(64700),
    a = s(289873),
    l = s(507107),
    r = s(347135),
    o = s(710969),
    c = s(814793),
    d = s(160185),
    u = s(190107),
    m = s(375708);
function x(e) {
    let { questId: t } = e;
    return (0, n.jsx)(d.i, {
        questId: t,
        fallbackReason: u.eA.EXCLUDED_QUEST,
        bodyText: m.intl.string(m.t.NIliWX),
        questContent: l.uF.EXCLUDED_QUEST_EMBED,
    });
}
var h = s(127219);
function E(e) {
    let { questId: t } = e;
    return (0, n.jsx)(d.i, {
        questId: t,
        fallbackReason: u.eA.NOT_SHAREABLE_QUEST,
        bodyText: m.intl.string(m.t.Rw9rwW),
        questContent: l.uF.NOT_SHAREABLE_QUEST_EMBED,
    });
}
var j = s(262514),
    C = s(822663);
function g(e) {
    let { questId: t } = e,
        {
            quests: s,
            excludedQuests: d,
            isFetchingCurrentQuests: u,
        } = (0, r.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        m = i.useMemo(() => (0, o.vc)(t, s, d), [t, s, d]),
        g = i.useMemo(() => d.find((e) => e.id === t), [t, d]);
    return u
        ? (0, n.jsx)(a.y, { className: C.u })
        : null == m
          ? null != g
              ? (0, n.jsx)(x, { questId: t })
              : (0, n.jsx)(h.l, { questId: t, reason: h.o.NOT_FOUND })
          : (0, c.E0)(m.config)
            ? (0, n.jsx)(j.M, { quest: m, location: l.uF.QUESTS_EMBED, sourceQuestContent: l.uF.QUESTS_EMBED }, m.id)
            : (0, n.jsx)(E, { questId: t });
}
