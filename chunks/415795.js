n.d(t, {
    $W: () => I,
    Mx: () => A,
    PZ: () => N,
    h4: () => P,
    ic: () => T,
    n5: () => y,
    rU: () => R,
    s8: () => D
}),
    n(388685),
    n(35282);
var i,
    r = n(200651),
    s = n(192379),
    l = n(481060),
    a = n(456100),
    o = n(815372),
    c = n(43267),
    d = n(933557),
    u = n(471445),
    m = n(16206),
    p = n(790145),
    g = n(925329),
    h = n(565138),
    f = n(754688),
    b = n(237583),
    _ = n(430824),
    x = n(699516),
    E = n(594174),
    C = n(51144),
    j = n(388032),
    O = n(212522);
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
class v extends s.PureComponent {
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
        let { focused: e, children: t, score: n, onContextMenu: i, id: s, 'aria-label': a } = this.props;
        return (0, r.jsxs)(l.P3F, {
            role: 'option',
            id: s,
            'aria-label': a,
            'aria-selected': e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: O.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: i,
            children: [
                t,
                null != n
                    ? (0, r.jsx)('div', {
                          className: O.score,
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
class T extends s.Component {
    renderIcon() {
        let { guild: e } = this.props;
        return (0, r.jsx)('div', {
            className: O.guildIconContainer,
            children: (0, r.jsx)(h.Z, {
                tabIndex: -1,
                guild: e,
                size: h.Z.Sizes.MINI,
                className: O.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, r.jsx)('div', {
            className: O.name,
            children: (0, r.jsx)('span', {
                className: O.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, r.jsxs)('div', {
            className: e ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: O.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return j.intl.formatToPlainString(j.t.WVq3Li, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: s, score: l, id: a } = this.props;
        return (0, r.jsx)(v, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class I extends (i = s.Component) {
    renderIcon() {
        var e;
        let { channel: t } = this.props,
            n = (0, u.KS)(t);
        if (null == n) return null;
        let i = null != (e = (0, m.Z)(t)) ? e : '';
        return (0, r.jsx)('div', {
            className: O.iconContainer,
            role: 'img',
            'aria-label': i,
            children: (0, r.jsx)(n, {
                className: O.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: i, channel: s, isMentionLowImportance: l } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, r.jsx)(p.Z, {
                    className: O.badge,
                    value: n,
                    lowImportance: l
                })),
            null != i &&
                (t = (0, r.jsx)('span', {
                    className: O.note,
                    children: (0, d.F6)(i, E.default, x.Z)
                })),
            (0, r.jsxs)('div', {
                className: O.name,
                children: [
                    (0, r.jsx)('span', {
                        className: O.match,
                        children: (0, d.F6)(s, E.default, x.Z)
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
            : (0, r.jsx)(b.Z, {
                  className: O.voiceSummaryContainer,
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
        return (0, r.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != t && t > 0) ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: O.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null == (e = _.Z.getGuild(this.props.channel.guild_id)) ? void 0 : e.name,
            i = (0, d.F6)(t, E.default, x.Z),
            r = (0, m.Z)(t);
        return j.intl.formatToPlainString(j.t['Vw/da2'], {
            name: i,
            type: r,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: s, score: l, id: a } = this.props;
        return (0, r.jsx)(v, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
S(I, 'defaultProps', { unread: !1 });
class N extends s.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, r.jsx)('div', {
            className: O.dmIconContainer,
            children: (0, r.jsx)(l.qEK, {
                src: (0, c.x)(e),
                size: l.EFr.SIZE_20,
                'aria-hidden': !0
            })
        });
    }
    renderName() {
        let e,
            { mentions: t, channel: n } = this.props;
        return (
            null != t &&
                t > 0 &&
                (e = (0, r.jsx)(p.Z, {
                    className: O.badge,
                    value: t
                })),
            (0, r.jsxs)('div', {
                className: O.name,
                children: [
                    (0, r.jsx)('span', {
                        className: O.match,
                        children: (0, d.F6)(n, E.default, x.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, r.jsxs)('div', {
            className: null != e && e > 0 ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: O.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, d.F6)(e, E.default, x.Z);
        return null != t && t > 0
            ? j.intl.formatToPlainString(j.t.LYdVfH, {
                  name: n,
                  mentions: t
              })
            : j.intl.formatToPlainString(j.t.lLSbnp, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: s, score: l, id: a } = this.props;
        return (0, r.jsx)(v, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class y extends s.Component {
    renderIcon() {
        let { user: e } = this.props;
        return (0, r.jsx)('div', {
            className: O.iconContainer,
            children: (0, r.jsx)(l.qEK, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: l.EFr.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            i = x.Z.getNickname(t.id);
        return ((e = n === t.tag || null == n || '' === n ? t.username : n) === t.username || e === t.id) && (e = null != i ? i : C.ZP.getName(t)), e;
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            i = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, r.jsx)(p.Z, {
                    className: O.badge,
                    value: n
                })),
            (0, r.jsxs)('div', {
                className: O.name,
                children: [
                    (0, r.jsx)('span', {
                        className: O.match,
                        children: i
                    }),
                    e,
                    (0, r.jsx)('span', {
                        className: O.username,
                        children: C.ZP.getUserTag(t)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, r.jsxs)('div', {
            className: null != t && t > 0 ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, r.jsx)('div', {
                    className: O.misc,
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
            ? j.intl.formatToPlainString(j.t['6b9Ura'], {
                  name: n,
                  id: i,
                  mentions: e
              })
            : j.intl.formatToPlainString(j.t.GWYOAQ, {
                  name: n,
                  id: i
              });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: s, score: l, id: a } = this.props;
        return (0, r.jsx)(v, {
            id: a,
            'aria-label': this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class A extends s.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, r.jsxs)('div', {
            className: O.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: O.iconContainer,
                    children: (0, r.jsx)(g.Z, {
                        tabIndex: -1,
                        className: O.gameIcon,
                        game: t,
                        size: O.gameIconSize
                    })
                }),
                t.name,
                (0, r.jsx)('div', {
                    className: O.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: i, id: s } = this.props;
        return (0, r.jsx)(v, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: i,
            children: this.renderContent()
        });
    }
}
class P extends s.Component {
    render() {
        return (0, r.jsx)('div', {
            className: O.__invalid_resultDefault,
            children: (0, r.jsx)('div', {
                className: O.contentDefault,
                children: (0, r.jsx)('div', {
                    className: O.header,
                    children: this.props.children
                })
            })
        });
    }
}
class R extends s.Component {
    renderContent() {
        let e,
            t,
            { link: n, children: i } = this.props,
            s = (0, f.Qj)(n.path);
        return (
            null == s || void 0 === s.messageId
                ? ((e = j.intl.string(j.t.qbSCqq)),
                  (t = (0, r.jsx)(l.xPt, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, f.VO)(s)
                  ? ((e = j.intl.string(j.t['6Fd/j4'])),
                    (t = (0, r.jsx)(l.acy, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = j.intl.string(j.t.jQRwp6)),
                    (t = (0, r.jsx)(l.mBM, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, r.jsxs)('div', {
                className: O.contentDefault,
                children: [
                    (0, r.jsx)('div', {
                        className: O.iconContainer,
                        children: t
                    }),
                    e,
                    (0, r.jsx)('div', {
                        className: O.misc,
                        children: i
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: s, score: l, id: a } = this.props;
        return (0, r.jsx)(v, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
class D extends s.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: i } = this.props,
            { enabled: s } = a.c.getCurrentConfig({ location: 'QuickSwitcherResults' }, { autoTrackExposure: !0 }),
            c = s ? l.iWm : l.jje;
        switch (n.type) {
            case o.Ky.SHOP:
                (e = j.intl.string(j.t.pWG4zc)),
                    (t = (0, r.jsx)(l.EOn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.NITRO_HOME:
                (e = j.intl.string(j.t.Ipxkoq)),
                    (t = (0, r.jsx)(l.SrA, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.QUEST_HOME:
                (e = j.intl.string(j.t.JALI2N)),
                    (t = (0, r.jsx)(l.qDn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.APPS_HOME:
                (e = j.intl.string(j.t.PHjkRE)),
                    (t = (0, r.jsx)(c, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.SETTINGS:
                var d;
                (e = null != (d = n.label) ? d : j.intl.string(j.t['3D5yo6'])),
                    (t = (0, r.jsx)(l.ewm, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            default:
                (e = n.id),
                    (t = (0, r.jsx)(l.xPt, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
        }
        return (0, r.jsxs)('div', {
            className: O.contentDefault,
            children: [
                (0, r.jsx)('div', {
                    className: O.iconContainer,
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: O.name,
                    children: e
                }),
                (0, r.jsx)('div', {
                    className: O.misc,
                    children: i
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: i, focused: s, score: l, id: a } = this.props;
        return (0, r.jsx)(v, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: i,
            focused: s,
            score: l,
            children: this.renderContent()
        });
    }
}
