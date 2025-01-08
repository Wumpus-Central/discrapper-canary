n.r(t),
    n.d(t, {
        default: function () {
            return z;
        }
    }),
    n(47120),
    n(653041);
var i,
    s,
    l = n(200651),
    r = n(192379),
    a = n(392711),
    o = n.n(a),
    d = n(913527),
    c = n.n(d),
    u = n(995295),
    h = n(513431),
    g = n(442837),
    m = n(692547),
    x = n(481060),
    S = n(87051),
    p = n(798140),
    v = n(740504),
    N = n(933557),
    j = n(471445),
    C = n(600164),
    f = n(423589),
    E = n(74888),
    b = n(444899),
    _ = n(11352),
    T = n(610617),
    Z = n(777861),
    O = n(131704),
    L = n(592125),
    I = n(324067),
    M = n(650774),
    A = n(430824),
    R = n(699516),
    P = n(9156),
    G = n(594174),
    U = n(823379),
    k = n(63063),
    w = n(621600),
    y = n(981631),
    D = n(969943),
    F = n(388032),
    B = n(777138);
function H(e, t, n) {
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
((s = i || (i = {})).MUTED = 'muted'), (s.MESSAGE_NOTIFICATIONS = 'message_notifications'), (s.SUPPRESS_EVERYONE = 'suppress_everyone'), (s.SUPPRESS_ROLES = 'suppress_roles'), (s.MOBILE_PUSH = 'mobile_push'), (s.MUTE_EVENTS = 'mute_scheduled_events'), (s.NOTIFY_HIGHLIGHTS = 'notify_highlights');
class Y extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { overrides: n, channelOverridesProp: i } = t;
        return e.channelOverrides !== i
            ? ((n = new Set(n)),
              (0, f.OD)(e.channelOverrides).forEach((e) => n.add(e)),
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
            let e = (0, u.findDOMNode)(i);
            if (null != this._scroller && (0, h.k)(e, HTMLElement)) {
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
            (e = new Set(e)), (0, f.OD)(this.props.channelOverrides).forEach((t) => e.add(t)), this.setState({ overrides: e });
        }
    }
    handleCheckboxChange(e, t, n) {
        S.Z.updateGuildNotificationSettings(this.props.guildId, { [e]: t }, n);
    }
    handleRadioChange(e, t, n) {
        let { value: i } = t;
        S.Z.updateGuildNotificationSettings(this.props.guildId, { [e]: i }, n);
    }
    renderHeader() {
        let { guild: e } = this.props;
        return null == e
            ? null
            : (0, l.jsxs)(x.ModalHeader, {
                  children: [
                      (0, l.jsxs)(C.Z.Child, {
                          children: [
                              (0, l.jsx)(x.Heading, {
                                  variant: 'heading-lg/semibold',
                                  children: F.intl.string(F.t.h850Sk)
                              }),
                              (0, l.jsx)(x.Text, {
                                  variant: 'text-md/normal',
                                  className: B.guildName,
                                  children: e.name
                              })
                          ]
                      }),
                      (0, l.jsx)(C.Z.Child, {
                          grow: 0,
                          children: (0, l.jsx)(x.ModalCloseButton, { onClick: this.props.onClose })
                      })
                  ]
              });
    }
    renderFooter() {
        return (0, l.jsx)(x.ModalFooter, {
            children: (0, l.jsx)(x.Button, {
                onClick: this.props.onClose,
                children: F.intl.string(F.t.i4jeWV)
            })
        });
    }
    renderMute() {
        var e;
        let { muted: t, muteConfig: n, guild: i } = this.props,
            s = null !== (e = null == n ? void 0 : n.selected_time_window) && void 0 !== e ? e : D.Oe.ALWAYS;
        return null == i
            ? null
            : (0, l.jsxs)(x.FormItem, {
                  className: B.largeSpacing,
                  children: [
                      (0, l.jsx)(x.FormSwitch, {
                          hideBorder: !0,
                          value: t,
                          onChange: (e) => this.handleCheckboxChange('muted', e, w.UE.muted(e)),
                          note: F.intl.string(F.t['8wbTQ0']),
                          children: F.intl.format(F.t['J+7D9P'], { name: i.name })
                      }),
                      t
                          ? (0, l.jsxs)(C.Z, {
                                className: B.spacing,
                                align: C.Z.Align.CENTER,
                                children: [
                                    (0, l.jsxs)(C.Z, {
                                        direction: C.Z.Direction.VERTICAL,
                                        className: B.__invalid_muteUntilTextWrapper,
                                        children: [
                                            (0, l.jsx)(x.FormTitle, {
                                                tag: 'h3',
                                                className: B.muteUntilTitle,
                                                children: F.intl.string(F.t.Ztu2Ym)
                                            }),
                                            (0, l.jsx)(Z.Z, {
                                                className: B.muteUntilText,
                                                muteConfig: n
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(x.SingleSelect, {
                                        className: B.muteTimeSelector,
                                        options: (0, f.W9)(),
                                        value: s,
                                        onChange: this.handleSelectMuteTime
                                    })
                                ]
                            })
                          : null,
                      (0, l.jsx)(x.FormDivider, {})
                  ]
              });
    }
    renderServerSettings() {
        var e;
        let { messageNotifications: t, muted: n, memberCount: i } = this.props;
        return (0, l.jsxs)('div', {
            className: B.spacing,
            children: [
                (0, l.jsx)(x.FormItem, {
                    title: F.intl.string(F.t.lprV7e),
                    className: B.largeSpacing,
                    children: (0, l.jsx)(x.RadioGroup, {
                        disabled: n,
                        value: t,
                        onChange: (e) => this.handleRadioChange('message_notifications', e, w.UE.notifications(e.value)),
                        options:
                            ((e = i),
                            [
                                {
                                    name: F.intl.string(F.t['n/bTaW']),
                                    value: y.bL.ALL_MESSAGES,
                                    desc: null != e && e >= y.qWG ? F.intl.string(F.t.Dh5p5u) : null
                                },
                                {
                                    name: F.intl.format(F.t.L2hmY2, {}),
                                    value: y.bL.ONLY_MENTIONS
                                },
                                {
                                    name: F.intl.string(F.t.CtVGyc),
                                    value: y.bL.NO_MESSAGES
                                }
                            ])
                    })
                }),
                (0, l.jsx)(x.FormDivider, {})
            ]
        });
    }
    renderNotificationOptions() {
        let { suppressEveryone: e, suppressRoles: t, mobilePush: n, muted: i, muteEvents: s, notifyHighlights: r, guildId: a } = this.props;
        return (0, l.jsxs)(x.FormItem, {
            className: B.largeSpacing,
            children: [
                (0, l.jsx)(x.FormSwitch, {
                    onChange: (e) => this.handleCheckboxChange('suppress_everyone', e, w.UE.suppressEveryone(e)),
                    value: e,
                    children: F.intl.format(F.t.OWiWAg, {})
                }),
                (0, l.jsx)(x.FormSwitch, {
                    onChange: (e) => this.handleCheckboxChange('suppress_roles', e, w.UE.suppressRoles(e)),
                    value: t,
                    children: F.intl.string(F.t['O/QdoK'])
                }),
                (0, l.jsx)(x.FormSwitch, {
                    onChange: (e) => {
                        S.Z.updateGuildNotificationSettings(a, { notify_highlights: e ? y.gLR.DISABLED : y.gLR.ENABLED }, w.UE.highlights(!e));
                    },
                    value: i || r === y.gLR.DISABLED,
                    disabled: i,
                    note: (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(x.Text, {
                                variant: 'text-sm/normal',
                                children: F.intl.string(F.t['Vw/Xn5'])
                            }),
                            (0, l.jsx)('div', {
                                className: B.highlightsLink,
                                children: (0, l.jsx)(x.Anchor, {
                                    href: k.Z.getArticleURL(y.BhN.HIGHLIGHTS),
                                    children: F.intl.string(F.t.PRBn9P)
                                })
                            })
                        ]
                    }),
                    children: (0, l.jsx)(l.Fragment, { children: F.intl.string(F.t.gPuteH) })
                }),
                (0, l.jsx)(x.FormSwitch, {
                    value: s,
                    onChange: (e) => this.handleCheckboxChange('mute_scheduled_events', e, w.UE.mutedEvents(e)),
                    children: F.intl.string(F.t.ONG3Y2)
                }),
                (0, l.jsx)(x.FormSwitch, {
                    value: !i && n,
                    disabled: i,
                    onChange: (e) => this.handleCheckboxChange('mobile_push', e, w.UE.mobilePush(e)),
                    children: F.intl.string(F.t['h1DL6+'])
                })
            ]
        });
    }
    renderCustomNotificationSoundOptions() {
        let { shouldShowCustomNotificationSounds: e, guildId: t, onClose: n } = this.props;
        if (!!e)
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(T.Z, {
                        guildId: t,
                        onClose: n
                    }),
                    (0, l.jsx)(x.FormDivider, { className: B.customNotificationSoundsDivider })
                ]
            });
    }
    renderOverrideSelect() {
        let { channels: e, categories: t } = this.props,
            n = o()(e)
                .filter((e) => {
                    let { channel: n } = e;
                    return n.type !== y.d4z.GUILD_CATEGORY || (null != t[n.id] && t[n.id].length > 0);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, N.F6)(t, G.default, R.Z)
                    };
                })
                .value();
        return (0, l.jsxs)(x.FormItem, {
            title: F.intl.string(F.t.O4TIvr),
            className: B.largeSpacing,
            children: [
                (0, l.jsx)(x.FormText, {
                    type: x.FormText.Types.DESCRIPTION,
                    className: B.smallSpacing,
                    children: F.intl.string(F.t['2Y9ZfH'])
                }),
                (0, l.jsx)(x.SearchableSelect, {
                    value: y.lds,
                    placeholder: F.intl.string(F.t['Z+oF8v']),
                    renderOptionLabel: this.renderOptionLabel,
                    options: n,
                    onChange: this.handleSelectChange
                })
            ]
        });
    }
    renderChannelNotifications() {
        let { channelOverrides: e, muted: t, channels: n, messageNotifications: i, categories: s, checkboxColor: r } = this.props,
            { overrides: a } = this.state,
            o = n
                .map((n) => {
                    let { channel: o } = n;
                    if (!a.has(o.id) || (null != s[o.id] && 0 === s[o.id].length)) return null;
                    let d = e[o.id];
                    return (0, l.jsx)(
                        b.f,
                        {
                            ref: (e) => {
                                this._channelRefs[o.id] = e;
                            },
                            channel: o,
                            guildMuted: t,
                            muted: null != d && (0, p.m$)(d),
                            messageNotifications: null != d ? d.message_notifications : null,
                            guildMessageNotifications: i,
                            onDelete: this.handleDeleteOverride,
                            checkboxColor: r
                        },
                        o.id
                    );
                })
                .filter(U.lm);
        return (
            (0 === a.size || 0 === o.length) &&
                o.push(
                    (0, l.jsx)(
                        'div',
                        {
                            className: B.overridePlaceholder,
                            children: (0, l.jsx)(x.Text, {
                                className: B.overrideHeader,
                                variant: 'text-sm/semibold',
                                children: F.intl.string(F.t['2Y9ZfH'])
                            })
                        },
                        'placeholder'
                    )
                ),
            (0, l.jsxs)('div', {
                className: B.overrideList,
                children: [
                    (0, l.jsxs)(C.Z, {
                        children: [
                            (0, l.jsx)(x.Heading, {
                                variant: 'eyebrow',
                                className: B.headerName,
                                children: F.intl.string(F.t.uShwWl)
                            }),
                            (0, l.jsx)(x.Heading, {
                                variant: 'eyebrow',
                                className: B.headerOption,
                                children: F.intl.string(F.t.e29Z19)
                            }),
                            (0, l.jsx)(x.Heading, {
                                variant: 'eyebrow',
                                className: B.headerOption,
                                children: F.intl.string(F.t.DD6gNT)
                            }),
                            (0, l.jsx)(x.Heading, {
                                variant: 'eyebrow',
                                className: B.headerOption,
                                children: F.intl.string(F.t.CtVGyc)
                            }),
                            (0, l.jsx)(x.Heading, {
                                variant: 'eyebrow',
                                className: B.headerOption,
                                children: (0, l.jsx)(x.Tooltip, {
                                    text: F.intl.string(F.t['8wbTQ0']),
                                    position: 'bottom',
                                    children: (e) =>
                                        (0, l.jsx)('span', {
                                            ...e,
                                            children: F.intl.string(F.t.sWmtIy)
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
        return (0, l.jsxs)(x.ModalRoot, {
            'aria-label': F.intl.string(F.t.h850Sk),
            size: x.ModalSize.MEDIUM,
            transitionState: this.props.transitionState,
            children: [
                this.renderHeader(),
                (0, l.jsxs)(x.ModalContent, {
                    scrollerRef: this.setScrollerRef,
                    children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
                }),
                this.renderFooter()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, '_scroller', null),
            H(this, '_channelRefs', {}),
            H(this, 'state', {
                overrides: new Set((0, f.OD)(this.props.channelOverrides)),
                channelOverridesProp: this.props.channelOverrides,
                lastSelected: null
            }),
            H(this, 'setScrollerRef', (e) => {
                this._scroller = e;
            }),
            H(this, 'handleSelectChange', (e) => {
                if (null == e) return;
                let { overrides: t } = this.state;
                (t = new Set(t)).add(e),
                    this.setState({
                        overrides: t,
                        lastSelected: e
                    });
            }),
            H(this, 'handleSelectMuteTime', (e) => {
                let t = e > 0 ? c()().add(e, 'second').toISOString() : null;
                S.Z.updateGuildNotificationSettings(
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
            H(this, 'handleDeleteOverride', (e) => {
                let { overrides: t } = this.state;
                (t = new Set(t)).delete(e), this.setState({ overrides: t });
            }),
            H(this, 'renderOptionLabel', (e) => {
                let t = L.Z.getChannel(e.value);
                if (null == t) return e.label;
                let n = L.Z.getChannel(t.parent_id),
                    i = null != n ? n.name : null;
                return (0, l.jsx)(x.IconSelectOption, {
                    icon: (0, j.KS)(t),
                    title: e.label,
                    subtitle: i
                });
            });
    }
}
function W(e) {
    let { guildId: t, ...n } = e,
        i = (0, g.cj)([I.Z, A.Z, M.Z, P.ZP], () => {
            let e = I.Z.getCategories(t);
            return {
                guildId: t,
                categories: e,
                guild: A.Z.getGuild(t),
                memberCount: M.Z.getMemberCount(t),
                suppressEveryone: P.ZP.isSuppressEveryoneEnabled(t),
                suppressRoles: P.ZP.isSuppressRolesEnabled(t),
                muteEvents: P.ZP.isMuteScheduledEventsEnabled(t),
                mobilePush: P.ZP.isMobilePushEnabled(t),
                muted: P.ZP.isMuted(t),
                muteConfig: P.ZP.getMuteConfig(t),
                messageNotifications: P.ZP.getMessageNotifications(t),
                channelOverrides: P.ZP.getChannelOverrides(t),
                notifyHighlights: P.ZP.getNotifyHighlights(t)
            };
        }),
        s = (0, v.Z)(i.categories._categories, i.categories, (e) => {
            let {
                channel: { type: t }
            } = e;
            return (0, O.r8)(t) || t === y.d4z.GUILD_CATEGORY;
        }),
        r = _.Y.useExperiment({ location: 'connected_notification_settings' }, { autoTrackExposure: !0 }).enabled,
        a = (0, x.useToken)(m.Z.unsafe_rawColors.GREEN_360).hex();
    return (0, l.jsx)(Y, {
        ...i,
        channels: s,
        ...n,
        shouldShowCustomNotificationSounds: r,
        checkboxColor: a
    });
}
function z(e) {
    let { scrollToChannels: t, ...n } = e;
    return (0, f.Mn)('NotificationSettingsModal')
        ? (0, l.jsx)(E.Z, {
              ...n,
              scrollToChannels: t
          })
        : (0, l.jsx)(W, { ...n });
}
