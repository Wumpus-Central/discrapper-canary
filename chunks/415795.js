n.d(t, {
    $W: function () {
        return v;
    },
    Mx: function () {
        return R;
    },
    PZ: function () {
        return A;
    },
    h4: function () {
        return O;
    },
    ic: function () {
        return N;
    },
    n5: function () {
        return j;
    },
    rU: function () {
        return P;
    },
    s8: function () {
        return y;
    }
}),
    n(47120);
var i,
    s = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(815372),
    o = n(43267),
    c = n(933557),
    d = n(471445),
    u = n(16206),
    m = n(790145),
    g = n(925329),
    h = n(565138),
    p = n(754688),
    x = n(237583),
    f = n(430824),
    _ = n(699516),
    E = n(594174),
    C = n(51144),
    T = n(388032),
    S = n(431872);
function b(e, t, n) {
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
        let { focused: e, children: t, score: n, onContextMenu: i, id: r, 'aria-label': l } = this.props;
        return (0, s.jsxs)(a.Clickable, {
            role: 'option',
            id: r,
            'aria-label': l,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: S.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: i,
            children: [
                t,
                null != n
                    ? (0, s.jsx)('div', {
                          className: S.score,
                          children: n >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'node', void 0),
            b(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            b(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t } = this.props,
                    { node: n } = this;
                null != n && t(e, n);
            }),
            b(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class N extends r.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, s.jsx)('div', {
            className: S.guildIconContainer,
            children: (0, s.jsx)(h.Z, {
                tabIndex: -1,
                guild: e,
                size: h.Z.Sizes.MINI,
                className: S.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, s.jsx)('div', {
            className: S.name,
            children: (0, s.jsx)('span', {
                className: S.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, s.jsxs)('div', {
            className: e ? S.contentUnread : S.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: S.misc,
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: a, id: l } = this.props;
        return (0, s.jsx)(I, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: a,
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
            className: S.iconContainer,
            role: 'img',
            'aria-label': i,
            children: (0, s.jsx)(n, {
                className: S.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, t;
        let { mentions: n, category: i, channel: r, isMentionLowImportance: a } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, s.jsx)(m.Z, {
                    className: S.badge,
                    value: n,
                    lowImportance: a
                })),
            null != i &&
                (t = (0, s.jsx)('span', {
                    className: S.note,
                    children: (0, c.F6)(i, E.default, _.Z)
                })),
            (0, s.jsxs)('div', {
                className: S.name,
                children: [
                    (0, s.jsx)('span', {
                        className: S.match,
                        children: (0, c.F6)(r, E.default, _.Z)
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
                  className: S.voiceSummaryContainer,
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
            className: e || (null != t && t > 0) ? S.contentUnread : S.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: S.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null === (e = f.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            i = (0, c.F6)(t, E.default, _.Z),
            s = (0, u.Z)(t);
        return T.intl.formatToPlainString(T.t['Vw/da2'], {
            name: i,
            type: s,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: a, id: l } = this.props;
        return (0, s.jsx)(I, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: a,
            children: this.renderContent()
        });
    }
}
b(v, 'defaultProps', { unread: !1 });
class A extends r.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, s.jsx)('div', {
            className: S.dmIconContainer,
            children: (0, s.jsx)(a.Avatar, {
                src: (0, o.x)(e),
                size: a.AvatarSizes.SIZE_20,
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
                    className: S.badge,
                    value: t
                })),
            (0, s.jsxs)('div', {
                className: S.name,
                children: [
                    (0, s.jsx)('span', {
                        className: S.match,
                        children: (0, c.F6)(n, E.default, _.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, s.jsxs)('div', {
            className: null != e && e > 0 ? S.contentUnread : S.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: S.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, c.F6)(e, E.default, _.Z);
        return null != t && t > 0
            ? T.intl.formatToPlainString(T.t.LYdVfH, {
                  name: n,
                  mentions: t
              })
            : T.intl.formatToPlainString(T.t.lLSbnp, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: a, id: l } = this.props;
        return (0, s.jsx)(I, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: a,
            children: this.renderContent()
        });
    }
}
class j extends r.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, s.jsx)('div', {
            className: S.iconContainer,
            children: (0, s.jsx)(a.Avatar, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: a.AvatarSizes.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: t, comparator: n } = this.props,
            i = _.Z.getNickname(t.id);
        return ((e = n === t.tag || null == n || '' === n ? t.username : n) === t.username || e === t.id) && (e = null != i ? i : C.ZP.getName(t)), e;
    }
    renderName() {
        let e;
        let { user: t, mentions: n } = this.props,
            i = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, s.jsx)(m.Z, {
                    className: S.badge,
                    value: n
                })),
            (0, s.jsxs)('div', {
                className: S.name,
                children: [
                    (0, s.jsx)('span', {
                        className: S.match,
                        children: i
                    }),
                    e,
                    (0, s.jsx)('span', {
                        className: S.username,
                        children: C.ZP.getUserTag(t)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, s.jsxs)('div', {
            className: null != t && t > 0 ? S.contentUnread : S.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, s.jsx)('div', {
                    className: S.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = C.ZP.getUserTag(t);
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
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: a, id: l } = this.props;
        return (0, s.jsx)(I, {
            id: l,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: a,
            children: this.renderContent()
        });
    }
}
class R extends r.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, s.jsxs)('div', {
            className: S.contentDefault,
            children: [
                (0, s.jsx)('div', {
                    className: S.iconContainer,
                    children: (0, s.jsx)(g.Z, {
                        tabIndex: -1,
                        className: S.gameIcon,
                        game: t,
                        size: S.gameIconSize
                    })
                }),
                t.name,
                (0, s.jsx)('div', {
                    className: S.misc,
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
class O extends r.Component {
    render() {
        return (0, s.jsx)('div', {
            className: S.__invalid_resultDefault,
            children: (0, s.jsx)('div', {
                className: S.contentDefault,
                children: (0, s.jsx)('div', {
                    className: S.header,
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
            r = (0, p.Qj)(n.path);
        return (
            null == r || void 0 === r.messageId
                ? ((e = T.intl.string(T.t.qbSCqq)),
                  (t = (0, s.jsx)(a.LinkIcon, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, p.VO)(r)
                  ? ((e = T.intl.string(T.t['6Fd/j4'])),
                    (t = (0, s.jsx)(a.ChatArrowRightIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = T.intl.string(T.t.jQRwp6)),
                    (t = (0, s.jsx)(a.LockIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, s.jsxs)('div', {
                className: S.contentDefault,
                children: [
                    (0, s.jsx)('div', {
                        className: S.iconContainer,
                        children: t
                    }),
                    e,
                    (0, s.jsx)('div', {
                        className: S.misc,
                        children: i
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: a, id: l } = this.props;
        return (0, s.jsx)(I, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: a,
            children: this.renderContent()
        });
    }
}
class y extends r.Component {
    renderContent() {
        let e, t;
        let { navigationRecord: n, children: i } = this.props;
        switch (n.type) {
            case l.Ky.SHOP:
                (e = T.intl.string(T.t.pWG4zc)),
                    (t = (0, s.jsx)(a.ShopIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.NITRO_HOME:
                (e = T.intl.string(T.t.Ipxkoq)),
                    (t = (0, s.jsx)(a.NitroWheelIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.QUEST_HOME:
                (e = T.intl.string(T.t.JALI2N)),
                    (t = (0, s.jsx)(a.QuestsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case l.Ky.APPS_HOME:
                (e = T.intl.string(T.t.PHjkRE)),
                    (t = (0, s.jsx)(a.AppsIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = n.id),
                    (t = (0, s.jsx)(a.LinkIcon, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, s.jsxs)('div', {
            className: S.contentDefault,
            children: [
                (0, s.jsx)('div', {
                    className: S.iconContainer,
                    children: t
                }),
                e,
                (0, s.jsx)('div', {
                    className: S.misc,
                    children: i
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: r, score: a, id: l } = this.props;
        return (0, s.jsx)(I, {
            id: l,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: r,
            score: a,
            children: this.renderContent()
        });
    }
}
