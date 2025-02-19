t.d(n, {
    DT: () => y,
    Ef: () => M,
    HO: () => p,
    NZ: () => P,
    Pq: () => I,
    Q1: () => T,
    RK: () => O,
    _0: () => b,
    hz: () => N,
    yi: () => S
});
var i = t(512722),
    l = t.n(i),
    r = t(149765),
    u = t(544891),
    a = t(493683);
t(749210);
var o = t(911969),
    d = t(367907),
    c = t(944486),
    s = t(979651),
    _ = t(700785),
    E = t(922482),
    f = t(192079),
    g = t(706058),
    A = t(590415),
    v = t(981631);
function h(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function T(e, n) {
    let t = e.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        n && (0, d.yw)(v.rMx.REQUEST_TO_SPEAK_INITIATED, h({}, (0, f.s$)(e))),
        u.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(t),
            body: {
                request_to_speak_timestamp: n ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function b(e, n) {
    let t = e.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        u.tn.patch({
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
function O(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == e ? void 0 : e.getGuildId();
    l()(null != i, 'This channel cannot be guildless.');
    let r = s.Z.getVoiceStateForChannel(e.id);
    return (
        (0, A.gf)(r) !== A.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, d.yw)(v.rMx.PROMOTED_TO_SPEAKER, h({}, (0, f.s$)(e))),
        u.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(i),
            body: h(
                {
                    suppress: n,
                    request_to_speak_timestamp: null,
                    channel_id: e.id
                },
                t ? { silent: t } : {}
            ),
            rejectWithError: !1
        })
    );
}
function S(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return (
        l()(null != n, 'This channel cannot be guildless.'),
        u.tn.patch({
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
function y(e, n, t) {
    let i = e.getGuildId();
    return (
        l()(null != i, 'This channel cannot be guildless.'),
        u.tn.patch({
            url: v.ANM.UPDATE_VOICE_STATE(i, n),
            body: {
                suppress: t,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function N(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return (
        l()(null != t, 'This channel cannot be guildless.'),
        y(n, e.id, !0),
        u.tn.patch({
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
function I(e, n, t) {
    let i = e.getGuildId();
    l()(null != i, 'Channel cannot be guildless');
    let u = e.permissionOverwrites[i],
        d = h(
            {
                id: i,
                type: o.BN.ROLE,
                allow: _.Hn,
                deny: _.Hn
            },
            u
        );
    t ? ((d.allow = r.IH(d.allow, n)), (d.deny = r.Od(d.deny, n))) : ((d.allow = r.Od(d.allow, n)), (d.deny = r.IH(d.deny, n))), a.Z.updatePermissionOverwrite(e.id, d);
}
async function p(e, n, t, i) {
    if ('' === n) return;
    c.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
    let l = await (0, g.me)(e.id, n, t, i);
    return O(e, !1, !0), l;
}
async function M(e, n, t) {
    if ('' !== n) return await (0, g.Dk)(e.id, n, t);
}
async function P(e) {
    await (0, g.Ix)(e.id);
}
