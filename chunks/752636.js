"use strict";
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
        guildId: u,
        isGroupStart: c = !0,
        roleIcon: d,
        hideTimestamp: _,
        hideGuildTag: f,
        preview: p,
    } = e;
    return !(0, a.A)(t) && (c || s)
        ? (0, r.jsx)(o, {
              message: t,
              channel: n,
              author: i,
              guildId: u,
              compact: s,
              animate: l,
              roleIcon: d,
              hideTimestamp: _,
              hideGuildTag: f,
              preview: p,
          })
        : void 0;
}
