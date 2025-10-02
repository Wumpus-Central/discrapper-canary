n.d(t, { default: () => ef }), n(997841), n(388685);
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
    I = n(481060),
    x = n(447543),
    f = n(247272),
    N = n(110924),
    _ = n(100527),
    j = n(906732),
    S = n(835473),
    b = n(447003),
    E = n(471445),
    y = n(600164),
    T = n(687516),
    O = n(648159),
    C = n(227672),
    P = n(427679),
    Z = n(601964),
    A = n(199902),
    M = n(439170),
    w = n(592125),
    R = n(984933),
    V = n(341165),
    k = n(751771),
    D = n(496675),
    L = n(158776),
    U = n(944486),
    F = n(594174),
    B = n(938475),
    z = n(626135),
    G = n(630388),
    H = n(971130),
    q = n(301873),
    W = n(559310),
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
    es = n(388032),
    er = n(869306),
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
let { INVITE_OPTIONS_FOREVER: eh, INVITE_OPTIONS_7_DAYS: em, INVITE_OPTIONS_UNLIMITED: ep } = H.ZP;
class ev extends (l = s.PureComponent) {
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
            { maxAge: p, maxUses: v, temporary: I, flags: f } = h;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            m({ networkError: void 0 }),
                x.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: v,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: I,
                        flags: f,
                    },
                    l,
                ).catch((e) => m({ networkError: e }));
        }
        if (
            (g &&
                z.default.track(el.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = A.Z.getStreamForUser(r, n.id),
                t = (0, T.L2)(e, L.Z);
            z.default.track(el.rMx.OPEN_MODAL, {
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
                z.default.track(el.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, G.yE)(t.flags, h.$.IS_GUEST_INVITE) && null != e && x.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, Y.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, b.Z)(e)
            ? (0, i.jsxs)("div", {
                  className: er.warningContainer,
                  children: [
                      (0, i.jsx)(I.Mgn, {
                          size: "custom",
                          className: er.warningIcon,
                          color: v.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(I.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: es.intl.string(es.t.x1SQZW),
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
                  ? es.intl.string(es.t["6VQaqa"])
                  : null != r
                    ? es.intl.formatToPlainString(es.t.ZdK3dX, { applicationName: r.name })
                    : null != l
                      ? es.intl.string(es.t.JKV4FB)
                      : (null == u ? void 0 : u.isGuildStageVoice())
                        ? es.intl.string(es.t.zTrsHx)
                        : es.intl.format(es.t.NvVBJS, { name: t.name })),
            null != u)
        ) {
            let e = (0, E.KS)(u, t);
            null != e &&
                (m = (0, i.jsxs)("div", {
                    className: er.headerChannelContainer,
                    children: [
                        (0, i.jsx)(e, { className: er.channelIcon }),
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
                      className: er.hubHeader,
                      children: [
                          (0, i.jsx)(I.X6q, {
                              className: er.headerCloseButtonSpacing,
                              id: this._headerId,
                              variant: "heading-xl/semibold",
                              color: "header-primary",
                              children: es.intl.string(es.t.WhR38v),
                          }),
                          (0, i.jsx)(I.Text, {
                              color: "header-secondary",
                              variant: "text-md/normal",
                              children: es.intl.string(es.t.Ed4BMj),
                          }),
                          n &&
                              (0, i.jsx)(I.E1j, {
                                  size: "sm",
                                  query: g,
                                  onChange: this.handleQueryChange,
                                  placeholder: es.intl.string(es.t.CmSHY2),
                                  "aria-label": es.intl.string(es.t.CmSHY2),
                                  autoFocus: !0,
                                  onClear: this.handleClearSearch,
                              }),
                      ],
                  })
                : n
                  ? (0, i.jsxs)(I.Kqy, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(I.Kqy, {
                                gap: 0,
                                children: [
                                    (0, i.jsx)(I.vwX, {
                                        id: this._headerId,
                                        tag: "h2",
                                        className: er.headerCloseButtonSpacing,
                                        children: e,
                                    }),
                                    m,
                                ],
                            }),
                            (0, i.jsx)(I.E1j, {
                                size: "sm",
                                query: g,
                                onChange: this.handleQueryChange,
                                placeholder: es.intl.string(es.t.CmSHY2),
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
                                className: a()(ea.marginReset, er.headerCloseButtonSpacing, er.headerText),
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
                        className: er.closeButton,
                        children: (0, i.jsx)(I.olH, { onClick: c }),
                    }),
                    (0, i.jsxs)("div", {
                        className: er.headerContainer,
                        children: [
                            o &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("img", {
                                            className: er.welcomeImage,
                                            src: eu,
                                            alt: "",
                                        }),
                                        (0, i.jsx)(I.X6q, {
                                            variant: "heading-lg/semibold",
                                            className: er.welcomeHeading,
                                            children: es.intl.string(es.t.DpoBNz),
                                        }),
                                        (0, i.jsx)(I.Text, {
                                            variant: "text-md/normal",
                                            color: "text-secondary",
                                            className: er.welcomeSubheading,
                                            children: es.intl.string(es.t["wJ/ouL"]),
                                        }),
                                    ],
                                }),
                            null != s ? (0, i.jsx)(O.Z, {}) : null,
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
            ? (0, i.jsx)(I.hzk, {
                  className: er.inviteRowEmptyState,
                  children: (0, i.jsx)(I.OZU, { children: es.intl.string(es.t.ojoWgY) }),
              })
            : null == l
              ? (0, i.jsx)(I.hzk, {
                    className: er.inviteRowEmptyState,
                    children: (0, i.jsx)(I.OZU, { children: es.intl.string(es.t.hzPwGB) }),
                })
              : n && null != t
                ? (0, i.jsx)(I.YAO, {
                      style: { "--custom-invite-section-header-height": 24 },
                      className: er.scroller,
                      sections: t.map((e) => e.length),
                      renderSection: this.renderSection,
                      sectionHeight: 24,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                      paddingBottom: 16,
                  })
                : (0, i.jsx)(I.YAO, {
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
        let { guild: t, showFriends: n, streamUserId: l, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, X.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = F.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, Z.eM)(t, a) ? es.intl.string(es.t.HFbByM) : es.intl.string(es.t.ueBhAw);
        return (
            null != l ? (o = es.intl.string(es.t.CXpS1N)) : null != s && (o = es.intl.string(es.t.ueCrHB)),
            (0, i.jsx)(I.hzk, {
                className: er.noScroll,
                children: (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: ea.marginBottom20,
                    children: [
                        (0, i.jsx)(I.Text, {
                            className: er.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            ee.I,
                            eg(ec({}, this.props), {
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
            g = (0, X.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = es.intl.string(es.t.MLkj7O);
            null != s
                ? (e = es.intl.string(es.t["1b9nen"]))
                : null != r
                  ? (e = es.intl.string(es.t.iI1gMj))
                  : null != l
                    ? (e = es.intl.string(es.t.KaWCyM))
                    : (null == o ? void 0 : o.isGuildStageVoice()) && (e = es.intl.string(es.t["2frWa2"])),
                (c = (0, i.jsxs)(y.Z, {
                    direction: y.Z.Direction.VERTICAL,
                    className: er.content,
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
                (c = (0, i.jsxs)(y.Z, {
                    justify: y.Z.Justify.BETWEEN,
                    className: ea.marginTop20,
                    children: [
                        (0, i.jsx)(I.XZJ, {
                            checked: d === eh.value,
                            onChange: this.handleToggleMaxAge,
                            label: es.intl.string(es.t.QKJru7),
                            labelType: "secondary",
                        }),
                        (0, i.jsx)(I.ua7, {
                            text: es.intl.string(es.t.Yx4IiI),
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
                [er.isFriendsInVCInvitesExperiment]: s && null != r,
                [er.wrapper]: l,
            }),
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
                className: er.modal,
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
                let { modalState: n, setModalState: l } = this.props,
                    i = { query: e };
                "" === e && "" !== n.query
                    ? ((i.sectionVisibility = ec({}, n.defaultSectionVisibility)), (i.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((i.defaultSectionVisibility = ec({}, n.sectionVisibility)), (i.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, f.C)(e),
                    l(i);
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
            ed(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: eg(ec({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            ed(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: l } = this.props;
                switch ((null == n ? l[t] : n[e][t]).type) {
                    case H.bm.CHANNEL:
                    case H.bm.GROUP_DM:
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return et.k;
                    default:
                        return 0;
                }
            }),
            ed(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: l, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    u = null == s ? l[n] : s[t][n],
                    d = "".concat(u.type, "-").concat(u.item.id);
                if (!this.getSectionVisibility(t)) return null;
                switch (u.type) {
                    case H.bm.GROUP_DM:
                    case H.bm.CHANNEL:
                        return (0, i.jsx)(
                            et.d,
                            {
                                row: u,
                                channel: u.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            d,
                        );
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return (0, i.jsx)(
                            et.d,
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
            ed(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: l } = this.props;
                if (!l || null == n) return null;
                let s = 0 === t ? es.intl.string(es.t.bjIaFB) : es.intl.string(es.t.Sd8Ix8),
                    r = this.getSectionVisibility(t);
                return (0, i.jsx)(eI, {
                    section: t,
                    heading: s,
                    isOpen: r,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function eI(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: s } = e;
    return (0, i.jsxs)(I.P3F, {
        style: { "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg" },
        className: er.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, i.jsx)(I.Text, {
                variant: "text-sm/medium",
                color: "header-muted",
                children: n,
            }),
            (0, i.jsx)(I.CJ0, {
                size: "md",
                color: "currentColor",
                className: er.inviteSectionToggleIcon,
            }),
        ],
    });
}
ed(ev, "defaultProps", {
    analyticsLocation: el.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: em.value,
});
let ex = s.forwardRef(function (e, t) {
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
            page: E,
            analyticsLocation: y,
        } = e,
        { analyticsLocations: T } = (0, j.ZP)(_.Z.INSTANT_INVITE_MODAL),
        O = (0, m.e7)([U.Z, w.Z, R.ZP], () => {
            if (null != r) return r;
            let e = U.Z.getChannelId(),
                t = null == e || (0, ei.AB)(e) ? void 0 : w.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = w.Z.getChannel(t.parent_id)),
                null != t ? t : R.ZP.getDefaultChannel(a.id, !0, el.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        Z = null;
    null != d ? (Z = en.Iq.STREAM) : null != c && (Z = en.Iq.EMBEDDED_APPLICATION);
    let A = null != r ? r.getGuildId() : null != a ? a.id : null,
        L = (0, q.xU)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        F = (0, q.WV)({
            guildId: A,
            location: "InstantInviteModalConnected",
        }),
        z = (0, m.e7)([V.Z], () => {
            let e = null != O ? O.id : null;
            return null == e
                ? null
                : V.Z.getInvite(e, {
                      targetType: Z,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [O, Z, d, c]),
        { isFriendsInVCInvitesEnabled: Y } = (0, W.am)({
            guildId: null != A ? A : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [K, X, J, $] = (0, m.Wu)(
            [k.Z, B.ZP],
            () => [
                k.Z.getInviteSuggestionRows(),
                k.Z.getTotalSuggestionsCount() >= 1,
                k.Z.getInitialCounts(),
                null != r && null != O ? B.ZP.getVoiceStatesForChannel(O) : null,
            ],
            [O, r],
        ),
        ee = (0, m.e7)(
            [M.ZP],
            () => {
                let e = null != O ? O.id : null;
                return null != A ? M.ZP.getProps(A, e) : void 0;
            },
            [O, A],
            p.Z,
        ),
        et = (0, m.e7)([D.Z], () => null != O && D.Z.can(el.Plq.CREATE_INSTANT_INVITE, O), [O]),
        es = null === z || !et,
        [er] = s.useState(() => {
            let e = new Set();
            return (
                null != d && null != $
                    ? $.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != A &&
                      null != ee &&
                      Z !== en.Iq.EMBEDDED_APPLICATION &&
                      ee.rows.forEach((t) => {
                          t.type === M.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        ea = null == r ? void 0 : r.id,
        eo = (0, m.e7)([P.Z], () => P.Z.getStageInstanceByChannel(ea), [ea]);
    s.useEffect(() => {
        (0, f.x)({
            omitUserIds: er,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: Z,
        }).catch(el.VqG);
    }, [er, r, a, c, Z]);
    let [eu] = (0, S.Z)(null != c ? [c] : []),
        ed = null != z ? z.code : void 0,
        eg = null == z ? void 0 : z.maxAge,
        eI = null == z ? void 0 : z.maxUses,
        ex = null == z ? void 0 : z.temporary,
        ef = a.vanityURLCode,
        eN = null != ef && ef.length > 0,
        e_ = !et && !(null == O ? void 0 : O.isGuildVocal()) && eN,
        ej = null != (n = null == z ? void 0 : z.flags) ? n : 0,
        eS = (null == O ? void 0 : O.type) === el.d4z.GUILD_VOICE,
        eb = (0, b.Z)(O);
    et || (null == eo ? void 0 : eo.invite_code) == null || (ed = eo.invite_code);
    let eE = s.useMemo(() => (Y && eS ? (0, H.Qq)(K, A) : null), [Y, eS, K, A]),
        [ey, eT] = s.useState({
            query: "",
            maxAgeOptions: F,
            maxAge: null != (l = null != eg ? eg : L) ? l : q.zv,
            savedMaxAge: eg === eh.value ? (null != L ? L : em.value) : eh.value,
            maxUses: null != eI && 0 !== eI ? eI : ep.value,
            temporary: null != ex && ex,
            networkError: void 0,
            showVanityURL: e_,
            currentPage: null != E ? E : en.RV.MAIN,
            lastPage: void 0,
            flags: ej,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        eO = s.useCallback((e) => {
            eT((t) => ec({}, t, e));
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
        eP = eS && !e_ && !es && !eb,
        { enabled: eZ } = C.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eP },
        ),
        { maxAge: eA, maxUses: eM, temporary: ew, savedMaxAge: eR, flags: eV } = ey,
        ek = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = ey;
            e === en.RV.SETTINGS && null != t ? eC(t) : v();
        }, [eC, ey, v]),
        eD = s.useCallback(() => {
            let e = null == O ? void 0 : O.id;
            0 === eM && 0 === eA && !ew && e_
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
                  x.ZP.createInvite(
                      e,
                      {
                          max_age: eA,
                          max_uses: eM,
                          target_type: Z,
                          target_user_id: d,
                          target_application_id: null == eu ? void 0 : eu.id,
                          temporary: ew,
                          flags: eV,
                      },
                      o,
                  ).catch((e) =>
                      eO({
                          networkError: e,
                          showVanityURL: e_,
                      }),
                  )),
                eA !== eh.value && eR !== eh.value && eO({ savedMaxAge: eh.value });
        }, [e_, et, O, o, null == eu ? void 0 : eu.id, Z, d, eA, eM, ew, eO, eR, eV]),
        eL = (0, N.Z)(O),
        eU = (0, N.Z)((0, G.yE)(eV, h.$.IS_APPLICATION_BYPASS)),
        eF = null != eL && eL !== O,
        eB = null != eU && eU !== (0, G.yE)(eV, h.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !e_ && (eF || eB) && eD();
    }, [eD, eF, eB, e_]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eG } = (0, Q.R)(a);
    return (0, i.jsx)(j.Gt, {
        value: T,
        children: (0, i.jsx)(ev, {
            ref: t,
            canCreateInvites: et,
            noInvitesAvailable: es,
            inviteChannel: O,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ef,
            targetType: Z,
            targetUserId: d,
            application: eu,
            rows: K,
            sections: eE,
            isFriendsInVCInvitesEnabled: Y,
            showFriends: X,
            initialCounts: J,
            code: ed,
            source: o,
            welcomeToServer: I,
            analyticsLocations: T,
            analyticsLocation: y,
            transitionState: g,
            onClose: v,
            canShowVanityURL: e_,
            isGuestInviteCreationToggleEnabled: eZ && eP,
            shouldHideTemporaryInviteToggle: (eZ && eP) || eG,
            modalState: ey,
            setModalState: eO,
            changePage: eC,
            onGenerateNewLink: eD,
            handleDone: ek,
            isApplicationBypassToggleEnabled: ez && !es,
        }),
    });
});
function ef(e) {
    let { modal: t } = (0, K._k)({ location: "instant_invite_modal" }),
        n = t ? J.H : ex;
    return (0, i.jsx)(n, ec({}, e));
}
