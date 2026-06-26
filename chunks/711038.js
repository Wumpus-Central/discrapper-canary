s.d(t, { A: () => f });
var n = s(627968),
    i = s(64700),
    a = s(289873),
    l = s(507107),
    r = s(347135),
    o = s(710969),
    c = s(814793),
    u = s(160185),
    d = s(190107),
    m = s(375708);
function x(e) {
    let { questId: t } = e;
    return (0, n.jsx)(u.i, {
        questId: t,
        fallbackReason: d.eA.EXCLUDED_QUEST,
        bodyText: m.intl.string(m.t.NIliWX),
        questContent: l.uF.EXCLUDED_QUEST_EMBED,
    });
}
var h = s(127219);
function E(e) {
    let { questId: t } = e;
    return (0, n.jsx)(u.i, {
        questId: t,
        fallbackReason: d.eA.NOT_SHAREABLE_QUEST,
        bodyText: m.intl.string(m.t.Rw9rwW),
        questContent: l.uF.NOT_SHAREABLE_QUEST_EMBED,
    });
}
var C = s(262514),
    j = s(822663);
function f(e) {
    let { questId: t } = e,
        {
            quests: s,
            excludedQuests: u,
            isFetchingCurrentQuests: d,
        } = (0, r.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        m = i.useMemo(() => (0, o.vc)(t, s, u), [t, s, u]),
        f = i.useMemo(() => u.find((e) => e.id === t), [t, u]);
    return d
        ? (0, n.jsx)(a.y, { className: j.u })
        : null == m
          ? null != f
              ? (0, n.jsx)(x, { questId: t })
              : (0, n.jsx)(h.l, { questId: t, reason: h.o.NOT_FOUND })
          : (0, c.E0)(m.config)
            ? (0, n.jsx)(C.M, { quest: m, location: l.uF.QUESTS_EMBED, sourceQuestContent: l.uF.QUESTS_EMBED }, m.id)
            : (0, n.jsx)(E, { questId: t });
}
