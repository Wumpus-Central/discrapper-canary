n.d(t, { default: () => ev }), n(997841), n(388685);
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
    m = n(681715),
    S = n(481060),
    x = n(447543),
    f = n(247272),
    E = n(110924),
    y = n(100527),
    C = n(906732),
    _ = n(835473),
    b = n(447003),
    T = n(471445),
    N = n(687516),
    A = n(227672),
    P = n(427679),
    Z = n(601964),
    M = n(199902),
    w = n(439170),
    j = n(592125),
    V = n(984933),
    O = n(341165),
    R = n(751771),
    U = n(496675),
    G = n(158776),
    k = n(944486),
    D = n(594174),
    F = n(938475),
    L = n(626135),
    B = n(630388),
    H = n(971130),
    q = n(301873),
    W = n(559310),
    z = n(264229),
    K = n(366980),
    Y = n(277364),
    Q = n(585385),
    J = n(603236),
    $ = n(462376),
    X = n(245335),
    ee = n(981631),
    et = n(176505),
    en = n(388032),
    ei = n(451964),
    el = n(103126);
function es(e, t, n) {
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
function er(e) {
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
                es(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
let { INVITE_OPTIONS_FOREVER: eo, INVITE_OPTIONS_7_DAYS: eu, INVITE_OPTIONS_UNLIMITED: ed } = H.ZP;
class ec extends (i = s.PureComponent) {
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
                L.default.track(ee.rMx.INVITE_SUGGESTION_OPENED, {
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
                t = (0, N.L2)(e, G.Z);
            L.default.track(ee.rMx.OPEN_MODAL, {
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
                L.default.track(ee.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: i,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, B.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && x.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, z.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, b.Z)(e)
            ? (0, l.jsxs)("div", {
                  className: ei.warningContainer,
                  children: [
                      (0, l.jsx)(S.Mgn, {
                          size: "custom",
                          className: ei.warningIcon,
                          color: I.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(S.Text, {
                          variant: "text-xs/normal",
                          color: "header-secondary",
                          children: en.intl.string(en.t.x1SQZb),
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
                    ? en.intl.string(en.t["6VQaqd"])
                    : null != r
                      ? en.intl.formatToPlainString(en.t.ZdK3dW, { applicationName: r.name })
                      : null != i
                        ? en.intl.string(en.t.JKV4FL)
                        : (null == a ? void 0 : a.isGuildStageVoice())
                          ? en.intl.string(en.t.zTrsH0)
                          : en.intl.formatToPlainString(en.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, T.KS)(a, n);
            null != e &&
                (t = en.intl.format(en.t.MkSwTR, {
                    channelName: a.name,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)(
                            "span",
                            {
                                children: [(0, l.jsx)(e, { className: ei.channelIcon }), t],
                            },
                            n,
                        ),
                }));
        }
        return n.features.has(ee.GuildFeatures.HUB)
            ? {
                  title: en.intl.string(en.t.WhR38i),
                  subtitle: en.intl.string(en.t.Ed4BMs),
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
                        (0, l.jsx)(S.E1j, {
                            size: "sm",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: en.intl.string(en.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(ee.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: ei.inviteRowEmptyState,
                          children: (0, l.jsx)(S.OZU, { children: en.intl.string(en.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == i
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: ei.inviteRowEmptyState,
                            children: (0, l.jsx)(S.OZU, { children: en.intl.string(en.t.hzPwGG) }),
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
        let r = (0, K.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = D.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, Z.eM)(t, a) ? en.intl.string(en.t.HFbByJ) : en.intl.string(en.t.ueBhA9);
        return (
            null != i ? (o = en.intl.string(en.t.CXpS1I)) : null != s && (o = en.intl.string(en.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(S.Text, {
                            className: ei.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, l.jsx)(
                            J.I,
                            ea(er({}, this.props), {
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
            c = (0, K.Z)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = en.intl.string(en.t.MLkj7N);
            null != s
                ? (e = en.intl.string(en.t["1b9neu"]))
                : null != r
                  ? (e = en.intl.string(en.t.iI1gMg))
                  : null != i
                    ? (e = en.intl.string(en.t.KaWCyD))
                    : (null == a ? void 0 : a.isGuildStageVoice()) && (e = en.intl.string(en.t["2frWa3"])),
                (d = (0, l.jsx)(S.gNt, {
                    label: e,
                    children: (0, l.jsx)(
                        J.I,
                        ea(er({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, l.jsxs)("div", {
                    className: ei.footerWithCheckbox,
                    children: [
                        (0, l.jsx)(S.Checkbox, {
                            checked: u === eo.value,
                            onChange: this.handleToggleMaxAge,
                            label: en.intl.string(en.t["QKJru/"]),
                        }),
                        (0, l.jsx)(m.u, {
                            text: en.intl.string(en.t.Yx4IiC),
                            children: (0, l.jsx)(S.P3F, {
                                onClick: this.openSettings,
                                className: el.cursorPointer,
                                children: (0, l.jsx)(S.ewm, {
                                    size: "sm",
                                    color: I.Z.unsafe_rawColors.PRIMARY_400.css,
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
            case X.RV.MAIN:
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
            case X.RV.SETTINGS:
                return (0, l.jsx)(
                    Q.D,
                    ea(er({}, this.props), {
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
                [ei.isFriendsInVCInvitesExperiment]: t && null != n,
                [ei.wrapper]: e,
            }),
            children: this.getModal(),
        });
    }
    constructor(...e) {
        super(...e),
            es(this, "_scroller", null),
            es(this, "_headerId", c().uniqueId()),
            es(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            es(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(X.RV.SETTINGS);
            }),
            es(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            es(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            es(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            es(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            es(this, "handleQueryChange", (e) => {
                var t;
                let { modalState: n, setModalState: i } = this.props,
                    l = { query: e };
                "" === e && "" !== n.query
                    ? ((l.sectionVisibility = er({}, n.defaultSectionVisibility)), (l.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((l.defaultSectionVisibility = er({}, n.sectionVisibility)), (l.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, f.C)(e),
                    i(l);
            }),
            es(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            es(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: i } = e;
                t({
                    maxAge: i,
                    savedMaxAge: n,
                });
            }),
            es(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: ea(er({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            es(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: i } = this.props,
                    l = this.getSectionVisibility(e);
                if (null != n && !l) return 0;
                switch ((null == n ? i[t] : n[e][t]).type) {
                    case H.bm.CHANNEL:
                    case H.bm.GROUP_DM:
                    case H.bm.DM:
                    case H.bm.FRIEND:
                        return $.k;
                    default:
                        return 0;
                }
            }),
            es(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: i, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    u = null == s ? i[n] : s[t][n],
                    d = "".concat(u.type, "-").concat(u.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (u.type) {
                    case H.bm.GROUP_DM:
                    case H.bm.CHANNEL:
                        return (0, l.jsx)(
                            $.d,
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
                        return (0, l.jsx)(
                            $.d,
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
            es(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            es(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n, isFriendsInVCInvitesEnabled: i } = this.props;
                if (!i || null == n) return null;
                let s = 0 === t ? en.intl.string(en.t.y29JXs) : en.intl.string(en.t.Sd8Ixw),
                    r = this.getSectionVisibility(t);
                return (0, l.jsx)(eg, {
                    section: t,
                    heading: s,
                    isOpen: r,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function eg(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(S.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: ei.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(S.Text, {
                variant: "text-sm/medium",
                color: "header-muted",
                children: n,
            }),
            (0, l.jsx)(S.CJ0, {
                size: "md",
                color: "currentColor",
                className: ei.inviteSectionToggleIcon,
            }),
        ],
    });
}
es(ec, "defaultProps", {
    analyticsLocation: ee.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eu.value,
});
let eh = s.forwardRef(function (e, t) {
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
            analyticsLocation: S,
        } = e,
        { analyticsLocations: T } = (0, C.ZP)(y.Z.INSTANT_INVITE_MODAL),
        N = (0, v.e7)([k.Z, j.Z, V.ZP], () => {
            if (null != r) return r;
            let e = k.Z.getChannelId(),
                t = null == e || (0, et.AB)(e) ? void 0 : j.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = j.Z.getChannel(t.parent_id)),
                null != t ? t : V.ZP.getDefaultChannel(a.id, !0, ee.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        Z = null;
    null != d ? (Z = X.Iq.STREAM) : null != c && (Z = X.Iq.EMBEDDED_APPLICATION);
    let M = null != r ? r.getGuildId() : null != a ? a.id : null,
        G = (0, q.xU)({
            guildId: M,
            location: "InstantInviteModalConnected",
        }),
        D = (0, q.WV)({
            guildId: M,
            location: "InstantInviteModalConnected",
        }),
        L = (0, v.e7)([O.Z], () => {
            let e = null != N ? N.id : null;
            return null == e
                ? null
                : O.Z.getInvite(e, {
                      targetType: Z,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [N, Z, d, c]),
        { isFriendsInVCInvitesEnabled: z } = (0, W.am)({
            guildId: null != M ? M : void 0,
            location: "instant_invite_modal",
            autoTrackExposure: !0,
        }),
        [K, Q, J, $] = (0, v.Wu)(
            [R.Z, F.ZP],
            () => [
                R.Z.getInviteSuggestionRows(),
                R.Z.getTotalSuggestionsCount() >= 1,
                R.Z.getInitialCounts(),
                null != r && null != N ? F.ZP.getVoiceStatesForChannel(N) : null,
            ],
            [N, r],
        ),
        en = (0, v.e7)(
            [w.ZP],
            () => {
                let e = null != N ? N.id : null;
                return null != M ? w.ZP.getProps(M, e) : void 0;
            },
            [N, M],
            p.Z,
        ),
        ei = (0, v.e7)([U.Z], () => null != N && U.Z.can(ee.Plq.CREATE_INSTANT_INVITE, N), [N]),
        el = null === L || !ei,
        [es] = s.useState(() => {
            let e = new Set();
            return (
                null != d && null != $
                    ? $.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != M &&
                      null != en &&
                      Z !== X.Iq.EMBEDDED_APPLICATION &&
                      en.rows.forEach((t) => {
                          t.type === w.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }),
        ea = null == r ? void 0 : r.id,
        eg = (0, v.e7)([P.Z], () => P.Z.getStageInstanceByChannel(ea), [ea]);
    s.useEffect(() => {
        (0, f.x)({
            omitUserIds: es,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: Z,
        }).catch(ee.VqG);
    }, [es, r, a, c, Z]);
    let [eh] = (0, _.Z)(null != c ? [c] : []),
        ev = null != L ? L.code : void 0,
        ep = null == L ? void 0 : L.maxAge,
        eI = null == L ? void 0 : L.maxUses,
        em = null == L ? void 0 : L.temporary,
        eS = a.vanityURLCode,
        ex = null != eS && eS.length > 0,
        ef = !ei && !(null == N ? void 0 : N.isGuildVocal()) && ex,
        eE = null != (n = null == L ? void 0 : L.flags) ? n : 0,
        ey = (null == N ? void 0 : N.type) === ee.d4z.GUILD_VOICE,
        eC = (0, b.Z)(N);
    ei || (null == eg ? void 0 : eg.invite_code) == null || (ev = eg.invite_code);
    let e_ = s.useMemo(() => (z && ey ? (0, H.Qq)(K, M) : null), [z, ey, K, M]),
        [eb, eT] = s.useState({
            query: "",
            maxAgeOptions: D,
            maxAge: null != (i = null != ep ? ep : G) ? i : q.zv,
            savedMaxAge: ep === eo.value ? (null != G ? G : eu.value) : eo.value,
            maxUses: null != eI && 0 !== eI ? eI : ed.value,
            temporary: null != em && em,
            networkError: void 0,
            showVanityURL: ef,
            currentPage: null != m ? m : X.RV.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        eN = s.useCallback((e) => {
            eT((t) => er({}, t, e));
        }, []),
        eA = s.useCallback(
            (e) => {
                eN({
                    currentPage: e,
                    lastPage: eb.currentPage,
                });
            },
            [eb.currentPage, eN],
        ),
        eP = ey && !ef && !el && !eC,
        { enabled: eZ } = A.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eP },
        ),
        { maxAge: eM, maxUses: ew, temporary: ej, savedMaxAge: eV, flags: eO } = eb,
        eR = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eb;
            e === X.RV.SETTINGS && null != t ? eA(t) : I();
        }, [eA, eb, I]),
        eU = s.useCallback(() => {
            let e = null == N ? void 0 : N.id;
            0 === ew && 0 === eM && !ej && ef
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
                  x.ZP.createInvite(
                      e,
                      {
                          max_age: eM,
                          max_uses: ew,
                          target_type: Z,
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
                eM !== eo.value && eV !== eo.value && eN({ savedMaxAge: eo.value });
        }, [ef, ei, N, o, null == eh ? void 0 : eh.id, Z, d, eM, ew, ej, eN, eV, eO]),
        eG = (0, E.Z)(N),
        ek = (0, E.Z)((0, B.yE)(eO, g.$.IS_APPLICATION_BYPASS)),
        eD = null != eG && eG !== N,
        eF = null != ek && ek !== (0, B.yE)(eO, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ef && (eD || eF) && eU();
    }, [eU, eD, eF, ef]);
    let { canCreateApplicationBypassInvites: eL, isManualApprovalGuild: eB } = (0, Y.R)(a);
    return (0, l.jsx)(C.Gt, {
        value: T,
        children: (0, l.jsx)(ec, {
            ref: t,
            canCreateInvites: ei,
            noInvitesAvailable: el,
            inviteChannel: N,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: eS,
            targetType: Z,
            targetUserId: d,
            application: eh,
            rows: K,
            sections: e_,
            isFriendsInVCInvitesEnabled: z,
            showFriends: Q,
            initialCounts: J,
            code: ev,
            source: o,
            analyticsLocations: T,
            analyticsLocation: S,
            transitionState: h,
            onClose: I,
            canShowVanityURL: ef,
            isGuestInviteCreationToggleEnabled: eZ && eP,
            shouldHideTemporaryInviteToggle: (eZ && eP) || eB,
            modalState: eb,
            setModalState: eN,
            changePage: eA,
            onGenerateNewLink: eU,
            handleDone: eR,
            isApplicationBypassToggleEnabled: eL && !el,
        }),
    });
});
function ev(e) {
    return (0, l.jsx)(eh, er({}, e));
}
