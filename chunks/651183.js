n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var l = n(475674),
    i = n(42326),
    a = n(906467);
function o(e) {
    var t;
    let { participant: n, className: o } = e,
        s = null == (t = (0, l.Z)(n)) ? null : a.Z.isDeveloper ? ''.concat(t.message, ' (').concat(t.errorType, ')') : t.message;
    return null != s
        ? (0, r.jsx)(i.Z, {
              className: o,
              errorMessage: s
          })
        : null;
}
