"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(688810),
    s = n(211401),
    a = n(500049),
    o = n(975412),
    l = n(355622),
    u = n(267102),
    c = n(734057),
    d = n(309010),
    _ = n(652215);
function h(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: h } = (0, r.Ay)(),
        f = (0, i.bG)([c.A, d.A], () => c.A.getChannel(d.A.getChannelId())),
        E = (0, u.Us)() === _.BRT.POPOUT;
    return () => {
        n?.(),
            null == f || f?.isVocal()
                ? (0, o.A)({
                      context: null != f ? { type: "channel", channel: f } : { type: "contextless" },
                      analyticsLocation: h,
                      openInPopout: E,
                      initialState: { applicationId: t },
                  })
                : (0, s.R)(a.s4.TEXT, l.oU.NORMAL, { applicationId: t }, f.id);
    };
}
