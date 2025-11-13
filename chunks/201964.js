n.d(t, { o: () => r });
var a = n(979554),
    i = n(429368);
let r = (e, t) => {
    let n = (0, i.o)(e),
        r = null != t ? t : n;
    return (null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > r
        ? e.variants[r].items[0]
        : e.items[0];
};
