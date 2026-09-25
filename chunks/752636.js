i.d(t, { A: () => s });
var a = i(477900),
    n = i(582128),
    l = i(143413),
    r = i(622868);
let o = n.memo(r.Ay);
function s(e) {
    let {
        message: t,
        channel: i,
        author: n,
        compact: r,
        animateAvatar: s,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: m,
        hideGuildTag: h,
        preview: p,
        avatarDecorationOverride: g,
        avatarOverride: _,
    } = e;
    return !(0, l.A)(t) && (c || r)
        ? (0, a.jsx)(o, {
              message: t,
              channel: i,
              author: n,
              guildId: d,
              compact: r,
              animate: s,
              roleIcon: u,
              hideTimestamp: m,
              hideGuildTag: h,
              preview: p,
              avatarDecorationOverride: g,
              avatarOverride: _,
          })
        : void 0;
}
