n.d(t, { default: () => eI }), n(997841), n(388685);
var i,
    l = n(951288),
    s = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    d = n.n(o),
    u = n(392711),
    c = n.n(u),
    g = n(990547),
    h = n(533800),
    m = n(442837),
    v = n(902704),
    p = n(692547),
    x = n(755721),
    I = n(481060),
    S = n(447543),
    f = n(247272),
    E = n(110924),
    C = n(100527),
    y = n(906732),
    _ = n(835473),
    N = n(447003),
    T = n(471445),
    b = n(600164),
    j = n(687516),
    A = n(648159),
    Z = n(227672),
    M = n(427679),
    P = n(601964),
    w = n(199902),
    V = n(439170),
    O = n(592125),
    R = n(984933),
    U = n(341165),
    L = n(751771),
    k = n(496675),
    D = n(158776),
    G = n(944486),
    F = n(594174),
    B = n(938475),
    H = n(626135),
    z = n(630388),
    q = n(971130),
    W = n(301873),
    K = n(559310),
    Y = n(264229),
    Q = n(366980),
    J = n(277364),
    $ = n(585385),
    X = n(603236),
    ee = n(462376),
    et = n(245335),
    en = n(981631),
    ei = n(176505),
    el = n(388032),
    es = n(869306),
    er = n(10198),
    ea = n(492297),
    eo = n(622577);
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
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                ed(e, t, n[t]);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { INVITE_OPTIONS_FOREVER: eg, INVITE_OPTIONS_7_DAYS: eh, INVITE_OPTIONS_UNLIMITED: em } = q.ZP;
class ev extends (i = s.PureComponent) {
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: i,
                canCreateInvites: l,
                analyticsLocation: s,
                streamUserId: r,
                targetType: a,
                targetUserId: o,
                application: d,
                initialCounts: u,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: m,
            } = this.props,
            { maxAge: v, maxUses: p, temporary: x, flags: I } = h;
        if (l) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                S.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: p,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: x,
                        flags: I,
                    },
                    i,
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (g &&
                H.default.track(en.rMx.INVITE_SUGGESTION_OPENED, {
                    location: i,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: null == d ? void 0 : d.id,
                }),
            null != r)
        ) {
            let e = w.Z.getStreamForUser(r, n.id),
                t = (0, j.L2)(e, D.Z);
            H.default.track(en.rMx.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: i,
                location: s,
                other_user_id: r,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == d ? void 0 : d.id) != null ||
                H.default.track(en.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: i,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, z.yE)(t.flags, h.$.IS_GUEST_INVITE) && null != e && S.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, Y.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, N.Z)(e)
            ? (0, l.jsxs)("div", {
                  className: es.warningContainer,
                  children: [
                      (0, l.jsx)(I.Mgn, {
                          size: "custom",
                          className: es.warningIcon,
                          color: p.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(I.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: el.intl.string(el.t.x1SQZb),
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
                guildScheduledEvent: i,
                streamUserId: s,
                application: r,
                welcomeToServer: o,
                inviteChannel: d,
                modalState: u,
                handleDone: c,
            } = this.props,
            { query: g } = u,
            h = null,
            m = null;
        if (
            ((e = o
                ? null
                : null != s
                  ? el.intl.string(el.t["6VQaqd"])
                  : null != r
                    ? el.intl.formatToPlainString(el.t.ZdK3dW, { applicationName: r.name })
                    : null != i
                      ? el.intl.string(el.t.JKV4FL)
                      : (null == d ? void 0 : d.isGuildStageVoice())
                        ? el.intl.string(el.t.zTrsH0)
                        : el.intl.format(el.t.NvVBJU, { name: t.name })),
            null != d)
        ) {
            let e = (0, T.KS)(d, t);
            null != e &&
                (m = (0, l.jsxs)("div", {
                    className: es.headerChannelContainer,
                    children: [
                        (0, l.jsx)(e, { className: es.channelIcon }),
                        (0, l.jsx)(I.Text, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            children: d.name,
                        }),
                    ],
                }));
        }
        return (
            (h = t.features.has(en.GuildFeatures.HUB)
                ? (0, l.jsxs)("div", {
                      className: es.hubHeader,
                      children: [
                          (0, l.jsx)(I.Heading, {
                              className: es.headerCloseButtonSpacing,
                              id: this._headerId,
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              children: el.intl.string(el.t.WhR38i),
                          }),
                          (0, l.jsx)(I.Text, {
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: el.intl.string(el.t.Ed4BMs),
                          }),
                          n &&
                              (0, l.jsx)(I.E1j, {
                                  size: "sm",
                                  query: g,
                                  onChange: this.handleQueryChange,
                                  placeholder: el.intl.string(el.t.CmSHYx),
                                  "aria-label": el.intl.string(el.t.CmSHYx),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch,
                              }),
                      ],
                  })
                : n
                  ? (0, l.jsxs)(I.Kqy, {
                        gap: 4,
                        children: [
                            (0, l.jsxs)(I.Kqy, {
                                gap: 0,
                                children: [
                                    (0, l.jsx)(I.Heading, {
                                        id: this._headerId,
                                        variant: "heading-md/semibold",
                                        className: es.headerCloseButtonSpacing,
                                        children: e,
                                    }),
                                    m,
                                ],
                            }),
                            (0, l.jsx)(I.E1j, {
                                size: "sm",
                                query: g,
                                onChange: this.handleQueryChange,
                                placeholder: el.intl.string(el.t.CmSHYx),
                                autoFocus: !0,
                                onClear: this.handleClearSearch,
                            }),
                            (0, l.jsx)("div", {
                                className: er.marginTop8,
                                children: this.renderChannelWarning(),
                            }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(I.Heading, {
                                id: this._headerId,
                                variant: "heading-md/semibold",
                                className: a()(er.marginReset, es.headerCloseButtonSpacing, es.headerText),
                                children: e,
                            }),
                            m,
                            this.renderChannelWarning(),
                        ],
                    })),
            (0, l.jsxs)(I.xBx, {
                separator: n,
                children: [
                    (0, l.jsx)("div", {
                        className: es.closeButton,
                        children: (0, l.jsx)(I.olH, { onClick: c }),
                    }),
                    (0, l.jsxs)("div", {
                        className: es.headerContainer,
                        children: [
                            o &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)("img", {
                                            className: es.welcomeImage,
                                            src: eo,
                                            alt: "",
                                        }),
                                        (0, l.jsx)(I.Heading, {
                                            variant: "heading-lg/semibold",
                                            className: es.welcomeHeading,
                                            children: el.intl.string(el.t.DpoBN0),
                                        }),
                                        (0, l.jsx)(I.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: es.welcomeSubheading,
                                            children: el.intl.string(el.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != s ? (0, l.jsx)(A.Z, {}) : null,
                            h,
                        ],
                    }),
                ],
            })
        );
    }
    renderFriendsBody() {
        let { rows: e, sections: t, isFriendsInVCInvitesEnabled: n } = this.props,
            i = this.getInviteKey();
        return 0 === e.length
            ? (0, l.jsx)(I.hzk, {
                  className: es.inviteRowEmptyState,
                  children: (0, l.jsx)(I.OZU, { children: el.intl.string(el.t.ojoWgX) }),
              })
            : null == i
              ? (0, l.jsx)(I.hzk, {
                    className: es.inviteRowEmptyState,
                    children: (0, l.jsx)(I.OZU, { children: el.intl.string(el.t.hzPwGG) }),
                })
              : n && null != t
                ? (0, l.jsx)(I.YAO, {
                      style: {
                          "--custom-invite-section-header-height": 24,
                          "--custom-invite-section-header-gap": 12,
                      },
                      className: es.scroller,
                      sections: t.map((e) => e.length),
                      renderSection: this.renderSection,
                      sectionHeight: this.getSectionHeight,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      paddingBottom: 16,
                  })
                : (0, l.jsx)(I.YAO, {
                      className: es.scroller,
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
        let { guild: t, showFriends: n, streamUserId: i, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, Q.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = F.default.getCurrentUser();
        d()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, P.eM)(t, a) ? el.intl.string(el.t.HFbByJ) : el.intl.string(el.t.ueBhA9);
        return (
            null != i ? (o = el.intl.string(el.t.CXpS1I)) : null != s && (o = el.intl.string(el.t.ueCrHB)),
            (0, l.jsx)(I.hzk, {
                className: es.noScroll,
                children: (0, l.jsxs)(b.Z, {
                    direction: b.Z.Direction.VERTICAL,
                    className: er.marginBottom20,
                    children: [
                        (0, l.jsx)(I.Text, {
                            className: es.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, l.jsx)(
                            X.I,
                            ec(eu({}, this.props), {
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
                guildScheduledEvent: i,
                streamUserId: s,
                application: r,
                inviteChannel: o,
                modalState: d,
            } = this.props,
            { maxAge: u } = d,
            c = null,
            g = (0, Q.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = el.intl.string(el.t.MLkj7N);
            null != s
                ? (e = el.intl.string(el.t["1b9neu"]))
                : null != r
                  ? (e = el.intl.string(el.t.iI1gMg))
                  : null != i
                    ? (e = el.intl.string(el.t.KaWCyD))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = el.intl.string(el.t["2frWa3"])),
                (c = (0, l.jsx)(b.Z, {
                    direction: b.Z.Direction.VERTICAL,
                    className: es.content,
                    children: (0, l.jsx)(I.gNt, {
                        label: e,
                        children: (0, l.jsx)(
                            X.I,
                            ec(eu({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: g,
                            }),
                        ),
                    }),
                }));
        } else
            t ||
                (c = (0, l.jsxs)(b.Z, {
                    justify: b.Z.Justify.BETWEEN,
                    className: er.marginTop20,
                    children: [
                        (0, l.jsx)(x.$q, {
                            size: 18,
                            type: x.M0.INVERTED,
                            value: u === eg.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(I.Text, {
                                variant: "text-sm/normal",
                                children: el.intl.string(el.t["QKJru/"]),
                            }),
                        }),
                        (0, l.jsx)(I.aML, {
                            "data-migration-pending": !0,
                            text: el.intl.string(el.t.Yx4IiC),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, l.jsx)(I.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ea.cursorPointer,
                                    children: (0, l.jsx)(I.ewm, {
                                        size: "sm",
                                        color: p.Z.unsafe_rawColors.PRIMARY_400.css,
                                    }),
                                });
                            },
                        }),
                    ],
                }));
        return null != c
            ? (0, l.jsx)(I.mzw, {
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
            case et.RV.MAIN:
                return (0, l.jsxs)(l.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()],
                });
            case et.RV.SETTINGS:
                return (0, l.jsx)(
                    $.D,
                    ec(eu({}, this.props), {
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
            showFriends: i,
            isFriendsInVCInvitesEnabled: s,
            sections: r,
        } = this.props;
        return (0, l.jsx)("div", {
            className: a()({
                [es.isFriendsInVCInvitesExperiment]: s && null != r,
                [es.wrapper]: i,
            }),
            children: (0, l.jsx)(I.Y0X, {
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
            ed(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            ed(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(et.RV.SETTINGS);
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
                let { modalState: n, setModalState: i } = this.props,
                    l = { query: e };
                "" === e && "" !== n.query
                    ? ((l.sectionVisibility = eu({}, n.defaultSectionVisibility)), (l.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((l.defaultSectionVisibility = eu({}, n.sectionVisibility)), (l.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, f.C)(e),
                    i(l);
            }),
            ed(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            ed(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: i } = e;
                t({
                    maxAge: i,
                    savedMaxAge: n,
                });
            }),
            ed(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: ec(eu({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            ed(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: i } = this.props,
                    l = this.getSectionVisibility(e);
                if (null != n && !l) return 0;
                switch ((null == n ? i[t] : n[e][t]).type) {
                    case q.bm.CHANNEL:
                    case q.bm.GROUP_DM:
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return ee.k;
                    default:
                        return 0;
                }
            }),
            ed(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: i, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    d = null == s ? i[n] : s[t][n],
                    u = "".concat(d.type, "-").concat(d.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (d.type) {
                    case q.bm.GROUP_DM:
                    case q.bm.CHANNEL:
                        return (0, l.jsx)(
                            ee.d,
                            {
                                row: d,
                                channel: d.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            u,
                        );
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return (0, l.jsx)(
                            ee.d,
                            {
                                row: d,
                                user: d.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            u,
                        );
                    default:
                        return null;
                }
            }),
            ed(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            ed(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: i } = this.props;
                if (!i || null == n) return null;
                let s = 0 === t ? el.intl.string(el.t.y29JXs) : el.intl.string(el.t.Sd8Ixw),
                    r = this.getSectionVisibility(t);
                return (0, l.jsx)(ep, {
                    section: t,
                    heading: s,
                    isOpen: r,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function ep(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(I.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: es.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(I.Text, {
                variant: "text-sm/medium",
                color: "header-muted",
                children: n,
            }),
            (0, l.jsx)(I.CJ0, {
                size: "md",
                color: "currentColor",
                className: es.inviteSectionToggleIcon,
            }),
        ],
    });
}
ed(ev, "defaultProps", {
    analyticsLocation: en.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eh.value,
});
let ex = s.forwardRef(function (e, t) {
    var n, i;
    let {
            channel: r,
            guild: a,
            source: o,
            guildScheduledEvent: d,
            streamUserId: u,
            applicationId: c,
            transitionState: g,
            onClose: p,
            welcomeToServer: x,
            page: I,
            analyticsLocation: T,
        } = e,
        { analyticsLocations: b } = (0, y.ZP)(C.Z.INSTANT_INVITE_MODAL),
        j = (0, m.e7)([G.Z, O.Z, R.ZP], () => {
            if (null != r) return r;
            let e = G.Z.getChannelId(),
                t = null == e || (0, ei.AB)(e) ? void 0 : O.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = O.Z.getChannel(t.parent_id)),
                null != t ? t : R.ZP.getDefaultChannel(a.id, !0, en.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        A = null;
    null != u ? (A = et.Iq.STREAM) : null != c && (A = et.Iq.EMBEDDED_APPLICATION);
    let P = null != r ? r.getGuildId() : null != a ? a.id : null,
        w = (0, W.xU)({
            guildId: P,
            location: "InstantInviteModalConnected",
        }),
        D = (0, W.WV)({
            guildId: P,
            location: "InstantInviteModalConnected",
        }),
        F = (0, m.e7)([U.Z], () => {
            let e = null != j ? j.id : null;
            return null == e
                ? null
                : U.Z.getInvite(e, {
                      targetType: A,
                      targetUserId: u,
                      targetApplicationId: c,
                  });
        }, [j, A, u, c]),
        { isFriendsInVCInvitesEnabled: H } = (0, K.am)({
            guildId: null != P ? P : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [Y, Q, $, X] = (0, m.Wu)(
            [L.Z, B.ZP],
            () => [
                L.Z.getInviteSuggestionRows(),
                L.Z.getTotalSuggestionsCount() >= 1,
                L.Z.getInitialCounts(),
                null != r && null != j ? B.ZP.getVoiceStatesForChannel(j) : null,
            ],
            [j, r],
        ),
        ee = (0, m.e7)(
            [V.ZP],
            () => {
                let e = null != j ? j.id : null;
                return null != P ? V.ZP.getProps(P, e) : void 0;
            },
            [j, P],
            v.Z,
        ),
        el = (0, m.e7)([k.Z], () => null != j && k.Z.can(en.Plq.CREATE_INSTANT_INVITE, j), [j]),
        es = null === F || !el,
        [er] = s.useState(() => {
            let e = new Set();
            return (
                null != u && null != X
                    ? X.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != P &&
                      null != ee &&
                      A !== et.Iq.EMBEDDED_APPLICATION &&
                      ee.rows.forEach((t) => {
                          t.type === V.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        ea = null == r ? void 0 : r.id,
        eo = (0, m.e7)([M.Z], () => M.Z.getStageInstanceByChannel(ea), [ea]);
    s.useEffect(() => {
        (0, f.x)({
            omitUserIds: er,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: A,
        }).catch(en.VqG);
    }, [er, r, a, c, A]);
    let [ed] = (0, _.Z)(null != c ? [c] : []),
        ec = null != F ? F.code : void 0,
        ep = null == F ? void 0 : F.maxAge,
        ex = null == F ? void 0 : F.maxUses,
        eI = null == F ? void 0 : F.temporary,
        eS = a.vanityURLCode,
        ef = null != eS && eS.length > 0,
        eE = !el && !(null == j ? void 0 : j.isGuildVocal()) && ef,
        eC = null != (n = null == F ? void 0 : F.flags) ? n : 0,
        ey = (null == j ? void 0 : j.type) === en.d4z.GUILD_VOICE,
        e_ = (0, N.Z)(j);
    el || (null == eo ? void 0 : eo.invite_code) == null || (ec = eo.invite_code);
    let eN = s.useMemo(() => (H && ey ? (0, q.Qq)(Y, P) : null), [H, ey, Y, P]),
        [eT, eb] = s.useState({
            query: "",
            maxAgeOptions: D,
            maxAge: null != (i = null != ep ? ep : w) ? i : W.zv,
            savedMaxAge: ep === eg.value ? (null != w ? w : eh.value) : eg.value,
            maxUses: null != ex && 0 !== ex ? ex : em.value,
            temporary: null != eI && eI,
            networkError: void 0,
            showVanityURL: eE,
            currentPage: null != I ? I : et.RV.MAIN,
            lastPage: void 0,
            flags: eC,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        ej = s.useCallback((e) => {
            eb((t) => eu({}, t, e));
        }, []),
        eA = s.useCallback(
            (e) => {
                ej({
                    currentPage: e,
                    lastPage: eT.currentPage,
                });
            },
            [eT.currentPage, ej],
        ),
        eZ = ey && !eE && !es && !e_,
        { enabled: eM } = Z.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eZ },
        ),
        { maxAge: eP, maxUses: ew, temporary: eV, savedMaxAge: eO, flags: eR } = eT,
        eU = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eT;
            e === et.RV.SETTINGS && null != t ? eA(t) : p();
        }, [eA, eT, p]),
        eL = s.useCallback(() => {
            let e = null == j ? void 0 : j.id;
            0 === ew && 0 === eP && !eV && eE
                ? ej({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : el &&
                  null != e &&
                  (ej({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  S.ZP.createInvite(
                      e,
                      {
                          max_age: eP,
                          max_uses: ew,
                          target_type: A,
                          target_user_id: u,
                          target_application_id: null == ed ? void 0 : ed.id,
                          temporary: eV,
                          flags: eR,
                      },
                      o,
                  ).catch((e) =>
                      ej({
                          networkError: e,
                          showVanityURL: eE,
                      }),
                  )),
                eP !== eg.value && eO !== eg.value && ej({ savedMaxAge: eg.value });
        }, [eE, el, j, o, null == ed ? void 0 : ed.id, A, u, eP, ew, eV, ej, eO, eR]),
        ek = (0, E.Z)(j),
        eD = (0, E.Z)((0, z.yE)(eR, h.$.IS_APPLICATION_BYPASS)),
        eG = null != ek && ek !== j,
        eF = null != eD && eD !== (0, z.yE)(eR, h.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !eE && (eG || eF) && eL();
    }, [eL, eG, eF, eE]);
    let { canCreateApplicationBypassInvites: eB, isManualApprovalGuild: eH } = (0, J.R)(a);
    return (0, l.jsx)(y.Gt, {
        value: b,
        children: (0, l.jsx)(ev, {
            ref: t,
            canCreateInvites: el,
            noInvitesAvailable: es,
            inviteChannel: j,
            guild: a,
            guildScheduledEvent: d,
            streamUserId: u,
            vanityURLCode: eS,
            targetType: A,
            targetUserId: u,
            application: ed,
            rows: Y,
            sections: eN,
            isFriendsInVCInvitesEnabled: H,
            showFriends: Q,
            initialCounts: $,
            code: ec,
            source: o,
            welcomeToServer: x,
            analyticsLocations: b,
            analyticsLocation: T,
            transitionState: g,
            onClose: p,
            canShowVanityURL: eE,
            isGuestInviteCreationToggleEnabled: eM && eZ,
            shouldHideTemporaryInviteToggle: (eM && eZ) || eH,
            modalState: eT,
            setModalState: ej,
            changePage: eA,
            onGenerateNewLink: eL,
            handleDone: eU,
            isApplicationBypassToggleEnabled: eB && !es,
        }),
    });
});
function eI(e) {
    return (0, l.jsx)(ex, eu({}, e));
}
