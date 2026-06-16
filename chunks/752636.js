i.d(t, { A: () => s });
var n = i(627968),
    a = i(64700),
    l = i(143413),
    o = i(639288);
let r = a.memo(o.Ay);
function s(e) {
    let {
        message: t,
        channel: i,
        author: a,
        compact: o,
        animateAvatar: s,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: m,
        hideGuildTag: h,
        preview: p,
    } = e;
    return !(0, l.A)(t) && (c || o)
        ? (0, n.jsx)(r, {
              message: t,
              channel: i,
              author: a,
              guildId: d,
              compact: o,
              animate: s,
              roleIcon: u,
              hideTimestamp: m,
              hideGuildTag: h,
              preview: p,
          })
        : void 0;
}
