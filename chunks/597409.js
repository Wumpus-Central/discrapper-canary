a.d(e, { default: () => p });
var i = a(200651);
a(192379);
var l = a(442837),
    t = a(481060),
    s = a(239091),
    r = a(496675),
    c = a(572004),
    d = a(981631),
    o = a(388032),
    u = a(372819);
let p = function (n) {
    var e;
    let { guild: p, user: b, onSelect: h } = n,
        v = null !== (e = null == p ? void 0 : p.id) && void 0 !== e ? e : d.lds,
        x = (0, l.e7)([r.Z], () => null != p && r.Z.canManageUser(d.Plq.BAN_MEMBERS, b, p), [p, b]);
    return (0, i.jsx)(t.v2r, {
        navId: 'member-application-context-menu',
        className: u.contextMenu,
        onClose: s.Zy,
        'aria-label': o.intl.string(o.t.liqwPD),
        onSelect: h,
        children: (0, i.jsxs)(t.kSQ, {
            children: [
                x &&
                    (0, i.jsx)(
                        t.sNh,
                        {
                            id: 'ban',
                            label: o.intl.string(o.t['I+Cbur']),
                            icon: t.pgN,
                            color: 'danger',
                            action: () =>
                                (0, t.ZDy)(async () => {
                                    let { default: n } = await a.e('43350').then(a.bind(a, 98746));
                                    return (e) =>
                                        (0, i.jsx)(n, {
                                            ...e,
                                            guildId: v,
                                            user: b
                                        });
                                })
                        },
                        'ban'
                    ),
                (0, i.jsx)(
                    t.sNh,
                    {
                        id: 'copyUserId',
                        label: 'Copy User ID',
                        icon: t.VuL,
                        action: () => (0, c.JG)(b.id)
                    },
                    'copyUserId'
                )
            ]
        })
    });
};
