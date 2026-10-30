n.d(t, { Q: () => o, f: () => l });
var i = n(582128),
    a = n(941143);
let l = (0, i.createContext)({
    scale: new a.SpringValue(1),
    x: new a.SpringValue(0),
    y: new a.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
function o() {
    return (0, i.useContext)(l);
}
