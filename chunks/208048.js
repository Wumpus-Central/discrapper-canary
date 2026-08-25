n.d(l, { A: () => r8 });
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
    Y = n(591179),
    K = n(999291),
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
    eY = n(375708),
    eK = n(576849);
function eX(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eU.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eK.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eV.A, { user: new eW.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eG._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)(eF.D, {
                        className: eK.OB,
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
                                className: eK.nk,
                                children: eY.intl.format(eY.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eK.yu, children: a }) : null,
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
              className: a()(eK.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eK.FI,
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
var eZ = n(240248),
    eJ = n(308244),
    eQ = n(81400),
    e0 = n(84540),
    e1 = n(290386),
    e2 = n(621466),
    e3 = n(231088),
    e5 = n(786826);
function e7(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function e9(e) {
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
                ? eY.intl.formatToPlainString(eY.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e3.ZL, {
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
        input: (0, t.jsx)(e5.f, {
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
    { value: "HAIKU", label: () => eY.intl.string(eY.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eY.intl.string(eY.t.CXkR1L) },
    { value: "TELL_US", label: () => eY.intl.string(eY.t.eutr4P) },
    { value: "FUN_FACT", label: () => eY.intl.string(eY.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eY.intl.string(eY.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eY.intl.string(eY.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eY.intl.string(eY.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eY.intl.string(eY.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eY.intl.string(eY.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eY.intl.string(eY.t.u7WCGI) },
];
var e6 = n(307731);
function e4(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([V.default], () => V.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        m = z.Ay.canUsePremiumProfileCustomization(u),
        f = (0, e1.U)({ location: "user_profile_modal_edit" }),
        {
            value: p,
            previewValue: x,
            onCommit: h,
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
                    (0, e0.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        v = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = (0, e3.Ww)(e),
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
                    (0, e2.vq)(e.target) && !a(e.target) && t();
                }
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let i = e.relatedTarget;
                    !(0, e2.vq)(i) || a(i) || (null == e7(n.current) && t());
                },
                [l, a, t, n],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: p, onCommit: h }),
        A = !(0, eZ.uJ)(x),
        b = (0, s.bG)([ef.A], () => ef.A.getErrors(g)),
        j = (0, eQ.EC)(g),
        I = b.bio?.[0],
        y = j?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e8.length)), e8[e];
        }, []),
        N = c ? eY.intl.string(eY.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e9, {
              ...v,
              preview: A ? (0, t.jsx)(eJ.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eY.intl.string(eY.t.lO3n7a),
              label: eY.intl.string(eY.t["YWo+Zd"]),
              emojiPickerIntention: e6.EmojiIntention.PROFILE,
              maxLength: f,
              error: I,
              warning: y,
          })
        : A
          ? (0, t.jsx)(eJ.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function le(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eZ.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eY.intl.string(eY.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e4, { displayProfile: l }) : (0, t.jsx)(eJ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var ll = n(982168),
    ln = n(722868),
    lt = n(822775),
    li = n(982985),
    lr = n(133385),
    la = n(34188),
    ls = n(839534),
    lo = n(993401);
function ld(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, ls.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(lo.q3, {
        action: "VISIT_SHOP",
        icon: la.U,
        tooltipText: eY.intl.string(eY.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var lu = n(573355),
    lc = n(102951);
function lg(e) {
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
        u = (0, Y.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ln.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lc.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === J.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(li.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(ld, {}),
                        (0, t.jsx)(lr.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(ld, {}),
                        (0, t.jsx)(lr.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(li.e, { userId: l.id, onClose: ll.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(lr.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === J.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(li.e, { userId: l.id, onClose: ll.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lr.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === J.eA$.FRIEND || o === J.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(li.e, { userId: l.id, onClose: ll.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lu.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lr.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === J.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(li.e, { userId: l.id, onClose: ll.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lu.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(lr.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lu.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(li.l, { userId: l.id, onClose: ll.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(lr.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lm = n(463156),
    lf = n(866665),
    lp = n(28863),
    lx = n(509434),
    lh = n(307301),
    lv = n(228366),
    lA = n(95561),
    lb = n(874490),
    lj = n(968309),
    lI = n(174459),
    ly = n(486020),
    lC = n(123917),
    lN = n(783419);
let lE = "User Profile Modal V2";
function lP(e) {
    let l = en.A.get(e);
    (0, lj.A)({ platformType: l.type, location: lE }),
        lI.default.track(J.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lE,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lk() {
    lv.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lP, stackingBehavior: "stack" });
}
function lT(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, $.An)(r[lN.pK.CREATED_AT], n),
        s = en.A.get((0, lb.ML)(l.type));
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(lf.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eK.GW, children: l.name }),
                  })
                : (0, t.jsx)(lp.Anchor, {
                      href: e,
                      className: eK.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eY.intl.string(eY.t.q5jLJB)}`
                              : `${l.name}, ${eY.intl.string(eY.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lA.zV)(J.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lC.h)({ href: e, trusted: s?.type !== J.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eK.vi,
                          children: [
                              (0, t.jsx)(lf.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eK.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lx.I, { size: "xs", color: "currentColor", className: eK.wP }),
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
function lS(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = ly.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            return (0, t.jsx)(lf.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eN.E, {
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
function lO(e) {
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
            (0, t.jsx)(lf.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eK.k_,
                    children: (0, t.jsx)("img", {
                        alt: eY.intl.formatToPlainString(eY.t.rtm15P, { name: i }),
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
                                (0, t.jsx)(eN.E, {
                                    variant: "text-xs/normal",
                                    children: eY.intl.format(eY.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eK.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lR(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([Z.default], () => Z.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eK.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eK.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lT, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lS, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eF.D, {
                    className: eK.qG,
                    onClick: lk,
                    children: [
                        (0, t.jsx)(lh.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eN.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eY.intl.string(eY.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var l_ = n(193885),
    lL = n(408278),
    lD = n(993165),
    lM = n(554146),
    lw = n(194261),
    lG = n(315629),
    lF = n(789645),
    lV = n(297264),
    lU = n(403581),
    lB = n(812993),
    lz = n(821609),
    lW = n(39623),
    lH = n(890377),
    lq = n(517461),
    lY = n(13875),
    lK = n(131607),
    lX = n(248778),
    l$ = n(465794),
    lZ = n(252732),
    lJ = n(945810);
let lQ = (0, lJ.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l0 = (0, lJ.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1, clientThemeAdaptedColorsEnabled: !1 },
        variations: {
            1: { enabled: !0, showPresetName: !0, clientThemeAdaptedColorsEnabled: !1 },
            2: { enabled: !0, showPresetName: !1, clientThemeAdaptedColorsEnabled: !0 },
        },
    });
function l1(e) {
    let { location: l } = e;
    return l0.useConfig({ location: l });
}
var l2 = n(487233),
    l3 = n(120386),
    l5 = n(317097),
    l7 = n(602853),
    l9 = n(922016),
    l8 = n(508274),
    l6 = n(654107),
    l4 = n(930349);
function ne(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l6.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ef.A, q.A], () => ({
            pendingAccentColor: ef.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: q.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l5.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e0.p)({ accentColor: e }), []);
    return (0, t.jsx)(l9.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l4.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eY.intl.string(eY.t["/X3fkf"]),
                accessibleValue: (0, l5.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l5.Hl)(c) } }),
            }),
    });
}
var nl = n(450373),
    nn = n(317139);
function nt(e, l) {
    let n = null === e,
        t = void 0 === e;
    return n || (t && null == l) ? eY.intl.string(eY.t["3Xph0/"]) : t ? eY.intl.string(eY.t.keN7ib) : e.description;
}
function ni(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nn.o, style: { backgroundColor: l } });
}
function nr(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nn._ });
}
function na(e) {
    let { displayProfile: l, bannerChange: n, shouldAnimate: i } = e,
        r = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l5.LX)(r),
        { hex: s } = (0, nl.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(nr, { src: o }) : (0, t.jsx)(ni, { backgroundColor: s });
}
function ns(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(l4.A, {
        ...i,
        accessibleLabel: eY.intl.string(eY.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(na, { displayProfile: l, bannerChange: n, shouldAnimate: e }),
    });
}
var no = n(569059);
function nd(e) {
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
                accessibleValue: nt(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(l, n),
        f = (0, ec.Ac)(d, g)
            ? {
                  onClick: () => (0, lZ.rM)(null, g, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eY.intl.string(m ? eY.t.jHlJNS : eY.t.tT9n7D),
              }
            : void 0,
        p = (0, no.P)({ guildId: n, returnRef: s });
    return (0, t.jsx)(ns, {
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
var nu = n(259065),
    nc = n(913563),
    ng = n(898985),
    nm = n(922301),
    nf = n(660184),
    np = n(955298),
    nx = n(523312);
let nh = "heading-xl/semibold";
function nv(e) {
    if (null == e) return eY.intl.string(eY.t["3Xph0/"]);
    let l = eY.intl.string((0, nc.A)(e.fontId)),
        n = eY.intl.string(ng.J[e.effectId] ?? np.default.OpWJ3f),
        t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eY.intl.formatToPlainString(eY.t.A2XnI4, { fontName: l, effectName: n, colors: t });
}
function nA(e) {
    let { displayName: l, displayNameStyles: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nx.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nh,
                      children: (0, t.jsx)(nf.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nm.G.ANIMATED : nm.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nh, className: nx.W, color: "text-muted", children: l }),
    });
}
function nb(e) {
    let { displayName: l, displayNameStyles: n, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, t.jsx)(l4.A, {
        ...r,
        accessibleLabel: eY.intl.string(eY.t.vKBV4A),
        renderPreview: (e) => (0, t.jsx)(nA, { displayNameStyles: n, displayName: l, shouldAnimate: i || e }),
    });
}
function nj(e) {
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
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(j ? eY.t.en3ogK : eY.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            o?.(), (0, nu.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nb, {
        affordance: (!b && (A || null != v)) || j ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: nv(y),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        displayName: C,
        displayNameStyles: y,
        disabled: r,
    });
}
var nI = n(450232),
    ny = n(89851);
function nC(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: ny.Os,
        children: [
            (0, t.jsxs)("div", {
                className: ny.Pf,
                children: [
                    (0, t.jsx)(lV.D, {
                        className: ny.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r && (0, t.jsx)(nI.A, { className: ny.IX, size: "xs", color: "strong", disabled: i }),
                    null != a && (0, t.jsx)("span", { className: ny.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nN(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: ny.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nE = n(374654),
    nP = n(366010),
    nk = n(736653),
    nT = n(674658),
    nS = n(617061),
    nO = n(203632),
    nR = n(536572);
let n_ = new Set(),
    nL = 0;
var nD = n(993408),
    nM = n(841702),
    nw = n(515718),
    nG = n(195292);
function nF(e) {
    "" !== e.thumbnailPreviewSrc && (0, nw.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nV = n(599752),
    nU = n(249360);
let nB =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nz =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nW(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nk.Ay)(),
        u = (0, nP.M)(d) ? nB : nz,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nM.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nD.wo)(r, t), [r, t]),
                s = (0, nG.A)({ enabled: l, isInteracting: n, items: a, preload: nF });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nL += 1), n_.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nV.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nV.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nV.yY, { [nU.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nO.HL.FromStart,
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
function nH(e) {
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
        { product: v } = (0, nT.q)(h?.skuId),
        A = f ? null != m : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(x ? eY.t["SQy/Po"] : eY.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nS.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l4.A, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eY.intl.string(eY.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eY.intl.string(eY.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eY.intl.string(t ? eY.t["1M4m8w"] : eY.t["+Du7ua"]);
        })({ profileEffectPreview: h, productName: (0, nR.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nW, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nq = n(515727),
    nY = n(746002);
function nK(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nY.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nY.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nw.NN)(n).catch(() => {});
        });
}
var nX = n(715196);
function n$(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nZ(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nk.Ay)(),
        u = (0, nP.M)(d) ? nB : nz,
        c = (0, E.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nM.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nD.MG)(r, t), [r, t]);
            return (0, nG.A)({ enabled: l, isInteracting: n, items: a, preload: nK });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, T.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nX.hm, x, { [nU.O]: m }),
                    style: p,
                    children: (0, t.jsx)(k.A, { frame: f, filterLayer: n$ }),
                }),
            (0, t.jsx)("div", {
                className: a()(nX.ti, { [nX.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nX.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nJ(e) {
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
        { product: h } = (0, nT.q)(x?.skuId),
        v = m ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eY.intl.string(p ? eY.t.j6hZyM : eY.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nq.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l4.A, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eY.intl.string(eY.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eY.intl.string(eY.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eY.intl.string(t ? eY.t.yFeGB5 : eY.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nR.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nZ, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nQ = n(684732),
    n0 = n(498596),
    n1 = n(871524);
function n2(e) {
    let { primaryColor: l, secondaryColor: n, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, l5.Hl)(l)}, ${(0, l5.Hl)(n)})`;
    return (0, t.jsx)("div", { className: n1.D7, style: { background: r }, children: i });
}
function n3(e) {
    let { color: l } = e,
        n = (0, l5.Hl)(l),
        i = (0, l5.bJ)(l, 0xffffff) < n0.Tr.NonText;
    return (0, t.jsx)("div", {
        className: n1.OS,
        children: (0, t.jsx)("div", { className: a()(n1.Hy, { [n1.rY]: i }), style: { backgroundColor: n } }),
    });
}
function n5(e) {
    let { color: l, disabled: n, onClick: r, buttonRef: a, ...s } = e,
        o = i.useRef(null);
    return (0, t.jsx)(eF.D, {
        ...s,
        innerRef: a ?? o,
        className: n1.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, t.jsx)(n3, { color: l }),
    });
}
function n7(e) {
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
    return (0, t.jsx)(l9.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestOpen: s,
        onRequestClose: o,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: l, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...a } = e;
            return (0, t.jsx)(n5, { color: l, onClick: i, disabled: r, buttonRef: u, "aria-label": n, ...a });
        },
    });
}
function n9(e) {
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
        x = (0, l5.Hl)(l),
        h = (0, l5.Hl)(n),
        v = eY.intl.formatToPlainString(eY.t.FquTfm, { colorLabel: x }),
        A = eY.intl.formatToPlainString(eY.t.xOnm4z, { colorLabel: h });
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
    return (0, t.jsx)(l4.Y, {
        variant: u,
        disabled: o,
        deleteButton: b,
        children: (0, t.jsxs)(n2, {
            primaryColor: l,
            secondaryColor: n,
            children: [
                (0, t.jsx)(n7, {
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
                (0, t.jsx)(n7, {
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
function n8(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, K.Ay)(l.id, n),
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
        p = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, l6.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e0.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nQ.l)(d, o)
                ? {
                      onClick: () => (0, e0.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eY.intl.string(eY.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(n9, {
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
var n6 = n(629985);
function n4(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(f.F, { children: (0, t.jsx)("div", { className: a()(n6.k, { [n6.V]: n }), children: l }) });
}
var te = n(296704),
    tl = n(689175),
    tn = n(424290);
function tt(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(te.animated.div, { className: tn.iK, style: e, children: l }) : null));
}
function ti(e) {
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
        className: tn.u6,
        children: [
            (0, t.jsx)(tl.zC, {
                ref: r,
                className: a()(tn.XG, { [tn.a5]: m }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: tn.Qs, children: l }),
            }),
            s && (0, t.jsx)(tt, { isDismissed: o, children: n }),
        ],
    });
}
var tr = n(508770),
    ta = n(732280),
    ts = n(811611),
    to = n(976860),
    td = n(975732);
function tu() {
    return i.useCallback(() => {
        (0, to.pX)(J.BVt.NITRO_HOME), (0, td.closeUserProfileModal)();
    }, []);
}
var tc = n(570002),
    tg = n(202541),
    tm = n(155053);
function tf() {
    let e = (0, ta.V)();
    return e?.subscriptionTrial?.skuId === tg.pe.TIER_2 ? e : null;
}
function tp() {
    let e = (0, tc.A)(eY.intl.string(eY.t.pj0XBN));
    return (0, t.jsx)(l$.A, { subscriptionTier: tg.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function tx(e) {
    let { trialOffer: l, onSubscribeSuccess: n } = e,
        i = tu(),
        r = (0, z.FY)({
            intervalType: l.subscriptionTrial?.interval,
            intervalCount: l.subscriptionTrial?.intervalCount,
        }),
        a = (0, ts.ux)(l.expiresAt?.toISOString());
    return (0, t.jsxs)("div", {
        className: tm.nH,
        children: [
            (0, t.jsxs)("div", {
                className: tm.qf,
                children: [
                    (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { children: eY.intl.string(eY.t.IBYG5U) }) }),
                    (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, t.jsx)(tr.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eY.intl.format(eY.t["fF+cgd"], { onClick: i }),
            }),
            (0, t.jsx)(l$.A, {
                subscriptionTier: tg.pe.TIER_2,
                buttonTextOverride: r,
                onSubscribeModalClose: (e) => {
                    e && n?.();
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != a &&
                (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-muted", className: tm.u8, children: a }),
        ],
    });
}
function th() {
    let e = tf();
    return null == e ? (0, t.jsx)(tp, {}) : (0, t.jsx)(tx, { trialOffer: e });
}
var tv = n(55619),
    tA = n(848717);
function tb() {
    return (0, t.jsxs)("div", {
        className: tA.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eY.intl.string(eY.t.JFY17v),
            }),
            (0, t.jsx)(lz.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eY.intl.string(eY.t.R9GHya),
                onClick: function () {
                    return tv.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tj = n(342866),
    tI = n(968475);
function ty(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([ef.A], () => ({
            pendingAvatar: ef.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ef.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tj.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, tj.$)(a, l.avatar),
        imageInteractingClassName: null == r ? tI.$T : void 0,
    });
}
function tC(e) {
    let { userId: l, ...n } = e,
        i = (0, K.Ay)(l),
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
    return (0, t.jsx)(ns, {
        ...n,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: nt(d, o),
    });
}
function tN(e) {
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
    return (0, t.jsx)(nb, {
        ...n,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: nv(d),
        shouldAlwaysAnimate: null == r,
    });
}
var tE = n(207803);
function tP(e) {
    let l = (0, K.Ay)(e.id),
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
function tk(e) {
    let { user: l, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: a, pendingAvatarSrc: s, tryItOutThemeColors: o } = tP(l),
        d = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != s ? s : l.getAvatarURL(void 0, 80),
        c = (0, l6.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, tE.a)(e);
        }, []);
    return null == r || null == a
        ? null
        : (0, t.jsx)(n9, {
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
function tT(e) {
    let { user: l, onClickPrimary: n, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: a } = tP(l);
    if (null == r || null == a) return null;
    let s = eY.intl.formatToPlainString(eY.t.FquTfm, { colorLabel: (0, l5.Hl)(r) }),
        o = eY.intl.formatToPlainString(eY.t.xOnm4z, { colorLabel: (0, l5.Hl)(a) });
    return (0, t.jsx)(l4.Y, {
        variant: "full-height-bar",
        children: (0, t.jsxs)(n2, {
            primaryColor: r,
            secondaryColor: a,
            children: [
                (0, t.jsx)(n5, { color: r, onClick: n, "aria-label": s }),
                (0, t.jsx)(n5, { color: a, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var tS = n(847081);
function tO(e) {
    let { user: l, mode: n } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        s = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, lD.pA)(),
        c = (function (e) {
            let { analyticsLocations: l } = (0, I.Ay)();
            return i.useCallback(() => {
                (0, nu.L)({ analyticsLocations: l, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [l, e]);
        })(r),
        g = (0, no._)({ isPremiumTryItOut: !0, returnRef: a }),
        m = (0, no.P)({ isPremiumTryItOut: !0, returnRef: s }),
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
            className: tS.T,
            children: [
                (0, t.jsx)(nC, {
                    heading: eY.intl.string(eY.t.NEzEws),
                    children: (0, t.jsx)(tN, {
                        user: l,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nC, {
                    heading: eY.intl.string(eY.t.DMeO2X),
                    children: f
                        ? (0, t.jsx)(tk, {
                              user: l,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, t.jsx)(tT, {
                              user: l,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, t.jsx)(nC, {
                    heading: eY.intl.string(eY.t.Vgdusv),
                    children: (0, t.jsx)(tC, {
                        userId: l.id,
                        buttonRef: s,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, t.jsx)(nC, {
                    heading: eY.intl.string(eY.t.Dt3ZUr),
                    children: (0, t.jsx)(ty, {
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
var tR = n(847374),
    t_ = n(111159),
    tL = n(548118),
    tD = n(711014),
    tM = n(540637),
    tw = n(801461),
    tG = n(44482),
    tF = n(844222),
    tV = n(561392),
    tU = n(499957),
    tB = n(15626),
    tz = n(470791);
function tW(e) {
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
            let { reducedMotion: e } = i.useContext(tF.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tV.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tU.DL)(o, {
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
        C = i.useContext(tB._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        T = i.useRef(null),
        [S, O] = i.useState(null),
        R = null != S ? (0, tw.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        D = i.useMemo(() => l.filter((e) => (0, tw.fI)(e.value, [n])), [n, l]),
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
        { activeIndex: U, handleKeyDown: B } = (0, tM.l)(!0, l),
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
            p({ buttonRef: k, selectButtonProps: Y }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: y,
                    className: a()(tz.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tM.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: D,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(tG.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tH = n(216384);
let tq = "MAIN_PROFILE";
function tY(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tL.Ay, { className: tH.$f, guild: l, size: tL.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tK(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tH.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tH.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tH.qL,
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
function tX(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eF.D, {
        innerRef: r,
        className: a()(tH.L5, { [tH.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tH.v9,
                children: n,
            }),
            (0, t.jsx)(tR.a, {
                className: tH.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function t$(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tD.Ay], () => tD.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([eH.A], () => {
            let e = eH.A.getGuildId();
            return null == e || ef._.has(e) ? null : e;
        }),
        g = (0, s.cf)([em.Ay, tD.Ay], () => {
            let e = {};
            for (let l of tD.Ay.getFlattenedGuildIds()) {
                let n = em.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tq,
                    label: eY.intl.string(eY.t["2p07FR"]),
                    value: tq,
                    leading: (0, t.jsx)(t_.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tY, { guild: n }),
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
                          leading: (0, t.jsx)(tY, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tq,
        p = m.find((e) => e.value === f) ?? m[0],
        h = i.useCallback(
            (e) => {
                let n = e === tq ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tW, {
        className: tH.kL,
        label: eY.intl.string(eY.t.rki38K),
        listboxClassName: tH.yt,
        options: m,
        value: f,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tK, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tX, { leading: p.value === tq ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tZ = n(462887),
    tJ = n(765178),
    tQ = n(461797),
    t0 = n(469054),
    t1 = n(601298);
function t2() {
    let { preset: e, setPreset: l } = (0, lD.RQ)(),
        { clientThemeAdaptedColorsEnabled: n } = l1({ location: "useRandomPremiumTryItOutPreset" }),
        t = (0, nk.Ay)(),
        r = (0, tZ.q)(t),
        a = i.useCallback(
            (e) => {
                let l = (0, tQ.Wt)(e);
                (0, tE.w5)({
                    banner: (0, t1.X)({
                        assetOrigin: t0.E.NEW_ASSET,
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
        let n = (0, tQ.B$)(e),
            t = (0, tQ.Wt)(n);
        lI.default.track(J.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
            l(n),
            a(n),
            tJ.O.announce(eY.intl.formatToPlainString(eY.t.M2Hj9s, { presetName: t.getName() }));
    }, [e, l, a]);
    return { preset: e, onShuffle: s };
}
var t3 = n(23722),
    t5 = n(49999),
    t7 = n(288490);
let t9 = "profile-editing-nameplate-error",
    t8 = "profile-editing-avatar-error",
    t6 = "profile-editing-avatar-decoration-error",
    t4 = "profile-editing-banner-error",
    ie = "profile-editing-display-name-style-error";
function il(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(t7.D0, l),
        children: (0, t.jsx)("div", { className: t7.ZN, children: (0, t.jsx)(lw.LockIcon, { size: "xs" }) }),
    });
}
function it() {
    let e = (0, tc.A)(eY.intl.string(eY.t.pj0XBN)),
        l = tu();
    return (0, t.jsxs)(lG.h, {
        color: "nitro-pink",
        className: t7.Lu,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eY.intl.format(eY.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(l$.A, { subscriptionTier: tg.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
function ii() {
    let [e, l] = (0, lq.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: t7.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eY.intl.string(eY.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eF.D, {
                      "aria-label": eY.intl.string(eY.t.rSe9ra),
                      className: t7.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lF.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function ir() {
    let e = tu(),
        l = (0, tc.A)(eY.intl.string(eY.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: t7.eW,
        children: [
            (0, t.jsxs)("div", {
                className: t7.tm,
                children: [
                    (0, t.jsx)(lV.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eY.intl.string(eY.t.bO0TOe),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eY.intl.format(eY.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(l$.A, { subscriptionTier: tg.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(il, { className: t7.nd }),
        ],
    });
}
function ia() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: t7.BJ,
        "aria-hidden": !0,
        children: eY.intl.format(eY.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lU.t, { size: "xxs", color: "currentColor", className: t7.qp }),
        }),
    });
}
function is(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nC, {
        heading: eY.intl.string(eY.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nE.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t9 : void 0 }),
            (0, t.jsx)(nN, { id: t9, message: r }),
        ],
    });
}
function io(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nC, {
        heading: eY.intl.string(eY.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l2.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t8 : void 0 }),
            (0, t.jsx)(l3.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? t6 : void 0 }),
            (0, t.jsx)(nN, { id: t8, message: (0, lZ.d3)(r) }),
            (0, t.jsx)(nN, { id: t6, message: a }),
        ],
    });
}
function id(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lX.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, lK.kn)(a && !i ? [lM.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lM.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nC, {
        heading: eY.intl.string(eY.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lB.Lp, { text: eY.intl.string(eY.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nj, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? ie : void 0,
                onOpen: d ? () => o(t5.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nN, { id: ie, message: r }),
        ],
    });
}
function iu(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nC, {
        heading: eY.intl.string(eY.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n8, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(nd, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? t4 : void 0 }),
            (0, t.jsx)(nN, { id: t4, message: (0, lZ.d3)(a) }),
        ],
    });
}
function ic(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nC, {
        heading: eY.intl.string(eY.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(ne, { user: l, disabled: n }),
    });
}
function ig(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lY.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nC, {
        heading: eY.intl.string(r ? eY.t["Vfbar/"] : eY.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nH, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(nJ, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let im = "premium-try-it-out-description";
function ip(e) {
    let { user: l } = e,
        n = tu(),
        { navigate: i } = (0, lD.pA)();
    return (
        t2(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": im,
            className: t7.DX,
            children: [
                (0, t.jsx)(il, { className: t7.x$ }),
                (0, t.jsxs)("div", {
                    className: t7.sb,
                    children: [
                        (0, t.jsx)(eN.E, {
                            id: im,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eY.intl.format(eY.t.TmfgI2, { onClick: n }),
                        }),
                        (0, t.jsx)(lz.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lW.EyeIcon,
                            text: eY.intl.string(eY.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tO, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function ix(e) {
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
        { enabled: m } = l1({ location: "DefaultEditingPanelView" }),
        f = (0, t3.A)(c),
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
        k = lQ.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = x || p ? "inline" : A ? "hidden" : k ? "end" : "hidden",
        S = (0, t.jsx)(id, { user: l, guildId: i, disabled: j || h, errorMessage: P });
    return (0, t.jsxs)(n4, {
        hasGradientBackground: b,
        children: [
            (0, t.jsxs)("div", {
                className: t7.wx,
                children: [
                    (0, t.jsx)(lf.m, {
                        text: eY.intl.string(eY.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eF.D, {
                            innerRef: d,
                            className: t7.cS,
                            "aria-label": eY.intl.string(eY.t["l/A351"]),
                            onClick: u,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lH.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(t$, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: a,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, t.jsx)(tb, {})
                : (0, t.jsx)(ti, {
                      floatingFooter: v && !A ? (0, t.jsx)(it, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              p && (x ? (0, t.jsx)(ii, {}) : (0, t.jsx)(ir, {})),
                              x && (0, t.jsx)(ia, {}),
                              (0, t.jsx)(is, { user: l, guildId: i, disabled: j || h, errorMessage: y }),
                              (0, t.jsx)(io, {
                                  user: l,
                                  guildId: i,
                                  disabled: j || h,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: N,
                              }),
                              "inline" === T && S,
                              x || p
                                  ? (0, t.jsx)(iu, {
                                        user: l,
                                        guildId: i,
                                        disabled: j || h,
                                        canUsePremiumProfileFeatures: x,
                                        bannerErrorMessage: E,
                                    })
                                  : (0, t.jsx)(ic, { user: l, disabled: j || h }),
                              (0, t.jsx)(ig, { user: l, guildId: i, disabled: j || h }),
                              "end" === T && S,
                              A &&
                                  (0, t.jsxs)(t.Fragment, {
                                      children: [(0, t.jsx)(ip, { user: l }), (0, t.jsx)(th, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var ih = n(110654);
function iv(e) {
    return null;
}
function iA(e) {
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
        className: a()(ih.kL, x && ih.ez),
        children: (0, t.jsx)("div", {
            className: ih.u4,
            children: p((e, l, n) => {
                let { key: i } = n,
                    r = o.get(l);
                return null == r
                    ? null
                    : (0, t.jsx)(
                          te.animated.div,
                          {
                              className: ih.M6,
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
var ib = n(477155),
    ij = n(206697),
    iI = n(926321),
    iy = n(663417),
    iC = n(145934);
let iN = "shuffle-options-a11y-description";
function iE() {
    let { preset: e, onShuffle: l } = t2(),
        { showPresetName: n } = l1({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, tQ.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: iC.kL,
              children: [
                  (0, t.jsx)(lf.m, {
                      text: eY.intl.string(eY.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(lL.K, {
                          icon: iy.RefreshIcon,
                          "aria-label": eY.intl.string(eY.t.VzqqFC),
                          "aria-describedby": iN,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(m.A, { id: iN, children: eY.intl.string(eY.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: iC.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: iC.L_, src: a }),
                          (0, t.jsxs)(eN.E, {
                              className: iC._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(m.A, {
                                      children: eY.intl.formatToPlainString(eY.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: iC.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lz.$, {
                      icon: iI.DiceIcon,
                      text: eY.intl.string(eY.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": iN,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(m.A, { id: iN, children: eY.intl.string(eY.t.bBRdiB) }),
              ],
          });
}
var iP = n(280406);
function ik(e) {
    let { user: l, onBack: n, backButtonRef: i } = e,
        r = tf();
    return (0, t.jsxs)(n4, {
        children: [
            (0, t.jsxs)("div", {
                className: iP.wx,
                children: [
                    (0, t.jsx)(eF.D, {
                        innerRef: i,
                        "aria-label": eY.intl.string(eY.t["4IYwrw"]),
                        onClick: n,
                        className: iP.Gv,
                        children: (0, t.jsx)(ib.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lV.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iP.R_,
                        children: eY.intl.string(eY.t.PxUx8e),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iP.Ij,
                        children: eY.intl.string(eY.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: iP.ZZ, children: (0, t.jsx)(iE, {}) }),
                ],
            }),
            (0, t.jsx)(ti, {
                children: (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(tO, { user: l, mode: "edit" }),
                        null != r && (0, t.jsx)(tx, { trialOffer: r, onSubscribeSuccess: ij.T }),
                    ],
                }),
            }),
        ],
    });
}
var iT = n(199016);
let iS = "user-profile-editing-panel",
    iO = "profile-modal-editing-panel-heading";
function iR(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(lf.m, {
        text: eY.intl.string(eY.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eF.D, {
            innerRef: i,
            "aria-label": eY.intl.string(eY.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iS,
            className: a()(iT.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(l_.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function i_(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(lf.m, {
            text: eY.intl.string(eY.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lL.K, {
                buttonRef: i,
                "aria-label": eY.intl.string(eY.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iS,
                icon: l_.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iL(e) {
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
        { selectedPanel: x, readyPanel: h, handlePanelTransitionComplete: v, goBack: A } = (0, lD.pA)(),
        b = i.useRef(null);
    return (i.useEffect(() => {
        if (null == h || "premiumTryItOut" !== h.id || null != h.initialTarget) return;
        let e = requestAnimationFrame(() => b.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [h]),
    null == p)
        ? null
        : (0, t.jsx)("aside", {
              id: iS,
              "aria-labelledby": iO,
              className: a()(iT.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: iT.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: iO, children: eY.intl.string(eY.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)(iA, {
                          activeSlide: x.id,
                          direction: "premiumTryItOut" === x.id ? "forwards" : "backwards",
                          onTransitionComplete: v,
                          children: [
                              (0, t.jsx)(iv, {
                                  id: "default",
                                  children: (0, t.jsx)(ix, {
                                      panelId: iS,
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
                              (0, t.jsx)(iv, {
                                  id: "premiumTryItOut",
                                  children: (0, t.jsx)(ik, { user: p, onBack: A, backButtonRef: b }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iD = n(271383),
    iM = n(347805),
    iw = n(629403),
    iG = n(612630),
    iF = n(372638),
    iV = n(61426);
function iU(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([F.A], () => F.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iG.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await iw.A.updateNote(l, e);
                    } catch {
                        f(eY.intl.string(eY.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == p,
        v = (0, e3.Ww)({ value: p ?? "", onCommit: x, disabled: h }),
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: iV.t, children: p })
            : null;
    return (0, t.jsx)(iF.f, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eY.intl.string(eY.t.PbMNh2),
        label: eY.intl.string(eY.t.PbMNh2),
        placeholder: h ? eY.intl.string(eY.t["WLKx/9"]) : eY.intl.string(eY.t.VBhOe2),
        maxLength: J.T7x,
        rows: 3,
        disabled: h,
        error: m,
    });
}
var iB = n(83013),
    iz = n(518477),
    iW = n(793222);
function iH(e) {
    let { userId: l } = e,
        n = (0, eA.g)(),
        { trackUserProfileAction: i } = (0, W.NJ)(),
        r = (0, Y.X)("UserProfileModalV2NotesSection"),
        a = r ? iU : iM.A;
    return (0, t.jsx)(iB.A, {
        heading: eY.intl.string(eY.t["mQKv+v"]),
        scrollTargetId: iz.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iW.N : iW.w,
            autoFocus: n === iz.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iq = n(123292),
    iY = n(667242),
    iK = n(655214);
function iX(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: iY.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iK.oR, iY.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: iY.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: iY.hP,
                            children: (0, t.jsx)(iq.Q, {
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
var i$ = n(346055),
    iZ = n(289873),
    iJ = n(615019);
function iQ(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tJ.O.announce(eY.intl.string(eY.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, i$.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iJ.f, l && iJ.z),
                    children: n && (0, t.jsx)(iZ.y, { type: iZ.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var i0 = n(568602),
    i1 = n(625494),
    i2 = n(61881);
function i3(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([i2.A, ef.A], () => i2.A.hasUnsavedChanges() || ef.A.hasUnsavedChanges());
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
                i1._.subscribe(J.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    i1._.unsubscribe(J.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(i0.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var i5 = n(94160),
    i7 = n(933832),
    i9 = n(972213),
    i8 = n(97483),
    i6 = n(775602),
    i4 = n(384377);
let re = {
        [iz.jM.WIDGET_ADDED]: {
            message: eY.intl.string(eY.t.fFP1Uy),
            icon: (0, t.jsx)(i7.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iz.jM.WIDGET_REMOVED]: {
            message: eY.intl.string(eY.t.zzsK7h),
            icon: (0, t.jsx)(i7.CheckmarkLargeIcon, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iz.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eY.intl.string(eY.t["84MExs"]),
            icon: (0, t.jsx)(i9.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i8.Ck.FAILURE,
        },
        [iz.jM.SOMETHING_WENT_WRONG]: {
            message: eY.intl.string(eY.t.F8FvUy),
            icon: (0, t.jsx)(i9.XLargeIcon, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: i8.Ck.FAILURE,
        },
    },
    rl = (e) => {
        let { className: l } = e,
            n = (0, i4.fu)(),
            r = (0, s.bG)([i6.Ay], () => i6.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(re[n]), tJ.O.announce(re[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, i4.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, i4.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(te.animated.div, { className: l, style: e, children: (0, t.jsx)(iX, { ...d }) }),
                ),
            })
        );
    };
var rn = n(297413),
    rt = n(465829),
    ri = n(826673),
    rr = n(576705),
    ra = n(761431),
    rs = n(997394);
function ro(e) {
    return null == e || "" === e ? void 0 : e;
}
function rd(e) {
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
        y = (0, lX.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([rr.A, w.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = w.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: rr.A.can(J.xBc.CHANGE_NICKNAME, e) || rr.A.can(J.xBc.MANAGE_NICKNAMES, e),
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
        (m = ro(c) ?? ro(r) ?? p.username),
        (f = ro(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e0.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e0.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        T = (0, ra.TX)({ value: E, onCommit: k, disabled: !C }),
        { isEditing: S, handleCommit: O } = T,
        R = (0, s.bG)([ef.A], () => ef.A.getErrors(b ?? null)),
        _ = (0, eQ.EC)(b ?? null),
        L = A ? R.nick?.[0] : R.global_name?.[0],
        D = _?.nick?.[0],
        M = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(b).pendingDisplayNameStyles),
        G = eY.intl.string(A ? eY.t.mq6Cg9 : eY.t.XuZU7A),
        F = A ? eY.intl.string(eY.t.YcDKr8) : p.username,
        U = eY.intl.string(A ? eY.t["g7OSZ/"] : eY.t.kyfzzc),
        B = i.useRef(null),
        W = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && O(),
                    y &&
                        (0, ri.Dr)(lM.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: t5.i.INDIRECT_ACTION,
                        }),
                    (0, nu.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: B });
            },
            [S, O, v, b, y],
        ),
        H = {
            icon: l_.V,
            tooltip: eY.intl.string(eY.t.lqKKI2),
            "aria-label": eY.intl.string(eY.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        q =
            A && !C && N
                ? (0, t.jsx)(lf.m, {
                      text: eY.intl.string(eY.t.gzjxQi),
                      children: (0, t.jsx)(eF.D, {
                          tag: "span",
                          className: rs.C,
                          children: (0, t.jsx)(lw.LockIcon, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eY.intl.string(eY.t.VPu695),
                          }),
                      }),
                  })
                : null,
        Y =
            null != P
                ? (0, t.jsx)(rt.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: M,
                      className: rs.d,
                      displayNameTrailing: q,
                  })
                : null;
    return (0, t.jsx)(ra.yV, {
        ...T,
        preview: Y,
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
var ru = n(628072);
function rc(e) {
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
                    (0, e0.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = (0, ra.TX)({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eY.intl.string(x ? eY.t.AXiE0i : eY.t["76Aqhl"]);
    return (0, t.jsx)(ra.yV, {
        ...f,
        size: "compact",
        className: a()(ru.k, p && ru.J),
        preview: h ? (0, t.jsx)(rt.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eY.intl.string(eY.t.h6VAO7),
        label: eY.intl.string(eY.t["rniRE+"]),
        placeholder: v,
        maxLength: J.VE5,
    });
}
var rg = n(145497),
    rm = n(685073),
    rf = n(318785),
    rp = n(534400),
    rx = n(743981),
    rh = n(295930),
    rv = n(594615);
let rA = "no-server-tag";
function rb(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eF.D, {
        innerRef: l,
        className: a()(rh.L5, { [rh.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: rh.W3,
            tag: "span",
            children: [
                o
                    ? eY.intl.string(eY.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  rp.Z9,
                                  {
                                      src: (0, rm.gC)(n, r, rx.Sl.SIZE_14),
                                      size: rx.Sl.SIZE_14,
                                      className: rh.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rm.gC)(n, r, rx.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tR.a, { size: "xs", color: "currentColor", className: rh.u4 }),
            ],
        }),
    });
}
function rj() {
    let e = (0, rf.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.cf)([V.default], () => {
            let e = V.default.getCurrentUser();
            return (0, rm.Zo)(e?.primaryGuild);
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
                e.id === rA
                    ? (0, t.jsx)("div", {
                          className: rv.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: rh.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tG.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: rA, label: eY.intl.string(eY.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rg.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(rp.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, e0.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, t.jsx)(tW, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eY.intl.string(eY.t.Pdd1nd),
              listboxClassName: rh.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(rb, { buttonRef: l, guildId: o, guildTag: c, guildBadge: g, ...n });
              },
          });
}
var rI = n(956495);
function ry(e) {
    let { displayProfile: l, nickname: n, displayNameStylesOverride: i, ...r } = e;
    return (0, t.jsx)(rt.Ay, {
        ...r,
        guildId: l?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: l?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function rC(e) {
    let l = (0, s.bG)([ef.A], () => ef.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, t.jsx)(ry, { ...e, displayNameStylesOverride: l });
}
function rN(e) {
    let { user: l, displayProfile: n, trailing: i } = e,
        r = l.isProvisional
            ? null
            : (0, t.jsx)(rn.A, {
                  user: l,
                  forceUsername: !0,
                  className: rI.a1,
                  usernameClass: rI.eb,
                  discriminatorClass: rI.sw,
                  hideBotTag: !0,
              });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(rd, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rI.AK, rI.j6),
                children: [r, (0, t.jsx)(rt.Ce, {}), (0, t.jsx)(rc, { displayProfile: n }), (0, t.jsx)(rj, {}), i],
            }),
        ],
    });
}
function rE(e) {
    let { editingMode: l, ...n } = e;
    switch (l) {
        case "read-only":
            return (0, t.jsx)(ry, { ...n });
        case "try-it-out":
            return (0, t.jsx)(rC, { ...n });
        case "edit":
            return (0, t.jsx)(rN, { ...n });
        default:
            return (0, er.xb)(l);
    }
}
n(321073);
var rP = n(97808),
    rk = n(980707),
    rT = n(477782),
    rS = n(22231),
    rO = n(601255),
    rR = n(562819),
    r_ = n(19575),
    rL = n(339984),
    rD = n(329801),
    rM = n(884362);
let rw = r_.Ay.getEnableHardwareAcceleration() ? rP.Js : rP.eu;
function rG(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function rF(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rk.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eY.intl.string(eY.t.YAgq3W),
        children: (0, t.jsx)(rT.rX, { children: n }),
    });
}
function rV(e) {
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
                N = null != (0, rO.A)(C ? y : j) && (C ? null != y : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        rG(() =>
                            (0, lZ.XD)({
                                uploadType: rL.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        rG(() =>
                            (0, rR.L)({
                                analyticsLocations: d,
                                guild: A ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: a,
                            }),
                        );
                }, [r, d, A, a]),
                T = i.useCallback(() => {
                    r(),
                        (0, lZ.rM)(null, m, (e) => (0, e0.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ec.WU)(p ? "reset" : "remove");
                }, [r, n, m, p]),
                S = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rT.Dr,
                                { id: "change-avatar", label: eY.intl.string(eY.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rT.Dr,
                                { id: "change-decoration", label: eY.intl.string(eY.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        f &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.twB3fz),
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
                                      rT.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["9rx5GO"]),
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
              className: a()(rD.my, rD.vk, rM.kL, { [rM.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rw, { ...r, imageClassName: a()(rD.Lw, rM.HU) }),
                  (0, t.jsx)(l9.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l9.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, t.jsx)(rF, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rM.r9,
                              children: (0, t.jsx)(lL.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rS.PencilIcon,
                                  "aria-label": eY.intl.string(eY.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rU = n(514905);
function rB(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rk.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eY.intl.string(eY.t.FzU73A),
        children: (0, t.jsx)(rT.rX, { children: n }),
    });
}
function rz(e) {
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
                m = (0, lY.sk)("UserProfileModalV2EditableBanner"),
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
                        (0, lZ.XD)({
                            uploadType: rL.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nS.W)({
                            analyticsLocations: d,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                F = i.useCallback(() => {
                    r(), (0, lZ.rM)(null, y, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, y]),
                U = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                B = i.useCallback(() => {
                    r(),
                        (0, nq.w)({
                            analyticsLocations: d,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, D, a]),
                W = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                rT.Dr,
                                { id: "change-banner", label: eY.intl.string(eY.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rT.Dr,
                                { id: "change-effect", label: eY.intl.string(eY.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rT.Dr,
                                { id: "change-frame", label: eY.intl.string(eY.t["oTSa/q"]), action: B },
                                "change-frame",
                            ),
                        ),
                    f &&
                        k &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.tT9n7D),
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
                                      rT.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.zUOlT6),
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
                                      rT.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eY.intl.string(eY.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rT.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eY.intl.string(eY.t["8DfADq"]),
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
              className: a()(rU.kL, { [rU.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ey.A, { ...e, className: rU.Pr }),
                  (0, t.jsx)(l9.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l9.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rB, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rU.r9,
                              children: (0, t.jsx)(lL.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rS.PencilIcon,
                                  "aria-label": eY.intl.string(eY.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rW = n(777480),
    rH = n(107563),
    rq = n(570287);
n(938796);
var rY = n(913453),
    rK = n(667049),
    rX = n(389667),
    r$ = n(837531),
    rZ = n(186272),
    rJ = n(447538);
let rQ = (e) => e * (2 - e),
    r0 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function r1(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function r2(e) {
    let { displayProfile: l, pendingBanner: n } = e;
    if ((0, ee.Nx)()) return null;
    let i = l?.getPreviewBanner(n, !1, 1024);
    return null == i
        ? null
        : (0, t.jsx)("div", { className: rJ.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function r3(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (n_.add(e), () => n_.delete(e)),
            () => nL,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function r5(e) {
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
        Y = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? q("compact-xs") : l <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, A.g)(U, Y, [], { fireOnMount: !0 });
    let K = null != H ? r0[H] : void 0,
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
        eA = V ? rz : ey.A,
        eb = p?.guildId ?? u,
        eN = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: K?.avatarSize ?? ex.T[ep.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: I,
        },
        eT = i.useCallback(() => {
            (0, ew.A)({ user: o, guildId: eb, alt: x });
        }, [x, eb, o]);
    return (0, t.jsxs)("main", {
        className: a()(rJ.profile, null != H && rJ[H]),
        ref: U,
        "aria-busy": M,
        children: [
            (0, t.jsxs)("div", {
                className: rJ.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: rJ.profileHeaderBannerContainer,
                        children: (0, t.jsx)(eA, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ep.d.MODAL_V2,
                            specOverrides: K,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    V
                        ? (0, t.jsx)(rV, { ...eN })
                        : (0, t.jsx)(ej.A, {
                              ...eN,
                              onOpenAvatar: "read-only" === S ? eT : void 0,
                              imageAnimatingClassName: "try-it-out" === S && null == I ? tI.$T : void 0,
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
                className: rJ.profileBody,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            (0, t.jsx)(rE, {
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
                            className: rJ.profileOverlay,
                            children: (0, t.jsx)(ek.A, {
                                user: o,
                                applicationId: es,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: rJ.profileBanner,
                            }),
                        }),
                    ec.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eL.A.Overlay,
                            {
                                className: rJ.profileOverlay,
                                children: (0, t.jsx)(ek.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: rJ.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: rJ.profileOverlay,
                            children: (0, t.jsx)(iB.A, {
                                heading: eY.intl.string(eY.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: rJ.profileBanner,
                                children: (0, t.jsx)(D.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(e_.A, { user: o, className: rJ.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eL.A.Overlay, {
                            className: rJ.profileOverlay,
                            children: (0, t.jsx)(eR.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: rJ.profileButtons,
                        children: (0, t.jsx)(lg, {
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
                    !ed && (0, t.jsx)(le, { displayProfile: p, isEditable: V }),
                    eu.length > 0 &&
                        (0, t.jsx)(iB.A, {
                            heading: eY.intl.string(eY.t["Uv/eTx"]),
                            children: (0, t.jsx)(eP.A, { applicationIds: eu }),
                        }),
                    (0, t.jsx)(iB.A, {
                        heading: eY.intl.string(eY.t.a6XYD9),
                        children: (0, t.jsx)(eS.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iz.In }),
                    }),
                    null != eo &&
                        (0, t.jsx)(iB.A, {
                            heading: eY.intl.string(eY.t.wlTO8v),
                            children: (0, t.jsx)(eE, { friendsSinceDate: eo }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eM.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: rJ.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ed &&
                        (V || eh) &&
                        (0, t.jsx)(iB.A, {
                            heading: eY.intl.string(eY.t["3fe7U5"]),
                            scrollTargetId: iz.bk.CONNECTIONS,
                            children: (0, t.jsx)(lR, {
                                applicationIdentities: eg,
                                connections: em,
                                userId: o.id,
                                allowEditing: V,
                                className: rJ.profileAppConnections,
                            }),
                        }),
                    !ed &&
                        ev &&
                        (0, t.jsx)(iB.A, {
                            heading: eY.intl.string(eY.t.PHjkRE),
                            scrollTargetId: iz.bk.APPS,
                            children: (0, t.jsx)(e$, {
                                applicationRoleConnections: ef,
                                onClose: b,
                                className: rJ.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iH, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(r3, { displayProfile: p, profileEffectOverride: E, isHovering: W }),
            null != P && (0, t.jsx)(k.A, { frame: P, filterLayer: r1, fadeIn: T }),
        ],
    });
}
function r7(e) {
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
function r9(e) {
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
        $ = (0, t3.A)(L, X),
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
    let ei = (0, Y.X)("UserProfileModalV2"),
        er = (0, lD.YW)(),
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
                    config: { duration: 300, easing: rQ },
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
        eK = ed && en,
        eX = J !== Z || eK || null != eH.interactionType,
        e$ = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rY.A)(i),
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
                c = (0, rK.A)(i.id),
                g = (0, rq.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = (0, rX.A)(i.id),
                x = q.A.getFirstWishlistId(i.id),
                h = null != x,
                v = h ? q.A.getWishlistSettings(i.id, x) : null,
                A = (h ? rH.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && m.push({ text: eY.intl.string(eY.t.laViwx), section: iz.RP.WIDGETS }),
                m.push({ text: eY.intl.string(eY.t.chq59f), section: iz.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = G.A.isFriend(i.id),
                y = v?.visibility === rW.a.PUBLIC;
            return (
                (f || (!f && A && y && g && (!j || (j && I)))) &&
                    m.push({ text: eY.intl.string(eY.t["7lZ31J"]), section: iz.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, r$.A)(a), section: iz.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, rZ.A)(d), section: iz.RP.MUTUAL_GUILDS })),
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
            (0, H.Wn)({ analyticsLocations: eZ, ...eJ, action: iz.pt.SHOW_STYLES_PANEL }), ew();
        }, [eZ, eJ, ew]),
        e0 = i.useCallback(() => {
            (0, H.Wn)({ analyticsLocations: eZ, ...eJ, action: iz.pt.HIDE_STYLES_PANEL }), eG();
        }, [eZ, eJ, eG]),
        e1 = (0, K.Ay)(l.id, Z),
        e2 = void 0 !== eR ? eR?.skuId : e1?.profileFrame?.skuId,
        e3 = (0, E.A)(e2, "UserProfileModalV2"),
        e5 = (0, N.A)(e2),
        { profileFrameStyle: e7, profileFrameClassName: e9 } = (0, T.A)(e3);
    (0, P.A)({ skuId: e1?.profileFrame?.skuId, openedAt: _, context: eJ, analyticsLocations: eZ });
    let e8 = (0, s.bG)([V.default], () => z.Ay.canUsePremiumProfileCustomization(V.default.getCurrentUser())),
        e6 = er || (X && null != e1 && e8),
        e4 = U.Ay.useName(e1?.guildId, c, l),
        le = (0, S.GV)(),
        ll = (0, s.bG)([w.A], () => (null != Z ? w.A.getGuild(Z) : null)),
        ln = X
            ? null != ll
                ? eY.intl.formatToPlainString(eY.t.M7OhOF, { guildName: ll.name })
                : eY.intl.string(eY.t.egQPgM)
            : eY.intl.format(eY.t.KRe1Fk, { name: e4 });
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
                        className: a()(tI.zr, { [tI.QF]: e1?.private === !0 }),
                        transitionState: O,
                        "aria-labelledby": le,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(i3, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(rJ.layoutContainer, e9, {
                                        [rJ.editingPanelEnabled]: ed,
                                        [rJ.editingPanelExpanded]: ed && e_,
                                        [rJ.isAnimating]: eD,
                                    }),
                                    style: e7,
                                    children: [
                                        (0, t.jsxs)(r7, {
                                            user: l,
                                            displayProfile: e1,
                                            pendingThemeColors: eC,
                                            forceShowPremium: e6,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: tI.Oo,
                                                    children: [
                                                        (0, t.jsx)(lm.A, { onClose: $ }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: le, children: ln }),
                                                        }),
                                                        ez &&
                                                            (0, t.jsx)(i_, {
                                                                buttonRef: eF,
                                                                onClick: eQ,
                                                                className: rJ.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eB &&
                                                    (0, t.jsx)("div", {
                                                        className: rJ.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iR, {
                                                            innerRef: eV,
                                                            onClick: eQ,
                                                            className: rJ.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ed &&
                                                    eM((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(iL, {
                                                                  className: a()(rJ.editingPanel, {
                                                                      [rJ.isExpanded]: e_,
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
                                                    className: a()(B, tI.A7, rJ.profileContentOuter),
                                                    innerClassName: rJ.profileContentInner,
                                                    user: l,
                                                    displayProfile: e1,
                                                    themeType: ep.d.MODAL_V2,
                                                    pendingThemeColors: eC,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e6,
                                                    children: [
                                                        (0, t.jsx)(r2, { displayProfile: e1, pendingBanner: eP }),
                                                        e1?.private === !0 && (0, t.jsx)(eO.A, {}),
                                                        !ej && (0, t.jsx)(rl, { className: rJ.noticeContainer }),
                                                        eq &&
                                                            (0, t.jsx)("div", {
                                                                className: rJ.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iX, {
                                                                    icon: (0, t.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eY.intl.string(eY.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != el
                                                                            ? eY.intl.string(eY.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: el,
                                                                    actionDisabled: !ed && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: rJ.profileCardToastContainer,
                                                            children: (0, t.jsx)(eT.A, { userId: l.id, onClose: $ }),
                                                        }),
                                                        (0, t.jsxs)(iQ, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: rJ.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(r5, {
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
                                                                (0, t.jsx)(i5.A, {
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
                            (0, t.jsx)(iD.A, { userId: l.id, guildId: Z, className: rJ.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function r8(e) {
    return (0, t.jsx)(lD.tM, { children: (0, t.jsx)(r9, { ...e }) });
}
