n.d(t, { Z: () => v }), n(642613), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(597312),
    l = n(793030),
    a = n(442837),
    s = n(179360),
    c = n(616780),
    u = n(899667),
    d = n(720202),
    p = n(271383),
    m = n(430824),
    f = n(709054),
    _ = n(659679),
    x = n(388032),
    g = n(95669);
function v(e) {
    let { guildId: t } = e,
        n = (0, a.Wu)([u.Z], () => {
            var e;
            return null != (e = u.Z.getAppliedGuildBoostsForGuild(t)) ? e : [];
        }, [t]),
        v = o.useMemo(
            () => n.sort((e, t) => (f.default.extractTimestamp(e.id) < f.default.extractTimestamp(t.id) ? 1 : -1)),
            [n],
        ),
        b = (0, a.Wu)([p.ZP], () => {
            let e = new Set();
            return (
                v.forEach((n) => {
                    null == p.ZP.getMember(t, n.userId) && e.add(n.userId);
                }),
                Array.from(e)
            );
        }, [t, v]);
    o.useEffect(() => {
        b.length > 0 && b.forEach((e) => d.Z.requestMember(t, e));
    }, [t, b]);
    let h = o.useMemo(() => (b.length > 0 ? { [t]: b } : {}), [t, b]);
    (0, c.$)(h);
    let j = (0, a.e7)([m.Z], () => {
        var e;
        return null == (e = m.Z.getGuild(t)) ? void 0 : e.premiumSubscriberCount;
    });
    return (o.useEffect(() => {
        j !== n.length && (0, s.C0)(t);
    }, [t, j, n.length]),
    0 === v.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.X6, {
                      className: g.header,
                      variant: "eyebrow",
                      color: "text-secondary",
                      children: x.intl.string(x.t.yM9Krq),
                  }),
                  (0, r.jsx)(i.zJ, {
                      className: g.container,
                      fade: !0,
                      children: v.map((e, t) => (0, r.jsx)(_.Z, { boost: e }, "boost-activity-".concat(t))),
                  }),
              ],
          });
}
