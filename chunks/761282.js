n.d(t, {
    JE: () => c,
    ct: () => u,
    dc: () => s
});
var l = n(200651);
n(192379);
var r = n(261600),
    i = n(157925),
    a = n(147049);
let o = { [i.gD]: new r.U() };
function s(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let l = o[n];
    if (null != l && (null == (t = l.shouldShow) ? void 0 : t.call(l, e)) !== !1) return l.createHeader(e);
}
function u(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let r = o[n];
    if ((null == r ? void 0 : r.body) != null && (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1) {
        let t = r.body;
        return (0, l.jsx)(
            'section',
            {
                className: a.section,
                children: (0, l.jsx)(t, { activity: e })
            },
            'delegate-'.concat(n)
        );
    }
}
function c(e) {
    var t;
    let n = e.application_id;
    if (null == n) return !0;
    let l = o[n];
    return null == l || (null == (t = l.shouldShow) ? void 0 : t.call(l, e)) !== !1;
}
