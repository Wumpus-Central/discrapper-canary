t.d(n, {
    $W: () => N,
    Mx: () => R,
    PZ: () => T,
    h4: () => k,
    ic: () => O,
    n5: () => G,
    rU: () => H,
    s8: () => Z
}),
    t(47120);
var i,
    r = t(200651),
    s = t(192379),
    l = t(481060),
    o = t(815372),
    a = t(43267),
    d = t(933557),
    c = t(471445),
    u = t(16206),
    E = t(790145),
    p = t(925329),
    b = t(565138),
    C = t(754688),
    h = t(237583),
    g = t(430824),
    A = t(699516),
    S = t(594174),
    _ = t(51144),
    m = t(388032),
    I = t(485085);
function f(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class L extends s.PureComponent {
    componentDidMount() {
        let { focused: e, onFocus: n } = this.props,
            { node: t } = this;
        e && null != t && n(t);
    }
    componentDidUpdate(e) {
        let { focused: n, onFocus: t } = this.props,
            { node: i } = this;
        null != i && n && !e.focused && t(i);
    }
    render() {
        let { focused: e, children: n, score: t, onContextMenu: i, id: s, 'aria-label': o } = this.props;
        return (0, r.jsxs)(l.P3F, {
            role: 'option',
            id: s,
            'aria-label': o,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: I.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: i,
            children: [
                n,
                null != t
                    ? (0, r.jsx)('div', {
                          className: I.score,
                          children: t >> 0
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'node', void 0),
            f(this, 'handleClick', (e) => {
                e.preventDefault();
                let { onClick: n } = this.props,
                    { node: t } = this;
                null != t && n(e, t);
            }),
            f(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: n } = this.props,
                    { node: t } = this;
                null != t && n(e, t);
            }),
            f(this, 'setRef', (e) => {
                this.node = e;
            });
    }
}
class O extends s.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, r.jsx)('div', {
            className: I.guildIconContainer,
            children: (0, r.jsx)(b.Z, {
                tabIndex: -1,
                guild: e,
                size: b.Z.Sizes.MINI,
                className: I.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, r.jsx)('div', {
            className: I.name,
            children: (0, r.jsx)('span', {
                className: I.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: n } = this.props;
        return (0, r.jsxs)('div', {
            className: e ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: I.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return m.intl.formatToPlainString(m.t.WVq3Li, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: i, focused: s, score: l, id: o } = this.props;
        return (0, r.jsx)(L, {
            id: o,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class N extends (i = s.Component) {
    renderIcon() {
        var e;
        let { channel: n } = this.props,
            t = (0, c.KS)(n);
        if (null == t) return null;
        let i = null !== (e = (0, u.Z)(n)) && void 0 !== e ? e : '';
        return (0, r.jsx)('div', {
            className: I.iconContainer,
            role: 'img',
            'aria-label': i,
            children: (0, r.jsx)(t, {
                className: I.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e, n;
        let { mentions: t, category: i, channel: s, isMentionLowImportance: l } = this.props;
        return (
            null != t &&
                t > 0 &&
                (e = (0, r.jsx)(E.Z, {
                    className: I.badge,
                    value: t,
                    lowImportance: l
                })),
            null != i &&
                (n = (0, r.jsx)('span', {
                    className: I.note,
                    children: (0, d.F6)(i, S.default, A.Z)
                })),
            (0, r.jsxs)('div', {
                className: I.name,
                children: [
                    (0, r.jsx)('span', {
                        className: I.match,
                        children: (0, d.F6)(s, S.default, A.Z)
                    }),
                    e,
                    this.renderVoiceStates(),
                    n
                ]
            })
        );
    }
    renderVoiceStates() {
        let { voiceStates: e, channel: n } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(h.Z, {
                  className: I.voiceSummaryContainer,
                  guildId: n.guild_id,
                  users: e.map((e) => {
                      let { user: n } = e;
                      return { user: n };
                  }),
                  max: 4
              });
    }
    renderContent() {
        let { unread: e, mentions: n, children: t } = this.props;
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != n && n > 0) ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: I.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: n } = this.props,
            t = null === (e = g.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name,
            i = (0, d.F6)(n, S.default, A.Z),
            r = (0, u.Z)(n);
        return m.intl.formatToPlainString(m.t['Vw/da2'], {
            name: i,
            type: r,
            guild: t
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: i, focused: s, score: l, id: o } = this.props;
        return (0, r.jsx)(L, {
            id: o,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
f(N, 'defaultProps', { unread: !1 });
class T extends s.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, r.jsx)('div', {
            className: I.dmIconContainer,
            children: (0, r.jsx)(l.qEK, {
                src: (0, a.x)(e),
                size: l.EFr.SIZE_20,
                'aria-hidden': !0
            })
        });
    }
    renderName() {
        let e;
        let { mentions: n, channel: t } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, r.jsx)(E.Z, {
                    className: I.badge,
                    value: n
                })),
            (0, r.jsxs)('div', {
                className: I.name,
                children: [
                    (0, r.jsx)('span', {
                        className: I.match,
                        children: (0, d.F6)(t, S.default, A.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: n } = this.props;
        return (0, r.jsxs)('div', {
            className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: I.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: n } = this.props,
            t = (0, d.F6)(e, S.default, A.Z);
        return null != n && n > 0
            ? m.intl.formatToPlainString(m.t.LYdVfH, {
                  name: t,
                  mentions: n
              })
            : m.intl.formatToPlainString(m.t.lLSbnp, { name: t });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: i, focused: s, score: l, id: o } = this.props;
        return (0, r.jsx)(L, {
            id: o,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class G extends s.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, r.jsx)('div', {
            className: I.iconContainer,
            children: (0, r.jsx)(l.qEK, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: l.EFr.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e;
        let { user: n, comparator: t } = this.props,
            i = A.Z.getNickname(n.id);
        return ((e = t === n.tag || null == t || '' === t ? n.username : t) === n.username || e === n.id) && (e = null != i ? i : _.ZP.getName(n)), e;
    }
    renderName() {
        let e;
        let { user: n, mentions: t } = this.props,
            i = this.getDisplayNickname();
        return (
            null != t &&
                t > 0 &&
                (e = (0, r.jsx)(E.Z, {
                    className: I.badge,
                    value: t
                })),
            (0, r.jsxs)('div', {
                className: I.name,
                children: [
                    (0, r.jsx)('span', {
                        className: I.match,
                        children: i
                    }),
                    e,
                    (0, r.jsx)('span', {
                        className: I.username,
                        children: _.ZP.getUserTag(n)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: n } = this.props;
        return (0, r.jsxs)('div', {
            className: null != n && n > 0 ? I.contentUnread : I.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: I.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: n } = this.props,
            t = this.getDisplayNickname(),
            i = _.ZP.getUserTag(n);
        return null != e && e > 0
            ? m.intl.formatToPlainString(m.t['6b9Ura'], {
                  name: t,
                  id: i,
                  mentions: e
              })
            : m.intl.formatToPlainString(m.t.GWYOAQ, {
                  name: t,
                  id: i
              });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: i, focused: s, score: l, id: o } = this.props;
        return (0, r.jsx)(L, {
            id: o,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class R extends s.Component {
    renderContent() {
        let { children: e, application: n } = this.props;
        return (0, r.jsxs)('div', {
            className: I.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: I.iconContainer,
                    children: (0, r.jsx)(p.Z, {
                        tabIndex: -1,
                        className: I.gameIcon,
                        game: n,
                        size: I.gameIconSize
                    })
                }),
                n.name,
                (0, r.jsx)('div', {
                    className: I.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, focused: i, id: s } = this.props;
        return (0, r.jsx)(L, {
            id: s,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            focused: i,
            children: this.renderContent()
        });
    }
}
class k extends s.Component {
    render() {
        return (0, r.jsx)('div', {
            className: I.__invalid_resultDefault,
            children: (0, r.jsx)('div', {
                className: I.contentDefault,
                children: (0, r.jsx)('div', {
                    className: I.header,
                    children: this.props.children
                })
            })
        });
    }
}
class H extends s.Component {
    renderContent() {
        let e, n;
        let { link: t, children: i } = this.props,
            s = (0, C.Qj)(t.path);
        return (
            null == s || void 0 === s.messageId
                ? ((e = m.intl.string(m.t.qbSCqq)),
                  (n = (0, r.jsx)(l.xPt, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, C.VO)(s)
                  ? ((e = m.intl.string(m.t['6Fd/j4'])),
                    (n = (0, r.jsx)(l.acy, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = m.intl.string(m.t.jQRwp6)),
                    (n = (0, r.jsx)(l.mBM, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, r.jsxs)('div', {
                className: I.contentDefault,
                children: [
                    (0, r.jsx)('div', {
                        className: I.iconContainer,
                        children: n
                    }),
                    e,
                    (0, r.jsx)('div', {
                        className: I.misc,
                        children: i
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: i, focused: s, score: l, id: o } = this.props;
        return (0, r.jsx)(L, {
            id: o,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class Z extends s.Component {
    renderContent() {
        let e, n;
        let { navigationRecord: t, children: i } = this.props;
        switch (t.type) {
            case o.Ky.SHOP:
                (e = m.intl.string(m.t.pWG4zc)),
                    (n = (0, r.jsx)(l.EOn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.NITRO_HOME:
                (e = m.intl.string(m.t.Ipxkoq)),
                    (n = (0, r.jsx)(l.SrA, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.QUEST_HOME:
                (e = m.intl.string(m.t.JALI2N)),
                    (n = (0, r.jsx)(l.qDn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.APPS_HOME:
                (e = m.intl.string(m.t.PHjkRE)),
                    (n = (0, r.jsx)(l.jje, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = t.id),
                    (n = (0, r.jsx)(l.xPt, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, r.jsxs)('div', {
            className: I.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: I.iconContainer,
                    children: n
                }),
                e,
                (0, r.jsx)('div', {
                    className: I.misc,
                    children: i
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: n, onFocus: t, onContextMenu: i, focused: s, score: l, id: o } = this.props;
        return (0, r.jsx)(L, {
            id: o,
            onMouseEnter: e,
            onClick: n,
            onFocus: t,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
