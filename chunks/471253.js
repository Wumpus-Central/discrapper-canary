n.d(e, {
    DT: () => O,
    Ef: () => P,
    HO: () => b,
    NZ: () => R,
    Pq: () => v,
    Q1: () => I,
    RK: () => T,
    _0: () => g,
    hz: () => A,
    yi: () => C
});
var i = n(512722),
    r = n.n(i),
    a = n(149765),
    l = n(544891),
    o = n(493683);
n(749210);
var u = n(911969),
    s = n(367907),
    c = n(944486),
    d = n(979651),
    f = n(700785),
    N = n(922482),
    _ = n(192079),
    p = n(706058),
    E = n(590415),
    h = n(981631);
function m(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
function I(t, e) {
    let n = t.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        e && (0, s.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, m({}, (0, _.s$)(t))),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: e ? new Date().toISOString() : null,
                channel_id: t.id
            },
            rejectWithError: !1
        })
    );
}
function g(t, e) {
    let n = t.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n, e),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: t.id
            },
            rejectWithError: !1
        })
    );
}
function T(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == t ? void 0 : t.getGuildId();
    r()(null != i, 'This channel cannot be guildless.');
    let a = d.Z.getVoiceStateForChannel(t.id);
    return (
        (0, E.gf)(a) !== E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || e || (0, s.yw)(h.rMx.PROMOTED_TO_SPEAKER, m({}, (0, _.s$)(t))),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
            body: m(
                {
                    suppress: e,
                    request_to_speak_timestamp: null,
                    channel_id: t.id
                },
                n ? { silent: n } : {}
            ),
            rejectWithError: !1
        })
    );
}
function C(t) {
    let e = null == t ? void 0 : t.getGuildId();
    return (
        r()(null != e, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e),
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
function O(t, e, n) {
    let i = t.getGuildId();
    return (
        r()(null != i, 'This channel cannot be guildless.'),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, e),
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
        r()(null != n, 'This channel cannot be guildless.'),
        O(e, t.id, !0),
        l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(n, t.id),
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
    r()(null != i, 'Channel cannot be guildless');
    let l = t.permissionOverwrites[i],
        s = m(
            {
                id: i,
                type: u.BN.ROLE,
                allow: f.Hn,
                deny: f.Hn
            },
            l
        );
    n ? ((s.allow = a.IH(s.allow, e)), (s.deny = a.Od(s.deny, e))) : ((s.allow = a.Od(s.allow, e)), (s.deny = a.IH(s.deny, e))), o.Z.updatePermissionOverwrite(t.id, s);
}
async function b(t, e, n, i) {
    if ('' === e) return;
    c.Z.getVoiceChannelId() !== t.id && (0, N.TM)(t);
    let r = await (0, p.me)(t.id, e, n, i);
    return T(t, !1, !0), r;
}
async function P(t, e, n) {
    if ('' !== e) return await (0, p.Dk)(t.id, e, n);
}
async function R(t) {
    await (0, p.Ix)(t.id);
}
