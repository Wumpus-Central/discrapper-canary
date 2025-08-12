n.d(t, { Z: () => _ });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(509212),
    s = n(113434),
    l = n(497505),
    c = n(37303),
    u = n(722334),
    d = n(683650),
    f = n(994165);
function _(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: _,
            isFetchingCurrentQuests: p,
        } = (0, s.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        h = i.useMemo(() => n.find((e) => e.id === t), [t, n]),
        m = i.useMemo(() => _.find((e) => e.id === t), [t, _]);
    return p
        ? (0, r.jsx)(o.$jN, { className: f.spinner })
        : null != m
          ? (0, r.jsx)(u.W, { questId: t })
          : null == h
            ? (0, r.jsx)(d.o, {
                  questId: t,
                  reason: d.X.NOT_FOUND,
              })
            : (0, a.HJ)(h)
              ? (0, r.jsx)(d.o, {
                    questId: t,
                    reason: d.X.MOBILE_ONLY,
                })
              : (0, r.jsx)(
                    c.Z,
                    {
                        quest: h,
                        location: l.jn.QUESTS_EMBED,
                        sourceQuestContent: l.jn.QUESTS_EMBED,
                    },
                    h.id,
                );
}
