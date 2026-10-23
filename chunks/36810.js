t.d(e, { $b: () => I, Ay: () => s, we: () => f });
var r = t(991690),
    i = t(878014),
    l = t(111534),
    u = t(754027),
    a = t(636401),
    o = t(90924),
    c = t(216132),
    A = t(901092),
    p = t(652215);
function s(n) {
    return d(n, !1);
}
function I(n) {
    return d(n, !0);
}
function d(n, e) {
    let t;
    if (((0, o.lG)(n.transport), (0, o.D2)(n.application), !(0, i.D)(n.application)))
        throw new a.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "This application cannot access this API");
    if (!(0, A.A)(n)) throw new a.A({ errorCode: p.Lw6.INVALID_COMMAND }, "command requires an embedded app frame");
    let s = e
        ? null != (t = (0, c.A)(n)) && t.applicationId === n.application.id
            ? t
            : null
        : (function (n) {
              let e = (0, c.A)(n);
              if (null == e || e.applicationId !== n.application.id) return null;
              let t = e.applicationId === l.A.getBuilderPreviewApplicationId() || e.data.runsInBackground;
              switch (e.surface.type) {
                  case r.U.APP_CHANNEL:
                  case r.U.VOICE_CHANNEL:
                      if (e.surface.channelId === u.kG) return t ? e : null;
                      return e;
                  case r.U.OVERLAY:
                      return e;
                  case r.U.MAIN:
                      return t ? e : null;
                  case r.U.INTERACTION_MODAL:
                      return null;
                  default:
                      return (e.surface, null);
              }
          })(n);
    if (null == s)
        throw new a.A({ errorCode: p.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Command not available for this application");
    return { frame: s, iframeId: n.source.iframeId };
}
function f(n) {
    try {
        return s(n);
    } catch (n) {
        if (n instanceof a.A) return null;
        throw n;
    }
}
