"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(684013),
    o = n(235986),
    d = n(499820),
    c = n(540999),
    u = n(532624),
    h = n(256415),
    p = n(837921),
    A = n(350535),
    f = n(93465),
    g = n(592598),
    _ = n(672396),
    m = n(652215),
    E = n(985018),
    x = n(300597),
    y = n(473169);
function v() {
    let e = h.default.getNotificationPositionMode(),
        t = e !== m.G6Q.DISABLED,
        n = u.Ay.getOverlayKeybind(),
        i = u.Ay.getOverlayChatKeybind();
    r.A.track(m.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: g.A.isNotificationDisabled(_.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, A.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, A.dI)(i.shortcut) : null,
    });
}
class S extends s.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        r.A.track(m.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        r.A.setNotificationDisabledSetting(f.M.TEXT_CHAT, !this.props.textChatDisabled), v();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        r.A.setNotificationDisabledSetting(f.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        r.A.setNotificationPositionMode(t), v();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        r.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        r.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        r.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(o.A, {
            direction: o.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: x.wx,
            children: [
                (0, i.jsxs)(o.A, {
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: x.qd,
                            children: E.intl.string(E.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: x.Q7,
                            children: (0, i.jsx)(a.K0, {
                                variant: "icon-only",
                                size: "md",
                                icon: a.PGe,
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
            t = c.A.isDeveloper
                ? (0, i.jsx)(a.VQ0.Item, { id: "DEVELOPER", className: x.YU, children: "Developer" })
                : null;
        return (0, i.jsxs)(a.VQ0, {
            selectedItem: e,
            type: "top",
            className: x.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(a.VQ0.Item, { id: "GENERAL", className: x.YU, children: E.intl.string(E.t["0FYxxw"]) }),
                (0, i.jsx)(a.VQ0.Item, { id: "VOICE", className: x.YU, children: E.intl.string(E.t["3WeSiE"]) }),
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
        return (0, i.jsx)(a.ChK, { className: x.Qs, children: e }, t);
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !g.A.isNotificationDisabled(_.KS.TextChat),
            s = e !== m.G6Q.DISABLED;
        return (0, i.jsxs)(a.nVY, {
            children: [
                (0, i.jsx)(a.D0$, {
                    label: E.intl.string(E.t.IQv8Eo),
                    children: (0, i.jsx)(d.A, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, i.jsx)(a.dOG, {
                    label: E.intl.string(E.t.Fy5kPp),
                    checked: n && s,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                }),
                (0, i.jsx)(a.dOG, {
                    label: E.intl.string(E.t["f+c48/"]),
                    description: E.intl.string(E.t.W9DVVf),
                    checked: t,
                    onChange: this.handleToggleInviteNotification,
                }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(a.BJc, {
            gap: 20,
            children: [
                (0, i.jsx)(a.z6M, {
                    label: E.intl.string(E.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: m.OSZ.LARGE, name: E.intl.string(E.t.YcOxtr) },
                        { value: m.OSZ.SMALL, name: E.intl.string(E.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, i.jsx)(a.z6M, {
                    label: E.intl.string(E.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: m.pwA.ALWAYS, name: E.intl.string(E.t.nBmDrT) },
                        { value: m.pwA.ONLY_WHILE_SPEAKING, name: E.intl.string(E.t["2OvIZY"]) },
                        { value: m.pwA.NEVER, name: E.intl.string(E.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, i.jsx)(a.z6M, {
                    label: E.intl.string(E.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: m.f5z.ALWAYS, name: E.intl.string(E.t.nBmDrT) },
                        { value: m.f5z.ONLY_WHILE_SPEAKING, name: E.intl.string(E.t["2OvIZY"]) },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)("div", {
            className: y.SX,
            children: (0, i.jsx)(a.l6P, {
                label: "Crashes",
                value: void 0,
                options: [
                    { id: "native-crash", value: void 0, label: "Native crash" },
                    { id: "abort", value: 0, label: "Abort()" },
                    { id: "sigsegv", value: 1, label: "SIGSEGV()" },
                    { id: "exception-access-violation", value: 2, label: "EXCEPTION_ACCESS_VIOLATION" },
                    { id: "raise-fail-fast-exception", value: 3, label: "RaiseFailFastException" },
                    { id: "out-of-memory", value: 4, label: "Out of Memory" },
                ],
                onSelectionChange: (e) => null != e && p.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, i.jsxs)(a.lGe, {
            "aria-label": E.intl.string(E.t["35G2Mq"]),
            className: x.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function C(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: s,
            displayUserMode: a,
            notificationPositionMode: r,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, l.cf)([h.default, g.A], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: g.A.isNotificationDisabled(_.KS.TextChat),
            shouldShowInviteNotification: !g.A.isNotificationDisabled(_.KS.ActivityInvite),
        }));
    return (0, i.jsx)(S, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: s,
        displayUserMode: a,
        notificationPositionMode: r,
        textChatDisabled: o,
        shouldShowInviteNotification: d,
    });
}
