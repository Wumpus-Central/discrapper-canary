n.d(t, {
    JE: function () {
        return u;
    },
    ct: function () {
        return c;
    },
    dc: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(261600),
    r = n(157925),
    a = n(303790);
let o = { [r.gD]: new l.U() };
function s(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let i = o[n];
    if (null != i && (null === (t = i.shouldShow) || void 0 === t ? void 0 : t.call(i, e)) !== !1) return i.createHeader(e);
}
function c(e) {
    var t;
    let n = e.application_id;
    if (null == n) return;
    let l = o[n];
    if ((null == l ? void 0 : l.body) != null && (null === (t = l.shouldShow) || void 0 === t ? void 0 : t.call(l, e)) !== !1) {
        let t = l.body;
        return (0, i.jsx)(
            'section',
            {
                className: a.section,
                children: (0, i.jsx)(t, { activity: e })
            },
            'delegate-'.concat(n)
        );
    }
}
function u(e) {
    var t;
    let n = e.application_id;
    if (null == n) return !0;
    let i = o[n];
    return null == i || (null === (t = i.shouldShow) || void 0 === t ? void 0 : t.call(i, e)) !== !1;
}
