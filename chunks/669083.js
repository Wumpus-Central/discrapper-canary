n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    o = n(192379),
    a = n(442837),
    l = n(481060),
    c = n(13245),
    d = n(600164),
    u = n(212632),
    h = n(906467),
    p = n(556296),
    f = n(237997),
    g = n(998502),
    m = n(13140),
    v = n(809357),
    x = n(981631),
    S = n(388032),
    Z = n(382595),
    _ = n(232186);
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
((s = i || (i = {})).GENERAL = 'GENERAL'), (s.VOICE = 'VOICE'), (s.DEVELOPER = 'DEVELOPER');
let C = () => [
        {
            value: x.ipw.LARGE,
            name: S.intl.string(S.t.YcOxtr)
        },
        {
            value: x.ipw.SMALL,
            name: S.intl.string(S.t.BKIKq6)
        }
    ],
    I = () => [
        {
            value: x.wC$.ALWAYS,
            name: S.intl.string(S.t.nBmDra)
        },
        {
            value: x.wC$.ONLY_WHILE_SPEAKING,
            name: S.intl.string(S.t['2OvIZW'])
        },
        {
            value: x.wC$.NEVER,
            name: S.intl.string(S.t.ekjlPD)
        }
    ],
    N = () => [
        {
            value: x.OYC.ALWAYS,
            name: S.intl.string(S.t.nBmDra)
        },
        {
            value: x.OYC.ONLY_WHILE_SPEAKING,
            name: S.intl.string(S.t['2OvIZW'])
        }
    ];
function y() {
    let e = f.Z.getNotificationPositionMode(),
        t = e !== x._vf.DISABLED,
        n = p.Z.getOverlayKeybind(),
        i = p.Z.getOverlayChatKeybind();
    c.Z.track(x.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: f.Z.getTextChatNotificationMode(),
        text_opacity_slider: f.Z.getTextWidgetOpacity(),
        hotkey: null != n ? (0, m.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, m.BB)(i.shortcut) : null
    });
}
class b extends o.PureComponent {
    componentDidMount() {
        c.Z.track(x.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        c.Z.setNotificationPositionMode(t), y();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        c.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        c.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        c.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, r.jsxs)(d.Z, {
            direction: d.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: Z.header,
            children: [
                (0, r.jsxs)(d.Z, {
                    children: [
                        (0, r.jsx)(l.FormTitle, {
                            className: Z.headerTitle,
                            tag: 'h1',
                            children: S.intl.string(S.t['35G2Mj'])
                        }),
                        (0, r.jsx)(l.ModalCloseButton, {
                            className: Z.headerClose,
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
            t = h.Z.isDeveloper
                ? (0, r.jsx)(l.TabBar.Item, {
                      id: 'DEVELOPER',
                      className: Z.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, r.jsxs)(l.TabBar, {
            selectedItem: e,
            type: 'top',
            className: Z.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, r.jsx)(l.TabBar.Item, {
                    id: 'GENERAL',
                    className: Z.tabBarItem,
                    children: S.intl.string(S.t['0FYxx8'])
                }),
                (0, r.jsx)(l.TabBar.Item, {
                    id: 'VOICE',
                    className: Z.tabBarItem,
                    children: S.intl.string(S.t['3WeSiI'])
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
        return (0, r.jsx)(
            l.ModalContent,
            {
                className: Z.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: i, shouldShowInviteNotification: s } = this.props,
            a = t !== x._vf.DISABLED;
        return (0, r.jsxs)(o.Fragment, {
            children: [
                (0, r.jsx)(l.FormItem, {
                    title: S.intl.string(S.t.IQv8Eh),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(u.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, r.jsx)(l.FormSwitch, {
                    value: a && e === x.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !a,
                    hideBorder: !0,
                    children: S.intl.string(S.t.Fy5kPj)
                }),
                (0, r.jsx)(l.FormSwitch, {
                    value: s,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: S.intl.string(S.t.W9DVVV),
                    children: S.intl.string(S.t['f+c48/'])
                }),
                i &&
                    (0, r.jsx)(l.FormSwitch, {
                        value: n,
                        onChange: (e) => c.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: S.intl.string(S.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, r.jsxs)(o.Fragment, {
            children: [
                (0, r.jsx)(l.FormItem, {
                    title: S.intl.string(S.t.dnvZSk),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: C(),
                        value: e,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, r.jsx)(l.FormItem, {
                    title: S.intl.string(S.t.J0dpcH),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: I(),
                        value: t,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, r.jsx)(l.FormItem, {
                    title: S.intl.string(S.t.swsWWF),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: N(),
                        value: n,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, r.jsx)(o.Fragment, {
            children: (0, r.jsx)(l.FormItem, {
                title: 'Crashes',
                className: _.marginBottom20,
                children: (0, r.jsx)(l.SingleSelect, {
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
                    onChange: (e) => null != e && g.ZP.crash(e)
                })
            })
        });
    }
    render() {
        return (0, r.jsxs)(l.ModalRoot, {
            'aria-label': S.intl.string(S.t['35G2Mj']),
            transitionState: l.ModalTransitionState.ENTERED,
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
                let { ENABLED: e, DISABLED: t } = x.Ypu,
                    n = this.props.textChatNotificationMode === e ? t : e;
                c.Z.setTextChatNotificationMode(n), y();
            }),
            E(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                c.Z.setShowGameInviteNotification(!e);
            });
    }
}
function T(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: o,
            textChatNotificationMode: l,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d
        } = (0, a.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators,
            shouldShowInviteNotification: f.Z.showInviteNotification
        })),
        u = (0, v.Z)({ location: 'Overlay Settings' });
    return (0, r.jsx)(b, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: i,
        displayUserMode: s,
        notificationPositionMode: o,
        textChatNotificationMode: l,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d
    });
}
