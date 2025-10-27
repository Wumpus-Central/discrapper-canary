n.d(t, { default: () => ep }), n(997841), n(388685);
var i,
    l = n(951288),
    s = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    u = n.n(o),
    d = n(392711),
    c = n.n(d),
    g = n(533800),
    h = n(775086),
    v = n(442837),
    p = n(902704),
    I = n(692547),
    m = n(755721),
    x = n(481060),
    S = n(447543),
    f = n(247272),
    E = n(110924),
    y = n(100527),
    C = n(906732),
    _ = n(835473),
    T = n(447003),
    b = n(471445),
    N = n(600164),
    A = n(687516),
    Z = n(227672),
    M = n(427679),
    P = n(601964),
    w = n(199902),
    j = n(439170),
    V = n(592125),
    O = n(984933),
    R = n(341165),
    U = n(751771),
    L = n(496675),
    G = n(158776),
    k = n(944486),
    D = n(594174),
    F = n(938475),
    B = n(626135),
    H = n(630388),
    z = n(971130),
    q = n(301873),
    W = n(559310),
    K = n(264229),
    Y = n(366980),
    Q = n(277364),
    J = n(585385),
    $ = n(603236),
    X = n(462376),
    ee = n(245335),
    et = n(981631),
    en = n(176505),
    ei = n(388032),
    el = n(451964),
    es = n(103126);
function er(e, t, n) {
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
function ea(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
let { INVITE_OPTIONS_FOREVER: eu, INVITE_OPTIONS_7_DAYS: ed, INVITE_OPTIONS_UNLIMITED: ec } = z.ZP;
class eg extends (i = s.PureComponent) {
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
            { maxAge: p, maxUses: I, temporary: m, flags: x } = h;
        if (l) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            v({ networkError: void 0 }),
                S.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: p,
                        max_uses: I,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: m,
                        flags: x,
                    },
                    i,
                ).catch((e) => v({ networkError: e }));
        }
        if (
            (g &&
                B.default.track(et.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = w.Z.getStreamForUser(r, n.id),
                t = (0, A.L2)(e, G.Z);
            B.default.track(et.rMx.OPEN_MODAL, {
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
                B.default.track(et.rMx.OPEN_MODAL, {
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
            : (0, K.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, T.Z)(e)
            ? (0, l.jsxs)("div", {
                  className: el.warningContainer,
                  children: [
                      (0, l.jsx)(x.Mgn, {
                          size: "custom",
                          className: el.warningIcon,
                          color: I.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(x.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: ei.intl.string(ei.t.x1SQZb),
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
                    ? ei.intl.string(ei.t["6VQaqd"])
                    : null != r
                      ? ei.intl.formatToPlainString(ei.t.ZdK3dW, { applicationName: r.name })
                      : null != i
                        ? ei.intl.string(ei.t.JKV4FL)
                        : (null == a ? void 0 : a.isGuildStageVoice())
                          ? ei.intl.string(ei.t.zTrsH0)
                          : ei.intl.formatToPlainString(ei.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, b.KS)(a, n);
            null != e &&
                (t = ei.intl.format(ei.t.MkSwTR, {
                    channelName: a.name,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)(
                            "span",
                            {
                                children: [(0, l.jsx)(e, { className: el.channelIcon }), t],
                            },
                            n,
                        ),
                }));
        }
        return n.features.has(et.GuildFeatures.HUB)
            ? {
                  title: ei.intl.string(ei.t.WhR38i),
                  subtitle: ei.intl.string(ei.t.Ed4BMs),
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
                        (0, l.jsx)(x.E1j, {
                            size: "sm",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: ei.intl.string(ei.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(et.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: el.inviteRowEmptyState,
                          children: (0, l.jsx)(x.OZU, { children: ei.intl.string(ei.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == i
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: el.inviteRowEmptyState,
                            children: (0, l.jsx)(x.OZU, { children: ei.intl.string(ei.t.hzPwGG) }),
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
        let r = (0, Y.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = D.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, P.eM)(t, a) ? ei.intl.string(ei.t.HFbByJ) : ei.intl.string(ei.t.ueBhA9);
        return (
            null != i ? (o = ei.intl.string(ei.t.CXpS1I)) : null != s && (o = ei.intl.string(ei.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.Text, {
                            className: el.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, l.jsx)(
                            $.I,
                            eo(ea({}, this.props), {
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
            c = (0, Y.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = ei.intl.string(ei.t.MLkj7N);
            null != s
                ? (e = ei.intl.string(ei.t["1b9neu"]))
                : null != r
                  ? (e = ei.intl.string(ei.t.iI1gMg))
                  : null != i
                    ? (e = ei.intl.string(ei.t.KaWCyD))
                    : (null == a ? void 0 : a.isGuildStageVoice()) && (e = ei.intl.string(ei.t["2frWa3"])),
                (d = (0, l.jsx)(x.gNt, {
                    label: e,
                    children: (0, l.jsx)(
                        $.I,
                        eo(ea({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, l.jsxs)(N.Z, {
                    justify: N.Z.Justify.BETWEEN,
                    children: [
                        (0, l.jsx)(m.$q, {
                            size: 18,
                            type: m.M0.INVERTED,
                            value: u === eu.value,
                            onChange: this.handleToggleMaxAge,
                            children: (0, l.jsx)(x.Text, {
                                variant: "text-sm/normal",
                                children: ei.intl.string(ei.t["QKJru/"]),
                            }),
                        }),
                        (0, l.jsx)(x.aML, {
                            "data-migration-pending": !0,
                            text: ei.intl.string(ei.t.Yx4IiC),
                            children: (e) => {
                                let { onMouseEnter: t, onMouseLeave: n } = e;
                                return (0, l.jsx)(x.P3F, {
                                    onClick: this.openSettings,
                                    onMouseEnter: t,
                                    onMouseLeave: n,
                                    className: es.cursorPointer,
                                    children: (0, l.jsx)(x.ewm, {
                                        size: "sm",
                                        color: I.Z.unsafe_rawColors.PRIMARY_400.css,
                                    }),
                                });
                            },
                        }),
                    ],
                }));
        return d;
    }
    getModal() {
        let { modalState: e, handleDone: t, transitionState: n, onClose: i } = this.props,
            { currentPage: s } = e;
        switch (s) {
            case ee.RV.MAIN:
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
            case ee.RV.SETTINGS:
                return (0, l.jsx)(
                    J.D,
                    eo(ea({}, this.props), {
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
                [el.isFriendsInVCInvitesExperiment]: t && null != n,
                [el.wrapper]: e,
            }),
            children: this.getModal(),
        });
    }
    constructor(...e) {
        super(...e),
            er(this, "_scroller", null),
            er(this, "_headerId", c().uniqueId()),
            er(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            er(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(ee.RV.SETTINGS);
            }),
            er(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            er(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            er(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            er(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            er(this, "handleQueryChange", (e) => {
                var t;
                let { modalState: n, setModalState: i } = this.props,
                    l = { query: e };
                "" === e && "" !== n.query
                    ? ((l.sectionVisibility = ea({}, n.defaultSectionVisibility)), (l.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((l.defaultSectionVisibility = ea({}, n.sectionVisibility)), (l.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, f.C)(e),
                    i(l);
            }),
            er(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            er(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: i } = e;
                t({
                    maxAge: i,
                    savedMaxAge: n,
                });
            }),
            er(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: eo(ea({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            er(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: i } = this.props,
                    l = this.getSectionVisibility(e);
                if (null != n && !l) return 0;
                switch ((null == n ? i[t] : n[e][t]).type) {
                    case z.bm.CHANNEL:
                    case z.bm.GROUP_DM:
                    case z.bm.DM:
                    case z.bm.FRIEND:
                        return X.k;
                    default:
                        return 0;
                }
            }),
            er(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: i, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    u = null == s ? i[n] : s[t][n],
                    d = "".concat(u.type, "-").concat(u.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (u.type) {
                    case z.bm.GROUP_DM:
                    case z.bm.CHANNEL:
                        return (0, l.jsx)(
                            X.d,
                            {
                                row: u,
                                channel: u.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            d,
                        );
                    case z.bm.DM:
                    case z.bm.FRIEND:
                        return (0, l.jsx)(
                            X.d,
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
            er(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            er(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: i } = this.props;
                if (!i || null == n) return null;
                let s = 0 === t ? ei.intl.string(ei.t.y29JXs) : ei.intl.string(ei.t.Sd8Ixw),
                    r = this.getSectionVisibility(t);
                return (0, l.jsx)(eh, {
                    section: t,
                    heading: s,
                    isOpen: r,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function eh(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(x.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: el.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(x.Text, {
                variant: "text-sm/medium",
                color: "header-muted",
                children: n,
            }),
            (0, l.jsx)(x.CJ0, {
                size: "md",
                color: "currentColor",
                className: el.inviteSectionToggleIcon,
            }),
        ],
    });
}
er(eg, "defaultProps", {
    analyticsLocation: et.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: ed.value,
});
let ev = s.forwardRef(function (e, t) {
    var n, i;
    let {
            channel: r,
            guild: a,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: h,
            onClose: I,
            page: m,
            analyticsLocation: x,
        } = e,
        { analyticsLocations: b } = (0, C.ZP)(y.Z.INSTANT_INVITE_MODAL),
        N = (0, v.e7)([k.Z, V.Z, O.ZP], () => {
            if (null != r) return r;
            let e = k.Z.getChannelId(),
                t = null == e || (0, en.AB)(e) ? void 0 : V.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = V.Z.getChannel(t.parent_id)),
                null != t ? t : O.ZP.getDefaultChannel(a.id, !0, et.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        A = null;
    null != d ? (A = ee.Iq.STREAM) : null != c && (A = ee.Iq.EMBEDDED_APPLICATION);
    let P = null != r ? r.getGuildId() : null != a ? a.id : null,
        w = (0, q.xU)({
            guildId: P,
            location: "InstantInviteModalConnected",
        }),
        G = (0, q.WV)({
            guildId: P,
            location: "InstantInviteModalConnected",
        }),
        D = (0, v.e7)([R.Z], () => {
            let e = null != N ? N.id : null;
            return null == e
                ? null
                : R.Z.getInvite(e, {
                      targetType: A,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [N, A, d, c]),
        { isFriendsInVCInvitesEnabled: B } = (0, W.am)({
            guildId: null != P ? P : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [K, Y, J, $] = (0, v.Wu)(
            [U.Z, F.ZP],
            () => [
                U.Z.getInviteSuggestionRows(),
                U.Z.getTotalSuggestionsCount() >= 1,
                U.Z.getInitialCounts(),
                null != r && null != N ? F.ZP.getVoiceStatesForChannel(N) : null,
            ],
            [N, r],
        ),
        X = (0, v.e7)(
            [j.ZP],
            () => {
                let e = null != N ? N.id : null;
                return null != P ? j.ZP.getProps(P, e) : void 0;
            },
            [N, P],
            p.Z,
        ),
        ei = (0, v.e7)([L.Z], () => null != N && L.Z.can(et.Plq.CREATE_INSTANT_INVITE, N), [N]),
        el = null === D || !ei,
        [es] = s.useState(() => {
            let e = new Set();
            return (
                null != d && null != $
                    ? $.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != P &&
                      null != X &&
                      A !== ee.Iq.EMBEDDED_APPLICATION &&
                      X.rows.forEach((t) => {
                          t.type === j.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        er = null == r ? void 0 : r.id,
        eo = (0, v.e7)([M.Z], () => M.Z.getStageInstanceByChannel(er), [er]);
    s.useEffect(() => {
        (0, f.x)({
            omitUserIds: es,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: A,
        }).catch(et.VqG);
    }, [es, r, a, c, A]);
    let [eh] = (0, _.Z)(null != c ? [c] : []),
        ev = null != D ? D.code : void 0,
        ep = null == D ? void 0 : D.maxAge,
        eI = null == D ? void 0 : D.maxUses,
        em = null == D ? void 0 : D.temporary,
        ex = a.vanityURLCode,
        eS = null != ex && ex.length > 0,
        ef = !ei && !(null == N ? void 0 : N.isGuildVocal()) && eS,
        eE = null != (n = null == D ? void 0 : D.flags) ? n : 0,
        ey = (null == N ? void 0 : N.type) === et.d4z.GUILD_VOICE,
        eC = (0, T.Z)(N);
    ei || (null == eo ? void 0 : eo.invite_code) == null || (ev = eo.invite_code);
    let e_ = s.useMemo(() => (B && ey ? (0, z.Qq)(K, P) : null), [B, ey, K, P]),
        [eT, eb] = s.useState({
            query: "",
            maxAgeOptions: G,
            maxAge: null != (i = null != ep ? ep : w) ? i : q.zv,
            savedMaxAge: ep === eu.value ? (null != w ? w : ed.value) : eu.value,
            maxUses: null != eI && 0 !== eI ? eI : ec.value,
            temporary: null != em && em,
            networkError: void 0,
            showVanityURL: ef,
            currentPage: null != m ? m : ee.RV.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        eN = s.useCallback((e) => {
            eb((t) => ea({}, t, e));
        }, []),
        eA = s.useCallback(
            (e) => {
                eN({
                    currentPage: e,
                    lastPage: eT.currentPage,
                });
            },
            [eT.currentPage, eN],
        ),
        eZ = ey && !ef && !el && !eC,
        { enabled: eM } = Z.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eZ },
        ),
        { maxAge: eP, maxUses: ew, temporary: ej, savedMaxAge: eV, flags: eO } = eT,
        eR = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eT;
            e === ee.RV.SETTINGS && null != t ? eA(t) : I();
        }, [eA, eT, I]),
        eU = s.useCallback(() => {
            let e = null == N ? void 0 : N.id;
            0 === ew && 0 === eP && !ej && ef
                ? eN({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : ei &&
                  null != e &&
                  (eN({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  S.ZP.createInvite(
                      e,
                      {
                          max_age: eP,
                          max_uses: ew,
                          target_type: A,
                          target_user_id: d,
                          target_application_id: null == eh ? void 0 : eh.id,
                          temporary: ej,
                          flags: eO,
                      },
                      o,
                  ).catch((e) =>
                      eN({
                          networkError: e,
                          showVanityURL: ef,
                      }),
                  )),
                eP !== eu.value && eV !== eu.value && eN({ savedMaxAge: eu.value });
        }, [ef, ei, N, o, null == eh ? void 0 : eh.id, A, d, eP, ew, ej, eN, eV, eO]),
        eL = (0, E.Z)(N),
        eG = (0, E.Z)((0, H.yE)(eO, g.$.IS_APPLICATION_BYPASS)),
        ek = null != eL && eL !== N,
        eD = null != eG && eG !== (0, H.yE)(eO, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ef && (ek || eD) && eU();
    }, [eU, ek, eD, ef]);
    let { canCreateApplicationBypassInvites: eF, isManualApprovalGuild: eB } = (0, Q.R)(a);
    return (0, l.jsx)(C.Gt, {
        value: b,
        children: (0, l.jsx)(eg, {
            ref: t,
            canCreateInvites: ei,
            noInvitesAvailable: el,
            inviteChannel: N,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ex,
            targetType: A,
            targetUserId: d,
            application: eh,
            rows: K,
            sections: e_,
            isFriendsInVCInvitesEnabled: B,
            showFriends: Y,
            initialCounts: J,
            code: ev,
            source: o,
            analyticsLocations: b,
            analyticsLocation: x,
            transitionState: h,
            onClose: I,
            canShowVanityURL: ef,
            isGuestInviteCreationToggleEnabled: eM && eZ,
            shouldHideTemporaryInviteToggle: (eM && eZ) || eB,
            modalState: eT,
            setModalState: eN,
            changePage: eA,
            onGenerateNewLink: eU,
            handleDone: eR,
            isApplicationBypassToggleEnabled: eF && !el,
        }),
    });
});
function ep(e) {
    return (0, l.jsx)(ev, ea({}, e));
}
