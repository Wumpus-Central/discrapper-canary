n.d(t, { Z: () => C }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(442837),
    o = n(755721),
    l = n(481060),
    a = n(13245),
    c = n(600164),
    d = n(212632),
    u = n(906467),
    p = n(556296),
    h = n(237997),
    f = n(998502),
    g = n(13140),
    m = n(809357),
    y = n(624864),
    _ = n(987650),
    O = n(981631),
    b = n(388032),
    v = n(968175),
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
    let e = h.default.getNotificationPositionMode(),
        t = e !== O._vf.DISABLED,
        n = p.ZP.getOverlayKeybind(),
        i = p.ZP.getOverlayChatKeybind();
    a.Z.track(O.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: y.Z.isNotificationDisabled(_.n0.TextChat) ? "DISABLED" : "ENABLED",
        text_opacity_slider: h.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
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
        a.Z.setNotificationPositionMode(t), S();
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
            className: v.header,
            children: [
                (0, i.jsxs)(c.Z, {
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: v.headerTitle,
                            tag: "h1",
                            children: b.intl.string(b.t["35G2Mj"]),
                        }),
                        (0, i.jsx)(l.olH, {
                            className: v.headerClose,
                            onClick: this.props.onClose,
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
                      className: v.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(l.njP, {
            selectedItem: e,
            type: "top",
            className: v.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(l.njP.Item, {
                    id: "GENERAL",
                    className: v.tabBarItem,
                    children: b.intl.string(b.t["0FYxx8"]),
                }),
                (0, i.jsx)(l.njP.Item, {
                    id: "VOICE",
                    className: v.tabBarItem,
                    children: b.intl.string(b.t["3WeSiI"]),
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
            l.hzk,
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
                shouldShowInviteNotification: s,
            } = this.props,
            o = !y.Z.isNotificationDisabled(_.n0.TextChat),
            c = e !== O._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(l.xJW, {
                    title: b.intl.string(b.t.IQv8Eh),
                    className: E.marginBottom20,
                    children: (0, i.jsx)(d.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(l.rsf, {
                    label: b.intl.string(b.t.Fy5kPj),
                    checked: o && c,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !c,
                }),
                (0, i.jsx)(l.rsf, {
                    label: b.intl.string(b.t["f+c48/"]),
                    description: b.intl.string(b.t.W9DVVV),
                    checked: s,
                    onChange: this.handleToggleInviteNotification,
                }),
                n &&
                    (0, i.jsx)(l.rsf, {
                        label: b.intl.string(b.t.XZTl9v),
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
                (0, i.jsx)(o.Gu, {
                    label: b.intl.string(b.t.dnvZSk),
                    onChange: this.handleChangeAvatarSizeMode,
                    options: [
                        {
                            value: O.ipw.LARGE,
                            name: b.intl.string(b.t.YcOxtr),
                        },
                        {
                            value: O.ipw.SMALL,
                            name: b.intl.string(b.t.BKIKq6),
                        },
                    ],
                    value: e,
                    size: o.l7.SMALL,
                }),
                (0, i.jsx)(o.Gu, {
                    label: b.intl.string(b.t.J0dpcH),
                    onChange: this.handleChangeDisplayNameMode,
                    options: [
                        {
                            value: O.wC$.ALWAYS,
                            name: b.intl.string(b.t.nBmDra),
                        },
                        {
                            value: O.wC$.ONLY_WHILE_SPEAKING,
                            name: b.intl.string(b.t["2OvIZW"]),
                        },
                        {
                            value: O.wC$.NEVER,
                            name: b.intl.string(b.t.ekjlPD),
                        },
                    ],
                    value: t,
                    size: o.l7.SMALL,
                }),
                (0, i.jsx)(o.Gu, {
                    label: b.intl.string(b.t.swsWWF),
                    onChange: this.handleChangeDisplayUserMode,
                    options: [
                        {
                            value: O.OYC.ALWAYS,
                            name: b.intl.string(b.t.nBmDra),
                        },
                        {
                            value: O.OYC.ONLY_WHILE_SPEAKING,
                            name: b.intl.string(b.t["2OvIZW"]),
                        },
                    ],
                    value: n,
                    size: o.l7.SMALL,
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
                onChange: (e) => null != e && f.ZP.crash(e),
            }),
        });
    }
    render() {
        return (0, i.jsxs)(l.Y0X, {
            "aria-label": b.intl.string(b.t["35G2Mj"]),
            transitionState: l.Dvm.ENTERED,
            parentComponent: "OverlaySettings",
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
                a.Z.setNotificationDisabled(_.n0.TextChat, !this.props.textChatDisabled), S();
            }),
            x(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                a.Z.setNotificationDisabled(_.n0.ActivityInvite, !e);
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
        } = (0, s.cj)([h.default, y.Z], () => ({
            avatarSizeMode: h.default.getAvatarSizeMode(),
            displayNameMode: h.default.getDisplayNameMode(),
            displayUserMode: h.default.getDisplayUserMode(),
            notificationPositionMode: h.default.getNotificationPositionMode(),
            textChatDisabled: y.Z.isNotificationDisabled(_.n0.TextChat),
            shouldShowKeybindIndicators: h.default.showKeybindIndicators,
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
