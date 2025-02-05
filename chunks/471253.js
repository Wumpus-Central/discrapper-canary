n.d(t, {
    DT: () => g,
    Ef: () => O,
    HO: () => R,
    NZ: () => P,
    Pq: () => I,
    Q1: () => N,
    RK: () => A,
    _0: () => C,
    hz: () => v,
    yi: () => T
});
var i = n(512722),
    r = n.n(i),
    a = n(149765),
    l = n(544891),
    u = n(493683);
n(749210);
var o = n(911969),
    d = n(367907),
    s = n(944486),
    c = n(979651),
    f = n(700785),
    _ = n(922482),
    E = n(192079),
    p = n(706058),
    m = n(590415),
    h = n(981631);
function N(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        t && (0, d.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(e) }),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function C(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == e ? void 0 : e.getGuildId();
    r()(null != i, 'This channel cannot be guildless.');
    let a = c.Z.getVoiceStateForChannel(e.id);
    return (
        (0, m.gf)(a) !== m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, d.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(e) }),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
            body: {
                suppress: t,
                request_to_speak_timestamp: null,
                channel_id: e.id,
                ...(n ? { silent: n } : {})
            },
            rejectWithError: !1
        })
    );
}
function T(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        r()(null != t, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
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
function g(e, t, n) {
    let i = e.getGuildId();
    return (
        r()(null != i, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, t),
            body: {
                suppress: n,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function v(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        g(t, e.id, !0),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n, e.id),
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
function I(e, t, n) {
    let i = e.getGuildId();
    r()(null != i, 'Channel cannot be guildless');
    let l = e.permissionOverwrites[i],
        d = {
            id: i,
            type: o.BN.ROLE,
            allow: f.Hn,
            deny: f.Hn,
            ...l
        };
    n ? ((d.allow = a.IH(d.allow, t)), (d.deny = a.Od(d.deny, t))) : ((d.allow = a.Od(d.allow, t)), (d.deny = a.IH(d.deny, t))), u.Z.updatePermissionOverwrite(e.id, d);
}
async function R(e, t, n, i) {
    if ('' === t) return;
    s.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
    let r = await (0, p.me)(e.id, t, n, i);
    return A(e, !1, !0), r;
}
async function O(e, t, n) {
    if ('' !== t) return await (0, p.Dk)(e.id, t, n);
}
async function P(e) {
    await (0, p.Ix)(e.id);
}
