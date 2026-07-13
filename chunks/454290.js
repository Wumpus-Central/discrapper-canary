"use strict";
n.d(t, { Q: () => s, f: () => a });
var i = n(64700),
    r = n(580929);
let a = (0, i.createContext)({
    scale: new r.SpringValue(1),
    x: new r.SpringValue(0),
    y: new r.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function s() {
    return (0, i.useContext)(a);
}
