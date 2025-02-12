t.d(s, { Z: () => r });
var l = t(200651);
t(192379);
var n = t(739566),
    a = t(421399),
    i = t(47930);
function r(e) {
    var s, t;
    let r = (0, n.ZP)(e.message),
        o = (0, i.x)({
            message: e.message,
            channel: e.channel,
            user: null !== (t = null === (s = e.message) || void 0 === s ? void 0 : s.author) && void 0 !== t ? t : e.userOverride,
            compact: !!e.compact,
            isRepliedMessage: !!e.isRepliedMessage
        }),
        c = {};
    return (
        null != o && (c[a.a.SYSTEM_TAG] = o),
        (0, l.jsx)(a.Z, {
            ...e,
            author: r,
            decorations: c
        })
    );
}
