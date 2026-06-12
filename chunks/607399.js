"use strict";
n.d(t, { Ct: () => d, Fr: () => u, KY: () => c, v1: () => l });
var i = n(214958),
    r = n.n(i);
let s = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
    a = new Set(["Android", "iOS", "Windows Phone"]),
    o =
        window?.navigator?.platform === "MacIntel" &&
        void 0 !== window?.navigator?.standalone &&
        window?.navigator?.maxTouchPoints > 1,
    l = s.has(r().product ?? "") || o,
    u = !l && a.has(r()?.os?.family ?? ""),
    c = r()?.os?.family === "iOS",
    d = r()?.os?.family === "Android";
