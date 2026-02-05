"use strict";
n.d(t, { U: () => i }), n(417597);
var r = n(696451);
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Ay],
        [i] = n,
        a = null != t && null != e ? i.getMember(t, e.id) : null;
    return a?.avatarDecoration ?? e?.avatarDecoration;
}
