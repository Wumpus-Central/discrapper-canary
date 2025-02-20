n.d(t, {
    O: () => c,
    a: () => u
}),
    n(47120);
var r = n(544891),
    i = n(570140),
    o = n(19780),
    a = n(823379),
    s = n(41776),
    l = n(981631);
async function c(e) {
    let t = s.Z.lurkingGuildIds().filter((t) => !e.includes(t));
    0 !== t.length &&
        (i.Z.dispatch({
            type: 'GUILD_STOP_LURKING',
            ignoredGuildIds: e
        }),
        await Promise.all(
            t.map(async (e) => {
                let t = s.Z.getLurkingSource();
                try {
                    await r.tn.del({
                        url: l.ANM.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    });
                } catch (n) {
                    i.Z.dispatch({
                        type: 'GUILD_STOP_LURKING_FAILURE',
                        lurkingGuildId: e,
                        lurkingSource: t
                    });
                }
            })
        ));
}
async function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = s.Z.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, o.Z.getGuildId()].filter(a.lm);
    await c(n);
}
