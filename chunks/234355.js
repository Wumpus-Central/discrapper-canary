n.d(t, { default: () => ed }), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(821418),
    u = n(665260),
    c = n(189213),
    g = n(311907),
    h = n(827734),
    A = n(435371),
    x = n(397927),
    p = n(846293),
    I = n(681579),
    m = n(475743),
    S = n(793574),
    v = n(688810),
    y = n(429913),
    f = n(148719),
    E = n(47167),
    _ = n(713654),
    T = n(834757),
    C = n(720527),
    N = n(446600),
    b = n(164891),
    M = n(260509),
    j = n(616356),
    G = n(963307),
    R = n(734057),
    U = n(808728),
    V = n(958590),
    w = n(535820),
    O = n(576705),
    D = n(290863),
    P = n(309010),
    L = n(287809),
    k = n(607567),
    F = n(954571),
    B = n(735547),
    H = n(368739),
    K = n(21599),
    z = n(279208),
    Q = n(577710),
    W = n(968010),
    q = n(663269),
    Y = n(708051),
    J = n(672814),
    Z = n(172799),
    X = n(652215),
    $ = n(746080),
    ee = n(985018),
    et = n(640852),
    en = n(75596);
let { INVITE_OPTIONS_FOREVER: el, INVITE_OPTIONS_7_DAYS: ei, INVITE_OPTIONS_UNLIMITED: es } = B.Ay;
class ea extends i.PureComponent {
    _scroller = null;
    _headerId = o().uniqueId();
    static defaultProps = { analyticsLocation: X.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: ei.value };
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
            { maxAge: x, maxUses: I, temporary: m, flags: S } = h;
        if (i) {
            let n = e?.id;
            if (null == n) return;
            A({ networkError: void 0 }),
                p.Ay.createInvite(
                    n,
                    {
                        validate: t ?? null,
                        max_age: x,
                        max_uses: I,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: d?.id,
                        temporary: m,
                        flags: S,
                    },
                    l,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                F.default.track(X.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = j.A.getStreamForUser(a, n.id),
                t = (0, T.Ee)(e, D.A);
            F.default.track(X.HAw.OPEN_MODAL, {
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
                F.default.track(X.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: l, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, u.Lt)(t.flags, d.Q.IS_GUEST_INVITE) && null != e && p.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            s = i ? t : (e ?? t);
        return null == s ? s : (0, K.WU)({ baseCode: s, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(Z.QR.SETTINGS);
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
            (0, I.B)(e),
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
        return (0, f.A)(e)
            ? (0, l.jsxs)("div", {
                  className: et.UW,
                  children: [
                      (0, l.jsx)(x.EpV, {
                          size: "custom",
                          className: et.QW,
                          color: h.A.unsafe_rawColors.YELLOW_300.css,
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
            { guild: n, guildScheduledEvent: i, streamUserId: s, application: a, inviteChannel: r } = this.props;
        if (
            ((e =
                null != s
                    ? ee.intl.string(ee.t["6VQaqd"])
                    : null != a
                      ? ee.intl.formatToPlainString(ee.t.ZdK3dW, { applicationName: a.name })
                      : null != i
                        ? ee.intl.string(ee.t.JKV4FL)
                        : r?.isGuildStageVoice()
                          ? ee.intl.string(ee.t.zTrsH0)
                          : ee.intl.formatToPlainString(ee.t.NvVBJU, { name: n.name })),
            null != r)
        ) {
            let e = (0, _.gU)(r, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? ee.intl.string(ee.t["/YzI63"]);
                t = ee.intl.format(ee.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)("span", { children: [(0, l.jsx)(e, { className: et.p }), t] }, n),
                });
            }
        }
        return n.features.has(X.GuildFeatures.HUB)
            ? { title: ee.intl.string(ee.t.WhR38i), subtitle: ee.intl.string(ee.t.Ed4BMs) }
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
                            placeholder: ee.intl.string(ee.t.CmSHYx),
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
        let { rows: e, sections: t } = this.props,
            n = this.getInviteKey();
        return 0 === e.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  renderRow: () =>
                      (0, l.jsx)("div", {
                          className: et.Iq,
                          children: (0, l.jsx)(x.SGT, { children: ee.intl.string(ee.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, l.jsx)("div", {
                            className: et.Iq,
                            children: (0, l.jsx)(x.SGT, { children: ee.intl.string(ee.t.hzPwGG) }),
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
            case B.OK.CHANNEL:
            case B.OK.GROUP_DM:
            case B.OK.DM:
            case B.OK.FRIEND:
                return J.r;
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
            case B.OK.GROUP_DM:
            case B.OK.CHANNEL:
                return (0, l.jsx)(
                    J.e,
                    { row: g, channel: g.item, inviteKey: c, location: a, source: r, guildId: u.id },
                    h,
                );
            case B.OK.DM:
            case B.OK.FRIEND:
                return (0, l.jsx)(
                    J.e,
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
        let i = 0 === t ? ee.intl.string(ee.t.y29JXs) : ee.intl.string(ee.t.Sd8Ixw),
            s = this.getSectionVisibility(t);
        return (0, l.jsx)(er, {
            section: t,
            heading: i,
            isOpen: s,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let s = (0, z.A)(this.getInviteKey() ?? ""),
            r = L.default.getCurrentUser();
        a()(null != r, "InstantInviteModal: user cannot be undefined");
        let o = (0, M.bM)(e, r) ? ee.intl.string(ee.t.HFbByJ) : ee.intl.string(ee.t.ueBhA9);
        return (
            null != n ? (o = ee.intl.string(ee.t.CXpS1I)) : null != i && (o = ee.intl.string(ee.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(x.Text, { className: et.Sv, variant: "text-sm/normal", children: o }),
                        (0, l.jsx)(Y.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: s }),
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
            u = (0, z.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = ee.intl.string(ee.t.MLkj7N);
            null != i
                ? (e = ee.intl.string(ee.t["1b9neu"]))
                : null != s
                  ? (e = ee.intl.string(ee.t.iI1gMg))
                  : null != n
                    ? (e = ee.intl.string(ee.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = ee.intl.string(ee.t["2frWa3"])),
                (d = (0, l.jsx)(x.D0$, {
                    label: e,
                    children: (0, l.jsx)(Y.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                }));
        } else
            e ||
                (d = (0, l.jsxs)("div", {
                    className: et.xF,
                    children: [
                        (0, l.jsx)(x.Checkbox, {
                            checked: o === el.value,
                            onChange: this.handleToggleMaxAge,
                            label: ee.intl.string(ee.t["QKJru/"]),
                        }),
                        (0, l.jsx)(A.m_, {
                            text: ee.intl.string(ee.t.Yx4IiC),
                            children: (0, l.jsx)(x.DUT, {
                                onClick: this.openSettings,
                                className: en.or,
                                children: (0, l.jsx)(x.Zes, {
                                    size: "sm",
                                    color: h.A.unsafe_rawColors.PRIMARY_400.css,
                                }),
                            }),
                        }),
                    ],
                }));
        return d;
    }
    render() {
        let { modalState: e, handleDone: t, transitionState: n, onClose: i } = this.props,
            { currentPage: s } = e;
        switch (s) {
            case Z.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: s, controls: a, listProps: r } = this.getBodyContent();
                return (0, l.jsx)(c.Modal, {
                    transitionState: n,
                    onClose: i,
                    title: e,
                    subtitle: t,
                    input: a,
                    listProps: r,
                    preview: this.renderFooter(),
                    actions: [],
                    children: s,
                });
            }
            case Z.QR.SETTINGS:
                return (0, l.jsx)(q.h, {
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
function er(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: s } = e;
    return (0, l.jsxs)(x.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: et.uP,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(x.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, l.jsx)(x.abt, { size: "md", color: "currentColor", className: et.ep }),
        ],
    });
}
let eo = i.forwardRef(function (e, t) {
    let {
            channel: n,
            guild: s,
            source: a,
            guildScheduledEvent: r,
            streamUserId: o,
            applicationId: c,
            transitionState: h,
            onClose: A,
            page: x,
            analyticsLocation: _,
        } = e,
        { analyticsLocations: T } = (0, v.Ay)(S.A.INSTANT_INVITE_MODAL),
        M = (0, g.bG)([P.A, R.A, U.Ay, O.A], () => {
            if (null != n) return n;
            let e = P.A.getChannelId(),
                t = null == e || (0, $.jq)(e) ? void 0 : R.A.getChannel(e);
            return (
                t?.isThread() && (t = R.A.getChannel(t.parent_id)),
                t?.guild_id === s.id && null != t && O.A.can(X.xBc.VIEW_CHANNEL, t)
                    ? t
                    : U.Ay.getDefaultChannel(s.id, !0, X.xBc.CREATE_INSTANT_INVITE)
            );
        }, [n, s.id]),
        j = (0, E.Ay)(M),
        D = null;
    null != o ? (D = Z.yV.STREAM) : null != c && (D = Z.yV.EMBEDDED_APPLICATION);
    let L = null != n ? n.getGuildId() : null != s ? s.id : null,
        F = (0, H.LD)({ guildId: L, location: "InstantInviteModalConnected" }),
        K = (0, H.pS)({ guildId: L, location: "InstantInviteModalConnected" }),
        z = (0, g.bG)([V.A], () => {
            let e = null != M ? M.id : null;
            return null == e ? null : V.A.getInvite(e, { targetType: D, targetUserId: o, targetApplicationId: c });
        }, [M, D, o, c]),
        [q, Y, J, ee] = (0, g.yK)(
            [w.A, k.Ay],
            () => [
                w.A.getInviteSuggestionRows(),
                w.A.getTotalSuggestionsCount() >= 1,
                w.A.getInitialCounts(),
                null != n && null != M ? k.Ay.getVoiceStatesForChannel(M) : null,
            ],
            [M, n],
        ),
        et = i.useMemo(() => {
            let e = null != M ? M.id : null;
            return null != L ? G.Ay.getProps(L, e) : void 0;
        }, [M, L]),
        en = (0, g.bG)([O.A], () => null != M && O.A.can(X.xBc.CREATE_INSTANT_INVITE, M), [M]),
        er = null === z || !en,
        eo = M?.type === X.rbe.GUILD_VOICE,
        ed = (0, f.A)(M),
        eu = i.useMemo(() => {
            let e = new Set();
            return (
                eo || null != o
                    ? ee?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != L &&
                      null != et &&
                      D !== Z.yV.EMBEDDED_APPLICATION &&
                      et.rows.forEach((t) => {
                          t.type === G.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [eo, et, o, ee, L, D]),
        ec = n?.id,
        eg = (0, g.bG)([N.A], () => N.A.getStageInstanceByChannel(ec), [ec]);
    i.useEffect(() => {
        (0, I.t)({ omitUserIds: eu, guild: s, channel: n, applicationId: c, inviteTargetType: D }).catch(X.FXj);
    }, [eu, n, s, c, D]);
    let [eh] = (0, y.A)(null != c ? [c] : []),
        eA = null != z ? z.code : void 0,
        ex = z?.maxAge,
        ep = z?.maxUses,
        eI = z?.temporary,
        em = s.vanityURLCode,
        eS = null != em && em.length > 0,
        ev = !en && !M?.isGuildVocal() && eS,
        ey = z?.flags ?? 0;
    en || eg?.invite_code == null || (eA = eg.invite_code);
    let ef = i.useMemo(() => (eo ? (0, B.Gv)(q, L) : null), [eo, q, L]),
        [eE, e_] = i.useState({
            query: "",
            maxAgeOptions: K,
            maxAge: ex ?? F ?? H.D4,
            savedMaxAge: ex === el.value ? (F ?? ei.value) : el.value,
            maxUses: null != ep && 0 !== ep ? ep : es.value,
            temporary: eI ?? !1,
            networkError: void 0,
            showVanityURL: ev,
            currentPage: x ?? Z.QR.MAIN,
            lastPage: void 0,
            flags: ey,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eT = i.useCallback((e) => {
            e_((t) => ({ ...t, ...e }));
        }, []),
        eC = i.useCallback(
            (e) => {
                eT({ currentPage: e, lastPage: eE.currentPage });
            },
            [eE.currentPage, eT],
        ),
        eN = eo && !ev && !er && !ed,
        { enabled: eb } = C.w.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eN }),
        { canCreateApplicationBypassInvites: eM, isManualApprovalGuild: ej } = (0, Q.N)(s),
        eG = (eb && eN) || ej,
        { maxAge: eR, maxUses: eU, temporary: eV, savedMaxAge: ew, flags: eO, roleIds: eD } = eE,
        eP = !eG && eV,
        eL = (0, W.A)(s),
        ek = eL.length > 0,
        eF = i.useCallback(
            (e) => {
                let t = new Set(eD);
                t.delete(e) || t.add(e), eT({ roleIds: t });
            },
            [eD, eT],
        ),
        eB = i.useCallback(() => {
            let { currentPage: e, lastPage: t } = eE;
            e === Z.QR.SETTINGS && null != t ? eC(t) : A();
        }, [eC, eE, A]),
        eH = i.useCallback(() => {
            let e = M?.id;
            0 === eU && 0 === eR && !eP && ev
                ? eT({ networkError: void 0, showVanityURL: !0 })
                : en &&
                  null != e &&
                  (eT({ networkError: void 0, showVanityURL: !1 }),
                  p.Ay.createInvite(
                      e,
                      {
                          max_age: eR,
                          max_uses: eU,
                          target_type: D,
                          target_user_id: o,
                          target_application_id: eh?.id,
                          temporary: eP,
                          flags: eO,
                          role_ids: Array.from(eD),
                      },
                      a,
                  ).catch((e) => eT({ networkError: e, showVanityURL: ev }))),
                eR !== el.value && ew !== el.value && eT({ savedMaxAge: el.value });
        }, [ev, en, M, a, eh?.id, D, o, eR, eU, eP, eT, ew, eO, eD]),
        eK = (0, m.A)(M),
        ez = (0, m.A)((0, u.Lt)(eO, d.Q.IS_APPLICATION_BYPASS)),
        eQ = null != eK && eK !== M,
        eW = null != ez && ez !== (0, u.Lt)(eO, d.Q.IS_APPLICATION_BYPASS);
    i.useEffect(() => {
        !ev && (eQ || eW) && eH();
    }, [eH, eQ, eW, ev]);
    let { enabled: eq } = b.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, l.jsx)(v.f5, {
        value: T,
        children: (0, l.jsx)(ea, {
            ref: t,
            canCreateInvites: en,
            noInvitesAvailable: er,
            inviteChannel: M,
            inviteChannelName: j,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: em,
            targetType: D,
            targetUserId: o,
            application: eh,
            rows: q,
            sections: ef,
            showFriends: Y,
            initialCounts: J,
            code: eA,
            source: a,
            analyticsLocations: T,
            analyticsLocation: _,
            transitionState: h,
            onClose: A,
            canShowVanityURL: ev,
            isGuestInviteCreationToggleEnabled: eb && eN,
            shouldHideTemporaryInviteToggle: eG,
            modalState: { ...eE, temporary: eP },
            setModalState: eT,
            changePage: eC,
            onGenerateNewLink: eH,
            handleDone: eB,
            isApplicationBypassToggleEnabled: eM && !er,
            isRoleAssignmentEnabled: ek,
            assignableRoles: eL,
            onToggleRole: eF,
            ringingEnabled: eq,
        }),
    });
});
function ed(e) {
    return (0, l.jsx)(eo, { ...e });
}
