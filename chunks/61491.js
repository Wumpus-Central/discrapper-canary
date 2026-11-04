function n(t, r) {
    return (t / 100) * r.width;
}
e.d(
    r,
    {},
    {
        DX: function (t, r, e) {
            return n((t / r) * 100, e);
        },
        TO: n,
        hc: function (t, r, e) {
            return e * (Math.max(t, 0) / r.width);
        },
        rB: function (t) {
            let r = t < 0 ? "-" : "",
                e = 0 | (t = Math.abs(t)),
                n = Math.floor(e / 3600),
                i = Math.floor((e % 3600) / 60),
                u = e % 60;
            return n > 0
                ? `${r}${n}:${String(i).padStart(2, "0")}:${String(u).padStart(2, "0")}`
                : `${r}${i}:${String(u).padStart(2, "0")}`;
        },
    },
);
