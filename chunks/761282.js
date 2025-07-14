n.d(t, {
    JE: () => u,
    ct: () => c,
    dc: () => l
});
var r = n(255367);
n(73800);
var i = n(261600),
    a = n(157925),
    o = n(147049);
let s = { [a.gD]: new i.U() };
function l(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let r = s[n];
    if (null != r && (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1) return r.createHeader(e);
}
function c(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let i = s[n];
    if ((null == i ? void 0 : i.body) != null && (null == (t = i.shouldShow) ? void 0 : t.call(i, e)) !== !1) {
        let t = i.body;
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
    let r = s[n];
    return null == r || (null == (t = r.shouldShow) ? void 0 : t.call(r, e)) !== !1;
}
