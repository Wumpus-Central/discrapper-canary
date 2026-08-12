n.d(l, { A: () => rJ });
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
    D = n(93246),
    L = n(561794),
    M = n(71393),
    w = n(994500),
    G = n(351906),
    F = n(562153),
    V = n(474090),
    U = n(183555),
    B = n(47675),
    W = n(321191),
    z = n(591179),
    H = n(999291),
    K = n(702841),
    Y = n(370480),
    X = n(773669),
    q = n(652215),
    $ = n(101928),
    Z = n(837529),
    J = n(346713),
    Q = n(573648),
    ee = n(429913),
    el = n(321078),
    en = n(403362),
    et = n(484509),
    ei = n(487409),
    er = n(83931),
    ea = n(920601),
    es = n(903209),
    eo = n(919395),
    ed = n(101058),
    eu = n(696451),
    ec = n(287809),
    eg = n(836602),
    em = n(996988),
    ef = n(985253);
let ep = (0, d.FT)(ef.T[em.d.MODAL_V2].avatarSize),
    ex = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eh = n(716804),
    ev = n(679492),
    eA = n(718019),
    eb = n(413492),
    ej = n(915614),
    eI = n(744753),
    ey = n(834730);
function eC(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(ey.E, { variant: "text-sm/normal", children: l });
}
var eN = n(361311),
    eE = n(931481),
    eP = n(439053),
    ek = n(743987),
    eT = n(312381),
    eS = n(501193),
    eO = n(383448),
    eR = n(946356),
    e_ = n(983495),
    eD = n(503026),
    eL = n(305385),
    eM = n(109112),
    ew = n(939249),
    eG = n(730134),
    eF = n(169869),
    eV = n(837057),
    eU = n(310419),
    eB = n(889227),
    eW = n(967198),
    ez = n(488995),
    eH = n(375708),
    eK = n(440016);
function eY(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eF.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eK.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eG.A, { user: new eB.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eM._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)(ew.D, {
                        className: eK.OB,
                        onClick: function () {
                            i?.(),
                                (0, eV.transitionToGlobalDiscovery)({
                                    tab: ez.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eU.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(ey.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eK.nk,
                                children: eH.intl.format(eH.t.zIT9YA, { applicationHook: () => l.application.name }),
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
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([X.default], () => X.default.locale),
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
var eq = n(240248),
    e$ = n(308244),
    eZ = n(81400),
    eJ = n(158045),
    eQ = n(84540),
    e0 = n(290386),
    e1 = n(621466),
    e2 = n(231088),
    e7 = n(786826);
function e3(e) {
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
                ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: h })
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
        input: (0, t.jsx)(e7.f, {
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
    { value: "HAIKU", label: () => eH.intl.string(eH.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eH.intl.string(eH.t.CXkR1L) },
    { value: "TELL_US", label: () => eH.intl.string(eH.t.eutr4P) },
    { value: "FUN_FACT", label: () => eH.intl.string(eH.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eH.intl.string(eH.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eH.intl.string(eH.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eH.intl.string(eH.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eH.intl.string(eH.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eH.intl.string(eH.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eH.intl.string(eH.t.u7WCGI) },
];
var e9 = n(307731);
function e6(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        m = eJ.Ay.canUsePremiumProfileCustomization(u),
        f = (0, e0.U)({ location: "user_profile_modal_edit" }),
        {
            value: p,
            previewValue: x,
            onCommit: h,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingBio)),
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
                            let n = e3(l),
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
                    !(0, e1.vq)(i) || a(i) || (null == e3(n.current) && t());
                },
                [l, a, t, n],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: p, onCommit: h }),
        A = !(0, eq.uJ)(x),
        b = (0, s.bG)([eg.A], () => eg.A.getErrors(g)),
        j = (0, eZ.EC)(g),
        I = b.bio?.[0],
        y = j?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e8.length)), e8[e];
        }, []),
        N = c ? eH.intl.string(eH.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e5, {
              ...v,
              preview: A ? (0, t.jsx)(e$.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eH.intl.string(eH.t.lO3n7a),
              label: eH.intl.string(eH.t["YWo+Zd"]),
              emojiPickerIntention: e9.EmojiIntention.PROFILE,
              maxLength: f,
              error: I,
              warning: y,
          })
        : A
          ? (0, t.jsx)(e$.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e4(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eq.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eH.intl.string(eH.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e6, { displayProfile: l }) : (0, t.jsx)(e$.A, { userBio: a, setLineClamp: !1 }),
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
        tooltipText: eH.intl.string(eH.t.b2d0N0),
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
        u = (0, z.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ll.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lu.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === q.eA$.BLOCKED
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
            : o === q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === q.eA$.FRIEND || o === q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(ld.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === q.eA$.NONE && x
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
    let l = Q.A.get(e);
    (0, lb.A)({ platformType: l.type, location: lN }),
        lj.default.track(q.HAw.ACCOUNT_LINK_STEP, {
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
        a = (0, Y.An)(r[lC.pK.CREATED_AT], n),
        s = Q.A.get((0, lA.ML)(l.type));
    return (0, t.jsx)(lS, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(lm.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(ey.E, { variant: "text-sm/normal", className: eK.GW, children: l.name }),
                  })
                : (0, t.jsx)(lf.Anchor, {
                      href: e,
                      className: eK.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eH.intl.string(eH.t.q5jLJB)}`
                              : `${l.name}, ${eH.intl.string(eH.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lv.zV)(q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, ly.h)({ href: e, trusted: s?.type !== q.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eK.vi,
                          children: [
                              (0, t.jsx)(lm.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(ey.E, {
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
            return l.type === q.fg2.REDDIT
                ? (0, eF.xE)(r)
                : l.type === q.fg2.STEAM
                  ? (0, eF.dy)(r)
                  : l.type === q.fg2.BLUESKY || l.type === q.fg2.MASTODON || l.type === q.fg2.TWITTER
                    ? (0, eF.ED)(r)
                    : l.type === q.fg2.PAYPAL
                      ? (0, eF.gZ)(r)
                      : l.type === q.fg2.EBAY
                        ? (0, eF.ub)(r)
                        : l.type === q.fg2.TIKTOK
                          ? (0, eF.HU)(r)
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
                children: (0, t.jsx)(ey.E, {
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
                        alt: eH.intl.formatToPlainString(eH.t.rtm15P, { name: i }),
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
                                (0, t.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: eH.intl.format(eH.t["9rfonh"], { date: s }),
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
        d = (0, s.bG)([X.default], () => X.default.locale);
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
                (0, t.jsxs)(ew.D, {
                    className: eK.qG,
                    onClick: lP,
                    children: [
                        (0, t.jsx)(lx.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eH.intl.string(eH.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lR = n(193885),
    l_ = n(408278),
    lD = n(152298),
    lL = n(554146),
    lM = n(194261),
    lw = n(315629),
    lG = n(789645),
    lF = n(297264),
    lV = n(403581),
    lU = n(812993),
    lB = n(821609),
    lW = n(39623),
    lz = n(890377),
    lH = n(517461),
    lK = n(13875),
    lY = n(131607),
    lX = n(248778),
    lq = n(465794),
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
        defaultConfig: { enabled: !1, showPresetName: !1 },
        variations: { 1: { enabled: !0, showPresetName: !0 }, 2: { enabled: !0, showPresetName: !1 } },
    });
function l0(e) {
    let { location: l } = e;
    return lQ.useConfig({ location: l });
}
var l1 = n(487233),
    l2 = n(120386),
    l7 = n(317097),
    l3 = n(602853),
    l5 = n(922016),
    l8 = n(508274),
    l9 = n(654107),
    l6 = n(930349);
function l4(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l9.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l7.LX)(o[0] ?? a),
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
                accessibleLabel: eH.intl.string(eH.t["/X3fkf"]),
                accessibleValue: (0, l7.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l7.Hl)(c) } }),
            }),
    });
}
var ne = n(450373),
    nl = n(796290);
function nn(e, l) {
    let n = null === e,
        t = void 0 === e;
    return n || (t && null == l) ? eH.intl.string(eH.t["3Xph0/"]) : t ? eH.intl.string(eH.t.keN7ib) : e.description;
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
        r = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l7.LX)(r),
        { hex: s } = (0, ne.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(ni, { src: o }) : (0, t.jsx)(nt, { backgroundColor: s });
}
function na(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(l6.A, {
        ...i,
        accessibleLabel: eH.intl.string(eH.t.yiRnNO),
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
            let n = (0, H.Ay)(e, l),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, K.cf)(
                    [eg.A, ec.default, W.A],
                    () => ({
                        pendingBanner: eg.A.getPendingChanges(l ?? void 0).pendingBanner,
                        mainProfileBanner: ec.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != l ? W.A.getGuildMemberProfile(e, l)?.banner : W.A.getUserProfile(e)?.banner,
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
        f = (0, eo.Ac)(d, g)
            ? {
                  onClick: () => (0, l$.rM)(null, g, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eH.intl.string(m ? eH.t.jHlJNS : eH.t.tT9n7D),
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
    if (null == e) return eH.intl.string(eH.t["3Xph0/"]);
    let l = eH.intl.string((0, nu.A)(e.fontId)),
        n = eH.intl.string(nc.J[e.effectId] ?? nf.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eH.intl.formatToPlainString(eH.t.A2XnI4, { fontName: l, effectName: n, colors: t });
}
function nv(e) {
    let { displayName: l, displayNameStyles: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: np.M,
        children:
            null != n
                ? (0, t.jsx)(ey.E, {
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
                : (0, t.jsx)(ey.E, { variant: nx, className: np.W, color: "text-muted", children: l }),
    });
}
function nA(e) {
    let { displayName: l, displayNameStyles: n, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(l6.A, {
        ...r,
        accessibleLabel: eH.intl.string(eH.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(nv, { displayNameStyles: n, displayName: l, shouldAnimate: i || e }),
    });
}
function nb(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([eu.Ay], () => (null != n ? (eu.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null),
        m = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eo.B0)(l, n ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        y = (0, eo.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: n ?? void 0 }),
        C = (0, eo.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? l.username,
        N = A ? null != h : null != v,
        E =
            null != y && N
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(j ? eH.t.en3ogK : eH.t["Wqmi/h"]),
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
                            text: eH.intl.string(eH.t["5AFxuK"]),
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
                  (0, t.jsx)(ey.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
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
    nD = n(841702),
    nL = n(515718),
    nM = n(195292);
function nw(e) {
    "" !== e.thumbnailPreviewSrc && (0, nL.NN)(e.thumbnailPreviewSrc).catch(() => {});
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
                { categories: t, purchases: r } = (0, nD.Ay)({ stalePurchasesOK: !0 }),
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
function nW(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        c = (0, eo.N2)({ user: l }),
        g = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, eo.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        h = (0, eo.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nP.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(x ? eH.t["SQy/Po"] : eH.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nk.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l6.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eH.intl.string(eH.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eH.intl.string(eH.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eH.intl.string(t ? eH.t["1M4m8w"] : eH.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, nS.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nB, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nz = n(515727),
    nH = n(746002);
function nK(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nH.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nH.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nL.NN)(n).catch(() => {});
        });
}
var nY = n(443727);
function nX(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nq(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nE.Ay)(),
        u = (0, nN.M)(d) ? nV : nU,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nD.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, n_.MG)(r, t), [r, t]);
            return (0, nM.A)({ enabled: l, isInteracting: n, items: a, preload: nK });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, k.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nY.hm, x, { [nF.O]: m }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: f, filterLayer: nX }),
                }),
            (0, t.jsx)("div", {
                className: a()(nY.ti, { [nY.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nY.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n$(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        u = (0, eo.Xf)({ user: l }),
        c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eo.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, eo.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, nP.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(p ? eH.t.j6hZyM : eH.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nz.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l6.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eH.intl.string(eH.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eH.intl.string(eH.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eH.intl.string(t ? eH.t.yFeGB5 : eH.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nS.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nq, {
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
        r = `linear-gradient(to bottom, ${(0, l7.Hl)(l)}, ${(0, l7.Hl)(n)})`;
    return (0, t.jsx)("div", { className: nQ.D7, style: { background: r }, children: i });
}
function n1(e) {
    let { color: l } = e,
        n = (0, l7.Hl)(l),
        i = (0, l7.bJ)(l, 0xffffff) < nJ.Tr.NonText;
    return (0, t.jsx)("div", {
        className: nQ.OS,
        children: (0, t.jsx)("div", { className: a()(nQ.Hy, { [nQ.rY]: i }), style: { backgroundColor: n } }),
    });
}
function n2(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: a, onSelect: s, buttonRef: o } = e,
        d = i.useRef(null),
        u = o ?? d;
    return (0, t.jsx)(l5.Y, {
        targetElementRef: u,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: l, onChange: s, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: n, ...i } = e;
            return (0, t.jsx)(ew.D, {
                ...i,
                innerRef: u,
                className: nQ.Dh,
                onClick: r ? void 0 : n,
                "aria-label": a,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)(n1, { color: l }),
            });
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
        } = e,
        c = i.useRef(null),
        g = (0, l7.Hl)(l),
        m = (0, l7.Hl)(n),
        f = eH.intl.formatToPlainString(eH.t.FquTfm, { colorLabel: g }),
        p = eH.intl.formatToPlainString(eH.t.xOnm4z, { colorLabel: m }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), c.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l6.Y, {
        variant: u,
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)(n0, {
            primaryColor: l,
            secondaryColor: n,
            children: [
                (0, t.jsx)(n2, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: c }),
                (0, t.jsx)(n2, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function n3(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, H.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([eg.A, W.A], () => {
            let e = eg.A.getPendingChanges(n ?? void 0),
                t = W.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (W.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, ed.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, $.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
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
                      accessibleLabel: eH.intl.string(eH.t["L+GmoR"]),
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
var n5 = n(134976);
function n8(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(n5.k, { [n5.V]: n }), children: l }) });
}
var n9 = n(682577),
    n6 = n(689175),
    n4 = n(672905);
function te(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(n9.animated.div, { className: n4.iK, style: e, children: l }) : null));
}
function tl(e) {
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
        className: n4.u6,
        children: [
            (0, t.jsx)(n6.zC, {
                ref: r,
                className: a()(n4.XG, { [n4.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: n4.Qs, children: l }),
            }),
            s && (0, t.jsx)(te, { isDismissed: o, children: n }),
        ],
    });
}
var tn = n(508770),
    tt = n(732280),
    ti = n(811611),
    tr = n(976860),
    ta = n(975732);
function ts() {
    return i.useCallback(() => {
        (0, tr.pX)(q.BVt.NITRO_HOME), (0, ta.closeUserProfileModal)();
    }, []);
}
var to = n(570002),
    td = n(202541),
    tu = n(897260);
function tc() {
    let e = (0, tt.V)();
    return e?.subscription_trial?.sku_id === td.pe.TIER_2 ? e : null;
}
function tg() {
    let e = (0, to.A)(eH.intl.string(eH.t.pj0XBN));
    return (0, t.jsx)(lq.A, { subscriptionTier: td.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tm(e) {
    let { trialOffer: l } = e,
        n = ts(),
        i = (0, eJ.FY)({
            intervalType: l.subscription_trial?.interval,
            intervalCount: l.subscription_trial?.interval_count,
        }),
        r = (0, ti.ux)(l.expires_at);
    return (0, t.jsxs)("div", {
        className: tu.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tu.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eH.intl.string(eH.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tn.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eH.intl.format(eH.t["fF+cgd"], { onClick: n }),
            }),
            (0, t.jsx)(lq.A, { subscriptionTier: td.pe.TIER_2, buttonTextOverride: i, size: "sm", fullWidth: !0 }),
            null != r &&
                (0, t.jsx)(ey.E, { variant: "text-xs/normal", color: "text-muted", className: tu.u8, children: r }),
        ],
    });
}
function tf() {
    let e = tc();
    return null == e ? (0, t.jsx)(tg, {}) : (0, t.jsx)(tm, { trialOffer: e });
}
var tp = n(55619),
    tx = n(37407);
function th() {
    return (0, t.jsxs)("div", {
        className: tx.k,
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eH.intl.string(eH.t.JFY17v),
            }),
            (0, t.jsx)(lB.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eH.intl.string(eH.t.R9GHya),
                onClick: function () {
                    return tp.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tv = n(342866);
function tA(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([eg.A], () => ({
            pendingAvatar: eg.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eg.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tv.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, tv.$)(a, l.avatar),
        showTryItOutSpinAnimation: null == r,
    });
}
function tb(e) {
    let { userId: l, ...n } = e,
        i = (0, H.Ay)(l),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [eg.A, W.A],
            () => ({
                pendingBanner: eg.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eg.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: W.A.getUserProfile(l)?.banner,
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
function tj(e) {
    let { user: l, ...n } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: a,
        } = (0, s.cf)([eg.A], () => ({
            pendingDisplayNameStyles: eg.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eg.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eg.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, s.cf)([ec.default], () => ({ globalName: ec.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eo.lw)({ pendingValue: a, userValue: o }) ?? l.username;
    return (0, t.jsx)(nA, {
        ...n,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: nh(d),
        shouldAlwaysAnimate: null == r,
    });
}
function tI(e) {
    let l = (0, H.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: t,
            pendingAvatar: i,
        } = (0, s.cf)([eg.A], () => ({
            tryItOutThemeColors: eg.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eg.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eg.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, ed.V7)({ userId: e.id, image: void 0 !== t ? t : i }),
        { primaryColor: a, secondaryColor: o } = (0, $.A)({
            user: e,
            displayProfile: l,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: a, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function ty(e) {
    let { user: l, ...n } = e,
        { primaryColor: i, secondaryColor: r } = tI(l);
    if (null == i || null == r) return null;
    let a = (0, l7.Hl)(i),
        s = (0, l7.Hl)(r),
        o = eH.intl.formatToPlainString(eH.t.FquTfm, { colorLabel: a }),
        d = eH.intl.formatToPlainString(eH.t.xOnm4z, { colorLabel: s });
    return (0, t.jsx)(l6.A, {
        ...n,
        variant: "full-height-bar",
        accessibleLabel: eH.intl.string(eH.t.DMeO2X),
        accessibleValue: `${o}, ${d}`,
        renderPreview: () =>
            (0, t.jsxs)(n0, {
                primaryColor: i,
                secondaryColor: r,
                children: [(0, t.jsx)(n1, { color: i }), (0, t.jsx)(n1, { color: r })],
            }),
    });
}
var tC = n(207803);
function tN(e) {
    let { user: l } = e,
        { primaryColor: n, secondaryColor: r, pendingAvatarSrc: a, tryItOutThemeColors: s } = tI(l),
        o = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : l.getAvatarURL(void 0, 80),
        u = (0, l9.rh)(d, o, !1),
        c = i.useCallback((e) => {
            (0, tC.a)(e);
        }, []);
    return null == n || null == r
        ? null
        : (0, t.jsx)(n7, {
              variant: "full-height-bar",
              primaryColor: n,
              secondaryColor: r,
              onSelectPrimaryColor: (e) => {
                  (s?.[0] == null || e !== s[0]) && c([e, r]);
              },
              onSelectSecondaryColor: (e) => {
                  (s?.[1] == null || e !== s[1]) && c([n, e]);
              },
              suggestedColors: u,
          });
}
var tE = n(502096);
function tP(e) {
    let { user: l, mode: n } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        { goToPremiumTryItOut: s } = (0, lD.WQ)(),
        o = (function () {
            let { analyticsLocations: e } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, nd.L)({ analyticsLocations: e, isPremiumTryItOut: !0, stackingBehavior: "stack" });
            }, [e]);
        })(),
        d = (0, ns._)({ isPremiumTryItOut: !0, returnRef: r }),
        u = (0, ns.P)({ isPremiumTryItOut: !0, returnRef: a }),
        c = "edit" === n;
    return (0, t.jsxs)("div", {
        className: tE.T,
        children: [
            (0, t.jsx)(nI, {
                heading: eH.intl.string(eH.t.NEzEws),
                children: (0, t.jsx)(tj, { user: l, onClick: c ? o : s, "aria-haspopup": c ? "dialog" : void 0 }),
            }),
            (0, t.jsx)(nI, {
                heading: eH.intl.string(eH.t.DMeO2X),
                children: c ? (0, t.jsx)(tN, { user: l }) : (0, t.jsx)(ty, { user: l, onClick: s }),
            }),
            (0, t.jsx)(nI, {
                heading: eH.intl.string(eH.t.Vgdusv),
                children: (0, t.jsx)(tb, {
                    userId: l.id,
                    buttonRef: a,
                    onClick: c ? u : s,
                    "aria-haspopup": c ? "dialog" : void 0,
                }),
            }),
            (0, t.jsx)(nI, {
                heading: eH.intl.string(eH.t.vtFfPX),
                children: (0, t.jsx)(tA, {
                    user: l,
                    buttonRef: r,
                    onClick: c ? d : s,
                    "aria-haspopup": c ? "dialog" : void 0,
                }),
            }),
        ],
    });
}
var tk = n(847374),
    tT = n(111159),
    tS = n(548118),
    tO = n(711014),
    tR = n(540637),
    t_ = n(801461),
    tD = n(44482),
    tL = n(844222),
    tM = n(561392),
    tw = n(499957),
    tG = n(15626),
    tF = n(37712);
function tV(e) {
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
            let { reducedMotion: e } = i.useContext(tL.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tM.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tw.DL)(o, {
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
        C = i.useContext(tG._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, t_.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        D = i.useRef(!1),
        L = i.useMemo(() => l.filter((e) => (0, t_.fI)(e.value, [n])), [n, l]),
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
                    if (D.current) {
                        D.current = !1;
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
        { activeIndex: U, handleKeyDown: B } = (0, tR.l)(!0, l),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = U !== W.current;
        (W.current = U), null != U && e && (O(U), x || ((_.current = !0), h(!0)));
    }, [U, x, h]);
    let z = i.useCallback(
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
                        (D.current = !0), h(!1);
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
            l.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), O(null), (_.current = !1))
            : ((K.current = !0), _.current || O(l.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let Y = {
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
        onKeyDown: z,
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
            p({ buttonRef: k, selectButtonProps: Y }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: y,
                    className: a()(tF.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tR.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tD.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tU = n(643213);
let tB = "MAIN_PROFILE";
function tW(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tS.Ay, { className: tU.$f, guild: l, size: tS.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tz(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tU.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tU.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tU.qL,
                children: [
                    (0, t.jsx)(ey.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(ey.E, {
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
function tH(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(ew.D, {
        innerRef: r,
        className: a()(tU.L5, { [tU.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(ey.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tU.v9,
                children: n,
            }),
            (0, t.jsx)(tk.a, {
                className: tU.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tK(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tO.Ay], () => tO.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([eW.A], () => {
            let e = eW.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tO.Ay], () => {
            let e = {};
            for (let l of tO.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tB,
                    label: eH.intl.string(eH.t["2p07FR"]),
                    value: tB,
                    leading: (0, t.jsx)(tT.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tW, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(en.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(tW, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tB,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let n = e === tB ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tV, {
        className: tU.kL,
        label: eH.intl.string(eH.t.rki38K),
        listboxClassName: tU.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tz, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tH, { leading: p.value === tB ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tY = n(765178),
    tX = n(461797),
    tq = n(469054),
    t$ = n(601298);
function tZ() {
    let { preset: e, setPreset: l } = (0, lD.RQ)(),
        n = i.useCallback((e) => {
            let l = (0, tX.Wt)(e);
            (0, tC.w5)({
                banner: (0, t$.X)({
                    assetOrigin: tq.E.NEW_ASSET,
                    imageUri: l.getBannerSrc(!1),
                    staticImageUri: l.getBannerSrc(!0),
                    description: l.getBannerAltText(),
                    originalAsset: void 0,
                }),
                themeColors: l.themeColors,
                displayNameStyles: l.displayNameStyles,
            });
        }, []);
    i.useEffect(() => {
        eg.A.hasTryItOutChanges() || n(e);
    }, [n, e]);
    let t = i.useCallback(() => {
        let t = (0, tX.B$)(e),
            i = (0, tX.Wt)(t);
        lj.default.track(q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
            l(t),
            n(t),
            tY.O.announce(eH.intl.formatToPlainString(eH.t.M2Hj9s, { presetName: i.getName() }));
    }, [e, l, n]);
    return { preset: e, onShuffle: t };
}
var tJ = n(23722),
    tQ = n(49999),
    t0 = n(844939);
let t1 = "profile-editing-nameplate-error",
    t2 = "profile-editing-avatar-error",
    t7 = "profile-editing-avatar-decoration-error",
    t3 = "profile-editing-banner-error",
    t5 = "profile-editing-display-name-style-error";
function t8(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(t0.D0, l),
        children: (0, t.jsx)("div", { className: t0.ZN, children: (0, t.jsx)(lM.X, { size: "xs" }) }),
    });
}
function t9() {
    let e = (0, to.A)(eH.intl.string(eH.t.pj0XBN)),
        l = ts();
    return (0, t.jsxs)(lw.h, {
        color: "nitro-pink",
        className: t0.Lu,
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eH.intl.format(eH.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(lq.A, { subscriptionTier: td.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function t6() {
    let [e, l] = (0, lH.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: t0.X6,
              children: [
                  (0, t.jsx)(ey.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eH.intl.string(eH.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ew.D, {
                      "aria-label": eH.intl.string(eH.t.rSe9ra),
                      className: t0.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lG.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function t4() {
    let e = ts(),
        l = (0, to.A)(eH.intl.string(eH.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: t0.eW,
        children: [
            (0, t.jsxs)("div", {
                className: t0.tm,
                children: [
                    (0, t.jsx)(lF.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eH.intl.string(eH.t.bO0TOe),
                    }),
                    (0, t.jsx)(ey.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eH.intl.format(eH.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(lq.A, { subscriptionTier: td.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(t8, { className: t0.nd }),
        ],
    });
}
function ie() {
    return (0, t.jsx)(ey.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: t0.BJ,
        "aria-hidden": !0,
        children: eH.intl.format(eH.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lV.t, { size: "xxs", color: "currentColor", className: t0.qp }),
        }),
    });
}
function il(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nI, {
        heading: eH.intl.string(eH.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nC.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t1 : void 0 }),
            (0, t.jsx)(ny, { id: t1, message: r }),
        ],
    });
}
function it(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nI, {
        heading: eH.intl.string(eH.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l1.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t2 : void 0 }),
            (0, t.jsx)(l2.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? t7 : void 0 }),
            (0, t.jsx)(ny, { id: t2, message: (0, l$.d3)(r) }),
            (0, t.jsx)(ny, { id: t7, message: a }),
        ],
    });
}
function ii(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lX.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, lY.kn)(a && !i ? [lL.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lL.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nI, {
        heading: eH.intl.string(eH.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lU.Lp, { text: eH.intl.string(eH.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nb, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? t5 : void 0,
                onOpen: d ? () => o(tQ.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(ny, { id: t5, message: r }),
        ],
    });
}
function ir(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nI, {
        heading: eH.intl.string(eH.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n3, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(no, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? t3 : void 0 }),
            (0, t.jsx)(ny, { id: t3, message: (0, l$.d3)(a) }),
        ],
    });
}
function ia(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nI, {
        heading: eH.intl.string(eH.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(l4, { user: l, disabled: n }),
    });
}
function is(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lK.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nI, {
        heading: eH.intl.string(r ? eH.t["Vfbar/"] : eH.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nW, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n$, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let io = "premium-try-it-out-description";
function id(e) {
    let { user: l, buttonRef: n } = e,
        i = ts(),
        { goToPremiumTryItOut: r } = (0, lD.WQ)();
    return (
        tZ(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": io,
            className: t0.DX,
            children: [
                (0, t.jsx)(t8, { className: t0.x$ }),
                (0, t.jsxs)("div", {
                    className: t0.sb,
                    children: [
                        (0, t.jsx)(ey.E, {
                            id: io,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eH.intl.format(eH.t.TmfgI2, { onClick: i }),
                        }),
                        (0, t.jsx)(lB.$, {
                            buttonRef: n,
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lW.b,
                            text: eH.intl.string(eH.t.PxUx8e),
                            onClick: r,
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tP, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function iu(e) {
    let {
            user: l,
            panelId: n,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: a,
            isEditingDisabled: o,
            collapseButtonRef: d,
            premiumTryItOutButtonRef: u,
            onClosePanel: c,
            onSelectGuildId: g,
        } = e,
        m = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { enabled: f } = l0({ location: "DefaultEditingPanelView" }),
        p = (0, tJ.A)(g),
        x = null != i,
        h = eJ.Ay.canUsePremiumProfileCustomization(l),
        v = x && !h,
        A = !h && !x,
        b = A && f,
        j = x && !h && !m,
        I = a || o,
        y = (0, s.bG)([eg.A], () => eg.A.getErrors(i)),
        C = y.nameplate?.[0] ?? y.nameplate_sku_id?.[0],
        N = y.avatar?.[0],
        E = y.avatar_decoration_sku_id?.[0],
        P = y.banner?.[0],
        k = y.display_name_font_id?.[0] ?? y.display_name_effect_id?.[0] ?? y.display_name_colors?.[0],
        T = lJ.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        S = h || x ? "inline" : b ? "hidden" : T ? "end" : "hidden",
        O = (0, t.jsx)(ii, { user: l, guildId: i, disabled: I || v, errorMessage: k });
    return (0, t.jsxs)(n8, {
        hasGradientBackground: j,
        children: [
            (0, t.jsxs)("div", {
                className: t0.wx,
                children: [
                    (0, t.jsx)(lm.m, {
                        text: eH.intl.string(eH.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(ew.D, {
                            innerRef: d,
                            className: t0.cS,
                            "aria-label": eH.intl.string(eH.t["l/A351"]),
                            onClick: c,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lz.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tK, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: p,
                        loading: a,
                        disabled: m,
                    }),
                ],
            }),
            m
                ? (0, t.jsx)(th, {})
                : (0, t.jsx)(tl, {
                      floatingFooter: A && !b ? (0, t.jsx)(t9, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              x && (h ? (0, t.jsx)(t6, {}) : (0, t.jsx)(t4, {})),
                              h && (0, t.jsx)(ie, {}),
                              (0, t.jsx)(il, { user: l, guildId: i, disabled: I || v, errorMessage: C }),
                              (0, t.jsx)(it, {
                                  user: l,
                                  guildId: i,
                                  disabled: I || v,
                                  avatarErrorMessage: N,
                                  avatarDecorationErrorMessage: E,
                              }),
                              "inline" === S && O,
                              h || x
                                  ? (0, t.jsx)(ir, {
                                        user: l,
                                        guildId: i,
                                        disabled: I || v,
                                        canUsePremiumProfileFeatures: h,
                                        bannerErrorMessage: P,
                                    })
                                  : (0, t.jsx)(ia, { user: l, disabled: I || v }),
                              (0, t.jsx)(is, { user: l, guildId: i, disabled: I || v }),
                              "end" === S && O,
                              b &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(id, { user: l, buttonRef: u }), (0, t.jsx)(tf, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var ic = n(477155),
    ig = n(926321),
    im = n(663417),
    ip = n(597563);
let ix = "shuffle-options-a11y-description";
function ih() {
    let { preset: e, onShuffle: l } = tZ(),
        { showPresetName: n } = l0({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, tX.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: ip.kL,
              children: [
                  (0, t.jsx)(lm.m, {
                      text: eH.intl.string(eH.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(l_.K, {
                          icon: im.f,
                          "aria-label": eH.intl.string(eH.t.VzqqFC),
                          "aria-describedby": ix,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: ix, children: eH.intl.string(eH.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: ip.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: ip.L_, src: a }),
                          (0, t.jsxs)(ey.E, {
                              className: ip._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eH.intl.formatToPlainString(eH.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: ip.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lB.$, {
                      icon: ig.j,
                      text: eH.intl.string(eH.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": ix,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: ix, children: eH.intl.string(eH.t.bBRdiB) }),
              ],
          });
}
var iv = n(451125);
function iA(e) {
    let { user: l, onBack: n } = e,
        r = i.useRef(null),
        a = tc();
    return (
        i.useEffect(() => {
            r.current?.focus();
        }, []),
        (0, t.jsxs)(n8, {
            children: [
                (0, t.jsxs)("div", {
                    className: iv.wx,
                    children: [
                        (0, t.jsx)(ew.D, {
                            innerRef: r,
                            "aria-label": eH.intl.string(eH.t["4IYwrw"]),
                            onClick: n,
                            className: iv.Gv,
                            children: (0, t.jsx)(ic.r, { size: "md", color: "currentColor" }),
                        }),
                        (0, t.jsx)(lF.D, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: iv.R_,
                            children: eH.intl.string(eH.t.PxUx8e),
                        }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: iv.Ij,
                            children: eH.intl.string(eH.t.X0ir7L),
                        }),
                        (0, t.jsx)("div", { className: iv.ZZ, children: (0, t.jsx)(ih, {}) }),
                    ],
                }),
                (0, t.jsx)(tl, {
                    children: (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(tP, { user: l, mode: "edit" }),
                            null != a && (0, t.jsx)(tm, { trialOffer: a }),
                        ],
                    }),
                }),
            ],
        })
    );
}
var ib = n(450579);
let ij = "user-profile-editing-panel",
    iI = "profile-modal-editing-panel-heading";
function iy(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(lm.m, {
        text: eH.intl.string(eH.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ew.D, {
            innerRef: i,
            "aria-label": eH.intl.string(eH.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": ij,
            className: a()(ib.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lR.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iC(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lm.m, {
            text: eH.intl.string(eH.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(l_.K, {
                buttonRef: i,
                "aria-label": eH.intl.string(eH.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": ij,
                icon: lR.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iN(e) {
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
        p = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        x = (0, lD.YW)(),
        { goBack: h } = (0, lD.WQ)(),
        v = i.useRef(null),
        A = i.useCallback(() => {
            h(), requestAnimationFrame(() => v.current?.focus());
        }, [h]);
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: ij,
              "aria-labelledby": iI,
              className: a()(ib.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: ib.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iI, children: eH.intl.string(eH.t["L+ch00"]) }),
                      }),
                      x
                          ? (0, t.jsx)(iA, { user: p, onBack: A })
                          : (0, t.jsx)(iu, {
                                panelId: ij,
                                user: p,
                                selectedGuildId: l,
                                originGuildId: n,
                                isLoading: o,
                                isEditingDisabled: d,
                                collapseButtonRef: g,
                                onClosePanel: u,
                                onSelectGuildId: r,
                                premiumTryItOutButtonRef: v,
                            }),
                  ],
              }),
          });
}
var iE = n(271383),
    iP = n(347805),
    ik = n(629403),
    iT = n(612630),
    iS = n(372638),
    iO = n(674947);
function iR(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iT.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await ik.A.updateNote(l, e);
                    } catch {
                        f(eH.intl.string(eH.t.F8FvUy));
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
            ? (0, t.jsx)(ey.E, { variant: "text-sm/normal", color: "text-default", className: iO.t, children: p })
            : null;
    return (0, t.jsx)(iS.f, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eH.intl.string(eH.t.PbMNh2),
        label: eH.intl.string(eH.t.PbMNh2),
        placeholder: h ? eH.intl.string(eH.t["WLKx/9"]) : eH.intl.string(eH.t.VBhOe2),
        maxLength: q.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var i_ = n(83013),
    iD = n(518477),
    iL = n(273781);
function iM(e) {
    let { userId: l } = e,
        n = (0, eh.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? iR : iP.A;
    return (0, t.jsx)(i_.A, {
        heading: eH.intl.string(eH.t["mQKv+v"]),
        scrollTargetId: iD.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iL.N : iL.w,
            autoFocus: n === iD.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iw = n(123292),
    iG = n(263293),
    iF = n(871645);
function iV(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iG.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iF.oR, iG.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iG.Kk, children: l }),
                    (0, t.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iG.hP,
                            children: (0, t.jsx)(iw.Q, {
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
var iU = n(346055),
    iB = n(289873),
    iW = n(103964);
function iz(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tY.O.announce(eH.intl.string(eH.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iU.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iW.f, l && iW.z),
                    children: n && (0, t.jsx)(iB.y, { type: iB.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var iH = n(568602),
    iK = n(625494),
    iY = n(61881);
function iX(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([iY.A, eg.A], () => iY.A.hasUnsavedChanges() || eg.A.hasUnsavedChanges());
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
                iK._.subscribe(q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    iK._.unsubscribe(q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(iH.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var iq = n(94160),
    i$ = n(933832),
    iZ = n(972213),
    iJ = n(97483),
    iQ = n(775602),
    i0 = n(384377);
let i1 = {
        [iD.jM.WIDGET_ADDED]: {
            message: eH.intl.string(eH.t.fFP1Uy),
            icon: (0, t.jsx)(i$.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iD.jM.WIDGET_REMOVED]: {
            message: eH.intl.string(eH.t.zzsK7h),
            icon: (0, t.jsx)(i$.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iD.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eH.intl.string(eH.t["84MExs"]),
            icon: (0, t.jsx)(iZ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iJ.Ck.FAILURE,
        },
        [iD.jM.SOMETHING_WENT_WRONG]: {
            message: eH.intl.string(eH.t.F8FvUy),
            icon: (0, t.jsx)(iZ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iJ.Ck.FAILURE,
        },
    },
    i2 = (e) => {
        let { className: l } = e,
            n = (0, i0.fu)(),
            r = (0, s.bG)([iQ.Ay], () => iQ.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(i1[n]), tY.O.announce(i1[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, i0.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, i0.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(n9.animated.div, { className: l, style: e, children: (0, t.jsx)(iV, { ...d }) }),
                ),
            })
        );
    };
var i7 = n(297413),
    i3 = n(465829),
    i5 = n(826673),
    i8 = n(576705),
    i9 = n(761431),
    i6 = n(530895);
function i4(e) {
    return null == e || "" === e ? void 0 : e;
}
function re(e) {
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
        j = eJ.Ay.canUsePremiumProfileCustomization(p),
        y = (0, lX.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([i8.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: i8.A.can(q.xBc.CHANGE_NICKNAME, e) || i8.A.can(q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((n = null != (l = h?.guildId ?? null)),
        (r = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([eu.Ay], () => (null != l ? (eu.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = i4(c) ?? i4(r) ?? p.username),
        (f = i4(c) ?? p.username),
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
        T = (0, i9.TX)({ value: E, onCommit: k, disabled: !C }),
        { isEditing: S, handleCommit: O } = T,
        R = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        _ = (0, eZ.EC)(b ?? null),
        D = A ? R.nick?.[0] : R.global_name?.[0],
        L = _?.nick?.[0],
        w = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(b).pendingDisplayNameStyles),
        G = eH.intl.string(A ? eH.t.mq6Cg9 : eH.t.XuZU7A),
        F = A ? eH.intl.string(eH.t.YcDKr8) : p.username,
        V = eH.intl.string(A ? eH.t["g7OSZ/"] : eH.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && O(),
                    y &&
                        (0, i5.Dr)(lL.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: tQ.i.INDIRECT_ACTION,
                        }),
                    (0, nd.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [S, O, v, b, y],
        ),
        W = {
            icon: lR.V,
            tooltip: eH.intl.string(eH.t.lqKKI2),
            "aria-label": eH.intl.string(eH.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: U,
        },
        z =
            A && !C && N
                ? (0, t.jsx)(lm.m, {
                      text: eH.intl.string(eH.t.gzjxQi),
                      children: (0, t.jsx)(ew.D, {
                          tag: "span",
                          className: i6.C,
                          children: (0, t.jsx)(lM.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eH.intl.string(eH.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != P
                ? (0, t.jsx)(i3.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: i6.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(i9.yV, {
        ...T,
        preview: H,
        placeholder: F,
        editButtonAriaLabel: V,
        label: G,
        maxLength: q.zzC,
        trailing: C && j ? W : void 0,
        error: D,
        warning: L,
        disabled: !C,
    });
}
var rl = n(688960);
function rn(e) {
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
        (r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingPronouns)),
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
        f = (0, i9.TX)({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eH.intl.string(x ? eH.t.AXiE0i : eH.t["76Aqhl"]);
    return (0, t.jsx)(i9.yV, {
        ...f,
        size: "compact",
        className: a()(rl.k, p && rl.J),
        preview: h ? (0, t.jsx)(i3.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eH.intl.string(eH.t.h6VAO7),
        label: eH.intl.string(eH.t["rniRE+"]),
        placeholder: v,
        maxLength: q.VE5,
    });
}
var rt = n(145497),
    ri = n(685073),
    rr = n(318785),
    ra = n(534400),
    rs = n(743981),
    ro = n(573109),
    rd = n(832344);
let ru = "no-server-tag";
function rc(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ew.D, {
        innerRef: l,
        className: a()(ro.L5, { [ro.wK]: o }),
        ...s,
        children: (0, t.jsxs)(ey.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: ro.W3,
            tag: "span",
            children: [
                o
                    ? eH.intl.string(eH.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  ra.Z9,
                                  {
                                      src: (0, ri.gC)(n, r, rs.Sl.SIZE_14),
                                      size: rs.Sl.SIZE_14,
                                      className: ro.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, ri.gC)(n, r, rs.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tk.a, { size: "xs", color: "currentColor", className: ro.u4 }),
            ],
        }),
    });
}
function rg() {
    let e = (0, rr.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, ri.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ru
                    ? (0, t.jsx)("div", {
                          className: rd.uN,
                          children: (0, t.jsx)(ey.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ro.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tD.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ru, label: eH.intl.string(eH.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rt.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(ra.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
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
        : (0, t.jsx)(tV, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eH.intl.string(eH.t.Pdd1nd),
              listboxClassName: ro.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(rc, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var rm = n(211180);
function rf(e) {
    let { displayProfile: l, nickname: n, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(i3.Ay, {
        ...r,
        guildId: l?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: l?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rp(e) {
    let l = (0, s.bG)([eg.A], () => eg.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(rf, { ...e, displayNameStylesOverride: l });
}
function rx(e) {
    let { user: l, displayProfile: n, trailing: i } = e,
        r = l.isProvisional
            ? null
            : (0, t.jsx)(i7.A, {
                  user: l,
                  forceUsername: !0,
                  className: rm.a1,
                  usernameClass: rm.eb,
                  discriminatorClass: rm.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(re, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rm.AK, rm.j6),
                children: [r, (0, t.jsx)(i3.Ce, {}), (0, t.jsx)(rn, { displayProfile: n }), (0, t.jsx)(rg, {}), i],
            }),
        ],
    });
}
function rh(e) {
    let { editingMode: l, ...n } = e;
    switch (l) {
        case "read-only":
            return (0, t.jsx)(rf, { ...n });
        case "try-it-out":
            return (0, t.jsx)(rp, { ...n });
        case "edit":
            return (0, t.jsx)(rx, { ...n });
        default:
            return (0, en.xb)(l);
    }
}
n(321073);
var rv = n(97808),
    rA = n(980707),
    rb = n(477782),
    rj = n(22231),
    rI = n(601255),
    ry = n(562819),
    rC = n(19575),
    rN = n(339984),
    rE = n(145762),
    rP = n(935485);
let rk = rC.Ay.getEnableHardwareAcceleration() ? rv.Js : rv.eu;
function rT(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rA.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eH.intl.string(eH.t.YAgq3W),
        children: (0, t.jsx)(rb.rX, { children: n }),
    });
}
function rS(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eA.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([eu.Ay], () => (null != n ? eu.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = u ? c?.avatar : l.avatar,
                f = (0, eo.z5)(g, m),
                p = u && null != l.avatar,
                x = eJ.Ay.canUsePremiumProfileCustomization(l),
                h = x || null == n,
                v = x || null == n,
                A = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                b = (0, eo.a4)({ user: l }),
                j = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, eo.CP)(n ?? void 0),
                C = void 0 !== y,
                N = null != (0, rI.A)(C ? y : j) && (C ? null != y : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        (0, l$.XD)({
                            uploadType: rN.HL.AVATAR,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        (0, ry.L)({
                            analyticsLocations: d,
                            guild: A ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    r(),
                        (0, l$.rM)(null, m, (e) => (0, eQ.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(p ? "reset" : "remove");
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
                                rb.Dr,
                                { id: "change-avatar", label: eH.intl.string(eH.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rb.Dr,
                                { id: "change-decoration", label: eH.intl.string(eH.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.twB3fz),
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
                                      rb.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["9rx5GO"]),
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
        ? (0, t.jsx)(eA.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rE.my, rE.vk, rP.kL, { [rP.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rk, { ...r, imageClassName: a()(rE.Lw, rP.HU) }),
                  (0, t.jsx)(l5.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l5.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rT, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rP.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rj.R,
                                  "aria-label": eH.intl.string(eH.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rO = n(875262);
function rR(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rA.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eH.intl.string(eH.t.FzU73A),
        children: (0, t.jsx)(rb.rX, { children: n }),
    });
}
function r_(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
                c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
                g = (0, eo.Xf)({ user: l, guildId: void 0 }),
                m = (0, lK.sk)("UserProfileModalV2EditableBanner"),
                f = eJ.Ay.canUsePremiumProfileCustomization(l),
                p = null == n,
                x = p || f,
                h = m && (p || f),
                v = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0)),
                y = (0, s.bG)([W.A], () =>
                    null != n ? W.A.getGuildMemberProfile(l.id, n)?.banner : W.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                E = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eo.Ac)(A, y),
                T = v && C,
                S = v && E,
                O = v && P,
                R = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                D = (0, eo.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                L = (0, N.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, l$.XD)({
                            uploadType: rN.HL.BANNER,
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
                F = i.useCallback(() => {
                    r(), (0, l$.rM)(null, y, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, y]),
                V = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nz.w)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, L, a]),
                B = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rb.Dr,
                                { id: "change-banner", label: eH.intl.string(eH.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rb.Dr,
                                { id: "change-effect", label: eH.intl.string(eH.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rb.Dr,
                                { id: "change-frame", label: eH.intl.string(eH.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.tT9n7D),
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
                                      rb.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        _ &&
                        e.push(
                            O
                                ? (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rb.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [T, f, x, h, S, O, k, R, _, w, G, U, F, V, B]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(ej.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rO.kL, { [rO.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ej.A, { ...e, className: rO.Pr }),
                  (0, t.jsx)(l5.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l5.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rR, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rO.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rj.R,
                                  "aria-label": eH.intl.string(eH.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rD = n(777480),
    rL = n(107563),
    rM = n(570287);
n(938796);
var rw = n(913453),
    rG = n(667049),
    rF = n(389667),
    rV = n(837531),
    rU = n(186272),
    rB = n(800609),
    rW = n(128604);
let rz = (e) => e * (2 - e),
    rH = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function rK(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function rY(e) {
    let { displayProfile: l, pendingBanner: n } = e;
    if ((0, Z.Nx)()) return null;
    let i = l?.getPreviewBanner(n, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: rB.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function rX(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nO.add(e), () => nO.delete(e)),
            () => nR,
        );
    return null == a ? null : (0, t.jsx)(y.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function rq(e) {
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
            isLoading: L = !1,
        } = e,
        M = o.id === d.id,
        F = "edit" === T,
        U = i.useRef(null),
        { isHoveringOrFocusing: B } = (0, S.A)(U),
        [W, z] = i.useState(),
        H = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? z("compact-xs") : l <= 380 ? z("compact-sm") : z(void 0);
        }, []);
    (0, A.g)(U, H, [], { fireOnMount: !0 });
    let $ = null != W ? rH[W] : void 0,
        Z = i.useMemo(() => v ?? (0, O.A)(), [v]),
        { relationshipType: ei, originApplicationId: er } = (0, s.cf)([w.A], () => ({
            relationshipType: w.A.getRelationshipType(o.id),
            originApplicationId: w.A.getOriginApplicationId(o.id),
        })),
        ea =
            ((l = o.id),
            (n = (0, K.bG)([X.default], () => X.default.locale)),
            (r = (0, K.bG)([w.A], () => (w.A.getRelationshipType(l) === q.eA$.FRIEND ? w.A.getSince(l) : null), [l])),
            (0, Y.An)(r, n)),
        es = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        eo = (0, _.q)({ userId: o.id }),
        ed = (0, R.fi)(o.id),
        { appIdentities: eu, connections: ec } = (function (e) {
            let { filteredAppIdentities: l } = (0, el.A)(e),
                n = (0, et.A)(e),
                t = i.useMemo(() => new Set(l?.map((e) => e.application_id) ?? []), [l]),
                r = (0, ee.A)([...t]).filter(en.Vq);
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
                            let l = Q.A.get(e.type);
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
        eg = (0, J.A)(o.id),
        ep = ec.length > 0 || eu.length > 0,
        ex = eg.length > 0,
        eh = F ? r_ : ej.A,
        ev = F ? rS : eA.A,
        ey = p?.guildId ?? u,
        eP = i.useCallback(() => {
            (0, eL.A)({ user: o, guildId: ey, alt: x });
        }, [x, ey, o]);
    return (0, t.jsxs)("main", {
        className: a()(rB.profile, null != W && rB[W]),
        ref: U,
        "aria-busy": L,
        children: [
            (0, t.jsxs)("div", {
                className: rB.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: rB.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eh, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: em.d.MODAL_V2,
                            specOverrides: $,
                            pendingBanner: y,
                            pendingAccentColor: C,
                        }),
                    }),
                    (0, t.jsx)(ev, {
                        user: o,
                        displayProfile: p,
                        guildId: u,
                        channelId: f,
                        avatarSize: $?.avatarSize ?? ef.T[em.d.MODAL_V2].avatarSize,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                        onOpenAvatar: "read-only" === T ? eP : void 0,
                    }),
                    (0, t.jsx)(e_.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: em.d.MODAL_V2,
                        hasEntered: h,
                        prompt: M ? Z : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: rB.profileBody,
                children: [
                    (0, t.jsx)(rh, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(eb.A, { displayProfile: p, themeType: em.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        editingMode: T,
                    }),
                    ei === q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eR.A.Overlay, {
                            className: rB.profileOverlay,
                            children: (0, t.jsx)(eE.A, {
                                user: o,
                                applicationId: er,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: rB.profileBanner,
                            }),
                        }),
                    ed.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eR.A.Overlay,
                            {
                                className: rB.profileOverlay,
                                children: (0, t.jsx)(eE.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: rB.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eR.A.Overlay, {
                            className: rB.profileOverlay,
                            children: (0, t.jsx)(i_.A, {
                                heading: eH.intl.string(eH.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: rB.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eO.A, { user: o, className: rB.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eR.A.Overlay, {
                            className: rB.profileOverlay,
                            children: (0, t.jsx)(eS.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: rB.profileButtons,
                        children: (0, t.jsx)(lc, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: ei,
                            onClose: b,
                        }),
                    }),
                    M && "try-it-out" !== T && (0, t.jsx)(eI.A, { isPremiumUser: (0, V.ki)(d) }),
                    !es && (0, t.jsx)(e4, { displayProfile: p, isEditable: F }),
                    eo.length > 0 &&
                        (0, t.jsx)(i_.A, {
                            heading: eH.intl.string(eH.t["Uv/eTx"]),
                            children: (0, t.jsx)(eN.A, { applicationIds: eo }),
                        }),
                    (0, t.jsx)(i_.A, {
                        heading: eH.intl.string(eH.t.a6XYD9),
                        children: (0, t.jsx)(ek.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iD.In }),
                    }),
                    null != ea &&
                        (0, t.jsx)(i_.A, {
                            heading: eH.intl.string(eH.t.wlTO8v),
                            children: (0, t.jsx)(eC, { friendsSinceDate: ea }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eD.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: rB.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !es &&
                        (F || ep) &&
                        (0, t.jsx)(i_.A, {
                            heading: eH.intl.string(eH.t["3fe7U5"]),
                            scrollTargetId: iD.bk.CONNECTIONS,
                            children: (0, t.jsx)(lO, {
                                applicationIdentities: eu,
                                connections: ec,
                                userId: o.id,
                                allowEditing: F,
                                className: rB.profileAppConnections,
                            }),
                        }),
                    !es &&
                        ex &&
                        (0, t.jsx)(i_.A, {
                            heading: eH.intl.string(eH.t.PHjkRE),
                            scrollTargetId: iD.bk.APPS,
                            children: (0, t.jsx)(eX, {
                                applicationRoleConnections: eg,
                                onClose: b,
                                className: rB.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iM, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(rX, { displayProfile: p, profileEffectOverride: N, isHovering: B }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rK, fadeIn: k }),
        ],
    });
}
function r$(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, isPremiumTryItOut: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, $.A)({ user: l, displayProfile: n, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, ea.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function rZ(e) {
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
            onClose: D,
            sourceAnalyticsLocations: V = [],
            themeContainerClassName: K,
        } = e,
        Y = l.id === n.id,
        X = (0, tJ.A)(D, Y),
        {
            guildId: q,
            pendingGuildId: $,
            isFetching: Z,
            handleSelectUserProfile: J,
            handleRetry: Q,
            hasError: ee,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([W.A], () => W.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
                        (0, es.A)(l, void 0, {
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
        el = i.useMemo(() => (null != q ? { [q]: [l.id] } : {}), [q, l.id]);
    (0, b.Eq)(el, "UserProfileModalV2");
    let en = (0, z.X)("UserProfileModalV2"),
        et = (0, lD.YW)(),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        ef = (0, ei.A)(l.id) && en,
        eA = (0, er.W)(l.id),
        eb = ee && !eA,
        ej = ef && !ea && !ee && !et,
        eI = et ? "try-it-out" : ej ? "edit" : "read-only",
        {
            pendingThemeColors: ey,
            avatarDecorationOverride: eC,
            avatarOverride: eN,
            bannerOverride: eE,
            accentColorOverride: ek,
            profileEffectOverride: eS,
            profileFrameOverride: eO,
        } = (function (e) {
            let { userId: l, guildId: n, editingMode: t } = e;
            return (0, s.cf)([eg.A, ec.default, eu.Ay, W.A], () => {
                if ("read-only" === t) return ex;
                let e = ec.default.getUser(l);
                if (null == e) return ex;
                let i = eg.A.getTryItOutChanges(),
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
                            : eg.A.getPendingChanges(n),
                    a = null != n ? eu.Ay.getMember(n, l) : null,
                    s = W.A.getUserProfile(l),
                    o = null != n ? W.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: r.pendingThemeColors,
                    avatarDecorationOverride: (0, eo.us)({
                        userValue: e.avatarDecoration,
                        guildValue: a?.avatarDecoration,
                        pendingValue: r.pendingAvatarDecoration,
                        guildId: n,
                    }),
                    avatarOverride: (0, ed.V7)({ userId: l, image: r.pendingAvatar, size: ep }),
                    bannerOverride: r.pendingBanner,
                    accentColorOverride: r.pendingAccentColor,
                    profileEffectOverride: (0, eo.us)({
                        userValue: s?.profileEffect,
                        guildValue: o?.profileEffect,
                        pendingValue: r.pendingProfileEffect,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eo.us)({
                        userValue: s?.profileFrame,
                        guildValue: o?.profileFrame,
                        pendingValue: r.pendingProfileFrame,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, guildId: q, editingMode: eI }),
        {
            isExpanded: e_,
            isAnimating: eD,
            transition: eL,
            handleExpand: eM,
            handleCollapse: ew,
            refs: { expandIconButtonRef: eG, expandTabButtonRef: eF, collapseButtonRef: eV },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: rz },
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
        eU = ef && !e_,
        eB = ef && (!e_ || eD),
        { defaultWishlistId: eW } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, L.fw)({ wishlistId: eW, userId: l.id });
    let ez = (0, ev.fC)(),
        eK = eb && (!ef || !Z),
        eY = ef && ee,
        eX = $ !== q || eY || null != ez.interactionType,
        eq = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rw.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ec.default], () => ec.default.getCurrentUser())),
                    (n = (0, s.bG)([W.A], () => W.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, rG.A)(i.id),
                g = (0, rM.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = (0, rF.A)(i.id),
                x = W.A.getFirstWishlistId(i.id),
                h = null != x,
                v = h ? W.A.getWishlistSettings(i.id, x) : null,
                A = (h ? rL.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && m.push({ text: eH.intl.string(eH.t.laViwx), section: iD.RP.WIDGETS }),
                m.push({ text: eH.intl.string(eH.t.chq59f), section: iD.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                y = v?.visibility === rD.a.PUBLIC;
            return (
                (f || (!f && A && y && g && (!j || (j && I)))) &&
                    m.push({ text: eH.intl.string(eH.t["7lZ31J"]), section: iD.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, rV.A)(a), section: iD.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, rU.A)(d), section: iD.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: e$ } = (0, I.Ay)([...V, j.A.USER_PROFILE_MODAL_V2]),
        eZ = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: y,
            guildId: q,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eJ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: e$, ...eZ, action: iD.pt.SHOW_STYLES_PANEL }), eM();
        }, [e$, eZ, eM]),
        eQ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: e$, ...eZ, action: iD.pt.HIDE_STYLES_PANEL }), ew();
        }, [e$, eZ, ew]),
        e0 = (0, H.Ay)(l.id, q),
        e1 = void 0 !== eO ? eO?.skuId : e0?.profileFrame?.skuId,
        e2 = (0, N.A)(e1, "UserProfileModalV2"),
        e7 = (0, C.A)(e1),
        { profileFrameStyle: e3, profileFrameClassName: e5 } = (0, k.A)(e2);
    (0, E.A)({ skuId: e0?.profileFrame?.skuId, openedAt: _, context: eZ, analyticsLocations: e$ });
    let e8 = F.Ay.useName(e0?.guildId, c, l),
        e9 = (0, T.GV)(),
        e6 = (0, s.bG)([M.A], () => (null != q ? M.A.getGuild(q) : null)),
        e4 = Y
            ? null != e6
                ? eH.intl.formatToPlainString(eH.t.M7OhOF, { guildName: e6.name })
                : eH.intl.string(eH.t.egQPgM)
            : eH.intl.format(eH.t.KRe1Fk, { name: e8 });
    return (0, t.jsx)(I.f5, {
        value: e$,
        children: (0, t.jsx)(U.of, {
            value: eZ,
            openedAt: _,
            fetchStartedAt: e0?.fetchStartedAt,
            fetchEndedAt: e0?.fetchEndedAt,
            isLoaded: e0?.isLoaded,
            children: (0, t.jsx)(ev.Hl, {
                value: ez,
                children: (0, t.jsx)(eh.N, {
                    value: S,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(rW.zr, { [rW.QF]: e0?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": e9,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(iX, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(rB.layoutContainer, e5, {
                                        [rB.editingPanelEnabled]: ef,
                                        [rB.editingPanelExpanded]: ef && e_,
                                        [rB.isAnimating]: eD,
                                    }),
                                    style: e3,
                                    children: [
                                        (0, t.jsxs)(r$, {
                                            user: l,
                                            displayProfile: e0,
                                            pendingThemeColors: ey,
                                            isPremiumTryItOut: et,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: rW.Oo,
                                                    children: [
                                                        (0, t.jsx)(lg.A, { onClose: X }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: e9, children: e4 }),
                                                        }),
                                                        eB &&
                                                            (0, t.jsx)(iC, {
                                                                buttonRef: eG,
                                                                onClick: eJ,
                                                                className: rB.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eU &&
                                                    (0, t.jsx)("div", {
                                                        className: rB.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iy, {
                                                            innerRef: eF,
                                                            onClick: eJ,
                                                            className: rB.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ef &&
                                                    eL((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(iN, {
                                                                  className: a()(rB.editingPanel, {
                                                                      [rB.isExpanded]: e_,
                                                                  }),
                                                                  selectedGuildId: $,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: J,
                                                                  onClose: eQ,
                                                                  collapseButtonRef: eV,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: ee,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eR.A, {
                                                    className: a()(K, rW.A7, rB.profileContentOuter),
                                                    innerClassName: rB.profileContentInner,
                                                    user: l,
                                                    displayProfile: e0,
                                                    themeType: em.d.MODAL_V2,
                                                    pendingThemeColors: ey,
                                                    isPrivate: e0?.private === !0,
                                                    forceShowPremium: et,
                                                    children: [
                                                        (0, t.jsx)(rY, { displayProfile: e0, pendingBanner: eE }),
                                                        e0?.private === !0 && (0, t.jsx)(eT.A, {}),
                                                        !eb && (0, t.jsx)(i2, { className: rB.noticeContainer }),
                                                        eK &&
                                                            (0, t.jsx)("div", {
                                                                className: rB.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iV, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eH.intl.string(eH.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Q
                                                                            ? eH.intl.string(eH.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Q,
                                                                    actionDisabled: !ef && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: rB.profileCardToastContainer,
                                                            children: (0, t.jsx)(eP.A, { userId: l.id, onClose: X }),
                                                        }),
                                                        (0, t.jsxs)(iz, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Z,
                                                            className: rB.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(rq, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: q,
                                                                    channelId: c,
                                                                    displayProfile: e0,
                                                                    nickname: e8,
                                                                    originGuildId: d,
                                                                    hasEntered: O === h.ip.ENTERED,
                                                                    customStatusPrompt: R,
                                                                    onClose: X,
                                                                    avatarDecorationOverride: eC,
                                                                    avatarOverride: eN,
                                                                    bannerOverride: eE,
                                                                    accentColorOverride: ek,
                                                                    profileEffectOverride: eS,
                                                                    profileFrame: e2,
                                                                    fadeInProfileFrame: e7,
                                                                    editingMode: eI,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(iq.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: e0,
                                                                    guildId: q,
                                                                    channelId: c,
                                                                    items: eq,
                                                                    initialSection: P,
                                                                    onClose: X,
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
                            (0, t.jsx)(iE.A, { userId: l.id, guildId: q, className: rB.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function rJ(e) {
    return (0, t.jsx)(lD.nh, { children: (0, t.jsx)(rZ, { ...e }) });
}
