i.d(t, { A: () => u, w: () => h });
var n = i(20015),
    s = i(91242),
    a = i(805332),
    l = i(636401),
    r = i(90924),
    o = i(613057),
    d = i(652215),
    c = i(165610);
function u(e) {
    (0, r.lG)(e.transport);
    let t = (0, r.D2)(e.application);
    if (!(0, n.n)(e.application, d.gfo.EMBEDDED))
        throw new l.A({ errorCode: d.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "This application cannot access this API");
    if (e.source.type !== o.z4.POST_MESSAGE)
        throw new l.A({ errorCode: d.Lw6.INVALID_COMMAND }, "command requires an embedded app frame");
    let i = (function (e) {
        let t = (0, c.ny)(s.A.getFrameByIframeId(e.iframeId));
        if (null == t) return null;
        switch (t.surface.type) {
            case c.U4.APP_CHANNEL:
                return { channelId: t.surface.channelId, guildId: t.surface.guildId };
            case c.U4.MAIN:
                return t.applicationId === a.A.getBuilderPreviewApplicationId()
                    ? { channelId: void 0, guildId: void 0 }
                    : null;
        }
        return null;
    })(e.source);
    if (null == i)
        throw new l.A({ errorCode: d.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Command not available for this application");
    return { applicationId: t, iframeId: e.source.iframeId, ...i };
}
function h(e) {
    try {
        return u(e);
    } catch (e) {
        if (e instanceof l.A) return null;
        throw e;
    }
}
