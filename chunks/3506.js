n.d(t, { Z: () => D });
var r = n(200651);
n(192379);
var i = n(512722),
    s = n.n(i),
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    m = n(825209),
    g = n(887278),
    p = n(594190),
    h = n(212632),
    f = n(444295),
    b = n(486016),
    N = n(809357),
    x = n(371651),
    _ = n(624864),
    E = n(957148),
    j = n(556296),
    O = n(808506),
    C = n(237997),
    S = n(626135);
n(63063);
var v = n(13140),
    T = n(981631),
    I = n(388032),
    y = n(967122);
let A = P(null);
function P(e) {
    var t;
    let n = C.default.getNotificationPositionMode(),
        r = n !== T._vf.DISABLED,
        i = j.ZP.getOverlayKeybind(),
        s = j.ZP.getOverlayChatKeybind();
    return {
        enabled: O.default.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: _.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        hotkey: null != i ? (0, v.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, v.BB)(s.shortcut) : null,
        text_opacity_slider: C.default.getTextWidgetOpacity(),
        old_enabled: null != (t = null == e ? void 0 : e.enabled) ? t : O.default.enabled
    };
}
function R(e) {
    let { children: t, title: n } = e;
    return (0, r.jsx)(c.xJW, {
        title: n,
        className: y.userSettingsOverlayField,
        children: t
    });
}
function D(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: i, legacyEnabled: a } = (0, o.cj)([x.default], () => x.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: O,
            displayNameMode: v,
            displayUserMode: D,
            textChatDisabled: Z,
            notificationPositionMode: w,
            shouldShowKeybindIndicators: k
        } = (0, o.cj)([C.default, _.Z], () => ({
            avatarSizeMode: C.default.getAvatarSizeMode(),
            displayNameMode: C.default.getDisplayNameMode(),
            displayUserMode: C.default.getDisplayUserMode(),
            notificationPositionMode: C.default.getNotificationPositionMode(),
            shouldShowKeybindIndicators: C.default.showKeybindIndicators,
            textChatDisabled: _.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT)
        })),
        W = (0, o.e7)([j.ZP], () => j.ZP.getOverlayKeybind()),
        L = (0, N.Z)({ location: 'overlay_user_settings' }),
        B = (0, g.$1)(),
        M = P(A);
    return (
        l().isEqual(M, A) || (S.default.track(T.rMx.OVERLAY_SETTINGS_UPDATED, M), (A = M)),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? I.NW.string(I.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, r.jsxs)('div', {
                            className: y.enableOverlaySection,
                            children: [
                                (0, r.jsx)(c.xJW, {
                                    title: I.NW.string(I.t.XkaTrq),
                                    className: y.enableOverlayItem,
                                    children: (0, r.jsx)(c.j7V, {
                                        className: y.enableSwitch,
                                        value: a,
                                        disabled: B,
                                        note: B ? I.NW.string(I.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, i);
                                            let r = null != (n = null == (t = p.ZP.getCurrentGameForAnalytics()) ? void 0 : t.id) ? n : null;
                                            (0, f.ou)(e, f.AE.LEGACY, r), !e && a && (0, E.l)(f.AE.LEGACY, r);
                                        },
                                        children: I.NW.string(I.t.vSP6c3)
                                    })
                                }),
                                (0, r.jsx)(c.xJW, {
                                    title: I.NW.string(I.t.VsAZcH),
                                    className: y.enableOverlayItem,
                                    children: (0, r.jsx)(m.Z, {
                                        disabled: !a,
                                        defaultValue: null != W ? W.shortcut : [],
                                        onChange: function (e) {
                                            var t, n;
                                            s()(null != W, 'Keybind should never be undefined'),
                                                d.Z.setKeybind(
                                                    ((t = (function (e) {
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
                                                    })({}, W)),
                                                    (n = n = { shortcut: e }),
                                                    Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                        : (function (e, t) {
                                                              var n = Object.keys(e);
                                                              if (Object.getOwnPropertySymbols) {
                                                                  var r = Object.getOwnPropertySymbols(e);
                                                                  n.push.apply(n, r);
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
                        (0, r.jsx)(R, {
                            title: I.NW.string(I.t.dnvZSk),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: I.NW.string(I.t.YcOxtr),
                                        value: T.ipw.LARGE
                                    },
                                    {
                                        name: I.NW.string(I.t.BKIKq6),
                                        value: T.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: O
                            })
                        }),
                        (0, r.jsx)(R, {
                            title: I.NW.string(I.t.J0dpcH),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: I.NW.string(I.t.nBmDra),
                                        value: T.wC$.ALWAYS
                                    },
                                    {
                                        name: I.NW.string(I.t['2OvIZW']),
                                        value: T.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: I.NW.string(I.t.ekjlPD),
                                        value: T.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: v
                            })
                        }),
                        (0, r.jsx)(R, {
                            title: I.NW.string(I.t.swsWWF),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: I.NW.string(I.t.nBmDra),
                                        value: T.OYC.ALWAYS
                                    },
                                    {
                                        name: I.NW.string(I.t['2OvIZW']),
                                        value: T.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: D
                            })
                        }),
                        L &&
                            (0, r.jsx)(R, {
                                children: (0, r.jsx)(c.j7V, {
                                    value: k,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: I.NW.string(I.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, r.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: I.NW.string(I.t['3GMnLi']),
                    className: y.notificationSection,
                    children: [
                        (0, r.jsx)(R, {
                            title: I.NW.string(I.t.IQv8Eh),
                            children: (0, r.jsx)('div', {
                                className: y.notificationSettings,
                                children: (0, r.jsx)(h.Z, {
                                    position: w,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, r.jsx)(R, {
                            children: (0, r.jsx)(c.j7V, {
                                value: w !== T._vf.DISABLED && !Z,
                                disabled: w === T._vf.DISABLED,
                                onChange: function () {
                                    let e = _.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT);
                                    u.Z.setNotificationDisabledSetting(b.OverlayNotificationDisabledSetting.TEXT_CHAT, !e);
                                },
                                hideBorder: !0,
                                children: I.NW.string(I.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
