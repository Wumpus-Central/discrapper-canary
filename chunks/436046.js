n.d(t, { A: () => o });
var i = n(497901),
    a = n(555393),
    l = n(829617);
let r = (0, n(945810).mj)({
    name: "2026-10-code-blurple-teaser",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = n(712620);
function o(e) {
    let { enabled: t } = r.useConfig({ location: e }),
        n = (0, a.N)(),
        o = (0, i.A)(s.kX);
    return t && null != n && n.isEligible ? (null != o ? l.b.COUNTDOWN : l.b.ALMOST_HERE) : l.b.NONE;
}
