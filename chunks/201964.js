i.d(t, { o: () => r });
var l = i(979554),
    n = i(429368);
let r = (e, t) => {
    let i = (0, n.o)(e),
        r = null != t ? t : i;
    return (null == e ? void 0 : e.type) === l.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > r
        ? e.variants[r].items[0]
        : e.items[0];
};
