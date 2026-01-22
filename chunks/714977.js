n.d(t, {
    A: () => _,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    o = n(684013),
    a = n(235986),
    c = n(499820),
    d = n(540999),
    u = n(532624),
    h = n(256415),
    p = n(837921),
    f = n(350535),
    b = n(93465),
    g = n(994322),
    y = n(592598),
    A = n(672396),
    m = n(652215),
    O = n(985018),
    v = n(300597),
    E = n(473169);

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
    let e = h.default.getNotificationPositionMode(),
        t = e !== m.G6Q.DISABLED,
        n = u.Ay.getOverlayKeybind(),
        i = u.Ay.getOverlayChatKeybind();
    o.A.track(m.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.A.isNotificationDisabled(A.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.dI)(i.shortcut) : null,
    });
}
class j extends r.PureComponent {
    componentDidMount() {
        o.A.track(m.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        o.A.setNotificationPositionMode(t), S();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        o.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        o.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        o.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(a.A, {
            direction: a.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: v.wx,
            children: [
                (0, i.jsxs)(a.A, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            className: v.qd,
                            children: O.intl.string(O.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: v.Q7,
                            children: (0, i.jsx)(l.K0, {
                                variant: "icon-only",
                                size: "md",
                                icon: l.PGe,
                                onClick: this.props.onClose,
                                "aria-label": O.intl.string(O.t.cpT0Cq),
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
            t = d.A.isDeveloper
                ? (0, i.jsx)(l.VQ0.Item, {
                      id: "DEVELOPER",
                      className: v.YU,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(l.VQ0, {
            selectedItem: e,
            type: "top",
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(l.VQ0.Item, {
                    id: "GENERAL",
                    className: v.YU,
                    children: O.intl.string(O.t["0FYxxw"]),
                }),
                (0, i.jsx)(l.VQ0.Item, {
                    id: "VOICE",
                    className: v.YU,
                    children: O.intl.string(O.t["3WeSiE"]),
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
            l.ChK,
            {
                className: v.Qs,
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
            s = !y.A.isNotificationDisabled(A.KS.TextChat),
            a = e !== m.G6Q.DISABLED;
        return (0, i.jsxs)(l.nVY, {
            children: [
                (0, i.jsx)(l.D0$, {
                    label: O.intl.string(O.t.IQv8Eo),
                    children: (0, i.jsx)(c.A, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(l.dOG, {
                    label: O.intl.string(O.t.Fy5kPp),
                    checked: s && a,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !a,
                }),
                (0, i.jsx)(l.dOG, {
                    label: O.intl.string(O.t["f+c48/"]),
                    description: O.intl.string(O.t.W9DVVf),
                    checked: r,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(l.dOG, {
                        label: O.intl.string(O.t.XZTl9r),
                        checked: t,
                        onChange: (e) => o.A.setShowKeybindIndicators(e),
                    }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(l.BJc, {
            gap: 20,
            children: [
                (0, i.jsx)(l.z6M, {
                    label: O.intl.string(O.t.dnvZSg),
                    onChange: (e) =>
                        this.handleChangeAvatarSizeMode({
                            value: e,
                        }),
                    options: [
                        {
                            value: m.OSZ.LARGE,
                            name: O.intl.string(O.t.YcOxtr),
                        },
                        {
                            value: m.OSZ.SMALL,
                            name: O.intl.string(O.t.BKIKqx),
                        },
                    ],
                    value: e,
                }),
                (0, i.jsx)(l.z6M, {
                    label: O.intl.string(O.t.J0dpcB),
                    onChange: (e) =>
                        this.handleChangeDisplayNameMode({
                            value: e,
                        }),
                    options: [
                        {
                            value: m.pwA.ALWAYS,
                            name: O.intl.string(O.t.nBmDrT),
                        },
                        {
                            value: m.pwA.ONLY_WHILE_SPEAKING,
                            name: O.intl.string(O.t["2OvIZY"]),
                        },
                        {
                            value: m.pwA.NEVER,
                            name: O.intl.string(O.t.ekjlPL),
                        },
                    ],
                    value: t,
                }),
                (0, i.jsx)(l.z6M, {
                    label: O.intl.string(O.t.swsWWC),
                    onChange: (e) =>
                        this.handleChangeDisplayUserMode({
                            value: e,
                        }),
                    options: [
                        {
                            value: m.f5z.ALWAYS,
                            name: O.intl.string(O.t.nBmDrT),
                        },
                        {
                            value: m.f5z.ONLY_WHILE_SPEAKING,
                            name: O.intl.string(O.t["2OvIZY"]),
                        },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)("div", {
            className: E.SX,
            children: (0, i.jsx)(l.l6P, {
                label: "Crashes",
                value: void 0,
                options: [
                    {
                        id: "native-crash",
                        value: void 0,
                        label: "Native crash",
                    },
                    {
                        id: "abort",
                        value: 0,
                        label: "Abort()",
                    },
                    {
                        id: "sigsegv",
                        value: 1,
                        label: "SIGSEGV()",
                    },
                    {
                        id: "exception-access-violation",
                        value: 2,
                        label: "EXCEPTION_ACCESS_VIOLATION",
                    },
                    {
                        id: "raise-fail-fast-exception",
                        value: 3,
                        label: "RaiseFailFastException",
                    },
                    {
                        id: "out-of-memory",
                        value: 4,
                        label: "Out of Memory",
                    },
                ],
                onSelectionChange: (e) => null != e && p.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, i.jsxs)(l.lGe, {
            "aria-label": O.intl.string(O.t["35G2Mq"]),
            className: v.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", {
                selectedSection: "GENERAL",
            }),
            x(this, "handleSelectSection", (e) => {
                this.setState({
                    selectedSection: e,
                });
            }),
            x(this, "handleToggleTextChatNotifications", () => {
                o.A.setNotificationDisabledSetting(b.M.TEXT_CHAT, !this.props.textChatDisabled), S();
            }),
            x(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                o.A.setNotificationDisabledSetting(b.M.GAME_ACTIVITY, !e);
            });
    }
}

function _(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: l,
            notificationPositionMode: o,
            textChatDisabled: a,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d,
        } = (0, s.cf)([h.default, y.A], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: y.A.isNotificationDisabled(A.KS.TextChat),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.A.isNotificationDisabled(A.KS.ActivityInvite),
        })),
        u = (0, g.A)({
            location: "Overlay Settings",
        });
    return (0, i.jsx)(j, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: r,
        displayUserMode: l,
        notificationPositionMode: o,
        textChatDisabled: a,
        shouldShowKeybindIndicators: c,
        showKeybindIndicators: u,
        shouldShowInviteNotification: d,
    });
}
