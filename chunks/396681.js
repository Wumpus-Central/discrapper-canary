"use strict";
n.d(t, { A: () => s });
var i = n(492462);
function s(e) {
    let t = null != e.hash && "" !== e.hash ? (0, i.parse)(e.hash) : null;
    if (t?.token != null) return t.token;
    let n = null != e.search && "" !== e.search ? (0, i.parse)(e.search) : null;
    return n?.token != null ? n.token : null;
}
