n.d(t, { default: () => ex }), n(997841), n(388685);
var l,
    i = n(951288),
    r = n(647438),
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
    I = n(755721),
    x = n(481060),
    f = n(447543),
    N = n(247272),
    j = n(110924),
    _ = n(100527),
    E = n(906732),
    S = n(835473),
    b = n(447003),
    T = n(471445),
    O = n(259473),
    y = n(600164),
    C = n(687516),
    P = n(648159),
    Z = n(227672),
    w = n(427679),
    A = n(601964),
    R = n(199902),
    M = n(439170),
    D = n(592125),
    k = n(984933),
    L = n(341165),
    U = n(751771),
    V = n(496675),
    B = n(158776),
    F = n(944486),
    G = n(594174),
    z = n(938475),
    H = n(626135),
    q = n(630388),
    W = n(971130),
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
    es = n(451964),
    ea = n(197571),
    eo = n(103126),
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
function eh(e, t) {
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
let { INVITE_OPTIONS_FOREVER: eg, INVITE_OPTIONS_7_DAYS: em, INVITE_OPTIONS_UNLIMITED: ep } = W.ZP;
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
                showFriends: h,
                modalState: g,
                setModalState: m,
            } = this.props,
            { maxAge: p, maxUses: v, temporary: I, flags: x } = g;
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
                        temporary: I,
                        flags: x,
                    },
                    l,
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (h &&
                H.default.track(el.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = R.Z.getStreamForUser(s, n.id),
                t = (0, C.L2)(e, B.Z);
            H.default.track(el.rMx.OPEN_MODAL, {
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
                H.default.track(el.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: r,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, q.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && f.ZP.clearInviteFromStore(e.id);
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
                      (0, i.jsx)(x.Mgn, {
                          size: "custom",
                          className: es.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(x.Text, {
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
            { query: h } = d,
            g = null,
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
            let e = (0, T.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)("div", {
                    className: es.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: es.channelIcon }),
                        (0, i.jsx)(x.Text, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            children: u.name,
                        }),
                    ],
                }));
        }
        return (
            (g = t.features.has(el.oNc.HUB)
                ? (0, i.jsxs)("div", {
                      className: es.hubHeader,
                      children: [
                          (0, i.jsx)(x.X6q, {
                              className: a()(es.hubInviteTitle, es.headerCloseButtonSpacing),
                              id: this._headerId,
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              children: er.intl.string(er.t.WhR38v),
                          }),
                          (0, i.jsx)(x.Text, {
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: er.intl.string(er.t.Ed4BMj),
                          }),
                          n &&
                              (0, i.jsx)(x.E1j, {
                                  size: "sm",
                                  query: h,
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
                                children: (0, i.jsx)(x.vwX, {
                                    id: this._headerId,
                                    tag: "h2",
                                    className: a()(ea.marginBottom4, es.headerCloseButtonSpacing, es.headerText),
                                    children: e,
                                }),
                            }),
                            m,
                            (0, i.jsx)(x.E1j, {
                                size: "sm",
                                query: h,
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
                            (0, i.jsx)(x.vwX, {
                                id: this._headerId,
                                tag: "h2",
                                className: a()(ea.marginReset, es.headerCloseButtonSpacing, es.headerText),
                                children: e,
                            }),
                            m,
                            this.renderChannelWarning(),
                        ],
                    })),
            (0, i.jsxs)(x.xBx, {
                separator: n,
                children: [
                    (0, i.jsx)("div", {
                        className: es.closeButton,
                        children: (0, i.jsx)(x.olH, { onClick: c }),
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
                                        (0, i.jsx)(x.X6q, {
                                            variant: "heading-lg/semibold",
                                            className: es.welcomeHeading,
                                            children: er.intl.string(er.t.DpoBNz),
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: es.welcomeSubheading,
                                            children: er.intl.string(er.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != r ? (0, i.jsx)(P.Z, {}) : null,
                            g,
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
            ? (0, i.jsx)(x.hzk, {
                  className: es.inviteRowEmptyState,
                  children: (0, i.jsx)(x.OZU, { children: er.intl.string(er.t.ojoWgY) }),
              })
            : null == t
              ? (0, i.jsx)(x.hzk, {
                    className: es.inviteRowEmptyState,
                    children: (0, i.jsx)(x.OZU, { children: er.intl.string(er.t.hzPwGB) }),
                })
              : (0, i.jsx)(x.YAO, {
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
            a = G.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, A.eM)(t, a) ? er.intl.string(er.t.HFbByM) : er.intl.string(er.t.ueBhAw);
        return (
            null != l ? (o = er.intl.string(er.t.CXpS1N)) : null != r && (o = er.intl.string(er.t.ueCrHB)),
            (0, i.jsx)(x.hzk, {
                className: es.noScroll,
                children: (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: ea.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: es.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            ee.I,
                            eh(ec({}, this.props), {
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
            h = (0, X.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = er.intl.string(er.t.MLkj7O);
            null != r
                ? (e = er.intl.string(er.t["1b9nen"]))
                : null != s
                  ? (e = er.intl.string(er.t.iI1gMj))
                  : null != l
                    ? (e = er.intl.string(er.t.KaWCyM))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = er.intl.string(er.t["2frWa2"])),
                (c = (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: es.content,
                    children: [
                        (0, i.jsx)(x.vwX, {
                            tag: "h5",
                            className: ea.marginBottom8,
                            children: e,
                        }),
                        (0, i.jsx)(
                            ee.I,
                            eh(ec({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: h,
                            }),
                        ),
                    ],
                }));
        } else
            t ||
                (c = (0, i.jsxs)(y.Z, {
                    justify: y.Z.Justify.BETWEEN,
                    className: ea.marginTop20,
                    children: [
                        (0, i.jsx)(I.$q, {
                            size: 18,
                            type: I.M0.INVERTED,
                            value: d === eg.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, i.jsx)(x.Text, {
                                variant: "text-sm/normal",
                                children: er.intl.string(er.t.QKJru7),
                            }),
                        }),
                        (0, i.jsx)(x.ua7, {
                            text: er.intl.string(er.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(x.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: eo.cursorPointer,
                                    children: (0, i.jsx)(x.ewm, {
                                        size: "sm",
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css,
                                    }),
                                });
                            },
                        }),
                    ],
                }));
        return null != c
            ? (0, i.jsx)(x.mzw, {
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
                    eh(ec({}, this.props), {
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
            children: (0, i.jsx)(x.Y0X, {
                impression: {
                    impressionName: h.ImpressionNames.GUILD_INVITE,
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
                null == (t = this._scroller) || t.scrollTo({ to: 0 }), (0, N.C)(e), n({ query: e });
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
                    case W.bm.CHANNEL:
                    case W.bm.GROUP_DM:
                    case W.bm.DM:
                    case W.bm.FRIEND:
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
                    case W.bm.GROUP_DM:
                    case W.bm.CHANNEL:
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
                    case W.bm.DM:
                    case W.bm.FRIEND:
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
let eI = r.forwardRef(function (e, t) {
    var n, l;
    let {
            channel: s,
            guild: a,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: h,
            onClose: v,
            welcomeToServer: I,
            page: x,
            analyticsLocation: T,
        } = e,
        { analyticsLocations: y } = (0, E.ZP)(_.Z.INSTANT_INVITE_MODAL),
        C = (0, m.e7)([F.Z, D.Z, k.ZP], () => {
            if (null != s) return s;
            let e = F.Z.getChannelId(),
                t = null == e || (0, ei.AB)(e) ? void 0 : D.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = D.Z.getChannel(t.parent_id)),
                null != t ? t : k.ZP.getDefaultChannel(a.id, !0, el.Plq.CREATE_INSTANT_INVITE)
            );
        }, [s, a.id]),
        P = null;
    null != d ? (P = en.Iq.STREAM) : null != c && (P = en.Iq.EMBEDDED_APPLICATION);
    let A = null != s ? s.getGuildId() : null != a ? a.id : null,
        R = (0, m.e7)([L.Z], () => {
            let e = null != C ? C.id : null;
            return null == e
                ? null
                : L.Z.getInvite(e, {
                      targetType: P,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [C, P, d, c]),
        [B, G, H, W] = (0, m.Wu)(
            [U.Z, z.ZP],
            () => [
                U.Z.getInviteSuggestionRows(),
                U.Z.getTotalSuggestionsCount() >= 1,
                U.Z.getInitialCounts(),
                null != s && null != C ? z.ZP.getVoiceStatesForChannel(C) : null,
            ],
            [C, s],
        ),
        Y = (0, m.e7)(
            [M.ZP],
            () => {
                let e = null != C ? C.id : null;
                return null != A ? M.ZP.getProps(A, e) : void 0;
            },
            [C, A],
            p.Z,
        ),
        K = (0, m.e7)([V.Z], () => null != C && V.Z.can(el.Plq.CREATE_INSTANT_INVITE, C), [C]),
        X = null === R || !K,
        [J] = r.useState(() => {
            let e = new Set();
            return (
                null != d && null != W
                    ? W.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != A &&
                      null != Y &&
                      P !== en.Iq.EMBEDDED_APPLICATION &&
                      Y.rows.forEach((t) => {
                          t.type === M.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        $ = null == s ? void 0 : s.id,
        ee = (0, m.e7)([w.Z], () => w.Z.getStageInstanceByChannel($), [$]);
    r.useEffect(() => {
        (0, N.x)({
            omitUserIds: J,
            guild: a,
            channel: s,
            applicationId: c,
            inviteTargetType: P,
        }).catch(el.VqG);
    }, [J, s, a, c, P]);
    let [et] = (0, S.Z)(null != c ? [c] : []),
        er = (0, O.Z)({ guildId: A }),
        es = null != R ? R.code : void 0,
        ea = null == R ? void 0 : R.maxAge,
        eo = null == R ? void 0 : R.maxUses,
        eu = null == R ? void 0 : R.temporary,
        ed = a.vanityURLCode,
        eh = null != ed && ed.length > 0,
        eI = !K && !(null == C ? void 0 : C.isGuildVocal()) && eh,
        ex = (null == C ? void 0 : C.type) === el.d4z.GUILD_VOICE,
        ef = null != (n = null == R ? void 0 : R.flags) ? n : 0,
        eN = (0, b.Z)(C);
    K || (null == ee ? void 0 : ee.invite_code) == null || (es = ee.invite_code);
    let [ej, e_] = r.useState({
            query: "",
            maxAge: null != (l = null != ea ? ea : er) ? l : em.value,
            savedMaxAge: ea === eg.value ? (null != er ? er : em.value) : eg.value,
            maxUses: null != eo && 0 !== eo ? eo : ep.value,
            temporary: null != eu && eu,
            networkError: void 0,
            showVanityURL: eI,
            currentPage: null != x ? x : en.RV.MAIN,
            lastPage: void 0,
            flags: ef,
        }),
        eE = r.useCallback((e) => {
            e_((t) => ec({}, t, e));
        }, []),
        eS = r.useCallback(
            (e) => {
                eE({
                    currentPage: e,
                    lastPage: ej.currentPage,
                });
            },
            [ej.currentPage, eE],
        ),
        eb = ex && !eI && !X && !eN,
        { enabled: eT } = Z.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eb },
        ),
        { maxAge: eO, maxUses: ey, temporary: eC, savedMaxAge: eP, flags: eZ } = ej,
        ew = r.useCallback(() => {
            let { currentPage: e, lastPage: t } = ej;
            e === en.RV.SETTINGS && null != t ? eS(t) : v();
        }, [eS, ej, v]),
        eA = r.useCallback(() => {
            let e = null == C ? void 0 : C.id;
            0 === ey && 0 === eO && !eC && eI
                ? eE({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : K &&
                  null != e &&
                  (eE({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  f.ZP.createInvite(
                      e,
                      {
                          max_age: eO,
                          max_uses: ey,
                          target_type: P,
                          target_user_id: d,
                          target_application_id: null == et ? void 0 : et.id,
                          temporary: eC,
                          flags: eZ,
                      },
                      o,
                  ).catch((e) =>
                      eE({
                          networkError: e,
                          showVanityURL: eI,
                      }),
                  )),
                eO !== eg.value && eP !== eg.value && eE({ savedMaxAge: eg.value });
        }, [eI, K, C, o, null == et ? void 0 : et.id, P, d, eO, ey, eC, eE, eP, eZ]),
        eR = (0, j.Z)(C),
        eM = (0, j.Z)((0, q.yE)(eZ, g.$.IS_APPLICATION_BYPASS)),
        eD = null != eR && eR !== C,
        ek = null != eM && eM !== (0, q.yE)(eZ, g.$.IS_APPLICATION_BYPASS);
    r.useEffect(() => {
        !eI && (eD || ek) && eA();
    }, [eA, eD, ek, eI]);
    let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eU } = (0, Q.R)(a);
    return (0, i.jsx)(E.Gt, {
        value: y,
        children: (0, i.jsx)(ev, {
            ref: t,
            canCreateInvites: K,
            noInvitesAvailable: X,
            inviteChannel: C,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ed,
            targetType: P,
            targetUserId: d,
            application: et,
            rows: B,
            showFriends: G,
            initialCounts: H,
            code: es,
            source: o,
            welcomeToServer: I,
            analyticsLocations: y,
            analyticsLocation: T,
            transitionState: h,
            onClose: v,
            canShowVanityURL: eI,
            isGuestInviteCreationToggleEnabled: eT && eb,
            shouldHideTemporaryInviteToggle: (eT && eb) || eU,
            modalState: ej,
            setModalState: eE,
            changePage: eS,
            onGenerateNewLink: eA,
            handleDone: ew,
            isApplicationBypassToggleEnabled: eL && !X,
        }),
    });
});
function ex(e) {
    let { modal: t } = (0, K._k)({ location: "instant_invite_modal" }),
        n = t ? J.H : eI;
    return (0, i.jsx)(n, ec({}, e));
}
