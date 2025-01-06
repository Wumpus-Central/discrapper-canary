t.d(n, {
    DT: function () {
        return E;
    },
    Ef: function () {
        return C;
    },
    HO: function () {
        return b;
    },
    NZ: function () {
        return I;
    },
    Pq: function () {
        return T;
    },
    Q1: function () {
        return v;
    },
    RK: function () {
        return _;
    },
    _0: function () {
        return N;
    },
    hz: function () {
        return P;
    },
    yi: function () {
        return p;
    }
});
var i = t(512722),
    l = t.n(i),
    r = t(149765),
    a = t(544891),
    s = t(493683);
t(749210);
var c = t(911969),
    o = t(367907),
    u = t(944486),
    d = t(979651),
    h = t(700785),
    m = t(922482),
    f = t(192079),
    x = t(706058),
    g = t(590415),
    j = t(981631);
function v(e, n) {
    let t = e.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        n && (0, o.yw)(j.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
        a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(t),
            body: {
                request_to_speak_timestamp: n ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function N(e, n) {
    let t = e.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function _(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == e ? void 0 : e.getGuildId();
    l()(null != i, 'This channel cannot be guildless.');
    let r = d.Z.getVoiceStateForChannel(e.id);
    return (
        (0, g.gf)(r) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !n && (0, o.yw)(j.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
        a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(i),
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
function p(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return (
        l()(null != n, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(n),
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
function E(e, n, t) {
    let i = e.getGuildId();
    return (
        l()(null != i, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(i, n),
            body: {
                suppress: t,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function P(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        E(n, e.id, !0),
        a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(t, e.id),
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
function T(e, n, t) {
    let i = e.getGuildId();
    l()(null != i, 'Channel cannot be guildless');
    let a = e.permissionOverwrites[i],
        o = {
            id: i,
            type: c.BN.ROLE,
            allow: h.Hn,
            deny: h.Hn,
            ...a
        };
    t ? ((o.allow = r.IH(o.allow, n)), (o.deny = r.Od(o.deny, n))) : ((o.allow = r.Od(o.allow, n)), (o.deny = r.IH(o.deny, n))), s.Z.updatePermissionOverwrite(e.id, o);
}
async function b(e, n, t, i) {
    if ('' === n) return;
    u.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
    let l = await (0, x.me)(e.id, n, t, i);
    return _(e, !1, !0), l;
}
async function C(e, n, t) {
    if ('' !== n) return await (0, x.Dk)(e.id, n, t);
}
async function I(e) {
    await (0, x.Ix)(e.id);
}
