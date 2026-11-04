var i = t(991690),
    r = t(878014),
    a = t(111534);
t(754027);
var u = t(636401),
    l = t(90924),
    o = t(216132),
    c = t(901092),
    A = t(652215);
function p(e) {
    return s(e, !1);
}
function s(e, n) {
    let t;
    if (((0, l.lG)(e.transport), (0, l.D2)(e.application), !(0, r.D)(e.application)))
        throw new u.A({ errorCode: A.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "This application cannot access this API");
    if (!(0, c.A)(e)) throw new u.A({ errorCode: A.Lw6.INVALID_COMMAND }, "command requires an embedded app frame");
    let p = n
        ? null != (t = (0, o.A)(e)) && t.applicationId === e.application.id
            ? t
            : null
        : (function (e) {
              let n = (0, o.A)(e);
              if (null == n || n.applicationId !== e.application.id) return null;
              let t = n.applicationId === a.A.getBuilderPreviewApplicationId() || n.data.runsInBackground;
              switch (n.surface.type) {
                  case i.U.APP_CHANNEL:
                  case i.U.VOICE_CHANNEL:
                      if ("0" === n.surface.channelId) return t ? n : null;
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
    if (null == p)
        throw new u.A({ errorCode: A.Lw6.UNAUTHORIZED_FOR_APPLICATION }, "Command not available for this application");
    return { frame: p, iframeId: e.source.iframeId };
}
t.d(
    n,
    {},
    {
        $b: function (e) {
            return s(e, !0);
        },
        Ay: p,
        we: function (e) {
            try {
                return p(e);
            } catch (e) {
                if (e instanceof u.A) return null;
                throw e;
            }
        },
    },
);
