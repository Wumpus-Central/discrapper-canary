r.d(n, {
    FC: function () {
        return o;
    },
    Zj: function () {
        return u;
    },
    jA: function () {
        return s;
    },
    rs: function () {
        return l;
    }
});
var i = r(433517);
let a = 'MediaPlayerVolume';
function o() {
    var e;
    let { volume: n } = null !== (e = i.K.get(a)) && void 0 !== e ? e : {};
    return 'number' != typeof n && (n = 1), (n = Math.min(1, Math.max(0, n)));
}
function s(e) {
    i.K.set(a, {
        volume: e,
        muted: l()
    });
}
function l() {
    var e;
    let { muted: n } = null !== (e = i.K.get(a)) && void 0 !== e ? e : {};
    return 'boolean' != typeof n && (n = !1), n;
}
function u(e) {
    i.K.set(a, {
        volume: o(),
        muted: e
    });
}
