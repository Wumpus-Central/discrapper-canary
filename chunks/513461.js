"use strict";
n.d(t, { B5: () => l, _e: () => o, i7: () => u, j5: () => c, rX: () => a });
var r,
    i,
    s,
    a =
        (((r = {}).TERMS = "TERMS"),
        (r.TEXT_INPUT = "TEXT_INPUT"),
        (r.PARAGRAPH = "PARAGRAPH"),
        (r.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
        (r.VERIFICATION = "VERIFICATION"),
        r),
    o = (((i = {}).TIMESTAMP_DESC = "NEWEST"), (i.TIMESTAMP_ASC = "OLDEST"), i),
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
