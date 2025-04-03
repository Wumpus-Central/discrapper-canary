n.d(t, {
    CW: () => f,
    DF: () => h,
    KA: () => g,
    M1: () => d,
    PM: () => S,
    Pn: () => p,
    Rq: () => E,
    ih: () => y,
    s$: () => _,
    sN: () => s
});
var r = n(367907),
    i = n(221292),
    a = n(592125),
    o = n(626135),
    c = n(981631);
function u(e) {
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
function l(e) {
    var t;
    return null == (t = a.Z.getChannel(e)) ? void 0 : t.guild_id;
}
function s(e) {
    let { channelId: t, selectedTab: n } = e;
    r.ZP.trackWithMetadata(c.rMx.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: l(t),
        selected_tab: n
    });
}
function E(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(
        c.rMx.E2EE_USER_VERIFICATION_VIEWED,
        u(
            {
                channel_id: t,
                guild_id: l(t)
            },
            (0, i.QN)({ userId: n })
        )
    );
}
function d(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.ZP.trackWithMetadata(
        c.rMx.E2EE_USER_VERIFIED,
        u(
            {
                channel_id: t,
                guild_id: l(t),
                location: a
            },
            (0, i.QN)({ userId: n })
        )
    );
}
function f(e) {
    let { channelId: t, userId: n, keyVersion: a, reason: o } = e;
    r.ZP.trackWithMetadata(
        c.rMx.E2EE_USER_VERIFICATION_FAILED,
        u(
            {
                channel_id: t,
                guild_id: l(t),
                failure_reason: o,
                key_version: ''.concat(a)
            },
            (0, i.QN)({ userId: n })
        )
    );
}
function _(e) {
    let { channelId: t, userId: n } = e;
    r.ZP.trackWithMetadata(
        c.rMx.E2EE_USER_VERIFICATION_CODE_COPIED,
        u(
            {
                channel_id: t,
                guild_id: l(t)
            },
            (0, i.QN)({ userId: n })
        )
    );
}
function S(e) {
    let { channelId: t } = e;
    r.ZP.trackWithMetadata(c.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: l(t)
    });
}
function y(e) {
    let { channelId: t } = e;
    r.ZP.trackWithMetadata(c.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: l(t)
    });
}
function h() {
    o.default.track(c.rMx.E2EE_SETTINGS_USER_DELETE);
}
function p() {
    o.default.track(c.rMx.E2EE_SETTINGS_DEVICE_DELETE);
}
function g(e) {
    o.default.track(c.rMx.E2EE_PUBLIC_KEY_MISMATCH, { key_version: ''.concat(e) });
}
