n.d(t, { default: () => Y }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    r = n.n(l),
    a = n(913527),
    o = n.n(a),
    d = n(374470),
    c = n(442837),
    u = n(692547),
    h = n(481060),
    g = n(87051),
    m = n(798140),
    x = n(740504),
    N = n(933557),
    p = n(471445),
    v = n(600164),
    j = n(423589),
    S = n(74888),
    f = n(444899),
    b = n(11352),
    C = n(610617),
    O = n(777861),
    E = n(131704),
    Z = n(592125),
    _ = n(324067),
    T = n(650774),
    L = n(430824),
    W = n(699516),
    y = n(9156),
    M = n(594174),
    I = n(823379),
    P = n(63063),
    A = n(621600),
    R = n(981631),
    w = n(969943),
    G = n(388032),
    D = n(529651);
function U(e, t, n) {
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
function k(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function V(e, t) {
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
class B extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { overrides: n, channelOverridesProp: i } = t;
        return e.channelOverrides !== i
            ? ((n = new Set(n)),
              (0, j.OD)(e.channelOverrides).forEach((e) => n.add(e)),
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
            let e = i.contentDomRef.current;
            if (null != this._scroller && (0, d.k)(e, HTMLElement)) {
                var s;
                null == (s = this._scroller) ||
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
            (e = new Set(e)), (0, j.OD)(this.props.channelOverrides).forEach((t) => e.add(t)), this.setState({ overrides: e });
        }
    }
    handleCheckboxChange(e, t, n) {
        g.Z.updateGuildNotificationSettings(this.props.guildId, { [e]: t }, n);
    }
    handleRadioChange(e, t, n) {
        let { value: i } = t;
        g.Z.updateGuildNotificationSettings(this.props.guildId, { [e]: i }, n);
    }
    renderHeader() {
        let { guild: e } = this.props;
        return null == e
            ? null
            : (0, i.jsxs)(h.xBx, {
                  className: D.modalHeader,
                  children: [
                      (0, i.jsxs)(v.Z.Child, {
                          children: [
                              (0, i.jsx)(h.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: G.NW.string(G.t.h850Sk)
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  className: D.guildName,
                                  children: e.name
                              })
                          ]
                      }),
                      (0, i.jsx)(v.Z.Child, {
                          grow: 0,
                          children: (0, i.jsx)(h.olH, { onClick: this.props.onClose })
                      })
                  ]
              });
    }
    renderFooter() {
        return (0, i.jsx)(h.mzw, {
            children: (0, i.jsx)(h.zxk, {
                onClick: this.props.onClose,
                children: G.NW.string(G.t.i4jeWV)
            })
        });
    }
    renderMute() {
        var e;
        let { muted: t, muteConfig: n, guild: s } = this.props,
            l = null != (e = null == n ? void 0 : n.selected_time_window) ? e : w.Oe.ALWAYS;
        return null == s
            ? null
            : (0, i.jsxs)(h.xJW, {
                  className: D.largeSpacing,
                  children: [
                      (0, i.jsx)(h.j7V, {
                          hideBorder: !0,
                          value: t,
                          onChange: (e) => this.handleCheckboxChange('muted', e, A.UE.muted(e)),
                          note: G.NW.string(G.t['8wbTQ0']),
                          children: G.NW.format(G.t['J+7D9P'], { name: s.name })
                      }),
                      t
                          ? (0, i.jsxs)(v.Z, {
                                className: D.spacing,
                                align: v.Z.Align.CENTER,
                                children: [
                                    (0, i.jsxs)(v.Z, {
                                        direction: v.Z.Direction.VERTICAL,
                                        className: D.__invalid_muteUntilTextWrapper,
                                        children: [
                                            (0, i.jsx)(h.vwX, {
                                                tag: 'h3',
                                                className: D.muteUntilTitle,
                                                children: G.NW.string(G.t.Ztu2Ym)
                                            }),
                                            (0, i.jsx)(O.Z, {
                                                className: D.muteUntilText,
                                                muteConfig: n
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(h.q4e, {
                                        className: D.muteTimeSelector,
                                        options: (0, j.W9)(),
                                        value: l,
                                        onChange: this.handleSelectMuteTime
                                    })
                                ]
                            })
                          : null,
                      (0, i.jsx)(h.$i$, {})
                  ]
              });
    }
    renderServerSettings() {
        let { messageNotifications: e, muted: t, memberCount: n } = this.props;
        return (0, i.jsxs)('div', {
            className: D.spacing,
            children: [
                (0, i.jsx)(h.xJW, {
                    title: G.NW.string(G.t.lprV7e),
                    className: D.largeSpacing,
                    children: (0, i.jsx)(h.FXm, {
                        disabled: t,
                        value: e,
                        onChange: (e) => this.handleRadioChange('message_notifications', e, A.UE.notifications(e.value)),
                        options: [
                            {
                                name: G.NW.string(G.t['n/bTaW']),
                                value: R.bL.ALL_MESSAGES,
                                desc: null != n && n >= R.qWG ? G.NW.string(G.t.Dh5p5u) : null
                            },
                            {
                                name: G.NW.format(G.t.L2hmY2, {}),
                                value: R.bL.ONLY_MENTIONS
                            },
                            {
                                name: G.NW.string(G.t.CtVGyc),
                                value: R.bL.NO_MESSAGES
                            }
                        ]
                    })
                }),
                (0, i.jsx)(h.$i$, {})
            ]
        });
    }
    renderNotificationOptions() {
        let { suppressEveryone: e, suppressRoles: t, mobilePush: n, muted: s, muteEvents: l, notifyHighlights: r, guildId: a } = this.props;
        return (0, i.jsxs)(h.xJW, {
            className: D.largeSpacing,
            children: [
                (0, i.jsx)(h.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_everyone', e, A.UE.suppressEveryone(e)),
                    value: e,
                    children: G.NW.format(G.t.OWiWAg, {})
                }),
                (0, i.jsx)(h.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_roles', e, A.UE.suppressRoles(e)),
                    value: t,
                    children: G.NW.string(G.t['O/QdoK'])
                }),
                (0, i.jsx)(h.j7V, {
                    onChange: (e) => {
                        g.Z.updateGuildNotificationSettings(a, { notify_highlights: e ? R.gLR.DISABLED : R.gLR.ENABLED }, A.UE.highlights(!e));
                    },
                    value: s || r === R.gLR.DISABLED,
                    disabled: s,
                    note: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-sm/normal',
                                children: G.NW.string(G.t['Vw/Xn5'])
                            }),
                            (0, i.jsx)('div', {
                                className: D.highlightsLink,
                                children: (0, i.jsx)(h.eee, {
                                    href: P.Z.getArticleURL(R.BhN.HIGHLIGHTS),
                                    children: G.NW.string(G.t.PRBn9P)
                                })
                            })
                        ]
                    }),
                    children: (0, i.jsx)(i.Fragment, { children: G.NW.string(G.t.gPuteH) })
                }),
                (0, i.jsx)(h.j7V, {
                    value: l,
                    onChange: (e) => this.handleCheckboxChange('mute_scheduled_events', e, A.UE.mutedEvents(e)),
                    children: G.NW.string(G.t.ONG3Y2)
                }),
                (0, i.jsx)(h.j7V, {
                    value: !s && n,
                    disabled: s,
                    onChange: (e) => this.handleCheckboxChange('mobile_push', e, A.UE.mobilePush(e)),
                    children: G.NW.string(G.t['h1DL6+'])
                })
            ]
        });
    }
    renderCustomNotificationSoundOptions() {
        let { shouldShowCustomNotificationSounds: e, guildId: t, onClose: n } = this.props;
        if (e)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(C.Z, {
                        guildId: t,
                        onClose: n
                    }),
                    (0, i.jsx)(h.$i$, { className: D.customNotificationSoundsDivider })
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
                        label: (0, N.F6)(t, M.default, W.Z)
                    };
                })
                .value();
        return (0, i.jsxs)(h.xJW, {
            title: G.NW.string(G.t.O4TIvr),
            className: D.largeSpacing,
            children: [
                (0, i.jsx)(h.R94, {
                    type: h.R94.Types.DESCRIPTION,
                    className: D.smallSpacing,
                    children: G.NW.string(G.t['2Y9ZfH'])
                }),
                (0, i.jsx)(h.VcW, {
                    value: R.lds,
                    placeholder: G.NW.string(G.t['Z+oF8v']),
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
                        f.f,
                        {
                            ref: (e) => {
                                this._channelRefs[o.id] = e;
                            },
                            channel: o,
                            guildMuted: t,
                            muted: null != d && (0, m.m$)(d),
                            messageNotifications: null != d ? d.message_notifications : null,
                            guildMessageNotifications: s,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: r
                        },
                        o.id
                    );
                })
                .filter(I.lm);
        return (
            (0 === a.size || 0 === o.length) &&
                o.push(
                    (0, i.jsx)(
                        'div',
                        {
                            className: D.overridePlaceholder,
                            children: (0, i.jsx)(h.Text, {
                                className: D.overrideHeader,
                                variant: 'text-sm/semibold',
                                children: G.NW.string(G.t['2Y9ZfH'])
                            })
                        },
                        'placeholder'
                    )
                ),
            (0, i.jsxs)('div', {
                className: D.overrideList,
                children: [
                    (0, i.jsxs)(v.Z, {
                        children: [
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: D.headerName,
                                children: G.NW.string(G.t.uShwWl)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: G.NW.string(G.t.e29Z19)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: G.NW.string(G.t.DD6gNT)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: G.NW.string(G.t.CtVGyc)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: D.headerOption,
                                children: (0, i.jsx)(h.ua7, {
                                    text: G.NW.string(G.t['8wbTQ0']),
                                    position: 'bottom',
                                    children: (e) => (0, i.jsx)('span', X(k({}, e), { children: G.NW.string(G.t.sWmtIy) }))
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
        return (0, i.jsxs)(h.Y0X, {
            'aria-label': G.NW.string(G.t.h850Sk),
            size: h.CgR.MEDIUM,
            transitionState: this.props.transitionState,
            children: [
                this.renderHeader(),
                (0, i.jsxs)(h.hzk, {
                    scrollerRef: this.setScrollerRef,
                    children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            U(this, '_scroller', null),
            U(this, '_channelRefs', {}),
            U(this, 'state', {
                overrides: new Set((0, j.OD)(this.props.channelOverrides)),
                channelOverridesProp: this.props.channelOverrides,
                lastSelected: null
            }),
            U(this, 'setScrollerRef', (e) => {
                this._scroller = e;
            }),
            U(this, 'handleSelectChange', (e) => {
                if (null == e) return;
                let { overrides: t } = this.state;
                (t = new Set(t)).add(e),
                    this.setState({
                        overrides: t,
                        lastSelected: e
                    });
            }),
            U(this, 'handleSelectMuteTime', (e) => {
                let t = e > 0 ? o()().add(e, 'second').toISOString() : null;
                g.Z.updateGuildNotificationSettings(
                    this.props.guildId,
                    {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    },
                    A.ZB.Muted
                );
            }),
            U(this, 'handleDeleteOverride', (e) => {
                let { overrides: t } = this.state;
                (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            U(this, 'renderOptionLabel', (e) => {
                let t = Z.Z.getChannel(e.value);
                if (null == t) return e.label;
                let n = Z.Z.getChannel(t.parent_id),
                    s = null != n ? n.name : null;
                return (0, i.jsx)(h.ZZ$, {
                    icon: (0, p.KS)(t),
                    title: e.label,
                    subtitle: s
                });
            });
    }
}
function J(e) {
    var { guildId: t } = e,
        n = V(e, ['guildId']);
    let s = (0, c.cj)([_.Z, L.Z, T.Z, y.ZP], () => {
            let e = _.Z.getCategories(t);
            return {
                guildId: t,
                categories: e,
                guild: L.Z.getGuild(t),
                memberCount: T.Z.getMemberCount(t),
                suppressEveryone: y.ZP.isSuppressEveryoneEnabled(t),
                suppressRoles: y.ZP.isSuppressRolesEnabled(t),
                muteEvents: y.ZP.isMuteScheduledEventsEnabled(t),
                mobilePush: y.ZP.isMobilePushEnabled(t),
                muted: y.ZP.isMuted(t),
                muteConfig: y.ZP.getMuteConfig(t),
                messageNotifications: y.ZP.getMessageNotifications(t),
                channelOverrides: y.ZP.getChannelOverrides(t),
                notifyHighlights: y.ZP.getNotifyHighlights(t)
            };
        }),
        l = (0, x.Z)(s.categories._categories, s.categories, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, E.r8)(t) || t === R.d4z.GUILD_CATEGORY;
        }),
        r = b.Y.useExperiment({ location: 'connected_notification_settings' }, { autoTrackExposure: !0 }).enabled,
        a = (0, h.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex();
    return (0, i.jsx)(
        B,
        X(k(X(k({}, s), { channels: l }), n), {
            shouldShowCustomNotificationSounds: r,
            checkboxColor: a
        })
    );
}
function Y(e) {
    var { scrollToChannels: t } = e,
        n = V(e, ['scrollToChannels']);
    return (0, j.Mn)('NotificationSettingsModal') ? (0, i.jsx)(S.Z, X(k({}, n), { scrollToChannels: t })) : (0, i.jsx)(J, k({}, n));
}
