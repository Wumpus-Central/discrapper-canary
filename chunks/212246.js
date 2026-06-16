"use strict";
function i(e, t, n) {
    var i = n.getRegistry(),
        r = i.addTarget(e, t);
    return [
        r,
        function () {
            return i.removeTarget(r);
        },
    ];
}
function r(e, t, n) {
    var i = n.getRegistry(),
        r = i.addSource(e, t);
    return [
        r,
        function () {
            return i.removeSource(r);
        },
    ];
}
n.d(t, { V: () => r, l: () => i });
