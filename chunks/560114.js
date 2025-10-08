n.d(t, { default: () => eN }), n(997841), n(388685);
var l,
    i = n(951288),
    s = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    u = n.n(o),
    d = n(392711),
    c = n.n(d),
    g = n(990547),
    h = n(533800),
    m = n(442837),
    p = n(902704),
    v = n(692547),
    I = n(755721),
    x = n(481060),
    f = n(447543),
    N = n(247272),
    S = n(110924),
    _ = n(100527),
    j = n(906732),
    b = n(835473),
    E = n(447003),
    y = n(471445),
    T = n(600164),
    O = n(687516),
    C = n(648159),
    P = n(227672),
    Z = n(427679),
    A = n(601964),
    M = n(199902),
    w = n(439170),
    R = n(592125),
    V = n(984933),
    k = n(341165),
    D = n(751771),
    L = n(496675),
    U = n(158776),
    F = n(944486),
    B = n(594174),
    z = n(938475),
    G = n(626135),
    H = n(630388),
    q = n(971130),
    W = n(301873),
    Y = n(559310),
    K = n(264229),
    X = n(340541),
    Q = n(366980),
    $ = n(277364),
    J = n(265452),
    ee = n(585385),
    et = n(603236),
    en = n(462376),
    el = n(245335),
    ei = n(981631),
    es = n(176505),
    er = n(388032),
    ea = n(451964),
    eo = n(197571),
    eu = n(103126),
    ed = n(622577);
function ec(e, t, n) {
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
function eg(e) {
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
                ec(e, t, n[t]);
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
let { INVITE_OPTIONS_FOREVER: em, INVITE_OPTIONS_7_DAYS: ep, INVITE_OPTIONS_UNLIMITED: ev } = q.ZP;
class eI extends (l = s.PureComponent) {
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: l,
                canCreateInvites: i,
                analyticsLocation: s,
                streamUserId: r,
                targetType: a,
                targetUserId: o,
                application: u,
                initialCounts: d,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: m,
            } = this.props,
            { maxAge: p, maxUses: v, temporary: I, flags: x } = h;
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
            (g &&
                G.default.track(ei.rMx.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: null == u ? void 0 : u.id,
                }),
            null != r)
        ) {
            let e = M.Z.getStreamForUser(r, n.id),
                t = (0, O.L2)(e, U.Z);
            G.default.track(ei.rMx.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: l,
                location: s,
                other_user_id: r,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == u ? void 0 : u.id) != null ||
                G.default.track(ei.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, H.yE)(t.flags, h.$.IS_GUEST_INVITE) && null != e && f.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, K.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, E.Z)(e)
            ? (0, i.jsxs)("div", {
                  className: ea.warningContainer,
                  children: [
                      (0, i.jsx)(x.Mgn, {
                          size: "custom",
                          className: ea.warningIcon,
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
                streamUserId: s,
                application: r,
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
                : null != s
                  ? er.intl.string(er.t["6VQaqa"])
                  : null != r
                    ? er.intl.formatToPlainString(er.t.ZdK3dX, { applicationName: r.name })
                    : null != l
                      ? er.intl.string(er.t.JKV4FB)
                      : (null == u ? void 0 : u.isGuildStageVoice())
                        ? er.intl.string(er.t.zTrsHx)
                        : er.intl.format(er.t.NvVBJS, { name: t.name })),
            null != u)
        ) {
            let e = (0, y.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)("div", {
                    className: ea.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: ea.channelIcon }),
                        (0, i.jsx)(x.Text, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            children: u.name,
                        }),
                    ],
                }));
        }
        return (
            (h = t.features.has(ei.oNc.HUB)
                ? (0, i.jsxs)("div", {
                      className: ea.hubHeader,
                      children: [
                          (0, i.jsx)(x.X6q, {
                              className: ea.headerCloseButtonSpacing,
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
                                  query: g,
                                  onChange: this.handleQueryChange,
                                  placeholder: er.intl.string(er.t.CmSHY2),
                                  "aria-label": er.intl.string(er.t.CmSHY2),
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
                                        className: ea.headerCloseButtonSpacing,
                                        children: e,
                                    }),
                                    m,
                                ],
                            }),
                            (0, i.jsx)(x.E1j, {
                                size: "sm",
                                query: g,
                                onChange: this.handleQueryChange,
                                placeholder: er.intl.string(er.t.CmSHY2),
                                autoFocus: !0,
                                onClear: this.handleClearSearch,
                            }),
                            (0, i.jsx)("div", {
                                className: eo.marginTop8,
                                children: this.renderChannelWarning(),
                            }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(x.vwX, {
                                id: this._headerId,
                                tag: "h2",
                                className: a()(eo.marginReset, ea.headerCloseButtonSpacing, ea.headerText),
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
                        className: ea.closeButton,
                        children: (0, i.jsx)(x.olH, { onClick: c }),
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("img", {
                                            className: ea.welcomeImage,
                                            src: ed,
                                            alt: "",
                                        }),
                                        (0, i.jsx)(x.X6q, {
                                            variant: "heading-lg/semibold",
                                            className: ea.welcomeHeading,
                                            children: er.intl.string(er.t.DpoBNz),
                                        }),
                                        (0, i.jsx)(x.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: ea.welcomeSubheading,
                                            children: er.intl.string(er.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != s ? (0, i.jsx)(C.Z, {}) : null,
                            h,
                        ],
                    }),
                ],
            })
        );
    }
    renderFriendsBody() {
        let { rows: e, sections: t, isFriendsInVCInvitesEnabled: n } = this.props,
            l = this.getInviteKey();
        return 0 === e.length
            ? (0, i.jsx)(x.hzk, {
                  className: ea.inviteRowEmptyState,
                  children: (0, i.jsx)(x.OZU, { children: er.intl.string(er.t.ojoWgY) }),
              })
            : null == l
              ? (0, i.jsx)(x.hzk, {
                    className: ea.inviteRowEmptyState,
                    children: (0, i.jsx)(x.OZU, { children: er.intl.string(er.t.hzPwGB) }),
                })
              : n && null != t
                ? (0, i.jsx)(x.YAO, {
                      style: {
                          "--custom-invite-section-header-height": 24,
                          "--custom-invite-section-header-gap": 16,
                      },
                      className: ea.scroller,
                      sections: t.map((e) => e.length),
                      renderSection: this.renderSection,
                      sectionHeight: this.getSectionHeight,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      paddingBottom: 16,
                  })
                : (0, i.jsx)(x.YAO, {
                      className: ea.scroller,
                      sections: [e.length],
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      paddingBottom: 16,
                  });
    }
    renderBody() {
        var e;
        let { guild: t, showFriends: n, streamUserId: l, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, Q.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = B.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, A.eM)(t, a) ? er.intl.string(er.t.HFbByM) : er.intl.string(er.t.ueBhAw);
        return (
            null != l ? (o = er.intl.string(er.t.CXpS1N)) : null != s && (o = er.intl.string(er.t.ueCrHB)),
            (0, i.jsx)(x.hzk, {
                className: ea.noScroll,
                children: (0, i.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: eo.marginBottom20,
                    children: [
                        (0, i.jsx)(x.Text, {
                            className: ea.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            et.I,
                            eh(eg({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: r,
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
                streamUserId: s,
                application: r,
                inviteChannel: o,
                modalState: u,
            } = this.props,
            { maxAge: d } = u,
            c = null,
            g = (0, Q.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = er.intl.string(er.t.MLkj7O);
            null != s
                ? (e = er.intl.string(er.t["1b9nen"]))
                : null != r
                  ? (e = er.intl.string(er.t.iI1gMj))
                  : null != l
                    ? (e = er.intl.string(er.t.KaWCyM))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = er.intl.string(er.t["2frWa2"])),
                (c = (0, i.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: ea.content,
                    children: [
                        (0, i.jsx)(x.vwX, {
                            tag: "h5",
                            className: eo.marginBottom8,
                            children: e,
                        }),
                        (0, i.jsx)(
                            et.I,
                            eh(eg({}, this.props), {
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
                    className: eo.marginTop20,
                    children: [
                        (0, i.jsx)(I.$q, {
                            size: 18,
                            type: I.M0.INVERTED,
                            value: d === em.value,
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
                                    className: eu.cursorPointer,
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
                      [ea.noPadding]: !n,
                      [ea.footer]: n,
                  }),
                  children: c,
              })
            : null;
    }
    getModalContent() {
        let { modalState: e, handleDone: t } = this.props,
            { currentPage: n } = e;
        switch (n) {
            case el.RV.MAIN:
                return (0, i.jsxs)(i.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()],
                });
            case el.RV.SETTINGS:
                return (0, i.jsx)(
                    ee.D,
                    eh(eg({}, this.props), {
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
        let {
            transitionState: e,
            inviteChannel: t,
            guild: n,
            showFriends: l,
            isFriendsInVCInvitesEnabled: s,
            sections: r,
        } = this.props;
        return (0, i.jsx)("div", {
            className: a()({
                [ea.isFriendsInVCInvitesExperiment]: s && null != r,
                [ea.wrapper]: l,
            }),
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
                className: ea.modal,
                parentComponent: "InstantInvite",
                children: this.getModalContent(),
            }),
        });
    }
    constructor(...e) {
        super(...e),
            ec(this, "_scroller", null),
            ec(this, "_headerId", c().uniqueId()),
            ec(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            ec(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(el.RV.SETTINGS);
            }),
            ec(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            ec(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            ec(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            ec(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            ec(this, "handleQueryChange", (e) => {
                var t;
                let { modalState: n, setModalState: l } = this.props,
                    i = { query: e };
                "" === e && "" !== n.query
                    ? ((i.sectionVisibility = eg({}, n.defaultSectionVisibility)), (i.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((i.defaultSectionVisibility = eg({}, n.sectionVisibility)), (i.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, N.C)(e),
                    l(i);
            }),
            ec(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            ec(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n,
                });
            }),
            ec(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: eh(eg({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            ec(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: l } = this.props,
                    i = this.getSectionVisibility(e);
                if (null != n && !i) return 0;
                switch ((null == n ? l[t] : n[e][t]).type) {
                    case q.bm.CHANNEL:
                    case q.bm.GROUP_DM:
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return en.k;
                    default:
                        return 0;
                }
            }),
            ec(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: l, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    u = null == s ? l[n] : s[t][n],
                    d = "".concat(u.type, "-").concat(u.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (u.type) {
                    case q.bm.GROUP_DM:
                    case q.bm.CHANNEL:
                        return (0, i.jsx)(
                            en.d,
                            {
                                row: u,
                                channel: u.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            d,
                        );
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return (0, i.jsx)(
                            en.d,
                            {
                                row: u,
                                user: u.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            d,
                        );
                    default:
                        return null;
                }
            }),
            ec(this, "getSectionHeight", (e) => (0 === e ? 24 : 40)),
            ec(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: l } = this.props;
                if (!l || null == n) return null;
                let s = 0 === t ? er.intl.string(er.t.y29JXl) : er.intl.string(er.t.Sd8Ix8),
                    r = this.getSectionVisibility(t);
                return (0, i.jsx)(ex, {
                    section: t,
                    heading: s,
                    isOpen: r,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function ex(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: s } = e;
    return (0, i.jsxs)(x.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 16 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: ea.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, i.jsx)(x.Text, {
                variant: "text-sm/medium",
                color: "header-muted",
                children: n,
            }),
            (0, i.jsx)(x.CJ0, {
                size: "md",
                color: "currentColor",
                className: ea.inviteSectionToggleIcon,
            }),
        ],
    });
}
ec(eI, "defaultProps", {
    analyticsLocation: ei.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: ep.value,
});
let ef = s.forwardRef(function (e, t) {
    var n, l;
    let {
            channel: r,
            guild: a,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: g,
            onClose: v,
            welcomeToServer: I,
            page: x,
            analyticsLocation: y,
        } = e,
        { analyticsLocations: T } = (0, j.ZP)(_.Z.INSTANT_INVITE_MODAL),
        O = (0, m.e7)([F.Z, R.Z, V.ZP], () => {
            if (null != r) return r;
            let e = F.Z.getChannelId(),
                t = null == e || (0, es.AB)(e) ? void 0 : R.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = R.Z.getChannel(t.parent_id)),
                null != t ? t : V.ZP.getDefaultChannel(a.id, !0, ei.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        C = null;
    null != d ? (C = el.Iq.STREAM) : null != c && (C = el.Iq.EMBEDDED_APPLICATION);
    let A = null != r ? r.getGuildId() : null != a ? a.id : null,
        M = (0, W.xU)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        U = (0, W.WV)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        B = (0, m.e7)([k.Z], () => {
            let e = null != O ? O.id : null;
            return null == e
                ? null
                : k.Z.getInvite(e, {
                      targetType: C,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [O, C, d, c]),
        { isFriendsInVCInvitesEnabled: G } = (0, Y.am)({
            guildId: null != A ? A : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [K, X, Q, J] = (0, m.Wu)(
            [D.Z, z.ZP],
            () => [
                D.Z.getInviteSuggestionRows(),
                D.Z.getTotalSuggestionsCount() >= 1,
                D.Z.getInitialCounts(),
                null != r && null != O ? z.ZP.getVoiceStatesForChannel(O) : null,
            ],
            [O, r],
        ),
        ee = (0, m.e7)(
            [w.ZP],
            () => {
                let e = null != O ? O.id : null;
                return null != A ? w.ZP.getProps(A, e) : void 0;
            },
            [O, A],
            p.Z,
        ),
        et = (0, m.e7)([L.Z], () => null != O && L.Z.can(ei.Plq.CREATE_INSTANT_INVITE, O), [O]),
        en = null === B || !et,
        [er] = s.useState(() => {
            let e = new Set();
            return (
                null != d && null != J
                    ? J.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != A &&
                      null != ee &&
                      C !== el.Iq.EMBEDDED_APPLICATION &&
                      ee.rows.forEach((t) => {
                          t.type === w.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        ea = null == r ? void 0 : r.id,
        eo = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(ea), [ea]);
    s.useEffect(() => {
        (0, N.x)({
            omitUserIds: er,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: C,
        }).catch(ei.VqG);
    }, [er, r, a, c, C]);
    let [eu] = (0, b.Z)(null != c ? [c] : []),
        ed = null != B ? B.code : void 0,
        ec = null == B ? void 0 : B.maxAge,
        eh = null == B ? void 0 : B.maxUses,
        ex = null == B ? void 0 : B.temporary,
        ef = a.vanityURLCode,
        eN = null != ef && ef.length > 0,
        eS = !et && !(null == O ? void 0 : O.isGuildVocal()) && eN,
        e_ = null != (n = null == B ? void 0 : B.flags) ? n : 0,
        ej = (null == O ? void 0 : O.type) === ei.d4z.GUILD_VOICE,
        eb = (0, E.Z)(O);
    et || (null == eo ? void 0 : eo.invite_code) == null || (ed = eo.invite_code);
    let eE = s.useMemo(() => (G && ej ? (0, q.Qq)(K, A) : null), [G, ej, K, A]),
        [ey, eT] = s.useState({
            query: "",
            maxAgeOptions: U,
            maxAge: null != (l = null != ec ? ec : M) ? l : W.zv,
            savedMaxAge: ec === em.value ? (null != M ? M : ep.value) : em.value,
            maxUses: null != eh && 0 !== eh ? eh : ev.value,
            temporary: null != ex && ex,
            networkError: void 0,
            showVanityURL: eS,
            currentPage: null != x ? x : el.RV.MAIN,
            lastPage: void 0,
            flags: e_,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        eO = s.useCallback((e) => {
            eT((t) => eg({}, t, e));
        }, []),
        eC = s.useCallback(
            (e) => {
                eO({
                    currentPage: e,
                    lastPage: ey.currentPage,
                });
            },
            [ey.currentPage, eO],
        ),
        eP = ej && !eS && !en && !eb,
        { enabled: eZ } = P.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eP },
        ),
        { maxAge: eA, maxUses: eM, temporary: ew, savedMaxAge: eR, flags: eV } = ey,
        ek = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = ey;
            e === el.RV.SETTINGS && null != t ? eC(t) : v();
        }, [eC, ey, v]),
        eD = s.useCallback(() => {
            let e = null == O ? void 0 : O.id;
            0 === eM && 0 === eA && !ew && eS
                ? eO({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : et &&
                  null != e &&
                  (eO({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  f.ZP.createInvite(
                      e,
                      {
                          max_age: eA,
                          max_uses: eM,
                          target_type: C,
                          target_user_id: d,
                          target_application_id: null == eu ? void 0 : eu.id,
                          temporary: ew,
                          flags: eV,
                      },
                      o,
                  ).catch((e) =>
                      eO({
                          networkError: e,
                          showVanityURL: eS,
                      }),
                  )),
                eA !== em.value && eR !== em.value && eO({ savedMaxAge: em.value });
        }, [eS, et, O, o, null == eu ? void 0 : eu.id, C, d, eA, eM, ew, eO, eR, eV]),
        eL = (0, S.Z)(O),
        eU = (0, S.Z)((0, H.yE)(eV, h.$.IS_APPLICATION_BYPASS)),
        eF = null != eL && eL !== O,
        eB = null != eU && eU !== (0, H.yE)(eV, h.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !eS && (eF || eB) && eD();
    }, [eD, eF, eB, eS]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eG } = (0, $.R)(a);
    return (0, i.jsx)(j.Gt, {
        value: T,
        children: (0, i.jsx)(eI, {
            ref: t,
            canCreateInvites: et,
            noInvitesAvailable: en,
            inviteChannel: O,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ef,
            targetType: C,
            targetUserId: d,
            application: eu,
            rows: K,
            sections: eE,
            isFriendsInVCInvitesEnabled: G,
            showFriends: X,
            initialCounts: Q,
            code: ed,
            source: o,
            welcomeToServer: I,
            analyticsLocations: T,
            analyticsLocation: y,
            transitionState: g,
            onClose: v,
            canShowVanityURL: eS,
            isGuestInviteCreationToggleEnabled: eZ && eP,
            shouldHideTemporaryInviteToggle: (eZ && eP) || eG,
            modalState: ey,
            setModalState: eO,
            changePage: eC,
            onGenerateNewLink: eD,
            handleDone: ek,
            isApplicationBypassToggleEnabled: ez && !en,
        }),
    });
});
function eN(e) {
    let { modal: t } = (0, X._k)({ location: "instant_invite_modal" }),
        n = t ? J.H : ef;
    return (0, i.jsx)(n, eg({}, e));
}
