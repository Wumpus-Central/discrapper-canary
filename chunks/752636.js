n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    a = n(143413),
    s = n(643204);
let o = i.memo(s.Ay);
function l(e) {
    let {
        message: t,
        channel: n,
        author: i,
        compact: s,
        animateAvatar: l,
        guildId: c,
        isGroupStart: u = !0,
        roleIcon: d,
        hideTimestamp: f,
        hideGuildTag: p,
        preview: _,
    } = e;
    return !(0, a.A)(t) && (u || s)
        ? (0, r.jsx)(o, {
              message: t,
              channel: n,
              author: i,
              guildId: c,
              compact: s,
              animate: l,
              roleIcon: d,
              hideTimestamp: f,
              hideGuildTag: p,
              preview: _,
          })
        : void 0;
}
