n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var l = n(481060),
    s = n(626135),
    r = n(572004),
    a = n(981631),
    o = n(388032);
function u(e, t) {
    return r.wS
        ? (0, i.jsx)(l.sNh, {
              id: "copy-link",
              label: o.intl.string(o.t.Xrt5Po),
              icon: l.xPt,
              action: () => {
                  (0, r.JG)(
                      ""
                          .concat(location.protocol, "//")
                          .concat(location.host)
                          .concat(a.Z5c.CHANNEL(t.guild_id, t.id, e.id)),
                  ),
                      s.default.track(a.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id,
                      });
              },
          })
        : null;
}
