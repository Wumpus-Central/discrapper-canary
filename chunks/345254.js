n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(954571),
    r = n(957565),
    a = n(652215),
    c = n(985018);
function o(e, t) {
    return r.p5
        ? (0, i.jsx)(l.Drp, {
              id: "copy-link",
              label: c.intl.string(c.t.Xrt5Po),
              leadingAccessory: { type: "icon", icon: l.qYV },
              icon: l.qYV,
              action: () => {
                  (0, r.C)(`${location.protocol}//${location.host}${a.BVt.CHANNEL(t.guild_id, t.id, e.id)}`),
                      s.default.track(a.HAw.MESSAGE_LINK_COPIED, { message_id: e.id, channel: e.channel_id });
              },
          })
        : null;
}
