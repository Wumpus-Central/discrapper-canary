n.d(t, { A: () => lF, Y: () => lD });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(837381);
if (221552 == n.j) var c = n(887129);
var d = n(607399),
    m = n(17928),
    h = n(140735),
    p = n(312138),
    f = n(707554),
    g = n(475825);
if (221552 == n.j) var x = n(506309);
var A = n(442433),
    C = n(361610),
    E = n(414798),
    I = n(589158),
    y = n(775602),
    S = n(793574),
    v = n(95561),
    N = n(688810),
    _ = n(598748),
    j = n(681154),
    b = n(975460),
    T = n(587895),
    R = n(429913),
    O = n(201718),
    L = n(339580),
    M = n(633075),
    k = n(321191),
    w = n(903209),
    P = n(885386),
    D = n(403362),
    U = n(382483),
    V = n(385113);
let G = i.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function F(e) {
    let [t, n] = i.useState(new Set()),
        s = i.useCallback((e) => {
            n((t) => (t.has(e) ? t : new Set(t).add(e)));
        }, []);
    return (0, l.jsx)(G.Provider, {
        value: {
            markAsVisible: s,
            useInjectEntriesWithPreviewData: (e) =>
                (function (e, t) {
                    let n,
                        l,
                        s,
                        r,
                        a,
                        o,
                        u,
                        c,
                        d,
                        h,
                        p,
                        f,
                        g,
                        x,
                        A,
                        C,
                        { appsWithConfigs: E, isLoadingConfigs: I } =
                            ((n = P.Q_.useSetting()),
                            i.useEffect(() => {
                                (0, U.Wq)().catch(() => {});
                            }, []),
                            i.useEffect(() => {
                                n && (0, U.i$)().catch(() => {});
                            }, [n]),
                            (l = (0, m.bG)([V.A], () => V.A.getFeaturedFetchState())),
                            (s = (0, m.bG)([V.A], () => V.A.getDeveloperFetchState())),
                            (r = (0, m.yK)([V.A], () => V.A.getFeaturedApplicationIds())),
                            (a = (0, m.yK)([V.A], () => V.A.getDeveloperApplicationIds())),
                            {
                                appsWithConfigs: i.useMemo(() => new Set([...r, ...a]), [r, a]),
                                isLoadingConfigs:
                                    l === V.e.NOT_FETCHED ||
                                    l === V.e.FETCHING ||
                                    (n && (s === V.e.NOT_FETCHED || s === V.e.FETCHING)),
                            }),
                        {
                            widgetApps: y,
                            userIdsWhoMightHaveWidgetData: S,
                            isFetchingApplications: v,
                        } = ((o = i.useMemo(
                            () =>
                                e
                                    ?.filter((e) => e.content_type === j.ContentInventoryEntryType.PLAYED_GAME)
                                    .filter((e) => t.has(e.id)) ?? [],
                            [e, t],
                        )),
                        (u = i.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                        (c = (0, m.bG)(
                            [T.A],
                            () =>
                                u.length > 0 &&
                                u.some(
                                    (e) =>
                                        T.A.isFetchingApplication(e) ||
                                        (null == T.A.getApplication(e) && !T.A.didFetchingApplicationFail(e)),
                                ),
                        )),
                        (d = (0, R.A)(u)),
                        (h = i.useMemo(
                            () =>
                                Object.fromEntries(
                                    d
                                        .filter(D.Vq)
                                        .map((e) => [e.id, (0, b.t)(e)])
                                        .filter(D.QE)
                                        .filter((e) => {
                                            let [t, n] = e;
                                            return E.has(n.id);
                                        }),
                                ),
                            [E, d],
                        )),
                        (p = i.useMemo(
                            () => [...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id))],
                            [o, h],
                        )),
                        { widgetApps: h, userIdsWhoMightHaveWidgetData: p, isFetchingApplications: c }),
                        { identitiesByUserId: N, isLoadingIdentities: G } =
                            ((f = (0, m.cf)([L.A], () =>
                                Object.fromEntries(S.map((e) => [e, L.A.getUserIdentities(e)]).filter(D.QE)),
                            )),
                            (g = (0, m.bG)([L.A], () =>
                                S.some((e) => L.A.getFetchState(e) === L.e.NOT_FETCHED || L.A.isFetchingUser(e)),
                            )),
                            i.useEffect(() => {
                                S.length > 0 && O.P.fetchMany(...S.map((e) => [e]));
                            }, [S]),
                            { identitiesByUserId: f, isLoadingIdentities: g }),
                        { profilesByUserId: F, isLoadingProfiles: B } =
                            ((x = (0, m.cf)([k.A], () =>
                                Object.fromEntries(S.map((e) => [e, k.A.getUserProfile(e) ?? null]).filter(D.QE)),
                            )),
                            (A = (0, m.yK)([k.A], () =>
                                S.filter((e) => null == k.A.getUserProfile(e) && !k.A.isFetchingProfile(e)),
                            )),
                            (C = (0, m.bG)([k.A], () => S.some((e) => k.A.isFetchingProfile(e)))),
                            i.useEffect(() => {
                                for (let e of A) (0, w.A)(e);
                            }, [A]),
                            { profilesByUserId: x, isLoadingProfiles: A.length > 0 || C }),
                        H = (0, m.cf)(
                            [V.A],
                            () => Object.fromEntries([...E].map((e) => [e, V.A.getConfig(e)]).filter(D.QE)),
                            [E],
                        ),
                        W = I || v || G || B,
                        K = i.useMemo(() => {
                            if (!W && void 0 !== e)
                                return e.map((e) => {
                                    if (e.content_type !== j.ContentInventoryEntryType.PLAYED_GAME) return e;
                                    let t = y[e.extra.application_id] ?? null;
                                    if (null == t) return e;
                                    let n = H[t.id] ?? null;
                                    if (null == n || null == n.surfaces[_.m.ACTIVITY_ACCESSORY]) return e;
                                    let l = N[e.author_id]?.find((e) => e.application_id === t.id) ?? null;
                                    if (l?.profile == null) return e;
                                    let i = F[e.author_id]?.widgets?.some((e) => (0, M.E)(e, t.id)) ?? !1;
                                    return {
                                        ...e,
                                        applicationWidgetPreview: { widgetApplicationId: t.id, hasWidget: i },
                                    };
                                });
                        }, [W, e, y, H, N, F]),
                        [z, Z] = i.useState(K);
                    return (
                        i.useEffect(() => {
                            W || Z(K);
                        }, [W, K]),
                        z
                    );
                })(e, t),
        },
        children: e.children,
    });
}
var B = n(449582),
    H = n(900797),
    W = n(847374),
    K = n(320448),
    z = n(939249),
    Z = n(485947),
    Y = n(180170),
    q = n(435738),
    J = n(38055);
let $ = "content-inventory-feed",
    X = `${$}-settings`,
    Q = `${$}-toggle`;
var ee = n(652215),
    et = n(375708),
    en = n(569709),
    el = n(4577);
let ei = i.memo(function (e) {
        let t,
            { title: s, onToggleExpand: r, expanded: o, expandedCount: c } = e,
            d = (0, m.bG)([q.A], () => q.A.hidden),
            p = (0, a.omit)((0, u.rm)(X), ["role", "tabIndex"]),
            f = (0, a.omit)((0, u.rm)(Q), ["role", "tabIndex"]),
            g = i.useCallback((e) => {
                (0, A.L3)(e, async () => {
                    let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 38055));
                    return () => (0, l.jsx)(e, { closePopout: A.Z_ });
                });
            }, []),
            x = i.useCallback(() => (d ? (0, Y.Il)() : c > 3 ? r() : (0, ee.tEg)()), [d, c, r]);
        return (0, l.jsxs)(Z.A, {
            className: el.lL,
            children: [
                (0, l.jsx)(h.A, { children: et.intl.format(et.t.Uaqbke, { title: s, count: c }) }),
                (0, l.jsxs)("div", {
                    className: en.N1,
                    children: [
                        (0, l.jsx)(z.D, {
                            onClick: x,
                            onContextMenu: g,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            children: (0, l.jsxs)("span", { children: [s, " \u2014 ", c] }),
                        }),
                        (0, l.jsx)(J.A, { ...p }),
                        (0, l.jsx)(z.D, {
                            onClick: x,
                            onContextMenu: g,
                            tag: "span",
                            tabIndex: -1,
                            "aria-hidden": !0,
                            className: en.AN,
                            children: (0, l.jsx)("span", {}),
                        }),
                        c <= 3 && !d
                            ? null
                            : ((t = d
                                  ? (0, l.jsx)(H.t, { className: en.wT })
                                  : o
                                    ? (0, l.jsx)(W.a, { className: en.wT })
                                    : (0, l.jsx)(K._, { className: en.wT })),
                              (0, l.jsx)(z.D, {
                                  ...f,
                                  onClick: x,
                                  tag: "span",
                                  "aria-label": et.intl.string(o && !d ? et.t.iTcuma : et.t.dcl9MQ),
                                  "aria-expanded": !d && o,
                                  className: en.wT,
                                  children: t,
                              })),
                    ],
                }),
            ],
        });
    }),
    es = function () {
        return null;
    };
var er = n(922016),
    ea = n(963307),
    eo = n(287809),
    eu = n(174459),
    ec = n(424994);
let ed = eu.default.track;
function em(e, t) {
    ed(ee.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: t.requestId,
        item_id: t.entry.id,
        surface_type: ec.UG.GUILD_MEMBER_LIST,
        channel_id: t.channelId,
        guild_id: t.guildId,
        interaction_type: e,
        destination_channel_id: t.destinationChannelId,
        destination_guild_id: t.destinationGuildId,
        rich_presence_name: t.richPresenceName,
    });
}
var eh = n(468581),
    ep = n(808666),
    ef = n(821609),
    eg = n(414499),
    ex = n(323384),
    eA = n(55730),
    eC = n(765379),
    eE = n(146779),
    eI = n(284525),
    ey = n(482030),
    eS = n(627363),
    ev = n(583846),
    eN = n(506326),
    e_ = n(284009),
    ej = n.n(e_);
n(333007);
var eb = n(554146),
    eT = n(661531),
    eR = n(342952),
    eO = n(315710),
    eL = n(43990),
    eM = n(866665),
    ek = n(276293),
    ew = n(935063),
    eP = n(789645),
    eD = n(778712),
    eU = n(696986),
    eV = n(297264),
    eG = n(834730),
    eF = n(97808),
    eB = n(738188),
    eH = n(983851),
    eW = n(31300),
    eK = n(308528),
    ez = n(367513),
    eZ = n(730852),
    eY = n(401843),
    eq = n(969151),
    eJ = n(736653),
    e$ = n(355622),
    eX = n(408018),
    eQ = n(959070),
    e0 = n(375499),
    e1 = n(429433),
    e2 = n(95701),
    e3 = n(324688);
let e8 = (0, e2.createChannelRecord)({ id: "1", type: ee.rbe.DM });
function e5(e) {
    let {
            placeholder: t,
            onEnter: n,
            setEditorRef: s,
            showEmojiButton: a = !1,
            renderAttachButton: o,
            autoFocus: u = !0,
            onFocus: c,
            channel: d,
            className: m,
        } = e,
        [h, p] = i.useState(""),
        [f, g] = i.useState((0, eX.x7)("")),
        x = e$.oU.ATOMIC_REACTOR_REPLY_INPUT,
        A = i.useRef(null);
    return (0, l.jsx)(eQ.Ay, {
        ref: A,
        placeholder: t,
        editorClassName: m,
        className: r()(e3.N8, m),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: d ?? e8,
        onChange: (e, t, n) => {
            (p(t), g(n));
        },
        type: a ? { ...x, emojis: { button: !0 } } : x,
        textValue: h,
        richValue: f,
        onSubmit: (e) => {
            let { value: t } = e;
            return t.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (n(t), p(""), g((0, eX.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: s,
        focused: u,
        onFocus: c,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == A.current) return "top";
            let e = A.current.getBoundingClientRect(),
                t = window.innerHeight;
            return e.top < t / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function e6(e) {
    var t;
    let { onSelectEmoji: n, onClick: s } = e,
        r = (0, eJ.Ay)(),
        [a, o] = i.useState(!1),
        u = i.useRef(null),
        c = i.useRef(null);
    return (
        (t = () => o(!1)),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && t();
            }
            function n(e) {
                null != e.target && (u?.current?.contains(e?.target) || t());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", n),
                () => {
                    (document.removeEventListener("keydown", e), document.removeEventListener("mousedown", n));
                }
            );
        }, [t, u]),
        (0, l.jsx)(er.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(eL.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: u,
                            children: (0, l.jsx)(e1.C, {
                                messageId: ee.dJq,
                                channel: e8,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: t, willClose: l, isBurst: i } = e;
                                    null != t && (n({ emoji: t, willClose: l, isBurst: i }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(eM.m, {
                    text: et.intl.string(et.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: c,
                        className: e3.mJ,
                        children: (0, l.jsx)(e0.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                (s?.(), o(!0));
                            },
                        }),
                    }),
                }),
        })
    );
}
var e7 = n(47167),
    e4 = n(262763),
    e9 = n(402216),
    te = n(268218),
    tt = n(826673),
    tn = n(822123),
    tl = n(409626),
    ti = n(692969),
    ts = n(711589),
    tr = n(607407),
    ta = n(548118),
    to = n(499211),
    tu = n(378570),
    tc = n(832163),
    td = n(533562),
    tm = n(202091),
    th = n(805901),
    tp = n(565645),
    tf = n(915089),
    tg = n(713517);
n(267889);
var tx = n(7584);
(n(850992), n(690521), n(806931));
var tA = n(307731);
n(650583);
var tC = n(866780);
function tE(e) {
    let { emoji: t, isDisabled: n = !1, onClick: s, className: a } = e,
        o = i.useRef(null),
        u = (0, tg.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(z.D, {
            onClick: s,
            focusProps: { enabled: !n },
            children: (0, l.jsx)(th.c, {
                config: e0.B,
                from: { value: 0 },
                to: { value: +!!u },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(tm.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(tp.A, {
                            className: r()(tC.Zg, a, { [tC.c4]: n }),
                            emojiId: t.id,
                            emojiName: t?.surrogates,
                            animated: t.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
(tA.EmojiIntention.CHAT,
    [
        tx.Ay.getByName("thumbsup"),
        tx.Ay.getByName("eyes"),
        tx.Ay.getByName("laughing"),
        tx.Ay.getByName("watermelon"),
        tx.Ay.getByName("fork_and_knife"),
        tx.Ay.getByName("yum"),
    ].filter(D.Vq));
var tI = n(636585),
    ty = n(734057),
    tS = n(71393),
    tv = n(576705),
    tN = n(994500),
    t_ = n(543465),
    tj = n(977997),
    tb = n(607567),
    tT = n(486020),
    tR = n(562153),
    tO = n(939341),
    tL = n(20805),
    tM = n(22869),
    tk = n(623671),
    tw = n(428249),
    tP = n(327098),
    tD = n(576757),
    tU = n(202195),
    tV = n(140651),
    tG = n(43105),
    tF = n(131607),
    tB = n(49999),
    tH = n(345394);
let tW = function (e) {
    let { children: t } = e,
        [n, s] = (0, tF.kn)([eb.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = i.useState(!1),
        o = i.useRef(null);
    i.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let u = i.useCallback(() => {
        s(tB.i.USER_DISMISS);
    }, [s]);
    return n !== eb.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? t
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: t }),
                  (0, l.jsx)(tG.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: u,
                      position: "left",
                      title: et.intl.string(et.t.V5y3qZ),
                      body: et.intl.string(et.t.eSDHDk),
                      graphic: { type: "image", src: tH.A },
                  }),
              ],
          });
};
var tK = n(315246),
    tz = n(866323),
    tZ = n(857250),
    tY = n(97483),
    tq = n(289873),
    tJ = n(339190),
    t$ = n(655214);
function tX() {
    return (0, l.jsxs)("div", {
        className: t$.oR,
        children: [
            (0, l.jsx)(tq.y, { type: tq.t.SPINNING_CIRCLE_SIMPLE, className: tJ.S }),
            (0, l.jsx)(eG.E, {
                color: "text-strong",
                variant: "text-md/normal",
                children: et.intl.string(et.t["5z/hlE"]),
            }),
        ],
    });
}
let tQ = (e) => {
    let { shown: t, sent: n, className: i } = e,
        s = (0, m.bG)([y.Ay], () => y.Ay.useReducedMotion),
        r = (0, tz.p)(
            t,
            {
                from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: r(
            (e, t) =>
                t &&
                (0, l.jsx)(tm.animated.div, {
                    className: i,
                    style: e,
                    children: n
                        ? (0, l.jsx)(tZ.y, {
                              message: et.intl.string(et.t.fjcCk5),
                              type: tY.Ck.SUCCESS,
                              id: "success_message_toast",
                          })
                        : (0, l.jsx)(tZ.y, {
                              message: "",
                              type: tY.Ck.CUSTOM,
                              id: "custom_loading_message_toast",
                              options: { component: (0, l.jsx)(tX, {}) },
                          }),
                }),
        ),
    });
};
var t0 = n(381941),
    t1 = n(699976),
    t2 = n(231188);
let t3 = (0, te.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("291103"),
                n.e("419121"),
                n.e("315513"),
                n.e("162775"),
                n.e("60882"),
                n.e("121046"),
                n.e("489020"),
                n.e("919789"),
                n.e("669130"),
                n.e("70866"),
                n.e("802890"),
                n.e("377109"),
                n.e("74886"),
                n.e("713273"),
                n.e("656997"),
                n.e("324732"),
                n.e("679157"),
                n.e("1955"),
                n.e("341161"),
                n.e("410526"),
                n.e("202985"),
                n.e("603619"),
                n.e("661630"),
                n.e("470126"),
                n.e("128804"),
                n.e("71151"),
                n.e("227853"),
                n.e("286615"),
                n.e("311541"),
                n.e("472847"),
                n.e("870088"),
                n.e("989649"),
                n.e("925420"),
                n.e("586662"),
                n.e("758053"),
                n.e("247471"),
                n.e("889002"),
                n.e("462408"),
                n.e("709976"),
                n.e("750955"),
                n.e("953343"),
                n.e("763945"),
                n.e("261204"),
                n.e("25300"),
                n.e("686731"),
                n.e("807432"),
                n.e("873532"),
                n.e("279774"),
                n.e("590088"),
                n.e("125298"),
                n.e("295570"),
                n.e("728824"),
                n.e("71169"),
                n.e("906470"),
                n.e("736663"),
                n.e("730931"),
                n.e("82937"),
                n.e("987221"),
                n.e("253781"),
                n.e("624401"),
                n.e("314304"),
                n.e("853855"),
                n.e("157064"),
                n.e("336046"),
                n.e("58495"),
                n.e("156957"),
                n.e("363189"),
                n.e("604153"),
                n.e("641877"),
                n.e("866212"),
                n.e("535308"),
                n.e("762309"),
                n.e("340341"),
                n.e("918786"),
                n.e("352421"),
                n.e("970760"),
                n.e("701335"),
                n.e("257935"),
                n.e("724086"),
                n.e("358937"),
                n.e("448738"),
                n.e("383670"),
                n.e("258407"),
                n.e("894292"),
                n.e("153302"),
                n.e("88683"),
                n.e("363874"),
                n.e("923981"),
                n.e("750370"),
                n.e("612162"),
                n.e("466592"),
                n.e("73946"),
                n.e("282050"),
                n.e("436101"),
                n.e("976888"),
                n.e("387970"),
                n.e("847445"),
                n.e("547510"),
                n.e("966366"),
                n.e("983513"),
                n.e("76928"),
                n.e("355502"),
                n.e("528311"),
                n.e("156422"),
                n.e("348567"),
                n.e("452075"),
                n.e("900277"),
                n.e("127962"),
                n.e("968201"),
                n.e("161282"),
                n.e("76428"),
                n.e("77473"),
                n.e("863232"),
                n.e("25279"),
                n.e("364827"),
                n.e("517888"),
                n.e("811133"),
                n.e("959880"),
                n.e("174016"),
                n.e("907167"),
                n.e("910471"),
                n.e("11301"),
                n.e("952372"),
                n.e("784569"),
                n.e("861060"),
                n.e("77333"),
                n.e("264572"),
                n.e("11735"),
                n.e("477175"),
                n.e("960235"),
                n.e("402368"),
                n.e("190779"),
                n.e("716460"),
                n.e("221856"),
                n.e("678157"),
                n.e("147662"),
                n.e("646271"),
                n.e("325675"),
                n.e("996481"),
                n.e("331988"),
                n.e("544571"),
                n.e("40291"),
                n.e("733115"),
                n.e("397270"),
                n.e("373122"),
                n.e("724285"),
                n.e("41298"),
                n.e("293159"),
                n.e("186212"),
                n.e("755936"),
                n.e("209338"),
                n.e("509398"),
                n.e("927875"),
                n.e("833703"),
                n.e("55252"),
                n.e("692990"),
                n.e("362931"),
                n.e("745959"),
                n.e("858529"),
                n.e("481987"),
                n.e("595653"),
                n.e("958038"),
                n.e("532039"),
                n.e("719466"),
                n.e("99799"),
                n.e("576909"),
                n.e("406174"),
                n.e("715555"),
                n.e("27355"),
                n.e("407170"),
                n.e("27773"),
                n.e("132191"),
                n.e("577084"),
                n.e("682337"),
                n.e("371133"),
                n.e("454625"),
                n.e("523276"),
                n.e("812042"),
                n.e("102328"),
                n.e("729963"),
                n.e("830938"),
                n.e("821924"),
                n.e("837687"),
                n.e("538513"),
                n.e("896137"),
                n.e("370112"),
                n.e("348900"),
                n.e("182069"),
                n.e("35485"),
                n.e("73536"),
                n.e("446800"),
                n.e("384996"),
                n.e("147864"),
                n.e("50097"),
                n.e("115064"),
                n.e("306306"),
                n.e("920282"),
                n.e("963584"),
                n.e("654282"),
                n.e("363618"),
                n.e("928662"),
                n.e("534928"),
                n.e("860177"),
                n.e("875016"),
                n.e("2329"),
                n.e("831445"),
                n.e("501157"),
                n.e("278412"),
                n.e("235996"),
                n.e("143549"),
                n.e("509856"),
                n.e("703166"),
                n.e("978436"),
                n.e("628752"),
                n.e("154630"),
                n.e("423532"),
                n.e("262841"),
                n.e("488990"),
                n.e("509793"),
                n.e("753589"),
                n.e("791824"),
                n.e("881379"),
                n.e("521574"),
                n.e("906723"),
                n.e("209729"),
                n.e("736926"),
                n.e("22330"),
                n.e("661832"),
                n.e("93461"),
                n.e("474907"),
                n.e("604172"),
                n.e("437961"),
                n.e("949013"),
                n.e("309763"),
                n.e("820667"),
            ]).then(n.bind(n, 316725)),
        webpackId: 316725,
    }),
    t8 = i.createContext(void 0);
function t5(e) {
    let { children: t } = e,
        n = i.useRef(null),
        s = i.useId();
    return (
        (0, eO.tj)(n),
        (0, l.jsx)(t8.Provider, {
            value: s,
            children: (0, l.jsx)("div", {
                ref: n,
                className: t2.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": s,
                tabIndex: -1,
                children: t,
            }),
        })
    );
}
function t6(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: s = {} } = e,
        { primaryColor: a, secondaryColor: o } = (0, tV.A)(n);
    return (
        null != n && (s.background = `linear-gradient(45deg, ${a}, ${o})`),
        (0, l.jsx)(eL.N, {
            theme: ee.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: r()(t2.ZK, e, i), style: s, children: t }),
        })
    );
}
function t7(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: t2.$m, children: t });
}
function t4(e) {
    var t;
    let n,
        s,
        r,
        a,
        { channel: o, user: u, onReaction: c, entry: d, buttons: h = [], header: p, onVoiceChannelPreview: f } = e,
        [g, x] = i.useState(!1),
        [A, C] = i.useState(null),
        E = (0, m.bG)(
            [tv.A],
            () => null != o && ee.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && tv.A.can(ee.xBc.SEND_MESSAGES, o),
        ),
        [I, y] = i.useState(!1),
        [S, v] = i.useState(!1),
        { voiceBar: N, joinVoiceButton: _ } = (function (e) {
            let { channel: t, entry: n, onVoiceChannelPreview: s } = e,
                { streamPreviewUrl: r, channel: a } = (0, tU.A)(n),
                o = (0, e7.Ay)(a),
                { needSubscriptionToAccess: u } = (0, to.A)(t?.id),
                c = (0, m.bG)([tS.A], () => (null != a ? tS.A.getGuild(a.guild_id) : void 0)),
                d = (0, m.yK)([tb.Ay], () => (null != a ? tb.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([tj.A], () => tj.A.isInChannel(a?.id)),
                p = i.useMemo(() => {
                    for (let e of d) {
                        let t = ty.A.getDMFromUserId(e.user.id),
                            n = null != t && t_.Ay.isChannelMuted(null, t),
                            l = tN.A.isBlockedOrIgnored(e.user.id);
                        if (n || l) return !0;
                    }
                    return !1;
                }, [d]);
            if (null == a || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let f = null != r;
            function g(e) {
                let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(eB.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: t2.vb,
                                  }),
                                  et.intl.string(et.t.d6DpXI),
                              ],
                          })
                        : n;
                return (0, l.jsx)(
                    eM.m,
                    {
                        "aria-label": i ? et.intl.string(et.t.d6DpXI) : (n ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: t,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: t2.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: et.intl.string(et.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: p,
                                    children: (0, l.jsxs)(z.D, {
                                        "aria-label": et.intl.string(et.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (ez.A.updateChatOpen(a.id, !0), (0, tu.iN)(a.id), s?.(a));
                                        },
                                        className: t2.I3,
                                        children: [
                                            (0, l.jsx)(ta.Ay, {
                                                guild: c,
                                                size: ta.Ay.Sizes.SMOL,
                                                className: t2.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(K._, {
                                                size: "xxs",
                                                color: eT.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(eH.H, { size: "xs", color: eT.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(eG.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: t2.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(tI.A, {
                                    guildId: c.id,
                                    users: d,
                                    max: 3,
                                    renderUser: (e, t) =>
                                        (0, l.jsx)(eF.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: eD._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: t,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: t2.V9,
                                            children: (0, l.jsx)(eG.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eU.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: p,
                          children: (0, l.jsx)(ef.$, {
                              onClick: function () {
                                  null != a &&
                                      e4.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: u,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: f ? et.intl.string(et.t.I6JG46) : et.intl.string(et.t.VJlc0S),
                              icon: f ? eW.k : eH.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: d, onVoiceChannelPreview: f }),
        { embeddedActivity: j } = (0, tP.A)(d),
        b =
            ((t = j),
            (n = (0, m.bG)([tS.A], () => tS.A.getGuild((0, eq.D)(t?.location)))),
            (s = (0, m.bG)([ty.A], () => ty.A.getChannel((0, eq.H)(t?.location)))),
            (r = (0, m.yK)([eo.default], () => t?.participants?.map((e) => eo.default.getUser(e.userId)) ?? [])),
            (a = (0, e7.Ay)(s)),
            null != t && null != n && null != s && e2.k3.has(s.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: t2.kP,
                              children: [
                                  (0, l.jsxs)(z.D, {
                                      "aria-label": et.intl.string(et.t["W/A4Qp"]),
                                      onClick: () => (0, tu.iN)(s.id),
                                      className: t2.I3,
                                      children: [
                                          (0, l.jsx)(ta.Ay, {
                                              guild: n,
                                              size: ta.Ay.Sizes.SMOL,
                                              className: t2.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(K._, { size: "xxs", color: eT.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                                          (0, l.jsx)(ek.N, { size: "xs", color: eT.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(eG.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: t2.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(tI.A, {
                                      guildId: n.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, t) =>
                                          (0, l.jsx)(eF.eu, {
                                              src: e.getAvatarURL(n.id, 16),
                                              size: eD._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: t,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: t2.V9,
                                              children: (0, l.jsx)(eG.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(eU.h, { size: 16 }),
                      ],
                  })
                : null),
        T = null != _ && 0 === h.length ? [_] : h,
        R = T.length > 0,
        O = T.length >= 2,
        [L, M] = i.useState(!R),
        k = tR.Ay.getName(o?.guild_id, o?.id, u),
        w = (0, e7.Ay)(o, !0),
        P =
            null != o && g
                ? et.intl.formatToPlainString(et.t["8lzR/R"], { channel: w })
                : et.intl.formatToPlainString(et.t["4c+CAx"], { channel: `@${k}` }),
        D = g ? et.intl.string(et.t.Z2CUgn) : et.intl.string(et.t.XLGiTG);
    async function U(e) {
        let t,
            { emoji: n } = e;
        if (null != n) {
            if (
                (eu.default.track(ee.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: ec.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, tt.Dr)(eb.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                y(!0),
                v(!1),
                g)
            )
                (ej()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
            else {
                let e = await eK.A.getOrEnsurePrivateChannel(u.id);
                t = ty.A.getChannel(e) ?? null;
            }
            return (
                ej()(null != t, "Send channel must be defined"),
                G({
                    reply: `:${n.name}:`,
                    sendToChannel: t,
                    onComplete: (e, t) => {
                        (v(!0),
                            setTimeout(() => {
                                (y(!1), c(e, t));
                            }, 600));
                    },
                    interactionType: ec.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function V(e) {
        let t;
        if (((0, tt.Dr)(eb.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
            (ej()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (t = o));
        else {
            let e = await eK.A.openPrivateChannel({ recipientIds: u.id }),
                n = ty.A.getChannel(e);
            (ej()(null != n, "DM channel must be defined"), (t = n));
        }
        let n = t.type === ee.rbe.DM ? ec.PA.DM_REACTION_MESSAGE_SENT : ec.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return G({ reply: e, sendToChannel: t, interactionType: n, onComplete: c, requiresChannelReadiness: !0 });
    }
    async function G(e) {
        let { reply: t, sendToChannel: n, onComplete: l, interactionType: i, requiresChannelReadiness: s } = e;
        (A?.focus(),
            await (0, tw.d)({
                channel: n,
                content: t,
                entry: d,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: t0.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            l?.(i, n));
    }
    let F = p ?? N ?? b;
    function B() {
        (x((e) => !e), L && A?.focus());
    }
    function H(e) {
        (M(e), e && A?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: I ? "none" : "all" },
        children: [
            (0, l.jsx)(tQ, { sent: S, shown: I, className: t2.Jt }),
            F ??
                (0, l.jsx)(tW, {
                    children: (0, l.jsxs)("div", {
                        className: t2.T7,
                        children: [
                            (0, l.jsx)(t9, { channel: o, onClickSuggestion: U }),
                            (0, l.jsx)(e6, { onSelectEmoji: U }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: L ? t2.P2 : t2.VE,
                children: [
                    (0, l.jsx)(e5, {
                        placeholder: P,
                        onEnter: V,
                        setEditorRef: (e) => C(e),
                        channel: g ? o : void 0,
                        showEmojiButton: null != F,
                        className: t2.N8,
                        autoFocus: !1,
                        renderAttachButton: E
                            ? () =>
                                  (0, l.jsx)(eM.m, {
                                      text: D,
                                      children: (0, l.jsx)(z.D, {
                                          className: t2.wD,
                                          onClick: B,
                                          children: g
                                              ? (0, l.jsx)(ek.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(ew.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    R &&
                        (0, l.jsx)(z.D, {
                            onClick: () => H(!1),
                            className: t2.i3,
                            children: (0, l.jsx)(eP.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: eT.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === L &&
                (0, l.jsxs)("div", {
                    className: t2.fh,
                    children: [
                        !O &&
                            (0, l.jsx)(
                                ef.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => H(!0),
                                    size: "md",
                                    text: et.intl.string(et.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        T,
                    ],
                }),
        ],
    });
}
let t9 = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [s, r] = i.useState(!1);
    i.useEffect(() => {
        r(!0);
    }, []);
    let a = !!y.Ay.keyboardModeEnabled && !s,
        o = (0, tn.Fj)(t?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tT._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eM.m, {
                              asContainer: !0,
                              text: et.intl.formatToPlainString(et.t.kilW3l, { emojiName: t.name }),
                              position: "top",
                              "aria-label": et.intl.formatToPlainString(et.t.kilW3l, { emojiName: t.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(tE, {
                                  emoji: t,
                                  isDisabled: !s,
                                  onClick: () => n({ emoji: t }),
                                  className: t2.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};
function ne(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: a } = e,
        o = t?.guild_id,
        { displayParticipants: u, participant1: c, participant2: d, numOtherParticipants: h } = (0, tD.A)(i, 3),
        p = (0, m.bG)([eo.default], () => eo.default.getUser(i.author_id)),
        { streamPreviewUrl: f } = (0, tU.A)(i),
        g = [c, d];
    return (0, l.jsxs)("div", {
        className: t2.MH,
        children: [
            (0, l.jsxs)("div", {
                className: t2.WP,
                children: [
                    (0, l.jsx)(eR.A, {
                        maxUsers: 3,
                        users: u,
                        guildId: o,
                        size: eD._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: a,
                    }),
                    (0, l.jsx)(eU.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(eV.D, {
                        variant: "heading-sm/normal",
                        className: r()(t2.Xn, t2.zA),
                        children: et.intl.format(n, {
                            user0: tR.Ay.getName(o, t?.id, g[0]),
                            user1: tR.Ay.getName(o, t?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, l.jsx)(
                                    eG.E,
                                    { variant: "text-sm/medium", className: r()(t2.Mj, t2.nk), children: e },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, l.jsx)(
                                    tM.A,
                                    {
                                        textClassName: r()(t2.Mj, t2.nk),
                                        text: e,
                                        user: g[0],
                                        channel: t,
                                        onPopoutClosed: a,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, l.jsx)(
                                    tM.A,
                                    {
                                        textClassName: r()(t2.Mj, t2.nk),
                                        text: e,
                                        user: g[1],
                                        channel: t,
                                        onPopoutClosed: a,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            null != f && (0, l.jsx)(e9.Ay, { size: e9.Ay.Sizes.SMALL }),
            null != p && (0, l.jsx)(tK.A, { user: p, channel: t, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function nt(e) {
    let { children: t, onClick: n } = e;
    return null == n ? t : (0, l.jsx)(z.D, { className: t2.Zw, onClick: n, children: t });
}
function nn(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: a,
            onClickThumbnail: o,
            onClickTitle: u,
            onClickSubtitle: c,
            headerIcons: d,
            disableGameProfileLinks: h = !1,
            showCoverImage: p = !0,
            onUserPopoutClosed: f,
            trackRankingItemInteraction: g,
            ...x
        } = e,
        { entry: A } = x,
        C = (0, tL.zD)(A),
        E = C ? A.extra?.application_id : void 0,
        I = (0, td.W)();
    null != I && (E = I);
    let y = (0, ti.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: tl.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: A.author_id,
            },
            { onOpened: () => g?.(ec.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: S, smallImage: v } = (0, tO.nO)({
            entry: A,
            showCoverImage: p,
            trackingSource: "memberlist_content_popout",
        }),
        N = (0, m.bG)([tc.A], () => tc.A.getDetectableIdsToApplicationIds()),
        _ = C ? y : void 0,
        j = i.useContext(t8);
    return (0, l.jsxs)("div", {
        className: t2.au,
        children: [
            (0, l.jsx)(ne, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: f }),
            (0, l.jsxs)(t6, {
                backgroundImgSrc: S?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: t2.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: t2.Fb,
                                children: (0, l.jsx)(tk.d, {
                                    image: S,
                                    smallImage: v,
                                    aspectRatio: p ? "none" : void 0,
                                    onClick: o ?? _,
                                    size: tk.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: t2.iC,
                                children: [
                                    (0, l.jsx)(nt, {
                                        onClick: u ?? _,
                                        children: (0, l.jsx)(eV.D, {
                                            id: j,
                                            variant: "heading-md/medium",
                                            className: r()(t2.$2, { [t2.bC]: null != d }),
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(nt, {
                                              onClick: c ?? _,
                                              children: (0, l.jsx)(eG.E, {
                                                  variant: "text-sm/normal",
                                                  className: t2.LG,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(eU.h, { size: 8 }),
                                    s,
                                ],
                            }),
                            (0, l.jsx)("div", { className: t2.hO, children: d }),
                        ],
                    }),
                    a,
                ],
            }),
            null != E && null != N[E]
                ? (0, l.jsx)(t3, {
                      className: t2.zu,
                      applicationId: E,
                      userIds: [A.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: t1.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function nl(e) {
    let {
            title: t,
            subtitle: n,
            badges: s,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: u,
            onClickSubtitle: c,
            onUserPopoutClosed: d,
            trackRankingItemInteraction: h,
            ...p
        } = e,
        { actionString: f, canWatch: g } = (0, ts.K)(a),
        { entry: x } = p,
        A = (0, tL.zD)(x),
        C = A ? x.extra?.application_id : void 0,
        E = (0, td.W)();
    null != E && (C = E);
    let I = (0, ti.A)(
            {
                location: "ContentPopout",
                applicationId: C,
                source: tl.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(ec.PA.OPENED_GAME_PROFILE) },
        ),
        y = A ? I : void 0,
        { activity: S, activityApplication: v, fallbackApplication: N } = (0, tP.A)(x),
        { largeImage: _, smallImage: j } = (0, tO.D8)(S, v ?? N),
        { largeImage: b } = (0, tO.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        T = (0, m.bG)([tc.A], () => tc.A.getDetectableIdsToApplicationIds()),
        R = i.useContext(t8);
    return (0, l.jsxs)("div", {
        className: t2.au,
        children: [
            (0, l.jsx)(ne, { ...p, onUserPopoutClosed: d }),
            (0, l.jsxs)(t6, {
                backgroundImgSrc: b?.src,
                className: t2.uR,
                children: [
                    (0, l.jsx)(nt, {
                        onClick: g
                            ? () => {
                                  (eZ.default.selectVoiceChannel(a.channelId), (0, eY.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: t2.nh,
                            children: [
                                (0, l.jsx)(tr.A, { className: t2.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: t2.NE,
                                        children: (0, l.jsx)(eG.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: f,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: t2.$6,
                        children: [
                            null != _ &&
                                (0, l.jsx)("div", {
                                    className: t2.Fb,
                                    children: (0, l.jsx)(tk.d, {
                                        image: _,
                                        smallImage: j,
                                        onClick: o ?? y,
                                        size: tk.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: t2.gv,
                                children: [
                                    (0, l.jsx)(nt, {
                                        onClick: u ?? y,
                                        children: (0, l.jsx)(eV.D, {
                                            id: R,
                                            variant: "heading-md/semibold",
                                            className: t2.nk,
                                            lineClamp: 3,
                                            children: t,
                                        }),
                                    }),
                                    null != n
                                        ? (0, l.jsx)(nt, {
                                              onClick: c ?? y,
                                              children: (0, l.jsx)(eG.E, {
                                                  variant: "text-sm/normal",
                                                  className: t2.zA,
                                                  children: n,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(eU.h, { size: 8 }),
                                    s,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != C && null != T[C]
                ? (0, l.jsx)(t3, {
                      className: t2.zu,
                      applicationId: C,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: p.channel?.guild_id,
                      channelId: p.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: t1.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var ni = n(299846);
let ns = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: u, embeddedActivity: c } = (0, ni.u)(n);
    function d() {
        (0, ey.hg)(n.extra.application_id);
    }
    let { data: m } = (0, eS.YY)(n.extra.application_id),
        h = (0, eE.Ay)({ application: m, analyticsLocations: [S.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let p = (0, l.jsx)(eN.iT, { location: eN.N5.POPOUT, entry: n }),
        f = (0, l.jsx)(nn, {
            channel: t,
            userDescription: (0, ev.JM)(n) ? et.t.vPg1JT : et.t.rPqqts,
            title: n.extra.activity_name,
            subtitle: o,
            badges: p,
            entry: n,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : d,
            onClickSubtitle: r ? void 0 : d,
            onClickThumbnail: r ? void 0 : d,
        }),
        g = (0, eA.A)(u, ee.jUm.JOIN) || (0, eC.A)(u),
        x = g
            ? (0, l.jsx)(eI.A, {
                  embeddedActivity: c,
                  activity: u,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: ep.I,
              })
            : null,
        A =
            null == h
                ? null
                : (0, l.jsx)(ef.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: h,
                      text: et.intl.string(et.t["jaYS/h"]),
                      icon: eg.h,
                  }),
        C =
            null != A || r
                ? null
                : (0, l.jsx)(ef.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: d,
                      text: et.intl.string(et.t.GDWYR8),
                      icon: ex.k,
                  }),
        E = [A, g && !r ? x : C].filter(D.Vq);
    return (0, l.jsxs)(t5, {
        children: [
            f,
            (0, l.jsx)(t7, {
                children: (0, l.jsx)(t4, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: t,
                    entry: n,
                    buttons: E,
                }),
            }),
        ],
    });
};
var nr = n(322789),
    na = n(808380),
    no = n(687966),
    nu = n(39623),
    nc = n(960076),
    nd = n(544441),
    nm = n(562708),
    nh = n(139286);
function np(e) {
    let { application: t, analyticsLocation: n } = e,
        { analyticsLocations: i } = (0, N.Ay)(n),
        s = (0, eE.Ay)({ application: t, analyticsLocations: i });
    return (
        (0, nh.A)({
            name: nm.ImpressionNames.CLOUD_PLAY_CTA,
            type: nm.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            ef.$,
            {
                variant: "primary",
                size: "md",
                icon: eg.h,
                text: et.intl.string(et.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var nf = n(601007),
    ng = n(648246),
    nx = n(308335),
    nA = n(790381),
    nC = n(266080),
    nE = n(968309),
    nI = n(30370);
function ny(e) {
    let t = (0, m.bG)([nI.A], () => nI.A.getAccounts().some((t) => t.type === e)),
        n = i.useCallback(() => {
            if (null == e) return null;
            (0, nE.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return t ? void 0 : n;
}
var nS = n(18282);
let nv = [...nr.n, eN.Yq],
    nN = {
        [na.Y.DESKTOP]: null,
        [na.Y.LINUX]: null,
        [na.Y.MACOS]: null,
        [na.Y.NINTENDO]: null,
        [na.Y.IOS]: null,
        [na.Y.ANDROID]: null,
        [na.Y.XBOX]: nC.A,
        [na.Y.PLAYSTATION]: nA.A,
    },
    n_ = function (e) {
        let {
                channel: t,
                entry: n,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: u, details: c, appName: d, activity: m, embeddedActivity: h } = (0, ni.u)(n),
            { streamPreviewUrl: p, stream: f } = (0, tU.A)(n),
            g = n.extra.platform,
            x = n.extra.application_id,
            A = null != g ? nN[g] : null,
            C = ny(g === na.Y.XBOX ? ee.fg2.XBOX : g === na.Y.PLAYSTATION ? ee.fg2.PLAYSTATION : void 0),
            { data: E } = (0, eS.YY)(x),
            I = (0, nd.A)(x),
            { analyticsLocations: y } = (0, N.Ay)(S.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            v = (0, eE.JC)(E),
            _ = (0, nx.o)(m?.application_id ?? h?.applicationId ?? E?.id);
        if (null == u) return null;
        let j = (0, l.jsx)(eN.mG, {
                location: null == p ? eN.N5.POPOUT : eN.N5.STREAMING_POPOUT,
                children: nv.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
            }),
            b =
                null == f
                    ? (0, l.jsx)(nn, {
                          channel: t,
                          headerIcons:
                              null == A
                                  ? null
                                  : (0, l.jsx)(nS.A, {
                                        onClick: C,
                                        Icon: A,
                                        "aria-label": et.intl.string(et.t.YR4cHH),
                                    }),
                          userDescription: (0, ev.JM)(n) ? et.t.vPg1JT : et.t.rPqqts,
                          title: d,
                          subtitle: c,
                          badges: j,
                          entry: n,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              I.length > 0
                                  ? (0, l.jsx)(nf.A, {
                                        distributorCTAConfigs: I,
                                        applicationId: x,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(nl, {
                          channel: t,
                          title: n.extra.game_name,
                          subtitle: c,
                          badges: j,
                          userDescription: et.t["6oWFUN"],
                          entry: n,
                          stream: f,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              I.length > 0
                                  ? (0, l.jsx)(nf.A, {
                                        distributorCTAConfigs: I,
                                        applicationId: x,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            T =
                !_ && v
                    ? (0, l.jsx)(
                          np,
                          { application: E, analyticsLocation: S.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            R = [
                null == T && ((0, eA.A)(m, ee.jUm.JOIN) || (0, eC.A)(m))
                    ? (0, l.jsx)(
                          eI.A,
                          { activity: m, user: u, variant: "primary", size: "md", icon: no.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, nc.A)(m)
                    ? (0, l.jsx)(ng.A, { activity: m, size: "md", variant: "primary", icon: nu.EyeIcon }, "watch")
                    : null,
                T,
            ].filter(D.Vq);
        return (0, l.jsxs)(t5, {
            children: [
                b,
                (0, l.jsx)(t7, {
                    children: (0, l.jsx)(t4, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: u,
                        channel: t,
                        entry: n,
                        buttons: R,
                    }),
                }),
            ],
        });
    },
    nj = (0, n(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (t) => e({ activeEntryId: t }) }));
function nb(e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: s } = e,
        { data: r } = (0, eS.YY)(t.extra.application_id),
        { analyticsLocations: a } = (0, N.Ay)(S.A.CLOUD_PLAY_POPOVER),
        o = (0, eE.Ay)({ application: r, analyticsLocations: a }),
        u = (0, tt.HX)(eb.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !u && n,
        { activeEntryId: d, setActiveEntryId: m } = nj(),
        h = d === t.id,
        p = c && h ? [eb.M.CLOUD_PLAY_POPOVER] : [],
        [f, g] = (0, tF.kn)(p),
        x = f === eb.M.CLOUD_PLAY_POPOVER;
    (i.useEffect(() => {
        c && null === d && m(t.id);
    }, [d, c, t.id, m]),
        i.useEffect(
            () => () => {
                x && (g(tB.i.USER_DISMISS), m(null));
            },
            [x, g, m],
        ));
    let [A, C] = i.useState(!1);
    return (
        x && !A && C(!0),
        (0, nh.A)(
            {
                name: nm.ImpressionNames.CLOUD_PLAY_CTA,
                type: nm.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !A },
            [A],
        ),
        (0, l.jsx)(tG.A, {
            title: et.intl.string(et.t["+WNDtV"]),
            body: et.intl.string(et.t["5QKxGI"]),
            targetElementRef: s,
            shouldShow: x,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/912562ba9ec7f9f728ce5b336c9bed5f5195dcab1451d12b0e592b1a7389200c.svg",
            },
            actions: [
                {
                    icon: eg.h,
                    text: et.intl.string(et.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (g(tB.i.USER_DISMISS), m(null));
            },
        })
    );
}
let nT = function (e) {
    let { entry: t, isFirstApplicationOccurrence: n, targetElementRef: i } = e;
    return (0, l.jsx)(nb, { entry: t, targetElementRef: i, isFirstApplicationOccurrence: n });
};
var nR = n(363670);
n(321073);
var nO = n(205327),
    nL = n(52133),
    nM = n(835723),
    nk = n(172710),
    nw = n(655116),
    nP = n(763758),
    nD = n(286617),
    nU = n(533207),
    nV = n(280450),
    nG = n(121090),
    nF = n(693879),
    nB = n(809854),
    nH = n(272984),
    nW = n(170699);
function nK(e) {
    let { activity: t } = e,
        n = t.timestamps,
        { now: s } = (0, nB.e)(),
        { durationTimestamp: r, seekBarStyles: a } = i.useMemo(() => {
            let { start: e, end: n } = t.timestamps ?? {};
            if (null == e || null == n) return {};
            let l = Math.min(n, s),
                i = n - e,
                r = Math.floor((Math.max(l - e, 0) / i) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, ev.W6)({ start: 0 }, i) };
        }, [t, s]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: nW.lu,
              children: [
                  (0, l.jsx)(nF.z, { entry: n }),
                  (0, l.jsx)("div", { className: nW.Lt, children: (0, l.jsx)("div", { className: nW.Vp, style: a }) }),
                  (0, l.jsx)(eG.E, {
                      className: nW.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function nz(e) {
    let t,
        n,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: u } = e,
        { activity: c, currentEntry: d, artist: h, title: p, user: f } = (0, nR.u7)(r),
        g = ny(ee.fg2.SPOTIFY),
        x = (0, m.bG)(
            [nw.A, nV.default],
            () => (c?.type === ee.$pd.LISTENING && null != f ? (0, nD.A)(nw.A, nV.default, f, c) : void 0),
            [c, f],
            nL.A,
        );
    if (null == c || null == d) return null;
    let A = h,
        C = [];
    d.media.provider === nO.X.SPOTIFY &&
        ((n = () => {
            (0, nk.Mp)(c);
        }),
        (i = () => {
            (0, nk.QX)(c, f.id);
        }),
        (t = () => {
            null != g ? g() : (0, nk.Mp)(c);
        }),
        (A = (0, l.jsx)(nP.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: t2.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != f && (0, nk.mN)(c, f.id, e);
            },
        })),
        x?.syncDisabled === !1 &&
            C.push(
                (0, l.jsx)(
                    ef.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: et.intl.string(et.t.eU3inB),
                        icon: nM.J,
                        onClick: function () {
                            null != x && ((0, nU.A)(x, nH.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let E = (0, l.jsx)(nn, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            d.media.provider === nO.X.SPOTIFY
                ? (0, l.jsx)(nS.A, { onClick: t, "aria-label": et.intl.string(et.t.rRffNz), Icon: nG.A })
                : null,
        userDescription: (0, ev.JM)(r) ? et.t.Tzx5D2 : et.t.CcVI1T,
        title: p,
        onClickTitle: n,
        subtitle: A,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(nK, { activity: c }),
    });
    return (0, l.jsxs)(t5, {
        children: [
            E,
            (0, l.jsx)(t7, {
                children: (0, l.jsx)(t4, {
                    onReaction: o,
                    onVoiceChannelPreview: u,
                    user: f,
                    channel: s,
                    entry: r,
                    buttons: C,
                }),
            }),
        ],
    });
}
var nZ = n(903134),
    nY = n(56121),
    nq = n(263577),
    nJ = n(868065),
    n$ = n(804779);
let nX = [eN.Y8],
    nQ = [nY.j.WEEK],
    n0 = i.memo(function (e) {
        let { entry: t, channel: n, selected: i } = e,
            { largeImage: s } = (0, tO.nO)({ entry: t, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, ev.TQ)(t);
        return null != r && (0, D.S1)(r, nQ)
            ? (0, l.jsxs)(nJ.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(nJ.UA, {
                          children: [
                              (0, l.jsx)(nJ.Hp, { entry: t, channelId: n.id, guildId: n.guild_id }),
                              (0, l.jsx)(nJ.ZB, { children: t.extra.artist.name }),
                              (0, l.jsx)(eN.mG, {
                                  location: eN.N5.CARD,
                                  children: nX.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(nq.V, { src: s?.src, size: 48, className: n$.xn }),
                  ],
              })
            : null;
    });
var n1 = n(210528);
let n2 = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = n.extra.media,
        o = n.extra.artist.name,
        u = (0, m.bG)([eo.default], () => eo.default.getUser(n.author_id)),
        c = (0, ev.TQ)(n),
        d = ny(ee.fg2.SPOTIFY);
    if (null == u || !(0, D.S1)(c, nQ)) return null;
    function h() {
        let e = nH.M0.ALBUM,
            t = n1.A.isProtocolRegistered()
                ? nH.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id)
                : nH.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t);
    }
    return (0, l.jsxs)(t5, {
        children: [
            (0, l.jsx)(nn, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = nH.M0.ARTIST,
                        t = n1.A.isProtocolRegistered()
                            ? nH.RQ.PLAYER_OPEN(e, n.extra.artist.external_id)
                            : nH.RQ.WEB_OPEN(e, n.extra.artist.external_id);
                    window.open(t);
                },
                onClickThumbnail: h,
                channel: t,
                entry: n,
                headerIcons:
                    a === nO.X.SPOTIFY
                        ? (0, l.jsx)(nS.A, { onClick: d, Icon: nG.A, "aria-label": et.intl.string(et.t["0ZB/XE"]) })
                        : null,
                userDescription: et.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(eN.mG, {
                    location: eN.N5.POPOUT,
                    children: nX.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
            }),
            (0, l.jsx)(t7, {
                children: (0, l.jsx)(t4, { onReaction: i, onVoiceChannelPreview: s, user: u, channel: t, entry: n }),
            }),
        ],
    });
};
var n3 = n(977001);
let n8 = function (e) {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: u } = (0, ni.u)(n),
        c = (0, ev.ty)(n),
        d = (0, ev.TQ)(n);
    if (null == a || null == c || null == d || !(0, n3._E)(d)) return null;
    let m = null != n.extra.platform ? nN[n.extra.platform] : null;
    return (0, l.jsxs)(t5, {
        children: [
            (0, l.jsx)(nn, {
                channel: t,
                headerIcons:
                    null == m ? null : (0, l.jsx)(nS.A, { Icon: m, "aria-label": et.intl.string(et.t.YR4cHH) }),
                entry: n,
                userDescription: et.t.rPqqts,
                title: u,
                subtitle: o,
                badges: (0, l.jsx)(eN.mG, {
                    location: eN.N5.POPOUT,
                    children: n3.ac.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(t7, {
                children: (0, l.jsx)(t4, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: t, entry: n }),
            }),
        ],
    });
};
var n5 = n(514243),
    n6 = n(347306),
    n7 = n(123917),
    n4 = n(998218);
let n9 = function (e) {
    let { channel: t, entry: n, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([eo.default], () => eo.default.getUser(n.author_id)),
        a = ny(ee.fg2.CRUNCHYROLL);
    function o() {
        if (null == n.extra.url) return;
        let e = n4.A.safeParseWithQuery(n.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, n7.h)({ href: n4.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(t5, {
              children: [
                  (0, l.jsx)(nn, {
                      channel: t,
                      entry: n,
                      userDescription: (0, ev.JM)(n) ? et.t["LH+Z3y"] : et.t.YuKgml,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(nS.A, {
                          onClick: a,
                          Icon: n6.k,
                          "aria-label": et.intl.string(et.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(eN.mG, {
                          location: eN.N5.POPOUT,
                          children: n5.R.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(t7, {
                      children: (0, l.jsx)(t4, {
                          onReaction: i,
                          onVoiceChannelPreview: s,
                          user: r,
                          channel: t,
                          entry: n,
                      }),
                  }),
              ],
          });
};
function le(e) {
    return e?.type === ea.S9.CONTENT_INVENTORY
        ? e.entry.content_type === j.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function lt(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case j.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(nr.A, { ...n, entry: t });
        case j.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(n5.A, { ...n, entry: t });
        case j.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(n3.Ay, { ...n, entry: t });
        case j.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(n0, { ...n, entry: t });
        case j.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(nR.Ay, { ...n, entry: t });
        case j.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(eh.A, { ...n, entry: t });
        default:
            return null;
    }
}
function ln(e) {
    let { entry: t, targetElementRef: n, ...i } = e;
    return t.content_type === j.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(nT, {
              entry: t,
              targetElementRef: n,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function ll(e) {
    let { closePopout: t, ...n } = e;
    return (0, l.jsx)(li, {
        onReaction: (e, l) => {
            (n.trackRankingItemInteraction(e, { destinationChannelId: l.id, destinationGuildId: l.guild_id }), t());
        },
        closePopout: t,
        onVoiceChannelPreview: (e) => {
            n.trackRankingItemInteraction(ec.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...n,
    });
}
function li(e) {
    let { entry: t, ...n } = e;
    switch (t.content_type) {
        case j.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(n_, { ...n, entry: t });
        case j.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(n9, { ...n, entry: t });
        case j.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(n8, { ...n, entry: t });
        case j.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(n2, { ...n, entry: t });
        case j.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(nz, { ...n, entry: t });
        case j.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(ns, { ...n, entry: t });
        default:
            return null;
    }
}
let ls = i.memo(function (e) {
    let { index: t, ref: s, ...r } = e,
        a = i.useRef(null),
        [c, d] = i.useState("default"),
        [h, p] = i.useState(!1),
        f = (0, u.rm)(`${t}`),
        g = eo.default.getCurrentUser()?.isStaff(),
        { isRich: x, appName: C } = (0, ni.u)(r.entry);
    !(function (e) {
        let { markAsVisible: t } = i.useContext(G);
        i.useEffect(() => t(e), [t, e]);
    })(r.entry.id);
    let E = i.useMemo(
            () => ({
                entry: r.entry,
                channelId: r.channel.id,
                guildId: r.channel.guild_id,
                requestId: r.requestId,
                richPresenceName: x ? C : void 0,
            }),
            [C, r.channel.guild_id, r.channel.id, r.entry, r.requestId, x],
        ),
        I = i.useRef(!1),
        [S, v] = i.useState(!1),
        [N, _] = i.useState(!1),
        j = (0, m.bG)([y.Ay], () => y.Ay.keyboardModeEnabled);
    (i.useEffect(() => {
        S && j && _(!0);
    }, [S, j]),
        i.useLayoutEffect(() => {
            null != a.current && p(!0);
        }, []));
    let b = i.useCallback(
            (e) => {
                g &&
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("886456"), n.e("789346")]).then(n.bind(n, 949881));
                        return () => (0, l.jsx)(e, { entry: r.entry, requestId: r.requestId });
                    });
            },
            [r, g],
        ),
        T = i.useCallback(() => {
            d(String(Date.now()));
        }, []),
        R = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                em(e, { ...E, ...t });
            },
            [E],
        ),
        O = i.useMemo(
            () =>
                o().throttle(
                    (e) => {
                        em(ec.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        );
    function L() {
        ((I.current = !1),
            setTimeout(() => {
                I.current || (v(!1), _(j));
            }, 100));
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            h && (0, l.jsx)(ln, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: s,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && v(!0), O(E));
                        }, 100));
                },
                onMouseLeave: L,
                children: (0, l.jsx)(er.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, l.jsx)(nZ.J.Provider, {
                            value: L,
                            children: (0, l.jsx)(ll, {
                                closePopout: t,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: R,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: S,
                    positionKey: c,
                    onRequestOpen: () => O(E),
                    onRequestClose: () => {
                        N && L();
                    },
                    spacing: 8,
                    children: (e, t) => {
                        let { isShown: n } = t;
                        return (0, l.jsx)(z.D, {
                            ...e,
                            ...f,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                S || v(!0);
                            },
                            onContextMenu: b,
                            children: (0, l.jsx)(lt, {
                                ...r,
                                selected: n,
                                hovered: I.current,
                                trackRankingItemInteraction: R,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var lr = n(228366),
    la = n(531685),
    lo = n(99066),
    lu = n(376261),
    lc = n(99753),
    ld = n(136722),
    lm = n(860071),
    lh = n(696451),
    lp = n(488926),
    lf = n(818348);
let lg = 221552 == n.j ? [] : null,
    lx = new Set(),
    lA = new Set();
var lC = n(808323);
let lE = new Set([
        j.ContentInventoryEntryType.PLAYED_GAME,
        j.ContentInventoryEntryType.WATCHED_MEDIA,
        j.ContentInventoryEntryType.TOP_GAME,
        j.ContentInventoryEntryType.TOP_ARTIST,
        j.ContentInventoryEntryType.LISTENED_SESSION,
        j.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
    ]),
    lI = 221552 == n.j ? 3e3 : null;
var ly = n(878678),
    lS = n(69282),
    lv = n(657048),
    lN = n(728321),
    l_ = n(342296),
    lj = n(773669),
    lb = n(317525),
    lT = n(309010),
    lR = n(741961),
    lO = n(625494),
    lL = n(427262);
let lM = n(19575).Ay.getEnableHardwareAcceleration(),
    lk = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    lw = i.memo(function (e) {
        let {
                colorString: t,
                colorStrings: s,
                colorRoleName: r,
                colorRoleId: a,
                isOwner: o,
                nick: u,
                user: c,
                currentUser: m,
                activities: h,
                applicationStream: p,
                status: f,
                channel: g,
                guildId: x,
                isTyping: C,
                isMobileOnline: y,
                isVROnline: S,
                premiumSince: v,
                nameplate: _,
                ...j
            } = e,
            b = i.useRef(null),
            [T, R] = i.useState(!1),
            O = null != v ? new Date(v) : null,
            { analyticsLocations: L } = (0, N.Ay)(),
            M = i.useCallback(
                (e) => {
                    (0, A.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                n.e("403382"),
                                n.e("597981"),
                                n.e("622936"),
                                n.e("216947"),
                                n.e("463317"),
                                n.e("326692"),
                                n.e("834552"),
                                n.e("993103"),
                                n.e("708757"),
                                n.e("585968"),
                                n.e("893190"),
                                n.e("21921"),
                                n.e("571210"),
                                n.e("676418"),
                                n.e("189673"),
                                n.e("166495"),
                                n.e("88342"),
                                n.e("311802"),
                                n.e("229787"),
                                n.e("698965"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("869853"),
                                n.e("691994"),
                                n.e("682337"),
                                n.e("576665"),
                                n.e("235313"),
                                n.e("371133"),
                                n.e("454625"),
                                n.e("538887"),
                                n.e("436564"),
                                n.e("939171"),
                                n.e("624198"),
                                n.e("252229"),
                                n.e("245996"),
                                n.e("856753"),
                                n.e("700792"),
                                n.e("592822"),
                                n.e("529422"),
                                n.e("823427"),
                                n.e("214461"),
                                n.e("309291"),
                                n.e("449145"),
                                n.e("307059"),
                                n.e("349644"),
                                n.e("365826"),
                                n.e("649520"),
                                n.e("493014"),
                                n.e("242204"),
                                n.e("825486"),
                                n.e("522261"),
                                n.e("678195"),
                                n.e("713708"),
                                n.e("343116"),
                                n.e("139103"),
                                n.e("470314"),
                                n.e("774021"),
                                n.e("70515"),
                                n.e("404524"),
                                n.e("654148"),
                                n.e("830221"),
                                n.e("666939"),
                                n.e("324240"),
                                n.e("221879"),
                                n.e("717334"),
                                n.e("184841"),
                            ]).then(n.bind(n, 107632)),
                            t = tj.A.isInChannel(lT.Ay.getVoiceChannelId(), c.id);
                        return (n) =>
                            (0, l.jsx)(e, {
                                ...n,
                                user: c,
                                guildId: x,
                                channel: g,
                                showMediaItems: t,
                                analyticsLocations: L,
                            });
                    });
                },
                [c, x, g, L],
            ),
            k = i.useCallback(() => {
                let e = `@${lL.Ay.getUserTag(c, { decoration: "never" })}`,
                    t = `<@${c.id}>`;
                (lO._.dispatch(ee.jej.TEXTAREA_FOCUS, { channelId: g.id }),
                    lO._.dispatchToLastSubscribed(ee.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    E.A.startTyping(g.id));
            }, [c, g.id]),
            w = i.useCallback(
                (e) => {
                    null != x &&
                        (e.stopPropagation(),
                        (0, ly.K4)({
                            guildId: x,
                            location: { section: ee.JJy.MEMBER_LIST, object: ee.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [x],
            );
        return (0, l.jsx)(l_.A, {
            targetElementRef: b,
            user: c,
            guildId: x,
            channelId: g.id,
            roleId: a,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: k,
            shouldShow: T,
            onRequestClose: () => {
                R(!1);
            },
            children: (e) => {
                let { onClick: n, onMouseDown: i, ...a } = e;
                return (0, l.jsx)(I.A, {
                    ref: b,
                    className: el.Dc,
                    onContextMenu: M,
                    shouldAnimateStatus: lM,
                    user: c,
                    currentUser: m,
                    nick: u,
                    status: f,
                    activities: h,
                    applicationStream: p,
                    isOwner: o,
                    premiumSince: O,
                    colorString: t,
                    colorStrings: s,
                    colorRoleName: r,
                    isTyping: C,
                    channel: g,
                    guildId: x,
                    isMobile: y,
                    isVR: S,
                    onClickPremiumGuildIcon: w,
                    selected: T,
                    itemProps: j,
                    nameplate: _,
                    onClick: (e) => {
                        e.shiftKey ? k?.() : R((e) => !e);
                    },
                    onMouseDown: (e) => {
                        T ? e.stopPropagation() : i?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    lP = i.memo(function (e) {
        let { colorRoleId: t, ...n } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, u.rm)(`${r}`),
            o = (0, m.bG)([lR.A], () => lR.A.isTyping(i.id, s.id)),
            c = (0, m.bG)([eo.default], () => eo.default.getCurrentUser()),
            d = (0, m.bG)([lb.A], () => (null != t ? lb.A.getRole(i.guild_id, t)?.name : void 0), [i, t]),
            h = (0, B.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(lw, { ...n, ...a, isTyping: o, currentUser: c, colorRoleName: d, nameplate: h });
    }),
    lD = i.memo(function (e) {
        let { id: t, title: s, count: r, guildId: a, className: o } = e,
            u = (0, lS.Xx)({ roleId: t, guildId: a, size: 16 }),
            c = (0, m.bG)([lj.default], () => (null == r ? null : new Intl.NumberFormat(lj.default.locale).format(r)), [
                r,
            ]),
            d = i.useCallback(
                (e) => {
                    u?.src != null &&
                        (0, A.L3)(e, async () => {
                            let { default: e } = await Promise.all([n.e("95340"), n.e("733743")]).then(
                                n.bind(n, 455538),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, imageUrl: u.src });
                        });
                },
                [u?.src],
            );
        return t === ee.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: o, children: (0, l.jsx)("div", { className: el.k1 }) })
            : (0, l.jsxs)(Z.A, {
                  className: o,
                  children: [
                      (0, l.jsx)(h.A, {
                          children: null == r ? s : et.intl.format(et.t.Uaqbke, { title: s, count: r }),
                      }),
                      (0, l.jsxs)("div", {
                          className: el.CN,
                          "aria-hidden": !0,
                          children: [
                              null != u
                                  ? (0, l.jsx)("span", {
                                        onContextMenu: d,
                                        children: (0, l.jsx)(lv.A, { className: el.UT, ...u }),
                                    })
                                  : null,
                              (0, l.jsx)("span", { className: el.iy, children: s }),
                              null == c ? null : (0, l.jsxs)("span", { children: ["\xa0\u2014 ", c] }),
                          ],
                      }),
                  ],
              });
    });
function lU(e) {
    let { index: t } = e,
        n = (0, u.rm)(`${t}`);
    return (0, l.jsx)(I.A, { itemProps: n });
}
class lV extends i.Component {
    _list = null;
    _firstApplicationIdOccurrences = null;
    _lastRowsVersion;
    lastReportedAnalyticsChannel;
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        (this.updateSubscription(), this.trackMemberListViewed());
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen());
    }
    setList = (e) => {
        ((this._list = e), (this.props.listRef.current = e));
    };
    renderSection = (e) => {
        let { section: t } = e,
            { groups: n, channel: s } = this.props,
            r = n[t];
        if (r?.id === $) return (0, i.createElement)(ei, { ...r, key: `section-${t}` });
        if (0 === t) {
            let { key: e } = r;
            return (0, l.jsx)(
                lN.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: lk,
                    children: (0, i.createElement)(lD, {
                        ...r,
                        key: `section-${e}`,
                        guildId: s.guild_id,
                        className: el.lL,
                    }),
                },
                `section-${t}`,
            );
        }
        return (0, i.createElement)(lD, { ...r, key: `section-${t}`, guildId: s.guild_id, className: el.lL });
    };
    getRowProps = (e) => {
        let { groups: t, rows: n } = this.props,
            l = t[e.section];
        if (null == l) return null;
        let { index: i } = l;
        return null == i || "row" !== e.type ? null : n[i + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: t } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t)
            return this._firstApplicationIdOccurrences;
        let n = new Set(),
            l = new Set();
        for (let t of e)
            if (null != t && t.type === ea.S9.CONTENT_INVENTORY) {
                let { entry: e } = t;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let t = e.extra.application_id;
                    n.has(t) || (n.add(t), l.add(e.id));
                }
            }
        return ((this._firstApplicationIdOccurrences = l), (this._lastRowsVersion = t), l);
    };
    renderRow = (e) => {
        let { section: t, row: n, rowIndex: i } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === ea.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: t,
                    colorRoleId: n,
                    user: a,
                    status: o,
                    isOwner: u,
                    isMobileOnline: c,
                    isVROnline: d,
                    nick: m,
                    activities: h,
                    applicationStream: p,
                    premiumSince: f,
                } = r;
                return (0, l.jsx)(
                    lP,
                    {
                        colorString: e,
                        colorStrings: t,
                        colorRoleId: n,
                        user: a,
                        status: o,
                        isOwner: u,
                        nick: m,
                        activities: h,
                        applicationStream: p,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: f,
                        isMobileOnline: c,
                        isVROnline: d,
                        index: i,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === ea.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let t = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    ls,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: t },
                    e,
                );
            }
            if (r.type === ea.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(es, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(lU, { index: i }, `placeholder-${t}:${n}`);
    };
    handleScroll = () => {
        (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
    };
    updateMaxContentFeedRowSeen = o().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            l = n + t - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(l);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === $) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: t } = this.props;
        if (null != e) {
            let { rows: n } = this.props,
                l = e.index;
            return function (e, i) {
                return 0 === e ? le(n[l + 1 + i]) : t;
            };
        }
        return t;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: t, rowHeight: n, y: l } = e,
            i = this.getContentFeedHeight(),
            s = Math.max(0, t - Math.max(0, i - l)),
            r = Math.floor(s / n);
        return { height: s, rowHeight: n, rowsVisible: r, y: Math.max(0, l - i) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: t, scrollTop: n } = e.getScrollerState(),
            { rowHeight: l } = this.props,
            i = Math.floor(t / l);
        return this.getContentFeedAdjustedDimensions({ height: t, rowHeight: l, rowsVisible: i, y: n });
    }
    updateSubscription = o().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: t, y: n, height: l } = this.getDimensions();
        (0, C.NJ)({ guildId: e.guild_id, channelId: e.id, y: n, height: l, rowHeight: t });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: t } = this.getDimensions();
        if (void 0 === t || 0 === t || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let n = e
            .map((e) => this.getRowProps(e))
            .slice(0, t + 1)
            .filter(D.Vq);
        if (0 === n.length) return;
        let l = n.reduce(
            (e, t) => (
                t.type !== ea.S9.MEMBER ||
                    (e.num_users_visible++,
                    t.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != t.activities &&
                        t.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        t.activities.some((e) => e.type === ee.$pd.PLAYING) &&
                            e.num_users_visible_with_game_activity++),
                    null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    t.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
                e
            ),
            {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0,
                num_users_visible_with_nameplate: 0,
            },
        );
        ((this.lastReportedAnalyticsChannel = this.props.channel.id),
            v.Ay.trackWithMetadata(ee.HAw.MEMBER_LIST_VIEWED, { ...l }));
    };
    render() {
        let { groups: e, listId: t, channel: n, sectionHeight: i } = this.props;
        return (0, l.jsx)(p.sk, {
            children: (s) =>
                (0, l.jsx)(tf.V0, {
                    children: (a) =>
                        (0, l.jsx)("aside", {
                            className: r()(el.yg, el.ML),
                            "aria-labelledby": a,
                            children: (0, l.jsx)(f.F, {
                                component: (0, l.jsx)(h.A, {
                                    children: (0, l.jsx)(f.H, {
                                        id: a,
                                        children: et.intl.format(et.t.JBQxV6, {
                                            channel: (0, e7.m1)(n, eo.default, tN.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(u.PR, {
                                    children: (n) => {
                                        let { ref: a, role: o, ...u } = n;
                                        return (0, l.jsx)(
                                            g.OZ,
                                            {
                                                role: o,
                                                "aria-label": et.intl.string(et.t["9Oq93m"]),
                                                ref: (e) => {
                                                    ((this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (a.current = e?.getScrollerNode() ?? null));
                                                },
                                                className: r()(el.ol, { [el.Ij]: d.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...u,
                                                ...s,
                                            },
                                            t,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function lG(e) {
    let { channel: t, className: n } = e,
        { analyticsLocations: s } = (0, N.Ay)(S.A.MEMBER_LIST),
        a = (0, m.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        o = (0, m.cf)([ea.Ay], () => ea.Ay.getProps(t.guild_id, t.id)),
        {
            rows: d,
            groups: h,
            version: p,
            updateMaxRowSeen: f,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: t, rows: n, version: l },
                    channelId: s,
                    guildId: r,
                } = e,
                [a, o] = i.useState(!1),
                {
                    requestId: u,
                    entries: c,
                    impressionCappedEntryIds: d,
                } = (function (e) {
                    var t, n;
                    let l,
                        s = (0, lC.A)({ id: ec.X1.GLOBAL_FEED });
                    s = (function (e) {
                        let { entries: t, channelId: n } = e,
                            l = (0, m.bG)([ty.A], () => ty.A.getChannel(n)),
                            s = l?.guild_id,
                            r = i.useRef(new Set()),
                            a = i.useMemo(() => {
                                let e = new Set(t?.map((e) => e.author_id));
                                return ((0, nL.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [t]);
                        i.useEffect(() => {
                            null != s &&
                                Array.from(a).forEach((e) => {
                                    lm.A.requestMember(s, e);
                                });
                        }, [a, s]);
                        let o = (0, m.yK)(
                                [lh.Ay],
                                () => {
                                    if (null == s) return lg;
                                    let e = [];
                                    for (let t of a) lh.Ay.isMember(s, t) && e.push(t);
                                    return e;
                                },
                                [a, s],
                            ),
                            u = i.useMemo(() => {
                                if (null == l || 0 === o.length) return lx;
                                let e = new Set();
                                for (let t of o) {
                                    let n = lp.cc({ user: t, context: l });
                                    ld.zy(n, lf.xB.VIEW_CHANNEL) && e.add(t);
                                }
                                return e;
                            }, [o, l]);
                        return i.useMemo(() => t?.filter((e) => u.has(e.author_id)), [t, u]);
                    })({ entries: s, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((t = s = i.useMemo(() => s?.filter((e) => lE.has(e.content_type)), [s])),
                        (l = (0, m.bG)(
                            [q.A, lc.A],
                            () => {
                                let e = lc.A.getDebugImpressionCappingDisabled();
                                return !(0, lo.sE)("useFilterImpressionCappedContent") || e
                                    ? lA
                                    : q.A.getImpressionCappedItemIds();
                            },
                            [t],
                        )),
                        i.useMemo(() => {
                            if (null == t) return { entries: t, filteredIds: lA };
                            let e = new Set();
                            return {
                                entries: t.filter((t) => !!(0, ev.JM)(t) || !l.has(t.id) || (e.add(t.id), !1)),
                                filteredIds: e,
                            };
                        }, [t, l]));
                    s = r;
                    let o = (0, m.bG)([lc.A], () => lc.A.getFeedRequestId(ec.X1.GLOBAL_FEED));
                    return (
                        (n = s),
                        {
                            requestId: o,
                            entries: (s = i.useContext(G).useInjectEntriesWithPreviewData(n)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(s),
                h = (0, m.bG)([q.A], () => q.A.hidden),
                p = (0, m.bG)([la.A], () => la.A.isFocused()),
                f = (0, m.bG)([ty.A], () => ty.A.getChannel(s)),
                g = (0, m.bG)([tS.A], () => tS.A.getGuild(r), [r]),
                x = ((0, lu.T)(g) ?? !1) && f?.isForumChannel() === !1,
                [A, C, E, I] = i.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == u || !x) return [t, n, l];
                    let i = a ? c.length : 3,
                        d = c.slice(0, i);
                    e = h
                        ? [{ type: ea.S9.HIDDEN_CONTENT_INVENTORY }]
                        : d.map((e) => ({ type: ea.S9.CONTENT_INVENTORY, entry: e, requestId: u }));
                    let m = {
                        id: $,
                        type: ea.S9.CONTENT_INVENTORY_GROUP,
                        key: $,
                        count: e.length,
                        index: n.length,
                        title: et.intl.string(et.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let t = !e;
                                return (
                                    eu.default.track(ee.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: s,
                                        guild_id: r,
                                        expanded: t,
                                    }),
                                    t
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(le).reduce((e, t) => e + t, 0),
                    };
                    return [[m, ...t], [...n, m, ...e], Math.random(), e];
                }, [s, c, a, t, r, u, n, l, h, x]),
                y = i.useRef(0),
                S = i.useRef(c),
                v = i.useRef(void 0),
                N = i.useRef({ impressionCappedEntryIds: d }),
                _ = i.useCallback(
                    (e) => {
                        let t = Math.floor(e / 72),
                            n = Math.min(I?.length ?? 0, t);
                        y.current = Math.max(y.current, n);
                    },
                    [I],
                );
            return (
                i.useEffect(() => {
                    S.current = c;
                }, [c]),
                i.useEffect(() => {
                    N.current = { impressionCappedEntryIds: d };
                }, [d]),
                i.useEffect(
                    () => (
                        (y.current = 0),
                        (v.current = Date.now()),
                        () => {
                            if (null == u || null == v.current || Date.now() - v.current < lI) return;
                            let e = S.current?.map((e) => e.id) ?? [],
                                t = e.slice(0, y.current);
                            !h &&
                                p &&
                                x &&
                                (ed(ee.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: u,
                                    first_shown_at: v.current,
                                    item_ids: t,
                                    surface_type: ec.UG.GUILD_MEMBER_LIST,
                                    channel_id: s,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [...N.current.impressionCappedEntryIds],
                                }),
                                (0, lo.sE)("useInjectContentInventoryFeed") &&
                                    lr.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: t }));
                        }
                    ),
                    [u, s, r, h, p, x],
                ),
                { groups: A, rows: C, version: E, updateMaxRowSeen: _ }
            );
        })({ memberStoreProps: o, channelId: t.id, guildId: t.guild_id }),
        g = i.useRef(null),
        A = i.useRef(null);
    i.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                A.current?.focus({ preventScroll: !0 }));
    }, []);
    let C = (0, x.W)("lg") + (0, x.W)("xxs"),
        E = i.useCallback(
            (e, t) => {
                let n = g.current;
                if (null == n) return;
                let l = t === X || t === Q ? 0 : parseInt(t, 10),
                    [i, s] = n.getSectionRowFromIndex(l);
                n.scrollToIndex({
                    section: i,
                    row: s,
                    padding: 42 * (0 === i && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        I = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        v = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        _ = (0, c.Ay)({ id: `members-${t.id}`, setFocus: E, isEnabled: a, scrollToStart: I, scrollToEnd: v });
    return (0, l.jsx)(N.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            ref: A,
            tabIndex: -1,
            className: r()(el.kL, n),
            children: (0, l.jsx)(u.hD, {
                navigator: _,
                children: (0, l.jsx)(lV, {
                    ...e,
                    ...o,
                    version: p,
                    groups: h,
                    rows: d,
                    listRef: g,
                    updateMaxContentFeedRowSeen: f,
                    sectionHeight: 18 + C,
                    rowHeight: 42,
                }),
            }),
        }),
    });
}
function lF(e) {
    let { channel: t, className: n } = e,
        s = i.useDeferredValue(t);
    return i.useMemo(() => (0, l.jsx)(F, { children: (0, l.jsx)(lG, { channel: s, className: n }) }), [s, n]);
}
