t.d(n, {
    DT: () => C,
    Ef: () => S,
    HO: () => E,
    NZ: () => T,
    Pq: () => p,
    Q1: () => b,
    RK: () => N,
    _0: () => f,
    hz: () => I,
    yi: () => j
});
var l = t(512722),
    i = t.n(l),
    r = t(149765),
    a = t(544891),
    s = t(493683);
t(749210);
var o = t(911969),
    c = t(367907),
    d = t(944486),
    u = t(979651),
    _ = t(700785),
    h = t(922482),
    m = t(192079),
    x = t(706058),
    g = t(590415),
    v = t(981631);
function b(e, n) {
    let t = e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        n && (0, c.yw)(v.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, m.s$)(e) }),
        a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(t),
            body: {
                request_to_speak_timestamp: n ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function f(e, n) {
    let t = e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function N(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = null == e ? void 0 : e.getGuildId();
    i()(null != l, 'This channel cannot be guildless.');
    let r = u.Z.getVoiceStateForChannel(e.id);
    return (
        (0, g.gf)(r) !== g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, c.yw)(v.rMx.PROMOTED_TO_SPEAKER, { ...(0, m.s$)(e) }),
        a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(l),
            body: {
                suppress: n,
                request_to_speak_timestamp: null,
                channel_id: e.id,
                ...(t ? { silent: t } : {})
            },
            rejectWithError: !1
        })
    );
}
function j(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(n),
            body: {
                suppress: !0,
                channel_id: e.id,
                self_video: !1,
                self_stream: !1
            },
            rejectWithError: !1
        })
    );
}
function C(e, n, t) {
    let l = e.getGuildId();
    return (
        i()(null != l, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(l, n),
            body: {
                suppress: t,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function I(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        C(n, e.id, !0),
        a.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(t, e.id),
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
function p(e, n, t) {
    let l = e.getGuildId();
    i()(null != l, 'Channel cannot be guildless');
    let a = e.permissionOverwrites[l],
        c = {
            id: l,
            type: o.BN.ROLE,
            allow: _.Hn,
            deny: _.Hn,
            ...a
        };
    t ? ((c.allow = r.IH(c.allow, n)), (c.deny = r.Od(c.deny, n))) : ((c.allow = r.Od(c.allow, n)), (c.deny = r.IH(c.deny, n))), s.Z.updatePermissionOverwrite(e.id, c);
}
async function E(e, n, t, l) {
    if ('' === n) return;
    d.Z.getVoiceChannelId() !== e.id && (0, h.TM)(e);
    let i = await (0, x.me)(e.id, n, t, l);
    return N(e, !1, !0), i;
}
async function S(e, n, t) {
    if ('' !== n) return await (0, x.Dk)(e.id, n, t);
}
async function T(e) {
    await (0, x.Ix)(e.id);
}
