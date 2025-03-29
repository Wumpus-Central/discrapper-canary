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
        { avErrorUIEnabled: f } = (0, l.JN)({ location: 'StreamWarning' }),
        m = f
            ? (function (e) {
                  var t;
                  let n = null == e ? void 0 : e.avError;
                  if (null == n) return null;
                  let r = null === (t = (0, i.hp)(n)) || void 0 === t ? void 0 : t.errorCode,
                      l = c.NW.formatToPlainString(c.t['ejOT9/'], { errorCode: r });
                  return s.Z.isDeveloper ? ''.concat(l, ' (').concat(n, ')') : l;
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
