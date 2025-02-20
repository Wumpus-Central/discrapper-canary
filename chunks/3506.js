n.d(t, { Z: () => A });
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
    b = n(809357),
    N = n(371651),
    x = n(556296),
    _ = n(808506),
    E = n(237997),
    j = n(626135);
n(63063);
var C = n(13140),
    O = n(981631),
    v = n(388032),
    S = n(957545);
let T = I(null);
function I(e) {
    var t;
    let n = E.Z.getNotificationPositionMode(),
        r = n !== O._vf.DISABLED,
        i = x.ZP.getOverlayKeybind(),
        s = x.ZP.getOverlayChatKeybind();
    return {
        enabled: _.Z.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: E.Z.getTextChatNotificationMode(),
        hotkey: null != i ? (0, C.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, C.BB)(s.shortcut) : null,
        text_opacity_slider: E.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : _.Z.enabled
    };
}
function y(e) {
    let { children: t, title: n } = e;
    return (0, r.jsx)(c.xJW, {
        title: n,
        className: S.userSettingsOverlayField,
        children: t
    });
}
function A(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: i, legacyEnabled: a } = (0, o.cj)([N.default], () => N.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: _,
            displayNameMode: C,
            displayUserMode: A,
            notificationPositionMode: P,
            textChatNotificationMode: R,
            shouldShowKeybindIndicators: D
        } = (0, o.cj)([E.Z], () => ({
            avatarSizeMode: E.Z.getAvatarSizeMode(),
            displayNameMode: E.Z.getDisplayNameMode(),
            displayUserMode: E.Z.getDisplayUserMode(),
            notificationPositionMode: E.Z.getNotificationPositionMode(),
            textChatNotificationMode: E.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: E.Z.showKeybindIndicators
        })),
        Z = (0, o.e7)([x.ZP], () => x.ZP.getOverlayKeybind()),
        w = (0, b.Z)({ location: 'overlay_user_settings' }),
        k = (0, g.$1)();
    return (
        !(function () {
            let e = I(T);
            l().isEqual(e, T) || (j.default.track(O.rMx.OVERLAY_SETTINGS_UPDATED, e), (T = e));
        })(),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? v.NW.string(v.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, r.jsxs)('div', {
                            className: S.enableOverlaySection,
                            children: [
                                (0, r.jsx)(c.xJW, {
                                    title: v.NW.string(v.t.XkaTrq),
                                    className: S.enableOverlayItem,
                                    children: (0, r.jsx)(c.j7V, {
                                        className: S.enableSwitch,
                                        value: a,
                                        disabled: k,
                                        note: k ? v.NW.string(v.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, i), (0, f.ou)(e, f.AE.LEGACY, null !== (n = null === (t = p.ZP.getCurrentGameForAnalytics()) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null);
                                        },
                                        children: v.NW.string(v.t.vSP6c3)
                                    })
                                }),
                                (0, r.jsx)(c.xJW, {
                                    title: v.NW.string(v.t.VsAZcH),
                                    className: S.enableOverlayItem,
                                    children: (0, r.jsx)(m.Z, {
                                        disabled: !a,
                                        defaultValue: null != Z ? Z.shortcut : [],
                                        onChange: function (e) {
                                            var t, n;
                                            s()(null != Z, 'Keybind should never be undefined'),
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
                                                    })({}, Z)),
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
                        (0, r.jsx)(y, {
                            title: v.NW.string(v.t.dnvZSk),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: v.NW.string(v.t.YcOxtr),
                                        value: O.ipw.LARGE
                                    },
                                    {
                                        name: v.NW.string(v.t.BKIKq6),
                                        value: O.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: _
                            })
                        }),
                        (0, r.jsx)(y, {
                            title: v.NW.string(v.t.J0dpcH),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: v.NW.string(v.t.nBmDra),
                                        value: O.wC$.ALWAYS
                                    },
                                    {
                                        name: v.NW.string(v.t['2OvIZW']),
                                        value: O.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: v.NW.string(v.t.ekjlPD),
                                        value: O.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: C
                            })
                        }),
                        (0, r.jsx)(y, {
                            title: v.NW.string(v.t.swsWWF),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: v.NW.string(v.t.nBmDra),
                                        value: O.OYC.ALWAYS
                                    },
                                    {
                                        name: v.NW.string(v.t['2OvIZW']),
                                        value: O.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: A
                            })
                        }),
                        w &&
                            (0, r.jsx)(y, {
                                children: (0, r.jsx)(c.j7V, {
                                    value: D,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: v.NW.string(v.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, r.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: v.NW.string(v.t['3GMnLi']),
                    className: S.notificationSection,
                    children: [
                        (0, r.jsx)(y, {
                            title: v.NW.string(v.t.IQv8Eh),
                            children: (0, r.jsx)('div', {
                                className: S.notificationSettings,
                                children: (0, r.jsx)(h.Z, {
                                    position: P,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, r.jsx)(y, {
                            children: (0, r.jsx)(c.j7V, {
                                value: P !== O._vf.DISABLED && R === O.Ypu.ENABLED,
                                disabled: P === O._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = O.Ypu;
                                    u.Z.setTextChatNotificationMode(R === e ? t : e);
                                },
                                hideBorder: !0,
                                children: v.NW.string(v.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
