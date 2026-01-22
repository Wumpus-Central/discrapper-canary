n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(954571),
    s = n(957565),
    a = n(652215),
    o = n(985018);
function u(e, t) {
    return s.p5
        ? (0, i.jsx)(l.Drp, {
              id: "copy-link",
              label: o.intl.string(o.t.Xrt5Po),
              icon: l.qYV,
              action: () => {
                  (0, s.C)(
                      ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(a.BVt.CHANNEL(t.guild_id, t.id, e.id)),
                  ),
                      r.default.track(a.HAw.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id,
                      });
              },
          })
        : null;
}
