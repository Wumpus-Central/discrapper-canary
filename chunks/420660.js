n.d(t, { Z: () => o }), n(35282);
var r = n(701488),
    i = n(981631);
function a(e) {
    return e.type === i.IIU.STREAMING && null != e.url && r.d.test(e.url);
}
function o(e) {
    return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}
