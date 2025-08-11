n.d(t, {
    Y: () => a,
    z: () => o,
});
var r = n(73800),
    i = n(717976);
let o = (0, r.createContext)({
    scale: new i.SpringValue(1),
    x: new i.SpringValue(0),
    y: new i.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function a() {
    return (0, r.useContext)(o);
}
