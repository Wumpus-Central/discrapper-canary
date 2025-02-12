n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(481060),
    r = n(13245),
    o = n(600164),
    d = n(212632),
    c = n(906467),
    u = n(556296),
    h = n(237997),
    p = n(998502),
    g = n(13140),
    f = n(809357),
    m = n(981631),
    _ = n(388032),
    v = n(883681),
    x = n(814632);
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
let Z = () => [
        {
            value: m.ipw.LARGE,
            name: _.intl.string(_.t.YcOxtr)
        },
        {
            value: m.ipw.SMALL,
            name: _.intl.string(_.t.BKIKq6)
        }
    ],
    E = () => [
        {
            value: m.wC$.ALWAYS,
            name: _.intl.string(_.t.nBmDra)
        },
        {
            value: m.wC$.ONLY_WHILE_SPEAKING,
            name: _.intl.string(_.t['2OvIZW'])
        },
        {
            value: m.wC$.NEVER,
            name: _.intl.string(_.t.ekjlPD)
        }
    ],
    C = () => [
        {
            value: m.OYC.ALWAYS,
            name: _.intl.string(_.t.nBmDra)
        },
        {
            value: m.OYC.ONLY_WHILE_SPEAKING,
            name: _.intl.string(_.t['2OvIZW'])
        }
    ];
function I() {
    let e = h.Z.getNotificationPositionMode(),
        t = e !== m._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    r.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: h.Z.getTextChatNotificationMode(),
        text_opacity_slider: h.Z.getTextWidgetOpacity(),
        hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null
    });
}
class y extends s.PureComponent {
    componentDidMount() {
        r.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        r.Z.setNotificationPositionMode(t), I();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        r.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        r.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        r.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(o.Z, {
            direction: o.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: v.header,
            children: [
                (0, i.jsxs)(o.Z, {
                    children: [
                        (0, i.jsx)(a.vwX, {
                            className: v.headerTitle,
                            tag: 'h1',
                            children: _.intl.string(_.t['35G2Mj'])
                        }),
                        (0, i.jsx)(a.olH, {
                            className: v.headerClose,
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
            t = c.Z.isDeveloper
                ? (0, i.jsx)(a.njP.Item, {
                      id: 'DEVELOPER',
                      className: v.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(a.njP, {
            selectedItem: e,
            type: 'top',
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(a.njP.Item, {
                    id: 'GENERAL',
                    className: v.tabBarItem,
                    children: _.intl.string(_.t['0FYxx8'])
                }),
                (0, i.jsx)(a.njP.Item, {
                    id: 'VOICE',
                    className: v.tabBarItem,
                    children: _.intl.string(_.t['3WeSiI'])
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
            a.hzk,
            {
                className: v.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: l, shouldShowInviteNotification: o } = this.props,
            c = t !== m._vf.DISABLED;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t.IQv8Eh),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(d.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(a.j7V, {
                    value: c && e === m.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !c,
                    hideBorder: !0,
                    children: _.intl.string(_.t.Fy5kPj)
                }),
                (0, i.jsx)(a.j7V, {
                    value: o,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: _.intl.string(_.t.W9DVVV),
                    children: _.intl.string(_.t['f+c48/'])
                }),
                l &&
                    (0, i.jsx)(a.j7V, {
                        value: n,
                        onChange: (e) => r.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: _.intl.string(_.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t.dnvZSk),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: Z(),
                        value: e,
                        size: a.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t.J0dpcH),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: E(),
                        value: t,
                        size: a.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(a.xJW, {
                    title: _.intl.string(_.t.swsWWF),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: C(),
                        value: n,
                        size: a.FXm.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)(s.Fragment, {
            children: (0, i.jsx)(a.xJW, {
                title: 'Crashes',
                className: x.marginBottom20,
                children: (0, i.jsx)(a.q4e, {
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
            })
        });
    }
    render() {
        return (0, i.jsxs)(a.Y0X, {
            'aria-label': _.intl.string(_.t['35G2Mj']),
            transitionState: a.Dvm.ENTERED,
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
                let { ENABLED: e, DISABLED: t } = m.Ypu,
                    n = this.props.textChatNotificationMode === e ? t : e;
                r.Z.setTextChatNotificationMode(n), I();
            }),
            S(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                r.Z.setShowGameInviteNotification(!e);
            });
    }
}
function N(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: s,
            displayUserMode: a,
            notificationPositionMode: r,
            textChatNotificationMode: o,
            shouldShowKeybindIndicators: d,
            shouldShowInviteNotification: c
        } = (0, l.cj)([h.Z], () => ({
            avatarSizeMode: h.Z.getAvatarSizeMode(),
            displayNameMode: h.Z.getDisplayNameMode(),
            displayUserMode: h.Z.getDisplayUserMode(),
            notificationPositionMode: h.Z.getNotificationPositionMode(),
            textChatNotificationMode: h.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: h.Z.showKeybindIndicators,
            shouldShowInviteNotification: h.Z.showInviteNotification
        })),
        u = (0, f.Z)({ location: 'Overlay Settings' });
    return (0, i.jsx)(y, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: s,
        displayUserMode: a,
        notificationPositionMode: r,
        textChatNotificationMode: o,
        shouldShowKeybindIndicators: d,
        showKeybindIndicators: u,
        shouldShowInviteNotification: c
    });
}
