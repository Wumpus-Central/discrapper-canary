n.d(t, { B5: () => l, _e: () => _, i7: () => o, j5: () => E, rX: () => s });
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
    _ = (((r = {}).TIMESTAMP_DESC = "NEWEST"), (r.TIMESTAMP_ASC = "OLDEST"), r),
    l =
        (((a = {}).STARTED = "STARTED"),
        (a.SUBMITTED = "SUBMITTED"),
        (a.REJECTED = "REJECTED"),
        (a.APPROVED = "APPROVED"),
        a);
function o(e) {
    return null != e && "TERMS" === e.field_type;
}
function E(e) {
    return null != e && e.some((e) => !o(e));
}
