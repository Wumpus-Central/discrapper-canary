n.d(t, { Z: () => s });
var r = n(911331);
function i(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
function a(e, t) {
    void 0 === t && (t = 'auto');
    var n = 'scrollBehavior' in document.body.style;
    e.forEach(function (e) {
        var r = e.el,
            i = e.top,
            a = e.left;
        r.scroll && n
            ? r.scroll({
                  top: i,
                  left: a,
                  behavior: t
              })
            : ((r.scrollTop = i), (r.scrollLeft = a));
    });
}
function o(e) {
    return !1 === e
        ? {
              block: 'end',
              inline: 'nearest'
          }
        : i(e)
          ? e
          : {
                block: 'start',
                inline: 'nearest'
            };
}
let s = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (i(t) && 'function' == typeof t.behavior) return t.behavior(n ? (0, r.Z)(e, t) : []);
    if (n) {
        var s = o(t);
        return a((0, r.Z)(e, s), s.behavior);
    }
};
