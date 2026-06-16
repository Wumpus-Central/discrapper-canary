n.d(l, { A: () => iV });
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
    T = n(922590),
    D = n(821269),
    O = n(93246),
    L = n(561794),
    M = n(71393),
    w = n(994500),
    _ = n(351906),
    G = n(562153),
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
    em = n(679492),
    ef = n(718019),
    ep = n(803362),
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
    eM = n(773669),
    ew = n(889227),
    e_ = n(967198),
    eG = n(488995),
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
                        ? (0, t.jsx)(eT.A, { user: new ew.A(l.application.bot), size: o._3.SIZE_16 })
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
                                    tab: eG.GlobalDiscoveryTab.APPS,
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
        o = (0, s.bG)([eM.default], () => eM.default.locale),
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
        c = (0, s.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
        g = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(null),
        p = i.useRef(!1),
        x = i.useRef(!0),
        v = i.useCallback(() => {
            (x.current = !1), d(l), a("editing");
        }, [l]),
        h = i.useRef(o);
    i.useLayoutEffect(() => {
        h.current = o;
    });
    let A = i.useCallback(() => {
            x.current || ((x.current = !0), n(h.current), a("done"));
        }, [n]),
        b = i.useCallback(() => {
            x.current || ((x.current = !0), a("done"));
        }, []);
    i.useEffect(() => {
        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
    }, [r]),
        i.useEffect(() => {
            u &&
                (m.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                f.current?.focus({ preventScroll: !0 }));
        }, [u, c]);
    let j = i.useCallback(
            (e) => {
                !u || (null != m.current && (0, eq.vq)(e.relatedTarget) && m.current.contains(e.relatedTarget)) || A();
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
        y = i.useCallback(() => {
            (p.current = !0), b();
        }, [b]),
        N = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), y())
                    : (e.preventDefault(), C());
            },
            [C, y],
        );
    return {
        isEditing: u,
        committedValue: l,
        editedValue: o,
        setEditedValue: d,
        editButtonRef: g,
        wrapperRef: m,
        inputRef: f,
        handleStartEditing: v,
        handleCommit: A,
        handleCancel: b,
        handleInputCommit: C,
        handleInputCancel: y,
        onInputKeyDown: N,
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
            previewErrorMessage: m,
            previewWarningMessage: f,
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
        N = null != f && !y,
        E = y ? "error" : N ? "warning" : null,
        P = y ? m : f,
        k = null != E && null != P,
        R = [];
    C && R.push(j), k && "compact" !== c && R.push(I);
    let S = R.length > 0 ? R.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(eJ.LL, { [eJ.JD]: y, [eJ.xe]: N, [eJ.r9]: A }),
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
        onBlur: v,
        onKeyDown: h,
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
            preview: m,
            placeholder: f,
            editButtonAriaLabel: p,
            label: x,
            maxLength: v,
            rows: h,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        C =
            (null != v && (l ? i : n).length > v
                ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: v })
                : void 0) ?? b;
    return (0, t.jsx)(e2, {
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
        previewErrorMessage: C,
        previewWarningMessage: j,
        input: (0, t.jsx)(e3.f, {
            editorRef: c,
            label: x,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: v,
            error: C,
            helperText: j,
            placeholder: f,
            rows: h,
            emojiPickerIntention: A,
        }),
    });
}
let e8 = [
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
var e9 = n(652215),
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
        m = eK.Ay.canUsePremiumProfileCustomization(u),
        {
            value: f,
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
        v = (function (e) {
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
        })({ value: f, onCommit: x }),
        h = !(0, ez.uJ)(p),
        A = (0, s.bG)([ea.A], () => ea.A.getErrors(g)),
        b = (0, eW.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e8.length)), e8[e];
        }, []),
        y = c ? eV.intl.string(eV.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e7, {
              ...v,
              preview: h ? (0, t.jsx)(eH.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eV.intl.string(eV.t.lO3n7a),
              label: eV.intl.string(eV.t["YWo+Zd"]),
              emojiPickerIntention: e5.EmojiIntention.PROFILE,
              maxLength: e9.NA2,
              error: j,
              warning: I,
          })
        : h
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
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eV.intl.string(eV.t.ZzAR2Y) }) }),
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
    la = n(564064),
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
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lc.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === e9.eA$.BLOCKED
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
            : o === e9.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e9.eA$.FRIEND || o === e9.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lu.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e9.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lu.ES, {
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
var lm = n(463156),
    lf = n(349288),
    lp = n(509434),
    lx = n(307301),
    lv = n(228366),
    lh = n(95561),
    lA = n(874490),
    lb = n(370480),
    lj = n(968309),
    lI = n(174459),
    lC = n(486020),
    ly = n(123917),
    lN = n(783419);
let lE = "User Profile Modal V2";
function lP(e) {
    let l = X.A.get(e);
    (0, lj.A)({ platformType: l.type, location: lE }),
        lI.default.track(e9.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lE,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lk() {
    lv.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lP, stackingBehavior: "stack" });
}
function lR(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, lb.An)(r[lN.pK.CREATED_AT], n),
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
                : (0, t.jsx)(lf.Anchor, {
                      href: e,
                      className: eU.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eV.intl.string(eV.t.q5jLJB)}`
                              : `${l.name}, ${eV.intl.string(eV.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lh.zV)(e9.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, ly.h)({ href: e, trusted: s?.type !== e9.fg2.DOMAIN }, n);
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
            l.type === e9.fg2.REDDIT
                ? (0, eD.xE)(r)
                : l.type === e9.fg2.STEAM
                  ? (0, eD.dy)(r)
                  : l.type === e9.fg2.BLUESKY || l.type === e9.fg2.MASTODON || l.type === e9.fg2.TWITTER
                    ? (0, eD.ED)(r)
                    : l.type === e9.fg2.PAYPAL
                      ? (0, eD.gZ)(r)
                      : l.type === e9.fg2.EBAY
                        ? (0, eD.ub)(r)
                        : l.type === e9.fg2.TIKTOK
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
        d = (0, s.bG)([eM.default], () => eM.default.locale);
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
    lM = n(408278),
    lw = n(890377),
    l_ = n(789645),
    lG = n(534514),
    lV = n(821609),
    lU = n(403581),
    lB = n(194261),
    lF = n(689175),
    lz = n(517461),
    lH = n(13875),
    lW = n(783420),
    lK = n(252732),
    lX = n(976860),
    lq = n(975732),
    lY = n(487233),
    lZ = n(120386),
    l$ = n(317097),
    lJ = n(602853),
    lQ = n(922016),
    l0 = n(508274),
    l1 = n(654107),
    l2 = n(930349);
function l3(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lJ.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l1.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ea.A, B.A], () => ({
            pendingAccentColor: ea.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: B.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l$.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eX.p)({ accentColor: e }), []);
    return (0, t.jsx)(lQ.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l0.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l2.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eV.intl.string(eV.t["/X3fkf"]),
                accessibleValue: (0, l$.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l$.Hl)(c) } }),
            }),
    });
}
var l7 = n(450373),
    l8 = n(339984),
    l9 = n(111242);
function l5(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l9.o, style: { backgroundColor: l } });
}
function l6(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l9._ });
}
function l4(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lJ.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l$.LX)(r),
        { hex: s } = (0, l7.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l6, { src: o }) : (0, t.jsx)(l5, { backgroundColor: s });
}
function ne(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, z.Ay)(n, i),
        c = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner),
        m = (0, s.bG)([B.A], () =>
            null != i ? B.A.getGuildMemberProfile(n, i)?.banner : B.A.getUserProfile(n)?.banner,
        ),
        f = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = f && d && !p ? void 0 : c,
        v = (0, en.Ac)(c, m),
        h = d && null != g,
        A = v
            ? {
                  onClick: () => (0, lK.rM)(null, m, (e) => (0, eX.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eV.intl.string(h ? eV.t.jHlJNS : eV.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l2.V, {
        affordance: A,
        variant: "square",
        onClick: () =>
            (0, lK.XD)({
                uploadType: l8.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eV.intl.string(eV.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == m)
                ? eV.intl.string(eV.t["3Xph0/"])
                : l
                  ? eV.intl.string(eV.t.keN7ib)
                  : eV.intl.string(eV.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(l4, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var nl = n(913563),
    nn = n(383197),
    nt = n(922301),
    ni = n(660184),
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
    let { user: l, guildId: n, disabled: r, errorMessageId: a } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([ei.Ay], () => (null != n ? (ei.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        c = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null),
        g = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName),
        m = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, en.B0)(l, n ?? void 0),
        v = d ? p : f,
        h = void 0 !== x,
        A = null === x,
        b = d && null != f,
        j = (0, en.lw)({ pendingValue: x, userValue: f, guildValue: p, guildId: n ?? void 0 }),
        C = (e) => (null == e || "" === e ? void 0 : e),
        y = void 0 !== g ? g : c,
        N = d ? (C(void 0 !== m ? m : u) ?? C(y) ?? l.username) : (C(y) ?? l.username),
        E = h ? null != x : null != v,
        P =
            null != j && E
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(b ? eV.t.en3ogK : eV.t["Wqmi/h"]),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, nr.L)({ analyticsLocations: o, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [o, n]);
    return (0, t.jsx)(l2.V, {
        affordance: (!A && (h || null != v)) || b ? P : "add",
        variant: "bar",
        onClick: k,
        accessibleLabel: eV.intl.string(eV.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eV.intl.string(eV.t["3Xph0/"]);
            let l = eV.intl.string((0, nl.A)(e.fontId)),
                n = eV.intl.string(nn.J[e.effectId] ?? na.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eV.intl.formatToPlainString(eV.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(j),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nd, { stylesPreview: j, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var nc = n(473219),
    ng = n(366010),
    nm = n(736653),
    nf = n(674658),
    np = n(617061),
    nx = n(203632),
    nv = n(536572);
let nh = new Set(),
    nA = 0;
var nb = n(466681);
let nj =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nI =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nC(e) {
    let { effect: l, shouldAnimate: n } = e,
        r = (0, nm.Ay)(),
        a = (0, ng.M)(r) ? nj : nI;
    return (
        i.useEffect(() => {
            n && ((nA += 1), nh.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nb.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: a, alt: "", className: nb.QQ }),
                l?.skuId != null &&
                    (0, t.jsx)(C.A, {
                        skuId: l.skuId,
                        autoPlay: !1,
                        resetOnHover: !0,
                        restartMethod: nx.HL.FromStart,
                        isHovering: n,
                        useOpacityOnHover: !1,
                        useThumbnail: !0,
                        delayIntro: !0,
                    }),
            ],
        })
    );
}
function ny(e) {
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
        { product: h } = (0, nf.q)(v?.skuId),
        A = f ? null != m : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(x ? eV.t["SQy/Po"] : eV.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, np.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l2.V, {
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
        })({ profileEffectPreview: v, productName: (0, nv.VG)(h), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(nC, { effect: v, shouldAnimate: e }),
    });
}
var nN = n(515727),
    nE = n(84391);
let nP = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nk(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = (0, nm.Ay)(),
        u = (0, ng.M)(d) ? nj : nI,
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
        { product: j } = (0, nf.q)(A?.skuId),
        { profileFrameStyle: C, profileFrameClassName: y } = (0, P.A)(b?.skuId),
        k = x ? null != p : null != f,
        R =
            null != A && k
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(h ? eV.t.j6hZyM : eV.t.nQBruk),
                  }
                : void 0,
        S = i.useCallback(() => {
            (0, nN.w)({ analyticsLocations: o, guild: g ?? void 0, stackingBehavior: "stack" });
        }, [o, g]);
    return (0, t.jsx)(l2.V, {
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
        })({ profileFramePreview: A, productName: (0, nv.VG)(j), hasPendingSelection: null != p }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            (0, t.jsxs)(t.Fragment, {
                children: [
                    null != b &&
                        (0, t.jsx)("div", {
                            className: a()(nE.hm, y),
                            style: C,
                            children: (0, t.jsx)(E.A, { frame: b, filterLayer: nP }),
                        }),
                    (0, t.jsx)("div", {
                        className: a()(nE.ti, { [nE.yT]: null == b }),
                        children: (0, t.jsx)("img", { src: u, alt: "", className: nE.QQ, draggable: !1 }),
                    }),
                ],
            }),
    });
}
var nR = n(684732),
    nS = n(498596),
    nT = n(298387);
function nD(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l$.Hl)(l),
        m = (0, l$.bJ)(l, 0xffffff) < nS.Tr.NonText;
    return (0, t.jsx)(lQ.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l0.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eR.D, {
                ...n,
                innerRef: c,
                className: nT.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nT.Hy, { [nT.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nO(e) {
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
        c = (0, l$.Hl)(l),
        g = (0, l$.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = eV.intl.formatToPlainString(eV.t.FquTfm, { colorLabel: c }),
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
    return (0, t.jsx)(l2.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nT.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nD, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nD, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nL(e) {
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
        { primaryColor: m, secondaryColor: f } = (0, H.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, lJ.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, l1.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eX.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nR.l)(d, o)
                ? {
                      onClick: () => (0, eX.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eV.intl.string(eV.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(nO, {
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([m, e]);
              },
              suggestedColors: h,
              disabled: r,
              deleteButton: b,
          });
}
var nM = n(315629),
    nw = n(788868),
    n_ = n(235684);
function nG() {
    let e = i.useCallback(() => {
            (0, lX.pX)(e9.BVt.NITRO_HOME), (0, lq.closeUserProfileModal)();
        }, []),
        l = (0, ls.A)(e);
    return (0, t.jsx)(lW.A, {
        subscriptionTier: nw.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)(nM.h, {
                color: "nitro-pink",
                className: n_.U,
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
var nV = n(55619),
    nU = n(942308);
function nB() {
    return (0, t.jsxs)("div", {
        className: nU.k,
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
                onClick: () => nV.A.setEnabled(!1),
            }),
        ],
    });
}
var nF = n(847374),
    nz = n(111159),
    nH = n(548118),
    nW = n(711014),
    nK = n(540637),
    nX = n(801461),
    nq = n(44482),
    nY = n(844222),
    nZ = n(561392),
    n$ = n(716263),
    nJ = n(15626),
    nQ = n(930856);
function n0(e) {
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
            let { reducedMotion: e } = i.useContext(nY.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nZ.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, n$.DL)(o, {
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
        y = i.useContext(nJ._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, nX.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        L = i.useRef(!1),
        M = i.useMemo(() => l.filter((e) => (0, nX.fI)(e.value, [n])), [n, l]),
        w = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        _ = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
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
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: B, handleKeyDown: F } = (0, nK.l)(!0, l),
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
                            G();
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
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        F(e);
                }
            },
            [u, x, l, S, U, G, r, v, F],
        ),
        W = Math.max(
            l.findIndex((e) => e.id === M[M.length - 1]?.id),
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
        onClick: w,
        onMouseDown: _,
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
            null != s && (0, t.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: X }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(nQ.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nK.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: M,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(nq.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var n1 = n(138325);
let n2 = "MAIN_PROFILE";
function n3(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nH.Ay, { className: n1.$f, guild: l, size: nH.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function n7(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: n1.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: n1.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: n1.qL,
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
function n8(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eR.D, {
        innerRef: r,
        className: a()(n1.L5, { [n1.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eS.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: n1.v9,
                children: n,
            }),
            (0, t.jsx)(nF.a, {
                className: n1.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function n9(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nW.Ay], () => nW.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([e_.A], () => {
            let e = e_.A.getGuildId();
            return null == e || ea._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ei.Ay, nW.Ay], () => {
            let e = {};
            for (let l of nW.Ay.getFlattenedGuildIds()) {
                let n = ei.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: n2,
                    label: eV.intl.string(eV.t["2p07FR"]),
                    value: n2,
                    leading: (0, t.jsx)(nz.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(n3, { guild: n }),
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
                          leading: (0, t.jsx)(n3, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? n2,
        p = m.find((e) => e.value === f) ?? m[0],
        v = i.useCallback(
            (e) => {
                let n = e === n2 ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(n0, {
        className: n1.kL,
        label: eV.intl.string(eV.t.rki38K),
        listboxClassName: n1.yt,
        options: m,
        value: f,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(n7, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(n8, { leading: p.value === n2 ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var n5 = n(809467);
let n6 = "profile-modal-editing-panel",
    n4 = "profile-modal-editing-panel-heading",
    te = "profile-editing-nameplate-error",
    tl = "profile-editing-avatar-error",
    tn = "profile-editing-avatar-decoration-error",
    tt = "profile-editing-banner-error",
    ti = "profile-editing-display-name-style-error";
function tr(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eZ.m, {
        text: eV.intl.string(eV.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: i,
            "aria-label": eV.intl.string(eV.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": n6,
            className: a()(n5.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lL.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function ta(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(eZ.m, {
            text: eV.intl.string(eV.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lM.K, {
                buttonRef: i,
                "aria-label": eV.intl.string(eV.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": n6,
                icon: lL.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function ts(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eZ.m, {
        text: eV.intl.string(eV.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: n,
            className: n5.cS,
            "aria-label": eV.intl.string(eV.t["l/A351"]),
            onClick: l,
            "aria-controls": n6,
            "aria-expanded": !0,
            children: (0, t.jsx)(lw.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function to() {
    let [e, l] = (0, lz.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: n5.X6,
              children: [
                  (0, t.jsx)(eS.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eV.intl.string(eV.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eR.D, {
                      "aria-label": eV.intl.string(eV.t.rSe9ra),
                      className: n5.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(l_.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function td() {
    let e = i.useCallback(() => {
            (0, lX.pX)(e9.BVt.NITRO_HOME), (0, lq.closeUserProfileModal)();
        }, []),
        l = (0, ls.A)(e);
    return (0, t.jsx)(lW.A, {
        subscriptionTier: nw.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)("div", {
                className: n5.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: n5.tm,
                        children: [
                            (0, t.jsx)(lG.D, {
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
                        className: n5.D0,
                        children: (0, t.jsx)("div", { className: n5.ZN, children: (0, t.jsx)(lB.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tu() {
    return (0, t.jsx)(eS.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: n5.BJ,
        "aria-hidden": !0,
        children: eV.intl.format(eV.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lU.t, { size: "xxs", color: "currentColor", className: n5.qp }),
        }),
    });
}
function tc(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: n5.Os,
        children: [
            (0, t.jsxs)("div", {
                className: n5.AM,
                children: [
                    (0, t.jsx)(lG.D, {
                        className: n5.i_,
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
                                className: n5.l3,
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
function tg(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: n5.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eS.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function tm(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lO.animated.div, { className: n5.HT, style: e, children: (0, t.jsx)(nG, {}) }) : null,
    );
}
function tf(e) {
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
        A = null != p && eK.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lH.sk)("UserProfileModalV2EditingPanel"),
        C = (0, s.bG)([ea.A], () => ea.A.getErrors(l)),
        y = C.nameplate?.[0] ?? C.nameplate_sku_id?.[0],
        N = C.avatar?.[0],
        E = C.avatar_decoration_sku_id?.[0],
        P = C.banner?.[0],
        k = C.display_name_font_id?.[0] ?? C.display_name_effect_id?.[0] ?? C.display_name_colors?.[0],
        R = (0, ls.A)(r),
        S = i.useRef(null),
        {
            isUpsellDismissed: T,
            handleScrollDismiss: D,
            shouldAddUpsellSafePadding: O,
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
        })({ scrollerRef: S, canShowUpsell: b });
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: n6,
              "aria-labelledby": n4,
              className: a()(n5.nd, { [n5.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: n5.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: n4, children: eV.intl.string(eV.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: n5.wx,
                          children: [
                              (0, t.jsx)(ts, { innerRef: g, onClick: u }),
                              (0, t.jsx)(n9, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: R,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nB, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(f.F, {
                                        children: (0, t.jsxs)(lF.zC, {
                                            ref: S,
                                            className: a()(n5.XG, { [n5.uH]: O }),
                                            onScroll: D,
                                            children: [
                                                h && (A ? (0, t.jsx)(to, {}) : (0, t.jsx)(td, {})),
                                                A && (0, t.jsx)(tu, {}),
                                                (0, t.jsxs)(tc, {
                                                    heading: eV.intl.string(eV.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nc.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != y ? te : void 0,
                                                        }),
                                                        (0, t.jsx)(tg, { id: te, message: y }),
                                                    ],
                                                }),
                                                (0, t.jsxs)(tc, {
                                                    heading: eV.intl.string(eV.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(lY.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != N ? tl : void 0,
                                                        }),
                                                        (0, t.jsx)(lZ.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != E ? tn : void 0,
                                                        }),
                                                        (0, t.jsx)(tg, { id: tl, message: (0, lK.d3)(N) }),
                                                        (0, t.jsx)(tg, { id: tn, message: E }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsxs)(tc, {
                                                        heading: eV.intl.string(eV.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: [
                                                            (0, t.jsx)(nu, {
                                                                user: p,
                                                                guildId: l,
                                                                disabled: v || j,
                                                                errorMessageId: null != k ? ti : void 0,
                                                            }),
                                                            (0, t.jsx)(tg, { id: ti, message: k }),
                                                        ],
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(tc, {
                                                          heading: eV.intl.string(eV.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nL, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(ne, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                                  errorMessageId: null != P ? tt : void 0,
                                                              }),
                                                              (0, t.jsx)(tg, { id: tt, message: (0, lK.d3)(P) }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(tc, {
                                                          heading: eV.intl.string(eV.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(l3, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(tc, {
                                                    heading: eV.intl.string(I ? eV.t["Vfbar/"] : eV.t.wR5wOo),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(ny, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(nk, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(tm, { isDismissed: T }),
                                ],
                            }),
                  ],
              }),
          });
}
var tp = n(982599),
    tx = n(347805),
    tv = n(629403),
    th = n(612630),
    tA = n(260598);
function tb(e) {
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
            onInputKeyDown: m,
            preview: f,
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
    return (0, t.jsx)(e2, {
        isEditing: l,
        preview: f,
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
        input: (0, t.jsx)(tA.f, {
            label: v,
            hideLabel: !0,
            inputRef: g,
            value: r,
            onChange: a,
            onFocus: E,
            onKeyDown: m,
            maxLength: h,
            error: N,
            placeholder: p,
            rows: A,
            disabled: b,
            autosize: !0,
        }),
    });
}
var tj = n(673451);
function tI(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        { loading: d, note: u } = (0, th.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await tv.A.updateNote(l, e);
                    } catch {
                        f(eV.intl.string(eV.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        v = d && null == p,
        h = eQ({ value: p ?? "", onCommit: x, disabled: v }),
        { handleStartEditing: A } = h,
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
            ? (0, t.jsx)(eS.E, { variant: "text-sm/normal", color: "text-default", className: tj.t, children: p })
            : null;
    return (0, t.jsx)(tb, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eV.intl.string(eV.t.PbMNh2),
        label: eV.intl.string(eV.t.PbMNh2),
        placeholder: v ? eV.intl.string(eV.t["WLKx/9"]) : eV.intl.string(eV.t.VBhOe2),
        maxLength: e9.T7x,
        rows: 3,
        disabled: v,
        error: m,
    });
}
var tC = n(83013),
    ty = n(518477),
    tN = n(77085);
function tE(e) {
    let { userId: l } = e,
        n = (0, eg.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, F.X)("UserProfileModalV2NotesSection"),
        a = r ? tI : tx.A;
    return (0, t.jsx)(tC.A, {
        heading: eV.intl.string(eV.t["mQKv+v"]),
        scrollTargetId: ty.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tN.N : tN.w,
            autoFocus: n === ty.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tP = n(123292),
    tk = n(921701),
    tR = n(861173);
function tS(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tk.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tR.oR, tk.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tk.Kk, children: l }),
                    (0, t.jsx)(eS.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tk.hP,
                            children: (0, t.jsx)(tP.Q, {
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
var tT = n(765178),
    tD = n(346055),
    tO = n(289873),
    tL = n(984180);
function tM(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tT.O.announce(eV.intl.string(eV.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tD.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tL.f, l && tL.z),
                    children: n && (0, t.jsx)(tO.y, { type: tO.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tw = n(568602),
    t_ = n(625494);
function tG(e) {
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
                t_._.subscribe(e9.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    t_._.unsubscribe(e9.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tw.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tV = n(515054),
    tU = n(933832),
    tB = n(972213),
    tF = n(97483),
    tz = n(606758);
let tH = {
        [ty.jM.WIDGET_ADDED]: {
            message: eV.intl.string(eV.t.fFP1Uy),
            icon: (0, t.jsx)(tU.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [ty.jM.WIDGET_REMOVED]: {
            message: eV.intl.string(eV.t.zzsK7h),
            icon: (0, t.jsx)(tU.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [ty.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eV.intl.string(eV.t["84MExs"]),
            icon: (0, t.jsx)(tB.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tF.Ck.FAILURE,
        },
        [ty.jM.SOMETHING_WENT_WRONG]: {
            message: eV.intl.string(eV.t.F8FvUy),
            icon: (0, t.jsx)(tB.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tF.Ck.FAILURE,
        },
    },
    tW = (e) => {
        let { className: l } = e,
            n = (0, tz.fu)(),
            r = (0, s.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(tH[n]), tT.O.announce(tH[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, tz.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, tz.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lO.animated.div, { className: l, style: e, children: (0, t.jsx)(tS, { ...u }) }),
                ),
            })
        );
    };
var tK = n(297413),
    tX = n(878555),
    tq = n(576705),
    tY = n(292666);
function tZ(e) {
    let { isEditing: l, inputRef: n, ...t } = eQ(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function t$(e) {
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
    return (0, t.jsx)(tY.k, {
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
function tJ(e) {
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
            size: v = "default",
            maxLength: h,
            error: A,
            warning: b,
            trailing: j,
            className: I,
            disabled: C = !1,
        } = e,
        y =
            (null != h && (l ? i : n).length > h
                ? eV.intl.formatToPlainString(eV.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        N = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e2, {
        ...N,
        isEditing: l,
        preview: m,
        placeholder: f,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        disabled: C,
        input: (0, t.jsx)(t$, {
            inputRef: c,
            label: x,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            placeholder: f,
            trailing: j,
            error: y,
            helperText: b,
        }),
        previewErrorMessage: y,
        previewWarningMessage: b,
    });
}
var tQ = n(35783);
let t0 = (e) => (null == e || "" === e ? void 0 : e);
function t1(e) {
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
        { user: p, displayProfile: v } = e,
        { analyticsLocations: h } = (0, I.Ay)(),
        A = v?.guildId != null,
        b = v?.guildId ?? void 0,
        j = eK.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: C, permissionsLoaded: y } = (0, s.cf)([tq.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: tq.A.can(e9.xBc.CHANGE_NICKNAME, e) || tq.A.can(e9.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: N,
            previewValue: E,
            onCommit: P,
        } = ((n = null != (l = v?.guildId ?? null)),
        (r = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ei.Ay], () => (null != l ? (ei.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = t0(c) ?? t0(r) ?? p.username),
        (f = t0(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, eX.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, eX.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        k = tZ({ value: N, onCommit: P, disabled: !C }),
        { isEditing: R, handleCommit: S } = k,
        T = (0, s.bG)([ea.A], () => ea.A.getErrors(b ?? null)),
        D = (0, eW.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        L = D?.nick?.[0],
        w = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        _ = eV.intl.string(A ? eV.t.mq6Cg9 : eV.t.XuZU7A),
        G = A ? eV.intl.string(eV.t.YcDKr8) : p.username,
        V = eV.intl.string(A ? eV.t["g7OSZ/"] : eV.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && S(),
                    (0, nr.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, S, h, b],
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
            A && !C && y
                ? (0, t.jsx)(eZ.m, {
                      text: eV.intl.string(eV.t.gzjxQi),
                      children: (0, t.jsx)(eR.D, {
                          tag: "span",
                          className: tQ.C,
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
                ? (0, t.jsx)(tX.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: tQ.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(tJ, {
        ...k,
        preview: H,
        placeholder: G,
        editButtonAriaLabel: V,
        label: _,
        maxLength: e9.zzC,
        trailing: C && j ? F : void 0,
        error: O,
        warning: L,
        disabled: !C,
    });
}
var t2 = n(469432);
function t3(e) {
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
                    (0, eX.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = tZ({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eV.intl.string(x ? eV.t.AXiE0i : eV.t["76Aqhl"]);
    return (0, t.jsx)(tJ, {
        ...f,
        size: "compact",
        className: a()(t2.k, p && t2.J),
        preview: v ? (0, t.jsx)(tX.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eV.intl.string(eV.t.h6VAO7),
        label: eV.intl.string(eV.t["rniRE+"]),
        placeholder: h,
        maxLength: e9.VE5,
    });
}
var t7 = n(145497),
    t8 = n(685073),
    t9 = n(318785),
    t5 = n(534400),
    t6 = n(743981),
    t4 = n(724637),
    ie = n(329296);
let il = "no-server-tag";
function it(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eR.D, {
        innerRef: l,
        className: a()(t4.L5, { [t4.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eS.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: t4.W3,
            tag: "span",
            children: [
                o
                    ? eV.intl.string(eV.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  t5.Z9,
                                  {
                                      src: (0, t8.gC)(n, r, t6.Sl.SIZE_14),
                                      size: t6.Sl.SIZE_14,
                                      className: t4.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, t8.gC)(n, r, t6.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nF.a, { size: "xs", color: "currentColor", className: t4.u4 }),
            ],
        }),
    });
}
function ii() {
    let e = (0, t9.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return (0, t8.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === il
                    ? (0, t.jsx)("div", {
                          className: ie.uN,
                          children: (0, t.jsx)(eS.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: t4.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nq.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: il, label: eV.intl.string(eV.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(t7.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(t5.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, eX.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(n0, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eV.intl.string(eV.t.Pdd1nd),
              listboxClassName: t4.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(it, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var ir = n(874644);
function ia(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tX.Ay, {
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
        : (0, t.jsx)(tK.A, {
              user: l,
              forceUsername: !0,
              className: ir.a1,
              usernameClass: ir.eb,
              discriminatorClass: ir.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(t1, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(ir.AK, ir.j6),
                children: [d, (0, t.jsx)(tX.Ce, {}), (0, t.jsx)(t3, { displayProfile: n }), (0, t.jsx)(ii, {}), r],
            }),
        ],
    });
}
var is = n(97808),
    io = n(980707),
    id = n(477782),
    iu = n(22231),
    ic = n(601255),
    ig = n(562819),
    im = n(19575),
    ip = n(106106),
    ix = n(338165);
let iv = im.Ay.getEnableHardwareAcceleration() ? is.Js : is.eu;
function ih(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(io.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.YAgq3W),
        children: (0, t.jsx)(id.rX, { children: n }),
    });
}
function iA(e) {
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
                p = eK.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                A = (0, en.a4)({ user: l }),
                b = (0, en.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, en.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, ic.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lK.XD)({
                            uploadType: l8.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, ig.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lK.rM)(null, g, (e) => (0, eX.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, en.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, eX.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                id.Dr,
                                { id: "change-avatar", label: eV.intl.string(eV.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                id.Dr,
                                { id: "change-decoration", label: eV.intl.string(eV.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      id.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      id.Dr,
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
                                      id.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      id.Dr,
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
            }, [f, x, v, N, m, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === m.length
        ? (0, t.jsx)(ef.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(ip.my, ip.vk, ix.kL, { [ix.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(iv, { ...r, imageClassName: a()(ip.Lw, ix.HU) }),
                  (0, t.jsx)(lQ.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lQ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(ih, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: ix.r9,
                              children: (0, t.jsx)(lM.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iu.R,
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
var ib = n(976726);
function ij(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(io.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.FzU73A),
        children: (0, t.jsx)(id.rX, { children: n }),
    });
}
function iI(e) {
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
                m = eK.Ay.canUsePremiumProfileCustomization(l),
                f = null == n,
                p = f || m,
                x = g && (f || m),
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
                w = i.useCallback(() => {
                    r(),
                        (0, lK.XD)({
                            uploadType: l8.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, np.W)({
                            analyticsLocations: o,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, lK.rM)(null, j, (e) => (0, eX.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, eX.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nN.w)({
                            analyticsLocations: o,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
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
                    m &&
                        e.push(
                            (0, t.jsx)(
                                id.Dr,
                                { id: "change-banner", label: eV.intl.string(eV.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                id.Dr,
                                { id: "change-effect", label: eV.intl.string(eV.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                id.Dr,
                                { id: "change-frame", label: eV.intl.string(eV.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      id.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      id.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        T &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      id.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      id.Dr,
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
                                      id.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.A0pzWn),
                                          action: F,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      id.Dr,
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
            }, [k, m, p, x, R, S, P, T, D, w, _, U, G, V, F]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(ex.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(ib.kL, { [ib.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ex.A, { ...e, className: ib.Pr }),
                  (0, t.jsx)(lQ.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lQ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(ij, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: ib.r9,
                              children: (0, t.jsx)(lM.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iu.R,
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
var iC = n(777480),
    iy = n(107563),
    iN = n(570287);
n(938796);
var iE = n(913453),
    iP = n(667049),
    ik = n(837531),
    iR = n(186272),
    iS = n(645625),
    iT = n(337796);
let iD = (e) => e * (2 - e),
    iO = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iL = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iM(e) {
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
        : (0, t.jsx)("div", { className: iS.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iw(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nh.add(e), () => nh.delete(e)),
            () => nA,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function i_(e) {
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
        [M, G] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? G("compact-xs") : l <= 380 ? G("compact-sm") : G(void 0);
        }, []);
    (0, A.g)(k, U, [], { fireOnMount: !0 });
    let B = null != M ? iO[M] : void 0,
        F = i.useMemo(() => p ?? (0, S.A)(), [p]),
        { relationshipType: z, originApplicationId: H } = (0, s.cf)([w.A], () => ({
            relationshipType: w.A.getRelationshipType(l.id),
            originApplicationId: w.A.getOriginApplicationId(l.id),
        })),
        W = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
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
        ea = y ? iI : ex.A,
        eo = y ? iA : ef.A;
    return (0, t.jsxs)("main", {
        className: a()(iS.profile, null != M && iS[M]),
        ref: k,
        "aria-busy": N,
        children: [
            (0, t.jsxs)("div", {
                className: iS.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iS.profileHeaderBannerContainer,
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
                        hasEntered: f,
                        prompt: P ? F : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: iS.profileBody,
                children: [
                    (0, t.jsx)(ia, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ep.A, { displayProfile: g, themeType: es.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: y,
                    }),
                    z === e9.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: iS.profileOverlay,
                            children: (0, t.jsx)(eA.A, {
                                user: l,
                                applicationId: H,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: iS.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eN.A.Overlay,
                            {
                                className: iS.profileOverlay,
                                children: (0, t.jsx)(eA.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: iS.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: iS.profileOverlay,
                            children: (0, t.jsx)(tC.A, {
                                heading: eV.intl.string(eV.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iS.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ey.A, { user: l, className: iS.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: iS.profileOverlay,
                            children: (0, t.jsx)(eC.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: iS.profileButtons,
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
                    P && (0, t.jsx)(ev.A, { isPremiumUser: (0, V.ki)(n), onInteraction: x }),
                    !W && (0, t.jsx)(e4, { displayProfile: g, isEditable: y }),
                    Q.length > 0 &&
                        (0, t.jsx)(tC.A, {
                            heading: eV.intl.string(eV.t["Uv/eTx"]),
                            children: (0, t.jsx)(eh.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(tC.A, {
                        heading: eV.intl.string(eV.t.a6XYD9),
                        children: (0, t.jsx)(ej.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: ty.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eP.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: iS.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !W &&
                        (y || ei) &&
                        (0, t.jsx)(tC.A, {
                            heading: eV.intl.string(eV.t["3fe7U5"]),
                            scrollTargetId: ty.bk.CONNECTIONS,
                            children: (0, t.jsx)(lD, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: y,
                                className: iS.profileAppConnections,
                            }),
                        }),
                    !W &&
                        er &&
                        (0, t.jsx)(tC.A, {
                            heading: eV.intl.string(eV.t.PHjkRE),
                            scrollTargetId: ty.bk.APPS,
                            children: (0, t.jsx)(eF, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: iS.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tE, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(iw, { displayProfile: g, profileEffectOverride: I, isHovering: L }),
            null != C && (0, t.jsx)(E.A, { frame: C, filterLayer: iL }),
        ],
    });
}
function iG(e) {
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
function iV(e) {
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
                m = (0, s.bG)([B.A], () => B.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
    let ee = (0, F.X)("UserProfileModalV2"),
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
                    m = null != n ? B.A.getGuildMemberProfile(l, n) : null;
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
                    config: { duration: 300, easing: iD },
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
        ew = ec && (!eP || ek),
        { defaultWishlistId: e_ } = (0, s.cf)([B.A], () => ({ defaultWishlistId: B.A.getFirstWishlistId(l.id) }));
    (0, L.fw)({ wishlistId: e_, userId: l.id });
    let eG = (0, em.fC)(),
        eU = ep && (!ec || !q),
        eB = ec && $,
        eF = X !== K || eB || null != eG.interactionType,
        ez = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iE.A)(i),
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
                c = (0, iP.A)(i.id),
                g = (0, iN.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = B.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? B.A.getWishlistSettings(i.id, p) : null,
                h = (x ? iy.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eV.intl.string(eV.t.laViwx), section: ty.RP.WIDGETS }),
                m.push({ text: eV.intl.string(eV.t.chq59f), section: ty.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = w.A.isFriend(i.id),
                I = v?.visibility === iC.a.PUBLIC;
            return (
                (f || (!f && h && I && g && (!b || (b && j)))) &&
                    m.push({ text: eV.intl.string(eV.t["7lZ31J"]), section: ty.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, ik.A)(a), section: ty.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, iR.A)(d), section: ty.RP.MUTUAL_GUILDS })),
                m
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
    let e$ = G.Ay.useName(eK?.guildId, u, l),
        eJ = (0, k.GV)(),
        eQ = (0, s.bG)([M.A], () => (null != K ? M.A.getGuild(K) : null)),
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
            children: (0, t.jsx)(em.Hl, {
                value: eG,
                children: (0, t.jsx)(eg.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iT.zr, { [iT.QF]: eK?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eJ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tG, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iS.layoutContainer, eZ, {
                                        [iS.editingPanelEnabled]: ec,
                                        [iS.editingPanelExpanded]: ec && eP,
                                        [iS.isAnimating]: ek,
                                    }),
                                    style: eY,
                                    children: [
                                        (0, t.jsxs)(iG, {
                                            user: l,
                                            displayProfile: eK,
                                            pendingThemeColors: ev,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iT.Oo,
                                                    children: [
                                                        (0, t.jsx)(lm.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eJ, children: e0 }),
                                                        }),
                                                        ew &&
                                                            (0, t.jsx)(ta, {
                                                                buttonRef: eD,
                                                                onClick: eS,
                                                                className: iS.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eM &&
                                                    (0, t.jsx)("div", {
                                                        className: iS.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tr, {
                                                            innerRef: eO,
                                                            onClick: eS,
                                                            className: iS.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ec &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tf, {
                                                                  className: a()(iS.editingPanel, {
                                                                      [iS.isExpanded]: eP,
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
                                                    className: a()(H, iT.A7, iS.profileContentOuter),
                                                    innerClassName: iS.profileContentInner,
                                                    user: l,
                                                    displayProfile: eK,
                                                    themeType: es.d.MODAL_V2,
                                                    pendingThemeColors: ev,
                                                    isPrivate: eK?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iM, { displayProfile: eK, pendingBanner: ej }),
                                                        eK?.private === !0 && (0, t.jsx)(eI.A, {}),
                                                        !ep && (0, t.jsx)(tW, { className: iS.noticeContainer }),
                                                        eU &&
                                                            (0, t.jsx)("div", {
                                                                className: iS.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tS, {
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
                                                            className: iS.profileCardToastContainer,
                                                            children: (0, t.jsx)(eb.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tM, {
                                                            showScrim: eF,
                                                            showLoadingSpinner: q,
                                                            className: iS.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(i_, {
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
                                                                (0, t.jsx)(tV.A, {
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
                            (0, t.jsx)(tp.A, { userId: l.id, guildId: K, className: iS.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
