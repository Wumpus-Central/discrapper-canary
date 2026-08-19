"use strict";
n.d(t, { A: () => a, b: () => r });
var l = n(17928),
    i = n(501592),
    s = n(287809);
function r(e, t) {
    return null != e && !1 === t && (0, i.K)(e.contentClassification);
}
function a(e) {
    return r(
        e,
        (0, l.bG)([s.default], () => s.default.getCurrentUser()?.nsfwAllowed),
    );
}
