"use strict";
n.d(t, { A: () => i });
var r = n(514467);
function i(e) {
    var t = (0, r.A)(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
    return (
        1 >= Math.abs(t.width - n) && (n = t.width),
        1 >= Math.abs(t.height - i) && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
    );
}
