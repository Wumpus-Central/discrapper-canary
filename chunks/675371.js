n.d(l, { A: () => iZ });
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
    H = n(702841),
    W = n(370480),
    K = n(773669),
    X = n(652215),
    q = n(101928),
    Y = n(837529),
    Z = n(346713),
    $ = n(573648),
    J = n(941314),
    Q = n(429913),
    ee = n(321078),
    el = n(403362),
    en = n(484509),
    et = n(83931),
    ei = n(920601),
    er = n(903209),
    ea = n(919395),
    es = n(101058),
    eo = n(696451),
    ed = n(287809),
    eu = n(836602),
    ec = n(996988),
    eg = n(985253);
let em = (0, o.FT)(eg.T[ec.d.MODAL_V2].avatarSize),
    ef = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function ep(e, l) {
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
var ex = n(716804),
    ev = n(679492),
    eh = n(718019),
    eA = n(795873),
    eb = n(915614),
    ej = n(744753),
    eI = n(834730);
function eC(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eI.E, { variant: "text-sm/normal", children: l });
}
var ey = n(361311),
    eN = n(931481),
    eE = n(439053),
    eP = n(743987),
    ek = n(312381),
    eR = n(501193),
    eS = n(383448),
    eT = n(946356),
    eD = n(983495),
    eO = n(280645),
    eM = n(109112),
    ew = n(939249),
    eL = n(730134),
    e_ = n(169869),
    eG = n(837057),
    eV = n(310419),
    eU = n(889227),
    eF = n(967198),
    eB = n(488995),
    ez = n(375708),
    eH = n(985176);
function eW(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, e_.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eH.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eL.A, { user: new eU.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eM._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eH.Hd,
                children: [
                    (0, t.jsxs)(ew.D, {
                        className: eH.OB,
                        onClick: () => {
                            i?.(),
                                (0, eG.transitionToGlobalDiscovery)({
                                    tab: eB.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eV.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eI.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eI.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eI.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eH.nk,
                                children: ez.intl.format(ez.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eH.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eK(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([K.default], () => K.default.locale),
        d = (0, s.bG)([eF.A], () => eF.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eH.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eH.FI,
                          children: (0, t.jsx)(eW, {
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
var eX = n(240248),
    eq = n(308244),
    eY = n(81400),
    eZ = n(428262),
    e$ = n(84540),
    eJ = n(621466);
n(321073);
var eQ = n(219869),
    e0 = n(990078),
    e1 = n(775602),
    e7 = n(916315);
function e2(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e1.Ay], () => e1.Ay.useReducedMotion),
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
                !u || (null != m.current && (0, eJ.vq)(e.relatedTarget) && m.current.contains(e.relatedTarget)) || A();
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
function e3(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e7.L7,
            children: (0, t.jsx)(eQ.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e0.m, { text: l, ariaHidden: !0, children: i });
}
function e8(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? c.E : p.i;
    return (0, t.jsxs)(eI.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: e7.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? e7.ik : e7.QW }), n],
    });
}
function e5(e) {
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
            className: a()(e7.LL, { [e7.JD]: y, [e7.xe]: N, [e7.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eI.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e7.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(ew.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": S,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e7.lD, children: (0, t.jsx)(e3, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e7.kL, { [e7.oE]: "compact" === c, [e7.c1]: "multiline" === c }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: e7.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e7.VH, children: T }),
                              k && "compact" !== c && (0, t.jsx)(e8, { id: I, message: P, type: E }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var e9 = n(786826);
function e6(e) {
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
                ? ez.intl.formatToPlainString(ez.t.ICT5S6, { maxLength: v })
                : void 0) ?? b;
    return (0, t.jsx)(e5, {
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
        input: (0, t.jsx)(e9.f, {
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
let e4 = [
    { value: "HAIKU", label: () => ez.intl.string(ez.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => ez.intl.string(ez.t.CXkR1L) },
    { value: "TELL_US", label: () => ez.intl.string(ez.t.eutr4P) },
    { value: "FUN_FACT", label: () => ez.intl.string(ez.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => ez.intl.string(ez.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => ez.intl.string(ez.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => ez.intl.string(ez.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => ez.intl.string(ez.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => ez.intl.string(ez.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => ez.intl.string(ez.t.u7WCGI) },
];
var le = n(307731);
function ll(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        m = eZ.Ay.canUsePremiumProfileCustomization(u),
        {
            value: f,
            previewValue: p,
            onCommit: x,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, e$.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        v = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = e2(e),
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
                        (0, eJ.vq)(e.target) && !a(e.target) && t();
                    };
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let n = e.relatedTarget;
                    !(0, eJ.vq)(n) || a(n) || t();
                },
                [l, a, t],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: f, onCommit: x }),
        h = !(0, eX.uJ)(p),
        A = (0, s.bG)([eu.A], () => eu.A.getErrors(g)),
        b = (0, eY.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e4.length)), e4[e];
        }, []),
        y = c ? ez.intl.string(ez.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e6, {
              ...v,
              preview: h ? (0, t.jsx)(eq.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: ez.intl.string(ez.t.lO3n7a),
              label: ez.intl.string(ez.t["YWo+Zd"]),
              emojiPickerIntention: le.EmojiIntention.PROFILE,
              maxLength: X.NA2,
              error: j,
              warning: I,
          })
        : h
          ? (0, t.jsx)(eq.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function ln(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eX.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: ez.intl.string(ez.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(ll, { displayProfile: l }) : (0, t.jsx)(eq.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var lt = n(982168),
    li = n(722868),
    lr = n(822775),
    la = n(982985),
    ls = n(700174),
    lo = n(34188),
    ld = n(564064),
    lu = n(23722),
    lc = n(993401);
function lg(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, lu.A)(() => {
            (0, ld.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lc.q3, {
        action: "VISIT_SHOP",
        icon: lo.U,
        tooltipText: ez.intl.string(ez.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var lm = n(573355),
    lf = n(102951);
function lp(e) {
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
        g = (0, li.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lf.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === X.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(la.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lg, { onClose: d }),
                        (0, t.jsx)(ls.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lr.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lg, { onClose: d }),
                        (0, t.jsx)(ls.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(la.e, { userId: l.id, onClose: lt.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(ls.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === X.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(la.e, { userId: l.id, onClose: lt.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ls.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === X.eA$.FRIEND || o === X.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(la.e, { userId: l.id, onClose: lt.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lm.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ls.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === X.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(la.e, { userId: l.id, onClose: lt.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lm.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(ls.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lm.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(la.l, { userId: l.id, onClose: lt.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(ls.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lx = n(463156),
    lv = n(349288),
    lh = n(509434),
    lA = n(307301),
    lb = n(228366),
    lj = n(95561),
    lI = n(874490),
    lC = n(968309),
    ly = n(174459),
    lN = n(486020),
    lE = n(123917),
    lP = n(783419);
let lk = "User Profile Modal V2";
function lR(e) {
    let l = $.A.get(e);
    (0, lC.A)({ platformType: l.type, location: lk }),
        ly.default.track(X.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lk,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lS() {
    lb.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lR, stackingBehavior: "stack" });
}
function lT(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, W.An)(r[lP.pK.CREATED_AT], n),
        s = $.A.get((0, lI.ML)(l.type));
    return (0, t.jsx)(lO, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e0.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eI.E, { variant: "text-sm/normal", className: eH.GW, children: l.name }),
                  })
                : (0, t.jsx)(lv.Anchor, {
                      href: e,
                      className: eH.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${ez.intl.string(ez.t.q5jLJB)}`
                              : `${l.name}, ${ez.intl.string(ez.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lj.zV)(X.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lE.h)({ href: e, trusted: s?.type !== X.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eH.vi,
                          children: [
                              (0, t.jsx)(e0.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eI.E, {
                                      variant: "text-sm/normal",
                                      className: eH.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lh.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === X.fg2.REDDIT
                ? (0, e_.xE)(r)
                : l.type === X.fg2.STEAM
                  ? (0, e_.dy)(r)
                  : l.type === X.fg2.BLUESKY || l.type === X.fg2.MASTODON || l.type === X.fg2.TWITTER
                    ? (0, e_.ED)(r)
                    : l.type === X.fg2.PAYPAL
                      ? (0, e_.gZ)(r)
                      : l.type === X.fg2.EBAY
                        ? (0, e_.ub)(r)
                        : l.type === X.fg2.TIKTOK
                          ? (0, e_.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lD(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lN.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lO, {
        renderAccountName: () =>
            (0, t.jsx)(e0.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eI.E, {
                    variant: "text-sm/normal",
                    className: eH.GW,
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
        className: eH.FI,
        children: [
            (0, t.jsx)(e0.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eH.k_,
                    children: (0, t.jsx)("img", {
                        alt: ez.intl.formatToPlainString(ez.t.rtm15P, { name: i }),
                        className: a()(eH.tV, o ? eH.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eH.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eI.E, {
                                    variant: "text-xs/normal",
                                    children: ez.intl.format(ez.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eH.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lM(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([K.default], () => K.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eH.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eH.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lT, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lD, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(ew.D, {
                    className: eH.qG,
                    onClick: lS,
                    children: [
                        (0, t.jsx)(lA.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eI.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: ez.intl.string(ez.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lw = n(308186),
    lL = n(193885),
    l_ = n(408278),
    lG = n(890377),
    lV = n(789645),
    lU = n(534514),
    lF = n(821609),
    lB = n(403581),
    lz = n(194261),
    lH = n(689175),
    lW = n(517461),
    lK = n(13875),
    lX = n(783420),
    lq = n(252732),
    lY = n(976860),
    lZ = n(975732),
    l$ = n(487233),
    lJ = n(120386),
    lQ = n(317097),
    l0 = n(602853),
    l1 = n(922016),
    l7 = n(508274),
    l2 = n(654107),
    l3 = n(930349);
function l8(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l0.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l2.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eu.A, F.A], () => ({
            pendingAccentColor: eu.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: F.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lQ.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e$.p)({ accentColor: e }), []);
    return (0, t.jsx)(l1.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l7.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l3.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: ez.intl.string(ez.t["/X3fkf"]),
                accessibleValue: (0, lQ.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lQ.Hl)(c) } }),
            }),
    });
}
var l5 = n(450373),
    l9 = n(339984),
    l6 = n(111242);
function l4(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l6.o, style: { backgroundColor: l } });
}
function ne(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l6._ });
}
function nl(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l0.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lQ.LX)(r),
        { hex: s } = (0, l5.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(ne, { src: o }) : (0, t.jsx)(l4, { backgroundColor: s });
}
function nn(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, z.Ay)(n, i),
        c = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()?.banner),
        m = (0, s.bG)([F.A], () =>
            null != i ? F.A.getGuildMemberProfile(n, i)?.banner : F.A.getUserProfile(n)?.banner,
        ),
        f = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = f && d && !p ? void 0 : c,
        v = (0, ea.Ac)(c, m),
        h = d && null != g,
        A = v
            ? {
                  onClick: () => (0, lq.rM)(null, m, (e) => (0, e$.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: ez.intl.string(h ? ez.t.jHlJNS : ez.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l3.V, {
        affordance: A,
        variant: "square",
        onClick: () =>
            (0, lq.XD)({
                uploadType: l9.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: ez.intl.string(ez.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == m)
                ? ez.intl.string(ez.t["3Xph0/"])
                : l
                  ? ez.intl.string(ez.t.keN7ib)
                  : ez.intl.string(ez.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nl, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var nt = n(913563),
    ni = n(898985),
    nr = n(922301),
    na = n(660184),
    ns = n(259065),
    no = n(864386),
    nd = n(283607);
let nu = "heading-lg/bold";
function nc(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nd.M,
        children:
            null != n
                ? (0, t.jsx)(eI.E, {
                      variant: nu,
                      children: (0, t.jsx)(na.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nr.G.ANIMATED : nr.G.STATIC,
                          textClassName: nd.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eI.E, { variant: nu, className: nd.W, color: "text-muted", children: l }),
    });
}
function ng(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([eo.Ay], () => (null != n ? (eo.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        c = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()?.globalName ?? null),
        g = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(null).pendingGlobalName),
        m = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, ea.B0)(l, n ?? void 0),
        v = d ? p : f,
        h = void 0 !== x,
        A = null === x,
        b = d && null != f,
        j = (0, ea.lw)({ pendingValue: x, userValue: f, guildValue: p, guildId: n ?? void 0 }),
        C = (e) => (null == e || "" === e ? void 0 : e),
        y = void 0 !== g ? g : c,
        N = d ? (C(void 0 !== m ? m : u) ?? C(y) ?? l.username) : (C(y) ?? l.username),
        E = h ? null != x : null != v,
        P =
            null != j && E
                ? {
                      onClick: () => (0, e$.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: ez.intl.string(b ? ez.t.en3ogK : ez.t["Wqmi/h"]),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, ns.L)({ analyticsLocations: o, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [o, n]);
    return (0, t.jsx)(l3.V, {
        affordance: (!A && (h || null != v)) || b ? P : "add",
        variant: "bar",
        onClick: k,
        accessibleLabel: ez.intl.string(ez.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return ez.intl.string(ez.t["3Xph0/"]);
            let l = ez.intl.string((0, nt.A)(e.fontId)),
                n = ez.intl.string(ni.J[e.effectId] ?? no.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return ez.intl.formatToPlainString(ez.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(j),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nc, { stylesPreview: j, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var nm = n(374654),
    nf = n(366010),
    np = n(736653),
    nx = n(674658),
    nv = n(617061),
    nh = n(203632),
    nA = n(536572);
let nb = new Set(),
    nj = 0;
var nI = n(993408),
    nC = n(841702),
    ny = n(515718),
    nN = n(195292);
let nE = (e) => {
    "" !== e.thumbnailPreviewSrc && (0, ny.NN)(e.thumbnailPreviewSrc).catch(() => {});
};
var nP = n(466681),
    nk = n(970389);
let nR =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nS =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nT(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, np.Ay)(),
        u = (0, nf.M)(d) ? nR : nS,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nC.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nI.wo)(r, t), [r, t]),
                s = (0, nN.A)({ enabled: l, isInteracting: n, items: a, preload: nE });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nj += 1), nb.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nP.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nP.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nP.yY, { [nk.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nh.HL.FromStart,
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
function nD(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        c = (0, ea.N2)({ user: l }),
        g = (0, ea.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, ea.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        v = (0, ea.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: h } = (0, nx.q)(v?.skuId),
        A = f ? null != m : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, e$.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: ez.intl.string(x ? ez.t["SQy/Po"] : ez.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nv.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l3.V, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: ez.intl.string(ez.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? ez.intl.string(ez.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : ez.intl.string(t ? ez.t["1M4m8w"] : ez.t["+Du7ua"]);
        })({ profileEffectPreview: v, productName: (0, nA.VG)(h), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nT, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nO = n(515727),
    nM = n(746002);
let nw = (e) => {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nM.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nM.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, ny.NN)(n).catch(() => {});
        });
};
var nL = n(84391);
let n_ = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nG(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, np.Ay)(),
        u = (0, nf.M)(d) ? nR : nS,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nC.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nI.MG)(r, t), [r, t]);
            return (0, nN.A)({ enabled: l, isInteracting: n, items: a, preload: nw });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, P.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(nL.hm, x, { [nk.O]: m }),
                    style: p,
                    children: (0, t.jsx)(E.A, { frame: f, filterLayer: n_ }),
                }),
            (0, t.jsx)("div", {
                className: a()(nL.ti, { [nL.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nL.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nV(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        u = (0, ea.Xf)({ user: l }),
        c = (0, ea.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, ea.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, ea.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: v } = (0, nx.q)(x?.skuId),
        h = m ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, e$.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: ez.intl.string(p ? ez.t.j6hZyM : ez.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nO.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l3.V, {
        affordance: f && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: ez.intl.string(ez.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? ez.intl.string(ez.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : ez.intl.string(t ? ez.t.yFeGB5 : ez.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nA.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nG, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nU = n(684732),
    nF = n(498596),
    nB = n(298387);
function nz(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lQ.Hl)(l),
        m = (0, lQ.bJ)(l, 0xffffff) < nF.Tr.NonText;
    return (0, t.jsx)(l1.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l7.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ew.D, {
                ...n,
                innerRef: c,
                className: nB.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nB.Hy, { [nB.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nH(e) {
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
        c = (0, lQ.Hl)(l),
        g = (0, lQ.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = ez.intl.formatToPlainString(ez.t.FquTfm, { colorLabel: c }),
        p = ez.intl.formatToPlainString(ez.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l3.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nB.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nz, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nz, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nW(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([eu.A, F.A], () => {
            let e = eu.A.getPendingChanges(n ?? void 0),
                t = F.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (F.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, es.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, q.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l0.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, l2.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e$.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nU.l)(d, o)
                ? {
                      onClick: () => (0, e$.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: ez.intl.string(ez.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(nH, {
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
var nK = n(315629),
    nX = n(788868),
    nq = n(235684);
function nY() {
    let e = i.useCallback(() => {
            (0, lY.pX)(X.BVt.NITRO_HOME), (0, lZ.closeUserProfileModal)();
        }, []),
        l = (0, lu.A)(e);
    return (0, t.jsx)(lX.A, {
        subscriptionTier: nX.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)(nK.h, {
                color: "nitro-pink",
                className: nq.U,
                children: [
                    (0, t.jsx)(eI.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: ez.intl.format(ez.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lF.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lB.t,
                        text: ez.intl.string(ez.t.pj0XBN),
                        onClick: n,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nZ = n(55619),
    n$ = n(942308);
function nJ() {
    return (0, t.jsxs)("div", {
        className: n$.k,
        children: [
            (0, t.jsx)(eI.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: ez.intl.string(ez.t.JFY17v),
            }),
            (0, t.jsx)(lF.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: ez.intl.string(ez.t.R9GHya),
                onClick: () => nZ.A.setEnabled(!1),
            }),
        ],
    });
}
var nQ = n(847374),
    n0 = n(111159),
    n1 = n(548118),
    n7 = n(711014),
    n2 = n(540637),
    n3 = n(801461),
    n8 = n(44482),
    n5 = n(844222),
    n9 = n(561392),
    n6 = n(716263),
    n4 = n(15626),
    te = n(930856);
function tl(e) {
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
            let { reducedMotion: e } = i.useContext(n5.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, n9.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, n6.DL)(o, {
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
        y = i.useContext(n4._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, n3.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        M = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, n3.fI)(e.value, [n])), [n, l]),
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
        { activeIndex: F, handleKeyDown: B } = (0, n2.l)(!0, l),
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
                    className: a()(te.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(n2.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != f ? f(e) : (0, t.jsx)(n8.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tn = n(138325);
let tt = "MAIN_PROFILE";
function ti(e) {
    let { guild: l } = e;
    return (0, t.jsx)(n1.Ay, { className: tn.$f, guild: l, size: n1.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tr(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tn.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tn.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tn.qL,
                children: [
                    (0, t.jsx)(eI.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eI.E, {
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
function ta(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(ew.D, {
        innerRef: r,
        className: a()(tn.L5, { [tn.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eI.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tn.v9,
                children: n,
            }),
            (0, t.jsx)(nQ.a, {
                className: tn.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function ts(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([n7.Ay], () => n7.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([eF.A], () => {
            let e = eF.A.getGuildId();
            return null == e || eu._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eo.Ay, n7.Ay], () => {
            let e = {};
            for (let l of n7.Ay.getFlattenedGuildIds()) {
                let n = eo.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: tt,
                    label: ez.intl.string(ez.t["2p07FR"]),
                    value: tt,
                    leading: (0, t.jsx)(n0.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(ti, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(el.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(ti, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? tt,
        p = m.find((e) => e.value === f) ?? m[0],
        v = i.useCallback(
            (e) => {
                let n = e === tt ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tl, {
        className: tn.kL,
        label: ez.intl.string(ez.t.rki38K),
        listboxClassName: tn.yt,
        options: m,
        value: f,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tr, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(ta, { leading: p.value === tt ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var to = n(809467);
let td = "profile-modal-editing-panel",
    tu = "profile-modal-editing-panel-heading",
    tc = "profile-editing-nameplate-error",
    tg = "profile-editing-avatar-error",
    tm = "profile-editing-avatar-decoration-error",
    tf = "profile-editing-banner-error",
    tp = "profile-editing-display-name-style-error";
function tx(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e0.m, {
        text: ez.intl.string(ez.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ew.D, {
            innerRef: i,
            "aria-label": ez.intl.string(ez.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": td,
            className: a()(to.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lL.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function tv(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e0.m, {
            text: ez.intl.string(ez.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(l_.K, {
                buttonRef: i,
                "aria-label": ez.intl.string(ez.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": td,
                icon: lL.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function th(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e0.m, {
        text: ez.intl.string(ez.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(ew.D, {
            innerRef: n,
            className: to.cS,
            "aria-label": ez.intl.string(ez.t["l/A351"]),
            onClick: l,
            "aria-controls": td,
            "aria-expanded": !0,
            children: (0, t.jsx)(lG.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tA() {
    let [e, l] = (0, lW.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: to.X6,
              children: [
                  (0, t.jsx)(eI.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: ez.intl.string(ez.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ew.D, {
                      "aria-label": ez.intl.string(ez.t.rSe9ra),
                      className: to.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lV.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tb() {
    let e = i.useCallback(() => {
            (0, lY.pX)(X.BVt.NITRO_HOME), (0, lZ.closeUserProfileModal)();
        }, []),
        l = (0, lu.A)(e);
    return (0, t.jsx)(lX.A, {
        subscriptionTier: nX.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)("div", {
                className: to.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: to.tm,
                        children: [
                            (0, t.jsx)(lU.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ez.intl.string(ez.t.bO0TOe),
                            }),
                            (0, t.jsx)(eI.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: ez.intl.format(ez.t["3PujdE"], { onClick: l }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lF.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lB.t,
                        text: ez.intl.string(ez.t["7IWwak"]),
                        onClick: n,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: to.D0,
                        children: (0, t.jsx)("div", { className: to.ZN, children: (0, t.jsx)(lz.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tj() {
    return (0, t.jsx)(eI.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: to.BJ,
        "aria-hidden": !0,
        children: ez.intl.format(ez.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lB.t, { size: "xxs", color: "currentColor", className: to.qp }),
        }),
    });
}
function tI(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: to.Os,
        children: [
            (0, t.jsxs)("div", {
                className: to.AM,
                children: [
                    (0, t.jsx)(lU.D, {
                        className: to.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e0.m, {
                            text: ez.intl.string(ez.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lB.t, {
                                className: to.l3,
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
function tC(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: to.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eI.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function ty(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lw.animated.div, { className: to.HT, style: e, children: (0, t.jsx)(nY, {}) }) : null,
    );
}
function tN(e) {
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
        p = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()),
        x = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && eZ.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lK.sk)("UserProfileModalV2EditingPanel"),
        C = (0, s.bG)([eu.A], () => eu.A.getErrors(l)),
        y = C.nameplate?.[0] ?? C.nameplate_sku_id?.[0],
        N = C.avatar?.[0],
        E = C.avatar_decoration_sku_id?.[0],
        P = C.banner?.[0],
        k = C.display_name_font_id?.[0] ?? C.display_name_effect_id?.[0] ?? C.display_name_colors?.[0],
        R = (0, lu.A)(r),
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
              id: td,
              "aria-labelledby": tu,
              className: a()(to.nd, { [to.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: to.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: tu, children: ez.intl.string(ez.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: to.wx,
                          children: [
                              (0, t.jsx)(th, { innerRef: g, onClick: u }),
                              (0, t.jsx)(ts, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: R,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nJ, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(f.F, {
                                        children: (0, t.jsxs)(lH.zC, {
                                            ref: S,
                                            className: a()(to.XG, { [to.uH]: O }),
                                            onScroll: D,
                                            children: [
                                                h && (A ? (0, t.jsx)(tA, {}) : (0, t.jsx)(tb, {})),
                                                A && (0, t.jsx)(tj, {}),
                                                (0, t.jsxs)(tI, {
                                                    heading: ez.intl.string(ez.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nm.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != y ? tc : void 0,
                                                        }),
                                                        (0, t.jsx)(tC, { id: tc, message: y }),
                                                    ],
                                                }),
                                                (0, t.jsxs)(tI, {
                                                    heading: ez.intl.string(ez.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(l$.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != N ? tg : void 0,
                                                        }),
                                                        (0, t.jsx)(lJ.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != E ? tm : void 0,
                                                        }),
                                                        (0, t.jsx)(tC, { id: tg, message: (0, lq.d3)(N) }),
                                                        (0, t.jsx)(tC, { id: tm, message: E }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsxs)(tI, {
                                                        heading: ez.intl.string(ez.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: [
                                                            (0, t.jsx)(ng, {
                                                                user: p,
                                                                guildId: l,
                                                                disabled: v || j,
                                                                errorMessageId: null != k ? tp : void 0,
                                                            }),
                                                            (0, t.jsx)(tC, { id: tp, message: k }),
                                                        ],
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(tI, {
                                                          heading: ez.intl.string(ez.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nW, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(nn, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                                  errorMessageId: null != P ? tf : void 0,
                                                              }),
                                                              (0, t.jsx)(tC, { id: tf, message: (0, lq.d3)(P) }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(tI, {
                                                          heading: ez.intl.string(ez.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(l8, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(tI, {
                                                    heading: ez.intl.string(I ? ez.t["Vfbar/"] : ez.t.wR5wOo),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nD, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(nV, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(ty, { isDismissed: T }),
                                ],
                            }),
                  ],
              }),
          });
}
var tE = n(982599),
    tP = n(347805),
    tk = n(629403),
    tR = n(612630),
    tS = n(260598);
function tT(e) {
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
        C = null != h && (l ? r : n).length > h ? ez.intl.formatToPlainString(ez.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e5, {
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
        input: (0, t.jsx)(tS.f, {
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
var tD = n(673451);
function tO(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tR.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await tk.A.updateNote(l, e);
                    } catch {
                        f(ez.intl.string(ez.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        v = d && null == p,
        h = e2({ value: p ?? "", onCommit: x, disabled: v }),
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
            ? (0, t.jsx)(eI.E, { variant: "text-sm/normal", color: "text-default", className: tD.t, children: p })
            : null;
    return (0, t.jsx)(tT, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: ez.intl.string(ez.t.PbMNh2),
        label: ez.intl.string(ez.t.PbMNh2),
        placeholder: v ? ez.intl.string(ez.t["WLKx/9"]) : ez.intl.string(ez.t.VBhOe2),
        maxLength: X.T7x,
        rows: 3,
        disabled: v,
        error: m,
    });
}
var tM = n(83013),
    tw = n(518477),
    tL = n(77085);
function t_(e) {
    let { userId: l } = e,
        n = (0, ex.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, B.X)("UserProfileModalV2NotesSection"),
        a = r ? tO : tP.A;
    return (0, t.jsx)(tM.A, {
        heading: ez.intl.string(ez.t["mQKv+v"]),
        scrollTargetId: tw.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tL.N : tL.w,
            autoFocus: n === tw.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tG = n(123292),
    tV = n(921701),
    tU = n(861173);
function tF(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tV.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tU.oR, tV.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tV.Kk, children: l }),
                    (0, t.jsx)(eI.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tV.hP,
                            children: (0, t.jsx)(tG.Q, {
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
var tB = n(765178),
    tz = n(346055),
    tH = n(289873),
    tW = n(984180);
function tK(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tB.O.announce(ez.intl.string(ez.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tz.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tW.f, l && tW.z),
                    children: n && (0, t.jsx)(tH.y, { type: tH.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tX = n(568602),
    tq = n(625494);
function tY(e) {
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
                tq._.subscribe(X.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tq._.unsubscribe(X.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tX.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tZ = n(515054),
    t$ = n(933832),
    tJ = n(972213),
    tQ = n(97483),
    t0 = n(606758);
let t1 = {
        [tw.jM.WIDGET_ADDED]: {
            message: ez.intl.string(ez.t.fFP1Uy),
            icon: (0, t.jsx)(t$.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tw.jM.WIDGET_REMOVED]: {
            message: ez.intl.string(ez.t.zzsK7h),
            icon: (0, t.jsx)(t$.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tw.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: ez.intl.string(ez.t["84MExs"]),
            icon: (0, t.jsx)(tJ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tQ.Ck.FAILURE,
        },
        [tw.jM.SOMETHING_WENT_WRONG]: {
            message: ez.intl.string(ez.t.F8FvUy),
            icon: (0, t.jsx)(tJ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: tQ.Ck.FAILURE,
        },
    },
    t7 = (e) => {
        let { className: l } = e,
            n = (0, t0.fu)(),
            r = (0, s.bG)([e1.Ay], () => e1.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(t1[n]), tB.O.announce(t1[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, t0.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, t0.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lw.animated.div, { className: l, style: e, children: (0, t.jsx)(tF, { ...u }) }),
                ),
            })
        );
    };
var t2 = n(297413),
    t3 = n(878555),
    t8 = n(576705),
    t5 = n(292666);
function t9(e) {
    let { isEditing: l, inputRef: n, ...t } = e2(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function t6(e) {
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
    return (0, t.jsx)(t5.k, {
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
function t4(e) {
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
                ? ez.intl.formatToPlainString(ez.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        N = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e5, {
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
        input: (0, t.jsx)(t6, {
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
var ie = n(35783);
let il = (e) => (null == e || "" === e ? void 0 : e);
function it(e) {
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
        j = eZ.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: C, permissionsLoaded: y } = (0, s.cf)([t8.A, w.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = w.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: t8.A.can(X.xBc.CHANGE_NICKNAME, e) || t8.A.can(X.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: N,
            previewValue: E,
            onCommit: P,
        } = ((n = null != (l = v?.guildId ?? null)),
        (r = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([eo.Ay], () => (null != l ? (eo.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = il(c) ?? il(r) ?? p.username),
        (f = il(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e$.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e$.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        k = t9({ value: N, onCommit: P, disabled: !C }),
        { isEditing: R, handleCommit: S } = k,
        T = (0, s.bG)([eu.A], () => eu.A.getErrors(b ?? null)),
        D = (0, eY.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        M = D?.nick?.[0],
        L = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        _ = ez.intl.string(A ? ez.t.mq6Cg9 : ez.t.XuZU7A),
        G = A ? ez.intl.string(ez.t.YcDKr8) : p.username,
        V = ez.intl.string(A ? ez.t["g7OSZ/"] : ez.t.kyfzzc),
        U = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && S(),
                    (0, ns.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, S, h, b],
        ),
        B = {
            icon: lL.V,
            tooltip: ez.intl.string(ez.t.lqKKI2),
            "aria-label": ez.intl.string(ez.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: F,
            buttonRef: U,
        },
        z =
            A && !C && y
                ? (0, t.jsx)(e0.m, {
                      text: ez.intl.string(ez.t.gzjxQi),
                      children: (0, t.jsx)(ew.D, {
                          tag: "span",
                          className: ie.C,
                          children: (0, t.jsx)(lz.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": ez.intl.string(ez.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != E
                ? (0, t.jsx)(t3.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: L,
                      className: ie.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(t4, {
        ...k,
        preview: H,
        placeholder: G,
        editButtonAriaLabel: V,
        label: _,
        maxLength: X.zzC,
        trailing: C && j ? B : void 0,
        error: O,
        warning: M,
        disabled: !C,
    });
}
var ii = n(469432);
function ir(e) {
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
        (r = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, e$.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = t9({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = ez.intl.string(x ? ez.t.AXiE0i : ez.t["76Aqhl"]);
    return (0, t.jsx)(t4, {
        ...f,
        size: "compact",
        className: a()(ii.k, p && ii.J),
        preview: v ? (0, t.jsx)(t3.n2, { pronouns: g }) : null,
        editButtonAriaLabel: ez.intl.string(ez.t.h6VAO7),
        label: ez.intl.string(ez.t["rniRE+"]),
        placeholder: h,
        maxLength: X.VE5,
    });
}
var ia = n(145497),
    is = n(685073),
    io = n(318785),
    id = n(534400),
    iu = n(743981),
    ic = n(724637),
    ig = n(329296);
let im = "no-server-tag";
function ip(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ew.D, {
        innerRef: l,
        className: a()(ic.L5, { [ic.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eI.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: ic.W3,
            tag: "span",
            children: [
                o
                    ? ez.intl.string(ez.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  id.Z9,
                                  {
                                      src: (0, is.gC)(n, r, iu.Sl.SIZE_14),
                                      size: iu.Sl.SIZE_14,
                                      className: ic.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, is.gC)(n, r, iu.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nQ.a, { size: "xs", color: "currentColor", className: ic.u4 }),
            ],
        }),
    });
}
function ix() {
    let e = (0, io.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ed.default], () => {
            let e = ed.default.getCurrentUser();
            return (0, is.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === im
                    ? (0, t.jsx)("div", {
                          className: ig.uN,
                          children: (0, t.jsx)(eI.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ic.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(n8.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: im, label: ez.intl.string(ez.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(ia.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(id.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, e$.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(tl, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: ez.intl.string(ez.t.Pdd1nd),
              listboxClassName: ic.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ip, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var iv = n(874644);
function ih(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(t3.Ay, {
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
        : (0, t.jsx)(t2.A, {
              user: l,
              forceUsername: !0,
              className: iv.a1,
              usernameClass: iv.eb,
              discriminatorClass: iv.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(it, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(iv.AK, iv.j6),
                children: [d, (0, t.jsx)(t3.Ce, {}), (0, t.jsx)(ir, { displayProfile: n }), (0, t.jsx)(ix, {}), r],
            }),
        ],
    });
}
var iA = n(97808),
    ib = n(980707),
    ij = n(477782),
    iI = n(22231),
    iC = n(601255),
    iy = n(562819),
    iN = n(19575),
    iE = n(106106),
    iP = n(338165);
let ik = iN.Ay.getEnableHardwareAcceleration() ? iA.Js : iA.eu;
function iR(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ib.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": ez.intl.string(ez.t.YAgq3W),
        children: (0, t.jsx)(ij.rX, { children: n }),
    });
}
function iS(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eh.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([eo.Ay], () => (null != n ? eo.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, ea.z5)(c, g),
                f = d && null != l.avatar,
                p = eZ.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
                A = (0, ea.a4)({ user: l }),
                b = (0, ea.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, ea.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, iC.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lq.XD)({
                            uploadType: l9.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, iy.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lq.rM)(null, g, (e) => (0, e$.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ea.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, e$.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ij.Dr,
                                { id: "change-avatar", label: ez.intl.string(ez.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                ij.Dr,
                                { id: "change-decoration", label: ez.intl.string(ez.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.twB3fz),
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
                                      ij.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: ez.intl.string(ez.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: ez.intl.string(ez.t["9rx5GO"]),
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
        ? (0, t.jsx)(eh.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(iE.my, iE.vk, iP.kL, { [iP.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(ik, { ...r, imageClassName: a()(iE.Lw, iP.HU) }),
                  (0, t.jsx)(l1.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l1.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(iR, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: iP.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iI.R,
                                  "aria-label": ez.intl.string(ez.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iT = n(976726);
function iD(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ib.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": ez.intl.string(ez.t.FzU73A),
        children: (0, t.jsx)(ij.rX, { children: n }),
    });
}
function iO(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = (0, ea.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, ea.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, ea.Xf)({ user: l, guildId: void 0 }),
                g = (0, lK.sk)("UserProfileModalV2EditableBanner"),
                m = eZ.Ay.canUsePremiumProfileCustomization(l),
                f = null == n,
                p = f || m,
                x = g && (f || m),
                v = null != n,
                {
                    pendingBanner: h,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([eu.A], () => eu.A.getPendingChanges(n ?? void 0)),
                j = (0, s.bG)([F.A], () =>
                    null != n ? F.A.getGuildMemberProfile(l.id, n)?.banner : F.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, ea.Ac)(h, j),
                k = v && C,
                R = v && y,
                S = v && E,
                T = void 0 === A ? null != d : null != A,
                D = void 0 === b ? null != u : null != b,
                O = (0, ea.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                M = (0, N.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                L = i.useCallback(() => {
                    r(),
                        (0, lq.XD)({
                            uploadType: l9.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, nv.W)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, lq.rM)(null, j, (e) => (0, e$.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, e$.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nO.w)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: M,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, M]),
                B = i.useCallback(() => {
                    r(), (0, e$.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                ij.Dr,
                                { id: "change-banner", label: ez.intl.string(ez.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                ij.Dr,
                                { id: "change-effect", label: ez.intl.string(ez.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ij.Dr,
                                { id: "change-frame", label: ez.intl.string(ez.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.tT9n7D),
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
                                      ij.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.zUOlT6),
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
                                      ij.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      ij.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: ez.intl.string(ez.t["8DfADq"]),
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
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(iT.kL, { [iT.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eb.A, { ...e, className: iT.Pr }),
                  (0, t.jsx)(l1.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l1.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(iD, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: iT.r9,
                              children: (0, t.jsx)(l_.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iI.R,
                                  "aria-label": ez.intl.string(ez.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iM = n(777480),
    iw = n(107563),
    iL = n(570287);
n(938796);
var i_ = n(913453),
    iG = n(667049),
    iV = n(837531),
    iU = n(186272),
    iF = n(645625),
    iB = n(337796);
let iz = (e) => e * (2 - e),
    iH = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iW = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iK(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, Y.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                ep(n, 1024)
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
        : (0, t.jsx)("div", { className: iF.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iX(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nb.add(e), () => nb.delete(e)),
            () => nj,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function iq(e) {
    var l;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: g,
            originGuildId: m,
            channelId: f,
            displayProfile: p,
            nickname: x,
            hasEntered: v,
            customStatusPrompt: h,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: C,
            accentColorOverride: y,
            profileEffectOverride: N,
            profileFrame: P,
            allowEditing: k = !1,
            isLoading: M = !1,
        } = e,
        w = o.id === d.id,
        G = i.useRef(null),
        { isHoveringOrFocusing: U } = (0, R.A)(G),
        [F, B] = i.useState(),
        z = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? B("compact-xs") : l <= 380 ? B("compact-sm") : B(void 0);
        }, []);
    (0, A.g)(G, z, [], { fireOnMount: !0 });
    let q = null != F ? iH[F] : void 0,
        Y = i.useMemo(() => h ?? (0, S.A)(), [h]),
        { relationshipType: et, originApplicationId: ei } = (0, s.cf)([L.A], () => ({
            relationshipType: L.A.getRelationshipType(o.id),
            originApplicationId: L.A.getOriginApplicationId(o.id),
        })),
        er =
            ((l = o.id),
            (n = (0, H.bG)([K.default], () => K.default.locale)),
            (r = (0, H.bG)([L.A], () => (L.A.getRelationshipType(l) === X.eA$.FRIEND ? L.A.getSince(l) : null), [l])),
            (0, W.An)(r, n)),
        ea = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        es = (0, D.q)({ userId: o.id }),
        eo = (0, T.fi)(o.id),
        { appIdentities: ed, connections: eu } = (function (e) {
            let { filteredAppIdentities: l } = (0, ee.A)(e),
                n = (0, en.A)(e),
                t = (0, J.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, Q.A)([...r]).filter(el.Vq);
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
                                  let l = $.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(o.id),
        eg = (0, Z.A)(o.id),
        em = eu.length > 0 || ed.length > 0,
        ef = eg.length > 0,
        ep = k ? iO : eb.A,
        ex = k ? iS : eh.A;
    return (0, t.jsxs)("main", {
        className: a()(iF.profile, null != F && iF[F]),
        ref: G,
        "aria-busy": M,
        children: [
            (0, t.jsxs)("div", {
                className: iF.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iF.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: g,
                            themeType: ec.d.MODAL_V2,
                            specOverrides: q,
                            pendingBanner: C,
                            pendingAccentColor: y,
                        }),
                    }),
                    (0, t.jsx)(ex, {
                        user: o,
                        displayProfile: p,
                        guildId: g,
                        channelId: f,
                        themeType: ec.d.MODAL_V2,
                        specOverrides: q,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                    }),
                    (0, t.jsx)(eD.A, {
                        user: o,
                        guildId: g,
                        channelId: f,
                        themeType: ec.d.MODAL_V2,
                        hasEntered: v,
                        prompt: w ? Y : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: iF.profileBody,
                children: [
                    (0, t.jsx)(ih, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(eA.A, { displayProfile: p, themeType: ec.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: k,
                    }),
                    et === X.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eT.A.Overlay, {
                            className: iF.profileOverlay,
                            children: (0, t.jsx)(eN.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: iF.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eT.A.Overlay,
                            {
                                className: iF.profileOverlay,
                                children: (0, t.jsx)(eN.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: iF.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eT.A.Overlay, {
                            className: iF.profileOverlay,
                            children: (0, t.jsx)(tM.A, {
                                heading: ez.intl.string(ez.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iF.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eS.A, { user: o, className: iF.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eT.A.Overlay, {
                            className: iF.profileOverlay,
                            children: (0, t.jsx)(eR.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: iF.profileButtons,
                        children: (0, t.jsx)(lp, {
                            user: o,
                            currentUser: d,
                            guildId: g,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: et,
                            onClose: b,
                        }),
                    }),
                    w && (0, t.jsx)(ej.A, { isPremiumUser: (0, V.ki)(d), onInteraction: b }),
                    !ea && (0, t.jsx)(ln, { displayProfile: p, isEditable: k }),
                    es.length > 0 &&
                        (0, t.jsx)(tM.A, {
                            heading: ez.intl.string(ez.t["Uv/eTx"]),
                            children: (0, t.jsx)(ey.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(tM.A, {
                        heading: ez.intl.string(ez.t.a6XYD9),
                        children: (0, t.jsx)(eP.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: tw.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(tM.A, {
                            heading: ez.intl.string(ez.t.wlTO8v),
                            children: (0, t.jsx)(eC, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eO.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: iF.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (k || em) &&
                        (0, t.jsx)(tM.A, {
                            heading: ez.intl.string(ez.t["3fe7U5"]),
                            scrollTargetId: tw.bk.CONNECTIONS,
                            children: (0, t.jsx)(lM, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: k,
                                className: iF.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        ef &&
                        (0, t.jsx)(tM.A, {
                            heading: ez.intl.string(ez.t.PHjkRE),
                            scrollTargetId: tw.bk.APPS,
                            children: (0, t.jsx)(eK, {
                                applicationRoleConnections: eg,
                                onClose: b,
                                className: iF.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(t_, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(iX, { displayProfile: p, profileEffectOverride: N, isHovering: U }),
            null != P && (0, t.jsx)(E.A, { frame: P, filterLayer: iW }),
        ],
    });
}
function iY(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, q.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, ei.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function iZ(e) {
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
                        (0, er.A)(l, void 0, {
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
    let Q = (0, B.X)("UserProfileModalV2"),
        ee = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        el = W && Q,
        en = (0, et.W)(l.id),
        ei = $ && !en,
        eg = el && !ee && !$,
        {
            pendingThemeColors: ep,
            avatarDecorationOverride: eh,
            avatarOverride: eA,
            bannerOverride: eb,
            accentColorOverride: ej,
            profileEffectOverride: eI,
            profileFrameOverride: eC,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([eu.A, ed.default, eo.Ay, F.A], () => {
                if (!t) return ef;
                let e = ed.default.getUser(l);
                if (null == e) return ef;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = eu.A.getPendingChanges(n),
                    c = null != n ? eo.Ay.getMember(n, l) : null,
                    g = F.A.getUserProfile(l),
                    m = null != n ? F.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, ea.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, es.V7)({ userId: l, image: a, size: em }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, ea.us)({
                        userValue: g?.profileEffect,
                        guildValue: m?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, ea.us)({
                        userValue: g?.profileFrame,
                        guildValue: m?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: eg, guildId: K }),
        {
            isExpanded: ey,
            isAnimating: eN,
            transition: eP,
            handleExpand: eR,
            handleCollapse: eS,
            refs: { expandIconButtonRef: eD, expandTabButtonRef: eO, collapseButtonRef: eM },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: iz },
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
        ew = el && !ey,
        eL = el && (!ey || eN),
        { defaultWishlistId: e_ } = (0, s.cf)([F.A], () => ({ defaultWishlistId: F.A.getFirstWishlistId(l.id) }));
    (0, M.fw)({ wishlistId: e_, userId: l.id });
    let eG = (0, ev.fC)(),
        eV = ei && (!el || !q),
        eU = el && $,
        eF = X !== K || eU || null != eG.interactionType,
        eB = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, i_.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ed.default], () => ed.default.getCurrentUser())),
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
                c = (0, iG.A)(i.id),
                g = (0, iL.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = F.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? F.A.getWishlistSettings(i.id, p) : null,
                h = (x ? iw.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (f || A) && m.push({ text: ez.intl.string(ez.t.laViwx), section: tw.RP.WIDGETS }),
                m.push({ text: ez.intl.string(ez.t.chq59f), section: tw.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = L.A.isFriend(i.id),
                I = v?.visibility === iM.a.PUBLIC;
            return (
                (f || (!f && h && I && g && (!b || (b && j)))) &&
                    m.push({ text: ez.intl.string(ez.t["7lZ31J"]), section: tw.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, iV.A)(a), section: tw.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, iU.A)(d), section: tw.RP.MUTUAL_GUILDS })),
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
        eX = void 0 !== eC ? eC?.skuId : eK?.profileFrame?.skuId,
        eq = (0, N.A)(eX, "UserProfileModalV2"),
        { profileFrameStyle: eY, profileFrameClassName: eZ } = (0, P.A)(eX);
    (0, y.A)({ skuId: eK?.profileFrame?.skuId, openedAt: D, context: eW, analyticsLocations: eH });
    let e$ = G.Ay.useName(eK?.guildId, u, l),
        eJ = (0, k.GV)(),
        eQ = (0, s.bG)([w.A], () => (null != K ? w.A.getGuild(K) : null)),
        e0 = W
            ? null != eQ
                ? ez.intl.formatToPlainString(ez.t.M7OhOF, { guildName: eQ.name })
                : ez.intl.string(ez.t.egQPgM)
            : ez.intl.format(ez.t.KRe1Fk, { name: e$ });
    return (0, t.jsx)(I.f5, {
        value: eH,
        children: (0, t.jsx)(U.of, {
            value: eW,
            openedAt: D,
            fetchStartedAt: eK?.fetchStartedAt,
            fetchEndedAt: eK?.fetchEndedAt,
            isLoaded: eK?.isLoaded,
            children: (0, t.jsx)(ev.Hl, {
                value: eG,
                children: (0, t.jsx)(ex.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iB.zr, { [iB.QF]: eK?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eJ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tY, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iF.layoutContainer, eZ, {
                                        [iF.editingPanelEnabled]: el,
                                        [iF.editingPanelExpanded]: el && ey,
                                        [iF.isAnimating]: eN,
                                    }),
                                    style: eY,
                                    children: [
                                        (0, t.jsxs)(iY, {
                                            user: l,
                                            displayProfile: eK,
                                            pendingThemeColors: ep,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iB.Oo,
                                                    children: [
                                                        (0, t.jsx)(lx.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eJ, children: e0 }),
                                                        }),
                                                        eL &&
                                                            (0, t.jsx)(tv, {
                                                                buttonRef: eD,
                                                                onClick: eR,
                                                                className: iF.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                ew &&
                                                    (0, t.jsx)("div", {
                                                        className: iF.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tx, {
                                                            innerRef: eO,
                                                            onClick: eR,
                                                            className: iF.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                el &&
                                                    eP((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tN, {
                                                                  className: a()(iF.editingPanel, {
                                                                      [iF.isExpanded]: ey,
                                                                  }),
                                                                  selectedGuildId: X,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: Y,
                                                                  onClose: eS,
                                                                  collapseButtonRef: eM,
                                                                  isLoading: q,
                                                                  isEditingDisabled: $,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eT.A, {
                                                    className: a()(H, iB.A7, iF.profileContentOuter),
                                                    innerClassName: iF.profileContentInner,
                                                    user: l,
                                                    displayProfile: eK,
                                                    themeType: ec.d.MODAL_V2,
                                                    pendingThemeColors: ep,
                                                    isPrivate: eK?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iK, { displayProfile: eK, pendingBanner: eb }),
                                                        eK?.private === !0 && (0, t.jsx)(ek.A, {}),
                                                        !ei && (0, t.jsx)(t7, { className: iF.noticeContainer }),
                                                        eV &&
                                                            (0, t.jsx)("div", {
                                                                className: iF.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tF, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: ez.intl.string(ez.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Z
                                                                            ? ez.intl.string(ez.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Z,
                                                                    actionDisabled: !el && q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: iF.profileCardToastContainer,
                                                            children: (0, t.jsx)(eE.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tK, {
                                                            showScrim: eF,
                                                            showLoadingSpinner: q,
                                                            className: iF.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(iq, {
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
                                                                    bannerOverride: eb,
                                                                    accentColorOverride: ej,
                                                                    profileEffectOverride: eI,
                                                                    profileFrame: eq,
                                                                    allowEditing: eg,
                                                                    isLoading: q,
                                                                }),
                                                                (0, t.jsx)(tZ.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eK,
                                                                    guildId: K,
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
                            (0, t.jsx)(tE.A, { userId: l.id, guildId: K, className: iF.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
