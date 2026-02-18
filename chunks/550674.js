r.d(e, { D: () => n });
var i = r(575593),
    l = r(298072);
let n = (t, e) => {
    let r = (0, l.Q)(t),
        n = null != e ? e : r;
    return t?.type === i.R.VARIANTS_GROUP && null != t.variants && t.variants.length > n
        ? t.variants[n].items[0]
        : t.items[0];
};
