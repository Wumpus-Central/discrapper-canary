n.d(e, {
    CW: () => d,
    DF: () => h,
    KA: () => g,
    M1: () => s,
    PM: () => f,
    Pn: () => y,
    Rq: () => E,
    ih: () => S,
    s$: () => _,
    sN: () => u
});
var r = n(367907),
    i = n(221292),
    a = n(592125),
    o = n(626135),
    l = n(981631);
function c(t) {
    var e;
    return null === (e = a.Z.getChannel(t)) || void 0 === e ? void 0 : e.guild_id;
}
function u(t) {
    let { channelId: e, selectedTab: n } = t;
    r.ZP.trackWithMetadata(l.rMx.RTC_PANEL_VIEWED, {
        channel_id: e,
        guild_id: c(e),
        selected_tab: n
    });
}
function E(t) {
    let { channelId: e, userId: n } = t;
    r.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: e,
        guild_id: c(e),
        ...(0, i.QN)({ userId: n })
    });
}
function s(t) {
    let { channelId: e, userId: n, analyticsLocation: a } = t;
    r.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFIED, {
        channel_id: e,
        guild_id: c(e),
        location: a,
        ...(0, i.QN)({ userId: n })
    });
}
function d(t) {
    let { channelId: e, userId: n, keyVersion: a, reason: o } = t;
    r.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: e,
        guild_id: c(e),
        failure_reason: o,
        key_version: ''.concat(a),
        ...(0, i.QN)({ userId: n })
    });
}
function _(t) {
    let { channelId: e, userId: n } = t;
    r.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: c(e),
        ...(0, i.QN)({ userId: n })
    });
}
function f(t) {
    let { channelId: e } = t;
    r.ZP.trackWithMetadata(l.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: c(e)
    });
}
function S(t) {
    let { channelId: e } = t;
    r.ZP.trackWithMetadata(l.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: c(e)
    });
}
function h() {
    o.default.track(l.rMx.E2EE_SETTINGS_USER_DELETE);
}
function y() {
    o.default.track(l.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function g(t) {
    o.default.track(l.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(t) });
}
