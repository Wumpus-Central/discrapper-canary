"use strict";
function i(e, t) {
    return null == t || null == e ? null : e[t];
}
function r(e, t) {
    let n = i(e, t);
    return null != n ? n.type : null;
}
n.d(t, { W: () => i, g: () => r });
