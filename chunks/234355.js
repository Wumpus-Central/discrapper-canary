n.d(t, {
    default: () => ev,
}),
    n(938796),
    n(896048);
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
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
    C = n(148719),
    b = n(713654),
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
    W = n(540683),
    q = n(4092),
    z = n(279208),
    Y = n(577710),
    J = n(968010),
    Z = n(663269),
    X = n(708051),
    $ = n(672814),
    ee = n(172799),
    et = n(652215),
    en = n(746080),
    el = n(985018),
    ei = n(912579),
    es = n(176465);

function ea(e, t, n) {
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
                ea(e, t, n[t]);
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
let { INVITE_OPTIONS_FOREVER: eu, INVITE_OPTIONS_7_DAYS: ed, INVITE_OPTIONS_UNLIMITED: ec } = H.Ay;
class eg extends (l = s.PureComponent) {
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: l,
                canCreateInvites: i,
                analyticsLocation: s,
                streamUserId: a,
                targetType: r,
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
            p({
                networkError: void 0,
            }),
                S.Ay.createInvite(
                    n,
                    {
                        validate: null != t ? t : null,
                        max_age: v,
                        max_uses: A,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: null == u ? void 0 : u.id,
                        temporary: I,
                        flags: m,
                    },
                    l,
                ).catch((e) =>
                    p({
                        networkError: e,
                    }),
                );
        }
        if (
            (g &&
                F.default.track(et.HAw.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: null == u ? void 0 : u.id,
                }),
            null != a)
        ) {
            let e = j.A.getStreamForUser(a, n.id),
                t = (0, T.Ee)(e, D.A);
            F.default.track(et.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: l,
                location: s,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            (null == u ? void 0 : u.id) != null ||
                F.default.track(et.HAw.OPEN_MODAL, {
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
        return (0, C.A)(e)
            ? (0, i.jsxs)("div", {
                  className: ei.UW,
                  children: [
                      (0, i.jsx)(m.EpV, {
                          size: "custom",
                          className: ei.QW,
                          color: A.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(m.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: el.intl.string(el.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: n, guildScheduledEvent: l, streamUserId: s, application: a, inviteChannel: r } = this.props;
        if (
            ((e =
                null != s
                    ? el.intl.string(el.t["6VQaqd"])
                    : null != a
                      ? el.intl.formatToPlainString(el.t.ZdK3dW, {
                            applicationName: a.name,
                        })
                      : null != l
                        ? el.intl.string(el.t.JKV4FL)
                        : (null == r ? void 0 : r.isGuildStageVoice())
                          ? el.intl.string(el.t.zTrsH0)
                          : el.intl.formatToPlainString(el.t.NvVBJU, {
                                name: n.name,
                            })),
            null != r)
        ) {
            let e = (0, b.gU)(r, n);
            null != e &&
                (t = el.intl.format(el.t.MkSwTR, {
                    channelName: r.name,
                    channelNameHook: (t, n) =>
                        (0, i.jsxs)(
                            "span",
                            {
                                children: [
                                    (0, i.jsx)(e, {
                                        className: ei.p,
                                    }),
                                    t,
                                ],
                            },
                            n,
                        ),
                }));
        }
        return n.features.has(et.GuildFeatures.HUB)
            ? {
                  title: el.intl.string(el.t.WhR38i),
                  subtitle: el.intl.string(el.t.Ed4BMs),
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
                            placeholder: el.intl.string(el.t.CmSHYx),
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
        let { rows: e, sections: t } = this.props,
            n = this.getInviteKey();
        return 0 === e.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  renderRow: () =>
                      (0, i.jsx)("div", {
                          className: ei.Iq,
                          children: (0, i.jsx)(m.SGT, {
                              children: el.intl.string(el.t.ojoWgX),
                          }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, i.jsx)("div", {
                            className: ei.Iq,
                            children: (0, i.jsx)(m.SGT, {
                                children: el.intl.string(el.t.hzPwGG),
                            }),
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
        let a = (0, z.A)(null != (e = this.getInviteKey()) ? e : ""),
            r = k.default.getCurrentUser();
        u()(null != r, "InstantInviteModal: user cannot be undefined");
        let o = (0, O.bM)(t, r) ? el.intl.string(el.t.HFbByJ) : el.intl.string(el.t.ueBhA9);
        return (
            null != l ? (o = el.intl.string(el.t.CXpS1I)) : null != s && (o = el.intl.string(el.t.ueCrHB)),
            {
                bodyContent: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Text, {
                            className: ei.Sv,
                            variant: "text-sm/normal",
                            children: o,
                        }),
                        (0, i.jsx)(
                            X.p,
                            eo(er({}, this.props), {
                                setInviteFlags: this.handleSetInviteFlags,
                                copyValue: a,
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
                application: a,
                inviteChannel: r,
                modalState: o,
            } = this.props,
            { maxAge: u } = o,
            d = null,
            c = (0, z.A)(null != (e = this.getInviteKey()) ? e : "");
        if (n) {
            let e = el.intl.string(el.t.MLkj7N);
            null != s
                ? (e = el.intl.string(el.t["1b9neu"]))
                : null != a
                  ? (e = el.intl.string(el.t.iI1gMg))
                  : null != l
                    ? (e = el.intl.string(el.t.KaWCyD))
                    : (null == r ? void 0 : r.isGuildStageVoice()) && (e = el.intl.string(el.t["2frWa3"])),
                (d = (0, i.jsx)(m.D0$, {
                    label: e,
                    children: (0, i.jsx)(
                        X.p,
                        eo(er({}, this.props), {
                            setInviteFlags: this.handleSetInviteFlags,
                            copyValue: c,
                        }),
                    ),
                }));
        } else
            t ||
                (d = (0, i.jsxs)("div", {
                    className: ei.xF,
                    children: [
                        (0, i.jsx)(m.Checkbox, {
                            checked: u === eu.value,
                            onChange: this.handleToggleMaxAge,
                            label: el.intl.string(el.t["QKJru/"]),
                        }),
                        (0, i.jsx)(I.m_, {
                            text: el.intl.string(el.t.Yx4IiC),
                            children: (0, i.jsx)(m.DUT, {
                                onClick: this.openSettings,
                                className: es.or,
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
            case ee.QR.MAIN:
                let { title: a, subtitle: r } = this.getHeaderContent(),
                    { bodyContent: o, controls: u, listProps: d } = this.getBodyContent();
                return (0, i.jsx)(p.Modal, {
                    transitionState: n,
                    onClose: l,
                    title: a,
                    subtitle: r,
                    input: u,
                    listProps: d,
                    preview: this.renderFooter(),
                    actions: [],
                    children: o,
                });
            case ee.QR.SETTINGS:
                return (0, i.jsx)(
                    Z.h,
                    eo(er({}, this.props), {
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
            className: r()({
                [ei.iE]: e,
                [ei.VL]: null != t,
            }),
            children: this.getModal(),
        });
    }
    constructor(...e) {
        super(...e),
            ea(this, "_scroller", null),
            ea(this, "_headerId", c().uniqueId()),
            ea(this, "getSectionVisibility", (e) => {
                var t;
                let { modalState: n } = this.props;
                return null == (t = n.sectionVisibility[e]) || t;
            }),
            ea(this, "openSettings", () => {
                let { changePage: e } = this.props;
                e(ee.QR.SETTINGS);
            }),
            ea(this, "handleSelectMaxAge", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    maxAge: e,
                    savedMaxAge: t.maxAge,
                });
            }),
            ea(this, "handleSelectMaxUses", (e) => {
                let { setModalState: t } = this.props;
                t({
                    maxUses: e,
                });
            }),
            ea(this, "handleToggleTemporary", (e) => {
                let { setModalState: t } = this.props;
                t({
                    temporary: e,
                });
            }),
            ea(this, "handleSetInviteFlags", (e) => {
                let { setModalState: t } = this.props;
                t({
                    flags: e,
                });
            }),
            ea(this, "handleQueryChange", (e) => {
                var t;
                let { modalState: n, setModalState: l } = this.props,
                    i = {
                        query: e,
                    };
                "" === e && "" !== n.query
                    ? ((i.sectionVisibility = er({}, n.defaultSectionVisibility)), (i.defaultSectionVisibility = {}))
                    : "" !== e &&
                      "" === n.query &&
                      ((i.defaultSectionVisibility = er({}, n.sectionVisibility)), (i.sectionVisibility = {})),
                    null == (t = this._scroller) ||
                        t.scrollTo({
                            to: 0,
                        }),
                    (0, x.B)(e),
                    l(i);
            }),
            ea(this, "handleClearSearch", () => {
                this.handleQueryChange("");
            }),
            ea(this, "handleToggleMaxAge", () => {
                let { modalState: e, setModalState: t } = this.props,
                    { maxAge: n, savedMaxAge: l } = e;
                t({
                    maxAge: l,
                    savedMaxAge: n,
                });
            }),
            ea(this, "handleToggleSectionVisibility", (e) => {
                let { modalState: t, setModalState: n } = this.props;
                n({
                    sectionVisibility: eo(er({}, t.sectionVisibility), {
                        [e]: !this.getSectionVisibility(e),
                    }),
                });
            }),
            ea(this, "getRowHeight", (e, t) => {
                let { sections: n, rows: l } = this.props,
                    i = this.getSectionVisibility(e);
                if (null != n && !i) return 0;
                switch ((null == n ? l[t] : n[e][t]).type) {
                    case H.OK.CHANNEL:
                    case H.OK.GROUP_DM:
                    case H.OK.DM:
                    case H.OK.FRIEND:
                        return $.r;
                    default:
                        return 0;
                }
            }),
            ea(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { rows: l, sections: s, analyticsLocation: a, source: r, shouldRenameButtonCTA: o } = this.props,
                    u = this.getInviteKey(),
                    d = null == s ? l[n] : s[t][n],
                    c = "".concat(d.type, "-").concat(d.item.id),
                    g = this.getSectionVisibility(t);
                if (null != s && !g) return null;
                switch (d.type) {
                    case H.OK.GROUP_DM:
                    case H.OK.CHANNEL:
                        return (0, i.jsx)(
                            $.e,
                            {
                                row: d,
                                channel: d.item,
                                inviteKey: u,
                                location: a,
                                source: r,
                                shouldRenameButtonCTA: o,
                            },
                            c,
                        );
                    case H.OK.DM:
                    case H.OK.FRIEND:
                        return (0, i.jsx)(
                            $.e,
                            {
                                row: d,
                                user: d.item,
                                inviteKey: u,
                                location: a,
                                source: r,
                                shouldRenameButtonCTA: o,
                            },
                            c,
                        );
                    default:
                        return null;
                }
            }),
            ea(this, "getSectionHeight", (e) => (0 === e ? 24 : 36)),
            ea(this, "renderSection", (e) => {
                let { section: t } = e,
                    { sections: n } = this.props;
                if (null == n) return null;
                let l = 0 === t ? el.intl.string(el.t.y29JXs) : el.intl.string(el.t.Sd8Ixw),
                    s = this.getSectionVisibility(t);
                return (0, i.jsx)(eh, {
                    section: t,
                    heading: l,
                    isOpen: s,
                    onToggleVisibility: this.handleToggleSectionVisibility,
                });
            });
    }
}

function eh(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: s } = e;
    return (0, i.jsxs)(m.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: ei.uP,
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
                className: ei.ep,
            }),
        ],
    });
}
ea(eg, "defaultProps", {
    analyticsLocation: et.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
    defaultMaxAge: ed.value,
});
let ep = s.forwardRef(function (e, t) {
    var n, l;
    let {
            channel: a,
            guild: r,
            source: o,
            guildScheduledEvent: u,
            streamUserId: d,
            applicationId: c,
            transitionState: p,
            onClose: A,
            page: I,
            analyticsLocation: m,
        } = e,
        { analyticsLocations: b } = (0, E.Ay)(f.A.INSTANT_INVITE_MODAL),
        { enabled: T } = q.D.useConfig({
            location: "InstantInvite",
        }),
        O = (0, v.bG)([L.A, R.A, V.Ay], () => {
            if (null != a) return a;
            let e = L.A.getChannelId(),
                t = null == e || (0, en.jq)(e) ? void 0 : R.A.getChannel(e);
            return (
                (null == t ? void 0 : t.isThread()) && (t = R.A.getChannel(t.parent_id)),
                (null == t ? void 0 : t.guild_id) === r.id && null != t
                    ? t
                    : V.Ay.getDefaultChannel(r.id, !0, et.xBc.CREATE_INSTANT_INVITE)
            );
        }, [a, r.id]),
        j = null;
    null != d ? (j = ee.yV.STREAM) : null != c && (j = ee.yV.EMBEDDED_APPLICATION);
    let D = null != a ? a.getGuildId() : null != r ? r.id : null,
        k = (0, K.LD)({
            guildId: D,
            location: "InstantInviteModalConnected",
        }),
        F = (0, K.pS)({
            guildId: D,
            location: "InstantInviteModalConnected",
        }),
        Q = (0, v.bG)([U.A], () => {
            let e = null != O ? O.id : null;
            return null == e
                ? null
                : U.A.getInvite(e, {
                      targetType: j,
                      targetUserId: d,
                      targetApplicationId: c,
                  });
        }, [O, j, d, c]),
        [z, Z, X, $] = (0, v.yK)(
            [G.A, B.Ay],
            () => [
                G.A.getInviteSuggestionRows(),
                G.A.getTotalSuggestionsCount() >= 1,
                G.A.getInitialCounts(),
                null != a && null != O ? B.Ay.getVoiceStatesForChannel(O) : null,
            ],
            [O, a],
        ),
        el = s.useMemo(() => {
            let e = null != O ? O.id : null;
            return null != D ? w.Ay.getProps(D, e) : void 0;
        }, [O, D]),
        ei = (0, v.bG)([P.A], () => null != O && P.A.can(et.xBc.CREATE_INSTANT_INVITE, O), [O]),
        es = null === Q || !ei,
        ea = (null == O ? void 0 : O.type) === et.rbe.GUILD_VOICE,
        eo = (0, C.A)(O),
        eh = s.useMemo(() => {
            let e = new Set();
            return (
                ea || null != d
                    ? null == $ ||
                      $.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != D &&
                      null != el &&
                      j !== ee.yV.EMBEDDED_APPLICATION &&
                      el.rows.forEach((t) => {
                          t.type === w.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [ea, el, d, $, D, j]),
        ep = null == a ? void 0 : a.id,
        ev = (0, v.bG)([M.A], () => M.A.getStageInstanceByChannel(ep), [ep]);
    s.useEffect(() => {
        (0, x.t)({
            omitUserIds: eh,
            guild: r,
            channel: a,
            applicationId: c,
            inviteTargetType: j,
        }).catch(et.FXj);
    }, [eh, a, r, c, j]);
    let [eA] = (0, _.A)(null != c ? [c] : []),
        eI = null != Q ? Q.code : void 0,
        em = null == Q ? void 0 : Q.maxAge,
        eS = null == Q ? void 0 : Q.maxUses,
        ex = null == Q ? void 0 : Q.temporary,
        ey = r.vanityURLCode,
        ef = null != ey && ey.length > 0,
        eE = !ei && !(null == O ? void 0 : O.isGuildVocal()) && ef,
        e_ = null != (n = null == Q ? void 0 : Q.flags) ? n : 0;
    ei || (null == ev ? void 0 : ev.invite_code) == null || (eI = ev.invite_code);
    let eC = s.useMemo(() => (ea ? (0, H.Gv)(z, D) : null), [ea, z, D]),
        [eb, eT] = s.useState({
            query: "",
            maxAgeOptions: F,
            maxAge: null != (l = null != em ? em : k) ? l : K.D4,
            savedMaxAge: em === eu.value ? (null != k ? k : ed.value) : eu.value,
            maxUses: null != eS && 0 !== eS ? eS : ec.value,
            temporary: null != ex && ex,
            networkError: void 0,
            showVanityURL: eE,
            currentPage: null != I ? I : ee.QR.MAIN,
            lastPage: void 0,
            flags: e_,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eN = s.useCallback((e) => {
            eT((t) => er({}, t, e));
        }, []),
        eM = s.useCallback(
            (e) => {
                eN({
                    currentPage: e,
                    lastPage: eb.currentPage,
                });
            },
            [eb.currentPage, eN],
        ),
        eO = ea && !eE && !es && !eo,
        { enabled: ej } = N.w.useExperiment(
            {
                guildId: null == r ? void 0 : r.id,
                location: "acc417_3",
            },
            {
                autoTrackExposure: eO,
            },
        ),
        { maxAge: ew, maxUses: eR, temporary: eV, savedMaxAge: eU, flags: eG, roleIds: eP } = eb,
        { enabled: eD } = (0, W.E)(null == r ? void 0 : r.id, "InstantInviteModal"),
        eL = (0, J.A)(r),
        ek = eD && eL.length > 0,
        eB = s.useCallback(
            (e) => {
                let t = new Set(eP);
                t.delete(e) || t.add(e),
                    eN({
                        roleIds: t,
                    });
            },
            [eP, eN],
        ),
        eF = s.useCallback(() => {
            let { currentPage: e, lastPage: t } = eb;
            e === ee.QR.SETTINGS && null != t ? eM(t) : A();
        }, [eM, eb, A]),
        eH = s.useCallback(() => {
            let e = null == O ? void 0 : O.id;
            0 === eR && 0 === ew && !eV && eE
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
                  S.Ay.createInvite(
                      e,
                      {
                          max_age: ew,
                          max_uses: eR,
                          target_type: j,
                          target_user_id: d,
                          target_application_id: null == eA ? void 0 : eA.id,
                          temporary: eV,
                          flags: eG,
                          role_ids: Array.from(eP),
                      },
                      o,
                  ).catch((e) =>
                      eN({
                          networkError: e,
                          showVanityURL: eE,
                      }),
                  )),
                ew !== eu.value &&
                    eU !== eu.value &&
                    eN({
                        savedMaxAge: eu.value,
                    });
        }, [eE, ei, O, o, null == eA ? void 0 : eA.id, j, d, ew, eR, eV, eN, eU, eG, eP]),
        eK = (0, y.A)(O),
        eQ = (0, y.A)((0, h.Lt)(eG, g.Q.IS_APPLICATION_BYPASS)),
        eW = null != eK && eK !== O,
        eq = null != eQ && eQ !== (0, h.Lt)(eG, g.Q.IS_APPLICATION_BYPASS);
    s.useEffect(() => {
        !eE && (eW || eq) && eH();
    }, [eH, eW, eq, eE]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eY } = (0, Y.N)(r);
    return (0, i.jsx)(E.f5, {
        value: b,
        children: (0, i.jsx)(eg, {
            ref: t,
            canCreateInvites: ei,
            noInvitesAvailable: es,
            inviteChannel: O,
            guild: r,
            guildScheduledEvent: u,
            streamUserId: d,
            vanityURLCode: ey,
            targetType: j,
            targetUserId: d,
            application: eA,
            rows: z,
            sections: eC,
            showFriends: Z,
            initialCounts: X,
            code: eI,
            source: o,
            analyticsLocations: b,
            analyticsLocation: m,
            transitionState: p,
            onClose: A,
            canShowVanityURL: eE,
            isGuestInviteCreationToggleEnabled: ej && eO,
            shouldHideTemporaryInviteToggle: (ej && eO) || eY,
            modalState: eb,
            setModalState: eN,
            changePage: eM,
            onGenerateNewLink: eH,
            handleDone: eF,
            isApplicationBypassToggleEnabled: ez && !es,
            isRoleAssignmentEnabled: ek,
            assignableRoles: eL,
            onToggleRole: eB,
            shouldRenameButtonCTA: T,
        }),
    });
});

function ev(e) {
    return (0, i.jsx)(ep, er({}, e));
}
