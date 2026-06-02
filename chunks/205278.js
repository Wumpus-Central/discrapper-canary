n.d(l, { A: () => ic });
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
    p = n(231723),
    x = n(241524),
    v = n(770178),
    h = n(80682),
    A = n(793574),
    b = n(688810),
    j = n(480335),
    I = n(31956),
    C = n(361628),
    y = n(744808),
    N = n(875741),
    E = n(915089),
    P = n(713517),
    k = n(645507),
    R = n(922590),
    S = n(821269),
    T = n(93246),
    D = n(561794),
    O = n(994500),
    _ = n(351906),
    L = n(562153),
    M = n(474090),
    w = n(183555),
    G = n(841595),
    U = n(591179),
    V = n(999291),
    F = n(101928),
    B = n(837529),
    z = n(346713),
    H = n(573648),
    W = n(941314),
    K = n(429913),
    q = n(321078),
    X = n(403362),
    Y = n(484509),
    Z = n(920601),
    $ = n(919395),
    J = n(101058),
    Q = n(696451),
    ee = n(287809),
    el = n(836602),
    en = n(996988),
    et = n(207634);
let ei = (0, o.FT)(et.T[en.d.MODAL_V2].avatarSize),
    er = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var ea = n(903209);
async function es(e, l) {
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
var eo = n(716804),
    ed = n(679492),
    eu = n(718019),
    ec = n(328296),
    eg = n(915614),
    ef = n(744753),
    em = n(559506),
    ep = n(361311),
    ex = n(931481),
    ev = n(439053),
    eh = n(743987),
    eA = n(312381),
    eb = n(501193),
    ej = n(383448),
    eI = n(946356),
    eC = n(983495),
    ey = n(280645),
    eN = n(109112),
    eE = n(939249),
    eP = n(834730),
    ek = n(730134),
    eR = n(169869),
    eS = n(837057),
    eT = n(310419),
    eD = n(773669),
    eO = n(889227),
    e_ = n(967198),
    eL = n(488995),
    eM = n(375708),
    ew = n(985176);
function eG(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eR.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: ew.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(ek.A, { user: new eO.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eN._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, t.jsxs)(eE.D, {
                        className: ew.OB,
                        onClick: () => {
                            i?.(),
                                (0, eS.transitionToGlobalDiscovery)({
                                    tab: eL.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eT.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eP.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eP.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eP.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: ew.nk,
                                children: eM.intl.format(eM.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: ew.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eU(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, w.NJ)(),
        o = (0, s.bG)([eD.default], () => eD.default.locale),
        d = (0, s.bG)([e_.A], () => e_.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(ew.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: ew.FI,
                          children: (0, t.jsx)(eG, {
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
var eV = n(240248),
    eF = n(308244),
    eB = n(428262),
    ez = n(84540),
    eH = n(621466);
n(321073);
var eW = n(219869),
    eK = n(990078),
    eq = n(775602),
    eX = n(916315);
function eY(e, l) {
    let [n, t] = i.useState("idle"),
        [r, a] = i.useState(e),
        o = "editing" === n,
        d = (0, s.bG)([eq.A], () => eq.A.useReducedMotion),
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
                !o || (null != c.current && (0, eH.vq)(e.relatedTarget) && c.current.contains(e.relatedTarget)) || v();
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
function eZ(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: eX.L7,
            children: (0, t.jsx)(eW.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(eK.m, { text: l, ariaHidden: !0, children: i });
}
function e$(e) {
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
        } = e,
        A = i.useRef(null),
        b = i.useId(),
        j = i.useId(),
        I = null == n,
        C = null != m,
        y = "compact" !== g && C,
        N = [];
    I && N.push(b), y && N.push(j);
    let E = N.length > 0 ? N.join(" ") : void 0,
        P = (0, t.jsxs)("div", {
            ref: A,
            className: a()(eX.LL, C && eX.JD),
            onClick: u,
            children: [
                I
                    ? (0, t.jsx)(eP.E, {
                          id: b,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: eX.qf,
                          children: r,
                      })
                    : n,
                (0, t.jsx)(eE.D, {
                    innerRef: o,
                    "aria-label": d,
                    "aria-describedby": E,
                    "aria-expanded": !1,
                    onClick: (e) => {
                        e.stopPropagation(), u();
                    },
                    focusProps: { ringTarget: A },
                }),
                null != f && (0, t.jsx)("div", { className: eX.lD, children: (0, t.jsx)(eZ, { ...f }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(eX.kL, { [eX.oE]: "compact" === g, [eX.c1]: "multiline" === g }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: eX.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: eX.VH, children: P }),
                              y &&
                                  (0, t.jsxs)(eP.E, {
                                      id: j,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      className: eX.VP,
                                      children: [(0, t.jsx)(c.E, { size: "xs", color: "currentColor" }), m],
                                  }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var eJ = n(786826);
function eQ(e) {
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
            handleInputCommit: f,
            preview: m,
            placeholder: p,
            editButtonAriaLabel: x,
            label: v,
            maxLength: h,
            rows: A,
            emojiPickerIntention: b,
            error: j,
            className: I,
        } = e,
        C = null != h && (l ? r : n).length > h ? eM.intl.formatToPlainString(eM.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback(
            (e) => {
                (e.metaKey || e.ctrlKey) && "Enter" === e.key && (e.preventDefault(), f());
            },
            [f],
        );
    return (0, t.jsx)(e$, {
        isEditing: l,
        preview: m,
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
        input: (0, t.jsx)(eJ.f, {
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
let e0 = [
    { value: "HAIKU", label: () => eM.intl.string(eM.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eM.intl.string(eM.t.CXkR1L) },
    { value: "TELL_US", label: () => eM.intl.string(eM.t.eutr4P) },
    { value: "FUN_FACT", label: () => eM.intl.string(eM.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eM.intl.string(eM.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eM.intl.string(eM.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eM.intl.string(eM.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eM.intl.string(eM.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eM.intl.string(eM.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eM.intl.string(eM.t.u7WCGI) },
];
var e1 = n(652215),
    e7 = n(307731);
function e2(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = d?.guildId != null,
        g = eB.Ay.canUsePremiumProfileCustomization(u),
        {
            value: f,
            previewValue: m,
            onCommit: p,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingBio)),
        (a = n ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? a ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, ez.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        x = (function (e, l) {
            let { isEditing: n, wrapperRef: t, handleCommit: r, ...a } = eY(e, l),
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
                        (0, eH.vq)(e.target) && !s(e.target) && r();
                    };
                return e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l);
            }, [n, t, s, r]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let l = e.relatedTarget;
                    !(0, eH.vq)(l) || s(l) || r();
                },
                [n, s, r],
            );
            return { isEditing: n, wrapperRef: t, handleCommit: r, ...a, onBlur: o };
        })(f, p),
        v = !(0, eV.uJ)(m),
        h = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * e0.length)), e0[e];
        }, []),
        A = c ? eM.intl.string(eM.t.yPJ9xr) : h.label();
    return !c || g
        ? (0, t.jsx)(eQ, {
              ...x,
              preview: v ? (0, t.jsx)(eF.A, { userBio: m, setLineClamp: !1 }) : null,
              placeholder: A,
              editButtonAriaLabel: eM.intl.string(eM.t.lO3n7a),
              label: eM.intl.string(eM.t["YWo+Zd"]),
              emojiPickerIntention: e7.EmojiIntention.PROFILE,
              maxLength: e1.NA2,
          })
        : v
          ? (0, t.jsx)(eF.A, { userBio: m, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function e3(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eV.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eM.intl.string(eM.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(e2, { displayProfile: l }) : (0, t.jsx)(eF.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var e8 = n(982168),
    e9 = n(722868),
    e5 = n(822775),
    e6 = n(982985),
    e4 = n(700174),
    le = n(34188),
    ll = n(859040),
    ln = n(23722),
    lt = n(993401);
function li(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, b.Ay)(),
        a = (0, ln.A)(() => {
            (0, ll.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lt.q3, {
        action: "VISIT_SHOP",
        icon: le.U,
        tooltipText: eM.intl.string(eM.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var lr = n(573355),
    la = n(102951);
function ls(e) {
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
        u = (0, U.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, b.Ay)(),
        g = (0, e9.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, la.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === e1.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(e6.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(li, { onClose: d }),
                        (0, t.jsx)(e4.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(e5.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(li, { onClose: d }),
                        (0, t.jsx)(e4.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(e6.e, { userId: l.id, onClose: e8.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(e4.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === e1.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(e6.e, { userId: l.id, onClose: e8.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(e4.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === e1.eA$.FRIEND || o === e1.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(e6.e, { userId: l.id, onClose: e8.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lr.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(e4.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === e1.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(e6.e, { userId: l.id, onClose: e8.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lr.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(e4.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lr.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(e6.l, { userId: l.id, onClose: e8.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(e4.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lo = n(463156),
    ld = n(349288),
    lu = n(509434),
    lc = n(307301),
    lg = n(228366),
    lf = n(95561),
    lm = n(874490),
    lp = n(370480),
    lx = n(968309),
    lv = n(174459),
    lh = n(486020),
    lA = n(123917),
    lb = n(783419);
let lj = "User Profile Modal V2";
function lI(e) {
    let l = H.A.get(e);
    (0, lx.A)({ platformType: l.type, location: lj }),
        lv.default.track(e1.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lj,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lC() {
    lg.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lI, stackingBehavior: "stack" });
}
function ly(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, lp.An)(r[lb.pK.CREATED_AT], n),
        s = H.A.get((0, lm.ML)(l.type));
    return (0, t.jsx)(lE, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(eK.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eP.E, { variant: "text-sm/normal", className: ew.GW, children: l.name }),
                  })
                : (0, t.jsx)(ld.Anchor, {
                      href: e,
                      className: ew.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eM.intl.string(eM.t.q5jLJB)}`
                              : `${l.name}, ${eM.intl.string(eM.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lf.zV)(e1.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lA.h)({ href: e, trusted: s?.type !== e1.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: ew.vi,
                          children: [
                              (0, t.jsx)(eK.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eP.E, {
                                      variant: "text-sm/normal",
                                      className: ew.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lu.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === e1.fg2.REDDIT
                ? (0, eR.xE)(r)
                : l.type === e1.fg2.STEAM
                  ? (0, eR.dy)(r)
                  : l.type === e1.fg2.BLUESKY || l.type === e1.fg2.MASTODON || l.type === e1.fg2.TWITTER
                    ? (0, eR.ED)(r)
                    : l.type === e1.fg2.PAYPAL
                      ? (0, eR.gZ)(r)
                      : l.type === e1.fg2.EBAY
                        ? (0, eR.ub)(r)
                        : l.type === e1.fg2.TIKTOK
                          ? (0, eR.HU)(r)
                          : null,
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lN(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lh.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lE, {
        renderAccountName: () =>
            (0, t.jsx)(eK.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eP.E, {
                    variant: "text-sm/normal",
                    className: ew.GW,
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
function lE(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: r,
        createdAtDate: s,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: ew.FI,
        children: [
            (0, t.jsx)(eK.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: ew.k_,
                    children: (0, t.jsx)("img", {
                        alt: eM.intl.formatToPlainString(eM.t.rtm15P, { name: i }),
                        className: a()(ew.tV, o ? ew.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: ew.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eP.E, {
                                    variant: "text-xs/normal",
                                    children: eM.intl.format(eM.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: ew.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lP(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([eD.default], () => eD.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(ew.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: ew.V,
                    children: [
                        l.map((e) => (0, t.jsx)(ly, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lN, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eE.D, {
                    className: ew.qG,
                    onClick: lC,
                    children: [
                        (0, t.jsx)(lc.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eP.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eM.intl.string(eM.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lk = n(922139),
    lR = n(193885),
    lS = n(661531),
    lT = n(408278),
    lD = n(890377),
    lO = n(789645),
    l_ = n(534514),
    lL = n(821609),
    lM = n(403581),
    lw = n(194261),
    lG = n(689175),
    lU = n(517461),
    lV = n(13875),
    lF = n(783420),
    lB = n(487233),
    lz = n(120386),
    lH = n(317097),
    lW = n(602853),
    lK = n(922016),
    lq = n(508274),
    lX = n(654107),
    lY = n(930349);
function lZ(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, lW.r)(lS.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, lX.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([el.A, G.A], () => ({
            pendingAccentColor: el.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: G.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, lH.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, ez.p)({ accentColor: e }), []);
    return (0, t.jsx)(lK.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(lq.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(lY.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eM.intl.string(eM.t["/X3fkf"]),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, lH.Hl)(c) } }),
            }),
    });
}
var l$ = n(450373),
    lJ = n(252732),
    lQ = n(339984),
    l0 = n(111242);
function l1(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: l0.o, style: { backgroundColor: l } });
}
function l7(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: l0._ });
}
function l2(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, lW.r)(lS.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, lH.LX)(r),
        { hex: s } = (0, l$.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(l7, { src: o }) : (0, t.jsx)(l1, { backgroundColor: s });
}
function l3(e) {
    let { userId: l, guildId: n, disabled: i } = e,
        { newestAnalyticsLocation: r } = (0, b.Ay)(),
        a = null != n,
        o = (0, V.Ay)(l, n),
        d = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0).pendingBanner),
        u = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.banner),
        c = (0, s.bG)([G.A], () =>
            null != n ? G.A.getGuildMemberProfile(l, n)?.banner : G.A.getUserProfile(l)?.banner,
        ),
        g = null === d,
        f = a && (o?.isUsingGuildMemberBanner() ?? !1),
        m = g && a && !f ? void 0 : d,
        p = (0, $.Ac)(d, c),
        x = a && null != u,
        v = p
            ? {
                  onClick: () => (0, lJ.rM)(null, c, (e) => (0, ez.p)({ guildId: n ?? void 0, banner: e })),
                  type: x ? "reset" : "remove",
                  accessibleLabel: eM.intl.string(x ? eM.t.jHlJNS : eM.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(lY.V, {
        affordance: v,
        variant: "square",
        onClick: () =>
            (0, lJ.XD)({
                uploadType: lQ.HL.BANNER,
                analyticsSource: r,
                guildId: n ?? void 0,
                stackingBehavior: "stack",
            }),
        accessibleLabel: eM.intl.string(eM.t.N0bC3P),
        "aria-haspopup": "dialog",
        disabled: i,
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, t.jsx)(l2, { displayProfile: o, pendingBanner: m, shouldAnimate: e }),
    });
}
var l8 = n(922301),
    l9 = n(368919),
    l5 = n(259065),
    l6 = n(283607);
let l4 = "heading-lg/bold";
function ne(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: l6.M,
        children:
            null != n
                ? (0, t.jsx)(eP.E, {
                      variant: l4,
                      children: (0, t.jsx)(l9.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? l8.G.ANIMATED : l8.G.STATIC,
                          textClassName: l6.W,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eP.E, { variant: l4, className: l6.W, color: "text-muted", children: l }),
    });
}
function nl(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        o = null != n,
        d = (0, s.bG)([Q.Ay], () => (null != n ? (Q.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        u = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.globalName ?? null),
        c = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingGlobalName),
        g = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: f,
            guildDisplayNameStyles: m,
            pendingDisplayNameStyles: p,
        } = (0, $.B0)(l, n ?? void 0),
        x = o ? m : f,
        v = void 0 !== p,
        h = null === p,
        A = o && null != f,
        j = (0, $.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        I = (e) => (null == e || "" === e ? void 0 : e),
        C = void 0 !== c ? c : u,
        y = o ? (I(void 0 !== g ? g : d) ?? I(C) ?? l.username) : (I(C) ?? l.username),
        N =
            null != j && (v ? null != p : null != x)
                ? {
                      onClick: () => (0, ez.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: A ? "reset" : "remove",
                      accessibleLabel: eM.intl.string(A ? eM.t.en3ogK : eM.t["Wqmi/h"]),
                  }
                : void 0,
        E = i.useCallback(() => {
            (0, l5.L)({ analyticsLocations: a, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [a, n]);
    return (0, t.jsx)(lY.V, {
        affordance: (!h && (v || null != x)) || A ? N : "add",
        variant: "bar",
        onClick: E,
        accessibleLabel: eM.intl.string(eM.t.XJ4oOO),
        "aria-haspopup": "dialog",
        renderPreview: (e) => (0, t.jsx)(ne, { stylesPreview: j, displayName: y, shouldAnimate: e }),
        disabled: r,
    });
}
var nn = n(473219),
    nt = n(366010),
    ni = n(736653),
    nr = n(617061),
    na = n(203632),
    ns = n(71393),
    no = n(466681);
let nd =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nu =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nc(e) {
    let { effect: l, shouldAnimate: n } = e,
        i = (0, ni.Ay)(),
        r = (0, nt.M)(i) ? nd : nu;
    return (0, t.jsxs)("div", {
        className: no.ti,
        "aria-hidden": !0,
        children: [
            (0, t.jsx)("img", { src: r, alt: "", className: no.QQ }),
            l?.skuId != null &&
                (0, t.jsx)(j.A, {
                    skuId: l.skuId,
                    autoPlay: !1,
                    resetOnHover: !0,
                    restartMethod: na.HL.FromStart,
                    isHovering: n,
                    useOpacityOnHover: !1,
                    useThumbnail: !0,
                    delayIntro: !1,
                }),
        ],
    });
}
function ng(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, b.Ay)(),
        d = null != n,
        u = (0, s.bG)([ns.A], () => (null != n ? ns.A.getGuild(n) : null)),
        c = (0, $.N2)({ user: l }),
        g = (0, $.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, $.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        v = (0, $.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        h =
            null != v && (m ? null != f : null != g)
                ? {
                      onClick: () => (0, ez.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eM.intl.string(x ? eM.t["SQy/Po"] : eM.t.uMuafO),
                  }
                : void 0,
        A = i.useCallback(() => {
            (0, nr.W)({
                analyticsLocations: o,
                guild: u ?? void 0,
                initialSelectedEffect: v ?? void 0,
                stackingBehavior: "stack",
            });
        }, [o, u, v]);
    return (0, t.jsx)(lY.V, {
        affordance: p && !x ? "add" : h,
        variant: a,
        onClick: A,
        accessibleLabel: eM.intl.string(eM.t["/dRfCf"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) => (0, t.jsx)(nc, { effect: v, shouldAnimate: e }),
    });
}
var nf = n(515727),
    nm = n(84391);
let np = (e) => {
    let { responsive: l } = e;
    return !0 !== l;
};
function nx(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: o } = (0, b.Ay)(),
        d = (0, ni.Ay)(),
        u = (0, nt.M)(d) ? nd : nu,
        c = null != n,
        g = (0, s.bG)([ns.A], () => (null != n ? ns.A.getGuild(n) : null)),
        f = (0, $.Xf)({ user: l }),
        m = (0, $.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: p } = (0, $.Tu)(n ?? void 0),
        x = void 0 !== p,
        v = null === p || (!x && null == m),
        h = c && null != f,
        A = (0, $.lw)({ pendingValue: p, userValue: f, guildValue: m, guildId: n ?? void 0 }),
        j = (0, C.A)(A?.skuId, "EditableTileProfileFrameButton"),
        { profileFrameStyle: I, profileFrameClassName: E } = (0, N.A)(j?.skuId),
        P =
            null != A && (x ? null != p : null != m)
                ? {
                      onClick: () => (0, ez.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eM.intl.string(h ? eM.t.j6hZyM : eM.t.nQBruk),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, nf.w)({
                analyticsLocations: o,
                guild: g ?? void 0,
                initialSelectedProfileFrame: j,
                stackingBehavior: "stack",
            });
        }, [o, g, j]);
    return (0, t.jsx)(lY.V, {
        affordance: v && !h ? "add" : P,
        variant: "square",
        onClick: k,
        accessibleLabel: eM.intl.string(eM.t["9/hmle"]),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: () =>
            (0, t.jsxs)("div", {
                className: a()(nm.ti, { [nm.yT]: null == j }),
                children: [
                    (0, t.jsx)("img", { src: u, alt: "", className: nm.QQ, draggable: !1 }),
                    null != j &&
                        (0, t.jsx)("div", {
                            className: a()(nm.hm, E),
                            style: I,
                            children: (0, t.jsx)(y.A, { frame: j, filterLayer: np }),
                        }),
                ],
            }),
    });
}
var nv = n(33851),
    nh = n.n(nv),
    nA = n(684732),
    nb = n(458217),
    nj = n(298387);
function nI(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, lH.Hl)(l),
        f = (0, lH.bJ)(l, 0xffffff) < nb.Tr.NonText;
    return (0, t.jsx)(lK.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(lq.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eE.D, {
                ...n,
                innerRef: c,
                className: nj.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nj.Hy, { [nj.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nC(e) {
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
        c = (0, lH.Hl)(l),
        g = (0, lH.Hl)(n),
        f = `linear-gradient(to bottom, ${c}, ${g})`,
        m = eM.intl.formatToPlainString(eM.t.FquTfm, { colorLabel: c }),
        p = eM.intl.formatToPlainString(eM.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(lY.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nj.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nI, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nI, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function ny(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, V.Ay)(l.id, n),
        {
            pendingThemeColors: o,
            pendingAvatar: d,
            savedThemeColors: u,
        } = (0, s.cf)([el.A, G.A], () => {
            let e = el.A.getPendingChanges(n ?? void 0);
            return {
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
                savedThemeColors: null != n ? G.A.getGuildMemberProfile(l.id, n)?.themeColors : void 0,
            };
        }),
        c = (0, J.V7)({ userId: l.id, image: d }),
        { primaryColor: g, secondaryColor: f } = (0, F.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: o,
            pendingAvatarSrc: c ?? void 0,
            isPreview: !0,
        }),
        m = (0, lW.r)(lS.A.unsafe_rawColors.PRIMARY_530).hex(),
        p = null != c ? c : l.getAvatarURL(n ?? void 0, 80),
        x = (0, lX.rh)(p, m, !1),
        v = i.useCallback(
            (e) => {
                let l = nh()(e, a?.themeColors);
                (0, ez.p)({ guildId: n ?? void 0, themeColors: l ? void 0 : e });
            },
            [a?.themeColors, n],
        ),
        h =
            null != n && (0, nA.l)(o, u)
                ? {
                      onClick: () => (0, ez.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eM.intl.string(eM.t["L+GmoR"]),
                  }
                : void 0;
    return null == g || null == f
        ? null
        : (0, t.jsx)(nC, {
              primaryColor: g,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  e !== g && v([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  e !== f && v([g, e]);
              },
              suggestedColors: x,
              disabled: r,
              deleteButton: h,
          });
}
var nN = n(315629),
    nE = n(788868),
    nP = n(235684);
function nk() {
    return (0, t.jsx)(lF.A, {
        subscriptionTier: nE.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)(nN.h, {
                color: "nitro-pink",
                className: nP.U,
                children: [
                    (0, t.jsx)(eP.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eM.intl.format(eM.t.TmfgI2, { onClick: (e) => l(e) }),
                    }),
                    (0, t.jsx)(lL.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lM.t,
                        text: eM.intl.string(eM.t.pj0XBN),
                        onClick: l,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var nR = n(55619),
    nS = n(942308);
function nT() {
    return (0, t.jsxs)("div", {
        className: nS.k,
        children: [
            (0, t.jsx)(eP.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eM.intl.string(eM.t.JFY17v),
            }),
            (0, t.jsx)(lL.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eM.intl.string(eM.t.R9GHya),
                onClick: () => nR.A.setEnabled(!1),
            }),
        ],
    });
}
var nD = n(847374),
    nO = n(111159),
    n_ = n(548118),
    nL = n(711014),
    nM = n(540637),
    nw = n(801461),
    nG = n(44482),
    nU = n(844222),
    nV = n(561392),
    nF = n(716263),
    nB = n(15626),
    nz = n(930856);
function nH(e) {
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
            let { reducedMotion: e } = i.useContext(nU.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, nV.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, nF.DL)(o, {
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
        y = i.useContext(nB._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, nw.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        _ = i.useRef(!1),
        L = i.useMemo(() => l.filter((e) => (0, nw.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
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
                    if (_.current) {
                        _.current = !1;
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
        { activeIndex: F, handleKeyDown: B } = (0, nM.l)(!0, l),
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
                                    V([e]);
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
                            V([e]);
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
                        (_.current = !0), v(!1);
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
            l.findIndex((e) => e.id === L[L.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (O.current = !1))
            : ((K.current = !0), O.current || T(l.length > 0 ? W : null), (O.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let q = {
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
            null != s && (0, t.jsx)(f.A, { tag: "label", id: N, children: s }),
            p({ buttonRef: k, selectButtonProps: q }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(nz.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(nM.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: L,
                        onSelectionChange: V,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(nG.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var nW = n(138325);
let nK = "MAIN_PROFILE";
function nq(e) {
    let { guild: l } = e;
    return (0, t.jsx)(n_.Ay, { className: nW.$f, guild: l, size: n_.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function nX(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eE.D, {
        innerRef: r,
        className: a()(nW.L5, { [nW.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eP.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: nW.v9,
                children: n,
            }),
            (0, t.jsx)(nD.a, {
                className: nW.u4,
                size: "sm",
                color: !0 === i ? lS.A.colors.ICON_MUTED : lS.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function nY(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([nL.Ay], () => nL.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([ns.A], () => ns.A.getGuilds()),
        c = (0, s.bG)([e_.A], () => {
            let e = e_.A.getGuildId();
            return null == e || el._.has(e) ? null : e;
        }),
        g = i.useMemo(() => {
            let e = {
                    id: nK,
                    label: eM.intl.string(eM.t["2p07FR"]),
                    value: nK,
                    leading: (0, t.jsx)(nO.p, { size: "refresh_sm", color: lS.A.colors.ICON_DEFAULT }),
                },
                l = n ?? c,
                i = d
                    .map((e) => {
                        if (e === l) return null;
                        let n = u[e];
                        return null == n
                            ? null
                            : { id: n.id, label: n.name, value: n.id, leading: (0, t.jsx)(nq, { guild: n }) };
                    })
                    .filter(X.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [e, { id: r.id, label: r.name, value: r.id, leading: (0, t.jsx)(nq, { guild: r }) }, ...i];
        }, [d, u, n, c]),
        f = l ?? nK,
        m = g.find((e) => e.value === f) ?? g[0],
        p = i.useCallback(
            (e) => {
                let n = e === nK ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(nH, {
        className: nW.kL,
        label: eM.intl.string(eM.t.rki38K),
        listboxClassName: nW.yt,
        options: g,
        value: f,
        onSelectionChange: p,
        loading: a,
        disabled: o,
        children: (e) =>
            (0, t.jsx)(nX, { leading: m.value === nK ? null : m.leading, label: m.label, disabled: o, ...e }),
    });
}
var nZ = n(809467);
let n$ = "profile-modal-editing-panel",
    nJ = "profile-modal-editing-panel-heading";
function nQ(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(eK.m, {
        text: eM.intl.string(eM.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eE.D, {
            innerRef: i,
            "aria-label": eM.intl.string(eM.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": n$,
            className: a()(nZ.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lR.V, { size: "sm", color: lS.A.colors.ICON_STRONG }),
        }),
    });
}
function n0(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(eK.m, {
            text: eM.intl.string(eM.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lT.K, {
                buttonRef: i,
                "aria-label": eM.intl.string(eM.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": n$,
                icon: lR.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function n1(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(eK.m, {
        text: eM.intl.string(eM.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eE.D, {
            innerRef: n,
            className: nZ.cS,
            "aria-label": eM.intl.string(eM.t["l/A351"]),
            onClick: l,
            "aria-controls": n$,
            "aria-expanded": !0,
            children: (0, t.jsx)(lD.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function n7() {
    let [e, l] = (0, lU.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: nZ.X6,
              children: [
                  (0, t.jsx)(eP.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eM.intl.string(eM.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eE.D, {
                      "aria-label": eM.intl.string(eM.t.rSe9ra),
                      className: nZ.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lO.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function n2() {
    return (0, t.jsx)(lF.A, {
        subscriptionTier: nE.pe.TIER_2,
        children: (e) => {
            let { onClick: l } = e;
            return (0, t.jsxs)("div", {
                className: nZ.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: nZ.tm,
                        children: [
                            (0, t.jsx)(l_.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eM.intl.string(eM.t.bO0TOe),
                            }),
                            (0, t.jsx)(eP.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eM.intl.format(eM.t["3PujdE"], { onClick: (e) => l(e) }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lL.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lM.t,
                        text: eM.intl.string(eM.t["7IWwak"]),
                        onClick: l,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: nZ.D0,
                        children: (0, t.jsx)("div", { className: nZ.ZN, children: (0, t.jsx)(lw.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function n3() {
    return (0, t.jsx)(eP.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: nZ.BJ,
        "aria-hidden": !0,
        children: eM.intl.format(eM.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lM.t, { size: "xxs", color: "currentColor", className: nZ.qp }),
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
                    (0, t.jsx)(l_.D, {
                        className: nZ.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(eK.m, {
                            text: eM.intl.string(eM.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lM.t, {
                                className: nZ.l3,
                                size: "xs",
                                color: i ? lS.A.colors.ICON_MUTED : lS.A.colors.ICON_STRONG,
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
        l ? (0, t.jsx)(lk.animated.div, { className: nZ.HT, style: e, children: (0, t.jsx)(nk, {}) }) : null,
    );
}
function n5(e) {
    let {
            selectedGuildId: l,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            onClose: d,
            className: u,
            collapseButtonRef: c,
        } = e,
        g = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()),
        p = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        x = (0, lV.sk)("UserProfileModalV2EditingPanel"),
        v = null != l,
        h = null != g && eB.Ay.canUsePremiumProfileCustomization(g),
        A = !h && !v,
        b = v && !h,
        j = (0, ln.A)(r),
        I = i.useRef(null),
        {
            isUpsellDismissed: C,
            handleScrollDismiss: y,
            shouldAddUpsellSafePadding: N,
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
        })({ scrollerRef: I, canShowUpsell: A });
    return null == g
        ? null
        : (0, t.jsxs)("aside", {
              id: n$,
              "aria-labelledby": nJ,
              className: a()(nZ.nd, { [nZ.VU]: b && !p }, u),
              "aria-busy": o,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: nJ, children: eM.intl.string(eM.t["L+ch00"]) }) }),
                  (0, t.jsxs)("div", {
                      className: nZ.wx,
                      children: [
                          (0, t.jsx)(n1, { innerRef: c, onClick: d }),
                          (0, t.jsx)(nY, {
                              selectedGuildId: l ?? null,
                              originGuildId: n,
                              onChange: j,
                              loading: o,
                              disabled: p,
                          }),
                      ],
                  }),
                  p
                      ? (0, t.jsx)(nT, {})
                      : (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(m.F, {
                                    children: (0, t.jsxs)(lG.zC, {
                                        ref: I,
                                        className: a()(nZ.XG, { [nZ.uH]: N }),
                                        onScroll: y,
                                        children: [
                                            v && (h ? (0, t.jsx)(n7, {}) : (0, t.jsx)(n2, {})),
                                            h && (0, t.jsx)(n3, {}),
                                            (0, t.jsx)(n8, {
                                                heading: eM.intl.string(eM.t.x5CoXR),
                                                disabled: o || b,
                                                children: (0, t.jsx)(nn.A, { user: g, guildId: l, disabled: o || b }),
                                            }),
                                            (0, t.jsxs)(n8, {
                                                heading: eM.intl.string(eM.t["50Nwpc"]),
                                                disabled: o || b,
                                                children: [
                                                    (0, t.jsx)(lB.A, { user: g, guildId: l, disabled: o || b }),
                                                    (0, t.jsx)(lz.A, { user: g, guildId: l, disabled: o || b }),
                                                ],
                                            }),
                                            (h || v) &&
                                                (0, t.jsx)(n8, {
                                                    heading: eM.intl.string(eM.t.NEzEws),
                                                    disabled: o || b,
                                                    showNitroIcon: !0,
                                                    children: (0, t.jsx)(nl, { user: g, guildId: l, disabled: o || b }),
                                                }),
                                            h || v
                                                ? (0, t.jsxs)(n8, {
                                                      heading: eM.intl.string(eM.t.Zenogr),
                                                      disabled: o || b,
                                                      showNitroIcon: !0,
                                                      children: [
                                                          (0, t.jsx)(ny, { user: g, guildId: l, disabled: o || !h }),
                                                          (0, t.jsx)(l3, {
                                                              userId: g.id,
                                                              guildId: l,
                                                              disabled: o || !h,
                                                          }),
                                                      ],
                                                  })
                                                : (0, t.jsx)(n8, {
                                                      heading: eM.intl.string(eM.t["/X3fkf"]),
                                                      disabled: o || b,
                                                      children: (0, t.jsx)(lZ, { user: g, disabled: o }),
                                                  }),
                                            (0, t.jsxs)(n8, {
                                                heading: eM.intl.string(x ? eM.t["Vfbar/"] : eM.t.wR5wOo),
                                                disabled: o || b,
                                                children: [
                                                    (0, t.jsx)(ng, {
                                                        user: g,
                                                        guildId: l,
                                                        disabled: o || b,
                                                        variant: x ? "square" : "full-height-bar",
                                                    }),
                                                    x && (0, t.jsx)(nx, { user: g, guildId: l, disabled: o || b }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                A && (0, t.jsx)(n9, { isDismissed: C }),
                            ],
                        }),
              ],
          });
}
var n6 = n(982599),
    n4 = n(756634),
    te = n(83013),
    tl = n(518477),
    tn = n(77085);
function tt(e) {
    let { userId: l } = e,
        n = (0, eo.g)(),
        { trackUserProfileAction: i } = (0, w.NJ)();
    return (0, t.jsx)(te.A, {
        heading: eM.intl.string(eM.t["mQKv+v"]),
        scrollTargetId: tl.bk.NOTE,
        children: (0, t.jsx)(n4.A, {
            userId: l,
            className: tn.N,
            autoFocus: n === tl.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ti = n(289873),
    tr = n(778599);
function ta(e) {
    let { isVisible: l, showLoadingSpinner: n, className: i } = e;
    return (0, t.jsx)("div", {
        className: a()(tr.f, l && tr.z, i),
        children: n && (0, t.jsx)(ti.y, { type: ti.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
    });
}
var ts = n(568602),
    to = n(625494);
function td(e) {
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
                to._.subscribe(e1.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    to._.unsubscribe(e1.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(ts.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var tu = n(515054),
    tc = n(933832),
    tg = n(972213),
    tf = n(97483),
    tm = n(765178),
    tp = n(606758),
    tx = n(707238),
    tv = n(861173);
let th = {
        [tl.jM.WIDGET_ADDED]: {
            message: eM.intl.string(eM.t.fFP1Uy),
            icon: (0, t.jsx)(tc.A, { size: "sm", color: lS.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_added",
        },
        [tl.jM.WIDGET_REMOVED]: {
            message: eM.intl.string(eM.t.zzsK7h),
            icon: (0, t.jsx)(tc.A, { size: "sm", color: lS.A.colors.STATUS_POSITIVE.css }),
            toast_id: "user_profile_widget_removed",
        },
        [tl.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eM.intl.string(eM.t["84MExs"]),
            icon: (0, t.jsx)(tg.d, { size: "sm", color: lS.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_save_generic_failure",
            type: tf.Ck.FAILURE,
        },
        [tl.jM.SOMETHING_WENT_WRONG]: {
            message: eM.intl.string(eM.t.F8FvUy),
            icon: (0, t.jsx)(tg.d, { size: "sm", color: lS.A.colors.ICON_FEEDBACK_CRITICAL }),
            toast_id: "user_profile_something_went_wrong",
            type: tf.Ck.FAILURE,
        },
    },
    tA = (e) => {
        let { message: l, icon: n, type: i } = e;
        return (0, t.jsxs)("div", {
            className: a()(tv.oR, tx.oR),
            "data-type": i,
            children: [
                (0, t.jsx)("div", { className: tx.RC, children: n }),
                (0, t.jsx)(eP.E, { color: "text-strong", variant: "text-sm/semibold", children: l }),
            ],
        });
    },
    tb = (e) => {
        let { className: l } = e,
            n = (0, tp.fu)(),
            r = (0, s.bG)([eq.A], () => eq.A.useReducedMotion),
            [o, u] = i.useState(!1),
            [c, g] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (u(!0), g(th[n]), tm.O.announce(th[n].message)) : u(!1);
        }, [n]);
        let f = (0, d.p)(
            o,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, tp.XA)(null), []),
            i.useEffect(() => {
                if (o) {
                    let e = setTimeout(() => {
                        (0, tp.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [o]),
            (0, t.jsx)(t.Fragment, {
                children: f(
                    (e, n) =>
                        n &&
                        null !== c &&
                        (0, t.jsx)(lk.animated.div, {
                            className: a()(l, tx.Jt),
                            style: e,
                            children: (0, t.jsx)(tA, { ...c }),
                        }),
                ),
            })
        );
    };
var tj = n(297413),
    tI = n(878555),
    tC = n(292666);
function ty(e, l) {
    let { isEditing: n, inputRef: t, ...r } = eY(e, l);
    return (
        i.useEffect(() => {
            n && null != t.current && t.current.setSelectionRange(t.current.value.length, t.current.value.length);
        }, [n, t]),
        { isEditing: n, inputRef: t, ...r }
    );
}
function tN(e) {
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
            error: f,
        } = e,
        m = i.useCallback(
            (e) => {
                "Enter" === e.key
                    ? (e.preventDefault(), s())
                    : "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), o());
            },
            [s, o],
        );
    return (0, t.jsx)(tC.k, {
        label: n,
        hideLabel: !0,
        inputRef: l,
        value: r,
        onChange: a,
        onBlur: d,
        onKeyDown: m,
        maxLength: u,
        placeholder: c,
        trailing: g,
        error: f,
    });
}
function tE(e) {
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
            handleInputCancel: f,
            preview: m,
            placeholder: p,
            editButtonAriaLabel: x,
            label: v,
            size: h = "default",
            maxLength: A,
            error: b,
            trailing: j,
            className: I,
        } = e,
        C = null != A && (l ? i : n).length > A ? eM.intl.formatToPlainString(eM.t.ICT5S6, { maxLength: A }) : void 0,
        y = l && i !== n,
        N = C ?? (y ? void 0 : b),
        E = {
            isEditing: l,
            preview: m,
            placeholder: p,
            editButtonRef: a,
            editButtonAriaLabel: x,
            onStartEditing: s,
            className: I,
            wrapperRef: o,
            onBlur: d,
            onKeyDown: u,
            input: (0, t.jsx)(tN, {
                inputRef: c,
                label: v,
                value: i,
                onChange: r,
                onCommit: g,
                onCancel: f,
                maxLength: A,
                placeholder: p,
                trailing: j,
                error: N,
            }),
        };
    return "compact" === h
        ? (0, t.jsx)(e$, { ...E, variant: "compact", previewErrorMessage: N })
        : (0, t.jsx)(e$, { ...E, variant: "default", trailing: j, previewErrorMessage: N });
}
var tP = n(35783);
function tk(e) {
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
        { analyticsLocations: p } = (0, b.Ay)(),
        x = m?.guildId != null,
        v = m?.guildId ?? void 0,
        h = eB.Ay.canUsePremiumProfileCustomization(f),
        {
            value: A,
            previewValue: j,
            onCommit: I,
        } = ((l = m?.guildId ?? null),
        (n = m?.guildId != null),
        (r = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([Q.Ay], () => (null != l ? (Q.Ay.getMember(l, f.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingNickname)),
        (u = n ? (d ?? a ?? "") : (o ?? r ?? "")),
        (c = (e) => (null == e || "" === e ? void 0 : e)),
        (g = void 0 !== o ? o : r),
        {
            value: u,
            previewValue: n ? (c(void 0 !== d ? d : a) ?? c(r)) : (c(g) ?? f.username),
            onCommit: i.useCallback(
                (e) => {
                    n
                        ? (0, ez.p)({ nickname: e.trim(), guildId: m?.guildId ?? void 0 })
                        : (0, ez.p)({ globalName: e.trim() });
                },
                [n, m?.guildId],
            ),
        }),
        C = ty(A, I),
        { isEditing: y, handleCommit: N } = C,
        E = (0, s.bG)([el.A], () => el.A.getPendingChanges(v ?? null).pendingDisplayNameStyles),
        P = eM.intl.string(x ? eM.t.mq6Cg9 : eM.t.XuZU7A),
        k = x ? eM.intl.string(eM.t.YcDKr8) : f.username,
        R = eM.intl.string(x ? eM.t["g7OSZ/"] : eM.t.kyfzzc),
        S = i.useRef(null),
        T = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    y && N(),
                    (0, l5.L)({ analyticsLocations: p, guildId: v, stackingBehavior: "stack", returnRef: S });
            },
            [y, N, p, v],
        ),
        D = {
            icon: lR.V,
            tooltip: eM.intl.string(eM.t.lqKKI2),
            "aria-label": eM.intl.string(eM.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: T,
            buttonRef: S,
        },
        O =
            null != j
                ? (0, t.jsx)(tI.c$, {
                      user: f,
                      guildId: v,
                      displayName: j,
                      size: "lg",
                      pendingDisplayNameStyles: E,
                      className: tP.d,
                  })
                : null;
    return (0, t.jsx)(tE, {
        ...C,
        preview: O,
        placeholder: k,
        editButtonAriaLabel: R,
        label: P,
        maxLength: e1.zzC,
        trailing: h ? D : void 0,
    });
}
var tR = n(469432);
function tS(e) {
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
        (r = (0, s.bG)([el.A], () => el.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, ez.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        m = ty(c, f),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eM.intl.string(x ? eM.t.AXiE0i : eM.t["76Aqhl"]);
    return (0, t.jsx)(tE, {
        ...m,
        size: "compact",
        className: a()(tR.k, p && tR.J),
        preview: v ? (0, t.jsx)(tI.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eM.intl.string(eM.t.h6VAO7),
        label: eM.intl.string(eM.t["rniRE+"]),
        placeholder: h,
        maxLength: e1.VE5,
    });
}
var tT = n(145497),
    tD = n(685073),
    tO = n(318785),
    t_ = n(534400),
    tL = n(743981),
    tM = n(724637),
    tw = n(329296);
let tG = "no-server-tag";
function tU(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eE.D, {
        innerRef: l,
        className: a()(tM.L5, { [tM.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eP.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: tM.W3,
            tag: "span",
            children: [
                o
                    ? eM.intl.string(eM.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  t_.Z9,
                                  {
                                      src: (0, tD.gC)(n, r, tL.Sl.SIZE_14),
                                      size: tL.Sl.SIZE_14,
                                      className: tM.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, tD.gC)(n, r, tL.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(nD.a, { size: "xs", color: "currentColor", className: tM.u4 }),
            ],
        }),
    });
}
function tV() {
    let e = (0, tO.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ee.default], () => {
            let e = ee.default.getCurrentUser();
            return (0, tD.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([el.A], () => el.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === tG
                    ? (0, t.jsx)("div", {
                          className: tw.uN,
                          children: (0, t.jsx)(eP.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: tM.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(nG.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: tG, label: eM.intl.string(eM.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(tT.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(t_.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, ez.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(nH, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eM.intl.string(eM.t.Pdd1nd),
              listboxClassName: tM.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(tU, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var tF = n(874644);
function tB(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(tI.Ay, {
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
        : (0, t.jsx)(tj.A, {
              user: l,
              forceUsername: !0,
              className: tF.a1,
              usernameClass: tF.eb,
              discriminatorClass: tF.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(tk, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(tF.AK, tF.j6),
                children: [d, (0, t.jsx)(tI.Ce, {}), (0, t.jsx)(tS, { displayProfile: n }), (0, t.jsx)(tV, {}), r],
            }),
        ],
    });
}
var tz = n(97808),
    tH = n(980707),
    tW = n(477782),
    tK = n(22231),
    tq = n(601255),
    tX = n(562819),
    tY = n(19575),
    tZ = n(106106),
    t$ = n(338165);
let tJ = tY.Ay.getEnableHardwareAcceleration() ? tz.Js : tz.eu;
function tQ(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tH.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eM.intl.string(eM.t.YAgq3W),
        children: (0, t.jsx)(tW.rX, { children: n }),
    });
}
function t0(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eu.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, b.Ay)(),
                d = null != n,
                u = (0, s.bG)([Q.Ay], () => (null != n ? Q.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                f = (0, $.z5)(c, g),
                m = d && null != l.avatar,
                p = eB.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([ns.A], () => (null != n ? ns.A.getGuild(n) : null)),
                A = (0, $.a4)({ user: l }),
                j = (0, $.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: I } = (0, $.CP)(n ?? void 0),
                C = void 0 !== I,
                y = null != (0, tq.A)(C ? I : j) && (C ? null != I : null != j),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lJ.XD)({
                            uploadType: lQ.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, tX.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lJ.rM)(null, g, (e) => (0, ez.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, $.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                R = i.useCallback(() => {
                    r(), (0, ez.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                tW.Dr,
                                { id: "change-avatar", label: eM.intl.string(eM.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                tW.Dr,
                                { id: "change-decoration", label: eM.intl.string(eM.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.twB3fz),
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
                                      tW.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eM.intl.string(eM.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eM.intl.string(eM.t["9rx5GO"]),
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
        ? (0, t.jsx)(eu.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(tZ.my, tZ.vk, t$.kL, { [t$.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(tJ, { ...r, imageClassName: a()(tZ.Lw, t$.HU) }),
                  (0, t.jsx)(lK.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: lK.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(tQ, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: t$.r9,
                              children: (0, t.jsx)(lT.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tK.R,
                                  "aria-label": eM.intl.string(eM.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t1 = n(976726);
function t7(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(tH.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eM.intl.string(eM.t.FzU73A),
        children: (0, t.jsx)(tW.rX, { children: n }),
    });
}
function t2(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, b.Ay)(),
                d = (0, $.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, $.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, $.Xf)({ user: l, guildId: void 0 }),
                g = eB.Ay.canUsePremiumProfileCustomization(l),
                f = g || null == n,
                m = (0, lV.sk)("UserProfileModalV2EditableBanner"),
                p = null != n,
                {
                    pendingBanner: x,
                    pendingProfileEffect: v,
                    pendingProfileFrame: h,
                } = (0, s.bG)([el.A], () => el.A.getPendingChanges(n ?? void 0)),
                A = (0, s.bG)([G.A], () =>
                    null != n ? G.A.getGuildMemberProfile(l.id, n)?.banner : G.A.getUserProfile(l.id)?.banner,
                ),
                j = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()?.banner != null),
                I = (0, s.bG)([G.A], () => G.A.getUserProfile(l.id)?.profileEffect != null),
                y = (0, s.bG)([G.A], () => G.A.getUserProfile(l.id)?.profileFrame != null),
                N = (0, $.Ac)(x, A),
                E = p && j,
                P = p && I,
                k = p && y,
                R = void 0 === v ? null != d : null != v,
                S = void 0 === h ? null != u : null != h,
                T = (0, $.lw)({
                    pendingValue: h,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                D = (0, C.A)(T?.skuId, "UserProfileModalV2EditableBanner"),
                O = i.useCallback(() => {
                    r(),
                        (0, lJ.XD)({
                            uploadType: lQ.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, nr.W)({
                            analyticsLocations: o,
                            guild: null != n ? (ns.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                L = i.useCallback(() => {
                    r(), (0, lJ.rM)(null, A, (e) => (0, ez.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, A]),
                M = i.useCallback(() => {
                    r(), (0, ez.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                w = i.useCallback(() => {
                    r(),
                        (0, nf.w)({
                            analyticsLocations: o,
                            guild: null != n ? (ns.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: D,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, D]),
                U = i.useCallback(() => {
                    r(), (0, ez.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    g &&
                        e.push(
                            (0, t.jsx)(
                                tW.Dr,
                                { id: "change-banner", label: eM.intl.string(eM.t.N0bC3P), action: O },
                                "change-banner",
                            ),
                        ),
                    f &&
                        e.push(
                            (0, t.jsx)(
                                tW.Dr,
                                { id: "change-effect", label: eM.intl.string(eM.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    m &&
                        e.push(
                            (0, t.jsx)(
                                tW.Dr,
                                { id: "change-frame", label: eM.intl.string(eM.t["oTSa/q"]), action: w },
                                "change-frame",
                            ),
                        ),
                    g &&
                        N &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.jHlJNS),
                                          action: L,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.tT9n7D),
                                          action: L,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    f &&
                        R &&
                        e.push(
                            P
                                ? (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.Lb7lu9),
                                          action: M,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.zUOlT6),
                                          action: M,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    m &&
                        S &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eM.intl.string(eM.t.A0pzWn),
                                          action: U,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      tW.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eM.intl.string(eM.t["8DfADq"]),
                                          action: U,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [E, g, f, m, P, k, N, R, S, O, _, w, L, M, U]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eg.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(t1.kL, { [t1.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eg.A, { ...e, className: t1.Pr }),
                  (0, t.jsx)(lK.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: lK.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(t7, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: t1.r9,
                              children: (0, t.jsx)(lT.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: tK.R,
                                  "aria-label": eM.intl.string(eM.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var t3 = n(777480),
    t8 = n(107563),
    t9 = n(570287);
n(938796);
var t5 = n(913453),
    t6 = n(667049),
    t4 = n(837531),
    ie = n(186272),
    il = n(645625),
    it = n(337796);
let ii = (e) => e * (2 - e),
    ir = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } },
    ia = (e) => {
        let { type: l, anchor: n } = e;
        return "staple" !== l || "bottom" !== n;
    };
function is(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, B.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                es(n, 1024)
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
        : (0, t.jsx)("div", { className: il.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function io(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: i } = e,
        r = void 0 !== n ? n : l?.profileEffect;
    return null == r ? null : (0, t.jsx)(j.A, { skuId: r.skuId, isHovering: i });
}
function id(e) {
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
            avatarOverride: A,
            bannerOverride: b,
            accentColorOverride: j,
            profileEffectOverride: I,
            profileFrame: C,
            allowEditing: N = !1,
            isLoading: E = !1,
        } = e,
        D = l.id === n.id,
        L = i.useRef(null),
        { isHoveringOrFocusing: w } = (0, P.A)(L),
        [G, U] = i.useState(),
        V = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? U("compact-xs") : l <= 380 ? U("compact-sm") : U(void 0);
        }, []);
    (0, v.g)(L, V, [], { fireOnMount: !0 });
    let F = null != G ? ir[G] : void 0,
        B = i.useMemo(() => p ?? (0, k.A)(), [p]),
        { relationshipType: Z, originApplicationId: $ } = (0, s.cf)([O.A], () => ({
            relationshipType: O.A.getRelationshipType(l.id),
            originApplicationId: O.A.getOriginApplicationId(l.id),
        })),
        J = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        Q = (0, S.q)({ userId: l.id }),
        ee = (0, R.fi)(l.id),
        { appIdentities: el, connections: et } = (function (e) {
            let { filteredAppIdentities: l } = (0, q.A)(e),
                n = (0, Y.A)(e),
                t = (0, W.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, K.A)([...r]).filter(X.Vq);
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
                                  let l = H.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(l.id),
        ei = (0, z.A)(l.id),
        er = et.length > 0 || el.length > 0,
        ea = ei.length > 0,
        es = N ? t2 : eg.A,
        eo = N ? t0 : eu.A;
    return (0, t.jsxs)("main", {
        className: a()(il.profile, null != G && il[G]),
        ref: L,
        "aria-busy": E,
        children: [
            (0, t.jsxs)("div", {
                className: il.profileHeader,
                children: [
                    (0, t.jsx)(es, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        themeType: en.d.MODAL_V2,
                        specOverrides: F,
                        pendingBanner: b,
                        pendingAccentColor: j,
                    }),
                    (0, t.jsx)(ev.A, { userId: l.id, onClose: x, className: il.interactionToast }),
                    (0, t.jsx)(eo, {
                        user: l,
                        displayProfile: g,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        specOverrides: F,
                        avatarDecorationOverride: h,
                        avatarOverride: A,
                    }),
                    (0, t.jsx)(eC.A, {
                        user: l,
                        guildId: r,
                        channelId: d,
                        themeType: en.d.MODAL_V2,
                        hasEntered: m,
                        prompt: D ? B : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: il.profileBody,
                children: [
                    (0, t.jsx)(em.A, { userId: l.id }),
                    (0, t.jsx)(tB, {
                        user: l,
                        displayProfile: g,
                        nickname: f,
                        trailing: (0, t.jsx)(ec.A, { displayProfile: g, themeType: en.d.MODAL_V2, onClose: x }),
                        onClose: x,
                        allowEditing: N,
                    }),
                    Z === e1.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eI.A.Overlay, {
                            className: il.profileOverlay,
                            children: (0, t.jsx)(ex.A, {
                                user: l,
                                applicationId: $,
                                guildId: g?.guildId ?? void 0,
                                channelId: d,
                                className: il.profileBanner,
                            }),
                        }),
                    ee.map((e) => {
                        let { applicationId: n } = e;
                        return (0, t.jsx)(
                            eI.A.Overlay,
                            {
                                className: il.profileOverlay,
                                children: (0, t.jsx)(ex.A, {
                                    user: l,
                                    guildId: g?.guildId ?? void 0,
                                    channelId: d,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: il.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    l.isProvisional &&
                        (0, t.jsx)(eI.A.Overlay, {
                            className: il.profileOverlay,
                            children: (0, t.jsx)(te.A, {
                                heading: eM.intl.string(eM.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: il.profileBanner,
                                children: (0, t.jsx)(T.T, { userId: l.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(ej.A, { user: l, className: il.profileBanner }),
                    g?.private &&
                        (0, t.jsx)(eI.A.Overlay, {
                            className: il.profileOverlay,
                            children: (0, t.jsx)(eb.A, { username: f }),
                        }),
                    (0, t.jsx)("div", {
                        className: il.profileButtons,
                        children: (0, t.jsx)(ls, {
                            user: l,
                            currentUser: n,
                            guildId: r,
                            originGuildId: o,
                            channelId: d,
                            displayProfile: g,
                            relationshipType: Z,
                            onClose: x,
                        }),
                    }),
                    D && (0, t.jsx)(ef.A, { isPremiumUser: (0, M.ki)(n), onInteraction: x }),
                    !J && (0, t.jsx)(e3, { displayProfile: g, isEditable: N }),
                    Q.length > 0 &&
                        (0, t.jsx)(te.A, {
                            heading: eM.intl.string(eM.t["Uv/eTx"]),
                            children: (0, t.jsx)(ep.A, { applicationIds: Q }),
                        }),
                    (0, t.jsx)(te.A, {
                        heading: eM.intl.string(eM.t.a6XYD9),
                        children: (0, t.jsx)(eh.A, { userId: l.id, guildId: g?.guildId, tooltipDelay: tl.In }),
                    }),
                    g?.guildId != null &&
                        (0, t.jsx)(ey.A, {
                            userId: l.id,
                            guildId: g.guildId,
                            className: il.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !J &&
                        (N || er) &&
                        (0, t.jsx)(te.A, {
                            heading: eM.intl.string(eM.t["3fe7U5"]),
                            scrollTargetId: tl.bk.CONNECTIONS,
                            children: (0, t.jsx)(lP, {
                                applicationIdentities: el,
                                connections: et,
                                userId: l.id,
                                allowEditing: N,
                                className: il.profileAppConnections,
                            }),
                        }),
                    !J &&
                        ea &&
                        (0, t.jsx)(te.A, {
                            heading: eM.intl.string(eM.t.PHjkRE),
                            scrollTargetId: tl.bk.APPS,
                            children: (0, t.jsx)(eU, {
                                applicationRoleConnections: ei,
                                onClose: x,
                                className: il.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tt, { userId: l.id }),
                ],
            }),
            (0, t.jsx)(io, { displayProfile: g, profileEffectOverride: I, isHovering: w }),
            null != C && (0, t.jsx)(y.A, { frame: C, filterLayer: ia }),
        ],
    });
}
function iu(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, F.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, Z.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function ic(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: v,
            sessionId: j,
            initialTabSection: y,
            initialScrollTarget: P,
            transitionState: k,
            customStatusPrompt: R,
            openedAt: S,
            onClose: T,
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: F,
        } = e,
        B = l.id === n.id,
        {
            guildId: z,
            pendingGuildId: H,
            isLoading: W,
            selectUserProfile: K,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, s] = i.useState(n),
                o = i.useRef(a),
                d = i.useCallback((e) => {
                    r(e ?? void 0);
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
                                e || (s(t), (o.current = t));
                            },
                            () => {
                                e || r(o.current);
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [t, l]),
                { guildId: a, pendingGuildId: t, isLoading: t !== a, selectUserProfile: d }
            );
        })({ userId: l.id, initialGuildId: r }),
        q = i.useMemo(() => (null != z ? { [z]: [l.id] } : {}), [z, l.id]);
    (0, h.Eq)(q, "UserProfileModalV2");
    let X = (0, U.X)("UserProfileModalV2"),
        Y = (0, s.bG)([_.A], () => _.A.hidePersonalInformation),
        Z = B && X,
        et = Z && !Y,
        {
            pendingThemeColors: es,
            avatarDecorationOverride: eu,
            avatarOverride: ec,
            bannerOverride: eg,
            accentColorOverride: ef,
            profileEffectOverride: em,
            profileFrameOverride: ep,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([el.A, ee.default, Q.Ay, G.A], () => {
                if (!t) return er;
                let e = ee.default.getUser(l);
                if (null == e) return er;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = el.A.getPendingChanges(n),
                    c = null != n ? Q.Ay.getMember(n, l) : null,
                    g = G.A.getUserProfile(l),
                    f = null != n ? G.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, $.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, J.V7)({ userId: l, image: a, size: ei }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, $.us)({
                        userValue: g?.profileEffect,
                        guildValue: f?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, $.us)({
                        userValue: g?.profileFrame,
                        guildValue: f?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: et, guildId: z }),
        {
            isExpanded: ex,
            isAnimating: ev,
            transition: eh,
            handleExpand: eb,
            handleCollapse: ej,
            refs: { expandIconButtonRef: eC, expandTabButtonRef: ey, collapseButtonRef: eN },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ii },
                    onRest: () => t(!1),
                }),
                a = (0, x.A)("(min-width: 929px) and (min-height: 550px)"),
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
        eE = Z && !ex,
        eP = Z && (!ex || ev),
        { defaultWishlistId: ek } = (0, s.cf)([G.A], () => ({ defaultWishlistId: G.A.getFirstWishlistId(l.id) }));
    (0, D.fw)({ wishlistId: ek, userId: l.id });
    let eR = (0, ed.fC)(),
        eS = W || null != eR.interactionType,
        eT = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, t5.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ee.default], () => ee.default.getCurrentUser())),
                    (n = (0, s.bG)([G.A], () => G.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, t6.A)(i.id),
                g = (0, t9.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = G.A.getFirstWishlistId(i.id),
                x = null != p,
                v = x ? G.A.getWishlistSettings(i.id, p) : null,
                h = (x ? t8.A.getWishlistItems(p) : []).length > 0,
                A = c.length > 0;
            (m || A) && f.push({ text: eM.intl.string(eM.t.laViwx), section: tl.RP.WIDGETS }),
                f.push({ text: eM.intl.string(eM.t.chq59f), section: tl.RP.ACTIVITY });
            let b = !1 === i.nsfwAllowed,
                j = O.A.isFriend(i.id),
                I = v?.visibility === t3.a.PUBLIC;
            return (
                (m || (!m && h && I && g && (!b || (b && j)))) &&
                    f.push({ text: eM.intl.string(eM.t["7lZ31J"]), section: tl.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, t4.A)(a), section: tl.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, ie.A)(d), section: tl.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eD } = (0, b.Ay)([...M, A.A.USER_PROFILE_MODAL_V2]),
        eO = (0, w.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: j,
            guildId: z,
            channelId: u,
            messageId: c,
            roleId: v,
        }),
        e_ = (0, V.Ay)(l.id, z),
        eL = void 0 !== ep ? ep?.skuId : e_?.profileFrame?.skuId,
        ew = (0, C.A)(eL, "UserProfileModalV2"),
        { profileFrameStyle: eG, profileFrameClassName: eU } = (0, N.A)(eL);
    (0, I.A)({ skuId: e_?.profileFrame?.skuId, openedAt: S, context: eO, analyticsLocations: eD });
    let eV = L.Ay.useName(e_?.guildId, u, l),
        eF = (0, E.GV)(),
        eB = eM.intl.format(eM.t.KRe1Fk, { name: eV });
    return (0, t.jsx)(b.f5, {
        value: eD,
        children: (0, t.jsx)(w.of, {
            value: eO,
            openedAt: S,
            fetchStartedAt: e_?.fetchStartedAt,
            fetchEndedAt: e_?.fetchEndedAt,
            isLoaded: e_?.isLoaded,
            children: (0, t.jsx)(ed.Hl, {
                value: eR,
                children: (0, t.jsx)(eo.N, {
                    value: P,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(it.zr, { [it.QF]: e_?.private === !0 }),
                        transitionState: k,
                        "aria-labelledby": eF,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(td, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(il.layoutContainer, eU, {
                                        [il.editingPanelEnabled]: Z,
                                        [il.editingPanelExpanded]: Z && ex,
                                        [il.isAnimating]: ev,
                                    }),
                                    style: eG,
                                    children: [
                                        (0, t.jsxs)(iu, {
                                            user: l,
                                            displayProfile: e_,
                                            pendingThemeColors: es,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: it.Oo,
                                                    children: [
                                                        (0, t.jsx)(lo.A, { isCurrentUser: B, onClose: T }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: eF, children: eB }),
                                                        }),
                                                        eP &&
                                                            (0, t.jsx)(n0, {
                                                                buttonRef: eC,
                                                                onClick: eb,
                                                                className: il.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eE &&
                                                    (0, t.jsx)("div", {
                                                        className: il.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(nQ, {
                                                            innerRef: ey,
                                                            onClick: eb,
                                                            className: il.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                Z &&
                                                    eh((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(n5, {
                                                                  className: a()(il.editingPanel, {
                                                                      [il.isExpanded]: ex,
                                                                  }),
                                                                  selectedGuildId: H,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: K,
                                                                  onClose: ej,
                                                                  collapseButtonRef: eN,
                                                                  isLoading: W,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eI.A, {
                                                    className: a()(F, it.A7, il.profileContentOuter),
                                                    innerClassName: il.profileContentInner,
                                                    user: l,
                                                    displayProfile: e_,
                                                    themeType: en.d.MODAL_V2,
                                                    pendingThemeColors: es,
                                                    isPrivate: e_?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(is, { displayProfile: e_, pendingBanner: eg }),
                                                        e_?.private === !0 && (0, t.jsx)(eA.A, {}),
                                                        (0, t.jsx)(ta, { isVisible: eS, showLoadingSpinner: W }),
                                                        (0, t.jsx)(tb, { className: il.toast }),
                                                        (0, t.jsx)(id, {
                                                            user: l,
                                                            currentUser: n,
                                                            guildId: z,
                                                            channelId: u,
                                                            displayProfile: e_,
                                                            nickname: eV,
                                                            originGuildId: o,
                                                            hasEntered: k === p.ip.ENTERED,
                                                            customStatusPrompt: R,
                                                            onClose: T,
                                                            avatarDecorationOverride: eu,
                                                            avatarOverride: ec,
                                                            bannerOverride: eg,
                                                            accentColorOverride: ef,
                                                            profileEffectOverride: em,
                                                            profileFrame: ew,
                                                            allowEditing: et,
                                                            isLoading: W,
                                                        }),
                                                        (0, t.jsx)(tu.A, {
                                                            user: l,
                                                            currentUser: n,
                                                            displayProfile: e_,
                                                            guildId: z,
                                                            channelId: u,
                                                            items: eT,
                                                            initialSection: y,
                                                            onClose: T,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, t.jsx)(n6.A, { userId: l.id, guildId: z, className: il.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
