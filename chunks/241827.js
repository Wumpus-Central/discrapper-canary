n.d(t, {
    bq: () => s,
    sD: () => a,
    wt: () => o,
});
var r = n(297987),
    i = n(790637);
function a(e, t) {
    if (!(0, i.Nf)()) return !!t && !!e && e.contains(t);
    if (!e || !t) return !1;
    let n = t;
    for (; null !== n; ) {
        if (n === e) return !0;
        n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode;
    }
    return !1;
}
let s = (e = document) => {
    var t;
    if (!(0, i.Nf)()) return e.activeElement;
    let n = e.activeElement;
    for (; n && "shadowRoot" in n && (null == (t = n.shadowRoot) ? void 0 : t.activeElement); )
        n = n.shadowRoot.activeElement;
    return n;
};
function o(e) {
    return (0, i.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
