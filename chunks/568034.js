n.d(t, { A: () => R });
var i = n(991690),
    r = n(73153),
    a = n(308368),
    s = n(308528),
    l = n(729937),
    o = n(181658),
    d = n(950803),
    c = n(90804),
    u = n(85982),
    _ = n(587895),
    E = n(371169),
    A = n(378570),
    h = n(843002),
    f = n(734057),
    I = n(576705),
    p = n(977997),
    T = n(339586),
    m = n(173912),
    g = n(366430),
    S = n(165610),
    N = n(652215),
    C = n(818023),
    O = n(105292);
async function R(e) {
    let { application: t, userId: n, activity: s, sessionId: l, channelId: E, messageId: f, intent: I = C.W9.PLAY } = e,
        p = t.id;
    null != l && r.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: p });
    let R = s ?? (null != l ? { application_id: p, session_id: l } : null),
        b = null != R && (0, m.m)(p) ? await y(R, n) : void 0,
        M = null != b ? await v(p, b) : null,
        P = null == M ? await L(p, n, R?.session_id ?? l) : null;
    function U() {
        return (r.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: p }), !1);
    }
    let w = (0, g.It)(_.A.getApplication(p));
    if (null == M && null == P && !w.has(i.U.MAIN)) {
        if (!w.has(i.U.APP_CHANNEL)) return ((0, u.A)(O.intl.string(O.t["7XR9+7"])), U());
        M = await D(p);
    }
    if (null != P) {
        if (!(await (0, c.A)({ channelId: P }))) return U();
        (0, A.iN)(P);
    }
    let G = null;
    if (null != l)
        try {
            ({ secret: G } = await a.A.getJoinSecret(n, l, p, null != f ? E : (P ?? M?.channelId ?? E), f));
        } catch (t) {
            let e = await (0, d.f)(new o.A(t), p);
            return ((0, u.A)(e.errorCode === N.t02.UNKNOWN_SESSION ? O.intl.string(O.t["7XR9+7"]) : e.message), U());
        }
    let { frameId: x, launched: k } =
        null != P
            ? { frameId: (0, S.VA)(p, (0, h.e)(P)), launched: Promise.resolve() }
            : (0, m.A)({ applicationId: p, channel: M });
    if (null == G) return !0;
    r.h.dispatch({ type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: p });
    try {
        (await k, await T.A.waitFrameSubscribed(x, N.ZE4.ACTIVITY_JOIN));
    } catch {
        return U();
    }
    return (
        r.h.dispatch({
            type: "ACTIVITY_JOIN",
            applicationId: p,
            parentApplicationId: null,
            frameId: x,
            secret: G,
            intent: I,
            embedded: !0,
        }),
        !0
    );
}
async function L(e, t, n) {
    let i = p.A.getVoiceStateForSession(t, n) ?? p.A.getVoiceStateForUser(t),
        r = i?.channelId;
    if (null == r) return null;
    let a = f.A.getChannel(r) ?? (await s.A.openChannel(r));
    return a?.type === N.rbe.GUILD_VOICE && a.application_id === e ? a.id : null;
}
async function y(e, t) {
    try {
        let n = await (0, l.yb)(e, t);
        return "string" == typeof n?.channel_id ? n.channel_id : void 0;
    } catch {
        return;
    }
}
async function D(e) {
    let t = (await (0, E.l5)(e))[0];
    return null != t ? { guildId: t.guild_id, channelId: t.channel_id } : null;
}
async function v(e, t) {
    let n = f.A.getChannel(t);
    if (null == n) {
        let n = (await (0, E.l5)(e)).find((e) => e.channel_id === t);
        return null != n ? { guildId: n.guild_id, channelId: n.channel_id } : null;
    }
    return n.type === N.rbe.GUILD_APP && n.application_id === e && I.A.can(N.xBc.VIEW_CHANNEL, n)
        ? { guildId: n.guild_id, channelId: n.id }
        : null;
}
