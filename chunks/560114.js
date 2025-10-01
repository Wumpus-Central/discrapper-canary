n.d(t, { default: () => ex }), n(997841), n(388685);
var l,
    i = n(951288),
    r = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    u = n.n(o),
    d = n(392711),
    c = n.n(d),
    g = n(990547),
    h = n(533800),
    m = n(442837),
    p = n(902704),
    v = n(692547),
    x = n(481060),
    I = n(447543),
    f = n(247272),
    j = n(110924),
    N = n(100527),
    _ = n(906732),
    S = n(835473),
    b = n(447003),
    E = n(471445),
    T = n(600164),
    O = n(687516),
    y = n(648159),
    C = n(227672),
    P = n(427679),
    Z = n(601964),
    A = n(199902),
    M = n(439170),
    w = n(592125),
    R = n(984933),
    k = n(341165),
    D = n(751771),
    L = n(496675),
    V = n(158776),
    U = n(944486),
    F = n(594174),
    B = n(938475),
    G = n(626135),
    z = n(630388),
    H = n(971130),
    q = n(301873),
    Y = n(264229),
    W = n(340541),
    K = n(366980),
    X = n(277364),
    Q = n(265452),
    $ = n(585385),
    J = n(603236),
    ee = n(462376),
    et = n(245335),
    en = n(981631),
    el = n(176505),
    ei = n(388032),
    er = n(869306),
    ea = n(10198),
    es = n(492297),
    eo = n(622577);
function eu(e, t, n) {
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
function ed(e) {
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
                eu(e, t, n[t]);
            });
    }
    return e;
}
function ec(e, t) {
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
let { INVITE_OPTIONS_FOREVER: eg, INVITE_OPTIONS_7_DAYS: eh, INVITE_OPTIONS_UNLIMITED: em } = H.ZP;
class ep extends (l = r.PureComponent) {
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: l,
                canCreateInvites: i,
                analyticsLocation: r,
                streamUserId: a,
                targetType: s,
                targetUserId: o,
                application: u,
                initialCounts: d,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: m,
            } = this.props,
            { maxAge: p, maxUses: v, temporary: x, flags: f } = h;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                I.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: v,
                        target_user_id: o,
                        target_type: s,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: x,
                        flags: f,
                    },
                    l,
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (g &&
                G.default.track(en.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: null == u ? void 0 : u.id,
                }),
            null != a)
        ) {
            let e = A.Z.getStreamForUser(a, n.id),
                t = (0, O.L2)(e, V.Z);
            G.default.track(en.rMx.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: l,
                location: r,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == u ? void 0 : u.id) != null ||
                G.default.track(en.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: r,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, z.yE)(t.flags, h.$.IS_GUEST_INVITE) && null != e && I.ZP.clearInviteFromStore(e.id);
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
                  className: er.warningContainer,
                  children: [
                      (0, i.jsx)(x.Mgn, {
                          size: "custom",
                          className: er.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(x.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: ei.intl.string(ei.t.x1SQZW),
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
                application: a,
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
                  ? ei.intl.string(ei.t["6VQaqa"])
                  : null != a
                    ? ei.intl.formatToPlainString(ei.t.ZdK3dX, { applicationName: a.name })
                    : null != l
                      ? ei.intl.string(ei.t.JKV4FB)
                      : (null == u ? void 0 : u.isGuildStageVoice())
                        ? ei.intl.string(ei.t.zTrsHx)
                        : ei.intl.format(ei.t.NvVBJS, { name: t.name })),
            null != u)
        ) {
            let e = (0, E.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)("div", {
                    className: er.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: er.channelIcon }),
                        (0, i.jsx)(x.Text, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            children: u.name,
                        }),
                    ],
                }));
        }
        return (
            (h = t.features.has(en.oNc.HUB)
                ? (0, i.jsxs)("div", {
                      className: er.hubHeader,
                      children: [
                          (0, i.jsx)(x.X6q, {
                              className: er.headerCloseButtonSpacing,
                              id: this._headerId,
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              children: ei.intl.string(ei.t.WhR38v),
                          }),
                          (0, i.jsx)(x.Text, {
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: ei.intl.string(ei.t.Ed4BMj),
                          }),
                          n &&
                              (0, i.jsx)(x.E1j, {
                                  size: "sm",
                                  query: g,
                                  onChange: this.handleQueryChange,
                                  placeholder: ei.intl.string(ei.t.CmSHY2),
                                  "aria-label": ei.intl.string(ei.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch,
                              }),
                      ],
                  })
                : n
                  ? (0, i.jsxs)(x.Kqy, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(x.Kqy, {
                                gap: 0,
                                children: [
                                    (0, i.jsx)(x.vwX, {
                                        id: this._headerId,
                                        tag: "h2",
                                        className: er.headerCloseButtonSpacing,
                                        children: e,
                                    }),
                                    m,
                                ],
                            }),
                            (0, i.jsx)(x.E1j, {
                                size: "sm",
                                query: g,
                                onChange: this.handleQueryChange,
                                placeholder: ei.intl.string(ei.t.CmSHY2),
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
                                className: s()(ea.marginReset, er.headerCloseButtonSpacing, er.headerText),
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
                        className: er.closeButton,
                        children: (0, i.jsx)(x.olH, { onClick: c }),
                    }),
                    (0, i.jsxs)("div", {
                        className: er.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("img", {
                                            className: er.welcomeImage,
                                            src: eo,
                                            alt: "",
                                        }),
                                        (0, i.jsx)(x.X6q, {
                                            variant: "heading-lg/semibold",
                                            className: er.welcomeHeading,
                                            children: ei.intl.string(ei.t.DpoBNz),
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: er.welcomeSubheading,
                                            children: ei.intl.string(ei.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != r ? (0, i.jsx)(y.Z, {}) : null,
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
            ? (0, i.jsx)(x.hzk, {
                  className: er.inviteRowEmptyState,
                  children: (0, i.jsx)(x.OZU, { children: ei.intl.string(ei.t.ojoWgY) }),
              })
            : null == t
              ? (0, i.jsx)(x.hzk, {
                    className: er.inviteRowEmptyState,
                    children: (0, i.jsx)(x.OZU, { children: ei.intl.string(ei.t.hzPwGB) }),
                })
              : (0, i.jsx)(x.YAO, {
                    className: er.scroller,
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
        let a = (0, K.Z)(null != (e = this.getInviteKey()) ? e : ""),
            s = F.default.getCurrentUser();
        u()(null != s, "InstantInviteModal: user cannot be undefined");
        let o = (0, Z.eM)(t, s) ? ei.intl.string(ei.t.HFbByM) : ei.intl.string(ei.t.ueBhAw);
        return (
            null != l ? (o = ei.intl.string(ei.t.CXpS1N)) : null != r && (o = ei.intl.string(ei.t.ueCrHB)),
            (0, i.jsx)(x.hzk, {
                className: er.noScroll,
                children: (0, i.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: ea.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: er.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            J.I,
                            ec(ed({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: a,
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
                application: a,
                inviteChannel: o,
                modalState: u,
            } = this.props,
            { maxAge: d } = u,
            c = null,
            g = (0, K.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = ei.intl.string(ei.t.MLkj7O);
            null != r
                ? (e = ei.intl.string(ei.t["1b9nen"]))
                : null != a
                  ? (e = ei.intl.string(ei.t.iI1gMj))
                  : null != l
                    ? (e = ei.intl.string(ei.t.KaWCyM))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ei.intl.string(ei.t["2frWa2"])),
                (c = (0, i.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: er.content,
                    children: [
                        (0, i.jsx)(x.vwX, {
                            tag: "h5",
                            className: ea.marginBottom8,
                            children: e,
                        }),
                        (0, i.jsx)(
                            J.I,
                            ec(ed({}, this.props), {
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
                        (0, i.jsx)(x.XZJ, {
                            checked: d === eg.value,
                            onChange: this.handleToggleMaxAge,
                            label: ei.intl.string(ei.t.QKJru7),
                            labelType: "secondary",
                        }),
                        (0, i.jsx)(x.ua7, {
                            text: ei.intl.string(ei.t.Yx4IiI),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, i.jsx)(x.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: es.cursorPointer,
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
                  className: s()({
                      [er.noPadding]: !n,
                      [er.footer]: n,
                  }),
                  children: c,
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case et.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()],
                });
            case et.RV.SETTINGS:
                return (0, i.jsx)(
                    $.D,
                    ec(ed({}, this.props), {
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
            className: this.props.showFriends ? er.wrapper : void 0,
            children: (0, i.jsx)(x.Y0X, {
                impression: {
                    impressionName: g.ImpressionNames.GUILD_INVITE,
                    impressionProperties: {
                        invite_channel_id: null == t ? void 0 : t.id,
                        invite_guild_id: n.id,
                    },
                },
                "aria-labelledby": this._headerId,
                transitionState: e,
                className: er.modal,
                parentComponent: "InstantInvite",
                children: this.getModalContent(),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            eu(this, "_scroller", null),
            eu(this, "_headerId", c().uniqueId()),
            eu(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(et.RV.SETTINGS);
            }),
            eu(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            eu(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            eu(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            eu(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            eu(this, "handleQueryChange", (e) => {
                var t;
                let { setModalState: n } = this.props;
                null == (t = this._scroller) || t.scrollTo({ to: 0 }), (0, f.C)(e), n({ query: e });
            }),
            eu(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            eu(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n,
                });
            }),
            eu(this, "getRowHeight", (e, t) => {
                if (e > 0) return 0;
                switch (this.props.rows[t].type) {
                    case H.bm.CHANNEL:
                    case H.bm.GROUP_DM:
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return ee.k;
                    default:
                        return 0;
                }
            }),
            eu(this, "renderRow", (e) => {
                let { section: t, row: n } = e;
                if (t > 0) return null;
                let { analyticsLocation: l, source: r } = this.props,
                    a = this.getInviteKey(),
                    s = this.props.rows[n],
                    o = "".concat(s.type, "-").concat(s.item.id);
                switch (s.type) {
                    case H.bm.GROUP_DM:
                    case H.bm.CHANNEL:
                        return (0, i.jsx)(
                            ee.d,
                            {
                                row: s,
                                channel: s.item,
                                inviteKey: a,
                                location: l,
                                source: r,
                            },
                            o,
                        );
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return (0, i.jsx)(
                            ee.d,
                            {
                                row: s,
                                user: s.item,
                                inviteKey: a,
                                location: l,
                                source: r,
                            },
                            o,
                        );
                    default:
                        return null;
                }
            });
    }
}
eu(ep, "defaultProps", {
    analyticsLocation: en.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eh.value,
});
let ev = r.forwardRef(function (e, t) {
    var n, l;
    let {
            channel: a,
            guild: s,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: g,
            onClose: v,
            welcomeToServer: x,
            page: E,
            analyticsLocation: T,
        } = e,
        { analyticsLocations: O } = (0, _.ZP)(N.Z.INSTANT_INVITE_MODAL),
        y = (0, m.e7)([U.Z, w.Z, R.ZP], () => {
            if (null != a) return a;
            let e = U.Z.getChannelId(),
                t = null == e || (0, el.AB)(e) ? void 0 : w.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = w.Z.getChannel(t.parent_id)),
                null != t ? t : R.ZP.getDefaultChannel(s.id, !0, en.Plq.CREATE_INSTANT_INVITE)
            );
        }, [a, s.id]),
        Z = null;
    null != d ? (Z = et.Iq.STREAM) : null != c && (Z = et.Iq.EMBEDDED_APPLICATION);
    let A = null != a ? a.getGuildId() : null != s ? s.id : null,
        V = (0, q.xU)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        F = (0, q.WV)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        G = (0, m.e7)([k.Z], () => {
            let e = null != y ? y.id : null;
            return null == e
                ? null
                : k.Z.getInvite(e, {
                      targetType: Z,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [y, Z, d, c]),
        [H, Y, W, K] = (0, m.Wu)(
            [D.Z, B.ZP],
            () => [
                D.Z.getInviteSuggestionRows(),
                D.Z.getTotalSuggestionsCount() >= 1,
                D.Z.getInitialCounts(),
                null != a && null != y ? B.ZP.getVoiceStatesForChannel(y) : null,
            ],
            [y, a],
        ),
        Q = (0, m.e7)(
            [M.ZP],
            () => {
                let e = null != y ? y.id : null;
                return null != A ? M.ZP.getProps(A, e) : void 0;
            },
            [y, A],
            p.Z,
        ),
        $ = (0, m.e7)([L.Z], () => null != y && L.Z.can(en.Plq.CREATE_INSTANT_INVITE, y), [y]),
        J = null === G || !$,
        [ee] = r.useState(() => {
            let e = new Set();
            return (
                null != d && null != K
                    ? K.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != A &&
                      null != Q &&
                      Z !== et.Iq.EMBEDDED_APPLICATION &&
                      Q.rows.forEach((t) => {
                          t.type === M.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        ei = null == a ? void 0 : a.id,
        er = (0, m.e7)([P.Z], () => P.Z.getStageInstanceByChannel(ei), [ei]);
    r.useEffect(() => {
        (0, f.x)({
            omitUserIds: ee,
            guild: s,
            channel: a,
            applicationId: c,
            inviteTargetType: Z,
        }).catch(en.VqG);
    }, [ee, a, s, c, Z]);
    let [ea] = (0, S.Z)(null != c ? [c] : []),
        es = null != G ? G.code : void 0,
        eo = null == G ? void 0 : G.maxAge,
        eu = null == G ? void 0 : G.maxUses,
        ec = null == G ? void 0 : G.temporary,
        ev = s.vanityURLCode,
        ex = null != ev && ev.length > 0,
        eI = !$ && !(null == y ? void 0 : y.isGuildVocal()) && ex,
        ef = (null == y ? void 0 : y.type) === en.d4z.GUILD_VOICE,
        ej = null != (n = null == G ? void 0 : G.flags) ? n : 0,
        eN = (0, b.Z)(y);
    $ || (null == er ? void 0 : er.invite_code) == null || (es = er.invite_code);
    let [e_, eS] = r.useState({
            query: "",
            maxAgeOptions: F,
            maxAge: null != (l = null != eo ? eo : V) ? l : q.zv,
            savedMaxAge: eo === eg.value ? (null != V ? V : eh.value) : eg.value,
            maxUses: null != eu && 0 !== eu ? eu : em.value,
            temporary: null != ec && ec,
            networkError: void 0,
            showVanityURL: eI,
            currentPage: null != E ? E : et.RV.MAIN,
            lastPage: void 0,
            flags: ej,
        }),
        eb = r.useCallback((e) => {
            eS((t) => ed({}, t, e));
        }, []),
        eE = r.useCallback(
            (e) => {
                eb({
                    currentPage: e,
                    lastPage: e_.currentPage,
                });
            },
            [e_.currentPage, eb],
        ),
        eT = ef && !eI && !J && !eN,
        { enabled: eO } = C.o.useExperiment(
            {
                guildId: null == s ? void 0 : s.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eT },
        ),
        { maxAge: ey, maxUses: eC, temporary: eP, savedMaxAge: eZ, flags: eA } = e_,
        eM = r.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === et.RV.SETTINGS && null != t ? eE(t) : v();
        }, [eE, e_, v]),
        ew = r.useCallback(() => {
            let e = null == y ? void 0 : y.id;
            0 === eC && 0 === ey && !eP && eI
                ? eb({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : $ &&
                  null != e &&
                  (eb({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  I.ZP.createInvite(
                      e,
                      {
                          max_age: ey,
                          max_uses: eC,
                          target_type: Z,
                          target_user_id: d,
                          target_application_id: null == ea ? void 0 : ea.id,
                          temporary: eP,
                          flags: eA,
                      },
                      o,
                  ).catch((e) =>
                      eb({
                          networkError: e,
                          showVanityURL: eI,
                      }),
                  )),
                ey !== eg.value && eZ !== eg.value && eb({ savedMaxAge: eg.value });
        }, [eI, $, y, o, null == ea ? void 0 : ea.id, Z, d, ey, eC, eP, eb, eZ, eA]),
        eR = (0, j.Z)(y),
        ek = (0, j.Z)((0, z.yE)(eA, h.$.IS_APPLICATION_BYPASS)),
        eD = null != eR && eR !== y,
        eL = null != ek && ek !== (0, z.yE)(eA, h.$.IS_APPLICATION_BYPASS);
    r.useEffect(() => {
        !eI && (eD || eL) && ew();
    }, [ew, eD, eL, eI]);
    let { canCreateApplicationBypassInvites: eV, isManualApprovalGuild: eU } = (0, X.R)(s);
    return (0, i.jsx)(_.Gt, {
        value: O,
        children: (0, i.jsx)(ep, {
            ref: t,
            canCreateInvites: $,
            noInvitesAvailable: J,
            inviteChannel: y,
            guild: s,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ev,
            targetType: Z,
            targetUserId: d,
            application: ea,
            rows: H,
            showFriends: Y,
            initialCounts: W,
            code: es,
            source: o,
            welcomeToServer: x,
            analyticsLocations: O,
            analyticsLocation: T,
            transitionState: g,
            onClose: v,
            canShowVanityURL: eI,
            isGuestInviteCreationToggleEnabled: eO && eT,
            shouldHideTemporaryInviteToggle: (eO && eT) || eU,
            modalState: e_,
            setModalState: eb,
            changePage: eE,
            onGenerateNewLink: ew,
            handleDone: eM,
            isApplicationBypassToggleEnabled: eV && !J,
        }),
    });
});
function ex(e) {
    let { modal: t } = (0, W._k)({ location: "instant_invite_modal" }),
        n = t ? Q.H : ev;
    return (0, i.jsx)(n, ed({}, e));
}
