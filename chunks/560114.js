n.d(t, { default: () => ep }), n(997841), n(388685);
var l,
    i = n(54381),
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
    S = n(481060),
    f = n(447543),
    x = n(247272),
    y = n(110924),
    E = n(100527),
    _ = n(906732),
    b = n(835473),
    C = n(447003),
    T = n(471445),
    A = n(687516),
    N = n(227672),
    M = n(427679),
    P = n(601964),
    Z = n(199902),
    j = n(439170),
    w = n(592125),
    R = n(984933),
    O = n(341165),
    V = n(751771),
    U = n(496675),
    k = n(158776),
    G = n(944486),
    D = n(594174),
    L = n(938475),
    F = n(626135),
    B = n(971130),
    H = n(301873),
    q = n(264229),
    z = n(156953),
    K = n(366980),
    W = n(277364),
    Y = n(941775),
    J = n(585385),
    Q = n(603236),
    $ = n(462376),
    X = n(245335),
    ee = n(981631),
    et = n(176505),
    en = n(388032),
    el = n(444942),
    ei = n(518800);
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
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
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
let { INVITE_OPTIONS_FOREVER: eo, INVITE_OPTIONS_7_DAYS: eu, INVITE_OPTIONS_UNLIMITED: ed } = B.ZP;
class ec extends (l = s.PureComponent) {
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
                setModalState: p,
            } = this.props,
            { maxAge: v, maxUses: I, temporary: m, flags: S } = h;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            p({ networkError: void 0 }),
                f.ZP.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: I,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: m,
                        flags: S,
                    },
                    l,
                ).catch((e) => p({ networkError: e }));
        }
        if (
            (g &&
                F.default.track(ee.rMx.INVITE_SUGGESTION_OPENED, {
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
            let e = Z.Z.getStreamForUser(r, n.id),
                t = (0, A.L2)(e, k.Z);
            F.default.track(ee.rMx.OPEN_MODAL, {
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
                F.default.track(ee.rMx.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, h.yE)(t.flags, g.$.IS_GUEST_INVITE) && null != e && f.ZP.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, q.tV)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, C.Z)(e)
            ? (0, i.jsxs)("div", {
                  className: el.warningContainer,
                  children: [
                      (0, i.jsx)(S.Mgn, {
                          size: "custom",
                          className: el.warningIcon,
                          color: I.Z.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(S.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: en.intl.string(en.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: n, guildScheduledEvent: l, streamUserId: s, application: r, inviteChannel: a } = this.props;
        if (
            ((e =
                null != s
                    ? en.intl.string(en.t["6VQaqd"])
                    : null != r
                      ? en.intl.formatToPlainString(en.t.ZdK3dW, { applicationName: r.name })
                      : null != l
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
                        (0, i.jsxs)(
                            "span",
                            {
                                children: [(0, i.jsx)(e, { className: el.channelIcon }), t],
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
            { query: l } = e,
            s = this.getListProps();
        return {
            bodyContent: void 0,
            controls: (0, i.jsxs)(i.Fragment, {
                children: [
                    t &&
                        (0, i.jsx)(S.E1j, {
                            size: "md",
                            query: l,
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
        let { rows: e, sections: t } = this.props,
            n = this.getInviteKey();
        return 0 === e.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  renderRow: () =>
                      (0, i.jsx)("div", {
                          className: el.inviteRowEmptyState,
                          children: (0, i.jsx)(S.OZU, { children: en.intl.string(en.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, i.jsx)("div", {
                            className: el.inviteRowEmptyState,
                            children: (0, i.jsx)(S.OZU, { children: en.intl.string(en.t.hzPwGG) }),
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
        let { guild: t, showFriends: n, streamUserId: l, application: s } = this.props;
        if (n) return this.renderFriendsBody();
        let r = (0, K.Z)(null != (e = this.getInviteKey()) ? e : ""),
            a = D.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, P.eM)(t, a) ? en.intl.string(en.t.HFbByJ) : en.intl.string(en.t.ueBhA9);
        return (
            null != l ? (o = en.intl.string(en.t.CXpS1I)) : null != s && (o = en.intl.string(en.t.ueCrHB)),
            {
                bodyContent: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(S.Text, {
                            className: el.subText,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            Q.I,
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
                guildScheduledEvent: l,
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
                  : null != l
                    ? (e = en.intl.string(en.t.KaWCyD))
                    : (null == a ? void 0 : a.isGuildStageVoice()) && (e = en.intl.string(en.t["2frWa3"])),
                (d = (0, i.jsx)(S.gNt, {
                    label: e,
                    children: (0, i.jsx)(
                        Q.I,
                        ea(er({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, i.jsxs)("div", {
                    className: el.footerWithCheckbox,
                    children: [
                        (0, i.jsx)(S.Checkbox, {
                            checked: u === eo.value,
                            onChange: this.handleToggleMaxAge,
                            label: en.intl.string(en.t["QKJru/"]),
                        }),
                        (0, i.jsx)(m.u, {
                            text: en.intl.string(en.t.Yx4IiC),
                            children: (0, i.jsx)(S.P3F, {
                                onClick: this.openSettings,
                                className: ei.cursorPointer,
                                children: (0, i.jsx)(S.ewm, {
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
        let { modalState: e, handleDone: t, transitionState: n, onClose: l } = this.props,
            { currentPage: s } = e;
        switch (s) {
            case X.RV.MAIN:
                let { title: r, subtitle: a } = this.getHeaderContent(),
                    { bodyContent: o, controls: u, listProps: d } = this.getBodyContent();
                return (0, i.jsx)(p.Modal, {
                    transitionState: n,
                    onClose: l,
                    title: r,
                    subtitle: a,
                    input: u,
                    listProps: d,
                    preview: this.renderFooter(),
                    actions: [],
                    children: o,
                });
            case X.RV.SETTINGS:
                return (0, i.jsx)(
                    J.D,
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
        let { showFriends: e, sections: t } = this.props;
        return (0, i.jsx)("div", {
            className: a()({
                [el.wrapper]: e,
                [el.hasSections]: null != t,
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
                let { modalState: n, setModalState: l } = this.props,
                    i = { query: e };
                "" === e && "" !== n.query
                    ? ((i.sectionVisibility = er({}, n.defaultSectionVisibility)), (i.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((i.defaultSectionVisibility = er({}, n.sectionVisibility)), (i.sectionVisibility = {})),
                    null == (t = this._scroller) || t.scrollTo({ to: 0 }),
                    (0, x.C)(e),
                    l(i);
            }),
            es(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            es(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n,
                });
            }),
            es(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({ sectionVisibility: ea(er({}, t.sectionVisibility), { [e]: !this.getSectionVisibility(e) }) });
            }),
            es(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: l } = this.props,
                    i = this.getSectionVisibility(e);
                if (null != n && !i) return 0;
                switch ((null == n ? l[t] : n[e][t]).type) {
                    case B.bm.CHANNEL:
                    case B.bm.GROUP_DM:
                    case B.bm.DM:
                    case B.bm.FRIEND:
                        return $.k;
                    default:
                        return 0;
                }
            }),
            es(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: l, sections: s, analyticsLocation: r, source: a } = this.props,
                    o = this.getInviteKey(),
                    u = null == s ? l[n] : s[t][n],
                    d = "".concat(u.type, "-").concat(u.item.id),
                    c = this.getSectionVisibility(t);
                if (null != s && !c) return null;
                switch (u.type) {
                    case B.bm.GROUP_DM:
                    case B.bm.CHANNEL:
                        return (0, i.jsx)(
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
                    case B.bm.DM:
                    case B.bm.FRIEND:
                        return (0, i.jsx)(
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
                    { sections: n } = this.props;
                if (null == n) return null;
                let l = 0 === t ? en.intl.string(en.t.y29JXs) : en.intl.string(en.t.Sd8Ixw),
                    s = this.getSectionVisibility(t);
                return (0, i.jsx)(eg, {
                    section: t,
                    heading: l,
                    isOpen: s,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}
function eg(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: s } = e;
    return (0, i.jsxs)(S.P3F, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: el.inviteSectionHeader,
        onClick: () => s(t),
        children: [
            (0, i.jsx)(S.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: n,
            }),
            (0, i.jsx)(S.CJ0, {
                size: "md",
                color: "currentColor",
                className: el.inviteSectionToggleIcon,
            }),
        ],
    });
}
es(ec, "defaultProps", {
    analyticsLocation: ee.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: eu.value,
});
let eh = s.forwardRef(function (e, t) {
    var n, l;
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
            analyticsLocation: S,
        } = e,
        { analyticsLocations: T } = (0, _.ZP)(E.Z.INSTANT_INVITE_MODAL),
        A = (0, v.e7)([G.Z, w.Z, R.ZP], () => {
            if (null != r) return r;
            let e = G.Z.getChannelId(),
                t = null == e || (0, et.AB)(e) ? void 0 : w.Z.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = w.Z.getChannel(t.parent_id)),
                null != t ? t : R.ZP.getDefaultChannel(a.id, !0, ee.Plq.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        P = null;
    null != d ? (P = X.Iq.STREAM) : null != c && (P = X.Iq.EMBEDDED_APPLICATION);
    let Z = null != r ? r.getGuildId() : null != a ? a.id : null,
        k = (0, H.xU)({
            guildId: Z,
            location: "InstantInviteModalConnected",
        }),
        D = (0, H.WV)({
            guildId: Z,
            location: "InstantInviteModalConnected",
        }),
        F = (0, v.e7)([O.Z], () => {
            let e = null != A ? A.id : null;
            return null == e
                ? null
                : O.Z.getInvite(e, {
                      targetType: P,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [A, P, d, c]),
        [q, K, J, Q] = (0, v.Wu)(
            [V.Z, L.ZP],
            () => [
                V.Z.getInviteSuggestionRows(),
                V.Z.getTotalSuggestionsCount() >= 1,
                V.Z.getInitialCounts(),
                null != r && null != A ? L.ZP.getVoiceStatesForChannel(A) : null,
            ],
            [A, r],
        ),
        $ = s.useMemo(() => {
            let e = null != A ? A.id : null;
            return null != Z ? j.ZP.getProps(Z, e) : void 0;
        }, [A, Z]),
        en = (0, v.e7)([U.Z], () => null != A && U.Z.can(ee.Plq.CREATE_INSTANT_INVITE, A), [A]),
        el = null === F || !en,
        ei = (null == A ? void 0 : A.type) === ee.d4z.GUILD_VOICE,
        es = (0, C.Z)(A),
        ea = s.useMemo(() => {
            let e = new Set();
            return (
                ei || null != d
                    ? null == Q ||
                      Q.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != Z &&
                      null != $ &&
                      P !== X.Iq.EMBEDDED_APPLICATION &&
                      $.rows.forEach((t) => {
                          t.type === j.so.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [ei, $, d, Q, Z, P]),
        eg = null == r ? void 0 : r.id,
        eh = (0, v.e7)([M.Z], () => M.Z.getStageInstanceByChannel(eg), [eg]);
    s.useEffect(() => {
        (0, x.x)({
            omitUserIds: ea,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: P,
        }).catch(ee.VqG);
    }, [ea, r, a, c, P]);
    let [ep] = (0, b.Z)(null != c ? [c] : []),
        ev = null != F ? F.code : void 0,
        eI = null == F ? void 0 : F.maxAge,
        em = null == F ? void 0 : F.maxUses,
        eS = null == F ? void 0 : F.temporary,
        ef = a.vanityURLCode,
        ex = null != ef && ef.length > 0,
        ey = !en && !(null == A ? void 0 : A.isGuildVocal()) && ex,
        eE = null != (n = null == F ? void 0 : F.flags) ? n : 0;
    en || (null == eh ? void 0 : eh.invite_code) == null || (ev = eh.invite_code);
    let e_ = s.useMemo(() => (ei ? (0, B.Qq)(q, Z) : null), [ei, q, Z]),
        [eb, eC] = s.useState({
            query: "",
            maxAgeOptions: D,
            maxAge: null != (l = null != eI ? eI : k) ? l : H.zv,
            savedMaxAge: eI === eo.value ? (null != k ? k : eu.value) : eo.value,
            maxUses: null != em && 0 !== em ? em : ed.value,
            temporary: null != eS && eS,
            networkError: void 0,
            showVanityURL: ey,
            currentPage: null != m ? m : X.RV.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eT = s.useCallback((e) => {
            eC((t) => er({}, t, e));
        }, []),
        eA = s.useCallback(
            (e) => {
                eT({
                    currentPage: e,
                    lastPage: eb.currentPage,
                });
            },
            [eb.currentPage, eT],
        ),
        eN = ei && !ey && !el && !es,
        { enabled: eM } = N.o.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eN },
        ),
        { maxAge: eP, maxUses: eZ, temporary: ej, savedMaxAge: ew, flags: eR, roleIds: eO } = eb,
        { enabled: eV } = (0, z.J)(null == a ? void 0 : a.id, "InstantInviteModal"),
        eU = (0, Y.Z)(a),
        ek = eV && eU.length > 0,
        eG = s.useCallback(
            (e) => {
                let t = new Set(eO);
                t.delete(e) || t.add(e), eT({ roleIds: t });
            },
            [eO, eT],
        ),
        eD = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eb;
            e === X.RV.SETTINGS && null != t ? eA(t) : I();
        }, [eA, eb, I]),
        eL = s.useCallback(() => {
            let e = null == A ? void 0 : A.id;
            0 === eZ && 0 === eP && !ej && ey
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
                  f.ZP.createInvite(
                      e,
                      {
                          max_age: eP,
                          max_uses: eZ,
                          target_type: P,
                          target_user_id: d,
                          target_application_id: null == ep ? void 0 : ep.id,
                          temporary: ej,
                          flags: eR,
                          role_ids: Array.from(eO),
                      },
                      o,
                  ).catch((e) =>
                      eT({
                          networkError: e,
                          showVanityURL: ey,
                      }),
                  )),
                eP !== eo.value && ew !== eo.value && eT({ savedMaxAge: eo.value });
        }, [ey, en, A, o, null == ep ? void 0 : ep.id, P, d, eP, eZ, ej, eT, ew, eR, eO]),
        eF = (0, y.Z)(A),
        eB = (0, y.Z)((0, h.yE)(eR, g.$.IS_APPLICATION_BYPASS)),
        eH = null != eF && eF !== A,
        eq = null != eB && eB !== (0, h.yE)(eR, g.$.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ey && (eH || eq) && eL();
    }, [eL, eH, eq, ey]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eK } = (0, W.R)(a);
    return (0, i.jsx)(_.Gt, {
        value: T,
        children: (0, i.jsx)(ec, {
            ref: t,
            canCreateInvites: en,
            noInvitesAvailable: el,
            inviteChannel: A,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ef,
            targetType: P,
            targetUserId: d,
            application: ep,
            rows: q,
            sections: e_,
            showFriends: K,
            initialCounts: J,
            code: ev,
            source: o,
            analyticsLocations: T,
            analyticsLocation: S,
            transitionState: p,
            onClose: I,
            canShowVanityURL: ey,
            isGuestInviteCreationToggleEnabled: eM && eN,
            shouldHideTemporaryInviteToggle: (eM && eN) || eK,
            modalState: eb,
            setModalState: eT,
            changePage: eA,
            onGenerateNewLink: eL,
            handleDone: eD,
            isApplicationBypassToggleEnabled: ez && !el,
            isRoleAssignmentEnabled: ek,
            assignableRoles: eU,
            onToggleRole: eG,
        }),
    });
});
function ep(e) {
    return (0, i.jsx)(eh, er({}, e));
}
