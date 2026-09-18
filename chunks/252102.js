l.d(n, { A: () => ad });
var t = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    s = l(17928),
    o = l(935462),
    d = l(778712),
    u = l(866323),
    c = l(364522),
    g = l(695366),
    m = l(140735),
    f = l(707554),
    p = l(738188),
    x = l(661531),
    h = l(231723),
    v = l(241524),
    A = l(770178),
    b = l(80682),
    j = l(793574),
    I = l(688810),
    C = l(248284),
    y = l(480335),
    N = l(577390),
    E = l(372320),
    P = l(31956),
    k = l(744808),
    T = l(875741),
    S = l(915089),
    O = l(713517),
    R = l(645507),
    _ = l(922590),
    D = l(821269),
    M = l(397562),
    L = l(93246),
    w = l(594832),
    G = l(71393),
    F = l(994500),
    U = l(351906),
    V = l(287809),
    B = l(562153),
    z = l(474090),
    W = l(158045),
    H = l(183555),
    q = l(47675),
    K = l(321191),
    Y = l(591179),
    X = l(999291),
    Z = l(702841),
    $ = l(370480),
    J = l(773669),
    Q = l(652215),
    ee = l(101928),
    en = l(837529),
    el = l(346713),
    et = l(573648),
    ei = l(429913),
    er = l(321078),
    ea = l(403362),
    es = l(484509),
    eo = l(487409),
    ed = l(83931),
    eu = l(920601),
    ec = l(903209),
    eg = l(919395),
    em = l(101058),
    ef = l(696451),
    ep = l(836602),
    ex = l(996988),
    eh = l(207634);
let ev = (0, d.FT)(eh.T[ex.d.MODAL_V2].avatarSize),
    eA = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eb = l(716804),
    ej = l(679492),
    eI = l(947984),
    eC = l(554146),
    ey = l(43105),
    eN = l(992526),
    eE = l(643056),
    eP = l(327791),
    ek = l(262),
    eT = l(982240),
    eS = l(131607),
    eO = l(49999),
    eR = l(375708);
function e_(e) {
    let n,
        l,
        i,
        r,
        { targetElementRef: a } = e,
        o = (0, eN.J)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eE.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, eP.A)(),
        c =
            ((n = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.id)),
            (l = (0, s.bG)(
                [eT.Ay],
                () => (null != n && eT.Ay.hasCatalogFor(n) ? eT.Ay.getBadges(n).some((e) => e.owned) : null),
                [n],
            )),
            (i = (0, X.Ay)(n)),
            (r = (0, ek.A)(i)),
            l ?? r.length > 0),
        [g, m] = (0, eS.kn)(c && o && d ? [eC.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return g !== eC.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, t.jsx)(ey.A, {
              targetElementRef: a,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eI.U, props: { dataBinding: { on: !0 } } },
              title: eR.intl.string(eR.t["9JoKQb"]),
              body: eR.intl.string(u ? eR.t.p82vky : eR.t.IDh31t),
              onRequestClose: () => m(eO.i.USER_DISMISS),
              actions: [
                  {
                      text: eR.intl.string(eR.t["4P5I8V"]),
                      onClick: function () {
                          (m(eO.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eD = l(718019),
    eM = l(365607),
    eL = l(915614),
    ew = l(744753),
    eG = l(834730);
function eF(e) {
    let { friendsSinceDate: n } = e;
    return (0, t.jsx)(eG.E, { variant: "text-sm/normal", children: n });
}
var eU = l(361311),
    eV = l(931481),
    eB = l(439053),
    ez = l(743987),
    eW = l(312381),
    eH = l(501193),
    eq = l(383448),
    eK = l(946356),
    eY = l(983495),
    eX = l(503026),
    eZ = l(305385),
    e$ = l(109112),
    eJ = l(939249),
    eQ = l(730134),
    e0 = l(169869),
    e1 = l(837057),
    e2 = l(310419),
    e3 = l(889227),
    e5 = l(967198),
    e9 = l(488995),
    e7 = l(576849);
function e8(e) {
    let { applicationRoleConnection: n, locale: l, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, e0.VW)(n, l);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: e7.k_,
                children:
                    null != n.application.bot
                        ? (0, t.jsx)(eQ.A, { user: new e3.A(n.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(e$._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: e7.Hd,
                children: [
                    (0, t.jsxs)(eJ.D, {
                        className: e7.OB,
                        onClick: function () {
                            (i?.(),
                                (0, e1.transitionToGlobalDiscovery)({
                                    tab: e9.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: e2.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != n.platform_name
                                ? (0, t.jsx)(eG.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, t.jsx)(eG.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eG.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: e7.nk,
                                children: eR.intl.format(eR.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: e7.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function e4(e) {
    let { applicationRoleConnections: n, className: l, onClose: i } = e,
        { trackUserProfileAction: r } = (0, H.NJ)(),
        o = (0, s.bG)([J.default], () => J.default.locale),
        d = (0, s.bG)([e5.A], () => e5.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(e7.kL, l),
              children: n.map((e, n) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: e7.FI,
                          children: (0, t.jsx)(e8, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), i());
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var e6 = l(403581),
    ne = l(240248),
    nn = l(308244),
    nl = l(83013),
    nt = l(81400),
    ni = l(84540),
    nr = l(290386),
    na = l(621466),
    ns = l(231088),
    no = l(786826);
function nd(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function nu(e) {
    let {
            isEditing: n,
            committedValue: l,
            editedValue: i,
            setEditedValue: r,
            editButtonRef: a,
            handleStartEditing: s,
            wrapperRef: o,
            onBlur: d,
            onContainerKeyDown: u,
            inputRef: c,
            onInputFocus: g,
            onInputKeyDown: m,
            preview: f,
            placeholder: p,
            editButtonAriaLabel: x,
            label: h,
            maxLength: v,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        C = (0, ns.n4)(n ? i : l, v) ?? b;
    return (0, t.jsx)(ns.ZL, {
        isEditing: n,
        preview: f,
        placeholder: p,
        editButtonRef: a,
        editButtonAriaLabel: x,
        onStartEditing: s,
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: C,
        previewWarningMessage: j,
        input: (0, t.jsx)(no.f, {
            editorRef: c,
            label: h,
            hideLabel: !0,
            value: n ? i : l,
            onChange: r,
            onFocus: g,
            onKeyDown: m,
            maxLength: v,
            error: C,
            helperText: j,
            placeholder: p,
            emojiPickerIntention: A,
        }),
    });
}
let nc = [
    { value: "HAIKU", label: () => eR.intl.string(eR.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eR.intl.string(eR.t.CXkR1L) },
    { value: "TELL_US", label: () => eR.intl.string(eR.t.eutr4P) },
    { value: "FUN_FACT", label: () => eR.intl.string(eR.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eR.intl.string(eR.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eR.intl.string(eR.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eR.intl.string(eR.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eR.intl.string(eR.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eR.intl.string(eR.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eR.intl.string(eR.t.u7WCGI) },
];
var ng = l(307731);
function nm(e) {
    let n,
        l,
        r,
        a,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, s.bG)([V.default], () => V.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = W.Ay.canUsePremiumProfileCustomization(c),
        p = (0, nr.U)({ location: "user_profile_modal_edit" }),
        {
            value: x,
            previewValue: h,
            onCommit: v,
        } = ((n = d?.guildId ?? null),
        (l = d?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingBio)),
        (a = l ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, ni.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        A = (function (e) {
            let { isEditing: n, wrapperRef: l, handleCommit: t, ...r } = (0, ns.Ww)(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, n) {
                            if (n?.contains(e)) return !0;
                            let l = nd(n),
                                t = l?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, l.current),
                    [l],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = l.current?.ownerDocument ?? document;
                function i(e) {
                    (0, na.vq)(e.target) && !a(e.target) && t();
                }
                return (e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i));
            }, [n, l, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!n) return;
                    let i = e.relatedTarget;
                    !(0, na.vq)(i) || a(i) || (null == nd(l.current) && t());
                },
                [n, a, t, l],
            );
            return { isEditing: n, wrapperRef: l, handleCommit: t, ...r, onBlur: s };
        })({ value: x, onCommit: v }),
        b = !(0, ne.uJ)(h),
        j = (0, s.bG)([ep.A], () => ep.A.getErrors(m)),
        I = (0, nt.EC)(m),
        C = j.bio?.[0],
        y = I?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * nc.length)), nc[e]);
        }, []),
        E = g ? eR.intl.string(eR.t.yPJ9xr) : N.label();
    return !g || f
        ? (0, t.jsx)(nu, {
              ...A,
              className: u,
              preview: b ? (0, t.jsx)(nn.A, { userBio: h, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: eR.intl.string(eR.t.lO3n7a),
              label: eR.intl.string(eR.t["YWo+Zd"]),
              emojiPickerIntention: ng.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: y,
          })
        : b
          ? (0, t.jsx)(nn.A, { userBio: h, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var nf = l(430626);
function np(e) {
    let { currentUser: n, displayProfile: l, canEditInPlace: i } = e,
        r = l?.bio,
        a = !(0, ne.uJ)(r),
        s = l?.guildId != null,
        o = s && W.Ay.canUsePremiumProfileCustomization(n),
        d = o ? eR.intl.string(eR.t.jVai8N) : eR.intl.string(eR.t.ZzAR2Y),
        u = (0, W.TW)(n) ? eR.intl.string(eR.t["5AFxuK"]) : eR.intl.string(eR.t.N6ixy8),
        c = i && o ? { icon: e6.t, tooltip: u } : void 0;
    return (i || a) && (!i || !s || a || o)
        ? (0, t.jsx)(nl.A, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, t.jsx)(nm, { displayProfile: l, className: nf.u })
                  : (0, t.jsx)(nn.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var nx = l(700058),
    nh = l(722868),
    nv = l(822775),
    nA = l(982985),
    nb = l(133385),
    nj = l(34188),
    nI = l(839534),
    nC = l(993401);
function ny(e) {
    let { analyticsLocations: n, newestAnalyticsLocation: l } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, nI.Cz)({ analyticsLocations: n, analyticsSource: l });
        }, [n, l]);
    return (0, t.jsx)(nC.q3, {
        action: "VISIT_SHOP",
        icon: nj.U,
        tooltipText: eR.intl.string(eR.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var nN = l(573355),
    nE = l(102951);
function nP(e) {
    let {
            user: n,
            currentUser: l,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, Y.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, nh.A)({ user: n, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, nE.J)({ userId: n.id }),
        x = m.length > 0 || f || p;
    return o === Q.eA$.BLOCKED
        ? null
        : n.id === l.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nA.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(ny, {}),
                        (0, t.jsx)(nb.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nv.A, { user: n, guildId: i, onClose: d }),
                        (0, t.jsx)(ny, {}),
                        (0, t.jsx)(nb.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(nA.e, { userId: n.id, onClose: nx.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(nb.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(nA.e, { userId: n.id, onClose: nx.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(nb.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === Q.eA$.FRIEND || o === Q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(nA.e, { userId: n.id, onClose: nx.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(nN.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(nb.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nA.e, { userId: n.id, onClose: nx.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(nN.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(nb.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(nN.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(nA.l, { userId: n.id, onClose: nx.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(nb.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var nk = l(463156),
    nT = l(866665),
    nS = l(28863),
    nO = l(509434),
    nR = l(307301),
    n_ = l(228366),
    nD = l(95561),
    nM = l(874490),
    nL = l(968309),
    nw = l(174459),
    nG = l(486020),
    nF = l(123917),
    nU = l(783419);
let nV = "User Profile Modal V2";
function nB(e) {
    let n = et.A.get(e);
    ((0, nL.A)({ platformType: n.type, location: nV }),
        nw.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: nV,
            current_step: "desktop oauth",
            platform_type: n.type,
        }));
}
function nz() {
    n_.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: nB, stackingBehavior: "stack" });
}
function nW(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, $.An)(r[nU.pK.CREATED_AT], l),
        s = et.A.get((0, nM.ML)(n.type));
    return (0, t.jsx)(nq, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(nT.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(eG.E, { variant: "text-sm/normal", className: e7.GW, children: n.name }),
                  })
                : (0, t.jsx)(nS.Anchor, {
                      href: e,
                      className: e7.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${n.name}, ${eR.intl.string(eR.t.q5jLJB)}`
                              : `${n.name}, ${eR.intl.string(eR.t.q5jLJB)}`,
                      onClick: (l) => {
                          ((0, nD.zV)(Q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nF.h)({ href: e, trusted: s?.type !== Q.fg2.DOMAIN }, l));
                      },
                      children: (0, t.jsxs)("div", {
                          className: e7.vi,
                          children: [
                              (0, t.jsx)(nT.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(eG.E, {
                                      variant: "text-sm/normal",
                                      className: e7.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(nO.I, { size: "xs", color: "currentColor", className: e7.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return n.type === Q.fg2.REDDIT
                ? (0, e0.xE)(r)
                : n.type === Q.fg2.STEAM
                  ? (0, e0.dy)(r)
                  : n.type === Q.fg2.BLUESKY || n.type === Q.fg2.MASTODON || n.type === Q.fg2.TWITTER
                    ? (0, e0.ED)(r)
                    : n.type === Q.fg2.PAYPAL
                      ? (0, e0.gZ)(r)
                      : n.type === Q.fg2.EBAY
                        ? (0, e0.ub)(r)
                        : n.type === Q.fg2.TIKTOK
                          ? (0, e0.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function nH(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let r = nG.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(nq, {
        renderAccountName: function () {
            return (0, t.jsx)(nT.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(eG.E, {
                    variant: "text-sm/normal",
                    className: e7.GW,
                    children: l.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function nq(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: e7.FI,
        children: [
            (0, t.jsx)(nT.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: e7.k_,
                    children: (0, t.jsx)("img", {
                        alt: eR.intl.formatToPlainString(eR.t.rtm15P, { name: i }),
                        className: a()(e7.tV, o ? e7.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: e7.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            n(),
                            null != s &&
                                (0, t.jsx)(eG.E, {
                                    variant: "text-xs/normal",
                                    children: eR.intl.format(eR.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: e7.yu, children: l() }),
                ],
            }),
        ],
    });
}
function nK(e) {
    let { connections: n, applicationIdentities: l, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([J.default], () => J.default.locale);
    if (!r && 0 === n.length && 0 === l.length) return null;
    let u = n.length > 0 || l.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(e7.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: e7.V,
                    children: [
                        n.map((e) => (0, t.jsx)(nW, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        l?.map((e) => (0, t.jsx)(nH, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eJ.D, {
                    className: e7.qG,
                    onClick: nz,
                    children: [
                        (0, t.jsx)(nR.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eG.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eR.intl.string(eR.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var nY = l(193885),
    nX = l(408278),
    nZ = l(993165),
    n$ = l(194261),
    nJ = l(315629),
    nQ = l(789645),
    n0 = l(297264),
    n1 = l(812993),
    n2 = l(821609),
    n3 = l(39623),
    n5 = l(890377),
    n9 = l(517461),
    n7 = l(248778),
    n8 = l(465794),
    n4 = l(252732),
    n6 = l(945810);
let le = (0, n6.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ln = (0, n6.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function ll(e) {
    let { location: n } = e;
    return ln.useConfig({ location: n });
}
var lt = l(487233),
    li = l(120386),
    lr = l(317097),
    la = l(602853),
    ls = l(922016),
    lo = l(508274),
    ld = l(654107),
    lu = l(930349);
function lc(e) {
    let { user: n, disabled: l = !1 } = e,
        r = i.useRef(null),
        a = (0, la.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, ld.rh)(n.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ep.A, K.A], () => ({
            pendingAccentColor: ep.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: K.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lr.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, ni.p)({ accentColor: e }), []);
    return (0, t.jsx)(ls.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lo.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lu.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: l,
                accessibleLabel: eR.intl.string(eR.t["/X3fkf"]),
                accessibleValue: (0, lr.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lr.Hl)(c) } }),
            }),
    });
}
var lg = l(450373),
    lm = l(317139);
function lf(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n) ? eR.intl.string(eR.t["3Xph0/"]) : t ? eR.intl.string(eR.t.keN7ib) : e.description;
}
function lp(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: lm.o, style: { backgroundColor: n } });
}
function lx(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: lm._ });
}
function lh(e) {
    let { displayProfile: n, bannerChange: l, shouldAnimate: i } = e,
        r = (0, la.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = n?.primaryColor ?? (0, lr.LX)(r),
        { hex: s } = (0, lg.A)(a),
        o = n?.getPreviewBanner(l, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(lx, { src: o }) : (0, t.jsx)(lp, { backgroundColor: s });
}
function lv(e) {
    let { displayProfile: n, bannerChange: l, ...i } = e;
    return (0, t.jsx)(lu.A, {
        ...i,
        accessibleLabel: eR.intl.string(eR.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(lh, { displayProfile: n, bannerChange: l, shouldAnimate: e }),
    });
}
var lA = l(569059);
function lb(e) {
    let { userId: n, guildId: l, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, n) {
            let l = (0, X.Ay)(e, n),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, Z.cf)(
                    [ep.A, V.default, K.A],
                    () => ({
                        pendingBanner: ep.A.getPendingChanges(n ?? void 0).pendingBanner,
                        mainProfileBanner: V.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != n ? K.A.getGuildMemberProfile(e, n)?.banner : K.A.getUserProfile(e)?.banner,
                    }),
                    [n, e],
                ),
                a = null != n,
                s = a && (l?.isUsingGuildMemberBanner() ?? !1),
                o = null === t;
            return {
                displayProfile: l,
                pendingBanner: t,
                bannerChange: o && a && !s ? void 0 : t,
                accessibleValue: lf(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(n, l),
        f = (0, eg.Ac)(d, g)
            ? {
                  onClick: () => (0, n4.rM)(null, g, (e) => (0, ni.p)({ guildId: l ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eR.intl.string(m ? eR.t.jHlJNS : eR.t.tT9n7D),
              }
            : void 0,
        p = (0, lA.P)({ guildId: l, returnRef: s });
    return (0, t.jsx)(lv, {
        buttonRef: s,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: f,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: a,
    });
}
var lj = l(259065),
    lI = l(913563),
    lC = l(898985),
    ly = l(922301),
    lN = l(660184),
    lE = l(701974),
    lP = l(523312);
let lk = "heading-xl/semibold";
function lT(e) {
    if (null == e) return eR.intl.string(eR.t["3Xph0/"]);
    let n = eR.intl.string((0, lI.A)(e.fontId)),
        l = eR.intl.string(lC.J[e.effectId] ?? lE.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eR.intl.formatToPlainString(eR.t.A2XnI4, { fontName: n, effectName: l, colors: t });
}
function lS(e) {
    let { displayName: n, displayNameStyles: l, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: a()(lP.MC, { [lP.Xn]: null != l }),
        children:
            null != l
                ? (0, t.jsx)(eG.E, {
                      variant: lk,
                      children: (0, t.jsx)(lN.A, {
                          userName: n,
                          displayNameStyles: l,
                          effectDisplayType: i ? ly.G.ANIMATED : ly.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eG.E, { variant: lk, className: lP.kr, children: n }),
    });
}
function lO(e) {
    let { displayName: n, displayNameStyles: l, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(lu.A, {
        ...r,
        accessibleLabel: eR.intl.string(eR.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(lS, { displayNameStyles: l, displayName: n, shouldAnimate: i || e }),
    });
}
function lR(e) {
    let { user: n, guildId: l, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != l,
        c = (0, s.bG)([ef.Ay], () => (null != l ? (ef.Ay.getMember(l, n.id)?.nick ?? null) : null)),
        g = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eg.B0)(n, l ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        C = (0, eg.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: l ?? void 0 }),
        y = (0, eg.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: l ?? void 0 }) ?? n.username,
        N = A ? null != h : null != v,
        E =
            null != C && N
                ? {
                      onClick: () => (0, ni.p)({ guildId: l ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eR.intl.string(j ? eR.t.en3ogK : eR.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (o?.(), (0, lj.L)({ analyticsLocations: d, guildId: l ?? void 0, stackingBehavior: "stack" }));
        }, [d, l, o]);
    return (0, t.jsx)(lO, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: lT(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: y,
        displayNameStyles: C,
        disabled: r,
    });
}
var l_ = l(450232),
    lD = l(89851);
function lM(e) {
    let { heading: n, children: l, disabled: i = !1, showNitroIcon: r = !1, badge: s } = e;
    return (0, t.jsxs)("div", {
        className: lD.Os,
        children: [
            (0, t.jsxs)("div", {
                className: a()(lD.Pf, { [lD.r9]: i }),
                children: [
                    (0, t.jsx)(n0.D, {
                        className: lD.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n,
                    }),
                    r && (0, t.jsx)(l_.A, { className: lD.IX, size: "xs", color: "inherit", disabled: i }),
                    null != s && (0, t.jsx)("span", { className: lD.ot, children: s }),
                ],
            }),
            l,
        ],
    });
}
function lL(e) {
    let { id: n, message: l } = e;
    return null == l
        ? null
        : (0, t.jsxs)("div", {
              className: lD.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eG.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: n, children: l }),
              ],
          });
}
var lw = l(374654),
    lG = l(366010),
    lF = l(736653),
    lU = l(674658),
    lV = l(617061),
    lB = l(203632),
    lz = l(536572);
let lW = new Set(),
    lH = 0;
var lq = l(993408),
    lK = l(841702),
    lY = l(515718),
    lX = l(195292);
function lZ(e) {
    "" !== e.thumbnailPreviewSrc && (0, lY.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var l$ = l(599752),
    lJ = l(249360);
let lQ =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    l0 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function l1(e) {
    let { effect: n, shouldAnimate: l, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, lF.Ay)(),
        u = (0, lG.M)(d) ? lQ : l0,
        c = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, lK.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lq.wo)(r, t), [r, t]),
                s = (0, lX.A)({ enabled: n, isInteracting: l, items: a, preload: lZ });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: l }),
        g = null != c,
        m = g ? c : n;
    return (
        i.useEffect(() => {
            l && ((lH += 1), lW.forEach((e) => e()));
        }, [l]),
        (0, t.jsxs)("div", {
            className: l$.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: l$.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(l$.yY, { [lJ.O]: g }),
                        children: (0, t.jsx)(y.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: lB.HL.FromStart,
                            isHovering: l,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function l2(e) {
    let { user: n, guildId: l, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != l,
        u = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        c = (0, eg.N2)({ user: n }),
        g = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileEffect: m } = (0, eg.nZ)(l ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, eg.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: l ?? void 0 }),
        { product: v } = (0, lU.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, ni.p)({ guildId: l ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eR.intl.string(x ? eR.t["SQy/Po"] : eR.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, lV.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(lu.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eR.intl.string(eR.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? eR.intl.string(eR.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : eR.intl.string(t ? eR.t["1M4m8w"] : eR.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, lz.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(l1, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var l3 = l(515727),
    l5 = l(746002);
function l9(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((n) => {
            let l = (0, l5.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: l5.CollectiblesItemAssetFormat.STATIC,
                assetId: n.id,
            });
            null != l && (0, lY.NN)(l).catch(() => {});
        });
}
var l7 = l(715196);
function l8(e) {
    let { responsive: n } = e;
    return !0 !== n;
}
function l4(e) {
    let { profileFramePreview: n, isEmpty: l, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, lF.Ay)(),
        u = (0, lG.M)(d) ? lQ : l0,
        c = (0, E.A)(n?.skuId),
        g = (function (e) {
            let { enabled: n, isInteracting: l } = e,
                { categories: t, purchases: r } = (0, lK.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, lq.MG)(r, t), [r, t]);
            return (0, lX.A)({ enabled: n, isInteracting: l, items: a, preload: l9 });
        })({ enabled: l && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, T.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(l7.hm, x, { [lJ.O]: m }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: f, filterLayer: l8, isPreview: !0 }),
                }),
            (0, t.jsx)("div", {
                className: a()(l7.ti, { [l7.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: l7.QQ, draggable: !1 }),
            }),
        ],
    });
}
function l6(e) {
    let { user: n, guildId: l, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != l,
        d = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
        u = (0, eg.Xf)({ user: n }),
        c = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
        { pendingProfileFrame: g } = (0, eg.Tu)(l ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, eg.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: l ?? void 0 }),
        { product: h } = (0, lU.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, ni.p)({ guildId: l ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eR.intl.string(p ? eR.t.j6hZyM : eR.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, l3.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(lu.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eR.intl.string(eR.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: n, productName: l, hasPendingSelection: t } = e;
            return null == n
                ? eR.intl.string(eR.t["3Xph0/"])
                : null != l && "" !== l
                  ? l
                  : eR.intl.string(t ? eR.t.yFeGB5 : eR.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, lz.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(l4, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var te = l(684732),
    tn = l(498596),
    tl = l(871524);
function tt(e) {
    let { primaryColor: n, secondaryColor: l, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, lr.Hl)(n)}, ${(0, lr.Hl)(l)})`;
    return (0, t.jsx)("div", { className: tl.D7, style: { background: r }, children: i });
}
function ti(e) {
    let { color: n } = e,
        l = (0, lr.Hl)(n),
        i = (0, lr.bJ)(n, 0xffffff) < tn.Tr.NonText;
    return (0, t.jsx)("div", {
        className: tl.OS,
        children: (0, t.jsx)("div", { className: a()(tl.Hy, { [tl.rY]: i }), style: { backgroundColor: l } }),
    });
}
function tr(e) {
    let { color: n, disabled: l, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eJ.D, {
        ...s,
        innerRef: a ?? o,
        className: tl.Dh,
        onClick: l ? void 0 : r,
        "aria-disabled": l,
        tabIndex: l ? -1 : 0,
        children: (0, t.jsx)(ti, { color: n }),
    });
}
function ta(e) {
    let {
        color: n,
        ariaLabel: l,
        suggestedColors: i,
        disabled: r,
        isOpen: a,
        onRequestOpen: s,
        onRequestClose: o,
        onSelect: d,
        buttonRef: u,
    } = e;
    return (0, t.jsx)(ls.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(lo.VN, { ...e, value: n, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(tr, { color: n, onClick: i, disabled: r, buttonRef: u, "aria-label": l, ...a });
        },
    });
}
function ts(e) {
    let {
            primaryColor: n,
            secondaryColor: l,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
            variant: u = "square",
            initialOpenPopout: c,
        } = e,
        [g, m] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        x = (0, lr.Hl)(n),
        h = (0, lr.Hl)(l),
        v = eR.intl.formatToPlainString(eR.t.FquTfm, { colorLabel: x }),
        A = eR.intl.formatToPlainString(eR.t.xOnm4z, { colorLabel: h });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? f : p;
            (e.current?.focus(), m(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), f.current?.focus());
                  },
              }
            : void 0;
    return (0, t.jsx)(lu.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(tt, {
            primaryColor: n,
            secondaryColor: l,
            children: [
                (0, t.jsx)(ta, {
                    color: n,
                    ariaLabel: v,
                    suggestedColors: s,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => m("theme-primary"),
                    onRequestClose: () => m(null),
                    buttonRef: f,
                }),
                (0, t.jsx)(ta, {
                    color: l,
                    ariaLabel: A,
                    suggestedColors: s,
                    onSelect: a,
                    disabled: o,
                    isOpen: "theme-secondary" === g,
                    onRequestOpen: () => m("theme-secondary"),
                    onRequestClose: () => m(null),
                    buttonRef: p,
                }),
            ],
        }),
    });
}
function to(e) {
    let { user: n, guildId: l, disabled: r = !1 } = e,
        a = (0, X.Ay)(n.id, l),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ep.A, K.A], () => {
            let e = ep.A.getPendingChanges(l ?? void 0),
                t = K.A.getUserProfile(n.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != l ? (K.A.getGuildMemberProfile(n.id, l)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, em.V7)({ userId: n.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, ee.A)({
            user: n,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, la.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : n.getAvatarURL(l ?? void 0, 80),
        v = (0, ld.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, ni.p)({ guildId: l ?? void 0, themeColors: e });
            },
            [l],
        ),
        b =
            null != l && (0, te.l)(d, o)
                ? {
                      onClick: () => (0, ni.p)({ guildId: l, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eR.intl.string(eR.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(ts, {
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([m, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: b,
          });
}
var td = l(629985);
function tu(e) {
    let { children: n, hasGradientBackground: l = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(td.k, { [td.V]: l }), children: n }) });
}
var tc = l(128954),
    tg = l(689175),
    tm = l(424290);
function tf(e) {
    let { children: n, isDismissed: l } = e;
    return (0, u.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) => (l ? (0, t.jsx)(tc.animated.div, { className: tm.iK, style: e, children: n }) : null));
}
function tp(e) {
    let { children: n, floatingFooter: l } = e,
        r = i.useRef(null),
        s = null != l,
        [o, d] = i.useState(!1),
        [u, c] = i.useState("pending-measurement");
    i.useLayoutEffect(() => {
        if (!s) return void c("pending-measurement");
        let e = r.current?.getScrollerNode();
        null == e || (d(!1), c(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
    }, [s]);
    let g = i.useCallback(
            (e) => {
                if ("dismiss-on-scroll" !== u) return;
                let { scrollTop: n } = e.currentTarget;
                !o && n >= 86 ? d(!0) : o && n <= 43 && d(!1);
            },
            [u, o],
        ),
        m = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: tm.u6,
        children: [
            (0, t.jsx)(tg.zC, {
                ref: r,
                className: a()(tm.XG, { [tm.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: tm.Qs, children: n }),
            }),
            s && (0, t.jsx)(tf, { isDismissed: o, children: l }),
        ],
    });
}
var tx = l(508770),
    th = l(732280),
    tv = l(811611),
    tA = l(976860),
    tb = l(402860);
function tj() {
    return i.useCallback(() => {
        ((0, tA.pX)(Q.BVt.NITRO_HOME), (0, tb.closeUserProfileModal)());
    }, []);
}
var tI = l(570002),
    tC = l(202541),
    ty = l(155053);
function tN() {
    let e = (0, th.V)();
    return e?.subscriptionTrial?.skuId === tC.pe.TIER_2 ? e : null;
}
function tE() {
    let e = (0, tI.A)(eR.intl.string(eR.t.pj0XBN));
    return (0, t.jsx)(n8.A, { subscriptionTier: tC.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tP(e) {
    let { trialOffer: n, onSubscribeSuccess: l } = e,
        i = tj(),
        r = (0, W.FY)({
            intervalType: n.subscriptionTrial?.interval,
            intervalCount: n.subscriptionTrial?.intervalCount,
        }),
        a = (0, tv.ux)(n.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: ty.nH,
        children: [
            (0, t.jsxs)("div", {
                className: ty.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eR.intl.string(eR.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tx.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eG.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eR.intl.format(eR.t["fF+cgd"], { onClick: i }),
            }),
            (0, t.jsx)(n8.A, {
                subscriptionTier: tC.pe.TIER_2,
                buttonTextOverride: r,
                onSubscribeModalClose: (e) => {
                    e && l?.();
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != a &&
                (0, t.jsx)(eG.E, { variant: "text-xs/normal", color: "text-muted", className: ty.u8, children: a }),
        ],
    });
}
function tk() {
    let e = tN();
    return null == e ? (0, t.jsx)(tE, {}) : (0, t.jsx)(tP, { trialOffer: e });
}
var tT = l(55619),
    tS = l(848717);
function tO() {
    return (0, t.jsxs)("div", {
        className: tS.k,
        children: [
            (0, t.jsx)(eG.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eR.intl.string(eR.t.JFY17v),
            }),
            (0, t.jsx)(n2.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eR.intl.string(eR.t.R9GHya),
                onClick: function () {
                    return tT.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tR = l(342866),
    t_ = l(968475);
function tD(e) {
    let { user: n, ...l } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ep.A], () => ({
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tR.A, {
        ...l,
        variant: "full-height-bar",
        userId: n.id,
        avatarChange: a,
        accessibleValue: (0, tR.$)(a, n.avatar),
        imageInteractingClassName: null == r ? t_.$T : void 0,
    });
}
function tM(e) {
    let { userId: n, ...l } = e,
        i = (0, X.Ay)(n),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [ep.A, K.A],
            () => ({
                pendingBanner: ep.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ep.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: K.A.getUserProfile(n)?.banner,
            }),
            [n],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(lv, {
        ...l,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: lf(d, o),
    });
}
function tL(e) {
    let { user: n, ...l } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([ep.A], () => ({
            pendingDisplayNameStyles: ep.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ep.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ep.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([V.default], () => ({ globalName: V.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eg.lw)({ pendingValue: a, userValue: o }) ?? n.username;
    return (0, t.jsx)(lO, {
        ...l,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: lT(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tw = l(207803);
function tG(e) {
    let n = (0, X.Ay)(e.id),
        {
            tryItOutThemeColors: l,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([ep.A], () => ({
            tryItOutThemeColors: ep.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, em.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, ee.A)({
            user: e,
            displayProfile: n,
            pendingThemeColors: l,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: l };
}
function tF(e) {
    let { user: n, initialOpenPopout: l } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tG(n),
        d = (0, la.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : n.getAvatarURL(void 0, 80),
        c = (0, ld.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tw.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(ts, {
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: a,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, a]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: l,
          });
}
function tU(e) {
    let { user: n, onClickPrimary: l, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tG(n);
    if (null == r || null == a) return null;
    let s = eR.intl.formatToPlainString(eR.t.FquTfm, { colorLabel: (0, lr.Hl)(r) }),
        o = eR.intl.formatToPlainString(eR.t.xOnm4z, { colorLabel: (0, lr.Hl)(a) });
    return (0, t.jsx)(lu.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(tt, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(tr, { color: r, onClick: l, "aria-label": s }),
                (0, t.jsx)(tr, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tV = l(847081);
function tB(e) {
    let { user: n, mode: l } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, nZ.pA)(),
        c = (function (e) {
            let { analyticsLocations: n } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, lj.L)({ analyticsLocations: n, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [n, e]);
        })(r),
        g = (0, lA._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, lA.P)({ isPremiumTryItOut: !0, returnRef: s }),
        f = "edit" === l;
    return (
        i.useEffect(() => {
            if (f && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        m();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, f, c, g, m]),
        (0, t.jsxs)("div", {
            className: tV.T,
            children: [
                (0, t.jsx)(lM, {
                    heading: eR.intl.string(eR.t.NEzEws),
                    children: (0, t.jsx)(tL, {
                        user: n,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lM, {
                    heading: eR.intl.string(eR.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(tF, {
                              user: n,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tU, {
                              user: n,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(lM, {
                    heading: eR.intl.string(eR.t.Vgdusv),
                    children: (0, t.jsx)(tM, {
                        userId: n.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(lM, {
                    heading: eR.intl.string(eR.t.Dt3ZUr),
                    children: (0, t.jsx)(tD, {
                        user: n,
                        buttonRef: a,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var tz = l(847374),
    tW = l(111159),
    tH = l(548118),
    tq = l(711014),
    tK = l(540637),
    tY = l(801461),
    tX = l(44482),
    tZ = l(844222),
    t$ = l(561392),
    tJ = l(499957),
    tQ = l(15626),
    t0 = l(470791);
function t1(e) {
    let {
            options: n,
            value: l,
            onSelectionChange: r,
            label: s,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: p,
        } = e,
        {
            isOpen: x,
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(tZ.C),
                {
                    isOpen: n,
                    setIsOpen: l,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, t$.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tJ.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: n,
                setIsOpen: l,
                refs: t,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: C } = v,
        y = i.useContext(tQ._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, tY.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        D = i.useRef(!1),
        M = i.useMemo(() => n.filter((e) => (0, tY.fI)(e.value, [l])), [l, n]),
        L = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        w = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
            (h(!1), k.current?.focus());
        }, [h]),
        F = i.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (D.current) {
                        D.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = n[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, S, n, r, h],
        ),
        U = i.useCallback(
            (e) => {
                if (u) return;
                let n = e[0];
                null != n && (r(n.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: V, handleKeyDown: B } = (0, tK.l)(!0, n),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = V !== z.current;
        ((z.current = V), null != V && e && (O(V), x || ((_.current = !0), h(!0))));
    }, [V, x, h]);
    let W = i.useCallback(
            (e) => {
                if (u) return;
                let l = n.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === l) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || h(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + n, l - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === l) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != S) {
                                let e = n[S];
                                if (null != e && !0 !== e.disabled) {
                                    U([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void h(!0);
                        O((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == S || S > l - 1) return;
                        {
                            let e = n[S];
                            if (null == e || !0 === e.disabled) return;
                            U([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === l)) return;
                        (O(0), x || ((_.current = !0), h(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === l)) return;
                        (O(l - 1), x || ((_.current = !0), h(!0)));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = n[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((D.current = !0), h(!1));
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, n, S, U, G, r, h, B],
        ),
        H = Math.max(
            n.findIndex((e) => e.id === M[M.length - 1]?.id),
            0,
        ),
        q = i.useRef(!1);
    i.useEffect(() => {
        c || !x || q.current
            ? x || ((q.current = !1), O(null), (_.current = !1))
            : ((q.current = !0), _.current || O(n.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, n.length]);
    let K = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: L,
        onMouseDown: w,
        onKeyDown: W,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            ((T.current = e), v.setReference(e));
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: K }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(t0.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tK.q, {
                        id: P,
                        tabIndex: -1,
                        items: n,
                        selectionMode: "single",
                        selectedItems: M,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tX.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var t2 = l(216384);
let t3 = "MAIN_PROFILE";
function t5(e) {
    let { guild: n } = e;
    return (0, t.jsx)(tH.Ay, { className: t2.$f, guild: n, size: tH.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function t9(e) {
    let { leading: n, label: l, description: i } = e;
    return (0, t.jsxs)("div", {
        className: t2.XE,
        children: [
            null != n && (0, t.jsx)("div", { className: t2.fZ, children: n }),
            (0, t.jsxs)("div", {
                className: t2.qL,
                children: [
                    (0, t.jsx)(eG.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: l }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eG.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: i,
                        }),
                ],
            }),
        ],
    });
}
function t7(e) {
    let { leading: n, label: l, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eJ.D, {
        innerRef: r,
        className: a()(t2.L5, { [t2.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            n,
            (0, t.jsx)(eG.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: t2.v9,
                children: l,
            }),
            (0, t.jsx)(tz.a, {
                className: t2.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function t8(e) {
    let { selectedGuildId: n, originGuildId: l, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tq.Ay], () => tq.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([G.A], () => G.A.getGuilds()),
        c = (0, s.bG)([e5.A], () => {
            let e = e5.A.getGuildId();
            return null == e || ep._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ef.Ay, tq.Ay], () => {
            let e = {};
            for (let n of tq.Ay.getFlattenedGuildIds()) {
                let l = ef.Ay.getSelfMember(n)?.nick;
                null != l && (e[n] = l);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: t3,
                    label: eR.intl.string(eR.t["2p07FR"]),
                    value: t3,
                    leading: (0, t.jsx)(tW.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
                },
                n = l ?? c,
                i = d
                    .map((e) => {
                        if (e === n) return null;
                        let l = u[e];
                        return null == l
                            ? null
                            : {
                                  id: l.id,
                                  label: l.name,
                                  value: l.id,
                                  leading: (0, t.jsx)(t5, { guild: l }),
                                  description: g[l.id] ?? void 0,
                              };
                    })
                    .filter(ea.Vq),
                r = null != n ? u[n] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(t5, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, l, c, g]),
        f = n ?? t3,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let l = e === t3 ? null : e;
                l !== n && r(l);
            },
            [r, n],
        );
    return (0, t.jsx)(t1, {
        className: t2.kL,
        label: eR.intl.string(eR.t.rki38K),
        listboxClassName: t2.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(t9, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(t7, { leading: p.value === t3 ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var t4 = l(462887),
    t6 = l(765178),
    ie = l(461797),
    il = l(469054),
    it = l(601298);
function ii() {
    let { preset: e, setPreset: n } = (0, nZ.RQ)(),
        { clientThemeAdaptedColorsEnabled: l } = ll({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, lF.Ay)(),
        r = (0, t4.q)(t),
        a = i.useCallback(
            (e) => {
                let n = (0, ie.Wt)(e);
                (0, tw.w5)({
                    banner: (0, it.X)({
                        assetOrigin: il.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: l ? (r ? n.themeColors.light : n.themeColors.dark) : n.themeColorsLegacy,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [l, r],
        );
    i.useEffect(() => {
        ep.A.hasTryItOutChanges() || a(e);
    }, [a, e]);
    let s = i.useCallback(() => {
        let l = (0, ie.B$)(e),
            t = (0, ie.Wt)(l);
        (nw.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: l }),
            n(l),
            a(l),
            t6.O.announce(eR.intl.formatToPlainString(eR.t.M2Hj9s, { presetName: t.getName() })));
    }, [e, n, a]);
    return { preset: e, onShuffle: s };
}
var ir = l(23722),
    ia = l(288490);
let is = "profile-editing-nameplate-error",
    io = "profile-editing-avatar-error",
    id = "profile-editing-avatar-decoration-error",
    iu = "profile-editing-banner-error",
    ic = "profile-editing-display-name-style-error";
function ig(e) {
    let { className: n } = e;
    return (0, t.jsx)("div", {
        className: a()(ia.D0, n),
        children: (0, t.jsx)("div", { className: ia.ZN, children: (0, t.jsx)(n$.LockIcon, { size: "xs" }) }),
    });
}
function im() {
    let e = (0, tI.A)(eR.intl.string(eR.t.pj0XBN)),
        n = tj();
    return (0, t.jsxs)(nJ.h, {
        color: "nitro-pink",
        className: ia.Lu,
        children: [
            (0, t.jsx)(eG.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eR.intl.format(eR.t.TmfgI2, { onClick: n }),
            }),
            (0, t.jsx)(n8.A, { subscriptionTier: tC.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function ip() {
    let [e, n] = (0, n9.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: ia.X6,
              children: [
                  (0, t.jsx)(eG.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eR.intl.string(eR.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eJ.D, {
                      "aria-label": eR.intl.string(eR.t.rSe9ra),
                      className: ia.TD,
                      onClick: () => n(!0),
                      children: (0, t.jsx)(nQ.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function ix() {
    let e = tj(),
        n = (0, tI.A)(eR.intl.string(eR.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: ia.eW,
        children: [
            (0, t.jsxs)("div", {
                className: ia.tm,
                children: [
                    (0, t.jsx)(n0.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eR.intl.string(eR.t.bO0TOe),
                    }),
                    (0, t.jsx)(eG.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eR.intl.format(eR.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(n8.A, { subscriptionTier: tC.pe.TIER_2, buttonTextOverride: n, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(ig, { className: ia.nd }),
        ],
    });
}
function ih() {
    return (0, t.jsx)(eG.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: ia.BJ,
        "aria-hidden": !0,
        children: eR.intl.format(eR.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(e6.t, { size: "xxs", color: "currentColor", className: ia.qp }),
        }),
    });
}
function iv(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(lM, {
        heading: eR.intl.string(eR.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(lw.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? is : void 0 }),
            (0, t.jsx)(lL, { id: is, message: r }),
        ],
    });
}
function iA(e) {
    let { user: n, guildId: l, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(lM, {
        heading: eR.intl.string(eR.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(lt.A, { user: n, guildId: l, disabled: i, errorMessageId: null != r ? io : void 0 }),
            (0, t.jsx)(li.A, { user: n, guildId: l, disabled: i, errorMessageId: null != a ? id : void 0 }),
            (0, t.jsx)(lL, { id: io, message: (0, n4.d3)(r) }),
            (0, t.jsx)(lL, { id: id, message: a }),
        ],
    });
}
function ib(e) {
    let { user: n, guildId: l, disabled: i, errorMessage: r } = e,
        a = (0, n7.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, eS.kn)(a && !i ? [eC.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === eC.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(lM, {
        heading: eR.intl.string(eR.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(n1.Lp, { text: eR.intl.string(eR.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(lR, {
                user: n,
                guildId: l,
                disabled: i,
                errorMessageId: null != r ? ic : void 0,
                onOpen: d ? () => o(eO.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(lL, { id: ic, message: r }),
        ],
    });
}
function ij(e) {
    let { user: n, guildId: l, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(lM, {
        heading: eR.intl.string(eR.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(to, { user: n, guildId: l, disabled: i || !r }),
            (0, t.jsx)(lb, { userId: n.id, guildId: l, disabled: i || !r, errorMessageId: null != a ? iu : void 0 }),
            (0, t.jsx)(lL, { id: iu, message: (0, n4.d3)(a) }),
        ],
    });
}
function iI(e) {
    let { user: n, disabled: l } = e;
    return (0, t.jsx)(lM, {
        heading: eR.intl.string(eR.t["/X3fkf"]),
        disabled: l,
        children: (0, t.jsx)(lc, { user: n, disabled: l }),
    });
}
function iC(e) {
    let { user: n, guildId: l, disabled: i } = e;
    return (0, t.jsxs)(lM, {
        heading: eR.intl.string(eR.t["Vfbar/"]),
        disabled: i,
        children: [
            (0, t.jsx)(l2, { user: n, guildId: l, disabled: i, variant: "square" }),
            (0, t.jsx)(l6, { user: n, guildId: l, disabled: i }),
        ],
    });
}
let iy = "premium-try-it-out-description";
function iN(e) {
    let { user: n } = e,
        l = tj(),
        { navigate: i } = (0, nZ.pA)();
    return (
        ii(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": iy,
            className: ia.DX,
            children: [
                (0, t.jsx)(ig, { className: ia.x$ }),
                (0, t.jsxs)("div", {
                    className: ia.sb,
                    children: [
                        (0, t.jsx)(eG.E, {
                            id: iy,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eR.intl.format(eR.t.TmfgI2, { onClick: l }),
                        }),
                        (0, t.jsx)(n2.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: n3.EyeIcon,
                            text: eR.intl.string(eR.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tB, { user: n, mode: "entrypoint" }),
            ],
        })
    );
}
function iE(e) {
    let {
            user: n,
            panelId: l,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, s.bG)([U.A], () => U.A.hidePersonalInformation),
        { enabled: m } = ll({ location: "DefaultEditingPanelView" }),
        f = (0, ir.A)(c),
        p = null != i,
        x = W.Ay.canUsePremiumProfileCustomization(n),
        h = p && !x,
        v = !x && !p,
        A = v && m,
        b = p && !x && !g,
        j = a || o,
        I = (0, s.bG)([ep.A], () => ep.A.getErrors(i)),
        C = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        y = I.avatar?.[0],
        N = I.avatar_decoration_sku_id?.[0],
        E = I.banner?.[0],
        P = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0],
        k = le.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(ib, { user: n, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(tu, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: ia.wx,
                children: [
                    (0, t.jsx)(nT.m, {
                        text: eR.intl.string(eR.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eJ.D, {
                            innerRef: d,
                            className: ia.cS,
                            "aria-label": eR.intl.string(eR.t["l/A351"]),
                            onClick: u,
                            "aria-controls": l,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(n5.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(t8, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tO, {})
                : (0, t.jsx)(tp, {
                      floatingFooter: v && !A ? (0, t.jsx)(im, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(ip, {}) : (0, t.jsx)(ix, {})),
                              x && (0, t.jsx)(ih, {}),
                              (0, t.jsx)(iv, { user: n, guildId: i, disabled: j || h, errorMessage: C }),
                              (0, t.jsx)(iA, {
                                  user: n,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: y,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(ij, {
                                        user: n,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(iI, { user: n, disabled: j || h }),
                              (0, t.jsx)(iC, { user: n, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(iN, { user: n }), (0, t.jsx)(tk, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var iP = l(110654);
function ik(e) {
    return null;
}
function iT(e) {
    let { activeSlide: n, direction: l, onTransitionComplete: r, children: s } = e,
        o = new Map(s.map((e) => [e.props.id, e]));
    if (!o.has(n)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(n),
        [g, m] = i.useState(!1),
        f = "forwards" === l ? 1 : -1,
        p = (0, u.p)(
            n,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, l) => {
                    let { item: t } = l;
                    e.finished && t === n && (m(!1), t !== d && (c(n), r()));
                },
            },
            "respect-motion-settings",
        ),
        x = g || n !== d;
    return (0, t.jsx)("div", {
        className: a()(iP.kL, x && iP.ez),
        children: (0, t.jsx)("div", {
            className: iP.u4,
            children: p((e, n, l) => {
                let { key: i } = l,
                    r = o.get(n);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          tc.animated.div,
                          {
                              className: iP.M6,
                              style: x
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: x || n !== d,
                              "aria-hidden": x || n !== d,
                              children: r.props.children,
                          },
                          i,
                      );
            }),
        }),
    });
}
var iS = l(477155),
    iO = l(206697),
    iR = l(926321),
    i_ = l(663417),
    iD = l(145934);
let iM = "shuffle-options-a11y-description";
function iL() {
    let { preset: e, onShuffle: n } = ii(),
        { showPresetName: l } = ll({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let n = (0, ie.Wt)(e);
            return { presetName: n.getName(), presetHeader: n.getPreviewThumbnailSrc() };
        }, [e]);
    return l
        ? (0, t.jsxs)("div", {
              className: iD.kL,
              children: [
                  (0, t.jsx)(nT.m, {
                      text: eR.intl.string(eR.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(nX.K, {
                          icon: i_.RefreshIcon,
                          "aria-label": eR.intl.string(eR.t.VzqqFC),
                          "aria-describedby": iM,
                          onClick: n,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: iM, children: eR.intl.string(eR.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iD.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iD.L_, src: a }),
                          (0, t.jsxs)(eG.E, {
                              className: iD._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eR.intl.formatToPlainString(eR.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iD.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(n2.$, {
                      icon: iR.DiceIcon,
                      text: eR.intl.string(eR.t.VzqqFC),
                      onClick: n,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": iM,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: iM, children: eR.intl.string(eR.t.bBRdiB) }),
              ],
          });
}
var iw = l(280406);
function iG(e) {
    let { user: n, onBack: l, backButtonRef: i } = e,
        r = tN();
    return (0, t.jsxs)(tu, {
        children: [
            (0, t.jsxs)("div", {
                className: iw.wx,
                children: [
                    (0, t.jsx)(eJ.D, {
                        innerRef: i,
                        "aria-label": eR.intl.string(eR.t["4IYwrw"]),
                        onClick: l,
                        className: iw.Gv,
                        children: (0, t.jsx)(iS.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(n0.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iw.R_,
                        children: eR.intl.string(eR.t.PxUx8e),
                    }),
                    (0, t.jsx)(eG.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iw.Ij,
                        children: eR.intl.string(eR.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iw.ZZ, children: (0, t.jsx)(iL, {}) }),
                ],
            }),
            (0, t.jsx)(tp, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tB, { user: n, mode: "edit" }),
                        null != r && (0, t.jsx)(tP, { trialOffer: r, onSubscribeSuccess: iO.T }),
                    ],
                }),
            }),
        ],
    });
}
var iF = l(199016);
let iU = "user-profile-editing-panel",
    iV = "profile-modal-editing-panel-heading";
function iB(e) {
    let { onClick: n, className: l, innerRef: i } = e;
    return (0, t.jsx)(nT.m, {
        text: eR.intl.string(eR.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eJ.D, {
            innerRef: i,
            "aria-label": eR.intl.string(eR.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iU,
            className: a()(iF.eg, l),
            onClick: n,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(nY.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iz(e) {
    let { onClick: n, className: l, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: l,
        children: (0, t.jsx)(nT.m, {
            text: eR.intl.string(eR.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(nX.K, {
                buttonRef: i,
                "aria-label": eR.intl.string(eR.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iU,
                icon: nY.V,
                onClick: n,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iW(e) {
    let {
            selectedGuildId: n,
            originGuildId: l,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, s.bG)([V.default], () => V.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, nZ.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: iU,
              "aria-labelledby": iV,
              className: a()(iF.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iF.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iV, children: eR.intl.string(eR.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(iT, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(ik, {
                                  id: "default",
                                  children: (0, t.jsx)(iE, {
                                      panelId: iU,
                                      user: p,
                                      selectedGuildId: n,
                                      originGuildId: l,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, t.jsx)(ik, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(iG, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iH = l(669253),
    iq = l(347805),
    iK = l(629403),
    iY = l(612630),
    iX = l(761431),
    iZ = l(61426);
function i$(e) {
    let { userId: n, className: l, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([U.A], () => U.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iY.A)(n),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    (f(void 0), g(e), a?.());
                    try {
                        await iK.A.updateNote(n, e);
                    } catch {
                        f(eR.intl.string(eR.t.F8FvUy));
                    }
                }
            },
            [n, u, a],
        ),
        h = d && null == p,
        v = (0, iX.T)({ value: p ?? "", onCommit: x, disabled: h }),
        { handleStartEditing: A } = v,
        b = i.useRef(!1);
    if (
        (i.useEffect(() => {
            !r || o || d || b.current || ((b.current = !0), A());
        }, [r, o, d, A]),
        o)
    )
        return null;
    let j =
        null != p && p.length > 0
            ? (0, t.jsx)(eG.E, { variant: "text-sm/normal", color: "text-default", className: iZ.t, children: p })
            : null;
    return (0, t.jsx)(iX.y, {
        ...v,
        variant: "multiline",
        className: l,
        preview: j,
        label: eR.intl.string(eR.t.PbMNh2),
        placeholder: h ? eR.intl.string(eR.t["WLKx/9"]) : eR.intl.string(eR.t.VBhOe2),
        maxLength: Q.T7x,
        disabled: h,
        error: m,
    });
}
var iJ = l(518477),
    iQ = l(793222);
function i0(e) {
    let { userId: n } = e,
        l = (0, eb.g)(),
        { trackUserProfileAction: i } = (0, H.NJ)(),
        r = (0, Y.X)("UserProfileModalV2NotesSection"),
        a = r ? i$ : iq.A;
    return (0, t.jsx)(nl.A, {
        heading: eR.intl.string(eR.t["mQKv+v"]),
        scrollTargetId: iJ.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: n,
            className: r ? iQ.N : iQ.w,
            autoFocus: l === iJ.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var i1 = l(123292),
    i2 = l(667242),
    i3 = l(655214);
function i5(e) {
    let { icon: n, message: l, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: i2.kL,
            children: (0, t.jsxs)("div", {
                className: a()(i3.oR, i2.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: i2.Kk, children: n }),
                    (0, t.jsx)(eG.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: i2.hP,
                            children: (0, t.jsx)(i1.Q, {
                                buttonRef: c,
                                variant: "primary",
                                textVariant: "text-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: o,
                            }),
                        }),
                ],
            }),
        })
    );
}
var i9 = l(346055),
    i7 = l(289873),
    i8 = l(615019);
function i4(e) {
    let { showScrim: n, showLoadingSpinner: l, className: r, children: s } = e;
    i.useEffect(() => {
        l && t6.O.announce(eR.intl.string(eR.t["QR+vBP"]));
    }, [l]);
    let o = i.useRef(null);
    return (
        (0, i9.f)(o, n),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(i8.f, n && i8.z),
                    children: l && (0, t.jsx)(i7.y, { type: i7.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": n || void 0, className: r, children: s }),
            ],
        })
    );
}
var i6 = l(568602),
    re = l(625494),
    rn = l(61881);
function rl(e) {
    let { children: n } = e,
        [l, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([rn.A, ep.A], () => rn.A.hasUnsavedChanges() || ep.A.hasUnsavedChanges());
    i.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = i.useCallback(() => {
        (null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1));
    }, []);
    return (
        i.useEffect(() => {
            function e() {
                (o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        (r(!1), (d.current = null));
                    }, 300)));
            }
            return (
                re._.subscribe(Q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    re._.unsubscribe(Q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(i6.b, { isShaking: l, intensity: a, children: n })
    );
}
l(46121);
var rt = l(140355),
    ri = l(933832),
    rr = l(972213),
    ra = l(97483),
    rs = l(775602),
    ro = l(384377);
let rd = {
        [iJ.jM.WIDGET_ADDED]: {
            message: eR.intl.string(eR.t.fFP1Uy),
            icon: (0, t.jsx)(ri.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iJ.jM.WIDGET_REMOVED]: {
            message: eR.intl.string(eR.t.zzsK7h),
            icon: (0, t.jsx)(ri.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iJ.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eR.intl.string(eR.t["84MExs"]),
            icon: (0, t.jsx)(rr.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: ra.Ck.FAILURE,
        },
        [iJ.jM.SOMETHING_WENT_WRONG]: {
            message: eR.intl.string(eR.t.F8FvUy),
            icon: (0, t.jsx)(rr.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: ra.Ck.FAILURE,
        },
    },
    ru = (e) => {
        let { className: n } = e,
            l = (0, ro.fu)(),
            r = (0, s.bG)([rs.Ay], () => rs.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== l ? (o(!0), c(rd[l]), t6.O.announce(rd[l].message)) : o(!1);
        }, [l]);
        let g = (0, u.p)(
            a,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, ro.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, ro.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, l) =>
                        l &&
                        null !== d &&
                        (0, t.jsx)(tc.animated.div, { className: n, style: e, children: (0, t.jsx)(i5, { ...d }) }),
                ),
            })
        );
    };
var rc = l(297413),
    rg = l(465829),
    rm = l(826673),
    rf = l(609425),
    rp = l(73392),
    rx = l(576705),
    rh = l(997394);
function rv(e) {
    return null == e || "" === e ? void 0 : e;
}
function rA(e) {
    let n,
        l,
        r,
        o,
        d,
        u,
        c,
        g,
        m,
        f,
        { user: p, displayProfile: h } = e,
        { analyticsLocations: v } = (0, I.Ay)(),
        A = h?.guildId != null,
        b = h?.guildId ?? void 0,
        j = W.Ay.canUsePremiumProfileCustomization(p),
        C = (0, n7.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: y, permissionsLoaded: N } = (0, s.cf)([rx.A, G.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = G.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: rx.A.can(Q.xBc.CHANGE_NICKNAME, e) || rx.A.can(Q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            fallbackDisplayName: k,
            onCommit: T,
        } = ((l = null != (n = h?.guildId ?? null)),
        (r = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, s.bG)([ef.Ay], () => (null != n ? (ef.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (d = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingNickname)),
        (m = (g = void 0 !== (c = l ? u : d) ? c : l ? o : r) ?? ""),
        (f = l ? (rv(r) ?? p.username) : p.username),
        {
            value: m,
            previewValue: rv(g) ?? f,
            fallbackDisplayName: f,
            onCommit: i.useCallback(
                (e) => {
                    l ? (0, ni.p)({ nickname: e.trim(), guildId: n ?? void 0 }) : (0, ni.p)({ globalName: e.trim() });
                },
                [l, n],
            ),
        }),
        S = (0, iX.T)({ value: E, onCommit: T, disabled: !y }),
        { isEditing: O, handleCommit: R } = S,
        _ = (0, s.bG)([ep.A], () => ep.A.getErrors(b ?? null)),
        D = (0, nt.EC)(b ?? null),
        M = A ? _.nick?.[0] : _.global_name?.[0],
        L = D?.nick?.[0],
        w = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(b).pendingDisplayNameStyles),
        F = (0, rf.A)({ userId: p.id, guildId: b, pendingDisplayNameStyles: w }),
        U = (0, rp.a)({ displayNameStyles: F, compensateForSafari: !1 }),
        B = eR.intl.string(A ? eR.t.mq6Cg9 : eR.t.XuZU7A),
        z = A ? eR.intl.string(eR.t.YcDKr8) : p.username,
        H = i.useRef(null),
        q = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    O && R(),
                    C &&
                        (0, rm.Dr)(eC.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eO.i.INDIRECT_ACTION,
                        }),
                    (0, lj.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: H }));
            },
            [O, R, v, b, C],
        ),
        K = {
            icon: nY.V,
            tooltip: eR.intl.string(eR.t.lqKKI2),
            "aria-label": eR.intl.string(eR.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: q,
            buttonRef: H,
        },
        Y =
            A && !y && N
                ? (0, t.jsx)(nT.m, {
                      text: eR.intl.string(eR.t.gzjxQi),
                      children: (0, t.jsx)(eJ.D, {
                          tag: "span",
                          className: rh.Cs,
                          children: (0, t.jsx)(n$.LockIcon, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eR.intl.string(eR.t.VPu695),
                          }),
                      }),
                  })
                : null;
    return (0, t.jsx)(iX.y, {
        ...S,
        hugContents: !0,
        preview: (e, n) => {
            let { focused: l } = n;
            return (0, t.jsx)(rg.c$, {
                user: p,
                guildId: b,
                displayName: l ? (rv(e) ?? k) : P,
                size: "lg",
                pendingDisplayNameStyles: w,
                className: a()(rh.dt, { [rh.jW]: l && "" === e }),
                displayNameTrailing: Y,
            });
        },
        placeholder: z,
        label: B,
        maxLength: Q.zzC,
        textVariant: rg.gU.lg,
        textClassName: U,
        trailing: y && j ? K : void 0,
        error: M,
        warning: L,
        disabled: !y,
    });
}
var rb = l(628072);
function rj(e) {
    let n,
        l,
        r,
        a,
        o,
        { displayProfile: d } = e,
        {
            value: u,
            previewValue: c,
            onCommit: g,
        } = ((n = d?.guildId ?? null),
        (l = d?.guildId != null),
        (r = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingPronouns)),
        (a = l ? d?._guildMemberProfile?.pronouns : d?.pronouns),
        (o = d?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, ni.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        m = (0, iX.T)({ value: u, onCommit: g }),
        f = d?.guildId != null,
        p = null != c && c.length > 0,
        x = eR.intl.string(f ? eR.t.AXiE0i : eR.t["76Aqhl"]);
    return (0, t.jsx)(iX.y, {
        ...m,
        variant: "compact",
        hugContents: !0,
        className: rb.k,
        preview: p ? (0, t.jsx)(rg.n2, { pronouns: c }) : null,
        label: eR.intl.string(eR.t["rniRE+"]),
        placeholder: x,
        maxLength: Q.VE5,
        spellCheck: !1,
    });
}
var rI = l(145497),
    rC = l(685073),
    ry = l(318785),
    rN = l(534400),
    rE = l(436921),
    rP = l(743981),
    rk = l(295930),
    rT = l(594615);
let rS = "no-server-tag";
function rO(e) {
    let { buttonRef: n, guildId: l, guildTag: i, guildBadge: r, ...s } = e,
        o = (0, rE.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == l;
    return (0, t.jsx)(eJ.D, {
        innerRef: n,
        className: a()(o ? rk.qJ : rk.L5, { [rk.wK]: d }),
        ...s,
        children: (0, t.jsxs)(eG.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: rk.W3,
            tag: "span",
            children: [
                d
                    ? eR.intl.string(eR.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rN.Z9,
                                  {
                                      src: (0, rC.gC)(l, r, rP.Sl.SIZE_14),
                                      size: rP.Sl.SIZE_14,
                                      className: rk.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rC.gC)(l, r, rP.Sl.SIZE_14) ?? l,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tz.a, { size: "xs", color: "currentColor", className: rk.u4 }),
            ],
        }),
    });
}
function rR() {
    let e = (0, ry.b)(),
        n = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        l = (0, s.cf)([V.default], () => {
            let e = V.default.getCurrentUser();
            return (0, rC.Zo)(e?.primaryGuild);
        }),
        r = l.guildId ?? null,
        a = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== a ? a : r,
        d = null != o ? (n.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (l.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? l.badge : void 0),
        m = i.useCallback(
            (e) =>
                e.id === rS
                    ? (0, t.jsx)("div", {
                          className: rT.uN,
                          children: (0, t.jsx)(eG.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rk.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tX.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: rS, label: eR.intl.string(eR.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let n = e.profile?.tag;
                    if (null == n) return [];
                    let l = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rI.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rN.o9, { guildId: e.id, guildTag: n, guildBadge: l }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, ni.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(t1, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eR.intl.string(eR.t.Pdd1nd),
              listboxClassName: rk.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: n, selectButtonProps: l } = e;
                  return (0, t.jsx)(rO, { buttonRef: n, guildId: o, guildTag: c, guildBadge: g, ...l });
              },
          });
}
var r_ = l(956495);
function rD(e) {
    let { displayProfile: n, nickname: l, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(rg.Ay, {
        ...r,
        guildId: n?.guildId ?? void 0,
        displayName: l,
        displayNameSize: "lg",
        pronouns: n?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rM(e) {
    let n = (0, s.bG)([ep.A], () => ep.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rD, { ...e, displayNameStylesOverride: n });
}
function rL(e) {
    let { user: n, displayProfile: l, trailing: i } = e,
        r = n.isProvisional
            ? null
            : (0, t.jsx)(rc.A, {
                  user: n,
                  forceUsername: !0,
                  className: r_.a1,
                  usernameClass: r_.eb,
                  discriminatorClass: r_.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rA, { displayProfile: l, user: n }),
            (0, t.jsxs)("div", {
                className: a()(r_.AK, r_.j6),
                children: [r, (0, t.jsx)(rg.Ce, {}), (0, t.jsx)(rj, { displayProfile: l }), (0, t.jsx)(rR, {}), i],
            }),
        ],
    });
}
function rw(e) {
    let { editingMode: n, ...l } = e;
    switch (n) {
        case "read-only":
            return (0, t.jsx)(rD, { ...l });
        case "try-it-out":
            return (0, t.jsx)(rM, { ...l });
        case "edit":
            return (0, t.jsx)(rL, { ...l });
        default:
            return (0, ea.xb)(n);
    }
}
l(321073);
var rG = l(97808),
    rF = l(980707),
    rU = l(477782),
    rV = l(22231),
    rB = l(601255),
    rz = l(562819),
    rW = l(19575),
    rH = l(339984),
    rq = l(329801),
    rK = l(884362);
let rY = rW.Ay.getEnableHardwareAcceleration() ? rG.Js : rG.eu;
function rX(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rZ(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(rF.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eR.intl.string(eR.t.YAgq3W),
        children: (0, t.jsx)(rU.rX, { children: l }),
    });
}
function r$(e) {
    let { user: n, guildId: l } = e,
        { avatarProps: r, eventHandlers: o } = (0, eD.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != l,
                c = (0, s.bG)([ef.Ay], () => (null != l ? ef.Ay.getMember(l, n.id) : null)),
                g = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0).pendingAvatar),
                m = u ? c?.avatar : n.avatar,
                f = (0, eg.z5)(g, m),
                p = u && null != n.avatar,
                x = W.Ay.canUsePremiumProfileCustomization(n),
                h = x || null == l,
                v = x || null == l,
                A = (0, s.bG)([G.A], () => (null != l ? G.A.getGuild(l) : null)),
                b = (0, eg.a4)({ user: n }),
                j = (0, eg.a4)({ user: n, guildId: l ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eg.CP)(l ?? void 0),
                y = void 0 !== C,
                N = null != (0, rB.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    (r(),
                        rX(() =>
                            (0, n4.XD)({
                                uploadType: rH.HL.AVATAR,
                                analyticsSource: o,
                                guildId: l ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, o, l, a]),
                k = i.useCallback(() => {
                    (r(),
                        rX(() =>
                            (0, rz.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        ));
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    (r(),
                        (0, n4.rM)(null, m, (e) => (0, ni.p)({ guildId: l ?? void 0, avatar: e })),
                        (0, eg.WU)(p ? "reset" : "remove"));
                }, [r, l, m, p]),
                S = i.useCallback(() => {
                    (r(), (0, ni.p)({ guildId: l ?? void 0, avatarDecoration: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rU.Dr,
                                { id: "change-avatar", label: eR.intl.string(eR.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rU.Dr,
                                { id: "change-decoration", label: eR.intl.string(eR.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eR.intl.string(eR.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eR.intl.string(eR.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, f, N, P, k, T, S]);
        })({ user: n, guildId: l, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, t.jsx)(eD.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rq.my, rq.vk, rK.kL, { [rK.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rY, { ...r, imageClassName: a()(rq.Lw, rK.HU) }),
                  (0, t.jsx)(ls.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: ls.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rZ, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rK.r9,
                              children: (0, t.jsx)(nX.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rV.PencilIcon,
                                  "aria-label": eR.intl.string(eR.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rJ = l(514905);
function rQ(e) {
    let { onMenuClose: n, items: l, ...i } = e;
    return (0, t.jsx)(rF.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eR.intl.string(eR.t.FzU73A),
        children: (0, t.jsx)(rU.rX, { children: l }),
    });
}
function r0(e) {
    let { user: n, guildId: l } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: n, guildId: l, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eg.N2)({ user: n, guildId: l ?? void 0 }),
                c = (0, eg.Xf)({ user: n, guildId: l ?? void 0 }),
                g = (0, eg.Xf)({ user: n, guildId: void 0 }),
                m = W.Ay.canUsePremiumProfileCustomization(n),
                f = null == l,
                p = f || m,
                x = f || m,
                h = null != l,
                {
                    pendingBanner: v,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ep.A], () => ep.A.getPendingChanges(l ?? void 0)),
                j = (0, s.bG)([K.A], () =>
                    null != l ? K.A.getGuildMemberProfile(n.id, l)?.banner : K.A.getUserProfile(n.id)?.banner,
                ),
                C = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileEffect != null),
                N = (0, s.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileFrame != null),
                P = (0, eg.Ac)(v, j),
                k = h && C,
                T = h && y,
                S = h && N,
                O = void 0 === A ? null != u : null != A,
                R = void 0 === b ? null != c : null != b,
                _ = (0, eg.lw)({
                    pendingValue: b,
                    userValue: g,
                    guildValue: null != l ? c : void 0,
                    guildId: l ?? void 0,
                }),
                D = (0, E.A)(_?.skuId),
                M = i.useCallback(() => {
                    (r(),
                        (0, n4.XD)({
                            uploadType: rH.HL.BANNER,
                            analyticsSource: o,
                            guildId: l ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, o, l, a]),
                L = i.useCallback(() => {
                    (r(),
                        (0, lV.W)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, u, a]),
                w = i.useCallback(() => {
                    (r(), (0, n4.rM)(null, j, (e) => (0, ni.p)({ guildId: l ?? void 0, banner: e })));
                }, [r, l, j]),
                F = i.useCallback(() => {
                    (r(), (0, ni.p)({ guildId: l ?? void 0, profileEffect: null }));
                }, [r, l]),
                U = i.useCallback(() => {
                    (r(),
                        (0, l3.w)({
                            analyticsLocations: d,
                            guild: null != l ? (G.A.getGuild(l) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        }));
                }, [r, d, l, D, a]),
                B = i.useCallback(() => {
                    (r(), (0, ni.p)({ guildId: l ?? void 0, profileFrame: null }));
                }, [r, l]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                rU.Dr,
                                { id: "change-banner", label: eR.intl.string(eR.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                rU.Dr,
                                { id: "change-effect", label: eR.intl.string(eR.t["/6nv6N"]), action: L },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rU.Dr,
                                { id: "change-frame", label: eR.intl.string(eR.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.jHlJNS),
                                          action: w,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.tT9n7D),
                                          action: w,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        O &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.zUOlT6),
                                          action: F,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        R &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eR.intl.string(eR.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rU.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eR.intl.string(eR.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, p, x, T, S, P, O, R, M, L, U, w, F, B]);
        })({ user: n, guildId: l, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eL.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rJ.kL, { [rJ.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eL.A, { ...e, className: rJ.Pr }),
                  (0, t.jsx)(ls.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: ls.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rQ, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rJ.r9,
                              children: (0, t.jsx)(nX.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rV.PencilIcon,
                                  "aria-label": eR.intl.string(eR.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var r1 = l(415916),
    r2 = l(419341),
    r3 = l(732188),
    r5 = l(913453),
    r9 = l(667049),
    r7 = l(389667),
    r8 = l(116331),
    r4 = l(837531),
    r6 = l(186272),
    ae = l(447538);
let an = (e) => e * (2 - e),
    al = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function at(e) {
    let { type: n, anchor: l } = e;
    return "staple" !== n || "bottom" !== l;
}
function ai(e) {
    let { displayProfile: n, pendingBanner: l } = e;
    if ((0, en.Nx)()) return null;
    let i = n?.getPreviewBanner(l, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: ae.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function ar(e) {
    let { displayProfile: n, profileEffectOverride: l, isHovering: r } = e,
        a = void 0 !== l ? l : n?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (lW.add(e), () => lW.delete(e)),
            () => lH,
        );
    return null == a ? null : (0, t.jsx)(y.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function aa(e) {
    var n;
    let l,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: p,
            nickname: x,
            hasEntered: h,
            customStatusPrompt: v,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: y,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: P,
            fadeInProfileFrame: T,
            editingMode: S,
            isLoading: M = !1,
        } = e,
        w = o.id === d.id,
        G = "edit" === S,
        V = i.useRef(null),
        B = i.useRef(null),
        W = i.useRef(null);
    i.useEffect(() => {
        if (w) return () => C.A.setState({ isOpen: !1 });
    }, [w]);
    let { isHoveringOrFocusing: H } = (0, O.A)(V),
        [q, K] = i.useState(),
        Y = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? K("compact-xs") : n <= 380 ? K("compact-sm") : K(void 0);
        }, []);
    (0, A.g)(V, Y, [], { fireOnMount: !0 });
    let X = null != q ? al[q] : void 0,
        ee = i.useMemo(() => v ?? (0, R.A)(), [v]),
        { relationshipType: en, originApplicationId: eo } = (0, s.cf)([F.A], () => ({
            relationshipType: F.A.getRelationshipType(o.id),
            originApplicationId: F.A.getOriginApplicationId(o.id),
        })),
        ed =
            ((n = o.id),
            (l = (0, Z.bG)([J.default], () => J.default.locale)),
            (r = (0, Z.bG)([F.A], () => (F.A.getRelationshipType(n) === Q.eA$.FRIEND ? F.A.getSince(n) : null), [n])),
            (0, $.An)(r, l)),
        eu = (0, s.bG)([U.A], () => U.A.hidePersonalInformation),
        ec = (0, D.q)({ userId: o.id }),
        eg = (0, _.fi)(o.id),
        { appIdentities: em, connections: ef } = (function (e) {
            let { filteredAppIdentities: n } = (0, er.A)(e),
                l = (0, es.A)(e),
                t = i.useMemo(() => new Set(n?.map((e) => e.application_id) ?? []), [n]),
                r = (0, ei.A)([...t]).filter(ea.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        n
                            .map((e) => ({ identity: e, application: r.find((n) => n.id === e.application_id) }))
                            .filter((e) => {
                                let { application: n } = e;
                                return null != n;
                            }),
                    [n, r],
                ),
                connections: i.useMemo(
                    () =>
                        l.filter((e) => {
                            let n = et.A.get(e.type);
                            return (
                                !n?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !t.has(n.migrationData.replacedBy)
                            );
                        }),
                    [l, t],
                ),
            };
        })(o.id),
        ep = (0, el.A)(o.id),
        ev = ef.length > 0 || em.length > 0,
        eA = ep.length > 0,
        eb = G ? r0 : eL.A,
        ej = p?.guildId ?? u,
        eI = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: X?.avatarSize ?? eh.T[ex.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eC = i.useCallback(() => {
            (0, eZ.A)({ user: o, guildId: ej, alt: x });
        }, [x, ej, o]);
    return (0, t.jsxs)("main", {
        className: a()(ae.profile, null != q && ae[q]),
        ref: V,
        "aria-busy": M,
        children: [
            (0, t.jsxs)("div", {
                className: ae.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: ae.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eb, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ex.d.MODAL_V2,
                            specOverrides: X,
                            pendingBanner: y,
                            pendingAccentColor: N,
                        }),
                    }),
                    G
                        ? (0, t.jsx)(r$, { ...eI })
                        : (0, t.jsx)(eD.A, {
                              ...eI,
                              onOpenAvatar: "read-only" === S ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === S && null == I ? t_.$T : void 0,
                          }),
                    (0, t.jsx)(eY.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ex.d.MODAL_V2,
                        hasEntered: h,
                        prompt: w ? ee : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: ae.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rw, {
                                user: o,
                                displayProfile: p,
                                nickname: x,
                                trailing: (0, t.jsx)(eM.A, {
                                    displayProfile: p,
                                    themeType: ex.d.MODAL_V2,
                                    onClose: b,
                                    showPendingBadgeEdits: w,
                                    popoutAnchorRef: h ? B : void 0,
                                    containerRef: W,
                                }),
                                onClose: b,
                                editingMode: S,
                            }),
                            (0, t.jsx)("div", { ref: B }),
                            w && h && (0, t.jsx)(e_, { targetElementRef: W }),
                        ],
                    }),
                    en === Q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eK.A.Overlay, {
                            className: ae.profileOverlay,
                            children: (0, t.jsx)(eV.A, {
                                user: o,
                                applicationId: eo,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: ae.profileBanner,
                            }),
                        }),
                    eg.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eK.A.Overlay,
                            {
                                className: ae.profileOverlay,
                                children: (0, t.jsx)(eV.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: ae.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eK.A.Overlay, {
                            className: ae.profileOverlay,
                            children: (0, t.jsx)(nl.A, {
                                heading: eR.intl.string(eR.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: ae.profileBanner,
                                children: (0, t.jsx)(L.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eq.A, { user: o, className: ae.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eK.A.Overlay, {
                            className: ae.profileOverlay,
                            children: (0, t.jsx)(eH.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: ae.profileButtons,
                        children: (0, t.jsx)(nP, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: en,
                            onClose: b,
                        }),
                    }),
                    w && "try-it-out" !== S && (0, t.jsx)(ew.A, { isPremiumUser: (0, z.ki)(d) }),
                    !eu && (0, t.jsx)(np, { currentUser: d, displayProfile: p, canEditInPlace: G }),
                    ec.length > 0 &&
                        (0, t.jsx)(nl.A, {
                            heading: eR.intl.string(eR.t["Uv/eTx"]),
                            children: (0, t.jsx)(eU.A, { applicationIds: ec }),
                        }),
                    (0, t.jsx)(nl.A, {
                        heading: eR.intl.string(eR.t.a6XYD9),
                        children: (0, t.jsx)(ez.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iJ.In }),
                    }),
                    null != ed &&
                        (0, t.jsx)(nl.A, {
                            heading: eR.intl.string(eR.t.wlTO8v),
                            children: (0, t.jsx)(eF, { friendsSinceDate: ed }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eX.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: ae.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !eu &&
                        (G || ev) &&
                        (0, t.jsx)(nl.A, {
                            heading: eR.intl.string(eR.t["3fe7U5"]),
                            scrollTargetId: iJ.bk.CONNECTIONS,
                            children: (0, t.jsx)(nK, {
                                applicationIdentities: em,
                                connections: ef,
                                userId: o.id,
                                allowEditing: G,
                                className: ae.profileAppConnections,
                            }),
                        }),
                    !eu &&
                        eA &&
                        (0, t.jsx)(nl.A, {
                            heading: eR.intl.string(eR.t.PHjkRE),
                            scrollTargetId: iJ.bk.APPS,
                            children: (0, t.jsx)(e4, {
                                applicationRoleConnections: ep,
                                onClose: b,
                                className: ae.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(i0, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(ar, { displayProfile: p, profileEffectOverride: E, isHovering: H }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: at, fadeIn: T }),
        ],
    });
}
function as(e) {
    let { user: n, displayProfile: l, pendingThemeColors: i, forceShowPremium: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, ee.A)({ user: n, displayProfile: l, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eu.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function ao(e) {
    let {
            user: n,
            currentUser: l,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: C,
            initialTabSection: y,
            initialScrollTarget: k,
            transitionState: O,
            customStatusPrompt: R,
            openedAt: _,
            onClose: D,
            sourceAnalyticsLocations: L = [],
            themeContainerClassName: F,
        } = e,
        z = n.id === l.id,
        Z = i.useCallback(() => (0, r1.A)(z, D), [z, D]),
        {
            guildId: $,
            pendingGuildId: J,
            isFetching: Q,
            handleSelectUserProfile: ee,
            handleRetry: en,
            hasError: el,
        } = (function (e) {
            let { userId: n, initialGuildId: l } = e,
                [t, r] = i.useState(l),
                [a, o] = i.useState(l),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([K.A], () => K.A.getUserProfile(n)?.fetchError?.status ?? null, [n]),
                f = i.useCallback(() => {
                    (u("retrying"), g((e) => e + 1));
                }, []),
                p = i.useCallback((e) => {
                    (u("loading"), r(e ?? void 0));
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ec.A)(n, void 0, {
                            type: "modal",
                            guildId: t,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(t), u("idle"));
                            },
                            () => {
                                e || (o(t), u("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, n, c]),
                {
                    guildId: a,
                    pendingGuildId: t,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: n.id, initialGuildId: r }),
        et = i.useMemo(() => (null != $ ? { [$]: [n.id] } : {}), [$, n.id]);
    (0, b.Eq)(et, "UserProfileModalV2");
    let ei = (0, Y.X)("UserProfileModalV2"),
        er = (0, nZ.YW)(),
        ea = (0, s.bG)([U.A], () => U.A.hidePersonalInformation),
        es = (0, eo.A)(n.id) && ei,
        eu = (0, ed.W)(n.id),
        eh = el && !eu,
        eI = es && !ea && !el && !er,
        eC = er ? "try-it-out" : eI ? "edit" : "read-only",
        {
            pendingThemeColors: ey,
            avatarDecorationOverride: eN,
            avatarOverride: eE,
            bannerOverride: eP,
            accentColorOverride: ek,
            profileEffectOverride: eT,
            profileFrameOverride: eS,
        } = (function (e) {
            let { userId: n, guildId: l, editingMode: t } = e;
            return (0, s.cf)(
                [ep.A, V.default, ef.Ay, K.A],
                () => {
                    if ("read-only" === t) return eA;
                    let e = V.default.getUser(n);
                    if (null == e) return eA;
                    let i = ep.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === t
                                ? {
                                      pendingThemeColors: i.tryItOutThemeColors,
                                      pendingAvatar: i.tryItOutAvatar,
                                      pendingBanner: i.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : ep.A.getPendingChanges(l),
                        a = null != l ? ef.Ay.getMember(l, n) : null,
                        s = K.A.getUserProfile(n),
                        o = null != l ? K.A.getGuildMemberProfile(n, l) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, eg.us)({
                            userValue: e.avatarDecoration,
                            guildValue: a?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: l,
                        }),
                        avatarOverride: (0, em.V7)({ userId: n, image: r.pendingAvatar, size: ev }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, eg.us)({
                            userValue: s?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: l,
                        }),
                        profileFrameOverride: (0, eg.us)({
                            userValue: s?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: l,
                        }),
                    };
                },
                [n, l, t],
            );
        })({ userId: n.id, guildId: $, editingMode: eC }),
        {
            isExpanded: eO,
            isAnimating: e_,
            transition: eD,
            handleExpand: eM,
            handleCollapse: eL,
            refs: { expandIconButtonRef: ew, expandTabButtonRef: eG, collapseButtonRef: eF },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [l, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: an },
                    onRest: () => t(!1),
                }),
                a = (0, v.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    ((c.current = "collapse"), t(!0), n(!0));
                }, []),
                m = i.useCallback(() => {
                    ((c.current = "expand"), t(!0), n(!1));
                }, []);
            return (
                i.useEffect(() => {
                    if (!l) {
                        if ("collapse" === c.current && e) ((c.current = null), d.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, l, a]),
                {
                    isExpanded: e,
                    isAnimating: l,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eU = es && !eO,
        eV = es && (!eO || e_),
        { defaultWishlistId: ez } = (0, s.cf)([K.A], () => ({ defaultWishlistId: K.A.getFirstWishlistId(n.id) }));
    (0, w.fw)({ wishlistId: ez, userId: n.id });
    let eH = (0, ej.fC)(),
        eq = eh && (!es || !Q),
        eY = es && el,
        eX = J !== $ || eY || null != eH.interactionType,
        eZ = (function (e) {
            let { user: n, currentUser: l } = e,
                { mutualFriendsCount: t, mutualGuilds: i } = (0, r5.A)(n),
                r = i?.length,
                a = (0, r3.A)(n),
                s = (0, r9.A)(n.id),
                o = (0, r2.A)(n),
                { hasNewWishlistItems: d } = (0, r8.A)(n),
                u = [],
                c = n.id === l?.id,
                g = (0, r7.A)(n.id),
                m = s.length > 0;
            return (
                (g || m) && u.push({ text: eR.intl.string(eR.t.laViwx), section: iJ.RP.WIDGETS }),
                u.push({ text: eR.intl.string(eR.t.chq59f), section: iJ.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eR.intl.string(eR.t["7lZ31J"]), section: iJ.RP.WISHLIST, showNewContentDot: d }),
                n.id !== l?.id &&
                    a &&
                    (u.push({ text: (0, r4.A)(t), section: iJ.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, r6.A)(r), section: iJ.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: n, currentUser: l }),
        { analyticsLocations: e$ } = (0, I.Ay)([...L, j.A.USER_PROFILE_MODAL_V2]),
        eJ = (0, H.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: C,
            guildId: $,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eQ = i.useCallback(() => {
            ((0, q.Wn)({ analyticsLocations: e$, ...eJ, action: iJ.pt.SHOW_STYLES_PANEL }), eM());
        }, [e$, eJ, eM]),
        e0 = i.useCallback(() => {
            ((0, q.Wn)({ analyticsLocations: e$, ...eJ, action: iJ.pt.HIDE_STYLES_PANEL }), eL());
        }, [e$, eJ, eL]),
        e1 = (0, X.Ay)(n.id, $);
    (0, M.A)(e$, e1, iJ.R7.MODAL_V2);
    let e2 = void 0 !== eS ? eS?.skuId : e1?.profileFrame?.skuId,
        e3 = (0, E.A)(e2),
        e5 = (0, N.A)(e2),
        { profileFrameStyle: e9, profileFrameClassName: e7 } = (0, T.A)(e3);
    (0, P.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: e$ });
    let e8 = (0, s.bG)([V.default], () => W.Ay.canUsePremiumProfileCustomization(V.default.getCurrentUser())),
        e4 = er || (z && null != e1 && e8),
        e6 = B.Ay.useName(e1?.guildId, c, n),
        ne = (0, S.GV)(),
        nn = (0, s.bG)([G.A], () => (null != $ ? G.A.getGuild($) : null)),
        nl = z
            ? null != nn
                ? eR.intl.formatToPlainString(eR.t.M7OhOF, { guildName: nn.name })
                : eR.intl.string(eR.t.egQPgM)
            : eR.intl.format(eR.t.KRe1Fk, { name: e6 });
    return (0, t.jsx)(I.f5, {
        value: e$,
        children: (0, t.jsx)(H.of, {
            value: eJ,
            openedAt: _,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, t.jsx)(ej.Hl, {
                value: eH,
                children: (0, t.jsx)(eb.N, {
                    value: k,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(t_.zr, { [t_.QF]: e1?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": ne,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(rl, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ae.layoutContainer, e7, {
                                        [ae.editingPanelEnabled]: es,
                                        [ae.editingPanelExpanded]: es && eO,
                                        [ae.isAnimating]: e_,
                                    }),
                                    style: e9,
                                    children: [
                                        (0, t.jsxs)(as, {
                                            user: n,
                                            displayProfile: e1,
                                            pendingThemeColors: ey,
                                            forceShowPremium: e4,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: t_.Oo,
                                                    children: [
                                                        (0, t.jsx)(nk.A, { onClose: Z }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: ne, children: nl }),
                                                        }),
                                                        eV &&
                                                            (0, t.jsx)(iz, {
                                                                buttonRef: ew,
                                                                onClick: eQ,
                                                                className: ae.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eU &&
                                                    (0, t.jsx)("div", {
                                                        className: ae.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iB, {
                                                            innerRef: eG,
                                                            onClick: eQ,
                                                            className: ae.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                es &&
                                                    eD((e, n) =>
                                                        n
                                                            ? (0, t.jsx)(iW, {
                                                                  className: a()(ae.editingPanel, {
                                                                      [ae.isExpanded]: eO,
                                                                  }),
                                                                  selectedGuildId: J,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: ee,
                                                                  onClose: e0,
                                                                  collapseButtonRef: eF,
                                                                  isLoading: Q,
                                                                  isEditingDisabled: el,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eK.A, {
                                                    className: a()(F, t_.A7, ae.profileContentOuter),
                                                    innerClassName: ae.profileContentInner,
                                                    user: n,
                                                    displayProfile: e1,
                                                    themeType: ex.d.MODAL_V2,
                                                    pendingThemeColors: ey,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e4,
                                                    children: [
                                                        (0, t.jsx)(ai, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eW.A, {}),
                                                        !eh && (0, t.jsx)(ru, { className: ae.noticeContainer }),
                                                        eq &&
                                                            (0, t.jsx)("div", {
                                                                className: ae.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(i5, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eR.intl.string(eR.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != en
                                                                            ? eR.intl.string(eR.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: en,
                                                                    actionDisabled: !es && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: ae.profileCardToastContainer,
                                                            children: (0, t.jsx)(eB.A, { userId: n.id, onClose: Z }),
                                                        }),
                                                        (0, t.jsxs)(i4, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: ae.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(aa, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    guildId: $,
                                                                    channelId: c,
                                                                    displayProfile: e1,
                                                                    nickname: e6,
                                                                    originGuildId: d,
                                                                    hasEntered: O === h.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: Z,
                                                                    avatarDecorationOverride: eN,
                                                                    avatarOverride: eE,
                                                                    bannerOverride: eP,
                                                                    accentColorOverride: ek,
                                                                    profileEffectOverride: eT,
                                                                    profileFrame: e3,
                                                                    fadeInProfileFrame: e5,
                                                                    editingMode: eC,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, t.jsx)(rt.A, {
                                                                    user: n,
                                                                    currentUser: l,
                                                                    displayProfile: e1,
                                                                    guildId: $,
                                                                    channelId: c,
                                                                    items: eZ,
                                                                    initialSection: y,
                                                                    onClose: Z,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(iH.A, { userId: n.id, guildId: $, className: ae.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ad(e) {
    return (0, t.jsx)(nZ.tM, { children: (0, t.jsx)(ao, { ...e }) });
}
