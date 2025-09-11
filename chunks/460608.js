n.d(t, { Z: () => x }), n(642613), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(597312),
    s = n(793030),
    l = n(442837),
    a = n(179360),
    c = n(616780),
    u = n(899667),
    d = n(720202),
    p = n(271383),
    m = n(430824),
    g = n(709054),
    f = n(659679),
    v = n(388032),
    _ = n(240379);
function x(e) {
    let { guildId: t } = e,
        n = (0, l.Wu)([u.Z], () => {
            var e;
            return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        }, [t]),
        x = i.useMemo(
            () => n.sort((e, t) => (g.default.extractTimestamp(e.id) < g.default.extractTimestamp(t.id) ? 1 : -1)),
            [n],
        ),
        h = (0, l.Wu)([p.ZP], () => {
            let e = new Set();
            return (
                x.forEach((n) => {
                    null == p.ZP.getMember(t, n.userId) && e.add(n.userId);
                }),
                Array.from(e)
            );
        }, [t, x]);
    i.useEffect(() => {
        h.length > 0 && h.forEach((e) => d.Z.requestMember(t, e));
    }, [t, h]);
    let b = i.useMemo(() => (h.length > 0 ? { [t]: h } : {}), [t, h]);
    (0, c.$)(b, "GuildPowerupsRecentActivity");
    let C = (0, l.e7)([m.Z], () => {
        var e;
        return null == (e = m.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (i.useEffect(() => {
        C !== n.length && (0, a.C0)(t);
    }, [t, C, n.length]),
    0 === x.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.X6q, {
                      className: _.header,
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: v.intl.string(v.t.yM9Krq),
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: _.container,
                      fade: !0,
                      children: x.map((e, t) => (0, r.jsx)(f.Z, { boost: e }, "boost-activity-".concat(t))),
                  }),
              ],
          });
}
