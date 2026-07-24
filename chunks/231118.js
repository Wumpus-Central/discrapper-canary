n.d(l, { A: () => rT });
var t = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(935462),
    d = n(778712),
    u = n(866323),
    c = n(364522),
    g = n(695366),
    f = n(140735),
    m = n(707554),
    p = n(738188),
    x = n(661531),
    h = n(231723),
    v = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    C = n(480335),
    N = n(577390),
    y = n(372320),
    E = n(31956),
    P = n(744808),
    k = n(875741),
    S = n(915089),
    R = n(713517),
    T = n(645507),
    D = n(922590),
    _ = n(821269),
    L = n(93246),
    O = n(561794),
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
    q = n(370480),
    X = n(773669),
    Y = n(652215),
    $ = n(101928),
    Z = n(837529),
    J = n(346713),
    Q = n(573648),
    ee = n(429913),
    el = n(321078),
    en = n(403362),
    et = n(484509),
    ei = n(579950),
    er = n(83931),
    ea = n(920601),
    es = n(903209),
    eo = n(919395),
    ed = n(101058),
    eu = n(696451),
    ec = n(287809),
    eg = n(836602),
    ef = n(996988),
    em = n(985253);
let ep = (0, d.FT)(em.T[ef.d.MODAL_V2].avatarSize),
    ex = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function eh(e, l) {
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
var ev = n(716804),
    eA = n(679492),
    eb = n(718019),
    ej = n(413492),
    eI = n(915614),
    eC = n(744753),
    eN = n(834730);
function ey(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eN.E, { variant: "text-sm/normal", children: l });
}
var eE = n(361311),
    eP = n(931481),
    ek = n(439053),
    eS = n(743987),
    eR = n(312381),
    eT = n(501193),
    eD = n(383448),
    e_ = n(946356),
    eL = n(983495),
    eO = n(280645),
    eM = n(305385),
    ew = n(109112),
    eG = n(939249),
    eF = n(730134),
    eV = n(169869),
    eU = n(837057),
    eB = n(310419),
    eW = n(889227),
    ez = n(967198),
    eH = n(488995),
    eK = n(375708),
    eq = n(440016);
function eX(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eV.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eq.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eF.A, { user: new eW.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(ew._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eq.Hd,
                children: [
                    (0, t.jsxs)(eG.D, {
                        className: eq.OB,
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
                                className: eq.nk,
                                children: eK.intl.format(eK.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eq.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eY(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([X.default], () => X.default.locale),
        d = (0, s.bG)([ez.A], () => ez.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eq.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eq.FI,
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
var e$ = n(240248),
    eZ = n(308244),
    eJ = n(81400),
    eQ = n(428262),
    e0 = n(84540),
    e1 = n(621466);
n(321073);
var e2 = n(219869),
    e7 = n(866665),
    e3 = n(775602),
    e5 = n(321027);
function e9(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
        g = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(null),
        p = i.useRef(!1),
        x = i.useRef(!0),
        h = i.useCallback(() => {
            (x.current = !1), d(l), a("editing");
        }, [l]),
        v = i.useRef(o);
    i.useLayoutEffect(() => {
        v.current = o;
    });
    let A = i.useCallback(() => {
            x.current || ((x.current = !0), n(v.current), a("done"));
        }, [n]),
        b = i.useCallback(() => {
            x.current || ((x.current = !0), a("done"));
        }, []);
    i.useEffect(() => {
        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
    }, [r]),
        i.useEffect(() => {
            u &&
                (f.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                m.current?.focus({ preventScroll: !0 }));
        }, [u, c]);
    let j = i.useCallback(
            (e) => {
                !u || (null != f.current && (0, e1.vq)(e.relatedTarget) && f.current.contains(e.relatedTarget)) || A();
            },
            [u, A],
        ),
        I = i.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), b());
            },
            [u, b],
        ),
        C = i.useCallback(() => {
            (p.current = !0), A();
        }, [A]),
        N = i.useCallback(() => {
            (p.current = !0), b();
        }, [b]),
        y = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), N())
                    : (e.preventDefault(), C());
            },
            [C, N],
        );
    return {
        isEditing: u,
        committedValue: l,
        editedValue: o,
        setEditedValue: d,
        editButtonRef: g,
        wrapperRef: f,
        inputRef: m,
        handleStartEditing: h,
        handleCommit: A,
        handleCancel: b,
        handleInputCommit: C,
        handleInputCancel: N,
        onInputKeyDown: y,
        onBlur: j,
        onContainerKeyDown: I,
    };
}
function e6(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e5.L7,
            children: (0, t.jsx)(e2.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e7.m, { text: l, ariaHidden: !0, children: i });
}
function e8(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? g.E : p.i;
    return (0, t.jsxs)(eN.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: e5.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? e5.ik : e5.QW }), n],
    });
}
function e4(e) {
    let {
            isEditing: l,
            preview: n,
            placeholder: r,
            input: s,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            variant: c = "default",
            trailing: g,
            previewErrorMessage: f,
            previewWarningMessage: m,
            className: p,
            wrapperRef: x,
            onBlur: h,
            onKeyDown: v,
            disabled: A = !1,
        } = e,
        b = i.useRef(null),
        j = i.useId(),
        I = i.useId(),
        C = null == n,
        N = null != f,
        y = null != m && !N,
        E = N ? "error" : y ? "warning" : null,
        P = N ? f : m,
        k = null != E && null != P,
        S = [];
    C && S.push(j), k && "compact" !== c && S.push(I);
    let R = S.length > 0 ? S.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(e5.LL, { [e5.JD]: N, [e5.xe]: y, [e5.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eN.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e5.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(eG.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": R,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e5.lD, children: (0, t.jsx)(e6, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e5.kL, { [e5.oE]: "compact" === c, [e5.c1]: "multiline" === c }, p),
        onBlur: h,
        onKeyDown: v,
        children: (0, t.jsx)(
            "div",
            {
                className: e5.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e5.VH, children: T }),
                              k && "compact" !== c && (0, t.jsx)(e8, { id: I, message: P, type: E }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var le = n(786826);
function ll(e) {
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
            maxLength: h,
            rows: v,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        C =
            (null != h && (l ? i : n).length > h
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e4, {
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        variant: "multiline",
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: C,
        previewWarningMessage: j,
        input: (0, t.jsx)(le.f, {
            editorRef: c,
            label: x,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            error: C,
            helperText: j,
            placeholder: m,
            rows: v,
            emojiPickerIntention: A,
        }),
    });
}
let ln = [
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
var lt = n(307731);
function li(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        f = eQ.Ay.canUsePremiumProfileCustomization(u),
        {
            value: m,
            previewValue: p,
            onCommit: x,
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
                    (0, e0.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        h = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = e9(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = l?.querySelector('[aria-expanded="true"][aria-controls]'),
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
                    let n = e.relatedTarget;
                    !(0, e1.vq)(n) || a(n) || t();
                },
                [l, a, t],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: m, onCommit: x }),
        v = !(0, e$.uJ)(p),
        A = (0, s.bG)([eg.A], () => eg.A.getErrors(g)),
        b = (0, eJ.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * ln.length)), ln[e];
        }, []),
        N = c ? eK.intl.string(eK.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(ll, {
              ...h,
              preview: v ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eK.intl.string(eK.t.lO3n7a),
              label: eK.intl.string(eK.t["YWo+Zd"]),
              emojiPickerIntention: lt.EmojiIntention.PROFILE,
              maxLength: Y.NA2,
              error: j,
              warning: I,
          })
        : v
          ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function lr(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, e$.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eK.intl.string(eK.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(li, { displayProfile: l }) : (0, t.jsx)(eZ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var la = n(982168),
    ls = n(722868),
    lo = n(822775),
    ld = n(982985),
    lu = n(682356),
    lc = n(34188),
    lg = n(34332),
    lf = n(993401);
function lm(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, lg.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(lf.q3, {
        action: "VISIT_SHOP",
        icon: lc.U,
        tooltipText: eK.intl.string(eK.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var lp = n(573355),
    lx = n(102951);
function lh(e) {
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
        g = (0, ls.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, lx.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === Y.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ld.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lm, {}),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lm, {}),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Y.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === Y.eA$.FRIEND || o === Y.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lp.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Y.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lp.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lp.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(ld.l, { userId: l.id, onClose: la.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lv = n(463156),
    lA = n(349288),
    lb = n(509434),
    lj = n(307301),
    lI = n(228366),
    lC = n(95561),
    lN = n(874490),
    ly = n(968309),
    lE = n(174459),
    lP = n(486020),
    lk = n(123917),
    lS = n(783419);
let lR = "User Profile Modal V2";
function lT(e) {
    let l = Q.A.get(e);
    (0, ly.A)({ platformType: l.type, location: lR }),
        lE.default.track(Y.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lR,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lD() {
    lI.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lT, stackingBehavior: "stack" });
}
function l_(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, q.An)(r[lS.pK.CREATED_AT], n),
        s = Q.A.get((0, lN.ML)(l.type));
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e7.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eq.GW, children: l.name }),
                  })
                : (0, t.jsx)(lA.Anchor, {
                      href: e,
                      className: eq.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`
                              : `${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lC.zV)(Y.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lk.h)({ href: e, trusted: s?.type !== Y.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eq.vi,
                          children: [
                              (0, t.jsx)(e7.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eq.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lb.I, { size: "xs", color: "currentColor", className: eq.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === Y.fg2.REDDIT
                ? (0, eV.xE)(r)
                : l.type === Y.fg2.STEAM
                  ? (0, eV.dy)(r)
                  : l.type === Y.fg2.BLUESKY || l.type === Y.fg2.MASTODON || l.type === Y.fg2.TWITTER
                    ? (0, eV.ED)(r)
                    : l.type === Y.fg2.PAYPAL
                      ? (0, eV.gZ)(r)
                      : l.type === Y.fg2.EBAY
                        ? (0, eV.ub)(r)
                        : l.type === Y.fg2.TIKTOK
                          ? (0, eV.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lL(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lP.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            return (0, t.jsx)(e7.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eN.E, {
                    variant: "text-sm/normal",
                    className: eq.GW,
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
        className: eq.FI,
        children: [
            (0, t.jsx)(e7.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eq.k_,
                    children: (0, t.jsx)("img", {
                        alt: eK.intl.formatToPlainString(eK.t.rtm15P, { name: i }),
                        className: a()(eq.tV, o ? eq.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eq.Hd,
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
                    (0, t.jsx)("div", { className: eq.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lM(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([X.default], () => X.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eq.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eq.V,
                    children: [
                        l.map((e) => (0, t.jsx)(l_, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lL, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eG.D, {
                    className: eq.qG,
                    onClick: lD,
                    children: [
                        (0, t.jsx)(lj.j, { size: "sm", color: "currentColor" }),
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
var lw = n(193885),
    lG = n(408278),
    lF = n(554146),
    lV = n(194261),
    lU = n(789645),
    lB = n(297264),
    lW = n(821609),
    lz = n(403581),
    lH = n(812993),
    lK = n(39623),
    lq = n(890377),
    lX = n(517461),
    lY = n(13875),
    l$ = n(131607),
    lZ = n(248778),
    lJ = n(783420),
    lQ = n(252732),
    l0 = n(976860),
    l1 = n(945810);
let l2 = (0, l1.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l7 = (0, l1.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1 },
        variations: { 1: { enabled: !0, showPresetName: !0 }, 2: { enabled: !0, showPresetName: !1 } },
    });
function l3(e) {
    let { location: l } = e;
    return l7.useConfig({ location: l });
}
var l5 = n(975732),
    l9 = n(487233),
    l6 = n(120386),
    l8 = n(317097),
    l4 = n(602853),
    ne = n(922016),
    nl = n(508274),
    nn = n(654107),
    nt = n(930349);
function ni(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l4.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nn.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l8.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e0.p)({ accentColor: e }), []);
    return (0, t.jsx)(ne.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(nl.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nt.V, {
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
var nr = n(450373),
    na = n(339984),
    ns = n(796290);
function no(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: ns.o, style: { backgroundColor: l } });
}
function nd(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: ns._ });
}
function nu(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l4.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l8.LX)(r),
        { hex: s } = (0, nr.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(nd, { src: o }) : (0, t.jsx)(no, { backgroundColor: s });
}
function nc(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, H.Ay)(n, i),
        c = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner),
        f = (0, s.bG)([W.A], () =>
            null != i ? W.A.getGuildMemberProfile(n, i)?.banner : W.A.getUserProfile(n)?.banner,
        ),
        m = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = m && d && !p ? void 0 : c,
        h = (0, eo.Ac)(c, f),
        v = d && null != g,
        A = h
            ? {
                  onClick: () => (0, lQ.rM)(null, f, (e) => (0, e0.p)({ guildId: i ?? void 0, banner: e })),
                  type: v ? "reset" : "remove",
                  accessibleLabel: eK.intl.string(v ? eK.t.jHlJNS : eK.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(nt.V, {
        affordance: A,
        variant: "square",
        onClick: function () {
            return (0, lQ.XD)({
                uploadType: na.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            });
        },
        accessibleLabel: eK.intl.string(eK.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == f)
                ? eK.intl.string(eK.t["3Xph0/"])
                : l
                  ? eK.intl.string(eK.t.keN7ib)
                  : eK.intl.string(eK.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nu, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var ng = n(913563),
    nf = n(898985),
    nm = n(922301),
    np = n(660184),
    nx = n(259065),
    nh = n(864386),
    nv = n(257551);
let nA = "heading-xl/semibold";
function nb(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nv.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nA,
                      children: (0, t.jsx)(np.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nm.G.ANIMATED : nm.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nA, className: nv.W, color: "text-muted", children: l }),
    });
}
function nj(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([eu.Ay], () => (null != n ? (eu.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null),
        f = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName),
        m = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: h,
        } = (0, eo.B0)(l, n ?? void 0),
        v = u ? x : p,
        A = void 0 !== h,
        b = null === h,
        j = u && null != p,
        C = (0, eo.lw)({ pendingValue: h, userValue: p, guildValue: x, guildId: n ?? void 0 });
    function N(e) {
        return null == e || "" === e ? void 0 : e;
    }
    let y = void 0 !== f ? f : g,
        E = u ? (N(void 0 !== m ? m : c) ?? N(y) ?? l.username) : (N(y) ?? l.username),
        P = A ? null != h : null != v,
        k =
            null != C && P
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(j ? eK.t.en3ogK : eK.t["Wqmi/h"]),
                  }
                : void 0,
        S = i.useCallback(() => {
            o?.(), (0, nx.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nt.V, {
        affordance: (!b && (A || null != v)) || j ? k : "add",
        variant: "bar",
        onClick: S,
        accessibleLabel: eK.intl.string(eK.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eK.intl.string(eK.t["3Xph0/"]);
            let l = eK.intl.string((0, ng.A)(e.fontId)),
                n = eK.intl.string(nf.J[e.effectId] ?? nh.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eK.intl.formatToPlainString(eK.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nb, { stylesPreview: C, displayName: E, shouldAnimate: e }),
        disabled: r,
    });
}
var nI = n(324970);
function nC(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nI.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nI.Pf,
                children: [
                    (0, t.jsx)(lB.D, {
                        className: nI.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e7.m, {
                            text: eK.intl.string(eK.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lz.t, {
                                className: nI.IX,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: nI.ot, children: a }),
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
              className: nI.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var ny = n(374654),
    nE = n(366010),
    nP = n(736653),
    nk = n(674658),
    nS = n(617061),
    nR = n(203632),
    nT = n(536572);
let nD = new Set(),
    n_ = 0;
var nL = n(993408),
    nO = n(841702),
    nM = n(515718),
    nw = n(195292);
function nG(e) {
    "" !== e.thumbnailPreviewSrc && (0, nM.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nF = n(580705),
    nV = n(462397);
let nU =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nB =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nW(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nP.Ay)(),
        u = (0, nE.M)(d) ? nU : nB,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nO.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nL.wo)(r, t), [r, t]),
                s = (0, nw.A)({ enabled: l, isInteracting: n, items: a, preload: nG });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((n_ += 1), nD.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nF.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nF.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nF.yY, { [nV.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nR.HL.FromStart,
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
        c = (0, eo.N2)({ user: l }),
        g = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, eo.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        h = (0, eo.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nk.q)(h?.skuId),
        A = m ? null != f : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(x ? eK.t["SQy/Po"] : eK.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nS.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(nt.V, {
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
        })({ profileEffectPreview: h, productName: (0, nT.VG)(v), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nW, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nH = n(515727),
    nK = n(746002);
function nq(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nK.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nK.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nM.NN)(n).catch(() => {});
        });
}
var nX = n(443727);
function nY(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function n$(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nP.Ay)(),
        u = (0, nE.M)(d) ? nU : nB,
        c = (0, y.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nO.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nL.MG)(r, t), [r, t]);
            return (0, nw.A)({ enabled: l, isInteracting: n, items: a, preload: nq });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(nX.hm, x, { [nV.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: nY }),
                }),
            (0, t.jsx)("div", {
                className: a()(nX.ti, { [nX.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nX.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nZ(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        u = (0, eo.Xf)({ user: l }),
        c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eo.Tu)(n ?? void 0),
        f = void 0 !== g,
        m = null === g || (!f && null == c),
        p = o && null != u,
        x = (0, eo.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, nk.q)(x?.skuId),
        v = f ? null != g : null != c,
        A =
            null != x && v
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(p ? eK.t.j6hZyM : eK.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nH.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(nt.V, {
        affordance: m && !p ? "add" : A,
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
        })({ profileFramePreview: x, productName: (0, nT.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(n$, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nJ = n(684732),
    nQ = n(498596),
    n0 = n(211003);
function n1(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l8.Hl)(l),
        f = (0, l8.bJ)(l, 0xffffff) < nQ.Tr.NonText;
    return (0, t.jsx)(ne.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(nl.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eG.D, {
                ...n,
                innerRef: c,
                className: n0.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(n0.Hy, { [n0.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function n2(e) {
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
        c = (0, l8.Hl)(l),
        g = (0, l8.Hl)(n),
        f = `linear-gradient(to bottom, ${c}, ${g})`,
        m = eK.intl.formatToPlainString(eK.t.FquTfm, { colorLabel: c }),
        p = eK.intl.formatToPlainString(eK.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(nt.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: n0.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(n1, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(n1, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function n7(e) {
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
        { primaryColor: f, secondaryColor: m } = (0, $.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l4.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, nn.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e0.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nJ.l)(d, o)
                ? {
                      onClick: () => (0, e0.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eK.intl.string(eK.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(n2, {
              primaryColor: f,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([f, e]);
              },
              suggestedColors: v,
              disabled: r,
              deleteButton: b,
          });
}
var n3 = n(134976);
function n5(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(m.F, { children: (0, t.jsx)("div", { className: a()(n3.k, { [n3.V]: n }), children: l }) });
}
var n9 = n(183812),
    n6 = n(689175),
    n8 = n(672905);
function n4(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(n9.animated.div, { className: n8.iK, style: e, children: l }) : null));
}
function te(e) {
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
        f = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: n8.u6,
        children: [
            (0, t.jsx)(n6.zC, {
                ref: r,
                className: a()(n8.XG, { [n8.a5]: f }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: n8.Qs, children: l }),
            }),
            s && (0, t.jsx)(n4, { isDismissed: o, children: n }),
        ],
    });
}
var tl = n(315629),
    tn = n(422936),
    tt = n(410516),
    ti = n(202541);
function tr(e) {
    let l = (0, s.bG)([ec.default], () => eQ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, tn.O)();
    return l
        ? eK.intl.string(eK.t.AfRWI8)
        : (0, tt.U9)(n, ti.pe.TIER_2) && n?.discount.amount != null
          ? eK.intl.formatToPlainString(eK.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var ta = n(729804);
function ts() {
    let e = i.useCallback(() => {
            (0, l0.pX)(Y.BVt.NITRO_HOME), (0, l5.closeUserProfileModal)();
        }, []),
        l = tr(eK.intl.string(eK.t.pj0XBN));
    return (0, t.jsx)(lJ.A, {
        subscriptionTier: ti.pe.TIER_2,
        children: (n) => {
            let { onClick: i } = n;
            return (0, t.jsxs)(tl.h, {
                color: "nitro-pink",
                className: ta.U,
                children: [
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eK.intl.format(eK.t.TmfgI2, { onClick: e }),
                    }),
                    (0, t.jsx)(lW.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lz.t,
                        text: l,
                        onClick: i,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var to = n(55619),
    td = n(37407);
function tu() {
    return (0, t.jsxs)("div", {
        className: td.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eK.intl.string(eK.t.JFY17v),
            }),
            (0, t.jsx)(lW.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eK.intl.string(eK.t.R9GHya),
                onClick: function () {
                    return to.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tc = n(847374),
    tg = n(111159),
    tf = n(548118),
    tm = n(711014),
    tp = n(540637),
    tx = n(801461),
    th = n(44482),
    tv = n(844222),
    tA = n(561392),
    tb = n(745113),
    tj = n(15626),
    tI = n(37712);
function tC(e) {
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
            setIsOpen: h,
            refs: v,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(tv.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tA.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tb.DL)(o, {
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
        { setFloating: C } = v,
        N = i.useContext(tj._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        S = i.useRef(null),
        [R, T] = i.useState(null),
        D = null != R ? (0, tx.ZN)(P, R) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        O = i.useMemo(() => l.filter((e) => (0, tx.fI)(e.value, [n])), [n, l]),
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
                if (!S.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (x && null != R) {
                        let e = l[R];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && h(!1);
                }
            },
            [x, R, l, r, h],
        ),
        V = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tp.l)(!0, l),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = U !== W.current;
        (W.current = U), null != U && e && (T(U), x || ((_.current = !0), h(!0)));
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
                        T((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != R) {
                                let e = l[R];
                                if (null != e && !0 !== e.disabled) {
                                    V([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void h(!0);
                        T((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == R || R > n - 1) return;
                        {
                            let e = l[R];
                            if (null == e || !0 === e.disabled) return;
                            V([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(0), x || ((_.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((_.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (x && null != R) {
                            let e = l[R];
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
            [u, x, l, R, V, G, r, h, B],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === O[O.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (_.current = !1))
            : ((K.current = !0), _.current || T(l.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let q = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": D,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${y} ${E}` : void 0,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null || void 0,
        "aria-describedby": N?.describedById,
        onClick: M,
        onMouseDown: w,
        onKeyDown: z,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (S.current = e), v.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: y, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(tI.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tp.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: O,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: R,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(th.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tN = n(643213);
let ty = "MAIN_PROFILE";
function tE(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tf.Ay, { className: tN.$f, guild: l, size: tf.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tP(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tN.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tN.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tN.qL,
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
function tk(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eG.D, {
        innerRef: r,
        className: a()(tN.L5, { [tN.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tN.v9,
                children: n,
            }),
            (0, t.jsx)(tc.a, {
                className: tN.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tS(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tm.Ay], () => tm.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([ez.A], () => {
            let e = ez.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tm.Ay], () => {
            let e = {};
            for (let l of tm.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: ty,
                    label: eK.intl.string(eK.t["2p07FR"]),
                    value: ty,
                    leading: (0, t.jsx)(tg.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tE, { guild: n }),
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
                          leading: (0, t.jsx)(tE, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? ty,
        p = f.find((e) => e.value === m) ?? f[0],
        h = i.useCallback(
            (e) => {
                let n = e === ty ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tC, {
        className: tN.kL,
        label: eK.intl.string(eK.t.rki38K),
        listboxClassName: tN.yt,
        options: f,
        value: m,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tP, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tk, { leading: p.value === ty ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tR = n(207803),
    tT = n(485745);
function tD(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(0, z.X)("useUnsavedProfileChangesGuard"),
        t = (0, tT.A)(n),
        r = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            r.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                l && t ? (0, tR.VQ)() : r.current(...n);
            },
            [l, t],
        )
    );
}
var t_ = n(49999),
    tL = n(844939);
let tO = "profile-editing-nameplate-error",
    tM = "profile-editing-avatar-error",
    tw = "profile-editing-avatar-decoration-error",
    tG = "profile-editing-banner-error",
    tF = "profile-editing-display-name-style-error";
function tV(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(tL.D0, l),
        children: (0, t.jsx)("div", { className: tL.ZN, children: (0, t.jsx)(lV.X, { size: "xs" }) }),
    });
}
function tU() {
    let [e, l] = (0, lX.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tL.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eK.intl.string(eK.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eG.D, {
                      "aria-label": eK.intl.string(eK.t.rSe9ra),
                      className: tL.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lU.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tB() {
    return i.useCallback(() => {
        (0, l0.pX)(Y.BVt.NITRO_HOME), (0, l5.closeUserProfileModal)();
    }, []);
}
function tW() {
    let e = tB(),
        l = tr(eK.intl.string(eK.t["7IWwak"]));
    return (0, t.jsx)(lJ.A, {
        subscriptionTier: ti.pe.TIER_2,
        children: (n) => {
            let { onClick: i } = n;
            return (0, t.jsxs)("div", {
                className: tL.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: tL.tm,
                        children: [
                            (0, t.jsx)(lB.D, {
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
                    (0, t.jsx)(lW.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lz.t,
                        text: l,
                        onClick: i,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)(tV, { className: tL.nd }),
                ],
            });
        },
    });
}
function tz() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tL.BJ,
        "aria-hidden": !0,
        children: eK.intl.format(eK.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lz.t, { size: "xxs", color: "currentColor", className: tL.qp }),
        }),
    });
}
function tH(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nC, {
        heading: eK.intl.string(eK.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(ny.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tO : void 0 }),
            (0, t.jsx)(nN, { id: tO, message: r }),
        ],
    });
}
function tK(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nC, {
        heading: eK.intl.string(eK.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l9.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tM : void 0 }),
            (0, t.jsx)(l6.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? tw : void 0 }),
            (0, t.jsx)(nN, { id: tM, message: (0, lQ.d3)(r) }),
            (0, t.jsx)(nN, { id: tw, message: a }),
        ],
    });
}
function tq(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lZ.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, l$.kn)(a && !i ? [lF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nC, {
        heading: eK.intl.string(eK.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lH.Lp, { text: eK.intl.string(eK.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nj, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? tF : void 0,
                onOpen: d ? () => o(t_.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nN, { id: tF, message: r }),
        ],
    });
}
function tX(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nC, {
        heading: eK.intl.string(eK.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n7, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(nc, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? tG : void 0 }),
            (0, t.jsx)(nN, { id: tG, message: (0, lQ.d3)(a) }),
        ],
    });
}
function tY(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nC, {
        heading: eK.intl.string(eK.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(ni, { user: l, disabled: n }),
    });
}
function t$(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lY.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nC, {
        heading: eK.intl.string(r ? eK.t["Vfbar/"] : eK.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nz, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(nZ, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let tZ = "premium-try-it-out-description";
function tJ(e) {
    let { buttonRef: l, onShowPremiumTryItOut: n } = e,
        i = tB();
    return (0, t.jsxs)("div", {
        role: "group",
        "aria-labelledby": tZ,
        className: tL.DX,
        children: [
            (0, t.jsx)(tV, { className: tL.x$ }),
            (0, t.jsx)(eN.E, {
                id: tZ,
                variant: "text-md/normal",
                color: "text-default",
                children: eK.intl.format(eK.t.TmfgI2, { onClick: i }),
            }),
            (0, t.jsx)(lW.$, {
                buttonRef: l,
                variant: "overlay-primary",
                size: "sm",
                icon: lK.b,
                text: eK.intl.string(eK.t.PxUx8e),
                onClick: n,
                fullWidth: !0,
            }),
        ],
    });
}
function tQ(e) {
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
            onShowPremiumTryItOut: f,
        } = e,
        m = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { enabled: p } = l3({ location: "DefaultEditingPanelView" }),
        x = tD(g),
        h = null != i,
        v = eQ.Ay.canUsePremiumProfileCustomization(l),
        A = h && !v,
        b = !v && !h,
        j = b && p,
        I = h && !v && !m,
        C = a || o,
        N = (0, s.bG)([eg.A], () => eg.A.getErrors(i)),
        y = N.nameplate?.[0] ?? N.nameplate_sku_id?.[0],
        E = N.avatar?.[0],
        P = N.avatar_decoration_sku_id?.[0],
        k = N.banner?.[0],
        S = N.display_name_font_id?.[0] ?? N.display_name_effect_id?.[0] ?? N.display_name_colors?.[0],
        R = l2.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = v || h ? "inline" : j ? "hidden" : R ? "end" : "hidden",
        D = (0, t.jsx)(tq, { user: l, guildId: i, disabled: C || A, errorMessage: S });
    return (0, t.jsxs)(n5, {
        hasGradientBackground: I,
        children: [
            (0, t.jsxs)("div", {
                className: tL.wx,
                children: [
                    (0, t.jsx)(e7.m, {
                        text: eK.intl.string(eK.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eG.D, {
                            innerRef: d,
                            className: tL.cS,
                            "aria-label": eK.intl.string(eK.t["l/A351"]),
                            onClick: c,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lq.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tS, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: x,
                        loading: a,
                        disabled: m,
                    }),
                ],
            }),
            m
                ? (0, t.jsx)(tu, {})
                : (0, t.jsx)(te, {
                      floatingFooter: b && !j ? (0, t.jsx)(ts, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              h && (v ? (0, t.jsx)(tU, {}) : (0, t.jsx)(tW, {})),
                              v && (0, t.jsx)(tz, {}),
                              (0, t.jsx)(tH, { user: l, guildId: i, disabled: C || A, errorMessage: y }),
                              (0, t.jsx)(tK, {
                                  user: l,
                                  guildId: i,
                                  disabled: C || A,
                                  avatarErrorMessage: E,
                                  avatarDecorationErrorMessage: P,
                              }),
                              "inline" === T && D,
                              v || h
                                  ? (0, t.jsx)(tX, {
                                        user: l,
                                        guildId: i,
                                        disabled: C || A,
                                        canUsePremiumProfileFeatures: v,
                                        bannerErrorMessage: k,
                                    })
                                  : (0, t.jsx)(tY, { user: l, disabled: C || A }),
                              (0, t.jsx)(t$, { user: l, guildId: i, disabled: C || A }),
                              "end" === T && D,
                              j && (0, t.jsx)(tJ, { buttonRef: u, onShowPremiumTryItOut: f }),
                          ],
                      }),
                  }),
        ],
    });
}
var t0 = n(477155),
    t1 = n(926321),
    t2 = n(663417),
    t7 = n(461797),
    t3 = n(765178),
    t5 = n(597563);
let t9 = "shuffle-options-a11y-description";
function t6() {
    let { preset: e, onShuffle: l } = (function () {
            let [e, l] = i.useState(t7.B$),
                n = (0, s.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
                t = i.useCallback(
                    (e) => {
                        let l = (0, t7.Wt)(e);
                        (0, tR.w5)({
                            banner: l.getBannerSrc(n),
                            themeColors: l.themeColors,
                            displayNameStyles: l.displayNameStyles,
                        });
                    },
                    [n],
                );
            i.useEffect(() => {
                eg.A.hasTryItOutChanges() || t(e);
            }, [t, e]);
            let r = i.useCallback(() => {
                let n = (0, t7.B$)(e),
                    i = (0, t7.Wt)(n);
                lE.default.track(Y.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
                    l(n),
                    t(n),
                    t3.O.announce(eK.intl.formatToPlainString(eK.t.M2Hj9s, { presetName: i.getName() }));
            }, [e, t]);
            return { preset: e, onShuffle: r };
        })(),
        { showPresetName: n } = l3({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, t7.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: t5.kL,
              children: [
                  (0, t.jsx)(e7.m, {
                      text: eK.intl.string(eK.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(lG.K, {
                          icon: t2.f,
                          "aria-label": eK.intl.string(eK.t.VzqqFC),
                          "aria-describedby": t9,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(f.A, { id: t9, children: eK.intl.string(eK.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: t5.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: t5.L_, src: a }),
                          (0, t.jsxs)(eN.E, {
                              className: t5._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(f.A, {
                                      children: eK.intl.formatToPlainString(eK.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: t5.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lW.$, {
                      icon: t1.j,
                      text: eK.intl.string(eK.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": t9,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(f.A, { id: t9, children: eK.intl.string(eK.t.bBRdiB) }),
              ],
          });
}
var t8 = n(451125);
function t4(e) {
    let { onBack: l } = e,
        n = i.useRef(null);
    return (
        i.useEffect(() => {
            n.current?.focus();
        }, []),
        (0, t.jsx)(n5, {
            hasGradientBackground: !0,
            children: (0, t.jsxs)("div", {
                className: t8.wx,
                children: [
                    (0, t.jsx)(eG.D, {
                        innerRef: n,
                        "aria-label": eK.intl.string(eK.t["4IYwrw"]),
                        onClick: l,
                        className: t8.Gv,
                        children: (0, t.jsx)(t0.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lB.D, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        className: t8.R_,
                        children: eK.intl.string(eK.t.PxUx8e),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: t8.Ij,
                        children: eK.intl.string(eK.t.X0ir7L),
                    }),
                    (0, t.jsx)("div", { className: t8.ZZ, children: (0, t.jsx)(t6, {}) }),
                ],
            }),
        })
    );
}
var ie = n(450579);
let il = "user-profile-editing-panel",
    it = "profile-modal-editing-panel-heading";
function ii(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e7.m, {
        text: eK.intl.string(eK.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: i,
            "aria-label": eK.intl.string(eK.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": il,
            className: a()(ie.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lw.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function ir(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e7.m, {
            text: eK.intl.string(eK.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lG.K, {
                buttonRef: i,
                "aria-label": eK.intl.string(eK.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": il,
                icon: lw.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function ia(e) {
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
        [x, h] = i.useState(!1),
        v = i.useRef(null),
        A = i.useCallback(() => {
            h(!0);
        }, []),
        b = i.useCallback(() => {
            h(!1), requestAnimationFrame(() => v.current?.focus());
        }, []);
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: il,
              "aria-labelledby": it,
              className: a()(ie.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: ie.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: it, children: eK.intl.string(eK.t["L+ch00"]) }),
                      }),
                      x
                          ? (0, t.jsx)(t4, { onBack: b })
                          : (0, t.jsx)(tQ, {
                                panelId: il,
                                user: p,
                                selectedGuildId: l,
                                originGuildId: n,
                                isLoading: o,
                                isEditingDisabled: d,
                                collapseButtonRef: g,
                                onClosePanel: u,
                                onSelectGuildId: r,
                                onShowPremiumTryItOut: A,
                                premiumTryItOutButtonRef: v,
                            }),
                  ],
              }),
          });
}
var is = n(576260),
    io = n(347805),
    id = n(629403),
    iu = n(612630),
    ic = n(260598);
function ig(e) {
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
            label: h,
            maxLength: v,
            rows: A,
            disabled: b = !1,
            error: j,
            className: I,
        } = e,
        C = null != v && (l ? r : n).length > v ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: v }) : void 0,
        N = l && r !== n,
        y = C ?? (N ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e4, {
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
        previewErrorMessage: y,
        input: (0, t.jsx)(ic.f, {
            label: h,
            hideLabel: !0,
            inputRef: g,
            value: r,
            onChange: a,
            onFocus: E,
            onKeyDown: f,
            maxLength: v,
            error: y,
            placeholder: p,
            rows: A,
            disabled: b,
            autosize: !0,
        }),
    });
}
var im = n(674947);
function ip(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iu.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await id.A.updateNote(l, e);
                    } catch {
                        m(eK.intl.string(eK.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == p,
        v = e9({ value: p ?? "", onCommit: x, disabled: h }),
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: im.t, children: p })
            : null;
    return (0, t.jsx)(ig, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eK.intl.string(eK.t.PbMNh2),
        label: eK.intl.string(eK.t.PbMNh2),
        placeholder: h ? eK.intl.string(eK.t["WLKx/9"]) : eK.intl.string(eK.t.VBhOe2),
        maxLength: Y.T7x,
        rows: 3,
        disabled: h,
        error: f,
    });
}
var ix = n(83013),
    ih = n(518477),
    iv = n(273781);
function iA(e) {
    let { userId: l } = e,
        n = (0, ev.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? ip : io.A;
    return (0, t.jsx)(ix.A, {
        heading: eK.intl.string(eK.t["mQKv+v"]),
        scrollTargetId: ih.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iv.N : iv.w,
            autoFocus: n === ih.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ib = n(123292),
    ij = n(263293),
    iI = n(871645);
function iC(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: ij.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iI.oR, ij.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: ij.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: ij.hP,
                            children: (0, t.jsx)(ib.Q, {
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
var iN = n(346055),
    iy = n(289873),
    iE = n(103964);
function iP(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && t3.O.announce(eK.intl.string(eK.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iN.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iE.f, l && iE.z),
                    children: n && (0, t.jsx)(iy.y, { type: iy.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var ik = n(568602),
    iS = n(625494),
    iR = n(61881);
function iT(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([iR.A, eg.A], () => iR.A.hasUnsavedChanges() || eg.A.hasUnsavedChanges());
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
                iS._.subscribe(Y.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    iS._.unsubscribe(Y.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(ik.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var iD = n(841417),
    i_ = n(933832),
    iL = n(972213),
    iO = n(97483),
    iM = n(384377);
let iw = {
        [ih.jM.WIDGET_ADDED]: {
            message: eK.intl.string(eK.t.fFP1Uy),
            icon: (0, t.jsx)(i_.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [ih.jM.WIDGET_REMOVED]: {
            message: eK.intl.string(eK.t.zzsK7h),
            icon: (0, t.jsx)(i_.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [ih.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eK.intl.string(eK.t["84MExs"]),
            icon: (0, t.jsx)(iL.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iO.Ck.FAILURE,
        },
        [ih.jM.SOMETHING_WENT_WRONG]: {
            message: eK.intl.string(eK.t.F8FvUy),
            icon: (0, t.jsx)(iL.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iO.Ck.FAILURE,
        },
    },
    iG = (e) => {
        let { className: l } = e,
            n = (0, iM.fu)(),
            r = (0, s.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(iw[n]), t3.O.announce(iw[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, iM.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, iM.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(n9.animated.div, { className: l, style: e, children: (0, t.jsx)(iC, { ...d }) }),
                ),
            })
        );
    };
var iF = n(297413),
    iV = n(465829),
    iU = n(826673),
    iB = n(576705),
    iW = n(292666);
function iz(e) {
    let { isEditing: l, inputRef: n, ...t } = e9(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function iH(e) {
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
        helperText: g,
    } = e;
    return (0, t.jsx)(iW.k, {
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
        helperText: g,
    });
}
function iK(e) {
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
            size: h = "default",
            maxLength: v,
            error: A,
            warning: b,
            trailing: j,
            className: I,
            disabled: C = !1,
        } = e,
        N =
            (null != v && (l ? i : n).length > v
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: v })
                : void 0) ?? A,
        y = "compact" === h ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e4, {
        ...y,
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        disabled: C,
        input: (0, t.jsx)(iH, {
            inputRef: c,
            label: x,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: v,
            placeholder: m,
            trailing: j,
            error: N,
            helperText: b,
        }),
        previewErrorMessage: N,
        previewWarningMessage: b,
    });
}
var iq = n(530895);
function iX(e) {
    return null == e || "" === e ? void 0 : e;
}
function iY(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        f,
        m,
        { user: p, displayProfile: h } = e,
        { analyticsLocations: v } = (0, I.Ay)(),
        A = h?.guildId != null,
        b = h?.guildId ?? void 0,
        j = eQ.Ay.canUsePremiumProfileCustomization(p),
        C = (0, lZ.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: N, permissionsLoaded: y } = (0, s.cf)([iB.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: iB.A.can(Y.xBc.CHANGE_NICKNAME, e) || iB.A.can(Y.xBc.MANAGE_NICKNAMES, e),
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
        (f = iX(c) ?? iX(r) ?? p.username),
        (m = iX(c) ?? p.username),
        {
            value: g,
            previewValue: n ? f : m,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e0.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e0.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        S = iz({ value: E, onCommit: k, disabled: !N }),
        { isEditing: R, handleCommit: T } = S,
        D = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        _ = (0, eJ.EC)(b ?? null),
        L = A ? D.nick?.[0] : D.global_name?.[0],
        O = _?.nick?.[0],
        w = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        G = eK.intl.string(A ? eK.t.mq6Cg9 : eK.t.XuZU7A),
        F = A ? eK.intl.string(eK.t.YcDKr8) : p.username,
        V = eK.intl.string(A ? eK.t["g7OSZ/"] : eK.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && T(),
                    C &&
                        (0, iU.Dr)(lF.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: t_.i.INDIRECT_ACTION,
                        }),
                    (0, nx.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, T, v, b, C],
        ),
        W = {
            icon: lw.V,
            tooltip: eK.intl.string(eK.t.lqKKI2),
            "aria-label": eK.intl.string(eK.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: U,
        },
        z =
            A && !N && y
                ? (0, t.jsx)(e7.m, {
                      text: eK.intl.string(eK.t.gzjxQi),
                      children: (0, t.jsx)(eG.D, {
                          tag: "span",
                          className: iq.C,
                          children: (0, t.jsx)(lV.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eK.intl.string(eK.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != P
                ? (0, t.jsx)(iV.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: iq.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(iK, {
        ...S,
        preview: H,
        placeholder: F,
        editButtonAriaLabel: V,
        label: G,
        maxLength: Y.zzC,
        trailing: N && j ? W : void 0,
        error: L,
        warning: O,
        disabled: !N,
    });
}
var i$ = n(688960);
function iZ(e) {
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
        (r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingPronouns)),
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
        m = iz({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eK.intl.string(x ? eK.t.AXiE0i : eK.t["76Aqhl"]);
    return (0, t.jsx)(iK, {
        ...m,
        size: "compact",
        className: a()(i$.k, p && i$.J),
        preview: h ? (0, t.jsx)(iV.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eK.intl.string(eK.t.h6VAO7),
        label: eK.intl.string(eK.t["rniRE+"]),
        placeholder: v,
        maxLength: Y.VE5,
    });
}
var iJ = n(145497),
    iQ = n(685073),
    i0 = n(318785),
    i1 = n(534400),
    i2 = n(743981),
    i7 = n(573109),
    i3 = n(832344);
let i5 = "no-server-tag";
function i9(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eG.D, {
        innerRef: l,
        className: a()(i7.L5, { [i7.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: i7.W3,
            tag: "span",
            children: [
                o
                    ? eK.intl.string(eK.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  i1.Z9,
                                  {
                                      src: (0, iQ.gC)(n, r, i2.Sl.SIZE_14),
                                      size: i2.Sl.SIZE_14,
                                      className: i7.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, iQ.gC)(n, r, i2.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tc.a, { size: "xs", color: "currentColor", className: i7.u4 }),
            ],
        }),
    });
}
function i6() {
    let e = (0, i0.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, iQ.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === i5
                    ? (0, t.jsx)("div", {
                          className: i3.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: i7.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(th.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: i5, label: eK.intl.string(eK.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(iJ.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(i1.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, e0.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(tC, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eK.intl.string(eK.t.Pdd1nd),
              listboxClassName: i7.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(i9, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var i8 = n(211180);
function i4(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(iV.Ay, {
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
        : (0, t.jsx)(iF.A, {
              user: l,
              forceUsername: !0,
              className: i8.a1,
              usernameClass: i8.eb,
              discriminatorClass: i8.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(iY, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(i8.AK, i8.j6),
                children: [d, (0, t.jsx)(iV.Ce, {}), (0, t.jsx)(iZ, { displayProfile: n }), (0, t.jsx)(i6, {}), r],
            }),
        ],
    });
}
var re = n(97808),
    rl = n(980707),
    rn = n(477782),
    rt = n(22231),
    ri = n(601255),
    rr = n(562819),
    ra = n(19575),
    rs = n(145762),
    ro = n(935485);
let rd = ra.Ay.getEnableHardwareAcceleration() ? re.Js : re.eu;
function ru(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rl.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.YAgq3W),
        children: (0, t.jsx)(rn.rX, { children: n }),
    });
}
function rc(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eb.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        f = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([eu.Ay], () => (null != n ? eu.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0).pendingAvatar),
                f = u ? c?.avatar : l.avatar,
                m = (0, eo.z5)(g, f),
                p = u && null != l.avatar,
                x = eQ.Ay.canUsePremiumProfileCustomization(l),
                h = x || null == n,
                v = x || null == n,
                A = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                b = (0, eo.a4)({ user: l }),
                j = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eo.CP)(n ?? void 0),
                N = void 0 !== C,
                y = null != (0, ri.A)(N ? C : j) && (N ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: na.HL.AVATAR,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        (0, rr.L)({
                            analyticsLocations: d,
                            guild: A ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, A, a]),
                S = i.useCallback(() => {
                    r(),
                        (0, lQ.rM)(null, f, (e) => (0, e0.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(p ? "reset" : "remove");
                }, [r, n, f, p]),
                R = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rn.Dr,
                                { id: "change-avatar", label: eK.intl.string(eK.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rn.Dr,
                                { id: "change-decoration", label: eK.intl.string(eK.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.TDjKDm),
                                          action: S,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.twB3fz),
                                          action: S,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        y &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, m, y, P, k, S, R]);
        })({ user: l, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rs.my, rs.vk, ro.kL, { [ro.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rd, { ...r, imageClassName: a()(rs.Lw, ro.HU) }),
                  (0, t.jsx)(ne.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: ne.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, t.jsx)(ru, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: ro.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rt.R,
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
var rg = n(875262);
function rf(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rl.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.FzU73A),
        children: (0, t.jsx)(rn.rX, { children: n }),
    });
}
function rm(e) {
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
                f = (0, lY.sk)("UserProfileModalV2EditableBanner"),
                m = eQ.Ay.canUsePremiumProfileCustomization(l),
                p = null == n,
                x = p || m,
                h = f && (p || m),
                v = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0)),
                C = (0, s.bG)([W.A], () =>
                    null != n ? W.A.getGuildMemberProfile(l.id, n)?.banner : W.A.getUserProfile(l.id)?.banner,
                ),
                N = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                E = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eo.Ac)(A, C),
                S = v && N,
                R = v && E,
                T = v && P,
                D = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                L = (0, eo.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                O = (0, y.A)(L?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: na.HL.BANNER,
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
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                F = i.useCallback(() => {
                    r(), (0, lQ.rM)(null, C, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, C]),
                V = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nH.w)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: O,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, O, a]),
                B = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                rn.Dr,
                                { id: "change-banner", label: eK.intl.string(eK.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rn.Dr,
                                { id: "change-effect", label: eK.intl.string(eK.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rn.Dr,
                                { id: "change-frame", label: eK.intl.string(eK.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        k &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rn.Dr,
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
                        D &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        _ &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rn.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [S, m, x, h, R, T, k, D, _, w, G, U, F, V, B]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rg.kL, { [rg.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: rg.Pr }),
                  (0, t.jsx)(ne.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: ne.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rf, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rg.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rt.R,
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
var rp = n(777480),
    rx = n(107563),
    rh = n(570287);
n(938796);
var rv = n(913453),
    rA = n(667049),
    rb = n(837531),
    rj = n(186272),
    rI = n(800609),
    rC = n(128604);
let rN = (e) => e * (2 - e),
    ry = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function rE(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function rP(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, Z.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                eh(n, 1024)
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
        : (0, t.jsx)("div", { className: rI.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function rk(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nD.add(e), () => nD.delete(e)),
            () => n_,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function rS(e) {
    var l;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: f,
            channelId: m,
            displayProfile: p,
            nickname: x,
            hasEntered: h,
            customStatusPrompt: v,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: C,
            accentColorOverride: N,
            profileEffectOverride: y,
            profileFrame: E,
            fadeInProfileFrame: k,
            allowEditing: S,
            isLoading: O = !1,
        } = e,
        M = o.id === d.id,
        F = i.useRef(null),
        { isHoveringOrFocusing: U } = (0, R.A)(F),
        [B, W] = i.useState(),
        z = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? W("compact-xs") : l <= 380 ? W("compact-sm") : W(void 0);
        }, []);
    (0, A.g)(F, z, [], { fireOnMount: !0 });
    let H = null != B ? ry[B] : void 0,
        $ = i.useMemo(() => v ?? (0, T.A)(), [v]),
        { relationshipType: Z, originApplicationId: ei } = (0, s.cf)([w.A], () => ({
            relationshipType: w.A.getRelationshipType(o.id),
            originApplicationId: w.A.getOriginApplicationId(o.id),
        })),
        er =
            ((l = o.id),
            (n = (0, K.bG)([X.default], () => X.default.locale)),
            (r = (0, K.bG)([w.A], () => (w.A.getRelationshipType(l) === Y.eA$.FRIEND ? w.A.getSince(l) : null), [l])),
            (0, q.An)(r, n)),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        es = (0, _.q)({ userId: o.id }),
        eo = (0, D.fi)(o.id),
        { appIdentities: ed, connections: eu } = (function (e) {
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
        ec = (0, J.A)(o.id),
        eg = eu.length > 0 || ed.length > 0,
        em = ec.length > 0,
        ep = S ? rm : eI.A,
        ex = S ? rc : eb.A,
        eh = p?.guildId ?? u,
        ev = i.useCallback(() => {
            (0, eM.A)({ user: o, guildId: eh, alt: x });
        }, [x, eh, o]);
    return (0, t.jsxs)("main", {
        className: a()(rI.profile, null != B && rI[B]),
        ref: F,
        "aria-busy": O,
        children: [
            (0, t.jsxs)("div", {
                className: rI.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: rI.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: H,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    (0, t.jsx)(ex, {
                        user: o,
                        displayProfile: p,
                        guildId: u,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        specOverrides: H,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                        onOpenAvatar: S ? void 0 : ev,
                    }),
                    (0, t.jsx)(eL.A, {
                        user: o,
                        guildId: u,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: h,
                        prompt: M ? $ : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: rI.profileBody,
                children: [
                    (0, t.jsx)(i4, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: S,
                    }),
                    Z === Y.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rI.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: rI.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            e_.A.Overlay,
                            {
                                className: rI.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: rI.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rI.profileOverlay,
                            children: (0, t.jsx)(ix.A, {
                                heading: eK.intl.string(eK.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: rI.profileBanner,
                                children: (0, t.jsx)(L.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eD.A, { user: o, className: rI.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rI.profileOverlay,
                            children: (0, t.jsx)(eT.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: rI.profileButtons,
                        children: (0, t.jsx)(lh, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: Z,
                            onClose: b,
                        }),
                    }),
                    M && (0, t.jsx)(eC.A, { isPremiumUser: (0, V.ki)(d) }),
                    !ea && (0, t.jsx)(lr, { displayProfile: p, isEditable: S }),
                    es.length > 0 &&
                        (0, t.jsx)(ix.A, {
                            heading: eK.intl.string(eK.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(ix.A, {
                        heading: eK.intl.string(eK.t.a6XYD9),
                        children: (0, t.jsx)(eS.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: ih.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(ix.A, {
                            heading: eK.intl.string(eK.t.wlTO8v),
                            children: (0, t.jsx)(ey, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eO.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: rI.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (S || eg) &&
                        (0, t.jsx)(ix.A, {
                            heading: eK.intl.string(eK.t["3fe7U5"]),
                            scrollTargetId: ih.bk.CONNECTIONS,
                            children: (0, t.jsx)(lM, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: S,
                                className: rI.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        em &&
                        (0, t.jsx)(ix.A, {
                            heading: eK.intl.string(eK.t.PHjkRE),
                            scrollTargetId: ih.bk.APPS,
                            children: (0, t.jsx)(eY, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: rI.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iA, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(rk, { displayProfile: p, profileEffectOverride: y, isHovering: U }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rE, fadeIn: k }),
        ],
    });
}
function rR(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, $.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, ea.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function rT(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: A,
            sessionId: C,
            initialTabSection: P,
            initialScrollTarget: R,
            transitionState: T,
            customStatusPrompt: D,
            openedAt: _,
            onClose: L,
            sourceAnalyticsLocations: V = [],
            themeContainerClassName: K,
        } = e,
        q = l.id === n.id,
        X = tD(L, q),
        {
            guildId: Y,
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
                f = (0, s.bG)([W.A], () => W.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
                    hasError: "retrying" === d || (null != f && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        el = i.useMemo(() => (null != Y ? { [Y]: [l.id] } : {}), [Y, l.id]);
    (0, b.Eq)(el, "UserProfileModalV2");
    let en = (0, z.X)("UserProfileModalV2"),
        et = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        ea = (0, ei.A)(l.id) && en,
        em = (0, er.W)(l.id),
        eh = ee && !em,
        eb = ea && !et && !ee,
        {
            pendingThemeColors: ej,
            avatarDecorationOverride: eI,
            avatarOverride: eC,
            bannerOverride: eN,
            accentColorOverride: ey,
            profileEffectOverride: eE,
            profileFrameOverride: eP,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([eg.A, ec.default, eu.Ay, W.A], () => {
                if (!t) return ex;
                let e = ec.default.getUser(l);
                if (null == e) return ex;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = eg.A.getPendingChanges(n),
                    c = null != n ? eu.Ay.getMember(n, l) : null,
                    g = W.A.getUserProfile(l),
                    f = null != n ? W.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, eo.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, ed.V7)({ userId: l, image: a, size: ep }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, eo.us)({
                        userValue: g?.profileEffect,
                        guildValue: f?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eo.us)({
                        userValue: g?.profileFrame,
                        guildValue: f?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: eb, guildId: Y }),
        {
            isExpanded: eS,
            isAnimating: eT,
            transition: eD,
            handleExpand: eL,
            handleCollapse: eO,
            refs: { expandIconButtonRef: eM, expandTabButtonRef: ew, collapseButtonRef: eG },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: rN },
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
                f = i.useCallback(() => {
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
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eF = ea && !eS,
        eV = ea && (!eS || eT),
        { defaultWishlistId: eU } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: eU, userId: l.id });
    let eB = (0, eA.fC)(),
        eW = eh && (!ea || !Z),
        ez = ea && ee,
        eH = $ !== Y || ez || null != eB.interactionType,
        eq = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rv.A)(i),
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
                c = (0, rA.A)(i.id),
                g = (0, rh.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, ei.A)(i.id),
                x = W.A.getFirstWishlistId(i.id),
                h = null != x,
                v = h ? W.A.getWishlistSettings(i.id, x) : null,
                A = (h ? rx.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: eK.intl.string(eK.t.laViwx), section: ih.RP.WIDGETS }),
                f.push({ text: eK.intl.string(eK.t.chq59f), section: ih.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                C = v?.visibility === rp.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: eK.intl.string(eK.t["7lZ31J"]), section: ih.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, rb.A)(a), section: ih.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, rj.A)(d), section: ih.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eX } = (0, I.Ay)([...V, j.A.USER_PROFILE_MODAL_V2]),
        eY = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: Y,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        e$ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eX, ...eY, action: ih.pt.SHOW_STYLES_PANEL }), eL();
        }, [eX, eY, eL]),
        eZ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eX, ...eY, action: ih.pt.HIDE_STYLES_PANEL }), eO();
        }, [eX, eY, eO]),
        eJ = (0, H.Ay)(l.id, Y),
        eQ = void 0 !== eP ? eP?.skuId : eJ?.profileFrame?.skuId,
        e0 = (0, y.A)(eQ, "UserProfileModalV2"),
        e1 = (0, N.A)(eQ),
        { profileFrameStyle: e2, profileFrameClassName: e7 } = (0, k.A)(eQ);
    (0, E.A)({ skuId: eJ?.profileFrame?.skuId, openedAt: _, context: eY, analyticsLocations: eX });
    let e3 = F.Ay.useName(eJ?.guildId, c, l),
        e5 = (0, S.GV)(),
        e9 = (0, s.bG)([M.A], () => (null != Y ? M.A.getGuild(Y) : null)),
        e6 = q
            ? null != e9
                ? eK.intl.formatToPlainString(eK.t.M7OhOF, { guildName: e9.name })
                : eK.intl.string(eK.t.egQPgM)
            : eK.intl.format(eK.t.KRe1Fk, { name: e3 });
    return (0, t.jsx)(I.f5, {
        value: eX,
        children: (0, t.jsx)(U.of, {
            value: eY,
            openedAt: _,
            fetchStartedAt: eJ?.fetchStartedAt,
            fetchEndedAt: eJ?.fetchEndedAt,
            isLoaded: eJ?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eB,
                children: (0, t.jsx)(ev.N, {
                    value: R,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(rC.zr, { [rC.QF]: eJ?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e5,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(iT, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(rI.layoutContainer, e7, {
                                        [rI.editingPanelEnabled]: ea,
                                        [rI.editingPanelExpanded]: ea && eS,
                                        [rI.isAnimating]: eT,
                                    }),
                                    style: e2,
                                    children: [
                                        (0, t.jsxs)(rR, {
                                            user: l,
                                            displayProfile: eJ,
                                            pendingThemeColors: ej,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: rC.Oo,
                                                    children: [
                                                        (0, t.jsx)(lv.A, { onClose: X }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e5, children: e6 }),
                                                        }),
                                                        eV &&
                                                            (0, t.jsx)(ir, {
                                                                buttonRef: eM,
                                                                onClick: e$,
                                                                className: rI.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eF &&
                                                    (0, t.jsx)("div", {
                                                        className: rI.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(ii, {
                                                            innerRef: ew,
                                                            onClick: e$,
                                                            className: rI.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                ea &&
                                                    eD((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(ia, {
                                                                  className: a()(rI.editingPanel, {
                                                                      [rI.isExpanded]: eS,
                                                                  }),
                                                                  selectedGuildId: $,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: J,
                                                                  onClose: eZ,
                                                                  collapseButtonRef: eG,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: ee,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(e_.A, {
                                                    className: a()(K, rC.A7, rI.profileContentOuter),
                                                    innerClassName: rI.profileContentInner,
                                                    user: l,
                                                    displayProfile: eJ,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: ej,
                                                    isPrivate: eJ?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(rP, { displayProfile: eJ, pendingBanner: eN }),
                                                        eJ?.private === !0 && (0, t.jsx)(eR.A, {}),
                                                        !eh && (0, t.jsx)(iG, { className: rI.noticeContainer }),
                                                        eW &&
                                                            (0, t.jsx)("div", {
                                                                className: rI.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iC, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eK.intl.string(eK.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Q
                                                                            ? eK.intl.string(eK.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Q,
                                                                    actionDisabled: !ea && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: rI.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: X }),
                                                        }),
                                                        (0, t.jsxs)(iP, {
                                                            showScrim: eH,
                                                            showLoadingSpinner: Z,
                                                            className: rI.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(rS, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: Y,
                                                                    channelId: c,
                                                                    displayProfile: eJ,
                                                                    nickname: e3,
                                                                    originGuildId: d,
                                                                    hasEntered: T === h.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: X,
                                                                    avatarDecorationOverride: eI,
                                                                    avatarOverride: eC,
                                                                    bannerOverride: eN,
                                                                    accentColorOverride: ey,
                                                                    profileEffectOverride: eE,
                                                                    profileFrame: e0,
                                                                    fadeInProfileFrame: e1,
                                                                    allowEditing: eb,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(iD.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eJ,
                                                                    guildId: Y,
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
                            (0, t.jsx)(is.A, { userId: l.id, guildId: Y, className: rI.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
