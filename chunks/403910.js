n.d(t, { Z: () => s });
var r = n(442837),
    i = n(339085);
let s = function (e, t) {
    return (0, r.e7)(
        [i.ZP],
        () => {
            var n;
            if (null == t) return null;
            let r = i.ZP.getDisambiguatedEmojiContext(e);
            return null != (n = r.getById(t)) ? n : r.getByName(t);
        },
        [e, t]
    );
};
