n.d(t, {
    FC: () => a,
    Zj: () => l,
    jA: () => s,
    rs: () => o
});
var i = n(433517);
let r = 'MediaPlayerVolume';
function a() {
    var e;
    let { volume: t } = null !== (e = i.K.get(r)) && void 0 !== e ? e : {};
    return 'number' != typeof t && (t = 1), (t = Math.min(1, Math.max(0, t)));
}
function s(e) {
    i.K.set(r, {
        volume: e,
        muted: o()
    });
}
function o() {
    var e;
    let { muted: t } = null !== (e = i.K.get(r)) && void 0 !== e ? e : {};
    return 'boolean' != typeof t && (t = !1), t;
}
function l(e) {
    i.K.set(r, {
        volume: a(),
        muted: e
    });
}
