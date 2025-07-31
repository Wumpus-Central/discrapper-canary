(n.d(t, { default: () => ex }), n(997841), n(388685));
var l,
    i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    u = n.n(o),
    d = n(392711),
    c = n.n(d),
    h = n(990547),
    g = n(533800),
    m = n(442837),
    p = n(902704),
    v = n(692547),
    x = n(481060),
    I = n(447543),
    f = n(247272),
    N = n(110924),
    j = n(100527),
    _ = n(906732),
    E = n(835473),
    S = n(447003),
    b = n(471445),
    T = n(259473),
    O = n(600164),
    y = n(687516),
    C = n(648159),
    P = n(227672),
    Z = n(427679),
    w = n(601964),
    A = n(199902),
    R = n(439170),
    M = n(592125),
    D = n(984933),
    k = n(341165),
    L = n(751771),
    U = n(496675),
    V = n(158776),
    B = n(944486),
    F = n(594174),
    G = n(938475),
    z = n(626135),
    H = n(630388),
    q = n(971130),
    W = n(264229),
    Y = n(340541),
    X = n(366980),
    K = n(277364),
    J = n(265452),
    Q = n(585385),
    $ = n(603236),
    ee = n(462376),
    et = n(245335),
    en = n(981631),
    el = n(176505),
    ei = n(388032),
    er = n(821022),
    es = n(20493),
    ea = n(264589),
    eo = n(622577);
function eu(e, t, n) {
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
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                eu(e, t, n[t]);
            }));
    }
    return e;
}
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { INVITE_OPTIONS_FOREVER: eh, INVITE_OPTIONS_7_DAYS: eg, INVITE_OPTIONS_UNLIMITED: em } = q.ZP;
class ep extends (l = r.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: r, streamUserId: s, targetType: a, targetUserId: o, application: u, initialCounts: d, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: p, maxUses: v, temporary: x, flags: f } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            (m({ networkError: void 0 }),
                I.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: v,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: x,
                        flags: f
                    },
                    l
                ).catch((e) => m({ networkError: e })));
        }
        if (
            (h &&
                z.default.track(en.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: null == u ? void 0 : u.id
                }),
            null != s)
        ) {
            let e = A.Z.getStreamForUser(s, n.id),
                t = (0, y.L2)(e, V.Z);
            z.default.track(en.rMx.OPEN_MODAL, {
                type: 'Send Stream Invite',
                source: l,
                location: r,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null
            });
        } else
            (null == u ? void 0 : u.id) != null ||
                z.default.track(en.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: r
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, H.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && I.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
        return null == r
            ? r
            : (0, W.tV)({
                  baseCode: r,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, S.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: er.warningContainer,
                  children: [
                      (0, i.jsx)(x.Mgn, {
                          size: 'custom',
                          className: er.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(x.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: ei.intl.string(ei.t.x1SQZW)
                      })
                  ]
              })
            : null;
    }
    renderHeader() {
        let e,
            { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, welcomeToServer: o, inviteChannel: u, modalState: d, handleDone: c } = this.props,
            { query: h } = d,
            g = null,
            m = null;
        if (((e = o ? null : null != r ? ei.intl.string(ei.t['6VQaqa']) : null != s ? ei.intl.formatToPlainString(ei.t.ZdK3dX, { applicationName: s.name }) : null != l ? ei.intl.string(ei.t.JKV4FB) : (null == u ? void 0 : u.isGuildStageVoice()) ? ei.intl.string(ei.t.zTrsHx) : ei.intl.format(ei.t.NvVBJS, { name: t.name })), null != u)) {
            let e = (0, b.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
                    className: er.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: er.channelIcon }),
                        (0, i.jsx)(x.Text, {
                            color: 'interactive-normal',
                            variant: 'text-md/normal',
                            children: u.name
                        })
                    ]
                }));
        }
        return (
            (g = t.features.has(en.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: er.hubHeader,
                      children: [
                          (0, i.jsx)(x.X6q, {
                              className: a()(er.hubInviteTitle, er.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: ei.intl.string(ei.t.WhR38v)
                          }),
                          (0, i.jsx)(x.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: ei.intl.string(ei.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(x.E1j, {
                                  size: 'sm',
                                  query: h,
                                  className: er.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: ei.intl.string(ei.t.CmSHY2),
                                  'aria-label': ei.intl.string(ei.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch
                              })
                      ]
                  })
                : n
                  ? (0, i.jsxs)('div', {
                        className: er.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: er.__invalid_headerTopRow,
                                children: (0, i.jsx)(x.vwX, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(es.marginBottom4, er.headerCloseButtonSpacing, er.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(x.E1j, {
                                size: 'sm',
                                query: h,
                                className: er.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: ei.intl.string(ei.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            }),
                            (0, i.jsx)('div', {
                                className: es.marginTop8,
                                children: this.renderChannelWarning()
                            })
                        ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.vwX, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(es.marginReset, er.headerCloseButtonSpacing, er.headerText),
                                children: e
                            }),
                            m,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(x.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: er.closeButton,
                        children: (0, i.jsx)(x.olH, { onClick: c })
                    }),
                    (0, i.jsxs)('div', {
                        className: er.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            className: er.welcomeImage,
                                            src: eo,
                                            alt: ''
                                        }),
                                        (0, i.jsx)(x.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: er.welcomeHeading,
                                            children: ei.intl.string(ei.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: er.welcomeSubheading,
                                            children: ei.intl.string(ei.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != r ? (0, i.jsx)(C.Z, {}) : null,
                            g
                        ]
                    })
                ]
            })
        );
    }
    renderFriendsBody() {
        let { rows: e } = this.props,
            t = this.getInviteKey();
        return 0 === e.length
            ? (0, i.jsx)(x.hzk, {
                  className: er.inviteRowEmptyState,
                  children: (0, i.jsx)(x.OZU, { children: ei.intl.string(ei.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(x.hzk, {
                    className: er.inviteRowEmptyState,
                    children: (0, i.jsx)(x.OZU, { children: ei.intl.string(ei.t.hzPwGB) })
                })
              : (0, i.jsx)(x.YAO, {
                    className: er.scroller,
                    sections: [e.length],
                    renderSection: this.renderSection,
                    sectionHeight: 0,
                    renderRow: this.renderRow,
                    rowHeight: this.getRowHeight,
                    paddingBottom: 16
                });
    }
    renderSection() {
        return null;
    }
    renderBody() {
        var e;
        let { guild: t, showFriends: n, streamUserId: l, application: r } = this.props;
        if (n) return this.renderFriendsBody();
        let s = (0, X.Z)(null != (e = this.getInviteKey()) ? e : ''),
            a = F.default.getCurrentUser();
        u()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = (0, w.eM)(t, a) ? ei.intl.string(ei.t.HFbByM) : ei.intl.string(ei.t.ueBhAw);
        return (
            null != l ? (o = ei.intl.string(ei.t.CXpS1N)) : null != r && (o = ei.intl.string(ei.t.ueCrHB)),
            (0, i.jsx)(x.hzk, {
                className: er.noScroll,
                children: (0, i.jsxs)(O.Z, {
                    direction: O.Z.Direction.VERTICAL,
                    className: es.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: er.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(
                            $.I,
                            ec(ed({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: s
                            })
                        )
                    ]
                })
            })
        );
    }
    renderFooter() {
        var e;
        let { noInvitesAvailable: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, inviteChannel: o, modalState: u } = this.props,
            { maxAge: d } = u,
            c = null,
            h = (0, X.Z)(null != (e = this.getInviteKey()) ? e : '');
        if (n) {
            let e = ei.intl.string(ei.t.MLkj7O);
            (null != r ? (e = ei.intl.string(ei.t['1b9nen'])) : null != s ? (e = ei.intl.string(ei.t.iI1gMj)) : null != l ? (e = ei.intl.string(ei.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ei.intl.string(ei.t['2frWa2'])),
                (c = (0, i.jsxs)(O.Z, {
                    direction: O.Z.Direction.VERTICAL,
                    className: er.content,
                    children: [
                        (0, i.jsx)(x.vwX, {
                            tag: 'h5',
                            className: es.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(
                            $.I,
                            ec(ed({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: h
                            })
                        )
                    ]
                })));
        } else
            t ||
                (c = (0, i.jsxs)(O.Z, {
                    justify: O.Z.Justify.BETWEEN,
                    className: es.marginTop20,
                    children: [
                        (0, i.jsx)(x.XZJ, {
                            size: 18,
                            type: x.XZJ.Types.INVERTED,
                            value: d === eh.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(x.Text, {
                                variant: 'text-sm/normal',
                                children: ei.intl.string(ei.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(x.ua7, {
                            text: ei.intl.string(ei.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(x.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ea.cursorPointer,
                                    children: (0, i.jsx)(x.ewm, {
                                        size: 'sm',
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(x.mzw, {
                  className: a()({
                      [er.noPadding]: !n,
                      [er.footer]: n
                  }),
                  children: c
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case et.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                });
            case et.RV.SETTINGS:
                return (0, i.jsx)(
                    Q.D,
                    ec(ed({}, this.props), {
                        onSetInviteFlags: this.handleSetInviteFlags,
                        headerId: this._headerId,
                        onSelectMaxAge: this.handleSelectMaxAge,
                        onSelectMaxUses: this.handleSelectMaxUses,
                        onToggleTemporary: this.handleToggleTemporary,
                        handleDone: t
                    })
                );
            default:
                return null;
        }
    }
    render() {
        let { transitionState: e, inviteChannel: t, guild: n } = this.props;
        return (0, i.jsx)('div', {
            className: this.props.showFriends ? er.wrapper : void 0,
            children: (0, i.jsx)(x.Y0X, {
                impression: {
                    impressionName: h.ImpressionNames.GUILD_INVITE,
                    impressionProperties: {
                        invite_channel_id: null == t ? void 0 : t.id,
                        invite_guild_id: n.id
                    }
                },
                'aria-labelledby': this._headerId,
                transitionState: e,
                className: er.modal,
                parentComponent: 'InstantInvite',
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        (super(...e),
            eu(this, '_scroller', null),
            eu(this, '_headerId', c().uniqueId()),
            eu(this, 'openSettings', () => {
                let { changePage: e } = this.props;
                e(et.RV.SETTINGS);
            }),
            eu(this, 'handleSelectMaxAge', (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge
                });
            }),
            eu(this, 'handleSelectMaxUses', (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            eu(this, 'handleToggleTemporary', (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            eu(this, 'handleSetInviteFlags', (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            eu(this, 'handleQueryChange', (e) => {
                var t;
                let { setModalState: n } = this.props;
                (null == (t = this._scroller) || t.scrollTo({ to: 0 }), (0, f.C)(e), n({ query: e }));
            }),
            eu(this, 'handleClearSearch', () => {
                this.handleQueryChange('');
            }),
            eu(this, 'handleToggleMaxAge', () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n
                });
            }),
            eu(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case q.bm.CHANNEL:
                    case q.bm.GROUP_DM:
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return ee.k;
                    default:
                        return 0;
                }
            }),
            eu(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    r = this.getInviteKey(),
                    s = this.props.rows[n],
                    a = ''.concat(s.type, '-').concat(s.item.id);
                switch (s.type) {
                    case q.bm.GROUP_DM:
                    case q.bm.CHANNEL:
                        return (0, i.jsx)(
                            ee.d,
                            {
                                row: s,
                                channel: s.item,
                                inviteKey: r,
                                location: l
                            },
                            a
                        );
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return (0, i.jsx)(
                            ee.d,
                            {
                                row: s,
                                user: s.item,
                                inviteKey: r,
                                location: l
                            },
                            a
                        );
                    default:
                        return null;
                }
            }));
    }
}
eu(ep, 'defaultProps', {
    analyticsLocation: en.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eg.value
});
let ev = r.forwardRef(function (e, t) {
    var n, l;
    let { channel: s, guild: a, source: o, guildScheduledEvent: u, streamUserId: d, applicationId: c, transitionState: h, onClose: v, welcomeToServer: x, page: b, analyticsLocation: O } = e,
        { analyticsLocations: y } = (0, _.ZP)(j.Z.INSTANT_INVITE_MODAL),
        C = (0, m.e7)(
            [B.Z, M.Z, D.ZP],
            () => {
                if (null != s) return s;
                let e = B.Z.getChannelId(),
                    t = null == e || (0, el.AB)(e) ? void 0 : M.Z.getChannel(e);
                return ((null == t ? void 0 : t.isThread()) && (t = M.Z.getChannel(t.parent_id)), null != t ? t : D.ZP.getDefaultChannel(a.id, !0, en.Plq.CREATE_INSTANT_INVITE));
            },
            [s, a.id]
        ),
        w = null;
    null != d ? (w = et.Iq.STREAM) : null != c && (w = et.Iq.EMBEDDED_APPLICATION);
    let A = null != s ? s.getGuildId() : null != a ? a.id : null,
        V = (0, m.e7)(
            [k.Z],
            () => {
                let e = null != C ? C.id : null;
                return null == e
                    ? null
                    : k.Z.getInvite(e, {
                          targetType: w,
                          targetUserId: d,
                          targetApplicationId: c
                      });
            },
            [C, w, d, c]
        ),
        [F, z, q, W] = (0, m.Wu)([L.Z, G.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != s && null != C ? G.ZP.getVoiceStatesForChannel(C) : null], [C, s]),
        Y = (0, m.e7)(
            [R.ZP],
            () => {
                let e = null != C ? C.id : null;
                return null != A ? R.ZP.getProps(A, e) : void 0;
            },
            [C, A],
            p.Z
        ),
        X = (0, m.e7)([U.Z], () => null != C && U.Z.can(en.Plq.CREATE_INSTANT_INVITE, C), [C]),
        J = null === V || !X,
        [Q] = r.useState(() => {
            let e = new Set();
            return (
                null != d && null != W
                    ? W.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != A &&
                      null != Y &&
                      w !== et.Iq.EMBEDDED_APPLICATION &&
                      Y.rows.forEach((t) => {
                          t.type === R.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        $ = null == s ? void 0 : s.id,
        ee = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel($), [$]);
    r.useEffect(() => {
        (0, f.x)({
            omitUserIds: Q,
            guild: a,
            channel: s,
            applicationId: c,
            inviteTargetType: w
        }).catch(en.VqG);
    }, [Q, s, a, c, w]);
    let [ei] = (0, E.Z)(null != c ? [c] : []),
        er = (0, T.Z)({ guildId: A }),
        es = null != V ? V.code : void 0,
        ea = null == V ? void 0 : V.maxAge,
        eo = null == V ? void 0 : V.maxUses,
        eu = null == V ? void 0 : V.temporary,
        ec = a.vanityURLCode,
        ev = null != ec && ec.length > 0,
        ex = !X && !(null == C ? void 0 : C.isGuildVocal()) && ev,
        eI = (null == C ? void 0 : C.type) === en.d4z.GUILD_VOICE,
        ef = null != (n = null == V ? void 0 : V.flags) ? n : 0,
        eN = (0, S.Z)(C);
    X || (null == ee ? void 0 : ee.invite_code) == null || (es = ee.invite_code);
    let [ej, e_] = r.useState({
            query: '',
            maxAge: null != (l = null != ea ? ea : er) ? l : eg.value,
            savedMaxAge: ea === eh.value ? (null != er ? er : eg.value) : eh.value,
            maxUses: null != eo && 0 !== eo ? eo : em.value,
            temporary: null != eu && eu,
            networkError: void 0,
            showVanityURL: ex,
            currentPage: null != b ? b : et.RV.MAIN,
            lastPage: void 0,
            flags: ef
        }),
        eE = r.useCallback((e) => {
            e_((t) => ed({}, t, e));
        }, []),
        eS = r.useCallback(
            (e) => {
                eE({
                    currentPage: e,
                    lastPage: ej.currentPage
                });
            },
            [ej.currentPage, eE]
        ),
        eb = eI && !ex && !J && !eN,
        { enabled: eT } = P.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: 'acc417_3'
            },
            { autoTrackExposure: eb }
        ),
        { maxAge: eO, maxUses: ey, temporary: eC, savedMaxAge: eP, flags: eZ } = ej,
        ew = r.useCallback(() => {
            let { currentPage: e, lastPage: t } = ej;
            e === et.RV.SETTINGS && null != t ? eS(t) : v();
        }, [eS, ej, v]),
        eA = r.useCallback(() => {
            let e = null == C ? void 0 : C.id;
            (0 === ey && 0 === eO && !eC && ex
                ? eE({
                      networkError: void 0,
                      showVanityURL: !0
                  })
                : X &&
                  null != e &&
                  (eE({
                      networkError: void 0,
                      showVanityURL: !1
                  }),
                  I.ZP.createInvite(
                      e,
                      {
                          max_age: eO,
                          max_uses: ey,
                          target_type: w,
                          target_user_id: d,
                          target_application_id: null == ei ? void 0 : ei.id,
                          temporary: eC,
                          flags: eZ
                      },
                      o
                  ).catch((e) =>
                      eE({
                          networkError: e,
                          showVanityURL: ex
                      })
                  )),
                eO !== eh.value && eP !== eh.value && eE({ savedMaxAge: eh.value }));
        }, [ex, X, C, o, null == ei ? void 0 : ei.id, w, d, eO, ey, eC, eE, eP, eZ]),
        eR = (0, N.Z)(C),
        eM = (0, N.Z)((0, H.yE)(eZ, g.$.IS_APPLICATION_BYPASS)),
        eD = null != eR && eR !== C,
        ek = null != eM && eM !== (0, H.yE)(eZ, g.$.IS_APPLICATION_BYPASS);
    r.useEffect(() => {
        !ex && (eD || ek) && eA();
    }, [eA, eD, ek, ex]);
    let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eU } = (0, K.R)(a);
    return (0, i.jsx)(_.Gt, {
        value: y,
        children: (0, i.jsx)(ep, {
            ref: t,
            canCreateInvites: X,
            noInvitesAvailable: J,
            inviteChannel: C,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ec,
            targetType: w,
            targetUserId: d,
            application: ei,
            rows: F,
            showFriends: z,
            initialCounts: q,
            code: es,
            source: o,
            welcomeToServer: x,
            analyticsLocations: y,
            analyticsLocation: O,
            transitionState: h,
            onClose: v,
            canShowVanityURL: ex,
            isGuestInviteCreationToggleEnabled: eT && eb,
            shouldHideTemporaryInviteToggle: (eT && eb) || eU,
            modalState: ej,
            setModalState: eE,
            changePage: eS,
            onGenerateNewLink: eA,
            handleDone: ew,
            isApplicationBypassToggleEnabled: eL && !J
        })
    });
});
function ex(e) {
    let { modal: t } = (0, Y._k)({ location: 'instant_invite_modal' }),
        n = t ? J.H : ev;
    return (0, i.jsx)(n, ed({}, e));
}
