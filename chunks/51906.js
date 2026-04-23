"use strict";
function r(e) {
    let t = null,
        n = null;
    return function () {
        for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
        return (
            !(function (e, t) {
                if (e === t) return !0;
                if (null == e || null == t || e.length !== t.length) return !1;
                let n = e.length;
                for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
                return !0;
            })(t, i) && (n = e(...i)),
            (t = i),
            n
        );
    };
}
n.d(t, { L_: () => r });
