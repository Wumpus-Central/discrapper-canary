n.d(t, {
    $W: () => C,
    Mx: () => P,
    PZ: () => N,
    h4: () => D,
    ic: () => A,
    n5: () => R,
    rU: () => w,
    s8: () => L,
}),
    n(388685),
    n(35282);
var r,
    i = n(54381),
    a = n(473749),
    o = n(481060),
    s = n(456100),
    l = n(815372),
    c = n(43267),
    u = n(933557),
    d = n(471445),
    f = n(16206),
    _ = n(790145),
    p = n(925329),
    h = n(565138),
    m = n(754688),
    g = n(237583),
    E = n(430824),
    b = n(699516),
    y = n(594174),
    O = n(51144),
    v = n(388032),
    I = n(297762);
function T(e, t, n) {
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
class S extends a.PureComponent {
    componentDidMount() {
        let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
        e && null != n && t(n);
    }
    componentDidUpdate(e) {
        let { focused: t, onFocus: n } = this.props,
            { node: r } = this;
        null != r && t && !e.focused && n(r);
    }
    render() {
        let { focused: e, children: t, score: n, onContextMenu: r, id: a, "aria-label": s } = this.props;
        return (0, i.jsxs)(o.P3F, {
            role: "option",
            id: a,
            "aria-label": s,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: I.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                t,
                null != n
                    ? (0, i.jsx)("div", {
                          className: I.score,
                          children: 0 | n,
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            T(this, "node", void 0),
            T(this, "handleClick", (e) => {
                e.preventDefault();
                let { onClick: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            T(this, "handleMouseEnter", (e) => {
                let { onMouseEnter: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            T(this, "setRef", (e) => {
                this.node = e;
            });
    }
}
class A extends a.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: I.guildIconContainer,
            children: (0, i.jsx)(h.Z, {
                tabIndex: -1,
                guild: e,
                size: h.Z.Sizes.MINI,
                className: I.guildIcon,
            }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: I.name,
            children: (0, i.jsx)("span", {
                className: I.match,
                children: e.name,
            }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: I.misc,
                    children: t,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return v.intl.formatToPlainString(v.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: o,
            children: this.renderContent(),
        });
    }
}
class C extends (r = a.Component) {
    renderIcon() {
        var e;
        let { channel: t } = this.props,
            n = (0, d.KS)(t);
        if (null == n) return null;
        let r = null != (e = (0, f.Z)(t)) ? e : "";
        return (0, i.jsx)("div", {
            className: I.iconContainer,
            role: "img",
            "aria-label": r,
            children: (0, i.jsx)(n, {
                className: I.icon,
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: a, isMentionLowImportance: o } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(_.Z, {
                    className: I.badge,
                    value: n,
                    lowImportance: o,
                })),
            null != r &&
                (t = (0, i.jsx)("span", {
                    className: I.note,
                    children: (0, u.F6)(r, y.default, b.Z),
                })),
            (0, i.jsxs)("div", {
                className: I.name,
                children: [
                    (0, i.jsx)("span", {
                        className: I.match,
                        children: (0, u.F6)(a, y.default, b.Z),
                    }),
                    e,
                    this.renderVoiceStates(),
                    t,
                ],
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(g.Z, {
                  className: I.voiceSummaryContainer,
                  guildId: t.guild_id,
                  users: e.map((e) => {
                      let { user: t } = e;
                      return { user: t };
                  }),
                  max: 4,
              });
    }
    renderContent() {
        let { unread: e, mentions: t, children: n } = this.props;
        return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || (null != t && t > 0) ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: I.misc,
                    children: n,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null == (e = E.Z.getGuild(this.props.channel.guild_id)) ? void 0 : e.name,
            r = (0, u.F6)(t, y.default, b.Z),
            i = (0, f.Z)(t);
        return v.intl.formatToPlainString(v.t["Vw/da+"], {
            name: r,
            type: i,
            guild: n,
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: o,
            children: this.renderContent(),
        });
    }
}
T(C, "defaultProps", { unread: !1 });
class N extends a.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: I.dmIconContainer,
            children: (0, i.jsx)(o.qEK, {
                src: (0, c.x)(e),
                size: o.EFr.SIZE_20,
                "aria-hidden": !0,
                status: t,
            }),
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t &&
                t > 0 &&
                (e = (0, i.jsx)(_.Z, {
                    className: I.badge,
                    value: t,
                })),
            (0, i.jsxs)("div", {
                className: I.name,
                children: [
                    (0, i.jsx)("span", {
                        className: I.match,
                        children: (0, u.F6)(n, y.default, b.Z),
                    }),
                    e,
                ],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: I.misc,
                    children: t,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, u.F6)(e, y.default, b.Z);
        return null != t && t > 0
            ? v.intl.formatToPlainString(v.t.LYdVfN, {
                  name: n,
                  mentions: t,
              })
            : v.intl.formatToPlainString(v.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: o,
            children: this.renderContent(),
        });
    }
}
class R extends a.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: I.iconContainer,
            children: (0, i.jsx)(o.qEK, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: o.EFr.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            r = b.Z.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = null != r ? r : O.ZP.getName(t)),
            e
        );
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(_.Z, {
                    className: I.badge,
                    value: n,
                })),
            (0, i.jsxs)("div", {
                className: I.name,
                children: [
                    (0, i.jsx)("span", {
                        className: I.match,
                        children: r,
                    }),
                    e,
                    (0, i.jsx)("span", {
                        className: I.username,
                        children: O.ZP.getUserTag(t),
                    }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: I.misc,
                    children: e,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            r = O.ZP.getUserTag(t);
        return null != e && e > 0
            ? v.intl.formatToPlainString(v.t["6b9UrR"], {
                  name: n,
                  id: r,
                  mentions: e,
              })
            : v.intl.formatToPlainString(v.t.GWYOAY, {
                  name: n,
                  id: r,
              });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: o,
            children: this.renderContent(),
        });
    }
}
class P extends a.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: I.contentDefault,
            children: [
                (0, i.jsx)("div", {
                    className: I.iconContainer,
                    children: (0, i.jsx)(p.Z, {
                        tabIndex: -1,
                        className: I.gameIcon,
                        game: t,
                        size: I.gameIconSize,
                    }),
                }),
                t.name,
                (0, i.jsx)("div", {
                    className: I.misc,
                    children: e,
                }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: a } = this.props;
        return (0, i.jsx)(S, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
class D extends a.Component {
    render() {
        return (0, i.jsx)("div", {
            className: I.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: I.contentDefault,
                children: (0, i.jsx)("div", {
                    className: I.header,
                    children: this.props.children,
                }),
            }),
        });
    }
}
class w extends a.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props,
            a = (0, m.Qj)(n.path);
        return (
            null == a || void 0 === a.messageId
                ? ((e = v.intl.string(v.t.qbSCqj)),
                  (t = (0, i.jsx)(o.xPt, {
                      size: "xs",
                      color: "currentColor",
                  })))
                : (0, m.VO)(a)
                  ? ((e = v.intl.string(v.t["6Fd/j1"])),
                    (t = (0, i.jsx)(o.acy, {
                        size: "xs",
                        color: "currentColor",
                    })))
                  : ((e = v.intl.string(v.t.jQRwp4)),
                    (t = (0, i.jsx)(o.mBM, {
                        size: "xs",
                        color: "currentColor",
                    }))),
            (0, i.jsxs)("div", {
                className: I.contentDefault,
                children: [
                    (0, i.jsx)("div", {
                        className: I.iconContainer,
                        children: t,
                    }),
                    e,
                    (0, i.jsx)("div", {
                        className: I.misc,
                        children: r,
                    }),
                ],
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: o,
            children: this.renderContent(),
        });
    }
}
class L extends a.Component {
    renderContent() {
        var e, t;
        let n,
            r,
            { navigationRecord: a, children: c } = this.props,
            { enabled: u } = s.c.getCurrentConfig({ location: "QuickSwitcherResults" }, { autoTrackExposure: !0 }),
            d = u ? o.iWm : o.jje;
        switch (a.type) {
            case l.Ky.SHOP:
                (n = v.intl.string(v.t.pWG4ze)),
                    (r = (0, i.jsx)(o.EOn, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case l.Ky.NITRO_HOME:
                (n = v.intl.string(v.t.Ipxkog)),
                    (r = (0, i.jsx)(o.SrA, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case l.Ky.QUEST_HOME:
                (n = v.intl.string(v.t.JALI2K)),
                    (r = (0, i.jsx)(o.qDn, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case l.Ky.APPS_HOME:
                (n = v.intl.string(v.t.PHjkRE)),
                    (r = (0, i.jsx)(d, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case l.Ky.SETTINGS:
                (n = null != (e = a.label) ? e : v.intl.string(v.t["3D5yo/"])),
                    (r = (0, i.jsx)(o.ewm, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case l.Ky.PLAYGROUND:
                if (
                    ((n = null != (t = a.label) ? t : "".concat(a.collectionId, " Playground")),
                    null != a.IconComponent)
                ) {
                    let e = a.IconComponent;
                    r = (0, i.jsx)(e, {
                        size: "xs",
                        color: "currentColor",
                    });
                } else
                    r = (0, i.jsx)(o.hh5, {
                        size: "xs",
                        color: "currentColor",
                    });
                break;
            default:
                (n = a.id),
                    (r = (0, i.jsx)(o.xPt, {
                        size: "xs",
                        color: "currentColor",
                    }));
        }
        return (0, i.jsxs)("div", {
            className: I.contentDefault,
            children: [
                (0, i.jsx)("div", {
                    className: I.iconContainer,
                    children: r,
                }),
                (0, i.jsx)("div", {
                    className: I.name,
                    children: n,
                }),
                (0, i.jsx)("div", {
                    className: I.misc,
                    children: c,
                }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: o,
            children: this.renderContent(),
        });
    }
}
