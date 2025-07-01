(t.d(n, { Z: () => f }), t(642613));
var r = t(255367),
    i = t(73800),
    o = t(597312),
    a = t(793030),
    s = t(442837),
    l = t(179360),
    c = t(899667),
    d = t(430824),
    u = t(709054),
    p = t(659679),
    m = t(388032),
    _ = t(211886);
function f(e) {
    let { guildId: n } = e,
        t = (0, s.Wu)(
            [c.Z],
            () => {
                var e;
                return null != (e = c.Z.getAppliedGuildBoostsForGuild(n)) ? e : [];
            },
            [n]
        ),
        f = i.useMemo(() => t.sort((e, n) => (u.default.extractTimestamp(e.id) < u.default.extractTimestamp(n.id) ? 1 : -1)), [t]),
        x = (0, s.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
        });
    return (i.useEffect(() => {
        x !== t.length && (0, l.C0)(n);
    }, [n, x, t.length]),
    0 === f.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(a.X6, {
                      className: _.header,
                      variant: 'eyebrow',
                      children: m.intl.string(m.t.yM9Krq)
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: _.container,
                      fade: !0,
                      children: f.map((e, n) => (0, r.jsx)(p.Z, { boost: e }, 'boost-activity-'.concat(n)))
                  })
              ]
          });
}
