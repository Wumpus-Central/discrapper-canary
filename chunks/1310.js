let i, l, a, s, r, o;
n.d(t, { default: () => tu }), n(938796);
var u = n(477900),
    d = n(582128),
    c = n(284009),
    g = n.n(c),
    h = n(435558),
    A = n.n(h),
    p = n(821418),
    m = n(665260),
    I = n(189213),
    x = n(17928),
    v = n(661531),
    S = n(695366),
    y = n(834730),
    f = n(683438),
    E = n(396478),
    _ = n(452027),
    C = n(150934),
    b = n(866665),
    T = n(939249),
    M = n(625903),
    N = n(847374),
    j = n(376728),
    R = n(228366),
    w = n(219271),
    G = n(989133),
    U = n(174768),
    V = n(427358),
    O = n(403362),
    D = n(735547),
    L = n(734057),
    P = n(576705),
    F = n(994500),
    k = n(652215),
    B = n(172799);
let H = new Set(),
    K = [],
    q = new Map(),
    Q = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
function W(e, t) {
    return null == e.score || null == t.score ? 0 : (0, G.A)({ score: e.score }, { score: t.score });
}
function z(e) {
    let t = new Set(),
        n = s?.type === k.rbe.GUILD_VOICE,
        i = null;
    null == a || o === B.yV.EMBEDDED_APPLICATION || n || (i = a.id);
    let l = (0, D.oW)(H, i);
    for (let e of (null == l || F.A.isBlockedOrIgnored(l.id) || t.add(l.id), V.A.getUserAffinities()))
        t.add(e.otherUserId);
    let r = new Set();
    return (
        o === B.yV.EMBEDDED_APPLICATION &&
            U.A.getChannelHistory()
                .map((e) => L.A.getChannel(e))
                .filter(O.Vq)
                .filter((e) => e.type === k.rbe.GUILD_TEXT)
                .filter((e) => P.A.can(k.xBc.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => r.add(e.id)),
        (0, D.Us)({
            query: e,
            omitUserIds: H,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: r,
            inviteTargetType: o,
        })
    );
}
function Y(e) {
    (K = e),
        (q = new Map()),
        e.forEach((e, t) => {
            q.set(e, { index: t });
        });
}
class $ extends x.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(L.A, P.A, U.A, F.A, V.A);
    }
    getInviteSuggestionRows() {
        return K;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return Q;
    }
    getSelectedInviteMetadata(e) {
        let t = q.get(e),
            n = V.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: K.length,
                numAffinityConnections: n.length,
                isFiltered: l,
            };
    }
}
let J = new $(R.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (a = null != u ? n : null),
            (s = u),
            (r = d),
            (o = c),
            (H = new Set([
                ...t,
                ...F.A.getBlockedOrIgnoredIDs(),
                ...(0, D.Uo)({ channel: s, applicationId: r, inviteTargetType: c }),
            ])),
            (l = !1);
        let { rows: g, counts: h } = z("");
        Y(g), (Q = h), (i = K.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        l = "" !== t;
        let { rows: n } = z(t);
        n.sort(W), Y(n);
    },
});
var Z = n(475743),
    X = n(793574),
    ee = n(688810),
    et = n(429913),
    en = n(148719),
    ei = n(47167),
    el = n(713654),
    ea = n(834757),
    es = n(600975);
let er = (0, es.C)({
    kind: "guild",
    id: "2023-02_guest_voice_invites",
    label: "Guest Voice Invites",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Allow creation of guest voice invites", config: { enabled: !0 } }],
});
var eo = n(446600),
    eu = n(164891),
    ed = n(260509),
    ec = n(616356),
    eg = n(963307),
    eh = n(808728),
    eA = n(958590),
    ep = n(290863),
    em = n(309010),
    eI = n(287809),
    ex = n(607567),
    ev = n(174459),
    eS = n(702841),
    ey = n(71393);
let ef = D.Ay.INVITE_OPTIONS_7_DAYS.value,
    eE = (0, es.C)({
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
    e_ = (0, es.C)({
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
var eC = n(842241),
    eb = n(279208),
    eT = n(34457),
    eM = n(317525),
    eN = n(488926),
    ej = n(545442),
    eR = n(890497),
    ew = n(243721),
    eG = n(375708),
    eU = n(372996);
let eV = D.Ay.getMaxUsesOptions;
function eO(e) {
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
            isRoleAssignmentEnabled: A,
            assignableRoles: I,
            selectedRoleIds: x,
            onToggleRole: v,
        } = e,
        S = D.Ay.getMaxAgeOptionByValue(i),
        y = eV.find((e) => e.value === l),
        f = d.useMemo(
            () =>
                I.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, u.jsx)(ej.W, {
                            color: e.colorString ?? k.TpD,
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
        className: eU.z1,
        children: [
            (0, u.jsx)(eR.Z, {
                label: eG.intl.string(eG.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: S?.value ?? n[0].value,
                onSelectionChange: r,
                selectionMode: "single",
            }),
            (0, u.jsx)(eR.Z, {
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
                I.length > 0 &&
                (0, u.jsx)(eR.Z, {
                    label: eG.intl.string(eG.t.rPYJxL),
                    placeholder: eG.intl.string(eG.t["/djIh7"]),
                    options: f,
                    value: Array.from(x),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: a,
                }),
            !t &&
                (0, u.jsx)(ew.d, {
                    checked: a,
                    onChange: (e) => s(e),
                    description: eG.intl.string(eG.t.UN5IRX),
                    label: eG.intl.string(eG.t["wE+9dr"]),
                    disabled: x.size > 0,
                }),
            c &&
                (0, u.jsx)(ew.d, {
                    checked: (0, m.Lt)(g, p.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, m.lA)(g, p.Q.IS_GUEST_INVITE, e)),
                    description: eG.intl.string(eG.t["/FeTK6"]),
                    label: eG.intl.string(eG.t.siexRS),
                }),
        ],
    });
}
function eD(e) {
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
            assignableRoles: A,
            onToggleRole: p,
        } = e,
        { maxAgeOptions: m, maxAge: x, maxUses: v, temporary: S, flags: y, roleIds: f } = n;
    return (0, u.jsx)(I.Modal, {
        transitionState: g,
        onClose: c,
        title: eG.intl.string(eG.t.Atdlyu),
        actions: [
            { variant: "secondary", text: eG.intl.string(eG.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: eG.intl.string(eG.t.pz1lRG),
                onClick: () => {
                    l(), t();
                },
            },
        ],
        children: (0, u.jsx)(eO, {
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
            inviteFlags: y,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            selectedRoleIds: f,
            onToggleRole: p,
        }),
    });
}
var eL = n(747007),
    eP = n(503698),
    eF = n.n(eP),
    ek = n(935154),
    eB = n(778712),
    eH = n(97808),
    eK = n(821609),
    eq = n(774300),
    eQ = n(566903),
    eW = n(714114),
    ez = n(864436),
    eY = n(835072),
    e$ = n(198052),
    eJ = n(85448),
    eZ = n(571694),
    eX = n(10862),
    e0 = n(408278),
    e1 = n(562153),
    e2 = n(135635);
function e4(e) {
    let { user: t, channel: n, location: i } = e,
        l = (0, x.bG)([em.Ay], () => em.Ay.getVoiceChannelId() === n.id),
        a = (0, e1.tx)(n.guild_id, n.id, t),
        {
            icon: s,
            iconColor: r,
            tooltipText: o,
            disabled: d,
            shouldHideButton: c,
            onClick: g,
        } = (0, e2.A)({ user: t, channel: n, location: i });
    return !l || c
        ? null
        : (0, u.jsx)(b.m, {
              text: o,
              children: (0, u.jsx)("div", {
                  children: (0, u.jsx)(e0.K, {
                      variant: "icon-only",
                      icon: () => (0, u.jsx)(s, { size: "sm", color: r }),
                      "aria-label": eG.intl.formatToPlainString(eG.t["3IPBG1"], { username: a }),
                      size: "sm",
                      onClick: g,
                      disabled: d,
                  }),
              }),
          });
}
var e3 = n(486020),
    e7 = n(240248),
    e8 = n(427262),
    e6 = n(806931),
    e9 = n(87617);
function e5(e, t) {
    if (null != e) return { suggestionData: J.getSelectedInviteMetadata(e), source: t };
}
let te = d.memo(
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
            [h, A] = d.useState(!1),
            [p, m] = d.useState(!1),
            I = d.useId(),
            v = `invite-row-name-${I}`,
            S = `invite-row-button-${I}`,
            f = d.useRef(null),
            E = d.useRef(!1);
        d.useEffect(() => {
            if (p && !E.current) {
                let e = document.activeElement;
                (null == e || e === document.body) && f.current?.focus();
            }
            E.current = p;
        }, [p]);
        let _ = (0, x.bG)([ey.A], () => ey.A.getGuild(i?.guild_id)),
            {
                status: C,
                isMobileOnline: b,
                activities: T,
            } = (0, x.cf)(
                [ep.A],
                () =>
                    null == n
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: ep.A.getStatus(n.id, g),
                              isMobileOnline: ep.A.isMobileOnline(n.id),
                              activities: ep.A.getActivities(n.id, g),
                          },
                [n, g],
            ),
            { activityStatusText: M, activityStatusIcon: N } = d.useMemo(() => {
                if (null == T) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = T.find((e) => e.type !== k.$pd.CUSTOM_STATUS && e.type !== k.$pd.HANG_STATUS);
                return { activityStatusText: (0, eQ.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eY.f)(e) };
            }, [T]),
            { voiceChannel: j } = (0, eW.Ay)({ userId: n?.id }),
            R = (0, ei.Ay)(j),
            w = (0, x.bG)([e$.A], () => (null != c && null != n ? e$.A.getParticipant(c.id, n.id) : null)),
            G = o && null != w && w.type === e6.lp.USER && w.ringing,
            U = (0, ek.S3)(k.clD.ONLINE),
            V = d.useCallback(() => {
                null != l &&
                    (null != i
                        ? (A(!0),
                          eq.A.enqueue(
                              {
                                  type: eq.F.GROUP_DM,
                                  channel: i,
                                  inviteKey: l,
                                  location: a,
                                  inviteAnalyticsMetadata: e5(s, r),
                              },
                              (e) => {
                                  A(!1), m(e);
                              },
                          ))
                        : null != n &&
                          (A(!0),
                          eq.A.enqueue(
                              {
                                  type: eq.F.USER,
                                  user: n,
                                  inviteKey: l,
                                  location: a,
                                  inviteAnalyticsMetadata: e5(s, r),
                              },
                              (e) => {
                                  A(!1), m(e);
                              },
                          )));
            }, [l, i, n, a, s, r]),
            O = e8.Ay.getName(n),
            D = null != n ? F.A.getNickname(n.id) : null,
            L = null != i ? (0, ei.m1)(i, eI.default, F.A) : null,
            P = null != n ? n.getAvatarURL(i?.guild_id, 32) : null,
            B = null != i ? (0, eZ.Y)(i) : null,
            H =
                null != _ && null != i && null == B
                    ? e3.Ay.getGuildIconURL({ id: i.guild_id, icon: _.icon, size: 32 })
                    : null,
            K = C !== k.clD.OFFLINE ? C : void 0,
            q = P ?? B ?? H,
            Q = O ?? L ?? void 0,
            W = null != _ && null == _.icon ? (0, e7.oN)(_.name) : null,
            z = null != q && null != Q;
        null != n && (t = D ?? O);
        let Y = e8.Ay.getUserTag(n, { decoration: "never" }),
            $ = null != t || null != i,
            J = (0, u.jsx)(eK.$, {
                id: S,
                variant: "secondary",
                text: p ? eG.intl.string(eG.t.dVT149) : eG.intl.string(eG.t.jYnGPG),
                "aria-labelledby": $ ? `${S} ${v}` : void 0,
                size: "sm",
                loading: h,
                onClick: V,
                disabled: p,
            }),
            Z = null != M.text,
            X = null != j && null != R,
            ee = X || Z || null != n;
        return (0, u.jsxs)("div", {
            ref: f,
            tabIndex: -1,
            className: e9.Og,
            children: [
                (0, u.jsxs)("div", {
                    className: e9.mQ,
                    children: [
                        z
                            ? G
                                ? (0, u.jsx)(eJ.Ay, { size: eB._3.SIZE_32, ringing: G, src: q, className: e9.hO })
                                : (0, u.jsx)(eH.eu, {
                                      src: q,
                                      "aria-label": Q,
                                      size: eB._3.SIZE_32,
                                      className: e9.hO,
                                      status: null != n ? K : void 0,
                                      isMobile: null != n ? b : void 0,
                                  })
                            : (0, u.jsx)(y.E, {
                                  variant: "text-md/medium",
                                  className: e9.q9,
                                  "aria-hidden": !0,
                                  children: W,
                              }),
                        (0, u.jsxs)("div", {
                            className: eF()(e9.BT, { [e9.DF]: G }),
                            children: [
                                (0, u.jsxs)(y.E, {
                                    id: v,
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [t, null != i ? (0, ei.m1)(i, eI.default, F.A, !0) : null],
                                }),
                                ee &&
                                    (0, u.jsxs)("div", {
                                        className: eF()(e9.eq, { [e9.DF]: G }),
                                        children: [
                                            X
                                                ? (0, u.jsx)(eX.A, {
                                                      size: "custom",
                                                      color: U,
                                                      channel: j,
                                                      className: e9.j8,
                                                  })
                                                : null != N
                                                  ? (0, u.jsx)(ez.A, { icon: N, className: e9.j8 })
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
                                                children: G && ` \u{2022} ${eG.intl.string(eG.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, u.jsxs)("div", {
                    className: e9.t$,
                    children: [
                        o && null != n && null != c && (0, u.jsx)(e4, { user: n, channel: c, location: "InviteRow" }),
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
var tt = n(746080),
    tn = n(440155);
let { INVITE_OPTIONS_FOREVER: ti, INVITE_OPTIONS_7_DAYS: tl, INVITE_OPTIONS_UNLIMITED: ta } = D.Ay;
class ts extends d.PureComponent {
    _scroller = null;
    _headerId = A().uniqueId();
    static defaultProps = { analyticsLocation: k.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: tl.value };
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
                        target_application_id: u?.id,
                        temporary: I,
                        flags: x,
                    },
                    i,
                ).catch((e) => A({ networkError: e }));
        }
        if (
            (g &&
                ev.default.track(k.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = ec.A.getStreamForUser(s, n.id),
                t = (0, ea.Ee)(e, ep.A);
            ev.default.track(k.HAw.OPEN_MODAL, {
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
                ev.default.track(k.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: a });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, m.Lt)(t.flags, p.Q.IS_GUEST_INVITE) && null != e && j.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            a = l ? t : (e ?? t);
        return null == a ? a : (0, eC.WU)({ baseCode: a, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(B.QR.SETTINGS);
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
        return (0, en.A)(e)
            ? (0, u.jsxs)("div", {
                  className: e9.UW,
                  children: [
                      (0, u.jsx)(S.E, {
                          size: "custom",
                          className: e9.QW,
                          color: v.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, u.jsx)(y.E, {
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
            { guild: n, guildScheduledEvent: i, streamUserId: l, application: a, inviteChannel: s } = this.props;
        if (
            ((e =
                null != l
                    ? eG.intl.string(eG.t["6VQaqd"])
                    : null != a
                      ? eG.intl.formatToPlainString(eG.t.ZdK3dW, { applicationName: a.name })
                      : null != i
                        ? eG.intl.string(eG.t.JKV4FL)
                        : s?.isGuildStageVoice()
                          ? eG.intl.string(eG.t.zTrsH0)
                          : eG.intl.formatToPlainString(eG.t.NvVBJU, { name: n.name })),
            null != s)
        ) {
            let e = (0, el.gU)(s, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eG.intl.string(eG.t["/YzI63"]);
                t = eG.intl.format(eG.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, u.jsxs)("span", { children: [(0, u.jsx)(e, { className: e9.p }), t] }, n),
                });
            }
        }
        return n.features.has(k.GuildFeatures.HUB)
            ? { title: eG.intl.string(eG.t.WhR38i), subtitle: eG.intl.string(eG.t.Ed4BMs) }
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
                        (0, u.jsx)(f.I, {
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: eG.intl.string(eG.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(k.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: e9.Iq,
                          children: (0, u.jsx)(E.SG, { children: eG.intl.string(eG.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, u.jsx)("div", {
                            className: e9.Iq,
                            children: (0, u.jsx)(E.SG, { children: eG.intl.string(eG.t.hzPwGG) }),
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
            case D.OK.CHANNEL:
            case D.OK.GROUP_DM:
            case D.OK.DM:
            case D.OK.FRIEND:
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
            A = this.getSectionVisibility(t);
        if (null != l && !A) return null;
        switch (g.type) {
            case D.OK.GROUP_DM:
            case D.OK.CHANNEL:
                return (0, u.jsx)(
                    te,
                    { row: g, channel: g.item, inviteKey: c, location: a, source: s, guildId: d.id },
                    h,
                );
            case D.OK.DM:
            case D.OK.FRIEND:
                return (0, u.jsx)(
                    te,
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
        let i = 0 === t ? eG.intl.string(eG.t.y29JXs) : eG.intl.string(eG.t.Sd8Ixw),
            l = this.getSectionVisibility(t);
        return (0, u.jsx)(tr, {
            section: t,
            heading: i,
            isOpen: l,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let l = (0, eb.A)(this.getInviteKey() ?? ""),
            a = eI.default.getCurrentUser();
        g()(null != a, "InstantInviteModal: user cannot be undefined");
        let s = (0, ed.bM)(e, a) ? eG.intl.string(eG.t.HFbByJ) : eG.intl.string(eG.t.ueBhA9);
        return (
            null != n ? (s = eG.intl.string(eG.t.CXpS1I)) : null != i && (s = eG.intl.string(eG.t.ueCrHB)),
            {
                bodyContent: (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(y.E, { className: e9.Sv, variant: "text-sm/normal", children: s }),
                        (0, u.jsx)(eL.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: l }),
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
            d = (0, eb.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eG.intl.string(eG.t.MLkj7N);
            null != i
                ? (e = eG.intl.string(eG.t["1b9neu"]))
                : null != l
                  ? (e = eG.intl.string(eG.t.iI1gMg))
                  : null != n
                    ? (e = eG.intl.string(eG.t.KaWCyD))
                    : a?.isGuildStageVoice() && (e = eG.intl.string(eG.t["2frWa3"])),
                (o = (0, u.jsx)(_.D, {
                    label: e,
                    children: (0, u.jsx)(eL.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: d,
                    }),
                }));
        } else
            e ||
                (o = (0, u.jsxs)("div", {
                    className: e9.xF,
                    children: [
                        (0, u.jsx)(C.S, {
                            checked: r === ti.value,
                            onChange: this.handleToggleMaxAge,
                            label: eG.intl.string(eG.t["QKJru/"]),
                        }),
                        (0, u.jsx)(b.m, {
                            text: eG.intl.string(eG.t.Yx4IiC),
                            children: (0, u.jsx)(T.D, {
                                onClick: this.openSettings,
                                className: tn.or,
                                "aria-label": eG.intl.string(eG.t.Yx4IiC),
                                children: (0, u.jsx)(M.SettingsIcon, {
                                    size: "sm",
                                    color: v.A.unsafe_rawColors.PRIMARY_400.css,
                                }),
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
            case B.QR.MAIN: {
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
            case B.QR.SETTINGS:
                return (0, u.jsx)(eD, {
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
function tr(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: l } = e;
    return (0, u.jsxs)(T.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: e9.uP,
        onClick: () => l(t),
        "aria-expanded": i,
        children: [
            (0, u.jsx)(y.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, u.jsx)(N.a, { size: "md", color: "currentColor", className: e9.ep }),
        ],
    });
}
let to = d.forwardRef(function (e, t) {
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
            page: A,
            analyticsLocation: I,
        } = e,
        { analyticsLocations: v } = (0, ee.Ay)(X.A.INSTANT_INVITE_MODAL),
        S = (0, x.bG)([em.Ay, L.A, eh.Ay, P.A], () => {
            if (null != l) return l;
            let e = em.Ay.getChannelId(),
                t = null == e || (0, tt.jq)(e) ? void 0 : L.A.getChannel(e);
            return (
                t?.isThread() && (t = L.A.getChannel(t.parent_id)),
                t?.guild_id === a.id && null != t && P.A.can(k.xBc.VIEW_CHANNEL, t)
                    ? t
                    : eh.Ay.getDefaultChannel(a.id, !0, k.xBc.CREATE_INSTANT_INVITE)
            );
        }, [l, a.id]),
        y = (0, ei.Ay)(S),
        f = null;
    null != o ? (f = B.yV.STREAM) : null != c && (f = B.yV.EMBEDDED_APPLICATION);
    let E = null != l ? l.getGuildId() : null != a ? a.id : null,
        _ = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? k.dJq,
                l = eE.useExperiment({ guildId: i, location: n }),
                a = e_.useExperiment({ guildId: i, location: n }),
                s = l?.defaultMaxAge !== ef ? l : a,
                r = (0, eS.bG)([ey.A], () => ey.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(k.GuildFeatures.HUB)) return D.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? ef;
                      let i = t?.id ?? k.dJq,
                          l = eE.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== ef
                          ? l.defaultMaxAge
                          : (e_.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? ef);
                  })({ guild: r, experimentConfig: s });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        C = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? k.dJq,
                l = eE.useExperiment({ guildId: i, location: n }),
                a = e_.useExperiment({ guildId: i, location: n }),
                s = l?.defaultMaxAge !== ef ? l : a;
            return D.Ay.getMaxAgeOptions({ includeExperimentalValues: [s?.defaultMaxAge] });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        b = (0, x.bG)([eA.A], () => {
            let e = null != S ? S.id : null;
            return null == e ? null : eA.A.getInvite(e, { targetType: f, targetUserId: o, targetApplicationId: c });
        }, [S, f, o, c]),
        [T, M, N, G] = (0, x.yK)(
            [J, ex.Ay],
            () => [
                J.getInviteSuggestionRows(),
                J.getTotalSuggestionsCount() >= 1,
                J.getInitialCounts(),
                null != l && null != S ? ex.Ay.getVoiceStatesForChannel(S) : null,
            ],
            [S, l],
        ),
        U = d.useMemo(() => {
            let e = null != S ? S.id : null;
            return null != E ? eg.Ay.getProps(E, e) : void 0;
        }, [S, E]),
        V = (0, x.bG)([P.A], () => null != S && P.A.can(k.xBc.CREATE_INSTANT_INVITE, S), [S]),
        O = null === b || !V,
        F = S?.type === k.rbe.GUILD_VOICE,
        H = (0, en.A)(S),
        K = d.useMemo(() => {
            let e = new Set();
            return (
                F || null != o
                    ? G?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != E &&
                      null != U &&
                      f !== B.yV.EMBEDDED_APPLICATION &&
                      U.rows.forEach((t) => {
                          t.type === eg.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [F, U, o, G, E, f]),
        q = l?.id,
        Q = (0, x.bG)([eo.A], () => eo.A.getStageInstanceByChannel(q), [q]);
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
        })({ omitUserIds: K, guild: a, channel: l, applicationId: c, inviteTargetType: f }).catch(k.FXj);
    }, [K, l, a, c, f]);
    let [W] = (0, et.A)(null != c ? [c] : []),
        z = null != b ? b.code : void 0,
        Y = b?.maxAge,
        $ = b?.maxUses,
        el = b?.temporary,
        ea = a.vanityURLCode,
        es = null != ea && ea.length > 0,
        ed = !V && !S?.isGuildVocal() && es,
        ec = b?.flags ?? 0;
    V || Q?.invite_code == null || (z = Q.invite_code);
    let ep = d.useMemo(() => (F ? (0, D.Gv)(T, E) : null), [F, T, E]),
        [ev, eC] = d.useState({
            query: "",
            maxAgeOptions: C,
            maxAge: Y ?? _ ?? ef,
            savedMaxAge: Y === ti.value ? (_ ?? tl.value) : ti.value,
            maxUses: null != $ && 0 !== $ ? $ : ta.value,
            temporary: el ?? !1,
            networkError: void 0,
            showVanityURL: ed,
            currentPage: A ?? B.QR.MAIN,
            lastPage: void 0,
            flags: ec,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eb = d.useCallback((e) => {
            eC((t) => ({ ...t, ...e }));
        }, []),
        ej = d.useCallback(
            (e) => {
                eb({ currentPage: e, lastPage: ev.currentPage });
            },
            [ev.currentPage, eb],
        ),
        eR = F && !ed && !O && !H,
        { enabled: ew } = er.useExperiment({ guildId: a?.id, location: "acc417_3" }, { autoTrackExposure: eR }),
        { canCreateApplicationBypassInvites: eG, isManualApprovalGuild: eU } =
            ((n = (0, x.bG)([P.A], () => P.A.can(k.xBc.KICK_MEMBERS, a), [a])),
            {
                canCreateApplicationBypassInvites:
                    (i = !!(
                        a?.features.has(k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        a?.features.has(k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && n,
                isManualApprovalGuild: i,
            }),
        eV = (ew && eR) || eU,
        { maxAge: eO, maxUses: eD, temporary: eL, savedMaxAge: eP, flags: eF, roleIds: ek } = ev,
        eB = !eV && eL,
        eH = (function (e) {
            let {
                sortedRoles: t,
                currentUser: n,
                canManageRoles: i,
            } = (0, x.cf)(
                [eM.A, eI.default, P.A],
                () => ({
                    sortedRoles: null != e ? eM.A.getSortedRoles(e.id) : [],
                    currentUser: eI.default.getCurrentUser(),
                    canManageRoles: null != e && P.A.can(k.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return d.useMemo(() => {
                if (null == e || null == n || !i) return [];
                let l = eN.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eT.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!eN.wO(e, n.id, l, t),
                );
            }, [e, n, i, t]);
        })(a),
        eK = eH.length > 0,
        eq = d.useCallback(
            (e) => {
                let t = new Set(ek);
                t.delete(e) || t.add(e), eb({ roleIds: t });
            },
            [ek, eb],
        ),
        eQ = d.useCallback(() => {
            let { currentPage: e, lastPage: t } = ev;
            e === B.QR.SETTINGS && null != t ? ej(t) : h();
        }, [ej, ev, h]),
        eW = d.useCallback(() => {
            let e = S?.id;
            0 === eD && 0 === eO && !eB && ed
                ? eb({ networkError: void 0, showVanityURL: !0 })
                : V &&
                  null != e &&
                  (eb({ networkError: void 0, showVanityURL: !1 }),
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
                      s,
                  ).catch((e) => eb({ networkError: e, showVanityURL: ed }))),
                eO !== ti.value && eP !== ti.value && eb({ savedMaxAge: ti.value });
        }, [ed, V, S, s, W?.id, f, o, eO, eD, eB, eb, eP, eF, ek]),
        ez = (0, Z.Ay)(S),
        eY = (0, Z.Ay)((0, m.Lt)(eF, p.Q.IS_APPLICATION_BYPASS)),
        e$ = null != ez && ez !== S,
        eJ = null != eY && eY !== (0, m.Lt)(eF, p.Q.IS_APPLICATION_BYPASS);
    d.useEffect(() => {
        !ed && (e$ || eJ) && eW();
    }, [eW, e$, eJ, ed]);
    let { enabled: eZ } = eu.A.useExperiment({ guildId: a?.id, location: "InstantInvite" });
    return (0, u.jsx)(ee.f5, {
        value: v,
        children: (0, u.jsx)(ts, {
            ref: t,
            canCreateInvites: V,
            noInvitesAvailable: O,
            inviteChannel: S,
            inviteChannelName: y,
            guild: a,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: ea,
            targetType: f,
            targetUserId: o,
            application: W,
            rows: T,
            sections: ep,
            showFriends: M,
            initialCounts: N,
            code: z,
            source: s,
            analyticsLocations: v,
            analyticsLocation: I,
            transitionState: g,
            onClose: h,
            canShowVanityURL: ed,
            isGuestInviteCreationToggleEnabled: ew && eR,
            shouldHideTemporaryInviteToggle: eV,
            modalState: { ...ev, temporary: eB },
            setModalState: eb,
            changePage: ej,
            onGenerateNewLink: eW,
            handleDone: eQ,
            isApplicationBypassToggleEnabled: eG && !O,
            isRoleAssignmentEnabled: eK,
            assignableRoles: eH,
            onToggleRole: eq,
            ringingEnabled: eZ,
        }),
    });
});
function tu(e) {
    return (0, u.jsx)(to, { ...e });
}
