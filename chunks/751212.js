n.d(t, { default: () => z }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(913527),
    o = n.n(a),
    d = n(995295),
    c = n(374470),
    u = n(442837),
    h = n(692547),
    g = n(481060),
    m = n(87051),
    x = n(798140),
    N = n(740504),
    p = n(933557),
    v = n(471445),
    j = n(600164),
    S = n(423589),
    f = n(74888),
    b = n(444899),
    C = n(11352),
    O = n(610617),
    E = n(777861),
    Z = n(131704),
    _ = n(592125),
    T = n(324067),
    L = n(650774),
    W = n(430824),
    y = n(699516),
    M = n(9156),
    I = n(594174),
    P = n(823379),
    A = n(63063),
    w = n(621600),
    R = n(981631),
    G = n(969943),
    U = n(388032),
    D = n(341012);
function k(e, t, n) {
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
function X(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        i,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                s = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (s[n] = e[n]);
            return s;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    }
    return s;
}
class J extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { overrides: n, channelOverridesProp: i } = t;
        return e.channelOverrides !== i
            ? ((n = new Set(n)),
              (0, S.OD)(e.channelOverrides).forEach((e) => n.add(e)),
              {
                  overrides: n,
                  channelOverridesProp: e.channelOverrides
              })
            : null;
    }
    componentDidUpdate(e, t) {
        let { lastSelected: n } = this.state,
            i = null != n ? this._channelRefs[n] : null;
        if (null != this._scroller && null != i && n !== t.lastSelected) {
            let e = (0, d.findDOMNode)(i);
            if (null != this._scroller && (0, c.k)(e, HTMLElement)) {
                var s;
                null === (s = this._scroller) ||
                    void 0 === s ||
                    s.scrollIntoViewNode({
                        node: e,
                        animate: !0,
                        padding: 20,
                        callback: () => this.setState({ lastSelected: null })
                    }),
                    i.highlight();
            }
        }
        if (this.props.channelOverrides !== e.channelOverrides) {
            let { overrides: e } = this.state;
            (e = new Set(e)), (0, S.OD)(this.props.channelOverrides).forEach((t) => e.add(t)), this.setState({ overrides: e });
        }
    }
    handleCheckboxChange(e, t, n) {
        m.Z.updateGuildNotificationSettings(this.props.guildId, { [e]: t }, n);
    }
    handleRadioChange(e, t, n) {
        let { value: i } = t;
        m.Z.updateGuildNotificationSettings(this.props.guildId, { [e]: i }, n);
    }
    renderHeader() {
        let { guild: e } = this.props;
        return null == e
            ? null
            : (0, i.jsxs)(g.xBx, {
                  className: D.modalHeader,
                  children: [
                      (0, i.jsxs)(j.Z.Child, {
                          children: [
                              (0, i.jsx)(g.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: U.NW.string(U.t.h850Sk)
                              }),
                              (0, i.jsx)(g.Text, {
                                  variant: 'text-md/normal',
                                  className: D.guildName,
                                  children: e.name
                              })
                          ]
                      }),
                      (0, i.jsx)(j.Z.Child, {
                          grow: 0,
                          children: (0, i.jsx)(g.olH, { onClick: this.props.onClose })
                      })
                  ]
              });
    }
    renderFooter() {
        return (0, i.jsx)(g.mzw, {
            children: (0, i.jsx)(g.zxk, {
                onClick: this.props.onClose,
                children: U.NW.string(U.t.i4jeWV)
            })
        });
    }
    renderMute() {
        var e;
        let { muted: t, muteConfig: n, guild: s } = this.props,
            l = null !== (e = null == n ? void 0 : n.selected_time_window) && void 0 !== e ? e : G.Oe.ALWAYS;
        return null == s
            ? null
            : (0, i.jsxs)(g.xJW, {
                  className: D.largeSpacing,
                  children: [
                      (0, i.jsx)(g.j7V, {
                          hideBorder: !0,
                          value: t,
                          onChange: (e) => this.handleCheckboxChange('muted', e, w.UE.muted(e)),
                          note: U.NW.string(U.t['8wbTQ0']),
                          children: U.NW.format(U.t['J+7D9P'], { name: s.name })
                      }),
                      t
                          ? (0, i.jsxs)(j.Z, {
                                className: D.spacing,
                                align: j.Z.Align.CENTER,
                                children: [
                                    (0, i.jsxs)(j.Z, {
                                        direction: j.Z.Direction.VERTICAL,
                                        className: D.__invalid_muteUntilTextWrapper,
                                        children: [
                                            (0, i.jsx)(g.vwX, {
                                                tag: 'h3',
                                                className: D.muteUntilTitle,
                                                children: U.NW.string(U.t.Ztu2Ym)
                                            }),
                                            (0, i.jsx)(E.Z, {
                                                className: D.muteUntilText,
                                                muteConfig: n
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(g.q4e, {
                                        className: D.muteTimeSelector,
                                        options: (0, S.W9)(),
                                        value: l,
                                        onChange: this.handleSelectMuteTime
                                    })
                                ]
                            })
                          : null,
                      (0, i.jsx)(g.$i$, {})
                  ]
              });
    }
    renderServerSettings() {
        let { messageNotifications: e, muted: t, memberCount: n } = this.props;
        return (0, i.jsxs)('div', {
            className: D.spacing,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: U.NW.string(U.t.lprV7e),
                    className: D.largeSpacing,
                    children: (0, i.jsx)(g.FXm, {
                        disabled: t,
                        value: e,
                        onChange: (e) => this.handleRadioChange('message_notifications', e, w.UE.notifications(e.value)),
                        options: [
                            {
                                name: U.NW.string(U.t['n/bTaW']),
                                value: R.bL.ALL_MESSAGES,
                                desc: null != n && n >= R.qWG ? U.NW.string(U.t.Dh5p5u) : null
                            },
                            {
                                name: U.NW.format(U.t.L2hmY2, {}),
                                value: R.bL.ONLY_MENTIONS
                            },
                            {
                                name: U.NW.string(U.t.CtVGyc),
                                value: R.bL.NO_MESSAGES
                            }
                        ]
                    })
                }),
                (0, i.jsx)(g.$i$, {})
            ]
        });
    }
    renderNotificationOptions() {
        let { suppressEveryone: e, suppressRoles: t, mobilePush: n, muted: s, muteEvents: l, notifyHighlights: r, guildId: a } = this.props;
        return (0, i.jsxs)(g.xJW, {
            className: D.largeSpacing,
            children: [
                (0, i.jsx)(g.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_everyone', e, w.UE.suppressEveryone(e)),
                    value: e,
                    children: U.NW.format(U.t.OWiWAg, {})
                }),
                (0, i.jsx)(g.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_roles', e, w.UE.suppressRoles(e)),
                    value: t,
                    children: U.NW.string(U.t['O/QdoK'])
                }),
                (0, i.jsx)(g.j7V, {
                    onChange: (e) => {
                        m.Z.updateGuildNotificationSettings(a, { notify_highlights: e ? R.gLR.DISABLED : R.gLR.ENABLED }, w.UE.highlights(!e));
                    },
                    value: s || r === R.gLR.DISABLED,
                    disabled: s,
                    note: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                children: U.NW.string(U.t['Vw/Xn5'])
                            }),
                            (0, i.jsx)('div', {
                                className: D.highlightsLink,
                                children: (0, i.jsx)(g.eee, {
                                    href: A.Z.getArticleURL(R.BhN.HIGHLIGHTS),
                                    children: U.NW.string(U.t.PRBn9P)
                                })
                            })
                        ]
                    }),
                    children: (0, i.jsx)(i.Fragment, { children: U.NW.string(U.t.gPuteH) })
                }),
                (0, i.jsx)(g.j7V, {
                    value: l,
                    onChange: (e) => this.handleCheckboxChange('mute_scheduled_events', e, w.UE.mutedEvents(e)),
                    children: U.NW.string(U.t.ONG3Y2)
                }),
                (0, i.jsx)(g.j7V, {
                    value: !s && n,
                    disabled: s,
                    onChange: (e) => this.handleCheckboxChange('mobile_push', e, w.UE.mobilePush(e)),
                    children: U.NW.string(U.t['h1DL6+'])
                })
            ]
        });
    }
    renderCustomNotificationSoundOptions() {
        let { shouldShowCustomNotificationSounds: e, guildId: t, onClose: n } = this.props;
        if (e)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O.Z, {
                        guildId: t,
                        onClose: n
                    }),
                    (0, i.jsx)(g.$i$, { className: D.customNotificationSoundsDivider })
                ]
            });
    }
    renderOverrideSelect() {
        let { channels: e, categories: t } = this.props,
            n = r()(e)
                .filter((e) => {
                    let { channel: n } = e;
                    return n.type !== R.d4z.GUILD_CATEGORY || (null != t[n.id] && t[n.id].length > 0);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, p.F6)(t, I.default, y.Z)
                    };
                })
                .value();
        return (0, i.jsxs)(g.xJW, {
            title: U.NW.string(U.t.O4TIvr),
            className: D.largeSpacing,
            children: [
                (0, i.jsx)(g.R94, {
                    type: g.R94.Types.DESCRIPTION,
                    className: D.smallSpacing,
                    children: U.NW.string(U.t['2Y9ZfH'])
                }),
                (0, i.jsx)(g.VcW, {
                    value: R.lds,
                    placeholder: U.NW.string(U.t['Z+oF8v']),
                    renderOptionLabel: this.renderOptionLabel,
                    options: n,
                    onChange: this.handleSelectChange
                })
            ]
        });
    }
    renderChannelNotifications() {
        let { channelOverrides: e, muted: t, channels: n, messageNotifications: s, categories: l, checkboxColor: r } = this.props,
            { overrides: a } = this.state,
            o = n
                .map((n) => {
                    let { channel: o } = n;
                    if (!a.has(o.id) || (null != l[o.id] && 0 === l[o.id].length)) return null;
                    let d = e[o.id];
                    return (0, i.jsx)(
                        b.f,
                        {
                            ref: (e) => {
                                this._channelRefs[o.id] = e;
                            },
                            channel: o,
                            guildMuted: t,
                            muted: null != d && (0, x.m$)(d),
                            messageNotifications: null != d ? d.message_notifications : null,
                            guildMessageNotifications: s,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: r
                        },
                        o.id
                    );
                })
                .filter(P.lm);
        return (
            (0 === a.size || 0 === o.length) &&
                o.push(
                    (0, i.jsx)(
                        'div',
                        {
                            className: D.overridePlaceholder,
                            children: (0, i.jsx)(g.Text, {
                                className: D.overrideHeader,
                                variant: 'text-sm/semibold',
                                children: U.NW.string(U.t['2Y9ZfH'])
                            })
                        },
                        'placeholder'
                    )
                ),
            (0, i.jsxs)('div', {
                className: D.overrideList,
                children: [
                    (0, i.jsxs)(j.Z, {
                        children: [
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: D.headerName,
                                children: U.NW.string(U.t.uShwWl)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: U.NW.string(U.t.e29Z19)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: U.NW.string(U.t.DD6gNT)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: U.NW.string(U.t.CtVGyc)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: (0, i.jsx)(g.ua7, {
                                    text: U.NW.string(U.t['8wbTQ0']),
                                    position: 'bottom',
                                    children: (e) => (0, i.jsx)('span', V(X({}, e), { children: U.NW.string(U.t.sWmtIy) }))
                                })
                            })
                        ]
                    }),
                    o
                ]
            })
        );
    }
    render() {
        return (0, i.jsxs)(g.Y0X, {
            'aria-label': U.NW.string(U.t.h850Sk),
            size: g.CgR.MEDIUM,
            transitionState: this.props.transitionState,
            children: [
                this.renderHeader(),
                (0, i.jsxs)(g.hzk, {
                    scrollerRef: this.setScrollerRef,
                    children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, '_scroller', null),
            k(this, '_channelRefs', {}),
            k(this, 'state', {
                overrides: new Set((0, S.OD)(this.props.channelOverrides)),
                channelOverridesProp: this.props.channelOverrides,
                lastSelected: null
            }),
            k(this, 'setScrollerRef', (e) => {
                this._scroller = e;
            }),
            k(this, 'handleSelectChange', (e) => {
                if (null == e) return;
                let { overrides: t } = this.state;
                (t = new Set(t)).add(e),
                    this.setState({
                        overrides: t,
                        lastSelected: e
                    });
            }),
            k(this, 'handleSelectMuteTime', (e) => {
                let t = e > 0 ? o()().add(e, 'second').toISOString() : null;
                m.Z.updateGuildNotificationSettings(
                    this.props.guildId,
                    {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    },
                    w.ZB.Muted
                );
            }),
            k(this, 'handleDeleteOverride', (e) => {
                let { overrides: t } = this.state;
                (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            k(this, 'renderOptionLabel', (e) => {
                let t = _.Z.getChannel(e.value);
                if (null == t) return e.label;
                let n = _.Z.getChannel(t.parent_id),
                    s = null != n ? n.name : null;
                return (0, i.jsx)(g.ZZ$, {
                    icon: (0, v.KS)(t),
                    title: e.label,
                    subtitle: s
                });
            });
    }
}
function Y(e) {
    var { guildId: t } = e,
        n = B(e, ['guildId']);
    let s = (0, u.cj)([T.Z, W.Z, L.Z, M.ZP], () => {
            let e = T.Z.getCategories(t);
            return {
                guildId: t,
                categories: e,
                guild: W.Z.getGuild(t),
                memberCount: L.Z.getMemberCount(t),
                suppressEveryone: M.ZP.isSuppressEveryoneEnabled(t),
                suppressRoles: M.ZP.isSuppressRolesEnabled(t),
                muteEvents: M.ZP.isMuteScheduledEventsEnabled(t),
                mobilePush: M.ZP.isMobilePushEnabled(t),
                muted: M.ZP.isMuted(t),
                muteConfig: M.ZP.getMuteConfig(t),
                messageNotifications: M.ZP.getMessageNotifications(t),
                channelOverrides: M.ZP.getChannelOverrides(t),
                notifyHighlights: M.ZP.getNotifyHighlights(t)
            };
        }),
        l = (0, N.Z)(s.categories._categories, s.categories, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, Z.r8)(t) || t === R.d4z.GUILD_CATEGORY;
        }),
        r = C.Y.useExperiment({ location: 'connected_notification_settings' }, { autoTrackExposure: !0 }).enabled,
        a = (0, g.dQu)(h.Z.unsafe_rawColors.GREEN_360).hex();
    return (0, i.jsx)(
        J,
        V(X(V(X({}, s), { channels: l }), n), {
            shouldShowCustomNotificationSounds: r,
            checkboxColor: a
        })
    );
}
function z(e) {
    var { scrollToChannels: t } = e,
        n = B(e, ['scrollToChannels']);
    return (0, S.Mn)('NotificationSettingsModal') ? (0, i.jsx)(f.Z, V(X({}, n), { scrollToChannels: t })) : (0, i.jsx)(Y, X({}, n));
}
