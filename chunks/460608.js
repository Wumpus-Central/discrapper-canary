n.d(t, { Z: () => x }), n(642613), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(793030),
    o = n(442837),
    a = n(179360),
    s = n(616780),
    c = n(899667),
    u = n(720202),
    d = n(271383),
    p = n(430824),
    f = n(709054),
    m = n(659679),
    g = n(388032),
    v = n(240379);
function x(e) {
    let { guildId: t } = e,
        n = (0, o.Wu)([c.Z], () => {
            var e;
            return null != (e = c.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        }, [t]),
        x = i.useMemo(
            () => n.sort((e, t) => (f.default.extractTimestamp(e.id) < f.default.extractTimestamp(t.id) ? 1 : -1)),
            [n],
        ),
        _ = (0, o.Wu)([d.ZP], () => {
            let e = new Set();
            return (
                x.forEach((n) => {
                    null == d.ZP.getMember(t, n.userId) && e.add(n.userId);
                }),
                Array.from(e)
            );
        }, [t, x]);
    i.useEffect(() => {
        _.length > 0 && _.forEach((e) => u.Z.requestMember(t, e));
    }, [t, _]);
    let b = i.useMemo(() => (_.length > 0 ? { [t]: _ } : {}), [t, _]);
    (0, s.$)(b, "GuildPowerupsRecentActivity");
    let h = (0, o.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (i.useEffect(() => {
        h !== n.length && (0, a.C0)(t);
    }, [t, h, n.length]),
    0 === x.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.X6q, {
                      className: v.header,
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: g.intl.string(g.t.yM9Krm),
                  }),
                  (0, r.jsx)(l.zJl, {
                      className: v.container,
                      fade: !0,
                      children: x.map((e, t) => (0, r.jsx)(m.Z, { boost: e }, "boost-activity-".concat(t))),
                  }),
              ],
          });
}
