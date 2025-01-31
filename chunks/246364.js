n.d(t, {
    J: () => l,
    Nw: () => s,
    QJ: () => a,
    YG: () => u,
    hW: () => r,
    it: () => c,
    tB: () => i,
    wB: () => o
});
let i = 25,
    r = 4;
var a = (function (e) {
        return (e.TERMS = 'TERMS'), (e.TEXT_INPUT = 'TEXT_INPUT'), (e.PARAGRAPH = 'PARAGRAPH'), (e.MULTIPLE_CHOICE = 'MULTIPLE_CHOICE'), (e.VERIFICATION = 'VERIFICATION'), e;
    })({}),
    s = (function (e) {
        return (e.TIMESTAMP_DESC = 'NEWEST'), (e.TIMESTAMP_ASC = 'OLDEST'), e;
    })({}),
    o = (function (e) {
        return (e.STARTED = 'STARTED'), (e.SUBMITTED = 'SUBMITTED'), (e.REJECTED = 'REJECTED'), (e.APPROVED = 'APPROVED'), e;
    })({});
function l(e) {
    return null != e && 'TERMS' === e.field_type;
}
function u(e) {
    return null != e && e.some((e) => !l(e));
}
var c = (function (e) {
    return (e.REGULAR = 'REGULAR'), (e.COMPACT = 'COMPACT'), e;
})({});
