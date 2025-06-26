r.d(t, { o: () => o });
var n = r(979554),
    i = r(429368);
let o = (e, t, r) => {
    let o = (0, i.o)(e, t),
        l = null != r ? r : o;
    return (null == e ? void 0 : e.type) === n.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > l ? e.variants[l].items[0] : e.items[0];
};
