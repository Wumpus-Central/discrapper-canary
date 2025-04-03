r.d(t, { Z: () => v });
var n = r(442837),
    h = r(339085);
let v = function (e, t) {
    return (0, n.e7)(
        [h.ZP],
        () => {
            var r;
            if (null == t) return null;
            let n = h.ZP.getDisambiguatedEmojiContext(e);
            return null != (r = n.getById(t)) ? r : n.getByName(t);
        },
        [e, t]
    );
};
