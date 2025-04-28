n.d(t, { Mn: () => c }), n(415506);
var r = n(259443),
    i = n(668757),
    a = n(626135),
    o = n(960048),
    s = n(981631);
let l = new r.Yd('libdiscore');
function c() {
    try {
        let e = (0, i.rs)(6, 7);
        l.info('The answer for life the universe and everything is:', e), u();
    } catch (e) {
        f(e);
    }
}
function u() {
    a.default.track(s.rMx.LIBDISCORE_LOADED, { success: !0 });
}
function d(e) {
    let t = '',
        n = null;
    return (e instanceof Error ? ((t = e.message), (n = e.name)) : (t = null != e ? String(e) : 'Unknown error'), t.length > 1000 && (t = t.substring(0, 997) + '...'), null != n) ? ''.concat(n, ': ').concat(t) : t;
}
function f(e) {
    l.error('Failed to execute smoke test:', e), e instanceof Error && o.Z.captureException(e);
    let t = d(e);
    a.default.track(s.rMx.LIBDISCORE_LOADED, {
        success: !1,
        error: t
    });
}
