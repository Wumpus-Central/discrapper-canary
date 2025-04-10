t.d(n, { Z: () => x }), t(642613);
var r = t(200651),
    o = t(192379),
    s = t(597312),
    i = t(793030),
    a = t(442837),
    l = t(179360),
    c = t(899667),
    d = t(430824),
    u = t(659679),
    m = t(388032),
    p = t(211886);
function x(e) {
    let { guildId: n } = e,
        t = (0, a.Wu)(
            [c.Z],
            () => {
                var e;
                return null != (e = c.Z.getAppliedGuildBoostsForGuild(n)) ? e : [];
            },
            [n]
        ),
        x = o.useMemo(() => t.sort((e, n) => (e.id < n.id ? 1 : -1)), [t]),
        _ = (0, a.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
        });
    return (o.useEffect(() => {
        _ !== t.length && (0, l.C0)(n);
    }, [n, _, t.length]),
    0 === x.length)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(i.X6, {
                      className: p.header,
                      variant: 'eyebrow',
                      children: m.NW.string(m.t.yM9Krq)
                  }),
                  (0, r.jsx)(s.zJ, {
                      className: p.container,
                      fade: !0,
                      children: x.map((e, n) => (0, r.jsx)(u.Z, { boost: e }, 'boost-activity-'.concat(n)))
                  })
              ]
          });
}
