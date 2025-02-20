n.d(t, { Z: () => o });
var r = n(607070),
    i = n(981631);
function o(e, t, n) {
    var o, a, s, l, c, u, d, f;
    let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        key: null !== (a = null !== (o = t.key) && void 0 !== o ? o : p) && void 0 !== a ? a : 'modal',
        modal: e,
        animation: null !== (s = t.animation) && void 0 !== s ? s : r.Z.useReducedMotion ? i.fMv.FADE : i.fMv.SLIDE_UP,
        shouldPersistUnderModals: null !== (l = t.shouldPersistUnderModals) && void 0 !== l && l,
        props: n,
        backdropStyle: null !== (c = t.backdropStyle) && void 0 !== c ? c : null,
        backdropInstant: null !== (u = t.backdropInstant) && void 0 !== u && u,
        disableAnimation: null !== (d = t.disableAnimation) && void 0 !== d && d,
        closable: 'boolean' != typeof t.closable || t.closable,
        label: null !== (f = t.label) && void 0 !== f ? f : '',
        callbacks: {}
    };
}
