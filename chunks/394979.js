n.d(t, { A: () => uZ });
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
    $ = n(474090),
    J = n(158045),
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
    eP = n(554146),
    eT = n(43105),
    eR = n(844222),
    eO = n(947984),
    e_ = n(643056),
    eL = n(327791),
    ew = n(262),
    eD = n(982240),
    eM = n(131607),
    eG = n(49999),
    eU = n(660183);
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
        [f, m] = (0, eM.kn)(c && u ? [eP.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return f !== eP.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, i.jsx)(eT.A, {
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
    eB = n(365607),
    eV = n(915614),
    eH = n(744753),
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
    e8 = n(939249),
    e9 = n(730134),
    e7 = n(169869),
    e6 = n(837057),
    e4 = n(310419),
    te = n(889227),
    tt = n(967198),
    tn = n(488995),
    ti = n(576849);
function tl(e) {
    let { applicationRoleConnection: t, locale: n, onApplicationClicked: l, selectedGuildId: r } = e,
        s = (0, e7.VW)(t, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: ti.k_,
                children:
                    null != t.application.bot
                        ? (0, i.jsx)(e9.A, { user: new te.A(t.application.bot), size: u._3.SIZE_16 })
                        : (0, i.jsx)(e3._, { color: "currentColor", size: "sm" }),
            }),
            (0, i.jsxs)("div", {
                className: ti.Hd,
                children: [
                    (0, i.jsxs)(e8.D, {
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
    let P = (0, i.jsxs)("div", {
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
            (0, i.jsx)(e8.D, {
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
                              (0, i.jsx)("div", { className: tx.VH, children: P }),
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
    tP = n(722868),
    tT = n(822775),
    tR = n(982985),
    tO = n(558514),
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
        g = (0, tP.A)({ user: t, guildId: r, channelId: s, displayProfile: a, onClose: u }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, tG.J)({ userId: t.id }),
        h = f.length > 0 || m || p;
    return o === P.eA$.BLOCKED
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
                        (0, i.jsx)(tT.A, { user: t, guildId: l, onClose: u }),
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
            : o === P.eA$.PENDING_INCOMING
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(tR.e, { userId: t.id, onClose: tk.A.popAll, autoFocus: !0 }),
                        (0, i.jsx)(tO.Zt, { user: t, guildId: l }),
                    ],
                })
              : o === P.eA$.FRIEND || o === P.eA$.PENDING_OUTGOING
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(tR.e, { userId: t.id, onClose: tk.A.popAll, autoFocus: !0 }),
                          (0, i.jsx)(tM.Ef, { user: t, relationshipType: o, analyticsLocation: c }),
                          (0, i.jsx)(tO.Zt, { user: t, guildId: l, viewProfileItem: g }),
                      ],
                  })
                : o === P.eA$.NONE && h
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
        tq.default.track(P.HAw.ACCOUNT_LINK_STEP, {
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
                          ((0, tz.zV)(P.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: l }),
                              (0, tZ.h)({ href: e, trusted: a?.type !== P.fg2.DOMAIN }, n));
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
            return t.type === P.fg2.REDDIT
                ? (0, e7.xE)(r)
                : t.type === P.fg2.STEAM
                  ? (0, e7.dy)(r)
                  : t.type === P.fg2.BLUESKY || t.type === P.fg2.MASTODON || t.type === P.fg2.TWITTER
                    ? (0, e7.ED)(r)
                    : t.type === P.fg2.PAYPAL
                      ? (0, e7.gZ)(r)
                      : t.type === P.fg2.EBAY
                        ? (0, e7.ub)(r)
                        : t.type === P.fg2.TIKTOK
                          ? (0, e7.HU)(r)
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
                (0, i.jsxs)(e8.D, {
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
var t8 = n(193885),
    t9 = n(408278),
    t7 = n(461797),
    t6 = n(23722);
let t4 = { id: "default" },
    ne = l.createContext(null),
    nt = l.createContext(null);
function nn(e) {
    let { children: t } = e,
        [n, r] = l.useState(t4),
        [s, o] = l.useState(null),
        [u] = l.useState(t7.B$),
        d = l.useRef(u),
        c = (0, t6.A)((e) => {
            r(e);
        }),
        g = l.useCallback(() => {
            r(t4);
        }, []),
        f = l.useCallback(() => d.current, []),
        m = (0, a.bG)([y.default], () => J.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        p = m ? t4 : n,
        h = !m && s?.id === "premiumTryItOut",
        x = l.useCallback(() => {
            o(p);
        }, [p]),
        A = l.useCallback((e) => {
            d.current = e;
        }, []),
        I = l.useMemo(
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
    return (0, i.jsx)(nt.Provider, { value: h, children: (0, i.jsx)(ne.Provider, { value: I, children: t }) });
}
function ni() {
    let e = l.useContext(ne);
    if (null == e)
        throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
    return e;
}
function nl() {
    let e = l.useContext(nt);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function nr() {
    let { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: n, navigate: i, goBack: l } = ni();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: l,
    };
}
var ns = n(194261),
    na = n(789645),
    no = n(297264),
    nu = n(508770),
    nd = n(821609),
    nc = n(39623),
    ng = n(890377),
    nf = n(517461),
    nm = n(248778),
    np = n(465794),
    nh = n(252732),
    nx = n(487233),
    nA = n(120386),
    nI = n(317097),
    nv = n(602853),
    nj = n(922016),
    nb = n(508274),
    nC = n(654107),
    ny = n(930349);
function nE(e) {
    let { user: t, disabled: n = !1 } = e,
        r = l.useRef(null),
        s = (0, nv.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, nC.rh)(t.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: u, savedAccentColor: d } = (0, a.cf)([eb.A, et.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: et.A.getUserProfile(t.id)?.accentColor,
        })),
        c = u ?? d ?? (0, nI.LX)(o[0] ?? s),
        g = l.useCallback((e) => (0, tf.p)({ accentColor: e }), []);
    return (0, i.jsx)(nj.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, i.jsx)(nb.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, i.jsx)(ny.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eU.intl.string(eU.t["/X3fkf"]),
                accessibleValue: (0, nI.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, i.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, nI.Hl)(c) } }),
            }),
    });
}
var nS = n(841183),
    nN = n(450373),
    nk = n(317139);
function nP(e) {
    let { backgroundColor: t } = e;
    return (0, i.jsx)("div", { className: nk.o, style: { backgroundColor: t } });
}
function nT(e) {
    let { src: t } = e;
    return (0, i.jsx)("img", { src: t, alt: "", className: nk._ });
}
function nR(e) {
    let { displayProfile: t, bannerChange: n, shouldAnimate: l } = e,
        r = (0, nv.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        s = t?.primaryColor ?? (0, nI.LX)(r),
        { hex: a } = (0, nN.A)(s),
        o = t?.getPreviewBanner(n, l, 296) ?? void 0;
    return null != o ? (0, i.jsx)(nT, { src: o }) : (0, i.jsx)(nP, { backgroundColor: a });
}
function nO(e) {
    let { displayProfile: t, bannerChange: n, ...l } = e;
    return (0, i.jsx)(ny.A, {
        ...l,
        accessibleLabel: eU.intl.string(eU.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, i.jsx)(nR, { displayProfile: t, bannerChange: n, shouldAnimate: e }),
    });
}
var n_ = n(569059);
function nL(e) {
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
                accessibleValue: (0, nS.ID)(i, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != l,
            };
        })(t, n),
        m = (0, eI.Ac)(u, g)
            ? {
                  onClick: () => (0, nh.rM)(null, g, (e) => (0, tf.p)({ guildId: n ?? void 0, banner: e })),
                  type: f ? "reset" : "remove",
                  accessibleLabel: eU.intl.string(f ? eU.t.jHlJNS : eU.t.tT9n7D),
              }
            : void 0,
        p = (0, n_.P)({ guildId: n, returnRef: a });
    return (0, i.jsx)(nO, {
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
var nw = n(259065),
    nD = n(922301),
    nM = n(660184),
    nG = n(523312);
let nU = "heading-xl/semibold";
function nF(e) {
    let { displayName: t, displayNameStyles: n, shouldAnimate: l = !1 } = e;
    return (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: s()(nG.MC, { [nG.Xn]: null != n }),
        children:
            null != n
                ? (0, i.jsx)(ez.E, {
                      variant: nU,
                      children: (0, i.jsx)(nM.A, {
                          userName: t,
                          displayNameStyles: n,
                          effectDisplayType: l ? nD.G.ANIMATED : nD.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, i.jsx)(ez.E, { variant: nU, className: nG.kr, children: t }),
    });
}
function nW(e) {
    let { displayName: t, displayNameStyles: n, shouldAlwaysAnimate: l = !1, ...r } = e;
    return (0, i.jsx)(ny.A, {
        ...r,
        accessibleLabel: eU.intl.string(eU.t.vKBV4A),
        renderPreview: (e) => (0, i.jsx)(nF, { displayNameStyles: n, displayName: t, shouldAnimate: l || e }),
    });
}
function nB(e) {
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
            (o?.(), (0, nw.L)({ analyticsLocations: u, guildId: n ?? void 0, stackingBehavior: "stack" }));
        }, [u, n, o]);
    return (0, i.jsx)(nW, {
        affordance: (!v && (I || null != A)) || j ? N : "add",
        variant: "bar",
        onClick: k,
        accessibleValue: (0, nS.I9)(C),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: E,
        displayNameStyles: C,
        disabled: r,
    });
}
var nV = n(450232),
    nH = n(89851);
function nz(e) {
    let { heading: t, children: n, disabled: l = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, i.jsxs)("div", {
        className: nH.Os,
        children: [
            (0, i.jsxs)("div", {
                className: s()(nH.Pf, { [nH.r9]: l }),
                children: [
                    (0, i.jsx)(no.D, {
                        className: nH.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: t,
                    }),
                    r && (0, i.jsx)(nV.A, { className: nH.IX, size: "xs", color: "inherit", disabled: l }),
                    null != a && (0, i.jsx)("span", { className: nH.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nY(e) {
    let { id: t, message: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: nH.gJ,
              role: "alert",
              children: [
                  (0, i.jsx)(g.E, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, i.jsx)(ez.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: t, children: n }),
              ],
          });
}
var nK = n(374654),
    nq = n(366010),
    nX = n(736653),
    nZ = n(674658),
    n$ = n(617061),
    nJ = n(203632),
    nQ = n(536572);
let n0 = new Set(),
    n1 = 0;
var n2 = n(993408),
    n5 = n(841702),
    n3 = n(515718),
    n8 = n(195292);
function n9(e) {
    "" !== e.thumbnailPreviewSrc && (0, n3.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var n7 = n(599752),
    n6 = n(249360);
let n4 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    ie =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function it(e) {
    let { effect: t, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        u = (0, nX.Ay)(),
        d = (0, nq.M)(u) ? n4 : ie,
        c = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n5.Ay)({ stalePurchasesOK: !0 }),
                s = l.useMemo(() => (0, n2.wo)(r, i), [r, i]),
                a = (0, n8.A)({ enabled: t, isInteracting: n, items: s, preload: n9 });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : t;
    return (
        l.useEffect(() => {
            n && ((n1 += 1), n0.forEach((e) => e()));
        }, [n]),
        (0, i.jsxs)("div", {
            className: n7.ti,
            "aria-hidden": !0,
            children: [
                (0, i.jsx)("img", { src: d, alt: "", className: n7.QQ }),
                f?.skuId != null &&
                    (0, i.jsx)("div", {
                        className: s()(n7.yY, { [n6.O]: g }),
                        children: (0, i.jsx)(_.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nJ.HL.FromStart,
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
function ii(e) {
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
        { product: I } = (0, nZ.q)(A?.skuId),
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
            (0, n$.W)({ analyticsLocations: u, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [u, c]);
    return (0, i.jsx)(ny.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : j,
        variant: s,
        onClick: C,
        accessibleLabel: eU.intl.string(eU.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t["1M4m8w"] : eU.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, nQ.VG)(I), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(it, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var il = n(163697),
    ir = n(515727),
    is = n(746002);
function ia(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((t) => {
            let n = (0, is.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: is.CollectiblesItemAssetFormat.STATIC,
                assetId: t.id,
            });
            null != n && (0, n3.NN)(n).catch(() => {});
        });
}
var io = n(715196);
function iu(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function id(e) {
    let { profileFramePreview: t, isEmpty: n, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        u = (0, nX.Ay)(),
        d = (0, nq.M)(u) ? n4 : ie,
        c = (0, w.A)(t?.skuId),
        g = (function (e) {
            let { enabled: t, isInteracting: n } = e,
                { categories: i, purchases: r } = (0, n5.Ay)({ stalePurchasesOK: !0 }),
                s = l.useMemo(() => (0, n2.MG)(r, i), [r, i]);
            return (0, n8.A)({ enabled: t, isInteracting: n, items: s, preload: ia });
        })({ enabled: n && !r && !o, isInteracting: a }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != m ? (0, il.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != m &&
                (0, i.jsx)("div", {
                    className: s()(io.hm, h, { [n6.O]: f }),
                    style: p,
                    children: (0, i.jsx)(M.A, { frame: m, filterLayer: iu, isPreview: !0 }),
                }),
            (0, i.jsx)("div", {
                className: s()(io.ti, { [io.yT]: null == m }),
                children: (0, i.jsx)("img", { src: d, alt: "", className: io.QQ, draggable: !1 }),
            }),
        ],
    });
}
function ic(e) {
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
        { product: A } = (0, nZ.q)(x?.skuId),
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
            (0, ir.w)({ analyticsLocations: o, guild: d ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, d]);
    return (0, i.jsx)(ny.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : v,
        variant: "square",
        onClick: j,
        accessibleLabel: eU.intl.string(eU.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: t, productName: n, hasPendingSelection: i } = e;
            return null == t
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eU.intl.string(i ? eU.t.yFeGB5 : eU.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nQ.VG)(A), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, i.jsx)(id, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var ig = n(684732),
    im = n(498596),
    ip = n(871524);
function ih(e) {
    let { primaryColor: t, secondaryColor: n, children: l } = e,
        r = `linear-gradient(to bottom, ${(0, nI.Hl)(t)}, ${(0, nI.Hl)(n)})`;
    return (0, i.jsx)("div", { className: ip.D7, style: { background: r }, children: l });
}
function ix(e) {
    let { color: t } = e,
        n = (0, nI.Hl)(t),
        l = (0, nI.bJ)(t, 0xffffff) < im.Tr.NonText;
    return (0, i.jsx)("div", {
        className: ip.OS,
        children: (0, i.jsx)("div", { className: s()(ip.Hy, { [ip.rY]: l }), style: { backgroundColor: n } }),
    });
}
function iA(e) {
    let { color: t, disabled: n, onClick: r, buttonRef: s, ...a } = e,
        o = l.useRef(null);
    return (0, i.jsx)(e8.D, {
        ...a,
        innerRef: s ?? o,
        className: ip.Dh,
        onClick: n ? void 0 : r,
        "aria-disabled": n,
        tabIndex: n ? -1 : 0,
        children: (0, i.jsx)(ix, { color: t }),
    });
}
function iI(e) {
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
    return (0, i.jsx)(nj.Y, {
        targetElementRef: d,
        shouldShow: s,
        onRequestOpen: a,
        onRequestClose: o,
        renderPopout: (e) => (0, i.jsx)(nb.VN, { ...e, value: t, onChange: u, suggestedColors: l, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...s } = e;
            return (0, i.jsx)(iA, { color: t, onClick: l, disabled: r, buttonRef: d, "aria-label": n, ...s });
        },
    });
}
function iv(e) {
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
        A = eU.intl.formatToPlainString(eU.t.FquTfm, { colorLabel: h }),
        I = eU.intl.formatToPlainString(eU.t.xOnm4z, { colorLabel: x });
    l.useEffect(() => {
        if (null == c) return;
        let e = requestAnimationFrame(() => {
            let e = "theme-primary" === c ? m : p;
            (e.current?.focus(), f(c));
        });
        return () => cancelAnimationFrame(e);
    }, [c]);
    let v =
        null != u
            ? {
                  ...u,
                  onClick: () => {
                      (u.onClick(), m.current?.focus());
                  },
              }
            : void 0;
    return (0, i.jsx)(ny.Y, {
        variant: d,
        disabled: o,
        deleteButton: v,
        children: (0, i.jsxs)(ih, {
            primaryColor: t,
            secondaryColor: n,
            children: [
                (0, i.jsx)(iI, {
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
                (0, i.jsx)(iI, {
                    color: n,
                    ariaLabel: I,
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
function ij(e) {
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
        p = (0, nv.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : t.getAvatarURL(n ?? void 0, 80),
        A = (0, nC.rh)(x, p, !1),
        I = l.useCallback(
            (e) => {
                (0, tf.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        v =
            null != n && (0, ig.l)(u, o)
                ? {
                      onClick: () => (0, tf.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eU.intl.string(eU.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, i.jsx)(iv, {
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
var ib = n(629985);
function iC(e) {
    let { children: t, hasGradientBackground: n = !1 } = e;
    return (0, i.jsx)(m.F, { children: (0, i.jsx)("div", { className: s()(ib.k, { [ib.V]: n }), children: t }) });
}
var iy = n(689175),
    iE = n(424290);
function iS(e) {
    let { children: t } = e;
    return (0, i.jsx)(iy.zC, { className: iE.X, children: (0, i.jsx)("div", { className: iE.Q, children: t }) });
}
var iN = n(732280),
    ik = n(811611),
    iP = n(976860),
    iT = n(38145);
function iR() {
    return l.useCallback(() => {
        ((0, iP.pX)(P.BVt.NITRO_HOME), (0, iT.M)());
    }, []);
}
var iO = n(724651),
    i_ = n(511484),
    iL = n(202541);
function iw(e) {
    let t = (0, a.bG)([y.default], () => J.Ay.isPremium(y.default.getCurrentUser())),
        n = (0, iO.O)();
    return t
        ? eU.intl.string(eU.t.AfRWI8)
        : (0, i_.U9)(n, iL.pe.TIER_2) && n?.discount.amount != null
          ? eU.intl.formatToPlainString(eU.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var iD = n(155053);
function iM() {
    let e = (0, iN.V)();
    return e?.subscriptionTrial?.skuId === iL.pe.TIER_2 ? e : null;
}
function iG() {
    let e = iw(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(np.A, { subscriptionTier: iL.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function iU(e) {
    let { trialOffer: t, onSubscribeClick: n, onSubscribeSuccess: l, onSubscribeClose: r } = e,
        s = iR(),
        a = (0, J.FY)({
            intervalType: t.subscriptionTrial?.interval,
            intervalCount: t.subscriptionTrial?.intervalCount,
        }),
        o = (0, ik.ux)(t.expiresAt?.toISOString());
    return (0, i.jsxs)("div", {
        className: iD.nH,
        children: [
            (0, i.jsxs)("div", {
                className: iD.qf,
                children: [
                    (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: eU.intl.string(eU.t.IBYG5U) }) }),
                    (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, i.jsx)(nu.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, i.jsx)(ez.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eU.intl.format(eU.t["fF+cgd"], { onClick: s }),
            }),
            (0, i.jsx)(np.A, {
                subscriptionTier: iL.pe.TIER_2,
                buttonTextOverride: a,
                onClick: n,
                onSubscribeModalClose: (e) => {
                    (e && l?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, i.jsx)(ez.E, { variant: "text-xs/normal", color: "text-muted", className: iD.u8, children: o }),
        ],
    });
}
function iF() {
    let e = iM();
    return null == e ? (0, i.jsx)(iG, {}) : (0, i.jsx)(iU, { trialOffer: e });
}
var iW = n(55619),
    iB = n(848717);
function iV() {
    return (0, i.jsxs)("div", {
        className: iB.k,
        children: [
            (0, i.jsx)(ez.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eU.intl.string(eU.t.JFY17v),
            }),
            (0, i.jsx)(nd.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eU.intl.string(eU.t.R9GHya),
                onClick: function () {
                    return iW.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var iH = n(342866),
    iz = n(968475);
function iY(e) {
    let { user: t, ...n } = e,
        { pendingAvatar: l, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : l;
    return (0, i.jsx)(iH.A, {
        ...n,
        variant: "full-height-bar",
        userId: t.id,
        avatarChange: s,
        accessibleValue: (0, nS.Fk)(s, t.avatar),
        imageInteractingClassName: null == r ? iz.$T : void 0,
    });
}
function iK(e) {
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
    return (0, i.jsx)(nO, {
        ...n,
        variant: "full-height-bar",
        displayProfile: l,
        bannerChange: u,
        accessibleValue: (0, nS.ID)(u, o),
    });
}
function iq(e) {
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
    return (0, i.jsx)(nW, {
        ...n,
        variant: "bar",
        displayNameStyles: u,
        displayName: d,
        accessibleValue: (0, nS.I9)(u),
        shouldAlwaysAnimate: null == r,
    });
}
var iX = n(207803);
function iZ(e) {
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
function i$(e) {
    let { user: t, initialOpenPopout: n } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = iZ(t),
        u = (0, nv.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        d = null != a ? a : t.getAvatarURL(void 0, 80),
        c = (0, nC.rh)(d, u, !1),
        g = l.useCallback((e) => {
            (0, iX.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, i.jsx)(iv, {
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
function iJ(e) {
    let { user: t, onClickPrimary: n, onClickSecondary: l } = e,
        { primaryColor: r, secondaryColor: s } = iZ(t);
    if (null == r || null == s) return null;
    let a = eU.intl.formatToPlainString(eU.t.FquTfm, { colorLabel: (0, nI.Hl)(r) }),
        o = eU.intl.formatToPlainString(eU.t.xOnm4z, { colorLabel: (0, nI.Hl)(s) });
    return (0, i.jsx)(ny.Y, {
        variant: "full-height-bar",
        children: (0, i.jsxs)(ih, {
            primaryColor: r,
            secondaryColor: s,
            children: [
                (0, i.jsx)(iA, { color: r, onClick: n, "aria-label": a }),
                (0, i.jsx)(iA, { color: s, onClick: l, "aria-label": o }),
            ],
        }),
    });
}
var iQ = n(847081);
function i0(e) {
    let { user: t, mode: n } = e,
        r = l.useRef(null),
        s = l.useRef(null),
        a = l.useRef(null),
        o = l.useRef(!1),
        { initialTarget: u, navigate: d } = nr(),
        c = (function (e) {
            let { analyticsLocations: t } = (0, b.Ay)();
            return l.useCallback(() => {
                (0, nw.L)({ analyticsLocations: t, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [t, e]);
        })(r),
        g = (0, n_._)({ isPremiumTryItOut: !0, returnRef: s }),
        f = (0, n_.P)({ isPremiumTryItOut: !0, returnRef: a }),
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
            className: iQ.T,
            children: [
                (0, i.jsx)(nz, {
                    heading: eU.intl.string(eU.t.NEzEws),
                    children: (0, i.jsx)(iq, {
                        user: t,
                        buttonRef: r,
                        onClick: m ? c : () => d({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nz, {
                    heading: eU.intl.string(eU.t.DMeO2X),
                    children: m
                        ? (0, i.jsx)(i$, {
                              user: t,
                              initialOpenPopout: "theme-primary" === u || "theme-secondary" === u ? u : void 0,
                          })
                        : (0, i.jsx)(iJ, {
                              user: t,
                              onClickPrimary: () => d({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => d({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, i.jsx)(nz, {
                    heading: eU.intl.string(eU.t.Vgdusv),
                    children: (0, i.jsx)(iK, {
                        userId: t.id,
                        buttonRef: a,
                        onClick: m ? f : () => d({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, i.jsx)(nz, {
                    heading: eU.intl.string(eU.t.Dt3ZUr),
                    children: (0, i.jsx)(iY, {
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
var i1 = n(847374),
    i2 = n(111159),
    i5 = n(548118),
    i3 = n(711014),
    i8 = n(649998),
    i9 = n(561392),
    i7 = n(499957),
    i6 = n(15626),
    i4 = n(715022),
    le = n(44482),
    lt = n(470791);
function ln(e) {
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
                } = (0, i9.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: u } = (0, i7.DL)(o, {
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
        y = l.useContext(i6._),
        E = l.useId(),
        S = l.useId(),
        N = l.useId(),
        k = l.useRef(null),
        P = l.useRef(null),
        [T, R] = l.useState(null),
        O = null != T ? (0, i4.ZN)(N, T) : void 0,
        _ = l.useRef(!1),
        L = l.useRef(!1),
        w = l.useMemo(() => t.filter((e) => (0, i4.fI)(e.value, [n])), [n, t]),
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
        { activeIndex: W, handleKeyDown: B } = (0, i8.l)(!0, t),
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
        ...v(),
        children: [
            null != a && (0, i.jsx)(f.A, { tag: "label", id: E, htmlFor: S, children: a }),
            p({ buttonRef: k, selectButtonProps: K }),
            !d &&
                h &&
                (0, i.jsx)("div", {
                    ref: C,
                    className: s()(lt.S_, u),
                    ...j(),
                    style: { ...I, ...b },
                    children: (0, i.jsx)(i8.q, {
                        id: N,
                        tabIndex: -1,
                        items: t,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: T,
                        renderListItem: (e) => (null != m ? m(e) : (0, i.jsx)(le.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var li = n(216384);
let ll = "MAIN_PROFILE";
function lr(e) {
    let { guild: t } = e;
    return (0, i.jsx)(i5.Ay, { className: li.$f, guild: t, size: i5.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function ls(e) {
    let { leading: t, label: n, description: l } = e;
    return (0, i.jsxs)("div", {
        className: li.XE,
        children: [
            null != t && (0, i.jsx)("div", { className: li.fZ, children: t }),
            (0, i.jsxs)("div", {
                className: li.qL,
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
function la(e) {
    let { leading: t, label: n, disabled: l, buttonRef: r, selectButtonProps: a } = e;
    return (0, i.jsxs)(e8.D, {
        innerRef: r,
        className: s()(li.L5, { [li.r9]: l }),
        tabIndex: !0 === l ? -1 : 0,
        ...a,
        children: [
            t,
            (0, i.jsx)(ez.E, {
                variant: "text-md/medium",
                color: !0 === l ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: li.v9,
                children: n,
            }),
            (0, i.jsx)(i1.a, {
                className: li.u4,
                size: "sm",
                color: !0 === l ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function lo(e) {
    let { selectedGuildId: t, originGuildId: n, onChange: r, loading: s, disabled: o } = e,
        u = (0, a.bG)([i3.Ay], () => i3.Ay.getFlattenedGuildIds()),
        d = (0, a.bG)([K.A], () => K.A.getGuilds()),
        c = (0, a.bG)([tt.A], () => {
            let e = tt.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ej.Ay, i3.Ay], () => {
            let e = {};
            for (let t of i3.Ay.getFlattenedGuildIds()) {
                let n = ej.Ay.getSelfMember(t)?.nick;
                null != n && (e[t] = n);
            }
            return e;
        }),
        f = l.useMemo(() => {
            let e = {
                    id: ll,
                    label: eU.intl.string(eU.t["2p07FR"]),
                    value: ll,
                    leading: (0, i.jsx)(i2.p, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, i.jsx)(lr, { guild: n }),
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
                          leading: (0, i.jsx)(lr, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...l,
                  ];
        }, [u, d, n, c, g]),
        m = t ?? ll,
        p = f.find((e) => e.value === m) ?? f[0],
        x = l.useCallback(
            (e) => {
                let n = e === ll ? null : e;
                n !== t && r(n);
            },
            [r, t],
        );
    return (0, i.jsx)(ln, {
        className: li.kL,
        label: eU.intl.string(eU.t.rki38K),
        listboxClassName: li.yt,
        options: f,
        value: m,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, i.jsx)(ls, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, i.jsx)(la, { leading: p.value === ll ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var lu = n(462887),
    ld = n(765178),
    lc = n(469054),
    lg = n(601298);
function lf() {
    let { preset: e, setPreset: t } = (function () {
            let { getCurrentPreset: e, cachePreset: t } = ni(),
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
        n = (0, nX.Ay)(),
        i = (0, lu.q)(n),
        r = l.useCallback(
            (e) => {
                let t = (0, t7.Wt)(e);
                (0, iX.w5)({
                    banner: (0, lg.X)({
                        assetOrigin: lc.E.NEW_ASSET,
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
            let n = (0, t7.B$)(e),
                i = (0, t7.Wt)(n);
            (tq.default.track(P.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: n }),
                t(n),
                r(n),
                ld.O.announce(eU.intl.formatToPlainString(eU.t.M2Hj9s, { presetName: i.getName() })));
        }, [e, t, r])
    );
}
var lm = n(288490);
let lp = "profile-editing-nameplate-error",
    lh = "profile-editing-avatar-error",
    lx = "profile-editing-avatar-decoration-error",
    lA = "profile-editing-banner-error",
    lI = "profile-editing-display-name-style-error";
function lv(e) {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: s()(lm.D0, t),
        children: (0, i.jsx)("div", { className: lm.ZN, children: (0, i.jsx)(ns.LockIcon, { size: "xs" }) }),
    });
}
function lj() {
    let [e, t] = (0, nf.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, i.jsxs)("div", {
              className: lm.X6,
              children: [
                  (0, i.jsx)(ez.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eU.intl.string(eU.t["gBIG/N"]),
                  }),
                  (0, i.jsx)(e8.D, {
                      "aria-label": eU.intl.string(eU.t.rSe9ra),
                      className: lm.TD,
                      onClick: () => t(!0),
                      children: (0, i.jsx)(na.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function lb() {
    let e = iR(),
        t = iw(eU.intl.string(eU.t["7IWwak"]));
    return (0, i.jsxs)("div", {
        className: lm.eW,
        children: [
            (0, i.jsxs)("div", {
                className: lm.tm,
                children: [
                    (0, i.jsx)(no.D, {
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
            (0, i.jsx)(np.A, { subscriptionTier: iL.pe.TIER_2, buttonTextOverride: t, size: "sm", fullWidth: !0 }),
            (0, i.jsx)(lv, { className: lm.nd }),
        ],
    });
}
function lC() {
    return (0, i.jsx)(ez.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: lm.BJ,
        "aria-hidden": !0,
        children: eU.intl.format(eU.t.kYv9DM, {
            nitroIconHook: () => (0, i.jsx)(ts.t, { size: "xxs", color: "currentColor", className: lm.qp }),
        }),
    });
}
function ly(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e;
    return (0, i.jsxs)(nz, {
        heading: eU.intl.string(eU.t.x5CoXR),
        disabled: l,
        children: [
            (0, i.jsx)(nK.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lp : void 0 }),
            (0, i.jsx)(nY, { id: lp, message: r }),
        ],
    });
}
function lE(e) {
    let { user: t, guildId: n, disabled: l, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, i.jsxs)(nz, {
        heading: eU.intl.string(eU.t["50Nwpc"]),
        disabled: l,
        children: [
            (0, i.jsx)(nx.A, { user: t, guildId: n, disabled: l, errorMessageId: null != r ? lh : void 0 }),
            (0, i.jsx)(nA.A, { user: t, guildId: n, disabled: l, errorMessageId: null != s ? lx : void 0 }),
            (0, i.jsx)(nY, { id: lh, message: (0, nh.d3)(r) }),
            (0, i.jsx)(nY, { id: lx, message: s }),
        ],
    });
}
function lS(e) {
    let { user: t, guildId: n, disabled: l, errorMessage: r } = e,
        s = (0, nm.u)("UserProfileModalV2EditingPanel"),
        [a, o] = (0, eM.kn)(s && !l ? [eP.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        u = a === eP.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, i.jsxs)(nz, {
        heading: eU.intl.string(eU.t.NEzEws),
        disabled: l,
        showNitroIcon: !0,
        badge: u
            ? (0, i.jsx)("div", {
                  className: lm.IO,
                  "aria-hidden": !0,
                  children: (0, i.jsx)(nu.E, { type: "new", variant: "brand" }),
              })
            : void 0,
        children: [
            (0, i.jsx)(nB, {
                user: t,
                guildId: n,
                disabled: l,
                errorMessageId: null != r ? lI : void 0,
                onOpen: u ? () => o(eG.i.TAKE_ACTION) : void 0,
            }),
            (0, i.jsx)(nY, { id: lI, message: r }),
        ],
    });
}
function lN(e) {
    let { user: t, guildId: n, disabled: l, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, i.jsxs)(nz, {
        heading: eU.intl.string(eU.t.Zenogr),
        disabled: l,
        showNitroIcon: !0,
        children: [
            (0, i.jsx)(ij, { user: t, guildId: n, disabled: l || !r }),
            (0, i.jsx)(nL, { userId: t.id, guildId: n, disabled: l || !r, errorMessageId: null != s ? lA : void 0 }),
            (0, i.jsx)(nY, { id: lA, message: (0, nh.d3)(s) }),
        ],
    });
}
function lk(e) {
    let { user: t, disabled: n } = e;
    return (0, i.jsx)(nz, {
        heading: eU.intl.string(eU.t["/X3fkf"]),
        disabled: n,
        children: (0, i.jsx)(nE, { user: t, disabled: n }),
    });
}
function lP(e) {
    let { user: t, guildId: n, disabled: l } = e;
    return (0, i.jsxs)(nz, {
        heading: eU.intl.string(eU.t["Vfbar/"]),
        disabled: l,
        children: [
            (0, i.jsx)(ii, { user: t, guildId: n, disabled: l, variant: "square" }),
            (0, i.jsx)(ic, { user: t, guildId: n, disabled: l }),
        ],
    });
}
let lT = "premium-try-it-out-description";
function lR(e) {
    let { user: t } = e,
        n = iR(),
        { navigate: l } = nr();
    return (
        lf(),
        (0, i.jsxs)("div", {
            role: "group",
            "aria-labelledby": lT,
            className: lm.DX,
            children: [
                (0, i.jsx)(lv, { className: lm.x$ }),
                (0, i.jsxs)("div", {
                    className: lm.sb,
                    children: [
                        (0, i.jsx)(ez.E, {
                            id: lT,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eU.intl.format(eU.t.TmfgI2, { onClick: n }),
                        }),
                        (0, i.jsx)(nd.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: nc.EyeIcon,
                            text: eU.intl.string(eU.t.PxUx8e),
                            onClick: () => l({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, i.jsx)(i0, { user: t, mode: "entrypoint" }),
            ],
        })
    );
}
function lO(e) {
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
        f = (0, t6.A)(c),
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
    return (0, i.jsxs)(iC, {
        hasGradientBackground: A,
        children: [
            (0, i.jsxs)("div", {
                className: lm.wx,
                children: [
                    (0, i.jsx)(tW.m, {
                        text: eU.intl.string(eU.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t9.K, {
                            buttonRef: u,
                            "aria-label": eU.intl.string(eU.t["l/A351"]),
                            icon: ng.V,
                            onClick: d,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, i.jsx)(lo, {
                        selectedGuildId: l ?? null,
                        originGuildId: r,
                        onChange: f,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, i.jsx)(iV, {})
                : (0, i.jsx)(iS, {
                      children: (0, i.jsxs)(i.Fragment, {
                          children: [
                              m && (p ? (0, i.jsx)(lj, {}) : (0, i.jsx)(lb, {})),
                              p && (0, i.jsx)(lC, {}),
                              (0, i.jsx)(ly, { user: t, guildId: l, disabled: I || h, errorMessage: j }),
                              (0, i.jsx)(lE, {
                                  user: t,
                                  guildId: l,
                                  disabled: I || h,
                                  avatarErrorMessage: b,
                                  avatarDecorationErrorMessage: C,
                              }),
                              p || m
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            (0, i.jsx)(lS, { user: t, guildId: l, disabled: I || h, errorMessage: E }),
                                            (0, i.jsx)(lN, {
                                                user: t,
                                                guildId: l,
                                                disabled: I || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: y,
                                            }),
                                        ],
                                    })
                                  : (0, i.jsx)(lk, { user: t, disabled: I || h }),
                              (0, i.jsx)(lP, { user: t, guildId: l, disabled: I || h }),
                              x &&
                                  (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(lR, { user: t }), (0, i.jsx)(iF, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var l_ = n(202091),
    lL = n(110654);
function lw(e) {
    return null;
}
function lD(e) {
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
        className: s()(lL.kL, h && lL.ez),
        children: (0, i.jsx)("div", {
            className: lL.u4,
            children: p((e, t, n) => {
                let { key: l } = n,
                    r = o.get(t);
                return null == r
                    ? null
                    : (0, i.jsx)(
                          l_.animated.div,
                          {
                              className: lL.M6,
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
var lM = n(926321),
    lG = n(477155),
    lU = n(561243),
    lF = n(206697),
    lW = n(280406);
let lB = "shuffle-options-a11y-description";
function lV(e) {
    let { className: t, onShuffle: n } = e;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(nd.$, {
                icon: lM.DiceIcon,
                text: eU.intl.string(eU.t.VzqqFC),
                onClick: n,
                variant: "secondary",
                size: "sm",
                "aria-describedby": lB,
                fullWidth: !0,
            }),
            (0, i.jsx)(f.A, { id: lB, children: eU.intl.string(eU.t.bBRdiB) }),
        ],
    });
}
function lH(e) {
    let { user: t, onBack: n, backButtonRef: l } = e,
        r = lf(),
        s = iM();
    return (0, i.jsxs)(iC, {
        children: [
            (0, i.jsxs)("div", {
                className: lW.wx,
                children: [
                    (0, i.jsx)("div", {
                        className: lW.FS,
                        children: (0, i.jsx)(tW.m, {
                            text: eU.intl.string(eU.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(t9.K, {
                                buttonRef: l,
                                "aria-label": eU.intl.string(eU.t["4IYwrw"]),
                                icon: lG.r,
                                onClick: n,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, i.jsx)(no.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: lW.R_,
                        children: eU.intl.string(eU.t.PxUx8e),
                    }),
                    (0, i.jsx)(ez.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: lW.Ij,
                        children: eU.intl.string(eU.t.X0ir7L),
                    }),
                    (0, i.jsx)(lV, { className: lW.ZZ, onShuffle: r }),
                ],
            }),
            (0, i.jsx)(iS, {
                children: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(i0, { user: t, mode: "edit" }),
                        null != s &&
                            (0, i.jsx)(iU, {
                                trialOffer: s,
                                onSubscribeClick: lF.t,
                                onSubscribeSuccess: lF.T,
                                onSubscribeClose: lU.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var lz = n(199016);
let lY = "user-profile-editing-panel",
    lK = "profile-modal-editing-panel-heading";
function lq(e) {
    let { onClick: t, className: n, innerRef: l } = e;
    return (0, i.jsx)(tW.m, {
        text: eU.intl.string(eU.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, i.jsx)(e8.D, {
            innerRef: l,
            "aria-label": eU.intl.string(eU.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": lY,
            className: s()(lz.eg, n),
            onClick: t,
            focusProps: { offset: { right: 6 } },
            children: (0, i.jsx)(t8.V, { size: "sm", color: "currentColor" }),
        }),
    });
}
function lX(e) {
    let { onClick: t, className: n, buttonRef: l } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(tW.m, {
            text: eU.intl.string(eU.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, i.jsx)(t9.K, {
                buttonRef: l,
                "aria-label": eU.intl.string(eU.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": lY,
                icon: t8.V,
                onClick: t,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function lZ(e) {
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
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: I } = nr(),
        v = l.useRef(null);
    return (l.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => v.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, i.jsx)("aside", {
              id: lY,
              "aria-labelledby": lK,
              className: s()(lz.nd, c),
              "aria-busy": o,
              children: (0, i.jsxs)("div", {
                  className: lz.l$,
                  children: [
                      (0, i.jsx)(f.A, {
                          children: (0, i.jsx)(m.H, { id: lK, children: eU.intl.string(eU.t["L+ch00"]) }),
                      }),
                      (0, i.jsxs)(lD, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, i.jsx)(lw, {
                                  id: "default",
                                  children: (0, i.jsx)(lO, {
                                      panelId: lY,
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
                              (0, i.jsx)(lw, {
                                  id: "premiumTryItOut",
                                  children: (0, i.jsx)(lH, { user: p, onBack: I, backButtonRef: v }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var l$ = n(425763),
    lJ = n(447453),
    lQ = n(280450),
    l0 = n(783420),
    l1 = n(874402);
function l2() {
    let e = nl(),
        { goBack: t } = nr(),
        n = iw(eU.intl.string(eU.t.pj0XBN));
    return (0, i.jsx)(l0.A, {
        subscriptionTier: iL.pe.TIER_2,
        onClick: lF.t,
        onSubscribeModalClose: (e) => {
            (e && (0, lF.T)(), (0, lU.J)());
        },
        children: (l) => {
            let { onClick: r } = l;
            return (0, i.jsx)(l1.$, {
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
var l5 = n(803306),
    l3 = n(631670),
    l8 = n(682618),
    l9 = n(38405);
async function l7(e) {
    let { displayOrder: t, hiddenBadges: n } = e,
        i = { ...(null != t ? { display_order: t } : {}), ...(null != n ? { hidden_badges: n } : {}) };
    if (0 === Object.keys(i).length) return !0;
    try {
        return (await E.Bo.patch({ url: P.Rsh.USER_BADGE_SETTINGS, body: i, rejectWithError: !0 }), !0);
    } catch (e) {
        return (l9.A.captureException(e), !1);
    }
}
var l6 = n(234e3),
    l4 = n(159001),
    re = n(933725),
    rt = n(625494),
    rn = n(56348),
    ri = n(646976),
    rl = n(289173),
    rr = n(958805),
    rs = n(61881),
    ra = n(624826),
    ro = n(384377),
    ru = n(518477);
function rd(e) {
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
            let e = (0, a.yK)([rs.A], () => rs.A.getSaveablePendingWidgets() ?? []),
                t = (0, a.yK)([rs.A], () => rs.A.getChangedWidgets()),
                n = (0, a.yK)([rs.A], () => rs.A.getRemovedWidgets()),
                { hasUnsavedWidgets: i, canSaveWidgets: l } = (0, a.cf)([rs.A], () => ({
                    hasUnsavedWidgets: rs.A.hasUnsavedChanges(),
                    canSaveWidgets: rs.A.canSaveChanges(),
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
            hasBadgeChangesToSave: (0, l6.gz)(eb.A.getPendingChanges()),
        })),
        I = p && h,
        v = f || I || A,
        j = !(f && !m) && (!p || x),
        b = l.useCallback(() => {
            (rr.A.clearPendingWidgets(), p ? (0, iX.XQ)() : A && (0, l6.Jp)());
        }, [p, A]),
        C = l.useCallback(async () => {
            if (p && !eb.A.canSubmit()) return;
            u(!0);
            let e = !0;
            if (A) {
                let t = eb.A.getPendingChanges(),
                    n = await l7({
                        displayOrder: t.pendingBadgeDisplayOrder,
                        hiddenBadges: t.pendingBadgeHiddenBadges,
                    });
                if (n) {
                    let e = y.default.getCurrentUser()?.id;
                    (null != e && (await (0, l5.eO)(e).catch(() => {})), await (0, l8.RS)(), (0, l6.Jp)());
                }
                e = n;
            }
            if (I)
                try {
                    if (null == t) {
                        let t = eb.A.getPendingChanges(),
                            n = (0, rn.Sk)(t),
                            i = (0, rn.yX)(t);
                        if (Object.keys(n).length > 0) {
                            let i = await (0, l3._L)(n);
                            ((e = e && (i?.ok ?? !1)),
                                i?.ok &&
                                    (void 0 !== t.pendingAvatar &&
                                        (0, ra.t)({
                                            avatarHash: i.body.avatar,
                                            avatarId: n.avatarId,
                                            avatarAssetOrigin: t.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l3.pZ)()));
                        }
                        if (Object.keys(i).length > 0) {
                            let { bannerOriginalMd5: t, ...n } = i,
                                l = await (0, iX.gi)(n, void 0, t);
                            ((e = e && (l?.ok ?? !1)), l?.ok && (0, iX.RE)());
                        }
                    } else {
                        let n = eb.A.getPendingChanges(t),
                            i = (0, rn.C5)(n),
                            l = (0, rn.yX)(n, t);
                        if (Object.keys(i).length > 0) {
                            let l = await (0, l4.GL)(t, i);
                            ((e = e && (l?.ok ?? !1)),
                                l?.ok &&
                                    (void 0 !== n.pendingAvatar &&
                                        (0, ra.t)({
                                            isGuildProfile: !0,
                                            avatarHash: l.body.avatar,
                                            avatarId: i.avatarId,
                                            avatarAssetOrigin: n.pendingAvatar?.assetOrigin,
                                        }),
                                    (0, l3.pZ)()));
                        }
                        if (Object.keys(l).length > 0) {
                            let { bannerOriginalMd5: n, ...i } = l,
                                r = await (0, iX.gi)(i, t, n);
                            ((e = e && (r?.ok ?? !1)), r?.ok && (0, iX.RE)());
                        }
                    }
                    let n = (0, rn.yg)(eb.A.getPendingChanges());
                    if (Object.keys(n).length > 0) {
                        let { primaryGuildId: t } = n;
                        if (void 0 !== t) {
                            let n = await (0, re.m)(t, null !== t);
                            ((e = e && (n?.ok ?? !1)), n?.ok && (0, l3.fw)());
                        }
                    }
                } catch {
                    e = !1;
                }
            if (f)
                try {
                    for (let e of (await rr.A.savePendingWidgets(d), c)) {
                        let t = { widgetEdited: e.type, isWidgetRemoved: !1 };
                        ((0, rl.fu)(e)
                            ? ((t.gameIds = e.games.map((e) => e.gameId)),
                              (t.tags = e.games.flatMap((e) => e.tags ?? []).map((e) => e.toString())),
                              (t.numCharactersCommentary = e.games.reduce((e, t) => e + (t.comment?.length ?? 0), 0)))
                            : e instanceof ri.kM &&
                              ((t.gameIds = e.clips.map((e) => e.gameId)),
                              (t.tags = e.clips.flatMap((e) => e.tags ?? []).map((e) => e.toString()))),
                            n(t));
                    }
                    for (let e of g) n({ widgetEdited: e.type, isWidgetRemoved: !0 });
                } catch {
                    e = !1;
                }
            (e ? (0, l3.x8)() : (0, ro.XA)(ru.jM.PROFILE_SAVE_GENERIC_FAILURE), u(!1));
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
                rt._.subscribe(P.jej.EMPHASIZE_NOTICE, t),
                () => {
                    (rt._.unsubscribe(P.jej.EMPHASIZE_NOTICE, t), null != e && clearTimeout(e));
                }
            );
        }, []),
        (0, i.jsx)(l1.$, {
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
var rc = n(485745),
    rg = n(893757);
function rf() {
    let e = !(0, en.X)("useEditingFooterState"),
        t = (0, l$.VU)(),
        n = (0, rc.A)(e),
        i = nl();
    return t ? "dnd" : i ? "premium-try-it-out" : n ? "save" : null;
}
function rm(e) {
    let { userId: t, guildId: n, className: r } = e,
        o = (0, a.bG)([lQ.default], () => lQ.default.getId() === t),
        u = rf(),
        [d, c] = l.useState(u);
    return (null != u && d !== u && c(u), o)
        ? (0, i.jsx)("div", {
              className: s()(rg.k, r),
              children:
                  "dnd" === d
                      ? (0, i.jsx)(lJ.S, { className: rg.W })
                      : "premium-try-it-out" === d
                        ? (0, i.jsx)(l2, {})
                        : "save" === d
                          ? (0, i.jsx)(rd, { guildId: n })
                          : null,
          })
        : null;
}
var rp = n(347805),
    rh = n(34011),
    rx = n(629403),
    rA = n(612630),
    rI = n(61426);
function rv(e) {
    let { userId: t, className: n, autoFocus: r = !1, onUpdate: o } = e,
        u = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        { loading: d, note: c } = (0, rA.A)(t),
        [g, f] = l.useState(),
        [m, p] = l.useState(),
        h = g ?? c,
        x = l.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), f(e), o?.());
                    try {
                        await rx.A.updateNote(t, e);
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
            ? (0, i.jsx)(ez.E, { variant: "text-sm/normal", color: "text-default", className: rI.t, children: h })
            : null;
    return (0, i.jsx)("div", {
        className: s()(tx.kL, n),
        children: (0, i.jsx)(rh.w, {
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
            maxLength: P.T7x,
            disabled: A,
            error: m,
        }),
    });
}
var rj = n(793222);
function rb(e) {
    let { userId: t } = e,
        n = (0, eN.g)(),
        { trackUserProfileAction: l } = (0, Q.NJ)(),
        r = (0, en.X)("UserProfileModalV2NotesSection"),
        s = r ? rv : rp.A;
    return (0, i.jsx)(tc, {
        heading: eU.intl.string(eU.t["mQKv+v"]),
        scrollTargetId: ru.bk.NOTE,
        children: (0, i.jsx)(s, {
            userId: t,
            className: r ? rj.N : rj.w,
            autoFocus: n === ru.bk.NOTE,
            onUpdate: () => l({ action: "SET_NOTE" }),
        }),
    });
}
var rC = n(123292),
    ry = n(667242),
    rE = n(655214);
function rS(e) {
    let { icon: t, message: n, actionLabel: r, onAction: a, actionDisabled: o, type: u, autoFocus: d } = e,
        c = l.useRef(null);
    return (
        l.useEffect(() => {
            d && c.current?.focus();
        }, [d]),
        (0, i.jsx)("div", {
            className: ry.kL,
            children: (0, i.jsxs)("div", {
                className: s()(rE.oR, ry.Qs),
                "data-type": u,
                children: [
                    (0, i.jsx)("div", { className: ry.Kk, children: t }),
                    (0, i.jsx)(ez.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != a &&
                        (0, i.jsx)("div", {
                            className: ry.hP,
                            children: (0, i.jsx)(rC.Q, {
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
var rN = n(346055),
    rk = n(289873),
    rP = n(615019);
function rT(e) {
    let { showScrim: t, showLoadingSpinner: n, className: r, children: a } = e;
    l.useEffect(() => {
        n && ld.O.announce(eU.intl.string(eU.t["QR+vBP"]));
    }, [n]);
    let o = l.useRef(null);
    return (
        (0, rN.f)(o, t),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: s()(rP.f, t && rP.z),
                    children: n && (0, i.jsx)(rk.y, { type: rk.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, i.jsx)("div", { ref: o, "aria-hidden": t || void 0, className: r, children: a }),
            ],
        })
    );
}
var rR = n(568602);
function rO(e) {
    let { children: t } = e,
        [n, r] = l.useState(!1),
        [s, o] = l.useState(1.4),
        u = l.useRef(null),
        d = l.useRef(1.4),
        c = (0, a.bG)([rs.A, eb.A], () => rs.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                rt._.subscribe(P.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rt._.unsubscribe(P.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        l.useEffect(
            () => () => {
                null != u.current && (clearTimeout(u.current), (u.current = null));
            },
            [],
        ),
        (0, i.jsx)(rR.b, { isShaking: n, intensity: s, children: t })
    );
}
n(46121);
var r_ = n(761508),
    rL = n(695904),
    rw = n(116331),
    rD = n(713348),
    rM = n(827258),
    rG = n(517164),
    rU = n(114212),
    rF = n(290863),
    rW = n(461213),
    rB = n(975571),
    rV = n(146655),
    rH = n(489379),
    rz = n(402857),
    rY = n(353394),
    rK = n(842241),
    rq = n(986712),
    rX = n(435558),
    rZ = n(534890),
    r$ = n(308528),
    rJ = n(780964),
    rQ = n(766075),
    r0 = n(92795);
let r1 = [
        () => eU.intl.string(eU.t.madJdE),
        () => eU.intl.string(eU.t.NYmfoP),
        () => eU.intl.string(eU.t.R2PaCg),
        () => eU.intl.string(eU.t.laSR8h),
        () => eU.intl.string(eU.t.DnsJE8),
    ],
    r2 = [
        () => eU.intl.string(eU.t.nFSbeE),
        () => eU.intl.string(eU.t.gTcxOz),
        () => eU.intl.string(eU.t["8T0wYj"]),
        () => eU.intl.string(eU.t.BIHl1g),
        () => eU.intl.string(eU.t["jhBm0+"]),
    ],
    r5 = [
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
    r3 = [
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
function r8(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: r0.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: r0.FS,
                children: [
                    (0, i.jsx)(no.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(ez.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function r9() {
    let e = eU.intl.string(eU.t.RnD2yZ),
        [t] = l.useState(() => ((0, rX.sample)(r1) ?? r1[0])());
    return (0, i.jsx)(r8, { heading: e, bodyText: t });
}
function r7() {
    let e = eU.intl.string(eU.t.bFgqYJ),
        [t] = l.useState(() => ((0, rX.sample)(r2) ?? r2[0])());
    return (0, i.jsx)(r8, { heading: e, bodyText: t });
}
function r6(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        a = Z.Ay.getName(n, r, t),
        o = eU.intl.formatToPlainString(eU.t.sjSitP, { name: a }),
        [u] = l.useState(() => ((0, rX.sample)(r5) ?? r5[0])(a)),
        d = l.useCallback(() => {
            (r$.A.openPrivateChannel({ recipientIds: t.id }), s?.());
        }, [t.id, s]);
    return (0, i.jsx)(r8, {
        heading: o,
        bodyText: u,
        children: (0, i.jsx)("div", {
            className: r0.v0,
            children: (0, i.jsx)(tw.FD, { icon: rZ.ChatIcon, text: eU.intl.string(eU.t["g33r/P"]), onClick: d }),
        }),
    });
}
function r4() {
    let e = (0, nX.Ay)();
    return (0, i.jsx)("div", {
        className: r0.HU,
        children: r3.map((t, n) => {
            let l = ed.A.get(t);
            if (null == l) return null;
            let r = (0, nq.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: r, alt: l.name, className: r0.gj }, n);
        }),
    });
}
function se(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            (t?.(), (0, rQ.openUserSettings)(rJ.X.CONNECTIONS_CATEGORY));
        }, [t]),
        r = l.useCallback(() => {
            (t?.(), (0, rQ.openUserSettings)(rJ.X.CONNECTED_GAMES_CATEGORY));
        }, [t]);
    return (0, i.jsxs)(r8, {
        heading: eU.intl.string(eU.t.VB6LWY),
        bodyText: eU.intl.string(eU.t.KpjsU9),
        children: [
            (0, i.jsx)(r4, {}),
            (0, i.jsxs)("div", {
                className: r0.v0,
                children: [
                    (0, i.jsx)(tw.FD, { text: eU.intl.string(eU.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(tw.FD, { text: eU.intl.string(eU.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var st = n(131058);
function sn(e) {
    let { children: t, className: n, scrollerRef: l, ...r } = e;
    return (0, i.jsx)(c.Ip, { ref: l, className: s()(st.gN, n), fade: !0, ...r, children: t });
}
var si = n(587763);
function sl(e) {
    let { user: t, currentUser: n, displayProfile: l, guildId: r, channelId: s, onClose: o } = e,
        { live: u, recent: d, stream: c } = (0, rV.A)(t.id),
        { voiceChannel: g, voiceActivity: f } = (0, rH.A)({ userId: t.id, guildId: r }),
        m = (0, a.bG)([rG.A], () => rG.A.isFetchingUserOutbox(t.id)),
        p = t.id === n.id,
        h = (0, a.bG)([rW.A, rF.A], () => {
            let e = p ? rW.A.getStatus() : rF.A.getStatus(t.id);
            return e === P.clD.OFFLINE || e === P.clD.INVISIBLE;
        }),
        x = u.length > 0 || null != c,
        A = l?.private !== !0 && null == c && null == f && null != g,
        I = !h && (x || A),
        v = d.length > 0;
    return I || v || !m
        ? I || v || m
            ? (0, i.jsxs)(sn, {
                  className: si.XG,
                  fade: !0,
                  children: [
                      I
                          ? (0, i.jsx)(tc, {
                                heading: eU.intl.string(eU.t.J6STd9),
                                children: (0, i.jsxs)("ul", {
                                    className: si.kR,
                                    children: [
                                        null != c &&
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(rK.A, {
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
                                                    children: (0, i.jsx)(rz.A, {
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
                                                children: (0, i.jsx)(rq.A, {
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
                      v
                          ? (0, i.jsx)(tc, {
                                heading: eU.intl.string(eU.t.jzgEoL),
                                introText: p
                                    ? eU.intl.format(eU.t["4bk9Ak"], {
                                          learnMoreHook: (e, t) =>
                                              (0, i.jsx)(
                                                  tB.Anchor,
                                                  {
                                                      href: rB.A.getArticleURL(P.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  t,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: ru.bk.RECENT_ACTIVITY,
                                children: (0, i.jsx)("ul", {
                                    className: si.kR,
                                    children: d.map((e) =>
                                        (0, i.jsx)(
                                            "li",
                                            { children: (0, i.jsx)(rY.A, { user: t, entry: e, onClose: o }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : p
              ? (0, i.jsx)(se, { onClose: o })
              : (0, i.jsx)(r6, { user: t, guildId: l?.guildId ?? r, channelId: s, onClose: o })
        : (0, i.jsx)("div", {
              className: si.kR,
              children: Array.from({ length: 8 }).map((e, t) =>
                  (0, i.jsxs)(
                      "div",
                      {
                          className: si.kr,
                          children: [
                              (0, i.jsx)(rU.FQ, { width: 60, opacity: 0.08 }),
                              (0, i.jsx)(rU.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      t,
                  ),
              ),
          });
}
var sr = n(163126),
    ss = n(913453),
    sa = n(229187),
    so = n(402860),
    su = n(503062),
    sd = n(393213);
function sc(e) {
    let { user: t, guildId: n, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: u } = (0, Q.NJ)(),
        { mutualFriends: d, mutualFriendsCount: c } = (0, ss.A)(t),
        g = (0, sr.A)();
    return (
        l.useEffect(() => {
            (0, sa.A)(t.id, g);
        }, [t.id, g]),
        (0, i.jsx)(sn, {
            className: sd.XG,
            children:
                null == d
                    ? Array.from({ length: c ?? 10 }).map((e, t) =>
                          (0, i.jsxs)(
                              "div",
                              {
                                  className: sd.D$,
                                  children: [
                                      (0, i.jsx)(rU.FQ, { width: 40, opacity: 0.08 }),
                                      (0, i.jsx)(rU.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              t,
                          ),
                      )
                    : 0 === d.length
                      ? (0, i.jsx)(r9, {})
                      : d.map((e) => {
                            let { key: t, user: l, status: d } = e;
                            return (0, i.jsx)(
                                su.A,
                                {
                                    user: l,
                                    status: d,
                                    guildId: n,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            u({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, so.openUserProfileModal)({
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
var sg = n(398590),
    sf = n(345942),
    sm = n(51943);
function sp(e) {
    let { user: t, onClose: n } = e,
        { trackUserProfileAction: l } = (0, Q.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, ss.A)(t);
    return (0, i.jsx)(sn, {
        className: sd.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, t) =>
                      (0, i.jsxs)(
                          "div",
                          {
                              className: sd.Y7,
                              children: [
                                  (0, i.jsx)(rU.FQ, { width: 40, opacity: 0.08 }),
                                  (0, i.jsx)(rU.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          t,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, i.jsx)(
                            sm.A,
                            {
                                user: t,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (l({ action: "PRESS_MUTUAL_GUILD" }), (0, sf.u)(r.id), n(), (0, sg.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, i.jsx)(r7, {}),
    });
}
var sh = n(885574),
    sx = n(277984),
    sA = n(840387),
    sI = n(201718),
    sv = n(615405),
    sj = n(633075),
    sb = n(373842),
    sC = n(600761),
    sy = n(667049);
function sE(e) {
    let t = (0, ep.A)(e),
        n = nl();
    return t && !n;
}
var sS = n(540185),
    sN = n(192308),
    sk = n(37537),
    sP = n(210598),
    sT = n(735321),
    sR = n(465318);
function sO() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = sR.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, eM.kn)(e && t ? [eP.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eP.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function s_(e) {
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
              title: eU.intl.string(eU.t.KKGxNt),
              body: eU.intl.string(eU.t["IS+QTV"]),
              onRequestClose: () => l(eG.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t.RCy7Px),
                      icon: ts.t,
                      onClick: function () {
                          let e = (0, sP.g0)();
                          ((0, sT.Y5)(e),
                              r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, ro.XA)(ru.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var sL = n(410453);
function sw(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: r } = e,
        { trackUserProfileEditAction: s } = (0, Q.NJ)(),
        a = l.useCallback(() => {
            n && r(eG.i.TAKE_ACTION);
            let e = (0, sP.g0)();
            ((0, sT.Y5)(e),
                s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, ro.XA)(ru.jM.WIDGET_ADDED));
        }, [s, n, r]);
    return (0, i.jsx)(nd.$, {
        icon: ts.t,
        text: eU.intl.string(eU.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function sD(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: r } = (0, Q.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, d] = sO(),
        c = (function () {
            let e = (0, el.bG)([y.default], () => y.default.getCurrentUser()?.id),
                t = (0, sy.A)(e),
                { enabled: n, showCreateEntrypoint: i } = sR.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === sS.x.PERSONAL);
            return n && i && !l;
        })(),
        g = (0, sk.c)("UserProfileWidgetEditingHeader"),
        f = l.useCallback(() => {
            (u && d(eG.i.TAKE_ACTION),
                r({ action: "PRESS_ADD_WIDGET" }),
                (0, sN.openModalLazy)(
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
        className: s()(sL.w, t),
        children: [
            (0, i.jsx)(ez.E, {
                className: sL.D,
                variant: g ? "text-sm/semibold" : "text-xs/semibold",
                color: "text-subtle",
                children: eU.intl.string(eU.t.OYlggR),
            }),
            c ? (0, i.jsx)(sw, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(nd.$, {
                icon: tH.j,
                text: eU.intl.string(eU.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: f,
                buttonRef: a,
            }),
            (0, i.jsx)(s_, { targetElementRef: c ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var sM = n(192),
    sG = n(704824),
    sU = n(382483),
    sF = n(385113),
    sW = n(334074),
    sB = n(657718),
    sV = n(478016),
    sH = n(58216);
function sz(e) {
    let { user: t, application: n, onDismiss: r } = e,
        { trackUserProfileEditAction: s } = (0, Q.NJ)(),
        a = l.useMemo(() => new sj.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, sT.Y5)(a),
                s({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, ro.XA)(ru.jM.WIDGET_ADDED));
        }, [a, s]);
    return (0, i.jsx)(sH.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(sH.A.Cta, {
            showSuggestedForYou: !0,
            heading: eU.intl.format(eU.t.OIzLCy, { applicationName: n.name }),
            content: eU.intl.format(eU.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(tW.m, {
                        text: eU.intl.string(eU.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sB.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: na.P,
                            "aria-label": eU.intl.string(eU.t.WAI6xu),
                            onClick: () => {
                                r(eG.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(tW.m, {
                        text: eU.intl.string(eU.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(sB.S, {
                            variant: "primary",
                            size: "sm",
                            icon: sV.U,
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
function sY() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: r,
    } = (function () {
        let e = (0, a.yK)([sF.A], () => sF.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, sU.Wq)();
        }, []);
        let t = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
            n = (0, ec.A)(e),
            { tokens: i, fetched: r } = (0, sG.j)(e),
            s = (0, sy.A)(t?.id),
            o = null == t || null == e || null == i || !r,
            u = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || s.some((t) => t instanceof sj.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, s],
            ),
            { eligibleToShow: d, markAsDismissed: c } = (0, sW.hj)({
                applications: u,
                dismissibleContent: eP.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: sW.SH,
            }),
            g = l.useMemo(() => u.filter((e) => d.includes(e.id)), [u, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: g, markAsDismissed: c };
    })();
    if (e || null == t) return null;
    let s = n[0];
    return null == s ? null : (0, i.jsx)(sz, { user: t, application: s, onDismiss: (e) => r([s.id], e) }, s.id);
}
var sK = n(675816),
    sq = n(575593),
    sX = n(44120),
    sZ = n(75678),
    s$ = n(87719),
    sJ = n(317560),
    sQ = n(99161),
    s0 = n(661492);
let s1 = { sentGifts: {} };
function s2(e, t) {
    return `${e}:${t}`;
}
class s5 extends a.Ay.PersistedStore {
    static displayName = "SentGiftsStore";
    static persistKey = "SentGiftsStore";
    initialize(e) {
        null != e && ((s1 = e), this.cleanupExpiredGifts());
    }
    getState() {
        return s1;
    }
    hasSentGift(e, t) {
        let n = s2(e, t),
            i = s1.sentGifts[n];
        return !(null == i || new Date(i.expiresAt) < new Date());
    }
    getSentGift(e, t) {
        let n = s2(e, t),
            i = s1.sentGifts[n];
        return null == i || new Date(i.expiresAt) < new Date() ? null : i;
    }
    cleanupExpiredGifts() {
        let e = new Date();
        for (let [t, n] of Object.entries(s1.sentGifts)) new Date(n.expiresAt) < e && delete s1.sentGifts[t];
    }
}
let s3 = new s5(S.h, {
    WISHLIST_GIFT_SENT: function (e) {
        let t = s2(e.skuId, e.recipientId),
            n = new Date(),
            i = new Date(n.getTime() + 1728e5);
        s1.sentGifts[t] = {
            skuId: e.skuId,
            recipientId: e.recipientId,
            sentAt: n.toISOString(),
            expiresAt: i.toISOString(),
        };
    },
});
var s8 = n(146423),
    s9 = n(590180),
    s7 = n(753704),
    s6 = n(113265),
    s4 = n(152472),
    ae = n(471505),
    at = n(376932);
function an(e) {
    return { top: e.iconInset, insetInlineEnd: e.iconInset };
}
function ai(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lQ.default], () => lQ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, ae.G)({ userId: o, sku: n, location: l, onError: r }),
        f = au();
    return (0, i.jsx)("div", {
        className: at.U,
        style: an(t),
        children: (0, i.jsx)(s7._, {
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
function al(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lQ.default], () => lQ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, s4.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = au();
    return (0, i.jsx)("div", {
        className: at.U,
        style: an(t),
        children: (0, i.jsx)(s7._, {
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
function ar(e) {
    let { spec: t, sku: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lQ.default], () => lQ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
        } = (0, s4.c)({ userId: o, skuId: n.id, location: l, onError: r }),
        f = au();
    return (0, i.jsx)("div", {
        className: at.U,
        style: an(t),
        children: (0, i.jsx)(s7._, {
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
function as(e) {
    let { spec: t, product: n, location: l, onError: r, ...s } = e,
        o = (0, a.bG)([lQ.default], () => lQ.default.getId()),
        {
            isWishlisted: u,
            isBusy: d,
            isFirstTimeWishlister: c,
            handleToggle: g,
            specificProductOrVariant: f,
            isPurchased: m,
        } = (0, s6.z)({ userId: o, product: n, location: l, onError: r }),
        p = (0, s0.q)(f),
        h = m && !u,
        x = !p || h,
        A = au(p && h ? eU.intl.string(eU.t.nKA6v8) : void 0);
    return (0, i.jsx)("div", {
        className: at.U,
        style: an(t),
        children: (0, i.jsx)(s7._, {
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
function aa(e) {
    let { sku: t, isCardHovered: n, ...l } = e,
        r = (0, a.bG)([s9.A], () => s9.A.getProduct(t.id));
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(ai, { sku: t, isVisuallyHidden: !n, ...l });
        case P.EZt.COLLECTIBLES:
            if (null == r) return (0, i.jsx)(al, { sku: t, isVisuallyHidden: !n, ...l });
            return (0, i.jsx)(as, { product: r, isVisuallyHidden: !n, ...l });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(ar, { sku: t, isVisuallyHidden: !n, ...l });
        default:
            return null;
    }
}
function ao(e) {
    let { location: t, ...n } = e;
    return (0, i.jsx)(aa, { location: t, ...n });
}
function au(e) {
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
var ad = n(460442),
    ac = n(662349),
    ag = n(479026),
    af = n(636374),
    am = n(699976),
    ap = n(181554),
    ah = n(880465);
let ax = am.Z.SIZE_133;
function aA(e) {
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
                        action: ru.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    A()));
        }, [A, r.sku, v, N, y]),
        P = l.useCallback(() => {
            (y?.(),
                null != v &&
                    (N({
                        wishlistId: v,
                        action: ru.Mq.WISHLIST_ITEM_CLICKED,
                        skuId: r.sku.id,
                        productLines: new Set([r.sku.productLine]),
                    }),
                    I()));
        }, [I, r.sku, v, N, y]),
        T = l.useCallback(() => {
            ((0, ro.XA)(ru.jM.SOMETHING_WENT_WRONG), ld.O.announce(eU.intl.string(eU.t.F8FvUy)));
        }, []),
        R = null != g ? (0, i.jsx)("div", { ref: E, className: ap.BU, children: g }) : null,
        {
            onBodyClick: O,
            onOverlayClick: _,
            showOverlayButton: L,
            routesToGift: w,
            label: D,
            icon: M,
        } = (0, af.P)({ wishlistOwner: a, isOwned: j, onDetailsClick: k, onPurchaseClick: P }),
        G = h && L;
    return (0, i.jsxs)("div", {
        className: ap.kL,
        children: [
            (0, i.jsxs)(s8.A, {
                sku: r.sku,
                user: a,
                guildId: o,
                spec: ax,
                cardStyle: s()(ap.Nr, d),
                skuPreviewStyle: s()(ap.ev, { [ap.go]: j && !h }, f, G ? m : void 0),
                skuAssetClassName: G ? p : void 0,
                disableHoverOrFocus: c,
                onHoverOrFocusChange: x,
                onClick: O,
                "aria-label":
                    ((t = r.sku),
                    (n = w ? (0, s0.T)(t) : eU.intl.formatToPlainString(eU.t.ZBB4Ty, { productName: (0, s0.T)(t) })),
                    !0 === C ? eU.intl.formatToPlainString(eU.t.s9RZ1r, { label: n }) : n),
                children: [
                    !0 === C && (0, i.jsx)(rM.A, { className: ap.Pf }),
                    b,
                    L && (0, i.jsx)(ac.A, { spec: ax, onClick: _, isHoveringOrFocusing: h, label: D, icon: M }),
                    j && (0, i.jsx)(ad.gS, { isHoveringOrFocusing: h }),
                    a.id === u.id &&
                        null != v &&
                        (0, i.jsx)(ao, {
                            sku: r.sku,
                            isCardHovered: h,
                            spec: ax,
                            onError: T,
                            location: "UserProfileWishlistItemCardBase",
                        }),
                ],
            }),
            R,
        ],
    });
}
function aI(e) {
    let { item: t, isItemOwned: n, wishlistOwner: r, currentUser: s, analyticsLocations: a, ...o } = e,
        u = l.useCallback(() => {
            (0, sJ.R)({
                skuId: t.sku.id,
                applicationId: t.sku.applicationId,
                isStorefront: !1,
                giftRecipient: r,
                giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [t.sku.id, t.sku.applicationId, r, a]),
        d = l.useCallback(() => {
            let e = r.id === s.id;
            (0, sQ.a)(
                t.sku,
                { isGift: !e, giftRecipient: r, giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: [...a, j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON] },
            );
        }, [t.sku, r, s.id, a]);
    return (0, i.jsx)(aA, {
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
function av(e) {
    let {
            item: t,
            wishlistOwner: n,
            isItemOwned: r,
            analyticsLocations: a,
            currentUser: o,
            isHoveringOrFocusing: u,
            ...d
        } = e,
        c = (0, ag.e)({
            sku: t.sku,
            giftRecipient: n,
            giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
            analyticsLocations: a,
        }),
        g = l.useMemo(
            () => () => {
                let e = n.id === o.id;
                (0, sX.A)({
                    skuId: t.sku.id,
                    isGift: !e,
                    giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
                    analyticsLocations: a ?? [],
                    giftRecipient: n,
                });
            },
            [t.sku, n, o.id, a],
        ),
        f = t.sku.tenantMetadata?.collectibles?.type,
        m = f === sq.R.AVATAR_DECORATION || f === sq.R.PROFILE_FRAME;
    return (0, i.jsx)(aA, {
        item: t,
        wishlistOwner: n,
        isItemOwned: r,
        currentUser: o,
        onDetailsClick: c,
        onPurchaseClick: g,
        isHoveringOrFocusing: u,
        skuPreviewHoverStyle: s()({ [ap.mn]: m }),
        analyticsLocations: a,
        ...d,
    });
}
function aj(e) {
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
            if (n) return void (0, s$.x)(iT.M);
            let e = r.id === s.id,
                i = t.skuId;
            (0, sZ.A)({
                isGift: !e,
                giftRecipient: r,
                giftingOrigin: iL.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: i,
                analyticsLocations: a,
            });
        }, [n, t.skuId, r, s.id, a]);
    return (0, i.jsx)(aA, {
        item: t,
        wishlistOwner: r,
        isItemOwned: n,
        currentUser: s,
        onDetailsClick: d,
        onPurchaseClick: d,
        isHoveringOrFocusing: o,
        skuPreviewStyle: ah.MO,
        skuAssetHoverClassName: ah.iR,
        analyticsLocations: a,
        ...u,
    });
}
function ab(e) {
    let { item: t, wishlistOwner: n, wishlistId: r, analyticsLocations: s, ...o } = e,
        { analyticsLocations: u } = (0, b.Ay)(
            ...(s ?? []),
            t.sku?.productLine === P.EZt.SOCIAL_LAYER_GAME_ITEM ? j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD : [],
        ),
        d = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        [c, g] = l.useState(!1),
        f = (0, a.bG)([s3], () => s3.hasSentGift(t.skuId, n.id), [n, t.skuId]),
        m = l.useMemo(
            () => t.skuProductLine !== P.EZt.PREMIUM && (!0 === t.isOwned || f),
            [t.isOwned, t.skuProductLine, f],
        );
    if (null == t.sku || null == d) return null;
    switch (t.sku.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(aI, {
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
            return (0, i.jsx)(av, {
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
            return (0, i.jsx)(aj, {
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
var aC = n(788593),
    ay = n(943793),
    aE = n(314531),
    aS = n(182636),
    aN = n(998556);
function ak(e) {
    let { scrollerRef: t } = e,
        {
            isDragging: n,
            item: r,
            sourceClientOffset: s,
        } = (0, sK.V)((e) => ({
            isDragging: e.isDragging(),
            item: e.getItem(),
            sourceClientOffset: e.getSourceClientOffset(),
        })),
        o = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        u = (0, l$.VU)(),
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
                                  className: aN.dt,
                                  style: { width: l },
                                  children: (0, i.jsx)(aS.u, {
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
                                  children: (0, i.jsx)(aC.A, {
                                      className: aN.XJ,
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
                                  className: aN.xB,
                                  style: { width: s },
                                  children: (0, i.jsx)(ay.A, {
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
                                  className: aN.Zo,
                                  style: { width: n },
                                  children: (0, i.jsx)(aE.A, { item: e, ringSize: "sm" }),
                              });
                          }
                          if ("WISHLIST_ITEM" === l && r?.item != null) {
                              let { item: e } = r;
                              return (0, i.jsx)("div", {
                                  className: aN.Xm,
                                  children: (0, i.jsx)(ab, {
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
    return (0, i.jsx)("div", { className: aN.kL, style: { transform: `translate3d(${p}px, ${h}px, 0)` }, children: d });
}
var aP = n(915725);
n(839272);
let aT = (0, n(945810).mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var aR = n(96173),
    aO = n(661439),
    a_ = n(90165),
    aL = n(788259),
    aw = n(269507);
function aD(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: aw.ZW,
        "aria-label": eU.intl.string(eU.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === sS.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(aL.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function aM(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, aR.A)();
    return (0, i.jsx)(aD, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function aG(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: r,
            trackUserProfileEditAction: s,
            personalWidgetOptionRef: o,
        } = e,
        u = (0, aR.A)(),
        d = (function (e) {
            let t = (0, a.bG)([sF.A], () => sF.A.getFeaturedApplicationIds()),
                n = l.useMemo(() => {
                    let n = new Set(t);
                    return e
                        .filter((e) => e instanceof sj.R)
                        .map((e) => e.applicationId)
                        .filter((e) => n.has(e));
                }, [t, e]),
                i = (0, ec.A)(n),
                r = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
                { tokens: s } = (0, sG.j)(r);
            l.useEffect(() => {
                (0, aO.X)();
            }, []);
            let o = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
                u = (0, a.yK)([a_.A], () => o.map((e) => (null != e ? a_.A.getGameDuration(e) : 0))),
                d = (0, a.yK)([a_.A], () => o.map((e) => (null != e ? a_.A.getLastPlayedDateTime(e) : null)));
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
                let t = n.find((t) => (0, sj.E)(t, e));
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
                l && c(sS.x.CLIPS_GALLERY),
                r && c(sS.x.PERSONAL),
                c(sS.x.FAVORITE_GAMES),
                c(sS.x.PLAYED_GAMES),
                g("1346069614634864772"),
                c(sS.x.CURRENT_GAMES),
                c(sS.x.WANT_TO_PLAY_GAMES),
                g("1323482066758930452"),
                o.slice(0, s)
            );
        })({
            addableWidgets: u,
            applicationAffinityData: d,
            hasClips: (0, a.bG)([aP.Ay], () => aP.Ay.hasClips()),
            hasPremium: (0, a.bG)([y.default], () =>
                J.Ay.isPremium(y.default.getCurrentUser(), iL.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: r ? [sS.x.PERSONAL] : [],
        }),
        g = l.useCallback(() => {
            (s({ action: "PRESS_ADD_WIDGET" }),
                (0, sN.openModalLazy)(
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
            (0, i.jsx)(aD, { widgets: c, personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
            (0, i.jsx)(nd.$, { text: eU.intl.string(eU.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: g }),
        ],
    });
}
function aU(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: r } = (0, Q.NJ)(),
        s = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([et.A], () => et.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, c] = sO(!u),
        g = d || (0, sP.t0)(),
        { enabled: f, maxWidgetOptions: m } = (function (e) {
            let { location: t } = e;
            return aT.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            s.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (s.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: aw.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: aw.FS,
                    children: [
                        (0, i.jsx)(no.D, {
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
                                ? (0, i.jsx)(aG, {
                                      maxWidgetOptions: m,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: g,
                                      trackUserProfileEditAction: r,
                                  })
                                : (0, i.jsx)(aM, { personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
                            (0, i.jsx)(s_, { targetElementRef: o, isVisible: d, markAsDismissed: c }),
                        ],
                    }),
            ],
        })
    );
}
var aF = n(366209);
function aW() {
    return (0, i.jsxs)("div", {
        className: aF.mJ,
        children: [
            (0, i.jsx)(sh.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(ez.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: eU.intl.string(eU.t["7blcz6"]),
            }),
        ],
    });
}
function aB(e) {
    let { user: t, guildId: n, channelId: r } = e,
        s = (0, sy.A)(t.id),
        o = sE(t.id),
        u = (function () {
            let [e, t] = (0, a.yK)([sv.A], () => [sv.A.ipCountryCode, sv.A.ipCountryCodeRequest]),
                n = (0, sA.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, sx.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        d = 0 === s.length && o,
        c = l.useMemo(() => s.filter(rl.fu), [s]),
        g = l.useMemo(() => s.filter((e) => e instanceof sj.R), [s]);
    function f() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(sD, { className: aF.cG }), u && (0, i.jsx)(aW, {}), (0, i.jsx)(sY, {})],
                    }),
                s.map((e, l) =>
                    (0, i.jsx)(
                        aS.u,
                        { widget: e, user: t, guildId: n, channelId: r, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return ((0, sb.Y)(o, c),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, ec.A)(n);
        let { data: i, refetch: r } = (0, sI.P)(e),
            s = l.useRef(null !== i);
        l.useEffect(() => {
            s.current && ((s.current = !1), r());
        }, [r]);
    })(t.id, g),
    d)
        ? (0, i.jsx)(aU, { userId: t.id })
        : o
          ? (0, i.jsx)(sM.D, { children: f() })
          : f();
}
function aV(e) {
    var t;
    let n,
        r,
        { user: o, ...u } = e,
        d = l.useRef(null);
    (0, sC.i)({ containerRef: d });
    let c = ((t = o.id), (n = (0, a.bG)([lQ.default], () => lQ.default.getId() === t)), (r = rf()), n && null != r);
    return (0, i.jsxs)(sn, {
        "data-scroller": !0,
        scrollerRef: d,
        className: s()(aF.XG, { [aF.az]: c }),
        fade: !0,
        children: [(0, i.jsx)(ak, { scrollerRef: d }), (0, i.jsx)(aB, { user: o, ...u })],
    });
}
var aH = n(132500),
    az = n(777480),
    aY = n(825484),
    aK = n(952270),
    aq = n(444927),
    aX = n(895360),
    aZ = n(267102),
    a$ = n(285373),
    aJ = n(721932),
    aQ = n(832163),
    a0 = n(501838),
    a1 = n(44724),
    a2 = n(808247),
    a5 = n(673843),
    a3 = n(855052),
    a8 = n(639935),
    a9 = n(249203),
    a7 = n(535089),
    a6 = n(107563),
    a4 = n(840411),
    oe = n(666810),
    ot = n(419731),
    on = n(451395),
    oi = n(823016),
    ol = n(100741);
function or(e) {
    let { item: t, index: n, wishlistId: l, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, oi.r)();
    return (0, i.jsx)(on.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": eU.intl.formatToPlainString(eU.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: r,
        onEnd: () => a(String(t.skuId)),
        className: ol.C,
        dropBeforeClassName: ol.A,
        dropAfterClassName: ol.Ze,
        draggingClassName: ol.Id,
        children: (0, i.jsx)("div", { className: ol.An, children: s }),
    });
}
let os = l.memo(function (e) {
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
        { registerDragHandleRef: f } = (0, oi.r)(),
        m = l.useCallback(() => {
            g(t.skuId);
        }, [g, t.skuId]),
        p = l.useMemo(
            () =>
                a
                    ? (0, i.jsx)(on.jV, {
                          buttonRef: f(String(t.skuId)),
                          className: ol.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, f, t.skuId],
        ),
        h = l.useMemo(
            () =>
                (0, i.jsx)(ab, {
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
              children: (0, i.jsx)(or, { item: t, index: n, wishlistId: o, onReorder: d, children: h }),
          })
        : (0, i.jsx)("li", { children: h });
});
function oa(e) {
    let { items: t, profileOwner: n, guildId: r, showEditingControls: s, lastViewedAt: o } = e,
        u = y.default.getCurrentUser(),
        { defaultWishlistId: d } = (0, a.cf)([et.A], () => ({ defaultWishlistId: et.A.getFirstWishlistId(n.id) })),
        { isDragging: c } = (0, sK.V)((e) => ({ isDragging: e.isDragging() })),
        [g, f] = l.useState([]),
        m = l.useCallback((e) => {
            f((t) => (t.includes(e) ? t : [...t, e]));
        }, []),
        p = l.useCallback(
            (e, n) => {
                if (e === n || null == d || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = a6.A.getWishlist(d);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, a4.Ap)(i, t, e, n);
                a2.A.reorderWishlistItem(d, l.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [d, t],
        );
    if (null == u || null == d) return null;
    let h = (0, i.jsx)("ul", {
        className: ol.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                os,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: d,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, ot.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: m,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, i.jsx)(oi.B, { emptyListFallbackRef: null, children: h }) : h;
}
function oo(e) {
    let t = y.default.getCurrentUser()?.id,
        n = null != t && t !== e.profileOwner.id;
    return (0, i.jsx)(oe.h, {
        isGifting: n,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, i.jsx)(oa, { ...e }),
    });
}
var ou = n(815021),
    od = n(299679),
    oc = n(820847);
n(667532);
var og = n(862772),
    of = n(172218),
    om = n(739187),
    op = n(857250),
    oh = n(97483),
    ox = n(2157),
    oA = n(95817),
    oI = n(74135),
    ov = n(964164);
let oj = am.Z.SIZE_90;
function ob(e) {
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
        p = (0, od.Ar)(),
        h = (0, aq.A)(() => (0, aH.A)()),
        { handleVisibilityChange: x } = (0, oA.G)(h),
        A = (0, of.K)(x, 0.5, p?.surface != null),
        I = l.useCallback(() => {
            (m({
                wishlistId: g,
                action: ru.Mq.WISHLIST_ITEM_CLICKED,
                skuId: t.id,
                productLines: new Set([t.productLine]),
            }),
                p?.surface != null &&
                    tq.default.track(P.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, i.jsx)(s8.A, {
            sku: t,
            user: n,
            guildId: r,
            spec: oj,
            cardStyle: s()(ov.Nr, a),
            skuPreviewStyle: s()(ov.ev, o),
            onHoverOrFocusChange: u,
            onClick: I,
            "aria-label": c,
            children: f,
        }),
    });
}
function oC(e) {
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
                    (await a2.A.addSkuToWishlist(t.id, n), d?.(), a?.({ tabSection: ru.RP.WISHLIST }));
                } catch (e) {
                    ((0, om.P)((0, op.o)(eU.intl.string(eU.t.F8FvUy), oh.Ck.FAILURE)),
                        ld.O.announce(eU.intl.string(eU.t.F8FvUy)));
                } finally {
                    m(!1);
                }
            }
        }, [t, n, f, a, d]),
        h = l.useMemo(() => s()({ [ov.zW]: r || f }, o), [r, f, o]);
    return (0, i.jsxs)(ob, {
        "aria-label": eU.intl.formatToPlainString(eU.t.xRjJBe, { productName: (0, s0.T)(t) }),
        sku: t,
        wishlistOwner: u,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, i.jsx)(ad.oU, { isHoveringOrFocusing: r, loading: f }), !r && !f && c],
    });
}
function oy(e) {
    let { sku: t, analyticsLocations: n, ...l } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(n ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, ox.D)({ surface: "sku_purchase_badge", applicationId: t.applicationId, skuId: t.id });
    return (0, i.jsx)(oC, {
        sku: t,
        analyticsLocations: r,
        promotion: null != s ? (0, i.jsx)(oI.s, { spec: oj, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...l,
    });
}
function oE(e) {
    let { sku: t, ...n } = e,
        r = l.useMemo(() => {
            switch (t?.tenantMetadata?.collectibles?.type) {
                case sq.R.PROFILE_EFFECT:
                case sq.R.NAMEPLATE:
                case sq.R.BUNDLE:
                case sq.R.PROFILE_FRAME:
                    return;
                case sq.R.AVATAR_DECORATION:
                    return ov.ML;
                default:
                    return s()(ov.ML, ov.ZY);
            }
        }, [t?.tenantMetadata?.collectibles?.type]);
    return (0, i.jsx)(oC, { sku: t, skuPreviewStyle: r, ...n });
}
function oS(e) {
    let { sku: t, ...n } = e;
    return (0, i.jsx)(oC, { sku: t, skuPreviewStyle: ah.MO, ...n });
}
function oN(e) {
    let { sku: t, ...n } = e,
        [r, s] = l.useState(!1);
    switch (t.productLine) {
        case P.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, i.jsx)(oy, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case P.EZt.COLLECTIBLES:
            return (0, i.jsx)(oE, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        case P.EZt.PREMIUM:
            return (0, i.jsx)(oS, { sku: t, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...n });
        default:
            return null;
    }
}
var ok = n(609965);
function oP(e) {
    let { wishlist: t, guildId: n, handleOpenUserProfileModal: l, analyticsLocations: r, className: o, items: u } = e,
        d = (0, a.bG)([y.default], () => y.default.getUser(t?.userId));
    return (0, i.jsx)("ul", {
        className: s()(ok.Vg, o),
        children: u.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, i.jsx)(
                od.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, i.jsx)(oN, {
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
var oT = n(927813);
let oR = 90 * oT.A.Millis.DAY,
    oO = 90 * oT.A.Millis.DAY;
var o_ = n(469364);
function oL(e) {
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
                    eP.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: u + oO, cooldownDurationMs: oR },
                    void 0,
                    !0,
                ),
                g = d === eP.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: i && (g || s || !r),
                isDismissible: r,
                markAsDismissed: l.useCallback(() => {
                    (o(!1), c(eG.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: t.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, i.jsx)(ow, {
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
function ow(e) {
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
                { recommendations: a, status: o } = (0, og.Ul)({ userId: t, numItems: i, source: s }),
                u = l.useMemo(() => new Set(n?.items.map((e) => e.skuId) ?? []), [n]),
                d = "success" === o && !u.has(iL.pe.TIER_2);
            return {
                items: l.useMemo(() => {
                    let e = a.filter((e) => !u.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (d && e.unshift({ sku: (0, a4.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, u, d, r]),
                status: o,
            };
        })({
            userId: t.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: oc.B.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, i.jsxs)("div", {
              className: s()(o_.kL, u),
              children: [
                  (0, i.jsxs)("div", {
                      className: o_.wx,
                      children: [
                          (0, i.jsx)(ez.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: eU.intl.string(eU.t["+GB8Kt"]),
                          }),
                          d &&
                              (0, i.jsx)("div", {
                                  className: o_.b,
                                  children: (0, i.jsx)(ou.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, i.jsx)(od.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: t.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, i.jsx)(oP, {
                          items: g,
                          guildId: n,
                          wishlist: r,
                          className: s()(o_.Vg, o_.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var oD = n(477782),
    oM = n(980707),
    oG = n(431194);
function oU(e) {
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
                            iconLeft: null != t ? () => (0, i.jsx)("img", { className: oG.I, src: t, alt: "" }) : t_.U,
                            leadingAccessory: null != t ? { type: "image", src: t } : { type: "icon", icon: t_.U },
                            action: () => n?.(e.id),
                        };
                    }),
                [t, n],
            );
        })({ applications: (0, ec.A)(o), handleOpenGameShop: s }),
        f = l.useMemo(
            () =>
                (0, i.jsxs)(oD.rX, {
                    children: [
                        null != r &&
                            (0, i.jsx)(oD.Dr, {
                                id: "browse-collectibles-shop",
                                label: eU.intl.string(eU.t["5upuqx"]),
                                iconLeft: t_.U,
                                leadingAccessory: { type: "icon", icon: t_.U },
                                action: r,
                            }),
                        null != a &&
                            (0, i.jsx)(oD.Dr, {
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
                                    oD.Dr,
                                    { id: t, label: n, iconLeft: l, leadingAccessory: r, action: s },
                                    t,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, i.jsx)(nj.Y, {
        targetElementRef: u,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(oM.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: t,
                "aria-label": eU.intl.string(eU.t.GdNkvG),
                children: f,
            });
        },
        children: (e) =>
            (0, i.jsx)(nd.$, {
                buttonRef: u,
                variant: n,
                size: "sm",
                icon: d ? na.P : i1.a,
                iconPosition: "end",
                text: t,
                ...e,
            }),
    });
}
var oF = n(365199);
let oW = rB.A.getArticleURL(P.MVz.CUSTOM_PROFILES_WISHLIST);
function oB(e) {
    let { isOwner: t, isWishlistPublic: n, onToggleVisibility: r } = e,
        s = l.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = l.useMemo(
            () =>
                t
                    ? (0, i.jsxs)(oD.rX, {
                          children: [
                              (0, i.jsx)(oD.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eU.intl.string(eU.t.b2nFyA),
                                  subtext: eU.intl.string(eU.t.dw58pE),
                                  checked: n,
                                  action: r,
                              }),
                              (0, i.jsx)(oD.bX, {}),
                              (0, i.jsx)(oD.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eU.intl.string(eU.t.hvVgAZ),
                                  icon: tV.I,
                                  trailingIndicator: { type: "icon", icon: tV.I },
                                  action: () => window.open(oW),
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
              children: (0, i.jsx)(nj.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, i.jsx)(oM.W, {
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
                          icon: oF.MoreHorizontalIcon,
                          tooltipText: eU.intl.string(eU.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var oV = n(526725);
function oH(e) {
    let { socialLayerStorefrontApplicationIds: t, handleOpenShop: n, handleOpenGameShop: l } = e;
    return t.length > 0
        ? (0, i.jsx)(oU, {
              title: eU.intl.string(eU.t["i/yzHs"]),
              handleOpenCollectiblesShop: n,
              handleOpenGameShop: l,
              socialLayerStorefrontApplicationIds: t,
          })
        : (0, i.jsx)(nd.$, {
              variant: "secondary",
              size: "sm",
              icon: t_.U,
              text: eU.intl.string(eU.t["i/yzHs"]),
              onClick: n,
          });
}
function oz(e) {
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
        className: oV.$s,
        children: [
            t &&
                (n.length > 0 || null != a
                    ? (0, i.jsx)(oU, {
                          title: eU.intl.string(eU.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: n.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: n,
                      })
                    : (0, i.jsx)(nd.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: tH.j,
                          text: eU.intl.string(eU.t.SDUwM0),
                          onClick: r,
                      })),
            (0, i.jsx)(oB, { isOwner: !0, isWishlistPublic: l, onToggleVisibility: o }),
        ],
    });
}
function oY(e) {
    let { application: t, handleOpenGameShop: n, handleOpenGameShopMouseDown: r } = e,
        s = l.useCallback(() => {
            n(t.id);
        }, [t, n]),
        a = l.useCallback(() => {
            r(t.id);
        }, [t, r]);
    return (0, i.jsx)(nd.$, {
        variant: "primary",
        size: "sm",
        icon: t_.U,
        text: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: t.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function oK(e) {
    let {
            showEditingControls: t,
            socialLayerStorefrontApplicationIds: n,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, aZ.Us)() === P.BRT.OVERLAY,
        u = (0, ec.A)(n),
        d = l.useMemo(() => {
            if (o || 0 === n.length) return null;
            let e = u.reduce((e, t) => (null == t || (e[t.id] = t), e), {});
            if (1 === n.length) {
                let t = e[n[0]];
                return null == t
                    ? null
                    : (0, i.jsx)(oY, { application: t, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, i.jsx)(oU, {
                title: eU.intl.string(eU.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: n,
            });
        }, [o, n, s, u, a]);
    return (0, i.jsxs)("div", {
        className: oV.y7,
        children: [
            (0, i.jsxs)("div", {
                className: oV.q6,
                children: [
                    (0, i.jsx)(no.D, {
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
                (0, i.jsxs)(aY.e, {
                    size: "sm",
                    children: [
                        t &&
                            (0, i.jsx)(nd.$, {
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
function oq(e) {
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
        f?.visibility != null && x(f.visibility === az.a.PUBLIC);
    }, [f?.visibility]);
    let A = l.useCallback(
            (e) => {
                let { wishlistId: t, action: n, productLines: i } = e;
                null != t && m({ wishlistId: t, action: n, productLines: i });
            },
            [m],
        ),
        I = (0, a7.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, a3.y9)(s) : null }),
        v = l.useCallback(() => {
            if (null == g) return;
            let e = h ? az.a.PRIVATE : az.a.PUBLIC;
            (x(!h),
                a2.A.updateWishlistVisibility(g, e),
                m({
                    wishlistId: g,
                    action: h ? ru.Mq.WISHLIST_TOGGLE_PRIVATE : ru.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, a3.y9)(s) : void 0,
                }));
        }, [g, h, m, s]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !h &&
                (0, i.jsxs)("div", {
                    className: oV.lm,
                    children: [
                        (0, i.jsx)(aK.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
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
                    className: oV.lm,
                    children: [
                        (0, i.jsx)(sh.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, i.jsx)(ez.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.d78ChW),
                        }),
                    ],
                }),
            (0, i.jsxs)("div", {
                ref: I,
                className: oV.U1,
                children: [
                    (0, i.jsx)(ez.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: eU.intl.format(eU.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    t
                        ? (0, i.jsx)(oz, {
                              showEditingControls: n,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: v,
                          })
                        : (0, i.jsx)(oH, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: u,
                              handleOpenGameShop: d,
                          }),
                ],
            }),
        ],
    });
}
function oX(e) {
    let { profileOwner: t, guildId: n } = e,
        r = l.useRef(null);
    (0, sC.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: u } = (0, a.cf)([et.A, y.default], () => ({
            wishlistId: et.A.getFirstWishlistId(t.id),
            currentUser: y.default.getCurrentUser(),
        })),
        { analyticsLocations: d } = (0, b.Ay)(),
        c = (0, aq.A)(() => ((0, rL.aS)()?.enabled === !0 ? (a9.A.getEntry(t.id)?.lastViewedAt ?? null) : null));
    l.useEffect(() => {
        (0, a8.Z)(t.id);
    }, [t.id]);
    let g = sE(t.id),
        { wishlist: f, wasFetched: m, error: p } = (0, Y.fw)({ wishlistId: o, userId: t.id }),
        [h, x] = l.useState(!1);
    (m && !h && x(!0), (0, a5.A)(f));
    let A = (function (e) {
            let { wishlist: t, profileOwner: n, currentUser: i } = e,
                r = n.id === i?.id,
                s = l.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
                o = (0, a.bG)([aQ.A], () => aQ.A.getDetectableIdsToApplicationIds()),
                u = l.useMemo(() => {
                    let e = [];
                    for (let n of t?.items ?? [])
                        (0, aJ.$)(n) && null != o[n.sku.applicationId] && e.push(n.sku.applicationId);
                    return e;
                }, [t, o]),
                d = (0, a0.w)({ userIds: s }),
                c = (0, a0.mn)({ userIds: s }),
                g = (0, a0.tR)(s),
                f = (0, a0.rY)(),
                m = (0, a0.qx)(),
                p = (0, a0.px)();
            return l.useMemo(
                () => (0, rX.uniq)([...u, ...d, ...c, ...g, ...(r ? [...f, ...m, ...p] : [])].filter(ef.Vq)),
                [u, d, c, g, f, m, p, r],
            );
        })({ wishlist: f, profileOwner: t, currentUser: u }),
        I = (0, aq.A)(() => (0, aH.A)()),
        v = l.useCallback(() => {
            (0, tL.Cz)({ analyticsLocations: d, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [d]),
        C = l.useCallback((e) => {
            (0, a1.G)({ applicationId: e });
        }, []),
        E = l.useCallback((e) => {
            ((0, iT.M)(), (0, a1.default)({ applicationId: e }));
        }, []),
        { handleToggle: S } = (0, s4.c)({
            userId: u?.id,
            skuId: iL.pe.TIER_2,
            nuxGraphic: a$.g,
            onNuxShow: aX.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == u || null != p) return null;
    let N = null == f || 0 === f.items.length;
    return (0, i.jsxs)(sn, {
        scrollerRef: r,
        className: s()({ [oV.XG]: !N }),
        fade: !0,
        children: [
            N
                ? (0, i.jsx)(oK, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: v,
                      handleOpenGameShop: E,
                      handleOpenGameShopMouseDown: C,
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(ak, { scrollerRef: r }),
                          (0, i.jsx)(oq, {
                              isOwner: u?.id === t.id,
                              showEditingControls: g,
                              profileOwner: t,
                              wishlist: f,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: v,
                              handleOpenGameShop: E,
                              handleAddNitroToWishlist: (0, a3.C3)(f, iL.pe.TIER_2) ? void 0 : S,
                          }),
                          (0, i.jsx)(oo, {
                              items: f.items,
                              profileOwner: t,
                              guildId: n,
                              showEditingControls: g,
                              lastViewedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, i.jsx)(oL, {
                    user: t,
                    guildId: n,
                    wishlist: f,
                    hasFetchedWishlist: h,
                    analyticsLocations: d,
                    impressionSessionId: I,
                    className: N ? oV._E : oV.HZ,
                }),
        ],
    });
}
function oZ(e) {
    let { user: t, currentUser: n, section: l, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return l === ru.RP.ACTIVITY
        ? (0, i.jsx)(sl, { user: t, currentUser: n, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : l === ru.RP.MUTUAL_FRIENDS
          ? (0, i.jsx)(sc, { user: t, guildId: s, channelId: a, onClose: o })
          : l === ru.RP.MUTUAL_GUILDS
            ? (0, i.jsx)(sp, { user: t, onClose: o })
            : l === ru.RP.WIDGETS
              ? (0, i.jsx)(aV, { user: t, guildId: s, channelId: a })
              : l === ru.RP.WISHLIST
                ? (0, i.jsx)(oX, { profileOwner: t, guildId: s })
                : null;
}
function o$(e) {
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
        { shouldLogExposure: p } = (0, rw.A)(t);
    (0, rD.A)(t);
    let h = l.useRef(!1),
        x = o.some((e) => !0 === e.showNewContentDot);
    l.useEffect(() => {
        x && !h.current && ((h.current = !0), g({ action: "VIEW_NEW_CONTENT_TAB_BADGE" }));
    }, [x, g]);
    let [A, I] = l.useState(() => (o.find((e) => e.section === u) ?? o[0]).section),
        v = o.find((e) => e.section === A) ?? o[0];
    return (
        v.section !== A && I(v.section),
        (0, i.jsxs)("div", {
            className: st.kL,
            children: [
                p && (0, i.jsx)(rL.kM, { location: "UserProfileModalV2Tabs" }),
                (0, i.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: st.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, i.jsx)(r_.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: v.section,
                        onItemSelect: function (e) {
                            rs.A.hasUnsavedChanges() && v.section === ru.RP.WIDGETS
                                ? (0, iX.VQ)()
                                : (g({ action: "PRESS_SECTION", section: e }), I(e));
                        },
                        children: o.map((e) =>
                            (0, i.jsxs)(
                                r_.V.Item,
                                {
                                    className: st.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eU.intl.formatToPlainString(eU.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, i.jsx)(rM.A, { className: st.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, i.jsx)(r_.V.Panel, {
                    id: v.section,
                    "aria-label": v.text,
                    className: st.NM,
                    children: (0, i.jsx)(m.F, {
                        component: (0, i.jsx)(f.A, { children: (0, i.jsx)(m.H, { children: v.text }) }),
                        children: (0, i.jsx)(oZ, {
                            user: t,
                            currentUser: n,
                            displayProfile: r,
                            guildId: s,
                            channelId: a,
                            section: v.section,
                            onClose: d,
                        }),
                    }),
                }),
            ],
        })
    );
}
var oJ = n(933832),
    oQ = n(972213);
let o0 = {
        [ru.jM.WIDGET_ADDED]: {
            message: eU.intl.string(eU.t.fFP1Uy),
            icon: (0, i.jsx)(oJ.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [ru.jM.WIDGET_REMOVED]: {
            message: eU.intl.string(eU.t.zzsK7h),
            icon: (0, i.jsx)(oJ.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [ru.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eU.intl.string(eU.t["84MExs"]),
            icon: (0, i.jsx)(oQ.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: oh.Ck.FAILURE,
        },
        [ru.jM.SOMETHING_WENT_WRONG]: {
            message: eU.intl.string(eU.t.F8FvUy),
            icon: (0, i.jsx)(oQ.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: oh.Ck.FAILURE,
        },
    },
    o1 = (e) => {
        let { className: t } = e,
            n = (0, ro.fu)(),
            r = (0, a.bG)([th.Ay], () => th.Ay.useReducedMotion),
            [s, o] = l.useState(!1),
            [u, c] = l.useState(null);
        l.useEffect(() => {
            null !== n ? (o(!0), c(o0[n]), ld.O.announce(o0[n].message)) : o(!1);
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
            l.useEffect(() => () => (0, ro.XA)(null), []),
            l.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, ro.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, i.jsx)(i.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, i.jsx)(l_.animated.div, { className: t, style: e, children: (0, i.jsx)(rS, { ...u }) }),
                ),
            })
        );
    };
var o2 = n(297413),
    o5 = n(465829),
    o3 = n(826673),
    o8 = n(609425),
    o9 = n(73392),
    o7 = n(576705),
    o6 = n(997394);
function o4(e) {
    return null == e || "" === e ? void 0 : e;
}
function ue(e) {
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
        C = (0, nm.u)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: E, permissionsLoaded: S } = (0, a.cf)([o7.A, K.A], () => {
            if (!I || null == v) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = K.A.getGuild(v);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: o7.A.can(P.xBc.CHANGE_NICKNAME, e) || o7.A.can(P.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        N = I && !E && S,
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
        (m = n ? (o4(r) ?? p.username) : p.username),
        {
            value: f,
            previewValue: o4(g) ?? m,
            fallbackDisplayName: m,
            onCommit: l.useCallback(
                (e) => {
                    n ? (0, tf.p)({ nickname: e.trim(), guildId: t ?? void 0 }) : (0, tf.p)({ globalName: e.trim() });
                },
                [n, t],
            ),
        }),
        _ = (0, a.bG)([eb.A], () => eb.A.getErrors(v ?? null)),
        L = (0, tg.EC)(v ?? null),
        w = I ? _.nick?.[0] : _.global_name?.[0],
        D = L?.nick?.[0],
        M = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(v).pendingDisplayNameStyles),
        G = (0, o8.A)({ userId: p.id, guildId: v, pendingDisplayNameStyles: M }),
        U = (0, o9.a)({ displayNameStyles: G, compensateForSafari: !1 }),
        F = eU.intl.string(I ? eU.t.mq6Cg9 : eU.t.XuZU7A),
        W = I ? eU.intl.string(eU.t.YcDKr8) : p.username,
        B = l.useRef(null),
        V = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    C &&
                        (0, o3.Dr)(eP.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eG.i.INDIRECT_ACTION,
                        }),
                    (0, nw.L)({ analyticsLocations: A, guildId: v, stackingBehavior: "stack", returnRef: B }));
            },
            [A, v, C],
        ),
        H = {
            icon: t8.V,
            tooltip: eU.intl.string(eU.t.lqKKI2),
            "aria-label": eU.intl.string(eU.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: V,
            buttonRef: B,
        },
        z = N
            ? (0, i.jsx)("span", {
                  className: o6.Cs,
                  children: (0, i.jsx)(ns.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, i.jsx)("div", {
        className: tx.kL,
        children: (0, i.jsx)(ez.E, {
            variant: o5.gU.lg,
            color: "none",
            className: U,
            children: (0, i.jsx)(rh.w, {
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
                    return (0, i.jsx)(o5.c$, {
                        user: p,
                        guildId: v,
                        displayName: n ? (o4(e) ?? R) : T,
                        size: "lg",
                        pendingDisplayNameStyles: M,
                        className: s()(o6.dt, { [o6.jW]: n && "" === e }),
                        displayNameTrailing: z,
                    });
                },
                placeholder: W,
                label: F,
                maxLength: P.zzC,
                textVariant: "inherit",
                trailing: E && j ? H : void 0,
                error: w,
                helperText: N ? eU.intl.string(eU.t.gzjxQi) : D,
                disabled: !E,
            }),
        }),
    });
}
var ut = n(628072);
function un(e) {
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
        className: s()(tx.kL, tx.oE, ut.k),
        children: (0, i.jsx)(rh.w, {
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
            preview: p ? (0, i.jsx)(o5.n2, { pronouns: g }) : null,
            label: eU.intl.string(eU.t["rniRE+"]),
            placeholder: h,
            maxLength: P.VE5,
            spellCheck: !1,
        }),
    });
}
var ui = n(305866),
    ul = n(453318),
    ur = n(145497),
    us = n(685073),
    ua = n(318785),
    uo = n(534400),
    uu = n(436921),
    ud = n(743981),
    uc = n(295930),
    ug = n(594615);
let uf = "no-server-tag";
function um(e) {
    let { buttonRef: t, guildId: n, guildTag: l, guildBadge: r, ...a } = e,
        o = (0, uu.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        u = null == l || null == n;
    return (0, i.jsx)(e8.D, {
        innerRef: t,
        className: s()(o ? uc.qJ : uc.L5, { [uc.wK]: u }),
        "aria-label": u ? eU.intl.string(eU.t.Pdd1nd) : eU.intl.formatToPlainString(eU.t.R1AXap, { tag: l }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, i.jsxs)(ez.E, {
            variant: o || u ? "text-xs/normal" : "text-xs/semibold",
            color: u ? "input-placeholder-text-default" : "text-default",
            className: uc.W3,
            tag: "span",
            children: [
                u
                    ? eU.intl.string(eU.t.Pdd1nd)
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(
                                  uo.Z9,
                                  {
                                      src: (0, us.gC)(n, r, ud.Sl.SIZE_14),
                                      size: ud.Sl.SIZE_14,
                                      className: uc.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, us.gC)(n, r, ud.Sl.SIZE_14) ?? n,
                              ),
                              l,
                          ],
                      }),
                (0, i.jsx)(i1.a, { size: "xs", color: "currentColor", className: uc.u4 }),
            ],
        }),
    });
}
function up() {
    let e = l.useRef(null),
        t = (0, ua.b)(),
        n = l.useMemo(() => new Map(t.map((e) => [e.id, e])), [t]),
        r = (0, a.cf)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (0, us.Zo)(e?.primaryGuild);
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
                e.id === uf
                    ? (0, i.jsx)("div", {
                          className: ug.uN,
                          children: (0, i.jsx)(ez.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: uc.ve,
                              children: e.label,
                          }),
                      })
                    : (0, i.jsx)(le.c, { ...e }),
            [],
        ),
        p = l.useMemo(
            () => [
                { id: uf, label: eU.intl.string(eU.t.VxdWWH), value: uf },
                ...t.flatMap((e) => {
                    let t = e.profile?.tag;
                    if (null == t) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, i.jsx)(ur.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, i.jsx)(uo.o9, { guildId: e.id, guildTag: t, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [t],
        );
    return 0 === t.length && null == s
        ? null
        : (0, i.jsx)(nj.Y, {
              targetElementRef: e,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(ui.l, {
                      className: uc.yt,
                      "aria-label": eU.intl.string(eU.t.Fo0g9x),
                      children: (0, i.jsxs)(ul.iS, {
                          selectionMode: "single",
                          options: p,
                          onSelectionChange: (e) => {
                              ((0, tf.p)({ primaryGuildId: e === uf ? null : e }), t());
                          },
                          children: [
                              (0, i.jsx)(ul.a3, {
                                  label: eU.intl.string(eU.t["5h0QOP"]),
                                  hideLabel: !0,
                                  placeholder: eU.intl.string(eU.t["5h0QOP"]),
                                  autoFocus: !0,
                              }),
                              (0, i.jsx)(ul.X2, { renderListItem: m }),
                          ],
                      }),
                  });
              },
              children: (t) => (0, i.jsx)(um, { buttonRef: e, guildId: u, guildTag: g, guildBadge: f, ...t }),
          });
}
var uh = n(956495);
function ux(e) {
    let { displayProfile: t, nickname: n, displayNameStylesOverride: l, ...r } = e;
    return (0, i.jsx)(o5.Ay, {
        ...r,
        guildId: t?.guildId ?? void 0,
        displayName: n,
        displayNameSize: "lg",
        pronouns: t?.pronouns,
        pendingDisplayNameStyles: l,
    });
}
function uA(e) {
    let t = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, i.jsx)(ux, { ...e, displayNameStylesOverride: t });
}
function uI(e) {
    let { user: t, displayProfile: n, trailing: l } = e,
        r = t.isProvisional
            ? null
            : (0, i.jsx)(o2.A, {
                  user: t,
                  forceUsername: !0,
                  className: uh.a1,
                  usernameClass: uh.eb,
                  discriminatorClass: uh.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(ue, { displayProfile: n, user: t }),
            (0, i.jsxs)("div", {
                className: s()(uh.AK, uh.j6),
                children: [r, (0, i.jsx)(o5.Ce, {}), (0, i.jsx)(un, { displayProfile: n }), (0, i.jsx)(up, {}), l],
            }),
        ],
    });
}
function uv(e) {
    let { editingMode: t, ...n } = e;
    switch (t) {
        case "read-only":
            return (0, i.jsx)(ux, { ...n });
        case "try-it-out":
            return (0, i.jsx)(uA, { ...n });
        case "edit":
            return (0, i.jsx)(uI, { ...n });
        default:
            return (0, ef.xb)(t);
    }
}
var uj = n(97808),
    ub = n(22231),
    uC = n(601255),
    uy = n(562819),
    uE = n(19575),
    uS = n(339984),
    uN = n(329801),
    uk = n(884362);
let uP = uE.Ay.getEnableHardwareAcceleration() ? uj.Js : uj.eu;
function uT(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function uR(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oM.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.YAgq3W),
        children: (0, i.jsx)(oD.rX, { children: n }),
    });
}
function uO(e) {
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
                E = null != (0, uC.A)(y ? C : j) && (y ? null != C : null != j),
                S = d && null != v,
                N = l.useCallback(() => {
                    (r(),
                        uT(() =>
                            (0, nh.XD)({
                                uploadType: uS.HL.AVATAR,
                                analyticsSource: o,
                                guildId: n ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, n, s]),
                k = l.useCallback(() => {
                    (r(),
                        uT(() =>
                            (0, uy.L)({
                                analyticsLocations: u,
                                guild: I ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, u, I, s]),
                P = l.useCallback(() => {
                    (r(),
                        (0, nh.rM)(null, f, (e) => (0, tf.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eI.WU)(p ? "reset" : "remove"));
                }, [r, n, f, p]),
                T = l.useCallback(() => {
                    (r(), (0, tf.p)({ guildId: n ?? void 0, avatarDecoration: null }));
                }, [r, n]);
            return l.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, i.jsx)(
                                oD.Dr,
                                { id: "change-avatar", label: eU.intl.string(eU.t["4OynCD"]), action: N },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, i.jsx)(
                                oD.Dr,
                                { id: "change-decoration", label: eU.intl.string(eU.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        m &&
                        e.push(
                            p
                                ? (0, i.jsx)(
                                      oD.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.TDjKDm),
                                          action: P,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, i.jsx)(
                                      oD.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.twB3fz),
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
                                      oD.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["2u5yu0"]),
                                          action: T,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, i.jsx)(
                                      oD.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["9rx5GO"]),
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
        ? (0, i.jsx)(eW.A, { ...e })
        : (0, i.jsxs)("div", {
              ...o,
              className: s()(uN.my, uN.vk, uk.kL, { [uk.MO]: u }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || d(!0);
              },
              children: [
                  (0, i.jsx)(uP, { ...r, imageClassName: s()(uN.Lw, uk.HU) }),
                  (0, i.jsx)(nj.Y, {
                      targetElementRef: c,
                      shouldShow: u,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, i.jsx)(uR, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: c,
                              className: uk.r9,
                              children: (0, i.jsx)(t9.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ub.PencilIcon,
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
var u_ = n(514905);
function uL(e) {
    let { onMenuClose: t, items: n, ...l } = e;
    return (0, i.jsx)(oM.W, {
        ...l,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: t,
        onSelect: t,
        "aria-label": eU.intl.string(eU.t.FzU73A),
        children: (0, i.jsx)(oD.rX, { children: n }),
    });
}
function uw(e) {
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
                P = x && E,
                T = x && S,
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
                        (0, nh.XD)({
                            uploadType: uS.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, n, s]),
                M = l.useCallback(() => {
                    (r(),
                        (0, n$.W)({
                            analyticsLocations: u,
                            guild: null != n ? (K.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, u, n, d, s]),
                G = l.useCallback(() => {
                    (r(), (0, nh.rM)(null, j, (e) => (0, tf.p)({ guildId: n ?? void 0, banner: e })));
                }, [r, n, j]),
                U = l.useCallback(() => {
                    (r(), (0, tf.p)({ guildId: n ?? void 0, profileEffect: null }));
                }, [r, n]),
                F = l.useCallback(() => {
                    (r(),
                        (0, ir.w)({
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
                                oD.Dr,
                                { id: "change-banner", label: eU.intl.string(eU.t.N0bC3P), action: D },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, i.jsx)(
                                oD.Dr,
                                { id: "change-effect", label: eU.intl.string(eU.t["/6nv6N"]), action: M },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, i.jsx)(
                                oD.Dr,
                                { id: "change-frame", label: eU.intl.string(eU.t["oTSa/q"]), action: F },
                                "change-frame",
                            ),
                        ),
                    f &&
                        N &&
                        e.push(
                            k
                                ? (0, i.jsx)(
                                      oD.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, i.jsx)(
                                      oD.Dr,
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
                            P
                                ? (0, i.jsx)(
                                      oD.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.Lb7lu9),
                                          action: U,
                                      },
                                      "reset-effect",
                                  )
                                : (0, i.jsx)(
                                      oD.Dr,
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
                            T
                                ? (0, i.jsx)(
                                      oD.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.A0pzWn),
                                          action: W,
                                      },
                                      "reset-frame",
                                  )
                                : (0, i.jsx)(
                                      oD.Dr,
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
            }, [k, f, p, h, P, T, N, R, O, D, M, F, G, U, W]);
        })({ user: t, guildId: n, onClose: c, returnRef: d });
    return 0 === g.length
        ? (0, i.jsx)(eV.A, { ...e })
        : (0, i.jsxs)("div", {
              className: s()(u_.kL, { [u_.MO]: r }),
              onMouseDown: (e) => {
                  u.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, i.jsx)(eV.A, { ...e, className: u_.Pr }),
                  (0, i.jsx)(nj.Y, {
                      targetElementRef: u,
                      shouldShow: r,
                      animation: nj.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, i.jsx)(uL, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, i.jsx)("div", {
                              ref: u,
                              className: u_.r9,
                              children: (0, i.jsx)(t9.K, {
                                  ...e,
                                  buttonRef: d,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ub.PencilIcon,
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
var uD = n(415916),
    uM = n(419341),
    uG = n(732188),
    uU = n(837531),
    uF = n(186272),
    uW = n(447538);
let uB = (e) => e * (2 - e),
    uV = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: u._3.SIZE_96, avatarOffsetX: 16 } };
function uH(e) {
    let { type: t, anchor: n } = e;
    return "staple" !== t || "bottom" !== n;
}
function uz(e) {
    let { displayProfile: t, pendingBanner: n } = e;
    if ((0, eo.Nx)()) return null;
    let l = t?.getPreviewBanner(n, !1, 1024);
    return null == l
        ? null
        : (0, i.jsx)("div", { className: uW.backgroundImage, style: { backgroundImage: `url(${l})` } });
}
function uY(e) {
    let { displayProfile: t, profileEffectOverride: n, isHovering: r } = e,
        s = void 0 !== n ? n : t?.profileEffect,
        a = l.useSyncExternalStore(
            (e) => (n0.add(e), () => n0.delete(e)),
            () => n1,
        );
    return null == s ? null : (0, i.jsx)(_.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function uK(e) {
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
    (0, I.g)(L, Y, [], { fireOnMount: !0 });
    let K = null != U ? uV[U] : void 0,
        Z = l.useMemo(() => A ?? (0, W.A)(), [A]),
        { relationshipType: J, originApplicationId: Q } = (0, a.cf)([q.A], () => ({
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
        eA = _ ? uw : eV.A,
        eI = p?.guildId ?? d,
        ev = {
            user: o,
            displayProfile: p,
            guildId: d,
            channelId: m,
            avatarSize: K?.avatarSize ?? ey.T[eC.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: b,
        },
        ej = l.useCallback(() => {
            (0, e5.A)({ user: o, guildId: eI, alt: h });
        }, [h, eI, o]);
    return (0, i.jsxs)("main", {
        className: s()(uW.profile, null != U && uW[U]),
        ref: L,
        "aria-busy": R,
        children: [
            (0, i.jsxs)("div", {
                className: uW.profileHeader,
                children: [
                    (0, i.jsx)("div", {
                        className: uW.profileHeaderBannerContainer,
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
                        ? (0, i.jsx)(uO, { ...ev })
                        : (0, i.jsx)(eW.A, {
                              ...ev,
                              onOpenAvatar: "read-only" === T ? ej : void 0,
                              imageAnimatingClassName: "try-it-out" === T && null == b ? iz.$T : void 0,
                          }),
                    (0, i.jsx)(e1.A, {
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
                className: uW.profileBody,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(uv, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, i.jsx)(eB.A, {
                                    displayProfile: p,
                                    themeType: eC.d.MODAL_V2,
                                    onClose: v,
                                    showPendingBadgeEdits: O,
                                    popoutAnchorRef: x ? w : void 0,
                                    containerRef: D,
                                }),
                                onClose: v,
                                editingMode: T,
                            }),
                            (0, i.jsx)("div", { ref: w }),
                            O && x && (0, i.jsx)(eF, { targetElementRef: D }),
                        ],
                    }),
                    J === P.eA$.PENDING_INCOMING &&
                        (0, i.jsx)(e0.A.Overlay, {
                            className: uW.profileOverlay,
                            children: (0, i.jsx)(eq.A, {
                                user: o,
                                applicationId: Q,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: uW.profileBanner,
                            }),
                        }),
                    ei.map((e) => {
                        let { applicationId: t } = e;
                        return (0, i.jsx)(
                            e0.A.Overlay,
                            {
                                className: uW.profileOverlay,
                                children: (0, i.jsx)(eq.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: t,
                                    className: uW.profileBanner,
                                }),
                            },
                            t,
                        );
                    }),
                    o.isProvisional &&
                        (0, i.jsx)(e0.A.Overlay, {
                            className: uW.profileOverlay,
                            children: (0, i.jsx)(tc, {
                                heading: eU.intl.string(eU.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: uW.profileBanner,
                                children: (0, i.jsx)(z.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, i.jsx)(eQ.A, { user: o, className: uW.profileBanner }),
                    p?.private &&
                        (0, i.jsx)(e0.A.Overlay, {
                            className: uW.profileOverlay,
                            children: (0, i.jsx)(eJ.A, { username: h }),
                        }),
                    (0, i.jsx)("div", {
                        className: uW.profileButtons,
                        children: (0, i.jsx)(tU, {
                            user: o,
                            currentUser: u,
                            guildId: d,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: J,
                            onClose: v,
                        }),
                    }),
                    O && "try-it-out" !== T && (0, i.jsx)(eH.A, { isPremiumUser: (0, $.ki)(u) }),
                    !et && (0, i.jsx)(tN, { currentUser: u, displayProfile: p, canEditInPlace: _ }),
                    en.length > 0 &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t["Uv/eTx"]),
                            children: (0, i.jsx)(eK.A, { applicationIds: en }),
                        }),
                    (0, i.jsx)(tc, {
                        heading: eU.intl.string(eU.t.a6XYD9),
                        children: (0, i.jsx)(eZ.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: ru.In }),
                    }),
                    null != ee &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t.wlTO8v),
                            children: (0, i.jsx)(eY, { friendsSinceDate: ee }),
                        }),
                    p?.guildId != null &&
                        (0, i.jsx)(e2.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: uW.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !et &&
                        (_ || eh) &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t["3fe7U5"]),
                            scrollTargetId: ru.bk.CONNECTIONS,
                            children: (0, i.jsx)(t3, {
                                applicationIdentities: ea,
                                connections: eo,
                                userId: o.id,
                                allowEditing: _,
                                className: uW.profileAppConnections,
                            }),
                        }),
                    !et &&
                        ex &&
                        (0, i.jsx)(tc, {
                            heading: eU.intl.string(eU.t.PHjkRE),
                            scrollTargetId: ru.bk.APPS,
                            children: (0, i.jsx)(tr, {
                                applicationRoleConnections: ep,
                                onClose: v,
                                className: uW.profileAppConnections,
                            }),
                        }),
                    (0, i.jsx)(rb, { userId: o.id }),
                ],
            }),
            (0, i.jsx)(uY, { displayProfile: p, profileEffectOverride: S, isHovering: G }),
            null != N && (0, i.jsx)(M.A, { frame: N, filterLayer: uH, fadeIn: k }),
        ],
    });
}
function uq(e) {
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
function uX(e) {
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
            initialScrollTarget: P,
            transitionState: _,
            customStatusPrompt: M,
            openedAt: F,
            onClose: W,
            sourceAnalyticsLocations: B = [],
            themeContainerClassName: V,
        } = e,
        z = u.id === c.id,
        q = l.useCallback(() => (0, uD.A)(z, W), [z, W]),
        {
            guildId: $,
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
        eu = l.useMemo(() => (null != $ ? { [$]: [u.id] } : {}), [$, u.id]);
    (0, v.Eq)(eu, "UserProfileModalV2");
    let ed = (0, en.X)("UserProfileModalV2"),
        ec = nl(),
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
        })({ userId: u.id, guildId: $, editingMode: eP }),
        {
            isExpanded: eM,
            isAnimating: eG,
            transition: eF,
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
                    config: { duration: 300, easing: uB },
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
    let eZ = (0, ek.fC)(),
        eJ = ex && (!ef || !er),
        eQ = ef && eo,
        e1 = el !== $ || eQ || null != eZ.interactionType,
        e2 = (function (e) {
            let { user: t, currentUser: n } = e,
                { mutualFriendsCount: i, mutualGuilds: l } = (0, ss.A)(t),
                r = l?.length,
                s = (0, uG.A)(t),
                a = (0, sy.A)(t.id),
                o = (0, uM.A)(t),
                { hasNewWishlistItems: u } = (0, rw.A)(t),
                d = [],
                c = t.id === n?.id,
                g = sE(t.id),
                f = a.length > 0;
            return (
                (g || f) && d.push({ text: eU.intl.string(eU.t.laViwx), section: ru.RP.WIDGETS }),
                d.push({ text: eU.intl.string(eU.t.chq59f), section: ru.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    d.push({ text: eU.intl.string(eU.t["7lZ31J"]), section: ru.RP.WISHLIST, showNewContentDot: u }),
                t.id !== n?.id &&
                    s &&
                    (d.push({ text: (0, uU.A)(i), section: ru.RP.MUTUAL_FRIENDS }),
                    d.push({ text: (0, uF.A)(r), section: ru.RP.MUTUAL_GUILDS })),
                d
            );
        })({ user: u, currentUser: c }),
        { analyticsLocations: e5 } = (0, b.Ay)([...B, j.A.USER_PROFILE_MODAL_V2]),
        e3 = (0, Q.pb)({
            layout: "MODAL_V2",
            userId: u.id,
            sourceSessionId: N,
            guildId: $,
            channelId: C,
            messageId: E,
            roleId: S,
        }),
        e8 = l.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e5, ...e3, action: ru.pt.SHOW_STYLES_PANEL }), eW());
        }, [e5, e3, eW]),
        e9 = l.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e5, ...e3, action: ru.pt.HIDE_STYLES_PANEL }), eB());
        }, [e5, e3, eB]),
        e7 = (0, ei.Ay)(u.id, $);
    (0, H.A)(e5, e7, ru.R7.MODAL_V2);
    let e6 = void 0 !== eD ? eD?.skuId : e7?.profileFrame?.skuId,
        e4 = (0, w.A)(e6),
        te = (0, L.A)(e6),
        { profileFrameStyle: tt, profileFrameClassName: tn } = (0, G.A)(e4);
    (0, D.A)({ skuId: e7?.profileFrame?.skuId, openedAt: F, context: e3, analyticsLocations: e5 });
    let ti = (0, a.bG)([y.default], () => J.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        tl = ec || (z && null != e7 && ti),
        tr = Z.Ay.useName(e7?.guildId, C, u),
        ts = (0, U.GV)(),
        ta = (0, a.bG)([K.A], () => (null != $ ? K.A.getGuild($) : null)),
        to = z
            ? null != ta
                ? eU.intl.formatToPlainString(eU.t.M7OhOF, { guildName: ta.name })
                : eU.intl.string(eU.t.egQPgM)
            : eU.intl.format(eU.t.KRe1Fk, { name: tr });
    return (0, i.jsx)(b.f5, {
        value: e5,
        children: (0, i.jsx)(Q.of, {
            value: e3,
            openedAt: F,
            fetchStartedAt: e7?.fetchStartedAt,
            fetchEndedAt: e7?.fetchEndedAt,
            isLoaded: e7?.isLoaded,
            children: (0, i.jsx)(ek.Hl, {
                value: eZ,
                children: (0, i.jsx)(eN.N, {
                    value: P,
                    children: (0, i.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(iz.zr, { [iz.QF]: e7?.private === !0 }),
                        transitionState: _,
                        "aria-labelledby": ts,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, i.jsx)(rO, {
                                children: (0, i.jsxs)("div", {
                                    className: s()(uW.layoutContainer, tn, {
                                        [uW.editingPanelEnabled]: ef,
                                        [uW.editingPanelExpanded]: ef && eM,
                                        [uW.isAnimating]: eG,
                                    }),
                                    style: tt,
                                    children: [
                                        (0, i.jsxs)(uq, {
                                            user: u,
                                            displayProfile: e7,
                                            pendingThemeColors: eT,
                                            forceShowPremium: tl,
                                            children: [
                                                (0, i.jsxs)("div", {
                                                    className: iz.Oo,
                                                    children: [
                                                        (0, i.jsx)(tF.A, { onClose: q }),
                                                        (0, i.jsx)(f.A, {
                                                            children: (0, i.jsx)(m.H, { id: ts, children: to }),
                                                        }),
                                                        eK &&
                                                            (0, i.jsx)(lX, {
                                                                buttonRef: eV,
                                                                onClick: e8,
                                                                className: uW.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eY &&
                                                    (0, i.jsx)("div", {
                                                        className: uW.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, i.jsx)(lq, {
                                                            innerRef: eH,
                                                            onClick: e8,
                                                            className: uW.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, i.jsxs)(m.F, {
                                            children: [
                                                ef &&
                                                    eF((e, t) =>
                                                        t
                                                            ? (0, i.jsx)(lZ, {
                                                                  className: s()(uW.editingPanel, {
                                                                      [uW.isExpanded]: eM,
                                                                  }),
                                                                  selectedGuildId: el,
                                                                  originGuildId: I,
                                                                  onSelectGuildId: es,
                                                                  onClose: e9,
                                                                  collapseButtonRef: ez,
                                                                  isLoading: er,
                                                                  isEditingDisabled: eo,
                                                              })
                                                            : null,
                                                    ),
                                                (0, i.jsxs)(e0.A, {
                                                    className: s()(V, iz.A7, uW.profileContentOuter),
                                                    innerClassName: uW.profileContentInner,
                                                    user: u,
                                                    displayProfile: e7,
                                                    themeType: eC.d.MODAL_V2,
                                                    pendingThemeColors: eT,
                                                    isPrivate: e7?.private === !0,
                                                    forceShowPremium: tl,
                                                    children: [
                                                        (0, i.jsx)(uz, { displayProfile: e7, pendingBanner: e_ }),
                                                        e7?.private === !0 && (0, i.jsx)(e$.A, {}),
                                                        !ex && (0, i.jsx)(o1, { className: uW.noticeContainer }),
                                                        eJ &&
                                                            (0, i.jsx)("div", {
                                                                className: uW.noticeContainer,
                                                                role: "alert",
                                                                children: (0, i.jsx)(rS, {
                                                                    icon: (0, i.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eU.intl.string(eU.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != ea
                                                                            ? eU.intl.string(eU.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: ea,
                                                                    actionDisabled: !ef && er,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, i.jsx)("div", {
                                                            className: uW.profileCardToastContainer,
                                                            children: (0, i.jsx)(eX.A, {}),
                                                        }),
                                                        (0, i.jsxs)(rT, {
                                                            showScrim: e1,
                                                            showLoadingSpinner: er,
                                                            className: uW.profileContentColumns,
                                                            children: [
                                                                (0, i.jsx)(uK, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    guildId: $,
                                                                    channelId: C,
                                                                    displayProfile: e7,
                                                                    nickname: tr,
                                                                    originGuildId: I,
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
                                                                (0, i.jsx)(o$, {
                                                                    user: u,
                                                                    currentUser: c,
                                                                    displayProfile: e7,
                                                                    guildId: $,
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
                            (0, i.jsx)(rm, { userId: u.id, guildId: $, className: uW.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function uZ(e) {
    return (0, i.jsx)(nn, { children: (0, i.jsx)(uX, { ...e }) });
}
