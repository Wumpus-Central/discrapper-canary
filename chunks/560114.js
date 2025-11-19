n.d(t, { default: () => eh }), n(997841), n(388685);
var i,
    l = n(54381),
    s = n(473749),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    u = n.n(o),
    d = n(392711),
    c = n.n(d),
    g = n(533800),
    h = n(775086),
    v = n(442837),
    p = n(692547),
    I = n(681715),
    m = n(481060),
    x = n(447543),
    S = n(247272),
    f = n(110924),
    y = n(100527),
    E = n(906732),
    C = n(835473),
    _ = n(447003),
    b = n(471445),
    T = n(687516),
    N = n(227672),
    A = n(427679),
    P = n(601964),
    M = n(199902),
    Z = n(439170),
    w = n(592125),
    j = n(984933),
    V = n(341165),
    O = n(751771),
    R = n(496675),
    U = n(158776),
    G = n(944486),
    k = n(594174),
    D = n(938475),
    F = n(626135),
    L = n(630388),
    B = n(971130),
    H = n(301873),
    q = n(559310),
    W = n(264229),
    z = n(366980),
    K = n(277364),
    Y = n(585385),
    Q = n(603236),
    J = n(462376),
    $ = n(245335),
    X = n(981631),
    ee = n(176505),
    et = n(388032),
    en = n(869306),
    ei = n(492297);
function el(e, t, n) {
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
function es(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
let { INVITE_OPTIONS_FOREVER: ea, INVITE_OPTIONS_7_DAYS: eo, INVITE_OPTIONS_UNLIMITED: eu } = B.ZP;
class ed extends (i = s.PureComponent) {
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
                application: u,
                initialCounts: d,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: v,
            } = this.props,
            { maxAge: p, maxUses: I, temporary: m, flags: S } = h;
        if (l) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            v({ networkError: void 0 }),
                x.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: I,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: m,
                        flags: S,
                    },
                    i,
                ).catch((e) => v({ networkError: e }));
        }
        if (
            (g &&
                F.default.track(X.rMx.INVITE_SUGGESTION_OPENED, {
                    location: i,
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
                t = (0, T.L2)(e, U.Z);
            F.default.track(X.rMx.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: i,
                location: s,
                other_user_id: r,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == u ? void 0 : u.id) != null ||
                F.default.track(X.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: i,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, L.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && x.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, W.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, _.Z)(e)
            ? (0, l.jsxs)("div", {
                  className: en.warningContainer,
                  children: [
                      (0, l.jsx)(m.Mgn, {
                          size: "custom",
                          className: en.warningIcon,
                          color: p.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(m.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: et.intl.string(et.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: n, guildScheduledEvent: i, streamUserId: s, application: r, inviteChannel: a } = this.props;
        if (
            ((e =
                null != s
                    ? et.intl.string(et.t["6VQaqd"])
                    : null != r
                      ? et.intl.formatToPlainString(et.t.ZdK3dW, { applicationName: r.name })
                      : null != i
                        ? et.intl.string(et.t.JKV4FL)
                        : (null == a ? void 0 : a.isGuildStageVoice())
                          ? et.intl.string(et.t.zTrsH0)
                          : et.intl.formatToPlainString(et.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, b.KS)(a, n);
            null != e &&
                (t = et.intl.format(et.t.MkSwTR, {
                    channelName: a.name,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)(
                            "span",
                            {
                                children: [(0, l.jsx)(e, { className: en.channelIcon }), t],
                            },
                            n,
                        ),
                }));
        }
        return n.features.has(X.GuildFeatures.HUB)
            ? {
                  title: et.intl.string(et.t.WhR38i),
                  subtitle: et.intl.string(et.t.Ed4BMs),
              }
            : {
                  title: e,
                  subtitle: t,
              };
    }
    renderFriendsBody() {
        let { modalState: e, showFriends: t, guild: n } = this.props,
            { query: i } = e,
            s = this.getListProps();
        return {
            bodyContent: void 0,
            controls: (0, l.jsxs)(l.Fragment, {
                children: [
                    t &&
                        (0, l.jsx)(m.E1j, {
                            size: "sm",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: et.intl.string(et.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(X.GuildFeatures.HUB) && this.renderChannelWarning(),
                ],
            }),
            listProps: s,
        };
    }
    getListProps() {
        let { rows: e, sections: t, isFriendsInVCInvitesEnabled: n } = this.props,
            i = this.getInviteKey();
        return 0 === e.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  renderRow: () =>
                      (0, l.jsx)("div", {
                          className: en.inviteRowEmptyState,
                          children: (0, l.jsx)(m.OZU, { children: et.intl.string(et.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == i
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: en.inviteRowEmptyState,
                            children: (0, l.jsx)(m.OZU, { children: et.intl.string(et.t.hzPwGG) }),
                        }),
                    rowHeight: 200,
                }
              : n && null != t
                ? {
                      sections: t.map((e) => e.length),
                      renderSection: this.renderSection,
                      sectionHeight: this.getSectionHeight,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                  }
                : {
                      sections: [e.length],
                      renderSection: this.renderSection,
                      sectionHeight: 0,
                      renderRow: this.renderRow,
                      rowHeight: this.getRowHeight,
                  };
    }
    getBodyContent() {
        var e;
        let { guild: t, showFriends: n, streamUserId: i, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, z.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = k.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, P.eM)(t, a) ? et.intl.string(et.t.HFbByJ) : et.intl.string(et.t.ueBhA9);
        return (
            null != i ? (o = et.intl.string(et.t.CXpS1I)) : null != s && (o = et.intl.string(et.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(m.Text, {
                            className: en.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, l.jsx)(
                            Q.I,
                            er(es({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: r,
                            }),
                        ),
                    ],
                }),
                controls: void 0,
                listProps: void 0,
            }
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
                inviteChannel: a,
                modalState: o,
            } = this.props,
            { maxAge: u } = o,
            d = null,
            c = (0, z.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = et.intl.string(et.t.MLkj7N);
            null != s
                ? (e = et.intl.string(et.t["1b9neu"]))
                : null != r
                  ? (e = et.intl.string(et.t.iI1gMg))
                  : null != i
                    ? (e = et.intl.string(et.t.KaWCyD))
                    : (null == a ? void 0 : a.isGuildStageVoice()) && (e = et.intl.string(et.t["2frWa3"])),
                (d = (0, l.jsx)(m.gNt, {
                    label: e,
                    children: (0, l.jsx)(
                        Q.I,
                        er(es({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, l.jsxs)("div", {
                    className: en.footerWithCheckbox,
                    children: [
                        (0, l.jsx)(m.Checkbox, {
                            checked: u === ea.value,
                            onChange: this.handleToggleMaxAge,
                            label: et.intl.string(et.t["QKJru/"]),
                        }),
                        (0, l.jsx)(I.u, {
                            text: et.intl.string(et.t.Yx4IiC),
                            children: (0, l.jsx)(m.P3F, {
                                onClick: this.openSettings,
                                className: ei.cursorPointer,
                                children: (0, l.jsx)(m.ewm, {
                                    size: "sm",
                                    color: p.Z.unsafe_rawColors.PRIMARY_400.css,
                                }),
                            }),
                        }),
                    ],
                }));
        return d;
    }
    getModal() {
        let { modalState: e, handleDone: t, transitionState: n, onClose: i } = this.props,
            { currentPage: s } = e;
        switch (s) {
            case $.RV.MAIN:
                let { title: r, subtitle: a } = this.getHeaderContent(),
                    { bodyContent: o, controls: u, listProps: d } = this.getBodyContent();
                return (0, l.jsx)(h.u, {
                    transitionState: n,
                    onClose: i,
                    title: r,
                    subtitle: a,
                    input: u,
                    listProps: d,
                    preview: this.renderFooter(),
                    actions: [],
                    children: o,
                });
            case $.RV.SETTINGS:
                return (0, l.jsx)(
                    Y.D,
                    er(es({}, this.props), {
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
        let { showFriends: e, isFriendsInVCInvitesEnabled: t, sections: n } = this.props;
        return (0, l.jsx)("div", {
            className: a()({
                [en.isFriendsInVCInvitesExperiment]: t && null != n,
                [en.wrapper]: e,
            }),
            children: this.getModal(),
        });
    }
    constructor(...e) {
        super(...e),
            el(this, "_scroller", null),
            el(this, "_headerId", c().uniqueId()),
            el(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            el(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e($.RV.SETTINGS);
            }),
            el(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            el(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            el(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            el(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            el(this, "handleQueryChange", (e) => {
                var t;
                let { modalState: n, setModalState: i } = this.props,
                    l = { query: e };
                "" === e && "" !== n.query
                    ? ((l.sectionVisibility = es({}, n.defaultSectionVisibility)), (l.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((l.defaultSectionVisibility = es({}, n.sectionVisibility)), (l.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, S.C)(e),
                    i(l);
            }),
            el(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            el(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: i } = e;
                t({
                    maxAge: i,
                    savedMaxAge: n,
                });
            }),
            el(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: er(es({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            el(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: i } = this.props,
                    l = this.getSectionVisibility(e);
                if (null != n && !l) return 0;
                switch ((null == n ? i[t] : n[e][t]).type) {
                    case B.bm.CHANNEL:
                    case B.bm.GROUP_DM:
                    case B.bm.DM:
                    case B.bm.FRIEND:
                        return J.k;
                    default:
                        return 0;
                }
            }),
            el(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: i, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    u = null == s ? i[n] : s[t][n],
                    d = "".concat(u.type, "-").concat(u.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (u.type) {
                    case B.bm.GROUP_DM:
                    case B.bm.CHANNEL:
                        return (0, l.jsx)(
                            J.d,
                            {
                                row: u,
                                channel: u.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            d,
                        );
                    case B.bm.DM:
                    case B.bm.FRIEND:
                        return (0, l.jsx)(
                            J.d,
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
            el(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            el(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: i } = this.props;
                if (!i || null == n) return null;
                let s = 0 === t ? et.intl.string(et.t.y29JXs) : et.intl.string(et.t.Sd8Ixw),
                    r = this.getSectionVisibility(t);
                return (0, l.jsx)(ec, {
                    section: t,
                    heading: s,
                    isOpen: r,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function ec(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(m.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: en.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "header-muted",
                children: n,
            }),
            (0, l.jsx)(m.CJ0, {
                size: "md",
                color: "currentColor",
                className: en.inviteSectionToggleIcon,
            }),
        ],
    });
}
el(ed, "defaultProps", {
    analyticsLocation: X.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eo.value,
});
let eg = s.forwardRef(function (e, t) {
    var n, i;
    let {
            channel: r,
            guild: a,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: h,
            onClose: p,
            page: I,
            analyticsLocation: m,
        } = e,
        { analyticsLocations: b } = (0, E.ZP)(y.Z.INSTANT_INVITE_MODAL),
        T = (0, v.e7)([G.Z, w.Z, j.ZP], () => {
            if (null != r) return r;
            let e = G.Z.getChannelId(),
                t = null == e || (0, ee.AB)(e) ? void 0 : w.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = w.Z.getChannel(t.parent_id)),
                null != t ? t : j.ZP.getDefaultChannel(a.id, !0, X.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        P = null;
    null != d ? (P = $.Iq.STREAM) : null != c && (P = $.Iq.EMBEDDED_APPLICATION);
    let M = null != r ? r.getGuildId() : null != a ? a.id : null,
        U = (0, H.xU)({
            guildId: M,
            location: "InstantInviteModalConnected",
        }),
        k = (0, H.WV)({
            guildId: M,
            location: "InstantInviteModalConnected",
        }),
        F = (0, v.e7)([V.Z], () => {
            let e = null != T ? T.id : null;
            return null == e
                ? null
                : V.Z.getInvite(e, {
                      targetType: P,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [T, P, d, c]),
        { isFriendsInVCInvitesEnabled: W } = (0, q.am)({
            guildId: null != M ? M : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [z, Y, Q, J] = (0, v.Wu)(
            [O.Z, D.ZP],
            () => [
                O.Z.getInviteSuggestionRows(),
                O.Z.getTotalSuggestionsCount() >= 1,
                O.Z.getInitialCounts(),
                null != r && null != T ? D.ZP.getVoiceStatesForChannel(T) : null,
            ],
            [T, r],
        ),
        et = s.useMemo(() => {
            let e = null != T ? T.id : null;
            return null != M ? Z.ZP.getProps(M, e) : void 0;
        }, [T, M]),
        en = (0, v.e7)([R.Z], () => null != T && R.Z.can(X.Plq.CREATE_INSTANT_INVITE, T), [T]),
        ei = null === F || !en,
        el = (null == T ? void 0 : T.type) === X.d4z.GUILD_VOICE,
        er = (0, _.Z)(T),
        ec = s.useMemo(() => {
            let e = new Set();
            return (
                el || null != d
                    ? null == J ||
                      J.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != M &&
                      null != et &&
                      P !== $.Iq.EMBEDDED_APPLICATION &&
                      et.rows.forEach((t) => {
                          t.type === Z.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [el, et, d, J, M, P]),
        eg = null == r ? void 0 : r.id,
        eh = (0, v.e7)([A.Z], () => A.Z.getStageInstanceByChannel(eg), [eg]);
    s.useEffect(() => {
        (0, S.x)({
            omitUserIds: ec,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: P,
        }).catch(X.VqG);
    }, [ec, r, a, c, P]);
    let [ev] = (0, C.Z)(null != c ? [c] : []),
        ep = null != F ? F.code : void 0,
        eI = null == F ? void 0 : F.maxAge,
        em = null == F ? void 0 : F.maxUses,
        ex = null == F ? void 0 : F.temporary,
        eS = a.vanityURLCode,
        ef = null != eS && eS.length > 0,
        ey = !en && !(null == T ? void 0 : T.isGuildVocal()) && ef,
        eE = null != (n = null == F ? void 0 : F.flags) ? n : 0;
    en || (null == eh ? void 0 : eh.invite_code) == null || (ep = eh.invite_code);
    let eC = s.useMemo(() => (W && el ? (0, B.Qq)(z, M) : null), [W, el, z, M]),
        [e_, eb] = s.useState({
            query: "",
            maxAgeOptions: k,
            maxAge: null != (i = null != eI ? eI : U) ? i : H.zv,
            savedMaxAge: eI === ea.value ? (null != U ? U : eo.value) : ea.value,
            maxUses: null != em && 0 !== em ? em : eu.value,
            temporary: null != ex && ex,
            networkError: void 0,
            showVanityURL: ey,
            currentPage: null != I ? I : $.RV.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        eT = s.useCallback((e) => {
            eb((t) => es({}, t, e));
        }, []),
        eN = s.useCallback(
            (e) => {
                eT({
                    currentPage: e,
                    lastPage: e_.currentPage,
                });
            },
            [e_.currentPage, eT],
        ),
        eA = el && !ey && !ei && !er,
        { enabled: eP } = N.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eA },
        ),
        { maxAge: eM, maxUses: eZ, temporary: ew, savedMaxAge: ej, flags: eV } = e_,
        eO = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === $.RV.SETTINGS && null != t ? eN(t) : p();
        }, [eN, e_, p]),
        eR = s.useCallback(() => {
            let e = null == T ? void 0 : T.id;
            0 === eZ && 0 === eM && !ew && ey
                ? eT({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : en &&
                  null != e &&
                  (eT({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  x.ZP.createInvite(
                      e,
                      {
                          max_age: eM,
                          max_uses: eZ,
                          target_type: P,
                          target_user_id: d,
                          target_application_id: null == ev ? void 0 : ev.id,
                          temporary: ew,
                          flags: eV,
                      },
                      o,
                  ).catch((e) =>
                      eT({
                          networkError: e,
                          showVanityURL: ey,
                      }),
                  )),
                eM !== ea.value && ej !== ea.value && eT({ savedMaxAge: ea.value });
        }, [ey, en, T, o, null == ev ? void 0 : ev.id, P, d, eM, eZ, ew, eT, ej, eV]),
        eU = (0, f.Z)(T),
        eG = (0, f.Z)((0, L.yE)(eV, g.$.IS_APPLICATION_BYPASS)),
        ek = null != eU && eU !== T,
        eD = null != eG && eG !== (0, L.yE)(eV, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ey && (ek || eD) && eR();
    }, [eR, ek, eD, ey]);
    let { canCreateApplicationBypassInvites: eF, isManualApprovalGuild: eL } = (0, K.R)(a);
    return (0, l.jsx)(E.Gt, {
        value: b,
        children: (0, l.jsx)(ed, {
            ref: t,
            canCreateInvites: en,
            noInvitesAvailable: ei,
            inviteChannel: T,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: eS,
            targetType: P,
            targetUserId: d,
            application: ev,
            rows: z,
            sections: eC,
            isFriendsInVCInvitesEnabled: W,
            showFriends: Y,
            initialCounts: Q,
            code: ep,
            source: o,
            analyticsLocations: b,
            analyticsLocation: m,
            transitionState: h,
            onClose: p,
            canShowVanityURL: ey,
            isGuestInviteCreationToggleEnabled: eP && eA,
            shouldHideTemporaryInviteToggle: (eP && eA) || eL,
            modalState: e_,
            setModalState: eT,
            changePage: eN,
            onGenerateNewLink: eR,
            handleDone: eO,
            isApplicationBypassToggleEnabled: eF && !ei,
        }),
    });
});
function eh(e) {
    return (0, l.jsx)(eg, es({}, e));
}
