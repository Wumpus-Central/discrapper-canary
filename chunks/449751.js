n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(626135),
    l = n(572004),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    return l.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER
        ? (0, r.jsx)(i.sNh, {
              id: 'copy-link',
              label: s.NW.string(s.t.Xrt5Pj),
              icon: i.xPt,
              action: () => {
                  (0, l.JG)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(o.Z5c.CHANNEL(t.guild_id, t.id, e.id))
                  ),
                      a.default.track(o.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      });
              }
          })
        : null;
}
