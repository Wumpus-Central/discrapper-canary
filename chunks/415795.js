n.d(t, {
    $W: () => S,
    Mx: () => y,
    PZ: () => T,
    h4: () => A,
    ic: () => v,
    n5: () => I,
    rU: () => P,
    s8: () => R
}),
    n(47120),
    n(301563);
var r,
    i = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(815372),
    o = n(43267),
    c = n(933557),
    d = n(471445),
    u = n(16206),
    m = n(790145),
    g = n(925329),
    p = n(565138),
    h = n(754688),
    f = n(237583),
    N = n(430824),
    x = n(699516),
    b = n(594174),
    _ = n(51144),
    E = n(388032),
    j = n(425707);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class O extends s.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: r, id: s, 'aria-label': l } = this.props;
        return (0, i.jsxs)(a.P3F, {
            role: 'option',
            id: s,
            'aria-label': l,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: j.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                t,
                null != n
                    ? (0, i.jsx)('div', {
                          className: j.score,
                          children: n >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'node', void 0),
            C(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            C(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            C(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class v extends s.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, i.jsx)('div', {
            className: j.guildIconContainer,
            children: (0, i.jsx)(p.Z, {
                tabIndex: -1,
                guild: e,
                size: p.Z.Sizes.MINI,
                className: j.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)('div', {
            className: j.name,
            children: (0, i.jsx)('span', {
                className: j.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)('div', {
            className: e ? j.contentUnread : j.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: j.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return E.NW.formatToPlainString(E.t.WVq3Li, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(O, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        });
    }
}
class S extends (r = s.Component) {
    renderIcon() {
        var e;
        let { channel: t } = this.props,
            n = (0, d.KS)(t);
        if (null == n) return null;
        let r = null !== (e = (0, u.Z)(t)) && void 0 !== e ? e : '';
        return (0, i.jsx)('div', {
            className: j.iconContainer,
            role: 'img',
            'aria-label': r,
            children: (0, i.jsx)(n, {
                className: j.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, t;
        let { mentions: n, category: r, channel: s, isMentionLowImportance: a } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(m.Z, {
                    className: j.badge,
                    value: n,
                    lowImportance: a
                })),
            null != r &&
                (t = (0, i.jsx)('span', {
                    className: j.note,
                    children: (0, c.F6)(r, b.default, x.Z)
                })),
            (0, i.jsxs)('div', {
                className: j.name,
                children: [
                    (0, i.jsx)('span', {
                        className: j.match,
                        children: (0, c.F6)(s, b.default, x.Z)
                    }),
                    e,
                    this.renderVoiceStates(),
                    t
                ]
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(f.Z, {
                  className: j.voiceSummaryContainer,
                  guildId: t.guild_id,
                  users: e.map((e) => {
                      let { user: t } = e;
                      return { user: t };
                  }),
                  max: 4
              });
    }
    renderContent() {
        let { unread: e, mentions: t, children: n } = this.props;
        return (0, i.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != t && t > 0) ? j.contentUnread : j.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: j.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null === (e = N.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            r = (0, c.F6)(t, b.default, x.Z),
            i = (0, u.Z)(t);
        return E.NW.formatToPlainString(E.t['Vw/da2'], {
            name: r,
            type: i,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(O, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        });
    }
}
C(S, 'defaultProps', { unread: !1 });
class T extends s.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, i.jsx)('div', {
            className: j.dmIconContainer,
            children: (0, i.jsx)(a.qEK, {
                src: (0, o.x)(e),
                size: a.EFr.SIZE_20,
                'aria-hidden': !0
            })
        });
    }
    renderName() {
        let e;
        let { mentions: t, channel: n } = this.props;
        return (
            null != t &&
                t > 0 &&
                (e = (0, i.jsx)(m.Z, {
                    className: j.badge,
                    value: t
                })),
            (0, i.jsxs)('div', {
                className: j.name,
                children: [
                    (0, i.jsx)('span', {
                        className: j.match,
                        children: (0, c.F6)(n, b.default, x.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)('div', {
            className: null != e && e > 0 ? j.contentUnread : j.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: j.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, c.F6)(e, b.default, x.Z);
        return null != t && t > 0
            ? E.NW.formatToPlainString(E.t.LYdVfH, {
                  name: n,
                  mentions: t
              })
            : E.NW.formatToPlainString(E.t.lLSbnp, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(O, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        });
    }
}
class I extends s.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, i.jsx)('div', {
            className: j.iconContainer,
            children: (0, i.jsx)(a.qEK, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: a.EFr.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: t, comparator: n } = this.props,
            r = x.Z.getNickname(t.id);
        return ((e = n === t.tag || null == n || '' === n ? t.username : n) === t.username || e === t.id) && (e = null != r ? r : _.ZP.getName(t)), e;
    }
    renderName() {
        let e;
        let { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(m.Z, {
                    className: j.badge,
                    value: n
                })),
            (0, i.jsxs)('div', {
                className: j.name,
                children: [
                    (0, i.jsx)('span', {
                        className: j.match,
                        children: r
                    }),
                    e,
                    (0, i.jsx)('span', {
                        className: j.username,
                        children: _.ZP.getUserTag(t)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)('div', {
            className: null != t && t > 0 ? j.contentUnread : j.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: j.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            r = _.ZP.getUserTag(t);
        return null != e && e > 0
            ? E.NW.formatToPlainString(E.t['6b9Ura'], {
                  name: n,
                  id: r,
                  mentions: e
              })
            : E.NW.formatToPlainString(E.t.GWYOAQ, {
                  name: n,
                  id: r
              });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(O, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        });
    }
}
class y extends s.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)('div', {
            className: j.contentDefault,
            children: [
                (0, i.jsx)('div', {
                    className: j.iconContainer,
                    children: (0, i.jsx)(g.Z, {
                        tabIndex: -1,
                        className: j.gameIcon,
                        game: t,
                        size: j.gameIconSize
                    })
                }),
                t.name,
                (0, i.jsx)('div', {
                    className: j.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: s } = this.props;
        return (0, i.jsx)(O, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent()
        });
    }
}
class A extends s.Component {
    render() {
        return (0, i.jsx)('div', {
            className: j.__invalid_resultDefault,
            children: (0, i.jsx)('div', {
                className: j.contentDefault,
                children: (0, i.jsx)('div', {
                    className: j.header,
                    children: this.props.children
                })
            })
        });
    }
}
class P extends s.Component {
    renderContent() {
        let e, t;
        let { link: n, children: r } = this.props,
            s = (0, h.Qj)(n.path);
        return (
            null == s || void 0 === s.messageId
                ? ((e = E.NW.string(E.t.qbSCqq)),
                  (t = (0, i.jsx)(a.xPt, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, h.VO)(s)
                  ? ((e = E.NW.string(E.t['6Fd/j4'])),
                    (t = (0, i.jsx)(a.acy, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = E.NW.string(E.t.jQRwp6)),
                    (t = (0, i.jsx)(a.mBM, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, i.jsxs)('div', {
                className: j.contentDefault,
                children: [
                    (0, i.jsx)('div', {
                        className: j.iconContainer,
                        children: t
                    }),
                    e,
                    (0, i.jsx)('div', {
                        className: j.misc,
                        children: r
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(O, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        });
    }
}
class R extends s.Component {
    renderContent() {
        let e, t;
        let { navigationRecord: n, children: r } = this.props;
        switch (n.type) {
            case l.Ky.SHOP:
                (e = E.NW.string(E.t.pWG4zc)),
                    (t = (0, i.jsx)(a.EOn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.NITRO_HOME:
                (e = E.NW.string(E.t.Ipxkoq)),
                    (t = (0, i.jsx)(a.SrA, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.QUEST_HOME:
                (e = E.NW.string(E.t.JALI2N)),
                    (t = (0, i.jsx)(a.qDn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.APPS_HOME:
                (e = E.NW.string(E.t.PHjkRE)),
                    (t = (0, i.jsx)(a.jje, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.SETTINGS:
                var s;
                (e = null !== (s = n.label) && void 0 !== s ? s : E.NW.string(E.t['3D5yo6'])),
                    (t = (0, i.jsx)(a.ewm, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = n.id),
                    (t = (0, i.jsx)(a.xPt, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, i.jsxs)('div', {
            className: j.contentDefault,
            children: [
                (0, i.jsx)('div', {
                    className: j.iconContainer,
                    children: t
                }),
                (0, i.jsx)('div', {
                    className: j.name,
                    children: e
                }),
                (0, i.jsx)('div', {
                    className: j.misc,
                    children: r
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(O, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: r,
            focused: s,
            score: a,
            children: this.renderContent()
        });
    }
}
