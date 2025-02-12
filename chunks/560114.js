n.d(t, { default: () => ec }), n(789020), n(47120);
var l,
    i = n(200651),
    s = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(512722),
    d = n.n(o),
    u = n(392711),
    c = n.n(u),
    h = n(990547),
    g = n(533800),
    v = n(442837),
    m = n(902704),
    x = n(692547),
    I = n(481060),
    p = n(447543),
    S = n(247272),
    N = n(110924),
    E = n(100527),
    T = n(906732),
    C = n(835473),
    _ = n(447003),
    f = n(471445),
    j = n(259473),
    Z = n(600164),
    y = n(687516),
    A = n(648159),
    w = n(227672),
    M = n(427679),
    P = n(199902),
    R = n(662594),
    b = n(592125),
    k = n(984933),
    U = n(341165),
    L = n(751771),
    B = n(496675),
    V = n(158776),
    O = n(944486),
    D = n(594174),
    F = n(938475),
    G = n(626135),
    z = n(630388),
    H = n(971130),
    q = n(264229),
    W = n(366980),
    K = n(277364),
    Y = n(585385),
    X = n(603236),
    J = n(462376),
    Q = n(245335),
    $ = n(981631),
    ee = n(176505),
    et = n(388032),
    en = n(575126),
    el = n(814632),
    ei = n(968857),
    es = n(622577);
function ea(e, t, n) {
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
let { INVITE_OPTIONS_FOREVER: er, INVITE_OPTIONS_7_DAYS: eo, INVITE_OPTIONS_UNLIMITED: ed } = H.ZP;
class eu extends (l = s.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: s, streamUserId: a, targetType: r, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: v } = this.props,
            { maxAge: m, maxUses: x, temporary: I, flags: S } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            v({ networkError: void 0 }),
                p.Z.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: m,
                        max_uses: x,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: I,
                        flags: S
                    },
                    l
                ).catch((e) => v({ networkError: e }));
        }
        if (
            (h &&
                G.default.track($.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: null == d ? void 0 : d.id
                }),
            null != a)
        ) {
            let e = P.Z.getStreamForUser(a, n.id),
                t = (0, y.L2)(e, V.Z);
            G.default.track($.rMx.OPEN_MODAL, {
                type: 'Send Stream Invite',
                source: l,
                location: s,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null
            });
        } else
            (null == d ? void 0 : d.id) != null ||
                G.default.track($.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: s
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, z.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && p.Z.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, q.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, _.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: en.warningContainer,
                  children: [
                      (0, i.jsx)(I.P4T, {
                          size: 'custom',
                          className: en.warningIcon,
                          color: x.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(I.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: et.intl.string(et.t.x1SQZW)
                      })
                  ]
              })
            : null;
    }
    renderHeader() {
        let e;
        let { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: s, application: a, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            v = null;
        if (((e = o ? null : null != s ? et.intl.string(et.t['6VQaqa']) : null != a ? et.intl.formatToPlainString(et.t.ZdK3dX, { applicationName: a.name }) : null != l ? et.intl.string(et.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? et.intl.string(et.t.zTrsHx) : et.intl.format(et.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, f.KS)(d, t);
            null != e &&
                (v = (0, i.jsxs)('div', {
                    className: en.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: en.channelIcon }),
                        (0, i.jsx)(I.Text, {
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
                          (0, i.jsx)(I.X6q, {
                              className: r()(en.hubInviteTitle, en.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: et.intl.string(et.t.WhR38v)
                          }),
                          (0, i.jsx)(I.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: et.intl.string(et.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(I.E1j, {
                                  query: h,
                                  className: en.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: et.intl.string(et.t.CmSHY2),
                                  'aria-label': et.intl.string(et.t.CmSHY2),
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
                                children: (0, i.jsx)(I.vwX, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: r()(el.marginBottom4, en.headerCloseButtonSpacing, en.headerText),
                                    children: e
                                })
                            }),
                            v,
                            (0, i.jsx)(I.E1j, {
                                query: h,
                                className: en.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: et.intl.string(et.t.CmSHY2),
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
                            (0, i.jsx)(I.vwX, {
                                id: this._headerId,
                                tag: 'h2',
                                className: r()(el.marginReset, en.headerCloseButtonSpacing, en.headerText),
                                children: e
                            }),
                            v,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(I.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: en.closeButton,
                        children: (0, i.jsx)(I.olH, { onClick: c })
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
                                        (0, i.jsx)(I.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: en.welcomeHeading,
                                            children: et.intl.string(et.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(I.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: en.welcomeSubheading,
                                            children: et.intl.string(et.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != s ? (0, i.jsx)(A.Z, {}) : null,
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
                  className: r()(en.inviteRowEmptyState),
                  children: (0, i.jsx)(I.OZU, { children: et.intl.string(et.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(I.hzk, {
                    className: r()(en.inviteRowEmptyState),
                    children: (0, i.jsx)(I.OZU, { children: et.intl.string(et.t.hzPwGB) })
                })
              : (0, i.jsx)(I.YAO, {
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
        let a = (0, W.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            r = D.default.getCurrentUser();
        d()(null != r, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(r) ? et.intl.string(et.t.HFbByM) : et.intl.string(et.t.ueBhAw);
        return (
            null != l ? (o = et.intl.string(et.t.CXpS1N)) : null != s && (o = et.intl.string(et.t.ueCrHB)),
            (0, i.jsx)(I.hzk, {
                className: en.noScroll,
                children: (0, i.jsxs)(Z.Z, {
                    direction: Z.Z.Direction.VERTICAL,
                    className: el.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Text, {
                            className: en.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(X.I, {
                            ...this.props,
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: a
                        })
                    ]
                })
            })
        );
    }
    renderFooter() {
        var e;
        let { noInvitesAvailable: t, showFriends: n, guildScheduledEvent: l, streamUserId: s, application: a, inviteChannel: o, modalState: d } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, W.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = et.intl.string(et.t.MLkj7O);
            null != s ? (e = et.intl.string(et.t['1b9nen'])) : null != a ? (e = et.intl.string(et.t.iI1gMj)) : null != l ? (e = et.intl.string(et.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = et.intl.string(et.t['2frWa2'])),
                (c = (0, i.jsxs)(Z.Z, {
                    direction: Z.Z.Direction.VERTICAL,
                    className: en.content,
                    children: [
                        (0, i.jsx)(I.vwX, {
                            tag: 'h5',
                            className: el.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(X.I, {
                            ...this.props,
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: h
                        })
                    ]
                }));
        } else
            t ||
                (c = (0, i.jsxs)(Z.Z, {
                    justify: Z.Z.Justify.BETWEEN,
                    className: el.marginTop20,
                    children: [
                        (0, i.jsx)(I.XZJ, {
                            size: 18,
                            type: I.XZJ.Types.INVERTED,
                            value: u === er.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(I.Text, {
                                variant: 'text-sm/normal',
                                children: et.intl.string(et.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(I.ua7, {
                            text: et.intl.string(et.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(I.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ei.cursorPointer,
                                    children: (0, i.jsx)(I.ewm, {
                                        size: 'sm',
                                        color: x.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(I.mzw, {
                  className: r()({
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
                return (0, i.jsx)(Y.D, {
                    ...this.props,
                    onSetInviteFlags: this.handleSetInviteFlags,
                    headerId: this._headerId,
                    onSelectMaxAge: this.handleSelectMaxAge,
                    onSelectMaxUses: this.handleSelectMaxUses,
                    onToggleTemporary: this.handleToggleTemporary,
                    handleDone: t
                });
            default:
                return null;
        }
    }
    render() {
        let { transitionState: e, inviteChannel: t, guild: n } = this.props;
        return (0, i.jsx)('div', {
            className: this.props.showFriends ? en.wrapper : void 0,
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
                className: en.modal,
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        super(...e),
            ea(this, '_scroller', null),
            ea(this, '_headerId', c().uniqueId()),
            ea(this, 'openSettings', () => {
                let { changePage: e } = this.props;
                e(Q.RV.SETTINGS);
            }),
            ea(this, 'handleSelectMaxAge', (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge
                });
            }),
            ea(this, 'handleSelectMaxUses', (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            ea(this, 'handleToggleTemporary', (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            ea(this, 'handleSetInviteFlags', (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            ea(this, 'handleQueryChange', (e) => {
                var t;
                let { setModalState: n } = this.props;
                null === (t = this._scroller) || void 0 === t || t.scrollTo({ to: 0 }), (0, S.C)(e), n({ query: e });
            }),
            ea(this, 'handleClearSearch', () => {
                this.handleQueryChange('');
            }),
            ea(this, 'handleToggleMaxAge', () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n
                });
            }),
            ea(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case H.bm.CHANNEL:
                    case H.bm.GROUP_DM:
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return J.k;
                    default:
                        return 0;
                }
            }),
            ea(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    s = this.getInviteKey(),
                    a = this.props.rows[n],
                    r = ''.concat(a.type, '-').concat(a.item.id);
                switch (a.type) {
                    case H.bm.GROUP_DM:
                    case H.bm.CHANNEL:
                        return (0, i.jsx)(
                            J.d,
                            {
                                row: a,
                                channel: a.item,
                                inviteKey: s,
                                location: l
                            },
                            r
                        );
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return (0, i.jsx)(
                            J.d,
                            {
                                row: a,
                                user: a.item,
                                inviteKey: s,
                                location: l
                            },
                            r
                        );
                    default:
                        return null;
                }
            });
    }
}
ea(eu, 'defaultProps', {
    analyticsLocation: $.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eo.value
});
let ec = s.forwardRef(function (e, t) {
    var n, l;
    let { channel: a, guild: r, source: o, guildScheduledEvent: d, streamUserId: u, applicationId: c, transitionState: h, onClose: x, welcomeToServer: I, page: f, analyticsLocation: Z } = e,
        { analyticsLocations: y } = (0, T.ZP)(E.Z.INSTANT_INVITE_MODAL),
        A = (0, v.e7)(
            [O.Z, b.Z, k.ZP],
            () => {
                if (null != a) return a;
                let e = O.Z.getChannelId(),
                    t = null == e || (0, ee.AB)(e) ? void 0 : b.Z.getChannel(e);
                return (null == t ? void 0 : t.isThread()) && (t = b.Z.getChannel(t.parent_id)), null != t ? t : k.ZP.getDefaultChannel(r.id, !0, $.Plq.CREATE_INSTANT_INVITE);
            },
            [a, r.id]
        ),
        P = null;
    null != u ? (P = Q.Iq.STREAM) : null != c && (P = Q.Iq.EMBEDDED_APPLICATION);
    let V = null != a ? a.getGuildId() : null != r ? r.id : null,
        D = (0, v.e7)(
            [U.Z],
            () => {
                let e = null != A ? A.id : null;
                return null == e
                    ? null
                    : U.Z.getInvite(e, {
                          targetType: P,
                          targetUserId: u,
                          targetApplicationId: c
                      });
            },
            [A, P, u, c]
        ),
        [G, H, q, W] = (0, v.Wu)([L.Z, F.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != a && null != A ? F.ZP.getVoiceStatesForChannel(A) : null], [A, a]),
        Y = (0, v.e7)(
            [R.ZP],
            () => {
                let e = null != A ? A.id : null;
                return null != V ? R.ZP.getProps(V, e) : void 0;
            },
            [A, V],
            m.Z
        ),
        X = (0, v.e7)([B.Z], () => null != A && B.Z.can($.Plq.CREATE_INSTANT_INVITE, A), [A]),
        J = null === D || !X,
        [et] = s.useState(() => {
            let e = new Set();
            return (
                null != u && null != W
                    ? W.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != V &&
                      null != Y &&
                      P !== Q.Iq.EMBEDDED_APPLICATION &&
                      Y.rows.forEach((t) => {
                          t.type === R.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        en = null == a ? void 0 : a.id,
        el = (0, v.e7)([M.Z], () => M.Z.getStageInstanceByChannel(en), [en]);
    s.useEffect(() => {
        (0, S.x)({
            omitUserIds: et,
            guild: r,
            channel: a,
            applicationId: c,
            inviteTargetType: P
        }).catch($.VqG);
    }, [et, a, r, c, P]);
    let [ei] = (0, C.Z)(null != c ? [c] : []),
        es = (0, j.Z)({ guildId: V }),
        ea = null != D ? D.code : void 0,
        ec = null == D ? void 0 : D.maxAge,
        eh = null == D ? void 0 : D.maxUses,
        eg = null == D ? void 0 : D.temporary,
        ev = r.vanityURLCode,
        em = null != ev && ev.length > 0,
        ex = !X && !(null == A ? void 0 : A.isGuildVocal()) && em,
        eI = (null == A ? void 0 : A.type) === $.d4z.GUILD_VOICE,
        ep = null !== (n = null == D ? void 0 : D.flags) && void 0 !== n ? n : 0,
        eS = (0, _.Z)(A);
    X || (null == el ? void 0 : el.invite_code) == null || (ea = el.invite_code);
    let [eN, eE] = s.useState({
            query: '',
            maxAge: null !== (l = null != ec ? ec : es) && void 0 !== l ? l : eo.value,
            savedMaxAge: ec === er.value ? (null != es ? es : eo.value) : er.value,
            maxUses: null != eh && 0 !== eh ? eh : ed.value,
            temporary: null != eg && eg,
            networkError: void 0,
            showVanityURL: ex,
            currentPage: null != f ? f : Q.RV.MAIN,
            lastPage: void 0,
            flags: ep
        }),
        eT = s.useCallback((e) => {
            eE((t) => ({
                ...t,
                ...e
            }));
        }, []),
        eC = s.useCallback(
            (e) => {
                eT({
                    currentPage: e,
                    lastPage: eN.currentPage
                });
            },
            [eN.currentPage, eT]
        ),
        e_ = eI && !ex && !J && !eS,
        { enabled: ef } = w.o.useExperiment(
            {
                guildId: null == r ? void 0 : r.id,
                location: 'acc417_3'
            },
            { autoTrackExposure: e_ }
        ),
        { maxAge: ej, maxUses: eZ, temporary: ey, savedMaxAge: eA, flags: ew } = eN,
        eM = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eN;
            e === Q.RV.SETTINGS && null != t ? eC(t) : x();
        }, [eC, eN, x]),
        eP = s.useCallback(() => {
            let e = null == A ? void 0 : A.id;
            0 === eZ && 0 === ej && !ey && ex
                ? eT({
                      networkError: void 0,
                      showVanityURL: !0
                  })
                : X &&
                  null != e &&
                  (eT({
                      networkError: void 0,
                      showVanityURL: !1
                  }),
                  p.Z.createInvite(
                      e,
                      {
                          max_age: ej,
                          max_uses: eZ,
                          target_type: P,
                          target_user_id: u,
                          target_application_id: null == ei ? void 0 : ei.id,
                          temporary: ey,
                          flags: ew
                      },
                      o
                  ).catch((e) =>
                      eT({
                          networkError: e,
                          showVanityURL: ex
                      })
                  )),
                ej !== er.value && eA !== er.value && eT({ savedMaxAge: er.value });
        }, [ex, X, A, o, null == ei ? void 0 : ei.id, P, u, ej, eZ, ey, eT, eA, ew]),
        eR = (0, N.Z)(A),
        eb = (0, N.Z)((0, z.yE)(ew, g.$.IS_APPLICATION_BYPASS)),
        ek = null != eR && eR !== A,
        eU = null != eb && eb !== (0, z.yE)(ew, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ex && (ek || eU) && eP();
    }, [eP, ek, eU, ex]);
    let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eB } = (0, K.R)(r);
    return (0, i.jsx)(T.Gt, {
        value: y,
        children: (0, i.jsx)(eu, {
            ref: t,
            canCreateInvites: X,
            noInvitesAvailable: J,
            inviteChannel: A,
            guild: r,
            guildScheduledEvent: d,
            streamUserId: u,
            vanityURLCode: ev,
            targetType: P,
            targetUserId: u,
            application: ei,
            rows: G,
            showFriends: H,
            initialCounts: q,
            code: ea,
            source: o,
            welcomeToServer: I,
            analyticsLocations: y,
            analyticsLocation: Z,
            transitionState: h,
            onClose: x,
            canShowVanityURL: ex,
            isGuestInviteCreationToggleEnabled: ef && e_,
            shouldHideTemporaryInviteToggle: (ef && e_) || eB,
            modalState: eN,
            setModalState: eT,
            changePage: eC,
            onGenerateNewLink: eP,
            handleDone: eM,
            isApplicationBypassToggleEnabled: eL && !J
        })
    });
});
