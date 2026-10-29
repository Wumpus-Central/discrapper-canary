n.d(t, { A: () => ds });
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
    I = n(770178),
    v = n(80682),
    j = n(793574),
    b = n(688810),
    C = n(248284),
    y = n(287809),
    E = n(636537),
    S = n(73153),
    N = n(913122),
    k = n(39418),
    T = n(652215);
async function P() {
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
    Y = n(561794),
    K = n(71393),
    q = n(994500),
    X = n(351906),
    Z = n(562153),
    $ = n(474090),
    J = n(24482),
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
    eI = n(919395),
    ev = n(101058),
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
    eT = n(554146),
    eP = n(43105),
    eR = n(844222),
    eO = n(947984),
    e_ = n(643056),
    eL = n(327791),
    ew = n(262),
    eD = n(982240),
    eM = n(131607),
    eG = n(49999),
    eU = n(105292);
function eF(e) {
    let t,
        n,
        r,
        s,
        { targetElementRef: o } = e,
        u = (0, e_.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        d = (0, eL.A)(),
        c =
            ((t = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.id)),
            (n = (0, a.bG)(
                [eD.Ay],
                () => (null != t && eD.Ay.hasCatalogFor(t) ? eD.Ay.getBadges(t).some((e) => e.owned) : null),
                [t],
            )),
            (r = (0, ei.Ay)(t)),
            (s = (0, ew.A)(r)),
            n ?? s.length > 0),
        { reducedMotion: g } = l.useContext(eR.C),
        [f, m] = (0, eM.kn)(c && u ? [eT.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return f !== eT.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, i.jsx)(eP.A, {
              targetElementRef: o,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eO.U, props: { dataBinding: { on: !0, reducedMotion: g.enabled } } },
              title: eU.intl.string(eU.t["9JoKQb"]),
              body: eU.intl.string(d ? eU.t.p82vky : eU.t.IDh31t),
              onRequestClose: () => m(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t["4P5I8V"]),
                      onClick: function () {
                          (m(eG.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eW = n(718019),
    eB = n(977059),
    eV = n(915614),
    eH = n(925622),
    ez = n(834730);
function eY(e) {
    let { friendsSinceDate: t } = e;
    return (0, i.jsx)(ez.E, { variant: "text-sm/normal", children: t });
}
var eK = n(361311),
    eq = n(931481),
    eX = n(439053),
    eZ = n(743987),
    e$ = n(312381),
    eJ = n(501193),
    eQ = n(383448),
    e0 = n(946356),
    e1 = n(394816),
    e2 = n(503026),
    e5 = n(305385),
    e3 = n(109112),
    e9 = n(939249),
    e7 = n(730134),
    e8 = n(169869),
    e6 = n(837057),
    e4 = n(310419),
    te = n(889227),
    tt = n(967198),
    tn = n(488995),
    ti = n(576849);
function tl(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, e8.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ti.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e7.A, { user: new te.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e3._, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ti.Hd,
                children: [
                    (0, i.jsxs)(e9.D, {
                        className: ti.OB,
                        onClick: function () {
                            (l?.(),
                                (0, e6.transitionToGlobalDiscovery)({
                                    tab: tn.GlobalDiscoveryTab.APPS,
                                    applicationId: t.application.id,
                                    newSessionState: {
                                        entrypoint: { name: e4.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != t.platform_name
                                ? (0, i.jsx)(ez.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: t.platform_name,
                                  })
                                : null,
                            null != t.platform_username
                                ? (0, i.jsx)(ez.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: t.platform_username,
                                  })
                                : null,
                            (0, i.jsx)(ez.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: ti.nk,
                                children: eU.intl.format(eU.t.zIT9YA, { applicationHook: () => t.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, i.jsx)("div", { className: ti.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function tr(e) {
    let { applicationRoleConnections: t, className: n, onClose: l } = e,
        { trackUserProfileAction: r } = (0, Q.NJ)(),
        o = (0, a.bG)([es.default], () => es.default.locale),
        u = (0, a.bG)([tt.A], () => tt.A.getGuildId());
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: s()(ti.kL, n),
              children: t.map((e, t) =>
                  (0, i.jsx)(
                      "li",
                      {
                          className: ti.FI,
                          children: (0, i.jsx)(tl, {
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
var ts = n(403581),
    ta = n(240248),
    to = n(308244),
    tu = n(900179),
    td = n(677295);
function tc(e) {
    let { className: t, ...n } = e;
    return (0, i.jsx)(tu.A, {
        className: s()(td.u, t),
        headingVariant: "text-xs/medium",
        headingColor: "text-subtle",
        ...n,
    });
}
var tg = n(81400),
    tf = n(84540),
    tm = n(290386),
    tp = n(621466);
n(321073);
var th = n(775602),
    tx = n(404760);
function tA(e) {
    let { id: t, message: n, type: l } = e,
        r = "error" === l,
        s = r ? g.E : p.WarningIcon;
    return (0, i.jsxs)(ez.E, {
        id: t,
        role: r ? "alert" : void 0,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: tx.VP,
        children: [(0, i.jsx)(s, { size: "xs", color: "currentColor", className: r ? tx.ik : tx.QW }), n],
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
        I = l.useId(),
        v = null == n,
        j = null != c,
        b = null != g && !j,
        C = j ? "error" : b ? "warning" : null,
        y = j ? c : g,
        E = null != C && null != y,
        S = [];
    (v && S.push(A), E && S.push(I));
    let N = S.length > 0 ? S.join(" ") : void 0;
    function k() {
        let { activeElement: e } = x.current?.ownerDocument ?? document;
        ((0, tp.vq)(e, HTMLElement) && e.blur(), d());
    }
    let T = (0, i.jsxs)("div", {
        ref: x,
        className: s()(tx.LL, { [tx.JD]: j, [tx.xe]: b }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: k,
        children: [
            v
                ? (0, i.jsx)(ez.E, {
                      id: A,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: tx.qf,
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
        className: s()(tx.kL, f),
        onBlur: p,
        onKeyDown: h,
        children: (0, i.jsx)(
            "div",
            {
                children: t
                    ? a
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", { className: tx.VH, children: T }),
                              E && (0, i.jsx)(tA, { id: I, message: y, type: C }),
                          ],
                      }),
            },
            t ? "editing" : "preview",
        ),
    });
}
var tv = n(786826);
function tj(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function tb(e) {
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
            maxLength: I,
            emojiPickerIntention: v,
            error: j,
            warning: b,
            className: C,
        } = e,
        y =
            ((t = n ? r : l),
            (null != I && t.length > I ? eU.intl.formatToPlainString(eU.t.ICT5S6, { maxLength: I }) : void 0) ?? j);
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
        input: (0, i.jsx)(tv.f, {
            editorRef: g,
            label: A,
            hideLabel: !0,
            value: n ? r : l,
            onChange: s,
            onFocus: f,
            onKeyDown: m,
            maxLength: I,
            error: y,
            helperText: b,
            placeholder: h,
            emojiPickerIntention: v,
        }),
    });
}
let tC = [
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
var ty = n(307731);
function tE(e) {
    let t,
        n,
        r,
        s,
        o,
        { displayProfile: u, className: d } = e,
        c = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        g = u?.guildId != null,
        f = u?.guildId ?? null,
        m = J.Ay.canUsePremiumProfileCustomization(c),
        p = (0, tm.U)({ location: "user_profile_modal_edit" }),
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
                    (0, tf.p)({ bio: e.trim(), guildId: u?.guildId ?? void 0 });
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
                        c = (0, a.bG)([th.Ay], () => th.Ay.useReducedMotion),
                        g = l.useRef(null),
                        f = l.useRef(null),
                        m = l.useRef(null),
                        p = l.useRef(!1),
                        h = l.useRef(!0),
                        x = l.useRef(!1),
                        A = l.useCallback(() => {
                            ((h.current = !1), u(t), s("editing"));
                        }, [t]),
                        I = l.useRef(o);
                    l.useLayoutEffect(() => {
                        I.current = o;
                    });
                    let v = l.useCallback(() => {
                            h.current || ((h.current = !0), n(I.current), s("done"));
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
                            ((p.current = !0), v(), m.current?.blur());
                        }, [v]),
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
                        handleCommit: v,
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
                            let n = tj(t),
                                i = n?.getAttribute("aria-controls");
                            return null != i && null != e.closest(`#${i}`);
                        })(e, n.current),
                    [n],
                );
            l.useEffect(() => {
                if (!t) return;
                let e = n.current?.ownerDocument ?? document;
                function l(e) {
                    (0, tp.vq)(e.target) && !s(e.target) && i();
                }
                return (e.addEventListener("mousedown", l), () => e.removeEventListener("mousedown", l));
            }, [t, n, s, i]);
            let o = l.useCallback(
                (e) => {
                    if (!t) return;
                    let l = e.relatedTarget;
                    !(0, tp.vq)(l) || s(l) || (null == tj(n.current) && i());
                },
                [t, s, i, n],
            );
            return { isEditing: t, wrapperRef: n, handleCommit: i, ...r, onBlur: o };
        })({ value: h, onCommit: A }),
        v = !(0, ta.uJ)(x),
        j = (0, a.bG)([eb.A], () => eb.A.getErrors(f)),
        b = (0, tg.EC)(f),
        C = j.bio?.[0],
        E = b?.bio?.[0],
        S = l.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * tC.length)), tC[e]);
        }, []),
        N = g ? eU.intl.string(eU.t.yPJ9xr) : S.label();
    return !g || m
        ? (0, i.jsx)(tb, {
              ...I,
              className: d,
              preview: v ? (0, i.jsx)(to.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eU.intl.string(eU.t.lO3n7a),
              label: eU.intl.string(eU.t["YWo+Zd"]),
              emojiPickerIntention: ty.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: E,
          })
        : v
          ? (0, i.jsx)(to.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var tS = n(430626);
function tN(e) {
    let { currentUser: t, displayProfile: n, canEditInPlace: l } = e,
        { context: r } = (0, Q.NJ)(),
        s = n?.bio,
        a = !(0, ta.uJ)(s),
        o = n?.guildId != null,
        u = o && J.Ay.canUsePremiumProfileCustomization(t),
        d = u ? eU.intl.string(eU.t.jVai8N) : eU.intl.string(eU.t.ZzAR2Y),
        c = (0, J.TW)(t) ? eU.intl.string(eU.t["5AFxuK"]) : eU.intl.string(eU.t.N6ixy8),
        g = l && u ? { icon: ts.t, tooltip: c } : void 0;
    return (l || a) && (!l || !o || a || u)
        ? (0, i.jsx)(tc, {
              heading: d,
              hideHeading: !l,
              headingIcon: g,
              children: l
                  ? (0, i.jsx)(tE, { displayProfile: n, className: tS.u })
                  : (0, i.jsx)(to.A, { userBio: s, guildId: r?.guildId, setLineClamp: !1 }),
          })
        : null;
}
var tk = n(700058),
    tT = n(722868),
    tP = n(822775),
    tR = n(982985),
    tO = n(413737),
    t_ = n(34188),
    tL = n(815996),
    tw = n(993401);
function tD(e) {
    let { analyticsLocations: t, newestAnalyticsLocation: n } = (0, b.Ay)(),
        r = l.useCallback(() => {
            (0, tL.Cz)({ analyticsLocations: t, analyticsSource: n });
        }, [t, n]);
    return (0, i.jsx)(tw.q3, {
        action: "VISIT_SHOP",
        icon: t_.U,
        tooltipText: eU.intl.string(eU.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var tM = n(573355),
    tG = n(102951);
function tU(e) {
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
        } = (0, tG.J)({ userId: t.id }),
        h = f.length > 0 || m || p;
    return o === T.eA$.BLOCKED
        ? null
        : t.id === n.id
          ? d
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tR.e, { userId: t.id, variant: "primary", disabled: !0 }),
                        (0, i.jsx)(tD, {}),
                        (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tP.A, { user: t, guildId: l, onClose: u }),
                        (0, i.jsx)(tD, {}),
                        (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                    ],
                })
          : t.bot
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(tR.e, { userId: t.id, onClose: tk.A.popAll, autoFocus: !0 }),
                      (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tR.e, { userId: t.id, onClose: tk.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tO.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tR.e, { userId: t.id, onClose: tk.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tM.Ef, { user: t, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tR.e, { userId: t.id, onClose: tk.A.popAll, autoFocus: !0 }),
                            (0, i.jsx)(tM.ES, {
                                user: t,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    })
                  : (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tM.cO, {
                                variant: "primary",
                                userId: t.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, i.jsx)(tR.l, { userId: t.id, onClose: tk.A.popAll, variant: "secondary" }),
                            (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                        ],
                    });
}
var tF = n(463156),
    tW = n(866665),
    tB = n(28863),
    tV = n(509434),
    tH = n(307301),
    tz = n(666860),
    tY = n(874490),
    tK = n(968309),
    tq = n(174459),
    tX = n(486020),
    tZ = n(123917),
    t$ = n(783419);
let tJ = "User Profile Modal V2";
function tQ(e) {
    let t = ed.A.get(e);
    ((0, tK.A)({ platformType: t.type, location: tJ }),
        tq.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: tJ,
            current_step: "desktop oauth",
            platform_type: t.type,
        }));
}
function t0() {
    S.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: tQ, stackingBehavior: "stack" });
}
function t1(e) {
    let { account: t, locale: n, userId: l } = e,
        r = t.metadata ?? {},
        s = (0, er.An)(r[t$.pK.CREATED_AT], n),
        a = ed.A.get((0, tY.ML)(t.type));
    return (0, i.jsx)(t5, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, i.jsx)(tW.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, i.jsx)(ez.E, { variant: "text-sm/normal", className: ti.GW, children: t.name }),
                  })
                : (0, i.jsx)(tB.Anchor, {
                      href: e,
                      className: ti.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${t.name}, ${eU.intl.string(eU.t.q5jLJB)}`
                              : `${t.name}, ${eU.intl.string(eU.t.q5jLJB)}`,
                      onClick: (n) => {
                          ((0, tz.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, tZ.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, n));
                      },
                      children: (0, i.jsxs)("div", {
                          className: ti.vi,
                          children: [
                              (0, i.jsx)(tW.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, i.jsx)(ez.E, {
                                      variant: "text-sm/normal",
                                      className: ti.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, i.jsx)(tV.I, { size: "xs", color: "currentColor", className: ti.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return t.type === T.fg2.REDDIT
                ? (0, e8.xE)(r)
                : t.type === T.fg2.STEAM
                  ? (0, e8.dy)(r)
                  : t.type === T.fg2.LETTERBOXD
                    ? (0, e8.uq)(r)
                    : t.type === T.fg2.BLUESKY || t.type === T.fg2.MASTODON || t.type === T.fg2.TWITTER
                      ? (0, e8.ED)(r)
                      : t.type === T.fg2.PAYPAL
                        ? (0, e8.gZ)(r)
                        : t.type === T.fg2.EBAY
                          ? (0, e8.ub)(r)
                          : t.type === T.fg2.TIKTOK
                            ? (0, e8.HU)(r)
                            : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function t2(e) {
    let { identityWithApplication: t } = e,
        { identity: n, application: l } = t;
    if (null == n.profile || null == n.profile.username || null == l) return null;
    let r = tX.Ay.getApplicationIconURL({ id: l.id, icon: l.icon });
    return (0, i.jsx)(t5, {
        renderAccountName: function () {
            return (0, i.jsx)(tW.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, i.jsx)(ez.E, {
                    variant: "text-sm/normal",
                    className: ti.GW,
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
        className: ti.FI,
        children: [
            (0, i.jsx)(tW.m, {
                __unsupportedReactNodeAsText: l,
                children: (0, i.jsx)("div", {
                    className: ti.k_,
                    children: (0, i.jsx)("img", {
                        alt: eU.intl.formatToPlainString(eU.t.rtm15P, { name: l }),
                        className: s()(ti.tV, o ? ti.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: ti.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, i.jsx)(ez.E, {
                                    variant: "text-xs/normal",
                                    children: eU.intl.format(eU.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", { className: ti.yu, children: n() }),
                ],
            }),
        ],
    });
}
function t3(e) {
    let { connections: t, applicationIdentities: n, userId: l, allowEditing: r, className: o } = e,
        u = (0, a.bG)([es.default], () => es.default.locale);
    if (!r && 0 === t.length && 0 === n.length) return null;
    let d = t.length > 0 || n.length > 0;
    return (0, i.jsxs)("div", {
        className: s()(ti.kL, o),
        children: [
            d &&
                (0, i.jsxs)("ul", {
                    className: ti.V,
                    children: [
                        t.map((e) => (0, i.jsx)(t1, { account: e, userId: l, locale: u }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, i.jsx)(t2, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, i.jsxs)(e9.D, {
                    className: ti.qG,
                    onClick: t0,
                    children: [
                        (0, i.jsx)(tH.j, { size: "sm", color: "currentColor" }),
                        (0, i.jsx)(ez.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eU.intl.string(eU.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var t9 = n(193885),
    t7 = n(408278),
    t8 = n(23722);
let t6 = { id: "default" },
    t4 = l.createContext(null),
    ne = l.createContext(null);
function nt(e) {
    let { children: t } = e,
        [n, r] = l.useState(t6),
        [s, o] = l.useState(null),
        u = (0, t8.A)((e) => {
            r(e);
        }),
        d = l.useCallback(() => {
            r(t6);
        }, []),
        c = (0, a.bG)([y.default], () => J.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        g = c ? t6 : n,
        f = !c && s?.id === "premiumTryItOut",
        m = l.useCallback(() => {
            o(g);
        }, [g]),
        p = l.useMemo(
            () => ({ selectedPanel: g, readyPanel: s, handlePanelTransitionComplete: m, navigate: u, goBack: d }),
            [g, s, m, u, d],
        );
    return (0, i.jsx)(ne.Provider, { value: f, children: (0, i.jsx)(t4.Provider, { value: p, children: t }) });
}
function nn() {
    let e = l.useContext(ne);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function ni() {
    let {
        selectedPanel: e,
        readyPanel: t,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: r,
    } = (function () {
        let e = l.useContext(t4);
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
var nl = n(194261),
    nr = n(789645),
    ns = n(297264),
    na = n(62010),
    no = n(821609),
    nu = n(39623),
    nd = n(890377),
    nc = n(517461),
    ng = n(465794),
    nf = n(252732),
    nm = n(462887),
    np = n(765178),
    nh = n(736653),
    nx = n(461797),
    nA = n(469054),
    nI = n(601298),
    nv = n(207803);
function nj() {
    let e = (0, nh.Ay)(),
        t = (0, nm.q)(e),
        n = l.useCallback(
            (e) => {
                let n = (0, nx.Wt)(e);
                (0, nv.w5)({
                    banner: (0, nI.X)({
                        assetOrigin: nA.E.NEW_ASSET,
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
            eb.A.hasTryItOutChanges() || n((0, nx.B$)());
        }, [n]),
        l.useCallback(() => {
            let e = eb.A.getTryItOutChanges().tryItOutLastPreset,
                t = (0, nx.B$)(e),
                i = (0, nx.Wt)(t);
            (tq.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                np.O.announce(eU.intl.formatToPlainString(eU.t.M2Hj9s, { presetName: i.getName() })));
        }, [n])
    );
}
var nb = n(487233),
    nC = n(120386),
    ny = n(317097),
    nE = n(602853),
    nS = n(265872),
    nN = n(508274),
    nk = n(654107),
    nT = n(930349);
function nP(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nE.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nk.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, et.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: et.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, ny.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tf.p)({ accentColor: e }), []);
    return (0, i.jsx)(nS.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nN.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(nT.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                fieldA11yLabel: eU.intl.string(eU.t["/X3fkf"]),
                editButtonA11yLabel: eU.intl.string(eU.t.kRMJ1v),
                currentValueA11yLabel: (0, ny.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, ny.Hl)(c) } }),
            }),
    });
}
var nR = n(841183),
    nO = n(450373),
    n_ = n(317139);
function nL(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: n_.o, style: { backgroundColor: t } });
}
function nw(e) {
    let { src: t, imageDescription: n } = e;
    return (0, i.jsx)("img", { src: t, alt: n ?? "", className: n_._ });
}
function nD(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l, imageDescription: r } = e,
        s = (0, nE.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = t?.primaryColor ?? (0, ny.LX)(s),
        { hex: o } = (0, nO.A)(a),
        u = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != u ? (0, i.jsx)(nw, { src: u, imageDescription: r }) : (0, i.jsx)(nL, { backgroundColor: o });
}
function nM(e) {
    let {
        displayProfile: t,
        bannerChange: n,
        fieldA11yLabel: l = eU.intl.string(eU.t.yiRnNO),
        imageDescription: r,
        ...s
    } = e;
    return (0, i.jsx)(nT.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eU.intl.string(eU.t["W86r+Q"]),
        showOverlayOnHover: !0,
        renderPreview: (e) =>
            (0, i.jsx)(nD, { displayProfile: t, bannerChange: n, shouldAnimate: e, imageDescription: r }),
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
            currentValueA11yLabel: c,
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
                currentValueA11yLabel: (0, nR.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, eI.Ac)(u, g)
            ? {
                  onClick: () => (0, nf.rM)(null, g, (e) => (0, tf.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eU.intl.string(f ? eU.t.jHlJNS : eU.t.tT9n7D),
              }
            : void 0,
        p = (0, nG.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nM, {
        buttonRef: a,
        displayProfile: o,
        bannerChange: d,
        currentValueA11yLabel: c,
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
                ? (0, i.jsx)(ez.E, {
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
                : (0, i.jsx)(ez.E, { variant: nH, className: nV.kr, children: t }),
    });
}
function nY(e) {
    let {
        displayName: t,
        displayNameStyles: n,
        fieldA11yLabel: l = eU.intl.string(eU.t.vKBV4A),
        shouldAlwaysAnimate: r = !1,
        ...s
    } = e;
    return (0, i.jsx)(nT.A, {
        ...s,
        fieldA11yLabel: l,
        editButtonA11yLabel: eU.intl.string(eU.t.lsjENp),
        renderPreview: (e) => (0, i.jsx)(nz, { displayNameStyles: n, displayName: t, shouldAnimate: r || e }),
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
        } = (0, eI.B0)(t, n ?? void 0),
        A = d ? h : p,
        I = void 0 !== x,
        v = null === x,
        j = d && null != p,
        C = (0, eI.lw)({ pendingValue: x, userValue: p, guildValue: h, guildId: n ?? void 0 }),
        E = (0, eI.lw)({ pendingValue: d ? m : f, guildValue: c, userValue: g, guildId: n ?? void 0 }) ?? t.username,
        S = I ? null != x : null != A,
        N =
            null != C && S
                ? {
                      onClick: () => (0, tf.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(j ? eU.t.en3ogK : eU.t["Wqmi/h"]),
                  }
                : void 0,
        k = l.useCallback(() => {
            (o?.(), (0, nF.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nY, {
        affordance: (!v && (I || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        currentValueA11yLabel: (0, nR.I9)(C),
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
                    (0, i.jsx)(ns.D, {
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
function n$(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nX.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.E, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(ez.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var nJ = n(374654),
    nQ = n(366010),
    n0 = n(674658),
    n1 = n(617061),
    n2 = n(203632),
    n5 = n(536572);
let n3 = new Set(),
    n9 = 0;
var n7 = n(993408),
    n8 = n(841702),
    n6 = n(515718),
    n4 = n(195292);
function ie(e) {
    "" !== e.thumbnailPreviewSrc && (0, n6.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var it = n(599752),
    ii = n(249360);
let il =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    ir =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function is(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, nh.Ay)(),
        d = (0, nQ.M)(u) ? il : ir,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n8.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n7.wo)(r, i), [r, i]),
                a = (0, n4.A)({ enabled: t, isInteracting: n, items: s, preload: ie });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n9 += 1), n3.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: it.ti,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: it.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(it.yY, { [ii.O]: g }),
                        "aria-hidden": g,
                        children: (0, i.jsx)(_.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: n2.HL.FromStart,
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
function ia(e) {
    let { user: t, guildId: n, disabled: r, variant: s = "full-height-bar" } = e,
        o = l.useRef(null),
        { analyticsLocations: u } = (0, b.Ay)(),
        d = null != n,
        c = (0, a.bG)([K.A], () => (null != n ? K.A.getGuild(n) : null)),
        g = (0, eI.N2)({ user: t }),
        f = (0, eI.N2)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileEffect: m } = (0, eI.nZ)(n ?? void 0),
        p = void 0 !== m,
        h = null === m || (!p && null == f),
        x = d && null != g,
        A = (0, eI.lw)({ pendingValue: m, userValue: g, guildValue: f, guildId: n ?? void 0 }),
        { product: I } = (0, n0.q)(A?.skuId),
        v = p ? null != m : null != f,
        j =
            null != A && v
                ? {
                      onClick: () => (0, tf.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(x ? eU.t["SQy/Po"] : eU.t.uMuafO),
                  }
                : void 0,
        C = l.useCallback(() => {
            (0, n1.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(nT.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : j,
        variant: s,
        onClick: C,
        fieldA11yLabel: eU.intl.string(eU.t.wR5wOo),
        editButtonA11yLabel: eU.intl.string(eU.t["/6nv6N"]),
        currentValueA11yLabel: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t["1M4m8w"] : eU.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, n5.VG)(I), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(is, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var io = n(163697),
    iu = n(515727),
    id = n(746002);
function ic(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, id.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: id.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, n6.NN)(n).catch(() => {});
        });
}
var ig = n(715196);
function im(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function ip(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, nh.Ay)(),
        d = (0, nQ.M)(u) ? il : ir,
        c = (0, w.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n8.Ay)({ stalePurchasesOK: !0, skipFetch: !t }),
                s = l.useMemo(() => (0, n7.MG)(r, i), [r, i]);
            return (0, n4.A)({ enabled: t, isInteracting: n, items: s, preload: ic });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, io.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(ig.hm, h, { [ii.O]: f }),
                    style: p,
                    "aria-hidden": f,
                    children: (0, i.jsx)(M.A, { frame: m, filterLayer: im, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(ig.ti, { [ig.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: ig.QQ, draggable: !1 }),
            }),
        ],
    });
}
function ih(e) {
    let { user: t, guildId: n, disabled: r } = e,
        s = l.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        u = null != n,
        d = (0, a.bG)([K.A], () => (null != n ? K.A.getGuild(n) : null)),
        c = (0, eI.Xf)({ user: t }),
        g = (0, eI.Xf)({ user: t, guildId: n ?? void 0 }),
        { pendingProfileFrame: f } = (0, eI.Tu)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        h = u && null != c,
        x = (0, eI.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: A } = (0, n0.q)(x?.skuId),
        I = m ? null != f : null != g,
        v =
            null != x && I
                ? {
                      onClick: () => (0, tf.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(h ? eU.t.j6hZyM : eU.t.nQBruk),
                  }
                : void 0,
        j = l.useCallback(() => {
            (0, iu.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(nT.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : v,
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
        })({ profileFramePreview: x, productName: (0, n5.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(ip, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ix = n(684732),
    iA = n(498596),
    iI = n(871524);
function iv(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, ny.Hl)(t)}, ${(0, ny.Hl)(n)})`;
    return (0, i.jsx)("div", { className: iI.D7, style: { background: r }, children: l });
}
function ij(e) {
    let { color: t } = e,
        n = (0, ny.Hl)(t),
        l = (0, ny.bJ)(t, 0xffffff) < iA.Tr.NonText;
    return (0, i.jsx)("div", {
        className: iI.OS,
        children: (0, i.jsx)("div", { className: s()(iI.Hy, { [iI.rY]: l }), style: { backgroundColor: n } }),
    });
}
function ib(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e9.D, {
        ...a,
        innerRef: s ?? o,
        className: iI.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(ij, { color: t }),
    });
}
function iC(e) {
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
    return (0, i.jsx)(nS.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestOpen: o,
        onRequestClose: u,
        renderPopout: (e) => (0, i.jsx)(nN.VN, { ...e, value: t, onChange: d, suggestedColors: r, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: r, ...a } = e;
            return (0, i.jsx)(ib, {
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
function iy(e) {
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
        [m, p] = l.useState(null),
        h = l.useRef(null),
        x = l.useRef(null),
        A = (0, ny.Hl)(n),
        I = (0, ny.Hl)(r),
        v = l.useId(),
        j = l.useId();
    l.useEffect(() => {
        if (null == g) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === g ? h : x;
            (e.current?.focus(), p(g));
        });
        return () => cancelAnimationFrame(e);
    }, [g]);
    let b =
        null != d
            ? {
                  ...d,
                  onClick: () => {
                      (d.onClick(), h.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsxs)(nT.Y, {
        fieldA11yLabel: t,
        variant: c,
        disabled: u,
        deleteButton: b,
        children: [
            (0, i.jsx)(f.A, { id: v, children: eU.intl.formatToPlainString(eU.t.v4X2kc, { colorHex: A }) }),
            (0, i.jsx)(f.A, { id: j, children: eU.intl.formatToPlainString(eU.t.I0tmru, { colorHex: I }) }),
            (0, i.jsxs)(iv, {
                primaryColor: n,
                secondaryColor: r,
                children: [
                    (0, i.jsx)(iC, {
                        color: n,
                        ariaLabel: eU.intl.string(eU.t["1PvTpO"]),
                        ariaDescribedBy: v,
                        suggestedColors: o,
                        onSelect: s,
                        disabled: u,
                        isOpen: "theme-primary" === m,
                        onRequestOpen: () => p("theme-primary"),
                        onRequestClose: () => p(null),
                        buttonRef: h,
                    }),
                    (0, i.jsx)(iC, {
                        color: r,
                        ariaLabel: eU.intl.string(eU.t.stG76C),
                        ariaDescribedBy: j,
                        suggestedColors: o,
                        onSelect: a,
                        disabled: u,
                        isOpen: "theme-secondary" === m,
                        onRequestOpen: () => p("theme-secondary"),
                        onRequestClose: () => p(null),
                        buttonRef: x,
                    }),
                ],
            }),
        ],
    });
}
function iE(e) {
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
        g = (0, ev.V7)({ userId: t.id, image: d }),
        { primaryColor: f, secondaryColor: m } = (0, ea.A)({
            user: t,
            displayProfile: s,
            pendingThemeColors: u,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, nE.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nk.rh)(x, p, !1),
        I = l.useCallback(
            (e) => {
                (0, tf.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, ix.l)(u, o)
                ? {
                      onClick: () => (0, tf.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eU.intl.string(eU.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(iy, {
              fieldA11yLabel: eU.intl.string(eU.t.DMeO2X),
              primaryColor: f,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && I([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && I([f, e]);
              },
              suggestedColors: A,
              disabled: r,
              deleteButton: v,
          });
}
var iS = n(629985);
function iN(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(iS.k, { [iS.V]: n }), children: t }) });
}
var ik = n(689175),
    iT = n(424290);
function iP(e) {
    let { children: t } = e;
    return (0, i.jsx)(ik.zC, { className: iT.X, children: (0, i.jsx)("div", { className: iT.Q, children: t }) });
}
var iR = n(732280),
    iO = n(811611),
    i_ = n(976860),
    iL = n(38145);
function iw() {
    return l.useCallback(() => {
        ((0, i_.pX)(T.BVt.NITRO_HOME), (0, iL.M)());
    }, []);
}
var iD = n(724651),
    iM = n(511484),
    iG = n(202541);
function iU(e) {
    let t = (0, a.bG)([y.default], () => J.Ay.isPremium(y.default.getCurrentUser())),
        n = (0, iD.O)();
    return t
        ? eU.intl.string(eU.t.AfRWI8)
        : (0, iM.U9)(n, iG.pe.TIER_2) && n?.discount.amount != null
          ? eU.intl.formatToPlainString(eU.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iF = n(155053);
function iW() {
    let e = (0, iR.V)();
    return e?.subscriptionTrial?.skuId === iG.pe.TIER_2 ? e : null;
}
function iB() {
    let e = iU(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(ng.A, { subscriptionTier: iG.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iV(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iw(),
        a = (0, J.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, iO.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iF.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iF.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eU.intl.string(eU.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(na.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(ez.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eU.intl.format(eU.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(ng.A, {
                subscriptionTier: iG.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(ez.E, { variant: "text-xs/normal", color: "text-muted", className: iF.u8, children: o }),
        ],
    });
}
function iH() {
    let e = iW();
    return null == e ? (0, i.jsx)(iB, {}) : (0, i.jsx)(iV, { trialOffer: e });
}
var iz = n(55619),
    iY = n(848717);
function iK() {
    return (0, i.jsxs)("div", {
        className: iY.k,
        children: [
            (0, i.jsx)(ez.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eU.intl.string(eU.t.JFY17v),
            }),
            (0, i.jsx)(no.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eU.intl.string(eU.t.R9GHya),
                onClick: function () {
                    return iz.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iq = n(342866),
    iX = n(968475);
function iZ(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iq.A, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["nP3V/U"]),
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        currentValueA11yLabel: (0, nR.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? iX.$T : void 0,
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
                : (0, nR.ID)(u, o);
    return (0, i.jsx)(nM, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["1SrATP"]),
        currentValueA11yLabel: c,
        imageDescription: d,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
    });
}
function iJ(e) {
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
        d = (0, eI.lw)({ pendingValue: s, userValue: o }) ?? t.username;
    return (0, i.jsx)(nY, {
        ...n,
        fieldA11yLabel: eU.intl.string(eU.t["3XtTTE"]),
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        currentValueA11yLabel: (0, nR.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
function iQ(e) {
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
        r = (0, ev.V7)({ userId: e.id, image: void 0 !== i ? i : l }),
        { primaryColor: s, secondaryColor: o } = (0, ea.A)({
            user: e,
            displayProfile: t,
            pendingThemeColors: n,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: n };
}
function i0(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = iQ(t),
        u = (0, nE.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nk.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, nv.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iy, {
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
function i1(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: r } = e,
        { primaryColor: s, secondaryColor: a } = iQ(t),
        o = l.useId(),
        u = l.useId();
    if (null == s || null == a) return null;
    let d = (0, ny.Hl)(s),
        c = (0, ny.Hl)(a);
    return (0, i.jsxs)(nT.Y, {
        fieldA11yLabel: eU.intl.string(eU.t["/WsW/1"]),
        variant: "full-height-bar",
        children: [
            (0, i.jsx)(f.A, { id: o, children: eU.intl.formatToPlainString(eU.t.v4X2kc, { colorHex: d }) }),
            (0, i.jsx)(f.A, { id: u, children: eU.intl.formatToPlainString(eU.t.I0tmru, { colorHex: c }) }),
            (0, i.jsxs)(iv, {
                primaryColor: s,
                secondaryColor: a,
                children: [
                    (0, i.jsx)(ib, {
                        color: s,
                        onClick: n,
                        "aria-label": eU.intl.string(eU.t["1PvTpO"]),
                        "aria-describedby": o,
                    }),
                    (0, i.jsx)(ib, {
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
var i2 = n(847081);
function i5(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = ni(),
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
            className: i2.T,
            children: [
                (0, i.jsx)(nZ, {
                    heading: eU.intl.string(eU.t.NEzEws),
                    children: (0, i.jsx)(iJ, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nZ, {
                    heading: eU.intl.string(eU.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(i0, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(i1, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(nZ, {
                    heading: eU.intl.string(eU.t.Vgdusv),
                    children: (0, i.jsx)(i$, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nZ, {
                    heading: eU.intl.string(eU.t.Dt3ZUr),
                    children: (0, i.jsx)(iZ, {
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
var i3 = n(847374),
    i9 = n(111159),
    i7 = n(548118),
    i8 = n(711014),
    i6 = n(649998),
    i4 = n(561392),
    le = n(499957),
    lt = n(15626),
    ln = n(715022),
    li = n(44482),
    ll = n(470791);
function lr(e) {
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
            floatingStyles: I,
            getReferenceProps: v,
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
                } = (0, i4.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, le.DL)(o, {
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
        y = l.useContext(lt._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        T = l.useRef(null),
        [P, R] = l.useState(null),
        O = null != P ? (0, ln.ZN)(N, P) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, ln.fI)(e.value, [n])), [n, t]),
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
                if (!T.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (h && null != P) {
                        let e = t[P];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    h && x(!1);
                }
            },
            [h, P, t, r, x],
        ),
        F = l.useCallback(
            (e) => {
                if (d) return;
                let t = e[0];
                null != t && (r(t.value), G());
            },
            [d, r, G],
        ),
        { activeIndex: W, handleKeyDown: B } = (0, i6.l)(!0, t),
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
                        if (!h) return void x(!0);
                        R((e) => (null === e ? 0 : Math.max(e - i, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !h)) return void x(!0);
                        if (null == P || P > n - 1) return;
                        {
                            let e = t[P];
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
                        if (h && null != P) {
                            let e = t[P];
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
            [d, h, t, P, F, G, r, x, B],
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
            ((T.current = e), A.setReference(e));
        },
        className: o,
        ...v(),
        children: [
            null != a && (0, i.jsx)(f.A, { tag: "label", id: E, htmlFor: S, children: a }),
            p({ buttonRef: k, selectButtonProps: K }),
            !d &&
                h &&
                (0, i.jsx)("div", {
                    ref: C,
                    className: s()(ll.S_, u),
                    ...j(),
                    style: { ...I, ...b },
                    children: (0, i.jsx)(i6.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: P,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(li.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var ls = n(216384);
let la = "MAIN_PROFILE";
function lo(e) {
    let { guild: t } = e;
    return (0, i.jsx)(i7.Ay, { className: ls.$f, guild: t, size: i7.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function lu(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: ls.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: ls.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: ls.qL,
                children: [
                    (0, i.jsx)(ez.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != l &&
                        "" !== l &&
                        (0, i.jsx)(ez.E, {
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
function ld(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e9.D, {
        innerRef: r,
        className: s()(ls.L5, { [ls.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(ez.E, {
                variant: "text-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: ls.v9,
                children: n,
            }),
            (0, i.jsx)(i3.a, {
                className: ls.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lc(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([i8.Ay], () => i8.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([K.A], () => K.A.getGuilds()),
        c = (0, a.bG)([tt.A], () => {
            let e = tt.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ej.Ay, i8.Ay], () => {
            let e = {};
            for (let t of i8.Ay.getFlattenedGuildIds()) {
                let n = ej.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: la,
                    label: eU.intl.string(eU.t["2p07FR"]),
                    value: la,
                    leading: (0, i.jsx)(i9.p, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(lo, { guild: n }),
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
                          leading: (0, i.jsx)(lo, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? la,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === la ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(lr, {
        className: ls.kL,
        label: eU.intl.string(eU.t.rki38K),
        listboxClassName: ls.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(lu, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(ld, { leading: p.value === la ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lg = n(288490);
let lf = "profile-editing-nameplate-error",
    lm = "profile-editing-avatar-error",
    lp = "profile-editing-avatar-decoration-error",
    lh = "profile-editing-banner-error",
    lx = "profile-editing-display-name-style-error";
function lA(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lg.D0, t),
        children: (0, i.jsx)("div", { className: lg.ZN, children: (0, i.jsx)(nl.LockIcon, { size: "xs" }) }),
    });
}
function lI() {
    let [e, t] = (0, nc.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lg.X6,
              children: [
                  (0, i.jsx)(ez.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eU.intl.string(eU.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e9.D, {
                      "aria-label": eU.intl.string(eU.t.rSe9ra),
                      className: lg.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(nr.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lv() {
    let e = iw(),
        t = iU(eU.intl.string(eU.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lg.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lg.tm,
                children: [
                    (0, i.jsx)(ns.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eU.intl.string(eU.t.bO0TOe),
                    }),
                    (0, i.jsx)(ez.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eU.intl.format(eU.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, i.jsx)(ng.A, { subscriptionTier: iG.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lA, { className: lg.nd }),
        ],
    });
}
function lj() {
    return (0, i.jsx)(ez.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: lg.BJ,
        "aria-hidden": !0,
        children: eU.intl.format(eU.t.kYv9DM, {
            nitroIconHook: () => (0, i.jsx)(ts.t, { size: "xxs", color: "currentColor", className: lg.qp }),
        }),
    });
}
function lb(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(nZ, {
        heading: eU.intl.string(eU.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(nJ.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lf : void 0 }),
            (0, i.jsx)(n$, { id: lf, message: r }),
        ],
    });
}
function lC(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(nZ, {
        heading: eU.intl.string(eU.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nb.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lm : void 0 }),
            (0, i.jsx)(nC.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lp : void 0 }),
            (0, i.jsx)(n$, { id: lm, message: (0, nf.d3)(r) }),
            (0, i.jsx)(n$, { id: lp, message: s }),
        ],
    });
}
function ly(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        [s, a] = (0, eM.kn)(l ? [] : [eT.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE]),
        o = s === eT.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, i.jsxs)(nZ, {
        heading: eU.intl.string(eU.t.NEzEws),
        disabled: l,
        showNitroIcon: !0,
        badge: o
            ? (0, i.jsx)("div", {
                  className: lg.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(na.E, { type: "new", variant: "primary" }),
              })
            : void 0,
        children: [
            (0, i.jsx)(nK, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lx : void 0,
                onOpen: o ? () => a(eG.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(n$, { id: lx, message: r }),
        ],
    });
}
function lE(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(nZ, {
        heading: eU.intl.string(eU.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(iE, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nU, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lh : void 0 }),
            (0, i.jsx)(n$, { id: lh, message: (0, nf.d3)(s) }),
        ],
    });
}
function lS(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(nZ, {
        heading: eU.intl.string(eU.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nP, { user: t, disabled: n }),
    });
}
function lN(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(nZ, {
        heading: eU.intl.string(eU.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(ia, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(ih, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lk = "premium-try-it-out-description";
function lT(e) {
    let { user: t } = e,
        n = iw(),
        { navigate: l } = ni();
    return (
        nj(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lk,
            className: lg.DX,
            children: [
                (0, i.jsx)(lA, { className: lg.x$ }),
                (0, i.jsxs)("div", {
                    className: lg.sb,
                    children: [
                        (0, i.jsx)(ez.E, {
                            id: lk,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eU.intl.format(eU.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(no.$, {
                            variant: "primary",
                            size: "sm",
                            icon: nu.EyeIcon,
                            text: eU.intl.string(eU.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(i5, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lP(e) {
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
        f = (0, t8.A)(c),
        m = null != l,
        p = J.Ay.canUsePremiumProfileCustomization(t),
        h = m && !p,
        x = !p && !m,
        A = m && !p && !g,
        I = s || o,
        v = (0, a.bG)([eb.A], () => eb.A.getErrors(l)),
        j = v.nameplate?.[0] ?? v.nameplate_sku_id?.[0],
        b = v.avatar?.[0],
        C = v.avatar_decoration_sku_id?.[0],
        y = v.banner?.[0],
        E = v.display_name_font_id?.[0] ?? v.display_name_effect_id?.[0] ?? v.display_name_colors?.[0];
    return (0, i.jsxs)(iN, {
        hasGradientBackground: A,
        children: [
            (0, i.jsxs)("div", {
                className: lg.wx,
                children: [
                    (0, i.jsx)(tW.m, {
                        text: eU.intl.string(eU.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t7.K, {
                            buttonRef: u,
                            "aria-label": eU.intl.string(eU.t["l/A351"]),
                            icon: nd.V,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lc, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(iK, {})
                : (0, i.jsx)(iP, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(lI, {}) : (0, i.jsx)(lv, {})),
                              p && (0, i.jsx)(lj, {}),
                              (0, i.jsx)(lb, { user: t, guildId: l, disabled: I || h, errorMessage: j }),
                              (0, i.jsx)(lC, {
                                  user: t,
                                  guildId: l,
                                  disabled: I || h,
                                  avatarErrorMessage: b,
                                  avatarDecorationErrorMessage: C,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(ly, { user: t, guildId: l, disabled: I || h, errorMessage: E }),
                                            (0, i.jsx)(lE, {
                                                user: t,
                                                guildId: l,
                                                disabled: I || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: y,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lS, { user: t, disabled: I || h }),
                              (0, i.jsx)(lN, { user: t, guildId: l, disabled: I || h }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lT, { user: t }), (0, i.jsx)(iH, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var lR = n(941143),
    lO = n(110654);
function l_(e) {
    return null;
}
function lL(e) {
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
        className: s()(lO.kL, h && lO.ez),
        children: (0, i.jsx)("div", {
            className: lO.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          lR.animated.div,
                          {
                              className: lO.M6,
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
var lw = n(926321),
    lD = n(477155),
    lM = n(561243),
    lG = n(206697),
    lU = n(280406);
let lF = "shuffle-options-a11y-description";
function lW(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(no.$, {
                icon: lw.DiceIcon,
                text: eU.intl.string(eU.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lF,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: lF, children: eU.intl.string(eU.t.bBRdiB) }),
        ],
    });
}
function lB(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = nj(),
        s = iW();
    return (0, i.jsxs)(iN, {
        children: [
            (0, i.jsxs)("div", {
                className: lU.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lU.FS,
                        children: (0, i.jsx)(tW.m, {
                            text: eU.intl.string(eU.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(t7.K, {
                                buttonRef: l,
                                "aria-label": eU.intl.string(eU.t["4IYwrw"]),
                                icon: lD.r,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(ns.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: lU.R_,
                        children: eU.intl.string(eU.t.PxUx8e),
                    }),
                    (0, i.jsx)(ez.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: lU.Ij,
                        children: eU.intl.string(eU.t.X0ir7L),
                    }),
                    (0, i.jsx)(lW, { className: lU.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iP, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i5, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iV, {
                                trialOffer: s,
                                onSubscribeClick: lG.t,
                                onSubscribeSuccess: lG.T,
                                onSubscribeClose: lM.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lV = n(199016);
let lH = "user-profile-editing-panel",
    lz = "profile-modal-editing-panel-heading";
function lY(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tW.m, {
        text: eU.intl.string(eU.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e9.D, {
            innerRef: l,
            "aria-label": eU.intl.string(eU.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lH,
            className: s()(lV.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t9.V, { size: "sm", color: "currentColor" }),
        }),
    });
}
function lK(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tW.m, {
            text: eU.intl.string(eU.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(t7.K, {
                buttonRef: l,
                "aria-label": eU.intl.string(eU.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": lH,
                icon: t9.V,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function lq(e) {
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
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = ni(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)("aside", {
              id: lH,
              "aria-labelledby": lz,
              className: s()(lV.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lV.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: lz, children: eU.intl.string(eU.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lL, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(l_, {
                                  id: "default",
                                  children: (0, i.jsx)(lP, {
                                      panelId: lH,
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
                              (0, i.jsx)(l_, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lB, { user: p, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var lX = n(425763),
    lZ = n(447453),
    l$ = n(280450),
    lJ = n(783420),
    lQ = n(874402);
function l0() {
    let e = nn(),
        { goBack: t } = ni(),
        n = iU(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(lJ.A, {
        subscriptionTier: iG.pe.TIER_2,
        onClick: lG.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lG.T)(), (0, lM.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(lQ.$, {
                isVisible: e,
                labelId: "premium-try-it-out-footer-bar-label",
                noticeText: eU.intl.string(eU.t.X0ir7L),
                a11yAnnounceOnShow: eU.intl.string(eU.t.X0ir7L),
                a11yAnnounceOnHide: eU.intl.string(eU.t.ZcyFYa),
                secondaryAction: { text: eU.intl.string(eU.t.V3S9WW), onClick: t },
                primaryAction: { text: n, onClick: r, icon: ts.t, variant: "expressive" },
            });
        },
    });
}
var l1 = n(803306),
    l2 = n(631670),
    l5 = n(682618),
    l3 = n(38405);
async function l9(e) {
    let { displayOrder: t, hiddenBadges: n } = e,
        i = { ...(null != t ? { display_order: t } : {}), ...(null != n ? { hidden_badges: n } : {}) };
    if (0 === Object.keys(i).length) return !0;
    try {
        return (await E.Bo.patch({ url: T.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0);
    } catch (e) {
        return (l3.A.captureException(e), !1);
    }
}
var l7 = n(234e3),
    l8 = n(159001),
    l6 = n(933725),
    l4 = n(625494),
    re = n(56348),
    rt = n(646976),
    rn = n(289173),
    ri = n(958805),
    rl = n(61881),
    rr = n(735321),
    rs = n(624826),
    ra = n(915725),
    ro = n(614584),
    ru = n(132319),
    rd = n(696016);
async function rc(e, t) {
    try {
        await (0, ro.Yy)(e, { name: t });
    } catch (e) {
        rd.nx.warn(`Failed to sync profile clip title to the library: ${e}`);
    }
}
var rg = n(384377),
    rf = n(518477);
function rm(e) {
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
            let e = (0, a.yK)([rl.A], () => rl.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rl.A], () => rl.A.getChangedWidgets()),
                n = (0, a.yK)([rl.A], () => rl.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rl.A], () => ({
                    hasUnsavedWidgets: rl.A.hasUnsavedChanges(),
                    canSaveWidgets: rl.A.canSaveChanges(),
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
            hasBadgeChangesToSave: (0, l7.gz)(eb.A.getPendingChanges()),
        })),
        I = p && h,
        v = f || I || A,
        j = !(f && !m) && (!p || x),
        b = l.useCallback(() => {
            (ri.A.clearPendingWidgets(), p ? (0, nv.XQ)() : A && (0, l7.Jp)());
        }, [p, A]),
        C = l.useCallback(async () => {
            if (p && !eb.A.canSubmit()) return;
            u(!0);
            let e = !0;
            if (A) {
                let t = eb.A.getPendingChanges(),
                    n = await l9({
                        displayOrder: t.pendingBadgeDisplayOrder,
                        hiddenBadges: t.pendingBadgeHiddenBadges,
                    });
                if (n) {
                    let e = y.default.getCurrentUser()?.id;
                    (null != e && (await (0, l1.eO)(e).catch(() => {})), await (0, l5.RS)(), (0, l7.Jp)());
                }
                e = n;
            }
            if (I)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, re.Sk)(t),
                            i = (0, re.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, l2._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, rs.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l2.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, nv.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, nv.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, re.C5)(n),
                            l = (0, re.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, l8.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, rs.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l2.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, nv.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, nv.RE)());
                        }
                    }
                    let n = (0, re.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, l6.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, l2.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    let e = (0, rr.BF)();
                    for (let t of (await ri.A.savePendingWidgets(d), c)) {
                        let i = { widgetEdited: t.type, isWidgetRemoved: !1 };
                        if ((0, rn.fu)(t))
                            ((i.gameIds = t.games.map((e) => e.gameId)),
                                (i.tags = t.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                                (i.numCharactersCommentary = t.games.reduce(
                                    (e, t) => e + (t.comment?.length ?? 0),
                                    0,
                                )));
                        else if (t instanceof rt.kM)
                            for (let { localClipId: n, name: l } of ((i.gameIds = t.clips.map((e) => e.gameId)),
                            (i.tags = t.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                            (function (e, t) {
                                let n = e.find((e) => e instanceof rt.kM),
                                    i = new Map(n?.clips.map((e) => [e.id, e.title])),
                                    l = [];
                                for (let e of t.getUploadedClips()) {
                                    if (null == e.localClipId || ("saved" === e.status && i.get(e.id) === e.title))
                                        continue;
                                    let t = ra.Ay.getClipById(e.localClipId);
                                    null != t &&
                                        ((null == e.title
                                            ? null == t.name || "" === t.name
                                            : (0, ru.l)(t) === e.title) ||
                                            l.push({ localClipId: e.localClipId, name: e.title }));
                                }
                                return l;
                            })(e, t)))
                                rc(n, l);
                        n(i);
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, l2.x8)() : (0, rg.XA)(rf.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
        }, [p, I, A, f, d, c, g, n, t]);
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
                l4._.subscribe(T.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (l4._.unsubscribe(T.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(lQ.$, {
            preventsPopoutDismiss: !0,
            isVisible: v,
            labelId: "user-profile-save-reset-toolbar-label",
            noticeText: eU.intl.string(eU.t["/lQiX/"]),
            isEmphasized: r,
            a11yAnnounceOnShow: eU.intl.string(eU.t["0Y/qkL"]),
            secondaryAction: { text: eU.intl.string(eU.t.yBZMsQ), onClick: b, disabled: !v || o },
            primaryAction: { text: eU.intl.string(eU.t["R3BPH+"]), onClick: C, loading: o, disabled: !j || !v },
        })
    );
}
var rp = n(485745),
    rh = n(893757);
function rx() {
    let e = !(0, en.X)("useEditingFooterState"),
        t = (0, lX.VU)(),
        n = (0, rp.A)(e),
        i = nn();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function rA(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([l$.default], () => l$.default.getId() === t),
        u = rx(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rh.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(lZ.S, { className: rh.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(l0, {})
                        : "save" === d
                          ? (0, i.jsx)(rm, { guildId: n })
                          : null,
          })
        : null;
}
var rI = n(347805),
    rv = n(34011),
    rj = n(629403),
    rb = n(612630),
    rC = n(61426);
function ry(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rb.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await rj.A.updateNote(t, e);
                    } catch {
                        p(eU.intl.string(eU.t.F8FvUy));
                    }
                }
            },
            [t, c, o],
        ),
        A = d && null == h,
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
        null != h && h.length > 0
            ? (0, i.jsx)(ez.E, { variant: "text-sm/normal", color: "text-default", className: rC.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tx.kL, n),
        children: (0, i.jsx)(rv.w, {
            inputRef: I,
            value: h ?? "",
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
            maxLength: T.T7x,
            disabled: A,
            error: m,
        }),
    });
}
var rE = n(793222);
function rS(e) {
    let { userId: t } = e,
        n = (0, eN.g)(),
        { trackUserProfileAction: l } = (0, Q.NJ)(),
        r = (0, en.X)("UserProfileModalV2NotesSection"),
        s = r ? ry : rI.A;
    return (0, i.jsx)(tc, {
        heading: eU.intl.string(eU.t["mQKv+v"]),
        scrollTargetId: rf.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rE.N : rE.w,
            autoFocus: n === rf.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rN = n(123292),
    rk = n(667242);
function rT(e) {
    let { icon: t, message: n, actionLabel: r, onAction: s, actionDisabled: a, type: o, autoFocus: u } = e,
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            u && d.current?.focus();
        }, [u]),
        (0, i.jsx)("div", {
            className: rk.kL,
            children: (0, i.jsxs)("div", {
                className: rk.Qs,
                "data-type": o,
                children: [
                    (0, i.jsx)("div", { className: rk.Kk, children: t }),
                    (0, i.jsx)(ez.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, i.jsx)("div", {
                            className: rk.hP,
                            children: (0, i.jsx)(rN.Q, {
                                buttonRef: d,
                                variant: "primary",
                                textVariant: "text-sm/semibold",
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
var rP = n(346055),
    rR = n(289873),
    rO = n(615019);
function r_(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && np.O.announce(eU.intl.string(eU.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rP.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rO.f, t && rO.z),
                    children: n && (0, i.jsx)(rR.y, { type: rR.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rL = n(568602);
function rw(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rl.A, eb.A], () => rl.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                l4._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    l4._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rL.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var rD = n(761508),
    rM = n(498032),
    rG = n(945810),
    rU = n(710195);
let rF = { enabled: !1 },
    rW = { 0: rF, 1: { enabled: !0 } },
    rB = (0, rG.mj)({
        name: "2026-10-profile-default-tab-with-content",
        kind: "user",
        defaultConfig: rF,
        variations: rW,
    });
function rV(e) {
    let { location: t } = e;
    return (rB.useConfig({ location: t }), null);
}
var rH = n(695904),
    rz = n(573238),
    rY = n(107563),
    rK = n(517164),
    rq = n(290863),
    rX = n(461213),
    rZ = n(146655),
    r$ = n(489379);
function rJ(e) {
    let { user: t, currentUser: n, displayProfile: i, guildId: l } = e,
        { live: r, recent: s, stream: o } = (0, rZ.A)(t.id),
        { voiceChannel: u, voiceActivity: d } = (0, r$.A)({ userId: t.id, guildId: l }),
        c = (0, a.bG)([rK.A], () => rK.A.isFetchingUserOutbox(t.id)),
        g = t.id === n.id,
        f = (0, a.bG)([rX.A, rq.A], () => {
            let e = g ? rX.A.getStatus() : rq.A.getStatus(t.id);
            return e === T.clD.OFFLINE || e === T.clD.INVISIBLE;
        }),
        m = r.length > 0 || null != o,
        p = i?.private !== !0 && null == o && null == d && null != u,
        h = s.length > 0;
    return {
        live: r,
        recent: s,
        stream: o,
        voiceActivityChannel: p ? u : null,
        isFetching: c,
        isCurrentUser: g,
        hasCurrentActivity: !f && (m || p),
        hasRecentActivity: h,
    };
}
var rQ = n(114212),
    r0 = n(975571),
    r1 = n(402857),
    r2 = n(353394),
    r5 = n(842241),
    r3 = n(986712),
    r9 = n(435558),
    r7 = n(534890),
    r8 = n(308528),
    r6 = n(780964),
    r4 = n(766075),
    se = n(92795);
let st = [
        () => eU.intl.string(eU.t.madJdE),
        () => eU.intl.string(eU.t.NYmfoP),
        () => eU.intl.string(eU.t.R2PaCg),
        () => eU.intl.string(eU.t.laSR8h),
        () => eU.intl.string(eU.t.DnsJE8),
    ],
    sn = [
        () => eU.intl.string(eU.t.nFSbeE),
        () => eU.intl.string(eU.t.gTcxOz),
        () => eU.intl.string(eU.t["8T0wYj"]),
        () => eU.intl.string(eU.t.BIHl1g),
        () => eU.intl.string(eU.t["jhBm0+"]),
    ],
    si = [
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
    sl = [
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
function sr(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: se.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: se.FS,
                children: [
                    (0, i.jsx)(ns.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(ez.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function ss() {
    let e = eU.intl.string(eU.t.RnD2yZ),
        [t] = l.useState(() => ((0, r9.sample)(st) ?? st[0])());
    return (0, i.jsx)(sr, { heading: e, bodyText: t });
}
function sa() {
    let e = eU.intl.string(eU.t.bFgqYJ),
        [t] = l.useState(() => ((0, r9.sample)(sn) ?? sn[0])());
    return (0, i.jsx)(sr, { heading: e, bodyText: t });
}
function so(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = Z.Ay.getName(n, r, t),
        o = eU.intl.formatToPlainString(eU.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, r9.sample)(si) ?? si[0])(a)),
        d = l.useCallback(() => {
            (r8.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(sr, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: se.v0,
            children: (0, i.jsx)(tw.FD, { icon: r7.ChatIcon, text: eU.intl.string(eU.t["g33r/P"]), onClick: d }),
        }),
    });
}
function su() {
    let e = (0, nh.Ay)();
    return (0, i.jsx)("div", {
        className: se.HU,
        children: sl.map((t, n) => {
            let l = ed.A.get(t);
            if (null == l) return null;
            let r = (0, nQ.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: se.gj }, n);
        }),
    });
}
function sd(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, r4.openUserSettings)(r6.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, r4.openUserSettings)(r6.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(sr, {
        heading: eU.intl.string(eU.t.VB6LWY),
        bodyText: eU.intl.string(eU.t.KpjsU9),
        children: [
            (0, i.jsx)(su, {}),
            (0, i.jsxs)("div", {
                className: se.v0,
                children: [
                    (0, i.jsx)(tw.FD, { text: eU.intl.string(eU.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tw.FD, { text: eU.intl.string(eU.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var sc = n(131058);
function sg(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(sc.gN, n), fade: !0, ...r, children: t });
}
var sf = n(587763);
function sm(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: a } = e,
        {
            live: o,
            recent: u,
            stream: d,
            voiceActivityChannel: c,
            isFetching: g,
            isCurrentUser: f,
            hasCurrentActivity: m,
            hasRecentActivity: p,
        } = rJ({ user: t, currentUser: n, displayProfile: l, guildId: r });
    return m || p || !g
        ? m || p || g
            ? (0, i.jsxs)(sg, {
                  className: sf.XG,
                  fade: !0,
                  children: [
                      m
                          ? (0, i.jsx)(tc, {
                                heading: eU.intl.string(eU.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: sf.kR,
                                    children: [
                                        null != d &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(r5.A, {
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
                                                    children: (0, i.jsx)(r1.A, {
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
                                                children: (0, i.jsx)(r3.A, {
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
                      p
                          ? (0, i.jsx)(tc, {
                                heading: eU.intl.string(eU.t.jzgEoL),
                                introText: f
                                    ? eU.intl.format(eU.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tB.Anchor,
                                                  {
                                                      href: r0.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: rf.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: sf.kR,
                                    children: u.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(r2.A, { user: t, entry: e, onClose: a }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : f
              ? (0, i.jsx)(sd, { onClose: a })
              : (0, i.jsx)(so, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: a })
        : (0, i.jsx)("div", {
              className: sf.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: sf.kr,
                          children: [
                              (0, i.jsx)(rQ.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(rQ.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sp = n(163126),
    sh = n(913453),
    sx = n(229187),
    sA = n(402860),
    sI = n(503062),
    sv = n(393213);
function sj(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, Q.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, sh.A)(t),
        g = (0, sp.A)();
    return (
        l.useEffect(() => {
            (0, sx.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sg, {
            className: sv.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sv.D$,
                                  children: [
                                      (0, i.jsx)(rQ.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(rQ.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(ss, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                sI.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, sA.openUserProfileModal)({
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
var sb = n(398590),
    sC = n(345942),
    sy = n(51943);
function sE(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, Q.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, sh.A)(t);
    return (0, i.jsx)(sg, {
        className: sv.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sv.Y7,
                              children: [
                                  (0, i.jsx)(rQ.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(rQ.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sy.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sC.u)(r.id), n(), (0, sb.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(sa, {}),
    });
}
var sS = n(885574),
    sN = n(277984),
    sk = n(840387),
    sT = n(201718),
    sP = n(615405),
    sR = n(633075),
    sO = n(373842),
    s_ = n(600761),
    sL = n(667049);
function sw(e) {
    let t = (0, ep.A)(e),
        n = nn();
    return t && !n;
}
var sD = n(540185),
    sM = n(192308),
    sG = n(37537),
    sU = n(210598),
    sF = n(465318);
function sW() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = sF.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eM.kn)(e && t ? [eT.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eT.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function sB(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: r } = (0, Q.NJ)();
    return n
        ? (0, i.jsx)(eP.A, {
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
              title: eU.intl.string(eU.t.KKGxNt),
              body: eU.intl.string(eU.t["IS+QTV"]),
              onRequestClose: () => l(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t.RCy7Px),
                      icon: ts.t,
                      onClick: function () {
                          let e = (0, sU.g0)();
                          ((0, rr.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, rg.XA)(rf.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var sV = n(410453);
function sH(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, Q.NJ)(),
        a = l.useCallback(() => {
            n && r(eG.i.TAKE_ACTION);
            let e = (0, sU.g0)();
            ((0, rr.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, rg.XA)(rf.jM.WIDGET_ADDED));
        }, [s, n, r]);
    return (0, i.jsx)(no.$, {
        icon: ts.t,
        text: eU.intl.string(eU.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function sz(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, Q.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = sW(),
        c = (function () {
            let e = (0, el.bG)([y.default], () => y.default.getCurrentUser()?.id),
                t = (0, sL.A)(e),
                { enabled: n, showCreateEntrypoint: i } = sF.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === sD.x.PERSONAL);
            return n && i && !l;
        })(),
        g = (0, sG.c)("UserProfileWidgetEditingHeader"),
        f = l.useCallback(() => {
            (u && d(eG.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, sM.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("975366"),
                            n.e("487697"),
                            n.e("752516"),
                            n.e("131479"),
                        ]).then(n.bind(n, 677130));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r, u, d]);
    return (0, i.jsxs)("div", {
        className: s()(sV.w, t),
        children: [
            (0, i.jsx)(ez.E, {
                className: sV.D,
                variant: g ? "text-sm/semibold" : "text-xs/semibold",
                color: "text-subtle",
                children: eU.intl.string(eU.t.OYlggR),
            }),
            c ? (0, i.jsx)(sH, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(no.$, {
                icon: tH.j,
                text: eU.intl.string(eU.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: f,
                buttonRef: a,
            }),
            (0, i.jsx)(sB, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var sY = n(192),
    sK = n(704824),
    sq = n(382483),
    sX = n(385113),
    sZ = n(334074),
    s$ = n(657718),
    sJ = n(478016),
    sQ = n(58216);
function s0(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, Q.NJ)(),
        a = l.useMemo(() => new sR.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, rr.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, rg.XA)(rf.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sQ.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sQ.A.Cta, {
            showSuggestedForYou: !0,
            heading: eU.intl.format(eU.t.OIzLCy, { applicationName: n.name }),
            content: eU.intl.format(eU.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tW.m, {
                        text: eU.intl.string(eU.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(s$.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: nr.P,
                            "aria-label": eU.intl.string(eU.t.WAI6xu),
                            onClick: () => {
                                r(eG.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tW.m, {
                        text: eU.intl.string(eU.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(s$.S, {
                            variant: "primary",
                            size: "sm",
                            icon: sJ.U,
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
function s1() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([sX.A], () => sX.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, sq.Wq)();
        }, []);
        let t = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
            n = (0, ec.A)(e),
            { tokens: i, fetched: r } = (0, sK.j)(e),
            s = (0, sL.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sR.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, sZ.hj)({
                applications: u,
                dismissibleContent: eT.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: sZ.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(s0, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var s2 = n(675816),
    s5 = n(575593),
    s3 = n(44120),
    s9 = n(75678),
    s7 = n(87719),
    s8 = n(317560),
    s6 = n(82343),
    s4 = n(661492);
let ae = { sentGifts: {} };
function at(e, t) {
    return `${e}:${t}`;
}
class an extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((ae = e), this.cleanupExpiredGifts());
    }
    getState() {
        return ae;
    }
    hasSentGift(e, t) {
        let n = at(e, t),
            i = ae.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = at(e, t),
            i = ae.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(ae.sentGifts)) new Date(n.expiresAt) < e && delete ae.sentGifts[t];
    }
}
let ai = new an(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = at(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        ae.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var al = n(146423),
    ar = n(590180),
    as = n(753704),
    aa = n(113265),
    ao = n(152472),
    au = n(471505),
    ad = n(376932);
function ac(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function ag(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l$.default], () => l$.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, au.G)({ userId: o, sku: n, location: l, onError: r }),
        f = aA();
    return (0, i.jsx)("div", {
        className: ad.U,
        style: ac(t),
        children: (0, i.jsx)(as._, {
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
function af(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l$.default], () => l$.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ao.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aA();
    return (0, i.jsx)("div", {
        className: ad.U,
        style: ac(t),
        children: (0, i.jsx)(as._, {
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
function am(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l$.default], () => l$.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ao.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = aA();
    return (0, i.jsx)("div", {
        className: ad.U,
        style: ac(t),
        children: (0, i.jsx)(as._, {
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
function ap(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([l$.default], () => l$.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, aa.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, s4.q)(f),
        h = m && !u,
        x = !p || h,
        A = aA(p && h ? eU.intl.string(eU.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: ad.U,
        style: ac(t),
        children: (0, i.jsx)(as._, {
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
function ah(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([ar.A], () => ar.A.getProduct(t.id));
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ag, { sku: t, isVisuallyHidden: !n, ...l });
        case T.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(af, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(ap, { product: r, isVisuallyHidden: !n, ...l });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(am, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function ax(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(ah, { location: t, ...n });
}
function aA(e) {
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
var aI = n(460442),
    av = n(662349),
    aj = n(479026),
    ab = n(636374),
    aC = n(699976),
    ay = n(181554),
    aE = n(880465);
let aS = aC.Z.SIZE_133;
function aN(e) {
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
            onPurchaseClick: I,
            wishlistId: v,
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
                null != v &&
                    (N({
                        wishlistId: v,
                        action: rf.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, N, y]),
        T = l.useCallback(() => {
            (y?.(),
                null != v &&
                    (N({
                        wishlistId: v,
                        action: rf.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, N, y]),
        P = l.useCallback(() => {
            ((0, rg.XA)(rf.jM.SOMETHING_WENT_WRONG), np.O.announce(eU.intl.string(eU.t.F8FvUy)));
        }, []),
        R = null != g ? (0, i.jsx)("div", { ref: E, className: ay.BU, children: g }) : null,
        {
            onBodyClick: O,
            onOverlayClick: _,
            showOverlayButton: L,
            routesToGift: w,
            label: D,
            icon: M,
        } = (0, ab.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: k, onPurchaseClick: T }),
        G = h && L;
    return (0, i.jsxs)("div", {
        className: ay.kL,
        children: [
            (0, i.jsxs)(al.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: aS,
                cardStyle: s()(ay.Nr, d),
                skuPreviewStyle: s()(ay.ev, { [ay.go]: j && !h }, f, G ? m : void 0),
                skuAssetClassName: G ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: O,
                "aria-label":
                    ((t = r.sku),
                    (n = w ? (0, s4.T)(t) : eU.intl.formatToPlainString(eU.t.ZBB4Ty, { productName: (0, s4.T)(t) })),
                    !0 === C ? eU.intl.formatToPlainString(eU.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === C && (0, i.jsx)(rM.N, { className: ay.Pf }),
                    b,
                    L && (0, i.jsx)(av.A, { spec: aS, onClick: _, isHoveringOrFocusing: h, label: D, icon: M }),
                    j && (0, i.jsx)(aI.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(ax, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: aS,
                            onError: P,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function ak(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, s8.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iG.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, s6.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iG.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aN, {
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
function aT(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, aj.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iG.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, s3.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iG.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === s5.R.AVATAR_DECORATION || f === s5.R.PROFILE_FRAME;
    return (0, i.jsx)(aN, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [ay.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function aP(e) {
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
            if (n) return void (0, s7.x)(iL.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, s9.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iG.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aN, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: aE.MO,
        skuAssetHoverClassName: aE.iR,
        analyticsLocations: a,
        ...u,
    });
}
function aR(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, b.Ay)(
            ...(s ?? []),
            t.sku?.productLine === T.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([ai], () => ai.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== T.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ak, {
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
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(aT, {
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
        case T.EZt.PREMIUM:
            return (0, i.jsx)(aP, {
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
var aO = n(788593),
    a_ = n(943793),
    aL = n(314531),
    aw = n(95077),
    aD = n(998556);
function aM(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, s2.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        u = (0, lX.VU)(),
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
                                  className: aD.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aw.u, {
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
                                  children: (0, i.jsx)(aO.A, {
                                      className: aD.XJ,
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
                                  className: aD.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(a_.A, {
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
                                  className: aD.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aL.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aD.Xm,
                                  children: (0, i.jsx)(aR, {
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
    return (0, i.jsx)("div", { className: aD.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var aG = n(197935);
function aU(e) {
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
        let t = n.find((t) => (0, sR.E)(t, e));
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
        l && c(sD.x.CLIPS_GALLERY),
        r && c(sD.x.PERSONAL),
        c(sD.x.FAVORITE_GAMES),
        c(sD.x.PLAYED_GAMES),
        g("1346069614634864772"),
        c(sD.x.CURRENT_GAMES),
        c(sD.x.WANT_TO_PLAY_GAMES),
        g("1323482066758930452"),
        o.slice(0, s)
    );
}
n(839272);
let aF = (0, rG.mj)({
    name: "2026-10-user-profile-widget-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0, suggestionsLocation: "below" }, 2: { enabled: !0, suggestionsLocation: "above" } },
});
var aW = n(714889),
    aB = n(661439),
    aV = n(90165);
function aH(e) {
    let t = (0, a.bG)([sX.A], () => sX.A.getFeaturedApplicationIds()),
        n = l.useMemo(() => {
            let n = new Set(t);
            return e
                .filter((e) => e instanceof sR.R)
                .map((e) => e.applicationId)
                .filter((e) => n.has(e));
        }, [t, e]),
        i = (0, ec.A)(n),
        r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
        { tokens: s } = (0, sK.j)(r),
        o = n.length > 0;
    l.useEffect(() => {
        o && (0, aB.X)();
    }, [o]);
    let u = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
        d = (0, a.yK)([aV.A], () => u.map((e) => (null != e ? aV.A.getGameDuration(e) : 0))),
        c = (0, a.yK)([aV.A], () => u.map((e) => (null != e ? aV.A.getLastPlayedDateTime(e) : null)));
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
var az = n(224360),
    aY = n(978806),
    aK = n(843393);
function aq(e) {
    return e.getUniqueKey();
}
function aX(e) {
    let { children: t, onWidgetAddedFromBelow: n } = e,
        r = (0, aW.A)(),
        s = aH(r),
        o = (0, a.bG)([ra.Ay], () => ra.Ay.hasClips()),
        u = (0, a.bG)([y.default], () => J.Ay.isPremium(y.default.getCurrentUser(), iG.PremiumTypes.TIER_2)),
        d = l.useMemo(
            () =>
                aU({
                    addableWidgets: r,
                    applicationAffinityData: s,
                    hasClips: o,
                    hasPremium: u,
                    maxWidgetOptions: 6,
                    promotedWidgetTypes: [],
                }),
            [r, s, o, u],
        ),
        c = d.length >= 2;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c && (0, i.jsx)(aZ, { suggestions: d, suggestionsLocation: "above" }),
            t,
            c && (0, i.jsx)(aZ, { suggestions: d, suggestionsLocation: "below", onWidgetAdded: n }),
        ],
    });
}
function aZ(e) {
    let t = aF.useConfig({ location: "UserProfileModalV2WidgetSuggestions" });
    return t.enabled && t.suggestionsLocation === e.suggestionsLocation ? (0, i.jsx)(a$, { ...e }) : null;
}
function a$(e) {
    let { suggestions: t, suggestionsLocation: n, onWidgetAdded: r } = e,
        { trackUserProfileEditAction: a } = (0, Q.NJ)(),
        { focusAddedWidget: o } = (0, sY.r)(),
        [u, d] = (0, eM.kn)([eT.M.USER_PROFILE_WIDGET_SUGGESTIONS], { bypassAutoDismiss: !0 }),
        c = l.useCallback(
            (e, t) =>
                (0, i.jsx)(aY.A, {
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
    return u !== eT.M.USER_PROFILE_WIDGET_SUGGESTIONS
        ? null
        : (0, i.jsx)(az.A, {
              className: s()(aK.uW, "above" === n && aK.G1),
              compactHeader: !0,
              headingVariant: "below" === n ? "text-xs/normal" : void 0,
              onDismiss: () => d(eG.i.USER_DISMISS),
              children: (0, i.jsx)(aG.A, {
                  items: t,
                  getItemKey: aq,
                  renderItem: c,
                  gap: 8,
                  edgeFade: 80,
                  scrollStep: "item",
                  iconButtonSize: "sm",
                  className: aK.Dk,
                  scrollerClassName: aK.jv,
                  itemClassName: aK.Vs,
                  actionsClassName: aK.o1,
                  maintainFocusOnReorder: !0,
                  "aria-label": eU.intl.string(eU.t["+EIBSA"]),
              }),
          });
}
let aJ = (0, rG.mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var aQ = n(269507);
function a0(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: aQ.ZW,
        "aria-label": eU.intl.string(eU.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === sD.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(aY.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function a1(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, aW.A)();
    return (0, i.jsx)(a0, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function a2(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, aW.A)(),
        d = aH(u),
        c = aU({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([ra.Ay], () => ra.Ay.hasClips()),
            hasPremium: (0, a.bG)([y.default], () =>
                J.Ay.isPremium(y.default.getCurrentUser(), iG.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [sD.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, sM.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("975366"),
                            n.e("487697"),
                            n.e("752516"),
                            n.e("131479"),
                        ]).then(n.bind(n, 677130));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a0, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(no.$, { text: eU.intl.string(eU.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function a5(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, Q.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([et.A], () => et.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = sW(!u),
        g = d || (0, sU.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return aJ.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: aQ.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: aQ.FS,
                    children: [
                        (0, i.jsx)(ns.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: eU.intl.string(eU.t["oqalC+"]),
                        }),
                        (0, i.jsx)(ez.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? eU.intl.string(eU.t["+W59o5"]) : eU.intl.string(eU.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            f
                                ? (0, i.jsx)(a2, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(a1, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(sB, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var a3 = n(366209);
function a9() {
    return (0, i.jsxs)("div", {
        className: a3.mJ,
        children: [
            (0, i.jsx)(sS.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(ez.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eU.intl.string(eU.t["7blcz6"]),
            }),
        ],
    });
}
function a7(e) {
    let { user: t, guildId: n, channelId: r, onWidgetAddedFromBelow: s } = e,
        o = (0, sL.A)(t.id),
        u = sw(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([sP.A], () => [sP.A.ipCountryCode, sP.A.ipCountryCodeRequest]),
                n = (0, sk.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sN.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        c = 0 === o.length && u,
        g = l.useMemo(() => o.filter(rn.fu), [o]),
        f = l.useMemo(() => o.filter((e) => e instanceof sR.R), [o]);
    function m() {
        let e = o.map((e, l) =>
            (0, i.jsx)(
                aw.u,
                { widget: e, user: t, guildId: n, channelId: r, allowEditing: u, index: l },
                e.getUniqueKey(),
            ),
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                u &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(sz, { className: a3.cG }), d && (0, i.jsx)(a9, {}), (0, i.jsx)(s1, {})],
                    }),
                u ? (0, i.jsx)(aX, { onWidgetAddedFromBelow: s, children: e }) : e,
            ],
        });
    }
    return ((0, sO.Y)(u, g),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ec.A)(n);
        let { data: i, refetch: r } = (0, sT.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, f),
    c)
        ? (0, i.jsx)(a5, { userId: t.id })
        : u
          ? (0, i.jsx)(sY.D, { children: m() })
          : m();
}
function a8(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, s_.i)({ containerRef: d });
    let c = l.useCallback(() => {
            requestAnimationFrame(() => {
                d.current?.scrollTo({ top: 0, behavior: th.Ay.useReducedMotion ? "auto" : "smooth" });
            });
        }, []),
        g = ((t = o.id), (n = (0, a.bG)([l$.default], () => l$.default.getId() === t)), (r = rx()), n && null != r);
    return (0, i.jsxs)(sg, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(a3.XG, { [a3.az]: g }),
        fade: !0,
        children: [(0, i.jsx)(aM, { scrollerRef: d }), (0, i.jsx)(a7, { user: o, onWidgetAddedFromBelow: c, ...u })],
    });
}
var a6 = n(132500),
    a4 = n(777480),
    oe = n(825484),
    ot = n(952270),
    on = n(444927),
    oi = n(895360),
    ol = n(267102),
    or = n(285373),
    os = n(721932),
    oa = n(832163),
    oo = n(501838),
    ou = n(44724),
    od = n(808247),
    oc = n(673843),
    og = n(855052),
    of = n(626584);
let om = Object.freeze({ PROFILE_READ_STATE: (e) => `/users/@me/profile-read-states/${e}` });
var op = n(419731),
    oh = n(768803);
let ox = new of.A("ProfileReadStateActionCreators");
async function oA(e) {
    if (e !== y.default.getCurrentUser()?.id && null != (0, rH.aS)())
        try {
            let t = await E.Bo.put({
                url: om.PROFILE_READ_STATE(e),
                body: { sections: [oh.o.WISHLIST] },
                rejectWithError: !0,
            });
            S.h.dispatch({ type: "PROFILE_READ_STATE_ACK", ownerId: e, ackedAt: (0, op.CJ)(t.body) ?? {} });
        } catch (e) {
            ox.warn("Failed to ack profile wishlist", e);
        }
}
var oI = n(535089),
    ov = n(840411),
    oj = n(666810),
    ob = n(451395),
    oC = n(823016),
    oy = n(100741);
function oE(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oC.r)();
    return (0, i.jsx)(ob.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eU.intl.formatToPlainString(eU.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: oy.C,
        dropBeforeClassName: oy.A,
        dropAfterClassName: oy.Ze,
        draggingClassName: oy.Id,
        children: (0, i.jsx)("div", { className: oy.An, children: s }),
    });
}
let oS = l.memo(function (e) {
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
        { registerDragHandleRef: f } = (0, oC.r)(),
        m = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(ob.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: oy.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, i.jsx)(aR, {
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
              children: (0, i.jsx)(oE, { item: t, index: n, wishlistId: o, onReorder: d, children: h }),
          })
        : (0, i.jsx)("li", { children: h });
});
function oN(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, ackedAt: o } = e,
        u = y.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, a.cf)([et.A], () => ({ defaultWishlistId: et.A.getFirstWishlistId(n.id) })),
        { isDragging: c } = (0, s2.V)((e) => ({ isDragging: e.isDragging() })),
        [g, f] = l.useState([]),
        m = l.useCallback((e) => {
            f((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        p = l.useCallback(
            (e, n) => {
                if (e === n || null == d || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = rY.A.getWishlist(d);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, ov.Ap)(i, t, e, n);
                od.A.reorderWishlistItem(d, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [d, t],
        );
    if (null == u || null == d) return null;
    let h = (0, i.jsx)("ul", {
        className: oy.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                oS,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: d,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, op.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: m,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, i.jsx)(oC.B, { emptyListFallbackRef: null, children: h }) : h;
}
function ok(e) {
    let t = y.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oj.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(oN, { ...e }),
    });
}
var oT = n(815021),
    oP = n(299679),
    oR = n(820847);
n(667532);
var oO = n(862772),
    o_ = n(172218),
    oL = n(858899),
    ow = n(2157),
    oD = n(95817),
    oM = n(74135),
    oG = n(964164);
let oU = aC.Z.SIZE_90;
function oF(e) {
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
        p = (0, oP.Ar)(),
        h = (0, on.A)(() => (0, a6.A)()),
        { handleVisibilityChange: x } = (0, oD.G)(h),
        A = (0, o_.K)(x, 0.5, p?.surface != null),
        I = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: rf.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    tq.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(al.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oU,
            cardStyle: s()(oG.Nr, a),
            skuPreviewStyle: s()(oG.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: f,
        }),
    });
}
function oW(e) {
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
                    (await od.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: rf.RP.WISHLIST }));
                } catch (e) {
                    ((0, oL.P0)({ text: eU.intl.string(eU.t.F8FvUy), variant: "critical" }),
                        np.O.announce(eU.intl.string(eU.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [oG.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(oF, {
        "aria-label": eU.intl.formatToPlainString(eU.t.xRjJBe, { productName: (0, s4.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(aI.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function oB(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, ow.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(oW, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(oM.s, { spec: oU, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function oV(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case s5.R.PROFILE_EFFECT:
                case s5.R.NAMEPLATE:
                case s5.R.BUNDLE:
                case s5.R.PROFILE_FRAME:
                    return;
                case s5.R.AVATAR_DECORATION:
                    return oG.ML;
                default:
                    return s()(oG.ML, oG.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(oW, { sku: t, skuPreviewStyle: r, ...n });
}
function oH(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(oW, { sku: t, skuPreviewStyle: aE.MO, ...n });
}
function oz(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oB, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.COLLECTIBLES:
            return (0, i.jsx)(oV, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case T.EZt.PREMIUM:
            return (0, i.jsx)(oH, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var oY = n(609965);
function oK(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([y.default], () => y.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(oY.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                oP.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(oz, {
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
var oq = n(927813);
let oX = 90 * oq.A.Millis.DAY,
    oZ = 90 * oq.A.Millis.DAY;
var o$ = n(469364);
function oJ(e) {
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
                [d, c] = (0, eM.Wl)(
                    eT.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + oZ, cooldownDurationMs: oX },
                    void 0,
                    !0,
                ),
                g = d === eT.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eG.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(oQ, {
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
function oQ(e) {
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
                { recommendations: a, status: o } = (0, oO.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iG.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, ov.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oR.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(o$.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: o$.wx,
                      children: [
                          (0, i.jsx)(ez.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: eU.intl.string(eU.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: o$.b,
                                  children: (0, i.jsx)(oT.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(oP.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(oK, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(o$.Vg, o$.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var o0 = n(477782),
    o1 = n(980707),
    o2 = n(431194);
function o5(e) {
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
                        let t = tX.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: o2.I, src: t, alt: "" }) : t_.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: t_.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ec.A)(o), handleOpenGameShop: s }),
        f = l.useMemo(
            () =>
                (0, i.jsxs)(o0.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(o0.Dr, {
                                id: "browse-collectibles-shop",
                                label: eU.intl.string(eU.t["5upuqx"]),
                                iconLeft: t_.U,
                                leadingAccessory: { type: "icon", icon: t_.U },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(o0.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eU.intl.string(eU.t.lG6a5x),
                                iconLeft: ts.t,
                                leadingAccessory: { type: "icon", icon: ts.t },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s } = e;
                                return (0, i.jsx)(
                                    o0.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nS.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o1.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eU.intl.string(eU.t.GdNkvG),
                children: f,
            });
        },
        children: (e) =>
            (0, i.jsx)(no.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? nr.P : i3.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var o3 = n(365199);
let o9 = r0.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function o7(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(o0.rX, {
                          children: [
                              (0, i.jsx)(o0.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eU.intl.string(eU.t.b2nFyA),
                                  subtext: eU.intl.string(eU.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(o0.bX, {}),
                              (0, i.jsx)(o0.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eU.intl.string(eU.t.hvVgAZ),
                                  icon: tV.I,
                                  trailingIndicator: { type: "icon", icon: tV.I },
                                  action: () => window.open(o9),
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
              children: (0, i.jsx)(nS.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(o1.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": eU.intl.string(eU.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, i.jsx)(tw.q3, {
                          buttonRef: s,
                          icon: o3.MoreHorizontalIcon,
                          tooltipText: eU.intl.string(eU.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var o8 = n(526725);
function o6(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(o5, {
              title: eU.intl.string(eU.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(no.$, {
              variant: "secondary",
              size: "sm",
              icon: t_.U,
              text: eU.intl.string(eU.t["i/yzHs"]),
              onClick: n,
          });
}
function o4(e) {
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
        className: o8.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(o5, {
                          title: eU.intl.string(eU.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(no.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tH.j,
                          text: eU.intl.string(eU.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(o7, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function ue(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(no.$, {
        variant: "primary",
        size: "sm",
        icon: t_.U,
        text: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function ut(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, ol.Us)() === T.BRT.OVERLAY,
        u = (0, ec.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(ue, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(o5, {
                title: eU.intl.string(eU.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: o8.y7,
        children: [
            (0, i.jsxs)("div", {
                className: o8.q6,
                children: [
                    (0, i.jsx)(ns.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: eU.intl.string(eU.t.HGnLLT),
                    }),
                    (0, i.jsx)(ez.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: eU.intl.string(eU.t["/X1ny6"]),
                    }),
                ],
            }),
            (t || null != d) &&
                (0, i.jsxs)(oe.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(no.$, {
                                variant: "primary",
                                size: "sm",
                                icon: t_.U,
                                text: eU.intl.string(eU.t.ZbS4QB),
                                onClick: r,
                            }),
                        d,
                    ],
                }),
        ],
    });
}
function un(e) {
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
        f?.visibility != null && x(f.visibility === a4.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        I = (0, oI.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, og.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = h ? a4.a.PRIVATE : a4.a.PUBLIC;
            (x(!h),
                od.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? rf.Mq.WISHLIST_TOGGLE_PRIVATE : rf.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, og.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: o8.lm,
                    children: [
                        (0, i.jsx)(ot.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(ez.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, i.jsxs)("div", {
                    className: o8.lm,
                    children: [
                        (0, i.jsx)(sS.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(ez.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: o8.U1,
                children: [
                    (0, i.jsx)(ez.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: eU.intl.format(eU.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(o4, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(o6, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function ui(e) {
    let t,
        { profileOwner: n, guildId: r } = e,
        o = l.useRef(null);
    (0, s_.i)({ containerRef: o, itemType: "WISHLIST_ITEM" });
    let { wishlistId: u, currentUser: d } = (0, a.cf)([et.A, y.default], () => ({
            wishlistId: et.A.getFirstWishlistId(n.id),
            currentUser: y.default.getCurrentUser(),
        })),
        { analyticsLocations: c } = (0, b.Ay)(),
        g = (0, on.A)(() =>
            (0, rH.aS)()?.enabled === !0 ? et.A.getProfileReadStateSectionAckedAt(n.id, oh.o.WISHLIST) : null,
        ),
        f =
            ((t = (0, rH.bq)()),
            (0, a.bG)(
                [et.A, y.default],
                () => {
                    if (null == t || n.id === y.default.getCurrentUser()?.id) return !1;
                    let e = et.A.getFirstWishlistId(n.id),
                        i = null != e ? et.A.getWishlistSettings(n.id, e) : null,
                        l = et.A.getProfileReadStateSectionAckedAt(n.id, oh.o.WISHLIST);
                    return (0, op.uM)(i, l);
                },
                [n.id, t],
            ));
    l.useEffect(() => {
        f && oA(n.id);
    }, [n.id, f]);
    let m = sw(n.id),
        { wishlist: p, wasFetched: h, error: x } = (0, Y.fw)({ wishlistId: u, userId: n.id }),
        [A, I] = l.useState(!1);
    (h && !A && I(!0), (0, oc.A)(p));
    let v = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([oa.A], () => oa.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, os.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, oo.w)({ userIds: s }),
                c = (0, oo.mn)({ userIds: s }),
                g = (0, oo.tR)(s),
                f = (0, oo.rY)(),
                m = (0, oo.qx)(),
                p = (0, oo.px)();
            return l.useMemo(
                () => (0, r9.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(ef.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: p, profileOwner: n, currentUser: d }),
        C = (0, on.A)(() => (0, a6.A)()),
        E = l.useCallback(() => {
            (0, tL.Cz)({ analyticsLocations: c, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [c]),
        S = l.useCallback((e) => {
            (0, ou.G)({ applicationId: e });
        }, []),
        N = l.useCallback((e) => {
            ((0, iL.M)(), (0, ou.default)({ applicationId: e }));
        }, []),
        { handleToggle: k } = (0, ao.c)({
            userId: d?.id,
            skuId: iG.pe.TIER_2,
            nuxGraphic: or.g,
            onNuxShow: oi.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == d || null != x) return null;
    let T = null == p || 0 === p.items.length;
    return (0, i.jsxs)(sg, {
        scrollerRef: o,
        className: s()({ [o8.XG]: !T }),
        fade: !0,
        children: [
            T
                ? (0, i.jsx)(ut, {
                      showEditingControls: m,
                      socialLayerStorefrontApplicationIds: v,
                      handleOpenShop: E,
                      handleOpenGameShop: N,
                      handleOpenGameShopMouseDown: S,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(aM, { scrollerRef: o }),
                          (0, i.jsx)(un, {
                              isOwner: d?.id === n.id,
                              showEditingControls: m,
                              profileOwner: n,
                              wishlist: p,
                              socialLayerStorefrontApplicationIds: v,
                              handleOpenShop: E,
                              handleOpenGameShop: N,
                              handleAddNitroToWishlist: (0, og.C3)(p, iG.pe.TIER_2) ? void 0 : k,
                          }),
                          (0, i.jsx)(ok, {
                              items: p.items,
                              profileOwner: n,
                              guildId: r,
                              showEditingControls: m,
                              ackedAt: g,
                          }),
                      ],
                  }),
            m &&
                (0, i.jsx)(oJ, {
                    user: n,
                    guildId: r,
                    wishlist: p,
                    hasFetchedWishlist: A,
                    analyticsLocations: c,
                    impressionSessionId: C,
                    className: T ? o8._E : o8.HZ,
                }),
        ],
    });
}
function ul(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === rf.RP.ACTIVITY
        ? (0, i.jsx)(sm, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === rf.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sj, { user: t, guildId: s, channelId: a, onClose: o })
          : l === rf.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sE, { user: t, onClose: o })
            : l === rf.RP.WIDGETS
              ? (0, i.jsx)(a8, { user: t, guildId: s, channelId: a })
              : l === rf.RP.WISHLIST
                ? (0, i.jsx)(ui, { profileOwner: t, guildId: s })
                : null;
}
function ur(e) {
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
        { trackUserProfileAction: p } = (0, Q.NJ)(),
        { shouldLogExposure: h } = (0, rz.A)(t),
        x = l.useRef(!1),
        A = u.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        A && !x.current && ((x.current = !0), p({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [A, p]);
    let [I, v] = l.useState(() => (u.find((e) => e.section === d) ?? u[0]).section),
        j = (0, a.bG)([l$.default, rU.A], () => {
            let e = rU.A.getAssignment("user", l$.default.getId(), rB.definition.name);
            return e?.variantId == null || e.useAsEligibility ? null : (rW[e.variantId] ?? rF);
        }),
        b = (function (e) {
            let { user: t, currentUser: n, displayProfile: i, guildId: l, items: r } = e,
                {
                    isFetching: s,
                    isCurrentUser: o,
                    hasCurrentActivity: u,
                    hasRecentActivity: d,
                } = rJ({ user: t, currentUser: n, displayProfile: i, guildId: l }),
                c = (0, a.bG)(
                    [et.A, rY.A],
                    () => {
                        if (null == et.A.getUserProfile(t.id) || et.A.isFetchingProfile(t.id, l)) return !0;
                        let e = et.A.getFirstWishlistId(t.id);
                        if (null == e) return !1;
                        let n = rY.A.getStatus(e);
                        if ("not_loaded" === n || "fetching" === n) return !0;
                        let i = et.A.getWishlistSettings(t.id, e)?.updated_at;
                        return "success" === n && null != i && rY.A.getUpdatedAt(e) !== i;
                    },
                    [t.id, l],
                );
            return (
                !o &&
                (c || s
                    ? null
                    : !r.some((e) => e.section === rf.RP.WIDGETS) &&
                      r.some((e) => e.section === rf.RP.WISHLIST) &&
                      !u &&
                      !d)
            );
        })({ user: t, currentUser: n, displayProfile: r, guildId: s, items: u }),
        [C, y] = l.useState(null);
    if (null == C && null != b && null != j) {
        let e = null == d && b;
        (y(e), e && j.enabled && v(rf.RP.WISHLIST));
    }
    let E = u.find((e) => e.section === I) ?? u[0];
    return (
        E.section !== I && v(E.section),
        (0, i.jsxs)("div", {
            className: sc.kL,
            children: [
                h && (0, i.jsx)(rH.kM, { location: "UserProfileModalV2Tabs" }),
                !0 === C && (0, i.jsx)(rV, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: sc.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(rD.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: E.section,
                        onItemSelect: function (e) {
                            rl.A.hasUnsavedChanges() && E.section === rf.RP.WIDGETS
                                ? (0, nv.VQ)()
                                : (p({ action: "PRESS_SECTION", section: e }), v(e), y((e) => e ?? !1));
                        },
                        children: u.map((e) =>
                            (0, i.jsxs)(
                                rD.V.Item,
                                {
                                    className: sc.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eU.intl.formatToPlainString(eU.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, i.jsx)(rM.N, { className: sc.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(rD.V.Panel, {
                    id: E.section,
                    "aria-label": E.text,
                    className: sc.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: E.text }) }),
                        children: (0, i.jsx)(ul, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: o,
                            section: E.section,
                            onClose: g,
                        }),
                    }),
                }),
            ],
        })
    );
}
var us = n(933832),
    ua = n(972213);
let uo = {
        [rf.jM.WIDGET_ADDED]: {
            message: eU.intl.string(eU.t.fFP1Uy),
            icon: (0, i.jsx)(us.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rf.jM.WIDGET_REMOVED]: {
            message: eU.intl.string(eU.t.zzsK7h),
            icon: (0, i.jsx)(us.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [rf.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eU.intl.string(eU.t["84MExs"]),
            icon: (0, i.jsx)(ua.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
        [rf.jM.SOMETHING_WENT_WRONG]: {
            message: eU.intl.string(eU.t.F8FvUy),
            icon: (0, i.jsx)(ua.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: "failure",
        },
    },
    uu = (e) => {
        let { className: t } = e,
            n = (0, rg.fu)(),
            r = (0, a.bG)([th.Ay], () => th.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(uo[n]), np.O.announce(uo[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, rg.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, rg.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(lR.animated.div, { className: t, style: e, children: (0, i.jsx)(rT, { ...u }) }),
                ),
            })
        );
    };
var ud = n(297413),
    uc = n(465829),
    ug = n(826673),
    uf = n(609425),
    um = n(73392),
    up = n(576705),
    uh = n(997394);
function ux(e) {
    return null == e || "" === e ? void 0 : e;
}
function uA(e) {
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
        I = x?.guildId != null,
        v = x?.guildId ?? void 0,
        j = J.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: C, permissionsLoaded: E } = (0, a.cf)([up.A, K.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = K.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: up.A.can(T.xBc.CHANGE_NICKNAME, e) || up.A.can(T.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = I && !C && E,
        {
            value: N,
            previewValue: k,
            fallbackDisplayName: P,
            onCommit: R,
        } = ((n = null != (t = x?.guildId ?? null)),
        (r = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([ej.Ay], () => (null != t ? (ej.Ay.getMember(t, p.id)?.nick ?? null) : null))),
        (u = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t).pendingNickname)),
        (f = (g = void 0 !== (c = n ? d : u) ? c : n ? o : r) ?? ""),
        (m = n ? (ux(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: ux(g) ?? m,
            fallbackDisplayName: m,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, tf.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, tf.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        O = (0, a.bG)([eb.A], () => eb.A.getErrors(v ?? null)),
        _ = (0, tg.EC)(v ?? null),
        L = I ? O.nick?.[0] : O.global_name?.[0],
        w = _?.nick?.[0],
        D = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(v).pendingDisplayNameStyles),
        M = (0, uf.A)({ userId: p.id, guildId: v, pendingDisplayNameStyles: D }),
        G = (0, um.a)({ displayNameStyles: M, compensateForSafari: !1 }),
        U = eU.intl.string(I ? eU.t.mq6Cg9 : eU.t.XuZU7A),
        F = I ? eU.intl.string(eU.t.YcDKr8) : p.username,
        W = l.useRef(null),
        B = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, ug.Dr)(eT.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                        dismissAction: eG.i.INDIRECT_ACTION,
                    }),
                    (0, nF.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: W }));
            },
            [A, v],
        ),
        V = {
            icon: t9.V,
            tooltip: eU.intl.string(eU.t.lqKKI2),
            "aria-label": eU.intl.string(eU.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: W,
        },
        H = S
            ? (0, i.jsx)("span", {
                  className: uh.Cs,
                  children: (0, i.jsx)(nl.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tx.kL,
        children: (0, i.jsx)(ez.E, {
            variant: uc.gU.lg,
            color: "none",
            className: G,
            children: (0, i.jsx)(rv.w, {
                value: N,
                onCommit: R,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, t) => {
                    let { focused: n } = t;
                    return (0, i.jsx)(uc.c$, {
                        user: p,
                        guildId: v,
                        displayName: n ? (ux(e) ?? P) : k,
                        size: "lg",
                        pendingDisplayNameStyles: D,
                        className: s()(uh.dt, { [uh.jW]: n && "" === e }),
                        displayNameTrailing: H,
                    });
                },
                placeholder: F,
                label: U,
                maxLength: T.zzC,
                textVariant: "inherit",
                trailing: C && j ? V : void 0,
                error: L,
                helperText: S ? eU.intl.string(eU.t.gzjxQi) : w,
                disabled: !C,
            }),
        }),
    });
}
var uI = n(628072);
function uv(e) {
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
                    (0, tf.p)({ pronouns: e, guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        m = d?.guildId != null,
        p = null != g && g.length > 0,
        h = eU.intl.string(m ? eU.t.AXiE0i : eU.t["76Aqhl"]);
    return (0, i.jsx)("div", {
        className: s()(tx.kL, tx.oE, uI.k),
        children: (0, i.jsx)(rv.w, {
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
            preview: p ? (0, i.jsx)(uc.n2, { pronouns: g }) : null,
            label: eU.intl.string(eU.t["rniRE+"]),
            placeholder: h,
            maxLength: T.VE5,
            spellCheck: !1,
        }),
    });
}
var uj = n(453318),
    ub = n(305866),
    uC = n(145497),
    uy = n(685073),
    uE = n(1592),
    uS = n(318785),
    uN = n(534400),
    uk = n(152313),
    uT = n(830543),
    uP = n(415916),
    uR = n(743981),
    uO = n(295930),
    u_ = n(594615);
let uL = "no-server-tag";
function uw(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = null == l || null == n;
    return (0, i.jsx)(e9.D, {
        innerRef: t,
        className: s()(uO.qJ, { [uO.wK]: o }),
        "aria-label": o ? eU.intl.string(eU.t.Pdd1nd) : eU.intl.formatToPlainString(eU.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(ez.E, {
            variant: "text-xs/normal",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: uO.W3,
            tag: "span",
            children: [
                o
                    ? eU.intl.string(eU.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  uN.Z9,
                                  {
                                      src: (0, uy.gC)(n, r, uR.Sl.SIZE_14),
                                      size: uR.Sl.SIZE_14,
                                      className: uO.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, uy.gC)(n, r, uR.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(i3.a, { size: "xs", color: "currentColor", className: uO.u4 }),
            ],
        }),
    });
}
function uD() {
    let e = l.useRef(null),
        t = l.useId(),
        n = (0, uS.b)(),
        { creatableGuilds: r, isUpsellVisible: o } = (0, uE.Z)("UserProfileModalV2GuildTagSelect"),
        u = l.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        d = (0, a.cf)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (0, uy.Zo)(e?.primaryGuild);
        }),
        c = d.guildId ?? null,
        g = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingPrimaryGuildId),
        f = void 0 !== g ? g : c,
        m = null != f ? (u.get(f) ?? null) : null,
        p = null == m && f === c,
        h = m?.profile?.tag ?? (p ? (d.tag ?? null) : null),
        x = m?.profile?.badge ?? (p ? d.badge : void 0),
        A = l.useCallback(
            (e) =>
                e.id === uL
                    ? (0, i.jsx)("div", {
                          className: u_.uN,
                          children: (0, i.jsx)(ez.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: uO.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(li.c, { ...e }),
            [],
        ),
        I = l.useMemo(
            () => [
                { id: uL, label: eU.intl.string(eU.t.VxdWWH), value: uL },
                ...n.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(uC.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(uN.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
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
            (0, uP.A)(!0, () => {
                ((0, iL.M)(), (0, uT.default)(), (0, uk.A)(r, j.A.USER_PROFILE_MODAL_V2));
            }));
    }
    let C = (0, i.jsx)(uj.a3, {
        label: eU.intl.string(eU.t["5h0QOP"]),
        hideLabel: !0,
        placeholder: eU.intl.string(eU.t["5h0QOP"]),
        autoFocus: !0,
    });
    return (0, i.jsx)(nS.Y, {
        targetElementRef: e,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(ub.l, {
                className: s()(uO.yt, { [uO.R4]: o && !v, [uO.Lo]: v }),
                "aria-label": eU.intl.string(eU.t.Fo0g9x),
                "aria-describedby": v ? t : void 0,
                children: v
                    ? (0, i.jsxs)("div", {
                          className: uO.p$,
                          children: [
                              (0, i.jsx)(ez.E, {
                                  id: t,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: eU.intl.string(eU.t["NV+MBV"]),
                              }),
                              (0, i.jsx)(no.$, {
                                  text: eU.intl.string(eU.t["65zBhE"]),
                                  variant: "secondary",
                                  onClick: () => b(n),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(uj.iS, {
                          selectionMode: "single",
                          options: I,
                          onSelectionChange: (e) => {
                              ((0, tf.p)({ primaryGuildId: e === uL ? null : e }), n());
                          },
                          children: [
                              o
                                  ? (0, i.jsxs)("div", {
                                        className: uO.wx,
                                        children: [
                                            C,
                                            (0, i.jsx)(no.$, {
                                                text: eU.intl.string(eU.t.CumH4u),
                                                variant: "secondary",
                                                onClick: () => b(n),
                                            }),
                                        ],
                                    })
                                  : C,
                              (0, i.jsx)(uj.X2, { renderListItem: A }),
                          ],
                      }),
            });
        },
        children: (t) => (0, i.jsx)(uw, { buttonRef: e, guildId: f, guildTag: h, guildBadge: x, ...t }),
    });
}
var uM = n(956495);
function uG(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(uc.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function uU(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(uG, { ...e, displayNameStylesOverride: t });
}
function uF(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(ud.A, {
                  user: t,
                  forceUsername: !0,
                  className: uM.a1,
                  usernameClass: uM.eb,
                  discriminatorClass: uM.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(uA, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(uM.AK, uM.j6),
                children: [r, (0, i.jsx)(uc.Ce, {}), (0, i.jsx)(uv, { displayProfile: n }), (0, i.jsx)(uD, {}), l],
            }),
        ],
    });
}
function uW(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(uG, { ...n });
        case "try-it-out":
            return (0, i.jsx)(uU, { ...n });
        case "edit":
            return (0, i.jsx)(uF, { ...n });
        default:
            return (0, ef.xb)(t);
    }
}
var uB = n(97808),
    uV = n(22231),
    uH = n(601255),
    uz = n(562819),
    uY = n(19575),
    uK = n(339984),
    uq = n(329801),
    uX = n(884362);
let uZ = uY.Ay.getEnableHardwareAcceleration() ? uB.Js : uB.eu;
function u$(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function uJ(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(o1.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.YAgq3W),
        children: (0, i.jsx)(o0.rX, { children: n }),
    });
}
function uQ(e) {
    let { user: t, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eW.V)(e),
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
                m = (0, eI.z5)(g, f),
                p = d && null != t.avatar,
                h = J.Ay.canUsePremiumProfileCustomization(t),
                x = h || null == n,
                A = h || null == n,
                I = (0, a.bG)([K.A], () => (null != n ? K.A.getGuild(n) : null)),
                v = (0, eI.a4)({ user: t }),
                j = (0, eI.a4)({ user: t, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eI.CP)(n ?? void 0),
                y = void 0 !== C,
                E = null != (0, uH.A)(y ? C : j) && (y ? null != C : null != j),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        u$(() =>
                            (0, nf.XD)({
                                uploadType: uK.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        u$(() =>
                            (0, uz.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                T = l.useCallback(() => {
                    (r(),
                        (0, nf.rM)(null, f, (e) => (0, tf.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eI.WU)(p ? "reset" : "remove"));
                }, [r, n, f, p]),
                P = l.useCallback(() => {
                    (r(), (0, tf.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                o0.Dr,
                                { id: "change-avatar", label: eU.intl.string(eU.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                o0.Dr,
                                { id: "change-decoration", label: eU.intl.string(eU.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      o0.Dr,
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
                                      o0.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["2u5yu0"]),
                                          action: P,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      o0.Dr,
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
            }, [p, x, A, S, m, E, N, k, T, P]);
        })({ user: t, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, i.jsx)(eW.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(uq.my, uq.vk, uX.kL, { [uX.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(uZ, { ...r, imageClassName: s()(uq.Lw, uX.HU) }),
                  (0, i.jsx)(nS.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nS.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(uJ, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: uX.r9,
                              children: (0, i.jsx)(t7.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: uV.PencilIcon,
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
var u0 = n(514905);
function u1(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(o1.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.FzU73A),
        children: (0, i.jsx)(o0.rX, { children: n }),
    });
}
function u2(e) {
    let { user: t, guildId: n } = e,
        [r, o] = l.useState(!1),
        u = l.useRef(null),
        d = l.useRef(null),
        c = l.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: t, guildId: n, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: u } = (0, b.Ay)(),
                d = (0, eI.N2)({ user: t, guildId: n ?? void 0 }),
                c = (0, eI.Xf)({ user: t, guildId: n ?? void 0 }),
                g = (0, eI.Xf)({ user: t, guildId: void 0 }),
                f = J.Ay.canUsePremiumProfileCustomization(t),
                m = null == n,
                p = m || f,
                h = m || f,
                x = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: I,
                    pendingProfileFrame: v,
                } = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n ?? void 0)),
                j = (0, a.bG)([et.A], () =>
                    null != n ? et.A.getGuildMemberProfile(t.id, n)?.banner : et.A.getUserProfile(t.id)?.banner,
                ),
                C = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.banner != null),
                E = (0, a.bG)([et.A], () => et.A.getUserProfile(t.id)?.profileEffect != null),
                S = (0, a.bG)([et.A], () => et.A.getUserProfile(t.id)?.profileFrame != null),
                N = (0, eI.Ac)(A, j),
                k = x && C,
                T = x && E,
                P = x && S,
                R = void 0 === I ? null != d : null != I,
                O = void 0 === v ? null != c : null != v,
                _ = (0, eI.lw)({
                    pendingValue: v,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                L = (0, w.A)(_?.skuId),
                D = l.useCallback(() => {
                    (r(),
                        (0, nf.XD)({
                            uploadType: uK.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, n1.W)({
                            analyticsLocations: u,
                            guild: null != n ? (K.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nf.rM)(null, j, (e) => (0, tf.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, tf.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, iu.w)({
                            analyticsLocations: u,
                            guild: null != n ? (K.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, L, s]),
                W = l.useCallback(() => {
                    (r(), (0, tf.p)({ guildId: n ?? void 0, profileFrame: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, i.jsx)(
                                o0.Dr,
                                { id: "change-banner", label: eU.intl.string(eU.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                o0.Dr,
                                { id: "change-effect", label: eU.intl.string(eU.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                o0.Dr,
                                { id: "change-frame", label: eU.intl.string(eU.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        R &&
                        e.push(
                            T
                                ? (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.zUOlT6),
                                          action: U,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            P
                                ? (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      o0.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["8DfADq"]),
                                          action: W,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, h, T, P, N, R, O, D, M, F, G, U, W]);
        })({ user: t, guildId: n, onClose: c, returnRef: d });
    return 0 === g.length
        ? (0, i.jsx)(eV.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(u0.kL, { [u0.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eV.A, { ...e, className: u0.Pr }),
                  (0, i.jsx)(nS.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nS.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(u1, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: u0.r9,
                              children: (0, i.jsx)(t7.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: uV.PencilIcon,
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
var u5 = n(419341),
    u3 = n(732188),
    u9 = n(837531),
    u7 = n(186272),
    u8 = n(447538);
let u6 = (e) => e * (2 - e),
    u4 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function de(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function dt(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, eo.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: u8.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function dn(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (n3.add(e), () => n3.delete(e)),
            () => n9,
        );
    return null == s ? null : (0, i.jsx)(_.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function di(e) {
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
            onClose: v,
            onCreateTag: j,
            avatarDecorationOverride: b,
            avatarOverride: y,
            bannerOverride: E,
            accentColorOverride: S,
            profileEffectOverride: N,
            profileFrame: k,
            fadeInProfileFrame: P,
            editingMode: R,
            isLoading: O = !1,
        } = e,
        _ = o.id === u.id,
        L = "edit" === R,
        w = l.useRef(null),
        D = l.useRef(null),
        G = l.useRef(null);
    l.useEffect(() => {
        if (_) return () => C.A.setState({ isOpen: !1 });
    }, [_]);
    let { isHoveringOrFocusing: U } = (0, F.A)(w),
        [H, Y] = l.useState(),
        K = l.useCallback((e) => {
            let t = e.contentRect.width;
            t <= 350 ? Y("compact-xs") : t <= 380 ? Y("compact-sm") : Y(void 0);
        }, []);
    (0, I.g)(w, K, [], { fireOnMount: !0 });
    let Z = null != H ? u4[H] : void 0,
        J = l.useMemo(() => A ?? (0, W.A)(), [A]),
        { relationshipType: Q, originApplicationId: ee } = (0, a.cf)([q.A], () => ({
            relationshipType: q.A.getRelationshipType(o.id),
            originApplicationId: q.A.getOriginApplicationId(o.id),
        })),
        et =
            ((t = o.id),
            (n = (0, el.bG)([es.default], () => es.default.locale)),
            (r = (0, el.bG)([q.A], () => (q.A.getRelationshipType(t) === T.eA$.FRIEND ? q.A.getSince(t) : null), [t])),
            (0, er.An)(r, n)),
        en = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        ei = (0, V.q)({ userId: o.id }),
        ea = (0, B.fi)(o.id),
        { appIdentities: eo, connections: ep } = (function (e) {
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
                            return t?.migrationData == null || !i.has(t.migrationData.replacedBy);
                        }),
                    [n, i],
                ),
            };
        })(o.id),
        eh = (0, eu.A)(o.id),
        ex = ep.length > 0 || eo.length > 0,
        eA = eh.length > 0,
        eI = L ? u2 : eV.A,
        ev = p?.guildId ?? d,
        ej = {
            user: o,
            displayProfile: p,
            guildId: d,
            channelId: m,
            avatarSize: Z?.avatarSize ?? ey.T[eC.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: b,
            avatarOverride: y,
        },
        eb = l.useCallback(() => {
            (0, e5.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, i.jsxs)("main", {
        className: s()(u8.profile, null != H && u8[H]),
        ref: w,
        "aria-busy": O,
        children: [
            (0, i.jsxs)("div", {
                className: u8.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: u8.profileHeaderBannerContainer,
                        children: (0, i.jsx)(eI, {
                            user: o,
                            displayProfile: p,
                            guildId: d,
                            themeType: eC.d.MODAL_V2,
                            specOverrides: Z,
                            pendingBanner: E,
                            pendingAccentColor: S,
                        }),
                    }),
                    L
                        ? (0, i.jsx)(uQ, { ...ej })
                        : (0, i.jsx)(eW.A, {
                              ...ej,
                              onOpenAvatar: "read-only" === R ? eb : void 0,
                              imageAnimatingClassName: "try-it-out" === R && null == y ? iX.$T : void 0,
                          }),
                    (0, i.jsx)(e1.A, {
                        user: o,
                        guildId: d,
                        channelId: m,
                        themeType: eC.d.MODAL_V2,
                        hasEntered: x,
                        prompt: _ ? J : null,
                    }),
                ],
            }),
            (0, i.jsxs)(c.Ip, {
                fade: !0,
                className: u8.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(uW, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, i.jsx)(eB.A, {
                                    displayProfile: p,
                                    themeType: eC.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: _,
                                    popoutAnchorRef: x ? D : void 0,
                                    containerRef: G,
                                }),
                                onClose: v,
                                onCreateTag: j,
                                editingMode: R,
                            }),
                            (0, i.jsx)("div", { ref: D }),
                            _ && x && (0, i.jsx)(eF, { targetElementRef: G }),
                        ],
                    }),
                    Q === T.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e0.A.Overlay, {
                            className: u8.profileOverlay,
                            children: (0, i.jsx)(eq.A, {
                                user: o,
                                applicationId: ee,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: u8.profileBanner,
                            }),
                        }),
                    ea.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e0.A.Overlay,
                            {
                                className: u8.profileOverlay,
                                children: (0, i.jsx)(eq.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: u8.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e0.A.Overlay, {
                            className: u8.profileOverlay,
                            children: (0, i.jsx)(tc, {
                                heading: eU.intl.string(eU.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: u8.profileBanner,
                                children: (0, i.jsx)(z.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(eQ.A, { user: o, className: u8.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(e0.A.Overlay, {
                            className: u8.profileOverlay,
                            children: (0, i.jsx)(eJ.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: u8.profileButtons,
                        children: (0, i.jsx)(tU, {
                            user: o,
                            currentUser: u,
                            guildId: d,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: Q,
                            onClose: v,
                        }),
                    }),
                    _ && "try-it-out" !== R && (0, i.jsx)(eH.A, { isPremiumUser: (0, $.ki)(u) }),
                    !en && (0, i.jsx)(tN, { currentUser: u, displayProfile: p, canEditInPlace: L }),
                    ei.length > 0 &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t["Uv/eTx"]),
                            children: (0, i.jsx)(eK.A, { applicationIds: ei }),
                        }),
                    (0, i.jsx)(tc, {
                        heading: eU.intl.string(eU.t.a6XYD9),
                        children: (0, i.jsx)(eZ.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: rf.In }),
                    }),
                    null != et &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t.wlTO8v),
                            children: (0, i.jsx)(eY, { friendsSinceDate: et }),
                        }),
                    p?.guildId != null &&
                        (0, i.jsx)(e2.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: u8.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !en &&
                        (L || ex) &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t["3fe7U5"]),
                            scrollTargetId: rf.bk.CONNECTIONS,
                            children: (0, i.jsx)(t3, {
                                applicationIdentities: eo,
                                connections: ep,
                                userId: o.id,
                                allowEditing: L,
                                className: u8.profileAppConnections,
                            }),
                        }),
                    !en &&
                        eA &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t.PHjkRE),
                            scrollTargetId: rf.bk.APPS,
                            children: (0, i.jsx)(tr, {
                                applicationRoleConnections: eh,
                                onClose: v,
                                className: u8.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rS, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(dn, { displayProfile: p, profileEffectOverride: N, isHovering: U }),
            null != k && (0, i.jsx)(M.A, { frame: k, filterLayer: de, fadeIn: P }),
        ],
    });
}
function dl(e) {
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
function dr(e) {
    let t,
        n,
        r,
        {
            user: u,
            currentUser: c,
            guildId: g,
            originGuildId: I,
            channelId: C,
            messageId: E,
            roleId: S,
            sessionId: N,
            initialTabSection: k,
            initialScrollTarget: T,
            transitionState: _,
            customStatusPrompt: M,
            openedAt: F,
            onClose: W,
            sourceAnalyticsLocations: B = [],
            themeContainerClassName: V,
        } = e,
        z = u.id === c.id,
        q = l.useCallback(() => (0, uP.A)(z, W), [z, W]),
        $ = l.useCallback(
            (e) =>
                (0, uP.A)(z, () => {
                    (W(), e());
                }),
            [z, W],
        ),
        {
            guildId: el,
            pendingGuildId: er,
            isFetching: es,
            handleSelectUserProfile: ea,
            handleRetry: eo,
            hasError: eu,
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
        ed = l.useMemo(() => (null != el ? { [el]: [u.id] } : {}), [el, u.id]);
    (0, v.Eq)(ed, "UserProfileModalV2");
    let ec = (0, en.X)("UserProfileModalV2"),
        eg = nn(),
        ef = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        em = (0, ep.A)(u.id) && ec,
        ex = (0, eh.W)(u.id),
        ey = eu && !ex,
        eT = em && !ef && !eu && !eg,
        eP = eg ? "try-it-out" : eT ? "edit" : "read-only",
        {
            pendingThemeColors: eR,
            avatarDecorationOverride: eO,
            avatarOverride: e_,
            bannerOverride: eL,
            accentColorOverride: ew,
            profileEffectOverride: eD,
            profileFrameOverride: eM,
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
                        avatarDecorationOverride: (0, eI.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: n,
                        }),
                        avatarOverride: (0, ev.V7)({ userId: t, image: r.pendingAvatar, size: eE }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, eI.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: n,
                        }),
                        profileFrameOverride: (0, eI.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: n,
                        }),
                    };
                },
                [t, n, i],
            );
        })({ userId: u.id, guildId: el, editingMode: eP }),
        {
            isExpanded: eG,
            isAnimating: eF,
            transition: eW,
            handleExpand: eB,
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
                    config: { duration: 300, easing: u6 },
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
        eK = em && !eG,
        eq = em && (!eG || eF),
        { defaultWishlistId: eZ } = (0, a.cf)([et.A], () => ({ defaultWishlistId: et.A.getFirstWishlistId(u.id) }));
    ((0, Y.fw)({ wishlistId: eZ, userId: u.id }),
        (t = (0, O.D)("edit_profile_preload")),
        (n = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([R.A], () => R.A.shouldFetch())),
        (0, l.useEffect)(() => {
            t && null != n && r && P();
        }, [t, n, r]));
    let eJ = (0, ek.fC)(),
        eQ = ey && (!em || !es),
        e1 = em && eu,
        e2 = er !== el || e1 || null != eJ.interactionType,
        e5 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, sh.A)(t),
                r = l?.length,
                s = (0, u3.A)(t),
                a = (0, sL.A)(t.id),
                o = (0, u5.A)(t),
                { hasNewWishlistItems: u } = (0, rz.A)(t),
                d = [],
                c = t.id === n?.id,
                g = sw(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eU.intl.string(eU.t.laViwx), section: rf.RP.WIDGETS }),
                d.push({ text: eU.intl.string(eU.t.chq59f), section: rf.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eU.intl.string(eU.t["7lZ31J"]), section: rf.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, u9.A)(i), section: rf.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, u7.A)(r), section: rf.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e3 } = (0, b.Ay)([...B, j.A.USER_PROFILE_MODAL_V2]),
        e9 = (0, Q.pb)({
            layout: "MODAL_V2",
            userId: u.id,
            sourceSessionId: N,
            guildId: el,
            channelId: C,
            messageId: E,
            roleId: S,
        }),
        e7 = l.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e3, ...e9, action: rf.pt.SHOW_STYLES_PANEL }), eB());
        }, [e3, e9, eB]),
        e8 = l.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e3, ...e9, action: rf.pt.HIDE_STYLES_PANEL }), eV());
        }, [e3, e9, eV]),
        e6 = (0, ei.Ay)(u.id, el);
    (0, H.A)(e3, e6, rf.R7.MODAL_V2);
    let e4 = void 0 !== eM ? eM?.skuId : e6?.profileFrame?.skuId,
        te = (0, w.A)(e4),
        tt = (0, L.A)(e4),
        { profileFrameStyle: tn, profileFrameClassName: ti } = (0, G.A)(te);
    (0, D.A)({ skuId: e6?.profileFrame?.skuId, openedAt: F, context: e9, analyticsLocations: e3 });
    let tl = (0, a.bG)([y.default], () => J.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        tr = eg || (z && null != e6 && tl),
        ts = Z.Ay.useName(e6?.guildId, C, u),
        ta = (0, U.GV)(),
        to = (0, a.bG)([K.A], () => (null != el ? K.A.getGuild(el) : null)),
        tu = z
            ? null != to
                ? eU.intl.formatToPlainString(eU.t.M7OhOF, { guildName: to.name })
                : eU.intl.string(eU.t.egQPgM)
            : eU.intl.format(eU.t.KRe1Fk, { name: ts });
    return (0, i.jsx)(b.f5, {
        value: e3,
        children: (0, i.jsx)(Q.of, {
            value: e9,
            openedAt: F,
            fetchStartedAt: e6?.fetchStartedAt,
            fetchEndedAt: e6?.fetchEndedAt,
            isLoaded: e6?.isLoaded,
            children: (0, i.jsx)(ek.Hl, {
                value: eJ,
                children: (0, i.jsx)(eN.N, {
                    value: T,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(iX.zr, { [iX.QF]: e6?.private === !0 }),
                        transitionState: _,
                        "aria-labelledby": ta,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rw, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(u8.layoutContainer, ti, {
                                        [u8.editingPanelEnabled]: em,
                                        [u8.editingPanelExpanded]: em && eG,
                                        [u8.isAnimating]: eF,
                                    }),
                                    style: tn,
                                    children: [
                                        (0, i.jsxs)(dl, {
                                            user: u,
                                            displayProfile: e6,
                                            pendingThemeColors: eR,
                                            forceShowPremium: tr,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iX.Oo,
                                                    children: [
                                                        (0, i.jsx)(tF.A, { onClose: q }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: ta, children: tu }),
                                                        }),
                                                        eq &&
                                                            (0, i.jsx)(lK, {
                                                                buttonRef: eH,
                                                                onClick: e7,
                                                                className: u8.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eK &&
                                                    (0, i.jsx)("div", {
                                                        className: u8.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lY, {
                                                            innerRef: ez,
                                                            onClick: e7,
                                                            className: u8.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                em &&
                                                    eW((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(lq, {
                                                                  className: s()(u8.editingPanel, {
                                                                      [u8.isExpanded]: eG,
                                                                  }),
                                                                  selectedGuildId: er,
                                                                  originGuildId: I,
                                                                  onSelectGuildId: ea,
                                                                  onClose: e8,
                                                                  collapseButtonRef: eY,
                                                                  isLoading: es,
                                                                  isEditingDisabled: eu,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e0.A, {
                                                    className: s()(V, iX.A7, u8.profileContentOuter),
                                                    innerClassName: u8.profileContentInner,
                                                    user: u,
                                                    displayProfile: e6,
                                                    themeType: eC.d.MODAL_V2,
                                                    pendingThemeColors: eR,
                                                    isPrivate: e6?.private === !0,
                                                    forceShowPremium: tr,
                                                    children: [
                                                        (0, i.jsx)(dt, { displayProfile: e6, pendingBanner: eL }),
                                                        e6?.private === !0 && (0, i.jsx)(e$.A, {}),
                                                        !ey && (0, i.jsx)(uu, { className: u8.noticeContainer }),
                                                        eQ &&
                                                            (0, i.jsx)("div", {
                                                                className: u8.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rT, {
                                                                    icon: (0, i.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eU.intl.string(eU.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != eo
                                                                            ? eU.intl.string(eU.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: eo,
                                                                    actionDisabled: !em && es,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: u8.profileCardToastContainer,
                                                            children: (0, i.jsx)(eX.A, {}),
                                                        }),
                                                        (0, i.jsxs)(r_, {
                                                            showScrim: e2,
                                                            showLoadingSpinner: es,
                                                            className: u8.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(di, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    guildId: el,
                                                                    channelId: C,
                                                                    displayProfile: e6,
                                                                    nickname: ts,
                                                                    originGuildId: I,
                                                                    hasEntered: _ === x.ip.ENTERED,
                                                                    customStatusPrompt: M,
                                                                    onClose: q,
                                                                    onCreateTag: $,
                                                                    avatarDecorationOverride: eO,
                                                                    avatarOverride: e_,
                                                                    bannerOverride: eL,
                                                                    accentColorOverride: ew,
                                                                    profileEffectOverride: eD,
                                                                    profileFrame: te,
                                                                    fadeInProfileFrame: tt,
                                                                    editingMode: eP,
                                                                    isLoading: es,
                                                                }),
                                                                (0, i.jsx)(ur, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: e6,
                                                                    guildId: el,
                                                                    channelId: C,
                                                                    items: e5,
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
                            (0, i.jsx)(rA, { userId: u.id, guildId: el, className: u8.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ds(e) {
    return (0, i.jsx)(nt, { children: (0, i.jsx)(dr, { ...e }) });
}
