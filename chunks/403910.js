r.d(t, { Z: () => s });
var n = r(442837),
    i = r(339085);
let s = function (e, t) {
    return (0, n.e7)(
        [i.ZP],
        () => {
            var r;
            if (null == t) return null;
            let n = i.ZP.getDisambiguatedEmojiContext(e);
            return null != (r = n.getById(t)) ? r : n.getByName(t);
        },
        [e, t]
    );
};
