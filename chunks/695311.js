var l = e(855986),
    i = e(688810),
    a = e(211401),
    r = e(500049),
    s = e(975412),
    o = e(355622),
    c = e(267102),
    u = e(734057),
    d = e(309010),
    A = e(652215);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { applicationId: n, onClose: e } = t,
                { newestAnalyticsLocation: x } = (0, i.Ay)(),
                m = (0, l.bG)([u.A, d.Ay], () => u.A.getChannel(d.Ay.getChannelId())),
                f = (0, c.Us)() === A.BRT.POPOUT;
            return () => {
                (e?.(),
                    null == m || m?.isVocal()
                        ? (0, s.A)({
                              context: null != m ? { type: "channel", channel: m } : { type: "contextless" },
                              analyticsLocation: x,
                              openInPopout: f,
                              initialState: { applicationId: n },
                          })
                        : (0, a.R)(r.s4.TEXT, o.oU.NORMAL, { applicationId: n }, m.id));
            };
        },
    },
);
