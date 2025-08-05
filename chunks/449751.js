n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(626135),
    o = n(572004),
    s = n(981631),
    l = n(388032);
function c(e, t) {
    return o.wS
        ? (0, r.jsx)(i.sNh, {
              id: 'copy-link',
              label: l.intl.string(l.t.Xrt5Pj),
              icon: i.xPt,
              action: () => {
                  ((0, o.JG)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(s.Z5c.CHANNEL(t.guild_id, t.id, e.id))
                  ),
                      a.default.track(s.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      }));
              }
          })
        : null;
}
