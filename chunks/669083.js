n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(481060),
    l = n(13245),
    a = n(600164),
    c = n(212632),
    u = n(906467),
    d = n(556296),
    h = n(237997),
    p = n(998502),
    f = n(13140),
    g = n(486016),
    m = n(809357),
    y = n(624864),
    O = n(981631),
    v = n(388032),
    x = n(692369),
    b = n(20493);
function S(e, t, n) {
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
            value: O.ipw.LARGE,
            name: v.NW.string(v.t.YcOxtr)
        },
        {
            value: O.ipw.SMALL,
            name: v.NW.string(v.t.BKIKq6)
        }
    ],
    j = () => [
        {
            value: O.wC$.ALWAYS,
            name: v.NW.string(v.t.nBmDra)
        },
        {
            value: O.wC$.ONLY_WHILE_SPEAKING,
            name: v.NW.string(v.t['2OvIZW'])
        },
        {
            value: O.wC$.NEVER,
            name: v.NW.string(v.t.ekjlPD)
        }
    ],
    N = () => [
        {
            value: O.OYC.ALWAYS,
            name: v.NW.string(v.t.nBmDra)
        },
        {
            value: O.OYC.ONLY_WHILE_SPEAKING,
            name: v.NW.string(v.t['2OvIZW'])
        }
    ];
function Z() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== O._vf.DISABLED,
        n = d.ZP.getOverlayKeybind(),
        i = d.ZP.getOverlayChatKeybind();
    l.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
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
        l.Z.track(O.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        l.Z.setNotificationPositionMode(t), Z();
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
            className: x.header,
            children: [
                (0, i.jsxs)(a.Z, {
                    children: [
                        (0, i.jsx)(o.vwX, {
                            className: x.headerTitle,
                            tag: 'h1',
                            children: v.NW.string(v.t['35G2Mj'])
                        }),
                        (0, i.jsx)(o.olH, {
                            className: x.headerClose,
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
            t = u.Z.isDeveloper
                ? (0, i.jsx)(o.njP.Item, {
                      id: 'DEVELOPER',
                      className: x.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(o.njP, {
            selectedItem: e,
            type: 'top',
            className: x.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(o.njP.Item, {
                    id: 'GENERAL',
                    className: x.tabBarItem,
                    children: v.NW.string(v.t['0FYxx8'])
                }),
                (0, i.jsx)(o.njP.Item, {
                    id: 'VOICE',
                    className: x.tabBarItem,
                    children: v.NW.string(v.t['3WeSiI'])
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
                className: x.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowKeybindIndicators: t, showKeybindIndicators: n, shouldShowInviteNotification: s } = this.props,
            a = !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            u = e !== O._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.IQv8Eh),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(o.j7V, {
                    value: a && u,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !u,
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
                        onChange: (e) => l.Z.setShowKeybindIndicators(e),
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
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: E(),
                        value: e,
                        size: o.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.J0dpcH),
                    className: b.marginBottom20,
                    children: (0, i.jsx)(o.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: j(),
                        value: t,
                        size: o.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(o.xJW, {
                    title: v.NW.string(v.t.swsWWF),
                    className: b.marginBottom20,
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
            'aria-label': v.NW.string(v.t['35G2Mj']),
            transitionState: o.Dvm.ENTERED,
            children: [this.renderHeader(), this.renderBody()]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'state', { selectedSection: 'GENERAL' }),
            S(this, 'handleSelectSection', (e) => {
                this.setState({ selectedSection: e });
            }),
            S(this, 'handleToggleTextChatNotifications', () => {
                l.Z.setNotificationDisabledSetting(g.OverlayNotificationDisabledSetting.TEXT_CHAT, !this.props.textChatDisabled), Z();
            }),
            S(this, 'handleToggleInviteNotification', () => {
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
            displayUserMode: o,
            notificationPositionMode: l,
            textChatDisabled: a,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: u
        } = (0, s.cj)([h.default, y.Z], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.TEXT_CHAT),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.Z.isNotificationDisabled(g.OverlayNotificationDisabledSetting.GAME_ACTIVITY)
        })),
        d = (0, m.Z)({ location: 'Overlay Settings' });
    return (0, i.jsx)(C, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: o,
        notificationPositionMode: l,
        textChatDisabled: a,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: d,
        shouldShowInviteNotification: u
    });
}
