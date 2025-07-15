r.d(t, { o: () => i });
var n = r(979554),
    l = r(429368);
let i = (e, t, r) => {
    let i = (0, l.o)(e, t),
        o = null != r ? r : i;
    return (null == e ? void 0 : e.type) === n.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > o ? e.variants[o].items[0] : e.items[0];
};
