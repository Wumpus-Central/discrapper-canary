"use strict";
n.d(t, { A: () => a });
var r = n(311907),
    i = n(508675);
let a = function (e, t) {
    return (0, r.bG)([i.Ay], () => {
        if (null == t) return null;
        let n = i.Ay.getDisambiguatedEmojiContext(e);
        return n.getById(t) ?? n.getByName(t);
    }, [e, t]);
};
