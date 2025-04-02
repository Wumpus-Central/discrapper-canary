n.d(t, {
    Aw: () => l,
    C5: () => c,
    Tu: () => o,
    ZL: () => a,
    js: () => s,
    kL: () => i
});
var r = n(981631),
    i = (function (e) {
        return (e[(e.GENERIC = 0)] = 'GENERIC'), (e[(e.TEXT = 1)] = 'TEXT'), (e[(e.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (e[(e.NUDGE = 3)] = 'NUDGE'), e;
    })({}),
    o = (function (e) {
        return (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.HIGH = 1)] = 'HIGH'), (e[(e.URGENT = 2)] = 'URGENT'), e;
    })({});
function a(e) {
    return (null == e ? void 0 : e.type) === r.Odu.GO_LIVE;
}
function s(e) {
    return e.type === r.Odu.VIDEO;
}
function l(e) {
    return e.type === r.Odu.VOICE_V3;
}
var c = (function (e) {
    return (e.HORIZONTAL = 'horizontal'), (e.VERTICAL = 'vertical'), e;
})({});
