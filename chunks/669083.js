n.d(t, { Z: () => j }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(481060),
    a = n(13245),
    l = n(600164),
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
    O = n(651923),
    b = n(971005);
function x(e, t, n) {
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
let E = () => [
        {
            value: v.ipw.LARGE,
            name: _.NW.string(_.t.YcOxtr)
        },
        {
            value: v.ipw.SMALL,
            name: _.NW.string(_.t.BKIKq6)
        }
    ],
    S = () => [
        {
            value: v.wC$.ALWAYS,
            name: _.NW.string(_.t.nBmDra)
        },
        {
            value: v.wC$.ONLY_WHILE_SPEAKING,
            name: _.NW.string(_.t['2OvIZW'])
        },
        {
            value: v.wC$.NEVER,
            name: _.NW.string(_.t.ekjlPD)
        }
    ],
    C = () => [
        {
            value: v.OYC.ALWAYS,
            name: _.NW.string(_.t.nBmDra)
        },
        {
            value: v.OYC.ONLY_WHILE_SPEAKING,
            name: _.NW.string(_.t['2OvIZW'])
        }
    ];
function N() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== v._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    a.Z.track(v.rMx.OVERLAY_SETTINGS_UPDATED, {
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
        a.Z.track(v.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        a.Z.setNotificationPositionMode(t), N();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        a.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        a.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        a.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(l.Z, {
            direction: l.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: O.header,
            children: [
                (0, i.jsxs)(l.Z, {
                    children: [
                        (0, i.jsx)(o.vwX, {
                            className: O.headerTitle,
                            tag: 'h1',
                            children: _.NW.string(_.t['35G2Mj'])
                        }),
                        (0, i.jsx)(o.olH, {
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
                ? (0, i.jsx)(o.njP.Item, {
                      id: 'DEVELOPER',
                      className: O.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(o.njP, {
            selectedItem: e,
            type: 'top',
            className: O.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(o.njP.Item, {
                    id: 'GENERAL',
                    className: O.tabBarItem,
                    children: _.NW.string(_.t['0FYxx8'])
                }),
                (0, i.jsx)(o.njP.Item, {
                    id: 'VOICE',
                    className: O.tabBarItem,
                    children: _.NW.string(_.t['3WeSiI'])
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
            o.hzk,
            {
                className: O.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowKeybindIndicators: t, showKeybindIndicators: n, shouldShowInviteNotification: s } = this.props,
            l = !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            d = e !== v._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: _.NW.string(_.t.IQv8Eh),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(o.j7V, {
                    value: l && d,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !d,
                    hideBorder: !0,
                    children: _.NW.string(_.t.Fy5kPj)
                }),
                (0, i.jsx)(o.j7V, {
                    value: s,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: _.NW.string(_.t.W9DVVV),
                    children: _.NW.string(_.t['f+c48/'])
                }),
                n &&
                    (0, i.jsx)(o.j7V, {
                        value: t,
                        onChange: (e) => a.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: _.NW.string(_.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: _.NW.string(_.t.dnvZSk),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: E(),
                        value: e,
                        size: o.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: _.NW.string(_.t.J0dpcH),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: S(),
                        value: t,
                        size: o.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: _.NW.string(_.t.swsWWF),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: C(),
                        value: n,
                        size: o.FXm.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)(o.xJW, {
            title: 'Crashes',
            className: b.marginBottom20,
            children: (0, i.jsx)(o.q4e, {
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
        return (0, i.jsxs)(o.Y0X, {
            'aria-label': _.NW.string(_.t['35G2Mj']),
            transitionState: o.Dvm.ENTERED,
            children: [this.renderHeader(), this.renderBody()]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', { selectedSection: 'GENERAL' }),
            x(this, 'handleSelectSection', (e) => {
                this.setState({ selectedSection: e });
            }),
            x(this, 'handleToggleTextChatNotifications', () => {
                a.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), N();
            }),
            x(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                a.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e);
            });
    }
}
function j(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: o,
            notificationPositionMode: a,
            textChatDisabled: l,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d
        } = (0, s.cj)([h.default, y.Z], () => ({
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
        displayUserMode: o,
        notificationPositionMode: a,
        textChatDisabled: l,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d
    });
}
