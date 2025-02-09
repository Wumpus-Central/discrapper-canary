n.d(t, { Z: () => A });
var i = n(200651);
n(192379);
var s = n(512722),
    l = n.n(s),
    r = n(392711),
    a = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    h = n(825209),
    m = n(887278),
    g = n(212632),
    x = n(809357),
    _ = n(371651),
    p = n(556296),
    E = n(808506),
    C = n(237997),
    N = n(626135);
n(63063);
var f = n(13140),
    I = n(981631),
    T = n(388032),
    S = n(764438);
let j = v(null);
function v(e) {
    var t;
    let n = C.Z.getNotificationPositionMode(),
        i = n !== I._vf.DISABLED,
        s = p.ZP.getOverlayKeybind(),
        l = p.ZP.getOverlayChatKeybind();
    return {
        enabled: E.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: C.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, f.BB)(s.shortcut) : null,
        text_activation_hotkey: null != l ? (0, f.BB)(l.shortcut) : null,
        text_opacity_slider: C.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : E.Z.enabled
    };
}
function b(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.xJW, {
        title: n,
        className: S.userSettingsOverlayField,
        children: t
    });
}
function A(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: s, legacyEnabled: r } = (0, o.cj)([_.Z], () => _.Z.getGlobalEnabledStatus()),
        {
            avatarSizeMode: E,
            displayNameMode: f,
            displayUserMode: A,
            notificationPositionMode: O,
            textChatNotificationMode: R,
            shouldShowKeybindIndicators: D
        } = (0, o.cj)([C.Z], () => ({
            avatarSizeMode: C.Z.getAvatarSizeMode(),
            displayNameMode: C.Z.getDisplayNameMode(),
            displayUserMode: C.Z.getDisplayUserMode(),
            notificationPositionMode: C.Z.getNotificationPositionMode(),
            textChatNotificationMode: C.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: C.Z.showKeybindIndicators
        })),
        P = (0, o.e7)([p.ZP], () => p.ZP.getOverlayKeybind()),
        y = (0, x.Z)({ location: 'overlay_user_settings' }),
        Z = (0, m.$1)();
    return (
        !(function () {
            let e = v(j);
            a().isEqual(e, j) || (N.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, e), (j = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? T.intl.string(T.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: S.enableOverlaySection,
                            children: [
                                (0, i.jsx)(c.xJW, {
                                    title: T.intl.string(T.t.XkaTrq),
                                    className: S.enableOverlayItem,
                                    children: (0, i.jsx)(c.j7V, {
                                        className: S.enableSwitch,
                                        value: r,
                                        disabled: Z,
                                        note: Z ? T.intl.string(T.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            u.Z.setEnabled(e, s),
                                                N.default.track(I.rMx.OVERLAY_TOGGLED, {
                                                    enabled: e,
                                                    setting_type: 'overlay toggled - legacy'
                                                });
                                        },
                                        children: T.intl.string(T.t.vSP6c3)
                                    })
                                }),
                                (0, i.jsx)(c.xJW, {
                                    title: T.intl.string(T.t.VsAZcH),
                                    className: S.enableOverlayItem,
                                    children: (0, i.jsx)(h.Z, {
                                        disabled: !r,
                                        defaultValue: null != P ? P.shortcut : [],
                                        onChange: function (e) {
                                            l()(null != P, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...P,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(b, {
                            title: T.intl.string(T.t.dnvZSk),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: T.intl.string(T.t.YcOxtr),
                                        value: I.ipw.LARGE
                                    },
                                    {
                                        name: T.intl.string(T.t.BKIKq6),
                                        value: I.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: E
                            })
                        }),
                        (0, i.jsx)(b, {
                            title: T.intl.string(T.t.J0dpcH),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: T.intl.string(T.t.nBmDra),
                                        value: I.wC$.ALWAYS
                                    },
                                    {
                                        name: T.intl.string(T.t['2OvIZW']),
                                        value: I.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: T.intl.string(T.t.ekjlPD),
                                        value: I.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: f
                            })
                        }),
                        (0, i.jsx)(b, {
                            title: T.intl.string(T.t.swsWWF),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: T.intl.string(T.t.nBmDra),
                                        value: I.OYC.ALWAYS
                                    },
                                    {
                                        name: T.intl.string(T.t['2OvIZW']),
                                        value: I.OYC.ONLY_WHILE_SPEAKING
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
                            (0, i.jsx)(b, {
                                children: (0, i.jsx)(c.j7V, {
                                    value: D,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: T.intl.string(T.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: T.intl.string(T.t['3GMnLi']),
                    className: S.notificationSection,
                    children: [
                        (0, i.jsx)(b, {
                            title: T.intl.string(T.t.IQv8Eh),
                            children: (0, i.jsx)('div', {
                                className: S.notificationSettings,
                                children: (0, i.jsx)(g.Z, {
                                    position: O,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, i.jsx)(b, {
                            children: (0, i.jsx)(c.j7V, {
                                value: O !== I._vf.DISABLED && R === I.Ypu.ENABLED,
                                disabled: O === I._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = I.Ypu;
                                    u.Z.setTextChatNotificationMode(R === e ? t : e);
                                },
                                hideBorder: !0,
                                children: T.intl.string(T.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
