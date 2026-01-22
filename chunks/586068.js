n.d(t, {
    KJ: () => N,
    N_: () => P,
    OS: () => I,
    Y9: () => w,
    c3: () => T,
    lg: () => R,
    nG: () => C,
    vw: () => D,
}),
    n(896048),
    n(747238);
var r,
    i = n(627968),
    a = n(64700),
    s = n(397927),
    o = n(329308),
    l = n(571694),
    c = n(47167),
    u = n(713654),
    d = n(523728),
    f = n(200470),
    p = n(769015),
    _ = n(263063),
    h = n(376943),
    m = n(636585),
    g = n(71393),
    E = n(994500),
    b = n(287809),
    y = n(427262),
    O = n(985018),
    A = n(649134);
function v(e, t, n) {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: a, "aria-label": o } = this.props;
        return (0, i.jsxs)(s.DUT, {
            role: "option",
            id: a,
            "aria-label": o,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: A.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                t,
                null != n
                    ? (0, i.jsx)("div", {
                          className: A.fN,
                          children: 0 | n,
                      })
                    : null,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            v(this, "node", void 0),
            v(this, "handleClick", (e) => {
                e.preventDefault();
                let { onClick: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            v(this, "handleMouseEnter", (e) => {
                let { onMouseEnter: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            v(this, "setRef", (e) => {
                this.node = e;
            });
    }
}
class I extends a.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: A._C,
            children: (0, i.jsx)(_.A, {
                tabIndex: -1,
                guild: e,
                size: _.A.Sizes.MINI,
                className: A.$f,
            }),
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)("div", {
            className: A.UU,
            children: (0, i.jsx)("span", {
                className: A.YW,
                children: e.name,
            }),
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: e ? A.XB : A.xr,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: A.Lr,
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: o } = this.props;
        return (0, i.jsx)(S, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class T extends (r = a.Component) {
    renderIcon() {
        var e;
        let { channel: t } = this.props,
            n = (0, u.gU)(t);
        if (null == n) return null;
        let r = null != (e = (0, d.A)(t)) ? e : "";
        return (0, i.jsx)("div", {
            className: A.zc,
            role: "img",
            "aria-label": r,
            children: (0, i.jsx)(n, {
                className: A.Kk,
                size: "xs",
                color: "currentColor",
            }),
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: a, isMentionLowImportance: s } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(f.A, {
                    className: A.qS,
                    value: n,
                    lowImportance: s,
                })),
            null != r &&
                (t = (0, i.jsx)("span", {
                    className: A.N4,
                    children: (0, c.m1)(r, b.default, E.A),
                })),
            (0, i.jsxs)("div", {
                className: A.UU,
                children: [
                    (0, i.jsx)("span", {
                        className: A.YW,
                        children: (0, c.m1)(a, b.default, E.A),
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
            : (0, i.jsx)(m.A, {
                  className: A.x7,
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
            className: e || (null != t && t > 0) ? A.XB : A.xr,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: A.Lr,
                    children: n,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null == (e = g.A.getGuild(this.props.channel.guild_id)) ? void 0 : e.name,
            r = (0, c.m1)(t, b.default, E.A),
            i = (0, d.A)(t);
        return O.intl.formatToPlainString(O.t["Vw/da+"], {
            name: r,
            type: i,
            guild: n,
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: o } = this.props;
        return (0, i.jsx)(S, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
v(T, "defaultProps", { unread: !1 });
class C extends a.Component {
    renderIcon() {
        let { channel: e, status: t } = this.props;
        return (0, i.jsx)("div", {
            className: A.IU,
            children: (0, i.jsx)(s.euF, {
                src: (0, l.Y)(e),
                size: s._3J.SIZE_20,
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
                (e = (0, i.jsx)(f.A, {
                    className: A.qS,
                    value: t,
                })),
            (0, i.jsxs)("div", {
                className: A.UU,
                children: [
                    (0, i.jsx)("span", {
                        className: A.YW,
                        children: (0, c.m1)(n, b.default, E.A),
                    }),
                    e,
                ],
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? A.XB : A.xr,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: A.Lr,
                    children: t,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, c.m1)(e, b.default, E.A);
        return null != t && t > 0
            ? O.intl.formatToPlainString(O.t.LYdVfN, {
                  name: n,
                  mentions: t,
              })
            : O.intl.formatToPlainString(O.t.lLSbno, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: o } = this.props;
        return (0, i.jsx)(S, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class N extends a.Component {
    renderIcon() {
        let { user: e, status: t, isMobile: n } = this.props;
        return (0, i.jsx)("div", {
            className: A.zc,
            children: (0, i.jsx)(s.euF, {
                src: e.getAvatarURL(void 0, 20),
                "aria-hidden": !0,
                size: s._3J.SIZE_20,
                status: t,
                isMobile: n,
            }),
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            r = E.A.getNickname(t.id);
        return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) === t.username || e === t.id) &&
                (e = null != r ? r : y.Ay.getName(t)),
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
                (e = (0, i.jsx)(f.A, {
                    className: A.qS,
                    value: n,
                })),
            (0, i.jsxs)("div", {
                className: A.UU,
                children: [
                    (0, i.jsx)("span", {
                        className: A.YW,
                        children: r,
                    }),
                    e,
                    (0, i.jsx)("span", {
                        className: A.Xh,
                        children: y.Ay.getUserTag(t),
                    }),
                ],
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? A.XB : A.xr,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)("div", {
                    className: A.Lr,
                    children: e,
                }),
            ],
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            r = y.Ay.getUserTag(t);
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: o } = this.props;
        return (0, i.jsx)(S, {
            id: o,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class R extends a.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)("div", {
            className: A.xr,
            children: [
                (0, i.jsx)("div", {
                    className: A.zc,
                    children: (0, i.jsx)(p.A, {
                        tabIndex: -1,
                        className: A.Gt,
                        game: t,
                        size: A.D0,
                    }),
                }),
                t.name,
                (0, i.jsx)("div", {
                    className: A.Lr,
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
class w extends a.Component {
    render() {
        return (0, i.jsx)("div", {
            className: A.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
                className: A.xr,
                children: (0, i.jsx)("div", {
                    className: A.wx,
                    children: this.props.children,
                }),
            }),
        });
    }
}
class P extends a.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: r } = this.props,
            a = (0, h.vu)(n.path);
        return (
            null == a || void 0 === a.messageId
                ? ((e = O.intl.string(O.t.qbSCqj)),
                  (t = (0, i.jsx)(s.qYV, {
                      size: "xs",
                      color: "currentColor",
                  })))
                : (0, h.r9)(a)
                  ? ((e = O.intl.string(O.t["6Fd/j1"])),
                    (t = (0, i.jsx)(s.txs, {
                        size: "xs",
                        color: "currentColor",
                    })))
                  : ((e = O.intl.string(O.t.jQRwp4)),
                    (t = (0, i.jsx)(s.XAi, {
                        size: "xs",
                        color: "currentColor",
                    }))),
            (0, i.jsxs)("div", {
                className: A.xr,
                children: [
                    (0, i.jsx)("div", {
                        className: A.zc,
                        children: t,
                    }),
                    e,
                    (0, i.jsx)("div", {
                        className: A.Lr,
                        children: r,
                    }),
                ],
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: o } = this.props;
        return (0, i.jsx)(S, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
class D extends a.Component {
    renderContent() {
        var e, t;
        let n,
            r,
            { navigationRecord: a, children: l } = this.props;
        switch (a.type) {
            case o.t1.SHOP:
                (n = O.intl.string(O.t.pWG4ze)),
                    (r = (0, i.jsx)(s.U1X, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.SHOP_ORBS_TAB:
                (n = O.intl.string(O.t.EBYkzk)),
                    (r = (0, i.jsx)(s.U1X, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.QUEST_ORBS:
                (n = "".concat(O.intl.string(O.t.ElYQFS), " ").concat(O.intl.string(O.t.JALI2K))),
                    (r = (0, i.jsx)(s.r2v, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.NITRO_HOME:
                (n = O.intl.string(O.t.Ipxkog)),
                    (r = (0, i.jsx)(s.tvc, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.QUEST_HOME:
                (n = O.intl.string(O.t.JALI2K)),
                    (r = (0, i.jsx)(s.r2v, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.APPS_HOME:
                (n = O.intl.string(O.t.PHjkRE)),
                    (r = (0, i.jsx)(s.k9F, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.SETTINGS:
                (n = null != (e = a.label) ? e : O.intl.string(O.t["3D5yo/"])),
                    (r = (0, i.jsx)(s.Zes, {
                        size: "xs",
                        color: "currentColor",
                    }));
                break;
            case o.t1.PLAYGROUND:
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
                    r = (0, i.jsx)(s.HUC, {
                        size: "xs",
                        color: "currentColor",
                    });
                break;
            default:
                (n = a.id),
                    (r = (0, i.jsx)(s.qYV, {
                        size: "xs",
                        color: "currentColor",
                    }));
        }
        return (0, i.jsxs)("div", {
            className: A.xr,
            children: [
                (0, i.jsx)("div", {
                    className: A.zc,
                    children: r,
                }),
                (0, i.jsx)("div", {
                    className: A.UU,
                    children: n,
                }),
                (0, i.jsx)("div", {
                    className: A.Lr,
                    children: l,
                }),
            ],
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: a, score: s, id: o } = this.props;
        return (0, i.jsx)(S, {
            id: o,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: a,
            score: s,
            children: this.renderContent(),
        });
    }
}
