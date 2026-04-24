n.d(t, { Q: () => l, f: () => r });
var i = n(64700),
    a = n(419354);
let r = (0, i.createContext)({
    scale: new a.SpringValue(1),
    x: new a.SpringValue(0),
    y: new a.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function l() {
    return (0, i.useContext)(r);
}
