n.d(t, { Mn: () => d }), n(539854), n(415506);
var r = n(259443),
    i = n(668757),
    a = n(511495),
    o = n(626135),
    s = n(894276),
    l = n(981631);
let c = new r.Yd('libdiscore'),
    u = !1;
async function d() {
    if (!u) {
        try {
            await (0, a.e)();
            let e = (0, i.rs)(6, 7);
            c.info('The answer for life the universe and everything is:', e), _();
        } catch (e) {
            p(e);
        }
        u = !0;
    }
}
function _() {
    let e = [];
    s.o.forEach((t) => {
        t.cachedIsEnabled() && e.push(t.feature);
    }),
        o.default.track(l.rMx.LIBDISCORE_LOADED, {
            success: !0,
            experimental_features: e
        });
}
function f(e) {
    let t = '',
        n = null;
    return (e instanceof Error ? ((t = e.message), (n = e.name)) : (t = null != e ? String(e) : 'Unknown error'), t.length > 1000 && (t = t.substring(0, 997) + '...'), null != n) ? ''.concat(n, ': ').concat(t) : t;
}
function p(e) {
    c.error('Failed to execute smoke test:', e);
    let t = f(e);
    o.default.track(l.rMx.LIBDISCORE_LOADED, {
        success: !1,
        error: t
    });
}
