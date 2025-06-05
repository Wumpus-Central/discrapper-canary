n.d(t, { Z: () => I }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(442837),
    s = n(481060),
    l = n(13245),
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
    v = n(981631),
    _ = n(388032),
    O = n(692369),
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
let x = () => [
        {
            value: v.ipw.LARGE,
            name: _.intl.string(_.t.YcOxtr)
        },
        {
            value: v.ipw.SMALL,
            name: _.intl.string(_.t.BKIKq6)
        }
    ],
    S = () => [
        {
            value: v.wC$.ALWAYS,
            name: _.intl.string(_.t.nBmDra)
        },
        {
            value: v.wC$.ONLY_WHILE_SPEAKING,
            name: _.intl.string(_.t['2OvIZW'])
        },
        {
            value: v.wC$.NEVER,
            name: _.intl.string(_.t.ekjlPD)
        }
    ],
    C = () => [
        {
            value: v.OYC.ALWAYS,
            name: _.intl.string(_.t.nBmDra)
        },
        {
            value: v.OYC.ONLY_WHILE_SPEAKING,
            name: _.intl.string(_.t['2OvIZW'])
        }
    ];
function j() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== v._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    l.Z.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
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
        l.Z.track(v.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        l.Z.setNotificationPositionMode(t), j();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        l.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        l.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        l.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: O.header,
            children: [
                (0, i.jsxs)(a.Z, {
                    children: [
                        (0, i.jsx)(s.vwX, {
                            className: O.headerTitle,
                            tag: 'h1',
                            children: _.intl.string(_.t['35G2Mj'])
                        }),
                        (0, i.jsx)(s.olH, {
                            className: O.headerClose,
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
                ? (0, i.jsx)(s.njP.Item, {
                      id: 'DEVELOPER',
                      className: O.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(s.njP, {
            selectedItem: e,
            type: 'top',
            className: O.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(s.njP.Item, {
                    id: 'GENERAL',
                    className: O.tabBarItem,
                    children: _.intl.string(_.t['0FYxx8'])
                }),
                (0, i.jsx)(s.njP.Item, {
                    id: 'VOICE',
                    className: O.tabBarItem,
                    children: _.intl.string(_.t['3WeSiI'])
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
            s.hzk,
            {
                className: O.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowKeybindIndicators: t, showKeybindIndicators: n, shouldShowInviteNotification: o } = this.props,
            a = !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            d = e !== v._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(s.xJW, {
                    title: _.intl.string(_.t.IQv8Eh),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(s.j7V, {
                    value: a && d,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !d,
                    hideBorder: !0,
                    children: _.intl.string(_.t.Fy5kPj)
                }),
                (0, i.jsx)(s.j7V, {
                    value: o,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: _.intl.string(_.t.W9DVVV),
                    children: _.intl.string(_.t['f+c48/'])
                }),
                n &&
                    (0, i.jsx)(s.j7V, {
                        value: t,
                        onChange: (e) => l.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: _.intl.string(_.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(s.xJW, {
                    title: _.intl.string(_.t.dnvZSk),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(s.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: x(),
                        value: e,
                        size: s.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(s.xJW, {
                    title: _.intl.string(_.t.J0dpcH),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(s.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: S(),
                        value: t,
                        size: s.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(s.xJW, {
                    title: _.intl.string(_.t.swsWWF),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(s.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: C(),
                        value: n,
                        size: s.FXm.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)(s.xJW, {
            title: 'Crashes',
            className: b.marginBottom20,
            children: (0, i.jsx)(s.q4e, {
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
        return (0, i.jsxs)(s.Y0X, {
            'aria-label': _.intl.string(_.t['35G2Mj']),
            transitionState: s.Dvm.ENTERED,
            parentComponent: 'OverlaySettings',
            children: [this.renderHeader(), this.renderBody()]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', { selectedSection: 'GENERAL' }),
            E(this, 'handleSelectSection', (e) => {
                this.setState({ selectedSection: e });
            }),
            E(this, 'handleToggleTextChatNotifications', () => {
                l.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), j();
            }),
            E(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                l.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e);
            });
    }
}
function I(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: s,
            notificationPositionMode: l,
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
        displayUserMode: s,
        notificationPositionMode: l,
        textChatDisabled: a,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d
    });
}
