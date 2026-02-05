"use strict";
function r(e, t) {
    void 0 === t && (t = 0);
    var n = e % 19,
        r = Math.floor(e / 100),
        i = e % 100,
        a = Math.floor(r / 4),
        s = r % 4,
        o = Math.floor((r + 8) / 25),
        l = Math.floor((r - o + 1) / 3),
        u = Math.floor(19 * n + r - a - l + 15) % 30,
        c = Math.floor(32 + 2 * s + 2 * Math.floor(i / 4) - u - (i % 4)) % 7,
        d = Math.floor((n + 11 * u + 22 * c) / 451);
    return [
        Math.ceil(
            (Date.UTC(e, Math.floor((u + c - 7 * d + 114) / 31) - 1, ((u + c - 7 * d + 114) % 31) + 1 + t) -
                Date.UTC(e, 0, 1)) /
                864e5,
        ),
    ];
}
n.d(t, { H: () => r });
