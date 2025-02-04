n.d(t, { Z: () => O });
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
    h = n(887278),
    g = n(212632),
    _ = n(32300),
    x = n(809357),
    p = n(371651),
    E = n(556296),
    C = n(808506),
    f = n(237997),
    T = n(626135);
n(63063);
var N = n(13140),
    I = n(981631),
    S = n(388032),
    b = n(893946);
let v = j(null);
function j(e) {
    var t;
    let n = f.Z.getNotificationPositionMode(),
        i = n !== I._vf.DISABLED,
        s = E.Z.getOverlayKeybind(),
        r = E.Z.getOverlayChatKeybind();
    return {
        enabled: C.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: f.Z.getTextChatNotificationMode(),
        hotkey: null != s ? (0, N.BB)(s.shortcut) : null,
        text_activation_hotkey: null != r ? (0, N.BB)(r.shortcut) : null,
        text_opacity_slider: f.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : C.Z.enabled
    };
}
function A(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.xJW, {
        title: n,
        className: b.userSettingsOverlayField,
        children: t
    });
}
function O(e) {
    let { className: t, showHeader: n = !0 } = e,
        { enabled: s, legacyEnabled: l } = (0, o.cj)([p.Z], () => p.Z.getEnabledStatus()),
        {
            avatarSizeMode: C,
            displayNameMode: N,
            displayUserMode: O,
            notificationPositionMode: R,
            textChatNotificationMode: P,
            shouldShowKeybindIndicators: D
        } = (0, o.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators
        })),
        y = (0, o.e7)([E.Z], () => E.Z.getOverlayKeybind()),
        Z = (0, x.Z)({ location: 'overlay_user_settings' }),
        k = (0, h.$1)(),
        L = (0, _.XE)('overlay_user_settings');
    function B(e) {
        u.Z.setEnabled(e, l, !1),
            T.default.track(I.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - global'
            });
    }
    return (
        !(function () {
            let e = j(v);
            a().isEqual(e, v) || (T.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, e), (v = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.hjN, {
                    className: t,
                    tag: c.RB0.H1,
                    title: n ? S.intl.string(S.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: b.enableOverlaySection,
                            children: [
                                L
                                    ? (0, i.jsxs)(c.xJW, {
                                          title: S.intl.string(S.t.XkaTrq),
                                          className: b.enableOverlayItem,
                                          children: [
                                              (0, i.jsx)(c.j7V, {
                                                  className: b.enableSwitch,
                                                  value: s,
                                                  hideBorder: !0,
                                                  onChange: B,
                                                  children: S.intl.string(S.t.vSP6c3)
                                              }),
                                              (0, i.jsx)(c.j7V, {
                                                  className: b.enableSwitch,
                                                  value: l,
                                                  disabled: k || !s,
                                                  note: k ? S.intl.string(S.t.Eb0lnJ) : null,
                                                  hideBorder: !0,
                                                  onChange: function (e) {
                                                      u.Z.setEnabled(s, e, !1),
                                                          T.default.track(I.rMx.OVERLAY_TOGGLED, {
                                                              enabled: e,
                                                              setting_type: 'overlay toggled - legacy'
                                                          });
                                                  },
                                                  children: S.intl.string(S.t.znUpRE)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(c.xJW, {
                                          title: S.intl.string(S.t.XkaTrq),
                                          className: b.enableOverlayItem,
                                          children: (0, i.jsx)(c.j7V, {
                                              className: b.enableSwitch,
                                              value: s,
                                              disabled: k,
                                              note: k ? S.intl.string(S.t.Eb0lnJ) : null,
                                              hideBorder: !0,
                                              onChange: B,
                                              children: S.intl.string(S.t.vSP6c3)
                                          })
                                      }),
                                (0, i.jsx)(c.xJW, {
                                    title: S.intl.string(S.t.VsAZcH),
                                    className: b.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !s,
                                        defaultValue: null != y ? y.shortcut : [],
                                        onChange: function (e) {
                                            r()(null != y, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...y,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(A, {
                            title: S.intl.string(S.t.dnvZSk),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: S.intl.string(S.t.YcOxtr),
                                        value: I.ipw.LARGE
                                    },
                                    {
                                        name: S.intl.string(S.t.BKIKq6),
                                        value: I.ipw.SMALL
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setAvatarSizeMode(t);
                                },
                                value: C
                            })
                        }),
                        (0, i.jsx)(A, {
                            title: S.intl.string(S.t.J0dpcH),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: S.intl.string(S.t.nBmDra),
                                        value: I.wC$.ALWAYS
                                    },
                                    {
                                        name: S.intl.string(S.t['2OvIZW']),
                                        value: I.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: S.intl.string(S.t.ekjlPD),
                                        value: I.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: N
                            })
                        }),
                        (0, i.jsx)(A, {
                            title: S.intl.string(S.t.swsWWF),
                            children: (0, i.jsx)(c.FXm, {
                                options: [
                                    {
                                        name: S.intl.string(S.t.nBmDra),
                                        value: I.OYC.ALWAYS
                                    },
                                    {
                                        name: S.intl.string(S.t['2OvIZW']),
                                        value: I.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: O
                            })
                        }),
                        Z &&
                            (0, i.jsx)(A, {
                                children: (0, i.jsx)(c.j7V, {
                                    value: D,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: S.intl.string(S.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.hjN, {
                    tag: c.RB0.H1,
                    title: S.intl.string(S.t['3GMnLi']),
                    className: b.notificationSection,
                    children: [
                        L
                            ? null
                            : (0, i.jsx)(A, {
                                  title: S.intl.string(S.t.IQv8Eh),
                                  children: (0, i.jsx)('div', {
                                      className: b.notificationSettings,
                                      children: (0, i.jsx)(g.Z, {
                                          position: R,
                                          onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                      })
                                  })
                              }),
                        (0, i.jsx)(A, {
                            children: (0, i.jsx)(c.j7V, {
                                value: R !== I._vf.DISABLED && P === I.Ypu.ENABLED,
                                disabled: R === I._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = I.Ypu;
                                    u.Z.setTextChatNotificationMode(P === e ? t : e);
                                },
                                hideBorder: !0,
                                children: S.intl.string(S.t.Fy5kPj)
                            })
                        })
                    ]
                })
            ]
        })
    );
}
