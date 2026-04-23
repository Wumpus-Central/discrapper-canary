"use strict";
function r(e, t) {
    void 0 === t && (t = 0);
    var n = e % 19,
        r = Math.floor(e / 100),
        i = e % 100,
        s = Math.floor(r / 4),
        a = Math.floor((r + 8) / 25),
        o = Math.floor((r - a + 1) / 3),
        l = Math.floor(19 * n + r - s - o + 15) % 30,
        u = Math.floor(32 + (r % 4) * 2 + 2 * Math.floor(i / 4) - l - (i % 4)) % 7,
        c = Math.floor((n + 11 * l + 22 * u) / 451);
    return [
        Math.ceil(
            (Date.UTC(e, Math.floor((l + u - 7 * c + 114) / 31) - 1, ((l + u - 7 * c + 114) % 31) + 1 + t) -
                Date.UTC(e, 0, 1)) /
                864e5,
        ),
    ];
}
n.d(t, { H: () => r });
