r.d(n, {
    p: function () {
        return o;
    }
});
var i = r(904245),
    a = r(957730);
function o(e) {
    let { channel: n, content: r, entry: o, whenReady: s, doNotNotifyOnError: l } = e,
        u = a.ZP.parse(n, r),
        c = { unverified_content: o };
    return i.Z.sendMessage(n.id, u, s, {
        contentInventoryEntry: c,
        doNotNotifyOnError: l
    });
}
