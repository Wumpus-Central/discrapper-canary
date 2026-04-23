"use strict";
n.d(t, { A: () => s });
var r = n(682213);
function i(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let s = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (i(t) && "function" == typeof t.behavior) return t.behavior(n ? (0, r.A)(e, t) : []);
    if (n) {
        var s,
            a,
            o,
            l = !1 === t ? { block: "end", inline: "nearest" } : i(t) ? t : { block: "start", inline: "nearest" };
        return (
            (s = (0, r.A)(e, l)),
            void 0 === (a = l.behavior) && (a = "auto"),
            (o = "scrollBehavior" in document.body.style),
            void s.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    r = e.left;
                t.scroll && o ? t.scroll({ top: n, left: r, behavior: a }) : ((t.scrollTop = n), (t.scrollLeft = r));
            })
        );
    }
};
