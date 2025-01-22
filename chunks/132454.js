r.d(n, {
    j: function () {
        return c;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(653041);
var s = r(570140);
let l = {},
    u = !1;
function c(e) {
    for (let n in e) {
        let r = e[n];
        d(n, r), f(r);
    }
    s.Z.addInterceptor(p);
}
function d(e, n) {
    var r;
    r = n.actions;
}
function f(e) {
    var n;
    let r = null !== (n = e.actions) && void 0 !== n ? n : [];
    for (let n of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!r.includes('POST_CONNECTION_OPEN') && (r = [...r, 'POST_CONNECTION_OPEN']), !r.includes('OVERLAY_INITIALIZE') && (r = [...r, 'OVERLAY_INITIALIZE'])), e.loadRightBeforeConnectionOpen && (!r.includes('CONNECTION_OPEN') && (r = [...r, 'CONNECTION_OPEN']), !r.includes('OVERLAY_INITIALIZE') && (r = [...r, 'OVERLAY_INITIALIZE'])), r)) !(n in l) && (l[n] = []), l[n].push(e);
}
function p(e) {
    if ((('CONNECTION_OPEN' === e.type || 'OVERLAY_INITIALIZE' === e.type) && (u = !0), e.type in l)) {
        let n = [];
        for (let r of l[e.type]) !u && r.neverLoadBeforeConnectionOpen ? n.push(r) : r.inlineRequire().initialize();
        n.length > 0 ? (l[e.type] = n) : delete l[e.type];
    }
    return !1;
}
