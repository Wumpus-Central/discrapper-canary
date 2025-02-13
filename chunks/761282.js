n.d(t, {
    JE: () => u,
    ct: () => c,
    dc: () => s
});
var l = n(200651);
n(192379);
var i = n(261600),
    a = n(157925),
    r = n(979457);
let o = { [a.gD]: new i.U() };
function s(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let l = o[n];
    if (null != l && (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1) return l.createHeader(e);
}
function c(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let i = o[n];
    if ((null == i ? void 0 : i.body) != null && (null === (t = i.shouldShow) || void 0 === t ? void 0 : t.call(i, e)) !== !1) {
        let t = i.body;
        return (0, l.jsx)(
            'section',
            {
                className: r.section,
                children: (0, l.jsx)(t, { activity: e })
            },
            'delegate-'.concat(n)
        );
    }
}
function u(e) {
    var t;
    let n = e.application_id;
    if (null == n) return !0;
    let l = o[n];
    return null == l || (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1;
}
