n.d(t, { default: () => ex }), n(938796);
var l = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    r = n(735438),
    o = n.n(r),
    d = n(821418),
    u = n(665260),
    c = n(189213),
    g = n(311907),
    h = n(827734),
    A = n(990078),
    p = n(695366),
    I = n(834730),
    x = n(892547),
    m = n(396478),
    S = n(452027),
    v = n(150934),
    f = n(939249),
    y = n(625903),
    E = n(847374),
    _ = n(846293),
    C = n(681579),
    T = n(475743),
    N = n(793574),
    b = n(688810),
    M = n(429913),
    j = n(148719),
    G = n(47167),
    R = n(713654),
    w = n(834757),
    V = n(720527),
    U = n(446600),
    O = n(164891),
    D = n(260509),
    P = n(616356),
    L = n(963307),
    k = n(734057),
    F = n(808728),
    B = n(958590),
    H = n(535820),
    K = n(576705),
    Q = n(290863),
    z = n(309010),
    q = n(287809),
    W = n(607567),
    Y = n(954571),
    J = n(735547),
    X = n(368739),
    Z = n(21599),
    $ = n(279208),
    ee = n(577710),
    et = n(968010),
    en = n(663269),
    el = n(708051),
    ei = n(672814),
    ea = n(172799),
    es = n(652215),
    er = n(746080),
    eo = n(985018),
    ed = n(898004),
    eu = n(781004);
let { INVITE_OPTIONS_FOREVER: ec, INVITE_OPTIONS_7_DAYS: eg, INVITE_OPTIONS_UNLIMITED: eh } = J.Ay;
class eA extends i.PureComponent {
    _scroller = null;
    _headerId = o().uniqueId();
    static defaultProps = { analyticsLocation: es.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: eg.value };
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: l,
                canCreateInvites: i,
                analyticsLocation: a,
                streamUserId: s,
                targetType: r,
                targetUserId: o,
                application: d,
                initialCounts: u,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: A,
            } = this.props,
            { maxAge: p, maxUses: I, temporary: x, flags: m } = h;
        if (i) {
            let n = e?.id;
            if (null == n) return;
            A({ networkError: void 0 }),
                _.Ay.createInvite(
                    n,
                    {
                        validate: t ?? null,
                        max_age: p,
                        max_uses: I,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: d?.id,
                        temporary: x,
                        flags: m,
                    },
                    l,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                Y.default.track(es.HAw.INVITE_SUGGESTION_OPENED, {
                    location: l,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: n.id,
                    application_id: d?.id,
                }),
            null != s)
        ) {
            let e = P.A.getStreamForUser(s, n.id),
                t = (0, w.Ee)(e, Q.A);
            Y.default.track(es.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: l,
                location: a,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            d?.id != null ||
                Y.default.track(es.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: l, location: a });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, u.Lt)(t.flags, d.Q.IS_GUEST_INVITE) && null != e && _.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            a = i ? t : (e ?? t);
        return null == a ? a : (0, Z.WU)({ baseCode: a, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(ea.QR.SETTINGS);
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
            (0, C.B)(e),
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
        return (0, j.A)(e)
            ? (0, l.jsxs)("div", {
                  className: ed.UW,
                  children: [
                      (0, l.jsx)(p.E, {
                          size: "custom",
                          className: ed.QW,
                          color: h.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(I.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: eo.intl.string(eo.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: n, guildScheduledEvent: i, streamUserId: a, application: s, inviteChannel: r } = this.props;
        if (
            ((e =
                null != a
                    ? eo.intl.string(eo.t["6VQaqd"])
                    : null != s
                      ? eo.intl.formatToPlainString(eo.t.ZdK3dW, { applicationName: s.name })
                      : null != i
                        ? eo.intl.string(eo.t.JKV4FL)
                        : r?.isGuildStageVoice()
                          ? eo.intl.string(eo.t.zTrsH0)
                          : eo.intl.formatToPlainString(eo.t.NvVBJU, { name: n.name })),
            null != r)
        ) {
            let e = (0, R.gU)(r, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eo.intl.string(eo.t["/YzI63"]);
                t = eo.intl.format(eo.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)("span", { children: [(0, l.jsx)(e, { className: ed.p }), t] }, n),
                });
            }
        }
        return n.features.has(es.GuildFeatures.HUB)
            ? { title: eo.intl.string(eo.t.WhR38i), subtitle: eo.intl.string(eo.t.Ed4BMs) }
            : { title: e, subtitle: t };
    }
    renderFriendsBody() {
        let { modalState: e, showFriends: t, guild: n } = this.props,
            { query: i } = e,
            a = this.getListProps();
        return {
            bodyContent: void 0,
            controls: (0, l.jsxs)(l.Fragment, {
                children: [
                    t &&
                        (0, l.jsx)(x.I, {
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: eo.intl.string(eo.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(es.GuildFeatures.HUB) && this.renderChannelWarning(),
                ],
            }),
            listProps: a,
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
                          className: ed.Iq,
                          children: (0, l.jsx)(m.SG, { children: eo.intl.string(eo.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: ed.Iq,
                            children: (0, l.jsx)(m.SG, { children: eo.intl.string(eo.t.hzPwGG) }),
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
            case J.OK.CHANNEL:
            case J.OK.GROUP_DM:
            case J.OK.DM:
            case J.OK.FRIEND:
                return ei.r;
            default:
                return 0;
        }
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                rows: i,
                sections: a,
                analyticsLocation: s,
                source: r,
                ringingEnabled: o,
                inviteChannel: d,
                guild: u,
            } = this.props,
            c = this.getInviteKey(),
            g = null == a ? i[n] : a[t][n],
            h = `${g.type}-${g.item.id}`,
            A = this.getSectionVisibility(t);
        if (null != a && !A) return null;
        switch (g.type) {
            case J.OK.GROUP_DM:
            case J.OK.CHANNEL:
                return (0, l.jsx)(
                    ei.e,
                    { row: g, channel: g.item, inviteKey: c, location: s, source: r, guildId: u.id },
                    h,
                );
            case J.OK.DM:
            case J.OK.FRIEND:
                return (0, l.jsx)(
                    ei.e,
                    {
                        row: g,
                        user: g.item,
                        inviteKey: c,
                        location: s,
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
        let i = 0 === t ? eo.intl.string(eo.t.y29JXs) : eo.intl.string(eo.t.Sd8Ixw),
            a = this.getSectionVisibility(t);
        return (0, l.jsx)(ep, {
            section: t,
            heading: i,
            isOpen: a,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let a = (0, $.A)(this.getInviteKey() ?? ""),
            r = q.default.getCurrentUser();
        s()(null != r, "InstantInviteModal: user cannot be undefined");
        let o = (0, D.bM)(e, r) ? eo.intl.string(eo.t.HFbByJ) : eo.intl.string(eo.t.ueBhA9);
        return (
            null != n ? (o = eo.intl.string(eo.t.CXpS1I)) : null != i && (o = eo.intl.string(eo.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(I.E, { className: ed.Sv, variant: "text-sm/normal", children: o }),
                        (0, l.jsx)(el.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: a }),
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
                application: a,
                inviteChannel: s,
                modalState: r,
            } = this.props,
            { maxAge: o } = r,
            d = null,
            u = (0, $.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eo.intl.string(eo.t.MLkj7N);
            null != i
                ? (e = eo.intl.string(eo.t["1b9neu"]))
                : null != a
                  ? (e = eo.intl.string(eo.t.iI1gMg))
                  : null != n
                    ? (e = eo.intl.string(eo.t.KaWCyD))
                    : s?.isGuildStageVoice() && (e = eo.intl.string(eo.t["2frWa3"])),
                (d = (0, l.jsx)(S.D, {
                    label: e,
                    children: (0, l.jsx)(el.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                }));
        } else
            e ||
                (d = (0, l.jsxs)("div", {
                    className: ed.xF,
                    children: [
                        (0, l.jsx)(v.S, {
                            checked: o === ec.value,
                            onChange: this.handleToggleMaxAge,
                            label: eo.intl.string(eo.t["QKJru/"]),
                        }),
                        (0, l.jsx)(A.m, {
                            text: eo.intl.string(eo.t.Yx4IiC),
                            children: (0, l.jsx)(f.D, {
                                onClick: this.openSettings,
                                className: eu.or,
                                children: (0, l.jsx)(y.Z, { size: "sm", color: h.A.unsafe_rawColors.PRIMARY_400.css }),
                            }),
                        }),
                    ],
                }));
        return d;
    }
    render() {
        let { modalState: e, handleDone: t, transitionState: n, onClose: i } = this.props,
            { currentPage: a } = e;
        switch (a) {
            case ea.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: a, controls: s, listProps: r } = this.getBodyContent();
                return (0, l.jsx)(c.Modal, {
                    transitionState: n,
                    onClose: i,
                    title: e,
                    subtitle: t,
                    input: s,
                    listProps: r,
                    preview: this.renderFooter(),
                    actions: [],
                    children: a,
                });
            }
            case ea.QR.SETTINGS:
                return (0, l.jsx)(en.h, {
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
}
function ep(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: a } = e;
    return (0, l.jsxs)(f.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: ed.uP,
        onClick: () => a(t),
        children: [
            (0, l.jsx)(I.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, l.jsx)(E.a, { size: "md", color: "currentColor", className: ed.ep }),
        ],
    });
}
let eI = i.forwardRef(function (e, t) {
    let {
            channel: n,
            guild: a,
            source: s,
            guildScheduledEvent: r,
            streamUserId: o,
            applicationId: c,
            transitionState: h,
            onClose: A,
            page: p,
            analyticsLocation: I,
        } = e,
        { analyticsLocations: x } = (0, b.Ay)(N.A.INSTANT_INVITE_MODAL),
        m = (0, g.bG)([z.A, k.A, F.Ay, K.A], () => {
            if (null != n) return n;
            let e = z.A.getChannelId(),
                t = null == e || (0, er.jq)(e) ? void 0 : k.A.getChannel(e);
            return (
                t?.isThread() && (t = k.A.getChannel(t.parent_id)),
                t?.guild_id === a.id && null != t && K.A.can(es.xBc.VIEW_CHANNEL, t)
                    ? t
                    : F.Ay.getDefaultChannel(a.id, !0, es.xBc.CREATE_INSTANT_INVITE)
            );
        }, [n, a.id]),
        S = (0, G.Ay)(m),
        v = null;
    null != o ? (v = ea.yV.STREAM) : null != c && (v = ea.yV.EMBEDDED_APPLICATION);
    let f = null != n ? n.getGuildId() : null != a ? a.id : null,
        y = (0, X.LD)({ guildId: f, location: "InstantInviteModalConnected" }),
        E = (0, X.pS)({ guildId: f, location: "InstantInviteModalConnected" }),
        R = (0, g.bG)([B.A], () => {
            let e = null != m ? m.id : null;
            return null == e ? null : B.A.getInvite(e, { targetType: v, targetUserId: o, targetApplicationId: c });
        }, [m, v, o, c]),
        [w, D, P, Q] = (0, g.yK)(
            [H.A, W.Ay],
            () => [
                H.A.getInviteSuggestionRows(),
                H.A.getTotalSuggestionsCount() >= 1,
                H.A.getInitialCounts(),
                null != n && null != m ? W.Ay.getVoiceStatesForChannel(m) : null,
            ],
            [m, n],
        ),
        q = i.useMemo(() => {
            let e = null != m ? m.id : null;
            return null != f ? L.Ay.getProps(f, e) : void 0;
        }, [m, f]),
        Y = (0, g.bG)([K.A], () => null != m && K.A.can(es.xBc.CREATE_INSTANT_INVITE, m), [m]),
        Z = null === R || !Y,
        $ = m?.type === es.rbe.GUILD_VOICE,
        en = (0, j.A)(m),
        el = i.useMemo(() => {
            let e = new Set();
            return (
                $ || null != o
                    ? Q?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != f &&
                      null != q &&
                      v !== ea.yV.EMBEDDED_APPLICATION &&
                      q.rows.forEach((t) => {
                          t.type === L.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [$, q, o, Q, f, v]),
        ei = n?.id,
        eo = (0, g.bG)([U.A], () => U.A.getStageInstanceByChannel(ei), [ei]);
    i.useEffect(() => {
        (0, C.t)({ omitUserIds: el, guild: a, channel: n, applicationId: c, inviteTargetType: v }).catch(es.FXj);
    }, [el, n, a, c, v]);
    let [ed] = (0, M.A)(null != c ? [c] : []),
        eu = null != R ? R.code : void 0,
        ep = R?.maxAge,
        eI = R?.maxUses,
        ex = R?.temporary,
        em = a.vanityURLCode,
        eS = null != em && em.length > 0,
        ev = !Y && !m?.isGuildVocal() && eS,
        ef = R?.flags ?? 0;
    Y || eo?.invite_code == null || (eu = eo.invite_code);
    let ey = i.useMemo(() => ($ ? (0, J.Gv)(w, f) : null), [$, w, f]),
        [eE, e_] = i.useState({
            query: "",
            maxAgeOptions: E,
            maxAge: ep ?? y ?? X.D4,
            savedMaxAge: ep === ec.value ? (y ?? eg.value) : ec.value,
            maxUses: null != eI && 0 !== eI ? eI : eh.value,
            temporary: ex ?? !1,
            networkError: void 0,
            showVanityURL: ev,
            currentPage: p ?? ea.QR.MAIN,
            lastPage: void 0,
            flags: ef,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eC = i.useCallback((e) => {
            e_((t) => ({ ...t, ...e }));
        }, []),
        eT = i.useCallback(
            (e) => {
                eC({ currentPage: e, lastPage: eE.currentPage });
            },
            [eE.currentPage, eC],
        ),
        eN = $ && !ev && !Z && !en,
        { enabled: eb } = V.w.useExperiment({ guildId: a?.id, location: "acc417_3" }, { autoTrackExposure: eN }),
        { canCreateApplicationBypassInvites: eM, isManualApprovalGuild: ej } = (0, ee.N)(a),
        eG = (eb && eN) || ej,
        { maxAge: eR, maxUses: ew, temporary: eV, savedMaxAge: eU, flags: eO, roleIds: eD } = eE,
        eP = !eG && eV,
        eL = (0, et.A)(a),
        ek = eL.length > 0,
        eF = i.useCallback(
            (e) => {
                let t = new Set(eD);
                t.delete(e) || t.add(e), eC({ roleIds: t });
            },
            [eD, eC],
        ),
        eB = i.useCallback(() => {
            let { currentPage: e, lastPage: t } = eE;
            e === ea.QR.SETTINGS && null != t ? eT(t) : A();
        }, [eT, eE, A]),
        eH = i.useCallback(() => {
            let e = m?.id;
            0 === ew && 0 === eR && !eP && ev
                ? eC({ networkError: void 0, showVanityURL: !0 })
                : Y &&
                  null != e &&
                  (eC({ networkError: void 0, showVanityURL: !1 }),
                  _.Ay.createInvite(
                      e,
                      {
                          max_age: eR,
                          max_uses: ew,
                          target_type: v,
                          target_user_id: o,
                          target_application_id: ed?.id,
                          temporary: eP,
                          flags: eO,
                          role_ids: Array.from(eD),
                      },
                      s,
                  ).catch((e) => eC({ networkError: e, showVanityURL: ev }))),
                eR !== ec.value && eU !== ec.value && eC({ savedMaxAge: ec.value });
        }, [ev, Y, m, s, ed?.id, v, o, eR, ew, eP, eC, eU, eO, eD]),
        eK = (0, T.A)(m),
        eQ = (0, T.A)((0, u.Lt)(eO, d.Q.IS_APPLICATION_BYPASS)),
        ez = null != eK && eK !== m,
        eq = null != eQ && eQ !== (0, u.Lt)(eO, d.Q.IS_APPLICATION_BYPASS);
    i.useEffect(() => {
        !ev && (ez || eq) && eH();
    }, [eH, ez, eq, ev]);
    let { enabled: eW } = O.A.useExperiment({ guildId: a?.id, location: "InstantInvite" });
    return (0, l.jsx)(b.f5, {
        value: x,
        children: (0, l.jsx)(eA, {
            ref: t,
            canCreateInvites: Y,
            noInvitesAvailable: Z,
            inviteChannel: m,
            inviteChannelName: S,
            guild: a,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: em,
            targetType: v,
            targetUserId: o,
            application: ed,
            rows: w,
            sections: ey,
            showFriends: D,
            initialCounts: P,
            code: eu,
            source: s,
            analyticsLocations: x,
            analyticsLocation: I,
            transitionState: h,
            onClose: A,
            canShowVanityURL: ev,
            isGuestInviteCreationToggleEnabled: eb && eN,
            shouldHideTemporaryInviteToggle: eG,
            modalState: { ...eE, temporary: eP },
            setModalState: eC,
            changePage: eT,
            onGenerateNewLink: eH,
            handleDone: eB,
            isApplicationBypassToggleEnabled: eM && !Z,
            isRoleAssignmentEnabled: ek,
            assignableRoles: eL,
            onToggleRole: eF,
            ringingEnabled: eW,
        }),
    });
});
function ex(e) {
    return (0, l.jsx)(eI, { ...e });
}
