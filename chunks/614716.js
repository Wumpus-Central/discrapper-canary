n.d(t, { Z: () => f });
var r = n(442837),
    i = n(40851),
    a = n(906732),
    o = n(499254),
    s = n(827498),
    l = n(397698),
    c = n(541716),
    u = n(592125),
    d = n(944486),
    _ = n(981631);
function f(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: f } = (0, a.ZP)(),
        p = (0, r.e7)([u.Z, d.Z], () => u.Z.getChannel(d.Z.getChannelId())),
        h = (0, i.bp)() === _.IlC.POPOUT;
    return () => {
        (null == n || n(),
            null == p || (null == p ? void 0 : p.isVocal())
                ? (0, l.Z)({
                      context:
                          null != p
                              ? {
                                    type: 'channel',
                                    channel: p
                                }
                              : { type: 'contextless' },
                      analyticsLocation: f,
                      openInPopout: h,
                      initialState: { applicationId: t }
                  })
                : (0, o.__)(s._b.TEXT, c.Ie.NORMAL, { applicationId: t }));
    };
}
