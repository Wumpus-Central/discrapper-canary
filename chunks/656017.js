n.d(l, { A: () => ix });
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
    M = n(994500),
    _ = n(351906),
    w = n(562153),
    G = n(474090),
    U = n(183555),
    V = n(841595),
    F = n(591179),
    B = n(999291),
    z = n(101928),
    H = n(837529),
    W = n(346713),
    K = n(573648),
    q = n(941314),
    X = n(429913),
    Y = n(321078),
    Z = n(403362),
    $ = n(484509),
    J = n(83931),
    Q = n(920601),
    ee = n(903209),
    el = n(919395),
    en = n(101058),
    et = n(696451),
    ei = n(287809),
    er = n(836602),
    ea = n(996988),
    es = n(985253);
let eo = (0, o.FT)(es.T[ea.d.MODAL_V2].avatarSize),
    ed = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function eu(e, l) {
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
var ec = n(716804),
    eg = n(679492),
    em = n(718019),
    ef = n(328296),
    ep = n(915614),
    ex = n(744753),
    ev = n(361311),
    eh = n(931481),
    eA = n(439053),
    eb = n(743987),
    ej = n(312381),
    eI = n(501193),
    eC = n(383448),
    ey = n(946356),
    eN = n(983495),
    eE = n(280645),
    eP = n(109112),
    ek = n(939249),
    eR = n(834730),
    eS = n(730134),
    eD = n(169869),
    eT = n(837057),
    eO = n(310419),
    eL = n(773669),
    eM = n(889227),
    e_ = n(967198),
    ew = n(488995),
    eG = n(375708),
    eU = n(985176);
function eV(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eD.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eU.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eS.A, { user: new eM.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eP._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eU.Hd,
                children: [
                    (0, t.jsxs)(ek.D, {
                        className: eU.OB,
                        onClick: () => {
                            i?.(),
                                (0, eT.transitionToGlobalDiscovery)({
                                    tab: ew.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eO.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eR.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eR.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eR.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eU.nk,
                                children: eG.intl.format(eG.t.zIT9YA, { applicationHook: () => l.application.name }),
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
        o = (0, s.bG)([eL.default], () => eL.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eU.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eU.FI,
                          children: (0, t.jsx)(eV, {
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
var eB = n(240248),
    ez = n(308244),
    eH = n(428262),
    eW = n(84540),
    eK = n(621466);
n(321073);
var eq = n(219869),
    eX = n(990078),
    eY = n(775602),
    eZ = n(916315);
function e$(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([eY.A], () => eY.A.useReducedMotion),
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
                !o || (null != c.current && (0, eK.vq)(e.relatedTarget) && c.current.contains(e.relatedTarget)) || v();
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
function eJ(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: eZ.L7,
            children: (0, t.jsx)(eq.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(eX.m, { text: l, ariaHidden: !0, children: i });
}
function eQ(e) {
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
            className: a()(eZ.LL, C && eZ.JD),
            onClick: u,
            children: [
                I
                    ? (0, t.jsx)(eR.E, {
                          id: b,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: eZ.qf,
                          children: r,
                      })
                    : n,
                (0, t.jsx)(ek.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": E,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: A },
                }),
                null != m && (0, t.jsx)("div", { className: eZ.lD, children: (0, t.jsx)(eJ, { ...m }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(eZ.kL, { [eZ.oE]: "compact" === g, [eZ.c1]: "multiline" === g }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: eZ.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: eZ.VH, children: P }),
                              y &&
                                  (0, t.jsxs)(eR.E, {
                                      id: j,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      className: eZ.VP,
                                      children: [(0, t.jsx)(c.E, { size: "xs", color: "currentColor" }), f],
                                  }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var e0 = n(786826);
function e1(e) {
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
        C = null != h && (l ? r : n).length > h ? eG.intl.formatToPlainString(eG.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback(
            (e) => {
                (e.metaKey || e.ctrlKey) && "Enter" === e.key && (e.preventDefault(), m());
            },
            [m],
        );
    return (0, t.jsx)(eQ, {
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
        input: (0, t.jsx)(e0.f, {
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
let e2 = [
    { value: "HAIKU", label: () => eG.intl.string(eG.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eG.intl.string(eG.t.CXkR1L) },
    { value: "TELL_US", label: () => eG.intl.string(eG.t.eutr4P) },
    { value: "FUN_FACT", label: () => eG.intl.string(eG.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eG.intl.string(eG.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eG.intl.string(eG.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eG.intl.string(eG.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eG.intl.string(eG.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eG.intl.string(eG.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eG.intl.string(eG.t.u7WCGI) },
];
var e7 = n(652215),
    e3 = n(307731);
function e8(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()),
        c = d?.guildId != null,
        g = eH.Ay.canUsePremiumProfileCustomization(u),
        {
            value: m,
            previewValue: f,
            onCommit: p,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([er.A], () => er.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, eW.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        x = (function (e, l) {
            let { isEditing: n, wrapperRef: t, handleCommit: r, ...a } = e$(e, l),
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
                        (0, eK.vq)(e.target) && !s(e.target) && r();
                    };
                return e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l);
            }, [n, t, s, r]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let l = e.relatedTarget;
                    !(0, eK.vq)(l) || s(l) || r();
                },
                [n, s, r],
            );
            return { isEditing: n, wrapperRef: t, handleCommit: r, ...a, onBlur: o };
        })(m, p),
        v = !(0, eB.uJ)(f),
        h = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e2.length)), e2[e];
        }, []),
        A = c ? eG.intl.string(eG.t.yPJ9xr) : h.label();
    return !c || g
        ? (0, t.jsx)(e1, {
              ...x,
              preview: v ? (0, t.jsx)(ez.A, { userBio: f, setLineClamp: !1 }) : null,
              placeholder: A,
              editButtonAriaLabel: eG.intl.string(eG.t.lO3n7a),
              label: eG.intl.string(eG.t["YWo+Zd"]),
              emojiPickerIntention: e3.EmojiIntention.PROFILE,
              maxLength: e7.NA2,
          })
        : v
          ? (0, t.jsx)(ez.A, { userBio: f, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e9(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eB.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eG.intl.string(eG.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e8, { displayProfile: l }) : (0, t.jsx)(ez.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var e5 = n(982168),
    e6 = n(722868),
    e4 = n(822775),
    le = n(982985),
    ll = n(700174),
    ln = n(34188),
    lt = n(859040),
    li = n(23722),
    lr = n(993401);
function la(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, li.A)(() => {
            (0, lt.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lr.q3, {
        action: "VISIT_SHOP",
        icon: ln.U,
        tooltipText: eG.intl.string(eG.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var ls = n(573355),
    lo = n(102951);
function ld(e) {
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
        g = (0, e6.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lo.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === e7.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(le.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(la, { onClose: d }),
                        (0, t.jsx)(ll.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(e4.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(la, { onClose: d }),
                        (0, t.jsx)(ll.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(le.e, { userId: l.id, onClose: e5.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(ll.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === e7.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(le.e, { userId: l.id, onClose: e5.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ll.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e7.eA$.FRIEND || o === e7.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(le.e, { userId: l.id, onClose: e5.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(ls.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ll.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e7.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(le.e, { userId: l.id, onClose: e5.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(ls.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(ll.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ls.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(le.l, { userId: l.id, onClose: e5.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(ll.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lu = n(463156),
    lc = n(349288),
    lg = n(509434),
    lm = n(307301),
    lf = n(228366),
    lp = n(95561),
    lx = n(874490),
    lv = n(370480),
    lh = n(968309),
    lA = n(174459),
    lb = n(486020),
    lj = n(123917),
    lI = n(783419);
let lC = "User Profile Modal V2";
function ly(e) {
    let l = K.A.get(e);
    (0, lh.A)({ platformType: l.type, location: lC }),
        lA.default.track(e7.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lC,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lN() {
    lf.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: ly, stackingBehavior: "stack" });
}
function lE(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, lv.An)(r[lI.pK.CREATED_AT], n),
        s = K.A.get((0, lx.ML)(l.type));
    return (0, t.jsx)(lk, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(eX.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eR.E, { variant: "text-sm/normal", className: eU.GW, children: l.name }),
                  })
                : (0, t.jsx)(lc.Anchor, {
                      href: e,
                      className: eU.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eG.intl.string(eG.t.q5jLJB)}`
                              : `${l.name}, ${eG.intl.string(eG.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lp.zV)(e7.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lj.h)({ href: e, trusted: s?.type !== e7.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eU.vi,
                          children: [
                              (0, t.jsx)(eX.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eR.E, {
                                      variant: "text-sm/normal",
                                      className: eU.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lg.I, { size: "xs", color: "currentColor" }),
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
function lP(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lb.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lk, {
        renderAccountName: () =>
            (0, t.jsx)(eX.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eR.E, {
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
function lk(e) {
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
            (0, t.jsx)(eX.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eU.k_,
                    children: (0, t.jsx)("img", {
                        alt: eG.intl.formatToPlainString(eG.t.rtm15P, { name: i }),
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
                                (0, t.jsx)(eR.E, {
                                    variant: "text-xs/normal",
                                    children: eG.intl.format(eG.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eU.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lR(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([eL.default], () => eL.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eU.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eU.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lE, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lP, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(ek.D, {
                    className: eU.qG,
                    onClick: lN,
                    children: [
                        (0, t.jsx)(lm.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eR.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eG.intl.string(eG.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lS = n(922139),
    lD = n(193885),
    lT = n(408278),
    lO = n(890377),
    lL = n(789645),
    lM = n(534514),
    l_ = n(821609),
    lw = n(403581),
    lG = n(194261),
    lU = n(689175),
    lV = n(517461),
    lF = n(13875),
    lB = n(783420),
    lz = n(487233),
    lH = n(120386),
    lW = n(317097),
    lK = n(602853),
    lq = n(922016),
    lX = n(508274),
    lY = n(654107),
    lZ = n(930349);
function l$(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lK.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lY.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([er.A, V.A], () => ({
            pendingAccentColor: er.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: V.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lW.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eW.p)({ accentColor: e }), []);
    return (0, t.jsx)(lq.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lX.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lZ.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eG.intl.string(eG.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lW.Hl)(c) } }),
            }),
    });
}
var lJ = n(450373),
    lQ = n(252732),
    l0 = n(339984),
    l1 = n(111242);
function l2(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l1.o, style: { backgroundColor: l } });
}
function l7(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l1._ });
}
function l3(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lK.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lW.LX)(r),
        { hex: s } = (0, lJ.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l7, { src: o }) : (0, t.jsx)(l2, { backgroundColor: s });
}
function l8(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = null != n,
        o = (0, B.Ay)(l, n),
        d = (0, s.bG)([er.A], () => er.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()?.banner),
        c = (0, s.bG)([V.A], () =>
            null != n ? V.A.getGuildMemberProfile(l, n)?.banner : V.A.getUserProfile(l)?.banner,
        ),
        g = null === d,
        m = a && (o?.isUsingGuildMemberBanner() ?? !1),
        f = g && a && !m ? void 0 : d,
        p = (0, el.Ac)(d, c),
        x = a && null != u,
        v = p
            ? {
                  onClick: () => (0, lQ.rM)(null, c, (e) => (0, eW.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eG.intl.string(x ? eG.t.jHlJNS : eG.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(lZ.V, {
        affordance: v,
        variant: "square",
        onClick: () =>
            (0, lQ.XD)({
                uploadType: l0.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eG.intl.string(eG.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(l3, { displayProfile: o, pendingBanner: f, shouldAnimate: e }),
    });
}
var l9 = n(922301),
    l5 = n(368919),
    l6 = n(259065),
    l4 = n(283607);
let ne = "heading-lg/bold";
function nl(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: l4.M,
        children:
            null != n
                ? (0, t.jsx)(eR.E, {
                      variant: ne,
                      children: (0, t.jsx)(l5.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? l9.G.ANIMATED : l9.G.STATIC,
                          textClassName: l4.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eR.E, { variant: ne, className: l4.W, color: "text-muted", children: l }),
    });
}
function nn(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([et.Ay], () => (null != n ? (et.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([er.A], () => er.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([er.A], () => er.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: f,
            pendingDisplayNameStyles: p,
        } = (0, el.B0)(l, n ?? void 0),
        x = o ? f : m,
        v = void 0 !== p,
        h = null === p,
        A = o && null != m,
        b = (0, el.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        j = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        y = o ? (j(void 0 !== g ? g : d) ?? j(C) ?? l.username) : (j(C) ?? l.username),
        N =
            null != b && (v ? null != p : null != x)
                ? {
                      onClick: () => (0, eW.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eG.intl.string(A ? eG.t.en3ogK : eG.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, l6.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(lZ.V, {
        affordance: (!h && (v || null != x)) || A ? N : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eG.intl.string(eG.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(nl, { stylesPreview: b, displayName: y, shouldAnimate: e }),
        disabled: r,
    });
}
var nt = n(473219),
    ni = n(366010),
    nr = n(736653),
    na = n(617061),
    ns = n(203632),
    no = n(71393),
    nd = n(466681);
let nu =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nc =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ng(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, nr.Ay)(),
        r = (0, ni.M)(i) ? nu : nc;
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
                    restartMethod: ns.HL.FromStart,
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
        u = (0, s.bG)([no.A], () => (null != n ? no.A.getGuild(n) : null)),
        c = (0, el.N2)({ user: l }),
        g = (0, el.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, el.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        v = (0, el.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        h =
            null != v && (f ? null != m : null != g)
                ? {
                      onClick: () => (0, eW.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eG.intl.string(x ? eG.t["SQy/Po"] : eG.t.uMuafO),
                  }
                : void 0,
        A = i.useCallback(() => {
            (0, na.W)({
                analyticsLocations: o,
                guild: u ?? void 0,
                initialSelectedEffect: v ?? void 0,
                stackingBehavior: "stack",
            });
        }, [o, u, v]);
    return (0, t.jsx)(lZ.V, {
        affordance: p && !x ? "add" : h,
        variant: a,
        onClick: A,
        accessibleLabel: eG.intl.string(eG.t["/dRfCf"]),
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
        d = (0, nr.Ay)(),
        u = (0, ni.M)(d) ? nu : nc,
        c = null != n,
        g = (0, s.bG)([no.A], () => (null != n ? no.A.getGuild(n) : null)),
        m = (0, el.Xf)({ user: l }),
        f = (0, el.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, el.Tu)(n ?? void 0),
        x = void 0 !== p,
        v = null === p || (!x && null == f),
        h = c && null != m,
        A = (0, el.lw)({ pendingValue: p, userValue: m, guildValue: f, guildId: n ?? void 0 }),
        b = (0, N.A)(A?.skuId, "EditableTileProfileFrameButton"),
        { profileFrameStyle: j, profileFrameClassName: C } = (0, P.A)(b?.skuId),
        y =
            null != A && (x ? null != p : null != f)
                ? {
                      onClick: () => (0, eW.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eG.intl.string(h ? eG.t.j6hZyM : eG.t.nQBruk),
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
    return (0, t.jsx)(lZ.V, {
        affordance: v && !h ? "add" : y,
        variant: "square",
        onClick: k,
        accessibleLabel: eG.intl.string(eG.t["9/hmle"]),
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
var nh = n(33851),
    nA = n.n(nh),
    nb = n(684732),
    nj = n(458217),
    nI = n(298387);
function nC(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lW.Hl)(l),
        m = (0, lW.bJ)(l, 0xffffff) < nj.Tr.NonText;
    return (0, t.jsx)(lq.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lX.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ek.D, {
                ...n,
                innerRef: c,
                className: nI.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nI.Hy, { [nI.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function ny(e) {
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
        c = (0, lW.Hl)(l),
        g = (0, lW.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = eG.intl.formatToPlainString(eG.t.FquTfm, { colorLabel: c }),
        p = eG.intl.formatToPlainString(eG.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(lZ.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nI.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nC, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nC, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nN(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, B.Ay)(l.id, n),
        {
            pendingThemeColors: o,
            pendingAvatar: d,
            savedThemeColors: u,
        } = (0, s.cf)([er.A, V.A], () => {
            let e = er.A.getPendingChanges(n ?? void 0);
            return {
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
                savedThemeColors: null != n ? V.A.getGuildMemberProfile(l.id, n)?.themeColors : void 0,
            };
        }),
        c = (0, en.V7)({ userId: l.id, image: d }),
        { primaryColor: g, secondaryColor: m } = (0, z.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        f = (0, lK.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        v = (0, lY.rh)(p, f, !1),
        h = i.useCallback(
            (e) => {
                let l = nA()(e, a?.themeColors);
                (0, eW.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        ),
        A =
            null != n && (0, nb.l)(o, u)
                ? {
                      onClick: () => (0, eW.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eG.intl.string(eG.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == m
        ? null
        : (0, t.jsx)(ny, {
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
var nE = n(315629),
    nP = n(788868),
    nk = n(235684);
function nR() {
    return (0, t.jsx)(lB.A, {
        subscriptionTier: nP.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)(nE.h, {
                color: "nitro-pink",
                className: nk.U,
                children: [
                    (0, t.jsx)(eR.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eG.intl.format(eG.t.TmfgI2, { onClick: (e) => l(e) }),
                    }),
                    (0, t.jsx)(l_.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lw.t,
                        text: eG.intl.string(eG.t.pj0XBN),
                        onClick: l,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nS = n(55619),
    nD = n(942308);
function nT() {
    return (0, t.jsxs)("div", {
        className: nD.k,
        children: [
            (0, t.jsx)(eR.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eG.intl.string(eG.t.JFY17v),
            }),
            (0, t.jsx)(l_.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eG.intl.string(eG.t.R9GHya),
                onClick: () => nS.A.setEnabled(!1),
            }),
        ],
    });
}
var nO = n(847374),
    nL = n(111159),
    nM = n(548118),
    n_ = n(711014),
    nw = n(540637),
    nG = n(801461),
    nU = n(44482),
    nV = n(844222),
    nF = n(561392),
    nB = n(716263),
    nz = n(15626),
    nH = n(930856);
function nW(e) {
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
            let { reducedMotion: e } = i.useContext(nV.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nF.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nB.DL)(o, {
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
        y = i.useContext(nz._),
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
        _ = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        w = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
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
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, nw.l)(!0, l),
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
                            G();
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
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, V, G, r, v, B],
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
        onClick: _,
        onMouseDown: w,
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
                    className: a()(nH.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nw.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: M,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(nU.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nK = n(138325);
let nq = "MAIN_PROFILE";
function nX(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nM.Ay, { className: nK.$f, guild: l, size: nM.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nY(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: nK.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: nK.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: nK.qL,
                children: [
                    (0, t.jsx)(eR.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eR.E, {
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
function nZ(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(ek.D, {
        innerRef: r,
        className: a()(nK.L5, { [nK.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eR.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nK.v9,
                children: n,
            }),
            (0, t.jsx)(nO.a, {
                className: nK.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function n$(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([n_.Ay], () => n_.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([no.A], () => no.A.getGuilds()),
        c = (0, s.bG)([e_.A], () => {
            let e = e_.A.getGuildId();
            return null == e || er._.has(e) ? null : e;
        }),
        g = (0, s.cf)([et.Ay, n_.Ay], () => {
            let e = {};
            for (let l of n_.Ay.getFlattenedGuildIds()) {
                let n = et.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: nq,
                    label: eG.intl.string(eG.t["2p07FR"]),
                    value: nq,
                    leading: (0, t.jsx)(nL.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(nX, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(Z.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(nX, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? nq,
        p = m.find((e) => e.value === f) ?? m[0],
        v = i.useCallback(
            (e) => {
                let n = e === nq ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(nW, {
        className: nK.kL,
        label: eG.intl.string(eG.t.rki38K),
        listboxClassName: nK.yt,
        options: m,
        value: f,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(nY, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(nZ, { leading: p.value === nq ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var nJ = n(809467);
let nQ = "profile-modal-editing-panel",
    n0 = "profile-modal-editing-panel-heading";
function n1(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eX.m, {
        text: eG.intl.string(eG.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ek.D, {
            innerRef: i,
            "aria-label": eG.intl.string(eG.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": nQ,
            className: a()(nJ.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lD.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function n2(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(eX.m, {
            text: eG.intl.string(eG.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lT.K, {
                buttonRef: i,
                "aria-label": eG.intl.string(eG.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": nQ,
                icon: lD.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function n7(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eX.m, {
        text: eG.intl.string(eG.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(ek.D, {
            innerRef: n,
            className: nJ.cS,
            "aria-label": eG.intl.string(eG.t["l/A351"]),
            onClick: l,
            "aria-controls": nQ,
            "aria-expanded": !0,
            children: (0, t.jsx)(lO.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function n3() {
    let [e, l] = (0, lV.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nJ.X6,
              children: [
                  (0, t.jsx)(eR.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eG.intl.string(eG.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ek.D, {
                      "aria-label": eG.intl.string(eG.t.rSe9ra),
                      className: nJ.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lL.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function n8() {
    return (0, t.jsx)(lB.A, {
        subscriptionTier: nP.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)("div", {
                className: nJ.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: nJ.tm,
                        children: [
                            (0, t.jsx)(lM.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eG.intl.string(eG.t.bO0TOe),
                            }),
                            (0, t.jsx)(eR.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eG.intl.format(eG.t["3PujdE"], { onClick: (e) => l(e) }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(l_.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lw.t,
                        text: eG.intl.string(eG.t["7IWwak"]),
                        onClick: l,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: nJ.D0,
                        children: (0, t.jsx)("div", { className: nJ.ZN, children: (0, t.jsx)(lG.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function n9() {
    return (0, t.jsx)(eR.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: nJ.BJ,
        "aria-hidden": !0,
        children: eG.intl.format(eG.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lw.t, { size: "xxs", color: "currentColor", className: nJ.qp }),
        }),
    });
}
function n5(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: nJ.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nJ.AM,
                children: [
                    (0, t.jsx)(lM.D, {
                        className: nJ.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(eX.m, {
                            text: eG.intl.string(eG.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lw.t, {
                                className: nJ.l3,
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
function n6(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lS.animated.div, { className: nJ.HT, style: e, children: (0, t.jsx)(nR, {}) }) : null,
    );
}
function n4(e) {
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
        p = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()),
        x = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && eH.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lF.sk)("UserProfileModalV2EditingPanel"),
        C = (0, li.A)(r),
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
              id: nQ,
              "aria-labelledby": n0,
              className: a()(nJ.nd, { [nJ.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: nJ.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: n0, children: eG.intl.string(eG.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: nJ.wx,
                          children: [
                              (0, t.jsx)(n7, { innerRef: g, onClick: u }),
                              (0, t.jsx)(n$, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: C,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nT, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(f.F, {
                                        children: (0, t.jsxs)(lU.zC, {
                                            ref: y,
                                            className: a()(nJ.XG, { [nJ.uH]: P }),
                                            onScroll: E,
                                            children: [
                                                h && (A ? (0, t.jsx)(n3, {}) : (0, t.jsx)(n8, {})),
                                                A && (0, t.jsx)(n9, {}),
                                                (0, t.jsx)(n5, {
                                                    heading: eG.intl.string(eG.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: (0, t.jsx)(nt.A, {
                                                        user: p,
                                                        guildId: l,
                                                        disabled: v || j,
                                                    }),
                                                }),
                                                (0, t.jsxs)(n5, {
                                                    heading: eG.intl.string(eG.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(lz.A, { user: p, guildId: l, disabled: v || j }),
                                                        (0, t.jsx)(lH.A, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsx)(n5, {
                                                        heading: eG.intl.string(eG.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: (0, t.jsx)(nn, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                        }),
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(n5, {
                                                          heading: eG.intl.string(eG.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nN, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(l8, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(n5, {
                                                          heading: eG.intl.string(eG.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(l$, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(n5, {
                                                    heading: eG.intl.string(I ? eG.t["Vfbar/"] : eG.t.wR5wOo),
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
                                    b && (0, t.jsx)(n6, { isDismissed: N }),
                                ],
                            }),
                  ],
              }),
          });
}
var te = n(982599),
    tl = n(756634),
    tn = n(83013),
    tt = n(518477),
    ti = n(77085);
function tr(e) {
    let { userId: l } = e,
        n = (0, ec.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)();
    return (0, t.jsx)(tn.A, {
        heading: eG.intl.string(eG.t["mQKv+v"]),
        scrollTargetId: tt.bk.NOTE,
        children: (0, t.jsx)(tl.A, {
            userId: l,
            className: ti.N,
            autoFocus: n === tt.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ta = n(123292),
    ts = n(921701),
    to = n(861173);
function td(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: ts.kL,
            children: (0, t.jsxs)("div", {
                className: a()(to.oR, ts.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: ts.Kk, children: l }),
                    (0, t.jsx)(eR.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: ts.hP,
                            children: (0, t.jsx)(ta.Q, {
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
var tu = n(765178),
    tc = n(247928),
    tg = n(289873),
    tm = n(984180);
function tf(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tu.O.announce(eG.intl.string(eG.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tc.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tm.f, l && tm.z),
                    children: n && (0, t.jsx)(tg.y, { type: tg.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tp = n(568602),
    tx = n(625494);
function tv(e) {
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
                tx._.subscribe(e7.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tx._.unsubscribe(e7.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tp.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var th = n(515054),
    tA = n(933832),
    tb = n(972213),
    tj = n(97483),
    tI = n(606758);
let tC = {
        [tt.jM.WIDGET_ADDED]: {
            message: eG.intl.string(eG.t.fFP1Uy),
            icon: (0, t.jsx)(tA.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tt.jM.WIDGET_REMOVED]: {
            message: eG.intl.string(eG.t.zzsK7h),
            icon: (0, t.jsx)(tA.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tt.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eG.intl.string(eG.t["84MExs"]),
            icon: (0, t.jsx)(tb.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tj.Ck.FAILURE,
        },
        [tt.jM.SOMETHING_WENT_WRONG]: {
            message: eG.intl.string(eG.t.F8FvUy),
            icon: (0, t.jsx)(tb.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tj.Ck.FAILURE,
        },
    },
    ty = (e) => {
        let { className: l } = e,
            n = (0, tI.fu)(),
            r = (0, s.bG)([eY.A], () => eY.A.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(tC[n]), tu.O.announce(tC[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, tI.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, tI.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lS.animated.div, { className: l, style: e, children: (0, t.jsx)(td, { ...u }) }),
                ),
            })
        );
    };
var tN = n(297413),
    tE = n(878555),
    tP = n(292666);
function tk(e, l) {
    let { isEditing: n, inputRef: t, ...r } = e$(e, l);
    return (
        i.useEffect(() => {
            n && null != t.current && t.current.setSelectionRange(t.current.value.length, t.current.value.length);
        }, [n, t]),
        { isEditing: n, inputRef: t, ...r }
    );
}
function tR(e) {
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
    return (0, t.jsx)(tP.k, {
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
function tS(e) {
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
        C = null != A && (l ? i : n).length > A ? eG.intl.formatToPlainString(eG.t.ICT5S6, { maxLength: A }) : void 0,
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
            input: (0, t.jsx)(tR, {
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
        ? (0, t.jsx)(eQ, { ...E, variant: "compact", previewErrorMessage: N })
        : (0, t.jsx)(eQ, { ...E, variant: "default", trailing: j, previewErrorMessage: N });
}
var tD = n(35783);
function tT(e) {
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
        h = eH.Ay.canUsePremiumProfileCustomization(m),
        {
            value: A,
            previewValue: b,
            onCommit: j,
        } = ((l = f?.guildId ?? null),
        (n = f?.guildId != null),
        (r = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([et.Ay], () => (null != l ? (et.Ay.getMember(l, m.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([er.A], () => er.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([er.A], () => er.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? m.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, eW.p)({ nickname: e.trim(), guildId: f?.guildId ?? void 0 })
                        : (0, eW.p)({ globalName: e.trim() });
                },
                [n, f?.guildId],
            ),
        }),
        C = tk(A, j),
        { isEditing: y, handleCommit: N } = C,
        E = (0, s.bG)([er.A], () => er.A.getPendingChanges(v ?? null).pendingDisplayNameStyles),
        P = eG.intl.string(x ? eG.t.mq6Cg9 : eG.t.XuZU7A),
        k = x ? eG.intl.string(eG.t.YcDKr8) : m.username,
        R = eG.intl.string(x ? eG.t["g7OSZ/"] : eG.t.kyfzzc),
        S = i.useRef(null),
        D = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    y && N(),
                    (0, l6.L)({ analyticsLocations: p, guildId: v, stackingBehavior: "stack", returnRef: S });
            },
            [y, N, p, v],
        ),
        T = {
            icon: lD.V,
            tooltip: eG.intl.string(eG.t.lqKKI2),
            "aria-label": eG.intl.string(eG.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: D,
            buttonRef: S,
        },
        O =
            null != b
                ? (0, t.jsx)(tE.c$, {
                      user: m,
                      guildId: v,
                      displayName: b,
                      size: "lg",
                      pendingDisplayNameStyles: E,
                      className: tD.d,
                  })
                : null;
    return (0, t.jsx)(tS, {
        ...C,
        preview: O,
        placeholder: k,
        editButtonAriaLabel: R,
        label: P,
        maxLength: e7.zzC,
        trailing: h ? T : void 0,
    });
}
var tO = n(469432);
function tL(e) {
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
        (r = (0, s.bG)([er.A], () => er.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, eW.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = tk(c, m),
        { isEditing: p } = f,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eG.intl.string(x ? eG.t.AXiE0i : eG.t["76Aqhl"]);
    return (0, t.jsx)(tS, {
        ...f,
        size: "compact",
        className: a()(tO.k, p && tO.J),
        preview: v ? (0, t.jsx)(tE.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eG.intl.string(eG.t.h6VAO7),
        label: eG.intl.string(eG.t["rniRE+"]),
        placeholder: h,
        maxLength: e7.VE5,
    });
}
var tM = n(145497),
    t_ = n(685073),
    tw = n(318785),
    tG = n(534400),
    tU = n(743981),
    tV = n(724637),
    tF = n(329296);
let tB = "no-server-tag";
function tz(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ek.D, {
        innerRef: l,
        className: a()(tV.L5, { [tV.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eR.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: tV.W3,
            tag: "span",
            children: [
                o
                    ? eG.intl.string(eG.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tG.Z9,
                                  {
                                      src: (0, t_.gC)(n, r, tU.Sl.SIZE_14),
                                      size: tU.Sl.SIZE_14,
                                      className: tV.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, t_.gC)(n, r, tU.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nO.a, { size: "xs", color: "currentColor", className: tV.u4 }),
            ],
        }),
    });
}
function tH() {
    let e = (0, tw.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ei.default], () => {
            let e = ei.default.getCurrentUser();
            return (0, t_.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([er.A], () => er.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tB
                    ? (0, t.jsx)("div", {
                          className: tF.uN,
                          children: (0, t.jsx)(eR.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: tV.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nU.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tB, label: eG.intl.string(eG.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tM.j, {
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
            (0, eW.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nW, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eG.intl.string(eG.t.Pdd1nd),
              listboxClassName: tV.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(tz, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var tW = n(874644);
function tK(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tE.Ay, {
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
        : (0, t.jsx)(tN.A, {
              user: l,
              forceUsername: !0,
              className: tW.a1,
              usernameClass: tW.eb,
              discriminatorClass: tW.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tT, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(tW.AK, tW.j6),
                children: [d, (0, t.jsx)(tE.Ce, {}), (0, t.jsx)(tL, { displayProfile: n }), (0, t.jsx)(tH, {}), r],
            }),
        ],
    });
}
var tq = n(97808),
    tX = n(980707),
    tY = n(477782),
    tZ = n(22231),
    t$ = n(601255),
    tJ = n(562819),
    tQ = n(19575),
    t0 = n(106106),
    t1 = n(338165);
let t2 = tQ.Ay.getEnableHardwareAcceleration() ? tq.Js : tq.eu;
function t7(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tX.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eG.intl.string(eG.t.YAgq3W),
        children: (0, t.jsx)(tY.rX, { children: n }),
    });
}
function t3(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, em.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([et.Ay], () => (null != n ? et.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([er.A], () => er.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, el.z5)(c, g),
                f = d && null != l.avatar,
                p = eH.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([no.A], () => (null != n ? no.A.getGuild(n) : null)),
                A = (0, el.a4)({ user: l }),
                b = (0, el.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, el.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, t$.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: l0.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, tJ.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lQ.rM)(null, g, (e) => (0, eW.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, el.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, eW.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tY.Dr,
                                { id: "change-avatar", label: eG.intl.string(eG.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                tY.Dr,
                                { id: "change-decoration", label: eG.intl.string(eG.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.twB3fz),
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
                                      tY.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eG.intl.string(eG.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eG.intl.string(eG.t["9rx5GO"]),
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
        ? (0, t.jsx)(em.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(t0.my, t0.vk, t1.kL, { [t1.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(t2, { ...r, imageClassName: a()(t0.Lw, t1.HU) }),
                  (0, t.jsx)(lq.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lq.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(t7, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: t1.r9,
                              children: (0, t.jsx)(lT.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tZ.R,
                                  "aria-label": eG.intl.string(eG.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t8 = n(976726);
function t9(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tX.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eG.intl.string(eG.t.FzU73A),
        children: (0, t.jsx)(tY.rX, { children: n }),
    });
}
function t5(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = (0, el.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, el.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, el.Xf)({ user: l, guildId: void 0 }),
                g = eH.Ay.canUsePremiumProfileCustomization(l),
                m = g || null == n,
                f = (0, lF.sk)("UserProfileModalV2EditableBanner"),
                p = null != n,
                {
                    pendingBanner: x,
                    pendingProfileEffect: v,
                    pendingProfileFrame: h,
                } = (0, s.bG)([er.A], () => er.A.getPendingChanges(n ?? void 0)),
                A = (0, s.bG)([V.A], () =>
                    null != n ? V.A.getGuildMemberProfile(l.id, n)?.banner : V.A.getUserProfile(l.id)?.banner,
                ),
                b = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()?.banner != null),
                j = (0, s.bG)([V.A], () => V.A.getUserProfile(l.id)?.profileEffect != null),
                C = (0, s.bG)([V.A], () => V.A.getUserProfile(l.id)?.profileFrame != null),
                y = (0, el.Ac)(x, A),
                E = p && b,
                P = p && j,
                k = p && C,
                R = void 0 === v ? null != d : null != v,
                S = void 0 === h ? null != u : null != h,
                D = (0, el.lw)({
                    pendingValue: h,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                T = (0, N.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                O = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: l0.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                L = i.useCallback(() => {
                    r(),
                        (0, na.W)({
                            analyticsLocations: o,
                            guild: null != n ? (no.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                M = i.useCallback(() => {
                    r(), (0, lQ.rM)(null, A, (e) => (0, eW.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, A]),
                _ = i.useCallback(() => {
                    r(), (0, eW.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                w = i.useCallback(() => {
                    r(),
                        (0, nf.w)({
                            analyticsLocations: o,
                            guild: null != n ? (no.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: T,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, T]),
                G = i.useCallback(() => {
                    r(), (0, eW.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    g &&
                        e.push(
                            (0, t.jsx)(
                                tY.Dr,
                                { id: "change-banner", label: eG.intl.string(eG.t.N0bC3P), action: O },
                                "change-banner",
                            ),
                        ),
                    m &&
                        e.push(
                            (0, t.jsx)(
                                tY.Dr,
                                { id: "change-effect", label: eG.intl.string(eG.t["/6nv6N"]), action: L },
                                "change-effect",
                            ),
                        ),
                    f &&
                        e.push(
                            (0, t.jsx)(
                                tY.Dr,
                                { id: "change-frame", label: eG.intl.string(eG.t["oTSa/q"]), action: w },
                                "change-frame",
                            ),
                        ),
                    g &&
                        y &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.jHlJNS),
                                          action: M,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.tT9n7D),
                                          action: M,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    m &&
                        R &&
                        e.push(
                            P
                                ? (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.Lb7lu9),
                                          action: _,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.zUOlT6),
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
                                      tY.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eG.intl.string(eG.t.A0pzWn),
                                          action: G,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      tY.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eG.intl.string(eG.t["8DfADq"]),
                                          action: G,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [E, g, m, f, P, k, y, R, S, O, L, w, M, _, G]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(ep.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(t8.kL, { [t8.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ep.A, { ...e, className: t8.Pr }),
                  (0, t.jsx)(lq.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lq.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(t9, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: t8.r9,
                              children: (0, t.jsx)(lT.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tZ.R,
                                  "aria-label": eG.intl.string(eG.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t6 = n(777480),
    t4 = n(107563),
    ie = n(570287);
n(938796);
var il = n(913453),
    it = n(667049),
    ii = n(837531),
    ir = n(186272),
    ia = n(645625),
    is = n(337796);
let io = (e) => e * (2 - e),
    id = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iu = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function ic(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, H.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                eu(n, 1024)
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
        : (0, t.jsx)("div", { className: ia.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function ig(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(C.A, { skuId: r.skuId, isHovering: i });
}
function im(e) {
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
        [w, U] = i.useState(),
        V = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? U("compact-xs") : l <= 380 ? U("compact-sm") : U(void 0);
        }, []);
    (0, A.g)(k, V, [], { fireOnMount: !0 });
    let F = null != w ? id[w] : void 0,
        B = i.useMemo(() => p ?? (0, S.A)(), [p]),
        { relationshipType: z, originApplicationId: H } = (0, s.cf)([M.A], () => ({
            relationshipType: M.A.getRelationshipType(l.id),
            originApplicationId: M.A.getOriginApplicationId(l.id),
        })),
        J = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        Q = (0, T.q)({ userId: l.id }),
        ee = (0, D.fi)(l.id),
        { appIdentities: el, connections: en } = (function (e) {
            let { filteredAppIdentities: l } = (0, Y.A)(e),
                n = (0, $.A)(e),
                t = (0, q.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, X.A)([...r]).filter(Z.Vq);
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
                                  let l = K.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(l.id),
        et = (0, W.A)(l.id),
        ei = en.length > 0 || el.length > 0,
        er = et.length > 0,
        es = y ? t5 : ep.A,
        eo = y ? t3 : em.A;
    return (0, t.jsxs)("main", {
        className: a()(ia.profile, null != w && ia[w]),
        ref: k,
        "aria-busy": N,
        children: [
            (0, t.jsxs)("div", {
                className: ia.profileHeader,
                children: [
                    (0, t.jsx)(es, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: ea.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: b,
                        pendingAccentColor: j,
                    }),
                    (0, t.jsx)(eo, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: ea.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: v,
                        avatarOverride: h,
                    }),
                    (0, t.jsx)(eN.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: ea.d.MODAL_V2,
                        hasEntered: f,
                        prompt: P ? B : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: ia.profileBody,
                children: [
                    (0, t.jsx)(tK, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ef.A, { displayProfile: g, themeType: ea.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: y,
                    }),
                    z === e7.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ey.A.Overlay, {
                            className: ia.profileOverlay,
                            children: (0, t.jsx)(eh.A, {
                                user: l,
                                applicationId: H,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: ia.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            ey.A.Overlay,
                            {
                                className: ia.profileOverlay,
                                children: (0, t.jsx)(eh.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: ia.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(ey.A.Overlay, {
                            className: ia.profileOverlay,
                            children: (0, t.jsx)(tn.A, {
                                heading: eG.intl.string(eG.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: ia.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eC.A, { user: l, className: ia.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(ey.A.Overlay, {
                            className: ia.profileOverlay,
                            children: (0, t.jsx)(eI.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: ia.profileButtons,
                        children: (0, t.jsx)(ld, {
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
                    P && (0, t.jsx)(ex.A, { isPremiumUser: (0, G.ki)(n), onInteraction: x }),
                    !J && (0, t.jsx)(e9, { displayProfile: g, isEditable: y }),
                    Q.length > 0 &&
                        (0, t.jsx)(tn.A, {
                            heading: eG.intl.string(eG.t["Uv/eTx"]),
                            children: (0, t.jsx)(ev.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(tn.A, {
                        heading: eG.intl.string(eG.t.a6XYD9),
                        children: (0, t.jsx)(eb.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: tt.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eE.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: ia.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !J &&
                        (y || ei) &&
                        (0, t.jsx)(tn.A, {
                            heading: eG.intl.string(eG.t["3fe7U5"]),
                            scrollTargetId: tt.bk.CONNECTIONS,
                            children: (0, t.jsx)(lR, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: y,
                                className: ia.profileAppConnections,
                            }),
                        }),
                    !J &&
                        er &&
                        (0, t.jsx)(tn.A, {
                            heading: eG.intl.string(eG.t.PHjkRE),
                            scrollTargetId: tt.bk.APPS,
                            children: (0, t.jsx)(eF, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: ia.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tr, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(ig, { displayProfile: g, profileEffectOverride: I, isHovering: L }),
            null != C && (0, t.jsx)(E.A, { frame: C, filterLayer: iu }),
        ],
    });
}
function ip(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, z.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, Q.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function ix(e) {
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
            sourceAnalyticsLocations: G = [],
            themeContainerClassName: z,
        } = e,
        H = l.id === n.id,
        {
            guildId: W,
            pendingGuildId: K,
            isFetching: q,
            handleSelectUserProfile: X,
            handleRetry: Y,
            hasError: Z,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, s.bG)([V.A], () => V.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
                        (0, ee.A)(l, void 0, {
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
        $ = i.useMemo(() => (null != W ? { [W]: [l.id] } : {}), [W, l.id]);
    (0, b.Eq)($, "UserProfileModalV2");
    let Q = (0, F.X)("UserProfileModalV2"),
        es = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        eu = H && Q,
        em = (0, J.W)(l.id),
        ef = Z && !em,
        ep = eu && !es && !Z,
        {
            pendingThemeColors: ex,
            avatarDecorationOverride: ev,
            avatarOverride: eh,
            bannerOverride: eb,
            accentColorOverride: eI,
            profileEffectOverride: eC,
            profileFrameOverride: eN,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([er.A, ei.default, et.Ay, V.A], () => {
                if (!t) return ed;
                let e = ei.default.getUser(l);
                if (null == e) return ed;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = er.A.getPendingChanges(n),
                    c = null != n ? et.Ay.getMember(n, l) : null,
                    g = V.A.getUserProfile(l),
                    m = null != n ? V.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, el.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, en.V7)({ userId: l, image: a, size: eo }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, el.us)({
                        userValue: g?.profileEffect,
                        guildValue: m?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, el.us)({
                        userValue: g?.profileFrame,
                        guildValue: m?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: ep, guildId: W }),
        {
            isExpanded: eE,
            isAnimating: eP,
            transition: ek,
            handleExpand: eR,
            handleCollapse: eS,
            refs: { expandIconButtonRef: eD, expandTabButtonRef: eT, collapseButtonRef: eO },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: io },
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
        eL = eu && !eE,
        eM = eu && (!eE || eP),
        { defaultWishlistId: e_ } = (0, s.cf)([V.A], () => ({ defaultWishlistId: V.A.getFirstWishlistId(l.id) }));
    (0, L.fw)({ wishlistId: e_, userId: l.id });
    let ew = (0, eg.fC)(),
        eU = ef && (!eu || !q),
        eV = eu && Z,
        eF = K !== W || eV || null != ew.interactionType,
        eB = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, il.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ei.default], () => ei.default.getCurrentUser())),
                    (n = (0, s.bG)([V.A], () => V.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, it.A)(i.id),
                g = (0, ie.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = V.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? V.A.getWishlistSettings(i.id, p) : null,
                h = (x ? t4.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eG.intl.string(eG.t.laViwx), section: tt.RP.WIDGETS }),
                m.push({ text: eG.intl.string(eG.t.chq59f), section: tt.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = M.A.isFriend(i.id),
                I = v?.visibility === t6.a.PUBLIC;
            return (
                (f || (!f && h && I && g && (!b || (b && j)))) &&
                    m.push({ text: eG.intl.string(eG.t["7lZ31J"]), section: tt.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, ii.A)(a), section: tt.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, ir.A)(d), section: tt.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: ez } = (0, I.Ay)([...G, j.A.USER_PROFILE_MODAL_V2]),
        eH = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: W,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eW = (0, B.Ay)(l.id, W),
        eK = void 0 !== eN ? eN?.skuId : eW?.profileFrame?.skuId,
        eq = (0, N.A)(eK, "UserProfileModalV2"),
        { profileFrameStyle: eX, profileFrameClassName: eY } = (0, P.A)(eK);
    (0, y.A)({ skuId: eW?.profileFrame?.skuId, openedAt: T, context: eH, analyticsLocations: ez });
    let eZ = w.Ay.useName(eW?.guildId, u, l),
        e$ = (0, k.GV)(),
        eJ = eG.intl.format(eG.t.KRe1Fk, { name: eZ });
    return (0, t.jsx)(I.f5, {
        value: ez,
        children: (0, t.jsx)(U.of, {
            value: eH,
            openedAt: T,
            fetchStartedAt: eW?.fetchStartedAt,
            fetchEndedAt: eW?.fetchEndedAt,
            isLoaded: eW?.isLoaded,
            children: (0, t.jsx)(eg.Hl, {
                value: ew,
                children: (0, t.jsx)(ec.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(is.zr, { [is.QF]: eW?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": e$,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tv, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ia.layoutContainer, eY, {
                                        [ia.editingPanelEnabled]: eu,
                                        [ia.editingPanelExpanded]: eu && eE,
                                        [ia.isAnimating]: eP,
                                    }),
                                    style: eX,
                                    children: [
                                        (0, t.jsxs)(ip, {
                                            user: l,
                                            displayProfile: eW,
                                            pendingThemeColors: ex,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: is.Oo,
                                                    children: [
                                                        (0, t.jsx)(lu.A, { isCurrentUser: H, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: e$, children: eJ }),
                                                        }),
                                                        eM &&
                                                            (0, t.jsx)(n2, {
                                                                buttonRef: eD,
                                                                onClick: eR,
                                                                className: ia.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eL &&
                                                    (0, t.jsx)("div", {
                                                        className: ia.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(n1, {
                                                            innerRef: eT,
                                                            onClick: eR,
                                                            className: ia.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                eu &&
                                                    ek((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(n4, {
                                                                  className: a()(ia.editingPanel, {
                                                                      [ia.isExpanded]: eE,
                                                                  }),
                                                                  selectedGuildId: K,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: X,
                                                                  onClose: eS,
                                                                  collapseButtonRef: eO,
                                                                  isLoading: q,
                                                                  isEditingDisabled: Z,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(ey.A, {
                                                    className: a()(z, is.A7, ia.profileContentOuter),
                                                    innerClassName: ia.profileContentInner,
                                                    user: l,
                                                    displayProfile: eW,
                                                    themeType: ea.d.MODAL_V2,
                                                    pendingThemeColors: ex,
                                                    isPrivate: eW?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(ic, { displayProfile: eW, pendingBanner: eb }),
                                                        eW?.private === !0 && (0, t.jsx)(ej.A, {}),
                                                        !ef && (0, t.jsx)(ty, { className: ia.noticeContainer }),
                                                        eU &&
                                                            (0, t.jsx)("div", {
                                                                className: ia.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(td, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eG.intl.string(eG.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Y
                                                                            ? eG.intl.string(eG.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Y,
                                                                    actionDisabled: !eu && q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: ia.profileCardToastContainer,
                                                            children: (0, t.jsx)(eA.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tf, {
                                                            showScrim: eF,
                                                            showLoadingSpinner: q,
                                                            className: ia.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(im, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: W,
                                                                    channelId: u,
                                                                    displayProfile: eW,
                                                                    nickname: eZ,
                                                                    originGuildId: o,
                                                                    hasEntered: S === v.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: O,
                                                                    avatarDecorationOverride: ev,
                                                                    avatarOverride: eh,
                                                                    bannerOverride: eb,
                                                                    accentColorOverride: eI,
                                                                    profileEffectOverride: eC,
                                                                    profileFrame: eq,
                                                                    allowEditing: ep,
                                                                    isLoading: q,
                                                                }),
                                                                (0, t.jsx)(th.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eW,
                                                                    guildId: W,
                                                                    channelId: u,
                                                                    items: eB,
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
                            (0, t.jsx)(te.A, { userId: l.id, guildId: W, className: ia.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
