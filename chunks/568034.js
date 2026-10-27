n.d(t, { A: () => O });
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
    E = n(378570),
    A = n(843002),
    h = n(734057),
    f = n(977997),
    I = n(339586),
    p = n(173912),
    T = n(617297),
    m = n(366430),
    g = n(165610),
    S = n(652215),
    N = n(818023),
    C = n(105292);
async function O(e) {
    let { application: t, userId: n, activity: s, sessionId: l, channelId: h, messageId: f, intent: O = N.W9.PLAY } = e,
        y = t.id;
    null != l && r.h.dispatch({ type: "ACTIVITY_JOIN_LOADING", applicationId: y });
    let D = s ?? (null != l ? { application_id: y, session_id: l } : null),
        v = null != D && (0, p.m)(y) ? await L(D, n) : void 0,
        b = (0, m.It)(_.A.getApplication(y)),
        P = !b.has(i.U.MAIN) && b.has(i.U.APP_CHANNEL),
        M = null != v ? await (0, T.A)(y, { preferredChannelId: v, fallback: P }) : null,
        U = null == M ? await R(y, n, D?.session_id ?? l) : null;
    function w() {
        return (r.h.dispatch({ type: "ACTIVITY_JOIN_FAILED", applicationId: y }), !1);
    }
    if (null == M && null == U && !b.has(i.U.MAIN)) {
        if (!P) return ((0, u.A)(C.intl.string(C.t["7XR9+7"])), w());
        null == v && (M = await (0, T.A)(y));
    }
    if (null != U) {
        if (!(await (0, c.A)({ channelId: U }))) return w();
        (0, E.iN)(U);
    }
    let G = null;
    if (null != l)
        try {
            ({ secret: G } = await a.A.getJoinSecret(n, l, y, null != f ? h : (U ?? M?.channelId ?? h), f));
        } catch (t) {
            let e = await (0, d.f)(new o.A(t), y);
            return ((0, u.A)(e.errorCode === S.t02.UNKNOWN_SESSION ? C.intl.string(C.t["7XR9+7"]) : e.message), w());
        }
    let { frameId: x, launched: k } =
        null != U
            ? { frameId: (0, g.VA)(y, (0, A.e)(U)), launched: Promise.resolve() }
            : (0, p.A)({
                  applicationId: y,
                  channel: M,
                  invite: null != h && null != f ? { channelId: h, messageId: f } : void 0,
              });
    if (null == G) return !0;
    r.h.dispatch({ type: "ACTIVITY_JOIN_NAVIGATION_COMPLETE", applicationId: y });
    try {
        (await k, await I.A.waitFrameSubscribed(x, S.ZE4.ACTIVITY_JOIN));
    } catch {
        return w();
    }
    return (
        r.h.dispatch({
            type: "ACTIVITY_JOIN",
            applicationId: y,
            parentApplicationId: null,
            frameId: x,
            secret: G,
            intent: O,
            embedded: !0,
        }),
        !0
    );
}
async function R(e, t, n) {
    let i = f.A.getVoiceStateForSession(t, n) ?? f.A.getVoiceStateForUser(t),
        r = i?.channelId;
    if (null == r) return null;
    let a = h.A.getChannel(r) ?? (await s.A.openChannel(r));
    return a?.type === S.rbe.GUILD_VOICE && a.application_id === e ? a.id : null;
}
async function L(e, t) {
    try {
        let n = await (0, l.yb)(e, t);
        return "string" == typeof n?.channel_id ? n.channel_id : void 0;
    } catch {
        return;
    }
}
