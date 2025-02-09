a.d(t, { Z: () => l });
var n = a(200651);
a(192379);
var i = a(739566),
    s = a(421399),
    o = a(47930);
function l(e) {
    var t, a;
    let l = (0, i.ZP)(e.message),
        r = (0, o.x)({
            message: e.message,
            channel: e.channel,
            user: null !== (a = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== a ? a : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        c = {};
    return (
        null != r && (c[s.a.SYSTEM_TAG] = r),
        (0, n.jsx)(s.Z, {
            ...e,
            author: l,
            decorations: c
        })
    );
}
