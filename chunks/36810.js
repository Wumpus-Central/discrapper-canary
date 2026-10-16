r.d(n, { A: () => d, w: () => s });
var t = r(991690),
    i = r(878014),
    l = r(111534),
    u = r(754027),
    a = r(636401),
    o = r(90924),
    A = r(216132),
    c = r(901092),
    p = r(652215);
function d(e) {
    if (((0, o.lG)(e.transport), (0, o.D2)(e.application), !(0, i.D)(e.application)))
        throw new a.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "This application cannot access this API");
    if (!(0, c.A)(e)) throw new a.A({ errorCode: p.Lw6.INVALID_COMMAND }, "command requires an embedded app frame");
    let n = (function (e) {
        let n = (0, A.A)(e);
        if (null == n || n.applicationId !== e.application.id) return null;
        let r = n.applicationId === l.A.getBuilderPreviewApplicationId() || n.data.runsInBackground;
        switch (n.surface.type) {
            case t.U.APP_CHANNEL:
            case t.U.VOICE_CHANNEL:
                if (n.surface.channelId === u.kG) return r ? n : null;
                return n;
            case t.U.OVERLAY:
                return n;
            case t.U.MAIN:
                return r ? n : null;
            case t.U.INTERACTION_MODAL:
                return null;
            default:
                return (n.surface, null);
        }
    })(e);
    if (null == n)
        throw new a.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Command not available for this application");
    return { frame: n, iframeId: e.source.iframeId };
}
function s(e) {
    try {
        return d(e);
    } catch (e) {
        if (e instanceof a.A) return null;
        throw e;
    }
}
