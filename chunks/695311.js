"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(688810),
    a = n(211401),
    s = n(500049),
    l = n(975412),
    o = n(355622),
    d = n(267102),
    c = n(734057),
    u = n(309010),
    _ = n(652215);
function E(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: E } = (0, r.Ay)(),
        A = (0, i.bG)([c.A, u.A], () => c.A.getChannel(u.A.getChannelId())),
        h = (0, d.Us)() === _.BRT.POPOUT;
    return () => {
        n?.(),
            null == A || A?.isVocal()
                ? (0, l.A)({
                      context: null != A ? { type: "channel", channel: A } : { type: "contextless" },
                      analyticsLocation: E,
                      openInPopout: h,
                      initialState: { applicationId: t },
                  })
                : (0, a.R)(s.s4.TEXT, o.oU.NORMAL, { applicationId: t }, A.id);
    };
}
