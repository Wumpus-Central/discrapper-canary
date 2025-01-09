n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(201895),
    r = n(933557),
    l = n(592125),
    s = n(699516),
    a = n(594174),
    o = n(293810),
    c = n(981631),
    d = n(388032);
function u(e) {
    switch (e.ref_type) {
        case o.Qs.CHANNEL: {
            let t = l.Z.getChannel(e.ref_id);
            return null != t
                ? (function (e) {
                      let t = (0, r.F6)(e, a.default, s.Z);
                      switch (e.type) {
                          case c.d4z.GUILD_VOICE:
                              return d.intl.formatToPlainString(d.t.bkpadH, { channelName: t });
                          case c.d4z.GUILD_STAGE_VOICE:
                              return d.intl.formatToPlainString(d.t.TPPk2d, { channelName: t });
                          default:
                              return (0, i.ZP)({ channel: e });
                      }
                  })(t)
                : '';
        }
        case o.Qs.INTANGIBLE:
            var t;
            return null !== (t = e.name) && void 0 !== t ? t : '';
    }
}
