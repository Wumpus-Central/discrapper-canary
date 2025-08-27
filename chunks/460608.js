n.d(t, { Z: () => x }), n(642613), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(597312),
    l = n(793030),
    a = n(442837),
    s = n(179360),
    u = n(616780),
    c = n(899667),
    d = n(720202),
    p = n(271383),
    f = n(430824),
    m = n(709054),
    _ = n(659679),
    g = n(388032),
    v = n(240379);
function x(e) {
    let { guildId: t } = e,
        n = (0, a.Wu)([c.Z], () => {
            var e;
            return null != (e = c.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        }, [t]),
        x = i.useMemo(
            () => n.sort((e, t) => (m.default.extractTimestamp(e.id) < m.default.extractTimestamp(t.id) ? 1 : -1)),
            [n],
        ),
        b = (0, a.Wu)([p.ZP], () => {
            let e = new Set();
            return (
                x.forEach((n) => {
                    null == p.ZP.getMember(t, n.userId) && e.add(n.userId);
                }),
                Array.from(e)
            );
        }, [t, x]);
    i.useEffect(() => {
        b.length > 0 && b.forEach((e) => d.Z.requestMember(t, e));
    }, [t, b]);
    let h = i.useMemo(() => (b.length > 0 ? { [t]: b } : {}), [t, b]);
    (0, u.$)(h, "GuildPowerupsRecentActivity");
    let C = (0, a.e7)([f.Z], () => {
        var e;
        return null == (e = f.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (i.useEffect(() => {
        C !== n.length && (0, s.C0)(t);
    }, [t, C, n.length]),
    0 === x.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.X6, {
                      className: v.header,
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: g.intl.string(g.t.yM9Krq),
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: v.container,
                      fade: !0,
                      children: x.map((e, t) => (0, r.jsx)(_.Z, { boost: e }, "boost-activity-".concat(t))),
                  }),
              ],
          });
}
