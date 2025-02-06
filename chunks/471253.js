e.d(t, {
    DT: () => N,
    Ef: () => y,
    HO: () => S,
    NZ: () => x,
    Pq: () => k,
    Q1: () => f,
    RK: () => m,
    _0: () => A,
    hz: () => b,
    yi: () => I
});
var i = e(512722),
    l = e.n(i),
    r = e(149765),
    a = e(544891),
    s = e(493683);
e(749210);
var c = e(911969),
    o = e(367907),
    d = e(944486),
    u = e(979651),
    _ = e(700785),
    h = e(922482),
    E = e(192079),
    T = e(706058),
    p = e(590415),
    g = e(981631);
function f(n, t) {
    let e = n.getGuildId();
    return (
        l()(null != e, 'This channel cannot be guildless.'),
        t && (0, o.yw)(g.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
        a.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: n.id
            },
            rejectWithError: !1
        })
    );
}
function A(n, t) {
    let e = n.getGuildId();
    return (
        l()(null != e, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: n.id
            },
            rejectWithError: !1
        })
    );
}
function m(n, t) {
    let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == n ? void 0 : n.getGuildId();
    l()(null != i, 'This channel cannot be guildless.');
    let r = u.Z.getVoiceStateForChannel(n.id);
    return (
        (0, p.gf)(r) !== p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, o.yw)(g.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
        a.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(i),
            body: {
                suppress: t,
                request_to_speak_timestamp: null,
                channel_id: n.id,
                ...(e ? { silent: e } : {})
            },
            rejectWithError: !1
        })
    );
}
function I(n) {
    let t = null == n ? void 0 : n.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(t),
            body: {
                suppress: !0,
                channel_id: n.id,
                self_video: !1,
                self_stream: !1
            },
            rejectWithError: !1
        })
    );
}
function N(n, t, e) {
    let i = n.getGuildId();
    return (
        l()(null != i, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(i, t),
            body: {
                suppress: e,
                channel_id: n.id
            },
            rejectWithError: !1
        })
    );
}
function b(n, t) {
    if (null == t || null == n) return;
    let e = t.getGuildId();
    return (
        l()(null != e, 'This channel cannot be guildless.'),
        N(t, n.id, !0),
        a.tn.patch({
            url: g.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
                suppress: !0,
                channel_id: t.id,
                self_video: !1,
                self_stream: !1
            },
            rejectWithError: !1
        })
    );
}
function k(n, t, e) {
    let i = n.getGuildId();
    l()(null != i, 'Channel cannot be guildless');
    let a = n.permissionOverwrites[i],
        o = {
            id: i,
            type: c.BN.ROLE,
            allow: _.Hn,
            deny: _.Hn,
            ...a
        };
    e ? ((o.allow = r.IH(o.allow, t)), (o.deny = r.Od(o.deny, t))) : ((o.allow = r.Od(o.allow, t)), (o.deny = r.IH(o.deny, t))), s.Z.updatePermissionOverwrite(n.id, o);
}
async function S(n, t, e, i) {
    if ('' === t) return;
    d.Z.getVoiceChannelId() !== n.id && (0, h.TM)(n);
    let l = await (0, T.me)(n.id, t, e, i);
    return m(n, !1, !0), l;
}
async function y(n, t, e) {
    if ('' !== t) return await (0, T.Dk)(n.id, t, e);
}
async function x(n) {
    await (0, T.Ix)(n.id);
}
