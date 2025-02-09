i.d(n, { Z: () => x });
var t = i(200651),
    r = i(192379),
    a = i(793030),
    s = i(442837),
    o = i(179360),
    c = i(899667),
    l = i(659679),
    d = i(388032),
    u = i(241429);
function x(e) {
    let { guildId: n } = e,
        i = (0, s.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]);
    return (r.useEffect(() => {
        (0, o.C0)(n);
    }, [n]),
    null == i)
        ? null
        : (0, t.jsxs)('div', {
              className: u.container,
              children: [
                  (0, t.jsx)(a.X6, {
                      variant: 'eyebrow',
                      children: d.intl.string(d.t.yM9Krq)
                  }),
                  i.map((e, n) => (0, t.jsx)(l.Z, { boost: e }, n))
              ]
          });
}
