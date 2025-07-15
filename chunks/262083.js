n.d(t, {
    NI: () => a,
    bE: () => o,
    vY: () => s
});
var i = n(893346),
    r = n(109683);
function o(e, t) {
    if (!(0, r.Wr)()) return !!t && !!e && e.contains(t);
    if (!e || !t) return !1;
    let n = t;
    for (; null !== n; ) {
        if (n === e) return !0;
        n = 'SLOT' === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, i.Zq)(n) ? n.host : n.parentNode;
    }
    return !1;
}
let s = (e = document) => {
    var t;
    if (!(0, r.Wr)()) return e.activeElement;
    let n = e.activeElement;
    for (; n && 'shadowRoot' in n && (null == (t = n.shadowRoot) ? void 0 : t.activeElement); ) n = n.shadowRoot.activeElement;
    return n;
};
function a(e) {
    return (0, r.Wr)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
