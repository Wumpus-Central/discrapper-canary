t.d(n, { A: () => od });
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
    y = t(287809),
    N = t(636537),
    E = t(228366),
    S = t(913122),
    P = t(39418),
    T = t(652215);
async function k() {
    E.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_START" });
    try {
        let e = await N.Bo.get({
            url: "/storefront/recommended-items",
            query: { application_ids: [T.FYj], limit: 100 },
            rejectWithError: !0,
        });
        E.h.dispatch({
            type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS",
            recommendation: {
                skuIds: e.body.recommended_items.map((e) => {
                    let { sku_id: n } = e;
                    return n;
                }),
            },
        });
    } catch (n) {
        let e = new S.LG(n);
        ((0, P.o)(e), E.h.dispatch({ type: "COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE" }));
    }
}
var R = t(938595),
    O = t(859226),
    L = t(480335),
    _ = t(577390),
    w = t(372320),
    M = t(31956),
    D = t(744808),
    G = t(875741),
    F = t(915089),
    U = t(713517),
    V = t(645507),
    B = t(922590),
    W = t(821269),
    H = t(397562),
    z = t(93246),
    Y = t(594832),
    q = t(71393),
    K = t(994500),
    X = t(351906),
    Z = t(562153),
    $ = t(474090),
    J = t(158045),
    Q = t(183555),
    ee = t(47675),
    en = t(321191),
    et = t(591179),
    el = t(999291),
    ei = t(702841),
    er = t(370480),
    es = t(773669),
    ea = t(101928),
    eo = t(837529),
    ed = t(346713),
    eu = t(573648),
    ec = t(429913),
    eg = t(321078),
    em = t(403362),
    ef = t(484509),
    ep = t(487409),
    eh = t(83931),
    ex = t(920601),
    eA = t(903209),
    ev = t(919395),
    eI = t(101058),
    ej = t(696451),
    eb = t(836602),
    eC = t(996988),
    ey = t(207634);
let eN = (0, d.FT)(ey.T[eC.d.MODAL_V2].avatarSize),
    eE = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
var eS = t(716804),
    eP = t(679492),
    eT = t(554146),
    ek = t(43105),
    eR = t(844222),
    eO = t(947984),
    eL = t(992526),
    e_ = t(643056),
    ew = t(327791),
    eM = t(262),
    eD = t(982240),
    eG = t(131607),
    eF = t(49999),
    eU = t(375708);
function eV(e) {
    let n,
        t,
        r,
        s,
        { targetElementRef: o } = e,
        d = (0, eL.J)({ location: "BadgeCustomizationProfileCoachmark" }),
        u = (0, e_.d)({ location: "BadgeCustomizationProfileCoachmark" }),
        c = (0, ew.A)(),
        g =
            ((n = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.id)),
            (t = (0, a.bG)(
                [eD.Ay],
                () => (null != n && eD.Ay.hasCatalogFor(n) ? eD.Ay.getBadges(n).some((e) => e.owned) : null),
                [n],
            )),
            (r = (0, el.Ay)(n)),
            (s = (0, eM.A)(r)),
            t ?? s.length > 0),
        { reducedMotion: m } = i.useContext(eR.C),
        [f, p] = (0, eG.kn)(g && d && u ? [eT.M.BADGE_CUSTOMIZATION_WEB_COACHMARK] : []);
    return f !== eT.M.BADGE_CUSTOMIZATION_WEB_COACHMARK
        ? null
        : (0, l.jsx)(ek.A, {
              targetElementRef: o,
              position: "right",
              caretConfig: { align: "start" },
              gradientColor: "blue",
              graphic: { type: "rive", rive: eO.U, props: { dataBinding: { on: !0, reducedMotion: m.enabled } } },
              title: eU.intl.string(eU.t["9JoKQb"]),
              body: eU.intl.string(c ? eU.t.p82vky : eU.t.IDh31t),
              onRequestClose: () => p(eF.i.USER_DISMISS),
              actions: [
                  {
                      text: eU.intl.string(eU.t["4P5I8V"]),
                      onClick: function () {
                          (p(eF.i.TAKE_ACTION), C.A.setState({ isOpen: !0 }));
                      },
                  },
              ],
          });
}
var eB = t(718019),
    eW = t(365607),
    eH = t(915614),
    ez = t(744753),
    eY = t(834730);
function eq(e) {
    let { friendsSinceDate: n } = e;
    return (0, l.jsx)(eY.E, { variant: "text-sm/normal", children: n });
}
var eK = t(361311),
    eX = t(931481),
    eZ = t(439053),
    e$ = t(743987),
    eJ = t(312381),
    eQ = t(501193),
    e0 = t(383448),
    e1 = t(946356),
    e2 = t(394816),
    e5 = t(503026),
    e9 = t(305385),
    e3 = t(109112),
    e8 = t(939249),
    e7 = t(730134),
    e6 = t(169869),
    e4 = t(837057),
    ne = t(310419),
    nn = t(889227),
    nt = t(967198),
    nl = t(488995),
    ni = t(576849);
function nr(e) {
    let { applicationRoleConnection: n, locale: t, onApplicationClicked: i, selectedGuildId: r } = e,
        s = (0, e6.VW)(n, t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: ni.k_,
                children:
                    null != n.application.bot
                        ? (0, l.jsx)(e7.A, { user: new nn.A(n.application.bot), size: d._3.SIZE_16 })
                        : (0, l.jsx)(e3._, { color: "currentColor", size: "sm" }),
            }),
            (0, l.jsxs)("div", {
                className: ni.Hd,
                children: [
                    (0, l.jsxs)(e8.D, {
                        className: ni.OB,
                        onClick: function () {
                            (i?.(),
                                (0, e4.transitionToGlobalDiscovery)({
                                    tab: nl.GlobalDiscoveryTab.APPS,
                                    applicationId: n.application.id,
                                    newSessionState: {
                                        entrypoint: { name: ne.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                }));
                        },
                        children: [
                            null != n.platform_name
                                ? (0, l.jsx)(eY.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_name,
                                  })
                                : null,
                            null != n.platform_username
                                ? (0, l.jsx)(eY.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: n.platform_username,
                                  })
                                : null,
                            (0, l.jsx)(eY.E, {
                                variant: "text-xxs/normal",
                                color: "text-default",
                                className: ni.nk,
                                children: eU.intl.format(eU.t.zIT9YA, { applicationHook: () => n.application.name }),
                            }),
                        ],
                    }),
                    null != s && s.length > 0 ? (0, l.jsx)("div", { className: ni.yu, children: s }) : null,
                ],
            }),
        ],
    });
}
function ns(e) {
    let { applicationRoleConnections: n, className: t, onClose: i } = e,
        { trackUserProfileAction: r } = (0, Q.NJ)(),
        o = (0, a.bG)([es.default], () => es.default.locale),
        d = (0, a.bG)([nt.A], () => nt.A.getGuildId());
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: s()(ni.kL, t),
              children: n.map((e, n) =>
                  (0, l.jsx)(
                      "li",
                      {
                          className: ni.FI,
                          children: (0, l.jsx)(nr, {
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
var na = t(403581),
    no = t(240248),
    nd = t(308244),
    nu = t(900179),
    nc = t(677295);
function ng(e) {
    let { className: n, ...t } = e;
    return (0, l.jsx)(nu.A, {
        className: s()(nc.u, n),
        headingVariant: "text-xs/medium",
        headingColor: "text-subtle",
        ...t,
    });
}
var nm = t(81400),
    nf = t(84540),
    np = t(290386),
    nh = t(621466);
t(321073);
var nx = t(775602),
    nA = t(404760);
function nv(e) {
    let { id: n, message: t, type: i } = e,
        r = "error" === i,
        s = r ? g.E : p.WarningIcon;
    return (0, l.jsxs)(eY.E, {
        id: n,
        role: r ? "alert" : void 0,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: nA.VP,
        children: [(0, l.jsx)(s, { size: "xs", color: "currentColor", className: r ? nA.ik : nA.QW }), t],
    });
}
function nI(e) {
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
    function P() {
        let { activeElement: e } = x.current?.ownerDocument ?? document;
        ((0, nh.vq)(e, HTMLElement) && e.blur(), u());
    }
    let T = (0, l.jsxs)("div", {
        ref: x,
        className: s()(nA.LL, { [nA.JD]: j, [nA.xe]: b }),
        onMouseDown: function (e) {
            e.preventDefault();
        },
        onClick: P,
        children: [
            I
                ? (0, l.jsx)(eY.E, {
                      id: A,
                      variant: "text-sm/normal",
                      color: "text-muted",
                      className: nA.qf,
                      children: r,
                  })
                : t,
            (0, l.jsx)(e8.D, {
                innerRef: o,
                "aria-label": d,
                "aria-describedby": S,
                "aria-expanded": !1,
                onClick: (e) => {
                    (e.stopPropagation(), P());
                },
                focusProps: { ringTarget: x },
            }),
        ],
    });
    return (0, l.jsx)("div", {
        ref: f,
        className: s()(nA.kL, m),
        onBlur: p,
        onKeyDown: h,
        children: (0, l.jsx)(
            "div",
            {
                children: n
                    ? a
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", { className: nA.VH, children: T }),
                              N && (0, l.jsx)(nv, { id: v, message: y, type: C }),
                          ],
                      }),
            },
            n ? "editing" : "preview",
        ),
    });
}
var nj = t(786826);
function nb(e) {
    return e?.querySelector('[aria-expanded="true"][aria-controls]') ?? null;
}
function nC(e) {
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
            (null != v && n.length > v ? eU.intl.formatToPlainString(eU.t.ICT5S6, { maxLength: v }) : void 0) ?? j);
    return (0, l.jsx)(nI, {
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
        input: (0, l.jsx)(nj.f, {
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
let ny = [
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
var nN = t(307731);
function nE(e) {
    let n,
        t,
        r,
        s,
        o,
        { displayProfile: d, className: u } = e,
        c = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        g = d?.guildId != null,
        m = d?.guildId ?? null,
        f = J.Ay.canUsePremiumProfileCustomization(c),
        p = (0, np.U)({ location: "user_profile_modal_edit" }),
        {
            value: h,
            previewValue: x,
            onCommit: A,
        } = ((n = d?.guildId ?? null),
        (t = d?.guildId != null),
        (r = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n).pendingBio)),
        (s = t ? d?._guildMemberProfile?.bio : d?.bio),
        (o = d?.getPreviewBio(r) ?? void 0),
        {
            value: r ?? s ?? "",
            previewValue: o,
            onCommit: i.useCallback(
                (e) => {
                    (0, nf.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
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
                        c = (0, a.bG)([nx.Ay], () => nx.Ay.useReducedMotion),
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
                            let t = nb(n),
                                l = t?.getAttribute("aria-controls");
                            return null != l && null != e.closest(`#${l}`);
                        })(e, t.current),
                    [t],
                );
            i.useEffect(() => {
                if (!n) return;
                let e = t.current?.ownerDocument ?? document;
                function i(e) {
                    (0, nh.vq)(e.target) && !s(e.target) && l();
                }
                return (e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i));
            }, [n, t, s, l]);
            let o = i.useCallback(
                (e) => {
                    if (!n) return;
                    let i = e.relatedTarget;
                    !(0, nh.vq)(i) || s(i) || (null == nb(t.current) && l());
                },
                [n, s, l, t],
            );
            return { isEditing: n, wrapperRef: t, handleCommit: l, ...r, onBlur: o };
        })({ value: h, onCommit: A }),
        I = !(0, no.uJ)(x),
        j = (0, a.bG)([eb.A], () => eb.A.getErrors(m)),
        b = (0, nm.EC)(m),
        C = j.bio?.[0],
        N = b?.bio?.[0],
        E = i.useMemo(() => {
            let e;
            return ((e = Math.floor(Math.random() * ny.length)), ny[e]);
        }, []),
        S = g ? eU.intl.string(eU.t.yPJ9xr) : E.label();
    return !g || f
        ? (0, l.jsx)(nC, {
              ...v,
              className: u,
              preview: I ? (0, l.jsx)(nd.A, { userBio: x, setLineClamp: !1 }) : null,
              placeholder: S,
              editButtonAriaLabel: eU.intl.string(eU.t.lO3n7a),
              label: eU.intl.string(eU.t["YWo+Zd"]),
              emojiPickerIntention: nN.EmojiIntention.PROFILE,
              maxLength: p,
              error: C,
              warning: N,
          })
        : I
          ? (0, l.jsx)(nd.A, { userBio: x, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
var nS = t(430626);
function nP(e) {
    let { currentUser: n, displayProfile: t, canEditInPlace: i } = e,
        r = t?.bio,
        s = !(0, no.uJ)(r),
        a = t?.guildId != null,
        o = a && J.Ay.canUsePremiumProfileCustomization(n),
        d = o ? eU.intl.string(eU.t.jVai8N) : eU.intl.string(eU.t.ZzAR2Y),
        u = (0, J.TW)(n) ? eU.intl.string(eU.t["5AFxuK"]) : eU.intl.string(eU.t.N6ixy8),
        c = i && o ? { icon: na.t, tooltip: u } : void 0;
    return (i || s) && (!i || !a || s || o)
        ? (0, l.jsx)(ng, {
              heading: d,
              hideHeading: !i,
              headingIcon: c,
              children: i
                  ? (0, l.jsx)(nE, { displayProfile: t, className: nS.u })
                  : (0, l.jsx)(nd.A, { userBio: r, setLineClamp: !1 }),
          })
        : null;
}
var nT = t(700058),
    nk = t(722868),
    nR = t(822775),
    nO = t(982985),
    nL = t(211031),
    n_ = t(34188),
    nw = t(815996),
    nM = t(993401);
function nD(e) {
    let { analyticsLocations: n, newestAnalyticsLocation: t } = (0, b.Ay)(),
        r = i.useCallback(() => {
            (0, nw.Cz)({ analyticsLocations: n, analyticsSource: t });
        }, [n, t]);
    return (0, l.jsx)(nM.q3, {
        action: "VISIT_SHOP",
        icon: n_.U,
        tooltipText: eU.intl.string(eU.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var nG = t(573355),
    nF = t(102951);
function nU(e) {
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
        u = (0, et.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, b.Ay)(),
        g = (0, nk.A)({ user: n, guildId: r, channelId: s, displayProfile: a, onClose: d }),
        {
            gameFriends: m,
            hasOutgoingPendingGameFriends: f,
            hasIncomingPendingGameFriends: p,
        } = (0, nF.J)({ userId: n.id }),
        h = m.length > 0 || f || p;
    return o === T.eA$.BLOCKED
        ? null
        : n.id === t.id
          ? u
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nO.e, { userId: n.id, variant: "primary", disabled: !0 }),
                        (0, l.jsx)(nD, {}),
                        (0, l.jsx)(nL.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nR.A, { user: n, guildId: i, onClose: d }),
                        (0, l.jsx)(nD, {}),
                        (0, l.jsx)(nL.Zt, { user: n, guildId: i, viewProfileItem: g }),
                    ],
                })
          : n.bot
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(nO.e, { userId: n.id, onClose: nT.A.popAll, autoFocus: !0 }),
                      (0, l.jsx)(nL.Zt, { user: n, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === T.eA$.PENDING_INCOMING
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(nO.e, { userId: n.id, onClose: nT.A.popAll, autoFocus: !0 }),
                        (0, l.jsx)(nL.Zt, { user: n, guildId: i }),
                    ],
                })
              : o === T.eA$.FRIEND || o === T.eA$.PENDING_OUTGOING
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(nO.e, { userId: n.id, onClose: nT.A.popAll, autoFocus: !0 }),
                          (0, l.jsx)(nG.Ef, { user: n, relationshipType: o, analyticsLocation: c }),
                          (0, l.jsx)(nL.Zt, { user: n, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === T.eA$.NONE && h
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nO.e, { userId: n.id, onClose: nT.A.popAll, autoFocus: !0 }),
                            (0, l.jsx)(nG.ES, {
                                user: n,
                                analyticsLocation: c,
                                gameFriends: m,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: f,
                            }),
                            (0, l.jsx)(nL.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(nG.cO, {
                                variant: "primary",
                                userId: n.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(nO.l, { userId: n.id, onClose: nT.A.popAll, variant: "secondary" }),
                            (0, l.jsx)(nL.Zt, { user: n, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var nV = t(463156),
    nB = t(866665),
    nW = t(28863),
    nH = t(509434),
    nz = t(307301),
    nY = t(95561),
    nq = t(874490),
    nK = t(968309),
    nX = t(174459),
    nZ = t(486020),
    n$ = t(123917),
    nJ = t(783419);
let nQ = "User Profile Modal V2";
function n0(e) {
    let n = eu.A.get(e);
    ((0, nK.A)({ platformType: n.type, location: nQ }),
        nX.default.track(T.HAw.ACCOUNT_LINK_STEP, {
            previous_step: nQ,
            current_step: "desktop oauth",
            platform_type: n.type,
        }));
}
function n1() {
    E.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: n0, stackingBehavior: "stack" });
}
function n2(e) {
    let { account: n, locale: t, userId: i } = e,
        r = n.metadata ?? {},
        s = (0, er.An)(r[nJ.pK.CREATED_AT], t),
        a = eu.A.get((0, nq.ML)(n.type));
    return (0, l.jsx)(n9, {
        renderAccountName: function () {
            let e = a?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(nB.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(eY.E, { variant: "text-sm/normal", className: ni.GW, children: n.name }),
                  })
                : (0, l.jsx)(nW.Anchor, {
                      href: e,
                      className: ni.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          a?.name != null
                              ? `${a.name}, ${n.name}, ${eU.intl.string(eU.t.q5jLJB)}`
                              : `${n.name}, ${eU.intl.string(eU.t.q5jLJB)}`,
                      onClick: (t) => {
                          ((0, nY.zV)(T.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, n$.h)({ href: e, trusted: a?.type !== T.fg2.DOMAIN }, t));
                      },
                      children: (0, l.jsxs)("div", {
                          className: ni.vi,
                          children: [
                              (0, l.jsx)(nB.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(eY.E, {
                                      variant: "text-sm/normal",
                                      className: ni.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(nH.I, { size: "xs", color: "currentColor", className: ni.wP }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return n.type === T.fg2.REDDIT
                ? (0, e6.xE)(r)
                : n.type === T.fg2.STEAM
                  ? (0, e6.dy)(r)
                  : n.type === T.fg2.BLUESKY || n.type === T.fg2.MASTODON || n.type === T.fg2.TWITTER
                    ? (0, e6.ED)(r)
                    : n.type === T.fg2.PAYPAL
                      ? (0, e6.gZ)(r)
                      : n.type === T.fg2.EBAY
                        ? (0, e6.ub)(r)
                        : n.type === T.fg2.TIKTOK
                          ? (0, e6.HU)(r)
                          : null;
        },
        platformIcon: a?.icon.lightPNG,
        platformName: a?.name,
        createdAtDate: s,
    });
}
function n5(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let r = nZ.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(n9, {
        renderAccountName: function () {
            return (0, l.jsx)(nB.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(eY.E, {
                    variant: "text-sm/normal",
                    className: ni.GW,
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
function n9(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: r,
        createdAtDate: a,
        applyIconBorderRadius: o = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: ni.FI,
        children: [
            (0, l.jsx)(nB.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: ni.k_,
                    children: (0, l.jsx)("img", {
                        alt: eU.intl.formatToPlainString(eU.t.rtm15P, { name: i }),
                        className: s()(ni.tV, o ? ni.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: ni.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != a &&
                                (0, l.jsx)(eY.E, {
                                    variant: "text-xs/normal",
                                    children: eU.intl.format(eU.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: ni.yu, children: t() }),
                ],
            }),
        ],
    });
}
function n3(e) {
    let { connections: n, applicationIdentities: t, userId: i, allowEditing: r, className: o } = e,
        d = (0, a.bG)([es.default], () => es.default.locale);
    if (!r && 0 === n.length && 0 === t.length) return null;
    let u = n.length > 0 || t.length > 0;
    return (0, l.jsxs)("div", {
        className: s()(ni.kL, o),
        children: [
            u &&
                (0, l.jsxs)("ul", {
                    className: ni.V,
                    children: [
                        n.map((e) => (0, l.jsx)(n2, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        t?.map((e) => (0, l.jsx)(n5, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, l.jsxs)(e8.D, {
                    className: ni.qG,
                    onClick: n1,
                    children: [
                        (0, l.jsx)(nz.j, { size: "sm", color: "currentColor" }),
                        (0, l.jsx)(eY.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eU.intl.string(eU.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var n8 = t(193885),
    n7 = t(408278),
    n6 = t(993165),
    n4 = t(194261),
    te = t(789645),
    tn = t(297264),
    tt = t(812993),
    tl = t(821609),
    ti = t(39623),
    tr = t(890377),
    ts = t(517461),
    ta = t(248778),
    to = t(465794),
    td = t(252732),
    tu = t(487233),
    tc = t(120386),
    tg = t(317097),
    tm = t(602853),
    tf = t(922016),
    tp = t(508274),
    th = t(654107),
    tx = t(930349);
function tA(e) {
    let { user: n, disabled: t = !1 } = e,
        r = i.useRef(null),
        s = (0, tm.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, th.rh)(n.getAvatarURL(null, 80), s, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, a.cf)([eb.A, en.A], () => ({
            pendingAccentColor: eb.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: en.A.getUserProfile(n.id)?.accentColor,
        })),
        c = d ?? u ?? (0, tg.LX)(o[0] ?? s),
        g = i.useCallback((e) => (0, nf.p)({ accentColor: e }), []);
    return (0, l.jsx)(tf.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, l.jsx)(tp.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, l.jsx)(tx.A, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: t,
                accessibleLabel: eU.intl.string(eU.t["/X3fkf"]),
                accessibleValue: (0, tg.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, l.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, tg.Hl)(c) } }),
            }),
    });
}
var tv = t(450373),
    tI = t(317139);
function tj(e, n) {
    let t = null === e,
        l = void 0 === e;
    return t || (l && null == n) ? eU.intl.string(eU.t["3Xph0/"]) : l ? eU.intl.string(eU.t.keN7ib) : e.description;
}
function tb(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: tI.o, style: { backgroundColor: n } });
}
function tC(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: tI._ });
}
function ty(e) {
    let { displayProfile: n, bannerChange: t, shouldAnimate: i } = e,
        r = (0, tm.r)(h.A.unsafe_rawColors.PRIMARY_800).hex(),
        s = n?.primaryColor ?? (0, tg.LX)(r),
        { hex: a } = (0, tv.A)(s),
        o = n?.getPreviewBanner(t, i, 296) ?? void 0;
    return null != o ? (0, l.jsx)(tC, { src: o }) : (0, l.jsx)(tb, { backgroundColor: a });
}
function tN(e) {
    let { displayProfile: n, bannerChange: t, ...i } = e;
    return (0, l.jsx)(tx.A, {
        ...i,
        accessibleLabel: eU.intl.string(eU.t.yiRnNO),
        showOverlayOnHover: !0,
        renderPreview: (e) => (0, l.jsx)(ty, { displayProfile: n, bannerChange: t, shouldAnimate: e }),
    });
}
var tE = t(569059);
function tS(e) {
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
            let t = (0, el.Ay)(e, n),
                {
                    pendingBanner: l,
                    mainProfileBanner: i,
                    currentProfileBanner: r,
                } = (0, ei.cf)(
                    [eb.A, y.default, en.A],
                    () => ({
                        pendingBanner: eb.A.getPendingChanges(n ?? void 0).pendingBanner,
                        mainProfileBanner: y.default.getCurrentUser()?.banner,
                        currentProfileBanner:
                            null != n ? en.A.getGuildMemberProfile(e, n)?.banner : en.A.getUserProfile(e)?.banner,
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
                accessibleValue: tj(l, r),
                currentProfileBanner: r,
                hasMainProfileFallback: s && null != i,
            };
        })(n, t),
        f = (0, ev.Ac)(d, g)
            ? {
                  onClick: () => (0, td.rM)(null, g, (e) => (0, nf.p)({ guildId: t ?? void 0, banner: e })),
                  type: m ? "reset" : "remove",
                  accessibleLabel: eU.intl.string(m ? eU.t.jHlJNS : eU.t.tT9n7D),
              }
            : void 0,
        p = (0, tE.P)({ guildId: t, returnRef: a });
    return (0, l.jsx)(tN, {
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
var tP = t(259065),
    tT = t(913563),
    tk = t(898985),
    tR = t(922301),
    tO = t(660184),
    tL = t(701974),
    t_ = t(523312);
let tw = "heading-xl/semibold";
function tM(e) {
    if (null == e) return eU.intl.string(eU.t["3Xph0/"]);
    let n = eU.intl.string((0, tT.A)(e.fontId)),
        t = eU.intl.string(tk.J[e.effectId] ?? tL.default.OpWJ3f),
        l = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return eU.intl.formatToPlainString(eU.t.A2XnI4, { fontName: n, effectName: t, colors: l });
}
function tD(e) {
    let { displayName: n, displayNameStyles: t, shouldAnimate: i = !1 } = e;
    return (0, l.jsx)("div", {
        "aria-hidden": !0,
        className: s()(t_.MC, { [t_.Xn]: null != t }),
        children:
            null != t
                ? (0, l.jsx)(eY.E, {
                      variant: tw,
                      children: (0, l.jsx)(tO.A, {
                          userName: n,
                          displayNameStyles: t,
                          effectDisplayType: i ? tR.G.ANIMATED : tR.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, l.jsx)(eY.E, { variant: tw, className: t_.kr, children: n }),
    });
}
function tG(e) {
    let { displayName: n, displayNameStyles: t, shouldAlwaysAnimate: i = !1, ...r } = e;
    return (0, l.jsx)(tx.A, {
        ...r,
        accessibleLabel: eU.intl.string(eU.t.vKBV4A),
        renderPreview: (e) => (0, l.jsx)(tD, { displayNameStyles: t, displayName: n, shouldAnimate: i || e }),
    });
}
function tF(e) {
    let { user: n, guildId: t, disabled: r, errorMessageId: s, onOpen: o } = e,
        { analyticsLocations: d } = (0, b.Ay)(),
        u = null != t,
        c = (0, a.bG)([ej.Ay], () => (null != t ? (ej.Ay.getMember(t, n.id)?.nick ?? null) : null)),
        g = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.globalName ?? null),
        m = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName),
        f = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: h,
            pendingDisplayNameStyles: x,
        } = (0, ev.B0)(n, t ?? void 0),
        A = u ? h : p,
        v = void 0 !== x,
        I = null === x,
        j = u && null != p,
        C = (0, ev.lw)({ pendingValue: x, userValue: p, guildValue: h, guildId: t ?? void 0 }),
        N = (0, ev.lw)({ pendingValue: u ? f : m, guildValue: c, userValue: g, guildId: t ?? void 0 }) ?? n.username,
        E = v ? null != x : null != A,
        S =
            null != C && E
                ? {
                      onClick: () => (0, nf.p)({ guildId: t ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(j ? eU.t.en3ogK : eU.t["Wqmi/h"]),
                  }
                : void 0,
        P = i.useCallback(() => {
            (o?.(), (0, tP.L)({ analyticsLocations: d, guildId: t ?? void 0, stackingBehavior: "stack" }));
        }, [d, t, o]);
    return (0, l.jsx)(tG, {
        affordance: (!I && (v || null != A)) || j ? S : "add",
        variant: "bar",
        onClick: P,
        accessibleValue: tM(C),
        "aria-haspopup": "dialog",
        errorMessageId: s,
        displayName: N,
        displayNameStyles: C,
        disabled: r,
    });
}
var tU = t(450232),
    tV = t(89851);
function tB(e) {
    let { heading: n, children: t, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, l.jsxs)("div", {
        className: tV.Os,
        children: [
            (0, l.jsxs)("div", {
                className: s()(tV.Pf, { [tV.r9]: i }),
                children: [
                    (0, l.jsx)(tn.D, {
                        className: tV.DV,
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n,
                    }),
                    r && (0, l.jsx)(tU.A, { className: tV.IX, size: "xs", color: "inherit", disabled: i }),
                    null != a && (0, l.jsx)("span", { className: tV.ot, children: a }),
                ],
            }),
            t,
        ],
    });
}
function tW(e) {
    let { id: n, message: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)("div", {
              className: tV.gJ,
              role: "alert",
              children: [
                  (0, l.jsx)(g.E, { size: "xs", color: h.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, l.jsx)(eY.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: n, children: t }),
              ],
          });
}
var tH = t(374654),
    tz = t(366010),
    tY = t(736653),
    tq = t(674658),
    tK = t(617061),
    tX = t(203632),
    tZ = t(536572);
let t$ = new Set(),
    tJ = 0;
var tQ = t(993408),
    t0 = t(841702),
    t1 = t(515718),
    t2 = t(195292);
function t5(e) {
    "" !== e.thumbnailPreviewSrc && (0, t1.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var t9 = t(599752),
    t3 = t(249360);
let t8 =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    t7 =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function t6(e) {
    let { effect: n, shouldAnimate: t, isEmpty: r, hasMainProfileFallback: a, disabled: o } = e,
        d = (0, tY.Ay)(),
        u = (0, tz.M)(d) ? t8 : t7,
        c = (function (e) {
            let { enabled: n, isInteracting: t } = e,
                { categories: l, purchases: r } = (0, t0.Ay)({ stalePurchasesOK: !0 }),
                s = i.useMemo(() => (0, tQ.wo)(r, l), [r, l]),
                a = (0, t2.A)({ enabled: n, isInteracting: t, items: s, preload: t5 });
            return null != a ? { skuId: a.skuId } : null;
        })({ enabled: r && !a && !o, isInteracting: t }),
        g = null != c,
        m = g ? c : n;
    return (
        i.useEffect(() => {
            t && ((tJ += 1), t$.forEach((e) => e()));
        }, [t]),
        (0, l.jsxs)("div", {
            className: t9.ti,
            "aria-hidden": !0,
            children: [
                (0, l.jsx)("img", { src: u, alt: "", className: t9.QQ }),
                m?.skuId != null &&
                    (0, l.jsx)("div", {
                        className: s()(t9.yY, { [t3.O]: g }),
                        children: (0, l.jsx)(L.A, {
                            skuId: m.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: tX.HL.FromStart,
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
function t4(e) {
    let { user: n, guildId: t, disabled: r, variant: s = "full-height-bar" } = e,
        o = i.useRef(null),
        { analyticsLocations: d } = (0, b.Ay)(),
        u = null != t,
        c = (0, a.bG)([q.A], () => (null != t ? q.A.getGuild(t) : null)),
        g = (0, ev.N2)({ user: n }),
        m = (0, ev.N2)({ user: n, guildId: t ?? void 0 }),
        { pendingProfileEffect: f } = (0, ev.nZ)(t ?? void 0),
        p = void 0 !== f,
        h = null === f || (!p && null == m),
        x = u && null != g,
        A = (0, ev.lw)({ pendingValue: f, userValue: g, guildValue: m, guildId: t ?? void 0 }),
        { product: v } = (0, tq.q)(A?.skuId),
        I = p ? null != f : null != m,
        j =
            null != A && I
                ? {
                      onClick: () => (0, nf.p)({ guildId: t ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(x ? eU.t["SQy/Po"] : eU.t.uMuafO),
                  }
                : void 0,
        C = i.useCallback(() => {
            (0, tK.W)({ analyticsLocations: d, guild: c ?? void 0, stackingBehavior: "stack", returnRef: o });
        }, [d, c]);
    return (0, l.jsx)(tx.A, {
        buttonRef: o,
        affordance: h && !x ? "add" : j,
        variant: s,
        onClick: C,
        accessibleLabel: eU.intl.string(eU.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: n, productName: t, hasPendingSelection: l } = e;
            return null == n
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != t && "" !== t
                  ? t
                  : eU.intl.string(l ? eU.t["1M4m8w"] : eU.t["+Du7ua"]);
        })({ profileEffectPreview: A, productName: (0, tZ.VG)(v), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, l.jsx)(t6, { effect: A, shouldAnimate: e, isEmpty: h, hasMainProfileFallback: x, disabled: r }),
    });
}
var le = t(515727),
    ln = t(746002);
function lt(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((n) => {
            let t = (0, ln.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: ln.CollectiblesItemAssetFormat.STATIC,
                assetId: n.id,
            });
            null != t && (0, t1.NN)(t).catch(() => {});
        });
}
var ll = t(715196);
function li(e) {
    let { responsive: n } = e;
    return !0 !== n;
}
function lr(e) {
    let { profileFramePreview: n, isEmpty: t, hasMainProfileFallback: r, isInteracting: a, disabled: o } = e,
        d = (0, tY.Ay)(),
        u = (0, tz.M)(d) ? t8 : t7,
        c = (0, w.A)(n?.skuId),
        g = (function (e) {
            let { enabled: n, isInteracting: t } = e,
                { categories: l, purchases: r } = (0, t0.Ay)({ stalePurchasesOK: !0 }),
                s = i.useMemo(() => (0, tQ.MG)(r, l), [r, l]);
            return (0, t2.A)({ enabled: n, isInteracting: t, items: s, preload: lt });
        })({ enabled: t && !r && !o, isInteracting: a }),
        m = null != g,
        f = m ? g : c,
        { profileFrameStyle: p, profileFrameClassName: h } =
            null != f ? (0, G.i)(f) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != f &&
                (0, l.jsx)("div", {
                    className: s()(ll.hm, h, { [t3.O]: m }),
                    style: p,
                    children: (0, l.jsx)(D.A, { frame: f, filterLayer: li, isPreview: !0 }),
                }),
            (0, l.jsx)("div", {
                className: s()(ll.ti, { [ll.yT]: null == f }),
                children: (0, l.jsx)("img", { src: u, alt: "", className: ll.QQ, draggable: !1 }),
            }),
        ],
    });
}
function ls(e) {
    let { user: n, guildId: t, disabled: r } = e,
        s = i.useRef(null),
        { analyticsLocations: o } = (0, b.Ay)(),
        d = null != t,
        u = (0, a.bG)([q.A], () => (null != t ? q.A.getGuild(t) : null)),
        c = (0, ev.Xf)({ user: n }),
        g = (0, ev.Xf)({ user: n, guildId: t ?? void 0 }),
        { pendingProfileFrame: m } = (0, ev.Tu)(t ?? void 0),
        f = void 0 !== m,
        p = null === m || (!f && null == g),
        h = d && null != c,
        x = (0, ev.lw)({ pendingValue: m, userValue: c, guildValue: g, guildId: t ?? void 0 }),
        { product: A } = (0, tq.q)(x?.skuId),
        v = f ? null != m : null != g,
        I =
            null != x && v
                ? {
                      onClick: () => (0, nf.p)({ guildId: t ?? void 0, profileFrame: null }),
                      type: h ? "reset" : "remove",
                      accessibleLabel: eU.intl.string(h ? eU.t.j6hZyM : eU.t.nQBruk),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, le.w)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack", returnRef: s });
        }, [o, u]);
    return (0, l.jsx)(tx.A, {
        buttonRef: s,
        affordance: p && !h ? "add" : I,
        variant: "square",
        onClick: j,
        accessibleLabel: eU.intl.string(eU.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: n, productName: t, hasPendingSelection: l } = e;
            return null == n
                ? eU.intl.string(eU.t["3Xph0/"])
                : null != t && "" !== t
                  ? t
                  : eU.intl.string(l ? eU.t.yFeGB5 : eU.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, tZ.VG)(A), hasPendingSelection: null != m }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, l.jsx)(lr, {
                profileFramePreview: x,
                isEmpty: p,
                hasMainProfileFallback: h,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var la = t(684732),
    lo = t(498596),
    ld = t(871524);
function lu(e) {
    let { primaryColor: n, secondaryColor: t, children: i } = e,
        r = `linear-gradient(to bottom, ${(0, tg.Hl)(n)}, ${(0, tg.Hl)(t)})`;
    return (0, l.jsx)("div", { className: ld.D7, style: { background: r }, children: i });
}
function lc(e) {
    let { color: n } = e,
        t = (0, tg.Hl)(n),
        i = (0, tg.bJ)(n, 0xffffff) < lo.Tr.NonText;
    return (0, l.jsx)("div", {
        className: ld.OS,
        children: (0, l.jsx)("div", { className: s()(ld.Hy, { [ld.rY]: i }), style: { backgroundColor: t } }),
    });
}
function lg(e) {
    let { color: n, disabled: t, onClick: r, buttonRef: s, ...a } = e,
        o = i.useRef(null);
    return (0, l.jsx)(e8.D, {
        ...a,
        innerRef: s ?? o,
        className: ld.Dh,
        onClick: t ? void 0 : r,
        "aria-disabled": t,
        tabIndex: t ? -1 : 0,
        children: (0, l.jsx)(lc, { color: n }),
    });
}
function lm(e) {
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
    return (0, l.jsx)(tf.Y, {
        targetElementRef: u,
        shouldShow: s,
        onRequestOpen: a,
        onRequestClose: o,
        renderPopout: (e) => (0, l.jsx)(tp.VN, { ...e, value: n, onChange: d, suggestedColors: i, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: i, ...s } = e;
            return (0, l.jsx)(lg, { color: n, onClick: i, disabled: r, buttonRef: u, "aria-label": t, ...s });
        },
    });
}
function lf(e) {
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
        h = (0, tg.Hl)(n),
        x = (0, tg.Hl)(t),
        A = eU.intl.formatToPlainString(eU.t.FquTfm, { colorLabel: h }),
        v = eU.intl.formatToPlainString(eU.t.xOnm4z, { colorLabel: x });
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
    return (0, l.jsx)(tx.Y, {
        variant: u,
        disabled: o,
        deleteButton: I,
        children: (0, l.jsxs)(lu, {
            primaryColor: n,
            secondaryColor: t,
            children: [
                (0, l.jsx)(lm, {
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
                (0, l.jsx)(lm, {
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
function lp(e) {
    let { user: n, guildId: t, disabled: r = !1 } = e,
        s = (0, el.Ay)(n.id, t),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, a.cf)([eb.A, en.A], () => {
            let e = eb.A.getPendingChanges(t ?? void 0),
                l = en.A.getUserProfile(n.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != t ? (en.A.getGuildMemberProfile(n.id, t)?.themeColors ?? null) : l,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, eI.V7)({ userId: n.id, image: u }),
        { primaryColor: m, secondaryColor: f } = (0, ea.A)({
            user: n,
            displayProfile: s,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, tm.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        x = null != g ? g : n.getAvatarURL(t ?? void 0, 80),
        A = (0, th.rh)(x, p, !1),
        v = i.useCallback(
            (e) => {
                (0, nf.p)({ guildId: t ?? void 0, themeColors: e });
            },
            [t],
        ),
        I =
            null != t && (0, la.l)(d, o)
                ? {
                      onClick: () => (0, nf.p)({ guildId: t, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eU.intl.string(eU.t["L+GmoR"]),
                  }
                : void 0;
    return null == m || null == f
        ? null
        : (0, l.jsx)(lf, {
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
var lh = t(629985);
function lx(e) {
    let { children: n, hasGradientBackground: t = !1 } = e;
    return (0, l.jsx)(f.F, { children: (0, l.jsx)("div", { className: s()(lh.k, { [lh.V]: t }), children: n }) });
}
var lA = t(689175),
    lv = t(424290);
function lI(e) {
    let { children: n } = e;
    return (0, l.jsx)(lA.zC, { className: lv.X, children: (0, l.jsx)("div", { className: lv.Q, children: n }) });
}
var lj = t(508770),
    lb = t(732280),
    lC = t(811611),
    ly = t(976860),
    lN = t(402860);
function lE() {
    return i.useCallback(() => {
        ((0, ly.pX)(T.BVt.NITRO_HOME), (0, lN.closeUserProfileModal)());
    }, []);
}
var lS = t(570002),
    lP = t(202541),
    lT = t(155053);
function lk() {
    let e = (0, lb.V)();
    return e?.subscriptionTrial?.skuId === lP.pe.TIER_2 ? e : null;
}
function lR() {
    let e = (0, lS.A)(eU.intl.string(eU.t.pj0XBN));
    return (0, l.jsx)(to.A, { subscriptionTier: lP.pe.TIER_2, buttonTextOverride: e, size: "sm", fullWidth: !0 });
}
function lO(e) {
    let { trialOffer: n, onSubscribeClick: t, onSubscribeSuccess: i, onSubscribeClose: r } = e,
        s = lE(),
        a = (0, J.FY)({
            intervalType: n.subscriptionTrial?.interval,
            intervalCount: n.subscriptionTrial?.intervalCount,
        }),
        o = (0, lC.ux)(n.expiresAt?.toISOString());
    return (0, l.jsxs)("div", {
        className: lT.nH,
        children: [
            (0, l.jsxs)("div", {
                className: lT.qf,
                children: [
                    (0, l.jsx)(m.A, { children: (0, l.jsx)(f.H, { children: eU.intl.string(eU.t.IBYG5U) }) }),
                    (0, l.jsx)("div", {
                        "aria-hidden": "true",
                        children: (0, l.jsx)(lj.E, { type: "free_trial", variant: "expressive" }),
                    }),
                ],
            }),
            (0, l.jsx)(eY.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: eU.intl.format(eU.t["fF+cgd"], { onClick: s }),
            }),
            (0, l.jsx)(to.A, {
                subscriptionTier: lP.pe.TIER_2,
                buttonTextOverride: a,
                onClick: t,
                onSubscribeModalClose: (e) => {
                    (e && i?.(), r?.());
                },
                size: "sm",
                fullWidth: !0,
            }),
            null != o &&
                (0, l.jsx)(eY.E, { variant: "text-xs/normal", color: "text-muted", className: lT.u8, children: o }),
        ],
    });
}
function lL() {
    let e = lk();
    return null == e ? (0, l.jsx)(lR, {}) : (0, l.jsx)(lO, { trialOffer: e });
}
var l_ = t(55619),
    lw = t(848717);
function lM() {
    return (0, l.jsxs)("div", {
        className: lw.k,
        children: [
            (0, l.jsx)(eY.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eU.intl.string(eU.t.JFY17v),
            }),
            (0, l.jsx)(tl.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eU.intl.string(eU.t.R9GHya),
                onClick: function () {
                    return l_.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var lD = t(342866),
    lG = t(968475);
function lF(e) {
    let { user: n, ...t } = e,
        { pendingAvatar: i, tryItOutAvatar: r } = (0, a.cf)([eb.A], () => ({
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
        })),
        s = void 0 !== r ? r : i;
    return (0, l.jsx)(lD.A, {
        ...t,
        variant: "full-height-bar",
        userId: n.id,
        avatarChange: s,
        accessibleValue: (0, lD.$)(s, n.avatar),
        imageInteractingClassName: null == r ? lG.$T : void 0,
    });
}
function lU(e) {
    let { userId: n, ...t } = e,
        i = (0, el.Ay)(n),
        {
            pendingBanner: r,
            tryItOutBanner: s,
            currentProfileBanner: o,
        } = (0, a.cf)(
            [eb.A, en.A],
            () => ({
                pendingBanner: eb.A.getPendingChanges().pendingBanner,
                tryItOutBanner: eb.A.getTryItOutChanges().tryItOutBanner,
                currentProfileBanner: en.A.getUserProfile(n)?.banner,
            }),
            [n],
        ),
        d = void 0 !== s ? s : r;
    return (0, l.jsx)(tN, {
        ...t,
        variant: "full-height-bar",
        displayProfile: i,
        bannerChange: d,
        accessibleValue: tj(d, o),
    });
}
function lV(e) {
    let { user: n, ...t } = e,
        {
            pendingDisplayNameStyles: i,
            tryItOutDisplayNameStyles: r,
            pendingGlobalName: s,
        } = (0, a.cf)([eb.A], () => ({
            pendingDisplayNameStyles: eb.A.getPendingChanges().pendingDisplayNameStyles,
            tryItOutDisplayNameStyles: eb.A.getTryItOutChanges().tryItOutDisplayNameStyles,
            pendingGlobalName: eb.A.getPendingChanges(null).pendingGlobalName,
        })),
        o = (0, a.cf)([y.default], () => ({ globalName: y.default.getCurrentUser()?.globalName ?? null })).globalName,
        d = void 0 !== r ? r : i,
        u = (0, ev.lw)({ pendingValue: s, userValue: o }) ?? n.username;
    return (0, l.jsx)(tG, {
        ...t,
        variant: "bar",
        displayNameStyles: d,
        displayName: u,
        accessibleValue: tM(d),
        shouldAlwaysAnimate: null == r,
    });
}
var lB = t(207803);
function lW(e) {
    let n = (0, el.Ay)(e.id),
        {
            tryItOutThemeColors: t,
            tryItOutAvatar: l,
            pendingAvatar: i,
        } = (0, a.cf)([eb.A], () => ({
            tryItOutThemeColors: eb.A.getTryItOutChanges().tryItOutThemeColors,
            tryItOutAvatar: eb.A.getTryItOutChanges().tryItOutAvatar,
            pendingAvatar: eb.A.getPendingChanges().pendingAvatar,
        })),
        r = (0, eI.V7)({ userId: e.id, image: void 0 !== l ? l : i }),
        { primaryColor: s, secondaryColor: o } = (0, ea.A)({
            user: e,
            displayProfile: n,
            pendingThemeColors: t,
            pendingAvatarSrc: r ?? void 0,
            isPreview: !0,
        });
    return { primaryColor: s, secondaryColor: o, pendingAvatarSrc: r, tryItOutThemeColors: t };
}
function lH(e) {
    let { user: n, initialOpenPopout: t } = e,
        { primaryColor: r, secondaryColor: s, pendingAvatarSrc: a, tryItOutThemeColors: o } = lW(n),
        d = (0, tm.r)(h.A.unsafe_rawColors.PRIMARY_530).hex(),
        u = null != a ? a : n.getAvatarURL(void 0, 80),
        c = (0, th.rh)(u, d, !1),
        g = i.useCallback((e) => {
            (0, lB.a)(e);
        }, []);
    return null == r || null == s
        ? null
        : (0, l.jsx)(lf, {
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
function lz(e) {
    let { user: n, onClickPrimary: t, onClickSecondary: i } = e,
        { primaryColor: r, secondaryColor: s } = lW(n);
    if (null == r || null == s) return null;
    let a = eU.intl.formatToPlainString(eU.t.FquTfm, { colorLabel: (0, tg.Hl)(r) }),
        o = eU.intl.formatToPlainString(eU.t.xOnm4z, { colorLabel: (0, tg.Hl)(s) });
    return (0, l.jsx)(tx.Y, {
        variant: "full-height-bar",
        children: (0, l.jsxs)(lu, {
            primaryColor: r,
            secondaryColor: s,
            children: [
                (0, l.jsx)(lg, { color: r, onClick: t, "aria-label": a }),
                (0, l.jsx)(lg, { color: s, onClick: i, "aria-label": o }),
            ],
        }),
    });
}
var lY = t(847081);
function lq(e) {
    let { user: n, mode: t } = e,
        r = i.useRef(null),
        s = i.useRef(null),
        a = i.useRef(null),
        o = i.useRef(!1),
        { initialTarget: d, navigate: u } = (0, n6.pA)(),
        c = (function (e) {
            let { analyticsLocations: n } = (0, b.Ay)();
            return i.useCallback(() => {
                (0, tP.L)({ analyticsLocations: n, isPremiumTryItOut: !0, stackingBehavior: "stack", returnRef: e });
            }, [n, e]);
        })(r),
        g = (0, tE._)({ isPremiumTryItOut: !0, returnRef: s }),
        m = (0, tE.P)({ isPremiumTryItOut: !0, returnRef: a }),
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
            className: lY.T,
            children: [
                (0, l.jsx)(tB, {
                    heading: eU.intl.string(eU.t.NEzEws),
                    children: (0, l.jsx)(lV, {
                        user: n,
                        buttonRef: r,
                        onClick: f ? c : () => u({ id: "premiumTryItOut", initialTarget: "display-name-styles" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, l.jsx)(tB, {
                    heading: eU.intl.string(eU.t.DMeO2X),
                    children: f
                        ? (0, l.jsx)(lH, {
                              user: n,
                              initialOpenPopout: "theme-primary" === d || "theme-secondary" === d ? d : void 0,
                          })
                        : (0, l.jsx)(lz, {
                              user: n,
                              onClickPrimary: () => u({ id: "premiumTryItOut", initialTarget: "theme-primary" }),
                              onClickSecondary: () => u({ id: "premiumTryItOut", initialTarget: "theme-secondary" }),
                          }),
                }),
                (0, l.jsx)(tB, {
                    heading: eU.intl.string(eU.t.Vgdusv),
                    children: (0, l.jsx)(lU, {
                        userId: n.id,
                        buttonRef: a,
                        onClick: f ? m : () => u({ id: "premiumTryItOut", initialTarget: "banner" }),
                        "aria-haspopup": "dialog",
                    }),
                }),
                (0, l.jsx)(tB, {
                    heading: eU.intl.string(eU.t.Dt3ZUr),
                    children: (0, l.jsx)(lF, {
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
var lK = t(847374),
    lX = t(111159),
    lZ = t(548118),
    l$ = t(711014),
    lJ = t(649998),
    lQ = t(561392),
    l0 = t(499957),
    l1 = t(15626),
    l2 = t(715022),
    l5 = t(44482),
    l9 = t(470791);
function l3(e) {
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
            let { reducedMotion: e } = i.useContext(eR.C),
                {
                    isOpen: n,
                    setIsOpen: t,
                    refs: l,
                    floatingStyles: r,
                    getReferenceProps: s,
                    getFloatingProps: a,
                    context: o,
                } = (0, lQ.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, l0.DL)(o, {
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
        y = i.useContext(l1._),
        N = i.useId(),
        E = i.useId(),
        S = i.useId(),
        P = i.useRef(null),
        T = i.useRef(null),
        [k, R] = i.useState(null),
        O = null != k ? (0, l2.ZN)(S, k) : void 0,
        L = i.useRef(!1),
        _ = i.useRef(!1),
        w = i.useMemo(() => n.filter((e) => (0, l2.fI)(e.value, [t])), [t, n]),
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
            (x(!1), P.current?.focus());
        }, [x]),
        F = i.useCallback(
            (e) => {
                if (!T.current?.contains(e.relatedTarget)) {
                    if (_.current) {
                        _.current = !1;
                        return;
                    }
                    if (h && null != k) {
                        let e = n[k];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    h && x(!1);
                }
            },
            [h, k, n, r, x],
        ),
        U = i.useCallback(
            (e) => {
                if (u) return;
                let n = e[0];
                null != n && (r(n.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: V, handleKeyDown: B } = (0, lJ.l)(!0, n),
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
                            if (null != k) {
                                let e = n[k];
                                if (null != e && !0 !== e.disabled) {
                                    U([e]);
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
                        if (null == k || k > t - 1) return;
                        {
                            let e = n[k];
                            if (null == e || !0 === e.disabled) return;
                            U([e]);
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
                        if (h && null != k) {
                            let e = n[k];
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
            [u, h, n, k, U, G, r, x, B],
        ),
        z = Math.max(
            n.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        Y = i.useRef(!1);
    i.useEffect(() => {
        c || !h || Y.current
            ? h || ((Y.current = !1), R(null), (L.current = !1))
            : ((Y.current = !0), L.current || R(n.length > 0 ? z : null), (L.current = !1), P.current?.focus());
    }, [c, h, z, n.length]);
    let q = {
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
        onBlur: F,
    };
    return (0, l.jsxs)("div", {
        ref: (e) => {
            ((T.current = e), A.setReference(e));
        },
        className: o,
        ...I(),
        children: [
            null != a && (0, l.jsx)(m.A, { tag: "label", id: N, htmlFor: E, children: a }),
            p({ buttonRef: P, selectButtonProps: q }),
            !u &&
                h &&
                (0, l.jsx)("div", {
                    ref: C,
                    className: s()(l9.S_, d),
                    ...j(),
                    style: { ...v, ...b },
                    children: (0, l.jsx)(lJ.q, {
                        id: S,
                        tabIndex: -1,
                        items: n,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: k,
                        renderListItem: (e) => (null != f ? f(e) : (0, l.jsx)(l5.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var l8 = t(216384);
let l7 = "MAIN_PROFILE";
function l6(e) {
    let { guild: n } = e;
    return (0, l.jsx)(lZ.Ay, { className: l8.$f, guild: n, size: lZ.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function l4(e) {
    let { leading: n, label: t, description: i } = e;
    return (0, l.jsxs)("div", {
        className: l8.XE,
        children: [
            null != n && (0, l.jsx)("div", { className: l8.fZ, children: n }),
            (0, l.jsxs)("div", {
                className: l8.qL,
                children: [
                    (0, l.jsx)(eY.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: t }),
                    null != i &&
                        "" !== i &&
                        (0, l.jsx)(eY.E, {
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
function ie(e) {
    let { leading: n, label: t, disabled: i, buttonRef: r, selectButtonProps: a } = e;
    return (0, l.jsxs)(e8.D, {
        innerRef: r,
        className: s()(l8.L5, { [l8.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...a,
        children: [
            n,
            (0, l.jsx)(eY.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: l8.v9,
                children: t,
            }),
            (0, l.jsx)(lK.a, {
                className: l8.u4,
                size: "sm",
                color: !0 === i ? h.A.colors.ICON_MUTED : h.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function it(e) {
    let { selectedGuildId: n, originGuildId: t, onChange: r, loading: s, disabled: o } = e,
        d = (0, a.bG)([l$.Ay], () => l$.Ay.getFlattenedGuildIds()),
        u = (0, a.bG)([q.A], () => q.A.getGuilds()),
        c = (0, a.bG)([nt.A], () => {
            let e = nt.A.getGuildId();
            return null == e || eb._.has(e) ? null : e;
        }),
        g = (0, a.cf)([ej.Ay, l$.Ay], () => {
            let e = {};
            for (let n of l$.Ay.getFlattenedGuildIds()) {
                let t = ej.Ay.getSelfMember(n)?.nick;
                null != t && (e[n] = t);
            }
            return e;
        }),
        m = i.useMemo(() => {
            let e = {
                    id: l7,
                    label: eU.intl.string(eU.t["2p07FR"]),
                    value: l7,
                    leading: (0, l.jsx)(lX.p, { size: "refresh_sm", color: h.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, l.jsx)(l6, { guild: t }),
                                  description: g[t.id] ?? void 0,
                              };
                    })
                    .filter(em.Vq),
                r = null != n ? u[n] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, l.jsx)(l6, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, t, c, g]),
        f = n ?? l7,
        p = m.find((e) => e.value === f) ?? m[0],
        x = i.useCallback(
            (e) => {
                let t = e === l7 ? null : e;
                t !== n && r(t);
            },
            [r, n],
        );
    return (0, l.jsx)(l3, {
        className: l8.kL,
        label: eU.intl.string(eU.t.rki38K),
        listboxClassName: l8.yt,
        options: m,
        value: f,
        onSelectionChange: x,
        loading: s,
        disabled: o,
        renderListItem: (e) => (0, l.jsx)(l4, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, l.jsx)(ie, { leading: p.value === l7 ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var il = t(462887),
    ii = t(765178),
    ir = t(461797),
    is = t(469054),
    ia = t(601298);
function io() {
    let { preset: e, setPreset: n } = (0, n6.RQ)(),
        t = (0, tY.Ay)(),
        l = (0, il.q)(t),
        r = i.useCallback(
            (e) => {
                let n = (0, ir.Wt)(e);
                (0, lB.w5)({
                    banner: (0, ia.X)({
                        assetOrigin: is.E.NEW_ASSET,
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
            eb.A.hasTryItOutChanges() || r(e);
        }, [r, e]),
        i.useCallback(() => {
            let t = (0, ir.B$)(e),
                l = (0, ir.Wt)(t);
            (nX.default.track(T.HAw.TRY_IT_OUT_PRESET_SHUFFLED, { preset: t }),
                n(t),
                r(t),
                ii.O.announce(eU.intl.formatToPlainString(eU.t.M2Hj9s, { presetName: l.getName() })));
        }, [e, n, r])
    );
}
var id = t(23722),
    iu = t(288490);
let ic = "profile-editing-nameplate-error",
    ig = "profile-editing-avatar-error",
    im = "profile-editing-avatar-decoration-error",
    ip = "profile-editing-banner-error",
    ih = "profile-editing-display-name-style-error";
function ix(e) {
    let { className: n } = e;
    return (0, l.jsx)("div", {
        className: s()(iu.D0, n),
        children: (0, l.jsx)("div", { className: iu.ZN, children: (0, l.jsx)(n4.LockIcon, { size: "xs" }) }),
    });
}
function iA() {
    let [e, n] = (0, ts.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, l.jsxs)("div", {
              className: iu.X6,
              children: [
                  (0, l.jsx)(eY.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eU.intl.string(eU.t["gBIG/N"]),
                  }),
                  (0, l.jsx)(e8.D, {
                      "aria-label": eU.intl.string(eU.t.rSe9ra),
                      className: iu.TD,
                      onClick: () => n(!0),
                      children: (0, l.jsx)(te.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function iv() {
    let e = lE(),
        n = (0, lS.A)(eU.intl.string(eU.t["7IWwak"]));
    return (0, l.jsxs)("div", {
        className: iu.eW,
        children: [
            (0, l.jsxs)("div", {
                className: iu.tm,
                children: [
                    (0, l.jsx)(tn.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: eU.intl.string(eU.t.bO0TOe),
                    }),
                    (0, l.jsx)(eY.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: eU.intl.format(eU.t["3PujdE"], { onClick: e }),
                    }),
                ],
            }),
            (0, l.jsx)(to.A, { subscriptionTier: lP.pe.TIER_2, buttonTextOverride: n, size: "sm", fullWidth: !0 }),
            (0, l.jsx)(ix, { className: iu.nd }),
        ],
    });
}
function iI() {
    return (0, l.jsx)(eY.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: iu.BJ,
        "aria-hidden": !0,
        children: eU.intl.format(eU.t.kYv9DM, {
            nitroIconHook: () => (0, l.jsx)(na.t, { size: "xxs", color: "currentColor", className: iu.qp }),
        }),
    });
}
function ij(e) {
    let { user: n, guildId: t, disabled: i, errorMessage: r } = e;
    return (0, l.jsxs)(tB, {
        heading: eU.intl.string(eU.t.x5CoXR),
        disabled: i,
        children: [
            (0, l.jsx)(tH.A, { user: n, guildId: t, disabled: i, errorMessageId: null != r ? ic : void 0 }),
            (0, l.jsx)(tW, { id: ic, message: r }),
        ],
    });
}
function ib(e) {
    let { user: n, guildId: t, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: s } = e;
    return (0, l.jsxs)(tB, {
        heading: eU.intl.string(eU.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, l.jsx)(tu.A, { user: n, guildId: t, disabled: i, errorMessageId: null != r ? ig : void 0 }),
            (0, l.jsx)(tc.A, { user: n, guildId: t, disabled: i, errorMessageId: null != s ? im : void 0 }),
            (0, l.jsx)(tW, { id: ig, message: (0, td.d3)(r) }),
            (0, l.jsx)(tW, { id: im, message: s }),
        ],
    });
}
function iC(e) {
    let { user: n, guildId: t, disabled: i, errorMessage: r } = e,
        s = (0, ta.ux)("UserProfileModalV2EditingPanel"),
        [a, o] = (0, eG.kn)(s && !i ? [eT.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = a === eT.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, l.jsxs)(tB, {
        heading: eU.intl.string(eU.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, l.jsx)(tt.Lp, { text: eU.intl.string(eU.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, l.jsx)(tF, {
                user: n,
                guildId: t,
                disabled: i,
                errorMessageId: null != r ? ih : void 0,
                onOpen: d ? () => o(eF.i.TAKE_ACTION) : void 0,
            }),
            (0, l.jsx)(tW, { id: ih, message: r }),
        ],
    });
}
function iy(e) {
    let { user: n, guildId: t, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: s } = e;
    return (0, l.jsxs)(tB, {
        heading: eU.intl.string(eU.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, l.jsx)(lp, { user: n, guildId: t, disabled: i || !r }),
            (0, l.jsx)(tS, { userId: n.id, guildId: t, disabled: i || !r, errorMessageId: null != s ? ip : void 0 }),
            (0, l.jsx)(tW, { id: ip, message: (0, td.d3)(s) }),
        ],
    });
}
function iN(e) {
    let { user: n, disabled: t } = e;
    return (0, l.jsx)(tB, {
        heading: eU.intl.string(eU.t["/X3fkf"]),
        disabled: t,
        children: (0, l.jsx)(tA, { user: n, disabled: t }),
    });
}
function iE(e) {
    let { user: n, guildId: t, disabled: i } = e;
    return (0, l.jsxs)(tB, {
        heading: eU.intl.string(eU.t["Vfbar/"]),
        disabled: i,
        children: [
            (0, l.jsx)(t4, { user: n, guildId: t, disabled: i, variant: "square" }),
            (0, l.jsx)(ls, { user: n, guildId: t, disabled: i }),
        ],
    });
}
let iS = "premium-try-it-out-description";
function iP(e) {
    let { user: n } = e,
        t = lE(),
        { navigate: i } = (0, n6.pA)();
    return (
        io(),
        (0, l.jsxs)("div", {
            role: "group",
            "aria-labelledby": iS,
            className: iu.DX,
            children: [
                (0, l.jsx)(ix, { className: iu.x$ }),
                (0, l.jsxs)("div", {
                    className: iu.sb,
                    children: [
                        (0, l.jsx)(eY.E, {
                            id: iS,
                            variant: "text-md/normal",
                            color: "text-default",
                            children: eU.intl.format(eU.t.TmfgI2, { onClick: t }),
                        }),
                        (0, l.jsx)(tl.$, {
                            variant: "overlay-primary",
                            size: "sm",
                            icon: ti.EyeIcon,
                            text: eU.intl.string(eU.t.PxUx8e),
                            onClick: () => i({ id: "premiumTryItOut" }),
                            fullWidth: !0,
                        }),
                    ],
                }),
                (0, l.jsx)(lq, { user: n, mode: "entrypoint" }),
            ],
        })
    );
}
function iT(e) {
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
        g = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        m = (0, id.A)(c),
        f = null != i,
        p = J.Ay.canUsePremiumProfileCustomization(n),
        h = f && !p,
        x = !p && !f,
        A = f && !p && !g,
        v = s || o,
        I = (0, a.bG)([eb.A], () => eb.A.getErrors(i)),
        j = I.nameplate?.[0] ?? I.nameplate_sku_id?.[0],
        b = I.avatar?.[0],
        C = I.avatar_decoration_sku_id?.[0],
        y = I.banner?.[0],
        N = I.display_name_font_id?.[0] ?? I.display_name_effect_id?.[0] ?? I.display_name_colors?.[0];
    return (0, l.jsxs)(lx, {
        hasGradientBackground: A,
        children: [
            (0, l.jsxs)("div", {
                className: iu.wx,
                children: [
                    (0, l.jsx)(nB.m, {
                        text: eU.intl.string(eU.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, l.jsx)(n7.K, {
                            buttonRef: d,
                            "aria-label": eU.intl.string(eU.t["l/A351"]),
                            icon: tr.V,
                            onClick: u,
                            "aria-controls": t,
                            "aria-expanded": !0,
                            variant: "icon-only",
                            size: "sm",
                        }),
                    }),
                    (0, l.jsx)(it, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: m,
                        loading: s,
                        disabled: g,
                    }),
                ],
            }),
            g
                ? (0, l.jsx)(lM, {})
                : (0, l.jsx)(lI, {
                      children: (0, l.jsxs)(l.Fragment, {
                          children: [
                              f && (p ? (0, l.jsx)(iA, {}) : (0, l.jsx)(iv, {})),
                              p && (0, l.jsx)(iI, {}),
                              (0, l.jsx)(ij, { user: n, guildId: i, disabled: v || h, errorMessage: j }),
                              (0, l.jsx)(ib, {
                                  user: n,
                                  guildId: i,
                                  disabled: v || h,
                                  avatarErrorMessage: b,
                                  avatarDecorationErrorMessage: C,
                              }),
                              p || f
                                  ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(iC, { user: n, guildId: i, disabled: v || h, errorMessage: N }),
                                            (0, l.jsx)(iy, {
                                                user: n,
                                                guildId: i,
                                                disabled: v || h,
                                                canUsePremiumProfileFeatures: p,
                                                bannerErrorMessage: y,
                                            }),
                                        ],
                                    })
                                  : (0, l.jsx)(iN, { user: n, disabled: v || h }),
                              (0, l.jsx)(iE, { user: n, guildId: i, disabled: v || h }),
                              x &&
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [(0, l.jsx)(iP, { user: n }), (0, l.jsx)(lL, {})],
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var ik = t(202091),
    iR = t(110654);
function iO(e) {
    return null;
}
function iL(e) {
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
        className: s()(iR.kL, h && iR.ez),
        children: (0, l.jsx)("div", {
            className: iR.u4,
            children: p((e, n, t) => {
                let { key: i } = t,
                    r = o.get(n);
                return null == r
                    ? null
                    : (0, l.jsx)(
                          ik.animated.div,
                          {
                              className: iR.M6,
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
var i_ = t(926321),
    iw = t(477155),
    iM = t(561243),
    iD = t(206697),
    iG = t(280406);
let iF = "shuffle-options-a11y-description";
function iU(e) {
    let { className: n, onShuffle: t } = e;
    return (0, l.jsxs)("div", {
        className: n,
        children: [
            (0, l.jsx)(tl.$, {
                icon: i_.DiceIcon,
                text: eU.intl.string(eU.t.VzqqFC),
                onClick: t,
                variant: "secondary",
                size: "sm",
                "aria-describedby": iF,
                fullWidth: !0,
            }),
            (0, l.jsx)(m.A, { id: iF, children: eU.intl.string(eU.t.bBRdiB) }),
        ],
    });
}
function iV(e) {
    let { user: n, onBack: t, backButtonRef: i } = e,
        r = io(),
        s = lk();
    return (0, l.jsxs)(lx, {
        children: [
            (0, l.jsxs)("div", {
                className: iG.wx,
                children: [
                    (0, l.jsx)("div", {
                        className: iG.FS,
                        children: (0, l.jsx)(nB.m, {
                            text: eU.intl.string(eU.t["13/7kX"]),
                            ariaHidden: !0,
                            children: (0, l.jsx)(n7.K, {
                                buttonRef: i,
                                "aria-label": eU.intl.string(eU.t["4IYwrw"]),
                                icon: iw.r,
                                onClick: t,
                                variant: "icon-only",
                                size: "sm",
                            }),
                        }),
                    }),
                    (0, l.jsx)(tn.D, {
                        variant: "text-md/medium",
                        color: "text-default",
                        className: iG.R_,
                        children: eU.intl.string(eU.t.PxUx8e),
                    }),
                    (0, l.jsx)(eY.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: iG.Ij,
                        children: eU.intl.string(eU.t.X0ir7L),
                    }),
                    (0, l.jsx)(iU, { className: iG.ZZ, onShuffle: r }),
                ],
            }),
            (0, l.jsx)(lI, {
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(lq, { user: n, mode: "edit" }),
                        null != s &&
                            (0, l.jsx)(lO, {
                                trialOffer: s,
                                onSubscribeClick: iD.t,
                                onSubscribeSuccess: iD.T,
                                onSubscribeClose: iM.J,
                            }),
                    ],
                }),
            }),
        ],
    });
}
var iB = t(199016);
let iW = "user-profile-editing-panel",
    iH = "profile-modal-editing-panel-heading";
function iz(e) {
    let { onClick: n, className: t, innerRef: i } = e;
    return (0, l.jsx)(nB.m, {
        text: eU.intl.string(eU.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, l.jsx)(e8.D, {
            innerRef: i,
            "aria-label": eU.intl.string(eU.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": iW,
            className: s()(iB.eg, t),
            onClick: n,
            focusProps: { offset: { right: 6 } },
            children: (0, l.jsx)(n8.V, { size: "sm", color: "currentColor" }),
        }),
    });
}
function iY(e) {
    let { onClick: n, className: t, buttonRef: i } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(nB.m, {
            text: eU.intl.string(eU.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, l.jsx)(n7.K, {
                buttonRef: i,
                "aria-label": eU.intl.string(eU.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": iW,
                icon: n8.V,
                onClick: n,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function iq(e) {
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
        p = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
        { selectedPanel: h, readyPanel: x, handlePanelTransitionComplete: A, goBack: v } = (0, n6.pA)(),
        I = i.useRef(null);
    return (i.useEffect(() => {
        if (null == x || "premiumTryItOut" !== x.id || null != x.initialTarget) return;
        let e = requestAnimationFrame(() => I.current?.focus());
        return () => cancelAnimationFrame(e);
    }, [x]),
    null == p)
        ? null
        : (0, l.jsx)("aside", {
              id: iW,
              "aria-labelledby": iH,
              className: s()(iB.nd, c),
              "aria-busy": o,
              children: (0, l.jsxs)("div", {
                  className: iB.l$,
                  children: [
                      (0, l.jsx)(m.A, {
                          children: (0, l.jsx)(f.H, { id: iH, children: eU.intl.string(eU.t["L+ch00"]) }),
                      }),
                      (0, l.jsxs)(iL, {
                          activeSlide: h.id,
                          direction: "premiumTryItOut" === h.id ? "forwards" : "backwards",
                          onTransitionComplete: A,
                          children: [
                              (0, l.jsx)(iO, {
                                  id: "default",
                                  children: (0, l.jsx)(iT, {
                                      panelId: iW,
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
                              (0, l.jsx)(iO, {
                                  id: "premiumTryItOut",
                                  children: (0, l.jsx)(iV, { user: p, onBack: v, backButtonRef: I }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
var iK = t(669253),
    iX = t(347805),
    iZ = t(34011),
    i$ = t(629403),
    iJ = t(612630),
    iQ = t(61426);
function i0(e) {
    let { userId: n, className: t, autoFocus: r = !1, onUpdate: o } = e,
        d = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        { loading: u, note: c } = (0, iJ.A)(n),
        [g, m] = i.useState(),
        [f, p] = i.useState(),
        h = g ?? c,
        x = i.useCallback(
            async (e) => {
                if ((c ?? "") !== e) {
                    (p(void 0), m(e), o?.());
                    try {
                        await i$.A.updateNote(n, e);
                    } catch {
                        p(eU.intl.string(eU.t.F8FvUy));
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
            ? (0, l.jsx)(eY.E, { variant: "text-sm/normal", color: "text-default", className: iQ.t, children: h })
            : null;
    return (0, l.jsx)("div", {
        className: s()(nA.kL, t),
        children: (0, l.jsx)(iZ.w, {
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
            label: eU.intl.string(eU.t.PbMNh2),
            placeholder: A ? eU.intl.string(eU.t["WLKx/9"]) : eU.intl.string(eU.t.VBhOe2),
            maxLength: T.T7x,
            disabled: A,
            error: f,
        }),
    });
}
var i1 = t(518477),
    i2 = t(793222);
function i5(e) {
    let { userId: n } = e,
        t = (0, eS.g)(),
        { trackUserProfileAction: i } = (0, Q.NJ)(),
        r = (0, et.X)("UserProfileModalV2NotesSection"),
        s = r ? i0 : iX.A;
    return (0, l.jsx)(ng, {
        heading: eU.intl.string(eU.t["mQKv+v"]),
        scrollTargetId: i1.bk.NOTE,
        children: (0, l.jsx)(s, {
            userId: n,
            className: r ? i2.N : i2.w,
            autoFocus: t === i1.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var i9 = t(123292),
    i3 = t(667242),
    i8 = t(655214);
function i7(e) {
    let { icon: n, message: t, actionLabel: r, onAction: a, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, l.jsx)("div", {
            className: i3.kL,
            children: (0, l.jsxs)("div", {
                className: s()(i8.oR, i3.Qs),
                "data-type": d,
                children: [
                    (0, l.jsx)("div", { className: i3.Kk, children: n }),
                    (0, l.jsx)(eY.E, { color: "text-strong", variant: "text-sm/semibold", children: t }),
                    null != r &&
                        null != a &&
                        (0, l.jsx)("div", {
                            className: i3.hP,
                            children: (0, l.jsx)(i9.Q, {
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
var i6 = t(346055),
    i4 = t(289873),
    re = t(615019);
function rn(e) {
    let { showScrim: n, showLoadingSpinner: t, className: r, children: a } = e;
    i.useEffect(() => {
        t && ii.O.announce(eU.intl.string(eU.t["QR+vBP"]));
    }, [t]);
    let o = i.useRef(null);
    return (
        (0, i6.f)(o, n),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: s()(re.f, n && re.z),
                    children: t && (0, l.jsx)(i4.y, { type: i4.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, l.jsx)("div", { ref: o, "aria-hidden": n || void 0, className: r, children: a }),
            ],
        })
    );
}
var rt = t(568602),
    rl = t(625494),
    ri = t(61881);
function rr(e) {
    let { children: n } = e,
        [t, r] = i.useState(!1),
        [s, o] = i.useState(1.4),
        d = i.useRef(null),
        u = i.useRef(1.4),
        c = (0, a.bG)([ri.A, eb.A], () => ri.A.hasUnsavedChanges() || eb.A.hasUnsavedChanges());
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
                rl._.subscribe(T.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    rl._.unsubscribe(T.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, [g]),
        i.useEffect(
            () => () => {
                null != d.current && (clearTimeout(d.current), (d.current = null));
            },
            [],
        ),
        (0, l.jsx)(rt.b, { isShaking: t, intensity: s, children: n })
    );
}
t(46121);
var rs = t(761508),
    ra = t(695904),
    ro = t(116331),
    rd = t(713348),
    ru = t(827258),
    rc = t(517164),
    rg = t(114212),
    rm = t(290863),
    rf = t(461213),
    rp = t(975571),
    rh = t(146655),
    rx = t(489379),
    rA = t(402857),
    rv = t(353394),
    rI = t(64622),
    rj = t(986712),
    rb = t(435558),
    rC = t(534890),
    ry = t(308528),
    rN = t(780964),
    rE = t(766075),
    rS = t(92795);
let rP = [
        () => eU.intl.string(eU.t.madJdE),
        () => eU.intl.string(eU.t.NYmfoP),
        () => eU.intl.string(eU.t.R2PaCg),
        () => eU.intl.string(eU.t.laSR8h),
        () => eU.intl.string(eU.t.DnsJE8),
    ],
    rT = [
        () => eU.intl.string(eU.t.nFSbeE),
        () => eU.intl.string(eU.t.gTcxOz),
        () => eU.intl.string(eU.t["8T0wYj"]),
        () => eU.intl.string(eU.t.BIHl1g),
        () => eU.intl.string(eU.t["jhBm0+"]),
    ],
    rk = [
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
    rR = [
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
function rO(e) {
    let { heading: n, bodyText: t, children: i } = e;
    return (0, l.jsxs)("div", {
        className: rS.Ie,
        children: [
            (0, l.jsxs)("div", {
                className: rS.FS,
                children: [
                    (0, l.jsx)(tn.D, { variant: "heading-md/medium", color: "text-strong", children: n }),
                    (0, l.jsx)(eY.E, { variant: "text-sm/normal", color: "text-default", children: t }),
                ],
            }),
            i,
        ],
    });
}
function rL() {
    let e = eU.intl.string(eU.t.RnD2yZ),
        [n] = i.useState(() => ((0, rb.sample)(rP) ?? rP[0])());
    return (0, l.jsx)(rO, { heading: e, bodyText: n });
}
function r_() {
    let e = eU.intl.string(eU.t.bFgqYJ),
        [n] = i.useState(() => ((0, rb.sample)(rT) ?? rT[0])());
    return (0, l.jsx)(rO, { heading: e, bodyText: n });
}
function rw(e) {
    let { user: n, guildId: t, channelId: r, onClose: s } = e,
        a = Z.Ay.getName(t, r, n),
        o = eU.intl.formatToPlainString(eU.t.sjSitP, { name: a }),
        [d] = i.useState(() => ((0, rb.sample)(rk) ?? rk[0])(a)),
        u = i.useCallback(() => {
            (ry.A.openPrivateChannel({ recipientIds: n.id }), s?.());
        }, [n.id, s]);
    return (0, l.jsx)(rO, {
        heading: o,
        bodyText: d,
        children: (0, l.jsx)("div", {
            className: rS.v0,
            children: (0, l.jsx)(nM.FD, { icon: rC.ChatIcon, text: eU.intl.string(eU.t["g33r/P"]), onClick: u }),
        }),
    });
}
function rM() {
    let e = (0, tY.Ay)();
    return (0, l.jsx)("div", {
        className: rS.HU,
        children: rR.map((n, t) => {
            let i = eu.A.get(n);
            if (null == i) return null;
            let r = (0, tz.M)(e) ? i.icon.darkPNG : i.icon.lightPNG;
            return (0, l.jsx)("img", { src: r, alt: i.name, className: rS.gj }, t);
        }),
    });
}
function rD(e) {
    let { onClose: n } = e,
        t = i.useCallback(() => {
            (n?.(), (0, rE.openUserSettings)(rN.X.CONNECTIONS_CATEGORY));
        }, [n]),
        r = i.useCallback(() => {
            (n?.(), (0, rE.openUserSettings)(rN.X.CONNECTED_GAMES_CATEGORY));
        }, [n]);
    return (0, l.jsxs)(rO, {
        heading: eU.intl.string(eU.t.VB6LWY),
        bodyText: eU.intl.string(eU.t.KpjsU9),
        children: [
            (0, l.jsx)(rM, {}),
            (0, l.jsxs)("div", {
                className: rS.v0,
                children: [
                    (0, l.jsx)(nM.FD, { text: eU.intl.string(eU.t["/Hl24U"]), onClick: t }),
                    (0, l.jsx)(nM.FD, { text: eU.intl.string(eU.t.GTCx0p), onClick: r }),
                ],
            }),
        ],
    });
}
var rG = t(286409),
    rF = t(587763);
function rU(e) {
    let { user: n, currentUser: t, displayProfile: i, guildId: r, channelId: s, onClose: o } = e,
        { live: d, recent: u, stream: c } = (0, rh.A)(n.id),
        { voiceChannel: g, voiceActivity: m } = (0, rx.A)({ userId: n.id, guildId: r }),
        f = (0, a.bG)([rc.A], () => rc.A.isFetchingUserOutbox(n.id)),
        p = n.id === t.id,
        h = (0, a.bG)([rf.A, rm.A], () => {
            let e = p ? rf.A.getStatus() : rm.A.getStatus(n.id);
            return e === T.clD.OFFLINE || e === T.clD.INVISIBLE;
        }),
        x = d.length > 0 || null != c,
        A = i?.private !== !0 && null == c && null == m && null != g,
        v = !h && (x || A),
        I = u.length > 0;
    return v || I || !f
        ? v || I || f
            ? (0, l.jsxs)(rG.K, {
                  className: rF.XG,
                  fade: !0,
                  children: [
                      v
                          ? (0, l.jsx)(ng, {
                                heading: eU.intl.string(eU.t.J6STd9),
                                children: (0, l.jsxs)("ul", {
                                    className: rF.kR,
                                    children: [
                                        null != c &&
                                            (0, l.jsx)("li", {
                                                children: (0, l.jsx)(rI.A, {
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
                                                    children: (0, l.jsx)(rA.A, {
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
                                                children: (0, l.jsx)(rj.A, {
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
                          ? (0, l.jsx)(ng, {
                                heading: eU.intl.string(eU.t.jzgEoL),
                                introText: p
                                    ? eU.intl.format(eU.t["4bk9Ak"], {
                                          learnMoreHook: (e, n) =>
                                              (0, l.jsx)(
                                                  nW.Anchor,
                                                  {
                                                      href: rp.A.getArticleURL(T.MVz.ACTIVITY_STATUS_SETTINGS),
                                                      children: e,
                                                  },
                                                  n,
                                              ),
                                      })
                                    : void 0,
                                scrollTargetId: i1.bk.RECENT_ACTIVITY,
                                children: (0, l.jsx)("ul", {
                                    className: rF.kR,
                                    children: u.map((e) =>
                                        (0, l.jsx)(
                                            "li",
                                            { children: (0, l.jsx)(rv.A, { user: n, entry: e, onClose: o }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                            })
                          : null,
                  ],
              })
            : p
              ? (0, l.jsx)(rD, { onClose: o })
              : (0, l.jsx)(rw, { user: n, guildId: i?.guildId ?? r, channelId: s, onClose: o })
        : (0, l.jsx)("div", {
              className: rF.kR,
              children: Array.from({ length: 8 }).map((e, n) =>
                  (0, l.jsxs)(
                      "div",
                      {
                          className: rF.kr,
                          children: [
                              (0, l.jsx)(rg.FQ, { width: 60, opacity: 0.08 }),
                              (0, l.jsx)(rg.FQ, { width: 135, opacity: 0.08 }),
                          ],
                      },
                      n,
                  ),
              ),
          });
}
var rV = t(163126),
    rB = t(913453),
    rW = t(229187),
    rH = t(503062),
    rz = t(393213);
function rY(e) {
    let { user: n, guildId: t, channelId: r, onClose: s } = e,
        { analyticsLocations: a } = (0, b.Ay)(),
        { context: o, trackUserProfileAction: d } = (0, Q.NJ)(),
        { mutualFriends: u, mutualFriendsCount: c } = (0, rB.A)(n),
        g = (0, rV.A)();
    return (
        i.useEffect(() => {
            (0, rW.A)(n.id, g);
        }, [n.id, g]),
        (0, l.jsx)(rG.K, {
            className: rz.XG,
            children:
                null == u
                    ? Array.from({ length: c ?? 10 }).map((e, n) =>
                          (0, l.jsxs)(
                              "div",
                              {
                                  className: rz.D$,
                                  children: [
                                      (0, l.jsx)(rg.FQ, { width: 40, opacity: 0.08 }),
                                      (0, l.jsx)(rg.FQ, { width: 135, opacity: 0.08 }),
                                  ],
                              },
                              n,
                          ),
                      )
                    : 0 === u.length
                      ? (0, l.jsx)(rL, {})
                      : u.map((e) => {
                            let { key: n, user: i, status: u } = e;
                            return (0, l.jsx)(
                                rH.A,
                                {
                                    user: i,
                                    status: u,
                                    guildId: t,
                                    channelId: r,
                                    onSelect: () => {
                                        (s?.(),
                                            d({ action: "PRESS_MUTUAL_FRIEND" }),
                                            (0, lN.openUserProfileModal)({
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
var rq = t(398590),
    rK = t(345942),
    rX = t(51943);
function rZ(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: i } = (0, Q.NJ)(),
        { mutualGuilds: r, isFetching: s } = (0, rB.A)(n);
    return (0, l.jsx)(rG.K, {
        className: rz.XG,
        fade: !0,
        children:
            null == r && s
                ? Array.from({ length: 10 }).map((e, n) =>
                      (0, l.jsxs)(
                          "div",
                          {
                              className: rz.Y7,
                              children: [
                                  (0, l.jsx)(rg.FQ, { width: 40, opacity: 0.08 }),
                                  (0, l.jsx)(rg.FQ, { width: 135, opacity: 0.08 }),
                              ],
                          },
                          n,
                      ),
                  )
                : (null != r || s) && r?.length !== 0
                  ? r?.map((e) => {
                        let { guild: r, nick: s } = e;
                        return (0, l.jsx)(
                            rX.A,
                            {
                                user: n,
                                guild: r,
                                nick: s,
                                onSelect: () => {
                                    (i({ action: "PRESS_MUTUAL_GUILD" }), (0, rK.u)(r.id), t(), (0, rq.jH)());
                                },
                            },
                            r.id,
                        );
                    })
                  : (0, l.jsx)(r_, {}),
    });
}
var r$ = t(763432),
    rJ = t(132500),
    rQ = t(777480),
    r0 = t(825484),
    r1 = t(952270),
    r2 = t(885574),
    r5 = t(444927),
    r9 = t(895360),
    r3 = t(152472),
    r8 = t(267102),
    r7 = t(285373),
    r6 = t(721932),
    r4 = t(832163),
    se = t(501838),
    sn = t(44724),
    st = t(808247),
    sl = t(673843),
    si = t(855052),
    sr = t(639935),
    ss = t(249203),
    sa = t(600761),
    so = t(389667),
    sd = t(535089),
    su = t(128988),
    sc = t(675816),
    sg = t(107563),
    sm = t(840411),
    sf = t(666810),
    sp = t(248550),
    sh = t(419731),
    sx = t(451395),
    sA = t(823016),
    sv = t(100741);
function sI(e) {
    let { item: n, index: t, wishlistId: i, onReorder: r, children: s } = e,
        { manageFocusOnReorder: a } = (0, sA.r)();
    return (0, l.jsx)(sx.mG, {
        index: t,
        itemId: String(n.skuId),
        listType: String(i),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: n },
        "aria-label": eU.intl.formatToPlainString(eU.t["7SnyMA"], { positionNumber: t + 1 }),
        onReorder: r,
        onEnd: () => a(String(n.skuId)),
        className: sv.C,
        dropBeforeClassName: sv.A,
        dropAfterClassName: sv.Ze,
        draggingClassName: sv.Id,
        children: (0, l.jsx)("div", { className: sv.An, children: s }),
    });
}
let sj = i.memo(function (e) {
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
        { registerDragHandleRef: m } = (0, sA.r)(),
        f = i.useCallback(() => {
            g(n.skuId);
        }, [g, n.skuId]),
        p = i.useMemo(
            () =>
                a
                    ? (0, l.jsx)(sx.jV, {
                          buttonRef: m(String(n.skuId)),
                          className: sv.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, m, n.skuId],
        ),
        h = i.useMemo(
            () =>
                (0, l.jsx)(sp.A, {
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
              children: (0, l.jsx)(sI, { item: n, index: t, wishlistId: o, onReorder: u, children: h }),
          })
        : (0, l.jsx)("li", { children: h });
});
function sb(e) {
    let { items: n, profileOwner: t, guildId: r, showEditingControls: s, lastViewedAt: o } = e,
        d = y.default.getCurrentUser(),
        { defaultWishlistId: u } = (0, a.cf)([en.A], () => ({ defaultWishlistId: en.A.getFirstWishlistId(t.id) })),
        { isDragging: c } = (0, sc.V)((e) => ({ isDragging: e.isDragging() })),
        [g, m] = i.useState([]),
        f = i.useCallback((e) => {
            m((n) => (n.includes(e) ? n : [...n, e]));
        }, []),
        p = i.useCallback(
            (e, t) => {
                if (e === t || null == u || 0 === n.length || e < 0 || e >= n.length || t < 0 || t >= n.length) return;
                let l = sg.A.getWishlist(u);
                if (null == l) return;
                let i = n[e],
                    { newWishlistData: r, previousSkuId: s, nextSkuId: a } = (0, sm.Ap)(l, n, e, t);
                st.A.reorderWishlistItem(u, i.skuId, { previousSkuId: s, nextSkuId: a, newWishlistData: r });
            },
            [u, n],
        );
    if (null == d || null == u) return null;
    let h = (0, l.jsx)("ul", {
        className: sv.Vg,
        children: n.map((e, n) =>
            (0, l.jsx)(
                sj,
                {
                    item: e,
                    index: n,
                    profileOwner: t,
                    guildId: r,
                    showEditingControls: s,
                    wishlistId: u,
                    isDragging: c,
                    onReorder: p,
                    isNew: (0, sh.f3)(e.addedAt, o) && !g.includes(e.skuId),
                    onClick: f,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, l.jsx)(sA.B, { emptyListFallbackRef: null, children: h }) : h;
}
function sC(e) {
    let n = y.default.getCurrentUser()?.id,
        t = null != n && n !== e.profileOwner.id;
    return (0, l.jsx)(sf.h, {
        isGifting: t,
        location: "UserProfileModalV2WishlistGrid",
        children: (0, l.jsx)(sb, { ...e }),
    });
}
var sy = t(815021),
    sN = t(299679);
t(667532);
var sE = t(862772),
    sS = t(172218),
    sP = t(575593),
    sT = t(376357),
    sk = t(857250),
    sR = t(97483),
    sO = t(2157),
    sL = t(661492),
    s_ = t(95817),
    sw = t(146423),
    sM = t(74135),
    sD = t(460442),
    sG = t(699976),
    sF = t(964164),
    sU = t(880465);
let sV = sG.Z.SIZE_90;
function sB(e) {
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
        { trackUserProfileWishlistAction: f } = (0, Q.NJ)(),
        p = (0, sN.Ar)(),
        h = (0, r5.A)(() => (0, rJ.A)()),
        { handleVisibilityChange: x } = (0, s_.G)(h),
        A = (0, sS.K)(x, 0.5, p?.surface != null),
        v = i.useCallback(() => {
            (f({
                wishlistId: g,
                action: i1.Mq.WISHLIST_ITEM_CLICKED,
                skuId: n.id,
                productLines: new Set([n.productLine]),
            }),
                p?.surface != null &&
                    nX.default.track(T.HAw.WISHLIST_ITEM_CLICKED, {
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
        children: (0, l.jsx)(sw.A, {
            sku: n,
            user: t,
            guildId: r,
            spec: sV,
            cardStyle: s()(sF.Nr, a),
            skuPreviewStyle: s()(sF.ev, o),
            onHoverOrFocusChange: d,
            onClick: v,
            "aria-label": c,
            children: m,
        }),
    });
}
function sW(e) {
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
                    (await st.A.addSkuToWishlist(n.id, t), u?.(), a?.({ tabSection: i1.RP.WISHLIST }));
                } catch (e) {
                    ((0, sT.P)((0, sk.o)(eU.intl.string(eU.t.F8FvUy), sR.Ck.FAILURE)),
                        ii.O.announce(eU.intl.string(eU.t.F8FvUy)));
                } finally {
                    f(!1);
                }
            }
        }, [n, t, m, a, u]),
        h = i.useMemo(() => s()({ [sF.zW]: r || m }, o), [r, m, o]);
    return (0, l.jsxs)(sB, {
        "aria-label": eU.intl.formatToPlainString(eU.t.xRjJBe, { productName: (0, sL.T)(n) }),
        sku: n,
        wishlistOwner: d,
        skuPreviewStyle: h,
        onClick: p,
        isHoveringOrFocusing: r,
        ...g,
        children: [(0, l.jsx)(sD.oU, { isHoveringOrFocusing: r, loading: m }), !r && !m && c],
    });
}
function sH(e) {
    let { sku: n, analyticsLocations: t, ...i } = e,
        { analyticsLocations: r } = (0, b.Ay)(...(t ?? []), j.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD),
        s = (0, sO.D)({ surface: "sku_purchase_badge", applicationId: n.applicationId, skuId: n.id });
    return (0, l.jsx)(sW, {
        sku: n,
        analyticsLocations: r,
        promotion: null != s ? (0, l.jsx)(sM.s, { spec: sV, icon: s.Icon, tooltipText: s.tooltip }) : null,
        ...i,
    });
}
function sz(e) {
    let { sku: n, ...t } = e,
        r = i.useMemo(() => {
            switch (n?.tenantMetadata?.collectibles?.type) {
                case sP.R.PROFILE_EFFECT:
                case sP.R.NAMEPLATE:
                case sP.R.BUNDLE:
                case sP.R.PROFILE_FRAME:
                    return;
                case sP.R.AVATAR_DECORATION:
                    return sF.ML;
                default:
                    return s()(sF.ML, sF.ZY);
            }
        }, [n?.tenantMetadata?.collectibles?.type]);
    return (0, l.jsx)(sW, { sku: n, skuPreviewStyle: r, ...t });
}
function sY(e) {
    let { sku: n, ...t } = e;
    return (0, l.jsx)(sW, { sku: n, skuPreviewStyle: sU.MO, ...t });
}
function sq(e) {
    let { sku: n, ...t } = e,
        [r, s] = i.useState(!1);
    switch (n.productLine) {
        case T.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(sH, { sku: n, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...t });
        case T.EZt.COLLECTIBLES:
            return (0, l.jsx)(sz, { sku: n, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...t });
        case T.EZt.PREMIUM:
            return (0, l.jsx)(sY, { sku: n, isHoveringOrFocusing: r, setIsHoveringOrFocusing: s, ...t });
        default:
            return null;
    }
}
var sK = t(609965);
function sX(e) {
    let { wishlist: n, guildId: t, handleOpenUserProfileModal: i, analyticsLocations: r, className: o, items: d } = e,
        u = (0, a.bG)([y.default], () => y.default.getUser(n?.userId));
    return (0, l.jsx)("ul", {
        className: s()(sK.Vg, o),
        children: d.map((e, s) => {
            let { sku: a, itemSource: o } = e;
            return (0, l.jsx)(
                sN.dB,
                {
                    newValue: { positionInSection: s, skuId: a.id, itemSource: o, productLine: a.productLine },
                    children: (0, l.jsx)(sq, {
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
var sZ = t(927813);
let s$ = 90 * sZ.A.Millis.DAY,
    sJ = 90 * sZ.A.Millis.DAY;
var sQ = t(469364);
function s0(e) {
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
                    [en.A],
                    () => (null != t ? new Date(en.A.getWishlistSettings(n, t.id)?.updated_at ?? 0).valueOf() : 0),
                    [t, n],
                ),
                [u, c] = (0, eG.Wl)(
                    eT.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
                    { showAfterTimestamp: d + sJ, cooldownDurationMs: s$ },
                    void 0,
                    !0,
                ),
                g = u === eT.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS;
            return {
                isVisible: l && (g || s || !r),
                isDismissible: r,
                markAsDismissed: i.useCallback(() => {
                    (o(!1), c(eF.i.USER_DISMISS));
                }, [c]),
            };
        })({ userId: n.id, wishlist: r, hasFetchedWishlist: s });
    return c
        ? (0, l.jsx)(s1, {
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
function s1(e) {
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
                { recommendations: a, status: o } = (0, sE.Ul)({ userId: n, numItems: l, source: s }),
                d = i.useMemo(() => new Set(t?.items.map((e) => e.skuId) ?? []), [t]),
                u = "success" === o && !d.has(lP.pe.TIER_2);
            return {
                items: i.useMemo(() => {
                    let e = a.filter((e) => !d.has(e.id)).map((e) => ({ sku: e, itemSource: "recommendation" }));
                    return (u && e.unshift({ sku: (0, sm.rI)(), itemSource: "takeover" }), e.slice(0, r));
                }, [a, d, u, r]),
                status: o,
            };
        })({
            userId: n.id,
            wishlist: r,
            numWishlistItemsToRecommend: 15,
            maxWishlistItemsToShow: 8,
            source: Y.B5.USER_PROFILE,
        });
    return 0 === g.length
        ? null
        : (0, l.jsxs)("div", {
              className: s()(sQ.kL, d),
              children: [
                  (0, l.jsxs)("div", {
                      className: sQ.wx,
                      children: [
                          (0, l.jsx)(eY.E, {
                              variant: "text-xs/normal",
                              color: "text-subtle",
                              children: eU.intl.string(eU.t["+GB8Kt"]),
                          }),
                          u &&
                              (0, l.jsx)("div", {
                                  className: sQ.b,
                                  children: (0, l.jsx)(sy.J, { size: "xs", onClick: c }),
                              }),
                      ],
                  }),
                  (0, l.jsx)(sN.dB, {
                      newValue: {
                          impressionSessionId: o,
                          surface: "user_profile_wishlist_suggestions_grid",
                          wishlistOwnerId: n.id,
                          wishlistId: r?.id,
                          analyticsLocations: a,
                      },
                      children: (0, l.jsx)(sX, {
                          items: g,
                          guildId: t,
                          wishlist: r,
                          className: s()(sQ.Vg, sQ.e6),
                          analyticsLocations: a,
                      }),
                  }),
              ],
          });
}
var s2 = t(477782),
    s5 = t(980707),
    s9 = t(431194);
function s3(e) {
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
                    n.filter(em.Vq).map((e) => {
                        let n = nZ.Ay.getApplicationIconURL({ id: e.id, icon: e.icon, size: 20 });
                        return {
                            id: `browse-social-layer-storefront-${e.id}`,
                            label: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: e.name }),
                            iconLeft: null != n ? () => (0, l.jsx)("img", { className: s9.I, src: n, alt: "" }) : n_.U,
                            leadingAccessory: null != n ? { type: "image", src: n } : { type: "icon", icon: n_.U },
                            action: () => t?.(e.id),
                        };
                    }),
                [n, t],
            );
        })({ applications: (0, ec.A)(o), handleOpenGameShop: s }),
        m = i.useMemo(
            () =>
                (0, l.jsxs)(s2.rX, {
                    children: [
                        null != r &&
                            (0, l.jsx)(s2.Dr, {
                                id: "browse-collectibles-shop",
                                label: eU.intl.string(eU.t["5upuqx"]),
                                iconLeft: n_.U,
                                leadingAccessory: { type: "icon", icon: n_.U },
                                action: r,
                            }),
                        null != a &&
                            (0, l.jsx)(s2.Dr, {
                                id: "add-nitro-to-wishlist",
                                label: eU.intl.string(eU.t.lG6a5x),
                                iconLeft: na.t,
                                leadingAccessory: { type: "icon", icon: na.t },
                                action: a,
                            }),
                        null != s &&
                            g.map((e) => {
                                let { id: n, label: t, iconLeft: i, leadingAccessory: r, action: s } = e;
                                return (0, l.jsx)(
                                    s2.Dr,
                                    { id: n, label: t, iconLeft: i, leadingAccessory: r, action: s },
                                    n,
                                );
                            }),
                    ],
                }),
            [r, s, a, g],
        );
    return (0, l.jsx)(tf.Y, {
        targetElementRef: d,
        position: "bottom",
        onRequestOpen: () => c(!0),
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(s5.W, {
                "data-menu-migrated": !0,
                navId: "wishlist-overflow-menu",
                onSelect: void 0,
                onClose: n,
                "aria-label": eU.intl.string(eU.t.GdNkvG),
                children: m,
            });
        },
        children: (e) =>
            (0, l.jsx)(tl.$, {
                buttonRef: d,
                variant: t,
                size: "sm",
                icon: u ? te.P : lK.a,
                iconPosition: "end",
                text: n,
                ...e,
            }),
    });
}
var s8 = t(365199);
let s7 = rp.A.getArticleURL(T.MVz.CUSTOM_PROFILES_WISHLIST);
function s6(e) {
    let { isOwner: n, isWishlistPublic: t, onToggleVisibility: r } = e,
        s = i.useRef(null),
        { analyticsLocations: a } = (0, b.Ay)(j.A.USER_PROFILE_WISHLIST),
        o = i.useMemo(
            () =>
                n
                    ? (0, l.jsxs)(s2.rX, {
                          children: [
                              (0, l.jsx)(s2.fP, {
                                  id: "wishlist-privacy-setting",
                                  label: eU.intl.string(eU.t.b2nFyA),
                                  subtext: eU.intl.string(eU.t.dw58pE),
                                  checked: t,
                                  action: r,
                              }),
                              (0, l.jsx)(s2.bX, {}),
                              (0, l.jsx)(s2.Dr, {
                                  id: "wishlist-privacy-setting2",
                                  label: eU.intl.string(eU.t.hvVgAZ),
                                  icon: nH.I,
                                  trailingIndicator: { type: "icon", icon: nH.I },
                                  action: () => window.open(s7),
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
              children: (0, l.jsx)(tf.Y, {
                  targetElementRef: s,
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, l.jsx)(s5.W, {
                          "data-menu-migrated": !0,
                          navId: "wishlist-overflow-menu",
                          onSelect: void 0,
                          onClose: n,
                          "aria-label": eU.intl.string(eU.t.GdNkvG),
                          children: o,
                      });
                  },
                  children: (e) =>
                      (0, l.jsx)(nM.q3, {
                          buttonRef: s,
                          icon: s8.MoreHorizontalIcon,
                          tooltipText: eU.intl.string(eU.t["UKOtz+"]),
                          action: "PRESS_OPTIONS",
                          ...e,
                      }),
              }),
          });
}
var s4 = t(526725);
function ae(e) {
    let { socialLayerStorefrontApplicationIds: n, handleOpenShop: t, handleOpenGameShop: i } = e;
    return n.length > 0
        ? (0, l.jsx)(s3, {
              title: eU.intl.string(eU.t["i/yzHs"]),
              handleOpenCollectiblesShop: t,
              handleOpenGameShop: i,
              socialLayerStorefrontApplicationIds: n,
          })
        : (0, l.jsx)(tl.$, {
              variant: "secondary",
              size: "sm",
              icon: n_.U,
              text: eU.intl.string(eU.t["i/yzHs"]),
              onClick: t,
          });
}
function an(e) {
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
        className: s4.$s,
        children: [
            n &&
                (t.length > 0 || null != a
                    ? (0, l.jsx)(s3, {
                          title: eU.intl.string(eU.t.SDUwM0),
                          handleOpenCollectiblesShop: r,
                          handleOpenGameShop: t.length > 0 ? s : void 0,
                          handleAddNitroToWishlist: a,
                          socialLayerStorefrontApplicationIds: t,
                      })
                    : (0, l.jsx)(tl.$, {
                          variant: "secondary",
                          size: "sm",
                          icon: nz.j,
                          text: eU.intl.string(eU.t.SDUwM0),
                          onClick: r,
                      })),
            (0, l.jsx)(s6, { isOwner: !0, isWishlistPublic: i, onToggleVisibility: o }),
        ],
    });
}
function at(e) {
    let { application: n, handleOpenGameShop: t, handleOpenGameShopMouseDown: r } = e,
        s = i.useCallback(() => {
            t(n.id);
        }, [n, t]),
        a = i.useCallback(() => {
            r(n.id);
        }, [n, r]);
    return (0, l.jsx)(tl.$, {
        variant: "primary",
        size: "sm",
        icon: n_.U,
        text: eU.intl.formatToPlainString(eU.t["HDT/rg"], { applicationName: n.name }),
        onClick: s,
        onMouseDown: a,
    });
}
function al(e) {
    let {
            showEditingControls: n,
            socialLayerStorefrontApplicationIds: t,
            handleOpenShop: r,
            handleOpenGameShop: s,
            handleOpenGameShopMouseDown: a,
        } = e,
        o = (0, r8.Us)() === T.BRT.OVERLAY,
        d = (0, ec.A)(t),
        u = i.useMemo(() => {
            if (o || 0 === t.length) return null;
            let e = d.reduce((e, n) => (null == n || (e[n.id] = n), e), {});
            if (1 === t.length) {
                let n = e[t[0]];
                return null == n
                    ? null
                    : (0, l.jsx)(at, { application: n, handleOpenGameShop: s, handleOpenGameShopMouseDown: a });
            }
            return (0, l.jsx)(s3, {
                title: eU.intl.string(eU.t.FkjcWY),
                variant: "primary",
                handleOpenGameShop: s,
                socialLayerStorefrontApplicationIds: t,
            });
        }, [o, t, s, d, a]);
    return (0, l.jsxs)("div", {
        className: s4.y7,
        children: [
            (0, l.jsxs)("div", {
                className: s4.q6,
                children: [
                    (0, l.jsx)(tn.D, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: eU.intl.string(eU.t.HGnLLT),
                    }),
                    (0, l.jsx)(eY.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: eU.intl.string(eU.t["/X1ny6"]),
                    }),
                ],
            }),
            (n || null != u) &&
                (0, l.jsxs)(r0.e, {
                    size: "sm",
                    children: [
                        n &&
                            (0, l.jsx)(tl.$, {
                                variant: "primary",
                                size: "sm",
                                icon: n_.U,
                                text: eU.intl.string(eU.t.ZbS4QB),
                                onClick: r,
                            }),
                        u,
                    ],
                }),
        ],
    });
}
function ai(e) {
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
        m = (0, a.bG)([en.A], () => en.A.getWishlistSettings(r.id, g)),
        { trackUserProfileWishlistAction: f } = (0, Q.NJ)(),
        p = !1 === r.nsfwAllowed,
        [h, x] = i.useState(!0);
    i.useEffect(() => {
        m?.visibility != null && x(m.visibility === rQ.a.PUBLIC);
    }, [m?.visibility]);
    let A = i.useCallback(
            (e) => {
                let { wishlistId: n, action: t, productLines: l } = e;
                null != n && f({ wishlistId: n, action: t, productLines: l });
            },
            [f],
        ),
        v = (0, sd.A)({ wishlistId: g, onAction: A, productLines: null != s ? (0, si.y9)(s) : null }),
        I = i.useCallback(() => {
            if (null == g) return;
            let e = h ? rQ.a.PRIVATE : rQ.a.PUBLIC;
            (x(!h),
                st.A.updateWishlistVisibility(g, e),
                f({
                    wishlistId: g,
                    action: h ? i1.Mq.WISHLIST_TOGGLE_PRIVATE : i1.Mq.WISHLIST_TOGGLE_PUBLIC,
                    productLines: null != s ? (0, si.y9)(s) : void 0,
                }));
        }, [g, h, f, s]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            !h &&
                (0, l.jsxs)("div", {
                    className: s4.lm,
                    children: [
                        (0, l.jsx)(r1.EyeSlashIcon, { size: "custom", width: 16, height: 16 }),
                        (0, l.jsx)(eY.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.RX7D9h),
                        }),
                    ],
                }),
            h &&
                p &&
                (0, l.jsxs)("div", {
                    className: s4.lm,
                    children: [
                        (0, l.jsx)(r2.CircleInformationIcon, { size: "custom", width: 16, height: 16 }),
                        (0, l.jsx)(eY.E, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: eU.intl.string(eU.t.d78ChW),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                ref: v,
                className: s4.U1,
                children: [
                    (0, l.jsx)(eY.E, {
                        variant: "text-xs/semibold",
                        color: "text-subtle",
                        children: eU.intl.format(eU.t.r6Y1Lg, { count: s.items.length }),
                    }),
                    n
                        ? (0, l.jsx)(an, {
                              showEditingControls: t,
                              socialLayerStorefrontApplicationIds: o,
                              isWishlistPublic: h,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                              handleAddNitroToWishlist: c,
                              handleToggleWishlistVisibility: I,
                          })
                        : (0, l.jsx)(ae, {
                              socialLayerStorefrontApplicationIds: o,
                              handleOpenShop: d,
                              handleOpenGameShop: u,
                          }),
                ],
            }),
        ],
    });
}
function ar(e) {
    let { profileOwner: n, guildId: t } = e,
        r = i.useRef(null);
    (0, sa.i)({ containerRef: r, itemType: "WISHLIST_ITEM" });
    let { wishlistId: o, currentUser: d } = (0, a.cf)([en.A, y.default], () => ({
            wishlistId: en.A.getFirstWishlistId(n.id),
            currentUser: y.default.getCurrentUser(),
        })),
        { analyticsLocations: u } = (0, b.Ay)(),
        c = (0, r5.A)(() => ((0, ra.aS)()?.enabled === !0 ? (ss.A.getEntry(n.id)?.lastViewedAt ?? null) : null));
    i.useEffect(() => {
        (0, sr.Z)(n.id);
    }, [n.id]);
    let g = (0, so.A)(n.id),
        { wishlist: m, wasFetched: f, error: p } = (0, Y.fw)({ wishlistId: o, userId: n.id }),
        [h, x] = i.useState(!1);
    (f && !h && x(!0), (0, sl.A)(m));
    let A = (function (e) {
            let { wishlist: n, profileOwner: t, currentUser: l } = e,
                r = t.id === l?.id,
                s = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
                o = (0, a.bG)([r4.A], () => r4.A.getDetectableIdsToApplicationIds()),
                d = i.useMemo(() => {
                    let e = [];
                    for (let t of n?.items ?? [])
                        (0, r6.$)(t) && null != o[t.sku.applicationId] && e.push(t.sku.applicationId);
                    return e;
                }, [n, o]),
                u = (0, se.w)({ userIds: s }),
                c = (0, se.mn)({ userIds: s }),
                g = (0, se.tR)(s),
                m = (0, se.rY)(),
                f = (0, se.qx)(),
                p = (0, se.px)();
            return i.useMemo(
                () => (0, rb.uniq)([...d, ...u, ...c, ...g, ...(r ? [...m, ...f, ...p] : [])].filter(em.Vq)),
                [d, u, c, g, m, f, p, r],
            );
        })({ wishlist: m, profileOwner: n, currentUser: d }),
        v = (0, r5.A)(() => (0, rJ.A)()),
        I = i.useCallback(() => {
            (0, nw.Cz)({ analyticsLocations: u, analyticsSource: j.A.USER_PROFILE_WISHLIST });
        }, [u]),
        C = i.useCallback((e) => {
            (0, sn.G)({ applicationId: e });
        }, []),
        N = i.useCallback((e) => {
            ((0, lN.closeUserProfileModal)(), (0, sn.default)({ applicationId: e }));
        }, []),
        { handleToggle: E } = (0, r3.c)({
            userId: d?.id,
            skuId: lP.pe.TIER_2,
            nuxGraphic: r7.g,
            onNuxShow: r9.D,
            location: j.A.USER_PROFILE_WISHLIST,
        });
    if (null == d || null != p) return null;
    let S = null == m || 0 === m.items.length;
    return (0, l.jsxs)(rG.K, {
        scrollerRef: r,
        className: s()({ [s4.XG]: !S }),
        fade: !0,
        children: [
            S
                ? (0, l.jsx)(al, {
                      showEditingControls: g,
                      socialLayerStorefrontApplicationIds: A,
                      handleOpenShop: I,
                      handleOpenGameShop: N,
                      handleOpenGameShopMouseDown: C,
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(su.A, { scrollerRef: r }),
                          (0, l.jsx)(ai, {
                              isOwner: d?.id === n.id,
                              showEditingControls: g,
                              profileOwner: n,
                              wishlist: m,
                              socialLayerStorefrontApplicationIds: A,
                              handleOpenShop: I,
                              handleOpenGameShop: N,
                              handleAddNitroToWishlist: (0, si.C3)(m, lP.pe.TIER_2) ? void 0 : E,
                          }),
                          (0, l.jsx)(sC, {
                              items: m.items,
                              profileOwner: n,
                              guildId: t,
                              showEditingControls: g,
                              lastViewedAt: c,
                          }),
                      ],
                  }),
            g &&
                (0, l.jsx)(s0, {
                    user: n,
                    guildId: t,
                    wishlist: m,
                    hasFetchedWishlist: h,
                    analyticsLocations: u,
                    impressionSessionId: v,
                    className: S ? s4._E : s4.HZ,
                }),
        ],
    });
}
var as = t(131058);
function aa(e) {
    let { user: n, currentUser: t, section: i, displayProfile: r, guildId: s, channelId: a, onClose: o } = e;
    return i === i1.RP.ACTIVITY
        ? (0, l.jsx)(rU, { user: n, currentUser: t, displayProfile: r, guildId: s, channelId: a, onClose: o })
        : i === i1.RP.MUTUAL_FRIENDS
          ? (0, l.jsx)(rY, { user: n, guildId: s, channelId: a, onClose: o })
          : i === i1.RP.MUTUAL_GUILDS
            ? (0, l.jsx)(rZ, { user: n, onClose: o })
            : i === i1.RP.WIDGETS
              ? (0, l.jsx)(r$.A, { user: n, guildId: s, channelId: a })
              : i === i1.RP.WISHLIST
                ? (0, l.jsx)(ar, { profileOwner: n, guildId: s })
                : null;
}
function ao(e) {
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
        { trackUserProfileAction: g } = (0, Q.NJ)(),
        { shouldLogExposure: p } = (0, ro.A)(n);
    (0, rd.A)(n);
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
            className: as.kL,
            children: [
                p && (0, l.jsx)(ra.kM, { location: "UserProfileModalV2Tabs" }),
                (0, l.jsx)(c.Ip, {
                    orientation: "horizontal",
                    className: as.gU,
                    fade: !0,
                    scrollbarGutter: !1,
                    children: (0, l.jsx)(rs.V, {
                        type: "top",
                        look: "custom",
                        selectedItem: I.section,
                        onItemSelect: function (e) {
                            ri.A.hasUnsavedChanges() && I.section === i1.RP.WIDGETS
                                ? (0, lB.VQ)()
                                : (g({ action: "PRESS_SECTION", section: e }), v(e));
                        },
                        children: o.map((e) =>
                            (0, l.jsxs)(
                                rs.V.Item,
                                {
                                    className: as.YU,
                                    id: e.section,
                                    "aria-label":
                                        !0 === e.showNewContentDot
                                            ? eU.intl.formatToPlainString(eU.t.c4JwHL, { tabName: e.text })
                                            : e.text,
                                    children: [
                                        e.text,
                                        !0 === e.showNewContentDot && (0, l.jsx)(ru.A, { className: as.Pf }),
                                    ],
                                },
                                e.section,
                            ),
                        ),
                    }),
                }),
                (0, l.jsx)(rs.V.Panel, {
                    id: I.section,
                    "aria-label": I.text,
                    className: as.NM,
                    children: (0, l.jsx)(f.F, {
                        component: (0, l.jsx)(m.A, { children: (0, l.jsx)(f.H, { children: I.text }) }),
                        children: (0, l.jsx)(aa, {
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
var ad = t(933832),
    au = t(972213),
    ac = t(384377);
let ag = {
        [i1.jM.WIDGET_ADDED]: {
            message: eU.intl.string(eU.t.fFP1Uy),
            icon: (0, l.jsx)(ad.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [i1.jM.WIDGET_REMOVED]: {
            message: eU.intl.string(eU.t.zzsK7h),
            icon: (0, l.jsx)(ad.CheckmarkLargeIcon, { size: "sm", color: h.A.colors.STATUS_POSITIVE.css }),
        },
        [i1.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eU.intl.string(eU.t["84MExs"]),
            icon: (0, l.jsx)(au.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: sR.Ck.FAILURE,
        },
        [i1.jM.SOMETHING_WENT_WRONG]: {
            message: eU.intl.string(eU.t.F8FvUy),
            icon: (0, l.jsx)(au.XLargeIcon, { size: "sm", color: h.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: sR.Ck.FAILURE,
        },
    },
    am = (e) => {
        let { className: n } = e,
            t = (0, ac.fu)(),
            r = (0, a.bG)([nx.Ay], () => nx.Ay.useReducedMotion),
            [s, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== t ? (o(!0), c(ag[t]), ii.O.announce(ag[t].message)) : o(!1);
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
            i.useEffect(() => () => (0, ac.XA)(null), []),
            i.useEffect(() => {
                if (s) {
                    let e = setTimeout(() => {
                        (0, ac.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [s]),
            (0, l.jsx)(l.Fragment, {
                children: g(
                    (e, t) =>
                        t &&
                        null !== d &&
                        (0, l.jsx)(ik.animated.div, { className: n, style: e, children: (0, l.jsx)(i7, { ...d }) }),
                ),
            })
        );
    };
var af = t(297413),
    ap = t(465829),
    ah = t(826673),
    ax = t(609425),
    aA = t(73392),
    av = t(576705),
    aI = t(997394);
function aj(e) {
    return null == e || "" === e ? void 0 : e;
}
function ab(e) {
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
        j = J.Ay.canUsePremiumProfileCustomization(p),
        C = (0, ta.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: N, permissionsLoaded: E } = (0, a.cf)([av.A, q.A], () => {
            if (!v || null == I) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = q.A.getGuild(I);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: av.A.can(T.xBc.CHANGE_NICKNAME, e) || av.A.can(T.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        S = v && !N && E,
        {
            value: P,
            previewValue: k,
            fallbackDisplayName: R,
            onCommit: O,
        } = ((t = null != (n = x?.guildId ?? null)),
        (r = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.globalName ?? null)),
        (o = (0, a.bG)([ej.Ay], () => (null != n ? (ej.Ay.getMember(n, p.id)?.nick ?? null) : null))),
        (d = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingGlobalName)),
        (u = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n).pendingNickname)),
        (m = (g = void 0 !== (c = t ? u : d) ? c : t ? o : r) ?? ""),
        (f = t ? (aj(r) ?? p.username) : p.username),
        {
            value: m,
            previewValue: aj(g) ?? f,
            fallbackDisplayName: f,
            onCommit: i.useCallback(
                (e) => {
                    t ? (0, nf.p)({ nickname: e.trim(), guildId: n ?? void 0 }) : (0, nf.p)({ globalName: e.trim() });
                },
                [t, n],
            ),
        }),
        L = (0, a.bG)([eb.A], () => eb.A.getErrors(I ?? null)),
        _ = (0, nm.EC)(I ?? null),
        w = v ? L.nick?.[0] : L.global_name?.[0],
        M = _?.nick?.[0],
        D = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(I).pendingDisplayNameStyles),
        G = (0, ax.A)({ userId: p.id, guildId: I, pendingDisplayNameStyles: D }),
        F = (0, aA.a)({ displayNameStyles: G, compensateForSafari: !1 }),
        U = eU.intl.string(v ? eU.t.mq6Cg9 : eU.t.XuZU7A),
        V = v ? eU.intl.string(eU.t.YcDKr8) : p.username,
        B = i.useRef(null),
        W = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    C &&
                        (0, ah.Dr)(eT.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: eF.i.INDIRECT_ACTION,
                        }),
                    (0, tP.L)({ analyticsLocations: A, guildId: I, stackingBehavior: "stack", returnRef: B }));
            },
            [A, I, C],
        ),
        H = {
            icon: n8.V,
            tooltip: eU.intl.string(eU.t.lqKKI2),
            "aria-label": eU.intl.string(eU.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: W,
            buttonRef: B,
        },
        z = S
            ? (0, l.jsx)("span", {
                  className: aI.Cs,
                  children: (0, l.jsx)(n4.LockIcon, { size: "refresh_sm", color: h.A.colors.ICON_SUBTLE }),
              })
            : null;
    return (0, l.jsx)("div", {
        className: nA.kL,
        children: (0, l.jsx)(eY.E, {
            variant: ap.gU.lg,
            color: "none",
            className: F,
            children: (0, l.jsx)(iZ.w, {
                value: P,
                onCommit: O,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                fullWidth: !1,
                paddingBlock: "none",
                size: "md",
                scrollIntoViewOnFocus: !0,
                preview: (e, n) => {
                    let { focused: t } = n;
                    return (0, l.jsx)(ap.c$, {
                        user: p,
                        guildId: I,
                        displayName: t ? (aj(e) ?? R) : k,
                        size: "lg",
                        pendingDisplayNameStyles: D,
                        className: s()(aI.dt, { [aI.jW]: t && "" === e }),
                        displayNameTrailing: z,
                    });
                },
                placeholder: V,
                label: U,
                maxLength: T.zzC,
                textVariant: "inherit",
                trailing: N && j ? H : void 0,
                error: w,
                helperText: S ? eU.intl.string(eU.t.gzjxQi) : M,
                disabled: !N,
            }),
        }),
    });
}
var aC = t(628072);
function ay(e) {
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
        (r = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(n).pendingPronouns)),
        (o = t ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, nf.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        f = u?.guildId != null,
        p = null != g && g.length > 0,
        h = eU.intl.string(f ? eU.t.AXiE0i : eU.t["76Aqhl"]);
    return (0, l.jsx)("div", {
        className: s()(nA.kL, nA.oE, aC.k),
        children: (0, l.jsx)(iZ.w, {
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
            preview: p ? (0, l.jsx)(ap.n2, { pronouns: g }) : null,
            label: eU.intl.string(eU.t["rniRE+"]),
            placeholder: h,
            maxLength: T.VE5,
            spellCheck: !1,
        }),
    });
}
var aN = t(305866),
    aE = t(453318),
    aS = t(145497),
    aP = t(685073),
    aT = t(318785),
    ak = t(534400),
    aR = t(436921),
    aO = t(743981),
    aL = t(295930),
    a_ = t(594615);
let aw = "no-server-tag";
function aM(e) {
    let { buttonRef: n, guildId: t, guildTag: i, guildBadge: r, ...a } = e,
        o = (0, aR.j)({ location: "UserProfileModalV2GuildTagSelect" }),
        d = null == i || null == t;
    return (0, l.jsx)(e8.D, {
        innerRef: n,
        className: s()(o ? aL.qJ : aL.L5, { [aL.wK]: d }),
        "aria-label": d ? eU.intl.string(eU.t.Pdd1nd) : eU.intl.formatToPlainString(eU.t.R1AXap, { tag: i }),
        "aria-haspopup": "dialog",
        ...a,
        children: (0, l.jsxs)(eY.E, {
            variant: o || d ? "text-xs/normal" : "text-xs/semibold",
            color: d ? "input-placeholder-text-default" : "text-default",
            className: aL.W3,
            tag: "span",
            children: [
                d
                    ? eU.intl.string(eU.t.Pdd1nd)
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(
                                  ak.Z9,
                                  {
                                      src: (0, aP.gC)(t, r, aO.Sl.SIZE_14),
                                      size: aO.Sl.SIZE_14,
                                      className: aL.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, aP.gC)(t, r, aO.Sl.SIZE_14) ?? t,
                              ),
                              i,
                          ],
                      }),
                (0, l.jsx)(lK.a, { size: "xs", color: "currentColor", className: aL.u4 }),
            ],
        }),
    });
}
function aD() {
    let e = i.useRef(null),
        n = (0, aT.b)(),
        t = i.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        r = (0, a.cf)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (0, aP.Zo)(e?.primaryGuild);
        }),
        s = r.guildId ?? null,
        o = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(null).pendingPrimaryGuildId),
        d = void 0 !== o ? o : s,
        u = null != d ? (t.get(d) ?? null) : null,
        c = null == u && d === s,
        g = u?.profile?.tag ?? (c ? (r.tag ?? null) : null),
        m = u?.profile?.badge ?? (c ? r.badge : void 0),
        f = i.useCallback(
            (e) =>
                e.id === aw
                    ? (0, l.jsx)("div", {
                          className: a_.uN,
                          children: (0, l.jsx)(eY.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: aL.ve,
                              children: e.label,
                          }),
                      })
                    : (0, l.jsx)(l5.c, { ...e }),
            [],
        ),
        p = i.useMemo(
            () => [
                { id: aw, label: eU.intl.string(eU.t.VxdWWH), value: aw },
                ...n.flatMap((e) => {
                    let n = e.profile?.tag;
                    if (null == n) return [];
                    let t = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, l.jsx)(aS.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, l.jsx)(ak.o9, { guildId: e.id, guildTag: n, guildBadge: t }),
                        },
                    ];
                }),
            ],
            [n],
        );
    return 0 === n.length && null == s
        ? null
        : (0, l.jsx)(tf.Y, {
              targetElementRef: e,
              position: "bottom",
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, l.jsx)(aN.l, {
                      className: aL.yt,
                      "aria-label": eU.intl.string(eU.t.Fo0g9x),
                      children: (0, l.jsxs)(aE.iS, {
                          selectionMode: "single",
                          options: p,
                          onSelectionChange: (e) => {
                              ((0, nf.p)({ primaryGuildId: e === aw ? null : e }), n());
                          },
                          children: [
                              (0, l.jsx)(aE.a3, {
                                  label: eU.intl.string(eU.t["5h0QOP"]),
                                  hideLabel: !0,
                                  placeholder: eU.intl.string(eU.t["5h0QOP"]),
                                  autoFocus: !0,
                              }),
                              (0, l.jsx)(aE.X2, { renderListItem: f }),
                          ],
                      }),
                  });
              },
              children: (n) => (0, l.jsx)(aM, { buttonRef: e, guildId: d, guildTag: g, guildBadge: m, ...n }),
          });
}
var aG = t(956495);
function aF(e) {
    let { displayProfile: n, nickname: t, displayNameStylesOverride: i, ...r } = e;
    return (0, l.jsx)(ap.Ay, {
        ...r,
        guildId: n?.guildId ?? void 0,
        displayName: t,
        displayNameSize: "lg",
        pronouns: n?.pronouns,
        pendingDisplayNameStyles: i,
    });
}
function aU(e) {
    let n = (0, a.bG)([eb.A], () => eb.A.getTryItOutChanges().tryItOutDisplayNameStyles);
    return (0, l.jsx)(aF, { ...e, displayNameStylesOverride: n });
}
function aV(e) {
    let { user: n, displayProfile: t, trailing: i } = e,
        r = n.isProvisional
            ? null
            : (0, l.jsx)(af.A, {
                  user: n,
                  forceUsername: !0,
                  className: aG.a1,
                  usernameClass: aG.eb,
                  discriminatorClass: aG.sw,
                  hideBotTag: !0,
              });
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(ab, { displayProfile: t, user: n }),
            (0, l.jsxs)("div", {
                className: s()(aG.AK, aG.j6),
                children: [r, (0, l.jsx)(ap.Ce, {}), (0, l.jsx)(ay, { displayProfile: t }), (0, l.jsx)(aD, {}), i],
            }),
        ],
    });
}
function aB(e) {
    let { editingMode: n, ...t } = e;
    switch (n) {
        case "read-only":
            return (0, l.jsx)(aF, { ...t });
        case "try-it-out":
            return (0, l.jsx)(aU, { ...t });
        case "edit":
            return (0, l.jsx)(aV, { ...t });
        default:
            return (0, em.xb)(n);
    }
}
var aW = t(97808),
    aH = t(22231),
    az = t(601255),
    aY = t(562819),
    aq = t(19575),
    aK = t(339984),
    aX = t(329801),
    aZ = t(884362);
let a$ = aq.Ay.getEnableHardwareAcceleration() ? aW.Js : aW.eu;
function aJ(e) {
    Promise.resolve().then(() => requestAnimationFrame(e));
}
function aQ(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(s5.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eU.intl.string(eU.t.YAgq3W),
        children: (0, l.jsx)(s2.rX, { children: t }),
    });
}
function a0(e) {
    let { user: n, guildId: t } = e,
        { avatarProps: r, eventHandlers: o } = (0, eB.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        m = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: n, guildId: t, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, b.Ay)(),
                u = null != t,
                c = (0, a.bG)([ej.Ay], () => (null != t ? ej.Ay.getMember(t, n.id) : null)),
                g = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t ?? void 0).pendingAvatar),
                m = u ? c?.avatar : n.avatar,
                f = (0, ev.z5)(g, m),
                p = u && null != n.avatar,
                h = J.Ay.canUsePremiumProfileCustomization(n),
                x = h || null == t,
                A = h || null == t,
                v = (0, a.bG)([q.A], () => (null != t ? q.A.getGuild(t) : null)),
                I = (0, ev.a4)({ user: n }),
                j = (0, ev.a4)({ user: n, guildId: t ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, ev.CP)(t ?? void 0),
                y = void 0 !== C,
                N = null != (0, az.A)(y ? C : j) && (y ? null != C : null != j),
                E = u && null != I,
                S = i.useCallback(() => {
                    (r(),
                        aJ(() =>
                            (0, td.XD)({
                                uploadType: aK.HL.AVATAR,
                                analyticsSource: o,
                                guildId: t ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, o, t, s]),
                P = i.useCallback(() => {
                    (r(),
                        aJ(() =>
                            (0, aY.L)({
                                analyticsLocations: d,
                                guild: v ?? void 0,
                                stackingBehavior: "stack",
                                returnRef: s,
                            }),
                        ));
                }, [r, d, v, s]),
                T = i.useCallback(() => {
                    (r(),
                        (0, td.rM)(null, m, (e) => (0, nf.p)({ guildId: t ?? void 0, avatar: e })),
                        (0, ev.WU)(p ? "reset" : "remove"));
                }, [r, t, m, p]),
                k = i.useCallback(() => {
                    (r(), (0, nf.p)({ guildId: t ?? void 0, avatarDecoration: null }));
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, l.jsx)(
                                s2.Dr,
                                { id: "change-avatar", label: eU.intl.string(eU.t["4OynCD"]), action: S },
                                "change-avatar",
                            ),
                        ),
                    A &&
                        e.push(
                            (0, l.jsx)(
                                s2.Dr,
                                { id: "change-decoration", label: eU.intl.string(eU.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            p
                                ? (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.TDjKDm),
                                          action: T,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, l.jsx)(
                                      s2.Dr,
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
                        N &&
                        e.push(
                            E
                                ? (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["2u5yu0"]),
                                          action: k,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["9rx5GO"]),
                                          action: k,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [p, x, A, E, f, N, S, P, T, k]);
        })({ user: n, guildId: t, onClose: m, returnRef: g });
    return 0 === f.length
        ? (0, l.jsx)(eB.A, { ...e })
        : (0, l.jsxs)("div", {
              ...o,
              className: s()(aX.my, aX.vk, aZ.kL, { [aZ.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, l.jsx)(a$, { ...r, imageClassName: s()(aX.Lw, aZ.HU) }),
                  (0, l.jsx)(tf.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: tf.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: m,
                      renderPopout: (e) => (0, l.jsx)(aQ, { ...e, items: f, onMenuClose: m }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: c,
                              className: aZ.r9,
                              children: (0, l.jsx)(n7.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: aH.PencilIcon,
                                  "aria-label": eU.intl.string(eU.t.YAgq3W),
                                  onClick: (e) => {
                                      (e.stopPropagation(), u((e) => !e));
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var a1 = t(514905);
function a2(e) {
    let { onMenuClose: n, items: t, ...i } = e;
    return (0, l.jsx)(s5.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: n,
        onSelect: n,
        "aria-label": eU.intl.string(eU.t.FzU73A),
        children: (0, l.jsx)(s2.rX, { children: t }),
    });
}
function a5(e) {
    let { user: n, guildId: t } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useRef(null),
        c = i.useCallback(() => o(!1), []),
        g = (function (e) {
            let { user: n, guildId: t, onClose: r, returnRef: s } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, b.Ay)(),
                u = (0, ev.N2)({ user: n, guildId: t ?? void 0 }),
                c = (0, ev.Xf)({ user: n, guildId: t ?? void 0 }),
                g = (0, ev.Xf)({ user: n, guildId: void 0 }),
                m = J.Ay.canUsePremiumProfileCustomization(n),
                f = null == t,
                p = f || m,
                h = f || m,
                x = null != t,
                {
                    pendingBanner: A,
                    pendingProfileEffect: v,
                    pendingProfileFrame: I,
                } = (0, a.bG)([eb.A], () => eb.A.getPendingChanges(t ?? void 0)),
                j = (0, a.bG)([en.A], () =>
                    null != t ? en.A.getGuildMemberProfile(n.id, t)?.banner : en.A.getUserProfile(n.id)?.banner,
                ),
                C = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.banner != null),
                N = (0, a.bG)([en.A], () => en.A.getUserProfile(n.id)?.profileEffect != null),
                E = (0, a.bG)([en.A], () => en.A.getUserProfile(n.id)?.profileFrame != null),
                S = (0, ev.Ac)(A, j),
                P = x && C,
                T = x && N,
                k = x && E,
                R = void 0 === v ? null != u : null != v,
                O = void 0 === I ? null != c : null != I,
                L = (0, ev.lw)({
                    pendingValue: I,
                    userValue: g,
                    guildValue: null != t ? c : void 0,
                    guildId: t ?? void 0,
                }),
                _ = (0, w.A)(L?.skuId),
                M = i.useCallback(() => {
                    (r(),
                        (0, td.XD)({
                            uploadType: aK.HL.BANNER,
                            analyticsSource: o,
                            guildId: t ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, o, t, s]),
                D = i.useCallback(() => {
                    (r(),
                        (0, tK.W)({
                            analyticsLocations: d,
                            guild: null != t ? (q.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, t, u, s]),
                G = i.useCallback(() => {
                    (r(), (0, td.rM)(null, j, (e) => (0, nf.p)({ guildId: t ?? void 0, banner: e })));
                }, [r, t, j]),
                F = i.useCallback(() => {
                    (r(), (0, nf.p)({ guildId: t ?? void 0, profileEffect: null }));
                }, [r, t]),
                U = i.useCallback(() => {
                    (r(),
                        (0, le.w)({
                            analyticsLocations: d,
                            guild: null != t ? (q.A.getGuild(t) ?? void 0) : void 0,
                            initialSelectedProfileFrame: _,
                            stackingBehavior: "stack",
                            returnRef: s,
                        }));
                }, [r, d, t, _, s]),
                V = i.useCallback(() => {
                    (r(), (0, nf.p)({ guildId: t ?? void 0, profileFrame: null }));
                }, [r, t]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, l.jsx)(
                                s2.Dr,
                                { id: "change-banner", label: eU.intl.string(eU.t.N0bC3P), action: M },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, l.jsx)(
                                s2.Dr,
                                { id: "change-effect", label: eU.intl.string(eU.t["/6nv6N"]), action: D },
                                "change-effect",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, l.jsx)(
                                s2.Dr,
                                { id: "change-frame", label: eU.intl.string(eU.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        S &&
                        e.push(
                            P
                                ? (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, l.jsx)(
                                      s2.Dr,
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
                                ? (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.zUOlT6),
                                          action: F,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    h &&
                        O &&
                        e.push(
                            k
                                ? (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t.A0pzWn),
                                          action: V,
                                      },
                                      "reset-frame",
                                  )
                                : (0, l.jsx)(
                                      s2.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eU.intl.string(eU.t["8DfADq"]),
                                          action: V,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [P, m, p, h, T, k, S, R, O, M, D, U, G, F, V]);
        })({ user: n, guildId: t, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, l.jsx)(eH.A, { ...e })
        : (0, l.jsxs)("div", {
              className: s()(a1.kL, { [a1.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, l.jsx)(eH.A, { ...e, className: a1.Pr }),
                  (0, l.jsx)(tf.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: tf.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, l.jsx)(a2, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, l.jsx)("div", {
                              ref: d,
                              className: a1.r9,
                              children: (0, l.jsx)(n7.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: aH.PencilIcon,
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
var a9 = t(415916),
    a3 = t(419341),
    a8 = t(732188),
    a7 = t(667049),
    a6 = t(837531),
    a4 = t(186272),
    oe = t(447538);
let on = (e) => e * (2 - e),
    ot = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function ol(e) {
    let { type: n, anchor: t } = e;
    return "staple" !== n || "bottom" !== t;
}
function oi(e) {
    let { displayProfile: n, pendingBanner: t } = e;
    if ((0, eo.Nx)()) return null;
    let i = n?.getPreviewBanner(t, !1, 1024);
    return null == i
        ? null
        : (0, l.jsx)("div", { className: oe.backgroundImage, style: { backgroundImage: `url(${i})` } });
}
function or(e) {
    let { displayProfile: n, profileEffectOverride: t, isHovering: r } = e,
        s = void 0 !== t ? t : n?.profileEffect,
        a = i.useSyncExternalStore(
            (e) => (t$.add(e), () => t$.delete(e)),
            () => tJ,
        );
    return null == s ? null : (0, l.jsx)(L.A, { skuId: s.skuId, isHovering: r, restartKey: a });
}
function os(e) {
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
            editingMode: k,
            isLoading: R = !1,
        } = e,
        O = o.id === d.id,
        L = "edit" === k,
        _ = i.useRef(null),
        w = i.useRef(null),
        M = i.useRef(null);
    i.useEffect(() => {
        if (O) return () => C.A.setState({ isOpen: !1 });
    }, [O]);
    let { isHoveringOrFocusing: G } = (0, U.A)(_),
        [F, H] = i.useState(),
        Y = i.useCallback((e) => {
            let n = e.contentRect.width;
            n <= 350 ? H("compact-xs") : n <= 380 ? H("compact-sm") : H(void 0);
        }, []);
    (0, v.g)(_, Y, [], { fireOnMount: !0 });
    let q = null != F ? ot[F] : void 0,
        Z = i.useMemo(() => A ?? (0, V.A)(), [A]),
        { relationshipType: J, originApplicationId: Q } = (0, a.cf)([K.A], () => ({
            relationshipType: K.A.getRelationshipType(o.id),
            originApplicationId: K.A.getOriginApplicationId(o.id),
        })),
        ee =
            ((n = o.id),
            (t = (0, ei.bG)([es.default], () => es.default.locale)),
            (r = (0, ei.bG)([K.A], () => (K.A.getRelationshipType(n) === T.eA$.FRIEND ? K.A.getSince(n) : null), [n])),
            (0, er.An)(r, t)),
        en = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        et = (0, W.q)({ userId: o.id }),
        el = (0, B.fi)(o.id),
        { appIdentities: ea, connections: eo } = (function (e) {
            let { filteredAppIdentities: n } = (0, eg.A)(e),
                t = (0, ef.A)(e),
                l = i.useMemo(() => new Set(n?.map((e) => e.application_id) ?? []), [n]),
                r = (0, ec.A)([...l]).filter(em.Vq);
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
                            let n = eu.A.get(e.type);
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
        ep = (0, ed.A)(o.id),
        eh = eo.length > 0 || ea.length > 0,
        ex = ep.length > 0,
        eA = L ? a5 : eH.A,
        ev = p?.guildId ?? u,
        eI = {
            user: o,
            displayProfile: p,
            guildId: u,
            channelId: f,
            avatarSize: q?.avatarSize ?? ey.T[eC.d.MODAL_V2].avatarSize,
            avatarDecorationOverride: j,
            avatarOverride: b,
        },
        ej = i.useCallback(() => {
            (0, e9.A)({ user: o, guildId: ev, alt: h });
        }, [h, ev, o]);
    return (0, l.jsxs)("main", {
        className: s()(oe.profile, null != F && oe[F]),
        ref: _,
        "aria-busy": R,
        children: [
            (0, l.jsxs)("div", {
                className: oe.profileHeader,
                children: [
                    (0, l.jsx)("div", {
                        className: oe.profileHeaderBannerContainer,
                        children: (0, l.jsx)(eA, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: eC.d.MODAL_V2,
                            specOverrides: q,
                            pendingBanner: y,
                            pendingAccentColor: N,
                        }),
                    }),
                    L
                        ? (0, l.jsx)(a0, { ...eI })
                        : (0, l.jsx)(eB.A, {
                              ...eI,
                              onOpenAvatar: "read-only" === k ? ej : void 0,
                              imageAnimatingClassName: "try-it-out" === k && null == b ? lG.$T : void 0,
                          }),
                    (0, l.jsx)(e2.A, {
                        user: o,
                        guildId: u,
                        channelId: f,
                        themeType: eC.d.MODAL_V2,
                        hasEntered: x,
                        prompt: O ? Z : null,
                    }),
                ],
            }),
            (0, l.jsxs)(c.Ip, {
                fade: !0,
                className: oe.profileBody,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(aB, {
                                user: o,
                                displayProfile: p,
                                nickname: h,
                                trailing: (0, l.jsx)(eW.A, {
                                    displayProfile: p,
                                    themeType: eC.d.MODAL_V2,
                                    onClose: I,
                                    showPendingBadgeEdits: O,
                                    popoutAnchorRef: x ? w : void 0,
                                    containerRef: M,
                                }),
                                onClose: I,
                                editingMode: k,
                            }),
                            (0, l.jsx)("div", { ref: w }),
                            O && x && (0, l.jsx)(eV, { targetElementRef: M }),
                        ],
                    }),
                    J === T.eA$.PENDING_INCOMING &&
                        (0, l.jsx)(e1.A.Overlay, {
                            className: oe.profileOverlay,
                            children: (0, l.jsx)(eX.A, {
                                user: o,
                                applicationId: Q,
                                guildId: p?.guildId ?? void 0,
                                channelId: f,
                                className: oe.profileBanner,
                            }),
                        }),
                    el.map((e) => {
                        let { applicationId: n } = e;
                        return (0, l.jsx)(
                            e1.A.Overlay,
                            {
                                className: oe.profileOverlay,
                                children: (0, l.jsx)(eX.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: f,
                                    isGameRelationship: !0,
                                    applicationId: n,
                                    className: oe.profileBanner,
                                }),
                            },
                            n,
                        );
                    }),
                    o.isProvisional &&
                        (0, l.jsx)(e1.A.Overlay, {
                            className: oe.profileOverlay,
                            children: (0, l.jsx)(ng, {
                                heading: eU.intl.string(eU.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: { icon: g.E, size: "xs" },
                                className: oe.profileBanner,
                                children: (0, l.jsx)(z.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, l.jsx)(e0.A, { user: o, className: oe.profileBanner }),
                    p?.private &&
                        (0, l.jsx)(e1.A.Overlay, {
                            className: oe.profileOverlay,
                            children: (0, l.jsx)(eQ.A, { username: h }),
                        }),
                    (0, l.jsx)("div", {
                        className: oe.profileButtons,
                        children: (0, l.jsx)(nU, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: m,
                            channelId: f,
                            displayProfile: p,
                            relationshipType: J,
                            onClose: I,
                        }),
                    }),
                    O && "try-it-out" !== k && (0, l.jsx)(ez.A, { isPremiumUser: (0, $.ki)(d) }),
                    !en && (0, l.jsx)(nP, { currentUser: d, displayProfile: p, canEditInPlace: L }),
                    et.length > 0 &&
                        (0, l.jsx)(ng, {
                            heading: eU.intl.string(eU.t["Uv/eTx"]),
                            children: (0, l.jsx)(eK.A, { applicationIds: et }),
                        }),
                    (0, l.jsx)(ng, {
                        heading: eU.intl.string(eU.t.a6XYD9),
                        children: (0, l.jsx)(e$.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: i1.In }),
                    }),
                    null != ee &&
                        (0, l.jsx)(ng, {
                            heading: eU.intl.string(eU.t.wlTO8v),
                            children: (0, l.jsx)(eq, { friendsSinceDate: ee }),
                        }),
                    p?.guildId != null &&
                        (0, l.jsx)(e5.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: oe.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !en &&
                        (L || eh) &&
                        (0, l.jsx)(ng, {
                            heading: eU.intl.string(eU.t["3fe7U5"]),
                            scrollTargetId: i1.bk.CONNECTIONS,
                            children: (0, l.jsx)(n3, {
                                applicationIdentities: ea,
                                connections: eo,
                                userId: o.id,
                                allowEditing: L,
                                className: oe.profileAppConnections,
                            }),
                        }),
                    !en &&
                        ex &&
                        (0, l.jsx)(ng, {
                            heading: eU.intl.string(eU.t.PHjkRE),
                            scrollTargetId: i1.bk.APPS,
                            children: (0, l.jsx)(ns, {
                                applicationRoleConnections: ep,
                                onClose: I,
                                className: oe.profileAppConnections,
                            }),
                        }),
                    (0, l.jsx)(i5, { userId: o.id }),
                ],
            }),
            (0, l.jsx)(or, { displayProfile: p, profileEffectOverride: E, isHovering: G }),
            null != S && (0, l.jsx)(D.A, { frame: S, filterLayer: ol, fadeIn: P }),
        ],
    });
}
function oa(e) {
    let { user: n, displayProfile: t, pendingThemeColors: i, forceShowPremium: r, children: s } = e,
        {
            theme: a,
            primaryColor: o,
            secondaryColor: d,
        } = (0, ea.A)({ user: n, displayProfile: t, pendingThemeColors: i, isPreview: r }),
        { profileThemeStyle: u, profileThemeClassName: c } = (0, ex.A)({
            theme: a,
            themeType: null,
            primaryColor: o,
            secondaryColor: d,
        });
    return (0, l.jsx)("div", { className: c, style: u, children: s });
}
function oo(e) {
    let n,
        t,
        r,
        {
            user: d,
            currentUser: c,
            guildId: g,
            originGuildId: v,
            channelId: C,
            messageId: N,
            roleId: E,
            sessionId: S,
            initialTabSection: P,
            initialScrollTarget: T,
            transitionState: L,
            customStatusPrompt: D,
            openedAt: U,
            onClose: V,
            sourceAnalyticsLocations: B = [],
            themeContainerClassName: W,
        } = e,
        z = d.id === c.id,
        K = i.useCallback(() => (0, a9.A)(z, V), [z, V]),
        {
            guildId: $,
            pendingGuildId: ei,
            isFetching: er,
            handleSelectUserProfile: es,
            handleRetry: ea,
            hasError: eo,
        } = (function (e) {
            let { userId: n, initialGuildId: t } = e,
                [l, r] = i.useState(t),
                [s, o] = i.useState(t),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                m = (0, a.bG)([en.A], () => en.A.getUserProfile(n)?.fetchError?.status ?? null, [n]),
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
                        (0, eA.A)(n, void 0, {
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
        })({ userId: d.id, initialGuildId: g }),
        ed = i.useMemo(() => (null != $ ? { [$]: [d.id] } : {}), [$, d.id]);
    (0, I.Eq)(ed, "UserProfileModalV2");
    let eu = (0, et.X)("UserProfileModalV2"),
        ec = (0, n6.YW)(),
        eg = (0, a.bG)([X.A], () => X.A.hidePersonalInformation),
        em = (0, ep.A)(d.id) && eu,
        ef = (0, eh.W)(d.id),
        ex = eo && !ef,
        ey = em && !eg && !eo && !ec,
        eT = ec ? "try-it-out" : ey ? "edit" : "read-only",
        {
            pendingThemeColors: ek,
            avatarDecorationOverride: eR,
            avatarOverride: eO,
            bannerOverride: eL,
            accentColorOverride: e_,
            profileEffectOverride: ew,
            profileFrameOverride: eM,
        } = (function (e) {
            let { userId: n, guildId: t, editingMode: l } = e;
            return (0, a.cf)(
                [eb.A, y.default, ej.Ay, en.A],
                () => {
                    if ("read-only" === l) return eE;
                    let e = y.default.getUser(n);
                    if (null == e) return eE;
                    let i = eb.A.getTryItOutChanges(),
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
                                : eb.A.getPendingChanges(t),
                        s = null != t ? ej.Ay.getMember(t, n) : null,
                        a = en.A.getUserProfile(n),
                        o = null != t ? en.A.getGuildMemberProfile(n, t) : null;
                    return {
                        pendingThemeColors: r.pendingThemeColors,
                        avatarDecorationOverride: (0, ev.us)({
                            userValue: e.avatarDecoration,
                            guildValue: s?.avatarDecoration,
                            pendingValue: r.pendingAvatarDecoration,
                            guildId: t,
                        }),
                        avatarOverride: (0, eI.V7)({ userId: n, image: r.pendingAvatar, size: eN }),
                        bannerOverride: r.pendingBanner,
                        accentColorOverride: r.pendingAccentColor,
                        profileEffectOverride: (0, ev.us)({
                            userValue: a?.profileEffect,
                            guildValue: o?.profileEffect,
                            pendingValue: r.pendingProfileEffect,
                            guildId: t,
                        }),
                        profileFrameOverride: (0, ev.us)({
                            userValue: a?.profileFrame,
                            guildValue: o?.profileFrame,
                            pendingValue: r.pendingProfileFrame,
                            guildId: t,
                        }),
                    };
                },
                [n, t, l],
            );
        })({ userId: d.id, guildId: $, editingMode: eT }),
        {
            isExpanded: eD,
            isAnimating: eG,
            transition: eF,
            handleExpand: eV,
            handleCollapse: eB,
            refs: { expandIconButtonRef: eW, expandTabButtonRef: eH, collapseButtonRef: ez },
        } = (function () {
            let [e, n] = i.useState(() => window.innerWidth > 928),
                [t, l] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: on },
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
        eY = em && !eD,
        eq = em && (!eD || eG),
        { defaultWishlistId: eK } = (0, a.cf)([en.A], () => ({ defaultWishlistId: en.A.getFirstWishlistId(d.id) }));
    ((0, Y.fw)({ wishlistId: eK, userId: d.id }),
        (n = (0, O.D)("edit_profile_preload")),
        (t = (0, a.bG)([y.default], () => y.default.getCurrentUser()?.id)),
        (r = (0, a.bG)([R.A], () => R.A.shouldFetch())),
        (0, i.useEffect)(() => {
            n && null != t && r && k();
        }, [n, t, r]));
    let eX = (0, eP.fC)(),
        e$ = ex && (!em || !er),
        eQ = em && eo,
        e0 = ei !== $ || eQ || null != eX.interactionType,
        e2 = (function (e) {
            let { user: n, currentUser: t } = e,
                { mutualFriendsCount: l, mutualGuilds: i } = (0, rB.A)(n),
                r = i?.length,
                s = (0, a8.A)(n),
                a = (0, a7.A)(n.id),
                o = (0, a3.A)(n),
                { hasNewWishlistItems: d } = (0, ro.A)(n),
                u = [],
                c = n.id === t?.id,
                g = (0, so.A)(n.id),
                m = a.length > 0;
            return (
                (g || m) && u.push({ text: eU.intl.string(eU.t.laViwx), section: i1.RP.WIDGETS }),
                u.push({ text: eU.intl.string(eU.t.chq59f), section: i1.RP.ACTIVITY }),
                (c || (!c && o)) &&
                    u.push({ text: eU.intl.string(eU.t["7lZ31J"]), section: i1.RP.WISHLIST, showNewContentDot: d }),
                n.id !== t?.id &&
                    s &&
                    (u.push({ text: (0, a6.A)(l), section: i1.RP.MUTUAL_FRIENDS }),
                    u.push({ text: (0, a4.A)(r), section: i1.RP.MUTUAL_GUILDS })),
                u
            );
        })({ user: d, currentUser: c }),
        { analyticsLocations: e5 } = (0, b.Ay)([...B, j.A.USER_PROFILE_MODAL_V2]),
        e9 = (0, Q.pb)({
            layout: "MODAL_V2",
            userId: d.id,
            sourceSessionId: S,
            guildId: $,
            channelId: C,
            messageId: N,
            roleId: E,
        }),
        e3 = i.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e5, ...e9, action: i1.pt.SHOW_STYLES_PANEL }), eV());
        }, [e5, e9, eV]),
        e8 = i.useCallback(() => {
            ((0, ee.Wn)({ analyticsLocations: e5, ...e9, action: i1.pt.HIDE_STYLES_PANEL }), eB());
        }, [e5, e9, eB]),
        e7 = (0, el.Ay)(d.id, $);
    (0, H.A)(e5, e7, i1.R7.MODAL_V2);
    let e6 = void 0 !== eM ? eM?.skuId : e7?.profileFrame?.skuId,
        e4 = (0, w.A)(e6),
        ne = (0, _.A)(e6),
        { profileFrameStyle: nn, profileFrameClassName: nt } = (0, G.A)(e4);
    (0, M.A)({ skuId: e7?.profileFrame?.skuId, openedAt: U, context: e9, analyticsLocations: e5 });
    let nl = (0, a.bG)([y.default], () => J.Ay.canUsePremiumProfileCustomization(y.default.getCurrentUser())),
        ni = ec || (z && null != e7 && nl),
        nr = Z.Ay.useName(e7?.guildId, C, d),
        ns = (0, F.GV)(),
        na = (0, a.bG)([q.A], () => (null != $ ? q.A.getGuild($) : null)),
        no = z
            ? null != na
                ? eU.intl.formatToPlainString(eU.t.M7OhOF, { guildName: na.name })
                : eU.intl.string(eU.t.egQPgM)
            : eU.intl.format(eU.t.KRe1Fk, { name: nr });
    return (0, l.jsx)(b.f5, {
        value: e5,
        children: (0, l.jsx)(Q.of, {
            value: e9,
            openedAt: U,
            fetchStartedAt: e7?.fetchStartedAt,
            fetchEndedAt: e7?.fetchEndedAt,
            isLoaded: e7?.isLoaded,
            children: (0, l.jsx)(eP.Hl, {
                value: eX,
                children: (0, l.jsx)(eS.N, {
                    value: T,
                    children: (0, l.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: s()(lG.zr, { [lG.QF]: e7?.private === !0 }),
                        transitionState: L,
                        "aria-labelledby": ns,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, l.jsx)(rr, {
                                children: (0, l.jsxs)("div", {
                                    className: s()(oe.layoutContainer, nt, {
                                        [oe.editingPanelEnabled]: em,
                                        [oe.editingPanelExpanded]: em && eD,
                                        [oe.isAnimating]: eG,
                                    }),
                                    style: nn,
                                    children: [
                                        (0, l.jsxs)(oa, {
                                            user: d,
                                            displayProfile: e7,
                                            pendingThemeColors: ek,
                                            forceShowPremium: ni,
                                            children: [
                                                (0, l.jsxs)("div", {
                                                    className: lG.Oo,
                                                    children: [
                                                        (0, l.jsx)(nV.A, { onClose: K }),
                                                        (0, l.jsx)(m.A, {
                                                            children: (0, l.jsx)(f.H, { id: ns, children: no }),
                                                        }),
                                                        eq &&
                                                            (0, l.jsx)(iY, {
                                                                buttonRef: eW,
                                                                onClick: e3,
                                                                className: oe.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eY &&
                                                    (0, l.jsx)("div", {
                                                        className: oe.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, l.jsx)(iz, {
                                                            innerRef: eH,
                                                            onClick: e3,
                                                            className: oe.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsxs)(f.F, {
                                            children: [
                                                em &&
                                                    eF((e, n) =>
                                                        n
                                                            ? (0, l.jsx)(iq, {
                                                                  className: s()(oe.editingPanel, {
                                                                      [oe.isExpanded]: eD,
                                                                  }),
                                                                  selectedGuildId: ei,
                                                                  originGuildId: v,
                                                                  onSelectGuildId: es,
                                                                  onClose: e8,
                                                                  collapseButtonRef: ez,
                                                                  isLoading: er,
                                                                  isEditingDisabled: eo,
                                                              })
                                                            : null,
                                                    ),
                                                (0, l.jsxs)(e1.A, {
                                                    className: s()(W, lG.A7, oe.profileContentOuter),
                                                    innerClassName: oe.profileContentInner,
                                                    user: d,
                                                    displayProfile: e7,
                                                    themeType: eC.d.MODAL_V2,
                                                    pendingThemeColors: ek,
                                                    isPrivate: e7?.private === !0,
                                                    forceShowPremium: ni,
                                                    children: [
                                                        (0, l.jsx)(oi, { displayProfile: e7, pendingBanner: eL }),
                                                        e7?.private === !0 && (0, l.jsx)(eJ.A, {}),
                                                        !ex && (0, l.jsx)(am, { className: oe.noticeContainer }),
                                                        e$ &&
                                                            (0, l.jsx)("div", {
                                                                className: oe.noticeContainer,
                                                                role: "alert",
                                                                children: (0, l.jsx)(i7, {
                                                                    icon: (0, l.jsx)(p.WarningIcon, {
                                                                        size: "sm",
                                                                        color: h.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eU.intl.string(eU.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != ea
                                                                            ? eU.intl.string(eU.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: ea,
                                                                    actionDisabled: !em && er,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, l.jsx)("div", {
                                                            className: oe.profileCardToastContainer,
                                                            children: (0, l.jsx)(eZ.A, { userId: d.id, onClose: K }),
                                                        }),
                                                        (0, l.jsxs)(rn, {
                                                            showScrim: e0,
                                                            showLoadingSpinner: er,
                                                            className: oe.profileContentColumns,
                                                            children: [
                                                                (0, l.jsx)(os, {
                                                                    user: d,
                                                                    currentUser: c,
                                                                    guildId: $,
                                                                    channelId: C,
                                                                    displayProfile: e7,
                                                                    nickname: nr,
                                                                    originGuildId: v,
                                                                    hasEntered: L === x.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: K,
                                                                    avatarDecorationOverride: eR,
                                                                    avatarOverride: eO,
                                                                    bannerOverride: eL,
                                                                    accentColorOverride: e_,
                                                                    profileEffectOverride: ew,
                                                                    profileFrame: e4,
                                                                    fadeInProfileFrame: ne,
                                                                    editingMode: eT,
                                                                    isLoading: er,
                                                                }),
                                                                (0, l.jsx)(ao, {
                                                                    user: d,
                                                                    currentUser: c,
                                                                    displayProfile: e7,
                                                                    guildId: $,
                                                                    channelId: C,
                                                                    items: e2,
                                                                    initialSection: P,
                                                                    onClose: K,
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
                            (0, l.jsx)(iK.A, { userId: d.id, guildId: $, className: oe.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function od(e) {
    return (0, l.jsx)(n6.tM, { children: (0, l.jsx)(oo, { ...e }) });
}
