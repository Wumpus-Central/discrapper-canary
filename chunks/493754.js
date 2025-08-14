n.d(t, {
    W: () => S,
    Z: () => A,
});
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(512722),
    s = n.n(a),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(924301),
    f = n(786915),
    _ = n(430824),
    p = n(496675),
    h = n(981631),
    m = n(388032),
    g = n(676651);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function T(e, t) {
    return null != e && null != t && p.Z.can(h.Plq.CREATE_INSTANT_INVITE, t);
}
function S(e) {
    let {
        guild: t,
        channel: i,
        streamUserId: o,
        applicationId: a,
        appContext: s,
        exitFullScreen: l,
        analyticsLocation: c,
        guildScheduledEvent: d,
    } = e;
    null == l || l(),
        (0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("7654"), n.e("49049"), n.e("53020")]).then(
                    n.bind(n, 560114),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        O(b({}, n), {
                            guild: t,
                            channel: i,
                            streamUserId: o,
                            applicationId: a,
                            analyticsLocation: c,
                            source: i.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
                            guildScheduledEvent: d,
                        }),
                    );
            },
            {
                modalKey: "stream-invite-modal",
                contextKey: s === h.IlC.POPOUT ? u.u1M : u.z1l,
            },
        );
}
function A(e) {
    var t,
        {
            stream: n,
            applicationId: i,
            channel: a,
            exitFullScreen: u,
            appContext: p,
            analyticsLocation: h,
            className: E,
        } = e,
        y = v(e, [
            "stream",
            "applicationId",
            "channel",
            "exitFullScreen",
            "appContext",
            "analyticsLocation",
            "className",
        ]);
    let I = null == a ? void 0 : a.getGuildId(),
        A = null == a ? void 0 : a.id,
        N = (0, l.e7)([_.Z], () => (null != I ? _.Z.getGuild(I) : null), [I]),
        C = (0, l.e7)([d.ZP], () => d.ZP.getActiveEventByChannel(A), [A]);
    if (!T(N, a)) return null;
    let R = m.intl.string(m.t.VINpSE);
    return (
        null != n ? (R = m.intl.string(m.t["6VQaqa"])) : null != i && (R = m.intl.string(m.t["OzOM/v"])),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    c.zx,
                    O(
                        b(
                            {
                                size: null != (t = y.size) ? t : c.zx.Sizes.SMALL,
                                color: g.buttonColor,
                                onClick: () => {
                                    s()(null != N, "guild cannot be null"),
                                        s()(null != a, "channel cannot be null"),
                                        S({
                                            guild: N,
                                            channel: a,
                                            streamUserId: null == n ? void 0 : n.ownerId,
                                            applicationId: i,
                                            appContext: p,
                                            exitFullScreen: u,
                                            analyticsLocation: h,
                                            guildScheduledEvent: C,
                                        });
                                },
                                className: o()(E, g.textButton),
                            },
                            y,
                        ),
                        { children: R },
                    ),
                ),
                (0, r.jsx)(f.Z, {
                    channel: a,
                    stream: n,
                    appContext: p,
                    className: o()(E, g.iconButton),
                    exitFullScreen: u,
                    analyticsLocation: h,
                    guildScheduledEvent: C,
                }),
            ],
        })
    );
}
