var i = n(582128),
    a = n(120692);
let l = (0, i.createContext)({
    scale: new a.SpringValue(1),
    x: new a.SpringValue(0),
    y: new a.SpringValue(0),
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
            return (0, i.useContext)(l);
        },
        f: l,
    },
);
