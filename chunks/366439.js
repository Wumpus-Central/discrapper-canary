n.d(l, { A: () => iq });
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
    M = n(561794),
    w = n(71393),
    L = n(994500),
    _ = n(351906),
    G = n(562153),
    V = n(474090),
    U = n(183555),
    F = n(841595),
    B = n(591179),
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
    ep = n(795873),
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
    eM = n(310419),
    ew = n(773669),
    eL = n(889227),
    e_ = n(967198),
    eG = n(488995),
    eV = n(375708),
    eU = n(985176);
function eF(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eD.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eU.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eT.A, { user: new eL.A(l.application.bot), size: o._3.SIZE_16 })
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
                                        entrypoint: { name: eM.sW.APPLICATION_DIRECTORY_URL },
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
function eB(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([ew.default], () => ew.default.locale),
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
var e7 = n(786826);
function e3(e) {
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
        input: (0, t.jsx)(e7.f, {
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
var e5 = n(652215),
    e8 = n(307731);
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
            return (e = Math.floor(Math.random() * e9.length)), e9[e];
        }, []),
        y = c ? eV.intl.string(eV.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e3, {
              ...v,
              preview: h ? (0, t.jsx)(eH.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eV.intl.string(eV.t.lO3n7a),
              label: eV.intl.string(eV.t["YWo+Zd"]),
              emojiPickerIntention: e8.EmojiIntention.PROFILE,
              maxLength: e5.NA2,
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
        u = (0, B.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ll.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lc.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === e5.eA$.BLOCKED
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
            : o === e5.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(li.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e5.eA$.FRIEND || o === e5.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lt.e, { userId: l.id, onClose: le.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lu.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(li.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e5.eA$.NONE && x
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
        lI.default.track(e5.HAw.ACCOUNT_LINK_STEP, {
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
                          (0, lh.zV)(e5.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, ly.h)({ href: e, trusted: s?.type !== e5.fg2.DOMAIN }, n);
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
            l.type === e5.fg2.REDDIT
                ? (0, eD.xE)(r)
                : l.type === e5.fg2.STEAM
                  ? (0, eD.dy)(r)
                  : l.type === e5.fg2.BLUESKY || l.type === e5.fg2.MASTODON || l.type === e5.fg2.TWITTER
                    ? (0, eD.ED)(r)
                    : l.type === e5.fg2.PAYPAL
                      ? (0, eD.gZ)(r)
                      : l.type === e5.fg2.EBAY
                        ? (0, eD.ub)(r)
                        : l.type === e5.fg2.TIKTOK
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
    lM = n(193885),
    lw = n(408278),
    lL = n(890377),
    l_ = n(789645),
    lG = n(534514),
    lV = n(821609),
    lU = n(403581),
    lF = n(194261),
    lB = n(689175),
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
function l7(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lJ.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l1.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ea.A, F.A], () => ({
            pendingAccentColor: ea.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: F.A.getUserProfile(l.id)?.accentColor,
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
var l3 = n(450373),
    l9 = n(339984),
    l5 = n(111242);
function l8(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l5.o, style: { backgroundColor: l } });
}
function l6(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l5._ });
}
function l4(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lJ.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l$.LX)(r),
        { hex: s } = (0, l3.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l6, { src: o }) : (0, t.jsx)(l8, { backgroundColor: s });
}
function ne(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, z.Ay)(n, i),
        c = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner),
        m = (0, s.bG)([F.A], () =>
            null != i ? F.A.getGuildMemberProfile(n, i)?.banner : F.A.getUserProfile(n)?.banner,
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
                uploadType: l9.HL.BANNER,
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
var nc = n(374654),
    ng = n(366010),
    nm = n(736653),
    nf = n(674658),
    np = n(617061),
    nx = n(203632),
    nv = n(536572);
let nh = new Set(),
    nA = 0;
var nb = n(993408),
    nj = n(841702),
    nI = n(515718),
    nC = n(195292);
let ny = (e) => {
    "" !== e.thumbnailPreviewSrc && (0, nI.NN)(e.thumbnailPreviewSrc).catch(() => {});
};
var nN = n(466681),
    nE = n(970389);
let nP =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nk =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nR(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nm.Ay)(),
        u = (0, ng.M)(d) ? nP : nk,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nj.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nb.wo)(r, t), [r, t]),
                s = (0, nC.A)({ enabled: l, isInteracting: n, items: a, preload: ny });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nA += 1), nh.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nN.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nN.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nN.yY, { [nE.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nx.HL.FromStart,
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
function nS(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
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
        renderPreview: (e) =>
            (0, t.jsx)(nR, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nT = n(515727),
    nD = n(746002);
let nO = (e) => {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nD.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nD.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nI.NN)(n).catch(() => {});
        });
};
var nM = n(84391);
let nw = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nL(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nm.Ay)(),
        u = (0, ng.M)(d) ? nP : nk,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nj.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nb.MG)(r, t), [r, t]);
            return (0, nC.A)({ enabled: l, isInteracting: n, items: a, preload: nO });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, P.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nM.hm, x, { [nE.O]: m }),
                    style: p,
                    children: (0, t.jsx)(E.A, { frame: f, filterLayer: nw }),
                }),
            (0, t.jsx)("div", {
                className: a()(nM.ti, { [nM.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nM.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n_(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        u = (0, en.Xf)({ user: l }),
        c = (0, en.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, en.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, en.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: v } = (0, nf.q)(x?.skuId),
        h = m ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, eX.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eV.intl.string(p ? eV.t.j6hZyM : eV.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nT.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l2.V, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eV.intl.string(eV.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eV.intl.string(eV.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eV.intl.string(t ? eV.t.yFeGB5 : eV.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nv.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nL, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nG = n(684732),
    nV = n(498596),
    nU = n(298387);
function nF(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l$.Hl)(l),
        m = (0, l$.bJ)(l, 0xffffff) < nV.Tr.NonText;
    return (0, t.jsx)(lQ.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l0.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eR.D, {
                ...n,
                innerRef: c,
                className: nU.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nU.Hy, { [nU.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nB(e) {
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
            className: nU.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nF, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nF, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nz(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ea.A, F.A], () => {
            let e = ea.A.getPendingChanges(n ?? void 0),
                t = F.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (F.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
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
            null != n && (0, nG.l)(d, o)
                ? {
                      onClick: () => (0, eX.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eV.intl.string(eV.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(nB, {
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
var nH = n(315629),
    nW = n(788868),
    nK = n(235684);
function nX() {
    let e = i.useCallback(() => {
            (0, lX.pX)(e5.BVt.NITRO_HOME), (0, lq.closeUserProfileModal)();
        }, []),
        l = (0, ls.A)(e);
    return (0, t.jsx)(lW.A, {
        subscriptionTier: nW.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)(nH.h, {
                color: "nitro-pink",
                className: nK.U,
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
var nq = n(55619),
    nY = n(942308);
function nZ() {
    return (0, t.jsxs)("div", {
        className: nY.k,
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
                onClick: () => nq.A.setEnabled(!1),
            }),
        ],
    });
}
var n$ = n(847374),
    nJ = n(111159),
    nQ = n(548118),
    n0 = n(711014),
    n1 = n(540637),
    n2 = n(801461),
    n7 = n(44482),
    n3 = n(844222),
    n9 = n(561392),
    n5 = n(716263),
    n8 = n(15626),
    n6 = n(930856);
function n4(e) {
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
            let { reducedMotion: e } = i.useContext(n3.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, n9.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, n5.DL)(o, {
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
        y = i.useContext(n8._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, n2.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        M = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, n2.fI)(e.value, [n])), [n, l]),
        L = i.useCallback(() => {
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
                    if (M.current) {
                        M.current = !1;
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
        { activeIndex: F, handleKeyDown: B } = (0, n1.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (T(F), x || ((O.current = !0), v(!0)));
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
                        (M.current = !0), v(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, S, U, G, r, v, B],
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
        onClick: L,
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
                    className: a()(n6.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(n1.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(n7.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var te = n(138325);
let tl = "MAIN_PROFILE";
function tn(e) {
    let { guild: l } = e;
    return (0, t.jsx)(nQ.Ay, { className: te.$f, guild: l, size: nQ.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tt(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: te.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: te.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: te.qL,
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
function ti(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eR.D, {
        innerRef: r,
        className: a()(te.L5, { [te.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eS.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: te.v9,
                children: n,
            }),
            (0, t.jsx)(n$.a, {
                className: te.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tr(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([n0.Ay], () => n0.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([e_.A], () => {
            let e = e_.A.getGuildId();
            return null == e || ea._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ei.Ay, n0.Ay], () => {
            let e = {};
            for (let l of n0.Ay.getFlattenedGuildIds()) {
                let n = ei.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tl,
                    label: eV.intl.string(eV.t["2p07FR"]),
                    value: tl,
                    leading: (0, t.jsx)(nJ.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tn, { guild: n }),
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
                          leading: (0, t.jsx)(tn, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tl,
        p = m.find((e) => e.value === f) ?? m[0],
        v = i.useCallback(
            (e) => {
                let n = e === tl ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(n4, {
        className: te.kL,
        label: eV.intl.string(eV.t.rki38K),
        listboxClassName: te.yt,
        options: m,
        value: f,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tt, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(ti, { leading: p.value === tl ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var ta = n(809467);
let ts = "profile-modal-editing-panel",
    to = "profile-modal-editing-panel-heading",
    td = "profile-editing-nameplate-error",
    tu = "profile-editing-avatar-error",
    tc = "profile-editing-avatar-decoration-error",
    tg = "profile-editing-banner-error",
    tm = "profile-editing-display-name-style-error";
function tf(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eZ.m, {
        text: eV.intl.string(eV.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: i,
            "aria-label": eV.intl.string(eV.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": ts,
            className: a()(ta.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lM.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function tp(e) {
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
                "aria-controls": ts,
                icon: lM.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function tx(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eZ.m, {
        text: eV.intl.string(eV.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eR.D, {
            innerRef: n,
            className: ta.cS,
            "aria-label": eV.intl.string(eV.t["l/A351"]),
            onClick: l,
            "aria-controls": ts,
            "aria-expanded": !0,
            children: (0, t.jsx)(lL.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tv() {
    let [e, l] = (0, lz.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: ta.X6,
              children: [
                  (0, t.jsx)(eS.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eV.intl.string(eV.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eR.D, {
                      "aria-label": eV.intl.string(eV.t.rSe9ra),
                      className: ta.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(l_.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function th() {
    let e = i.useCallback(() => {
            (0, lX.pX)(e5.BVt.NITRO_HOME), (0, lq.closeUserProfileModal)();
        }, []),
        l = (0, ls.A)(e);
    return (0, t.jsx)(lW.A, {
        subscriptionTier: nW.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)("div", {
                className: ta.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: ta.tm,
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
                        className: ta.D0,
                        children: (0, t.jsx)("div", { className: ta.ZN, children: (0, t.jsx)(lF.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tA() {
    return (0, t.jsx)(eS.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: ta.BJ,
        "aria-hidden": !0,
        children: eV.intl.format(eV.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lU.t, { size: "xxs", color: "currentColor", className: ta.qp }),
        }),
    });
}
function tb(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: ta.Os,
        children: [
            (0, t.jsxs)("div", {
                className: ta.AM,
                children: [
                    (0, t.jsx)(lG.D, {
                        className: ta.i_,
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
                                className: ta.l3,
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
function tj(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: ta.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eS.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function tI(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lO.animated.div, { className: ta.HT, style: e, children: (0, t.jsx)(nX, {}) }) : null,
    );
}
function tC(e) {
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
              id: ts,
              "aria-labelledby": to,
              className: a()(ta.nd, { [ta.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: ta.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: to, children: eV.intl.string(eV.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: ta.wx,
                          children: [
                              (0, t.jsx)(tx, { innerRef: g, onClick: u }),
                              (0, t.jsx)(tr, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: R,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nZ, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(f.F, {
                                        children: (0, t.jsxs)(lB.zC, {
                                            ref: S,
                                            className: a()(ta.XG, { [ta.uH]: O }),
                                            onScroll: D,
                                            children: [
                                                h && (A ? (0, t.jsx)(tv, {}) : (0, t.jsx)(th, {})),
                                                A && (0, t.jsx)(tA, {}),
                                                (0, t.jsxs)(tb, {
                                                    heading: eV.intl.string(eV.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nc.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != y ? td : void 0,
                                                        }),
                                                        (0, t.jsx)(tj, { id: td, message: y }),
                                                    ],
                                                }),
                                                (0, t.jsxs)(tb, {
                                                    heading: eV.intl.string(eV.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(lY.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != N ? tu : void 0,
                                                        }),
                                                        (0, t.jsx)(lZ.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != E ? tc : void 0,
                                                        }),
                                                        (0, t.jsx)(tj, { id: tu, message: (0, lK.d3)(N) }),
                                                        (0, t.jsx)(tj, { id: tc, message: E }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsxs)(tb, {
                                                        heading: eV.intl.string(eV.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: [
                                                            (0, t.jsx)(nu, {
                                                                user: p,
                                                                guildId: l,
                                                                disabled: v || j,
                                                                errorMessageId: null != k ? tm : void 0,
                                                            }),
                                                            (0, t.jsx)(tj, { id: tm, message: k }),
                                                        ],
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(tb, {
                                                          heading: eV.intl.string(eV.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nz, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(ne, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                                  errorMessageId: null != P ? tg : void 0,
                                                              }),
                                                              (0, t.jsx)(tj, { id: tg, message: (0, lK.d3)(P) }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(tb, {
                                                          heading: eV.intl.string(eV.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(l7, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(tb, {
                                                    heading: eV.intl.string(I ? eV.t["Vfbar/"] : eV.t.wR5wOo),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nS, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(n_, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(tI, { isDismissed: T }),
                                ],
                            }),
                  ],
              }),
          });
}
var ty = n(982599),
    tN = n(347805),
    tE = n(629403),
    tP = n(612630),
    tk = n(260598);
function tR(e) {
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
        input: (0, t.jsx)(tk.f, {
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
var tS = n(673451);
function tT(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tP.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await tE.A.updateNote(l, e);
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
            ? (0, t.jsx)(eS.E, { variant: "text-sm/normal", color: "text-default", className: tS.t, children: p })
            : null;
    return (0, t.jsx)(tR, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eV.intl.string(eV.t.PbMNh2),
        label: eV.intl.string(eV.t.PbMNh2),
        placeholder: v ? eV.intl.string(eV.t["WLKx/9"]) : eV.intl.string(eV.t.VBhOe2),
        maxLength: e5.T7x,
        rows: 3,
        disabled: v,
        error: m,
    });
}
var tD = n(83013),
    tO = n(518477),
    tM = n(77085);
function tw(e) {
    let { userId: l } = e,
        n = (0, eg.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, B.X)("UserProfileModalV2NotesSection"),
        a = r ? tT : tN.A;
    return (0, t.jsx)(tD.A, {
        heading: eV.intl.string(eV.t["mQKv+v"]),
        scrollTargetId: tO.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tM.N : tM.w,
            autoFocus: n === tO.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tL = n(123292),
    t_ = n(921701),
    tG = n(861173);
function tV(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: t_.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tG.oR, t_.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: t_.Kk, children: l }),
                    (0, t.jsx)(eS.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: t_.hP,
                            children: (0, t.jsx)(tL.Q, {
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
var tU = n(765178),
    tF = n(346055),
    tB = n(289873),
    tz = n(984180);
function tH(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tU.O.announce(eV.intl.string(eV.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tF.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tz.f, l && tz.z),
                    children: n && (0, t.jsx)(tB.y, { type: tB.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tW = n(568602),
    tK = n(625494);
function tX(e) {
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
                tK._.subscribe(e5.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tK._.unsubscribe(e5.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tW.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tq = n(515054),
    tY = n(933832),
    tZ = n(972213),
    t$ = n(97483),
    tJ = n(606758);
let tQ = {
        [tO.jM.WIDGET_ADDED]: {
            message: eV.intl.string(eV.t.fFP1Uy),
            icon: (0, t.jsx)(tY.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tO.jM.WIDGET_REMOVED]: {
            message: eV.intl.string(eV.t.zzsK7h),
            icon: (0, t.jsx)(tY.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tO.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eV.intl.string(eV.t["84MExs"]),
            icon: (0, t.jsx)(tZ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t$.Ck.FAILURE,
        },
        [tO.jM.SOMETHING_WENT_WRONG]: {
            message: eV.intl.string(eV.t.F8FvUy),
            icon: (0, t.jsx)(tZ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t$.Ck.FAILURE,
        },
    },
    t0 = (e) => {
        let { className: l } = e,
            n = (0, tJ.fu)(),
            r = (0, s.bG)([e$.Ay], () => e$.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(tQ[n]), tU.O.announce(tQ[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, tJ.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, tJ.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lO.animated.div, { className: l, style: e, children: (0, t.jsx)(tV, { ...u }) }),
                ),
            })
        );
    };
var t1 = n(297413),
    t2 = n(878555),
    t7 = n(576705),
    t3 = n(292666);
function t9(e) {
    let { isEditing: l, inputRef: n, ...t } = eQ(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function t5(e) {
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
    return (0, t.jsx)(t3.k, {
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
function t8(e) {
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
        input: (0, t.jsx)(t5, {
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
var t6 = n(35783);
let t4 = (e) => (null == e || "" === e ? void 0 : e);
function ie(e) {
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
        { canChangeDisplayName: C, permissionsLoaded: y } = (0, s.cf)([t7.A, w.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = w.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: t7.A.can(e5.xBc.CHANGE_NICKNAME, e) || t7.A.can(e5.xBc.MANAGE_NICKNAMES, e),
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
        (m = t4(c) ?? t4(r) ?? p.username),
        (f = t4(c) ?? p.username),
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
        k = t9({ value: N, onCommit: P, disabled: !C }),
        { isEditing: R, handleCommit: S } = k,
        T = (0, s.bG)([ea.A], () => ea.A.getErrors(b ?? null)),
        D = (0, eW.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        M = D?.nick?.[0],
        L = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        _ = eV.intl.string(A ? eV.t.mq6Cg9 : eV.t.XuZU7A),
        G = A ? eV.intl.string(eV.t.YcDKr8) : p.username,
        V = eV.intl.string(A ? eV.t["g7OSZ/"] : eV.t.kyfzzc),
        U = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && S(),
                    (0, nr.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, S, h, b],
        ),
        B = {
            icon: lM.V,
            tooltip: eV.intl.string(eV.t.lqKKI2),
            "aria-label": eV.intl.string(eV.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: F,
            buttonRef: U,
        },
        z =
            A && !C && y
                ? (0, t.jsx)(eZ.m, {
                      text: eV.intl.string(eV.t.gzjxQi),
                      children: (0, t.jsx)(eR.D, {
                          tag: "span",
                          className: t6.C,
                          children: (0, t.jsx)(lF.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eV.intl.string(eV.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != E
                ? (0, t.jsx)(t2.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: L,
                      className: t6.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(t8, {
        ...k,
        preview: H,
        placeholder: G,
        editButtonAriaLabel: V,
        label: _,
        maxLength: e5.zzC,
        trailing: C && j ? B : void 0,
        error: O,
        warning: M,
        disabled: !C,
    });
}
var il = n(469432);
function it(e) {
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
        f = t9({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eV.intl.string(x ? eV.t.AXiE0i : eV.t["76Aqhl"]);
    return (0, t.jsx)(t8, {
        ...f,
        size: "compact",
        className: a()(il.k, p && il.J),
        preview: v ? (0, t.jsx)(t2.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eV.intl.string(eV.t.h6VAO7),
        label: eV.intl.string(eV.t["rniRE+"]),
        placeholder: h,
        maxLength: e5.VE5,
    });
}
var ii = n(145497),
    ir = n(685073),
    ia = n(318785),
    is = n(534400),
    io = n(743981),
    id = n(724637),
    iu = n(329296);
let ic = "no-server-tag";
function ig(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eR.D, {
        innerRef: l,
        className: a()(id.L5, { [id.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eS.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: id.W3,
            tag: "span",
            children: [
                o
                    ? eV.intl.string(eV.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  is.Z9,
                                  {
                                      src: (0, ir.gC)(n, r, io.Sl.SIZE_14),
                                      size: io.Sl.SIZE_14,
                                      className: id.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, ir.gC)(n, r, io.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(n$.a, { size: "xs", color: "currentColor", className: id.u4 }),
            ],
        }),
    });
}
function im() {
    let e = (0, ia.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([er.default], () => {
            let e = er.default.getCurrentUser();
            return (0, ir.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ea.A], () => ea.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ic
                    ? (0, t.jsx)("div", {
                          className: iu.uN,
                          children: (0, t.jsx)(eS.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: id.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(n7.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ic, label: eV.intl.string(eV.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(ii.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(is.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
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
        : (0, t.jsx)(n4, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eV.intl.string(eV.t.Pdd1nd),
              listboxClassName: id.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ig, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var ip = n(874644);
function ix(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(t2.Ay, {
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
        : (0, t.jsx)(t1.A, {
              user: l,
              forceUsername: !0,
              className: ip.a1,
              usernameClass: ip.eb,
              discriminatorClass: ip.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(ie, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(ip.AK, ip.j6),
                children: [d, (0, t.jsx)(t2.Ce, {}), (0, t.jsx)(it, { displayProfile: n }), (0, t.jsx)(im, {}), r],
            }),
        ],
    });
}
var iv = n(97808),
    ih = n(980707),
    iA = n(477782),
    ib = n(22231),
    ij = n(601255),
    iI = n(562819),
    iC = n(19575),
    iy = n(106106),
    iN = n(338165);
let iE = iC.Ay.getEnableHardwareAcceleration() ? iv.Js : iv.eu;
function iP(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ih.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.YAgq3W),
        children: (0, t.jsx)(iA.rX, { children: n }),
    });
}
function ik(e) {
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
                h = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
                A = (0, en.a4)({ user: l }),
                b = (0, en.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, en.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, ij.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lK.XD)({
                            uploadType: l9.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, iI.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
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
                                iA.Dr,
                                { id: "change-avatar", label: eV.intl.string(eV.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                iA.Dr,
                                { id: "change-decoration", label: eV.intl.string(eV.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      iA.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      iA.Dr,
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
                                      iA.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      iA.Dr,
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
              className: a()(iy.my, iy.vk, iN.kL, { [iN.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(iE, { ...r, imageClassName: a()(iy.Lw, iN.HU) }),
                  (0, t.jsx)(lQ.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lQ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(iP, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: iN.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ib.R,
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
var iR = n(976726);
function iS(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ih.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eV.intl.string(eV.t.FzU73A),
        children: (0, t.jsx)(iA.rX, { children: n }),
    });
}
function iT(e) {
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
                j = (0, s.bG)([F.A], () =>
                    null != n ? F.A.getGuildMemberProfile(l.id, n)?.banner : F.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([er.default], () => er.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileFrame != null),
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
                M = (0, N.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                L = i.useCallback(() => {
                    r(),
                        (0, lK.XD)({
                            uploadType: l9.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, np.W)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
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
                        (0, nT.w)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: M,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, M]),
                B = i.useCallback(() => {
                    r(), (0, eX.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                iA.Dr,
                                { id: "change-banner", label: eV.intl.string(eV.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                iA.Dr,
                                { id: "change-effect", label: eV.intl.string(eV.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iA.Dr,
                                { id: "change-frame", label: eV.intl.string(eV.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      iA.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      iA.Dr,
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
                                      iA.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      iA.Dr,
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
                                      iA.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eV.intl.string(eV.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      iA.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eV.intl.string(eV.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, p, x, R, S, P, T, D, L, _, U, G, V, B]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(ex.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(iR.kL, { [iR.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ex.A, { ...e, className: iR.Pr }),
                  (0, t.jsx)(lQ.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lQ.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(iS, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: iR.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ib.R,
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
var iD = n(777480),
    iO = n(107563),
    iM = n(570287);
n(938796);
var iw = n(913453),
    iL = n(667049),
    i_ = n(837531),
    iG = n(186272),
    iV = n(645625),
    iU = n(337796);
let iF = (e) => e * (2 - e),
    iB = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iz = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iH(e) {
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
        : (0, t.jsx)("div", { className: iV.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iW(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nh.add(e), () => nh.delete(e)),
            () => nA,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function iK(e) {
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
        { isHoveringOrFocusing: M } = (0, R.A)(k),
        [w, G] = i.useState(),
        U = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? G("compact-xs") : l <= 380 ? G("compact-sm") : G(void 0);
        }, []);
    (0, A.g)(k, U, [], { fireOnMount: !0 });
    let F = null != w ? iB[w] : void 0,
        B = i.useMemo(() => p ?? (0, S.A)(), [p]),
        { relationshipType: z, originApplicationId: H } = (0, s.cf)([L.A], () => ({
            relationshipType: L.A.getRelationshipType(l.id),
            originApplicationId: L.A.getOriginApplicationId(l.id),
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
        ea = y ? iT : ex.A,
        eo = y ? ik : ef.A;
    return (0, t.jsxs)("main", {
        className: a()(iV.profile, null != w && iV[w]),
        ref: k,
        "aria-busy": N,
        children: [
            (0, t.jsxs)("div", {
                className: iV.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iV.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ea, {
                            user: l,
                            displayProfile: g,
                            guildId: r,
                            themeType: es.d.MODAL_V2,
                            specOverrides: F,
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
                className: iV.profileBody,
                children: [
                    (0, t.jsx)(ix, {
                        user: l,
                        displayProfile: g,
                        nickname: m,
                        trailing: (0, t.jsx)(ep.A, { displayProfile: g, themeType: es.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: y,
                    }),
                    z === e5.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: iV.profileOverlay,
                            children: (0, t.jsx)(eA.A, {
                                user: l,
                                applicationId: H,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: iV.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eN.A.Overlay,
                            {
                                className: iV.profileOverlay,
                                children: (0, t.jsx)(eA.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: iV.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: iV.profileOverlay,
                            children: (0, t.jsx)(tD.A, {
                                heading: eV.intl.string(eV.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iV.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ey.A, { user: l, className: iV.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eN.A.Overlay, {
                            className: iV.profileOverlay,
                            children: (0, t.jsx)(eC.A, { username: m }),
                        }),
                    (0, t.jsx)("div", {
                        className: iV.profileButtons,
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
                        (0, t.jsx)(tD.A, {
                            heading: eV.intl.string(eV.t["Uv/eTx"]),
                            children: (0, t.jsx)(eh.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(tD.A, {
                        heading: eV.intl.string(eV.t.a6XYD9),
                        children: (0, t.jsx)(ej.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: tO.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(eP.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: iV.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !W &&
                        (y || ei) &&
                        (0, t.jsx)(tD.A, {
                            heading: eV.intl.string(eV.t["3fe7U5"]),
                            scrollTargetId: tO.bk.CONNECTIONS,
                            children: (0, t.jsx)(lD, {
                                applicationIdentities: el,
                                connections: en,
                                userId: l.id,
                                allowEditing: y,
                                className: iV.profileAppConnections,
                            }),
                        }),
                    !W &&
                        er &&
                        (0, t.jsx)(tD.A, {
                            heading: eV.intl.string(eV.t.PHjkRE),
                            scrollTargetId: tO.bk.APPS,
                            children: (0, t.jsx)(eB, {
                                applicationRoleConnections: et,
                                onClose: x,
                                className: iV.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tw, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(iW, { displayProfile: g, profileEffectOverride: I, isHovering: M }),
            null != C && (0, t.jsx)(E.A, { frame: C, filterLayer: iz }),
        ],
    });
}
function iX(e) {
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
function iq(e) {
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
            handleCollapse: eT,
            refs: { expandIconButtonRef: eD, expandTabButtonRef: eO, collapseButtonRef: eM },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: iF },
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
        ew = ec && !eP,
        eL = ec && (!eP || ek),
        { defaultWishlistId: e_ } = (0, s.cf)([F.A], () => ({ defaultWishlistId: F.A.getFirstWishlistId(l.id) }));
    (0, M.fw)({ wishlistId: e_, userId: l.id });
    let eG = (0, em.fC)(),
        eU = ep && (!ec || !q),
        eF = ec && $,
        eB = X !== K || eF || null != eG.interactionType,
        ez = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iw.A)(i),
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
                c = (0, iL.A)(i.id),
                g = (0, iM.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = F.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? F.A.getWishlistSettings(i.id, p) : null,
                h = (x ? iO.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: eV.intl.string(eV.t.laViwx), section: tO.RP.WIDGETS }),
                m.push({ text: eV.intl.string(eV.t.chq59f), section: tO.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = L.A.isFriend(i.id),
                I = v?.visibility === iD.a.PUBLIC;
            return (
                (f || (!f && h && I && g && (!b || (b && j)))) &&
                    m.push({ text: eV.intl.string(eV.t["7lZ31J"]), section: tO.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, i_.A)(a), section: tO.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, iG.A)(d), section: tO.RP.MUTUAL_GUILDS })),
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
            children: (0, t.jsx)(em.Hl, {
                value: eG,
                children: (0, t.jsx)(eg.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iU.zr, { [iU.QF]: eK?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eJ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tX, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iV.layoutContainer, eZ, {
                                        [iV.editingPanelEnabled]: ec,
                                        [iV.editingPanelExpanded]: ec && eP,
                                        [iV.isAnimating]: ek,
                                    }),
                                    style: eY,
                                    children: [
                                        (0, t.jsxs)(iX, {
                                            user: l,
                                            displayProfile: eK,
                                            pendingThemeColors: ev,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iU.Oo,
                                                    children: [
                                                        (0, t.jsx)(lm.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eJ, children: e0 }),
                                                        }),
                                                        eL &&
                                                            (0, t.jsx)(tp, {
                                                                buttonRef: eD,
                                                                onClick: eS,
                                                                className: iV.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ew &&
                                                    (0, t.jsx)("div", {
                                                        className: iV.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tf, {
                                                            innerRef: eO,
                                                            onClick: eS,
                                                            className: iV.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                ec &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tC, {
                                                                  className: a()(iV.editingPanel, {
                                                                      [iV.isExpanded]: eP,
                                                                  }),
                                                                  selectedGuildId: X,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: Y,
                                                                  onClose: eT,
                                                                  collapseButtonRef: eM,
                                                                  isLoading: q,
                                                                  isEditingDisabled: $,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eN.A, {
                                                    className: a()(H, iU.A7, iV.profileContentOuter),
                                                    innerClassName: iV.profileContentInner,
                                                    user: l,
                                                    displayProfile: eK,
                                                    themeType: es.d.MODAL_V2,
                                                    pendingThemeColors: ev,
                                                    isPrivate: eK?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iH, { displayProfile: eK, pendingBanner: ej }),
                                                        eK?.private === !0 && (0, t.jsx)(eI.A, {}),
                                                        !ep && (0, t.jsx)(t0, { className: iV.noticeContainer }),
                                                        eU &&
                                                            (0, t.jsx)("div", {
                                                                className: iV.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tV, {
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
                                                            className: iV.profileCardToastContainer,
                                                            children: (0, t.jsx)(eb.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tH, {
                                                            showScrim: eB,
                                                            showLoadingSpinner: q,
                                                            className: iV.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(iK, {
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
                                                                (0, t.jsx)(tq.A, {
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
                            (0, t.jsx)(ty.A, { userId: l.id, guildId: K, className: iV.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
