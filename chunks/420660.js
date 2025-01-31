n.d(t, { Z: () => s });
var i = n(701488),
    r = n(981631);
function a(e) {
    return e.type === r.IIU.STREAMING && null != e.url && i.d.test(e.url);
}
function s(e) {
    return null != e && (Array.isArray(e) ? e.some(a) : a(e));
}
