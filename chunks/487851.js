"use strict";
n.d(t, {
    h: () =>
        function e(t, n, i = 2) {
            if (!n || "object" != typeof n || i <= 0) return n;
            if (t && n && 0 === Object.keys(n).length) return t;
            let r = { ...t };
            for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (r[t] = e(r[t], n[t], i - 1));
            return r;
        },
});
