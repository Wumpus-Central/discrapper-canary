n.d(t, { Mn: () => d }), n(415506);
var r = n(259443),
    i = n(668757),
    a = n(626135),
    o = n(960048),
    s = n(621590),
    l = n(981631);
let c = new r.Yd('libdiscore'),
    u = !1;
function d() {
    if (!u) {
        try {
            let e = (0, i.rs)(6, 7);
            c.info('The answer for life the universe and everything is:', e), f();
        } catch (e) {
            p(e);
        }
        u = !0;
    }
}
function f() {
    let e = (0, s.j)() ? ['note_store'] : [];
    a.default.track(l.rMx.LIBDISCORE_LOADED, {
        success: !0,
        experimental_features: e
    });
}
function _(e) {
    let t = '',
        n = null;
    return (e instanceof Error ? ((t = e.message), (n = e.name)) : (t = null != e ? String(e) : 'Unknown error'), t.length > 1000 && (t = t.substring(0, 997) + '...'), null != n) ? ''.concat(n, ': ').concat(t) : t;
}
function p(e) {
    c.error('Failed to execute smoke test:', e), e instanceof Error && o.Z.captureException(e);
    let t = _(e);
    a.default.track(l.rMx.LIBDISCORE_LOADED, {
        success: !1,
        error: t
    });
}
