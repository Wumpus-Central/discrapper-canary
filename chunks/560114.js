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
    v = n(692547),
    x = n(481060),
    p = n(447543),
    I = n(247272),
    S = n(110924),
    T = n(100527),
    N = n(906732),
    C = n(835473),
    f = n(447003),
    E = n(471445),
    _ = n(259473),
    j = n(600164),
    Z = n(687516),
    y = n(111810),
    M = n(301935),
    w = n(397195),
    b = n(427679),
    U = n(199902),
    A = n(662594),
    R = n(592125),
    B = n(984933),
    P = n(341165),
    V = n(751771),
    G = n(496675),
    L = n(158776),
    k = n(944486),
    D = n(594174),
    F = n(938475),
    O = n(626135),
    H = n(630388),
    q = n(971130),
    W = n(264229),
    z = n(366980),
    K = n(444260),
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
    er = n(622577);
function es(e, t, n) {
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
let { INVITE_OPTIONS_FOREVER: ea, INVITE_OPTIONS_7_DAYS: eo, INVITE_OPTIONS_UNLIMITED: ed } = q.ZP;
class eu extends (l = r.PureComponent) {
    componentDidMount() {
        let { inviteChannel: e, code: t, guild: n, source: l, canCreateInvites: i, analyticsLocation: r, streamUserId: s, targetType: a, targetUserId: o, application: d, initialCounts: u, rows: c, showFriends: h, modalState: g, setModalState: m } = this.props,
            { maxAge: v, maxUses: x, temporary: I } = g;
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
                        temporary: I
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
                    guild_id: n.id
                }),
            null != s)
        ) {
            let e = U.Z.getStreamForUser(s, n.id),
                t = (0, Z.L2)(e, L.Z);
            O.default.track(X.rMx.OPEN_MODAL, {
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
                O.default.track(X.rMx.OPEN_MODAL, {
                    type: 'Instant Invite Modal',
                    source: l,
                    location: r
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, inviteFlags: t, setInviteFlags: n } = this.props;
        (0, H.yE)(t, g.$.IS_GUEST_INVITE) && null != e && (n((0, H.Ge)(t, g.$.IS_GUEST_INVITE)), p.Z.clearInviteFromStore(e.id));
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
        return (0, f.Z)(e)
            ? (0, i.jsxs)('div', {
                  className: en.warningContainer,
                  children: [
                      (0, i.jsx)(x.CircleWarningIcon, {
                          size: 'custom',
                          className: en.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12
                      }),
                      (0, i.jsx)(x.Text, {
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
        let { guild: t, showFriends: n, guildScheduledEvent: l, streamUserId: r, application: s, welcomeToServer: o, inviteChannel: d, modalState: u, handleDone: c } = this.props,
            { query: h } = u,
            g = null,
            m = null;
        if (((e = o ? null : null != r ? et.intl.string(et.t['6VQaqa']) : null != s ? et.intl.formatToPlainString(et.t.ZdK3dX, { applicationName: s.name }) : null != l ? et.intl.string(et.t.JKV4FB) : (null == d ? void 0 : d.isGuildStageVoice()) ? et.intl.string(et.t.zTrsHx) : et.intl.format(et.t.NvVBJS, { name: t.toString() })), null != d)) {
            let e = (0, E.KS)(d, t);
            null != e &&
                (m = (0, i.jsxs)('div', {
                    className: en.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: en.channelIcon }),
                        (0, i.jsx)(x.Text, {
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
                          (0, i.jsx)(x.Heading, {
                              className: a()(en.hubInviteTitle, en.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: 'heading-xl/semibold',
                              color: 'header-primary',
                              children: et.intl.string(et.t.WhR38v)
                          }),
                          (0, i.jsx)(x.Text, {
                              color: 'header-secondary',
                              variant: 'text-md/normal',
                              children: et.intl.string(et.t.Ed4BMj)
                          }),
                          n &&
                              (0, i.jsx)(x.SearchBar, {
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
                                children: (0, i.jsx)(x.FormTitle, {
                                    id: this._headerId,
                                    tag: 'h2',
                                    className: a()(el.marginBottom4, en.headerCloseButtonSpacing, en.headerText),
                                    children: e
                                })
                            }),
                            m,
                            (0, i.jsx)(x.SearchBar, {
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
                            (0, i.jsx)(x.FormTitle, {
                                id: this._headerId,
                                tag: 'h2',
                                className: a()(el.marginReset, en.headerCloseButtonSpacing, en.headerText),
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
                        className: en.closeButton,
                        children: (0, i.jsx)(x.ModalCloseButton, { onClick: c })
                    }),
                    (0, i.jsxs)('div', {
                        className: en.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('img', {
                                            className: en.welcomeImage,
                                            src: er,
                                            alt: ''
                                        }),
                                        (0, i.jsx)(x.Heading, {
                                            variant: 'heading-lg/semibold',
                                            className: en.welcomeHeading,
                                            children: et.intl.string(et.t.DpoBNz)
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: 'text-md/normal',
                                            color: 'text-secondary',
                                            className: en.welcomeSubheading,
                                            children: et.intl.string(et.t['wJ/ouL'])
                                        })
                                    ]
                                }),
                            null != r ? (0, i.jsx)(y.Z, {}) : null,
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
                  className: a()(en.inviteRowEmptyState),
                  children: (0, i.jsx)(x.EmptyStateText, { children: et.intl.string(et.t.ojoWgY) })
              })
            : null == t
              ? (0, i.jsx)(x.ModalContent, {
                    className: a()(en.inviteRowEmptyState),
                    children: (0, i.jsx)(x.EmptyStateText, { children: et.intl.string(et.t.hzPwGB) })
                })
              : (0, i.jsx)(x.ModalListContent, {
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
        let { guild: t, showFriends: n, streamUserId: l, application: r } = this.props;
        if (n) return this.renderFriendsBody();
        let s = (0, z.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : ''),
            a = D.default.getCurrentUser();
        d()(null != a, 'InstantInviteModal: user cannot be undefined');
        let o = t.isOwner(a) ? et.intl.string(et.t.HFbByM) : et.intl.string(et.t.ueBhAw);
        return (
            null != l ? (o = et.intl.string(et.t.CXpS1N)) : null != r && (o = et.intl.string(et.t.ueCrHB)),
            (0, i.jsx)(x.ModalContent, {
                className: en.noScroll,
                children: (0, i.jsxs)(j.Z, {
                    direction: j.Z.Direction.VERTICAL,
                    className: el.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: en.subText,
                            variant: 'text-sm/normal',
                            children: o
                        }),
                        (0, i.jsx)(Q.I, {
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
            h = (0, z.Z)(null !== (e = this.getInviteKey()) && void 0 !== e ? e : '');
        if (n) {
            let e = et.intl.string(et.t.MLkj7O);
            null != r ? (e = et.intl.string(et.t['1b9nen'])) : null != s ? (e = et.intl.string(et.t.iI1gMj)) : null != l ? (e = et.intl.string(et.t.KaWCyM)) : (null == o ? void 0 : o.isGuildStageVoice()) && (e = et.intl.string(et.t['2frWa2'])),
                (c = (0, i.jsxs)(j.Z, {
                    direction: j.Z.Direction.VERTICAL,
                    className: en.content,
                    children: [
                        (0, i.jsx)(x.FormTitle, {
                            tag: 'h5',
                            className: el.marginBottom8,
                            children: e
                        }),
                        (0, i.jsx)(Q.I, {
                            ...this.props,
                            copyValue: h
                        })
                    ]
                }));
        } else
            !t &&
                (c = (0, i.jsxs)(j.Z, {
                    justify: j.Z.Justify.BETWEEN,
                    className: el.marginTop20,
                    children: [
                        (0, i.jsx)(x.Checkbox, {
                            size: 18,
                            type: x.Checkbox.Types.INVERTED,
                            value: u === ea.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(x.Text, {
                                variant: 'text-sm/normal',
                                children: et.intl.string(et.t.QKJru7)
                            })
                        }),
                        (0, i.jsx)(x.Tooltip, {
                            text: et.intl.string(et.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(x.Clickable, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ei.cursorPointer,
                                    children: (0, i.jsx)(x.SettingsIcon, {
                                        size: 'sm',
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css
                                    })
                                });
                            }
                        })
                    ]
                }));
        return null != c
            ? (0, i.jsx)(x.ModalFooter, {
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
                    headerId: this._headerId,
                    onSelectMaxAge: this.handleSelectMaxAge,
                    onSelectMaxUses: this.handleSelectMaxUses,
                    onToggleTemporary: this.handleToggleTemporary,
                    handleDone: t
                });
            case J.RV.GUEST:
                var l;
                let r = (0, z.Z)(null !== (l = this.getInviteKey()) && void 0 !== l ? l : '');
                return (0, i.jsx)(K.B, {
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
            className: this.props.showFriends ? en.wrapper : void 0,
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
                className: en.modal,
                children: this.getModalContent()
            })
        });
    }
    constructor(...e) {
        super(...e),
            es(this, '_scroller', null),
            es(this, '_headerId', c().uniqueId()),
            es(this, 'openSettings', () => {
                let { changePage: e } = this.props;
                e(J.RV.SETTINGS);
            }),
            es(this, 'handleSelectMaxAge', (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge
                });
            }),
            es(this, 'handleSelectMaxUses', (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            es(this, 'handleToggleTemporary', (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            es(this, 'handleToggleGuest', (e) => {
                let { inviteFlags: t, setInviteFlags: n } = this.props;
                n((0, H.mB)(t, g.$.IS_GUEST_INVITE, e));
            }),
            es(this, 'handleQueryChange', (e) => {
                var t;
                let { setModalState: n } = this.props;
                null === (t = this._scroller) || void 0 === t || t.scrollTo({ to: 0 }), (0, I.C)(e), n({ query: e });
            }),
            es(this, 'handleClearSearch', () => {
                this.handleQueryChange('');
            }),
            es(this, 'handleToggleMaxAge', () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n
                });
            }),
            es(this, 'getRowHeight', (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case q.bm.CHANNEL:
                    case q.bm.GROUP_DM:
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return $.k;
                    default:
                        return 0;
                }
            }),
            es(this, 'renderRow', (e) => {
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
                            $.d,
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
es(eu, 'defaultProps', {
    analyticsLocation: X.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eo.value
}),
    (t.default = r.forwardRef(function (e, t) {
        var n;
        let { channel: l, guild: s, source: a, guildScheduledEvent: o, streamUserId: d, applicationId: u, transitionState: c, onClose: h, welcomeToServer: v, page: x, analyticsLocation: E } = e,
            [j, Z] = r.useState(x === J.RV.GUEST ? g.$.IS_GUEST_INVITE : 0),
            { analyticsLocations: y } = (0, N.ZP)(T.Z.INSTANT_INVITE_MODAL),
            U = (0, m.e7)([R.Z, k.Z], () => {
                let e = k.Z.getVoiceChannelId();
                if (null == e) return null;
                let t = R.Z.getChannel(e);
                return (null == t ? void 0 : t.guild_id) === s.id ? t : null;
            }),
            L = null != U && !(0, f.Z)(U) && [X.t4x.GUILD_CONTEXT_MENU, X.t4x.GUILD_HEADER].includes(a),
            D = (0, w.Z)(s.id),
            O = (0, m.e7)(
                [k.Z, R.Z, B.ZP],
                () => {
                    if (L && ((0, H.yE)(j, g.$.IS_GUEST_INVITE) || x === J.RV.GUEST)) return U;
                    if (x === J.RV.GUEST) return 1 === D.length ? D[0] : void 0;
                    if (null != l) return l;
                    let e = k.Z.getChannelId(),
                        t = null == e || (0, ee.AB)(e) ? void 0 : R.Z.getChannel(e);
                    return (null == t ? void 0 : t.isThread()) && (t = R.Z.getChannel(t.parent_id)), null != t ? t : B.ZP.getDefaultChannel(s.id, !0, X.Plq.CREATE_INSTANT_INVITE);
                },
                [L, j, x, l, s.id, U, D]
            ),
            [q, W] = r.useState(null),
            z = null != q ? q : O,
            K = null;
        null != d ? (K = J.Iq.STREAM) : null != u && (K = J.Iq.EMBEDDED_APPLICATION);
        let Y = null != l ? l.getGuildId() : null != s ? s.id : null,
            Q = (0, m.e7)(
                [P.Z],
                () => {
                    let e = null != z ? z.id : null;
                    return null == e
                        ? null
                        : P.Z.getInvite(e, {
                              targetType: K,
                              targetUserId: d,
                              targetApplicationId: u
                          });
                },
                [z, K, d, u]
            ),
            [$, et, en, el, ei] = (0, m.Wu)(
                [V.Z, F.ZP, A.ZP],
                () => {
                    let e = null != z ? z.id : null;
                    return [V.Z.getInviteSuggestionRows(), V.Z.getTotalSuggestionsCount() >= 1, V.Z.getInitialCounts(), null != l && null != z ? F.ZP.getVoiceStatesForChannel(z) : null, null != Y ? A.ZP.getProps(Y, e) : null];
                },
                [z, l, Y]
            ),
            er = (0, m.e7)([G.Z], () => null != z && G.Z.can(X.Plq.CREATE_INSTANT_INVITE, z), [z]),
            es = null === Q || !er,
            [ec] = r.useState(() => {
                let e = new Set();
                return (
                    null != d && null != el
                        ? el.forEach((t) => {
                              let { user: n } = t;
                              e.add(n.id);
                          })
                        : null != Y &&
                          null != ei &&
                          K !== J.Iq.EMBEDDED_APPLICATION &&
                          ei.rows.forEach((t) => {
                              t.type === A.so.MEMBER && e.add(t.userId);
                          }),
                    e
                );
            }),
            eh = null == l ? void 0 : l.id,
            eg = (0, m.e7)([b.Z], () => b.Z.getStageInstanceByChannel(eh), [eh]);
        r.useEffect(() => {
            (0, I.x)({
                omitUserIds: ec,
                guild: s,
                channel: l,
                applicationId: u,
                inviteTargetType: K
            }).catch(X.VqG);
        }, [ec, l, s, u, K]);
        let [em] = (0, C.Z)(null != u ? [u] : []),
            ev = (0, _.Z)({ guildId: Y }),
            ex = null != Q ? Q.code : void 0,
            ep = null == Q ? void 0 : Q.maxAge,
            eI = null == Q ? void 0 : Q.maxUses,
            eS = null == Q ? void 0 : Q.temporary,
            eT = s.vanityURLCode,
            eN = null != eT && eT.length > 0,
            eC = !er && !(null == z ? void 0 : z.isGuildVocal()) && eN,
            ef = (null == z ? void 0 : z.type) === X.d4z.GUILD_VOICE,
            eE = (0, f.Z)(z);
        !er && (null == eg ? void 0 : eg.invite_code) != null && (ex = eg.invite_code);
        let [e_, ej] = r.useState({
                query: '',
                maxAge: null !== (n = null != ep ? ep : ev) && void 0 !== n ? n : eo.value,
                savedMaxAge: ep === ea.value ? (null != ev ? ev : eo.value) : ea.value,
                maxUses: null != eI && 0 !== eI ? eI : ed.value,
                temporary: null != eS && eS,
                networkError: void 0,
                showVanityURL: eC,
                currentPage: null != x ? x : J.RV.MAIN,
                lastPage: void 0
            }),
            eZ = r.useCallback((e) => {
                ej((t) => ({
                    ...t,
                    ...e
                }));
            }, []),
            ey = r.useCallback(
                (e) => {
                    eZ({
                        currentPage: e,
                        lastPage: e_.currentPage
                    });
                },
                [e_.currentPage, eZ]
            ),
            eM = (ef || L) && x !== J.RV.GUEST && !eC && !es && !eE,
            { enabled: ew } = M.o.useExperiment(
                {
                    guildId: null == s ? void 0 : s.id,
                    location: 'acc417_3'
                },
                { autoTrackExposure: eM }
            ),
            { maxAge: eb, maxUses: eU, temporary: eA, savedMaxAge: eR } = e_,
            eB = r.useCallback(() => {
                let { currentPage: e, lastPage: t } = e_;
                e === J.RV.SETTINGS && null != t ? ey(t) : h();
            }, [ey, e_, h]),
            eP = r.useCallback(() => {
                let e = null == z ? void 0 : z.id;
                0 === eU && 0 === eb && !eA && eC
                    ? eZ({
                          networkError: void 0,
                          showVanityURL: !0
                      })
                    : er &&
                      null != e &&
                      (eZ({
                          networkError: void 0,
                          showVanityURL: !1
                      }),
                      p.Z.createInvite(
                          e,
                          {
                              max_age: eb,
                              max_uses: eU,
                              target_type: K,
                              target_user_id: d,
                              target_application_id: null == em ? void 0 : em.id,
                              temporary: eA,
                              flags: j
                          },
                          a
                      ).catch((e) =>
                          eZ({
                              networkError: e,
                              showVanityURL: eC
                          })
                      )),
                    eb !== ea.value && eR !== ea.value && eZ({ savedMaxAge: ea.value });
            }, [eC, er, z, a, null == em ? void 0 : em.id, K, d, eb, eU, eA, j, eZ, eR]),
            eV = (0, S.Z)(z),
            eG = (0, S.Z)(j),
            eL = eV !== z,
            ek = eG !== j;
        return (
            r.useEffect(() => {
                !eC && (eL || ek) && eP();
            }, [eP, eL, ek, eC]),
            (0, i.jsx)(N.Gt, {
                value: y,
                children: (0, i.jsx)(eu, {
                    ref: t,
                    canCreateInvites: er,
                    noInvitesAvailable: es,
                    inviteChannel: z,
                    guild: s,
                    guildScheduledEvent: o,
                    streamUserId: d,
                    vanityURLCode: eT,
                    targetType: K,
                    targetUserId: d,
                    application: em,
                    rows: $,
                    showFriends: et,
                    initialCounts: en,
                    code: ex,
                    source: a,
                    welcomeToServer: v,
                    analyticsLocations: y,
                    analyticsLocation: E,
                    transitionState: c,
                    onClose: h,
                    canShowVanityURL: eC,
                    isGuestInviteCreationToggleEnabled: ew && eM,
                    shouldHideTemporaryInviteToggle: (ew && eM) || x === J.RV.GUEST,
                    modalState: e_,
                    setModalState: eZ,
                    changePage: ey,
                    onGenerateNewLink: eP,
                    inviteFlags: j,
                    setInviteFlags: Z,
                    showGuestInviteToggleForCurrentVoiceChannel: L,
                    setInviteChannel: W,
                    handleDone: eB
                })
            })
        );
    }));
