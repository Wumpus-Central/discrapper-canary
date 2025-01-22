r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(701488),
    a = r(981631);
function o(e) {
    return e.type === a.IIU.STREAMING && null != e.url && i.d.test(e.url);
}
function s(e) {
    return null != e && (Array.isArray(e) ? e.some(o) : o(e));
}
