n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(785141),
    i = n(272395),
    a = n(475674),
    o = n(42326),
    s = n(906467),
    u = n(388032);
function c(e) {
    let { participant: t, className: n } = e,
        c = (0, a.Z)(t),
        d = null == c ? void 0 : c.message,
        { avErrorUIEnabled: f } = (0, i.JN)({ location: 'StreamWarning' }),
        m = f
            ? (function (e) {
                  var t;
                  let n = null == e ? void 0 : e.avError;
                  if (null == n) return null;
                  let r = null == (t = (0, l.hp)(n)) ? void 0 : t.errorCode,
                      i = u.NW.formatToPlainString(u.t['ejOT9/'], { errorCode: r });
                  return s.Z.isDeveloper ? ''.concat(i, ' (').concat(n, ')') : i;
              })(c)
            : null;
    return null != d
        ? (0, r.jsx)(o.Z, {
              className: n,
              errorMessage: d,
              errorDetailMessage: m
          })
        : null;
}
