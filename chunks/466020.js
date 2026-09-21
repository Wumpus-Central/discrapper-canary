(l.r(t), l.d(t, { default: () => eN }));
var i = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(435558),
    d = l(297264),
    o = l(408278),
    c = l(807072),
    u = l(289873),
    m = l(707554),
    f = l(506774),
    x = l(761508),
    h = l(761929),
    g = l(429913),
    v = l(793943),
    j = l(409626),
    p = l(692969),
    A = l(381999),
    b = l(147964),
    N = l(17928),
    I = l(834730),
    E = l(821609),
    y = l(292801),
    C = l(638916),
    S = l(871123),
    k = l(192308),
    D = l(294454),
    _ = l(366523),
    w = l(67480),
    O = l(375708),
    R = l(206285),
    T = l(326941);
let L = "embed-builder";
function W(e) {
    let { applicationId: t } = e,
        { actions: l } = (0, A.qZ)((e) => e);
    return (0, i.jsxs)("div", {
        className: T.hA,
        children: [
            (0, i.jsx)("div", {
                className: T.wx,
                children: (0, i.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    children: O.intl.string(R.default.Z3uXLR),
                }),
            }),
            (0, i.jsx)(I.E, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: O.intl.string(R.default.sS4xGd),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(E.$, {
                    fullWidth: !0,
                    variant: "primary",
                    size: "sm",
                    text: O.intl.string(R.default.fr7qnZ),
                    onClick: () => l.startMultiselect({ applicationId: t, key: L, maxSelections: 6 }),
                }),
            }),
        ],
    });
}
var M = l(367224);
function G() {
    let { selectedIds: e, actions: t } = (0, A.qZ)((e) => e),
        n = (0, N.yK)([w.A], () => [...e].map((e) => w.A.get(e)), [e]);
    return (0, i.jsxs)("div", {
        className: M.hA,
        children: [
            (0, i.jsxs)("div", {
                className: M.rf,
                children: [
                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: O.intl.string(R.default.Z3uXLR) }),
                    (0, i.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: O.intl.string(R.default.sS4xGd),
                    }),
                    (0, i.jsxs)("div", {
                        className: M.t8,
                        children: [
                            (0, i.jsx)(I.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: O.intl.formatToPlainString(R.default.mmTvZn, { count: e.size, max: 6 }),
                            }),
                            (0, i.jsx)("div", {
                                className: M.Mc,
                                children: n.map((e, t) =>
                                    (0, i.jsx)(P, { sku: e, doubleWidth: 0 === t && n.length % 2 == 1 }, e.id),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: M.o1,
                children: [
                    (0, i.jsx)(E.$, {
                        icon: y.t,
                        disabled: 0 === e.size,
                        text: O.intl.string(R.default.ozurym),
                        variant: "primary",
                        fullWidth: !0,
                        onClick: function () {
                            ((e) => {
                                let { skus: t, guildId: n, source: s, analyticsLocations: a, analyticsContext: r } = e;
                                0 !== t.length &&
                                    (0, k.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([
                                                l.e("325522"),
                                                l.e("401317"),
                                                l.e("862735"),
                                                l.e("552653"),
                                                l.e("311580"),
                                                l.e("174554"),
                                                l.e("116815"),
                                                l.e("82389"),
                                                l.e("606926"),
                                                l.e("891089"),
                                                l.e("371496"),
                                                l.e("196063"),
                                                l.e("392028"),
                                                l.e("124054"),
                                                l.e("441674"),
                                                l.e("419656"),
                                                l.e("67702"),
                                                l.e("702154"),
                                                l.e("85427"),
                                                l.e("275363"),
                                                l.e("560570"),
                                                l.e("334324"),
                                                l.e("64769"),
                                                l.e("992956"),
                                                l.e("880150"),
                                                l.e("490743"),
                                                l.e("7452"),
                                                l.e("529787"),
                                                l.e("309499"),
                                                l.e("415695"),
                                                l.e("431381"),
                                                l.e("691398"),
                                                l.e("266201"),
                                                l.e("752704"),
                                                l.e("56606"),
                                                l.e("991529"),
                                                l.e("629972"),
                                                l.e("40791"),
                                                l.e("358404"),
                                                l.e("245758"),
                                                l.e("561672"),
                                                l.e("977306"),
                                                l.e("847980"),
                                                l.e("957251"),
                                                l.e("677624"),
                                                l.e("879641"),
                                                l.e("720210"),
                                                l.e("98857"),
                                                l.e("495628"),
                                                l.e("390430"),
                                                l.e("326605"),
                                                l.e("644289"),
                                                l.e("460915"),
                                                l.e("675582"),
                                                l.e("856943"),
                                                l.e("192388"),
                                                l.e("165994"),
                                                l.e("652091"),
                                                l.e("996907"),
                                                l.e("657503"),
                                                l.e("377989"),
                                                l.e("797845"),
                                                l.e("867721"),
                                                l.e("567999"),
                                                l.e("156032"),
                                                l.e("267526"),
                                                l.e("554669"),
                                                l.e("281342"),
                                                l.e("400088"),
                                                l.e("35328"),
                                                l.e("915170"),
                                                l.e("296956"),
                                                l.e("334168"),
                                                l.e("582012"),
                                                l.e("781821"),
                                                l.e("650387"),
                                                l.e("195719"),
                                                l.e("678906"),
                                                l.e("358931"),
                                                l.e("168248"),
                                                l.e("533240"),
                                                l.e("962953"),
                                                l.e("434168"),
                                                l.e("59565"),
                                                l.e("456885"),
                                                l.e("459086"),
                                                l.e("61531"),
                                                l.e("177086"),
                                                l.e("319714"),
                                                l.e("189281"),
                                                l.e("205035"),
                                                l.e("911680"),
                                                l.e("267732"),
                                                l.e("225307"),
                                                l.e("332165"),
                                                l.e("618416"),
                                                l.e("524434"),
                                                l.e("90343"),
                                                l.e("842760"),
                                                l.e("424199"),
                                                l.e("342551"),
                                                l.e("726391"),
                                                l.e("926275"),
                                                l.e("720157"),
                                                l.e("454048"),
                                                l.e("481647"),
                                                l.e("776602"),
                                                l.e("300699"),
                                                l.e("140402"),
                                                l.e("543039"),
                                                l.e("349619"),
                                                l.e("599666"),
                                                l.e("253729"),
                                                l.e("264236"),
                                                l.e("721690"),
                                                l.e("136022"),
                                                l.e("161379"),
                                                l.e("776195"),
                                                l.e("234236"),
                                                l.e("832817"),
                                                l.e("398125"),
                                                l.e("827708"),
                                                l.e("221825"),
                                                l.e("416143"),
                                                l.e("901555"),
                                                l.e("948804"),
                                                l.e("593600"),
                                                l.e("276640"),
                                                l.e("295366"),
                                                l.e("28154"),
                                                l.e("844695"),
                                                l.e("988077"),
                                                l.e("561216"),
                                                l.e("50015"),
                                                l.e("672727"),
                                                l.e("552712"),
                                                l.e("417286"),
                                                l.e("829177"),
                                                l.e("199999"),
                                                l.e("106943"),
                                                l.e("232551"),
                                                l.e("482815"),
                                                l.e("631644"),
                                                l.e("170653"),
                                                l.e("892340"),
                                                l.e("611523"),
                                                l.e("313681"),
                                                l.e("675706"),
                                                l.e("844841"),
                                                l.e("401518"),
                                                l.e("317225"),
                                                l.e("444376"),
                                                l.e("652898"),
                                                l.e("696123"),
                                                l.e("147786"),
                                                l.e("770697"),
                                                l.e("323354"),
                                                l.e("318546"),
                                                l.e("123216"),
                                                l.e("731390"),
                                                l.e("936320"),
                                                l.e("190889"),
                                                l.e("146248"),
                                                l.e("790244"),
                                                l.e("851130"),
                                                l.e("718573"),
                                                l.e("418943"),
                                                l.e("556967"),
                                                l.e("784103"),
                                                l.e("958428"),
                                                l.e("643612"),
                                                l.e("809915"),
                                                l.e("34472"),
                                                l.e("53374"),
                                                l.e("710638"),
                                                l.e("236676"),
                                                l.e("631825"),
                                                l.e("696443"),
                                                l.e("620320"),
                                                l.e("799657"),
                                                l.e("252574"),
                                                l.e("747017"),
                                                l.e("576160"),
                                                l.e("39760"),
                                                l.e("126780"),
                                                l.e("401827"),
                                                l.e("499941"),
                                                l.e("515572"),
                                                l.e("761935"),
                                                l.e("592731"),
                                                l.e("511527"),
                                                l.e("11412"),
                                                l.e("478476"),
                                                l.e("103730"),
                                                l.e("763070"),
                                                l.e("193158"),
                                                l.e("502018"),
                                                l.e("757598"),
                                                l.e("495442"),
                                                l.e("400954"),
                                                l.e("787079"),
                                                l.e("728633"),
                                                l.e("61129"),
                                                l.e("115754"),
                                                l.e("314805"),
                                                l.e("173547"),
                                                l.e("599141"),
                                                l.e("278424"),
                                                l.e("434691"),
                                                l.e("225990"),
                                                l.e("539620"),
                                                l.e("636126"),
                                                l.e("562168"),
                                                l.e("409903"),
                                                l.e("244721"),
                                                l.e("222380"),
                                                l.e("377766"),
                                                l.e("148660"),
                                                l.e("30517"),
                                                l.e("577084"),
                                                l.e("844780"),
                                                l.e("979630"),
                                                l.e("236946"),
                                                l.e("935948"),
                                                l.e("464704"),
                                                l.e("692639"),
                                                l.e("890480"),
                                                l.e("440963"),
                                                l.e("565617"),
                                                l.e("766031"),
                                                l.e("394317"),
                                                l.e("744385"),
                                                l.e("636979"),
                                                l.e("945050"),
                                                l.e("304329"),
                                                l.e("233817"),
                                                l.e("887946"),
                                                l.e("773437"),
                                            ]).then(l.bind(l, 714892));
                                            return (l) =>
                                                (0, i.jsx)(e, {
                                                    ...l,
                                                    skus: t,
                                                    guildId: n,
                                                    source: s,
                                                    analyticsLocations: a,
                                                    analyticsContext: r,
                                                });
                                        },
                                        { stackingBehavior: "stack", modalKey: D.aU },
                                    );
                            })({ skus: n, guildId: void 0, source: "social-layer-storefront-embed" });
                        },
                    }),
                    (0, i.jsx)(E.$, {
                        text: O.intl.string(O.t["ETE/oC"]),
                        variant: "secondary",
                        onClick: function () {
                            t.endMultiselect(L);
                        },
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { sku: t, doubleWidth: l } = e,
        n = (0, S.fq)(t),
        s = (0, S.xf)(t);
    return (0, i.jsx)("div", {
        className: a()(M.hu, l && M.m4),
        children:
            null != n
                ? (0, i.jsx)(_.A, {
                      containerClassName: M.Vl,
                      foregroundImageClassName: M.wP,
                      cardImage: n,
                      altText: t.name,
                      shape: "custom",
                      backgroundImageClassName: M.GC,
                      cardBackgroundImage: s,
                      cssPosition: "absolute",
                  })
                : (0, i.jsx)("div", {
                      className: M.t7,
                      children: (0, i.jsx)(C.q, {
                          color: "white",
                          size: "custom",
                          height: 80,
                          width: 80,
                          className: M.Cw,
                      }),
                  }),
    });
}
var B = l(156454),
    F = l(933958),
    V = l(869003),
    z = l(793574),
    Z = l(688810),
    K = l(206828),
    U = l(487431),
    q = l(712440),
    $ = l(134861),
    J = l(942370),
    H = l(211850),
    Q = l(712289);
function X(e) {
    let { application: t } = e,
        { analyticsLocations: l } = (0, Z.Ay)(z.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: s,
            startAuthorization: a,
            chosenFlow: r,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, K.RD)(t, { debug: !0 }),
        f = (0, N.bG)([$.A], () => $.A.isConnected(t.id)),
        x = (0, p.A)({ applicationId: t.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        h = (0, N.bG)([F.Ay], () => F.Ay.getSelfEmbeddedActivities());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: Q.r,
                children: [
                    (0, i.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: O.intl.string(H.default["no+FQS"]),
                    }),
                    (0, i.jsx)(U.VT, {
                        flow: J._.RPC,
                        overallStatus: o ? U.nW.OVERALL_GOOD : f ? U.nW.WARN : U.nW.OVERALL_BAD,
                        name: O.intl.string(H.default.AGLx00),
                        steps: [
                            {
                                status: f ? U.nW.GOOD : U.nW.BAD,
                                text: O.intl.string(H.default.kxF9br),
                                description: f ? null : O.intl.string(H.default.PFxxJa),
                                learnMoreLink: f
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: o ? U.nW.GOOD : f ? U.nW.WARN : U.nW.BAD,
                                text: O.intl.string(H.default.S94dzs),
                                description: o || !f ? null : O.intl.string(H.default.aTULMB),
                                learnMoreLink:
                                    o || !f
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: r === J._.RPC,
                    }),
                    (0, i.jsx)(U.VT, {
                        flow: J._.WEB,
                        overallStatus: u ? U.nW.OVERALL_GOOD : U.nW.OVERALL_BAD,
                        name: O.intl.string(H.default.K3ObrU),
                        steps: [
                            {
                                status: u ? U.nW.GOOD : U.nW.BAD,
                                text: O.intl.string(H.default["8a7IrV"]),
                                description: u
                                    ? O.intl.formatToPlainString(H.default["9iLeL2"], {
                                          url: d?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: r === J._.WEB,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: Q.q,
                children: [
                    (0, i.jsx)(U.Sy, {
                        status: s ? U.nW.OVERALL_GOOD : U.nW.OVERALL_BAD,
                        text: O.intl.string(O.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, i.jsx)(I.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: O.intl.string(H.default.eg0mNa),
                        }),
                    (0, i.jsx)(E.$, {
                        variant: "secondary",
                        disabled: !n || s,
                        onClick: () => a({ analyticsLocations: l }),
                        text: O.intl.string(H.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, i.jsx)(E.$, {
                            variant: "secondary",
                            onClick: () => {
                                q.A.delete(c.id);
                                let e = h.get(t.id);
                                null != e &&
                                    V.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
                            },
                            text: O.intl.string(H.default.tkIymA),
                            fullWidth: !0,
                        }),
                    (0, i.jsx)(E.$, {
                        variant: "secondary",
                        onClick: x ?? void 0,
                        disabled: null == x,
                        text: O.intl.string(H.default.cCvdJy),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
var Y = l(404778);
let ee = (0, l(600975).C)({
    kind: "user",
    id: "2026-09-multisku-embed-builder",
    label: "Multi-SKU Embed Builder",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Show the embed builder entry point in the Social Commerce dev tools tab",
            config: { enabled: !0 },
        },
    ],
});
var et = l(144228),
    el = l(702860),
    ei = l(406810),
    en = l(628284),
    es = l(285796),
    ea = l(661531),
    er = l(785562),
    ed = l(379418),
    eo = l(733391),
    ec = l(220334);
function eu(e) {
    let t = (0, ed.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, i.jsx)(er.A, { node: t }) : null;
}
function em(e) {
    let { applicationId: t } = e,
        l = (0, B.A)({ applicationId: t }),
        { entries: s } = (0, B.T)(t),
        a = s.find((e) => e.id === l.selectedStorefrontId),
        r = null == l.selectedStorefrontId || null == a,
        d = null != l.selectedStorefrontId && l.selectedStorefrontId === l.liveStorefrontId,
        o = n.useMemo(
            () =>
                s.map((e) => {
                    var t;
                    let i;
                    return {
                        name:
                            ((t = e.id === l.liveStorefrontId),
                            (i = "" !== e.title ? e.title : O.intl.string(R.default.OvBwPV)),
                            t
                                ? O.intl.formatToPlainString(R.default.eF1VJh, { title: i })
                                : null == e.publishedAt
                                  ? O.intl.formatToPlainString(R.default.dX2mQt, { title: i })
                                  : i),
                        value: e.id,
                    };
                }),
            [s, l.liveStorefrontId],
        ),
        c = n.useCallback(
            (e) => {
                (0, eo.ZR)(t, e === l.liveStorefrontId ? null : e);
            },
            [l.liveStorefrontId, t],
        );
    return (0, i.jsxs)("div", {
        className: ec.u,
        children: [
            (0, i.jsx)(ef, { isLoading: r, isLive: d, publishedAt: a?.publishedAt }),
            s.length > 1 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(Y.c, {}),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(et.z, {
                                label: O.intl.string(R.default["3nB2PV"]),
                                options: o,
                                value: l.selectedStorefrontId,
                                onChange: c,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function ef(e) {
    let t,
        l,
        { publishedAt: s, isLive: a, isLoading: r } = e,
        [o] = n.useState(() => Date.now());
    return (
        r
            ? ((t = O.intl.string(O.t.ZTNur7)), (l = (0, i.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == s
              ? ((t = O.intl.string(R.default.CUAKSg)),
                (l = (0, i.jsx)(el.W, { color: ea.A.colors.ICON_FEEDBACK_WARNING })))
              : s.getTime() > o
                ? ((t = O.intl.format(R.default.evGwDW, { timestamp: eu(s) })),
                  (l = (0, i.jsx)(ei.ClockIcon, { color: ea.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = O.intl.format(R.default.rbAtUi, { timestamp: eu(s) })),
                    (l = (0, i.jsx)(en.y, { color: ea.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = O.intl.format(R.default["3x/M9Z"], { timestamp: eu(s) })),
                    (l = (0, i.jsx)(es.a, { color: ea.A.colors.ICON_MUTED }))),
        (0, i.jsxs)("div", {
            className: ec.D,
            children: [l, (0, i.jsx)(d.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var ex = l(471364);
function eh(e) {
    let { application: t } = e,
        l = t.id,
        { enabled: n } = ee.useExperiment({ location: "storefront_debug_tab" }, { autoTrackExposure: !0 });
    return (0, i.jsxs)("div", {
        className: ex.r,
        children: [
            (0, i.jsx)(em, { applicationId: l }),
            n && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(Y.c, {}), (0, i.jsx)(W, { applicationId: l })] }),
        ],
    });
}
var eg = l(464851);
let ev = "social_layer_dev_tools_panel_width";
function ej() {
    let e = f.w.get(ev);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function ep(e) {
    f.w.set(ev, e);
}
let eA = null;
function eb(e) {
    let { resizableNode: t, onResize: l, onResizeEnd: n } = e,
        s = (0, h.A)({
            minDimension: 320,
            maxDimension: 720,
            resizableDomNodeRef: t,
            onElementResize: l,
            onElementResizeEnd: n,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, i.jsx)("div", { onMouseDown: s, className: eg.Di, "aria-hidden": !0 });
}
function eN() {
    var e;
    let t,
        l,
        s = (0, g.h)(b.A.testModeApplicationId),
        f = (0, v.fy)(),
        h = n.useRef(!1),
        N = f.metadata,
        I = (0, p.A)({ applicationId: s?.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    n.useEffect(() => {
        N?.shouldAutoOpenGameProfile !== !0 || null == I || h.current || ((h.current = !0), I());
    }, [N, I]);
    let E = n.useRef(null),
        [y, C] = n.useState(ej),
        S = (0, r.clamp)(y, 320, 720),
        k = (function (e) {
            let t = e?.id,
                { isTestMode: l, entries: s } = (0, B.T)(t),
                a = l && s.length > 0;
            return n.useMemo(
                () =>
                    [
                        {
                            id: "account_linking",
                            name: O.intl.string(H.default.vR0zs6),
                            render: (e) => (0, i.jsx)(X, { ...e }),
                        },
                        {
                            id: "storefront",
                            name: O.intl.string(R.default["qnSo/i"]),
                            render: (e) => (0, i.jsx)(eh, { ...e }),
                            predicate: (e) => null != e && a,
                        },
                    ].filter((t) => null == t.predicate || t.predicate(e)),
                [e, a],
            );
        })(s),
        [D, _] = n.useState(k[0]?.id),
        w = k.find((e) => e.id === D) ?? k[0],
        T = (0, A.qZ)((e) => e.config?.key === L);
    function W(e) {
        return (0, i.jsxs)("div", {
            className: eg.wx,
            children: [
                (0, i.jsx)("div", {
                    className: eg.if,
                    children: (0, i.jsx)(d.D, {
                        variant: "heading-lg/extrabold",
                        children: O.intl.format(H.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != s &&
                    (0, i.jsx)(o.K, {
                        variant: "icon-only",
                        icon: c.U,
                        "aria-label": O.intl.string(O.t.cpT0Cq),
                        onClick: () => (0, v.Jp)(),
                    }),
            ],
        });
    }
    return (
        n.useEffect(
            () => (
                null != eA && (clearTimeout(eA), (eA = null)),
                () => {
                    eA = setTimeout(() => {
                        ((eA = null), A.Rj.getState().actions.endMultiselect(L));
                    }, 0);
                }
            ),
            [],
        ),
        (0, i.jsxs)("div", {
            "data-app-right-panel": !0,
            ref: E,
            className: eg.nE,
            style: { width: S },
            children: [
                (0, i.jsx)(eb, { resizableNode: E, onResize: C, onResizeEnd: ep }),
                (0, i.jsx)(m.F, {
                    children:
                        null != s
                            ? ((e = s.name),
                              (l = !0),
                              T ? ((t = (0, i.jsx)(G, {})), (l = !1)) : (t = w?.render({ application: s })),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      W(e),
                                      l &&
                                          (0, i.jsx)("div", {
                                              className: eg.Mv,
                                              children: (0, i.jsx)(x.V, {
                                                  className: eg.$H,
                                                  selectedItem: w?.id,
                                                  onItemSelect: _,
                                                  orientation: "horizontal",
                                                  type: "top",
                                                  look: "brand",
                                                  children: k.map((e) =>
                                                      (0, i.jsx)(
                                                          x.V.Item,
                                                          {
                                                              className: a()(eg.Mf, { [eg.wH]: e.id === w?.id }),
                                                              id: e.id,
                                                              "aria-label": e.name,
                                                              children: e.name,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          }),
                                      (0, i.jsx)("div", { className: eg.rf, children: t }),
                                  ],
                              }))
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      W(""),
                                      (0, i.jsx)("div", {
                                          className: eg.TG,
                                          children: (0, i.jsx)(u.y, { className: eg.u1 }),
                                      }),
                                  ],
                              }),
                }),
            ],
        })
    );
}
