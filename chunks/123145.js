r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(739566),
    o = r(421399),
    s = r(47930);
function l(e) {
    var n, r;
    let l = (0, a.ZP)(e.message),
        u = (0, s.x)({
            message: e.message,
            channel: e.channel,
            user: null !== (r = null === (n = e.message) || void 0 === n ? void 0 : n.author) && void 0 !== r ? r : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        c = {};
    return (
        null != u && (c[o.a.SYSTEM_TAG] = u),
        (0, i.jsx)(o.Z, {
            ...e,
            author: l,
            decorations: c
        })
    );
}
