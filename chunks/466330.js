t.d(e, {
    Z: function () {
        return d;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    u = t(159300),
    a = t(984933),
    c = t(496675),
    o = t(981631),
    s = t(388032);
function d(n) {
    let { source: e, guild: t, channel: l, stageInstance: r } = n,
        s = (0, i.e7)([a.ZP], () => a.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE)),
        d = (0, i.e7)([c.Z], () => (0, u.b)(c.Z, t, l, r)),
        N = E(e, t, d && null != l ? l : s),
        _ = Z(e);
    return null == l && e === o.t4x.GUILD_CONTEXT_MENU ? null : d || null != s ? N : _;
}
let E = (n, e, i) =>
        (0, l.jsx)(r.MenuItem, {
            id: 'invite-people',
            label: s.intl.string(s.t.BN75l5),
            color: 'brand',
            icon: n === o.t4x.GUILD_HEADER ? r.GroupPlusIcon : void 0,
            action: () =>
                (0, r.openModalLazy)(async () => {
                    let { default: r } = await Promise.all([t.e('7654'), t.e('46949')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, l.jsx)(r, {
                            ...t,
                            guild: e,
                            channel: i,
                            source: n
                        });
                })
        }),
    Z = (n) =>
        (0, l.jsx)(r.MenuItem, {
            id: 'invite-people',
            label: s.intl.string(s.t.BN75l5),
            color: 'brand',
            icon: n === o.t4x.GUILD_HEADER ? r.GroupPlusIcon : void 0,
            action: () =>
                (0, r.openModalLazy)(async () => {
                    let { default: n } = await t.e('88358').then(t.bind(t, 598402));
                    return (e) => (0, l.jsx)(n, { ...e });
                })
        });
