n.d(t, { x: () => l });
var i = n(627968);
n(64700);
var s = n(358776),
    r = n(360619);
function a(e) {
    let { setting: t, children: n } = e,
        i = (0, r.PH)(),
        s = (0, r.AC)(t),
        a = i[t];
    return (null != a.predicate && a.predicate?.() !== !0) || (s.size > 0 && !s.has(t)) ? null : n;
}
function l(e) {
    let { setting: t, children: n } = e;
    return (0, s.dk)("AccountProfileCardSetting") ? n : (0, i.jsx)(a, { setting: t, children: n });
}
