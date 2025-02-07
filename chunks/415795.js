n.d(t, {
    $W: () => v,
    Mx: () => O,
    PZ: () => j,
    h4: () => R,
    ic: () => b,
    n5: () => A,
    rU: () => P,
    s8: () => D
}),
    n(47120);
var i,
    s = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(815372),
    o = n(43267),
    c = n(933557),
    d = n(471445),
    u = n(16206),
    m = n(790145),
    h = n(925329),
    g = n(565138),
    _ = n(754688),
    x = n(237583),
    p = n(430824),
    E = n(699516),
    C = n(594174),
    f = n(51144),
    T = n(388032),
    N = n(431872);
function S(e, t, n) {
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
class I extends r.PureComponent {
    componentDidMount() {
        let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
        e && null != n && t(n);
    }
    componentDidUpdate(e) {
        let { focused: t, onFocus: n } = this.props,
            { node: i } = this;
        null != i && t && !e.focused && n(i);
    }
    render() {
        let { focused: e, children: t, score: n, onContextMenu: i, id: r, 'aria-label': a } = this.props;
        return (0, s.jsxs)(l.P3F, {
            role: 'option',
            id: r,
            'aria-label': a,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: N.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: i,
            children: [
                t,
                null != n
                    ? (0, s.jsx)('div', {
                          className: N.score,
                          children: n >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'node', void 0),
            S(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            S(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            S(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class b extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, s.jsx)('div', {
            className: N.guildIconContainer,
            children: (0, s.jsx)(g.Z, {
                tabIndex: -1,
                guild: e,
                size: g.Z.Sizes.MINI,
                className: N.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, s.jsx)('div', {
            className: N.name,
            children: (0, s.jsx)('span', {
                className: N.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, s.jsxs)('div', {
            className: e ? N.contentUnread : N.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: N.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return T.intl.formatToPlainString(T.t.WVq3Li, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: l, id: a } = this.props;
        return (0, s.jsx)(I, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: l,
            children: this.renderContent()
        });
    }
}
class v extends (i = r.Component) {
    renderIcon() {
        var e;
        let { channel: t } = this.props,
            n = (0, d.KS)(t);
        if (null == n) return null;
        let i = null !== (e = (0, u.Z)(t)) && void 0 !== e ? e : '';
        return (0, s.jsx)('div', {
            className: N.iconContainer,
            role: 'img',
            'aria-label': i,
            children: (0, s.jsx)(n, {
                className: N.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, t;
        let { mentions: n, category: i, channel: r, isMentionLowImportance: l } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, s.jsx)(m.Z, {
                    className: N.badge,
                    value: n,
                    lowImportance: l
                })),
            null != i &&
                (t = (0, s.jsx)('span', {
                    className: N.note,
                    children: (0, c.F6)(i, C.default, E.Z)
                })),
            (0, s.jsxs)('div', {
                className: N.name,
                children: [
                    (0, s.jsx)('span', {
                        className: N.match,
                        children: (0, c.F6)(r, C.default, E.Z)
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
            : (0, s.jsx)(x.Z, {
                  className: N.voiceSummaryContainer,
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
        return (0, s.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != t && t > 0) ? N.contentUnread : N.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: N.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null === (e = p.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            i = (0, c.F6)(t, C.default, E.Z),
            s = (0, u.Z)(t);
        return T.intl.formatToPlainString(T.t['Vw/da2'], {
            name: i,
            type: s,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: l, id: a } = this.props;
        return (0, s.jsx)(I, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: l,
            children: this.renderContent()
        });
    }
}
S(v, 'defaultProps', { unread: !1 });
class j extends r.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, s.jsx)('div', {
            className: N.dmIconContainer,
            children: (0, s.jsx)(l.qEK, {
                src: (0, o.x)(e),
                size: l.EFr.SIZE_20,
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
                (e = (0, s.jsx)(m.Z, {
                    className: N.badge,
                    value: t
                })),
            (0, s.jsxs)('div', {
                className: N.name,
                children: [
                    (0, s.jsx)('span', {
                        className: N.match,
                        children: (0, c.F6)(n, C.default, E.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, s.jsxs)('div', {
            className: null != e && e > 0 ? N.contentUnread : N.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: N.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, c.F6)(e, C.default, E.Z);
        return null != t && t > 0
            ? T.intl.formatToPlainString(T.t.LYdVfH, {
                  name: n,
                  mentions: t
              })
            : T.intl.formatToPlainString(T.t.lLSbnp, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: l, id: a } = this.props;
        return (0, s.jsx)(I, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: l,
            children: this.renderContent()
        });
    }
}
class A extends r.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, s.jsx)('div', {
            className: N.iconContainer,
            children: (0, s.jsx)(l.qEK, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: l.EFr.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: t, comparator: n } = this.props,
            i = E.Z.getNickname(t.id);
        return ((e = n === t.tag || null == n || '' === n ? t.username : n) === t.username || e === t.id) && (e = null != i ? i : f.ZP.getName(t)), e;
    }
    renderName() {
        let e;
        let { user: t, mentions: n } = this.props,
            i = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, s.jsx)(m.Z, {
                    className: N.badge,
                    value: n
                })),
            (0, s.jsxs)('div', {
                className: N.name,
                children: [
                    (0, s.jsx)('span', {
                        className: N.match,
                        children: i
                    }),
                    e,
                    (0, s.jsx)('span', {
                        className: N.username,
                        children: f.ZP.getUserTag(t)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, s.jsxs)('div', {
            className: null != t && t > 0 ? N.contentUnread : N.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: N.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = f.ZP.getUserTag(t);
        return null != e && e > 0
            ? T.intl.formatToPlainString(T.t['6b9Ura'], {
                  name: n,
                  id: i,
                  mentions: e
              })
            : T.intl.formatToPlainString(T.t.GWYOAQ, {
                  name: n,
                  id: i
              });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: l, id: a } = this.props;
        return (0, s.jsx)(I, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: l,
            children: this.renderContent()
        });
    }
}
class O extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, s.jsxs)('div', {
            className: N.contentDefault,
            children: [
                (0, s.jsx)('div', {
                    className: N.iconContainer,
                    children: (0, s.jsx)(h.Z, {
                        tabIndex: -1,
                        className: N.gameIcon,
                        game: t,
                        size: N.gameIconSize
                    })
                }),
                t.name,
                (0, s.jsx)('div', {
                    className: N.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: i, id: r } = this.props;
        return (0, s.jsx)(I, {
            id: r,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: i,
            children: this.renderContent()
        });
    }
}
class R extends r.Component {
    render() {
        return (0, s.jsx)('div', {
            className: N.__invalid_resultDefault,
            children: (0, s.jsx)('div', {
                className: N.contentDefault,
                children: (0, s.jsx)('div', {
                    className: N.header,
                    children: this.props.children
                })
            })
        });
    }
}
class P extends r.Component {
    renderContent() {
        let e, t;
        let { link: n, children: i } = this.props,
            r = (0, _.Qj)(n.path);
        return (
            null == r || void 0 === r.messageId
                ? ((e = T.intl.string(T.t.qbSCqq)),
                  (t = (0, s.jsx)(l.xPt, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, _.VO)(r)
                  ? ((e = T.intl.string(T.t['6Fd/j4'])),
                    (t = (0, s.jsx)(l.acy, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = T.intl.string(T.t.jQRwp6)),
                    (t = (0, s.jsx)(l.mBM, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, s.jsxs)('div', {
                className: N.contentDefault,
                children: [
                    (0, s.jsx)('div', {
                        className: N.iconContainer,
                        children: t
                    }),
                    e,
                    (0, s.jsx)('div', {
                        className: N.misc,
                        children: i
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: l, id: a } = this.props;
        return (0, s.jsx)(I, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: l,
            children: this.renderContent()
        });
    }
}
class D extends r.Component {
    renderContent() {
        let e, t;
        let { navigationRecord: n, children: i } = this.props;
        switch (n.type) {
            case a.Ky.SHOP:
                (e = T.intl.string(T.t.pWG4zc)),
                    (t = (0, s.jsx)(l.EOn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.NITRO_HOME:
                (e = T.intl.string(T.t.Ipxkoq)),
                    (t = (0, s.jsx)(l.SrA, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.QUEST_HOME:
                (e = T.intl.string(T.t.JALI2N)),
                    (t = (0, s.jsx)(l.qDn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case a.Ky.APPS_HOME:
                (e = T.intl.string(T.t.PHjkRE)),
                    (t = (0, s.jsx)(l.jje, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = n.id),
                    (t = (0, s.jsx)(l.xPt, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, s.jsxs)('div', {
            className: N.contentDefault,
            children: [
                (0, s.jsx)('div', {
                    className: N.iconContainer,
                    children: t
                }),
                e,
                (0, s.jsx)('div', {
                    className: N.misc,
                    children: i
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: l, id: a } = this.props;
        return (0, s.jsx)(I, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: l,
            children: this.renderContent()
        });
    }
}
