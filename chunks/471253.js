n.d(e, {
    DT: () => T,
    Ef: () => P,
    HO: () => O,
    NZ: () => b,
    Pq: () => v,
    Q1: () => m,
    RK: () => g,
    _0: () => I,
    hz: () => A,
    yi: () => C
});
var i = n(512722),
    a = n.n(i),
    r = n(149765),
    l = n(544891),
    o = n(493683);
n(749210);
var u = n(911969),
    s = n(367907),
    d = n(944486),
    c = n(979651),
    f = n(700785),
    _ = n(922482),
    p = n(192079),
    h = n(706058),
    E = n(590415),
    N = n(981631);
function m(t, e) {
    let n = t.getGuildId();
    return (
        a()(null != n, 'This channel cannot be guildless.'),
        e && (0, s.yw)(N.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, p.s$)(t) }),
        l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: e ? new Date().toISOString() : null,
                channel_id: t.id
            },
            rejectWithError: !1
        })
    );
}
function I(t, e) {
    let n = t.getGuildId();
    return (
        a()(null != n, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(n, e),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: t.id
            },
            rejectWithError: !1
        })
    );
}
function g(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == t ? void 0 : t.getGuildId();
    a()(null != i, 'This channel cannot be guildless.');
    let r = c.Z.getVoiceStateForChannel(t.id);
    return (
        (0, E.gf)(r) !== E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, s.yw)(N.rMx.PROMOTED_TO_SPEAKER, { ...(0, p.s$)(t) }),
        l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(i),
            body: {
                suppress: e,
                request_to_speak_timestamp: null,
                channel_id: t.id,
                ...(n ? { silent: n } : {})
            },
            rejectWithError: !1
        })
    );
}
function C(t) {
    let e = null == t ? void 0 : t.getGuildId();
    return (
        a()(null != e, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e),
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
function T(t, e, n) {
    let i = t.getGuildId();
    return (
        a()(null != i, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(i, e),
            body: {
                suppress: n,
                channel_id: t.id
            },
            rejectWithError: !1
        })
    );
}
function A(t, e) {
    if (null == e || null == t) return;
    let n = e.getGuildId();
    return (
        a()(null != n, 'This channel cannot be guildless.'),
        T(e, t.id, !0),
        l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(n, t.id),
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
function v(t, e, n) {
    let i = t.getGuildId();
    a()(null != i, 'Channel cannot be guildless');
    let l = t.permissionOverwrites[i],
        s = {
            id: i,
            type: u.BN.ROLE,
            allow: f.Hn,
            deny: f.Hn,
            ...l
        };
    n ? ((s.allow = r.IH(s.allow, e)), (s.deny = r.Od(s.deny, e))) : ((s.allow = r.Od(s.allow, e)), (s.deny = r.IH(s.deny, e))), o.Z.updatePermissionOverwrite(t.id, s);
}
async function O(t, e, n, i) {
    if ('' === e) return;
    d.Z.getVoiceChannelId() !== t.id && (0, _.TM)(t);
    let a = await (0, h.me)(t.id, e, n, i);
    return g(t, !1, !0), a;
}
async function P(t, e, n) {
    if ('' !== e) return await (0, h.Dk)(t.id, e, n);
}
async function b(t) {
    await (0, h.Ix)(t.id);
}
