n.d(t, { Z: () => I }), n(47120);
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
    _ = n(981631),
    v = n(388032),
    b = n(748509),
    O = n(802138);
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
let S = () => [
        {
            value: _.ipw.LARGE,
            name: v.NW.string(v.t.YcOxtr)
        },
        {
            value: _.ipw.SMALL,
            name: v.NW.string(v.t.BKIKq6)
        }
    ],
    E = () => [
        {
            value: _.wC$.ALWAYS,
            name: v.NW.string(v.t.nBmDra)
        },
        {
            value: _.wC$.ONLY_WHILE_SPEAKING,
            name: v.NW.string(v.t['2OvIZW'])
        },
        {
            value: _.wC$.NEVER,
            name: v.NW.string(v.t.ekjlPD)
        }
    ],
    N = () => [
        {
            value: _.OYC.ALWAYS,
            name: v.NW.string(v.t.nBmDra)
        },
        {
            value: _.OYC.ONLY_WHILE_SPEAKING,
            name: v.NW.string(v.t['2OvIZW'])
        }
    ];
function j() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== _._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    a.Z.track(_.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED',
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null
    });
}
class C extends r.PureComponent {
    componentDidMount() {
        a.Z.track(_.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        a.Z.setNotificationPositionMode(t), j();
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
            className: b.header,
            children: [
                (0, i.jsxs)(l.Z, {
                    children: [
                        (0, i.jsx)(o.vwX, {
                            className: b.headerTitle,
                            tag: 'h1',
                            children: v.NW.string(v.t['35G2Mj'])
                        }),
                        (0, i.jsx)(o.olH, {
                            className: b.headerClose,
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
                      className: b.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(o.njP, {
            selectedItem: e,
            type: 'top',
            className: b.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(o.njP.Item, {
                    id: 'GENERAL',
                    className: b.tabBarItem,
                    children: v.NW.string(v.t['0FYxx8'])
                }),
                (0, i.jsx)(o.njP.Item, {
                    id: 'VOICE',
                    className: b.tabBarItem,
                    children: v.NW.string(v.t['3WeSiI'])
                }),
                t
            ]
        });
    }
    renderBody() {
        let e;
        let { selectedSection: t } = this.state;
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
                className: b.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowKeybindIndicators: t, showKeybindIndicators: n, shouldShowInviteNotification: s } = this.props,
            l = !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            d = e !== _._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.IQv8Eh),
                    className: O.marginBottom20,
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
                    children: v.NW.string(v.t.Fy5kPj)
                }),
                (0, i.jsx)(o.j7V, {
                    value: s,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: v.NW.string(v.t.W9DVVV),
                    children: v.NW.string(v.t['f+c48/'])
                }),
                n &&
                    (0, i.jsx)(o.j7V, {
                        value: t,
                        onChange: (e) => a.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: v.NW.string(v.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.dnvZSk),
                    className: O.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: S(),
                        value: e,
                        size: o.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.J0dpcH),
                    className: O.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: E(),
                        value: t,
                        size: o.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.swsWWF),
                    className: O.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: N(),
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
            className: O.marginBottom20,
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
            'aria-label': v.NW.string(v.t['35G2Mj']),
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
                a.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), j();
            }),
            x(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                a.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e);
            });
    }
}
function I(e) {
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
    return (0, i.jsx)(C, {
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
