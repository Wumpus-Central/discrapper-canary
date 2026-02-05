n.d(t, { default: () => eg }), n(938796);
var i = n(627968),
    l = n(64700),
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
    C = n(429913),
    f = n(148719),
    _ = n(713654),
    T = n(834757),
    b = n(720527),
    N = n(446600),
    M = n(164891),
    j = n(260509),
    R = n(616356),
    G = n(963307),
    V = n(734057),
    U = n(808728),
    w = n(958590),
    O = n(535820),
    P = n(576705),
    D = n(290863),
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
    ei = n(985018),
    el = n(912579),
    es = n(176465);
let { INVITE_OPTIONS_FOREVER: ea, INVITE_OPTIONS_7_DAYS: er, INVITE_OPTIONS_UNLIMITED: eo } = H.Ay;
class ed extends l.PureComponent {
    _scroller = null;
    _headerId = u().uniqueId();
    static defaultProps = { analyticsLocation: et.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: er.value };
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: i,
                canCreateInvites: l,
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
        if (l) {
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
                    i,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                F.default.track(et.HAw.INVITE_SUGGESTION_OPENED, {
                    location: i,
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
                t = (0, T.Ee)(e, D.A);
            F.default.track(et.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: i,
                location: s,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            d?.id != null ||
                F.default.track(et.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, g.Lt)(t.flags, c.Q.IS_GUEST_INVITE) && null != e && x.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : (e ?? t);
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
            i = { query: e };
        "" === e && "" !== t.query
            ? ((i.sectionVisibility = { ...t.defaultSectionVisibility }), (i.defaultSectionVisibility = {}))
            : "" !== e &&
              "" === t.query &&
              ((i.defaultSectionVisibility = { ...t.sectionVisibility }), (i.sectionVisibility = {})),
            this._scroller?.scrollTo({ to: 0 }),
            (0, v.B)(e),
            n(i);
    };
    handleClearSearch = () => {
        this.handleQueryChange("");
    };
    handleToggleMaxAge = () => {
        let { modalState: e, setModalState: t } = this.props,
            { maxAge: n, savedMaxAge: i } = e;
        t({ maxAge: i, savedMaxAge: n });
    };
    handleToggleSectionVisibility = (e) => {
        let { modalState: t, setModalState: n } = this.props;
        n({ sectionVisibility: { ...t.sectionVisibility, [e]: !this.getSectionVisibility(e) } });
    };
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, f.A)(e)
            ? (0, i.jsxs)("div", {
                  className: el.UW,
                  children: [
                      (0, i.jsx)(m.EpV, {
                          size: "custom",
                          className: el.QW,
                          color: p.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, i.jsx)(m.Text, {
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
            { guild: n, guildScheduledEvent: l, streamUserId: s, application: a, inviteChannel: r } = this.props;
        if (
            ((e =
                null != s
                    ? ei.intl.string(ei.t["6VQaqd"])
                    : null != a
                      ? ei.intl.formatToPlainString(ei.t.ZdK3dW, { applicationName: a.name })
                      : null != l
                        ? ei.intl.string(ei.t.JKV4FL)
                        : r?.isGuildStageVoice()
                          ? ei.intl.string(ei.t.zTrsH0)
                          : ei.intl.formatToPlainString(ei.t.NvVBJU, { name: n.name })),
            null != r)
        ) {
            let e = (0, _.gU)(r, n);
            null != e &&
                (t = ei.intl.format(ei.t.MkSwTR, {
                    channelName: r.name,
                    channelNameHook: (t, n) =>
                        (0, i.jsxs)("span", { children: [(0, i.jsx)(e, { className: el.p }), t] }, n),
                }));
        }
        return n.features.has(et.GuildFeatures.HUB)
            ? { title: ei.intl.string(ei.t.WhR38i), subtitle: ei.intl.string(ei.t.Ed4BMs) }
            : { title: e, subtitle: t };
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
                            placeholder: ei.intl.string(ei.t.CmSHYx),
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
                          className: el.Iq,
                          children: (0, i.jsx)(m.SGT, { children: ei.intl.string(ei.t.ojoWgX) }),
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
                            children: (0, i.jsx)(m.SGT, { children: ei.intl.string(ei.t.hzPwGG) }),
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
        let { sections: n, rows: i } = this.props,
            l = this.getSectionVisibility(e);
        if (null != n && !l) return 0;
        switch ((null == n ? i[t] : n[e][t]).type) {
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
                rows: l,
                sections: s,
                analyticsLocation: a,
                source: r,
                shouldRenameButtonCTA: o,
                ringingEnabled: d,
                inviteChannel: u,
            } = this.props,
            c = this.getInviteKey(),
            g = null == s ? l[n] : s[t][n],
            h = `${g.type}-${g.item.id}`,
            A = this.getSectionVisibility(t);
        if (null != s && !A) return null;
        switch (g.type) {
            case H.OK.GROUP_DM:
            case H.OK.CHANNEL:
                return (0, i.jsx)(
                    $.e,
                    { row: g, channel: g.item, inviteKey: c, location: a, source: r, shouldRenameButtonCTA: o },
                    h,
                );
            case H.OK.DM:
            case H.OK.FRIEND:
                return (0, i.jsx)(
                    $.e,
                    {
                        row: g,
                        user: g.item,
                        inviteKey: c,
                        location: a,
                        source: r,
                        shouldRenameButtonCTA: o,
                        ringingEnabled: d,
                        inviteChannel: u,
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
        let l = 0 === t ? ei.intl.string(ei.t.y29JXs) : ei.intl.string(ei.t.Sd8Ixw),
            s = this.getSectionVisibility(t);
        return (0, i.jsx)(eu, {
            section: t,
            heading: l,
            isOpen: s,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: l } = this.props;
        if (t) return this.renderFriendsBody();
        let s = (0, W.A)(this.getInviteKey() ?? ""),
            a = k.default.getCurrentUser();
        o()(null != a, "InstantInviteModal: user cannot be undefined");
        let r = (0, j.bM)(e, a) ? ei.intl.string(ei.t.HFbByJ) : ei.intl.string(ei.t.ueBhA9);
        return (
            null != n ? (r = ei.intl.string(ei.t.CXpS1I)) : null != l && (r = ei.intl.string(ei.t.ueCrHB)),
            {
                bodyContent: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Text, { className: el.Sv, variant: "text-sm/normal", children: r }),
                        (0, i.jsx)(X.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: s }),
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
                streamUserId: l,
                application: s,
                inviteChannel: a,
                modalState: r,
            } = this.props,
            { maxAge: o } = r,
            d = null,
            u = (0, W.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = ei.intl.string(ei.t.MLkj7N);
            null != l
                ? (e = ei.intl.string(ei.t["1b9neu"]))
                : null != s
                  ? (e = ei.intl.string(ei.t.iI1gMg))
                  : null != n
                    ? (e = ei.intl.string(ei.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = ei.intl.string(ei.t["2frWa3"])),
                (d = (0, i.jsx)(m.D0$, {
                    label: e,
                    children: (0, i.jsx)(X.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                }));
        } else
            e ||
                (d = (0, i.jsxs)("div", {
                    className: el.xF,
                    children: [
                        (0, i.jsx)(m.Checkbox, {
                            checked: o === ea.value,
                            onChange: this.handleToggleMaxAge,
                            label: ei.intl.string(ei.t["QKJru/"]),
                        }),
                        (0, i.jsx)(I.m_, {
                            text: ei.intl.string(ei.t.Yx4IiC),
                            children: (0, i.jsx)(m.DUT, {
                                onClick: this.openSettings,
                                className: es.or,
                                children: (0, i.jsx)(m.Zes, {
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
        let { modalState: e, handleDone: t, transitionState: n, onClose: l } = this.props,
            { currentPage: s } = e;
        switch (s) {
            case ee.QR.MAIN:
                let { title: a, subtitle: r } = this.getHeaderContent(),
                    { bodyContent: o, controls: d, listProps: u } = this.getBodyContent();
                return (0, i.jsx)(h.Modal, {
                    transitionState: n,
                    onClose: l,
                    title: a,
                    subtitle: r,
                    input: d,
                    listProps: u,
                    preview: this.renderFooter(),
                    actions: [],
                    children: o,
                });
            case ee.QR.SETTINGS:
                return (0, i.jsx)(Z.h, {
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
        return (0, i.jsx)("div", { className: a()({ [el.iE]: e, [el.VL]: null != t }), children: this.getModal() });
    }
}
function eu(e) {
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
            (0, i.jsx)(m.Text, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, i.jsx)(m.abt, { size: "md", color: "currentColor", className: el.ep }),
        ],
    });
}
let ec = l.forwardRef(function (e, t) {
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
        T = (0, A.bG)([L.A, V.A, U.Ay], () => {
            if (null != n) return n;
            let e = L.A.getChannelId(),
                t = null == e || (0, en.jq)(e) ? void 0 : V.A.getChannel(e);
            return (
                t?.isThread() && (t = V.A.getChannel(t.parent_id)),
                t?.guild_id === s.id && null != t ? t : U.Ay.getDefaultChannel(s.id, !0, et.xBc.CREATE_INSTANT_INVITE)
            );
        }, [n, s.id]),
        j = null;
    null != o ? (j = ee.yV.STREAM) : null != d && (j = ee.yV.EMBEDDED_APPLICATION);
    let R = null != n ? n.getGuildId() : null != s ? s.id : null,
        D = (0, K.LD)({ guildId: R, location: "InstantInviteModalConnected" }),
        k = (0, K.pS)({ guildId: R, location: "InstantInviteModalConnected" }),
        F = (0, A.bG)([w.A], () => {
            let e = null != T ? T.id : null;
            return null == e ? null : w.A.getInvite(e, { targetType: j, targetUserId: o, targetApplicationId: d });
        }, [T, j, o, d]),
        [Q, W, Z, X] = (0, A.yK)(
            [O.A, B.Ay],
            () => [
                O.A.getInviteSuggestionRows(),
                O.A.getTotalSuggestionsCount() >= 1,
                O.A.getInitialCounts(),
                null != n && null != T ? B.Ay.getVoiceStatesForChannel(T) : null,
            ],
            [T, n],
        ),
        $ = l.useMemo(() => {
            let e = null != T ? T.id : null;
            return null != R ? G.Ay.getProps(R, e) : void 0;
        }, [T, R]),
        ei = (0, A.bG)([P.A], () => null != T && P.A.can(et.xBc.CREATE_INSTANT_INVITE, T), [T]),
        el = null === F || !ei,
        es = T?.type === et.rbe.GUILD_VOICE,
        eu = (0, f.A)(T),
        ec = l.useMemo(() => {
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
    l.useEffect(() => {
        (0, v.t)({ omitUserIds: ec, guild: s, channel: n, applicationId: d, inviteTargetType: j }).catch(et.FXj);
    }, [ec, n, s, d, j]);
    let [eA] = (0, C.A)(null != d ? [d] : []),
        ep = null != F ? F.code : void 0,
        eI = F?.maxAge,
        em = F?.maxUses,
        ex = F?.temporary,
        ev = s.vanityURLCode,
        eS = null != ev && ev.length > 0,
        ey = !ei && !T?.isGuildVocal() && eS,
        eE = F?.flags ?? 0;
    ei || eh?.invite_code == null || (ep = eh.invite_code);
    let eC = l.useMemo(() => (es ? (0, H.Gv)(Q, R) : null), [es, Q, R]),
        [ef, e_] = l.useState({
            query: "",
            maxAgeOptions: k,
            maxAge: eI ?? D ?? K.D4,
            savedMaxAge: eI === ea.value ? (D ?? er.value) : ea.value,
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
        eT = l.useCallback((e) => {
            e_((t) => ({ ...t, ...e }));
        }, []),
        eb = l.useCallback(
            (e) => {
                eT({ currentPage: e, lastPage: ef.currentPage });
            },
            [ef.currentPage, eT],
        ),
        eN = es && !ey && !el && !eu,
        { enabled: eM } = b.w.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eN }),
        { maxAge: ej, maxUses: eR, temporary: eG, savedMaxAge: eV, flags: eU, roleIds: ew } = ef,
        { enabled: eO } = (0, z.E)(s?.id, "InstantInviteModal"),
        eP = (0, Y.A)(s),
        eD = eO && eP.length > 0,
        eL = l.useCallback(
            (e) => {
                let t = new Set(ew);
                t.delete(e) || t.add(e), eT({ roleIds: t });
            },
            [ew, eT],
        ),
        ek = l.useCallback(() => {
            let { currentPage: e, lastPage: t } = ef;
            e === ee.QR.SETTINGS && null != t ? eb(t) : h();
        }, [eb, ef, h]),
        eB = l.useCallback(() => {
            let e = T?.id;
            0 === eR && 0 === ej && !eG && ey
                ? eT({ networkError: void 0, showVanityURL: !0 })
                : ei &&
                  null != e &&
                  (eT({ networkError: void 0, showVanityURL: !1 }),
                  x.Ay.createInvite(
                      e,
                      {
                          max_age: ej,
                          max_uses: eR,
                          target_type: j,
                          target_user_id: o,
                          target_application_id: eA?.id,
                          temporary: eG,
                          flags: eU,
                          role_ids: Array.from(ew),
                      },
                      a,
                  ).catch((e) => eT({ networkError: e, showVanityURL: ey }))),
                ej !== ea.value && eV !== ea.value && eT({ savedMaxAge: ea.value });
        }, [ey, ei, T, a, eA?.id, j, o, ej, eR, eG, eT, eV, eU, ew]),
        eF = (0, S.A)(T),
        eH = (0, S.A)((0, g.Lt)(eU, c.Q.IS_APPLICATION_BYPASS)),
        eK = null != eF && eF !== T,
        eQ = null != eH && eH !== (0, g.Lt)(eU, c.Q.IS_APPLICATION_BYPASS);
    l.useEffect(() => {
        !ey && (eK || eQ) && eB();
    }, [eB, eK, eQ, ey]);
    let { canCreateApplicationBypassInvites: ez, isManualApprovalGuild: eq } = (0, J.N)(s),
        { enabled: eW } = M.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, i.jsx)(E.f5, {
        value: m,
        children: (0, i.jsx)(ed, {
            ref: t,
            canCreateInvites: ei,
            noInvitesAvailable: el,
            inviteChannel: T,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: ev,
            targetType: j,
            targetUserId: o,
            application: eA,
            rows: Q,
            sections: eC,
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
            modalState: ef,
            setModalState: eT,
            changePage: eb,
            onGenerateNewLink: eB,
            handleDone: ek,
            isApplicationBypassToggleEnabled: ez && !el,
            isRoleAssignmentEnabled: eD,
            assignableRoles: eP,
            onToggleRole: eL,
            shouldRenameButtonCTA: _,
            ringingEnabled: eW,
        }),
    });
});
function eg(e) {
    return (0, i.jsx)(ec, { ...e });
}
