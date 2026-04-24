n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(477782),
    s = n(173936),
    r = n(954571),
    a = n(957565),
    o = n(652215),
    c = n(985018);
function d(e, t) {
    return a.p5
        ? (0, i.jsx)(l.Dr, {
              id: "copy-link",
              label: c.intl.string(c.t.Xrt5Po),
              leadingAccessory: { type: "icon", icon: s.q },
              icon: s.q,
              action: () => {
                  (0, a.C)(`${location.protocol}//${location.host}${o.BVt.CHANNEL(t.guild_id, t.id, e.id)}`),
                      r.default.track(o.HAw.MESSAGE_LINK_COPIED, { message_id: e.id, channel: e.channel_id });
              },
          })
        : null;
}
