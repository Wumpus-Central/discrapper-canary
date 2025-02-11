n.d(t, { Z: () => R });
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
    g = n(594190),
    x = n(212632),
    _ = n(444295),
    p = n(809357),
    E = n(371651),
    C = n(556296),
    N = n(808506),
    f = n(237997),
    I = n(626135);
n(63063);
var T = n(13140),
    S = n(981631),
    j = n(388032),
    v = n(764438);
let b = A(null);
function A(e) {
    var t;
    let n = f.Z.getNotificationPositionMode(),
        i = n !== S._vf.DISABLED,
        s = C.ZP.getOverlayKeybind(),
        l = C.ZP.getOverlayChatKeybind();
    return {
        enabled: N.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: f.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, T.BB)(s.shortcut) : null,
        text_activation_hotkey: null != l ? (0, T.BB)(l.shortcut) : null,
        text_opacity_slider: f.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : N.Z.enabled
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
        { oopEnabled: s, legacyEnabled: r } = (0, o.cj)([E.default], () => E.default.getGlobalEnabledStatus()),
        {
            avatarSizeMode: N,
            displayNameMode: T,
            displayUserMode: R,
            notificationPositionMode: D,
            textChatNotificationMode: P,
            shouldShowKeybindIndicators: y
        } = (0, o.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators
        })),
        Z = (0, o.e7)([C.ZP], () => C.ZP.getOverlayKeybind()),
        L = (0, p.Z)({ location: 'overlay_user_settings' }),
        k = (0, m.$1)();
    return (
        !(function () {
            let e = A(b);
            a().isEqual(e, b) || (I.default.track(S.rMx.OVERLAY_SETTINGS_UPDATED, e), (b = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? j.intl.string(j.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: v.enableOverlaySection,
                            children: [
                                (0, i.jsx)(c.xJW, {
                                    title: j.intl.string(j.t.XkaTrq),
                                    className: v.enableOverlayItem,
                                    children: (0, i.jsx)(c.j7V, {
                                        className: v.enableSwitch,
                                        value: r,
                                        disabled: k,
                                        note: k ? j.intl.string(j.t.Eb0lnJ) : null,
                                        hideBorder: !0,
                                        onChange: function (e) {
                                            var t, n;
                                            u.Z.setEnabled(e, s), (0, _.o)(e, _.A.LEGACY, null !== (n = null === (t = g.ZP.getCurrentGameForAnalytics()) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null);
                                        },
                                        children: j.intl.string(j.t.vSP6c3)
                                    })
                                }),
                                (0, i.jsx)(c.xJW, {
                                    title: j.intl.string(j.t.VsAZcH),
                                    className: v.enableOverlayItem,
                                    children: (0, i.jsx)(h.Z, {
                                        disabled: !r,
                                        defaultValue: null != Z ? Z.shortcut : [],
                                        onChange: function (e) {
                                            l()(null != Z, 'Keybind should never be undefined'),
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
                            title: j.intl.string(j.t.dnvZSk),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: j.intl.string(j.t.YcOxtr),
                                        value: S.ipw.LARGE
                                    },
                                    {
                                        name: j.intl.string(j.t.BKIKq6),
                                        value: S.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: N
                            })
                        }),
                        (0, i.jsx)(O, {
                            title: j.intl.string(j.t.J0dpcH),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: j.intl.string(j.t.nBmDra),
                                        value: S.wC$.ALWAYS
                                    },
                                    {
                                        name: j.intl.string(j.t['2OvIZW']),
                                        value: S.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: j.intl.string(j.t.ekjlPD),
                                        value: S.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: T
                            })
                        }),
                        (0, i.jsx)(O, {
                            title: j.intl.string(j.t.swsWWF),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: j.intl.string(j.t.nBmDra),
                                        value: S.OYC.ALWAYS
                                    },
                                    {
                                        name: j.intl.string(j.t['2OvIZW']),
                                        value: S.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: R
                            })
                        }),
                        L &&
                            (0, i.jsx)(O, {
                                children: (0, i.jsx)(c.j7V, {
                                    value: y,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: j.intl.string(j.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: j.intl.string(j.t['3GMnLi']),
                    className: v.notificationSection,
                    children: [
                        (0, i.jsx)(O, {
                            title: j.intl.string(j.t.IQv8Eh),
                            children: (0, i.jsx)('div', {
                                className: v.notificationSettings,
                                children: (0, i.jsx)(x.Z, {
                                    position: D,
                                    onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                })
                            })
                        }),
                        (0, i.jsx)(O, {
                            children: (0, i.jsx)(c.j7V, {
                                value: D !== S._vf.DISABLED && P === S.Ypu.ENABLED,
                                disabled: D === S._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = S.Ypu;
                                    u.Z.setTextChatNotificationMode(P === e ? t : e);
                                },
                                hideBorder: !0,
                                children: j.intl.string(j.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
