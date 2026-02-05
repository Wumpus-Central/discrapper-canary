"use strict";
n.d(t, { Ct: () => d, Fr: () => u, KY: () => c, v1: () => l });
var r = n(214958),
    i = n.n(r);
let a = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
    s = new Set(["Android", "iOS", "Windows Phone"]),
    o =
        window?.navigator?.platform === "MacIntel" &&
        void 0 !== window?.navigator?.standalone &&
        window?.navigator?.maxTouchPoints > 1,
    l = a.has(i().product ?? "") || o,
    u = !l && s.has(i()?.os?.family ?? ""),
    c = i()?.os?.family === "iOS",
    d = i()?.os?.family === "Android";
