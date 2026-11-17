n.d(
    t,
    {},
    {
        h: function e(t, n, r = 2) {
            if (!n || "object" != typeof n || r <= 0) return n;
            if (t && n && 0 === Object.keys(n).length) return t;
            let i = { ...t };
            for (let t in n) Object.prototype.hasOwnProperty.call(n, t) && (i[t] = e(i[t], n[t], r - 1));
            return i;
        },
    },
);
