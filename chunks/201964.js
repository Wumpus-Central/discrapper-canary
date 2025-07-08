r.d(t, { o: () => l });
var n = r(979554),
    i = r(429368);
let l = (e, t, r) => {
    let l = (0, i.o)(e, t),
        o = null != r ? r : l;
    return (null == e ? void 0 : e.type) === n.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > o ? e.variants[o].items[0] : e.items[0];
};
