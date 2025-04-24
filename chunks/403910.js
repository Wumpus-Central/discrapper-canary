n.d(t, { Z: () => i });
var r = n(442837),
    s = n(339085);
let i = function (e, t) {
    return (0, r.e7)(
        [s.ZP],
        () => {
            var n;
            if (null == t) return null;
            let r = s.ZP.getDisambiguatedEmojiContext(e);
            return null != (n = r.getById(t)) ? n : r.getByName(t);
        },
        [e, t]
    );
};
