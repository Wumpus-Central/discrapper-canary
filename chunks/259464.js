"use strict";
n.d(t, { U: () => s, Z: () => a });
var i = n(702841),
    r = n(696451);
function a(e, t) {
    return (0, i.bG)([r.Ay], () => s(e, t, [r.Ay]));
}
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Ay],
        [i] = n,
        a = null != t && null != e ? i.getMember(t, e.id) : null;
    return a?.avatarDecoration ?? e?.avatarDecoration;
}
