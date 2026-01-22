n.d(t, {
    x: () => o,
});
var r = n(627968);
n(64700);
var i = n(358776),
    a = n(360619);

function s(e) {
    var t;
    let { setting: n, children: r } = e,
        i = (0, a.PH)(),
        s = (0, a.AC)(n),
        o = i[n];
    return (null != o.predicate && (null == (t = o.predicate) ? void 0 : t.call(o)) !== !0) || (s.size > 0 && !s.has(n))
        ? null
        : r;
}

function o(e) {
    let { setting: t, children: n } = e;
    return (0, i.dk)("AccountProfileCardSetting")
        ? n
        : (0, r.jsx)(s, {
              setting: t,
              children: n,
          });
}
