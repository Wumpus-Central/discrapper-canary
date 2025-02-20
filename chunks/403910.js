n.d(t, { Z: () => l });
var i = n(442837),
    r = n(339085);
let l = function (e, t) {
    return (0, i.e7)(
        [r.ZP],
        () => {
            var n;
            if (null == t) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(e);
            return null !== (n = i.getById(t)) && void 0 !== n ? n : i.getByName(t);
        },
        [e, t]
    );
};
