n.d(t, { Z: () => j }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(481060),
    s = n(13245),
    a = n(600164),
    c = n(212632),
    d = n(906467),
    u = n(556296),
    h = n(237997),
    p = n(998502),
    f = n(13140),
    g = n(486016),
    m = n(809357),
    y = n(624864),
    O = n(987650),
    _ = n(981631),
    v = n(388032),
    b = n(183322),
    E = n(197571);
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
        t = e !== _._vf.DISABLED,
        n = u.ZP.getOverlayKeybind(),
        i = u.ZP.getOverlayChatKeybind();
    s.Z.track(_.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(O.n0.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.BB)(i.shortcut) : null,
    });
}
class Z extends r.PureComponent {
    componentDidMount() {
        s.Z.track(_.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        s.Z.setNotificationPositionMode(t), x();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        s.Z.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        s.Z.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        s.Z.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(a.Z, {
            direction: a.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: b.header,
            children: [
                (0, i.jsxs)(a.Z, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: b.headerTitle,
                            children: v.intl.string(v.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: b.headerClose,
                            children: (0, i.jsx)(o.hU, {
                                variant: "icon-only",
                                size: "md",
                                icon: o.Dio,
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
                ? (0, i.jsx)(o.njP.Item, {
                      id: "DEVELOPER",
                      className: b.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(o.njP, {
            selectedItem: e,
            type: "top",
            className: b.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(o.njP.Item, {
                    id: "GENERAL",
                    className: b.tabBarItem,
                    children: v.intl.string(v.t["0FYxxw"]),
                }),
                (0, i.jsx)(o.njP.Item, {
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
            o.h21,
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
            l = !y.Z.isNotificationDisabled(O.n0.TextChat),
            a = e !== _._vf.DISABLED;
        return (0, i.jsxs)(o.C3N, {
            children: [
                (0, i.jsx)(o.gNt, {
                    label: v.intl.string(v.t.IQv8Eo),
                    children: (0, i.jsx)(c.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(o.rsf, {
                    label: v.intl.string(v.t.Fy5kPp),
                    checked: l && a,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !a,
                }),
                (0, i.jsx)(o.rsf, {
                    label: v.intl.string(v.t["f+c48/"]),
                    description: v.intl.string(v.t.W9DVVf),
                    checked: r,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(o.rsf, {
                        label: v.intl.string(v.t.XZTl9r),
                        checked: t,
                        onChange: (e) => s.Z.setShowKeybindIndicators(e),
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
                    label: v.intl.string(v.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        {
                            value: _.ipw.LARGE,
                            name: v.intl.string(v.t.YcOxtr),
                        },
                        {
                            value: _.ipw.SMALL,
                            name: v.intl.string(v.t.BKIKqx),
                        },
                    ],
                    value: e,
                }),
                (0, i.jsx)(o.FXm, {
                    label: v.intl.string(v.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        {
                            value: _.wC$.ALWAYS,
                            name: v.intl.string(v.t.nBmDrT),
                        },
                        {
                            value: _.wC$.ONLY_WHILE_SPEAKING,
                            name: v.intl.string(v.t["2OvIZY"]),
                        },
                        {
                            value: _.wC$.NEVER,
                            name: v.intl.string(v.t.ekjlPL),
                        },
                    ],
                    value: t,
                }),
                (0, i.jsx)(o.FXm, {
                    label: v.intl.string(v.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        {
                            value: _.OYC.ALWAYS,
                            name: v.intl.string(v.t.nBmDrT),
                        },
                        {
                            value: _.OYC.ONLY_WHILE_SPEAKING,
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
                onChange: (e) => null != e && p.ZP.crash(e),
            }),
        });
    }
    render() {
        return (0, i.jsxs)(o.VqE, {
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
                s.Z.setNotificationDisabledSetting(g.i.TEXT_CHAT, !this.props.textChatDisabled), x();
            }),
            S(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                s.Z.setNotificationDisabledSetting(g.i.GAME_ACTIVITY, !e);
            });
    }
}
function j(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: o,
            notificationPositionMode: s,
            textChatDisabled: a,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d,
        } = (0, l.cj)([h.default, y.Z], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: y.Z.isNotificationDisabled(O.n0.TextChat),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.Z.isNotificationDisabled(O.n0.ActivityInvite),
        })),
        u = (0, m.Z)({ location: "Overlay Settings" });
    return (0, i.jsx)(Z, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: o,
        notificationPositionMode: s,
        textChatDisabled: a,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d,
    });
}
