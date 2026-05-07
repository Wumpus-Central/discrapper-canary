let i, l, s, a, r, o;
n.d(t, { default: () => tr }), n(938796);
var d = n(627968),
    u = n(64700),
    c = n(284009),
    g = n.n(c),
    h = n(735438),
    A = n.n(h),
    p = n(821418),
    m = n(665260),
    I = n(189213),
    x = n(17928),
    S = n(661531),
    v = n(990078),
    y = n(695366),
    f = n(834730),
    E = n(892547),
    _ = n(396478),
    C = n(452027),
    T = n(150934),
    b = n(939249),
    M = n(625903),
    N = n(847374),
    j = n(376728),
    R = n(228366),
    w = n(219271),
    G = n(174768),
    U = n(427358),
    V = n(403362),
    O = n(735547),
    D = n(734057),
    L = n(576705),
    P = n(994500),
    F = n(652215),
    k = n(172799);
let B = new Set(),
    H = [],
    K = new Map(),
    q = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
function Q(e) {
    let t = new Set(),
        n = a?.type === F.rbe.GUILD_VOICE,
        i = null;
    null == s || o === k.yV.EMBEDDED_APPLICATION || n || (i = s.id);
    let l = (0, O.oW)(B, i);
    for (let e of (null == l || P.A.isBlockedOrIgnored(l.id) || t.add(l.id), U.A.getUserAffinities()))
        t.add(e.otherUserId);
    let r = new Set();
    return (
        o === k.yV.EMBEDDED_APPLICATION &&
            G.A.getChannelHistory()
                .map((e) => D.A.getChannel(e))
                .filter(V.Vq)
                .filter((e) => e.type === F.rbe.GUILD_TEXT)
                .filter((e) => L.A.can(F.xBc.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => r.add(e.id)),
        (0, O.Us)({
            query: e,
            omitUserIds: B,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: r,
            inviteTargetType: o,
        })
    );
}
function W(e) {
    (H = e),
        (K = new Map()),
        e.forEach((e, t) => {
            K.set(e, { index: t });
        });
}
class z extends x.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(D.A, L.A, G.A, P.A, U.A);
    }
    getInviteSuggestionRows() {
        return H;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return q;
    }
    getSelectedInviteMetadata(e) {
        let t = K.get(e),
            n = U.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: H.length,
                numAffinityConnections: n.length,
                isFiltered: l,
            };
    }
}
let Y = new z(R.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: d, applicationId: u, inviteTargetType: c } = e;
        (s = null != d ? n : null),
            (a = d),
            (r = u),
            (o = c),
            (B = new Set([
                ...t,
                ...P.A.getBlockedOrIgnoredIDs(),
                ...(0, O.Uo)({ channel: a, applicationId: r, inviteTargetType: c }),
            ])),
            (l = !1);
        let { rows: g, counts: h } = Q("");
        W(g), (q = h), (i = H.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        l = "" !== t;
        let { rows: n } = Q(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), W(n);
    },
});
var J = n(475743),
    Z = n(793574),
    $ = n(688810),
    X = n(429913),
    ee = n(148719),
    et = n(47167),
    en = n(713654),
    ei = n(834757),
    el = n(600975);
let es = (0, el.C)({
    kind: "guild",
    id: "2023-02_guest_voice_invites",
    label: "Guest Voice Invites",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Allow creation of guest voice invites", config: { enabled: !0 } }],
});
var ea = n(446600),
    er = n(164891),
    eo = n(260509),
    ed = n(616356),
    eu = n(963307),
    ec = n(808728),
    eg = n(958590),
    eh = n(290863),
    eA = n(309010),
    ep = n(287809),
    em = n(607567),
    eI = n(174459),
    ex = n(702841),
    eS = n(71393);
let ev = O.Ay.INVITE_OPTIONS_7_DAYS.value,
    ey = (0, el.C)({
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
    ef = (0, el.C)({
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
var eE = n(842241),
    e_ = n(279208),
    eC = n(34457),
    eT = n(317525),
    eb = n(488926),
    eM = n(545442),
    eN = n(783878),
    ej = n(243721),
    eR = n(375708),
    ew = n(938365);
let eG = O.Ay.getMaxUsesOptions;
function eU(e) {
    let {
            shouldHideTemporaryInviteToggle: t,
            maxAgeOptions: n,
            maxAge: i,
            maxUses: l,
            temporary: s,
            onToggleTemporary: a,
            onSelectMaxAge: r,
            onSelectMaxUses: o,
            isGuestInviteCreationToggleEnabled: c,
            inviteFlags: g,
            onSetInviteFlags: h,
            isRoleAssignmentEnabled: A,
            assignableRoles: I,
            selectedRoleIds: x,
            onToggleRole: S,
        } = e,
        v = O.Ay.getMaxAgeOptionByValue(i),
        y = eG.find((e) => e.value === l),
        f = u.useMemo(
            () =>
                I.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, d.jsx)(eM.W, {
                            color: e.colorString ?? F.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [I],
        ),
        E = u.useCallback(
            (e) => {
                let t = Array.from(x),
                    n = e ?? [],
                    i = n.find((e) => !t.includes(e)),
                    l = t.find((e) => !n.includes(e));
                null != i ? S(i) : null != l && S(l);
            },
            [x, S],
        );
    return (0, d.jsxs)("div", {
        className: ew.z1,
        children: [
            (0, d.jsx)(eN.Z, {
                label: eR.intl.string(eR.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: v?.value ?? n[0].value,
                onSelectionChange: r,
                selectionMode: "single",
            }),
            (0, d.jsx)(eN.Z, {
                label: eR.intl.string(eR.t.jDqWHW),
                options: eG,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: y?.value,
                onSelectionChange: o,
                selectionMode: "single",
            }),
            A &&
                I.length > 0 &&
                (0, d.jsx)(eN.Z, {
                    label: eR.intl.string(eR.t.rPYJxL),
                    placeholder: eR.intl.string(eR.t["/djIh7"]),
                    options: f,
                    value: Array.from(x),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: s,
                }),
            !t &&
                (0, d.jsx)(ej.d, {
                    checked: s,
                    onChange: (e) => a(e),
                    description: eR.intl.string(eR.t.UN5IRX),
                    label: eR.intl.string(eR.t["wE+9dr"]),
                    disabled: x.size > 0,
                }),
            c &&
                (0, d.jsx)(ej.d, {
                    checked: (0, m.Lt)(g, p.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, m.lA)(g, p.Q.IS_GUEST_INVITE, e)),
                    description: eR.intl.string(eR.t["/FeTK6"]),
                    label: eR.intl.string(eR.t.siexRS),
                }),
        ],
    });
}
let eV = (e) => {
    let {
            handleDone: t,
            modalState: n,
            shouldHideTemporaryInviteToggle: i,
            onGenerateNewLink: l,
            onToggleTemporary: s,
            onSelectMaxAge: a,
            onSelectMaxUses: r,
            isGuestInviteCreationToggleEnabled: o,
            onSetInviteFlags: u,
            onClose: c,
            transitionState: g,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            onToggleRole: p,
        } = e,
        { maxAgeOptions: m, maxAge: x, maxUses: S, temporary: v, flags: y, roleIds: f } = n;
    return (0, d.jsx)(I.Modal, {
        transitionState: g,
        onClose: c,
        title: eR.intl.string(eR.t.Atdlyu),
        actions: [
            { variant: "secondary", text: eR.intl.string(eR.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: eR.intl.string(eR.t.pz1lRG),
                onClick: () => {
                    l(), t();
                },
            },
        ],
        children: (0, d.jsx)(eU, {
            shouldHideTemporaryInviteToggle: i,
            maxAgeOptions: m,
            maxAge: x,
            maxUses: S,
            temporary: v,
            onToggleTemporary: s,
            onSelectMaxAge: a,
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
    eD = n(503698),
    eL = n.n(eD),
    eP = n(133171),
    eF = n(778712),
    ek = n(97808),
    eB = n(821609),
    eH = n(774300),
    eK = n(566903),
    eq = n(714114),
    eQ = n(864436),
    eW = n(835072),
    ez = n(313961),
    eY = n(85448),
    eJ = n(571694),
    eZ = n(10862),
    e$ = n(408278),
    eX = n(562153),
    e0 = n(135635);
function e1(e) {
    let { user: t, channel: n, location: i } = e,
        l = (0, x.bG)([eA.A], () => eA.A.getVoiceChannelId() === n.id),
        s = (0, eX.tx)(n.guild_id, n.id, t),
        {
            icon: a,
            iconColor: r,
            tooltipText: o,
            disabled: u,
            shouldHideButton: c,
            onClick: g,
        } = (0, e0.A)({ user: t, channel: n, location: i });
    return !l || c
        ? null
        : (0, d.jsx)(v.m, {
              text: o,
              children: (0, d.jsx)("div", {
                  children: (0, d.jsx)(e$.K, {
                      variant: "icon-only",
                      icon: () => (0, d.jsx)(a, { size: "sm", color: r }),
                      "aria-label": eR.intl.formatToPlainString(eR.t["3IPBG1"], { username: s }),
                      size: "sm",
                      onClick: g,
                      disabled: u,
                  }),
              }),
          });
}
var e2 = n(486020),
    e3 = n(240248),
    e7 = n(427262),
    e4 = n(806931),
    e6 = n(640852);
function e8(e, t) {
    if (null != e) return { suggestionData: Y.getSelectedInviteMetadata(e), source: t };
}
let e9 = u.memo(
    function (e) {
        let t,
            {
                user: n,
                channel: i,
                inviteKey: l,
                location: s,
                row: a,
                source: r,
                ringingEnabled: o,
                inviteChannel: c,
                guildId: g,
            } = e,
            [h, A] = u.useState(!1),
            [p, m] = u.useState(!1),
            I = (0, x.bG)([eS.A], () => eS.A.getGuild(i?.guild_id)),
            {
                status: S,
                isMobileOnline: v,
                activities: y,
            } = (0, x.cf)(
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
                let e = y.find((e) => e.type !== F.$pd.CUSTOM_STATUS && e.type !== F.$pd.HANG_STATUS);
                return { activityStatusText: (0, eK.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eW.f)(e) };
            }, [y]),
            { voiceChannel: C } = (0, eq.A)({ userId: n?.id }),
            T = (0, et.Ay)(C),
            b = (0, x.bG)([ez.A], () => (null != c && null != n ? ez.A.getParticipant(c.id, n.id) : null)),
            M = o && null != b && b.type === e4.lp.USER && b.ringing,
            N = (0, eP.S3)(F.clD.ONLINE),
            j = u.useCallback(() => {
                null != l &&
                    (null != i
                        ? (A(!0),
                          eH.A.enqueue(
                              {
                                  type: eH.F.GROUP_DM,
                                  channel: i,
                                  inviteKey: l,
                                  location: s,
                                  inviteAnalyticsMetadata: e8(a, r),
                              },
                              (e) => {
                                  A(!1), m(e);
                              },
                          ))
                        : null != n &&
                          (A(!0),
                          eH.A.enqueue(
                              {
                                  type: eH.F.USER,
                                  user: n,
                                  inviteKey: l,
                                  location: s,
                                  inviteAnalyticsMetadata: e8(a, r),
                              },
                              (e) => {
                                  A(!1), m(e);
                              },
                          )));
            }, [l, i, n, s, a, r]),
            R = e7.Ay.getName(n),
            w = null != n ? P.A.getNickname(n.id) : null,
            G = null != i ? (0, et.m1)(i, ep.default, P.A) : null,
            U = null != n ? n.getAvatarURL(i?.guild_id, 32) : null,
            V = null != i ? (0, eJ.Y)(i) : null,
            O =
                null != I && null != i && null == V
                    ? e2.Ay.getGuildIconURL({ id: i.guild_id, icon: I.icon, size: 32 })
                    : null,
            D = S !== F.clD.OFFLINE ? S : void 0,
            L = U ?? V ?? O,
            k = R ?? G ?? void 0,
            B = null != I && null == I.icon ? (0, e3.oN)(I.name) : null,
            H = null != L && null != k;
        null != n && (t = w ?? R);
        let K = e7.Ay.getUserTag(n, { decoration: "never" }),
            q = (0, d.jsx)(eB.$, {
                variant: "secondary",
                text: p ? eR.intl.string(eR.t.dVT149) : eR.intl.string(eR.t.jYnGPG),
                size: "sm",
                loading: h,
                onClick: j,
                disabled: p,
            }),
            Q = null != E.text,
            W = null != C && null != T,
            z = W || Q || null != n;
        return (0, d.jsxs)("div", {
            className: e6.Og,
            children: [
                (0, d.jsxs)("div", {
                    className: e6.mQ,
                    children: [
                        H
                            ? M
                                ? (0, d.jsx)(eY.A, { size: eF._3.SIZE_32, ringing: M, src: L, className: e6.hO })
                                : (0, d.jsx)(ek.eu, {
                                      src: L,
                                      "aria-label": k,
                                      size: eF._3.SIZE_32,
                                      className: e6.hO,
                                      status: null != n ? D : void 0,
                                      isMobile: null != n ? v : void 0,
                                  })
                            : (0, d.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  className: e6.q9,
                                  "aria-hidden": !0,
                                  children: B,
                              }),
                        (0, d.jsxs)("div", {
                            className: eL()(e6.BT, { [e6.DF]: M }),
                            children: [
                                (0, d.jsxs)(f.E, {
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != i ? (0, et.m1)(i, ep.default, P.A, !0) : null],
                                }),
                                z &&
                                    (0, d.jsxs)("div", {
                                        className: eL()(e6.eq, { [e6.DF]: M }),
                                        children: [
                                            W
                                                ? (0, d.jsx)(eZ.A, {
                                                      size: "custom",
                                                      color: N,
                                                      channel: C,
                                                      className: e6.j8,
                                                  })
                                                : null != _
                                                  ? (0, d.jsx)(eQ.A, { icon: _, className: e6.j8 })
                                                  : null,
                                            W
                                                ? (0, d.jsx)(f.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: T,
                                                  })
                                                : Q
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
                                                children: M && ` \u{2022} ${eR.intl.string(eR.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, d.jsxs)("div", {
                    className: e6.t$,
                    children: [
                        o && null != n && null != c && (0, d.jsx)(e1, { user: n, channel: c, location: "InviteRow" }),
                        q,
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
let { INVITE_OPTIONS_FOREVER: tt, INVITE_OPTIONS_7_DAYS: tn, INVITE_OPTIONS_UNLIMITED: ti } = O.Ay;
class tl extends u.PureComponent {
    _scroller = null;
    _headerId = A().uniqueId();
    static defaultProps = { analyticsLocation: F.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: tn.value };
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
            { maxAge: p, maxUses: m, temporary: I, flags: x } = h;
        if (l) {
            let n = e?.id;
            if (null == n) return;
            A({ networkError: void 0 }),
                j.Ay.createInvite(
                    n,
                    {
                        validate: t ?? null,
                        max_age: p,
                        max_uses: m,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: d?.id,
                        temporary: I,
                        flags: x,
                    },
                    i,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                eI.default.track(F.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = ed.A.getStreamForUser(a, n.id),
                t = (0, ei.Ee)(e, eh.A);
            eI.default.track(F.HAw.OPEN_MODAL, {
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
                eI.default.track(F.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, m.Lt)(t.flags, p.Q.IS_GUEST_INVITE) && null != e && j.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : (e ?? t);
        return null == s ? s : (0, eE.WU)({ baseCode: s, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(k.QR.SETTINGS);
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
            R.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e }),
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
        return (0, ee.A)(e)
            ? (0, d.jsxs)("div", {
                  className: e6.UW,
                  children: [
                      (0, d.jsx)(y.E, {
                          size: "custom",
                          className: e6.QW,
                          color: S.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, d.jsx)(f.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: eR.intl.string(eR.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: n, guildScheduledEvent: i, streamUserId: l, application: s, inviteChannel: a } = this.props;
        if (
            ((e =
                null != l
                    ? eR.intl.string(eR.t["6VQaqd"])
                    : null != s
                      ? eR.intl.formatToPlainString(eR.t.ZdK3dW, { applicationName: s.name })
                      : null != i
                        ? eR.intl.string(eR.t.JKV4FL)
                        : a?.isGuildStageVoice()
                          ? eR.intl.string(eR.t.zTrsH0)
                          : eR.intl.formatToPlainString(eR.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, en.gU)(a, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eR.intl.string(eR.t["/YzI63"]);
                t = eR.intl.format(eR.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, d.jsxs)("span", { children: [(0, d.jsx)(e, { className: e6.p }), t] }, n),
                });
            }
        }
        return n.features.has(F.GuildFeatures.HUB)
            ? { title: eR.intl.string(eR.t.WhR38i), subtitle: eR.intl.string(eR.t.Ed4BMs) }
            : { title: e, subtitle: t };
    }
    renderFriendsBody() {
        let { modalState: e, showFriends: t, guild: n } = this.props,
            { query: i } = e,
            l = this.getListProps();
        return {
            bodyContent: void 0,
            controls: (0, d.jsxs)(d.Fragment, {
                children: [
                    t &&
                        (0, d.jsx)(E.I, {
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: eR.intl.string(eR.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(F.GuildFeatures.HUB) && this.renderChannelWarning(),
                ],
            }),
            listProps: l,
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
                          className: e6.Iq,
                          children: (0, d.jsx)(_.SG, { children: eR.intl.string(eR.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, d.jsx)("div", {
                            className: e6.Iq,
                            children: (0, d.jsx)(_.SG, { children: eR.intl.string(eR.t.hzPwGG) }),
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
                rows: i,
                sections: l,
                analyticsLocation: s,
                source: a,
                ringingEnabled: r,
                inviteChannel: o,
                guild: u,
            } = this.props,
            c = this.getInviteKey(),
            g = null == l ? i[n] : l[t][n],
            h = `${g.type}-${g.item.id}`,
            A = this.getSectionVisibility(t);
        if (null != l && !A) return null;
        switch (g.type) {
            case O.OK.GROUP_DM:
            case O.OK.CHANNEL:
                return (0, d.jsx)(
                    e9,
                    { row: g, channel: g.item, inviteKey: c, location: s, source: a, guildId: u.id },
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
                        location: s,
                        source: a,
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
        let i = 0 === t ? eR.intl.string(eR.t.y29JXs) : eR.intl.string(eR.t.Sd8Ixw),
            l = this.getSectionVisibility(t);
        return (0, d.jsx)(ts, {
            section: t,
            heading: i,
            isOpen: l,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let l = (0, e_.A)(this.getInviteKey() ?? ""),
            s = ep.default.getCurrentUser();
        g()(null != s, "InstantInviteModal: user cannot be undefined");
        let a = (0, eo.bM)(e, s) ? eR.intl.string(eR.t.HFbByJ) : eR.intl.string(eR.t.ueBhA9);
        return (
            null != n ? (a = eR.intl.string(eR.t.CXpS1I)) : null != i && (a = eR.intl.string(eR.t.ueCrHB)),
            {
                bodyContent: (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(f.E, { className: e6.Sv, variant: "text-sm/normal", children: a }),
                        (0, d.jsx)(eO.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: l }),
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
                application: l,
                inviteChannel: s,
                modalState: a,
            } = this.props,
            { maxAge: r } = a,
            o = null,
            u = (0, e_.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eR.intl.string(eR.t.MLkj7N);
            null != i
                ? (e = eR.intl.string(eR.t["1b9neu"]))
                : null != l
                  ? (e = eR.intl.string(eR.t.iI1gMg))
                  : null != n
                    ? (e = eR.intl.string(eR.t.KaWCyD))
                    : s?.isGuildStageVoice() && (e = eR.intl.string(eR.t["2frWa3"])),
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
                    className: e6.xF,
                    children: [
                        (0, d.jsx)(T.S, {
                            checked: r === tt.value,
                            onChange: this.handleToggleMaxAge,
                            label: eR.intl.string(eR.t["QKJru/"]),
                        }),
                        (0, d.jsx)(v.m, {
                            text: eR.intl.string(eR.t.Yx4IiC),
                            children: (0, d.jsx)(b.D, {
                                onClick: this.openSettings,
                                className: te.or,
                                children: (0, d.jsx)(M.Z, { size: "sm", color: S.A.unsafe_rawColors.PRIMARY_400.css }),
                            }),
                        }),
                    ],
                }));
        return o;
    }
    render() {
        let { modalState: e, handleDone: t, transitionState: n, onClose: i } = this.props,
            { currentPage: l } = e;
        switch (l) {
            case k.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: l, controls: s, listProps: a } = this.getBodyContent();
                return (0, d.jsx)(I.Modal, {
                    transitionState: n,
                    onClose: i,
                    title: e,
                    subtitle: t,
                    input: s,
                    listProps: a,
                    preview: this.renderFooter(),
                    actions: [],
                    children: l,
                });
            }
            case k.QR.SETTINGS:
                return (0, d.jsx)(eV, {
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
function ts(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: l } = e;
    return (0, d.jsxs)(b.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: e6.uP,
        onClick: () => l(t),
        children: [
            (0, d.jsx)(f.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, d.jsx)(N.a, { size: "md", color: "currentColor", className: e6.ep }),
        ],
    });
}
let ta = u.forwardRef(function (e, t) {
    let n,
        i,
        {
            channel: l,
            guild: s,
            source: a,
            guildScheduledEvent: r,
            streamUserId: o,
            applicationId: c,
            transitionState: g,
            onClose: h,
            page: A,
            analyticsLocation: I,
        } = e,
        { analyticsLocations: S } = (0, $.Ay)(Z.A.INSTANT_INVITE_MODAL),
        v = (0, x.bG)([eA.A, D.A, ec.Ay, L.A], () => {
            if (null != l) return l;
            let e = eA.A.getChannelId(),
                t = null == e || (0, e5.jq)(e) ? void 0 : D.A.getChannel(e);
            return (
                t?.isThread() && (t = D.A.getChannel(t.parent_id)),
                t?.guild_id === s.id && null != t && L.A.can(F.xBc.VIEW_CHANNEL, t)
                    ? t
                    : ec.Ay.getDefaultChannel(s.id, !0, F.xBc.CREATE_INSTANT_INVITE)
            );
        }, [l, s.id]),
        y = (0, et.Ay)(v),
        f = null;
    null != o ? (f = k.yV.STREAM) : null != c && (f = k.yV.EMBEDDED_APPLICATION);
    let E = null != l ? l.getGuildId() : null != s ? s.id : null,
        _ = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? F.dJq,
                l = ey.useExperiment({ guildId: i, location: n }),
                s = ef.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== ev ? l : s,
                r = (0, ex.bG)([eS.A], () => eS.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(F.GuildFeatures.HUB)) return O.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? ev;
                      let i = t?.id ?? F.dJq,
                          l = ey.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== ev
                          ? l.defaultMaxAge
                          : (ef.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? ev);
                  })({ guild: r, experimentConfig: a });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        C = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? F.dJq,
                l = ey.useExperiment({ guildId: i, location: n }),
                s = ef.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== ev ? l : s;
            return O.Ay.getMaxAgeOptions({ includeExperimentalValues: [a?.defaultMaxAge] });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        T = (0, x.bG)([eg.A], () => {
            let e = null != v ? v.id : null;
            return null == e ? null : eg.A.getInvite(e, { targetType: f, targetUserId: o, targetApplicationId: c });
        }, [v, f, o, c]),
        [b, M, N, G] = (0, x.yK)(
            [Y, em.Ay],
            () => [
                Y.getInviteSuggestionRows(),
                Y.getTotalSuggestionsCount() >= 1,
                Y.getInitialCounts(),
                null != l && null != v ? em.Ay.getVoiceStatesForChannel(v) : null,
            ],
            [v, l],
        ),
        U = u.useMemo(() => {
            let e = null != v ? v.id : null;
            return null != E ? eu.Ay.getProps(E, e) : void 0;
        }, [v, E]),
        V = (0, x.bG)([L.A], () => null != v && L.A.can(F.xBc.CREATE_INSTANT_INVITE, v), [v]),
        P = null === T || !V,
        B = v?.type === F.rbe.GUILD_VOICE,
        H = (0, ee.A)(v),
        K = u.useMemo(() => {
            let e = new Set();
            return (
                B || null != o
                    ? G?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != E &&
                      null != U &&
                      f !== k.yV.EMBEDDED_APPLICATION &&
                      U.rows.forEach((t) => {
                          t.type === eu.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [B, U, o, G, E, f]),
        q = l?.id,
        Q = (0, x.bG)([ea.A], () => ea.A.getStageInstanceByChannel(q), [q]);
    u.useEffect(() => {
        (function (e) {
            let { omitUserIds: t, guild: n, channel: i, applicationId: l, inviteTargetType: s } = e;
            return (0, w.u)().then(() => {
                R.h.dispatch({
                    type: "LOAD_INVITE_SUGGESTIONS",
                    omitUserIds: t ?? new Set(),
                    guild: n,
                    channel: i,
                    applicationId: l,
                    inviteTargetType: s,
                });
            });
        })({ omitUserIds: K, guild: s, channel: l, applicationId: c, inviteTargetType: f }).catch(F.FXj);
    }, [K, l, s, c, f]);
    let [W] = (0, X.A)(null != c ? [c] : []),
        z = null != T ? T.code : void 0,
        en = T?.maxAge,
        ei = T?.maxUses,
        el = T?.temporary,
        eo = s.vanityURLCode,
        ed = null != eo && eo.length > 0,
        eh = !V && !v?.isGuildVocal() && ed,
        eI = T?.flags ?? 0;
    V || Q?.invite_code == null || (z = Q.invite_code);
    let eE = u.useMemo(() => (B ? (0, O.Gv)(b, E) : null), [B, b, E]),
        [e_, eM] = u.useState({
            query: "",
            maxAgeOptions: C,
            maxAge: en ?? _ ?? ev,
            savedMaxAge: en === tt.value ? (_ ?? tn.value) : tt.value,
            maxUses: null != ei && 0 !== ei ? ei : ti.value,
            temporary: el ?? !1,
            networkError: void 0,
            showVanityURL: eh,
            currentPage: A ?? k.QR.MAIN,
            lastPage: void 0,
            flags: eI,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eN = u.useCallback((e) => {
            eM((t) => ({ ...t, ...e }));
        }, []),
        ej = u.useCallback(
            (e) => {
                eN({ currentPage: e, lastPage: e_.currentPage });
            },
            [e_.currentPage, eN],
        ),
        eR = B && !eh && !P && !H,
        { enabled: ew } = es.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eR }),
        { canCreateApplicationBypassInvites: eG, isManualApprovalGuild: eU } =
            ((n = (0, x.bG)([L.A], () => L.A.can(F.xBc.KICK_MEMBERS, s), [s])),
            {
                canCreateApplicationBypassInvites:
                    (i = !!(
                        s?.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        s?.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && n,
                isManualApprovalGuild: i,
            }),
        eV = (ew && eR) || eU,
        { maxAge: eO, maxUses: eD, temporary: eL, savedMaxAge: eP, flags: eF, roleIds: ek } = e_,
        eB = !eV && eL,
        eH = (function (e) {
            let {
                sortedRoles: t,
                currentUser: n,
                canManageRoles: i,
            } = (0, x.cf)(
                [eT.A, ep.default, L.A],
                () => ({
                    sortedRoles: null != e ? eT.A.getSortedRoles(e.id) : [],
                    currentUser: ep.default.getCurrentUser(),
                    canManageRoles: null != e && L.A.can(F.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return u.useMemo(() => {
                if (null == e || null == n || !i) return [];
                let l = eb.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eC.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!eb.wO(e, n.id, l, t),
                );
            }, [e, n, i, t]);
        })(s),
        eK = eH.length > 0,
        eq = u.useCallback(
            (e) => {
                let t = new Set(ek);
                t.delete(e) || t.add(e), eN({ roleIds: t });
            },
            [ek, eN],
        ),
        eQ = u.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === k.QR.SETTINGS && null != t ? ej(t) : h();
        }, [ej, e_, h]),
        eW = u.useCallback(() => {
            let e = v?.id;
            0 === eD && 0 === eO && !eB && eh
                ? eN({ networkError: void 0, showVanityURL: !0 })
                : V &&
                  null != e &&
                  (eN({ networkError: void 0, showVanityURL: !1 }),
                  j.Ay.createInvite(
                      e,
                      {
                          max_age: eO,
                          max_uses: eD,
                          target_type: f,
                          target_user_id: o,
                          target_application_id: W?.id,
                          temporary: eB,
                          flags: eF,
                          role_ids: Array.from(ek),
                      },
                      a,
                  ).catch((e) => eN({ networkError: e, showVanityURL: eh }))),
                eO !== tt.value && eP !== tt.value && eN({ savedMaxAge: tt.value });
        }, [eh, V, v, a, W?.id, f, o, eO, eD, eB, eN, eP, eF, ek]),
        ez = (0, J.A)(v),
        eY = (0, J.A)((0, m.Lt)(eF, p.Q.IS_APPLICATION_BYPASS)),
        eJ = null != ez && ez !== v,
        eZ = null != eY && eY !== (0, m.Lt)(eF, p.Q.IS_APPLICATION_BYPASS);
    u.useEffect(() => {
        !eh && (eJ || eZ) && eW();
    }, [eW, eJ, eZ, eh]);
    let { enabled: e$ } = er.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, d.jsx)($.f5, {
        value: S,
        children: (0, d.jsx)(tl, {
            ref: t,
            canCreateInvites: V,
            noInvitesAvailable: P,
            inviteChannel: v,
            inviteChannelName: y,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: eo,
            targetType: f,
            targetUserId: o,
            application: W,
            rows: b,
            sections: eE,
            showFriends: M,
            initialCounts: N,
            code: z,
            source: a,
            analyticsLocations: S,
            analyticsLocation: I,
            transitionState: g,
            onClose: h,
            canShowVanityURL: eh,
            isGuestInviteCreationToggleEnabled: ew && eR,
            shouldHideTemporaryInviteToggle: eV,
            modalState: { ...e_, temporary: eB },
            setModalState: eN,
            changePage: ej,
            onGenerateNewLink: eW,
            handleDone: eQ,
            isApplicationBypassToggleEnabled: eG && !P,
            isRoleAssignmentEnabled: eK,
            assignableRoles: eH,
            onToggleRole: eq,
            ringingEnabled: e$,
        }),
    });
});
function tr(e) {
    return (0, d.jsx)(ta, { ...e });
}
