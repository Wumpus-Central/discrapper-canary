n.d(t, { A: () => dN });
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
    O = n(859226),
    R = n(971217),
    L = n(577390),
    _ = n(287727),
    w = n(31956),
    M = n(744808),
    D = n(875741),
    G = n(915089),
    U = n(713517),
    F = n(645507),
    B = n(922590),
    W = n(821269),
    V = n(397562),
    H = n(433380),
    z = n(634110),
    Y = n(71393),
    K = n(994500),
    q = n(351906),
    X = n(562153),
    Z = n(474090),
    $ = n(448645),
    J = n(183555),
    Q = n(741534),
    ee = n(851767),
    et = n(527212),
    en = n(164636),
    ei = n(370480),
    el = n(773669),
    er = n(101928),
    es = n(837529),
    ea = n(346713),
    eo = n(573648),
    eu = n(429913),
    ed = n(321078),
    ec = n(403362),
    eg = n(484509),
    em = n(487409),
    ef = n(83931),
    eh = n(991988),
    ep = n(917445),
    ex = n(919395),
    eA = n(101058),
    eI = n(696451),
    ev = n(836602),
    ej = n(996988),
    eb = n(207634);
let ey = (0, u.FT)(eb.T[ej.d.MODAL_V2].avatarSize),
    eC = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eE = n(716804),
    eS = n(679492),
    eN = n(554146),
    ek = n(43105),
    eT = n(844222),
    eP = n(381791),
    eO = n(643056),
    eR = n(139523),
    eL = n(327791),
    e_ = n(70283),
    ew = n(982240);
function eM() {
    return (0, a.bG)([C.default, ew.Ay], () => {
        let e = C.default.getCurrentUser()?.id;
        return null != e && (ew.Ay.getBadgeById(e_.$.PREMIUM_TENURE, e)?.auto_unhidden ?? !1);
    });
}
var eD = n(262),
    eG = n(263775),
    eU = n(49999),
    eF = n(792996);
function eB(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        u = (0, eO.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eL.A)(),
        c =
            ((t = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [ew.Ay],
                () => (null != t && ew.Ay.hasCatalogFor(t) ? ew.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, et.Ay)(t)),
            (s = (0, eD.A)(r)),
            n ?? s.length > 0),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id),
        m = (0, eR.V)({ currentUserId: g, enabled: u }),
        f = eM(),
        { reducedMotion: h } = l.useContext(eT.C),
        [p, x] = (0, eG.kn)(c && u && !m.isPending && !f ? [eN.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return p !== eN.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, i.jsx)(ek.A, {
              targetElementRef: o,
              position: "right",
              gradientColor: "blue",
              graphic: { type: "rive", rive: eP.U, props: { dataBinding: { on: !0, reducedMotion: h.enabled } } },
              title: eF.intl.string(eF.t["9JoKQb"]),
              body: eF.intl.string(d ? eF.t.p82vky : eF.t.IDh31t),
              onRequestClose: () => x(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: eF.intl.string(eF.t["4P5I8V"]),
                      onClick: function () {
                          (x(eU.i.TAKE_ACTION), y.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eW = n(975571);
function eV(e) {
    let { targetElementRef: t } = e,
        n = eM(),
        [l, r] = (0, eG.kn)(n ? [eN.M.NITRO_BADGE_UNHIDDEN_NOTICE] : [], { bypassAutoDismiss: !0 });
    return l !== eN.M.NITRO_BADGE_UNHIDDEN_NOTICE
        ? null
        : (0, i.jsx)(ek.A, {
              targetElementRef: t,
              position: "right",
              title: eF.intl.string(eF.t.ZRLAIy),
              body: eF.intl.string(eF.t.sEGQaJ),
              onRequestClose: () => r(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: eF.intl.string(eF.t.hvVgAZ),
                      onClick: function () {
                          (r(eU.i.TAKE_ACTION),
                              window.open(
                                  eW.A.getArticleURL(T.MVz.PROFILE_BADGES_MANAGEMENT),
                                  "_blank",
                                  "noopener,noreferrer",
                              ));
                      },
                  },
              ],
          });
}
var eH = n(718019),
    ez = n(571259),
    eY = n(915614),
    eK = n(689233),
    eq = n(834730);
function eX(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eq.E, { variant: "body-sm/normal", children: t });
}
var eZ = n(361311),
    e$ = n(477534),
    eJ = n(439053),
    eQ = n(743987),
    e0 = n(312381),
    e1 = n(501193),
    e6 = n(383448),
    e2 = n(946356),
    e3 = n(804329),
    e4 = n(503026),
    e8 = n(305385),
    e5 = n(109112),
    e7 = n(939249),
    e9 = n(730134),
    te = n(169869),
    tt = n(837057),
    tn = n(310419),
    ti = n(619019),
    tl = n(967198),
    tr = n(488995),
    ts = n(576849);
function ta(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, te.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ts.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e9.A, { user: new ti.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e5.UnknownGameIcon, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ts.Hd,
                children: [
                    (0, i.jsxs)(e7.D, {
                        className: ts.OB,
                        onClick: function () {
                            (l?.(),
                                (0, tt.transitionToGlobalDiscovery)({
                                    tab: tr.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: tn.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eq.E, {
                                variant: "footnote/normal",
                                color: "text-default",
                                className: ts.nk,
                                children: eF.intl.format(eF.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: ts.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function to(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, J.NJ)(),
        o = (0, a.bG)([el.default], () => el.default.locale),
        u = (0, a.bG)([tl.A], () => tl.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(ts.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: ts.FI,
                          children: (0, i.jsx)(ta, {
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
var tu = n(403581),
    td = n(240248),
    tc = n(501925),
    tg = n(900179),
    tm = n(677295);
function tf(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)(tg.A, {
        className: s()(tm.u, t),
        headingVariant: "body-xs/medium",
        headingColor: "text-subtle",
        ...n,
    });
}
var th = n(81400),
    tp = n(84540),
    tx = n(290386),
    tA = n(621466);
n(321073);
var tI = n(775602),
    tv = n(404760);
function tj(e) {
    let { id: t, message: n, type: l } = e,
        r = "error" === l,
        s = r ? g.CircleErrorIcon : h.WarningIcon;
    return (0, i.jsxs)(eq.E, {
        id: t,
        role: r ? "alert" : void 0,
        variant: "body-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: tv.VP,
        children: [(0, i.jsx)(s, { size: "xs", color: "currentColor", className: r ? tv.ik : tv.QW }), n],
    });
}
function tb(e) {
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
        ((0, tA.vq)(e, HTMLElement) && e.blur(), d());
    }
    let T = (0, i.jsxs)("div", {
        ref: x,
        className: s()(tv.LL, { [tv.JD]: j, [tv.xe]: b }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            v
                ? (0, i.jsx)(eq.E, {
                      id: A,
                      variant: "body-sm/normal",
                      color: "text-muted",
                      className: tv.qf,
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
        className: s()(tv.kL, m),
        onBlur: h,
        onKeyDown: p,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? a
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: tv.VH, children: T }),
                              E && (0, i.jsx)(tj, { id: I, message: C, type: y }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var ty = n(786826);
function tC(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function tE(e) {
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
            (null != I && t.length > I ? eF.intl.formatToPlainString(eF.t.ICT5S6, { maxLength: I }) : void 0) ?? j);
    return (0, i.jsx)(tb, {
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
        input: (0, i.jsx)(ty.f, {
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
let tS = [
    { value: "HAIKU", label: () => eF.intl.string(eF.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eF.intl.string(eF.t.CXkR1L) },
    { value: "TELL_US", label: () => eF.intl.string(eF.t.eutr4P) },
    { value: "FUN_FACT", label: () => eF.intl.string(eF.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eF.intl.string(eF.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eF.intl.string(eF.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eF.intl.string(eF.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eF.intl.string(eF.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eF.intl.string(eF.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eF.intl.string(eF.t.u7WCGI) },
];
var tN = n(307731);
function tk(e) {
    let t,
        n,
        r,
        s,
        o,
        { displayProfile: u, className: d } = e,
        c = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        g = u?.guildId != null,
        m = u?.guildId ?? null,
        f = $.Ay.canUsePremiumProfileCustomization(c),
        h = (0, tx.U)({ location: "user_profile_modal_edit" }),
        {
            value: p,
            previewValue: x,
            onCommit: A,
        } = ((t = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(t).pendingBio)),
        (s = n ? u?._guildMemberProfile?.bio : u?.bio),
        (o = u?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? s ?? "",
            previewValue: o,
            onCommit: l.useCallback(
                (e) => {
                    (0, tp.p)({ bio: e.trim(), guildId: u?.guildId ?? void 0 });
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
                        c = (0, a.bG)([tI.Ay], () => tI.Ay.useReducedMotion),
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
                            let n = tC(t),
                                i = n?.getAttribute("aria-controls");
                            return null != i && null != e.closest(`#${i}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, tA.vq)(e.target) && !s(e.target) && i();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, s, i]);
            let o = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, tA.vq)(l) || s(l) || (null == tC(n.current) && i());
                },
                [t, s, i, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: i, ...r, onBlur: o };
        })({ value: p, onCommit: A }),
        v = !(0, td.uJ)(x),
        j = (0, a.bG)([ev.A], () => ev.A.getErrors(m)),
        b = (0, th.EC)(m),
        y = j.bio?.[0],
        E = b?.bio?.[0],
        S = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * tS.length)), tS[e]);
        }, []),
        N = g ? eF.intl.string(eF.t.yPJ9xr) : S.label();
    return !g || f
        ? (0, i.jsx)(tE, {
              ...I,
              className: d,
              preview: v ? (0, i.jsx)(tc.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eF.intl.string(eF.t.lO3n7a),
              label: eF.intl.string(eF.t["YWo+Zd"]),
              emojiPickerIntention: tN.EmojiIntention.PROFILE,
              maxLength: h,
              error: y,
              warning: E,
          })
        : v
          ? (0, i.jsx)(tc.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var tT = n(430626);
function tP(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: r } = (0, J.NJ)(),
        s = n?.bio,
        a = !(0, td.uJ)(s),
        o = n?.guildId != null,
        u = o && $.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eF.intl.string(eF.t.jVai8N) : eF.intl.string(eF.t.ZzAR2Y),
        c = (0, $.TW)(t) ? eF.intl.string(eF.t["5AFxuK"]) : eF.intl.string(eF.t.N6ixy8),
        g = l && u ? { icon: tu.NitroWheelIcon, tooltip: c } : void 0;
    return (l || a) && (!l || !o || a || u)
        ? (0, i.jsx)(tf, {
              heading: d,
              hideHeading: !l,
              headingIcon: g,
              children: l
                  ? (0, i.jsx)(tk, { displayProfile: n, className: tT.u })
                  : (0, i.jsx)(tc.A, { userBio: s, guildId: r?.guildId, setLineClamp: !1 }),
          })
        : null;
}
var tO = n(136969),
    tR = n(738676),
    tL = n(708645),
    t_ = n(722868),
    tw = n(982985),
    tM = n(666297),
    tD = n(34188),
    tG = n(969935),
    tU = n(993401);
function tF(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, b.Ay)(),
        r = l.useCallback(() => {
            (0, tG.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tU.q3, {
        action: "VISIT_SHOP",
        icon: tD.ShopIcon,
        tooltipText: eF.intl.string(eF.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tB = n(508882),
    tW = n(102951);
function tV(e) {
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
        c = (0, t_.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: g,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: f,
        } = (0, tW.J)({ userId: t.id }),
        h = g.length > 0 || m || f;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tw.e, { userId: t.id, variant: "primary", disabled: !0 }),
                    (0, i.jsx)(tF, {}),
                    (0, i.jsx)(tM.Zt, { user: t, guildId: l, viewProfileItem: c }),
                ],
            })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tR.kc, { user: t, guildId: l }),
                      (0, i.jsx)(tM.Zt, { user: t, guildId: l, viewProfileItem: c }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tR.kc, { user: t, guildId: l }),
                        (0, i.jsx)(tM.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tB.Ef, { user: t, relationshipType: o, analyticsLocation: d }),
                          (0, i.jsx)(tR.kc, { user: t, guildId: l }),
                          (0, i.jsx)(tM.Zt, { user: t, guildId: l, viewProfileItem: c }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tw.e, { userId: t.id, onClose: tO.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tB.ES, {
                                user: t,
                                analyticsLocation: d,
                                gameFriends: g,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: f,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tR.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tM.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tB.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: d,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tw.l, { userId: t.id, onClose: tO.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tR.kc, { user: t, guildId: l }),
                            (0, i.jsx)(tM.Zt, { user: t, guildId: l, viewProfileItem: c }),
                        ],
                    });
}
function tH(e) {
    return e.user.id === e.currentUser.id || e.relationshipType === T.eA$.BLOCKED
        ? (0, i.jsx)(tV, { ...e })
        : (0, i.jsx)(tL.ZQ, {
              user: e.user,
              guildId: e.guildId,
              location: "FullProfileShopThisLook",
              children: (0, i.jsx)(tR.vy, { user: e.user, guildId: e.guildId, children: (0, i.jsx)(tV, { ...e }) }),
          });
}
var tz = n(463156),
    tY = n(866665),
    tK = n(28863),
    tq = n(509434),
    tX = n(307301),
    tZ = n(149468),
    t$ = n(643068),
    tJ = n(522978),
    tQ = n(129230),
    t0 = n(486020),
    t1 = n(889558),
    t6 = n(783419);
let t2 = "User Profile Modal V2";
function t3(e) {
    let t = eo.A.get(e);
    ((0, tJ.A)({ platformType: t.type, location: t2 }),
        tQ.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: t2,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t4() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: t3, stackingBehavior: "stack" });
}
function t8(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, ei.An)(r[t6.pK.CREATED_AT], n),
        a = eo.A.get((0, t$.ML)(t.type));
    return (0, i.jsx)(t7, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tY.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eq.E, { variant: "body-sm/normal", className: ts.GW, children: t.name }),
                  })
                : (0, i.jsx)(tK.Anchor, {
                      href: e,
                      className: ts.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eF.intl.string(eF.t.q5jLJB)}`
                              : `${t.name}, ${eF.intl.string(eF.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tZ.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, t1.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: ts.vi,
                          children: [
                              (0, i.jsx)(tY.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eq.E, {
                                      variant: "body-sm/normal",
                                      className: ts.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tq.LinkExternalSmallIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: ts.wP,
                              }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === T.fg2.REDDIT
                ? (0, te.xE)(r)
                : t.type === T.fg2.STEAM
                  ? (0, te.dy)(r)
                  : t.type === T.fg2.LETTERBOXD
                    ? (0, te.uq)(r)
                    : t.type === T.fg2.BLUESKY || t.type === T.fg2.MASTODON || t.type === T.fg2.TWITTER
                      ? (0, te.ED)(r)
                      : t.type === T.fg2.PAYPAL
                        ? (0, te.gZ)(r)
                        : t.type === T.fg2.EBAY
                          ? (0, te.ub)(r)
                          : t.type === T.fg2.TIKTOK
                            ? (0, te.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function t5(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = t0.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(t7, {
        renderAccountName: function () {
            return (0, i.jsx)(tY.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eq.E, {
                    variant: "body-sm/normal",
                    className: ts.GW,
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
        className: ts.FI,
        children: [
            (0, i.jsx)(tY.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: ts.k_,
                    children: (0, i.jsx)("img", {
                        alt: eF.intl.formatToPlainString(eF.t.rtm15P, { name: l }),
                        className: s()(ts.tV, o ? ts.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ts.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eq.E, {
                                    variant: "body-xs/normal",
                                    children: eF.intl.format(eF.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ts.yu, children: n() }),
                ],
            }),
        ],
    });
}
function t9(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        u = (0, a.bG)([el.default], () => el.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let d = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(ts.kL, o),
        children: [
            d &&
                (0, i.jsxs)("ul", {
                    className: ts.V,
                    children: [
                        t.map((e) => (0, i.jsx)(t8, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t5, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e7.D, {
                    className: ts.qG,
                    onClick: t4,
                    children: [
                        (0, i.jsx)(tX.PlusSmallIcon, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/medium",
                            color: "none",
                            children: eF.intl.string(eF.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var ne = n(193885),
    nt = n(408278),
    nn = n(23722);
let ni = { id: "default" },
    nl = l.createContext(null),
    nr = l.createContext(null);
function ns(e) {
    let { children: t } = e,
        [n, r] = l.useState(ni),
        [s, o] = l.useState(null),
        u = (0, nn.A)((e) => {
            r(e);
        }),
        d = l.useCallback(() => {
            r(ni);
        }, []),
        c = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        g = c ? ni : n,
        m = !c && s?.id === "premiumTryItOut",
        f = l.useCallback(() => {
            o(g);
        }, [g]),
        h = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: f, navigate: u, goBack: d }),
            [g, s, f, u, d],
        );
    return (0, i.jsx)(nr.Provider, { value: m, children: (0, i.jsx)(nl.Provider, { value: h, children: t }) });
}
function na() {
    let e = l.useContext(nr);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function no() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(nl);
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
var nu = n(194261),
    nd = n(789645),
    nc = n(534514),
    ng = n(805251),
    nm = n(821609),
    nf = n(39623),
    nh = n(890377),
    np = n(517461),
    nx = n(609425),
    nA = n(145359),
    nI = n(804661),
    nv = n(465794),
    nj = n(468450),
    nb = n(462887),
    ny = n(765178),
    nC = n(736653),
    nE = n(461797),
    nS = n(469054),
    nN = n(601298),
    nk = n(207803);
function nT() {
    let e = (0, nC.Ay)(),
        t = (0, nb.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nE.Wt)(e);
                (0, nk.w5)({
                    banner: (0, nN.X)({
                        assetOrigin: nS.E.NEW_ASSET,
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
            ev.A.hasTryItOutChanges() || n((0, nE.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = ev.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nE.B$)(e),
                i = (0, nE.Wt)(t);
            (tQ.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                ny.O.announce(eF.intl.formatToPlainString(eF.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nP = n(487233),
    nO = n(999618),
    nR = n(317097),
    nL = n(602853),
    n_ = n(265872),
    nw = n(508274),
    nM = n(654107),
    nD = n(930349);
function nG(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nL.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nM.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([ev.A, ee.A], () => ({
            pendingAccentColor: ev.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: ee.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nR.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tp.p)({ accentColor: e }), []);
    return (0, i.jsx)(n_.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nw.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nD.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eF.intl.string(eF.t["/X3fkf"]),
                editButtonA11yLabel: eF.intl.string(eF.t.kRMJ1v),
                currentValueA11yLabel: (0, nR.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nR.Hl)(c) } }),
            }),
    });
}
var nU = n(841183),
    nF = n(450373),
    nB = n(317139);
function nW(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nB.o, style: { backgroundColor: t } });
}
function nV(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: nB._ });
}
function nH(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nL.r)(p.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, nR.LX)(s),
        { hex: o } = (0, nF.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(nV, { src: u, imageDescription: r }) : (0, i.jsx)(nW, { backgroundColor: o });
}
function nz(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eF.intl.string(eF.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nD.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eF.intl.string(eF.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nH, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
    });
}
var nY = n(569059);
function nK(e) {
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
            let n = (0, et.Ay)(e, t),
                {
                    pendingBanner: i,
                    mainProfileBanner: l,
                    currentProfileBanner: r,
                } = (0, en.cf)(
                    [ev.A, C.default, ee.A],
                    () => ({
                        pendingBanner: ev.A.getPendingChanges(t ?? void 0).pendingBanner,
                        mainProfileBanner: C.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != t ? ee.A.getGuildMemberProfile(e, t)?.banner : ee.A.getUserProfile(e)?.banner,
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
                currentValueA11yLabel: (0, nU.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        f = (0, ex.Ac)(u, g)
            ? {
                  onClick: () => (0, nj.rM)(null, g, (e) => (0, tp.p)({ guildId: n ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eF.intl.string(m ? eF.t.jHlJNS : eF.t.tT9n7D),
              }
            : void 0,
        h = (0, nY.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nz, {
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
var nq = n(259065),
    nX = n(922301),
    nZ = n(16371),
    n$ = n(523312);
let nJ = "heading-xl/semibold";
function nQ(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(n$.MC, { [n$.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eq.E, {
                      variant: nJ,
                      children: (0, i.jsx)(nZ.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nX.G.ANIMATED : nX.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eq.E, { variant: nJ, className: n$.kr, children: t }),
    });
}
function n0(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eF.intl.string(eF.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nD.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eF.intl.string(eF.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(nQ, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
    });
}
function n1(e) {
    let { user: t, guildId: n, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([eI.Ay], () => (null != n ? (eI.Ay.getMember(n, t.id)?.nick ?? null) : null)),
        g = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.globalName ?? null),
        m = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(null).pendingGlobalName),
        f = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: h,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, ex.B0)(t, n ?? void 0),
        A = d ? p : h,
        I = void 0 !== x,
        v = null === x,
        j = d && null != h,
        y = (0, ex.lw)({ pendingValue: x, userValue: h, guildValue: p, guildId: n ?? void 0 }),
        E = (0, ex.lw)({ pendingValue: d ? f : m, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = I ? null != x : null != A,
        N =
            null != y && S
                ? {
                      onClick: () => (0, tp.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(j ? eF.t.en3ogK : eF.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nq.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(n0, {
        affordance: (!v && (I || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nU.I9)(y),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: y,
        disabled: r,
    });
}
var n6 = n(450232),
    n2 = n(89851);
function n3(e) {
    let { heading: t, description: n, children: l, disabled: r = !1, showNitroIcon: a = !1, badge: o } = e;
    return (0, i.jsxs)("div", {
        className: n2.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(n2.Pf, { [n2.r9]: r }),
                children: [
                    (0, i.jsx)(nc.D, {
                        className: n2.DV,
                        variant: "body-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    a && (0, i.jsx)(n6.A, { className: n2.IX, size: "xs", color: "inherit", disabled: r }),
                    null != o && (0, i.jsx)("span", { className: n2.ot, children: o }),
                    null != n && (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
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
              className: n2.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.CircleErrorIcon, { size: "xs", color: p.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n8 = n(897661),
    n5 = n(332560),
    n7 = n(659373),
    n9 = n(192308),
    ie = n(506988),
    it = n(211824);
function ii(e) {
    let { user: t, disabled: r, onOpen: s } = e;
    (0, n5.UF)(ie.uF.DISPLAY_NAME_STYLES_SETTINGS, n5.rl.NON_NITRO_CARD, !0);
    let a = (0, n8.b)(t),
        { isApplied: o, removeCampaignDisplayNameStyle: u } = (0, n7.K)(t),
        d = o ? it.AA : null,
        c = l.useCallback(() => {
            (s?.(),
                (0, n9.mM)(
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
                            n.e(521332),
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
                            n.e(231541),
                            n.e(274461),
                            n.e(270520),
                            n.e(384054),
                            n.e(731841),
                            n.e(544242),
                            n.e(616090),
                            n.e(684068),
                            n.e(816348),
                            n.e(109383),
                            n.e(818291),
                            n.e(243794),
                            n.e(519435),
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
                            n.e(845486),
                            n.e(401425),
                            n.e(120561),
                            n.e(880186),
                            n.e(58353),
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
                            n.e(258398),
                            n.e(676418),
                            n.e(70833),
                            n.e(897073),
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
                            n.e(179049),
                            n.e(132737),
                            n.e(344502),
                            n.e(146070),
                            n.e(836863),
                            n.e(41250),
                            n.e(658216),
                            n.e(854622),
                            n.e(220790),
                            n.e(590365),
                            n.e(989088),
                            n.e(37977),
                            n.e(136149),
                            n.e(470068),
                            n.e(817989),
                            n.e(147626),
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
                            n.e(256769),
                            n.e(902564),
                            n.e(30441),
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
                            n.e(102698),
                            n.e(125964),
                            n.e(415266),
                            n.e(737021),
                            n.e(775951),
                            n.e(731751),
                            n.e(254506),
                            n.e(874342),
                            n.e(911667),
                            n.e(138830),
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
                            n.e(177102),
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
                            n.e(401518),
                            n.e(698547),
                            n.e(355949),
                            n.e(24922),
                            n.e(24889),
                            n.e(522261),
                            n.e(213924),
                            n.e(932606),
                            n.e(593020),
                            n.e(338601),
                            n.e(657003),
                            n.e(643104),
                            n.e(702813),
                            n.e(39038),
                            n.e(847158),
                            n.e(901922),
                            n.e(557940),
                            n.e(9205),
                            n.e(720590),
                            n.e(68532),
                            n.e(428367),
                            n.e(144989),
                            n.e(179745),
                            n.e(529570),
                            n.e(678050),
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
                            n.e(924577),
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
                            n.e(569706),
                            n.e(143302),
                            n.e(475289),
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
    return (0, i.jsx)(n0, {
        affordance: o ? { onClick: u, type: "remove", accessibleLabel: eF.intl.string(eF.t["Wqmi/h"]) } : void 0,
        variant: "bar",
        onClick: c,
        currentValueA11yLabel: (0, nU.I9)(d),
        "aria-haspopup": "dialog",
        displayName: a,
        displayNameStyles: d,
        disabled: r,
    });
}
var il = n(887988),
    ir = n(366010),
    is = n(674658),
    ia = n(617061),
    io = n(203632),
    iu = n(536572);
let id = new Set(),
    ic = 0;
var ig = n(993408),
    im = n(841702),
    ih = n(515718),
    ip = n(94039);
function ix(e) {
    "" !== e.thumbnailPreviewSrc && (0, ih.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var iA = n(599752),
    iI = n(249360);
let iv =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    ij =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ib(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, nC.Ay)(),
        d = (0, ir.M)(u) ? iv : ij,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, im.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ig.wo)(r, i), [r, i]),
                a = (0, ip.A)({ enabled: t, isInteracting: n, items: s, preload: ix });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        m = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((ic += 1), id.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: iA.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: iA.QQ }),
                m?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(iA.yY, { [iI.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(R.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: io.HL.FromStart,
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
function iy(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
        g = (0, ex.N2)({ user: t }),
        m = (0, ex.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, ex.nZ)(n ?? void 0),
        h = void 0 !== f,
        p = null === f || (!h && null == m),
        x = d && null != g,
        A = (0, ex.lw)({ pendingValue: f, userValue: g, guildValue: m, guildId: n ?? void 0 }),
        { product: I } = (0, is.q)(A?.skuId),
        v = h ? null != f : null != m,
        j =
            null != A && v
                ? {
                      onClick: () => (0, tp.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(x ? eF.t["SQy/Po"] : eF.t.uMuafO),
                  }
                : void 0,
        y = l.useCallback(() => {
            (0, ia.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nD.A, {
        buttonRef: o,
        affordance: p && !x ? "add" : j,
        variant: s,
        onClick: y,
        fieldA11yLabel: eF.intl.string(eF.t.wR5wOo),
        editButtonA11yLabel: eF.intl.string(eF.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eF.intl.string(eF.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eF.intl.string(i ? eF.t["1M4m8w"] : eF.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, iu.VG)(I), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ib, { effect: A, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var iC = n(163697),
    iE = n(515727),
    iS = n(746002);
function iN(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, iS.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: iS.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, ih.NN)(n).catch(() => {});
        });
}
var ik = n(715196);
function iT(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function iP(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, nC.Ay)(),
        d = (0, ir.M)(u) ? iv : ij,
        c = (0, _.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, im.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, ig.MG)(r, i), [r, i]);
            return (0, ip.A)({ enabled: t, isInteracting: n, items: s, preload: iN });
        })({ enabled: n && !r && !o, isInteracting: a }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: h, profileFrameClassName: p } =
            null != f ? (0, iC.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != f &&
                (0, i.jsx)("div", {
                    className: s()(ik.hm, p, { [iI.O]: m }),
                    style: h,
                    "aria-hidden": m,
                    children: (0, i.jsx)(M.A, { frame: f, filterLayer: iT, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(ik.ti, { [ik.yT]: null == f }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: ik.QQ, draggable: !1 }),
            }),
        ],
    });
}
function iO(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        u = null != n,
        d = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
        c = (0, ex.Xf)({ user: t }),
        g = (0, ex.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: m } = (0, ex.Tu)(n ?? void 0),
        f = void 0 !== m,
        h = null === m || (!f && null == g),
        p = u && null != c,
        x = (0, ex.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, is.q)(x?.skuId),
        I = f ? null != m : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, tp.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(p ? eF.t.j6hZyM : eF.t.nQBruk),
                  }
                : void 0,
        j = l.useCallback(() => {
            (0, iE.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nD.A, {
        buttonRef: s,
        affordance: h && !p ? "add" : v,
        variant: "square",
        onClick: j,
        fieldA11yLabel: eF.intl.string(eF.t.GWrZOd),
        editButtonA11yLabel: eF.intl.string(eF.t["oTSa/q"]),
        currentValueA11yLabel: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eF.intl.string(eF.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eF.intl.string(i ? eF.t.yFeGB5 : eF.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, iu.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(iP, {
                profileFramePreview: x,
                isEmpty: h,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var iR = n(684732),
    iL = n(498596),
    i_ = n(871524);
function iw(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nR.Hl)(t)}, ${(0, nR.Hl)(n)})`;
    return (0, i.jsx)("div", { className: i_.D7, style: { background: r }, children: l });
}
function iM(e) {
    let { color: t } = e,
        n = (0, nR.Hl)(t),
        l = (0, nR.bJ)(t, 0xffffff) < iL.Tr.NonText;
    return (0, i.jsx)("div", {
        className: i_.OS,
        children: (0, i.jsx)("div", { className: s()(i_.Hy, { [i_.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iD(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e7.D, {
        ...a,
        innerRef: s ?? o,
        className: i_.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(iM, { color: t }),
    });
}
function iG(e) {
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
    return (0, i.jsx)(n_.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(nw.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(iD, {
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
function iU(e) {
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
        A = (0, nR.Hl)(n),
        I = (0, nR.Hl)(r),
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
    return (0, i.jsxs)(nD.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: b,
        children: [
            (0, i.jsx)(m.A, { id: v, children: eF.intl.formatToPlainString(eF.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(m.A, { id: j, children: eF.intl.formatToPlainString(eF.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(iw, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iG, {
                        color: n,
                        ariaLabel: eF.intl.string(eF.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: u,
                        isOpen: "theme-primary" === f,
                        onRequestOpen: () => h("theme-primary"),
                        onRequestClose: () => h(null),
                        buttonRef: p,
                    }),
                    (0, i.jsx)(iG, {
                        color: r,
                        ariaLabel: eF.intl.string(eF.t.stG76C),
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
function iF(e) {
    let { user: t, guildId: n, disabled: r = !1 } = e,
        s = (0, et.Ay)(t.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: u,
            pendingAvatar: d,
        } = (0, a.cf)([ev.A, ee.A], () => {
            let e = ev.A.getPendingChanges(n ?? void 0),
                i = ee.A.getUserProfile(t.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (ee.A.getGuildMemberProfile(t.id, n)?.themeColors ?? null) : i,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== u ? u : o,
        g = (0, eA.V7)({ userId: t.id, image: d }),
        { primaryColor: m, secondaryColor: f } = (0, er.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: u,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        h = (0, nL.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nM.rh)(x, h, !1),
        I = l.useCallback(
            (e) => {
                (0, tp.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, iR.l)(u, o)
                ? {
                      onClick: () => (0, tp.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eF.intl.string(eF.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, i.jsx)(iU, {
              fieldA11yLabel: eF.intl.string(eF.t.DMeO2X),
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
var iB = n(629985);
function iW(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(f.F, { children: (0, i.jsx)("div", { className: s()(iB.k, { [iB.V]: n }), children: t }) });
}
var iV = n(516521),
    iH = n(424290);
function iz(e) {
    let { children: t } = e;
    return (0, i.jsx)(iV.zC, { className: iH.X, children: (0, i.jsx)("div", { className: iH.Q, children: t }) });
}
var iY = n(77528),
    iK = n(811611),
    iq = n(976860),
    iX = n(38145);
function iZ() {
    return l.useCallback(() => {
        ((0, iq.pX)(T.BVt.NITRO_HOME), (0, iX.M)());
    }, []);
}
var i$ = n(423814),
    iJ = n(511484),
    iQ = n(682901);
function i0(e) {
    let t = (0, a.bG)([C.default], () => $.Ay.isPremium(C.default.getCurrentUser())),
        n = (0, i$.O)();
    return t
        ? eF.intl.string(eF.t.AfRWI8)
        : (0, iJ.U9)(n, iQ.pe.TIER_2) && n?.discount.amount != null
          ? eF.intl.formatToPlainString(eF.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var i1 = n(155053);
function i6() {
    let e = (0, iY.V)();
    return e?.subscriptionTrial?.skuId === iQ.pe.TIER_2 ? e : null;
}
function i2() {
    let e = i0(eF.intl.string(eF.t.pj0XBN));
    return (0, i.jsx)(nv.A, { subscriptionTier: iQ.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function i3(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iZ(),
        a = (0, $.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iK.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: i1.nH,
        children: [
            (0, i.jsxs)("div", {
                className: i1.qf,
                children: [
                    (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: eF.intl.string(eF.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(ng.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eq.E, {
                variant: "body-sm/medium",
                color: "text-default",
                children: eF.intl.format(eF.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nv.A, {
                subscriptionTier: iQ.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eq.E, { variant: "body-xs/normal", color: "text-muted", className: i1.u8, children: o }),
        ],
    });
}
function i4() {
    let e = i6();
    return null == e ? (0, i.jsx)(i2, {}) : (0, i.jsx)(i3, { trialOffer: e });
}
var i8 = n(55619),
    i5 = n(848717);
function i7() {
    return (0, i.jsxs)("div", {
        className: i5.k,
        children: [
            (0, i.jsx)(eq.E, {
                variant: "body-sm/medium",
                color: "text-strong",
                children: eF.intl.string(eF.t.JFY17v),
            }),
            (0, i.jsx)(nm.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eF.intl.string(eF.t.R9GHya),
                onClick: function () {
                    return i8.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var i9 = n(342866),
    le = n(968475);
function lt(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([ev.A], () => ({
            pendingAvatar: ev.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: ev.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(i9.A, {
        ...n,
        fieldA11yLabel: eF.intl.string(eF.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nU.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? le.$T : void 0,
    });
}
function ln(e) {
    let { userId: t, ...n } = e,
        l = (0, et.Ay)(t),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [ev.A, ee.A],
            () => ({
                pendingBanner: ev.A.getPendingChanges().pendingBanner,
                tryItOutBanner: ev.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: ee.A.getUserProfile(t)?.banner,
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
                      return eF.intl.formatToPlainString(eF.t.OIhEjF, { truncatedText: n });
                  })(d)
                : (0, nU.ID)(u, o);
    return (0, i.jsx)(nz, {
        ...n,
        fieldA11yLabel: eF.intl.string(eF.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function li(e) {
    let { user: t, ...n } = e,
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([ev.A], () => ({
            pendingDisplayNameStyles: ev.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: ev.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: ev.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([C.default], () => ({ globalName: C.default.getCurrentUser()?.globalName ?? null })).globalName,
        u = void 0 !== r ? r : l,
        d = (0, ex.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(n0, {
        ...n,
        fieldA11yLabel: eF.intl.string(eF.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nU.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function ll(e) {
    let t = (0, et.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: i,
            pendingAvatar: l,
        } = (0, a.cf)([ev.A], () => ({
            tryItOutThemeColors: ev.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: ev.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: ev.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, eA.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, er.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function lr(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = ll(t),
        u = (0, nL.r)(p.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nM.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nk.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iU, {
              fieldA11yLabel: eF.intl.string(eF.t["/WsW/1"]),
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
function ls(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = ll(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, nR.Hl)(s),
        c = (0, nR.Hl)(a);
    return (0, i.jsxs)(nD.Y, {
        fieldA11yLabel: eF.intl.string(eF.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(m.A, { id: o, children: eF.intl.formatToPlainString(eF.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(m.A, { id: u, children: eF.intl.formatToPlainString(eF.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(iw, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(iD, {
                        color: s,
                        onClick: n,
                        "aria-label": eF.intl.string(eF.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(iD, {
                        color: a,
                        onClick: r,
                        "aria-label": eF.intl.string(eF.t.stG76C),
                        "aria-describedby": u,
                    }),
                ],
            }),
        ],
    });
}
var la = n(847081);
function lo(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = no(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, b.Ay)();
            return l.useCallback(() => {
                (0, nq.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nY._)({ isPremiumTryItOut: !0, returnRef: s }),
        m = (0, nY.P)({ isPremiumTryItOut: !0, returnRef: a }),
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
            className: la.T,
            children: [
                (0, i.jsx)(n3, {
                    heading: eF.intl.string(eF.t.NEzEws),
                    children: (0, i.jsx)(li, {
                        user: t,
                        buttonRef: r,
                        onClick: f ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n3, {
                    heading: eF.intl.string(eF.t.DMeO2X),
                    children: f
                        ? (0, i.jsx)(lr, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(ls, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(n3, {
                    heading: eF.intl.string(eF.t.Vgdusv),
                    children: (0, i.jsx)(ln, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: f ? m : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(n3, {
                    heading: eF.intl.string(eF.t.Dt3ZUr),
                    children: (0, i.jsx)(lt, {
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
var lu = n(847374),
    ld = n(111159),
    lc = n(682163),
    lg = n(711014),
    lm = n(941030),
    lf = n(561392),
    lh = n(286615),
    lp = n(15626),
    lx = n(715022),
    lA = n(44482),
    lI = n(470791);
function lv(e) {
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
            let { reducedMotion: e } = l.useContext(eT.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, lf.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, lh.DL)(o, {
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
        C = l.useContext(lp._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, O] = l.useState(null),
        R = null != P ? (0, lx.ZN)(N, P) : void 0,
        L = l.useRef(!1),
        _ = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, lx.fI)(e.value, [n])), [n, t]),
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
        { activeIndex: B, handleKeyDown: W } = (0, lm.l)(!0, t),
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
                    className: s()(lI.S_, u),
                    ...j(),
                    style: { ...I, ...b },
                    children: (0, i.jsx)(lm.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != f ? f(e) : (0, i.jsx)(lA.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var lj = n(216384);
let lb = "MAIN_PROFILE";
function ly(e) {
    let { guild: t } = e;
    return (0, i.jsx)(lc.Ay, { className: lj.$f, guild: t, size: lc.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lC(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: lj.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: lj.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: lj.qL,
                children: [
                    (0, i.jsx)(eq.E, { variant: "body-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eq.E, {
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
function lE(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e7.D, {
        innerRef: r,
        className: s()(lj.L5, { [lj.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eq.E, {
                variant: "body-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: lj.v9,
                children: n,
            }),
            (0, i.jsx)(lu.ChevronSmallDownIcon, {
                className: lj.u4,
                size: "sm",
                color: !0 === l ? p.A.colors.ICON_MUTED : p.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lS(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([lg.Ay], () => lg.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([Y.A], () => Y.A.getGuilds()),
        c = (0, a.bG)([tl.A], () => {
            let e = tl.A.getGuildId();
            return null == e || ev._.has(e) ? null : e;
        }),
        g = (0, a.cf)([eI.Ay, lg.Ay], () => {
            let e = {};
            for (let t of lg.Ay.getFlattenedGuildIds()) {
                let n = eI.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        m = l.useMemo(() => {
            let e = {
                    id: lb,
                    label: eF.intl.string(eF.t["2p07FR"]),
                    value: lb,
                    leading: (0, i.jsx)(ld.ClydeIcon, { size: "refresh_sm", color: p.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(ly, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(ec.Vq),
                r = null != t ? d[t] : null;
            return null == r
                ? [e, ...l]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, i.jsx)(ly, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        f = t ?? lb,
        h = m.find((e) => e.value === f) ?? m[0],
        x = l.useCallback(
            (e) => {
                let n = e === lb ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lv, {
        className: lj.kL,
        label: eF.intl.string(eF.t.rki38K),
        listboxClassName: lj.yt,
        options: m,
        value: f,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lC, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lE, { leading: h.value === lb ? null : h.leading, label: h.label, disabled: o, ...e }),
    });
}
var lN = n(701256),
    lk = n(288490);
let lT = "profile-editing-nameplate-error",
    lP = "profile-editing-avatar-error",
    lO = "profile-editing-avatar-decoration-error",
    lR = "profile-editing-banner-error",
    lL = "profile-editing-display-name-style-error";
function l_(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lk.D0, t),
        children: (0, i.jsx)("div", { className: lk.ZN, children: (0, i.jsx)(nu.LockIcon, { size: "xs" }) }),
    });
}
function lw() {
    let [e, t] = (0, np.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lk.X6,
              children: [
                  (0, i.jsx)(eq.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      children: eF.intl.string(eF.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e7.D, {
                      "aria-label": eF.intl.string(eF.t.rSe9ra),
                      className: lk.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(nd.XSmallIcon, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lM() {
    let e = iZ(),
        t = i0(eF.intl.string(eF.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lk.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lk.tm,
                children: [
                    (0, i.jsx)(nc.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: eF.intl.string(eF.t.bO0TOe),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        children: eF.intl.format(eF.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(nv.A, { subscriptionTier: iQ.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(l_, { className: lk.nd }),
        ],
    });
}
function lD() {
    return (0, i.jsx)(eq.E, {
        variant: "body-xs/normal",
        color: "text-subtle",
        className: lk.BJ,
        "aria-hidden": !0,
        children: eF.intl.format(eF.t.kYv9DM, {
            nitroIconHook: () =>
                (0, i.jsx)(tu.NitroWheelIcon, { size: "xxs", color: "currentColor", className: lk.qp }),
        }),
    });
}
function lG(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(n3, {
        heading: eF.intl.string(eF.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(il.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lT : void 0 }),
            (0, i.jsx)(n4, { id: lT, message: r }),
        ],
    });
}
function lU(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(n3, {
        heading: eF.intl.string(eF.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nP.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lP : void 0 }),
            (0, i.jsx)(nO.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lO : void 0 }),
            (0, i.jsx)(n4, { id: lP, message: (0, nj.d3)(r) }),
            (0, i.jsx)(n4, { id: lO, message: s }),
        ],
    });
}
function lF(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eG.kn)(l ? [] : [eN.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === eN.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE,
        { pendingDisplayNameStyles: u } = (0, ex.B0)(t, n ?? void 0),
        d = (0, nx.A)({
            userId: t.id,
            guildId: n ?? void 0,
            pendingDisplayNameStyles: u,
            ignoreDisabledStylesSetting: !0,
        }),
        { showCampaignPromo: c, showCampaignNewBadge: g } = (0, nI.hh)({
            location: "UserProfileModalV2EditingPanel",
            displayNameStyles: d,
            disabled: l,
        });
    return (0, i.jsxs)(n3, {
        heading: eF.intl.string(eF.t.NEzEws),
        description: c ? eF.intl.string(lN.default.WyZOg3) : void 0,
        disabled: l,
        showNitroIcon: !0,
        badge:
            o || g
                ? (0, i.jsx)("div", {
                      className: lk.IO,
                      "aria-hidden": !0,
                      children: (0, i.jsx)(ng.E, { type: "new", variant: "primary" }),
                  })
                : void 0,
        children: [
            (0, i.jsx)(n1, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lL : void 0,
                onOpen: o ? () => a(eU.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(n4, { id: lL, message: r }),
        ],
    });
}
function lB(e) {
    let { user: t, disabled: n } = e,
        { showCampaignFontBadge: l, dismissCampaignFontBadge: r } = (0, nI.wP)("UserProfileModalV2EditingPanel");
    return (0, i.jsx)(n3, {
        heading: eF.intl.string(eF.t.NEzEws),
        description: eF.intl.string(lN.default.WyZOg3),
        disabled: n,
        badge: l
            ? (0, i.jsx)("div", {
                  className: lk.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(ng.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: (0, i.jsx)(ii, { user: t, disabled: n, onOpen: l ? r : void 0 }),
    });
}
function lW(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(n3, {
        heading: eF.intl.string(eF.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iF, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nK, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lR : void 0 }),
            (0, i.jsx)(n4, { id: lR, message: (0, nj.d3)(s) }),
        ],
    });
}
function lV(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(n3, {
        heading: eF.intl.string(eF.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nG, { user: t, disabled: n }),
    });
}
function lH(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(n3, {
        heading: eF.intl.string(eF.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(iy, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(iO, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lz = "premium-try-it-out-description";
function lY(e) {
    let { user: t } = e,
        n = iZ(),
        { navigate: l } = no();
    return (
        nT(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lz,
            className: lk.DX,
            children: [
                (0, i.jsx)(l_, { className: lk.x$ }),
                (0, i.jsxs)("div", {
                    className: lk.sb,
                    children: [
                        (0, i.jsx)(eq.E, {
                            id: lz,
                            variant: "body-md/normal",
                            color: "text-default",
                            children: eF.intl.format(eF.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(nm.$, {
                            variant: "primary",
                            size: "sm",
                            icon: nf.EyeIcon,
                            text: eF.intl.string(eF.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(lo, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lK(e) {
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
        g = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        m = (0, nn.A)(c),
        f = null != l,
        h = $.Ay.canUsePremiumProfileCustomization(t),
        p = f && !h,
        x = !h && !f,
        A = (0, nA.Lz)(it.vB.DISPLAY_NAME_STYLE, "UserProfileModalV2EditingPanel"),
        I = x && A === it.S9.SELECTABLE,
        v = f && !h && !g,
        j = s || o,
        b = (0, a.bG)([ev.A], () => ev.A.getErrors(l)),
        y = b.nameplate?.[0] ?? b.nameplate_sku_id?.[0],
        C = b.avatar?.[0],
        E = b.avatar_decoration_sku_id?.[0],
        S = b.banner?.[0],
        N = b.display_name_font_id?.[0] ?? b.display_name_effect_id?.[0] ?? b.display_name_colors?.[0];
    return (0, i.jsxs)(iW, {
        hasGradientBackground: v,
        children: [
            (0, i.jsxs)("div", {
                className: lk.wx,
                children: [
                    (0, i.jsx)(tY.m, {
                        text: eF.intl.string(eF.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(nt.K, {
                            buttonRef: u,
                            "aria-label": eF.intl.string(eF.t["l/A351"]),
                            icon: nh.DoubleChevronSmallRightIcon,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lS, {
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
                : (0, i.jsx)(iz, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              f && (h ? (0, i.jsx)(lw, {}) : (0, i.jsx)(lM, {})),
                              h && (0, i.jsx)(lD, {}),
                              (0, i.jsx)(lG, { user: t, guildId: l, disabled: j || p, errorMessage: y }),
                              (0, i.jsx)(lU, {
                                  user: t,
                                  guildId: l,
                                  disabled: j || p,
                                  avatarErrorMessage: C,
                                  avatarDecorationErrorMessage: E,
                              }),
                              h || f
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lF, { user: t, guildId: l, disabled: j || p, errorMessage: N }),
                                            (0, i.jsx)(lW, {
                                                user: t,
                                                guildId: l,
                                                disabled: j || p,
                                                canUsePremiumProfileFeatures: h,
                                                bannerErrorMessage: S,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lV, { user: t, disabled: j || p }),
                              (0, i.jsx)(lH, { user: t, guildId: l, disabled: j || p }),
                              I && (0, i.jsx)(lB, { user: t, disabled: j }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lY, { user: t }), (0, i.jsx)(i4, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lq = n(120692),
    lX = n(110654);
function lZ(e) {
    return null;
}
function l$(e) {
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
        className: s()(lX.kL, p && lX.ez),
        children: (0, i.jsx)("div", {
            className: lX.u4,
            children: h((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lq.animated.div,
                          {
                              className: lX.M6,
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
var lJ = n(926321),
    lQ = n(477155),
    l0 = n(561243),
    l1 = n(206697),
    l6 = n(280406);
let l2 = "shuffle-options-a11y-description";
function l3(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(nm.$, {
                icon: lJ.DiceIcon,
                text: eF.intl.string(eF.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": l2,
                fullWidth: !0,
            }),
            (0, i.jsx)(m.A, { id: l2, children: eF.intl.string(eF.t.bBRdiB) }),
        ],
    });
}
function l4(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nT(),
        s = i6();
    return (0, i.jsxs)(iW, {
        children: [
            (0, i.jsxs)("div", {
                className: l6.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: l6.FS,
                        children: (0, i.jsx)(tY.m, {
                            text: eF.intl.string(eF.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(nt.K, {
                                buttonRef: l,
                                "aria-label": eF.intl.string(eF.t["4IYwrw"]),
                                icon: lQ.ArrowSmallLeftIcon,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nc.D, {
                        variant: "body-md/medium",
                        color: "text-default",
                        className: l6.R_,
                        children: eF.intl.string(eF.t.PxUx8e),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        className: l6.Ij,
                        children: eF.intl.string(eF.t.X0ir7L),
                    }),
                    (0, i.jsx)(l3, { className: l6.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iz, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(lo, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(i3, {
                                trialOffer: s,
                                onSubscribeClick: l1.t,
                                onSubscribeSuccess: l1.T,
                                onSubscribeClose: l0.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var l8 = n(199016);
let l5 = "user-profile-editing-panel",
    l7 = "profile-modal-editing-panel-heading";
function l9(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tY.m, {
        text: eF.intl.string(eF.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e7.D, {
            innerRef: l,
            "aria-label": eF.intl.string(eF.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": l5,
            className: s()(l8.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(ne.PaintbrushThinIcon, { size: "sm", color: "currentColor" }),
        }),
    });
}
function re(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tY.m, {
            text: eF.intl.string(eF.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(nt.K, {
                buttonRef: l,
                "aria-label": eF.intl.string(eF.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": l5,
                icon: ne.PaintbrushThinIcon,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function rt(e) {
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
        { selectedPanel: p, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = no(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == h)
        ? null
        : (0, i.jsx)("aside", {
              id: l5,
              "aria-labelledby": l7,
              className: s()(l8.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: l8.l$,
                  children: [
                      (0, i.jsx)(m.A, {
                          children: (0, i.jsx)(f.H, { id: l7, children: eF.intl.string(eF.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(l$, {
                          activeSlide: p.id,
                          direction: "premiumTryItOut" === p.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lZ, {
                                  id: "default",
                                  children: (0, i.jsx)(lK, {
                                      panelId: l5,
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
                              (0, i.jsx)(lZ, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(l4, { user: h, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var rn = n(425763),
    ri = n(447453),
    rl = n(46653),
    rr = n(783420),
    rs = n(874402);
function ra() {
    let e = na(),
        { goBack: t } = no(),
        n = i0(eF.intl.string(eF.t.pj0XBN));
    return (0, i.jsx)(rr.A, {
        subscriptionTier: iQ.pe.TIER_2,
        onClick: l1.t,
        onSubscribeModalClose: (e) => {
            (e && (0, l1.T)(), (0, l0.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(rs.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eF.intl.string(eF.t.X0ir7L),
                a11yAnnounceOnShow: eF.intl.string(eF.t.X0ir7L),
                a11yAnnounceOnHide: eF.intl.string(eF.t.ZcyFYa),
                secondaryAction: { text: eF.intl.string(eF.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: tu.NitroWheelIcon, variant: "expressive" },
            });
        },
    });
}
var ro = n(803306),
    ru = n(631670),
    rd = n(682618),
    rc = n(856383),
    rg = n(234e3),
    rm = n(159001),
    rf = n(933725),
    rh = n(773527),
    rp = n(188567),
    rx = n(435911),
    rA = n(646976),
    rI = n(289173),
    rv = n(958805),
    rj = n(61881),
    rb = n(735321),
    ry = n(624826),
    rC = n(419490),
    rE = n(489496),
    rS = n(132319),
    rN = n(696016),
    rk = n(384377),
    rT = n(518477);
function rP(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, J.NJ)(),
        [r, s] = l.useState(!1),
        [o, u] = l.useState(!1),
        {
            widgetsToSave: d,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: m,
            canSaveWidgets: f,
        } = (function () {
            let e = (0, a.yK)([rj.A], () => rj.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rj.A], () => rj.A.getChangedWidgets()),
                n = (0, a.yK)([rj.A], () => rj.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rj.A], () => ({
                    hasUnsavedWidgets: rj.A.hasUnsavedChanges(),
                    canSaveWidgets: rj.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        {
            hasUnsavedProfileChanges: h,
            canSubmitProfileChanges: p,
            hasBadgeChangesToSave: x,
        } = (0, a.cf)([ev.A], () => ({
            hasUnsavedProfileChanges: ev.A.hasUnsavedChanges(),
            canSubmitProfileChanges: ev.A.canSubmit(),
            hasBadgeChangesToSave: (0, rg.gz)(ev.A.getPendingChanges()),
        })),
        A = m || h || x,
        I = m && !f,
        v = l.useCallback(() => {
            (rv.A.clearPendingWidgets(), (0, nk.XQ)());
        }, []),
        j = l.useCallback(async () => {
            if (!ev.A.canSubmit()) return;
            u(!0);
            let e = !0;
            if (x) {
                let t = ev.A.getPendingChanges(),
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
                            return (rc.A.captureException(e), !1);
                        }
                    })({ displayOrder: t.pendingBadgeDisplayOrder, hiddenBadges: t.pendingBadgeHiddenBadges });
                if (n) {
                    let e = C.default.getCurrentUser()?.id;
                    (null != e && (await (0, ro.eO)(e).catch(() => {})), await (0, rd.RS)(), (0, rg.Jp)());
                }
                e = n;
            }
            if (h)
                try {
                    if (null == t) {
                        let t = ev.A.getPendingChanges(),
                            n = (0, rx.Sk)(t),
                            i = (0, rx.yX)(t),
                            l =
                                (0, rh.Jy)(n.displayNameStyles) &&
                                !(0, rh.Jy)(C.default.getCurrentUser()?.displayNameStyles);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, ru._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, ry.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    l &&
                                        (0, n5.Cy)({
                                            perks: [it.vB.DISPLAY_NAME_STYLE],
                                            content: ie.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n5.rl.USER_PROFILE,
                                        }),
                                    (0, ru.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nk.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nk.RE)());
                        }
                    } else {
                        let n = ev.A.getPendingChanges(t),
                            i = (0, rx.C5)(n),
                            l = (0, rx.yX)(n, t),
                            r = C.default.getCurrentUser()?.id,
                            s =
                                (0, rh.Jy)(i.displayNameStyles) &&
                                null != r &&
                                !(0, rh.Jy)(eI.Ay.getMember(t, r)?.displayNameStyles);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, rm.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, ry.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    s &&
                                        (0, n5.Cy)({
                                            perks: [it.vB.DISPLAY_NAME_STYLE],
                                            content: ie.uF.DISPLAY_NAME_STYLES_SETTINGS,
                                            contentSurface: n5.rl.GUILD_PROFILE,
                                        }),
                                    (0, ru.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nk.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nk.RE)());
                        }
                    }
                    let n = (0, rx.yg)(ev.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, rf.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, ru.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (m)
                try {
                    let e = (0, rb.BF)();
                    for (let t of (await rv.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, rI.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof rA.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof rA.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = rC.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, rS.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                !(async function (e, t) {
                                    try {
                                        await (0, rE.Yy)(e, { name: t });
                                    } catch (e) {
                                        rN.GU.warn(`Failed to sync profile clip title to the library: ${e}`);
                                    }
                                })(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, ru.x8)() : (0, rk.XA)(rT.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
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
                rp._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rp._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(rs.$, {
            preventsPopoutDismiss: !0,
            isVisible: A,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eF.intl.string(eF.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eF.intl.string(eF.t["0Y/qkL"]),
            secondaryAction: { text: eF.intl.string(eF.t.yBZMsQ), onClick: v, disabled: !A || o },
            primaryAction: { text: eF.intl.string(eF.t["R3BPH+"]), onClick: j, loading: o, disabled: !(!I && p) || !A },
        })
    );
}
var rO = n(485745),
    rR = n(893757);
function rL() {
    let e = (0, rn.VU)(),
        t = (0, rO.A)(),
        n = na();
    return e ? "dnd" : n ? "premium-try-it-out" : t ? "save" : null;
}
function r_(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([rl.default], () => rl.default.getId() === t),
        u = rL(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rR.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(ri.S, { className: rR.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(ra, {})
                        : "save" === d
                          ? (0, i.jsx)(rP, { guildId: n })
                          : null,
          })
        : null;
}
var rw = n(34011),
    rM = n(629403),
    rD = n(612630),
    rG = n(61426);
function rU(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rD.A)(t),
        [g, m] = l.useState(),
        [f, h] = l.useState(),
        p = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (h(void 0), m(e), o?.());
                    try {
                        await rM.A.updateNote(t, e);
                    } catch {
                        h(eF.intl.string(eF.t.F8FvUy));
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
            ? (0, i.jsx)(eq.E, { variant: "body-sm/normal", color: "text-default", className: rG.t, children: p })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tv.kL, n),
        children: (0, i.jsx)(rw.w, {
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
            label: eF.intl.string(eF.t.PbMNh2),
            placeholder: A ? eF.intl.string(eF.t["WLKx/9"]) : eF.intl.string(eF.t.VBhOe2),
            maxLength: 256,
            disabled: A,
            error: f,
        }),
    });
}
var rF = n(793222);
function rB(e) {
    let { userId: t } = e,
        n = (0, eE.g)(),
        { trackUserProfileAction: l } = (0, J.NJ)();
    return (0, i.jsx)(tf, {
        heading: eF.intl.string(eF.t["mQKv+v"]),
        scrollTargetId: rT.bk.NOTE,
        children: (0, i.jsx)(rU, {
            userId: t,
            className: rF.N,
            autoFocus: n === rT.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rW = n(123292),
    rV = n(667242);
function rH(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rV.kL,
            children: (0, i.jsxs)("div", {
                className: rV.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rV.Kk, children: t }),
                    (0, i.jsx)(eq.E, { color: "text-strong", variant: "body-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rV.hP,
                            children: (0, i.jsx)(rW.Q, {
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
var rz = n(346055),
    rY = n(289873),
    rK = n(615019);
function rq(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && ny.O.announce(eF.intl.string(eF.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rz.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rK.f, t && rK.z),
                    children: n && (0, i.jsx)(rY.y, { type: rY.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rX = n(568602);
function rZ(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rj.A, ev.A], () => rj.A.hasUnsavedChanges() || ev.A.hasUnsavedChanges());
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
                rp._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rp._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rX.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var r$ = n(761508),
    rJ = n(329921),
    rQ = n(945810),
    r0 = n(340344);
let r1 = { enabled: !1 },
    r6 = { 0: r1, 1: { enabled: !0 } },
    r2 = (0, rQ.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: r1,
        variations: r6,
    });
function r3(e) {
    let { location: t } = e;
    return (r2.useConfig({ location: t }), null);
}
var r4 = n(695904),
    r8 = n(573238),
    r5 = n(107563),
    r7 = n(517164),
    r9 = n(290863),
    se = n(894768),
    st = n(146655),
    sn = n(489379);
function si(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, st.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, sn.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([r7.A], () => r7.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        m = (0, a.bG)([se.A, r9.A], () => {
            let e = g ? se.A.getStatus() : r9.A.getStatus(t.id);
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
var sl = n(939496),
    sr = n(114212),
    ss = n(960549),
    sa = n(637865),
    so = n(842241),
    su = n(287746),
    sd = n(435558),
    sc = n(534890),
    sg = n(308528),
    sm = n(780964),
    sf = n(766075),
    sh = n(92795);
let sp = [
        () => eF.intl.string(eF.t.madJdE),
        () => eF.intl.string(eF.t.NYmfoP),
        () => eF.intl.string(eF.t.R2PaCg),
        () => eF.intl.string(eF.t.laSR8h),
        () => eF.intl.string(eF.t.DnsJE8),
    ],
    sx = [
        () => eF.intl.string(eF.t.nFSbeE),
        () => eF.intl.string(eF.t.gTcxOz),
        () => eF.intl.string(eF.t["8T0wYj"]),
        () => eF.intl.string(eF.t.BIHl1g),
        () => eF.intl.string(eF.t["jhBm0+"]),
    ],
    sA = [
        () => eF.intl.string(eF.t.AyMGXA),
        () => eF.intl.string(eF.t.aAFW7V),
        (e) => eF.intl.formatToPlainString(eF.t.h2g0cM, { name: e }),
        () => eF.intl.string(eF.t.rrYh58),
        () => eF.intl.string(eF.t["HX3K+F"]),
        () => eF.intl.string(eF.t["/yW3aY"]),
        () => eF.intl.string(eF.t["PmL/v0"]),
        () => eF.intl.string(eF.t.IALa3h),
        () => eF.intl.string(eF.t.HRcTFL),
        () => eF.intl.string(eF.t.NuCqPt),
        () => eF.intl.string(eF.t["M1tw+4"]),
        () => eF.intl.string(eF.t.UBm1y2),
        () => eF.intl.string(eF.t.Cu95PQ),
        () => eF.intl.string(eF.t["R/wFuh"]),
        () => eF.intl.string(eF.t.HQPAVT),
        () => eF.intl.string(eF.t.YolGh4),
    ],
    sI = [
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
function sv(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: sh.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: sh.FS,
                children: [
                    (0, i.jsx)(nc.D, { variant: "heading-sm/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eq.E, { variant: "body-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function sj() {
    let e = eF.intl.string(eF.t.RnD2yZ),
        [t] = l.useState(() => ((0, sd.sample)(sp) ?? sp[0])());
    return (0, i.jsx)(sv, { heading: e, bodyText: t });
}
function sb() {
    let e = eF.intl.string(eF.t.bFgqYJ),
        [t] = l.useState(() => ((0, sd.sample)(sx) ?? sx[0])());
    return (0, i.jsx)(sv, { heading: e, bodyText: t });
}
function sy(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = X.Ay.getName(n, r, t),
        o = eF.intl.formatToPlainString(eF.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, sd.sample)(sA) ?? sA[0])(a)),
        d = l.useCallback(() => {
            (sg.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(sv, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: sh.v0,
            children: (0, i.jsx)(tU.FD, { icon: sc.ChatIcon, text: eF.intl.string(eF.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sC() {
    let e = (0, nC.Ay)();
    return (0, i.jsx)("div", {
        className: sh.HU,
        children: sI.map((t, n) => {
            let l = eo.A.get(t);
            if (null == l) return null;
            let r = (0, ir.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: sh.gj }, n);
        }),
    });
}
function sE(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, sf.openUserSettings)(sm.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, sf.openUserSettings)(sm.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(sv, {
        heading: eF.intl.string(eF.t.VB6LWY),
        bodyText: eF.intl.string(eF.t.KpjsU9),
        children: [
            (0, i.jsx)(sC, {}),
            (0, i.jsxs)("div", {
                className: sh.v0,
                children: [
                    (0, i.jsx)(tU.FD, { text: eF.intl.string(eF.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tU.FD, { text: eF.intl.string(eF.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sS = n(131058);
function sN(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sS.gN, n), fade: !0, ...r, children: t });
}
var sk = n(587763);
function sT(e) {
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
        } = si({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return f || h || !g
        ? f || h || g
            ? (0, i.jsxs)(sN, {
                  className: sk.XG,
                  fade: !0,
                  children: [
                      f
                          ? (0, i.jsx)(tf, {
                                heading: eF.intl.string(eF.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sk.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(so.A, {
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
                                                    children: (0, i.jsx)(ss.A, {
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
                                                children: (0, i.jsx)(su.A, {
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
                          ? (0, i.jsx)(tf, {
                                heading: eF.intl.string(eF.t.jzgEoL),
                                introText: m
                                    ? eF.intl.format(eF.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tK.Anchor,
                                                  {
                                                      href: eW.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rT.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sk.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(sa.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : m
              ? (0, i.jsx)(sE, { onClose: a })
              : (0, i.jsx)(sy, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sk.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sk.kr,
                          children: [
                              (0, i.jsx)(sr.F, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(sr.F, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sP = n(163126),
    sO = n(913453),
    sR = n(229187),
    sL = n(702476),
    s_ = n(503062),
    sw = n(393213);
function sM(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, J.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sO.A)(t),
        g = (0, sP.A)();
    return (
        l.useEffect(() => {
            (0, sR.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sN, {
            className: sw.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sw.D$,
                                  children: [
                                      (0, i.jsx)(sr.F, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(sr.F, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(sj, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                s_.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sL.openUserProfileModal)({
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
var sD = n(398590),
    sG = n(345942),
    sU = n(51943);
function sF(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, J.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sO.A)(t);
    return (0, i.jsx)(sN, {
        className: sw.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sw.Y7,
                              children: [
                                  (0, i.jsx)(sr.F, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(sr.F, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sU.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sG.u)(r.id), n(), (0, sD.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sb, {}),
    });
}
var sB = n(885574),
    sW = n(669815),
    sV = n(331322),
    sH = n(591410),
    sz = n(881116),
    sY = n(506774),
    sK = n(531913),
    sq = n(503275),
    sX = n(316601),
    sZ = n(469958);
let s$ = "conjureServerWidgetUpsellDismissals";
var sJ = n(763314),
    sQ = n(191850);
function s0(e) {
    let { widget: t, guildId: n, currentUser: r, onDismiss: s } = e,
        o = (function (e, t, n) {
            let { applicationId: i } = t,
                r = (0, a.bG)([Y.A], () => Y.A.getGuild(n)),
                s = (0, eu.h)(i),
                o = (0, a.bG)([sX.A], () => sX.A.getProject(i)?.owner_user_id, [i]),
                u = (0, sq.vm)(o),
                d = (0, sK.A)(e, i),
                c = l.useMemo(() => ({ ...d, isLoading: !1, hasIdentity: !0 }), [d]);
            return null == r || null == s
                ? null
                : { guild: r, application: s, creator: null != o ? u : null, rendererProps: c };
        })(r.id, t, n);
    if (null == o) return null;
    let { guild: u, application: d, creator: c, rendererProps: g } = o;
    return (0, i.jsx)(sV.B, {
        children: (0, i.jsx)(sH.A, {
            user: r,
            widget: t,
            rendererProps: g,
            allowEditing: !1,
            subtle: !0,
            exclusiveCTA: !0,
            cta: (0, i.jsx)(sH.A.Cta, {
                icon: (0, i.jsx)(lc.Ay, { guild: u, size: lc.Ay.Sizes.MEDIUM, active: !0, "aria-hidden": !0 }),
                heading: eF.intl.formatToPlainString(sQ.default["uIb8U+"], { guildName: u.name }),
                content: eF.intl.formatToPlainString(sQ.default.ZZywee, { applicationName: d.name }),
                attribution:
                    null != c
                        ? (0, i.jsx)(sV.B, {
                              direction: "horizontal",
                              gap: 8,
                              align: "center",
                              children: (0, i.jsx)(sz.A, { creator: c, guildId: n, color: "text-subtle" }),
                          })
                        : null,
                buttons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(rW.Q, {
                            variant: "secondary",
                            textVariant: "body-sm/medium",
                            text: eF.intl.string(eF.t.WAI6xu),
                            onClick: s,
                        }),
                        (0, i.jsx)(nm.$, {
                            variant: "primary",
                            size: "sm",
                            text: eF.intl.string(sQ.default.j6ztO0),
                            onClick: () => (0, sJ.A)(t.applicationId, s),
                        }),
                    ],
                }),
            }),
        }),
    });
}
function s1(e) {
    let { currentUser: t } = e,
        n = (function (e) {
            let t = (0, sZ.A)(),
                [n, i] = l.useState(() => sY.w.get(s$)?.[e] ?? []),
                r = t.find((e) => {
                    let { guildId: t } = e;
                    return !n.includes(t);
                }),
                s = r?.guildId,
                a = r?.widgets[0],
                o = l.useCallback(() => {
                    if (null != s) {
                        let t;
                        ((t = sY.w.get(s$) ?? {}),
                            sY.w.set(s$, { ...t, [e]: [...(t[e] ?? []), s] }),
                            i((e) => [...e, s]));
                    }
                }, [e, s]);
            return null != s && null != a ? { guildId: s, widget: a, dismiss: o } : null;
        })(t.id);
    return null == n
        ? null
        : (0, i.jsx)(s0, { widget: n.widget, guildId: n.guildId, currentUser: t, onDismiss: n.dismiss }, n.guildId);
}
function s6() {
    let e = (0, a.bG)([C.default], () => C.default.getCurrentUser());
    return null != e ? (0, i.jsx)(s1, { currentUser: e }, e.id) : null;
}
var s2 = n(840387),
    s3 = n(201718),
    s4 = n(615405),
    s8 = n(633075),
    s5 = n(813832),
    s7 = n(600761),
    s9 = n(667049);
function ae(e) {
    let t = (0, em.A)(e),
        n = na();
    return t && !n;
}
var at = n(410453);
function an(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, J.NJ)(),
        a = l.useCallback(() => {
            (r({ action: "PRESS_ADD_WIDGET" }),
                (0, n9.mM)(
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
        className: s()(at.w, t),
        children: [
            (0, i.jsx)(eq.E, {
                className: at.D,
                variant: "body-sm/semibold",
                color: "text-subtle",
                children: eF.intl.string(eF.t.OYlggR),
            }),
            (0, i.jsx)(nm.$, {
                icon: tX.PlusSmallIcon,
                text: eF.intl.string(eF.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var ai = n(192),
    al = n(704824),
    ar = n(382483),
    as = n(385113),
    aa = n(334074),
    ao = n(657718),
    au = n(478016);
function ad(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, J.NJ)(),
        a = l.useMemo(() => new s8.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, rb.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rk.XA)(rT.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sH.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sH.A.Cta, {
            showSuggestedForYou: !0,
            heading: eF.intl.format(eF.t.OIzLCy, { applicationName: n.name }),
            content: eF.intl.format(eF.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tY.m, {
                        text: eF.intl.string(eF.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ao.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: nd.XSmallIcon,
                            "aria-label": eF.intl.string(eF.t.WAI6xu),
                            onClick: () => {
                                r(eU.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tY.m, {
                        text: eF.intl.string(eF.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(ao.S, {
                            variant: "primary",
                            size: "sm",
                            icon: au.CheckmarkSmallIcon,
                            "aria-label": eF.intl.formatToPlainString(eF.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (r(eU.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function ac() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([as.A], () => as.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, ar.Wq)();
        }, []);
        let t = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
            n = (0, eu.A)(e),
            { tokens: i, fetched: r } = (0, al.j)(e),
            s = (0, s9.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof s8.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, aa.hj)({
                applications: u,
                dismissibleContent: eN.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: aa.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(ad, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var ag = n(675816),
    am = n(575593),
    af = n(44120),
    ah = n(778705),
    ap = n(87719),
    ax = n(317560),
    aA = n(306984),
    aI = n(661492);
let av = { sentGifts: {} };
function aj(e, t) {
    return `${e}:${t}`;
}
class ab extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((av = e), this.cleanupExpiredGifts());
    }
    getState() {
        return av;
    }
    hasSentGift(e, t) {
        let n = aj(e, t),
            i = av.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = aj(e, t),
            i = av.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(av.sentGifts)) new Date(n.expiresAt) < e && delete av.sentGifts[t];
    }
}
let ay = new ab(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = aj(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        av.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var aC = n(88940),
    aE = n(146423),
    aS = n(590180),
    aN = n(301198),
    ak = n(349031),
    aT = n(124557),
    aP = n(471505),
    aO = n(376932);
function aR(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function aL(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rl.default], () => rl.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aP.G)({ userId: o, sku: n, location: l, onError: r }),
        m = aU();
    return (0, i.jsx)("div", {
        className: aO.U,
        style: aR(t),
        children: (0, i.jsx)(aN._, {
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
function a_(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rl.default], () => rl.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aT.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = aU();
    return (0, i.jsx)("div", {
        className: aO.U,
        style: aR(t),
        children: (0, i.jsx)(aN._, {
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
function aw(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rl.default], () => rl.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, aT.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        m = aU();
    return (0, i.jsx)("div", {
        className: aO.U,
        style: aR(t),
        children: (0, i.jsx)(aN._, {
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
function aM(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([rl.default], () => rl.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: m,
            isPurchased: f,
        } = (0, ak.z)({ userId: o, product: n, location: l, onError: r }),
        h = (0, aI.q)(m),
        p = f && !u,
        x = !h || p,
        A = aU(h && p ? eF.intl.string(eF.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: aO.U,
        style: aR(t),
        children: (0, i.jsx)(aN._, {
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
function aD(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([aS.A], () => aS.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aL, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(a_, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(aM, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aw, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function aG(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(aD, { location: t, ...n });
}
function aU(e) {
    return l.useMemo(
        () => ({
            firstTimeBody: eF.intl.string(eF.t["5B3F2W"]),
            add: eF.intl.string(eF.t.Hcgz2S),
            remove: eF.intl.string(eF.t["19b82d"]),
            disabled: e,
        }),
        [e],
    );
}
var aF = n(460442),
    aB = n(662349),
    aW = n(802290),
    aV = n(479026),
    aH = n(636374),
    az = n(699976),
    aY = n(181554),
    aK = n(880465);
let aq = az.Z.SIZE_133;
function aX(e) {
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
        k = (0, aC.A)(E ? r.shopUnpublishedAt : void 0),
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
    let { trackUserProfileWishlistAction: P } = (0, J.NJ)(),
        O = l.useCallback(() => {
            (C?.(),
                null != v &&
                    (P({
                        wishlistId: v,
                        action: rT.Mq.WISHLIST_ITEM_CLICKED,
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
                        action: rT.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, P, C]),
        L = l.useCallback(() => {
            ((0, rk.XA)(rT.jM.SOMETHING_WENT_WRONG), ny.O.announce(eF.intl.string(eF.t.F8FvUy)));
        }, []),
        _ = null != g ? (0, i.jsx)("div", { ref: S, className: aY.BU, children: g }) : null,
        {
            onBodyClick: w,
            onOverlayClick: M,
            showOverlayButton: D,
            routesToGift: G,
            label: U,
            icon: F,
        } = (0, aH.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: O, onPurchaseClick: R }),
        B = p && D;
    return (0, i.jsxs)("div", {
        className: aY.kL,
        children: [
            (0, i.jsxs)(aE.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: aq,
                cardStyle: s()(aY.Nr, d),
                skuPreviewStyle: s()(aY.ev, { [aY.go]: j && !p }, m, B ? f : void 0),
                skuAssetClassName: B ? h : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: w,
                "aria-label":
                    ((t = r.sku),
                    (n = G ? (0, aI.T)(t) : eF.intl.formatToPlainString(eF.t.ZBB4Ty, { productName: (0, aI.T)(t) })),
                    !0 === y ? eF.intl.formatToPlainString(eF.t.s9RZ1r, { label: n }) : n),
                "aria-describedby": null != k ? N : void 0,
                topLeftContent: null != k ? (0, i.jsx)(aW.A, { id: N, countdown: k, variant: "profile" }) : void 0,
                children: [
                    !0 === y && (0, i.jsx)(rJ.N, { className: aY.Pf }),
                    b,
                    D && (0, i.jsx)(aB.A, { spec: aq, onClick: M, isHoveringOrFocusing: p, label: U, icon: F }),
                    j && (0, i.jsx)(aF.gS, { isHoveringOrFocusing: p }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(aG, {
                            sku: r.sku,
                            isCardHovered: p,
                            spec: aq,
                            onError: L,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            _,
        ],
    });
}
function aZ(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, ax.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iQ.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, aA.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iQ.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aX, {
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
function a$(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, aV.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iQ.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, af.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iQ.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        m = t.sku.tenantMetadata?.collectibles?.type,
        f = m === am.R.AVATAR_DECORATION || m === am.R.PROFILE_FRAME;
    return (0, i.jsx)(aX, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [aY.mn]: f }),
        analyticsLocations: a,
        ...d,
    });
}
function aJ(e) {
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
            if (n) return void (0, ap.x)(iX.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, ah.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iQ.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aX, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aK.MO,
        skuAssetHoverClassName: aK.iR,
        analyticsLocations: a,
        ...u,
    });
}
function aQ(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, b.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        m = (0, a.bG)([ay], () => ay.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        f = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || m),
            [t.isOwned, t.skuProductLine, m],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aZ, {
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
            return (0, i.jsx)(a$, {
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
            return (0, i.jsx)(aJ, {
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
var a0 = n(788593),
    a1 = n(132085),
    a6 = n(741934),
    a2 = n(766529),
    a3 = n(998556);
function a4(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, ag.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        u = (0, rn.VU)(),
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
                                  className: a3.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(a2.u, {
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
                                  children: (0, i.jsx)(a0.A, {
                                      className: a3.XJ,
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
                                  className: a3.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(a1.A, {
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
                                  className: a3.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(a6.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: a3.Xm,
                                  children: (0, i.jsx)(aQ, {
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
    return (0, i.jsx)("div", { className: a3.kL, style: { transform: `translate3d(${h}px, ${p}px, 0)` }, children: d });
}
var a8 = n(151869);
n(839272);
var a5 = n(540185);
function a7(e) {
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
        let t = n.find((t) => (0, s8.E)(t, e));
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
        l && o(a5.x.CLIPS_GALLERY),
        o(a5.x.FAVORITE_GAMES),
        o(a5.x.PLAYED_GAMES),
        u("1346069614634864772"),
        o(a5.x.CURRENT_GAMES),
        o(a5.x.WANT_TO_PLAY_GAMES),
        u("1323482066758930452"),
        r.slice(0, 6)
    );
}
let a9 = (0, rQ.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var oe = n(116281),
    ot = n(661439),
    on = n(90165);
function oi(e) {
    let t = (0, a.bG)([as.A], () => as.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof s8.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, eu.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, al.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, ot.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([on.A], () => u.map((e) => (null != e ? on.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([on.A], () => u.map((e) => (null != e ? on.A.getLastPlayedDateTime(e) : null)));
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
var ol = n(224360),
    or = n(362831),
    os = n(843393);
function oa(e) {
    return e.getUniqueKey();
}
function oo(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, oe.A)(),
        s = oi(r),
        o = (0, a.bG)([rC.Ay], () => rC.Ay.hasClips()),
        u = l.useMemo(() => a7({ addableWidgets: r, applicationAffinityData: s, hasClips: o }), [r, s, o]),
        d = u.length >= 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d && (0, i.jsx)(ou, { suggestions: u, suggestionsLocation: "above" }),
            t,
            d && (0, i.jsx)(ou, { suggestions: u, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function ou(e) {
    let t = a9.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(od, { ...e }) : null;
}
function od(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, J.NJ)(),
        { focusAddedWidget: o } = (0, ai.r)(),
        [u, d] = (0, eG.kn)([eN.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(or.A, {
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
    return u !== eN.M.USER_PROFILE_WIDGET_SUGGESTIONS
        ? null
        : (0, i.jsx)(ol.A, {
              className: s()(os.uW, "above" === n && os.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "body-xs/normal" : void 0,
              onDismiss: () => d(eU.i.USER_DISMISS),
              children: (0, i.jsx)(a8.A, {
                  items: t,
                  getItemKey: oa,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: os.Dk,
                  scrollerClassName: os.jv,
                  itemClassName: os.Vs,
                  actionsClassName: os.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eF.intl.string(eF.t["+EIBSA"]),
              }),
          });
}
var oc = n(269507);
function og(e) {
    let { widgets: t, trackUserProfileEditAction: n } = e;
    return (0, i.jsx)("ul", {
        className: oc.ZW,
        "aria-label": eF.intl.string(eF.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                { children: (0, i.jsx)(or.A, { widget: e, size: "small", trackUserProfileEditAction: n }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function om(e) {
    let { trackUserProfileEditAction: t } = e,
        r = (0, oe.A)(),
        s = oi(r),
        o = a7({ addableWidgets: r, applicationAffinityData: s, hasClips: (0, a.bG)([rC.Ay], () => rC.Ay.hasClips()) }),
        u = l.useCallback(() => {
            (t({ action: "PRESS_ADD_WIDGET" }),
                (0, n9.mM)(
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
            (0, i.jsx)(og, { widgets: o, trackUserProfileEditAction: t }),
            (0, i.jsx)(nm.$, { text: eF.intl.string(eF.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: u }),
        ],
    });
}
function of(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, J.NJ)(),
        s = l.useRef(!1),
        o = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError != null, [t]);
    return (
        l.useEffect(() => {
            s.current || o || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [o, n]),
        (0, i.jsxs)("div", {
            className: oc.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: oc.FS,
                    children: [
                        (0, i.jsx)(nc.D, {
                            variant: "heading-sm/medium",
                            color: "text-strong",
                            children: eF.intl.string(eF.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: o ? eF.intl.string(eF.t["+W59o5"]) : eF.intl.string(eF.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s6, {}), (0, i.jsx)(om, { trackUserProfileEditAction: r })],
                    }),
            ],
        })
    );
}
var oh = n(366209);
function op() {
    return (0, i.jsxs)("div", {
        className: oh.mJ,
        children: [
            (0, i.jsx)(sB.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eq.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: eF.intl.string(eF.t["7blcz6"]),
            }),
        ],
    });
}
function ox(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, s9.A)(t.id),
        u = ae(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([s4.A], () => [s4.A.ipCountryCode, s4.A.ipCountryCodeRequest]),
                n = (0, s2.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sW.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(rI.fu), [o]),
        m = l.useMemo(() => o.filter((e) => e instanceof s8.R), [o]);
    function f() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                a2.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(an, { className: oh.cG }),
                            d && (0, i.jsx)(op, {}),
                            (0, i.jsx)(ac, {}),
                            (0, i.jsx)(s6, {}),
                        ],
                    }),
                u ? (0, i.jsx)(oo, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, s5.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, eu.A)(n);
        let { data: i, refetch: r } = (0, s3.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, m),
    c)
        ? (0, i.jsx)(of, { userId: t.id })
        : u
          ? (0, i.jsx)(ai.D, { children: f() })
          : f();
}
function oA(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, s7.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: tI.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([rl.default], () => rl.default.getId() === t)), (r = rL()), n && null != r);
    return (0, i.jsxs)(sN, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(oh.XG, { [oh.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(a4, { scrollerRef: d }), (0, i.jsx)(ox, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var oI = n(115560),
    ov = n(777480),
    oj = n(825484),
    ob = n(952270),
    oy = n(444927),
    oC = n(895360),
    oE = n(267102),
    oS = n(521440),
    oN = n(721932),
    ok = n(832163),
    oT = n(501838),
    oP = n(44724),
    oO = n(808247),
    oR = n(673843),
    oL = n(855052),
    o_ = n(342442),
    ow = n(658946),
    oM = n(535089),
    oD = n(698253),
    oG = n(174947),
    oU = n(840411),
    oF = n(387325),
    oB = n(416415),
    oW = n(419731),
    oV = n(451395),
    oH = n(823016),
    oz = n(100741);
function oY(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oH.r)();
    return (0, i.jsx)(oV.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eF.intl.formatToPlainString(eF.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oz.C,
        dropBeforeClassName: oz.A,
        dropAfterClassName: oz.Ze,
        draggingClassName: oz.Id,
        children: (0, i.jsx)("div", { className: oz.An, children: s }),
    });
}
let oK = l.memo(function (e) {
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
        { registerDragHandleRef: f } = (0, oH.r)(),
        h = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oV.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: oz.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        x = l.useMemo(
            () =>
                (0, i.jsx)(aQ, {
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
              children: (0, i.jsx)(oY, { item: t, index: n, wishlistId: o, onReorder: d, children: x }),
          })
        : (0, i.jsx)("li", { children: x });
});
function oq(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = C.default.getCurrentUser(),
        { labelsEnabled: d, reorderEnabled: c } = (0, oF.Zf)("UserProfileModalV2WishlistGrid"),
        g = l.useMemo(() => t.filter(oG.xZ).map((e) => e.shopUnpublishedAt), [t]),
        m = (0, aC.N)(g),
        { defaultWishlistId: f } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(n.id) })),
        h = (0, oB.Ay)(t, c && null != u && u.id !== n.id),
        { isDragging: p } = (0, ag.V)((e) => ({ isDragging: e.isDragging() })),
        [x, A] = l.useState([]),
        I = l.useCallback((e) => {
            A((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        v = l.useCallback(
            (e, t) => {
                if (e === t || null == f || 0 === h.length || e < 0 || e >= h.length || t < 0 || t >= h.length) return;
                let n = r5.A.getWishlist(f);
                if (null == n) return;
                let i = h[e],
                    { newWishlistData: l, previousSkuId: r, nextSkuId: s } = (0, oU.Ap)(n, h, e, t);
                oO.A.reorderWishlistItem(f, i.skuId, { previousSkuId: r, nextSkuId: s, newWishlistData: l });
            },
            [f, h],
        );
    if (null == u || null == f) return null;
    let j = (0, i.jsxs)(i.Fragment, {
        children: [
            m && (0, i.jsx)(oF.m4, { location: "UserProfileModalV2WishlistGrid" }),
            (0, i.jsx)("ul", {
                className: oz.Vg,
                children: h.map((e, t) =>
                    (0, i.jsx)(
                        oK,
                        {
                            item: e,
                            index: t,
                            profileOwner: n,
                            guildId: r,
                            showEditingControls: s,
                            wishlistId: f,
                            isDragging: p,
                            onReorder: v,
                            isNew: (0, oW.f3)(e.addedAt, o) && !x.includes(e.skuId),
                            onClick: I,
                            showShopUnpublishLabel: d,
                        },
                        e.skuId,
                    ),
                ),
            }),
        ],
    });
    return s ? (0, i.jsx)(oH.B, { emptyListFallbackRef: null, children: j }) : j;
}
function oX(e) {
    let t = C.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oD.P, { isGifting: n, children: (0, i.jsx)(oq, { ...e }) });
}
var oZ = n(815021),
    o$ = n(299679),
    oJ = n(820847);
n(667532);
var oQ = n(802494),
    o0 = n(172218),
    o1 = n(858899),
    o6 = n(2157),
    o2 = n(95817),
    o3 = n(74135),
    o4 = n(964164);
let o8 = az.Z.SIZE_90;
function o5(e) {
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
        { trackUserProfileWishlistAction: f } = (0, J.NJ)(),
        h = (0, o$.Ar)(),
        p = (0, oy.A)(() => (0, oI.A)()),
        { handleVisibilityChange: x } = (0, o2.G)(p),
        A = (0, o0.K)(x, 0.5, h?.surface != null),
        I = l.useCallback(() => {
            (f({
                wishlistId: g,
                action: rT.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                h?.surface != null &&
                    tQ.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(aE.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: o8,
            cardStyle: s()(o4.Nr, a),
            skuPreviewStyle: s()(o4.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: m,
        }),
    });
}
function o7(e) {
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
                    (await oO.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rT.RP.WISHLIST }));
                } catch (e) {
                    ((0, o1.P0)({ text: eF.intl.string(eF.t.F8FvUy), variant: "critical" }),
                        ny.O.announce(eF.intl.string(eF.t.F8FvUy)));
                } finally {
                    f(!1);
                }
            }
        }, [t, n, m, a, d]),
        p = l.useMemo(() => s()({ [o4.zW]: r || m }, o), [r, m, o]);
    return (0, i.jsxs)(o5, {
        "aria-label": eF.intl.formatToPlainString(eF.t.xRjJBe, { productName: (0, aI.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: p,
        onClick: h,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(aF.oU, { isHoveringOrFocusing: r, loading: m }), !r && !m && c],
    });
}
function o9(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, o6.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(o7, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(o3.s, { spec: o8, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function ue(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case am.R.PROFILE_EFFECT:
                case am.R.NAMEPLATE:
                case am.R.BUNDLE:
                case am.R.PROFILE_FRAME:
                    return;
                case am.R.AVATAR_DECORATION:
                    return o4.ML;
                default:
                    return s()(o4.ML, o4.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(o7, { sku: t, skuPreviewStyle: r, ...n });
}
function ut(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(o7, { sku: t, skuPreviewStyle: aK.MO, ...n });
}
function un(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(o9, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(ue, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(ut, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var ui = n(609965);
function ul(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([C.default], () => C.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(ui.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                o$.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(un, {
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
var ur = n(927813);
let us = 90 * ur.A.Millis.DAY,
    ua = 90 * ur.A.Millis.DAY;
var uo = n(469364);
function uu(e) {
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
                    [ee.A],
                    () => (null != n ? new Date(ee.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [d, c] = (0, eG.Wl)(
                    eN.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + ua, cooldownDurationMs: us },
                    void 0,
                    !0,
                ),
                g = d === eN.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eU.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(ud, {
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
function ud(e) {
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
                { recommendations: a, status: o } = (0, oQ.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iQ.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, oU.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oJ.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(uo.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: uo.wx,
                      children: [
                          (0, i.jsx)(eq.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: eF.intl.string(eF.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: uo.b,
                                  children: (0, i.jsx)(oZ.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(o$.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(ul, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(uo.Vg, uo.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var uc = n(477782),
    ug = n(165862),
    um = n(431194);
function uf(e) {
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
                    t.filter(ec.Vq).map((e) => {
                        let t = t0.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eF.intl.formatToPlainString(eF.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft:
                                null != t ? () => (0, i.jsx)("img", { className: um.I, src: t, alt: "" }) : tD.ShopIcon,
                            leadingAccessory:
                                null != t ? { type: "image", src: t } : { type: "icon", icon: tD.ShopIcon },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, eu.A)(o), handleOpenGameShop: s }),
        m = l.useMemo(
            () =>
                (0, i.jsxs)(uc.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(uc.Dr, {
                                id: "browse-collectibles-shop",
                                label: eF.intl.string(eF.t["5upuqx"]),
                                iconLeft: tD.ShopIcon,
                                leadingAccessory: { type: "icon", icon: tD.ShopIcon },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(uc.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eF.intl.string(eF.t.lG6a5x),
                                iconLeft: tu.NitroWheelIcon,
                                leadingAccessory: { type: "icon", icon: tu.NitroWheelIcon },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    uc.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(n_.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(ug.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eF.intl.string(eF.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, i.jsx)(nm.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? nd.XSmallIcon : lu.ChevronSmallDownIcon,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var uh = n(365199);
let up = eW.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function ux(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(uc.rX, {
                          children: [
                              (0, i.jsx)(uc.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eF.intl.string(eF.t.b2nFyA),
                                  subtext: eF.intl.string(eF.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(uc.bX, {}),
                              (0, i.jsx)(uc.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eF.intl.string(eF.t.hvVgAZ),
                                  icon: tq.LinkExternalSmallIcon,
                                  trailingIndicator: { type: "icon", icon: tq.LinkExternalSmallIcon },
                                  action: () => window.open(up),
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
              children: (0, i.jsx)(n_.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(ug.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eF.intl.string(eF.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tU.q3, {
                          buttonRef: s,
                          icon: uh.MoreHorizontalIcon,
                          tooltipText: eF.intl.string(eF.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var uA = n(526725);
function uI(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(uf, {
              title: eF.intl.string(eF.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(nm.$, {
              variant: "secondary",
              size: "sm",
              icon: tD.ShopIcon,
              text: eF.intl.string(eF.t["i/yzHs"]),
              onClick: n,
          });
}
function uv(e) {
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
        className: uA.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(uf, {
                          title: eF.intl.string(eF.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(nm.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tX.PlusSmallIcon,
                          text: eF.intl.string(eF.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(ux, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function uj(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(nm.$, {
        variant: "primary",
        size: "sm",
        icon: tD.ShopIcon,
        text: eF.intl.formatToPlainString(eF.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function ub(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, oE.Us)() === T.BRT.OVERLAY,
        u = (0, eu.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(uj, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(uf, {
                title: eF.intl.string(eF.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: uA.y7,
        children: [
            (0, i.jsxs)("div", {
                className: uA.q6,
                children: [
                    (0, i.jsx)(nc.D, {
                        variant: "heading-sm/medium",
                        color: "text-strong",
                        children: eF.intl.string(eF.t.HGnLLT),
                    }),
                    (0, i.jsx)(eq.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: eF.intl.string(eF.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(oj.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(nm.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tD.ShopIcon,
                                text: eF.intl.string(eF.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function uy(e) {
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
        m = (0, a.bG)([ee.A], () => ee.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: f } = (0, J.NJ)(),
        h = !1 === r.nsfwAllowed,
        [p, x] = l.useState(!0);
    l.useEffect(() => {
        m?.visibility != null && x(m.visibility === ov.a.PUBLIC);
    }, [m?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && f({ wishlistId: t, action: n, productLines: i });
            },
            [f],
        ),
        I = (0, oM.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, oL.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = p ? ov.a.PRIVATE : ov.a.PUBLIC;
            (x(!p),
                oO.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: p ? rT.Mq.WISHLIST_TOGGLE_PRIVATE : rT.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, oL.y9)(s) : void 0,
                }));
        }, [g, p, f, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !p &&
                (0, i.jsxs)("div", {
                    className: uA.lm,
                    children: [
                        (0, i.jsx)(ob.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eF.intl.string(eF.t.RX7D9h),
                        }),
                    ],
                }),
            p &&
                h &&
                (0, i.jsxs)("div", {
                    className: uA.lm,
                    children: [
                        (0, i.jsx)(sB.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eq.E, {
                            variant: "body-xs/normal",
                            color: "text-subtle",
                            children: eF.intl.string(eF.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: uA.U1,
                children: [
                    (0, i.jsx)(eq.E, {
                        variant: "body-xs/semibold",
                        color: "text-subtle",
                        children: eF.intl.format(eF.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(uv, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: p,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(uI, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function uC(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, s7.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([ee.A, C.default], () => ({
            wishlistId: ee.A.getFirstWishlistId(t.id),
            currentUser: C.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, b.Ay)(),
        c = (function (e) {
            let { ownerId: t, wishlistId: n, isVisible: i = !0 } = e,
                r = (0, r4.bq)(),
                s = (0, a.bG)(
                    [ee.A],
                    () => (null != t ? ee.A.getProfileReadStateSectionAckedAt(t, o_.o.WISHLIST) : null),
                    [t],
                ),
                [o, u] = l.useState(void 0);
            (i || void 0 === o || u(void 0), i && null != t && null != r && void 0 === o && u(r.enabled ? s : null));
            let d = (0, a.bG)([r5.A, ee.A], () => null != t && (0, ow.Y)(t, n), [t, n]),
                c = void 0 !== o;
            return (
                l.useEffect(() => {
                    i && c && d && null != t && (0, ow.U)(t);
                }, [i, c, d, t]),
                o
            );
        })({ ownerId: t.id, wishlistId: o }),
        g = ae(t.id),
        { wishlist: m, wasFetched: f, error: h } = (0, z.fw)({ wishlistId: o, userId: t.id }),
        [p, x] = l.useState(!1);
    (f && !p && x(!0), (0, oR.A)(m));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([ok.A], () => ok.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, oN.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, oT.w)({ userIds: s }),
                c = (0, oT.mn)({ userIds: s }),
                g = (0, oT.tR)(s),
                m = (0, oT.rY)(),
                f = (0, oT.qx)(),
                h = (0, oT.px)();
            return l.useMemo(
                () => (0, sd.uniq)([...u, ...d, ...c, ...g, ...(r ? [...m, ...f, ...h] : [])].filter(ec.Vq)),
                [u, d, c, g, m, f, h, r],
            );
        })({ wishlist: m, profileOwner: t, currentUser: u }),
        I = (0, oy.A)(() => (0, oI.A)()),
        v = l.useCallback(() => {
            (0, tG.Cz)({ analyticsLocations: d, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [d]),
        y = l.useCallback((e) => {
            (0, oP.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iX.M)(), (0, oP.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, aT.c)({
            userId: u?.id,
            skuId: iQ.pe.TIER_2,
            nuxGraphic: oS.g,
            onNuxShow: oC.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != h) return null;
    let N = null == m || 0 === m.items.length;
    return (0, i.jsxs)(sN, {
        scrollerRef: r,
        className: s()({ [uA.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(ub, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: y,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a4, { scrollerRef: r }),
                          (0, i.jsx)(uy, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, oL.C3)(m, iQ.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(oX, {
                              items: m.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              ackedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(uu, {
                    user: t,
                    guildId: n,
                    wishlist: m,
                    hasFetchedWishlist: p,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? uA._E : uA.HZ,
                }),
        ],
    });
}
function uE(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rT.RP.ACTIVITY
        ? (0, i.jsx)(sT, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rT.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sM, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rT.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sF, { user: t, onClose: o })
            : l === rT.RP.WIDGETS
              ? (0, i.jsx)(oA, { user: t, guildId: s, channelId: a })
              : l === rT.RP.WISHLIST
                ? (0, i.jsx)(uC, { profileOwner: t, guildId: s })
                : null;
}
function uS(e) {
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
        { trackUserProfileAction: h } = (0, J.NJ)(),
        { shouldLogExposure: p } = (0, r8.A)(t),
        { primaryColor: x } = (0, sl.E)(),
        A = null != x ? "neutral" : "primary",
        I = l.useRef(!1),
        v = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        v && !I.current && ((I.current = !0), h({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [v, h]);
    let [j, b] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        y = (0, a.bG)([rl.default, r0.A], () => {
            let e = r0.A.getAssignment("user", rl.default.getId(), r2.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (r6[e.variantId] ?? r1);
        }),
        C = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = si({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [ee.A, r5.A],
                    () => {
                        if (null == ee.A.getUserProfile(t.id) || ee.A.isFetchingProfile(t.id, l)) return !0;
                        let e = ee.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = r5.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = ee.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && r5.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rT.RP.WIDGETS) &&
                      r.some((e) => e.section === rT.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [E, S] = l.useState(null);
    if (null == E && null != C && null != y) {
        let e = null == d && C;
        (S(e), e && y.enabled && b(rT.RP.WISHLIST));
    }
    let N = u.find((e) => e.section === j) ?? u[0];
    return (
        N.section !== j && b(N.section),
        (0, i.jsxs)("div", {
            className: sS.kL,
            children: [
                p && (0, i.jsx)(r4.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === E && (0, i.jsx)(r3, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sS.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(r$.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: N.section,
                        onItemSelect: function (e) {
                            rj.A.hasUnsavedChanges() && N.section === rT.RP.WIDGETS
                                ? (0, nk.VQ)()
                                : (h({ action: "PRESS_SECTION", section: e }), b(e), S((e) => e ?? !1));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                r$.V.Item,
                                {
                                    className: sS.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eF.intl.formatToPlainString(eF.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot &&
                                            (0, i.jsx)(rJ.N, { variant: A, className: sS.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(r$.V.Panel, {
                    id: N.section,
                    "aria-label": N.text,
                    className: sS.NM,
                    children: (0, i.jsx)(f.F, {
                        component: (0, i.jsx)(m.A, { children: (0, i.jsx)(f.H, { children: N.text }) }),
                        children: (0, i.jsx)(uE, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: o,
                            section: N.section,
                            onClose: g,
                        }),
                    }),
                }),
            ],
        })
    );
}
var uN = n(933832),
    uk = n(972213);
let uT = {
        [rT.jM.WIDGET_ADDED]: {
            message: eF.intl.string(eF.t.fFP1Uy),
            icon: (0, i.jsx)(uN.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [rT.jM.WIDGET_REMOVED]: {
            message: eF.intl.string(eF.t.zzsK7h),
            icon: (0, i.jsx)(uN.CheckmarkLargeIcon, { size: "sm", color: p.A.colors.STATUS_POSITIVE.css }),
        },
        [rT.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eF.intl.string(eF.t["84MExs"]),
            icon: (0, i.jsx)(uk.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rT.jM.SOMETHING_WENT_WRONG]: {
            message: eF.intl.string(eF.t.F8FvUy),
            icon: (0, i.jsx)(uk.XLargeIcon, { size: "sm", color: p.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    uP = (e) => {
        let { className: t } = e,
            n = (0, rk.fu)(),
            r = (0, a.bG)([tI.Ay], () => tI.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(uT[n]), ny.O.announce(uT[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, rk.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rk.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lq.animated.div, { className: t, style: e, children: (0, i.jsx)(rH, { ...u }) }),
                ),
            })
        );
    };
var uO = n(297413),
    uR = n(465829),
    uL = n(826673),
    u_ = n(73392),
    uw = n(576705),
    uM = n(997394);
function uD(e) {
    return null == e || "" === e ? void 0 : e;
}
function uG(e) {
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
        j = $.Ay.canUsePremiumProfileCustomization(h),
        { canChangeDisplayName: y, permissionsLoaded: E } = (0, a.cf)([uw.A, Y.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = Y.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: uw.A.can(T.xBc.CHANGE_NICKNAME, e) || uw.A.can(T.xBc.MANAGE_NICKNAMES, e),
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
        (o = (0, a.bG)([eI.Ay], () => (null != t ? (eI.Ay.getMember(t, h.id)?.nick ?? null) : null))),
        (u = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(t).pendingNickname)),
        (m = (g = void 0 !== (c = n ? d : u) ? c : n ? o : r) ?? ""),
        (f = n ? (uD(r) ?? h.username) : h.username),
        {
            value: m,
            previewValue: uD(g) ?? f,
            fallbackDisplayName: f,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, tp.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, tp.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        R = (0, a.bG)([ev.A], () => ev.A.getErrors(v ?? null)),
        L = (0, th.EC)(v ?? null),
        _ = I ? R.nick?.[0] : R.global_name?.[0],
        w = L?.nick?.[0],
        M = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(v).pendingDisplayNameStyles),
        D = (0, nx.A)({ userId: h.id, guildId: v, pendingDisplayNameStyles: M }),
        G = (0, u_.a)({ displayNameStyles: D, compensateForSafari: !1 }),
        U = eF.intl.string(I ? eF.t.mq6Cg9 : eF.t.XuZU7A),
        F = I ? eF.intl.string(eF.t.YcDKr8) : h.username,
        B = l.useRef(null),
        W = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, uL.Dr)(eN.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eU.i.INDIRECT_ACTION,
                    }),
                    (0, nq.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: B }));
            },
            [A, v],
        ),
        V = {
            icon: ne.PaintbrushThinIcon,
            tooltip: eF.intl.string(eF.t.lqKKI2),
            "aria-label": eF.intl.string(eF.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: uM.Cs,
                  children: (0, i.jsx)(nu.LockIcon, { size: "refresh_sm", color: p.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tv.kL,
        children: (0, i.jsx)(eq.E, {
            variant: uR.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rw.w, {
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
                    return (0, i.jsx)(uR.c$, {
                        user: h,
                        guildId: v,
                        displayName: n ? (uD(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: M,
                        className: s()(uM.dt, { [uM.jW]: n && "" === e }),
                        displayNameTrailing: H,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: 32,
                textVariant: "inherit",
                trailing: y && j ? V : void 0,
                error: _,
                helperText: S ? eF.intl.string(eF.t.gzjxQi) : w,
                disabled: !y,
            }),
        }),
    });
}
var uU = n(628072);
function uF(e) {
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
        (r = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(t).pendingPronouns)),
        (o = n ? d?._guildMemberProfile?.pronouns : d?.pronouns),
        (u = d?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: u,
            onCommit: l.useCallback(
                (e) => {
                    (0, tp.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        f = d?.guildId != null,
        h = null != g && g.length > 0,
        p = eF.intl.string(f ? eF.t.AXiE0i : eF.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(tv.kL, tv.oE, uU.k),
        children: (0, i.jsx)(rw.w, {
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
            preview: h ? (0, i.jsx)(uR.n2, { pronouns: g }) : null,
            label: eF.intl.string(eF.t["rniRE+"]),
            placeholder: p,
            maxLength: 40,
            spellCheck: !1,
        }),
    });
}
var uB = n(873200),
    uW = n(305866),
    uV = n(145497),
    uH = n(685073),
    uz = n(2967),
    uY = n(318785),
    uK = n(534400),
    uq = n(152313),
    uX = n(830543),
    uZ = n(415916),
    u$ = n(743981),
    uJ = n(295930),
    uQ = n(594615);
let u0 = "no-server-tag";
function u1(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e7.D, {
        innerRef: t,
        className: s()(uJ.qJ, { [uJ.wK]: o }),
        "aria-label": o ? eF.intl.string(eF.t.Pdd1nd) : eF.intl.formatToPlainString(eF.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eq.E, {
            variant: "body-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: uJ.W3,
            tag: "span",
            children: [
                o
                    ? eF.intl.string(eF.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  uK.Z9,
                                  {
                                      src: (0, uH.gC)(n, r, u$.Sl.SIZE_14),
                                      size: u$.Sl.SIZE_14,
                                      className: uJ.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uH.gC)(n, r, u$.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(lu.ChevronSmallDownIcon, { size: "xs", color: "currentColor", className: uJ.u4 }),
            ],
        }),
    });
}
function u6() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, uY.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uz.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([C.default], () => {
            let e = C.default.getCurrentUser();
            return (0, uH.Zo)(e?.primaryGuild);
        }),
        c = d.guildId ?? null,
        g = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(null).pendingPrimaryGuildId),
        m = void 0 !== g ? g : c,
        f = null != m ? (u.get(m) ?? null) : null,
        h = null == f && m === c,
        p = f?.profile?.tag ?? (h ? (d.tag ?? null) : null),
        x = f?.profile?.badge ?? (h ? d.badge : void 0),
        A = l.useCallback(
            (e) =>
                e.id === u0
                    ? (0, i.jsx)("div", {
                          className: uQ.uN,
                          children: (0, i.jsx)(eq.E, {
                              variant: "body-md/normal",
                              color: "input-placeholder-text-default",
                              className: uJ.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(lA.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: u0, label: eF.intl.string(eF.t.VxdWWH), value: u0 },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(uV.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(uK.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
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
            (0, uZ.A)(!0, () => {
                ((0, iX.M)(), (0, uX.default)(), (0, uq.A)(r, j.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let y = (0, i.jsx)(uB.a3, {
        label: eF.intl.string(eF.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eF.intl.string(eF.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(n_.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(uW.l, {
                className: s()(uJ.yt, { [uJ.R4]: o && !v, [uJ.Lo]: v }),
                "aria-label": eF.intl.string(eF.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: uJ.p$,
                          children: [
                              (0, i.jsx)(eq.E, {
                                  id: t,
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children: eF.intl.string(eF.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(nm.$, {
                                  text: eF.intl.string(eF.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => b(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(uB.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, tp.p)({ primaryGuildId: e === u0 ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: uJ.wx,
                                        children: [
                                            y,
                                            (0, i.jsx)(nm.$, {
                                                text: eF.intl.string(eF.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => b(n),
                                            }),
                                        ],
                                    })
                                  : y,
                              (0, i.jsx)(uB.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(u1, { buttonRef: e, guildId: m, guildTag: p, guildBadge: x, ...t }),
    });
}
var u2 = n(956495);
function u3(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(uR.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function u4(e) {
    let t = (0, a.bG)([ev.A], () => ev.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(u3, { ...e, displayNameStylesOverride: t });
}
function u8(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(uO.A, {
                  user: t,
                  forceUsername: !0,
                  className: u2.a1,
                  usernameClass: u2.eb,
                  discriminatorClass: u2.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(uG, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(u2.AK, u2.j6),
                children: [r, (0, i.jsx)(uR.Ce, {}), (0, i.jsx)(uF, { displayProfile: n }), (0, i.jsx)(u6, {}), l],
            }),
        ],
    });
}
function u5(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(u3, { ...n });
        case "try-it-out":
            return (0, i.jsx)(u4, { ...n });
        case "edit":
            return (0, i.jsx)(u8, { ...n });
        default:
            return (0, ec.xb)(t);
    }
}
var u7 = n(97808),
    u9 = n(22231),
    de = n(601255),
    dt = n(562819),
    dn = n(253400),
    di = n(339984),
    dl = n(329801),
    dr = n(884362);
let ds = dn.Ay.getEnableHardwareAcceleration() ? u7.Js : u7.eu;
function da(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function du(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(ug.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eF.intl.string(eF.t.YAgq3W),
        children: (0, i.jsx)(uc.rX, { children: n }),
    });
}
function dd(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eH.V)(e),
        [u, d] = l.useState(!1),
        c = l.useRef(null),
        g = l.useRef(null),
        m = l.useCallback(() => d(!1), []),
        f = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = null != n,
                c = (0, a.bG)([eI.Ay], () => (null != n ? eI.Ay.getMember(n, t.id) : null)),
                g = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(n ?? void 0).pendingAvatar),
                m = d ? c?.avatar : t.avatar,
                f = (0, ex.z5)(g, m),
                h = d && null != t.avatar,
                p = $.Ay.canUsePremiumProfileCustomization(t),
                x = p || null == n,
                A = p || null == n,
                I = (0, a.bG)([Y.A], () => (null != n ? Y.A.getGuild(n) : null)),
                v = (0, ex.a4)({ user: t }),
                j = (0, ex.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: y } = (0, ex.CP)(n ?? void 0),
                C = void 0 !== y,
                E = null != (0, de.A)(C ? y : j) && (C ? null != y : null != j),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        da(() =>
                            (0, nj.XD)({
                                uploadType: di.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        da(() =>
                            (0, dt.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, nj.rM)(null, m, (e) => (0, tp.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ex.WU)(h ? "reset" : "remove"));
                }, [r, n, m, h]),
                P = l.useCallback(() => {
                    (r(), (0, tp.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                uc.Dr,
                                { id: "change-avatar", label: eF.intl.string(eF.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                uc.Dr,
                                { id: "change-decoration", label: eF.intl.string(eF.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            h
                                ? (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.twB3fz),
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
                                      uc.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["9rx5GO"]),
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
        ? (0, i.jsx)(eH.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(dl.my, dl.vk, dr.kL, { [dr.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(ds, { ...r, imageClassName: s()(dl.Lw, dr.HU) }),
                  (0, i.jsx)(n_.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: n_.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, i.jsx)(du, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: dr.r9,
                              children: (0, i.jsx)(nt.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: u9.PencilIcon,
                                  "aria-label": eF.intl.string(eF.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), d((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var dc = n(514905);
function dg(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(ug.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eF.intl.string(eF.t.FzU73A),
        children: (0, i.jsx)(uc.rX, { children: n }),
    });
}
function dm(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        u = l.useRef(null),
        d = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = (0, ex.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, ex.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, ex.Xf)({ user: t, guildId: void 0 }),
                m = $.Ay.canUsePremiumProfileCustomization(t),
                f = null == n,
                h = f || m,
                p = f || m,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: I,
                    pendingProfileFrame: v,
                } = (0, a.bG)([ev.A], () => ev.A.getPendingChanges(n ?? void 0)),
                j = (0, a.bG)([ee.A], () =>
                    null != n ? ee.A.getGuildMemberProfile(t.id, n)?.banner : ee.A.getUserProfile(t.id)?.banner,
                ),
                y = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, ex.Ac)(A, j),
                k = x && y,
                T = x && E,
                P = x && S,
                O = void 0 === I ? null != d : null != I,
                R = void 0 === v ? null != c : null != v,
                L = (0, ex.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                w = (0, _.A)(L?.skuId),
                M = l.useCallback(() => {
                    (r(),
                        (0, nj.XD)({
                            uploadType: di.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                D = l.useCallback(() => {
                    (r(),
                        (0, ia.W)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nj.rM)(null, j, (e) => (0, tp.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, tp.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, iE.w)({
                            analyticsLocations: u,
                            guild: null != n ? (Y.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: w,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, w, s]),
                B = l.useCallback(() => {
                    (r(), (0, tp.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, i.jsx)(
                                uc.Dr,
                                { id: "change-banner", label: eF.intl.string(eF.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                uc.Dr,
                                { id: "change-effect", label: eF.intl.string(eF.t["/6nv6N"]), action: D },
                                "change-effect",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                uc.Dr,
                                { id: "change-frame", label: eF.intl.string(eF.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    m &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.tT9n7D),
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
                                      uc.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.zUOlT6),
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
                                      uc.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      uc.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["8DfADq"]),
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
        ? (0, i.jsx)(eY.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(dc.kL, { [dc.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eY.A, { ...e, className: dc.Pr }),
                  (0, i.jsx)(n_.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: n_.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(dg, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: dc.r9,
                              children: (0, i.jsx)(nt.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: u9.PencilIcon,
                                  "aria-label": eF.intl.string(eF.t.FzU73A),
                                  onClick: (e) => {
                                      (e.stopPropagation(), o((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var df = n(419341),
    dh = n(776879),
    dp = n(837531),
    dx = n(186272),
    dA = n(447538);
let dI = (e) => e * (2 - e),
    dv = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function dj(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function db(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, es.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: dA.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function dy(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (id.add(e), () => id.delete(e)),
            () => ic,
        );
    return null == s ? null : (0, i.jsx)(R.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function dC(e) {
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
        w = l.useRef(null),
        D = l.useRef(null),
        G = l.useRef(null);
    l.useEffect(() => {
        if (L) return () => y.A.setState({ isOpen: !1 });
    }, [L]);
    let { isHoveringOrFocusing: V } = (0, U.A)(w),
        [z, Y] = l.useState(),
        X = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? Y("compact-xs") : t <= 380 ? Y("compact-sm") : Y(void 0);
        }, []);
    (0, I.g)(w, X, [], { fireOnMount: !0 });
    let $ = null != z ? dv[z] : void 0,
        J = l.useMemo(() => A ?? (0, F.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([K.A], () => ({
            relationshipType: K.A.getRelationshipType(o.id),
            originApplicationId: K.A.getOriginApplicationId(o.id),
        })),
        et =
            ((t = o.id),
            (n = (0, en.bG)([el.default], () => el.default.locale)),
            (r = (0, en.bG)([K.A], () => (K.A.getRelationshipType(t) === T.eA$.FRIEND ? K.A.getSince(t) : null), [t])),
            (0, ei.An)(r, n)),
        er = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        es = (0, W.q)({ userId: o.id }),
        em = (0, B.fi)(o.id),
        { appIdentities: ef, connections: eh } = (function (e) {
            let { filteredAppIdentities: t } = (0, ed.A)(e),
                n = (0, eg.A)(e),
                i = l.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
                r = (0, eu.A)([...i]).filter(ec.Vq);
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
                            let t = eo.A.get(e.type);
                            return t?.migrationData == null || !i.has(t.migrationData.replacedBy);
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        ep = (0, ea.A)(o.id),
        ex = eh.length > 0 || ef.length > 0,
        eA = ep.length > 0,
        eI = _ ? dm : eY.A,
        ev = h?.guildId ?? d,
        ey = {
            user: o,
            displayProfile: h,
            guildId: d,
            channelId: f,
            avatarSize: $?.avatarSize ?? eb.T[ej.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: b,
            avatarOverride: C,
        },
        eC = l.useCallback(() => {
            (0, e8.A)({ user: o, guildId: ev, alt: p });
        }, [p, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(dA.profile, null != z && dA[z]),
        ref: w,
        "aria-busy": R,
        children: [
            (0, i.jsxs)("div", {
                className: dA.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: dA.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: h,
                            guildId: d,
                            themeType: ej.d.MODAL_V2,
                            specOverrides: $,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    _
                        ? (0, i.jsx)(dd, { ...ey })
                        : (0, i.jsx)(eH.A, {
                              ...ey,
                              onOpenAvatar: "read-only" === O ? eC : void 0,
                              imageAnimatingClassName: "try-it-out" === O && null == C ? le.$T : void 0,
                          }),
                    (0, i.jsx)(e3.A, {
                        user: o,
                        guildId: d,
                        channelId: f,
                        themeType: ej.d.MODAL_V2,
                        hasEntered: x,
                        prompt: L ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: dA.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(u5, {
                                user: o,
                                displayProfile: h,
                                nickname: p,
                                trailing: (0, i.jsx)(ez.A, {
                                    displayProfile: h,
                                    themeType: ej.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: L,
                                    popoutAnchorRef: x ? D : void 0,
                                    containerRef: G,
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
                                        (0, i.jsx)(eV, { targetElementRef: G }),
                                        (0, i.jsx)(eB, { targetElementRef: G }),
                                    ],
                                }),
                        ],
                    }),
                    Q === T.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e2.A.Overlay, {
                            className: dA.profileOverlay,
                            children: (0, i.jsx)(e$.A, {
                                user: o,
                                applicationId: ee,
                                guildId: h?.guildId ?? void 0,
                                channelId: f,
                                className: dA.profileBanner,
                            }),
                        }),
                    em.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e2.A.Overlay,
                            {
                                className: dA.profileOverlay,
                                children: (0, i.jsx)(e$.A, {
                                    user: o,
                                    guildId: h?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: dA.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e2.A.Overlay, {
                            className: dA.profileOverlay,
                            children: (0, i.jsx)(tf, {
                                heading: eF.intl.string(eF.t.Iyka0U),
                                headingVariant: "body-md/semibold",
                                headingIcon: { icon: g.CircleErrorIcon, size: "xs" },
                                className: dA.profileBanner,
                                children: (0, i.jsx)(H.T, { userId: o.id, variant: "body-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e6.A, { user: o, className: dA.profileBanner }),
                    h?.private &&
                        (0, i.jsx)(e2.A.Overlay, {
                            className: dA.profileOverlay,
                            children: (0, i.jsx)(e1.A, { username: p }),
                        }),
                    (0, i.jsx)("div", {
                        className: dA.profileButtons,
                        children: (0, i.jsx)(tH, {
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
                    L && "try-it-out" !== O && (0, i.jsx)(eK.A, { isPremiumUser: (0, Z.ki)(u) }),
                    !er && (0, i.jsx)(tP, { currentUser: u, displayProfile: h, canEditInPlace: _ }),
                    es.length > 0 &&
                        (0, i.jsx)(tf, {
                            heading: eF.intl.string(eF.t["Uv/eTx"]),
                            children: (0, i.jsx)(eZ.A, { applicationIds: es }),
                        }),
                    (0, i.jsx)(tf, {
                        heading: eF.intl.string(eF.t.a6XYD9),
                        children: (0, i.jsx)(eQ.A, { userId: o.id, guildId: h?.guildId, tooltipDelay: 300 }),
                    }),
                    null != et &&
                        (0, i.jsx)(tf, {
                            heading: eF.intl.string(eF.t.wlTO8v),
                            children: (0, i.jsx)(eX, { friendsSinceDate: et }),
                        }),
                    h?.guildId != null &&
                        (0, i.jsx)(e4.A, {
                            userId: o.id,
                            guildId: h.guildId,
                            className: dA.profileRolesSection,
                            headingVariant: "body-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !er &&
                        (_ || ex) &&
                        (0, i.jsx)(tf, {
                            heading: eF.intl.string(eF.t["3fe7U5"]),
                            scrollTargetId: rT.bk.CONNECTIONS,
                            children: (0, i.jsx)(t9, {
                                applicationIdentities: ef,
                                connections: eh,
                                userId: o.id,
                                allowEditing: _,
                                className: dA.profileAppConnections,
                            }),
                        }),
                    !er &&
                        eA &&
                        (0, i.jsx)(tf, {
                            heading: eF.intl.string(eF.t.PHjkRE),
                            scrollTargetId: rT.bk.APPS,
                            children: (0, i.jsx)(to, {
                                applicationRoleConnections: ep,
                                onClose: v,
                                className: dA.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rB, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(dy, { displayProfile: h, profileEffectOverride: N, isHovering: V }),
            null != k && (0, i.jsx)(M.A, { frame: k, filterLayer: dj, fadeIn: P }),
        ],
    });
}
function dE(e) {
    let { user: t, displayProfile: n, pendingThemeColors: l, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: u,
        } = (0, er.A)({ user: t, displayProfile: n, pendingThemeColors: l, isPreview: r }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, eh.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: u,
        });
    return (0, i.jsx)("div", { className: c, style: d, children: s });
}
function dS(e) {
    let t,
        n,
        r,
        {
            user: u,
            currentUser: c,
            guildId: g,
            originGuildId: I,
            channelId: y,
            messageId: R,
            roleId: M,
            sessionId: U,
            initialTabSection: F,
            initialScrollTarget: B,
            transitionState: W,
            customStatusPrompt: H,
            openedAt: K,
            onClose: Z,
            sourceAnalyticsLocations: en = [],
            themeContainerClassName: ei,
        } = e,
        el = u.id === c.id,
        er = l.useCallback(() => (0, uZ.A)(el, Z), [el, Z]),
        es = l.useCallback(
            (e) =>
                (0, uZ.A)(el, () => {
                    (Z(), e());
                }),
            [el, Z],
        ),
        {
            guildId: ea,
            pendingGuildId: eo,
            isFetching: eu,
            handleSelectUserProfile: ed,
            handleRetry: ec,
            hasError: eg,
        } = (function (e) {
            let { userId: t, initialGuildId: n } = e,
                [i, r] = l.useState(n),
                [s, o] = l.useState(n),
                [u, d] = l.useState("idle"),
                [c, g] = l.useState(0),
                m = (0, a.bG)([ee.A], () => ee.A.getUserProfile(t)?.fetchError?.status ?? null, [t]),
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
                        (0, ep.A)(t, void 0, {
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
        })({ userId: u.id, initialGuildId: g }),
        eh = l.useMemo(() => (null != ea ? { [ea]: [u.id] } : {}), [ea, u.id]);
    (0, v.Eq)(eh, "UserProfileModalV2");
    let eb = na(),
        eN = (0, a.bG)([q.A], () => q.A.hidePersonalInformation),
        ek = (0, em.A)(u.id),
        eT = (0, ef.W)(u.id),
        eP = eg && !eT,
        eO = ek && !eN && !eg && !eb,
        eR = eb ? "try-it-out" : eO ? "edit" : "read-only",
        {
            pendingThemeColors: eL,
            avatarDecorationOverride: e_,
            avatarOverride: ew,
            bannerOverride: eM,
            accentColorOverride: eD,
            profileEffectOverride: eG,
            profileFrameOverride: eU,
        } = (function (e) {
            let { userId: t, guildId: n, editingMode: i } = e;
            return (0, a.cf)(
                [ev.A, C.default, eI.Ay, ee.A],
                () => {
                    if ("read-only" === i) return eC;
                    let e = C.default.getUser(t);
                    if (null == e) return eC;
                    let l = ev.A.getTryItOutChanges(),
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
                                : ev.A.getPendingChanges(n),
                        s = null != n ? eI.Ay.getMember(n, t) : null,
                        a = ee.A.getUserProfile(t),
                        o = null != n ? ee.A.getGuildMemberProfile(t, n) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, ex.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, eA.V7)({ userId: t, image: r.pendingAvatar, size: ey }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, ex.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, ex.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: u.id, guildId: ea, editingMode: eR }),
        {
            isExpanded: eB,
            isAnimating: eW,
            transition: eV,
            handleExpand: eH,
            handleCollapse: ez,
            refs: { expandIconButtonRef: eY, expandTabButtonRef: eK, collapseButtonRef: eq },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: dI },
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
        eX = ek && !eB,
        eZ = ek && (!eB || eW),
        { defaultWishlistId: e$ } = (0, a.cf)([ee.A], () => ({ defaultWishlistId: ee.A.getFirstWishlistId(u.id) }));
    ((0, z.fw)({ wishlistId: e$, userId: u.id }),
        (t = (0, O.D)("edit_profile_preload")),
        (n = (0, a.bG)([C.default], () => C.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([P.A], () => P.A.shouldFetch())),
        (0, l.useEffect)(() => {
            t &&
                null != n &&
                r &&
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
        }, [t, n, r]));
    let eQ = (0, eS.fC)(),
        e1 = eP && (!ek || !eu),
        e6 = ek && eg,
        e3 = eo !== ea || e6 || null != eQ.interactionType,
        e4 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sO.A)(t),
                r = l?.length,
                s = (0, dh.A)(t),
                a = (0, s9.A)(t.id),
                o = (0, df.A)(t),
                { hasNewWishlistItems: u } = (0, r8.A)(t),
                d = [],
                c = t.id === n?.id,
                g = ae(t.id),
                m = a.length > 0;
            return (
                (g || m) && d.push({ text: eF.intl.string(eF.t.laViwx), section: rT.RP.WIDGETS }),
                d.push({ text: eF.intl.string(eF.t.chq59f), section: rT.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eF.intl.string(eF.t["7lZ31J"]), section: rT.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, dp.A)(i), section: rT.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, dx.A)(r), section: rT.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e8 } = (0, b.Ay)([...en, j.A.USER_PROFILE_MODAL_V2]),
        e5 = (0, J.pb)({
            layout: "MODAL_V2",
            userId: u.id,
            sourceSessionId: U,
            guildId: ea,
            channelId: y,
            messageId: R,
            roleId: M,
        }),
        e7 = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e8, ...e5, action: rT.pt.SHOW_STYLES_PANEL }), eH());
        }, [e8, e5, eH]),
        e9 = l.useCallback(() => {
            ((0, Q.Wn)({ analyticsLocations: e8, ...e5, action: rT.pt.HIDE_STYLES_PANEL }), ez());
        }, [e8, e5, ez]),
        te = (0, et.Ay)(u.id, ea);
    (0, V.A)(e8, te, rT.R7.MODAL_V2);
    let tt = void 0 !== eU ? eU?.skuId : te?.profileFrame?.skuId,
        tn = (0, _.A)(tt),
        ti = (0, L.A)(tt),
        { profileFrameStyle: tl, profileFrameClassName: tr } = (0, D.A)(tn);
    (0, w.A)({ skuId: te?.profileFrame?.skuId, openedAt: K, context: e5, analyticsLocations: e8 });
    let ts = (0, a.bG)([C.default], () => $.Ay.canUsePremiumProfileCustomization(C.default.getCurrentUser())),
        ta = eb || (el && null != te && ts),
        to = X.Ay.useName(te?.guildId, y, u),
        tu = (0, G.GV)(),
        td = (0, a.bG)([Y.A], () => (null != ea ? Y.A.getGuild(ea) : null)),
        tc = el
            ? null != td
                ? eF.intl.formatToPlainString(eF.t.M7OhOF, { guildName: td.name })
                : eF.intl.string(eF.t.egQPgM)
            : eF.intl.format(eF.t.KRe1Fk, { name: to });
    return (0, i.jsx)(b.f5, {
        value: e8,
        children: (0, i.jsx)(J.of, {
            value: e5,
            openedAt: K,
            fetchStartedAt: te?.fetchStartedAt,
            fetchEndedAt: te?.fetchEndedAt,
            isLoaded: te?.isLoaded,
            children: (0, i.jsx)(eS.Hl, {
                value: eQ,
                children: (0, i.jsx)(eE.N, {
                    value: B,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(le.zr, { [le.QF]: te?.private === !0 }),
                        transitionState: W,
                        "aria-labelledby": tu,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rZ, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(dA.layoutContainer, tr, {
                                        [dA.editingPanelEnabled]: ek,
                                        [dA.editingPanelExpanded]: ek && eB,
                                        [dA.isAnimating]: eW,
                                    }),
                                    style: tl,
                                    children: [
                                        (0, i.jsxs)(dE, {
                                            user: u,
                                            displayProfile: te,
                                            pendingThemeColors: eL,
                                            forceShowPremium: ta,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: le.Oo,
                                                    children: [
                                                        (0, i.jsx)(tz.A, { onClose: er }),
                                                        (0, i.jsx)(m.A, {
                                                            children: (0, i.jsx)(f.H, { id: tu, children: tc }),
                                                        }),
                                                        eZ &&
                                                            (0, i.jsx)(re, {
                                                                buttonRef: eY,
                                                                onClick: e7,
                                                                className: dA.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eX &&
                                                    (0, i.jsx)("div", {
                                                        className: dA.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(l9, {
                                                            innerRef: eK,
                                                            onClick: e7,
                                                            className: dA.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(f.F, {
                                            children: [
                                                ek &&
                                                    eV((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(rt, {
                                                                  className: s()(dA.editingPanel, {
                                                                      [dA.isExpanded]: eB,
                                                                  }),
                                                                  selectedGuildId: eo,
                                                                  originGuildId: I,
                                                                  onSelectGuildId: ed,
                                                                  onClose: e9,
                                                                  collapseButtonRef: eq,
                                                                  isLoading: eu,
                                                                  isEditingDisabled: eg,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e2.A, {
                                                    className: s()(ei, le.A7, dA.profileContentOuter),
                                                    innerClassName: dA.profileContentInner,
                                                    user: u,
                                                    displayProfile: te,
                                                    themeType: ej.d.MODAL_V2,
                                                    pendingThemeColors: eL,
                                                    isPrivate: te?.private === !0,
                                                    forceShowPremium: ta,
                                                    children: [
                                                        (0, i.jsx)(db, { displayProfile: te, pendingBanner: eM }),
                                                        te?.private === !0 && (0, i.jsx)(e0.A, {}),
                                                        !eP && (0, i.jsx)(uP, { className: dA.noticeContainer }),
                                                        e1 &&
                                                            (0, i.jsx)("div", {
                                                                className: dA.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rH, {
                                                                    icon: (0, i.jsx)(h.WarningIcon, {
                                                                        size: "sm",
                                                                        color: p.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eF.intl.string(eF.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != ec
                                                                            ? eF.intl.string(eF.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: ec,
                                                                    actionDisabled: !ek && eu,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: dA.profileCardToastContainer,
                                                            children: (0, i.jsx)(eJ.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rq, {
                                                            showScrim: e3,
                                                            showLoadingSpinner: eu,
                                                            className: dA.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(dC, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    guildId: ea,
                                                                    channelId: y,
                                                                    displayProfile: te,
                                                                    nickname: to,
                                                                    originGuildId: I,
                                                                    hasEntered: W === x.ip.ENTERED,
                                                                    customStatusPrompt: H,
                                                                    onClose: er,
                                                                    onCreateTag: es,
                                                                    avatarDecorationOverride: e_,
                                                                    avatarOverride: ew,
                                                                    bannerOverride: eM,
                                                                    accentColorOverride: eD,
                                                                    profileEffectOverride: eG,
                                                                    profileFrame: tn,
                                                                    fadeInProfileFrame: ti,
                                                                    editingMode: eR,
                                                                    isLoading: eu,
                                                                }),
                                                                (0, i.jsx)(uS, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: te,
                                                                    guildId: ea,
                                                                    channelId: y,
                                                                    items: e4,
                                                                    initialSection: F,
                                                                    onClose: er,
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
                            (0, i.jsx)(r_, { userId: u.id, guildId: ea, className: dA.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function dN(e) {
    return (0, i.jsx)(ns, { children: (0, i.jsx)(dS, { ...e }) });
}
