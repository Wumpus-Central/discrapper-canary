n.d(t, { default: () => eh }), n(938796);
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
    m = n(397927),
    x = n(846293),
    v = n(681579),
    S = n(475743),
    y = n(793574),
    E = n(688810),
    f = n(429913),
    T = n(148719),
    C = n(47167),
    _ = n(713654),
    b = n(834757),
    N = n(942908),
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
    B = n(287809),
    F = n(607567),
    H = n(954571),
    K = n(735547),
    z = n(368739),
    Q = n(21599),
    W = n(540683),
    q = n(4092),
    Y = n(279208),
    J = n(577710),
    Z = n(968010),
    X = n(663269),
    $ = n(708051),
    ee = n(672814),
    et = n(172799),
    en = n(652215),
    el = n(746080),
    ei = n(985018),
    es = n(67501),
    ea = n(333111);
let { INVITE_OPTIONS_FOREVER: er, INVITE_OPTIONS_7_DAYS: eo, INVITE_OPTIONS_UNLIMITED: ed } = K.Ay;
class eu extends i.PureComponent {
    _scroller = null;
    _headerId = u().uniqueId();
    static defaultProps = { analyticsLocation: en.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: eo.value };
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
            { maxAge: p, maxUses: I, temporary: m, flags: v } = h;
        if (i) {
            let n = e?.id;
            if (null == n) return;
            A({ networkError: void 0 }),
                x.Ay.createInvite(
                    n,
                    {
                        validate: t ?? null,
                        max_age: p,
                        max_uses: I,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: d?.id,
                        temporary: m,
                        flags: v,
                    },
                    l,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                H.default.track(en.HAw.INVITE_SUGGESTION_OPENED, {
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
                t = (0, b.Ee)(e, L.A);
            H.default.track(en.HAw.OPEN_MODAL, {
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
                H.default.track(en.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: l, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, g.Lt)(t.flags, c.Q.IS_GUEST_INVITE) && null != e && x.Ay.clearInviteFromStore(e.id);
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
        e(et.QR.SETTINGS);
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
        return (0, T.A)(e)
            ? (0, l.jsxs)("div", {
                  className: es.UW,
                  children: [
                      (0, l.jsx)(m.EpV, {
                          size: "custom",
                          className: es.QW,
                          color: p.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(m.Text, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: ei.intl.string(ei.t.x1SQZb),
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
                    ? ei.intl.string(ei.t["6VQaqd"])
                    : null != a
                      ? ei.intl.formatToPlainString(ei.t.ZdK3dW, { applicationName: a.name })
                      : null != i
                        ? ei.intl.string(ei.t.JKV4FL)
                        : r?.isGuildStageVoice()
                          ? ei.intl.string(ei.t.zTrsH0)
                          : ei.intl.formatToPlainString(ei.t.NvVBJU, { name: n.name })),
            null != r)
        ) {
            let e = (0, _.gU)(r, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? ei.intl.string(ei.t["/YzI63"]);
                t = ei.intl.format(ei.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)("span", { children: [(0, l.jsx)(e, { className: es.p }), t] }, n),
                });
            }
        }
        return n.features.has(en.GuildFeatures.HUB)
            ? { title: ei.intl.string(ei.t.WhR38i), subtitle: ei.intl.string(ei.t.Ed4BMs) }
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
                        (0, l.jsx)(m.IWV, {
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: ei.intl.string(ei.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(en.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: es.Iq,
                          children: (0, l.jsx)(m.SGT, { children: ei.intl.string(ei.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: es.Iq,
                            children: (0, l.jsx)(m.SGT, { children: ei.intl.string(ei.t.hzPwGG) }),
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
                return ee.r;
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
                shouldRenameButtonCTA: o,
                ringingEnabled: d,
                inviteChannel: u,
                guild: c,
            } = this.props,
            g = this.getInviteKey(),
            h = null == s ? i[n] : s[t][n],
            A = `${h.type}-${h.item.id}`,
            p = this.getSectionVisibility(t);
        if (null != s && !p) return null;
        switch (h.type) {
            case K.OK.GROUP_DM:
            case K.OK.CHANNEL:
                return (0, l.jsx)(
                    ee.e,
                    {
                        row: h,
                        channel: h.item,
                        inviteKey: g,
                        location: a,
                        source: r,
                        shouldRenameButtonCTA: o,
                        guildId: c.id,
                    },
                    A,
                );
            case K.OK.DM:
            case K.OK.FRIEND:
                return (0, l.jsx)(
                    ee.e,
                    {
                        row: h,
                        user: h.item,
                        inviteKey: g,
                        location: a,
                        source: r,
                        shouldRenameButtonCTA: o,
                        ringingEnabled: d,
                        inviteChannel: u,
                        guildId: c.id,
                    },
                    A,
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
        let i = 0 === t ? ei.intl.string(ei.t.y29JXs) : ei.intl.string(ei.t.Sd8Ixw),
            s = this.getSectionVisibility(t);
        return (0, l.jsx)(ec, {
            section: t,
            heading: i,
            isOpen: s,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let s = (0, Y.A)(this.getInviteKey() ?? ""),
            a = B.default.getCurrentUser();
        o()(null != a, "InstantInviteModal: user cannot be undefined");
        let r = (0, R.bM)(e, a) ? ei.intl.string(ei.t.HFbByJ) : ei.intl.string(ei.t.ueBhA9);
        return (
            null != n ? (r = ei.intl.string(ei.t.CXpS1I)) : null != i && (r = ei.intl.string(ei.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(m.Text, { className: es.Sv, variant: "text-sm/normal", children: r }),
                        (0, l.jsx)($.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: s }),
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
            u = (0, Y.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = ei.intl.string(ei.t.MLkj7N);
            null != i
                ? (e = ei.intl.string(ei.t["1b9neu"]))
                : null != s
                  ? (e = ei.intl.string(ei.t.iI1gMg))
                  : null != n
                    ? (e = ei.intl.string(ei.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = ei.intl.string(ei.t["2frWa3"])),
                (d = (0, l.jsx)(m.D0$, {
                    label: e,
                    children: (0, l.jsx)($.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                }));
        } else
            e ||
                (d = (0, l.jsxs)("div", {
                    className: es.xF,
                    children: [
                        (0, l.jsx)(m.Checkbox, {
                            checked: o === er.value,
                            onChange: this.handleToggleMaxAge,
                            label: ei.intl.string(ei.t["QKJru/"]),
                        }),
                        (0, l.jsx)(I.m_, {
                            text: ei.intl.string(ei.t.Yx4IiC),
                            children: (0, l.jsx)(m.DUT, {
                                onClick: this.openSettings,
                                className: ea.or,
                                children: (0, l.jsx)(m.Zes, {
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
            case et.QR.MAIN:
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
            case et.QR.SETTINGS:
                return (0, l.jsx)(X.h, {
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
        return (0, l.jsx)("div", { className: a()({ [es.iE]: e, [es.VL]: null != t }), children: this.getModal() });
    }
}
function ec(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(m.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: es.uP,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(m.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, l.jsx)(m.abt, { size: "md", color: "currentColor", className: es.ep }),
        ],
    });
}
let eg = i.forwardRef(function (e, t) {
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
        { analyticsLocations: m } = (0, E.Ay)(y.A.INSTANT_INVITE_MODAL),
        { enabled: _ } = q.D.useConfig({ location: "InstantInvite" }),
        b = (0, A.bG)([k.A, U.A, w.Ay, P.A], () => {
            if (null != n) return n;
            let e = k.A.getChannelId(),
                t = null == e || (0, el.jq)(e) ? void 0 : U.A.getChannel(e);
            return (
                t?.isThread() && (t = U.A.getChannel(t.parent_id)),
                t?.guild_id === s.id && null != t && P.A.can(en.xBc.VIEW_CHANNEL, t)
                    ? t
                    : w.Ay.getDefaultChannel(s.id, !0, en.xBc.CREATE_INSTANT_INVITE)
            );
        }, [n, s.id]),
        R = (0, C.Ay)(b),
        G = null;
    null != o ? (G = et.yV.STREAM) : null != d && (G = et.yV.EMBEDDED_APPLICATION);
    let L = null != n ? n.getGuildId() : null != s ? s.id : null,
        B = (0, z.LD)({ guildId: L, location: "InstantInviteModalConnected" }),
        H = (0, z.pS)({ guildId: L, location: "InstantInviteModalConnected" }),
        Q = (0, A.bG)([O.A], () => {
            let e = null != b ? b.id : null;
            return null == e ? null : O.A.getInvite(e, { targetType: G, targetUserId: o, targetApplicationId: d });
        }, [b, G, o, d]),
        [Y, X, $, ee] = (0, A.yK)(
            [D.A, F.Ay],
            () => [
                D.A.getInviteSuggestionRows(),
                D.A.getTotalSuggestionsCount() >= 1,
                D.A.getInitialCounts(),
                null != n && null != b ? F.Ay.getVoiceStatesForChannel(b) : null,
            ],
            [b, n],
        ),
        ei = i.useMemo(() => {
            let e = null != b ? b.id : null;
            return null != L ? V.Ay.getProps(L, e) : void 0;
        }, [b, L]),
        es = (0, A.bG)([P.A], () => null != b && P.A.can(en.xBc.CREATE_INSTANT_INVITE, b), [b]),
        ea = null === Q || !es,
        ec = b?.type === en.rbe.GUILD_VOICE,
        eg = (0, T.A)(b),
        eh = i.useMemo(() => {
            let e = new Set();
            return (
                ec || null != o
                    ? ee?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != L &&
                      null != ei &&
                      G !== et.yV.EMBEDDED_APPLICATION &&
                      ei.rows.forEach((t) => {
                          t.type === V.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [ec, ei, o, ee, L, G]),
        eA = n?.id,
        ep = (0, A.bG)([M.A], () => M.A.getStageInstanceByChannel(eA), [eA]);
    i.useEffect(() => {
        (0, v.t)({ omitUserIds: eh, guild: s, channel: n, applicationId: d, inviteTargetType: G }).catch(en.FXj);
    }, [eh, n, s, d, G]);
    let [eI] = (0, f.A)(null != d ? [d] : []),
        em = null != Q ? Q.code : void 0,
        ex = Q?.maxAge,
        ev = Q?.maxUses,
        eS = Q?.temporary,
        ey = s.vanityURLCode,
        eE = null != ey && ey.length > 0,
        ef = !es && !b?.isGuildVocal() && eE,
        eT = Q?.flags ?? 0;
    es || ep?.invite_code == null || (em = ep.invite_code);
    let eC = i.useMemo(() => (ec ? (0, K.Gv)(Y, L) : null), [ec, Y, L]),
        [e_, eb] = i.useState({
            query: "",
            maxAgeOptions: H,
            maxAge: ex ?? B ?? z.D4,
            savedMaxAge: ex === er.value ? (B ?? eo.value) : er.value,
            maxUses: null != ev && 0 !== ev ? ev : ed.value,
            temporary: eS ?? !1,
            networkError: void 0,
            showVanityURL: ef,
            currentPage: p ?? et.QR.MAIN,
            lastPage: void 0,
            flags: eT,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eN = i.useCallback((e) => {
            eb((t) => ({ ...t, ...e }));
        }, []),
        eM = i.useCallback(
            (e) => {
                eN({ currentPage: e, lastPage: e_.currentPage });
            },
            [e_.currentPage, eN],
        ),
        ej = ec && !ef && !ea && !eg,
        { enabled: eR } = N.w.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: ej }),
        { canCreateApplicationBypassInvites: eG, isManualApprovalGuild: eV } = (0, J.N)(s),
        eU = (eR && ej) || eV,
        { maxAge: ew, maxUses: eO, temporary: eD, savedMaxAge: eP, flags: eL, roleIds: ek } = e_,
        eB = !eU && eD,
        { enabled: eF } = (0, W.E)(s?.id, "InstantInviteModal"),
        eH = (0, Z.A)(s),
        eK = eF && eH.length > 0,
        ez = i.useCallback(
            (e) => {
                let t = new Set(ek);
                t.delete(e) || t.add(e), eN({ roleIds: t });
            },
            [ek, eN],
        ),
        eQ = i.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === et.QR.SETTINGS && null != t ? eM(t) : h();
        }, [eM, e_, h]),
        eW = i.useCallback(() => {
            let e = b?.id;
            0 === eO && 0 === ew && !eB && ef
                ? eN({ networkError: void 0, showVanityURL: !0 })
                : es &&
                  null != e &&
                  (eN({ networkError: void 0, showVanityURL: !1 }),
                  x.Ay.createInvite(
                      e,
                      {
                          max_age: ew,
                          max_uses: eO,
                          target_type: G,
                          target_user_id: o,
                          target_application_id: eI?.id,
                          temporary: eB,
                          flags: eL,
                          role_ids: Array.from(ek),
                      },
                      a,
                  ).catch((e) => eN({ networkError: e, showVanityURL: ef }))),
                ew !== er.value && eP !== er.value && eN({ savedMaxAge: er.value });
        }, [ef, es, b, a, eI?.id, G, o, ew, eO, eB, eN, eP, eL, ek]),
        eq = (0, S.A)(b),
        eY = (0, S.A)((0, g.Lt)(eL, c.Q.IS_APPLICATION_BYPASS)),
        eJ = null != eq && eq !== b,
        eZ = null != eY && eY !== (0, g.Lt)(eL, c.Q.IS_APPLICATION_BYPASS);
    i.useEffect(() => {
        !ef && (eJ || eZ) && eW();
    }, [eW, eJ, eZ, ef]);
    let { enabled: eX } = j.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, l.jsx)(E.f5, {
        value: m,
        children: (0, l.jsx)(eu, {
            ref: t,
            canCreateInvites: es,
            noInvitesAvailable: ea,
            inviteChannel: b,
            inviteChannelName: R,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: ey,
            targetType: G,
            targetUserId: o,
            application: eI,
            rows: Y,
            sections: eC,
            showFriends: X,
            initialCounts: $,
            code: em,
            source: a,
            analyticsLocations: m,
            analyticsLocation: I,
            transitionState: u,
            onClose: h,
            canShowVanityURL: ef,
            isGuestInviteCreationToggleEnabled: eR && ej,
            shouldHideTemporaryInviteToggle: eU,
            modalState: { ...e_, temporary: eB },
            setModalState: eN,
            changePage: eM,
            onGenerateNewLink: eW,
            handleDone: eQ,
            isApplicationBypassToggleEnabled: eG && !ea,
            isRoleAssignmentEnabled: eK,
            assignableRoles: eH,
            onToggleRole: ez,
            shouldRenameButtonCTA: _,
            ringingEnabled: eX,
        }),
    });
});
function eh(e) {
    return (0, l.jsx)(eg, { ...e });
}
