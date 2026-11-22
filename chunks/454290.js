var i = n(582128),
    l = n(120692);
let a = (0, i.createContext)({
    scale: new l.SpringValue(1),
    x: new l.SpringValue(0),
    y: new l.SpringValue(0),
    setScale() {},
    setOffset() {},
    zoomed: !1,
    setZoomed() {},
});
n.d(
    t,
    {},
    {
        Q: function () {
            return (0, i.useContext)(a);
        },
        f: a,
    },
);
