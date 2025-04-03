t.d(n, {
    DT: () => Z,
    Ef: () => S,
    HO: () => N,
    NZ: () => P,
    Pq: () => T,
    Q1: () => O,
    RK: () => v,
    _0: () => y,
    hz: () => j,
    yi: () => E
});
var r = t(512722),
    i = t.n(r),
    l = t(149765),
    o = t(544891),
    a = t(493683);
t(749210);
var s = t(911969),
    c = t(367907),
    u = t(944486),
    d = t(979651),
    f = t(700785),
    p = t(922482),
    g = t(192079),
    h = t(706058),
    b = t(590415),
    m = t(981631);
function _(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function O(e, n) {
    let t = e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        n && (0, c.yw)(m.rMx.REQUEST_TO_SPEAK_INITIATED, _({}, (0, g.s$)(e))),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(t),
            body: {
                request_to_speak_timestamp: n ? new Date().toISOString() : null,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function y(e, n) {
    let t = e.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
                suppress: !1,
                request_to_speak_timestamp: new Date().toISOString(),
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function v(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == e ? void 0 : e.getGuildId();
    i()(null != r, 'This channel cannot be guildless.');
    let l = d.Z.getVoiceStateForChannel(e.id);
    return (
        (0, b.gf)(l) !== b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK || n || (0, c.yw)(m.rMx.PROMOTED_TO_SPEAKER, _({}, (0, g.s$)(e))),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(r),
            body: _(
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
function E(e) {
    let n = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != n, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(n),
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
function Z(e, n, t) {
    let r = e.getGuildId();
    return (
        i()(null != r, 'This channel cannot be guildless.'),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(r, n),
            body: {
                suppress: t,
                channel_id: e.id
            },
            rejectWithError: !1
        })
    );
}
function j(e, n) {
    if (null == n || null == e) return;
    let t = n.getGuildId();
    return (
        i()(null != t, 'This channel cannot be guildless.'),
        Z(n, e.id, !0),
        o.tn.patch({
            url: m.ANM.UPDATE_VOICE_STATE(t, e.id),
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
    let r = e.getGuildId();
    i()(null != r, 'Channel cannot be guildless');
    let o = e.permissionOverwrites[r],
        c = _(
            {
                id: r,
                type: s.BN.ROLE,
                allow: f.Hn,
                deny: f.Hn
            },
            o
        );
    t ? ((c.allow = l.IH(c.allow, n)), (c.deny = l.Od(c.deny, n))) : ((c.allow = l.Od(c.allow, n)), (c.deny = l.IH(c.deny, n))), a.Z.updatePermissionOverwrite(e.id, c);
}
async function N(e, n, t, r) {
    if ('' === n) return;
    u.Z.getVoiceChannelId() !== e.id && (0, p.TM)(e);
    let i = await (0, h.me)(e.id, n, t, r);
    return v(e, !1, !0), i;
}
async function S(e, n, t) {
    if ('' !== n) return await (0, h.Dk)(e.id, n, t);
}
async function P(e) {
    await (0, h.Ix)(e.id);
}
