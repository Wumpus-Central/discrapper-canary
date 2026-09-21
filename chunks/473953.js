e.d(a, { Wl: () => u, fi: () => C, u_: () => E });
var c = e(562708),
    r = e(636537),
    i = e(228366),
    n = e(499785),
    s = e(716357),
    h = e(513446),
    o = e(652215);
let _ = 0;
async function p(t) {
    let a = _++;
    i.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: a });
    try {
        let { body: e } = await n.A.get({
            url: o.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: c.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        i.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: a, space: e });
    } catch (e) {
        i.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: t, requestId: a, retryable: (0, h.a)(e) });
    }
}
async function E(t) {
    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = s.A.getFetchStatus(t),
        c = a && "error" === e && !s.A.isInBackoff(t);
    ("idle" === e || c) && (await p(t));
}
async function C(t) {
    await p(t);
}
async function u(t, a) {
    let { body: e } = await r.Bo.patch({ url: o.Rsh.GUILD_SPACE_SETTINGS(t), body: a, rejectWithError: !0 });
    return e;
}
