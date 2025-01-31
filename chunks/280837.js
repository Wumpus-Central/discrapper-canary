n.d(t, {
    O: () => u,
    a: () => c
}),
    n(47120);
var i = n(544891),
    r = n(570140),
    a = n(19780),
    s = n(823379),
    o = n(41776),
    l = n(981631);
async function u(e) {
    let t = o.Z.lurkingGuildIds().filter((t) => !e.includes(t));
    0 !== t.length &&
        (r.Z.dispatch({
            type: 'GUILD_STOP_LURKING',
            ignoredGuildIds: e
        }),
        await Promise.all(
            t.map(async (e) => {
                let t = o.Z.getLurkingSource();
                try {
                    await i.tn.del({
                        url: l.ANM.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    });
                } catch (n) {
                    r.Z.dispatch({
                        type: 'GUILD_STOP_LURKING_FAILURE',
                        lurkingGuildId: e,
                        lurkingSource: t
                    });
                }
            })
        ));
}
async function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = o.Z.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, a.Z.getGuildId()].filter(s.lm);
    await u(n);
}
