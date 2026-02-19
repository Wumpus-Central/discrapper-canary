"use strict";
n.d(t, { t: () => r });
var i = n(311907),
    s = n(810153),
    l = n(995273);
let r = (e, t) => {
    let n = (0, i.bG)([s.A], () => s.A.isLocalItemAcked(e));
    return !e.forceUnacked && (n || (0, l.NW)(e, t));
};
