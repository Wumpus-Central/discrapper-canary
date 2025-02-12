t.d(n, {
    DT: () => b,
    Ef: () => C,
    HO: () => M,
    NZ: () => N,
    Pq: () => S,
    Q1: () => v,
    RK: () => m,
    _0: () => T,
    hz: () => I,
    yi: () => A
});
var i = t(512722),
    l = t.n(i),
    a = t(149765),
    r = t(544891),
    o = t(493683);
t(749210);
var u = t(911969),
    d = t(367907),
    s = t(944486),
    c = t(979651),
    _ = t(700785),
    f = t(922482),
    p = t(192079),
    E = t(706058),
    g = t(590415),
    h = t(981631);
function v(e, n) {
    let t = e.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        n && (0, d.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, p.s$)(e) }),
        r.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
                request_to_speak_timestamp: n ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function T(e, n) {
    let t = e.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        r.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function m(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == e ? void 0 : e.getGuildId();
    l()(null != i, 'This channel cannot be guildless.');
    let a = c.Z.getVoiceStateForChannel(e.id);
    return (
        (0, g.gf)(a) !== g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, d.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, p.s$)(e) }),
        r.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
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
function A(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return (
        l()(null != n, 'This channel cannot be guildless.'),
        r.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n),
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
function b(e, n, t) {
    let i = e.getGuildId();
    return (
        l()(null != i, 'This channel cannot be guildless.'),
        r.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, n),
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
        l()(null != t, 'This channel cannot be guildless.'),
        b(n, e.id, !0),
        r.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, e.id),
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
function S(e, n, t) {
    let i = e.getGuildId();
    l()(null != i, 'Channel cannot be guildless');
    let r = e.permissionOverwrites[i],
        d = {
            id: i,
            type: u.BN.ROLE,
            allow: _.Hn,
            deny: _.Hn,
            ...r
        };
    t ? ((d.allow = a.IH(d.allow, n)), (d.deny = a.Od(d.deny, n))) : ((d.allow = a.Od(d.allow, n)), (d.deny = a.IH(d.deny, n))), o.Z.updatePermissionOverwrite(e.id, d);
}
async function M(e, n, t, i) {
    if ('' === n) return;
    s.Z.getVoiceChannelId() !== e.id && (0, f.TM)(e);
    let l = await (0, E.me)(e.id, n, t, i);
    return m(e, !1, !0), l;
}
async function C(e, n, t) {
    if ('' !== n) return await (0, E.Dk)(e.id, n, t);
}
async function N(e) {
    await (0, E.Ix)(e.id);
}
