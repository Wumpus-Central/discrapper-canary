"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(688810),
    a = n(211401),
    s = n(500049),
    o = n(975412),
    l = n(355622),
    u = n(267102),
    c = n(734057),
    d = n(309010),
    _ = n(652215);
function f(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: f } = (0, i.Ay)(),
        p = (0, r.bG)([c.A, d.A], () => c.A.getChannel(d.A.getChannelId())),
        h = (0, u.Us)() === _.BRT.POPOUT;
    return () => {
        n?.(),
            null == p || p?.isVocal()
                ? (0, o.A)({
                      context: null != p ? { type: "channel", channel: p } : { type: "contextless" },
                      analyticsLocation: f,
                      openInPopout: h,
                      initialState: { applicationId: t },
                  })
                : (0, a.R)(s.s4.TEXT, l.oU.NORMAL, { applicationId: t });
    };
}
