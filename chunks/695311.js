e.d(n, { A: () => f });
var l = e(17928),
    i = e(688810),
    a = e(211401),
    r = e(500049),
    s = e(975412),
    o = e(355622),
    c = e(267102),
    u = e(734057),
    d = e(309010),
    A = e(652215);
function f(t) {
    let { applicationId: n, onClose: e } = t,
        { newestAnalyticsLocation: f } = (0, i.Ay)(),
        g = (0, l.bG)([u.A, d.Ay], () => u.A.getChannel(d.Ay.getChannelId())),
        m = (0, c.Us)() === A.BRT.POPOUT;
    return () => {
        (e?.(),
            null == g || g?.isVocal()
                ? (0, s.A)({
                      context: null != g ? { type: "channel", channel: g } : { type: "contextless" },
                      analyticsLocation: f,
                      openInPopout: m,
                      initialState: { applicationId: n },
                  })
                : (0, a.R)(r.s4.TEXT, o.oU.NORMAL, { applicationId: n }, g.id));
    };
}
