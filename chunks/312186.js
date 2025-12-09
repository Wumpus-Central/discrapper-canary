n.d(t, { Z: () => C }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(442837),
    o = n(199849),
    l = n(481060),
    a = n(13245),
    c = n(600164),
    d = n(212632),
    u = n(906467),
    h = n(556296),
    p = n(237997),
    f = n(998502),
    g = n(13140),
    m = n(486016),
    _ = n(809357),
    y = n(624864),
    v = n(987650),
    b = n(981631),
    O = n(388032),
    E = n(183322),
    x = n(197571);
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
function Z() {
    let e = p.default.getNotificationPositionMode(),
        t = e !== b._vf.DISABLED,
        n = h.ZP.getOverlayKeybind(),
        i = h.ZP.getOverlayChatKeybind();
    a.Z.track(b.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(v.n0.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: p.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
    });
}
class j extends r.PureComponent {
    componentDidMount() {
        a.Z.track(b.rMx.SETTINGS_PANE_VIEWED, {
            settings_type: "overlay",
            destination_pane: "OVERLAY SETTINGS",
            origin_pane: null,
        });
    }
    handleChangeNotificationPositionMode(e, t) {
        a.Z.setNotificationPositionMode(t), Z();
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
        return (0, i.jsxs)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            grow: 0,
            shrink: 0,
            className: E.header,
            children: [
                (0, i.jsxs)(c.Z, {
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            className: E.headerTitle,
                            children: O.intl.string(O.t["35G2Mq"]),
                        }),
                        (0, i.jsx)("div", {
                            className: E.headerClose,
                            children: (0, i.jsx)(l.hU, {
                                variant: "icon-only",
                                size: "md",
                                icon: l.Dio,
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
            t = u.Z.isDeveloper
                ? (0, i.jsx)(l.njP.Item, {
                      id: "DEVELOPER",
                      className: E.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(l.njP, {
            selectedItem: e,
            type: "top",
            className: E.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(l.njP.Item, {
                    id: "GENERAL",
                    className: E.tabBarItem,
                    children: O.intl.string(O.t["0FYxxw"]),
                }),
                (0, i.jsx)(l.njP.Item, {
                    id: "VOICE",
                    className: E.tabBarItem,
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
            l.h21,
            {
                className: E.content,
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
            s = !y.Z.isNotificationDisabled(v.n0.TextChat),
            o = e !== b._vf.DISABLED;
        return (0, i.jsxs)(l.C3N, {
            children: [
                (0, i.jsx)(l.gNt, {
                    label: O.intl.string(O.t.IQv8Eo),
                    children: (0, i.jsx)(d.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(l.rsf, {
                    label: O.intl.string(O.t.Fy5kPp),
                    checked: s && o,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !o,
                }),
                (0, i.jsx)(l.rsf, {
                    label: O.intl.string(O.t["f+c48/"]),
                    description: O.intl.string(O.t.W9DVVf),
                    checked: r,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(l.rsf, {
                        label: O.intl.string(O.t.XZTl9r),
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
                    label: O.intl.string(O.t.dnvZSg),
                    onChange: (e) => this.handleChangeAvatarSizeMode({ value: e }),
                    options: [
                        {
                            value: b.ipw.LARGE,
                            name: O.intl.string(O.t.YcOxtr),
                        },
                        {
                            value: b.ipw.SMALL,
                            name: O.intl.string(O.t.BKIKqx),
                        },
                    ],
                    value: e,
                }),
                (0, i.jsx)(l.FXm, {
                    label: O.intl.string(O.t.J0dpcB),
                    onChange: (e) => this.handleChangeDisplayNameMode({ value: e }),
                    options: [
                        {
                            value: b.wC$.ALWAYS,
                            name: O.intl.string(O.t.nBmDrT),
                        },
                        {
                            value: b.wC$.ONLY_WHILE_SPEAKING,
                            name: O.intl.string(O.t["2OvIZY"]),
                        },
                        {
                            value: b.wC$.NEVER,
                            name: O.intl.string(O.t.ekjlPL),
                        },
                    ],
                    value: t,
                }),
                (0, i.jsx)(l.FXm, {
                    label: O.intl.string(O.t.swsWWC),
                    onChange: (e) => this.handleChangeDisplayUserMode({ value: e }),
                    options: [
                        {
                            value: b.OYC.ALWAYS,
                            name: O.intl.string(O.t.nBmDrT),
                        },
                        {
                            value: b.OYC.ONLY_WHILE_SPEAKING,
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
            className: x.marginBottom20,
            children: (0, i.jsx)(o.y6, {
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
                onChange: (e) => null != e && f.ZP.crash(e),
            }),
        });
    }
    render() {
        return (0, i.jsxs)(l.VqE, {
            "aria-label": O.intl.string(O.t["35G2Mq"]),
            className: E.container,
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
                a.Z.setNotificationDisabledSetting(m.i.TEXT_CHAT, !this.props.textChatDisabled), Z();
            }),
            S(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                a.Z.setNotificationDisabledSetting(m.i.GAME_ACTIVITY, !e);
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
            textChatDisabled: y.Z.isNotificationDisabled(v.n0.TextChat),
            shouldShowKeybindIndicators: p.default.showKeybindIndicators,
            shouldShowInviteNotification: !y.Z.isNotificationDisabled(v.n0.ActivityInvite),
        })),
        u = (0, _.Z)({ location: "Overlay Settings" });
    return (0, i.jsx)(j, {
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
