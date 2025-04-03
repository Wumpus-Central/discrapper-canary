t.d(n, { Z: () => m }), t(230036);
var r = t(200651),
    o = t(192379),
    i = t(793030),
    s = t(442837),
    a = t(179360),
    l = t(899667),
    c = t(430824),
    d = t(659679),
    u = t(388032),
    p = t(211886);
function m(e) {
    let { guildId: n } = e,
        t = (0, s.Wu)(
            [l.Z],
            () => {
                var e;
                return null != (e = l.Z.getAppliedGuildBoostsForGuild(n)) ? e : [];
            },
            [n]
        ),
        m = o.useMemo(() => t.sort((e, n) => (e.id < n.id ? 1 : -1)), [t]),
        x = (0, s.e7)([c.Z], () => {
            var e;
            return null == (e = c.Z.getGuild(n)) ? void 0 : e.premiumSubscriberCount;
        });
    return (o.useEffect(() => {
        (0, a.C0)(n);
    }, [n, x]),
    0 === m.length)
        ? null
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(i.X6, {
                      variant: 'eyebrow',
                      children: u.NW.string(u.t.yM9Krq)
                  }),
                  m.map((e, n) => (0, r.jsx)(d.Z, { boost: e }, 'boost-activity-'.concat(n)))
              ]
          });
}
