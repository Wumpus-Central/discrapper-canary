n.d(t, { Z: () => U });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(660216),
    d = n(13245),
    f = n(825209),
    _ = n(887278),
    p = n(594190),
    h = n(212632),
    m = n(444295),
    g = n(486016),
    E = n(809357),
    b = n(371651),
    y = n(624864),
    O = n(957148),
    v = n(556296),
    I = n(808506),
    T = n(237997),
    S = n(626135);
n(63063);
var A = n(13140),
    C = n(981631),
    N = n(388032),
    R = n(703943);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = M(null);
function j() {
    let e = M(L);
    s().isEqual(e, L) || (S.default.track(C.rMx.OVERLAY_SETTINGS_UPDATED, e), (L = e));
}
function M(e) {
    var t;
    let n = T.default.getNotificationPositionMode(),
        r = n !== C._vf.DISABLED,
        i = v.ZP.getOverlayKeybind(),
        a = v.ZP.getOverlayChatKeybind();
    return {
        enabled: I.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, A.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, A.BB)(a.shortcut) : null,
        text_opacity_slider: T.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : I.default.enabled,
    };
}
function k(e) {
    let { children: t, title: n } = e;
    return (0, r.jsx)(c.xJW, {
        title: n,
        className: R.userSettingsOverlayField,
        children: t,
    });
}
function U(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: i, legacyEnabled: o } = (0, l.cj)([b.default], () => b.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: s,
            displayNameMode: I,
            displayUserMode: S,
            textChatDisabled: A,
            notificationPositionMode: P,
            shouldShowKeybindIndicators: D,
        } = (0, l.cj)([T.default, y.Z], () => ({
            avatarSizeMode: T.default.getAvatarSizeMode(),
            displayNameMode: T.default.getDisplayNameMode(),
            displayUserMode: T.default.getDisplayUserMode(),
            notificationPositionMode: T.default.getNotificationPositionMode(),
            shouldShowKeybindIndicators: T.default.showKeybindIndicators,
            textChatDisabled: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
        })),
        L = (0, l.e7)([v.ZP], () => v.ZP.getOverlayKeybind()),
        M = (0, E.Z)({ location: "overlay_user_settings" }),
        U = (0, _.$1)();
    function G(e) {
        var t, n;
        d.Z.setEnabled(e, i);
        let r = null != (n = null == (t = p.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? n : null;
        (0, m.ou)(e, m.AE.LEGACY, r), !e && o && (0, O.l)(m.AE.LEGACY, r);
    }
    function B() {
        let e = y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT);
        d.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !e);
    }
    function Z(e) {
        a()(null != L, "Keybind should never be undefined"), u.Z.setKeybind(x(w({}, L), { shortcut: e }));
    }
    return (
        j(),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? N.intl.string(N.t["9cb1U1"]) : null,
                    children: [
                        !1,
                        (0, r.jsxs)("div", {
                            className: R.enableOverlaySection,
                            children: [
                                (0, r.jsx)(c.xJW, {
                                    title: N.intl.string(N.t.XkaTrq),
                                    className: R.enableOverlayItem,
                                    children: (0, r.jsx)(c.j7V, {
                                        className: R.enableSwitch,
                                        value: o,
                                        disabled: U,
                                        note: U ? N.intl.string(N.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: G,
                                        children: N.intl.string(N.t.vSP6c3),
                                    }),
                                }),
                                (0, r.jsx)(c.xJW, {
                                    title: N.intl.string(N.t.VsAZcH),
                                    className: R.enableOverlayItem,
                                    children: (0, r.jsx)(f.Z, {
                                        disabled: !o,
                                        defaultValue: null != L ? L.shortcut : [],
                                        onChange: Z,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(k, {
                            title: N.intl.string(N.t.dnvZSk),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: N.intl.string(N.t.YcOxtr),
                                        value: C.ipw.LARGE,
                                    },
                                    {
                                        name: N.intl.string(N.t.BKIKq6),
                                        value: C.ipw.SMALL,
                                    },
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return d.Z.setAvatarSizeMode(t);
                                },
                                value: s,
                            }),
                        }),
                        (0, r.jsx)(k, {
                            title: N.intl.string(N.t.J0dpcH),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: N.intl.string(N.t.nBmDra),
                                        value: C.wC$.ALWAYS,
                                    },
                                    {
                                        name: N.intl.string(N.t["2OvIZW"]),
                                        value: C.wC$.ONLY_WHILE_SPEAKING,
                                    },
                                    {
                                        name: N.intl.string(N.t.ekjlPD),
                                        value: C.wC$.NEVER,
                                    },
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return d.Z.setDisplayNameMode(t);
                                },
                                value: I,
                            }),
                        }),
                        (0, r.jsx)(k, {
                            title: N.intl.string(N.t.swsWWF),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: N.intl.string(N.t.nBmDra),
                                        value: C.OYC.ALWAYS,
                                    },
                                    {
                                        name: N.intl.string(N.t["2OvIZW"]),
                                        value: C.OYC.ONLY_WHILE_SPEAKING,
                                    },
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return d.Z.setDisplayUserMode(t);
                                },
                                value: S,
                            }),
                        }),
                        M &&
                            (0, r.jsx)(k, {
                                children: (0, r.jsx)(c.j7V, {
                                    value: D,
                                    onChange: (e) => d.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: N.intl.string(N.t.XZTl9v),
                                }),
                            }),
                    ],
                }),
                (0, r.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: N.intl.string(N.t["3GMnLi"]),
                    className: R.notificationSection,
                    children: [
                        (0, r.jsx)(k, {
                            title: N.intl.string(N.t.IQv8Eh),
                            children: (0, r.jsx)("div", {
                                className: R.notificationSettings,
                                children: (0, r.jsx)(h.Z, {
                                    position: P,
                                    onChange: (e, t) => d.Z.setNotificationPositionMode(t),
                                }),
                            }),
                        }),
                        (0, r.jsx)(k, {
                            children: (0, r.jsx)(c.j7V, {
                                value: P !== C._vf.DISABLED && !A,
                                disabled: P === C._vf.DISABLED,
                                onChange: B,
                                hideBorder: !0,
                                children: N.intl.string(N.t.Fy5kPj),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
