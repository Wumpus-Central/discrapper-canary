n.d(t, {
    DT: () => f,
    Ef: () => P,
    HO: () => m,
    NZ: () => y,
    Pq: () => R,
    Q1: () => g,
    RK: () => S,
    _0: () => O,
    hz: () => A,
    yi: () => N
});
var i = n(512722),
    r = n.n(i),
    l = n(149765),
    o = n(544891),
    s = n(493683);
n(749210);
var a = n(911969),
    c = n(367907),
    d = n(944486),
    u = n(979651),
    _ = n(700785),
    E = n(922482),
    h = n(192079),
    I = n(706058),
    p = n(590415),
    C = n(981631);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function g(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        t && (0, c.yw)(C.rMx.REQUEST_TO_SPEAK_INITIATED, T({}, (0, h.s$)(e))),
        o.tn.patch({
            url: C.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function O(e, t) {
    let n = e.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: C.ANM.UPDATE_VOICE_STATE(n, t),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null == e ? void 0 : e.getGuildId();
    r()(null != i, 'This channel cannot be guildless.');
    let l = u.Z.getVoiceStateForChannel(e.id);
    return (
        (0, p.gf)(l) !== p.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || t || (0, c.yw)(C.rMx.PROMOTED_TO_SPEAKER, T({}, (0, h.s$)(e))),
        o.tn.patch({
            url: C.ANM.UPDATE_VOICE_STATE(i),
            body: T(
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
function N(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        r()(null != t, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: C.ANM.UPDATE_VOICE_STATE(t),
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
function f(e, t, n) {
    let i = e.getGuildId();
    return (
        r()(null != i, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: C.ANM.UPDATE_VOICE_STATE(i, t),
            body: {
                suppress: n,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function A(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        r()(null != n, 'This channel cannot be guildless.'),
        f(t, e.id, !0),
        o.tn.patch({
            url: C.ANM.UPDATE_VOICE_STATE(n, e.id),
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
    let i = e.getGuildId();
    r()(null != i, 'Channel cannot be guildless');
    let o = e.permissionOverwrites[i],
        c = T(
            {
                id: i,
                type: a.BN.ROLE,
                allow: _.Hn,
                deny: _.Hn
            },
            o
        );
    (n ? ((c.allow = l.IH(c.allow, t)), (c.deny = l.Od(c.deny, t))) : ((c.allow = l.Od(c.allow, t)), (c.deny = l.IH(c.deny, t))), s.Z.updatePermissionOverwrite(e.id, c));
}
async function m(e, t, n, i) {
    if ('' === t) return;
    d.Z.getVoiceChannelId() !== e.id && (0, E.TM)(e);
    let r = await (0, I.me)(e.id, t, n, i);
    return (S(e, !1, !0), r);
}
async function P(e, t, n) {
    if ('' !== t) return await (0, I.Dk)(e.id, t, n);
}
async function y(e) {
    await (0, I.Ix)(e.id);
}
