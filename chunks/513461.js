"use strict";
n.d(t, { B5: () => o, _e: () => l, i7: () => d, j5: () => c, rX: () => s });
var i,
    r,
    a,
    s =
        (((i = {}).TERMS = "TERMS"),
        (i.TEXT_INPUT = "TEXT_INPUT"),
        (i.PARAGRAPH = "PARAGRAPH"),
        (i.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
        (i.VERIFICATION = "VERIFICATION"),
        i),
    l = (((r = {}).TIMESTAMP_DESC = "NEWEST"), (r.TIMESTAMP_ASC = "OLDEST"), r),
    o =
        (((a = {}).STARTED = "STARTED"),
        (a.SUBMITTED = "SUBMITTED"),
        (a.REJECTED = "REJECTED"),
        (a.APPROVED = "APPROVED"),
        a);
function d(e) {
    return null != e && "TERMS" === e.field_type;
}
function c(e) {
    return null != e && e.some((e) => !d(e));
}
