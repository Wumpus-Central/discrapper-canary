n.d(t, { F: () => u }), n(321073);
var r = n(73153);
let i = 1000,
    a = 100,
    s = [],
    o = null;
function l() {
    0 !== s.length &&
        (r.h.dispatch({
            type: "OVERLAY_ADD_LOGS_BATCH",
            logs: s,
        }),
        (s = []),
        null != o && (clearTimeout(o), (o = null)));
}
function c() {
    null == o &&
        (o = setTimeout(() => {
            l();
        }, i));
}
function u(e) {
    s.push(e), s.length >= a ? l() : c();
}
