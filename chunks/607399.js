"use strict";
n.d(t, { Ct: () => u, Fr: () => d, KY: () => c, v1: () => o });
var i = n(214958),
    r = n.n(i);
let a = new Set(["iPad", "Kindle", "Kindle Fire", "Nook", "PlayBook"]),
    s = new Set(["Android", "iOS", "Windows Phone"]),
    l =
        window?.navigator?.platform === "MacIntel" &&
        void 0 !== window?.navigator?.standalone &&
        window?.navigator?.maxTouchPoints > 1,
    o = a.has(r().product ?? "") || l,
    d = !o && s.has(r()?.os?.family ?? ""),
    c = r()?.os?.family === "iOS",
    u = r()?.os?.family === "Android";
