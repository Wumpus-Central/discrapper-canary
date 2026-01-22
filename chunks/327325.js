n.d(t, {
    A: () => u,
});
var r = n(963027),
    i = n(47167),
    l = n(734057),
    s = n(994500),
    a = n(287809),
    c = n(2242),
    o = n(652215),
    d = n(985018);

function u(e) {
    switch (e.ref_type) {
        case c.bN.CHANNEL: {
            let t = l.A.getChannel(e.ref_id);
            return null != t
                ? (function (e) {
                      let t = (0, i.m1)(e, a.default, s.A);
                      switch (e.type) {
                          case o.rbe.GUILD_VOICE:
                              return d.intl.formatToPlainString(d.t.bkpadO, {
                                  channelName: t,
                              });
                          case o.rbe.GUILD_STAGE_VOICE:
                              return d.intl.formatToPlainString(d.t.TPPk2T, {
                                  channelName: t,
                              });
                          default:
                              return (0, r.Ay)({
                                  channel: e,
                              });
                      }
                  })(t)
                : "";
        }
        case c.bN.INTANGIBLE:
            var t;
            return null != (t = e.name) ? t : "";
    }
}
