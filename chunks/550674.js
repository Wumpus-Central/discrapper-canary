r.d(t, { D: () => l });
var i = r(575593),
    n = r(298072);
let l = (e, t) => {
    let r = (0, n.Q)(e),
        l = null != t ? t : r;
    return e?.type === i.R.VARIANTS_GROUP && null != e.variants && e.variants.length > l
        ? e.variants[l].items[0]
        : e.items[0];
};
