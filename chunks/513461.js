n.d(t, { B5: () => o, _e: () => l, i7: () => d, j5: () => c, rX: () => s });
var i,
    a,
    r,
    s =
        (((i = {}).TERMS = "TERMS"),
        (i.TEXT_INPUT = "TEXT_INPUT"),
        (i.PARAGRAPH = "PARAGRAPH"),
        (i.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
        (i.VERIFICATION = "VERIFICATION"),
        i),
    l = (((a = {}).TIMESTAMP_DESC = "NEWEST"), (a.TIMESTAMP_ASC = "OLDEST"), a),
    o =
        (((r = {}).STARTED = "STARTED"),
        (r.SUBMITTED = "SUBMITTED"),
        (r.REJECTED = "REJECTED"),
        (r.APPROVED = "APPROVED"),
        r);
function d(e) {
    return null != e && "TERMS" === e.field_type;
}
function c(e) {
    return null != e && e.some((e) => !d(e));
}
