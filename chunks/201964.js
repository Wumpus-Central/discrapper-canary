r.d(t, { o: () => i });
var n = r(979554),
    l = r(429368);
let i = (e, t, r) => {
    let i = (0, l.o)(e, t),
        a = null != r ? r : i;
    return (null == e ? void 0 : e.type) === n.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > a ? e.variants[a].items[0] : e.items[0];
};
