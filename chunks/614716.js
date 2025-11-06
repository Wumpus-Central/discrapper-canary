n.d(t, { Z: () => _ });
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
function _(e) {
    let { applicationId: t, onClose: n } = e,
        { newestAnalyticsLocation: _ } = (0, i.ZP)(),
        p = (0, r.e7)([u.Z, d.Z], () => u.Z.getChannel(d.Z.getChannelId())),
        h = (0, c.bp)() === f.IlC.POPOUT;
    return () => {
        null == n || n(),
            null == p || (null == p ? void 0 : p.isVocal())
                ? (0, s.Z)({
                      context:
                          null != p
                              ? {
                                    type: "channel",
                                    channel: p,
                                }
                              : { type: "contextless" },
                      analyticsLocation: _,
                      openInPopout: h,
                      initialState: { applicationId: t },
                  })
                : (0, a._)(o._b.TEXT, l.Ie.NORMAL, { applicationId: t });
    };
}
