t.d(n, { Z: () => _ }), t(642613);
var r = t(200651),
    i = t(192379),
    o = t(597312),
    s = t(793030),
    a = t(442837),
    l = t(179360),
    c = t(899667),
    u = t(430824),
    d = t(659679),
    p = t(388032),
    m = t(211886);
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
        _ = i.useMemo(() => t.sort((e, n) => (e.id < n.id ? 1 : -1)), [t]),
        x = (0, a.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
        });
    return (i.useEffect(() => {
        x !== t.length && (0, l.C0)(n);
    }, [n, x, t.length]),
    0 === _.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.X6, {
                      className: m.header,
                      variant: 'eyebrow',
                      children: p.intl.string(p.t.yM9Krq)
                  }),
                  (0, r.jsx)(o.zJ, {
                      className: m.container,
                      fade: !0,
                      children: _.map((e, n) => (0, r.jsx)(d.Z, { boost: e }, 'boost-activity-'.concat(n)))
                  })
              ]
          });
}
