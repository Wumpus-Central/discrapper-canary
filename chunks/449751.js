n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(852229),
    l = n(481060),
    a = n(626135),
    o = n(572004),
    s = n(981631),
    c = n(388032);
function u(e, t) {
    return o.wS && e.type !== s.uaV.GUILD_INVITE_REMINDER
        ? (0, r.jsx)(l.sNh, {
              id: 'copy-link',
              label: c.NW.string(c.t.Xrt5Pj),
              icon: l.xPt,
              action: () => {
                  (0, i.J)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(s.Z5c.CHANNEL(t.guild_id, t.id, e.id))
                  ),
                      a.default.track(s.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      });
              }
          })
        : null;
}
