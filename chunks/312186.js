n.d(t, { Z: () => C }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    s = n(199849),
    o = n(481060),
    l = n(13245),
    c = n(600164),
    d = n(212632),
    u = n(906467),
    f = n(556296),
    h = n(237997),
    p = n(998502),
    g = n(13140),
    b = n(486016),
    m = n(809357),
    y = n(624864),
    v = n(987650),
    O = n(981631),
    E = n(388032),
    x = n(512080),
    S = n(478411);
function _(e, t, n) {
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
function Z() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== O._vf.DISABLED,
        n = f.ZP.getOverlayKeybind(),
        i = f.ZP.getOverlayChatKeybind();
    l.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(v.n0.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
    });
}
class j extends r.PureComponent {
    componentDidMount() {
        l.Z.track(O.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
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
        return (0, i.jsxs)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: x.header,
            children: [
                (0, i.jsxs)(c.Z, {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            className: x.headerTitle,
                            children: E.intl.string(E.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: x.headerClose,
                            children: (0, i.jsx)(o.hU, {
                                variant: "icon-only",
                                size: "md",
                                icon: o.Dio,
                                onClick: this.props.onClose,
                                "aria-label": E.intl.string(E.t.cpT0Cq),
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
            t = u.Z.isDeveloper
                ? (0, i.jsx)(o.njP.Item, {
                      id: "DEVELOPER",
                      className: x.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(o.njP, {
            selectedItem: e,
            type: "top",
            className: x.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(o.njP.Item, {
                    id: "GENERAL",
                    className: x.tabBarItem,
                    children: E.intl.string(E.t["0FYxxw"]),
                }),
                (0, i.jsx)(o.njP.Item, {
                    id: "VOICE",
                    className: x.tabBarItem,
                    children: E.intl.string(E.t["3WeSiE"]),
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
                className: x.content,
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
            a = !y.Z.isNotificationDisabled(v.n0.TextChat),
            s = e !== O._vf.DISABLED;
        return (0, i.jsxs)(o.C3N, {
            children: [
                (0, i.jsx)(o.gNt, {
                    label: E.intl.string(E.t.IQv8Eo),
                    children: (0, i.jsx)(d.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(o.rsf, {
                    label: E.intl.string(E.t.Fy5kPp),
                    checked: a && s,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                }),
                (0, i.jsx)(o.rsf, {
                    label: E.intl.string(E.t["f+c48/"]),
                    description: E.intl.string(E.t.W9DVVf),
                    checked: r,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(o.rsf, {
                        label: E.intl.string(E.t.XZTl9r),
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
                    label: E.intl.string(E.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        {
                            value: O.ipw.LARGE,
                            name: E.intl.string(E.t.YcOxtr),
                        },
                        {
                            value: O.ipw.SMALL,
                            name: E.intl.string(E.t.BKIKqx),
                        },
                    ],
                    value: e,
                }),
                (0, i.jsx)(o.FXm, {
                    label: E.intl.string(E.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        {
                            value: O.wC$.ALWAYS,
                            name: E.intl.string(E.t.nBmDrT),
                        },
                        {
                            value: O.wC$.ONLY_WHILE_SPEAKING,
                            name: E.intl.string(E.t["2OvIZY"]),
                        },
                        {
                            value: O.wC$.NEVER,
                            name: E.intl.string(E.t.ekjlPL),
                        },
                    ],
                    value: t,
                }),
                (0, i.jsx)(o.FXm, {
                    label: E.intl.string(E.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        {
                            value: O.OYC.ALWAYS,
                            name: E.intl.string(E.t.nBmDrT),
                        },
                        {
                            value: O.OYC.ONLY_WHILE_SPEAKING,
                            name: E.intl.string(E.t["2OvIZY"]),
                        },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)("div", {
            className: S.marginBottom20,
            children: (0, i.jsx)(s.y6, {
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
            "aria-label": E.intl.string(E.t["35G2Mq"]),
            className: x.container,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
    constructor(...e) {
        super(...e),
            _(this, "state", { selectedSection: "GENERAL" }),
            _(this, "handleSelectSection", (e) => {
                this.setState({ selectedSection: e });
            }),
            _(this, "handleToggleTextChatNotifications", () => {
                l.Z.setNotificationDisabledSetting(b.i.TEXT_CHAT, !this.props.textChatDisabled), Z();
            }),
            _(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                l.Z.setNotificationDisabledSetting(b.i.GAME_ACTIVITY, !e);
            });
    }
}
function C(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: s,
            notificationPositionMode: o,
            textChatDisabled: l,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d,
        } = (0, a.cj)([h.default, y.Z], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: y.Z.isNotificationDisabled(v.n0.TextChat),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.Z.isNotificationDisabled(v.n0.ActivityInvite),
        })),
        u = (0, m.Z)({ location: "Overlay Settings" });
    return (0, i.jsx)(j, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: s,
        notificationPositionMode: o,
        textChatDisabled: l,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d,
    });
}
