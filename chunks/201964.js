n.d(t, { o: () => l });
var a = n(979554),
    i = n(429368);
let l = (e, t) => {
    let n = (0, i.o)(e),
        l = null != t ? t : n;
    return (null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > l
        ? e.variants[l].items[0]
        : e.items[0];
};
