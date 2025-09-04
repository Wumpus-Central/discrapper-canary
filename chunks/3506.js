n.d(t, { Z: () => G });
var r = n(951288);
n(647438);
var i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(660216),
    f = n(13245),
    _ = n(825209),
    p = n(887278),
    h = n(594190),
    m = n(212632),
    g = n(444295),
    E = n(486016),
    b = n(809357),
    y = n(371651),
    O = n(624864),
    v = n(957148),
    I = n(556296),
    S = n(808506),
    T = n(237997),
    A = n(626135);
n(63063);
var C = n(13140),
    N = n(981631),
    R = n(388032),
    P = n(703943);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = k(null);
function M() {
    let e = k(j);
    s().isEqual(e, j) || (A.default.track(N.rMx.OVERLAY_SETTINGS_UPDATED, e), (j = e));
}
function k(e) {
    var t;
    let n = T.default.getNotificationPositionMode(),
        r = n !== N._vf.DISABLED,
        i = I.ZP.getOverlayKeybind(),
        a = I.ZP.getOverlayChatKeybind();
    return {
        enabled: S.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: O.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        hotkey: null != i ? (0, C.BB)(i.shortcut) : null,
        text_activation_hotkey: null != a ? (0, C.BB)(a.shortcut) : null,
        text_opacity_slider: T.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : S.default.enabled,
    };
}
function U(e) {
    let { children: t, title: n } = e;
    return (0, r.jsx)(u.xJW, {
        title: n,
        className: P.userSettingsOverlayField,
        children: t,
    });
}
function G(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: i, legacyEnabled: o } = (0, l.cj)([y.default], () => y.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: s,
            displayNameMode: S,
            displayUserMode: A,
            textChatDisabled: C,
            notificationPositionMode: w,
            shouldShowKeybindIndicators: x,
        } = (0, l.cj)([T.default, O.Z], () => ({
            avatarSizeMode: T.default.getAvatarSizeMode(),
            displayNameMode: T.default.getDisplayNameMode(),
            displayUserMode: T.default.getDisplayUserMode(),
            notificationPositionMode: T.default.getNotificationPositionMode(),
            shouldShowKeybindIndicators: T.default.showKeybindIndicators,
            textChatDisabled: O.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT),
        })),
        j = (0, l.e7)([I.ZP], () => I.ZP.getOverlayKeybind()),
        k = (0, b.Z)({ location: "overlay_user_settings" }),
        G = (0, p.$1)();
    function B(e) {
        var t, n;
        f.Z.setEnabled(e, i);
        let r = null != (n = null == (t = h.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? n : null;
        (0, g.ou)(e, g.AE.LEGACY, r), !e && o && (0, v.l)(g.AE.LEGACY, r);
    }
    function Z() {
        let e = O.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT);
        f.Z.setNotificationDisabledSetting(E.OverlayNotificationDisabledSetting.TEXT_CHAT, !e);
    }
    function F(e) {
        a()(null != j, "Keybind should never be undefined"), d.Z.setKeybind(L(D({}, j), { shortcut: e }));
    }
    return (
        M(),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(u.hjN, {
                    className: t,
                    tag: u.RB0.H1,
                    title: n ? R.intl.string(R.t["9cb1U1"]) : null,
                    children: [
                        !1,
                        (0, r.jsxs)("div", {
                            className: P.enableOverlaySection,
                            children: [
                                (0, r.jsx)(u.xJW, {
                                    title: R.intl.string(R.t.XkaTrq),
                                    className: P.enableOverlayItem,
                                    children: (0, r.jsx)(u.j7V, {
                                        className: P.enableSwitch,
                                        value: o,
                                        disabled: G,
                                        note: G ? R.intl.string(R.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: B,
                                        children: R.intl.string(R.t.vSP6c3),
                                    }),
                                }),
                                (0, r.jsx)(u.xJW, {
                                    title: R.intl.string(R.t.VsAZcH),
                                    className: P.enableOverlayItem,
                                    children: (0, r.jsx)(_.Z, {
                                        disabled: !o,
                                        defaultValue: null != j ? j.shortcut : [],
                                        onChange: F,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(U, {
                            title: R.intl.string(R.t.dnvZSk),
                            children: (0, r.jsx)(c.Gu, {
                                options: [
                                    {
                                        name: R.intl.string(R.t.YcOxtr),
                                        value: N.ipw.LARGE,
                                    },
                                    {
                                        name: R.intl.string(R.t.BKIKq6),
                                        value: N.ipw.SMALL,
                                    },
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return f.Z.setAvatarSizeMode(t);
                                },
                                value: s,
                            }),
                        }),
                        (0, r.jsx)(U, {
                            title: R.intl.string(R.t.J0dpcH),
                            children: (0, r.jsx)(c.Gu, {
                                options: [
                                    {
                                        name: R.intl.string(R.t.nBmDra),
                                        value: N.wC$.ALWAYS,
                                    },
                                    {
                                        name: R.intl.string(R.t["2OvIZW"]),
                                        value: N.wC$.ONLY_WHILE_SPEAKING,
                                    },
                                    {
                                        name: R.intl.string(R.t.ekjlPD),
                                        value: N.wC$.NEVER,
                                    },
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return f.Z.setDisplayNameMode(t);
                                },
                                value: S,
                            }),
                        }),
                        (0, r.jsx)(U, {
                            title: R.intl.string(R.t.swsWWF),
                            children: (0, r.jsx)(c.Gu, {
                                options: [
                                    {
                                        name: R.intl.string(R.t.nBmDra),
                                        value: N.OYC.ALWAYS,
                                    },
                                    {
                                        name: R.intl.string(R.t["2OvIZW"]),
                                        value: N.OYC.ONLY_WHILE_SPEAKING,
                                    },
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return f.Z.setDisplayUserMode(t);
                                },
                                value: A,
                            }),
                        }),
                        k &&
                            (0, r.jsx)(U, {
                                children: (0, r.jsx)(u.j7V, {
                                    value: x,
                                    onChange: (e) => f.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: R.intl.string(R.t.XZTl9v),
                                }),
                            }),
                    ],
                }),
                (0, r.jsxs)(u.hjN, {
                    tag: u.RB0.H1,
                    title: R.intl.string(R.t["3GMnLi"]),
                    className: P.notificationSection,
                    children: [
                        (0, r.jsx)(U, {
                            title: R.intl.string(R.t.IQv8Eh),
                            children: (0, r.jsx)("div", {
                                className: P.notificationSettings,
                                children: (0, r.jsx)(m.Z, {
                                    position: w,
                                    onChange: (e, t) => f.Z.setNotificationPositionMode(t),
                                }),
                            }),
                        }),
                        (0, r.jsx)(U, {
                            children: (0, r.jsx)(u.j7V, {
                                value: w !== N._vf.DISABLED && !C,
                                disabled: w === N._vf.DISABLED,
                                onChange: Z,
                                hideBorder: !0,
                                children: R.intl.string(R.t.Fy5kPj),
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
