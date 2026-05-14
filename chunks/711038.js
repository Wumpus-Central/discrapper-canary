s.d(t, { A: () => f });
var n = s(627968),
    i = s(64700),
    l = s(289873),
    a = s(507107),
    o = s(31587),
    r = s(710969),
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
        questContent: a.uF.EXCLUDED_QUEST_EMBED,
    });
}
var h = s(127219);
function j(e) {
    let { questId: t } = e;
    return (0, n.jsx)(d.i, {
        questId: t,
        fallbackReason: u.eA.NOT_SHAREABLE_QUEST,
        bodyText: m.intl.string(m.t.Rw9rwW),
        questContent: a.uF.NOT_SHAREABLE_QUEST_EMBED,
    });
}
var g = s(262514),
    v = s(822663);
function f(e) {
    let { questId: t } = e,
        {
            quests: s,
            excludedQuests: d,
            isFetchingCurrentQuests: u,
        } = (0, o.mL)({ fetchPolicy: "cache-or-network", callerSource: "embed" }),
        m = i.useMemo(() => (0, r.vc)(t, s, d), [t, s, d]),
        f = i.useMemo(() => d.find((e) => e.id === t), [t, d]);
    return u
        ? (0, n.jsx)(l.y, { className: v.u })
        : null == m
          ? null != f
              ? (0, n.jsx)(x, { questId: t })
              : (0, n.jsx)(h.l, { questId: t, reason: h.o.NOT_FOUND })
          : (0, c.E0)(m.config)
            ? (0, n.jsx)(g.M, { quest: m, location: a.uF.QUESTS_EMBED, sourceQuestContent: a.uF.QUESTS_EMBED }, m.id)
            : (0, n.jsx)(j, { questId: t });
}
