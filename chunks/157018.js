n.d(t, { Z: () => d });
var r = n(201895),
    i = n(933557),
    l = n(592125),
    s = n(699516),
    a = n(594174),
    o = n(293810),
    c = n(981631),
    u = n(388032);
function d(e) {
    switch (e.ref_type) {
        case o.Qs.CHANNEL: {
            let t = l.Z.getChannel(e.ref_id);
            return null != t
                ? (function (e) {
                      let t = (0, i.F6)(e, a.default, s.Z);
                      switch (e.type) {
                          case c.d4z.GUILD_VOICE:
                              return u.intl.formatToPlainString(u.t.bkpadH, { channelName: t });
                          case c.d4z.GUILD_STAGE_VOICE:
                              return u.intl.formatToPlainString(u.t.TPPk2d, { channelName: t });
                          default:
                              return (0, r.ZP)({ channel: e });
                      }
                  })(t)
                : '';
        }
        case o.Qs.INTANGIBLE:
            var t;
            return null != (t = e.name) ? t : '';
    }
}
