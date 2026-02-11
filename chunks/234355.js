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
    m = n(397927),
    x = n(846293),
    v = n(681579),
    S = n(475743),
    y = n(793574),
    E = n(688810),
    f = n(429913),
    T = n(148719),
    C = n(713654),
    _ = n(834757),
    b = n(720527),
    N = n(446600),
    M = n(164891),
    j = n(260509),
    R = n(616356),
    G = n(963307),
    U = n(734057),
    V = n(808728),
    w = n(958590),
    O = n(535820),
    D = n(576705),
    P = n(290863),
    L = n(309010),
    k = n(287809),
    B = n(607567),
    F = n(954571),
    H = n(735547),
    K = n(368739),
    Q = n(21599),
    z = n(540683),
    q = n(4092),
    W = n(279208),
    J = n(577710),
    Y = n(968010),
    Z = n(663269),
    X = n(708051),
    $ = n(672814),
    ee = n(172799),
    et = n(652215),
    en = n(746080),
    el = n(985018),
    ei = n(912579),
    es = n(176465);
let { INVITE_OPTIONS_FOREVER: ea, INVITE_OPTIONS_7_DAYS: er, INVITE_OPTIONS_UNLIMITED: eo } = H.Ay;
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
                F.default.track(et.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = R.A.getStreamForUser(a, n.id),
                t = (0, _.Ee)(e, P.A);
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
            d?.id != null ||
                F.default.track(et.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: l, location: s });
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
        return (0, T.A)(e)
            ? (0, l.jsxs)("div", {
                  className: ei.UW,
                  children: [
                      (0, l.jsx)(m.EpV, {
                          size: "custom",
                          className: ei.QW,
                          color: p.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, l.jsx)(m.Text, {
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
            null != e &&
                (t = el.intl.format(el.t.MkSwTR, {
                    channelName: r.name,
                    channelNameHook: (t, n) =>
                        (0, l.jsxs)("span", { children: [(0, l.jsx)(e, { className: ei.p }), t] }, n),
                }));
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
                        (0, l.jsx)(m.IWV, {
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
                          children: (0, l.jsx)(m.SGT, { children: el.intl.string(el.t.ojoWgX) }),
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
                            children: (0, l.jsx)(m.SGT, { children: el.intl.string(el.t.hzPwGG) }),
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
            case H.OK.CHANNEL:
            case H.OK.GROUP_DM:
            case H.OK.DM:
            case H.OK.FRIEND:
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
            case H.OK.GROUP_DM:
            case H.OK.CHANNEL:
                return (0, l.jsx)(
                    $.e,
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
            case H.OK.DM:
            case H.OK.FRIEND:
                return (0, l.jsx)(
                    $.e,
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
            a = k.default.getCurrentUser();
        o()(null != a, "InstantInviteModal: user cannot be undefined");
        let r = (0, j.bM)(e, a) ? el.intl.string(el.t.HFbByJ) : el.intl.string(el.t.ueBhA9);
        return (
            null != n ? (r = el.intl.string(el.t.CXpS1I)) : null != i && (r = el.intl.string(el.t.ueCrHB)),
            {
                bodyContent: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(m.Text, { className: ei.Sv, variant: "text-sm/normal", children: r }),
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
                (d = (0, l.jsx)(m.D0$, {
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
                        (0, l.jsx)(m.Checkbox, {
                            checked: o === ea.value,
                            onChange: this.handleToggleMaxAge,
                            label: el.intl.string(el.t["QKJru/"]),
                        }),
                        (0, l.jsx)(I.m_, {
                            text: el.intl.string(el.t.Yx4IiC),
                            children: (0, l.jsx)(m.DUT, {
                                onClick: this.openSettings,
                                className: es.or,
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
    return (0, l.jsxs)(m.DUT, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: ei.uP,
        onClick: () => s(t),
        children: [
            (0, l.jsx)(m.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, l.jsx)(m.abt, { size: "md", color: "currentColor", className: ei.ep }),
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
        { analyticsLocations: m } = (0, E.Ay)(y.A.INSTANT_INVITE_MODAL),
        { enabled: C } = q.D.useConfig({ location: "InstantInvite" }),
        _ = (0, A.bG)([L.A, U.A, V.Ay], () => {
            if (null != n) return n;
            let e = L.A.getChannelId(),
                t = null == e || (0, en.jq)(e) ? void 0 : U.A.getChannel(e);
            return (
                t?.isThread() && (t = U.A.getChannel(t.parent_id)),
                t?.guild_id === s.id && null != t ? t : V.Ay.getDefaultChannel(s.id, !0, et.xBc.CREATE_INSTANT_INVITE)
            );
        }, [n, s.id]),
        j = null;
    null != o ? (j = ee.yV.STREAM) : null != d && (j = ee.yV.EMBEDDED_APPLICATION);
    let R = null != n ? n.getGuildId() : null != s ? s.id : null,
        P = (0, K.LD)({ guildId: R, location: "InstantInviteModalConnected" }),
        k = (0, K.pS)({ guildId: R, location: "InstantInviteModalConnected" }),
        F = (0, A.bG)([w.A], () => {
            let e = null != _ ? _.id : null;
            return null == e ? null : w.A.getInvite(e, { targetType: j, targetUserId: o, targetApplicationId: d });
        }, [_, j, o, d]),
        [Q, W, Z, X] = (0, A.yK)(
            [O.A, B.Ay],
            () => [
                O.A.getInviteSuggestionRows(),
                O.A.getTotalSuggestionsCount() >= 1,
                O.A.getInitialCounts(),
                null != n && null != _ ? B.Ay.getVoiceStatesForChannel(_) : null,
            ],
            [_, n],
        ),
        $ = i.useMemo(() => {
            let e = null != _ ? _.id : null;
            return null != R ? G.Ay.getProps(R, e) : void 0;
        }, [_, R]),
        el = (0, A.bG)([D.A], () => null != _ && D.A.can(et.xBc.CREATE_INSTANT_INVITE, _), [_]),
        ei = null === F || !el,
        es = _?.type === et.rbe.GUILD_VOICE,
        eu = (0, T.A)(_),
        ec = i.useMemo(() => {
            let e = new Set();
            return (
                es || null != o
                    ? X?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != R &&
                      null != $ &&
                      j !== ee.yV.EMBEDDED_APPLICATION &&
                      $.rows.forEach((t) => {
                          t.type === G.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [es, $, o, X, R, j]),
        eg = n?.id,
        eh = (0, A.bG)([N.A], () => N.A.getStageInstanceByChannel(eg), [eg]);
    i.useEffect(() => {
        (0, v.t)({ omitUserIds: ec, guild: s, channel: n, applicationId: d, inviteTargetType: j }).catch(et.FXj);
    }, [ec, n, s, d, j]);
    let [eA] = (0, f.A)(null != d ? [d] : []),
        ep = null != F ? F.code : void 0,
        eI = F?.maxAge,
        em = F?.maxUses,
        ex = F?.temporary,
        ev = s.vanityURLCode,
        eS = null != ev && ev.length > 0,
        ey = !el && !_?.isGuildVocal() && eS,
        eE = F?.flags ?? 0;
    el || eh?.invite_code == null || (ep = eh.invite_code);
    let ef = i.useMemo(() => (es ? (0, H.Gv)(Q, R) : null), [es, Q, R]),
        [eT, eC] = i.useState({
            query: "",
            maxAgeOptions: k,
            maxAge: eI ?? P ?? K.D4,
            savedMaxAge: eI === ea.value ? (P ?? er.value) : ea.value,
            maxUses: null != em && 0 !== em ? em : eo.value,
            temporary: ex ?? !1,
            networkError: void 0,
            showVanityURL: ey,
            currentPage: p ?? ee.QR.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        e_ = i.useCallback((e) => {
            eC((t) => ({ ...t, ...e }));
        }, []),
        eb = i.useCallback(
            (e) => {
                e_({ currentPage: e, lastPage: eT.currentPage });
            },
            [eT.currentPage, e_],
        ),
        eN = es && !ey && !ei && !eu,
        { enabled: eM } = b.w.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eN }),
        { maxAge: ej, maxUses: eR, temporary: eG, savedMaxAge: eU, flags: eV, roleIds: ew } = eT,
        { enabled: eO } = (0, z.E)(s?.id, "InstantInviteModal"),
        eD = (0, Y.A)(s),
        eP = eO && eD.length > 0,
        eL = i.useCallback(
            (e) => {
                let t = new Set(ew);
                t.delete(e) || t.add(e), e_({ roleIds: t });
            },
            [ew, e_],
        ),
        ek = i.useCallback(() => {
            let { currentPage: e, lastPage: t } = eT;
            e === ee.QR.SETTINGS && null != t ? eb(t) : h();
        }, [eb, eT, h]),
        eB = i.useCallback(() => {
            let e = _?.id;
            0 === eR && 0 === ej && !eG && ey
                ? e_({ networkError: void 0, showVanityURL: !0 })
                : el &&
                  null != e &&
                  (e_({ networkError: void 0, showVanityURL: !1 }),
                  x.Ay.createInvite(
                      e,
                      {
                          max_age: ej,
                          max_uses: eR,
                          target_type: j,
                          target_user_id: o,
                          target_application_id: eA?.id,
                          temporary: eG,
                          flags: eV,
                          role_ids: Array.from(ew),
                      },
                      a,
                  ).catch((e) => e_({ networkError: e, showVanityURL: ey }))),
                ej !== ea.value && eU !== ea.value && e_({ savedMaxAge: ea.value });
        }, [ey, el, _, a, eA?.id, j, o, ej, eR, eG, e_, eU, eV, ew]),
        eF = (0, S.A)(_),
        eH = (0, S.A)((0, g.Lt)(eV, c.Q.IS_APPLICATION_BYPASS)),
        eK = null != eF && eF !== _,
        eQ = null != eH && eH !== (0, g.Lt)(eV, c.Q.IS_APPLICATION_BYPASS);
    i.useEffect(() => {
        !ey && (eK || eQ) && eB();
    }, [eB, eK, eQ, ey]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eq } = (0, J.N)(s),
        { enabled: eW } = M.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, l.jsx)(E.f5, {
        value: m,
        children: (0, l.jsx)(ed, {
            ref: t,
            canCreateInvites: el,
            noInvitesAvailable: ei,
            inviteChannel: _,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: ev,
            targetType: j,
            targetUserId: o,
            application: eA,
            rows: Q,
            sections: ef,
            showFriends: W,
            initialCounts: Z,
            code: ep,
            source: a,
            analyticsLocations: m,
            analyticsLocation: I,
            transitionState: u,
            onClose: h,
            canShowVanityURL: ey,
            isGuestInviteCreationToggleEnabled: eM && eN,
            shouldHideTemporaryInviteToggle: (eM && eN) || eq,
            modalState: eT,
            setModalState: e_,
            changePage: eb,
            onGenerateNewLink: eB,
            handleDone: ek,
            isApplicationBypassToggleEnabled: ez && !ei,
            isRoleAssignmentEnabled: eP,
            assignableRoles: eD,
            onToggleRole: eL,
            shouldRenameButtonCTA: C,
            ringingEnabled: eW,
        }),
    });
});
function eg(e) {
    return (0, l.jsx)(ec, { ...e });
}
