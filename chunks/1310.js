let l, i, a, s, r, o;
n.d(t, { default: () => tr }), n(938796);
var d = n(627968),
    u = n(64700),
    c = n(284009),
    g = n.n(c),
    h = n(735438),
    A = n.n(h),
    p = n(821418),
    I = n(665260),
    x = n(189213),
    m = n(17928),
    S = n(661531),
    v = n(990078),
    y = n(695366),
    f = n(834730),
    E = n(892547),
    _ = n(396478),
    C = n(452027),
    T = n(150934),
    N = n(939249),
    b = n(625903),
    M = n(847374),
    j = n(376728),
    G = n(228366),
    R = n(219271),
    V = n(174768),
    w = n(427358),
    U = n(403362),
    O = n(735547),
    P = n(734057),
    D = n(576705),
    L = n(994500),
    k = n(652215),
    F = n(172799);
let B = new Set(),
    H = [],
    K = new Map(),
    Q = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
function q(e) {
    let t = new Set(),
        n = s?.type === k.rbe.GUILD_VOICE,
        l = null;
    null == a || o === F.yV.EMBEDDED_APPLICATION || n || (l = a.id);
    let i = (0, O.oW)(B, l);
    for (let e of (null == i || L.A.isBlockedOrIgnored(i.id) || t.add(i.id), w.A.getUserAffinities()))
        t.add(e.otherUserId);
    let r = new Set();
    return (
        o === F.yV.EMBEDDED_APPLICATION &&
            V.A.getChannelHistory()
                .map((e) => P.A.getChannel(e))
                .filter(U.Vq)
                .filter((e) => e.type === k.rbe.GUILD_TEXT)
                .filter((e) => D.A.can(k.xBc.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => r.add(e.id)),
        (0, O.Us)({
            query: e,
            omitUserIds: B,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: l,
            suggestedChannelIds: r,
            inviteTargetType: o,
        })
    );
}
function z(e) {
    (H = e),
        (K = new Map()),
        e.forEach((e, t) => {
            K.set(e, { index: t });
        });
}
class W extends m.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(P.A, D.A, V.A, L.A, w.A);
    }
    getInviteSuggestionRows() {
        return H;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return Q;
    }
    getSelectedInviteMetadata(e) {
        let t = K.get(e),
            n = w.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: H.length,
                numAffinityConnections: n.length,
                isFiltered: i,
            };
    }
}
let Y = new W(G.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: d, applicationId: u, inviteTargetType: c } = e;
        (a = null != d ? n : null),
            (s = d),
            (r = u),
            (o = c),
            (B = new Set([
                ...t,
                ...L.A.getBlockedOrIgnoredIDs(),
                ...(0, O.Uo)({ channel: s, applicationId: r, inviteTargetType: c }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = q("");
        z(g), (Q = h), (l = H.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = q(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), z(n);
    },
});
var J = n(475743),
    Z = n(793574),
    X = n(688810),
    $ = n(429913),
    ee = n(148719),
    et = n(47167),
    en = n(713654),
    el = n(834757),
    ei = n(600975);
let ea = (0, ei.C)({
    kind: "guild",
    id: "2023-02_guest_voice_invites",
    label: "Guest Voice Invites",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Allow creation of guest voice invites", config: { enabled: !0 } }],
});
var es = n(446600),
    er = n(164891),
    eo = n(260509),
    ed = n(616356),
    eu = n(963307),
    ec = n(808728),
    eg = n(958590),
    eh = n(290863),
    eA = n(309010),
    ep = n(287809),
    eI = n(607567),
    ex = n(954571),
    em = n(702841),
    eS = n(71393);
let ev = O.Ay.INVITE_OPTIONS_7_DAYS.value,
    ey = (0, ei.C)({
        kind: "guild",
        id: "2025-08_default_invite_expiration_guild",
        label: "Default Invite Expiration Guild",
        defaultConfig: { defaultMaxAge: 604800 },
        treatments: [
            { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
            { id: 2, label: "30 days", config: { defaultMaxAge: 2592e3 } },
            { id: 3, label: "60 days", config: { defaultMaxAge: 5184e3 } },
        ],
    }),
    ef = (0, ei.C)({
        kind: "guild",
        id: "2026-05_default_invite_expiration_guild_web",
        label: "Default Invite Expiration Guild Web",
        defaultConfig: { defaultMaxAge: 604800 },
        treatments: [
            { id: 1, label: "14 days", config: { defaultMaxAge: 1209600 } },
            { id: 2, label: "30 days", config: { defaultMaxAge: 2592e3 } },
            { id: 3, label: "60 days", config: { defaultMaxAge: 5184e3 } },
        ],
    });
var eE = n(21599),
    e_ = n(279208),
    eC = n(34457),
    eT = n(317525),
    eN = n(488926),
    eb = n(545442),
    eM = n(783878),
    ej = n(243721),
    eG = n(985018),
    eR = n(938365);
let eV = O.Ay.getMaxUsesOptions;
function ew(e) {
    let {
            shouldHideTemporaryInviteToggle: t,
            maxAgeOptions: n,
            maxAge: l,
            maxUses: i,
            temporary: a,
            onToggleTemporary: s,
            onSelectMaxAge: r,
            onSelectMaxUses: o,
            isGuestInviteCreationToggleEnabled: c,
            inviteFlags: g,
            onSetInviteFlags: h,
            isRoleAssignmentEnabled: A,
            assignableRoles: x,
            selectedRoleIds: m,
            onToggleRole: S,
        } = e,
        v = O.Ay.getMaxAgeOptionByValue(l),
        y = eV.find((e) => e.value === i),
        f = u.useMemo(
            () =>
                x.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, d.jsx)(eb.W, {
                            color: e.colorString ?? k.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [x],
        ),
        E = u.useCallback(
            (e) => {
                let t = Array.from(m),
                    n = e ?? [],
                    l = n.find((e) => !t.includes(e)),
                    i = t.find((e) => !n.includes(e));
                null != l ? S(l) : null != i && S(i);
            },
            [m, S],
        );
    return (0, d.jsxs)("div", {
        className: eR.z1,
        children: [
            (0, d.jsx)(eM.Z, {
                label: eG.intl.string(eG.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: v?.value ?? n[0].value,
                onSelectionChange: r,
                selectionMode: "single",
            }),
            (0, d.jsx)(eM.Z, {
                label: eG.intl.string(eG.t.jDqWHW),
                options: eV,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: y?.value,
                onSelectionChange: o,
                selectionMode: "single",
            }),
            A &&
                x.length > 0 &&
                (0, d.jsx)(eM.Z, {
                    label: eG.intl.string(eG.t.rPYJxL),
                    placeholder: eG.intl.string(eG.t["/djIh7"]),
                    options: f,
                    value: Array.from(m),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: a,
                }),
            !t &&
                (0, d.jsx)(ej.d, {
                    checked: a,
                    onChange: (e) => s(e),
                    description: eG.intl.string(eG.t.UN5IRX),
                    label: eG.intl.string(eG.t["wE+9dr"]),
                    disabled: m.size > 0,
                }),
            c &&
                (0, d.jsx)(ej.d, {
                    checked: (0, I.Lt)(g, p.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, I.lA)(g, p.Q.IS_GUEST_INVITE, e)),
                    description: eG.intl.string(eG.t["/FeTK6"]),
                    label: eG.intl.string(eG.t.siexRS),
                }),
        ],
    });
}
let eU = (e) => {
    let {
            handleDone: t,
            modalState: n,
            shouldHideTemporaryInviteToggle: l,
            onGenerateNewLink: i,
            onToggleTemporary: a,
            onSelectMaxAge: s,
            onSelectMaxUses: r,
            isGuestInviteCreationToggleEnabled: o,
            onSetInviteFlags: u,
            onClose: c,
            transitionState: g,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            onToggleRole: p,
        } = e,
        { maxAgeOptions: I, maxAge: m, maxUses: S, temporary: v, flags: y, roleIds: f } = n;
    return (0, d.jsx)(x.Modal, {
        transitionState: g,
        onClose: c,
        title: eG.intl.string(eG.t.Atdlyu),
        actions: [
            { variant: "secondary", text: eG.intl.string(eG.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: eG.intl.string(eG.t.pz1lRG),
                onClick: () => {
                    i(), t();
                },
            },
        ],
        children: (0, d.jsx)(ew, {
            shouldHideTemporaryInviteToggle: l,
            maxAgeOptions: I,
            maxAge: m,
            maxUses: S,
            temporary: v,
            onToggleTemporary: a,
            onSelectMaxAge: s,
            onSelectMaxUses: r,
            isGuestInviteCreationToggleEnabled: o,
            onSetInviteFlags: u,
            inviteFlags: y,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            selectedRoleIds: f,
            onToggleRole: p,
        }),
    });
};
var eO = n(747007),
    eP = n(503698),
    eD = n.n(eP),
    eL = n(133171),
    ek = n(778712),
    eF = n(97808),
    eB = n(821609),
    eH = n(774300),
    eK = n(566903),
    eQ = n(714114),
    eq = n(864436),
    ez = n(835072),
    eW = n(313961),
    eY = n(85448),
    eJ = n(571694),
    eZ = n(10862),
    eX = n(408278),
    e$ = n(562153),
    e0 = n(135635);
function e1(e) {
    let { user: t, channel: n, location: l } = e,
        i = (0, m.bG)([eA.A], () => eA.A.getVoiceChannelId() === n.id),
        a = (0, e$.tx)(n.guild_id, n.id, t),
        {
            icon: s,
            iconColor: r,
            tooltipText: o,
            disabled: u,
            shouldHideButton: c,
            onClick: g,
        } = (0, e0.A)({ user: t, channel: n, location: l });
    return !i || c
        ? null
        : (0, d.jsx)(v.m, {
              text: o,
              children: (0, d.jsx)("div", {
                  children: (0, d.jsx)(eX.K, {
                      variant: "icon-only",
                      icon: () => (0, d.jsx)(s, { size: "sm", color: r }),
                      "aria-label": eG.intl.formatToPlainString(eG.t["3IPBG1"], { username: a }),
                      size: "sm",
                      onClick: g,
                      disabled: u,
                  }),
              }),
          });
}
var e2 = n(486020),
    e7 = n(240248),
    e3 = n(427262),
    e6 = n(806931),
    e8 = n(640852);
function e4(e, t) {
    if (null != e) return { suggestionData: Y.getSelectedInviteMetadata(e), source: t };
}
let e9 = u.memo(
    function (e) {
        let t,
            {
                user: n,
                channel: l,
                inviteKey: i,
                location: a,
                row: s,
                source: r,
                ringingEnabled: o,
                inviteChannel: c,
                guildId: g,
            } = e,
            [h, A] = u.useState(!1),
            [p, I] = u.useState(!1),
            x = (0, m.bG)([eS.A], () => eS.A.getGuild(l?.guild_id)),
            {
                status: S,
                isMobileOnline: v,
                activities: y,
            } = (0, m.cf)(
                [eh.A],
                () =>
                    null == n
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: eh.A.getStatus(n.id, g),
                              isMobileOnline: eh.A.isMobileOnline(n.id),
                              activities: eh.A.getActivities(n.id, g),
                          },
                [n, g],
            ),
            { activityStatusText: E, activityStatusIcon: _ } = u.useMemo(() => {
                if (null == y) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = y.find((e) => e.type !== k.$pd.CUSTOM_STATUS && e.type !== k.$pd.HANG_STATUS);
                return { activityStatusText: (0, eK.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, ez.f)(e) };
            }, [y]),
            { voiceChannel: C } = (0, eQ.A)({ userId: n?.id }),
            T = (0, et.Ay)(C),
            N = (0, m.bG)([eW.A], () => (null != c && null != n ? eW.A.getParticipant(c.id, n.id) : null)),
            b = o && null != N && N.type === e6.lp.USER && N.ringing,
            M = (0, eL.S3)(k.clD.ONLINE),
            j = u.useCallback(() => {
                null != i &&
                    (null != l
                        ? (A(!0),
                          eH.A.enqueue(
                              {
                                  type: eH.F.GROUP_DM,
                                  channel: l,
                                  inviteKey: i,
                                  location: a,
                                  inviteAnalyticsMetadata: e4(s, r),
                              },
                              (e) => {
                                  A(!1), I(e);
                              },
                          ))
                        : null != n &&
                          (A(!0),
                          eH.A.enqueue(
                              {
                                  type: eH.F.USER,
                                  user: n,
                                  inviteKey: i,
                                  location: a,
                                  inviteAnalyticsMetadata: e4(s, r),
                              },
                              (e) => {
                                  A(!1), I(e);
                              },
                          )));
            }, [i, l, n, a, s, r]),
            G = e3.Ay.getName(n),
            R = null != n ? L.A.getNickname(n.id) : null,
            V = null != l ? (0, et.m1)(l, ep.default, L.A) : null,
            w = null != n ? n.getAvatarURL(l?.guild_id, 32) : null,
            U = null != l ? (0, eJ.Y)(l) : null,
            O =
                null != x && null != l && null == U
                    ? e2.Ay.getGuildIconURL({ id: l.guild_id, icon: x.icon, size: 32 })
                    : null,
            P = S !== k.clD.OFFLINE ? S : void 0,
            D = w ?? U ?? O,
            F = G ?? V ?? void 0,
            B = null != x && null == x.icon ? (0, e7.oN)(x.name) : null,
            H = null != D && null != F;
        null != n && (t = R ?? G);
        let K = e3.Ay.getUserTag(n, { decoration: "never" }),
            Q = (0, d.jsx)(eB.$, {
                variant: "secondary",
                text: p ? eG.intl.string(eG.t.dVT149) : eG.intl.string(eG.t.jYnGPG),
                size: "sm",
                loading: h,
                onClick: j,
                disabled: p,
            }),
            q = null != E.text,
            z = null != C && null != T,
            W = z || q || null != n;
        return (0, d.jsxs)("div", {
            className: e8.Og,
            children: [
                (0, d.jsxs)("div", {
                    className: e8.mQ,
                    children: [
                        H
                            ? b
                                ? (0, d.jsx)(eY.A, { size: ek._3.SIZE_32, ringing: b, src: D, className: e8.hO })
                                : (0, d.jsx)(eF.eu, {
                                      src: D,
                                      "aria-label": F,
                                      size: ek._3.SIZE_32,
                                      className: e8.hO,
                                      status: null != n ? P : void 0,
                                      isMobile: null != n ? v : void 0,
                                  })
                            : (0, d.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  className: e8.q9,
                                  "aria-hidden": !0,
                                  children: B,
                              }),
                        (0, d.jsxs)("div", {
                            className: eD()(e8.BT, { [e8.DF]: b }),
                            children: [
                                (0, d.jsxs)(f.E, {
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != l ? (0, et.m1)(l, ep.default, L.A, !0) : null],
                                }),
                                W &&
                                    (0, d.jsxs)("div", {
                                        className: eD()(e8.eq, { [e8.DF]: b }),
                                        children: [
                                            z
                                                ? (0, d.jsx)(eZ.A, {
                                                      size: "custom",
                                                      color: M,
                                                      channel: C,
                                                      className: e8.j8,
                                                  })
                                                : null != _
                                                  ? (0, d.jsx)(eq.A, { icon: _, className: e8.j8 })
                                                  : null,
                                            z
                                                ? (0, d.jsx)(f.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: T,
                                                  })
                                                : q
                                                  ? (0, d.jsx)(f.E, {
                                                        variant: "text-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: E.text,
                                                    })
                                                  : (0, d.jsx)(f.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: K,
                                                    }),
                                            (0, d.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: b && ` • ${eG.intl.string(eG.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, d.jsxs)("div", {
                    className: e8.t$,
                    children: [
                        o && null != n && null != c && (0, d.jsx)(e1, { user: n, channel: c, location: "InviteRow" }),
                        Q,
                    ],
                }),
            ],
        });
    },
    (e, t) =>
        e.user === t.user &&
        e.channel === t.channel &&
        e.guildId === t.guildId &&
        e.inviteChannel?.id === t.inviteChannel?.id &&
        e.inviteKey === t.inviteKey &&
        e.ringingEnabled === t.ringingEnabled,
);
var e5 = n(746080),
    te = n(75596);
let { INVITE_OPTIONS_FOREVER: tt, INVITE_OPTIONS_7_DAYS: tn, INVITE_OPTIONS_UNLIMITED: tl } = O.Ay;
class ti extends u.PureComponent {
    _scroller = null;
    _headerId = A().uniqueId();
    static defaultProps = { analyticsLocation: k.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: tn.value };
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
                j.Ay.createInvite(
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
                ex.default.track(k.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = ed.A.getStreamForUser(s, n.id),
                t = (0, el.Ee)(e, eh.A);
            ex.default.track(k.HAw.OPEN_MODAL, {
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
                ex.default.track(k.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: l, location: a });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, I.Lt)(t.flags, p.Q.IS_GUEST_INVITE) && null != e && j.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: l } = this.props,
            { showVanityURL: i } = l,
            a = i ? t : (e ?? t);
        return null == a ? a : (0, eE.WU)({ baseCode: a, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(F.QR.SETTINGS);
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
            G.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e }),
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
        return (0, ee.A)(e)
            ? (0, d.jsxs)("div", {
                  className: e8.UW,
                  children: [
                      (0, d.jsx)(y.E, {
                          size: "custom",
                          className: e8.QW,
                          color: S.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, d.jsx)(f.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: eG.intl.string(eG.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: n, guildScheduledEvent: l, streamUserId: i, application: a, inviteChannel: s } = this.props;
        if (
            ((e =
                null != i
                    ? eG.intl.string(eG.t["6VQaqd"])
                    : null != a
                      ? eG.intl.formatToPlainString(eG.t.ZdK3dW, { applicationName: a.name })
                      : null != l
                        ? eG.intl.string(eG.t.JKV4FL)
                        : s?.isGuildStageVoice()
                          ? eG.intl.string(eG.t.zTrsH0)
                          : eG.intl.formatToPlainString(eG.t.NvVBJU, { name: n.name })),
            null != s)
        ) {
            let e = (0, en.gU)(s, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eG.intl.string(eG.t["/YzI63"]);
                t = eG.intl.format(eG.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, d.jsxs)("span", { children: [(0, d.jsx)(e, { className: e8.p }), t] }, n),
                });
            }
        }
        return n.features.has(k.GuildFeatures.HUB)
            ? { title: eG.intl.string(eG.t.WhR38i), subtitle: eG.intl.string(eG.t.Ed4BMs) }
            : { title: e, subtitle: t };
    }
    renderFriendsBody() {
        let { modalState: e, showFriends: t, guild: n } = this.props,
            { query: l } = e,
            i = this.getListProps();
        return {
            bodyContent: void 0,
            controls: (0, d.jsxs)(d.Fragment, {
                children: [
                    t &&
                        (0, d.jsx)(E.I, {
                            size: "md",
                            query: l,
                            onChange: this.handleQueryChange,
                            placeholder: eG.intl.string(eG.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(k.GuildFeatures.HUB) && this.renderChannelWarning(),
                ],
            }),
            listProps: i,
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
                      (0, d.jsx)("div", {
                          className: e8.Iq,
                          children: (0, d.jsx)(_.SG, { children: eG.intl.string(eG.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, d.jsx)("div", {
                            className: e8.Iq,
                            children: (0, d.jsx)(_.SG, { children: eG.intl.string(eG.t.hzPwGG) }),
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
            case O.OK.CHANNEL:
            case O.OK.GROUP_DM:
            case O.OK.DM:
            case O.OK.FRIEND:
                return 48;
            default:
                return 0;
        }
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                rows: l,
                sections: i,
                analyticsLocation: a,
                source: s,
                ringingEnabled: r,
                inviteChannel: o,
                guild: u,
            } = this.props,
            c = this.getInviteKey(),
            g = null == i ? l[n] : i[t][n],
            h = `${g.type}-${g.item.id}`,
            A = this.getSectionVisibility(t);
        if (null != i && !A) return null;
        switch (g.type) {
            case O.OK.GROUP_DM:
            case O.OK.CHANNEL:
                return (0, d.jsx)(
                    e9,
                    { row: g, channel: g.item, inviteKey: c, location: a, source: s, guildId: u.id },
                    h,
                );
            case O.OK.DM:
            case O.OK.FRIEND:
                return (0, d.jsx)(
                    e9,
                    {
                        row: g,
                        user: g.item,
                        inviteKey: c,
                        location: a,
                        source: s,
                        ringingEnabled: r,
                        inviteChannel: o,
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
        let l = 0 === t ? eG.intl.string(eG.t.y29JXs) : eG.intl.string(eG.t.Sd8Ixw),
            i = this.getSectionVisibility(t);
        return (0, d.jsx)(ta, {
            section: t,
            heading: l,
            isOpen: i,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: l } = this.props;
        if (t) return this.renderFriendsBody();
        let i = (0, e_.A)(this.getInviteKey() ?? ""),
            a = ep.default.getCurrentUser();
        g()(null != a, "InstantInviteModal: user cannot be undefined");
        let s = (0, eo.bM)(e, a) ? eG.intl.string(eG.t.HFbByJ) : eG.intl.string(eG.t.ueBhA9);
        return (
            null != n ? (s = eG.intl.string(eG.t.CXpS1I)) : null != l && (s = eG.intl.string(eG.t.ueCrHB)),
            {
                bodyContent: (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(f.E, { className: e8.Sv, variant: "text-sm/normal", children: s }),
                        (0, d.jsx)(eO.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: i }),
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
                application: i,
                inviteChannel: a,
                modalState: s,
            } = this.props,
            { maxAge: r } = s,
            o = null,
            u = (0, e_.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eG.intl.string(eG.t.MLkj7N);
            null != l
                ? (e = eG.intl.string(eG.t["1b9neu"]))
                : null != i
                  ? (e = eG.intl.string(eG.t.iI1gMg))
                  : null != n
                    ? (e = eG.intl.string(eG.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = eG.intl.string(eG.t["2frWa3"])),
                (o = (0, d.jsx)(C.D, {
                    label: e,
                    children: (0, d.jsx)(eO.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                }));
        } else
            e ||
                (o = (0, d.jsxs)("div", {
                    className: e8.xF,
                    children: [
                        (0, d.jsx)(T.S, {
                            checked: r === tt.value,
                            onChange: this.handleToggleMaxAge,
                            label: eG.intl.string(eG.t["QKJru/"]),
                        }),
                        (0, d.jsx)(v.m, {
                            text: eG.intl.string(eG.t.Yx4IiC),
                            children: (0, d.jsx)(N.D, {
                                onClick: this.openSettings,
                                className: te.or,
                                children: (0, d.jsx)(b.Z, { size: "sm", color: S.A.unsafe_rawColors.PRIMARY_400.css }),
                            }),
                        }),
                    ],
                }));
        return o;
    }
    render() {
        let { modalState: e, handleDone: t, transitionState: n, onClose: l } = this.props,
            { currentPage: i } = e;
        switch (i) {
            case F.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: i, controls: a, listProps: s } = this.getBodyContent();
                return (0, d.jsx)(x.Modal, {
                    transitionState: n,
                    onClose: l,
                    title: e,
                    subtitle: t,
                    input: a,
                    listProps: s,
                    preview: this.renderFooter(),
                    actions: [],
                    children: i,
                });
            }
            case F.QR.SETTINGS:
                return (0, d.jsx)(eU, {
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
function ta(e) {
    let { section: t, heading: n, isOpen: l, onToggleVisibility: i } = e;
    return (0, d.jsxs)(N.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: e8.uP,
        onClick: () => i(t),
        children: [
            (0, d.jsx)(f.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, d.jsx)(M.a, { size: "md", color: "currentColor", className: e8.ep }),
        ],
    });
}
let ts = u.forwardRef(function (e, t) {
    let n,
        l,
        {
            channel: i,
            guild: a,
            source: s,
            guildScheduledEvent: r,
            streamUserId: o,
            applicationId: c,
            transitionState: g,
            onClose: h,
            page: A,
            analyticsLocation: x,
        } = e,
        { analyticsLocations: S } = (0, X.Ay)(Z.A.INSTANT_INVITE_MODAL),
        v = (0, m.bG)([eA.A, P.A, ec.Ay, D.A], () => {
            if (null != i) return i;
            let e = eA.A.getChannelId(),
                t = null == e || (0, e5.jq)(e) ? void 0 : P.A.getChannel(e);
            return (
                t?.isThread() && (t = P.A.getChannel(t.parent_id)),
                t?.guild_id === a.id && null != t && D.A.can(k.xBc.VIEW_CHANNEL, t)
                    ? t
                    : ec.Ay.getDefaultChannel(a.id, !0, k.xBc.CREATE_INSTANT_INVITE)
            );
        }, [i, a.id]),
        y = (0, et.Ay)(v),
        f = null;
    null != o ? (f = F.yV.STREAM) : null != c && (f = F.yV.EMBEDDED_APPLICATION);
    let E = null != i ? i.getGuildId() : null != a ? a.id : null,
        _ = (function (e) {
            let { guildId: t, location: n } = e,
                l = t ?? k.dJq,
                i = ey.useExperiment({ guildId: l, location: n }),
                a = ef.useExperiment({ guildId: l, location: n }),
                s = i?.defaultMaxAge !== ev ? i : a,
                r = (0, em.bG)([eS.A], () => eS.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(k.GuildFeatures.HUB)) return O.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? ev;
                      let l = t?.id ?? k.dJq,
                          i = ey.getCurrentConfig({ guildId: l, location: "getDefaultInviteExpiration" });
                      return i.defaultMaxAge !== ev
                          ? i.defaultMaxAge
                          : (ef.getCurrentConfig({ guildId: l, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? ev);
                  })({ guild: r, experimentConfig: s });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        C = (function (e) {
            let { guildId: t, location: n } = e,
                l = t ?? k.dJq,
                i = ey.useExperiment({ guildId: l, location: n }),
                a = ef.useExperiment({ guildId: l, location: n }),
                s = i?.defaultMaxAge !== ev ? i : a;
            return O.Ay.getMaxAgeOptions({ includeExperimentalValues: [s?.defaultMaxAge] });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        T = (0, m.bG)([eg.A], () => {
            let e = null != v ? v.id : null;
            return null == e ? null : eg.A.getInvite(e, { targetType: f, targetUserId: o, targetApplicationId: c });
        }, [v, f, o, c]),
        [N, b, M, V] = (0, m.yK)(
            [Y, eI.Ay],
            () => [
                Y.getInviteSuggestionRows(),
                Y.getTotalSuggestionsCount() >= 1,
                Y.getInitialCounts(),
                null != i && null != v ? eI.Ay.getVoiceStatesForChannel(v) : null,
            ],
            [v, i],
        ),
        w = u.useMemo(() => {
            let e = null != v ? v.id : null;
            return null != E ? eu.Ay.getProps(E, e) : void 0;
        }, [v, E]),
        U = (0, m.bG)([D.A], () => null != v && D.A.can(k.xBc.CREATE_INSTANT_INVITE, v), [v]),
        L = null === T || !U,
        B = v?.type === k.rbe.GUILD_VOICE,
        H = (0, ee.A)(v),
        K = u.useMemo(() => {
            let e = new Set();
            return (
                B || null != o
                    ? V?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != E &&
                      null != w &&
                      f !== F.yV.EMBEDDED_APPLICATION &&
                      w.rows.forEach((t) => {
                          t.type === eu.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [B, w, o, V, E, f]),
        Q = i?.id,
        q = (0, m.bG)([es.A], () => es.A.getStageInstanceByChannel(Q), [Q]);
    u.useEffect(() => {
        (function (e) {
            let { omitUserIds: t, guild: n, channel: l, applicationId: i, inviteTargetType: a } = e;
            return (0, R.u)().then(() => {
                G.h.dispatch({
                    type: "LOAD_INVITE_SUGGESTIONS",
                    omitUserIds: t ?? new Set(),
                    guild: n,
                    channel: l,
                    applicationId: i,
                    inviteTargetType: a,
                });
            });
        })({ omitUserIds: K, guild: a, channel: i, applicationId: c, inviteTargetType: f }).catch(k.FXj);
    }, [K, i, a, c, f]);
    let [z] = (0, $.A)(null != c ? [c] : []),
        W = null != T ? T.code : void 0,
        en = T?.maxAge,
        el = T?.maxUses,
        ei = T?.temporary,
        eo = a.vanityURLCode,
        ed = null != eo && eo.length > 0,
        eh = !U && !v?.isGuildVocal() && ed,
        ex = T?.flags ?? 0;
    U || q?.invite_code == null || (W = q.invite_code);
    let eE = u.useMemo(() => (B ? (0, O.Gv)(N, E) : null), [B, N, E]),
        [e_, eb] = u.useState({
            query: "",
            maxAgeOptions: C,
            maxAge: en ?? _ ?? ev,
            savedMaxAge: en === tt.value ? (_ ?? tn.value) : tt.value,
            maxUses: null != el && 0 !== el ? el : tl.value,
            temporary: ei ?? !1,
            networkError: void 0,
            showVanityURL: eh,
            currentPage: A ?? F.QR.MAIN,
            lastPage: void 0,
            flags: ex,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eM = u.useCallback((e) => {
            eb((t) => ({ ...t, ...e }));
        }, []),
        ej = u.useCallback(
            (e) => {
                eM({ currentPage: e, lastPage: e_.currentPage });
            },
            [e_.currentPage, eM],
        ),
        eG = B && !eh && !L && !H,
        { enabled: eR } = ea.useExperiment({ guildId: a?.id, location: "acc417_3" }, { autoTrackExposure: eG }),
        { canCreateApplicationBypassInvites: eV, isManualApprovalGuild: ew } =
            ((n = (0, m.bG)([D.A], () => D.A.can(k.xBc.KICK_MEMBERS, a), [a])),
            {
                canCreateApplicationBypassInvites:
                    (l = !!(
                        a?.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        a?.features.has(k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && n,
                isManualApprovalGuild: l,
            }),
        eU = (eR && eG) || ew,
        { maxAge: eO, maxUses: eP, temporary: eD, savedMaxAge: eL, flags: ek, roleIds: eF } = e_,
        eB = !eU && eD,
        eH = (function (e) {
            let {
                sortedRoles: t,
                currentUser: n,
                canManageRoles: l,
            } = (0, m.cf)(
                [eT.A, ep.default, D.A],
                () => ({
                    sortedRoles: null != e ? eT.A.getSortedRoles(e.id) : [],
                    currentUser: ep.default.getCurrentUser(),
                    canManageRoles: null != e && D.A.can(k.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return u.useMemo(() => {
                if (null == e || null == n || !l) return [];
                let i = eN.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eC.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!eN.wO(e, n.id, i, t),
                );
            }, [e, n, l, t]);
        })(a),
        eK = eH.length > 0,
        eQ = u.useCallback(
            (e) => {
                let t = new Set(eF);
                t.delete(e) || t.add(e), eM({ roleIds: t });
            },
            [eF, eM],
        ),
        eq = u.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === F.QR.SETTINGS && null != t ? ej(t) : h();
        }, [ej, e_, h]),
        ez = u.useCallback(() => {
            let e = v?.id;
            0 === eP && 0 === eO && !eB && eh
                ? eM({ networkError: void 0, showVanityURL: !0 })
                : U &&
                  null != e &&
                  (eM({ networkError: void 0, showVanityURL: !1 }),
                  j.Ay.createInvite(
                      e,
                      {
                          max_age: eO,
                          max_uses: eP,
                          target_type: f,
                          target_user_id: o,
                          target_application_id: z?.id,
                          temporary: eB,
                          flags: ek,
                          role_ids: Array.from(eF),
                      },
                      s,
                  ).catch((e) => eM({ networkError: e, showVanityURL: eh }))),
                eO !== tt.value && eL !== tt.value && eM({ savedMaxAge: tt.value });
        }, [eh, U, v, s, z?.id, f, o, eO, eP, eB, eM, eL, ek, eF]),
        eW = (0, J.A)(v),
        eY = (0, J.A)((0, I.Lt)(ek, p.Q.IS_APPLICATION_BYPASS)),
        eJ = null != eW && eW !== v,
        eZ = null != eY && eY !== (0, I.Lt)(ek, p.Q.IS_APPLICATION_BYPASS);
    u.useEffect(() => {
        !eh && (eJ || eZ) && ez();
    }, [ez, eJ, eZ, eh]);
    let { enabled: eX } = er.A.useExperiment({ guildId: a?.id, location: "InstantInvite" });
    return (0, d.jsx)(X.f5, {
        value: S,
        children: (0, d.jsx)(ti, {
            ref: t,
            canCreateInvites: U,
            noInvitesAvailable: L,
            inviteChannel: v,
            inviteChannelName: y,
            guild: a,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: eo,
            targetType: f,
            targetUserId: o,
            application: z,
            rows: N,
            sections: eE,
            showFriends: b,
            initialCounts: M,
            code: W,
            source: s,
            analyticsLocations: S,
            analyticsLocation: x,
            transitionState: g,
            onClose: h,
            canShowVanityURL: eh,
            isGuestInviteCreationToggleEnabled: eR && eG,
            shouldHideTemporaryInviteToggle: eU,
            modalState: { ...e_, temporary: eB },
            setModalState: eM,
            changePage: ej,
            onGenerateNewLink: ez,
            handleDone: eq,
            isApplicationBypassToggleEnabled: eV && !L,
            isRoleAssignmentEnabled: eK,
            assignableRoles: eH,
            onToggleRole: eQ,
            ringingEnabled: eX,
        }),
    });
});
function tr(e) {
    return (0, d.jsx)(ts, { ...e });
}
