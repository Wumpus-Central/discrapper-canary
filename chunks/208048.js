n.d(l, { A: () => r4 });
var t = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(935462),
    d = n(778712),
    u = n(866323),
    c = n(364522),
    g = n(695366),
    m = n(140735),
    f = n(707554),
    p = n(738188),
    x = n(661531),
    h = n(231723),
    v = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    y = n(248284),
    C = n(480335),
    N = n(577390),
    E = n(372320),
    P = n(31956),
    k = n(744808),
    T = n(875741),
    S = n(915089),
    O = n(713517),
    R = n(645507),
    _ = n(922590),
    L = n(821269),
    D = n(93246),
    M = n(594832),
    w = n(71393),
    G = n(994500),
    F = n(351906),
    V = n(287809),
    U = n(562153),
    B = n(474090),
    z = n(158045),
    W = n(183555),
    H = n(47675),
    q = n(321191),
    K = n(591179),
    Y = n(999291),
    X = n(702841),
    $ = n(370480),
    Z = n(773669),
    J = n(652215),
    Q = n(101928),
    ee = n(837529),
    el = n(346713),
    en = n(573648),
    et = n(429913),
    ei = n(321078),
    er = n(403362),
    ea = n(484509),
    es = n(487409),
    eo = n(83931),
    ed = n(920601),
    eu = n(903209),
    ec = n(919395),
    eg = n(101058),
    em = n(696451),
    ef = n(836602),
    ep = n(996988),
    ex = n(985253);
let eh = (0, d.FT)(ex.T[ep.d.MODAL_V2].avatarSize),
    ev = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eA = n(716804),
    eb = n(679492),
    ej = n(718019),
    eI = n(681331),
    ey = n(915614),
    eC = n(744753),
    eN = n(834730);
function eE(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eN.E, { variant: "text-sm/normal", children: l });
}
var eP = n(361311),
    ek = n(931481),
    eT = n(439053),
    eS = n(743987),
    eO = n(312381),
    eR = n(501193),
    e_ = n(383448),
    eL = n(946356),
    eD = n(983495),
    eM = n(503026),
    ew = n(305385),
    eG = n(109112),
    eF = n(939249),
    eV = n(730134),
    eU = n(169869),
    eB = n(837057),
    ez = n(310419),
    eW = n(889227),
    eH = n(967198),
    eq = n(488995),
    eK = n(375708),
    eY = n(576849);
function eX(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eU.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eY.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eV.A, { user: new eW.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eG._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eY.Hd,
                children: [
                    (0, t.jsxs)(eF.D, {
                        className: eY.OB,
                        onClick: function () {
                            i?.(),
                                (0, eB.transitionToGlobalDiscovery)({
                                    tab: eq.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: ez.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eN.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eY.nk,
                                children: eK.intl.format(eK.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eY.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function e$(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, W.NJ)(),
        o = (0, s.bG)([Z.default], () => Z.default.locale),
        d = (0, s.bG)([eH.A], () => eH.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eY.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eY.FI,
                          children: (0, t.jsx)(eX, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  r({ action: "PRESS_APP_CONNECTION" }), i();
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${l}-${e.application.id}`,
                  ),
              ),
          });
}
var eZ = n(403581),
    eJ = n(240248),
    eQ = n(308244),
    e0 = n(83013),
    e1 = n(81400),
    e2 = n(84540),
    e3 = n(290386),
    e5 = n(621466),
    e7 = n(231088),
    e8 = n(786826);
function e9(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function e6(e) {
    let {
            isEditing: l,
            committedValue: n,
            editedValue: i,
            setEditedValue: r,
            editButtonRef: a,
            handleStartEditing: s,
            wrapperRef: o,
            onBlur: d,
            onContainerKeyDown: u,
            inputRef: c,
            onInputKeyDown: g,
            preview: m,
            placeholder: f,
            editButtonAriaLabel: p,
            label: x,
            maxLength: h,
            rows: v,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        y =
            (null != h && (l ? i : n).length > h
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e7.ZL, {
        isEditing: l,
        preview: m,
        placeholder: f,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        variant: "multiline",
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: y,
        previewWarningMessage: j,
        input: (0, t.jsx)(e8.f, {
            editorRef: c,
            label: x,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            error: y,
            helperText: j,
            placeholder: f,
            rows: v,
            emojiPickerIntention: A,
        }),
    });
}
let e4 = [
    { value: "HAIKU", label: () => eK.intl.string(eK.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eK.intl.string(eK.t.CXkR1L) },
    { value: "TELL_US", label: () => eK.intl.string(eK.t.eutr4P) },
    { value: "FUN_FACT", label: () => eK.intl.string(eK.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eK.intl.string(eK.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eK.intl.string(eK.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eK.intl.string(eK.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eK.intl.string(eK.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eK.intl.string(eK.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eK.intl.string(eK.t.u7WCGI) },
];
var le = n(307731);
function ll(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, s.bG)([V.default], () => V.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = z.Ay.canUsePremiumProfileCustomization(c),
        p = (0, e3.U)({ location: "user_profile_modal_edit" }),
        {
            value: x,
            previewValue: h,
            onCommit: v,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, e2.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        A = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = (0, e7.Ww)(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = e9(l),
                                t = n?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, n.current),
                    [n],
                );
            i.useEffect(() => {
                if (!l) return;
                let e = n.current?.ownerDocument ?? document;
                function i(e) {
                    (0, e5.vq)(e.target) && !a(e.target) && t();
                }
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let i = e.relatedTarget;
                    !(0, e5.vq)(i) || a(i) || (null == e9(n.current) && t());
                },
                [l, a, t, n],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: x, onCommit: v }),
        b = !(0, eJ.uJ)(h),
        j = (0, s.bG)([ef.A], () => ef.A.getErrors(m)),
        I = (0, e1.EC)(m),
        y = j.bio?.[0],
        C = I?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e4.length)), e4[e];
        }, []),
        E = g ? eK.intl.string(eK.t.yPJ9xr) : N.label();
    return !g || f
        ? (0, t.jsx)(e6, {
              ...A,
              className: u,
              preview: b ? (0, t.jsx)(eQ.A, { userBio: h, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: eK.intl.string(eK.t.lO3n7a),
              label: eK.intl.string(eK.t["YWo+Zd"]),
              emojiPickerIntention: le.EmojiIntention.PROFILE,
              maxLength: p,
              error: y,
              warning: C,
          })
        : b
          ? (0, t.jsx)(eQ.A, { userBio: h, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var ln = n(430626);
function lt(e) {
    let { currentUser: l, displayProfile: n, canEditInPlace: i } = e,
        r = n?.bio,
        a = !(0, eJ.uJ)(r),
        s = n?.guildId != null,
        o = s && z.Ay.canUsePremiumProfileCustomization(l),
        d = o ? eK.intl.string(eK.t.jVai8N) : eK.intl.string(eK.t.ZzAR2Y),
        u = (0, z.TW)(l) ? eK.intl.string(eK.t["5AFxuK"]) : eK.intl.string(eK.t.N6ixy8),
        c = i && o ? { icon: eZ.t, tooltip: u } : void 0;
    return (i || a) && (!i || !s || a || o)
        ? (0, t.jsx)(e0.A, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, t.jsx)(ll, { displayProfile: n, className: ln.u })
                  : (0, t.jsx)(eQ.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var li = n(982168),
    lr = n(722868),
    la = n(822775),
    ls = n(982985),
    lo = n(133385),
    ld = n(34188),
    lu = n(839534),
    lc = n(993401);
function lg(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, lu.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(lc.q3, {
        action: "VISIT_SHOP",
        icon: ld.U,
        tooltipText: eK.intl.string(eK.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var lm = n(573355),
    lf = n(102951);
function lp(e) {
    let {
            user: l,
            currentUser: n,
            guildId: i,
            originGuildId: r,
            channelId: a,
            displayProfile: s,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, K.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, lr.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lf.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === J.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lg, {}),
                        (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(la.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lg, {}),
                        (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === J.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lo.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === J.eA$.FRIEND || o === J.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lm.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === J.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lm.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lm.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(ls.l, { userId: l.id, onClose: li.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lx = n(463156),
    lh = n(866665),
    lv = n(28863),
    lA = n(509434),
    lb = n(307301),
    lj = n(228366),
    lI = n(95561),
    ly = n(874490),
    lC = n(968309),
    lN = n(174459),
    lE = n(486020),
    lP = n(123917),
    lk = n(783419);
let lT = "User Profile Modal V2";
function lS(e) {
    let l = en.A.get(e);
    (0, lC.A)({ platformType: l.type, location: lT }),
        lN.default.track(J.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lT,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lO() {
    lj.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lS, stackingBehavior: "stack" });
}
function lR(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, $.An)(r[lk.pK.CREATED_AT], n),
        s = en.A.get((0, ly.ML)(l.type));
    return (0, t.jsx)(lL, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(lh.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eY.GW, children: l.name }),
                  })
                : (0, t.jsx)(lv.Anchor, {
                      href: e,
                      className: eY.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`
                              : `${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lI.zV)(J.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lP.h)({ href: e, trusted: s?.type !== J.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eY.vi,
                          children: [
                              (0, t.jsx)(lh.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eY.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lA.I, { size: "xs", color: "currentColor", className: eY.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === J.fg2.REDDIT
                ? (0, eU.xE)(r)
                : l.type === J.fg2.STEAM
                  ? (0, eU.dy)(r)
                  : l.type === J.fg2.BLUESKY || l.type === J.fg2.MASTODON || l.type === J.fg2.TWITTER
                    ? (0, eU.ED)(r)
                    : l.type === J.fg2.PAYPAL
                      ? (0, eU.gZ)(r)
                      : l.type === J.fg2.EBAY
                        ? (0, eU.ub)(r)
                        : l.type === J.fg2.TIKTOK
                          ? (0, eU.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function l_(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lE.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lL, {
        renderAccountName: function () {
            return (0, t.jsx)(lh.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eN.E, {
                    variant: "text-sm/normal",
                    className: eY.GW,
                    children: n.profile.username,
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
function lL(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eY.FI,
        children: [
            (0, t.jsx)(lh.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eY.k_,
                    children: (0, t.jsx)("img", {
                        alt: eK.intl.formatToPlainString(eK.t.rtm15P, { name: i }),
                        className: a()(eY.tV, o ? eY.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eY.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eN.E, {
                                    variant: "text-xs/normal",
                                    children: eK.intl.format(eK.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eY.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lD(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([Z.default], () => Z.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eY.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eY.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lR, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(l_, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eF.D, {
                    className: eY.qG,
                    onClick: lO,
                    children: [
                        (0, t.jsx)(lb.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eN.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eK.intl.string(eK.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lM = n(193885),
    lw = n(408278),
    lG = n(993165),
    lF = n(554146),
    lV = n(194261),
    lU = n(315629),
    lB = n(789645),
    lz = n(297264),
    lW = n(812993),
    lH = n(821609),
    lq = n(39623),
    lK = n(890377),
    lY = n(517461),
    lX = n(13875),
    l$ = n(131607),
    lZ = n(248778),
    lJ = n(465794),
    lQ = n(252732),
    l0 = n(945810);
let l1 = (0, l0.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l2 = (0, l0.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function l3(e) {
    let { location: l } = e;
    return l2.useConfig({ location: l });
}
var l5 = n(487233),
    l7 = n(120386),
    l8 = n(317097),
    l9 = n(602853),
    l6 = n(922016),
    l4 = n(508274),
    ne = n(654107),
    nl = n(930349);
function nn(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, ne.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ef.A, q.A], () => ({
            pendingAccentColor: ef.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: q.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l8.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e2.p)({ accentColor: e }), []);
    return (0, t.jsx)(l6.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l4.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nl.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eK.intl.string(eK.t["/X3fkf"]),
                accessibleValue: (0, l8.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l8.Hl)(c) } }),
            }),
    });
}
var nt = n(450373),
    ni = n(317139);
function nr(e, l) {
    let n = null === e,
        t = void 0 === e;
    return n || (t && null == l) ? eK.intl.string(eK.t["3Xph0/"]) : t ? eK.intl.string(eK.t.keN7ib) : e.description;
}
function na(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: ni.o, style: { backgroundColor: l } });
}
function ns(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: ni._ });
}
function no(e) {
    let { displayProfile: l, bannerChange: n, shouldAnimate: i } = e,
        r = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l8.LX)(r),
        { hex: s } = (0, nt.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(ns, { src: o }) : (0, t.jsx)(na, { backgroundColor: s });
}
function nd(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(nl.A, {
        ...i,
        accessibleLabel: eK.intl.string(eK.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(no, { displayProfile: l, bannerChange: n, shouldAnimate: e }),
    });
}
var nu = n(569059);
function nc(e) {
    let { userId: l, guildId: n, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, l) {
            let n = (0, Y.Ay)(e, l),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, X.cf)(
                    [ef.A, V.default, q.A],
                    () => ({
                        pendingBanner: ef.A.getPendingChanges(l ?? void 0).pendingBanner,
                        mainProfileBanner: V.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != l ? q.A.getGuildMemberProfile(e, l)?.banner : q.A.getUserProfile(e)?.banner,
                    }),
                    [l, e],
                ),
                a = null != l,
                s = a && (n?.isUsingGuildMemberBanner() ?? !1),
                o = null === t;
            return {
                displayProfile: n,
                pendingBanner: t,
                bannerChange: o && a && !s ? void 0 : t,
                accessibleValue: nr(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(l, n),
        f = (0, ec.Ac)(d, g)
            ? {
                  onClick: () => (0, lQ.rM)(null, g, (e) => (0, e2.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eK.intl.string(m ? eK.t.jHlJNS : eK.t.tT9n7D),
              }
            : void 0,
        p = (0, nu.P)({ guildId: n, returnRef: s });
    return (0, t.jsx)(nd, {
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
var ng = n(259065),
    nm = n(913563),
    nf = n(898985),
    np = n(922301),
    nx = n(660184),
    nh = n(955298),
    nv = n(523312);
let nA = "heading-xl/semibold";
function nb(e) {
    if (null == e) return eK.intl.string(eK.t["3Xph0/"]);
    let l = eK.intl.string((0, nm.A)(e.fontId)),
        n = eK.intl.string(nf.J[e.effectId] ?? nh.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eK.intl.formatToPlainString(eK.t.A2XnI4, { fontName: l, effectName: n, colors: t });
}
function nj(e) {
    let { displayName: l, displayNameStyles: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nv.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nA,
                      children: (0, t.jsx)(nx.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? np.G.ANIMATED : np.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nA, className: nv.W, color: "text-muted", children: l }),
    });
}
function nI(e) {
    let { displayName: l, displayNameStyles: n, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(nl.A, {
        ...r,
        accessibleLabel: eK.intl.string(eK.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(nj, { displayNameStyles: n, displayName: l, shouldAnimate: i || e }),
    });
}
function ny(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([em.Ay], () => (null != n ? (em.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, ec.B0)(l, n ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        y = (0, ec.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: n ?? void 0 }),
        C = (0, ec.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? l.username,
        N = A ? null != h : null != v,
        E =
            null != y && N
                ? {
                      onClick: () => (0, e2.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(j ? eK.t.en3ogK : eK.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            o?.(), (0, ng.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nI, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: nb(y),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: C,
        displayNameStyles: y,
        disabled: r,
    });
}
var nC = n(450232),
    nN = n(89851);
function nE(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nN.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nN.Pf,
                children: [
                    (0, t.jsx)(lz.D, {
                        className: nN.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r && (0, t.jsx)(nC.A, { className: nN.IX, size: "xs", color: "strong", disabled: i }),
                    null != a && (0, t.jsx)("span", { className: nN.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nP(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nN.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nk = n(374654),
    nT = n(366010),
    nS = n(736653),
    nO = n(674658),
    nR = n(617061),
    n_ = n(203632),
    nL = n(536572);
let nD = new Set(),
    nM = 0;
var nw = n(993408),
    nG = n(841702),
    nF = n(515718),
    nV = n(195292);
function nU(e) {
    "" !== e.thumbnailPreviewSrc && (0, nF.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nB = n(599752),
    nz = n(249360);
let nW =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nH =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nq(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nS.Ay)(),
        u = (0, nT.M)(d) ? nW : nH,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nG.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nw.wo)(r, t), [r, t]),
                s = (0, nV.A)({ enabled: l, isInteracting: n, items: a, preload: nU });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nM += 1), nD.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nB.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nB.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nB.yY, { [nz.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n_.HL.FromStart,
                            isHovering: n,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function nK(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        c = (0, ec.N2)({ user: l }),
        g = (0, ec.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, ec.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, ec.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nO.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, e2.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(x ? eK.t["SQy/Po"] : eK.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nR.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(nl.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eK.intl.string(eK.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eK.intl.string(eK.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eK.intl.string(t ? eK.t["1M4m8w"] : eK.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, nL.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nq, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nY = n(515727),
    nX = n(746002);
function n$(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nX.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nX.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nF.NN)(n).catch(() => {});
        });
}
var nZ = n(715196);
function nJ(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nQ(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nS.Ay)(),
        u = (0, nT.M)(d) ? nW : nH,
        c = (0, E.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nG.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nw.MG)(r, t), [r, t]);
            return (0, nV.A)({ enabled: l, isInteracting: n, items: a, preload: n$ });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, T.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nZ.hm, x, { [nz.O]: m }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: f, filterLayer: nJ }),
                }),
            (0, t.jsx)("div", {
                className: a()(nZ.ti, { [nZ.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nZ.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n0(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        u = (0, ec.Xf)({ user: l }),
        c = (0, ec.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, ec.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, ec.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, nO.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, e2.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(p ? eK.t.j6hZyM : eK.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nY.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(nl.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eK.intl.string(eK.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eK.intl.string(eK.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eK.intl.string(t ? eK.t.yFeGB5 : eK.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nL.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nQ, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var n1 = n(684732),
    n2 = n(498596),
    n3 = n(871524);
function n5(e) {
    let { primaryColor: l, secondaryColor: n, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, l8.Hl)(l)}, ${(0, l8.Hl)(n)})`;
    return (0, t.jsx)("div", { className: n3.D7, style: { background: r }, children: i });
}
function n7(e) {
    let { color: l } = e,
        n = (0, l8.Hl)(l),
        i = (0, l8.bJ)(l, 0xffffff) < n2.Tr.NonText;
    return (0, t.jsx)("div", {
        className: n3.OS,
        children: (0, t.jsx)("div", { className: a()(n3.Hy, { [n3.rY]: i }), style: { backgroundColor: n } }),
    });
}
function n8(e) {
    let { color: l, disabled: n, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eF.D, {
        ...s,
        innerRef: a ?? o,
        className: n3.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, t.jsx)(n7, { color: l }),
    });
}
function n9(e) {
    let {
        color: l,
        ariaLabel: n,
        suggestedColors: i,
        disabled: r,
        isOpen: a,
        onRequestOpen: s,
        onRequestClose: o,
        onSelect: d,
        buttonRef: u,
    } = e;
    return (0, t.jsx)(l6.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(l4.VN, { ...e, value: l, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(n8, { color: l, onClick: i, disabled: r, buttonRef: u, "aria-label": n, ...a });
        },
    });
}
function n6(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
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
        x = (0, l8.Hl)(l),
        h = (0, l8.Hl)(n),
        v = eK.intl.formatToPlainString(eK.t.FquTfm, { colorLabel: x }),
        A = eK.intl.formatToPlainString(eK.t.xOnm4z, { colorLabel: h });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? f : p;
            e.current?.focus(), m(c);
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      d.onClick(), f.current?.focus();
                  },
              }
            : void 0;
    return (0, t.jsx)(nl.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(n5, {
            primaryColor: l,
            secondaryColor: n,
            children: [
                (0, t.jsx)(n9, {
                    color: l,
                    ariaLabel: v,
                    suggestedColors: s,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => m("theme-primary"),
                    onRequestClose: () => m(null),
                    buttonRef: f,
                }),
                (0, t.jsx)(n9, {
                    color: n,
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
function n4(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, Y.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ef.A, q.A], () => {
            let e = ef.A.getPendingChanges(n ?? void 0),
                t = q.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (q.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, eg.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, Q.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, ne.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e2.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, n1.l)(d, o)
                ? {
                      onClick: () => (0, e2.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eK.intl.string(eK.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(n6, {
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
var te = n(629985);
function tl(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(te.k, { [te.V]: n }), children: l }) });
}
var tn = n(221877),
    tt = n(689175),
    ti = n(424290);
function tr(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(tn.animated.div, { className: ti.iK, style: e, children: l }) : null));
}
function ta(e) {
    let { children: l, floatingFooter: n } = e,
        r = i.useRef(null),
        s = null != n,
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
                let { scrollTop: l } = e.currentTarget;
                !o && l >= 86 ? d(!0) : o && l <= 43 && d(!1);
            },
            [u, o],
        ),
        m = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: ti.u6,
        children: [
            (0, t.jsx)(tt.zC, {
                ref: r,
                className: a()(ti.XG, { [ti.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: ti.Qs, children: l }),
            }),
            s && (0, t.jsx)(tr, { isDismissed: o, children: n }),
        ],
    });
}
var ts = n(508770),
    to = n(732280),
    td = n(811611),
    tu = n(976860),
    tc = n(975732);
function tg() {
    return i.useCallback(() => {
        (0, tu.pX)(J.BVt.NITRO_HOME), (0, tc.closeUserProfileModal)();
    }, []);
}
var tm = n(570002),
    tf = n(202541),
    tp = n(155053);
function tx() {
    let e = (0, to.V)();
    return e?.subscriptionTrial?.skuId === tf.pe.TIER_2 ? e : null;
}
function th() {
    let e = (0, tm.A)(eK.intl.string(eK.t.pj0XBN));
    return (0, t.jsx)(lJ.A, { subscriptionTier: tf.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tv(e) {
    let { trialOffer: l, onSubscribeSuccess: n } = e,
        i = tg(),
        r = (0, z.FY)({
            intervalType: l.subscriptionTrial?.interval,
            intervalCount: l.subscriptionTrial?.intervalCount,
        }),
        a = (0, td.ux)(l.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tp.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tp.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eK.intl.string(eK.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(ts.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eK.intl.format(eK.t["fF+cgd"], { onClick: i }),
            }),
            (0, t.jsx)(lJ.A, {
                subscriptionTier: tf.pe.TIER_2,
                buttonTextOverride: r,
                onSubscribeModalClose: (e) => {
                    e && n?.();
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != a &&
                (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-muted", className: tp.u8, children: a }),
        ],
    });
}
function tA() {
    let e = tx();
    return null == e ? (0, t.jsx)(th, {}) : (0, t.jsx)(tv, { trialOffer: e });
}
var tb = n(55619),
    tj = n(848717);
function tI() {
    return (0, t.jsxs)("div", {
        className: tj.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eK.intl.string(eK.t.JFY17v),
            }),
            (0, t.jsx)(lH.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eK.intl.string(eK.t.R9GHya),
                onClick: function () {
                    return tb.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var ty = n(342866),
    tC = n(968475);
function tN(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ef.A], () => ({
            pendingAvatar: ef.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ef.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(ty.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, ty.$)(a, l.avatar),
        imageInteractingClassName: null == r ? tC.$T : void 0,
    });
}
function tE(e) {
    let { userId: l, ...n } = e,
        i = (0, Y.Ay)(l),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [ef.A, q.A],
            () => ({
                pendingBanner: ef.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ef.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: q.A.getUserProfile(l)?.banner,
            }),
            [l],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(nd, {
        ...n,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: nr(d, o),
    });
}
function tP(e) {
    let { user: l, ...n } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([ef.A], () => ({
            pendingDisplayNameStyles: ef.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ef.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ef.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([V.default], () => ({ globalName: V.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, ec.lw)({ pendingValue: a, userValue: o }) ?? l.username;
    return (0, t.jsx)(nI, {
        ...n,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: nb(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tk = n(207803);
function tT(e) {
    let l = (0, Y.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([ef.A], () => ({
            tryItOutThemeColors: ef.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ef.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ef.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, eg.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, Q.A)({
            user: e,
            displayProfile: l,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function tS(e) {
    let { user: l, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tT(l),
        d = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : l.getAvatarURL(void 0, 80),
        c = (0, ne.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tk.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(n6, {
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
              initialOpenPopout: n,
          });
}
function tO(e) {
    let { user: l, onClickPrimary: n, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tT(l);
    if (null == r || null == a) return null;
    let s = eK.intl.formatToPlainString(eK.t.FquTfm, { colorLabel: (0, l8.Hl)(r) }),
        o = eK.intl.formatToPlainString(eK.t.xOnm4z, { colorLabel: (0, l8.Hl)(a) });
    return (0, t.jsx)(nl.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(n5, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(n8, { color: r, onClick: n, "aria-label": s }),
                (0, t.jsx)(n8, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tR = n(847081);
function t_(e) {
    let { user: l, mode: n } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, lG.pA)(),
        c = (function (e) {
            let { analyticsLocations: l } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, ng.L)({ analyticsLocations: l, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [l, e]);
        })(r),
        g = (0, nu._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, nu.P)({ isPremiumTryItOut: !0, returnRef: s }),
        f = "edit" === n;
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
            className: tR.T,
            children: [
                (0, t.jsx)(nE, {
                    heading: eK.intl.string(eK.t.NEzEws),
                    children: (0, t.jsx)(tP, {
                        user: l,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nE, {
                    heading: eK.intl.string(eK.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(tS, {
                              user: l,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tO, {
                              user: l,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(nE, {
                    heading: eK.intl.string(eK.t.Vgdusv),
                    children: (0, t.jsx)(tE, {
                        userId: l.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nE, {
                    heading: eK.intl.string(eK.t.Dt3ZUr),
                    children: (0, t.jsx)(tN, {
                        user: l,
                        buttonRef: a,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var tL = n(847374),
    tD = n(111159),
    tM = n(548118),
    tw = n(711014),
    tG = n(540637),
    tF = n(801461),
    tV = n(44482),
    tU = n(844222),
    tB = n(561392),
    tz = n(499957),
    tW = n(15626),
    tH = n(470791);
function tq(e) {
    let {
            options: l,
            value: n,
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
            let { reducedMotion: e } = i.useContext(tU.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tB.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tz.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: l,
                setIsOpen: n,
                refs: t,
                floatingStyles: r,
                getReferenceProps: a,
                getFloatingProps: s,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: y } = v,
        C = i.useContext(tW._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, tF.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        D = i.useMemo(() => l.filter((e) => (0, tF.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        w = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
            h(!1), k.current?.focus();
        }, [h]),
        F = i.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = l[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, S, l, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tG.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = U !== z.current;
        (z.current = U), null != U && e && (O(U), x || ((_.current = !0), h(!0)));
    }, [U, x, h]);
    let W = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || h(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != S) {
                                let e = l[S];
                                if (null != e && !0 !== e.disabled) {
                                    V([e]);
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
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        O(0), x || ((_.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        O(n - 1), x || ((_.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (L.current = !0), h(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, G, r, h, B],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === D[D.length - 1]?.id),
            0,
        ),
        q = i.useRef(!1);
    i.useEffect(() => {
        c || !x || q.current
            ? x || ((q.current = !1), O(null), (_.current = !1))
            : ((q.current = !0), _.current || O(l.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let K = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": R,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: M,
        onMouseDown: w,
        onKeyDown: W,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (T.current = e), v.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: K }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: y,
                    className: a()(tH.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tG.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: D,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tV.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tK = n(216384);
let tY = "MAIN_PROFILE";
function tX(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tM.Ay, { className: tK.$f, guild: l, size: tM.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function t$(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tK.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tK.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tK.qL,
                children: [
                    (0, t.jsx)(eN.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eN.E, {
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
function tZ(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eF.D, {
        innerRef: r,
        className: a()(tK.L5, { [tK.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tK.v9,
                children: n,
            }),
            (0, t.jsx)(tL.a, {
                className: tK.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tJ(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tw.Ay], () => tw.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([eH.A], () => {
            let e = eH.A.getGuildId();
            return null == e || ef._.has(e) ? null : e;
        }),
        g = (0, s.cf)([em.Ay, tw.Ay], () => {
            let e = {};
            for (let l of tw.Ay.getFlattenedGuildIds()) {
                let n = em.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tY,
                    label: eK.intl.string(eK.t["2p07FR"]),
                    value: tY,
                    leading: (0, t.jsx)(tD.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
                },
                l = n ?? c,
                i = d
                    .map((e) => {
                        if (e === l) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : {
                                  id: n.id,
                                  label: n.name,
                                  value: n.id,
                                  leading: (0, t.jsx)(tX, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(er.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(tX, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tY,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let n = e === tY ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tq, {
        className: tK.kL,
        label: eK.intl.string(eK.t.rki38K),
        listboxClassName: tK.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(t$, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tZ, { leading: p.value === tY ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tQ = n(462887),
    t0 = n(765178),
    t1 = n(461797),
    t2 = n(469054),
    t3 = n(601298);
function t5() {
    let { preset: e, setPreset: l } = (0, lG.RQ)(),
        { clientThemeAdaptedColorsEnabled: n } = l3({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, nS.Ay)(),
        r = (0, tQ.q)(t),
        a = i.useCallback(
            (e) => {
                let l = (0, t1.Wt)(e);
                (0, tk.w5)({
                    banner: (0, t3.X)({
                        assetOrigin: t2.E.NEW_ASSET,
                        imageUri: l.getBannerSrc(!1),
                        staticImageUri: l.getBannerSrc(!0),
                        description: l.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: n ? (r ? l.themeColors.light : l.themeColors.dark) : l.themeColorsLegacy,
                    displayNameStyles: l.displayNameStyles,
                });
            },
            [n, r],
        );
    i.useEffect(() => {
        ef.A.hasTryItOutChanges() || a(e);
    }, [a, e]);
    let s = i.useCallback(() => {
        let n = (0, t1.B$)(e),
            t = (0, t1.Wt)(n);
        lN.default.track(J.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
            l(n),
            a(n),
            t0.O.announce(eK.intl.formatToPlainString(eK.t.M2Hj9s, { presetName: t.getName() }));
    }, [e, l, a]);
    return { preset: e, onShuffle: s };
}
var t7 = n(23722),
    t8 = n(49999),
    t9 = n(288490);
let t6 = "profile-editing-nameplate-error",
    t4 = "profile-editing-avatar-error",
    ie = "profile-editing-avatar-decoration-error",
    il = "profile-editing-banner-error",
    it = "profile-editing-display-name-style-error";
function ii(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(t9.D0, l),
        children: (0, t.jsx)("div", { className: t9.ZN, children: (0, t.jsx)(lV.LockIcon, { size: "xs" }) }),
    });
}
function ir() {
    let e = (0, tm.A)(eK.intl.string(eK.t.pj0XBN)),
        l = tg();
    return (0, t.jsxs)(lU.h, {
        color: "nitro-pink",
        className: t9.Lu,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eK.intl.format(eK.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(lJ.A, { subscriptionTier: tf.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function ia() {
    let [e, l] = (0, lY.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: t9.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eK.intl.string(eK.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eF.D, {
                      "aria-label": eK.intl.string(eK.t.rSe9ra),
                      className: t9.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lB.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function is() {
    let e = tg(),
        l = (0, tm.A)(eK.intl.string(eK.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: t9.eW,
        children: [
            (0, t.jsxs)("div", {
                className: t9.tm,
                children: [
                    (0, t.jsx)(lz.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eK.intl.string(eK.t.bO0TOe),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eK.intl.format(eK.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lJ.A, { subscriptionTier: tf.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(ii, { className: t9.nd }),
        ],
    });
}
function io() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: t9.BJ,
        "aria-hidden": !0,
        children: eK.intl.format(eK.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(eZ.t, { size: "xxs", color: "currentColor", className: t9.qp }),
        }),
    });
}
function id(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nk.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t6 : void 0 }),
            (0, t.jsx)(nP, { id: t6, message: r }),
        ],
    });
}
function iu(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l5.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t4 : void 0 }),
            (0, t.jsx)(l7.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? ie : void 0 }),
            (0, t.jsx)(nP, { id: t4, message: (0, lQ.d3)(r) }),
            (0, t.jsx)(nP, { id: ie, message: a }),
        ],
    });
}
function ic(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lZ.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, l$.kn)(a && !i ? [lF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lW.Lp, { text: eK.intl.string(eK.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(ny, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? it : void 0,
                onOpen: d ? () => o(t8.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nP, { id: it, message: r }),
        ],
    });
}
function ig(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(eK.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n4, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(nc, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? il : void 0 }),
            (0, t.jsx)(nP, { id: il, message: (0, lQ.d3)(a) }),
        ],
    });
}
function im(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nE, {
        heading: eK.intl.string(eK.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(nn, { user: l, disabled: n }),
    });
}
function ip(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lX.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nE, {
        heading: eK.intl.string(r ? eK.t["Vfbar/"] : eK.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nK, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n0, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let ix = "premium-try-it-out-description";
function ih(e) {
    let { user: l } = e,
        n = tg(),
        { navigate: i } = (0, lG.pA)();
    return (
        t5(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": ix,
            className: t9.DX,
            children: [
                (0, t.jsx)(ii, { className: t9.x$ }),
                (0, t.jsxs)("div", {
                    className: t9.sb,
                    children: [
                        (0, t.jsx)(eN.E, {
                            id: ix,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eK.intl.format(eK.t.TmfgI2, { onClick: n }),
                        }),
                        (0, t.jsx)(lH.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lq.EyeIcon,
                            text: eK.intl.string(eK.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(t_, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function iv(e) {
    let {
            user: l,
            panelId: n,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, s.bG)([F.A], () => F.A.hidePersonalInformation),
        { enabled: m } = l3({ location: "DefaultEditingPanelView" }),
        f = (0, t7.A)(c),
        p = null != i,
        x = z.Ay.canUsePremiumProfileCustomization(l),
        h = p && !x,
        v = !x && !p,
        A = v && m,
        b = p && !x && !g,
        j = a || o,
        I = (0, s.bG)([ef.A], () => ef.A.getErrors(i)),
        y = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        C = I.avatar?.[0],
        N = I.avatar_decoration_sku_id?.[0],
        E = I.banner?.[0],
        P = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0],
        k = l1.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(ic, { user: l, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(tl, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: t9.wx,
                children: [
                    (0, t.jsx)(lh.m, {
                        text: eK.intl.string(eK.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eF.D, {
                            innerRef: d,
                            className: t9.cS,
                            "aria-label": eK.intl.string(eK.t["l/A351"]),
                            onClick: u,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lK.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tJ, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tI, {})
                : (0, t.jsx)(ta, {
                      floatingFooter: v && !A ? (0, t.jsx)(ir, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(ia, {}) : (0, t.jsx)(is, {})),
                              x && (0, t.jsx)(io, {}),
                              (0, t.jsx)(id, { user: l, guildId: i, disabled: j || h, errorMessage: y }),
                              (0, t.jsx)(iu, {
                                  user: l,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(ig, {
                                        user: l,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(im, { user: l, disabled: j || h }),
                              (0, t.jsx)(ip, { user: l, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(ih, { user: l }), (0, t.jsx)(tA, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var iA = n(110654);
function ib(e) {
    return null;
}
function ij(e) {
    let { activeSlide: l, direction: n, onTransitionComplete: r, children: s } = e,
        o = new Map(s.map((e) => [e.props.id, e]));
    if (!o.has(l)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(l),
        [g, m] = i.useState(!1),
        f = "forwards" === n ? 1 : -1,
        p = (0, u.p)(
            l,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, n) => {
                    let { item: t } = n;
                    e.finished && t === l && (m(!1), t !== d && (c(l), r()));
                },
            },
            "respect-motion-settings",
        ),
        x = g || l !== d;
    return (0, t.jsx)("div", {
        className: a()(iA.kL, x && iA.ez),
        children: (0, t.jsx)("div", {
            className: iA.u4,
            children: p((e, l, n) => {
                let { key: i } = n,
                    r = o.get(l);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          tn.animated.div,
                          {
                              className: iA.M6,
                              style: x
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: x || l !== d,
                              "aria-hidden": x || l !== d,
                              children: r.props.children,
                          },
                          i,
                      );
            }),
        }),
    });
}
var iI = n(477155),
    iy = n(206697),
    iC = n(926321),
    iN = n(663417),
    iE = n(145934);
let iP = "shuffle-options-a11y-description";
function ik() {
    let { preset: e, onShuffle: l } = t5(),
        { showPresetName: n } = l3({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, t1.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: iE.kL,
              children: [
                  (0, t.jsx)(lh.m, {
                      text: eK.intl.string(eK.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(lw.K, {
                          icon: iN.RefreshIcon,
                          "aria-label": eK.intl.string(eK.t.VzqqFC),
                          "aria-describedby": iP,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: iP, children: eK.intl.string(eK.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iE.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iE.L_, src: a }),
                          (0, t.jsxs)(eN.E, {
                              className: iE._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eK.intl.formatToPlainString(eK.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iE.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lH.$, {
                      icon: iC.DiceIcon,
                      text: eK.intl.string(eK.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": iP,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: iP, children: eK.intl.string(eK.t.bBRdiB) }),
              ],
          });
}
var iT = n(280406);
function iS(e) {
    let { user: l, onBack: n, backButtonRef: i } = e,
        r = tx();
    return (0, t.jsxs)(tl, {
        children: [
            (0, t.jsxs)("div", {
                className: iT.wx,
                children: [
                    (0, t.jsx)(eF.D, {
                        innerRef: i,
                        "aria-label": eK.intl.string(eK.t["4IYwrw"]),
                        onClick: n,
                        className: iT.Gv,
                        children: (0, t.jsx)(iI.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lz.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iT.R_,
                        children: eK.intl.string(eK.t.PxUx8e),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iT.Ij,
                        children: eK.intl.string(eK.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iT.ZZ, children: (0, t.jsx)(ik, {}) }),
                ],
            }),
            (0, t.jsx)(ta, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(t_, { user: l, mode: "edit" }),
                        null != r && (0, t.jsx)(tv, { trialOffer: r, onSubscribeSuccess: iy.T }),
                    ],
                }),
            }),
        ],
    });
}
var iO = n(199016);
let iR = "user-profile-editing-panel",
    i_ = "profile-modal-editing-panel-heading";
function iL(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(lh.m, {
        text: eK.intl.string(eK.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eF.D, {
            innerRef: i,
            "aria-label": eK.intl.string(eK.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iR,
            className: a()(iO.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lM.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iD(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lh.m, {
            text: eK.intl.string(eK.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lw.K, {
                buttonRef: i,
                "aria-label": eK.intl.string(eK.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iR,
                icon: lM.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iM(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, s.bG)([V.default], () => V.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, lG.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: iR,
              "aria-labelledby": i_,
              className: a()(iO.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iO.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: i_, children: eK.intl.string(eK.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(ij, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(ib, {
                                  id: "default",
                                  children: (0, t.jsx)(iv, {
                                      panelId: iR,
                                      user: p,
                                      selectedGuildId: l,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, t.jsx)(ib, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(iS, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iw = n(271383),
    iG = n(347805),
    iF = n(629403),
    iV = n(612630),
    iU = n(372638),
    iB = n(61426);
function iz(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([F.A], () => F.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iV.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await iF.A.updateNote(l, e);
                    } catch {
                        f(eK.intl.string(eK.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == p,
        v = (0, e7.Ww)({ value: p ?? "", onCommit: x, disabled: h }),
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: iB.t, children: p })
            : null;
    return (0, t.jsx)(iU.f, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eK.intl.string(eK.t.PbMNh2),
        label: eK.intl.string(eK.t.PbMNh2),
        placeholder: h ? eK.intl.string(eK.t["WLKx/9"]) : eK.intl.string(eK.t.VBhOe2),
        maxLength: J.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var iW = n(518477),
    iH = n(793222);
function iq(e) {
    let { userId: l } = e,
        n = (0, eA.g)(),
        { trackUserProfileAction: i } = (0, W.NJ)(),
        r = (0, K.X)("UserProfileModalV2NotesSection"),
        a = r ? iz : iG.A;
    return (0, t.jsx)(e0.A, {
        heading: eK.intl.string(eK.t["mQKv+v"]),
        scrollTargetId: iW.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iH.N : iH.w,
            autoFocus: n === iW.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iK = n(123292),
    iY = n(667242),
    iX = n(655214);
function i$(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iY.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iX.oR, iY.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iY.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iY.hP,
                            children: (0, t.jsx)(iK.Q, {
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
var iZ = n(346055),
    iJ = n(289873),
    iQ = n(615019);
function i0(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && t0.O.announce(eK.intl.string(eK.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iZ.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iQ.f, l && iQ.z),
                    children: n && (0, t.jsx)(iJ.y, { type: iJ.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var i1 = n(568602),
    i2 = n(625494),
    i3 = n(61881);
function i5(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i3.A, ef.A], () => i3.A.hasUnsavedChanges() || ef.A.hasUnsavedChanges());
    i.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = i.useCallback(() => {
        null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1);
    }, []);
    return (
        i.useEffect(() => {
            function e() {
                o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        r(!1), (d.current = null);
                    }, 300));
            }
            return (
                i2._.subscribe(J.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    i2._.unsubscribe(J.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(i1.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var i7 = n(94160),
    i8 = n(933832),
    i9 = n(972213),
    i6 = n(97483),
    i4 = n(775602),
    re = n(384377);
let rl = {
        [iW.jM.WIDGET_ADDED]: {
            message: eK.intl.string(eK.t.fFP1Uy),
            icon: (0, t.jsx)(i8.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iW.jM.WIDGET_REMOVED]: {
            message: eK.intl.string(eK.t.zzsK7h),
            icon: (0, t.jsx)(i8.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iW.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eK.intl.string(eK.t["84MExs"]),
            icon: (0, t.jsx)(i9.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i6.Ck.FAILURE,
        },
        [iW.jM.SOMETHING_WENT_WRONG]: {
            message: eK.intl.string(eK.t.F8FvUy),
            icon: (0, t.jsx)(i9.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i6.Ck.FAILURE,
        },
    },
    rn = (e) => {
        let { className: l } = e,
            n = (0, re.fu)(),
            r = (0, s.bG)([i4.Ay], () => i4.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(rl[n]), t0.O.announce(rl[n].message)) : o(!1);
        }, [n]);
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
            i.useEffect(() => () => (0, re.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, re.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(tn.animated.div, { className: l, style: e, children: (0, t.jsx)(i$, { ...d }) }),
                ),
            })
        );
    };
var rt = n(297413),
    ri = n(465829),
    rr = n(826673),
    ra = n(576705),
    rs = n(761431),
    ro = n(997394);
function rd(e) {
    return null == e || "" === e ? void 0 : e;
}
function ru(e) {
    let l,
        n,
        r,
        a,
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
        j = z.Ay.canUsePremiumProfileCustomization(p),
        y = (0, lZ.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([ra.A, w.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = w.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: ra.A.can(J.xBc.CHANGE_NICKNAME, e) || ra.A.can(J.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((n = null != (l = h?.guildId ?? null)),
        (r = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([em.Ay], () => (null != l ? (em.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = rd(c) ?? rd(r) ?? p.username),
        (f = rd(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e2.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e2.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        T = (0, rs.TX)({ value: E, onCommit: k, disabled: !C }),
        { isEditing: S, handleCommit: O } = T,
        R = (0, s.bG)([ef.A], () => ef.A.getErrors(b ?? null)),
        _ = (0, e1.EC)(b ?? null),
        L = A ? R.nick?.[0] : R.global_name?.[0],
        D = _?.nick?.[0],
        M = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(b).pendingDisplayNameStyles),
        G = eK.intl.string(A ? eK.t.mq6Cg9 : eK.t.XuZU7A),
        F = A ? eK.intl.string(eK.t.YcDKr8) : p.username,
        U = eK.intl.string(A ? eK.t["g7OSZ/"] : eK.t.kyfzzc),
        B = i.useRef(null),
        W = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && O(),
                    y &&
                        (0, rr.Dr)(lF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: t8.i.INDIRECT_ACTION,
                        }),
                    (0, ng.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: B });
            },
            [S, O, v, b, y],
        ),
        H = {
            icon: lM.V,
            tooltip: eK.intl.string(eK.t.lqKKI2),
            "aria-label": eK.intl.string(eK.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        q =
            A && !C && N
                ? (0, t.jsx)(lh.m, {
                      text: eK.intl.string(eK.t.gzjxQi),
                      children: (0, t.jsx)(eF.D, {
                          tag: "span",
                          className: ro.C,
                          children: (0, t.jsx)(lV.LockIcon, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eK.intl.string(eK.t.VPu695),
                          }),
                      }),
                  })
                : null,
        K =
            null != P
                ? (0, t.jsx)(ri.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: M,
                      className: ro.d,
                      displayNameTrailing: q,
                  })
                : null;
    return (0, t.jsx)(rs.yV, {
        ...T,
        preview: K,
        placeholder: F,
        editButtonAriaLabel: U,
        label: G,
        maxLength: J.zzC,
        trailing: C && j ? H : void 0,
        error: L,
        warning: D,
        disabled: !C,
    });
}
var rc = n(628072);
function rg(e) {
    let l,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((l = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, e2.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = (0, rs.TX)({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eK.intl.string(x ? eK.t.AXiE0i : eK.t["76Aqhl"]);
    return (0, t.jsx)(rs.yV, {
        ...f,
        size: "compact",
        className: a()(rc.k, p && rc.J),
        preview: h ? (0, t.jsx)(ri.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eK.intl.string(eK.t.h6VAO7),
        label: eK.intl.string(eK.t["rniRE+"]),
        placeholder: v,
        maxLength: J.VE5,
    });
}
var rm = n(145497),
    rf = n(685073),
    rp = n(318785),
    rx = n(534400),
    rh = n(436921),
    rv = n(743981),
    rA = n(295930),
    rb = n(594615);
let rj = "no-server-tag";
function rI(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = (0, rh.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == n;
    return (0, t.jsx)(eF.D, {
        innerRef: l,
        className: a()(o ? rA.qJ : rA.L5, { [rA.wK]: d }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: rA.W3,
            tag: "span",
            children: [
                d
                    ? eK.intl.string(eK.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rx.Z9,
                                  {
                                      src: (0, rf.gC)(n, r, rv.Sl.SIZE_14),
                                      size: rv.Sl.SIZE_14,
                                      className: rA.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rf.gC)(n, r, rv.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tL.a, { size: "xs", color: "currentColor", className: rA.u4 }),
            ],
        }),
    });
}
function ry() {
    let e = (0, rp.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.cf)([V.default], () => {
            let e = V.default.getCurrentUser();
            return (0, rf.Zo)(e?.primaryGuild);
        }),
        r = n.guildId ?? null,
        a = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== a ? a : r,
        d = null != o ? (l.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (n.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? n.badge : void 0),
        m = i.useCallback(
            (e) =>
                e.id === rj
                    ? (0, t.jsx)("div", {
                          className: rb.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rA.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tV.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: rj, label: eK.intl.string(eK.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rm.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rx.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, e2.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(tq, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eK.intl.string(eK.t.Pdd1nd),
              listboxClassName: rA.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(rI, { buttonRef: l, guildId: o, guildTag: c, guildBadge: g, ...n });
              },
          });
}
var rC = n(956495);
function rN(e) {
    let { displayProfile: l, nickname: n, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(ri.Ay, {
        ...r,
        guildId: l?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: l?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rE(e) {
    let l = (0, s.bG)([ef.A], () => ef.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rN, { ...e, displayNameStylesOverride: l });
}
function rP(e) {
    let { user: l, displayProfile: n, trailing: i } = e,
        r = l.isProvisional
            ? null
            : (0, t.jsx)(rt.A, {
                  user: l,
                  forceUsername: !0,
                  className: rC.a1,
                  usernameClass: rC.eb,
                  discriminatorClass: rC.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(ru, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rC.AK, rC.j6),
                children: [r, (0, t.jsx)(ri.Ce, {}), (0, t.jsx)(rg, { displayProfile: n }), (0, t.jsx)(ry, {}), i],
            }),
        ],
    });
}
function rk(e) {
    let { editingMode: l, ...n } = e;
    switch (l) {
        case "read-only":
            return (0, t.jsx)(rN, { ...n });
        case "try-it-out":
            return (0, t.jsx)(rE, { ...n });
        case "edit":
            return (0, t.jsx)(rP, { ...n });
        default:
            return (0, er.xb)(l);
    }
}
n(321073);
var rT = n(97808),
    rS = n(980707),
    rO = n(477782),
    rR = n(22231),
    r_ = n(601255),
    rL = n(562819),
    rD = n(19575),
    rM = n(339984),
    rw = n(329801),
    rG = n(884362);
let rF = rD.Ay.getEnableHardwareAcceleration() ? rT.Js : rT.eu;
function rV(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rU(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rS.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.YAgq3W),
        children: (0, t.jsx)(rO.rX, { children: n }),
    });
}
function rB(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, ej.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([em.Ay], () => (null != n ? em.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : l.avatar,
                f = (0, ec.z5)(g, m),
                p = u && null != l.avatar,
                x = z.Ay.canUsePremiumProfileCustomization(l),
                h = x || null == n,
                v = x || null == n,
                A = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
                b = (0, ec.a4)({ user: l }),
                j = (0, ec.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, ec.CP)(n ?? void 0),
                C = void 0 !== y,
                N = null != (0, r_.A)(C ? y : j) && (C ? null != y : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        rV(() =>
                            (0, lQ.XD)({
                                uploadType: rM.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        rV(() =>
                            (0, rL.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    r(),
                        (0, lQ.rM)(null, m, (e) => (0, e2.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ec.WU)(p ? "reset" : "remove");
                }, [r, n, m, p]),
                S = i.useCallback(() => {
                    r(), (0, e2.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rO.Dr,
                                { id: "change-avatar", label: eK.intl.string(eK.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rO.Dr,
                                { id: "change-decoration", label: eK.intl.string(eK.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.twB3fz),
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
                                      rO.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, f, N, P, k, T, S]);
        })({ user: l, guildId: n, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, t.jsx)(ej.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rw.my, rw.vk, rG.kL, { [rG.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rF, { ...r, imageClassName: a()(rw.Lw, rG.HU) }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rU, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rG.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rR.PencilIcon,
                                  "aria-label": eK.intl.string(eK.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rz = n(514905);
function rW(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rS.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.FzU73A),
        children: (0, t.jsx)(rO.rX, { children: n }),
    });
}
function rH(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, ec.N2)({ user: l, guildId: n ?? void 0 }),
                c = (0, ec.Xf)({ user: l, guildId: n ?? void 0 }),
                g = (0, ec.Xf)({ user: l, guildId: void 0 }),
                m = (0, lX.sk)("UserProfileModalV2EditableBanner"),
                f = z.Ay.canUsePremiumProfileCustomization(l),
                p = null == n,
                x = p || f,
                h = m && (p || f),
                v = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(n ?? void 0)),
                y = (0, s.bG)([q.A], () =>
                    null != n ? q.A.getGuildMemberProfile(l.id, n)?.banner : q.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([V.default], () => V.default.getCurrentUser()?.banner != null),
                N = (0, s.bG)([q.A], () => q.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([q.A], () => q.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, ec.Ac)(A, y),
                T = v && C,
                S = v && N,
                O = v && P,
                R = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                L = (0, ec.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                D = (0, E.A)(L?.skuId, "UserProfileModalV2EditableBanner"),
                M = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: rM.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nR.W)({
                            analyticsLocations: d,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                F = i.useCallback(() => {
                    r(), (0, lQ.rM)(null, y, (e) => (0, e2.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, y]),
                U = i.useCallback(() => {
                    r(), (0, e2.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                B = i.useCallback(() => {
                    r(),
                        (0, nY.w)({
                            analyticsLocations: d,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, D, a]),
                W = i.useCallback(() => {
                    r(), (0, e2.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rO.Dr,
                                { id: "change-banner", label: eK.intl.string(eK.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rO.Dr,
                                { id: "change-effect", label: eK.intl.string(eK.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rO.Dr,
                                { id: "change-frame", label: eK.intl.string(eK.t["oTSa/q"]), action: B },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.tT9n7D),
                                          action: F,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    x &&
                        R &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        _ &&
                        e.push(
                            O
                                ? (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rO.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["8DfADq"]),
                                          action: W,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [T, f, x, h, S, O, k, R, _, M, G, B, F, U, W]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(ey.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rz.kL, { [rz.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ey.A, { ...e, className: rz.Pr }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rW, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rz.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rR.PencilIcon,
                                  "aria-label": eK.intl.string(eK.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rq = n(777480),
    rK = n(107563),
    rY = n(570287);
n(938796);
var rX = n(913453),
    r$ = n(667049),
    rZ = n(389667),
    rJ = n(837531),
    rQ = n(186272),
    r0 = n(447538);
let r1 = (e) => e * (2 - e),
    r2 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function r3(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function r5(e) {
    let { displayProfile: l, pendingBanner: n } = e;
    if ((0, ee.Nx)()) return null;
    let i = l?.getPreviewBanner(n, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: r0.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function r7(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nD.add(e), () => nD.delete(e)),
            () => nM,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function r8(e) {
    var l;
    let n,
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
            bannerOverride: C,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: P,
            fadeInProfileFrame: T,
            editingMode: S,
            isLoading: M = !1,
        } = e,
        w = o.id === d.id,
        V = "edit" === S,
        U = i.useRef(null),
        z = i.useRef(null);
    i.useEffect(() => {
        if (w) return () => y.A.setState({ isOpen: !1 });
    }, [w]);
    let { isHoveringOrFocusing: W } = (0, O.A)(U),
        [H, q] = i.useState(),
        K = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? q("compact-xs") : l <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, A.g)(U, K, [], { fireOnMount: !0 });
    let Y = null != H ? r2[H] : void 0,
        Q = i.useMemo(() => v ?? (0, R.A)(), [v]),
        { relationshipType: ee, originApplicationId: es } = (0, s.cf)([G.A], () => ({
            relationshipType: G.A.getRelationshipType(o.id),
            originApplicationId: G.A.getOriginApplicationId(o.id),
        })),
        eo =
            ((l = o.id),
            (n = (0, X.bG)([Z.default], () => Z.default.locale)),
            (r = (0, X.bG)([G.A], () => (G.A.getRelationshipType(l) === J.eA$.FRIEND ? G.A.getSince(l) : null), [l])),
            (0, $.An)(r, n)),
        ed = (0, s.bG)([F.A], () => F.A.hidePersonalInformation),
        eu = (0, L.q)({ userId: o.id }),
        ec = (0, _.fi)(o.id),
        { appIdentities: eg, connections: em } = (function (e) {
            let { filteredAppIdentities: l } = (0, ei.A)(e),
                n = (0, ea.A)(e),
                t = i.useMemo(() => new Set(l?.map((e) => e.application_id) ?? []), [l]),
                r = (0, et.A)([...t]).filter(er.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        l
                            .map((e) => ({ identity: e, application: r.find((l) => l.id === e.application_id) }))
                            .filter((e) => {
                                let { application: l } = e;
                                return null != l;
                            }),
                    [l, r],
                ),
                connections: i.useMemo(
                    () =>
                        n.filter((e) => {
                            let l = en.A.get(e.type);
                            return (
                                !l?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !t.has(l.migrationData.replacedBy)
                            );
                        }),
                    [n, t],
                ),
            };
        })(o.id),
        ef = (0, el.A)(o.id),
        eh = em.length > 0 || eg.length > 0,
        ev = ef.length > 0,
        eA = V ? rH : ey.A,
        eb = p?.guildId ?? u,
        eN = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: Y?.avatarSize ?? ex.T[ep.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eT = i.useCallback(() => {
            (0, ew.A)({ user: o, guildId: eb, alt: x });
        }, [x, eb, o]);
    return (0, t.jsxs)("main", {
        className: a()(r0.profile, null != H && r0[H]),
        ref: U,
        "aria-busy": M,
        children: [
            (0, t.jsxs)("div", {
                className: r0.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: r0.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eA, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ep.d.MODAL_V2,
                            specOverrides: Y,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    V
                        ? (0, t.jsx)(rB, { ...eN })
                        : (0, t.jsx)(ej.A, {
                              ...eN,
                              onOpenAvatar: "read-only" === S ? eT : void 0,
                              imageAnimatingClassName: "try-it-out" === S && null == I ? tC.$T : void 0,
                          }),
                    (0, t.jsx)(eD.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ep.d.MODAL_V2,
                        hasEntered: h,
                        prompt: w ? Q : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: r0.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rk, {
                                user: o,
                                displayProfile: p,
                                nickname: x,
                                trailing: (0, t.jsx)(eI.A, {
                                    displayProfile: p,
                                    themeType: ep.d.MODAL_V2,
                                    onClose: b,
                                    popoutAnchorRef: h ? z : void 0,
                                }),
                                onClose: b,
                                editingMode: S,
                            }),
                            (0, t.jsx)("div", { ref: z }),
                        ],
                    }),
                    ee === J.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: r0.profileOverlay,
                            children: (0, t.jsx)(ek.A, {
                                user: o,
                                applicationId: es,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: r0.profileBanner,
                            }),
                        }),
                    ec.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eL.A.Overlay,
                            {
                                className: r0.profileOverlay,
                                children: (0, t.jsx)(ek.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: r0.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: r0.profileOverlay,
                            children: (0, t.jsx)(e0.A, {
                                heading: eK.intl.string(eK.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: r0.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(e_.A, { user: o, className: r0.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: r0.profileOverlay,
                            children: (0, t.jsx)(eR.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: r0.profileButtons,
                        children: (0, t.jsx)(lp, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: ee,
                            onClose: b,
                        }),
                    }),
                    w && "try-it-out" !== S && (0, t.jsx)(eC.A, { isPremiumUser: (0, B.ki)(d) }),
                    !ed && (0, t.jsx)(lt, { currentUser: d, displayProfile: p, canEditInPlace: V }),
                    eu.length > 0 &&
                        (0, t.jsx)(e0.A, {
                            heading: eK.intl.string(eK.t["Uv/eTx"]),
                            children: (0, t.jsx)(eP.A, { applicationIds: eu }),
                        }),
                    (0, t.jsx)(e0.A, {
                        heading: eK.intl.string(eK.t.a6XYD9),
                        children: (0, t.jsx)(eS.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iW.In }),
                    }),
                    null != eo &&
                        (0, t.jsx)(e0.A, {
                            heading: eK.intl.string(eK.t.wlTO8v),
                            children: (0, t.jsx)(eE, { friendsSinceDate: eo }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eM.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: r0.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ed &&
                        (V || eh) &&
                        (0, t.jsx)(e0.A, {
                            heading: eK.intl.string(eK.t["3fe7U5"]),
                            scrollTargetId: iW.bk.CONNECTIONS,
                            children: (0, t.jsx)(lD, {
                                applicationIdentities: eg,
                                connections: em,
                                userId: o.id,
                                allowEditing: V,
                                className: r0.profileAppConnections,
                            }),
                        }),
                    !ed &&
                        ev &&
                        (0, t.jsx)(e0.A, {
                            heading: eK.intl.string(eK.t.PHjkRE),
                            scrollTargetId: iW.bk.APPS,
                            children: (0, t.jsx)(e$, {
                                applicationRoleConnections: ef,
                                onClose: b,
                                className: r0.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iq, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(r7, { displayProfile: p, profileEffectOverride: E, isHovering: W }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: r3, fadeIn: T }),
        ],
    });
}
function r9(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, forceShowPremium: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, Q.A)({ user: l, displayProfile: n, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, ed.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function r6(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: y,
            initialTabSection: C,
            initialScrollTarget: k,
            transitionState: O,
            customStatusPrompt: R,
            openedAt: _,
            onClose: L,
            sourceAnalyticsLocations: D = [],
            themeContainerClassName: B,
        } = e,
        X = l.id === n.id,
        $ = (0, t7.A)(L, X),
        {
            guildId: Z,
            pendingGuildId: J,
            isFetching: Q,
            handleSelectUserProfile: ee,
            handleRetry: el,
            hasError: en,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([q.A], () => q.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
                f = i.useCallback(() => {
                    u("retrying"), g((e) => e + 1);
                }, []),
                p = i.useCallback((e) => {
                    u("loading"), r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, eu.A)(l, void 0, {
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
                }, [t, l, c]),
                {
                    guildId: a,
                    pendingGuildId: t,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        et = i.useMemo(() => (null != Z ? { [Z]: [l.id] } : {}), [Z, l.id]);
    (0, b.Eq)(et, "UserProfileModalV2");
    let ei = (0, K.X)("UserProfileModalV2"),
        er = (0, lG.YW)(),
        ea = (0, s.bG)([F.A], () => F.A.hidePersonalInformation),
        ed = (0, es.A)(l.id) && ei,
        ex = (0, eo.W)(l.id),
        ej = en && !ex,
        eI = ed && !ea && !en && !er,
        ey = er ? "try-it-out" : eI ? "edit" : "read-only",
        {
            pendingThemeColors: eC,
            avatarDecorationOverride: eN,
            avatarOverride: eE,
            bannerOverride: eP,
            accentColorOverride: ek,
            profileEffectOverride: eS,
            profileFrameOverride: eR,
        } = (function (e) {
            let { userId: l, guildId: n, editingMode: t } = e;
            return (0, s.cf)([ef.A, V.default, em.Ay, q.A], () => {
                if ("read-only" === t) return ev;
                let e = V.default.getUser(l);
                if (null == e) return ev;
                let i = ef.A.getTryItOutChanges(),
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
                            : ef.A.getPendingChanges(n),
                    a = null != n ? em.Ay.getMember(n, l) : null,
                    s = q.A.getUserProfile(l),
                    o = null != n ? q.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: r.pendingThemeColors,
                    avatarDecorationOverride: (0, ec.us)({
                        userValue: e.avatarDecoration,
                        guildValue: a?.avatarDecoration,
                        pendingValue: r.pendingAvatarDecoration,
                        guildId: n,
                    }),
                    avatarOverride: (0, eg.V7)({ userId: l, image: r.pendingAvatar, size: eh }),
                    bannerOverride: r.pendingBanner,
                    accentColorOverride: r.pendingAccentColor,
                    profileEffectOverride: (0, ec.us)({
                        userValue: s?.profileEffect,
                        guildValue: o?.profileEffect,
                        pendingValue: r.pendingProfileEffect,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, ec.us)({
                        userValue: s?.profileFrame,
                        guildValue: o?.profileFrame,
                        pendingValue: r.pendingProfileFrame,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, guildId: Z, editingMode: ey }),
        {
            isExpanded: e_,
            isAnimating: eD,
            transition: eM,
            handleExpand: ew,
            handleCollapse: eG,
            refs: { expandIconButtonRef: eF, expandTabButtonRef: eV, collapseButtonRef: eU },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: r1 },
                    onRest: () => t(!1),
                }),
                a = (0, v.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), t(!0), l(!0);
                }, []),
                m = i.useCallback(() => {
                    (c.current = "expand"), t(!0), l(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) (c.current = null), d.current?.focus();
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = a ? o.current : s.current;
                            e?.focus();
                        }
                    }
                }, [e, n, a]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eB = ed && !e_,
        ez = ed && (!e_ || eD),
        { defaultWishlistId: eW } = (0, s.cf)([q.A], () => ({ defaultWishlistId: q.A.getFirstWishlistId(l.id) }));
    (0, M.fw)({ wishlistId: eW, userId: l.id });
    let eH = (0, eb.fC)(),
        eq = ej && (!ed || !Q),
        eY = ed && en,
        eX = J !== Z || eY || null != eH.interactionType,
        e$ = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rX.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([V.default], () => V.default.getCurrentUser())),
                    (n = (0, s.bG)([q.A], () => q.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, r$.A)(i.id),
                g = (0, rY.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = (0, rZ.A)(i.id),
                x = q.A.getFirstWishlistId(i.id),
                h = null != x,
                v = h ? q.A.getWishlistSettings(i.id, x) : null,
                A = (h ? rK.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && m.push({ text: eK.intl.string(eK.t.laViwx), section: iW.RP.WIDGETS }),
                m.push({ text: eK.intl.string(eK.t.chq59f), section: iW.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = G.A.isFriend(i.id),
                y = v?.visibility === rq.a.PUBLIC;
            return (
                (f || (!f && A && y && g && (!j || (j && I)))) &&
                    m.push({ text: eK.intl.string(eK.t["7lZ31J"]), section: iW.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, rJ.A)(a), section: iW.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, rQ.A)(d), section: iW.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eZ } = (0, I.Ay)([...D, j.A.USER_PROFILE_MODAL_V2]),
        eJ = (0, W.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: y,
            guildId: Z,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eQ = i.useCallback(() => {
            (0, H.Wn)({ analyticsLocations: eZ, ...eJ, action: iW.pt.SHOW_STYLES_PANEL }), ew();
        }, [eZ, eJ, ew]),
        e0 = i.useCallback(() => {
            (0, H.Wn)({ analyticsLocations: eZ, ...eJ, action: iW.pt.HIDE_STYLES_PANEL }), eG();
        }, [eZ, eJ, eG]),
        e1 = (0, Y.Ay)(l.id, Z),
        e2 = void 0 !== eR ? eR?.skuId : e1?.profileFrame?.skuId,
        e3 = (0, E.A)(e2, "UserProfileModalV2"),
        e5 = (0, N.A)(e2),
        { profileFrameStyle: e7, profileFrameClassName: e8 } = (0, T.A)(e3);
    (0, P.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: eZ });
    let e9 = (0, s.bG)([V.default], () => z.Ay.canUsePremiumProfileCustomization(V.default.getCurrentUser())),
        e6 = er || (X && null != e1 && e9),
        e4 = U.Ay.useName(e1?.guildId, c, l),
        le = (0, S.GV)(),
        ll = (0, s.bG)([w.A], () => (null != Z ? w.A.getGuild(Z) : null)),
        ln = X
            ? null != ll
                ? eK.intl.formatToPlainString(eK.t.M7OhOF, { guildName: ll.name })
                : eK.intl.string(eK.t.egQPgM)
            : eK.intl.format(eK.t.KRe1Fk, { name: e4 });
    return (0, t.jsx)(I.f5, {
        value: eZ,
        children: (0, t.jsx)(W.of, {
            value: eJ,
            openedAt: _,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, t.jsx)(eb.Hl, {
                value: eH,
                children: (0, t.jsx)(eA.N, {
                    value: k,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tC.zr, { [tC.QF]: e1?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": le,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(i5, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(r0.layoutContainer, e8, {
                                        [r0.editingPanelEnabled]: ed,
                                        [r0.editingPanelExpanded]: ed && e_,
                                        [r0.isAnimating]: eD,
                                    }),
                                    style: e7,
                                    children: [
                                        (0, t.jsxs)(r9, {
                                            user: l,
                                            displayProfile: e1,
                                            pendingThemeColors: eC,
                                            forceShowPremium: e6,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tC.Oo,
                                                    children: [
                                                        (0, t.jsx)(lx.A, { onClose: $ }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: le, children: ln }),
                                                        }),
                                                        ez &&
                                                            (0, t.jsx)(iD, {
                                                                buttonRef: eF,
                                                                onClick: eQ,
                                                                className: r0.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eB &&
                                                    (0, t.jsx)("div", {
                                                        className: r0.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iL, {
                                                            innerRef: eV,
                                                            onClick: eQ,
                                                            className: r0.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ed &&
                                                    eM((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(iM, {
                                                                  className: a()(r0.editingPanel, {
                                                                      [r0.isExpanded]: e_,
                                                                  }),
                                                                  selectedGuildId: J,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: ee,
                                                                  onClose: e0,
                                                                  collapseButtonRef: eU,
                                                                  isLoading: Q,
                                                                  isEditingDisabled: en,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eL.A, {
                                                    className: a()(B, tC.A7, r0.profileContentOuter),
                                                    innerClassName: r0.profileContentInner,
                                                    user: l,
                                                    displayProfile: e1,
                                                    themeType: ep.d.MODAL_V2,
                                                    pendingThemeColors: eC,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e6,
                                                    children: [
                                                        (0, t.jsx)(r5, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eO.A, {}),
                                                        !ej && (0, t.jsx)(rn, { className: r0.noticeContainer }),
                                                        eq &&
                                                            (0, t.jsx)("div", {
                                                                className: r0.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(i$, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eK.intl.string(eK.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != el
                                                                            ? eK.intl.string(eK.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: el,
                                                                    actionDisabled: !ed && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: r0.profileCardToastContainer,
                                                            children: (0, t.jsx)(eT.A, { userId: l.id, onClose: $ }),
                                                        }),
                                                        (0, t.jsxs)(i0, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: r0.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(r8, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    displayProfile: e1,
                                                                    nickname: e4,
                                                                    originGuildId: d,
                                                                    hasEntered: O === h.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: $,
                                                                    avatarDecorationOverride: eN,
                                                                    avatarOverride: eE,
                                                                    bannerOverride: eP,
                                                                    accentColorOverride: ek,
                                                                    profileEffectOverride: eS,
                                                                    profileFrame: e3,
                                                                    fadeInProfileFrame: e5,
                                                                    editingMode: ey,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, t.jsx)(i7.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: e1,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    items: e$,
                                                                    initialSection: C,
                                                                    onClose: $,
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
                            (0, t.jsx)(iw.A, { userId: l.id, guildId: Z, className: r0.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function r4(e) {
    return (0, t.jsx)(lG.tM, { children: (0, t.jsx)(r6, { ...e }) });
}
