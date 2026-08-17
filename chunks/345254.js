e.d(i, { A: () => d });
var t = e(477900);
e(582128);
var c = e(477782),
    r = e(173936),
    o = e(174459),
    a = e(957565),
    s = e(652215),
    l = e(375708);
function d(n, i) {
    return a.p5
        ? (0, t.jsx)(c.Dr, {
              id: "copy-link",
              label: l.intl.string(l.t.Xrt5Po),
              leadingAccessory: { type: "icon", icon: r.LinkIcon },
              icon: r.LinkIcon,
              action: () => {
                  (0, a.C)(`${location.protocol}//${location.host}${s.BVt.CHANNEL(i.guild_id, i.id, n.id)}`),
                      o.default.track(s.HAw.MESSAGE_LINK_COPIED, { message_id: n.id, channel: n.channel_id });
              },
          })
        : null;
}
