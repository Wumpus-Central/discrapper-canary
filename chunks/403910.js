n.d(t, { Z: () => r });
var i = n(442837),
    l = n(339085);
let r = function (e, t) {
    return (0, i.e7)(
        [l.ZP],
        () => {
            var n;
            if (null == t) return null;
            let i = l.ZP.getDisambiguatedEmojiContext(e);
            return null !== (n = i.getById(t)) && void 0 !== n ? n : i.getByName(t);
        },
        [e, t]
    );
};
