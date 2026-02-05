"use strict";
n.d(t, { au: () => l, rJ: () => s, zN: () => o });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(659416),
    s = (function (e) {
        return (e.Default = "Default"), (e.ContextMenu = "ContextMenu"), e;
    })({});
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Default";
    switch (e) {
        case a.H9.TIMED:
            return "ContextMenu" === t ? i.lI8 : i.O4;
        case a.H9.GAME:
            return i._xR;
        case a.H9.VOCAL:
            return i.cNw;
        case a.H9.STREAM:
            return i.ofK;
        case a.H9.VIDEO:
            return i.npA;
        case a.H9.CHAT:
            return i.oyn;
    }
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Default",
        i = o(e, n);
    return (0, r.jsx)(i, { ...t });
}
