u.d(t, { A: () => p });
var d = u(477900);
u(582128);
var l = u(17928),
    n = u(477782),
    a = u(394953),
    r = u(976860),
    s = u(967198),
    c = u(5180),
    e = u(867698),
    o = u(375708);
function p(i) {
    let t = (0, l.bG)([s.A], () => s.A.getGuildId()),
        u = (0, a.lI)();
    return !__OVERLAY__ && ((0, c.ai)(t) || u)
        ? (0, d.jsx)(n.Dr, {
              id: "go-to-original-guild",
              label: o.intl.string(e.default["3KruG3"]),
              action: function () {
                  (0, r.uh)(i.guild_id, i.id);
              },
          })
        : null;
}
