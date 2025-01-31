n.d(t, { c: () => o }), n(913527);
var i = n(442837),
    l = n(91159),
    r = n(306680),
    a = n(709054),
    s = n(868807);
function o(e) {
    let t = (0, s.a)(e),
        n = (function (e) {
            let { lastMessageId: t, message: n, loaded: i } = e;
            return i && null != n ? a.default.extractTimestamp(n.id) : null != t ? a.default.extractTimestamp(t) : null;
        })({
            lastMessageId: (0, i.e7)([r.ZP], () => r.ZP.lastMessageId(e.id)),
            ...t
        });
    return null == n ? '' : (0, l.Ye)(n);
}
