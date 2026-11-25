n.d(t, { A: () => dv });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(855986),
    o = n(935462),
    u = n(778712),
    d = n(866323),
    c = n(95362),
    g = n(695366),
    m = n(140735),
    f = n(707554),
    h = n(738188),
    p = n(646514),
    x = n(231723),
    A = n(241524),
    I = n(770178),
    v = n(80682),
    j = n(793574),
    b = n(688810),
    y = n(248284),
    C = n(287809),
    E = n(620632),
    S = n(73153),
    N = n(627784),
    k = n(39418),
    T = n(652215),
    P = n(938595),
    O = n(971217),
    R = n(577390),
    L = n(287727),
    _ = n(31956),
    w = n(744808),
    M = n(875741),
    D = n(915089),
    G = n(713517),
    U = n(645507),
    F = n(922590),
    B = n(821269),
    W = n(397562),
    V = n(433380),
    H = n(634110),
    z = n(71393),
    Y = n(994500),
    K = n(351906),
    q = n(562153),
    X = n(474090),
    Z = n(448645),
    $ = n(183555),
    J = n(741534),
    Q = n(851767),
    ee = n(527212),
    et = n(164636),
    en = n(370480),
    ei = n(773669),
    el = n(101928),
    er = n(837529),
    es = n(346713),
    ea = n(573648),
    eo = n(429913),
    eu = n(321078),
    ed = n(403362),
    ec = n(484509),
    eg = n(487409),
    em = n(83931),
    ef = n(991988),
    eh = n(917445),
    ep = n(919395),
    ex = n(101058),
    eA = n(696451),
    eI = n(836602),
    ev = n(996988),
    ej = n(207634);
let eb = (0, u.FT)(ej.T[ev.d.MODAL_V2].avatarSize),
    ey = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eC = n(716804),
    eE = n(679492),
    eS = n(554146),
    eN = n(43105),
    ek = n(844222),
    eT = n(381791),
    eP = n(643056),
    eO = n(139523),
    eR = n(327791),
    eL = n(70283),
    e_ = n(982240);
function ew() {
    return (0, a.bG)([C.default, e_.Ay], () => {
        let e = C.default.getCurrentUser()?.id;
        return null != e && (e_.Ay.getBadgeById(eL.$.PREMIUM_TENURE, e)?.auto_unhidden ?? !1);
    });
}
var eM = n(262),
    eD = n(263775),
    eG = n(49999),
    eU = n(792996);
function eF(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        u = (0, eP.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eR.A)(),
        c =
            ((t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [e_.Ay],
                () => (null != t && e_.Ay.hasCatalogFor(t) ? e_.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, ee.Ay)(t)),
            (s = (0, eM.A)(r)),
            n ?? s.length > 0),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id),
        m = (0, eO.V)({ currentUserId: g, enabled: u }),
        f = ew(),
        { reducedMotion: h } = l.useContext(ek.C),
        p = (0, y.A)((e) => e.isOpen),
        x = c && u && !m.isPending && !f,
        [A, I] = (0, eD.kn)(x && !p ? [eS.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []),
        v = A === eS.M.BADGE_CUSTOMIZATION_WEB_COACHMARK;
    return (l.useLayoutEffect(() => {
        if (v)
            return () => {
                y.A.getState().isOpen && I(eG.i.TAKE_ACTION);
            };
    }, [v, I]),
    v)
        ? (0, i.jsx)(eN.A, {
              targetElementRef: o,
              position: "right",
              gradientColor: "blue",
              graphic: { type: "rive", rive: eT.U, props: { dataBinding: { on: !0, reducedMotion: h.enabled } } },
              title: eU.intl.string(eU.t["9JoKQb"]),
              body: eU.intl.string(d ? eU.t.p82vky : eU.t.IDh31t),
              onRequestClose: () => I(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t["4P5I8V"]),
                      onClick: function () {
                          y.A.setState({ isOpen: !0 });
                      },
                  },
              ],
          })
        : null;
}
var eB = n(975571);
function eW(e) {
    let { targetElementRef: t } = e,
        n = ew(),
        [l, r] = (0, eD.kn)(n ? [eS.M.NITRO_BADGE_UNHIDDEN_NOTICE] : [], { bypassAutoDismiss: !0 });
    return l !== eS.M.NITRO_BADGE_UNHIDDEN_NOTICE
        ? null
        : (0, i.jsx)(eN.A, {
              targetElementRef: t,
              position: "right",
              title: eU.intl.string(eU.t.ZRLAIy),
              body: eU.intl.string(eU.t.sEGQaJ),
              onRequestClose: () => r(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t.hvVgAZ),
                      onClick: function () {
                          (r(eG.i.TAKE_ACTION),
                              window.open(
                                  eB.A.getArticleURL(T.MVz.PROFILE_BADGES_MANAGEMENT),
                                  "_blank",
                                  "noopener,noreferrer",
                              ));
                      },
                  },
              ],
          });
}
var eV = n(718019),
    eH = n(56810),
    ez = n(915614),
    eY = n(689233),
    eK = n(834730);
function eq(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eK.E, { variant: "body-sm/normal", children: t });
}
var eX = n(361311),
    eZ = n(477534),
    e$ = n(439053),
    eJ = n(743987),
    eQ = n(312381),
    e0 = n(501193),
    e1 = n(383448),
    e6 = n(946356),
    e2 = n(804329),
    e4 = n(503026),
    e3 = n(305385),
    e8 = n(109112),
    e7 = n(939249),
    e5 = n(730134),
    e9 = n(169869),
    te = n(837057),
    tt = n(310419),
    tn = n(619019),
    ti = n(967198),
    tl = n(488995),
    tr = n(576849);
function ts(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, e9.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: tr.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e5.A, { user: new tn.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e8.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: tr.Hd,
                children: [
                    (0, i.jsxs)(e7.D, {
                        className: tr.OB,
                        onClick: function () {
                            (l?.(),
                                (0, te.transitionToGlobalDiscovery)({
                                    tab: tl.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: tt.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eK.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eK.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eK.E, {
                                variant: "footnote/normal",
                                color: "text-default",
                                className: tr.nk,
                                children: eU.intl.format(eU.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: tr.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function ta(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, $.NJ)(),
        o = (0, a.bG)([ei.default], () => ei.default.locale),
        u = (0, a.bG)([ti.A], () => ti.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(tr.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: tr.FI,
                          children: (0, i.jsx)(ts, {
                              applicationRoleConnection: e,
                              locale: o,
                              onApplicationClicked: () => {
                                  (r({ action: "PRESS_APP_CONNECTION" }), l());
                              },
                              selectedGuildId: u ?? void 0,
                          }),
                      },
                      `${t}-${e.application.id}`,
                  ),
              ),
          });
}
var to = n(403581),
    tu = n(240248),
    td = n(501925),
    tc = n(900179),
    tg = n(677295);
function tm(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)(tc.A, {
        className: s()(tg.u, t),
        headingVariant: "body-xs/medium",
        headingColor: "text-subtle",
        ...n,
    });
}
var tf = n(81400),
    th = n(84540),
    tp = n(290386),
    tx = n(621466);
n(321073);
var tA = n(775602),
    tI = n(404760);
function tv(e) {
    let { id: t, message: n, type: l } = e,
        r = "error" === l,
        s = r ? g.CircleErrorIcon : h.WarningIcon;
    return (0, i.jsxs)(eK.E, {
        id: t,
        role: r ? "alert" : void 0,
        variant: "body-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: tI.VP,
        children: [(0, i.jsx)(s, { size: "xs", color: "currentColor", className: r ? tI.ik : tI.QW }), n],
    });
}
function tj(e) {
    let {
            isEditing: t,
            preview: n,
            placeholder: r,
            input: a,
            editButtonRef: o,
            editButtonAriaLabel: u,
            onStartEditing: d,
            previewErrorMessage: c,
            previewWarningMessage: g,
            className: m,
            wrapperRef: f,
            onBlur: h,
            onKeyDown: p,
        } = e,
        x = l.useRef(null),
        A = l.useId(),
        I = l.useId(),
        v = null == n,
        j = null != c,
        b = null != g && !j,
        y = j ? "error" : b ? "warning" : null,
        C = j ? c : g,
        E = null != y && null != C,
        S = [];
    (v && S.push(A), E && S.push(I));
    let N = S.length > 0 ? S.join(" ") : void 0;
    function k() {
        let { activeElement: e } = x.current?.ownerDocument ?? document;
        ((0, tx.vq)(e, HTMLElement) && e.blur(), d());
    }
    let T = (0, i.jsxs)("div", {
        ref: x,
        className: s()(tI.LL, { [tI.JD]: j, [tI.xe]: b }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            v
                ? (0, i.jsx)(eK.E, {
                      id: A,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      className: tI.qf,
                      children: r,
                  })
                : n,
            (0, i.jsx)(e7.D, {
                innerRef: o,
                "aria-label": u,
                "aria-describedby": N,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), k());
                },
                focusProps: { ringTarget: x },
            }),
        ],
    });
    return (0, i.jsx)("div", {
        ref: f,
        className: s()(tI.kL, m),
        onBlur: h,
        onKeyDown: p,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? a
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: tI.VH, children: T }),
                              E && (0, i.jsx)(tv, { id: I, message: C, type: y }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var tb = n(786826);
function ty(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function tC(e) {
    var t;
    let {
            isEditing: n,
            committedValue: l,
            editedValue: r,
            setEditedValue: s,
            editButtonRef: a,
            handleStartEditing: o,
            wrapperRef: u,
            onBlur: d,
            onContainerKeyDown: c,
            inputRef: g,
            onInputFocus: m,
            onInputKeyDown: f,
            preview: h,
            placeholder: p,
            editButtonAriaLabel: x,
            label: A,
            maxLength: I,
            emojiPickerIntention: v,
            error: j,
            warning: b,
            className: y,
        } = e,
        C =
            ((t = n ? r : l),
            (null != I && t.length > I ? eU.intl.formatToPlainString(eU.t.ICT5S6, { maxLength: I }) : void 0) ?? j);
    return (0, i.jsx)(tj, {
        isEditing: n,
        preview: h,
        placeholder: p,
        editButtonRef: a,
        editButtonAriaLabel: x,
        onStartEditing: o,
        className: y,
        wrapperRef: u,
        onBlur: d,
        onKeyDown: c,
        previewErrorMessage: C,
        previewWarningMessage: b,
        input: (0, i.jsx)(tb.f, {
            editorRef: g,
            label: A,
            hideLabel: !0,
            value: n ? r : l,
            onChange: s,
            onFocus: m,
            onKeyDown: f,
            maxLength: I,
            error: C,
            helperText: b,
            placeholder: p,
            emojiPickerIntention: v,
        }),
    });
}
let tE = [
    { value: "HAIKU", label: () => eU.intl.string(eU.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eU.intl.string(eU.t.CXkR1L) },
    { value: "TELL_US", label: () => eU.intl.string(eU.t.eutr4P) },
    { value: "FUN_FACT", label: () => eU.intl.string(eU.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eU.intl.string(eU.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eU.intl.string(eU.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eU.intl.string(eU.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eU.intl.string(eU.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eU.intl.string(eU.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eU.intl.string(eU.t.u7WCGI) },
];
var tS = n(307731);
function tN(e) {
    let t,
        n,
        r,
        s,
        o,
        { displayProfile: u, className: d } = e,
        c = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        g = u?.guildId != null,
        m = u?.guildId ?? null,
        f = Z.Ay.canUsePremiumProfileCustomization(c),
        h = (0, tp.U)({ location: "user_profile_modal_edit" }),
        {
            value: p,
            previewValue: x,
            onCommit: A,
        } = ((t = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(t).pendingBio)),
        (s = n ? u?._guildMemberProfile?.bio : u?.bio),
        (o = u?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? s ?? "",
            previewValue: o,
            onCommit: l.useCallback(
                (e) => {
                    (0, th.p)({ bio: e.trim(), guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        I = (function (e) {
            let {
                    isEditing: t,
                    wrapperRef: n,
                    handleCommit: i,
                    ...r
                } = (function (e) {
                    let { value: t, onCommit: n, disabled: i = !1 } = e,
                        [r, s] = l.useState("idle"),
                        [o, u] = l.useState(t),
                        d = "editing" === r && !i,
                        c = (0, a.bG)([tA.Ay], () => tA.Ay.useReducedMotion),
                        g = l.useRef(null),
                        m = l.useRef(null),
                        f = l.useRef(null),
                        h = l.useRef(!1),
                        p = l.useRef(!0),
                        x = l.useRef(!1),
                        A = l.useCallback(() => {
                            ((p.current = !1), u(t), s("editing"));
                        }, [t]),
                        I = l.useRef(o);
                    l.useLayoutEffect(() => {
                        I.current = o;
                    });
                    let v = l.useCallback(() => {
                            p.current || ((p.current = !0), n(I.current), s("done"));
                        }, [n]),
                        j = l.useCallback(() => {
                            p.current || ((p.current = !0), s("done"));
                        }, []);
                    (l.useEffect(() => {
                        "done" === r && (h.current && g.current?.focus({ preventScroll: !0 }), (h.current = !1));
                    }, [r]),
                        l.useEffect(() => {
                            let e = x.current;
                            ((x.current = !1),
                                d &&
                                    (m.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || f.current?.focus({ preventScroll: !0 })));
                        }, [d, c]));
                    let b = l.useCallback(
                            (e) => {
                                d &&
                                    "Escape" === e.key &&
                                    (e.preventDefault(), e.stopPropagation(), (h.current = !0), j());
                            },
                            [d, j],
                        ),
                        y = l.useCallback(() => {
                            ((h.current = !0), v(), f.current?.blur());
                        }, [v]),
                        C = l.useCallback(() => {
                            ((h.current = !0), j(), f.current?.blur());
                        }, [j]),
                        E = l.useCallback(() => {
                            d || ((x.current = !0), A());
                        }, [d, A]);
                    return {
                        isEditing: d,
                        committedValue: t,
                        editedValue: o,
                        setEditedValue: u,
                        onCommit: n,
                        editButtonRef: g,
                        wrapperRef: m,
                        inputRef: f,
                        handleStartEditing: A,
                        handleCommit: v,
                        handleCancel: j,
                        onInputFocus: E,
                        onInputKeyDown: l.useCallback(
                            (e) => {
                                "Enter" !== e.key || e.shiftKey
                                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), C())
                                    : (e.preventDefault(), y());
                            },
                            [y, C],
                        ),
                        onContainerKeyDown: b,
                    };
                })(e),
                s = l.useCallback(
                    (e) =>
                        (function (e, t) {
                            if (t?.contains(e)) return !0;
                            let n = ty(t),
                                i = n?.getAttribute("aria-controls");
                            return null != i && null != e.closest(`#${i}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, tx.vq)(e.target) && !s(e.target) && i();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, s, i]);
            let o = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, tx.vq)(l) || s(l) || (null == ty(n.current) && i());
                },
                [t, s, i, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: i, ...r, onBlur: o };
        })({ value: p, onCommit: A }),
        v = !(0, tu.uJ)(x),
        j = (0, a.bG)([eI.A], () => eI.A.getErrors(m)),
        b = (0, tf.EC)(m),
        y = j.bio?.[0],
        E = b?.bio?.[0],
        S = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * tE.length)), tE[e]);
        }, []),
        N = g ? eU.intl.string(eU.t.yPJ9xr) : S.label();
    return !g || f
        ? (0, i.jsx)(tC, {
              ...I,
              className: d,
              preview: v ? (0, i.jsx)(td.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eU.intl.string(eU.t.lO3n7a),
              label: eU.intl.string(eU.t["YWo+Zd"]),
              emojiPickerIntention: tS.EmojiIntention.PROFILE,
              maxLength: h,
              error: y,
              warning: E,
          })
        : v
          ? (0, i.jsx)(td.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var tk = n(430626);
function tT(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: r } = (0, $.NJ)(),
        s = n?.bio,
        a = !(0, tu.uJ)(s),
        o = n?.guildId != null,
        u = o && Z.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eU.intl.string(eU.t.jVai8N) : eU.intl.string(eU.t.ZzAR2Y),
        c = (0, Z.TW)(t) ? eU.intl.string(eU.t["5AFxuK"]) : eU.intl.string(eU.t.N6ixy8),
        g = l && u ? { icon: to.NitroWheelIcon, tooltip: c } : void 0;
    return (l || a) && (!l || !o || a || u)
        ? (0, i.jsx)(tm, {
              heading: d,
              hideHeading: !l,
              headingIcon: g,
              children: l
                  ? (0, i.jsx)(tN, { displayProfile: n, className: tk.u })
                  : (0, i.jsx)(td.A, { userBio: s, guildId: r?.guildId, setLineClamp: !1 }),
          })
        : null;
}
var tP = n(136969),
    tO = n(738676),
    tR = n(708645),
    tL = n(722868),
    t_ = n(982985),
    tw = n(666297),
    tM = n(34188),
    tD = n(969935),
    tG = n(993401);
function tU(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, b.Ay)(),
        r = l.useCallback(() => {
            (0, tD.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tG.q3, {
        action: "VISIT_SHOP",
        icon: tM.ShopIcon,
        tooltipText: eU.intl.string(eU.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tF = n(508882),
    tB = n(102951);
function tW(e) {
    let {
            user: t,
            currentUser: n,
            guildId: l,
            originGuildId: r,
            channelId: s,
            displayProfile: a,
            relationshipType: o,
            onClose: u,
        } = e,
        { newestAnalyticsLocation: d } = (0, b.Ay)(),
        c = (0, tL.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: g,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: f,
        } = (0, tB.J)({ userId: t.id }),
        h = g.length > 0 || m || f;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(t_.e, { userId: t.id, variant: "primary", disabled: !0 }),
                    (0, i.jsx)(tU, {}),
                    (0, i.jsx)(tw.Zt, { user: t, guildId: l, viewProfileItem: c }),
                ],
            })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(t_.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tO.kc, { user: t, guildId: l }),
                      (0, i.jsx)(tw.Zt, { user: t, guildId: l, viewProfileItem: c }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t_.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tO.kc, { user: t, guildId: l }),
                        (0, i.jsx)(tw.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(t_.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tF.Ef, { user: t, relationshipType: o, analyticsLocation: d }),
                          (0, i.jsx)(tO.kc, { user: t, guildId: l }),
                          (0, i.jsx)(tw.Zt, { user: t, guildId: l, viewProfileItem: c }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(t_.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tF.ES, {
                                user: t,
                                analyticsLocation: d,
                                gameFriends: g,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tO.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tw.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tF.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: d,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(t_.l, { userId: t.id, onClose: tP.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tO.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tw.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    });
}
function tV(e) {
    return e.user.id === e.currentUser.id || e.relationshipType === T.eA$.BLOCKED
        ? (0, i.jsx)(tW, { ...e })
        : (0, i.jsx)(tR.ZQ, {
              user: e.user,
              guildId: e.guildId,
              location: "FullProfileShopThisLook",
              children: (0, i.jsx)(tO.vy, { user: e.user, guildId: e.guildId, children: (0, i.jsx)(tW, { ...e }) }),
          });
}
var tH = n(463156),
    tz = n(866665),
    tY = n(28863),
    tK = n(509434),
    tq = n(307301),
    tX = n(149468),
    tZ = n(643068),
    t$ = n(522978),
    tJ = n(129230),
    tQ = n(486020),
    t0 = n(889558),
    t1 = n(783419);
let t6 = "User Profile Modal V2";
function t2(e) {
    let t = ea.A.get(e);
    ((0, t$.A)({ platformType: t.type, location: t6 }),
        tJ.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: t6,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t4() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: t2, stackingBehavior: "stack" });
}
function t3(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, en.An)(r[t1.pK.CREATED_AT], n),
        a = ea.A.get((0, tZ.ML)(t.type));
    return (0, i.jsx)(t7, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tz.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eK.E, { variant: "body-sm/normal", className: tr.GW, children: t.name }),
                  })
                : (0, i.jsx)(tY.Anchor, {
                      href: e,
                      className: tr.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eU.intl.string(eU.t.q5jLJB)}`
                              : `${t.name}, ${eU.intl.string(eU.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tX.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, t0.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: tr.vi,
                          children: [
                              (0, i.jsx)(tz.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eK.E, {
                                      variant: "body-sm/normal",
                                      className: tr.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tK.LinkExternalSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tr.wP,
                              }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === T.fg2.REDDIT
                ? (0, e9.xE)(r)
                : t.type === T.fg2.STEAM
                  ? (0, e9.dy)(r)
                  : t.type === T.fg2.LETTERBOXD
                    ? (0, e9.uq)(r)
                    : t.type === T.fg2.BLUESKY || t.type === T.fg2.MASTODON || t.type === T.fg2.TWITTER
                      ? (0, e9.ED)(r)
                      : t.type === T.fg2.PAYPAL
                        ? (0, e9.gZ)(r)
                        : t.type === T.fg2.EBAY
                          ? (0, e9.ub)(r)
                          : t.type === T.fg2.TIKTOK
                            ? (0, e9.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function t8(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = tQ.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(t7, {
        renderAccountName: function () {
            return (0, i.jsx)(tz.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eK.E, {
                    variant: "body-sm/normal",
                    className: tr.GW,
                    children: n.profile.username,
                }),
            });
        },
        renderMetadata: function () {
            return null;
        },
        platformIcon: r,
        platformName: l.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function t7(e) {
    let {
        renderAccountName: t,
        renderMetadata: n,
        platformName: l,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: tr.FI,
        children: [
            (0, i.jsx)(tz.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: tr.k_,
                    children: (0, i.jsx)("img", {
                        alt: eU.intl.formatToPlainString(eU.t.rtm15P, { name: l }),
                        className: s()(tr.tV, o ? tr.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tr.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eK.E, {
                                    variant: "body-xs/normal",
                                    children: eU.intl.format(eU.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: tr.yu, children: n() }),
                ],
            }),
        ],
    });
}
function t5(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        u = (0, a.bG)([ei.default], () => ei.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let d = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(tr.kL, o),
        children: [
            d &&
                (0, i.jsxs)("ul", {
                    className: tr.V,
                    children: [
                        t.map((e) => (0, i.jsx)(t3, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t8, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e7.D, {
                    className: tr.qG,
                    onClick: t4,
                    children: [
                        (0, i.jsx)(tq.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eU.intl.string(eU.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var t9 = n(193885),
    ne = n(408278),
    nt = n(23722);
let nn = { id: "default" },
    ni = l.createContext(null),
    nl = l.createContext(null);
function nr(e) {
    let { children: t } = e,
        [n, r] = l.useState(nn),
        [s, o] = l.useState(null),
        u = (0, nt.A)((e) => {
            r(e);
        }),
        d = l.useCallback(() => {
            r(nn);
        }, []),
        c = (0, a.bG)([C.default], () => Z.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? nn : n,
        m = !c && s?.id === "premiumTryItOut",
        f = l.useCallback(() => {
            o(g);
        }, [g]),
        h = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: f, navigate: u, goBack: d }),
            [g, s, f, u, d],
        );
    return (0, i.jsx)(nl.Provider, { value: m, children: (0, i.jsx)(ni.Provider, { value: h, children: t }) });
}
function ns() {
    let e = l.useContext(nl);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function na() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(ni);
        if (null == e)
            throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
        return e;
    })();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    };
}
var no = n(194261),
    nu = n(789645),
    nd = n(534514),
    nc = n(805251),
    ng = n(821609),
    nm = n(39623),
    nf = n(890377),
    nh = n(517461),
    np = n(609425),
    nx = n(145359),
    nA = n(804661),
    nI = n(465794),
    nv = n(468450),
    nj = n(462887),
    nb = n(765178),
    ny = n(736653),
    nC = n(461797),
    nE = n(469054),
    nS = n(601298),
    nN = n(207803);
function nk() {
    let e = (0, ny.Ay)(),
        t = (0, nj.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nC.Wt)(e);
                (0, nN.w5)({
                    banner: (0, nS.X)({
                        assetOrigin: nE.E.NEW_ASSET,
                        imageUri: n.getBannerSrc(!1),
                        staticImageUri: n.getBannerSrc(!0),
                        description: n.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: t ? n.themeColors.light : n.themeColors.dark,
                    displayNameStyles: n.displayNameStyles,
                    lastPreset: e,
                });
            },
            [t],
        );
    return (
        l.useEffect(() => {
            eI.A.hasTryItOutChanges() || n((0, nC.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eI.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nC.B$)(e),
                i = (0, nC.Wt)(t);
            (tJ.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                nb.O.announce(eU.intl.formatToPlainString(eU.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nT = n(487233),
    nP = n(999618),
    nO = n(317097),
    nR = n(602853),
    nL = n(265872),
    n_ = n(508274),
    nw = n(654107),
    nM = n(930349);
function nD(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nR.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nw.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eI.A, Q.A], () => ({
            pendingAccentColor: eI.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: Q.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nO.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, th.p)({ accentColor: e }), []);
    return (0, i.jsx)(nL.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(n_.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nM.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eU.intl.string(eU.t["/X3fkf"]),
                editButtonA11yLabel: eU.intl.string(eU.t.kRMJ1v),
                currentValueA11yLabel: (0, nO.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nO.Hl)(c) } }),
            }),
    });
}
var nG = n(841183),
    nU = n(450373),
    nF = n(317139);
function nB(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nF.o, style: { backgroundColor: t } });
}
function nW(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nF._ });
}
function nV(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nR.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, nO.LX)(s),
        { hex: o } = (0, nU.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(nW, { src: u, imageDescription: r }) : (0, i.jsx)(nB, { backgroundColor: o });
}
function nH(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eU.intl.string(eU.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nM.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eU.intl.string(eU.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nV, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nz = n(569059);
function nY(e) {
    let { userId: t, guildId: n, disabled: r, errorMessageId: s } = e,
        a = l.useRef(null),
        {
            displayProfile: o,
            pendingBanner: u,
            bannerChange: d,
            currentValueA11yLabel: c,
            currentProfileBanner: g,
            hasMainProfileFallback: m,
        } = (function (e, t) {
            let n = (0, ee.Ay)(e, t),
                {
                    pendingBanner: i,
                    mainProfileBanner: l,
                    currentProfileBanner: r,
                } = (0, et.cf)(
                    [eI.A, C.default, Q.A],
                    () => ({
                        pendingBanner: eI.A.getPendingChanges(t ?? void 0).pendingBanner,
                        mainProfileBanner: C.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != t ? Q.A.getGuildMemberProfile(e, t)?.banner : Q.A.getUserProfile(e)?.banner,
                    }),
                    [t, e],
                ),
                s = null != t,
                a = s && (n?.isUsingGuildMemberBanner() ?? !1),
                o = null === i;
            return {
                displayProfile: n,
                pendingBanner: i,
                bannerChange: o && s && !a ? void 0 : i,
                currentValueA11yLabel: (0, nG.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        f = (0, ep.Ac)(u, g)
            ? {
                  onClick: () => (0, nv.rM)(null, g, (e) => (0, th.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eU.intl.string(m ? eU.t.jHlJNS : eU.t.tT9n7D),
              }
            : void 0,
        h = (0, nz.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nH, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: d,
        currentValueA11yLabel: c,
        variant: "square",
        affordance: f,
        onClick: h,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: s,
    });
}
var nK = n(259065),
    nq = n(922301),
    nX = n(16371),
    nZ = n(523312);
let n$ = "heading-xl/semibold";
function nJ(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nZ.MC, { [nZ.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eK.E, {
                      variant: n$,
                      children: (0, i.jsx)(nX.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nq.G.ANIMATED : nq.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eK.E, { variant: n$, className: nZ.kr, children: t }),
    });
}
function nQ(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eU.intl.string(eU.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nM.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eU.intl.string(eU.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(nJ, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function n0(e) {
    let { user: t, guildId: n, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([eA.Ay], () => (null != n ? (eA.Ay.getMember(n, t.id)?.nick ?? null) : null)),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null),
        m = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(null).pendingGlobalName),
        f = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: h,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, ep.B0)(t, n ?? void 0),
        A = d ? p : h,
        I = void 0 !== x,
        v = null === x,
        j = d && null != h,
        y = (0, ep.lw)({ pendingValue: x, userValue: h, guildValue: p, guildId: n ?? void 0 }),
        E = (0, ep.lw)({ pendingValue: d ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = I ? null != x : null != A,
        N =
            null != y && S
                ? {
                      onClick: () => (0, th.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(j ? eU.t.en3ogK : eU.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nK.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nQ, {
        affordance: (!v && (I || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nG.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var n1 = n(450232),
    n6 = n(89851);
function n2(e) {
    let { heading: t, description: n, children: l, disabled: r = !1, showNitroIcon: a = !1, badge: o } = e;
    return (0, i.jsxs)("div", {
        className: n6.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(n6.Pf, { [n6.r9]: r }),
                children: [
                    (0, i.jsx)(nd.D, {
                        className: n6.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    a && (0, i.jsx)(n1.A, { className: n6.IX, size: "xs", color: "inherit", disabled: r }),
                    null != o && (0, i.jsx)("span", { className: n6.ot, children: o }),
                    null != n && (0, i.jsx)(eK.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
            l,
        ],
    });
}
function n4(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: n6.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eK.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n3 = n(897661),
    n8 = n(332560),
    n7 = n(659373),
    n5 = n(192308),
    n9 = n(506988),
    ie = n(211824);
function it(e) {
    let { user: t, disabled: r, onOpen: s } = e;
    (0, n8.UF)(n9.uF.DISPLAY_NAME_STYLES_SETTINGS, n8.rl.NON_NITRO_CARD, !0);
    let a = (0, n3.b)(t),
        { isApplied: o, removeCampaignDisplayNameStyle: u } = (0, n7.K)(t),
        d = o ? ie.AA : null,
        c = l.useCallback(() => {
            (s?.(),
                (0, n5.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(249169),
                            n.e(317446),
                            n.e(71866),
                            n.e(587882),
                            n.e(891473),
                            n.e(411938),
                            n.e(198496),
                            n.e(77413),
                            n.e(474750),
                            n.e(267526),
                            n.e(669174),
                            n.e(967062),
                            n.e(408734),
                            n.e(306968),
                            n.e(635014),
                            n.e(653383),
                            n.e(658961),
                            n.e(9796),
                            n.e(952068),
                            n.e(768289),
                            n.e(772565),
                            n.e(169191),
                            n.e(79492),
                            n.e(533781),
                            n.e(328276),
                            n.e(592e3),
                            n.e(524434),
                            n.e(653294),
                            n.e(672402),
                            n.e(226229),
                            n.e(118994),
                            n.e(516497),
                            n.e(24774),
                            n.e(326794),
                            n.e(670870),
                            n.e(684231),
                            n.e(570690),
                            n.e(886631),
                            n.e(435860),
                            n.e(426782),
                            n.e(406322),
                            n.e(942571),
                            n.e(464759),
                            n.e(763343),
                            n.e(775417),
                            n.e(194704),
                            n.e(3942),
                            n.e(274461),
                            n.e(270520),
                            n.e(384054),
                            n.e(731841),
                            n.e(544242),
                            n.e(616090),
                            n.e(796662),
                            n.e(801781),
                            n.e(816348),
                            n.e(109383),
                            n.e(818291),
                            n.e(243794),
                            n.e(301815),
                            n.e(713398),
                            n.e(10985),
                            n.e(171206),
                            n.e(828178),
                            n.e(45036),
                            n.e(974119),
                            n.e(206988),
                            n.e(434683),
                            n.e(920955),
                            n.e(505928),
                            n.e(752657),
                            n.e(747973),
                            n.e(314001),
                            n.e(885251),
                            n.e(857871),
                            n.e(529366),
                            n.e(390430),
                            n.e(990185),
                            n.e(752924),
                            n.e(849162),
                            n.e(660201),
                            n.e(770925),
                            n.e(179301),
                            n.e(918347),
                            n.e(102247),
                            n.e(689521),
                            n.e(237403),
                            n.e(10886),
                            n.e(84993),
                            n.e(592268),
                            n.e(374962),
                            n.e(553627),
                            n.e(887141),
                            n.e(736919),
                            n.e(631323),
                            n.e(464452),
                            n.e(243852),
                            n.e(714144),
                            n.e(458855),
                            n.e(305161),
                            n.e(141648),
                            n.e(17256),
                            n.e(377016),
                            n.e(60268),
                            n.e(598761),
                            n.e(60955),
                            n.e(887093),
                            n.e(393336),
                            n.e(126437),
                            n.e(481647),
                            n.e(749248),
                            n.e(704434),
                            n.e(900361),
                            n.e(21921),
                            n.e(811310),
                            n.e(676418),
                            n.e(166495),
                            n.e(362274),
                            n.e(49782),
                            n.e(570849),
                            n.e(45072),
                            n.e(942724),
                            n.e(139970),
                            n.e(173764),
                            n.e(940258),
                            n.e(161275),
                            n.e(830221),
                            n.e(761253),
                            n.e(357688),
                            n.e(308555),
                            n.e(857467),
                            n.e(508371),
                            n.e(858164),
                            n.e(885434),
                            n.e(586127),
                            n.e(977547),
                            n.e(41250),
                            n.e(179049),
                            n.e(132737),
                            n.e(344502),
                            n.e(146070),
                            n.e(836863),
                            n.e(854622),
                            n.e(834968),
                            n.e(590365),
                            n.e(989088),
                            n.e(37977),
                            n.e(136149),
                            n.e(470068),
                            n.e(817989),
                            n.e(147626),
                            n.e(647177),
                            n.e(613867),
                            n.e(689393),
                            n.e(727779),
                            n.e(412743),
                            n.e(717602),
                            n.e(585503),
                            n.e(891585),
                            n.e(203589),
                            n.e(382465),
                            n.e(294857),
                            n.e(15481),
                            n.e(668802),
                            n.e(631358),
                            n.e(459414),
                            n.e(335395),
                            n.e(882777),
                            n.e(945413),
                            n.e(402026),
                            n.e(163235),
                            n.e(632756),
                            n.e(564850),
                            n.e(941040),
                            n.e(124791),
                            n.e(35771),
                            n.e(648344),
                            n.e(170104),
                            n.e(491793),
                            n.e(102698),
                            n.e(902564),
                            n.e(731751),
                            n.e(423775),
                            n.e(704727),
                            n.e(374916),
                            n.e(214285),
                            n.e(248330),
                            n.e(373004),
                            n.e(803332),
                            n.e(938149),
                            n.e(408362),
                            n.e(741678),
                            n.e(852617),
                            n.e(177102),
                            n.e(256769),
                            n.e(125964),
                            n.e(415266),
                            n.e(737021),
                            n.e(775951),
                            n.e(254506),
                            n.e(874342),
                            n.e(911667),
                            n.e(533015),
                            n.e(976516),
                            n.e(400501),
                            n.e(985794),
                            n.e(695358),
                            n.e(767837),
                            n.e(473384),
                            n.e(432209),
                            n.e(229657),
                            n.e(996868),
                            n.e(368062),
                            n.e(859991),
                            n.e(667092),
                            n.e(709371),
                            n.e(330724),
                            n.e(599719),
                            n.e(987478),
                            n.e(858337),
                            n.e(97210),
                            n.e(260218),
                            n.e(649520),
                            n.e(493014),
                            n.e(935948),
                            n.e(562168),
                            n.e(215920),
                            n.e(24922),
                            n.e(401518),
                            n.e(698547),
                            n.e(355949),
                            n.e(24889),
                            n.e(522261),
                            n.e(213924),
                            n.e(932606),
                            n.e(593020),
                            n.e(338601),
                            n.e(334119),
                            n.e(702813),
                            n.e(39038),
                            n.e(678050),
                            n.e(901922),
                            n.e(557940),
                            n.e(9205),
                            n.e(720590),
                            n.e(68532),
                            n.e(428367),
                            n.e(144989),
                            n.e(179745),
                            n.e(529570),
                            n.e(93286),
                            n.e(763096),
                            n.e(431714),
                            n.e(36947),
                            n.e(225612),
                            n.e(108634),
                            n.e(836150),
                            n.e(365074),
                            n.e(472789),
                            n.e(137937),
                            n.e(100126),
                            n.e(497746),
                            n.e(803191),
                            n.e(111346),
                            n.e(940248),
                            n.e(271217),
                            n.e(396325),
                            n.e(141049),
                            n.e(288688),
                            n.e(238742),
                            n.e(864137),
                            n.e(512162),
                            n.e(866008),
                            n.e(743487),
                            n.e(531158),
                            n.e(482511),
                            n.e(504199),
                            n.e(150200),
                            n.e(285350),
                            n.e(829961),
                            n.e(769369),
                            n.e(311471),
                            n.e(122266),
                            n.e(70008),
                            n.e(655602),
                            n.e(486155),
                            n.e(244645),
                            n.e(561622),
                            n.e(44761),
                            n.e(398254),
                            n.e(207846),
                            n.e(143302),
                            n.e(561454),
                            n.e(886492),
                            n.e(172158),
                            n.e(574252),
                            n.e(298748),
                            n.e(893513),
                        ]).then(n.bind(n, 596016));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsx)(nQ, {
        affordance: o ? { onClick: u, type: "remove", accessibleLabel: eU.intl.string(eU.t["Wqmi/h"]) } : void 0,
        variant: "bar",
        onClick: c,
        currentValueA11yLabel: (0, nG.I9)(d),
        "aria-haspopup": "dialog",
        displayName: a,
        displayNameStyles: d,
        disabled: r,
    });
}
var ii = n(887988),
    il = n(366010),
    ir = n(674658),
    is = n(617061),
    ia = n(203632),
    io = n(536572);
let iu = new Set(),
    id = 0;
var ic = n(993408),
    ig = n(841702),
    im = n(515718),
    ih = n(94039);
function ip(e) {
    "" !== e.thumbnailPreviewSrc && (0, im.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var ix = n(599752),
    iA = n(249360);
let iI =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    iv =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ij(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, ny.Ay)(),
        d = (0, il.M)(u) ? iI : iv,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, ig.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ic.wo)(r, i), [r, i]),
                a = (0, ih.A)({ enabled: t, isInteracting: n, items: s, preload: ip });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((id += 1), iu.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: ix.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: ix.QQ }),
                m?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(ix.yY, { [iA.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(O.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: ia.HL.FromStart,
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
function ib(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([z.A], () => (null != n ? z.A.getGuild(n) : null)),
        g = (0, ep.N2)({ user: t }),
        m = (0, ep.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, ep.nZ)(n ?? void 0),
        h = void 0 !== f,
        p = null === f || (!h && null == m),
        x = d && null != g,
        A = (0, ep.lw)({ pendingValue: f, userValue: g, guildValue: m, guildId: n ?? void 0 }),
        { product: I } = (0, ir.q)(A?.skuId),
        v = h ? null != f : null != m,
        j =
            null != A && v
                ? {
                      onClick: () => (0, th.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(x ? eU.t["SQy/Po"] : eU.t.uMuafO),
                  }
                : void 0,
        y = l.useCallback(() => {
            (0, is.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nM.A, {
        buttonRef: o,
        affordance: p && !x ? "add" : j,
        variant: s,
        onClick: y,
        fieldA11yLabel: eU.intl.string(eU.t.wR5wOo),
        editButtonA11yLabel: eU.intl.string(eU.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t["1M4m8w"] : eU.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, io.VG)(I), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ij, { effect: A, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var iy = n(163697),
    iC = n(515727),
    iE = n(746002);
function iS(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, iE.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: iE.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, im.NN)(n).catch(() => {});
        });
}
var iN = n(715196);
function ik(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function iT(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, ny.Ay)(),
        d = (0, il.M)(u) ? iI : iv,
        c = (0, L.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, ig.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ic.MG)(r, i), [r, i]);
            return (0, ih.A)({ enabled: t, isInteracting: n, items: s, preload: iS });
        })({ enabled: n && !r && !o, isInteracting: a }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: h, profileFrameClassName: p } =
            null != f ? (0, iy.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != f &&
                (0, i.jsx)("div", {
                    className: s()(iN.hm, p, { [iA.O]: m }),
                    style: h,
                    "aria-hidden": m,
                    children: (0, i.jsx)(w.A, { frame: f, filterLayer: ik, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(iN.ti, { [iN.yT]: null == f }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: iN.QQ, draggable: !1 }),
            }),
        ],
    });
}
function iP(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        u = null != n,
        d = (0, a.bG)([z.A], () => (null != n ? z.A.getGuild(n) : null)),
        c = (0, ep.Xf)({ user: t }),
        g = (0, ep.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: m } = (0, ep.Tu)(n ?? void 0),
        f = void 0 !== m,
        h = null === m || (!f && null == g),
        p = u && null != c,
        x = (0, ep.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, ir.q)(x?.skuId),
        I = f ? null != m : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, th.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(p ? eU.t.j6hZyM : eU.t.nQBruk),
                  }
                : void 0,
        j = l.useCallback(() => {
            (0, iC.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nM.A, {
        buttonRef: s,
        affordance: h && !p ? "add" : v,
        variant: "square",
        onClick: j,
        fieldA11yLabel: eU.intl.string(eU.t.GWrZOd),
        editButtonA11yLabel: eU.intl.string(eU.t["oTSa/q"]),
        currentValueA11yLabel: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t.yFeGB5 : eU.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, io.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iT, {
                profileFramePreview: x,
                isEmpty: h,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var iO = n(684732),
    iR = n(498596),
    iL = n(871524);
function i_(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nO.Hl)(t)}, ${(0, nO.Hl)(n)})`;
    return (0, i.jsx)("div", { className: iL.D7, style: { background: r }, children: l });
}
function iw(e) {
    let { color: t } = e,
        n = (0, nO.Hl)(t),
        l = (0, nO.bJ)(t, 0xffffff) < iR.Tr.NonText;
    return (0, i.jsx)("div", {
        className: iL.OS,
        children: (0, i.jsx)("div", { className: s()(iL.Hy, { [iL.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iM(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e7.D, {
        ...a,
        innerRef: s ?? o,
        className: iL.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(iw, { color: t }),
    });
}
function iD(e) {
    let {
        color: t,
        ariaLabel: n,
        ariaDescribedBy: l,
        suggestedColors: r,
        disabled: s,
        isOpen: a,
        onRequestOpen: o,
        onRequestClose: u,
        onSelect: d,
        buttonRef: c,
    } = e;
    return (0, i.jsx)(nL.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(n_.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(iM, {
                color: t,
                onClick: r,
                disabled: s,
                buttonRef: c,
                "aria-label": n,
                "aria-describedby": l,
                ...a,
            });
        },
    });
}
function iG(e) {
    let {
            fieldA11yLabel: t,
            primaryColor: n,
            secondaryColor: r,
            onSelectPrimaryColor: s,
            onSelectSecondaryColor: a,
            suggestedColors: o,
            disabled: u = !1,
            deleteButton: d,
            variant: c = "square",
            initialOpenPopout: g,
        } = e,
        [f, h] = l.useState(null),
        p = l.useRef(null),
        x = l.useRef(null),
        A = (0, nO.Hl)(n),
        I = (0, nO.Hl)(r),
        v = l.useId(),
        j = l.useId();
    l.useEffect(() => {
        if (null == g) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === g ? p : x;
            (e.current?.focus(), h(g));
        });
        return () => cancelAnimationFrame(e);
    }, [g]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), p.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsxs)(nM.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: b,
        children: [
            (0, i.jsx)(m.A, { id: v, children: eU.intl.formatToPlainString(eU.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(m.A, { id: j, children: eU.intl.formatToPlainString(eU.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(i_, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iD, {
                        color: n,
                        ariaLabel: eU.intl.string(eU.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: u,
                        isOpen: "theme-primary" === f,
                        onRequestOpen: () => h("theme-primary"),
                        onRequestClose: () => h(null),
                        buttonRef: p,
                    }),
                    (0, i.jsx)(iD, {
                        color: r,
                        ariaLabel: eU.intl.string(eU.t.stG76C),
                        ariaDescribedBy: j,
                        suggestedColors: o,
                        onSelect: a,
                        disabled: u,
                        isOpen: "theme-secondary" === f,
                        onRequestOpen: () => h("theme-secondary"),
                        onRequestClose: () => h(null),
                        buttonRef: x,
                    }),
                ],
            }),
        ],
    });
}
function iU(e) {
    let { user: t, guildId: n, disabled: r = !1 } = e,
        s = (0, ee.Ay)(t.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: u,
            pendingAvatar: d,
        } = (0, a.cf)([eI.A, Q.A], () => {
            let e = eI.A.getPendingChanges(n ?? void 0),
                i = Q.A.getUserProfile(t.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (Q.A.getGuildMemberProfile(t.id, n)?.themeColors ?? null) : i,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== u ? u : o,
        g = (0, ex.V7)({ userId: t.id, image: d }),
        { primaryColor: m, secondaryColor: f } = (0, el.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: u,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        h = (0, nR.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nw.rh)(x, h, !1),
        I = l.useCallback(
            (e) => {
                (0, th.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, iO.l)(u, o)
                ? {
                      onClick: () => (0, th.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eU.intl.string(eU.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, i.jsx)(iG, {
              fieldA11yLabel: eU.intl.string(eU.t.DMeO2X),
              primaryColor: m,
              secondaryColor: f,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && I([e, f]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && I([m, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: v,
          });
}
var iF = n(629985);
function iB(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(f.F, { children: (0, i.jsx)("div", { className: s()(iF.k, { [iF.V]: n }), children: t }) });
}
var iW = n(516521),
    iV = n(424290);
function iH(e) {
    let { children: t } = e;
    return (0, i.jsx)(iW.zC, { className: iV.X, children: (0, i.jsx)("div", { className: iV.Q, children: t }) });
}
var iz = n(77528),
    iY = n(811611),
    iK = n(976860),
    iq = n(38145);
function iX() {
    return l.useCallback(() => {
        ((0, iK.pX)(T.BVt.NITRO_HOME), (0, iq.M)());
    }, []);
}
var iZ = n(423814),
    i$ = n(511484),
    iJ = n(682901);
function iQ(e) {
    let t = (0, a.bG)([C.default], () => Z.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, iZ.O)();
    return t
        ? eU.intl.string(eU.t.AfRWI8)
        : (0, i$.U9)(n, iJ.pe.TIER_2) && n?.discount.amount != null
          ? eU.intl.formatToPlainString(eU.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var i0 = n(155053);
function i1() {
    let e = (0, iz.V)();
    return e?.subscriptionTrial?.skuId === iJ.pe.TIER_2 ? e : null;
}
function i6() {
    let e = iQ(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(nI.A, { subscriptionTier: iJ.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function i2(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iX(),
        a = (0, Z.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iY.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: i0.nH,
        children: [
            (0, i.jsxs)("div", {
                className: i0.qf,
                children: [
                    (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: eU.intl.string(eU.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(nc.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eK.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eU.intl.format(eU.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nI.A, {
                subscriptionTier: iJ.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eK.E, { variant: "body-xs/normal", color: "text-muted", className: i0.u8, children: o }),
        ],
    });
}
function i4() {
    let e = i1();
    return null == e ? (0, i.jsx)(i6, {}) : (0, i.jsx)(i2, { trialOffer: e });
}
var i3 = n(55619),
    i8 = n(848717);
function i7() {
    return (0, i.jsxs)("div", {
        className: i8.k,
        children: [
            (0, i.jsx)(eK.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eU.intl.string(eU.t.JFY17v),
            }),
            (0, i.jsx)(ng.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eU.intl.string(eU.t.R9GHya),
                onClick: function () {
                    return i3.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var i5 = n(342866),
    i9 = n(968475);
function le(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eI.A], () => ({
            pendingAvatar: eI.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eI.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(i5.A, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nG.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? i9.$T : void 0,
    });
}
function lt(e) {
    let { userId: t, ...n } = e,
        l = (0, ee.Ay)(t),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [eI.A, Q.A],
            () => ({
                pendingBanner: eI.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eI.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: Q.A.getUserProfile(t)?.banner,
            }),
            [t],
        ),
        u = void 0 !== s ? s : r,
        d = null != u ? u.description : void 0,
        c =
            null != d
                ? (function (e) {
                      if (e.length <= 25) return e;
                      let t = e.lastIndexOf(" ", 25),
                          n = t > 0 ? e.slice(0, t) : e.slice(0, 25);
                      return eU.intl.formatToPlainString(eU.t.OIhEjF, { truncatedText: n });
                  })(d)
                : (0, nG.ID)(u, o);
    return (0, i.jsx)(nH, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function ln(e) {
    let { user: t, ...n } = e,
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([eI.A], () => ({
            pendingDisplayNameStyles: eI.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eI.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eI.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([C.default], () => ({ globalName: C.default.getCurrentUser()?.globalName ?? null })).globalName,
        u = void 0 !== r ? r : l,
        d = (0, ep.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(nQ, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nG.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function li(e) {
    let t = (0, ee.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: i,
            pendingAvatar: l,
        } = (0, a.cf)([eI.A], () => ({
            tryItOutThemeColors: eI.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eI.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eI.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, ex.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, el.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function ll(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = li(t),
        u = (0, nR.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nw.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nN.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iG, {
              fieldA11yLabel: eU.intl.string(eU.t["/WsW/1"]),
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
              initialOpenPopout: n,
          });
}
function lr(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = li(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, nO.Hl)(s),
        c = (0, nO.Hl)(a);
    return (0, i.jsxs)(nM.Y, {
        fieldA11yLabel: eU.intl.string(eU.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(m.A, { id: o, children: eU.intl.formatToPlainString(eU.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(m.A, { id: u, children: eU.intl.formatToPlainString(eU.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(i_, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(iM, {
                        color: s,
                        onClick: n,
                        "aria-label": eU.intl.string(eU.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(iM, {
                        color: a,
                        onClick: r,
                        "aria-label": eU.intl.string(eU.t.stG76C),
                        "aria-describedby": u,
                    }),
                ],
            }),
        ],
    });
}
var ls = n(847081);
function la(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = na(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, b.Ay)();
            return l.useCallback(() => {
                (0, nK.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nz._)({ isPremiumTryItOut: !0, returnRef: s }),
        m = (0, nz.P)({ isPremiumTryItOut: !0, returnRef: a }),
        f = "edit" === n;
    return (
        l.useEffect(() => {
            if (f && !o.current) {
                switch (u) {
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
        }, [u, f, c, g, m]),
        (0, i.jsxs)("div", {
            className: ls.T,
            children: [
                (0, i.jsx)(n2, {
                    heading: eU.intl.string(eU.t.NEzEws),
                    children: (0, i.jsx)(ln, {
                        user: t,
                        buttonRef: r,
                        onClick: f ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n2, {
                    heading: eU.intl.string(eU.t.DMeO2X),
                    children: f
                        ? (0, i.jsx)(ll, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(lr, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(n2, {
                    heading: eU.intl.string(eU.t.Vgdusv),
                    children: (0, i.jsx)(lt, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: f ? m : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n2, {
                    heading: eU.intl.string(eU.t.Dt3ZUr),
                    children: (0, i.jsx)(le, {
                        user: t,
                        buttonRef: s,
                        onClick: f ? g : () => d({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var lo = n(847374),
    lu = n(111159),
    ld = n(682163),
    lc = n(711014),
    lg = n(941030),
    lm = n(561392),
    lf = n(286615),
    lh = n(15626),
    lp = n(715022),
    lx = n(44482),
    lA = n(470791);
function lI(e) {
    let {
            options: t,
            value: n,
            onSelectionChange: r,
            label: a,
            className: o,
            listboxClassName: u,
            disabled: d = !1,
            loading: c = !1,
            maxOptionsVisible: g = 5,
            renderListItem: f,
            children: h,
        } = e,
        {
            isOpen: p,
            setIsOpen: x,
            refs: A,
            floatingStyles: I,
            getReferenceProps: v,
            getFloatingProps: j,
            transitionStyles: b,
        } = (function () {
            let { reducedMotion: e } = l.useContext(ek.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, lm.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, lf.DL)(o, {
                    common: { transformOrigin: "top left" },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            return {
                isOpen: t,
                setIsOpen: n,
                refs: i,
                floatingStyles: r,
                getReferenceProps: s,
                getFloatingProps: a,
                transitionStyles: e.enabled ? {} : u,
            };
        })(),
        { setFloating: y } = A,
        C = l.useContext(lh._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, O] = l.useState(null),
        R = null != P ? (0, lp.ZN)(N, P) : void 0,
        L = l.useRef(!1),
        _ = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, lp.fI)(e.value, [n])), [n, t]),
        M = l.useCallback(() => {
            d || x(!p);
        }, [d, x, p]),
        D = l.useCallback(
            (e) => {
                p && 0 === e.button && e.preventDefault();
            },
            [p],
        ),
        G = l.useCallback(() => {
            (x(!1), k.current?.focus());
        }, [x]),
        U = l.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (_.current) {
                        _.current = !1;
                        return;
                    }
                    if (p && null != P) {
                        let e = t[P];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    p && x(!1);
                }
            },
            [p, P, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (d) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [d, r, G],
        ),
        { activeIndex: B, handleKeyDown: W } = (0, lg.l)(!0, t),
        V = l.useRef(null);
    l.useEffect(() => {
        let e = B !== V.current;
        ((V.current = B), null != B && e && (O(B), p || ((L.current = !0), x(!0))));
    }, [B, p, x]);
    let H = l.useCallback(
            (e) => {
                if (d) return;
                let n = t.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let t = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !p || e.altKey)) {
                            p || x(!0);
                            return;
                        }
                        O((e) => (null === e ? 0 : Math.min(e + t, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let i = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && p)) {
                            if (null != P) {
                                let e = t[P];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!p) return void x(!0);
                        O((e) => (null === e ? 0 : Math.max(e - i, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !p)) return void x(!0);
                        if (null == P || P > n - 1) return;
                        {
                            let e = t[P];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        (O(0), p || ((L.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        (O(n - 1), p || ((L.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (p && null != P) {
                            let e = t[P];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((_.current = !0), x(!1));
                        break;
                    case "Escape":
                        p && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        W(e);
                }
            },
            [d, p, t, P, F, G, r, x, W],
        ),
        z = Math.max(
            t.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = l.useRef(!1);
    l.useEffect(() => {
        c || !p || Y.current
            ? p || ((Y.current = !1), O(null), (L.current = !1))
            : ((Y.current = !0), L.current || O(t.length > 0 ? z : null), (L.current = !1), k.current?.focus());
    }, [c, p, z, t.length]);
    let K = {
        id: S,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": p ? N : void 0,
        "aria-expanded": p,
        "aria-activedescendant": R,
        "aria-disabled": !!d || void 0,
        "aria-labelledby": null != a ? `${E} ${S}` : void 0,
        "aria-errormessage": C?.errorMessageId,
        "aria-invalid": C?.errorMessageId != null || void 0,
        "aria-describedby": C?.describedById,
        onClick: M,
        onMouseDown: D,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, i.jsxs)("div", {
        ref: (e) => {
            ((T.current = e), A.setReference(e));
        },
        className: o,
        ...v(),
        children: [
            null != a && (0, i.jsx)(m.A, { tag: "label", id: E, htmlFor: S, children: a }),
            h({ buttonRef: k, selectButtonProps: K }),
            !d &&
                p &&
                (0, i.jsx)("div", {
                    ref: y,
                    className: s()(lA.S_, u),
                    ...j(),
                    style: { ...I, ...b },
                    children: (0, i.jsx)(lg.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != f ? f(e) : (0, i.jsx)(lx.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var lv = n(216384);
let lj = "MAIN_PROFILE";
function lb(e) {
    let { guild: t } = e;
    return (0, i.jsx)(ld.Ay, { className: lv.$f, guild: t, size: ld.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function ly(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: lv.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: lv.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: lv.qL,
                children: [
                    (0, i.jsx)(eK.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
function lC(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e7.D, {
        innerRef: r,
        className: s()(lv.L5, { [lv.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eK.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: lv.v9,
                children: n,
            }),
            (0, i.jsx)(lo.ChevronSmallDownIcon, {
                className: lv.u4,
                size: "sm",
                color: !0 === l ? p.A.colors.ICON_MUTED : p.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lE(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([lc.Ay], () => lc.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([z.A], () => z.A.getGuilds()),
        c = (0, a.bG)([ti.A], () => {
            let e = ti.A.getGuildId();
            return null == e || eI._.has(e) ? null : e;
        }),
        g = (0, a.cf)([eA.Ay, lc.Ay], () => {
            let e = {};
            for (let t of lc.Ay.getFlattenedGuildIds()) {
                let n = eA.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        m = l.useMemo(() => {
            let e = {
                    id: lj,
                    label: eU.intl.string(eU.t["2p07FR"]),
                    value: lj,
                    leading: (0, i.jsx)(lu.ClydeIcon, { size: "refresh_sm", color: p.A.colors.ICON_DEFAULT }),
                },
                t = n ?? c,
                l = u
                    .map((e) => {
                        if (e === t) return null;
                        let n = d[e];
                        return null == n
                            ? null
                            : {
                                  id: n.id,
                                  label: n.name,
                                  value: n.id,
                                  leading: (0, i.jsx)(lb, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(ed.Vq),
                r = null != t ? d[t] : null;
            return null == r
                ? [e, ...l]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, i.jsx)(lb, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        f = t ?? lj,
        h = m.find((e) => e.value === f) ?? m[0],
        x = l.useCallback(
            (e) => {
                let n = e === lj ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lI, {
        className: lv.kL,
        label: eU.intl.string(eU.t.rki38K),
        listboxClassName: lv.yt,
        options: m,
        value: f,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(ly, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lC, { leading: h.value === lj ? null : h.leading, label: h.label, disabled: o, ...e }),
    });
}
var lS = n(701256),
    lN = n(288490);
let lk = "profile-editing-nameplate-error",
    lT = "profile-editing-avatar-error",
    lP = "profile-editing-avatar-decoration-error",
    lO = "profile-editing-banner-error",
    lR = "profile-editing-display-name-style-error";
function lL(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lN.D0, t),
        children: (0, i.jsx)("div", { className: lN.ZN, children: (0, i.jsx)(no.LockIcon, { size: "xs" }) }),
    });
}
function l_() {
    let [e, t] = (0, nh.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lN.X6,
              children: [
                  (0, i.jsx)(eK.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eU.intl.string(eU.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e7.D, {
                      "aria-label": eU.intl.string(eU.t.rSe9ra),
                      className: lN.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(nu.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lw() {
    let e = iX(),
        t = iQ(eU.intl.string(eU.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lN.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lN.tm,
                children: [
                    (0, i.jsx)(nd.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eU.intl.string(eU.t.bO0TOe),
                    }),
                    (0, i.jsx)(eK.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eU.intl.format(eU.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(nI.A, { subscriptionTier: iJ.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lL, { className: lN.nd }),
        ],
    });
}
function lM() {
    return (0, i.jsx)(eK.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lN.BJ,
        "aria-hidden": !0,
        children: eU.intl.format(eU.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(to.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lN.qp }),
        }),
    });
}
function lD(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(n2, {
        heading: eU.intl.string(eU.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(ii.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lk : void 0 }),
            (0, i.jsx)(n4, { id: lk, message: r }),
        ],
    });
}
function lG(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(n2, {
        heading: eU.intl.string(eU.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nT.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lT : void 0 }),
            (0, i.jsx)(nP.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lP : void 0 }),
            (0, i.jsx)(n4, { id: lT, message: (0, nv.d3)(r) }),
            (0, i.jsx)(n4, { id: lP, message: s }),
        ],
    });
}
function lU(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eD.kn)(l ? [] : [eS.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === eS.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        { pendingDisplayNameStyles: u } = (0, ep.B0)(t, n ?? void 0),
        d = (0, np.A)({
            userId: t.id,
            guildId: n ?? void 0,
            pendingDisplayNameStyles: u,
            ignoreDisabledStylesSetting: !0,
        }),
        { showCampaignPromo: c, showCampaignNewBadge: g } = (0, nA.hh)({
            location: "UserProfileModalV2EditingPanel",
            displayNameStyles: d,
            disabled: l,
        });
    return (0, i.jsxs)(n2, {
        heading: eU.intl.string(eU.t.NEzEws),
        description: c ? eU.intl.string(lS.default.WyZOg3) : void 0,
        disabled: l,
        showNitroIcon: !0,
        badge:
            o || g
                ? (0, i.jsx)("div", {
                      className: lN.IO,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(nc.E, { type: "new", variant: "primary" }),
                  })
                : void 0,
        children: [
            (0, i.jsx)(n0, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lR : void 0,
                onOpen: o ? () => a(eG.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(n4, { id: lR, message: r }),
        ],
    });
}
function lF(e) {
    let { user: t, disabled: n } = e,
        { showCampaignFontBadge: l, dismissCampaignFontBadge: r } = (0, nA.wP)("UserProfileModalV2EditingPanel");
    return (0, i.jsx)(n2, {
        heading: eU.intl.string(eU.t.NEzEws),
        description: eU.intl.string(lS.default.WyZOg3),
        disabled: n,
        badge: l
            ? (0, i.jsx)("div", {
                  className: lN.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(nc.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: (0, i.jsx)(it, { user: t, disabled: n, onOpen: l ? r : void 0 }),
    });
}
function lB(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(n2, {
        heading: eU.intl.string(eU.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iU, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nY, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lO : void 0 }),
            (0, i.jsx)(n4, { id: lO, message: (0, nv.d3)(s) }),
        ],
    });
}
function lW(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(n2, {
        heading: eU.intl.string(eU.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nD, { user: t, disabled: n }),
    });
}
function lV(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(n2, {
        heading: eU.intl.string(eU.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(ib, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(iP, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lH = "premium-try-it-out-description";
function lz(e) {
    let { user: t } = e,
        n = iX(),
        { navigate: l } = na();
    return (
        nk(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lH,
            className: lN.DX,
            children: [
                (0, i.jsx)(lL, { className: lN.x$ }),
                (0, i.jsxs)("div", {
                    className: lN.sb,
                    children: [
                        (0, i.jsx)(eK.E, {
                            id: lH,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eU.intl.format(eU.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(ng.$, {
                            variant: "primary",
                            size: "sm",
                            icon: nm.EyeIcon,
                            text: eU.intl.string(eU.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(la, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lY(e) {
    let {
            user: t,
            panelId: n,
            selectedGuildId: l,
            originGuildId: r,
            isLoading: s,
            isEditingDisabled: o,
            collapseButtonRef: u,
            onClosePanel: d,
            onSelectGuildId: c,
        } = e,
        g = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        m = (0, nt.A)(c),
        f = null != l,
        h = Z.Ay.canUsePremiumProfileCustomization(t),
        p = f && !h,
        x = !h && !f,
        A = (0, nx.Lz)(ie.vB.DISPLAY_NAME_STYLE, "UserProfileModalV2EditingPanel"),
        I = x && A === ie.S9.SELECTABLE,
        v = f && !h && !g,
        j = s || o,
        b = (0, a.bG)([eI.A], () => eI.A.getErrors(l)),
        y = b.nameplate?.[0] ?? b.nameplate_sku_id?.[0],
        C = b.avatar?.[0],
        E = b.avatar_decoration_sku_id?.[0],
        S = b.banner?.[0],
        N = b.display_name_font_id?.[0] ?? b.display_name_effect_id?.[0] ?? b.display_name_colors?.[0];
    return (0, i.jsxs)(iB, {
        hasGradientBackground: v,
        children: [
            (0, i.jsxs)("div", {
                className: lN.wx,
                children: [
                    (0, i.jsx)(tz.m, {
                        text: eU.intl.string(eU.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ne.K, {
                            buttonRef: u,
                            "aria-label": eU.intl.string(eU.t["l/A351"]),
                            icon: nf.DoubleChevronSmallRightIcon,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lE, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: m,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(i7, {})
                : (0, i.jsx)(iH, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              f && (h ? (0, i.jsx)(l_, {}) : (0, i.jsx)(lw, {})),
                              h && (0, i.jsx)(lM, {}),
                              (0, i.jsx)(lD, { user: t, guildId: l, disabled: j || p, errorMessage: y }),
                              (0, i.jsx)(lG, {
                                  user: t,
                                  guildId: l,
                                  disabled: j || p,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: E,
                              }),
                              h || f
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lU, { user: t, guildId: l, disabled: j || p, errorMessage: N }),
                                            (0, i.jsx)(lB, {
                                                user: t,
                                                guildId: l,
                                                disabled: j || p,
                                                canUsePremiumProfileFeatures: h,
                                                bannerErrorMessage: S,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lW, { user: t, disabled: j || p }),
                              (0, i.jsx)(lV, { user: t, guildId: l, disabled: j || p }),
                              I && (0, i.jsx)(lF, { user: t, disabled: j }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lz, { user: t }), (0, i.jsx)(i4, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lK = n(156150),
    lq = n(110654);
function lX(e) {
    return null;
}
function lZ(e) {
    let { activeSlide: t, direction: n, onTransitionComplete: r, children: a } = e,
        o = new Map(a.map((e) => [e.props.id, e]));
    if (!o.has(t)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [u, c] = l.useState(t),
        [g, m] = l.useState(!1),
        f = "forwards" === n ? 1 : -1,
        h = (0, d.p)(
            t,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => m(!0),
                onRest: (e, n) => {
                    let { item: i } = n;
                    e.finished && i === t && (m(!1), i !== u && (c(t), r()));
                },
            },
            "respect-motion-settings",
        ),
        p = g || t !== u;
    return (0, i.jsx)("div", {
        className: s()(lq.kL, p && lq.ez),
        children: (0, i.jsx)("div", {
            className: lq.u4,
            children: h((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lK.animated.div,
                          {
                              className: lq.M6,
                              style: p
                                  ? { transform: e.offset.to((e) => `translate3d(${e * f * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: p || t !== u,
                              "aria-hidden": p || t !== u,
                              children: r.props.children,
                          },
                          l,
                      );
            }),
        }),
    });
}
var l$ = n(926321),
    lJ = n(477155),
    lQ = n(561243),
    l0 = n(206697),
    l1 = n(280406);
let l6 = "shuffle-options-a11y-description";
function l2(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(ng.$, {
                icon: l$.DiceIcon,
                text: eU.intl.string(eU.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": l6,
                fullWidth: !0,
            }),
            (0, i.jsx)(m.A, { id: l6, children: eU.intl.string(eU.t.bBRdiB) }),
        ],
    });
}
function l4(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nk(),
        s = i1();
    return (0, i.jsxs)(iB, {
        children: [
            (0, i.jsxs)("div", {
                className: l1.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: l1.FS,
                        children: (0, i.jsx)(tz.m, {
                            text: eU.intl.string(eU.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(ne.K, {
                                buttonRef: l,
                                "aria-label": eU.intl.string(eU.t["4IYwrw"]),
                                icon: lJ.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nd.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: l1.R_,
                        children: eU.intl.string(eU.t.PxUx8e),
                    }),
                    (0, i.jsx)(eK.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: l1.Ij,
                        children: eU.intl.string(eU.t.X0ir7L),
                    }),
                    (0, i.jsx)(l2, { className: l1.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iH, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(la, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(i2, {
                                trialOffer: s,
                                onSubscribeClick: l0.t,
                                onSubscribeSuccess: l0.T,
                                onSubscribeClose: lQ.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var l3 = n(199016);
let l8 = "user-profile-editing-panel",
    l7 = "profile-modal-editing-panel-heading";
function l5(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tz.m, {
        text: eU.intl.string(eU.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e7.D, {
            innerRef: l,
            "aria-label": eU.intl.string(eU.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": l8,
            className: s()(l3.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t9.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function l9(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tz.m, {
            text: eU.intl.string(eU.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(ne.K, {
                buttonRef: l,
                "aria-label": eU.intl.string(eU.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": l8,
                icon: t9.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function re(e) {
    let {
            selectedGuildId: t,
            originGuildId: n,
            onSelectGuildId: r,
            isLoading: o = !1,
            isEditingDisabled: u = !1,
            onClose: d,
            className: c,
            collapseButtonRef: g,
        } = e,
        h = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        { selectedPanel: p, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = na(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == h)
        ? null
        : (0, i.jsx)("aside", {
              id: l8,
              "aria-labelledby": l7,
              className: s()(l3.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: l3.l$,
                  children: [
                      (0, i.jsx)(m.A, {
                          children: (0, i.jsx)(f.H, { id: l7, children: eU.intl.string(eU.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lZ, {
                          activeSlide: p.id,
                          direction: "premiumTryItOut" === p.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lX, {
                                  id: "default",
                                  children: (0, i.jsx)(lY, {
                                      panelId: l8,
                                      user: h,
                                      selectedGuildId: t,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: u,
                                      collapseButtonRef: g,
                                      onClosePanel: d,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, i.jsx)(lX, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(l4, { user: h, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var rt = n(425763),
    rn = n(447453),
    ri = n(46653),
    rl = n(783420),
    rr = n(874402);
function rs() {
    let e = ns(),
        { goBack: t } = na(),
        n = iQ(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(rl.A, {
        subscriptionTier: iJ.pe.TIER_2,
        onClick: l0.t,
        onSubscribeModalClose: (e) => {
            (e && (0, l0.T)(), (0, lQ.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(rr.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eU.intl.string(eU.t.X0ir7L),
                a11yAnnounceOnShow: eU.intl.string(eU.t.X0ir7L),
                a11yAnnounceOnHide: eU.intl.string(eU.t.ZcyFYa),
                secondaryAction: { text: eU.intl.string(eU.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: to.NitroWheelIcon, variant: "expressive" },
            });
        },
    });
}
var ra = n(803306),
    ro = n(631670),
    ru = n(682618),
    rd = n(856383),
    rc = n(234e3),
    rg = n(159001),
    rm = n(933725),
    rf = n(189916),
    rh = n(188567),
    rp = n(435911),
    rx = n(646976),
    rA = n(289173),
    rI = n(958805),
    rv = n(61881),
    rj = n(735321),
    rb = n(624826),
    ry = n(419490),
    rC = n(489496),
    rE = n(132319),
    rS = n(696016),
    rN = n(384377),
    rk = n(518477);
function rT(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, $.NJ)(),
        [r, s] = l.useState(!1),
        [o, u] = l.useState(!1),
        {
            widgetsToSave: d,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: m,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([rv.A], () => rv.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rv.A], () => rv.A.getChangedWidgets()),
                n = (0, a.yK)([rv.A], () => rv.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rv.A], () => ({
                    hasUnsavedWidgets: rv.A.hasUnsavedChanges(),
                    canSaveWidgets: rv.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        {
            hasUnsavedProfileChanges: h,
            canSubmitProfileChanges: p,
            hasBadgeChangesToSave: x,
        } = (0, a.cf)([eI.A], () => ({
            hasUnsavedProfileChanges: eI.A.hasUnsavedChanges(),
            canSubmitProfileChanges: eI.A.canSubmit(),
            hasBadgeChangesToSave: (0, rc.gz)(eI.A.getPendingChanges()),
        })),
        A = m || h || x,
        I = m && !f,
        v = l.useCallback(() => {
            (rI.A.clearPendingWidgets(), (0, nN.XQ)());
        }, []),
        j = l.useCallback(async () => {
            if (!eI.A.canSubmit()) return;
            u(!0);
            let e = !0;
            if (x) {
                let t = eI.A.getPendingChanges(),
                    n = await (async function (e) {
                        let { displayOrder: t, hiddenBadges: n } = e,
                            i = {
                                ...(null != t ? { display_order: t } : {}),
                                ...(null != n ? { hidden_badges: n } : {}),
                            };
                        if (0 === Object.keys(i).length) return !0;
                        try {
                            return (
                                await E.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0
                            );
                        } catch (e) {
                            return (rd.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, ra.eO)(e).catch(() => {})), await (0, ru.RS)(), (0, rc.Jp)());
                }
                e = n;
            }
            if (h)
                try {
                    if (null == t) {
                        let t = eI.A.getPendingChanges(),
                            n = (0, rp.Sk)(t),
                            i = (0, rp.yX)(t),
                            l =
                                (0, rf.Jy)(n.displayNameStyles) &&
                                !(0, rf.Jy)(C.default.getCurrentUser()?.displayNameStyles);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, ro._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rb.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    l &&
                                        (0, n8.Cy)({
                                            perks: [ie.vB.DISPLAY_NAME_STYLE],
                                            content: n9.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n8.rl.USER_PROFILE,
                                        }),
                                    (0, ro.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nN.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nN.RE)());
                        }
                    } else {
                        let n = eI.A.getPendingChanges(t),
                            i = (0, rp.C5)(n),
                            l = (0, rp.yX)(n, t),
                            r = C.default.getCurrentUser()?.id,
                            s =
                                (0, rf.Jy)(i.displayNameStyles) &&
                                null != r &&
                                !(0, rf.Jy)(eA.Ay.getMember(t, r)?.displayNameStyles);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, rg.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rb.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    s &&
                                        (0, n8.Cy)({
                                            perks: [ie.vB.DISPLAY_NAME_STYLE],
                                            content: n9.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n8.rl.GUILD_PROFILE,
                                        }),
                                    (0, ro.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nN.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nN.RE)());
                        }
                    }
                    let n = (0, rp.yg)(eI.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, rm.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, ro.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (m)
                try {
                    let e = (0, rj.BF)();
                    for (let t of (await rI.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, rA.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof rx.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof rx.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = ry.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, rE.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rC.Yy)(e, { name: t });
                                    } catch (e) {
                                        rS.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, ro.x8)() : (0, rN.XA)(rk.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
        }, [h, x, m, d, c, g, n, t]);
    return (
        l.useEffect(() => {
            let e = null;
            function t() {
                (null != e && clearTimeout(e),
                    s(!0),
                    (e = setTimeout(() => {
                        s(!1);
                    }, 2500)));
            }
            return (
                rh._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rh._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(rr.$, {
            preventsPopoutDismiss: !0,
            isVisible: A,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eU.intl.string(eU.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eU.intl.string(eU.t["0Y/qkL"]),
            secondaryAction: { text: eU.intl.string(eU.t.yBZMsQ), onClick: v, disabled: !A || o },
            primaryAction: { text: eU.intl.string(eU.t["R3BPH+"]), onClick: j, loading: o, disabled: !(!I && p) || !A },
        })
    );
}
var rP = n(485745),
    rO = n(893757);
function rR() {
    let e = (0, rt.VU)(),
        t = (0, rP.A)(),
        n = ns();
    return e ? "dnd" : n ? "premium-try-it-out" : t ? "save" : null;
}
function rL(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId() === t),
        u = rR(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rO.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(rn.S, { className: rO.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(rs, {})
                        : "save" === d
                          ? (0, i.jsx)(rT, { guildId: n })
                          : null,
          })
        : null;
}
var r_ = n(34011),
    rw = n(629403),
    rM = n(612630),
    rD = n(61426);
function rG(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rM.A)(t),
        [g, m] = l.useState(),
        [f, h] = l.useState(),
        p = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (h(void 0), m(e), o?.());
                    try {
                        await rw.A.updateNote(t, e);
                    } catch {
                        h(eU.intl.string(eU.t.F8FvUy));
                    }
                }
            },
            [t, c, o],
        ),
        A = d && null == p,
        I = l.useRef(null),
        v = l.useRef(!1);
    if (
        (l.useEffect(() => {
            !r || u || d || v.current || ((v.current = !0), I.current?.focus({ preventScroll: !0 }));
        }, [r, u, d]),
        u)
    )
        return null;
    let j =
        null != p && p.length > 0
            ? (0, i.jsx)(eK.E, { variant: "body-sm/normal", color: "text-default", className: rD.t, children: p })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tI.kL, n),
        children: (0, i.jsx)(r_.w, {
            inputRef: I,
            value: p ?? "",
            onCommit: x,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: !0,
            paddingBlock: "md",
            scrollIntoViewOnFocus: !0,
            preview: j,
            label: eU.intl.string(eU.t.PbMNh2),
            placeholder: A ? eU.intl.string(eU.t["WLKx/9"]) : eU.intl.string(eU.t.VBhOe2),
            maxLength: 256,
            disabled: A,
            error: f,
        }),
    });
}
var rU = n(793222);
function rF(e) {
    let { userId: t } = e,
        n = (0, eC.g)(),
        { trackUserProfileAction: l } = (0, $.NJ)();
    return (0, i.jsx)(tm, {
        heading: eU.intl.string(eU.t["mQKv+v"]),
        scrollTargetId: rk.bk.NOTE,
        children: (0, i.jsx)(rG, {
            userId: t,
            className: rU.N,
            autoFocus: n === rk.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rB = n(123292),
    rW = n(667242);
function rV(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rW.kL,
            children: (0, i.jsxs)("div", {
                className: rW.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rW.Kk, children: t }),
                    (0, i.jsx)(eK.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rW.hP,
                            children: (0, i.jsx)(rB.Q, {
                                buttonRef: d,
                                variant: "primary",
                                textVariant: "body-sm/semibold",
                                text: r,
                                onClick: s,
                                disabled: a,
                            }),
                        }),
                ],
            }),
        })
    );
}
var rH = n(346055),
    rz = n(289873),
    rY = n(615019);
function rK(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && nb.O.announce(eU.intl.string(eU.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rH.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rY.f, t && rY.z),
                    children: n && (0, i.jsx)(rz.y, { type: rz.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rq = n(568602);
function rX(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rv.A, eI.A], () => rv.A.hasUnsavedChanges() || eI.A.hasUnsavedChanges());
    l.useEffect(() => {
        c || (d.current = 1.4);
    }, [c]);
    let g = l.useCallback(() => {
        (null != u.current && (clearTimeout(u.current), (u.current = null)), r(!1));
    }, []);
    return (
        l.useEffect(() => {
            function e() {
                (o(d.current),
                    (d.current = Math.min(d.current + 2, 15)),
                    r(!0),
                    null != u.current && clearTimeout(u.current),
                    (u.current = setTimeout(() => {
                        (r(!1), (u.current = null));
                    }, 300)));
            }
            return (
                rh._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rh._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rq.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rZ = n(761508),
    r$ = n(329921),
    rJ = n(695904),
    rQ = n(573238),
    r0 = n(107563),
    r1 = n(517164),
    r6 = n(290863),
    r2 = n(894768),
    r4 = n(146655),
    r3 = n(489379);
function r8(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, r4.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, r3.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([r1.A], () => r1.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        m = (0, a.bG)([r2.A, r6.A], () => {
            let e = g ? r2.A.getStatus() : r6.A.getStatus(t.id);
            return e === T.clD.OFFLINE || e === T.clD.INVISIBLE;
        }),
        f = r.length > 0 || null != o,
        h = i?.private !== !0 && null == o && null == d && null != u,
        p = s.length > 0;
    return {
        live: r,
        recent: s,
        stream: o,
        voiceActivityChannel: h ? u : null,
        isFetching: c,
        isCurrentUser: g,
        hasCurrentActivity: !m && (f || h),
        hasRecentActivity: p,
    };
}
var r7 = n(939496),
    r5 = n(114212),
    r9 = n(960549),
    se = n(637865),
    st = n(842241),
    sn = n(287746),
    si = n(435558),
    sl = n(534890),
    sr = n(308528),
    ss = n(780964),
    sa = n(766075),
    so = n(92795);
let su = [
        () => eU.intl.string(eU.t.madJdE),
        () => eU.intl.string(eU.t.NYmfoP),
        () => eU.intl.string(eU.t.R2PaCg),
        () => eU.intl.string(eU.t.laSR8h),
        () => eU.intl.string(eU.t.DnsJE8),
    ],
    sd = [
        () => eU.intl.string(eU.t.nFSbeE),
        () => eU.intl.string(eU.t.gTcxOz),
        () => eU.intl.string(eU.t["8T0wYj"]),
        () => eU.intl.string(eU.t.BIHl1g),
        () => eU.intl.string(eU.t["jhBm0+"]),
    ],
    sc = [
        () => eU.intl.string(eU.t.AyMGXA),
        () => eU.intl.string(eU.t.aAFW7V),
        (e) => eU.intl.formatToPlainString(eU.t.h2g0cM, { name: e }),
        () => eU.intl.string(eU.t.rrYh58),
        () => eU.intl.string(eU.t["HX3K+F"]),
        () => eU.intl.string(eU.t["/yW3aY"]),
        () => eU.intl.string(eU.t["PmL/v0"]),
        () => eU.intl.string(eU.t.IALa3h),
        () => eU.intl.string(eU.t.HRcTFL),
        () => eU.intl.string(eU.t.NuCqPt),
        () => eU.intl.string(eU.t["M1tw+4"]),
        () => eU.intl.string(eU.t.UBm1y2),
        () => eU.intl.string(eU.t.Cu95PQ),
        () => eU.intl.string(eU.t["R/wFuh"]),
        () => eU.intl.string(eU.t.HQPAVT),
        () => eU.intl.string(eU.t.YolGh4),
    ],
    sg = [
        T.fg2.STEAM,
        T.fg2.PLAYSTATION,
        T.fg2.XBOX,
        T.fg2.TWITCH,
        T.fg2.BATTLENET,
        T.fg2.LEAGUE_OF_LEGENDS,
        T.fg2.EPIC_GAMES,
        T.fg2.RIOT_GAMES,
        T.fg2.ROBLOX,
        T.fg2.SPOTIFY,
        T.fg2.YOUTUBE,
        T.fg2.CRUNCHYROLL,
        T.fg2.BUNGIE,
    ];
function sm(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: so.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: so.FS,
                children: [
                    (0, i.jsx)(nd.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eK.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function sf() {
    let e = eU.intl.string(eU.t.RnD2yZ),
        [t] = l.useState(() => ((0, si.sample)(su) ?? su[0])());
    return (0, i.jsx)(sm, { heading: e, bodyText: t });
}
function sh() {
    let e = eU.intl.string(eU.t.bFgqYJ),
        [t] = l.useState(() => ((0, si.sample)(sd) ?? sd[0])());
    return (0, i.jsx)(sm, { heading: e, bodyText: t });
}
function sp(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = q.Ay.getName(n, r, t),
        o = eU.intl.formatToPlainString(eU.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, si.sample)(sc) ?? sc[0])(a)),
        d = l.useCallback(() => {
            (sr.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(sm, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: so.v0,
            children: (0, i.jsx)(tG.FD, { icon: sl.ChatIcon, text: eU.intl.string(eU.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sx() {
    let e = (0, ny.Ay)();
    return (0, i.jsx)("div", {
        className: so.HU,
        children: sg.map((t, n) => {
            let l = ea.A.get(t);
            if (null == l) return null;
            let r = (0, il.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: so.gj }, n);
        }),
    });
}
function sA(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, sa.openUserSettings)(ss.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, sa.openUserSettings)(ss.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(sm, {
        heading: eU.intl.string(eU.t.VB6LWY),
        bodyText: eU.intl.string(eU.t.KpjsU9),
        children: [
            (0, i.jsx)(sx, {}),
            (0, i.jsxs)("div", {
                className: so.v0,
                children: [
                    (0, i.jsx)(tG.FD, { text: eU.intl.string(eU.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tG.FD, { text: eU.intl.string(eU.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sI = n(131058);
function sv(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sI.gN, n), fade: !0, ...r, children: t });
}
var sj = n(587763);
function sb(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: a } = e,
        {
            live: o,
            recent: u,
            stream: d,
            voiceActivityChannel: c,
            isFetching: g,
            isCurrentUser: m,
            hasCurrentActivity: f,
            hasRecentActivity: h,
        } = r8({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return f || h || !g
        ? f || h || g
            ? (0, i.jsxs)(sv, {
                  className: sj.XG,
                  fade: !0,
                  children: [
                      f
                          ? (0, i.jsx)(tm, {
                                heading: eU.intl.string(eU.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sj.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(st.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: d,
                                                    onClose: a,
                                                }),
                                            }),
                                        o.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(r9.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: a,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(sn.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: c,
                                                    onClose: a,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      h
                          ? (0, i.jsx)(tm, {
                                heading: eU.intl.string(eU.t.jzgEoL),
                                introText: m
                                    ? eU.intl.format(eU.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tY.Anchor,
                                                  {
                                                      href: eB.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rk.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sj.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(se.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : m
              ? (0, i.jsx)(sA, { onClose: a })
              : (0, i.jsx)(sp, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sj.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sj.kr,
                          children: [
                              (0, i.jsx)(r5.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(r5.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sy = n(163126),
    sC = n(913453),
    sE = n(229187),
    sS = n(100663),
    sN = n(503062),
    sk = n(393213);
function sT(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, $.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sC.A)(t),
        g = (0, sy.A)();
    return (
        l.useEffect(() => {
            (0, sE.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sv, {
            className: sk.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sk.D$,
                                  children: [
                                      (0, i.jsx)(r5.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(r5.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(sf, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sN.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sS.openUserProfileModal)({
                                                ...o,
                                                userId: l.id,
                                                sourceAnalyticsLocations: a,
                                            }));
                                    },
                                },
                                t,
                            );
                        }),
        })
    );
}
var sP = n(398590),
    sO = n(345942),
    sR = n(51943);
function sL(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, $.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sC.A)(t);
    return (0, i.jsx)(sv, {
        className: sk.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sk.Y7,
                              children: [
                                  (0, i.jsx)(r5.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(r5.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sR.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sO.u)(r.id), n(), (0, sP.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sh, {}),
    });
}
var s_ = n(885574),
    sw = n(669815),
    sM = n(331322),
    sD = n(591410),
    sG = n(881116),
    sU = n(506774),
    sF = n(531913),
    sB = n(503275),
    sW = n(316601),
    sV = n(469958);
let sH = "conjureServerWidgetUpsellDismissals";
var sz = n(763314),
    sY = n(191850);
function sK(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([z.A], () => z.A.getGuild(n)),
                s = (0, eo.h)(i),
                o = (0, a.bG)([sW.A], () => sW.A.getProject(i)?.owner_user_id, [i]),
                u = (0, sB.vm)(o),
                d = (0, sF.A)(e, i),
                c = l.useMemo(() => ({ ...d, isLoading: !1, hasIdentity: !0 }), [d]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? u : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: u, application: d, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sM.B, {
        children: (0, i.jsx)(sD.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sD.A.Cta, {
                icon: (0, i.jsx)(ld.Ay, { guild: u, size: ld.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eU.intl.formatToPlainString(sY.default["uIb8U+"], { guildName: u.name }),
                content: eU.intl.formatToPlainString(sY.default.ZZywee, { applicationName: d.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sM.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sG.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rB.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eU.intl.string(eU.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(ng.$, {
                            variant: "primary",
                            size: "sm",
                            text: eU.intl.string(sY.default.j6ztO0),
                            onClick: () => (0, sz.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function sq(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sV.A)(),
                [n, i] = l.useState(() => sU.w.get(sH)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = sU.w.get(sH) ?? {}),
                            sU.w.set(sH, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(sK, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function sX() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(sq, { currentUser: e }, e.id) : null;
}
var sZ = n(840387),
    s$ = n(201718),
    sJ = n(615405),
    sQ = n(633075),
    s0 = n(813832),
    s1 = n(600761),
    s6 = n(667049);
function s2(e) {
    let t = (0, eg.A)(e),
        n = ns();
    return t && !n;
}
var s4 = n(410453);
function s3(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, $.NJ)(),
        a = l.useCallback(() => {
            (r({ action: "PRESS_ADD_WIDGET" }),
                (0, n5.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r]);
    return (0, i.jsxs)("div", {
        className: s()(s4.w, t),
        children: [
            (0, i.jsx)(eK.E, {
                className: s4.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eU.intl.string(eU.t.OYlggR),
            }),
            (0, i.jsx)(ng.$, {
                icon: tq.PlusSmallIcon,
                text: eU.intl.string(eU.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var s8 = n(192),
    s7 = n(704824),
    s5 = n(382483),
    s9 = n(385113),
    ae = n(334074),
    at = n(657718),
    an = n(478016);
function ai(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, $.NJ)(),
        a = l.useMemo(() => new sQ.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, rj.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rN.XA)(rk.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sD.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sD.A.Cta, {
            showSuggestedForYou: !0,
            heading: eU.intl.format(eU.t.OIzLCy, { applicationName: n.name }),
            content: eU.intl.format(eU.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tz.m, {
                        text: eU.intl.string(eU.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(at.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: nu.XSmallIcon,
                            "aria-label": eU.intl.string(eU.t.WAI6xu),
                            onClick: () => {
                                r(eG.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tz.m, {
                        text: eU.intl.string(eU.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(at.S, {
                            variant: "primary",
                            size: "sm",
                            icon: an.CheckmarkSmallIcon,
                            "aria-label": eU.intl.formatToPlainString(eU.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (r(eG.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function al() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([s9.A], () => s9.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, s5.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, eo.A)(e),
            { tokens: i, fetched: r } = (0, s7.j)(e),
            s = (0, s6.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sQ.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, ae.hj)({
                applications: u,
                dismissibleContent: eS.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: ae.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(ai, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var ar = n(675816),
    as = n(575593),
    aa = n(44120),
    ao = n(778705),
    au = n(87719),
    ad = n(317560),
    ac = n(306984),
    ag = n(661492);
let am = { sentGifts: {} };
function af(e, t) {
    return `${e}:${t}`;
}
class ah extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((am = e), this.cleanupExpiredGifts());
    }
    getState() {
        return am;
    }
    hasSentGift(e, t) {
        let n = af(e, t),
            i = am.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = af(e, t),
            i = am.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(am.sentGifts)) new Date(n.expiresAt) < e && delete am.sentGifts[t];
    }
}
let ap = new ah(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = af(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        am.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var ax = n(88940),
    aA = n(146423),
    aI = n(590180),
    av = n(301198),
    aj = n(349031),
    ab = n(124557),
    ay = n(471505),
    aC = n(376932);
function aE(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function aS(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ay.G)({ userId: o, sku: n, location: l, onError: r }),
        m = aR();
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function aN(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ab.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = aR();
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function ak(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ab.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = aR();
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: m,
            ...s,
        }),
    });
}
function aT(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([ri.default], () => ri.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, aj.z)({ userId: o, product: n, location: l, onError: r }),
        h = (0, ag.q)(m),
        p = f && !u,
        x = !h || p,
        A = aR(h && p ? eU.intl.string(eU.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: aC.U,
        style: aE(t),
        children: (0, i.jsx)(av._, {
            skuId: m.skuId,
            productName: m.name,
            size: t.wishlistButtonSize,
            disabled: x,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: A,
            ...s,
        }),
    });
}
function aP(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([aI.A], () => aI.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aS, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(aN, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(aT, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(ak, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function aO(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(aP, { location: t, ...n });
}
function aR(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: eU.intl.string(eU.t["5B3F2W"]),
            add: eU.intl.string(eU.t.Hcgz2S),
            remove: eU.intl.string(eU.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var aL = n(460442),
    a_ = n(662349),
    aw = n(802290),
    aM = n(479026),
    aD = n(636374),
    aG = n(699976),
    aU = n(181554),
    aF = n(880465);
let aB = aG.Z.SIZE_133;
function aW(e) {
    var t;
    let n,
        {
            item: r,
            wishlistOwner: a,
            guildId: o,
            currentUser: u,
            style: d,
            isDragging: c,
            dragHandle: g,
            skuPreviewStyle: m,
            skuPreviewHoverStyle: f,
            skuAssetHoverClassName: h,
            isHoveringOrFocusing: p,
            setIsHoveringOrFocusing: x,
            onDetailsClick: A,
            onPurchaseClick: I,
            wishlistId: v,
            isItemOwned: j,
            cardBackdrop: b,
            isNew: y,
            onClick: C,
            showShopUnpublishLabel: E,
        } = e,
        S = l.useRef(null),
        N = l.useId(),
        k = (0, ax.A)(E ? r.shopUnpublishedAt : void 0),
        T = l.useRef(x);
    (l.useEffect(() => {
        T.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = S.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                T.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: P } = (0, $.NJ)(),
        O = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rk.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, P, C]),
        R = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rk.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, P, C]),
        L = l.useCallback(() => {
            ((0, rN.XA)(rk.jM.SOMETHING_WENT_WRONG), nb.O.announce(eU.intl.string(eU.t.F8FvUy)));
        }, []),
        _ = null != g ? (0, i.jsx)("div", { ref: S, className: aU.BU, children: g }) : null,
        {
            onBodyClick: w,
            onOverlayClick: M,
            showOverlayButton: D,
            routesToGift: G,
            label: U,
            icon: F,
        } = (0, aD.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: O, onPurchaseClick: R }),
        B = p && D;
    return (0, i.jsxs)("div", {
        className: aU.kL,
        children: [
            (0, i.jsxs)(aA.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: aB,
                cardStyle: s()(aU.Nr, d),
                skuPreviewStyle: s()(aU.ev, { [aU.go]: j && !p }, m, B ? f : void 0),
                skuAssetClassName: B ? h : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label":
                    ((t = r.sku),
                    (n = G ? (0, ag.T)(t) : eU.intl.formatToPlainString(eU.t.ZBB4Ty, { productName: (0, ag.T)(t) })),
                    !0 === y ? eU.intl.formatToPlainString(eU.t.s9RZ1r, { label: n }) : n),
                "aria-describedby": null != k ? N : void 0,
                topLeftContent: null != k ? (0, i.jsx)(aw.A, { id: N, countdown: k, variant: "profile" }) : void 0,
                children: [
                    !0 === y && (0, i.jsx)(r$.N, { className: aU.Pf }),
                    b,
                    D && (0, i.jsx)(a_.A, { spec: aB, onClick: M, isHoveringOrFocusing: p, label: U, icon: F }),
                    j && (0, i.jsx)(aL.gS, { isHoveringOrFocusing: p }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(aO, {
                            sku: r.sku,
                            isCardHovered: p,
                            spec: aB,
                            onError: L,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            _,
        ],
    });
}
function aV(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, ad.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iJ.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, ac.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iJ.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aW, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        onDetailsClick: u,
        onPurchaseClick: d,
        analyticsLocations: a,
        currentUser: s,
        ...o,
    });
}
function aH(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, aM.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iJ.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, aa.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iJ.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        m = t.sku.tenantMetadata?.collectibles?.type,
        f = m === as.R.AVATAR_DECORATION || m === as.R.PROFILE_FRAME;
    return (0, i.jsx)(aW, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [aU.mn]: f }),
        analyticsLocations: a,
        ...d,
    });
}
function az(e) {
    let {
            item: t,
            isItemOwned: n,
            wishlistOwner: r,
            currentUser: s,
            analyticsLocations: a,
            isHoveringOrFocusing: o,
            ...u
        } = e,
        d = l.useCallback(() => {
            if (n) return void (0, au.x)(iq.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, ao.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iJ.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aW, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aF.MO,
        skuAssetHoverClassName: aF.iR,
        analyticsLocations: a,
        ...u,
    });
}
function aY(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, b.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        m = (0, a.bG)([ap], () => ap.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || m),
            [t.isOwned, t.skuProductLine, m],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aV, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(aH, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(az, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: f,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        default:
            return null;
    }
}
var aK = n(788593),
    aq = n(132085),
    aX = n(741934),
    aZ = n(766529),
    a$ = n(998556);
function aJ(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, ar.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, rt.VU)(),
        d = l.useMemo(
            () =>
                null == o || null == r
                    ? null
                    : (function (e, t) {
                          let { id: n, itemType: l, itemPreviewProps: r } = e;
                          if ("WIDGET" === l && r?.widget != null) {
                              let { widget: e, getWidth: n } = r,
                                  l = n?.() ?? 432;
                              return (0, i.jsx)("div", {
                                  className: a$.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aZ.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && r?.gameName != null) {
                              let { imageSrc: e, iconSrc: l, gameName: s, getWidth: a } = r,
                                  o = a?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: o },
                                  children: (0, i.jsx)(aK.A, {
                                      className: a$.XJ,
                                      imageSrc: e,
                                      iconSrc: l,
                                      gameName: s,
                                      gameId: n,
                                      userId: t?.id,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_DETAILS_CARD" === l && r?.game != null && r?.widgetType != null) {
                              let { game: e, widgetType: n, getWidth: l } = r,
                                  s = l?.() ?? 400;
                              return (0, i.jsx)("div", {
                                  className: a$.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(aq.A, {
                                      user: t,
                                      widgetType: n,
                                      game: e,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("WIDGET_CLIP" === l && r?.item != null) {
                              let { item: e, getWidth: t } = r,
                                  n = t?.() ?? 96;
                              return (0, i.jsx)("div", {
                                  className: a$.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aX.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: a$.Xm,
                                  children: (0, i.jsx)(aY, {
                                      item: e,
                                      wishlistOwner: t,
                                      wishlistId: null,
                                      isDragging: !0,
                                  }),
                              });
                          }
                          return null;
                      })(r, o),
            [r, o],
        ),
        c = l.useRef(null),
        g = l.useCallback(() => {
            if (null == t.current) return;
            let e = t.current.getBoundingClientRect();
            c.current = { x: e.left, y: e.top };
        }, [t]);
    if (
        (l.useEffect(() => {
            if (!n) {
                c.current = null;
                return;
            }
            null == c.current && g();
        }, [n, g]),
        !0 !== n || null == s || null == d)
    )
        return null;
    null == c.current && g();
    let { x: m, y: f } = c.current ?? { x: 0, y: 0 },
        h = s.x - m - 60 * !!u,
        p = s.y - f;
    return (0, i.jsx)("div", { className: a$.kL, style: { transform: `translate3d(${h}px, ${p}px, 0)` }, children: d });
}
var aQ = n(151869);
n(839272);
var a0 = n(540185);
function a1(e) {
    let t,
        { addableWidgets: n, applicationAffinityData: i, hasClips: l } = e,
        r = [],
        s = new Set();
    function a(e) {
        s.has(e.getUniqueKey()) || (r.push(e), s.add(e.getUniqueKey()));
    }
    function o(e) {
        let t = n.find((t) => t.type === e);
        null != t && a(t);
    }
    function u(e) {
        let t = n.find((t) => (0, sQ.E)(t, e));
        null != t && a(t);
    }
    return (
        ((t = Date.now()),
        i
            .filter((e) => {
                let { isConnected: n, lastPlayedAt: i } = e;
                return n || (null != i && t - i < 7776e6);
            })
            .toSorted((e, t) => {
                if (e.isConnected !== t.isConnected) return e.isConnected ? -1 : 1;
                let n = t.totalPlayDuration - e.totalPlayDuration;
                return 0 !== n ? n : (t.lastPlayedAt ?? 0) - (e.lastPlayedAt ?? 0);
            })
            .slice(0, 2)
            .map((e) => {
                let { applicationId: t } = e;
                return t;
            })).forEach(u),
        l && o(a0.x.CLIPS_GALLERY),
        o(a0.x.FAVORITE_GAMES),
        o(a0.x.PLAYED_GAMES),
        u("1346069614634864772"),
        o(a0.x.CURRENT_GAMES),
        o(a0.x.WANT_TO_PLAY_GAMES),
        u("1323482066758930452"),
        r.slice(0, 6)
    );
}
let a6 = (0, n(945810).mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var a2 = n(116281),
    a4 = n(661439),
    a3 = n(90165);
function a8(e) {
    let t = (0, a.bG)([s9.A], () => s9.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof sQ.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, eo.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, s7.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, a4.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([a3.A], () => u.map((e) => (null != e ? a3.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([a3.A], () => u.map((e) => (null != e ? a3.A.getLastPlayedDateTime(e) : null)));
    return l.useMemo(() => {
        let e = new Set(s.map((e) => e.application.id)),
            t = [];
        for (let i = 0; i < n.length; i++)
            t.push({
                applicationId: n[i],
                isConnected: e.has(r[i]),
                totalPlayDuration: d[i] ?? 0,
                lastPlayedAt: c[i] ?? null,
            });
        return t;
    }, [n, r, c, s, d]);
}
var a7 = n(224360),
    a5 = n(942742),
    a9 = n(843393);
function oe(e) {
    return e.getUniqueKey();
}
function ot(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, a2.A)(),
        s = a8(r),
        o = (0, a.bG)([ry.Ay], () => ry.Ay.hasClips()),
        u = l.useMemo(() => a1({ addableWidgets: r, applicationAffinityData: s, hasClips: o }), [r, s, o]),
        d = u.length >= 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d && (0, i.jsx)(on, { suggestions: u, suggestionsLocation: "above" }),
            t,
            d && (0, i.jsx)(on, { suggestions: u, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function on(e) {
    let t = a6.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(oi, { ...e }) : null;
}
function oi(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, $.NJ)(),
        { focusAddedWidget: o } = (0, s8.r)(),
        [u, d] = (0, eD.kn)([eS.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(a5.A, {
                    widget: e,
                    size: "small",
                    compact: !0,
                    listItemProps: t,
                    onAddWidget: () => {
                        (o(e.getUniqueKey()), r?.());
                    },
                    trackUserProfileEditAction: a,
                }),
            [o, r, a],
        );
    return u !== eS.M.USER_PROFILE_WIDGET_SUGGESTIONS
        ? null
        : (0, i.jsx)(a7.A, {
              className: s()(a9.uW, "above" === n && a9.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => d(eG.i.USER_DISMISS),
              children: (0, i.jsx)(aQ.A, {
                  items: t,
                  getItemKey: oe,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: a9.Dk,
                  scrollerClassName: a9.jv,
                  itemClassName: a9.Vs,
                  actionsClassName: a9.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eU.intl.string(eU.t["+EIBSA"]),
              }),
          });
}
var ol = n(269507);
function or(e) {
    let { widgets: t, trackUserProfileEditAction: n } = e;
    return (0, i.jsx)("ul", {
        className: ol.ZW,
        "aria-label": eU.intl.string(eU.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                { children: (0, i.jsx)(a5.A, { widget: e, size: "small", trackUserProfileEditAction: n }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function os(e) {
    let { trackUserProfileEditAction: t } = e,
        r = (0, a2.A)(),
        s = a8(r),
        o = a1({ addableWidgets: r, applicationAffinityData: s, hasClips: (0, a.bG)([ry.Ay], () => ry.Ay.hasClips()) }),
        u = l.useCallback(() => {
            (t({ action: "PRESS_ADD_WIDGET" }),
                (0, n5.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(546547),
                            n.e(487697),
                            n.e(752516),
                            n.e(360545),
                        ]).then(n.bind(n, 414904));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(or, { widgets: o, trackUserProfileEditAction: t }),
            (0, i.jsx)(ng.$, { text: eU.intl.string(eU.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: u }),
        ],
    });
}
function oa(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, $.NJ)(),
        s = l.useRef(!1),
        o = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t)?.fetchError != null, [t]);
    return (
        l.useEffect(() => {
            s.current || o || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [o, n]),
        (0, i.jsxs)("div", {
            className: ol.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: ol.FS,
                    children: [
                        (0, i.jsx)(nd.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eU.intl.string(eU.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: o ? eU.intl.string(eU.t["+W59o5"]) : eU.intl.string(eU.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(sX, {}), (0, i.jsx)(os, { trackUserProfileEditAction: r })],
                    }),
            ],
        })
    );
}
var oo = n(366209);
function ou() {
    return (0, i.jsxs)("div", {
        className: oo.mJ,
        children: [
            (0, i.jsx)(s_.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eK.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eU.intl.string(eU.t["7blcz6"]),
            }),
        ],
    });
}
function od(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, s6.A)(t.id),
        u = s2(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([sJ.A], () => [sJ.A.ipCountryCode, sJ.A.ipCountryCodeRequest]),
                n = (0, sZ.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sw.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(rA.fu), [o]),
        m = l.useMemo(() => o.filter((e) => e instanceof sQ.R), [o]);
    function f() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                aZ.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s3, { className: oo.cG }),
                            d && (0, i.jsx)(ou, {}),
                            (0, i.jsx)(al, {}),
                            (0, i.jsx)(sX, {}),
                        ],
                    }),
                u ? (0, i.jsx)(ot, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, s0.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, eo.A)(n);
        let { data: i, refetch: r } = (0, s$.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, m),
    c)
        ? (0, i.jsx)(oa, { userId: t.id })
        : u
          ? (0, i.jsx)(s8.D, { children: f() })
          : f();
}
function oc(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, s1.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: tA.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([ri.default], () => ri.default.getId() === t)), (r = rR()), n && null != r);
    return (0, i.jsxs)(sv, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(oo.XG, { [oo.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(aJ, { scrollerRef: d }), (0, i.jsx)(od, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var og = n(115560),
    om = n(777480),
    of = n(825484),
    oh = n(952270),
    op = n(444927),
    ox = n(895360),
    oA = n(267102),
    oI = n(521440),
    ov = n(721932),
    oj = n(832163),
    ob = n(501838),
    oy = n(44724),
    oC = n(808247),
    oE = n(673843),
    oS = n(855052),
    oN = n(342442),
    ok = n(658946),
    oT = n(535089),
    oP = n(698253),
    oO = n(174947),
    oR = n(840411),
    oL = n(387325),
    o_ = n(416415),
    ow = n(419731),
    oM = n(451395),
    oD = n(823016),
    oG = n(100741);
function oU(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oD.r)();
    return (0, i.jsx)(oM.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eU.intl.formatToPlainString(eU.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oG.C,
        dropBeforeClassName: oG.A,
        dropAfterClassName: oG.Ze,
        draggingClassName: oG.Id,
        children: (0, i.jsx)("div", { className: oG.An, children: s }),
    });
}
let oF = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: r,
            guildId: s,
            showEditingControls: a,
            wishlistId: o,
            isDragging: u,
            onReorder: d,
            isNew: c,
            onClick: g,
            showShopUnpublishLabel: m,
        } = e,
        { registerDragHandleRef: f } = (0, oD.r)(),
        h = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oM.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: oG.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        x = l.useMemo(
            () =>
                (0, i.jsx)(aY, {
                    item: t,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: u,
                    dragHandle: p,
                    isNew: c,
                    onClick: h,
                    showShopUnpublishLabel: m,
                }),
            [t, r, s, u, p, o, c, h, m],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(oU, { item: t, index: n, wishlistId: o, onReorder: d, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function oB(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = C.default.getCurrentUser(),
        { labelsEnabled: d, reorderEnabled: c } = (0, oL.Zf)("UserProfileModalV2WishlistGrid"),
        g = l.useMemo(() => t.filter(oO.xZ).map((e) => e.shopUnpublishedAt), [t]),
        m = (0, ax.N)(g),
        { defaultWishlistId: f } = (0, a.cf)([Q.A], () => ({ defaultWishlistId: Q.A.getFirstWishlistId(n.id) })),
        h = (0, o_.Ay)(t, c && null != u && u.id !== n.id),
        { isDragging: p } = (0, ar.V)((e) => ({ isDragging: e.isDragging() })),
        [x, A] = l.useState([]),
        I = l.useCallback((e) => {
            A((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        v = l.useCallback(
            (e, t) => {
                if (e === t || null == f || 0 === h.length || e < 0 || e >= h.length || t < 0 || t >= h.length) return;
                let n = r0.A.getWishlist(f);
                if (null == n) return;
                let i = h[e],
                    { newWishlistData: l, previousSkuId: r, nextSkuId: s } = (0, oR.Ap)(n, h, e, t);
                oC.A.reorderWishlistItem(f, i.skuId, { previousSkuId: r, nextSkuId: s, newWishlistData: l });
            },
            [f, h],
        );
    if (null == u || null == f) return null;
    let j = (0, i.jsxs)(i.Fragment, {
        children: [
            m && (0, i.jsx)(oL.m4, { location: "UserProfileModalV2WishlistGrid" }),
            (0, i.jsx)("ul", {
                className: oG.Vg,
                children: h.map((e, t) =>
                    (0, i.jsx)(
                        oF,
                        {
                            item: e,
                            index: t,
                            profileOwner: n,
                            guildId: r,
                            showEditingControls: s,
                            wishlistId: f,
                            isDragging: p,
                            onReorder: v,
                            isNew: (0, ow.f3)(e.addedAt, o) && !x.includes(e.skuId),
                            onClick: I,
                            showShopUnpublishLabel: d,
                        },
                        e.skuId,
                    ),
                ),
            }),
        ],
    });
    return s ? (0, i.jsx)(oD.B, { emptyListFallbackRef: null, children: j }) : j;
}
function oW(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oP.P, { isGifting: n, children: (0, i.jsx)(oB, { ...e }) });
}
var oV = n(815021),
    oH = n(299679),
    oz = n(820847);
n(667532);
var oY = n(802494),
    oK = n(172218),
    oq = n(858899),
    oX = n(2157),
    oZ = n(95817),
    o$ = n(74135),
    oJ = n(964164);
let oQ = aG.Z.SIZE_90;
function o0(e) {
    let {
            sku: t,
            wishlistOwner: n,
            guildId: r,
            style: a,
            skuPreviewStyle: o,
            setIsHoveringOrFocusing: u,
            onClick: d,
            "aria-label": c,
            wishlistId: g,
            children: m,
        } = e,
        { trackUserProfileWishlistAction: f } = (0, $.NJ)(),
        h = (0, oH.Ar)(),
        p = (0, op.A)(() => (0, og.A)()),
        { handleVisibilityChange: x } = (0, oZ.G)(p),
        A = (0, oK.K)(x, 0.5, h?.surface != null),
        I = l.useCallback(() => {
            (f({
                wishlistId: g,
                action: rk.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tJ.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: g,
                        wishlist_owner_id: h.wishlistOwnerId,
                        surface: h.surface,
                        position_in_section: h.positionInSection,
                        item_source: h.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: p,
                        impression_session_id: h.impressionSessionId,
                        location_stack: h.analyticsLocations,
                    }),
                d());
        }, [d, t.id, t.productLine, f, g, h, p]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(aA.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oQ,
            cardStyle: s()(oJ.Nr, a),
            skuPreviewStyle: s()(oJ.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: m,
        }),
    });
}
function o1(e) {
    let {
            sku: t,
            analyticsLocations: n,
            isHoveringOrFocusing: r,
            handleOpenUserProfileModal: a,
            skuPreviewStyle: o,
            wishlistOwner: u,
            onAddSuccess: d,
            promotion: c,
            ...g
        } = e,
        [m, f] = l.useState(!1),
        h = l.useCallback(async () => {
            if (!m) {
                f(!0);
                try {
                    (await oC.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rk.RP.WISHLIST }));
                } catch (e) {
                    ((0, oq.P0)({ text: eU.intl.string(eU.t.F8FvUy), variant: "critical" }),
                        nb.O.announce(eU.intl.string(eU.t.F8FvUy)));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, m, a, d]),
        p = l.useMemo(() => s()({ [oJ.zW]: r || m }, o), [r, m, o]);
    return (0, i.jsxs)(o0, {
        "aria-label": eU.intl.formatToPlainString(eU.t.xRjJBe, { productName: (0, ag.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: p,
        onClick: h,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(aL.oU, { isHoveringOrFocusing: r, loading: m }), !r && !m && c],
    });
}
function o6(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, oX.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(o1, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(o$.s, { spec: oQ, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function o2(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case as.R.PROFILE_EFFECT:
                case as.R.NAMEPLATE:
                case as.R.BUNDLE:
                case as.R.PROFILE_FRAME:
                    return;
                case as.R.AVATAR_DECORATION:
                    return oJ.ML;
                default:
                    return s()(oJ.ML, oJ.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(o1, { sku: t, skuPreviewStyle: r, ...n });
}
function o4(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(o1, { sku: t, skuPreviewStyle: aF.MO, ...n });
}
function o3(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(o6, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(o2, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(o4, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var o8 = n(609965);
function o7(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(o8.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                oH.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(o3, {
                        sku: a,
                        wishlistId: t?.id,
                        wishlistOwner: d,
                        guildId: n,
                        handleOpenUserProfileModal: l,
                        analyticsLocations: r,
                    }),
                },
                a.id,
            );
        }),
    });
}
var o5 = n(927813);
let o9 = 90 * o5.A.Millis.DAY,
    ue = 90 * o5.A.Millis.DAY;
var ut = n(469364);
function un(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            hasFetchedWishlist: s = !1,
            analyticsLocations: o,
            impressionSessionId: u,
            className: d,
        } = e,
        {
            isVisible: c,
            isDismissible: g,
            markAsDismissed: m,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                r = (n?.items.length ?? 0) >= 3,
                [s, o] = l.useState(!1);
            !i || r || s || o(!0);
            let u = (0, a.bG)(
                    [Q.A],
                    () => (null != n ? new Date(Q.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [d, c] = (0, eD.Wl)(
                    eS.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + ue, cooldownDurationMs: o9 },
                    void 0,
                    !0,
                ),
                g = d === eS.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eG.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(ui, {
              user: t,
              guildId: n,
              wishlist: r,
              analyticsLocations: o,
              impressionSessionId: u,
              className: d,
              isDismissible: g,
              markAsDismissed: m,
          })
        : null;
}
function ui(e) {
    let {
            user: t,
            guildId: n,
            wishlist: r,
            analyticsLocations: a,
            impressionSessionId: o,
            className: u,
            isDismissible: d,
            markAsDismissed: c,
        } = e,
        { items: g } = (function (e) {
            let {
                    userId: t,
                    wishlist: n,
                    numWishlistItemsToRecommend: i,
                    maxWishlistItemsToShow: r = i,
                    source: s,
                } = e,
                { recommendations: a, status: o } = (0, oY.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iJ.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, oR.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oz.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(ut.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: ut.wx,
                      children: [
                          (0, i.jsx)(eK.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eU.intl.string(eU.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: ut.b,
                                  children: (0, i.jsx)(oV.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(oH.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(o7, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(ut.Vg, ut.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var ul = n(477782),
    ur = n(165862),
    us = n(431194);
function ua(e) {
    let {
            title: t,
            variant: n = "secondary",
            handleOpenCollectiblesShop: r,
            handleOpenGameShop: s,
            handleAddNitroToWishlist: a,
            socialLayerStorefrontApplicationIds: o,
        } = e,
        u = l.useRef(null),
        [d, c] = l.useState(!1),
        g = (function (e) {
            let { applications: t, handleOpenGameShop: n } = e;
            return l.useMemo(
                () =>
                    t.filter(ed.Vq).map((e) => {
                        let t = tQ.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: us.I, src: t, alt: "" }) : tM.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: tM.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eo.A)(o), handleOpenGameShop: s }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(ul.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(ul.Dr, {
                                id: "browse-collectibles-shop",
                                label: eU.intl.string(eU.t["5upuqx"]),
                                iconLeft: tM.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tM.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(ul.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eU.intl.string(eU.t.lG6a5x),
                                iconLeft: to.NitroWheelIcon,
                                leadingAccessory: { type: "icon", icon: to.NitroWheelIcon },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    ul.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nL.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ur.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eU.intl.string(eU.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(ng.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? nu.XSmallIcon : lo.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var uo = n(365199);
let uu = eB.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function ud(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(ul.rX, {
                          children: [
                              (0, i.jsx)(ul.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eU.intl.string(eU.t.b2nFyA),
                                  subtext: eU.intl.string(eU.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(ul.bX, {}),
                              (0, i.jsx)(ul.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eU.intl.string(eU.t.hvVgAZ),
                                  icon: tK.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tK.LinkExternalSmallIcon },
                                  action: () => window.open(uu),
                              }),
                          ],
                      })
                    : null,
            [t, n, r],
        );
    return null == o
        ? null
        : (0, i.jsx)(b.f5, {
              value: a,
              children: (0, i.jsx)(nL.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(ur.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eU.intl.string(eU.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tG.q3, {
                          buttonRef: s,
                          icon: uo.MoreHorizontalIcon,
                          tooltipText: eU.intl.string(eU.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var uc = n(526725);
function ug(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(ua, {
              title: eU.intl.string(eU.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(ng.$, {
              variant: "secondary",
              size: "sm",
              icon: tM.ShopIcon,
              text: eU.intl.string(eU.t["i/yzHs"]),
              onClick: n,
          });
}
function um(e) {
    let {
        showEditingControls: t,
        socialLayerStorefrontApplicationIds: n,
        isWishlistPublic: l,
        handleOpenShop: r,
        handleOpenGameShop: s,
        handleAddNitroToWishlist: a,
        handleToggleWishlistVisibility: o,
    } = e;
    return (0, i.jsxs)("div", {
        className: uc.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(ua, {
                          title: eU.intl.string(eU.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(ng.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tq.PlusSmallIcon,
                          text: eU.intl.string(eU.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(ud, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function uf(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(ng.$, {
        variant: "primary",
        size: "sm",
        icon: tM.ShopIcon,
        text: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function uh(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, oA.Us)() === T.BRT.OVERLAY,
        u = (0, eo.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(uf, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(ua, {
                title: eU.intl.string(eU.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: uc.y7,
        children: [
            (0, i.jsxs)("div", {
                className: uc.q6,
                children: [
                    (0, i.jsx)(nd.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eU.intl.string(eU.t.HGnLLT),
                    }),
                    (0, i.jsx)(eK.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eU.intl.string(eU.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(of.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(ng.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tM.ShopIcon,
                                text: eU.intl.string(eU.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function up(e) {
    let {
            isOwner: t,
            showEditingControls: n,
            profileOwner: r,
            wishlist: s,
            socialLayerStorefrontApplicationIds: o,
            handleOpenShop: u,
            handleOpenGameShop: d,
            handleAddNitroToWishlist: c,
        } = e,
        g = s.id,
        m = (0, a.bG)([Q.A], () => Q.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: f } = (0, $.NJ)(),
        h = !1 === r.nsfwAllowed,
        [p, x] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && x(m.visibility === om.a.PUBLIC);
    }, [m?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        I = (0, oT.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, oS.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = p ? om.a.PRIVATE : om.a.PUBLIC;
            (x(!p),
                oC.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: p ? rk.Mq.WISHLIST_TOGGLE_PRIVATE : rk.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, oS.y9)(s) : void 0,
                }));
        }, [g, p, f, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !p &&
                (0, i.jsxs)("div", {
                    className: uc.lm,
                    children: [
                        (0, i.jsx)(oh.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, i.jsxs)("div", {
                    className: uc.lm,
                    children: [
                        (0, i.jsx)(s_.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eK.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: uc.U1,
                children: [
                    (0, i.jsx)(eK.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eU.intl.format(eU.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(um, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: p,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(ug, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function ux(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, s1.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([Q.A, C.default], () => ({
            wishlistId: Q.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, b.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, rJ.bq)(),
                s = (0, a.bG)(
                    [Q.A],
                    () => (null != t ? Q.A.getProfileReadStateSectionAckedAt(t, oN.o.WISHLIST) : null),
                    [t],
                ),
                [o, u] = l.useState(void 0);
            (i || void 0 === o || u(void 0), i && null != t && null != r && void 0 === o && u(r.enabled ? s : null));
            let d = (0, a.bG)([r0.A, Q.A], () => null != t && (0, ok.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && d && null != t && (0, ok.U)(t);
                }, [i, c, d, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = s2(t.id),
        { wishlist: m, wasFetched: f, error: h } = (0, H.fw)({ wishlistId: o, userId: t.id }),
        [p, x] = l.useState(!1);
    (f && !p && x(!0), (0, oE.A)(m));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([oj.A], () => oj.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, ov.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, ob.w)({ userIds: s }),
                c = (0, ob.mn)({ userIds: s }),
                g = (0, ob.tR)(s),
                m = (0, ob.rY)(),
                f = (0, ob.qx)(),
                h = (0, ob.px)();
            return l.useMemo(
                () => (0, si.uniq)([...u, ...d, ...c, ...g, ...(r ? [...m, ...f, ...h] : [])].filter(ed.Vq)),
                [u, d, c, g, m, f, h, r],
            );
        })({ wishlist: m, profileOwner: t, currentUser: u }),
        I = (0, op.A)(() => (0, og.A)()),
        v = l.useCallback(() => {
            (0, tD.Cz)({ analyticsLocations: d, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [d]),
        y = l.useCallback((e) => {
            (0, oy.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iq.M)(), (0, oy.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, ab.c)({
            userId: u?.id,
            skuId: iJ.pe.TIER_2,
            nuxGraphic: oI.g,
            onNuxShow: ox.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != h) return null;
    let N = null == m || 0 === m.items.length;
    return (0, i.jsxs)(sv, {
        scrollerRef: r,
        className: s()({ [uc.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(uh, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(aJ, { scrollerRef: r }),
                          (0, i.jsx)(up, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, oS.C3)(m, iJ.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(oW, {
                              items: m.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(un, {
                    user: t,
                    guildId: n,
                    wishlist: m,
                    hasFetchedWishlist: p,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? uc._E : uc.HZ,
                }),
        ],
    });
}
function uA(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rk.RP.ACTIVITY
        ? (0, i.jsx)(sb, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rk.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sT, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rk.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sL, { user: t, onClose: o })
            : l === rk.RP.WIDGETS
              ? (0, i.jsx)(oc, { user: t, guildId: s, channelId: a })
              : l === rk.RP.WISHLIST
                ? (0, i.jsx)(ux, { profileOwner: t, guildId: s })
                : null;
}
function uI(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guildId: s,
            channelId: o,
            items: u,
            initialSection: d,
            onClose: g,
        } = e,
        { trackUserProfileAction: h } = (0, $.NJ)(),
        { shouldLogExposure: p } = (0, rQ.A)(t),
        { primaryColor: x } = (0, r7.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), h({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, h]);
    let [j, b] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        y = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = r8({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [Q.A, r0.A],
                    () => {
                        if (null == Q.A.getUserProfile(t.id) || Q.A.isFetchingProfile(t.id, l)) return !0;
                        let e = Q.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = r0.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = Q.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && r0.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rk.RP.WIDGETS) &&
                      r.some((e) => e.section === rk.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [C, E] = l.useState(!1);
    !C && null != y && (E(!0), null == d && y && b(rk.RP.WISHLIST));
    let S = u.find((e) => e.section === j) ?? u[0];
    return (
        S.section !== j && b(S.section),
        (0, i.jsxs)("div", {
            className: sI.kL,
            children: [
                p && (0, i.jsx)(rJ.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sI.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rZ.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: S.section,
                        onItemSelect: function (e) {
                            rv.A.hasUnsavedChanges() && S.section === rk.RP.WIDGETS
                                ? (0, nN.VQ)()
                                : (h({ action: "PRESS_SECTION", section: e }), b(e), E(!0));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                rZ.V.Item,
                                {
                                    className: sI.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eU.intl.formatToPlainString(eU.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(r$.N, { variant: A, className: sI.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rZ.V.Panel, {
                    id: S.section,
                    "aria-label": S.text,
                    className: sI.NM,
                    children: (0, i.jsx)(f.F, {
                        component: (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: S.text }) }),
                        children: (0, i.jsx)(uA, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: o,
                            section: S.section,
                            onClose: g,
                        }),
                    }),
                }),
            ],
        })
    );
}
var uv = n(933832),
    uj = n(972213);
let ub = {
        [rk.jM.WIDGET_ADDED]: {
            message: eU.intl.string(eU.t.fFP1Uy),
            icon: (0, i.jsx)(uv.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [rk.jM.WIDGET_REMOVED]: {
            message: eU.intl.string(eU.t.zzsK7h),
            icon: (0, i.jsx)(uv.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [rk.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eU.intl.string(eU.t["84MExs"]),
            icon: (0, i.jsx)(uj.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rk.jM.SOMETHING_WENT_WRONG]: {
            message: eU.intl.string(eU.t.F8FvUy),
            icon: (0, i.jsx)(uj.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    uy = (e) => {
        let { className: t } = e,
            n = (0, rN.fu)(),
            r = (0, a.bG)([tA.Ay], () => tA.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(ub[n]), nb.O.announce(ub[n].message)) : o(!1);
        }, [n]);
        let g = (0, d.p)(
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
            l.useEffect(() => () => (0, rN.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rN.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lK.animated.div, { className: t, style: e, children: (0, i.jsx)(rV, { ...u }) }),
                ),
            })
        );
    };
var uC = n(297413),
    uE = n(465829),
    uS = n(826673),
    uN = n(73392),
    uk = n(576705),
    uT = n(997394);
function uP(e) {
    return null == e || "" === e ? void 0 : e;
}
function uO(e) {
    let t,
        n,
        r,
        o,
        u,
        d,
        c,
        g,
        m,
        f,
        { user: h, displayProfile: x } = e,
        { analyticsLocations: A } = (0, b.Ay)(),
        I = x?.guildId != null,
        v = x?.guildId ?? void 0,
        j = Z.Ay.canUsePremiumProfileCustomization(h),
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([uk.A, z.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = z.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: uk.A.can(T.xBc.CHANGE_NICKNAME, e) || uk.A.can(T.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = I && !y && E,
        {
            value: N,
            previewValue: k,
            fallbackDisplayName: P,
            onCommit: O,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([eA.Ay], () => (null != t ? (eA.Ay.getMember(t, h.id)?.nick ?? null) : null))),
        (u = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(t).pendingNickname)),
        (m = (g = void 0 !== (c = n ? d : u) ? c : n ? o : r) ?? ""),
        (f = n ? (uP(r) ?? h.username) : h.username),
        {
            value: m,
            previewValue: uP(g) ?? f,
            fallbackDisplayName: f,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, th.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, th.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        R = (0, a.bG)([eI.A], () => eI.A.getErrors(v ?? null)),
        L = (0, tf.EC)(v ?? null),
        _ = I ? R.nick?.[0] : R.global_name?.[0],
        w = L?.nick?.[0],
        M = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(v).pendingDisplayNameStyles),
        D = (0, np.A)({ userId: h.id, guildId: v, pendingDisplayNameStyles: M }),
        G = (0, uN.a)({ displayNameStyles: D, compensateForSafari: !1 }),
        U = eU.intl.string(I ? eU.t.mq6Cg9 : eU.t.XuZU7A),
        F = I ? eU.intl.string(eU.t.YcDKr8) : h.username,
        B = l.useRef(null),
        W = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, uS.Dr)(eS.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eG.i.INDIRECT_ACTION,
                    }),
                    (0, nK.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: B }));
            },
            [A, v],
        ),
        V = {
            icon: t9.PaintbrushThinIcon,
            tooltip: eU.intl.string(eU.t.lqKKI2),
            "aria-label": eU.intl.string(eU.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: uT.Cs,
                  children: (0, i.jsx)(no.LockIcon, { size: "refresh_sm", color: p.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tI.kL,
        children: (0, i.jsx)(eK.E, {
            variant: uE.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(r_.w, {
                value: N,
                onCommit: O,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, t) => {
                    let { focused: n } = t;
                    return (0, i.jsx)(uE.c$, {
                        user: h,
                        guildId: v,
                        displayName: n ? (uP(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: M,
                        className: s()(uT.dt, { [uT.jW]: n && "" === e }),
                        displayNameTrailing: H,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: 32,
                textVariant: "inherit",
                trailing: y && j ? V : void 0,
                error: _,
                helperText: S ? eU.intl.string(eU.t.gzjxQi) : w,
                disabled: !y,
            }),
        }),
    });
}
var uR = n(628072);
function uL(e) {
    let t,
        n,
        r,
        o,
        u,
        { displayProfile: d } = e,
        {
            value: c,
            previewValue: g,
            onCommit: m,
        } = ((t = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(t).pendingPronouns)),
        (o = n ? d?._guildMemberProfile?.pronouns : d?.pronouns),
        (u = d?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: u,
            onCommit: l.useCallback(
                (e) => {
                    (0, th.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        f = d?.guildId != null,
        h = null != g && g.length > 0,
        p = eU.intl.string(f ? eU.t.AXiE0i : eU.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(tI.kL, tI.oE, uR.k),
        children: (0, i.jsx)(r_.w, {
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
            preview: h ? (0, i.jsx)(uE.n2, { pronouns: g }) : null,
            label: eU.intl.string(eU.t["rniRE+"]),
            placeholder: p,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var u_ = n(873200),
    uw = n(305866),
    uM = n(145497),
    uD = n(685073),
    uG = n(2967),
    uU = n(318785),
    uF = n(534400),
    uB = n(152313),
    uW = n(830543),
    uV = n(415916),
    uH = n(743981),
    uz = n(295930),
    uY = n(594615);
let uK = "no-server-tag";
function uq(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e7.D, {
        innerRef: t,
        className: s()(uz.qJ, { [uz.wK]: o }),
        "aria-label": o ? eU.intl.string(eU.t.Pdd1nd) : eU.intl.formatToPlainString(eU.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eK.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: uz.W3,
            tag: "span",
            children: [
                o
                    ? eU.intl.string(eU.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  uF.Z9,
                                  {
                                      src: (0, uD.gC)(n, r, uH.Sl.SIZE_14),
                                      size: uH.Sl.SIZE_14,
                                      className: uz.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uD.gC)(n, r, uH.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(lo.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: uz.u4 }),
            ],
        }),
    });
}
function uX() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, uU.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uG.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, uD.Zo)(e?.primaryGuild);
        }),
        c = d.guildId ?? null,
        g = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(null).pendingPrimaryGuildId),
        m = void 0 !== g ? g : c,
        f = null != m ? (u.get(m) ?? null) : null,
        h = null == f && m === c,
        p = f?.profile?.tag ?? (h ? (d.tag ?? null) : null),
        x = f?.profile?.badge ?? (h ? d.badge : void 0),
        A = l.useCallback(
            (e) =>
                e.id === uK
                    ? (0, i.jsx)("div", {
                          className: uY.uN,
                          children: (0, i.jsx)(eK.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: uz.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(lx.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: uK, label: eU.intl.string(eU.t.VxdWWH), value: uK },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(uM.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(uF.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [n],
        ),
        v = 0 === n.length && null == c;
    if (v && !o) return null;
    function b(e) {
        (e(),
            (0, uV.A)(!0, () => {
                ((0, iq.M)(), (0, uW.default)(), (0, uB.A)(r, j.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(u_.a3, {
        label: eU.intl.string(eU.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eU.intl.string(eU.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nL.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(uw.l, {
                className: s()(uz.yt, { [uz.R4]: o && !v, [uz.Lo]: v }),
                "aria-label": eU.intl.string(eU.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: uz.p$,
                          children: [
                              (0, i.jsx)(eK.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eU.intl.string(eU.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(ng.$, {
                                  text: eU.intl.string(eU.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => b(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(u_.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, th.p)({ primaryGuildId: e === uK ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: uz.wx,
                                        children: [
                                            y,
                                            (0, i.jsx)(ng.$, {
                                                text: eU.intl.string(eU.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => b(n),
                                            }),
                                        ],
                                    })
                                  : y,
                              (0, i.jsx)(u_.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(uq, { buttonRef: e, guildId: m, guildTag: p, guildBadge: x, ...t }),
    });
}
var uZ = n(956495);
function u$(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(uE.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function uJ(e) {
    let t = (0, a.bG)([eI.A], () => eI.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(u$, { ...e, displayNameStylesOverride: t });
}
function uQ(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(uC.A, {
                  user: t,
                  forceUsername: !0,
                  className: uZ.a1,
                  usernameClass: uZ.eb,
                  discriminatorClass: uZ.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(uO, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(uZ.AK, uZ.j6),
                children: [r, (0, i.jsx)(uE.Ce, {}), (0, i.jsx)(uL, { displayProfile: n }), (0, i.jsx)(uX, {}), l],
            }),
        ],
    });
}
function u0(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(u$, { ...n });
        case "try-it-out":
            return (0, i.jsx)(uJ, { ...n });
        case "edit":
            return (0, i.jsx)(uQ, { ...n });
        default:
            return (0, ed.xb)(t);
    }
}
var u1 = n(97808),
    u6 = n(22231),
    u2 = n(601255),
    u4 = n(562819),
    u3 = n(253400),
    u8 = n(339984),
    u7 = n(329801),
    u5 = n(884362);
let u9 = u3.Ay.getEnableHardwareAcceleration() ? u1.Js : u1.eu;
function de(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function dt(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(ur.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.YAgq3W),
        children: (0, i.jsx)(ul.rX, { children: n }),
    });
}
function dn(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eV.V)(e),
        [u, d] = l.useState(!1),
        c = l.useRef(null),
        g = l.useRef(null),
        m = l.useCallback(() => d(!1), []),
        f = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = null != n,
                c = (0, a.bG)([eA.Ay], () => (null != n ? eA.Ay.getMember(n, t.id) : null)),
                g = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = d ? c?.avatar : t.avatar,
                f = (0, ep.z5)(g, m),
                h = d && null != t.avatar,
                p = Z.Ay.canUsePremiumProfileCustomization(t),
                x = p || null == n,
                A = p || null == n,
                I = (0, a.bG)([z.A], () => (null != n ? z.A.getGuild(n) : null)),
                v = (0, ep.a4)({ user: t }),
                j = (0, ep.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, ep.CP)(n ?? void 0),
                C = void 0 !== y,
                E = null != (0, u2.A)(C ? y : j) && (C ? null != y : null != j),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        de(() =>
                            (0, nv.XD)({
                                uploadType: u8.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        de(() =>
                            (0, u4.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, nv.rM)(null, m, (e) => (0, th.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ep.WU)(h ? "reset" : "remove"));
                }, [r, n, m, h]),
                P = l.useCallback(() => {
                    (r(), (0, th.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                ul.Dr,
                                { id: "change-avatar", label: eU.intl.string(eU.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                ul.Dr,
                                { id: "change-decoration", label: eU.intl.string(eU.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            h
                                ? (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.twB3fz),
                                          action: T,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        E &&
                        e.push(
                            S
                                ? (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["9rx5GO"]),
                                          action: P,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [h, x, A, S, f, E, N, k, T, P]);
        })({ user: t, guildId: n, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, i.jsx)(eV.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(u7.my, u7.vk, u5.kL, { [u5.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(u9, { ...r, imageClassName: s()(u7.Lw, u5.HU) }),
                  (0, i.jsx)(nL.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nL.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, i.jsx)(dt, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: u5.r9,
                              children: (0, i.jsx)(ne.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: u6.PencilIcon,
                                  "aria-label": eU.intl.string(eU.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), d((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var di = n(514905);
function dl(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(ur.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.FzU73A),
        children: (0, i.jsx)(ul.rX, { children: n }),
    });
}
function dr(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        u = l.useRef(null),
        d = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = (0, ep.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, ep.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, ep.Xf)({ user: t, guildId: void 0 }),
                m = Z.Ay.canUsePremiumProfileCustomization(t),
                f = null == n,
                h = f || m,
                p = f || m,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: I,
                    pendingProfileFrame: v,
                } = (0, a.bG)([eI.A], () => eI.A.getPendingChanges(n ?? void 0)),
                j = (0, a.bG)([Q.A], () =>
                    null != n ? Q.A.getGuildMemberProfile(t.id, n)?.banner : Q.A.getUserProfile(t.id)?.banner,
                ),
                y = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, ep.Ac)(A, j),
                k = x && y,
                T = x && E,
                P = x && S,
                O = void 0 === I ? null != d : null != I,
                R = void 0 === v ? null != c : null != v,
                _ = (0, ep.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, L.A)(_?.skuId),
                M = l.useCallback(() => {
                    (r(),
                        (0, nv.XD)({
                            uploadType: u8.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                D = l.useCallback(() => {
                    (r(),
                        (0, is.W)({
                            analyticsLocations: u,
                            guild: null != n ? (z.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nv.rM)(null, j, (e) => (0, th.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, th.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, iC.w)({
                            analyticsLocations: u,
                            guild: null != n ? (z.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, w, s]),
                B = l.useCallback(() => {
                    (r(), (0, th.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, i.jsx)(
                                ul.Dr,
                                { id: "change-banner", label: eU.intl.string(eU.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                ul.Dr,
                                { id: "change-effect", label: eU.intl.string(eU.t["/6nv6N"]), action: D },
                                "change-effect",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                ul.Dr,
                                { id: "change-frame", label: eU.intl.string(eU.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    m &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      ul.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["8DfADq"]),
                                          action: B,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, m, h, p, T, P, N, O, R, M, D, F, G, U, B]);
        })({ user: t, guildId: n, onClose: c, returnRef: d });
    return 0 === g.length
        ? (0, i.jsx)(ez.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(di.kL, { [di.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(ez.A, { ...e, className: di.Pr }),
                  (0, i.jsx)(nL.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nL.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(dl, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: di.r9,
                              children: (0, i.jsx)(ne.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: u6.PencilIcon,
                                  "aria-label": eU.intl.string(eU.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var ds = n(419341),
    da = n(776879),
    du = n(837531),
    dd = n(186272),
    dc = n(447538);
let dg = (e) => e * (2 - e),
    dm = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function df(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function dh(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, er.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: dc.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function dp(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (iu.add(e), () => iu.delete(e)),
            () => id,
        );
    return null == s ? null : (0, i.jsx)(O.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function dx(e) {
    var t;
    let n,
        r,
        {
            user: o,
            currentUser: u,
            guildId: d,
            originGuildId: m,
            channelId: f,
            displayProfile: h,
            nickname: p,
            hasEntered: x,
            customStatusPrompt: A,
            onClose: v,
            onCreateTag: j,
            avatarDecorationOverride: b,
            avatarOverride: C,
            bannerOverride: E,
            accentColorOverride: S,
            profileEffectOverride: N,
            profileFrame: k,
            fadeInProfileFrame: P,
            editingMode: O,
            isLoading: R = !1,
        } = e,
        L = o.id === u.id,
        _ = "edit" === O,
        M = l.useRef(null),
        D = l.useRef(null),
        W = l.useRef(null);
    l.useEffect(() => {
        if (L) return () => y.A.setState({ isOpen: !1 });
    }, [L]);
    let { isHoveringOrFocusing: H } = (0, G.A)(M),
        [z, q] = l.useState(),
        Z = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? q("compact-xs") : t <= 380 ? q("compact-sm") : q(void 0);
        }, []);
    (0, I.g)(M, Z, [], { fireOnMount: !0 });
    let $ = null != z ? dm[z] : void 0,
        J = l.useMemo(() => A ?? (0, U.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([Y.A], () => ({
            relationshipType: Y.A.getRelationshipType(o.id),
            originApplicationId: Y.A.getOriginApplicationId(o.id),
        })),
        el =
            ((t = o.id),
            (n = (0, et.bG)([ei.default], () => ei.default.locale)),
            (r = (0, et.bG)([Y.A], () => (Y.A.getRelationshipType(t) === T.eA$.FRIEND ? Y.A.getSince(t) : null), [t])),
            (0, en.An)(r, n)),
        er = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        eg = (0, B.q)({ userId: o.id }),
        em = (0, F.fi)(o.id),
        { appIdentities: ef, connections: eh } = (function (e) {
            let { filteredAppIdentities: t } = (0, eu.A)(e),
                n = (0, ec.A)(e),
                i = l.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
                r = (0, eo.A)([...i]).filter(ed.Vq);
            return {
                appIdentities: l.useMemo(
                    () =>
                        t
                            .map((e) => ({ identity: e, application: r.find((t) => t.id === e.application_id) }))
                            .filter((e) => {
                                let { application: t } = e;
                                return null != t;
                            }),
                    [t, r],
                ),
                connections: l.useMemo(
                    () =>
                        n.filter((e) => {
                            let t = ea.A.get(e.type);
                            return t?.migrationData == null || !i.has(t.migrationData.replacedBy);
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        ep = (0, es.A)(o.id),
        ex = eh.length > 0 || ef.length > 0,
        eA = ep.length > 0,
        eI = _ ? dr : ez.A,
        eb = h?.guildId ?? d,
        ey = {
            user: o,
            displayProfile: h,
            guildId: d,
            channelId: f,
            avatarSize: $?.avatarSize ?? ej.T[ev.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: b,
            avatarOverride: C,
        },
        eC = l.useCallback(() => {
            (0, e3.A)({ user: o, guildId: eb, alt: p });
        }, [p, eb, o]);
    return (0, i.jsxs)("main", {
        className: s()(dc.profile, null != z && dc[z]),
        ref: M,
        "aria-busy": R,
        children: [
            (0, i.jsxs)("div", {
                className: dc.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: dc.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: h,
                            guildId: d,
                            themeType: ev.d.MODAL_V2,
                            specOverrides: $,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    _
                        ? (0, i.jsx)(dn, { ...ey })
                        : (0, i.jsx)(eV.A, {
                              ...ey,
                              onOpenAvatar: "read-only" === O ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === O && null == C ? i9.$T : void 0,
                          }),
                    (0, i.jsx)(e2.A, {
                        user: o,
                        guildId: d,
                        channelId: f,
                        themeType: ev.d.MODAL_V2,
                        hasEntered: x,
                        prompt: L ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: dc.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(u0, {
                                user: o,
                                displayProfile: h,
                                nickname: p,
                                trailing: (0, i.jsx)(eH.A, {
                                    displayProfile: h,
                                    themeType: ev.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: L,
                                    popoutAnchorRef: x ? D : void 0,
                                    containerRef: W,
                                }),
                                onClose: v,
                                onCreateTag: j,
                                editingMode: O,
                            }),
                            (0, i.jsx)("div", { ref: D }),
                            L &&
                                x &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(eW, { targetElementRef: W }),
                                        (0, i.jsx)(eF, { targetElementRef: W }),
                                    ],
                                }),
                        ],
                    }),
                    Q === T.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: dc.profileOverlay,
                            children: (0, i.jsx)(eZ.A, {
                                user: o,
                                applicationId: ee,
                                guildId: h?.guildId ?? void 0,
                                channelId: f,
                                className: dc.profileBanner,
                            }),
                        }),
                    em.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e6.A.Overlay,
                            {
                                className: dc.profileOverlay,
                                children: (0, i.jsx)(eZ.A, {
                                    user: o,
                                    guildId: h?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: dc.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: dc.profileOverlay,
                            children: (0, i.jsx)(tm, {
                                heading: eU.intl.string(eU.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: dc.profileBanner,
                                children: (0, i.jsx)(V.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e1.A, { user: o, className: dc.profileBanner }),
                    h?.private &&
                        (0, i.jsx)(e6.A.Overlay, {
                            className: dc.profileOverlay,
                            children: (0, i.jsx)(e0.A, { username: p }),
                        }),
                    (0, i.jsx)("div", {
                        className: dc.profileButtons,
                        children: (0, i.jsx)(tV, {
                            user: o,
                            currentUser: u,
                            guildId: d,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: h,
                            relationshipType: Q,
                            onClose: v,
                        }),
                    }),
                    L && "try-it-out" !== O && (0, i.jsx)(eY.A, { isPremiumUser: (0, X.ki)(u) }),
                    !er && (0, i.jsx)(tT, { currentUser: u, displayProfile: h, canEditInPlace: _ }),
                    eg.length > 0 &&
                        (0, i.jsx)(tm, {
                            heading: eU.intl.string(eU.t["Uv/eTx"]),
                            children: (0, i.jsx)(eX.A, { applicationIds: eg }),
                        }),
                    (0, i.jsx)(tm, {
                        heading: eU.intl.string(eU.t.a6XYD9),
                        children: (0, i.jsx)(eJ.A, { userId: o.id, guildId: h?.guildId, tooltipDelay: 300 }),
                    }),
                    null != el &&
                        (0, i.jsx)(tm, {
                            heading: eU.intl.string(eU.t.wlTO8v),
                            children: (0, i.jsx)(eq, { friendsSinceDate: el }),
                        }),
                    h?.guildId != null &&
                        (0, i.jsx)(e4.A, {
                            userId: o.id,
                            guildId: h.guildId,
                            className: dc.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !er &&
                        (_ || ex) &&
                        (0, i.jsx)(tm, {
                            heading: eU.intl.string(eU.t["3fe7U5"]),
                            scrollTargetId: rk.bk.CONNECTIONS,
                            children: (0, i.jsx)(t5, {
                                applicationIdentities: ef,
                                connections: eh,
                                userId: o.id,
                                allowEditing: _,
                                className: dc.profileAppConnections,
                            }),
                        }),
                    !er &&
                        eA &&
                        (0, i.jsx)(tm, {
                            heading: eU.intl.string(eU.t.PHjkRE),
                            scrollTargetId: rk.bk.APPS,
                            children: (0, i.jsx)(ta, {
                                applicationRoleConnections: ep,
                                onClose: v,
                                className: dc.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rF, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(dp, { displayProfile: h, profileEffectOverride: N, isHovering: H }),
            null != k && (0, i.jsx)(w.A, { frame: k, filterLayer: df, fadeIn: P }),
        ],
    });
}
function dA(e) {
    let { user: t, displayProfile: n, pendingThemeColors: l, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: u,
        } = (0, el.A)({ user: t, displayProfile: n, pendingThemeColors: l, isPreview: r }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, ef.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: u,
        });
    return (0, i.jsx)("div", { className: c, style: d, children: s });
}
function dI(e) {
    let t,
        n,
        {
            user: r,
            currentUser: u,
            guildId: c,
            originGuildId: g,
            channelId: I,
            messageId: y,
            roleId: O,
            sessionId: w,
            initialTabSection: G,
            initialScrollTarget: U,
            transitionState: F,
            customStatusPrompt: B,
            openedAt: V,
            onClose: Y,
            sourceAnalyticsLocations: X = [],
            themeContainerClassName: et,
        } = e,
        en = r.id === u.id,
        ei = l.useCallback(() => (0, uV.A)(en, Y), [en, Y]),
        el = l.useCallback(
            (e) =>
                (0, uV.A)(en, () => {
                    (Y(), e());
                }),
            [en, Y],
        ),
        {
            guildId: er,
            pendingGuildId: es,
            isFetching: ea,
            handleSelectUserProfile: eo,
            handleRetry: eu,
            hasError: ed,
        } = (function (e) {
            let { userId: t, initialGuildId: n } = e,
                [i, r] = l.useState(n),
                [s, o] = l.useState(n),
                [u, d] = l.useState("idle"),
                [c, g] = l.useState(0),
                m = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t)?.fetchError?.status ?? null, [t]),
                f = l.useCallback(() => {
                    (d("retrying"), g((e) => e + 1));
                }, []),
                h = l.useCallback((e) => {
                    (d("loading"), r(e ?? void 0));
                }, []);
            return (
                l.useEffect(() => {
                    let e = !1;
                    return (
                        (0, eh.A)(t, void 0, {
                            type: "modal",
                            guildId: i,
                            withMutualFriendsCount: !0,
                            withMutualFriends: !1,
                            withMutualGuilds: !0,
                        }).then(
                            () => {
                                e || (o(i), d("idle"));
                            },
                            () => {
                                e || (o(i), d("idle"));
                            },
                        ),
                        () => {
                            e = !0;
                        }
                    );
                }, [i, t, c]),
                {
                    guildId: s,
                    pendingGuildId: i,
                    isFetching: "idle" !== u,
                    hasError: "retrying" === u || (null != m && "loading" !== u),
                    handleSelectUserProfile: h,
                    handleRetry: 404 !== m && 429 !== m ? f : void 0,
                }
            );
        })({ userId: r.id, initialGuildId: c }),
        ec = l.useMemo(() => (null != er ? { [er]: [r.id] } : {}), [er, r.id]);
    (0, v.Eq)(ec, "UserProfileModalV2");
    let ef = ns(),
        ej = (0, a.bG)([K.A], () => K.A.hidePersonalInformation),
        eS = (0, eg.A)(r.id),
        eN = (0, em.W)(r.id),
        ek = ed && !eN,
        eT = eS && !ej && !ed && !ef,
        eP = ef ? "try-it-out" : eT ? "edit" : "read-only",
        {
            pendingThemeColors: eO,
            avatarDecorationOverride: eR,
            avatarOverride: eL,
            bannerOverride: e_,
            accentColorOverride: ew,
            profileEffectOverride: eM,
            profileFrameOverride: eD,
        } = (function (e) {
            let { userId: t, guildId: n, editingMode: i } = e;
            return (0, a.cf)(
                [eI.A, C.default, eA.Ay, Q.A],
                () => {
                    if ("read-only" === i) return ey;
                    let e = C.default.getUser(t);
                    if (null == e) return ey;
                    let l = eI.A.getTryItOutChanges(),
                        r =
                            "try-it-out" === i
                                ? {
                                      pendingThemeColors: l.tryItOutThemeColors,
                                      pendingAvatar: l.tryItOutAvatar,
                                      pendingBanner: l.tryItOutBanner,
                                      pendingAvatarDecoration: void 0,
                                      pendingProfileEffect: void 0,
                                      pendingAccentColor: void 0,
                                      pendingProfileFrame: void 0,
                                  }
                                : eI.A.getPendingChanges(n),
                        s = null != n ? eA.Ay.getMember(n, t) : null,
                        a = Q.A.getUserProfile(t),
                        o = null != n ? Q.A.getGuildMemberProfile(t, n) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, ep.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, ex.V7)({ userId: t, image: r.pendingAvatar, size: eb }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, ep.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, ep.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: r.id, guildId: er, editingMode: eP }),
        {
            isExpanded: eG,
            isAnimating: eF,
            transition: eB,
            handleExpand: eW,
            handleCollapse: eV,
            refs: { expandIconButtonRef: eH, expandTabButtonRef: ez, collapseButtonRef: eY },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: dg },
                    onRest: () => i(!1),
                }),
                s = (0, A.A)("(min-width: 929px) and (min-height: 550px)"),
                a = l.useRef(null),
                o = l.useRef(null),
                u = l.useRef(null),
                c = l.useRef(null),
                g = l.useCallback(() => {
                    ((c.current = "collapse"), i(!0), t(!0));
                }, []),
                m = l.useCallback(() => {
                    ((c.current = "expand"), i(!0), t(!1));
                }, []);
            return (
                l.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) ((c.current = null), u.current?.focus());
                        else if ("expand" === c.current && !e) {
                            c.current = null;
                            let e = s ? o.current : a.current;
                            e?.focus();
                        }
                    }
                }, [e, n, s]),
                {
                    isExpanded: e,
                    isAnimating: n,
                    transition: r,
                    handleExpand: g,
                    handleCollapse: m,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eK = eS && !eG,
        eq = eS && (!eG || eF),
        { defaultWishlistId: eX } = (0, a.cf)([Q.A], () => ({ defaultWishlistId: Q.A.getFirstWishlistId(r.id) }));
    ((0, H.fw)({ wishlistId: eX, userId: r.id }),
        (t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
        (n = (0, a.bG)([P.A], () => P.A.shouldFetch())),
        (0, l.useEffect)(() => {
            null != t &&
                n &&
                (async function () {
                    S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
                    try {
                        let e = await E.Bo.get({
                            url: "/storefront/recommended-items",
                            query: { application_ids: [T.FYj], limit: 100 },
                            rejectWithError: !0,
                        });
                        S.h.dispatch({
                            type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS",
                            recommendation: {
                                skuIds: e.body.recommended_items.map((e) => {
                                    let { sku_id: t } = e;
                                    return t;
                                }),
                            },
                        });
                    } catch (t) {
                        let e = new N.LG(t);
                        ((0, k.o)(e), S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" }));
                    }
                })();
        }, [t, n]));
    let eZ = (0, eE.fC)(),
        eJ = ek && (!eS || !ea),
        e0 = eS && ed,
        e1 = es !== er || e0 || null != eZ.interactionType,
        e2 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sC.A)(t),
                r = l?.length,
                s = (0, da.A)(t),
                a = (0, s6.A)(t.id),
                o = (0, ds.A)(t),
                { hasNewWishlistItems: u } = (0, rQ.A)(t),
                d = [],
                c = t.id === n?.id,
                g = s2(t.id),
                m = a.length > 0;
            return (
                (g || m) && d.push({ text: eU.intl.string(eU.t.laViwx), section: rk.RP.WIDGETS }),
                d.push({ text: eU.intl.string(eU.t.chq59f), section: rk.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eU.intl.string(eU.t["7lZ31J"]), section: rk.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, du.A)(i), section: rk.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, dd.A)(r), section: rk.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: r, currentUser: u }),
        { analyticsLocations: e4 } = (0, b.Ay)([...X, j.A.USER_PROFILE_MODAL_V2]),
        e3 = (0, $.pb)({
            layout: "MODAL_V2",
            userId: r.id,
            sourceSessionId: w,
            guildId: er,
            channelId: I,
            messageId: y,
            roleId: O,
        }),
        e8 = l.useCallback(() => {
            ((0, J.Wn)({ analyticsLocations: e4, ...e3, action: rk.pt.SHOW_STYLES_PANEL }), eW());
        }, [e4, e3, eW]),
        e7 = l.useCallback(() => {
            ((0, J.Wn)({ analyticsLocations: e4, ...e3, action: rk.pt.HIDE_STYLES_PANEL }), eV());
        }, [e4, e3, eV]),
        e5 = (0, ee.Ay)(r.id, er);
    (0, W.A)(e4, e5, rk.R7.MODAL_V2);
    let e9 = void 0 !== eD ? eD?.skuId : e5?.profileFrame?.skuId,
        te = (0, L.A)(e9),
        tt = (0, R.A)(e9),
        { profileFrameStyle: tn, profileFrameClassName: ti } = (0, M.A)(te);
    (0, _.A)({ skuId: e5?.profileFrame?.skuId, openedAt: V, context: e3, analyticsLocations: e4 });
    let tl = (0, a.bG)([C.default], () => Z.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        tr = ef || (en && null != e5 && tl),
        ts = q.Ay.useName(e5?.guildId, I, r),
        ta = (0, D.GV)(),
        to = (0, a.bG)([z.A], () => (null != er ? z.A.getGuild(er) : null)),
        tu = en
            ? null != to
                ? eU.intl.formatToPlainString(eU.t.M7OhOF, { guildName: to.name })
                : eU.intl.string(eU.t.egQPgM)
            : eU.intl.format(eU.t.KRe1Fk, { name: ts });
    return (0, i.jsx)(b.f5, {
        value: e4,
        children: (0, i.jsx)($.of, {
            value: e3,
            openedAt: V,
            fetchStartedAt: e5?.fetchStartedAt,
            fetchEndedAt: e5?.fetchEndedAt,
            isLoaded: e5?.isLoaded,
            children: (0, i.jsx)(eE.Hl, {
                value: eZ,
                children: (0, i.jsx)(eC.N, {
                    value: U,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(i9.zr, { [i9.QF]: e5?.private === !0 }),
                        transitionState: F,
                        "aria-labelledby": ta,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rX, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(dc.layoutContainer, ti, {
                                        [dc.editingPanelEnabled]: eS,
                                        [dc.editingPanelExpanded]: eS && eG,
                                        [dc.isAnimating]: eF,
                                    }),
                                    style: tn,
                                    children: [
                                        (0, i.jsxs)(dA, {
                                            user: r,
                                            displayProfile: e5,
                                            pendingThemeColors: eO,
                                            forceShowPremium: tr,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: i9.Oo,
                                                    children: [
                                                        (0, i.jsx)(tH.A, { onClose: ei }),
                                                        (0, i.jsx)(m.A, {
                                                            children: (0, i.jsx)(f.H, { id: ta, children: tu }),
                                                        }),
                                                        eq &&
                                                            (0, i.jsx)(l9, {
                                                                buttonRef: eH,
                                                                onClick: e8,
                                                                className: dc.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eK &&
                                                    (0, i.jsx)("div", {
                                                        className: dc.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(l5, {
                                                            innerRef: ez,
                                                            onClick: e8,
                                                            className: dc.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(f.F, {
                                            children: [
                                                eS &&
                                                    eB((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(re, {
                                                                  className: s()(dc.editingPanel, {
                                                                      [dc.isExpanded]: eG,
                                                                  }),
                                                                  selectedGuildId: es,
                                                                  originGuildId: g,
                                                                  onSelectGuildId: eo,
                                                                  onClose: e7,
                                                                  collapseButtonRef: eY,
                                                                  isLoading: ea,
                                                                  isEditingDisabled: ed,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e6.A, {
                                                    className: s()(et, i9.A7, dc.profileContentOuter),
                                                    innerClassName: dc.profileContentInner,
                                                    user: r,
                                                    displayProfile: e5,
                                                    themeType: ev.d.MODAL_V2,
                                                    pendingThemeColors: eO,
                                                    isPrivate: e5?.private === !0,
                                                    forceShowPremium: tr,
                                                    children: [
                                                        (0, i.jsx)(dh, { displayProfile: e5, pendingBanner: e_ }),
                                                        e5?.private === !0 && (0, i.jsx)(eQ.A, {}),
                                                        !ek && (0, i.jsx)(uy, { className: dc.noticeContainer }),
                                                        eJ &&
                                                            (0, i.jsx)("div", {
                                                                className: dc.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rV, {
                                                                    icon: (0, i.jsx)(h.WarningIcon, {
                                                                        size: "sm",
                                                                        color: p.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eU.intl.string(eU.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != eu
                                                                            ? eU.intl.string(eU.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: eu,
                                                                    actionDisabled: !eS && ea,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: dc.profileCardToastContainer,
                                                            children: (0, i.jsx)(e$.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rK, {
                                                            showScrim: e1,
                                                            showLoadingSpinner: ea,
                                                            className: dc.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(dx, {
                                                                    user: r,
                                                                    currentUser: u,
                                                                    guildId: er,
                                                                    channelId: I,
                                                                    displayProfile: e5,
                                                                    nickname: ts,
                                                                    originGuildId: g,
                                                                    hasEntered: F === x.ip.ENTERED,
                                                                    customStatusPrompt: B,
                                                                    onClose: ei,
                                                                    onCreateTag: el,
                                                                    avatarDecorationOverride: eR,
                                                                    avatarOverride: eL,
                                                                    bannerOverride: e_,
                                                                    accentColorOverride: ew,
                                                                    profileEffectOverride: eM,
                                                                    profileFrame: te,
                                                                    fadeInProfileFrame: tt,
                                                                    editingMode: eP,
                                                                    isLoading: ea,
                                                                }),
                                                                (0, i.jsx)(uI, {
                                                                    user: r,
                                                                    currentUser: u,
                                                                    displayProfile: e5,
                                                                    guildId: er,
                                                                    channelId: I,
                                                                    items: e2,
                                                                    initialSection: G,
                                                                    onClose: ei,
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
                            (0, i.jsx)(rL, { userId: r.id, guildId: er, className: dc.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function dv(e) {
    return (0, i.jsx)(nr, { children: (0, i.jsx)(dI, { ...e }) });
}
