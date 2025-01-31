n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(739566),
    a = n(421399),
    s = n(47930);
function o(e) {
    var t, n;
    let o = (0, r.ZP)(e.message),
        l = (0, s.x)({
            message: e.message,
            channel: e.channel,
            user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        u = {};
    return (
        null != l && (u[a.a.SYSTEM_TAG] = l),
        (0, i.jsx)(a.Z, {
            ...e,
            author: o,
            decorations: u
        })
    );
}
