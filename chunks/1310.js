let i, l, a, s, r, o;
n.d(t, { default: () => tr }), n(938796);
var u = n(627968),
    d = n(64700),
    c = n(284009),
    g = n.n(c),
    h = n(735438),
    p = n.n(h),
    A = n(821418),
    m = n(665260),
    I = n(189213),
    x = n(17928),
    v = n(661531),
    S = n(990078),
    f = n(695366),
    y = n(834730),
    E = n(892547),
    _ = n(396478),
    C = n(452027),
    b = n(150934),
    T = n(939249),
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
        n = s?.type === F.rbe.GUILD_VOICE,
        i = null;
    null == a || o === k.yV.EMBEDDED_APPLICATION || n || (i = a.id);
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
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (a = null != u ? n : null),
            (s = u),
            (r = d),
            (o = c),
            (B = new Set([
                ...t,
                ...P.A.getBlockedOrIgnoredIDs(),
                ...(0, O.Uo)({ channel: s, applicationId: r, inviteTargetType: c }),
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
var $ = n(475743),
    J = n(793574),
    Z = n(688810),
    X = n(429913),
    ee = n(148719),
    et = n(47167),
    en = n(713654),
    ei = n(834757),
    el = n(600975);
let ea = (0, el.C)({
    kind: "guild",
    id: "2023-02_guest_voice_invites",
    label: "Guest Voice Invites",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Allow creation of guest voice invites", config: { enabled: !0 } }],
});
var es = n(446600),
    er = n(164891),
    eo = n(260509),
    eu = n(616356),
    ed = n(963307),
    ec = n(808728),
    eg = n(958590),
    eh = n(290863),
    ep = n(309010),
    eA = n(287809),
    em = n(607567),
    eI = n(174459),
    ex = n(702841),
    ev = n(71393);
let eS = O.Ay.INVITE_OPTIONS_7_DAYS.value,
    ef = (0, el.C)({
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
    ey = (0, el.C)({
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
    eb = n(317525),
    eT = n(488926),
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
            temporary: a,
            onToggleTemporary: s,
            onSelectMaxAge: r,
            onSelectMaxUses: o,
            isGuestInviteCreationToggleEnabled: c,
            inviteFlags: g,
            onSetInviteFlags: h,
            isRoleAssignmentEnabled: p,
            assignableRoles: I,
            selectedRoleIds: x,
            onToggleRole: v,
        } = e,
        S = O.Ay.getMaxAgeOptionByValue(i),
        f = eG.find((e) => e.value === l),
        y = d.useMemo(
            () =>
                I.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, u.jsx)(eM.W, {
                            color: e.colorString ?? F.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [I],
        ),
        E = d.useCallback(
            (e) => {
                let t = Array.from(x),
                    n = e ?? [],
                    i = n.find((e) => !t.includes(e)),
                    l = t.find((e) => !n.includes(e));
                null != i ? v(i) : null != l && v(l);
            },
            [x, v],
        );
    return (0, u.jsxs)("div", {
        className: ew.z1,
        children: [
            (0, u.jsx)(eN.Z, {
                label: eR.intl.string(eR.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: S?.value ?? n[0].value,
                onSelectionChange: r,
                selectionMode: "single",
            }),
            (0, u.jsx)(eN.Z, {
                label: eR.intl.string(eR.t.jDqWHW),
                options: eG,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: f?.value,
                onSelectionChange: o,
                selectionMode: "single",
            }),
            p &&
                I.length > 0 &&
                (0, u.jsx)(eN.Z, {
                    label: eR.intl.string(eR.t.rPYJxL),
                    placeholder: eR.intl.string(eR.t["/djIh7"]),
                    options: y,
                    value: Array.from(x),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: a,
                }),
            !t &&
                (0, u.jsx)(ej.d, {
                    checked: a,
                    onChange: (e) => s(e),
                    description: eR.intl.string(eR.t.UN5IRX),
                    label: eR.intl.string(eR.t["wE+9dr"]),
                    disabled: x.size > 0,
                }),
            c &&
                (0, u.jsx)(ej.d, {
                    checked: (0, m.Lt)(g, A.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, m.lA)(g, A.Q.IS_GUEST_INVITE, e)),
                    description: eR.intl.string(eR.t["/FeTK6"]),
                    label: eR.intl.string(eR.t.siexRS),
                }),
        ],
    });
}
function eV(e) {
    let {
            handleDone: t,
            modalState: n,
            shouldHideTemporaryInviteToggle: i,
            onGenerateNewLink: l,
            onToggleTemporary: a,
            onSelectMaxAge: s,
            onSelectMaxUses: r,
            isGuestInviteCreationToggleEnabled: o,
            onSetInviteFlags: d,
            onClose: c,
            transitionState: g,
            isRoleAssignmentEnabled: h,
            assignableRoles: p,
            onToggleRole: A,
        } = e,
        { maxAgeOptions: m, maxAge: x, maxUses: v, temporary: S, flags: f, roleIds: y } = n;
    return (0, u.jsx)(I.Modal, {
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
        children: (0, u.jsx)(eU, {
            shouldHideTemporaryInviteToggle: i,
            maxAgeOptions: m,
            maxAge: x,
            maxUses: v,
            temporary: S,
            onToggleTemporary: a,
            onSelectMaxAge: s,
            onSelectMaxUses: r,
            isGuestInviteCreationToggleEnabled: o,
            onSetInviteFlags: d,
            inviteFlags: f,
            isRoleAssignmentEnabled: h,
            assignableRoles: p,
            selectedRoleIds: y,
            onToggleRole: A,
        }),
    });
}
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
    e$ = n(571694),
    eJ = n(10862),
    eZ = n(408278),
    eX = n(562153),
    e0 = n(135635);
function e1(e) {
    let { user: t, channel: n, location: i } = e,
        l = (0, x.bG)([ep.A], () => ep.A.getVoiceChannelId() === n.id),
        a = (0, eX.tx)(n.guild_id, n.id, t),
        {
            icon: s,
            iconColor: r,
            tooltipText: o,
            disabled: d,
            shouldHideButton: c,
            onClick: g,
        } = (0, e0.A)({ user: t, channel: n, location: i });
    return !l || c
        ? null
        : (0, u.jsx)(S.m, {
              text: o,
              children: (0, u.jsx)("div", {
                  children: (0, u.jsx)(eZ.K, {
                      variant: "icon-only",
                      icon: () => (0, u.jsx)(s, { size: "sm", color: r }),
                      "aria-label": eR.intl.formatToPlainString(eR.t["3IPBG1"], { username: a }),
                      size: "sm",
                      onClick: g,
                      disabled: d,
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
let e9 = d.memo(
    function (e) {
        let t,
            {
                user: n,
                channel: i,
                inviteKey: l,
                location: a,
                row: s,
                source: r,
                ringingEnabled: o,
                inviteChannel: c,
                guildId: g,
            } = e,
            [h, p] = d.useState(!1),
            [A, m] = d.useState(!1),
            I = d.useId(),
            v = `invite-row-name-${I}`,
            S = `invite-row-button-${I}`,
            f = d.useRef(null),
            E = d.useRef(!1);
        d.useEffect(() => {
            if (A && !E.current) {
                let e = document.activeElement;
                (null == e || e === document.body) && f.current?.focus();
            }
            E.current = A;
        }, [A]);
        let _ = (0, x.bG)([ev.A], () => ev.A.getGuild(i?.guild_id)),
            {
                status: C,
                isMobileOnline: b,
                activities: T,
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
            { activityStatusText: M, activityStatusIcon: N } = d.useMemo(() => {
                if (null == T) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = T.find((e) => e.type !== F.$pd.CUSTOM_STATUS && e.type !== F.$pd.HANG_STATUS);
                return { activityStatusText: (0, eK.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eW.f)(e) };
            }, [T]),
            { voiceChannel: j } = (0, eq.Ay)({ userId: n?.id }),
            R = (0, et.Ay)(j),
            w = (0, x.bG)([ez.A], () => (null != c && null != n ? ez.A.getParticipant(c.id, n.id) : null)),
            G = o && null != w && w.type === e4.lp.USER && w.ringing,
            U = (0, eP.S3)(F.clD.ONLINE),
            V = d.useCallback(() => {
                null != l &&
                    (null != i
                        ? (p(!0),
                          eH.A.enqueue(
                              {
                                  type: eH.F.GROUP_DM,
                                  channel: i,
                                  inviteKey: l,
                                  location: a,
                                  inviteAnalyticsMetadata: e8(s, r),
                              },
                              (e) => {
                                  p(!1), m(e);
                              },
                          ))
                        : null != n &&
                          (p(!0),
                          eH.A.enqueue(
                              {
                                  type: eH.F.USER,
                                  user: n,
                                  inviteKey: l,
                                  location: a,
                                  inviteAnalyticsMetadata: e8(s, r),
                              },
                              (e) => {
                                  p(!1), m(e);
                              },
                          )));
            }, [l, i, n, a, s, r]),
            O = e7.Ay.getName(n),
            D = null != n ? P.A.getNickname(n.id) : null,
            L = null != i ? (0, et.m1)(i, eA.default, P.A) : null,
            k = null != n ? n.getAvatarURL(i?.guild_id, 32) : null,
            B = null != i ? (0, e$.Y)(i) : null,
            H =
                null != _ && null != i && null == B
                    ? e2.Ay.getGuildIconURL({ id: i.guild_id, icon: _.icon, size: 32 })
                    : null,
            K = C !== F.clD.OFFLINE ? C : void 0,
            q = k ?? B ?? H,
            Q = O ?? L ?? void 0,
            W = null != _ && null == _.icon ? (0, e3.oN)(_.name) : null,
            z = null != q && null != Q;
        null != n && (t = D ?? O);
        let Y = e7.Ay.getUserTag(n, { decoration: "never" }),
            $ = null != t || null != i,
            J = (0, u.jsx)(eB.$, {
                id: S,
                variant: "secondary",
                text: A ? eR.intl.string(eR.t.dVT149) : eR.intl.string(eR.t.jYnGPG),
                "aria-labelledby": $ ? `${S} ${v}` : void 0,
                size: "sm",
                loading: h,
                onClick: V,
                disabled: A,
            }),
            Z = null != M.text,
            X = null != j && null != R,
            ee = X || Z || null != n;
        return (0, u.jsxs)("div", {
            ref: f,
            tabIndex: -1,
            className: e6.Og,
            children: [
                (0, u.jsxs)("div", {
                    className: e6.mQ,
                    children: [
                        z
                            ? G
                                ? (0, u.jsx)(eY.A, { size: eF._3.SIZE_32, ringing: G, src: q, className: e6.hO })
                                : (0, u.jsx)(ek.eu, {
                                      src: q,
                                      "aria-label": Q,
                                      size: eF._3.SIZE_32,
                                      className: e6.hO,
                                      status: null != n ? K : void 0,
                                      isMobile: null != n ? b : void 0,
                                  })
                            : (0, u.jsx)(y.E, {
                                  variant: "text-md/medium",
                                  className: e6.q9,
                                  "aria-hidden": !0,
                                  children: W,
                              }),
                        (0, u.jsxs)("div", {
                            className: eL()(e6.BT, { [e6.DF]: G }),
                            children: [
                                (0, u.jsxs)(y.E, {
                                    id: v,
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != i ? (0, et.m1)(i, eA.default, P.A, !0) : null],
                                }),
                                ee &&
                                    (0, u.jsxs)("div", {
                                        className: eL()(e6.eq, { [e6.DF]: G }),
                                        children: [
                                            X
                                                ? (0, u.jsx)(eJ.A, {
                                                      size: "custom",
                                                      color: U,
                                                      channel: j,
                                                      className: e6.j8,
                                                  })
                                                : null != N
                                                  ? (0, u.jsx)(eQ.A, { icon: N, className: e6.j8 })
                                                  : null,
                                            X
                                                ? (0, u.jsx)(y.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: R,
                                                  })
                                                : Z
                                                  ? (0, u.jsx)(y.E, {
                                                        variant: "text-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: M.text,
                                                    })
                                                  : (0, u.jsx)(y.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: Y,
                                                    }),
                                            (0, u.jsx)(y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: G && ` \u{2022} ${eR.intl.string(eR.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, u.jsxs)("div", {
                    className: e6.t$,
                    children: [
                        o && null != n && null != c && (0, u.jsx)(e1, { user: n, channel: c, location: "InviteRow" }),
                        J,
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
class tl extends d.PureComponent {
    _scroller = null;
    _headerId = p().uniqueId();
    static defaultProps = { analyticsLocation: F.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: tn.value };
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: n,
                source: i,
                canCreateInvites: l,
                analyticsLocation: a,
                streamUserId: s,
                targetType: r,
                targetUserId: o,
                application: u,
                initialCounts: d,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: p,
            } = this.props,
            { maxAge: A, maxUses: m, temporary: I, flags: x } = h;
        if (l) {
            let n = e?.id;
            if (null == n) return;
            p({ networkError: void 0 }),
                j.Ay.createInvite(
                    n,
                    {
                        validate: t ?? null,
                        max_age: A,
                        max_uses: m,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: u?.id,
                        temporary: I,
                        flags: x,
                    },
                    i,
                ).catch((e) => p({ networkError: e }));
        }
        if (
            (g &&
                eI.default.track(F.HAw.INVITE_SUGGESTION_OPENED, {
                    location: i,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: u?.id,
                }),
            null != s)
        ) {
            let e = eu.A.getStreamForUser(s, n.id),
                t = (0, ei.Ee)(e, eh.A);
            eI.default.track(F.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: i,
                location: a,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            u?.id != null ||
                eI.default.track(F.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: a });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, m.Lt)(t.flags, A.Q.IS_GUEST_INVITE) && null != e && j.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            a = l ? t : (e ?? t);
        return null == a ? a : (0, eE.WU)({ baseCode: a, guildScheduledEventId: n?.id });
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
            ? (0, u.jsxs)("div", {
                  className: e6.UW,
                  children: [
                      (0, u.jsx)(f.E, {
                          size: "custom",
                          className: e6.QW,
                          color: v.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, u.jsx)(y.E, {
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
            { guild: n, guildScheduledEvent: i, streamUserId: l, application: a, inviteChannel: s } = this.props;
        if (
            ((e =
                null != l
                    ? eR.intl.string(eR.t["6VQaqd"])
                    : null != a
                      ? eR.intl.formatToPlainString(eR.t.ZdK3dW, { applicationName: a.name })
                      : null != i
                        ? eR.intl.string(eR.t.JKV4FL)
                        : s?.isGuildStageVoice()
                          ? eR.intl.string(eR.t.zTrsH0)
                          : eR.intl.formatToPlainString(eR.t.NvVBJU, { name: n.name })),
            null != s)
        ) {
            let e = (0, en.gU)(s, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eR.intl.string(eR.t["/YzI63"]);
                t = eR.intl.format(eR.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, u.jsxs)("span", { children: [(0, u.jsx)(e, { className: e6.p }), t] }, n),
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
            controls: (0, u.jsxs)(u.Fragment, {
                children: [
                    t &&
                        (0, u.jsx)(E.I, {
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
                      (0, u.jsx)("div", {
                          className: e6.Iq,
                          children: (0, u.jsx)(_.SG, { children: eR.intl.string(eR.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, u.jsx)("div", {
                            className: e6.Iq,
                            children: (0, u.jsx)(_.SG, { children: eR.intl.string(eR.t.hzPwGG) }),
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
                analyticsLocation: a,
                source: s,
                ringingEnabled: r,
                inviteChannel: o,
                guild: d,
            } = this.props,
            c = this.getInviteKey(),
            g = null == l ? i[n] : l[t][n],
            h = `${g.type}-${g.item.id}`,
            p = this.getSectionVisibility(t);
        if (null != l && !p) return null;
        switch (g.type) {
            case O.OK.GROUP_DM:
            case O.OK.CHANNEL:
                return (0, u.jsx)(
                    e9,
                    { row: g, channel: g.item, inviteKey: c, location: a, source: s, guildId: d.id },
                    h,
                );
            case O.OK.DM:
            case O.OK.FRIEND:
                return (0, u.jsx)(
                    e9,
                    {
                        row: g,
                        user: g.item,
                        inviteKey: c,
                        location: a,
                        source: s,
                        ringingEnabled: r,
                        inviteChannel: o,
                        guildId: d.id,
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
        return (0, u.jsx)(ta, {
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
            a = eA.default.getCurrentUser();
        g()(null != a, "InstantInviteModal: user cannot be undefined");
        let s = (0, eo.bM)(e, a) ? eR.intl.string(eR.t.HFbByJ) : eR.intl.string(eR.t.ueBhA9);
        return (
            null != n ? (s = eR.intl.string(eR.t.CXpS1I)) : null != i && (s = eR.intl.string(eR.t.ueCrHB)),
            {
                bodyContent: (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(y.E, { className: e6.Sv, variant: "text-sm/normal", children: s }),
                        (0, u.jsx)(eO.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: l }),
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
                inviteChannel: a,
                modalState: s,
            } = this.props,
            { maxAge: r } = s,
            o = null,
            d = (0, e_.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eR.intl.string(eR.t.MLkj7N);
            null != i
                ? (e = eR.intl.string(eR.t["1b9neu"]))
                : null != l
                  ? (e = eR.intl.string(eR.t.iI1gMg))
                  : null != n
                    ? (e = eR.intl.string(eR.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = eR.intl.string(eR.t["2frWa3"])),
                (o = (0, u.jsx)(C.D, {
                    label: e,
                    children: (0, u.jsx)(eO.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: d,
                    }),
                }));
        } else
            e ||
                (o = (0, u.jsxs)("div", {
                    className: e6.xF,
                    children: [
                        (0, u.jsx)(b.S, {
                            checked: r === tt.value,
                            onChange: this.handleToggleMaxAge,
                            label: eR.intl.string(eR.t["QKJru/"]),
                        }),
                        (0, u.jsx)(S.m, {
                            text: eR.intl.string(eR.t.Yx4IiC),
                            children: (0, u.jsx)(T.D, {
                                onClick: this.openSettings,
                                className: te.or,
                                "aria-label": eR.intl.string(eR.t.Yx4IiC),
                                children: (0, u.jsx)(M.Z, { size: "sm", color: v.A.unsafe_rawColors.PRIMARY_400.css }),
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
                    { bodyContent: l, controls: a, listProps: s } = this.getBodyContent();
                return (0, u.jsx)(I.Modal, {
                    transitionState: n,
                    onClose: i,
                    title: e,
                    subtitle: t,
                    input: a,
                    listProps: s,
                    preview: this.renderFooter(),
                    actions: [],
                    children: l,
                });
            }
            case k.QR.SETTINGS:
                return (0, u.jsx)(eV, {
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
    let { section: t, heading: n, isOpen: i, onToggleVisibility: l } = e;
    return (0, u.jsxs)(T.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: e6.uP,
        onClick: () => l(t),
        "aria-expanded": i,
        children: [
            (0, u.jsx)(y.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, u.jsx)(N.a, { size: "md", color: "currentColor", className: e6.ep }),
        ],
    });
}
let ts = d.forwardRef(function (e, t) {
    let n,
        i,
        {
            channel: l,
            guild: a,
            source: s,
            guildScheduledEvent: r,
            streamUserId: o,
            applicationId: c,
            transitionState: g,
            onClose: h,
            page: p,
            analyticsLocation: I,
        } = e,
        { analyticsLocations: v } = (0, Z.Ay)(J.A.INSTANT_INVITE_MODAL),
        S = (0, x.bG)([ep.A, D.A, ec.Ay, L.A], () => {
            if (null != l) return l;
            let e = ep.A.getChannelId(),
                t = null == e || (0, e5.jq)(e) ? void 0 : D.A.getChannel(e);
            return (
                t?.isThread() && (t = D.A.getChannel(t.parent_id)),
                t?.guild_id === a.id && null != t && L.A.can(F.xBc.VIEW_CHANNEL, t)
                    ? t
                    : ec.Ay.getDefaultChannel(a.id, !0, F.xBc.CREATE_INSTANT_INVITE)
            );
        }, [l, a.id]),
        f = (0, et.Ay)(S),
        y = null;
    null != o ? (y = k.yV.STREAM) : null != c && (y = k.yV.EMBEDDED_APPLICATION);
    let E = null != l ? l.getGuildId() : null != a ? a.id : null,
        _ = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? F.dJq,
                l = ef.useExperiment({ guildId: i, location: n }),
                a = ey.useExperiment({ guildId: i, location: n }),
                s = l?.defaultMaxAge !== eS ? l : a,
                r = (0, ex.bG)([ev.A], () => ev.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(F.GuildFeatures.HUB)) return O.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? eS;
                      let i = t?.id ?? F.dJq,
                          l = ef.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== eS
                          ? l.defaultMaxAge
                          : (ey.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? eS);
                  })({ guild: r, experimentConfig: s });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        C = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? F.dJq,
                l = ef.useExperiment({ guildId: i, location: n }),
                a = ey.useExperiment({ guildId: i, location: n }),
                s = l?.defaultMaxAge !== eS ? l : a;
            return O.Ay.getMaxAgeOptions({ includeExperimentalValues: [s?.defaultMaxAge] });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        b = (0, x.bG)([eg.A], () => {
            let e = null != S ? S.id : null;
            return null == e ? null : eg.A.getInvite(e, { targetType: y, targetUserId: o, targetApplicationId: c });
        }, [S, y, o, c]),
        [T, M, N, G] = (0, x.yK)(
            [Y, em.Ay],
            () => [
                Y.getInviteSuggestionRows(),
                Y.getTotalSuggestionsCount() >= 1,
                Y.getInitialCounts(),
                null != l && null != S ? em.Ay.getVoiceStatesForChannel(S) : null,
            ],
            [S, l],
        ),
        U = d.useMemo(() => {
            let e = null != S ? S.id : null;
            return null != E ? ed.Ay.getProps(E, e) : void 0;
        }, [S, E]),
        V = (0, x.bG)([L.A], () => null != S && L.A.can(F.xBc.CREATE_INSTANT_INVITE, S), [S]),
        P = null === b || !V,
        B = S?.type === F.rbe.GUILD_VOICE,
        H = (0, ee.A)(S),
        K = d.useMemo(() => {
            let e = new Set();
            return (
                B || null != o
                    ? G?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != E &&
                      null != U &&
                      y !== k.yV.EMBEDDED_APPLICATION &&
                      U.rows.forEach((t) => {
                          t.type === ed.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [B, U, o, G, E, y]),
        q = l?.id,
        Q = (0, x.bG)([es.A], () => es.A.getStageInstanceByChannel(q), [q]);
    d.useEffect(() => {
        (function (e) {
            let { omitUserIds: t, guild: n, channel: i, applicationId: l, inviteTargetType: a } = e;
            return (0, w.u)().then(() => {
                R.h.dispatch({
                    type: "LOAD_INVITE_SUGGESTIONS",
                    omitUserIds: t ?? new Set(),
                    guild: n,
                    channel: i,
                    applicationId: l,
                    inviteTargetType: a,
                });
            });
        })({ omitUserIds: K, guild: a, channel: l, applicationId: c, inviteTargetType: y }).catch(F.FXj);
    }, [K, l, a, c, y]);
    let [W] = (0, X.A)(null != c ? [c] : []),
        z = null != b ? b.code : void 0,
        en = b?.maxAge,
        ei = b?.maxUses,
        el = b?.temporary,
        eo = a.vanityURLCode,
        eu = null != eo && eo.length > 0,
        eh = !V && !S?.isGuildVocal() && eu,
        eI = b?.flags ?? 0;
    V || Q?.invite_code == null || (z = Q.invite_code);
    let eE = d.useMemo(() => (B ? (0, O.Gv)(T, E) : null), [B, T, E]),
        [e_, eM] = d.useState({
            query: "",
            maxAgeOptions: C,
            maxAge: en ?? _ ?? eS,
            savedMaxAge: en === tt.value ? (_ ?? tn.value) : tt.value,
            maxUses: null != ei && 0 !== ei ? ei : ti.value,
            temporary: el ?? !1,
            networkError: void 0,
            showVanityURL: eh,
            currentPage: p ?? k.QR.MAIN,
            lastPage: void 0,
            flags: eI,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eN = d.useCallback((e) => {
            eM((t) => ({ ...t, ...e }));
        }, []),
        ej = d.useCallback(
            (e) => {
                eN({ currentPage: e, lastPage: e_.currentPage });
            },
            [e_.currentPage, eN],
        ),
        eR = B && !eh && !P && !H,
        { enabled: ew } = ea.useExperiment({ guildId: a?.id, location: "acc417_3" }, { autoTrackExposure: eR }),
        { canCreateApplicationBypassInvites: eG, isManualApprovalGuild: eU } =
            ((n = (0, x.bG)([L.A], () => L.A.can(F.xBc.KICK_MEMBERS, a), [a])),
            {
                canCreateApplicationBypassInvites:
                    (i = !!(
                        a?.features.has(F.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        a?.features.has(F.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
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
                [eb.A, eA.default, L.A],
                () => ({
                    sortedRoles: null != e ? eb.A.getSortedRoles(e.id) : [],
                    currentUser: eA.default.getCurrentUser(),
                    canManageRoles: null != e && L.A.can(F.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return d.useMemo(() => {
                if (null == e || null == n || !i) return [];
                let l = eT.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eC.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!eT.wO(e, n.id, l, t),
                );
            }, [e, n, i, t]);
        })(a),
        eK = eH.length > 0,
        eq = d.useCallback(
            (e) => {
                let t = new Set(ek);
                t.delete(e) || t.add(e), eN({ roleIds: t });
            },
            [ek, eN],
        ),
        eQ = d.useCallback(() => {
            let { currentPage: e, lastPage: t } = e_;
            e === k.QR.SETTINGS && null != t ? ej(t) : h();
        }, [ej, e_, h]),
        eW = d.useCallback(() => {
            let e = S?.id;
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
                          target_type: y,
                          target_user_id: o,
                          target_application_id: W?.id,
                          temporary: eB,
                          flags: eF,
                          role_ids: Array.from(ek),
                      },
                      s,
                  ).catch((e) => eN({ networkError: e, showVanityURL: eh }))),
                eO !== tt.value && eP !== tt.value && eN({ savedMaxAge: tt.value });
        }, [eh, V, S, s, W?.id, y, o, eO, eD, eB, eN, eP, eF, ek]),
        ez = (0, $.A)(S),
        eY = (0, $.A)((0, m.Lt)(eF, A.Q.IS_APPLICATION_BYPASS)),
        e$ = null != ez && ez !== S,
        eJ = null != eY && eY !== (0, m.Lt)(eF, A.Q.IS_APPLICATION_BYPASS);
    d.useEffect(() => {
        !eh && (e$ || eJ) && eW();
    }, [eW, e$, eJ, eh]);
    let { enabled: eZ } = er.A.useExperiment({ guildId: a?.id, location: "InstantInvite" });
    return (0, u.jsx)(Z.f5, {
        value: v,
        children: (0, u.jsx)(tl, {
            ref: t,
            canCreateInvites: V,
            noInvitesAvailable: P,
            inviteChannel: S,
            inviteChannelName: f,
            guild: a,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: eo,
            targetType: y,
            targetUserId: o,
            application: W,
            rows: T,
            sections: eE,
            showFriends: M,
            initialCounts: N,
            code: z,
            source: s,
            analyticsLocations: v,
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
            ringingEnabled: eZ,
        }),
    });
});
function tr(e) {
    return (0, u.jsx)(ts, { ...e });
}
