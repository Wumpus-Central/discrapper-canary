n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(852229),
    a = n(481060),
    s = n(626135),
    r = n(572004),
    o = n(981631),
    d = n(388032);
function c(e, t) {
    return r.wS && e.type !== o.uaV.GUILD_INVITE_REMINDER
        ? (0, i.jsx)(a.sNh, {
              id: 'copy-link',
              label: d.intl.string(d.t.Xrt5Pj),
              icon: a.xPt,
              action: () => {
                  (0, l.J)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(o.Z5c.CHANNEL(t.guild_id, t.id, e.id))
                  ),
                      s.default.track(o.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      });
              }
          })
        : null;
}
