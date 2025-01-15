t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(852229),
    r = t(481060),
    a = t(626135),
    o = t(572004),
    s = t(981631),
    u = t(388032);
function d(e, n) {
    return o.wS && e.type !== s.uaV.GUILD_INVITE_REMINDER
        ? (0, i.jsx)(r.MenuItem, {
              id: 'copy-link',
              label: u.intl.string(u.t.Xrt5Pj),
              icon: r.LinkIcon,
              action: () => {
                  (0, l.J)(
                      ''
                          .concat(location.protocol, '//')
                          .concat(location.host)
                          .concat(s.Z5c.CHANNEL(n.guild_id, n.id, e.id))
                  ),
                      a.default.track(s.rMx.MESSAGE_LINK_COPIED, {
                          message_id: e.id,
                          channel: e.channel_id
                      });
              }
          })
        : null;
}
