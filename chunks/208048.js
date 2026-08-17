n.d(l, { A: () => r5 });
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
    y = n(480335),
    C = n(577390),
    N = n(372320),
    E = n(31956),
    P = n(744808),
    k = n(875741),
    T = n(915089),
    S = n(713517),
    O = n(645507),
    R = n(922590),
    _ = n(821269),
    L = n(93246),
    D = n(594832),
    M = n(71393),
    w = n(994500),
    G = n(351906),
    F = n(287809),
    V = n(562153),
    U = n(474090),
    B = n(158045),
    z = n(183555),
    W = n(47675),
    H = n(321191),
    q = n(591179),
    K = n(999291),
    Y = n(702841),
    X = n(370480),
    $ = n(773669),
    Z = n(652215),
    J = n(101928),
    Q = n(837529),
    ee = n(346713),
    el = n(573648),
    en = n(429913),
    et = n(321078),
    ei = n(403362),
    er = n(484509),
    ea = n(487409),
    es = n(83931),
    eo = n(920601),
    ed = n(903209),
    eu = n(919395),
    ec = n(101058),
    eg = n(696451),
    em = n(836602),
    ef = n(996988),
    ep = n(985253);
let ex = (0, d.FT)(ep.T[ef.d.MODAL_V2].avatarSize),
    eh = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var ev = n(716804),
    eA = n(679492),
    eb = n(718019),
    ej = n(413492),
    eI = n(915614),
    ey = n(744753),
    eC = n(834730);
function eN(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eC.E, { variant: "text-sm/normal", children: l });
}
var eE = n(361311),
    eP = n(931481),
    ek = n(439053),
    eT = n(743987),
    eS = n(312381),
    eO = n(501193),
    eR = n(383448),
    e_ = n(946356),
    eL = n(983495),
    eD = n(503026),
    eM = n(305385),
    ew = n(109112),
    eG = n(939249),
    eF = n(730134),
    eV = n(169869),
    eU = n(837057),
    eB = n(310419),
    ez = n(889227),
    eW = n(967198),
    eH = n(488995),
    eq = n(375708),
    eK = n(440016);
function eY(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eV.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eK.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eF.A, { user: new ez.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(ew._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)(eG.D, {
                        className: eK.OB,
                        onClick: function () {
                            i?.(),
                                (0, eU.transitionToGlobalDiscovery)({
                                    tab: eH.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eB.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eC.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eC.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eC.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eK.nk,
                                children: eq.intl.format(eq.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eK.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eX(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, z.NJ)(),
        o = (0, s.bG)([$.default], () => $.default.locale),
        d = (0, s.bG)([eW.A], () => eW.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eK.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eK.FI,
                          children: (0, t.jsx)(eY, {
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
var e$ = n(240248),
    eZ = n(308244),
    eJ = n(81400),
    eQ = n(84540),
    e0 = n(290386),
    e1 = n(621466),
    e2 = n(231088),
    e3 = n(786826);
function e7(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function e5(e) {
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
                ? eq.intl.formatToPlainString(eq.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e2.ZL, {
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
        input: (0, t.jsx)(e3.f, {
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
let e8 = [
    { value: "HAIKU", label: () => eq.intl.string(eq.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eq.intl.string(eq.t.CXkR1L) },
    { value: "TELL_US", label: () => eq.intl.string(eq.t.eutr4P) },
    { value: "FUN_FACT", label: () => eq.intl.string(eq.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eq.intl.string(eq.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eq.intl.string(eq.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eq.intl.string(eq.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eq.intl.string(eq.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eq.intl.string(eq.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eq.intl.string(eq.t.u7WCGI) },
];
var e9 = n(307731);
function e6(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([F.default], () => F.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        m = B.Ay.canUsePremiumProfileCustomization(u),
        f = (0, e0.U)({ location: "user_profile_modal_edit" }),
        {
            value: p,
            previewValue: x,
            onCommit: h,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([em.A], () => em.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, eQ.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        v = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = (0, e2.Ww)(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = e7(l),
                                t = n?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, n.current),
                    [n],
                );
            i.useEffect(() => {
                if (!l) return;
                let e = n.current?.ownerDocument ?? document;
                function i(e) {
                    (0, e1.vq)(e.target) && !a(e.target) && t();
                }
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let i = e.relatedTarget;
                    !(0, e1.vq)(i) || a(i) || (null == e7(n.current) && t());
                },
                [l, a, t, n],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: p, onCommit: h }),
        A = !(0, e$.uJ)(x),
        b = (0, s.bG)([em.A], () => em.A.getErrors(g)),
        j = (0, eJ.EC)(g),
        I = b.bio?.[0],
        y = j?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e8.length)), e8[e];
        }, []),
        N = c ? eq.intl.string(eq.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e5, {
              ...v,
              preview: A ? (0, t.jsx)(eZ.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eq.intl.string(eq.t.lO3n7a),
              label: eq.intl.string(eq.t["YWo+Zd"]),
              emojiPickerIntention: e9.EmojiIntention.PROFILE,
              maxLength: f,
              error: I,
              warning: y,
          })
        : A
          ? (0, t.jsx)(eZ.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e4(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, e$.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eq.intl.string(eq.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e6, { displayProfile: l }) : (0, t.jsx)(eZ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var le = n(982168),
    ll = n(722868),
    ln = n(822775),
    lt = n(982985),
    li = n(133385),
    lr = n(34188),
    la = n(839534),
    ls = n(993401);
function lo(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, la.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(ls.q3, {
        action: "VISIT_SHOP",
        icon: lr.U,
        tooltipText: eq.intl.string(eq.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var ld = n(573355),
    lu = n(102951);
function lc(e) {
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
        u = (0, q.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ll.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lu.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === Z.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lo, {}),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ln.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lo, {}),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Z.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === Z.eA$.FRIEND || o === Z.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(ld.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Z.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(ld.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ld.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(lt.l, { userId: l.id, onClose: le.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lg = n(463156),
    lm = n(866665),
    lf = n(349288),
    lp = n(509434),
    lx = n(307301),
    lh = n(228366),
    lv = n(95561),
    lA = n(874490),
    lb = n(968309),
    lj = n(174459),
    lI = n(486020),
    ly = n(123917),
    lC = n(783419);
let lN = "User Profile Modal V2";
function lE(e) {
    let l = el.A.get(e);
    (0, lb.A)({ platformType: l.type, location: lN }),
        lj.default.track(Z.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lN,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lP() {
    lh.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lE, stackingBehavior: "stack" });
}
function lk(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, X.An)(r[lC.pK.CREATED_AT], n),
        s = el.A.get((0, lA.ML)(l.type));
    return (0, t.jsx)(lS, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(lm.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eC.E, { variant: "text-sm/normal", className: eK.GW, children: l.name }),
                  })
                : (0, t.jsx)(lf.Anchor, {
                      href: e,
                      className: eK.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eq.intl.string(eq.t.q5jLJB)}`
                              : `${l.name}, ${eq.intl.string(eq.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lv.zV)(Z.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, ly.h)({ href: e, trusted: s?.type !== Z.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eK.vi,
                          children: [
                              (0, t.jsx)(lm.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eC.E, {
                                      variant: "text-sm/normal",
                                      className: eK.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lp.I, { size: "xs", color: "currentColor", className: eK.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === Z.fg2.REDDIT
                ? (0, eV.xE)(r)
                : l.type === Z.fg2.STEAM
                  ? (0, eV.dy)(r)
                  : l.type === Z.fg2.BLUESKY || l.type === Z.fg2.MASTODON || l.type === Z.fg2.TWITTER
                    ? (0, eV.ED)(r)
                    : l.type === Z.fg2.PAYPAL
                      ? (0, eV.gZ)(r)
                      : l.type === Z.fg2.EBAY
                        ? (0, eV.ub)(r)
                        : l.type === Z.fg2.TIKTOK
                          ? (0, eV.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lT(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lI.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lS, {
        renderAccountName: function () {
            return (0, t.jsx)(lm.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eC.E, {
                    variant: "text-sm/normal",
                    className: eK.GW,
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
function lS(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eK.FI,
        children: [
            (0, t.jsx)(lm.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eK.k_,
                    children: (0, t.jsx)("img", {
                        alt: eq.intl.formatToPlainString(eq.t.rtm15P, { name: i }),
                        className: a()(eK.tV, o ? eK.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eC.E, {
                                    variant: "text-xs/normal",
                                    children: eq.intl.format(eq.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eK.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lO(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([$.default], () => $.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eK.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eK.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lk, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lT, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eG.D, {
                    className: eK.qG,
                    onClick: lP,
                    children: [
                        (0, t.jsx)(lx.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eC.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eq.intl.string(eq.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lR = n(193885),
    l_ = n(408278),
    lL = n(993165),
    lD = n(554146),
    lM = n(194261),
    lw = n(315629),
    lG = n(789645),
    lF = n(297264),
    lV = n(403581),
    lU = n(812993),
    lB = n(821609),
    lz = n(39623),
    lW = n(890377),
    lH = n(517461),
    lq = n(13875),
    lK = n(131607),
    lY = n(248778),
    lX = n(465794),
    l$ = n(252732),
    lZ = n(945810);
let lJ = (0, lZ.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    lQ = (0, lZ.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function l0(e) {
    let { location: l } = e;
    return lQ.useConfig({ location: l });
}
var l1 = n(487233),
    l2 = n(120386),
    l3 = n(317097),
    l7 = n(602853),
    l5 = n(922016),
    l8 = n(508274),
    l9 = n(654107),
    l6 = n(930349);
function l4(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l9.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([em.A, H.A], () => ({
            pendingAccentColor: em.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: H.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l3.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eQ.p)({ accentColor: e }), []);
    return (0, t.jsx)(l5.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l6.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eq.intl.string(eq.t["/X3fkf"]),
                accessibleValue: (0, l3.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l3.Hl)(c) } }),
            }),
    });
}
var ne = n(450373),
    nl = n(796290);
function nn(e, l) {
    let n = null === e,
        t = void 0 === e;
    return n || (t && null == l) ? eq.intl.string(eq.t["3Xph0/"]) : t ? eq.intl.string(eq.t.keN7ib) : e.description;
}
function nt(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nl.o, style: { backgroundColor: l } });
}
function ni(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nl._ });
}
function nr(e) {
    let { displayProfile: l, bannerChange: n, shouldAnimate: i } = e,
        r = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l3.LX)(r),
        { hex: s } = (0, ne.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(ni, { src: o }) : (0, t.jsx)(nt, { backgroundColor: s });
}
function na(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(l6.A, {
        ...i,
        accessibleLabel: eq.intl.string(eq.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(nr, { displayProfile: l, bannerChange: n, shouldAnimate: e }),
    });
}
var ns = n(569059);
function no(e) {
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
            let n = (0, K.Ay)(e, l),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, Y.cf)(
                    [em.A, F.default, H.A],
                    () => ({
                        pendingBanner: em.A.getPendingChanges(l ?? void 0).pendingBanner,
                        mainProfileBanner: F.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != l ? H.A.getGuildMemberProfile(e, l)?.banner : H.A.getUserProfile(e)?.banner,
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
                accessibleValue: nn(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(l, n),
        f = (0, eu.Ac)(d, g)
            ? {
                  onClick: () => (0, l$.rM)(null, g, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eq.intl.string(m ? eq.t.jHlJNS : eq.t.tT9n7D),
              }
            : void 0,
        p = (0, ns.P)({ guildId: n, returnRef: s });
    return (0, t.jsx)(na, {
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
var nd = n(259065),
    nu = n(913563),
    nc = n(898985),
    ng = n(922301),
    nm = n(660184),
    nf = n(864386),
    np = n(257551);
let nx = "heading-xl/semibold";
function nh(e) {
    if (null == e) return eq.intl.string(eq.t["3Xph0/"]);
    let l = eq.intl.string((0, nu.A)(e.fontId)),
        n = eq.intl.string(nc.J[e.effectId] ?? nf.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eq.intl.formatToPlainString(eq.t.A2XnI4, { fontName: l, effectName: n, colors: t });
}
function nv(e) {
    let { displayName: l, displayNameStyles: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: np.M,
        children:
            null != n
                ? (0, t.jsx)(eC.E, {
                      variant: nx,
                      children: (0, t.jsx)(nm.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? ng.G.ANIMATED : ng.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eC.E, { variant: nx, className: np.W, color: "text-muted", children: l }),
    });
}
function nA(e) {
    let { displayName: l, displayNameStyles: n, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(l6.A, {
        ...r,
        accessibleLabel: eq.intl.string(eq.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(nv, { displayNameStyles: n, displayName: l, shouldAnimate: i || e }),
    });
}
function nb(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([eg.Ay], () => (null != n ? (eg.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([F.default], () => F.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([em.A], () => em.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([em.A], () => em.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eu.B0)(l, n ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        y = (0, eu.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: n ?? void 0 }),
        C = (0, eu.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? l.username,
        N = A ? null != h : null != v,
        E =
            null != y && N
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eq.intl.string(j ? eq.t.en3ogK : eq.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            o?.(), (0, nd.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nA, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: nh(y),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: C,
        displayNameStyles: y,
        disabled: r,
    });
}
var nj = n(324970);
function nI(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nj.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nj.Pf,
                children: [
                    (0, t.jsx)(lF.D, {
                        className: nj.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(lm.m, {
                            text: eq.intl.string(eq.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lV.t, {
                                className: nj.IX,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: nj.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function ny(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nj.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eC.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nC = n(374654),
    nN = n(366010),
    nE = n(736653),
    nP = n(674658),
    nk = n(617061),
    nT = n(203632),
    nS = n(536572);
let nO = new Set(),
    nR = 0;
var n_ = n(993408),
    nL = n(841702),
    nD = n(515718),
    nM = n(195292);
function nw(e) {
    "" !== e.thumbnailPreviewSrc && (0, nD.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nG = n(580705),
    nF = n(462397);
let nV =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nU =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nB(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nE.Ay)(),
        u = (0, nN.M)(d) ? nV : nU,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nL.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, n_.wo)(r, t), [r, t]),
                s = (0, nM.A)({ enabled: l, isInteracting: n, items: a, preload: nw });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nR += 1), nO.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nG.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nG.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nG.yY, { [nF.O]: g }),
                        children: (0, t.jsx)(y.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nT.HL.FromStart,
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
function nz(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        c = (0, eu.N2)({ user: l }),
        g = (0, eu.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, eu.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, eu.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nP.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eq.intl.string(x ? eq.t["SQy/Po"] : eq.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nk.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l6.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eq.intl.string(eq.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eq.intl.string(eq.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eq.intl.string(t ? eq.t["1M4m8w"] : eq.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, nS.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nB, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nW = n(515727),
    nH = n(746002);
function nq(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nH.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nH.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nD.NN)(n).catch(() => {});
        });
}
var nK = n(443727);
function nY(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nX(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nE.Ay)(),
        u = (0, nN.M)(d) ? nV : nU,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nL.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, n_.MG)(r, t), [r, t]);
            return (0, nM.A)({ enabled: l, isInteracting: n, items: a, preload: nq });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, k.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nK.hm, x, { [nF.O]: m }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: f, filterLayer: nY }),
                }),
            (0, t.jsx)("div", {
                className: a()(nK.ti, { [nK.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nK.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n$(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        u = (0, eu.Xf)({ user: l }),
        c = (0, eu.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eu.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, eu.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, nP.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eq.intl.string(p ? eq.t.j6hZyM : eq.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nW.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l6.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eq.intl.string(eq.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eq.intl.string(eq.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eq.intl.string(t ? eq.t.yFeGB5 : eq.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nS.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nX, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nZ = n(684732),
    nJ = n(498596),
    nQ = n(211003);
function n0(e) {
    let { primaryColor: l, secondaryColor: n, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, l3.Hl)(l)}, ${(0, l3.Hl)(n)})`;
    return (0, t.jsx)("div", { className: nQ.D7, style: { background: r }, children: i });
}
function n1(e) {
    let { color: l } = e,
        n = (0, l3.Hl)(l),
        i = (0, l3.bJ)(l, 0xffffff) < nJ.Tr.NonText;
    return (0, t.jsx)("div", {
        className: nQ.OS,
        children: (0, t.jsx)("div", { className: a()(nQ.Hy, { [nQ.rY]: i }), style: { backgroundColor: n } }),
    });
}
function n2(e) {
    let { color: l, disabled: n, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eG.D, {
        ...s,
        innerRef: a ?? o,
        className: nQ.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, t.jsx)(n1, { color: l }),
    });
}
function n3(e) {
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
    return (0, t.jsx)(l5.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: l, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(n2, { color: l, onClick: i, disabled: r, buttonRef: u, "aria-label": n, ...a });
        },
    });
}
function n7(e) {
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
        x = (0, l3.Hl)(l),
        h = (0, l3.Hl)(n),
        v = eq.intl.formatToPlainString(eq.t.FquTfm, { colorLabel: x }),
        A = eq.intl.formatToPlainString(eq.t.xOnm4z, { colorLabel: h });
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
    return (0, t.jsx)(l6.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(n0, {
            primaryColor: l,
            secondaryColor: n,
            children: [
                (0, t.jsx)(n3, {
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
                (0, t.jsx)(n3, {
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
function n5(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, K.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([em.A, H.A], () => {
            let e = em.A.getPendingChanges(n ?? void 0),
                t = H.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (H.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, ec.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, J.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, l9.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eQ.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nZ.l)(d, o)
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eq.intl.string(eq.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(n7, {
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
var n8 = n(134976);
function n9(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(n8.k, { [n8.V]: n }), children: l }) });
}
var n6 = n(53466),
    n4 = n(689175),
    te = n(672905);
function tl(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(n6.animated.div, { className: te.iK, style: e, children: l }) : null));
}
function tn(e) {
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
        className: te.u6,
        children: [
            (0, t.jsx)(n4.zC, {
                ref: r,
                className: a()(te.XG, { [te.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: te.Qs, children: l }),
            }),
            s && (0, t.jsx)(tl, { isDismissed: o, children: n }),
        ],
    });
}
var tt = n(508770),
    ti = n(732280),
    tr = n(811611),
    ta = n(976860),
    ts = n(975732);
function to() {
    return i.useCallback(() => {
        (0, ta.pX)(Z.BVt.NITRO_HOME), (0, ts.closeUserProfileModal)();
    }, []);
}
var td = n(570002),
    tu = n(202541),
    tc = n(897260);
function tg() {
    let e = (0, ti.V)();
    return e?.subscriptionTrial?.skuId === tu.pe.TIER_2 ? e : null;
}
function tm() {
    let e = (0, td.A)(eq.intl.string(eq.t.pj0XBN));
    return (0, t.jsx)(lX.A, { subscriptionTier: tu.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tf(e) {
    let { trialOffer: l, onSubscribeSuccess: n } = e,
        i = to(),
        r = (0, B.FY)({
            intervalType: l.subscriptionTrial?.interval,
            intervalCount: l.subscriptionTrial?.intervalCount,
        }),
        a = (0, tr.ux)(l.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tc.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tc.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eq.intl.string(eq.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tt.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eC.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eq.intl.format(eq.t["fF+cgd"], { onClick: i }),
            }),
            (0, t.jsx)(lX.A, {
                subscriptionTier: tu.pe.TIER_2,
                buttonTextOverride: r,
                onSubscribeModalClose: (e) => {
                    e && n?.();
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != a &&
                (0, t.jsx)(eC.E, { variant: "text-xs/normal", color: "text-muted", className: tc.u8, children: a }),
        ],
    });
}
function tp() {
    let e = tg();
    return null == e ? (0, t.jsx)(tm, {}) : (0, t.jsx)(tf, { trialOffer: e });
}
var tx = n(55619),
    th = n(37407);
function tv() {
    return (0, t.jsxs)("div", {
        className: th.k,
        children: [
            (0, t.jsx)(eC.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eq.intl.string(eq.t.JFY17v),
            }),
            (0, t.jsx)(lB.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eq.intl.string(eq.t.R9GHya),
                onClick: function () {
                    return tx.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tA = n(342866),
    tb = n(128604);
function tj(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([em.A], () => ({
            pendingAvatar: em.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: em.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tA.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, tA.$)(a, l.avatar),
        imageInteractingClassName: null == r ? tb.$T : void 0,
    });
}
function tI(e) {
    let { userId: l, ...n } = e,
        i = (0, K.Ay)(l),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [em.A, H.A],
            () => ({
                pendingBanner: em.A.getPendingChanges().pendingBanner,
                tryItOutBanner: em.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: H.A.getUserProfile(l)?.banner,
            }),
            [l],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(na, {
        ...n,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: nn(d, o),
    });
}
function ty(e) {
    let { user: l, ...n } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([em.A], () => ({
            pendingDisplayNameStyles: em.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: em.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: em.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([F.default], () => ({ globalName: F.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eu.lw)({ pendingValue: a, userValue: o }) ?? l.username;
    return (0, t.jsx)(nA, {
        ...n,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: nh(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tC = n(207803);
function tN(e) {
    let l = (0, K.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([em.A], () => ({
            tryItOutThemeColors: em.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: em.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: em.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, ec.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, J.A)({
            user: e,
            displayProfile: l,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function tE(e) {
    let { user: l, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tN(l),
        d = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : l.getAvatarURL(void 0, 80),
        c = (0, l9.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tC.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(n7, {
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
function tP(e) {
    let { user: l, onClickPrimary: n, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tN(l);
    if (null == r || null == a) return null;
    let s = eq.intl.formatToPlainString(eq.t.FquTfm, { colorLabel: (0, l3.Hl)(r) }),
        o = eq.intl.formatToPlainString(eq.t.xOnm4z, { colorLabel: (0, l3.Hl)(a) });
    return (0, t.jsx)(l6.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(n0, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(n2, { color: r, onClick: n, "aria-label": s }),
                (0, t.jsx)(n2, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tk = n(502096);
function tT(e) {
    let { user: l, mode: n } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, lL.pA)(),
        c = (function (e) {
            let { analyticsLocations: l } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, nd.L)({ analyticsLocations: l, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [l, e]);
        })(r),
        g = (0, ns._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, ns.P)({ isPremiumTryItOut: !0, returnRef: s }),
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
            className: tk.T,
            children: [
                (0, t.jsx)(nI, {
                    heading: eq.intl.string(eq.t.NEzEws),
                    children: (0, t.jsx)(ty, {
                        user: l,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nI, {
                    heading: eq.intl.string(eq.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(tE, {
                              user: l,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tP, {
                              user: l,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(nI, {
                    heading: eq.intl.string(eq.t.Vgdusv),
                    children: (0, t.jsx)(tI, {
                        userId: l.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nI, {
                    heading: eq.intl.string(eq.t.Dt3ZUr),
                    children: (0, t.jsx)(tj, {
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
var tS = n(847374),
    tO = n(111159),
    tR = n(548118),
    t_ = n(711014),
    tL = n(540637),
    tD = n(801461),
    tM = n(44482),
    tw = n(844222),
    tG = n(561392),
    tF = n(499957),
    tV = n(15626),
    tU = n(37712);
function tB(e) {
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
            let { reducedMotion: e } = i.useContext(tw.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tG.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tF.DL)(o, {
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
        C = i.useContext(tV._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, tD.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        D = i.useMemo(() => l.filter((e) => (0, tD.fI)(e.value, [n])), [n, l]),
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
        { activeIndex: U, handleKeyDown: B } = (0, tL.l)(!0, l),
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
                    className: a()(tU.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tL.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: D,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tM.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tz = n(643213);
let tW = "MAIN_PROFILE";
function tH(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tR.Ay, { className: tz.$f, guild: l, size: tR.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tq(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tz.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tz.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tz.qL,
                children: [
                    (0, t.jsx)(eC.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eC.E, {
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
function tK(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eG.D, {
        innerRef: r,
        className: a()(tz.L5, { [tz.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eC.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tz.v9,
                children: n,
            }),
            (0, t.jsx)(tS.a, {
                className: tz.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tY(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([t_.Ay], () => t_.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([eW.A], () => {
            let e = eW.A.getGuildId();
            return null == e || em._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eg.Ay, t_.Ay], () => {
            let e = {};
            for (let l of t_.Ay.getFlattenedGuildIds()) {
                let n = eg.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tW,
                    label: eq.intl.string(eq.t["2p07FR"]),
                    value: tW,
                    leading: (0, t.jsx)(tO.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tH, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(ei.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(tH, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tW,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let n = e === tW ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tB, {
        className: tz.kL,
        label: eq.intl.string(eq.t.rki38K),
        listboxClassName: tz.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tq, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tK, { leading: p.value === tW ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tX = n(462887),
    t$ = n(765178),
    tZ = n(461797),
    tJ = n(469054),
    tQ = n(601298);
function t0() {
    let { preset: e, setPreset: l } = (0, lL.RQ)(),
        { clientThemeAdaptedColorsEnabled: n } = l0({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, nE.Ay)(),
        r = (0, tX.q)(t),
        a = i.useCallback(
            (e) => {
                let l = (0, tZ.Wt)(e);
                (0, tC.w5)({
                    banner: (0, tQ.X)({
                        assetOrigin: tJ.E.NEW_ASSET,
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
        em.A.hasTryItOutChanges() || a(e);
    }, [a, e]);
    let s = i.useCallback(() => {
        let n = (0, tZ.B$)(e),
            t = (0, tZ.Wt)(n);
        lj.default.track(Z.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
            l(n),
            a(n),
            t$.O.announce(eq.intl.formatToPlainString(eq.t.M2Hj9s, { presetName: t.getName() }));
    }, [e, l, a]);
    return { preset: e, onShuffle: s };
}
var t1 = n(23722),
    t2 = n(49999),
    t3 = n(844939);
let t7 = "profile-editing-nameplate-error",
    t5 = "profile-editing-avatar-error",
    t8 = "profile-editing-avatar-decoration-error",
    t9 = "profile-editing-banner-error",
    t6 = "profile-editing-display-name-style-error";
function t4(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(t3.D0, l),
        children: (0, t.jsx)("div", { className: t3.ZN, children: (0, t.jsx)(lM.LockIcon, { size: "xs" }) }),
    });
}
function ie() {
    let e = (0, td.A)(eq.intl.string(eq.t.pj0XBN)),
        l = to();
    return (0, t.jsxs)(lw.h, {
        color: "nitro-pink",
        className: t3.Lu,
        children: [
            (0, t.jsx)(eC.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eq.intl.format(eq.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(lX.A, { subscriptionTier: tu.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function il() {
    let [e, l] = (0, lH.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: t3.X6,
              children: [
                  (0, t.jsx)(eC.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eq.intl.string(eq.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eG.D, {
                      "aria-label": eq.intl.string(eq.t.rSe9ra),
                      className: t3.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lG.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function it() {
    let e = to(),
        l = (0, td.A)(eq.intl.string(eq.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: t3.eW,
        children: [
            (0, t.jsxs)("div", {
                className: t3.tm,
                children: [
                    (0, t.jsx)(lF.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eq.intl.string(eq.t.bO0TOe),
                    }),
                    (0, t.jsx)(eC.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eq.intl.format(eq.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lX.A, { subscriptionTier: tu.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(t4, { className: t3.nd }),
        ],
    });
}
function ii() {
    return (0, t.jsx)(eC.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: t3.BJ,
        "aria-hidden": !0,
        children: eq.intl.format(eq.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lV.t, { size: "xxs", color: "currentColor", className: t3.qp }),
        }),
    });
}
function ir(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nI, {
        heading: eq.intl.string(eq.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nC.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t7 : void 0 }),
            (0, t.jsx)(ny, { id: t7, message: r }),
        ],
    });
}
function ia(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nI, {
        heading: eq.intl.string(eq.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l1.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t5 : void 0 }),
            (0, t.jsx)(l2.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? t8 : void 0 }),
            (0, t.jsx)(ny, { id: t5, message: (0, l$.d3)(r) }),
            (0, t.jsx)(ny, { id: t8, message: a }),
        ],
    });
}
function is(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lY.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, lK.kn)(a && !i ? [lD.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lD.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nI, {
        heading: eq.intl.string(eq.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lU.Lp, { text: eq.intl.string(eq.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nb, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? t6 : void 0,
                onOpen: d ? () => o(t2.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(ny, { id: t6, message: r }),
        ],
    });
}
function io(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nI, {
        heading: eq.intl.string(eq.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n5, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(no, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? t9 : void 0 }),
            (0, t.jsx)(ny, { id: t9, message: (0, l$.d3)(a) }),
        ],
    });
}
function id(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nI, {
        heading: eq.intl.string(eq.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(l4, { user: l, disabled: n }),
    });
}
function iu(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lq.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nI, {
        heading: eq.intl.string(r ? eq.t["Vfbar/"] : eq.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nz, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n$, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let ic = "premium-try-it-out-description";
function ig(e) {
    let { user: l } = e,
        n = to(),
        { navigate: i } = (0, lL.pA)();
    return (
        t0(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": ic,
            className: t3.DX,
            children: [
                (0, t.jsx)(t4, { className: t3.x$ }),
                (0, t.jsxs)("div", {
                    className: t3.sb,
                    children: [
                        (0, t.jsx)(eC.E, {
                            id: ic,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eq.intl.format(eq.t.TmfgI2, { onClick: n }),
                        }),
                        (0, t.jsx)(lB.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lz.EyeIcon,
                            text: eq.intl.string(eq.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tT, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function im(e) {
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
        g = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { enabled: m } = l0({ location: "DefaultEditingPanelView" }),
        f = (0, t1.A)(c),
        p = null != i,
        x = B.Ay.canUsePremiumProfileCustomization(l),
        h = p && !x,
        v = !x && !p,
        A = v && m,
        b = p && !x && !g,
        j = a || o,
        I = (0, s.bG)([em.A], () => em.A.getErrors(i)),
        y = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        C = I.avatar?.[0],
        N = I.avatar_decoration_sku_id?.[0],
        E = I.banner?.[0],
        P = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0],
        k = lJ.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(is, { user: l, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(n9, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: t3.wx,
                children: [
                    (0, t.jsx)(lm.m, {
                        text: eq.intl.string(eq.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eG.D, {
                            innerRef: d,
                            className: t3.cS,
                            "aria-label": eq.intl.string(eq.t["l/A351"]),
                            onClick: u,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lW.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tY, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tv, {})
                : (0, t.jsx)(tn, {
                      floatingFooter: v && !A ? (0, t.jsx)(ie, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(il, {}) : (0, t.jsx)(it, {})),
                              x && (0, t.jsx)(ii, {}),
                              (0, t.jsx)(ir, { user: l, guildId: i, disabled: j || h, errorMessage: y }),
                              (0, t.jsx)(ia, {
                                  user: l,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(io, {
                                        user: l,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(id, { user: l, disabled: j || h }),
                              (0, t.jsx)(iu, { user: l, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(ig, { user: l }), (0, t.jsx)(tp, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var ip = n(356965);
function ix(e) {
    return null;
}
function ih(e) {
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
        className: a()(ip.kL, x && ip.ez),
        children: (0, t.jsx)("div", {
            className: ip.u4,
            children: p((e, l, n) => {
                let { key: i } = n,
                    r = o.get(l);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          n6.animated.div,
                          {
                              className: ip.M6,
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
var iv = n(477155),
    iA = n(206697),
    ib = n(926321),
    ij = n(663417),
    iI = n(597563);
let iy = "shuffle-options-a11y-description";
function iC() {
    let { preset: e, onShuffle: l } = t0(),
        { showPresetName: n } = l0({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, tZ.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: iI.kL,
              children: [
                  (0, t.jsx)(lm.m, {
                      text: eq.intl.string(eq.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(l_.K, {
                          icon: ij.RefreshIcon,
                          "aria-label": eq.intl.string(eq.t.VzqqFC),
                          "aria-describedby": iy,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: iy, children: eq.intl.string(eq.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iI.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iI.L_, src: a }),
                          (0, t.jsxs)(eC.E, {
                              className: iI._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eq.intl.formatToPlainString(eq.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iI.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lB.$, {
                      icon: ib.DiceIcon,
                      text: eq.intl.string(eq.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": iy,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: iy, children: eq.intl.string(eq.t.bBRdiB) }),
              ],
          });
}
var iN = n(451125);
function iE(e) {
    let { user: l, onBack: n, backButtonRef: i } = e,
        r = tg();
    return (0, t.jsxs)(n9, {
        children: [
            (0, t.jsxs)("div", {
                className: iN.wx,
                children: [
                    (0, t.jsx)(eG.D, {
                        innerRef: i,
                        "aria-label": eq.intl.string(eq.t["4IYwrw"]),
                        onClick: n,
                        className: iN.Gv,
                        children: (0, t.jsx)(iv.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lF.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iN.R_,
                        children: eq.intl.string(eq.t.PxUx8e),
                    }),
                    (0, t.jsx)(eC.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iN.Ij,
                        children: eq.intl.string(eq.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iN.ZZ, children: (0, t.jsx)(iC, {}) }),
                ],
            }),
            (0, t.jsx)(tn, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tT, { user: l, mode: "edit" }),
                        null != r && (0, t.jsx)(tf, { trialOffer: r, onSubscribeSuccess: iA.T }),
                    ],
                }),
            }),
        ],
    });
}
var iP = n(450579);
let ik = "user-profile-editing-panel",
    iT = "profile-modal-editing-panel-heading";
function iS(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(lm.m, {
        text: eq.intl.string(eq.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: i,
            "aria-label": eq.intl.string(eq.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": ik,
            className: a()(iP.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lR.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iO(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lm.m, {
            text: eq.intl.string(eq.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(l_.K, {
                buttonRef: i,
                "aria-label": eq.intl.string(eq.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": ik,
                icon: lR.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iR(e) {
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
        p = (0, s.bG)([F.default], () => F.default.getCurrentUser()),
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, lL.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: ik,
              "aria-labelledby": iT,
              className: a()(iP.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iP.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iT, children: eq.intl.string(eq.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(ih, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(ix, {
                                  id: "default",
                                  children: (0, t.jsx)(im, {
                                      panelId: ik,
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
                              (0, t.jsx)(ix, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(iE, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var i_ = n(271383),
    iL = n(347805),
    iD = n(629403),
    iM = n(612630),
    iw = n(372638),
    iG = n(674947);
function iF(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iM.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await iD.A.updateNote(l, e);
                    } catch {
                        f(eq.intl.string(eq.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == p,
        v = (0, e2.Ww)({ value: p ?? "", onCommit: x, disabled: h }),
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
            ? (0, t.jsx)(eC.E, { variant: "text-sm/normal", color: "text-default", className: iG.t, children: p })
            : null;
    return (0, t.jsx)(iw.f, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eq.intl.string(eq.t.PbMNh2),
        label: eq.intl.string(eq.t.PbMNh2),
        placeholder: h ? eq.intl.string(eq.t["WLKx/9"]) : eq.intl.string(eq.t.VBhOe2),
        maxLength: Z.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var iV = n(83013),
    iU = n(518477),
    iB = n(273781);
function iz(e) {
    let { userId: l } = e,
        n = (0, ev.g)(),
        { trackUserProfileAction: i } = (0, z.NJ)(),
        r = (0, q.X)("UserProfileModalV2NotesSection"),
        a = r ? iF : iL.A;
    return (0, t.jsx)(iV.A, {
        heading: eq.intl.string(eq.t["mQKv+v"]),
        scrollTargetId: iU.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iB.N : iB.w,
            autoFocus: n === iU.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iW = n(123292),
    iH = n(263293),
    iq = n(871645);
function iK(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iH.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iq.oR, iH.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iH.Kk, children: l }),
                    (0, t.jsx)(eC.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iH.hP,
                            children: (0, t.jsx)(iW.Q, {
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
var iY = n(346055),
    iX = n(289873),
    i$ = n(103964);
function iZ(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && t$.O.announce(eq.intl.string(eq.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iY.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(i$.f, l && i$.z),
                    children: n && (0, t.jsx)(iX.y, { type: iX.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var iJ = n(568602),
    iQ = n(625494),
    i0 = n(61881);
function i1(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i0.A, em.A], () => i0.A.hasUnsavedChanges() || em.A.hasUnsavedChanges());
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
                iQ._.subscribe(Z.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    iQ._.unsubscribe(Z.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(iJ.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var i2 = n(94160),
    i3 = n(933832),
    i7 = n(972213),
    i5 = n(97483),
    i8 = n(775602),
    i9 = n(384377);
let i6 = {
        [iU.jM.WIDGET_ADDED]: {
            message: eq.intl.string(eq.t.fFP1Uy),
            icon: (0, t.jsx)(i3.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iU.jM.WIDGET_REMOVED]: {
            message: eq.intl.string(eq.t.zzsK7h),
            icon: (0, t.jsx)(i3.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iU.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eq.intl.string(eq.t["84MExs"]),
            icon: (0, t.jsx)(i7.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i5.Ck.FAILURE,
        },
        [iU.jM.SOMETHING_WENT_WRONG]: {
            message: eq.intl.string(eq.t.F8FvUy),
            icon: (0, t.jsx)(i7.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i5.Ck.FAILURE,
        },
    },
    i4 = (e) => {
        let { className: l } = e,
            n = (0, i9.fu)(),
            r = (0, s.bG)([i8.Ay], () => i8.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(i6[n]), t$.O.announce(i6[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, i9.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, i9.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(n6.animated.div, { className: l, style: e, children: (0, t.jsx)(iK, { ...d }) }),
                ),
            })
        );
    };
var re = n(297413),
    rl = n(465829),
    rn = n(826673),
    rt = n(576705),
    ri = n(761431),
    rr = n(530895);
function ra(e) {
    return null == e || "" === e ? void 0 : e;
}
function rs(e) {
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
        j = B.Ay.canUsePremiumProfileCustomization(p),
        y = (0, lY.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([rt.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: rt.A.can(Z.xBc.CHANGE_NICKNAME, e) || rt.A.can(Z.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((n = null != (l = h?.guildId ?? null)),
        (r = (0, s.bG)([F.default], () => F.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([eg.Ay], () => (null != l ? (eg.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([em.A], () => em.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([em.A], () => em.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = ra(c) ?? ra(r) ?? p.username),
        (f = ra(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, eQ.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, eQ.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        T = (0, ri.TX)({ value: E, onCommit: k, disabled: !C }),
        { isEditing: S, handleCommit: O } = T,
        R = (0, s.bG)([em.A], () => em.A.getErrors(b ?? null)),
        _ = (0, eJ.EC)(b ?? null),
        L = A ? R.nick?.[0] : R.global_name?.[0],
        D = _?.nick?.[0],
        w = (0, s.bG)([em.A], () => em.A.getPendingChanges(b).pendingDisplayNameStyles),
        G = eq.intl.string(A ? eq.t.mq6Cg9 : eq.t.XuZU7A),
        V = A ? eq.intl.string(eq.t.YcDKr8) : p.username,
        U = eq.intl.string(A ? eq.t["g7OSZ/"] : eq.t.kyfzzc),
        z = i.useRef(null),
        W = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && O(),
                    y &&
                        (0, rn.Dr)(lD.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: t2.i.INDIRECT_ACTION,
                        }),
                    (0, nd.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: z });
            },
            [S, O, v, b, y],
        ),
        H = {
            icon: lR.V,
            tooltip: eq.intl.string(eq.t.lqKKI2),
            "aria-label": eq.intl.string(eq.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: z,
        },
        q =
            A && !C && N
                ? (0, t.jsx)(lm.m, {
                      text: eq.intl.string(eq.t.gzjxQi),
                      children: (0, t.jsx)(eG.D, {
                          tag: "span",
                          className: rr.C,
                          children: (0, t.jsx)(lM.LockIcon, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eq.intl.string(eq.t.VPu695),
                          }),
                      }),
                  })
                : null,
        K =
            null != P
                ? (0, t.jsx)(rl.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: rr.d,
                      displayNameTrailing: q,
                  })
                : null;
    return (0, t.jsx)(ri.yV, {
        ...T,
        preview: K,
        placeholder: V,
        editButtonAriaLabel: U,
        label: G,
        maxLength: Z.zzC,
        trailing: C && j ? H : void 0,
        error: L,
        warning: D,
        disabled: !C,
    });
}
var ro = n(688960);
function rd(e) {
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
        (r = (0, s.bG)([em.A], () => em.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, eQ.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = (0, ri.TX)({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eq.intl.string(x ? eq.t.AXiE0i : eq.t["76Aqhl"]);
    return (0, t.jsx)(ri.yV, {
        ...f,
        size: "compact",
        className: a()(ro.k, p && ro.J),
        preview: h ? (0, t.jsx)(rl.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eq.intl.string(eq.t.h6VAO7),
        label: eq.intl.string(eq.t["rniRE+"]),
        placeholder: v,
        maxLength: Z.VE5,
    });
}
var ru = n(145497),
    rc = n(685073),
    rg = n(318785),
    rm = n(534400),
    rf = n(743981),
    rp = n(573109),
    rx = n(832344);
let rh = "no-server-tag";
function rv(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eG.D, {
        innerRef: l,
        className: a()(rp.L5, { [rp.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eC.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: rp.W3,
            tag: "span",
            children: [
                o
                    ? eq.intl.string(eq.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rm.Z9,
                                  {
                                      src: (0, rc.gC)(n, r, rf.Sl.SIZE_14),
                                      size: rf.Sl.SIZE_14,
                                      className: rp.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rc.gC)(n, r, rf.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tS.a, { size: "xs", color: "currentColor", className: rp.u4 }),
            ],
        }),
    });
}
function rA() {
    let e = (0, rg.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([F.default], () => {
            let e = F.default.getCurrentUser();
            return (0, rc.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([em.A], () => em.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === rh
                    ? (0, t.jsx)("div", {
                          className: rx.uN,
                          children: (0, t.jsx)(eC.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rp.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tM.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: rh, label: eq.intl.string(eq.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(ru.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rm.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, eQ.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(tB, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eq.intl.string(eq.t.Pdd1nd),
              listboxClassName: rp.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(rv, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var rb = n(211180);
function rj(e) {
    let { displayProfile: l, nickname: n, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(rl.Ay, {
        ...r,
        guildId: l?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: l?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rI(e) {
    let l = (0, s.bG)([em.A], () => em.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rj, { ...e, displayNameStylesOverride: l });
}
function ry(e) {
    let { user: l, displayProfile: n, trailing: i } = e,
        r = l.isProvisional
            ? null
            : (0, t.jsx)(re.A, {
                  user: l,
                  forceUsername: !0,
                  className: rb.a1,
                  usernameClass: rb.eb,
                  discriminatorClass: rb.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rs, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rb.AK, rb.j6),
                children: [r, (0, t.jsx)(rl.Ce, {}), (0, t.jsx)(rd, { displayProfile: n }), (0, t.jsx)(rA, {}), i],
            }),
        ],
    });
}
function rC(e) {
    let { editingMode: l, ...n } = e;
    switch (l) {
        case "read-only":
            return (0, t.jsx)(rj, { ...n });
        case "try-it-out":
            return (0, t.jsx)(rI, { ...n });
        case "edit":
            return (0, t.jsx)(ry, { ...n });
        default:
            return (0, ei.xb)(l);
    }
}
n(321073);
var rN = n(97808),
    rE = n(980707),
    rP = n(477782),
    rk = n(22231),
    rT = n(601255),
    rS = n(562819),
    rO = n(19575),
    rR = n(339984),
    r_ = n(145762),
    rL = n(935485);
let rD = rO.Ay.getEnableHardwareAcceleration() ? rN.Js : rN.eu;
function rM(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rw(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rE.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eq.intl.string(eq.t.YAgq3W),
        children: (0, t.jsx)(rP.rX, { children: n }),
    });
}
function rG(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eb.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([eg.Ay], () => (null != n ? eg.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([em.A], () => em.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : l.avatar,
                f = (0, eu.z5)(g, m),
                p = u && null != l.avatar,
                x = B.Ay.canUsePremiumProfileCustomization(l),
                h = x || null == n,
                v = x || null == n,
                A = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                b = (0, eu.a4)({ user: l }),
                j = (0, eu.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eu.CP)(n ?? void 0),
                C = void 0 !== y,
                N = null != (0, rT.A)(C ? y : j) && (C ? null != y : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        rM(() =>
                            (0, l$.XD)({
                                uploadType: rR.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        rM(() =>
                            (0, rS.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    r(),
                        (0, l$.rM)(null, m, (e) => (0, eQ.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eu.WU)(p ? "reset" : "remove");
                }, [r, n, m, p]),
                S = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rP.Dr,
                                { id: "change-avatar", label: eq.intl.string(eq.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rP.Dr,
                                { id: "change-decoration", label: eq.intl.string(eq.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.twB3fz),
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
                                      rP.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eq.intl.string(eq.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eq.intl.string(eq.t["9rx5GO"]),
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
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(r_.my, r_.vk, rL.kL, { [rL.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rD, { ...r, imageClassName: a()(r_.Lw, rL.HU) }),
                  (0, t.jsx)(l5.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l5.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rw, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rL.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rk.PencilIcon,
                                  "aria-label": eq.intl.string(eq.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rF = n(875262);
function rV(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rE.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eq.intl.string(eq.t.FzU73A),
        children: (0, t.jsx)(rP.rX, { children: n }),
    });
}
function rU(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eu.N2)({ user: l, guildId: n ?? void 0 }),
                c = (0, eu.Xf)({ user: l, guildId: n ?? void 0 }),
                g = (0, eu.Xf)({ user: l, guildId: void 0 }),
                m = (0, lq.sk)("UserProfileModalV2EditableBanner"),
                f = B.Ay.canUsePremiumProfileCustomization(l),
                p = null == n,
                x = p || f,
                h = m && (p || f),
                v = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([em.A], () => em.A.getPendingChanges(n ?? void 0)),
                y = (0, s.bG)([H.A], () =>
                    null != n ? H.A.getGuildMemberProfile(l.id, n)?.banner : H.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([F.default], () => F.default.getCurrentUser()?.banner != null),
                E = (0, s.bG)([H.A], () => H.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([H.A], () => H.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eu.Ac)(A, y),
                T = v && C,
                S = v && E,
                O = v && P,
                R = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                L = (0, eu.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                D = (0, N.A)(L?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, l$.XD)({
                            uploadType: rR.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nk.W)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                V = i.useCallback(() => {
                    r(), (0, l$.rM)(null, y, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, y]),
                U = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                z = i.useCallback(() => {
                    r(),
                        (0, nW.w)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, D, a]),
                W = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rP.Dr,
                                { id: "change-banner", label: eq.intl.string(eq.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rP.Dr,
                                { id: "change-effect", label: eq.intl.string(eq.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rP.Dr,
                                { id: "change-frame", label: eq.intl.string(eq.t["oTSa/q"]), action: z },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.jHlJNS),
                                          action: V,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.tT9n7D),
                                          action: V,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    x &&
                        R &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.zUOlT6),
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
                                      rP.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eq.intl.string(eq.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rP.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eq.intl.string(eq.t["8DfADq"]),
                                          action: W,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [T, f, x, h, S, O, k, R, _, w, G, z, V, U, W]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rF.kL, { [rF.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: rF.Pr }),
                  (0, t.jsx)(l5.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l5.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rV, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rF.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rk.PencilIcon,
                                  "aria-label": eq.intl.string(eq.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rB = n(777480),
    rz = n(107563),
    rW = n(570287);
n(938796);
var rH = n(913453),
    rq = n(667049),
    rK = n(389667),
    rY = n(837531),
    rX = n(186272),
    r$ = n(800609);
let rZ = (e) => e * (2 - e),
    rJ = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function rQ(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function r0(e) {
    let { displayProfile: l, pendingBanner: n } = e;
    if ((0, Q.Nx)()) return null;
    let i = l?.getPreviewBanner(n, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: r$.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function r1(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nO.add(e), () => nO.delete(e)),
            () => nR,
        );
    return null == a ? null : (0, t.jsx)(y.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function r2(e) {
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
            bannerOverride: y,
            accentColorOverride: C,
            profileEffectOverride: N,
            profileFrame: E,
            fadeInProfileFrame: k,
            editingMode: T,
            isLoading: D = !1,
        } = e,
        M = o.id === d.id,
        F = "edit" === T,
        V = i.useRef(null),
        { isHoveringOrFocusing: B } = (0, S.A)(V),
        [z, W] = i.useState(),
        H = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? W("compact-xs") : l <= 380 ? W("compact-sm") : W(void 0);
        }, []);
    (0, A.g)(V, H, [], { fireOnMount: !0 });
    let q = null != z ? rJ[z] : void 0,
        K = i.useMemo(() => v ?? (0, O.A)(), [v]),
        { relationshipType: J, originApplicationId: Q } = (0, s.cf)([w.A], () => ({
            relationshipType: w.A.getRelationshipType(o.id),
            originApplicationId: w.A.getOriginApplicationId(o.id),
        })),
        ea =
            ((l = o.id),
            (n = (0, Y.bG)([$.default], () => $.default.locale)),
            (r = (0, Y.bG)([w.A], () => (w.A.getRelationshipType(l) === Z.eA$.FRIEND ? w.A.getSince(l) : null), [l])),
            (0, X.An)(r, n)),
        es = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        eo = (0, _.q)({ userId: o.id }),
        ed = (0, R.fi)(o.id),
        { appIdentities: eu, connections: ec } = (function (e) {
            let { filteredAppIdentities: l } = (0, et.A)(e),
                n = (0, er.A)(e),
                t = i.useMemo(() => new Set(l?.map((e) => e.application_id) ?? []), [l]),
                r = (0, en.A)([...t]).filter(ei.Vq);
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
                            let l = el.A.get(e.type);
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
        eg = (0, ee.A)(o.id),
        em = ec.length > 0 || eu.length > 0,
        ex = eg.length > 0,
        eh = F ? rU : eI.A,
        ev = p?.guildId ?? u,
        eA = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: q?.avatarSize ?? ep.T[ef.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eC = i.useCallback(() => {
            (0, eM.A)({ user: o, guildId: ev, alt: x });
        }, [x, ev, o]);
    return (0, t.jsxs)("main", {
        className: a()(r$.profile, null != z && r$[z]),
        ref: V,
        "aria-busy": D,
        children: [
            (0, t.jsxs)("div", {
                className: r$.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: r$.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eh, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: q,
                            pendingBanner: y,
                            pendingAccentColor: C,
                        }),
                    }),
                    F
                        ? (0, t.jsx)(rG, { ...eA })
                        : (0, t.jsx)(eb.A, {
                              ...eA,
                              onOpenAvatar: "read-only" === T ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === T && null == I ? tb.$T : void 0,
                          }),
                    (0, t.jsx)(eL.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: h,
                        prompt: M ? K : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: r$.profileBody,
                children: [
                    (0, t.jsx)(rC, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        editingMode: T,
                    }),
                    J === Z.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: r$.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: Q,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: r$.profileBanner,
                            }),
                        }),
                    ed.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            e_.A.Overlay,
                            {
                                className: r$.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: r$.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: r$.profileOverlay,
                            children: (0, t.jsx)(iV.A, {
                                heading: eq.intl.string(eq.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: r$.profileBanner,
                                children: (0, t.jsx)(L.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eR.A, { user: o, className: r$.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: r$.profileOverlay,
                            children: (0, t.jsx)(eO.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: r$.profileButtons,
                        children: (0, t.jsx)(lc, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: J,
                            onClose: b,
                        }),
                    }),
                    M && "try-it-out" !== T && (0, t.jsx)(ey.A, { isPremiumUser: (0, U.ki)(d) }),
                    !es && (0, t.jsx)(e4, { displayProfile: p, isEditable: F }),
                    eo.length > 0 &&
                        (0, t.jsx)(iV.A, {
                            heading: eq.intl.string(eq.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: eo }),
                        }),
                    (0, t.jsx)(iV.A, {
                        heading: eq.intl.string(eq.t.a6XYD9),
                        children: (0, t.jsx)(eT.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iU.In }),
                    }),
                    null != ea &&
                        (0, t.jsx)(iV.A, {
                            heading: eq.intl.string(eq.t.wlTO8v),
                            children: (0, t.jsx)(eN, { friendsSinceDate: ea }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eD.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: r$.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !es &&
                        (F || em) &&
                        (0, t.jsx)(iV.A, {
                            heading: eq.intl.string(eq.t["3fe7U5"]),
                            scrollTargetId: iU.bk.CONNECTIONS,
                            children: (0, t.jsx)(lO, {
                                applicationIdentities: eu,
                                connections: ec,
                                userId: o.id,
                                allowEditing: F,
                                className: r$.profileAppConnections,
                            }),
                        }),
                    !es &&
                        ex &&
                        (0, t.jsx)(iV.A, {
                            heading: eq.intl.string(eq.t.PHjkRE),
                            scrollTargetId: iU.bk.APPS,
                            children: (0, t.jsx)(eX, {
                                applicationRoleConnections: eg,
                                onClose: b,
                                className: r$.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iz, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(r1, { displayProfile: p, profileEffectOverride: N, isHovering: B }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rQ, fadeIn: k }),
        ],
    });
}
function r3(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, forceShowPremium: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, J.A)({ user: l, displayProfile: n, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eo.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function r7(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: y,
            initialTabSection: P,
            initialScrollTarget: S,
            transitionState: O,
            customStatusPrompt: R,
            openedAt: _,
            onClose: L,
            sourceAnalyticsLocations: U = [],
            themeContainerClassName: Y,
        } = e,
        X = l.id === n.id,
        $ = (0, t1.A)(L, X),
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
                m = (0, s.bG)([H.A], () => H.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
                        (0, ed.A)(l, void 0, {
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
    let ei = (0, q.X)("UserProfileModalV2"),
        er = (0, lL.YW)(),
        eo = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        ep = (0, ea.A)(l.id) && ei,
        eb = (0, es.W)(l.id),
        ej = en && !eb,
        eI = ep && !eo && !en && !er,
        ey = er ? "try-it-out" : eI ? "edit" : "read-only",
        {
            pendingThemeColors: eC,
            avatarDecorationOverride: eN,
            avatarOverride: eE,
            bannerOverride: eP,
            accentColorOverride: eT,
            profileEffectOverride: eO,
            profileFrameOverride: eR,
        } = (function (e) {
            let { userId: l, guildId: n, editingMode: t } = e;
            return (0, s.cf)([em.A, F.default, eg.Ay, H.A], () => {
                if ("read-only" === t) return eh;
                let e = F.default.getUser(l);
                if (null == e) return eh;
                let i = em.A.getTryItOutChanges(),
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
                            : em.A.getPendingChanges(n),
                    a = null != n ? eg.Ay.getMember(n, l) : null,
                    s = H.A.getUserProfile(l),
                    o = null != n ? H.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: r.pendingThemeColors,
                    avatarDecorationOverride: (0, eu.us)({
                        userValue: e.avatarDecoration,
                        guildValue: a?.avatarDecoration,
                        pendingValue: r.pendingAvatarDecoration,
                        guildId: n,
                    }),
                    avatarOverride: (0, ec.V7)({ userId: l, image: r.pendingAvatar, size: ex }),
                    bannerOverride: r.pendingBanner,
                    accentColorOverride: r.pendingAccentColor,
                    profileEffectOverride: (0, eu.us)({
                        userValue: s?.profileEffect,
                        guildValue: o?.profileEffect,
                        pendingValue: r.pendingProfileEffect,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eu.us)({
                        userValue: s?.profileFrame,
                        guildValue: o?.profileFrame,
                        pendingValue: r.pendingProfileFrame,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, guildId: Z, editingMode: ey }),
        {
            isExpanded: eL,
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
                    config: { duration: 300, easing: rZ },
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
        eB = ep && !eL,
        ez = ep && (!eL || eD),
        { defaultWishlistId: eW } = (0, s.cf)([H.A], () => ({ defaultWishlistId: H.A.getFirstWishlistId(l.id) }));
    (0, D.fw)({ wishlistId: eW, userId: l.id });
    let eH = (0, eA.fC)(),
        eK = ej && (!ep || !Q),
        eY = ep && en,
        eX = J !== Z || eY || null != eH.interactionType,
        e$ = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rH.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([F.default], () => F.default.getCurrentUser())),
                    (n = (0, s.bG)([H.A], () => H.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, rq.A)(i.id),
                g = (0, rW.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = (0, rK.A)(i.id),
                x = H.A.getFirstWishlistId(i.id),
                h = null != x,
                v = h ? H.A.getWishlistSettings(i.id, x) : null,
                A = (h ? rz.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && m.push({ text: eq.intl.string(eq.t.laViwx), section: iU.RP.WIDGETS }),
                m.push({ text: eq.intl.string(eq.t.chq59f), section: iU.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                y = v?.visibility === rB.a.PUBLIC;
            return (
                (f || (!f && A && y && g && (!j || (j && I)))) &&
                    m.push({ text: eq.intl.string(eq.t["7lZ31J"]), section: iU.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, rY.A)(a), section: iU.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, rX.A)(d), section: iU.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eZ } = (0, I.Ay)([...U, j.A.USER_PROFILE_MODAL_V2]),
        eJ = (0, z.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: y,
            guildId: Z,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eQ = i.useCallback(() => {
            (0, W.Wn)({ analyticsLocations: eZ, ...eJ, action: iU.pt.SHOW_STYLES_PANEL }), ew();
        }, [eZ, eJ, ew]),
        e0 = i.useCallback(() => {
            (0, W.Wn)({ analyticsLocations: eZ, ...eJ, action: iU.pt.HIDE_STYLES_PANEL }), eG();
        }, [eZ, eJ, eG]),
        e1 = (0, K.Ay)(l.id, Z),
        e2 = void 0 !== eR ? eR?.skuId : e1?.profileFrame?.skuId,
        e3 = (0, N.A)(e2, "UserProfileModalV2"),
        e7 = (0, C.A)(e2),
        { profileFrameStyle: e5, profileFrameClassName: e8 } = (0, k.A)(e3);
    (0, E.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: eZ });
    let e9 = (0, s.bG)([F.default], () => B.Ay.canUsePremiumProfileCustomization(F.default.getCurrentUser())),
        e6 = er || (X && null != e1 && e9),
        e4 = V.Ay.useName(e1?.guildId, c, l),
        le = (0, T.GV)(),
        ll = (0, s.bG)([M.A], () => (null != Z ? M.A.getGuild(Z) : null)),
        ln = X
            ? null != ll
                ? eq.intl.formatToPlainString(eq.t.M7OhOF, { guildName: ll.name })
                : eq.intl.string(eq.t.egQPgM)
            : eq.intl.format(eq.t.KRe1Fk, { name: e4 });
    return (0, t.jsx)(I.f5, {
        value: eZ,
        children: (0, t.jsx)(z.of, {
            value: eJ,
            openedAt: _,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eH,
                children: (0, t.jsx)(ev.N, {
                    value: S,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(tb.zr, { [tb.QF]: e1?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": le,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(i1, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(r$.layoutContainer, e8, {
                                        [r$.editingPanelEnabled]: ep,
                                        [r$.editingPanelExpanded]: ep && eL,
                                        [r$.isAnimating]: eD,
                                    }),
                                    style: e5,
                                    children: [
                                        (0, t.jsxs)(r3, {
                                            user: l,
                                            displayProfile: e1,
                                            pendingThemeColors: eC,
                                            forceShowPremium: e6,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tb.Oo,
                                                    children: [
                                                        (0, t.jsx)(lg.A, { onClose: $ }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: le, children: ln }),
                                                        }),
                                                        ez &&
                                                            (0, t.jsx)(iO, {
                                                                buttonRef: eF,
                                                                onClick: eQ,
                                                                className: r$.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eB &&
                                                    (0, t.jsx)("div", {
                                                        className: r$.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iS, {
                                                            innerRef: eV,
                                                            onClick: eQ,
                                                            className: r$.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ep &&
                                                    eM((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(iR, {
                                                                  className: a()(r$.editingPanel, {
                                                                      [r$.isExpanded]: eL,
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
                                                (0, t.jsxs)(e_.A, {
                                                    className: a()(Y, tb.A7, r$.profileContentOuter),
                                                    innerClassName: r$.profileContentInner,
                                                    user: l,
                                                    displayProfile: e1,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: eC,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e6,
                                                    children: [
                                                        (0, t.jsx)(r0, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eS.A, {}),
                                                        !ej && (0, t.jsx)(i4, { className: r$.noticeContainer }),
                                                        eK &&
                                                            (0, t.jsx)("div", {
                                                                className: r$.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iK, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eq.intl.string(eq.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != el
                                                                            ? eq.intl.string(eq.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: el,
                                                                    actionDisabled: !ep && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: r$.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: $ }),
                                                        }),
                                                        (0, t.jsxs)(iZ, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: r$.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(r2, {
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
                                                                    accentColorOverride: eT,
                                                                    profileEffectOverride: eO,
                                                                    profileFrame: e3,
                                                                    fadeInProfileFrame: e7,
                                                                    editingMode: ey,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, t.jsx)(i2.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: e1,
                                                                    guildId: Z,
                                                                    channelId: c,
                                                                    items: e$,
                                                                    initialSection: P,
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
                            (0, t.jsx)(i_.A, { userId: l.id, guildId: Z, className: r$.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function r5(e) {
    return (0, t.jsx)(lL.tM, { children: (0, t.jsx)(r7, { ...e }) });
}
