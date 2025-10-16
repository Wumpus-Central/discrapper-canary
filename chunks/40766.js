n.d(t, { K: () => u }), n(539854);
var r = n(570140);
let i = 1000,
    a = 100,
    o = [],
    s = null;
function l() {
    0 !== o.length &&
        (r.Z.dispatch({
            type: "OVERLAY_ADD_LOGS_BATCH",
            logs: o,
        }),
        (o = []),
        null != s && (clearTimeout(s), (s = null)));
}
function c() {
    null == s &&
        (s = setTimeout(() => {
            l();
        }, i));
}
function u(e) {
    o.push(e), o.length >= a ? l() : c();
}
