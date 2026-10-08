n.d(t, { A: () => u1 });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(935462),
    u = n(778712),
    d = n(866323),
    c = n(364522),
    g = n(695366),
    f = n(140735),
    m = n(707554),
    p = n(738188),
    h = n(661531),
    x = n(231723),
    A = n(241524),
    v = n(770178),
    I = n(80682),
    j = n(793574),
    b = n(688810),
    C = n(248284),
    y = n(287809),
    E = n(636537),
    S = n(73153),
    N = n(913122),
    k = n(39418),
    P = n(652215);
async function T() {
    S.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
    try {
        let e = await E.Bo.get({
            url: "/storefront/recommended-items",
            query: { application_ids: [P.FYj], limit: 100 },
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
}
var R = n(938595),
    O = n(859226),
    _ = n(480335),
    L = n(577390),
    w = n(372320),
    D = n(31956),
    M = n(744808),
    G = n(875741),
    U = n(915089),
    F = n(713517),
    W = n(645507),
    B = n(922590),
    V = n(821269),
    H = n(397562),
    z = n(93246),
    Y = n(594832),
    K = n(71393),
    q = n(994500),
    X = n(351906),
    Z = n(562153),
    J = n(474090),
    $ = n(158045),
    Q = n(183555),
    ee = n(47675),
    et = n(321191),
    en = n(591179),
    ei = n(999291),
    el = n(702841),
    er = n(370480),
    es = n(773669),
    ea = n(101928),
    eo = n(837529),
    eu = n(346713),
    ed = n(573648),
    ec = n(429913),
    eg = n(321078),
    ef = n(403362),
    em = n(484509),
    ep = n(487409),
    eh = n(83931),
    ex = n(920601),
    eA = n(903209),
    ev = n(919395),
    eI = n(101058),
    ej = n(696451),
    eb = n(836602),
    eC = n(996988),
    ey = n(207634);
let eE = (0, u.FT)(ey.T[eC.d.MODAL_V2].avatarSize),
    eS = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eN = n(716804),
    ek = n(679492),
    eP = n(554146),
    eT = n(43105),
    eR = n(844222),
    eO = n(947984),
    e_ = n(992526),
    eL = n(643056),
    ew = n(327791),
    eD = n(262),
    eM = n(982240),
    eG = n(131607),
    eU = n(49999),
    eF = n(660183);
function eW(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        u = (0, e_.J)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eL.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        c = (0, ew.A)(),
        g =
            ((t = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [eM.Ay],
                () => (null != t && eM.Ay.hasCatalogFor(t) ? eM.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, ei.Ay)(t)),
            (s = (0, eD.A)(r)),
            n ?? s.length > 0),
        { reducedMotion: f } = l.useContext(eR.C),
        [m, p] = (0, eG.kn)(g && u && d ? [eP.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return m !== eP.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, i.jsx)(eT.A, {
              targetElementRef: o,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eO.U, props: { dataBinding: { on: !0, reducedMotion: f.enabled } } },
              title: eF.intl.string(eF.t["9JoKQb"]),
              body: eF.intl.string(c ? eF.t.p82vky : eF.t.IDh31t),
              onRequestClose: () => p(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: eF.intl.string(eF.t["4P5I8V"]),
                      onClick: function () {
                          (p(eU.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eB = n(718019),
    eV = n(365607),
    eH = n(915614),
    ez = n(744753),
    eY = n(834730);
function eK(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(eY.E, { variant: "text-sm/normal", children: t });
}
var eq = n(361311),
    eX = n(931481),
    eZ = n(439053),
    eJ = n(743987),
    e$ = n(312381),
    eQ = n(501193),
    e0 = n(383448),
    e1 = n(946356),
    e2 = n(394816),
    e3 = n(503026),
    e5 = n(305385),
    e8 = n(109112),
    e9 = n(939249),
    e7 = n(730134),
    e6 = n(169869),
    e4 = n(837057),
    te = n(310419),
    tt = n(889227),
    tn = n(967198),
    ti = n(488995),
    tl = n(576849);
function tr(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, e6.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: tl.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e7.A, { user: new tt.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e8._, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: tl.Hd,
                children: [
                    (0, i.jsxs)(e9.D, {
                        className: tl.OB,
                        onClick: function () {
                            (l?.(),
                                (0, e4.transitionToGlobalDiscovery)({
                                    tab: ti.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: te.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(eY.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(eY.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(eY.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: tl.nk,
                                children: eF.intl.format(eF.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: tl.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function ts(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, Q.NJ)(),
        o = (0, a.bG)([es.default], () => es.default.locale),
        u = (0, a.bG)([tn.A], () => tn.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(tl.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: tl.FI,
                          children: (0, i.jsx)(tr, {
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
var ta = n(403581),
    to = n(240248),
    tu = n(308244),
    td = n(900179),
    tc = n(677295);
function tg(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)(td.A, {
        className: s()(tc.u, t),
        headingVariant: "text-xs/medium",
        headingColor: "text-subtle",
        ...n,
    });
}
var tf = n(81400),
    tm = n(84540),
    tp = n(290386),
    th = n(621466);
n(321073);
var tx = n(775602),
    tA = n(404760);
function tv(e) {
    let { id: t, message: n, type: l } = e,
        r = "error" === l,
        s = r ? g.E : p.WarningIcon;
    return (0, i.jsxs)(eY.E, {
        id: t,
        role: r ? "alert" : void 0,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: tA.VP,
        children: [(0, i.jsx)(s, { size: "xs", color: "currentColor", className: r ? tA.ik : tA.QW }), n],
    });
}
function tI(e) {
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
            className: f,
            wrapperRef: m,
            onBlur: p,
            onKeyDown: h,
        } = e,
        x = l.useRef(null),
        A = l.useId(),
        v = l.useId(),
        I = null == n,
        j = null != c,
        b = null != g && !j,
        C = j ? "error" : b ? "warning" : null,
        y = j ? c : g,
        E = null != C && null != y,
        S = [];
    (I && S.push(A), E && S.push(v));
    let N = S.length > 0 ? S.join(" ") : void 0;
    function k() {
        let { activeElement: e } = x.current?.ownerDocument ?? document;
        ((0, th.vq)(e, HTMLElement) && e.blur(), d());
    }
    let P = (0, i.jsxs)("div", {
        ref: x,
        className: s()(tA.LL, { [tA.JD]: j, [tA.xe]: b }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            I
                ? (0, i.jsx)(eY.E, {
                      id: A,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: tA.qf,
                      children: r,
                  })
                : n,
            (0, i.jsx)(e9.D, {
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
        ref: m,
        className: s()(tA.kL, f),
        onBlur: p,
        onKeyDown: h,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? a
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: tA.VH, children: P }),
                              E && (0, i.jsx)(tv, { id: v, message: y, type: C }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var tj = n(786826);
function tb(e) {
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
            onInputFocus: f,
            onInputKeyDown: m,
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
            ((t = n ? r : l),
            (null != v && t.length > v ? eF.intl.formatToPlainString(eF.t.ICT5S6, { maxLength: v }) : void 0) ?? j);
    return (0, i.jsx)(tI, {
        isEditing: n,
        preview: p,
        placeholder: h,
        editButtonRef: a,
        editButtonAriaLabel: x,
        onStartEditing: o,
        className: C,
        wrapperRef: u,
        onBlur: d,
        onKeyDown: c,
        previewErrorMessage: y,
        previewWarningMessage: b,
        input: (0, i.jsx)(tj.f, {
            editorRef: g,
            label: A,
            hideLabel: !0,
            value: n ? r : l,
            onChange: s,
            onFocus: f,
            onKeyDown: m,
            maxLength: v,
            error: y,
            helperText: b,
            placeholder: h,
            emojiPickerIntention: I,
        }),
    });
}
let ty = [
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
var tE = n(307731);
function tS(e) {
    let t,
        n,
        r,
        s,
        o,
        { displayProfile: u, className: d } = e,
        c = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        g = u?.guildId != null,
        f = u?.guildId ?? null,
        m = $.Ay.canUsePremiumProfileCustomization(c),
        p = (0, tp.U)({ location: "user_profile_modal_edit" }),
        {
            value: h,
            previewValue: x,
            onCommit: A,
        } = ((t = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingBio)),
        (s = n ? u?._guildMemberProfile?.bio : u?.bio),
        (o = u?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? s ?? "",
            previewValue: o,
            onCommit: l.useCallback(
                (e) => {
                    (0, tm.p)({ bio: e.trim(), guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        v = (function (e) {
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
                        c = (0, a.bG)([tx.Ay], () => tx.Ay.useReducedMotion),
                        g = l.useRef(null),
                        f = l.useRef(null),
                        m = l.useRef(null),
                        p = l.useRef(!1),
                        h = l.useRef(!0),
                        x = l.useRef(!1),
                        A = l.useCallback(() => {
                            ((h.current = !1), u(t), s("editing"));
                        }, [t]),
                        v = l.useRef(o);
                    l.useLayoutEffect(() => {
                        v.current = o;
                    });
                    let I = l.useCallback(() => {
                            h.current || ((h.current = !0), n(v.current), s("done"));
                        }, [n]),
                        j = l.useCallback(() => {
                            h.current || ((h.current = !0), s("done"));
                        }, []);
                    (l.useEffect(() => {
                        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
                    }, [r]),
                        l.useEffect(() => {
                            let e = x.current;
                            ((x.current = !1),
                                d &&
                                    (f.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                                    e || m.current?.focus({ preventScroll: !0 })));
                        }, [d, c]));
                    let b = l.useCallback(
                            (e) => {
                                d &&
                                    "Escape" === e.key &&
                                    (e.preventDefault(), e.stopPropagation(), (p.current = !0), j());
                            },
                            [d, j],
                        ),
                        C = l.useCallback(() => {
                            ((p.current = !0), I(), m.current?.blur());
                        }, [I]),
                        y = l.useCallback(() => {
                            ((p.current = !0), j(), m.current?.blur());
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
                        wrapperRef: f,
                        inputRef: m,
                        handleStartEditing: A,
                        handleCommit: I,
                        handleCancel: j,
                        onInputFocus: E,
                        onInputKeyDown: l.useCallback(
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
                s = l.useCallback(
                    (e) =>
                        (function (e, t) {
                            if (t?.contains(e)) return !0;
                            let n = tb(t),
                                i = n?.getAttribute("aria-controls");
                            return null != i && null != e.closest(`#${i}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, th.vq)(e.target) && !s(e.target) && i();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, s, i]);
            let o = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, th.vq)(l) || s(l) || (null == tb(n.current) && i());
                },
                [t, s, i, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: i, ...r, onBlur: o };
        })({ value: h, onCommit: A }),
        I = !(0, to.uJ)(x),
        j = (0, a.bG)([eb.A], () => eb.A.getErrors(f)),
        b = (0, tf.EC)(f),
        C = j.bio?.[0],
        E = b?.bio?.[0],
        S = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * ty.length)), ty[e]);
        }, []),
        N = g ? eF.intl.string(eF.t.yPJ9xr) : S.label();
    return !g || m
        ? (0, i.jsx)(tC, {
              ...v,
              className: d,
              preview: I ? (0, i.jsx)(tu.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eF.intl.string(eF.t.lO3n7a),
              label: eF.intl.string(eF.t["YWo+Zd"]),
              emojiPickerIntention: tE.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: E,
          })
        : I
          ? (0, i.jsx)(tu.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var tN = n(430626);
function tk(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: r } = (0, Q.NJ)(),
        s = n?.bio,
        a = !(0, to.uJ)(s),
        o = n?.guildId != null,
        u = o && $.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eF.intl.string(eF.t.jVai8N) : eF.intl.string(eF.t.ZzAR2Y),
        c = (0, $.TW)(t) ? eF.intl.string(eF.t["5AFxuK"]) : eF.intl.string(eF.t.N6ixy8),
        g = l && u ? { icon: ta.t, tooltip: c } : void 0;
    return (l || a) && (!l || !o || a || u)
        ? (0, i.jsx)(tg, {
              heading: d,
              hideHeading: !l,
              headingIcon: g,
              children: l
                  ? (0, i.jsx)(tS, { displayProfile: n, className: tN.u })
                  : (0, i.jsx)(tu.A, { userBio: s, guildId: r?.guildId, setLineClamp: !1 }),
          })
        : null;
}
var tP = n(700058),
    tT = n(722868),
    tR = n(822775),
    tO = n(982985),
    t_ = n(568111),
    tL = n(34188),
    tw = n(815996),
    tD = n(993401);
function tM(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, b.Ay)(),
        r = l.useCallback(() => {
            (0, tw.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tD.q3, {
        action: "VISIT_SHOP",
        icon: tL.U,
        tooltipText: eF.intl.string(eF.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tG = n(573355),
    tU = n(102951);
function tF(e) {
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
        d = (0, en.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, b.Ay)(),
        g = (0, tT.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, tU.J)({ userId: t.id }),
        h = f.length > 0 || m || p;
    return o === P.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? d
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tO.e, { userId: t.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(tM, {}),
                        (0, i.jsx)(t_.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tR.A, { user: t, guildId: l, onClose: u }),
                        (0, i.jsx)(tM, {}),
                        (0, i.jsx)(t_.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tO.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(t_.Zt, { user: t, guildId: l, viewProfileItem: g }),
                  ],
              })
            : o === P.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tO.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(t_.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === P.eA$.FRIEND || o === P.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tO.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tG.Ef, { user: t, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(t_.Zt, { user: t, guildId: l, viewProfileItem: g }),
                      ],
                  })
                : o === P.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tO.e, { userId: t.id, onClose: tP.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tG.ES, {
                                user: t,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(t_.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tG.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tO.l, { userId: t.id, onClose: tP.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(t_.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    });
}
var tW = n(463156),
    tB = n(866665),
    tV = n(28863),
    tH = n(509434),
    tz = n(307301),
    tY = n(666860),
    tK = n(874490),
    tq = n(968309),
    tX = n(174459),
    tZ = n(486020),
    tJ = n(123917),
    t$ = n(783419);
let tQ = "User Profile Modal V2";
function t0(e) {
    let t = ed.A.get(e);
    ((0, tq.A)({ platformType: t.type, location: tQ }),
        tX.default.track(P.HAw.ACCOUNT_LINK_STEP, {
            previous_step: tQ,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t1() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: t0, stackingBehavior: "stack" });
}
function t2(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, er.An)(r[t$.pK.CREATED_AT], n),
        a = ed.A.get((0, tK.ML)(t.type));
    return (0, i.jsx)(t5, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tB.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(eY.E, { variant: "text-sm/normal", className: tl.GW, children: t.name }),
                  })
                : (0, i.jsx)(tV.Anchor, {
                      href: e,
                      className: tl.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eF.intl.string(eF.t.q5jLJB)}`
                              : `${t.name}, ${eF.intl.string(eF.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tY.zV)(P.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, tJ.h)({ href: e, trusted: a?.type !== P.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: tl.vi,
                          children: [
                              (0, i.jsx)(tB.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(eY.E, {
                                      variant: "text-sm/normal",
                                      className: tl.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tH.I, { size: "xs", color: "currentColor", className: tl.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === P.fg2.REDDIT
                ? (0, e6.xE)(r)
                : t.type === P.fg2.STEAM
                  ? (0, e6.dy)(r)
                  : t.type === P.fg2.BLUESKY || t.type === P.fg2.MASTODON || t.type === P.fg2.TWITTER
                    ? (0, e6.ED)(r)
                    : t.type === P.fg2.PAYPAL
                      ? (0, e6.gZ)(r)
                      : t.type === P.fg2.EBAY
                        ? (0, e6.ub)(r)
                        : t.type === P.fg2.TIKTOK
                          ? (0, e6.HU)(r)
                          : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function t3(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = tZ.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(t5, {
        renderAccountName: function () {
            return (0, i.jsx)(tB.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(eY.E, {
                    variant: "text-sm/normal",
                    className: tl.GW,
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
function t5(e) {
    let {
        renderAccountName: t,
        renderMetadata: n,
        platformName: l,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, i.jsxs)("li", {
        className: tl.FI,
        children: [
            (0, i.jsx)(tB.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: tl.k_,
                    children: (0, i.jsx)("img", {
                        alt: eF.intl.formatToPlainString(eF.t.rtm15P, { name: l }),
                        className: s()(tl.tV, o ? tl.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: tl.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(eY.E, {
                                    variant: "text-xs/normal",
                                    children: eF.intl.format(eF.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: tl.yu, children: n() }),
                ],
            }),
        ],
    });
}
function t8(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        u = (0, a.bG)([es.default], () => es.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let d = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(tl.kL, o),
        children: [
            d &&
                (0, i.jsxs)("ul", {
                    className: tl.V,
                    children: [
                        t.map((e) => (0, i.jsx)(t2, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t3, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e9.D, {
                    className: tl.qG,
                    onClick: t1,
                    children: [
                        (0, i.jsx)(tz.j, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(eY.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eF.intl.string(eF.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var t9 = n(193885),
    t7 = n(408278),
    t6 = n(461797),
    t4 = n(23722);
let ne = { id: "default" },
    nt = l.createContext(null),
    nn = l.createContext(null);
function ni(e) {
    let { children: t } = e,
        [n, r] = l.useState(ne),
        [s, o] = l.useState(null),
        [u] = l.useState(t6.B$),
        d = l.useRef(u),
        c = (0, t4.A)((e) => {
            r(e);
        }),
        g = l.useCallback(() => {
            r(ne);
        }, []),
        f = l.useCallback(() => d.current, []),
        m = (0, a.bG)([y.default], () => $.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        p = m ? ne : n,
        h = !m && s?.id === "premiumTryItOut",
        x = l.useCallback(() => {
            o(p);
        }, [p]),
        A = l.useCallback((e) => {
            d.current = e;
        }, []),
        v = l.useMemo(
            () => ({
                selectedPanel: p,
                readyPanel: s,
                handlePanelTransitionComplete: x,
                navigate: c,
                goBack: g,
                getCurrentPreset: f,
                cachePreset: A,
            }),
            [p, s, x, c, g, f, A],
        );
    return (0, i.jsx)(nn.Provider, { value: h, children: (0, i.jsx)(nt.Provider, { value: v, children: t }) });
}
function nl() {
    let e = l.useContext(nt);
    if (null == e)
        throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
    return e;
}
function nr() {
    let e = l.useContext(nn);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function ns() {
    let { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: n, navigate: i, goBack: l } = nl();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: l,
    };
}
var na = n(194261),
    no = n(789645),
    nu = n(297264),
    nd = n(508770),
    nc = n(821609),
    ng = n(39623),
    nf = n(890377),
    nm = n(517461),
    np = n(248778),
    nh = n(465794),
    nx = n(252732),
    nA = n(487233),
    nv = n(120386),
    nI = n(317097),
    nj = n(602853),
    nb = n(922016),
    nC = n(508274),
    ny = n(654107),
    nE = n(930349);
function nS(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nj.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, ny.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, et.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: et.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nI.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tm.p)({ accentColor: e }), []);
    return (0, i.jsx)(nb.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nC.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nE.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eF.intl.string(eF.t["/X3fkf"]),
                accessibleValue: (0, nI.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nI.Hl)(c) } }),
            }),
    });
}
var nN = n(913563),
    nk = n(898985),
    nP = n(763052);
function nT(e) {
    if (null == e) return eF.intl.string(eF.t["3Xph0/"]);
    let t = eF.intl.string((0, nN.A)(e.fontId)),
        n = eF.intl.string(nk.J[e.effectId] ?? nP.default.OpWJ3f),
        i = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eF.intl.formatToPlainString(eF.t.Igwax6, { fontName: t, effectName: n, colors: i });
}
function nR(e, t) {
    let n = null === e,
        i = void 0 === e;
    return n || (i && null == t) ? eF.intl.string(eF.t["3Xph0/"]) : i ? eF.intl.string(eF.t.keN7ib) : e.description;
}
var nO = n(450373),
    n_ = n(317139);
function nL(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: n_.o, style: { backgroundColor: t } });
}
function nw(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { src: t, alt: "", className: n_._ });
}
function nD(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l } = e,
        r = (0, nj.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        s = t?.primaryColor ?? (0, nI.LX)(r),
        { hex: a } = (0, nO.A)(s),
        o = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != o ? (0, i.jsx)(nw, { src: o }) : (0, i.jsx)(nL, { backgroundColor: a });
}
function nM(e) {
    let { displayProfile: t, bannerChange: n, ...l } = e;
    return (0, i.jsx)(nE.A, {
        ...l,
        accessibleLabel: eF.intl.string(eF.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, i.jsx)(nD, { displayProfile: t, bannerChange: n, shouldAnimate: e }),
    });
}
var nG = n(569059);
function nU(e) {
    let { userId: t, guildId: n, disabled: r, errorMessageId: s } = e,
        a = l.useRef(null),
        {
            displayProfile: o,
            pendingBanner: u,
            bannerChange: d,
            accessibleValue: c,
            currentProfileBanner: g,
            hasMainProfileFallback: f,
        } = (function (e, t) {
            let n = (0, ei.Ay)(e, t),
                {
                    pendingBanner: i,
                    mainProfileBanner: l,
                    currentProfileBanner: r,
                } = (0, el.cf)(
                    [eb.A, y.default, et.A],
                    () => ({
                        pendingBanner: eb.A.getPendingChanges(t ?? void 0).pendingBanner,
                        mainProfileBanner: y.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != t ? et.A.getGuildMemberProfile(e, t)?.banner : et.A.getUserProfile(e)?.banner,
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
                accessibleValue: nR(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, ev.Ac)(u, g)
            ? {
                  onClick: () => (0, nx.rM)(null, g, (e) => (0, tm.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eF.intl.string(f ? eF.t.jHlJNS : eF.t.tT9n7D),
              }
            : void 0,
        p = (0, nG.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nM, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: d,
        accessibleValue: c,
        variant: "square",
        affordance: m,
        onClick: p,
        "aria-haspopup": "dialog",
        disabled: r,
        errorMessageId: s,
    });
}
var nF = n(259065),
    nW = n(922301),
    nB = n(660184),
    nV = n(523312);
let nH = "heading-xl/semibold";
function nz(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nV.MC, { [nV.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(eY.E, {
                      variant: nH,
                      children: (0, i.jsx)(nB.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nW.G.ANIMATED : nW.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(eY.E, { variant: nH, className: nV.kr, children: t }),
    });
}
function nY(e) {
    let { displayName: t, displayNameStyles: n, shouldAlwaysAnimate: l = !1, ...r } = e;
    return (0, i.jsx)(nE.A, {
        ...r,
        accessibleLabel: eF.intl.string(eF.t.vKBV4A),
        renderPreview: (e) => (0, i.jsx)(nz, { displayNameStyles: n, displayName: t, shouldAnimate: l || e }),
    });
}
function nK(e) {
    let { user: t, guildId: n, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([ej.Ay], () => (null != n ? (ej.Ay.getMember(n, t.id)?.nick ?? null) : null)),
        g = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.globalName ?? null),
        f = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName),
        m = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: h,
            pendingDisplayNameStyles: x,
        } = (0, ev.B0)(t, n ?? void 0),
        A = d ? h : p,
        v = void 0 !== x,
        I = null === x,
        j = d && null != p,
        C = (0, ev.lw)({ pendingValue: x, userValue: p, guildValue: h, guildId: n ?? void 0 }),
        E = (0, ev.lw)({ pendingValue: d ? m : f, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = v ? null != x : null != A,
        N =
            null != C && S
                ? {
                      onClick: () => (0, tm.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(j ? eF.t.en3ogK : eF.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nF.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nY, {
        affordance: (!I && (v || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        accessibleValue: nT(C),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: C,
        disabled: r,
    });
}
var nq = n(450232),
    nX = n(89851);
function nZ(e) {
    let { heading: t, children: n, disabled: l = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, i.jsxs)("div", {
        className: nX.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(nX.Pf, { [nX.r9]: l }),
                children: [
                    (0, i.jsx)(nu.D, {
                        className: nX.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    r && (0, i.jsx)(nq.A, { className: nX.IX, size: "xs", color: "inherit", disabled: l }),
                    null != a && (0, i.jsx)("span", { className: nX.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nJ(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nX.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.E, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(eY.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var n$ = n(374654),
    nQ = n(366010),
    n0 = n(736653),
    n1 = n(674658),
    n2 = n(617061),
    n3 = n(203632),
    n5 = n(536572);
let n8 = new Set(),
    n9 = 0;
var n7 = n(993408),
    n6 = n(841702),
    n4 = n(515718),
    ie = n(195292);
function it(e) {
    "" !== e.thumbnailPreviewSrc && (0, n4.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var ii = n(599752),
    il = n(249360);
let ir =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    is =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function ia(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, n0.Ay)(),
        d = (0, nQ.M)(u) ? ir : is,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n6.Ay)({ stalePurchasesOK: !0 }),
                s = l.useMemo(() => (0, n7.wo)(r, i), [r, i]),
                a = (0, ie.A)({ enabled: t, isInteracting: n, items: s, preload: it });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n9 += 1), n8.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: ii.ti,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: ii.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(ii.yY, { [il.O]: g }),
                        children: (0, i.jsx)(_.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n3.HL.FromStart,
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
function io(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([K.A], () => (null != n ? K.A.getGuild(n) : null)),
        g = (0, ev.N2)({ user: t }),
        f = (0, ev.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, ev.nZ)(n ?? void 0),
        p = void 0 !== m,
        h = null === m || (!p && null == f),
        x = d && null != g,
        A = (0, ev.lw)({ pendingValue: m, userValue: g, guildValue: f, guildId: n ?? void 0 }),
        { product: v } = (0, n1.q)(A?.skuId),
        I = p ? null != m : null != f,
        j =
            null != A && I
                ? {
                      onClick: () => (0, tm.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(x ? eF.t["SQy/Po"] : eF.t.uMuafO),
                  }
                : void 0,
        C = l.useCallback(() => {
            (0, n2.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nE.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : j,
        variant: s,
        onClick: C,
        accessibleLabel: eF.intl.string(eF.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eF.intl.string(eF.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eF.intl.string(i ? eF.t["1M4m8w"] : eF.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, n5.VG)(v), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ia, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var iu = n(163697),
    id = n(515727),
    ic = n(746002);
function ig(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, ic.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: ic.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, n4.NN)(n).catch(() => {});
        });
}
var im = n(715196);
function ip(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function ih(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, n0.Ay)(),
        d = (0, nQ.M)(u) ? ir : is,
        c = (0, w.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n6.Ay)({ stalePurchasesOK: !0 }),
                s = l.useMemo(() => (0, n7.MG)(r, i), [r, i]);
            return (0, ie.A)({ enabled: t, isInteracting: n, items: s, preload: ig });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, iu.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(im.hm, h, { [il.O]: f }),
                    style: p,
                    children: (0, i.jsx)(M.A, { frame: m, filterLayer: ip, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(im.ti, { [im.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: im.QQ, draggable: !1 }),
            }),
        ],
    });
}
function ix(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        u = null != n,
        d = (0, a.bG)([K.A], () => (null != n ? K.A.getGuild(n) : null)),
        c = (0, ev.Xf)({ user: t }),
        g = (0, ev.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: f } = (0, ev.Tu)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        h = u && null != c,
        x = (0, ev.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, n1.q)(x?.skuId),
        v = m ? null != f : null != g,
        I =
            null != x && v
                ? {
                      onClick: () => (0, tm.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eF.intl.string(h ? eF.t.j6hZyM : eF.t.nQBruk),
                  }
                : void 0,
        j = l.useCallback(() => {
            (0, id.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nE.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : I,
        variant: "square",
        onClick: j,
        accessibleLabel: eF.intl.string(eF.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eF.intl.string(eF.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eF.intl.string(i ? eF.t.yFeGB5 : eF.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, n5.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ih, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var iA = n(684732),
    iv = n(498596),
    iI = n(871524);
function ij(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nI.Hl)(t)}, ${(0, nI.Hl)(n)})`;
    return (0, i.jsx)("div", { className: iI.D7, style: { background: r }, children: l });
}
function ib(e) {
    let { color: t } = e,
        n = (0, nI.Hl)(t),
        l = (0, nI.bJ)(t, 0xffffff) < iv.Tr.NonText;
    return (0, i.jsx)("div", {
        className: iI.OS,
        children: (0, i.jsx)("div", { className: s()(iI.Hy, { [iI.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iC(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e9.D, {
        ...a,
        innerRef: s ?? o,
        className: iI.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(ib, { color: t }),
    });
}
function iy(e) {
    let {
        color: t,
        ariaLabel: n,
        suggestedColors: l,
        disabled: r,
        isOpen: s,
        onRequestOpen: a,
        onRequestClose: o,
        onSelect: u,
        buttonRef: d,
    } = e;
    return (0, i.jsx)(nb.Y, {
        targetElementRef: d,
        shouldShow: s,
        onRequestOpen: a,
        onRequestClose: o,
        renderPopout: (e) => (0, i.jsx)(nC.VN, { ...e, value: t, onChange: u, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...s } = e;
            return (0, i.jsx)(iC, { color: t, onClick: l, disabled: r, buttonRef: d, "aria-label": n, ...s });
        },
    });
}
function iE(e) {
    let {
            primaryColor: t,
            secondaryColor: n,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: s,
            suggestedColors: a,
            disabled: o = !1,
            deleteButton: u,
            variant: d = "square",
            initialOpenPopout: c,
        } = e,
        [g, f] = l.useState(null),
        m = l.useRef(null),
        p = l.useRef(null),
        h = (0, nI.Hl)(t),
        x = (0, nI.Hl)(n),
        A = eF.intl.formatToPlainString(eF.t.FquTfm, { colorLabel: h }),
        v = eF.intl.formatToPlainString(eF.t.xOnm4z, { colorLabel: x });
    l.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? m : p;
            (e.current?.focus(), f(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let I =
        null != u
            ? {
                  ...u,
                  onClick: () => {
                      (u.onClick(), m.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsx)(nE.Y, {
        variant: d,
        disabled: o,
        deleteButton: I,
        children: (0, i.jsxs)(ij, {
            primaryColor: t,
            secondaryColor: n,
            children: [
                (0, i.jsx)(iy, {
                    color: t,
                    ariaLabel: A,
                    suggestedColors: a,
                    onSelect: r,
                    disabled: o,
                    isOpen: "theme-primary" === g,
                    onRequestOpen: () => f("theme-primary"),
                    onRequestClose: () => f(null),
                    buttonRef: m,
                }),
                (0, i.jsx)(iy, {
                    color: n,
                    ariaLabel: v,
                    suggestedColors: a,
                    onSelect: s,
                    disabled: o,
                    isOpen: "theme-secondary" === g,
                    onRequestOpen: () => f("theme-secondary"),
                    onRequestClose: () => f(null),
                    buttonRef: p,
                }),
            ],
        }),
    });
}
function iS(e) {
    let { user: t, guildId: n, disabled: r = !1 } = e,
        s = (0, ei.Ay)(t.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: u,
            pendingAvatar: d,
        } = (0, a.cf)([eb.A, et.A], () => {
            let e = eb.A.getPendingChanges(n ?? void 0),
                i = et.A.getUserProfile(t.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (et.A.getGuildMemberProfile(t.id, n)?.themeColors ?? null) : i,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== u ? u : o,
        g = (0, eI.V7)({ userId: t.id, image: d }),
        { primaryColor: f, secondaryColor: m } = (0, ea.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: u,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, nj.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, ny.rh)(x, p, !1),
        v = l.useCallback(
            (e) => {
                (0, tm.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        I =
            null != n && (0, iA.l)(u, o)
                ? {
                      onClick: () => (0, tm.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eF.intl.string(eF.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(iE, {
              primaryColor: f,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && v([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && v([f, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: I,
          });
}
var iN = n(629985);
function ik(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(iN.k, { [iN.V]: n }), children: t }) });
}
var iP = n(689175),
    iT = n(424290);
function iR(e) {
    let { children: t } = e;
    return (0, i.jsx)(iP.zC, { className: iT.X, children: (0, i.jsx)("div", { className: iT.Q, children: t }) });
}
var iO = n(732280),
    i_ = n(811611),
    iL = n(976860),
    iw = n(38145);
function iD() {
    return l.useCallback(() => {
        ((0, iL.pX)(P.BVt.NITRO_HOME), (0, iw.M)());
    }, []);
}
var iM = n(724651),
    iG = n(511484),
    iU = n(202541);
function iF(e) {
    let t = (0, a.bG)([y.default], () => $.Ay.isPremium(y.default.getCurrentUser())),
        n = (0, iM.O)();
    return t
        ? eF.intl.string(eF.t.AfRWI8)
        : (0, iG.U9)(n, iU.pe.TIER_2) && n?.discount.amount != null
          ? eF.intl.formatToPlainString(eF.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iW = n(155053);
function iB() {
    let e = (0, iO.V)();
    return e?.subscriptionTrial?.skuId === iU.pe.TIER_2 ? e : null;
}
function iV() {
    let e = iF(eF.intl.string(eF.t.pj0XBN));
    return (0, i.jsx)(nh.A, { subscriptionTier: iU.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iH(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iD(),
        a = (0, $.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, i_.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iW.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iW.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eF.intl.string(eF.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(nd.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(eY.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eF.intl.format(eF.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(nh.A, {
                subscriptionTier: iU.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(eY.E, { variant: "text-xs/normal", color: "text-muted", className: iW.u8, children: o }),
        ],
    });
}
function iz() {
    let e = iB();
    return null == e ? (0, i.jsx)(iV, {}) : (0, i.jsx)(iH, { trialOffer: e });
}
var iY = n(55619),
    iK = n(848717);
function iq() {
    return (0, i.jsxs)("div", {
        className: iK.k,
        children: [
            (0, i.jsx)(eY.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eF.intl.string(eF.t.JFY17v),
            }),
            (0, i.jsx)(nc.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eF.intl.string(eF.t.R9GHya),
                onClick: function () {
                    return iY.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iX = n(342866),
    iZ = n(968475);
function iJ(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iX.A, {
        ...n,
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        accessibleValue: (0, iX.$)(s, t.avatar),
        imageInteractingClassName: null == r ? iZ.$T : void 0,
    });
}
function i$(e) {
    let { userId: t, ...n } = e,
        l = (0, ei.Ay)(t),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [eb.A, et.A],
            () => ({
                pendingBanner: eb.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eb.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: et.A.getUserProfile(t)?.banner,
            }),
            [t],
        ),
        u = void 0 !== s ? s : r;
    return (0, i.jsx)(nM, {
        ...n,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
        accessibleValue: nR(u, o),
    });
}
function iQ(e) {
    let { user: t, ...n } = e,
        {
            pendingDisplayNameStyles: l,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([eb.A], () => ({
            pendingDisplayNameStyles: eb.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eb.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eb.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([y.default], () => ({ globalName: y.default.getCurrentUser()?.globalName ?? null })).globalName,
        u = void 0 !== r ? r : l,
        d = (0, ev.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(nY, {
        ...n,
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        accessibleValue: nT(u),
        shouldAlwaysAnimate: null == r,
    });
}
var i0 = n(207803);
function i1(e) {
    let t = (0, ei.Ay)(e.id),
        {
            tryItOutThemeColors: n,
            tryItOutAvatar: i,
            pendingAvatar: l,
        } = (0, a.cf)([eb.A], () => ({
            tryItOutThemeColors: eb.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, eI.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, ea.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function i2(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = i1(t),
        u = (0, nj.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, ny.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, i0.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iE, {
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
function i3(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: l } = e,
        { primaryColor: r, secondaryColor: s } = i1(t);
    if (null == r || null == s) return null;
    let a = eF.intl.formatToPlainString(eF.t.FquTfm, { colorLabel: (0, nI.Hl)(r) }),
        o = eF.intl.formatToPlainString(eF.t.xOnm4z, { colorLabel: (0, nI.Hl)(s) });
    return (0, i.jsx)(nE.Y, {
        variant: "full-height-bar",
        children: (0, i.jsxs)(ij, {
            primaryColor: r,
            secondaryColor: s,
            children: [
                (0, i.jsx)(iC, { color: r, onClick: n, "aria-label": a }),
                (0, i.jsx)(iC, { color: s, onClick: l, "aria-label": o }),
            ],
        }),
    });
}
var i5 = n(847081);
function i8(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = ns(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, b.Ay)();
            return l.useCallback(() => {
                (0, nF.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, nG._)({ isPremiumTryItOut: !0, returnRef: s }),
        f = (0, nG.P)({ isPremiumTryItOut: !0, returnRef: a }),
        m = "edit" === n;
    return (
        l.useEffect(() => {
            if (m && !o.current) {
                switch (u) {
                    case "display-name-styles":
                        c();
                        break;
                    case "banner":
                        f();
                        break;
                    case "avatar":
                        g();
                        break;
                    default:
                        return;
                }
                o.current = !0;
            }
        }, [u, m, c, g, f]),
        (0, i.jsxs)("div", {
            className: i5.T,
            children: [
                (0, i.jsx)(nZ, {
                    heading: eF.intl.string(eF.t.NEzEws),
                    children: (0, i.jsx)(iQ, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nZ, {
                    heading: eF.intl.string(eF.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(i2, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(i3, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(nZ, {
                    heading: eF.intl.string(eF.t.Vgdusv),
                    children: (0, i.jsx)(i$, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nZ, {
                    heading: eF.intl.string(eF.t.Dt3ZUr),
                    children: (0, i.jsx)(iJ, {
                        user: t,
                        buttonRef: s,
                        onClick: m ? g : () => d({ id: "premiumTryItOut", initialTarget: "avatar" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
            ],
        })
    );
}
var i9 = n(847374),
    i7 = n(111159),
    i6 = n(548118),
    i4 = n(711014),
    le = n(649998),
    lt = n(561392),
    ln = n(499957),
    li = n(15626),
    ll = n(715022),
    lr = n(44482),
    ls = n(470791);
function la(e) {
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
            renderListItem: m,
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
            let { reducedMotion: e } = l.useContext(eR.C),
                {
                    isOpen: t,
                    setIsOpen: n,
                    refs: i,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, lt.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, ln.DL)(o, {
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
        { setFloating: C } = A,
        y = l.useContext(li._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        P = l.useRef(null),
        [T, R] = l.useState(null),
        O = null != T ? (0, ll.ZN)(N, T) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, ll.fI)(e.value, [n])), [n, t]),
        D = l.useCallback(() => {
            d || x(!h);
        }, [d, x, h]),
        M = l.useCallback(
            (e) => {
                h && 0 === e.button && e.preventDefault();
            },
            [h],
        ),
        G = l.useCallback(() => {
            (x(!1), k.current?.focus());
        }, [x]),
        U = l.useCallback(
            (e) => {
                if (!P.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (h && null != T) {
                        let e = t[T];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    h && x(!1);
                }
            },
            [h, T, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (d) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [d, r, G],
        ),
        { activeIndex: W, handleKeyDown: B } = (0, le.l)(!0, t),
        V = l.useRef(null);
    l.useEffect(() => {
        let e = W !== V.current;
        ((V.current = W), null != W && e && (R(W), h || ((_.current = !0), x(!0))));
    }, [W, h, x]);
    let H = l.useCallback(
            (e) => {
                if (d) return;
                let n = t.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let t = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !h || e.altKey)) {
                            h || x(!0);
                            return;
                        }
                        R((e) => (null === e ? 0 : Math.min(e + t, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let i = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && h)) {
                            if (null != T) {
                                let e = t[T];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!h) return void x(!0);
                        R((e) => (null === e ? 0 : Math.max(e - i, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !h)) return void x(!0);
                        if (null == T || T > n - 1) return;
                        {
                            let e = t[T];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        (R(0), h || ((_.current = !0), x(!0)));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        (R(n - 1), h || ((_.current = !0), x(!0)));
                        break;
                    case "Tab":
                        if (h && null != T) {
                            let e = t[T];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        ((L.current = !0), x(!1));
                        break;
                    case "Escape":
                        h && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [d, h, t, T, F, G, r, x, B],
        ),
        z = Math.max(
            t.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = l.useRef(!1);
    l.useEffect(() => {
        c || !h || Y.current
            ? h || ((Y.current = !1), R(null), (_.current = !1))
            : ((Y.current = !0), _.current || R(t.length > 0 ? z : null), (_.current = !1), k.current?.focus());
    }, [c, h, z, t.length]);
    let K = {
        id: S,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": h ? N : void 0,
        "aria-expanded": h,
        "aria-activedescendant": O,
        "aria-disabled": !!d || void 0,
        "aria-labelledby": null != a ? `${E} ${S}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: D,
        onMouseDown: M,
        onKeyDown: H,
        onBlur: U,
    };
    return (0, i.jsxs)("div", {
        ref: (e) => {
            ((P.current = e), A.setReference(e));
        },
        className: o,
        ...I(),
        children: [
            null != a && (0, i.jsx)(f.A, { tag: "label", id: E, htmlFor: S, children: a }),
            p({ buttonRef: k, selectButtonProps: K }),
            !d &&
                h &&
                (0, i.jsx)("div", {
                    ref: C,
                    className: s()(ls.S_, u),
                    ...j(),
                    style: { ...v, ...b },
                    children: (0, i.jsx)(le.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: T,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(lr.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var lo = n(216384);
let lu = "MAIN_PROFILE";
function ld(e) {
    let { guild: t } = e;
    return (0, i.jsx)(i6.Ay, { className: lo.$f, guild: t, size: i6.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lc(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: lo.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: lo.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: lo.qL,
                children: [
                    (0, i.jsx)(eY.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(eY.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            lineClamp: 1,
                            children: l,
                        }),
                ],
            }),
        ],
    });
}
function lg(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e9.D, {
        innerRef: r,
        className: s()(lo.L5, { [lo.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(eY.E, {
                variant: "text-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: lo.v9,
                children: n,
            }),
            (0, i.jsx)(i9.a, {
                className: lo.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lf(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([i4.Ay], () => i4.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([K.A], () => K.A.getGuilds()),
        c = (0, a.bG)([tn.A], () => {
            let e = tn.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ej.Ay, i4.Ay], () => {
            let e = {};
            for (let t of i4.Ay.getFlattenedGuildIds()) {
                let n = ej.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: lu,
                    label: eF.intl.string(eF.t["2p07FR"]),
                    value: lu,
                    leading: (0, i.jsx)(i7.p, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(ld, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(ef.Vq),
                r = null != t ? d[t] : null;
            return null == r
                ? [e, ...l]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, i.jsx)(ld, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? lu,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === lu ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(la, {
        className: lo.kL,
        label: eF.intl.string(eF.t.rki38K),
        listboxClassName: lo.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lc, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(lg, { leading: p.value === lu ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lm = n(462887),
    lp = n(765178),
    lh = n(469054),
    lx = n(601298);
function lA() {
    let { preset: e, setPreset: t } = (function () {
            let { getCurrentPreset: e, cachePreset: t } = nl(),
                [n, i] = l.useState(e);
            return {
                preset: n,
                setPreset: l.useCallback(
                    (e) => {
                        (t(e), i(e));
                    },
                    [t],
                ),
            };
        })(),
        n = (0, n0.Ay)(),
        i = (0, lm.q)(n),
        r = l.useCallback(
            (e) => {
                let t = (0, t6.Wt)(e);
                (0, i0.w5)({
                    banner: (0, lx.X)({
                        assetOrigin: lh.E.NEW_ASSET,
                        imageUri: t.getBannerSrc(!1),
                        staticImageUri: t.getBannerSrc(!0),
                        description: t.getBannerAltText(),
                        originalAsset: void 0,
                    }),
                    themeColors: i ? t.themeColors.light : t.themeColors.dark,
                    displayNameStyles: t.displayNameStyles,
                });
            },
            [i],
        );
    return (
        l.useEffect(() => {
            eb.A.hasTryItOutChanges() || r(e);
        }, [r, e]),
        l.useCallback(() => {
            let n = (0, t6.B$)(e),
                i = (0, t6.Wt)(n);
            (tX.default.track(P.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
                t(n),
                r(n),
                lp.O.announce(eF.intl.formatToPlainString(eF.t.M2Hj9s, { presetName: i.getName() })));
        }, [e, t, r])
    );
}
var lv = n(288490);
let lI = "profile-editing-nameplate-error",
    lj = "profile-editing-avatar-error",
    lb = "profile-editing-avatar-decoration-error",
    lC = "profile-editing-banner-error",
    ly = "profile-editing-display-name-style-error";
function lE(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lv.D0, t),
        children: (0, i.jsx)("div", { className: lv.ZN, children: (0, i.jsx)(na.LockIcon, { size: "xs" }) }),
    });
}
function lS() {
    let [e, t] = (0, nm.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lv.X6,
              children: [
                  (0, i.jsx)(eY.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eF.intl.string(eF.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e9.D, {
                      "aria-label": eF.intl.string(eF.t.rSe9ra),
                      className: lv.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(no.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lN() {
    let e = iD(),
        t = iF(eF.intl.string(eF.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lv.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lv.tm,
                children: [
                    (0, i.jsx)(nu.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eF.intl.string(eF.t.bO0TOe),
                    }),
                    (0, i.jsx)(eY.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eF.intl.format(eF.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(nh.A, { subscriptionTier: iU.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lE, { className: lv.nd }),
        ],
    });
}
function lk() {
    return (0, i.jsx)(eY.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: lv.BJ,
        "aria-hidden": !0,
        children: eF.intl.format(eF.t.kYv9DM, {
            nitroIconHook: () => (0, i.jsx)(ta.t, { size: "xxs", color: "currentColor", className: lv.qp }),
        }),
    });
}
function lP(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(nZ, {
        heading: eF.intl.string(eF.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(n$.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lI : void 0 }),
            (0, i.jsx)(nJ, { id: lI, message: r }),
        ],
    });
}
function lT(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(nZ, {
        heading: eF.intl.string(eF.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nA.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lj : void 0 }),
            (0, i.jsx)(nv.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lb : void 0 }),
            (0, i.jsx)(nJ, { id: lj, message: (0, nx.d3)(r) }),
            (0, i.jsx)(nJ, { id: lb, message: s }),
        ],
    });
}
function lR(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        s = (0, np.u)("UserProfileModalV2EditingPanel"),
        [a, o] = (0, eG.kn)(s && !l ? [eP.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        u = a === eP.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, i.jsxs)(nZ, {
        heading: eF.intl.string(eF.t.NEzEws),
        disabled: l,
        showNitroIcon: !0,
        badge: u
            ? (0, i.jsx)("div", {
                  className: lv.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(nd.E, { type: "new", variant: "brand" }),
              })
            : void 0,
        children: [
            (0, i.jsx)(nK, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? ly : void 0,
                onOpen: u ? () => o(eU.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(nJ, { id: ly, message: r }),
        ],
    });
}
function lO(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(nZ, {
        heading: eF.intl.string(eF.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iS, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nU, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lC : void 0 }),
            (0, i.jsx)(nJ, { id: lC, message: (0, nx.d3)(s) }),
        ],
    });
}
function l_(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(nZ, {
        heading: eF.intl.string(eF.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nS, { user: t, disabled: n }),
    });
}
function lL(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(nZ, {
        heading: eF.intl.string(eF.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(io, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(ix, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lw = "premium-try-it-out-description";
function lD(e) {
    let { user: t } = e,
        n = iD(),
        { navigate: l } = ns();
    return (
        lA(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lw,
            className: lv.DX,
            children: [
                (0, i.jsx)(lE, { className: lv.x$ }),
                (0, i.jsxs)("div", {
                    className: lv.sb,
                    children: [
                        (0, i.jsx)(eY.E, {
                            id: lw,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eF.intl.format(eF.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(nc.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: ng.EyeIcon,
                            text: eF.intl.string(eF.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(i8, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lM(e) {
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
        g = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        f = (0, t4.A)(c),
        m = null != l,
        p = $.Ay.canUsePremiumProfileCustomization(t),
        h = m && !p,
        x = !p && !m,
        A = m && !p && !g,
        v = s || o,
        I = (0, a.bG)([eb.A], () => eb.A.getErrors(l)),
        j = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        b = I.avatar?.[0],
        C = I.avatar_decoration_sku_id?.[0],
        y = I.banner?.[0],
        E = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0];
    return (0, i.jsxs)(ik, {
        hasGradientBackground: A,
        children: [
            (0, i.jsxs)("div", {
                className: lv.wx,
                children: [
                    (0, i.jsx)(tB.m, {
                        text: eF.intl.string(eF.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t7.K, {
                            buttonRef: u,
                            "aria-label": eF.intl.string(eF.t["l/A351"]),
                            icon: nf.V,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lf, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(iq, {})
                : (0, i.jsx)(iR, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(lS, {}) : (0, i.jsx)(lN, {})),
                              p && (0, i.jsx)(lk, {}),
                              (0, i.jsx)(lP, { user: t, guildId: l, disabled: v || h, errorMessage: j }),
                              (0, i.jsx)(lT, {
                                  user: t,
                                  guildId: l,
                                  disabled: v || h,
                                  avatarErrorMessage: b,
                                  avatarDecorationErrorMessage: C,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lR, { user: t, guildId: l, disabled: v || h, errorMessage: E }),
                                            (0, i.jsx)(lO, {
                                                user: t,
                                                guildId: l,
                                                disabled: v || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: y,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(l_, { user: t, disabled: v || h }),
                              (0, i.jsx)(lL, { user: t, guildId: l, disabled: v || h }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lD, { user: t }), (0, i.jsx)(iz, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lG = n(202091),
    lU = n(110654);
function lF(e) {
    return null;
}
function lW(e) {
    let { activeSlide: t, direction: n, onTransitionComplete: r, children: a } = e,
        o = new Map(a.map((e) => [e.props.id, e]));
    if (!o.has(t)) throw Error("EditingPanelSlides requires its active slide to be available");
    let [u, c] = l.useState(t),
        [g, f] = l.useState(!1),
        m = "forwards" === n ? 1 : -1,
        p = (0, d.p)(
            t,
            {
                offset: 0,
                initial: { offset: 0 },
                from: { offset: 1 },
                enter: { offset: 0 },
                leave: { offset: -1 },
                config: { duration: 150 },
                onStart: () => f(!0),
                onRest: (e, n) => {
                    let { item: i } = n;
                    e.finished && i === t && (f(!1), i !== u && (c(t), r()));
                },
            },
            "respect-motion-settings",
        ),
        h = g || t !== u;
    return (0, i.jsx)("div", {
        className: s()(lU.kL, h && lU.ez),
        children: (0, i.jsx)("div", {
            className: lU.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lG.animated.div,
                          {
                              className: lU.M6,
                              style: h
                                  ? { transform: e.offset.to((e) => `translate3d(${e * m * 100}%, 0, 0)`) }
                                  : void 0,
                              inert: h || t !== u,
                              "aria-hidden": h || t !== u,
                              children: r.props.children,
                          },
                          l,
                      );
            }),
        }),
    });
}
var lB = n(926321),
    lV = n(477155),
    lH = n(561243),
    lz = n(206697),
    lY = n(280406);
let lK = "shuffle-options-a11y-description";
function lq(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(nc.$, {
                icon: lB.DiceIcon,
                text: eF.intl.string(eF.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lK,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: lK, children: eF.intl.string(eF.t.bBRdiB) }),
        ],
    });
}
function lX(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = lA(),
        s = iB();
    return (0, i.jsxs)(ik, {
        children: [
            (0, i.jsxs)("div", {
                className: lY.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lY.FS,
                        children: (0, i.jsx)(tB.m, {
                            text: eF.intl.string(eF.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(t7.K, {
                                buttonRef: l,
                                "aria-label": eF.intl.string(eF.t["4IYwrw"]),
                                icon: lV.r,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(nu.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: lY.R_,
                        children: eF.intl.string(eF.t.PxUx8e),
                    }),
                    (0, i.jsx)(eY.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: lY.Ij,
                        children: eF.intl.string(eF.t.X0ir7L),
                    }),
                    (0, i.jsx)(lq, { className: lY.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iR, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i8, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iH, {
                                trialOffer: s,
                                onSubscribeClick: lz.t,
                                onSubscribeSuccess: lz.T,
                                onSubscribeClose: lH.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lZ = n(199016);
let lJ = "user-profile-editing-panel",
    l$ = "profile-modal-editing-panel-heading";
function lQ(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tB.m, {
        text: eF.intl.string(eF.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e9.D, {
            innerRef: l,
            "aria-label": eF.intl.string(eF.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lJ,
            className: s()(lZ.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t9.V, { size: "sm", color: "currentColor" }),
        }),
    });
}
function l0(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tB.m, {
            text: eF.intl.string(eF.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(t7.K, {
                buttonRef: l,
                "aria-label": eF.intl.string(eF.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": lJ,
                icon: t9.V,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function l1(e) {
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
        p = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: v } = ns(),
        I = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => I.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)("aside", {
              id: lJ,
              "aria-labelledby": l$,
              className: s()(lZ.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lZ.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: l$, children: eF.intl.string(eF.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lW, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lF, {
                                  id: "default",
                                  children: (0, i.jsx)(lM, {
                                      panelId: lJ,
                                      user: p,
                                      selectedGuildId: t,
                                      originGuildId: n,
                                      isLoading: o,
                                      isEditingDisabled: u,
                                      collapseButtonRef: g,
                                      onClosePanel: d,
                                      onSelectGuildId: r,
                                  }),
                              }),
                              (0, i.jsx)(lF, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lX, { user: p, onBack: v, backButtonRef: I }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var l2 = n(425763),
    l3 = n(447453),
    l5 = n(280450),
    l8 = n(783420),
    l9 = n(874402);
function l7() {
    let e = nr(),
        { goBack: t } = ns(),
        n = iF(eF.intl.string(eF.t.pj0XBN));
    return (0, i.jsx)(l8.A, {
        subscriptionTier: iU.pe.TIER_2,
        onClick: lz.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lz.T)(), (0, lH.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(l9.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eF.intl.string(eF.t.X0ir7L),
                a11yAnnounceOnShow: eF.intl.string(eF.t.X0ir7L),
                a11yAnnounceOnHide: eF.intl.string(eF.t.ZcyFYa),
                secondaryAction: { text: eF.intl.string(eF.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: ta.t, variant: "expressive" },
            });
        },
    });
}
var l6 = n(803306),
    l4 = n(631670),
    re = n(682618),
    rt = n(38405);
async function rn(e) {
    let { displayOrder: t, hiddenBadges: n } = e,
        i = { ...(null != t ? { display_order: t } : {}), ...(null != n ? { hidden_badges: n } : {}) };
    if (0 === Object.keys(i).length) return !0;
    try {
        return (await E.Bo.patch({ url: P.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0);
    } catch (e) {
        return (rt.A.captureException(e), !1);
    }
}
var ri = n(234e3),
    rl = n(159001),
    rr = n(933725),
    rs = n(625494),
    ra = n(56348),
    ro = n(646976),
    ru = n(289173),
    rd = n(958805),
    rc = n(61881),
    rg = n(624826),
    rf = n(384377),
    rm = n(518477);
function rp(e) {
    let { guildId: t } = e,
        { trackUserProfileEditSaved: n } = (0, Q.NJ)(),
        [r, s] = l.useState(!1),
        [o, u] = l.useState(!1),
        {
            widgetsToSave: d,
            changedWidgets: c,
            removedWidgets: g,
            hasUnsavedWidgets: f,
            canSaveWidgets: m,
        } = (function () {
            let e = (0, a.yK)([rc.A], () => rc.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rc.A], () => rc.A.getChangedWidgets()),
                n = (0, a.yK)([rc.A], () => rc.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rc.A], () => ({
                    hasUnsavedWidgets: rc.A.hasUnsavedChanges(),
                    canSaveWidgets: rc.A.canSaveChanges(),
                }));
            return { widgetsToSave: e, changedWidgets: t, removedWidgets: n, hasUnsavedWidgets: i, canSaveWidgets: l };
        })(),
        p = (0, en.X)("UserProfileModalV2SaveBar"),
        {
            hasUnsavedProfileChanges: h,
            canSubmitProfileChanges: x,
            hasBadgeChangesToSave: A,
        } = (0, a.cf)([eb.A], () => ({
            hasUnsavedProfileChanges: eb.A.hasUnsavedChanges(),
            canSubmitProfileChanges: eb.A.canSubmit(),
            hasBadgeChangesToSave: (0, ri.gz)(eb.A.getPendingChanges()),
        })),
        v = p && h,
        I = f || v || A,
        j = !(f && !m) && (!p || x),
        b = l.useCallback(() => {
            (rd.A.clearPendingWidgets(), p ? (0, i0.XQ)() : A && (0, ri.Jp)());
        }, [p, A]),
        C = l.useCallback(async () => {
            if (p && !eb.A.canSubmit()) return;
            u(!0);
            let e = !0;
            if (A) {
                let t = eb.A.getPendingChanges(),
                    n = await rn({
                        displayOrder: t.pendingBadgeDisplayOrder,
                        hiddenBadges: t.pendingBadgeHiddenBadges,
                    });
                if (n) {
                    let e = y.default.getCurrentUser()?.id;
                    (null != e && (await (0, l6.eO)(e).catch(() => {})), await (0, re.RS)(), (0, ri.Jp)());
                }
                e = n;
            }
            if (v)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, ra.Sk)(t),
                            i = (0, ra.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, l4._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rg.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l4.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, i0.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, i0.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, ra.C5)(n),
                            l = (0, ra.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, rl.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rg.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l4.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, i0.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, i0.RE)());
                        }
                    }
                    let n = (0, ra.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, rr.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, l4.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    for (let e of (await rd.A.savePendingWidgets(d), c)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        ((0, ru.fu)(e)
                            ? ((t.gameIds = e.games.map((e) => e.gameId)),
                              (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                              (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)))
                            : e instanceof ro.kM &&
                              ((t.gameIds = e.clips.map((e) => e.gameId)),
                              (t.tags = e.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString()))),
                            n(t));
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, l4.x8)() : (0, rf.XA)(rm.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
        }, [p, v, A, f, d, c, g, n, t]);
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
                rs._.subscribe(P.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rs._.unsubscribe(P.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(l9.$, {
            preventsPopoutDismiss: !0,
            isVisible: I,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eF.intl.string(eF.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eF.intl.string(eF.t["0Y/qkL"]),
            secondaryAction: { text: eF.intl.string(eF.t.yBZMsQ), onClick: b, disabled: !I || o },
            primaryAction: { text: eF.intl.string(eF.t["R3BPH+"]), onClick: C, loading: o, disabled: !j || !I },
        })
    );
}
var rh = n(485745),
    rx = n(893757);
function rA() {
    let e = !(0, en.X)("useEditingFooterState"),
        t = (0, l2.VU)(),
        n = (0, rh.A)(e),
        i = nr();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function rv(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([l5.default], () => l5.default.getId() === t),
        u = rA(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rx.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(l3.S, { className: rx.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(l7, {})
                        : "save" === d
                          ? (0, i.jsx)(rp, { guildId: n })
                          : null,
          })
        : null;
}
var rI = n(347805),
    rj = n(34011),
    rb = n(629403),
    rC = n(612630),
    ry = n(61426);
function rE(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rC.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await rb.A.updateNote(t, e);
                    } catch {
                        p(eF.intl.string(eF.t.F8FvUy));
                    }
                }
            },
            [t, c, o],
        ),
        A = d && null == h,
        v = l.useRef(null),
        I = l.useRef(!1);
    if (
        (l.useEffect(() => {
            !r || u || d || I.current || ((I.current = !0), v.current?.focus({ preventScroll: !0 }));
        }, [r, u, d]),
        u)
    )
        return null;
    let j =
        null != h && h.length > 0
            ? (0, i.jsx)(eY.E, { variant: "text-sm/normal", color: "text-default", className: ry.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tA.kL, n),
        children: (0, i.jsx)(rj.w, {
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
            label: eF.intl.string(eF.t.PbMNh2),
            placeholder: A ? eF.intl.string(eF.t["WLKx/9"]) : eF.intl.string(eF.t.VBhOe2),
            maxLength: P.T7x,
            disabled: A,
            error: m,
        }),
    });
}
var rS = n(793222);
function rN(e) {
    let { userId: t } = e,
        n = (0, eN.g)(),
        { trackUserProfileAction: l } = (0, Q.NJ)(),
        r = (0, en.X)("UserProfileModalV2NotesSection"),
        s = r ? rE : rI.A;
    return (0, i.jsx)(tg, {
        heading: eF.intl.string(eF.t["mQKv+v"]),
        scrollTargetId: rm.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rS.N : rS.w,
            autoFocus: n === rm.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rk = n(123292),
    rP = n(667242),
    rT = n(655214);
function rR(e) {
    let { icon: t, message: n, actionLabel: r, onAction: a, actionDisabled: o, type: u, autoFocus: d } = e,
        c = l.useRef(null);
    return (
        l.useEffect(() => {
            d && c.current?.focus();
        }, [d]),
        (0, i.jsx)("div", {
            className: rP.kL,
            children: (0, i.jsxs)("div", {
                className: s()(rT.oR, rP.Qs),
                "data-type": u,
                children: [
                    (0, i.jsx)("div", { className: rP.Kk, children: t }),
                    (0, i.jsx)(eY.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != a &&
                        (0, i.jsx)("div", {
                            className: rP.hP,
                            children: (0, i.jsx)(rk.Q, {
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
var rO = n(346055),
    r_ = n(289873),
    rL = n(615019);
function rw(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && lp.O.announce(eF.intl.string(eF.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rO.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rL.f, t && rL.z),
                    children: n && (0, i.jsx)(r_.y, { type: r_.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rD = n(568602);
function rM(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rc.A, eb.A], () => rc.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                rs._.subscribe(P.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rs._.unsubscribe(P.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rD.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rG = n(761508),
    rU = n(695904),
    rF = n(116331),
    rW = n(713348),
    rB = n(827258),
    rV = n(517164),
    rH = n(114212),
    rz = n(290863),
    rY = n(461213),
    rK = n(975571),
    rq = n(146655),
    rX = n(489379),
    rZ = n(402857),
    rJ = n(353394),
    r$ = n(842241),
    rQ = n(986712),
    r0 = n(435558),
    r1 = n(534890),
    r2 = n(308528),
    r3 = n(780964),
    r5 = n(766075),
    r8 = n(92795);
let r9 = [
        () => eF.intl.string(eF.t.madJdE),
        () => eF.intl.string(eF.t.NYmfoP),
        () => eF.intl.string(eF.t.R2PaCg),
        () => eF.intl.string(eF.t.laSR8h),
        () => eF.intl.string(eF.t.DnsJE8),
    ],
    r7 = [
        () => eF.intl.string(eF.t.nFSbeE),
        () => eF.intl.string(eF.t.gTcxOz),
        () => eF.intl.string(eF.t["8T0wYj"]),
        () => eF.intl.string(eF.t.BIHl1g),
        () => eF.intl.string(eF.t["jhBm0+"]),
    ],
    r6 = [
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
    r4 = [
        P.fg2.STEAM,
        P.fg2.PLAYSTATION,
        P.fg2.XBOX,
        P.fg2.TWITCH,
        P.fg2.BATTLENET,
        P.fg2.LEAGUE_OF_LEGENDS,
        P.fg2.EPIC_GAMES,
        P.fg2.RIOT_GAMES,
        P.fg2.ROBLOX,
        P.fg2.SPOTIFY,
        P.fg2.YOUTUBE,
        P.fg2.CRUNCHYROLL,
        P.fg2.BUNGIE,
    ];
function se(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: r8.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: r8.FS,
                children: [
                    (0, i.jsx)(nu.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(eY.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function st() {
    let e = eF.intl.string(eF.t.RnD2yZ),
        [t] = l.useState(() => ((0, r0.sample)(r9) ?? r9[0])());
    return (0, i.jsx)(se, { heading: e, bodyText: t });
}
function sn() {
    let e = eF.intl.string(eF.t.bFgqYJ),
        [t] = l.useState(() => ((0, r0.sample)(r7) ?? r7[0])());
    return (0, i.jsx)(se, { heading: e, bodyText: t });
}
function si(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = Z.Ay.getName(n, r, t),
        o = eF.intl.formatToPlainString(eF.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, r0.sample)(r6) ?? r6[0])(a)),
        d = l.useCallback(() => {
            (r2.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(se, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: r8.v0,
            children: (0, i.jsx)(tD.FD, { icon: r1.ChatIcon, text: eF.intl.string(eF.t["g33r/P"]), onClick: d }),
        }),
    });
}
function sl() {
    let e = (0, n0.Ay)();
    return (0, i.jsx)("div", {
        className: r8.HU,
        children: r4.map((t, n) => {
            let l = ed.A.get(t);
            if (null == l) return null;
            let r = (0, nQ.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: r8.gj }, n);
        }),
    });
}
function sr(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, r5.openUserSettings)(r3.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, r5.openUserSettings)(r3.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(se, {
        heading: eF.intl.string(eF.t.VB6LWY),
        bodyText: eF.intl.string(eF.t.KpjsU9),
        children: [
            (0, i.jsx)(sl, {}),
            (0, i.jsxs)("div", {
                className: r8.v0,
                children: [
                    (0, i.jsx)(tD.FD, { text: eF.intl.string(eF.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tD.FD, { text: eF.intl.string(eF.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var ss = n(131058);
function sa(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(ss.gN, n), fade: !0, ...r, children: t });
}
var so = n(587763);
function su(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: o } = e,
        { live: u, recent: d, stream: c } = (0, rq.A)(t.id),
        { voiceChannel: g, voiceActivity: f } = (0, rX.A)({ userId: t.id, guildId: r }),
        m = (0, a.bG)([rV.A], () => rV.A.isFetchingUserOutbox(t.id)),
        p = t.id === n.id,
        h = (0, a.bG)([rY.A, rz.A], () => {
            let e = p ? rY.A.getStatus() : rz.A.getStatus(t.id);
            return e === P.clD.OFFLINE || e === P.clD.INVISIBLE;
        }),
        x = u.length > 0 || null != c,
        A = l?.private !== !0 && null == c && null == f && null != g,
        v = !h && (x || A),
        I = d.length > 0;
    return v || I || !m
        ? v || I || m
            ? (0, i.jsxs)(sa, {
                  className: so.XG,
                  fade: !0,
                  children: [
                      v
                          ? (0, i.jsx)(tg, {
                                heading: eF.intl.string(eF.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: so.kR,
                                    children: [
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r$.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    stream: c,
                                                    onClose: o,
                                                }),
                                            }),
                                        u.map((e, l) =>
                                            (0, i.jsx)(
                                                "li",
                                                {
                                                    children: (0, i.jsx)(rZ.A, {
                                                        user: t,
                                                        currentUser: n,
                                                        activity: e,
                                                        onClose: o,
                                                    }),
                                                },
                                                `live-${l}`,
                                            ),
                                        ),
                                        A &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(rQ.A, {
                                                    user: t,
                                                    currentUser: n,
                                                    voiceChannel: g,
                                                    onClose: o,
                                                }),
                                            }),
                                    ],
                                }),
                            })
                          : null,
                      I
                          ? (0, i.jsx)(tg, {
                                heading: eF.intl.string(eF.t.jzgEoL),
                                introText: p
                                    ? eF.intl.format(eF.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tV.Anchor,
                                                  {
                                                      href: rK.A.getArticleURL(P.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rm.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: so.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(rJ.A, { user: t, entry: e, onClose: o }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : p
              ? (0, i.jsx)(sr, { onClose: o })
              : (0, i.jsx)(si, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: o })
        : (0, i.jsx)("div", {
              className: so.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: so.kr,
                          children: [
                              (0, i.jsx)(rH.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(rH.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sd = n(163126),
    sc = n(913453),
    sg = n(229187),
    sf = n(402860),
    sm = n(503062),
    sp = n(393213);
function sh(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, Q.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sc.A)(t),
        g = (0, sd.A)();
    return (
        l.useEffect(() => {
            (0, sg.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sa, {
            className: sp.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sp.D$,
                                  children: [
                                      (0, i.jsx)(rH.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(rH.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(st, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sm.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sf.openUserProfileModal)({
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
var sx = n(398590),
    sA = n(345942),
    sv = n(51943);
function sI(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, Q.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sc.A)(t);
    return (0, i.jsx)(sa, {
        className: sp.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sp.Y7,
                              children: [
                                  (0, i.jsx)(rH.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(rH.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sv.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sA.u)(r.id), n(), (0, sx.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sn, {}),
    });
}
var sj = n(885574),
    sb = n(277984),
    sC = n(840387),
    sy = n(201718),
    sE = n(615405),
    sS = n(633075),
    sN = n(373842),
    sk = n(600761),
    sP = n(667049);
function sT(e) {
    let t = (0, ep.A)(e),
        n = nr();
    return t && !n;
}
var sR = n(540185),
    sO = n(192308),
    s_ = n(37537),
    sL = n(210598),
    sw = n(735321),
    sD = n(465318);
function sM() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = sD.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eG.kn)(e && t ? [eP.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eP.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function sG(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: r } = (0, Q.NJ)();
    return n
        ? (0, i.jsx)(eT.A, {
              targetElementRef: t,
              badge: "beta",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/6eb69edbb7097ad438eaec0f50efb2316dc02df984de7b7423253f599c3e23ce.svg",
              },
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              gradientColor: "nitro-pink",
              title: eF.intl.string(eF.t.KKGxNt),
              body: eF.intl.string(eF.t["IS+QTV"]),
              onRequestClose: () => l(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: eF.intl.string(eF.t.RCy7Px),
                      icon: ta.t,
                      onClick: function () {
                          let e = (0, sL.g0)();
                          ((0, sw.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, rf.XA)(rm.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var sU = n(410453);
function sF(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, Q.NJ)(),
        a = l.useCallback(() => {
            n && r(eU.i.TAKE_ACTION);
            let e = (0, sL.g0)();
            ((0, sw.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, rf.XA)(rm.jM.WIDGET_ADDED));
        }, [s, n, r]);
    return (0, i.jsx)(nc.$, {
        icon: ta.t,
        text: eF.intl.string(eF.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function sW(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, Q.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = sM(),
        c = (function () {
            let e = (0, el.bG)([y.default], () => y.default.getCurrentUser()?.id),
                t = (0, sP.A)(e),
                { enabled: n, showCreateEntrypoint: i } = sD.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === sR.x.PERSONAL);
            return n && i && !l;
        })(),
        g = (0, s_.c)("UserProfileWidgetEditingHeader"),
        f = l.useCallback(() => {
            (u && d(eU.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, sO.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("515293"), n.e("487697"), n.e("911581")]).then(
                            n.bind(n, 51820),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r, u, d]);
    return (0, i.jsxs)("div", {
        className: s()(sU.w, t),
        children: [
            (0, i.jsx)(eY.E, {
                className: sU.D,
                variant: g ? "text-sm/semibold" : "text-xs/semibold",
                color: "text-subtle",
                children: eF.intl.string(eF.t.OYlggR),
            }),
            c ? (0, i.jsx)(sF, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(nc.$, {
                icon: tz.j,
                text: eF.intl.string(eF.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: f,
                buttonRef: a,
            }),
            (0, i.jsx)(sG, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var sB = n(192),
    sV = n(704824),
    sH = n(382483),
    sz = n(385113),
    sY = n(334074),
    sK = n(657718),
    sq = n(478016),
    sX = n(58216);
function sZ(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, Q.NJ)(),
        a = l.useMemo(() => new sS.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, sw.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rf.XA)(rm.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sX.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sX.A.Cta, {
            showSuggestedForYou: !0,
            heading: eF.intl.format(eF.t.OIzLCy, { applicationName: n.name }),
            content: eF.intl.format(eF.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tB.m, {
                        text: eF.intl.string(eF.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sK.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: no.P,
                            "aria-label": eF.intl.string(eF.t.WAI6xu),
                            onClick: () => {
                                r(eU.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tB.m, {
                        text: eF.intl.string(eF.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sK.S, {
                            variant: "primary",
                            size: "sm",
                            icon: sq.U,
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
function sJ() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([sz.A], () => sz.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, sH.Wq)();
        }, []);
        let t = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
            n = (0, ec.A)(e),
            { tokens: i, fetched: r } = (0, sV.j)(e),
            s = (0, sP.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sS.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, sY.hj)({
                applications: u,
                dismissibleContent: eP.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: sY.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(sZ, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var s$ = n(675816),
    sQ = n(575593),
    s0 = n(44120),
    s1 = n(75678),
    s2 = n(87719),
    s3 = n(317560),
    s5 = n(99161),
    s8 = n(661492);
let s9 = { sentGifts: {} };
function s7(e, t) {
    return `${e}:${t}`;
}
class s6 extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((s9 = e), this.cleanupExpiredGifts());
    }
    getState() {
        return s9;
    }
    hasSentGift(e, t) {
        let n = s7(e, t),
            i = s9.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s7(e, t),
            i = s9.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(s9.sentGifts)) new Date(n.expiresAt) < e && delete s9.sentGifts[t];
    }
}
let s4 = new s6(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = s7(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        s9.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var ae = n(146423),
    at = n(590180),
    an = n(753704),
    ai = n(113265),
    al = n(152472),
    ar = n(471505),
    as = n(376932);
function aa(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function ao(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l5.default], () => l5.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ar.G)({ userId: o, sku: n, location: l, onError: r }),
        f = am();
    return (0, i.jsx)("div", {
        className: as.U,
        style: aa(t),
        children: (0, i.jsx)(an._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: f,
            ...s,
        }),
    });
}
function au(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l5.default], () => l5.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, al.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = am();
    return (0, i.jsx)("div", {
        className: as.U,
        style: aa(t),
        children: (0, i.jsx)(an._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: f,
            ...s,
        }),
    });
}
function ad(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l5.default], () => l5.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, al.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = am();
    return (0, i.jsx)("div", {
        className: as.U,
        style: aa(t),
        children: (0, i.jsx)(an._, {
            skuId: n.id,
            productName: n.name,
            size: t.wishlistButtonSize,
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            onClick: g,
            tooltipConfig: f,
            ...s,
        }),
    });
}
function ac(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l5.default], () => l5.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, ai.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, s8.q)(f),
        h = m && !u,
        x = !p || h,
        A = am(p && h ? eF.intl.string(eF.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: as.U,
        style: aa(t),
        children: (0, i.jsx)(an._, {
            skuId: f.skuId,
            productName: f.name,
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
function ag(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([at.A], () => at.A.getProduct(t.id));
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ao, { sku: t, isVisuallyHidden: !n, ...l });
        case P.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(au, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(ac, { product: r, isVisuallyHidden: !n, ...l });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(ad, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function af(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(ag, { location: t, ...n });
}
function am(e) {
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
var ap = n(460442),
    ah = n(662349),
    ax = n(479026),
    aA = n(636374),
    av = n(699976),
    aI = n(181554),
    aj = n(880465);
let ab = av.Z.SIZE_133;
function aC(e) {
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
            skuPreviewStyle: f,
            skuPreviewHoverStyle: m,
            skuAssetHoverClassName: p,
            isHoveringOrFocusing: h,
            setIsHoveringOrFocusing: x,
            onDetailsClick: A,
            onPurchaseClick: v,
            wishlistId: I,
            isItemOwned: j,
            cardBackdrop: b,
            isNew: C,
            onClick: y,
        } = e,
        E = l.useRef(null),
        S = l.useRef(x);
    (l.useEffect(() => {
        S.current = x;
    }, [x]),
        l.useEffect(() => {
            let e = E.current;
            if (null != e)
                return (
                    e.addEventListener("focusin", t),
                    () => {
                        e.removeEventListener("focusin", t);
                    }
                );
            function t() {
                S.current(!1);
            }
        }, []));
    let { trackUserProfileWishlistAction: N } = (0, Q.NJ)(),
        k = l.useCallback(() => {
            (y?.(),
                null != I &&
                    (N({
                        wishlistId: I,
                        action: rm.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, I, N, y]),
        P = l.useCallback(() => {
            (y?.(),
                null != I &&
                    (N({
                        wishlistId: I,
                        action: rm.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    v()));
        }, [v, r.sku, I, N, y]),
        T = l.useCallback(() => {
            ((0, rf.XA)(rm.jM.SOMETHING_WENT_WRONG), lp.O.announce(eF.intl.string(eF.t.F8FvUy)));
        }, []),
        R = null != g ? (0, i.jsx)("div", { ref: E, className: aI.BU, children: g }) : null,
        {
            onBodyClick: O,
            onOverlayClick: _,
            showOverlayButton: L,
            routesToGift: w,
            label: D,
            icon: M,
        } = (0, aA.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: k, onPurchaseClick: P }),
        G = h && L;
    return (0, i.jsxs)("div", {
        className: aI.kL,
        children: [
            (0, i.jsxs)(ae.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: ab,
                cardStyle: s()(aI.Nr, d),
                skuPreviewStyle: s()(aI.ev, { [aI.go]: j && !h }, f, G ? m : void 0),
                skuAssetClassName: G ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: O,
                "aria-label":
                    ((t = r.sku),
                    (n = w ? (0, s8.T)(t) : eF.intl.formatToPlainString(eF.t.ZBB4Ty, { productName: (0, s8.T)(t) })),
                    !0 === C ? eF.intl.formatToPlainString(eF.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === C && (0, i.jsx)(rB.A, { className: aI.Pf }),
                    b,
                    L && (0, i.jsx)(ah.A, { spec: ab, onClick: _, isHoveringOrFocusing: h, label: D, icon: M }),
                    j && (0, i.jsx)(ap.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != I &&
                        (0, i.jsx)(af, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: ab,
                            onError: T,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function ay(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, s3.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iU.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, s5.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iU.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aC, {
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
function aE(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, ax.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iU.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, s0.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iU.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === sQ.R.AVATAR_DECORATION || f === sQ.R.PROFILE_FRAME;
    return (0, i.jsx)(aC, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [aI.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function aS(e) {
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
            if (n) return void (0, s2.x)(iw.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, s1.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iU.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aC, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aj.MO,
        skuAssetHoverClassName: aj.iR,
        analyticsLocations: a,
        ...u,
    });
}
function aN(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, b.Ay)(
            ...(s ?? []),
            t.sku?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([s4], () => s4.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== P.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ay, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: m,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(aE, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: m,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(aS, {
                item: t,
                analyticsLocations: u,
                isHoveringOrFocusing: c,
                setIsHoveringOrFocusing: g,
                currentUser: d,
                isItemOwned: m,
                wishlistOwner: n,
                wishlistId: r,
                ...o,
            });
        default:
            return null;
    }
}
var ak = n(788593),
    aP = n(943793),
    aT = n(314531),
    aR = n(182636),
    aO = n(998556);
function a_(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, s$.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        u = (0, l2.VU)(),
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
                                  className: aO.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aR.u, {
                                      widget: e,
                                      user: t,
                                      allowEditing: !1,
                                      disableInteraction: !0,
                                  }),
                              });
                          }
                          if ("GAME_COVER" === l && r?.gameName != null) {
                              let { imageSrc: e, gameName: l, getWidth: s } = r,
                                  a = s?.() ?? 90;
                              return (0, i.jsx)("div", {
                                  style: { width: a },
                                  children: (0, i.jsx)(ak.A, {
                                      className: aO.XJ,
                                      imageSrc: e,
                                      gameName: l,
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
                                  className: aO.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(aP.A, {
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
                                  className: aO.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aT.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aO.Xm,
                                  children: (0, i.jsx)(aN, {
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
    let { x: f, y: m } = c.current ?? { x: 0, y: 0 },
        p = s.x - f - 60 * !!u,
        h = s.y - m;
    return (0, i.jsx)("div", { className: aO.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var aL = n(915725);
n(839272);
let aw = (0, n(945810).mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var aD = n(96173),
    aM = n(661439),
    aG = n(90165),
    aU = n(788259),
    aF = n(269507);
function aW(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: aF.ZW,
        "aria-label": eF.intl.string(eF.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === sR.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(aU.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function aB(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, aD.A)();
    return (0, i.jsx)(aW, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function aV(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, aD.A)(),
        d = (function (e) {
            let t = (0, a.bG)([sz.A], () => sz.A.getFeaturedApplicationIds()),
                n = l.useMemo(() => {
                    let n = new Set(t);
                    return e
                        .filter((e) => e instanceof sS.R)
                        .map((e) => e.applicationId)
                        .filter((e) => n.has(e));
                }, [t, e]),
                i = (0, ec.A)(n),
                r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
                { tokens: s } = (0, sV.j)(r);
            l.useEffect(() => {
                (0, aM.X)();
            }, []);
            let o = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
                u = (0, a.yK)([aG.A], () => o.map((e) => (null != e ? aG.A.getGameDuration(e) : 0))),
                d = (0, a.yK)([aG.A], () => o.map((e) => (null != e ? aG.A.getLastPlayedDateTime(e) : null)));
            return l.useMemo(() => {
                let e = new Set(s.map((e) => e.application.id)),
                    t = [];
                for (let i = 0; i < n.length; i++)
                    t.push({
                        applicationId: n[i],
                        isConnected: e.has(r[i]),
                        totalPlayDuration: u[i] ?? 0,
                        lastPlayedAt: d[i] ?? null,
                    });
                return t;
            }, [n, r, d, s, u]);
        })(u),
        c = (function (e) {
            let t,
                {
                    addableWidgets: n,
                    applicationAffinityData: i,
                    hasClips: l,
                    hasPremium: r,
                    maxWidgetOptions: s,
                    promotedWidgetTypes: a,
                } = e,
                o = [],
                u = new Set();
            function d(e) {
                u.has(e.getUniqueKey()) || (o.push(e), u.add(e.getUniqueKey()));
            }
            function c(e) {
                let t = n.find((t) => t.type === e);
                null != t && d(t);
            }
            function g(e) {
                let t = n.find((t) => (0, sS.E)(t, e));
                null != t && d(t);
            }
            return (
                a.forEach(c),
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
                    })).forEach(g),
                l && c(sR.x.CLIPS_GALLERY),
                r && c(sR.x.PERSONAL),
                c(sR.x.FAVORITE_GAMES),
                c(sR.x.PLAYED_GAMES),
                g("1346069614634864772"),
                c(sR.x.CURRENT_GAMES),
                c(sR.x.WANT_TO_PLAY_GAMES),
                g("1323482066758930452"),
                o.slice(0, s)
            );
        })({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([aL.Ay], () => aL.Ay.hasClips()),
            hasPremium: (0, a.bG)([y.default], () =>
                $.Ay.isPremium(y.default.getCurrentUser(), iU.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [sR.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, sO.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("515293"), n.e("487697"), n.e("911581")]).then(
                            n.bind(n, 51820),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(aW, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(nc.$, { text: eF.intl.string(eF.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function aH(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, Q.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([et.A], () => et.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = sM(!u),
        g = d || (0, sL.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return aw.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: aF.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: aF.FS,
                    children: [
                        (0, i.jsx)(nu.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: eF.intl.string(eF.t["oqalC+"]),
                        }),
                        (0, i.jsx)(eY.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? eF.intl.string(eF.t["+W59o5"]) : eF.intl.string(eF.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            f
                                ? (0, i.jsx)(aV, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(aB, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(sG, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var az = n(366209);
function aY() {
    return (0, i.jsxs)("div", {
        className: az.mJ,
        children: [
            (0, i.jsx)(sj.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(eY.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eF.intl.string(eF.t["7blcz6"]),
            }),
        ],
    });
}
function aK(e) {
    let { user: t, guildId: n, channelId: r } = e,
        s = (0, sP.A)(t.id),
        o = sT(t.id),
        u = (function () {
            let [e, t] = (0, a.yK)([sE.A], () => [sE.A.ipCountryCode, sE.A.ipCountryCodeRequest]),
                n = (0, sC.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sb.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        d = 0 === s.length && o,
        c = l.useMemo(() => s.filter(ru.fu), [s]),
        g = l.useMemo(() => s.filter((e) => e instanceof sS.R), [s]);
    function f() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(sW, { className: az.cG }), u && (0, i.jsx)(aY, {}), (0, i.jsx)(sJ, {})],
                    }),
                s.map((e, l) =>
                    (0, i.jsx)(
                        aR.u,
                        { widget: e, user: t, guildId: n, channelId: r, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return ((0, sN.Y)(o, c),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ec.A)(n);
        let { data: i, refetch: r } = (0, sy.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, g),
    d)
        ? (0, i.jsx)(aH, { userId: t.id })
        : o
          ? (0, i.jsx)(sB.D, { children: f() })
          : f();
}
function aq(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, sk.i)({ containerRef: d });
    let c = ((t = o.id), (n = (0, a.bG)([l5.default], () => l5.default.getId() === t)), (r = rA()), n && null != r);
    return (0, i.jsxs)(sa, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(az.XG, { [az.az]: c }),
        fade: !0,
        children: [(0, i.jsx)(a_, { scrollerRef: d }), (0, i.jsx)(aK, { user: o, ...u })],
    });
}
var aX = n(132500),
    aZ = n(777480),
    aJ = n(825484),
    a$ = n(952270),
    aQ = n(444927),
    a0 = n(895360),
    a1 = n(267102),
    a2 = n(285373),
    a3 = n(721932),
    a5 = n(832163),
    a8 = n(501838),
    a9 = n(44724),
    a7 = n(808247),
    a6 = n(673843),
    a4 = n(855052),
    oe = n(639935),
    ot = n(249203),
    on = n(535089),
    oi = n(107563),
    ol = n(840411),
    or = n(666810),
    os = n(419731),
    oa = n(451395),
    oo = n(823016),
    ou = n(100741);
function od(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oo.r)();
    return (0, i.jsx)(oa.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eF.intl.formatToPlainString(eF.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: ou.C,
        dropBeforeClassName: ou.A,
        dropAfterClassName: ou.Ze,
        draggingClassName: ou.Id,
        children: (0, i.jsx)("div", { className: ou.An, children: s }),
    });
}
let oc = l.memo(function (e) {
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
        } = e,
        { registerDragHandleRef: f } = (0, oo.r)(),
        m = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(oa.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: ou.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, i.jsx)(aN, {
                    item: t,
                    wishlistOwner: r,
                    guildId: s,
                    wishlistId: o,
                    isDragging: u,
                    dragHandle: p,
                    isNew: c,
                    onClick: m,
                }),
            [t, r, s, u, p, o, c, m],
        );
    return a
        ? (0, i.jsx)("li", {
              children: (0, i.jsx)(od, { item: t, index: n, wishlistId: o, onReorder: d, children: h }),
          })
        : (0, i.jsx)("li", { children: h });
});
function og(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, lastViewedAt: o } = e,
        u = y.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, a.cf)([et.A], () => ({ defaultWishlistId: et.A.getFirstWishlistId(n.id) })),
        { isDragging: c } = (0, s$.V)((e) => ({ isDragging: e.isDragging() })),
        [g, f] = l.useState([]),
        m = l.useCallback((e) => {
            f((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        p = l.useCallback(
            (e, n) => {
                if (e === n || null == d || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = oi.A.getWishlist(d);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, ol.Ap)(i, t, e, n);
                a7.A.reorderWishlistItem(d, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [d, t],
        );
    if (null == u || null == d) return null;
    let h = (0, i.jsx)("ul", {
        className: ou.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                oc,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: d,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, os.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: m,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, i.jsx)(oo.B, { emptyListFallbackRef: null, children: h }) : h;
}
function of(e) {
    let t = y.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(or.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(og, { ...e }),
    });
}
var om = n(815021),
    op = n(299679),
    oh = n(820847);
n(667532);
var ox = n(862772),
    oA = n(172218),
    ov = n(739187),
    oI = n(857250),
    oj = n(97483),
    ob = n(2157),
    oC = n(95817),
    oy = n(74135),
    oE = n(964164);
let oS = av.Z.SIZE_90;
function oN(e) {
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
            children: f,
        } = e,
        { trackUserProfileWishlistAction: m } = (0, Q.NJ)(),
        p = (0, op.Ar)(),
        h = (0, aQ.A)(() => (0, aX.A)()),
        { handleVisibilityChange: x } = (0, oC.G)(h),
        A = (0, oA.K)(x, 0.5, p?.surface != null),
        v = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: rm.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    tX.default.track(P.HAw.WISHLIST_ITEM_CLICKED, {
                        sku_id: t.id,
                        wishlist_id: g,
                        wishlist_owner_id: p.wishlistOwnerId,
                        surface: p.surface,
                        position_in_section: p.positionInSection,
                        item_source: p.itemSource,
                        click_type: "add_to_wishlist",
                        product_line: t.productLine,
                        card_id: h,
                        impression_session_id: p.impressionSessionId,
                        location_stack: p.analyticsLocations,
                    }),
                d());
        }, [d, t.id, t.productLine, m, g, p, h]);
    return (0, i.jsx)("div", {
        ref: A,
        children: (0, i.jsx)(ae.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oS,
            cardStyle: s()(oE.Nr, a),
            skuPreviewStyle: s()(oE.ev, o),
            onHoverOrFocusChange: u,
            onClick: v,
            "aria-label": c,
            children: f,
        }),
    });
}
function ok(e) {
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
        [f, m] = l.useState(!1),
        p = l.useCallback(async () => {
            if (!f) {
                m(!0);
                try {
                    (await a7.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rm.RP.WISHLIST }));
                } catch (e) {
                    ((0, ov.P)((0, oI.o)(eF.intl.string(eF.t.F8FvUy), oj.Ck.FAILURE)),
                        lp.O.announce(eF.intl.string(eF.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [oE.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(oN, {
        "aria-label": eF.intl.formatToPlainString(eF.t.xRjJBe, { productName: (0, s8.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(ap.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function oP(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, ob.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(ok, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(oy.s, { spec: oS, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function oT(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case sQ.R.PROFILE_EFFECT:
                case sQ.R.NAMEPLATE:
                case sQ.R.BUNDLE:
                case sQ.R.PROFILE_FRAME:
                    return;
                case sQ.R.AVATAR_DECORATION:
                    return oE.ML;
                default:
                    return s()(oE.ML, oE.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(ok, { sku: t, skuPreviewStyle: r, ...n });
}
function oR(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(ok, { sku: t, skuPreviewStyle: aj.MO, ...n });
}
function oO(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oP, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(oT, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(oR, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var o_ = n(609965);
function oL(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([y.default], () => y.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(o_.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                op.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(oO, {
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
var ow = n(927813);
let oD = 90 * ow.A.Millis.DAY,
    oM = 90 * ow.A.Millis.DAY;
var oG = n(469364);
function oU(e) {
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
            markAsDismissed: f,
        } = (function (e) {
            let { userId: t, wishlist: n, hasFetchedWishlist: i } = e,
                r = (n?.items.length ?? 0) >= 3,
                [s, o] = l.useState(!1);
            !i || r || s || o(!0);
            let u = (0, a.bG)(
                    [et.A],
                    () => (null != n ? new Date(et.A.getWishlistSettings(t, n.id)?.updated_at ?? 0).valueOf() : 0),
                    [n, t],
                ),
                [d, c] = (0, eG.Wl)(
                    eP.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + oM, cooldownDurationMs: oD },
                    void 0,
                    !0,
                ),
                g = d === eP.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eU.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(oF, {
              user: t,
              guildId: n,
              wishlist: r,
              analyticsLocations: o,
              impressionSessionId: u,
              className: d,
              isDismissible: g,
              markAsDismissed: f,
          })
        : null;
}
function oF(e) {
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
                { recommendations: a, status: o } = (0, ox.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iU.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, ol.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oh.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(oG.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: oG.wx,
                      children: [
                          (0, i.jsx)(eY.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: eF.intl.string(eF.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: oG.b,
                                  children: (0, i.jsx)(om.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(op.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(oL, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(oG.Vg, oG.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var oW = n(477782),
    oB = n(980707),
    oV = n(431194);
function oH(e) {
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
                    t.filter(ef.Vq).map((e) => {
                        let t = tZ.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eF.intl.formatToPlainString(eF.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: oV.I, src: t, alt: "" }) : tL.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: tL.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ec.A)(o), handleOpenGameShop: s }),
        f = l.useMemo(
            () =>
                (0, i.jsxs)(oW.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(oW.Dr, {
                                id: "browse-collectibles-shop",
                                label: eF.intl.string(eF.t["5upuqx"]),
                                iconLeft: tL.U,
                                leadingAccessory: { type: "icon", icon: tL.U },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(oW.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eF.intl.string(eF.t.lG6a5x),
                                iconLeft: ta.t,
                                leadingAccessory: { type: "icon", icon: ta.t },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    oW.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nb.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(oB.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eF.intl.string(eF.t.GdNkvG),
                children: f,
            });
        },
        children: (e) =>
            (0, i.jsx)(nc.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? no.P : i9.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var oz = n(365199);
let oY = rK.A.getArticleURL(P.MVz.CUSTOM_PROFILES_WISHLIST);
function oK(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(oW.rX, {
                          children: [
                              (0, i.jsx)(oW.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eF.intl.string(eF.t.b2nFyA),
                                  subtext: eF.intl.string(eF.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(oW.bX, {}),
                              (0, i.jsx)(oW.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eF.intl.string(eF.t.hvVgAZ),
                                  icon: tH.I,
                                  trailingIndicator: { type: "icon", icon: tH.I },
                                  action: () => window.open(oY),
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
              children: (0, i.jsx)(nb.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(oB.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eF.intl.string(eF.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tD.q3, {
                          buttonRef: s,
                          icon: oz.MoreHorizontalIcon,
                          tooltipText: eF.intl.string(eF.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var oq = n(526725);
function oX(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(oH, {
              title: eF.intl.string(eF.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(nc.$, {
              variant: "secondary",
              size: "sm",
              icon: tL.U,
              text: eF.intl.string(eF.t["i/yzHs"]),
              onClick: n,
          });
}
function oZ(e) {
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
        className: oq.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(oH, {
                          title: eF.intl.string(eF.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(nc.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tz.j,
                          text: eF.intl.string(eF.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(oK, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function oJ(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(nc.$, {
        variant: "primary",
        size: "sm",
        icon: tL.U,
        text: eF.intl.formatToPlainString(eF.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function o$(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, a1.Us)() === P.BRT.OVERLAY,
        u = (0, ec.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(oJ, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(oH, {
                title: eF.intl.string(eF.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: oq.y7,
        children: [
            (0, i.jsxs)("div", {
                className: oq.q6,
                children: [
                    (0, i.jsx)(nu.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: eF.intl.string(eF.t.HGnLLT),
                    }),
                    (0, i.jsx)(eY.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: eF.intl.string(eF.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(aJ.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(nc.$, {
                                variant: "primary",
                                size: "sm",
                                icon: tL.U,
                                text: eF.intl.string(eF.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function oQ(e) {
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
        f = (0, a.bG)([et.A], () => et.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: m } = (0, Q.NJ)(),
        p = !1 === r.nsfwAllowed,
        [h, x] = l.useState(!0);
    l.useEffect(() => {
        f?.visibility != null && x(f.visibility === aZ.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        v = (0, on.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, a4.y9)(s) : null }),
        I = l.useCallback(() => {
            if (null == g) return;
            let e = h ? aZ.a.PRIVATE : aZ.a.PUBLIC;
            (x(!h),
                a7.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? rm.Mq.WISHLIST_TOGGLE_PRIVATE : rm.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, a4.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: oq.lm,
                    children: [
                        (0, i.jsx)(a$.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eY.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eF.intl.string(eF.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, i.jsxs)("div", {
                    className: oq.lm,
                    children: [
                        (0, i.jsx)(sj.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(eY.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eF.intl.string(eF.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: v,
                className: oq.U1,
                children: [
                    (0, i.jsx)(eY.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: eF.intl.format(eF.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(oZ, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: I,
                          })
                        : (0, i.jsx)(oX, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function o0(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, sk.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([et.A, y.default], () => ({
            wishlistId: et.A.getFirstWishlistId(t.id),
            currentUser: y.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, b.Ay)(),
        c = (0, aQ.A)(() => ((0, rU.aS)()?.enabled === !0 ? (ot.A.getEntry(t.id)?.lastViewedAt ?? null) : null));
    l.useEffect(() => {
        (0, oe.Z)(t.id);
    }, [t.id]);
    let g = sT(t.id),
        { wishlist: f, wasFetched: m, error: p } = (0, Y.fw)({ wishlistId: o, userId: t.id }),
        [h, x] = l.useState(!1);
    (m && !h && x(!0), (0, a6.A)(f));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([a5.A], () => a5.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, a3.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, a8.w)({ userIds: s }),
                c = (0, a8.mn)({ userIds: s }),
                g = (0, a8.tR)(s),
                f = (0, a8.rY)(),
                m = (0, a8.qx)(),
                p = (0, a8.px)();
            return l.useMemo(
                () => (0, r0.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(ef.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: f, profileOwner: t, currentUser: u }),
        v = (0, aQ.A)(() => (0, aX.A)()),
        I = l.useCallback(() => {
            (0, tw.Cz)({ analyticsLocations: d, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [d]),
        C = l.useCallback((e) => {
            (0, a9.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iw.M)(), (0, a9.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, al.c)({
            userId: u?.id,
            skuId: iU.pe.TIER_2,
            nuxGraphic: a2.g,
            onNuxShow: a0.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != p) return null;
    let N = null == f || 0 === f.items.length;
    return (0, i.jsxs)(sa, {
        scrollerRef: r,
        className: s()({ [oq.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(o$, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: I,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: C,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(a_, { scrollerRef: r }),
                          (0, i.jsx)(oQ, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: f,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: I,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, a4.C3)(f, iU.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(of, {
                              items: f.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              lastViewedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(oU, {
                    user: t,
                    guildId: n,
                    wishlist: f,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: v,
                    className: N ? oq._E : oq.HZ,
                }),
        ],
    });
}
function o1(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rm.RP.ACTIVITY
        ? (0, i.jsx)(su, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rm.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sh, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rm.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sI, { user: t, onClose: o })
            : l === rm.RP.WIDGETS
              ? (0, i.jsx)(aq, { user: t, guildId: s, channelId: a })
              : l === rm.RP.WISHLIST
                ? (0, i.jsx)(o0, { profileOwner: t, guildId: s })
                : null;
}
function o2(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guildId: s,
            channelId: a,
            items: o,
            initialSection: u,
            onClose: d,
        } = e,
        { trackUserProfileAction: g } = (0, Q.NJ)(),
        { shouldLogExposure: p } = (0, rF.A)(t);
    (0, rW.A)(t);
    let h = l.useRef(!1),
        x = o.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        x && !h.current && ((h.current = !0), g({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [x, g]);
    let [A, v] = l.useState(() => (o.find((e) => e.section === u) ?? o[0]).section),
        I = o.find((e) => e.section === A) ?? o[0];
    return (
        I.section !== A && v(I.section),
        (0, i.jsxs)("div", {
            className: ss.kL,
            children: [
                p && (0, i.jsx)(rU.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: ss.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rG.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: I.section,
                        onItemSelect: function (e) {
                            rc.A.hasUnsavedChanges() && I.section === rm.RP.WIDGETS
                                ? (0, i0.VQ)()
                                : (g({ action: "PRESS_SECTION", section: e }), v(e));
                        },
                        children: o.map((e) =>
                            (0, i.jsxs)(
                                rG.V.Item,
                                {
                                    className: ss.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eF.intl.formatToPlainString(eF.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, i.jsx)(rB.A, { className: ss.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rG.V.Panel, {
                    id: I.section,
                    "aria-label": I.text,
                    className: ss.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: I.text }) }),
                        children: (0, i.jsx)(o1, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: a,
                            section: I.section,
                            onClose: d,
                        }),
                    }),
                }),
            ],
        })
    );
}
var o3 = n(933832),
    o5 = n(972213);
let o8 = {
        [rm.jM.WIDGET_ADDED]: {
            message: eF.intl.string(eF.t.fFP1Uy),
            icon: (0, i.jsx)(o3.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rm.jM.WIDGET_REMOVED]: {
            message: eF.intl.string(eF.t.zzsK7h),
            icon: (0, i.jsx)(o3.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rm.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eF.intl.string(eF.t["84MExs"]),
            icon: (0, i.jsx)(o5.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: oj.Ck.FAILURE,
        },
        [rm.jM.SOMETHING_WENT_WRONG]: {
            message: eF.intl.string(eF.t.F8FvUy),
            icon: (0, i.jsx)(o5.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: oj.Ck.FAILURE,
        },
    },
    o9 = (e) => {
        let { className: t } = e,
            n = (0, rf.fu)(),
            r = (0, a.bG)([tx.Ay], () => tx.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(o8[n]), lp.O.announce(o8[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, rf.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rf.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lG.animated.div, { className: t, style: e, children: (0, i.jsx)(rR, { ...u }) }),
                ),
            })
        );
    };
var o7 = n(297413),
    o6 = n(465829),
    o4 = n(826673),
    ue = n(609425),
    ut = n(73392),
    un = n(576705),
    ui = n(997394);
function ul(e) {
    return null == e || "" === e ? void 0 : e;
}
function ur(e) {
    let t,
        n,
        r,
        o,
        u,
        d,
        c,
        g,
        f,
        m,
        { user: p, displayProfile: x } = e,
        { analyticsLocations: A } = (0, b.Ay)(),
        v = x?.guildId != null,
        I = x?.guildId ?? void 0,
        j = $.Ay.canUsePremiumProfileCustomization(p),
        C = (0, np.u)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: E, permissionsLoaded: S } = (0, a.cf)([un.A, K.A], () => {
            if (!v || null == I) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = K.A.getGuild(I);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: un.A.can(P.xBc.CHANGE_NICKNAME, e) || un.A.can(P.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        N = v && !E && S,
        {
            value: k,
            previewValue: T,
            fallbackDisplayName: R,
            onCommit: O,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([ej.Ay], () => (null != t ? (ej.Ay.getMember(t, p.id)?.nick ?? null) : null))),
        (u = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingNickname)),
        (f = (g = void 0 !== (c = n ? d : u) ? c : n ? o : r) ?? ""),
        (m = n ? (ul(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: ul(g) ?? m,
            fallbackDisplayName: m,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, tm.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, tm.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        _ = (0, a.bG)([eb.A], () => eb.A.getErrors(I ?? null)),
        L = (0, tf.EC)(I ?? null),
        w = v ? _.nick?.[0] : _.global_name?.[0],
        D = L?.nick?.[0],
        M = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(I).pendingDisplayNameStyles),
        G = (0, ue.A)({ userId: p.id, guildId: I, pendingDisplayNameStyles: M }),
        U = (0, ut.a)({ displayNameStyles: G, compensateForSafari: !1 }),
        F = eF.intl.string(v ? eF.t.mq6Cg9 : eF.t.XuZU7A),
        W = v ? eF.intl.string(eF.t.YcDKr8) : p.username,
        B = l.useRef(null),
        V = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    C &&
                        (0, o4.Dr)(eP.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eU.i.INDIRECT_ACTION,
                        }),
                    (0, nF.L)({ analyticsLocations: A, guildId: I, stackingBehavior: "stack", returnRef: B }));
            },
            [A, I, C],
        ),
        H = {
            icon: t9.V,
            tooltip: eF.intl.string(eF.t.lqKKI2),
            "aria-label": eF.intl.string(eF.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: V,
            buttonRef: B,
        },
        z = N
            ? (0, i.jsx)("span", {
                  className: ui.Cs,
                  children: (0, i.jsx)(na.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tA.kL,
        children: (0, i.jsx)(eY.E, {
            variant: o6.gU.lg,
            color: "none",
            className: U,
            children: (0, i.jsx)(rj.w, {
                value: k,
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
                    return (0, i.jsx)(o6.c$, {
                        user: p,
                        guildId: I,
                        displayName: n ? (ul(e) ?? R) : T,
                        size: "lg",
                        pendingDisplayNameStyles: M,
                        className: s()(ui.dt, { [ui.jW]: n && "" === e }),
                        displayNameTrailing: z,
                    });
                },
                placeholder: W,
                label: F,
                maxLength: P.zzC,
                textVariant: "inherit",
                trailing: E && j ? H : void 0,
                error: w,
                helperText: N ? eF.intl.string(eF.t.gzjxQi) : D,
                disabled: !E,
            }),
        }),
    });
}
var us = n(628072);
function ua(e) {
    let t,
        n,
        r,
        o,
        u,
        { displayProfile: d } = e,
        {
            value: c,
            previewValue: g,
            onCommit: f,
        } = ((t = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingPronouns)),
        (o = n ? d?._guildMemberProfile?.pronouns : d?.pronouns),
        (u = d?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: u,
            onCommit: l.useCallback(
                (e) => {
                    (0, tm.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        m = d?.guildId != null,
        p = null != g && g.length > 0,
        h = eF.intl.string(m ? eF.t.AXiE0i : eF.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(tA.kL, tA.oE, us.k),
        children: (0, i.jsx)(rj.w, {
            value: c,
            onCommit: f,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            fullWidth: !1,
            paddingBlock: "md",
            paddingInline: "sm",
            size: "sm",
            scrollIntoViewOnFocus: !0,
            preview: p ? (0, i.jsx)(o6.n2, { pronouns: g }) : null,
            label: eF.intl.string(eF.t["rniRE+"]),
            placeholder: h,
            maxLength: P.VE5,
            spellCheck: !1,
        }),
    });
}
var uo = n(305866),
    uu = n(230937),
    ud = n(145497),
    uc = n(685073),
    ug = n(318785),
    uf = n(534400),
    um = n(436921),
    up = n(743981),
    uh = n(295930),
    ux = n(594615);
let uA = "no-server-tag";
function uv(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = (0, um.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        u = null == l || null == n;
    return (0, i.jsx)(e9.D, {
        innerRef: t,
        className: s()(o ? uh.qJ : uh.L5, { [uh.wK]: u }),
        "aria-label": u ? eF.intl.string(eF.t.Pdd1nd) : eF.intl.formatToPlainString(eF.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(eY.E, {
            variant: o || u ? "text-xs/normal" : "text-xs/semibold",
            color: u ? "input-placeholder-text-default" : "text-default",
            className: uh.W3,
            tag: "span",
            children: [
                u
                    ? eF.intl.string(eF.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  uf.Z9,
                                  {
                                      src: (0, uc.gC)(n, r, up.Sl.SIZE_14),
                                      size: up.Sl.SIZE_14,
                                      className: uh.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uc.gC)(n, r, up.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(i9.a, { size: "xs", color: "currentColor", className: uh.u4 }),
            ],
        }),
    });
}
function uI() {
    let e = l.useRef(null),
        t = (0, ug.b)(),
        n = l.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        r = (0, a.cf)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (0, uc.Zo)(e?.primaryGuild);
        }),
        s = r.guildId ?? null,
        o = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingPrimaryGuildId),
        u = void 0 !== o ? o : s,
        d = null != u ? (n.get(u) ?? null) : null,
        c = null == d && u === s,
        g = d?.profile?.tag ?? (c ? (r.tag ?? null) : null),
        f = d?.profile?.badge ?? (c ? r.badge : void 0),
        m = l.useCallback(
            (e) =>
                e.id === uA
                    ? (0, i.jsx)("div", {
                          className: ux.uN,
                          children: (0, i.jsx)(eY.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: uh.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(lr.c, { ...e }),
            [],
        ),
        p = l.useMemo(
            () => [
                { id: uA, label: eF.intl.string(eF.t.VxdWWH), value: uA },
                ...t.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(ud.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(uf.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [t],
        );
    return 0 === t.length && null == s
        ? null
        : (0, i.jsx)(nb.Y, {
              targetElementRef: e,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(uo.l, {
                      className: uh.yt,
                      "aria-label": eF.intl.string(eF.t.Fo0g9x),
                      children: (0, i.jsxs)(uu.iS, {
                          selectionMode: "single",
                          options: p,
                          onSelectionChange: (e) => {
                              ((0, tm.p)({ primaryGuildId: e === uA ? null : e }), t());
                          },
                          children: [
                              (0, i.jsx)(uu.a3, {
                                  label: eF.intl.string(eF.t["5h0QOP"]),
                                  hideLabel: !0,
                                  placeholder: eF.intl.string(eF.t["5h0QOP"]),
                                  autoFocus: !0,
                              }),
                              (0, i.jsx)(uu.X2, { renderListItem: m }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, i.jsx)(uv, { buttonRef: e, guildId: u, guildTag: g, guildBadge: f, ...t }),
          });
}
var uj = n(956495);
function ub(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(o6.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function uC(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(ub, { ...e, displayNameStylesOverride: t });
}
function uy(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(o7.A, {
                  user: t,
                  forceUsername: !0,
                  className: uj.a1,
                  usernameClass: uj.eb,
                  discriminatorClass: uj.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(ur, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(uj.AK, uj.j6),
                children: [r, (0, i.jsx)(o6.Ce, {}), (0, i.jsx)(ua, { displayProfile: n }), (0, i.jsx)(uI, {}), l],
            }),
        ],
    });
}
function uE(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(ub, { ...n });
        case "try-it-out":
            return (0, i.jsx)(uC, { ...n });
        case "edit":
            return (0, i.jsx)(uy, { ...n });
        default:
            return (0, ef.xb)(t);
    }
}
var uS = n(97808),
    uN = n(22231),
    uk = n(601255),
    uP = n(562819),
    uT = n(19575),
    uR = n(339984),
    uO = n(329801),
    u_ = n(884362);
let uL = uT.Ay.getEnableHardwareAcceleration() ? uS.Js : uS.eu;
function uw(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function uD(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oB.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eF.intl.string(eF.t.YAgq3W),
        children: (0, i.jsx)(oW.rX, { children: n }),
    });
}
function uM(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eB.V)(e),
        [u, d] = l.useState(!1),
        c = l.useRef(null),
        g = l.useRef(null),
        f = l.useCallback(() => d(!1), []),
        m = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = null != n,
                c = (0, a.bG)([ej.Ay], () => (null != n ? ej.Ay.getMember(n, t.id) : null)),
                g = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? void 0).pendingAvatar),
                f = d ? c?.avatar : t.avatar,
                m = (0, ev.z5)(g, f),
                p = d && null != t.avatar,
                h = $.Ay.canUsePremiumProfileCustomization(t),
                x = h || null == n,
                A = h || null == n,
                v = (0, a.bG)([K.A], () => (null != n ? K.A.getGuild(n) : null)),
                I = (0, ev.a4)({ user: t }),
                j = (0, ev.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, ev.CP)(n ?? void 0),
                y = void 0 !== C,
                E = null != (0, uk.A)(y ? C : j) && (y ? null != C : null != j),
                S = d && null != I,
                N = l.useCallback(() => {
                    (r(),
                        uw(() =>
                            (0, nx.XD)({
                                uploadType: uR.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        uw(() =>
                            (0, uP.L)({
                                analyticsLocations: u,
                                guild: v ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, v, s]),
                P = l.useCallback(() => {
                    (r(),
                        (0, nx.rM)(null, f, (e) => (0, tm.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ev.WU)(p ? "reset" : "remove"));
                }, [r, n, f, p]),
                T = l.useCallback(() => {
                    (r(), (0, tm.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                oW.Dr,
                                { id: "change-avatar", label: eF.intl.string(eF.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                oW.Dr,
                                { id: "change-decoration", label: eF.intl.string(eF.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.twB3fz),
                                          action: P,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    A &&
                        E &&
                        e.push(
                            S
                                ? (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["2u5yu0"]),
                                          action: T,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["9rx5GO"]),
                                          action: T,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, A, S, m, E, N, k, P, T]);
        })({ user: t, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, i.jsx)(eB.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(uO.my, uO.vk, u_.kL, { [u_.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(uL, { ...r, imageClassName: s()(uO.Lw, u_.HU) }),
                  (0, i.jsx)(nb.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nb.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(uD, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: u_.r9,
                              children: (0, i.jsx)(t7.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: uN.PencilIcon,
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
var uG = n(514905);
function uU(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oB.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eF.intl.string(eF.t.FzU73A),
        children: (0, i.jsx)(oW.rX, { children: n }),
    });
}
function uF(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        u = l.useRef(null),
        d = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = (0, ev.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, ev.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, ev.Xf)({ user: t, guildId: void 0 }),
                f = $.Ay.canUsePremiumProfileCustomization(t),
                m = null == n,
                p = m || f,
                h = m || f,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: v,
                    pendingProfileFrame: I,
                } = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? void 0)),
                j = (0, a.bG)([et.A], () =>
                    null != n ? et.A.getGuildMemberProfile(t.id, n)?.banner : et.A.getUserProfile(t.id)?.banner,
                ),
                C = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([et.A], () => et.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([et.A], () => et.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, ev.Ac)(A, j),
                k = x && C,
                P = x && E,
                T = x && S,
                R = void 0 === v ? null != d : null != v,
                O = void 0 === I ? null != c : null != I,
                _ = (0, ev.lw)({
                    pendingValue: I,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                L = (0, w.A)(_?.skuId),
                D = l.useCallback(() => {
                    (r(),
                        (0, nx.XD)({
                            uploadType: uR.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, n2.W)({
                            analyticsLocations: u,
                            guild: null != n ? (K.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nx.rM)(null, j, (e) => (0, tm.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, tm.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, id.w)({
                            analyticsLocations: u,
                            guild: null != n ? (K.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, L, s]),
                W = l.useCallback(() => {
                    (r(), (0, tm.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, i.jsx)(
                                oW.Dr,
                                { id: "change-banner", label: eF.intl.string(eF.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                oW.Dr,
                                { id: "change-effect", label: eF.intl.string(eF.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                oW.Dr,
                                { id: "change-frame", label: eF.intl.string(eF.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eF.intl.string(eF.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      oW.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eF.intl.string(eF.t["8DfADq"]),
                                          action: W,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, h, P, T, N, R, O, D, M, F, G, U, W]);
        })({ user: t, guildId: n, onClose: c, returnRef: d });
    return 0 === g.length
        ? (0, i.jsx)(eH.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(uG.kL, { [uG.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eH.A, { ...e, className: uG.Pr }),
                  (0, i.jsx)(nb.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nb.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(uU, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: uG.r9,
                              children: (0, i.jsx)(t7.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: uN.PencilIcon,
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
var uW = n(415916),
    uB = n(419341),
    uV = n(732188),
    uH = n(837531),
    uz = n(186272),
    uY = n(447538);
let uK = (e) => e * (2 - e),
    uq = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function uX(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function uZ(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, eo.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: uY.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function uJ(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (n8.add(e), () => n8.delete(e)),
            () => n9,
        );
    return null == s ? null : (0, i.jsx)(_.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function u$(e) {
    var t;
    let n,
        r,
        {
            user: o,
            currentUser: u,
            guildId: d,
            originGuildId: f,
            channelId: m,
            displayProfile: p,
            nickname: h,
            hasEntered: x,
            customStatusPrompt: A,
            onClose: I,
            avatarDecorationOverride: j,
            avatarOverride: b,
            bannerOverride: y,
            accentColorOverride: E,
            profileEffectOverride: S,
            profileFrame: N,
            fadeInProfileFrame: k,
            editingMode: T,
            isLoading: R = !1,
        } = e,
        O = o.id === u.id,
        _ = "edit" === T,
        L = l.useRef(null),
        w = l.useRef(null),
        D = l.useRef(null);
    l.useEffect(() => {
        if (O) return () => C.A.setState({ isOpen: !1 });
    }, [O]);
    let { isHoveringOrFocusing: G } = (0, F.A)(L),
        [U, H] = l.useState(),
        Y = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? H("compact-xs") : t <= 380 ? H("compact-sm") : H(void 0);
        }, []);
    (0, v.g)(L, Y, [], { fireOnMount: !0 });
    let K = null != U ? uq[U] : void 0,
        Z = l.useMemo(() => A ?? (0, W.A)(), [A]),
        { relationshipType: $, originApplicationId: Q } = (0, a.cf)([q.A], () => ({
            relationshipType: q.A.getRelationshipType(o.id),
            originApplicationId: q.A.getOriginApplicationId(o.id),
        })),
        ee =
            ((t = o.id),
            (n = (0, el.bG)([es.default], () => es.default.locale)),
            (r = (0, el.bG)([q.A], () => (q.A.getRelationshipType(t) === P.eA$.FRIEND ? q.A.getSince(t) : null), [t])),
            (0, er.An)(r, n)),
        et = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        en = (0, V.q)({ userId: o.id }),
        ei = (0, B.fi)(o.id),
        { appIdentities: ea, connections: eo } = (function (e) {
            let { filteredAppIdentities: t } = (0, eg.A)(e),
                n = (0, em.A)(e),
                i = l.useMemo(() => new Set(t?.map((e) => e.application_id) ?? []), [t]),
                r = (0, ec.A)([...i]).filter(ef.Vq);
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
                            let t = ed.A.get(e.type);
                            return (
                                !t?.migrationData?.getMigrationExperimentEnabled(
                                    "useVisibleUserProfileConnectionsAndAppIdentities",
                                ) || !i.has(t.migrationData.replacedBy)
                            );
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        ep = (0, eu.A)(o.id),
        eh = eo.length > 0 || ea.length > 0,
        ex = ep.length > 0,
        eA = _ ? uF : eH.A,
        ev = p?.guildId ?? d,
        eI = {
            user: o,
            displayProfile: p,
            guildId: d,
            channelId: m,
            avatarSize: K?.avatarSize ?? ey.T[eC.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: b,
        },
        ej = l.useCallback(() => {
            (0, e5.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(uY.profile, null != U && uY[U]),
        ref: L,
        "aria-busy": R,
        children: [
            (0, i.jsxs)("div", {
                className: uY.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: uY.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eA, {
                            user: o,
                            displayProfile: p,
                            guildId: d,
                            themeType: eC.d.MODAL_V2,
                            specOverrides: K,
                            pendingBanner: y,
                            pendingAccentColor: E,
                        }),
                    }),
                    _
                        ? (0, i.jsx)(uM, { ...eI })
                        : (0, i.jsx)(eB.A, {
                              ...eI,
                              onOpenAvatar: "read-only" === T ? ej : void 0,
                              imageAnimatingClassName: "try-it-out" === T && null == b ? iZ.$T : void 0,
                          }),
                    (0, i.jsx)(e2.A, {
                        user: o,
                        guildId: d,
                        channelId: m,
                        themeType: eC.d.MODAL_V2,
                        hasEntered: x,
                        prompt: O ? Z : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: uY.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(uE, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, i.jsx)(eV.A, {
                                    displayProfile: p,
                                    themeType: eC.d.MODAL_V2,
                                    onClose: I,
                                    showPendingBadgeEdits: O,
                                    popoutAnchorRef: x ? w : void 0,
                                    containerRef: D,
                                }),
                                onClose: I,
                                editingMode: T,
                            }),
                            (0, i.jsx)("div", { ref: w }),
                            O && x && (0, i.jsx)(eW, { targetElementRef: D }),
                        ],
                    }),
                    $ === P.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e1.A.Overlay, {
                            className: uY.profileOverlay,
                            children: (0, i.jsx)(eX.A, {
                                user: o,
                                applicationId: Q,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: uY.profileBanner,
                            }),
                        }),
                    ei.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e1.A.Overlay,
                            {
                                className: uY.profileOverlay,
                                children: (0, i.jsx)(eX.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: uY.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e1.A.Overlay, {
                            className: uY.profileOverlay,
                            children: (0, i.jsx)(tg, {
                                heading: eF.intl.string(eF.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: uY.profileBanner,
                                children: (0, i.jsx)(z.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(e0.A, { user: o, className: uY.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(e1.A.Overlay, {
                            className: uY.profileOverlay,
                            children: (0, i.jsx)(eQ.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: uY.profileButtons,
                        children: (0, i.jsx)(tF, {
                            user: o,
                            currentUser: u,
                            guildId: d,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: $,
                            onClose: I,
                        }),
                    }),
                    O && "try-it-out" !== T && (0, i.jsx)(ez.A, { isPremiumUser: (0, J.ki)(u) }),
                    !et && (0, i.jsx)(tk, { currentUser: u, displayProfile: p, canEditInPlace: _ }),
                    en.length > 0 &&
                        (0, i.jsx)(tg, {
                            heading: eF.intl.string(eF.t["Uv/eTx"]),
                            children: (0, i.jsx)(eq.A, { applicationIds: en }),
                        }),
                    (0, i.jsx)(tg, {
                        heading: eF.intl.string(eF.t.a6XYD9),
                        children: (0, i.jsx)(eJ.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: rm.In }),
                    }),
                    null != ee &&
                        (0, i.jsx)(tg, {
                            heading: eF.intl.string(eF.t.wlTO8v),
                            children: (0, i.jsx)(eK, { friendsSinceDate: ee }),
                        }),
                    p?.guildId != null &&
                        (0, i.jsx)(e3.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: uY.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !et &&
                        (_ || eh) &&
                        (0, i.jsx)(tg, {
                            heading: eF.intl.string(eF.t["3fe7U5"]),
                            scrollTargetId: rm.bk.CONNECTIONS,
                            children: (0, i.jsx)(t8, {
                                applicationIdentities: ea,
                                connections: eo,
                                userId: o.id,
                                allowEditing: _,
                                className: uY.profileAppConnections,
                            }),
                        }),
                    !et &&
                        ex &&
                        (0, i.jsx)(tg, {
                            heading: eF.intl.string(eF.t.PHjkRE),
                            scrollTargetId: rm.bk.APPS,
                            children: (0, i.jsx)(ts, {
                                applicationRoleConnections: ep,
                                onClose: I,
                                className: uY.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rN, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(uJ, { displayProfile: p, profileEffectOverride: S, isHovering: G }),
            null != N && (0, i.jsx)(M.A, { frame: N, filterLayer: uX, fadeIn: k }),
        ],
    });
}
function uQ(e) {
    let { user: t, displayProfile: n, pendingThemeColors: l, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: u,
        } = (0, ea.A)({ user: t, displayProfile: n, pendingThemeColors: l, isPreview: r }),
        { profileThemeStyle: d, profileThemeClassName: c } = (0, ex.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: u,
        });
    return (0, i.jsx)("div", { className: c, style: d, children: s });
}
function u0(e) {
    let t,
        n,
        r,
        {
            user: u,
            currentUser: c,
            guildId: g,
            originGuildId: v,
            channelId: C,
            messageId: E,
            roleId: S,
            sessionId: N,
            initialTabSection: k,
            initialScrollTarget: P,
            transitionState: _,
            customStatusPrompt: M,
            openedAt: F,
            onClose: W,
            sourceAnalyticsLocations: B = [],
            themeContainerClassName: V,
        } = e,
        z = u.id === c.id,
        q = l.useCallback(() => (0, uW.A)(z, W), [z, W]),
        {
            guildId: J,
            pendingGuildId: el,
            isFetching: er,
            handleSelectUserProfile: es,
            handleRetry: ea,
            hasError: eo,
        } = (function (e) {
            let { userId: t, initialGuildId: n } = e,
                [i, r] = l.useState(n),
                [s, o] = l.useState(n),
                [u, d] = l.useState("idle"),
                [c, g] = l.useState(0),
                f = (0, a.bG)([et.A], () => et.A.getUserProfile(t)?.fetchError?.status ?? null, [t]),
                m = l.useCallback(() => {
                    (d("retrying"), g((e) => e + 1));
                }, []),
                p = l.useCallback((e) => {
                    (d("loading"), r(e ?? void 0));
                }, []);
            return (
                l.useEffect(() => {
                    let e = !1;
                    return (
                        (0, eA.A)(t, void 0, {
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
                    hasError: "retrying" === u || (null != f && "loading" !== u),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: u.id, initialGuildId: g }),
        eu = l.useMemo(() => (null != J ? { [J]: [u.id] } : {}), [J, u.id]);
    (0, I.Eq)(eu, "UserProfileModalV2");
    let ed = (0, en.X)("UserProfileModalV2"),
        ec = nr(),
        eg = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        ef = (0, ep.A)(u.id) && ed,
        em = (0, eh.W)(u.id),
        ex = eo && !em,
        ey = ef && !eg && !eo && !ec,
        eP = ec ? "try-it-out" : ey ? "edit" : "read-only",
        {
            pendingThemeColors: eT,
            avatarDecorationOverride: eR,
            avatarOverride: eO,
            bannerOverride: e_,
            accentColorOverride: eL,
            profileEffectOverride: ew,
            profileFrameOverride: eD,
        } = (function (e) {
            let { userId: t, guildId: n, editingMode: i } = e;
            return (0, a.cf)(
                [eb.A, y.default, ej.Ay, et.A],
                () => {
                    if ("read-only" === i) return eS;
                    let e = y.default.getUser(t);
                    if (null == e) return eS;
                    let l = eb.A.getTryItOutChanges(),
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
                                : eb.A.getPendingChanges(n),
                        s = null != n ? ej.Ay.getMember(n, t) : null,
                        a = et.A.getUserProfile(t),
                        o = null != n ? et.A.getGuildMemberProfile(t, n) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, ev.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, eI.V7)({ userId: t, image: r.pendingAvatar, size: eE }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, ev.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, ev.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: u.id, guildId: J, editingMode: eP }),
        {
            isExpanded: eM,
            isAnimating: eG,
            transition: eU,
            handleExpand: eW,
            handleCollapse: eB,
            refs: { expandIconButtonRef: eV, expandTabButtonRef: eH, collapseButtonRef: ez },
        } = (function () {
            let [e, t] = l.useState(() => window.innerWidth > 928),
                [n, i] = l.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: uK },
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
                f = l.useCallback(() => {
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
                    handleCollapse: f,
                    refs: { expandIconButtonRef: a, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eY = ef && !eM,
        eK = ef && (!eM || eG),
        { defaultWishlistId: eq } = (0, a.cf)([et.A], () => ({ defaultWishlistId: et.A.getFirstWishlistId(u.id) }));
    ((0, Y.fw)({ wishlistId: eq, userId: u.id }),
        (t = (0, O.D)("edit_profile_preload")),
        (n = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([R.A], () => R.A.shouldFetch())),
        (0, l.useEffect)(() => {
            t && null != n && r && T();
        }, [t, n, r]));
    let eX = (0, ek.fC)(),
        eJ = ex && (!ef || !er),
        eQ = ef && eo,
        e0 = el !== J || eQ || null != eX.interactionType,
        e2 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sc.A)(t),
                r = l?.length,
                s = (0, uV.A)(t),
                a = (0, sP.A)(t.id),
                o = (0, uB.A)(t),
                { hasNewWishlistItems: u } = (0, rF.A)(t),
                d = [],
                c = t.id === n?.id,
                g = sT(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eF.intl.string(eF.t.laViwx), section: rm.RP.WIDGETS }),
                d.push({ text: eF.intl.string(eF.t.chq59f), section: rm.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eF.intl.string(eF.t["7lZ31J"]), section: rm.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, uH.A)(i), section: rm.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, uz.A)(r), section: rm.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e3 } = (0, b.Ay)([...B, j.A.USER_PROFILE_MODAL_V2]),
        e5 = (0, Q.pb)({
            layout: "MODAL_V2",
            userId: u.id,
            sourceSessionId: N,
            guildId: J,
            channelId: C,
            messageId: E,
            roleId: S,
        }),
        e8 = l.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e3, ...e5, action: rm.pt.SHOW_STYLES_PANEL }), eW());
        }, [e3, e5, eW]),
        e9 = l.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e3, ...e5, action: rm.pt.HIDE_STYLES_PANEL }), eB());
        }, [e3, e5, eB]),
        e7 = (0, ei.Ay)(u.id, J);
    (0, H.A)(e3, e7, rm.R7.MODAL_V2);
    let e6 = void 0 !== eD ? eD?.skuId : e7?.profileFrame?.skuId,
        e4 = (0, w.A)(e6),
        te = (0, L.A)(e6),
        { profileFrameStyle: tt, profileFrameClassName: tn } = (0, G.A)(e4);
    (0, D.A)({ skuId: e7?.profileFrame?.skuId, openedAt: F, context: e5, analyticsLocations: e3 });
    let ti = (0, a.bG)([y.default], () => $.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        tl = ec || (z && null != e7 && ti),
        tr = Z.Ay.useName(e7?.guildId, C, u),
        ts = (0, U.GV)(),
        ta = (0, a.bG)([K.A], () => (null != J ? K.A.getGuild(J) : null)),
        to = z
            ? null != ta
                ? eF.intl.formatToPlainString(eF.t.M7OhOF, { guildName: ta.name })
                : eF.intl.string(eF.t.egQPgM)
            : eF.intl.format(eF.t.KRe1Fk, { name: tr });
    return (0, i.jsx)(b.f5, {
        value: e3,
        children: (0, i.jsx)(Q.of, {
            value: e5,
            openedAt: F,
            fetchStartedAt: e7?.fetchStartedAt,
            fetchEndedAt: e7?.fetchEndedAt,
            isLoaded: e7?.isLoaded,
            children: (0, i.jsx)(ek.Hl, {
                value: eX,
                children: (0, i.jsx)(eN.N, {
                    value: P,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(iZ.zr, { [iZ.QF]: e7?.private === !0 }),
                        transitionState: _,
                        "aria-labelledby": ts,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rM, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(uY.layoutContainer, tn, {
                                        [uY.editingPanelEnabled]: ef,
                                        [uY.editingPanelExpanded]: ef && eM,
                                        [uY.isAnimating]: eG,
                                    }),
                                    style: tt,
                                    children: [
                                        (0, i.jsxs)(uQ, {
                                            user: u,
                                            displayProfile: e7,
                                            pendingThemeColors: eT,
                                            forceShowPremium: tl,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iZ.Oo,
                                                    children: [
                                                        (0, i.jsx)(tW.A, { onClose: q }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: ts, children: to }),
                                                        }),
                                                        eK &&
                                                            (0, i.jsx)(l0, {
                                                                buttonRef: eV,
                                                                onClick: e8,
                                                                className: uY.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eY &&
                                                    (0, i.jsx)("div", {
                                                        className: uY.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lQ, {
                                                            innerRef: eH,
                                                            onClick: e8,
                                                            className: uY.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                ef &&
                                                    eU((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(l1, {
                                                                  className: s()(uY.editingPanel, {
                                                                      [uY.isExpanded]: eM,
                                                                  }),
                                                                  selectedGuildId: el,
                                                                  originGuildId: v,
                                                                  onSelectGuildId: es,
                                                                  onClose: e9,
                                                                  collapseButtonRef: ez,
                                                                  isLoading: er,
                                                                  isEditingDisabled: eo,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e1.A, {
                                                    className: s()(V, iZ.A7, uY.profileContentOuter),
                                                    innerClassName: uY.profileContentInner,
                                                    user: u,
                                                    displayProfile: e7,
                                                    themeType: eC.d.MODAL_V2,
                                                    pendingThemeColors: eT,
                                                    isPrivate: e7?.private === !0,
                                                    forceShowPremium: tl,
                                                    children: [
                                                        (0, i.jsx)(uZ, { displayProfile: e7, pendingBanner: e_ }),
                                                        e7?.private === !0 && (0, i.jsx)(e$.A, {}),
                                                        !ex && (0, i.jsx)(o9, { className: uY.noticeContainer }),
                                                        eJ &&
                                                            (0, i.jsx)("div", {
                                                                className: uY.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rR, {
                                                                    icon: (0, i.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eF.intl.string(eF.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != ea
                                                                            ? eF.intl.string(eF.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: ea,
                                                                    actionDisabled: !ef && er,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: uY.profileCardToastContainer,
                                                            children: (0, i.jsx)(eZ.A, { userId: u.id, onClose: q }),
                                                        }),
                                                        (0, i.jsxs)(rw, {
                                                            showScrim: e0,
                                                            showLoadingSpinner: er,
                                                            className: uY.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(u$, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    guildId: J,
                                                                    channelId: C,
                                                                    displayProfile: e7,
                                                                    nickname: tr,
                                                                    originGuildId: v,
                                                                    hasEntered: _ === x.ip.ENTERED,
                                                                    customStatusPrompt: M,
                                                                    onClose: q,
                                                                    avatarDecorationOverride: eR,
                                                                    avatarOverride: eO,
                                                                    bannerOverride: e_,
                                                                    accentColorOverride: eL,
                                                                    profileEffectOverride: ew,
                                                                    profileFrame: e4,
                                                                    fadeInProfileFrame: te,
                                                                    editingMode: eP,
                                                                    isLoading: er,
                                                                }),
                                                                (0, i.jsx)(o2, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: e7,
                                                                    guildId: J,
                                                                    channelId: C,
                                                                    items: e2,
                                                                    initialSection: k,
                                                                    onClose: q,
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
                            (0, i.jsx)(rv, { userId: u.id, guildId: J, className: uY.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function u1(e) {
    return (0, i.jsx)(ni, { children: (0, i.jsx)(u0, { ...e }) });
}
