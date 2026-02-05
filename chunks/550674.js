"use strict";
n.d(t, { D: () => a });
var r = n(575593),
    i = n(298072);
let a = (e, t) => {
    let n = (0, i.Q)(e),
        a = null != t ? t : n;
    return e?.type === r.R.VARIANTS_GROUP && null != e.variants && e.variants.length > a
        ? e.variants[a].items[0]
        : e.items[0];
};
