n.d(e, { A: () => f });
var l = n(17928),
    i = n(688810),
    a = n(211401),
    r = n(500049),
    s = n(975412),
    o = n(355622),
    c = n(267102),
    u = n(734057),
    d = n(309010),
    A = n(652215);
function f(t) {
    let { applicationId: e, onClose: n } = t,
        { newestAnalyticsLocation: f } = (0, i.Ay)(),
        p = (0, l.bG)([u.A, d.Ay], () => u.A.getChannel(d.Ay.getChannelId())),
        g = (0, c.Us)() === A.BRT.POPOUT;
    return () => {
        (n?.(),
            null == p || p?.isVocal()
                ? (0, s.A)({
                      context: null != p ? { type: "channel", channel: p } : { type: "contextless" },
                      analyticsLocation: f,
                      openInPopout: g,
                      initialState: { applicationId: e },
                  })
                : (0, a.R)(r.s4.TEXT, o.oU.NORMAL, { applicationId: e }, p.id));
    };
}
