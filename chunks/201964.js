n.d(t, {
    o: function () {
        return l;
    }
});
var r = n(979554),
    i = n(429368);
let l = (e, t, n) => {
    let l = (0, i.o)(e, t),
        s = null != n ? n : l;
    return (null == e ? void 0 : e.type) === r.Z.VARIANTS_GROUP && null != e.variants && e.variants.length > s ? e.variants[s].items[0] : e.items[0];
};
