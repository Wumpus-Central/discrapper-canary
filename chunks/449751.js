n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(626135),
    a = n(572004),
    o = n(981631),
    s = n(388032);
function c(e, t) {
    return a.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER
        ? (0, i.jsx)(r.sNh, {
              id: 'copy-link',
              label: s.intl.string(s.t.Xrt5Pj),
              icon: r.xPt,
              action: () => {
                  (0, a.JG)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(o.Z5c.CHANNEL(t.guild_id, t.id, e.id))
                  ),
                      l.default.track(o.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      });
              }
          })
        : null;
}
