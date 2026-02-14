"use strict";
n.d(t, { Q: () => s, f: () => a });
var r = n(64700),
    i = n(522160);
let a = (0, r.createContext)({
    scale: new i.SpringValue(1),
    x: new i.SpringValue(0),
    y: new i.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function s() {
    return (0, r.useContext)(a);
}
