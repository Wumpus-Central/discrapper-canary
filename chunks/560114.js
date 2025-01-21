n.r(t), n(789020), n(47120);
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
    v = n(902704),
    x = n(692547),
    I = n(481060),
    p = n(447543),
    S = n(247272),
    N = n(110924),
    C = n(100527),
    f = n(906732),
    E = n(835473),
    T = n(447003),
    _ = n(471445),
    j = n(259473),
    y = n(600164),
    Z = n(687516),
    A = n(648159),
    M = n(227672),
    w = n(427679),
    P = n(199902),
    b = n(662594),
    R = n(592125),
    B = n(984933),
    U = n(341165),
    L = n(751771),
    F = n(496675),
    k = n(158776),
    D = n(944486),
    V = n(594174),
    G = n(938475),
    O = n(626135),
    H = n(630388),
    z = n(971130),
    K = n(264229),
    W = n(366980),
    q = n(277364),
    Y = n(585385),
    Q = n(603236),
    $ = n(462376),
    J = n(245335),
    X = n(981631),
    ee = n(176505),
    et = n(388032),
    en = n(755527),
    el = n(232186),
    ei = n(107720),
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
let { INVITE_OPTIONS_FOREVER: ea, INVITE_OPTIONS_7_DAYS: eo, INVITE_OPTIONS_UNLIMITED: ed } = z.ZP;
class eu extends (l = s.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: s, streamUserId: r, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: v, maxUses: x, temporary: I, flags: S } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                p.Z.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: x,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: I,
                        flags: S
                    },
                    l
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (h &&
                O.default.track(X.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = P.Z.getStreamForUser(r, n.id),
                t = (0, Z.L2)(e, k.Z);
            O.default.track(X.rMx.OPEN_MODAL, {
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
                O.default.track(X.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: s
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, H.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && p.Z.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, K.tV)({
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
                      (0, i.jsx)(I.CircleWarningIcon, {
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
        let { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: s, application: r, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            m = null;
        if (((e = o ? null : null != s ? et.intl.string(et.t['6VQaqa']) : null != r ? et.intl.formatToPlainString(et.t.ZdK3dX, { applicationName: r.name }) : null != l ? et.intl.string(et.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? et.intl.string(et.t.zTrsHx) : et.intl.format(et.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, _.KS)(d, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
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
            (g = t.hasFeature(X.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: en.hubHeader,
                      children: [
                          (0, i.jsx)(I.Heading, {
                              className: a()(en.hubInviteTitle, en.headerCloseButtonSpacing),
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
                              (0, i.jsx)(I.SearchBar, {
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
                                children: (0, i.jsx)(I.FormTitle, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(el.marginBottom4, en.headerCloseButtonSpacing, en.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(I.SearchBar, {
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
                            (0, i.jsx)(I.FormTitle, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(el.marginReset, en.headerCloseButtonSpacing, en.headerText),
                                children: e
                            }),
                            m,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(I.ModalHeader, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: en.closeButton,
                        children: (0, i.jsx)(I.ModalCloseButton, { onClick: c })
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
                                        (0, i.jsx)(I.Heading, {
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
            ? (0, i.jsx)(I.ModalContent, {
                  className: a()(en.inviteRowEmptyState),
                  children: (0, i.jsx)(I.EmptyStateText, { children: et.intl.string(et.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(I.ModalContent, {
                    className: a()(en.inviteRowEmptyState),
                    children: (0, i.jsx)(I.EmptyStateText, { children: et.intl.string(et.t.hzPwGB) })
                })
              : (0, i.jsx)(I.ModalListContent, {
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
        let r = (0, W.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            a = V.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? et.intl.string(et.t.HFbByM) : et.intl.string(et.t.ueBhAw);
        return (
            null != l ? (o = et.intl.string(et.t.CXpS1N)) : null != s && (o = et.intl.string(et.t.ueCrHB)),
            (0, i.jsx)(I.ModalContent, {
                className: en.noScroll,
                children: (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: el.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Text, {
                            className: en.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(Q.I, {
                            ...this.props,
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: r
                        })
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
            h = (0, W.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = et.intl.string(et.t.MLkj7O);
            null != s ? (e = et.intl.string(et.t['1b9nen'])) : null != r ? (e = et.intl.string(et.t.iI1gMj)) : null != l ? (e = et.intl.string(et.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = et.intl.string(et.t['2frWa2'])),
                (c = (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: en.content,
                    children: [
                        (0, i.jsx)(I.FormTitle, {
                            tag: 'h5',
                            className: el.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(Q.I, {
                            ...this.props,
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: h
                        })
                    ]
                }));
        } else
            !t &&
                (c = (0, i.jsxs)(y.Z, {
                    justify: y.Z.Justify.BETWEEN,
                    className: el.marginTop20,
                    children: [
                        (0, i.jsx)(I.Checkbox, {
                            size: 18,
                            type: I.Checkbox.Types.INVERTED,
                            value: u === ea.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(I.Text, {
                                variant: 'text-sm/normal',
                                children: et.intl.string(et.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(I.Tooltip, {
                            text: et.intl.string(et.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(I.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ei.cursorPointer,
                                    children: (0, i.jsx)(I.SettingsIcon, {
                                        size: 'sm',
                                        color: x.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(I.ModalFooter, {
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
            case J.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                });
            case J.RV.SETTINGS:
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
            children: (0, i.jsx)(I.ModalRoot, {
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
                e(J.RV.SETTINGS);
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
                null === (t = this._scroller) || void 0 === t || t.scrollTo({ to: 0 }), (0, S.C)(e), n({ query: e });
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
                        return $.k;
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
                            $.d,
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
er(eu, 'defaultProps', {
    analyticsLocation: X.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eo.value
}),
    (t.default = s.forwardRef(function (e, t) {
        var n, l;
        let { channel: r, guild: a, source: o, guildScheduledEvent: d, streamUserId: u, applicationId: c, transitionState: h, onClose: x, welcomeToServer: I, page: _, analyticsLocation: y } = e,
            { analyticsLocations: Z } = (0, f.ZP)(C.Z.INSTANT_INVITE_MODAL),
            A = (0, m.e7)(
                [D.Z, R.Z, B.ZP],
                () => {
                    if (null != r) return r;
                    let e = D.Z.getChannelId(),
                        t = null == e || (0, ee.AB)(e) ? void 0 : R.Z.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = R.Z.getChannel(t.parent_id)), null != t ? t : B.ZP.getDefaultChannel(a.id, !0, X.Plq.CREATE_INSTANT_INVITE);
                },
                [r, a.id]
            ),
            P = null;
        null != u ? (P = J.Iq.STREAM) : null != c && (P = J.Iq.EMBEDDED_APPLICATION);
        let k = null != r ? r.getGuildId() : null != a ? a.id : null,
            V = (0, m.e7)(
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
            [O, z, K, W] = (0, m.Wu)([L.Z, G.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != r && null != A ? G.ZP.getVoiceStatesForChannel(A) : null], [A, r]),
            Y = (0, m.e7)(
                [b.ZP],
                () => {
                    let e = null != A ? A.id : null;
                    return null != k ? b.ZP.getProps(k, e) : void 0;
                },
                [A, k],
                v.Z
            ),
            Q = (0, m.e7)([F.Z], () => null != A && F.Z.can(X.Plq.CREATE_INSTANT_INVITE, A), [A]),
            $ = null === V || !Q,
            [et] = s.useState(() => {
                let e = new Set();
                return (
                    null != u && null != W
                        ? W.forEach((t) => {
                              let { user: n } = t;
                              e.add(n.id);
                          })
                        : null != k &&
                          null != Y &&
                          P !== J.Iq.EMBEDDED_APPLICATION &&
                          Y.rows.forEach((t) => {
                              t.type === b.so.MEMBER && e.add(t.userId);
                          }),
                    e
                );
            }),
            en = null == r ? void 0 : r.id,
            el = (0, m.e7)([w.Z], () => w.Z.getStageInstanceByChannel(en), [en]);
        s.useEffect(() => {
            (0, S.x)({
                omitUserIds: et,
                guild: a,
                channel: r,
                applicationId: c,
                inviteTargetType: P
            }).catch(X.VqG);
        }, [et, r, a, c, P]);
        let [ei] = (0, E.Z)(null != c ? [c] : []),
            es = (0, j.Z)({ guildId: k }),
            er = null != V ? V.code : void 0,
            ec = null == V ? void 0 : V.maxAge,
            eh = null == V ? void 0 : V.maxUses,
            eg = null == V ? void 0 : V.temporary,
            em = a.vanityURLCode,
            ev = null != em && em.length > 0,
            ex = !Q && !(null == A ? void 0 : A.isGuildVocal()) && ev,
            eI = (null == A ? void 0 : A.type) === X.d4z.GUILD_VOICE,
            ep = null !== (n = null == V ? void 0 : V.flags) && void 0 !== n ? n : 0,
            eS = (0, T.Z)(A);
        !Q && (null == el ? void 0 : el.invite_code) != null && (er = el.invite_code);
        let [eN, eC] = s.useState({
                query: '',
                maxAge: null !== (l = null != ec ? ec : es) && void 0 !== l ? l : eo.value,
                savedMaxAge: ec === ea.value ? (null != es ? es : eo.value) : ea.value,
                maxUses: null != eh && 0 !== eh ? eh : ed.value,
                temporary: null != eg && eg,
                networkError: void 0,
                showVanityURL: ex,
                currentPage: null != _ ? _ : J.RV.MAIN,
                lastPage: void 0,
                flags: ep
            }),
            ef = s.useCallback((e) => {
                eC((t) => ({
                    ...t,
                    ...e
                }));
            }, []),
            eE = s.useCallback(
                (e) => {
                    ef({
                        currentPage: e,
                        lastPage: eN.currentPage
                    });
                },
                [eN.currentPage, ef]
            ),
            eT = eI && !ex && !$ && !eS,
            { enabled: e_ } = M.o.useExperiment(
                {
                    guildId: null == a ? void 0 : a.id,
                    location: 'acc417_3'
                },
                { autoTrackExposure: eT }
            ),
            { maxAge: ej, maxUses: ey, temporary: eZ, savedMaxAge: eA, flags: eM } = eN,
            ew = s.useCallback(() => {
                let { currentPage: e, lastPage: t } = eN;
                e === J.RV.SETTINGS && null != t ? eE(t) : x();
            }, [eE, eN, x]),
            eP = s.useCallback(() => {
                let e = null == A ? void 0 : A.id;
                0 === ey && 0 === ej && !eZ && ex
                    ? ef({
                          networkError: void 0,
                          showVanityURL: !0
                      })
                    : Q &&
                      null != e &&
                      (ef({
                          networkError: void 0,
                          showVanityURL: !1
                      }),
                      p.Z.createInvite(
                          e,
                          {
                              max_age: ej,
                              max_uses: ey,
                              target_type: P,
                              target_user_id: u,
                              target_application_id: null == ei ? void 0 : ei.id,
                              temporary: eZ,
                              flags: eM
                          },
                          o
                      ).catch((e) =>
                          ef({
                              networkError: e,
                              showVanityURL: ex
                          })
                      )),
                    ej !== ea.value && eA !== ea.value && ef({ savedMaxAge: ea.value });
            }, [ex, Q, A, o, null == ei ? void 0 : ei.id, P, u, ej, ey, eZ, ef, eA, eM]),
            eb = (0, N.Z)(A),
            eR = (0, N.Z)((0, H.yE)(eM, g.$.IS_APPLICATION_BYPASS)),
            eB = null != eb && eb !== A,
            eU = null != eR && eR !== (0, H.yE)(eM, g.$.IS_APPLICATION_BYPASS);
        s.useEffect(() => {
            !ex && (eB || eU) && eP();
        }, [eP, eB, eU, ex]);
        let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eF } = (0, q.R)(a);
        return (0, i.jsx)(f.Gt, {
            value: Z,
            children: (0, i.jsx)(eu, {
                ref: t,
                canCreateInvites: Q,
                noInvitesAvailable: $,
                inviteChannel: A,
                guild: a,
                guildScheduledEvent: d,
                streamUserId: u,
                vanityURLCode: em,
                targetType: P,
                targetUserId: u,
                application: ei,
                rows: O,
                showFriends: z,
                initialCounts: K,
                code: er,
                source: o,
                welcomeToServer: I,
                analyticsLocations: Z,
                analyticsLocation: y,
                transitionState: h,
                onClose: x,
                canShowVanityURL: ex,
                isGuestInviteCreationToggleEnabled: e_ && eT,
                shouldHideTemporaryInviteToggle: (e_ && eT) || eF,
                modalState: eN,
                setModalState: ef,
                changePage: eE,
                onGenerateNewLink: eP,
                handleDone: ew,
                isApplicationBypassToggleEnabled: eL && !$
            })
        });
    }));
