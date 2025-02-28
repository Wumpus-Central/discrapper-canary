n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(785141),
    l = n(272395),
    o = n(475674),
    a = n(42326),
    s = n(906467),
    c = n(388032);
function u(e) {
    let { participant: t, className: n } = e,
        u = (0, o.Z)(t),
        d = null == u ? void 0 : u.message,
        { avErrorUIEnabled: f } = (0, l.J)({ location: 'StreamWarning' }),
        m = f
            ? (function (e) {
                  if (null != e) {
                      var t;
                      let n = null === (t = (0, i.hp)(e.avError)) || void 0 === t ? void 0 : t.errorCode,
                          r = c.NW.formatToPlainString(c.t['ejOT9/'], { errorCode: n });
                      return s.Z.isDeveloper ? ''.concat(r, ' (').concat(e.errorType, ')') : r;
                  }
                  return null;
              })(u)
            : null;
    return null != d
        ? (0, r.jsx)(a.Z, {
              className: n,
              errorMessage: d,
              errorDetailMessage: m
          })
        : null;
}
