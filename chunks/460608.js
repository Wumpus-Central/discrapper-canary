t.d(n, { Z: () => x });
var i = t(200651),
    r = t(192379),
    a = t(793030),
    o = t(442837),
    s = t(179360),
    c = t(899667),
    l = t(659679),
    d = t(388032),
    u = t(699908);
function x(e) {
    let { guildId: n } = e,
        t = (0, o.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]);
    return (r.useEffect(() => {
        (0, s.C0)(n);
    }, [n]),
    null == t)
        ? null
        : (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (0, i.jsx)(a.X6, {
                      variant: 'eyebrow',
                      children: d.NW.string(d.t.yM9Krq)
                  }),
                  t.map((e, n) => (0, i.jsx)(l.Z, { boost: e }, n))
              ]
          });
}
