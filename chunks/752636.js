i.d(t, { A: () => s });
var n = i(627968),
    a = i(64700),
    l = i(143413),
    r = i(639288);
let o = a.memo(r.Ay);
function s(e) {
    let {
        message: t,
        channel: i,
        author: a,
        compact: r,
        animateAvatar: s,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: m,
        hideGuildTag: h,
        preview: p,
        avatarDecorationOverride: g,
        avatarOverride: f,
    } = e;
    return !(0, l.A)(t) && (c || r)
        ? (0, n.jsx)(o, {
              message: t,
              channel: i,
              author: a,
              guildId: d,
              compact: r,
              animate: s,
              roleIcon: u,
              hideTimestamp: m,
              hideGuildTag: h,
              preview: p,
              avatarDecorationOverride: g,
              avatarOverride: f,
          })
        : void 0;
}
