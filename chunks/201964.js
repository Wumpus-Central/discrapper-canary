r.d(t, { o: () => o });
var n = r(979554),
    l = r(429368);
let o = (e, t, r) => {
    let o = (0, l.o)(e, t),
        i = null != r ? r : o;
    return (null == e ? void 0 : e.type) === n.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > i ? e.variants[i].items[0] : e.items[0];
};
