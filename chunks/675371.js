n.d(l, { A: () => i$ });
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
    et = n(579950),
    ei = n(83931),
    er = n(920601),
    ea = n(903209),
    es = n(919395),
    eo = n(101058),
    ed = n(696451),
    eu = n(287809),
    ec = n(836602),
    eg = n(996988),
    em = n(985253);
let ef = (0, o.FT)(em.T[eg.d.MODAL_V2].avatarSize),
    ep = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function ex(e, l) {
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
    eh = n(679492),
    eA = n(718019),
    eb = n(795873),
    ej = n(915614),
    eI = n(744753),
    eC = n(834730);
function ey(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eC.E, { variant: "text-sm/normal", children: l });
}
var eN = n(361311),
    eE = n(931481),
    eP = n(439053),
    ek = n(743987),
    eR = n(312381),
    eS = n(501193),
    eT = n(383448),
    eD = n(946356),
    eO = n(983495),
    eM = n(280645),
    ew = n(109112),
    eL = n(939249),
    e_ = n(730134),
    eG = n(169869),
    eV = n(837057),
    eU = n(310419),
    eF = n(889227),
    eB = n(967198),
    ez = n(488995),
    eH = n(375708),
    eW = n(985176);
function eK(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eG.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eW.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(e_.A, { user: new eF.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(ew._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eW.Hd,
                children: [
                    (0, t.jsxs)(eL.D, {
                        className: eW.OB,
                        onClick: () => {
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
                                ? (0, t.jsx)(eC.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eC.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eC.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: eW.nk,
                                children: eH.intl.format(eH.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eW.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eX(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([K.default], () => K.default.locale),
        d = (0, s.bG)([eB.A], () => eB.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eW.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eW.FI,
                          children: (0, t.jsx)(eK, {
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
    eY = n(308244),
    eZ = n(81400),
    e$ = n(428262),
    eJ = n(84540),
    eQ = n(621466);
n(321073);
var e0 = n(219869),
    e1 = n(990078),
    e7 = n(775602),
    e2 = n(916315);
function e3(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
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
                !u || (null != m.current && (0, eQ.vq)(e.relatedTarget) && m.current.contains(e.relatedTarget)) || A();
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
function e5(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e2.L7,
            children: (0, t.jsx)(e0.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e1.m, { text: l, ariaHidden: !0, children: i });
}
function e8(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? c.E : p.i;
    return (0, t.jsxs)(eC.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: e2.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? e2.ik : e2.QW }), n],
    });
}
function e9(e) {
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
            className: a()(e2.LL, { [e2.JD]: y, [e2.xe]: N, [e2.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eC.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e2.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(eL.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": S,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e2.lD, children: (0, t.jsx)(e5, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e2.kL, { [e2.oE]: "compact" === c, [e2.c1]: "multiline" === c }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: e2.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e2.VH, children: T }),
                              k && "compact" !== c && (0, t.jsx)(e8, { id: I, message: P, type: E }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var e6 = n(786826);
function e4(e) {
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
                ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: v })
                : void 0) ?? b;
    return (0, t.jsx)(e9, {
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
        input: (0, t.jsx)(e6.f, {
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
let le = [
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
var ll = n(307731);
function ln(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        m = e$.Ay.canUsePremiumProfileCustomization(u),
        {
            value: f,
            previewValue: p,
            onCommit: x,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, eJ.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        v = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = e3(e),
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
                        (0, eQ.vq)(e.target) && !a(e.target) && t();
                    };
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let n = e.relatedTarget;
                    !(0, eQ.vq)(n) || a(n) || t();
                },
                [l, a, t],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: f, onCommit: x }),
        h = !(0, eq.uJ)(p),
        A = (0, s.bG)([ec.A], () => ec.A.getErrors(g)),
        b = (0, eZ.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * le.length)), le[e];
        }, []),
        y = c ? eH.intl.string(eH.t.yPJ9xr) : C.label();
    return !c || m
        ? (0, t.jsx)(e4, {
              ...v,
              preview: h ? (0, t.jsx)(eY.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eH.intl.string(eH.t.lO3n7a),
              label: eH.intl.string(eH.t["YWo+Zd"]),
              emojiPickerIntention: ll.EmojiIntention.PROFILE,
              maxLength: X.NA2,
              error: j,
              warning: I,
          })
        : h
          ? (0, t.jsx)(eY.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function lt(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eq.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(m.A, { children: (0, t.jsx)(f.H, { id: r, children: eH.intl.string(eH.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(ln, { displayProfile: l }) : (0, t.jsx)(eY.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var li = n(982168),
    lr = n(722868),
    la = n(822775),
    ls = n(982985),
    lo = n(700174),
    ld = n(34188),
    lu = n(564064),
    lc = n(23722),
    lg = n(993401);
function lm(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, lc.A)(() => {
            (0, lu.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lg.q3, {
        action: "VISIT_SHOP",
        icon: ld.U,
        tooltipText: eH.intl.string(eH.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var lf = n(573355),
    lp = n(102951);
function lx(e) {
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
        g = (0, lr.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, lp.J)({ userId: l.id }),
        x = m.length > 0 || f || p;
    return o === X.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lm, { onClose: d }),
                        (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(la.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lm, { onClose: d }),
                        (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === X.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lo.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === X.eA$.FRIEND || o === X.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lf.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === X.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ls.e, { userId: l.id, onClose: li.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lf.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lf.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(ls.l, { userId: l.id, onClose: li.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(lo.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lv = n(463156),
    lh = n(349288),
    lA = n(509434),
    lb = n(307301),
    lj = n(228366),
    lI = n(95561),
    lC = n(874490),
    ly = n(968309),
    lN = n(174459),
    lE = n(486020),
    lP = n(123917),
    lk = n(783419);
let lR = "User Profile Modal V2";
function lS(e) {
    let l = $.A.get(e);
    (0, ly.A)({ platformType: l.type, location: lR }),
        lN.default.track(X.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lR,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lT() {
    lj.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lS, stackingBehavior: "stack" });
}
function lD(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, W.An)(r[lk.pK.CREATED_AT], n),
        s = $.A.get((0, lC.ML)(l.type));
    return (0, t.jsx)(lM, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e1.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eC.E, { variant: "text-sm/normal", className: eW.GW, children: l.name }),
                  })
                : (0, t.jsx)(lh.Anchor, {
                      href: e,
                      className: eW.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eH.intl.string(eH.t.q5jLJB)}`
                              : `${l.name}, ${eH.intl.string(eH.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lI.zV)(X.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lP.h)({ href: e, trusted: s?.type !== X.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eW.vi,
                          children: [
                              (0, t.jsx)(e1.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eC.E, {
                                      variant: "text-sm/normal",
                                      className: eW.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lA.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === X.fg2.REDDIT
                ? (0, eG.xE)(r)
                : l.type === X.fg2.STEAM
                  ? (0, eG.dy)(r)
                  : l.type === X.fg2.BLUESKY || l.type === X.fg2.MASTODON || l.type === X.fg2.TWITTER
                    ? (0, eG.ED)(r)
                    : l.type === X.fg2.PAYPAL
                      ? (0, eG.gZ)(r)
                      : l.type === X.fg2.EBAY
                        ? (0, eG.ub)(r)
                        : l.type === X.fg2.TIKTOK
                          ? (0, eG.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lO(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lE.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lM, {
        renderAccountName: () =>
            (0, t.jsx)(e1.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eC.E, {
                    variant: "text-sm/normal",
                    className: eW.GW,
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
function lM(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: eW.FI,
        children: [
            (0, t.jsx)(e1.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eW.k_,
                    children: (0, t.jsx)("img", {
                        alt: eH.intl.formatToPlainString(eH.t.rtm15P, { name: i }),
                        className: a()(eW.tV, o ? eW.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eW.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eC.E, {
                                    variant: "text-xs/normal",
                                    children: eH.intl.format(eH.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eW.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lw(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([K.default], () => K.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eW.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eW.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lD, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lO, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eL.D, {
                    className: eW.qG,
                    onClick: lT,
                    children: [
                        (0, t.jsx)(lb.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eC.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eH.intl.string(eH.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lL = n(308186),
    l_ = n(193885),
    lG = n(408278),
    lV = n(890377),
    lU = n(789645),
    lF = n(534514),
    lB = n(821609),
    lz = n(403581),
    lH = n(194261),
    lW = n(689175),
    lK = n(517461),
    lX = n(13875),
    lq = n(783420),
    lY = n(252732),
    lZ = n(976860),
    l$ = n(975732),
    lJ = n(487233),
    lQ = n(120386),
    l0 = n(317097),
    l1 = n(602853),
    l7 = n(922016),
    l2 = n(508274),
    l3 = n(654107),
    l5 = n(930349);
function l8(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l1.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l3.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ec.A, F.A], () => ({
            pendingAccentColor: ec.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: F.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l0.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eJ.p)({ accentColor: e }), []);
    return (0, t.jsx)(l7.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l2.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l5.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eH.intl.string(eH.t["/X3fkf"]),
                accessibleValue: (0, l0.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l0.Hl)(c) } }),
            }),
    });
}
var l9 = n(450373),
    l6 = n(339984),
    l4 = n(111242);
function ne(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l4.o, style: { backgroundColor: l } });
}
function nl(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l4._ });
}
function nn(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l1.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l0.LX)(r),
        { hex: s } = (0, l9.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(nl, { src: o }) : (0, t.jsx)(ne, { backgroundColor: s });
}
function nt(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, z.Ay)(n, i),
        c = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()?.banner),
        m = (0, s.bG)([F.A], () =>
            null != i ? F.A.getGuildMemberProfile(n, i)?.banner : F.A.getUserProfile(n)?.banner,
        ),
        f = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = f && d && !p ? void 0 : c,
        v = (0, es.Ac)(c, m),
        h = d && null != g,
        A = v
            ? {
                  onClick: () => (0, lY.rM)(null, m, (e) => (0, eJ.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eH.intl.string(h ? eH.t.jHlJNS : eH.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l5.V, {
        affordance: A,
        variant: "square",
        onClick: () =>
            (0, lY.XD)({
                uploadType: l6.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eH.intl.string(eH.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == m)
                ? eH.intl.string(eH.t["3Xph0/"])
                : l
                  ? eH.intl.string(eH.t.keN7ib)
                  : eH.intl.string(eH.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nn, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var ni = n(913563),
    nr = n(898985),
    na = n(922301),
    ns = n(660184),
    no = n(259065),
    nd = n(864386),
    nu = n(283607);
let nc = "heading-lg/bold";
function ng(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nu.M,
        children:
            null != n
                ? (0, t.jsx)(eC.E, {
                      variant: nc,
                      children: (0, t.jsx)(ns.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? na.G.ANIMATED : na.G.STATIC,
                          textClassName: nu.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eC.E, { variant: nc, className: nu.W, color: "text-muted", children: l }),
    });
}
function nm(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([ed.Ay], () => (null != n ? (ed.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        c = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()?.globalName ?? null),
        g = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(null).pendingGlobalName),
        m = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, es.B0)(l, n ?? void 0),
        v = d ? p : f,
        h = void 0 !== x,
        A = null === x,
        b = d && null != f,
        j = (0, es.lw)({ pendingValue: x, userValue: f, guildValue: p, guildId: n ?? void 0 }),
        C = (e) => (null == e || "" === e ? void 0 : e),
        y = void 0 !== g ? g : c,
        N = d ? (C(void 0 !== m ? m : u) ?? C(y) ?? l.username) : (C(y) ?? l.username),
        E = h ? null != x : null != v,
        P =
            null != j && E
                ? {
                      onClick: () => (0, eJ.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(b ? eH.t.en3ogK : eH.t["Wqmi/h"]),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, no.L)({ analyticsLocations: o, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [o, n]);
    return (0, t.jsx)(l5.V, {
        affordance: (!A && (h || null != v)) || b ? P : "add",
        variant: "bar",
        onClick: k,
        accessibleLabel: eH.intl.string(eH.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eH.intl.string(eH.t["3Xph0/"]);
            let l = eH.intl.string((0, ni.A)(e.fontId)),
                n = eH.intl.string(nr.J[e.effectId] ?? nd.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eH.intl.formatToPlainString(eH.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(j),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(ng, { stylesPreview: j, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var nf = n(374654),
    np = n(366010),
    nx = n(736653),
    nv = n(674658),
    nh = n(617061),
    nA = n(203632),
    nb = n(536572);
let nj = new Set(),
    nI = 0;
var nC = n(993408),
    ny = n(841702),
    nN = n(515718),
    nE = n(195292);
let nP = (e) => {
    "" !== e.thumbnailPreviewSrc && (0, nN.NN)(e.thumbnailPreviewSrc).catch(() => {});
};
var nk = n(466681),
    nR = n(970389);
let nS =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nT =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nD(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nx.Ay)(),
        u = (0, np.M)(d) ? nS : nT,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, ny.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nC.wo)(r, t), [r, t]),
                s = (0, nE.A)({ enabled: l, isInteracting: n, items: a, preload: nP });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nI += 1), nj.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nk.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nk.QQ }),
                m?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nk.yY, { [nR.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nA.HL.FromStart,
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
function nO(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        c = (0, es.N2)({ user: l }),
        g = (0, es.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, es.nZ)(n ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        x = d && null != c,
        v = (0, es.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: h } = (0, nv.q)(v?.skuId),
        A = f ? null != m : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, eJ.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(x ? eH.t["SQy/Po"] : eH.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nh.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l5.V, {
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
        })({ profileEffectPreview: v, productName: (0, nb.VG)(h), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nD, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nM = n(515727),
    nw = n(746002);
let nL = (e) => {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nw.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nw.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nN.NN)(n).catch(() => {});
        });
};
var n_ = n(84391);
let nG = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nV(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nx.Ay)(),
        u = (0, np.M)(d) ? nS : nT,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, ny.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nC.MG)(r, t), [r, t]);
            return (0, nE.A)({ enabled: l, isInteracting: n, items: a, preload: nL });
        })({ enabled: n && !r && !o, isInteracting: s }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != f ? (0, P.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != f &&
                (0, t.jsx)("div", {
                    className: a()(n_.hm, x, { [nR.O]: m }),
                    style: p,
                    children: (0, t.jsx)(E.A, { frame: f, filterLayer: nG }),
                }),
            (0, t.jsx)("div", {
                className: a()(n_.ti, { [n_.yT]: null == f }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: n_.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nU(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
        u = (0, es.Xf)({ user: l }),
        c = (0, es.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, es.Tu)(n ?? void 0),
        m = void 0 !== g,
        f = null === g || (!m && null == c),
        p = o && null != u,
        x = (0, es.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: v } = (0, nv.q)(x?.skuId),
        h = m ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, eJ.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(p ? eH.t.j6hZyM : eH.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nM.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l5.V, {
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
        })({ profileFramePreview: x, productName: (0, nb.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nV, {
                profileFramePreview: x,
                isEmpty: f,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nF = n(684732),
    nB = n(498596),
    nz = n(298387);
function nH(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l0.Hl)(l),
        m = (0, l0.bJ)(l, 0xffffff) < nB.Tr.NonText;
    return (0, t.jsx)(l7.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l2.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eL.D, {
                ...n,
                innerRef: c,
                className: nz.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nz.Hy, { [nz.rY]: m }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nW(e) {
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
        c = (0, l0.Hl)(l),
        g = (0, l0.Hl)(n),
        m = `linear-gradient(to bottom, ${c}, ${g})`,
        f = eH.intl.formatToPlainString(eH.t.FquTfm, { colorLabel: c }),
        p = eH.intl.formatToPlainString(eH.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l5.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nz.D7,
            style: { background: m },
            children: [
                (0, t.jsx)(nH, { color: l, suggestedColors: s, ariaLabel: f, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nH, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nK(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ec.A, F.A], () => {
            let e = ec.A.getPendingChanges(n ?? void 0),
                t = F.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (F.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, eo.V7)({ userId: l.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, q.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l1.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, l3.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eJ.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nF.l)(d, o)
                ? {
                      onClick: () => (0, eJ.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eH.intl.string(eH.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, t.jsx)(nW, {
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
var nX = n(315629),
    nq = n(788868),
    nY = n(235684);
function nZ() {
    let e = i.useCallback(() => {
            (0, lZ.pX)(X.BVt.NITRO_HOME), (0, l$.closeUserProfileModal)();
        }, []),
        l = (0, lc.A)(e);
    return (0, t.jsx)(lq.A, {
        subscriptionTier: nq.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)(nX.h, {
                color: "nitro-pink",
                className: nY.U,
                children: [
                    (0, t.jsx)(eC.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eH.intl.format(eH.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lB.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lz.t,
                        text: eH.intl.string(eH.t.pj0XBN),
                        onClick: n,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var n$ = n(55619),
    nJ = n(942308);
function nQ() {
    return (0, t.jsxs)("div", {
        className: nJ.k,
        children: [
            (0, t.jsx)(eC.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eH.intl.string(eH.t.JFY17v),
            }),
            (0, t.jsx)(lB.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eH.intl.string(eH.t.R9GHya),
                onClick: () => n$.A.setEnabled(!1),
            }),
        ],
    });
}
var n0 = n(847374),
    n1 = n(111159),
    n7 = n(548118),
    n2 = n(711014),
    n3 = n(540637),
    n5 = n(801461),
    n8 = n(44482),
    n9 = n(844222),
    n6 = n(561392),
    n4 = n(716263),
    te = n(15626),
    tl = n(930856);
function tn(e) {
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
            let { reducedMotion: e } = i.useContext(n9.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, n6.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, n4.DL)(o, {
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
        y = i.useContext(te._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, n5.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        M = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, n5.fI)(e.value, [n])), [n, l]),
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
        { activeIndex: F, handleKeyDown: B } = (0, n3.l)(!0, l),
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
                    className: a()(tl.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(n3.q, {
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
var tt = n(138325);
let ti = "MAIN_PROFILE";
function tr(e) {
    let { guild: l } = e;
    return (0, t.jsx)(n7.Ay, { className: tt.$f, guild: l, size: n7.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function ta(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tt.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tt.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tt.qL,
                children: [
                    (0, t.jsx)(eC.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eC.E, {
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
function ts(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eL.D, {
        innerRef: r,
        className: a()(tt.L5, { [tt.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eC.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tt.v9,
                children: n,
            }),
            (0, t.jsx)(n0.a, {
                className: tt.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function to(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([n2.Ay], () => n2.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([w.A], () => w.A.getGuilds()),
        c = (0, s.bG)([eB.A], () => {
            let e = eB.A.getGuildId();
            return null == e || ec._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ed.Ay, n2.Ay], () => {
            let e = {};
            for (let l of n2.Ay.getFlattenedGuildIds()) {
                let n = ed.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: ti,
                    label: eH.intl.string(eH.t["2p07FR"]),
                    value: ti,
                    leading: (0, t.jsx)(n1.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tr, { guild: n }),
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
                          leading: (0, t.jsx)(tr, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        f = l ?? ti,
        p = m.find((e) => e.value === f) ?? m[0],
        v = i.useCallback(
            (e) => {
                let n = e === ti ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tn, {
        className: tt.kL,
        label: eH.intl.string(eH.t.rki38K),
        listboxClassName: tt.yt,
        options: m,
        value: f,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(ta, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(ts, { leading: p.value === ti ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var td = n(809467);
let tu = "profile-modal-editing-panel",
    tc = "profile-modal-editing-panel-heading",
    tg = "profile-editing-nameplate-error",
    tm = "profile-editing-avatar-error",
    tf = "profile-editing-avatar-decoration-error",
    tp = "profile-editing-banner-error",
    tx = "profile-editing-display-name-style-error";
function tv(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e1.m, {
        text: eH.intl.string(eH.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eL.D, {
            innerRef: i,
            "aria-label": eH.intl.string(eH.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": tu,
            className: a()(td.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(l_.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function th(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e1.m, {
            text: eH.intl.string(eH.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lG.K, {
                buttonRef: i,
                "aria-label": eH.intl.string(eH.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": tu,
                icon: l_.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function tA(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e1.m, {
        text: eH.intl.string(eH.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eL.D, {
            innerRef: n,
            className: td.cS,
            "aria-label": eH.intl.string(eH.t["l/A351"]),
            onClick: l,
            "aria-controls": tu,
            "aria-expanded": !0,
            children: (0, t.jsx)(lV.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tb() {
    let [e, l] = (0, lK.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: td.X6,
              children: [
                  (0, t.jsx)(eC.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eH.intl.string(eH.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eL.D, {
                      "aria-label": eH.intl.string(eH.t.rSe9ra),
                      className: td.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lU.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tj() {
    let e = i.useCallback(() => {
            (0, lZ.pX)(X.BVt.NITRO_HOME), (0, l$.closeUserProfileModal)();
        }, []),
        l = (0, lc.A)(e);
    return (0, t.jsx)(lq.A, {
        subscriptionTier: nq.pe.TIER_2,
        children: (e) => {
            let { onClick: n } = e;
            return (0, t.jsxs)("div", {
                className: td.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: td.tm,
                        children: [
                            (0, t.jsx)(lF.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eH.intl.string(eH.t.bO0TOe),
                            }),
                            (0, t.jsx)(eC.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eH.intl.format(eH.t["3PujdE"], { onClick: l }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lB.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lz.t,
                        text: eH.intl.string(eH.t["7IWwak"]),
                        onClick: n,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: td.D0,
                        children: (0, t.jsx)("div", { className: td.ZN, children: (0, t.jsx)(lH.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tI() {
    return (0, t.jsx)(eC.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: td.BJ,
        "aria-hidden": !0,
        children: eH.intl.format(eH.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lz.t, { size: "xxs", color: "currentColor", className: td.qp }),
        }),
    });
}
function tC(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: td.Os,
        children: [
            (0, t.jsxs)("div", {
                className: td.AM,
                children: [
                    (0, t.jsx)(lF.D, {
                        className: td.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e1.m, {
                            text: eH.intl.string(eH.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lz.t, {
                                className: td.l3,
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
function ty(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: td.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eC.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function tN(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lL.animated.div, { className: td.HT, style: e, children: (0, t.jsx)(nZ, {}) }) : null,
    );
}
function tE(e) {
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
        p = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()),
        x = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && e$.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lX.sk)("UserProfileModalV2EditingPanel"),
        C = (0, s.bG)([ec.A], () => ec.A.getErrors(l)),
        y = C.nameplate?.[0] ?? C.nameplate_sku_id?.[0],
        N = C.avatar?.[0],
        E = C.avatar_decoration_sku_id?.[0],
        P = C.banner?.[0],
        k = C.display_name_font_id?.[0] ?? C.display_name_effect_id?.[0] ?? C.display_name_colors?.[0],
        R = (0, lc.A)(r),
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
              id: tu,
              "aria-labelledby": tc,
              className: a()(td.nd, { [td.VU]: j && !x }, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: td.l$,
                  children: [
                      (0, t.jsx)(m.A, {
                          children: (0, t.jsx)(f.H, { id: tc, children: eH.intl.string(eH.t["L+ch00"]) }),
                      }),
                      (0, t.jsxs)("div", {
                          className: td.wx,
                          children: [
                              (0, t.jsx)(tA, { innerRef: g, onClick: u }),
                              (0, t.jsx)(to, {
                                  selectedGuildId: l ?? null,
                                  originGuildId: n,
                                  onChange: R,
                                  loading: o,
                                  disabled: x,
                              }),
                          ],
                      }),
                      x
                          ? (0, t.jsx)(nQ, {})
                          : (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)(f.F, {
                                        children: (0, t.jsxs)(lW.zC, {
                                            ref: S,
                                            className: a()(td.XG, { [td.uH]: O }),
                                            onScroll: D,
                                            children: [
                                                h && (A ? (0, t.jsx)(tb, {}) : (0, t.jsx)(tj, {})),
                                                A && (0, t.jsx)(tI, {}),
                                                (0, t.jsxs)(tC, {
                                                    heading: eH.intl.string(eH.t.x5CoXR),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nf.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != y ? tg : void 0,
                                                        }),
                                                        (0, t.jsx)(ty, { id: tg, message: y }),
                                                    ],
                                                }),
                                                (0, t.jsxs)(tC, {
                                                    heading: eH.intl.string(eH.t["50Nwpc"]),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(lJ.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != N ? tm : void 0,
                                                        }),
                                                        (0, t.jsx)(lQ.A, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            errorMessageId: null != E ? tf : void 0,
                                                        }),
                                                        (0, t.jsx)(ty, { id: tm, message: (0, lY.d3)(N) }),
                                                        (0, t.jsx)(ty, { id: tf, message: E }),
                                                    ],
                                                }),
                                                (A || h) &&
                                                    (0, t.jsxs)(tC, {
                                                        heading: eH.intl.string(eH.t.NEzEws),
                                                        disabled: v || j,
                                                        showNitroIcon: !0,
                                                        children: [
                                                            (0, t.jsx)(nm, {
                                                                user: p,
                                                                guildId: l,
                                                                disabled: v || j,
                                                                errorMessageId: null != k ? tx : void 0,
                                                            }),
                                                            (0, t.jsx)(ty, { id: tx, message: k }),
                                                        ],
                                                    }),
                                                A || h
                                                    ? (0, t.jsxs)(tC, {
                                                          heading: eH.intl.string(eH.t.Zenogr),
                                                          disabled: v || j,
                                                          showNitroIcon: !0,
                                                          children: [
                                                              (0, t.jsx)(nK, {
                                                                  user: p,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                              }),
                                                              (0, t.jsx)(nt, {
                                                                  userId: p.id,
                                                                  guildId: l,
                                                                  disabled: v || !A,
                                                                  errorMessageId: null != P ? tp : void 0,
                                                              }),
                                                              (0, t.jsx)(ty, { id: tp, message: (0, lY.d3)(P) }),
                                                          ],
                                                      })
                                                    : (0, t.jsx)(tC, {
                                                          heading: eH.intl.string(eH.t["/X3fkf"]),
                                                          disabled: v || j,
                                                          children: (0, t.jsx)(l8, { user: p, disabled: v }),
                                                      }),
                                                (0, t.jsxs)(tC, {
                                                    heading: eH.intl.string(I ? eH.t["Vfbar/"] : eH.t.wR5wOo),
                                                    disabled: v || j,
                                                    children: [
                                                        (0, t.jsx)(nO, {
                                                            user: p,
                                                            guildId: l,
                                                            disabled: v || j,
                                                            variant: I ? "square" : "full-height-bar",
                                                        }),
                                                        I && (0, t.jsx)(nU, { user: p, guildId: l, disabled: v || j }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    b && (0, t.jsx)(tN, { isDismissed: T }),
                                ],
                            }),
                  ],
              }),
          });
}
var tP = n(982599),
    tk = n(347805),
    tR = n(629403),
    tS = n(612630),
    tT = n(260598);
function tD(e) {
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
        C = null != h && (l ? r : n).length > h ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e9, {
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
        input: (0, t.jsx)(tT.f, {
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
var tO = n(673451);
function tM(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tS.A)(l),
        [c, g] = i.useState(),
        [m, f] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    f(void 0), g(e), a?.();
                    try {
                        await tR.A.updateNote(l, e);
                    } catch {
                        f(eH.intl.string(eH.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        v = d && null == p,
        h = e3({ value: p ?? "", onCommit: x, disabled: v }),
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
            ? (0, t.jsx)(eC.E, { variant: "text-sm/normal", color: "text-default", className: tO.t, children: p })
            : null;
    return (0, t.jsx)(tD, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eH.intl.string(eH.t.PbMNh2),
        label: eH.intl.string(eH.t.PbMNh2),
        placeholder: v ? eH.intl.string(eH.t["WLKx/9"]) : eH.intl.string(eH.t.VBhOe2),
        maxLength: X.T7x,
        rows: 3,
        disabled: v,
        error: m,
    });
}
var tw = n(83013),
    tL = n(518477),
    t_ = n(77085);
function tG(e) {
    let { userId: l } = e,
        n = (0, ev.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, B.X)("UserProfileModalV2NotesSection"),
        a = r ? tM : tk.A;
    return (0, t.jsx)(tw.A, {
        heading: eH.intl.string(eH.t["mQKv+v"]),
        scrollTargetId: tL.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? t_.N : t_.w,
            autoFocus: n === tL.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tV = n(123292),
    tU = n(921701),
    tF = n(861173);
function tB(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tU.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tF.oR, tU.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tU.Kk, children: l }),
                    (0, t.jsx)(eC.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tU.hP,
                            children: (0, t.jsx)(tV.Q, {
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
var tz = n(765178),
    tH = n(346055),
    tW = n(289873),
    tK = n(984180);
function tX(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tz.O.announce(eH.intl.string(eH.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tH.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tK.f, l && tK.z),
                    children: n && (0, t.jsx)(tW.y, { type: tW.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tq = n(568602),
    tY = n(625494);
function tZ(e) {
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
                tY._.subscribe(X.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    tY._.unsubscribe(X.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tq.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var t$ = n(515054),
    tJ = n(933832),
    tQ = n(972213),
    t0 = n(97483),
    t1 = n(606758);
let t7 = {
        [tL.jM.WIDGET_ADDED]: {
            message: eH.intl.string(eH.t.fFP1Uy),
            icon: (0, t.jsx)(tJ.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tL.jM.WIDGET_REMOVED]: {
            message: eH.intl.string(eH.t.zzsK7h),
            icon: (0, t.jsx)(tJ.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tL.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eH.intl.string(eH.t["84MExs"]),
            icon: (0, t.jsx)(tQ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t0.Ck.FAILURE,
        },
        [tL.jM.SOMETHING_WENT_WRONG]: {
            message: eH.intl.string(eH.t.F8FvUy),
            icon: (0, t.jsx)(tQ.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t0.Ck.FAILURE,
        },
    },
    t2 = (e) => {
        let { className: l } = e,
            n = (0, t1.fu)(),
            r = (0, s.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(t7[n]), tz.O.announce(t7[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, t1.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, t1.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lL.animated.div, { className: l, style: e, children: (0, t.jsx)(tB, { ...u }) }),
                ),
            })
        );
    };
var t3 = n(297413),
    t5 = n(878555),
    t8 = n(576705),
    t9 = n(292666);
function t6(e) {
    let { isEditing: l, inputRef: n, ...t } = e3(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function t4(e) {
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
    return (0, t.jsx)(t9.k, {
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
function ie(e) {
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
                ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        N = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e9, {
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
        input: (0, t.jsx)(t4, {
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
var il = n(35783);
let it = (e) => (null == e || "" === e ? void 0 : e);
function ii(e) {
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
        j = e$.Ay.canUsePremiumProfileCustomization(p),
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
        (r = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ed.Ay], () => (null != l ? (ed.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (m = it(c) ?? it(r) ?? p.username),
        (f = it(c) ?? p.username),
        {
            value: g,
            previewValue: n ? m : f,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, eJ.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, eJ.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        k = t6({ value: N, onCommit: P, disabled: !C }),
        { isEditing: R, handleCommit: S } = k,
        T = (0, s.bG)([ec.A], () => ec.A.getErrors(b ?? null)),
        D = (0, eZ.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        M = D?.nick?.[0],
        L = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        _ = eH.intl.string(A ? eH.t.mq6Cg9 : eH.t.XuZU7A),
        G = A ? eH.intl.string(eH.t.YcDKr8) : p.username,
        V = eH.intl.string(A ? eH.t["g7OSZ/"] : eH.t.kyfzzc),
        U = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && S(),
                    (0, no.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, S, h, b],
        ),
        B = {
            icon: l_.V,
            tooltip: eH.intl.string(eH.t.lqKKI2),
            "aria-label": eH.intl.string(eH.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: F,
            buttonRef: U,
        },
        z =
            A && !C && y
                ? (0, t.jsx)(e1.m, {
                      text: eH.intl.string(eH.t.gzjxQi),
                      children: (0, t.jsx)(eL.D, {
                          tag: "span",
                          className: il.C,
                          children: (0, t.jsx)(lH.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eH.intl.string(eH.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != E
                ? (0, t.jsx)(t5.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: L,
                      className: il.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(ie, {
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
var ir = n(469432);
function ia(e) {
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
        (r = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, eJ.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = t6({ value: c, onCommit: m }),
        { isEditing: p } = f,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eH.intl.string(x ? eH.t.AXiE0i : eH.t["76Aqhl"]);
    return (0, t.jsx)(ie, {
        ...f,
        size: "compact",
        className: a()(ir.k, p && ir.J),
        preview: v ? (0, t.jsx)(t5.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eH.intl.string(eH.t.h6VAO7),
        label: eH.intl.string(eH.t["rniRE+"]),
        placeholder: h,
        maxLength: X.VE5,
    });
}
var is = n(145497),
    io = n(685073),
    id = n(318785),
    iu = n(534400),
    ic = n(743981),
    ig = n(724637),
    im = n(329296);
let ip = "no-server-tag";
function ix(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eL.D, {
        innerRef: l,
        className: a()(ig.L5, { [ig.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eC.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: ig.W3,
            tag: "span",
            children: [
                o
                    ? eH.intl.string(eH.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  iu.Z9,
                                  {
                                      src: (0, io.gC)(n, r, ic.Sl.SIZE_14),
                                      size: ic.Sl.SIZE_14,
                                      className: ig.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, io.gC)(n, r, ic.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(n0.a, { size: "xs", color: "currentColor", className: ig.u4 }),
            ],
        }),
    });
}
function iv() {
    let e = (0, id.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([eu.default], () => {
            let e = eu.default.getCurrentUser();
            return (0, io.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ip
                    ? (0, t.jsx)("div", {
                          className: im.uN,
                          children: (0, t.jsx)(eC.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ig.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(n8.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ip, label: eH.intl.string(eH.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(is.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(iu.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        m = i.useCallback((e) => {
            (0, eJ.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(tn, {
              options: g,
              value: a,
              onSelectionChange: m,
              label: eH.intl.string(eH.t.Pdd1nd),
              listboxClassName: ig.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ix, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var ih = n(874644);
function iA(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(t5.Ay, {
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
        : (0, t.jsx)(t3.A, {
              user: l,
              forceUsername: !0,
              className: ih.a1,
              usernameClass: ih.eb,
              discriminatorClass: ih.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(ii, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(ih.AK, ih.j6),
                children: [d, (0, t.jsx)(t5.Ce, {}), (0, t.jsx)(ia, { displayProfile: n }), (0, t.jsx)(iv, {}), r],
            }),
        ],
    });
}
var ib = n(97808),
    ij = n(980707),
    iI = n(477782),
    iC = n(22231),
    iy = n(601255),
    iN = n(562819),
    iE = n(19575),
    iP = n(106106),
    ik = n(338165);
let iR = iE.Ay.getEnableHardwareAcceleration() ? ib.Js : ib.eu;
function iS(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ij.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eH.intl.string(eH.t.YAgq3W),
        children: (0, t.jsx)(iI.rX, { children: n }),
    });
}
function iT(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eA.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([ed.Ay], () => (null != n ? ed.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                m = (0, es.z5)(c, g),
                f = d && null != l.avatar,
                p = e$.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([w.A], () => (null != n ? w.A.getGuild(n) : null)),
                A = (0, es.a4)({ user: l }),
                b = (0, es.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, es.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, iy.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lY.XD)({
                            uploadType: l6.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, iN.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lY.rM)(null, g, (e) => (0, eJ.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, es.WU)(f ? "reset" : "remove");
                }, [r, n, g, f]),
                R = i.useCallback(() => {
                    r(), (0, eJ.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iI.Dr,
                                { id: "change-avatar", label: eH.intl.string(eH.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                iI.Dr,
                                { id: "change-decoration", label: eH.intl.string(eH.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            f
                                ? (0, t.jsx)(
                                      iI.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      iI.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.twB3fz),
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
                                      iI.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      iI.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["9rx5GO"]),
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
        ? (0, t.jsx)(eA.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(iP.my, iP.vk, ik.kL, { [ik.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(iR, { ...r, imageClassName: a()(iP.Lw, ik.HU) }),
                  (0, t.jsx)(l7.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l7.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(iS, { ...e, items: m, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: ik.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iC.R,
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
var iD = n(976726);
function iO(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(ij.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eH.intl.string(eH.t.FzU73A),
        children: (0, t.jsx)(iI.rX, { children: n }),
    });
}
function iM(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = (0, es.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, es.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, es.Xf)({ user: l, guildId: void 0 }),
                g = (0, lX.sk)("UserProfileModalV2EditableBanner"),
                m = e$.Ay.canUsePremiumProfileCustomization(l),
                f = null == n,
                p = f || m,
                x = g && (f || m),
                v = null != n,
                {
                    pendingBanner: h,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ec.A], () => ec.A.getPendingChanges(n ?? void 0)),
                j = (0, s.bG)([F.A], () =>
                    null != n ? F.A.getGuildMemberProfile(l.id, n)?.banner : F.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([F.A], () => F.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, es.Ac)(h, j),
                k = v && C,
                R = v && y,
                S = v && E,
                T = void 0 === A ? null != d : null != A,
                D = void 0 === b ? null != u : null != b,
                O = (0, es.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                M = (0, N.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                L = i.useCallback(() => {
                    r(),
                        (0, lY.XD)({
                            uploadType: l6.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, nh.W)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, lY.rM)(null, j, (e) => (0, eJ.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, eJ.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nM.w)({
                            analyticsLocations: o,
                            guild: null != n ? (w.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: M,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, M]),
                B = i.useCallback(() => {
                    r(), (0, eJ.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                iI.Dr,
                                { id: "change-banner", label: eH.intl.string(eH.t.N0bC3P), action: L },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                iI.Dr,
                                { id: "change-effect", label: eH.intl.string(eH.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iI.Dr,
                                { id: "change-frame", label: eH.intl.string(eH.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      iI.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      iI.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.tT9n7D),
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
                                      iI.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      iI.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.zUOlT6),
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
                                      iI.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      iI.Dr,
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
            }, [k, m, p, x, R, S, P, T, D, L, _, U, G, V, B]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(ej.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(iD.kL, { [iD.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(ej.A, { ...e, className: iD.Pr }),
                  (0, t.jsx)(l7.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l7.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(iO, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: iD.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iC.R,
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
var iw = n(777480),
    iL = n(107563),
    i_ = n(570287);
n(938796);
var iG = n(913453),
    iV = n(667049),
    iU = n(837531),
    iF = n(186272),
    iB = n(645625),
    iz = n(337796);
let iH = (e) => e * (2 - e),
    iW = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    iK = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function iX(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, Y.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                ex(n, 1024)
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
        : (0, t.jsx)("div", { className: iB.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iq(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nj.add(e), () => nj.delete(e)),
            () => nI,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function iY(e) {
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
            allowEditing: k,
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
    let q = null != F ? iW[F] : void 0,
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
        ec = (0, Z.A)(o.id),
        em = eu.length > 0 || ed.length > 0,
        ef = ec.length > 0,
        ep = k ? iM : ej.A,
        ex = k ? iT : eA.A;
    return (0, t.jsxs)("main", {
        className: a()(iB.profile, null != F && iB[F]),
        ref: G,
        "aria-busy": M,
        children: [
            (0, t.jsxs)("div", {
                className: iB.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iB.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: g,
                            themeType: eg.d.MODAL_V2,
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
                        themeType: eg.d.MODAL_V2,
                        specOverrides: q,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                    }),
                    (0, t.jsx)(eO.A, {
                        user: o,
                        guildId: g,
                        channelId: f,
                        themeType: eg.d.MODAL_V2,
                        hasEntered: v,
                        prompt: w ? Y : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: iB.profileBody,
                children: [
                    (0, t.jsx)(iA, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(eb.A, { displayProfile: p, themeType: eg.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: k,
                    }),
                    et === X.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: iB.profileOverlay,
                            children: (0, t.jsx)(eE.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: iB.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eD.A.Overlay,
                            {
                                className: iB.profileOverlay,
                                children: (0, t.jsx)(eE.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: iB.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: iB.profileOverlay,
                            children: (0, t.jsx)(tw.A, {
                                heading: eH.intl.string(eH.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iB.profileBanner,
                                children: (0, t.jsx)(O.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eT.A, { user: o, className: iB.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: iB.profileOverlay,
                            children: (0, t.jsx)(eS.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: iB.profileButtons,
                        children: (0, t.jsx)(lx, {
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
                    w && (0, t.jsx)(eI.A, { isPremiumUser: (0, V.ki)(d), onInteraction: b }),
                    !ea && (0, t.jsx)(lt, { displayProfile: p, isEditable: k }),
                    es.length > 0 &&
                        (0, t.jsx)(tw.A, {
                            heading: eH.intl.string(eH.t["Uv/eTx"]),
                            children: (0, t.jsx)(eN.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(tw.A, {
                        heading: eH.intl.string(eH.t.a6XYD9),
                        children: (0, t.jsx)(ek.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: tL.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(tw.A, {
                            heading: eH.intl.string(eH.t.wlTO8v),
                            children: (0, t.jsx)(ey, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eM.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: iB.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (k || em) &&
                        (0, t.jsx)(tw.A, {
                            heading: eH.intl.string(eH.t["3fe7U5"]),
                            scrollTargetId: tL.bk.CONNECTIONS,
                            children: (0, t.jsx)(lw, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: k,
                                className: iB.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        ef &&
                        (0, t.jsx)(tw.A, {
                            heading: eH.intl.string(eH.t.PHjkRE),
                            scrollTargetId: tL.bk.APPS,
                            children: (0, t.jsx)(eX, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: iB.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tG, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(iq, { displayProfile: p, profileEffectOverride: N, isHovering: U }),
            null != P && (0, t.jsx)(E.A, { frame: P, filterLayer: iK }),
        ],
    });
}
function iZ(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, q.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, er.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function i$(e) {
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
                        (0, ea.A)(l, void 0, {
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
        el = (0, et.A)(l.id) && Q,
        en = (0, ei.W)(l.id),
        er = $ && !en,
        em = el && !ee && !$,
        {
            pendingThemeColors: ex,
            avatarDecorationOverride: eA,
            avatarOverride: eb,
            bannerOverride: ej,
            accentColorOverride: eI,
            profileEffectOverride: eC,
            profileFrameOverride: ey,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([ec.A, eu.default, ed.Ay, F.A], () => {
                if (!t) return ep;
                let e = eu.default.getUser(l);
                if (null == e) return ep;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = ec.A.getPendingChanges(n),
                    c = null != n ? ed.Ay.getMember(n, l) : null,
                    g = F.A.getUserProfile(l),
                    m = null != n ? F.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, es.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, eo.V7)({ userId: l, image: a, size: ef }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, es.us)({
                        userValue: g?.profileEffect,
                        guildValue: m?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, es.us)({
                        userValue: g?.profileFrame,
                        guildValue: m?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: em, guildId: K }),
        {
            isExpanded: eN,
            isAnimating: eE,
            transition: ek,
            handleExpand: eS,
            handleCollapse: eT,
            refs: { expandIconButtonRef: eO, expandTabButtonRef: eM, collapseButtonRef: ew },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: iH },
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
        eL = el && !eN,
        e_ = el && (!eN || eE),
        { defaultWishlistId: eG } = (0, s.cf)([F.A], () => ({ defaultWishlistId: F.A.getFirstWishlistId(l.id) }));
    (0, M.fw)({ wishlistId: eG, userId: l.id });
    let eV = (0, eh.fC)(),
        eU = er && (!el || !q),
        eF = el && $,
        eB = X !== K || eF || null != eV.interactionType,
        ez = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iG.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([eu.default], () => eu.default.getCurrentUser())),
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
                c = (0, iV.A)(i.id),
                g = (0, i_.A)(i.id),
                m = [],
                f = i.id === r?.id,
                p = (0, et.A)(i.id),
                x = F.A.getFirstWishlistId(i.id),
                v = null != x,
                h = v ? F.A.getWishlistSettings(i.id, x) : null,
                A = (v ? iL.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && m.push({ text: eH.intl.string(eH.t.laViwx), section: tL.RP.WIDGETS }),
                m.push({ text: eH.intl.string(eH.t.chq59f), section: tL.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = L.A.isFriend(i.id),
                C = h?.visibility === iw.a.PUBLIC;
            return (
                (f || (!f && A && C && g && (!j || (j && I)))) &&
                    m.push({ text: eH.intl.string(eH.t["7lZ31J"]), section: tL.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (m.push({ text: (0, iU.A)(a), section: tL.RP.MUTUAL_FRIENDS }),
                    m.push({ text: (0, iF.A)(d), section: tL.RP.MUTUAL_GUILDS })),
                m
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eW } = (0, I.Ay)([...V, j.A.USER_PROFILE_MODAL_V2]),
        eK = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: K,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eX = (0, z.Ay)(l.id, K),
        eq = void 0 !== ey ? ey?.skuId : eX?.profileFrame?.skuId,
        eY = (0, N.A)(eq, "UserProfileModalV2"),
        { profileFrameStyle: eZ, profileFrameClassName: e$ } = (0, P.A)(eq);
    (0, y.A)({ skuId: eX?.profileFrame?.skuId, openedAt: D, context: eK, analyticsLocations: eW });
    let eJ = G.Ay.useName(eX?.guildId, u, l),
        eQ = (0, k.GV)(),
        e0 = (0, s.bG)([w.A], () => (null != K ? w.A.getGuild(K) : null)),
        e1 = W
            ? null != e0
                ? eH.intl.formatToPlainString(eH.t.M7OhOF, { guildName: e0.name })
                : eH.intl.string(eH.t.egQPgM)
            : eH.intl.format(eH.t.KRe1Fk, { name: eJ });
    return (0, t.jsx)(I.f5, {
        value: eW,
        children: (0, t.jsx)(U.of, {
            value: eK,
            openedAt: D,
            fetchStartedAt: eX?.fetchStartedAt,
            fetchEndedAt: eX?.fetchEndedAt,
            isLoaded: eX?.isLoaded,
            children: (0, t.jsx)(eh.Hl, {
                value: eV,
                children: (0, t.jsx)(ev.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iz.zr, { [iz.QF]: eX?.private === !0 }),
                        transitionState: S,
                        "aria-labelledby": eQ,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(tZ, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iB.layoutContainer, e$, {
                                        [iB.editingPanelEnabled]: el,
                                        [iB.editingPanelExpanded]: el && eN,
                                        [iB.isAnimating]: eE,
                                    }),
                                    style: eZ,
                                    children: [
                                        (0, t.jsxs)(iZ, {
                                            user: l,
                                            displayProfile: eX,
                                            pendingThemeColors: ex,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iz.Oo,
                                                    children: [
                                                        (0, t.jsx)(lv.A, { isCurrentUser: W, onClose: O }),
                                                        (0, t.jsx)(m.A, {
                                                            children: (0, t.jsx)(f.H, { id: eQ, children: e1 }),
                                                        }),
                                                        e_ &&
                                                            (0, t.jsx)(th, {
                                                                buttonRef: eO,
                                                                onClick: eS,
                                                                className: iB.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eL &&
                                                    (0, t.jsx)("div", {
                                                        className: iB.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tv, {
                                                            innerRef: eM,
                                                            onClick: eS,
                                                            className: iB.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(f.F, {
                                            children: [
                                                el &&
                                                    ek((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tE, {
                                                                  className: a()(iB.editingPanel, {
                                                                      [iB.isExpanded]: eN,
                                                                  }),
                                                                  selectedGuildId: X,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: Y,
                                                                  onClose: eT,
                                                                  collapseButtonRef: ew,
                                                                  isLoading: q,
                                                                  isEditingDisabled: $,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eD.A, {
                                                    className: a()(H, iz.A7, iB.profileContentOuter),
                                                    innerClassName: iB.profileContentInner,
                                                    user: l,
                                                    displayProfile: eX,
                                                    themeType: eg.d.MODAL_V2,
                                                    pendingThemeColors: ex,
                                                    isPrivate: eX?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iX, { displayProfile: eX, pendingBanner: ej }),
                                                        eX?.private === !0 && (0, t.jsx)(eR.A, {}),
                                                        !er && (0, t.jsx)(t2, { className: iB.noticeContainer }),
                                                        eU &&
                                                            (0, t.jsx)("div", {
                                                                className: iB.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tB, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eH.intl.string(eH.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Z
                                                                            ? eH.intl.string(eH.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Z,
                                                                    actionDisabled: !el && q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: iB.profileCardToastContainer,
                                                            children: (0, t.jsx)(eP.A, { userId: l.id, onClose: O }),
                                                        }),
                                                        (0, t.jsxs)(tX, {
                                                            showScrim: eB,
                                                            showLoadingSpinner: q,
                                                            className: iB.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(iY, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: K,
                                                                    channelId: u,
                                                                    displayProfile: eX,
                                                                    nickname: eJ,
                                                                    originGuildId: o,
                                                                    hasEntered: S === v.ip.ENTERED,
                                                                    customStatusPrompt: T,
                                                                    onClose: O,
                                                                    avatarDecorationOverride: eA,
                                                                    avatarOverride: eb,
                                                                    bannerOverride: ej,
                                                                    accentColorOverride: eI,
                                                                    profileEffectOverride: eC,
                                                                    profileFrame: eY,
                                                                    allowEditing: em,
                                                                    isLoading: q,
                                                                }),
                                                                (0, t.jsx)(t$.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eX,
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
                            (0, t.jsx)(tP.A, { userId: l.id, guildId: K, className: iB.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
