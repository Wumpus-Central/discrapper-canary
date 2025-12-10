n.d(t, {
    $W: () => C,
    Mx: () => P,
    PZ: () => A,
    h4: () => R,
    ic: () => T,
    n5: () => N,
    rU: () => D,
    s8: () => w,
}),
    n(388685),
    n(35282);
var r,
    i = n(54381),
    a = n(473749),
    o = n(481060),
    s = n(815372),
    l = n(43267),
    c = n(933557),
    u = n(471445),
    d = n(16206),
    f = n(790145),
    p = n(925329),
    _ = n(565138),
    m = n(754688),
    h = n(237583),
    g = n(430824),
    E = n(699516),
    b = n(594174),
    y = n(51144),
    O = n(388032),
    v = n(297762);
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
class I extends a.PureComponent {
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
            className: v.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                t,
                null != n
                    ? (0, i.jsx)("div", {
                          className: v.score,
                          children: 0 | n,
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            S(this, "node", void 0),
            S(this, "handleClick", (e) => {
                e.preventDefault();
                let { onClick: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            S(this, "handleMouseEnter", (e) => {
                let { onMouseEnter: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            S(this, "setRef", (e) => {
                this.node = e;
            });
    }
}
class T extends a.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: v.guildIconContainer,
            children: (0, i.jsx)(_.Z, {
                tabIndex: -1,
                guild: e,
                size: _.Z.Sizes.MINI,
                className: v.guildIcon,
            }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: v.name,
            children: (0, i.jsx)("span", {
                className: v.match,
                children: e.name,
            }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? v.contentUnread : v.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: v.misc,
                    children: t,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return O.intl.formatToPlainString(O.t.WVq3Lr, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(I, {
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
            n = (0, u.KS)(t);
        if (null == n) return null;
        let r = null != (e = (0, d.Z)(t)) ? e : "";
        return (0, i.jsx)("div", {
            className: v.iconContainer,
            role: "img",
            "aria-label": r,
            children: (0, i.jsx)(n, {
                className: v.icon,
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
                (e = (0, i.jsx)(f.Z, {
                    className: v.badge,
                    value: n,
                    lowImportance: o,
                })),
            null != r &&
                (t = (0, i.jsx)("span", {
                    className: v.note,
                    children: (0, c.F6)(r, b.default, E.Z),
                })),
            (0, i.jsxs)("div", {
                className: v.name,
                children: [
                    (0, i.jsx)("span", {
                        className: v.match,
                        children: (0, c.F6)(a, b.default, E.Z),
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
            : (0, i.jsx)(h.Z, {
                  className: v.voiceSummaryContainer,
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
            className: e || (null != t && t > 0) ? v.contentUnread : v.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: v.misc,
                    children: n,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null == (e = g.Z.getGuild(this.props.channel.guild_id)) ? void 0 : e.name,
            r = (0, c.F6)(t, b.default, E.Z),
            i = (0, d.Z)(t);
        return O.intl.formatToPlainString(O.t["Vw/da+"], {
            name: r,
            type: i,
            guild: n,
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(I, {
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
S(C, "defaultProps", { unread: !1 });
class A extends a.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: v.dmIconContainer,
            children: (0, i.jsx)(o.qEK, {
                src: (0, l.x)(e),
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
                (e = (0, i.jsx)(f.Z, {
                    className: v.badge,
                    value: t,
                })),
            (0, i.jsxs)("div", {
                className: v.name,
                children: [
                    (0, i.jsx)("span", {
                        className: v.match,
                        children: (0, c.F6)(n, b.default, E.Z),
                    }),
                    e,
                ],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? v.contentUnread : v.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: v.misc,
                    children: t,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, c.F6)(e, b.default, E.Z);
        return null != t && t > 0
            ? O.intl.formatToPlainString(O.t.LYdVfN, {
                  name: n,
                  mentions: t,
              })
            : O.intl.formatToPlainString(O.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(I, {
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
class N extends a.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: v.iconContainer,
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
            r = E.Z.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = null != r ? r : y.ZP.getName(t)),
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
                (e = (0, i.jsx)(f.Z, {
                    className: v.badge,
                    value: n,
                })),
            (0, i.jsxs)("div", {
                className: v.name,
                children: [
                    (0, i.jsx)("span", {
                        className: v.match,
                        children: r,
                    }),
                    e,
                    (0, i.jsx)("span", {
                        className: v.username,
                        children: y.ZP.getUserTag(t),
                    }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? v.contentUnread : v.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: v.misc,
                    children: e,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            r = y.ZP.getUserTag(t);
        return null != e && e > 0
            ? O.intl.formatToPlainString(O.t["6b9UrR"], {
                  name: n,
                  id: r,
                  mentions: e,
              })
            : O.intl.formatToPlainString(O.t.GWYOAY, {
                  name: n,
                  id: r,
              });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(I, {
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
            className: v.contentDefault,
            children: [
                (0, i.jsx)("div", {
                    className: v.iconContainer,
                    children: (0, i.jsx)(p.Z, {
                        tabIndex: -1,
                        className: v.gameIcon,
                        game: t,
                        size: v.gameIconSize,
                    }),
                }),
                t.name,
                (0, i.jsx)("div", {
                    className: v.misc,
                    children: e,
                }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: a } = this.props;
        return (0, i.jsx)(I, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent(),
        });
    }
}
class R extends a.Component {
    render() {
        return (0, i.jsx)("div", {
            className: v.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: v.contentDefault,
                children: (0, i.jsx)("div", {
                    className: v.header,
                    children: this.props.children,
                }),
            }),
        });
    }
}
class D extends a.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props,
            a = (0, m.Qj)(n.path);
        return (
            null == a || void 0 === a.messageId
                ? ((e = O.intl.string(O.t.qbSCqj)),
                  (t = (0, i.jsx)(o.xPt, {
                      size: "xs",
                      color: "currentColor",
                  })))
                : (0, m.VO)(a)
                  ? ((e = O.intl.string(O.t["6Fd/j1"])),
                    (t = (0, i.jsx)(o.acy, {
                        size: "xs",
                        color: "currentColor",
                    })))
                  : ((e = O.intl.string(O.t.jQRwp4)),
                    (t = (0, i.jsx)(o.mBM, {
                        size: "xs",
                        color: "currentColor",
                    }))),
            (0, i.jsxs)("div", {
                className: v.contentDefault,
                children: [
                    (0, i.jsx)("div", {
                        className: v.iconContainer,
                        children: t,
                    }),
                    e,
                    (0, i.jsx)("div", {
                        className: v.misc,
                        children: r,
                    }),
                ],
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(I, {
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
class w extends a.Component {
    renderContent() {
        var e, t;
        let n,
            r,
            { navigationRecord: a, children: l } = this.props;
        switch (a.type) {
            case s.Ky.SHOP:
                (n = O.intl.string(O.t.pWG4ze)),
                    (r = (0, i.jsx)(o.EOn, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.SHOP_ORBS_TAB:
                (n = O.intl.string(O.t.EBYkzk)),
                    (r = (0, i.jsx)(o.EOn, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.QUEST_ORBS:
                (n = "".concat(O.intl.string(O.t.ElYQFS), " ").concat(O.intl.string(O.t.JALI2K))),
                    (r = (0, i.jsx)(o.qDn, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.NITRO_HOME:
                (n = O.intl.string(O.t.Ipxkog)),
                    (r = (0, i.jsx)(o.SrA, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.QUEST_HOME:
                (n = O.intl.string(O.t.JALI2K)),
                    (r = (0, i.jsx)(o.qDn, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.APPS_HOME:
                (n = O.intl.string(O.t.PHjkRE)),
                    (r = (0, i.jsx)(o.jje, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.SETTINGS:
                (n = null != (e = a.label) ? e : O.intl.string(O.t["3D5yo/"])),
                    (r = (0, i.jsx)(o.ewm, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case s.Ky.PLAYGROUND:
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
            className: v.contentDefault,
            children: [
                (0, i.jsx)("div", {
                    className: v.iconContainer,
                    children: r,
                }),
                (0, i.jsx)("div", {
                    className: v.name,
                    children: n,
                }),
                (0, i.jsx)("div", {
                    className: v.misc,
                    children: l,
                }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: o, id: s } = this.props;
        return (0, i.jsx)(I, {
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
