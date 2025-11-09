n.d(t, { Z: () => C }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(442837),
    o = n(481060),
    l = n(13245),
    a = n(600164),
    c = n(212632),
    d = n(906467),
    u = n(556296),
    p = n(237997),
    h = n(998502),
    f = n(13140),
    g = n(486016),
    m = n(809357),
    y = n(624864),
    _ = n(987650),
    O = n(981631),
    b = n(388032),
    v = n(627641),
    E = n(10198);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S() {
    let e = p.default.getNotificationPositionMode(),
        t = e !== O._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    l.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(_.n0.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: p.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null,
    });
}
class Z extends r.PureComponent {
    componentDidMount() {
        l.Z.track(O.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        l.Z.setNotificationPositionMode(t), S();
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
            className: v.header,
            children: [
                (0, i.jsxs)(a.Z, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: v.headerTitle,
                            children: b.intl.string(b.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: v.headerClose,
                            children: (0, i.jsx)(o.hU, {
                                variant: "icon-only",
                                size: "md",
                                icon: o.Dio,
                                onClick: this.props.onClose,
                                "aria-label": b.intl.string(b.t.cpT0Cq),
                            }),
                        }),
                    ],
                }),
                this.renderTabBar(),
            ],
        });
    }
    renderTabBar() {
        let { selectedSection: e } = this.state,
            t = d.Z.isDeveloper
                ? (0, i.jsx)(o.njP.Item, {
                      id: "DEVELOPER",
                      className: v.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(o.njP, {
            selectedItem: e,
            type: "top",
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(o.njP.Item, {
                    id: "GENERAL",
                    className: v.tabBarItem,
                    children: b.intl.string(b.t["0FYxxw"]),
                }),
                (0, i.jsx)(o.njP.Item, {
                    id: "VOICE",
                    className: v.tabBarItem,
                    children: b.intl.string(b.t["3WeSiE"]),
                }),
                t,
            ],
        });
    }
    renderBody() {
        let e,
            { selectedSection: t } = this.state;
        switch (t) {
            case "DEVELOPER":
                e = this.renderDeveloperSettings();
                break;
            case "VOICE":
                e = this.renderVoiceSettings();
                break;
            default:
                e = this.renderGeneralSettings();
        }
        return (0, i.jsx)(
            o.h21,
            {
                className: v.content,
                children: e,
            },
            t,
        );
    }
    renderGeneralSettings() {
        let {
                notificationPositionMode: e,
                shouldShowKeybindIndicators: t,
                showKeybindIndicators: n,
                shouldShowInviteNotification: r,
            } = this.props,
            s = !y.Z.isNotificationDisabled(_.n0.TextChat),
            a = e !== O._vf.DISABLED;
        return (0, i.jsxs)(o.C3N, {
            children: [
                (0, i.jsx)(o.gNt, {
                    label: b.intl.string(b.t.IQv8Eo),
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(o.rsf, {
                    label: b.intl.string(b.t.Fy5kPp),
                    checked: s && a,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !a,
                }),
                (0, i.jsx)(o.rsf, {
                    label: b.intl.string(b.t["f+c48/"]),
                    description: b.intl.string(b.t.W9DVVf),
                    checked: r,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(o.rsf, {
                        label: b.intl.string(b.t.XZTl9r),
                        checked: t,
                        onChange: (e) => l.Z.setShowKeybindIndicators(e),
                    }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(o.Kqy, {
            gap: 20,
            children: [
                (0, i.jsx)(o.FXm, {
                    label: b.intl.string(b.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        {
                            value: O.ipw.LARGE,
                            name: b.intl.string(b.t.YcOxtr),
                        },
                        {
                            value: O.ipw.SMALL,
                            name: b.intl.string(b.t.BKIKqx),
                        },
                    ],
                    value: e,
                }),
                (0, i.jsx)(o.FXm, {
                    label: b.intl.string(b.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        {
                            value: O.wC$.ALWAYS,
                            name: b.intl.string(b.t.nBmDrT),
                        },
                        {
                            value: O.wC$.ONLY_WHILE_SPEAKING,
                            name: b.intl.string(b.t["2OvIZY"]),
                        },
                        {
                            value: O.wC$.NEVER,
                            name: b.intl.string(b.t.ekjlPL),
                        },
                    ],
                    value: t,
                }),
                (0, i.jsx)(o.FXm, {
                    label: b.intl.string(b.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        {
                            value: O.OYC.ALWAYS,
                            name: b.intl.string(b.t.nBmDrT),
                        },
                        {
                            value: O.OYC.ONLY_WHILE_SPEAKING,
                            name: b.intl.string(b.t["2OvIZY"]),
                        },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)("div", {
            className: E.marginBottom20,
            children: (0, i.jsx)(o.q4e, {
                label: "Crashes",
                value: void 0,
                options: [
                    {
                        value: void 0,
                        label: "Native crash",
                    },
                    {
                        value: 0,
                        label: "Abort()",
                    },
                    {
                        value: 1,
                        label: "SIGSEGV()",
                    },
                    {
                        value: 2,
                        label: "EXCEPTION_ACCESS_VIOLATION",
                    },
                    {
                        value: 3,
                        label: "RaiseFailFastException",
                    },
                    {
                        value: 4,
                        label: "Out of Memory",
                    },
                ],
                onChange: (e) => null != e && h.ZP.crash(e),
            }),
        });
    }
    render() {
        return (0, i.jsxs)(o.VqE, {
            "aria-label": b.intl.string(b.t["35G2Mq"]),
            className: v.container,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", { selectedSection: "GENERAL" }),
            x(this, "handleSelectSection", (e) => {
                this.setState({ selectedSection: e });
            }),
            x(this, "handleToggleTextChatNotifications", () => {
                l.Z.setNotificationDisabledSetting(g.i.TEXT_CHAT, !this.props.textChatDisabled), S();
            }),
            x(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                l.Z.setNotificationDisabledSetting(g.i.GAME_ACTIVITY, !e);
            });
    }
}
function C(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: o,
            notificationPositionMode: l,
            textChatDisabled: a,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d,
        } = (0, s.cj)([p.default, y.Z], () => ({
            avatarSizeMode: p.default.getAvatarSizeMode(),
            displayNameMode: p.default.getDisplayNameMode(),
            displayUserMode: p.default.getDisplayUserMode(),
            notificationPositionMode: p.default.getNotificationPositionMode(),
            textChatDisabled: y.Z.isNotificationDisabled(_.n0.TextChat),
            shouldShowKeybindIndicators: p.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.Z.isNotificationDisabled(_.n0.ActivityInvite),
        })),
        u = (0, m.Z)({ location: "Overlay Settings" });
    return (0, i.jsx)(Z, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: o,
        notificationPositionMode: l,
        textChatDisabled: a,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d,
    });
}
