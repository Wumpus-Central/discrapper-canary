e.d(n, { A: () => x });
var l = e(17928),
    i = e(688810),
    r = e(211401),
    a = e(500049),
    s = e(975412),
    o = e(355622),
    c = e(267102),
    u = e(734057),
    d = e(309010),
    A = e(652215);
function x(t) {
    let { applicationId: n, onClose: e } = t,
        { newestAnalyticsLocation: x } = (0, i.Ay)(),
        p = (0, l.bG)([u.A, d.Ay], () => u.A.getChannel(d.Ay.getChannelId())),
        f = (0, c.Us)() === A.BRT.POPOUT;
    return () => {
        (e?.(),
            null == p || p?.isVocal()
                ? (0, s.A)({
                      context: null != p ? { type: "channel", channel: p } : { type: "contextless" },
                      analyticsLocation: x,
                      openInPopout: f,
                      initialState: { applicationId: n },
                  })
                : (0, r.R)(a.s4.TEXT, o.oU.NORMAL, { applicationId: n }, p.id));
    };
}
