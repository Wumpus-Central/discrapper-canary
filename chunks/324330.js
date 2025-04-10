n.d(t, {
    $: () => f,
    Z: () => h
});
var r = n(200651);
n(192379);
var i = n(392711),
    s = n(442837),
    a = n(481060),
    l = n(241559),
    o = n(527379),
    c = n(313364),
    d = n(434404),
    u = n(999382),
    m = n(981631),
    g = n(388032),
    p = n(953592);
function f() {
    var e;
    let t = (0, s.e7)([u.Z], () => u.Z.getProps().guild, []),
        n = null != (e = null == t ? void 0 : t.isCommunity()) && e,
        i = null == t ? void 0 : t.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        l = n || i;
    return (0, r.jsxs)(a.P3F, {
        onClick: (e) => {
            null != t && (l ? (e.preventDefault(), d.Z.close(), (0, o._X)(t.id)) : d.Z.open(t.id, m.pNK.MEMBERS));
        },
        className: p.rowContainer,
        children: [
            (0, r.jsx)('div', { children: g.NW.string(g.t['9Oq93t']) }),
            l &&
                (0, r.jsx)(a.rgF, {
                    size: 'custom',
                    color: 'currentColor',
                    className: p.linkIcon,
                    width: 16,
                    height: 16
                })
        ]
    });
}
function h() {
    var e;
    let { guild: t } = (0, s.e7)([u.Z], () => u.Z.getProps(), [], i.isEqual),
        n = null != (e = null == t ? void 0 : t.id) ? e : m.lds;
    return (0, l.n2)(n) ? (0, r.jsx)(c.Z, { guildId: n }) : null;
}
