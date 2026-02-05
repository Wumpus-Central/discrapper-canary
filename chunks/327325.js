"use strict";
n.d(t, { A: () => u });
var i = n(963027),
    s = n(47167),
    l = n(734057),
    r = n(994500),
    a = n(287809),
    o = n(2242),
    d = n(652215),
    c = n(985018);
function u(e) {
    switch (e.ref_type) {
        case o.bN.CHANNEL: {
            let t = l.A.getChannel(e.ref_id);
            return null != t
                ? (function (e) {
                      let t = (0, s.m1)(e, a.default, r.A);
                      switch (e.type) {
                          case d.rbe.GUILD_VOICE:
                              return c.intl.formatToPlainString(c.t.bkpadO, { channelName: t });
                          case d.rbe.GUILD_STAGE_VOICE:
                              return c.intl.formatToPlainString(c.t.TPPk2T, { channelName: t });
                          default:
                              return (0, i.Ay)({ channel: e });
                      }
                  })(t)
                : "";
        }
        case o.bN.INTANGIBLE:
            return e.name ?? "";
    }
}
