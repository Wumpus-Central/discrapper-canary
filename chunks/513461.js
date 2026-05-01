"use strict";
n.d(t, { B5: () => l, _e: () => o, i7: () => u, j5: () => c, rX: () => a });
var i,
    r,
    s,
    a =
        (((i = {}).TERMS = "TERMS"),
        (i.TEXT_INPUT = "TEXT_INPUT"),
        (i.PARAGRAPH = "PARAGRAPH"),
        (i.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
        (i.VERIFICATION = "VERIFICATION"),
        i),
    o = (((r = {}).TIMESTAMP_DESC = "NEWEST"), (r.TIMESTAMP_ASC = "OLDEST"), r),
    l =
        (((s = {}).STARTED = "STARTED"),
        (s.SUBMITTED = "SUBMITTED"),
        (s.REJECTED = "REJECTED"),
        (s.APPROVED = "APPROVED"),
        s);
function u(e) {
    return null != e && "TERMS" === e.field_type;
}
function c(e) {
    return null != e && e.some((e) => !u(e));
}
