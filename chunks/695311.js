n.d(t, {
    A: () => p,
});
var r = n(311907),
    i = n(688810),
    a = n(211401),
    s = n(500049),
    o = n(975412),
    l = n(355622),
    c = n(267102),
    u = n(734057),
    d = n(309010),
    f = n(652215);

function p(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: p } = (0, i.Ay)(),
        _ = (0, r.bG)([u.A, d.A], () => u.A.getChannel(d.A.getChannelId())),
        h = (0, c.Us)() === f.BRT.POPOUT;
    return () => {
        null == n || n(),
            null == _ || (null == _ ? void 0 : _.isVocal())
                ? (0, o.A)({
                      context:
                          null != _
                              ? {
                                    type: "channel",
                                    channel: _,
                                }
                              : {
                                    type: "contextless",
                                },
                      analyticsLocation: p,
                      openInPopout: h,
                      initialState: {
                          applicationId: t,
                      },
                  })
                : (0, a.R)(s.s4.TEXT, l.oU.NORMAL, {
                      applicationId: t,
                  });
    };
}
