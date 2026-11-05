(i.d(t, { default: () => e5 }), i(938796));
var n = i(477900),
    l = i(582128),
    a = i(284009),
    s = i.n(a),
    r = i(435558),
    o = i.n(r),
    d = i(821418),
    u = i(294630),
    c = i(665260),
    g = i(855986),
    h = i(646514),
    p = i(189213),
    A = i(695366),
    m = i(834730),
    v = i(683438),
    x = i(396478),
    I = i(452027),
    y = i(150934),
    S = i(866665),
    f = i(939249),
    E = i(625903),
    b = i(847374),
    C = i(574332),
    _ = i(681579),
    T = i(475743),
    M = i(793574),
    N = i(688810),
    j = i(429913),
    R = i(148719),
    w = i(47167),
    G = i(713654),
    O = i(834757),
    U = i(600975);
let V = (0, U.C)({
    kind: "guild",
    id: "2023-02_guest_voice_invites",
    label: "Guest Voice Invites",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Allow creation of guest voice invites", config: { enabled: !0 } }],
});
var D = i(446600),
    P = i(260509),
    F = i(616356),
    L = i(963307),
    k = i(734057),
    H = i(808728),
    B = i(958590),
    K = i(535820),
    Q = i(576705),
    z = i(290863),
    q = i(309010),
    W = i(287809),
    Y = i(607567),
    $ = i(129230),
    Z = i(735547),
    J = i(164636),
    X = i(71393),
    ee = i(652215);
let et = Z.Ay.INVITE_OPTIONS_7_DAYS.value,
    ei = (0, U.C)({
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
    en = (0, U.C)({
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
var el = i(21599),
    ea = i(279208),
    es = i(34457),
    er = i(317525),
    eo = i(488926),
    ed = i(545442),
    eu = i(890497),
    ec = i(143129),
    eg = i(792996),
    eh = i(372996);
let ep = Z.Ay.getMaxUsesOptions;
function eA(e) {
    let {
            shouldHideTemporaryInviteToggle: t,
            maxAgeOptions: i,
            maxAge: a,
            maxUses: s,
            temporary: r,
            onToggleTemporary: o,
            onSelectMaxAge: u,
            onSelectMaxUses: g,
            isGuestInviteCreationToggleEnabled: h,
            inviteFlags: p,
            onSetInviteFlags: A,
            isRoleAssignmentEnabled: m,
            assignableRoles: v,
            selectedRoleIds: x,
            onToggleRole: I,
        } = e,
        y = Z.Ay.getMaxAgeOptionByValue(a),
        S = ep.find((e) => e.value === s),
        f = l.useMemo(
            () =>
                v.map((e) => ({
                    id: e.id,
                    value: e.id,
                    label: e.name,
                    leading: () =>
                        (0, n.jsx)(ed.W, {
                            color: e.colorString ?? ee.TpD,
                            colors: e.colorStrings,
                            background: !1,
                            tooltip: !1,
                        }),
                })),
            [v],
        ),
        E = l.useCallback(
            (e) => {
                let t = Array.from(x),
                    i = e ?? [],
                    n = i.find((e) => !t.includes(e)),
                    l = t.find((e) => !i.includes(e));
                null != n ? I(n) : null != l && I(l);
            },
            [x, I],
        );
    return (0, n.jsxs)("div", {
        className: eh.z1,
        children: [
            (0, n.jsx)(eu.Z, {
                label: eg.intl.string(eg.t["60qw2x"]),
                options: i,
                formatOption: (e) => {
                    let { value: t, label: i } = e;
                    return { id: t.toString(), value: t, label: i };
                },
                value: y?.value ?? i[0].value,
                onSelectionChange: u,
                selectionMode: "single",
            }),
            (0, n.jsx)(eu.Z, {
                label: eg.intl.string(eg.t.jDqWHW),
                options: ep,
                formatOption: (e) => {
                    let { value: t, label: i } = e;
                    return { id: t.toString(), value: t, label: i };
                },
                value: S?.value,
                onSelectionChange: g,
                selectionMode: "single",
            }),
            m &&
                v.length > 0 &&
                (0, n.jsx)(eu.Z, {
                    label: eg.intl.string(eg.t.rPYJxL),
                    placeholder: eg.intl.string(eg.t["/djIh7"]),
                    options: f,
                    value: Array.from(x),
                    onSelectionChange: E,
                    selectionMode: "multiple",
                    closeOnSelect: !1,
                    disabled: r,
                }),
            !t &&
                (0, n.jsx)(ec.d, {
                    checked: r,
                    onChange: (e) => o(e),
                    description: eg.intl.string(eg.t.UN5IRX),
                    label: eg.intl.string(eg.t["wE+9dr"]),
                    disabled: x.size > 0,
                }),
            h &&
                (0, n.jsx)(ec.d, {
                    checked: (0, c.Lt)(p, d.Q.IS_GUEST_INVITE),
                    onChange: (e) => A((0, c.lA)(p, d.Q.IS_GUEST_INVITE, e)),
                    description: eg.intl.string(eg.t["/FeTK6"]),
                    label: eg.intl.string(eg.t.siexRS),
                }),
        ],
    });
}
function em(e) {
    let {
            handleDone: t,
            modalState: i,
            shouldHideTemporaryInviteToggle: l,
            onGenerateNewLink: a,
            onToggleTemporary: s,
            onSelectMaxAge: r,
            onSelectMaxUses: o,
            isGuestInviteCreationToggleEnabled: d,
            onSetInviteFlags: u,
            onClose: c,
            transitionState: g,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            onToggleRole: m,
        } = e,
        { maxAgeOptions: v, maxAge: x, maxUses: I, temporary: y, flags: S, roleIds: f } = i;
    return (0, n.jsx)(p.a, {
        transitionState: g,
        onClose: c,
        title: eg.intl.string(eg.t.Atdlyu),
        actions: [
            { variant: "secondary", text: eg.intl.string(eg.t["ETE/oC"]), onClick: t },
            {
                variant: "primary",
                text: eg.intl.string(eg.t.pz1lRG),
                onClick: () => {
                    (a(), t());
                },
            },
        ],
        children: (0, n.jsx)(eA, {
            shouldHideTemporaryInviteToggle: l,
            maxAgeOptions: v,
            maxAge: x,
            maxUses: I,
            temporary: y,
            onToggleTemporary: s,
            onSelectMaxAge: r,
            onSelectMaxUses: o,
            isGuestInviteCreationToggleEnabled: d,
            onSetInviteFlags: u,
            inviteFlags: S,
            isRoleAssignmentEnabled: h,
            assignableRoles: A,
            selectedRoleIds: f,
            onToggleRole: m,
        }),
    });
}
var ev = i(312556),
    ex = i(503698),
    eI = i.n(ex),
    ey = i(350835),
    eS = i(935154),
    ef = i(778712),
    eE = i(97808),
    eb = i(821609),
    eC = i(774300),
    e_ = i(566903),
    eT = i(714114),
    eM = i(864436),
    eN = i(835072),
    ej = i(628983),
    eR = i(85448),
    ew = i(571694),
    eG = i(10862),
    eO = i(408278),
    eU = i(562153),
    eV = i(960027),
    eD = i(978940),
    eP = i(387755),
    eF = i(325909),
    eL = i(994500),
    ek = i(806931),
    eH = i(818348);
function eB(e) {
    let { user: t, channel: i, location: a } = e,
        s = (0, g.bG)([q.Ay], () => q.Ay.getVoiceChannelId() === i.id),
        r = (0, eU.tx)(i.guild_id, i.id, t),
        {
            icon: o,
            iconColor: d,
            tooltipText: u,
            disabled: c,
            shouldHideButton: p,
            onClick: A,
        } = (function (e) {
            let { user: t, channel: i, location: n } = e,
                a = (0, eF.o)(t, i.id),
                s = (0, g.bG)([ej.A], () => ej.A.getParticipant(i.id, t.id)),
                r = null == s,
                o = null != s && s.type === ek.lp.USER && s.ringing,
                d = (0, g.bG)([eL.A], () => eL.A.isFriend(t.id)),
                u = (0, g.bG)([z.A], () => z.A.getStatus(t.id) === eH.cl.DND && i?.guild_id != null),
                c = !a,
                p = (0, l.useCallback)(() => {
                    if (a) {
                        if (r) return void eP.A.ring(i.id, [t.id], n);
                        o && eP.A.stopRinging(i.id, [t.id]);
                    }
                }, [r, o, a, n, i.id, t.id]);
            return {
                iconColor: o ? h.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
                icon: o ? eV.PhoneHangUpIcon : eD.PhoneCallIcon,
                tooltipText: d
                    ? u
                        ? eg.intl.string(eg.t.jaNpQH)
                        : r
                          ? eg.intl.string(eg.t["3Hv9qQ"])
                          : o
                            ? eg.intl.string(eg.t.ygslb0)
                            : null
                    : eg.intl.string(eg.t.TGqF9g),
                disabled: !a,
                shouldHideButton: c,
                onClick: p,
            };
        })({ user: t, channel: i, location: a });
    return !s || p
        ? null
        : (0, n.jsx)(S.m, {
              text: u,
              children: (0, n.jsx)("div", {
                  children: (0, n.jsx)(eO.K, {
                      variant: "icon-only",
                      icon: () => (0, n.jsx)(o, { size: "sm", color: d }),
                      "aria-label": eg.intl.formatToPlainString(eg.t["3IPBG1"], { username: r }),
                      size: "sm",
                      onClick: A,
                      disabled: c,
                  }),
              }),
          });
}
var eK = i(486020),
    eQ = i(240248),
    ez = i(427262),
    eq = i(855755),
    eW = i(87617);
function eY(e, t) {
    if (null != e) return { suggestionData: K.A.getSelectedInviteMetadata(e), source: t };
}
let e$ = l.memo(
    function (e) {
        var t;
        let i,
            {
                user: a,
                channel: s,
                inviteKey: r,
                location: o,
                row: d,
                source: u,
                ringingEnabled: c,
                inviteChannel: h,
                guildId: p,
            } = e,
            [A, v] = l.useState(!1),
            [x, I] = l.useState(!1),
            y = l.useId(),
            S = `invite-row-name-${y}`,
            f = `invite-row-button-${y}`,
            E = (0, eq.A)(x),
            b = (0, g.bG)([X.A], () => X.A.getGuild(s?.guild_id)),
            {
                status: C,
                isMobileOnline: _,
                activities: T,
            } = (0, g.cf)(
                [z.A],
                () =>
                    null == a
                        ? { status: void 0, isMobileOnline: void 0, activities: void 0 }
                        : {
                              status: z.A.getStatus(a.id, p),
                              isMobileOnline: z.A.isMobileOnline(a.id),
                              activities: z.A.getActivities(a.id, p),
                          },
                [a, p],
            ),
            { activityStatusText: M, activityStatusIcon: N } = l.useMemo(() => {
                if (null == T) return { activityStatusText: {}, activityStatusIcon: void 0 };
                let e = T.find((e) => e.type !== ey.$.CUSTOM_STATUS && e.type !== ey.$.HANG_STATUS);
                return { activityStatusText: (0, e_.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, eN.f)(e) };
            }, [T]),
            { voiceChannel: j } = (0, eT.Ay)({ userId: a?.id }),
            R = (0, w.Ay)(j),
            G = (0, g.bG)([ej.A], () => (null != h && null != a ? ej.A.getParticipant(h.id, a.id) : null)),
            O = c && null != G && G.type === ek.lp.USER && G.ringing,
            U = (0, eS.S3)(ee.clD.ONLINE),
            V = l.useCallback(() => {
                null != r &&
                    (null != s
                        ? (v(!0),
                          eC.A.enqueue(
                              {
                                  type: eC.F.GROUP_DM,
                                  channel: s,
                                  inviteKey: r,
                                  location: o,
                                  inviteAnalyticsMetadata: eY(d, u),
                              },
                              (e) => {
                                  (v(!1), I(e));
                              },
                          ))
                        : null != a &&
                          (v(!0),
                          eC.A.enqueue(
                              {
                                  type: eC.F.USER,
                                  user: a,
                                  inviteKey: r,
                                  location: o,
                                  inviteAnalyticsMetadata: eY(d, u),
                              },
                              (e) => {
                                  (v(!1), I(e));
                              },
                          )));
            }, [r, s, a, o, d, u]),
            D = ez.Ay.getName(a),
            P = null != a ? eL.A.getNickname(a.id) : null,
            F = null != s ? (0, w.m1)(s, W.default, eL.A) : null,
            L = null != a ? a.getAvatarURL(s?.guild_id, 32) : null,
            k = null != s ? (0, ew.Y)(s) : null,
            H =
                null != b && null != s && null == k
                    ? eK.Ay.getGuildIconURL({ id: s.guild_id, icon: b.icon, size: 32 })
                    : null,
            B = C !== ee.clD.OFFLINE ? C : void 0,
            K = L ?? k ?? H,
            Q = D ?? F ?? void 0,
            q = null != b && null == b.icon ? (0, eQ.oN)(b.name) : null,
            Y = null != K && null != Q;
        null != a && (i = P ?? D);
        let $ = ez.Ay.getUserTag(a, { decoration: "never" }),
            J = null != i || null != s,
            et = null != (t = d) && (t.type === Z.OK.DM || t.type === Z.OK.FRIEND) && !0 === t.isGuildMember,
            ei = et
                ? (0, n.jsx)(m.E, {
                      variant: "body-sm/medium",
                      color: "text-muted",
                      children: eg.intl.string(eg.t.u1sEfz),
                  })
                : (0, n.jsx)(eb.$, {
                      id: f,
                      variant: "secondary",
                      text: x ? eg.intl.string(eg.t.dVT149) : eg.intl.string(eg.t.jYnGPG),
                      "aria-labelledby": J ? `${f} ${S}` : void 0,
                      size: "sm",
                      loading: A,
                      onClick: V,
                      disabled: x,
                  }),
            en = null != M.text,
            el = null != j && null != R,
            ea = el || en || null != a;
        return (0, n.jsxs)("div", {
            ref: E,
            tabIndex: -1,
            className: eI()(eW.Og, { [eW.E2]: et }),
            children: [
                (0, n.jsxs)("div", {
                    className: eW.mQ,
                    children: [
                        Y
                            ? O
                                ? (0, n.jsx)(eR.Ay, { size: ef._3.SIZE_32, ringing: O, src: K, className: eW.hO })
                                : (0, n.jsx)(eE.eu, {
                                      src: K,
                                      "aria-label": Q,
                                      size: ef._3.SIZE_32,
                                      className: eW.hO,
                                      status: null != a ? B : void 0,
                                      isMobile: null != a ? _ : void 0,
                                  })
                            : (0, n.jsx)(m.E, {
                                  variant: "body-md/medium",
                                  className: eW.q9,
                                  "aria-hidden": !0,
                                  children: q,
                              }),
                        (0, n.jsxs)("div", {
                            className: eI()(eW.BT, { [eW.DF]: O }),
                            children: [
                                (0, n.jsxs)(m.E, {
                                    id: S,
                                    tag: "strong",
                                    variant: "body-md/semibold",
                                    lineClamp: 1,
                                    children: [i, null != s ? (0, w.m1)(s, W.default, eL.A, !0) : null],
                                }),
                                ea &&
                                    (0, n.jsxs)("div", {
                                        className: eI()(eW.eq, { [eW.DF]: O }),
                                        children: [
                                            el
                                                ? (0, n.jsx)(eG.A, {
                                                      size: "custom",
                                                      color: U,
                                                      channel: j,
                                                      className: eW.j8,
                                                  })
                                                : null != N
                                                  ? (0, n.jsx)(eM.A, { icon: N, className: eW.j8 })
                                                  : null,
                                            el
                                                ? (0, n.jsx)(m.E, {
                                                      variant: "body-xs/medium",
                                                      color: "text-status-online",
                                                      lineClamp: 1,
                                                      children: R,
                                                  })
                                                : en
                                                  ? (0, n.jsx)(m.E, {
                                                        variant: "body-xs/medium",
                                                        color: "text-status-online",
                                                        lineClamp: 1,
                                                        children: M.text,
                                                    })
                                                  : (0, n.jsx)(m.E, {
                                                        variant: "body-xs/normal",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: $,
                                                    }),
                                            (0, n.jsx)(m.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                lineClamp: 1,
                                                children: O && ` \u{2022} ${eg.intl.string(eg.t.sURrjb)}`,
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eW.t$,
                    children: [
                        c && null != a && null != h && (0, n.jsx)(eB, { user: a, channel: h, location: "InviteRow" }),
                        ei,
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
var eZ = i(172799),
    eJ = i(746080),
    eX = i(440155);
let { INVITE_OPTIONS_FOREVER: e0, INVITE_OPTIONS_7_DAYS: e1, INVITE_OPTIONS_UNLIMITED: e3 } = Z.Ay;
class e2 extends l.PureComponent {
    _scroller = null;
    _headerId = o().uniqueId();
    static defaultProps = { analyticsLocation: ee.ThZ.GUILD_CREATE_INVITE_SUGGESTION, defaultMaxAge: e1.value };
    componentDidMount() {
        let {
                inviteChannel: e,
                code: t,
                guild: i,
                source: n,
                canCreateInvites: l,
                analyticsLocation: a,
                streamUserId: s,
                targetType: r,
                targetUserId: o,
                application: d,
                initialCounts: u,
                rows: c,
                showFriends: g,
                modalState: h,
                setModalState: p,
            } = this.props,
            { maxAge: A, maxUses: m, temporary: v, flags: x } = h;
        if (l) {
            let i = e?.id;
            if (null == i) return;
            (p({ networkError: void 0 }),
                C.Ay.createInvite(
                    i,
                    {
                        validate: t ?? null,
                        max_age: A,
                        max_uses: m,
                        target_user_id: o,
                        target_type: r,
                        target_application_id: d?.id,
                        temporary: v,
                        flags: x,
                    },
                    n,
                ).catch((e) => p({ networkError: e })));
        }
        if (
            (g &&
                $.default.track(ee.HAw.INVITE_SUGGESTION_OPENED, {
                    location: n,
                    num_suggestions: c.length,
                    num_friends: u.numFriends,
                    num_dms: u.numDms,
                    num_group_dms: u.numGroupDms,
                    guild_id: i.id,
                    application_id: d?.id,
                }),
            null != s)
        ) {
            let e = F.A.getStreamForUser(s, i.id),
                t = (0, O.Ee)(e, z.A);
            $.default.track(ee.HAw.OPEN_MODAL, {
                type: "Send Stream Invite",
                source: n,
                location: a,
                other_user_id: s,
                application_id: null != t ? t.id : null,
                application_name: null != t ? t.name : null,
                game_id: null != t ? t.id : null,
            });
        } else
            d?.id != null ||
                $.default.track(ee.HAw.OPEN_MODAL, { type: "Instant Invite Modal", source: n, location: a });
    }
    componentWillUnmount() {
        let { inviteChannel: e, modalState: t } = this.props;
        (0, c.Lt)(t.flags, d.Q.IS_GUEST_INVITE) && null != e && C.Ay.clearInviteFromStore(e.id);
    }
    getInviteKey() {
        let { code: e, vanityURLCode: t, guildScheduledEvent: i, modalState: n } = this.props,
            { showVanityURL: l } = n,
            a = l ? t : (e ?? t);
        return null == a ? a : (0, el.WU)({ baseCode: a, guildScheduledEventId: i?.id });
    }
    getSectionVisibility = (e) => {
        let { modalState: t } = this.props;
        return t.sectionVisibility[e] ?? !0;
    };
    openSettings = () => {
        let { changePage: e } = this.props;
        e(eZ.QR.SETTINGS);
    };
    handleSelectMaxAge = (e) => {
        let { modalState: t, setModalState: i } = this.props;
        i({ maxAge: e, savedMaxAge: t.maxAge });
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
        let { modalState: t, setModalState: i } = this.props,
            n = { query: e };
        ("" === e && "" !== t.query
            ? ((n.sectionVisibility = { ...t.defaultSectionVisibility }), (n.defaultSectionVisibility = {}))
            : "" !== e &&
              "" === t.query &&
              ((n.defaultSectionVisibility = { ...t.sectionVisibility }), (n.sectionVisibility = {})),
            this._scroller?.scrollTo({ to: 0 }),
            (0, _.B)(e),
            i(n));
    };
    handleClearSearch = () => {
        this.handleQueryChange("");
    };
    handleToggleMaxAge = () => {
        let { modalState: e, setModalState: t } = this.props,
            { maxAge: i, savedMaxAge: n } = e;
        t({ maxAge: n, savedMaxAge: i });
    };
    handleToggleSectionVisibility = (e) => {
        let { modalState: t, setModalState: i } = this.props;
        i({ sectionVisibility: { ...t.sectionVisibility, [e]: !this.getSectionVisibility(e) } });
    };
    renderChannelWarning() {
        let { inviteChannel: e } = this.props;
        return (0, R.A)(e)
            ? (0, n.jsxs)("div", {
                  className: eW.UW,
                  children: [
                      (0, n.jsx)(A.CircleErrorIcon, {
                          size: "custom",
                          className: eW.QW,
                          color: h.A.unsafe_rawColors.YELLOW_300.css,
                          width: 12,
                      }),
                      (0, n.jsx)(m.E, {
                          variant: "body-xs/normal",
                          color: "text-default",
                          children: eg.intl.string(eg.t.x1SQZb),
                      }),
                  ],
              })
            : null;
    }
    getHeaderContent() {
        let e,
            t,
            { guild: i, guildScheduledEvent: l, streamUserId: a, application: s, inviteChannel: r } = this.props;
        if (
            ((e =
                null != a
                    ? eg.intl.string(eg.t["6VQaqd"])
                    : null != s
                      ? eg.intl.formatToPlainString(eg.t.ZdK3dW, { applicationName: s.name })
                      : null != l
                        ? eg.intl.string(eg.t.JKV4FL)
                        : r?.isGuildStageVoice()
                          ? eg.intl.string(eg.t.zTrsH0)
                          : eg.intl.formatToPlainString(eg.t.NvVBJU, { name: i.name })),
            null != r)
        ) {
            let e = (0, G.gU)(r, i);
            if (null != e) {
                let i = this.props.inviteChannelName ?? eg.intl.string(eg.t["/YzI63"]);
                t = eg.intl.format(eg.t.MkSwTR, {
                    channelName: i,
                    channelNameHook: (t, i) =>
                        (0, n.jsxs)("span", { children: [(0, n.jsx)(e, { className: eW.p }), t] }, i),
                });
            }
        }
        return i.features.has(ee.GuildFeatures.HUB)
            ? { title: eg.intl.string(eg.t.WhR38i), subtitle: eg.intl.string(eg.t.Ed4BMs) }
            : { title: e, subtitle: t };
    }
    renderFriendsBody() {
        let { modalState: e, showFriends: t, guild: i } = this.props,
            { query: l } = e,
            a = this.getListProps();
        return {
            bodyContent: void 0,
            controls: (0, n.jsxs)(n.Fragment, {
                children: [
                    t &&
                        (0, n.jsx)(v.I, {
                            size: "md",
                            query: l,
                            onChange: this.handleQueryChange,
                            placeholder: eg.intl.string(eg.t.CmSHYx),
                            autoFocus: !0,
                            onClear: this.handleClearSearch,
                        }),
                    !i.features.has(ee.GuildFeatures.HUB) && this.renderChannelWarning(),
                ],
            }),
            listProps: a,
        };
    }
    getListProps() {
        let { rows: e, sections: t } = this.props,
            i = this.getInviteKey();
        return 0 === e.length
            ? {
                  sections: [1],
                  sectionHeight: 0,
                  renderRow: () =>
                      (0, n.jsx)("div", {
                          className: eW.Iq,
                          children: (0, n.jsx)(x.SG, { children: eg.intl.string(eg.t.ojoWgX) }),
                      }),
                  rowHeight: 200,
              }
            : null == i
              ? {
                    sections: [1],
                    sectionHeight: 0,
                    renderRow: () =>
                        (0, n.jsx)("div", {
                            className: eW.Iq,
                            children: (0, n.jsx)(x.SG, { children: eg.intl.string(eg.t.hzPwGG) }),
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
        let { sections: i, rows: n } = this.props,
            l = this.getSectionVisibility(e);
        if (null != i && !l) return 0;
        switch ((null == i ? n[t] : i[e][t]).type) {
            case Z.OK.CHANNEL:
            case Z.OK.GROUP_DM:
            case Z.OK.DM:
            case Z.OK.FRIEND:
                return 48;
            default:
                return 0;
        }
    };
    renderRow = (e) => {
        let { section: t, row: i } = e,
            { rows: l, sections: a, analyticsLocation: s, source: r, inviteChannel: o, guild: d } = this.props,
            u = this.getInviteKey(),
            c = null == a ? l[i] : a[t][i],
            g = `${c.type}-${c.item.id}`,
            h = this.getSectionVisibility(t);
        if (null != a && !h) return null;
        switch (c.type) {
            case Z.OK.GROUP_DM:
            case Z.OK.CHANNEL:
                return (0, n.jsx)(
                    e$,
                    { row: c, channel: c.item, inviteKey: u, location: s, source: r, guildId: d.id },
                    g,
                );
            case Z.OK.DM:
            case Z.OK.FRIEND:
                return (0, n.jsx)(
                    e$,
                    { row: c, user: c.item, inviteKey: u, location: s, source: r, inviteChannel: o, guildId: d.id },
                    g,
                );
            default:
                return null;
        }
    };
    getSectionHeight = (e) => (0 === e ? 24 : 36);
    renderSection = (e) => {
        let { section: t } = e,
            { sections: i } = this.props;
        if (null == i) return null;
        let l = 0 === t ? eg.intl.string(eg.t.y29JXs) : eg.intl.string(eg.t.Sd8Ixw),
            a = this.getSectionVisibility(t);
        return (0, n.jsx)(e4, {
            section: t,
            heading: l,
            isOpen: a,
            onToggleVisibility: this.handleToggleSectionVisibility,
        });
    };
    getBodyContent() {
        let { guild: e, showFriends: t, streamUserId: i, application: l } = this.props;
        if (t) return this.renderFriendsBody();
        let a = (0, ea.A)(this.getInviteKey() ?? ""),
            r = W.default.getCurrentUser();
        s()(null != r, "InstantInviteModal: user cannot be undefined");
        let o = (0, P.bM)(e, r) ? eg.intl.string(eg.t.HFbByJ) : eg.intl.string(eg.t.ueBhA9);
        return (
            null != i ? (o = eg.intl.string(eg.t.CXpS1I)) : null != l && (o = eg.intl.string(eg.t.ueCrHB)),
            {
                bodyContent: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(m.E, { className: eW.Sv, variant: "body-sm/normal", children: o }),
                        (0, n.jsx)(ev.p, { ...this.props, setInviteFlags: this.handleSetInviteFlags, copyValue: a }),
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
                guildScheduledEvent: i,
                streamUserId: l,
                application: a,
                inviteChannel: s,
                modalState: r,
            } = this.props,
            { maxAge: o } = r,
            d = null,
            u = (0, ea.A)(this.getInviteKey() ?? "");
        if (t) {
            let e = eg.intl.string(eg.t.MLkj7N);
            (null != l
                ? (e = eg.intl.string(eg.t["1b9neu"]))
                : null != a
                  ? (e = eg.intl.string(eg.t.iI1gMg))
                  : null != i
                    ? (e = eg.intl.string(eg.t.KaWCyD))
                    : s?.isGuildStageVoice() && (e = eg.intl.string(eg.t["2frWa3"])),
                (d = (0, n.jsx)(I.D, {
                    label: e,
                    children: (0, n.jsx)(ev.p, {
                        ...this.props,
                        setInviteFlags: this.handleSetInviteFlags,
                        copyValue: u,
                    }),
                })));
        } else
            e ||
                (d = (0, n.jsxs)("div", {
                    className: eW.xF,
                    children: [
                        (0, n.jsx)(y.S, {
                            checked: o === e0.value,
                            onChange: this.handleToggleMaxAge,
                            label: eg.intl.string(eg.t["QKJru/"]),
                        }),
                        (0, n.jsx)(S.m, {
                            text: eg.intl.string(eg.t.Yx4IiC),
                            children: (0, n.jsx)(f.D, {
                                onClick: this.openSettings,
                                className: eX.or,
                                "aria-label": eg.intl.string(eg.t.Yx4IiC),
                                children: (0, n.jsx)(E.SettingsIcon, {
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
        let { modalState: e, handleDone: t, transitionState: i, onClose: l } = this.props,
            { currentPage: a } = e;
        switch (a) {
            case eZ.QR.MAIN: {
                let { title: e, subtitle: t } = this.getHeaderContent(),
                    { bodyContent: a, controls: s, listProps: r } = this.getBodyContent();
                return (0, n.jsx)(p.a, {
                    transitionState: i,
                    onClose: l,
                    title: e,
                    subtitle: t,
                    input: s,
                    listProps: r,
                    preview: this.renderFooter(),
                    actions: [],
                    children: a,
                });
            }
            case eZ.QR.SETTINGS:
                return (0, n.jsx)(em, {
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
function e4(e) {
    let { section: t, heading: i, isOpen: l, onToggleVisibility: a } = e;
    return (0, n.jsxs)(f.D, {
        style: {
            "--custom-invite-section-header-height": 24,
            "--custom-invite-section-header-gap": 12 * (0 !== t),
            "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg",
        },
        className: eW.uP,
        onClick: () => a(t),
        "aria-expanded": l,
        children: [
            (0, n.jsx)(m.E, { variant: "body-sm/medium", color: "text-muted", children: i }),
            (0, n.jsx)(b.ChevronSmallDownIcon, { size: "md", color: "currentColor", className: eW.ep }),
        ],
    });
}
function e9(e) {
    let t,
        i,
        {
            channel: a,
            guild: s,
            source: r,
            guildScheduledEvent: o,
            streamUserId: h,
            applicationId: p,
            transitionState: A,
            onClose: m,
            page: v,
            analyticsLocation: x,
            ref: I,
        } = e,
        { analyticsLocations: y } = (0, N.Ay)(M.A.INSTANT_INVITE_MODAL),
        S = (0, g.bG)(
            [q.Ay, k.A, H.A, Q.A],
            () => {
                if (null != a) return a;
                let e = q.Ay.getChannelId(),
                    t = null == e || (0, eJ.jq)(e) ? void 0 : k.A.getChannel(e);
                return (
                    t?.isThread() && (t = k.A.getChannel(t.parent_id)),
                    t?.guild_id === s.id && null != t && Q.A.can(ee.xBc.VIEW_CHANNEL, t)
                        ? t
                        : H.A.getDefaultChannel(s.id, !0, ee.xBc.CREATE_INSTANT_INVITE)
                );
            },
            [a, s.id],
        ),
        f = (0, w.Ay)(S),
        E = null;
    null != h ? (E = u.y.STREAM) : null != p && (E = u.y.EMBEDDED_APPLICATION);
    let b = null != a ? a.getGuildId() : null != s ? s.id : null,
        G = (function (e) {
            let { guildId: t, location: i } = e,
                n = t ?? "",
                l = ei.useExperiment({ guildId: n, location: i }),
                a = en.useExperiment({ guildId: n, location: i }),
                s = l?.defaultMaxAge !== et ? l : a,
                r = (0, J.bG)([X.A], () => X.A.getGuild(t));
            return null == t
                ? null
                : (function (e) {
                      let { guild: t, experimentConfig: i } = e;
                      if (t?.features.has(ee.GuildFeatures.HUB)) return Z.Ay.INVITE_OPTIONS_FOREVER.value;
                      if (null != i) return i.defaultMaxAge ?? et;
                      let n = t?.id ?? "",
                          l = ei.getCurrentConfig({ guildId: n, location: "getDefaultInviteExpiration" });
                      return l.defaultMaxAge !== et
                          ? l.defaultMaxAge
                          : (en.getCurrentConfig({ guildId: n, location: "getDefaultInviteExpiration" })
                                .defaultMaxAge ?? et);
                  })({ guild: r, experimentConfig: s });
        })({ guildId: b, location: "InstantInviteModalConnected" }),
        O = (function (e) {
            let { guildId: t, location: i } = e,
                n = t ?? "",
                l = ei.useExperiment({ guildId: n, location: i }),
                a = en.useExperiment({ guildId: n, location: i }),
                s = l?.defaultMaxAge !== et ? l : a;
            return Z.Ay.getMaxAgeOptions({ includeExperimentalValues: [s?.defaultMaxAge] });
        })({ guildId: b, location: "InstantInviteModalConnected" }),
        U = (0, g.bG)(
            [B.A],
            () => {
                let e = null != S ? S.id : null;
                return null == e ? null : B.A.getInvite(e, { targetType: E, targetUserId: h, targetApplicationId: p });
            },
            [S, E, h, p],
        ),
        [P, F, z, $] = (0, g.yK)(
            [K.A, Y.Ay],
            () => [
                K.A.getInviteSuggestionRows(),
                K.A.getTotalSuggestionsCount() >= 1,
                K.A.getInitialCounts(),
                null != a && null != S ? Y.Ay.getVoiceStatesForChannel(S) : null,
            ],
            [S, a],
        ),
        el = l.useMemo(() => {
            let e = null != S ? S.id : null;
            return null != b ? L.Ay.getProps(b, e) : void 0;
        }, [S, b]),
        ea = (0, g.bG)([Q.A], () => null != S && Q.A.can(ee.xBc.CREATE_INSTANT_INVITE, S), [S]),
        ed = null === U || !ea,
        eu = S?.type === ee.rbe.GUILD_VOICE,
        ec = (0, R.A)(S),
        eg = l.useMemo(() => {
            let e = new Set();
            return (
                eu || null != h
                    ? $?.forEach((t) => {
                          let { user: i } = t;
                          e.add(i.id);
                      })
                    : null != b &&
                      null != el &&
                      E !== u.y.EMBEDDED_APPLICATION &&
                      el.rows.forEach((t) => {
                          t.type === L.S9.MEMBER && e.add(t.userId);
                      }),
                e
            );
        }, [eu, el, h, $, b, E]),
        eh = a?.id,
        ep = (0, g.bG)([D.A], () => D.A.getStageInstanceByChannel(eh), [eh]);
    l.useEffect(() => {
        (0, _.t)({ omitUserIds: eg, guild: s, channel: S, applicationId: p, inviteTargetType: E }).catch(ee.FXj);
    }, [eg, S, s, p, E]);
    let [eA] = (0, j.A)(null != p ? [p] : []),
        em = null != U ? U.code : void 0,
        ev = U?.maxAge,
        ex = U?.maxUses,
        eI = U?.temporary,
        ey = s.vanityURLCode,
        eS = null != ey && ey.length > 0,
        ef = !ea && !S?.isGuildVocal() && eS,
        eE = U?.flags ?? 0;
    ea || ep?.invite_code == null || (em = ep.invite_code);
    let eb = l.useMemo(() => (eu ? (0, Z.Gv)(P, b) : null), [eu, P, b]),
        [eC, e_] = l.useState({
            query: "",
            maxAgeOptions: O,
            maxAge: ev ?? G ?? et,
            savedMaxAge: ev === e0.value ? (G ?? e1.value) : e0.value,
            maxUses: null != ex && 0 !== ex ? ex : e3.value,
            temporary: eI ?? !1,
            networkError: void 0,
            showVanityURL: ef,
            currentPage: v ?? eZ.QR.MAIN,
            lastPage: void 0,
            flags: eE,
            sectionVisibility: {},
            defaultSectionVisibility: {},
            roleIds: new Set(),
        }),
        eT = l.useCallback((e) => {
            e_((t) => ({ ...t, ...e }));
        }, []),
        eM = l.useCallback(
            (e) => {
                eT({ currentPage: e, lastPage: eC.currentPage });
            },
            [eC.currentPage, eT],
        ),
        eN = eu && !ef && !ed && !ec,
        { enabled: ej } = V.useExperiment({ guildId: s?.id, location: "acc417_3" }, { autoTrackExposure: eN }),
        { canCreateApplicationBypassInvites: eR, isManualApprovalGuild: ew } =
            ((t = (0, g.bG)([Q.A], () => Q.A.can(ee.xBc.KICK_MEMBERS, s), [s])),
            {
                canCreateApplicationBypassInvites:
                    (i = !!(
                        s?.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
                        s?.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
                    )) && t,
                isManualApprovalGuild: i,
            }),
        eG = (ej && eN) || ew,
        { maxAge: eO, maxUses: eU, temporary: eV, savedMaxAge: eD, flags: eP, roleIds: eF } = eC,
        eL = !eG && eV,
        ek = (function (e) {
            let {
                sortedRoles: t,
                currentUser: i,
                canManageRoles: n,
            } = (0, g.cf)(
                [er.A, W.default, Q.A],
                () => ({
                    sortedRoles: null != e ? er.A.getSortedRoles(e.id) : [],
                    currentUser: W.default.getCurrentUser(),
                    canManageRoles: null != e && Q.A.can(ee.xBc.MANAGE_ROLES, e),
                }),
                [e],
            );
            return l.useMemo(() => {
                if (null == e || null == i || !n) return [];
                let l = eo.HJ(e, i.id);
                return t.filter(
                    (t) =>
                        !(0, es.Oy)(t) && !t.managed && t.tags?.guild_connections === void 0 && !!eo.wO(e, i.id, l, t),
                );
            }, [e, i, n, t]);
        })(s),
        eH = ek.length > 0,
        eB = l.useCallback(
            (e) => {
                let t = new Set(eF);
                (t.delete(e) || t.add(e), eT({ roleIds: t }));
            },
            [eF, eT],
        ),
        eK = l.useCallback(() => {
            let { currentPage: e, lastPage: t } = eC;
            e === eZ.QR.SETTINGS && null != t ? eM(t) : m();
        }, [eM, eC, m]),
        eQ = l.useCallback(() => {
            let e = S?.id;
            (0 === eU && 0 === eO && !eL && ef
                ? eT({ networkError: void 0, showVanityURL: !0 })
                : ea &&
                  null != e &&
                  (eT({ networkError: void 0, showVanityURL: !1 }),
                  C.Ay.createInvite(
                      e,
                      {
                          max_age: eO,
                          max_uses: eU,
                          target_type: E,
                          target_user_id: h,
                          target_application_id: eA?.id,
                          temporary: eL,
                          flags: eP,
                          role_ids: Array.from(eF),
                      },
                      r,
                  ).catch((e) => eT({ networkError: e, showVanityURL: ef }))),
                eO !== e0.value && eD !== e0.value && eT({ savedMaxAge: e0.value }));
        }, [ef, ea, S, r, eA?.id, E, h, eO, eU, eL, eT, eD, eP, eF]),
        ez = (0, T.Ay)(S),
        eq = (0, T.Ay)((0, c.Lt)(eP, d.Q.IS_APPLICATION_BYPASS)),
        eW = null != ez && ez !== S,
        eY = null != eq && eq !== (0, c.Lt)(eP, d.Q.IS_APPLICATION_BYPASS);
    return (
        l.useEffect(() => {
            !ef && (eW || eY) && eQ();
        }, [eQ, eW, eY, ef]),
        (0, n.jsx)(N.f5, {
            value: y,
            children: (0, n.jsx)(e2, {
                ref: I,
                canCreateInvites: ea,
                noInvitesAvailable: ed,
                inviteChannel: S,
                inviteChannelName: f,
                guild: s,
                guildScheduledEvent: o,
                streamUserId: h,
                vanityURLCode: ey,
                targetType: E,
                targetUserId: h,
                application: eA,
                rows: P,
                sections: eb,
                showFriends: F,
                initialCounts: z,
                code: em,
                source: r,
                analyticsLocations: y,
                analyticsLocation: x,
                transitionState: A,
                onClose: m,
                canShowVanityURL: ef,
                isGuestInviteCreationToggleEnabled: ej && eN,
                shouldHideTemporaryInviteToggle: eG,
                modalState: { ...eC, temporary: eL },
                setModalState: eT,
                changePage: eM,
                onGenerateNewLink: eQ,
                handleDone: eK,
                isApplicationBypassToggleEnabled: eR && !ed,
                isRoleAssignmentEnabled: eH,
                assignableRoles: ek,
                onToggleRole: eB,
            }),
        })
    );
}
function e5(e) {
    return (0, n.jsx)(e9, { ...e });
}
