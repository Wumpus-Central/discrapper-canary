n.d(t, {
    Y: () => o,
    z: () => a
});
var r = n(73800),
    i = n(71347);
let a = (0, r.createContext)({
    scale: new i.SpringValue(1),
    x: new i.SpringValue(0),
    y: new i.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {}
});
function o() {
    return (0, r.useContext)(a);
}
