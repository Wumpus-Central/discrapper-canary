n.d(t, { default: () => eg }), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    u = n.n(d),
    c = n(821418),
    g = n(665260),
    h = n(189213),
    A = n(311907),
    p = n(827734),
    I = n(435371),
    x = n(397927),
    m = n(846293),
    v = n(681579),
    S = n(475743),
    y = n(793574),
    E = n(688810),
    f = n(429913),
    _ = n(148719),
    T = n(47167),
    C = n(713654),
    N = n(834757),
    b = n(942908),
    M = n(446600),
    j = n(164891),
    R = n(260509),
    G = n(616356),
    V = n(963307),
    U = n(734057),
    w = n(808728),
    O = n(958590),
    D = n(535820),
    P = n(576705),
    L = n(290863),
    k = n(309010),
    F = n(287809),
    B = n(607567),
    H = n(954571),
    K = n(735547),
    z = n(368739),
    Q = n(21599),
    q = n(540683),
    W = n(279208),
    Y = n(577710),
    J = n(968010),
    Z = n(663269),
    X = n(708051),
    $ = n(672814),
    ee = n(172799),
    et = n(652215),
    en = n(746080),
    el = n(985018),
    ei = n(67501),
    es = n(333111);
let { INVITE_OPTIONS_FOREVER: ea, INVITE_OPTIONS_7_DAYS: er, INVITE_OPTIONS_UNLIMITED: eo } = K.Ay;
class ed extends i.PureComponent {
    _scroller = null;
    _headerId = u().uniqueId();
    static defaultProps = { analyticsLocation: et.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: er.value };
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
                application: d,
                initialCounts: u,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: A,
            } = this.props,
            { maxAge: p, maxUses: I, temporary: x, flags: v } = h;
        if (i) {
            let n = e?.id;
            if (null == n) return;
            A({ networkError: void 0 }),
                m.Ay.createInvite(
                    n,
                    {
                        validate: t ?? null,
                        max_age: p,
                        max_uses: I,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: d?.id,
                        temporary: x,
                        flags: v,
                    },
                    l,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                H.default.track(et.HAw.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: d?.id,
                }),
            null != a)
        ) {
            let e = G.A.getStreamForUser(a, n.id),
                t = (0, N.Ee)(e, L.A);
            H.default.track(et.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: l,
                location: s,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            d?.id != null ||
                H.default.track(et.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: l, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, g.Lt)(t.flags, c.Q.IS_GUEST_INVITE) && null != e && m.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : (e ?? t);
        return null == s ? s : (0, Q.WU)({ baseCode: s, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(ee.QR.SETTINGS);
    };
    handleSelectMaxAge = (e) => {
        let { modalState: t, setModalState: n } = this.props;
        n({ maxAge: e, savedMaxAge: t.maxAge });
    };
    handleSelectMaxUses = (e) => {
        let { setModalState: t } = this.props;
        t({ maxUses: e });
    };
    handleToggleTemporary = (e) => {
        let { setModalState: t } = this.props;
        t({ temporary: e });
    };
    handleSetInviteFlags = (e) => {
        let { setModalState: t } = this.props;
        t({ flags: e });
    };
    handleQueryChange = (e) => {
        let { modalState: t, setModalState: n } = this.props,
            l = { query: e };
        "" === e && "" !== t.query
            ? ((l.sectionVisibility = { ...t.defaultSectionVisibility }), (l.defaultSectionVisibility = {}))
            : "" !== e &&
              "" === t.query &&
              ((l.defaultSectionVisibility = { ...t.sectionVisibility }), (l.sectionVisibility = {})),
            this._scroller?.scrollTo({ to: 0 }),
            (0, v.B)(e),
            n(l);
    };
    handleClearSearch = () => {
        this.handleQueryChange("");
    };
    handleToggleMaxAge = () => {
        let { modalState: e, setModalState: t } = this.props,
            { maxAge: n, savedMaxAge: l } = e;
        t({ maxAge: l, savedMaxAge: n });
    };
    handleToggleSectionVisibility = (e) => {
        let { modalState: t, setModalState: n } = this.props;
        n({ sectionVisibility: { ...t.sectionVisibility, [e]: !this.getSectionVisibility(e) } });
    };
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, _.A)(e)
            ? (0, l.jsxs)("div", {
                  className: ei.UW,
                  children: [
                      (0, l.jsx)(x.EpV, {
                          size: "custom",
                          className: ei.QW,
                          color: p.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(x.Text, {
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
            { guild: n, guildScheduledEvent: i, streamUserId: s, application: a, inviteChannel: r } = this.props;
        if (
            ((e =
                null != s
                    ? el.intl.string(el.t["6VQaqd"])
                    : null != a
                      ? el.intl.formatToPlainString(el.t.ZdK3dW, { applicationName: a.name })
                      : null != i
                        ? el.intl.string(el.t.JKV4FL)
                        : r?.isGuildStageVoice()
                          ? el.intl.string(el.t.zTrsH0)
                          : el.intl.formatToPlainString(el.t.NvVBJU, { name: n.name })),
            null != r)
        ) {
            let e = (0, C.gU)(r, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? el.intl.string(el.t["/YzI63"]);
                t = el.intl.format(el.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)("span", { children: [(0, l.jsx)(e, { className: ei.p }), t] }, n),
                });
            }
        }
        return n.features.has(et.GuildFeatures.HUB)
            ? { title: el.intl.string(el.t.WhR38i), subtitle: el.intl.string(el.t.Ed4BMs) }
            : { title: e, subtitle: t };
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
                        (0, l.jsx)(x.IWV, {
                            size: "md",
                            query: i,
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
                      (0, l.jsx)("div", {
                          className: ei.Iq,
                          children: (0, l.jsx)(x.SGT, { children: el.intl.string(el.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: ei.Iq,
                            children: (0, l.jsx)(x.SGT, { children: el.intl.string(el.t.hzPwGG) }),
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
    getRowHeight = (e, t) => {
        let { sections: n, rows: l } = this.props,
            i = this.getSectionVisibility(e);
        if (null != n && !i) return 0;
        switch ((null == n ? l[t] : n[e][t]).type) {
            case K.OK.CHANNEL:
            case K.OK.GROUP_DM:
            case K.OK.DM:
            case K.OK.FRIEND:
                return $.r;
            default:
                return 0;
        }
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                rows: i,
                sections: s,
                analyticsLocation: a,
                source: r,
                ringingEnabled: o,
                inviteChannel: d,
                guild: u,
            } = this.props,
            c = this.getInviteKey(),
            g = null == s ? i[n] : s[t][n],
            h = `${g.type}-${g.item.id}`,
            A = this.getSectionVisibility(t);
        if (null != s && !A) return null;
        switch (g.type) {
            case K.OK.GROUP_DM:
            case K.OK.CHANNEL:
                return (0, l.jsx)(
                    $.e,
                    { row: g, channel: g.item, inviteKey: c, location: a, source: r, guildId: u.id },
                    h,
                );
            case K.OK.DM:
            case K.OK.FRIEND:
                return (0, l.jsx)(
                    $.e,
                    {
                        row: g,
                        user: g.item,
                        inviteKey: c,
                        location: a,
                        source: r,
                        ringingEnabled: o,
                        inviteChannel: d,
                        guildId: u.id,
                    },
                    h,
                );
            default:
                return null;
        }
    };
    getSectionHeight = (e) => (0 === e ? 24 : 36);
    renderSection = (e) => {
        let { section: t } = e,
            { sections: n } = this.props;
        if (null == n) return null;
        let i = 0 === t ? el.intl.string(el.t.y29JXs) : el.intl.string(el.t.Sd8Ixw),
            s = this.getSectionVisibility(t);
        return (0, l.jsx)(eu, {
            section: t,
            heading: i,
            isOpen: s,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let s = (0, W.A)(this.getInviteKey() ?? ""),
            a = F.default.getCurrentUser();
        o()(null != a, "InstantInviteModal: user cannot be undefined");
        let r = (0, R.bM)(e, a) ? el.intl.string(el.t.HFbByJ) : el.intl.string(el.t.ueBhA9);
        return (
            null != n ? (r = el.intl.string(el.t.CXpS1I)) : null != i && (r = el.intl.string(el.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.Text, { className: ei.Sv, variant: "text-sm/normal", children: r }),
                        (0, l.jsx)(X.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: s }),
                    ],
                }),
                controls: void 0,
                listProps: void 0,
            }
        );
    }
    renderFooter() {
        let {
                noInvitesAvailable: e,
                showFriends: t,
                guildScheduledEvent: n,
                streamUserId: i,
                application: s,
                inviteChannel: a,
                modalState: r,
            } = this.props,
            { maxAge: o } = r,
            d = null,
            u = (0, W.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = el.intl.string(el.t.MLkj7N);
            null != i
                ? (e = el.intl.string(el.t["1b9neu"]))
                : null != s
                  ? (e = el.intl.string(el.t.iI1gMg))
                  : null != n
                    ? (e = el.intl.string(el.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = el.intl.string(el.t["2frWa3"])),
                (d = (0, l.jsx)(x.D0$, {
                    label: e,
                    children: (0, l.jsx)(X.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                }));
        } else
            e ||
                (d = (0, l.jsxs)("div", {
                    className: ei.xF,
                    children: [
                        (0, l.jsx)(x.Checkbox, {
                            checked: o === ea.value,
                            onChange: this.handleToggleMaxAge,
                            label: el.intl.string(el.t["QKJru/"]),
                        }),
                        (0, l.jsx)(I.m_, {
                            text: el.intl.string(el.t.Yx4IiC),
                            children: (0, l.jsx)(x.DUT, {
                                onClick: this.openSettings,
                                className: es.or,
                                children: (0, l.jsx)(x.Zes, {
                                    size: "sm",
                                    color: p.A.unsafe_rawColors.PRIMARY_400.css,
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
            case ee.QR.MAIN:
                let { title: a, subtitle: r } = this.getHeaderContent(),
                    { bodyContent: o, controls: d, listProps: u } = this.getBodyContent();
                return (0, l.jsx)(h.Modal, {
                    transitionState: n,
                    onClose: i,
                    title: a,
                    subtitle: r,
                    input: d,
                    listProps: u,
                    preview: this.renderFooter(),
                    actions: [],
                    children: o,
                });
            case ee.QR.SETTINGS:
                return (0, l.jsx)(Z.h, {
                    ...this.props,
                    onSetInviteFlags: this.handleSetInviteFlags,
                    headerId: this._headerId,
                    onSelectMaxAge: this.handleSelectMaxAge,
                    onSelectMaxUses: this.handleSelectMaxUses,
                    onToggleTemporary: this.handleToggleTemporary,
                    handleDone: t,
                });
            default:
                return null;
        }
    }
    render() {
        let { showFriends: e, sections: t } = this.props;
        return (0, l.jsx)("div", { className: a()({ [ei.iE]: e, [ei.VL]: null != t }), children: this.getModal() });
    }
}
function eu(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(x.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: ei.uP,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(x.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, l.jsx)(x.abt, { size: "md", color: "currentColor", className: ei.ep }),
        ],
    });
}
let ec = i.forwardRef(function (e, t) {
    let {
            channel: n,
            guild: s,
            source: a,
            guildScheduledEvent: r,
            streamUserId: o,
            applicationId: d,
            transitionState: u,
            onClose: h,
            page: p,
            analyticsLocation: I,
        } = e,
        { analyticsLocations: x } = (0, E.Ay)(y.A.INSTANT_INVITE_MODAL),
        C = (0, A.bG)([k.A, U.A, w.Ay, P.A], () => {
            if (null != n) return n;
            let e = k.A.getChannelId(),
                t = null == e || (0, en.jq)(e) ? void 0 : U.A.getChannel(e);
            return (
                t?.isThread() && (t = U.A.getChannel(t.parent_id)),
                t?.guild_id === s.id && null != t && P.A.can(et.xBc.VIEW_CHANNEL, t)
                    ? t
                    : w.Ay.getDefaultChannel(s.id, !0, et.xBc.CREATE_INSTANT_INVITE)
            );
        }, [n, s.id]),
        N = (0, T.Ay)(C),
        R = null;
    null != o ? (R = ee.yV.STREAM) : null != d && (R = ee.yV.EMBEDDED_APPLICATION);
    let G = null != n ? n.getGuildId() : null != s ? s.id : null,
        L = (0, z.LD)({ guildId: G, location: "InstantInviteModalConnected" }),
        F = (0, z.pS)({ guildId: G, location: "InstantInviteModalConnected" }),
        H = (0, A.bG)([O.A], () => {
            let e = null != C ? C.id : null;
            return null == e ? null : O.A.getInvite(e, { targetType: R, targetUserId: o, targetApplicationId: d });
        }, [C, R, o, d]),
        [Q, W, Z, X] = (0, A.yK)(
            [D.A, B.Ay],
            () => [
                D.A.getInviteSuggestionRows(),
                D.A.getTotalSuggestionsCount() >= 1,
                D.A.getInitialCounts(),
                null != n && null != C ? B.Ay.getVoiceStatesForChannel(C) : null,
            ],
            [C, n],
        ),
        $ = i.useMemo(() => {
            let e = null != C ? C.id : null;
            return null != G ? V.Ay.getProps(G, e) : void 0;
        }, [C, G]),
        el = (0, A.bG)([P.A], () => null != C && P.A.can(et.xBc.CREATE_INSTANT_INVITE, C), [C]),
        ei = null === H || !el,
        es = C?.type === et.rbe.GUILD_VOICE,
        eu = (0, _.A)(C),
        ec = i.useMemo(() => {
            let e = new Set();
            return (
                es || null != o
                    ? X?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != G &&
                      null != $ &&
                      R !== ee.yV.EMBEDDED_APPLICATION &&
                      $.rows.forEach((t) => {
                          t.type === V.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [es, $, o, X, G, R]),
        eg = n?.id,
        eh = (0, A.bG)([M.A], () => M.A.getStageInstanceByChannel(eg), [eg]);
    i.useEffect(() => {
        (0, v.t)({ omitUserIds: ec, guild: s, channel: n, applicationId: d, inviteTargetType: R }).catch(et.FXj);
    }, [ec, n, s, d, R]);
    let [eA] = (0, f.A)(null != d ? [d] : []),
        ep = null != H ? H.code : void 0,
        eI = H?.maxAge,
        ex = H?.maxUses,
        em = H?.temporary,
        ev = s.vanityURLCode,
        eS = null != ev && ev.length > 0,
        ey = !el && !C?.isGuildVocal() && eS,
        eE = H?.flags ?? 0;
    el || eh?.invite_code == null || (ep = eh.invite_code);
    let ef = i.useMemo(() => (es ? (0, K.Gv)(Q, G) : null), [es, Q, G]),
        [e_, eT] = i.useState({
            query: "",
            maxAgeOptions: F,
            maxAge: eI ?? L ?? z.D4,
            savedMaxAge: eI === ea.value ? (L ?? er.value) : ea.value,
            maxUses: null != ex && 0 !== ex ? ex : eo.value,
            temporary: em ?? !1,
            networkError: void 0,
            showVanityURL: ey,
            currentPage: p ?? ee.QR.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eC = i.useCallback((e) => {
            eT((t) => ({ ...t, ...e }));
        }, []),
        eN = i.useCallback(
            (e) => {
                eC({ currentPage: e, lastPage: e_.currentPage });
            },
            [e_.currentPage, eC],
        ),
        eb = es && !ey && !ei && !eu,
        { enabled: eM } = b.w.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eb }),
        { canCreateApplicationBypassInvites: ej, isManualApprovalGuild: eR } = (0, Y.N)(s),
        eG = (eM && eb) || eR,
        { maxAge: eV, maxUses: eU, temporary: ew, savedMaxAge: eO, flags: eD, roleIds: eP } = e_,
        eL = !eG && ew,
        { enabled: ek } = (0, q.E)(s?.id, "InstantInviteModal"),
        eF = (0, J.A)(s),
        eB = ek && eF.length > 0,
        eH = i.useCallback(
            (e) => {
                let t = new Set(eP);
                t.delete(e) || t.add(e), eC({ roleIds: t });
            },
            [eP, eC],
        ),
        eK = i.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === ee.QR.SETTINGS && null != t ? eN(t) : h();
        }, [eN, e_, h]),
        ez = i.useCallback(() => {
            let e = C?.id;
            0 === eU && 0 === eV && !eL && ey
                ? eC({ networkError: void 0, showVanityURL: !0 })
                : el &&
                  null != e &&
                  (eC({ networkError: void 0, showVanityURL: !1 }),
                  m.Ay.createInvite(
                      e,
                      {
                          max_age: eV,
                          max_uses: eU,
                          target_type: R,
                          target_user_id: o,
                          target_application_id: eA?.id,
                          temporary: eL,
                          flags: eD,
                          role_ids: Array.from(eP),
                      },
                      a,
                  ).catch((e) => eC({ networkError: e, showVanityURL: ey }))),
                eV !== ea.value && eO !== ea.value && eC({ savedMaxAge: ea.value });
        }, [ey, el, C, a, eA?.id, R, o, eV, eU, eL, eC, eO, eD, eP]),
        eQ = (0, S.A)(C),
        eq = (0, S.A)((0, g.Lt)(eD, c.Q.IS_APPLICATION_BYPASS)),
        eW = null != eQ && eQ !== C,
        eY = null != eq && eq !== (0, g.Lt)(eD, c.Q.IS_APPLICATION_BYPASS);
    i.useEffect(() => {
        !ey && (eW || eY) && ez();
    }, [ez, eW, eY, ey]);
    let { enabled: eJ } = j.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, l.jsx)(E.f5, {
        value: x,
        children: (0, l.jsx)(ed, {
            ref: t,
            canCreateInvites: el,
            noInvitesAvailable: ei,
            inviteChannel: C,
            inviteChannelName: N,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: ev,
            targetType: R,
            targetUserId: o,
            application: eA,
            rows: Q,
            sections: ef,
            showFriends: W,
            initialCounts: Z,
            code: ep,
            source: a,
            analyticsLocations: x,
            analyticsLocation: I,
            transitionState: u,
            onClose: h,
            canShowVanityURL: ey,
            isGuestInviteCreationToggleEnabled: eM && eb,
            shouldHideTemporaryInviteToggle: eG,
            modalState: { ...e_, temporary: eL },
            setModalState: eC,
            changePage: eN,
            onGenerateNewLink: ez,
            handleDone: eK,
            isApplicationBypassToggleEnabled: ej && !ei,
            isRoleAssignmentEnabled: eB,
            assignableRoles: eF,
            onToggleRole: eH,
            ringingEnabled: eJ,
        }),
    });
});
function eg(e) {
    return (0, l.jsx)(ec, { ...e });
}
