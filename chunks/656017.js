n.d(l, { A: () => im });
var t = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(778712),
    d = n(866323),
    u = n(364522),
    c = n(695366),
    g = n(935462),
    m = n(140735),
    f = n(707554),
    p = n(738188),
    x = n(661531),
    v = n(231723),
    h = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    C = n(480335),
    y = n(31956),
    N = n(361628),
    E = n(744808),
    P = n(875741),
    k = n(915089),
    R = n(713517),
    S = n(645507),
    D = n(922590),
    T = n(821269),
    O = n(93246),
    L = n(561794),
    M = n(71393),
    G = n(994500),
    _ = n(351906),
    w = n(562153),
    U = n(474090),
    V = n(183555),
    F = n(841595),
    B = n(591179),
    z = n(999291),
    H = n(101928),
    W = n(837529),
    K = n(346713),
    q = n(573648),
    X = n(941314),
    Y = n(429913),
    Z = n(321078),
    $ = n(403362),
    J = n(484509),
    Q = n(83931),
    ee = n(920601),
    el = n(903209),
    en = n(919395),
    et = n(101058),
    ei = n(696451),
    er = n(287809),
    ea = n(836602),
    es = n(996988),
    eo = n(985253);
let ed = (0, o.FT)(eo.T[es.d.MODAL_V2].avatarSize),
    eu = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function ec(e, l) {
    let n = new Image();
    await new Promise((l, t) => {
        (n.onload = () => l()), (n.onerror = () => t(Error(`Failed to load image: ${e}`))), (n.src = e);
    });
    let t = null != l ? Math.min(1, l / Math.max(n.naturalWidth, n.naturalHeight)) : 1,
        i = document.createElement("canvas");
    (i.width = Math.round(n.naturalWidth * t)), (i.height = Math.round(n.naturalHeight * t));
    let r = i.getContext("2d");
    if (null == r) throw Error("Canvas 2d context unavailable");
    return r.drawImage(n, 0, 0, i.width, i.height), i.toDataURL("image/png");
}
var eg = n(716804),
    em = n(679492),
    ef = n(718019),
    ep = n(328296),
    ex = n(915614),
    ev = n(744753),
    eh = n(361311),
    eA = n(931481),
    eb = n(439053),
    ej = n(743987),
    eI = n(312381),
    eC = n(501193),
    ey = n(383448),
    eN = n(946356),
    eE = n(983495),
    eP = n(280645),
    ek = n(109112),
    eR = n(939249),
    eS = n(834730),
    eD = n(730134),
    eT = n(169869),
    eO = n(837057),
    eL = n(310419),
    eM = n(773669),
    eG = n(889227),
    e_ = n(967198),
    ew = n(488995),
    eU = n(375708),
    eV = n(985176);
function eF(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eT.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eV.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eD.A, { user: new eG.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(ek._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eV.Hd,
                children: [
                    (0, t.jsxs)(eR.D, {
                        className: eV.OB,
                        onClick: () => {
                            i?.(),
                                (0, eO.transitionToGlobalDiscovery)({
                                    tab: ew.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eL.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eS.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eS.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eS.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eV.nk,
                                children: eU.intl.format(eU.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eV.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eB(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, V.NJ)(),
        o = (0, s.bG)([eM.default], () => eM.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eV.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eV.FI,
                          children: (0, t.jsx)(eF, {
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
var ez = n(240248),
    eH = n(308244),
    eW = n(428262),
    eK = n(84540),
    eq = n(621466);
n(321073);
var eX = n(219869),
    eY = n(990078),
    eZ = n(775602),
    e$ = n(916315);
function eJ(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([eZ.A], () => eZ.A.useReducedMotion),
        u = i.useRef(null),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useRef(!1),
        f = i.useRef(!0),
        p = i.useCallback(() => {
            (f.current = !1), a(e), t("editing");
        }, [e]),
        x = i.useRef(r);
    i.useLayoutEffect(() => {
        x.current = r;
    });
    let v = i.useCallback(() => {
            f.current || ((f.current = !0), l(x.current), t("done"));
        }, [l]),
        h = i.useCallback(() => {
            f.current || ((f.current = !0), t("done"));
        }, []);
    i.useEffect(() => {
        "done" === n && (m.current && u.current?.focus({ preventScroll: !0 }), (m.current = !1));
    }, [n]),
        i.useEffect(() => {
            o &&
                (c.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                g.current?.focus({ preventScroll: !0 }));
        }, [o, d]);
    let A = i.useCallback(
            (e) => {
                !o || (null != c.current && (0, eq.vq)(e.relatedTarget) && c.current.contains(e.relatedTarget)) || v();
            },
            [o, v],
        ),
        b = i.useCallback(
            (e) => {
                o && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (m.current = !0), h());
            },
            [o, h],
        ),
        j = i.useCallback(() => {
            (m.current = !0), v();
        }, [v]),
        I = i.useCallback(() => {
            (m.current = !0), h();
        }, [h]);
    return {
        isEditing: o,
        committedValue: e,
        editedValue: r,
        setEditedValue: a,
        editButtonRef: u,
        wrapperRef: c,
        inputRef: g,
        handleStartEditing: p,
        handleCommit: v,
        handleCancel: h,
        handleInputCommit: j,
        handleInputCancel: I,
        onBlur: A,
        onKeyDown: b,
    };
}
function eQ(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e$.L7,
            children: (0, t.jsx)(eX.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(eY.m, { text: l, ariaHidden: !0, children: i });
}
function e0(e) {
    let {
            isEditing: l,
            preview: n,
            placeholder: r,
            input: s,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            variant: g = "default",
            trailing: m,
            previewErrorMessage: f,
            className: p,
            wrapperRef: x,
            onBlur: v,
            onKeyDown: h,
        } = e,
        A = i.useRef(null),
        b = i.useId(),
        j = i.useId(),
        I = null == n,
        C = null != f,
        y = "compact" !== g && C,
        N = [];
    I && N.push(b), y && N.push(j);
    let E = N.length > 0 ? N.join(" ") : void 0,
        P = (0, t.jsxs)("div", {
            ref: A,
            className: a()(e$.LL, C && e$.JD),
            onClick: u,
            children: [
                I
                    ? (0, t.jsx)(eS.E, {
                          id: b,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e$.qf,
                          children: r,
                      })
                    : n,
                (0, t.jsx)(eR.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": E,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: A },
                }),
                null != m && (0, t.jsx)("div", { className: e$.lD, children: (0, t.jsx)(eQ, { ...m }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e$.kL, { [e$.oE]: "compact" === g, [e$.c1]: "multiline" === g }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: e$.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e$.VH, children: P }),
                              y &&
                                  (0, t.jsxs)(eS.E, {
                                      id: j,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      className: e$.VP,
                                      children: [(0, t.jsx)(c.E, { size: "xs", color: "currentColor" }), f],
                                  }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var e1 = n(786826);
function e2(e) {
    let {
            isEditing: l,
            committedValue: n,
            editedValue: r,
            setEditedValue: a,
            editButtonRef: s,
            handleStartEditing: o,
            wrapperRef: d,
            onBlur: u,
            onKeyDown: c,
            inputRef: g,
            handleInputCommit: m,
            preview: f,
            placeholder: p,
            editButtonAriaLabel: x,
            label: v,
            maxLength: h,
            rows: A,
            emojiPickerIntention: b,
            error: j,
            className: I,
        } = e,
        C = null != h && (l ? r : n).length > h ? eU.intl.formatToPlainString(eU.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback(
            (e) => {
                (e.metaKey || e.ctrlKey) && "Enter" === e.key && (e.preventDefault(), m());
            },
            [m],
        );
    return (0, t.jsx)(e0, {
        isEditing: l,
        preview: f,
        placeholder: p,
        editButtonRef: s,
        editButtonAriaLabel: x,
        onStartEditing: o,
        variant: "multiline",
        className: I,
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: N,
        input: (0, t.jsx)(e1.f, {
            editorRef: g,
            label: v,
            hideLabel: !0,
            value: r,
            onChange: a,
            onKeyDown: E,
            maxLength: h,
            error: N,
            placeholder: p,
            rows: A,
            emojiPickerIntention: b,
        }),
    });
}
let e7 = [
    { value: "HAIKU", label: () => eU.intl.string(eU.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eU.intl.string(eU.t.CXkR1L) },
    { value: "TELL_US", label: () => eU.intl.string(eU.t.eutr4P) },
    { value: "FUN_FACT", label: () => eU.intl.string(eU.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eU.intl.string(eU.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eU.intl.string(eU.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eU.intl.string(eU.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eU.intl.string(eU.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eU.intl.string(eU.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eU.intl.string(eU.t.u7WCGI) },
];
var e3 = n(652215),
    e8 = n(307731);
function e9(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([er.default], () => er.default.getCurrentUser()),
        c = d?.guildId != null,
        g = eW.Ay.canUsePremiumProfileCustomization(u),
        {
            value: m,
            previewValue: f,
            onCommit: p,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, eK.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        x = (function (e, l) {
            let { isEditing: n, wrapperRef: t, handleCommit: r, ...a } = eJ(e, l),
                s = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = l?.querySelector('[aria-expanded="true"][aria-controls]'),
                                t = n?.getAttribute("aria-controls");
                            return null != t && null != e.closest(`#${t}`);
                        })(e, t.current),
                    [t],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = t.current?.ownerDocument ?? document,
                    l = (e) => {
                        (0, eq.vq)(e.target) && !s(e.target) && r();
                    };
                return e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l);
            }, [n, t, s, r]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let l = e.relatedTarget;
                    !(0, eq.vq)(l) || s(l) || r();
                },
                [n, s, r],
            );
            return { isEditing: n, wrapperRef: t, handleCommit: r, ...a, onBlur: o };
        })(m, p),
        v = !(0, ez.uJ)(f),
        h = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e7.length)), e7[e];
        }, []),
        A = c ? eU.intl.string(eU.t.yPJ9xr) : h.label();
    return !c || g
        ? (0, t.jsx)(e2, {
              ...x,
              preview: v ? (0, t.jsx)(eH.A, { userBio: f, setLineClamp: !1 }) : null,
              placeholder: A,
              editButtonAriaLabel: eU.intl.string(eU.t.lO3n7a),
              label: eU.intl.string(eU.t["YWo+Zd"]),
              emojiPickerIntention: e8.EmojiIntention.PROFILE,
              maxLength: e3.NA2,
          })
        : v
          ? (0, t.jsx)(eH.A, { userBio: f, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e5(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, ez.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eU.intl.string(eU.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e9, { displayProfile: l }) : (0, t.jsx)(eH.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var e6 = n(982168),
    e4 = n(722868),
    le = n(822775),
    ll = n(982985),
    ln = n(700174),
    lt = n(34188),
    li = n(859040),
    lr = n(23722),
    la = n(993401);
function ls(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, lr.A)(() => {
            (0, li.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(la.q3, {
        action: "VISIT_SHOP",
        icon: lt.U,
        tooltipText: eU.intl.string(eU.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var lo = n(573355),
    ld = n(102951);
function lu(e) {
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
        u = (0, B.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, e4.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, ld.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === e3.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ll.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(ls, { onClose: d }),
                        (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(le.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(ls, { onClose: d }),
                        (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === e3.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ln.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e3.eA$.FRIEND || o === e3.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lo.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e3.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lo.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lo.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(ll.l, { userId: l.id, onClose: e6.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lc = n(463156),
    lg = n(349288),
    lm = n(509434),
    lf = n(307301),
    lp = n(228366),
    lx = n(95561),
    lv = n(874490),
    lh = n(370480),
    lA = n(968309),
    lb = n(174459),
    lj = n(486020),
    lI = n(123917),
    lC = n(783419);
let ly = "User Profile Modal V2";
function lN(e) {
    let l = q.A.get(e);
    (0, lA.A)({ platformType: l.type, location: ly }),
        lb.default.track(e3.HAw.ACCOUNT_LINK_STEP, {
            previous_step: ly,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lE() {
    lp.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lN, stackingBehavior: "stack" });
}
function lP(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, lh.An)(r[lC.pK.CREATED_AT], n),
        s = q.A.get((0, lv.ML)(l.type));
    return (0, t.jsx)(lR, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(eY.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eS.E, { variant: "text-sm/normal", className: eV.GW, children: l.name }),
                  })
                : (0, t.jsx)(lg.Anchor, {
                      href: e,
                      className: eV.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eU.intl.string(eU.t.q5jLJB)}`
                              : `${l.name}, ${eU.intl.string(eU.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lx.zV)(e3.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lI.h)({ href: e, trusted: s?.type !== e3.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eV.vi,
                          children: [
                              (0, t.jsx)(eY.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eS.E, {
                                      variant: "text-sm/normal",
                                      className: eV.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lm.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === e3.fg2.REDDIT
                ? (0, eT.xE)(r)
                : l.type === e3.fg2.STEAM
                  ? (0, eT.dy)(r)
                  : l.type === e3.fg2.BLUESKY || l.type === e3.fg2.MASTODON || l.type === e3.fg2.TWITTER
                    ? (0, eT.ED)(r)
                    : l.type === e3.fg2.PAYPAL
                      ? (0, eT.gZ)(r)
                      : l.type === e3.fg2.EBAY
                        ? (0, eT.ub)(r)
                        : l.type === e3.fg2.TIKTOK
                          ? (0, eT.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lk(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lj.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lR, {
        renderAccountName: () =>
            (0, t.jsx)(eY.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eS.E, {
                    variant: "text-sm/normal",
                    className: eV.GW,
                    children: n.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function lR(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eV.FI,
        children: [
            (0, t.jsx)(eY.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eV.k_,
                    children: (0, t.jsx)("img", {
                        alt: eU.intl.formatToPlainString(eU.t.rtm15P, { name: i }),
                        className: a()(eV.tV, o ? eV.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eV.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eS.E, {
                                    variant: "text-xs/normal",
                                    children: eU.intl.format(eU.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eV.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lS(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([eM.default], () => eM.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eV.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eV.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lP, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lk, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eR.D, {
                    className: eV.qG,
                    onClick: lE,
                    children: [
                        (0, t.jsx)(lf.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eS.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eU.intl.string(eU.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lD = n(922139),
    lT = n(193885),
    lO = n(408278),
    lL = n(890377),
    lM = n(789645),
    lG = n(534514),
    l_ = n(821609),
    lw = n(403581),
    lU = n(194261),
    lV = n(689175),
    lF = n(517461),
    lB = n(13875),
    lz = n(783420),
    lH = n(487233),
    lW = n(120386),
    lK = n(317097),
    lq = n(602853),
    lX = n(922016),
    lY = n(508274),
    lZ = n(654107),
    l$ = n(930349);
function lJ(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lq.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lZ.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ea.A, F.A], () => ({
            pendingAccentColor: ea.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: F.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lK.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eK.p)({ accentColor: e }), []);
    return (0, t.jsx)(lX.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lY.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l$.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eU.intl.string(eU.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lK.Hl)(c) } }),
            }),
    });
}
var lQ = n(450373),
    l0 = n(252732),
    l1 = n(339984),
    l2 = n(111242);
function l7(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l2.o, style: { backgroundColor: l } });
}
function l3(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l2._ });
}
function l8(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lq.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lK.LX)(r),
        { hex: s } = (0, lQ.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l3, { src: o }) : (0, t.jsx)(l7, { backgroundColor: s });
}
function l9(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = null != n,
        o = (0, z.Ay)(l, n),
        d = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner),
        c = (0, s.bG)([F.A], () =>
            null != n ? F.A.getGuildMemberProfile(l, n)?.banner : F.A.getUserProfile(l)?.banner,
        ),
        g = null === d,
        m = a && (o?.isUsingGuildMemberBanner() ?? !1),
        f = g && a && !m ? void 0 : d,
        p = (0, en.Ac)(d, c),
        x = a && null != u,
        v = p
            ? {
                  onClick: () => (0, l0.rM)(null, c, (e) => (0, eK.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eU.intl.string(x ? eU.t.jHlJNS : eU.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l$.V, {
        affordance: v,
        variant: "square",
        onClick: () =>
            (0, l0.XD)({
                uploadType: l1.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eU.intl.string(eU.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(l8, { displayProfile: o, pendingBanner: f, shouldAnimate: e }),
    });
}
var l5 = n(922301),
    l6 = n(368919),
    l4 = n(259065),
    ne = n(283607);
let nl = "heading-lg/bold";
function nn(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: ne.M,
        children:
            null != n
                ? (0, t.jsx)(eS.E, {
                      variant: nl,
                      children: (0, t.jsx)(l6.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? l5.G.ANIMATED : l5.G.STATIC,
                          textClassName: ne.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eS.E, { variant: nl, className: ne.W, color: "text-muted", children: l }),
    });
}
function nt(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([ei.Ay], () => (null != n ? (ei.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: f,
            pendingDisplayNameStyles: p,
        } = (0, en.B0)(l, n ?? void 0),
        x = o ? f : m,
        v = void 0 !== p,
        h = null === p,
        A = o && null != m,
        b = (0, en.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        j = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        y = o ? (j(void 0 !== g ? g : d) ?? j(C) ?? l.username) : (j(C) ?? l.username),
        N =
            null != b && (v ? null != p : null != x)
                ? {
                      onClick: () => (0, eK.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(A ? eU.t.en3ogK : eU.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, l4.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(l$.V, {
        affordance: (!h && (v || null != x)) || A ? N : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eU.intl.string(eU.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(nn, { stylesPreview: b, displayName: y, shouldAnimate: e }),
        disabled: r,
    });
}
var ni = n(473219),
    nr = n(366010),
    na = n(736653),
    ns = n(617061),
    no = n(203632),
    nd = n(466681);
let nu =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nc =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ng(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, na.Ay)(),
        r = (0, nr.M)(i) ? nu : nc;
    return (0, t.jsxs)("div", {
        className: nd.ti,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: nd.QQ }),
            l?.skuId != null &&
                (0, t.jsx)(C.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: no.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function nm(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        c = (0, en.N2)({ user: l }),
        g = (0, en.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, en.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        v = (0, en.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        h =
            null != v && (f ? null != m : null != g)
                ? {
                      onClick: () => (0, eK.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(x ? eU.t["SQy/Po"] : eU.t.uMuafO),
                  }
                : void 0,
        A = i.useCallback(() => {
            (0, ns.W)({
                analyticsLocations: o,
                guild: u ?? void 0,
                initialSelectedEffect: v ?? void 0,
                stackingBehavior: "stack",
            });
        }, [o, u, v]);
    return (0, t.jsx)(l$.V, {
        affordance: p && !x ? "add" : h,
        variant: a,
        onClick: A,
        accessibleLabel: eU.intl.string(eU.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(ng, { effect: v, shouldAnimate: e }),
    });
}
var nf = n(515727),
    np = n(84391);
let nx = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nv(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = (0, na.Ay)(),
        u = (0, nr.M)(d) ? nu : nc,
        c = null != n,
        g = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        m = (0, en.Xf)({ user: l }),
        f = (0, en.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, en.Tu)(n ?? void 0),
        x = void 0 !== p,
        v = null === p || (!x && null == f),
        h = c && null != m,
        A = (0, en.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        b = (0, N.A)(A?.skuId, "EditableTileProfileFrameButton"),
        { profileFrameStyle: j, profileFrameClassName: C } = (0, P.A)(b?.skuId),
        y =
            null != A && (x ? null != p : null != f)
                ? {
                      onClick: () => (0, eK.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(h ? eU.t.j6hZyM : eU.t.nQBruk),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, nf.w)({
                analyticsLocations: o,
                guild: g ?? void 0,
                initialSelectedProfileFrame: b,
                stackingBehavior: "stack",
            });
        }, [o, g, b]);
    return (0, t.jsx)(l$.V, {
        affordance: v && !h ? "add" : y,
        variant: "square",
        onClick: k,
        accessibleLabel: eU.intl.string(eU.t["9/hmle"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            (0, t.jsxs)("div", {
                className: a()(np.ti, { [np.yT]: null == b }),
                children: [
                    (0, t.jsx)("img", { src: u, alt: "", className: np.QQ, draggable: !1 }),
                    null != b &&
                        (0, t.jsx)("div", {
                            className: a()(np.hm, C),
                            style: j,
                            children: (0, t.jsx)(E.A, { frame: b, filterLayer: nx }),
                        }),
                ],
            }),
    });
}
var nh = n(684732),
    nA = n(458217),
    nb = n(298387);
function nj(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lK.Hl)(l),
        m = (0, lK.bJ)(l, 0xffffff) < nA.Tr.NonText;
    return (0, t.jsx)(lX.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lY.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eR.D, {
                ...n,
                innerRef: c,
                className: nb.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nb.Hy, { [nb.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nI(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
        } = e,
        u = i.useRef(null),
        c = (0, lK.Hl)(l),
        g = (0, lK.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = eU.intl.formatToPlainString(eU.t.FquTfm, { colorLabel: c }),
        p = eU.intl.formatToPlainString(eU.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l$.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nb.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nj, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nj, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nC(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
        {
            pendingThemeColors: o,
            pendingAvatar: d,
            savedThemeColors: u,
        } = (0, s.cf)([ea.A, F.A], () => {
            let e = ea.A.getPendingChanges(n ?? void 0);
            return {
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
                savedThemeColors: null != n ? F.A.getGuildMemberProfile(l.id, n)?.themeColors : void 0,
            };
        }),
        c = (0, et.V7)({ userId: l.id, image: d }),
        { primaryColor: g, secondaryColor: m } = (0, H.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        f = (0, lq.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        v = (0, lZ.rh)(p, f, !1),
        h = i.useCallback(
            (e) => {
                (0, eK.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        A =
            null != n && (0, nh.l)(o, u)
                ? {
                      onClick: () => (0, eK.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eU.intl.string(eU.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == m
        ? null
        : (0, t.jsx)(nI, {
              primaryColor: g,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  e !== g && h([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== m && h([g, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: A,
          });
}
var ny = n(315629),
    nN = n(788868),
    nE = n(235684);
function nP() {
    return (0, t.jsx)(lz.A, {
        subscriptionTier: nN.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)(ny.h, {
                color: "nitro-pink",
                className: nE.U,
                children: [
                    (0, t.jsx)(eS.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eU.intl.format(eU.t.TmfgI2, { onClick: (e) => l(e) }),
                    }),
                    (0, t.jsx)(l_.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lw.t,
                        text: eU.intl.string(eU.t.pj0XBN),
                        onClick: l,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nk = n(55619),
    nR = n(942308);
function nS() {
    return (0, t.jsxs)("div", {
        className: nR.k,
        children: [
            (0, t.jsx)(eS.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eU.intl.string(eU.t.JFY17v),
            }),
            (0, t.jsx)(l_.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eU.intl.string(eU.t.R9GHya),
                onClick: () => nk.A.setEnabled(!1),
            }),
        ],
    });
}
var nD = n(847374),
    nT = n(111159),
    nO = n(548118),
    nL = n(711014),
    nM = n(540637),
    nG = n(801461),
    n_ = n(44482),
    nw = n(844222),
    nU = n(561392),
    nV = n(716263),
    nF = n(15626),
    nB = n(930856);
function nz(e) {
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
            setIsOpen: v,
            refs: h,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(nw.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nU.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nV.DL)(o, {
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
        { setFloating: C } = h,
        y = i.useContext(nF._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, D] = i.useState(null),
        T = null != S ? (0, nG.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        L = i.useRef(!1),
        M = i.useMemo(() => l.filter((e) => (0, nG.fI)(e.value, [n])), [n, l]),
        G = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        _ = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        w = i.useCallback(() => {
            v(!1), k.current?.focus();
        }, [v]),
        U = i.useCallback(
            (e) => {
                if (!R.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = l[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && v(!1);
                }
            },
            [x, S, l, r, v],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), w());
            },
            [u, r, w],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, nM.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (D(F), x || ((O.current = !0), v(!0)));
    }, [F, x, v]);
    let H = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || v(!0);
                            return;
                        }
                        D((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
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
                            w();
                            break;
                        }
                        if (!x) return void v(!0);
                        D((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void v(!0);
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(0), x || ((O.current = !0), v(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        D(n - 1), x || ((O.current = !0), v(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (L.current = !0), v(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), w());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, w, r, v, B],
        ),
        W = Math.max(
            l.findIndex((e) => e.id === M[M.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), D(null), (O.current = !1))
            : ((K.current = !0), O.current || D(l.length > 0 ? W : null), (O.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let q = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": T,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: G,
        onMouseDown: _,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), h.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(nB.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nM.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: M,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(n_.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nH = n(138325);
let nW = "MAIN_PROFILE";
function nK(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nO.Ay, { className: nH.$f, guild: l, size: nO.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nq(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: nH.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: nH.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: nH.qL,
                children: [
                    (0, t.jsx)(eS.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eS.E, {
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
function nX(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eR.D, {
        innerRef: r,
        className: a()(nH.L5, { [nH.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eS.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nH.v9,
                children: n,
            }),
            (0, t.jsx)(nD.a, {
                className: nH.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function nY(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nL.Ay], () => nL.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([e_.A], () => {
            let e = e_.A.getGuildId();
            return null == e || ea._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ei.Ay, nL.Ay], () => {
            let e = {};
            for (let l of nL.Ay.getFlattenedGuildIds()) {
                let n = ei.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: nW,
                    label: eU.intl.string(eU.t["2p07FR"]),
                    value: nW,
                    leading: (0, t.jsx)(nT.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(nK, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter($.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(nK, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? nW,
        p = m.find((e) => e.value === f) ?? m[0],
        v = i.useCallback(
            (e) => {
                let n = e === nW ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(nz, {
        className: nH.kL,
        label: eU.intl.string(eU.t.rki38K),
        listboxClassName: nH.yt,
        options: m,
        value: f,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(nq, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(nX, { leading: p.value === nW ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var nZ = n(809467);
let n$ = "profile-modal-editing-panel",
    nJ = "profile-modal-editing-panel-heading";
function nQ(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eY.m, {
        text: eU.intl.string(eU.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: i,
            "aria-label": eU.intl.string(eU.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": n$,
            className: a()(nZ.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lT.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function n0(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(eY.m, {
            text: eU.intl.string(eU.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lO.K, {
                buttonRef: i,
                "aria-label": eU.intl.string(eU.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": n$,
                icon: lT.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function n1(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eY.m, {
        text: eU.intl.string(eU.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: n,
            className: nZ.cS,
            "aria-label": eU.intl.string(eU.t["l/A351"]),
            onClick: l,
            "aria-controls": n$,
            "aria-expanded": !0,
            children: (0, t.jsx)(lL.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function n2() {
    let [e, l] = (0, lF.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nZ.X6,
              children: [
                  (0, t.jsx)(eS.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eU.intl.string(eU.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eR.D, {
                      "aria-label": eU.intl.string(eU.t.rSe9ra),
                      className: nZ.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lM.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function n7() {
    return (0, t.jsx)(lz.A, {
        subscriptionTier: nN.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)("div", {
                className: nZ.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: nZ.tm,
                        children: [
                            (0, t.jsx)(lG.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eU.intl.string(eU.t.bO0TOe),
                            }),
                            (0, t.jsx)(eS.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eU.intl.format(eU.t["3PujdE"], { onClick: (e) => l(e) }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(l_.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lw.t,
                        text: eU.intl.string(eU.t["7IWwak"]),
                        onClick: l,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: nZ.D0,
                        children: (0, t.jsx)("div", { className: nZ.ZN, children: (0, t.jsx)(lU.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function n3() {
    return (0, t.jsx)(eS.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: nZ.BJ,
        "aria-hidden": !0,
        children: eU.intl.format(eU.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lw.t, { size: "xxs", color: "currentColor", className: nZ.qp }),
        }),
    });
}
function n8(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nZ.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nZ.AM,
                children: [
                    (0, t.jsx)(lG.D, {
                        className: nZ.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(eY.m, {
                            text: eU.intl.string(eU.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lw.t, {
                                className: nZ.l3,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function n9(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lD.animated.div, { className: nZ.HT, style: e, children: (0, t.jsx)(nP, {}) }) : null,
    );
}
function n5(e) {
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
        p = (0, s.bG)([er.default], () => er.default.getCurrentUser()),
        x = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && eW.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lB.sk)("UserProfileModalV2EditingPanel"),
        C = (0, lr.A)(r),
        y = i.useRef(null),
        {
            isUpsellDismissed: N,
            handleScrollDismiss: E,
            shouldAddUpsellSafePadding: P,
        } = (function (e) {
            let { scrollerRef: l, canShowUpsell: n } = e,
                [t, r] = i.useState("pending-measurement"),
                [a, s] = i.useState(!1);
            i.useLayoutEffect(() => {
                if (!n) return void r("pending-measurement");
                let e = l.current?.getScrollerNode();
                null == e || (s(!1), r(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
            }, [l, n]);
            let o = i.useCallback(
                (e) => {
                    if ("dismiss-on-scroll" !== t) return;
                    let { scrollTop: l } = e.currentTarget;
                    !a && l >= 86 ? s(!0) : a && l <= 43 && s(!1);
                },
                [t, a],
            );
            return {
                isUpsellDismissed: a,
                handleScrollDismiss: o,
                shouldAddUpsellSafePadding: "safe-padding" === t && n,
            };
        })({ scrollerRef: y, canShowUpsell: b });
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: n$,
              "aria-labelledby": nJ,
              className: a()(nZ.nd, { [nZ.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: nZ.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: nJ, children: eU.intl.string(eU.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: nZ.wx,
                          children: [
                              (0, t.jsx)(n1, { innerRef: g, onClick: u }),
                              (0, t.jsx)(nY, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: C,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nS, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(f.F, {
                                        children: (0, t.jsxs)(lV.zC, {
                                            ref: y,
                                            className: a()(nZ.XG, { [nZ.uH]: P }),
                                            onScroll: E,
                                            children: [
                                                h && (A ? (0, t.jsx)(n2, {}) : (0, t.jsx)(n7, {})),
                                                A && (0, t.jsx)(n3, {}),
                                                (0, t.jsx)(n8, {
                                                    heading: eU.intl.string(eU.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: (0, t.jsx)(ni.A, {
                                                        user: p,
                                                        guildId: l,
                                                        disabled: v || j,
                                                    }),
                                                }),
                                                (0, t.jsxs)(n8, {
                                                    heading: eU.intl.string(eU.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(lH.A, { user: p, guildId: l, disabled: v || j }),
                                                        (0, t.jsx)(lW.A, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsx)(n8, {
                                                        heading: eU.intl.string(eU.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: (0, t.jsx)(nt, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                        }),
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(n8, {
                                                          heading: eU.intl.string(eU.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nC, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(l9, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(n8, {
                                                          heading: eU.intl.string(eU.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(lJ, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(n8, {
                                                    heading: eU.intl.string(I ? eU.t["Vfbar/"] : eU.t.wR5wOo),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nm, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(nv, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(n9, { isDismissed: N }),
                                ],
                            }),
                  ],
              }),
          });
}
var n6 = n(982599),
    n4 = n(756634),
    te = n(83013),
    tl = n(518477),
    tn = n(77085);
function tt(e) {
    let { userId: l } = e,
        n = (0, eg.g)(),
        { trackUserProfileAction: i } = (0, V.NJ)();
    return (0, t.jsx)(te.A, {
        heading: eU.intl.string(eU.t["mQKv+v"]),
        scrollTargetId: tl.bk.NOTE,
        children: (0, t.jsx)(n4.A, {
            userId: l,
            className: tn.N,
            autoFocus: n === tl.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ti = n(123292),
    tr = n(921701),
    ta = n(861173);
function ts(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tr.kL,
            children: (0, t.jsxs)("div", {
                className: a()(ta.oR, tr.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tr.Kk, children: l }),
                    (0, t.jsx)(eS.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tr.hP,
                            children: (0, t.jsx)(ti.Q, {
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
var to = n(765178),
    td = n(247928),
    tu = n(289873),
    tc = n(984180);
function tg(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && to.O.announce(eU.intl.string(eU.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, td.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tc.f, l && tc.z),
                    children: n && (0, t.jsx)(tu.y, { type: tu.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tm = n(568602),
    tf = n(625494);
function tp(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = () => {
                r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            };
            return (
                tf._.subscribe(e3.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tf._.unsubscribe(e3.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tm.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tx = n(515054),
    tv = n(933832),
    th = n(972213),
    tA = n(97483),
    tb = n(606758);
let tj = {
        [tl.jM.WIDGET_ADDED]: {
            message: eU.intl.string(eU.t.fFP1Uy),
            icon: (0, t.jsx)(tv.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tl.jM.WIDGET_REMOVED]: {
            message: eU.intl.string(eU.t.zzsK7h),
            icon: (0, t.jsx)(tv.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tl.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eU.intl.string(eU.t["84MExs"]),
            icon: (0, t.jsx)(th.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tA.Ck.FAILURE,
        },
        [tl.jM.SOMETHING_WENT_WRONG]: {
            message: eU.intl.string(eU.t.F8FvUy),
            icon: (0, t.jsx)(th.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tA.Ck.FAILURE,
        },
    },
    tI = (e) => {
        let { className: l } = e,
            n = (0, tb.fu)(),
            r = (0, s.bG)([eZ.A], () => eZ.A.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(tj[n]), to.O.announce(tj[n].message)) : o(!1);
        }, [n]);
        let g = (0, d.p)(
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
            i.useEffect(() => () => (0, tb.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, tb.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lD.animated.div, { className: l, style: e, children: (0, t.jsx)(ts, { ...u }) }),
                ),
            })
        );
    };
var tC = n(297413),
    ty = n(878555),
    tN = n(292666);
function tE(e, l) {
    let { isEditing: n, inputRef: t, ...r } = eJ(e, l);
    return (
        i.useEffect(() => {
            n && null != t.current && t.current.setSelectionRange(t.current.value.length, t.current.value.length);
        }, [n, t]),
        { isEditing: n, inputRef: t, ...r }
    );
}
function tP(e) {
    let {
            inputRef: l,
            label: n,
            value: r,
            onChange: a,
            onCommit: s,
            onCancel: o,
            onBlur: d,
            maxLength: u,
            placeholder: c,
            trailing: g,
            error: m,
        } = e,
        f = i.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), s())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), o());
            },
            [s, o],
        );
    return (0, t.jsx)(tN.k, {
        label: n,
        hideLabel: !0,
        inputRef: l,
        value: r,
        onChange: a,
        onBlur: d,
        onKeyDown: f,
        maxLength: u,
        placeholder: c,
        trailing: g,
        error: m,
    });
}
function tk(e) {
    let {
            isEditing: l,
            committedValue: n,
            editedValue: i,
            setEditedValue: r,
            editButtonRef: a,
            handleStartEditing: s,
            wrapperRef: o,
            onBlur: d,
            onKeyDown: u,
            inputRef: c,
            handleInputCommit: g,
            handleInputCancel: m,
            preview: f,
            placeholder: p,
            editButtonAriaLabel: x,
            label: v,
            size: h = "default",
            maxLength: A,
            error: b,
            trailing: j,
            className: I,
        } = e,
        C = null != A && (l ? i : n).length > A ? eU.intl.formatToPlainString(eU.t.ICT5S6, { maxLength: A }) : void 0,
        y = l && i !== n,
        N = C ?? (y ? void 0 : b),
        E = {
            isEditing: l,
            preview: f,
            placeholder: p,
            editButtonRef: a,
            editButtonAriaLabel: x,
            onStartEditing: s,
            className: I,
            wrapperRef: o,
            onBlur: d,
            onKeyDown: u,
            input: (0, t.jsx)(tP, {
                inputRef: c,
                label: v,
                value: i,
                onChange: r,
                onCommit: g,
                onCancel: m,
                maxLength: A,
                placeholder: p,
                trailing: j,
                error: N,
            }),
        };
    return "compact" === h
        ? (0, t.jsx)(e0, { ...E, variant: "compact", previewErrorMessage: N })
        : (0, t.jsx)(e0, { ...E, variant: "default", trailing: j, previewErrorMessage: N });
}
var tR = n(35783);
function tS(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        { user: m, displayProfile: f } = e,
        { analyticsLocations: p } = (0, I.Ay)(),
        x = f?.guildId != null,
        v = f?.guildId ?? void 0,
        h = eW.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: j,
        } = ((l = f?.guildId ?? null),
        (n = f?.guildId != null),
        (r = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ei.Ay], () => (null != l ? (ei.Ay.getMember(l, m.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? m.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, eK.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, eK.p)({ globalName: e.trim() });
                },
                [n, f?.guildId],
            ),
        }),
        C = tE(A, j),
        { isEditing: y, handleCommit: N } = C,
        E = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(v ?? null).pendingDisplayNameStyles),
        P = eU.intl.string(x ? eU.t.mq6Cg9 : eU.t.XuZU7A),
        k = x ? eU.intl.string(eU.t.YcDKr8) : m.username,
        R = eU.intl.string(x ? eU.t["g7OSZ/"] : eU.t.kyfzzc),
        S = i.useRef(null),
        D = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    y && N(),
                    (0, l4.L)({ analyticsLocations: p, guildId: v, stackingBehavior: "stack", returnRef: S });
            },
            [y, N, p, v],
        ),
        T = {
            icon: lT.V,
            tooltip: eU.intl.string(eU.t.lqKKI2),
            "aria-label": eU.intl.string(eU.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: D,
            buttonRef: S,
        },
        O =
            null != b
                ? (0, t.jsx)(ty.c$, {
                      user: m,
                      guildId: v,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: E,
                      className: tR.d,
                  })
                : null;
    return (0, t.jsx)(tk, {
        ...C,
        preview: O,
        placeholder: k,
        editButtonAriaLabel: R,
        label: P,
        maxLength: e3.zzC,
        trailing: h ? T : void 0,
    });
}
var tD = n(469432);
function tT(e) {
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
        (r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, eK.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = tE(c, m),
        { isEditing: p } = f,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eU.intl.string(x ? eU.t.AXiE0i : eU.t["76Aqhl"]);
    return (0, t.jsx)(tk, {
        ...f,
        size: "compact",
        className: a()(tD.k, p && tD.J),
        preview: v ? (0, t.jsx)(ty.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eU.intl.string(eU.t.h6VAO7),
        label: eU.intl.string(eU.t["rniRE+"]),
        placeholder: h,
        maxLength: e3.VE5,
    });
}
var tO = n(145497),
    tL = n(685073),
    tM = n(318785),
    tG = n(534400),
    t_ = n(743981),
    tw = n(724637),
    tU = n(329296);
let tV = "no-server-tag";
function tF(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eR.D, {
        innerRef: l,
        className: a()(tw.L5, { [tw.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eS.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: tw.W3,
            tag: "span",
            children: [
                o
                    ? eU.intl.string(eU.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tG.Z9,
                                  {
                                      src: (0, tL.gC)(n, r, t_.Sl.SIZE_14),
                                      size: t_.Sl.SIZE_14,
                                      className: tw.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, tL.gC)(n, r, t_.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nD.a, { size: "xs", color: "currentColor", className: tw.u4 }),
            ],
        }),
    });
}
function tB() {
    let e = (0, tM.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return (0, tL.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tV
                    ? (0, t.jsx)("div", {
                          className: tU.uN,
                          children: (0, t.jsx)(eS.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: tw.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(n_.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tV, label: eU.intl.string(eU.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tO.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tG.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, eK.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nz, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eU.intl.string(eU.t.Pdd1nd),
              listboxClassName: tw.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(tF, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var tz = n(874644);
function tH(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(ty.Ay, {
            user: l,
            guildId: n?.guildId ?? void 0,
            displayName: i,
            displayNameSize: "lg",
            pronouns: n?.pronouns,
            trailing: r,
            onClose: s,
        });
    let d = l.isProvisional
        ? null
        : (0, t.jsx)(tC.A, {
              user: l,
              forceUsername: !0,
              className: tz.a1,
              usernameClass: tz.eb,
              discriminatorClass: tz.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tS, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(tz.AK, tz.j6),
                children: [d, (0, t.jsx)(ty.Ce, {}), (0, t.jsx)(tT, { displayProfile: n }), (0, t.jsx)(tB, {}), r],
            }),
        ],
    });
}
var tW = n(97808),
    tK = n(980707),
    tq = n(477782),
    tX = n(22231),
    tY = n(601255),
    tZ = n(562819),
    t$ = n(19575),
    tJ = n(106106),
    tQ = n(338165);
let t0 = t$.Ay.getEnableHardwareAcceleration() ? tW.Js : tW.eu;
function t1(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tK.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eU.intl.string(eU.t.YAgq3W),
        children: (0, t.jsx)(tq.rX, { children: n }),
    });
}
function t2(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, ef.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([ei.Ay], () => (null != n ? ei.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, en.z5)(c, g),
                f = d && null != l.avatar,
                p = eW.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                A = (0, en.a4)({ user: l }),
                b = (0, en.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, en.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, tY.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: l1.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, tZ.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, l0.rM)(null, g, (e) => (0, eK.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, en.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, eK.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tq.Dr,
                                { id: "change-avatar", label: eU.intl.string(eU.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                tq.Dr,
                                { id: "change-decoration", label: eU.intl.string(eU.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        y &&
                        e.push(
                            N
                                ? (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [f, x, v, N, m, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(ef.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(tJ.my, tJ.vk, tQ.kL, { [tQ.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(t0, { ...r, imageClassName: a()(tJ.Lw, tQ.HU) }),
                  (0, t.jsx)(lX.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lX.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(t1, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: tQ.r9,
                              children: (0, t.jsx)(lO.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tX.R,
                                  "aria-label": eU.intl.string(eU.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t7 = n(976726);
function t3(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tK.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eU.intl.string(eU.t.FzU73A),
        children: (0, t.jsx)(tq.rX, { children: n }),
    });
}
function t8(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = (0, en.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, en.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, en.Xf)({ user: l, guildId: void 0 }),
                g = eW.Ay.canUsePremiumProfileCustomization(l),
                m = g || null == n,
                f = (0, lB.sk)("UserProfileModalV2EditableBanner"),
                p = null != n,
                {
                    pendingBanner: x,
                    pendingProfileEffect: v,
                    pendingProfileFrame: h,
                } = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0)),
                A = (0, s.bG)([F.A], () =>
                    null != n ? F.A.getGuildMemberProfile(l.id, n)?.banner : F.A.getUserProfile(l.id)?.banner,
                ),
                b = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner != null),
                j = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileEffect != null),
                C = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileFrame != null),
                y = (0, en.Ac)(x, A),
                E = p && b,
                P = p && j,
                k = p && C,
                R = void 0 === v ? null != d : null != v,
                S = void 0 === h ? null != u : null != h,
                D = (0, en.lw)({
                    pendingValue: h,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                T = (0, N.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                O = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: l1.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                L = i.useCallback(() => {
                    r(),
                        (0, ns.W)({
                            analyticsLocations: o,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, l0.rM)(null, A, (e) => (0, eK.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, A]),
                _ = i.useCallback(() => {
                    r(), (0, eK.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                w = i.useCallback(() => {
                    r(),
                        (0, nf.w)({
                            analyticsLocations: o,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: T,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, T]),
                U = i.useCallback(() => {
                    r(), (0, eK.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    g &&
                        e.push(
                            (0, t.jsx)(
                                tq.Dr,
                                { id: "change-banner", label: eU.intl.string(eU.t.N0bC3P), action: O },
                                "change-banner",
                            ),
                        ),
                    m &&
                        e.push(
                            (0, t.jsx)(
                                tq.Dr,
                                { id: "change-effect", label: eU.intl.string(eU.t["/6nv6N"]), action: L },
                                "change-effect",
                            ),
                        ),
                    f &&
                        e.push(
                            (0, t.jsx)(
                                tq.Dr,
                                { id: "change-frame", label: eU.intl.string(eU.t["oTSa/q"]), action: w },
                                "change-frame",
                            ),
                        ),
                    g &&
                        y &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    m &&
                        R &&
                        e.push(
                            P
                                ? (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.Lb7lu9),
                                          action: _,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.zUOlT6),
                                          action: _,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    f &&
                        S &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.A0pzWn),
                                          action: U,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      tq.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["8DfADq"]),
                                          action: U,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [E, g, m, f, P, k, y, R, S, O, L, w, G, _, U]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(ex.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(t7.kL, { [t7.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ex.A, { ...e, className: t7.Pr }),
                  (0, t.jsx)(lX.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lX.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(t3, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: t7.r9,
                              children: (0, t.jsx)(lO.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tX.R,
                                  "aria-label": eU.intl.string(eU.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t9 = n(777480),
    t5 = n(107563),
    t6 = n(570287);
n(938796);
var t4 = n(913453),
    ie = n(667049),
    il = n(837531),
    it = n(186272),
    ii = n(645625),
    ir = n(337796);
let ia = (e) => e * (2 - e),
    is = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    io = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function id(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, W.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                ec(n, 1024)
                    .then((l) => {
                        e || s(l);
                    })
                    .catch(() => {
                        e || s(n);
                    }),
                () => {
                    (e = !0), s(void 0);
                }
            );
        }, [r, n]),
        r)
    )
        return null;
    let o = null != n ? (a ?? null) : l?.getPreviewBanner(n, !1, 1024);
    return null == o
        ? null
        : (0, t.jsx)("div", { className: ii.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iu(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(C.A, { skuId: r.skuId, isHovering: i });
}
function ic(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: m,
            hasEntered: f,
            customStatusPrompt: p,
            onClose: x,
            avatarDecorationOverride: v,
            avatarOverride: h,
            bannerOverride: b,
            accentColorOverride: j,
            profileEffectOverride: I,
            profileFrame: C,
            allowEditing: y = !1,
            isLoading: N = !1,
        } = e,
        P = l.id === n.id,
        k = i.useRef(null),
        { isHoveringOrFocusing: L } = (0, R.A)(k),
        [M, w] = i.useState(),
        V = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? w("compact-xs") : l <= 380 ? w("compact-sm") : w(void 0);
        }, []);
    (0, A.g)(k, V, [], { fireOnMount: !0 });
    let F = null != M ? is[M] : void 0,
        B = i.useMemo(() => p ?? (0, S.A)(), [p]),
        { relationshipType: z, originApplicationId: H } = (0, s.cf)([G.A], () => ({
            relationshipType: G.A.getRelationshipType(l.id),
            originApplicationId: G.A.getOriginApplicationId(l.id),
        })),
        W = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        Q = (0, T.q)({ userId: l.id }),
        ee = (0, D.fi)(l.id),
        { appIdentities: el, connections: en } = (function (e) {
            let { filteredAppIdentities: l } = (0, Z.A)(e),
                n = (0, J.A)(e),
                t = (0, X.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, Y.A)([...r]).filter($.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        l
                            .map((e) => ({ identity: e, application: a.find((l) => l.id === e.application_id) }))
                            .filter((e) => {
                                let { application: l } = e;
                                return null != l;
                            }),
                    [l, a],
                ),
                connections: i.useMemo(
                    () =>
                        t
                            ? n.filter((e) => {
                                  let l = q.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(l.id),
        et = (0, K.A)(l.id),
        ei = en.length > 0 || el.length > 0,
        er = et.length > 0,
        ea = y ? t8 : ex.A,
        eo = y ? t2 : ef.A;
    return (0, t.jsxs)("main", {
        className: a()(ii.profile, null != M && ii[M]),
        ref: k,
        "aria-busy": N,
        children: [
            (0, t.jsxs)("div", {
                className: ii.profileHeader,
                children: [
                    (0, t.jsx)(ea, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: es.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: b,
                        pendingAccentColor: j,
                    }),
                    (0, t.jsx)(eo, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: es.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: v,
                        avatarOverride: h,
                    }),
                    (0, t.jsx)(eE.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: es.d.MODAL_V2,
                        hasEntered: f,
                        prompt: P ? B : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: ii.profileBody,
                children: [
                    (0, t.jsx)(tH, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ep.A, { displayProfile: g, themeType: es.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: y,
                    }),
                    z === e3.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: ii.profileOverlay,
                            children: (0, t.jsx)(eA.A, {
                                user: l,
                                applicationId: H,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: ii.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eN.A.Overlay,
                            {
                                className: ii.profileOverlay,
                                children: (0, t.jsx)(eA.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: ii.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: ii.profileOverlay,
                            children: (0, t.jsx)(te.A, {
                                heading: eU.intl.string(eU.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: ii.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ey.A, { user: l, className: ii.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: ii.profileOverlay,
                            children: (0, t.jsx)(eC.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: ii.profileButtons,
                        children: (0, t.jsx)(lu, {
                            user: l,
                            currentUser: n,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: z,
                            onClose: x,
                        }),
                    }),
                    P && (0, t.jsx)(ev.A, { isPremiumUser: (0, U.ki)(n), onInteraction: x }),
                    !W && (0, t.jsx)(e5, { displayProfile: g, isEditable: y }),
                    Q.length > 0 &&
                        (0, t.jsx)(te.A, {
                            heading: eU.intl.string(eU.t["Uv/eTx"]),
                            children: (0, t.jsx)(eh.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(te.A, {
                        heading: eU.intl.string(eU.t.a6XYD9),
                        children: (0, t.jsx)(ej.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: tl.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eP.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: ii.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !W &&
                        (y || ei) &&
                        (0, t.jsx)(te.A, {
                            heading: eU.intl.string(eU.t["3fe7U5"]),
                            scrollTargetId: tl.bk.CONNECTIONS,
                            children: (0, t.jsx)(lS, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: y,
                                className: ii.profileAppConnections,
                            }),
                        }),
                    !W &&
                        er &&
                        (0, t.jsx)(te.A, {
                            heading: eU.intl.string(eU.t.PHjkRE),
                            scrollTargetId: tl.bk.APPS,
                            children: (0, t.jsx)(eB, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: ii.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tt, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(iu, { displayProfile: g, profileEffectOverride: I, isHovering: L }),
            null != C && (0, t.jsx)(E.A, { frame: C, filterLayer: io }),
        ],
    });
}
function ig(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, H.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, ee.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function im(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: A,
            sessionId: C,
            initialTabSection: E,
            initialScrollTarget: R,
            transitionState: S,
            customStatusPrompt: D,
            openedAt: T,
            onClose: O,
            sourceAnalyticsLocations: U = [],
            themeContainerClassName: H,
        } = e,
        W = l.id === n.id,
        {
            guildId: K,
            pendingGuildId: q,
            isFetching: X,
            handleSelectUserProfile: Y,
            handleRetry: Z,
            hasError: $,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([F.A], () => F.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
                        (0, el.A)(l, void 0, {
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
        J = i.useMemo(() => (null != K ? { [K]: [l.id] } : {}), [K, l.id]);
    (0, b.Eq)(J, "UserProfileModalV2");
    let ee = (0, B.X)("UserProfileModalV2"),
        eo = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        ec = W && ee,
        ef = (0, Q.W)(l.id),
        ep = $ && !ef,
        ex = ec && !eo && !$,
        {
            pendingThemeColors: ev,
            avatarDecorationOverride: eh,
            avatarOverride: eA,
            bannerOverride: ej,
            accentColorOverride: eC,
            profileEffectOverride: ey,
            profileFrameOverride: eE,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([ea.A, er.default, ei.Ay, F.A], () => {
                if (!t) return eu;
                let e = er.default.getUser(l);
                if (null == e) return eu;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = ea.A.getPendingChanges(n),
                    c = null != n ? ei.Ay.getMember(n, l) : null,
                    g = F.A.getUserProfile(l),
                    m = null != n ? F.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, en.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, et.V7)({ userId: l, image: a, size: ed }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, en.us)({
                        userValue: g?.profileEffect,
                        guildValue: m?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, en.us)({
                        userValue: g?.profileFrame,
                        guildValue: m?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: ex, guildId: K }),
        {
            isExpanded: eP,
            isAnimating: ek,
            transition: eR,
            handleExpand: eS,
            handleCollapse: eD,
            refs: { expandIconButtonRef: eT, expandTabButtonRef: eO, collapseButtonRef: eL },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ia },
                    onRest: () => t(!1),
                }),
                a = (0, h.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
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
                        if ("collapse" === c.current && e) (c.current = null), u.current?.focus();
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
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eM = ec && !eP,
        eG = ec && (!eP || ek),
        { defaultWishlistId: e_ } = (0, s.cf)([F.A], () => ({ defaultWishlistId: F.A.getFirstWishlistId(l.id) }));
    (0, L.fw)({ wishlistId: e_, userId: l.id });
    let ew = (0, em.fC)(),
        eV = ep && (!ec || !X),
        eF = ec && $,
        eB = q !== K || eF || null != ew.interactionType,
        ez = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, t4.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([er.default], () => er.default.getCurrentUser())),
                    (n = (0, s.bG)([F.A], () => F.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, ie.A)(i.id),
                g = (0, t6.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = F.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? F.A.getWishlistSettings(i.id, p) : null,
                h = (x ? t5.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eU.intl.string(eU.t.laViwx), section: tl.RP.WIDGETS }),
                m.push({ text: eU.intl.string(eU.t.chq59f), section: tl.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = G.A.isFriend(i.id),
                I = v?.visibility === t9.a.PUBLIC;
            return (
                (f || (!f && h && I && g && (!b || (b && j)))) &&
                    m.push({ text: eU.intl.string(eU.t["7lZ31J"]), section: tl.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, il.A)(a), section: tl.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, it.A)(d), section: tl.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eH } = (0, I.Ay)([...U, j.A.USER_PROFILE_MODAL_V2]),
        eW = (0, V.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: K,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eK = (0, z.Ay)(l.id, K),
        eq = void 0 !== eE ? eE?.skuId : eK?.profileFrame?.skuId,
        eX = (0, N.A)(eq, "UserProfileModalV2"),
        { profileFrameStyle: eY, profileFrameClassName: eZ } = (0, P.A)(eq);
    (0, y.A)({ skuId: eK?.profileFrame?.skuId, openedAt: T, context: eW, analyticsLocations: eH });
    let e$ = w.Ay.useName(eK?.guildId, u, l),
        eJ = (0, k.GV)(),
        eQ = (0, s.bG)([M.A], () => (null != K ? M.A.getGuild(K) : null)),
        e0 = W
            ? null != eQ
                ? eU.intl.formatToPlainString(eU.t.M7OhOF, { guildName: eQ.name })
                : eU.intl.string(eU.t.egQPgM)
            : eU.intl.format(eU.t.KRe1Fk, { name: e$ });
    return (0, t.jsx)(I.f5, {
        value: eH,
        children: (0, t.jsx)(V.of, {
            value: eW,
            openedAt: T,
            fetchStartedAt: eK?.fetchStartedAt,
            fetchEndedAt: eK?.fetchEndedAt,
            isLoaded: eK?.isLoaded,
            children: (0, t.jsx)(em.Hl, {
                value: ew,
                children: (0, t.jsx)(eg.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(ir.zr, { [ir.QF]: eK?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eJ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tp, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ii.layoutContainer, eZ, {
                                        [ii.editingPanelEnabled]: ec,
                                        [ii.editingPanelExpanded]: ec && eP,
                                        [ii.isAnimating]: ek,
                                    }),
                                    style: eY,
                                    children: [
                                        (0, t.jsxs)(ig, {
                                            user: l,
                                            displayProfile: eK,
                                            pendingThemeColors: ev,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: ir.Oo,
                                                    children: [
                                                        (0, t.jsx)(lc.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eJ, children: e0 }),
                                                        }),
                                                        eG &&
                                                            (0, t.jsx)(n0, {
                                                                buttonRef: eT,
                                                                onClick: eS,
                                                                className: ii.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eM &&
                                                    (0, t.jsx)("div", {
                                                        className: ii.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nQ, {
                                                            innerRef: eO,
                                                            onClick: eS,
                                                            className: ii.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ec &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(n5, {
                                                                  className: a()(ii.editingPanel, {
                                                                      [ii.isExpanded]: eP,
                                                                  }),
                                                                  selectedGuildId: q,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: Y,
                                                                  onClose: eD,
                                                                  collapseButtonRef: eL,
                                                                  isLoading: X,
                                                                  isEditingDisabled: $,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eN.A, {
                                                    className: a()(H, ir.A7, ii.profileContentOuter),
                                                    innerClassName: ii.profileContentInner,
                                                    user: l,
                                                    displayProfile: eK,
                                                    themeType: es.d.MODAL_V2,
                                                    pendingThemeColors: ev,
                                                    isPrivate: eK?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(id, { displayProfile: eK, pendingBanner: ej }),
                                                        eK?.private === !0 && (0, t.jsx)(eI.A, {}),
                                                        !ep && (0, t.jsx)(tI, { className: ii.noticeContainer }),
                                                        eV &&
                                                            (0, t.jsx)("div", {
                                                                className: ii.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(ts, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eU.intl.string(eU.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Z
                                                                            ? eU.intl.string(eU.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Z,
                                                                    actionDisabled: !ec && X,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: ii.profileCardToastContainer,
                                                            children: (0, t.jsx)(eb.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tg, {
                                                            showScrim: eB,
                                                            showLoadingSpinner: X,
                                                            className: ii.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(ic, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: K,
                                                                    channelId: u,
                                                                    displayProfile: eK,
                                                                    nickname: e$,
                                                                    originGuildId: o,
                                                                    hasEntered: S === v.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: O,
                                                                    avatarDecorationOverride: eh,
                                                                    avatarOverride: eA,
                                                                    bannerOverride: ej,
                                                                    accentColorOverride: eC,
                                                                    profileEffectOverride: ey,
                                                                    profileFrame: eX,
                                                                    allowEditing: ex,
                                                                    isLoading: X,
                                                                }),
                                                                (0, t.jsx)(tx.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eK,
                                                                    guildId: K,
                                                                    channelId: u,
                                                                    items: ez,
                                                                    initialSection: E,
                                                                    onClose: O,
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
                            (0, t.jsx)(n6.A, { userId: l.id, guildId: K, className: ii.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
