n.d(t, { Z: () => R });
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
    h = n(594190),
    x = n(212632),
    _ = n(444295),
    p = n(809357),
    E = n(371651),
    C = n(556296),
    f = n(808506),
    T = n(237997),
    N = n(626135);
n(63063);
var S = n(13140),
    I = n(981631),
    b = n(388032),
    v = n(877028);
let j = A(null);
function A(e) {
    var t;
    let n = T.Z.getNotificationPositionMode(),
        i = n !== I._vf.DISABLED,
        s = C.ZP.getOverlayKeybind(),
        r = C.ZP.getOverlayChatKeybind();
    return {
        enabled: f.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: T.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, S.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, S.BB)(r.shortcut) : null,
        text_opacity_slider: T.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : f.Z.enabled
    };
}
function O(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.xJW, {
        title: n,
        className: v.userSettingsOverlayField,
        children: t
    });
}
function R(e) {
    let { className: t, showHeader: n = !0 } = e,
        { oopEnabled: s, legacyEnabled: l } = (0, o.cj)([E.default], () => E.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: f,
            displayNameMode: S,
            displayUserMode: R,
            notificationPositionMode: P,
            textChatNotificationMode: D,
            shouldShowKeybindIndicators: y
        } = (0, o.cj)([T.Z], () => ({
            avatarSizeMode: T.Z.getAvatarSizeMode(),
            displayNameMode: T.Z.getDisplayNameMode(),
            displayUserMode: T.Z.getDisplayUserMode(),
            notificationPositionMode: T.Z.getNotificationPositionMode(),
            textChatNotificationMode: T.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: T.Z.showKeybindIndicators
        })),
        Z = (0, o.e7)([C.ZP], () => C.ZP.getOverlayKeybind()),
        k = (0, p.Z)({ location: 'overlay_user_settings' }),
        L = (0, g.$1)();
    return (
        !(function () {
            let e = A(j);
            a().isEqual(e, j) || (N.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, e), (j = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? b.intl.string(b.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: v.enableOverlaySection,
                            children: [
                                (0, i.jsx)(c.xJW, {
                                    title: b.intl.string(b.t.XkaTrq),
                                    className: v.enableOverlayItem,
                                    children: (0, i.jsx)(c.j7V, {
                                        className: v.enableSwitch,
                                        value: l,
                                        disabled: L,
                                        note: L ? b.intl.string(b.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, s), (0, _.ou)(e, _.AE.LEGACY, null !== (n = null === (t = h.ZP.getCurrentGameForAnalytics()) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null);
                                        },
                                        children: b.intl.string(b.t.vSP6c3)
                                    })
                                }),
                                (0, i.jsx)(c.xJW, {
                                    title: b.intl.string(b.t.VsAZcH),
                                    className: v.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !l,
                                        defaultValue: null != Z ? Z.shortcut : [],
                                        onChange: function (e) {
                                            r()(null != Z, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...Z,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(O, {
                            title: b.intl.string(b.t.dnvZSk),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: b.intl.string(b.t.YcOxtr),
                                        value: I.ipw.LARGE
                                    },
                                    {
                                        name: b.intl.string(b.t.BKIKq6),
                                        value: I.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: f
                            })
                        }),
                        (0, i.jsx)(O, {
                            title: b.intl.string(b.t.J0dpcH),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: b.intl.string(b.t.nBmDra),
                                        value: I.wC$.ALWAYS
                                    },
                                    {
                                        name: b.intl.string(b.t['2OvIZW']),
                                        value: I.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: b.intl.string(b.t.ekjlPD),
                                        value: I.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: S
                            })
                        }),
                        (0, i.jsx)(O, {
                            title: b.intl.string(b.t.swsWWF),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: b.intl.string(b.t.nBmDra),
                                        value: I.OYC.ALWAYS
                                    },
                                    {
                                        name: b.intl.string(b.t['2OvIZW']),
                                        value: I.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: R
                            })
                        }),
                        k &&
                            (0, i.jsx)(O, {
                                children: (0, i.jsx)(c.j7V, {
                                    value: y,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: b.intl.string(b.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: b.intl.string(b.t['3GMnLi']),
                    className: v.notificationSection,
                    children: [
                        (0, i.jsx)(O, {
                            title: b.intl.string(b.t.IQv8Eh),
                            children: (0, i.jsx)('div', {
                                className: v.notificationSettings,
                                children: (0, i.jsx)(x.Z, {
                                    position: P,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, i.jsx)(O, {
                            children: (0, i.jsx)(c.j7V, {
                                value: P !== I._vf.DISABLED && D === I.Ypu.ENABLED,
                                disabled: P === I._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = I.Ypu;
                                    u.Z.setTextChatNotificationMode(D === e ? t : e);
                                },
                                hideBorder: !0,
                                children: b.intl.string(b.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
