"use strict";
function r() {
    let e = "function" == typeof WeakSet,
        t = e ? new WeakSet() : [];
    return [
        function (n) {
            if (e) return !!t.has(n) || (t.add(n), !1);
            for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
            return t.push(n), !1;
        },
        function (n) {
            if (e) t.delete(n);
            else
                for (let e = 0; e < t.length; e++)
                    if (t[e] === n) {
                        t.splice(e, 1);
                        break;
                    }
        },
    ];
}
n.d(t, { s: () => r });
