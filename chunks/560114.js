n.d(t, { default: () => eg }), n(789020), n(47120);
var l,
    i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    d = n.n(o),
    u = n(392711),
    c = n.n(u),
    h = n(990547),
    g = n(533800),
    v = n(442837),
    m = n(902704),
    x = n(692547),
    p = n(481060),
    I = n(447543),
    N = n(247272),
    S = n(110924),
    E = n(100527),
    f = n(906732),
    j = n(835473),
    T = n(447003),
    C = n(471445),
    _ = n(259473),
    y = n(600164),
    Z = n(687516),
    b = n(648159),
    w = n(227672),
    P = n(427679),
    A = n(199902),
    M = n(662594),
    O = n(592125),
    R = n(984933),
    k = n(341165),
    W = n(751771),
    U = n(496675),
    L = n(158776),
    D = n(944486),
    B = n(594174),
    V = n(938475),
    F = n(626135),
    G = n(630388),
    z = n(971130),
    H = n(264229),
    q = n(366980),
    K = n(277364),
    Y = n(585385),
    X = n(603236),
    J = n(462376),
    Q = n(245335),
    $ = n(981631),
    ee = n(176505),
    et = n(388032),
    en = n(773444),
    el = n(455812),
    ei = n(604494),
    es = n(622577);
function er(e, t, n) {
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
function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
let { INVITE_OPTIONS_FOREVER: ed, INVITE_OPTIONS_7_DAYS: eu, INVITE_OPTIONS_UNLIMITED: ec } = z.ZP;
class eh extends (l = s.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: s, streamUserId: r, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: v } = this.props,
            { maxAge: m, maxUses: x, temporary: p, flags: N } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            v({ networkError: void 0 }),
                I.Z.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: m,
                        max_uses: x,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: p,
                        flags: N
                    },
                    l
                ).catch((e) => v({ networkError: e }));
        }
        if (
            (h &&
                F.default.track($.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: null == d ? void 0 : d.id
                }),
            null != r)
        ) {
            let e = A.Z.getStreamForUser(r, n.id),
                t = (0, Z.L2)(e, L.Z);
            F.default.track($.rMx.OPEN_MODAL, {
                type: 'Send Stream Invite',
                source: l,
                location: s,
                other_user_id: r,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null
            });
        } else
            (null == d ? void 0 : d.id) != null ||
                F.default.track($.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: s
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, G.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && I.Z.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, H.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, T.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: en.warningContainer,
                  children: [
                      (0, i.jsx)(p.P4T, {
                          size: 'custom',
                          className: en.warningIcon,
                          color: x.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: et.NW.string(et.t.x1SQZW)
                      })
                  ]
              })
            : null;
    }
    renderHeader() {
        let e;
        let { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: s, application: r, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            v = null;
        if (((e = o ? null : null != s ? et.NW.string(et.t['6VQaqa']) : null != r ? et.NW.formatToPlainString(et.t.ZdK3dX, { applicationName: r.name }) : null != l ? et.NW.string(et.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? et.NW.string(et.t.zTrsHx) : et.NW.format(et.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, C.KS)(d, t);
            null != e &&
                (v = (0, i.jsxs)('div', {
                    className: en.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: en.channelIcon }),
                        (0, i.jsx)(p.Text, {
                            color: 'interactive-normal',
                            variant: 'text-md/normal',
                            children: d.name
                        })
                    ]
                }));
        }
        return (
            (g = t.hasFeature($.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: en.hubHeader,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: a()(en.hubInviteTitle, en.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: et.NW.string(et.t.WhR38v)
                          }),
                          (0, i.jsx)(p.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: et.NW.string(et.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(p.E1j, {
                                  query: h,
                                  className: en.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: et.NW.string(et.t.CmSHY2),
                                  'aria-label': et.NW.string(et.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch
                              })
                      ]
                  })
                : n
                  ? (0, i.jsxs)('div', {
                        className: en.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: en.__invalid_headerTopRow,
                                children: (0, i.jsx)(p.vwX, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(el.marginBottom4, en.headerCloseButtonSpacing, en.headerText),
                                    children: e
                                })
                            }),
                            v,
                            (0, i.jsx)(p.E1j, {
                                query: h,
                                className: en.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: et.NW.string(et.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            }),
                            (0, i.jsx)('div', {
                                className: el.marginTop8,
                                children: this.renderChannelWarning()
                            })
                        ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(p.vwX, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(el.marginReset, en.headerCloseButtonSpacing, en.headerText),
                                children: e
                            }),
                            v,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(p.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: en.closeButton,
                        children: (0, i.jsx)(p.olH, { onClick: c })
                    }),
                    (0, i.jsxs)('div', {
                        className: en.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            className: en.welcomeImage,
                                            src: es,
                                            alt: ''
                                        }),
                                        (0, i.jsx)(p.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: en.welcomeHeading,
                                            children: et.NW.string(et.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: en.welcomeSubheading,
                                            children: et.NW.string(et.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != s ? (0, i.jsx)(b.Z, {}) : null,
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
            ? (0, i.jsx)(p.hzk, {
                  className: a()(en.inviteRowEmptyState),
                  children: (0, i.jsx)(p.OZU, { children: et.NW.string(et.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(p.hzk, {
                    className: a()(en.inviteRowEmptyState),
                    children: (0, i.jsx)(p.OZU, { children: et.NW.string(et.t.hzPwGB) })
                })
              : (0, i.jsx)(p.YAO, {
                    className: en.scroller,
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
        let { guild: t, showFriends: n, streamUserId: l, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, q.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            a = B.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? et.NW.string(et.t.HFbByM) : et.NW.string(et.t.ueBhAw);
        return (
            null != l ? (o = et.NW.string(et.t.CXpS1N)) : null != s && (o = et.NW.string(et.t.ueCrHB)),
            (0, i.jsx)(p.hzk, {
                className: en.noScroll,
                children: (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: el.marginBottom20,
                    children: [
                        (0, i.jsx)(p.Text, {
                            className: en.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(
                            X.I,
                            eo(ea({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: r
                            })
                        )
                    ]
                })
            })
        );
    }
    renderFooter() {
        var e;
        let { noInvitesAvailable: t, showFriends: n, guildScheduledEvent: l, streamUserId: s, application: r, inviteChannel: o, modalState: d } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, q.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = et.NW.string(et.t.MLkj7O);
            null != s ? (e = et.NW.string(et.t['1b9nen'])) : null != r ? (e = et.NW.string(et.t.iI1gMj)) : null != l ? (e = et.NW.string(et.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = et.NW.string(et.t['2frWa2'])),
                (c = (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: en.content,
                    children: [
                        (0, i.jsx)(p.vwX, {
                            tag: 'h5',
                            className: el.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(
                            X.I,
                            eo(ea({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: h
                            })
                        )
                    ]
                }));
        } else
            t ||
                (c = (0, i.jsxs)(y.Z, {
                    justify: y.Z.Justify.BETWEEN,
                    className: el.marginTop20,
                    children: [
                        (0, i.jsx)(p.XZJ, {
                            size: 18,
                            type: p.XZJ.Types.INVERTED,
                            value: u === ed.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(p.Text, {
                                variant: 'text-sm/normal',
                                children: et.NW.string(et.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(p.ua7, {
                            text: et.NW.string(et.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(p.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ei.cursorPointer,
                                    children: (0, i.jsx)(p.ewm, {
                                        size: 'sm',
                                        color: x.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(p.mzw, {
                  className: a()({
                      [en.noPadding]: !n,
                      [en.footer]: n
                  }),
                  children: c
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case Q.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                });
            case Q.RV.SETTINGS:
                return (0, i.jsx)(
                    Y.D,
                    eo(ea({}, this.props), {
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
            className: this.props.showFriends ? en.wrapper : void 0,
            children: (0, i.jsx)(p.Y0X, {
                impression: {
                    impressionName: h.ImpressionNames.GUILD_INVITE,
                    impressionProperties: {
                        invite_channel_id: null == t ? void 0 : t.id,
                        invite_guild_id: n.id
                    }
                },
                'aria-labelledby': this._headerId,
                transitionState: e,
                className: en.modal,
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        super(...e),
            er(this, '_scroller', null),
            er(this, '_headerId', c().uniqueId()),
            er(this, 'openSettings', () => {
                let { changePage: e } = this.props;
                e(Q.RV.SETTINGS);
            }),
            er(this, 'handleSelectMaxAge', (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge
                });
            }),
            er(this, 'handleSelectMaxUses', (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            er(this, 'handleToggleTemporary', (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            er(this, 'handleSetInviteFlags', (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            er(this, 'handleQueryChange', (e) => {
                var t;
                let { setModalState: n } = this.props;
                null === (t = this._scroller) || void 0 === t || t.scrollTo({ to: 0 }), (0, N.C)(e), n({ query: e });
            }),
            er(this, 'handleClearSearch', () => {
                this.handleQueryChange('');
            }),
            er(this, 'handleToggleMaxAge', () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n
                });
            }),
            er(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case z.bm.CHANNEL:
                    case z.bm.GROUP_DM:
                    case z.bm.DM:
                    case z.bm.FRIEND:
                        return J.k;
                    default:
                        return 0;
                }
            }),
            er(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    s = this.getInviteKey(),
                    r = this.props.rows[n],
                    a = ''.concat(r.type, '-').concat(r.item.id);
                switch (r.type) {
                    case z.bm.GROUP_DM:
                    case z.bm.CHANNEL:
                        return (0, i.jsx)(
                            J.d,
                            {
                                row: r,
                                channel: r.item,
                                inviteKey: s,
                                location: l
                            },
                            a
                        );
                    case z.bm.DM:
                    case z.bm.FRIEND:
                        return (0, i.jsx)(
                            J.d,
                            {
                                row: r,
                                user: r.item,
                                inviteKey: s,
                                location: l
                            },
                            a
                        );
                    default:
                        return null;
                }
            });
    }
}
er(eh, 'defaultProps', {
    analyticsLocation: $.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eu.value
});
let eg = s.forwardRef(function (e, t) {
    var n, l;
    let { channel: r, guild: a, source: o, guildScheduledEvent: d, streamUserId: u, applicationId: c, transitionState: h, onClose: x, welcomeToServer: p, page: C, analyticsLocation: y } = e,
        { analyticsLocations: Z } = (0, f.ZP)(E.Z.INSTANT_INVITE_MODAL),
        b = (0, v.e7)(
            [D.Z, O.Z, R.ZP],
            () => {
                if (null != r) return r;
                let e = D.Z.getChannelId(),
                    t = null == e || (0, ee.AB)(e) ? void 0 : O.Z.getChannel(e);
                return (null == t ? void 0 : t.isThread()) && (t = O.Z.getChannel(t.parent_id)), null != t ? t : R.ZP.getDefaultChannel(a.id, !0, $.Plq.CREATE_INSTANT_INVITE);
            },
            [r, a.id]
        ),
        A = null;
    null != u ? (A = Q.Iq.STREAM) : null != c && (A = Q.Iq.EMBEDDED_APPLICATION);
    let L = null != r ? r.getGuildId() : null != a ? a.id : null,
        B = (0, v.e7)(
            [k.Z],
            () => {
                let e = null != b ? b.id : null;
                return null == e
                    ? null
                    : k.Z.getInvite(e, {
                          targetType: A,
                          targetUserId: u,
                          targetApplicationId: c
                      });
            },
            [b, A, u, c]
        ),
        [F, z, H, q] = (0, v.Wu)([W.Z, V.ZP], () => [W.Z.getInviteSuggestionRows(), W.Z.getTotalSuggestionsCount() >= 1, W.Z.getInitialCounts(), null != r && null != b ? V.ZP.getVoiceStatesForChannel(b) : null], [b, r]),
        Y = (0, v.e7)(
            [M.ZP],
            () => {
                let e = null != b ? b.id : null;
                return null != L ? M.ZP.getProps(L, e) : void 0;
            },
            [b, L],
            m.Z
        ),
        X = (0, v.e7)([U.Z], () => null != b && U.Z.can($.Plq.CREATE_INSTANT_INVITE, b), [b]),
        J = null === B || !X,
        [et] = s.useState(() => {
            let e = new Set();
            return (
                null != u && null != q
                    ? q.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != L &&
                      null != Y &&
                      A !== Q.Iq.EMBEDDED_APPLICATION &&
                      Y.rows.forEach((t) => {
                          t.type === M.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        en = null == r ? void 0 : r.id,
        el = (0, v.e7)([P.Z], () => P.Z.getStageInstanceByChannel(en), [en]);
    s.useEffect(() => {
        (0, N.x)({
            omitUserIds: et,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: A
        }).catch($.VqG);
    }, [et, r, a, c, A]);
    let [ei] = (0, j.Z)(null != c ? [c] : []),
        es = (0, _.Z)({ guildId: L }),
        er = null != B ? B.code : void 0,
        eo = null == B ? void 0 : B.maxAge,
        eg = null == B ? void 0 : B.maxUses,
        ev = null == B ? void 0 : B.temporary,
        em = a.vanityURLCode,
        ex = null != em && em.length > 0,
        ep = !X && !(null == b ? void 0 : b.isGuildVocal()) && ex,
        eI = (null == b ? void 0 : b.type) === $.d4z.GUILD_VOICE,
        eN = null !== (n = null == B ? void 0 : B.flags) && void 0 !== n ? n : 0,
        eS = (0, T.Z)(b);
    X || (null == el ? void 0 : el.invite_code) == null || (er = el.invite_code);
    let [eE, ef] = s.useState({
            query: '',
            maxAge: null !== (l = null != eo ? eo : es) && void 0 !== l ? l : eu.value,
            savedMaxAge: eo === ed.value ? (null != es ? es : eu.value) : ed.value,
            maxUses: null != eg && 0 !== eg ? eg : ec.value,
            temporary: null != ev && ev,
            networkError: void 0,
            showVanityURL: ep,
            currentPage: null != C ? C : Q.RV.MAIN,
            lastPage: void 0,
            flags: eN
        }),
        ej = s.useCallback((e) => {
            ef((t) => ea({}, t, e));
        }, []),
        eT = s.useCallback(
            (e) => {
                ej({
                    currentPage: e,
                    lastPage: eE.currentPage
                });
            },
            [eE.currentPage, ej]
        ),
        eC = eI && !ep && !J && !eS,
        { enabled: e_ } = w.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: 'acc417_3'
            },
            { autoTrackExposure: eC }
        ),
        { maxAge: ey, maxUses: eZ, temporary: eb, savedMaxAge: ew, flags: eP } = eE,
        eA = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eE;
            e === Q.RV.SETTINGS && null != t ? eT(t) : x();
        }, [eT, eE, x]),
        eM = s.useCallback(() => {
            let e = null == b ? void 0 : b.id;
            0 === eZ && 0 === ey && !eb && ep
                ? ej({
                      networkError: void 0,
                      showVanityURL: !0
                  })
                : X &&
                  null != e &&
                  (ej({
                      networkError: void 0,
                      showVanityURL: !1
                  }),
                  I.Z.createInvite(
                      e,
                      {
                          max_age: ey,
                          max_uses: eZ,
                          target_type: A,
                          target_user_id: u,
                          target_application_id: null == ei ? void 0 : ei.id,
                          temporary: eb,
                          flags: eP
                      },
                      o
                  ).catch((e) =>
                      ej({
                          networkError: e,
                          showVanityURL: ep
                      })
                  )),
                ey !== ed.value && ew !== ed.value && ej({ savedMaxAge: ed.value });
        }, [ep, X, b, o, null == ei ? void 0 : ei.id, A, u, ey, eZ, eb, ej, ew, eP]),
        eO = (0, S.Z)(b),
        eR = (0, S.Z)((0, G.yE)(eP, g.$.IS_APPLICATION_BYPASS)),
        ek = null != eO && eO !== b,
        eW = null != eR && eR !== (0, G.yE)(eP, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ep && (ek || eW) && eM();
    }, [eM, ek, eW, ep]);
    let { canCreateApplicationBypassInvites: eU, isManualApprovalGuild: eL } = (0, K.R)(a);
    return (0, i.jsx)(f.Gt, {
        value: Z,
        children: (0, i.jsx)(eh, {
            ref: t,
            canCreateInvites: X,
            noInvitesAvailable: J,
            inviteChannel: b,
            guild: a,
            guildScheduledEvent: d,
            streamUserId: u,
            vanityURLCode: em,
            targetType: A,
            targetUserId: u,
            application: ei,
            rows: F,
            showFriends: z,
            initialCounts: H,
            code: er,
            source: o,
            welcomeToServer: p,
            analyticsLocations: Z,
            analyticsLocation: y,
            transitionState: h,
            onClose: x,
            canShowVanityURL: ep,
            isGuestInviteCreationToggleEnabled: e_ && eC,
            shouldHideTemporaryInviteToggle: (e_ && eC) || eL,
            modalState: eE,
            setModalState: ej,
            changePage: eT,
            onGenerateNewLink: eM,
            handleDone: eA,
            isApplicationBypassToggleEnabled: eU && !J
        })
    });
});
