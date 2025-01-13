n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(475674),
    r = n(42326),
    a = n(906467);
function s(e) {
    var t;
    let { participant: n, className: s } = e;
    let o = null == (t = (0, l.Z)(n)) ? null : a.Z.isDeveloper ? ''.concat(t.message, ' (').concat(t.errorType, ')') : t.message;
    return null != o
        ? (0, i.jsx)(r.Z, {
              className: s,
              errorMessage: o
          })
        : null;
}
