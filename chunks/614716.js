n.d(t, { Z: () => p });
var r = n(442837),
    i = n(906732),
    a = n(499254),
    o = n(827498),
    s = n(397698),
    l = n(541716),
    c = n(728285),
    u = n(592125),
    d = n(944486),
    f = n(981631);
function p(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: p } = (0, i.ZP)(),
        _ = (0, r.e7)([u.Z, d.Z], () => u.Z.getChannel(d.Z.getChannelId())),
        m = (0, c.bp)() === f.IlC.POPOUT;
    return () => {
        null == n || n(),
            null == _ || (null == _ ? void 0 : _.isVocal())
                ? (0, s.Z)({
                      context:
                          null != _
                              ? {
                                    type: "channel",
                                    channel: _,
                                }
                              : { type: "contextless" },
                      analyticsLocation: p,
                      openInPopout: m,
                      initialState: { applicationId: t },
                  })
                : (0, a._)(o._b.TEXT, l.Ie.NORMAL, { applicationId: t });
    };
}
