n.d(t, { A: () => s });
var i = n(497901),
    a = n(555393),
    r = n(829617);
let l = (0, n(945810).mj)({
    name: "2026-10-code-blurple-teaser",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var o = n(712620);
function s(e) {
    let { enabled: t } = l.useConfig({ location: e }),
        n = (0, a.N)(),
        s = (0, i.A)(o.kX);
    return t && null != n && n.isEligible ? (null != s ? r.b.COUNTDOWN : r.b.ALMOST_HERE) : r.b.NONE;
}
