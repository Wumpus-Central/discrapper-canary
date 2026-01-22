n.d(t, {
    D: () => i,
});
var a = n(575593),
    l = n(298072);
let i = (e, t) => {
    let n = (0, l.Q)(e),
        i = null != t ? t : n;
    return (null == e ? void 0 : e.type) === a.R.VARIANTS_GROUP && null != e.variants && e.variants.length > i
        ? e.variants[i].items[0]
        : e.items[0];
};
