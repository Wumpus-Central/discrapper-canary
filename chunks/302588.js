n.d(t, { A: () => o });
var r = n(682213);
function i(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
function a(e, t) {
    void 0 === t && (t = "auto");
    var n = "scrollBehavior" in document.body.style;
    e.forEach(function (e) {
        var r = e.el,
            i = e.top,
            a = e.left;
        r.scroll && n
            ? r.scroll({
                  top: i,
                  left: a,
                  behavior: t,
              })
            : ((r.scrollTop = i), (r.scrollLeft = a));
    });
}
function s(e) {
    return !1 === e
        ? {
              block: "end",
              inline: "nearest",
          }
        : i(e)
          ? e
          : {
                block: "start",
                inline: "nearest",
            };
}
let o = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (i(t) && "function" == typeof t.behavior) return t.behavior(n ? (0, r.A)(e, t) : []);
    if (n) {
        var o = s(t);
        return a((0, r.A)(e, o), o.behavior);
    }
};
