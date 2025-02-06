n.d(i, { Z: () => p });
var t = n(200651),
    a = n(192379),
    r = n(793030),
    o = n(442837),
    s = n(179360),
    c = n(899667),
    l = n(659679),
    d = n(388032),
    u = n(919453);
function p(e) {
    let { guildId: i } = e,
        n = (0, o.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(i), [i]);
    return (a.useEffect(() => {
        (0, s.C0)(i);
    }, [i]),
    null == n)
        ? null
        : (0, t.jsxs)('div', {
              className: u.container,
              children: [
                  (0, t.jsx)(r.X6, {
                      variant: 'eyebrow',
                      children: d.intl.string(d.t.yM9Krq)
                  }),
                  n.map((e, i) => (0, t.jsx)(l.Z, { boost: e }, i))
              ]
          });
}
