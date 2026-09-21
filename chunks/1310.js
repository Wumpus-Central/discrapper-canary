let i, l, s, a, r, o;
(n.d(t, { default: () => tg }), n(938796));
var u = n(477900),
    d = n(582128),
    c = n(284009),
    g = n.n(c),
    h = n(435558),
    p = n.n(h),
    A = n(821418),
    m = n(665260),
    I = n(189213),
    x = n(17928),
    v = n(661531),
    S = n(695366),
    f = n(834730),
    y = n(683438),
    E = n(396478),
    _ = n(452027),
    C = n(150934),
    b = n(866665),
    T = n(939249),
    M = n(625903),
    N = n(847374),
    R = n(376728),
    w = n(228366),
    j = n(219271),
    G = n(989133),
    O = n(174768),
    U = n(427358),
    V = n(403362),
    D = n(735547),
    L = n(734057),
    P = n(860071),
    F = n(696451),
    k = n(576705),
    B = n(994500),
    H = n(652215),
    K = n(172799);
let q = new Set(),
    z = [],
    Q = new Map(),
    W = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 },
    Y = "";
function $(e, t) {
    return null == e.score || null == t.score ? 0 : (0, G.A)({ score: e.score }, { score: t.score });
}
function J() {
    return null == s || o === K.yV.EMBEDDED_APPLICATION || a?.type === H.rbe.GUILD_VOICE ? null : s.id;
}
function Z() {
    var e;
    l = "" !== Y;
    let { rows: t, counts: n } = (function (e) {
        let t = new Set(),
            n = J(),
            i = (0, D.oW)(q, n);
        for (let e of (null == i || B.A.isBlockedOrIgnored(i.id) || t.add(i.id), U.A.getUserAffinities()))
            t.add(e.otherUserId);
        let l = new Set();
        return (
            o === K.yV.EMBEDDED_APPLICATION &&
                O.A.getChannelHistory()
                    .map((e) => L.A.getChannel(e))
                    .filter(V.Vq)
                    .filter((e) => e.type === H.rbe.GUILD_TEXT)
                    .filter((e) => k.A.can(H.xBc.SEND_MESSAGES, e))
                    .slice(0, 3)
                    .forEach((e) => l.add(e.id)),
            (0, D.Us)({
                query: e,
                omitUserIds: q,
                suggestedUserIds: t,
                maxRowsWithoutQuery: 100,
                omitGuildId: n,
                suggestedChannelIds: l,
                inviteTargetType: o,
            })
        );
    })(Y);
    return (
        l && t.sort($),
        (z = e = t),
        (Q = new Map()),
        e.forEach((e, t) => {
            Q.set(e, { index: t });
        }),
        (function (e) {
            let t = J();
            if (null != t)
                for (let n of e) (n.type === D.OK.DM || n.type === D.OK.FRIEND) && P.A.requestMember(t, n.item.id);
        })(t),
        n
    );
}
class X extends x.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(L.A, P.A, F.Ay, k.A, O.A, B.A, U.A);
    }
    getInviteSuggestionRows() {
        return z;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return W;
    }
    getSelectedInviteMetadata(e) {
        let t = Q.get(e),
            n = U.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: z.length,
                numAffinityConnections: n.length,
                isFiltered: l,
            };
    }
}
let ee = new X(w.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: l, applicationId: u, inviteTargetType: d } = e;
        ((s = n),
            (a = l),
            (r = u),
            (o = d),
            (Y = ""),
            (q = new Set([
                ...t,
                ...B.A.getBlockedOrIgnoredIDs(),
                ...(0, D.Uo)({ channel: a, applicationId: r, inviteTargetType: d }),
            ])),
            (W = Z()),
            (i = z.length));
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        ((Y = t), Z());
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = J();
        if (null == n) return !1;
        let i = new Set(z.map((e) => e.item.id));
        if (!t.some((e) => e.guildId === n && e.members.some((e) => i.has(e.user.id)))) return !1;
        Z();
    },
});
var et = n(475743),
    en = n(793574),
    ei = n(688810),
    el = n(429913),
    es = n(148719),
    ea = n(47167),
    er = n(713654),
    eo = n(834757),
    eu = n(600975);
let ed = (0, eu.C)({
    kind: "guild",
    id: "2023-02_guest_voice_invites",
    label: "Guest Voice Invites",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Allow creation of guest voice invites", config: { enabled: !0 } }],
});
var ec = n(446600),
    eg = n(164891),
    eh = n(260509),
    ep = n(616356),
    eA = n(963307),
    em = n(808728),
    eI = n(958590),
    ex = n(290863),
    ev = n(309010),
    eS = n(287809),
    ef = n(607567),
    ey = n(174459),
    eE = n(702841),
    e_ = n(71393);
let eC = D.Ay.INVITE_OPTIONS_7_DAYS.value,
    eb = (0, eu.C)({
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
    eT = (0, eu.C)({
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
var eM = n(842241),
    eN = n(279208),
    eR = n(34457),
    ew = n(317525),
    ej = n(488926),
    eG = n(545442),
    eO = n(890497),
    eU = n(193249),
    eV = n(375708),
    eD = n(372996);
let eL = D.Ay.getMaxUsesOptions;
function eP(e) {
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
            isRoleAssignmentEnabled: p,
            assignableRoles: I,
            selectedRoleIds: x,
            onToggleRole: v,
        } = e,
        S = D.Ay.getMaxAgeOptionByValue(i),
        f = eL.find((e) => e.value === l),
        y = d.useMemo(
            () =>
                I.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, u.jsx)(eG.W, {
                            color: e.colorString ?? H.TpD,
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
        className: eD.z1,
        children: [
            (0, u.jsx)(eO.Z, {
                label: eV.intl.string(eV.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: S?.value ?? n[0].value,
                onSelectionChange: r,
                selectionMode: "single",
            }),
            (0, u.jsx)(eO.Z, {
                label: eV.intl.string(eV.t.jDqWHW),
                options: eL,
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
                (0, u.jsx)(eO.Z, {
                    label: eV.intl.string(eV.t.rPYJxL),
                    placeholder: eV.intl.string(eV.t["/djIh7"]),
                    options: y,
                    value: Array.from(x),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: s,
                }),
            !t &&
                (0, u.jsx)(eU.d, {
                    checked: s,
                    onChange: (e) => a(e),
                    description: eV.intl.string(eV.t.UN5IRX),
                    label: eV.intl.string(eV.t["wE+9dr"]),
                    disabled: x.size > 0,
                }),
            c &&
                (0, u.jsx)(eU.d, {
                    checked: (0, m.Lt)(g, A.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, m.lA)(g, A.Q.IS_GUEST_INVITE, e)),
                    description: eV.intl.string(eV.t["/FeTK6"]),
                    label: eV.intl.string(eV.t.siexRS),
                }),
        ],
    });
}
function eF(e) {
    let {
            handleDone: t,
            modalState: n,
            shouldHideTemporaryInviteToggle: i,
            onGenerateNewLink: l,
            onToggleTemporary: s,
            onSelectMaxAge: a,
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
        title: eV.intl.string(eV.t.Atdlyu),
        actions: [
            { variant: "secondary", text: eV.intl.string(eV.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: eV.intl.string(eV.t.pz1lRG),
                onClick: () => {
                    (l(), t());
                },
            },
        ],
        children: (0, u.jsx)(eP, {
            shouldHideTemporaryInviteToggle: i,
            maxAgeOptions: m,
            maxAge: x,
            maxUses: v,
            temporary: S,
            onToggleTemporary: s,
            onSelectMaxAge: a,
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
var ek = n(747007),
    eB = n(503698),
    eH = n.n(eB),
    eK = n(935154),
    eq = n(778712),
    ez = n(97808),
    eQ = n(821609),
    eW = n(774300),
    eY = n(566903),
    e$ = n(714114),
    eJ = n(864436),
    eZ = n(835072),
    eX = n(198052),
    e0 = n(85448),
    e1 = n(571694),
    e2 = n(10862),
    e4 = n(408278),
    e3 = n(562153),
    e7 = n(135635);
function e6(e) {
    let { user: t, channel: n, location: i } = e,
        l = (0, x.bG)([ev.Ay], () => ev.Ay.getVoiceChannelId() === n.id),
        s = (0, e3.tx)(n.guild_id, n.id, t),
        {
            icon: a,
            iconColor: r,
            tooltipText: o,
            disabled: d,
            shouldHideButton: c,
            onClick: g,
        } = (0, e7.A)({ user: t, channel: n, location: i });
    return !l || c
        ? null
        : (0, u.jsx)(b.m, {
              text: o,
              children: (0, u.jsx)("div", {
                  children: (0, u.jsx)(e4.K, {
                      variant: "icon-only",
                      icon: () => (0, u.jsx)(a, { size: "sm", color: r }),
                      "aria-label": eV.intl.formatToPlainString(eV.t["3IPBG1"], { username: s }),
                      size: "sm",
                      onClick: g,
                      disabled: d,
                  }),
              }),
          });
}
var e8 = n(486020),
    e9 = n(240248),
    e5 = n(427262),
    te = n(806931),
    tt = n(87617);
function tn(e, t) {
    if (null != e) return { suggestionData: ee.getSelectedInviteMetadata(e), source: t };
}
let ti = d.memo(
    function (e) {
        var t;
        let n,
            {
                user: i,
                channel: l,
                inviteKey: s,
                location: a,
                row: r,
                source: o,
                ringingEnabled: c,
                inviteChannel: g,
                guildId: h,
            } = e,
            [p, A] = d.useState(!1),
            [m, I] = d.useState(!1),
            v = d.useId(),
            S = `invite-row-name-${v}`,
            y = `invite-row-button-${v}`,
            E = d.useRef(null),
            _ = d.useRef(!1);
        d.useEffect(() => {
            if (m && !_.current) {
                let e = document.activeElement;
                (null == e || e === document.body) && E.current?.focus();
            }
            _.current = m;
        }, [m]);
        let C = (0, x.bG)([e_.A], () => e_.A.getGuild(l?.guild_id)),
            {
                status: b,
                isMobileOnline: T,
                activities: M,
            } = (0, x.cf)(
                [ex.A],
                () =>
                    null == i
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: ex.A.getStatus(i.id, h),
                              isMobileOnline: ex.A.isMobileOnline(i.id),
                              activities: ex.A.getActivities(i.id, h),
                          },
                [i, h],
            ),
            { activityStatusText: N, activityStatusIcon: R } = d.useMemo(() => {
                if (null == M) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = M.find((e) => e.type !== H.$pd.CUSTOM_STATUS && e.type !== H.$pd.HANG_STATUS);
                return { activityStatusText: (0, eY.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eZ.f)(e) };
            }, [M]),
            { voiceChannel: w } = (0, e$.Ay)({ userId: i?.id }),
            j = (0, ea.Ay)(w),
            G = (0, x.bG)([eX.A], () => (null != g && null != i ? eX.A.getParticipant(g.id, i.id) : null)),
            O = c && null != G && G.type === te.lp.USER && G.ringing,
            U = (0, eK.S3)(H.clD.ONLINE),
            V = d.useCallback(() => {
                null != s &&
                    (null != l
                        ? (A(!0),
                          eW.A.enqueue(
                              {
                                  type: eW.F.GROUP_DM,
                                  channel: l,
                                  inviteKey: s,
                                  location: a,
                                  inviteAnalyticsMetadata: tn(r, o),
                              },
                              (e) => {
                                  (A(!1), I(e));
                              },
                          ))
                        : null != i &&
                          (A(!0),
                          eW.A.enqueue(
                              {
                                  type: eW.F.USER,
                                  user: i,
                                  inviteKey: s,
                                  location: a,
                                  inviteAnalyticsMetadata: tn(r, o),
                              },
                              (e) => {
                                  (A(!1), I(e));
                              },
                          )));
            }, [s, l, i, a, r, o]),
            L = e5.Ay.getName(i),
            P = null != i ? B.A.getNickname(i.id) : null,
            F = null != l ? (0, ea.m1)(l, eS.default, B.A) : null,
            k = null != i ? i.getAvatarURL(l?.guild_id, 32) : null,
            K = null != l ? (0, e1.Y)(l) : null,
            q =
                null != C && null != l && null == K
                    ? e8.Ay.getGuildIconURL({ id: l.guild_id, icon: C.icon, size: 32 })
                    : null,
            z = b !== H.clD.OFFLINE ? b : void 0,
            Q = k ?? K ?? q,
            W = L ?? F ?? void 0,
            Y = null != C && null == C.icon ? (0, e9.oN)(C.name) : null,
            $ = null != Q && null != W;
        null != i && (n = P ?? L);
        let J = e5.Ay.getUserTag(i, { decoration: "never" }),
            Z = null != n || null != l,
            X = null != (t = r) && (t.type === D.OK.DM || t.type === D.OK.FRIEND) && !0 === t.isGuildMember,
            ee = X
                ? (0, u.jsx)(f.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: eV.intl.string(eV.t.u1sEfz),
                  })
                : (0, u.jsx)(eQ.$, {
                      id: y,
                      variant: "secondary",
                      text: m ? eV.intl.string(eV.t.dVT149) : eV.intl.string(eV.t.jYnGPG),
                      "aria-labelledby": Z ? `${y} ${S}` : void 0,
                      size: "sm",
                      loading: p,
                      onClick: V,
                      disabled: m,
                  }),
            et = null != N.text,
            en = null != w && null != j,
            ei = en || et || null != i;
        return (0, u.jsxs)("div", {
            ref: E,
            tabIndex: -1,
            className: eH()(tt.Og, { [tt.E2]: X }),
            children: [
                (0, u.jsxs)("div", {
                    className: tt.mQ,
                    children: [
                        $
                            ? O
                                ? (0, u.jsx)(e0.Ay, { size: eq._3.SIZE_32, ringing: O, src: Q, className: tt.hO })
                                : (0, u.jsx)(ez.eu, {
                                      src: Q,
                                      "aria-label": W,
                                      size: eq._3.SIZE_32,
                                      className: tt.hO,
                                      status: null != i ? z : void 0,
                                      isMobile: null != i ? T : void 0,
                                  })
                            : (0, u.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  className: tt.q9,
                                  "aria-hidden": !0,
                                  children: Y,
                              }),
                        (0, u.jsxs)("div", {
                            className: eH()(tt.BT, { [tt.DF]: O }),
                            children: [
                                (0, u.jsxs)(f.E, {
                                    id: S,
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [n, null != l ? (0, ea.m1)(l, eS.default, B.A, !0) : null],
                                }),
                                ei &&
                                    (0, u.jsxs)("div", {
                                        className: eH()(tt.eq, { [tt.DF]: O }),
                                        children: [
                                            en
                                                ? (0, u.jsx)(e2.A, {
                                                      size: "custom",
                                                      color: U,
                                                      channel: w,
                                                      className: tt.j8,
                                                  })
                                                : null != R
                                                  ? (0, u.jsx)(eJ.A, { icon: R, className: tt.j8 })
                                                  : null,
                                            en
                                                ? (0, u.jsx)(f.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: j,
                                                  })
                                                : et
                                                  ? (0, u.jsx)(f.E, {
                                                        variant: "text-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: N.text,
                                                    })
                                                  : (0, u.jsx)(f.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: J,
                                                    }),
                                            (0, u.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: O && ` \u{2022} ${eV.intl.string(eV.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, u.jsxs)("div", {
                    className: tt.t$,
                    children: [
                        c && null != i && null != g && (0, u.jsx)(e6, { user: i, channel: g, location: "InviteRow" }),
                        ee,
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
        e.ringingEnabled === t.ringingEnabled &&
        e.row === t.row,
);
var tl = n(746080),
    ts = n(440155);
let { INVITE_OPTIONS_FOREVER: ta, INVITE_OPTIONS_7_DAYS: tr, INVITE_OPTIONS_UNLIMITED: to } = D.Ay;
class tu extends d.PureComponent {
    _scroller = null;
    _headerId = p().uniqueId();
    static defaultProps = { analyticsLocation: H.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: tr.value };
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
            (p({ networkError: void 0 }),
                R.Ay.createInvite(
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
                ).catch((e) => p({ networkError: e })));
        }
        if (
            (g &&
                ey.default.track(H.HAw.INVITE_SUGGESTION_OPENED, {
                    location: i,
                    num_suggestions: c.length,
                    num_friends: d.numFriends,
                    num_dms: d.numDms,
                    num_group_dms: d.numGroupDms,
                    guild_id: n.id,
                    application_id: u?.id,
                }),
            null != a)
        ) {
            let e = ep.A.getStreamForUser(a, n.id),
                t = (0, eo.Ee)(e, ex.A);
            ey.default.track(H.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: i,
                location: s,
                other_user_id: a,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            u?.id != null ||
                ey.default.track(H.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, m.Lt)(t.flags, A.Q.IS_GUEST_INVITE) && null != e && R.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : (e ?? t);
        return null == s ? s : (0, eM.WU)({ baseCode: s, guildScheduledEventId: n?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(K.QR.SETTINGS);
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
        ("" === e && "" !== t.query
            ? ((i.sectionVisibility = { ...t.defaultSectionVisibility }), (i.defaultSectionVisibility = {}))
            : "" !== e &&
              "" === t.query &&
              ((i.defaultSectionVisibility = { ...t.sectionVisibility }), (i.sectionVisibility = {})),
            this._scroller?.scrollTo({ to: 0 }),
            w.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e }),
            n(i));
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
        return (0, es.A)(e)
            ? (0, u.jsxs)("div", {
                  className: tt.UW,
                  children: [
                      (0, u.jsx)(S.E, {
                          size: "custom",
                          className: tt.QW,
                          color: v.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, u.jsx)(f.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: eV.intl.string(eV.t.x1SQZb),
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
                    ? eV.intl.string(eV.t["6VQaqd"])
                    : null != s
                      ? eV.intl.formatToPlainString(eV.t.ZdK3dW, { applicationName: s.name })
                      : null != i
                        ? eV.intl.string(eV.t.JKV4FL)
                        : a?.isGuildStageVoice()
                          ? eV.intl.string(eV.t.zTrsH0)
                          : eV.intl.formatToPlainString(eV.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, er.gU)(a, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eV.intl.string(eV.t["/YzI63"]);
                t = eV.intl.format(eV.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, u.jsxs)("span", { children: [(0, u.jsx)(e, { className: tt.p }), t] }, n),
                });
            }
        }
        return n.features.has(H.GuildFeatures.HUB)
            ? { title: eV.intl.string(eV.t.WhR38i), subtitle: eV.intl.string(eV.t.Ed4BMs) }
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
                        (0, u.jsx)(y.I, {
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: eV.intl.string(eV.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(H.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: tt.Iq,
                          children: (0, u.jsx)(E.SG, { children: eV.intl.string(eV.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, u.jsx)("div", {
                            className: tt.Iq,
                            children: (0, u.jsx)(E.SG, { children: eV.intl.string(eV.t.hzPwGG) }),
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
                analyticsLocation: s,
                source: a,
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
            case D.OK.GROUP_DM:
            case D.OK.CHANNEL:
                return (0, u.jsx)(
                    ti,
                    { row: g, channel: g.item, inviteKey: c, location: s, source: a, guildId: d.id },
                    h,
                );
            case D.OK.DM:
            case D.OK.FRIEND:
                return (0, u.jsx)(
                    ti,
                    {
                        row: g,
                        user: g.item,
                        inviteKey: c,
                        location: s,
                        source: a,
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
        let i = 0 === t ? eV.intl.string(eV.t.y29JXs) : eV.intl.string(eV.t.Sd8Ixw),
            l = this.getSectionVisibility(t);
        return (0, u.jsx)(td, {
            section: t,
            heading: i,
            isOpen: l,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let l = (0, eN.A)(this.getInviteKey() ?? ""),
            s = eS.default.getCurrentUser();
        g()(null != s, "InstantInviteModal: user cannot be undefined");
        let a = (0, eh.bM)(e, s) ? eV.intl.string(eV.t.HFbByJ) : eV.intl.string(eV.t.ueBhA9);
        return (
            null != n ? (a = eV.intl.string(eV.t.CXpS1I)) : null != i && (a = eV.intl.string(eV.t.ueCrHB)),
            {
                bodyContent: (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(f.E, { className: tt.Sv, variant: "text-sm/normal", children: a }),
                        (0, u.jsx)(ek.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: l }),
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
            d = (0, eN.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eV.intl.string(eV.t.MLkj7N);
            (null != i
                ? (e = eV.intl.string(eV.t["1b9neu"]))
                : null != l
                  ? (e = eV.intl.string(eV.t.iI1gMg))
                  : null != n
                    ? (e = eV.intl.string(eV.t.KaWCyD))
                    : s?.isGuildStageVoice() && (e = eV.intl.string(eV.t["2frWa3"])),
                (o = (0, u.jsx)(_.D, {
                    label: e,
                    children: (0, u.jsx)(ek.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: d,
                    }),
                })));
        } else
            e ||
                (o = (0, u.jsxs)("div", {
                    className: tt.xF,
                    children: [
                        (0, u.jsx)(C.S, {
                            checked: r === ta.value,
                            onChange: this.handleToggleMaxAge,
                            label: eV.intl.string(eV.t["QKJru/"]),
                        }),
                        (0, u.jsx)(b.m, {
                            text: eV.intl.string(eV.t.Yx4IiC),
                            children: (0, u.jsx)(T.D, {
                                onClick: this.openSettings,
                                className: ts.or,
                                "aria-label": eV.intl.string(eV.t.Yx4IiC),
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
            case K.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: l, controls: s, listProps: a } = this.getBodyContent();
                return (0, u.jsx)(I.Modal, {
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
            case K.QR.SETTINGS:
                return (0, u.jsx)(eF, {
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
function td(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: l } = e;
    return (0, u.jsxs)(T.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: tt.uP,
        onClick: () => l(t),
        "aria-expanded": i,
        children: [
            (0, u.jsx)(f.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, u.jsx)(N.a, { size: "md", color: "currentColor", className: tt.ep }),
        ],
    });
}
let tc = d.forwardRef(function (e, t) {
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
            page: p,
            analyticsLocation: I,
        } = e,
        { analyticsLocations: v } = (0, ei.Ay)(en.A.INSTANT_INVITE_MODAL),
        S = (0, x.bG)(
            [ev.Ay, L.A, em.Ay, k.A],
            () => {
                if (null != l) return l;
                let e = ev.Ay.getChannelId(),
                    t = null == e || (0, tl.jq)(e) ? void 0 : L.A.getChannel(e);
                return (
                    t?.isThread() && (t = L.A.getChannel(t.parent_id)),
                    t?.guild_id === s.id && null != t && k.A.can(H.xBc.VIEW_CHANNEL, t)
                        ? t
                        : em.Ay.getDefaultChannel(s.id, !0, H.xBc.CREATE_INSTANT_INVITE)
                );
            },
            [l, s.id],
        ),
        f = (0, ea.Ay)(S),
        y = null;
    null != o ? (y = K.yV.STREAM) : null != c && (y = K.yV.EMBEDDED_APPLICATION);
    let E = null != l ? l.getGuildId() : null != s ? s.id : null,
        _ = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? H.dJq,
                l = eb.useExperiment({ guildId: i, location: n }),
                s = eT.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== eC ? l : s,
                r = (0, eE.bG)([e_.A], () => e_.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(H.GuildFeatures.HUB)) return D.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? eC;
                      let i = t?.id ?? H.dJq,
                          l = eb.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== eC
                          ? l.defaultMaxAge
                          : (eT.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? eC);
                  })({ guild: r, experimentConfig: a });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        C = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? H.dJq,
                l = eb.useExperiment({ guildId: i, location: n }),
                s = eT.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== eC ? l : s;
            return D.Ay.getMaxAgeOptions({ includeExperimentalValues: [a?.defaultMaxAge] });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        b = (0, x.bG)(
            [eI.A],
            () => {
                let e = null != S ? S.id : null;
                return null == e ? null : eI.A.getInvite(e, { targetType: y, targetUserId: o, targetApplicationId: c });
            },
            [S, y, o, c],
        ),
        [T, M, N, G] = (0, x.yK)(
            [ee, ef.Ay],
            () => [
                ee.getInviteSuggestionRows(),
                ee.getTotalSuggestionsCount() >= 1,
                ee.getInitialCounts(),
                null != l && null != S ? ef.Ay.getVoiceStatesForChannel(S) : null,
            ],
            [S, l],
        ),
        O = d.useMemo(() => {
            let e = null != S ? S.id : null;
            return null != E ? eA.Ay.getProps(E, e) : void 0;
        }, [S, E]),
        U = (0, x.bG)([k.A], () => null != S && k.A.can(H.xBc.CREATE_INSTANT_INVITE, S), [S]),
        V = null === b || !U,
        P = S?.type === H.rbe.GUILD_VOICE,
        F = (0, es.A)(S),
        B = d.useMemo(() => {
            let e = new Set();
            return (
                P || null != o
                    ? G?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != E &&
                      null != O &&
                      y !== K.yV.EMBEDDED_APPLICATION &&
                      O.rows.forEach((t) => {
                          t.type === eA.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [P, O, o, G, E, y]),
        q = l?.id,
        z = (0, x.bG)([ec.A], () => ec.A.getStageInstanceByChannel(q), [q]);
    d.useEffect(() => {
        (function (e) {
            let { omitUserIds: t, guild: n, channel: i, applicationId: l, inviteTargetType: s } = e;
            return (0, j.u)().then(() => {
                w.h.dispatch({
                    type: "LOAD_INVITE_SUGGESTIONS",
                    omitUserIds: t ?? new Set(),
                    guild: n,
                    channel: i,
                    applicationId: l,
                    inviteTargetType: s,
                });
            });
        })({ omitUserIds: B, guild: s, channel: S, applicationId: c, inviteTargetType: y }).catch(H.FXj);
    }, [B, S, s, c, y]);
    let [Q] = (0, el.A)(null != c ? [c] : []),
        W = null != b ? b.code : void 0,
        Y = b?.maxAge,
        $ = b?.maxUses,
        J = b?.temporary,
        Z = s.vanityURLCode,
        X = null != Z && Z.length > 0,
        er = !U && !S?.isGuildVocal() && X,
        eo = b?.flags ?? 0;
    U || z?.invite_code == null || (W = z.invite_code);
    let eu = d.useMemo(() => (P ? (0, D.Gv)(T, E) : null), [P, T, E]),
        [eh, ep] = d.useState({
            query: "",
            maxAgeOptions: C,
            maxAge: Y ?? _ ?? eC,
            savedMaxAge: Y === ta.value ? (_ ?? tr.value) : ta.value,
            maxUses: null != $ && 0 !== $ ? $ : to.value,
            temporary: J ?? !1,
            networkError: void 0,
            showVanityURL: er,
            currentPage: p ?? K.QR.MAIN,
            lastPage: void 0,
            flags: eo,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        ex = d.useCallback((e) => {
            ep((t) => ({ ...t, ...e }));
        }, []),
        ey = d.useCallback(
            (e) => {
                ex({ currentPage: e, lastPage: eh.currentPage });
            },
            [eh.currentPage, ex],
        ),
        eM = P && !er && !V && !F,
        { enabled: eN } = ed.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eM }),
        { canCreateApplicationBypassInvites: eG, isManualApprovalGuild: eO } =
            ((n = (0, x.bG)([k.A], () => k.A.can(H.xBc.KICK_MEMBERS, s), [s])),
            {
                canCreateApplicationBypassInvites:
                    (i = !!(
                        s?.features.has(H.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        s?.features.has(H.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && n,
                isManualApprovalGuild: i,
            }),
        eU = (eN && eM) || eO,
        { maxAge: eV, maxUses: eD, temporary: eL, savedMaxAge: eP, flags: eF, roleIds: ek } = eh,
        eB = !eU && eL,
        eH = (function (e) {
            let {
                sortedRoles: t,
                currentUser: n,
                canManageRoles: i,
            } = (0, x.cf)(
                [ew.A, eS.default, k.A],
                () => ({
                    sortedRoles: null != e ? ew.A.getSortedRoles(e.id) : [],
                    currentUser: eS.default.getCurrentUser(),
                    canManageRoles: null != e && k.A.can(H.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return d.useMemo(() => {
                if (null == e || null == n || !i) return [];
                let l = ej.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eR.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!ej.wO(e, n.id, l, t),
                );
            }, [e, n, i, t]);
        })(s),
        eK = eH.length > 0,
        eq = d.useCallback(
            (e) => {
                let t = new Set(ek);
                (t.delete(e) || t.add(e), ex({ roleIds: t }));
            },
            [ek, ex],
        ),
        ez = d.useCallback(() => {
            let { currentPage: e, lastPage: t } = eh;
            e === K.QR.SETTINGS && null != t ? ey(t) : h();
        }, [ey, eh, h]),
        eQ = d.useCallback(() => {
            let e = S?.id;
            (0 === eD && 0 === eV && !eB && er
                ? ex({ networkError: void 0, showVanityURL: !0 })
                : U &&
                  null != e &&
                  (ex({ networkError: void 0, showVanityURL: !1 }),
                  R.Ay.createInvite(
                      e,
                      {
                          max_age: eV,
                          max_uses: eD,
                          target_type: y,
                          target_user_id: o,
                          target_application_id: Q?.id,
                          temporary: eB,
                          flags: eF,
                          role_ids: Array.from(ek),
                      },
                      a,
                  ).catch((e) => ex({ networkError: e, showVanityURL: er }))),
                eV !== ta.value && eP !== ta.value && ex({ savedMaxAge: ta.value }));
        }, [er, U, S, a, Q?.id, y, o, eV, eD, eB, ex, eP, eF, ek]),
        eW = (0, et.Ay)(S),
        eY = (0, et.Ay)((0, m.Lt)(eF, A.Q.IS_APPLICATION_BYPASS)),
        e$ = null != eW && eW !== S,
        eJ = null != eY && eY !== (0, m.Lt)(eF, A.Q.IS_APPLICATION_BYPASS);
    d.useEffect(() => {
        !er && (e$ || eJ) && eQ();
    }, [eQ, e$, eJ, er]);
    let { enabled: eZ } = eg.A.useExperiment({ guildId: s?.id, location: "InstantInvite" });
    return (0, u.jsx)(ei.f5, {
        value: v,
        children: (0, u.jsx)(tu, {
            ref: t,
            canCreateInvites: U,
            noInvitesAvailable: V,
            inviteChannel: S,
            inviteChannelName: f,
            guild: s,
            guildScheduledEvent: r,
            streamUserId: o,
            vanityURLCode: Z,
            targetType: y,
            targetUserId: o,
            application: Q,
            rows: T,
            sections: eu,
            showFriends: M,
            initialCounts: N,
            code: W,
            source: a,
            analyticsLocations: v,
            analyticsLocation: I,
            transitionState: g,
            onClose: h,
            canShowVanityURL: er,
            isGuestInviteCreationToggleEnabled: eN && eM,
            shouldHideTemporaryInviteToggle: eU,
            modalState: { ...eh, temporary: eB },
            setModalState: ex,
            changePage: ey,
            onGenerateNewLink: eQ,
            handleDone: ez,
            isApplicationBypassToggleEnabled: eG && !V,
            isRoleAssignmentEnabled: eK,
            assignableRoles: eH,
            onToggleRole: eq,
            ringingEnabled: eZ,
        }),
    });
});
function tg(e) {
    return (0, u.jsx)(tc, { ...e });
}
