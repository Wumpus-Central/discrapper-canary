r.d(e, {
    NI: () => u,
    bE: () => o,
    vY: () => a
});
var n = r(408717),
    i = r(109683);
function o(t, e) {
    if (!(0, i.Wr)()) return !!e && !!t && t.contains(e);
    if (!t || !e) return !1;
    let r = e;
    for (; null !== r; ) {
        if (r === t) return !0;
        r = 'SLOT' === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : (0, n.Zq)(r) ? r.host : r.parentNode;
    }
    return !1;
}
let a = (t = document) => {
    var e;
    if (!(0, i.Wr)()) return t.activeElement;
    let r = t.activeElement;
    for (; r && 'shadowRoot' in r && (null == (e = r.shadowRoot) ? void 0 : e.activeElement); ) r = r.shadowRoot.activeElement;
    return r;
};
function u(t) {
    return (0, i.Wr)() && t.target.shadowRoot && t.composedPath ? t.composedPath()[0] : t.target;
}
