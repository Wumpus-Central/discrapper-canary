r.d(e, { $b: () => d, Ay: () => s, we: () => f });
var t = r(991690),
    i = r(878014),
    a = r(111534),
    l = r(754027),
    u = r(636401),
    o = r(90924),
    c = r(216132),
    p = r(901092),
    A = r(652215);
function s(n) {
    return I(n, !1);
}
function d(n) {
    return I(n, !0);
}
function I(n, e) {
    let r;
    if (((0, o.lG)(n.transport), (0, o.D2)(n.application), !(0, i.D)(n.application)))
        throw new u.A({ errorCode: A.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "This application cannot access this API");
    if (!(0, p.A)(n)) throw new u.A({ errorCode: A.Lw6.INVALID_COMMAND }, "command requires an embedded app frame");
    let s = e
        ? null != (r = (0, c.A)(n)) && r.applicationId === n.application.id
            ? r
            : null
        : (function (n) {
              let e = (0, c.A)(n);
              if (null == e || e.applicationId !== n.application.id) return null;
              let r = e.applicationId === a.A.getBuilderPreviewApplicationId() || e.data.runsInBackground;
              switch (e.surface.type) {
                  case t.U.APP_CHANNEL:
                  case t.U.VOICE_CHANNEL:
                      if (e.surface.channelId === l.kG) return r ? e : null;
                      return e;
                  case t.U.OVERLAY:
                      return e;
                  case t.U.MAIN:
                      return r ? e : null;
                  case t.U.INTERACTION_MODAL:
                      return null;
                  default:
                      return (e.surface, null);
              }
          })(n);
    if (null == s)
        throw new u.A({ errorCode: A.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Command not available for this application");
    return { frame: s, iframeId: n.source.iframeId };
}
function f(n) {
    try {
        return s(n);
    } catch (n) {
        if (n instanceof u.A) return null;
        throw n;
    }
}
