i.d(n, { Z: () => m });
var t = i(200651),
    a = i(192379),
    r = i(793030),
    o = i(442837),
    s = i(179360),
    c = i(899667),
    l = i(659679),
    d = i(388032),
    u = i(919453);
function m(e) {
    let { guildId: n } = e,
        i = (0, o.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(n), [n]);
    return (a.useEffect(() => {
        (0, s.C0)(n);
    }, [n]),
    null == i)
        ? null
        : (0, t.jsxs)('div', {
              className: u.container,
              children: [
                  (0, t.jsx)(r.X6, {
                      variant: 'eyebrow',
                      children: d.intl.string(d.t.yM9Krq)
                  }),
                  i.map((e, n) => (0, t.jsx)(l.Z, { boost: e }, n))
              ]
          });
}
