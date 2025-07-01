n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(626135),
    s = n(572004),
    a = n(981631),
    o = n(388032);
function c(e, t) {
    return s.wS
        ? (0, i.jsx)(l.sNh, {
              id: 'copy-link',
              label: o.intl.string(o.t.Xrt5Pj),
              icon: l.xPt,
              action: () => {
                  ((0, s.JG)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(a.Z5c.CHANNEL(t.guild_id, t.id, e.id))
                  ),
                      r.default.track(a.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      }));
              }
          })
        : null;
}
