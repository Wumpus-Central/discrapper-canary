n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(49436),
    s = n(968843),
    l = n(862657),
    c = n(283689),
    u = n(867305),
    d = n(557843),
    f = n(10514),
    p = n(686834),
    _ = n(447544);
function m(e) {
    let { questId: t } = e,
        {
            quests: n,
            excludedQuests: m,
            isFetchingCurrentQuests: h,
        } = (0, s.J2)({
            fetchPolicy: "cache-or-network",
            callerSource: "embed",
        }),
        g = i.useMemo(() => (0, l._x)(t, n, m), [t, n, m]),
        E = i.useMemo(() => m.find((e) => e.id === t), [t, m]);
    return h
        ? (0, r.jsx)(a.$jN, { className: _.spinner })
        : null == g
          ? null != E
              ? (0, r.jsx)(u.q, { questId: t })
              : (0, r.jsx)(d.W, {
                    questId: t,
                    reason: d.X.NOT_FOUND,
                })
          : (0, c.VB)(g.config)
            ? (0, r.jsx)(
                  p.X,
                  {
                      quest: g,
                      location: o.jn.QUESTS_EMBED,
                      sourceQuestContent: o.jn.QUESTS_EMBED,
                  },
                  g.id,
              )
            : (0, r.jsx)(f.J, { questId: t });
}
