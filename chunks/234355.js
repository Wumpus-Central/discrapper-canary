n.d(t, { default: () => ep }), n(938796), n(896048);
var l,
    i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(284009),
    u = n.n(o),
    d = n(735438),
    c = n.n(d),
    g = n(821418),
    h = n(665260),
    p = n(189213),
    v = n(311907),
    A = n(827734),
    I = n(435371),
    m = n(397927),
    S = n(846293),
    x = n(681579),
    y = n(475743),
    f = n(793574),
    E = n(688810),
    _ = n(429913),
    b = n(148719),
    C = n(713654),
    T = n(834757),
    N = n(720527),
    M = n(446600),
    O = n(260509),
    j = n(616356),
    w = n(963307),
    R = n(734057),
    V = n(808728),
    U = n(958590),
    G = n(535820),
    P = n(576705),
    D = n(290863),
    L = n(309010),
    k = n(287809),
    B = n(607567),
    F = n(954571),
    H = n(735547),
    K = n(368739),
    Q = n(21599),
    q = n(540683),
    W = n(279208),
    z = n(577710),
    Y = n(968010),
    J = n(663269),
    Z = n(708051),
    X = n(672814),
    $ = n(172799),
    ee = n(652215),
    et = n(746080),
    en = n(985018),
    el = n(912579),
    ei = n(176465);
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
let { INVITE_OPTIONS_FOREVER: eo, INVITE_OPTIONS_7_DAYS: eu, INVITE_OPTIONS_UNLIMITED: ed } = H.Ay;
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
            { maxAge: v, maxUses: A, temporary: I, flags: m } = h;
        if (i) {
            let n = null == e ? void 0 : e.id;
            if (null == n) return;
            p({ networkError: void 0 }),
                S.Ay.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: A,
                        target_user_id: o,
                        target_type: a,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: I,
                        flags: m,
                    },
                    l,
                ).catch((e) => p({ networkError: e }));
        }
        if (
            (g &&
                F.default.track(ee.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = j.A.getStreamForUser(r, n.id),
                t = (0, T.Ee)(e, D.A);
            F.default.track(ee.HAw.OPEN_MODAL, {
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
                F.default.track(ee.HAw.OPEN_MODAL, {
                    type: "Instant Invite Modal",
                    source: l,
                    location: s,
                });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, h.Lt)(t.flags, g.Q.IS_GUEST_INVITE) && null != e && S.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : null != e ? e : t;
        return null == s
            ? s
            : (0, Q.WU)({
                  baseCode: s,
                  guildScheduledEventId: null == n ? void 0 : n.id,
              });
    }
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, b.A)(e)
            ? (0, i.jsxs)("div", {
                  className: el.UW,
                  children: [
                      (0, i.jsx)(m.EpV, {
                          size: "custom",
                          className: el.QW,
                          color: A.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(m.Text, {
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
            let e = (0, C.gU)(a, n);
            null != e &&
                (t = en.intl.format(en.t.MkSwTR, {
                    channelName: a.name,
                    channelNameHook: (t, n) =>
                        (0, i.jsxs)(
                            "span",
                            {
                                children: [(0, i.jsx)(e, { className: el.p }), t],
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
                        (0, i.jsx)(m.IWV, {
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
                          className: el.Iq,
                          children: (0, i.jsx)(m.SGT, { children: en.intl.string(en.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, i.jsx)("div", {
                            className: el.Iq,
                            children: (0, i.jsx)(m.SGT, { children: en.intl.string(en.t.hzPwGG) }),
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
        let r = (0, W.A)(null != (e = this.getInviteKey()) ? e : ""),
            a = k.default.getCurrentUser();
        u()(null != a, "InstantInviteModal: user cannot be undefined");
        let o = (0, O.bM)(t, a) ? en.intl.string(en.t.HFbByJ) : en.intl.string(en.t.ueBhA9);
        return (
            null != l ? (o = en.intl.string(en.t.CXpS1I)) : null != s && (o = en.intl.string(en.t.ueCrHB)),
            {
                bodyContent: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Text, {
                            className: el.Sv,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            Z.p,
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
            c = (0, W.A)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = en.intl.string(en.t.MLkj7N);
            null != s
                ? (e = en.intl.string(en.t["1b9neu"]))
                : null != r
                  ? (e = en.intl.string(en.t.iI1gMg))
                  : null != l
                    ? (e = en.intl.string(en.t.KaWCyD))
                    : (null == a ? void 0 : a.isGuildStageVoice()) && (e = en.intl.string(en.t["2frWa3"])),
                (d = (0, i.jsx)(m.D0$, {
                    label: e,
                    children: (0, i.jsx)(
                        Z.p,
                        ea(er({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, i.jsxs)("div", {
                    className: el.xF,
                    children: [
                        (0, i.jsx)(m.Checkbox, {
                            checked: u === eo.value,
                            onChange: this.handleToggleMaxAge,
                            label: en.intl.string(en.t["QKJru/"]),
                        }),
                        (0, i.jsx)(I.m_, {
                            text: en.intl.string(en.t.Yx4IiC),
                            children: (0, i.jsx)(m.DUT, {
                                onClick: this.openSettings,
                                className: ei.or,
                                children: (0, i.jsx)(m.Zes, {
                                    size: "sm",
                                    color: A.A.unsafe_rawColors.PRIMARY_400.css,
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
            case $.QR.MAIN:
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
            case $.QR.SETTINGS:
                return (0, i.jsx)(
                    J.h,
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
                [el.iE]: e,
                [el.VL]: null != t,
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
                e($.QR.SETTINGS);
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
                    (0, x.B)(e),
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
                    case H.OK.CHANNEL:
                    case H.OK.GROUP_DM:
                    case H.OK.DM:
                    case H.OK.FRIEND:
                        return X.r;
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
                    case H.OK.GROUP_DM:
                    case H.OK.CHANNEL:
                        return (0, i.jsx)(
                            X.e,
                            {
                                row: u,
                                channel: u.item,
                                inviteKey: o,
                                location: r,
                                source: a,
                            },
                            d,
                        );
                    case H.OK.DM:
                    case H.OK.FRIEND:
                        return (0, i.jsx)(
                            X.e,
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
    return (0, i.jsxs)(m.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: el.uP,
        onClick: () => s(t),
        children: [
            (0, i.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: n,
            }),
            (0, i.jsx)(m.abt, {
                size: "md",
                color: "currentColor",
                className: el.ep,
            }),
        ],
    });
}
es(ec, "defaultProps", {
    analyticsLocation: ee.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
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
            onClose: A,
            page: I,
            analyticsLocation: m,
        } = e,
        { analyticsLocations: C } = (0, E.Ay)(f.A.INSTANT_INVITE_MODAL),
        T = (0, v.bG)([L.A, R.A, V.Ay], () => {
            if (null != r) return r;
            let e = L.A.getChannelId(),
                t = null == e || (0, et.jq)(e) ? void 0 : R.A.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = R.A.getChannel(t.parent_id)),
                (null == t ? void 0 : t.guild_id) === a.id && null != t
                    ? t
                    : V.Ay.getDefaultChannel(a.id, !0, ee.xBc.CREATE_INSTANT_INVITE)
            );
        }, [r, a.id]),
        O = null;
    null != d ? (O = $.yV.STREAM) : null != c && (O = $.yV.EMBEDDED_APPLICATION);
    let j = null != r ? r.getGuildId() : null != a ? a.id : null,
        D = (0, K.LD)({
            guildId: j,
            location: "InstantInviteModalConnected",
        }),
        k = (0, K.pS)({
            guildId: j,
            location: "InstantInviteModalConnected",
        }),
        F = (0, v.bG)([U.A], () => {
            let e = null != T ? T.id : null;
            return null == e
                ? null
                : U.A.getInvite(e, {
                      targetType: O,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [T, O, d, c]),
        [Q, W, J, Z] = (0, v.yK)(
            [G.A, B.Ay],
            () => [
                G.A.getInviteSuggestionRows(),
                G.A.getTotalSuggestionsCount() >= 1,
                G.A.getInitialCounts(),
                null != r && null != T ? B.Ay.getVoiceStatesForChannel(T) : null,
            ],
            [T, r],
        ),
        X = s.useMemo(() => {
            let e = null != T ? T.id : null;
            return null != j ? w.Ay.getProps(j, e) : void 0;
        }, [T, j]),
        en = (0, v.bG)([P.A], () => null != T && P.A.can(ee.xBc.CREATE_INSTANT_INVITE, T), [T]),
        el = null === F || !en,
        ei = (null == T ? void 0 : T.type) === ee.rbe.GUILD_VOICE,
        es = (0, b.A)(T),
        ea = s.useMemo(() => {
            let e = new Set();
            return (
                ei || null != d
                    ? null == Z ||
                      Z.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != j &&
                      null != X &&
                      O !== $.yV.EMBEDDED_APPLICATION &&
                      X.rows.forEach((t) => {
                          t.type === w.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [ei, X, d, Z, j, O]),
        eg = null == r ? void 0 : r.id,
        eh = (0, v.bG)([M.A], () => M.A.getStageInstanceByChannel(eg), [eg]);
    s.useEffect(() => {
        (0, x.t)({
            omitUserIds: ea,
            guild: a,
            channel: r,
            applicationId: c,
            inviteTargetType: O,
        }).catch(ee.FXj);
    }, [ea, r, a, c, O]);
    let [ep] = (0, _.A)(null != c ? [c] : []),
        ev = null != F ? F.code : void 0,
        eA = null == F ? void 0 : F.maxAge,
        eI = null == F ? void 0 : F.maxUses,
        em = null == F ? void 0 : F.temporary,
        eS = a.vanityURLCode,
        ex = null != eS && eS.length > 0,
        ey = !en && !(null == T ? void 0 : T.isGuildVocal()) && ex,
        ef = null != (n = null == F ? void 0 : F.flags) ? n : 0;
    en || (null == eh ? void 0 : eh.invite_code) == null || (ev = eh.invite_code);
    let eE = s.useMemo(() => (ei ? (0, H.Gv)(Q, j) : null), [ei, Q, j]),
        [e_, eb] = s.useState({
            query: "",
            maxAgeOptions: k,
            maxAge: null != (l = null != eA ? eA : D) ? l : K.D4,
            savedMaxAge: eA === eo.value ? (null != D ? D : eu.value) : eo.value,
            maxUses: null != eI && 0 !== eI ? eI : ed.value,
            temporary: null != em && em,
            networkError: void 0,
            showVanityURL: ey,
            currentPage: null != I ? I : $.QR.MAIN,
            lastPage: void 0,
            flags: ef,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eC = s.useCallback((e) => {
            eb((t) => er({}, t, e));
        }, []),
        eT = s.useCallback(
            (e) => {
                eC({
                    currentPage: e,
                    lastPage: e_.currentPage,
                });
            },
            [e_.currentPage, eC],
        ),
        eN = ei && !ey && !el && !es,
        { enabled: eM } = N.w.useExperiment(
            {
                guildId: null == a ? void 0 : a.id,
                location: "acc417_3",
            },
            { autoTrackExposure: eN },
        ),
        { maxAge: eO, maxUses: ej, temporary: ew, savedMaxAge: eR, flags: eV, roleIds: eU } = e_,
        { enabled: eG } = (0, q.E)(null == a ? void 0 : a.id, "InstantInviteModal"),
        eP = (0, Y.A)(a),
        eD = eG && eP.length > 0,
        eL = s.useCallback(
            (e) => {
                let t = new Set(eU);
                t.delete(e) || t.add(e), eC({ roleIds: t });
            },
            [eU, eC],
        ),
        ek = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === $.QR.SETTINGS && null != t ? eT(t) : A();
        }, [eT, e_, A]),
        eB = s.useCallback(() => {
            let e = null == T ? void 0 : T.id;
            0 === ej && 0 === eO && !ew && ey
                ? eC({
                      networkError: void 0,
                      showVanityURL: !0,
                  })
                : en &&
                  null != e &&
                  (eC({
                      networkError: void 0,
                      showVanityURL: !1,
                  }),
                  S.Ay.createInvite(
                      e,
                      {
                          max_age: eO,
                          max_uses: ej,
                          target_type: O,
                          target_user_id: d,
                          target_application_id: null == ep ? void 0 : ep.id,
                          temporary: ew,
                          flags: eV,
                          role_ids: Array.from(eU),
                      },
                      o,
                  ).catch((e) =>
                      eC({
                          networkError: e,
                          showVanityURL: ey,
                      }),
                  )),
                eO !== eo.value && eR !== eo.value && eC({ savedMaxAge: eo.value });
        }, [ey, en, T, o, null == ep ? void 0 : ep.id, O, d, eO, ej, ew, eC, eR, eV, eU]),
        eF = (0, y.A)(T),
        eH = (0, y.A)((0, h.Lt)(eV, g.Q.IS_APPLICATION_BYPASS)),
        eK = null != eF && eF !== T,
        eQ = null != eH && eH !== (0, h.Lt)(eV, g.Q.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !ey && (eK || eQ) && eB();
    }, [eB, eK, eQ, ey]);
    let { canCreateApplicationBypassInvites: eq, isManualApprovalGuild: eW } = (0, z.N)(a);
    return (0, i.jsx)(E.f5, {
        value: C,
        children: (0, i.jsx)(ec, {
            ref: t,
            canCreateInvites: en,
            noInvitesAvailable: el,
            inviteChannel: T,
            guild: a,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: eS,
            targetType: O,
            targetUserId: d,
            application: ep,
            rows: Q,
            sections: eE,
            showFriends: W,
            initialCounts: J,
            code: ev,
            source: o,
            analyticsLocations: C,
            analyticsLocation: m,
            transitionState: p,
            onClose: A,
            canShowVanityURL: ey,
            isGuestInviteCreationToggleEnabled: eM && eN,
            shouldHideTemporaryInviteToggle: (eM && eN) || eW,
            modalState: e_,
            setModalState: eC,
            changePage: eT,
            onGenerateNewLink: eB,
            handleDone: ek,
            isApplicationBypassToggleEnabled: eq && !el,
            isRoleAssignmentEnabled: eD,
            assignableRoles: eP,
            onToggleRole: eL,
        }),
    });
});
function ep(e) {
    return (0, i.jsx)(eh, er({}, e));
}
