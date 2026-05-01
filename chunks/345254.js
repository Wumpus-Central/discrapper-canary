e.d(i, { A: () => d });
var t = e(627968);
e(64700);
var c = e(477782),
    r = e(173936),
    a = e(174459),
    o = e(957565),
    s = e(652215),
    l = e(375708);
function d(n, i) {
    return o.p5
        ? (0, t.jsx)(c.Dr, {
              id: "copy-link",
              label: l.intl.string(l.t.Xrt5Po),
              leadingAccessory: { type: "icon", icon: r.q },
              icon: r.q,
              action: () => {
                  (0, o.C)(`${location.protocol}//${location.host}${s.BVt.CHANNEL(i.guild_id, i.id, n.id)}`),
                      a.default.track(s.HAw.MESSAGE_LINK_COPIED, { message_id: n.id, channel: n.channel_id });
              },
          })
        : null;
}
