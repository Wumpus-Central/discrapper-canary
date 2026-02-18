n.d(t, { A: () => o });
var a = n(627968),
    r = n(64700),
    i = n(143413),
    l = n(643204);
let s = r.memo(l.Ay);
function o(e) {
    let {
        message: t,
        channel: n,
        author: r,
        compact: l,
        animateAvatar: o,
        guildId: c,
        isGroupStart: d = !0,
        roleIcon: u,
        hideTimestamp: m,
        hideGuildTag: _,
        preview: p,
    } = e;
    return !(0, i.A)(t) && (d || l)
        ? (0, a.jsx)(s, {
              message: t,
              channel: n,
              author: r,
              guildId: c,
              compact: l,
              animate: o,
              roleIcon: u,
              hideTimestamp: m,
              hideGuildTag: _,
              preview: p,
          })
        : void 0;
}
