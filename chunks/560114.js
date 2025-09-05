n.d(t, { default: () => eI }), n(997841), n(388685);
var l,
    i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    u = n.n(o),
    d = n(392711),
    c = n.n(d),
    g = n(990547),
    h = n(533800),
    m = n(442837),
    p = n(902704),
    v = n(692547),
    x = n(755721),
    I = n(481060),
    f = n(447543),
    j = n(247272),
    N = n(110924),
    _ = n(100527),
    E = n(906732),
    S = n(835473),
    b = n(447003),
    O = n(471445),
    T = n(600164),
    y = n(687516),
    C = n(648159),
    P = n(227672),
    Z = n(427679),
    w = n(601964),
    A = n(199902),
    M = n(439170),
    R = n(592125),
    D = n(984933),
    k = n(341165),
    L = n(751771),
    U = n(496675),
    V = n(158776),
    B = n(944486),
    F = n(594174),
    z = n(938475),
    G = n(626135),
    H = n(630388),
    q = n(971130),
    W = n(301873),
    Y = n(264229),
    K = n(340541),
    X = n(366980),
    Q = n(277364),
    J = n(265452),
    $ = n(585385),
    ee = n(603236),
    et = n(462376),
    en = n(245335),
    el = n(981631),
    ei = n(176505),
    er = n(388032),
    es = n(869306),
    ea = n(10198),
    eo = n(492297),
    eu = n(622577);
function ed(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                ed(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
let { INVITE_OPTIONS_FOREVER: eh, INVITE_OPTIONS_7_DAYS: em, INVITE_OPTIONS_UNLIMITED: ep } = q.ZP;
class ev extends (l = r.PureComponent) {
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: l,
                canCreateInvites: i,
                analyticsLocation: r,
                streamUserId: s,
                targetType: a,
                targetUserId: o,
                application: u,
                initialCounts: d,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: m,
            } = this.props,
            { maxAge: p, maxUses: v, temporary: x, flags: I } = h;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                f.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: v,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: x,
                        flags: I,
                    },
                    l,
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (g &&
                G.default.track(el.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: null == u ? void 0 : u.id,
                }),
            null != s)
        ) {
            let e = A.Z.getStreamForUser(s, n.id),
                t = (0, y.L2)(e, V.Z);
            G.default.track(el.rMx.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: l,
                location: r,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == u ? void 0 : u.id) != null ||
                G.default.track(el.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: r,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, H.yE)(t.flags, h.$.IS_GUEST_INVITE) && null != e && f.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            r = i ? t : null != e ? e : t;
        return null == r
            ? r
            : (0, Y.tV)({
                  baseCode: r,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, b.Z)(e)
            ? (0, i.jsxs)("div", {
                  className: es.warningContainer,
                  children: [
                      (0, i.jsx)(I.Mgn, {
                          size: "custom",
                          className: es.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(I.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: er.intl.string(er.t.x1SQZW),
                      }),
                  ],
              })
            : null;
    }
    renderHeader() {
        let e,
            {
                guild: t,
                showFriends: n,
                guildScheduledEvent: l,
                streamUserId: r,
                application: s,
                welcomeToServer: o,
                inviteChannel: u,
                modalState: d,
                handleDone: c,
            } = this.props,
            { query: g } = d,
            h = null,
            m = null;
        if (
            ((e = o
                ? null
                : null != r
                  ? er.intl.string(er.t["6VQaqa"])
                  : null != s
                    ? er.intl.formatToPlainString(er.t.ZdK3dX, { applicationName: s.name })
                    : null != l
                      ? er.intl.string(er.t.JKV4FB)
                      : (null == u ? void 0 : u.isGuildStageVoice())
                        ? er.intl.string(er.t.zTrsHx)
                        : er.intl.format(er.t.NvVBJS, { name: t.name })),
            null != u)
        ) {
            let e = (0, O.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)("div", {
                    className: es.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: es.channelIcon }),
                        (0, i.jsx)(I.Text, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            children: u.name,
                        }),
                    ],
                }));
        }
        return (
            (h = t.features.has(el.oNc.HUB)
                ? (0, i.jsxs)("div", {
                      className: es.hubHeader,
                      children: [
                          (0, i.jsx)(I.X6q, {
                              className: a()(es.hubInviteTitle, es.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              children: er.intl.string(er.t.WhR38v),
                          }),
                          (0, i.jsx)(I.Text, {
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: er.intl.string(er.t.Ed4BMj),
                          }),
                          n &&
                              (0, i.jsx)(I.E1j, {
                                  size: "sm",
                                  query: g,
                                  className: es.hubFriendSearch,
                                  onChange: this.handleQueryChange,
                                  placeholder: er.intl.string(er.t.CmSHY2),
                                  "aria-label": er.intl.string(er.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch,
                              }),
                      ],
                  })
                : n
                  ? (0, i.jsxs)("div", {
                        className: es.header,
                        children: [
                            (0, i.jsx)("div", {
                                className: es.__invalid_headerTopRow,
                                children: (0, i.jsx)(I.vwX, {
                                    id: this._headerId,
                                    tag: "h2",
                                    className: a()(ea.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
                                    children: e,
                                }),
                            }),
                            m,
                            (0, i.jsx)(I.E1j, {
                                size: "sm",
                                query: g,
                                className: es.searchBar,
                                onChange: this.handleQueryChange,
                                placeholder: er.intl.string(er.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch,
                            }),
                            (0, i.jsx)("div", {
                                className: ea.marginTop8,
                                children: this.renderChannelWarning(),
                            }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(I.vwX, {
                                id: this._headerId,
                                tag: "h2",
                                className: a()(ea.marginReset, es.headerCloseButtonSpacing, es.headerText),
                                children: e,
                            }),
                            m,
                            this.renderChannelWarning(),
                        ],
                    })),
            (0, i.jsxs)(I.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)("div", {
                        className: es.closeButton,
                        children: (0, i.jsx)(I.olH, { onClick: c }),
                    }),
                    (0, i.jsxs)("div", {
                        className: es.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("img", {
                                            className: es.welcomeImage,
                                            src: eu,
                                            alt: "",
                                        }),
                                        (0, i.jsx)(I.X6q, {
                                            variant: "heading-lg/semibold",
                                            className: es.welcomeHeading,
                                            children: er.intl.string(er.t.DpoBNz),
                                        }),
                                        (0, i.jsx)(I.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: es.welcomeSubheading,
                                            children: er.intl.string(er.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != r ? (0, i.jsx)(C.Z, {}) : null,
                            h,
                        ],
                    }),
                ],
            })
        );
    }
    renderFriendsBody() {
        let { rows: e } = this.props,
            t = this.getInviteKey();
        return 0 === e.length
            ? (0, i.jsx)(I.hzk, {
                  className: es.inviteRowEmptyState,
                  children: (0, i.jsx)(I.OZU, { children: er.intl.string(er.t.ojoWgY) }),
              })
            : null == t
              ? (0, i.jsx)(I.hzk, {
                    className: es.inviteRowEmptyState,
                    children: (0, i.jsx)(I.OZU, { children: er.intl.string(er.t.hzPwGB) }),
                })
              : (0, i.jsx)(I.YAO, {
                    className: es.scroller,
                    sections: [e.length],
                    renderSection: this.renderSection,
                    sectionHeight: 0,
                    renderRow: this.renderRow,
                    rowHeight: this.getRowHeight,
                    paddingBottom: 16,
                });
    }
    renderSection() {
        return null;
    }
    renderBody() {
        var e;
        let { guild: t, showFriends: n, streamUserId: l, application: r } = this.props;
        if (n) return this.renderFriendsBody();
        let s = (0, X.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = F.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, w.eM)(t, a) ? er.intl.string(er.t.HFbByM) : er.intl.string(er.t.ueBhAw);
        return (
            null != l ? (o = er.intl.string(er.t.CXpS1N)) : null != r && (o = er.intl.string(er.t.ueCrHB)),
            (0, i.jsx)(I.hzk, {
                className: es.noScroll,
                children: (0, i.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: ea.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Text, {
                            className: es.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            ee.I,
                            eg(ec({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: s,
                            }),
                        ),
                    ],
                }),
            })
        );
    }
    renderFooter() {
        var e;
        let {
                noInvitesAvailable: t,
                showFriends: n,
                guildScheduledEvent: l,
                streamUserId: r,
                application: s,
                inviteChannel: o,
                modalState: u,
            } = this.props,
            { maxAge: d } = u,
            c = null,
            g = (0, X.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = er.intl.string(er.t.MLkj7O);
            null != r
                ? (e = er.intl.string(er.t["1b9nen"]))
                : null != s
                  ? (e = er.intl.string(er.t.iI1gMj))
                  : null != l
                    ? (e = er.intl.string(er.t.KaWCyM))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = er.intl.string(er.t["2frWa2"])),
                (c = (0, i.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: es.content,
                    children: [
                        (0, i.jsx)(I.vwX, {
                            tag: "h5",
                            className: ea.marginBottom8,
                            children: e,
                        }),
                        (0, i.jsx)(
                            ee.I,
                            eg(ec({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: g,
                            }),
                        ),
                    ],
                }));
        } else
            t ||
                (c = (0, i.jsxs)(T.Z, {
                    justify: T.Z.Justify.BETWEEN,
                    className: ea.marginTop20,
                    children: [
                        (0, i.jsx)(x.$q, {
                            size: 18,
                            type: x.M0.INVERTED,
                            value: d === eh.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(I.Text, {
                                variant: "text-sm/normal",
                                children: er.intl.string(er.t.QKJru7),
                            }),
                        }),
                        (0, i.jsx)(I.ua7, {
                            text: er.intl.string(er.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(I.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eo.cursorPointer,
                                    children: (0, i.jsx)(I.ewm, {
                                        size: "sm",
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css,
                                    }),
                                });
                            },
                        }),
                    ],
                }));
        return null != c
            ? (0, i.jsx)(I.mzw, {
                  className: a()({
                      [es.noPadding]: !n,
                      [es.footer]: n,
                  }),
                  children: c,
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case en.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()],
                });
            case en.RV.SETTINGS:
                return (0, i.jsx)(
                    $.D,
                    eg(ec({}, this.props), {
                        onSetInviteFlags: this.handleSetInviteFlags,
                        headerId: this._headerId,
                        onSelectMaxAge: this.handleSelectMaxAge,
                        onSelectMaxUses: this.handleSelectMaxUses,
                        onToggleTemporary: this.handleToggleTemporary,
                        handleDone: t,
                    }),
                );
            default:
                return null;
        }
    }
    render() {
        let { transitionState: e, inviteChannel: t, guild: n } = this.props;
        return (0, i.jsx)("div", {
            className: this.props.showFriends ? es.wrapper : void 0,
            children: (0, i.jsx)(I.Y0X, {
                impression: {
                    impressionName: g.ImpressionNames.GUILD_INVITE,
                    impressionProperties: {
                        invite_channel_id: null == t ? void 0 : t.id,
                        invite_guild_id: n.id,
                    },
                },
                "aria-labelledby": this._headerId,
                transitionState: e,
                className: es.modal,
                parentComponent: "InstantInvite",
                children: this.getModalContent(),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            ed(this, "_scroller", null),
            ed(this, "_headerId", c().uniqueId()),
            ed(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(en.RV.SETTINGS);
            }),
            ed(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            ed(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            ed(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            ed(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            ed(this, "handleQueryChange", (e) => {
                var t;
                let { setModalState: n } = this.props;
                null == (t = this._scroller) || t.scrollTo({ to: 0 }), (0, j.C)(e), n({ query: e });
            }),
            ed(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            ed(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n,
                });
            }),
            ed(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case q.bm.CHANNEL:
                    case q.bm.GROUP_DM:
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return et.k;
                    default:
                        return 0;
                }
            }),
            ed(this, "renderRow", (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l } = this.props,
                    r = this.getInviteKey(),
                    s = this.props.rows[n],
                    a = "".concat(s.type, "-").concat(s.item.id);
                switch (s.type) {
                    case q.bm.GROUP_DM:
                    case q.bm.CHANNEL:
                        return (0, i.jsx)(
                            et.d,
                            {
                                row: s,
                                channel: s.item,
                                inviteKey: r,
                                location: l,
                            },
                            a,
                        );
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return (0, i.jsx)(
                            et.d,
                            {
                                row: s,
                                user: s.item,
                                inviteKey: r,
                                location: l,
                            },
                            a,
                        );
                    default:
                        return null;
                }
            });
    }
}
ed(ev, "defaultProps", {
    analyticsLocation: el.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: em.value,
});
let ex = r.forwardRef(function (e, t) {
    var n, l;
    let {
            channel: s,
            guild: a,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: g,
            onClose: v,
            welcomeToServer: x,
            page: I,
            analyticsLocation: O,
        } = e,
        { analyticsLocations: T } = (0, E.ZP)(_.Z.INSTANT_INVITE_MODAL),
        y = (0, m.e7)([B.Z, R.Z, D.ZP], () => {
            if (null != s) return s;
            let e = B.Z.getChannelId(),
                t = null == e || (0, ei.AB)(e) ? void 0 : R.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = R.Z.getChannel(t.parent_id)),
                null != t ? t : D.ZP.getDefaultChannel(a.id, !0, el.Plq.CREATE_INSTANT_INVITE)
            );
        }, [s, a.id]),
        C = null;
    null != d ? (C = en.Iq.STREAM) : null != c && (C = en.Iq.EMBEDDED_APPLICATION);
    let w = null != s ? s.getGuildId() : null != a ? a.id : null,
        A = (0, W.xU)({
            guildId: w,
            location: "InstantInviteModalConnected",
        }),
        V = (0, W.WV)({
            guildId: w,
            location: "InstantInviteModalConnected",
        }),
        F = (0, m.e7)([k.Z], () => {
            let e = null != y ? y.id : null;
            return null == e
                ? null
                : k.Z.getInvite(e, {
                      targetType: C,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [y, C, d, c]),
        [G, q, Y, K] = (0, m.Wu)(
            [L.Z, z.ZP],
            () => [
                L.Z.getInviteSuggestionRows(),
                L.Z.getTotalSuggestionsCount() >= 1,
                L.Z.getInitialCounts(),
                null != s && null != y ? z.ZP.getVoiceStatesForChannel(y) : null,
            ],
            [y, s],
        ),
        X = (0, m.e7)(
            [M.ZP],
            () => {
                let e = null != y ? y.id : null;
                return null != w ? M.ZP.getProps(w, e) : void 0;
            },
            [y, w],
            p.Z,
        ),
        J = (0, m.e7)([U.Z], () => null != y && U.Z.can(el.Plq.CREATE_INSTANT_INVITE, y), [y]),
        $ = null === F || !J,
        [ee] = r.useState(() => {
            let e = new Set();
            return (
                null != d && null != K
                    ? K.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != w &&
                      null != X &&
                      C !== en.Iq.EMBEDDED_APPLICATION &&
                      X.rows.forEach((t) => {
                          t.type === M.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        et = null == s ? void 0 : s.id,
        er = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(et), [et]);
    r.useEffect(() => {
        (0, j.x)({
            omitUserIds: ee,
            guild: a,
            channel: s,
            applicationId: c,
            inviteTargetType: C,
        }).catch(el.VqG);
    }, [ee, s, a, c, C]);
    let [es] = (0, S.Z)(null != c ? [c] : []),
        ea = null != F ? F.code : void 0,
        eo = null == F ? void 0 : F.maxAge,
        eu = null == F ? void 0 : F.maxUses,
        ed = null == F ? void 0 : F.temporary,
        eg = a.vanityURLCode,
        ex = null != eg && eg.length > 0,
        eI = !J && !(null == y ? void 0 : y.isGuildVocal()) && ex,
        ef = (null == y ? void 0 : y.type) === el.d4z.GUILD_VOICE,
        ej = null != (n = null == F ? void 0 : F.flags) ? n : 0,
        eN = (0, b.Z)(y);
    J || (null == er ? void 0 : er.invite_code) == null || (ea = er.invite_code);
    let [e_, eE] = r.useState({
            query: "",
            maxAgeOptions: V,
            maxAge: null != (l = null != eo ? eo : A) ? l : W.zv,
            savedMaxAge: eo === eh.value ? (null != A ? A : em.value) : eh.value,
            maxUses: null != eu && 0 !== eu ? eu : ep.value,
            temporary: null != ed && ed,
            networkError: void 0,
            showVanityURL: eI,
            currentPage: null != I ? I : en.RV.MAIN,
            lastPage: void 0,
            flags: ej,
        }),
        eS = r.useCallback((e) => {
            eE((t) => ec({}, t, e));
        }, []),
        eb = r.useCallback(
            (e) => {
                eS({
                    currentPage: e,
                    lastPage: e_.currentPage,
                });
            },
            [e_.currentPage, eS],
        ),
        eO = ef && !eI && !$ && !eN,
        { enabled: eT } = P.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eO },
        ),
        { maxAge: ey, maxUses: eC, temporary: eP, savedMaxAge: eZ, flags: ew } = e_,
        eA = r.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === en.RV.SETTINGS && null != t ? eb(t) : v();
        }, [eb, e_, v]),
        eM = r.useCallback(() => {
            let e = null == y ? void 0 : y.id;
            0 === eC && 0 === ey && !eP && eI
                ? eS({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : J &&
                  null != e &&
                  (eS({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  f.ZP.createInvite(
                      e,
                      {
                          max_age: ey,
                          max_uses: eC,
                          target_type: C,
                          target_user_id: d,
                          target_application_id: null == es ? void 0 : es.id,
                          temporary: eP,
                          flags: ew,
                      },
                      o,
                  ).catch((e) =>
                      eS({
                          networkError: e,
                          showVanityURL: eI,
                      }),
                  )),
                ey !== eh.value && eZ !== eh.value && eS({ savedMaxAge: eh.value });
        }, [eI, J, y, o, null == es ? void 0 : es.id, C, d, ey, eC, eP, eS, eZ, ew]),
        eR = (0, N.Z)(y),
        eD = (0, N.Z)((0, H.yE)(ew, h.$.IS_APPLICATION_BYPASS)),
        ek = null != eR && eR !== y,
        eL = null != eD && eD !== (0, H.yE)(ew, h.$.IS_APPLICATION_BYPASS);
    r.useEffect(() => {
        !eI && (ek || eL) && eM();
    }, [eM, ek, eL, eI]);
    let { canCreateApplicationBypassInvites: eU, isManualApprovalGuild: eV } = (0, Q.R)(a);
    return (0, i.jsx)(E.Gt, {
        value: T,
        children: (0, i.jsx)(ev, {
            ref: t,
            canCreateInvites: J,
            noInvitesAvailable: $,
            inviteChannel: y,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: eg,
            targetType: C,
            targetUserId: d,
            application: es,
            rows: G,
            showFriends: q,
            initialCounts: Y,
            code: ea,
            source: o,
            welcomeToServer: x,
            analyticsLocations: T,
            analyticsLocation: O,
            transitionState: g,
            onClose: v,
            canShowVanityURL: eI,
            isGuestInviteCreationToggleEnabled: eT && eO,
            shouldHideTemporaryInviteToggle: (eT && eO) || eV,
            modalState: e_,
            setModalState: eS,
            changePage: eb,
            onGenerateNewLink: eM,
            handleDone: eA,
            isApplicationBypassToggleEnabled: eU && !$,
        }),
    });
});
function eI(e) {
    let { modal: t } = (0, K._k)({ location: "instant_invite_modal" }),
        n = t ? J.H : ex;
    return (0, i.jsx)(n, ec({}, e));
}
