n.d(t, { default: () => B }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(392711),
    a = n.n(l),
    r = n(913527),
    o = n.n(r),
    d = n(995295),
    c = n(374470),
    u = n(442837),
    h = n(692547),
    g = n(481060),
    m = n(87051),
    x = n(798140),
    p = n(740504),
    v = n(933557),
    N = n(471445),
    S = n(600164),
    j = n(423589),
    C = n(74888),
    f = n(444899),
    E = n(11352),
    Z = n(610617),
    b = n(777861),
    _ = n(131704),
    T = n(592125),
    L = n(324067),
    O = n(650774),
    M = n(430824),
    I = n(699516),
    A = n(9156),
    R = n(594174),
    P = n(823379),
    G = n(63063),
    U = n(621600),
    w = n(981631),
    y = n(969943),
    D = n(388032),
    k = n(777138);
function X(e, t, n) {
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
class V extends s.PureComponent {
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
            (e = new Set(e)), (0, j.OD)(this.props.channelOverrides).forEach((t) => e.add(t)), this.setState({ overrides: e });
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
                  className: k.modalHeader,
                  children: [
                      (0, i.jsxs)(S.Z.Child, {
                          children: [
                              (0, i.jsx)(g.X6q, {
                                  variant: 'heading-lg/semibold',
                                  children: D.intl.string(D.t.h850Sk)
                              }),
                              (0, i.jsx)(g.Text, {
                                  variant: 'text-md/normal',
                                  className: k.guildName,
                                  children: e.name
                              })
                          ]
                      }),
                      (0, i.jsx)(S.Z.Child, {
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
                children: D.intl.string(D.t.i4jeWV)
            })
        });
    }
    renderMute() {
        var e;
        let { muted: t, muteConfig: n, guild: s } = this.props,
            l = null !== (e = null == n ? void 0 : n.selected_time_window) && void 0 !== e ? e : y.Oe.ALWAYS;
        return null == s
            ? null
            : (0, i.jsxs)(g.xJW, {
                  className: k.largeSpacing,
                  children: [
                      (0, i.jsx)(g.j7V, {
                          hideBorder: !0,
                          value: t,
                          onChange: (e) => this.handleCheckboxChange('muted', e, U.UE.muted(e)),
                          note: D.intl.string(D.t['8wbTQ0']),
                          children: D.intl.format(D.t['J+7D9P'], { name: s.name })
                      }),
                      t
                          ? (0, i.jsxs)(S.Z, {
                                className: k.spacing,
                                align: S.Z.Align.CENTER,
                                children: [
                                    (0, i.jsxs)(S.Z, {
                                        direction: S.Z.Direction.VERTICAL,
                                        className: k.__invalid_muteUntilTextWrapper,
                                        children: [
                                            (0, i.jsx)(g.vwX, {
                                                tag: 'h3',
                                                className: k.muteUntilTitle,
                                                children: D.intl.string(D.t.Ztu2Ym)
                                            }),
                                            (0, i.jsx)(b.Z, {
                                                className: k.muteUntilText,
                                                muteConfig: n
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(g.q4e, {
                                        className: k.muteTimeSelector,
                                        options: (0, j.W9)(),
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
            className: k.spacing,
            children: [
                (0, i.jsx)(g.xJW, {
                    title: D.intl.string(D.t.lprV7e),
                    className: k.largeSpacing,
                    children: (0, i.jsx)(g.FXm, {
                        disabled: t,
                        value: e,
                        onChange: (e) => this.handleRadioChange('message_notifications', e, U.UE.notifications(e.value)),
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
                (0, i.jsx)(g.$i$, {})
            ]
        });
    }
    renderNotificationOptions() {
        let { suppressEveryone: e, suppressRoles: t, mobilePush: n, muted: s, muteEvents: l, notifyHighlights: a, guildId: r } = this.props;
        return (0, i.jsxs)(g.xJW, {
            className: k.largeSpacing,
            children: [
                (0, i.jsx)(g.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_everyone', e, U.UE.suppressEveryone(e)),
                    value: e,
                    children: D.intl.format(D.t.OWiWAg, {})
                }),
                (0, i.jsx)(g.j7V, {
                    onChange: (e) => this.handleCheckboxChange('suppress_roles', e, U.UE.suppressRoles(e)),
                    value: t,
                    children: D.intl.string(D.t['O/QdoK'])
                }),
                (0, i.jsx)(g.j7V, {
                    onChange: (e) => {
                        m.Z.updateGuildNotificationSettings(r, { notify_highlights: e ? w.gLR.DISABLED : w.gLR.ENABLED }, U.UE.highlights(!e));
                    },
                    value: s || a === w.gLR.DISABLED,
                    disabled: s,
                    note: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                children: D.intl.string(D.t['Vw/Xn5'])
                            }),
                            (0, i.jsx)('div', {
                                className: k.highlightsLink,
                                children: (0, i.jsx)(g.eee, {
                                    href: G.Z.getArticleURL(w.BhN.HIGHLIGHTS),
                                    children: D.intl.string(D.t.PRBn9P)
                                })
                            })
                        ]
                    }),
                    children: (0, i.jsx)(i.Fragment, { children: D.intl.string(D.t.gPuteH) })
                }),
                (0, i.jsx)(g.j7V, {
                    value: l,
                    onChange: (e) => this.handleCheckboxChange('mute_scheduled_events', e, U.UE.mutedEvents(e)),
                    children: D.intl.string(D.t.ONG3Y2)
                }),
                (0, i.jsx)(g.j7V, {
                    value: !s && n,
                    disabled: s,
                    onChange: (e) => this.handleCheckboxChange('mobile_push', e, U.UE.mobilePush(e)),
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
                    (0, i.jsx)(Z.Z, {
                        guildId: t,
                        onClose: n
                    }),
                    (0, i.jsx)(g.$i$, { className: k.customNotificationSoundsDivider })
                ]
            });
    }
    renderOverrideSelect() {
        let { channels: e, categories: t } = this.props,
            n = a()(e)
                .filter((e) => {
                    let { channel: n } = e;
                    return n.type !== w.d4z.GUILD_CATEGORY || (null != t[n.id] && t[n.id].length > 0);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, v.F6)(t, R.default, I.Z)
                    };
                })
                .value();
        return (0, i.jsxs)(g.xJW, {
            title: D.intl.string(D.t.O4TIvr),
            className: k.largeSpacing,
            children: [
                (0, i.jsx)(g.R94, {
                    type: g.R94.Types.DESCRIPTION,
                    className: k.smallSpacing,
                    children: D.intl.string(D.t['2Y9ZfH'])
                }),
                (0, i.jsx)(g.VcW, {
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
        let { channelOverrides: e, muted: t, channels: n, messageNotifications: s, categories: l, checkboxColor: a } = this.props,
            { overrides: r } = this.state,
            o = n
                .map((n) => {
                    let { channel: o } = n;
                    if (!r.has(o.id) || (null != l[o.id] && 0 === l[o.id].length)) return null;
                    let d = e[o.id];
                    return (0, i.jsx)(
                        f.f,
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
                            checkboxColor: a
                        },
                        o.id
                    );
                })
                .filter(P.lm);
        return (
            (0 === r.size || 0 === o.length) &&
                o.push(
                    (0, i.jsx)(
                        'div',
                        {
                            className: k.overridePlaceholder,
                            children: (0, i.jsx)(g.Text, {
                                className: k.overrideHeader,
                                variant: 'text-sm/semibold',
                                children: D.intl.string(D.t['2Y9ZfH'])
                            })
                        },
                        'placeholder'
                    )
                ),
            (0, i.jsxs)('div', {
                className: k.overrideList,
                children: [
                    (0, i.jsxs)(S.Z, {
                        children: [
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: k.headerName,
                                children: D.intl.string(D.t.uShwWl)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: k.headerOption,
                                children: D.intl.string(D.t.e29Z19)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: k.headerOption,
                                children: D.intl.string(D.t.DD6gNT)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: k.headerOption,
                                children: D.intl.string(D.t.CtVGyc)
                            }),
                            (0, i.jsx)(g.X6q, {
                                variant: 'eyebrow',
                                className: k.headerOption,
                                children: (0, i.jsx)(g.ua7, {
                                    text: D.intl.string(D.t['8wbTQ0']),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ...e,
                                            children: D.intl.string(D.t.sWmtIy)
                                        })
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
            'aria-label': D.intl.string(D.t.h850Sk),
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
            X(this, '_scroller', null),
            X(this, '_channelRefs', {}),
            X(this, 'state', {
                overrides: new Set((0, j.OD)(this.props.channelOverrides)),
                channelOverridesProp: this.props.channelOverrides,
                lastSelected: null
            }),
            X(this, 'setScrollerRef', (e) => {
                this._scroller = e;
            }),
            X(this, 'handleSelectChange', (e) => {
                if (null == e) return;
                let { overrides: t } = this.state;
                (t = new Set(t)).add(e),
                    this.setState({
                        overrides: t,
                        lastSelected: e
                    });
            }),
            X(this, 'handleSelectMuteTime', (e) => {
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
                    U.ZB.Muted
                );
            }),
            X(this, 'handleDeleteOverride', (e) => {
                let { overrides: t } = this.state;
                (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            X(this, 'renderOptionLabel', (e) => {
                let t = T.Z.getChannel(e.value);
                if (null == t) return e.label;
                let n = T.Z.getChannel(t.parent_id),
                    s = null != n ? n.name : null;
                return (0, i.jsx)(g.ZZ$, {
                    icon: (0, N.KS)(t),
                    title: e.label,
                    subtitle: s
                });
            });
    }
}
function W(e) {
    let { guildId: t, ...n } = e,
        s = (0, u.cj)([L.Z, M.Z, O.Z, A.ZP], () => {
            let e = L.Z.getCategories(t);
            return {
                guildId: t,
                categories: e,
                guild: M.Z.getGuild(t),
                memberCount: O.Z.getMemberCount(t),
                suppressEveryone: A.ZP.isSuppressEveryoneEnabled(t),
                suppressRoles: A.ZP.isSuppressRolesEnabled(t),
                muteEvents: A.ZP.isMuteScheduledEventsEnabled(t),
                mobilePush: A.ZP.isMobilePushEnabled(t),
                muted: A.ZP.isMuted(t),
                muteConfig: A.ZP.getMuteConfig(t),
                messageNotifications: A.ZP.getMessageNotifications(t),
                channelOverrides: A.ZP.getChannelOverrides(t),
                notifyHighlights: A.ZP.getNotifyHighlights(t)
            };
        }),
        l = (0, p.Z)(s.categories._categories, s.categories, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, _.r8)(t) || t === w.d4z.GUILD_CATEGORY;
        }),
        a = E.Y.useExperiment({ location: 'connected_notification_settings' }, { autoTrackExposure: !0 }).enabled,
        r = (0, g.dQu)(h.Z.unsafe_rawColors.GREEN_360).hex();
    return (0, i.jsx)(V, {
        ...s,
        channels: l,
        ...n,
        shouldShowCustomNotificationSounds: a,
        checkboxColor: r
    });
}
function B(e) {
    let { scrollToChannels: t, ...n } = e;
    return (0, j.Mn)('NotificationSettingsModal')
        ? (0, i.jsx)(C.Z, {
              ...n,
              scrollToChannels: t
          })
        : (0, i.jsx)(W, { ...n });
}
