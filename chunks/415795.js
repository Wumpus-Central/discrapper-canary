n.d(t, {
    $W: () => T,
    Mx: () => A,
    PZ: () => I,
    h4: () => P,
    ic: () => v,
    n5: () => y,
    rU: () => R,
    s8: () => D
}),
    n(47120),
    n(301563);
var r,
    i = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(456100),
    o = n(815372),
    c = n(43267),
    d = n(933557),
    u = n(471445),
    m = n(16206),
    g = n(790145),
    p = n(925329),
    h = n(565138),
    f = n(754688),
    b = n(237583),
    N = n(430824),
    x = n(699516),
    _ = n(594174),
    E = n(51144),
    j = n(388032),
    O = n(212522);
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
class S extends s.PureComponent {
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
            className: O.result,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: r,
            children: [
                t,
                null != n
                    ? (0, i.jsx)('div', {
                          className: O.score,
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
            className: O.guildIconContainer,
            children: (0, i.jsx)(h.Z, {
                tabIndex: -1,
                guild: e,
                size: h.Z.Sizes.MINI,
                className: O.guildIcon
            })
        });
    }
    renderName() {
        let { guild: e } = this.props;
        return (0, i.jsx)('div', {
            className: O.name,
            children: (0, i.jsx)('span', {
                className: O.match,
                children: e.name
            })
        });
    }
    renderContent() {
        let { unread: e, children: t } = this.props;
        return (0, i.jsxs)('div', {
            className: e ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: O.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { guild: e } = this.props;
        return j.NW.formatToPlainString(j.t.WVq3Li, { name: e.name });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(S, {
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
class T extends (r = s.Component) {
    renderIcon() {
        var e;
        let { channel: t } = this.props,
            n = (0, u.KS)(t);
        if (null == n) return null;
        let r = null != (e = (0, m.Z)(t)) ? e : '';
        return (0, i.jsx)('div', {
            className: O.iconContainer,
            role: 'img',
            'aria-label': r,
            children: (0, i.jsx)(n, {
                className: O.icon,
                size: 'xs',
                color: 'currentColor'
            })
        });
    }
    renderName() {
        let e,
            t,
            { mentions: n, category: r, channel: s, isMentionLowImportance: a } = this.props;
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(g.Z, {
                    className: O.badge,
                    value: n,
                    lowImportance: a
                })),
            null != r &&
                (t = (0, i.jsx)('span', {
                    className: O.note,
                    children: (0, d.F6)(r, _.default, x.Z)
                })),
            (0, i.jsxs)('div', {
                className: O.name,
                children: [
                    (0, i.jsx)('span', {
                        className: O.match,
                        children: (0, d.F6)(s, _.default, x.Z)
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
            : (0, i.jsx)(b.Z, {
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
        return (0, i.jsxs)('div', {
            'aria-hidden': !0,
            className: e || (null != t && t > 0) ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: O.misc,
                    children: n
                })
            ]
        });
    }
    getAccessibilityLabel() {
        var e;
        let { channel: t } = this.props,
            n = null == (e = N.Z.getGuild(this.props.channel.guild_id)) ? void 0 : e.name,
            r = (0, d.F6)(t, _.default, x.Z),
            i = (0, m.Z)(t);
        return j.NW.formatToPlainString(j.t['Vw/da2'], {
            name: r,
            type: i,
            guild: n
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(S, {
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
C(T, 'defaultProps', { unread: !1 });
class I extends s.Component {
    renderIcon() {
        let { channel: e } = this.props;
        return (0, i.jsx)('div', {
            className: O.dmIconContainer,
            children: (0, i.jsx)(a.qEK, {
                src: (0, c.x)(e),
                size: a.EFr.SIZE_20,
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
                (e = (0, i.jsx)(g.Z, {
                    className: O.badge,
                    value: t
                })),
            (0, i.jsxs)('div', {
                className: O.name,
                children: [
                    (0, i.jsx)('span', {
                        className: O.match,
                        children: (0, d.F6)(n, _.default, x.Z)
                    }),
                    e
                ]
            })
        );
    }
    renderContent() {
        let { mentions: e, children: t } = this.props;
        return (0, i.jsxs)('div', {
            className: null != e && e > 0 ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: O.misc,
                    children: t
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { channel: e, mentions: t } = this.props,
            n = (0, d.F6)(e, _.default, x.Z);
        return null != t && t > 0
            ? j.NW.formatToPlainString(j.t.LYdVfH, {
                  name: n,
                  mentions: t
              })
            : j.NW.formatToPlainString(j.t.lLSbnp, { name: n });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(S, {
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
    renderIcon() {
        let { user: e } = this.props;
        return (0, i.jsx)('div', {
            className: O.iconContainer,
            children: (0, i.jsx)(a.qEK, {
                src: e.getAvatarURL(void 0, 20),
                'aria-hidden': !0,
                size: a.EFr.SIZE_20
            })
        });
    }
    getDisplayNickname() {
        let e,
            { user: t, comparator: n } = this.props,
            r = x.Z.getNickname(t.id);
        return ((e = n === t.tag || null == n || '' === n ? t.username : n) === t.username || e === t.id) && (e = null != r ? r : E.ZP.getName(t)), e;
    }
    renderName() {
        let e,
            { user: t, mentions: n } = this.props,
            r = this.getDisplayNickname();
        return (
            null != n &&
                n > 0 &&
                (e = (0, i.jsx)(g.Z, {
                    className: O.badge,
                    value: n
                })),
            (0, i.jsxs)('div', {
                className: O.name,
                children: [
                    (0, i.jsx)('span', {
                        className: O.match,
                        children: r
                    }),
                    e,
                    (0, i.jsx)('span', {
                        className: O.username,
                        children: E.ZP.getUserTag(t)
                    })
                ]
            })
        );
    }
    renderContent() {
        let { children: e, mentions: t } = this.props;
        return (0, i.jsxs)('div', {
            className: null != t && t > 0 ? O.contentUnread : O.contentDefault,
            children: [
                this.renderIcon(),
                this.renderName(),
                (0, i.jsx)('div', {
                    className: O.misc,
                    children: e
                })
            ]
        });
    }
    getAccessibilityLabel() {
        let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            r = E.ZP.getUserTag(t);
        return null != e && e > 0
            ? j.NW.formatToPlainString(j.t['6b9Ura'], {
                  name: n,
                  id: r,
                  mentions: e
              })
            : j.NW.formatToPlainString(j.t.GWYOAQ, {
                  name: n,
                  id: r
              });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(S, {
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
class A extends s.Component {
    renderContent() {
        let { children: e, application: t } = this.props;
        return (0, i.jsxs)('div', {
            className: O.contentDefault,
            children: [
                (0, i.jsx)('div', {
                    className: O.iconContainer,
                    children: (0, i.jsx)(p.Z, {
                        tabIndex: -1,
                        className: O.gameIcon,
                        game: t,
                        size: O.gameIconSize
                    })
                }),
                t.name,
                (0, i.jsx)('div', {
                    className: O.misc,
                    children: e
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, focused: r, id: s } = this.props;
        return (0, i.jsx)(S, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: r,
            children: this.renderContent()
        });
    }
}
class P extends s.Component {
    render() {
        return (0, i.jsx)('div', {
            className: O.__invalid_resultDefault,
            children: (0, i.jsx)('div', {
                className: O.contentDefault,
                children: (0, i.jsx)('div', {
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
            { link: n, children: r } = this.props,
            s = (0, f.Qj)(n.path);
        return (
            null == s || void 0 === s.messageId
                ? ((e = j.NW.string(j.t.qbSCqq)),
                  (t = (0, i.jsx)(a.xPt, {
                      size: 'xs',
                      color: 'currentColor'
                  })))
                : (0, f.VO)(s)
                  ? ((e = j.NW.string(j.t['6Fd/j4'])),
                    (t = (0, i.jsx)(a.acy, {
                        size: 'xs',
                        color: 'currentColor'
                    })))
                  : ((e = j.NW.string(j.t.jQRwp6)),
                    (t = (0, i.jsx)(a.mBM, {
                        size: 'xs',
                        color: 'currentColor'
                    }))),
            (0, i.jsxs)('div', {
                className: O.contentDefault,
                children: [
                    (0, i.jsx)('div', {
                        className: O.iconContainer,
                        children: t
                    }),
                    e,
                    (0, i.jsx)('div', {
                        className: O.misc,
                        children: r
                    })
                ]
            })
        );
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(S, {
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
class D extends s.Component {
    renderContent() {
        let e,
            t,
            { navigationRecord: n, children: r } = this.props,
            { enabled: s } = l.c.getCurrentConfig({ location: 'QuickSwitcherResults' }, { autoTrackExposure: !0 }),
            c = s ? a.iWm : a.jje;
        switch (n.type) {
            case o.Ky.SHOP:
                (e = j.NW.string(j.t.pWG4zc)),
                    (t = (0, i.jsx)(a.EOn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.NITRO_HOME:
                (e = j.NW.string(j.t.Ipxkoq)),
                    (t = (0, i.jsx)(a.SrA, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.QUEST_HOME:
                (e = j.NW.string(j.t.JALI2N)),
                    (t = (0, i.jsx)(a.qDn, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.APPS_HOME:
                (e = j.NW.string(j.t.PHjkRE)),
                    (t = (0, i.jsx)(c, {
                        size: 'xs',
                        color: 'currentColor'
                    }));
                break;
            case o.Ky.SETTINGS:
                var d;
                (e = null != (d = n.label) ? d : j.NW.string(j.t['3D5yo6'])),
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
            className: O.contentDefault,
            children: [
                (0, i.jsx)('div', {
                    className: O.iconContainer,
                    children: t
                }),
                (0, i.jsx)('div', {
                    className: O.name,
                    children: e
                }),
                (0, i.jsx)('div', {
                    className: O.misc,
                    children: r
                })
            ]
        });
    }
    render() {
        let { onMouseEnter: e, onClick: t, onFocus: n, onContextMenu: r, focused: s, score: a, id: l } = this.props;
        return (0, i.jsx)(S, {
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
