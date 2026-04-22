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
    f = n(243721),
    A = n(331322),
    _ = n(954197),
    g = n(691885),
    m = n(305866),
    x = n(684013),
    E = n(235986),
    y = n(499820),
    v = n(540999),
    S = n(351906),
    C = n(532624),
    I = n(256415),
    N = n(837921),
    T = n(350535),
    b = n(93465),
    O = n(589051),
    j = n(592598),
    D = n(672396),
    R = n(652215),
    L = n(985018),
    w = n(717912),
    k = n(373378);
function M() {
    let e = I.default.getNotificationPositionMode(),
        t = e !== R.G6Q.DISABLED,
        n = C.Ay.getOverlayKeybind(),
        i = C.Ay.getOverlayChatKeybind();
    x.A.track(R.HAw.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: j.A.isNotificationDisabled(D.KS.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: I.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, T.dI)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, T.dI)(i.shortcut) : null,
    });
}
class P extends s.PureComponent {
    state = { selectedSection: "GENERAL" };
    componentDidMount() {
        x.A.track(R.HAw.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleSelectSection = (e) => {
        this.setState({ selectedSection: e });
    };
    handleToggleTextChatNotifications = () => {
        x.A.setNotificationDisabledSetting(b.M.TEXT_CHAT, !this.props.textChatDisabled), M();
    };
    handleToggleInviteNotification = () => {
        let e = this.props.shouldShowInviteNotification;
        x.A.setNotificationDisabledSetting(b.M.GAME_ACTIVITY, !e);
    };
    handleChangeNotificationPositionMode(e, t) {
        x.A.setNotificationPositionMode(t), M();
    }
    handleChangeAvatarSizeMode(e) {
        let { value: t } = e;
        x.A.setAvatarSizeMode(t);
    }
    handleChangeDisplayNameMode(e) {
        let { value: t } = e;
        x.A.setDisplayNameMode(t);
    }
    handleChangeDisplayUserMode(e) {
        let { value: t } = e;
        x.A.setDisplayUserMode(t);
    }
    renderHeader() {
        return (0, i.jsxs)(E.A, {
            direction: E.A.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: w.wx,
            children: [
                (0, i.jsxs)(E.A, {
                    children: [
                        (0, i.jsx)(a.D, {
                            variant: "heading-md/semibold",
                            className: w.qd,
                            children: L.intl.string(L.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: w.Q7,
                            children: (0, i.jsx)(r.K, {
                                variant: "icon-only",
                                size: "md",
                                icon: o.P,
                                onClick: this.props.onClose,
                                "aria-label": L.intl.string(L.t.cpT0Cq),
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
                (0, i.jsx)(d.V.Item, { id: "GENERAL", className: w.YU, children: L.intl.string(L.t["0FYxxw"]) }),
                (0, i.jsx)(d.V.Item, { id: "VOICE", className: w.YU, children: L.intl.string(L.t["3WeSiE"]) }),
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
                        (0, i.jsx)(u.w, { type: "warning", children: L.intl.string(L.t["1CC/lX"]) }),
                    e,
                ],
            },
            t,
        );
    }
    renderGeneralSettings() {
        let { notificationPositionMode: e, shouldShowInviteNotification: t } = this.props,
            n = !j.A.isNotificationDisabled(D.KS.TextChat),
            s = e !== R.G6Q.DISABLED;
        return (0, i.jsxs)(h.n, {
            children: [
                (0, i.jsx)(p.D, {
                    label: L.intl.string(L.t.IQv8Eo),
                    children: (0, i.jsx)(y.A, { position: e, onChange: this.handleChangeNotificationPositionMode }),
                }),
                (0, i.jsx)(f.d, {
                    label: L.intl.string(L.t.Fy5kPp),
                    checked: n && s,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !s,
                }),
                (0, i.jsx)(f.d, {
                    label: L.intl.string(L.t["f+c48/"]),
                    description: L.intl.string(L.t.W9DVVf),
                    checked: t,
                    onChange: this.handleToggleInviteNotification,
                }),
            ],
        });
    }
    renderVoiceSettings() {
        let { avatarSizeMode: e, displayNameMode: t, displayUserMode: n } = this.props;
        return (0, i.jsxs)(A.B, {
            gap: 20,
            children: [
                (0, i.jsx)(_.z, {
                    label: L.intl.string(L.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        { value: R.OSZ.LARGE, name: L.intl.string(L.t.YcOxtr) },
                        { value: R.OSZ.SMALL, name: L.intl.string(L.t.BKIKqx) },
                    ],
                    value: e,
                }),
                (0, i.jsx)(_.z, {
                    label: L.intl.string(L.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        { value: R.pwA.ALWAYS, name: L.intl.string(L.t.nBmDrT) },
                        { value: R.pwA.ONLY_WHILE_SPEAKING, name: L.intl.string(L.t["2OvIZY"]) },
                        { value: R.pwA.NEVER, name: L.intl.string(L.t.ekjlPL) },
                    ],
                    value: t,
                }),
                (0, i.jsx)(_.z, {
                    label: L.intl.string(L.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        { value: R.f5z.ALWAYS, name: L.intl.string(L.t.nBmDrT) },
                        { value: R.f5z.ONLY_WHILE_SPEAKING, name: L.intl.string(L.t["2OvIZY"]) },
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
            "aria-label": L.intl.string(L.t["35G2Mq"]),
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
        } = (0, l.cf)([I.default, j.A], () => ({
            avatarSizeMode: I.default.getAvatarSizeMode(),
            displayNameMode: I.default.getDisplayNameMode(),
            displayUserMode: I.default.getDisplayUserMode(),
            notificationPositionMode: I.default.getNotificationPositionMode(),
            textChatDisabled: j.A.isNotificationDisabled(D.KS.TextChat),
            shouldShowInviteNotification: !j.A.isNotificationDisabled(D.KS.ActivityInvite),
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
