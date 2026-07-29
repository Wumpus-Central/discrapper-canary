n.d(l, { A: () => rK });
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
    y = n(577390),
    N = n(372320),
    E = n(31956),
    P = n(744808),
    k = n(875741),
    R = n(915089),
    S = n(713517),
    T = n(645507),
    O = n(922590),
    D = n(821269),
    _ = n(93246),
    w = n(561794),
    L = n(71393),
    M = n(994500),
    G = n(351906),
    F = n(562153),
    B = n(474090),
    V = n(183555),
    U = n(47675),
    W = n(321191),
    z = n(591179),
    H = n(999291),
    K = n(702841),
    q = n(370480),
    Y = n(773669),
    X = n(652215),
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
    ey = n(834730);
function eN(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(ey.E, { variant: "text-sm/normal", children: l });
}
var eE = n(361311),
    eP = n(931481),
    ek = n(439053),
    eR = n(743987),
    eS = n(312381),
    eT = n(501193),
    eO = n(383448),
    eD = n(946356),
    e_ = n(983495),
    ew = n(280645),
    eL = n(305385),
    eM = n(109112),
    eG = n(939249),
    eF = n(730134),
    eB = n(169869),
    eV = n(837057),
    eU = n(310419),
    eW = n(889227),
    ez = n(967198),
    eH = n(488995),
    eK = n(375708),
    eq = n(440016);
function eY(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eB.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eq.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eF.A, { user: new eW.A(l.application.bot), size: d._3.SIZE_16 })
                        : (0, t.jsx)(eM._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eq.Hd,
                children: [
                    (0, t.jsxs)(eG.D, {
                        className: eq.OB,
                        onClick: function () {
                            i?.(),
                                (0, eV.transitionToGlobalDiscovery)({
                                    tab: eH.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eU.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(ey.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(ey.E, {
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
function eX(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, V.NJ)(),
        o = (0, s.bG)([Y.default], () => Y.default.locale),
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
                          children: (0, t.jsx)(eY, {
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
    e5 = n(775602),
    e3 = n(321027);
function e9(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e5.Ay], () => e5.Ay.useReducedMotion),
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
        wrapperRef: f,
        inputRef: m,
        handleStartEditing: h,
        handleCommit: A,
        handleCancel: b,
        handleInputCommit: C,
        handleInputCancel: y,
        onInputKeyDown: N,
        onBlur: j,
        onContainerKeyDown: I,
    };
}
function e8(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e3.L7,
            children: (0, t.jsx)(e2.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e7.m, { text: l, ariaHidden: !0, children: i });
}
function e6(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? g.E : p.i;
    return (0, t.jsxs)(ey.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: e3.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? e3.ik : e3.QW }), n],
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
            growWidth: b = !1,
            removeVerticalPadding: j = !1,
        } = e,
        I = i.useRef(null),
        C = i.useId(),
        y = i.useId(),
        N = null == n,
        E = null != f,
        P = null != m && !E,
        k = E ? "error" : P ? "warning" : null,
        R = E ? f : m,
        S = null != k && null != R,
        T = [];
    N && T.push(C), S && "compact" !== c && T.push(y);
    let O = T.length > 0 ? T.join(" ") : void 0,
        D = (0, t.jsxs)("div", {
            ref: I,
            className: a()(e3.LL, { [e3.JD]: E, [e3.xe]: P, [e3.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                N
                    ? (0, t.jsx)(ey.E, {
                          id: C,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e3.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(eG.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": O,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: I },
                    }),
                null != g && (0, t.jsx)("div", { className: e3.lD, children: (0, t.jsx)(e8, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e3.kL, { [e3.oE]: "compact" === c, [e3.c1]: "multiline" === c, [e3.CP]: b, [e3.WK]: j }, p),
        onBlur: h,
        onKeyDown: v,
        children: (0, t.jsx)(
            "div",
            {
                className: e3.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e3.VH, children: D }),
                              S && "compact" !== c && (0, t.jsx)(e6, { id: y, message: R, type: k }),
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
        y = c ? eK.intl.string(eK.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(ll, {
              ...h,
              preview: v ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eK.intl.string(eK.t.lO3n7a),
              label: eK.intl.string(eK.t["YWo+Zd"]),
              emojiPickerIntention: lt.EmojiIntention.PROFILE,
              maxLength: X.NA2,
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
    lg = n(839534),
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
    return o === X.eA$.BLOCKED
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
            : o === X.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === X.eA$.FRIEND || o === X.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lp.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === X.eA$.NONE && x
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
    ly = n(874490),
    lN = n(968309),
    lE = n(174459),
    lP = n(486020),
    lk = n(123917),
    lR = n(783419);
let lS = "User Profile Modal V2";
function lT(e) {
    let l = Q.A.get(e);
    (0, lN.A)({ platformType: l.type, location: lS }),
        lE.default.track(X.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lS,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lO() {
    lI.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lT, stackingBehavior: "stack" });
}
function lD(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, q.An)(r[lR.pK.CREATED_AT], n),
        s = Q.A.get((0, ly.ML)(l.type));
    return (0, t.jsx)(lw, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e7.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(ey.E, { variant: "text-sm/normal", className: eq.GW, children: l.name }),
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
                          (0, lC.zV)(X.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lk.h)({ href: e, trusted: s?.type !== X.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eq.vi,
                          children: [
                              (0, t.jsx)(e7.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(ey.E, {
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
            return l.type === X.fg2.REDDIT
                ? (0, eB.xE)(r)
                : l.type === X.fg2.STEAM
                  ? (0, eB.dy)(r)
                  : l.type === X.fg2.BLUESKY || l.type === X.fg2.MASTODON || l.type === X.fg2.TWITTER
                    ? (0, eB.ED)(r)
                    : l.type === X.fg2.PAYPAL
                      ? (0, eB.gZ)(r)
                      : l.type === X.fg2.EBAY
                        ? (0, eB.ub)(r)
                        : l.type === X.fg2.TIKTOK
                          ? (0, eB.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function l_(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lP.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lw, {
        renderAccountName: function () {
            return (0, t.jsx)(e7.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(ey.E, {
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
function lw(e) {
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
                                (0, t.jsx)(ey.E, {
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
function lL(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([Y.default], () => Y.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eq.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eq.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lD, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(l_, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eG.D, {
                    className: eq.qG,
                    onClick: lO,
                    children: [
                        (0, t.jsx)(lj.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eK.intl.string(eK.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lM = n(193885),
    lG = n(408278),
    lF = n(461797);
let lB = i.createContext(null);
function lV(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a] = i.useState(lF.B$),
        s = i.useRef(a),
        o = i.useCallback(() => r(!0), []),
        d = i.useCallback(() => r(!1), []),
        u = i.useCallback(() => s.current, []),
        c = i.useCallback((e) => {
            s.current = e;
        }, []),
        g = i.useMemo(
            () => ({
                isPremiumTryItOutView: n,
                goToPremiumTryItOut: o,
                goBack: d,
                getCurrentPreset: u,
                cachePreset: c,
            }),
            [n, o, d, u, c],
        );
    return (0, t.jsx)(lB.Provider, { value: g, children: l });
}
function lU() {
    let e = i.useContext(lB);
    if (null == e)
        throw Error(
            "useUserProfileModalV2PremiumTryItOutContext must be used within UserProfileModalV2PremiumTryItOutContextProvider",
        );
    return e;
}
function lW() {
    let { isPremiumTryItOutView: e, goToPremiumTryItOut: l, goBack: n } = lU();
    return { isPremiumTryItOutView: e, goToPremiumTryItOut: l, goBack: n };
}
var lz = n(554146),
    lH = n(194261),
    lK = n(315629),
    lq = n(789645),
    lY = n(297264),
    lX = n(403581),
    l$ = n(812993),
    lZ = n(821609),
    lJ = n(39623),
    lQ = n(890377),
    l0 = n(517461),
    l1 = n(13875),
    l2 = n(131607),
    l7 = n(248778),
    l5 = n(465794),
    l3 = n(252732),
    l9 = n(945810);
let l8 = (0, l9.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l6 = (0, l9.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1 },
        variations: { 1: { enabled: !0, showPresetName: !0 }, 2: { enabled: !0, showPresetName: !1 } },
    });
function l4(e) {
    let { location: l } = e;
    return l6.useConfig({ location: l });
}
var ne = n(487233),
    nl = n(120386),
    nn = n(317097),
    nt = n(602853),
    ni = n(922016),
    nr = n(508274),
    na = n(654107),
    ns = n(930349);
function no(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, nt.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, na.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, nn.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e0.p)({ accentColor: e }), []);
    return (0, t.jsx)(ni.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(nr.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(ns.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eK.intl.string(eK.t["/X3fkf"]),
                accessibleValue: (0, nn.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nn.Hl)(c) } }),
            }),
    });
}
var nd = n(450373),
    nu = n(796290);
function nc(e, l) {
    let n = void 0 === e;
    return null === e || (n && null == l)
        ? eK.intl.string(eK.t["3Xph0/"])
        : n
          ? eK.intl.string(eK.t.keN7ib)
          : eK.intl.string(eK.t["l/iJSJ"]);
}
function ng(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nu.o, style: { backgroundColor: l } });
}
function nf(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nu._ });
}
function nm(e) {
    let { displayProfile: l, bannerChange: n, shouldAnimate: i } = e,
        r = (0, nt.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, nn.LX)(r),
        { hex: s } = (0, nd.A)(a),
        o = n ?? l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(nf, { src: o }) : (0, t.jsx)(ng, { backgroundColor: s });
}
function np(e) {
    let { displayProfile: l, bannerChange: n, ...i } = e;
    return (0, t.jsx)(ns.A, {
        ...i,
        accessibleLabel: eK.intl.string(eK.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(nm, { displayProfile: l, bannerChange: n, shouldAnimate: e }),
    });
}
var nx = n(569059);
function nh(e) {
    let { userId: l, guildId: n, disabled: r, errorMessageId: a } = e,
        s = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: f,
        } = (function (e, l) {
            let n = (0, H.Ay)(e, l),
                {
                    pendingBanner: t,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, K.cf)(
                    [eg.A, ec.default, W.A],
                    () => ({
                        pendingBanner: eg.A.getPendingChanges(l ?? void 0).pendingBanner,
                        mainProfileBanner: ec.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != l ? W.A.getGuildMemberProfile(e, l)?.banner : W.A.getUserProfile(e)?.banner,
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
                accessibleValue: nc(t, r),
                currentProfileBanner: r,
                hasMainProfileFallback: a && null != i,
            };
        })(l, n),
        m = (0, eo.Ac)(d, g)
            ? {
                  onClick: () => (0, l3.rM)(null, g, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eK.intl.string(f ? eK.t.jHlJNS : eK.t.tT9n7D),
              }
            : void 0,
        p = (0, nx.P)({ guildId: n, returnRef: s });
    return (0, t.jsx)(np, {
        buttonRef: s,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: m,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: a,
    });
}
var nv = n(913563),
    nA = n(898985),
    nb = n(922301),
    nj = n(660184),
    nI = n(259065),
    nC = n(864386),
    ny = n(257551);
let nN = "heading-xl/semibold";
function nE(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: ny.M,
        children:
            null != n
                ? (0, t.jsx)(ey.E, {
                      variant: nN,
                      children: (0, t.jsx)(nj.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nb.G.ANIMATED : nb.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(ey.E, { variant: nN, className: ny.W, color: "text-muted", children: l }),
    });
}
function nP(e) {
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
    function y(e) {
        return null == e || "" === e ? void 0 : e;
    }
    let N = void 0 !== f ? f : g,
        E = u ? (y(void 0 !== m ? m : c) ?? y(N) ?? l.username) : (y(N) ?? l.username),
        P = A ? null != h : null != v,
        k =
            null != C && P
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(j ? eK.t.en3ogK : eK.t["Wqmi/h"]),
                  }
                : void 0,
        R = i.useCallback(() => {
            o?.(), (0, nI.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(ns.A, {
        affordance: (!b && (A || null != v)) || j ? k : "add",
        variant: "bar",
        onClick: R,
        accessibleLabel: eK.intl.string(eK.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eK.intl.string(eK.t["3Xph0/"]);
            let l = eK.intl.string((0, nv.A)(e.fontId)),
                n = eK.intl.string(nA.J[e.effectId] ?? nC.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eK.intl.formatToPlainString(eK.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nE, { stylesPreview: C, displayName: E, shouldAnimate: e }),
        disabled: r,
    });
}
var nk = n(324970);
function nR(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nk.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nk.Pf,
                children: [
                    (0, t.jsx)(lY.D, {
                        className: nk.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e7.m, {
                            text: eK.intl.string(eK.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lX.t, {
                                className: nk.IX,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: nk.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nS(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nk.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(ey.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nT = n(374654),
    nO = n(366010),
    nD = n(736653),
    n_ = n(674658),
    nw = n(617061),
    nL = n(203632),
    nM = n(536572);
let nG = new Set(),
    nF = 0;
var nB = n(993408),
    nV = n(841702),
    nU = n(515718),
    nW = n(195292);
function nz(e) {
    "" !== e.thumbnailPreviewSrc && (0, nU.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nH = n(580705),
    nK = n(462397);
let nq =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nY =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nX(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nD.Ay)(),
        u = (0, nO.M)(d) ? nq : nY,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nV.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nB.wo)(r, t), [r, t]),
                s = (0, nW.A)({ enabled: l, isInteracting: n, items: a, preload: nz });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nF += 1), nG.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nH.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nH.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nH.yY, { [nK.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nL.HL.FromStart,
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
function n$(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        c = (0, eo.N2)({ user: l }),
        g = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, eo.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        h = (0, eo.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: v } = (0, n_.q)(h?.skuId),
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
            (0, nw.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(ns.A, {
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
        })({ profileEffectPreview: h, productName: (0, nM.VG)(v), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nX, { effect: h, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nZ = n(515727),
    nJ = n(746002);
function nQ(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nJ.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nJ.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nU.NN)(n).catch(() => {});
        });
}
var n0 = n(443727);
function n1(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function n2(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nD.Ay)(),
        u = (0, nO.M)(d) ? nq : nY,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nV.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nB.MG)(r, t), [r, t]);
            return (0, nW.A)({ enabled: l, isInteracting: n, items: a, preload: nQ });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(n0.hm, x, { [nK.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: n1 }),
                }),
            (0, t.jsx)("div", {
                className: a()(n0.ti, { [n0.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: n0.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n7(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        u = (0, eo.Xf)({ user: l }),
        c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eo.Tu)(n ?? void 0),
        f = void 0 !== g,
        m = null === g || (!f && null == c),
        p = o && null != u,
        x = (0, eo.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: h } = (0, n_.q)(x?.skuId),
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
            (0, nZ.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(ns.A, {
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
        })({ profileFramePreview: x, productName: (0, nM.VG)(h), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(n2, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var n5 = n(684732),
    n3 = n(498596),
    n9 = n(211003);
function n8(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, nn.Hl)(l),
        f = (0, nn.bJ)(l, 0xffffff) < n3.Tr.NonText;
    return (0, t.jsx)(ni.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(nr.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eG.D, {
                ...n,
                innerRef: c,
                className: n9.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(n9.Hy, { [n9.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function n6(e) {
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
        c = (0, nn.Hl)(l),
        g = (0, nn.Hl)(n),
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
    return (0, t.jsx)(ns.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: n9.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(n8, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(n8, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function n4(e) {
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
        p = (0, nt.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        h = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        v = (0, na.rh)(h, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e0.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, n5.l)(d, o)
                ? {
                      onClick: () => (0, e0.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eK.intl.string(eK.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(n6, {
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
var te = n(134976);
function tl(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(m.F, { children: (0, t.jsx)("div", { className: a()(te.k, { [te.V]: n }), children: l }) });
}
var tn = n(461376),
    tt = n(689175),
    ti = n(672905);
function tr(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(tn.animated.div, { className: ti.iK, style: e, children: l }) : null));
}
function ta(e) {
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
        className: ti.u6,
        children: [
            (0, t.jsx)(tt.zC, {
                ref: r,
                className: a()(ti.XG, { [ti.a5]: f }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: ti.Qs, children: l }),
            }),
            s && (0, t.jsx)(tr, { isDismissed: o, children: n }),
        ],
    });
}
var ts = n(976860),
    to = n(975732);
function td() {
    return i.useCallback(() => {
        (0, ts.pX)(X.BVt.NITRO_HOME), (0, to.closeUserProfileModal)();
    }, []);
}
var tu = n(422936),
    tc = n(410516),
    tg = n(202541);
function tf(e) {
    let l = (0, s.bG)([ec.default], () => eQ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, tu.O)();
    return l
        ? eK.intl.string(eK.t.AfRWI8)
        : (0, tc.U9)(n, tg.pe.TIER_2) && n?.discount.amount != null
          ? eK.intl.formatToPlainString(eK.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
function tm() {
    let e = tf(eK.intl.string(eK.t.pj0XBN)),
        l = td();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eK.intl.format(eK.t.TmfgI2, { onClick: l }),
            }),
            (0, t.jsx)(l5.A, { subscriptionTier: tg.pe.TIER_2, buttonTextOverride: e, size: "md", fullWidth: !0 }),
        ],
    });
}
var tp = n(55619),
    tx = n(37407);
function th() {
    return (0, t.jsxs)("div", {
        className: tx.k,
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eK.intl.string(eK.t.JFY17v),
            }),
            (0, t.jsx)(lZ.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eK.intl.string(eK.t.R9GHya),
                onClick: function () {
                    return tp.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tv = n(342866);
function tA(e) {
    let { user: l, ...n } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, s.cf)([eg.A], () => ({
            pendingAvatar: eg.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eg.A.getTryItOutChanges().tryItOutAvatar,
        })),
        a = void 0 !== r ? r : i;
    return (0, t.jsx)(tv.A, {
        ...n,
        variant: "full-height-bar",
        userId: l.id,
        avatarChange: a,
        accessibleValue: (0, tv.$)(a, l.avatar),
        showTryItOutSpinAnimation: null == r,
    });
}
function tb(e) {
    let { userId: l, ...n } = e,
        i = (0, H.Ay)(l),
        {
            pendingBanner: r,
            tryItOutBanner: a,
            currentProfileBanner: o,
        } = (0, s.cf)(
            [eg.A, W.A],
            () => ({
                pendingBanner: eg.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eg.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: W.A.getUserProfile(l)?.banner,
            }),
            [l],
        ),
        d = void 0 !== a ? a : r;
    return (0, t.jsx)(np, {
        ...n,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: nc(d, o),
    });
}
var tj = n(502096);
function tI(e) {
    let { user: l, mode: n } = e,
        { goToPremiumTryItOut: r } = lW(),
        a = i.useRef(null),
        s = i.useRef(null),
        o = (0, nx._)({ isPremiumTryItOut: !0, returnRef: a }),
        d = (0, nx.P)({ isPremiumTryItOut: !0, returnRef: s }),
        u = "edit" === n;
    return (0, t.jsxs)("div", {
        className: tj.T,
        children: [
            (0, t.jsx)(nR, {
                heading: eK.intl.string(eK.t.Vgdusv),
                showNitroIcon: !0,
                children: (0, t.jsx)(tb, {
                    userId: l.id,
                    buttonRef: s,
                    onClick: u ? d : r,
                    "aria-haspopup": u ? "dialog" : void 0,
                }),
            }),
            (0, t.jsx)(nR, {
                heading: eK.intl.string(eK.t.vtFfPX),
                showNitroIcon: !0,
                children: (0, t.jsx)(tA, {
                    user: l,
                    buttonRef: a,
                    onClick: u ? o : r,
                    "aria-haspopup": u ? "dialog" : void 0,
                }),
            }),
        ],
    });
}
var tC = n(847374),
    ty = n(111159),
    tN = n(548118),
    tE = n(711014),
    tP = n(540637),
    tk = n(801461),
    tR = n(44482),
    tS = n(844222),
    tT = n(561392),
    tO = n(499957),
    tD = n(15626),
    t_ = n(37712);
function tw(e) {
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
            let { reducedMotion: e } = i.useContext(tS.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tT.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tO.DL)(o, {
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
        y = i.useContext(tD._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        O = null != S ? (0, tk.ZN)(P, S) : void 0,
        D = i.useRef(!1),
        _ = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, tk.fI)(e.value, [n])), [n, l]),
        L = i.useCallback(() => {
            u || h(!x);
        }, [u, h, x]),
        M = i.useCallback(
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
                if (!R.current?.contains(e.relatedTarget)) {
                    if (_.current) {
                        _.current = !1;
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
        B = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: V, handleKeyDown: U } = (0, tP.l)(!0, l),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = V !== W.current;
        (W.current = V), null != V && e && (T(V), x || ((D.current = !0), h(!0)));
    }, [V, x, h]);
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
                            if (null != S) {
                                let e = l[S];
                                if (null != e && !0 !== e.disabled) {
                                    B([e]);
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
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            B([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(0), x || ((D.current = !0), h(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((D.current = !0), h(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (_.current = !0), h(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        U(e);
                }
            },
            [u, x, l, S, B, G, r, h, U],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (D.current = !1))
            : ((K.current = !0), D.current || T(l.length > 0 ? H : null), (D.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let q = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": O,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: L,
        onMouseDown: M,
        onKeyDown: z,
        onBlur: F,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), v.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(t_.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tP.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: B,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tR.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tL = n(643213);
let tM = "MAIN_PROFILE";
function tG(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tN.Ay, { className: tL.$f, guild: l, size: tN.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tF(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tL.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tL.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tL.qL,
                children: [
                    (0, t.jsx)(ey.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(ey.E, {
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
function tB(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eG.D, {
        innerRef: r,
        className: a()(tL.L5, { [tL.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(ey.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tL.v9,
                children: n,
            }),
            (0, t.jsx)(tC.a, {
                className: tL.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tV(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tE.Ay], () => tE.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([L.A], () => L.A.getGuilds()),
        c = (0, s.bG)([ez.A], () => {
            let e = ez.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tE.Ay], () => {
            let e = {};
            for (let l of tE.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: tM,
                    label: eK.intl.string(eK.t["2p07FR"]),
                    value: tM,
                    leading: (0, t.jsx)(ty.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tG, { guild: n }),
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
                          leading: (0, t.jsx)(tG, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? tM,
        p = f.find((e) => e.value === m) ?? f[0],
        h = i.useCallback(
            (e) => {
                let n = e === tM ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tw, {
        className: tL.kL,
        label: eK.intl.string(eK.t.rki38K),
        listboxClassName: tL.yt,
        options: f,
        value: m,
        onSelectionChange: h,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tF, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tB, { leading: p.value === tM ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tU = n(765178),
    tW = n(207803);
function tz() {
    let e = (0, s.bG)([e5.Ay], () => e5.Ay.useReducedMotion),
        { preset: l, setPreset: n } = (function () {
            let { getCurrentPreset: e, cachePreset: l } = lU(),
                [n, t] = i.useState(e);
            return {
                preset: n,
                setPreset: i.useCallback(
                    (e) => {
                        l(e), t(e);
                    },
                    [l],
                ),
            };
        })(),
        t = i.useCallback(
            (l) => {
                let n = (0, lF.Wt)(l);
                (0, tW.w5)({
                    banner: n.getBannerSrc(e),
                    themeColors: n.themeColors,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [e],
        );
    i.useEffect(() => {
        eg.A.hasTryItOutChanges() || t(l);
    }, [t, l]);
    let r = i.useCallback(() => {
        let e = (0, lF.B$)(l),
            i = (0, lF.Wt)(e);
        lE.default.track(X.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: e }),
            n(e),
            t(e),
            tU.O.announce(eK.intl.formatToPlainString(eK.t.M2Hj9s, { presetName: i.getName() }));
    }, [l, n, t]);
    return { preset: l, onShuffle: r };
}
var tH = n(485745);
function tK(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(0, z.X)("useUnsavedProfileChangesGuard"),
        t = (0, tH.A)(n),
        r = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            r.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                l && t ? (0, tW.VQ)() : r.current(...n);
            },
            [l, t],
        )
    );
}
var tq = n(49999),
    tY = n(844939);
let tX = "profile-editing-nameplate-error",
    t$ = "profile-editing-avatar-error",
    tZ = "profile-editing-avatar-decoration-error",
    tJ = "profile-editing-banner-error",
    tQ = "profile-editing-display-name-style-error";
function t0(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(tY.D0, l),
        children: (0, t.jsx)("div", { className: tY.ZN, children: (0, t.jsx)(lH.X, { size: "xs" }) }),
    });
}
function t1() {
    return (0, t.jsx)(lK.h, { color: "nitro-pink", className: tY.Lu, children: (0, t.jsx)(tm, {}) });
}
function t2() {
    let [e, l] = (0, l0.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tY.X6,
              children: [
                  (0, t.jsx)(ey.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eK.intl.string(eK.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eG.D, {
                      "aria-label": eK.intl.string(eK.t.rSe9ra),
                      className: tY.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lq.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function t7() {
    let e = td(),
        l = tf(eK.intl.string(eK.t["7IWwak"]));
    return (0, t.jsxs)("div", {
        className: tY.eW,
        children: [
            (0, t.jsxs)("div", {
                className: tY.tm,
                children: [
                    (0, t.jsx)(lY.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eK.intl.string(eK.t.bO0TOe),
                    }),
                    (0, t.jsx)(ey.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eK.intl.format(eK.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, t.jsx)(l5.A, { subscriptionTier: tg.pe.TIER_2, buttonTextOverride: l, size: "sm", fullWidth: !0 }),
            (0, t.jsx)(t0, { className: tY.nd }),
        ],
    });
}
function t5() {
    return (0, t.jsx)(ey.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tY.BJ,
        "aria-hidden": !0,
        children: eK.intl.format(eK.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lX.t, { size: "xxs", color: "currentColor", className: tY.qp }),
        }),
    });
}
function t3(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nR, {
        heading: eK.intl.string(eK.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nT.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tX : void 0 }),
            (0, t.jsx)(nS, { id: tX, message: r }),
        ],
    });
}
function t9(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nR, {
        heading: eK.intl.string(eK.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(ne.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t$ : void 0 }),
            (0, t.jsx)(nl.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? tZ : void 0 }),
            (0, t.jsx)(nS, { id: t$, message: (0, l3.d3)(r) }),
            (0, t.jsx)(nS, { id: tZ, message: a }),
        ],
    });
}
function t8(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, l7.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, l2.kn)(a && !i ? [lz.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lz.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nR, {
        heading: eK.intl.string(eK.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(l$.Lp, { text: eK.intl.string(eK.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nP, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? tQ : void 0,
                onOpen: d ? () => o(tq.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nS, { id: tQ, message: r }),
        ],
    });
}
function t6(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nR, {
        heading: eK.intl.string(eK.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n4, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(nh, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? tJ : void 0 }),
            (0, t.jsx)(nS, { id: tJ, message: (0, l3.d3)(a) }),
        ],
    });
}
function t4(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nR, {
        heading: eK.intl.string(eK.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(no, { user: l, disabled: n }),
    });
}
function ie(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, l1.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nR, {
        heading: eK.intl.string(r ? eK.t["Vfbar/"] : eK.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(n$, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n7, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let il = "premium-try-it-out-description";
function it(e) {
    let { user: l, buttonRef: n } = e,
        i = td(),
        { goToPremiumTryItOut: r } = lW();
    return (
        tz(),
        (0, t.jsxs)("div", {
            role: "group",
            "aria-labelledby": il,
            className: tY.DX,
            children: [
                (0, t.jsx)(t0, { className: tY.x$ }),
                (0, t.jsxs)("div", {
                    className: tY.sb,
                    children: [
                        (0, t.jsx)(ey.E, {
                            id: il,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eK.intl.format(eK.t.TmfgI2, { onClick: i }),
                        }),
                        (0, t.jsx)(lZ.$, {
                            buttonRef: n,
                            variant: "overlay-primary",
                            size: "sm",
                            icon: lJ.b,
                            text: eK.intl.string(eK.t.PxUx8e),
                            onClick: r,
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, t.jsx)(tI, { user: l, mode: "entrypoint" }),
            ],
        })
    );
}
function ii(e) {
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
        } = e,
        f = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { enabled: m } = l4({ location: "DefaultEditingPanelView" }),
        p = tK(g),
        x = null != i,
        h = eQ.Ay.canUsePremiumProfileCustomization(l),
        v = x && !h,
        A = !h && !x,
        b = A && m,
        j = x && !h && !f,
        I = a || o,
        C = (0, s.bG)([eg.A], () => eg.A.getErrors(i)),
        y = C.nameplate?.[0] ?? C.nameplate_sku_id?.[0],
        N = C.avatar?.[0],
        E = C.avatar_decoration_sku_id?.[0],
        P = C.banner?.[0],
        k = C.display_name_font_id?.[0] ?? C.display_name_effect_id?.[0] ?? C.display_name_colors?.[0],
        R = l8.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        S = h || x ? "inline" : b ? "hidden" : R ? "end" : "hidden",
        T = (0, t.jsx)(t8, { user: l, guildId: i, disabled: I || v, errorMessage: k });
    return (0, t.jsxs)(tl, {
        hasGradientBackground: j,
        children: [
            (0, t.jsxs)("div", {
                className: tY.wx,
                children: [
                    (0, t.jsx)(e7.m, {
                        text: eK.intl.string(eK.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eG.D, {
                            innerRef: d,
                            className: tY.cS,
                            "aria-label": eK.intl.string(eK.t["l/A351"]),
                            onClick: c,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lQ.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tV, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: p,
                        loading: a,
                        disabled: f,
                    }),
                ],
            }),
            f
                ? (0, t.jsx)(th, {})
                : (0, t.jsx)(ta, {
                      floatingFooter: A && !b ? (0, t.jsx)(t1, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              x && (h ? (0, t.jsx)(t2, {}) : (0, t.jsx)(t7, {})),
                              h && (0, t.jsx)(t5, {}),
                              (0, t.jsx)(t3, { user: l, guildId: i, disabled: I || v, errorMessage: y }),
                              (0, t.jsx)(t9, {
                                  user: l,
                                  guildId: i,
                                  disabled: I || v,
                                  avatarErrorMessage: N,
                                  avatarDecorationErrorMessage: E,
                              }),
                              "inline" === S && T,
                              h || x
                                  ? (0, t.jsx)(t6, {
                                        user: l,
                                        guildId: i,
                                        disabled: I || v,
                                        canUsePremiumProfileFeatures: h,
                                        bannerErrorMessage: P,
                                    })
                                  : (0, t.jsx)(t4, { user: l, disabled: I || v }),
                              (0, t.jsx)(ie, { user: l, guildId: i, disabled: I || v }),
                              "end" === S && T,
                              b && (0, t.jsx)(it, { user: l, buttonRef: u }),
                          ],
                      }),
                  }),
        ],
    });
}
var ir = n(477155),
    ia = n(926321),
    is = n(663417),
    io = n(597563);
let id = "shuffle-options-a11y-description";
function iu() {
    let { preset: e, onShuffle: l } = tz(),
        { showPresetName: n } = l4({ location: "TryItOutShufflePreset" }),
        { presetName: r, presetHeader: a } = i.useMemo(() => {
            let l = (0, lF.Wt)(e);
            return { presetName: l.getName(), presetHeader: l.getPreviewThumbnailSrc() };
        }, [e]);
    return n
        ? (0, t.jsxs)("div", {
              className: io.kL,
              children: [
                  (0, t.jsx)(e7.m, {
                      text: eK.intl.string(eK.t.VzqqFC),
                      ariaHidden: !0,
                      children: (0, t.jsx)(lG.K, {
                          icon: is.f,
                          "aria-label": eK.intl.string(eK.t.VzqqFC),
                          "aria-describedby": id,
                          onClick: l,
                          variant: "secondary",
                          size: "sm",
                      }),
                  }),
                  (0, t.jsx)(f.A, { id: id, children: eK.intl.string(eK.t.bBRdiB) }),
                  (0, t.jsxs)("div", {
                      className: io.IS,
                      children: [
                          (0, t.jsx)("img", { alt: "", className: io.L_, src: a }),
                          (0, t.jsxs)(ey.E, {
                              className: io._e,
                              variant: "text-sm/medium",
                              color: "text-overlay-light",
                              lineClamp: 1,
                              children: [
                                  (0, t.jsx)(f.A, {
                                      children: eK.intl.formatToPlainString(eK.t.PiPq7M, { presetName: r }),
                                  }),
                                  (0, t.jsx)("span", { className: io.jL, "aria-hidden": !0, children: r }),
                              ],
                          }),
                      ],
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(lZ.$, {
                      icon: ia.j,
                      text: eK.intl.string(eK.t.VzqqFC),
                      onClick: l,
                      variant: "secondary",
                      size: "sm",
                      "aria-describedby": id,
                      fullWidth: !0,
                  }),
                  (0, t.jsx)(f.A, { id: id, children: eK.intl.string(eK.t.bBRdiB) }),
              ],
          });
}
var ic = n(451125);
function ig() {
    return (0, t.jsxs)("div", {
        className: ic.nH,
        children: [(0, t.jsx)("div", { className: ic.Ei }), (0, t.jsx)(tm, {})],
    });
}
function im(e) {
    let { user: l, onBack: n } = e,
        r = i.useRef(null);
    return (
        i.useEffect(() => {
            r.current?.focus();
        }, []),
        (0, t.jsxs)(tl, {
            hasGradientBackground: !0,
            children: [
                (0, t.jsxs)("div", {
                    className: ic.wx,
                    children: [
                        (0, t.jsx)(eG.D, {
                            innerRef: r,
                            "aria-label": eK.intl.string(eK.t["4IYwrw"]),
                            onClick: n,
                            className: ic.Gv,
                            children: (0, t.jsx)(ir.r, { size: "md", color: "currentColor" }),
                        }),
                        (0, t.jsx)(lY.D, {
                            variant: "text-lg/normal",
                            color: "text-default",
                            className: ic.R_,
                            children: eK.intl.string(eK.t.PxUx8e),
                        }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            className: ic.Ij,
                            children: eK.intl.string(eK.t.X0ir7L),
                        }),
                        (0, t.jsx)("div", { className: ic.ZZ, children: (0, t.jsx)(iu, {}) }),
                    ],
                }),
                (0, t.jsx)(ta, {
                    children: (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(tI, { user: l, mode: "edit" }), (0, t.jsx)(ig, {})],
                    }),
                }),
            ],
        })
    );
}
var ip = n(450579);
let ix = "user-profile-editing-panel",
    ih = "profile-modal-editing-panel-heading";
function iv(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e7.m, {
        text: eK.intl.string(eK.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: i,
            "aria-label": eK.intl.string(eK.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": ix,
            className: a()(ip.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lM.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function iA(e) {
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
                "aria-controls": ix,
                icon: lM.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function ib(e) {
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
        { isPremiumTryItOutView: x, goBack: h } = lW(),
        v = i.useRef(null),
        A = i.useCallback(() => {
            h(), requestAnimationFrame(() => v.current?.focus());
        }, [h]);
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: ix,
              "aria-labelledby": ih,
              className: a()(ip.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: ip.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: ih, children: eK.intl.string(eK.t["L+ch00"]) }),
                      }),
                      x
                          ? (0, t.jsx)(im, { user: p, onBack: A })
                          : (0, t.jsx)(ii, {
                                panelId: ix,
                                user: p,
                                selectedGuildId: l,
                                originGuildId: n,
                                isLoading: o,
                                isEditingDisabled: d,
                                collapseButtonRef: g,
                                onClosePanel: u,
                                onSelectGuildId: r,
                                premiumTryItOutButtonRef: v,
                            }),
                  ],
              }),
          });
}
var ij = n(576260),
    iI = n(347805),
    iC = n(629403),
    iy = n(612630),
    iN = n(260598);
function iE(e) {
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
            growWidth: C,
            removeVerticalPadding: y,
        } = e,
        N = null != v && (l ? r : n).length > v ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: v }) : void 0,
        E = l && r !== n,
        P = N ?? (E ? void 0 : j),
        k = i.useCallback((e) => {
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
        growWidth: C,
        removeVerticalPadding: y,
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: P,
        input: (0, t.jsx)(iN.f, {
            label: h,
            hideLabel: !0,
            inputRef: g,
            value: r,
            onChange: a,
            onFocus: k,
            onKeyDown: f,
            maxLength: v,
            error: P,
            placeholder: p,
            rows: A,
            disabled: b,
            autosize: !0,
        }),
    });
}
var iP = n(674947);
function ik(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, iy.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await iC.A.updateNote(l, e);
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
            ? (0, t.jsx)(ey.E, { variant: "text-sm/normal", color: "text-default", className: iP.t, children: p })
            : null;
    return (0, t.jsx)(iE, {
        ...v,
        className: n,
        preview: j,
        editButtonAriaLabel: eK.intl.string(eK.t.PbMNh2),
        label: eK.intl.string(eK.t.PbMNh2),
        placeholder: h ? eK.intl.string(eK.t["WLKx/9"]) : eK.intl.string(eK.t.VBhOe2),
        maxLength: X.T7x,
        rows: 3,
        disabled: h,
        error: f,
    });
}
var iR = n(83013),
    iS = n(518477),
    iT = n(273781);
function iO(e) {
    let { userId: l } = e,
        n = (0, ev.g)(),
        { trackUserProfileAction: i } = (0, V.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? ik : iI.A;
    return (0, t.jsx)(iR.A, {
        heading: eK.intl.string(eK.t["mQKv+v"]),
        scrollTargetId: iS.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? iT.N : iT.w,
            autoFocus: n === iS.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iD = n(123292),
    i_ = n(263293),
    iw = n(871645);
function iL(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: i_.kL,
            children: (0, t.jsxs)("div", {
                className: a()(iw.oR, i_.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: i_.Kk, children: l }),
                    (0, t.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: i_.hP,
                            children: (0, t.jsx)(iD.Q, {
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
var iM = n(346055),
    iG = n(289873),
    iF = n(103964);
function iB(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tU.O.announce(eK.intl.string(eK.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iM.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iF.f, l && iF.z),
                    children: n && (0, t.jsx)(iG.y, { type: iG.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var iV = n(568602),
    iU = n(625494),
    iW = n(61881);
function iz(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        [a, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, s.bG)([iW.A, eg.A], () => iW.A.hasUnsavedChanges() || eg.A.hasUnsavedChanges());
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
                iU._.subscribe(X.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    iU._.unsubscribe(X.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, t.jsx)(iV.b, { isShaking: n, intensity: a, children: l })
    );
}
n(46121);
var iH = n(841417),
    iK = n(933832),
    iq = n(972213),
    iY = n(97483),
    iX = n(384377);
let i$ = {
        [iS.jM.WIDGET_ADDED]: {
            message: eK.intl.string(eK.t.fFP1Uy),
            icon: (0, t.jsx)(iK.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iS.jM.WIDGET_REMOVED]: {
            message: eK.intl.string(eK.t.zzsK7h),
            icon: (0, t.jsx)(iK.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [iS.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eK.intl.string(eK.t["84MExs"]),
            icon: (0, t.jsx)(iq.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iY.Ck.FAILURE,
        },
        [iS.jM.SOMETHING_WENT_WRONG]: {
            message: eK.intl.string(eK.t.F8FvUy),
            icon: (0, t.jsx)(iq.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iY.Ck.FAILURE,
        },
    },
    iZ = (e) => {
        let { className: l } = e,
            n = (0, iX.fu)(),
            r = (0, s.bG)([e5.Ay], () => e5.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(i$[n]), tU.O.announce(i$[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, iX.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, iX.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(tn.animated.div, { className: l, style: e, children: (0, t.jsx)(iL, { ...d }) }),
                ),
            })
        );
    };
var iJ = n(297413),
    iQ = n(465829),
    i0 = n(826673),
    i1 = n(576705),
    i2 = n(292666);
function i7(e) {
    let { isEditing: l, inputRef: n, ...t } = e9(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function i5(e) {
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
    return (0, t.jsx)(i2.k, {
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
function i3(e) {
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
            growWidth: y,
            removeVerticalPadding: N,
        } = e,
        E =
            (null != v && (l ? i : n).length > v
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: v })
                : void 0) ?? A,
        P = "compact" === h ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e4, {
        ...P,
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        className: I,
        growWidth: y,
        removeVerticalPadding: N,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        disabled: C,
        input: (0, t.jsx)(i5, {
            inputRef: c,
            label: x,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: v,
            placeholder: m,
            trailing: j,
            error: E,
            helperText: b,
        }),
        previewErrorMessage: E,
        previewWarningMessage: b,
    });
}
var i9 = n(530895);
function i8(e) {
    return null == e || "" === e ? void 0 : e;
}
function i6(e) {
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
        C = (0, l7.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: y, permissionsLoaded: N } = (0, s.cf)([i1.A, L.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = L.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: i1.A.can(X.xBc.CHANGE_NICKNAME, e) || i1.A.can(X.xBc.MANAGE_NICKNAMES, e),
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
        (f = i8(c) ?? i8(r) ?? p.username),
        (m = i8(c) ?? p.username),
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
        R = i7({ value: E, onCommit: k, disabled: !y }),
        { isEditing: S, handleCommit: T } = R,
        O = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        D = (0, eJ.EC)(b ?? null),
        _ = A ? O.nick?.[0] : O.global_name?.[0],
        w = D?.nick?.[0],
        M = (function (e) {
            let { isPremiumTryItOutView: l } = lW();
            return (0, s.bG)(
                [eg.A],
                () =>
                    l
                        ? eg.A.getTryItOutChanges().tryItOutDisplayNameStyles
                        : eg.A.getPendingChanges(e).pendingDisplayNameStyles,
                [e, l],
            );
        })(b),
        G = eK.intl.string(A ? eK.t.mq6Cg9 : eK.t.XuZU7A),
        F = A ? eK.intl.string(eK.t.YcDKr8) : p.username,
        B = eK.intl.string(A ? eK.t["g7OSZ/"] : eK.t.kyfzzc),
        V = i.useRef(null),
        U = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && T(),
                    C &&
                        (0, i0.Dr)(lz.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: tq.i.INDIRECT_ACTION,
                        }),
                    (0, nI.L)({ analyticsLocations: v, guildId: b, stackingBehavior: "stack", returnRef: V });
            },
            [S, T, v, b, C],
        ),
        W = {
            icon: lM.V,
            tooltip: eK.intl.string(eK.t.lqKKI2),
            "aria-label": eK.intl.string(eK.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: U,
            buttonRef: V,
        },
        z =
            A && !y && N
                ? (0, t.jsx)(e7.m, {
                      text: eK.intl.string(eK.t.gzjxQi),
                      children: (0, t.jsx)(eG.D, {
                          tag: "span",
                          className: i9.C,
                          children: (0, t.jsx)(lH.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eK.intl.string(eK.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != P
                ? (0, t.jsx)(iQ.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: M,
                      className: i9.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(i3, {
        ...R,
        preview: H,
        placeholder: F,
        editButtonAriaLabel: B,
        label: G,
        maxLength: X.zzC,
        trailing: y && j ? W : void 0,
        error: _,
        warning: w,
        disabled: !y,
    });
}
var i4 = n(688960);
function re(e) {
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
        m = i7({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        h = null != g && g.length > 0,
        v = eK.intl.string(x ? eK.t.AXiE0i : eK.t["76Aqhl"]);
    return (0, t.jsx)(i3, {
        ...m,
        size: "compact",
        className: a()(i4.k, p && i4.J),
        preview: h ? (0, t.jsx)(iQ.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eK.intl.string(eK.t.h6VAO7),
        label: eK.intl.string(eK.t["rniRE+"]),
        placeholder: v,
        maxLength: X.VE5,
    });
}
var rl = n(145497),
    rn = n(685073),
    rt = n(318785),
    ri = n(534400),
    rr = n(743981),
    ra = n(573109),
    rs = n(832344);
let ro = "no-server-tag";
function rd(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eG.D, {
        innerRef: l,
        className: a()(ra.L5, { [ra.wK]: o }),
        ...s,
        children: (0, t.jsxs)(ey.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: ra.W3,
            tag: "span",
            children: [
                o
                    ? eK.intl.string(eK.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  ri.Z9,
                                  {
                                      src: (0, rn.gC)(n, r, rr.Sl.SIZE_14),
                                      size: rr.Sl.SIZE_14,
                                      className: ra.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, rn.gC)(n, r, rr.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tC.a, { size: "xs", color: "currentColor", className: ra.u4 }),
            ],
        }),
    });
}
function ru() {
    let e = (0, rt.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, rn.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ro
                    ? (0, t.jsx)("div", {
                          className: rs.uN,
                          children: (0, t.jsx)(ey.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ra.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tR.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ro, label: eK.intl.string(eK.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(rl.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(ri.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
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
        : (0, t.jsx)(tw, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eK.intl.string(eK.t.Pdd1nd),
              listboxClassName: ra.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(rd, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var rc = n(211180);
function rg(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(iQ.Ay, {
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
        : (0, t.jsx)(iJ.A, {
              user: l,
              forceUsername: !0,
              className: rc.a1,
              usernameClass: rc.eb,
              discriminatorClass: rc.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(i6, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(rc.AK, rc.j6),
                children: [d, (0, t.jsx)(iQ.Ce, {}), (0, t.jsx)(re, { displayProfile: n }), (0, t.jsx)(ru, {}), r],
            }),
        ],
    });
}
var rf = n(97808),
    rm = n(980707),
    rp = n(477782),
    rx = n(22231),
    rh = n(601255),
    rv = n(562819),
    rA = n(19575),
    rb = n(339984),
    rj = n(145762),
    rI = n(935485);
let rC = rA.Ay.getEnableHardwareAcceleration() ? rf.Js : rf.eu;
function ry(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rm.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.YAgq3W),
        children: (0, t.jsx)(rp.rX, { children: n }),
    });
}
function rN(e) {
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
                A = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
                b = (0, eo.a4)({ user: l }),
                j = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eo.CP)(n ?? void 0),
                y = void 0 !== C,
                N = null != (0, rh.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        (0, l3.XD)({
                            uploadType: rb.HL.AVATAR,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        (0, rv.L)({
                            analyticsLocations: d,
                            guild: A ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, A, a]),
                R = i.useCallback(() => {
                    r(),
                        (0, l3.rM)(null, f, (e) => (0, e0.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(p ? "reset" : "remove");
                }, [r, n, f, p]),
                S = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rp.Dr,
                                { id: "change-avatar", label: eK.intl.string(eK.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                rp.Dr,
                                { id: "change-decoration", label: eK.intl.string(eK.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    h &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.TDjKDm),
                                          action: R,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.twB3fz),
                                          action: R,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, h, v, E, m, N, P, k, R, S]);
        })({ user: l, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(rj.my, rj.vk, rI.kL, { [rI.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rC, { ...r, imageClassName: a()(rj.Lw, rI.HU) }),
                  (0, t.jsx)(ni.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: ni.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, t.jsx)(ry, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: rI.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rx.R,
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
var rE = n(875262);
function rP(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(rm.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.FzU73A),
        children: (0, t.jsx)(rp.rX, { children: n }),
    });
}
function rk(e) {
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
                f = (0, l1.sk)("UserProfileModalV2EditableBanner"),
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
                y = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                E = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eo.Ac)(A, C),
                R = v && y,
                S = v && E,
                T = v && P,
                O = void 0 === b ? null != u : null != b,
                D = void 0 === j ? null != c : null != j,
                _ = (0, eo.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, N.A)(_?.skuId, "UserProfileModalV2EditableBanner"),
                M = i.useCallback(() => {
                    r(),
                        (0, l3.XD)({
                            uploadType: rb.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nw.W)({
                            analyticsLocations: d,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                F = i.useCallback(() => {
                    r(), (0, l3.rM)(null, C, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, C]),
                B = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                V = i.useCallback(() => {
                    r(),
                        (0, nZ.w)({
                            analyticsLocations: d,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, w, a]),
                U = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                rp.Dr,
                                { id: "change-banner", label: eK.intl.string(eK.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                rp.Dr,
                                { id: "change-effect", label: eK.intl.string(eK.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                rp.Dr,
                                { id: "change-frame", label: eK.intl.string(eK.t["oTSa/q"]), action: V },
                                "change-frame",
                            ),
                        ),
                    m &&
                        k &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.jHlJNS),
                                          action: F,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      rp.Dr,
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
                        O &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.Lb7lu9),
                                          action: B,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.zUOlT6),
                                          action: B,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        D &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.A0pzWn),
                                          action: U,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      rp.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["8DfADq"]),
                                          action: U,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [R, m, x, h, S, T, k, O, D, M, G, V, F, B, U]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(rE.kL, { [rE.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: rE.Pr }),
                  (0, t.jsx)(ni.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: ni.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rP, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: rE.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: rx.R,
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
var rR = n(777480),
    rS = n(107563),
    rT = n(570287);
n(938796);
var rO = n(913453),
    rD = n(667049),
    r_ = n(837531),
    rw = n(186272),
    rL = n(800609),
    rM = n(128604);
let rG = (e) => e * (2 - e),
    rF = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function rB(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function rV(e) {
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
        : (0, t.jsx)("div", { className: rL.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function rU(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nG.add(e), () => nG.delete(e)),
            () => nF,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function rW(e) {
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
            accentColorOverride: y,
            profileEffectOverride: N,
            profileFrame: E,
            fadeInProfileFrame: k,
            allowEditing: R,
            isLoading: w = !1,
        } = e,
        L = o.id === d.id,
        F = i.useRef(null),
        { isHoveringOrFocusing: V } = (0, S.A)(F),
        [U, W] = i.useState(),
        z = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? W("compact-xs") : l <= 380 ? W("compact-sm") : W(void 0);
        }, []);
    (0, A.g)(F, z, [], { fireOnMount: !0 });
    let H = null != U ? rF[U] : void 0,
        $ = i.useMemo(() => v ?? (0, T.A)(), [v]),
        { relationshipType: Z, originApplicationId: ei } = (0, s.cf)([M.A], () => ({
            relationshipType: M.A.getRelationshipType(o.id),
            originApplicationId: M.A.getOriginApplicationId(o.id),
        })),
        er =
            ((l = o.id),
            (n = (0, K.bG)([Y.default], () => Y.default.locale)),
            (r = (0, K.bG)([M.A], () => (M.A.getRelationshipType(l) === X.eA$.FRIEND ? M.A.getSince(l) : null), [l])),
            (0, q.An)(r, n)),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        es = (0, D.q)({ userId: o.id }),
        eo = (0, O.fi)(o.id),
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
        ep = R ? rk : eI.A,
        ex = R ? rN : eb.A,
        eh = p?.guildId ?? u,
        ev = i.useCallback(() => {
            (0, eL.A)({ user: o, guildId: eh, alt: x });
        }, [x, eh, o]);
    return (0, t.jsxs)("main", {
        className: a()(rL.profile, null != U && rL[U]),
        ref: F,
        "aria-busy": w,
        children: [
            (0, t.jsxs)("div", {
                className: rL.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: rL.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: H,
                            pendingBanner: C,
                            pendingAccentColor: y,
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
                        onOpenAvatar: R ? void 0 : ev,
                    }),
                    (0, t.jsx)(e_.A, {
                        user: o,
                        guildId: u,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: h,
                        prompt: L ? $ : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: rL.profileBody,
                children: [
                    (0, t.jsx)(rg, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: R,
                    }),
                    Z === X.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: rL.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: rL.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eD.A.Overlay,
                            {
                                className: rL.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: rL.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: rL.profileOverlay,
                            children: (0, t.jsx)(iR.A, {
                                heading: eK.intl.string(eK.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: rL.profileBanner,
                                children: (0, t.jsx)(_.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eO.A, { user: o, className: rL.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: rL.profileOverlay,
                            children: (0, t.jsx)(eT.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: rL.profileButtons,
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
                    L && (0, t.jsx)(eC.A, { isPremiumUser: (0, B.ki)(d) }),
                    !ea && (0, t.jsx)(lr, { displayProfile: p, isEditable: R }),
                    es.length > 0 &&
                        (0, t.jsx)(iR.A, {
                            heading: eK.intl.string(eK.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(iR.A, {
                        heading: eK.intl.string(eK.t.a6XYD9),
                        children: (0, t.jsx)(eR.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iS.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(iR.A, {
                            heading: eK.intl.string(eK.t.wlTO8v),
                            children: (0, t.jsx)(eN, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(ew.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: rL.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (R || eg) &&
                        (0, t.jsx)(iR.A, {
                            heading: eK.intl.string(eK.t["3fe7U5"]),
                            scrollTargetId: iS.bk.CONNECTIONS,
                            children: (0, t.jsx)(lL, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: R,
                                className: rL.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        em &&
                        (0, t.jsx)(iR.A, {
                            heading: eK.intl.string(eK.t.PHjkRE),
                            scrollTargetId: iS.bk.APPS,
                            children: (0, t.jsx)(eX, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: rL.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iO, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(rU, { displayProfile: p, profileEffectOverride: N, isHovering: V }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rB, fadeIn: k }),
        ],
    });
}
function rz(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, isPremiumTryItOut: r, children: a } = e,
        {
            theme: s,
            primaryColor: o,
            secondaryColor: d,
        } = (0, $.A)({ user: l, displayProfile: n, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, ea.A)({
            theme: s,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, t.jsx)("div", { className: c, style: u, children: a });
}
function rH(e) {
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
            initialScrollTarget: S,
            transitionState: T,
            customStatusPrompt: O,
            openedAt: D,
            onClose: _,
            sourceAnalyticsLocations: B = [],
            themeContainerClassName: K,
        } = e,
        q = l.id === n.id,
        Y = tK(_, q),
        {
            guildId: X,
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
        el = i.useMemo(() => (null != X ? { [X]: [l.id] } : {}), [X, l.id]);
    (0, b.Eq)(el, "UserProfileModalV2");
    let en = (0, z.X)("UserProfileModalV2"),
        { isPremiumTryItOutView: et } = lW(),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        em = (0, ei.A)(l.id) && en,
        eh = (0, er.W)(l.id),
        eb = ee && !eh,
        ej = em && !ea && !ee,
        {
            pendingThemeColors: eI,
            avatarDecorationOverride: eC,
            avatarOverride: ey,
            bannerOverride: eN,
            accentColorOverride: eE,
            profileEffectOverride: eP,
            profileFrameOverride: eR,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t, isPremiumTryItOut: i } = e;
            return (0, s.cf)([eg.A, ec.default, eu.Ay, W.A], () => {
                if (!t) return ex;
                let e = ec.default.getUser(l);
                if (null == e) return ex;
                let r = eg.A.getPendingChanges(n),
                    a = eg.A.getTryItOutChanges(),
                    s = null != n ? eu.Ay.getMember(n, l) : null,
                    o = W.A.getUserProfile(l),
                    d = null != n ? W.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i ? a.tryItOutThemeColors : r.pendingThemeColors,
                    avatarDecorationOverride: (0, eo.us)({
                        userValue: e.avatarDecoration,
                        guildValue: s?.avatarDecoration,
                        pendingValue: r.pendingAvatarDecoration,
                        guildId: n,
                    }),
                    avatarOverride: (0, ed.V7)({
                        userId: l,
                        image: i && void 0 !== a.tryItOutAvatar ? a.tryItOutAvatar : r.pendingAvatar,
                        size: ep,
                    }),
                    bannerOverride: i && void 0 !== a.tryItOutBanner ? a.tryItOutBanner : r.pendingBanner,
                    accentColorOverride: r.pendingAccentColor,
                    profileEffectOverride: (0, eo.us)({
                        userValue: o?.profileEffect,
                        guildValue: d?.profileEffect,
                        pendingValue: r.pendingProfileEffect,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eo.us)({
                        userValue: o?.profileFrame,
                        guildValue: d?.profileFrame,
                        pendingValue: r.pendingProfileFrame,
                        guildId: n,
                    }),
                };
            }, [l, n, t, i]);
        })({ userId: l.id, allowEditingInModal: ej, guildId: X, isPremiumTryItOut: et }),
        {
            isExpanded: eT,
            isAnimating: eO,
            transition: e_,
            handleExpand: ew,
            handleCollapse: eL,
            refs: { expandIconButtonRef: eM, expandTabButtonRef: eG, collapseButtonRef: eF },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: rG },
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
        eB = em && !eT,
        eV = em && (!eT || eO),
        { defaultWishlistId: eU } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, w.fw)({ wishlistId: eU, userId: l.id });
    let eW = (0, eA.fC)(),
        ez = eb && (!em || !Z),
        eH = em && ee,
        eq = $ !== X || eH || null != eW.interactionType,
        eY = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, rO.A)(i),
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
                c = (0, rD.A)(i.id),
                g = (0, rT.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, ei.A)(i.id),
                x = W.A.getFirstWishlistId(i.id),
                h = null != x,
                v = h ? W.A.getWishlistSettings(i.id, x) : null,
                A = (h ? rS.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: eK.intl.string(eK.t.laViwx), section: iS.RP.WIDGETS }),
                f.push({ text: eK.intl.string(eK.t.chq59f), section: iS.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = M.A.isFriend(i.id),
                C = v?.visibility === rR.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: eK.intl.string(eK.t["7lZ31J"]), section: iS.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, r_.A)(a), section: iS.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, rw.A)(d), section: iS.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eX } = (0, I.Ay)([...B, j.A.USER_PROFILE_MODAL_V2]),
        e$ = (0, V.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: X,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        eZ = i.useCallback(() => {
            (0, U.Wn)({ analyticsLocations: eX, ...e$, action: iS.pt.SHOW_STYLES_PANEL }), ew();
        }, [eX, e$, ew]),
        eJ = i.useCallback(() => {
            (0, U.Wn)({ analyticsLocations: eX, ...e$, action: iS.pt.HIDE_STYLES_PANEL }), eL();
        }, [eX, e$, eL]),
        eQ = (0, H.Ay)(l.id, X),
        e0 = void 0 !== eR ? eR?.skuId : eQ?.profileFrame?.skuId,
        e1 = (0, N.A)(e0, "UserProfileModalV2"),
        e2 = (0, y.A)(e0),
        { profileFrameStyle: e7, profileFrameClassName: e5 } = (0, k.A)(e1);
    (0, E.A)({ skuId: eQ?.profileFrame?.skuId, openedAt: D, context: e$, analyticsLocations: eX });
    let e3 = F.Ay.useName(eQ?.guildId, c, l),
        e9 = (0, R.GV)(),
        e8 = (0, s.bG)([L.A], () => (null != X ? L.A.getGuild(X) : null)),
        e6 = q
            ? null != e8
                ? eK.intl.formatToPlainString(eK.t.M7OhOF, { guildName: e8.name })
                : eK.intl.string(eK.t.egQPgM)
            : eK.intl.format(eK.t.KRe1Fk, { name: e3 });
    return (0, t.jsx)(I.f5, {
        value: eX,
        children: (0, t.jsx)(V.of, {
            value: e$,
            openedAt: D,
            fetchStartedAt: eQ?.fetchStartedAt,
            fetchEndedAt: eQ?.fetchEndedAt,
            isLoaded: eQ?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eW,
                children: (0, t.jsx)(ev.N, {
                    value: S,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(rM.zr, { [rM.QF]: eQ?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e9,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(iz, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(rL.layoutContainer, e5, {
                                        [rL.editingPanelEnabled]: em,
                                        [rL.editingPanelExpanded]: em && eT,
                                        [rL.isAnimating]: eO,
                                    }),
                                    style: e7,
                                    children: [
                                        (0, t.jsxs)(rz, {
                                            user: l,
                                            displayProfile: eQ,
                                            pendingThemeColors: eI,
                                            isPremiumTryItOut: et,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: rM.Oo,
                                                    children: [
                                                        (0, t.jsx)(lv.A, { onClose: Y }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e9, children: e6 }),
                                                        }),
                                                        eV &&
                                                            (0, t.jsx)(iA, {
                                                                buttonRef: eM,
                                                                onClick: eZ,
                                                                className: rL.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eB &&
                                                    (0, t.jsx)("div", {
                                                        className: rL.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(iv, {
                                                            innerRef: eG,
                                                            onClick: eZ,
                                                            className: rL.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                em &&
                                                    e_((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(ib, {
                                                                  className: a()(rL.editingPanel, {
                                                                      [rL.isExpanded]: eT,
                                                                  }),
                                                                  selectedGuildId: $,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: J,
                                                                  onClose: eJ,
                                                                  collapseButtonRef: eF,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: ee,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eD.A, {
                                                    className: a()(K, rM.A7, rL.profileContentOuter),
                                                    innerClassName: rL.profileContentInner,
                                                    user: l,
                                                    displayProfile: eQ,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: eI,
                                                    isPrivate: eQ?.private === !0,
                                                    forceShowPremium: et,
                                                    children: [
                                                        (0, t.jsx)(rV, { displayProfile: eQ, pendingBanner: eN }),
                                                        eQ?.private === !0 && (0, t.jsx)(eS.A, {}),
                                                        !eb && (0, t.jsx)(iZ, { className: rL.noticeContainer }),
                                                        ez &&
                                                            (0, t.jsx)("div", {
                                                                className: rL.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(iL, {
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
                                                                    actionDisabled: !em && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: rL.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: Y }),
                                                        }),
                                                        (0, t.jsxs)(iB, {
                                                            showScrim: eq,
                                                            showLoadingSpinner: Z,
                                                            className: rL.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(rW, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: X,
                                                                    channelId: c,
                                                                    displayProfile: eQ,
                                                                    nickname: e3,
                                                                    originGuildId: d,
                                                                    hasEntered: T === h.ip.ENTERED,
                                                                    customStatusPrompt: O,
                                                                    onClose: Y,
                                                                    avatarDecorationOverride: eC,
                                                                    avatarOverride: ey,
                                                                    bannerOverride: eN,
                                                                    accentColorOverride: eE,
                                                                    profileEffectOverride: eP,
                                                                    profileFrame: e1,
                                                                    fadeInProfileFrame: e2,
                                                                    allowEditing: ej,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(iH.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eQ,
                                                                    guildId: X,
                                                                    channelId: c,
                                                                    items: eY,
                                                                    initialSection: P,
                                                                    onClose: Y,
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
                            (0, t.jsx)(ij.A, { userId: l.id, guildId: X, className: rL.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function rK(e) {
    return (0, t.jsx)(lV, { children: (0, t.jsx)(rH, { ...e }) });
}
