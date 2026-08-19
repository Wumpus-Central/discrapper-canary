"use strict";
n.d(t, { Ge: () => l, OP: () => o, Qd: () => d });
var i = n(403362),
    r = n(513461),
    a = n(260197),
    s = n(652215);
function l(e) {
    let { required: t, response: n, field_type: a } = e;
    if (!t) return !0;
    if (null == n) return !1;
    switch (a) {
        case r.rX.TERMS:
        case r.rX.VERIFICATION:
            return !!n;
        case r.rX.TEXT_INPUT:
        case r.rX.PARAGRAPH:
            return "string" == typeof n && "" !== n.trim();
        case r.rX.MULTIPLE_CHOICE:
            return "number" == typeof n;
        default:
            return (0, i.xb)(a);
    }
}
function o(e) {
    return a.AI.has(e?.field_type);
}
function d(e) {
    return null != e && e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
}
