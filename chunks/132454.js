n.d(t, { j: () => s }), n(47120), n(411104), n(653041);
var i = n(570140);
let r = {},
    a = !1;
function s(e) {
    for (let t in e) {
        let n = e[t];
        o(t, n), l(n);
    }
    i.Z.addInterceptor(u);
}
function o(e, t) {
    var n;
    t.actions;
}
function l(e) {
    var t;
    let n = null !== (t = e.actions) && void 0 !== t ? t : [];
    for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (n.includes('POST_CONNECTION_OPEN') || (n = [...n, 'POST_CONNECTION_OPEN']), n.includes('OVERLAY_INITIALIZE') || (n = [...n, 'OVERLAY_INITIALIZE'])), e.loadRightBeforeConnectionOpen && (n.includes('CONNECTION_OPEN') || (n = [...n, 'CONNECTION_OPEN']), n.includes('OVERLAY_INITIALIZE') || (n = [...n, 'OVERLAY_INITIALIZE'])), n)) t in r || (r[t] = []), r[t].push(e);
}
function u(e) {
    if ((('CONNECTION_OPEN' === e.type || 'OVERLAY_INITIALIZE' === e.type) && (a = !0), e.type in r)) {
        let t = [];
        for (let n of r[e.type]) !a && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (r[e.type] = t) : delete r[e.type];
    }
    return !1;
}
