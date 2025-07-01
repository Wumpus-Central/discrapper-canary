(n.d(t, { Z: () => I }), n(388685));
var i = n(255367),
    r = n(73800),
    o = n(442837),
    l = n(481060),
    s = n(13245),
    a = n(600164),
    c = n(212632),
    d = n(906467),
    u = n(556296),
    h = n(237997),
    p = n(998502),
    f = n(13140),
    g = n(486016),
    m = n(809357),
    y = n(624864),
    O = n(981631),
    v = n(388032),
    _ = n(692369),
    b = n(20493);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = () => [
        {
            value: O.ipw.LARGE,
            name: v.intl.string(v.t.YcOxtr)
        },
        {
            value: O.ipw.SMALL,
            name: v.intl.string(v.t.BKIKq6)
        }
    ],
    x = () => [
        {
            value: O.wC$.ALWAYS,
            name: v.intl.string(v.t.nBmDra)
        },
        {
            value: O.wC$.ONLY_WHILE_SPEAKING,
            name: v.intl.string(v.t['2OvIZW'])
        },
        {
            value: O.wC$.NEVER,
            name: v.intl.string(v.t.ekjlPD)
        }
    ],
    C = () => [
        {
            value: O.OYC.ALWAYS,
            name: v.intl.string(v.t.nBmDra)
        },
        {
            value: O.OYC.ONLY_WHILE_SPEAKING,
            name: v.intl.string(v.t['2OvIZW'])
        }
    ];
function j() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== O._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    s.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null
    });
}
class Z extends r.PureComponent {
    componentDidMount() {
        s.Z.track(O.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        (s.Z.setNotificationPositionMode(t), j());
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        s.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        s.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        s.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: _.header,
            children: [
                (0, i.jsxs)(a.Z, {
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: _.headerTitle,
                            tag: 'h1',
                            children: v.intl.string(v.t['35G2Mj'])
                        }),
                        (0, i.jsx)(l.olH, {
                            className: _.headerClose,
                            onClick: this.props.onClose
                        })
                    ]
                }),
                this.renderTabBar()
            ]
        });
    }
    renderTabBar() {
        let { selectedSection: e } = this.state,
            t = d.Z.isDeveloper
                ? (0, i.jsx)(l.njP.Item, {
                      id: 'DEVELOPER',
                      className: _.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(l.njP, {
            selectedItem: e,
            type: 'top',
            className: _.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(l.njP.Item, {
                    id: 'GENERAL',
                    className: _.tabBarItem,
                    children: v.intl.string(v.t['0FYxx8'])
                }),
                (0, i.jsx)(l.njP.Item, {
                    id: 'VOICE',
                    className: _.tabBarItem,
                    children: v.intl.string(v.t['3WeSiI'])
                }),
                t
            ]
        });
    }
    renderBody() {
        let e,
            { selectedSection: t } = this.state;
        switch (t) {
            case 'DEVELOPER':
                e = this.renderDeveloperSettings();
                break;
            case 'VOICE':
                e = this.renderVoiceSettings();
                break;
            default:
                e = this.renderGeneralSettings();
        }
        return (0, i.jsx)(
            l.hzk,
            {
                className: _.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowKeybindIndicators: t, showKeybindIndicators: n, shouldShowInviteNotification: o } = this.props,
            a = !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            d = e !== O._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(l.xJW, {
                    title: v.intl.string(v.t.IQv8Eh),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(l.j7V, {
                    value: a && d,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !d,
                    hideBorder: !0,
                    children: v.intl.string(v.t.Fy5kPj)
                }),
                (0, i.jsx)(l.j7V, {
                    value: o,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: v.intl.string(v.t.W9DVVV),
                    children: v.intl.string(v.t['f+c48/'])
                }),
                n &&
                    (0, i.jsx)(l.j7V, {
                        value: t,
                        onChange: (e) => s.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: v.intl.string(v.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(l.xJW, {
                    title: v.intl.string(v.t.dnvZSk),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(l.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: S(),
                        value: e,
                        size: l.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(l.xJW, {
                    title: v.intl.string(v.t.J0dpcH),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(l.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: x(),
                        value: t,
                        size: l.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(l.xJW, {
                    title: v.intl.string(v.t.swsWWF),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(l.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: C(),
                        value: n,
                        size: l.FXm.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)(l.xJW, {
            title: 'Crashes',
            className: b.marginBottom20,
            children: (0, i.jsx)(l.q4e, {
                value: void 0,
                options: [
                    {
                        value: void 0,
                        label: 'Native crash'
                    },
                    {
                        value: 0,
                        label: 'Abort()'
                    },
                    {
                        value: 1,
                        label: 'SIGSEGV()'
                    },
                    {
                        value: 2,
                        label: 'EXCEPTION_ACCESS_VIOLATION'
                    },
                    {
                        value: 3,
                        label: 'RaiseFailFastException'
                    },
                    {
                        value: 4,
                        label: 'Out of Memory'
                    }
                ],
                onChange: (e) => null != e && p.ZP.crash(e)
            })
        });
    }
    render() {
        return (0, i.jsxs)(l.Y0X, {
            'aria-label': v.intl.string(v.t['35G2Mj']),
            transitionState: l.Dvm.ENTERED,
            parentComponent: 'OverlaySettings',
            children: [this.renderHeader(), this.renderBody()]
        });
    }
    constructor(...e) {
        (super(...e),
            E(this, 'state', { selectedSection: 'GENERAL' }),
            E(this, 'handleSelectSection', (e) => {
                this.setState({ selectedSection: e });
            }),
            E(this, 'handleToggleTextChatNotifications', () => {
                (s.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), j());
            }),
            E(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                s.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e);
            }));
    }
}
function I(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: l,
            notificationPositionMode: s,
            textChatDisabled: a,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d
        } = (0, o.cj)([h.default, y.Z], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY)
        })),
        u = (0, m.Z)({ location: 'Overlay Settings' });
    return (0, i.jsx)(Z, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: l,
        notificationPositionMode: s,
        textChatDisabled: a,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d
    });
}
