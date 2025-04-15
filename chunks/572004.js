n.d(t, {
    JG: () => d,
    wS: () => u
}),
    n(415506);
var r,
    i,
    o = n(358085),
    a = n(960048),
    s = n(998502);
let l = o.isPlatformEmbedded && null != s.ZP.copy,
    c = 'function' == typeof (null == (i = window.navigator) || null == (r = i.clipboard) ? void 0 : r.writeText),
    u = l || c;
async function d(e, t, n) {
    if (!u) {
        null == n || n(Error('Clipboard API not supported.'));
        return;
    }
    try {
        l ? s.ZP.copy(e) : await window.navigator.clipboard.writeText(e), null == t || t();
    } catch (e) {
        null == n || n(e), a.Z.captureException(e);
    }
}
