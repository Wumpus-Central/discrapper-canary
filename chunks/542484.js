n.d(l, { A: () => iT });
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
    h = n(231723),
    v = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    C = n(480335),
    N = n(31956),
    y = n(361628),
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
    eh = n(744753),
    ev = n(361311),
    eA = n(931481),
    eb = n(439053),
    ej = n(743987),
    eI = n(312381),
    eC = n(501193),
    eN = n(383448),
    ey = n(946356),
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
    eW = n(81400),
    eK = n(428262),
    eX = n(84540),
    eq = n(621466);
n(321073);
var eY = n(219869),
    eZ = n(990078),
    e$ = n(775602),
    eJ = n(916315);
function eQ(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e$.A], () => e$.A.useReducedMotion),
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
                !u || (null != f.current && (0, eq.vq)(e.relatedTarget) && f.current.contains(e.relatedTarget)) || A();
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
function e0(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: eJ.L7,
            children: (0, t.jsx)(eY.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(eZ.m, { text: l, ariaHidden: !0, children: i });
}
function e1(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? c.E : p.i;
    return (0, t.jsxs)(eS.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: eJ.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? eJ.ik : eJ.QW }), n],
    });
}
function e2(e) {
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
        R = [];
    C && R.push(j), k && "compact" !== c && R.push(I);
    let S = R.length > 0 ? R.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(eJ.LL, { [eJ.JD]: N, [eJ.xe]: y, [eJ.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eS.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: eJ.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(eR.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": S,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: eJ.lD, children: (0, t.jsx)(e0, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(eJ.kL, { [eJ.oE]: "compact" === c, [eJ.c1]: "multiline" === c }, p),
        onBlur: h,
        onKeyDown: v,
        children: (0, t.jsx)(
            "div",
            {
                className: eJ.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: eJ.VH, children: T }),
                              k && "compact" !== c && (0, t.jsx)(e1, { id: I, message: P, type: E }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var e3 = n(786826);
function e7(e) {
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
                ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: h })
                : void 0) ?? b;
    return (0, t.jsx)(e2, {
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
        input: (0, t.jsx)(e3.f, {
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
let e9 = [
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
var e8 = n(652215),
    e5 = n(307731);
function e6(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([er.default], () => er.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        f = eK.Ay.canUsePremiumProfileCustomization(u),
        {
            value: m,
            previewValue: p,
            onCommit: x,
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
                    (0, eX.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        h = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = eQ(e),
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
                let e = n.current?.ownerDocument ?? document,
                    i = (e) => {
                        (0, eq.vq)(e.target) && !a(e.target) && t();
                    };
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let n = e.relatedTarget;
                    !(0, eq.vq)(n) || a(n) || t();
                },
                [l, a, t],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: m, onCommit: x }),
        v = !(0, ez.uJ)(p),
        A = (0, s.bG)([ea.A], () => ea.A.getErrors(g)),
        b = (0, eW.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e9.length)), e9[e];
        }, []),
        N = c ? eV.intl.string(eV.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(e7, {
              ...h,
              preview: v ? (0, t.jsx)(eH.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eV.intl.string(eV.t.lO3n7a),
              label: eV.intl.string(eV.t["YWo+Zd"]),
              emojiPickerIntention: e5.EmojiIntention.PROFILE,
              maxLength: e8.NA2,
              error: j,
              warning: I,
          })
        : v
          ? (0, t.jsx)(eH.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e4(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, ez.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eV.intl.string(eV.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e6, { displayProfile: l }) : (0, t.jsx)(eH.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var le = n(982168),
    ll = n(722868),
    ln = n(822775),
    lt = n(982985),
    li = n(700174),
    lr = n(34188),
    la = n(859040),
    ls = n(23722),
    lo = n(993401);
function ld(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, ls.A)(() => {
            (0, la.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lo.q3, {
        action: "VISIT_SHOP",
        icon: lr.U,
        tooltipText: eV.intl.string(eV.t.b2d0N0),
        onClick: a,
        ...n,
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
        u = (0, F.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ll.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, lc.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === e8.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(ld, { onClose: d }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ln.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(ld, { onClose: d }),
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
            : o === e8.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e8.eA$.FRIEND || o === e8.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lu.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e8.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lu.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
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
                            (0, t.jsx)(lt.l, { userId: l.id, onClose: le.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lf = n(463156),
    lm = n(349288),
    lp = n(509434),
    lx = n(307301),
    lh = n(228366),
    lv = n(95561),
    lA = n(874490),
    lb = n(370480),
    lj = n(968309),
    lI = n(174459),
    lC = n(486020),
    lN = n(123917),
    ly = n(783419);
let lE = "User Profile Modal V2";
function lP(e) {
    let l = X.A.get(e);
    (0, lj.A)({ platformType: l.type, location: lE }),
        lI.default.track(e8.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lE,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lk() {
    lh.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lP, stackingBehavior: "stack" });
}
function lR(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, lb.An)(r[ly.pK.CREATED_AT], n),
        s = X.A.get((0, lA.ML)(l.type));
    return (0, t.jsx)(lT, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(eZ.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eS.E, { variant: "text-sm/normal", className: eU.GW, children: l.name }),
                  })
                : (0, t.jsx)(lm.Anchor, {
                      href: e,
                      className: eU.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eV.intl.string(eV.t.q5jLJB)}`
                              : `${l.name}, ${eV.intl.string(eV.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lv.zV)(e8.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lN.h)({ href: e, trusted: s?.type !== e8.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eU.vi,
                          children: [
                              (0, t.jsx)(eZ.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eS.E, {
                                      variant: "text-sm/normal",
                                      className: eU.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lp.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === e8.fg2.REDDIT
                ? (0, eD.xE)(r)
                : l.type === e8.fg2.STEAM
                  ? (0, eD.dy)(r)
                  : l.type === e8.fg2.BLUESKY || l.type === e8.fg2.MASTODON || l.type === e8.fg2.TWITTER
                    ? (0, eD.ED)(r)
                    : l.type === e8.fg2.PAYPAL
                      ? (0, eD.gZ)(r)
                      : l.type === e8.fg2.EBAY
                        ? (0, eD.ub)(r)
                        : l.type === e8.fg2.TIKTOK
                          ? (0, eD.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lS(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lC.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lT, {
        renderAccountName: () =>
            (0, t.jsx)(eZ.m, {
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
function lT(e) {
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
            (0, t.jsx)(eZ.m, {
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
function lD(e) {
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
                        l.map((e) => (0, t.jsx)(lR, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lS, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eR.D, {
                    className: eU.qG,
                    onClick: lk,
                    children: [
                        (0, t.jsx)(lx.j, { size: "sm", color: "currentColor" }),
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
var lO = n(922139),
    lL = n(193885),
    lw = n(408278),
    lM = n(890377),
    lG = n(789645),
    l_ = n(534514),
    lV = n(821609),
    lU = n(403581),
    lB = n(194261),
    lF = n(689175),
    lz = n(517461),
    lH = n(13875),
    lW = n(783420),
    lK = n(976860),
    lX = n(975732),
    lq = n(487233),
    lY = n(120386),
    lZ = n(317097),
    l$ = n(602853),
    lJ = n(922016),
    lQ = n(508274),
    l0 = n(654107),
    l1 = n(930349);
function l2(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l$.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l0.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ea.A, B.A], () => ({
            pendingAccentColor: ea.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: B.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lZ.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eX.p)({ accentColor: e }), []);
    return (0, t.jsx)(lJ.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lQ.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l1.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eV.intl.string(eV.t["/X3fkf"]),
                accessibleValue: (0, lZ.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lZ.Hl)(c) } }),
            }),
    });
}
var l3 = n(450373),
    l7 = n(252732),
    l9 = n(339984),
    l8 = n(111242);
function l5(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l8.o, style: { backgroundColor: l } });
}
function l6(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l8._ });
}
function l4(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l$.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lZ.LX)(r),
        { hex: s } = (0, l3.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l6, { src: o }) : (0, t.jsx)(l5, { backgroundColor: s });
}
function ne(e) {
    let l,
        { userId: n, guildId: i, disabled: r } = e,
        { newestAnalyticsLocation: a } = (0, I.Ay)(),
        o = null != i,
        d = (0, z.Ay)(n, i),
        u = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(i ?? void 0).pendingBanner),
        c = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner),
        g = (0, s.bG)([B.A], () =>
            null != i ? B.A.getGuildMemberProfile(n, i)?.banner : B.A.getUserProfile(n)?.banner,
        ),
        f = null === u,
        m = o && (d?.isUsingGuildMemberBanner() ?? !1),
        p = f && o && !m ? void 0 : u,
        x = (0, en.Ac)(u, g),
        h = o && null != c,
        v = x
            ? {
                  onClick: () => (0, l7.rM)(null, g, (e) => (0, eX.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eV.intl.string(h ? eV.t.jHlJNS : eV.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l1.V, {
        affordance: v,
        variant: "square",
        onClick: () =>
            (0, l7.XD)({
                uploadType: l9.HL.BANNER,
                analyticsSource: a,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eV.intl.string(eV.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === u),
            null === u || (l && null == g)
                ? eV.intl.string(eV.t["3Xph0/"])
                : l
                  ? eV.intl.string(eV.t.keN7ib)
                  : eV.intl.string(eV.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(l4, { displayProfile: d, pendingBanner: p, shouldAnimate: e }),
    });
}
var nl = n(913563),
    nn = n(383197),
    nt = n(922301),
    ni = n(368919),
    nr = n(259065),
    na = n(864386),
    ns = n(283607);
let no = "heading-lg/bold";
function nd(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: ns.M,
        children:
            null != n
                ? (0, t.jsx)(eS.E, {
                      variant: no,
                      children: (0, t.jsx)(ni.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nt.G.ANIMATED : nt.G.STATIC,
                          textClassName: ns.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eS.E, { variant: no, className: ns.W, color: "text-muted", children: l }),
    });
}
function nu(e) {
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
        h = void 0 !== p,
        v = null === p,
        A = o && null != f,
        b = (0, en.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        j = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        N = o ? (j(void 0 !== g ? g : d) ?? j(C) ?? l.username) : (j(C) ?? l.username),
        y = h ? null != p : null != x,
        E =
            null != b && y
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(A ? eV.t.en3ogK : eV.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (0, nr.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(l1.V, {
        affordance: (!v && (h || null != x)) || A ? E : "add",
        variant: "bar",
        onClick: P,
        accessibleLabel: eV.intl.string(eV.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eV.intl.string(eV.t["3Xph0/"]);
            let l = eV.intl.string((0, nl.A)(e.fontId)),
                n = eV.intl.string(nn.J[e.effectId] ?? na.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eV.intl.formatToPlainString(eV.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(b),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(nd, { stylesPreview: b, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var nc = n(473219),
    ng = n(366010),
    nf = n(736653),
    nm = n(674658),
    np = n(617061),
    nx = n(203632),
    nh = n(536572),
    nv = n(466681);
let nA =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nb =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nj(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, nf.Ay)(),
        r = (0, ng.M)(i) ? nA : nb;
    return (0, t.jsxs)("div", {
        className: nv.ti,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: nv.QQ }),
            l?.skuId != null &&
                (0, t.jsx)(C.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: nx.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function nI(e) {
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
        h = (0, en.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, nm.q)(h?.skuId),
        A = m ? null != f : null != g,
        b =
            null != h && A
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(x ? eV.t["SQy/Po"] : eV.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, np.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l1.V, {
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
        })({ profileEffectPreview: h, productName: (0, nh.VG)(v), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(nj, { effect: h, shouldAnimate: e }),
    });
}
var nC = n(515727),
    nN = n(84391);
let ny = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nE(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = (0, nf.Ay)(),
        u = (0, ng.M)(d) ? nA : nb,
        c = null != n,
        g = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        f = (0, en.Xf)({ user: l }),
        m = (0, en.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, en.Tu)(n ?? void 0),
        x = void 0 !== p,
        h = null === p || (!x && null == m),
        v = c && null != f,
        A = (0, en.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        b = (0, y.A)(A?.skuId, "EditableTileProfileFrameButton"),
        { product: j } = (0, nm.q)(A?.skuId),
        { profileFrameStyle: C, profileFrameClassName: N } = (0, P.A)(b?.skuId),
        k = x ? null != p : null != m,
        R =
            null != A && k
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: v ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(v ? eV.t.j6hZyM : eV.t.nQBruk),
                  }
                : void 0,
        S = i.useCallback(() => {
            (0, nC.w)({ analyticsLocations: o, guild: g ?? void 0, stackingBehavior: "stack" });
        }, [o, g]);
    return (0, t.jsx)(l1.V, {
        affordance: h && !v ? "add" : R,
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
        })({ profileFramePreview: A, productName: (0, nh.VG)(j), hasPendingSelection: null != p }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            (0, t.jsxs)(t.Fragment, {
                children: [
                    null != b &&
                        (0, t.jsx)("div", {
                            className: a()(nN.hm, N),
                            style: C,
                            children: (0, t.jsx)(E.A, { frame: b, filterLayer: ny }),
                        }),
                    (0, t.jsx)("div", {
                        className: a()(nN.ti, { [nN.yT]: null == b }),
                        children: (0, t.jsx)("img", { src: u, alt: "", className: nN.QQ, draggable: !1 }),
                    }),
                ],
            }),
    });
}
var nP = n(684732),
    nk = n(498596),
    nR = n(298387);
function nS(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lZ.Hl)(l),
        f = (0, lZ.bJ)(l, 0xffffff) < nk.Tr.NonText;
    return (0, t.jsx)(lJ.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lQ.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eR.D, {
                ...n,
                innerRef: c,
                className: nR.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nR.Hy, { [nR.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nT(e) {
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
        c = (0, lZ.Hl)(l),
        g = (0, lZ.Hl)(n),
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
    return (0, t.jsx)(l1.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nR.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nS, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nS, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nD(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ea.A, B.A], () => {
            let e = ea.A.getPendingChanges(n ?? void 0),
                t = B.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (B.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, et.V7)({ userId: l.id, image: u }),
        { primaryColor: f, secondaryColor: m } = (0, H.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l$.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, l0.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eX.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nP.l)(d, o)
                ? {
                      onClick: () => (0, eX.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eV.intl.string(eV.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(nT, {
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
var nO = n(315629),
    nL = n(788868),
    nw = n(235684);
function nM() {
    let e = i.useCallback(() => {
            (0, lK.pX)(e8.BVt.NITRO_HOME), (0, lX.closeUserProfileModal)();
        }, []),
        l = (0, ls.A)(e);
    return (0, t.jsx)(lW.A, {
        subscriptionTier: nL.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)(nO.h, {
                color: "nitro-pink",
                className: nw.U,
                children: [
                    (0, t.jsx)(eS.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eV.intl.format(eV.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lV.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lU.t,
                        text: eV.intl.string(eV.t.pj0XBN),
                        onClick: n,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nG = n(55619),
    n_ = n(942308);
function nV() {
    return (0, t.jsxs)("div", {
        className: n_.k,
        children: [
            (0, t.jsx)(eS.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eV.intl.string(eV.t.JFY17v),
            }),
            (0, t.jsx)(lV.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eV.intl.string(eV.t.R9GHya),
                onClick: () => nG.A.setEnabled(!1),
            }),
        ],
    });
}
var nU = n(847374),
    nB = n(111159),
    nF = n(548118),
    nz = n(711014),
    nH = n(540637),
    nW = n(801461),
    nK = n(44482),
    nX = n(844222),
    nq = n(561392),
    nY = n(716263),
    nZ = n(15626),
    n$ = n(930856);
function nJ(e) {
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
            let { reducedMotion: e } = i.useContext(nX.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nq.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nY.DL)(o, {
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
        N = i.useContext(nZ._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, nW.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        L = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, nW.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        G = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        _ = i.useCallback(() => {
            h(!1), k.current?.focus();
        }, [h]),
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
                    x && h(!1);
                }
            },
            [x, S, l, r, h],
        ),
        U = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), _());
            },
            [u, r, _],
        ),
        { activeIndex: B, handleKeyDown: F } = (0, nH.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = B !== z.current;
        (z.current = B), null != B && e && (T(B), x || ((O.current = !0), h(!0)));
    }, [B, x, h]);
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
                        if (!x) return void h(!0);
                        T((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void h(!0);
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            U([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(0), x || ((O.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((O.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (L.current = !0), h(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), _());
                        break;
                    default:
                        F(e);
                }
            },
            [u, x, l, S, U, _, r, h, F],
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
        "aria-labelledby": null != s ? `${y} ${E}` : void 0,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null || void 0,
        "aria-describedby": N?.describedById,
        onClick: M,
        onMouseDown: G,
        onKeyDown: H,
        onBlur: V,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), v.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: y, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: X }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(n$.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nH.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(nK.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nQ = n(138325);
let n0 = "MAIN_PROFILE";
function n1(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nF.Ay, { className: nQ.$f, guild: l, size: nF.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function n2(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: nQ.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: nQ.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: nQ.qL,
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
function n3(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eR.D, {
        innerRef: r,
        className: a()(nQ.L5, { [nQ.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eS.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nQ.v9,
                children: n,
            }),
            (0, t.jsx)(nU.a, {
                className: nQ.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function n7(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nz.Ay], () => nz.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([eG.A], () => {
            let e = eG.A.getGuildId();
            return null == e || ea._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ei.Ay, nz.Ay], () => {
            let e = {};
            for (let l of nz.Ay.getFlattenedGuildIds()) {
                let n = ei.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: n0,
                    label: eV.intl.string(eV.t["2p07FR"]),
                    value: n0,
                    leading: (0, t.jsx)(nB.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(n1, { guild: n }),
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
                          leading: (0, t.jsx)(n1, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? n0,
        p = f.find((e) => e.value === m) ?? f[0],
        h = i.useCallback(
            (e) => {
                let n = e === n0 ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(nJ, {
        className: nQ.kL,
        label: eV.intl.string(eV.t.rki38K),
        listboxClassName: nQ.yt,
        options: f,
        value: m,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(n2, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(n3, { leading: p.value === n0 ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var n9 = n(809467);
let n8 = "profile-modal-editing-panel",
    n5 = "profile-modal-editing-panel-heading";
function n6(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eZ.m, {
        text: eV.intl.string(eV.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: i,
            "aria-label": eV.intl.string(eV.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": n8,
            className: a()(n9.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lL.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function n4(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(eZ.m, {
            text: eV.intl.string(eV.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lw.K, {
                buttonRef: i,
                "aria-label": eV.intl.string(eV.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": n8,
                icon: lL.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function te(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eZ.m, {
        text: eV.intl.string(eV.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: n,
            className: n9.cS,
            "aria-label": eV.intl.string(eV.t["l/A351"]),
            onClick: l,
            "aria-controls": n8,
            "aria-expanded": !0,
            children: (0, t.jsx)(lM.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tl() {
    let [e, l] = (0, lz.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: n9.X6,
              children: [
                  (0, t.jsx)(eS.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eV.intl.string(eV.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eR.D, {
                      "aria-label": eV.intl.string(eV.t.rSe9ra),
                      className: n9.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lG.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tn() {
    let e = i.useCallback(() => {
            (0, lK.pX)(e8.BVt.NITRO_HOME), (0, lX.closeUserProfileModal)();
        }, []),
        l = (0, ls.A)(e);
    return (0, t.jsx)(lW.A, {
        subscriptionTier: nL.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)("div", {
                className: n9.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: n9.tm,
                        children: [
                            (0, t.jsx)(l_.D, {
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
                    (0, t.jsx)(lV.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lU.t,
                        text: eV.intl.string(eV.t["7IWwak"]),
                        onClick: n,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: n9.D0,
                        children: (0, t.jsx)("div", { className: n9.ZN, children: (0, t.jsx)(lB.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tt() {
    return (0, t.jsx)(eS.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: n9.BJ,
        "aria-hidden": !0,
        children: eV.intl.format(eV.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lU.t, { size: "xxs", color: "currentColor", className: n9.qp }),
        }),
    });
}
function ti(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: n9.Os,
        children: [
            (0, t.jsxs)("div", {
                className: n9.AM,
                children: [
                    (0, t.jsx)(l_.D, {
                        className: n9.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(eZ.m, {
                            text: eV.intl.string(eV.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lU.t, {
                                className: n9.l3,
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
function tr(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lO.animated.div, { className: n9.HT, style: e, children: (0, t.jsx)(nM, {}) }) : null,
    );
}
function ta(e) {
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
        h = o || d,
        v = null != l,
        A = null != p && eK.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !v,
        j = v && !A,
        I = (0, lH.sk)("UserProfileModalV2EditingPanel"),
        C = (0, ls.A)(r),
        N = i.useRef(null),
        {
            isUpsellDismissed: y,
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
        })({ scrollerRef: N, canShowUpsell: b });
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: n8,
              "aria-labelledby": n5,
              className: a()(n9.nd, { [n9.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: n9.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: n5, children: eV.intl.string(eV.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: n9.wx,
                          children: [
                              (0, t.jsx)(te, { innerRef: g, onClick: u }),
                              (0, t.jsx)(n7, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: C,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nV, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(m.F, {
                                        children: (0, t.jsxs)(lF.zC, {
                                            ref: N,
                                            className: a()(n9.XG, { [n9.uH]: P }),
                                            onScroll: E,
                                            children: [
                                                v && (A ? (0, t.jsx)(tl, {}) : (0, t.jsx)(tn, {})),
                                                A && (0, t.jsx)(tt, {}),
                                                (0, t.jsx)(ti, {
                                                    heading: eV.intl.string(eV.t.x5CoXR),
                                                    disabled: h || j,
                                                    children: (0, t.jsx)(nc.A, {
                                                        user: p,
                                                        guildId: l,
                                                        disabled: h || j,
                                                    }),
                                                }),
                                                (0, t.jsxs)(ti, {
                                                    heading: eV.intl.string(eV.t["50Nwpc"]),
                                                    disabled: h || j,
                                                    children: [
                                                        (0, t.jsx)(lq.A, { user: p, guildId: l, disabled: h || j }),
                                                        (0, t.jsx)(lY.A, { user: p, guildId: l, disabled: h || j }),
                                                    ],
                                                }),
                                                (A || v) &&
                                                    (0, t.jsx)(ti, {
                                                        heading: eV.intl.string(eV.t.NEzEws),
                                                        disabled: h || j,
                                                        showNitroIcon: !0,
                                                        children: (0, t.jsx)(nu, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: h || j,
                                                        }),
                                                    }),
                                                A || v
                                                    ? (0, t.jsxs)(ti, {
                                                          heading: eV.intl.string(eV.t.Zenogr),
                                                          disabled: h || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nD, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: h || !A,
                                                              }),
                                                              (0, t.jsx)(ne, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: h || !A,
                                                              }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(ti, {
                                                          heading: eV.intl.string(eV.t["/X3fkf"]),
                                                          disabled: h || j,
                                                          children: (0, t.jsx)(l2, { user: p, disabled: h }),
                                                      }),
                                                (0, t.jsxs)(ti, {
                                                    heading: eV.intl.string(I ? eV.t["Vfbar/"] : eV.t.wR5wOo),
                                                    disabled: h || j,
                                                    children: [
                                                        (0, t.jsx)(nI, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: h || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(nE, { user: p, guildId: l, disabled: h || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(tr, { isDismissed: y }),
                                ],
                            }),
                  ],
              }),
          });
}
var ts = n(982599),
    to = n(347805),
    td = n(629403),
    tu = n(612630),
    tc = n(260598);
function tg(e) {
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
        C = null != v && (l ? r : n).length > v ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: v }) : void 0,
        N = l && r !== n,
        y = C ?? (N ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e2, {
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
        input: (0, t.jsx)(tc.f, {
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
var tf = n(673451);
function tm(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tu.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await td.A.updateNote(l, e);
                    } catch {
                        m(eV.intl.string(eV.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        h = d && null == p,
        v = eQ({ value: p ?? "", onCommit: x, disabled: h }),
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
            ? (0, t.jsx)(eS.E, { variant: "text-sm/normal", color: "text-default", className: tf.t, children: p })
            : null;
    return (0, t.jsx)(tg, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eV.intl.string(eV.t.PbMNh2),
        label: eV.intl.string(eV.t.PbMNh2),
        placeholder: h ? eV.intl.string(eV.t["WLKx/9"]) : eV.intl.string(eV.t.VBhOe2),
        maxLength: e8.T7x,
        rows: 3,
        disabled: h,
        error: f,
    });
}
var tp = n(83013),
    tx = n(518477),
    th = n(77085);
function tv(e) {
    let { userId: l } = e,
        n = (0, eg.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, F.X)("UserProfileModalV2NotesSection"),
        a = r ? tm : to.A;
    return (0, t.jsx)(tp.A, {
        heading: eV.intl.string(eV.t["mQKv+v"]),
        scrollTargetId: tx.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? th.N : th.w,
            autoFocus: n === tx.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tA = n(123292),
    tb = n(921701),
    tj = n(861173);
function tI(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tb.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tj.oR, tb.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tb.Kk, children: l }),
                    (0, t.jsx)(eS.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tb.hP,
                            children: (0, t.jsx)(tA.Q, {
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
var tC = n(765178),
    tN = n(346055),
    ty = n(289873),
    tE = n(984180);
function tP(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tC.O.announce(eV.intl.string(eV.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tN.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tE.f, l && tE.z),
                    children: n && (0, t.jsx)(ty.y, { type: ty.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tk = n(568602),
    tR = n(625494);
function tS(e) {
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
                tR._.subscribe(e8.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tR._.unsubscribe(e8.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tk.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tT = n(515054),
    tD = n(933832),
    tO = n(972213),
    tL = n(97483),
    tw = n(606758);
let tM = {
        [tx.jM.WIDGET_ADDED]: {
            message: eV.intl.string(eV.t.fFP1Uy),
            icon: (0, t.jsx)(tD.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tx.jM.WIDGET_REMOVED]: {
            message: eV.intl.string(eV.t.zzsK7h),
            icon: (0, t.jsx)(tD.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tx.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eV.intl.string(eV.t["84MExs"]),
            icon: (0, t.jsx)(tO.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tL.Ck.FAILURE,
        },
        [tx.jM.SOMETHING_WENT_WRONG]: {
            message: eV.intl.string(eV.t.F8FvUy),
            icon: (0, t.jsx)(tO.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tL.Ck.FAILURE,
        },
    },
    tG = (e) => {
        let { className: l } = e,
            n = (0, tw.fu)(),
            r = (0, s.bG)([e$.A], () => e$.A.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(tM[n]), tC.O.announce(tM[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, tw.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, tw.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lO.animated.div, { className: l, style: e, children: (0, t.jsx)(tI, { ...u }) }),
                ),
            })
        );
    };
var t_ = n(297413),
    tV = n(878555),
    tU = n(576705),
    tB = n(292666);
function tF(e) {
    let { isEditing: l, inputRef: n, ...t } = eQ(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function tz(e) {
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
    return (0, t.jsx)(tB.k, {
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
function tH(e) {
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
                ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: v })
                : void 0) ?? A,
        y = "compact" === h ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e2, {
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
        input: (0, t.jsx)(tz, {
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
var tW = n(35783);
let tK = (e) => (null == e || "" === e ? void 0 : e);
function tX(e) {
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
        j = eK.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: C, permissionsLoaded: N } = (0, s.cf)([tU.A, w.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = w.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: tU.A.can(e8.xBc.CHANGE_NICKNAME, e) || tU.A.can(e8.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: y,
            previewValue: E,
            onCommit: P,
        } = ((n = null != (l = h?.guildId ?? null)),
        (r = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ei.Ay], () => (null != l ? (ei.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (f = tK(c) ?? tK(r) ?? p.username),
        (m = tK(c) ?? p.username),
        {
            value: g,
            previewValue: n ? f : m,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, eX.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, eX.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        k = tF({ value: y, onCommit: P, disabled: !C }),
        { isEditing: R, handleCommit: S } = k,
        T = (0, s.bG)([ea.A], () => ea.A.getErrors(b ?? null)),
        D = (0, eW.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        L = D?.nick?.[0],
        M = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        G = eV.intl.string(A ? eV.t.mq6Cg9 : eV.t.XuZU7A),
        _ = A ? eV.intl.string(eV.t.YcDKr8) : p.username,
        V = eV.intl.string(A ? eV.t["g7OSZ/"] : eV.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && S(),
                    (0, nr.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, S, v, b],
        ),
        F = {
            icon: lL.V,
            tooltip: eV.intl.string(eV.t.lqKKI2),
            "aria-label": eV.intl.string(eV.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: U,
        },
        z =
            A && !C && N
                ? (0, t.jsx)(eZ.m, {
                      text: eV.intl.string(eV.t.gzjxQi),
                      children: (0, t.jsx)(eR.D, {
                          tag: "span",
                          className: tW.C,
                          children: (0, t.jsx)(lB.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eV.intl.string(eV.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != E
                ? (0, t.jsx)(tV.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: M,
                      className: tW.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(tH, {
        ...k,
        preview: H,
        placeholder: _,
        editButtonAriaLabel: V,
        label: G,
        maxLength: e8.zzC,
        trailing: C && j ? F : void 0,
        error: O,
        warning: L,
        disabled: !C,
    });
}
var tq = n(469432);
function tY(e) {
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
                    (0, eX.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        m = tF({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eV.intl.string(x ? eV.t.AXiE0i : eV.t["76Aqhl"]);
    return (0, t.jsx)(tH, {
        ...m,
        size: "compact",
        className: a()(tq.k, p && tq.J),
        preview: h ? (0, t.jsx)(tV.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eV.intl.string(eV.t.h6VAO7),
        label: eV.intl.string(eV.t["rniRE+"]),
        placeholder: v,
        maxLength: e8.VE5,
    });
}
var tZ = n(145497),
    t$ = n(685073),
    tJ = n(318785),
    tQ = n(534400),
    t0 = n(743981),
    t1 = n(724637),
    t2 = n(329296);
let t3 = "no-server-tag";
function t7(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eR.D, {
        innerRef: l,
        className: a()(t1.L5, { [t1.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eS.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: t1.W3,
            tag: "span",
            children: [
                o
                    ? eV.intl.string(eV.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  tQ.Z9,
                                  {
                                      src: (0, t$.gC)(n, r, t0.Sl.SIZE_14),
                                      size: t0.Sl.SIZE_14,
                                      className: t1.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, t$.gC)(n, r, t0.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nU.a, { size: "xs", color: "currentColor", className: t1.u4 }),
            ],
        }),
    });
}
function t9() {
    let e = (0, tJ.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return (0, t$.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === t3
                    ? (0, t.jsx)("div", {
                          className: t2.uN,
                          children: (0, t.jsx)(eS.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: t1.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nK.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: t3, label: eV.intl.string(eV.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tZ.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(tQ.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, eX.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nJ, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eV.intl.string(eV.t.Pdd1nd),
              listboxClassName: t1.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(t7, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var t8 = n(874644);
function t5(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tV.Ay, {
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
        : (0, t.jsx)(t_.A, {
              user: l,
              forceUsername: !0,
              className: t8.a1,
              usernameClass: t8.eb,
              discriminatorClass: t8.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tX, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(t8.AK, t8.j6),
                children: [d, (0, t.jsx)(tV.Ce, {}), (0, t.jsx)(tY, { displayProfile: n }), (0, t.jsx)(t9, {}), r],
            }),
        ],
    });
}
var t6 = n(97808),
    t4 = n(980707),
    ie = n(477782),
    il = n(22231),
    it = n(601255),
    ii = n(562819),
    ir = n(19575),
    ia = n(106106),
    is = n(338165);
let io = ir.Ay.getEnableHardwareAcceleration() ? t6.Js : t6.eu;
function id(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(t4.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.YAgq3W),
        children: (0, t.jsx)(ie.rX, { children: n }),
    });
}
function iu(e) {
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
                p = eK.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                h = p || null == n,
                v = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
                A = (0, en.a4)({ user: l }),
                b = (0, en.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, en.CP)(n ?? void 0),
                C = void 0 !== j,
                N = null != (0, it.A)(C ? j : b) && (C ? null != j : null != b),
                y = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, l7.XD)({
                            uploadType: l9.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, ii.L)({ analyticsLocations: o, guild: v ?? void 0, stackingBehavior: "stack" });
                }, [r, o, v]),
                k = i.useCallback(() => {
                    r(),
                        (0, l7.rM)(null, g, (e) => (0, eX.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, en.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                R = i.useCallback(() => {
                    r(), (0, eX.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ie.Dr,
                                { id: "change-avatar", label: eV.intl.string(eV.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                ie.Dr,
                                { id: "change-decoration", label: eV.intl.string(eV.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      ie.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      ie.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        N &&
                        e.push(
                            y
                                ? (0, t.jsx)(
                                      ie.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      ie.Dr,
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
            }, [m, x, h, y, f, N, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, t.jsx)(em.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(ia.my, ia.vk, is.kL, { [is.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(io, { ...r, imageClassName: a()(ia.Lw, is.HU) }),
                  (0, t.jsx)(lJ.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lJ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(id, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: is.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: il.R,
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
var ic = n(976726);
function ig(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(t4.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.FzU73A),
        children: (0, t.jsx)(ie.rX, { children: n }),
    });
}
function im(e) {
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
                g = (0, lH.sk)("UserProfileModalV2EditableBanner"),
                f = eK.Ay.canUsePremiumProfileCustomization(l),
                m = null == n,
                p = m || f,
                x = g && (m || f),
                h = null != n,
                {
                    pendingBanner: v,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? void 0)),
                j = (0, s.bG)([B.A], () =>
                    null != n ? B.A.getGuildMemberProfile(l.id, n)?.banner : B.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner != null),
                N = (0, s.bG)([B.A], () => B.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([B.A], () => B.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, en.Ac)(v, j),
                k = h && C,
                R = h && N,
                S = h && E,
                T = void 0 === A ? null != d : null != A,
                D = void 0 === b ? null != u : null != b,
                O = (0, en.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                L = (0, y.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                M = i.useCallback(() => {
                    r(),
                        (0, l7.XD)({
                            uploadType: l9.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                G = i.useCallback(() => {
                    r(),
                        (0, np.W)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                _ = i.useCallback(() => {
                    r(), (0, l7.rM)(null, j, (e) => (0, eX.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, eX.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nC.w)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, L]),
                F = i.useCallback(() => {
                    r(), (0, eX.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                ie.Dr,
                                { id: "change-banner", label: eV.intl.string(eV.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                ie.Dr,
                                { id: "change-effect", label: eV.intl.string(eV.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ie.Dr,
                                { id: "change-frame", label: eV.intl.string(eV.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      ie.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.jHlJNS),
                                          action: _,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      ie.Dr,
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
                                      ie.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      ie.Dr,
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
                                      ie.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.A0pzWn),
                                          action: F,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      ie.Dr,
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
              className: a()(ic.kL, { [ic.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ex.A, { ...e, className: ic.Pr }),
                  (0, t.jsx)(lJ.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lJ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(ig, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: ic.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: il.R,
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
var ip = n(777480),
    ix = n(107563),
    ih = n(570287);
n(938796);
var iv = n(913453),
    iA = n(667049),
    ib = n(837531),
    ij = n(186272),
    iI = n(645625),
    iC = n(337796);
let iN = (e) => e * (2 - e),
    iy = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iE = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iP(e) {
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
        : (0, t.jsx)("div", { className: iI.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function ik(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(C.A, { skuId: r.skuId, isHovering: i });
}
function iR(e) {
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
            avatarDecorationOverride: h,
            avatarOverride: v,
            bannerOverride: b,
            accentColorOverride: j,
            profileEffectOverride: I,
            profileFrame: C,
            allowEditing: N = !1,
            isLoading: y = !1,
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
    let B = null != w ? iy[w] : void 0,
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
        ea = N ? im : ex.A,
        eo = N ? iu : em.A;
    return (0, t.jsxs)("main", {
        className: a()(iI.profile, null != w && iI[w]),
        ref: k,
        "aria-busy": y,
        children: [
            (0, t.jsxs)("div", {
                className: iI.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iI.profileHeaderBannerContainer,
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
                        avatarDecorationOverride: h,
                        avatarOverride: v,
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
                className: iI.profileBody,
                children: [
                    (0, t.jsx)(t5, {
                        user: l,
                        displayProfile: g,
                        nickname: f,
                        trailing: (0, t.jsx)(ep.A, { displayProfile: g, themeType: es.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: N,
                    }),
                    z === e8.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(ey.A.Overlay, {
                            className: iI.profileOverlay,
                            children: (0, t.jsx)(eA.A, {
                                user: l,
                                applicationId: H,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: iI.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            ey.A.Overlay,
                            {
                                className: iI.profileOverlay,
                                children: (0, t.jsx)(eA.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: iI.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(ey.A.Overlay, {
                            className: iI.profileOverlay,
                            children: (0, t.jsx)(tp.A, {
                                heading: eV.intl.string(eV.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iI.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eN.A, { user: l, className: iI.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(ey.A.Overlay, {
                            className: iI.profileOverlay,
                            children: (0, t.jsx)(eC.A, { username: f }),
                        }),
                    (0, t.jsx)("div", {
                        className: iI.profileButtons,
                        children: (0, t.jsx)(lg, {
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
                    P && (0, t.jsx)(eh.A, { isPremiumUser: (0, V.ki)(n), onInteraction: x }),
                    !W && (0, t.jsx)(e4, { displayProfile: g, isEditable: N }),
                    Q.length > 0 &&
                        (0, t.jsx)(tp.A, {
                            heading: eV.intl.string(eV.t["Uv/eTx"]),
                            children: (0, t.jsx)(ev.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(tp.A, {
                        heading: eV.intl.string(eV.t.a6XYD9),
                        children: (0, t.jsx)(ej.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: tx.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eP.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: iI.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !W &&
                        (N || ei) &&
                        (0, t.jsx)(tp.A, {
                            heading: eV.intl.string(eV.t["3fe7U5"]),
                            scrollTargetId: tx.bk.CONNECTIONS,
                            children: (0, t.jsx)(lD, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: N,
                                className: iI.profileAppConnections,
                            }),
                        }),
                    !W &&
                        er &&
                        (0, t.jsx)(tp.A, {
                            heading: eV.intl.string(eV.t.PHjkRE),
                            scrollTargetId: tx.bk.APPS,
                            children: (0, t.jsx)(eF, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: iI.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tv, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(ik, { displayProfile: g, profileEffectOverride: I, isHovering: L }),
            null != C && (0, t.jsx)(E.A, { frame: C, filterLayer: iE }),
        ],
    });
}
function iS(e) {
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
function iT(e) {
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
            pendingThemeColors: eh,
            avatarDecorationOverride: ev,
            avatarOverride: eA,
            bannerOverride: ej,
            accentColorOverride: eC,
            profileEffectOverride: eN,
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
                    config: { duration: 300, easing: iN },
                    onRest: () => t(!1),
                }),
                a = (0, v.A)("(min-width: 929px) and (min-height: 550px)"),
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
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iv.A)(i),
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
                c = (0, iA.A)(i.id),
                g = (0, ih.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = B.A.getFirstWishlistId(i.id),
                x = null != p,
                h = x ? B.A.getWishlistSettings(i.id, p) : null,
                v = (x ? ix.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (m || A) && f.push({ text: eV.intl.string(eV.t.laViwx), section: tx.RP.WIDGETS }),
                f.push({ text: eV.intl.string(eV.t.chq59f), section: tx.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = M.A.isFriend(i.id),
                I = h?.visibility === ip.a.PUBLIC;
            return (
                (m || (!m && v && I && g && (!b || (b && j)))) &&
                    f.push({ text: eV.intl.string(eV.t["7lZ31J"]), section: tx.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, ib.A)(a), section: tx.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, ij.A)(d), section: tx.RP.MUTUAL_GUILDS })),
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
        eq = (0, y.A)(eX, "UserProfileModalV2"),
        { profileFrameStyle: eY, profileFrameClassName: eZ } = (0, P.A)(eX);
    (0, N.A)({ skuId: eK?.profileFrame?.skuId, openedAt: D, context: eW, analyticsLocations: eH });
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
                        className: a()(iC.zr, { [iC.QF]: eK?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eJ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tS, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iI.layoutContainer, eZ, {
                                        [iI.editingPanelEnabled]: ec,
                                        [iI.editingPanelExpanded]: ec && eP,
                                        [iI.isAnimating]: ek,
                                    }),
                                    style: eY,
                                    children: [
                                        (0, t.jsxs)(iS, {
                                            user: l,
                                            displayProfile: eK,
                                            pendingThemeColors: eh,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iC.Oo,
                                                    children: [
                                                        (0, t.jsx)(lf.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: eJ, children: e0 }),
                                                        }),
                                                        eM &&
                                                            (0, t.jsx)(n4, {
                                                                buttonRef: eD,
                                                                onClick: eS,
                                                                className: iI.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ew &&
                                                    (0, t.jsx)("div", {
                                                        className: iI.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(n6, {
                                                            innerRef: eO,
                                                            onClick: eS,
                                                            className: iI.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                ec &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(ta, {
                                                                  className: a()(iI.editingPanel, {
                                                                      [iI.isExpanded]: eP,
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
                                                (0, t.jsxs)(ey.A, {
                                                    className: a()(H, iC.A7, iI.profileContentOuter),
                                                    innerClassName: iI.profileContentInner,
                                                    user: l,
                                                    displayProfile: eK,
                                                    themeType: es.d.MODAL_V2,
                                                    pendingThemeColors: eh,
                                                    isPrivate: eK?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iP, { displayProfile: eK, pendingBanner: ej }),
                                                        eK?.private === !0 && (0, t.jsx)(eI.A, {}),
                                                        !ep && (0, t.jsx)(tG, { className: iI.noticeContainer }),
                                                        eU &&
                                                            (0, t.jsx)("div", {
                                                                className: iI.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tI, {
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
                                                            className: iI.profileCardToastContainer,
                                                            children: (0, t.jsx)(eb.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tP, {
                                                            showScrim: eF,
                                                            showLoadingSpinner: q,
                                                            className: iI.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(iR, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: K,
                                                                    channelId: u,
                                                                    displayProfile: eK,
                                                                    nickname: e$,
                                                                    originGuildId: o,
                                                                    hasEntered: S === h.ip.ENTERED,
                                                                    customStatusPrompt: T,
                                                                    onClose: O,
                                                                    avatarDecorationOverride: ev,
                                                                    avatarOverride: eA,
                                                                    bannerOverride: ej,
                                                                    accentColorOverride: eC,
                                                                    profileEffectOverride: eN,
                                                                    profileFrame: eq,
                                                                    allowEditing: ex,
                                                                    isLoading: q,
                                                                }),
                                                                (0, t.jsx)(tT.A, {
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
                            (0, t.jsx)(ts.A, { userId: l.id, guildId: K, className: iI.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
