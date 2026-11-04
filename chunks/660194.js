let i, l, s, a, r, o;
(n.d(t, { default: () => tI }), n(938796));
var u = n(477900),
    d = n(582128),
    c = n(284009),
    g = n.n(c),
    h = n(435558),
    A = n.n(h),
    p = n(821418),
    m = n(294630),
    I = n(665260),
    y = n(855986),
    v = n(646514),
    S = n(189213),
    x = n(695366),
    f = n(834730),
    E = n(683438),
    _ = n(396478),
    C = n(452027),
    b = n(150934),
    T = n(866665),
    N = n(939249),
    M = n(625903),
    R = n(847374),
    j = n(574332),
    w = n(73153),
    G = n(404885),
    O = n(989133),
    U = n(174768),
    D = n(812020),
    V = n(403362),
    L = n(735547),
    F = n(734057),
    P = n(949744),
    k = n(696451),
    H = n(576705),
    B = n(994500),
    K = n(652215);
let Q = new Set(),
    q = [],
    z = new Map(),
    W = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 },
    Y = "";
function $(e, t) {
    return null == e.score || null == t.score ? 0 : (0, O.A)({ score: e.score }, { score: t.score });
}
function Z() {
    return null == s || o === m.y.EMBEDDED_APPLICATION || a?.type === K.rbe.GUILD_VOICE ? null : s.id;
}
function J() {
    var e;
    l = "" !== Y;
    let { rows: t, counts: n } = (function (e) {
        let t = new Set(),
            n = Z(),
            i = (0, L.oW)(Q, n);
        for (let e of (null == i || B.A.isBlockedOrIgnored(i.id) || t.add(i.id), D.A.getUserAffinities()))
            t.add(e.otherUserId);
        let l = new Set();
        return (
            o === m.y.EMBEDDED_APPLICATION &&
                U.A.getChannelHistory()
                    .map((e) => F.A.getChannel(e))
                    .filter(V.Vq)
                    .filter((e) => e.type === K.rbe.GUILD_TEXT)
                    .filter((e) => H.A.can(K.xBc.SEND_MESSAGES, e))
                    .slice(0, 3)
                    .forEach((e) => l.add(e.id)),
            (0, L.Us)({
                query: e,
                omitUserIds: Q,
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
        (q = e = t),
        (z = new Map()),
        e.forEach((e, t) => {
            z.set(e, { index: t });
        }),
        (function (e) {
            let t = Z();
            if (null != t)
                for (let n of e) (n.type === L.OK.DM || n.type === L.OK.FRIEND) && P.A.requestMember(t, n.item.id);
        })(t),
        n
    );
}
class X extends y.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(F.A, P.A, k.Ay, H.A, U.A, B.A, D.A);
    }
    getInviteSuggestionRows() {
        return q;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return W;
    }
    getSelectedInviteMetadata(e) {
        let t = z.get(e),
            n = D.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: q.length,
                numAffinityConnections: n.length,
                isFiltered: l,
            };
    }
}
let ee = new X(w.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: l, applicationId: u, inviteTargetType: d } = e;
        ((s = n), (a = l), (r = u), (o = d), (Y = ""));
        let c = B.A.getBlockedOrIgnoredIDs(),
            g = (0, L.Uo)({ channel: a, applicationId: r, inviteTargetType: d });
        ((Q = new Set([...t, ...c, ...g])), (W = J()), (i = q.length));
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        ((Y = t), J());
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = Z();
        if (null == n) return !1;
        let i = new Set(q.map((e) => e.item.id));
        if (!t.some((e) => e.guildId === n && e.members.some((e) => i.has(e.user.id)))) return !1;
        J();
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
    ey = n(309010),
    ev = n(287809),
    eS = n(607567),
    ex = n(129230),
    ef = n(164636),
    eE = n(71393);
let e_ = L.Ay.INVITE_OPTIONS_7_DAYS.value,
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
var eT = n(21599),
    eN = n(279208),
    eM = n(34457),
    eR = n(317525),
    ej = n(488926),
    ew = n(545442),
    eG = n(890497),
    eO = n(143129),
    eU = n(792996),
    eD = n(372996);
let eV = L.Ay.getMaxUsesOptions;
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
            assignableRoles: m,
            selectedRoleIds: y,
            onToggleRole: v,
        } = e,
        S = L.Ay.getMaxAgeOptionByValue(i),
        x = eV.find((e) => e.value === l),
        f = d.useMemo(
            () =>
                m.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, u.jsx)(ew.W, {
                            color: e.colorString ?? K.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [m],
        ),
        E = d.useCallback(
            (e) => {
                let t = Array.from(y),
                    n = e ?? [],
                    i = n.find((e) => !t.includes(e)),
                    l = t.find((e) => !n.includes(e));
                null != i ? v(i) : null != l && v(l);
            },
            [y, v],
        );
    return (0, u.jsxs)("div", {
        className: eD.z1,
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
                options: eV,
                formatOption: (e) => {
                    let { value: t, label: n } = e;
                    return { id: t.toString(), value: t, label: n };
                },
                value: x?.value,
                onSelectionChange: o,
                selectionMode: "single",
            }),
            A &&
                m.length > 0 &&
                (0, u.jsx)(eG.Z, {
                    label: eU.intl.string(eU.t.rPYJxL),
                    placeholder: eU.intl.string(eU.t["/djIh7"]),
                    options: f,
                    value: Array.from(y),
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
                    disabled: y.size > 0,
                }),
            c &&
                (0, u.jsx)(eO.d, {
                    checked: (0, I.Lt)(g, p.Q.IS_GUEST_INVITE),
                    onChange: (e) => h((0, I.lA)(g, p.Q.IS_GUEST_INVITE, e)),
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
        { maxAgeOptions: m, maxAge: I, maxUses: y, temporary: v, flags: x, roleIds: f } = n;
    return (0, u.jsx)(S.a, {
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
            maxAge: I,
            maxUses: y,
            temporary: v,
            onToggleTemporary: s,
            onSelectMaxAge: a,
            onSelectMaxUses: r,
            isGuestInviteCreationToggleEnabled: o,
            onSetInviteFlags: d,
            inviteFlags: x,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            selectedRoleIds: f,
            onToggleRole: p,
        }),
    });
}
var eP = n(312556),
    ek = n(503698),
    eH = n.n(ek),
    eB = n(350835),
    eK = n(935154),
    eQ = n(778712),
    eq = n(97808),
    ez = n(821609),
    eW = n(774300),
    eY = n(566903),
    e$ = n(714114),
    eZ = n(864436),
    eJ = n(835072),
    eX = n(628983),
    e0 = n(85448),
    e1 = n(571694),
    e3 = n(10862),
    e4 = n(408278),
    e2 = n(562153),
    e6 = n(960027),
    e9 = n(978940),
    e8 = n(387755),
    e5 = n(325909),
    e7 = n(806931),
    te = n(818348);
function tt(e) {
    let { user: t, channel: n, location: i } = e,
        l = (0, y.bG)([ey.Ay], () => ey.Ay.getVoiceChannelId() === n.id),
        s = (0, e2.tx)(n.guild_id, n.id, t),
        {
            icon: a,
            iconColor: r,
            tooltipText: o,
            disabled: c,
            shouldHideButton: g,
            onClick: h,
        } = (function (e) {
            let { user: t, channel: n, location: i } = e,
                l = (0, e5.o)(t, n.id),
                s = (0, y.bG)([eX.A], () => eX.A.getParticipant(n.id, t.id)),
                a = null == s,
                r = null != s && s.type === e7.lp.USER && s.ringing,
                o = (0, y.bG)([B.A], () => B.A.isFriend(t.id)),
                u = (0, y.bG)([eI.A], () => eI.A.getStatus(t.id) === te.cl.DND && n?.guild_id != null),
                c = !l,
                g = (0, d.useCallback)(() => {
                    if (l) {
                        if (a) return void e8.A.ring(n.id, [t.id], i);
                        r && e8.A.stopRinging(n.id, [t.id]);
                    }
                }, [a, r, l, i, n.id, t.id]);
            return {
                iconColor: r ? v.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
                icon: r ? e6.z : e9._,
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
        : (0, u.jsx)(T.m, {
              text: o,
              children: (0, u.jsx)("div", {
                  children: (0, u.jsx)(e4.K, {
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
var tn = n(486020),
    ti = n(240248),
    tl = n(427262),
    ts = n(87617);
function ta(e, t) {
    if (null != e) return { suggestionData: ee.getSelectedInviteMetadata(e), source: t };
}
let tr = d.memo(
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
            x = `invite-row-button-${v}`,
            E = d.useRef(null),
            _ = d.useRef(!1);
        d.useEffect(() => {
            if (m && !_.current) {
                let e = document.activeElement;
                (null == e || e === document.body) && E.current?.focus();
            }
            _.current = m;
        }, [m]);
        let C = (0, y.bG)([eE.A], () => eE.A.getGuild(l?.guild_id)),
            {
                status: b,
                isMobileOnline: T,
                activities: N,
            } = (0, y.cf)(
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
            { activityStatusText: M, activityStatusIcon: R } = d.useMemo(() => {
                if (null == N) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = N.find((e) => e.type !== eB.$.CUSTOM_STATUS && e.type !== eB.$.HANG_STATUS);
                return { activityStatusText: (0, eY.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eJ.f)(e) };
            }, [N]),
            { voiceChannel: j } = (0, e$.Ay)({ userId: i?.id }),
            w = (0, ea.Ay)(j),
            G = (0, y.bG)([eX.A], () => (null != g && null != i ? eX.A.getParticipant(g.id, i.id) : null)),
            O = c && null != G && G.type === e7.lp.USER && G.ringing,
            U = (0, eK.S3)(K.clD.ONLINE),
            D = d.useCallback(() => {
                null != s &&
                    (null != l
                        ? (p(!0),
                          eW.A.enqueue(
                              {
                                  type: eW.F.GROUP_DM,
                                  channel: l,
                                  inviteKey: s,
                                  location: a,
                                  inviteAnalyticsMetadata: ta(r, o),
                              },
                              (e) => {
                                  (p(!1), I(e));
                              },
                          ))
                        : null != i &&
                          (p(!0),
                          eW.A.enqueue(
                              {
                                  type: eW.F.USER,
                                  user: i,
                                  inviteKey: s,
                                  location: a,
                                  inviteAnalyticsMetadata: ta(r, o),
                              },
                              (e) => {
                                  (p(!1), I(e));
                              },
                          )));
            }, [s, l, i, a, r, o]),
            V = tl.Ay.getName(i),
            F = null != i ? B.A.getNickname(i.id) : null,
            P = null != l ? (0, ea.m1)(l, ev.default, B.A) : null,
            k = null != i ? i.getAvatarURL(l?.guild_id, 32) : null,
            H = null != l ? (0, e1.Y)(l) : null,
            Q =
                null != C && null != l && null == H
                    ? tn.Ay.getGuildIconURL({ id: l.guild_id, icon: C.icon, size: 32 })
                    : null,
            q = b !== K.clD.OFFLINE ? b : void 0,
            z = k ?? H ?? Q,
            W = V ?? P ?? void 0,
            Y = null != C && null == C.icon ? (0, ti.oN)(C.name) : null,
            $ = null != z && null != W;
        null != i && (n = F ?? V);
        let Z = tl.Ay.getUserTag(i, { decoration: "never" }),
            J = null != n || null != l,
            X = null != (t = r) && (t.type === L.OK.DM || t.type === L.OK.FRIEND) && !0 === t.isGuildMember,
            ee = X
                ? (0, u.jsx)(f.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      children: eU.intl.string(eU.t.u1sEfz),
                  })
                : (0, u.jsx)(ez.$, {
                      id: x,
                      variant: "secondary",
                      text: m ? eU.intl.string(eU.t.dVT149) : eU.intl.string(eU.t.jYnGPG),
                      "aria-labelledby": J ? `${x} ${S}` : void 0,
                      size: "sm",
                      loading: A,
                      onClick: D,
                      disabled: m,
                  }),
            et = null != M.text,
            en = null != j && null != w,
            ei = en || et || null != i;
        return (0, u.jsxs)("div", {
            ref: E,
            tabIndex: -1,
            className: eH()(ts.Og, { [ts.E2]: X }),
            children: [
                (0, u.jsxs)("div", {
                    className: ts.mQ,
                    children: [
                        $
                            ? O
                                ? (0, u.jsx)(e0.Ay, { size: eQ._3.SIZE_32, ringing: O, src: z, className: ts.hO })
                                : (0, u.jsx)(eq.eu, {
                                      src: z,
                                      "aria-label": W,
                                      size: eQ._3.SIZE_32,
                                      className: ts.hO,
                                      status: null != i ? q : void 0,
                                      isMobile: null != i ? T : void 0,
                                  })
                            : (0, u.jsx)(f.E, {
                                  variant: "body-md/medium",
                                  className: ts.q9,
                                  "aria-hidden": !0,
                                  children: Y,
                              }),
                        (0, u.jsxs)("div", {
                            className: eH()(ts.BT, { [ts.DF]: O }),
                            children: [
                                (0, u.jsxs)(f.E, {
                                    id: S,
                                    tag: "strong",
                                    variant: "body-md/semibold",
                                    lineClamp: 1,
                                    children: [n, null != l ? (0, ea.m1)(l, ev.default, B.A, !0) : null],
                                }),
                                ei &&
                                    (0, u.jsxs)("div", {
                                        className: eH()(ts.eq, { [ts.DF]: O }),
                                        children: [
                                            en
                                                ? (0, u.jsx)(e3.A, {
                                                      size: "custom",
                                                      color: U,
                                                      channel: j,
                                                      className: ts.j8,
                                                  })
                                                : null != R
                                                  ? (0, u.jsx)(eZ.A, { icon: R, className: ts.j8 })
                                                  : null,
                                            en
                                                ? (0, u.jsx)(f.E, {
                                                      variant: "body-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: w,
                                                  })
                                                : et
                                                  ? (0, u.jsx)(f.E, {
                                                        variant: "body-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: M.text,
                                                    })
                                                  : (0, u.jsx)(f.E, {
                                                        variant: "body-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: Z,
                                                    }),
                                            (0, u.jsx)(f.E, {
                                                variant: "body-xs/normal",
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
                    className: ts.t$,
                    children: [
                        c && null != i && null != g && (0, u.jsx)(tt, { user: i, channel: g, location: "InviteRow" }),
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
var to = n(172799),
    tu = n(746080),
    td = n(440155);
let { INVITE_OPTIONS_FOREVER: tc, INVITE_OPTIONS_7_DAYS: tg, INVITE_OPTIONS_UNLIMITED: th } = L.Ay;
class tA extends d.PureComponent {
    _scroller = null;
    _headerId = A().uniqueId();
    static defaultProps = { analyticsLocation: K.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: tg.value };
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
            { maxAge: p, maxUses: m, temporary: I, flags: y } = h;
        if (l) {
            let n = e?.id;
            if (null == n) return;
            (A({ networkError: void 0 }),
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
                        flags: y,
                    },
                    i,
                ).catch((e) => A({ networkError: e })));
        }
        if (
            (g &&
                ex.default.track(K.HAw.INVITE_SUGGESTION_OPENED, {
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
            ex.default.track(K.HAw.OPEN_MODAL, {
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
                ex.default.track(K.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: i, location: s });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, I.Lt)(t.flags, p.Q.IS_GUEST_INVITE) && null != e && j.Ay.clearInviteFromStore(e.id);
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
        e(to.QR.SETTINGS);
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
                  className: ts.UW,
                  children: [
                      (0, u.jsx)(x.E, {
                          size: "custom",
                          className: ts.QW,
                          color: v.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, u.jsx)(f.E, {
                          variant: "body-xs/normal",
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
                        (0, u.jsxs)("span", { children: [(0, u.jsx)(e, { className: ts.p }), t] }, n),
                });
            }
        }
        return n.features.has(K.GuildFeatures.HUB)
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
                        (0, u.jsx)(E.I, {
                            size: "md",
                            query: i,
                            onChange: this.handleQueryChange,
                            placeholder: eU.intl.string(eU.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !n.features.has(K.GuildFeatures.HUB) && this.renderChannelWarning(),
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
                          className: ts.Iq,
                          children: (0, u.jsx)(_.SG, { children: eU.intl.string(eU.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == n
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, u.jsx)("div", {
                            className: ts.Iq,
                            children: (0, u.jsx)(_.SG, { children: eU.intl.string(eU.t.hzPwGG) }),
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
            case L.OK.CHANNEL:
            case L.OK.GROUP_DM:
            case L.OK.DM:
            case L.OK.FRIEND:
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
            case L.OK.GROUP_DM:
            case L.OK.CHANNEL:
                return (0, u.jsx)(
                    tr,
                    { row: c, channel: c.item, inviteKey: d, location: s, source: a, guildId: o.id },
                    g,
                );
            case L.OK.DM:
            case L.OK.FRIEND:
                return (0, u.jsx)(
                    tr,
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
        return (0, u.jsx)(tp, {
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
            s = ev.default.getCurrentUser();
        g()(null != s, "InstantInviteModal: user cannot be undefined");
        let a = (0, eg.bM)(e, s) ? eU.intl.string(eU.t.HFbByJ) : eU.intl.string(eU.t.ueBhA9);
        return (
            null != n ? (a = eU.intl.string(eU.t.CXpS1I)) : null != i && (a = eU.intl.string(eU.t.ueCrHB)),
            {
                bodyContent: (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(f.E, { className: ts.Sv, variant: "body-sm/normal", children: a }),
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
            d = (0, eN.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eU.intl.string(eU.t.MLkj7N);
            (null != i
                ? (e = eU.intl.string(eU.t["1b9neu"]))
                : null != l
                  ? (e = eU.intl.string(eU.t.iI1gMg))
                  : null != n
                    ? (e = eU.intl.string(eU.t.KaWCyD))
                    : s?.isGuildStageVoice() && (e = eU.intl.string(eU.t["2frWa3"])),
                (o = (0, u.jsx)(C.D, {
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
                    className: ts.xF,
                    children: [
                        (0, u.jsx)(b.S, {
                            checked: r === tc.value,
                            onChange: this.handleToggleMaxAge,
                            label: eU.intl.string(eU.t["QKJru/"]),
                        }),
                        (0, u.jsx)(T.m, {
                            text: eU.intl.string(eU.t.Yx4IiC),
                            children: (0, u.jsx)(N.D, {
                                onClick: this.openSettings,
                                className: td.or,
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
            case to.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: l, controls: s, listProps: a } = this.getBodyContent();
                return (0, u.jsx)(S.a, {
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
            case to.QR.SETTINGS:
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
function tp(e) {
    let { section: t, heading: n, isOpen: i, onToggleVisibility: l } = e;
    return (0, u.jsxs)(N.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg",
        },
        className: ts.uP,
        onClick: () => l(t),
        "aria-expanded": i,
        children: [
            (0, u.jsx)(f.E, { variant: "body-sm/medium", color: "text-muted", children: n }),
            (0, u.jsx)(R.a, { size: "md", color: "currentColor", className: ts.ep }),
        ],
    });
}
function tm(e) {
    let t,
        n,
        {
            channel: i,
            guild: l,
            source: s,
            guildScheduledEvent: a,
            streamUserId: r,
            applicationId: o,
            transitionState: c,
            onClose: g,
            page: h,
            analyticsLocation: A,
            ref: v,
        } = e,
        { analyticsLocations: S } = (0, ei.Ay)(en.A.INSTANT_INVITE_MODAL),
        x = (0, y.bG)(
            [ey.Ay, F.A, ep.A, H.A],
            () => {
                if (null != i) return i;
                let e = ey.Ay.getChannelId(),
                    t = null == e || (0, tu.jq)(e) ? void 0 : F.A.getChannel(e);
                return (
                    t?.isThread() && (t = F.A.getChannel(t.parent_id)),
                    t?.guild_id === l.id && null != t && H.A.can(K.xBc.VIEW_CHANNEL, t)
                        ? t
                        : ep.A.getDefaultChannel(l.id, !0, K.xBc.CREATE_INSTANT_INVITE)
                );
            },
            [i, l.id],
        ),
        f = (0, ea.Ay)(x),
        E = null;
    null != r ? (E = m.y.STREAM) : null != o && (E = m.y.EMBEDDED_APPLICATION);
    let _ = null != i ? i.getGuildId() : null != l ? l.id : null,
        C = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? "",
                l = eC.useExperiment({ guildId: i, location: n }),
                s = eb.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== e_ ? l : s,
                r = (0, ef.bG)([eE.A], () => eE.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: n } = e;
                      if (t?.features.has(K.GuildFeatures.HUB)) return L.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != n) return n.defaultMaxAge ?? e_;
                      let i = t?.id ?? "",
                          l = eC.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== e_
                          ? l.defaultMaxAge
                          : (eb.getCurrentConfig({ guildId: i, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? e_);
                  })({ guild: r, experimentConfig: a });
        })({ guildId: _, location: "InstantInviteModalConnected" }),
        b = (function (e) {
            let { guildId: t, location: n } = e,
                i = t ?? "",
                l = eC.useExperiment({ guildId: i, location: n }),
                s = eb.useExperiment({ guildId: i, location: n }),
                a = l?.defaultMaxAge !== e_ ? l : s;
            return L.Ay.getMaxAgeOptions({ includeExperimentalValues: [a?.defaultMaxAge] });
        })({ guildId: _, location: "InstantInviteModalConnected" }),
        T = (0, y.bG)(
            [em.A],
            () => {
                let e = null != x ? x.id : null;
                return null == e ? null : em.A.getInvite(e, { targetType: E, targetUserId: r, targetApplicationId: o });
            },
            [x, E, r, o],
        ),
        [N, M, R, O] = (0, y.yK)(
            [ee, eS.Ay],
            () => [
                ee.getInviteSuggestionRows(),
                ee.getTotalSuggestionsCount() >= 1,
                ee.getInitialCounts(),
                null != i && null != x ? eS.Ay.getVoiceStatesForChannel(x) : null,
            ],
            [x, i],
        ),
        U = d.useMemo(() => {
            let e = null != x ? x.id : null;
            return null != _ ? eA.Ay.getProps(_, e) : void 0;
        }, [x, _]),
        D = (0, y.bG)([H.A], () => null != x && H.A.can(K.xBc.CREATE_INSTANT_INVITE, x), [x]),
        V = null === T || !D,
        P = x?.type === K.rbe.GUILD_VOICE,
        k = (0, es.A)(x),
        B = d.useMemo(() => {
            let e = new Set();
            return (
                P || null != r
                    ? O?.forEach((t) => {
                          let { user: n } = t;
                          e.add(n.id);
                      })
                    : null != _ &&
                      null != U &&
                      E !== m.y.EMBEDDED_APPLICATION &&
                      U.rows.forEach((t) => {
                          t.type === eA.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [P, U, r, O, _, E]),
        Q = i?.id,
        q = (0, y.bG)([ec.A], () => ec.A.getStageInstanceByChannel(Q), [Q]);
    d.useEffect(() => {
        (function (e) {
            let { omitUserIds: t, guild: n, channel: i, applicationId: l, inviteTargetType: s } = e;
            return (0, G.u)().then(() => {
                w.h.dispatch({
                    type: "LOAD_INVITE_SUGGESTIONS",
                    omitUserIds: t ?? new Set(),
                    guild: n,
                    channel: i,
                    applicationId: l,
                    inviteTargetType: s,
                });
            });
        })({ omitUserIds: B, guild: l, channel: x, applicationId: o, inviteTargetType: E }).catch(K.FXj);
    }, [B, x, l, o, E]);
    let [z] = (0, el.A)(null != o ? [o] : []),
        W = null != T ? T.code : void 0,
        Y = T?.maxAge,
        $ = T?.maxUses,
        Z = T?.temporary,
        J = l.vanityURLCode,
        X = null != J && J.length > 0,
        er = !D && !x?.isGuildVocal() && X,
        eo = T?.flags ?? 0;
    D || q?.invite_code == null || (W = q.invite_code);
    let eu = d.useMemo(() => (P ? (0, L.Gv)(N, _) : null), [P, N, _]),
        [eg, eh] = d.useState({
            query: "",
            maxAgeOptions: b,
            maxAge: Y ?? C ?? e_,
            savedMaxAge: Y === tc.value ? (C ?? tg.value) : tc.value,
            maxUses: null != $ && 0 !== $ ? $ : th.value,
            temporary: Z ?? !1,
            networkError: void 0,
            showVanityURL: er,
            currentPage: h ?? to.QR.MAIN,
            lastPage: void 0,
            flags: eo,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eI = d.useCallback((e) => {
            eh((t) => ({ ...t, ...e }));
        }, []),
        ex = d.useCallback(
            (e) => {
                eI({ currentPage: e, lastPage: eg.currentPage });
            },
            [eg.currentPage, eI],
        ),
        eT = P && !er && !V && !k,
        { enabled: eN } = ed.useExperiment({ guildId: l?.id, location: "acc417_3" }, { autoTrackExposure: eT }),
        { canCreateApplicationBypassInvites: ew, isManualApprovalGuild: eG } =
            ((t = (0, y.bG)([H.A], () => H.A.can(K.xBc.KICK_MEMBERS, l), [l])),
            {
                canCreateApplicationBypassInvites:
                    (n = !!(
                        l?.features.has(K.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        l?.features.has(K.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && t,
                isManualApprovalGuild: n,
            }),
        eO = (eN && eT) || eG,
        { maxAge: eU, maxUses: eD, temporary: eV, savedMaxAge: eL, flags: eF, roleIds: eP } = eg,
        ek = !eO && eV,
        eH = (function (e) {
            let {
                sortedRoles: t,
                currentUser: n,
                canManageRoles: i,
            } = (0, y.cf)(
                [eR.A, ev.default, H.A],
                () => ({
                    sortedRoles: null != e ? eR.A.getSortedRoles(e.id) : [],
                    currentUser: ev.default.getCurrentUser(),
                    canManageRoles: null != e && H.A.can(K.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return d.useMemo(() => {
                if (null == e || null == n || !i) return [];
                let l = ej.HJ(e, n.id);
                return t.filter(
                    (t) =>
                        !(0, eM.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!ej.wO(e, n.id, l, t),
                );
            }, [e, n, i, t]);
        })(l),
        eB = eH.length > 0,
        eK = d.useCallback(
            (e) => {
                let t = new Set(eP);
                (t.delete(e) || t.add(e), eI({ roleIds: t }));
            },
            [eP, eI],
        ),
        eQ = d.useCallback(() => {
            let { currentPage: e, lastPage: t } = eg;
            e === to.QR.SETTINGS && null != t ? ex(t) : g();
        }, [ex, eg, g]),
        eq = d.useCallback(() => {
            let e = x?.id;
            (0 === eD && 0 === eU && !ek && er
                ? eI({ networkError: void 0, showVanityURL: !0 })
                : D &&
                  null != e &&
                  (eI({ networkError: void 0, showVanityURL: !1 }),
                  j.Ay.createInvite(
                      e,
                      {
                          max_age: eU,
                          max_uses: eD,
                          target_type: E,
                          target_user_id: r,
                          target_application_id: z?.id,
                          temporary: ek,
                          flags: eF,
                          role_ids: Array.from(eP),
                      },
                      s,
                  ).catch((e) => eI({ networkError: e, showVanityURL: er }))),
                eU !== tc.value && eL !== tc.value && eI({ savedMaxAge: tc.value }));
        }, [er, D, x, s, z?.id, E, r, eU, eD, ek, eI, eL, eF, eP]),
        ez = (0, et.Ay)(x),
        eW = (0, et.Ay)((0, I.Lt)(eF, p.Q.IS_APPLICATION_BYPASS)),
        eY = null != ez && ez !== x,
        e$ = null != eW && eW !== (0, I.Lt)(eF, p.Q.IS_APPLICATION_BYPASS);
    return (
        d.useEffect(() => {
            !er && (eY || e$) && eq();
        }, [eq, eY, e$, er]),
        (0, u.jsx)(ei.f5, {
            value: S,
            children: (0, u.jsx)(tA, {
                ref: v,
                canCreateInvites: D,
                noInvitesAvailable: V,
                inviteChannel: x,
                inviteChannelName: f,
                guild: l,
                guildScheduledEvent: a,
                streamUserId: r,
                vanityURLCode: J,
                targetType: E,
                targetUserId: r,
                application: z,
                rows: N,
                sections: eu,
                showFriends: M,
                initialCounts: R,
                code: W,
                source: s,
                analyticsLocations: S,
                analyticsLocation: A,
                transitionState: c,
                onClose: g,
                canShowVanityURL: er,
                isGuestInviteCreationToggleEnabled: eN && eT,
                shouldHideTemporaryInviteToggle: eO,
                modalState: { ...eg, temporary: ek },
                setModalState: eI,
                changePage: ex,
                onGenerateNewLink: eq,
                handleDone: eQ,
                isApplicationBypassToggleEnabled: ew && !V,
                isRoleAssignmentEnabled: eB,
                assignableRoles: eH,
                onToggleRole: eK,
            }),
        })
    );
}
function tI(e) {
    return (0, u.jsx)(tm, { ...e });
}
