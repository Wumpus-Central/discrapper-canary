r.d(n, {
    O: function () {
        return d;
    },
    a: function () {
        return f;
    }
});
var i = r(47120);
var a = r(544891),
    o = r(570140),
    s = r(19780),
    l = r(823379),
    u = r(41776),
    c = r(981631);
async function d(e) {
    let n = u.Z.lurkingGuildIds().filter((n) => !e.includes(n));
    0 !== n.length &&
        (o.Z.dispatch({
            type: 'GUILD_STOP_LURKING',
            ignoredGuildIds: e
        }),
        await Promise.all(
            n.map(async (e) => {
                let n = u.Z.getLurkingSource();
                try {
                    await a.tn.del({
                        url: c.ANM.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0
                    });
                } catch (r) {
                    o.Z.dispatch({
                        type: 'GUILD_STOP_LURKING_FAILURE',
                        lurkingGuildId: e,
                        lurkingSource: n
                    });
                }
            })
        ));
}
async function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        n = u.Z.lurkingGuildIds();
    if (0 === n.length || !(null == e || !n.includes(e))) return;
    let r = [e, s.Z.getGuildId()].filter(l.lm);
    await d(r);
}
