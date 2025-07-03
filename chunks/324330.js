n.d(t, {
    $: () => f,
    Z: () => h
});
var r = n(255367);
n(73800);
var i = n(392711),
    l = n(442837),
    s = n(481060),
    a = n(241559),
    o = n(527379),
    c = n(313364),
    d = n(434404),
    u = n(999382),
    m = n(981631),
    g = n(388032),
    p = n(953592);
function f() {
    var e, t;
    let n = (0, l.e7)([u.Z], () => u.Z.getProps().guild, []),
        i = null != (e = null == n ? void 0 : n.features.has(m.oNc.COMMUNITY)) && e,
        a = null != (t = null == n ? void 0 : n.features.has(m.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && t,
        c = i || a;
    return (0, r.jsxs)(s.P3F, {
        onClick: (e) => {
            null != n && (c ? (e.preventDefault(), d.Z.close(), (0, o._X)(n.id)) : d.Z.open(n.id, m.pNK.MEMBERS));
        },
        className: p.rowContainer,
        children: [
            (0, r.jsx)('div', { children: g.intl.string(g.t['9Oq93t']) }),
            c &&
                (0, r.jsx)(s.rgF, {
                    size: 'xs',
                    color: 'currentColor',
                    className: p.linkIcon
                })
        ]
    });
}
function h() {
    var e;
    let { guild: t } = (0, l.e7)([u.Z], () => u.Z.getProps(), [], i.isEqual),
        n = null != (e = null == t ? void 0 : t.id) ? e : m.lds;
    return (0, a.n2)(n) ? (0, r.jsx)(c.Z, { guildId: n }) : null;
}
