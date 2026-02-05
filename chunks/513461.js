"use strict";
n.d(t, { B5: () => a, Vf: () => l, _e: () => i, i7: () => s, j5: () => o, rX: () => r });
var r = (function (e) {
        return (
            (e.TERMS = "TERMS"),
            (e.TEXT_INPUT = "TEXT_INPUT"),
            (e.PARAGRAPH = "PARAGRAPH"),
            (e.MULTIPLE_CHOICE = "MULTIPLE_CHOICE"),
            (e.VERIFICATION = "VERIFICATION"),
            e
        );
    })({}),
    i = (function (e) {
        return (e.TIMESTAMP_DESC = "NEWEST"), (e.TIMESTAMP_ASC = "OLDEST"), e;
    })({}),
    a = (function (e) {
        return (
            (e.STARTED = "STARTED"),
            (e.SUBMITTED = "SUBMITTED"),
            (e.REJECTED = "REJECTED"),
            (e.APPROVED = "APPROVED"),
            e
        );
    })({});
function s(e) {
    return null != e && "TERMS" === e.field_type;
}
function o(e) {
    return null != e && e.some((e) => !s(e));
}
var l = (function (e) {
    return (e.REGULAR = "REGULAR"), (e.COMPACT = "COMPACT"), e;
})({});
