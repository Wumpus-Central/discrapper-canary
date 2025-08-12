n.d(t, { Z: () => _ }), n(642613), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(597312),
    l = n(793030),
    s = n(442837),
    a = n(179360),
    u = n(616780),
    c = n(899667),
    d = n(720202),
    p = n(271383),
    f = n(430824),
    m = n(709054),
    g = n(659679),
    x = n(388032),
    v = n(95669);
function _(e) {
    let { guildId: t } = e,
        n = (0, s.Wu)([c.Z], () => {
            var e;
            return null != (e = c.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        }, [t]),
        _ = o.useMemo(
            () => n.sort((e, t) => (m.default.extractTimestamp(e.id) < m.default.extractTimestamp(t.id) ? 1 : -1)),
            [n],
        ),
        b = (0, s.Wu)([p.ZP], () => {
            let e = new Set();
            return (
                _.forEach((n) => {
                    null == p.ZP.getMember(t, n.userId) && e.add(n.userId);
                }),
                Array.from(e)
            );
        }, [t, _]);
    o.useEffect(() => {
        b.length > 0 && b.forEach((e) => d.Z.requestMember(t, e));
    }, [t, b]);
    let j = o.useMemo(() => (b.length > 0 ? { [t]: b } : {}), [t, b]);
    (0, u.$)(j);
    let h = (0, s.e7)([f.Z], () => {
        var e;
        return null == (e = f.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (o.useEffect(() => {
        h !== n.length && (0, a.C0)(t);
    }, [t, h, n.length]),
    0 === _.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.X6, {
                      className: v.header,
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: x.intl.string(x.t.yM9Krq),
                  }),
                  (0, r.jsx)(i.zJ, {
                      className: v.container,
                      fade: !0,
                      children: _.map((e, t) => (0, r.jsx)(g.Z, { boost: e }, "boost-activity-".concat(t))),
                  }),
              ],
          });
}
