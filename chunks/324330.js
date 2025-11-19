n.d(t, {
    $r: () => b,
    JA: () => h,
    ZP: () => x,
});
var r = n(54381);
n(473749);
var i = n(392711),
    l = n(442837),
    a = n(481060),
    s = n(241559),
    o = n(527379),
    c = n(313364),
    d = n(434404),
    u = n(999382),
    g = n(981631),
    m = n(388032),
    p = n(935697);
function f(e) {
    if (null == e) return !1;
    let t = e.features.has(g.GuildFeatures.COMMUNITY),
        n = e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    return t || n;
}
function h() {
    let e = u.Z.getProps().guild;
    null != e && (f(e) ? (d.Z.close(), (0, o._X)(e.id)) : d.Z.open(e.id, g.pNK.MEMBERS));
}
function b() {
    let e = f((0, l.e7)([u.Z], () => u.Z.getProps().guild, []));
    return (0, r.jsxs)("div", {
        className: p.rowContainer,
        children: [
            (0, r.jsx)("div", { children: m.intl.string(m.t["9Oq93m"]) }),
            e &&
                (0, r.jsx)(a.rgF, {
                    size: "xs",
                    color: "currentColor",
                    className: p.linkIcon,
                }),
        ],
    });
}
function x() {
    var e;
    let { guild: t } = (0, l.e7)([u.Z], () => u.Z.getProps(), [], i.isEqual),
        n = null != (e = null == t ? void 0 : t.id) ? e : g.lds;
    return (0, s.n2)(n) ? (0, r.jsx)(c.Z, { guildId: n }) : null;
}
