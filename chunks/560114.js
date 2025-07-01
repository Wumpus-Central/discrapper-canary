(n.d(t, { default: () => ev }), n(997841), n(388685));
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
    I = n(481060),
    x = n(447543),
    f = n(247272),
    j = n(110924),
    N = n(100527),
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
    w = n(199902),
    A = n(662594),
    R = n(592125),
    M = n(984933),
    k = n(341165),
    D = n(751771),
    L = n(496675),
    U = n(158776),
    V = n(944486),
    F = n(594174),
    B = n(938475),
    G = n(626135),
    z = n(630388),
    H = n(971130),
    q = n(264229),
    W = n(340541),
    Y = n(366980),
    X = n(277364),
    K = n(265452),
    J = n(585385),
    Q = n(603236),
    $ = n(462376),
    ee = n(245335),
    et = n(981631),
    en = n(176505),
    el = n(388032),
    ei = n(821022),
    er = n(20493),
    es = n(264589),
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
function eu(e) {
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
                eo(e, t, n[t]);
            }));
    }
    return e;
}
function ed(e, t) {
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
let { INVITE_OPTIONS_FOREVER: ec, INVITE_OPTIONS_7_DAYS: eh, INVITE_OPTIONS_UNLIMITED: eg } = H.ZP;
class em extends (l = r.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: r, streamUserId: s, targetType: a, targetUserId: o, application: u, initialCounts: d, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: p, maxUses: v, temporary: I, flags: f } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            (m({ networkError: void 0 }),
                x.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: v,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: I,
                        flags: f
                    },
                    l
                ).catch((e) => m({ networkError: e })));
        }
        if (
            (h &&
                G.default.track(et.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = w.Z.getStreamForUser(s, n.id),
                t = (0, y.L2)(e, U.Z);
            G.default.track(et.rMx.OPEN_MODAL, {
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
                G.default.track(et.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: r
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, z.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && x.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
        return null == r
            ? r
            : (0, q.tV)({
                  baseCode: r,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, S.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: ei.warningContainer,
                  children: [
                      (0, i.jsx)(I.P4T, {
                          size: 'custom',
                          className: ei.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(I.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: el.intl.string(el.t.x1SQZW)
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
        if (((e = o ? null : null != r ? el.intl.string(el.t['6VQaqa']) : null != s ? el.intl.formatToPlainString(el.t.ZdK3dX, { applicationName: s.name }) : null != l ? el.intl.string(el.t.JKV4FB) : (null == u ? void 0 : u.isGuildStageVoice()) ? el.intl.string(el.t.zTrsHx) : el.intl.format(el.t.NvVBJS, { name: t.toString() })), null != u)) {
            let e = (0, b.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
                    className: ei.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: ei.channelIcon }),
                        (0, i.jsx)(I.Text, {
                            color: 'interactive-normal',
                            variant: 'text-md/normal',
                            children: u.name
                        })
                    ]
                }));
        }
        return (
            (g = t.hasFeature(et.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: ei.hubHeader,
                      children: [
                          (0, i.jsx)(I.X6q, {
                              className: a()(ei.hubInviteTitle, ei.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: el.intl.string(el.t.WhR38v)
                          }),
                          (0, i.jsx)(I.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: el.intl.string(el.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(I.E1j, {
                                  query: h,
                                  className: ei.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: el.intl.string(el.t.CmSHY2),
                                  'aria-label': el.intl.string(el.t.CmSHY2),
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
                                children: (0, i.jsx)(I.vwX, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(er.marginBottom4, ei.headerCloseButtonSpacing, ei.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(I.E1j, {
                                query: h,
                                className: ei.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: el.intl.string(el.t.CmSHY2),
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
                            (0, i.jsx)(I.vwX, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(er.marginReset, ei.headerCloseButtonSpacing, ei.headerText),
                                children: e
                            }),
                            m,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(I.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: ei.closeButton,
                        children: (0, i.jsx)(I.olH, { onClick: c })
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
                                        (0, i.jsx)(I.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: ei.welcomeHeading,
                                            children: el.intl.string(el.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(I.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: ei.welcomeSubheading,
                                            children: el.intl.string(el.t['wJ/ouL'])
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
            ? (0, i.jsx)(I.hzk, {
                  className: ei.inviteRowEmptyState,
                  children: (0, i.jsx)(I.OZU, { children: el.intl.string(el.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(I.hzk, {
                    className: ei.inviteRowEmptyState,
                    children: (0, i.jsx)(I.OZU, { children: el.intl.string(el.t.hzPwGB) })
                })
              : (0, i.jsx)(I.YAO, {
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
        let s = (0, Y.Z)(null != (e = this.getInviteKey()) ? e : ''),
            a = F.default.getCurrentUser();
        u()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? el.intl.string(el.t.HFbByM) : el.intl.string(el.t.ueBhAw);
        return (
            null != l ? (o = el.intl.string(el.t.CXpS1N)) : null != r && (o = el.intl.string(el.t.ueCrHB)),
            (0, i.jsx)(I.hzk, {
                className: ei.noScroll,
                children: (0, i.jsxs)(O.Z, {
                    direction: O.Z.Direction.VERTICAL,
                    className: er.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Text, {
                            className: ei.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(
                            Q.I,
                            ed(eu({}, this.props), {
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
            h = (0, Y.Z)(null != (e = this.getInviteKey()) ? e : '');
        if (n) {
            let e = el.intl.string(el.t.MLkj7O);
            (null != r ? (e = el.intl.string(el.t['1b9nen'])) : null != s ? (e = el.intl.string(el.t.iI1gMj)) : null != l ? (e = el.intl.string(el.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = el.intl.string(el.t['2frWa2'])),
                (c = (0, i.jsxs)(O.Z, {
                    direction: O.Z.Direction.VERTICAL,
                    className: ei.content,
                    children: [
                        (0, i.jsx)(I.vwX, {
                            tag: 'h5',
                            className: er.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(
                            Q.I,
                            ed(eu({}, this.props), {
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
                    className: er.marginTop20,
                    children: [
                        (0, i.jsx)(I.XZJ, {
                            size: 18,
                            type: I.XZJ.Types.INVERTED,
                            value: d === ec.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(I.Text, {
                                variant: 'text-sm/normal',
                                children: el.intl.string(el.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(I.ua7, {
                            text: el.intl.string(el.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(I.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: es.cursorPointer,
                                    children: (0, i.jsx)(I.ewm, {
                                        size: 'sm',
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(I.mzw, {
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
                    ed(eu({}, this.props), {
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
            children: (0, i.jsx)(I.Y0X, {
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
                parentComponent: 'InstantInvite',
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        (super(...e),
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
                (null == (t = this._scroller) || t.scrollTo({ to: 0 }), (0, f.C)(e), n({ query: e }));
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
                    case H.bm.CHANNEL:
                    case H.bm.GROUP_DM:
                    case H.bm.DM:
                    case H.bm.FRIEND:
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
                    case H.bm.GROUP_DM:
                    case H.bm.CHANNEL:
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
                    case H.bm.DM:
                    case H.bm.FRIEND:
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
            }));
    }
}
eo(em, 'defaultProps', {
    analyticsLocation: et.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eh.value
});
let ep = r.forwardRef(function (e, t) {
    var n, l;
    let { channel: s, guild: a, source: o, guildScheduledEvent: u, streamUserId: d, applicationId: c, transitionState: h, onClose: v, welcomeToServer: I, page: b, analyticsLocation: O } = e,
        { analyticsLocations: y } = (0, _.ZP)(N.Z.INSTANT_INVITE_MODAL),
        C = (0, m.e7)(
            [V.Z, R.Z, M.ZP],
            () => {
                if (null != s) return s;
                let e = V.Z.getChannelId(),
                    t = null == e || (0, en.AB)(e) ? void 0 : R.Z.getChannel(e);
                return ((null == t ? void 0 : t.isThread()) && (t = R.Z.getChannel(t.parent_id)), null != t ? t : M.ZP.getDefaultChannel(a.id, !0, et.Plq.CREATE_INSTANT_INVITE));
            },
            [s, a.id]
        ),
        w = null;
    null != d ? (w = ee.Iq.STREAM) : null != c && (w = ee.Iq.EMBEDDED_APPLICATION);
    let U = null != s ? s.getGuildId() : null != a ? a.id : null,
        F = (0, m.e7)(
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
        [G, H, q, W] = (0, m.Wu)([D.Z, B.ZP], () => [D.Z.getInviteSuggestionRows(), D.Z.getTotalSuggestionsCount() >= 1, D.Z.getInitialCounts(), null != s && null != C ? B.ZP.getVoiceStatesForChannel(C) : null], [C, s]),
        Y = (0, m.e7)(
            [A.ZP],
            () => {
                let e = null != C ? C.id : null;
                return null != U ? A.ZP.getProps(U, e) : void 0;
            },
            [C, U],
            p.Z
        ),
        K = (0, m.e7)([L.Z], () => null != C && L.Z.can(et.Plq.CREATE_INSTANT_INVITE, C), [C]),
        J = null === F || !K,
        [Q] = r.useState(() => {
            let e = new Set();
            return (
                null != d && null != W
                    ? W.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != U &&
                      null != Y &&
                      w !== ee.Iq.EMBEDDED_APPLICATION &&
                      Y.rows.forEach((t) => {
                          t.type === A.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        $ = null == s ? void 0 : s.id,
        el = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel($), [$]);
    r.useEffect(() => {
        (0, f.x)({
            omitUserIds: Q,
            guild: a,
            channel: s,
            applicationId: c,
            inviteTargetType: w
        }).catch(et.VqG);
    }, [Q, s, a, c, w]);
    let [ei] = (0, E.Z)(null != c ? [c] : []),
        er = (0, T.Z)({ guildId: U }),
        es = null != F ? F.code : void 0,
        ea = null == F ? void 0 : F.maxAge,
        eo = null == F ? void 0 : F.maxUses,
        ed = null == F ? void 0 : F.temporary,
        ep = a.vanityURLCode,
        ev = null != ep && ep.length > 0,
        eI = !K && !(null == C ? void 0 : C.isGuildVocal()) && ev,
        ex = (null == C ? void 0 : C.type) === et.d4z.GUILD_VOICE,
        ef = null != (n = null == F ? void 0 : F.flags) ? n : 0,
        ej = (0, S.Z)(C);
    K || (null == el ? void 0 : el.invite_code) == null || (es = el.invite_code);
    let [eN, e_] = r.useState({
            query: '',
            maxAge: null != (l = null != ea ? ea : er) ? l : eh.value,
            savedMaxAge: ea === ec.value ? (null != er ? er : eh.value) : ec.value,
            maxUses: null != eo && 0 !== eo ? eo : eg.value,
            temporary: null != ed && ed,
            networkError: void 0,
            showVanityURL: eI,
            currentPage: null != b ? b : ee.RV.MAIN,
            lastPage: void 0,
            flags: ef
        }),
        eE = r.useCallback((e) => {
            e_((t) => eu({}, t, e));
        }, []),
        eS = r.useCallback(
            (e) => {
                eE({
                    currentPage: e,
                    lastPage: eN.currentPage
                });
            },
            [eN.currentPage, eE]
        ),
        eb = ex && !eI && !J && !ej,
        { enabled: eT } = P.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: 'acc417_3'
            },
            { autoTrackExposure: eb }
        ),
        { maxAge: eO, maxUses: ey, temporary: eC, savedMaxAge: eP, flags: eZ } = eN,
        ew = r.useCallback(() => {
            let { currentPage: e, lastPage: t } = eN;
            e === ee.RV.SETTINGS && null != t ? eS(t) : v();
        }, [eS, eN, v]),
        eA = r.useCallback(() => {
            let e = null == C ? void 0 : C.id;
            (0 === ey && 0 === eO && !eC && eI
                ? eE({
                      networkError: void 0,
                      showVanityURL: !0
                  })
                : K &&
                  null != e &&
                  (eE({
                      networkError: void 0,
                      showVanityURL: !1
                  }),
                  x.ZP.createInvite(
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
                          showVanityURL: eI
                      })
                  )),
                eO !== ec.value && eP !== ec.value && eE({ savedMaxAge: ec.value }));
        }, [eI, K, C, o, null == ei ? void 0 : ei.id, w, d, eO, ey, eC, eE, eP, eZ]),
        eR = (0, j.Z)(C),
        eM = (0, j.Z)((0, z.yE)(eZ, g.$.IS_APPLICATION_BYPASS)),
        ek = null != eR && eR !== C,
        eD = null != eM && eM !== (0, z.yE)(eZ, g.$.IS_APPLICATION_BYPASS);
    r.useEffect(() => {
        !eI && (ek || eD) && eA();
    }, [eA, ek, eD, eI]);
    let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eU } = (0, X.R)(a);
    return (0, i.jsx)(_.Gt, {
        value: y,
        children: (0, i.jsx)(em, {
            ref: t,
            canCreateInvites: K,
            noInvitesAvailable: J,
            inviteChannel: C,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ep,
            targetType: w,
            targetUserId: d,
            application: ei,
            rows: G,
            showFriends: H,
            initialCounts: q,
            code: es,
            source: o,
            welcomeToServer: I,
            analyticsLocations: y,
            analyticsLocation: O,
            transitionState: h,
            onClose: v,
            canShowVanityURL: eI,
            isGuestInviteCreationToggleEnabled: eT && eb,
            shouldHideTemporaryInviteToggle: (eT && eb) || eU,
            modalState: eN,
            setModalState: eE,
            changePage: eS,
            onGenerateNewLink: eA,
            handleDone: ew,
            isApplicationBypassToggleEnabled: eL && !J
        })
    });
});
function ev(e) {
    let { modal: t } = (0, W._k)({ location: 'instant_invite_modal' }),
        n = t ? K.H : ep;
    return (0, i.jsx)(n, eu({}, e));
}
