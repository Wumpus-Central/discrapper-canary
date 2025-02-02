n.d(t, { Z: () => _ }), n(47120);
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
    m = n(809357),
    f = n(981631),
    v = n(388032),
    Z = n(382595),
    x = n(232186);
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
            value: f.ipw.LARGE,
            name: v.intl.string(v.t.YcOxtr)
        },
        {
            value: f.ipw.SMALL,
            name: v.intl.string(v.t.BKIKq6)
        }
    ],
    C = () => [
        {
            value: f.wC$.ALWAYS,
            name: v.intl.string(v.t.nBmDra)
        },
        {
            value: f.wC$.ONLY_WHILE_SPEAKING,
            name: v.intl.string(v.t['2OvIZW'])
        },
        {
            value: f.wC$.NEVER,
            name: v.intl.string(v.t.ekjlPD)
        }
    ],
    y = () => [
        {
            value: f.OYC.ALWAYS,
            name: v.intl.string(v.t.nBmDra)
        },
        {
            value: f.OYC.ONLY_WHILE_SPEAKING,
            name: v.intl.string(v.t['2OvIZW'])
        }
    ];
function N() {
    let e = h.Z.getNotificationPositionMode(),
        t = e !== f._vf.DISABLED,
        n = u.Z.getOverlayKeybind(),
        i = u.Z.getOverlayChatKeybind();
    r.Z.track(f.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: h.Z.getTextChatNotificationMode(),
        text_opacity_slider: h.Z.getTextWidgetOpacity(),
        hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null
    });
}
class I extends s.PureComponent {
    componentDidMount() {
        r.Z.track(f.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        r.Z.setNotificationPositionMode(t), N();
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
            className: Z.header,
            children: [
                (0, i.jsxs)(o.Z, {
                    children: [
                        (0, i.jsx)(a.vwX, {
                            className: Z.headerTitle,
                            tag: 'h1',
                            children: v.intl.string(v.t['35G2Mj'])
                        }),
                        (0, i.jsx)(a.olH, {
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
            t = c.Z.isDeveloper
                ? (0, i.jsx)(a.njP.Item, {
                      id: 'DEVELOPER',
                      className: Z.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(a.njP, {
            selectedItem: e,
            type: 'top',
            className: Z.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(a.njP.Item, {
                    id: 'GENERAL',
                    className: Z.tabBarItem,
                    children: v.intl.string(v.t['0FYxx8'])
                }),
                (0, i.jsx)(a.njP.Item, {
                    id: 'VOICE',
                    className: Z.tabBarItem,
                    children: v.intl.string(v.t['3WeSiI'])
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
                className: Z.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: l, shouldShowInviteNotification: o } = this.props,
            c = t !== f._vf.DISABLED;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: v.intl.string(v.t.IQv8Eh),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(d.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(a.j7V, {
                    value: c && e === f.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !c,
                    hideBorder: !0,
                    children: v.intl.string(v.t.Fy5kPj)
                }),
                (0, i.jsx)(a.j7V, {
                    value: o,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: v.intl.string(v.t.W9DVVV),
                    children: v.intl.string(v.t['f+c48/'])
                }),
                l &&
                    (0, i.jsx)(a.j7V, {
                        value: n,
                        onChange: (e) => r.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: v.intl.string(v.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(a.xJW, {
                    title: v.intl.string(v.t.dnvZSk),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: E(),
                        value: e,
                        size: a.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(a.xJW, {
                    title: v.intl.string(v.t.J0dpcH),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: C(),
                        value: t,
                        size: a.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(a.xJW, {
                    title: v.intl.string(v.t.swsWWF),
                    className: x.marginBottom20,
                    children: (0, i.jsx)(a.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: y(),
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
            'aria-label': v.intl.string(v.t['35G2Mj']),
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
                let { ENABLED: e, DISABLED: t } = f.Ypu,
                    n = this.props.textChatNotificationMode === e ? t : e;
                r.Z.setTextChatNotificationMode(n), N();
            }),
            S(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                r.Z.setShowGameInviteNotification(!e);
            });
    }
}
function _(e) {
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
        u = (0, m.Z)({ location: 'Overlay Settings' });
    return (0, i.jsx)(I, {
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
