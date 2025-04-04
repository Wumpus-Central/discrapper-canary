n.d(t, { j: () => a }), n(47120), n(230036), n(411104), n(653041);
var r = n(570140);
let i = {},
    o = !1;
function a(e) {
    for (let t in e) {
        let n = e[t];
        s(t, n), l(n);
    }
    r.Z.addInterceptor(c);
}
function s(e, t) {
    var n;
    t.actions;
}
function l(e) {
    var t;
    let n = null != (t = e.actions) ? t : [];
    for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (n.includes('POST_CONNECTION_OPEN') || (n = [...n, 'POST_CONNECTION_OPEN']), n.includes('OVERLAY_INITIALIZE') || (n = [...n, 'OVERLAY_INITIALIZE'])), e.loadRightBeforeConnectionOpen && (n.includes('CONNECTION_OPEN') || (n = [...n, 'CONNECTION_OPEN']), n.includes('OVERLAY_INITIALIZE') || (n = [...n, 'OVERLAY_INITIALIZE'])), n)) t in i || (i[t] = []), i[t].push(e);
}
function c(e) {
    if ((('CONNECTION_OPEN' === e.type || 'OVERLAY_INITIALIZE' === e.type) && (o = !0), e.type in i)) {
        let t = [];
        for (let n of i[e.type]) !o && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (i[e.type] = t) : delete i[e.type];
    }
    return !1;
}
