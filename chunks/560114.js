n.d(t, { default: () => ev }), n(789020), n(47120);
var l,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    d = n.n(o),
    u = n(392711),
    c = n.n(u),
    h = n(990547),
    g = n(533800),
    m = n(442837),
    v = n(902704),
    x = n(692547),
    p = n(481060),
    N = n(447543),
    I = n(247272),
    f = n(110924),
    j = n(100527),
    S = n(906732),
    b = n(835473),
    E = n(447003),
    C = n(471445),
    y = n(259473),
    _ = n(600164),
    T = n(687516),
    Z = n(648159),
    P = n(227672),
    w = n(427679),
    O = n(199902),
    k = n(662594),
    A = n(592125),
    R = n(984933),
    M = n(341165),
    W = n(751771),
    L = n(496675),
    U = n(158776),
    D = n(944486),
    z = n(594174),
    B = n(938475),
    V = n(626135),
    F = n(630388),
    G = n(971130),
    H = n(264229),
    q = n(340541),
    Y = n(366980),
    K = n(277364),
    X = n(265452),
    J = n(585385),
    Q = n(603236),
    $ = n(462376),
    ee = n(245335),
    et = n(981631),
    en = n(176505),
    el = n(388032),
    ei = n(724897),
    er = n(802138),
    es = n(744356),
    ea = n(622577);
function eo(e, t, n) {
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                eo(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
let { INVITE_OPTIONS_FOREVER: ec, INVITE_OPTIONS_7_DAYS: eh, INVITE_OPTIONS_UNLIMITED: eg } = G.ZP;
class em extends (l = r.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: r, streamUserId: s, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: v, maxUses: x, temporary: p, flags: I } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                N.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: x,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: p,
                        flags: I
                    },
                    l
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (h &&
                V.default.track(et.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: null == d ? void 0 : d.id
                }),
            null != s)
        ) {
            let e = O.Z.getStreamForUser(s, n.id),
                t = (0, T.L2)(e, U.Z);
            V.default.track(et.rMx.OPEN_MODAL, {
                type: 'Send Stream Invite',
                source: l,
                location: r,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null
            });
        } else
            (null == d ? void 0 : d.id) != null ||
                V.default.track(et.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: r
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, F.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && N.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
        return null == r
            ? r
            : (0, H.tV)({
                  baseCode: r,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, E.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: ei.warningContainer,
                  children: [
                      (0, i.jsx)(p.P4T, {
                          size: 'custom',
                          className: ei.warningIcon,
                          color: x.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(p.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: el.NW.string(el.t.x1SQZW)
                      })
                  ]
              })
            : null;
    }
    renderHeader() {
        let e;
        let { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            m = null;
        if (((e = o ? null : null != r ? el.NW.string(el.t['6VQaqa']) : null != s ? el.NW.formatToPlainString(el.t.ZdK3dX, { applicationName: s.name }) : null != l ? el.NW.string(el.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? el.NW.string(el.t.zTrsHx) : el.NW.format(el.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, C.KS)(d, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
                    className: ei.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: ei.channelIcon }),
                        (0, i.jsx)(p.Text, {
                            color: 'interactive-normal',
                            variant: 'text-md/normal',
                            children: d.name
                        })
                    ]
                }));
        }
        return (
            (g = t.hasFeature(et.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: ei.hubHeader,
                      children: [
                          (0, i.jsx)(p.X6q, {
                              className: a()(ei.hubInviteTitle, ei.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: el.NW.string(el.t.WhR38v)
                          }),
                          (0, i.jsx)(p.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: el.NW.string(el.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(p.E1j, {
                                  query: h,
                                  className: ei.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: el.NW.string(el.t.CmSHY2),
                                  'aria-label': el.NW.string(el.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch
                              })
                      ]
                  })
                : n
                  ? (0, i.jsxs)('div', {
                        className: ei.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: ei.__invalid_headerTopRow,
                                children: (0, i.jsx)(p.vwX, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(er.marginBottom4, ei.headerCloseButtonSpacing, ei.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(p.E1j, {
                                query: h,
                                className: ei.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: el.NW.string(el.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            }),
                            (0, i.jsx)('div', {
                                className: er.marginTop8,
                                children: this.renderChannelWarning()
                            })
                        ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(p.vwX, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(er.marginReset, ei.headerCloseButtonSpacing, ei.headerText),
                                children: e
                            }),
                            m,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(p.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: ei.closeButton,
                        children: (0, i.jsx)(p.olH, { onClick: c })
                    }),
                    (0, i.jsxs)('div', {
                        className: ei.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            className: ei.welcomeImage,
                                            src: ea,
                                            alt: ''
                                        }),
                                        (0, i.jsx)(p.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: ei.welcomeHeading,
                                            children: el.NW.string(el.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: ei.welcomeSubheading,
                                            children: el.NW.string(el.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != r ? (0, i.jsx)(Z.Z, {}) : null,
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
                  className: ei.inviteRowEmptyState,
                  children: (0, i.jsx)(p.OZU, { children: el.NW.string(el.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(p.hzk, {
                    className: ei.inviteRowEmptyState,
                    children: (0, i.jsx)(p.OZU, { children: el.NW.string(el.t.hzPwGB) })
                })
              : (0, i.jsx)(p.YAO, {
                    className: ei.scroller,
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
        let s = (0, Y.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            a = z.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? el.NW.string(el.t.HFbByM) : el.NW.string(el.t.ueBhAw);
        return (
            null != l ? (o = el.NW.string(el.t.CXpS1N)) : null != r && (o = el.NW.string(el.t.ueCrHB)),
            (0, i.jsx)(p.hzk, {
                className: ei.noScroll,
                children: (0, i.jsxs)(_.Z, {
                    direction: _.Z.Direction.VERTICAL,
                    className: er.marginBottom20,
                    children: [
                        (0, i.jsx)(p.Text, {
                            className: ei.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(
                            Q.I,
                            eu(ed({}, this.props), {
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
        let { noInvitesAvailable: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, inviteChannel: o, modalState: d } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, Y.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = el.NW.string(el.t.MLkj7O);
            null != r ? (e = el.NW.string(el.t['1b9nen'])) : null != s ? (e = el.NW.string(el.t.iI1gMj)) : null != l ? (e = el.NW.string(el.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = el.NW.string(el.t['2frWa2'])),
                (c = (0, i.jsxs)(_.Z, {
                    direction: _.Z.Direction.VERTICAL,
                    className: ei.content,
                    children: [
                        (0, i.jsx)(p.vwX, {
                            tag: 'h5',
                            className: er.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(
                            Q.I,
                            eu(ed({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: h
                            })
                        )
                    ]
                }));
        } else
            t ||
                (c = (0, i.jsxs)(_.Z, {
                    justify: _.Z.Justify.BETWEEN,
                    className: er.marginTop20,
                    children: [
                        (0, i.jsx)(p.XZJ, {
                            size: 18,
                            type: p.XZJ.Types.INVERTED,
                            value: u === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(p.Text, {
                                variant: 'text-sm/normal',
                                children: el.NW.string(el.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(p.ua7, {
                            text: el.NW.string(el.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(p.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: es.cursorPointer,
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
                      [ei.noPadding]: !n,
                      [ei.footer]: n
                  }),
                  children: c
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case ee.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                });
            case ee.RV.SETTINGS:
                return (0, i.jsx)(
                    J.D,
                    eu(ed({}, this.props), {
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
            className: this.props.showFriends ? ei.wrapper : void 0,
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
                className: ei.modal,
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        super(...e),
            eo(this, '_scroller', null),
            eo(this, '_headerId', c().uniqueId()),
            eo(this, 'openSettings', () => {
                let { changePage: e } = this.props;
                e(ee.RV.SETTINGS);
            }),
            eo(this, 'handleSelectMaxAge', (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge
                });
            }),
            eo(this, 'handleSelectMaxUses', (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            eo(this, 'handleToggleTemporary', (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            eo(this, 'handleSetInviteFlags', (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            eo(this, 'handleQueryChange', (e) => {
                var t;
                let { setModalState: n } = this.props;
                null === (t = this._scroller) || void 0 === t || t.scrollTo({ to: 0 }), (0, I.C)(e), n({ query: e });
            }),
            eo(this, 'handleClearSearch', () => {
                this.handleQueryChange('');
            }),
            eo(this, 'handleToggleMaxAge', () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n
                });
            }),
            eo(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case G.bm.CHANNEL:
                    case G.bm.GROUP_DM:
                    case G.bm.DM:
                    case G.bm.FRIEND:
                        return $.k;
                    default:
                        return 0;
                }
            }),
            eo(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    r = this.getInviteKey(),
                    s = this.props.rows[n],
                    a = ''.concat(s.type, '-').concat(s.item.id);
                switch (s.type) {
                    case G.bm.GROUP_DM:
                    case G.bm.CHANNEL:
                        return (0, i.jsx)(
                            $.d,
                            {
                                row: s,
                                channel: s.item,
                                inviteKey: r,
                                location: l
                            },
                            a
                        );
                    case G.bm.DM:
                    case G.bm.FRIEND:
                        return (0, i.jsx)(
                            $.d,
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
            });
    }
}
eo(em, 'defaultProps', {
    analyticsLocation: et.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eh.value
});
let ev = r.forwardRef(function (e, t) {
    var n, l;
    let { channel: s, guild: a, source: o, guildScheduledEvent: d, streamUserId: u, applicationId: c, transitionState: h, onClose: x, welcomeToServer: p, page: C, analyticsLocation: _ } = e,
        { analyticsLocations: T } = (0, S.ZP)(j.Z.INSTANT_INVITE_MODAL),
        Z = (0, m.e7)(
            [D.Z, A.Z, R.ZP],
            () => {
                if (null != s) return s;
                let e = D.Z.getChannelId(),
                    t = null == e || (0, en.AB)(e) ? void 0 : A.Z.getChannel(e);
                return (null == t ? void 0 : t.isThread()) && (t = A.Z.getChannel(t.parent_id)), null != t ? t : R.ZP.getDefaultChannel(a.id, !0, et.Plq.CREATE_INSTANT_INVITE);
            },
            [s, a.id]
        ),
        O = null;
    null != u ? (O = ee.Iq.STREAM) : null != c && (O = ee.Iq.EMBEDDED_APPLICATION);
    let U = null != s ? s.getGuildId() : null != a ? a.id : null,
        z = (0, m.e7)(
            [M.Z],
            () => {
                let e = null != Z ? Z.id : null;
                return null == e
                    ? null
                    : M.Z.getInvite(e, {
                          targetType: O,
                          targetUserId: u,
                          targetApplicationId: c
                      });
            },
            [Z, O, u, c]
        ),
        [V, G, H, Y] = (0, m.Wu)([W.Z, B.ZP], () => [W.Z.getInviteSuggestionRows(), W.Z.getTotalSuggestionsCount() >= 1, W.Z.getInitialCounts(), null != s && null != Z ? B.ZP.getVoiceStatesForChannel(Z) : null], [Z, s]),
        J = (0, m.e7)(
            [k.ZP],
            () => {
                let e = null != Z ? Z.id : null;
                return null != U ? k.ZP.getProps(U, e) : void 0;
            },
            [Z, U],
            v.Z
        ),
        Q = (0, m.e7)([L.Z], () => null != Z && L.Z.can(et.Plq.CREATE_INSTANT_INVITE, Z), [Z]),
        $ = null === z || !Q,
        [el] = r.useState(() => {
            let e = new Set();
            return (
                null != u && null != Y
                    ? Y.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != U &&
                      null != J &&
                      O !== ee.Iq.EMBEDDED_APPLICATION &&
                      J.rows.forEach((t) => {
                          t.type === k.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        ei = null == s ? void 0 : s.id,
        er = (0, m.e7)([w.Z], () => w.Z.getStageInstanceByChannel(ei), [ei]);
    r.useEffect(() => {
        (0, I.x)({
            omitUserIds: el,
            guild: a,
            channel: s,
            applicationId: c,
            inviteTargetType: O
        }).catch(et.VqG);
    }, [el, s, a, c, O]);
    let [es] = (0, b.Z)(null != c ? [c] : []),
        ea = (0, y.Z)({ guildId: U }),
        eo = null != z ? z.code : void 0,
        eu = null == z ? void 0 : z.maxAge,
        ev = null == z ? void 0 : z.maxUses,
        ex = null == z ? void 0 : z.temporary,
        ep = a.vanityURLCode,
        eN = null != ep && ep.length > 0,
        eI = !Q && !(null == Z ? void 0 : Z.isGuildVocal()) && eN,
        ef = (null == Z ? void 0 : Z.type) === et.d4z.GUILD_VOICE,
        ej = null !== (n = null == z ? void 0 : z.flags) && void 0 !== n ? n : 0,
        eS = (0, E.Z)(Z);
    Q || (null == er ? void 0 : er.invite_code) == null || (eo = er.invite_code);
    let [eb, eE] = r.useState({
            query: '',
            maxAge: null !== (l = null != eu ? eu : ea) && void 0 !== l ? l : eh.value,
            savedMaxAge: eu === ec.value ? (null != ea ? ea : eh.value) : ec.value,
            maxUses: null != ev && 0 !== ev ? ev : eg.value,
            temporary: null != ex && ex,
            networkError: void 0,
            showVanityURL: eI,
            currentPage: null != C ? C : ee.RV.MAIN,
            lastPage: void 0,
            flags: ej
        }),
        eC = r.useCallback((e) => {
            eE((t) => ed({}, t, e));
        }, []),
        ey = r.useCallback(
            (e) => {
                eC({
                    currentPage: e,
                    lastPage: eb.currentPage
                });
            },
            [eb.currentPage, eC]
        ),
        e_ = ef && !eI && !$ && !eS,
        { enabled: eT } = P.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: 'acc417_3'
            },
            { autoTrackExposure: e_ }
        ),
        { enabled: eZ } = (0, q._k)({ location: 'instant_invite_modal' }),
        { maxAge: eP, maxUses: ew, temporary: eO, savedMaxAge: ek, flags: eA } = eb,
        eR = r.useCallback(() => {
            let { currentPage: e, lastPage: t } = eb;
            e === ee.RV.SETTINGS && null != t ? ey(t) : x();
        }, [ey, eb, x]),
        eM = r.useCallback(() => {
            let e = null == Z ? void 0 : Z.id;
            0 === ew && 0 === eP && !eO && eI
                ? eC({
                      networkError: void 0,
                      showVanityURL: !0
                  })
                : Q &&
                  null != e &&
                  (eC({
                      networkError: void 0,
                      showVanityURL: !1
                  }),
                  N.ZP.createInvite(
                      e,
                      {
                          max_age: eP,
                          max_uses: ew,
                          target_type: O,
                          target_user_id: u,
                          target_application_id: null == es ? void 0 : es.id,
                          temporary: eO,
                          flags: eA
                      },
                      o
                  ).catch((e) =>
                      eC({
                          networkError: e,
                          showVanityURL: eI
                      })
                  )),
                eP !== ec.value && ek !== ec.value && eC({ savedMaxAge: ec.value });
        }, [eI, Q, Z, o, null == es ? void 0 : es.id, O, u, eP, ew, eO, eC, ek, eA]),
        eW = (0, f.Z)(Z),
        eL = (0, f.Z)((0, F.yE)(eA, g.$.IS_APPLICATION_BYPASS)),
        eU = null != eW && eW !== Z,
        eD = null != eL && eL !== (0, F.yE)(eA, g.$.IS_APPLICATION_BYPASS);
    r.useEffect(() => {
        !eI && (eU || eD) && eM();
    }, [eM, eU, eD, eI]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eB } = (0, K.R)(a);
    return eZ
        ? (0, i.jsx)(S.Gt, {
              value: T,
              children: (0, i.jsx)(X.H, {
                  transitionState: h,
                  onClose: x,
                  invite: null != z ? z : null,
                  canCreateInvites: Q,
                  canShowVanityURL: eI,
                  guild: a,
                  inviteChannel: null != Z ? Z : null,
                  generateInviteLink: eM,
                  rows: V,
                  error: eb.networkError
              })
          })
        : (0, i.jsx)(S.Gt, {
              value: T,
              children: (0, i.jsx)(em, {
                  ref: t,
                  canCreateInvites: Q,
                  noInvitesAvailable: $,
                  inviteChannel: Z,
                  guild: a,
                  guildScheduledEvent: d,
                  streamUserId: u,
                  vanityURLCode: ep,
                  targetType: O,
                  targetUserId: u,
                  application: es,
                  rows: V,
                  showFriends: G,
                  initialCounts: H,
                  code: eo,
                  source: o,
                  welcomeToServer: p,
                  analyticsLocations: T,
                  analyticsLocation: _,
                  transitionState: h,
                  onClose: x,
                  canShowVanityURL: eI,
                  isGuestInviteCreationToggleEnabled: eT && e_,
                  shouldHideTemporaryInviteToggle: (eT && e_) || eB,
                  modalState: eb,
                  setModalState: eC,
                  changePage: ey,
                  onGenerateNewLink: eM,
                  handleDone: eR,
                  isApplicationBypassToggleEnabled: ez && !$
              })
          });
});
