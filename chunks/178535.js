n.d(t, { Z: () => o });
var r = n(607070),
    i = n(981631);
function o(e, t, n) {
    var o, a, s, l, c, u, d, f;
    let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        key: null != (a = null != (o = t.key) ? o : _) ? a : 'modal',
        modal: e,
        animation: null != (s = t.animation) ? s : r.Z.useReducedMotion ? i.fMv.FADE : i.fMv.SLIDE_UP,
        shouldPersistUnderModals: null != (l = t.shouldPersistUnderModals) && l,
        props: n,
        backdropStyle: null != (c = t.backdropStyle) ? c : null,
        backdropInstant: null != (u = t.backdropInstant) && u,
        disableAnimation: null != (d = t.disableAnimation) && d,
        closable: 'boolean' != typeof t.closable || t.closable,
        label: null != (f = t.label) ? f : '',
        callbacks: {}
    };
}
