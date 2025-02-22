n.d(t, { Z: () => P });
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
    x = n(957148),
    _ = n(556296),
    E = n(808506),
    j = n(237997),
    C = n(626135);
n(63063);
var O = n(13140),
    v = n(981631),
    S = n(388032),
    T = n(957545);
let I = y(null);
function y(e) {
    var t;
    let n = j.Z.getNotificationPositionMode(),
        r = n !== v._vf.DISABLED,
        i = _.ZP.getOverlayKeybind(),
        s = _.ZP.getOverlayChatKeybind();
    return {
        enabled: E.Z.enabled,
        notifications_enabled: r,
        notifications_position: r ? n : null,
        text_notifications_mode: j.Z.getTextChatNotificationMode(),
        hotkey: null != i ? (0, O.BB)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, O.BB)(s.shortcut) : null,
        text_opacity_slider: j.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : E.Z.enabled
    };
}
function A(e) {
    let { children: t, title: n } = e;
    return (0, r.jsx)(c.xJW, {
        title: n,
        className: T.userSettingsOverlayField,
        children: t
    });
}
function P(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: i, legacyEnabled: a } = (0, o.cj)([N.default], () => N.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: E,
            displayNameMode: O,
            displayUserMode: P,
            notificationPositionMode: R,
            textChatNotificationMode: D,
            shouldShowKeybindIndicators: Z
        } = (0, o.cj)([j.Z], () => ({
            avatarSizeMode: j.Z.getAvatarSizeMode(),
            displayNameMode: j.Z.getDisplayNameMode(),
            displayUserMode: j.Z.getDisplayUserMode(),
            notificationPositionMode: j.Z.getNotificationPositionMode(),
            textChatNotificationMode: j.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: j.Z.showKeybindIndicators
        })),
        w = (0, o.e7)([_.ZP], () => _.ZP.getOverlayKeybind()),
        k = (0, b.Z)({ location: 'overlay_user_settings' }),
        W = (0, g.$1)();
    return (
        !(function () {
            let e = y(I);
            l().isEqual(e, I) || (C.default.track(v.rMx.OVERLAY_SETTINGS_UPDATED, e), (I = e));
        })(),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? S.NW.string(S.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, r.jsxs)('div', {
                            className: T.enableOverlaySection,
                            children: [
                                (0, r.jsx)(c.xJW, {
                                    title: S.NW.string(S.t.XkaTrq),
                                    className: T.enableOverlayItem,
                                    children: (0, r.jsx)(c.j7V, {
                                        className: T.enableSwitch,
                                        value: a,
                                        disabled: W,
                                        note: W ? S.NW.string(S.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, i);
                                            let r = null !== (n = null === (t = p.ZP.getCurrentGameForAnalytics()) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null;
                                            (0, f.ou)(e, f.AE.LEGACY, r), !e && a && (0, x.l)(f.AE.LEGACY, r);
                                        },
                                        children: S.NW.string(S.t.vSP6c3)
                                    })
                                }),
                                (0, r.jsx)(c.xJW, {
                                    title: S.NW.string(S.t.VsAZcH),
                                    className: T.enableOverlayItem,
                                    children: (0, r.jsx)(m.Z, {
                                        disabled: !a,
                                        defaultValue: null != w ? w.shortcut : [],
                                        onChange: function (e) {
                                            var t, n;
                                            s()(null != w, 'Keybind should never be undefined'),
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
                                                    })({}, w)),
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
                        (0, r.jsx)(A, {
                            title: S.NW.string(S.t.dnvZSk),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: S.NW.string(S.t.YcOxtr),
                                        value: v.ipw.LARGE
                                    },
                                    {
                                        name: S.NW.string(S.t.BKIKq6),
                                        value: v.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: E
                            })
                        }),
                        (0, r.jsx)(A, {
                            title: S.NW.string(S.t.J0dpcH),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: S.NW.string(S.t.nBmDra),
                                        value: v.wC$.ALWAYS
                                    },
                                    {
                                        name: S.NW.string(S.t['2OvIZW']),
                                        value: v.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: S.NW.string(S.t.ekjlPD),
                                        value: v.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: O
                            })
                        }),
                        (0, r.jsx)(A, {
                            title: S.NW.string(S.t.swsWWF),
                            children: (0, r.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: S.NW.string(S.t.nBmDra),
                                        value: v.OYC.ALWAYS
                                    },
                                    {
                                        name: S.NW.string(S.t['2OvIZW']),
                                        value: v.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: P
                            })
                        }),
                        k &&
                            (0, r.jsx)(A, {
                                children: (0, r.jsx)(c.j7V, {
                                    value: Z,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: S.NW.string(S.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, r.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: S.NW.string(S.t['3GMnLi']),
                    className: T.notificationSection,
                    children: [
                        (0, r.jsx)(A, {
                            title: S.NW.string(S.t.IQv8Eh),
                            children: (0, r.jsx)('div', {
                                className: T.notificationSettings,
                                children: (0, r.jsx)(h.Z, {
                                    position: R,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, r.jsx)(A, {
                            children: (0, r.jsx)(c.j7V, {
                                value: R !== v._vf.DISABLED && D === v.Ypu.ENABLED,
                                disabled: R === v._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = v.Ypu;
                                    u.Z.setTextChatNotificationMode(D === e ? t : e);
                                },
                                hideBorder: !0,
                                children: S.NW.string(S.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
