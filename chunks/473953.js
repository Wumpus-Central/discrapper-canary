e.d(a, { W: () => C, u: () => E });
var c = e(562708),
    r = e(636537),
    i = e(228366),
    s = e(499785),
    h = e(716357),
    n = e(513446),
    _ = e(652215);
let o = 0;
async function p(t) {
    let a = o++;
    i.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: a });
    try {
        let { body: e } = await s.A.get({
            url: _.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: c.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        i.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: a, space: e });
    } catch (e) {
        i.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: a, retryable: (0, n.a)(e) });
    }
}
async function E(t, a) {
    let { shouldRefetch: e = !1 } = a,
        c = h.A.getFetchStatus(t),
        r = h.A.isInBackoff(t);
    "loading" === c || r || (("idle" === c || e) && (await p(t)));
}
async function C(t, a) {
    let { body: e } = await r.Bo.patch({ url: _.Rsh.GUILD_SPACE_SETTINGS(t), body: a, rejectWithError: !0 });
    return e;
}
