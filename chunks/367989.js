var i = r(911331);
function a(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
function o(e, n) {
    void 0 === n && (n = 'auto');
    var r = 'scrollBehavior' in document.body.style;
    e.forEach(function (e) {
        var i = e.el,
            a = e.top,
            o = e.left;
        i.scroll && r
            ? i.scroll({
                  top: a,
                  left: o,
                  behavior: n
              })
            : ((i.scrollTop = a), (i.scrollLeft = o));
    });
}
function s(e) {
    return !1 === e
        ? {
              block: 'end',
              inline: 'nearest'
          }
        : a(e)
          ? e
          : {
                block: 'start',
                inline: 'nearest'
            };
}
function l(e, n) {
    var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (a(n) && 'function' == typeof n.behavior) return n.behavior(r ? (0, i.Z)(e, n) : []);
    if (!!r) {
        var l = s(n);
        return o((0, i.Z)(e, l), l.behavior);
    }
}
n.Z = l;
