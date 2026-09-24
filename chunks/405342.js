let i, l, s, a, r, o;
(n.d(t, { default: () => tp }), n(938796));
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
    j = n(228366),
    w = n(219271),
    G = n(989133),
    O = n(174768),
    U = n(427358),
    V = n(403362),
    D = n(735547),
    L = n(734057),
    F = n(860071),
    P = n(696451),
    k = n(576705),
    H = n(994500),
    B = n(652215),
    K = n(172799);
let q = new Set(),
    Q = [],
    z = new Map(),
    W = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 },
    Y = "";
function $(e, t) {
    return null == e.score || null == t.score ? 0 : (0, G.A)({ score: e.score }, { score: t.score });
}
function J() {
    return null == s || o === K.yV.EMBEDDED_APPLICATION || a?.type === B.rbe.GUILD_VOICE ? null : s.id;
}
function Z() {
    var e;
    l = "" !== Y;
    let { rows: t, counts: n } = (function (e) {
        let t = new Set(),
            n = J(),
            i = (0, D.oW)(q, n);
        for (let e of (null == i || H.A.isBlockedOrIgnored(i.id) || t.add(i.id), U.A.getUserAffinities()))
            t.add(e.otherUserId);
        let l = new Set();
        return (
            o === K.yV.EMBEDDED_APPLICATION &&
                O.A.getChannelHistory()
                    .map((e) => L.A.getChannel(e))
                    .filter(V.Vq)
                    .filter((e) => e.type === B.rbe.GUILD_TEXT)
                    .filter((e) => k.A.can(B.xBc.SEND_MESSAGES, e))
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
        (Q = e = t),
        (z = new Map()),
        e.forEach((e, t) => {
            z.set(e, { index: t });
        }),
        (function (e) {
            let t = J();
            if (null != t)
                for (let n of e) (n.type === D.OK.DM || n.type === D.OK.FRIEND) && F.A.requestMember(t, n.item.id);
        })(t),
        n
    );
}
class X extends x.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(L.A, F.A, P.Ay, k.A, O.A, H.A, U.A);
    }
    getInviteSuggestionRows() {
        return Q;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return W;
    }
    getSelectedInviteMetadata(e) {
        let t = z.get(e),
            n = U.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: Q.length,
                numAffinityConnections: n.length,
                isFiltered: l,
            };
    }
}
let ee = new X(j.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: l, applicationId: u, inviteTargetType: d } = e;
        ((s = n),
            (a = l),
            (r = u),
            (o = d),
            (Y = ""),
            (q = new Set([
                ...t,
                ...H.A.getBlockedOrIgnoredIDs(),
                ...(0, D.Uo)({ channel: a, applicationId: r, inviteTargetType: d }),
            ])),
            (W = Z()),
            (i = Q.length));
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        ((Y = t), Z());
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = J();
        if (null == n) return !1;
        let i = new Set(Q.map((e) => e.item.id));
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
    eg = n(260509),
    eh = n(616356),
    eA = n(963307),
    ep = n(808728),
    em = n(958590),
    eI = n(290863),
    ex = n(309010),
    ev = n(287809),
    eS = n(607567),
    ef = n(174459),
    ey = n(702841),
    eE = n(71393);
let e_ = D.Ay.INVITE_OPTIONS_7_DAYS.value,
    eC = (0, eu.C)({
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
    eb = (0, eu.C)({
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
var eT = n(842241),
    eM = n(279208),
    eN = n(34457),
    eR = n(317525),
    ej = n(488926),
    ew = n(545442),
    eG = n(890497),
    eO = n(193249),
    eU = n(375708),
    eV = n(372996);
let eD = D.Ay.getMaxUsesOptions;
function eL(e) {
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
            onToggleRole: v,
        } = e,
        S = D.Ay.getMaxAgeOptionByValue(i),
        f = eD.find((e) => e.value === l),
        y = d.useMemo(
            () =>
                I.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, u.jsx)(ew.W, {
                            color: e.colorString ?? B.TpD,
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
        className: eV.z1,
        children: [
            (0, u.jsx)(eG.Z, {
                label: eU.intl.string(eU.t["60qw2x"]),
                options: n,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: S?.value ?? n[0].value,
                onSelectionChange: r,
                selectionMode: "single",
            }),
            (0, u.jsx)(eG.Z, {
                label: eU.intl.string(eU.t.jDqWHW),
                options: eD,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: f?.value,
                onSelectionChange: o,
                selectionMode: "single",
            }),
            A &&
                I.length > 0 &&
                (0, u.jsx)(eG.Z, {
                    label: eU.intl.string(eU.t.rPYJxL),
                    placeholder: eU.intl.string(eU.t["/djIh7"]),
                    options: y,
                    value: Array.from(x),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: s,
                }),
            !t &&
                (0, u.jsx)(eO.d, {
                    checked: s,
                    onChange: (e) => a(e),
                    description: eU.intl.string(eU.t.UN5IRX),
                    label: eU.intl.string(eU.t["wE+9dr"]),
                    disabled: x.size > 0,
                }),
            c &&
                (0, u.jsx)(eO.d, {
                    checked: (0, m.Lt)(g, p.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, m.lA)(g, p.Q.IS_GUEST_INVITE, e)),
                    description: eU.intl.string(eU.t["/FeTK6"]),
                    label: eU.intl.string(eU.t.siexRS),
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
            assignableRoles: A,
            onToggleRole: p,
        } = e,
        { maxAgeOptions: m, maxAge: x, maxUses: v, temporary: S, flags: f, roleIds: y } = n;
    return (0, u.jsx)(I.Modal, {
        transitionState: g,
        onClose: c,
        title: eU.intl.string(eU.t.Atdlyu),
        actions: [
            { variant: "secondary", text: eU.intl.string(eU.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: eU.intl.string(eU.t.pz1lRG),
                onClick: () => {
                    (l(), t());
                },
            },
        ],
        children: (0, u.jsx)(eL, {
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
            assignableRoles: A,
            selectedRoleIds: y,
            onToggleRole: p,
        }),
    });
}
var eP = n(747007),
    ek = n(503698),
    eH = n.n(ek),
    eB = n(935154),
    eK = n(778712),
    eq = n(97808),
    eQ = n(821609),
    ez = n(774300),
    eW = n(566903),
    eY = n(714114),
    e$ = n(864436),
    eJ = n(835072),
    eZ = n(198052),
    eX = n(85448),
    e0 = n(571694),
    e1 = n(10862),
    e2 = n(408278),
    e4 = n(562153),
    e3 = n(960027),
    e7 = n(978940),
    e8 = n(387755),
    e9 = n(325909),
    e6 = n(806931),
    e5 = n(818348);
function te(e) {
    let { user: t, channel: n, location: i } = e,
        l = (0, x.bG)([ex.Ay], () => ex.Ay.getVoiceChannelId() === n.id),
        s = (0, e4.tx)(n.guild_id, n.id, t),
        {
            icon: a,
            iconColor: r,
            tooltipText: o,
            disabled: c,
            shouldHideButton: g,
            onClick: h,
        } = (function (e) {
            let { user: t, channel: n, location: i } = e,
                l = (0, e9.o)(t, n.id),
                s = (0, x.bG)([eZ.A], () => eZ.A.getParticipant(n.id, t.id)),
                a = null == s,
                r = null != s && s.type === e6.lp.USER && s.ringing,
                o = (0, x.bG)([H.A], () => H.A.isFriend(t.id)),
                u = (0, x.bG)([eI.A], () => eI.A.getStatus(t.id) === e5.cl.DND && n?.guild_id != null),
                c = !l,
                g = (0, d.useCallback)(() => {
                    if (l) {
                        if (a) return void e8.A.ring(n.id, [t.id], i);
                        r && e8.A.stopRinging(n.id, [t.id]);
                    }
                }, [a, r, l, i, n.id, t.id]);
            return {
                iconColor: r ? v.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
                icon: r ? e3.z : e7._,
                tooltipText: o
                    ? u
                        ? eU.intl.string(eU.t.jaNpQH)
                        : a
                          ? eU.intl.string(eU.t["3Hv9qQ"])
                          : r
                            ? eU.intl.string(eU.t.ygslb0)
                            : null
                    : eU.intl.string(eU.t.TGqF9g),
                disabled: !l,
                shouldHideButton: c,
                onClick: g,
            };
        })({ user: t, channel: n, location: i });
    return !l || g
        ? null
        : (0, u.jsx)(b.m, {
              text: o,
              children: (0, u.jsx)("div", {
                  children: (0, u.jsx)(e2.K, {
                      variant: "icon-only",
                      icon: () => (0, u.jsx)(a, { size: "sm", color: r }),
                      "aria-label": eU.intl.formatToPlainString(eU.t["3IPBG1"], { username: s }),
                      size: "sm",
                      onClick: h,
                      disabled: c,
                  }),
              }),
          });
}
var tt = n(486020),
    tn = n(240248),
    ti = n(427262),
    tl = n(87617);
function ts(e, t) {
    if (null != e) return { suggestionData: ee.getSelectedInviteMetadata(e), source: t };
}
let ta = d.memo(
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
            [A, p] = d.useState(!1),
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
        let C = (0, x.bG)([eE.A], () => eE.A.getGuild(l?.guild_id)),
            {
                status: b,
                isMobileOnline: T,
                activities: M,
            } = (0, x.cf)(
                [eI.A],
                () =>
                    null == i
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: eI.A.getStatus(i.id, h),
                              isMobileOnline: eI.A.isMobileOnline(i.id),
                              activities: eI.A.getActivities(i.id, h),
                          },
                [i, h],
            ),
            { activityStatusText: N, activityStatusIcon: R } = d.useMemo(() => {
                if (null == M) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = M.find((e) => e.type !== B.$pd.CUSTOM_STATUS && e.type !== B.$pd.HANG_STATUS);
                return { activityStatusText: (0, eW.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eJ.f)(e) };
            }, [M]),
            { voiceChannel: j } = (0, eY.Ay)({ userId: i?.id }),
            w = (0, ea.Ay)(j),
            G = (0, x.bG)([eZ.A], () => (null != g && null != i ? eZ.A.getParticipant(g.id, i.id) : null)),
            O = c && null != G && G.type === e6.lp.USER && G.ringing,
            U = (0, eB.S3)(B.clD.ONLINE),
            V = d.useCallback(() => {
                null != s &&
                    (null != l
                        ? (p(!0),
                          ez.A.enqueue(
                              {
                                  type: ez.F.GROUP_DM,
                                  channel: l,
                                  inviteKey: s,
                                  location: a,
                                  inviteAnalyticsMetadata: ts(r, o),
                              },
                              (e) => {
                                  (p(!1), I(e));
                              },
                          ))
                        : null != i &&
                          (p(!0),
                          ez.A.enqueue(
                              {
                                  type: ez.F.USER,
                                  user: i,
                                  inviteKey: s,
                                  location: a,
                                  inviteAnalyticsMetadata: ts(r, o),
                              },
                              (e) => {
                                  (p(!1), I(e));
                              },
                          )));
            }, [s, l, i, a, r, o]),
            L = ti.Ay.getName(i),
            F = null != i ? H.A.getNickname(i.id) : null,
            P = null != l ? (0, ea.m1)(l, ev.default, H.A) : null,
            k = null != i ? i.getAvatarURL(l?.guild_id, 32) : null,
            K = null != l ? (0, e0.Y)(l) : null,
            q =
                null != C && null != l && null == K
                    ? tt.Ay.getGuildIconURL({ id: l.guild_id, icon: C.icon, size: 32 })
                    : null,
            Q = b !== B.clD.OFFLINE ? b : void 0,
            z = k ?? K ?? q,
            W = L ?? P ?? void 0,
            Y = null != C && null == C.icon ? (0, tn.oN)(C.name) : null,
            $ = null != z && null != W;
        null != i && (n = F ?? L);
        let J = ti.Ay.getUserTag(i, { decoration: "never" }),
            Z = null != n || null != l,
            X = null != (t = r) && (t.type === D.OK.DM || t.type === D.OK.FRIEND) && !0 === t.isGuildMember,
            ee = X
                ? (0, u.jsx)(f.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: eU.intl.string(eU.t.u1sEfz),
                  })
                : (0, u.jsx)(eQ.$, {
                      id: y,
                      variant: "secondary",
                      text: m ? eU.intl.string(eU.t.dVT149) : eU.intl.string(eU.t.jYnGPG),
                      "aria-labelledby": Z ? `${y} ${S}` : void 0,
                      size: "sm",
                      loading: A,
                      onClick: V,
                      disabled: m,
                  }),
            et = null != N.text,
            en = null != j && null != w,
            ei = en || et || null != i;
        return (0, u.jsxs)("div", {
            ref: E,
            tabIndex: -1,
            className: eH()(tl.Og, { [tl.E2]: X }),
            children: [
                (0, u.jsxs)("div", {
                    className: tl.mQ,
                    children: [
                        $
                            ? O
                                ? (0, u.jsx)(eX.Ay, { size: eK._3.SIZE_32, ringing: O, src: z, className: tl.hO })
                                : (0, u.jsx)(eq.eu, {
                                      src: z,
                                      "aria-label": W,
                                      size: eK._3.SIZE_32,
                                      className: tl.hO,
                                      status: null != i ? Q : void 0,
                                      isMobile: null != i ? T : void 0,
                                  })
                            : (0, u.jsx)(f.E, {
                                  variant: "text-md/medium",
                                  className: tl.q9,
                                  "aria-hidden": !0,
                                  children: Y,
                              }),
                        (0, u.jsxs)("div", {
                            className: eH()(tl.BT, { [tl.DF]: O }),
                            children: [
                                (0, u.jsxs)(f.E, {
                                    id: S,
                                    tag: "strong",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    children: [n, null != l ? (0, ea.m1)(l, ev.default, H.A, !0) : null],
                                }),
                                ei &&
                                    (0, u.jsxs)("div", {
                                        className: eH()(tl.eq, { [tl.DF]: O }),
                                        children: [
                                            en
                                                ? (0, u.jsx)(e1.A, {
                                                      size: "custom",
                                                      color: U,
                                                      channel: j,
                                                      className: tl.j8,
                                                  })
                                                : null != R
                                                  ? (0, u.jsx)(e$.A, { icon: R, className: tl.j8 })
                                                  : null,
                                            en
                                                ? (0, u.jsx)(f.E, {
                                                      variant: "text-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: w,
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
                                                children: O && ` \u{2022} ${eU.intl.string(eU.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, u.jsxs)("div", {
                    className: tl.t$,
                    children: [
                        c && null != i && null != g && (0, u.jsx)(te, { user: i, channel: g, location: "InviteRow" }),
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
var tr = n(746080),
    to = n(440155);
let { INVITE_OPTIONS_FOREVER: tu, INVITE_OPTIONS_7_DAYS: td, INVITE_OPTIONS_UNLIMITED: tc } = D.Ay;
class tg extends d.PureComponent {
    _scroller = null;
    _headerId = A().uniqueId();
    static defaultProps = { analyticsLocation: B.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: td.value };
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
                setModalState: A,
            } = this.props,
            { maxAge: p, maxUses: m, temporary: I, flags: x } = h;
        if (l) {
            let n = e?.id;
            if (null == n) return;
            (A({ networkError: void 0 }),
                R.Ay.createInvite(
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
                ).catch((e) => A({ networkError: e })));
        }
        if (
            (g &&
                ef.default.track(B.HAw.INVITE_SUGGESTION_OPENED, {
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
            let e = eh.A.getStreamForUser(a, n.id),
                t = (0, eo.Ee)(e, eI.A);
            ef.default.track(B.HAw.OPEN_MODAL, {
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
                ef.default.track(B.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, m.Lt)(t.flags, p.Q.IS_GUEST_INVITE) && null != e && R.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: n, modalState: i } = this.props,
            { showVanityURL: l } = i,
            s = l ? t : (e ?? t);
        return null == s ? s : (0, eT.WU)({ baseCode: s, guildScheduledEventId: n?.id });
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
            j.h.dispatch({ type: "INVITE_SUGGESTIONS_SEARCH", query: e }),
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
                  className: tl.UW,
                  children: [
                      (0, u.jsx)(S.E, {
                          size: "custom",
                          className: tl.QW,
                          color: v.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, u.jsx)(f.E, {
                          variant: "text-xs/normal",
                          color: "text-default",
                          children: eU.intl.string(eU.t.x1SQZb),
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
                    ? eU.intl.string(eU.t["6VQaqd"])
                    : null != s
                      ? eU.intl.formatToPlainString(eU.t.ZdK3dW, { applicationName: s.name })
                      : null != i
                        ? eU.intl.string(eU.t.JKV4FL)
                        : a?.isGuildStageVoice()
                          ? eU.intl.string(eU.t.zTrsH0)
                          : eU.intl.formatToPlainString(eU.t.NvVBJU, { name: n.name })),
            null != a)
        ) {
            let e = (0, er.gU)(a, n);
            if (null != e) {
                let n = this.props.inviteChannelName ?? eU.intl.string(eU.t["/YzI63"]);
                t = eU.intl.format(eU.t.MkSwTR, {
                    channelName: n,
                    channelNameHook: (t, n) =>
                        (0, u.jsxs)("span", { children: [(0, u.jsx)(e, { className: tl.p }), t] }, n),
                });
            }
        }
        return n.features.has(B.GuildFeatures.HUB)
            ? { title: eU.intl.string(eU.t.WhR38i), subtitle: eU.intl.string(eU.t.Ed4BMs) }
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
                            placeholder: eU.intl.string(eU.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(B.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: tl.Iq,
                          children: (0, u.jsx)(E.SG, { children: eU.intl.string(eU.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, u.jsx)("div", {
                            className: tl.Iq,
                            children: (0, u.jsx)(E.SG, { children: eU.intl.string(eU.t.hzPwGG) }),
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
            { rows: i, sections: l, analyticsLocation: s, source: a, inviteChannel: r, guild: o } = this.props,
            d = this.getInviteKey(),
            c = null == l ? i[n] : l[t][n],
            g = `${c.type}-${c.item.id}`,
            h = this.getSectionVisibility(t);
        if (null != l && !h) return null;
        switch (c.type) {
            case D.OK.GROUP_DM:
            case D.OK.CHANNEL:
                return (0, u.jsx)(
                    ta,
                    { row: c, channel: c.item, inviteKey: d, location: s, source: a, guildId: o.id },
                    g,
                );
            case D.OK.DM:
            case D.OK.FRIEND:
                return (0, u.jsx)(
                    ta,
                    { row: c, user: c.item, inviteKey: d, location: s, source: a, inviteChannel: r, guildId: o.id },
                    g,
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
        let i = 0 === t ? eU.intl.string(eU.t.y29JXs) : eU.intl.string(eU.t.Sd8Ixw),
            l = this.getSectionVisibility(t);
        return (0, u.jsx)(th, {
            section: t,
            heading: i,
            isOpen: l,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: n, application: i } = this.props;
        if (t) return this.renderFriendsBody();
        let l = (0, eM.A)(this.getInviteKey() ?? ""),
            s = ev.default.getCurrentUser();
        g()(null != s, "InstantInviteModal: user cannot be undefined");
        let a = (0, eg.bM)(e, s) ? eU.intl.string(eU.t.HFbByJ) : eU.intl.string(eU.t.ueBhA9);
        return (
            null != n ? (a = eU.intl.string(eU.t.CXpS1I)) : null != i && (a = eU.intl.string(eU.t.ueCrHB)),
            {
                bodyContent: (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(f.E, { className: tl.Sv, variant: "text-sm/normal", children: a }),
                        (0, u.jsx)(eP.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: l }),
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
            d = (0, eM.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eU.intl.string(eU.t.MLkj7N);
            (null != i
                ? (e = eU.intl.string(eU.t["1b9neu"]))
                : null != l
                  ? (e = eU.intl.string(eU.t.iI1gMg))
                  : null != n
                    ? (e = eU.intl.string(eU.t.KaWCyD))
                    : s?.isGuildStageVoice() && (e = eU.intl.string(eU.t["2frWa3"])),
                (o = (0, u.jsx)(_.D, {
                    label: e,
                    children: (0, u.jsx)(eP.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: d,
                    }),
                })));
        } else
            e ||
                (o = (0, u.jsxs)("div", {
                    className: tl.xF,
                    children: [
                        (0, u.jsx)(C.S, {
                            checked: r === tu.value,
                            onChange: this.handleToggleMaxAge,
                            label: eU.intl.string(eU.t["QKJru/"]),
                        }),
                        (0, u.jsx)(b.m, {
                            text: eU.intl.string(eU.t.Yx4IiC),
                            children: (0, u.jsx)(T.D, {
                                onClick: this.openSettings,
                                className: to.or,
                                "aria-label": eU.intl.string(eU.t.Yx4IiC),
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
function th(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: l } = e;
    return (0, u.jsxs)(T.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: tl.uP,
        onClick: () => l(t),
        "aria-expanded": i,
        children: [
            (0, u.jsx)(f.E, { variant: "text-sm/medium", color: "text-muted", children: n }),
            (0, u.jsx)(N.a, { size: "md", color: "currentColor", className: tl.ep }),
        ],
    });
}
let tA = d.forwardRef(function (e, t) {
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
        { analyticsLocations: v } = (0, ei.Ay)(en.A.INSTANT_INVITE_MODAL),
        S = (0, x.bG)(
            [ex.Ay, L.A, ep.Ay, k.A],
            () => {
                if (null != l) return l;
                let e = ex.Ay.getChannelId(),
                    t = null == e || (0, tr.jq)(e) ? void 0 : L.A.getChannel(e);
                return (
                    t?.isThread() && (t = L.A.getChannel(t.parent_id)),
                    t?.guild_id === s.id && null != t && k.A.can(B.xBc.VIEW_CHANNEL, t)
                        ? t
                        : ep.Ay.getDefaultChannel(s.id, !0, B.xBc.CREATE_INSTANT_INVITE)
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
                i = t ?? B.dJq,
                l = eC.useExperiment({ guildId: i, location: n }),
                s = eb.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== e_ ? l : s,
                r = (0, ey.bG)([eE.A], () => eE.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(B.GuildFeatures.HUB)) return D.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? e_;
                      let i = t?.id ?? B.dJq,
                          l = eC.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== e_
                          ? l.defaultMaxAge
                          : (eb.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? e_);
                  })({ guild: r, experimentConfig: a });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        C = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? B.dJq,
                l = eC.useExperiment({ guildId: i, location: n }),
                s = eb.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== e_ ? l : s;
            return D.Ay.getMaxAgeOptions({ includeExperimentalValues: [a?.defaultMaxAge] });
        })({ guildId: E, location: "InstantInviteModalConnected" }),
        b = (0, x.bG)(
            [em.A],
            () => {
                let e = null != S ? S.id : null;
                return null == e ? null : em.A.getInvite(e, { targetType: y, targetUserId: o, targetApplicationId: c });
            },
            [S, y, o, c],
        ),
        [T, M, N, G] = (0, x.yK)(
            [ee, eS.Ay],
            () => [
                ee.getInviteSuggestionRows(),
                ee.getTotalSuggestionsCount() >= 1,
                ee.getInitialCounts(),
                null != l && null != S ? eS.Ay.getVoiceStatesForChannel(S) : null,
            ],
            [S, l],
        ),
        O = d.useMemo(() => {
            let e = null != S ? S.id : null;
            return null != E ? eA.Ay.getProps(E, e) : void 0;
        }, [S, E]),
        U = (0, x.bG)([k.A], () => null != S && k.A.can(B.xBc.CREATE_INSTANT_INVITE, S), [S]),
        V = null === b || !U,
        F = S?.type === B.rbe.GUILD_VOICE,
        P = (0, es.A)(S),
        H = d.useMemo(() => {
            let e = new Set();
            return (
                F || null != o
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
        }, [F, O, o, G, E, y]),
        q = l?.id,
        Q = (0, x.bG)([ec.A], () => ec.A.getStageInstanceByChannel(q), [q]);
    d.useEffect(() => {
        (function (e) {
            let { omitUserIds: t, guild: n, channel: i, applicationId: l, inviteTargetType: s } = e;
            return (0, w.u)().then(() => {
                j.h.dispatch({
                    type: "LOAD_INVITE_SUGGESTIONS",
                    omitUserIds: t ?? new Set(),
                    guild: n,
                    channel: i,
                    applicationId: l,
                    inviteTargetType: s,
                });
            });
        })({ omitUserIds: H, guild: s, channel: S, applicationId: c, inviteTargetType: y }).catch(B.FXj);
    }, [H, S, s, c, y]);
    let [z] = (0, el.A)(null != c ? [c] : []),
        W = null != b ? b.code : void 0,
        Y = b?.maxAge,
        $ = b?.maxUses,
        J = b?.temporary,
        Z = s.vanityURLCode,
        X = null != Z && Z.length > 0,
        er = !U && !S?.isGuildVocal() && X,
        eo = b?.flags ?? 0;
    U || Q?.invite_code == null || (W = Q.invite_code);
    let eu = d.useMemo(() => (F ? (0, D.Gv)(T, E) : null), [F, T, E]),
        [eg, eh] = d.useState({
            query: "",
            maxAgeOptions: C,
            maxAge: Y ?? _ ?? e_,
            savedMaxAge: Y === tu.value ? (_ ?? td.value) : tu.value,
            maxUses: null != $ && 0 !== $ ? $ : tc.value,
            temporary: J ?? !1,
            networkError: void 0,
            showVanityURL: er,
            currentPage: A ?? K.QR.MAIN,
            lastPage: void 0,
            flags: eo,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eI = d.useCallback((e) => {
            eh((t) => ({ ...t, ...e }));
        }, []),
        ef = d.useCallback(
            (e) => {
                eI({ currentPage: e, lastPage: eg.currentPage });
            },
            [eg.currentPage, eI],
        ),
        eT = F && !er && !V && !P,
        { enabled: eM } = ed.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eT }),
        { canCreateApplicationBypassInvites: ew, isManualApprovalGuild: eG } =
            ((n = (0, x.bG)([k.A], () => k.A.can(B.xBc.KICK_MEMBERS, s), [s])),
            {
                canCreateApplicationBypassInvites:
                    (i = !!(
                        s?.features.has(B.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        s?.features.has(B.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && n,
                isManualApprovalGuild: i,
            }),
        eO = (eM && eT) || eG,
        { maxAge: eU, maxUses: eV, temporary: eD, savedMaxAge: eL, flags: eF, roleIds: eP } = eg,
        ek = !eO && eD,
        eH = (function (e) {
            let {
                sortedRoles: t,
                currentUser: n,
                canManageRoles: i,
            } = (0, x.cf)(
                [eR.A, ev.default, k.A],
                () => ({
                    sortedRoles: null != e ? eR.A.getSortedRoles(e.id) : [],
                    currentUser: ev.default.getCurrentUser(),
                    canManageRoles: null != e && k.A.can(B.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return d.useMemo(() => {
                if (null == e || null == n || !i) return [];
                let l = ej.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eN.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!ej.wO(e, n.id, l, t),
                );
            }, [e, n, i, t]);
        })(s),
        eB = eH.length > 0,
        eK = d.useCallback(
            (e) => {
                let t = new Set(eP);
                (t.delete(e) || t.add(e), eI({ roleIds: t }));
            },
            [eP, eI],
        ),
        eq = d.useCallback(() => {
            let { currentPage: e, lastPage: t } = eg;
            e === K.QR.SETTINGS && null != t ? ef(t) : h();
        }, [ef, eg, h]),
        eQ = d.useCallback(() => {
            let e = S?.id;
            (0 === eV && 0 === eU && !ek && er
                ? eI({ networkError: void 0, showVanityURL: !0 })
                : U &&
                  null != e &&
                  (eI({ networkError: void 0, showVanityURL: !1 }),
                  R.Ay.createInvite(
                      e,
                      {
                          max_age: eU,
                          max_uses: eV,
                          target_type: y,
                          target_user_id: o,
                          target_application_id: z?.id,
                          temporary: ek,
                          flags: eF,
                          role_ids: Array.from(eP),
                      },
                      a,
                  ).catch((e) => eI({ networkError: e, showVanityURL: er }))),
                eU !== tu.value && eL !== tu.value && eI({ savedMaxAge: tu.value }));
        }, [er, U, S, a, z?.id, y, o, eU, eV, ek, eI, eL, eF, eP]),
        ez = (0, et.Ay)(S),
        eW = (0, et.Ay)((0, m.Lt)(eF, p.Q.IS_APPLICATION_BYPASS)),
        eY = null != ez && ez !== S,
        e$ = null != eW && eW !== (0, m.Lt)(eF, p.Q.IS_APPLICATION_BYPASS);
    return (
        d.useEffect(() => {
            !er && (eY || e$) && eQ();
        }, [eQ, eY, e$, er]),
        (0, u.jsx)(ei.f5, {
            value: v,
            children: (0, u.jsx)(tg, {
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
                application: z,
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
                isGuestInviteCreationToggleEnabled: eM && eT,
                shouldHideTemporaryInviteToggle: eO,
                modalState: { ...eg, temporary: ek },
                setModalState: eI,
                changePage: ef,
                onGenerateNewLink: eQ,
                handleDone: eq,
                isApplicationBypassToggleEnabled: ew && !V,
                isRoleAssignmentEnabled: eB,
                assignableRoles: eH,
                onToggleRole: eK,
            }),
        })
    );
});
function tp(e) {
    return (0, u.jsx)(tA, { ...e });
}
