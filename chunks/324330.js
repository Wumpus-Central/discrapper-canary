n.d(t, {
    $: function () {
        return p;
    },
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var r = n(392711),
    l = n(442837),
    s = n(481060),
    a = n(63568),
    o = n(241559),
    c = n(527379),
    d = n(313364),
    u = n(434404),
    m = n(999382),
    h = n(981631),
    g = n(388032),
    x = n(619732);
function p() {
    var e, t;
    let n = (0, l.e7)([m.Z], () => m.Z.getProps().guild, []),
        r = null !== (e = null == n ? void 0 : n.isCommunity()) && void 0 !== e && e,
        o = (0, a.K2)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : h.lds, 'GuildSettingsMembersRow') && (null == n ? void 0 : n.hasFeature(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
        d = r || o;
    return (0, i.jsxs)(s.Clickable, {
        onClick: (e) => {
            if (null != n) d ? (e.preventDefault(), u.Z.close(), (0, c._X)(n.id)) : u.Z.open(n.id, h.pNK.MEMBERS);
        },
        className: x.rowContainer,
        children: [
            (0, i.jsx)('div', { children: g.intl.string(g.t['9Oq93t']) }),
            d &&
                (0, i.jsx)(s.WindowLaunchIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: x.linkIcon,
                    width: 16,
                    height: 16
                })
        ]
    });
}
function f() {
    var e;
    let { guild: t } = (0, l.e7)([m.Z], () => m.Z.getProps(), [], r.isEqual),
        n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : h.lds;
    return (0, o.n2)(n) ? (0, i.jsx)(d.Z, { guildId: n }) : null;
}
