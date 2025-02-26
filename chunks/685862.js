n.d(t, {
    Pk: () => l,
    c$: () => u
}),
    n(411104);
var r = n(710845),
    i = n(626135),
    o = n(960048),
    a = n(981631);
let s = new r.Z('libdiscore');
function l() {
    i.default.track(a.rMx.LIBDISCORE_LOADED, { success: !0 });
}
function c(e) {
    let t = '';
    return (t = e instanceof Error ? e.message : null != e ? String(e) : 'Unknown error').length > 1000 && (t = t.substring(0, 997) + '...'), t;
}
function u(e) {
    s.error('Failed to execute smoke test:', e), e instanceof Error && o.Z.captureException(e);
    let t = c(e);
    i.default.track(a.rMx.LIBDISCORE_LOADED, {
        success: !1,
        error: t
    });
}
