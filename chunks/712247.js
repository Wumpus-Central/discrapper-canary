"use strict";
r.d(t, { bq: () => a, sD: () => i, wt: () => s });
var n = r(745391),
    o = r(790637);
function i(e, t) {
    if (!(0, o.Nf)()) return !!t && !!e && e.contains(t);
    if (!e || !t) return !1;
    let r = t;
    for (; null !== r; ) {
        if (r === e) return !0;
        r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : (0, n.Ng)(r) ? r.host : r.parentNode;
    }
    return !1;
}
let a = (e = document) => {
    var t;
    if (!(0, o.Nf)()) return e.activeElement;
    let r = e.activeElement;
    for (; r && "shadowRoot" in r && (null == (t = r.shadowRoot) ? void 0 : t.activeElement); )
        r = r.shadowRoot.activeElement;
    return r;
};
function s(e) {
    return (0, o.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
