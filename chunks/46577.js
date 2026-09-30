t.d(n, { A: () => on });
var l = t(477900),
    i = t(582128),
    r = t(503698),
    s = t.n(r),
    a = t(17928),
    o = t(935462),
    d = t(778712),
    u = t(866323),
    c = t(364522),
    g = t(695366),
    m = t(140735),
    f = t(707554),
    p = t(738188),
    h = t(661531),
    x = t(231723),
    A = t(241524),
    v = t(770178),
    I = t(80682),
    j = t(793574),
    b = t(688810),
    C = t(248284),
    y = t(480335),
    N = t(577390),
    E = t(372320),
    S = t(31956),
    k = t(744808),
    P = t(875741),
    T = t(915089),
    R = t(713517),
    O = t(645507),
    L = t(922590),
    _ = t(821269),
    w = t(397562),
    M = t(93246),
    D = t(594832),
    G = t(71393),
    U = t(994500),
    F = t(351906),
    V = t(287809),
    B = t(562153),
    W = t(474090),
    H = t(158045),
    z = t(183555),
    Y = t(47675),
    K = t(321191),
    q = t(591179),
    X = t(999291),
    Z = t(702841),
    $ = t(370480),
    J = t(773669),
    Q = t(652215),
    ee = t(101928),
    en = t(837529),
    et = t(346713),
    el = t(573648),
    ei = t(429913),
    er = t(321078),
    es = t(403362),
    ea = t(484509),
    eo = t(487409),
    ed = t(83931),
    eu = t(920601),
    ec = t(903209),
    eg = t(919395),
    em = t(101058),
    ef = t(696451),
    ep = t(836602),
    eh = t(996988),
    ex = t(207634);
let eA = (0, d.FT)(ex.T[eh.d.MODAL_V2].avatarSize),
    ev = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eI = t(716804),
    ej = t(679492),
    eb = t(554146),
    eC = t(43105),
    ey = t(844222),
    eN = t(947984),
    eE = t(992526),
    eS = t(643056),
    ek = t(327791),
    eP = t(262),
    eT = t(982240),
    eR = t(131607),
    eO = t(49999),
    eL = t(375708);
function e_(e) {
    let n,
        t,
        r,
        s,
        { targetElementRef: o } = e,
        d = (0, eE.J)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, eS.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        c = (0, ek.A)(),
        g =
            ((n = (0, a.bG)([V.default], () => V.default.getCurrentUser()?.id)),
            (t = (0, a.bG)(
                [eT.Ay],
                () => (null != n && eT.Ay.hasCatalogFor(n) ? eT.Ay.getBadges(n).some((e) => e.owned) : null),
                [n],
            )),
            (r = (0, X.Ay)(n)),
            (s = (0, eP.A)(r)),
            t ?? s.length > 0),
        { reducedMotion: m } = i.useContext(ey.C),
        [f, p] = (0, eR.kn)(g && d && u ? [eb.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return f !== eb.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, l.jsx)(eC.A, {
              targetElementRef: o,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eN.U, props: { dataBinding: { on: !0, reducedMotion: m.enabled } } },
              title: eL.intl.string(eL.t["9JoKQb"]),
              body: eL.intl.string(c ? eL.t.p82vky : eL.t.IDh31t),
              onRequestClose: () => p(eO.i.USER_DISMISS),
              actions: [
                  {
                      text: eL.intl.string(eL.t["4P5I8V"]),
                      onClick: function () {
                          (p(eO.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var ew = t(718019),
    eM = t(365607),
    eD = t(915614),
    eG = t(744753),
    eU = t(834730);
function eF(e) {
    let { friendsSinceDate: n } = e;
    return (0, l.jsx)(eU.E, { variant: "text-sm/normal", children: n });
}
var eV = t(361311),
    eB = t(931481),
    eW = t(439053),
    eH = t(743987),
    ez = t(312381),
    eY = t(501193),
    eK = t(383448),
    eq = t(946356),
    eX = t(394816),
    eZ = t(503026),
    e$ = t(305385),
    eJ = t(109112),
    eQ = t(939249),
    e0 = t(730134),
    e1 = t(169869),
    e2 = t(837057),
    e5 = t(310419),
    e9 = t(889227),
    e3 = t(967198),
    e7 = t(488995),
    e8 = t(576849);
function e6(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        s = (0, e1.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: e8.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(e0.A, { user: new e9.A(n.application.bot), size: d._3.SIZE_16 })
                        : (0, l.jsx)(eJ._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: e8.Hd,
                children: [
                    (0, l.jsxs)(eQ.D, {
                        className: e8.OB,
                        onClick: function () {
                            (i?.(),
                                (0, e2.transitionToGlobalDiscovery)({
                                    tab: e7.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: e5.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(eU.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(eU.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(eU.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: e8.nk,
                                children: eL.intl.format(eL.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, l.jsx)("div", { className: e8.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function e4(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: r } = (0, z.NJ)(),
        o = (0, a.bG)([J.default], () => J.default.locale),
        d = (0, a.bG)([e3.A], () => e3.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: s()(e8.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: e8.FI,
                          children: (0, l.jsx)(e6, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), i());
                              },
                              selectedGuildId: d ?? void 0,
                          }),
                      },
                      `${n}-${e.application.id}`,
                  ),
              ),
          });
}
var ne = t(403581),
    nn = t(240248),
    nt = t(308244),
    nl = t(900179),
    ni = t(677295);
function nr(e) {
    let { className: n, ...t } = e;
    return (0, l.jsx)(nl.A, {
        className: s()(ni.u, n),
        headingVariant: "text-xs/medium",
        headingColor: "text-subtle",
        ...t,
    });
}
var ns = t(81400),
    na = t(84540),
    no = t(290386),
    nd = t(621466);
t(321073);
var nu = t(775602),
    nc = t(404760);
function ng(e) {
    let { id: n, message: t, type: i } = e,
        r = "error" === i,
        s = r ? g.E : p.WarningIcon;
    return (0, l.jsxs)(eU.E, {
        id: n,
        role: r ? "alert" : void 0,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: nc.VP,
        children: [(0, l.jsx)(s, { size: "xs", color: "currentColor", className: r ? nc.ik : nc.QW }), t],
    });
}
function nm(e) {
    let {
            isEditing: n,
            preview: t,
            placeholder: r,
            input: a,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            previewErrorMessage: c,
            previewWarningMessage: g,
            className: m,
            wrapperRef: f,
            onBlur: p,
            onKeyDown: h,
        } = e,
        x = i.useRef(null),
        A = i.useId(),
        v = i.useId(),
        I = null == t,
        j = null != c,
        b = null != g && !j,
        C = j ? "error" : b ? "warning" : null,
        y = j ? c : g,
        N = null != C && null != y,
        E = [];
    (I && E.push(A), N && E.push(v));
    let S = E.length > 0 ? E.join(" ") : void 0;
    function k() {
        let { activeElement: e } = x.current?.ownerDocument ?? document;
        ((0, nd.vq)(e, HTMLElement) && e.blur(), u());
    }
    let P = (0, l.jsxs)("div", {
        ref: x,
        className: s()(nc.LL, { [nc.JD]: j, [nc.xe]: b }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            I
                ? (0, l.jsx)(eU.E, {
                      id: A,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: nc.qf,
                      children: r,
                  })
                : t,
            (0, l.jsx)(eQ.D, {
                innerRef: o,
                "aria-label": d,
                "aria-describedby": S,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), k());
                },
                focusProps: { ringTarget: x },
            }),
        ],
    });
    return (0, l.jsx)("div", {
        ref: f,
        className: s()(nc.kL, m),
        onBlur: p,
        onKeyDown: h,
        children: (0, l.jsx)(
            "div",
            {
                children: n
                    ? a
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", { className: nc.VH, children: P }),
                              N && (0, l.jsx)(ng, { id: v, message: y, type: C }),
                          ],
                      }),
            },
            n ? "editing" : "preview",
        ),
    });
}
var nf = t(786826);
function np(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function nh(e) {
    var n;
    let {
            isEditing: t,
            committedValue: i,
            editedValue: r,
            setEditedValue: s,
            editButtonRef: a,
            handleStartEditing: o,
            wrapperRef: d,
            onBlur: u,
            onContainerKeyDown: c,
            inputRef: g,
            onInputFocus: m,
            onInputKeyDown: f,
            preview: p,
            placeholder: h,
            editButtonAriaLabel: x,
            label: A,
            maxLength: v,
            emojiPickerIntention: I,
            error: j,
            warning: b,
            className: C,
        } = e,
        y =
            ((n = t ? r : i),
            (null != v && n.length > v ? eL.intl.formatToPlainString(eL.t.ICT5S6, { maxLength: v }) : void 0) ?? j);
    return (0, l.jsx)(nm, {
        isEditing: t,
        preview: p,
        placeholder: h,
        editButtonRef: a,
        editButtonAriaLabel: x,
        onStartEditing: o,
        className: C,
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: y,
        previewWarningMessage: b,
        input: (0, l.jsx)(nf.f, {
            editorRef: g,
            label: A,
            hideLabel: !0,
            value: t ? r : i,
            onChange: s,
            onFocus: m,
            onKeyDown: f,
            maxLength: v,
            error: y,
            helperText: b,
            placeholder: h,
            emojiPickerIntention: I,
        }),
    });
}
let nx = [
    { value: "HAIKU", label: () => eL.intl.string(eL.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eL.intl.string(eL.t.CXkR1L) },
    { value: "TELL_US", label: () => eL.intl.string(eL.t.eutr4P) },
    { value: "FUN_FACT", label: () => eL.intl.string(eL.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eL.intl.string(eL.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eL.intl.string(eL.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eL.intl.string(eL.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eL.intl.string(eL.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eL.intl.string(eL.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eL.intl.string(eL.t.u7WCGI) },
];
var nA = t(307731);
function nv(e) {
    let n,
        t,
        r,
        s,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, a.bG)([V.default], () => V.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = H.Ay.canUsePremiumProfileCustomization(c),
        p = (0, no.U)({ location: "user_profile_modal_edit" }),
        {
            value: h,
            previewValue: x,
            onCommit: A,
        } = ((n = d?.guildId ?? null),
        (t = d?.guildId != null),
        (r = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingBio)),
        (s = t ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? s ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, na.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        v = (function (e) {
            let {
                    isEditing: n,
                    wrapperRef: t,
                    handleCommit: l,
                    ...r
                } = (function (e) {
                    let { value: n, onCommit: t, disabled: l = !1 } = e,
                        [r, s] = i.useState("idle"),
                        [o, d] = i.useState(n),
                        u = "editing" === r && !l,
                        c = (0, a.bG)([nu.Ay], () => nu.Ay.useReducedMotion),
                        g = i.useRef(null),
                        m = i.useRef(null),
                        f = i.useRef(null),
                        p = i.useRef(!1),
                        h = i.useRef(!0),
                        x = i.useRef(!1),
                        A = i.useCallback(() => {
                            ((h.current = !1), d(n), s("editing"));
                        }, [n]),
                        v = i.useRef(o);
                    i.useLayoutEffect(() => {
                        v.current = o;
                    });
                    let I = i.useCallback(() => {
                            h.current || ((h.current = !0), t(v.current), s("done"));
                        }, [t]),
                        j = i.useCallback(() => {
                            h.current || ((h.current = !0), s("done"));
                        }, []);
                    (i.useEffect(() => {
                        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
                    }, [r]),
                        i.useEffect(() => {
                            let e = x.current;
                            ((x.current = !1),
                                u &&
                                    (m.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || f.current?.focus({ preventScroll: !0 })));
                        }, [u, c]));
                    let b = i.useCallback(
                            (e) => {
                                u &&
                                    "Escape" === e.key &&
                                    (e.preventDefault(), e.stopPropagation(), (p.current = !0), j());
                            },
                            [u, j],
                        ),
                        C = i.useCallback(() => {
                            ((p.current = !0), I(), f.current?.blur());
                        }, [I]),
                        y = i.useCallback(() => {
                            ((p.current = !0), j(), f.current?.blur());
                        }, [j]),
                        N = i.useCallback(() => {
                            u || ((x.current = !0), A());
                        }, [u, A]);
                    return {
                        isEditing: u,
                        committedValue: n,
                        editedValue: o,
                        setEditedValue: d,
                        onCommit: t,
                        editButtonRef: g,
                        wrapperRef: m,
                        inputRef: f,
                        handleStartEditing: A,
                        handleCommit: I,
                        handleCancel: j,
                        onInputFocus: N,
                        onInputKeyDown: i.useCallback(
                            (e) => {
                                "Enter" !== e.key || e.shiftKey
                                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), y())
                                    : (e.preventDefault(), C());
                            },
                            [C, y],
                        ),
                        onContainerKeyDown: b,
                    };
                })(e),
                s = i.useCallback(
                    (e) =>
                        (function (e, n) {
                            if (n?.contains(e)) return !0;
                            let t = np(n),
                                l = t?.getAttribute("aria-controls");
                            return null != l && null != e.closest(`#${l}`);
                        })(e, t.current),
                    [t],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = t.current?.ownerDocument ?? document;
                function i(e) {
                    (0, nd.vq)(e.target) && !s(e.target) && l();
                }
                return (e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i));
            }, [n, t, s, l]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let i = e.relatedTarget;
                    !(0, nd.vq)(i) || s(i) || (null == np(t.current) && l());
                },
                [n, s, l, t],
            );
            return { isEditing: n, wrapperRef: t, handleCommit: l, ...r, onBlur: o };
        })({ value: h, onCommit: A }),
        I = !(0, nn.uJ)(x),
        j = (0, a.bG)([ep.A], () => ep.A.getErrors(m)),
        b = (0, ns.EC)(m),
        C = j.bio?.[0],
        y = b?.bio?.[0],
        N = i.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * nx.length)), nx[e]);
        }, []),
        E = g ? eL.intl.string(eL.t.yPJ9xr) : N.label();
    return !g || f
        ? (0, l.jsx)(nh, {
              ...v,
              className: u,
              preview: I ? (0, l.jsx)(nt.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: E,
              editButtonAriaLabel: eL.intl.string(eL.t.lO3n7a),
              label: eL.intl.string(eL.t["YWo+Zd"]),
              emojiPickerIntention: nA.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: y,
          })
        : I
          ? (0, l.jsx)(nt.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var nI = t(430626);
function nj(e) {
    let { currentUser: n, displayProfile: t, canEditInPlace: i } = e,
        r = t?.bio,
        s = !(0, nn.uJ)(r),
        a = t?.guildId != null,
        o = a && H.Ay.canUsePremiumProfileCustomization(n),
        d = o ? eL.intl.string(eL.t.jVai8N) : eL.intl.string(eL.t.ZzAR2Y),
        u = (0, H.TW)(n) ? eL.intl.string(eL.t["5AFxuK"]) : eL.intl.string(eL.t.N6ixy8),
        c = i && o ? { icon: ne.t, tooltip: u } : void 0;
    return (i || s) && (!i || !a || s || o)
        ? (0, l.jsx)(nr, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, l.jsx)(nv, { displayProfile: t, className: nI.u })
                  : (0, l.jsx)(nt.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var nb = t(700058),
    nC = t(722868),
    ny = t(822775),
    nN = t(982985),
    nE = t(211031),
    nS = t(34188),
    nk = t(815996),
    nP = t(993401);
function nT(e) {
    let { analyticsLocations: n, newestAnalyticsLocation: t } = (0, b.Ay)(),
        r = i.useCallback(() => {
            (0, nk.Cz)({ analyticsLocations: n, analyticsSource: t });
        }, [n, t]);
    return (0, l.jsx)(nP.q3, {
        action: "VISIT_SHOP",
        icon: nS.U,
        tooltipText: eL.intl.string(eL.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var nR = t(573355),
    nO = t(102951);
function nL(e) {
    let {
            user: n,
            currentUser: t,
            guildId: i,
            originGuildId: r,
            channelId: s,
            displayProfile: a,
            relationshipType: o,
            onClose: d,
        } = e,
        u = (0, q.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, b.Ay)(),
        g = (0, nC.A)({ user: n, guildId: r, channelId: s, displayProfile: a, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, nO.J)({ userId: n.id }),
        h = m.length > 0 || f || p;
    return o === Q.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? u
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nN.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(nT, {}),
                        (0, l.jsx)(nE.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ny.A, { user: n, guildId: i, onClose: d }),
                        (0, l.jsx)(nT, {}),
                        (0, l.jsx)(nE.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(nN.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(nE.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Q.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nN.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(nE.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === Q.eA$.FRIEND || o === Q.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(nN.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(nR.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, l.jsx)(nE.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Q.eA$.NONE && h
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nN.e, { userId: n.id, onClose: nb.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(nR.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, l.jsx)(nE.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nR.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(nN.l, { userId: n.id, onClose: nb.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(nE.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var n_ = t(463156),
    nw = t(866665),
    nM = t(28863),
    nD = t(509434),
    nG = t(307301),
    nU = t(228366),
    nF = t(95561),
    nV = t(874490),
    nB = t(968309),
    nW = t(174459),
    nH = t(486020),
    nz = t(123917),
    nY = t(783419);
let nK = "User Profile Modal V2";
function nq(e) {
    let n = el.A.get(e);
    ((0, nB.A)({ platformType: n.type, location: nK }),
        nW.default.track(Q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: nK,
            current_step: "desktop oauth",
            platform_type: n.type,
        }));
}
function nX() {
    nU.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: nq, stackingBehavior: "stack" });
}
function nZ(e) {
    let { account: n, locale: t, userId: i } = e,
        r = n.metadata ?? {},
        s = (0, $.An)(r[nY.pK.CREATED_AT], t),
        a = el.A.get((0, nV.ML)(n.type));
    return (0, l.jsx)(nJ, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(nw.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(eU.E, { variant: "text-sm/normal", className: e8.GW, children: n.name }),
                  })
                : (0, l.jsx)(nM.Anchor, {
                      href: e,
                      className: e8.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`
                              : `${n.name}, ${eL.intl.string(eL.t.q5jLJB)}`,
                      onClick: (t) => {
                          ((0, nF.zV)(Q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, nz.h)({ href: e, trusted: a?.type !== Q.fg2.DOMAIN }, t));
                      },
                      children: (0, l.jsxs)("div", {
                          className: e8.vi,
                          children: [
                              (0, l.jsx)(nw.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(eU.E, {
                                      variant: "text-sm/normal",
                                      className: e8.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(nD.I, { size: "xs", color: "currentColor", className: e8.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return n.type === Q.fg2.REDDIT
                ? (0, e1.xE)(r)
                : n.type === Q.fg2.STEAM
                  ? (0, e1.dy)(r)
                  : n.type === Q.fg2.BLUESKY || n.type === Q.fg2.MASTODON || n.type === Q.fg2.TWITTER
                    ? (0, e1.ED)(r)
                    : n.type === Q.fg2.PAYPAL
                      ? (0, e1.gZ)(r)
                      : n.type === Q.fg2.EBAY
                        ? (0, e1.ub)(r)
                        : n.type === Q.fg2.TIKTOK
                          ? (0, e1.HU)(r)
                          : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function n$(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let r = nH.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(nJ, {
        renderAccountName: function () {
            return (0, l.jsx)(nw.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(eU.E, {
                    variant: "text-sm/normal",
                    className: e8.GW,
                    children: t.profile.username,
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
function nJ(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: e8.FI,
        children: [
            (0, l.jsx)(nw.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: e8.k_,
                    children: (0, l.jsx)("img", {
                        alt: eL.intl.formatToPlainString(eL.t.rtm15P, { name: i }),
                        className: s()(e8.tV, o ? e8.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: e8.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != a &&
                                (0, l.jsx)(eU.E, {
                                    variant: "text-xs/normal",
                                    children: eL.intl.format(eL.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: e8.yu, children: t() }),
                ],
            }),
        ],
    });
}
function nQ(e) {
    let { connections: n, applicationIdentities: t, userId: i, allowEditing: r, className: o } = e,
        d = (0, a.bG)([J.default], () => J.default.locale);
    if (!r && 0 === n.length && 0 === t.length) return null;
    let u = n.length > 0 || t.length > 0;
    return (0, l.jsxs)("div", {
        className: s()(e8.kL, o),
        children: [
            u &&
                (0, l.jsxs)("ul", {
                    className: e8.V,
                    children: [
                        n.map((e) => (0, l.jsx)(nZ, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        t?.map((e) => (0, l.jsx)(n$, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, l.jsxs)(eQ.D, {
                    className: e8.qG,
                    onClick: nX,
                    children: [
                        (0, l.jsx)(nG.j, { size: "sm", color: "currentColor" }),
                        (0, l.jsx)(eU.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eL.intl.string(eL.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var n0 = t(193885),
    n1 = t(408278),
    n2 = t(993165),
    n5 = t(194261),
    n9 = t(789645),
    n3 = t(297264),
    n7 = t(812993),
    n8 = t(821609),
    n6 = t(39623),
    n4 = t(890377),
    te = t(517461),
    tn = t(248778),
    tt = t(465794),
    tl = t(252732),
    ti = t(487233),
    tr = t(120386),
    ts = t(317097),
    ta = t(602853),
    to = t(922016),
    td = t(508274),
    tu = t(654107),
    tc = t(930349);
function tg(e) {
    let { user: n, disabled: t = !1 } = e,
        r = i.useRef(null),
        s = (0, ta.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, tu.rh)(n.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, a.cf)([ep.A, K.A], () => ({
            pendingAccentColor: ep.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: K.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, ts.LX)(o[0] ?? s),
        g = i.useCallback((e) => (0, na.p)({ accentColor: e }), []);
    return (0, l.jsx)(to.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, l.jsx)(td.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(tc.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: t,
                accessibleLabel: eL.intl.string(eL.t["/X3fkf"]),
                accessibleValue: (0, ts.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, l.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, ts.Hl)(c) } }),
            }),
    });
}
var tm = t(450373),
    tf = t(317139);
function tp(e, n) {
    let t = null === e,
        l = void 0 === e;
    return t || (l && null == n) ? eL.intl.string(eL.t["3Xph0/"]) : l ? eL.intl.string(eL.t.keN7ib) : e.description;
}
function th(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: tf.o, style: { backgroundColor: n } });
}
function tx(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: tf._ });
}
function tA(e) {
    let { displayProfile: n, bannerChange: t, shouldAnimate: i } = e,
        r = (0, ta.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        s = n?.primaryColor ?? (0, ts.LX)(r),
        { hex: a } = (0, tm.A)(s),
        o = n?.getPreviewBanner(t, i, 296) ?? void 0;
    return null != o ? (0, l.jsx)(tx, { src: o }) : (0, l.jsx)(th, { backgroundColor: a });
}
function tv(e) {
    let { displayProfile: n, bannerChange: t, ...i } = e;
    return (0, l.jsx)(tc.A, {
        ...i,
        accessibleLabel: eL.intl.string(eL.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, l.jsx)(tA, { displayProfile: n, bannerChange: t, shouldAnimate: e }),
    });
}
var tI = t(569059);
function tj(e) {
    let { userId: n, guildId: t, disabled: r, errorMessageId: s } = e,
        a = i.useRef(null),
        {
            displayProfile: o,
            pendingBanner: d,
            bannerChange: u,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, n) {
            let t = (0, X.Ay)(e, n),
                {
                    pendingBanner: l,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, Z.cf)(
                    [ep.A, V.default, K.A],
                    () => ({
                        pendingBanner: ep.A.getPendingChanges(n ?? void 0).pendingBanner,
                        mainProfileBanner: V.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != n ? K.A.getGuildMemberProfile(e, n)?.banner : K.A.getUserProfile(e)?.banner,
                    }),
                    [n, e],
                ),
                s = null != n,
                a = s && (t?.isUsingGuildMemberBanner() ?? !1),
                o = null === l;
            return {
                displayProfile: t,
                pendingBanner: l,
                bannerChange: o && s && !a ? void 0 : l,
                accessibleValue: tp(l, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != i,
            };
        })(n, t),
        f = (0, eg.Ac)(d, g)
            ? {
                  onClick: () => (0, tl.rM)(null, g, (e) => (0, na.p)({ guildId: t ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eL.intl.string(m ? eL.t.jHlJNS : eL.t.tT9n7D),
              }
            : void 0,
        p = (0, tI.P)({ guildId: t, returnRef: a });
    return (0, l.jsx)(tv, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: u,
        accessibleValue: c,
        variant: "square",
        affordance: f,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: s,
    });
}
var tb = t(259065),
    tC = t(913563),
    ty = t(898985),
    tN = t(922301),
    tE = t(660184),
    tS = t(763052),
    tk = t(523312);
let tP = "heading-xl/semibold";
function tT(e) {
    if (null == e) return eL.intl.string(eL.t["3Xph0/"]);
    let n = eL.intl.string((0, tC.A)(e.fontId)),
        t = eL.intl.string(ty.J[e.effectId] ?? tS.default.OpWJ3f),
        l = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eL.intl.formatToPlainString(eL.t.A2XnI4, { fontName: n, effectName: t, colors: l });
}
function tR(e) {
    let { displayName: n, displayNameStyles: t, shouldAnimate: i = !1 } = e;
    return (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: s()(tk.MC, { [tk.Xn]: null != t }),
        children:
            null != t
                ? (0, l.jsx)(eU.E, {
                      variant: tP,
                      children: (0, l.jsx)(tE.A, {
                          userName: n,
                          displayNameStyles: t,
                          effectDisplayType: i ? tN.G.ANIMATED : tN.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, l.jsx)(eU.E, { variant: tP, className: tk.kr, children: n }),
    });
}
function tO(e) {
    let { displayName: n, displayNameStyles: t, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, l.jsx)(tc.A, {
        ...r,
        accessibleLabel: eL.intl.string(eL.t.vKBV4A),
        renderPreview: (e) => (0, l.jsx)(tR, { displayNameStyles: t, displayName: n, shouldAnimate: i || e }),
    });
}
function tL(e) {
    let { user: n, guildId: t, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: d } = (0, b.Ay)(),
        u = null != t,
        c = (0, a.bG)([ef.Ay], () => (null != t ? (ef.Ay.getMember(t, n.id)?.nick ?? null) : null)),
        g = (0, a.bG)([V.default], () => V.default.getCurrentUser()?.globalName ?? null),
        m = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName),
        f = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(t ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: h,
            pendingDisplayNameStyles: x,
        } = (0, eg.B0)(n, t ?? void 0),
        A = u ? h : p,
        v = void 0 !== x,
        I = null === x,
        j = u && null != p,
        C = (0, eg.lw)({ pendingValue: x, userValue: p, guildValue: h, guildId: t ?? void 0 }),
        y = (0, eg.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: t ?? void 0 }) ?? n.username,
        N = v ? null != x : null != A,
        E =
            null != C && N
                ? {
                      onClick: () => (0, na.p)({ guildId: t ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(j ? eL.t.en3ogK : eL.t["Wqmi/h"]),
                  }
                : void 0,
        S = i.useCallback(() => {
            (o?.(), (0, tb.L)({ analyticsLocations: d, guildId: t ?? void 0, stackingBehavior: "stack" }));
        }, [d, t, o]);
    return (0, l.jsx)(tO, {
        affordance: (!I && (v || null != A)) || j ? E : "add",
        variant: "bar",
        onClick: S,
        accessibleValue: tT(C),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: y,
        displayNameStyles: C,
        disabled: r,
    });
}
var t_ = t(450232),
    tw = t(89851);
function tM(e) {
    let { heading: n, children: t, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, l.jsxs)("div", {
        className: tw.Os,
        children: [
            (0, l.jsxs)("div", {
                className: s()(tw.Pf, { [tw.r9]: i }),
                children: [
                    (0, l.jsx)(n3.D, {
                        className: tw.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n,
                    }),
                    r && (0, l.jsx)(t_.A, { className: tw.IX, size: "xs", color: "inherit", disabled: i }),
                    null != a && (0, l.jsx)("span", { className: tw.ot, children: a }),
                ],
            }),
            t,
        ],
    });
}
function tD(e) {
    let { id: n, message: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: tw.gJ,
              role: "alert",
              children: [
                  (0, l.jsx)(g.E, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, l.jsx)(eU.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: n, children: t }),
              ],
          });
}
var tG = t(374654),
    tU = t(366010),
    tF = t(736653),
    tV = t(674658),
    tB = t(617061),
    tW = t(203632),
    tH = t(536572);
let tz = new Set(),
    tY = 0;
var tK = t(993408),
    tq = t(841702),
    tX = t(515718),
    tZ = t(195292);
function t$(e) {
    "" !== e.thumbnailPreviewSrc && (0, tX.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var tJ = t(599752),
    tQ = t(249360);
let t0 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    t1 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function t2(e) {
    let { effect: n, shouldAnimate: t, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        d = (0, tF.Ay)(),
        u = (0, tU.M)(d) ? t0 : t1,
        c = (function (e) {
            let { enabled: n, isInteracting: t } = e,
                { categories: l, purchases: r } = (0, tq.Ay)({ stalePurchasesOK: !0 }),
                s = i.useMemo(() => (0, tK.wo)(r, l), [r, l]),
                a = (0, tZ.A)({ enabled: n, isInteracting: t, items: s, preload: t$ });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: t }),
        g = null != c,
        m = g ? c : n;
    return (
        i.useEffect(() => {
            t && ((tY += 1), tz.forEach((e) => e()));
        }, [t]),
        (0, l.jsxs)("div", {
            className: tJ.ti,
            "aria-hidden": !0,
            children: [
                (0, l.jsx)("img", { src: u, alt: "", className: tJ.QQ }),
                m?.skuId != null &&
                    (0, l.jsx)("div", {
                        className: s()(tJ.yY, { [tQ.O]: g }),
                        children: (0, l.jsx)(y.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: tW.HL.FromStart,
                            isHovering: t,
                            useOpacityOnHover: !1,
                            useThumbnail: !0,
                            delayIntro: !g,
                        }),
                    }),
            ],
        })
    );
}
function t5(e) {
    let { user: n, guildId: t, disabled: r, variant: s = "full-height-bar" } = e,
        o = i.useRef(null),
        { analyticsLocations: d } = (0, b.Ay)(),
        u = null != t,
        c = (0, a.bG)([G.A], () => (null != t ? G.A.getGuild(t) : null)),
        g = (0, eg.N2)({ user: n }),
        m = (0, eg.N2)({ user: n, guildId: t ?? void 0 }),
        { pendingProfileEffect: f } = (0, eg.nZ)(t ?? void 0),
        p = void 0 !== f,
        h = null === f || (!p && null == m),
        x = u && null != g,
        A = (0, eg.lw)({ pendingValue: f, userValue: g, guildValue: m, guildId: t ?? void 0 }),
        { product: v } = (0, tV.q)(A?.skuId),
        I = p ? null != f : null != m,
        j =
            null != A && I
                ? {
                      onClick: () => (0, na.p)({ guildId: t ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(x ? eL.t["SQy/Po"] : eL.t.uMuafO),
                  }
                : void 0,
        C = i.useCallback(() => {
            (0, tB.W)({ analyticsLocations: d, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [d, c]);
    return (0, l.jsx)(tc.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : j,
        variant: s,
        onClick: C,
        accessibleLabel: eL.intl.string(eL.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: n, productName: t, hasPendingSelection: l } = e;
            return null == n
                ? eL.intl.string(eL.t["3Xph0/"])
                : null != t && "" !== t
                  ? t
                  : eL.intl.string(l ? eL.t["1M4m8w"] : eL.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, tH.VG)(v), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, l.jsx)(t2, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var t9 = t(515727),
    t3 = t(746002);
function t7(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((n) => {
            let t = (0, t3.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: t3.CollectiblesItemAssetFormat.STATIC,
                assetId: n.id,
            });
            null != t && (0, tX.NN)(t).catch(() => {});
        });
}
var t8 = t(715196);
function t6(e) {
    let { responsive: n } = e;
    return !0 !== n;
}
function t4(e) {
    let { profileFramePreview: n, isEmpty: t, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        d = (0, tF.Ay)(),
        u = (0, tU.M)(d) ? t0 : t1,
        c = (0, E.A)(n?.skuId),
        g = (function (e) {
            let { enabled: n, isInteracting: t } = e,
                { categories: l, purchases: r } = (0, tq.Ay)({ stalePurchasesOK: !0 }),
                s = i.useMemo(() => (0, tK.MG)(r, l), [r, l]);
            return (0, tZ.A)({ enabled: n, isInteracting: t, items: s, preload: t7 });
        })({ enabled: t && !r && !o, isInteracting: a }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != f ? (0, P.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != f &&
                (0, l.jsx)("div", {
                    className: s()(t8.hm, h, { [tQ.O]: m }),
                    style: p,
                    children: (0, l.jsx)(k.A, { frame: f, filterLayer: t6, isPreview: !0 }),
                }),
            (0, l.jsx)("div", {
                className: s()(t8.ti, { [t8.yT]: null == f }),
                children: (0, l.jsx)("img", { src: u, alt: "", className: t8.QQ, draggable: !1 }),
            }),
        ],
    });
}
function le(e) {
    let { user: n, guildId: t, disabled: r } = e,
        s = i.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        d = null != t,
        u = (0, a.bG)([G.A], () => (null != t ? G.A.getGuild(t) : null)),
        c = (0, eg.Xf)({ user: n }),
        g = (0, eg.Xf)({ user: n, guildId: t ?? void 0 }),
        { pendingProfileFrame: m } = (0, eg.Tu)(t ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        h = d && null != c,
        x = (0, eg.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: t ?? void 0 }),
        { product: A } = (0, tV.q)(x?.skuId),
        v = f ? null != m : null != g,
        I =
            null != x && v
                ? {
                      onClick: () => (0, na.p)({ guildId: t ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eL.intl.string(h ? eL.t.j6hZyM : eL.t.nQBruk),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, t9.w)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, u]);
    return (0, l.jsx)(tc.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : I,
        variant: "square",
        onClick: j,
        accessibleLabel: eL.intl.string(eL.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: n, productName: t, hasPendingSelection: l } = e;
            return null == n
                ? eL.intl.string(eL.t["3Xph0/"])
                : null != t && "" !== t
                  ? t
                  : eL.intl.string(l ? eL.t.yFeGB5 : eL.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, tH.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, l.jsx)(t4, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ln = t(684732),
    lt = t(498596),
    ll = t(871524);
function li(e) {
    let { primaryColor: n, secondaryColor: t, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, ts.Hl)(n)}, ${(0, ts.Hl)(t)})`;
    return (0, l.jsx)("div", { className: ll.D7, style: { background: r }, children: i });
}
function lr(e) {
    let { color: n } = e,
        t = (0, ts.Hl)(n),
        i = (0, ts.bJ)(n, 0xffffff) < lt.Tr.NonText;
    return (0, l.jsx)("div", {
        className: ll.OS,
        children: (0, l.jsx)("div", { className: s()(ll.Hy, { [ll.rY]: i }), style: { backgroundColor: t } }),
    });
}
function ls(e) {
    let { color: n, disabled: t, onClick: r, buttonRef: s, ...a } = e,
        o = i.useRef(null);
    return (0, l.jsx)(eQ.D, {
        ...a,
        innerRef: s ?? o,
        className: ll.Dh,
        onClick: t ? void 0 : r,
        "aria-disabled": t,
        tabIndex: t ? -1 : 0,
        children: (0, l.jsx)(lr, { color: n }),
    });
}
function la(e) {
    let {
        color: n,
        ariaLabel: t,
        suggestedColors: i,
        disabled: r,
        isOpen: s,
        onRequestOpen: a,
        onRequestClose: o,
        onSelect: d,
        buttonRef: u,
    } = e;
    return (0, l.jsx)(to.Y, {
        targetElementRef: u,
        shouldShow: s,
        onRequestOpen: a,
        onRequestClose: o,
        renderPopout: (e) => (0, l.jsx)(td.VN, { ...e, value: n, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, l.jsx)(ls, { color: n, onClick: i, disabled: r, buttonRef: u, "aria-label": t, ...s });
        },
    });
}
function lo(e) {
    let {
            primaryColor: n,
            secondaryColor: t,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: s,
            suggestedColors: a,
            disabled: o = !1,
            deleteButton: d,
            variant: u = "square",
            initialOpenPopout: c,
        } = e,
        [g, m] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        h = (0, ts.Hl)(n),
        x = (0, ts.Hl)(t),
        A = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: h }),
        v = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: x });
    i.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? f : p;
            (e.current?.focus(), m(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let I =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), f.current?.focus());
                  },
              }
            : void 0;
    return (0, l.jsx)(tc.Y, {
        variant: u,
        disabled: o,
        deleteButton: I,
        children: (0, l.jsxs)(li, {
            primaryColor: n,
            secondaryColor: t,
            children: [
                (0, l.jsx)(la, {
                    color: n,
                    ariaLabel: A,
                    suggestedColors: a,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => m("theme-primary"),
                    onRequestClose: () => m(null),
                    buttonRef: f,
                }),
                (0, l.jsx)(la, {
                    color: t,
                    ariaLabel: v,
                    suggestedColors: a,
                    onSelect: s,
                    disabled: o,
                    isOpen: "theme-secondary" === g,
                    onRequestOpen: () => m("theme-secondary"),
                    onRequestClose: () => m(null),
                    buttonRef: p,
                }),
            ],
        }),
    });
}
function ld(e) {
    let { user: n, guildId: t, disabled: r = !1 } = e,
        s = (0, X.Ay)(n.id, t),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, a.cf)([ep.A, K.A], () => {
            let e = ep.A.getPendingChanges(t ?? void 0),
                l = K.A.getUserProfile(n.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != t ? (K.A.getGuildMemberProfile(n.id, t)?.themeColors ?? null) : l,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, em.V7)({ userId: n.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, ee.A)({
            user: n,
            displayProfile: s,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, ta.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : n.getAvatarURL(t ?? void 0, 80),
        A = (0, tu.rh)(x, p, !1),
        v = i.useCallback(
            (e) => {
                (0, na.p)({ guildId: t ?? void 0, themeColors: e });
            },
            [t],
        ),
        I =
            null != t && (0, ln.l)(d, o)
                ? {
                      onClick: () => (0, na.p)({ guildId: t, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eL.intl.string(eL.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, l.jsx)(lo, {
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && v([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && v([m, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: I,
          });
}
var lu = t(629985);
function lc(e) {
    let { children: n, hasGradientBackground: t = !1 } = e;
    return (0, l.jsx)(f.F, { children: (0, l.jsx)("div", { className: s()(lu.k, { [lu.V]: t }), children: n }) });
}
var lg = t(689175),
    lm = t(424290);
function lf(e) {
    let { children: n } = e;
    return (0, l.jsx)(lg.zC, { className: lm.X, children: (0, l.jsx)("div", { className: lm.Q, children: n }) });
}
var lp = t(508770),
    lh = t(732280),
    lx = t(811611),
    lA = t(976860),
    lv = t(402860);
function lI() {
    return i.useCallback(() => {
        ((0, lA.pX)(Q.BVt.NITRO_HOME), (0, lv.closeUserProfileModal)());
    }, []);
}
var lj = t(570002),
    lb = t(202541),
    lC = t(155053);
function ly() {
    let e = (0, lh.V)();
    return e?.subscriptionTrial?.skuId === lb.pe.TIER_2 ? e : null;
}
function lN() {
    let e = (0, lj.A)(eL.intl.string(eL.t.pj0XBN));
    return (0, l.jsx)(tt.A, { subscriptionTier: lb.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function lE(e) {
    let { trialOffer: n, onSubscribeClick: t, onSubscribeSuccess: i, onSubscribeClose: r } = e,
        s = lI(),
        a = (0, H.FY)({
            intervalType: n.subscriptionTrial?.interval,
            intervalCount: n.subscriptionTrial?.intervalCount,
        }),
        o = (0, lx.ux)(n.expiresAt?.toISOString());
    return (0, l.jsxs)("div", {
        className: lC.nH,
        children: [
            (0, l.jsxs)("div", {
                className: lC.qf,
                children: [
                    (0, l.jsx)(m.A, { children: (0, l.jsx)(f.H, { children: eL.intl.string(eL.t.IBYG5U) }) }),
                    (0, l.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, l.jsx)(lp.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, l.jsx)(eU.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eL.intl.format(eL.t["fF+cgd"], { onClick: s }),
            }),
            (0, l.jsx)(tt.A, {
                subscriptionTier: lb.pe.TIER_2,
                buttonTextOverride: a,
                onClick: t,
                onSubscribeModalClose: (e) => {
                    (e && i?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, l.jsx)(eU.E, { variant: "text-xs/normal", color: "text-muted", className: lC.u8, children: o }),
        ],
    });
}
function lS() {
    let e = ly();
    return null == e ? (0, l.jsx)(lN, {}) : (0, l.jsx)(lE, { trialOffer: e });
}
var lk = t(55619),
    lP = t(848717);
function lT() {
    return (0, l.jsxs)("div", {
        className: lP.k,
        children: [
            (0, l.jsx)(eU.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eL.intl.string(eL.t.JFY17v),
            }),
            (0, l.jsx)(n8.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eL.intl.string(eL.t.R9GHya),
                onClick: function () {
                    return lk.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var lR = t(342866),
    lO = t(968475);
function lL(e) {
    let { user: n, ...t } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, a.cf)([ep.A], () => ({
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : i;
    return (0, l.jsx)(lR.A, {
        ...t,
        variant: "full-height-bar",
        userId: n.id,
        avatarChange: s,
        accessibleValue: (0, lR.$)(s, n.avatar),
        imageInteractingClassName: null == r ? lO.$T : void 0,
    });
}
function l_(e) {
    let { userId: n, ...t } = e,
        i = (0, X.Ay)(n),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [ep.A, K.A],
            () => ({
                pendingBanner: ep.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ep.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: K.A.getUserProfile(n)?.banner,
            }),
            [n],
        ),
        d = void 0 !== s ? s : r;
    return (0, l.jsx)(tv, {
        ...t,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: tp(d, o),
    });
}
function lw(e) {
    let { user: n, ...t } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([ep.A], () => ({
            pendingDisplayNameStyles: ep.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ep.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ep.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([V.default], () => ({ globalName: V.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, eg.lw)({ pendingValue: s, userValue: o }) ?? n.username;
    return (0, l.jsx)(tO, {
        ...t,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: tT(d),
        shouldAlwaysAnimate: null == r,
    });
}
var lM = t(207803);
function lD(e) {
    let n = (0, X.Ay)(e.id),
        {
            tryItOutThemeColors: t,
            tryItOutAvatar: l,
            pendingAvatar: i,
        } = (0, a.cf)([ep.A], () => ({
            tryItOutThemeColors: ep.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ep.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ep.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, em.V7)({ userId: e.id, image: void 0 !== l ? l : i }),
        { primaryColor: s, secondaryColor: o } = (0, ee.A)({
            user: e,
            displayProfile: n,
            pendingThemeColors: t,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: t };
}
function lG(e) {
    let { user: n, initialOpenPopout: t } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = lD(n),
        d = (0, ta.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != a ? a : n.getAvatarURL(void 0, 80),
        c = (0, tu.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, lM.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, l.jsx)(lo, {
              variant: "full-height-bar",
              primaryColor: r,
              secondaryColor: s,
              onSelectPrimaryColor: (e) => {
                  (o?.[0] == null || e !== o[0]) && g([e, s]);
              },
              onSelectSecondaryColor: (e) => {
                  (o?.[1] == null || e !== o[1]) && g([r, e]);
              },
              suggestedColors: c,
              initialOpenPopout: t,
          });
}
function lU(e) {
    let { user: n, onClickPrimary: t, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: s } = lD(n);
    if (null == r || null == s) return null;
    let a = eL.intl.formatToPlainString(eL.t.FquTfm, { colorLabel: (0, ts.Hl)(r) }),
        o = eL.intl.formatToPlainString(eL.t.xOnm4z, { colorLabel: (0, ts.Hl)(s) });
    return (0, l.jsx)(tc.Y, {
        variant: "full-height-bar",
        children: (0, l.jsxs)(li, {
            primaryColor: r,
            secondaryColor: s,
            children: [
                (0, l.jsx)(ls, { color: r, onClick: t, "aria-label": a }),
                (0, l.jsx)(ls, { color: s, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var lF = t(847081);
function lV(e) {
    let { user: n, mode: t } = e,
        r = i.useRef(null),
        s = i.useRef(null),
        a = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, n2.pA)(),
        c = (function (e) {
            let { analyticsLocations: n } = (0, b.Ay)();
            return i.useCallback(() => {
                (0, tb.L)({ analyticsLocations: n, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [n, e]);
        })(r),
        g = (0, tI._)({ isPremiumTryItOut: !0, returnRef: s }),
        m = (0, tI.P)({ isPremiumTryItOut: !0, returnRef: a }),
        f = "edit" === t;
    return (
        i.useEffect(() => {
            if (f && !o.current) {
                switch (d) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        m();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [d, f, c, g, m]),
        (0, l.jsxs)("div", {
            className: lF.T,
            children: [
                (0, l.jsx)(tM, {
                    heading: eL.intl.string(eL.t.NEzEws),
                    children: (0, l.jsx)(lw, {
                        user: n,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, l.jsx)(tM, {
                    heading: eL.intl.string(eL.t.DMeO2X),
                    children: f
                        ? (0, l.jsx)(lG, {
                              user: n,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, l.jsx)(lU, {
                              user: n,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, l.jsx)(tM, {
                    heading: eL.intl.string(eL.t.Vgdusv),
                    children: (0, l.jsx)(l_, {
                        userId: n.id,
                        buttonRef: a,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, l.jsx)(tM, {
                    heading: eL.intl.string(eL.t.Dt3ZUr),
                    children: (0, l.jsx)(lL, {
                        user: n,
                        buttonRef: s,
                        onClick: f ? g : () => u({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var lB = t(847374),
    lW = t(111159),
    lH = t(548118),
    lz = t(711014),
    lY = t(649998),
    lK = t(561392),
    lq = t(499957),
    lX = t(15626),
    lZ = t(715022),
    l$ = t(44482),
    lJ = t(470791);
function lQ(e) {
    let {
            options: n,
            value: t,
            onSelectionChange: r,
            label: a,
            className: o,
            listboxClassName: d,
            disabled: u = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: p,
        } = e,
        {
            isOpen: h,
            setIsOpen: x,
            refs: A,
            floatingStyles: v,
            getReferenceProps: I,
            getFloatingProps: j,
            transitionStyles: b,
        } = (function () {
            let { reducedMotion: e } = i.useContext(ey.C),
                {
                    isOpen: n,
                    setIsOpen: t,
                    refs: l,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, lK.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, lq.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: n,
                setIsOpen: t,
                refs: l,
                floatingStyles: r,
                getReferenceProps: s,
                getFloatingProps: a,
                transitionStyles: e.enabled ? {} : d,
            };
        })(),
        { setFloating: C } = A,
        y = i.useContext(lX._),
        N = i.useId(),
        E = i.useId(),
        S = i.useId(),
        k = i.useRef(null),
        P = i.useRef(null),
        [T, R] = i.useState(null),
        O = null != T ? (0, lZ.ZN)(S, T) : void 0,
        L = i.useRef(!1),
        _ = i.useRef(!1),
        w = i.useMemo(() => n.filter((e) => (0, lZ.fI)(e.value, [t])), [t, n]),
        M = i.useCallback(() => {
            u || x(!h);
        }, [u, x, h]),
        D = i.useCallback(
            (e) => {
                h && 0 === e.button && e.preventDefault();
            },
            [h],
        ),
        G = i.useCallback(() => {
            (x(!1), k.current?.focus());
        }, [x]),
        U = i.useCallback(
            (e) => {
                if (!P.current?.contains(e.relatedTarget)) {
                    if (_.current) {
                        _.current = !1;
                        return;
                    }
                    if (h && null != T) {
                        let e = n[T];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    h && x(!1);
                }
            },
            [h, T, n, r, x],
        ),
        F = i.useCallback(
            (e) => {
                if (u) return;
                let n = e[0];
                null != n && (r(n.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: V, handleKeyDown: B } = (0, lY.l)(!0, n),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = V !== W.current;
        ((W.current = V), null != V && e && (R(V), h || ((L.current = !0), x(!0))));
    }, [V, h, x]);
    let H = i.useCallback(
            (e) => {
                if (u) return;
                let t = n.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let n = "PageDown" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), !h || e.altKey)) {
                            h || x(!0);
                            return;
                        }
                        R((e) => (null === e ? 0 : Math.min(e + n, t - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let l = "PageUp" === e.key ? 10 : 1;
                        if (0 === t) return;
                        if ((e.preventDefault(), e.altKey && h)) {
                            if (null != T) {
                                let e = n[T];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!h) return void x(!0);
                        R((e) => (null === e ? 0 : Math.max(e - l, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !h)) return void x(!0);
                        if (null == T || T > t - 1) return;
                        {
                            let e = n[T];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        (R(0), h || ((L.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        (R(t - 1), h || ((L.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (h && null != T) {
                            let e = n[T];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((_.current = !0), x(!1));
                        break;
                    case "Escape":
                        h && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, h, n, T, F, G, r, x, B],
        ),
        z = Math.max(
            n.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = i.useRef(!1);
    i.useEffect(() => {
        c || !h || Y.current
            ? h || ((Y.current = !1), R(null), (L.current = !1))
            : ((Y.current = !0), L.current || R(n.length > 0 ? z : null), (L.current = !1), k.current?.focus());
    }, [c, h, z, n.length]);
    let K = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": h ? S : void 0,
        "aria-expanded": h,
        "aria-activedescendant": O,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != a ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: M,
        onMouseDown: D,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, l.jsxs)("div", {
        ref: (e) => {
            ((P.current = e), A.setReference(e));
        },
        className: o,
        ...I(),
        children: [
            null != a && (0, l.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: a }),
            p({ buttonRef: k, selectButtonProps: K }),
            !u &&
                h &&
                (0, l.jsx)("div", {
                    ref: C,
                    className: s()(lJ.S_, d),
                    ...j(),
                    style: { ...v, ...b },
                    children: (0, l.jsx)(lY.q, {
                        id: S,
                        tabIndex: -1,
                        items: n,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: T,
                        renderListItem: (e) => (null != f ? f(e) : (0, l.jsx)(l$.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var l0 = t(216384);
let l1 = "MAIN_PROFILE";
function l2(e) {
    let { guild: n } = e;
    return (0, l.jsx)(lH.Ay, { className: l0.$f, guild: n, size: lH.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function l5(e) {
    let { leading: n, label: t, description: i } = e;
    return (0, l.jsxs)("div", {
        className: l0.XE,
        children: [
            null != n && (0, l.jsx)("div", { className: l0.fZ, children: n }),
            (0, l.jsxs)("div", {
                className: l0.qL,
                children: [
                    (0, l.jsx)(eU.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: t }),
                    null != i &&
                        "" !== i &&
                        (0, l.jsx)(eU.E, {
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
function l9(e) {
    let { leading: n, label: t, disabled: i, buttonRef: r, selectButtonProps: a } = e;
    return (0, l.jsxs)(eQ.D, {
        innerRef: r,
        className: s()(l0.L5, { [l0.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...a,
        children: [
            n,
            (0, l.jsx)(eU.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: l0.v9,
                children: t,
            }),
            (0, l.jsx)(lB.a, {
                className: l0.u4,
                size: "sm",
                color: !0 === i ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function l3(e) {
    let { selectedGuildId: n, originGuildId: t, onChange: r, loading: s, disabled: o } = e,
        d = (0, a.bG)([lz.Ay], () => lz.Ay.getFlattenedGuildIds()),
        u = (0, a.bG)([G.A], () => G.A.getGuilds()),
        c = (0, a.bG)([e3.A], () => {
            let e = e3.A.getGuildId();
            return null == e || ep._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ef.Ay, lz.Ay], () => {
            let e = {};
            for (let n of lz.Ay.getFlattenedGuildIds()) {
                let t = ef.Ay.getSelfMember(n)?.nick;
                null != t && (e[n] = t);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: l1,
                    label: eL.intl.string(eL.t["2p07FR"]),
                    value: l1,
                    leading: (0, l.jsx)(lW.p, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
                },
                n = t ?? c,
                i = d
                    .map((e) => {
                        if (e === n) return null;
                        let t = u[e];
                        return null == t
                            ? null
                            : {
                                  id: t.id,
                                  label: t.name,
                                  value: t.id,
                                  leading: (0, l.jsx)(l2, { guild: t }),
                                  description: g[t.id] ?? void 0,
                              };
                    })
                    .filter(es.Vq),
                r = null != n ? u[n] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, l.jsx)(l2, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, t, c, g]),
        f = n ?? l1,
        p = m.find((e) => e.value === f) ?? m[0],
        x = i.useCallback(
            (e) => {
                let t = e === l1 ? null : e;
                t !== n && r(t);
            },
            [r, n],
        );
    return (0, l.jsx)(lQ, {
        className: l0.kL,
        label: eL.intl.string(eL.t.rki38K),
        listboxClassName: l0.yt,
        options: m,
        value: f,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, l.jsx)(l5, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, l.jsx)(l9, { leading: p.value === l1 ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var l7 = t(462887),
    l8 = t(765178),
    l6 = t(461797),
    l4 = t(469054),
    ie = t(601298);
function it() {
    let { preset: e, setPreset: n } = (0, n2.RQ)(),
        t = (0, tF.Ay)(),
        l = (0, l7.q)(t),
        r = i.useCallback(
            (e) => {
                let n = (0, l6.Wt)(e);
                (0, lM.w5)({
                    banner: (0, ie.X)({
                        assetOrigin: l4.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: l ? n.themeColors.light : n.themeColors.dark,
                    displayNameStyles: n.displayNameStyles,
                });
            },
            [l],
        );
    return (
        i.useEffect(() => {
            ep.A.hasTryItOutChanges() || r(e);
        }, [r, e]),
        i.useCallback(() => {
            let t = (0, l6.B$)(e),
                l = (0, l6.Wt)(t);
            (nW.default.track(Q.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                r(t),
                l8.O.announce(eL.intl.formatToPlainString(eL.t.M2Hj9s, { presetName: l.getName() })));
        }, [e, n, r])
    );
}
var il = t(23722),
    ii = t(288490);
let ir = "profile-editing-nameplate-error",
    is = "profile-editing-avatar-error",
    ia = "profile-editing-avatar-decoration-error",
    io = "profile-editing-banner-error",
    id = "profile-editing-display-name-style-error";
function iu(e) {
    let { className: n } = e;
    return (0, l.jsx)("div", {
        className: s()(ii.D0, n),
        children: (0, l.jsx)("div", { className: ii.ZN, children: (0, l.jsx)(n5.LockIcon, { size: "xs" }) }),
    });
}
function ic() {
    let [e, n] = (0, te.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, l.jsxs)("div", {
              className: ii.X6,
              children: [
                  (0, l.jsx)(eU.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eL.intl.string(eL.t["gBIG/N"]),
                  }),
                  (0, l.jsx)(eQ.D, {
                      "aria-label": eL.intl.string(eL.t.rSe9ra),
                      className: ii.TD,
                      onClick: () => n(!0),
                      children: (0, l.jsx)(n9.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function ig() {
    let e = lI(),
        n = (0, lj.A)(eL.intl.string(eL.t["7IWwak"]));
    return (0, l.jsxs)("div", {
        className: ii.eW,
        children: [
            (0, l.jsxs)("div", {
                className: ii.tm,
                children: [
                    (0, l.jsx)(n3.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eL.intl.string(eL.t.bO0TOe),
                    }),
                    (0, l.jsx)(eU.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eL.intl.format(eL.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, l.jsx)(tt.A, { subscriptionTier: lb.pe.TIER_2, buttonTextOverride: n, size: "sm", fullWidth: !0 }),
            (0, l.jsx)(iu, { className: ii.nd }),
        ],
    });
}
function im() {
    return (0, l.jsx)(eU.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: ii.BJ,
        "aria-hidden": !0,
        children: eL.intl.format(eL.t.kYv9DM, {
            nitroIconHook: () => (0, l.jsx)(ne.t, { size: "xxs", color: "currentColor", className: ii.qp }),
        }),
    });
}
function ip(e) {
    let { user: n, guildId: t, disabled: i, errorMessage: r } = e;
    return (0, l.jsxs)(tM, {
        heading: eL.intl.string(eL.t.x5CoXR),
        disabled: i,
        children: [
            (0, l.jsx)(tG.A, { user: n, guildId: t, disabled: i, errorMessageId: null != r ? ir : void 0 }),
            (0, l.jsx)(tD, { id: ir, message: r }),
        ],
    });
}
function ih(e) {
    let { user: n, guildId: t, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, l.jsxs)(tM, {
        heading: eL.intl.string(eL.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, l.jsx)(ti.A, { user: n, guildId: t, disabled: i, errorMessageId: null != r ? is : void 0 }),
            (0, l.jsx)(tr.A, { user: n, guildId: t, disabled: i, errorMessageId: null != s ? ia : void 0 }),
            (0, l.jsx)(tD, { id: is, message: (0, tl.d3)(r) }),
            (0, l.jsx)(tD, { id: ia, message: s }),
        ],
    });
}
function ix(e) {
    let { user: n, guildId: t, disabled: i, errorMessage: r } = e,
        s = (0, tn.ux)("UserProfileModalV2EditingPanel"),
        [a, o] = (0, eR.kn)(s && !i ? [eb.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = a === eb.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, l.jsxs)(tM, {
        heading: eL.intl.string(eL.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, l.jsx)(n7.Lp, { text: eL.intl.string(eL.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, l.jsx)(tL, {
                user: n,
                guildId: t,
                disabled: i,
                errorMessageId: null != r ? id : void 0,
                onOpen: d ? () => o(eO.i.TAKE_ACTION) : void 0,
            }),
            (0, l.jsx)(tD, { id: id, message: r }),
        ],
    });
}
function iA(e) {
    let { user: n, guildId: t, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, l.jsxs)(tM, {
        heading: eL.intl.string(eL.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, l.jsx)(ld, { user: n, guildId: t, disabled: i || !r }),
            (0, l.jsx)(tj, { userId: n.id, guildId: t, disabled: i || !r, errorMessageId: null != s ? io : void 0 }),
            (0, l.jsx)(tD, { id: io, message: (0, tl.d3)(s) }),
        ],
    });
}
function iv(e) {
    let { user: n, disabled: t } = e;
    return (0, l.jsx)(tM, {
        heading: eL.intl.string(eL.t["/X3fkf"]),
        disabled: t,
        children: (0, l.jsx)(tg, { user: n, disabled: t }),
    });
}
function iI(e) {
    let { user: n, guildId: t, disabled: i } = e;
    return (0, l.jsxs)(tM, {
        heading: eL.intl.string(eL.t["Vfbar/"]),
        disabled: i,
        children: [
            (0, l.jsx)(t5, { user: n, guildId: t, disabled: i, variant: "square" }),
            (0, l.jsx)(le, { user: n, guildId: t, disabled: i }),
        ],
    });
}
let ij = "premium-try-it-out-description";
function ib(e) {
    let { user: n } = e,
        t = lI(),
        { navigate: i } = (0, n2.pA)();
    return (
        it(),
        (0, l.jsxs)("div", {
            role: "group",
            "aria-labelledby": ij,
            className: ii.DX,
            children: [
                (0, l.jsx)(iu, { className: ii.x$ }),
                (0, l.jsxs)("div", {
                    className: ii.sb,
                    children: [
                        (0, l.jsx)(eU.E, {
                            id: ij,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eL.intl.format(eL.t.TmfgI2, { onClick: t }),
                        }),
                        (0, l.jsx)(n8.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: n6.EyeIcon,
                            text: eL.intl.string(eL.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, l.jsx)(lV, { user: n, mode: "entrypoint" }),
            ],
        })
    );
}
function iC(e) {
    let {
            user: n,
            panelId: t,
            selectedGuildId: i,
            originGuildId: r,
            isLoading: s,
            isEditingDisabled: o,
            collapseButtonRef: d,
            onClosePanel: u,
            onSelectGuildId: c,
        } = e,
        g = (0, a.bG)([F.A], () => F.A.hidePersonalInformation),
        m = (0, il.A)(c),
        f = null != i,
        p = H.Ay.canUsePremiumProfileCustomization(n),
        h = f && !p,
        x = !p && !f,
        A = f && !p && !g,
        v = s || o,
        I = (0, a.bG)([ep.A], () => ep.A.getErrors(i)),
        j = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        b = I.avatar?.[0],
        C = I.avatar_decoration_sku_id?.[0],
        y = I.banner?.[0],
        N = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0];
    return (0, l.jsxs)(lc, {
        hasGradientBackground: A,
        children: [
            (0, l.jsxs)("div", {
                className: ii.wx,
                children: [
                    (0, l.jsx)(nw.m, {
                        text: eL.intl.string(eL.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, l.jsx)(n1.K, {
                            buttonRef: d,
                            "aria-label": eL.intl.string(eL.t["l/A351"]),
                            icon: n4.V,
                            onClick: u,
                            "aria-controls": t,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, l.jsx)(l3, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: m,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, l.jsx)(lT, {})
                : (0, l.jsx)(lf, {
                      children: (0, l.jsxs)(l.Fragment, {
                          children: [
                              f && (p ? (0, l.jsx)(ic, {}) : (0, l.jsx)(ig, {})),
                              p && (0, l.jsx)(im, {}),
                              (0, l.jsx)(ip, { user: n, guildId: i, disabled: v || h, errorMessage: j }),
                              (0, l.jsx)(ih, {
                                  user: n,
                                  guildId: i,
                                  disabled: v || h,
                                  avatarErrorMessage: b,
                                  avatarDecorationErrorMessage: C,
                              }),
                              p || f
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(ix, { user: n, guildId: i, disabled: v || h, errorMessage: N }),
                                            (0, l.jsx)(iA, {
                                                user: n,
                                                guildId: i,
                                                disabled: v || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: y,
                                            }),
                                        ],
                                    })
                                  : (0, l.jsx)(iv, { user: n, disabled: v || h }),
                              (0, l.jsx)(iI, { user: n, guildId: i, disabled: v || h }),
                              x &&
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [(0, l.jsx)(ib, { user: n }), (0, l.jsx)(lS, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var iy = t(202091),
    iN = t(110654);
function iE(e) {
    return null;
}
function iS(e) {
    let { activeSlide: n, direction: t, onTransitionComplete: r, children: a } = e,
        o = new Map(a.map((e) => [e.props.id, e]));
    if (!o.has(n)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [d, c] = i.useState(n),
        [g, m] = i.useState(!1),
        f = "forwards" === t ? 1 : -1,
        p = (0, u.p)(
            n,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, t) => {
                    let { item: l } = t;
                    e.finished && l === n && (m(!1), l !== d && (c(n), r()));
                },
            },
            "respect-motion-settings",
        ),
        h = g || n !== d;
    return (0, l.jsx)("div", {
        className: s()(iN.kL, h && iN.ez),
        children: (0, l.jsx)("div", {
            className: iN.u4,
            children: p((e, n, t) => {
                let { key: i } = t,
                    r = o.get(n);
                return null == r
                    ? null
                    : (0, l.jsx)(
                          iy.animated.div,
                          {
                              className: iN.M6,
                              style: h
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: h || n !== d,
                              "aria-hidden": h || n !== d,
                              children: r.props.children,
                          },
                          i,
                      );
            }),
        }),
    });
}
var ik = t(926321),
    iP = t(477155),
    iT = t(561243),
    iR = t(206697),
    iO = t(280406);
let iL = "shuffle-options-a11y-description";
function i_(e) {
    let { className: n, onShuffle: t } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)(n8.$, {
                icon: ik.DiceIcon,
                text: eL.intl.string(eL.t.VzqqFC),
                onClick: t,
                variant: "secondary",
                size: "sm",
                "aria-describedby": iL,
                fullWidth: !0,
            }),
            (0, l.jsx)(m.A, { id: iL, children: eL.intl.string(eL.t.bBRdiB) }),
        ],
    });
}
function iw(e) {
    let { user: n, onBack: t, backButtonRef: i } = e,
        r = it(),
        s = ly();
    return (0, l.jsxs)(lc, {
        children: [
            (0, l.jsxs)("div", {
                className: iO.wx,
                children: [
                    (0, l.jsx)("div", {
                        className: iO.FS,
                        children: (0, l.jsx)(nw.m, {
                            text: eL.intl.string(eL.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, l.jsx)(n1.K, {
                                buttonRef: i,
                                "aria-label": eL.intl.string(eL.t["4IYwrw"]),
                                icon: iP.r,
                                onClick: t,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, l.jsx)(n3.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iO.R_,
                        children: eL.intl.string(eL.t.PxUx8e),
                    }),
                    (0, l.jsx)(eU.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iO.Ij,
                        children: eL.intl.string(eL.t.X0ir7L),
                    }),
                    (0, l.jsx)(i_, { className: iO.ZZ, onShuffle: r }),
                ],
            }),
            (0, l.jsx)(lf, {
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(lV, { user: n, mode: "edit" }),
                        null != s &&
                            (0, l.jsx)(lE, {
                                trialOffer: s,
                                onSubscribeClick: iR.t,
                                onSubscribeSuccess: iR.T,
                                onSubscribeClose: iT.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var iM = t(199016);
let iD = "user-profile-editing-panel",
    iG = "profile-modal-editing-panel-heading";
function iU(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(nw.m, {
        text: eL.intl.string(eL.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, l.jsx)(eQ.D, {
            innerRef: i,
            "aria-label": eL.intl.string(eL.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iD,
            className: s()(iM.eg, t),
            onClick: n,
            focusProps: { offset: { right: 6 } },
            children: (0, l.jsx)(n0.V, { size: "sm", color: "currentColor" }),
        }),
    });
}
function iF(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(nw.m, {
            text: eL.intl.string(eL.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, l.jsx)(n1.K, {
                buttonRef: i,
                "aria-label": eL.intl.string(eL.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iD,
                icon: n0.V,
                onClick: n,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iV(e) {
    let {
            selectedGuildId: n,
            originGuildId: t,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: d = !1,
            onClose: u,
            className: c,
            collapseButtonRef: g,
        } = e,
        p = (0, a.bG)([V.default], () => V.default.getCurrentUser()),
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: v } = (0, n2.pA)(),
        I = i.useRef(null);
    return (i.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => I.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, l.jsx)("aside", {
              id: iD,
              "aria-labelledby": iG,
              className: s()(iM.nd, c),
              "aria-busy": o,
              children: (0, l.jsxs)("div", {
                  className: iM.l$,
                  children: [
                      (0, l.jsx)(m.A, {
                          children: (0, l.jsx)(f.H, { id: iG, children: eL.intl.string(eL.t["L+ch00"]) }),
                      }),
                      (0, l.jsxs)(iS, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, l.jsx)(iE, {
                                  id: "default",
                                  children: (0, l.jsx)(iC, {
                                      panelId: iD,
                                      user: p,
                                      selectedGuildId: n,
                                      originGuildId: t,
                                      isLoading: o,
                                      isEditingDisabled: d,
                                      collapseButtonRef: g,
                                      onClosePanel: u,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, l.jsx)(iE, {
                                  id: "premiumTryItOut",
                                  children: (0, l.jsx)(iw, { user: p, onBack: v, backButtonRef: I }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iB = t(669253),
    iW = t(347805),
    iH = t(34011),
    iz = t(629403),
    iY = t(612630),
    iK = t(61426);
function iq(e) {
    let { userId: n, className: t, autoFocus: r = !1, onUpdate: o } = e,
        d = (0, a.bG)([F.A], () => F.A.hidePersonalInformation),
        { loading: u, note: c } = (0, iY.A)(n),
        [g, m] = i.useState(),
        [f, p] = i.useState(),
        h = g ?? c,
        x = i.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), m(e), o?.());
                    try {
                        await iz.A.updateNote(n, e);
                    } catch {
                        p(eL.intl.string(eL.t.F8FvUy));
                    }
                }
            },
            [n, c, o],
        ),
        A = u && null == h,
        v = i.useRef(null),
        I = i.useRef(!1);
    if (
        (i.useEffect(() => {
            !r || d || u || I.current || ((I.current = !0), v.current?.focus({ preventScroll: !0 }));
        }, [r, d, u]),
        d)
    )
        return null;
    let j =
        null != h && h.length > 0
            ? (0, l.jsx)(eU.E, { variant: "text-sm/normal", color: "text-default", className: iK.t, children: h })
            : null;
    return (0, l.jsx)("div", {
        className: s()(nc.kL, t),
        children: (0, l.jsx)(iH.w, {
            inputRef: v,
            value: h ?? "",
            onCommit: x,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: !0,
            paddingBlock: "md",
            scrollIntoViewOnFocus: !0,
            preview: j,
            label: eL.intl.string(eL.t.PbMNh2),
            placeholder: A ? eL.intl.string(eL.t["WLKx/9"]) : eL.intl.string(eL.t.VBhOe2),
            maxLength: Q.T7x,
            disabled: A,
            error: f,
        }),
    });
}
var iX = t(518477),
    iZ = t(793222);
function i$(e) {
    let { userId: n } = e,
        t = (0, eI.g)(),
        { trackUserProfileAction: i } = (0, z.NJ)(),
        r = (0, q.X)("UserProfileModalV2NotesSection"),
        s = r ? iq : iW.A;
    return (0, l.jsx)(nr, {
        heading: eL.intl.string(eL.t["mQKv+v"]),
        scrollTargetId: iX.bk.NOTE,
        children: (0, l.jsx)(s, {
            userId: n,
            className: r ? iZ.N : iZ.w,
            autoFocus: t === iX.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var iJ = t(123292),
    iQ = t(667242),
    i0 = t(655214);
function i1(e) {
    let { icon: n, message: t, actionLabel: r, onAction: a, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, l.jsx)("div", {
            className: iQ.kL,
            children: (0, l.jsxs)("div", {
                className: s()(i0.oR, iQ.Qs),
                "data-type": d,
                children: [
                    (0, l.jsx)("div", { className: iQ.Kk, children: n }),
                    (0, l.jsx)(eU.E, { color: "text-strong", variant: "text-sm/semibold", children: t }),
                    null != r &&
                        null != a &&
                        (0, l.jsx)("div", {
                            className: iQ.hP,
                            children: (0, l.jsx)(iJ.Q, {
                                buttonRef: c,
                                variant: "primary",
                                textVariant: "text-sm/semibold",
                                text: r,
                                onClick: a,
                                disabled: o,
                            }),
                        }),
                ],
            }),
        })
    );
}
var i2 = t(346055),
    i5 = t(289873),
    i9 = t(615019);
function i3(e) {
    let { showScrim: n, showLoadingSpinner: t, className: r, children: a } = e;
    i.useEffect(() => {
        t && l8.O.announce(eL.intl.string(eL.t["QR+vBP"]));
    }, [t]);
    let o = i.useRef(null);
    return (
        (0, i2.f)(o, n),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: s()(i9.f, n && i9.z),
                    children: t && (0, l.jsx)(i5.y, { type: i5.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, l.jsx)("div", { ref: o, "aria-hidden": n || void 0, className: r, children: a }),
            ],
        })
    );
}
var i7 = t(568602),
    i8 = t(625494),
    i6 = t(61881);
function i4(e) {
    let { children: n } = e,
        [t, r] = i.useState(!1),
        [s, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, a.bG)([i6.A, ep.A], () => i6.A.hasUnsavedChanges() || ep.A.hasUnsavedChanges());
    i.useEffect(() => {
        c || (u.current = 1.4);
    }, [c]);
    let g = i.useCallback(() => {
        (null != d.current && (clearTimeout(d.current), (d.current = null)), r(!1));
    }, []);
    return (
        i.useEffect(() => {
            function e() {
                (o(u.current),
                    (u.current = Math.min(u.current + 2, 15)),
                    r(!0),
                    null != d.current && clearTimeout(d.current),
                    (d.current = setTimeout(() => {
                        (r(!1), (d.current = null));
                    }, 300)));
            }
            return (
                i8._.subscribe(Q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    i8._.unsubscribe(Q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, l.jsx)(i7.b, { isShaking: t, intensity: s, children: n })
    );
}
t(46121);
var re = t(761508),
    rn = t(695904),
    rt = t(116331),
    rl = t(713348),
    ri = t(827258),
    rr = t(517164),
    rs = t(114212),
    ra = t(290863),
    ro = t(461213),
    rd = t(975571),
    ru = t(146655),
    rc = t(489379),
    rg = t(402857),
    rm = t(353394),
    rf = t(64622),
    rp = t(986712),
    rh = t(435558),
    rx = t(534890),
    rA = t(308528),
    rv = t(780964),
    rI = t(766075),
    rj = t(92795);
let rb = [
        () => eL.intl.string(eL.t.madJdE),
        () => eL.intl.string(eL.t.NYmfoP),
        () => eL.intl.string(eL.t.R2PaCg),
        () => eL.intl.string(eL.t.laSR8h),
        () => eL.intl.string(eL.t.DnsJE8),
    ],
    rC = [
        () => eL.intl.string(eL.t.nFSbeE),
        () => eL.intl.string(eL.t.gTcxOz),
        () => eL.intl.string(eL.t["8T0wYj"]),
        () => eL.intl.string(eL.t.BIHl1g),
        () => eL.intl.string(eL.t["jhBm0+"]),
    ],
    ry = [
        () => eL.intl.string(eL.t.AyMGXA),
        () => eL.intl.string(eL.t.aAFW7V),
        (e) => eL.intl.formatToPlainString(eL.t.h2g0cM, { name: e }),
        () => eL.intl.string(eL.t.rrYh58),
        () => eL.intl.string(eL.t["HX3K+F"]),
        () => eL.intl.string(eL.t["/yW3aY"]),
        () => eL.intl.string(eL.t["PmL/v0"]),
        () => eL.intl.string(eL.t.IALa3h),
        () => eL.intl.string(eL.t.HRcTFL),
        () => eL.intl.string(eL.t.NuCqPt),
        () => eL.intl.string(eL.t["M1tw+4"]),
        () => eL.intl.string(eL.t.UBm1y2),
        () => eL.intl.string(eL.t.Cu95PQ),
        () => eL.intl.string(eL.t["R/wFuh"]),
        () => eL.intl.string(eL.t.HQPAVT),
        () => eL.intl.string(eL.t.YolGh4),
    ],
    rN = [
        Q.fg2.STEAM,
        Q.fg2.PLAYSTATION,
        Q.fg2.XBOX,
        Q.fg2.TWITCH,
        Q.fg2.BATTLENET,
        Q.fg2.LEAGUE_OF_LEGENDS,
        Q.fg2.EPIC_GAMES,
        Q.fg2.RIOT_GAMES,
        Q.fg2.ROBLOX,
        Q.fg2.SPOTIFY,
        Q.fg2.YOUTUBE,
        Q.fg2.CRUNCHYROLL,
        Q.fg2.BUNGIE,
    ];
function rE(e) {
    let { heading: n, bodyText: t, children: i } = e;
    return (0, l.jsxs)("div", {
        className: rj.Ie,
        children: [
            (0, l.jsxs)("div", {
                className: rj.FS,
                children: [
                    (0, l.jsx)(n3.D, { variant: "heading-md/medium", color: "text-strong", children: n }),
                    (0, l.jsx)(eU.E, { variant: "text-sm/normal", color: "text-default", children: t }),
                ],
            }),
            i,
        ],
    });
}
function rS() {
    let e = eL.intl.string(eL.t.RnD2yZ),
        [n] = i.useState(() => ((0, rh.sample)(rb) ?? rb[0])());
    return (0, l.jsx)(rE, { heading: e, bodyText: n });
}
function rk() {
    let e = eL.intl.string(eL.t.bFgqYJ),
        [n] = i.useState(() => ((0, rh.sample)(rC) ?? rC[0])());
    return (0, l.jsx)(rE, { heading: e, bodyText: n });
}
function rP(e) {
    let { user: n, guildId: t, channelId: r, onClose: s } = e,
        a = B.Ay.getName(t, r, n),
        o = eL.intl.formatToPlainString(eL.t.sjSitP, { name: a }),
        [d] = i.useState(() => ((0, rh.sample)(ry) ?? ry[0])(a)),
        u = i.useCallback(() => {
            (rA.A.openPrivateChannel({ recipientIds: n.id }), s?.());
        }, [n.id, s]);
    return (0, l.jsx)(rE, {
        heading: o,
        bodyText: d,
        children: (0, l.jsx)("div", {
            className: rj.v0,
            children: (0, l.jsx)(nP.FD, { icon: rx.ChatIcon, text: eL.intl.string(eL.t["g33r/P"]), onClick: u }),
        }),
    });
}
function rT() {
    let e = (0, tF.Ay)();
    return (0, l.jsx)("div", {
        className: rj.HU,
        children: rN.map((n, t) => {
            let i = el.A.get(n);
            if (null == i) return null;
            let r = (0, tU.M)(e) ? i.icon.darkPNG : i.icon.lightPNG;
            return (0, l.jsx)("img", { src: r, alt: i.name, className: rj.gj }, t);
        }),
    });
}
function rR(e) {
    let { onClose: n } = e,
        t = i.useCallback(() => {
            (n?.(), (0, rI.openUserSettings)(rv.X.CONNECTIONS_CATEGORY));
        }, [n]),
        r = i.useCallback(() => {
            (n?.(), (0, rI.openUserSettings)(rv.X.CONNECTED_GAMES_CATEGORY));
        }, [n]);
    return (0, l.jsxs)(rE, {
        heading: eL.intl.string(eL.t.VB6LWY),
        bodyText: eL.intl.string(eL.t.KpjsU9),
        children: [
            (0, l.jsx)(rT, {}),
            (0, l.jsxs)("div", {
                className: rj.v0,
                children: [
                    (0, l.jsx)(nP.FD, { text: eL.intl.string(eL.t["/Hl24U"]), onClick: t }),
                    (0, l.jsx)(nP.FD, { text: eL.intl.string(eL.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var rO = t(286409),
    rL = t(587763);
function r_(e) {
    let { user: n, currentUser: t, displayProfile: i, guildId: r, channelId: s, onClose: o } = e,
        { live: d, recent: u, stream: c } = (0, ru.A)(n.id),
        { voiceChannel: g, voiceActivity: m } = (0, rc.A)({ userId: n.id, guildId: r }),
        f = (0, a.bG)([rr.A], () => rr.A.isFetchingUserOutbox(n.id)),
        p = n.id === t.id,
        h = (0, a.bG)([ro.A, ra.A], () => {
            let e = p ? ro.A.getStatus() : ra.A.getStatus(n.id);
            return e === Q.clD.OFFLINE || e === Q.clD.INVISIBLE;
        }),
        x = d.length > 0 || null != c,
        A = i?.private !== !0 && null == c && null == m && null != g,
        v = !h && (x || A),
        I = u.length > 0;
    return v || I || !f
        ? v || I || f
            ? (0, l.jsxs)(rO.K, {
                  className: rL.XG,
                  fade: !0,
                  children: [
                      v
                          ? (0, l.jsx)(nr, {
                                heading: eL.intl.string(eL.t.J6STd9),
                                children: (0, l.jsxs)("ul", {
                                    className: rL.kR,
                                    children: [
                                        null != c &&
                                            (0, l.jsx)("li", {
                                                children: (0, l.jsx)(rf.A, {
                                                    user: n,
                                                    currentUser: t,
                                                    stream: c,
                                                    onClose: o,
                                                }),
                                            }),
                                        d.map((e, i) =>
                                            (0, l.jsx)(
                                                "li",
                                                {
                                                    children: (0, l.jsx)(rg.A, {
                                                        user: n,
                                                        currentUser: t,
                                                        activity: e,
                                                        onClose: o,
                                                    }),
                                                },
                                                `live-${i}`,
                                            ),
                                        ),
                                        A &&
                                            (0, l.jsx)("li", {
                                                children: (0, l.jsx)(rp.A, {
                                                    user: n,
                                                    currentUser: t,
                                                    voiceChannel: g,
                                                    onClose: o,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      I
                          ? (0, l.jsx)(nr, {
                                heading: eL.intl.string(eL.t.jzgEoL),
                                introText: p
                                    ? eL.intl.format(eL.t["4bk9Ak"], {
                                          learnMoreHook: (e, n) =>
                                              (0, l.jsx)(
                                                  nM.Anchor,
                                                  {
                                                      href: rd.A.getArticleURL(Q.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  n,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: iX.bk.RECENT_ACTIVITY,
                                children: (0, l.jsx)("ul", {
                                    className: rL.kR,
                                    children: u.map((e) =>
                                        (0, l.jsx)(
                                            "li",
                                            { children: (0, l.jsx)(rm.A, { user: n, entry: e, onClose: o }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : p
              ? (0, l.jsx)(rR, { onClose: o })
              : (0, l.jsx)(rP, { user: n, guildId: i?.guildId ?? r, channelId: s, onClose: o })
        : (0, l.jsx)("div", {
              className: rL.kR,
              children: Array.from({ length: 8 }).map((e, n) =>
                  (0, l.jsxs)(
                      "div",
                      {
                          className: rL.kr,
                          children: [
                              (0, l.jsx)(rs.FQ, { width: 60, opacity: 0.08 }),
                              (0, l.jsx)(rs.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      n,
                  ),
              ),
          });
}
var rw = t(163126),
    rM = t(913453),
    rD = t(229187),
    rG = t(503062),
    rU = t(393213);
function rF(e) {
    let { user: n, guildId: t, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, z.NJ)(),
        { mutualFriends: u, mutualFriendsCount: c } = (0, rM.A)(n),
        g = (0, rw.A)();
    return (
        i.useEffect(() => {
            (0, rD.A)(n.id, g);
        }, [n.id, g]),
        (0, l.jsx)(rO.K, {
            className: rU.XG,
            children:
                null == u
                    ? Array.from({ length: c ?? 10 }).map((e, n) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: rU.D$,
                                  children: [
                                      (0, l.jsx)(rs.FQ, { width: 40, opacity: 0.08 }),
                                      (0, l.jsx)(rs.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              n,
                          ),
                      )
                    : 0 === u.length
                      ? (0, l.jsx)(rS, {})
                      : u.map((e) => {
                            let { key: n, user: i, status: u } = e;
                            return (0, l.jsx)(
                                rG.A,
                                {
                                    user: i,
                                    status: u,
                                    guildId: t,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, lv.openUserProfileModal)({
                                                ...o,
                                                userId: i.id,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                n,
                            );
                        }),
        })
    );
}
var rV = t(398590),
    rB = t(345942),
    rW = t(51943);
function rH(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: i } = (0, z.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, rM.A)(n);
    return (0, l.jsx)(rO.K, {
        className: rU.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, n) =>
                      (0, l.jsxs)(
                          "div",
                          {
                              className: rU.Y7,
                              children: [
                                  (0, l.jsx)(rs.FQ, { width: 40, opacity: 0.08 }),
                                  (0, l.jsx)(rs.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          n,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, l.jsx)(
                            rW.A,
                            {
                                user: n,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (i({ action: "PRESS_MUTUAL_GUILD" }), (0, rB.u)(r.id), t(), (0, rV.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, l.jsx)(rk, {}),
    });
}
var rz = t(763432),
    rY = t(132500),
    rK = t(777480),
    rq = t(825484),
    rX = t(952270),
    rZ = t(885574),
    r$ = t(444927),
    rJ = t(895360),
    rQ = t(152472),
    r0 = t(267102),
    r1 = t(285373),
    r2 = t(721932),
    r5 = t(832163),
    r9 = t(501838),
    r3 = t(44724),
    r7 = t(808247),
    r8 = t(673843),
    r6 = t(855052),
    r4 = t(639935),
    se = t(249203),
    sn = t(600761),
    st = t(389667),
    sl = t(535089),
    si = t(128988),
    sr = t(675816),
    ss = t(107563),
    sa = t(840411),
    so = t(666810),
    sd = t(248550),
    su = t(419731),
    sc = t(451395),
    sg = t(823016),
    sm = t(100741);
function sf(e) {
    let { item: n, index: t, wishlistId: i, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, sg.r)();
    return (0, l.jsx)(sc.mG, {
        index: t,
        itemId: String(n.skuId),
        listType: String(i),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: n },
        "aria-label": eL.intl.formatToPlainString(eL.t["7SnyMA"], { positionNumber: t + 1 }),
        onReorder: r,
        onEnd: () => a(String(n.skuId)),
        className: sm.C,
        dropBeforeClassName: sm.A,
        dropAfterClassName: sm.Ze,
        draggingClassName: sm.Id,
        children: (0, l.jsx)("div", { className: sm.An, children: s }),
    });
}
let sp = i.memo(function (e) {
    let {
            item: n,
            index: t,
            profileOwner: r,
            guildId: s,
            showEditingControls: a,
            wishlistId: o,
            isDragging: d,
            onReorder: u,
            isNew: c,
            onClick: g,
        } = e,
        { registerDragHandleRef: m } = (0, sg.r)(),
        f = i.useCallback(() => {
            g(n.skuId);
        }, [g, n.skuId]),
        p = i.useMemo(
            () =>
                a
                    ? (0, l.jsx)(sc.jV, {
                          buttonRef: m(String(n.skuId)),
                          className: sm.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, m, n.skuId],
        ),
        h = i.useMemo(
            () =>
                (0, l.jsx)(sd.A, {
                    item: n,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: d,
                    dragHandle: p,
                    isNew: c,
                    onClick: f,
                }),
            [n, r, s, d, p, o, c, f],
        );
    return a
        ? (0, l.jsx)("li", {
              children: (0, l.jsx)(sf, { item: n, index: t, wishlistId: o, onReorder: u, children: h }),
          })
        : (0, l.jsx)("li", { children: h });
});
function sh(e) {
    let { items: n, profileOwner: t, guildId: r, showEditingControls: s, lastViewedAt: o } = e,
        d = V.default.getCurrentUser(),
        { defaultWishlistId: u } = (0, a.cf)([K.A], () => ({ defaultWishlistId: K.A.getFirstWishlistId(t.id) })),
        { isDragging: c } = (0, sr.V)((e) => ({ isDragging: e.isDragging() })),
        [g, m] = i.useState([]),
        f = i.useCallback((e) => {
            m((n) => (n.includes(e) ? n : [...n, e]));
        }, []),
        p = i.useCallback(
            (e, t) => {
                if (e === t || null == u || 0 === n.length || e < 0 || e >= n.length || t < 0 || t >= n.length) return;
                let l = ss.A.getWishlist(u);
                if (null == l) return;
                let i = n[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, sa.Ap)(l, n, e, t);
                r7.A.reorderWishlistItem(u, i.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [u, n],
        );
    if (null == d || null == u) return null;
    let h = (0, l.jsx)("ul", {
        className: sm.Vg,
        children: n.map((e, n) =>
            (0, l.jsx)(
                sp,
                {
                    item: e,
                    index: n,
                    profileOwner: t,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: u,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, su.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: f,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, l.jsx)(sg.B, { emptyListFallbackRef: null, children: h }) : h;
}
function sx(e) {
    let n = V.default.getCurrentUser()?.id,
        t = null != n && n !== e.profileOwner.id;
    return (0, l.jsx)(so.h, {
        isGifting: t,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, l.jsx)(sh, { ...e }),
    });
}
var sA = t(815021),
    sv = t(299679);
t(667532);
var sI = t(862772),
    sj = t(172218),
    sb = t(575593),
    sC = t(376357),
    sy = t(857250),
    sN = t(97483),
    sE = t(2157),
    sS = t(661492),
    sk = t(95817),
    sP = t(146423),
    sT = t(74135),
    sR = t(460442),
    sO = t(699976),
    sL = t(964164),
    s_ = t(880465);
let sw = sO.Z.SIZE_90;
function sM(e) {
    let {
            sku: n,
            wishlistOwner: t,
            guildId: r,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: d,
            onClick: u,
            "aria-label": c,
            wishlistId: g,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, z.NJ)(),
        p = (0, sv.Ar)(),
        h = (0, r$.A)(() => (0, rY.A)()),
        { handleVisibilityChange: x } = (0, sk.G)(h),
        A = (0, sj.K)(x, 0.5, p?.surface != null),
        v = i.useCallback(() => {
            (f({
                wishlistId: g,
                action: iX.Mq.WISHLIST_ITEM_CLICKED,
                skuId: n.id,
                productLines: new Set([n.productLine]),
            }),
                p?.surface != null &&
                    nW.default.track(Q.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: n.id,
                        wishlist_id: g,
                        wishlist_owner_id: p.wishlistOwnerId,
                        surface: p.surface,
                        position_in_section: p.positionInSection,
                        item_source: p.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: n.productLine,
                        card_id: h,
                        impression_session_id: p.impressionSessionId,
                        location_stack: p.analyticsLocations,
                    }),
                u());
        }, [u, n.id, n.productLine, f, g, p, h]);
    return (0, l.jsx)("div", {
        ref: A,
        children: (0, l.jsx)(sP.A, {
            sku: n,
            user: t,
            guildId: r,
            spec: sw,
            cardStyle: s()(sL.Nr, a),
            skuPreviewStyle: s()(sL.ev, o),
            onHoverOrFocusChange: d,
            onClick: v,
            "aria-label": c,
            children: m,
        }),
    });
}
function sD(e) {
    let {
            sku: n,
            analyticsLocations: t,
            isHoveringOrFocusing: r,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: d,
            onAddSuccess: u,
            promotion: c,
            ...g
        } = e,
        [m, f] = i.useState(!1),
        p = i.useCallback(async () => {
            if (!m) {
                f(!0);
                try {
                    (await r7.A.addSkuToWishlist(n.id, t), u?.(), a?.({ tabSection: iX.RP.WISHLIST }));
                } catch (e) {
                    ((0, sC.P)((0, sy.o)(eL.intl.string(eL.t.F8FvUy), sN.Ck.FAILURE)),
                        l8.O.announce(eL.intl.string(eL.t.F8FvUy)));
                } finally {
                    f(!1);
                }
            }
        }, [n, t, m, a, u]),
        h = i.useMemo(() => s()({ [sL.zW]: r || m }, o), [r, m, o]);
    return (0, l.jsxs)(sM, {
        "aria-label": eL.intl.formatToPlainString(eL.t.xRjJBe, { productName: (0, sS.T)(n) }),
        sku: n,
        wishlistOwner: d,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, l.jsx)(sR.oU, { isHoveringOrFocusing: r, loading: m }), !r && !m && c],
    });
}
function sG(e) {
    let { sku: n, analyticsLocations: t, ...i } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(t ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, sE.D)({ surface: "sku_purchase_badge", applicationId: n.applicationId, skuId: n.id });
    return (0, l.jsx)(sD, {
        sku: n,
        analyticsLocations: r,
        promotion: null != s ? (0, l.jsx)(sT.s, { spec: sw, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...i,
    });
}
function sU(e) {
    let { sku: n, ...t } = e,
        r = i.useMemo(() => {
            switch (n?.tenantMetadata?.collectibles?.type) {
                case sb.R.PROFILE_EFFECT:
                case sb.R.NAMEPLATE:
                case sb.R.BUNDLE:
                case sb.R.PROFILE_FRAME:
                    return;
                case sb.R.AVATAR_DECORATION:
                    return sL.ML;
                default:
                    return s()(sL.ML, sL.ZY);
            }
        }, [n?.tenantMetadata?.collectibles?.type]);
    return (0, l.jsx)(sD, { sku: n, skuPreviewStyle: r, ...t });
}
function sF(e) {
    let { sku: n, ...t } = e;
    return (0, l.jsx)(sD, { sku: n, skuPreviewStyle: s_.MO, ...t });
}
function sV(e) {
    let { sku: n, ...t } = e,
        [r, s] = i.useState(!1);
    switch (n.productLine) {
        case Q.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(sG, { sku: n, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...t });
        case Q.EZt.COLLECTIBLES:
            return (0, l.jsx)(sU, { sku: n, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...t });
        case Q.EZt.PREMIUM:
            return (0, l.jsx)(sF, { sku: n, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...t });
        default:
            return null;
    }
}
var sB = t(609965);
function sW(e) {
    let { wishlist: n, guildId: t, handleOpenUserProfileModal: i, analyticsLocations: r, className: o, items: d } = e,
        u = (0, a.bG)([V.default], () => V.default.getUser(n?.userId));
    return (0, l.jsx)("ul", {
        className: s()(sB.Vg, o),
        children: d.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, l.jsx)(
                sv.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, l.jsx)(sV, {
                        sku: a,
                        wishlistId: n?.id,
                        wishlistOwner: u,
                        guildId: t,
                        handleOpenUserProfileModal: i,
                        analyticsLocations: r,
                    }),
                },
                a.id,
            );
        }),
    });
}
var sH = t(927813);
let sz = 90 * sH.A.Millis.DAY,
    sY = 90 * sH.A.Millis.DAY;
var sK = t(469364);
function sq(e) {
    let {
            user: n,
            guildId: t,
            wishlist: r,
            hasFetchedWishlist: s = !1,
            analyticsLocations: o,
            impressionSessionId: d,
            className: u,
        } = e,
        {
            isVisible: c,
            isDismissible: g,
            markAsDismissed: m,
        } = (function (e) {
            let { userId: n, wishlist: t, hasFetchedWishlist: l } = e,
                r = (t?.items.length ?? 0) >= 3,
                [s, o] = i.useState(!1);
            !l || r || s || o(!0);
            let d = (0, a.bG)(
                    [K.A],
                    () => (null != t ? new Date(K.A.getWishlistSettings(n, t.id)?.updated_at ?? 0).valueOf() : 0),
                    [t, n],
                ),
                [u, c] = (0, eR.Wl)(
                    eb.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + sY, cooldownDurationMs: sz },
                    void 0,
                    !0,
                ),
                g = u === eb.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: l && (g || s || !r),
                isDismissible: r,
                markAsDismissed: i.useCallback(() => {
                    (o(!1), c(eO.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: n.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, l.jsx)(sX, {
              user: n,
              guildId: t,
              wishlist: r,
              analyticsLocations: o,
              impressionSessionId: d,
              className: u,
              isDismissible: g,
              markAsDismissed: m,
          })
        : null;
}
function sX(e) {
    let {
            user: n,
            guildId: t,
            wishlist: r,
            analyticsLocations: a,
            impressionSessionId: o,
            className: d,
            isDismissible: u,
            markAsDismissed: c,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: n,
                    wishlist: t,
                    numWishlistItemsToRecommend: l,
                    maxWishlistItemsToShow: r = l,
                    source: s,
                } = e,
                { recommendations: a, status: o } = (0, sI.Ul)({ userId: n, numItems: l, source: s }),
                d = i.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
                u = "success" === o && !d.has(lb.pe.TIER_2);
            return {
                items: i.useMemo(() => {
                    let e = a.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (u && e.unshift({ sku: (0, sa.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, d, u, r]),
                status: o,
            };
        })({
            userId: n.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: D.B5.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, l.jsxs)("div", {
              className: s()(sK.kL, d),
              children: [
                  (0, l.jsxs)("div", {
                      className: sK.wx,
                      children: [
                          (0, l.jsx)(eU.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: eL.intl.string(eL.t["+GB8Kt"]),
                          }),
                          u &&
                              (0, l.jsx)("div", {
                                  className: sK.b,
                                  children: (0, l.jsx)(sA.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, l.jsx)(sv.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: n.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, l.jsx)(sW, {
                          items: g,
                          guildId: t,
                          wishlist: r,
                          className: s()(sK.Vg, sK.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var sZ = t(477782),
    s$ = t(980707),
    sJ = t(431194);
function sQ(e) {
    let {
            title: n,
            variant: t = "secondary",
            handleOpenCollectiblesShop: r,
            handleOpenGameShop: s,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        d = i.useRef(null),
        [u, c] = i.useState(!1),
        g = (function (e) {
            let { applications: n, handleOpenGameShop: t } = e;
            return i.useMemo(
                () =>
                    n.filter(es.Vq).map((e) => {
                        let n = nH.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eL.intl.formatToPlainString(eL.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != n ? () => (0, l.jsx)("img", { className: sJ.I, src: n, alt: "" }) : nS.U,
                            leadingAccessory: null != n ? { type: "image", src: n } : { type: "icon", icon: nS.U },
                            action: () => t?.(e.id),
                        };
                    }),
                [n, t],
            );
        })({ applications: (0, ei.A)(o), handleOpenGameShop: s }),
        m = i.useMemo(
            () =>
                (0, l.jsxs)(sZ.rX, {
                    children: [
                        null != r &&
                            (0, l.jsx)(sZ.Dr, {
                                id: "browse-collectibles-shop",
                                label: eL.intl.string(eL.t["5upuqx"]),
                                iconLeft: nS.U,
                                leadingAccessory: { type: "icon", icon: nS.U },
                                action: r,
                            }),
                        null != a &&
                            (0, l.jsx)(sZ.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eL.intl.string(eL.t.lG6a5x),
                                iconLeft: ne.t,
                                leadingAccessory: { type: "icon", icon: ne.t },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: n, label: t, iconLeft: i, leadingAccessory: r, action: s } = e;
                                return (0, l.jsx)(
                                    sZ.Dr,
                                    { id: n, label: t, iconLeft: i, leadingAccessory: r, action: s },
                                    n,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, l.jsx)(to.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(s$.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: n,
                "aria-label": eL.intl.string(eL.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, l.jsx)(n8.$, {
                buttonRef: d,
                variant: t,
                size: "sm",
                icon: u ? n9.P : lB.a,
                iconPosition: "end",
                text: n,
                ...e,
            }),
    });
}
var s0 = t(365199);
let s1 = rd.A.getArticleURL(Q.MVz.CUSTOM_PROFILES_WISHLIST);
function s2(e) {
    let { isOwner: n, isWishlistPublic: t, onToggleVisibility: r } = e,
        s = i.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = i.useMemo(
            () =>
                n
                    ? (0, l.jsxs)(sZ.rX, {
                          children: [
                              (0, l.jsx)(sZ.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eL.intl.string(eL.t.b2nFyA),
                                  subtext: eL.intl.string(eL.t.dw58pE),
                                  checked: t,
                                  action: r,
                              }),
                              (0, l.jsx)(sZ.bX, {}),
                              (0, l.jsx)(sZ.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eL.intl.string(eL.t.hvVgAZ),
                                  icon: nD.I,
                                  trailingIndicator: { type: "icon", icon: nD.I },
                                  action: () => window.open(s1),
                              }),
                          ],
                      })
                    : null,
            [n, t, r],
        );
    return null == o
        ? null
        : (0, l.jsx)(b.f5, {
              value: a,
              children: (0, l.jsx)(to.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, l.jsx)(s$.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: n,
                          "aria-label": eL.intl.string(eL.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, l.jsx)(nP.q3, {
                          buttonRef: s,
                          icon: s0.MoreHorizontalIcon,
                          tooltipText: eL.intl.string(eL.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var s5 = t(526725);
function s9(e) {
    let { socialLayerStorefrontApplicationIds: n, handleOpenShop: t, handleOpenGameShop: i } = e;
    return n.length > 0
        ? (0, l.jsx)(sQ, {
              title: eL.intl.string(eL.t["i/yzHs"]),
              handleOpenCollectiblesShop: t,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationIds: n,
          })
        : (0, l.jsx)(n8.$, {
              variant: "secondary",
              size: "sm",
              icon: nS.U,
              text: eL.intl.string(eL.t["i/yzHs"]),
              onClick: t,
          });
}
function s3(e) {
    let {
        showEditingControls: n,
        socialLayerStorefrontApplicationIds: t,
        isWishlistPublic: i,
        handleOpenShop: r,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, l.jsxs)("div", {
        className: s5.$s,
        children: [
            n &&
                (t.length > 0 || null != a
                    ? (0, l.jsx)(sQ, {
                          title: eL.intl.string(eL.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: t.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: t,
                      })
                    : (0, l.jsx)(n8.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: nG.j,
                          text: eL.intl.string(eL.t.SDUwM0),
                          onClick: r,
                      })),
            (0, l.jsx)(s2, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: o }),
        ],
    });
}
function s7(e) {
    let { application: n, handleOpenGameShop: t, handleOpenGameShopMouseDown: r } = e,
        s = i.useCallback(() => {
            t(n.id);
        }, [n, t]),
        a = i.useCallback(() => {
            r(n.id);
        }, [n, r]);
    return (0, l.jsx)(n8.$, {
        variant: "primary",
        size: "sm",
        icon: nS.U,
        text: eL.intl.formatToPlainString(eL.t["HDT/rg"], { applicationName: n.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function s8(e) {
    let {
            showEditingControls: n,
            socialLayerStorefrontApplicationIds: t,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, r0.Us)() === Q.BRT.OVERLAY,
        d = (0, ei.A)(t),
        u = i.useMemo(() => {
            if (o || 0 === t.length) return null;
            let e = d.reduce((e, n) => (null == n || (e[n.id] = n), e), {});
            if (1 === t.length) {
                let n = e[t[0]];
                return null == n
                    ? null
                    : (0, l.jsx)(s7, { application: n, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, l.jsx)(sQ, {
                title: eL.intl.string(eL.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: t,
            });
        }, [o, t, s, d, a]);
    return (0, l.jsxs)("div", {
        className: s5.y7,
        children: [
            (0, l.jsxs)("div", {
                className: s5.q6,
                children: [
                    (0, l.jsx)(n3.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: eL.intl.string(eL.t.HGnLLT),
                    }),
                    (0, l.jsx)(eU.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: eL.intl.string(eL.t["/X1ny6"]),
                    }),
                ],
            }),
            (n || null != u) &&
                (0, l.jsxs)(rq.e, {
                    size: "sm",
                    children: [
                        n &&
                            (0, l.jsx)(n8.$, {
                                variant: "primary",
                                size: "sm",
                                icon: nS.U,
                                text: eL.intl.string(eL.t.ZbS4QB),
                                onClick: r,
                            }),
                        u,
                    ],
                }),
        ],
    });
}
function s6(e) {
    let {
            isOwner: n,
            showEditingControls: t,
            profileOwner: r,
            wishlist: s,
            socialLayerStorefrontApplicationIds: o,
            handleOpenShop: d,
            handleOpenGameShop: u,
            handleAddNitroToWishlist: c,
        } = e,
        g = s.id,
        m = (0, a.bG)([K.A], () => K.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: f } = (0, z.NJ)(),
        p = !1 === r.nsfwAllowed,
        [h, x] = i.useState(!0);
    i.useEffect(() => {
        m?.visibility != null && x(m.visibility === rK.a.PUBLIC);
    }, [m?.visibility]);
    let A = i.useCallback(
            (e) => {
                let { wishlistId: n, action: t, productLines: l } = e;
                null != n && f({ wishlistId: n, action: t, productLines: l });
            },
            [f],
        ),
        v = (0, sl.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, r6.y9)(s) : null }),
        I = i.useCallback(() => {
            if (null == g) return;
            let e = h ? rK.a.PRIVATE : rK.a.PUBLIC;
            (x(!h),
                r7.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: h ? iX.Mq.WISHLIST_TOGGLE_PRIVATE : iX.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, r6.y9)(s) : void 0,
                }));
        }, [g, h, f, s]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !h &&
                (0, l.jsxs)("div", {
                    className: s5.lm,
                    children: [
                        (0, l.jsx)(rX.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, l.jsx)(eU.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eL.intl.string(eL.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, l.jsxs)("div", {
                    className: s5.lm,
                    children: [
                        (0, l.jsx)(rZ.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, l.jsx)(eU.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eL.intl.string(eL.t.d78ChW),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                ref: v,
                className: s5.U1,
                children: [
                    (0, l.jsx)(eU.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: eL.intl.format(eL.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    n
                        ? (0, l.jsx)(s3, {
                              showEditingControls: t,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: I,
                          })
                        : (0, l.jsx)(s9, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function s4(e) {
    let { profileOwner: n, guildId: t } = e,
        r = i.useRef(null);
    (0, sn.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: d } = (0, a.cf)([K.A, V.default], () => ({
            wishlistId: K.A.getFirstWishlistId(n.id),
            currentUser: V.default.getCurrentUser(),
        })),
        { analyticsLocations: u } = (0, b.Ay)(),
        c = (0, r$.A)(() => ((0, rn.aS)()?.enabled === !0 ? (se.A.getEntry(n.id)?.lastViewedAt ?? null) : null));
    i.useEffect(() => {
        (0, r4.Z)(n.id);
    }, [n.id]);
    let g = (0, st.A)(n.id),
        { wishlist: m, wasFetched: f, error: p } = (0, D.fw)({ wishlistId: o, userId: n.id }),
        [h, x] = i.useState(!1);
    (f && !h && x(!0), (0, r8.A)(m));
    let A = (function (e) {
            let { wishlist: n, profileOwner: t, currentUser: l } = e,
                r = t.id === l?.id,
                s = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
                o = (0, a.bG)([r5.A], () => r5.A.getDetectableIdsToApplicationIds()),
                d = i.useMemo(() => {
                    let e = [];
                    for (let t of n?.items ?? [])
                        (0, r2.$)(t) && null != o[t.sku.applicationId] && e.push(t.sku.applicationId);
                    return e;
                }, [n, o]),
                u = (0, r9.w)({ userIds: s }),
                c = (0, r9.mn)({ userIds: s }),
                g = (0, r9.tR)(s),
                m = (0, r9.rY)(),
                f = (0, r9.qx)(),
                p = (0, r9.px)();
            return i.useMemo(
                () => (0, rh.uniq)([...d, ...u, ...c, ...g, ...(r ? [...m, ...f, ...p] : [])].filter(es.Vq)),
                [d, u, c, g, m, f, p, r],
            );
        })({ wishlist: m, profileOwner: n, currentUser: d }),
        v = (0, r$.A)(() => (0, rY.A)()),
        I = i.useCallback(() => {
            (0, nk.Cz)({ analyticsLocations: u, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [u]),
        C = i.useCallback((e) => {
            (0, r3.G)({ applicationId: e });
        }, []),
        y = i.useCallback((e) => {
            ((0, lv.closeUserProfileModal)(), (0, r3.default)({ applicationId: e }));
        }, []),
        { handleToggle: N } = (0, rQ.c)({
            userId: d?.id,
            skuId: lb.pe.TIER_2,
            nuxGraphic: r1.g,
            onNuxShow: rJ.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == d || null != p) return null;
    let E = null == m || 0 === m.items.length;
    return (0, l.jsxs)(rO.K, {
        scrollerRef: r,
        className: s()({ [s5.XG]: !E }),
        fade: !0,
        children: [
            E
                ? (0, l.jsx)(s8, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: I,
                      handleOpenGameShop: y,
                      handleOpenGameShopMouseDown: C,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(si.A, { scrollerRef: r }),
                          (0, l.jsx)(s6, {
                              isOwner: d?.id === n.id,
                              showEditingControls: g,
                              profileOwner: n,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: I,
                              handleOpenGameShop: y,
                              handleAddNitroToWishlist: (0, r6.C3)(m, lb.pe.TIER_2) ? void 0 : N,
                          }),
                          (0, l.jsx)(sx, {
                              items: m.items,
                              profileOwner: n,
                              guildId: t,
                              showEditingControls: g,
                              lastViewedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, l.jsx)(sq, {
                    user: n,
                    guildId: t,
                    wishlist: m,
                    hasFetchedWishlist: h,
                    analyticsLocations: u,
                    impressionSessionId: v,
                    className: E ? s5._E : s5.HZ,
                }),
        ],
    });
}
var ae = t(131058);
function an(e) {
    let { user: n, currentUser: t, section: i, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return i === iX.RP.ACTIVITY
        ? (0, l.jsx)(r_, { user: n, currentUser: t, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : i === iX.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(rF, { user: n, guildId: s, channelId: a, onClose: o })
          : i === iX.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(rH, { user: n, onClose: o })
            : i === iX.RP.WIDGETS
              ? (0, l.jsx)(rz.A, { user: n, guildId: s, channelId: a })
              : i === iX.RP.WISHLIST
                ? (0, l.jsx)(s4, { profileOwner: n, guildId: s })
                : null;
}
function at(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: r,
            guildId: s,
            channelId: a,
            items: o,
            initialSection: d,
            onClose: u,
        } = e,
        { trackUserProfileAction: g } = (0, z.NJ)(),
        { shouldLogExposure: p } = (0, rt.A)(n);
    (0, rl.A)(n);
    let h = i.useRef(!1),
        x = o.some((e) => !0 === e.showNewContentDot);
    i.useEffect(() => {
        x && !h.current && ((h.current = !0), g({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [x, g]);
    let [A, v] = i.useState(() => (o.find((e) => e.section === d) ?? o[0]).section),
        I = o.find((e) => e.section === A) ?? o[0];
    return (
        I.section !== A && v(I.section),
        (0, l.jsxs)("div", {
            className: ae.kL,
            children: [
                p && (0, l.jsx)(rn.kM, { location: "UserProfileModalV2Tabs" }),
                (0, l.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: ae.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, l.jsx)(re.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: I.section,
                        onItemSelect: function (e) {
                            i6.A.hasUnsavedChanges() && I.section === iX.RP.WIDGETS
                                ? (0, lM.VQ)()
                                : (g({ action: "PRESS_SECTION", section: e }), v(e));
                        },
                        children: o.map((e) =>
                            (0, l.jsxs)(
                                re.V.Item,
                                {
                                    className: ae.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eL.intl.formatToPlainString(eL.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, l.jsx)(ri.A, { className: ae.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, l.jsx)(re.V.Panel, {
                    id: I.section,
                    "aria-label": I.text,
                    className: ae.NM,
                    children: (0, l.jsx)(f.F, {
                        component: (0, l.jsx)(m.A, { children: (0, l.jsx)(f.H, { children: I.text }) }),
                        children: (0, l.jsx)(an, {
                            user: n,
                            currentUser: t,
                            displayProfile: r,
                            guildId: s,
                            channelId: a,
                            section: I.section,
                            onClose: u,
                        }),
                    }),
                }),
            ],
        })
    );
}
var al = t(933832),
    ai = t(972213),
    ar = t(384377);
let as = {
        [iX.jM.WIDGET_ADDED]: {
            message: eL.intl.string(eL.t.fFP1Uy),
            icon: (0, l.jsx)(al.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [iX.jM.WIDGET_REMOVED]: {
            message: eL.intl.string(eL.t.zzsK7h),
            icon: (0, l.jsx)(al.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [iX.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eL.intl.string(eL.t["84MExs"]),
            icon: (0, l.jsx)(ai.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: sN.Ck.FAILURE,
        },
        [iX.jM.SOMETHING_WENT_WRONG]: {
            message: eL.intl.string(eL.t.F8FvUy),
            icon: (0, l.jsx)(ai.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: sN.Ck.FAILURE,
        },
    },
    aa = (e) => {
        let { className: n } = e,
            t = (0, ar.fu)(),
            r = (0, a.bG)([nu.Ay], () => nu.Ay.useReducedMotion),
            [s, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (o(!0), c(as[t]), l8.O.announce(as[t].message)) : o(!1);
        }, [t]);
        let g = (0, u.p)(
            s,
            {
                from: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(-12px)", opacity: 0 },
                config: { mass: 1, tension: 200, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
        return (
            i.useEffect(() => () => (0, ar.XA)(null), []),
            i.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, ar.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, l.jsx)(l.Fragment, {
                children: g(
                    (e, t) =>
                        t &&
                        null !== d &&
                        (0, l.jsx)(iy.animated.div, { className: n, style: e, children: (0, l.jsx)(i1, { ...d }) }),
                ),
            })
        );
    };
var ao = t(297413),
    ad = t(465829),
    au = t(826673),
    ac = t(609425),
    ag = t(73392),
    am = t(576705),
    af = t(997394);
function ap(e) {
    return null == e || "" === e ? void 0 : e;
}
function ah(e) {
    let n,
        t,
        r,
        o,
        d,
        u,
        c,
        g,
        m,
        f,
        { user: p, displayProfile: x } = e,
        { analyticsLocations: A } = (0, b.Ay)(),
        v = x?.guildId != null,
        I = x?.guildId ?? void 0,
        j = H.Ay.canUsePremiumProfileCustomization(p),
        C = (0, tn.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: y, permissionsLoaded: N } = (0, a.cf)([am.A, G.A], () => {
            if (!v || null == I) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = G.A.getGuild(I);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: am.A.can(Q.xBc.CHANGE_NICKNAME, e) || am.A.can(Q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        E = v && !y && N,
        {
            value: S,
            previewValue: k,
            fallbackDisplayName: P,
            onCommit: T,
        } = ((t = null != (n = x?.guildId ?? null)),
        (r = (0, a.bG)([V.default], () => V.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([ef.Ay], () => (null != n ? (ef.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (d = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingNickname)),
        (m = (g = void 0 !== (c = t ? u : d) ? c : t ? o : r) ?? ""),
        (f = t ? (ap(r) ?? p.username) : p.username),
        {
            value: m,
            previewValue: ap(g) ?? f,
            fallbackDisplayName: f,
            onCommit: i.useCallback(
                (e) => {
                    t ? (0, na.p)({ nickname: e.trim(), guildId: n ?? void 0 }) : (0, na.p)({ globalName: e.trim() });
                },
                [t, n],
            ),
        }),
        R = (0, a.bG)([ep.A], () => ep.A.getErrors(I ?? null)),
        O = (0, ns.EC)(I ?? null),
        L = v ? R.nick?.[0] : R.global_name?.[0],
        _ = O?.nick?.[0],
        w = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(I).pendingDisplayNameStyles),
        M = (0, ac.A)({ userId: p.id, guildId: I, pendingDisplayNameStyles: w }),
        D = (0, ag.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        U = eL.intl.string(v ? eL.t.mq6Cg9 : eL.t.XuZU7A),
        F = v ? eL.intl.string(eL.t.YcDKr8) : p.username,
        B = i.useRef(null),
        W = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    C &&
                        (0, au.Dr)(eb.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eO.i.INDIRECT_ACTION,
                        }),
                    (0, tb.L)({ analyticsLocations: A, guildId: I, stackingBehavior: "stack", returnRef: B }));
            },
            [A, I, C],
        ),
        z = {
            icon: n0.V,
            tooltip: eL.intl.string(eL.t.lqKKI2),
            "aria-label": eL.intl.string(eL.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        Y = E
            ? (0, l.jsx)("span", {
                  className: af.Cs,
                  children: (0, l.jsx)(n5.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, l.jsx)("div", {
        className: nc.kL,
        children: (0, l.jsx)(eU.E, {
            variant: ad.gU.lg,
            color: "none",
            className: D,
            children: (0, l.jsx)(iH.w, {
                value: S,
                onCommit: T,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, n) => {
                    let { focused: t } = n;
                    return (0, l.jsx)(ad.c$, {
                        user: p,
                        guildId: I,
                        displayName: t ? (ap(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: w,
                        className: s()(af.dt, { [af.jW]: t && "" === e }),
                        displayNameTrailing: Y,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: Q.zzC,
                textVariant: "inherit",
                trailing: y && j ? z : void 0,
                error: L,
                helperText: E ? eL.intl.string(eL.t.gzjxQi) : _,
                disabled: !y,
            }),
        }),
    });
}
var ax = t(628072);
function aA(e) {
    let n,
        t,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((n = u?.guildId ?? null),
        (t = u?.guildId != null),
        (r = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(n).pendingPronouns)),
        (o = t ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, na.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = u?.guildId != null,
        p = null != g && g.length > 0,
        h = eL.intl.string(f ? eL.t.AXiE0i : eL.t["76Aqhl"]);
    return (0, l.jsx)("div", {
        className: s()(nc.kL, nc.oE, ax.k),
        children: (0, l.jsx)(iH.w, {
            value: c,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            fullWidth: !1,
            paddingBlock: "md",
            paddingInline: "sm",
            size: "sm",
            scrollIntoViewOnFocus: !0,
            preview: p ? (0, l.jsx)(ad.n2, { pronouns: g }) : null,
            label: eL.intl.string(eL.t["rniRE+"]),
            placeholder: h,
            maxLength: Q.VE5,
            spellCheck: !1,
        }),
    });
}
var av = t(145497),
    aI = t(685073),
    aj = t(318785),
    ab = t(534400),
    aC = t(436921),
    ay = t(743981),
    aN = t(295930),
    aE = t(594615);
let aS = "no-server-tag";
function ak(e) {
    let { buttonRef: n, guildId: t, guildTag: i, guildBadge: r, ...a } = e,
        o = (0, aC.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == t;
    return (0, l.jsx)(eQ.D, {
        innerRef: n,
        className: s()(o ? aN.qJ : aN.L5, { [aN.wK]: d }),
        ...a,
        children: (0, l.jsxs)(eU.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: aN.W3,
            tag: "span",
            children: [
                d
                    ? eL.intl.string(eL.t.Pdd1nd)
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(
                                  ab.Z9,
                                  {
                                      src: (0, aI.gC)(t, r, ay.Sl.SIZE_14),
                                      size: ay.Sl.SIZE_14,
                                      className: aN.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, aI.gC)(t, r, ay.Sl.SIZE_14) ?? t,
                              ),
                              i,
                          ],
                      }),
                (0, l.jsx)(lB.a, { size: "xs", color: "currentColor", className: aN.u4 }),
            ],
        }),
    });
}
function aP() {
    let e = (0, aj.b)(),
        n = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        t = (0, a.cf)([V.default], () => {
            let e = V.default.getCurrentUser();
            return (0, aI.Zo)(e?.primaryGuild);
        }),
        r = t.guildId ?? null,
        s = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(null).pendingPrimaryGuildId),
        o = void 0 !== s ? s : r,
        d = null != o ? (n.get(o) ?? null) : null,
        u = null == d && o === r,
        c = d?.profile?.tag ?? (u ? (t.tag ?? null) : null),
        g = d?.profile?.badge ?? (u ? t.badge : void 0),
        m = i.useCallback(
            (e) =>
                e.id === aS
                    ? (0, l.jsx)("div", {
                          className: aE.uN,
                          children: (0, l.jsx)(eU.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: aN.ve,
                              children: e.label,
                          }),
                      })
                    : (0, l.jsx)(l$.c, { ...e }),
            [],
        ),
        f = i.useMemo(
            () => [
                { id: aS, label: eL.intl.string(eL.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let n = e.profile?.tag;
                    if (null == n) return [];
                    let t = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, l.jsx)(av.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, l.jsx)(ab.o9, { guildId: e.id, guildTag: n, guildBadge: t }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        p = i.useCallback((e) => {
            (0, na.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length && null == r
        ? null
        : (0, l.jsx)(lQ, {
              options: f,
              value: o,
              onSelectionChange: p,
              label: eL.intl.string(eL.t.Pdd1nd),
              listboxClassName: aN.yt,
              renderListItem: m,
              children: (e) => {
                  let { buttonRef: n, selectButtonProps: t } = e;
                  return (0, l.jsx)(ak, { buttonRef: n, guildId: o, guildTag: c, guildBadge: g, ...t });
              },
          });
}
var aT = t(956495);
function aR(e) {
    let { displayProfile: n, nickname: t, displayNameStylesOverride: i, ...r } = e;
    return (0, l.jsx)(ad.Ay, {
        ...r,
        guildId: n?.guildId ?? void 0,
        displayName: t,
        displayNameSize: "lg",
        pronouns: n?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function aO(e) {
    let n = (0, a.bG)([ep.A], () => ep.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, l.jsx)(aR, { ...e, displayNameStylesOverride: n });
}
function aL(e) {
    let { user: n, displayProfile: t, trailing: i } = e,
        r = n.isProvisional
            ? null
            : (0, l.jsx)(ao.A, {
                  user: n,
                  forceUsername: !0,
                  className: aT.a1,
                  usernameClass: aT.eb,
                  discriminatorClass: aT.sw,
                  hideBotTag: !0,
              });
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(ah, { displayProfile: t, user: n }),
            (0, l.jsxs)("div", {
                className: s()(aT.AK, aT.j6),
                children: [r, (0, l.jsx)(ad.Ce, {}), (0, l.jsx)(aA, { displayProfile: t }), (0, l.jsx)(aP, {}), i],
            }),
        ],
    });
}
function a_(e) {
    let { editingMode: n, ...t } = e;
    switch (n) {
        case "read-only":
            return (0, l.jsx)(aR, { ...t });
        case "try-it-out":
            return (0, l.jsx)(aO, { ...t });
        case "edit":
            return (0, l.jsx)(aL, { ...t });
        default:
            return (0, es.xb)(n);
    }
}
var aw = t(97808),
    aM = t(22231),
    aD = t(601255),
    aG = t(562819),
    aU = t(19575),
    aF = t(339984),
    aV = t(329801),
    aB = t(884362);
let aW = aU.Ay.getEnableHardwareAcceleration() ? aw.Js : aw.eu;
function aH(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function az(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(s$.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.YAgq3W),
        children: (0, l.jsx)(sZ.rX, { children: t }),
    });
}
function aY(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: r, eventHandlers: o } = (0, ew.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: n, guildId: t, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, b.Ay)(),
                u = null != t,
                c = (0, a.bG)([ef.Ay], () => (null != t ? ef.Ay.getMember(t, n.id) : null)),
                g = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(t ?? void 0).pendingAvatar),
                m = u ? c?.avatar : n.avatar,
                f = (0, eg.z5)(g, m),
                p = u && null != n.avatar,
                h = H.Ay.canUsePremiumProfileCustomization(n),
                x = h || null == t,
                A = h || null == t,
                v = (0, a.bG)([G.A], () => (null != t ? G.A.getGuild(t) : null)),
                I = (0, eg.a4)({ user: n }),
                j = (0, eg.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eg.CP)(t ?? void 0),
                y = void 0 !== C,
                N = null != (0, aD.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != I,
                S = i.useCallback(() => {
                    (r(),
                        aH(() =>
                            (0, tl.XD)({
                                uploadType: aF.HL.AVATAR,
                                analyticsSource: o,
                                guildId: t ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, t, s]),
                k = i.useCallback(() => {
                    (r(),
                        aH(() =>
                            (0, aG.L)({
                                analyticsLocations: d,
                                guild: v ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, d, v, s]),
                P = i.useCallback(() => {
                    (r(),
                        (0, tl.rM)(null, m, (e) => (0, na.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, eg.WU)(p ? "reset" : "remove"));
                }, [r, t, m, p]),
                T = i.useCallback(() => {
                    (r(), (0, na.p)({ guildId: t ?? void 0, avatarDecoration: null }));
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, l.jsx)(
                                sZ.Dr,
                                { id: "change-avatar", label: eL.intl.string(eL.t["4OynCD"]), action: S },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, l.jsx)(
                                sZ.Dr,
                                { id: "change-decoration", label: eL.intl.string(eL.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            p
                                ? (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.twB3fz),
                                          action: P,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        N &&
                        e.push(
                            E
                                ? (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["2u5yu0"]),
                                          action: T,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["9rx5GO"]),
                                          action: T,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, A, E, f, N, S, k, P, T]);
        })({ user: n, guildId: t, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, l.jsx)(ew.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: s()(aV.my, aV.vk, aB.kL, { [aB.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, l.jsx)(aW, { ...r, imageClassName: s()(aV.Lw, aB.HU) }),
                  (0, l.jsx)(to.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: to.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, l.jsx)(az, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: c,
                              className: aB.r9,
                              children: (0, l.jsx)(n1.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: aM.PencilIcon,
                                  "aria-label": eL.intl.string(eL.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var aK = t(514905);
function aq(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(s$.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eL.intl.string(eL.t.FzU73A),
        children: (0, l.jsx)(sZ.rX, { children: t }),
    });
}
function aX(e) {
    let { user: n, guildId: t } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: n, guildId: t, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, b.Ay)(),
                u = (0, eg.N2)({ user: n, guildId: t ?? void 0 }),
                c = (0, eg.Xf)({ user: n, guildId: t ?? void 0 }),
                g = (0, eg.Xf)({ user: n, guildId: void 0 }),
                m = H.Ay.canUsePremiumProfileCustomization(n),
                f = null == t,
                p = f || m,
                h = f || m,
                x = null != t,
                {
                    pendingBanner: A,
                    pendingProfileEffect: v,
                    pendingProfileFrame: I,
                } = (0, a.bG)([ep.A], () => ep.A.getPendingChanges(t ?? void 0)),
                j = (0, a.bG)([K.A], () =>
                    null != t ? K.A.getGuildMemberProfile(n.id, t)?.banner : K.A.getUserProfile(n.id)?.banner,
                ),
                C = (0, a.bG)([V.default], () => V.default.getCurrentUser()?.banner != null),
                y = (0, a.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileEffect != null),
                N = (0, a.bG)([K.A], () => K.A.getUserProfile(n.id)?.profileFrame != null),
                S = (0, eg.Ac)(A, j),
                k = x && C,
                P = x && y,
                T = x && N,
                R = void 0 === v ? null != u : null != v,
                O = void 0 === I ? null != c : null != I,
                L = (0, eg.lw)({
                    pendingValue: I,
                    userValue: g,
                    guildValue: null != t ? c : void 0,
                    guildId: t ?? void 0,
                }),
                _ = (0, E.A)(L?.skuId),
                w = i.useCallback(() => {
                    (r(),
                        (0, tl.XD)({
                            uploadType: aF.HL.BANNER,
                            analyticsSource: o,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, t, s]),
                M = i.useCallback(() => {
                    (r(),
                        (0, tB.W)({
                            analyticsLocations: d,
                            guild: null != t ? (G.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, t, u, s]),
                D = i.useCallback(() => {
                    (r(), (0, tl.rM)(null, j, (e) => (0, na.p)({ guildId: t ?? void 0, banner: e })));
                }, [r, t, j]),
                U = i.useCallback(() => {
                    (r(), (0, na.p)({ guildId: t ?? void 0, profileEffect: null }));
                }, [r, t]),
                F = i.useCallback(() => {
                    (r(),
                        (0, t9.w)({
                            analyticsLocations: d,
                            guild: null != t ? (G.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedProfileFrame: _,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, t, _, s]),
                B = i.useCallback(() => {
                    (r(), (0, na.p)({ guildId: t ?? void 0, profileFrame: null }));
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, l.jsx)(
                                sZ.Dr,
                                { id: "change-banner", label: eL.intl.string(eL.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, l.jsx)(
                                sZ.Dr,
                                { id: "change-effect", label: eL.intl.string(eL.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, l.jsx)(
                                sZ.Dr,
                                { id: "change-frame", label: eL.intl.string(eL.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    m &&
                        S &&
                        e.push(
                            k
                                ? (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.jHlJNS),
                                          action: D,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.tT9n7D),
                                          action: D,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            P
                                ? (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            T
                                ? (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eL.intl.string(eL.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, l.jsx)(
                                      sZ.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eL.intl.string(eL.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, p, h, P, T, S, R, O, w, M, F, D, U, B]);
        })({ user: n, guildId: t, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, l.jsx)(eD.A, { ...e })
        : (0, l.jsxs)("div", {
              className: s()(aK.kL, { [aK.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(eD.A, { ...e, className: aK.Pr }),
                  (0, l.jsx)(to.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: to.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, l.jsx)(aq, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: d,
                              className: aK.r9,
                              children: (0, l.jsx)(n1.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: aM.PencilIcon,
                                  "aria-label": eL.intl.string(eL.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var aZ = t(415916),
    a$ = t(419341),
    aJ = t(732188),
    aQ = t(667049),
    a0 = t(837531),
    a1 = t(186272),
    a2 = t(447538);
let a5 = (e) => e * (2 - e),
    a9 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function a3(e) {
    let { type: n, anchor: t } = e;
    return "staple" !== n || "bottom" !== t;
}
function a7(e) {
    let { displayProfile: n, pendingBanner: t } = e;
    if ((0, en.Nx)()) return null;
    let i = n?.getPreviewBanner(t, !1, 1024);
    return null == i
        ? null
        : (0, l.jsx)("div", { className: a2.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function a8(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: r } = e,
        s = void 0 !== t ? t : n?.profileEffect,
        a = i.useSyncExternalStore(
            (e) => (tz.add(e), () => tz.delete(e)),
            () => tY,
        );
    return null == s ? null : (0, l.jsx)(y.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function a6(e) {
    var n;
    let t,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
            originGuildId: m,
            channelId: f,
            displayProfile: p,
            nickname: h,
            hasEntered: x,
            customStatusPrompt: A,
            onClose: I,
            avatarDecorationOverride: j,
            avatarOverride: b,
            bannerOverride: y,
            accentColorOverride: N,
            profileEffectOverride: E,
            profileFrame: S,
            fadeInProfileFrame: P,
            editingMode: T,
            isLoading: w = !1,
        } = e,
        D = o.id === d.id,
        G = "edit" === T,
        V = i.useRef(null),
        B = i.useRef(null),
        H = i.useRef(null);
    i.useEffect(() => {
        if (D) return () => C.A.setState({ isOpen: !1 });
    }, [D]);
    let { isHoveringOrFocusing: z } = (0, R.A)(V),
        [Y, K] = i.useState(),
        q = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? K("compact-xs") : n <= 380 ? K("compact-sm") : K(void 0);
        }, []);
    (0, v.g)(V, q, [], { fireOnMount: !0 });
    let X = null != Y ? a9[Y] : void 0,
        ee = i.useMemo(() => A ?? (0, O.A)(), [A]),
        { relationshipType: en, originApplicationId: eo } = (0, a.cf)([U.A], () => ({
            relationshipType: U.A.getRelationshipType(o.id),
            originApplicationId: U.A.getOriginApplicationId(o.id),
        })),
        ed =
            ((n = o.id),
            (t = (0, Z.bG)([J.default], () => J.default.locale)),
            (r = (0, Z.bG)([U.A], () => (U.A.getRelationshipType(n) === Q.eA$.FRIEND ? U.A.getSince(n) : null), [n])),
            (0, $.An)(r, t)),
        eu = (0, a.bG)([F.A], () => F.A.hidePersonalInformation),
        ec = (0, _.q)({ userId: o.id }),
        eg = (0, L.fi)(o.id),
        { appIdentities: em, connections: ef } = (function (e) {
            let { filteredAppIdentities: n } = (0, er.A)(e),
                t = (0, ea.A)(e),
                l = i.useMemo(() => new Set(n?.map((e) => e.application_id) ?? []), [n]),
                r = (0, ei.A)([...l]).filter(es.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        n
                            .map((e) => ({ identity: e, application: r.find((n) => n.id === e.application_id) }))
                            .filter((e) => {
                                let { application: n } = e;
                                return null != n;
                            }),
                    [n, r],
                ),
                connections: i.useMemo(
                    () =>
                        t.filter((e) => {
                            let n = el.A.get(e.type);
                            return (
                                !n?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !l.has(n.migrationData.replacedBy)
                            );
                        }),
                    [t, l],
                ),
            };
        })(o.id),
        ep = (0, et.A)(o.id),
        eA = ef.length > 0 || em.length > 0,
        ev = ep.length > 0,
        eI = G ? aX : eD.A,
        ej = p?.guildId ?? u,
        eb = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: X?.avatarSize ?? ex.T[eh.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: b,
        },
        eC = i.useCallback(() => {
            (0, e$.A)({ user: o, guildId: ej, alt: h });
        }, [h, ej, o]);
    return (0, l.jsxs)("main", {
        className: s()(a2.profile, null != Y && a2[Y]),
        ref: V,
        "aria-busy": w,
        children: [
            (0, l.jsxs)("div", {
                className: a2.profileHeader,
                children: [
                    (0, l.jsx)("div", {
                        className: a2.profileHeaderBannerContainer,
                        children: (0, l.jsx)(eI, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: eh.d.MODAL_V2,
                            specOverrides: X,
                            pendingBanner: y,
                            pendingAccentColor: N,
                        }),
                    }),
                    G
                        ? (0, l.jsx)(aY, { ...eb })
                        : (0, l.jsx)(ew.A, {
                              ...eb,
                              onOpenAvatar: "read-only" === T ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === T && null == b ? lO.$T : void 0,
                          }),
                    (0, l.jsx)(eX.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: eh.d.MODAL_V2,
                        hasEntered: x,
                        prompt: D ? ee : null,
                    }),
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                fade: !0,
                className: a2.profileBody,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(a_, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, l.jsx)(eM.A, {
                                    displayProfile: p,
                                    themeType: eh.d.MODAL_V2,
                                    onClose: I,
                                    showPendingBadgeEdits: D,
                                    popoutAnchorRef: x ? B : void 0,
                                    containerRef: H,
                                }),
                                onClose: I,
                                editingMode: T,
                            }),
                            (0, l.jsx)("div", { ref: B }),
                            D && x && (0, l.jsx)(e_, { targetElementRef: H }),
                        ],
                    }),
                    en === Q.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(eq.A.Overlay, {
                            className: a2.profileOverlay,
                            children: (0, l.jsx)(eB.A, {
                                user: o,
                                applicationId: eo,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: a2.profileBanner,
                            }),
                        }),
                    eg.map((e) => {
                        let { applicationId: n } = e;
                        return (0, l.jsx)(
                            eq.A.Overlay,
                            {
                                className: a2.profileOverlay,
                                children: (0, l.jsx)(eB.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: a2.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    o.isProvisional &&
                        (0, l.jsx)(eq.A.Overlay, {
                            className: a2.profileOverlay,
                            children: (0, l.jsx)(nr, {
                                heading: eL.intl.string(eL.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: a2.profileBanner,
                                children: (0, l.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(eK.A, { user: o, className: a2.profileBanner }),
                    p?.private &&
                        (0, l.jsx)(eq.A.Overlay, {
                            className: a2.profileOverlay,
                            children: (0, l.jsx)(eY.A, { username: h }),
                        }),
                    (0, l.jsx)("div", {
                        className: a2.profileButtons,
                        children: (0, l.jsx)(nL, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: en,
                            onClose: I,
                        }),
                    }),
                    D && "try-it-out" !== T && (0, l.jsx)(eG.A, { isPremiumUser: (0, W.ki)(d) }),
                    !eu && (0, l.jsx)(nj, { currentUser: d, displayProfile: p, canEditInPlace: G }),
                    ec.length > 0 &&
                        (0, l.jsx)(nr, {
                            heading: eL.intl.string(eL.t["Uv/eTx"]),
                            children: (0, l.jsx)(eV.A, { applicationIds: ec }),
                        }),
                    (0, l.jsx)(nr, {
                        heading: eL.intl.string(eL.t.a6XYD9),
                        children: (0, l.jsx)(eH.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: iX.In }),
                    }),
                    null != ed &&
                        (0, l.jsx)(nr, {
                            heading: eL.intl.string(eL.t.wlTO8v),
                            children: (0, l.jsx)(eF, { friendsSinceDate: ed }),
                        }),
                    p?.guildId != null &&
                        (0, l.jsx)(eZ.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: a2.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !eu &&
                        (G || eA) &&
                        (0, l.jsx)(nr, {
                            heading: eL.intl.string(eL.t["3fe7U5"]),
                            scrollTargetId: iX.bk.CONNECTIONS,
                            children: (0, l.jsx)(nQ, {
                                applicationIdentities: em,
                                connections: ef,
                                userId: o.id,
                                allowEditing: G,
                                className: a2.profileAppConnections,
                            }),
                        }),
                    !eu &&
                        ev &&
                        (0, l.jsx)(nr, {
                            heading: eL.intl.string(eL.t.PHjkRE),
                            scrollTargetId: iX.bk.APPS,
                            children: (0, l.jsx)(e4, {
                                applicationRoleConnections: ep,
                                onClose: I,
                                className: a2.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(i$, { userId: o.id }),
                ],
            }),
            (0, l.jsx)(a8, { displayProfile: p, profileEffectOverride: E, isHovering: z }),
            null != S && (0, l.jsx)(k.A, { frame: S, filterLayer: a3, fadeIn: P }),
        ],
    });
}
function a4(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: d,
        } = (0, ee.A)({ user: n, displayProfile: t, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, eu.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, l.jsx)("div", { className: c, style: u, children: s });
}
function oe(e) {
    let {
            user: n,
            currentUser: t,
            guildId: r,
            originGuildId: d,
            channelId: c,
            messageId: g,
            roleId: v,
            sessionId: C,
            initialTabSection: y,
            initialScrollTarget: k,
            transitionState: R,
            customStatusPrompt: O,
            openedAt: L,
            onClose: _,
            sourceAnalyticsLocations: M = [],
            themeContainerClassName: U,
        } = e,
        W = n.id === t.id,
        Z = i.useCallback(() => (0, aZ.A)(W, _), [W, _]),
        {
            guildId: $,
            pendingGuildId: J,
            isFetching: Q,
            handleSelectUserProfile: ee,
            handleRetry: en,
            hasError: et,
        } = (function (e) {
            let { userId: n, initialGuildId: t } = e,
                [l, r] = i.useState(t),
                [s, o] = i.useState(t),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, a.bG)([K.A], () => K.A.getUserProfile(n)?.fetchError?.status ?? null, [n]),
                f = i.useCallback(() => {
                    (u("retrying"), g((e) => e + 1));
                }, []),
                p = i.useCallback((e) => {
                    (u("loading"), r(e ?? void 0));
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, ec.A)(n, void 0, {
                            type: "modal",
                            guildId: l,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(l), u("idle"));
                            },
                            () => {
                                e || (o(l), u("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [l, n, c]),
                {
                    guildId: s,
                    pendingGuildId: l,
                    isFetching: "idle" !== d,
                    hasError: "retrying" === d || (null != m && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: n.id, initialGuildId: r }),
        el = i.useMemo(() => (null != $ ? { [$]: [n.id] } : {}), [$, n.id]);
    (0, I.Eq)(el, "UserProfileModalV2");
    let ei = (0, q.X)("UserProfileModalV2"),
        er = (0, n2.YW)(),
        es = (0, a.bG)([F.A], () => F.A.hidePersonalInformation),
        ea = (0, eo.A)(n.id) && ei,
        eu = (0, ed.W)(n.id),
        ex = et && !eu,
        eb = ea && !es && !et && !er,
        eC = er ? "try-it-out" : eb ? "edit" : "read-only",
        {
            pendingThemeColors: ey,
            avatarDecorationOverride: eN,
            avatarOverride: eE,
            bannerOverride: eS,
            accentColorOverride: ek,
            profileEffectOverride: eP,
            profileFrameOverride: eT,
        } = (function (e) {
            let { userId: n, guildId: t, editingMode: l } = e;
            return (0, a.cf)(
                [ep.A, V.default, ef.Ay, K.A],
                () => {
                    if ("read-only" === l) return ev;
                    let e = V.default.getUser(n);
                    if (null == e) return ev;
                    let i = ep.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === l
                                ? {
                                      pendingThemeColors: i.tryItOutThemeColors,
                                      pendingAvatar: i.tryItOutAvatar,
                                      pendingBanner: i.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : ep.A.getPendingChanges(t),
                        s = null != t ? ef.Ay.getMember(t, n) : null,
                        a = K.A.getUserProfile(n),
                        o = null != t ? K.A.getGuildMemberProfile(n, t) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, eg.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: t,
                        }),
                        avatarOverride: (0, em.V7)({ userId: n, image: r.pendingAvatar, size: eA }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, eg.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: t,
                        }),
                        profileFrameOverride: (0, eg.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: t,
                        }),
                    };
                },
                [n, t, l],
            );
        })({ userId: n.id, guildId: $, editingMode: eC }),
        {
            isExpanded: eR,
            isAnimating: eO,
            transition: e_,
            handleExpand: ew,
            handleCollapse: eM,
            refs: { expandIconButtonRef: eD, expandTabButtonRef: eG, collapseButtonRef: eU },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: a5 },
                    onRest: () => l(!1),
                }),
                s = (0, A.A)("(min-width: 929px) and (min-height: 550px)"),
                a = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    ((c.current = "collapse"), l(!0), n(!0));
                }, []),
                m = i.useCallback(() => {
                    ((c.current = "expand"), l(!0), n(!1));
                }, []);
            return (
                i.useEffect(() => {
                    if (!t) {
                        if ("collapse" === c.current && e) ((c.current = null), d.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = s ? o.current : a.current;
                            e?.focus();
                        }
                    }
                }, [e, t, s]),
                {
                    isExpanded: e,
                    isAnimating: t,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eF = ea && !eR,
        eV = ea && (!eR || eO),
        { defaultWishlistId: eB } = (0, a.cf)([K.A], () => ({ defaultWishlistId: K.A.getFirstWishlistId(n.id) }));
    (0, D.fw)({ wishlistId: eB, userId: n.id });
    let eH = (0, ej.fC)(),
        eY = ex && (!ea || !Q),
        eK = ea && et,
        eX = J !== $ || eK || null != eH.interactionType,
        eZ = (function (e) {
            let { user: n, currentUser: t } = e,
                { mutualFriendsCount: l, mutualGuilds: i } = (0, rM.A)(n),
                r = i?.length,
                s = (0, aJ.A)(n),
                a = (0, aQ.A)(n.id),
                o = (0, a$.A)(n),
                { hasNewWishlistItems: d } = (0, rt.A)(n),
                u = [],
                c = n.id === t?.id,
                g = (0, st.A)(n.id),
                m = a.length > 0;
            return (
                (g || m) && u.push({ text: eL.intl.string(eL.t.laViwx), section: iX.RP.WIDGETS }),
                u.push({ text: eL.intl.string(eL.t.chq59f), section: iX.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eL.intl.string(eL.t["7lZ31J"]), section: iX.RP.WISHLIST, showNewContentDot: d }),
                n.id !== t?.id &&
                    s &&
                    (u.push({ text: (0, a0.A)(l), section: iX.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, a1.A)(r), section: iX.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: n, currentUser: t }),
        { analyticsLocations: e$ } = (0, b.Ay)([...M, j.A.USER_PROFILE_MODAL_V2]),
        eJ = (0, z.pb)({
            layout: "MODAL_V2",
            userId: n.id,
            sourceSessionId: C,
            guildId: $,
            channelId: c,
            messageId: g,
            roleId: v,
        }),
        eQ = i.useCallback(() => {
            ((0, Y.Wn)({ analyticsLocations: e$, ...eJ, action: iX.pt.SHOW_STYLES_PANEL }), ew());
        }, [e$, eJ, ew]),
        e0 = i.useCallback(() => {
            ((0, Y.Wn)({ analyticsLocations: e$, ...eJ, action: iX.pt.HIDE_STYLES_PANEL }), eM());
        }, [e$, eJ, eM]),
        e1 = (0, X.Ay)(n.id, $);
    (0, w.A)(e$, e1, iX.R7.MODAL_V2);
    let e2 = void 0 !== eT ? eT?.skuId : e1?.profileFrame?.skuId,
        e5 = (0, E.A)(e2),
        e9 = (0, N.A)(e2),
        { profileFrameStyle: e3, profileFrameClassName: e7 } = (0, P.A)(e5);
    (0, S.A)({ skuId: e1?.profileFrame?.skuId, openedAt: L, context: eJ, analyticsLocations: e$ });
    let e8 = (0, a.bG)([V.default], () => H.Ay.canUsePremiumProfileCustomization(V.default.getCurrentUser())),
        e6 = er || (W && null != e1 && e8),
        e4 = B.Ay.useName(e1?.guildId, c, n),
        ne = (0, T.GV)(),
        nn = (0, a.bG)([G.A], () => (null != $ ? G.A.getGuild($) : null)),
        nt = W
            ? null != nn
                ? eL.intl.formatToPlainString(eL.t.M7OhOF, { guildName: nn.name })
                : eL.intl.string(eL.t.egQPgM)
            : eL.intl.format(eL.t.KRe1Fk, { name: e4 });
    return (0, l.jsx)(b.f5, {
        value: e$,
        children: (0, l.jsx)(z.of, {
            value: eJ,
            openedAt: L,
            fetchStartedAt: e1?.fetchStartedAt,
            fetchEndedAt: e1?.fetchEndedAt,
            isLoaded: e1?.isLoaded,
            children: (0, l.jsx)(ej.Hl, {
                value: eH,
                children: (0, l.jsx)(eI.N, {
                    value: k,
                    children: (0, l.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(lO.zr, { [lO.QF]: e1?.private === !0 }),
                        transitionState: R,
                        "aria-labelledby": ne,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(i4, {
                                children: (0, l.jsxs)("div", {
                                    className: s()(a2.layoutContainer, e7, {
                                        [a2.editingPanelEnabled]: ea,
                                        [a2.editingPanelExpanded]: ea && eR,
                                        [a2.isAnimating]: eO,
                                    }),
                                    style: e3,
                                    children: [
                                        (0, l.jsxs)(a4, {
                                            user: n,
                                            displayProfile: e1,
                                            pendingThemeColors: ey,
                                            forceShowPremium: e6,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: lO.Oo,
                                                    children: [
                                                        (0, l.jsx)(n_.A, { onClose: Z }),
                                                        (0, l.jsx)(m.A, {
                                                            children: (0, l.jsx)(f.H, { id: ne, children: nt }),
                                                        }),
                                                        eV &&
                                                            (0, l.jsx)(iF, {
                                                                buttonRef: eD,
                                                                onClick: eQ,
                                                                className: a2.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eF &&
                                                    (0, l.jsx)("div", {
                                                        className: a2.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, l.jsx)(iU, {
                                                            innerRef: eG,
                                                            onClick: eQ,
                                                            className: a2.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                ea &&
                                                    e_((e, n) =>
                                                        n
                                                            ? (0, l.jsx)(iV, {
                                                                  className: s()(a2.editingPanel, {
                                                                      [a2.isExpanded]: eR,
                                                                  }),
                                                                  selectedGuildId: J,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: ee,
                                                                  onClose: e0,
                                                                  collapseButtonRef: eU,
                                                                  isLoading: Q,
                                                                  isEditingDisabled: et,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(eq.A, {
                                                    className: s()(U, lO.A7, a2.profileContentOuter),
                                                    innerClassName: a2.profileContentInner,
                                                    user: n,
                                                    displayProfile: e1,
                                                    themeType: eh.d.MODAL_V2,
                                                    pendingThemeColors: ey,
                                                    isPrivate: e1?.private === !0,
                                                    forceShowPremium: e6,
                                                    children: [
                                                        (0, l.jsx)(a7, { displayProfile: e1, pendingBanner: eS }),
                                                        e1?.private === !0 && (0, l.jsx)(ez.A, {}),
                                                        !ex && (0, l.jsx)(aa, { className: a2.noticeContainer }),
                                                        eY &&
                                                            (0, l.jsx)("div", {
                                                                className: a2.noticeContainer,
                                                                role: "alert",
                                                                children: (0, l.jsx)(i1, {
                                                                    icon: (0, l.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eL.intl.string(eL.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != en
                                                                            ? eL.intl.string(eL.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: en,
                                                                    actionDisabled: !ea && Q,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, l.jsx)("div", {
                                                            className: a2.profileCardToastContainer,
                                                            children: (0, l.jsx)(eW.A, { userId: n.id, onClose: Z }),
                                                        }),
                                                        (0, l.jsxs)(i3, {
                                                            showScrim: eX,
                                                            showLoadingSpinner: Q,
                                                            className: a2.profileContentColumns,
                                                            children: [
                                                                (0, l.jsx)(a6, {
                                                                    user: n,
                                                                    currentUser: t,
                                                                    guildId: $,
                                                                    channelId: c,
                                                                    displayProfile: e1,
                                                                    nickname: e4,
                                                                    originGuildId: d,
                                                                    hasEntered: R === x.ip.ENTERED,
                                                                    customStatusPrompt: O,
                                                                    onClose: Z,
                                                                    avatarDecorationOverride: eN,
                                                                    avatarOverride: eE,
                                                                    bannerOverride: eS,
                                                                    accentColorOverride: ek,
                                                                    profileEffectOverride: eP,
                                                                    profileFrame: e5,
                                                                    fadeInProfileFrame: e9,
                                                                    editingMode: eC,
                                                                    isLoading: Q,
                                                                }),
                                                                (0, l.jsx)(at, {
                                                                    user: n,
                                                                    currentUser: t,
                                                                    displayProfile: e1,
                                                                    guildId: $,
                                                                    channelId: c,
                                                                    items: eZ,
                                                                    initialSection: y,
                                                                    onClose: Z,
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
                            (0, l.jsx)(iB.A, { userId: n.id, guildId: $, className: a2.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function on(e) {
    return (0, l.jsx)(n2.tM, { children: (0, l.jsx)(oe, { ...e }) });
}
