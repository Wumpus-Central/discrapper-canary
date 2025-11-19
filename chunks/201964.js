n.d(t, { o: () => i });
var a = n(979554),
    l = n(429368);
let i = (e, t) => {
    let n = (0, l.o)(e),
        i = null != t ? t : n;
    return (null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > i
        ? e.variants[i].items[0]
        : e.items[0];
};
