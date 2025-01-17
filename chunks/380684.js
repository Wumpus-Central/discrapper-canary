r.d(n, {
    h6: function () {
        return f;
    },
    iL: function () {
        return _;
    }
});
var i = r(757143);
var a = r(200651),
    s = r(502087),
    o = r(424218),
    l = r(111361),
    u = r(981631),
    c = r(474936),
    d = r(388032);
function f(e) {
    if (null == e) return u.mBz;
    let n = s.Z.getPremiumTypeOverride();
    return e.isStaff() && n === c.F_ ? u.PRK : null != e.premiumType && (0, l.I5)(e) ? c.a1[e.premiumType].fileSize : u.mBz;
}
function _(e) {
    let { user: n, onClick: r } = e,
        i = (0, o.BU)(f(n) / 1024, { useKibibytes: !0 }),
        s = (0, o.BU)(c.Uq / 1024, { useKibibytes: !0 }),
        l = d.intl.formatToPlainString(d.t.q5fTZm, { maxSize: i }),
        u = d.intl.formatToPlainString(d.t.htbuIS, { premiumMaxSize: s }),
        _ = d.intl.format(d.t.fjSvsL, { onClick: r });
    return (0, a.jsxs)(a.Fragment, {
        children: [l, ' ', u.replace('\n', ' '), '. ', _]
    });
}
