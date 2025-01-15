n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i,
    s,
    r = n(200651),
    a = n(192379),
    o = n(442837),
    l = n(481060),
    d = n(13245),
    c = n(600164),
    u = n(212632),
    h = n(906467),
    p = n(556296),
    f = n(237997),
    g = n(998502),
    m = n(13140),
    v = n(809357),
    x = n(981631),
    Z = n(388032),
    S = n(382595),
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
            name: Z.intl.string(Z.t.YcOxtr)
        },
        {
            value: x.ipw.SMALL,
            name: Z.intl.string(Z.t.BKIKq6)
        }
    ],
    I = () => [
        {
            value: x.wC$.ALWAYS,
            name: Z.intl.string(Z.t.nBmDra)
        },
        {
            value: x.wC$.ONLY_WHILE_SPEAKING,
            name: Z.intl.string(Z.t['2OvIZW'])
        },
        {
            value: x.wC$.NEVER,
            name: Z.intl.string(Z.t.ekjlPD)
        }
    ],
    y = () => [
        {
            value: x.OYC.ALWAYS,
            name: Z.intl.string(Z.t.nBmDra)
        },
        {
            value: x.OYC.ONLY_WHILE_SPEAKING,
            name: Z.intl.string(Z.t['2OvIZW'])
        }
    ];
function N() {
    let e = f.Z.getNotificationPositionMode(),
        t = e !== x._vf.DISABLED,
        n = p.Z.getOverlayKeybind(),
        i = p.Z.getOverlayChatKeybind();
    d.Z.track(x.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: f.Z.getTextChatNotificationMode(),
        text_opacity_slider: f.Z.getTextWidgetOpacity(),
        hotkey: null != n ? (0, m.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, m.BB)(i.shortcut) : null
    });
}
class b extends a.PureComponent {
    componentDidMount() {
        d.Z.track(x.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        d.Z.setNotificationPositionMode(t), N();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        d.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        d.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        d.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, r.jsxs)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: S.header,
            children: [
                (0, r.jsxs)(c.Z, {
                    children: [
                        (0, r.jsx)(l.FormTitle, {
                            className: S.headerTitle,
                            tag: 'h1',
                            children: Z.intl.string(Z.t['35G2Mj'])
                        }),
                        (0, r.jsx)(l.ModalCloseButton, {
                            className: S.headerClose,
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
                      className: S.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, r.jsxs)(l.TabBar, {
            selectedItem: e,
            type: 'top',
            className: S.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, r.jsx)(l.TabBar.Item, {
                    id: 'GENERAL',
                    className: S.tabBarItem,
                    children: Z.intl.string(Z.t['0FYxx8'])
                }),
                (0, r.jsx)(l.TabBar.Item, {
                    id: 'VOICE',
                    className: S.tabBarItem,
                    children: Z.intl.string(Z.t['3WeSiI'])
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
                className: S.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: i } = this.props,
            s = t !== x._vf.DISABLED;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsx)(l.FormItem, {
                    title: Z.intl.string(Z.t.IQv8Eh),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(u.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, r.jsx)(l.FormSwitch, {
                    value: s && e === x.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                    hideBorder: !0,
                    children: Z.intl.string(Z.t.Fy5kPj)
                }),
                i &&
                    (0, r.jsx)(l.FormSwitch, {
                        value: n,
                        onChange: (e) => d.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: Z.intl.string(Z.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                (0, r.jsx)(l.FormItem, {
                    title: Z.intl.string(Z.t.dnvZSk),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: C(),
                        value: e,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, r.jsx)(l.FormItem, {
                    title: Z.intl.string(Z.t.J0dpcH),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: I(),
                        value: t,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                }),
                (0, r.jsx)(l.FormItem, {
                    title: Z.intl.string(Z.t.swsWWF),
                    className: _.marginBottom20,
                    children: (0, r.jsx)(l.RadioGroup, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: y(),
                        value: n,
                        size: l.RadioGroup.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, r.jsx)(a.Fragment, {
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
            'aria-label': Z.intl.string(Z.t['35G2Mj']),
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
                d.Z.setTextChatNotificationMode(n), N();
            });
    }
}
function T(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: i,
            displayUserMode: s,
            notificationPositionMode: a,
            textChatNotificationMode: l,
            shouldShowKeybindIndicators: d
        } = (0, o.cj)([f.Z], () => ({
            avatarSizeMode: f.Z.getAvatarSizeMode(),
            displayNameMode: f.Z.getDisplayNameMode(),
            displayUserMode: f.Z.getDisplayUserMode(),
            notificationPositionMode: f.Z.getNotificationPositionMode(),
            textChatNotificationMode: f.Z.getTextChatNotificationMode(),
            shouldShowKeybindIndicators: f.Z.showKeybindIndicators
        })),
        c = (0, v.Z)({ location: 'Overlay Settings' });
    return (0, r.jsx)(b, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: i,
        displayUserMode: s,
        notificationPositionMode: a,
        textChatNotificationMode: l,
        shouldShowKeybindIndicators: d,
        showKeybindIndicators: c
    });
}
