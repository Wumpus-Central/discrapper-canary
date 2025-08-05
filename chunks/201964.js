r.d(t, { o: () => a });
var n = r(979554),
    l = r(429368);
let a = (e, t, r) => {
    let a = (0, l.o)(e, t),
        i = null != r ? r : a;
    return (null == e ? void 0 : e.type) === n.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > i ? e.variants[i].items[0] : e.items[0];
};
