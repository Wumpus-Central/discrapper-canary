n.r(t), n(47120);
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
    p = n(692547),
    x = n(481060),
    I = n(447543),
    S = n(247272),
    T = n(110924),
    N = n(100527),
    C = n(906732),
    f = n(835473),
    E = n(447003),
    _ = n(471445),
    j = n(259473),
    Z = n(600164),
    y = n(687516),
    M = n(648159),
    w = n(227672),
    b = n(397195),
    U = n(427679),
    A = n(199902),
    R = n(662594),
    B = n(592125),
    P = n(984933),
    V = n(341165),
    G = n(751771),
    L = n(496675),
    k = n(158776),
    D = n(944486),
    F = n(594174),
    O = n(938475),
    H = n(626135),
    q = n(630388),
    W = n(971130),
    z = n(264229),
    K = n(366980),
    Y = n(444260),
    Q = n(585385),
    $ = n(603236),
    J = n(462376),
    X = n(245335),
    ee = n(981631),
    et = n(176505),
    en = n(388032),
    el = n(546820),
    ei = n(275477),
    er = n(642291),
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
let { INVITE_OPTIONS_FOREVER: eo, INVITE_OPTIONS_7_DAYS: ed, INVITE_OPTIONS_UNLIMITED: eu } = W.ZP;
class ec extends (l = r.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: r, streamUserId: s, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: v, maxUses: p, temporary: x } = g;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                I.Z.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: p,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: x
                    },
                    l
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (h &&
                H.default.track(ee.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = A.Z.getStreamForUser(s, n.id),
                t = (0, y.L2)(e, k.Z);
            H.default.track(ee.rMx.OPEN_MODAL, {
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
                H.default.track(ee.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: r
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, inviteFlags: t, setInviteFlags: n } = this.props;
        (0, q.yE)(t, g.$.IS_GUEST_INVITE) && null != e && (n((0, q.Ge)(t, g.$.IS_GUEST_INVITE)), I.Z.clearInviteFromStore(e.id));
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
        return null == r
            ? r
            : (0, z.tV)({
                  baseCode: r,
                  guildScheduledEventId: null == n ? void 0 : n.id
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, E.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: el.warningContainer,
                  children: [
                      (0, i.jsx)(x.CircleWarningIcon, {
                          size: 'custom',
                          className: el.warningIcon,
                          color: p.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(x.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: en.intl.string(en.t.x1SQZW)
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
        if (((e = o ? null : null != r ? en.intl.string(en.t['6VQaqa']) : null != s ? en.intl.formatToPlainString(en.t.ZdK3dX, { applicationName: s.name }) : null != l ? en.intl.string(en.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? en.intl.string(en.t.zTrsHx) : en.intl.format(en.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, _.KS)(d, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
                    className: el.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: el.channelIcon }),
                        (0, i.jsx)(x.Text, {
                            color: 'interactive-normal',
                            variant: 'text-md/normal',
                            children: d.name
                        })
                    ]
                }));
        }
        return (
            (g = t.hasFeature(ee.oNc.HUB)
                ? (0, i.jsxs)('div', {
                      className: el.hubHeader,
                      children: [
                          (0, i.jsx)(x.Heading, {
                              className: a()(el.hubInviteTitle, el.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: en.intl.string(en.t.WhR38v)
                          }),
                          (0, i.jsx)(x.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: en.intl.string(en.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(x.SearchBar, {
                                  query: h,
                                  className: el.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: en.intl.string(en.t.CmSHY2),
                                  'aria-label': en.intl.string(en.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch
                              })
                      ]
                  })
                : n
                  ? (0, i.jsxs)('div', {
                        className: el.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: el.__invalid_headerTopRow,
                                children: (0, i.jsx)(x.FormTitle, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(ei.marginBottom4, el.headerCloseButtonSpacing, el.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(x.SearchBar, {
                                query: h,
                                className: el.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: en.intl.string(en.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch
                            }),
                            (0, i.jsx)('div', {
                                className: ei.marginTop8,
                                children: this.renderChannelWarning()
                            })
                        ]
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.FormTitle, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(ei.marginReset, el.headerCloseButtonSpacing, el.headerText),
                                children: e
                            }),
                            m,
                            this.renderChannelWarning()
                        ]
                    })),
            (0, i.jsxs)(x.ModalHeader, {
                separator: n,
                children: [
                    (0, i.jsx)('div', {
                        className: el.closeButton,
                        children: (0, i.jsx)(x.ModalCloseButton, { onClick: c })
                    }),
                    (0, i.jsxs)('div', {
                        className: el.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            className: el.welcomeImage,
                                            src: es,
                                            alt: ''
                                        }),
                                        (0, i.jsx)(x.Heading, {
                                            variant: 'heading-lg/semibold',
                                            className: el.welcomeHeading,
                                            children: en.intl.string(en.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: el.welcomeSubheading,
                                            children: en.intl.string(en.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != r ? (0, i.jsx)(M.Z, {}) : null,
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
            ? (0, i.jsx)(x.ModalContent, {
                  className: a()(el.inviteRowEmptyState),
                  children: (0, i.jsx)(x.EmptyStateText, { children: en.intl.string(en.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(x.ModalContent, {
                    className: a()(el.inviteRowEmptyState),
                    children: (0, i.jsx)(x.EmptyStateText, { children: en.intl.string(en.t.hzPwGB) })
                })
              : (0, i.jsx)(x.ModalListContent, {
                    className: el.scroller,
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
        let s = (0, K.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            a = F.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? en.intl.string(en.t.HFbByM) : en.intl.string(en.t.ueBhAw);
        return (
            null != l ? (o = en.intl.string(en.t.CXpS1N)) : null != r && (o = en.intl.string(en.t.ueCrHB)),
            (0, i.jsx)(x.ModalContent, {
                className: el.noScroll,
                children: (0, i.jsxs)(Z.Z, {
                    direction: Z.Z.Direction.VERTICAL,
                    className: ei.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: el.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)($.I, {
                            ...this.props,
                            copyValue: s
                        })
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
            h = (0, K.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = en.intl.string(en.t.MLkj7O);
            null != r ? (e = en.intl.string(en.t['1b9nen'])) : null != s ? (e = en.intl.string(en.t.iI1gMj)) : null != l ? (e = en.intl.string(en.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = en.intl.string(en.t['2frWa2'])),
                (c = (0, i.jsxs)(Z.Z, {
                    direction: Z.Z.Direction.VERTICAL,
                    className: el.content,
                    children: [
                        (0, i.jsx)(x.FormTitle, {
                            tag: 'h5',
                            className: ei.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)($.I, {
                            ...this.props,
                            copyValue: h
                        })
                    ]
                }));
        } else
            !t &&
                (c = (0, i.jsxs)(Z.Z, {
                    justify: Z.Z.Justify.BETWEEN,
                    className: ei.marginTop20,
                    children: [
                        (0, i.jsx)(x.Checkbox, {
                            size: 18,
                            type: x.Checkbox.Types.INVERTED,
                            value: u === eo.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(x.Text, {
                                variant: 'text-sm/normal',
                                children: en.intl.string(en.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(x.Tooltip, {
                            text: en.intl.string(en.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(x.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: er.cursorPointer,
                                    children: (0, i.jsx)(x.SettingsIcon, {
                                        size: 'sm',
                                        color: p.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(x.ModalFooter, {
                  className: a()({
                      [el.noPadding]: !n,
                      [el.footer]: n
                  }),
                  children: c
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case X.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
                });
            case X.RV.SETTINGS:
                return (0, i.jsx)(Q.D, {
                    ...this.props,
                    headerId: this._headerId,
                    onSelectMaxAge: this.handleSelectMaxAge,
                    onSelectMaxUses: this.handleSelectMaxUses,
                    onToggleTemporary: this.handleToggleTemporary,
                    handleDone: t
                });
            case X.RV.GUEST:
                var l;
                let r = (0, K.Z)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : '');
                return (0, i.jsx)(Y.B, {
                    ...this.props,
                    headerId: this._headerId,
                    handleDone: t,
                    copyValue: r
                });
            default:
                return null;
        }
    }
    render() {
        let { transitionState: e, inviteChannel: t, guild: n } = this.props;
        return (0, i.jsx)('div', {
            className: this.props.showFriends ? el.wrapper : void 0,
            children: (0, i.jsx)(x.ModalRoot, {
                impression: {
                    impressionName: h.ImpressionNames.GUILD_INVITE,
                    impressionProperties: {
                        invite_channel_id: null == t ? void 0 : t.id,
                        invite_guild_id: n.id
                    }
                },
                'aria-labelledby': this._headerId,
                transitionState: e,
                className: el.modal,
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
                e(X.RV.SETTINGS);
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
            ea(this, 'handleToggleGuest', (e) => {
                let { inviteFlags: t, setInviteFlags: n } = this.props;
                n((0, q.mB)(t, g.$.IS_GUEST_INVITE, e));
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
                    case W.bm.CHANNEL:
                    case W.bm.GROUP_DM:
                    case W.bm.DM:
                    case W.bm.FRIEND:
                        return J.k;
                    default:
                        return 0;
                }
            }),
            ea(this, 'renderRow', (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    r = this.getInviteKey(),
                    s = this.props.rows[n],
                    a = ''.concat(s.type, '-').concat(s.item.id);
                switch (s.type) {
                    case W.bm.GROUP_DM:
                    case W.bm.CHANNEL:
                        return (0, i.jsx)(
                            J.d,
                            {
                                row: s,
                                channel: s.item,
                                inviteKey: r,
                                location: l
                            },
                            a
                        );
                    case W.bm.DM:
                    case W.bm.FRIEND:
                        return (0, i.jsx)(
                            J.d,
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
ea(ec, 'defaultProps', {
    analyticsLocation: ee.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: ed.value
}),
    (t.default = r.forwardRef(function (e, t) {
        var n;
        let { channel: l, guild: s, source: a, guildScheduledEvent: o, streamUserId: d, applicationId: u, transitionState: c, onClose: h, welcomeToServer: p, page: x, analyticsLocation: _ } = e,
            [Z, y] = r.useState(x === X.RV.GUEST ? g.$.IS_GUEST_INVITE : 0),
            { analyticsLocations: M } = (0, C.ZP)(N.Z.INSTANT_INVITE_MODAL),
            A = (0, m.e7)([B.Z, D.Z], () => {
                let e = D.Z.getVoiceChannelId();
                if (null == e) return null;
                let t = B.Z.getChannel(e);
                return (null == t ? void 0 : t.guild_id) === s.id ? t : null;
            }),
            k = null != A && !(0, E.Z)(A) && [ee.t4x.GUILD_CONTEXT_MENU, ee.t4x.GUILD_HEADER].includes(a),
            F = (0, b.Z)(s.id),
            H = (0, m.e7)(
                [D.Z, B.Z, P.ZP],
                () => {
                    if (k && ((0, q.yE)(Z, g.$.IS_GUEST_INVITE) || x === X.RV.GUEST)) return A;
                    if (x === X.RV.GUEST) return 1 === F.length ? F[0] : void 0;
                    if (null != l) return l;
                    let e = D.Z.getChannelId(),
                        t = null == e || (0, et.AB)(e) ? void 0 : B.Z.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = B.Z.getChannel(t.parent_id)), null != t ? t : P.ZP.getDefaultChannel(s.id, !0, ee.Plq.CREATE_INSTANT_INVITE);
                },
                [k, Z, x, l, s.id, A, F]
            ),
            [W, z] = r.useState(null),
            K = null != W ? W : H,
            Y = null;
        null != d ? (Y = X.Iq.STREAM) : null != u && (Y = X.Iq.EMBEDDED_APPLICATION);
        let Q = null != l ? l.getGuildId() : null != s ? s.id : null,
            $ = (0, m.e7)(
                [V.Z],
                () => {
                    let e = null != K ? K.id : null;
                    return null == e
                        ? null
                        : V.Z.getInvite(e, {
                              targetType: Y,
                              targetUserId: d,
                              targetApplicationId: u
                          });
                },
                [K, Y, d, u]
            ),
            [J, en, el, ei] = (0, m.Wu)([G.Z, O.ZP], () => [G.Z.getInviteSuggestionRows(), G.Z.getTotalSuggestionsCount() >= 1, G.Z.getInitialCounts(), null != l && null != K ? O.ZP.getVoiceStatesForChannel(K) : null], [K, l]),
            er = (0, m.e7)(
                [R.ZP],
                () => {
                    let e = null != K ? K.id : null;
                    return null != Q ? R.ZP.getProps(Q, e) : void 0;
                },
                [K, Q],
                v.Z
            ),
            es = (0, m.e7)([L.Z], () => null != K && L.Z.can(ee.Plq.CREATE_INSTANT_INVITE, K), [K]),
            ea = null === $ || !es,
            [eh] = r.useState(() => {
                let e = new Set();
                return (
                    null != d && null != ei
                        ? ei.forEach((t) => {
                              let { user: n } = t;
                              e.add(n.id);
                          })
                        : null != Q &&
                          null != er &&
                          Y !== X.Iq.EMBEDDED_APPLICATION &&
                          er.rows.forEach((t) => {
                              t.type === R.so.MEMBER && e.add(t.userId);
                          }),
                    e
                );
            }),
            eg = null == l ? void 0 : l.id,
            em = (0, m.e7)([U.Z], () => U.Z.getStageInstanceByChannel(eg), [eg]);
        r.useEffect(() => {
            (0, S.x)({
                omitUserIds: eh,
                guild: s,
                channel: l,
                applicationId: u,
                inviteTargetType: Y
            }).catch(ee.VqG);
        }, [eh, l, s, u, Y]);
        let [ev] = (0, f.Z)(null != u ? [u] : []),
            ep = (0, j.Z)({ guildId: Q }),
            ex = null != $ ? $.code : void 0,
            eI = null == $ ? void 0 : $.maxAge,
            eS = null == $ ? void 0 : $.maxUses,
            eT = null == $ ? void 0 : $.temporary,
            eN = s.vanityURLCode,
            eC = null != eN && eN.length > 0,
            ef = !es && !(null == K ? void 0 : K.isGuildVocal()) && eC,
            eE = (null == K ? void 0 : K.type) === ee.d4z.GUILD_VOICE,
            e_ = (0, E.Z)(K);
        !es && (null == em ? void 0 : em.invite_code) != null && (ex = em.invite_code);
        let [ej, eZ] = r.useState({
                query: '',
                maxAge: null !== (n = null != eI ? eI : ep) && void 0 !== n ? n : ed.value,
                savedMaxAge: eI === eo.value ? (null != ep ? ep : ed.value) : eo.value,
                maxUses: null != eS && 0 !== eS ? eS : eu.value,
                temporary: null != eT && eT,
                networkError: void 0,
                showVanityURL: ef,
                currentPage: null != x ? x : X.RV.MAIN,
                lastPage: void 0
            }),
            ey = r.useCallback((e) => {
                eZ((t) => ({
                    ...t,
                    ...e
                }));
            }, []),
            eM = r.useCallback(
                (e) => {
                    ey({
                        currentPage: e,
                        lastPage: ej.currentPage
                    });
                },
                [ej.currentPage, ey]
            ),
            ew = (eE || k) && x !== X.RV.GUEST && !ef && !ea && !e_,
            { enabled: eb } = w.o.useExperiment(
                {
                    guildId: null == s ? void 0 : s.id,
                    location: 'acc417_3'
                },
                { autoTrackExposure: ew }
            ),
            { maxAge: eU, maxUses: eA, temporary: eR, savedMaxAge: eB } = ej,
            eP = r.useCallback(() => {
                let { currentPage: e, lastPage: t } = ej;
                e === X.RV.SETTINGS && null != t ? eM(t) : h();
            }, [eM, ej, h]),
            eV = r.useCallback(() => {
                let e = null == K ? void 0 : K.id;
                0 === eA && 0 === eU && !eR && ef
                    ? ey({
                          networkError: void 0,
                          showVanityURL: !0
                      })
                    : es &&
                      null != e &&
                      (ey({
                          networkError: void 0,
                          showVanityURL: !1
                      }),
                      I.Z.createInvite(
                          e,
                          {
                              max_age: eU,
                              max_uses: eA,
                              target_type: Y,
                              target_user_id: d,
                              target_application_id: null == ev ? void 0 : ev.id,
                              temporary: eR,
                              flags: Z
                          },
                          a
                      ).catch((e) =>
                          ey({
                              networkError: e,
                              showVanityURL: ef
                          })
                      )),
                    eU !== eo.value && eB !== eo.value && ey({ savedMaxAge: eo.value });
            }, [ef, es, K, a, null == ev ? void 0 : ev.id, Y, d, eU, eA, eR, Z, ey, eB]),
            eG = (0, T.Z)(K),
            eL = (0, T.Z)(Z),
            ek = eG !== K,
            eD = eL !== Z;
        return (
            r.useEffect(() => {
                !ef && (ek || eD) && eV();
            }, [eV, ek, eD, ef]),
            (0, i.jsx)(C.Gt, {
                value: M,
                children: (0, i.jsx)(ec, {
                    ref: t,
                    canCreateInvites: es,
                    noInvitesAvailable: ea,
                    inviteChannel: K,
                    guild: s,
                    guildScheduledEvent: o,
                    streamUserId: d,
                    vanityURLCode: eN,
                    targetType: Y,
                    targetUserId: d,
                    application: ev,
                    rows: J,
                    showFriends: en,
                    initialCounts: el,
                    code: ex,
                    source: a,
                    welcomeToServer: p,
                    analyticsLocations: M,
                    analyticsLocation: _,
                    transitionState: c,
                    onClose: h,
                    canShowVanityURL: ef,
                    isGuestInviteCreationToggleEnabled: eb && ew,
                    shouldHideTemporaryInviteToggle: (eb && ew) || x === X.RV.GUEST,
                    modalState: ej,
                    setModalState: ey,
                    changePage: eM,
                    onGenerateNewLink: eV,
                    inviteFlags: Z,
                    setInviteFlags: y,
                    showGuestInviteToggleForCurrentVoiceChannel: k,
                    setInviteChannel: z,
                    handleDone: eP
                })
            })
        );
    }));
