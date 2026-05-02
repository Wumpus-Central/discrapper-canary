"use strict";
n.d(t, { Q: () => a, f: () => s });
var i = n(64700),
    r = n(785651);
let s = (0, i.createContext)({
    scale: new r.SpringValue(1),
    x: new r.SpringValue(0),
    y: new r.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function a() {
    return (0, i.useContext)(s);
}
