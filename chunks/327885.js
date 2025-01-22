n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    s = n.n(r),
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(660216),
    u = n(13245),
    m = n(825209),
    g = n(887278),
    h = n(212632),
    p = n(32300),
    x = n(809357),
    f = n(371651),
    _ = n(556296),
    E = n(808506),
    C = n(237997),
    T = n(626135);
n(63063);
var S = n(13140),
    b = n(981631),
    I = n(388032),
    N = n(893946);
let v = A(null);
function A(e) {
    var t;
    let n = C.Z.getNotificationPositionMode(),
        i = n !== b._vf.DISABLED,
        r = _.Z.getOverlayKeybind(),
        s = _.Z.getOverlayChatKeybind();
    return {
        enabled: E.Z.enabled,
        notifications_enabled: i,
        notifications_position: i ? n : null,
        text_notifications_mode: C.Z.getTextChatNotificationMode(),
        hotkey: null != r ? (0, S.BB)(r.shortcut) : null,
        text_activation_hotkey: null != s ? (0, S.BB)(s.shortcut) : null,
        text_opacity_slider: C.Z.getTextWidgetOpacity(),
        old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : E.Z.enabled
    };
}
function j(e) {
    let { children: t, title: n } = e;
    return (0, i.jsx)(c.FormItem, {
        title: n,
        className: N.userSettingsOverlayField,
        children: t
    });
}
function O(e) {
    let { className: t, showHeader: n = !0 } = e,
        { enabled: r, legacyEnabled: a } = (0, o.cj)([f.Z], () => f.Z.getEnabledStatus()),
        {
            avatarSizeMode: E,
            displayNameMode: S,
            displayUserMode: O,
            notificationPositionMode: R,
            textChatNotificationMode: P,
            shouldShowKeybindIndicators: D
        } = (0, o.cj)([C.Z], () => ({
            avatarSizeMode: C.Z.getAvatarSizeMode(),
            displayNameMode: C.Z.getDisplayNameMode(),
            displayUserMode: C.Z.getDisplayUserMode(),
            notificationPositionMode: C.Z.getNotificationPositionMode(),
            textChatNotificationMode: C.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: C.Z.showKeybindIndicators
        })),
        y = (0, o.e7)([_.Z], () => _.Z.getOverlayKeybind()),
        B = (0, x.Z)({ location: 'overlay_user_settings' }),
        Z = (0, g.$1)(),
        L = (0, p.XE)('overlay_user_settings');
    function M(e) {
        u.Z.setEnabled(e, a, !1),
            T.default.track(b.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - global'
            });
    }
    function k(e) {
        u.Z.setEnabled(r, e, !1),
            T.default.track(b.rMx.OVERLAY_TOGGLED, {
                enabled: e,
                setting_type: 'overlay toggled - legacy'
            });
    }
    return (
        !(function () {
            let e = A(v);
            !l().isEqual(e, v) && (T.default.track(b.rMx.OVERLAY_SETTINGS_UPDATED, e), (v = e));
        })(),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(c.FormSection, {
                    className: t,
                    tag: c.FormTitleTags.H1,
                    title: n ? I.intl.string(I.t['9cb1U1']) : null,
                    children: [
                        !1,
                        (0, i.jsxs)('div', {
                            className: N.enableOverlaySection,
                            children: [
                                L
                                    ? (0, i.jsxs)(c.FormItem, {
                                          title: I.intl.string(I.t.XkaTrq),
                                          className: N.enableOverlayItem,
                                          children: [
                                              (0, i.jsx)(c.FormSwitch, {
                                                  className: N.enableSwitch,
                                                  value: r,
                                                  hideBorder: !0,
                                                  onChange: M,
                                                  children: I.intl.string(I.t.vSP6c3)
                                              }),
                                              (0, i.jsx)(c.FormSwitch, {
                                                  className: N.enableSwitch,
                                                  value: a,
                                                  disabled: Z || !r,
                                                  note: Z ? I.intl.string(I.t.Eb0lnJ) : null,
                                                  hideBorder: !0,
                                                  onChange: k,
                                                  children: I.intl.string(I.t.znUpRE)
                                              })
                                          ]
                                      })
                                    : (0, i.jsx)(c.FormItem, {
                                          title: I.intl.string(I.t.XkaTrq),
                                          className: N.enableOverlayItem,
                                          children: (0, i.jsx)(c.FormSwitch, {
                                              className: N.enableSwitch,
                                              value: r,
                                              disabled: Z,
                                              note: Z ? I.intl.string(I.t.Eb0lnJ) : null,
                                              hideBorder: !0,
                                              onChange: M,
                                              children: I.intl.string(I.t.vSP6c3)
                                          })
                                      }),
                                (0, i.jsx)(c.FormItem, {
                                    title: I.intl.string(I.t.VsAZcH),
                                    className: N.enableOverlayItem,
                                    children: (0, i.jsx)(m.Z, {
                                        disabled: !r,
                                        defaultValue: null != y ? y.shortcut : [],
                                        onChange: function (e) {
                                            s()(null != y, 'Keybind should never be undefined'),
                                                d.Z.setKeybind({
                                                    ...y,
                                                    shortcut: e
                                                });
                                        }
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(j, {
                            title: I.intl.string(I.t.dnvZSk),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.YcOxtr),
                                        value: b.ipw.LARGE
                                    },
                                    {
                                        name: I.intl.string(I.t.BKIKq6),
                                        value: b.ipw.SMALL
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
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.nBmDra),
                                        value: b.wC$.ALWAYS
                                    },
                                    {
                                        name: I.intl.string(I.t['2OvIZW']),
                                        value: b.wC$.ONLY_WHILE_SPEAKING
                                    },
                                    {
                                        name: I.intl.string(I.t.ekjlPD),
                                        value: b.wC$.NEVER
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayNameMode(t);
                                },
                                value: S
                            })
                        }),
                        (0, i.jsx)(j, {
                            title: I.intl.string(I.t.swsWWF),
                            children: (0, i.jsx)(c.RadioGroup, {
                                options: [
                                    {
                                        name: I.intl.string(I.t.nBmDra),
                                        value: b.OYC.ALWAYS
                                    },
                                    {
                                        name: I.intl.string(I.t['2OvIZW']),
                                        value: b.OYC.ONLY_WHILE_SPEAKING
                                    }
                                ],
                                onChange: (e) => {
                                    let { value: t } = e;
                                    return u.Z.setDisplayUserMode(t);
                                },
                                value: O
                            })
                        }),
                        B &&
                            (0, i.jsx)(j, {
                                children: (0, i.jsx)(c.FormSwitch, {
                                    value: D,
                                    onChange: (e) => u.Z.setShowKeybindIndicators(e),
                                    hideBorder: !0,
                                    children: I.intl.string(I.t.XZTl9v)
                                })
                            })
                    ]
                }),
                (0, i.jsxs)(c.FormSection, {
                    tag: c.FormTitleTags.H1,
                    title: I.intl.string(I.t['3GMnLi']),
                    className: N.notificationSection,
                    children: [
                        L
                            ? null
                            : (0, i.jsx)(j, {
                                  title: I.intl.string(I.t.IQv8Eh),
                                  children: (0, i.jsx)('div', {
                                      className: N.notificationSettings,
                                      children: (0, i.jsx)(h.Z, {
                                          position: R,
                                          onChange: (e, t) => u.Z.setNotificationPositionMode(t)
                                      })
                                  })
                              }),
                        (0, i.jsx)(j, {
                            children: (0, i.jsx)(c.FormSwitch, {
                                value: R !== b._vf.DISABLED && P === b.Ypu.ENABLED,
                                disabled: R === b._vf.DISABLED,
                                onChange: function () {
                                    let { ENABLED: e, DISABLED: t } = b.Ypu;
                                    u.Z.setTextChatNotificationMode(P === e ? t : e);
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
