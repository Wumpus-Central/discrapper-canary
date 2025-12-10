n.d(t, { default: () => eg }), n(997841), n(388685);
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
    h = n(95015),
    p = n(775086),
    v = n(442837),
    I = n(692547),
    m = n(681715),
    x = n(481060),
    S = n(447543),
    f = n(247272),
    y = n(110924),
    E = n(100527),
    _ = n(906732),
    C = n(835473),
    T = n(447003),
    b = n(471445),
    N = n(687516),
    A = n(227672),
    P = n(427679),
    M = n(601964),
    Z = n(199902),
    w = n(439170),
    j = n(592125),
    O = n(984933),
    V = n(341165),
    R = n(751771),
    U = n(496675),
    G = n(158776),
    k = n(944486),
    D = n(594174),
    L = n(938475),
    F = n(626135),
    B = n(971130),
    H = n(301873),
    q = n(264229),
    z = n(366980),
    K = n(277364),
    W = n(585385),
    Y = n(603236),
    Q = n(462376),
    J = n(245335),
    $ = n(981631),
    X = n(176505),
    ee = n(388032),
    et = n(451964),
    en = n(103126);
function ei(e, t, n) {
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
function el(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
let { INVITE_OPTIONS_FOREVER: er, INVITE_OPTIONS_7_DAYS: ea, INVITE_OPTIONS_UNLIMITED: eo } = B.ZP;
class eu extends (i = s.PureComponent) {
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
                setModalState: p,
            } = this.props,
            { maxAge: v, maxUses: I, temporary: m, flags: x } = h;
        if (l) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            p({ networkError: void 0 }),
                S.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: I,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: m,
                        flags: x,
                    },
                    i,
                ).catch((e) => p({ networkError: e }));
        }
        if (
            (g &&
                F.default.track($.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = Z.Z.getStreamForUser(r, n.id),
                t = (0, N.L2)(e, G.Z);
            F.default.track($.rMx.OPEN_MODAL, {
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
                F.default.track($.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: i,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, h.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && S.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, q.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, T.Z)(e)
            ? (0, l.jsxs)("div", {
                  className: et.warningContainer,
                  children: [
                      (0, l.jsx)(x.Mgn, {
                          size: "custom",
                          className: et.warningIcon,
                          color: I.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(x.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: ee.intl.string(ee.t.x1SQZb),
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
                    ? ee.intl.string(ee.t["6VQaqd"])
                    : null != r
                      ? ee.intl.formatToPlainString(ee.t.ZdK3dW, { applicationName: r.name })
                      : null != i
                        ? ee.intl.string(ee.t.JKV4FL)
                        : (null == a ? void 0 : a.isGuildStageVoice())
                          ? ee.intl.string(ee.t.zTrsH0)
                          : ee.intl.formatToPlainString(ee.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, b.KS)(a, n);
            null != e &&
                (t = ee.intl.format(ee.t.MkSwTR, {
                    channelName: a.name,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)(
                            "span",
                            {
                                children: [(0, l.jsx)(e, { className: et.channelIcon }), t],
                            },
                            n,
                        ),
                }));
        }
        return n.features.has($.GuildFeatures.HUB)
            ? {
                  title: ee.intl.string(ee.t.WhR38i),
                  subtitle: ee.intl.string(ee.t.Ed4BMs),
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
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: ee.intl.string(ee.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has($.GuildFeatures.HUB) && this.renderChannelWarning(),
                ],
            }),
            listProps: s,
        };
    }
    getListProps() {
        let { rows: e, sections: t } = this.props,
            n = this.getInviteKey();
        return 0 === e.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  renderRow: () =>
                      (0, l.jsx)("div", {
                          className: et.inviteRowEmptyState,
                          children: (0, l.jsx)(x.OZU, { children: ee.intl.string(ee.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: et.inviteRowEmptyState,
                            children: (0, l.jsx)(x.OZU, { children: ee.intl.string(ee.t.hzPwGG) }),
                        }),
                    rowHeight: 200,
                }
              : null != t
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
            a = D.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, M.eM)(t, a) ? ee.intl.string(ee.t.HFbByJ) : ee.intl.string(ee.t.ueBhA9);
        return (
            null != i ? (o = ee.intl.string(ee.t.CXpS1I)) : null != s && (o = ee.intl.string(ee.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.Text, {
                            className: et.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, l.jsx)(
                            Y.I,
                            es(el({}, this.props), {
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
            let e = ee.intl.string(ee.t.MLkj7N);
            null != s
                ? (e = ee.intl.string(ee.t["1b9neu"]))
                : null != r
                  ? (e = ee.intl.string(ee.t.iI1gMg))
                  : null != i
                    ? (e = ee.intl.string(ee.t.KaWCyD))
                    : (null == a ? void 0 : a.isGuildStageVoice()) && (e = ee.intl.string(ee.t["2frWa3"])),
                (d = (0, l.jsx)(x.gNt, {
                    label: e,
                    children: (0, l.jsx)(
                        Y.I,
                        es(el({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, l.jsxs)("div", {
                    className: et.footerWithCheckbox,
                    children: [
                        (0, l.jsx)(x.Checkbox, {
                            checked: u === er.value,
                            onChange: this.handleToggleMaxAge,
                            label: ee.intl.string(ee.t["QKJru/"]),
                        }),
                        (0, l.jsx)(m.u, {
                            text: ee.intl.string(ee.t.Yx4IiC),
                            children: (0, l.jsx)(x.P3F, {
                                onClick: this.openSettings,
                                className: en.cursorPointer,
                                children: (0, l.jsx)(x.ewm, {
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
            case J.RV.MAIN:
                let { title: r, subtitle: a } = this.getHeaderContent(),
                    { bodyContent: o, controls: u, listProps: d } = this.getBodyContent();
                return (0, l.jsx)(p.Modal, {
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
            case J.RV.SETTINGS:
                return (0, l.jsx)(
                    W.D,
                    es(el({}, this.props), {
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
        let { showFriends: e, sections: t } = this.props;
        return (0, l.jsx)("div", {
            className: a()({
                [et.wrapper]: e,
                [et.hasSections]: null != t,
            }),
            children: this.getModal(),
        });
    }
    constructor(...e) {
        super(...e),
            ei(this, "_scroller", null),
            ei(this, "_headerId", c().uniqueId()),
            ei(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            ei(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(J.RV.SETTINGS);
            }),
            ei(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            ei(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({ maxUses: e });
            }),
            ei(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({ temporary: e });
            }),
            ei(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({ flags: e });
            }),
            ei(this, "handleQueryChange", (e) => {
                var t;
                let { modalState: n, setModalState: i } = this.props,
                    l = { query: e };
                "" === e && "" !== n.query
                    ? ((l.sectionVisibility = el({}, n.defaultSectionVisibility)), (l.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((l.defaultSectionVisibility = el({}, n.sectionVisibility)), (l.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, f.C)(e),
                    i(l);
            }),
            ei(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            ei(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: i } = e;
                t({
                    maxAge: i,
                    savedMaxAge: n,
                });
            }),
            ei(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: es(el({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            ei(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: i } = this.props,
                    l = this.getSectionVisibility(e);
                if (null != n && !l) return 0;
                switch ((null == n ? i[t] : n[e][t]).type) {
                    case B.bm.CHANNEL:
                    case B.bm.GROUP_DM:
                    case B.bm.DM:
                    case B.bm.FRIEND:
                        return Q.k;
                    default:
                        return 0;
                }
            }),
            ei(this, "renderRow", (e) => {
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
                            Q.d,
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
                            Q.d,
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
            ei(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            ei(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n } = this.props;
                if (null == n) return null;
                let i = 0 === t ? ee.intl.string(ee.t.y29JXs) : ee.intl.string(ee.t.Sd8Ixw),
                    s = this.getSectionVisibility(t);
                return (0, l.jsx)(ed, {
                    section: t,
                    heading: i,
                    isOpen: s,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function ed(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(x.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: et.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(x.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: n,
            }),
            (0, l.jsx)(x.CJ0, {
                size: "md",
                color: "currentColor",
                className: et.inviteSectionToggleIcon,
            }),
        ],
    });
}
ei(eu, "defaultProps", {
    analyticsLocation: $.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: ea.value,
});
let ec = s.forwardRef(function (e, t) {
    var n, i;
    let {
            channel: r,
            guild: a,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: p,
            onClose: I,
            page: m,
            analyticsLocation: x,
        } = e,
        { analyticsLocations: b } = (0, _.ZP)(E.Z.INSTANT_INVITE_MODAL),
        N = (0, v.e7)([k.Z, j.Z, O.ZP], () => {
            if (null != r) return r;
            let e = k.Z.getChannelId(),
                t = null == e || (0, X.AB)(e) ? void 0 : j.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = j.Z.getChannel(t.parent_id)),
                null != t ? t : O.ZP.getDefaultChannel(a.id, !0, $.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        M = null;
    null != d ? (M = J.Iq.STREAM) : null != c && (M = J.Iq.EMBEDDED_APPLICATION);
    let Z = null != r ? r.getGuildId() : null != a ? a.id : null,
        G = (0, H.xU)({
            guildId: Z,
            location: "InstantInviteModalConnected",
        }),
        D = (0, H.WV)({
            guildId: Z,
            location: "InstantInviteModalConnected",
        }),
        F = (0, v.e7)([V.Z], () => {
            let e = null != N ? N.id : null;
            return null == e
                ? null
                : V.Z.getInvite(e, {
                      targetType: M,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [N, M, d, c]),
        [q, z, W, Y] = (0, v.Wu)(
            [R.Z, L.ZP],
            () => [
                R.Z.getInviteSuggestionRows(),
                R.Z.getTotalSuggestionsCount() >= 1,
                R.Z.getInitialCounts(),
                null != r && null != N ? L.ZP.getVoiceStatesForChannel(N) : null,
            ],
            [N, r],
        ),
        Q = s.useMemo(() => {
            let e = null != N ? N.id : null;
            return null != Z ? w.ZP.getProps(Z, e) : void 0;
        }, [N, Z]),
        ee = (0, v.e7)([U.Z], () => null != N && U.Z.can($.Plq.CREATE_INSTANT_INVITE, N), [N]),
        et = null === F || !ee,
        en = (null == N ? void 0 : N.type) === $.d4z.GUILD_VOICE,
        ei = (0, T.Z)(N),
        es = s.useMemo(() => {
            let e = new Set();
            return (
                en || null != d
                    ? null == Y ||
                      Y.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != Z &&
                      null != Q &&
                      M !== J.Iq.EMBEDDED_APPLICATION &&
                      Q.rows.forEach((t) => {
                          t.type === w.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [en, Q, d, Y, Z, M]),
        ed = null == r ? void 0 : r.id,
        ec = (0, v.e7)([P.Z], () => P.Z.getStageInstanceByChannel(ed), [ed]);
    s.useEffect(() => {
        (0, f.x)({
            omitUserIds: es,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: M,
        }).catch($.VqG);
    }, [es, r, a, c, M]);
    let [eg] = (0, C.Z)(null != c ? [c] : []),
        eh = null != F ? F.code : void 0,
        ep = null == F ? void 0 : F.maxAge,
        ev = null == F ? void 0 : F.maxUses,
        eI = null == F ? void 0 : F.temporary,
        em = a.vanityURLCode,
        ex = null != em && em.length > 0,
        eS = !ee && !(null == N ? void 0 : N.isGuildVocal()) && ex,
        ef = null != (n = null == F ? void 0 : F.flags) ? n : 0;
    ee || (null == ec ? void 0 : ec.invite_code) == null || (eh = ec.invite_code);
    let ey = s.useMemo(() => (en ? (0, B.Qq)(q, Z) : null), [en, q, Z]),
        [eE, e_] = s.useState({
            query: "",
            maxAgeOptions: D,
            maxAge: null != (i = null != ep ? ep : G) ? i : H.zv,
            savedMaxAge: ep === er.value ? (null != G ? G : ea.value) : er.value,
            maxUses: null != ev && 0 !== ev ? ev : eo.value,
            temporary: null != eI && eI,
            networkError: void 0,
            showVanityURL: eS,
            currentPage: null != m ? m : J.RV.MAIN,
            lastPage: void 0,
            flags: ef,
            sectionVisibility: {},
            defaultSectionVisibility: {},
        }),
        eC = s.useCallback((e) => {
            e_((t) => el({}, t, e));
        }, []),
        eT = s.useCallback(
            (e) => {
                eC({
                    currentPage: e,
                    lastPage: eE.currentPage,
                });
            },
            [eE.currentPage, eC],
        ),
        eb = en && !eS && !et && !ei,
        { enabled: eN } = A.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eb },
        ),
        { maxAge: eA, maxUses: eP, temporary: eM, savedMaxAge: eZ, flags: ew } = eE,
        ej = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eE;
            e === J.RV.SETTINGS && null != t ? eT(t) : I();
        }, [eT, eE, I]),
        eO = s.useCallback(() => {
            let e = null == N ? void 0 : N.id;
            0 === eP && 0 === eA && !eM && eS
                ? eC({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : ee &&
                  null != e &&
                  (eC({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  S.ZP.createInvite(
                      e,
                      {
                          max_age: eA,
                          max_uses: eP,
                          target_type: M,
                          target_user_id: d,
                          target_application_id: null == eg ? void 0 : eg.id,
                          temporary: eM,
                          flags: ew,
                      },
                      o,
                  ).catch((e) =>
                      eC({
                          networkError: e,
                          showVanityURL: eS,
                      }),
                  )),
                eA !== er.value && eZ !== er.value && eC({ savedMaxAge: er.value });
        }, [eS, ee, N, o, null == eg ? void 0 : eg.id, M, d, eA, eP, eM, eC, eZ, ew]),
        eV = (0, y.Z)(N),
        eR = (0, y.Z)((0, h.yE)(ew, g.$.IS_APPLICATION_BYPASS)),
        eU = null != eV && eV !== N,
        eG = null != eR && eR !== (0, h.yE)(ew, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !eS && (eU || eG) && eO();
    }, [eO, eU, eG, eS]);
    let { canCreateApplicationBypassInvites: ek, isManualApprovalGuild: eD } = (0, K.R)(a);
    return (0, l.jsx)(_.Gt, {
        value: b,
        children: (0, l.jsx)(eu, {
            ref: t,
            canCreateInvites: ee,
            noInvitesAvailable: et,
            inviteChannel: N,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: em,
            targetType: M,
            targetUserId: d,
            application: eg,
            rows: q,
            sections: ey,
            showFriends: z,
            initialCounts: W,
            code: eh,
            source: o,
            analyticsLocations: b,
            analyticsLocation: x,
            transitionState: p,
            onClose: I,
            canShowVanityURL: eS,
            isGuestInviteCreationToggleEnabled: eN && eb,
            shouldHideTemporaryInviteToggle: (eN && eb) || eD,
            modalState: eE,
            setModalState: eC,
            changePage: eT,
            onGenerateNewLink: eO,
            handleDone: ej,
            isApplicationBypassToggleEnabled: ek && !et,
        }),
    });
});
function eg(e) {
    return (0, l.jsx)(ec, el({}, e));
}
