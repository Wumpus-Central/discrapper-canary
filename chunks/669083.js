n.d(t, { Z: () => Z }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(442837),
    o = n(755721),
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
    y = n(809357),
    O = n(624864),
    b = n(981631),
    v = n(388032),
    _ = n(968175),
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
    let e = p.default.getNotificationPositionMode(),
        t = e !== b._vf.DISABLED,
        n = h.ZP.getOverlayKeybind(),
        i = h.ZP.getOverlayChatKeybind();
    a.Z.track(b.rMx.OVERLAY_SETTINGS_UPDATED, {
        enabled: !0,
        notifications_enabled: t,
        notifications_position: t ? e : null,
        text_notifications_mode: O.Z.isNotificationDisabled(m.OverlayNotificationDisabledSetting.TEXT_CHAT)
            ? "DISABLED"
            : "ENABLED",
        text_opacity_slider: p.default.getTextWidgetOpacity(),
        hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
        text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null,
    });
}
class C extends r.PureComponent {
    componentDidMount() {
        a.Z.track(b.rMx.SETTINGS_PANE_VIEWED, {
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
            className: _.header,
            children: [
                (0, i.jsxs)(c.Z, {
                    children: [
                        (0, i.jsx)(l.vwX, {
                            className: _.headerTitle,
                            tag: "h1",
                            children: v.intl.string(v.t["35G2Mj"]),
                        }),
                        (0, i.jsx)(l.olH, {
                            className: _.headerClose,
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
                      className: _.tabBarItem,
                      children: "Developer",
                  })
                : null;
        return (0, i.jsxs)(l.njP, {
            selectedItem: e,
            type: "top",
            className: _.__invalid_tabBar,
            onItemSelect: this.handleSelectSection,
            children: [
                (0, i.jsx)(l.njP.Item, {
                    id: "GENERAL",
                    className: _.tabBarItem,
                    children: v.intl.string(v.t["0FYxx8"]),
                }),
                (0, i.jsx)(l.njP.Item, {
                    id: "VOICE",
                    className: _.tabBarItem,
                    children: v.intl.string(v.t["3WeSiI"]),
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
                className: _.content,
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
            o = !O.Z.isNotificationDisabled(m.OverlayNotificationDisabledSetting.TEXT_CHAT),
            c = e !== b._vf.DISABLED;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(l.xJW, {
                    title: v.intl.string(v.t.IQv8Eh),
                    className: E.marginBottom20,
                    children: (0, i.jsx)(d.Z, {
                        position: e,
                        onChange: this.handleChangeNotificationPositionMode,
                    }),
                }),
                (0, i.jsx)(l.j7V, {
                    value: o && c,
                    onChange: this.handleToggleTextChatNotifications,
                    disabled: !c,
                    hideBorder: !0,
                    children: v.intl.string(v.t.Fy5kPj),
                }),
                (0, i.jsx)(l.j7V, {
                    value: s,
                    onChange: this.handleToggleInviteNotification,
                    hideBorder: !0,
                    note: v.intl.string(v.t.W9DVVV),
                    children: v.intl.string(v.t["f+c48/"]),
                }),
                n &&
                    (0, i.jsx)(l.j7V, {
                        value: t,
                        onChange: (e) => a.Z.setShowKeybindIndicators(e),
                        hideBorder: !0,
                        children: v.intl.string(v.t.XZTl9v),
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
                    label: v.intl.string(v.t.dnvZSk),
                    onChange: this.handleChangeAvatarSizeMode,
                    options: [
                        {
                            value: b.ipw.LARGE,
                            name: v.intl.string(v.t.YcOxtr),
                        },
                        {
                            value: b.ipw.SMALL,
                            name: v.intl.string(v.t.BKIKq6),
                        },
                    ],
                    value: e,
                    size: o.l7.SMALL,
                }),
                (0, i.jsx)(o.Gu, {
                    label: v.intl.string(v.t.J0dpcH),
                    onChange: this.handleChangeDisplayNameMode,
                    options: [
                        {
                            value: b.wC$.ALWAYS,
                            name: v.intl.string(v.t.nBmDra),
                        },
                        {
                            value: b.wC$.ONLY_WHILE_SPEAKING,
                            name: v.intl.string(v.t["2OvIZW"]),
                        },
                        {
                            value: b.wC$.NEVER,
                            name: v.intl.string(v.t.ekjlPD),
                        },
                    ],
                    value: t,
                    size: o.l7.SMALL,
                }),
                (0, i.jsx)(o.Gu, {
                    label: v.intl.string(v.t.swsWWF),
                    onChange: this.handleChangeDisplayUserMode,
                    options: [
                        {
                            value: b.OYC.ALWAYS,
                            name: v.intl.string(v.t.nBmDra),
                        },
                        {
                            value: b.OYC.ONLY_WHILE_SPEAKING,
                            name: v.intl.string(v.t["2OvIZW"]),
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
            "aria-label": v.intl.string(v.t["35G2Mj"]),
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
                a.Z.setNotificationDisabledSetting(
                    m.OverlayNotificationDisabledSetting.TEXT_CHAT,
                    !this.props.textChatDisabled,
                ),
                    S();
            }),
            x(this, "handleToggleInviteNotification", () => {
                let e = this.props.shouldShowInviteNotification;
                a.Z.setNotificationDisabledSetting(m.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !e);
            });
    }
}
function Z(e) {
    let { onClose: t } = e,
        {
            avatarSizeMode: n,
            displayNameMode: r,
            displayUserMode: o,
            notificationPositionMode: l,
            textChatDisabled: a,
            shouldShowKeybindIndicators: c,
            shouldShowInviteNotification: d,
        } = (0, s.cj)([p.default, O.Z], () => ({
            avatarSizeMode: p.default.getAvatarSizeMode(),
            displayNameMode: p.default.getDisplayNameMode(),
            displayUserMode: p.default.getDisplayUserMode(),
            notificationPositionMode: p.default.getNotificationPositionMode(),
            textChatDisabled: O.Z.isNotificationDisabled(m.OverlayNotificationDisabledSetting.TEXT_CHAT),
            shouldShowKeybindIndicators: p.default.showKeybindIndicators,
            shouldShowInviteNotification: !O.Z.isNotificationDisabled(
                m.OverlayNotificationDisabledSetting.GAME_ACTIVITY,
            ),
        })),
        u = (0, y.Z)({ location: "Overlay Settings" });
    return (0, i.jsx)(C, {
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
