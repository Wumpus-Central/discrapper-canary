t.d(n, { Z: () => _ }), t(642613);
var r = t(200651),
    i = t(192379),
    o = t(597312),
    s = t(793030),
    a = t(442837),
    l = t(179360),
    c = t(899667),
    u = t(430824),
    d = t(709054),
    p = t(659679),
    m = t(388032),
    x = t(211886);
function _(e) {
    let { guildId: n } = e,
        t = (0, a.Wu)(
            [c.Z],
            () => {
                var e;
                return null != (e = c.Z.getAppliedGuildBoostsForGuild(n)) ? e : [];
            },
            [n]
        ),
        _ = i.useMemo(() => t.sort((e, n) => (d.default.extractTimestamp(e.id) < d.default.extractTimestamp(n.id) ? 1 : -1)), [t]),
        f = (0, a.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
        });
    return (i.useEffect(() => {
        f !== t.length && (0, l.C0)(n);
    }, [n, f, t.length]),
    0 === _.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.X6, {
                      className: x.header,
                      variant: 'eyebrow',
                      children: m.intl.string(m.t.yM9Krq)
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: x.container,
                      fade: !0,
                      children: _.map((e, n) => (0, r.jsx)(p.Z, { boost: e }, 'boost-activity-'.concat(n)))
                  })
              ]
          });
}
