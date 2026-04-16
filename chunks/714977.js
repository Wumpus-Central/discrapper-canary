"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(684013),
    o = n(235986),
    d = n(499820),
    c = n(540999),
    u = n(351906),
    h = n(532624),
    p = n(256415),
    A = n(837921),
    f = n(350535),
    g = n(93465),
    m = n(589051),
    _ = n(592598),
    x = n(672396),
    E = n(652215),
    y = n(985018),
    v = n(14552),
    S = n(818050);
function C() {
    let e = p.default.getNotificationPositionMode(),
        t = e !== E.G6Q.DISABLED,
        n = h.Ay.getOverlayKeybind(),
        i = h.Ay.getOverlayChatKeybind();
    r.A.track(E.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: _.A.isNotificationDisabled(x.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: p.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, f.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, f.dI)(i.shortcut) : null,
    });
}
class I extends s.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        r.A.track(E.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        r.A.setNotificationDisabledSetting(g.M.TEXT_CHAT, !this.props.textChatDisabled), C();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        r.A.setNotificationDisabledSetting(g.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        r.A.setNotificationPositionMode(t), C();
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
            className: v.wx,
            children: [
                (0, i.jsxs)(o.A, {
                    children: [
                        (0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            className: v.qd,
                            children: y.intl.string(y.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: v.Q7,
                            children: (0, i.jsx)(a.K0, {
                                variant: "icon-only",
                                size: "md",
                                icon: a.PGe,
                                onClick: this.props.onClose,
                                "aria-label": y.intl.string(y.t.cpT0Cq),
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
                ? (0, i.jsx)(a.VQ0.Item, { id: "DEVELOPER", className: v.YU, children: "Developer" })
                : null;
        return (0, i.jsxs)(a.VQ0, {
            selectedItem: e,
            type: "top",
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(a.VQ0.Item, { id: "GENERAL", className: v.YU, children: y.intl.string(y.t["0FYxxw"]) }),
                (0, i.jsx)(a.VQ0.Item, { id: "VOICE", className: v.YU, children: y.intl.string(y.t["3WeSiE"]) }),
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
        return (0, i.jsxs)(
            a.ChK,
            {
                className: v.Qs,
                children: [
                    this.props.streamerModeEnabled &&
                        (0, i.jsx)(a.wx6, { type: "warning", children: y.intl.string(y.t["1CC/lX"]) }),
                    e,
                ],
            },
            t,
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !_.A.isNotificationDisabled(x.KS.TextChat),
            s = e !== E.G6Q.DISABLED;
        return (0, i.jsxs)(a.nVY, {
            children: [
                (0, i.jsx)(a.D0$, {
                    label: y.intl.string(y.t.IQv8Eo),
                    children: (0, i.jsx)(d.A, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, i.jsx)(a.dOG, {
                    label: y.intl.string(y.t.Fy5kPp),
                    checked: n && s,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                }),
                (0, i.jsx)(a.dOG, {
                    label: y.intl.string(y.t["f+c48/"]),
                    description: y.intl.string(y.t.W9DVVf),
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
                    label: y.intl.string(y.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: E.OSZ.LARGE, name: y.intl.string(y.t.YcOxtr) },
                        { value: E.OSZ.SMALL, name: y.intl.string(y.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, i.jsx)(a.z6M, {
                    label: y.intl.string(y.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: E.pwA.ALWAYS, name: y.intl.string(y.t.nBmDrT) },
                        { value: E.pwA.ONLY_WHILE_SPEAKING, name: y.intl.string(y.t["2OvIZY"]) },
                        { value: E.pwA.NEVER, name: y.intl.string(y.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, i.jsx)(a.z6M, {
                    label: y.intl.string(y.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: E.f5z.ALWAYS, name: y.intl.string(y.t.nBmDrT) },
                        { value: E.f5z.ONLY_WHILE_SPEAKING, name: y.intl.string(y.t["2OvIZY"]) },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)("div", {
            className: S.SX,
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
                onSelectionChange: (e) => null != e && A.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, i.jsxs)(a.lGe, {
            "aria-label": y.intl.string(y.t["35G2Mq"]),
            className: v.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function N(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: s,
            displayUserMode: a,
            notificationPositionMode: r,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, l.cf)([p.default, _.A], () => ({
            avatarSizeMode: p.default.getAvatarSizeMode(),
            displayNameMode: p.default.getDisplayNameMode(),
            displayUserMode: p.default.getDisplayUserMode(),
            notificationPositionMode: p.default.getNotificationPositionMode(),
            textChatDisabled: _.A.isNotificationDisabled(x.KS.TextChat),
            shouldShowInviteNotification: !_.A.isNotificationDisabled(x.KS.ActivityInvite),
        })),
        c = (0, m.Mn)("OverlaySettingsPopout"),
        h = (0, l.bG)([u.A], () => u.A.enabled);
    return (0, i.jsx)(I, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: s,
        displayUserMode: a,
        notificationPositionMode: r,
        textChatDisabled: o,
        shouldShowInviteNotification: d,
        streamerModeEnabled: c && h,
    });
}
