s.d(e, {
    h: () =>
        function t(e, s, i = 2) {
            if (!s || "object" != typeof s || i <= 0) return s;
            if (e && s && 0 === Object.keys(s).length) return e;
            let r = { ...e };
            for (let e in s) Object.prototype.hasOwnProperty.call(s, e) && (r[e] = t(r[e], s[e], i - 1));
            return r;
        },
});
