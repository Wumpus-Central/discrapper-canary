n.d(t, { Z: () => D });
var i = n(255367);
n(73800);
var r = n(512722),
    s = n.n(r),
    a = n(392711),
    l = n.n(a),
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
    x = n(809357),
    _ = n(371651),
    j = n(624864),
    E = n(957148),
    O = n(556296),
    C = n(808506),
    v = n(237997),
    S = n(626135);
n(63063);
var T = n(13140),
    N = n(981631),
    I = n(388032),
    y = n(967122);
let A = P(null);
function P(e) {
    var t;
    let n = v.default.getNotificationPositionMode(),
        i = n !== N._vf.DISABLED,
        r = O.ZP.getOverlayKeybind(),
        s = O.ZP.getOverlayChatKeybind();
    return {
        enabled: C.default.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: j.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != r ? (0, T.BB)(r.shortcut) : null,
        text_activation_hotkey: null != s ? (0, T.BB)(s.shortcut) : null,
        text_opacity_slider: v.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : C.default.enabled
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
        { oopEnabled: r, legacyEnabled: a } = (0, o.cj)([_.default], () => _.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: C,
            displayNameMode: T,
            displayUserMode: D,
            textChatDisabled: Z,
            notificationPositionMode: w,
            shouldShowKeybindIndicators: k
        } = (0, o.cj)([v.default, j.Z], () => ({
            avatarSizeMode: v.default.getAvatarSizeMode(),
            displayNameMode: v.default.getDisplayNameMode(),
            displayUserMode: v.default.getDisplayUserMode(),
            notificationPositionMode: v.default.getNotificationPositionMode(),
            shouldShowKeybindIndicators: v.default.showKeybindIndicators,
            textChatDisabled: j.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT)
        })),
        L = (0, o.e7)([O.ZP], () => O.ZP.getOverlayKeybind()),
        B = (0, x.Z)({ location: 'overlay_user_settings' }),
        M = (0, p.$1)(),
        U = P(A);
    return (
        l().isEqual(U, A) || (S.default.track(N.rMx.OVERLAY_SETTINGS_UPDATED, U), (A = U)),
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
                                        value: a,
                                        disabled: M,
                                        note: M ? I.intl.string(I.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, r);
                                            let i = null != (n = null == (t = g.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? n : null;
                                            ((0, f.ou)(e, f.AE.LEGACY, i), !e && a && (0, E.l)(f.AE.LEGACY, i));
                                        },
                                        children: I.intl.string(I.t.vSP6c3)
                                    })
                                }),
                                (0, i.jsx)(c.xJW, {
                                    title: I.intl.string(I.t.VsAZcH),
                                    className: y.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !a,
                                        defaultValue: null != L ? L.shortcut : [],
                                        onChange: function (e) {
                                            var t, n;
                                            (s()(null != L, 'Keybind should never be undefined'),
                                                d.Z.setKeybind(
                                                    ((t = (function (e) {
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
                                                ));
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
                                value: C
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
                        B &&
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
                                    let e = j.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT);
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
