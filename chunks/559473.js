(n.r(t), n.d(t, { default: () => e2 }));
var l,
    i = n(477900),
    s = n(582128),
    a = n(435558),
    r = n(506774),
    o = n(534514),
    d = n(789645),
    c = n(707554),
    u = n(289873),
    m = n(761929),
    f = n(429913),
    x = n(793943),
    h = n(409626),
    g = n(692969),
    p = n(58736),
    j = n(381999),
    A = n(143129),
    E = n(939249),
    v = n(834730),
    b = n(320448),
    I = n(444927),
    C = n(855986),
    N = n(858899),
    _ = n(271866),
    R = n(733391),
    D = n(832163),
    S = n(147964),
    O = n(792996);
function k(e) {
    null != D.A.getStorefrontDataForApplicationId(e) && (0, R.ap)(e, { forceFetch: !0 });
}
function y(e) {
    let t = (0, C.bG)([S.A], () => S.A.inTestModeForApplication(e), [e]);
    return {
        isEnabled: t,
        isPending: (0, C.bG)([S.A], () => S.A.isFetchingAuthorization),
        setEnabled: s.useCallback(
            async (t) => {
                if (!t) {
                    (_.cL(), k(e));
                    return;
                }
                null == (await _.q1(e))
                    ? (0, N.P0)({ text: S.A.error ?? O.intl.string(O.t.SDP0vo), variant: "critical" })
                    : k(e);
            },
            [e],
        ),
    };
}
var L = n(658997),
    T = n(287809);
function W(e) {
    let t = (0, L.A)(e, !0),
        n = (0, C.bG)([T.default], () => T.default.getCurrentUser()?.isStaff() ?? !1),
        l = (0, C.bG)([S.A], () => S.A.inTestModeForApplication(e), [e]);
    return t || n || l;
}
var w = n(86495),
    G = n(753114);
function F(e) {
    let { application: t, tools: n, onOpenTool: l, returnFocusToolId: s } = e,
        a = y(t.id),
        r = W(t.id);
    return (0, i.jsxs)("div", {
        className: G.iR,
        children: [
            (0, i.jsx)("ul", {
                className: G.Yl,
                children: n.map((e) =>
                    (0, i.jsx)(
                        "li",
                        { children: (0, i.jsx)(B, { tool: e, onOpen: l, shouldFocusOnMount: e.id === s }) },
                        e.id,
                    ),
                ),
            }),
            r &&
                (0, i.jsx)("div", {
                    className: G.a5,
                    children: (0, i.jsx)(A.d, {
                        label: O.intl.string(w.default["5+pp1j"]),
                        description: O.intl.string(w.default.UEBUZF),
                        checked: a.isEnabled,
                        disabled: a.isPending,
                        onChange: a.setEnabled,
                    }),
                }),
        ],
    });
}
function B(e) {
    let { tool: t, onOpen: n, shouldFocusOnMount: l } = e,
        a = s.useRef(null),
        r = s.useId(),
        o = s.useId(),
        d = t.icon,
        c = (0, I.A)(() => l);
    return (
        s.useEffect(() => {
            c && a.current?.focus({ preventScroll: !0 });
        }, [c]),
        (0, i.jsxs)(E.D, {
            innerRef: a,
            className: G.rf,
            onClick: () => n(t),
            "aria-labelledby": r,
            "aria-describedby": o,
            children: [
                (0, i.jsx)(d, { size: "sm", color: "currentColor", className: G.ke }),
                (0, i.jsxs)("div", {
                    className: G.C_,
                    children: [
                        (0, i.jsx)(v.E, { id: r, variant: "body-sm/semibold", color: "text-strong", children: t.name }),
                        (0, i.jsx)(v.E, {
                            id: o,
                            variant: "body-xs/medium",
                            color: "text-subtle",
                            children: t.description,
                        }),
                    ],
                }),
                (0, i.jsx)(b.ChevronSmallRightIcon, { size: "sm", color: "currentColor", className: G.ai }),
            ],
        })
    );
}
var P = n(503698),
    M = n.n(P),
    z = n(821609),
    K = n(292801),
    U = n(866665),
    V = n(408278),
    Z = n(173936),
    Y = n(638916),
    X = n(871123),
    q = n(192308),
    J = n(294454),
    $ = n(366523),
    H = n(67480),
    Q = n(129230),
    ee = n(957565),
    et = n(300654);
function en(e) {
    let { title: t, description: n, children: l, footer: a } = e,
        r = s.useRef(null);
    return (
        s.useEffect(() => {
            r.current?.focus({ preventScroll: !0 });
        }, []),
        (0, i.jsxs)("div", {
            className: et.MY,
            children: [
                (0, i.jsx)("div", {
                    className: et.Qs,
                    children: (0, i.jsx)(c.F, {
                        component: (0, i.jsxs)("div", {
                            ref: r,
                            tabIndex: -1,
                            className: et.gn,
                            children: [
                                (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                                (0, i.jsx)(v.E, { variant: "body-sm/medium", color: "text-subtle", children: n }),
                            ],
                        }),
                        children: l,
                    }),
                }),
                (0, i.jsx)("div", { className: et.qr, children: a }),
            ],
        })
    );
}
var el =
    (((l = {}).EMBED_BUILDER = "embed_builder"),
    (l.DRAFT_PREVIEW = "draft_preview"),
    (l.ACCOUNT_LINKING = "account_linking"),
    l);
let ei = "embed-builder";
var es = n(652215),
    ea = n(25082),
    er = n(645429);
function eo() {
    let { config: e, selectedIds: t, actions: l } = (0, j.qZ)((e) => e),
        s = e?.applicationId,
        a = (0, f.h)(s),
        r = (0, C.yK)([H.A], () => [...t].map((e) => H.A.get(e)), [t]),
        o = t.size > 0;
    function d(e) {
        return {
            application_id: e,
            application_name: a?.name ?? null,
            guild_id: (0, X.n5)(e) ?? null,
            sku_ids: r.map((e) => e.id),
            sku_count: r.length,
        };
    }
    return (0, i.jsx)(en, {
        title: O.intl.string(ea.default.Z3uXLR),
        description: O.intl.string(ea.default.sS4xGd),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: er.$o,
                    children: [
                        (0, i.jsx)(z.$, {
                            icon: K.ArrowAngleRightUpIcon,
                            disabled: !o,
                            text: O.intl.string(ea.default.ozurym),
                            variant: "primary",
                            fullWidth: !0,
                            onClick: function () {
                                null != s &&
                                    (Q.default.track(es.HAw.SLAYER_STOREFRONT_EMBED_SHARE_CLICKED, d(s)),
                                    l.endMultiselect(ei),
                                    ((e) => {
                                        let { skus: t, source: l } = e;
                                        0 !== t.length &&
                                            (0, q.mM)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e(325522),
                                                        n.e(401317),
                                                        n.e(790340),
                                                        n.e(147119),
                                                        n.e(668756),
                                                        n.e(425292),
                                                        n.e(209994),
                                                        n.e(552653),
                                                        n.e(311580),
                                                        n.e(174554),
                                                        n.e(116815),
                                                        n.e(62567),
                                                        n.e(991625),
                                                        n.e(230029),
                                                        n.e(891089),
                                                        n.e(585733),
                                                        n.e(861973),
                                                        n.e(329172),
                                                        n.e(196063),
                                                        n.e(392028),
                                                        n.e(124054),
                                                        n.e(441674),
                                                        n.e(152862),
                                                        n.e(148326),
                                                        n.e(148729),
                                                        n.e(650195),
                                                        n.e(67702),
                                                        n.e(662387),
                                                        n.e(31544),
                                                        n.e(629972),
                                                        n.e(334168),
                                                        n.e(582012),
                                                        n.e(166336),
                                                        n.e(113658),
                                                        n.e(162182),
                                                        n.e(860640),
                                                        n.e(681801),
                                                        n.e(85427),
                                                        n.e(66149),
                                                        n.e(281342),
                                                        n.e(967850),
                                                        n.e(67909),
                                                        n.e(916885),
                                                        n.e(272804),
                                                        n.e(505866),
                                                        n.e(291329),
                                                        n.e(449933),
                                                        n.e(985236),
                                                        n.e(678906),
                                                        n.e(799357),
                                                        n.e(889880),
                                                        n.e(375724),
                                                        n.e(999272),
                                                        n.e(701406),
                                                        n.e(216112),
                                                        n.e(490514),
                                                        n.e(962953),
                                                        n.e(550929),
                                                        n.e(415695),
                                                        n.e(64769),
                                                        n.e(644013),
                                                        n.e(971156),
                                                        n.e(60002),
                                                        n.e(260009),
                                                        n.e(715867),
                                                        n.e(249938),
                                                        n.e(266201),
                                                        n.e(752704),
                                                        n.e(56606),
                                                        n.e(940298),
                                                        n.e(738015),
                                                        n.e(40791),
                                                        n.e(358404),
                                                        n.e(996907),
                                                        n.e(831130),
                                                        n.e(377989),
                                                        n.e(358931),
                                                        n.e(880150),
                                                        n.e(168248),
                                                        n.e(490743),
                                                        n.e(533240),
                                                        n.e(985768),
                                                        n.e(734818),
                                                        n.e(936090),
                                                        n.e(841136),
                                                        n.e(560338),
                                                        n.e(459086),
                                                        n.e(720210),
                                                        n.e(601152),
                                                        n.e(319714),
                                                        n.e(331249),
                                                        n.e(949117),
                                                        n.e(921611),
                                                        n.e(686889),
                                                        n.e(560570),
                                                        n.e(592e3),
                                                        n.e(524434),
                                                        n.e(992956),
                                                        n.e(896691),
                                                        n.e(334733),
                                                        n.e(779367),
                                                        n.e(428643),
                                                        n.e(630290),
                                                        n.e(189423),
                                                        n.e(706073),
                                                        n.e(227512),
                                                        n.e(933947),
                                                        n.e(866475),
                                                        n.e(465773),
                                                        n.e(650376),
                                                        n.e(587618),
                                                        n.e(424199),
                                                        n.e(342551),
                                                        n.e(194277),
                                                        n.e(125729),
                                                        n.e(888326),
                                                        n.e(695765),
                                                        n.e(339282),
                                                        n.e(100309),
                                                        n.e(454048),
                                                        n.e(508702),
                                                        n.e(300699),
                                                        n.e(349619),
                                                        n.e(264236),
                                                        n.e(922716),
                                                        n.e(543039),
                                                        n.e(481647),
                                                        n.e(398125),
                                                        n.e(221825),
                                                        n.e(930758),
                                                        n.e(776195),
                                                        n.e(901555),
                                                        n.e(44561),
                                                        n.e(253729),
                                                        n.e(593600),
                                                        n.e(879315),
                                                        n.e(749248),
                                                        n.e(827708),
                                                        n.e(266900),
                                                        n.e(707826),
                                                        n.e(948804),
                                                        n.e(199999),
                                                        n.e(37085),
                                                        n.e(890027),
                                                        n.e(638221),
                                                        n.e(809915),
                                                        n.e(110116),
                                                        n.e(900361),
                                                        n.e(161379),
                                                        n.e(851130),
                                                        n.e(672727),
                                                        n.e(417286),
                                                        n.e(927211),
                                                        n.e(361626),
                                                        n.e(646506),
                                                        n.e(445124),
                                                        n.e(76428),
                                                        n.e(445421),
                                                        n.e(783988),
                                                        n.e(721690),
                                                        n.e(832823),
                                                        n.e(302008),
                                                        n.e(761935),
                                                        n.e(511527),
                                                        n.e(763070),
                                                        n.e(502018),
                                                        n.e(276863),
                                                        n.e(955184),
                                                        n.e(441432),
                                                        n.e(728633),
                                                        n.e(628439),
                                                        n.e(35757),
                                                        n.e(570506),
                                                        n.e(539620),
                                                        n.e(225990),
                                                        n.e(951811),
                                                        n.e(883850),
                                                        n.e(787672),
                                                        n.e(522517),
                                                        n.e(996830),
                                                        n.e(234236),
                                                        n.e(832817),
                                                        n.e(893928),
                                                        n.e(416143),
                                                        n.e(401590),
                                                        n.e(844695),
                                                        n.e(844780),
                                                        n.e(592028),
                                                        n.e(425906),
                                                        n.e(791154),
                                                        n.e(92124),
                                                        n.e(123216),
                                                        n.e(50015),
                                                        n.e(263765),
                                                        n.e(988077),
                                                        n.e(232551),
                                                        n.e(631644),
                                                        n.e(182408),
                                                        n.e(561216),
                                                        n.e(648365),
                                                        n.e(692835),
                                                        n.e(21219),
                                                        n.e(829177),
                                                        n.e(106943),
                                                        n.e(348674),
                                                        n.e(14962),
                                                        n.e(45072),
                                                        n.e(786751),
                                                        n.e(422891),
                                                        n.e(790244),
                                                        n.e(121435),
                                                        n.e(491279),
                                                        n.e(398793),
                                                        n.e(592731),
                                                        n.e(723794),
                                                        n.e(958428),
                                                        n.e(317225),
                                                        n.e(53374),
                                                        n.e(482815),
                                                        n.e(56021),
                                                        n.e(124060),
                                                        n.e(240511),
                                                        n.e(718573),
                                                        n.e(146566),
                                                        n.e(693832),
                                                        n.e(32661),
                                                        n.e(377766),
                                                        n.e(545587),
                                                        n.e(376883),
                                                        n.e(696123),
                                                        n.e(647211),
                                                        n.e(799657),
                                                        n.e(810034),
                                                        n.e(817852),
                                                        n.e(133179),
                                                        n.e(784103),
                                                        n.e(614784),
                                                        n.e(8563),
                                                        n.e(444376),
                                                        n.e(499941),
                                                        n.e(509793),
                                                        n.e(831145),
                                                        n.e(187856),
                                                        n.e(555793),
                                                        n.e(960286),
                                                        n.e(610449),
                                                        n.e(271244),
                                                        n.e(32781),
                                                        n.e(996218),
                                                        n.e(488990),
                                                        n.e(959134),
                                                        n.e(577084),
                                                        n.e(729599),
                                                        n.e(826240),
                                                        n.e(924862),
                                                        n.e(73500),
                                                        n.e(371482),
                                                        n.e(912773),
                                                        n.e(35403),
                                                        n.e(68904),
                                                        n.e(796867),
                                                        n.e(919307),
                                                        n.e(565617),
                                                        n.e(488934),
                                                        n.e(41991),
                                                        n.e(872648),
                                                        n.e(409843),
                                                        n.e(565065),
                                                        n.e(834386),
                                                        n.e(482652),
                                                        n.e(130674),
                                                        n.e(959669),
                                                        n.e(220518),
                                                        n.e(875842),
                                                        n.e(126780),
                                                        n.e(360781),
                                                        n.e(368111),
                                                        n.e(851243),
                                                        n.e(748015),
                                                        n.e(952577),
                                                        n.e(807771),
                                                        n.e(751202),
                                                        n.e(496715),
                                                        n.e(115754),
                                                        n.e(474055),
                                                        n.e(744385),
                                                        n.e(29664),
                                                        n.e(471064),
                                                        n.e(282094),
                                                        n.e(250478),
                                                        n.e(90373),
                                                        n.e(957506),
                                                        n.e(362422),
                                                        n.e(789573),
                                                        n.e(732272),
                                                        n.e(236946),
                                                        n.e(935948),
                                                        n.e(692639),
                                                        n.e(890480),
                                                        n.e(593020),
                                                        n.e(440963),
                                                        n.e(657003),
                                                        n.e(766031),
                                                        n.e(394317),
                                                        n.e(304329),
                                                        n.e(12762),
                                                        n.e(911521),
                                                        n.e(299086),
                                                        n.e(805775),
                                                        n.e(127079),
                                                        n.e(669030),
                                                        n.e(349401),
                                                        n.e(773437),
                                                    ]).then(n.bind(n, 714892));
                                                    return (n) => (0, i.jsx)(e, { ...n, skus: t, source: l });
                                                },
                                                { stackingBehavior: "stack", modalKey: J.aU },
                                            );
                                    })({ skus: r, source: "social-layer-storefront-embed" }));
                            },
                        }),
                        (0, i.jsx)(U.m, {
                            text: O.intl.string(O.t.WqhZss),
                            ariaHidden: !0,
                            children: (0, i.jsx)(V.K, {
                                icon: Z.LinkIcon,
                                disabled: !o,
                                "aria-label": O.intl.string(O.t.WqhZss),
                                variant: "primary",
                                onClick: function () {
                                    null != s &&
                                        (Q.default.track(es.HAw.SLAYER_STOREFRONT_EMBED_COPY_LINK_CLICKED, d(s)),
                                        (0, ee.C)(
                                            (0, X.aU)(
                                                s,
                                                r.map((e) => e.id),
                                            ),
                                            () => (0, N.P0)({ text: O.intl.string(O.t["L/PwZf"]), variant: "success" }),
                                        ));
                                },
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(z.$, {
                    text: O.intl.string(O.t["ETE/oC"]),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: function () {
                        l.endMultiselect(ei);
                    },
                }),
            ],
        }),
        children: (0, i.jsxs)("div", {
            className: er.t8,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "body-xs/medium",
                    color: "text-subtle",
                    children: O.intl.formatToPlainString(ea.default.mmTvZn, { count: t.size, max: 6 }),
                }),
                o &&
                    (0, i.jsx)("div", {
                        className: er.Mc,
                        children: r.map((e, t) =>
                            (0, i.jsx)(ed, { sku: e, doubleWidth: 0 === t && r.length % 2 == 1 }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
function ed(e) {
    let { sku: t, doubleWidth: n } = e,
        l = (0, X.fq)(t),
        s = (0, X.xf)(t);
    return (0, i.jsx)("div", {
        className: M()(er.hu, n && er.m4),
        children:
            null != l
                ? (0, i.jsx)($.A, {
                      containerClassName: er.Vl,
                      foregroundImageClassName: er.wP,
                      cardImage: l,
                      altText: t.name,
                      shape: "custom",
                      backgroundImageClassName: er.GC,
                      cardBackgroundImage: s,
                      cssPosition: "absolute",
                  })
                : (0, i.jsx)("div", {
                      className: er.t7,
                      children: (0, i.jsx)(Y.TicketIcon, {
                          color: "white",
                          size: "custom",
                          height: 80,
                          width: 80,
                          className: er.Cw,
                      }),
                  }),
    });
}
n(321073);
var ec = n(11023),
    eu = n(39623),
    em = n(687966),
    ef = n(156454),
    ex = n(646514),
    eh = n(805251),
    eg = n(478016),
    ep = n(628284),
    ej = n(738188),
    eA = n(285796),
    eE = n(28863),
    ev = n(933958),
    eb = n(988534),
    eI = n(793574),
    eC = n(688810),
    eN = n(878118),
    e_ = n(724302),
    eR = n(487431),
    eD = n(712440),
    eS = n(134861),
    eO = n(942370),
    ek = n(595940);
let ey = "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log";
function eL(e) {
    let { application: t, onBack: n } = e,
        { analyticsLocations: l } = (0, eC.Ay)(eI.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: s,
            hasAlreadyLinked: a,
            startAuthorization: r,
            chosenFlow: o,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: c, oauth2Token: u, hasConnectionEntrypointUrl: m, validFlows: f },
        } = (0, e_.RD)(t, { debug: !0 }),
        x = (0, C.bG)([eS.A], () => eS.A.isConnected(t.id)),
        h = (0, C.bG)([ev.Ay], () => ev.Ay.getSelfEmbeddedActivities()),
        g = a && null != u;
    return (0, i.jsxs)(en, {
        title: O.intl.string(w.default.vR0zs6),
        description: O.intl.string(w.default["no+FQS"]),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ek.D2,
                    children: [
                        (0, i.jsx)(eR.kW, { status: g ? eR.nW.OVERALL_GOOD : eR.nW.OVERALL_BAD }),
                        (0, i.jsx)(v.E, {
                            variant: "body-md/medium",
                            color: "text-default",
                            children: O.intl.string(g ? w.default["pss/wa"] : w.default["Oyal/m"]),
                        }),
                    ],
                }),
                !g &&
                    0 === f.length &&
                    (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: O.intl.string(w.default.eg0mNa),
                    }),
                g
                    ? (0, i.jsx)(z.$, {
                          variant: "primary",
                          onClick: function () {
                              if (null == u) return;
                              eD.A.delete(u.id);
                              let e = h.get(t.id);
                              null != e && (0, eb.d)({ location: e.location, applicationId: t.id, showFeedback: !1 });
                          },
                          text: O.intl.string(w.default.tkIymA),
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(z.$, {
                          variant: "primary",
                          disabled: !s,
                          onClick: () => r({ analyticsLocations: l }),
                          text: O.intl.string(w.default.w0pN4R),
                          fullWidth: !0,
                      }),
                (0, i.jsx)(z.$, {
                    variant: "secondary",
                    onClick: n,
                    text: O.intl.string(O.t["13/7kX"]),
                    fullWidth: !0,
                }),
            ],
        }),
        children: [
            (0, i.jsx)(eT, {
                flow: eO._.RPC,
                overallStatus: c ? eR.nW.OVERALL_GOOD : x ? eR.nW.WARN : eR.nW.OVERALL_BAD,
                name: O.intl.string(w.default.AGLx00),
                steps: [
                    {
                        status: x ? eR.nW.GOOD : eR.nW.BAD,
                        text: O.intl.string(w.default.kxF9br),
                        description: x ? null : O.intl.string(w.default.PFxxJa),
                        learnMoreLink: x ? null : ey,
                    },
                    {
                        status: c ? eR.nW.GOOD : x ? eR.nW.WARN : eR.nW.BAD,
                        text: O.intl.string(w.default.S94dzs),
                        description: c || !x ? null : O.intl.string(w.default.aTULMB),
                        learnMoreLink: c || !x ? null : ey,
                    },
                ],
                isChosen: o === eO._.RPC,
            }),
            (0, i.jsx)(eT, {
                flow: eO._.WEB,
                overallStatus: m ? eR.nW.OVERALL_GOOD : eR.nW.OVERALL_BAD,
                name: O.intl.string(w.default.K3ObrU),
                steps: [
                    {
                        status: m ? eR.nW.GOOD : eR.nW.BAD,
                        text: O.intl.string(w.default["8a7IrV"]),
                        description: m
                            ? O.intl.formatToPlainString(w.default["9iLeL2"], { url: d?.connectionEntrypointUrl })
                            : null,
                    },
                ],
                isChosen: o === eO._.WEB,
            }),
        ],
    });
}
function eT(e) {
    let { flow: t, overallStatus: n, name: l, steps: s, isChosen: a } = e,
        r = (0, C.bG)([eN.A], () => eN.A.getGloballyDisabledAuthorizationFlows().has(t), [t]);
    return (0, i.jsxs)("div", {
        className: ek.$K,
        children: [
            (0, i.jsxs)("div", {
                className: ek.Cw,
                children: [
                    (0, i.jsx)("div", { className: ek.s3, children: (0, i.jsx)(eW, { status: n }) }),
                    (0, i.jsx)(o.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: ek.Eo,
                        children: l,
                    }),
                    a &&
                        (0, i.jsx)(eh.E, {
                            type: { text: O.intl.string(w.default.hQvsoB) },
                            icon: eg.CheckmarkSmallIcon,
                        }),
                ],
            }),
            s.map((e, t) => (0, i.jsx)(ew, { ...e }, t)),
            r &&
                (0, i.jsx)("div", {
                    className: ek.RD,
                    children: (0, i.jsx)(v.E, {
                        variant: "body-sm/medium",
                        color: "text-subtle",
                        children: O.intl.string(w.default.mgsmfY),
                    }),
                }),
        ],
    });
}
function eW(e) {
    let { status: t, isStep: n = !1 } = e,
        l = n ? "sm" : "md";
    switch (t) {
        case eR.nW.OVERALL_GOOD:
        case eR.nW.GOOD: {
            let e = n ? eg.CheckmarkSmallIcon : ep.CircleCheckIcon;
            return (0, i.jsx)(e, {
                size: l,
                color: ex.A.colors.ICON_FEEDBACK_POSITIVE,
                "aria-label": O.intl.string(w.default["/t3aRl"]),
            });
        }
        case eR.nW.WARN:
            return (0, i.jsx)(ej.WarningIcon, {
                size: l,
                color: ex.A.colors.ICON_FEEDBACK_WARNING,
                "aria-label": O.intl.string(w.default["Wt4R/w"]),
            });
        case eR.nW.OVERALL_BAD:
        case eR.nW.BAD: {
            let e = n ? d.XSmallIcon : eA.CircleXIcon;
            return (0, i.jsx)(e, {
                size: l,
                color: ex.A.colors.ICON_FEEDBACK_CRITICAL,
                "aria-label": O.intl.string(w.default.A8YTO5),
            });
        }
    }
}
function ew(e) {
    let { status: t, text: n, description: l, learnMoreLink: s } = e;
    return (0, i.jsxs)("div", {
        className: ek.B5,
        children: [
            (0, i.jsx)("div", { className: ek.s3, children: (0, i.jsx)(eW, { status: t, isStep: !0 }) }),
            (0, i.jsxs)("div", {
                className: ek.Af,
                children: [
                    (0, i.jsx)(v.E, { variant: "body-md/medium", color: "text-strong", children: n }),
                    (null != l || null != s) &&
                        (0, i.jsxs)(v.E, {
                            variant: "body-sm/medium",
                            color: "text-subtle",
                            children: [
                                l,
                                null != s &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            " ",
                                            (0, i.jsx)(eE.Anchor, { href: s, children: O.intl.string(O.t.hvVgAZ) }),
                                        ],
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eG = n(404778),
    eF = n(683071),
    eB = n(771871),
    eP = n(702860),
    eM = n(406810),
    ez = n(678473),
    eK = n(379418),
    eU = n(755380);
function eV(e) {
    let t = (0, eK.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, i.jsx)(ez.A, { node: t }) : null;
}
function eZ(e) {
    let { application: t, onBack: n } = e,
        l = y(t.id);
    return (0, i.jsxs)(en, {
        title: O.intl.string(ea.default.QaMS5w),
        description: O.intl.string(ea.default["8cYGJR"]),
        footer: (0, i.jsx)(z.$, {
            text: O.intl.string(O.t["13/7kX"]),
            variant: "secondary",
            fullWidth: !0,
            onClick: n,
        }),
        children: [
            (0, i.jsx)(eG.c, {}),
            l.isEnabled
                ? (0, i.jsx)(eY, { applicationId: t.id })
                : (0, i.jsx)(eF.w, {
                      type: "info",
                      role: "none",
                      message: O.intl.string(ea.default.HJCvbw),
                      action: {
                          text: O.intl.string(ea.default["Utl/4Q"]),
                          loading: l.isPending,
                          onClick: () => {
                              l.setEnabled(!0);
                          },
                      },
                  }),
        ],
    });
}
function eY(e) {
    let { applicationId: t } = e,
        n = (0, ef.A)({ applicationId: t }),
        { entries: l } = (0, ef.T)(t),
        a = (0, C.bG)([D.A], () => D.A.getStorefrontEntries(t)?.state === "error", [t]),
        r = l.find((e) => e.id === n.selectedStorefrontId),
        o = null == n.selectedStorefrontId || null == r,
        d = null != n.selectedStorefrontId && n.selectedStorefrontId === n.liveStorefrontId,
        c = s.useMemo(
            () =>
                l.map((e) => {
                    var t;
                    let l;
                    return {
                        name:
                            ((t = e.id === n.liveStorefrontId),
                            (l = "" !== e.title ? e.title : O.intl.string(ea.default.OvBwPV)),
                            t
                                ? O.intl.formatToPlainString(ea.default.eF1VJh, { title: l })
                                : null == e.publishedAt
                                  ? O.intl.formatToPlainString(ea.default.dX2mQt, { title: l })
                                  : l),
                        value: e.id,
                    };
                }),
            [l, n.liveStorefrontId],
        ),
        u = s.useCallback(
            (e) => {
                (0, R.ZR)(t, e === n.liveStorefrontId ? null : e);
            },
            [n.liveStorefrontId, t],
        );
    return a
        ? (0, i.jsx)(eF.w, { type: "critical", role: "alert", message: O.intl.string(ea.default.oaE9Uk) })
        : (0, i.jsxs)("div", {
              className: eU.u,
              children: [
                  (0, i.jsx)(eX, { isLoading: o, isLive: d, publishedAt: r?.publishedAt }),
                  l.length > 1 &&
                      (0, i.jsx)(eB.z, {
                          label: O.intl.string(ea.default["3nB2PV"]),
                          options: c,
                          value: n.selectedStorefrontId,
                          onChange: u,
                      }),
              ],
          });
}
function eX(e) {
    let t,
        n,
        { publishedAt: l, isLive: a, isLoading: r } = e,
        [d] = s.useState(() => Date.now());
    return (
        r
            ? ((t = O.intl.string(O.t.ZTNur7)), (n = (0, i.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == l
              ? ((t = O.intl.string(ea.default.CUAKSg)),
                (n = (0, i.jsx)(eP.CircleMinusIcon, { color: ex.A.colors.ICON_FEEDBACK_WARNING })))
              : l.getTime() > d
                ? ((t = O.intl.format(ea.default.evGwDW, { timestamp: eV(l) })),
                  (n = (0, i.jsx)(eM.ClockIcon, { color: ex.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = O.intl.format(ea.default.rbAtUi, { timestamp: eV(l) })),
                    (n = (0, i.jsx)(ep.CircleCheckIcon, { color: ex.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = O.intl.format(ea.default["3x/M9Z"], { timestamp: eV(l) })),
                    (n = (0, i.jsx)(eA.CircleXIcon, { color: ex.A.colors.ICON_MUTED }))),
        (0, i.jsxs)("div", {
            className: eU.D,
            children: [n, (0, i.jsx)(o.D, { variant: "heading-sm/semibold", children: t })],
        })
    );
}
var eq = n(976860),
    eJ = n(44724),
    e$ = n(464851);
let eH = "social_layer_dev_tools_panel_width";
function eQ() {
    let e = r.w.get(eH);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function e0(e) {
    r.w.set(eH, e);
}
let e9 = null;
function e1(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: l } = e,
        s = (0, m.A)({
            minDimension: 320,
            maxDimension: 720,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: m.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, i.jsx)("div", { onMouseDown: s, className: e$.Di, "aria-hidden": !0 });
}
function e2() {
    let e = (0, x.fy)().metadata,
        t = (0, f.h)(e?.applicationId),
        n = s.useRef(!1),
        l = (0, g.A)({ applicationId: t?.id, source: h.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    s.useEffect(() => {
        e?.shouldAutoOpenGameProfile !== !0 || null == l || n.current || ((n.current = !0), l());
    }, [e, l]);
    let r = s.useRef(null),
        [m, A] = s.useState(eQ),
        E = (0, a.clamp)(m, 320, 720);
    s.useEffect(
        () => (
            null != e9 && (clearTimeout(e9), (e9 = null)),
            () => {
                e9 = setTimeout(() => {
                    ((e9 = null), j.Rj.getState().actions.endMultiselect(ei));
                }, 0);
            }
        ),
        [],
    );
    let v = (0, i.jsxs)("div", {
        className: e$.wx,
        children: [
            (0, i.jsx)(o.D, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: O.intl.format(w.default.KoK4J9, { appName: t?.name ?? "" }),
            }),
            (0, i.jsx)(p.Ay.Icon, {
                icon: d.XSmallIcon,
                tooltip: O.intl.string(O.t.cpT0Cq),
                onClick: () => (0, x.Jp)(),
            }),
        ],
    });
    return (0, i.jsxs)("div", {
        "data-app-right-panel": !0,
        ref: r,
        className: e$.nE,
        style: { width: E },
        children: [
            (0, i.jsx)(e1, { resizableNode: r, onResize: A, onResizeEnd: e0 }),
            (0, i.jsx)(c.F, {
                component: v,
                children: (0, i.jsx)("div", {
                    className: e$.rf,
                    children:
                        null != t
                            ? (0, i.jsx)(e6, { application: t }, t.id)
                            : (0, i.jsx)("div", { className: e$.TG, children: (0, i.jsx)(u.y, { className: e$.u1 }) }),
                }),
            }),
        ],
    });
}
function e6(e) {
    let { application: t } = e,
        n = (function (e) {
            let t = e.id,
                { entries: n, liveStorefront: l } = (0, ef.T)(t),
                a = null != l || n.length > 0,
                r = W(t);
            return (
                s.useEffect(() => {
                    (0, R.ap)(t, { eager: !1 });
                }, [t]),
                s.useMemo(() => {
                    let e = [];
                    return (
                        a &&
                            (e.push({
                                id: el.EMBED_BUILDER,
                                name: O.intl.string(ea.default.Z3uXLR),
                                description: O.intl.string(ea.default.sS4xGd),
                                icon: ec.EmbedIcon,
                                onOpen: (e) =>
                                    (function (e, t) {
                                        if (
                                            !j.Rj.getState().actions.startMultiselect({
                                                applicationId: e,
                                                key: ei,
                                                maxSelections: 6,
                                            })
                                        )
                                            return;
                                        Q.default.track(es.HAw.SLAYER_STOREFRONT_EMBED_BUILDER_STARTED, {
                                            application_id: e,
                                            application_name: t,
                                            guild_id: (0, X.n5)(e) ?? null,
                                        });
                                        let { pathname: n, search: l } = (0, eq.JK)().location,
                                            i = D.A.getGuildIdFromApplicationId(e);
                                        (0, X.rG)(n, l, e, i) || (0, eJ.default)({ applicationId: e });
                                    })(e.id, e.name),
                            }),
                            r &&
                                e.push({
                                    id: el.DRAFT_PREVIEW,
                                    name: O.intl.string(ea.default.QaMS5w),
                                    description: O.intl.string(ea.default["8cYGJR"]),
                                    icon: eu.EyeIcon,
                                    render: (e) => (0, i.jsx)(eZ, { ...e }),
                                })),
                        [
                            ...e,
                            {
                                id: el.ACCOUNT_LINKING,
                                name: O.intl.string(w.default.vR0zs6),
                                description: O.intl.string(w.default["136Fdw"]),
                                icon: em.GameControllerIcon,
                                render: (e) => (0, i.jsx)(eL, { ...e }),
                            },
                        ]
                    );
                }, [a, r])
            );
        })(t),
        [l, a] = s.useState(null),
        [r, o] = s.useState(null),
        d = (0, j.qZ)((e) => e.config?.key === ei),
        c = s.useCallback(
            (e) => {
                (o(e.id), null != e.onOpen ? e.onOpen(t) : a(e.id));
            },
            [t],
        ),
        u = s.useCallback(() => a(null), []);
    if (d) return (0, i.jsx)(eo, {});
    let m = n.find((e) => e.id === l);
    return m?.render != null
        ? m.render({ application: t, onBack: u })
        : (0, i.jsx)(F, { application: t, tools: n, onOpenTool: c, returnFocusToolId: r });
}
