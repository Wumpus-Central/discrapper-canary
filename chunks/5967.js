n.d(t, {
    VG: () => a,
    uB: () => s
}),
    n(47120),
    n(301563);
let r = /input/i,
    i = /textarea/i,
    o = new Set(['text', 'password', 'number', 'date', 'datetime-local', 'time', 'week', 'month', 'email', 'search', 'tel', 'url']);
function a(e) {
    if (null == e) return !1;
    if ('true' === e.getAttribute('contenteditable') || i.test(e.tagName)) return !0;
    if (r.test(e.tagName)) {
        var t;
        let n = null != (t = e.getAttribute('type')) ? t : 'text';
        if (o.has(n)) return !0;
    }
    return !1;
}
function s(e) {
    let { target: t } = e;
    return null == t ? null : 'ownerDocument' in t ? t.ownerDocument : 'document' in t ? t.document : (console.warn('Unable to get owner document from event', e.type), null);
}
