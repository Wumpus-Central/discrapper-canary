n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(13245),
    a = n(600164),
    d = n(212632),
    c = n(906467),
    u = n(556296),
    h = n(237997),
    p = n(998502),
    g = n(13140),
    f = n(809357),
    m = n(981631),
    x = n(388032),
    v = n(382595),
    Z = n(232186);
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
            value: m.ipw.LARGE,
            name: x.intl.string(x.t.YcOxtr)
        },
        {
            value: m.ipw.SMALL,
            name: x.intl.string(x.t.BKIKq6)
        }
    ],
    C = () => [
        {
            value: m.wC$.ALWAYS,
            name: x.intl.string(x.t.nBmDra)
        },
        {
            value: m.wC$.ONLY_WHILE_SPEAKING,
            name: x.intl.string(x.t['2OvIZW'])
        },
        {
            value: m.wC$.NEVER,
            name: x.intl.string(x.t.ekjlPD)
        }
    ],
    I = () => [
        {
            value: m.OYC.ALWAYS,
            name: x.intl.string(x.t.nBmDra)
        },
        {
            value: m.OYC.ONLY_WHILE_SPEAKING,
            name: x.intl.string(x.t['2OvIZW'])
        }
    ];
function N() {
    let e = h.Z.getNotificationPositionMode(),
        t = e !== m._vf.DISABLED,
        n = u.Z.getOverlayKeybind(),
        i = u.Z.getOverlayChatKeybind();
    o.Z.track(m.rMx.OVERLAY_SETTINGS_UPDATED, {
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
        o.Z.track(m.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: 'overlay',
            destination_pane: 'OVERLAY SETTINGS',
            origin_pane: null
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        o.Z.setNotificationPositionMode(t), N();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        o.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        o.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        o.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: v.header,
            children: [
                (0, i.jsxs)(a.Z, {
                    children: [
                        (0, i.jsx)(r.vwX, {
                            className: v.headerTitle,
                            tag: 'h1',
                            children: x.intl.string(x.t['35G2Mj'])
                        }),
                        (0, i.jsx)(r.olH, {
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
                ? (0, i.jsx)(r.njP.Item, {
                      id: 'DEVELOPER',
                      className: v.tabBarItem,
                      children: 'Developer'
                  })
                : null;
        return (0, i.jsxs)(r.njP, {
            selectedItem: e,
            type: 'top',
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(r.njP.Item, {
                    id: 'GENERAL',
                    className: v.tabBarItem,
                    children: x.intl.string(x.t['0FYxx8'])
                }),
                (0, i.jsx)(r.njP.Item, {
                    id: 'VOICE',
                    className: v.tabBarItem,
                    children: x.intl.string(x.t['3WeSiI'])
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
            r.hzk,
            {
                className: v.content,
                children: e
            },
            t
        );
    }
    renderGeneralSettings() {
        let { textChatNotificationMode: e, notificationPositionMode: t, shouldShowKeybindIndicators: n, showKeybindIndicators: l, shouldShowInviteNotification: a } = this.props,
            c = t !== m._vf.DISABLED;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(r.xJW, {
                    title: x.intl.string(x.t.IQv8Eh),
                    className: Z.marginBottom20,
                    children: (0, i.jsx)(d.Z, {
                        position: t,
                        onChange: this.handleChangeNotificationPositionMode
                    })
                }),
                (0, i.jsx)(r.j7V, {
                    value: c && e === m.Ypu.ENABLED,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !c,
                    hideBorder: !0,
                    children: x.intl.string(x.t.Fy5kPj)
                }),
                (0, i.jsx)(r.j7V, {
                    value: a,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: x.intl.string(x.t.W9DVVV),
                    children: x.intl.string(x.t['f+c48/'])
                }),
                l &&
                    (0, i.jsx)(r.j7V, {
                        value: n,
                        onChange: (e) => o.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: x.intl.string(x.t.XZTl9v)
                    })
            ]
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(r.xJW, {
                    title: x.intl.string(x.t.dnvZSk),
                    className: Z.marginBottom20,
                    children: (0, i.jsx)(r.FXm, {
                        onChange: this.handleChangeAvatarSizeMode,
                        options: E(),
                        value: e,
                        size: r.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(r.xJW, {
                    title: x.intl.string(x.t.J0dpcH),
                    className: Z.marginBottom20,
                    children: (0, i.jsx)(r.FXm, {
                        onChange: this.handleChangeDisplayNameMode,
                        options: C(),
                        value: t,
                        size: r.FXm.Sizes.SMALL
                    })
                }),
                (0, i.jsx)(r.xJW, {
                    title: x.intl.string(x.t.swsWWF),
                    className: Z.marginBottom20,
                    children: (0, i.jsx)(r.FXm, {
                        onChange: this.handleChangeDisplayUserMode,
                        options: I(),
                        value: n,
                        size: r.FXm.Sizes.SMALL
                    })
                })
            ]
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)(s.Fragment, {
            children: (0, i.jsx)(r.xJW, {
                title: 'Crashes',
                className: Z.marginBottom20,
                children: (0, i.jsx)(r.q4e, {
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
        return (0, i.jsxs)(r.Y0X, {
            'aria-label': x.intl.string(x.t['35G2Mj']),
            transitionState: r.Dvm.ENTERED,
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
                o.Z.setTextChatNotificationMode(n), N();
            }),
            S(this, 'handleToggleInviteNotification', () => {
                let e = this.props.shouldShowInviteNotification;
                o.Z.setShowGameInviteNotification(!e);
            });
    }
}
function _(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: s,
            displayUserMode: r,
            notificationPositionMode: o,
            textChatNotificationMode: a,
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
        displayUserMode: r,
        notificationPositionMode: o,
        textChatNotificationMode: a,
        shouldShowKeybindIndicators: d,
        showKeybindIndicators: u,
        shouldShowInviteNotification: c
    });
}
