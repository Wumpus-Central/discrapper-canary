t.d(e, { Z: () => d });
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    c = t(159300),
    r = t(984933),
    s = t(496675),
    o = t(981631),
    u = t(388032);
function d(n) {
    let { source: e, guild: t, channel: l, stageInstance: a } = n,
        u = (0, i.e7)([r.ZP], () => r.ZP.getDefaultChannel(t.id, !0, o.Plq.CREATE_INSTANT_INVITE)),
        d = (0, i.e7)([s.Z], () => (0, c.b)(s.Z, t, l, a)),
        Z = E(e, t, d && null != l ? l : u),
        h = N(e);
    return null == l && e === o.t4x.GUILD_CONTEXT_MENU ? null : d || null != u ? Z : h;
}
let E = (n, e, i) =>
        (0, l.jsx)(a.sNh, {
            id: 'invite-people',
            label: u.intl.string(u.t.BN75l5),
            color: 'brand',
            icon: n === o.t4x.GUILD_HEADER ? a.ejJ : void 0,
            action: () =>
                (0, a.ZDy)(async () => {
                    let { default: a } = await Promise.all([t.e('7654'), t.e('13942')]).then(t.bind(t, 560114));
                    return (t) =>
                        (0, l.jsx)(a, {
                            ...t,
                            guild: e,
                            channel: i,
                            source: n
                        });
                })
        }),
    N = (n) =>
        (0, l.jsx)(a.sNh, {
            id: 'invite-people',
            label: u.intl.string(u.t.BN75l5),
            color: 'brand',
            icon: n === o.t4x.GUILD_HEADER ? a.ejJ : void 0,
            action: () =>
                (0, a.ZDy)(async () => {
                    let { default: n } = await t.e('88358').then(t.bind(t, 598402));
                    return (e) => (0, l.jsx)(n, { ...e });
                })
        });
