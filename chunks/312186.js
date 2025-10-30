n.d(t, { Z: () => C }), n(388685);
var i = n(951288),
    r = n(647438),
    o = n(442837),
    l = n(481060),
    a = n(13245),
    s = n(600164),
    c = n(212632),
    d = n(906467),
    u = n(556296),
    h = n(237997),
    p = n(998502),
    f = n(13140),
    g = n(486016),
    m = n(809357),
    _ = n(624864),
    y = n(987650),
    O = n(981631),
    v = n(388032),
    b = n(627641),
    E = n(10198);
function S(e, t, n) {
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
function x() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== O._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    a.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: _.Z.isNotificationDisabled(y.n0.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null,
    });
}
class Z extends r.PureComponent {
    componentDidMount() {
        a.Z.track(O.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        a.Z.setNotificationPositionMode(t), x();
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
        return (0, i.jsxs)(s.Z, {
            direction: s.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: b.header,
            children: [
                (0, i.jsxs)(s.Z, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            className: b.headerTitle,
                            children: v.intl.string(v.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: b.headerClose,
                            children: (0, i.jsx)(l.hU, {
                                variant: "icon-only",
                                size: "md",
                                icon: l.Dio,
                                onClick: this.props.onClose,
                                "aria-label": v.intl.string(v.t.cpT0Cq),
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
                ? (0, i.jsx)(l.njP.Item, {
                      id: "DEVELOPER",
                      className: b.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(l.njP, {
            selectedItem: e,
            type: "top",
            className: b.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(l.njP.Item, {
                    id: "GENERAL",
                    className: b.tabBarItem,
                    children: v.intl.string(v.t["0FYxxw"]),
                }),
                (0, i.jsx)(l.njP.Item, {
                    id: "VOICE",
                    className: b.tabBarItem,
                    children: v.intl.string(v.t["3WeSiE"]),
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
            l.h21,
            {
                className: b.content,
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
            o = !_.Z.isNotificationDisabled(y.n0.TextChat),
            s = e !== O._vf.DISABLED;
        return (0, i.jsxs)(l.C3N, {
            children: [
                (0, i.jsx)(l.gNt, {
                    label: v.intl.string(v.t.IQv8Eo),
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(l.rsf, {
                    label: v.intl.string(v.t.Fy5kPp),
                    checked: o && s,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                }),
                (0, i.jsx)(l.rsf, {
                    label: v.intl.string(v.t["f+c48/"]),
                    description: v.intl.string(v.t.W9DVVf),
                    checked: r,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(l.rsf, {
                        label: v.intl.string(v.t.XZTl9r),
                        checked: t,
                        onChange: (e) => a.Z.setShowKeybindIndicators(e),
                    }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(l.Kqy, {
            gap: 20,
            children: [
                (0, i.jsx)(l.FXm, {
                    label: v.intl.string(v.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        {
                            value: O.ipw.LARGE,
                            name: v.intl.string(v.t.YcOxtr),
                        },
                        {
                            value: O.ipw.SMALL,
                            name: v.intl.string(v.t.BKIKqx),
                        },
                    ],
                    value: e,
                }),
                (0, i.jsx)(l.FXm, {
                    label: v.intl.string(v.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        {
                            value: O.wC$.ALWAYS,
                            name: v.intl.string(v.t.nBmDrT),
                        },
                        {
                            value: O.wC$.ONLY_WHILE_SPEAKING,
                            name: v.intl.string(v.t["2OvIZY"]),
                        },
                        {
                            value: O.wC$.NEVER,
                            name: v.intl.string(v.t.ekjlPL),
                        },
                    ],
                    value: t,
                }),
                (0, i.jsx)(l.FXm, {
                    label: v.intl.string(v.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        {
                            value: O.OYC.ALWAYS,
                            name: v.intl.string(v.t.nBmDrT),
                        },
                        {
                            value: O.OYC.ONLY_WHILE_SPEAKING,
                            name: v.intl.string(v.t["2OvIZY"]),
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
            children: (0, i.jsx)(l.q4e, {
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
                onChange: (e) => null != e && p.ZP.crash(e),
            }),
        });
    }
    render() {
        return (0, i.jsxs)(l.VqE, {
            "aria-label": v.intl.string(v.t["35G2Mq"]),
            className: b.container,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "state", { selectedSection: "GENERAL" }),
            S(this, "handleSelectSection", (e) => {
                this.setState({ selectedSection: e });
            }),
            S(this, "handleToggleTextChatNotifications", () => {
                a.Z.setNotificationDisabledSetting(g.i.TEXT_CHAT, !this.props.textChatDisabled), x();
            }),
            S(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                a.Z.setNotificationDisabledSetting(g.i.GAME_ACTIVITY, !e);
            });
    }
}
function C(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: l,
            notificationPositionMode: a,
            textChatDisabled: s,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d,
        } = (0, o.cj)([h.default, _.Z], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: _.Z.isNotificationDisabled(y.n0.TextChat),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
            shouldShowInviteNotification: !_.Z.isNotificationDisabled(y.n0.ActivityInvite),
        })),
        u = (0, m.Z)({ location: "Overlay Settings" });
    return (0, i.jsx)(Z, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: l,
        notificationPositionMode: a,
        textChatDisabled: s,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d,
    });
}
