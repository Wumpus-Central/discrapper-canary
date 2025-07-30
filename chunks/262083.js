n.d(t, {
    NI: () => a,
    bE: () => o,
    vY: () => u
});
var r = n(893346),
    i = n(109683);
function o(e, t) {
    if (!(0, i.Wr)()) return !!t && !!e && e.contains(t);
    if (!e || !t) return !1;
    let n = t;
    for (; null !== n; ) {
        if (n === e) return !0;
        n = 'SLOT' === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Zq)(n) ? n.host : n.parentNode;
    }
    return !1;
}
let u = (e = document) => {
    var t;
    if (!(0, i.Wr)()) return e.activeElement;
    let n = e.activeElement;
    for (; n && 'shadowRoot' in n && (null == (t = n.shadowRoot) ? void 0 : t.activeElement); ) n = n.shadowRoot.activeElement;
    return n;
};
function a(e) {
    return (0, i.Wr)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
