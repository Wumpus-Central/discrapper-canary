"use strict";
s.d(e, {
    h: () =>
        function t(e, s, r = 2) {
            if (!s || "object" != typeof s || r <= 0) return s;
            if (e && s && 0 === Object.keys(s).length) return e;
            let i = { ...e };
            for (let e in s) Object.prototype.hasOwnProperty.call(s, e) && (i[e] = t(i[e], s[e], r - 1));
            return i;
        },
});
