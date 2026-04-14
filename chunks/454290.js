"use strict";
n.d(t, { Q: () => a, f: () => s });
var r = n(64700),
    i = n(445887);
let s = (0, r.createContext)({
    scale: new i.SpringValue(1),
    x: new i.SpringValue(0),
    y: new i.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function a() {
    return (0, r.useContext)(s);
}
