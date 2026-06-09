n.d(l, { A: () => iP });
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
    f = n(140735),
    m = n(707554),
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
    T = n(922590),
    D = n(821269),
    O = n(93246),
    L = n(561794),
    w = n(71393),
    M = n(994500),
    G = n(351906),
    _ = n(562153),
    V = n(474090),
    U = n(183555),
    B = n(841595),
    F = n(591179),
    z = n(999291),
    H = n(101928),
    W = n(837529),
    K = n(346713),
    X = n(573648),
    q = n(941314),
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
    ef = n(679492),
    em = n(718019),
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
    eT = n(730134),
    eD = n(169869),
    eO = n(837057),
    eL = n(310419),
    ew = n(773669),
    eM = n(889227),
    eG = n(967198),
    e_ = n(488995),
    eV = n(375708),
    eU = n(985176);
function eB(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eD.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eU.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eT.A, { user: new eM.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(ek._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eU.Hd,
                children: [
                    (0, t.jsxs)(eR.D, {
                        className: eU.OB,
                        onClick: () => {
                            i?.(),
                                (0, eO.transitionToGlobalDiscovery)({
                                    tab: e_.GlobalDiscoveryTab.APPS,
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
                                className: eU.nk,
                                children: eV.intl.format(eV.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eU.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eF(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([ew.default], () => ew.default.locale),
        d = (0, s.bG)([eG.A], () => eG.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eU.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eU.FI,
                          children: (0, t.jsx)(eB, {
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
    eX = n(621466);
n(321073);
var eq = n(219869),
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
        f = i.useRef(!1),
        m = i.useRef(!0),
        p = i.useCallback(() => {
            (m.current = !1), a(e), t("editing");
        }, [e]),
        x = i.useRef(r);
    i.useLayoutEffect(() => {
        x.current = r;
    });
    let v = i.useCallback(() => {
            m.current || ((m.current = !0), l(x.current), t("done"));
        }, [l]),
        h = i.useCallback(() => {
            m.current || ((m.current = !0), t("done"));
        }, []);
    i.useEffect(() => {
        "done" === n && (f.current && u.current?.focus({ preventScroll: !0 }), (f.current = !1));
    }, [n]),
        i.useEffect(() => {
            o &&
                (c.current?.scrollIntoView({ block: "nearest", behavior: d ? "auto" : "smooth" }),
                g.current?.focus({ preventScroll: !0 }));
        }, [o, d]);
    let A = i.useCallback(
            (e) => {
                !o || (null != c.current && (0, eX.vq)(e.relatedTarget) && c.current.contains(e.relatedTarget)) || v();
            },
            [o, v],
        ),
        b = i.useCallback(
            (e) => {
                o && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (f.current = !0), h());
            },
            [o, h],
        ),
        j = i.useCallback(() => {
            (f.current = !0), v();
        }, [v]),
        I = i.useCallback(() => {
            (f.current = !0), h();
        }, [h]),
        C = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), I())
                    : (e.preventDefault(), j());
            },
            [j, I],
        );
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
        onInputKeyDown: C,
        onBlur: A,
        onContainerKeyDown: b,
    };
}
function eQ(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e$.L7,
            children: (0, t.jsx)(eq.T, { ...n, size: "sm", variant: "input-accessory" }),
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
            trailing: f,
            previewErrorMessage: m,
            className: p,
            wrapperRef: x,
            onBlur: v,
            onKeyDown: h,
            disabled: A = !1,
        } = e,
        b = i.useRef(null),
        j = i.useId(),
        I = i.useId(),
        C = null == n,
        y = null != m,
        N = "compact" !== g && y,
        E = [];
    C && E.push(j), N && E.push(I);
    let P = E.length > 0 ? E.join(" ") : void 0,
        k = (0, t.jsxs)("div", {
            ref: b,
            className: a()(e$.LL, y && e$.JD, A && e$.r9),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eS.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e$.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(eR.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": P,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != f && (0, t.jsx)("div", { className: e$.lD, children: (0, t.jsx)(eQ, { ...f }) }),
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
                              (0, t.jsx)("div", { className: e$.VH, children: k }),
                              N &&
                                  (0, t.jsxs)(eS.E, {
                                      id: I,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      className: e$.VP,
                                      children: [(0, t.jsx)(c.E, { size: "xs", color: "currentColor" }), m],
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
            editedValue: i,
            setEditedValue: r,
            editButtonRef: a,
            handleStartEditing: s,
            wrapperRef: o,
            onBlur: d,
            onContainerKeyDown: u,
            inputRef: c,
            onInputKeyDown: g,
            preview: f,
            placeholder: m,
            editButtonAriaLabel: p,
            label: x,
            maxLength: v,
            rows: h,
            emojiPickerIntention: A,
            error: b,
            className: j,
        } = e,
        I = null != v && (l ? i : n).length > v ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: v }) : void 0,
        C = l && i !== n,
        y = I ?? (C ? void 0 : b);
    return (0, t.jsx)(e0, {
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        variant: "multiline",
        className: j,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: y,
        input: (0, t.jsx)(e1.f, {
            editorRef: c,
            label: x,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: v,
            error: y,
            placeholder: m,
            rows: h,
            emojiPickerIntention: A,
        }),
    });
}
let e3 = [
    { value: "HAIKU", label: () => eV.intl.string(eV.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eV.intl.string(eV.t.CXkR1L) },
    { value: "TELL_US", label: () => eV.intl.string(eV.t.eutr4P) },
    { value: "FUN_FACT", label: () => eV.intl.string(eV.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eV.intl.string(eV.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eV.intl.string(eV.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eV.intl.string(eV.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eV.intl.string(eV.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eV.intl.string(eV.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eV.intl.string(eV.t.u7WCGI) },
];
var e7 = n(652215),
    e9 = n(307731);
function e8(e) {
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
            value: f,
            previewValue: m,
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
                        (0, eX.vq)(e.target) && !s(e.target) && r();
                    };
                return e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l);
            }, [n, t, s, r]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let l = e.relatedTarget;
                    !(0, eX.vq)(l) || s(l) || r();
                },
                [n, s, r],
            );
            return { isEditing: n, wrapperRef: t, handleCommit: r, ...a, onBlur: o };
        })(f, p),
        v = !(0, ez.uJ)(m),
        h = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e3.length)), e3[e];
        }, []),
        A = c ? eV.intl.string(eV.t.yPJ9xr) : h.label();
    return !c || g
        ? (0, t.jsx)(e2, {
              ...x,
              preview: v ? (0, t.jsx)(eH.A, { userBio: m, setLineClamp: !1 }) : null,
              placeholder: A,
              editButtonAriaLabel: eV.intl.string(eV.t.lO3n7a),
              label: eV.intl.string(eV.t["YWo+Zd"]),
              emojiPickerIntention: e9.EmojiIntention.PROFILE,
              maxLength: e7.NA2,
          })
        : v
          ? (0, t.jsx)(eH.A, { userBio: m, setLineClamp: !1, textColor: "text-muted" })
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
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eV.intl.string(eV.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e8, { displayProfile: l }) : (0, t.jsx)(eH.A, { userBio: a, setLineClamp: !1 }),
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
        tooltipText: eV.intl.string(eV.t.b2d0N0),
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
        u = (0, F.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, e4.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, ld.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === e7.eA$.BLOCKED
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
            : o === e7.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ln.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e7.eA$.FRIEND || o === e7.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lo.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ln.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e7.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ll.e, { userId: l.id, onClose: e6.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lo.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
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
    lf = n(509434),
    lm = n(307301),
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
    let l = X.A.get(e);
    (0, lA.A)({ platformType: l.type, location: ly }),
        lb.default.track(e7.HAw.ACCOUNT_LINK_STEP, {
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
        s = X.A.get((0, lv.ML)(l.type));
    return (0, t.jsx)(lR, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(eY.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eS.E, { variant: "text-sm/normal", className: eU.GW, children: l.name }),
                  })
                : (0, t.jsx)(lg.Anchor, {
                      href: e,
                      className: eU.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eV.intl.string(eV.t.q5jLJB)}`
                              : `${l.name}, ${eV.intl.string(eV.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lx.zV)(e7.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lI.h)({ href: e, trusted: s?.type !== e7.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eU.vi,
                          children: [
                              (0, t.jsx)(eY.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eS.E, {
                                      variant: "text-sm/normal",
                                      className: eU.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lf.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === e7.fg2.REDDIT
                ? (0, eD.xE)(r)
                : l.type === e7.fg2.STEAM
                  ? (0, eD.dy)(r)
                  : l.type === e7.fg2.BLUESKY || l.type === e7.fg2.MASTODON || l.type === e7.fg2.TWITTER
                    ? (0, eD.ED)(r)
                    : l.type === e7.fg2.PAYPAL
                      ? (0, eD.gZ)(r)
                      : l.type === e7.fg2.EBAY
                        ? (0, eD.ub)(r)
                        : l.type === e7.fg2.TIKTOK
                          ? (0, eD.HU)(r)
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
                    className: eU.GW,
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
        className: eU.FI,
        children: [
            (0, t.jsx)(eY.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eU.k_,
                    children: (0, t.jsx)("img", {
                        alt: eV.intl.formatToPlainString(eV.t.rtm15P, { name: i }),
                        className: a()(eU.tV, o ? eU.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eU.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eS.E, {
                                    variant: "text-xs/normal",
                                    children: eV.intl.format(eV.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eU.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lS(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([ew.default], () => ew.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eU.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eU.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lP, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lk, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eR.D, {
                    className: eU.qG,
                    onClick: lE,
                    children: [
                        (0, t.jsx)(lm.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eS.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eV.intl.string(eV.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lT = n(922139),
    lD = n(193885),
    lO = n(408278),
    lL = n(890377),
    lw = n(789645),
    lM = n(534514),
    lG = n(821609),
    l_ = n(403581),
    lV = n(194261),
    lU = n(689175),
    lB = n(517461),
    lF = n(13875),
    lz = n(783420),
    lH = n(976860),
    lW = n(975732),
    lK = n(487233),
    lX = n(120386),
    lq = n(317097),
    lY = n(602853),
    lZ = n(922016),
    l$ = n(508274),
    lJ = n(654107),
    lQ = n(930349);
function l0(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lY.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lJ.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ea.A, B.A], () => ({
            pendingAccentColor: ea.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: B.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lq.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eK.p)({ accentColor: e }), []);
    return (0, t.jsx)(lZ.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l$.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lQ.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eV.intl.string(eV.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lq.Hl)(c) } }),
            }),
    });
}
var l1 = n(450373),
    l2 = n(252732),
    l3 = n(339984),
    l7 = n(111242);
function l9(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l7.o, style: { backgroundColor: l } });
}
function l8(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l7._ });
}
function l5(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lY.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lq.LX)(r),
        { hex: s } = (0, l1.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l8, { src: o }) : (0, t.jsx)(l9, { backgroundColor: s });
}
function l6(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = null != n,
        o = (0, z.Ay)(l, n),
        d = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner),
        c = (0, s.bG)([B.A], () =>
            null != n ? B.A.getGuildMemberProfile(l, n)?.banner : B.A.getUserProfile(l)?.banner,
        ),
        g = null === d,
        f = a && (o?.isUsingGuildMemberBanner() ?? !1),
        m = g && a && !f ? void 0 : d,
        p = (0, en.Ac)(d, c),
        x = a && null != u,
        v = p
            ? {
                  onClick: () => (0, l2.rM)(null, c, (e) => (0, eK.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eV.intl.string(x ? eV.t.jHlJNS : eV.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(lQ.V, {
        affordance: v,
        variant: "square",
        onClick: () =>
            (0, l2.XD)({
                uploadType: l3.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eV.intl.string(eV.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(l5, { displayProfile: o, pendingBanner: m, shouldAnimate: e }),
    });
}
var l4 = n(913563),
    ne = n(383197),
    nl = n(922301),
    nn = n(368919),
    nt = n(259065),
    ni = n(864386),
    nr = n(283607);
let na = "heading-lg/bold";
function ns(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nr.M,
        children:
            null != n
                ? (0, t.jsx)(eS.E, {
                      variant: na,
                      children: (0, t.jsx)(nn.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nl.G.ANIMATED : nl.G.STATIC,
                          textClassName: nr.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eS.E, { variant: na, className: nr.W, color: "text-muted", children: l }),
    });
}
function no(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([ei.Ay], () => (null != n ? (ei.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: m,
            pendingDisplayNameStyles: p,
        } = (0, en.B0)(l, n ?? void 0),
        x = o ? m : f,
        v = void 0 !== p,
        h = null === p,
        A = o && null != f,
        b = (0, en.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        j = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        y = o ? (j(void 0 !== g ? g : d) ?? j(C) ?? l.username) : (j(C) ?? l.username),
        N = v ? null != p : null != x,
        E =
            null != b && N
                ? {
                      onClick: () => (0, eK.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(A ? eV.t.en3ogK : eV.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (0, nt.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(lQ.V, {
        affordance: (!h && (v || null != x)) || A ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleLabel: eV.intl.string(eV.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eV.intl.string(eV.t["3Xph0/"]);
            let l = eV.intl.string((0, l4.A)(e.fontId)),
                n = eV.intl.string(ne.J[e.effectId] ?? ni.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eV.intl.formatToPlainString(eV.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(b),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(ns, { stylesPreview: b, displayName: y, shouldAnimate: e }),
        disabled: r,
    });
}
var nd = n(473219),
    nu = n(366010),
    nc = n(736653),
    ng = n(674658),
    nf = n(617061),
    nm = n(203632),
    np = n(536572),
    nx = n(466681);
let nv =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nh =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nA(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, nc.Ay)(),
        r = (0, nu.M)(i) ? nv : nh;
    return (0, t.jsxs)("div", {
        className: nx.ti,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: nx.QQ }),
            l?.skuId != null &&
                (0, t.jsx)(C.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: nm.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function nb(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        c = (0, en.N2)({ user: l }),
        g = (0, en.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, en.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        v = (0, en.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: h } = (0, ng.q)(v?.skuId),
        A = m ? null != f : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, eK.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(x ? eV.t["SQy/Po"] : eV.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nf.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(lQ.V, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eV.intl.string(eV.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eV.intl.string(eV.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eV.intl.string(t ? eV.t["1M4m8w"] : eV.t["+Du7ua"]);
        })({ profileEffectPreview: v, productName: (0, np.VG)(h), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(nA, { effect: v, shouldAnimate: e }),
    });
}
var nj = n(515727),
    nI = n(84391);
let nC = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function ny(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = (0, nc.Ay)(),
        u = (0, nu.M)(d) ? nv : nh,
        c = null != n,
        g = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        f = (0, en.Xf)({ user: l }),
        m = (0, en.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, en.Tu)(n ?? void 0),
        x = void 0 !== p,
        v = null === p || (!x && null == m),
        h = c && null != f,
        A = (0, en.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        b = (0, N.A)(A?.skuId, "EditableTileProfileFrameButton"),
        { product: j } = (0, ng.q)(A?.skuId),
        { profileFrameStyle: C, profileFrameClassName: y } = (0, P.A)(b?.skuId),
        k = x ? null != p : null != m,
        R =
            null != A && k
                ? {
                      onClick: () => (0, eK.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(h ? eV.t.j6hZyM : eV.t.nQBruk),
                  }
                : void 0,
        S = i.useCallback(() => {
            (0, nj.w)({ analyticsLocations: o, guild: g ?? void 0, stackingBehavior: "stack" });
        }, [o, g]);
    return (0, t.jsx)(lQ.V, {
        affordance: v && !h ? "add" : R,
        variant: "square",
        onClick: S,
        accessibleLabel: eV.intl.string(eV.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eV.intl.string(eV.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eV.intl.string(t ? eV.t.yFeGB5 : eV.t["2kAxKM"]);
        })({ profileFramePreview: A, productName: (0, np.VG)(j), hasPendingSelection: null != p }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            (0, t.jsxs)("div", {
                className: a()(nI.ti, { [nI.yT]: null == b }),
                children: [
                    (0, t.jsx)("img", { src: u, alt: "", className: nI.QQ, draggable: !1 }),
                    null != b &&
                        (0, t.jsx)("div", {
                            className: a()(nI.hm, y),
                            style: C,
                            children: (0, t.jsx)(E.A, { frame: b, filterLayer: nC }),
                        }),
                ],
            }),
    });
}
var nN = n(684732),
    nE = n(498596),
    nP = n(298387);
function nk(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lq.Hl)(l),
        f = (0, lq.bJ)(l, 0xffffff) < nE.Tr.NonText;
    return (0, t.jsx)(lZ.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l$.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eR.D, {
                ...n,
                innerRef: c,
                className: nP.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nP.Hy, { [nP.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nR(e) {
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
        c = (0, lq.Hl)(l),
        g = (0, lq.Hl)(n),
        f = `linear-gradient(to bottom, ${c}, ${g})`,
        m = eV.intl.formatToPlainString(eV.t.FquTfm, { colorLabel: c }),
        p = eV.intl.formatToPlainString(eV.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(lQ.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nP.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nk, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nk, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nS(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
        {
            pendingThemeColors: o,
            pendingAvatar: d,
            savedThemeColors: u,
        } = (0, s.cf)([ea.A, B.A], () => {
            let e = ea.A.getPendingChanges(n ?? void 0);
            return {
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
                savedThemeColors: null != n ? B.A.getGuildMemberProfile(l.id, n)?.themeColors : void 0,
            };
        }),
        c = (0, et.V7)({ userId: l.id, image: d }),
        { primaryColor: g, secondaryColor: f } = (0, H.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        m = (0, lY.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        v = (0, lJ.rh)(p, m, !1),
        h = i.useCallback(
            (e) => {
                (0, eK.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        A =
            null != n && (0, nN.l)(o, u)
                ? {
                      onClick: () => (0, eK.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eV.intl.string(eV.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == f
        ? null
        : (0, t.jsx)(nR, {
              primaryColor: g,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  e !== g && h([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== f && h([g, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: A,
          });
}
var nT = n(315629),
    nD = n(788868),
    nO = n(235684);
function nL() {
    let e = i.useCallback(() => {
            (0, lH.pX)(e7.BVt.NITRO_HOME), (0, lW.closeUserProfileModal)();
        }, []),
        l = (0, lr.A)(e);
    return (0, t.jsx)(lz.A, {
        subscriptionTier: nD.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)(nT.h, {
                color: "nitro-pink",
                className: nO.U,
                children: [
                    (0, t.jsx)(eS.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eV.intl.format(eV.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lG.$, {
                        variant: "expressive",
                        size: "md",
                        icon: l_.t,
                        text: eV.intl.string(eV.t.pj0XBN),
                        onClick: n,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nw = n(55619),
    nM = n(942308);
function nG() {
    return (0, t.jsxs)("div", {
        className: nM.k,
        children: [
            (0, t.jsx)(eS.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eV.intl.string(eV.t.JFY17v),
            }),
            (0, t.jsx)(lG.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eV.intl.string(eV.t.R9GHya),
                onClick: () => nw.A.setEnabled(!1),
            }),
        ],
    });
}
var n_ = n(847374),
    nV = n(111159),
    nU = n(548118),
    nB = n(711014),
    nF = n(540637),
    nz = n(801461),
    nH = n(44482),
    nW = n(844222),
    nK = n(561392),
    nX = n(716263),
    nq = n(15626),
    nY = n(930856);
function nZ(e) {
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
            renderListItem: m,
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
            let { reducedMotion: e } = i.useContext(nW.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nK.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nX.DL)(o, {
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
        y = i.useContext(nq._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, nz.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        L = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, nz.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        G = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        _ = i.useCallback(() => {
            v(!1), k.current?.focus();
        }, [v]),
        V = i.useCallback(
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
        U = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), _());
            },
            [u, r, _],
        ),
        { activeIndex: B, handleKeyDown: F } = (0, nF.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = B !== z.current;
        (z.current = B), null != B && e && (T(B), x || ((O.current = !0), v(!0)));
    }, [B, x, v]);
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
                        T((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
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
                                    U([e]);
                                    break;
                                }
                            }
                            _();
                            break;
                        }
                        if (!x) return void v(!0);
                        T((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void v(!0);
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            U([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(0), x || ((O.current = !0), v(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((O.current = !0), v(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (L.current = !0), v(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), _());
                        break;
                    default:
                        F(e);
                }
            },
            [u, x, l, S, U, _, r, v, F],
        ),
        W = Math.max(
            l.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (O.current = !1))
            : ((K.current = !0), O.current || T(l.length > 0 ? W : null), (O.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let X = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": D,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: M,
        onMouseDown: G,
        onKeyDown: H,
        onBlur: V,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), h.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: X }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(nY.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nF.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(nH.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var n$ = n(138325);
let nJ = "MAIN_PROFILE";
function nQ(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nU.Ay, { className: n$.$f, guild: l, size: nU.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function n0(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: n$.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: n$.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: n$.qL,
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
function n1(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eR.D, {
        innerRef: r,
        className: a()(n$.L5, { [n$.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eS.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: n$.v9,
                children: n,
            }),
            (0, t.jsx)(n_.a, {
                className: n$.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function n2(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nB.Ay], () => nB.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([eG.A], () => {
            let e = eG.A.getGuildId();
            return null == e || ea._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ei.Ay, nB.Ay], () => {
            let e = {};
            for (let l of nB.Ay.getFlattenedGuildIds()) {
                let n = ei.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: nJ,
                    label: eV.intl.string(eV.t["2p07FR"]),
                    value: nJ,
                    leading: (0, t.jsx)(nV.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(nQ, { guild: n }),
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
                          leading: (0, t.jsx)(nQ, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? nJ,
        p = f.find((e) => e.value === m) ?? f[0],
        v = i.useCallback(
            (e) => {
                let n = e === nJ ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(nZ, {
        className: n$.kL,
        label: eV.intl.string(eV.t.rki38K),
        listboxClassName: n$.yt,
        options: f,
        value: m,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(n0, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(n1, { leading: p.value === nJ ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var n3 = n(809467);
let n7 = "profile-modal-editing-panel",
    n9 = "profile-modal-editing-panel-heading";
function n8(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eY.m, {
        text: eV.intl.string(eV.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: i,
            "aria-label": eV.intl.string(eV.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": n7,
            className: a()(n3.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lD.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function n5(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(eY.m, {
            text: eV.intl.string(eV.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lO.K, {
                buttonRef: i,
                "aria-label": eV.intl.string(eV.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": n7,
                icon: lD.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function n6(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eY.m, {
        text: eV.intl.string(eV.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: n,
            className: n3.cS,
            "aria-label": eV.intl.string(eV.t["l/A351"]),
            onClick: l,
            "aria-controls": n7,
            "aria-expanded": !0,
            children: (0, t.jsx)(lL.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function n4() {
    let [e, l] = (0, lB.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: n3.X6,
              children: [
                  (0, t.jsx)(eS.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eV.intl.string(eV.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eR.D, {
                      "aria-label": eV.intl.string(eV.t.rSe9ra),
                      className: n3.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lw.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function te() {
    let e = i.useCallback(() => {
            (0, lH.pX)(e7.BVt.NITRO_HOME), (0, lW.closeUserProfileModal)();
        }, []),
        l = (0, lr.A)(e);
    return (0, t.jsx)(lz.A, {
        subscriptionTier: nD.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)("div", {
                className: n3.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: n3.tm,
                        children: [
                            (0, t.jsx)(lM.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eV.intl.string(eV.t.bO0TOe),
                            }),
                            (0, t.jsx)(eS.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eV.intl.format(eV.t["3PujdE"], { onClick: l }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lG.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: l_.t,
                        text: eV.intl.string(eV.t["7IWwak"]),
                        onClick: n,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: n3.D0,
                        children: (0, t.jsx)("div", { className: n3.ZN, children: (0, t.jsx)(lV.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tl() {
    return (0, t.jsx)(eS.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: n3.BJ,
        "aria-hidden": !0,
        children: eV.intl.format(eV.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(l_.t, { size: "xxs", color: "currentColor", className: n3.qp }),
        }),
    });
}
function tn(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: n3.Os,
        children: [
            (0, t.jsxs)("div", {
                className: n3.AM,
                children: [
                    (0, t.jsx)(lM.D, {
                        className: n3.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(eY.m, {
                            text: eV.intl.string(eV.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(l_.t, {
                                className: n3.l3,
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
function tt(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lT.animated.div, { className: n3.HT, style: e, children: (0, t.jsx)(nL, {}) }) : null,
    );
}
function ti(e) {
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
        x = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && eW.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lF.sk)("UserProfileModalV2EditingPanel"),
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
              id: n7,
              "aria-labelledby": n9,
              className: a()(n3.nd, { [n3.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: n3.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: n9, children: eV.intl.string(eV.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: n3.wx,
                          children: [
                              (0, t.jsx)(n6, { innerRef: g, onClick: u }),
                              (0, t.jsx)(n2, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: C,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nG, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(m.F, {
                                        children: (0, t.jsxs)(lU.zC, {
                                            ref: y,
                                            className: a()(n3.XG, { [n3.uH]: P }),
                                            onScroll: E,
                                            children: [
                                                h && (A ? (0, t.jsx)(n4, {}) : (0, t.jsx)(te, {})),
                                                A && (0, t.jsx)(tl, {}),
                                                (0, t.jsx)(tn, {
                                                    heading: eV.intl.string(eV.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: (0, t.jsx)(nd.A, {
                                                        user: p,
                                                        guildId: l,
                                                        disabled: v || j,
                                                    }),
                                                }),
                                                (0, t.jsxs)(tn, {
                                                    heading: eV.intl.string(eV.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(lK.A, { user: p, guildId: l, disabled: v || j }),
                                                        (0, t.jsx)(lX.A, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsx)(tn, {
                                                        heading: eV.intl.string(eV.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: (0, t.jsx)(no, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                        }),
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(tn, {
                                                          heading: eV.intl.string(eV.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nS, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(l6, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(tn, {
                                                          heading: eV.intl.string(eV.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(l0, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(tn, {
                                                    heading: eV.intl.string(I ? eV.t["Vfbar/"] : eV.t.wR5wOo),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nb, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(ny, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(tt, { isDismissed: N }),
                                ],
                            }),
                  ],
              }),
          });
}
var tr = n(982599),
    ta = n(347805),
    ts = n(629403),
    to = n(612630),
    td = n(260598);
function tu(e) {
    let {
            isEditing: l,
            committedValue: n,
            editedValue: r,
            setEditedValue: a,
            editButtonRef: s,
            handleStartEditing: o,
            wrapperRef: d,
            onBlur: u,
            onContainerKeyDown: c,
            inputRef: g,
            onInputKeyDown: f,
            preview: m,
            placeholder: p,
            editButtonAriaLabel: x,
            label: v,
            maxLength: h,
            rows: A,
            disabled: b = !1,
            error: j,
            className: I,
        } = e,
        C = null != h && (l ? r : n).length > h ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e0, {
        isEditing: l,
        preview: m,
        placeholder: p,
        editButtonRef: s,
        editButtonAriaLabel: x,
        onStartEditing: o,
        variant: "multiline",
        disabled: b,
        className: I,
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: N,
        input: (0, t.jsx)(td.f, {
            label: v,
            hideLabel: !0,
            inputRef: g,
            value: r,
            onChange: a,
            onFocus: E,
            onKeyDown: f,
            maxLength: h,
            error: N,
            placeholder: p,
            rows: A,
            disabled: b,
            autosize: !0,
        }),
    });
}
var tc = n(673451);
function tg(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, to.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = eJ(
            p ?? "",
            i.useCallback(
                async (e) => {
                    if ((u ?? "") !== e) {
                        m(void 0), g(e), a?.();
                        try {
                            await ts.A.updateNote(l, e);
                        } catch {
                            m(eV.intl.string(eV.t.F8FvUy));
                        }
                    }
                },
                [l, u, a],
            ),
        ),
        { handleStartEditing: v } = x,
        h = d && null == p,
        A = i.useRef(!1);
    if (
        (i.useEffect(() => {
            !r || o || d || A.current || ((A.current = !0), v());
        }, [r, o, d, v]),
        o)
    )
        return null;
    let b =
        null != p && p.length > 0
            ? (0, t.jsx)(eS.E, { variant: "text-sm/normal", color: "text-default", className: tc.t, children: p })
            : null;
    return (0, t.jsx)(tu, {
        ...x,
        className: n,
        preview: b,
        editButtonAriaLabel: eV.intl.string(eV.t.PbMNh2),
        label: eV.intl.string(eV.t.PbMNh2),
        placeholder: h ? eV.intl.string(eV.t["WLKx/9"]) : eV.intl.string(eV.t.VBhOe2),
        maxLength: e7.T7x,
        rows: 3,
        disabled: h,
        error: f,
    });
}
var tf = n(83013),
    tm = n(518477),
    tp = n(77085);
function tx(e) {
    let { userId: l } = e,
        n = (0, eg.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, F.X)("UserProfileModalV2NotesSection"),
        a = r ? tg : ta.A;
    return (0, t.jsx)(tf.A, {
        heading: eV.intl.string(eV.t["mQKv+v"]),
        scrollTargetId: tm.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tp.N : tp.w,
            autoFocus: n === tm.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tv = n(123292),
    th = n(921701),
    tA = n(861173);
function tb(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: th.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tA.oR, th.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: th.Kk, children: l }),
                    (0, t.jsx)(eS.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: th.hP,
                            children: (0, t.jsx)(tv.Q, {
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
var tj = n(765178),
    tI = n(346055),
    tC = n(289873),
    ty = n(984180);
function tN(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tj.O.announce(eV.intl.string(eV.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tI.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(ty.f, l && ty.z),
                    children: n && (0, t.jsx)(tC.y, { type: tC.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tE = n(568602),
    tP = n(625494);
function tk(e) {
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
                tP._.subscribe(e7.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tP._.unsubscribe(e7.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tE.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tR = n(515054),
    tS = n(933832),
    tT = n(972213),
    tD = n(97483),
    tO = n(606758);
let tL = {
        [tm.jM.WIDGET_ADDED]: {
            message: eV.intl.string(eV.t.fFP1Uy),
            icon: (0, t.jsx)(tS.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tm.jM.WIDGET_REMOVED]: {
            message: eV.intl.string(eV.t.zzsK7h),
            icon: (0, t.jsx)(tS.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tm.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eV.intl.string(eV.t["84MExs"]),
            icon: (0, t.jsx)(tT.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tD.Ck.FAILURE,
        },
        [tm.jM.SOMETHING_WENT_WRONG]: {
            message: eV.intl.string(eV.t.F8FvUy),
            icon: (0, t.jsx)(tT.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tD.Ck.FAILURE,
        },
    },
    tw = (e) => {
        let { className: l } = e,
            n = (0, tO.fu)(),
            r = (0, s.bG)([eZ.A], () => eZ.A.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(tL[n]), tj.O.announce(tL[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, tO.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, tO.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lT.animated.div, { className: l, style: e, children: (0, t.jsx)(tb, { ...u }) }),
                ),
            })
        );
    };
var tM = n(297413),
    tG = n(878555),
    t_ = n(292666);
function tV(e, l) {
    let { isEditing: n, inputRef: t, ...r } = eJ(e, l);
    return (
        i.useEffect(() => {
            n && null != t.current && t.current.setSelectionRange(t.current.value.length, t.current.value.length);
        }, [n, t]),
        { isEditing: n, inputRef: t, ...r }
    );
}
function tU(e) {
    let {
        inputRef: l,
        label: n,
        value: i,
        onChange: r,
        onKeyDown: a,
        onBlur: s,
        maxLength: o,
        placeholder: d,
        trailing: u,
        error: c,
    } = e;
    return (0, t.jsx)(t_.k, {
        label: n,
        hideLabel: !0,
        inputRef: l,
        value: i,
        onChange: r,
        onBlur: s,
        onKeyDown: a,
        maxLength: o,
        placeholder: d,
        trailing: u,
        error: c,
    });
}
function tB(e) {
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
            preview: f,
            placeholder: m,
            editButtonAriaLabel: p,
            label: x,
            size: v = "default",
            maxLength: h,
            error: A,
            trailing: b,
            className: j,
        } = e,
        I = null != h && (l ? i : n).length > h ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: h }) : void 0,
        C = l && i !== n,
        y = I ?? (C ? void 0 : A),
        N = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: b };
    return (0, t.jsx)(e0, {
        ...N,
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        className: j,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: y,
        input: (0, t.jsx)(tU, {
            inputRef: c,
            label: x,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            placeholder: m,
            trailing: b,
            error: y,
        }),
    });
}
var tF = n(35783);
function tz(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        { user: f, displayProfile: m } = e,
        { analyticsLocations: p } = (0, I.Ay)(),
        x = m?.guildId != null,
        v = m?.guildId ?? void 0,
        h = eW.Ay.canUsePremiumProfileCustomization(f),
        {
            value: A,
            previewValue: b,
            onCommit: j,
        } = ((l = m?.guildId ?? null),
        (n = m?.guildId != null),
        (r = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ei.Ay], () => (null != l ? (ei.Ay.getMember(l, f.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? f.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, eK.p)({ nickname: e.trim(), guildId: m?.guildId ?? void 0 })
                        : (0, eK.p)({ globalName: e.trim() });
                },
                [n, m?.guildId],
            ),
        }),
        C = tV(A, j),
        { isEditing: y, handleCommit: N } = C,
        E = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(v ?? null).pendingDisplayNameStyles),
        P = eV.intl.string(x ? eV.t.mq6Cg9 : eV.t.XuZU7A),
        k = x ? eV.intl.string(eV.t.YcDKr8) : f.username,
        R = eV.intl.string(x ? eV.t["g7OSZ/"] : eV.t.kyfzzc),
        S = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    y && N(),
                    (0, nt.L)({ analyticsLocations: p, guildId: v, stackingBehavior: "stack", returnRef: S });
            },
            [y, N, p, v],
        ),
        D = {
            icon: lD.V,
            tooltip: eV.intl.string(eV.t.lqKKI2),
            "aria-label": eV.intl.string(eV.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: S,
        },
        O =
            null != b
                ? (0, t.jsx)(tG.c$, {
                      user: f,
                      guildId: v,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: E,
                      className: tF.d,
                  })
                : null;
    return (0, t.jsx)(tB, {
        ...C,
        preview: O,
        placeholder: k,
        editButtonAriaLabel: R,
        label: P,
        maxLength: e7.zzC,
        trailing: h ? D : void 0,
    });
}
var tH = n(469432);
function tW(e) {
    let l,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: f,
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
        m = tV(c, f),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eV.intl.string(x ? eV.t.AXiE0i : eV.t["76Aqhl"]);
    return (0, t.jsx)(tB, {
        ...m,
        size: "compact",
        className: a()(tH.k, p && tH.J),
        preview: v ? (0, t.jsx)(tG.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eV.intl.string(eV.t.h6VAO7),
        label: eV.intl.string(eV.t["rniRE+"]),
        placeholder: h,
        maxLength: e7.VE5,
    });
}
var tK = n(145497),
    tX = n(685073),
    tq = n(318785),
    tY = n(534400),
    tZ = n(743981),
    t$ = n(724637),
    tJ = n(329296);
let tQ = "no-server-tag";
function t0(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eR.D, {
        innerRef: l,
        className: a()(t$.L5, { [t$.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eS.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: t$.W3,
            tag: "span",
            children: [
                o
                    ? eV.intl.string(eV.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tY.Z9,
                                  {
                                      src: (0, tX.gC)(n, r, tZ.Sl.SIZE_14),
                                      size: tZ.Sl.SIZE_14,
                                      className: t$.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, tX.gC)(n, r, tZ.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(n_.a, { size: "xs", color: "currentColor", className: t$.u4 }),
            ],
        }),
    });
}
function t1() {
    let e = (0, tq.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return (0, tX.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tQ
                    ? (0, t.jsx)("div", {
                          className: tJ.uN,
                          children: (0, t.jsx)(eS.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: t$.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nH.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tQ, label: eV.intl.string(eV.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tK.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tY.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, eK.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nZ, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eV.intl.string(eV.t.Pdd1nd),
              listboxClassName: t$.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(t0, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var t2 = n(874644);
function t3(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tG.Ay, {
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
        : (0, t.jsx)(tM.A, {
              user: l,
              forceUsername: !0,
              className: t2.a1,
              usernameClass: t2.eb,
              discriminatorClass: t2.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tz, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(t2.AK, t2.j6),
                children: [d, (0, t.jsx)(tG.Ce, {}), (0, t.jsx)(tW, { displayProfile: n }), (0, t.jsx)(t1, {}), r],
            }),
        ],
    });
}
var t7 = n(97808),
    t9 = n(980707),
    t8 = n(477782),
    t5 = n(22231),
    t6 = n(601255),
    t4 = n(562819),
    ie = n(19575),
    il = n(106106),
    it = n(338165);
let ii = ie.Ay.getEnableHardwareAcceleration() ? t7.Js : t7.eu;
function ir(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(t9.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.YAgq3W),
        children: (0, t.jsx)(t8.rX, { children: n }),
    });
}
function ia(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, em.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([ei.Ay], () => (null != n ? ei.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                f = (0, en.z5)(c, g),
                m = d && null != l.avatar,
                p = eW.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
                A = (0, en.a4)({ user: l }),
                b = (0, en.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, en.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, t6.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, l2.XD)({
                            uploadType: l3.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, t4.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, l2.rM)(null, g, (e) => (0, eK.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, en.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                R = i.useCallback(() => {
                    r(), (0, eK.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                t8.Dr,
                                { id: "change-avatar", label: eV.intl.string(eV.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                t8.Dr,
                                { id: "change-decoration", label: eV.intl.string(eV.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.twB3fz),
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
                                      t8.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [m, x, v, N, f, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, t.jsx)(em.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(il.my, il.vk, it.kL, { [it.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(ii, { ...r, imageClassName: a()(il.Lw, it.HU) }),
                  (0, t.jsx)(lZ.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lZ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(ir, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: it.r9,
                              children: (0, t.jsx)(lO.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: t5.R,
                                  "aria-label": eV.intl.string(eV.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var is = n(976726);
function io(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(t9.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.FzU73A),
        children: (0, t.jsx)(t8.rX, { children: n }),
    });
}
function id(e) {
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
                g = (0, lF.sk)("UserProfileModalV2EditableBanner"),
                f = eW.Ay.canUsePremiumProfileCustomization(l),
                m = null == n,
                p = m || f,
                x = g && (m || f),
                v = null != n,
                {
                    pendingBanner: h,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0)),
                j = (0, s.bG)([B.A], () =>
                    null != n ? B.A.getGuildMemberProfile(l.id, n)?.banner : B.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([B.A], () => B.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([B.A], () => B.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, en.Ac)(h, j),
                k = v && C,
                R = v && y,
                S = v && E,
                T = void 0 === A ? null != d : null != A,
                D = void 0 === b ? null != u : null != b,
                O = (0, en.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                L = (0, N.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                M = i.useCallback(() => {
                    r(),
                        (0, l2.XD)({
                            uploadType: l3.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                G = i.useCallback(() => {
                    r(),
                        (0, nf.W)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                _ = i.useCallback(() => {
                    r(), (0, l2.rM)(null, j, (e) => (0, eK.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, eK.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nj.w)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, L]),
                F = i.useCallback(() => {
                    r(), (0, eK.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                t8.Dr,
                                { id: "change-banner", label: eV.intl.string(eV.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                t8.Dr,
                                { id: "change-effect", label: eV.intl.string(eV.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                t8.Dr,
                                { id: "change-frame", label: eV.intl.string(eV.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.jHlJNS),
                                          action: _,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.tT9n7D),
                                          action: _,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        T &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        D &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.A0pzWn),
                                          action: F,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      t8.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["8DfADq"]),
                                          action: F,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, x, R, S, P, T, D, M, G, U, _, V, F]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(ex.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(is.kL, { [is.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ex.A, { ...e, className: is.Pr }),
                  (0, t.jsx)(lZ.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lZ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(io, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: is.r9,
                              children: (0, t.jsx)(lO.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: t5.R,
                                  "aria-label": eV.intl.string(eV.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iu = n(777480),
    ic = n(107563),
    ig = n(570287);
n(938796);
var im = n(913453),
    ip = n(667049),
    ix = n(837531),
    iv = n(186272),
    ih = n(645625),
    iA = n(337796);
let ib = (e) => e * (2 - e),
    ij = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iI = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iC(e) {
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
        : (0, t.jsx)("div", { className: ih.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iy(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(C.A, { skuId: r.skuId, isHovering: i });
}
function iN(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: d,
            displayProfile: g,
            nickname: f,
            hasEntered: m,
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
        [w, _] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? _("compact-xs") : l <= 380 ? _("compact-sm") : _(void 0);
        }, []);
    (0, A.g)(k, U, [], { fireOnMount: !0 });
    let B = null != w ? ij[w] : void 0,
        F = i.useMemo(() => p ?? (0, S.A)(), [p]),
        { relationshipType: z, originApplicationId: H } = (0, s.cf)([M.A], () => ({
            relationshipType: M.A.getRelationshipType(l.id),
            originApplicationId: M.A.getOriginApplicationId(l.id),
        })),
        W = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        Q = (0, D.q)({ userId: l.id }),
        ee = (0, T.fi)(l.id),
        { appIdentities: el, connections: en } = (function (e) {
            let { filteredAppIdentities: l } = (0, Z.A)(e),
                n = (0, J.A)(e),
                t = (0, q.useIsRiotSocialSDKMigrationEnabled)({
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
                                  let l = X.A.get(e.type);
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
        ea = y ? id : ex.A,
        eo = y ? ia : em.A;
    return (0, t.jsxs)("main", {
        className: a()(ih.profile, null != w && ih[w]),
        ref: k,
        "aria-busy": N,
        children: [
            (0, t.jsxs)("div", {
                className: ih.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: ih.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ea, {
                            user: l,
                            displayProfile: g,
                            guildId: r,
                            themeType: es.d.MODAL_V2,
                            specOverrides: B,
                            pendingBanner: b,
                            pendingAccentColor: j,
                        }),
                    }),
                    (0, t.jsx)(eo, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: es.d.MODAL_V2,
                        specOverrides: B,
                        avatarDecorationOverride: v,
                        avatarOverride: h,
                    }),
                    (0, t.jsx)(eE.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: es.d.MODAL_V2,
                        hasEntered: m,
                        prompt: P ? F : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: ih.profileBody,
                children: [
                    (0, t.jsx)(t3, {
                        user: l,
                        displayProfile: g,
                        nickname: f,
                        trailing: (0, t.jsx)(ep.A, { displayProfile: g, themeType: es.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: y,
                    }),
                    z === e7.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: ih.profileOverlay,
                            children: (0, t.jsx)(eA.A, {
                                user: l,
                                applicationId: H,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: ih.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eN.A.Overlay,
                            {
                                className: ih.profileOverlay,
                                children: (0, t.jsx)(eA.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: ih.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: ih.profileOverlay,
                            children: (0, t.jsx)(tf.A, {
                                heading: eV.intl.string(eV.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: ih.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ey.A, { user: l, className: ih.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: ih.profileOverlay,
                            children: (0, t.jsx)(eC.A, { username: f }),
                        }),
                    (0, t.jsx)("div", {
                        className: ih.profileButtons,
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
                    P && (0, t.jsx)(ev.A, { isPremiumUser: (0, V.ki)(n), onInteraction: x }),
                    !W && (0, t.jsx)(e5, { displayProfile: g, isEditable: y }),
                    Q.length > 0 &&
                        (0, t.jsx)(tf.A, {
                            heading: eV.intl.string(eV.t["Uv/eTx"]),
                            children: (0, t.jsx)(eh.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(tf.A, {
                        heading: eV.intl.string(eV.t.a6XYD9),
                        children: (0, t.jsx)(ej.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: tm.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eP.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: ih.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !W &&
                        (y || ei) &&
                        (0, t.jsx)(tf.A, {
                            heading: eV.intl.string(eV.t["3fe7U5"]),
                            scrollTargetId: tm.bk.CONNECTIONS,
                            children: (0, t.jsx)(lS, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: y,
                                className: ih.profileAppConnections,
                            }),
                        }),
                    !W &&
                        er &&
                        (0, t.jsx)(tf.A, {
                            heading: eV.intl.string(eV.t.PHjkRE),
                            scrollTargetId: tm.bk.APPS,
                            children: (0, t.jsx)(eF, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: ih.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tx, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(iy, { displayProfile: g, profileEffectOverride: I, isHovering: L }),
            null != C && (0, t.jsx)(E.A, { frame: C, filterLayer: iI }),
        ],
    });
}
function iE(e) {
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
function iP(e) {
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
            customStatusPrompt: T,
            openedAt: D,
            onClose: O,
            sourceAnalyticsLocations: V = [],
            themeContainerClassName: H,
        } = e,
        W = l.id === n.id,
        {
            guildId: K,
            pendingGuildId: X,
            isFetching: q,
            handleSelectUserProfile: Y,
            handleRetry: Z,
            hasError: $,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                f = (0, s.bG)([B.A], () => B.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
                m = i.useCallback(() => {
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
                    hasError: "retrying" === d || (null != f && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        J = i.useMemo(() => (null != K ? { [K]: [l.id] } : {}), [K, l.id]);
    (0, b.Eq)(J, "UserProfileModalV2");
    let ee = (0, F.X)("UserProfileModalV2"),
        eo = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        ec = W && ee,
        em = (0, Q.W)(l.id),
        ep = $ && !em,
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
            return (0, s.cf)([ea.A, er.default, ei.Ay, B.A], () => {
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
                    g = B.A.getUserProfile(l),
                    f = null != n ? B.A.getGuildMemberProfile(l, n) : null;
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
                        guildValue: f?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, en.us)({
                        userValue: g?.profileFrame,
                        guildValue: f?.profileFrame,
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
            handleCollapse: eT,
            refs: { expandIconButtonRef: eD, expandTabButtonRef: eO, collapseButtonRef: eL },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ib },
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
                f = i.useCallback(() => {
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
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        ew = ec && !eP,
        eM = ec && (!eP || ek),
        { defaultWishlistId: eG } = (0, s.cf)([B.A], () => ({ defaultWishlistId: B.A.getFirstWishlistId(l.id) }));
    (0, L.fw)({ wishlistId: eG, userId: l.id });
    let e_ = (0, ef.fC)(),
        eU = ep && (!ec || !q),
        eB = ec && $,
        eF = X !== K || eB || null != e_.interactionType,
        ez = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, im.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([er.default], () => er.default.getCurrentUser())),
                    (n = (0, s.bG)([B.A], () => B.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, ip.A)(i.id),
                g = (0, ig.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = B.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? B.A.getWishlistSettings(i.id, p) : null,
                h = (x ? ic.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (m || A) && f.push({ text: eV.intl.string(eV.t.laViwx), section: tm.RP.WIDGETS }),
                f.push({ text: eV.intl.string(eV.t.chq59f), section: tm.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = M.A.isFriend(i.id),
                I = v?.visibility === iu.a.PUBLIC;
            return (
                (m || (!m && h && I && g && (!b || (b && j)))) &&
                    f.push({ text: eV.intl.string(eV.t["7lZ31J"]), section: tm.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, ix.A)(a), section: tm.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, iv.A)(d), section: tm.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eH } = (0, I.Ay)([...V, j.A.USER_PROFILE_MODAL_V2]),
        eW = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: K,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eK = (0, z.Ay)(l.id, K),
        eX = void 0 !== eE ? eE?.skuId : eK?.profileFrame?.skuId,
        eq = (0, N.A)(eX, "UserProfileModalV2"),
        { profileFrameStyle: eY, profileFrameClassName: eZ } = (0, P.A)(eX);
    (0, y.A)({ skuId: eK?.profileFrame?.skuId, openedAt: D, context: eW, analyticsLocations: eH });
    let e$ = _.Ay.useName(eK?.guildId, u, l),
        eJ = (0, k.GV)(),
        eQ = (0, s.bG)([w.A], () => (null != K ? w.A.getGuild(K) : null)),
        e0 = W
            ? null != eQ
                ? eV.intl.formatToPlainString(eV.t.M7OhOF, { guildName: eQ.name })
                : eV.intl.string(eV.t.egQPgM)
            : eV.intl.format(eV.t.KRe1Fk, { name: e$ });
    return (0, t.jsx)(I.f5, {
        value: eH,
        children: (0, t.jsx)(U.of, {
            value: eW,
            openedAt: D,
            fetchStartedAt: eK?.fetchStartedAt,
            fetchEndedAt: eK?.fetchEndedAt,
            isLoaded: eK?.isLoaded,
            children: (0, t.jsx)(ef.Hl, {
                value: e_,
                children: (0, t.jsx)(eg.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iA.zr, { [iA.QF]: eK?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eJ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tk, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ih.layoutContainer, eZ, {
                                        [ih.editingPanelEnabled]: ec,
                                        [ih.editingPanelExpanded]: ec && eP,
                                        [ih.isAnimating]: ek,
                                    }),
                                    style: eY,
                                    children: [
                                        (0, t.jsxs)(iE, {
                                            user: l,
                                            displayProfile: eK,
                                            pendingThemeColors: ev,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iA.Oo,
                                                    children: [
                                                        (0, t.jsx)(lc.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: eJ, children: e0 }),
                                                        }),
                                                        eM &&
                                                            (0, t.jsx)(n5, {
                                                                buttonRef: eD,
                                                                onClick: eS,
                                                                className: ih.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ew &&
                                                    (0, t.jsx)("div", {
                                                        className: ih.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(n8, {
                                                            innerRef: eO,
                                                            onClick: eS,
                                                            className: ih.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                ec &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(ti, {
                                                                  className: a()(ih.editingPanel, {
                                                                      [ih.isExpanded]: eP,
                                                                  }),
                                                                  selectedGuildId: X,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: Y,
                                                                  onClose: eT,
                                                                  collapseButtonRef: eL,
                                                                  isLoading: q,
                                                                  isEditingDisabled: $,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eN.A, {
                                                    className: a()(H, iA.A7, ih.profileContentOuter),
                                                    innerClassName: ih.profileContentInner,
                                                    user: l,
                                                    displayProfile: eK,
                                                    themeType: es.d.MODAL_V2,
                                                    pendingThemeColors: ev,
                                                    isPrivate: eK?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iC, { displayProfile: eK, pendingBanner: ej }),
                                                        eK?.private === !0 && (0, t.jsx)(eI.A, {}),
                                                        !ep && (0, t.jsx)(tw, { className: ih.noticeContainer }),
                                                        eU &&
                                                            (0, t.jsx)("div", {
                                                                className: ih.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tb, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eV.intl.string(eV.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Z
                                                                            ? eV.intl.string(eV.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Z,
                                                                    actionDisabled: !ec && q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: ih.profileCardToastContainer,
                                                            children: (0, t.jsx)(eb.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tN, {
                                                            showScrim: eF,
                                                            showLoadingSpinner: q,
                                                            className: ih.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(iN, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: K,
                                                                    channelId: u,
                                                                    displayProfile: eK,
                                                                    nickname: e$,
                                                                    originGuildId: o,
                                                                    hasEntered: S === v.ip.ENTERED,
                                                                    customStatusPrompt: T,
                                                                    onClose: O,
                                                                    avatarDecorationOverride: eh,
                                                                    avatarOverride: eA,
                                                                    bannerOverride: ej,
                                                                    accentColorOverride: eC,
                                                                    profileEffectOverride: ey,
                                                                    profileFrame: eq,
                                                                    allowEditing: ex,
                                                                    isLoading: q,
                                                                }),
                                                                (0, t.jsx)(tR.A, {
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
                            (0, t.jsx)(tr.A, { userId: l.id, guildId: K, className: ih.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
