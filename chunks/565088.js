n.d(t, { A: () => o });
var i = n(497901),
    l = n(555393);
let r = (0, n(945810).mj)({
    name: "2026-10-code-blurple-teaser",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = n(585669),
    a = n(712620);
function o(e) {
    let { enabled: t } = r.useConfig({ location: e }),
        n = (0, l.N)(),
        o = (0, i.A)(a.k);
    return t && null != n && n.isEligible ? (null != o ? s.z.COUNTDOWN : s.z.ALMOST_HERE) : s.z.NONE;
}
