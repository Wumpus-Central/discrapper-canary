n.d(t, { default: () => Y }), n(388685), n(539854);
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
    p = n(933557),
    v = n(471445),
    j = n(600164),
    S = n(423589),
    N = n(74888),
    f = n(444899),
    b = n(173345),
    C = n(610617),
    O = n(777861),
    E = n(131704),
    Z = n(592125),
    _ = n(324067),
    T = n(650774),
    L = n(430824),
    y = n(699516),
    M = n(9156),
    I = n(594174),
    P = n(823379),
    A = n(63063),
    R = n(621600),
    w = n(981631),
    G = n(969943),
    D = n(388032),
    U = n(529651);
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
function W(e, t) {
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
            (e = new Set(e)), (0, S.OD)(this.props.channelOverrides).forEach((t) => e.add(t)), this.setState({ overrides: e });
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
                  className: U.modalHeader,
                  children: [
                      (0, i.jsxs)(j.Z.Child, {
                          children: [
                              (0, i.jsx)(h.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: D.intl.string(D.t.h850Sk)
                              }),
                              (0, i.jsx)(h.Text, {
                                  variant: 'text-md/normal',
                                  className: U.guildName,
                                  children: e.name
                              })
                          ]
                      }),
                      (0, i.jsx)(j.Z.Child, {
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
                children: D.intl.string(D.t.i4jeWV)
            })
        });
    }
    renderMute() {
        var e;
        let { muted: t, muteConfig: n, guild: s } = this.props,
            l = null != (e = null == n ? void 0 : n.selected_time_window) ? e : G.Oe.ALWAYS;
        return null == s
            ? null
            : (0, i.jsxs)(h.xJW, {
                  className: U.largeSpacing,
                  children: [
                      (0, i.jsx)(h.j7V, {
                          hideBorder: !0,
                          value: t,
                          onChange: (e) => this.handleCheckboxChange('muted', e, R.UE.muted(e)),
                          note: D.intl.string(D.t['8wbTQ0']),
                          children: D.intl.format(D.t['J+7D9P'], { name: s.name })
                      }),
                      t
                          ? (0, i.jsxs)(j.Z, {
                                className: U.spacing,
                                align: j.Z.Align.CENTER,
                                children: [
                                    (0, i.jsxs)(j.Z, {
                                        direction: j.Z.Direction.VERTICAL,
                                        className: U.__invalid_muteUntilTextWrapper,
                                        children: [
                                            (0, i.jsx)(h.vwX, {
                                                tag: 'h3',
                                                className: U.muteUntilTitle,
                                                children: D.intl.string(D.t.Ztu2Ym)
                                            }),
                                            (0, i.jsx)(O.Z, {
                                                className: U.muteUntilText,
                                                muteConfig: n
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(h.q4e, {
                                        className: U.muteTimeSelector,
                                        options: (0, S.W9)(),
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
            className: U.spacing,
            children: [
                (0, i.jsx)(h.xJW, {
                    title: D.intl.string(D.t.lprV7e),
                    className: U.largeSpacing,
                    children: (0, i.jsx)(h.FXm, {
                        disabled: t,
                        value: e,
                        onChange: (e) => this.handleRadioChange('message_notifications', e, R.UE.notifications(e.value)),
                        options: [
                            {
                                name: D.intl.string(D.t['n/bTaW']),
                                value: w.bL.ALL_MESSAGES,
                                desc: null != n && n >= w.qWG ? D.intl.string(D.t.Dh5p5u) : null
                            },
                            {
                                name: D.intl.format(D.t.L2hmY2, {}),
                                value: w.bL.ONLY_MENTIONS
                            },
                            {
                                name: D.intl.string(D.t.CtVGyc),
                                value: w.bL.NO_MESSAGES
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
            className: U.largeSpacing,
            children: [
                (0, i.jsx)(h.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_everyone', e, R.UE.suppressEveryone(e)),
                    value: e,
                    children: D.intl.format(D.t.OWiWAg, {})
                }),
                (0, i.jsx)(h.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_roles', e, R.UE.suppressRoles(e)),
                    value: t,
                    children: D.intl.string(D.t['O/QdoK'])
                }),
                (0, i.jsx)(h.j7V, {
                    onChange: (e) => {
                        g.Z.updateGuildNotificationSettings(a, { notify_highlights: e ? w.gLR.DISABLED : w.gLR.ENABLED }, R.UE.highlights(!e));
                    },
                    value: s || r === w.gLR.DISABLED,
                    disabled: s,
                    note: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-sm/normal',
                                children: D.intl.string(D.t['Vw/Xn5'])
                            }),
                            (0, i.jsx)('div', {
                                className: U.highlightsLink,
                                children: (0, i.jsx)(h.eee, {
                                    href: A.Z.getArticleURL(w.BhN.HIGHLIGHTS),
                                    children: D.intl.string(D.t.PRBn9P)
                                })
                            })
                        ]
                    }),
                    children: (0, i.jsx)(i.Fragment, { children: D.intl.string(D.t.gPuteH) })
                }),
                (0, i.jsx)(h.j7V, {
                    value: l,
                    onChange: (e) => this.handleCheckboxChange('mute_scheduled_events', e, R.UE.mutedEvents(e)),
                    children: D.intl.string(D.t.ONG3Y2)
                }),
                (0, i.jsx)(h.j7V, {
                    value: !s && n,
                    disabled: s,
                    onChange: (e) => this.handleCheckboxChange('mobile_push', e, R.UE.mobilePush(e)),
                    children: D.intl.string(D.t['h1DL6+'])
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
                    (0, i.jsx)(h.$i$, { className: U.customNotificationSoundsDivider })
                ]
            });
    }
    renderOverrideSelect() {
        let { channels: e, categories: t } = this.props,
            n = r()(e)
                .filter((e) => {
                    let { channel: n } = e;
                    return n.type !== w.d4z.GUILD_CATEGORY || (null != t[n.id] && t[n.id].length > 0);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, p.F6)(t, I.default, y.Z)
                    };
                })
                .value();
        return (0, i.jsxs)(h.xJW, {
            title: D.intl.string(D.t.O4TIvr),
            className: U.largeSpacing,
            children: [
                (0, i.jsx)(h.R94, {
                    type: h.R94.Types.DESCRIPTION,
                    className: U.smallSpacing,
                    children: D.intl.string(D.t['2Y9ZfH'])
                }),
                (0, i.jsx)(h.VcW, {
                    value: w.lds,
                    placeholder: D.intl.string(D.t['Z+oF8v']),
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
                .filter(P.lm);
        return (
            (0 === a.size || 0 === o.length) &&
                o.push(
                    (0, i.jsx)(
                        'div',
                        {
                            className: U.overridePlaceholder,
                            children: (0, i.jsx)(h.Text, {
                                className: U.overrideHeader,
                                variant: 'text-sm/semibold',
                                children: D.intl.string(D.t['2Y9ZfH'])
                            })
                        },
                        'placeholder'
                    )
                ),
            (0, i.jsxs)('div', {
                className: U.overrideList,
                children: [
                    (0, i.jsxs)(j.Z, {
                        children: [
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: U.headerName,
                                children: D.intl.string(D.t.uShwWl)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: U.headerOption,
                                children: D.intl.string(D.t.e29Z19)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: U.headerOption,
                                children: D.intl.string(D.t.DD6gNT)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: U.headerOption,
                                children: D.intl.string(D.t.CtVGyc)
                            }),
                            (0, i.jsx)(h.X6q, {
                                variant: 'eyebrow',
                                className: U.headerOption,
                                children: (0, i.jsx)(h.ua7, {
                                    text: D.intl.string(D.t['8wbTQ0']),
                                    position: 'bottom',
                                    children: (e) => (0, i.jsx)('span', V(X({}, e), { children: D.intl.string(D.t.sWmtIy) }))
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
            'aria-label': D.intl.string(D.t.h850Sk),
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
                g.Z.updateGuildNotificationSettings(
                    this.props.guildId,
                    {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    },
                    R.ZB.Muted
                );
            }),
            k(this, 'handleDeleteOverride', (e) => {
                let { overrides: t } = this.state;
                (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            k(this, 'renderOptionLabel', (e) => {
                let t = Z.Z.getChannel(e.value);
                if (null == t) return e.label;
                let n = Z.Z.getChannel(t.parent_id),
                    s = null != n ? n.name : null;
                return (0, i.jsx)(h.ZZ$, {
                    icon: (0, v.KS)(t),
                    title: e.label,
                    subtitle: s
                });
            });
    }
}
function J(e) {
    var { guildId: t } = e,
        n = W(e, ['guildId']);
    let s = (0, c.cj)([_.Z, L.Z, T.Z, M.ZP], () => {
            let e = _.Z.getCategories(t);
            return {
                guildId: t,
                categories: e,
                guild: L.Z.getGuild(t),
                memberCount: T.Z.getMemberCount(t),
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
        l = (0, x.Z)(s.categories._categories, s.categories, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, E.r8)(t) || t === w.d4z.GUILD_CATEGORY;
        }),
        r = b.Y.useExperiment({ location: 'connected_notification_settings' }, { autoTrackExposure: !0 }).enabled,
        a = (0, h.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex();
    return (0, i.jsx)(
        B,
        V(X(V(X({}, s), { channels: l }), n), {
            shouldShowCustomNotificationSounds: r,
            checkboxColor: a
        })
    );
}
function Y(e) {
    var { scrollToChannels: t } = e,
        n = W(e, ['scrollToChannels']);
    return (0, S.Mn)('NotificationSettingsModal') ? (0, i.jsx)(N.Z, V(X({}, n), { scrollToChannels: t })) : (0, i.jsx)(J, X({}, n));
}
