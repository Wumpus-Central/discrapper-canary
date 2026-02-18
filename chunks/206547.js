n.d(t, { A: () => r });
var i = n(311907),
    l = n(508675);
let r = function (e, t) {
    return (0, i.bG)([l.Ay], () => {
        if (null == t) return null;
        let n = l.Ay.getDisambiguatedEmojiContext(e);
        return n.getById(t) ?? n.getByName(t);
    }, [e, t]);
};
