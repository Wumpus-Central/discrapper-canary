n.d(t, {
    DT: () => C,
    Ef: () => m,
    HO: () => g,
    NZ: () => y,
    Pq: () => D,
    Q1: () => p,
    RK: () => A,
    _0: () => R,
    hz: () => f,
    yi: () => P
});
var r = n(512722),
    i = n.n(r),
    l = n(149765),
    o = n(544891),
    a = n(493683);
n(749210);
var s = n(911969),
    c = n(367907),
    u = n(944486),
    E = n(979651),
    d = n(700785),
    _ = n(922482),
    I = n(192079),
    N = n(706058),
    O = n(590415),
    T = n(981631);
function S(e) {
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
function p(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        t && (0, c.yw)(T.rMx.REQUEST_TO_SPEAK_INITIATED, S({}, (0, I.s$)(e))),
        o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function R(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(n, t),
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
        r = null == e ? void 0 : e.getGuildId();
    i()(null != r, 'This channel cannot be guildless.');
    let l = E.Z.getVoiceStateForChannel(e.id);
    return (
        (0, O.gf)(l) !== O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.yw)(T.rMx.PROMOTED_TO_SPEAKER, S({}, (0, I.s$)(e))),
        o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(r),
            body: S(
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
function P(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(t),
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
function C(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(r, t),
            body: {
                suppress: n,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function f(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        C(t, e.id, !0),
        o.tn.patch({
            url: T.ANM.UPDATE_VOICE_STATE(n, e.id),
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
function D(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, 'Channel cannot be guildless');
    let o = e.permissionOverwrites[r],
        c = S(
            {
                id: r,
                type: s.BN.ROLE,
                allow: d.Hn,
                deny: d.Hn
            },
            o
        );
    n ? ((c.allow = l.IH(c.allow, t)), (c.deny = l.Od(c.deny, t))) : ((c.allow = l.Od(c.allow, t)), (c.deny = l.IH(c.deny, t))), a.Z.updatePermissionOverwrite(e.id, c);
}
async function g(e, t, n, r) {
    if ('' === t) return;
    u.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
    let i = await (0, N.me)(e.id, t, n, r);
    return A(e, !1, !0), i;
}
async function m(e, t, n) {
    if ('' !== t) return await (0, N.Dk)(e.id, t, n);
}
async function y(e) {
    await (0, N.Ix)(e.id);
}
