n.d(t, { default: () => ey }), n(997841), n(388685);
var i,
    l = n(951288),
    s = n(647438),
    a = n(120356),
    r = n.n(a),
    o = n(512722),
    d = n.n(o),
    u = n(392711),
    c = n.n(u),
    h = n(990547),
    g = n(533800),
    m = n(442837),
    p = n(902704),
    v = n(692547),
    x = n(755721),
    I = n(481060),
    S = n(447543),
    y = n(247272),
    j = n(110924),
    C = n(100527),
    N = n(906732),
    f = n(835473),
    E = n(447003),
    b = n(471445),
    T = n(600164),
    _ = n(687516),
    P = n(648159),
    Z = n(227672),
    M = n(427679),
    A = n(601964),
    w = n(199902),
    V = n(439170),
    R = n(592125),
    L = n(984933),
    O = n(341165),
    k = n(751771),
    U = n(496675),
    D = n(158776),
    F = n(944486),
    B = n(594174),
    z = n(938475),
    G = n(626135),
    H = n(630388),
    q = n(971130),
    W = n(301873),
    K = n(559310),
    Y = n(264229),
    J = n(340541),
    Q = n(366980),
    $ = n(277364),
    X = n(265452),
    ee = n(585385),
    et = n(603236),
    en = n(462376),
    ei = n(245335),
    el = n(981631),
    es = n(176505),
    ea = n(388032),
    er = n(451964),
    eo = n(197571),
    ed = n(103126),
    eu = n(622577);
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
function eh(e) {
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
                ec(e, t, n[t]);
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
let { INVITE_OPTIONS_FOREVER: em, INVITE_OPTIONS_7_DAYS: ep, INVITE_OPTIONS_UNLIMITED: ev } = q.ZP;
class ex extends (i = s.PureComponent) {
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: i,
                canCreateInvites: l,
                analyticsLocation: s,
                streamUserId: a,
                targetType: r,
                targetUserId: o,
                application: d,
                initialCounts: u,
                rows: c,
                showFriends: h,
                modalState: g,
                setModalState: m,
            } = this.props,
            { maxAge: p, maxUses: v, temporary: x, flags: I } = g;
        if (l) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                S.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: v,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: null == d ? void 0 : d.id,
                        temporary: x,
                        flags: I,
                    },
                    i,
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (h &&
                G.default.track(el.rMx.INVITE_SUGGESTION_OPENED, {
                    location: i,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: null == d ? void 0 : d.id,
                }),
            null != a)
        ) {
            let e = w.Z.getStreamForUser(a, n.id),
                t = (0, _.L2)(e, D.Z);
            G.default.track(el.rMx.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: i,
                location: s,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == d ? void 0 : d.id) != null ||
                G.default.track(el.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: i,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, H.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && S.ZP.clearInviteFromStore(e.id);
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
        return (0, E.Z)(e)
            ? (0, l.jsxs)("div", {
                  className: er.warningContainer,
                  children: [
                      (0, l.jsx)(I.Mgn, {
                          size: "custom",
                          className: er.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(I.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: ea.intl.string(ea.t.x1SQZb),
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
                application: a,
                welcomeToServer: o,
                inviteChannel: d,
                modalState: u,
                handleDone: c,
            } = this.props,
            { query: h } = u,
            g = null,
            m = null;
        if (
            ((e = o
                ? null
                : null != s
                  ? ea.intl.string(ea.t["6VQaqd"])
                  : null != a
                    ? ea.intl.formatToPlainString(ea.t.ZdK3dW, { applicationName: a.name })
                    : null != i
                      ? ea.intl.string(ea.t.JKV4FL)
                      : (null == d ? void 0 : d.isGuildStageVoice())
                        ? ea.intl.string(ea.t.zTrsH0)
                        : ea.intl.format(ea.t.NvVBJU, { name: t.name })),
            null != d)
        ) {
            let e = (0, b.KS)(d, t);
            null != e &&
                (m = (0, l.jsxs)("div", {
                    className: er.headerChannelContainer,
                    children: [
                        (0, l.jsx)(e, { className: er.channelIcon }),
                        (0, l.jsx)(I.Text, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            children: d.name,
                        }),
                    ],
                }));
        }
        return (
            (g = t.features.has(el.oNc.HUB)
                ? (0, l.jsxs)("div", {
                      className: er.hubHeader,
                      children: [
                          (0, l.jsx)(I.Heading, {
                              className: er.headerCloseButtonSpacing,
                              id: this._headerId,
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              children: ea.intl.string(ea.t.WhR38i),
                          }),
                          (0, l.jsx)(I.Text, {
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: ea.intl.string(ea.t.Ed4BMs),
                          }),
                          n &&
                              (0, l.jsx)(I.E1j, {
                                  size: "sm",
                                  query: h,
                                  onChange: this.handleQueryChange,
                                  placeholder: ea.intl.string(ea.t.CmSHYx),
                                  "aria-label": ea.intl.string(ea.t.CmSHYx),
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
                                        className: er.headerCloseButtonSpacing,
                                        children: e,
                                    }),
                                    m,
                                ],
                            }),
                            (0, l.jsx)(I.E1j, {
                                size: "sm",
                                query: h,
                                onChange: this.handleQueryChange,
                                placeholder: ea.intl.string(ea.t.CmSHYx),
                                autoFocus: !0,
                                onClear: this.handleClearSearch,
                            }),
                            (0, l.jsx)("div", {
                                className: eo.marginTop8,
                                children: this.renderChannelWarning(),
                            }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(I.Heading, {
                                id: this._headerId,
                                variant: "heading-md/semibold",
                                className: r()(eo.marginReset, er.headerCloseButtonSpacing, er.headerText),
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
                        className: er.closeButton,
                        children: (0, l.jsx)(I.olH, { onClick: c }),
                    }),
                    (0, l.jsxs)("div", {
                        className: er.headerContainer,
                        children: [
                            o &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)("img", {
                                            className: er.welcomeImage,
                                            src: eu,
                                            alt: "",
                                        }),
                                        (0, l.jsx)(I.Heading, {
                                            variant: "heading-lg/semibold",
                                            className: er.welcomeHeading,
                                            children: ea.intl.string(ea.t.DpoBN0),
                                        }),
                                        (0, l.jsx)(I.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: er.welcomeSubheading,
                                            children: ea.intl.string(ea.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != s ? (0, l.jsx)(P.Z, {}) : null,
                            g,
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
                  className: er.inviteRowEmptyState,
                  children: (0, l.jsx)(I.OZU, { children: ea.intl.string(ea.t.ojoWgX) }),
              })
            : null == i
              ? (0, l.jsx)(I.hzk, {
                    className: er.inviteRowEmptyState,
                    children: (0, l.jsx)(I.OZU, { children: ea.intl.string(ea.t.hzPwGG) }),
                })
              : n && null != t
                ? (0, l.jsx)(I.YAO, {
                      style: {
                          "--custom-invite-section-header-height": 24,
                          "--custom-invite-section-header-gap": 12,
                      },
                      className: er.scroller,
                      sections: t.map((e) => e.length),
                      renderSection: this.renderSection,
                      sectionHeight: this.getSectionHeight,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      paddingBottom: 16,
                  })
                : (0, l.jsx)(I.YAO, {
                      className: er.scroller,
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
        let a = (0, Q.Z)(null != (e = this.getInviteKey()) ? e : ""),
            r = B.default.getCurrentUser();
        d()(null != r, "InstantInviteModal: user cannot be undefined");
        let o = (0, A.eM)(t, r) ? ea.intl.string(ea.t.HFbByJ) : ea.intl.string(ea.t.ueBhA9);
        return (
            null != i ? (o = ea.intl.string(ea.t.CXpS1I)) : null != s && (o = ea.intl.string(ea.t.ueCrHB)),
            (0, l.jsx)(I.hzk, {
                className: er.noScroll,
                children: (0, l.jsxs)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: eo.marginBottom20,
                    children: [
                        (0, l.jsx)(I.Text, {
                            className: er.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, l.jsx)(
                            et.I,
                            eg(eh({}, this.props), {
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
                guildScheduledEvent: i,
                streamUserId: s,
                application: a,
                inviteChannel: o,
                modalState: d,
            } = this.props,
            { maxAge: u } = d,
            c = null,
            h = (0, Q.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = ea.intl.string(ea.t.MLkj7N);
            null != s
                ? (e = ea.intl.string(ea.t["1b9neu"]))
                : null != a
                  ? (e = ea.intl.string(ea.t.iI1gMg))
                  : null != i
                    ? (e = ea.intl.string(ea.t.KaWCyD))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = ea.intl.string(ea.t["2frWa3"])),
                (c = (0, l.jsx)(T.Z, {
                    direction: T.Z.Direction.VERTICAL,
                    className: er.content,
                    children: (0, l.jsx)(I.gNt, {
                        label: e,
                        children: (0, l.jsx)(
                            et.I,
                            eg(eh({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: h,
                            }),
                        ),
                    }),
                }));
        } else
            t ||
                (c = (0, l.jsxs)(T.Z, {
                    justify: T.Z.Justify.BETWEEN,
                    className: eo.marginTop20,
                    children: [
                        (0, l.jsx)(x.$q, {
                            size: 18,
                            type: x.M0.INVERTED,
                            value: u === em.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(I.Text, {
                                variant: "text-sm/normal",
                                children: ea.intl.string(ea.t["QKJru/"]),
                            }),
                        }),
                        (0, l.jsx)(I.aML, {
                            "data-migration-pending": !0,
                            text: ea.intl.string(ea.t.Yx4IiC),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, l.jsx)(I.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: ed.cursorPointer,
                                    children: (0, l.jsx)(I.ewm, {
                                        size: "sm",
                                        color: v.Z.unsafe_rawColors.PRIMARY_400.css,
                                    }),
                                });
                            },
                        }),
                    ],
                }));
        return null != c
            ? (0, l.jsx)(I.mzw, {
                  className: r()({
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
            case ei.RV.MAIN:
                return (0, l.jsxs)(l.Fragment, {
                    children: [this.renderHeader(), this.renderBody(), this.renderFooter()],
                });
            case ei.RV.SETTINGS:
                return (0, l.jsx)(
                    ee.D,
                    eg(eh({}, this.props), {
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
            sections: a,
        } = this.props;
        return (0, l.jsx)("div", {
            className: r()({
                [er.isFriendsInVCInvitesExperiment]: s && null != a,
                [er.wrapper]: i,
            }),
            children: (0, l.jsx)(I.Y0X, {
                impression: {
                    impressionName: h.ImpressionNames.GUILD_INVITE,
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
            ec(this, "_scroller", null),
            ec(this, "_headerId", c().uniqueId()),
            ec(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            ec(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(ei.RV.SETTINGS);
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
                let { modalState: n, setModalState: i } = this.props,
                    l = { query: e };
                "" === e && "" !== n.query
                    ? ((l.sectionVisibility = eh({}, n.defaultSectionVisibility)), (l.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((l.defaultSectionVisibility = eh({}, n.sectionVisibility)), (l.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, y.C)(e),
                    i(l);
            }),
            ec(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            ec(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: i } = e;
                t({
                    maxAge: i,
                    savedMaxAge: n,
                });
            }),
            ec(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: eg(eh({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            ec(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: i } = this.props,
                    l = this.getSectionVisibility(e);
                if (null != n && !l) return 0;
                switch ((null == n ? i[t] : n[e][t]).type) {
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
                    { rows: i, sections: s, analyticsLocation: a, source: r } = this.props,
                    o = this.getInviteKey(),
                    d = null == s ? i[n] : s[t][n],
                    u = "".concat(d.type, "-").concat(d.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (d.type) {
                    case q.bm.GROUP_DM:
                    case q.bm.CHANNEL:
                        return (0, l.jsx)(
                            en.d,
                            {
                                row: d,
                                channel: d.item,
                                inviteKey: o,
                                location: a,
                                source: r,
                            },
                            u,
                        );
                    case q.bm.DM:
                    case q.bm.FRIEND:
                        return (0, l.jsx)(
                            en.d,
                            {
                                row: d,
                                user: d.item,
                                inviteKey: o,
                                location: a,
                                source: r,
                            },
                            u,
                        );
                    default:
                        return null;
                }
            }),
            ec(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            ec(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: i } = this.props;
                if (!i || null == n) return null;
                let s = 0 === t ? ea.intl.string(ea.t.y29JXs) : ea.intl.string(ea.t.Sd8Ixw),
                    a = this.getSectionVisibility(t);
                return (0, l.jsx)(eI, {
                    section: t,
                    heading: s,
                    isOpen: a,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function eI(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(I.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: er.inviteSectionHeader,
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
                className: er.inviteSectionToggleIcon,
            }),
        ],
    });
}
ec(ex, "defaultProps", {
    analyticsLocation: el.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: ep.value,
});
let eS = s.forwardRef(function (e, t) {
    var n, i;
    let {
            channel: a,
            guild: r,
            source: o,
            guildScheduledEvent: d,
            streamUserId: u,
            applicationId: c,
            transitionState: h,
            onClose: v,
            welcomeToServer: x,
            page: I,
            analyticsLocation: b,
        } = e,
        { analyticsLocations: T } = (0, N.ZP)(C.Z.INSTANT_INVITE_MODAL),
        _ = (0, m.e7)([F.Z, R.Z, L.ZP], () => {
            if (null != a) return a;
            let e = F.Z.getChannelId(),
                t = null == e || (0, es.AB)(e) ? void 0 : R.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = R.Z.getChannel(t.parent_id)),
                null != t ? t : L.ZP.getDefaultChannel(r.id, !0, el.Plq.CREATE_INSTANT_INVITE)
            );
        }, [a, r.id]),
        P = null;
    null != u ? (P = ei.Iq.STREAM) : null != c && (P = ei.Iq.EMBEDDED_APPLICATION);
    let A = null != a ? a.getGuildId() : null != r ? r.id : null,
        w = (0, W.xU)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        D = (0, W.WV)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        B = (0, m.e7)([O.Z], () => {
            let e = null != _ ? _.id : null;
            return null == e
                ? null
                : O.Z.getInvite(e, {
                      targetType: P,
                      targetUserId: u,
                      targetApplicationId: c,
                  });
        }, [_, P, u, c]),
        { isFriendsInVCInvitesEnabled: G } = (0, K.am)({
            guildId: null != A ? A : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [Y, J, Q, X] = (0, m.Wu)(
            [k.Z, z.ZP],
            () => [
                k.Z.getInviteSuggestionRows(),
                k.Z.getTotalSuggestionsCount() >= 1,
                k.Z.getInitialCounts(),
                null != a && null != _ ? z.ZP.getVoiceStatesForChannel(_) : null,
            ],
            [_, a],
        ),
        ee = (0, m.e7)(
            [V.ZP],
            () => {
                let e = null != _ ? _.id : null;
                return null != A ? V.ZP.getProps(A, e) : void 0;
            },
            [_, A],
            p.Z,
        ),
        et = (0, m.e7)([U.Z], () => null != _ && U.Z.can(el.Plq.CREATE_INSTANT_INVITE, _), [_]),
        en = null === B || !et,
        [ea] = s.useState(() => {
            let e = new Set();
            return (
                null != u && null != X
                    ? X.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != A &&
                      null != ee &&
                      P !== ei.Iq.EMBEDDED_APPLICATION &&
                      ee.rows.forEach((t) => {
                          t.type === V.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        er = null == a ? void 0 : a.id,
        eo = (0, m.e7)([M.Z], () => M.Z.getStageInstanceByChannel(er), [er]);
    s.useEffect(() => {
        (0, y.x)({
            omitUserIds: ea,
            guild: r,
            channel: a,
            applicationId: c,
            inviteTargetType: P,
        }).catch(el.VqG);
    }, [ea, a, r, c, P]);
    let [ed] = (0, f.Z)(null != c ? [c] : []),
        eu = null != B ? B.code : void 0,
        ec = null == B ? void 0 : B.maxAge,
        eg = null == B ? void 0 : B.maxUses,
        eI = null == B ? void 0 : B.temporary,
        eS = r.vanityURLCode,
        ey = null != eS && eS.length > 0,
        ej = !et && !(null == _ ? void 0 : _.isGuildVocal()) && ey,
        eC = null != (n = null == B ? void 0 : B.flags) ? n : 0,
        eN = (null == _ ? void 0 : _.type) === el.d4z.GUILD_VOICE,
        ef = (0, E.Z)(_);
    et || (null == eo ? void 0 : eo.invite_code) == null || (eu = eo.invite_code);
    let eE = s.useMemo(() => (G && eN ? (0, q.Qq)(Y, A) : null), [G, eN, Y, A]),
        [eb, eT] = s.useState({
            query: "",
            maxAgeOptions: D,
            maxAge: null != (i = null != ec ? ec : w) ? i : W.zv,
            savedMaxAge: ec === em.value ? (null != w ? w : ep.value) : em.value,
            maxUses: null != eg && 0 !== eg ? eg : ev.value,
            temporary: null != eI && eI,
            networkError: void 0,
            showVanityURL: ej,
            currentPage: null != I ? I : ei.RV.MAIN,
            lastPage: void 0,
            flags: eC,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        e_ = s.useCallback((e) => {
            eT((t) => eh({}, t, e));
        }, []),
        eP = s.useCallback(
            (e) => {
                e_({
                    currentPage: e,
                    lastPage: eb.currentPage,
                });
            },
            [eb.currentPage, e_],
        ),
        eZ = eN && !ej && !en && !ef,
        { enabled: eM } = Z.o.useExperiment(
            {
                guildId: null == r ? void 0 : r.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eZ },
        ),
        { maxAge: eA, maxUses: ew, temporary: eV, savedMaxAge: eR, flags: eL } = eb,
        eO = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eb;
            e === ei.RV.SETTINGS && null != t ? eP(t) : v();
        }, [eP, eb, v]),
        ek = s.useCallback(() => {
            let e = null == _ ? void 0 : _.id;
            0 === ew && 0 === eA && !eV && ej
                ? e_({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : et &&
                  null != e &&
                  (e_({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  S.ZP.createInvite(
                      e,
                      {
                          max_age: eA,
                          max_uses: ew,
                          target_type: P,
                          target_user_id: u,
                          target_application_id: null == ed ? void 0 : ed.id,
                          temporary: eV,
                          flags: eL,
                      },
                      o,
                  ).catch((e) =>
                      e_({
                          networkError: e,
                          showVanityURL: ej,
                      }),
                  )),
                eA !== em.value && eR !== em.value && e_({ savedMaxAge: em.value });
        }, [ej, et, _, o, null == ed ? void 0 : ed.id, P, u, eA, ew, eV, e_, eR, eL]),
        eU = (0, j.Z)(_),
        eD = (0, j.Z)((0, H.yE)(eL, g.$.IS_APPLICATION_BYPASS)),
        eF = null != eU && eU !== _,
        eB = null != eD && eD !== (0, H.yE)(eL, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ej && (eF || eB) && ek();
    }, [ek, eF, eB, ej]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eG } = (0, $.R)(r);
    return (0, l.jsx)(N.Gt, {
        value: T,
        children: (0, l.jsx)(ex, {
            ref: t,
            canCreateInvites: et,
            noInvitesAvailable: en,
            inviteChannel: _,
            guild: r,
            guildScheduledEvent: d,
            streamUserId: u,
            vanityURLCode: eS,
            targetType: P,
            targetUserId: u,
            application: ed,
            rows: Y,
            sections: eE,
            isFriendsInVCInvitesEnabled: G,
            showFriends: J,
            initialCounts: Q,
            code: eu,
            source: o,
            welcomeToServer: x,
            analyticsLocations: T,
            analyticsLocation: b,
            transitionState: h,
            onClose: v,
            canShowVanityURL: ej,
            isGuestInviteCreationToggleEnabled: eM && eZ,
            shouldHideTemporaryInviteToggle: (eM && eZ) || eG,
            modalState: eb,
            setModalState: e_,
            changePage: eP,
            onGenerateNewLink: ek,
            handleDone: eO,
            isApplicationBypassToggleEnabled: ez && !en,
        }),
    });
});
function ey(e) {
    let { modal: t } = (0, J._k)({ location: "instant_invite_modal" }),
        n = t ? X.InstantInviteRefreshModal : eS;
    return (0, l.jsx)(n, eh({}, e));
}
