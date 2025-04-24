n.d(t, {
    $: () => h,
    Z: () => f
});
var r = n(200651);
n(192379);
var i = n(392711),
    l = n(442837),
    s = n(481060),
    a = n(241559),
    o = n(527379),
    c = n(313364),
    u = n(434404),
    d = n(999382),
    m = n(981631),
    g = n(388032),
    p = n(953592);
function h() {
    var e;
    let t = (0, l.e7)([d.Z], () => d.Z.getProps().guild, []),
        n = null != (e = null == t ? void 0 : t.isCommunity()) && e,
        i = null == t ? void 0 : t.hasFeature(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        a = n || i;
    return (0, r.jsxs)(s.P3F, {
        onClick: (e) => {
            null != t && (a ? (e.preventDefault(), u.Z.close(), (0, o._X)(t.id)) : u.Z.open(t.id, m.pNK.MEMBERS));
        },
        className: p.rowContainer,
        children: [
            (0, r.jsx)('div', { children: g.intl.string(g.t['9Oq93t']) }),
            a &&
                (0, r.jsx)(s.rgF, {
                    size: 'custom',
                    color: 'currentColor',
                    className: p.linkIcon,
                    width: 16,
                    height: 16
                })
        ]
    });
}
function f() {
    var e;
    let { guild: t } = (0, l.e7)([d.Z], () => d.Z.getProps(), [], i.isEqual),
        n = null != (e = null == t ? void 0 : t.id) ? e : m.lds;
    return (0, a.n2)(n) ? (0, r.jsx)(c.Z, { guildId: n }) : null;
}
