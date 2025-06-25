n.d(t, {
    DT: () => R,
    Ef: () => y,
    HO: () => C,
    NZ: () => b,
    Pq: () => P,
    Q1: () => S,
    RK: () => m,
    _0: () => f,
    hz: () => g,
    yi: () => A
});
var r = n(512722),
    i = n.n(r),
    l = n(149765),
    o = n(544891),
    a = n(493683);
n(749210);
var c = n(911969),
    s = n(367907),
    u = n(944486),
    d = n(979651),
    _ = n(700785),
    E = n(922482),
    I = n(192079),
    O = n(706058),
    T = n(590415),
    p = n(981631);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        t && (0, s.yw)(p.rMx.REQUEST_TO_SPEAK_INITIATED, N({}, (0, I.s$)(e))),
        o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function f(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(n, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == e ? void 0 : e.getGuildId();
    i()(null != r, 'This channel cannot be guildless.');
    let l = d.Z.getVoiceStateForChannel(e.id);
    return (
        (0, T.gf)(l) !== T.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, s.yw)(p.rMx.PROMOTED_TO_SPEAKER, N({}, (0, I.s$)(e))),
        o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(r),
            body: N(
                {
                    suppress: t,
                    request_to_speak_timestamp: null,
                    channel_id: e.id
                },
                n ? { silent: n } : {}
            ),
            rejectWithError: !1
        })
    );
}
function A(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(t),
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
function R(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(r, t),
            body: {
                suppress: n,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function g(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        R(t, e.id, !0),
        o.tn.patch({
            url: p.ANM.UPDATE_VOICE_STATE(n, e.id),
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
function P(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, 'Channel cannot be guildless');
    let o = e.permissionOverwrites[r],
        s = N(
            {
                id: r,
                type: c.BN.ROLE,
                allow: _.Hn,
                deny: _.Hn
            },
            o
        );
    n ? ((s.allow = l.IH(s.allow, t)), (s.deny = l.Od(s.deny, t))) : ((s.allow = l.Od(s.allow, t)), (s.deny = l.IH(s.deny, t))), a.Z.updatePermissionOverwrite(e.id, s);
}
async function C(e, t, n, r) {
    if ('' === t) return;
    u.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
    let i = await (0, O.me)(e.id, t, n, r);
    return m(e, !1, !0), i;
}
async function y(e, t, n) {
    if ('' !== t) return await (0, O.Dk)(e.id, t, n);
}
async function b(e) {
    await (0, O.Ix)(e.id);
}
