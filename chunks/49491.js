"use strict";
n.d(t, { A: () => l, b: () => s });
var i = n(17928),
    r = n(501592),
    a = n(287809);
function s(e, t) {
    return null != e && !1 === t && (0, r.K)(e.contentClassification);
}
function l(e) {
    return s(
        e,
        (0, i.bG)([a.default], () => a.default.getCurrentUser()?.nsfwAllowed),
    );
}
