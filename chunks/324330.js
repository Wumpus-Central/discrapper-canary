n.d(t, {
    $: () => f,
    Z: () => b
});
var r = n(200651);
n(192379);
var i = n(392711),
    s = n(442837),
    a = n(481060),
    l = n(63568),
    o = n(241559),
    c = n(527379),
    d = n(313364),
    u = n(434404),
    m = n(999382),
    g = n(981631),
    p = n(388032),
    h = n(953592);
function f() {
    var e, t;
    let n = (0, s.e7)([m.Z], () => m.Z.getProps().guild, []),
        i = null != (e = null == n ? void 0 : n.isCommunity()) && e,
        o = (0, l.K2)(null != (t = null == n ? void 0 : n.id) ? t : g.lds, 'GuildSettingsMembersRow') && (null == n ? void 0 : n.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
        d = i || o;
    return (0, r.jsxs)(a.P3F, {
        onClick: (e) => {
            null != n && (d ? (e.preventDefault(), u.Z.close(), (0, c._X)(n.id)) : u.Z.open(n.id, g.pNK.MEMBERS));
        },
        className: h.rowContainer,
        children: [
            (0, r.jsx)('div', { children: p.NW.string(p.t['9Oq93t']) }),
            d &&
                (0, r.jsx)(a.rgF, {
                    size: 'custom',
                    color: 'currentColor',
                    className: h.linkIcon,
                    width: 16,
                    height: 16
                })
        ]
    });
}
function b() {
    var e;
    let { guild: t } = (0, s.e7)([m.Z], () => m.Z.getProps(), [], i.isEqual),
        n = null != (e = null == t ? void 0 : t.id) ? e : g.lds;
    return (0, o.n2)(n) ? (0, r.jsx)(d.Z, { guildId: n }) : null;
}
