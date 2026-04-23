"use strict";
function r(e) {
    let t = Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0,
        n = Math.floor(t / 36e5),
        r = Math.floor(t / 6e4) % 60;
    return { hours: n, minutes: r, seconds: Math.floor(t / 1e3) % 60, milliseconds: t % 1e3 };
}
n.d(t, { p: () => r });
