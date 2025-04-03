n.d(t, { default: () => ev }), n(789020), n(47120);
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
    m = n(442837),
    x = n(902704),
    v = n(692547),
    p = n(481060),
    N = n(447543),
    I = n(247272),
    f = n(110924),
    j = n(100527),
    S = n(906732),
    E = n(835473),
    T = n(447003),
    C = n(471445),
    b = n(259473),
    _ = n(600164),
    y = n(687516),
    O = n(648159),
    P = n(227672),
    Z = n(427679),
    A = n(199902),
    w = n(662594),
    k = n(592125),
    R = n(984933),
    M = n(341165),
    W = n(751771),
    L = n(496675),
    D = n(158776),
    U = n(944486),
    V = n(594174),
    B = n(938475),
    z = n(626135),
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
    ei = n(821022),
    es = n(20493),
    er = n(264589),
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
class em extends (l = s.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: s, streamUserId: r, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: x, maxUses: v, temporary: p, flags: I } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                N.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: x,
                        max_uses: v,
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
                z.default.track(et.rMx.INVITE_SUGGESTION_OPENED, {
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
                t = (0, y.L2)(e, D.Z);
            z.default.track(et.rMx.OPEN_MODAL, {
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
                z.default.track(et.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: s
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, F.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && N.ZP.clearInviteFromStore(e.id);
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
                  className: ei.warningContainer,
                  children: [
                      (0, i.jsx)(p.P4T, {
                          size: 'custom',
                          className: ei.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
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
        let e,
            { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: s, application: r, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            m = null;
        if (((e = o ? null : null != s ? el.NW.string(el.t['6VQaqa']) : null != r ? el.NW.formatToPlainString(el.t.ZdK3dX, { applicationName: r.name }) : null != l ? el.NW.string(el.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? el.NW.string(el.t.zTrsHx) : el.NW.format(el.t.NvVBJS, { name: t.toString() })), null != d)) {
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
                                    className: a()(es.marginBottom4, ei.headerCloseButtonSpacing, ei.headerText),
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
                                className: es.marginTop8,
                                children: this.renderChannelWarning()
                            })
                        ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(p.vwX, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(es.marginReset, ei.headerCloseButtonSpacing, ei.headerText),
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
                            null != s ? (0, i.jsx)(O.Z, {}) : null,
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
        let { guild: t, showFriends: n, streamUserId: l, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, Y.Z)(null != (e = this.getInviteKey()) ? e : ''),
            a = V.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? el.NW.string(el.t.HFbByM) : el.NW.string(el.t.ueBhAw);
        return (
            null != l ? (o = el.NW.string(el.t.CXpS1N)) : null != s && (o = el.NW.string(el.t.ueCrHB)),
            (0, i.jsx)(p.hzk, {
                className: ei.noScroll,
                children: (0, i.jsxs)(_.Z, {
                    direction: _.Z.Direction.VERTICAL,
                    className: es.marginBottom20,
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
            h = (0, Y.Z)(null != (e = this.getInviteKey()) ? e : '');
        if (n) {
            let e = el.NW.string(el.t.MLkj7O);
            null != s ? (e = el.NW.string(el.t['1b9nen'])) : null != r ? (e = el.NW.string(el.t.iI1gMj)) : null != l ? (e = el.NW.string(el.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = el.NW.string(el.t['2frWa2'])),
                (c = (0, i.jsxs)(_.Z, {
                    direction: _.Z.Direction.VERTICAL,
                    className: ei.content,
                    children: [
                        (0, i.jsx)(p.vwX, {
                            tag: 'h5',
                            className: es.marginBottom8,
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
                    className: es.marginTop20,
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
                                    className: er.cursorPointer,
                                    children: (0, i.jsx)(p.ewm, {
                                        size: 'sm',
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css
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
                null == (t = this._scroller) || t.scrollTo({ to: 0 }), (0, I.C)(e), n({ query: e });
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
                    s = this.getInviteKey(),
                    r = this.props.rows[n],
                    a = ''.concat(r.type, '-').concat(r.item.id);
                switch (r.type) {
                    case G.bm.GROUP_DM:
                    case G.bm.CHANNEL:
                        return (0, i.jsx)(
                            $.d,
                            {
                                row: r,
                                channel: r.item,
                                inviteKey: s,
                                location: l
                            },
                            a
                        );
                    case G.bm.DM:
                    case G.bm.FRIEND:
                        return (0, i.jsx)(
                            $.d,
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
eo(em, 'defaultProps', {
    analyticsLocation: et.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eh.value
});
let ex = s.forwardRef(function (e, t) {
    var n, l;
    let { channel: r, guild: a, source: o, guildScheduledEvent: d, streamUserId: u, applicationId: c, transitionState: h, onClose: v, welcomeToServer: p, page: C, analyticsLocation: _ } = e,
        { analyticsLocations: y } = (0, S.ZP)(j.Z.INSTANT_INVITE_MODAL),
        O = (0, m.e7)(
            [U.Z, k.Z, R.ZP],
            () => {
                if (null != r) return r;
                let e = U.Z.getChannelId(),
                    t = null == e || (0, en.AB)(e) ? void 0 : k.Z.getChannel(e);
                return (null == t ? void 0 : t.isThread()) && (t = k.Z.getChannel(t.parent_id)), null != t ? t : R.ZP.getDefaultChannel(a.id, !0, et.Plq.CREATE_INSTANT_INVITE);
            },
            [r, a.id]
        ),
        A = null;
    null != u ? (A = ee.Iq.STREAM) : null != c && (A = ee.Iq.EMBEDDED_APPLICATION);
    let D = null != r ? r.getGuildId() : null != a ? a.id : null,
        V = (0, m.e7)(
            [M.Z],
            () => {
                let e = null != O ? O.id : null;
                return null == e
                    ? null
                    : M.Z.getInvite(e, {
                          targetType: A,
                          targetUserId: u,
                          targetApplicationId: c
                      });
            },
            [O, A, u, c]
        ),
        [z, G, H, q] = (0, m.Wu)([W.Z, B.ZP], () => [W.Z.getInviteSuggestionRows(), W.Z.getTotalSuggestionsCount() >= 1, W.Z.getInitialCounts(), null != r && null != O ? B.ZP.getVoiceStatesForChannel(O) : null], [O, r]),
        Y = (0, m.e7)(
            [w.ZP],
            () => {
                let e = null != O ? O.id : null;
                return null != D ? w.ZP.getProps(D, e) : void 0;
            },
            [O, D],
            x.Z
        ),
        X = (0, m.e7)([L.Z], () => null != O && L.Z.can(et.Plq.CREATE_INSTANT_INVITE, O), [O]),
        J = null === V || !X,
        [Q] = s.useState(() => {
            let e = new Set();
            return (
                null != u && null != q
                    ? q.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != D &&
                      null != Y &&
                      A !== ee.Iq.EMBEDDED_APPLICATION &&
                      Y.rows.forEach((t) => {
                          t.type === w.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        $ = null == r ? void 0 : r.id,
        el = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel($), [$]);
    s.useEffect(() => {
        (0, I.x)({
            omitUserIds: Q,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: A
        }).catch(et.VqG);
    }, [Q, r, a, c, A]);
    let [ei] = (0, E.Z)(null != c ? [c] : []),
        es = (0, b.Z)({ guildId: D }),
        er = null != V ? V.code : void 0,
        ea = null == V ? void 0 : V.maxAge,
        eo = null == V ? void 0 : V.maxUses,
        eu = null == V ? void 0 : V.temporary,
        ex = a.vanityURLCode,
        ev = null != ex && ex.length > 0,
        ep = !X && !(null == O ? void 0 : O.isGuildVocal()) && ev,
        eN = (null == O ? void 0 : O.type) === et.d4z.GUILD_VOICE,
        eI = null != (n = null == V ? void 0 : V.flags) ? n : 0,
        ef = (0, T.Z)(O);
    X || (null == el ? void 0 : el.invite_code) == null || (er = el.invite_code);
    let [ej, eS] = s.useState({
            query: '',
            maxAge: null != (l = null != ea ? ea : es) ? l : eh.value,
            savedMaxAge: ea === ec.value ? (null != es ? es : eh.value) : ec.value,
            maxUses: null != eo && 0 !== eo ? eo : eg.value,
            temporary: null != eu && eu,
            networkError: void 0,
            showVanityURL: ep,
            currentPage: null != C ? C : ee.RV.MAIN,
            lastPage: void 0,
            flags: eI
        }),
        eE = s.useCallback((e) => {
            eS((t) => ed({}, t, e));
        }, []),
        eT = s.useCallback(
            (e) => {
                eE({
                    currentPage: e,
                    lastPage: ej.currentPage
                });
            },
            [ej.currentPage, eE]
        ),
        eC = eN && !ep && !J && !ef,
        { enabled: eb } = P.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: 'acc417_3'
            },
            { autoTrackExposure: eC }
        ),
        { maxAge: e_, maxUses: ey, temporary: eO, savedMaxAge: eP, flags: eZ } = ej,
        eA = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = ej;
            e === ee.RV.SETTINGS && null != t ? eT(t) : v();
        }, [eT, ej, v]),
        ew = s.useCallback(() => {
            let e = null == O ? void 0 : O.id;
            0 === ey && 0 === e_ && !eO && ep
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
                  N.ZP.createInvite(
                      e,
                      {
                          max_age: e_,
                          max_uses: ey,
                          target_type: A,
                          target_user_id: u,
                          target_application_id: null == ei ? void 0 : ei.id,
                          temporary: eO,
                          flags: eZ
                      },
                      o
                  ).catch((e) =>
                      eE({
                          networkError: e,
                          showVanityURL: ep
                      })
                  )),
                e_ !== ec.value && eP !== ec.value && eE({ savedMaxAge: ec.value });
        }, [ep, X, O, o, null == ei ? void 0 : ei.id, A, u, e_, ey, eO, eE, eP, eZ]),
        ek = (0, f.Z)(O),
        eR = (0, f.Z)((0, F.yE)(eZ, g.$.IS_APPLICATION_BYPASS)),
        eM = null != ek && ek !== O,
        eW = null != eR && eR !== (0, F.yE)(eZ, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ep && (eM || eW) && ew();
    }, [ew, eM, eW, ep]);
    let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eD } = (0, K.R)(a);
    return (0, i.jsx)(S.Gt, {
        value: y,
        children: (0, i.jsx)(em, {
            ref: t,
            canCreateInvites: X,
            noInvitesAvailable: J,
            inviteChannel: O,
            guild: a,
            guildScheduledEvent: d,
            streamUserId: u,
            vanityURLCode: ex,
            targetType: A,
            targetUserId: u,
            application: ei,
            rows: z,
            showFriends: G,
            initialCounts: H,
            code: er,
            source: o,
            welcomeToServer: p,
            analyticsLocations: y,
            analyticsLocation: _,
            transitionState: h,
            onClose: v,
            canShowVanityURL: ep,
            isGuestInviteCreationToggleEnabled: eb && eC,
            shouldHideTemporaryInviteToggle: (eb && eC) || eD,
            modalState: ej,
            setModalState: eE,
            changePage: eT,
            onGenerateNewLink: ew,
            handleDone: eA,
            isApplicationBypassToggleEnabled: eL && !J
        })
    });
});
function ev(e) {
    let { enabled: t } = (0, q._k)({ location: 'instant_invite_modal' }),
        n = t ? X.H : ex;
    return (0, i.jsx)(n, ed({}, e));
}
