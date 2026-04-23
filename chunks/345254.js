n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(477782),
    l = n(173936),
    r = n(954571),
    a = n(957565),
    c = n(652215),
    o = n(985018);
function d(e, t) {
    return a.p5
        ? (0, i.jsx)(s.Dr, {
              id: "copy-link",
              label: o.intl.string(o.t.Xrt5Po),
              leadingAccessory: { type: "icon", icon: l.q },
              icon: l.q,
              action: () => {
                  (0, a.C)(`${location.protocol}//${location.host}${c.BVt.CHANNEL(t.guild_id, t.id, e.id)}`),
                      r.default.track(c.HAw.MESSAGE_LINK_COPIED, { message_id: e.id, channel: e.channel_id });
              },
          })
        : null;
}
