a.d(e, {
    DM: () => o,
    Db: () => s,
    EG: () => E,
    YO: () => u,
    go: () => l,
    jH: () => c,
    lE: () => I
});
var r = a(370336),
    n = a(886115),
    _ = a(899517);
function o() {
    let t = _.n,
        e = t.crypto || t.msCrypto,
        a = () => 16 * Math.random();
    try {
        if (e && e.randomUUID) return e.randomUUID().replace(/-/g, '');
        e &&
            e.getRandomValues &&
            (a = () => {
                let t = new Uint8Array(1);
                return e.getRandomValues(t), t[0];
            });
    } catch (t) {}
    return '10000000100040008000100000000000'.replace(/[018]/g, (t) => (t ^ ((15 & a()) >> (t / 4))).toString(16));
}
function i(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0;
}
function c(t) {
    let { message: e, event_id: a } = t;
    if (e) return e;
    let r = i(t);
    return r ? (r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || a || '<unknown>') : a || '<unknown>';
}
function s(t, e, a) {
    let r = (t.exception = t.exception || {}),
        n = (r.values = r.values || []),
        _ = (n[0] = n[0] || {});
    _.value || (_.value = e || ''), _.type || (_.type = a || 'Error');
}
function E(t, e) {
    let a = i(t);
    if (!a) return;
    let r = a.mechanism;
    if (
        ((a.mechanism = {
            type: 'generic',
            handled: !0,
            ...r,
            ...e
        }),
        e && 'data' in e)
    ) {
        let t = {
            ...(r && r.data),
            ...e.data
        };
        a.mechanism.data = t;
    }
}
function l(t, e, a = 5) {
    if (void 0 === e.lineno) return;
    let r = t.length,
        _ = Math.max(Math.min(r - 1, e.lineno - 1), 0);
    e.pre_context = t.slice(Math.max(0, _ - a), _).map((t) => (0, n.JM)(t, 0));
    let o = Math.min(r - 1, _);
    (e.context_line = (0, n.JM)(t[o], e.colno || 0)), (e.post_context = t.slice(Math.min(_ + 1, r), _ + 1 + a).map((t) => (0, n.JM)(t, 0)));
}
function u(t) {
    if (t && t.__sentry_captured__) return !0;
    try {
        (0, r.xp)(t, '__sentry_captured__', !0);
    } catch (t) {}
    return !1;
}
function I(t) {
    return Array.isArray(t) ? t : [t];
}
