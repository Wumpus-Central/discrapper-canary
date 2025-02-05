n.d(t, { Z: () => s });
var l = n(200651);
n(192379);
var i = n(475674),
    r = n(42326),
    a = n(906467);
function s(e) {
    var t;
    let { participant: n, className: s } = e,
        o = null == (t = (0, i.Z)(n)) ? null : a.Z.isDeveloper ? ''.concat(t.message, ' (').concat(t.errorType, ')') : t.message;
    return null != o
        ? (0, l.jsx)(r.Z, {
              className: s,
              errorMessage: o
          })
        : null;
}
