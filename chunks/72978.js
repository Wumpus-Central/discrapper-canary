"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.stringSimilarity = void 0),
    (t.stringSimilarity = function (e, t, n, r) {
        if (
            (void 0 === n && (n = 2),
            void 0 === r && (r = !1),
            r || ((e = e.toLowerCase()), (t = t.toLowerCase())),
            e.length < n || t.length < n)
        )
            return 0;
        for (var i = new Map(), a = 0; a < e.length - (n - 1); a++) {
            var s = e.substr(a, n);
            i.set(s, i.has(s) ? i.get(s) + 1 : 1);
        }
        for (var o = 0, l = 0; l < t.length - (n - 1); l++) {
            var u = t.substr(l, n),
                c = i.has(u) ? i.get(u) : 0;
            c > 0 && (i.set(u, c - 1), o++);
        }
        return (2 * o) / (e.length + t.length - (n - 1) * 2);
    }),
    (t.default = t.stringSimilarity);
