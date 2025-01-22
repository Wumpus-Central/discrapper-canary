r.d(n, {
    VG: function () {
        return l;
    },
    uB: function () {
        return u;
    }
});
var i = r(47120);
let a = /input/i,
    o = /textarea/i,
    s = new Set(['text', 'password', 'number', 'date', 'datetime-local', 'time', 'week', 'month', 'email', 'search', 'tel', 'url']);
function l(e) {
    if (null == e) return !1;
    if ('true' === e.getAttribute('contenteditable') || o.test(e.tagName)) return !0;
    if (a.test(e.tagName)) {
        var n;
        let r = null !== (n = e.getAttribute('type')) && void 0 !== n ? n : 'text';
        if (s.has(r)) return !0;
    }
    return !1;
}
function u(e) {
    let { target: n } = e;
    return null == n ? null : 'ownerDocument' in n ? n.ownerDocument : 'document' in n ? n.document : (console.warn('Unable to get owner document from event', e.type), null);
}
