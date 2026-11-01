t.d(n, { $b: () => d, Ay: () => s, we: () => f });
var i = t(991690),
    r = t(878014),
    a = t(111534),
    u = t(754027),
    l = t(636401),
    o = t(90924),
    c = t(216132),
    A = t(901092),
    p = t(652215);
function s(e) {
    return I(e, !1);
}
function d(e) {
    return I(e, !0);
}
function I(e, n) {
    let t;
    if (((0, o.lG)(e.transport), (0, o.D2)(e.application), !(0, r.D)(e.application)))
        throw new l.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "This application cannot access this API");
    if (!(0, A.A)(e)) throw new l.A({ errorCode: p.Lw6.INVALID_COMMAND }, "command requires an embedded app frame");
    let s = n
        ? null != (t = (0, c.A)(e)) && t.applicationId === e.application.id
            ? t
            : null
        : (function (e) {
              let n = (0, c.A)(e);
              if (null == n || n.applicationId !== e.application.id) return null;
              let t = n.applicationId === a.A.getBuilderPreviewApplicationId() || n.data.runsInBackground;
              switch (n.surface.type) {
                  case i.U.APP_CHANNEL:
                  case i.U.VOICE_CHANNEL:
                      if (n.surface.channelId === u.kG) return t ? n : null;
                      return n;
                  case i.U.OVERLAY:
                      return n;
                  case i.U.MAIN:
                      return t ? n : null;
                  case i.U.INTERACTION_MODAL:
                      return null;
                  default:
                      return (n.surface, null);
              }
          })(e);
    if (null == s)
        throw new l.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Command not available for this application");
    return { frame: s, iframeId: e.source.iframeId };
}
function f(e) {
    try {
        return s(e);
    } catch (e) {
        if (e instanceof l.A) return null;
        throw e;
    }
}
