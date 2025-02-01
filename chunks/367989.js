n.d(t, { Z: () => o });
var i = n(911331);
function r(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
function a(e, t) {
    void 0 === t && (t = 'auto');
    var n = 'scrollBehavior' in document.body.style;
    e.forEach(function (e) {
        var i = e.el,
            r = e.top,
            a = e.left;
        i.scroll && n
            ? i.scroll({
                  top: r,
                  left: a,
                  behavior: t
              })
            : ((i.scrollTop = r), (i.scrollLeft = a));
    });
}
function s(e) {
    return !1 === e
        ? {
              block: 'end',
              inline: 'nearest'
          }
        : r(e)
          ? e
          : {
                block: 'start',
                inline: 'nearest'
            };
}
let o = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (r(t) && 'function' == typeof t.behavior) return t.behavior(n ? (0, i.Z)(e, t) : []);
    if (n) {
        var o = s(t);
        return a((0, i.Z)(e, o), o.behavior);
    }
};
