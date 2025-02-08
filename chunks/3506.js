n.d(t, { Z: () => A });
var i = n(200651);
n(192379);
var s = n(512722),
    r = n.n(s),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    m = n(825209),
    g = n(887278),
    h = n(212632),
    x = n(809357),
    _ = n(371651),
    p = n(556296),
    E = n(808506),
    C = n(237997),
    f = n(626135);
n(63063);
var T = n(13140),
    N = n(981631),
    I = n(388032),
    S = n(893946);
let b = v(null);
function v(e) {
    var t;
    let n = C.Z.getNotificationPositionMode(),
        i = n !== N._vf.DISABLED,
        s = p.Z.getOverlayKeybind(),
        r = p.Z.getOverlayChatKeybind();
    return {
        enabled: E.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: C.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, T.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, T.BB)(r.shortcut) : null,
        text_opacity_slider: C.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : E.Z.enabled
    };
}
function j(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.xJW, {
        title: n,
        className: S.userSettingsOverlayField,
        children: t
    });
}
function A(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: s, legacyEnabled: l } = (0, o.cj)([_.Z], () => _.Z.getGlobalEnabledStatus()),
        {
            avatarSizeMode: E,
            displayNameMode: T,
            displayUserMode: A,
            notificationPositionMode: O,
            textChatNotificationMode: R,
            shouldShowKeybindIndicators: P
        } = (0, o.cj)([C.Z], () => ({
            avatarSizeMode: C.Z.getAvatarSizeMode(),
            displayNameMode: C.Z.getDisplayNameMode(),
            displayUserMode: C.Z.getDisplayUserMode(),
            notificationPositionMode: C.Z.getNotificationPositionMode(),
            textChatNotificationMode: C.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: C.Z.showKeybindIndicators
        })),
        D = (0, o.e7)([p.Z], () => p.Z.getOverlayKeybind()),
        y = (0, x.Z)({ location: 'overlay_user_settings' }),
        Z = (0, g.$1)();
    return (
        !(function () {
            let e = v(b);
            a().isEqual(e, b) || (f.default.track(N.rMx.OVERLAY_SETTINGS_UPDATED, e), (b = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? I.intl.string(I.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: S.enableOverlaySection,
                            children: [
                                (0, i.jsx)(c.xJW, {
                                    title: I.intl.string(I.t.XkaTrq),
                                    className: S.enableOverlayItem,
                                    children: (0, i.jsx)(c.j7V, {
                                        className: S.enableSwitch,
                                        value: l,
                                        disabled: Z,
                                        note: Z ? I.intl.string(I.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            u.Z.setEnabled(e, s),
                                                f.default.track(N.rMx.OVERLAY_TOGGLED, {
                                                    enabled: e,
                                                    setting_type: 'overlay toggled - legacy'
                                                });
                                        },
                                        children: I.intl.string(I.t.vSP6c3)
                                    })
                                }),
                                (0, i.jsx)(c.xJW, {
                                    title: I.intl.string(I.t.VsAZcH),
                                    className: S.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !l,
                                        defaultValue: null != D ? D.shortcut : [],
                                        onChange: function (e) {
                                            r()(null != D, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...D,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(j, {
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
                                value: E
                            })
                        }),
                        (0, i.jsx)(j, {
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
                        (0, i.jsx)(j, {
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
                                value: A
                            })
                        }),
                        y &&
                            (0, i.jsx)(j, {
                                children: (0, i.jsx)(c.j7V, {
                                    value: P,
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
                    className: S.notificationSection,
                    children: [
                        (0, i.jsx)(j, {
                            title: I.intl.string(I.t.IQv8Eh),
                            children: (0, i.jsx)('div', {
                                className: S.notificationSettings,
                                children: (0, i.jsx)(h.Z, {
                                    position: O,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, i.jsx)(j, {
                            children: (0, i.jsx)(c.j7V, {
                                value: O !== N._vf.DISABLED && R === N.Ypu.ENABLED,
                                disabled: O === N._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = N.Ypu;
                                    u.Z.setTextChatNotificationMode(R === e ? t : e);
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
