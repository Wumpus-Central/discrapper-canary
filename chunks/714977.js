"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(534514),
    r = n(408278),
    o = n(789645),
    d = n(761508),
    c = n(599319),
    u = n(683071),
    h = n(270003),
    p = n(452027),
    A = n(243721),
    f = n(331322),
    _ = n(954197),
    g = n(691885),
    m = n(305866),
    E = n(684013),
    x = n(235986),
    y = n(499820),
    v = n(540999),
    S = n(351906),
    C = n(532624),
    I = n(256415),
    N = n(837921),
    T = n(350535),
    b = n(93465),
    O = n(589051),
    D = n(592598),
    j = n(672396),
    L = n(652215),
    R = n(985018),
    w = n(14552),
    k = n(818050);
function M() {
    let e = I.default.getNotificationPositionMode(),
        t = e !== L.G6Q.DISABLED,
        n = C.Ay.getOverlayKeybind(),
        i = C.Ay.getOverlayChatKeybind();
    E.A.track(L.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: D.A.isNotificationDisabled(j.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: I.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, T.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, T.dI)(i.shortcut) : null,
    });
}
class P extends s.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        E.A.track(L.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        E.A.setNotificationDisabledSetting(b.M.TEXT_CHAT, !this.props.textChatDisabled), M();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        E.A.setNotificationDisabledSetting(b.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        E.A.setNotificationPositionMode(t), M();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        E.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        E.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        E.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(x.A, {
            direction: x.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: w.wx,
            children: [
                (0, i.jsxs)(x.A, {
                    children: [
                        (0, i.jsx)(a.D, {
                            variant: "heading-md/semibold",
                            className: w.qd,
                            children: R.intl.string(R.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: w.Q7,
                            children: (0, i.jsx)(r.K, {
                                variant: "icon-only",
                                size: "md",
                                icon: o.P,
                                onClick: this.props.onClose,
                                "aria-label": R.intl.string(R.t.cpT0Cq),
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
            t = v.A.isDeveloper
                ? (0, i.jsx)(d.V.Item, { id: "DEVELOPER", className: w.YU, children: "Developer" })
                : null;
        return (0, i.jsxs)(d.V, {
            selectedItem: e,
            type: "top",
            className: w.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(d.V.Item, { id: "GENERAL", className: w.YU, children: R.intl.string(R.t["0FYxxw"]) }),
                (0, i.jsx)(d.V.Item, { id: "VOICE", className: w.YU, children: R.intl.string(R.t["3WeSiE"]) }),
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
            c.Ch,
            {
                className: w.Qs,
                children: [
                    this.props.streamerModeEnabled &&
                        (0, i.jsx)(u.w, { type: "warning", children: R.intl.string(R.t["1CC/lX"]) }),
                    e,
                ],
            },
            t,
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !D.A.isNotificationDisabled(j.KS.TextChat),
            s = e !== L.G6Q.DISABLED;
        return (0, i.jsxs)(h.n, {
            children: [
                (0, i.jsx)(p.D, {
                    label: R.intl.string(R.t.IQv8Eo),
                    children: (0, i.jsx)(y.A, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, i.jsx)(A.d, {
                    label: R.intl.string(R.t.Fy5kPp),
                    checked: n && s,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                }),
                (0, i.jsx)(A.d, {
                    label: R.intl.string(R.t["f+c48/"]),
                    description: R.intl.string(R.t.W9DVVf),
                    checked: t,
                    onChange: this.handleToggleInviteNotification,
                }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(f.B, {
            gap: 20,
            children: [
                (0, i.jsx)(_.z, {
                    label: R.intl.string(R.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: L.OSZ.LARGE, name: R.intl.string(R.t.YcOxtr) },
                        { value: L.OSZ.SMALL, name: R.intl.string(R.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, i.jsx)(_.z, {
                    label: R.intl.string(R.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: L.pwA.ALWAYS, name: R.intl.string(R.t.nBmDrT) },
                        { value: L.pwA.ONLY_WHILE_SPEAKING, name: R.intl.string(R.t["2OvIZY"]) },
                        { value: L.pwA.NEVER, name: R.intl.string(R.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, i.jsx)(_.z, {
                    label: R.intl.string(R.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: L.f5z.ALWAYS, name: R.intl.string(R.t.nBmDrT) },
                        { value: L.f5z.ONLY_WHILE_SPEAKING, name: R.intl.string(R.t["2OvIZY"]) },
                    ],
                    value: n,
                }),
            ],
        });
    }
    renderDeveloperSettings() {
        return (0, i.jsx)("div", {
            className: k.SX,
            children: (0, i.jsx)(g.l, {
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
                onSelectionChange: (e) => null != e && N.Ay.crash(e),
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    }
    render() {
        return (0, i.jsxs)(m.l, {
            "aria-label": R.intl.string(R.t["35G2Mq"]),
            className: w.kL,
            children: [this.renderHeader(), this.renderBody()],
        });
    }
}
function G(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: s,
            displayUserMode: a,
            notificationPositionMode: r,
            textChatDisabled: o,
            shouldShowInviteNotification: d,
        } = (0, l.cf)([I.default, D.A], () => ({
            avatarSizeMode: I.default.getAvatarSizeMode(),
            displayNameMode: I.default.getDisplayNameMode(),
            displayUserMode: I.default.getDisplayUserMode(),
            notificationPositionMode: I.default.getNotificationPositionMode(),
            textChatDisabled: D.A.isNotificationDisabled(j.KS.TextChat),
            shouldShowInviteNotification: !D.A.isNotificationDisabled(j.KS.ActivityInvite),
        })),
        c = (0, O.Mn)("OverlaySettingsPopout"),
        u = (0, l.bG)([S.A], () => S.A.enabled);
    return (0, i.jsx)(P, {
        onClose: t,
        avatarSizeMode: n,
        displayNameMode: s,
        displayUserMode: a,
        notificationPositionMode: r,
        textChatDisabled: o,
        shouldShowInviteNotification: d,
        streamerModeEnabled: c && u,
    });
}
