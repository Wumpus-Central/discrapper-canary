t.d(n, { Z: () => m }), t(230036);
var i = t(200651),
    r = t(192379),
    o = t(793030),
    s = t(442837),
    a = t(179360),
    l = t(899667),
    c = t(430824),
    d = t(659679),
    u = t(388032),
    x = t(549564);
function m(e) {
    let { guildId: n } = e,
        t = (0, s.Wu)(
            [l.Z],
            () => {
                var e;
                return null !== (e = l.Z.getAppliedGuildBoostsForGuild(n)) && void 0 !== e ? e : [];
            },
            [n]
        ),
        m = r.useMemo(() => t.sort((e, n) => (e.id < n.id ? 1 : -1)), [t]),
        v = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getGuild(n)) || void 0 === e ? void 0 : e.premiumSubscriberCount;
        });
    return (r.useEffect(() => {
        (0, a.C0)(n);
    }, [n, v]),
    0 === m.length)
        ? null
        : (0, i.jsxs)('div', {
              className: x.container,
              children: [
                  (0, i.jsx)(o.X6, {
                      variant: 'eyebrow',
                      children: u.NW.string(u.t.yM9Krq)
                  }),
                  m.map((e, n) => (0, i.jsx)(d.Z, { boost: e }, 'boost-activity-'.concat(n)))
              ]
          });
}
