n.d(t, { Z: () => D });
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    m = n(825209),
    p = n(887278),
    g = n(594190),
    h = n(212632),
    f = n(444295),
    b = n(486016),
    _ = n(809357),
    x = n(371651),
    E = n(624864),
    j = n(957148),
    C = n(556296),
    O = n(808506),
    S = n(237997),
    v = n(626135);
n(63063);
var T = n(13140),
    N = n(981631),
    I = n(388032),
    y = n(967122);
let A = P(null);
function P(e) {
    var t;
    let n = S.default.getNotificationPositionMode(),
        i = n !== N._vf.DISABLED,
        r = C.ZP.getOverlayKeybind(),
        s = C.ZP.getOverlayChatKeybind();
    return {
        enabled: O.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: E.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != r ? (0, T.BB)(r.shortcut) : null,
        text_activation_hotkey: null != s ? (0, T.BB)(s.shortcut) : null,
        text_opacity_slider: S.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : O.default.enabled
    };
}
function R(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.xJW, {
        title: n,
        className: y.userSettingsOverlayField,
        children: t
    });
}
function D(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: r, legacyEnabled: l } = (0, o.cj)([x.default], () => x.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: O,
            displayNameMode: T,
            displayUserMode: D,
            textChatDisabled: Z,
            notificationPositionMode: w,
            shouldShowKeybindIndicators: k
        } = (0, o.cj)([S.default, E.Z], () => ({
            avatarSizeMode: S.default.getAvatarSizeMode(),
            displayNameMode: S.default.getDisplayNameMode(),
            displayUserMode: S.default.getDisplayUserMode(),
            notificationPositionMode: S.default.getNotificationPositionMode(),
            shouldShowKeybindIndicators: S.default.showKeybindIndicators,
            textChatDisabled: E.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT)
        })),
        L = (0, o.e7)([C.ZP], () => C.ZP.getOverlayKeybind()),
        M = (0, _.Z)({ location: 'overlay_user_settings' }),
        B = (0, p.$1)(),
        U = P(A);
    return (
        a().isEqual(U, A) || (v.default.track(N.rMx.OVERLAY_SETTINGS_UPDATED, U), (A = U)),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? I.intl.string(I.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: y.enableOverlaySection,
                            children: [
                                (0, i.jsx)(c.xJW, {
                                    title: I.intl.string(I.t.XkaTrq),
                                    className: y.enableOverlayItem,
                                    children: (0, i.jsx)(c.j7V, {
                                        className: y.enableSwitch,
                                        value: l,
                                        disabled: B,
                                        note: B ? I.intl.string(I.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, r);
                                            let i = null != (n = null == (t = g.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? n : null;
                                            (0, f.ou)(e, f.AE.LEGACY, i), !e && l && (0, j.l)(f.AE.LEGACY, i);
                                        },
                                        children: I.intl.string(I.t.vSP6c3)
                                    })
                                }),
                                (0, i.jsx)(c.xJW, {
                                    title: I.intl.string(I.t.VsAZcH),
                                    className: y.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !l,
                                        defaultValue: null != L ? L.shortcut : [],
                                        onChange: function (e) {
                                            var t, n;
                                            s()(null != L, 'Keybind should never be undefined'),
                                                d.Z.setKeybind(
                                                    ((t = (function (e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                i = Object.keys(n);
                                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                                (i = i.concat(
                                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                                    })
                                                                )),
                                                                i.forEach(function (t) {
                                                                    var i;
                                                                    (i = n[t]),
                                                                        t in e
                                                                            ? Object.defineProperty(e, t, {
                                                                                  value: i,
                                                                                  enumerable: !0,
                                                                                  configurable: !0,
                                                                                  writable: !0
                                                                              })
                                                                            : (e[t] = i);
                                                                });
                                                        }
                                                        return e;
                                                    })({}, L)),
                                                    (n = n = { shortcut: e }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var i = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, i);
                                                              }
                                                              return n;
                                                          })(Object(n)).forEach(function (e) {
                                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                          }),
                                                    t)
                                                );
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(R, {
                            title: I.intl.string(I.t.dnvZSk),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.YcOxtr),
                                        value: N.ipw.LARGE
                                    },
                                    {
                                        name: I.intl.string(I.t.BKIKq6),
                                        value: N.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: O
                            })
                        }),
                        (0, i.jsx)(R, {
                            title: I.intl.string(I.t.J0dpcH),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.nBmDra),
                                        value: N.wC$.ALWAYS
                                    },
                                    {
                                        name: I.intl.string(I.t['2OvIZW']),
                                        value: N.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: I.intl.string(I.t.ekjlPD),
                                        value: N.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: T
                            })
                        }),
                        (0, i.jsx)(R, {
                            title: I.intl.string(I.t.swsWWF),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.nBmDra),
                                        value: N.OYC.ALWAYS
                                    },
                                    {
                                        name: I.intl.string(I.t['2OvIZW']),
                                        value: N.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: D
                            })
                        }),
                        M &&
                            (0, i.jsx)(R, {
                                children: (0, i.jsx)(c.j7V, {
                                    value: k,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: I.intl.string(I.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: I.intl.string(I.t['3GMnLi']),
                    className: y.notificationSection,
                    children: [
                        (0, i.jsx)(R, {
                            title: I.intl.string(I.t.IQv8Eh),
                            children: (0, i.jsx)('div', {
                                className: y.notificationSettings,
                                children: (0, i.jsx)(h.Z, {
                                    position: w,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, i.jsx)(R, {
                            children: (0, i.jsx)(c.j7V, {
                                value: w !== N._vf.DISABLED && !Z,
                                disabled: w === N._vf.DISABLED,
                                onChange: function () {
                                    let e = E.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT);
                                    u.Z.setNotificationDisabledSetting(b.OverlayNotificationDisabledSetting.TEXT_CHAT, !e);
                                },
                                hideBorder: !0,
                                children: I.intl.string(I.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
