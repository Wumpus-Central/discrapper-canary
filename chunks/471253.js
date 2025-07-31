n.d(t, {
    DT: () => N,
    Ef: () => b,
    HO: () => A,
    NZ: () => C,
    Pq: () => R,
    Q1: () => I,
    RK: () => m,
    _0: () => T,
    hz: () => y,
    yi: () => g
});
var r = n(512722),
    i = n.n(r),
    l = n(149765),
    a = n(544891),
    o = n(493683);
n(749210);
var s = n(911969),
    c = n(367907),
    u = n(944486),
    d = n(979651),
    _ = n(700785),
    E = n(922482),
    p = n(192079),
    S = n(706058),
    O = n(590415),
    f = n(981631);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function I(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        t && (0, c.yw)(f.rMx.REQUEST_TO_SPEAK_INITIATED, h({}, (0, p.s$)(e))),
        a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function T(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(n, t),
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
        (0, O.gf)(l) !== O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.yw)(f.rMx.PROMOTED_TO_SPEAKER, h({}, (0, p.s$)(e))),
        a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(r),
            body: h(
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
function g(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(t),
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
function N(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, 'This channel cannot be guildless.'),
        a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(r, t),
            body: {
                suppress: n,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function y(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        N(t, e.id, !0),
        a.tn.patch({
            url: f.ANM.UPDATE_VOICE_STATE(n, e.id),
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
function R(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, 'Channel cannot be guildless');
    let a = e.permissionOverwrites[r],
        c = h(
            {
                id: r,
                type: s.BN.ROLE,
                allow: _.Hn,
                deny: _.Hn
            },
            a
        );
    (n ? ((c.allow = l.IH(c.allow, t)), (c.deny = l.Od(c.deny, t))) : ((c.allow = l.Od(c.allow, t)), (c.deny = l.IH(c.deny, t))), o.Z.updatePermissionOverwrite(e.id, c));
}
async function A(e, t, n, r) {
    if ('' === t) return;
    u.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
    let i = await (0, S.me)(e.id, t, n, r);
    return (m(e, !1, !0), i);
}
async function b(e, t, n) {
    if ('' !== t) return await (0, S.Dk)(e.id, t, n);
}
async function C(e) {
    await (0, S.Ix)(e.id);
}
