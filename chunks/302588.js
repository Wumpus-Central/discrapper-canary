"use strict";
n.d(t, { A: () => a });
var r = n(682213);
function i(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let a = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (i(t) && "function" == typeof t.behavior) return t.behavior(n ? (0, r.A)(e, t) : []);
    if (n) {
        var a,
            o,
            u,
            s = !1 === t ? { block: "end", inline: "nearest" } : i(t) ? t : { block: "start", inline: "nearest" };
        return (
            (a = (0, r.A)(e, s)),
            void 0 === (o = s.behavior) && (o = "auto"),
            (u = "scrollBehavior" in document.body.style),
            void a.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    r = e.left;
                t.scroll && u ? t.scroll({ top: n, left: r, behavior: o }) : ((t.scrollTop = n), (t.scrollLeft = r));
            })
        );
    }
};
