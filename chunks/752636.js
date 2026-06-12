i.d(t, { A: () => s });
var a = i(627968),
    n = i(64700),
    l = i(143413),
    r = i(639288);
let o = n.memo(r.Ay);
function s(e) {
    let {
        message: t,
        channel: i,
        author: n,
        compact: r,
        animateAvatar: s,
        guildId: c,
        isGroupStart: u = !0,
        roleIcon: d,
        hideTimestamp: m,
        hideGuildTag: p,
        preview: g,
    } = e;
    return !(0, l.A)(t) && (u || r)
        ? (0, a.jsx)(o, {
              message: t,
              channel: i,
              author: n,
              guildId: c,
              compact: r,
              animate: s,
              roleIcon: d,
              hideTimestamp: m,
              hideGuildTag: p,
              preview: g,
          })
        : void 0;
}
