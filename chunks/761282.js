n.d(t, {
    JE: () => u,
    ct: () => c,
    dc: () => s
});
var r = n(200651);
n(192379);
var l = n(261600),
    i = n(157925),
    o = n(147049);
let a = { [i.gD]: new l.U() };
function s(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let r = a[n];
    if (null != r && (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1) return r.createHeader(e);
}
function c(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let l = a[n];
    if ((null == l ? void 0 : l.body) != null && (null == (t = l.shouldShow) ? void 0 : t.call(l, e)) !== !1) {
        let t = l.body;
        return (0, r.jsx)(
            'section',
            {
                className: o.section,
                children: (0, r.jsx)(t, { activity: e })
            },
            'delegate-'.concat(n)
        );
    }
}
function u(e) {
    var t;
    let n = e.application_id;
    if (null == n) return !0;
    let r = a[n];
    return null == r || (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1;
}
