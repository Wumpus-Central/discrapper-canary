"use strict";
n.d(t, { Ay: () => c, Bx: () => a, bf: () => o, vs: () => l });
var i,
    s = n(64700),
    l = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.NO_INVITE = 1)] = "NO_INVITE"), (i[(i.MINIMAL = 2)] = "MINIMAL"), i);
let r = s.createContext(0);
function a() {
    return s.useContext(r);
}
function o(e) {
    return null == e ? 0 : e <= 550 ? 2 : +(e <= 650);
}
let c = r;
