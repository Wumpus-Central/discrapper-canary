r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(493683),
    a = r(592125),
    o = r(176505);
function s(e) {
    if (e !== o.V) return null;
    let n = a.Z.getChannel(e);
    return null == n ? null : i.Z.ensurePrivateChannel(n.recipients);
}
