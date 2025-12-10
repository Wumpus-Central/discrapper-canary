n.d(t, {
    DT: () => A,
    Ef: () => D,
    HO: () => R,
    NZ: () => w,
    Pq: () => P,
    Q1: () => S,
    RK: () => T,
    _0: () => I,
    hz: () => N,
    yi: () => C,
});
var r = n(512722),
    i = n.n(r),
    a = n(149765),
    o = n(544891),
    s = n(493683);
n(749210);
var l = n(911969),
    c = n(367907),
    u = n(681678),
    d = n(944486),
    f = n(979651),
    p = n(700785),
    _ = n(922482),
    m = n(192079),
    h = n(706058),
    g = n(590415),
    E = n(430104),
    b = n(981631),
    y = n(484710);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        t && (0, c.yw)(b.rMx.REQUEST_TO_SPEAK_INITIATED, v({}, (0, m.s$)(e))),
        o.tn.patch({
            url: b.ANM.UPDATE_VOICE_STATE(n),
            body: {
                request_to_speak_timestamp: t ? new Date().toISOString() : null,
                channel_id: e.id,
            },
            rejectWithError: !1,
        })
    );
}
function I(e, t) {
    let n = e.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        o.tn
            .patch({
                url: b.ANM.UPDATE_VOICE_STATE(n, t),
                body: {
                    suppress: !1,
                    request_to_speak_timestamp: new Date().toISOString(),
                    channel_id: e.id,
                },
                rejectWithError: !1,
            })
            .catch(
                (e) => (
                    e.code === b.evJ.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.Z.showFailedToast(y.wQ.GENERIC_ERROR),
                    e
                ),
            )
    );
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null == e ? void 0 : e.getGuildId();
    if ((i()(null != r, "This channel cannot be guildless."), !t && (0, E.u1)())) return Promise.resolve();
    let a = f.Z.getVoiceStateForChannel(e.id);
    return (
        (0, g.gf)(a) !== g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ||
            t ||
            (0, c.yw)(b.rMx.PROMOTED_TO_SPEAKER, v({}, (0, m.s$)(e))),
        o.tn.patch({
            url: b.ANM.UPDATE_VOICE_STATE(r),
            body: v(
                {
                    suppress: t,
                    request_to_speak_timestamp: null,
                    channel_id: e.id,
                },
                n ? { silent: n } : {},
            ),
            rejectWithError: !1,
        })
    );
}
function C(e) {
    let t = null == e ? void 0 : e.getGuildId();
    return (
        i()(null != t, "This channel cannot be guildless."),
        o.tn.patch({
            url: b.ANM.UPDATE_VOICE_STATE(t),
            body: {
                suppress: !0,
                channel_id: e.id,
                self_video: !1,
                self_stream: !1,
            },
            rejectWithError: !1,
        })
    );
}
function A(e, t, n) {
    let r = e.getGuildId();
    return (
        i()(null != r, "This channel cannot be guildless."),
        o.tn
            .patch({
                url: b.ANM.UPDATE_VOICE_STATE(r, t),
                body: {
                    suppress: n,
                    channel_id: e.id,
                },
                rejectWithError: !1,
            })
            .catch(
                (e) => (
                    e.code === b.evJ.STAGE_CHANNEL_USER_NOT_ALLOWED_TO_SPEAK && u.Z.showFailedToast(y.wQ.GENERIC_ERROR),
                    e
                ),
            )
    );
}
function N(e, t) {
    if (null == t || null == e) return;
    let n = t.getGuildId();
    return (
        i()(null != n, "This channel cannot be guildless."),
        A(t, e.id, !0),
        o.tn.patch({
            url: b.ANM.UPDATE_VOICE_STATE(n, e.id),
            body: {
                suppress: !0,
                channel_id: t.id,
                self_video: !1,
                self_stream: !1,
            },
            rejectWithError: !1,
        })
    );
}
function P(e, t, n) {
    let r = e.getGuildId();
    i()(null != r, "Channel cannot be guildless");
    let o = e.permissionOverwrites[r],
        c = v(
            {
                id: r,
                type: l.BN.ROLE,
                allow: p.Hn,
                deny: p.Hn,
            },
            o,
        );
    n
        ? ((c.allow = a.IH(c.allow, t)), (c.deny = a.Od(c.deny, t)))
        : ((c.allow = a.Od(c.allow, t)), (c.deny = a.IH(c.deny, t))),
        s.Z.updatePermissionOverwrite(e.id, c);
}
async function R(e, t, n, r) {
    if ("" === t) return;
    d.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
    let i = await (0, h.me)(e.id, t, n, r);
    return T(e, !1, !0), i;
}
async function D(e, t, n) {
    if ("" !== t) return await (0, h.Dk)(e.id, t, n);
}
async function w(e) {
    await (0, h.Ix)(e.id);
}
