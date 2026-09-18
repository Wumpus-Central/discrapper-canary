i.d(t, { A: () => s });
var a = i(477900),
    n = i(582128),
    r = i(143413),
    l = i(622868);
let o = n.memo(l.Ay);
function s(e) {
    let {
        message: t,
        channel: i,
        author: n,
        compact: l,
        animateAvatar: s,
        guildId: d,
        isGroupStart: u = !0,
        roleIcon: c,
        hideTimestamp: m,
        hideGuildTag: h,
        preview: p,
        avatarDecorationOverride: g,
        avatarOverride: _,
    } = e;
    return !(0, r.A)(t) && (u || l)
        ? (0, a.jsx)(o, {
              message: t,
              channel: i,
              author: n,
              guildId: d,
              compact: l,
              animate: s,
              roleIcon: c,
              hideTimestamp: m,
              hideGuildTag: h,
              preview: p,
              avatarDecorationOverride: g,
              avatarOverride: _,
          })
        : void 0;
}
