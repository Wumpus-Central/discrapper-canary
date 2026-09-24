(n.r(t), n.d(t, { default: () => eb }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(435558),
    d = n(297264),
    o = n(408278),
    c = n(807072),
    u = n(289873),
    m = n(707554),
    f = n(506774),
    x = n(761508),
    h = n(761929),
    g = n(429913),
    v = n(793943),
    j = n(409626),
    p = n(692969),
    A = n(381999),
    N = n(147964),
    b = n(17928),
    I = n(834730),
    y = n(821609),
    E = n(292801),
    C = n(638916),
    S = n(871123),
    D = n(192308),
    k = n(294454),
    _ = n(366523),
    w = n(67480),
    O = n(375708),
    R = n(206285),
    L = n(326941);
let T = "embed-builder";
function W(e) {
    let { applicationId: t } = e,
        { actions: n } = (0, A.qZ)((e) => e);
    return (0, l.jsxs)("div", {
        className: L.hA,
        children: [
            (0, l.jsx)("div", {
                className: L.wx,
                children: (0, l.jsx)(d.D, {
                    variant: "heading-lg/semibold",
                    children: O.intl.string(R.default.Z3uXLR),
                }),
            }),
            (0, l.jsx)(I.E, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: O.intl.string(R.default.sS4xGd),
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "primary",
                    size: "sm",
                    text: O.intl.string(R.default.fr7qnZ),
                    onClick: () => n.startMultiselect({ applicationId: t, key: T, maxSelections: 6 }),
                }),
            }),
        ],
    });
}
var G = n(367224);
function M() {
    let { selectedIds: e, actions: t } = (0, A.qZ)((e) => e),
        i = (0, b.yK)([w.A], () => [...e].map((e) => w.A.get(e)), [e]);
    return (0, l.jsxs)("div", {
        className: G.hA,
        children: [
            (0, l.jsxs)("div", {
                className: G.rf,
                children: [
                    (0, l.jsx)(d.D, { variant: "heading-lg/semibold", children: O.intl.string(R.default.Z3uXLR) }),
                    (0, l.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: O.intl.string(R.default.sS4xGd),
                    }),
                    (0, l.jsxs)("div", {
                        className: G.t8,
                        children: [
                            (0, l.jsx)(I.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: O.intl.formatToPlainString(R.default.mmTvZn, { count: e.size, max: 6 }),
                            }),
                            (0, l.jsx)("div", {
                                className: G.Mc,
                                children: i.map((e, t) =>
                                    (0, l.jsx)(P, { sku: e, doubleWidth: 0 === t && i.length % 2 == 1 }, e.id),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: G.o1,
                children: [
                    (0, l.jsx)(y.$, {
                        icon: E.t,
                        disabled: 0 === e.size,
                        text: O.intl.string(R.default.ozurym),
                        variant: "primary",
                        fullWidth: !0,
                        onClick: function () {
                            ((e) => {
                                let { skus: t, guildId: i, source: s, analyticsLocations: a, analyticsContext: r } = e;
                                0 !== t.length &&
                                    (0, D.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("325522"),
                                                n.e("401317"),
                                                n.e("862735"),
                                                n.e("552653"),
                                                n.e("311580"),
                                                n.e("174554"),
                                                n.e("116815"),
                                                n.e("82389"),
                                                n.e("812720"),
                                                n.e("891089"),
                                                n.e("371496"),
                                                n.e("196063"),
                                                n.e("392028"),
                                                n.e("124054"),
                                                n.e("441674"),
                                                n.e("419656"),
                                                n.e("67702"),
                                                n.e("702154"),
                                                n.e("85427"),
                                                n.e("51872"),
                                                n.e("560570"),
                                                n.e("334324"),
                                                n.e("64769"),
                                                n.e("992956"),
                                                n.e("880150"),
                                                n.e("490743"),
                                                n.e("7452"),
                                                n.e("529787"),
                                                n.e("309499"),
                                                n.e("415695"),
                                                n.e("431381"),
                                                n.e("691398"),
                                                n.e("266201"),
                                                n.e("752704"),
                                                n.e("56606"),
                                                n.e("227652"),
                                                n.e("629972"),
                                                n.e("40791"),
                                                n.e("358404"),
                                                n.e("245758"),
                                                n.e("561672"),
                                                n.e("977306"),
                                                n.e("847980"),
                                                n.e("957251"),
                                                n.e("677624"),
                                                n.e("879641"),
                                                n.e("720210"),
                                                n.e("98857"),
                                                n.e("495628"),
                                                n.e("390430"),
                                                n.e("326605"),
                                                n.e("644289"),
                                                n.e("460915"),
                                                n.e("675582"),
                                                n.e("856943"),
                                                n.e("192388"),
                                                n.e("165994"),
                                                n.e("652091"),
                                                n.e("996907"),
                                                n.e("657503"),
                                                n.e("377989"),
                                                n.e("797845"),
                                                n.e("867721"),
                                                n.e("567999"),
                                                n.e("156032"),
                                                n.e("267526"),
                                                n.e("377265"),
                                                n.e("400088"),
                                                n.e("35328"),
                                                n.e("915170"),
                                                n.e("296956"),
                                                n.e("334168"),
                                                n.e("582012"),
                                                n.e("781821"),
                                                n.e("650387"),
                                                n.e("195719"),
                                                n.e("678906"),
                                                n.e("358931"),
                                                n.e("168248"),
                                                n.e("533240"),
                                                n.e("962953"),
                                                n.e("434168"),
                                                n.e("59565"),
                                                n.e("456885"),
                                                n.e("459086"),
                                                n.e("61531"),
                                                n.e("177086"),
                                                n.e("319714"),
                                                n.e("189281"),
                                                n.e("205035"),
                                                n.e("911680"),
                                                n.e("267732"),
                                                n.e("225307"),
                                                n.e("332165"),
                                                n.e("618416"),
                                                n.e("524434"),
                                                n.e("90343"),
                                                n.e("842760"),
                                                n.e("424199"),
                                                n.e("342551"),
                                                n.e("247932"),
                                                n.e("926275"),
                                                n.e("720157"),
                                                n.e("454048"),
                                                n.e("481647"),
                                                n.e("776602"),
                                                n.e("300699"),
                                                n.e("140402"),
                                                n.e("543039"),
                                                n.e("349619"),
                                                n.e("599666"),
                                                n.e("253729"),
                                                n.e("264236"),
                                                n.e("721690"),
                                                n.e("136022"),
                                                n.e("161379"),
                                                n.e("740428"),
                                                n.e("234236"),
                                                n.e("832817"),
                                                n.e("398125"),
                                                n.e("827708"),
                                                n.e("221825"),
                                                n.e("416143"),
                                                n.e("901555"),
                                                n.e("948804"),
                                                n.e("593600"),
                                                n.e("276640"),
                                                n.e("295366"),
                                                n.e("28154"),
                                                n.e("844695"),
                                                n.e("988077"),
                                                n.e("431011"),
                                                n.e("561216"),
                                                n.e("50015"),
                                                n.e("672727"),
                                                n.e("552712"),
                                                n.e("417286"),
                                                n.e("829177"),
                                                n.e("199999"),
                                                n.e("106943"),
                                                n.e("232551"),
                                                n.e("482815"),
                                                n.e("631644"),
                                                n.e("170653"),
                                                n.e("892340"),
                                                n.e("611523"),
                                                n.e("313681"),
                                                n.e("675706"),
                                                n.e("556967"),
                                                n.e("401518"),
                                                n.e("317225"),
                                                n.e("444376"),
                                                n.e("652898"),
                                                n.e("696123"),
                                                n.e("147786"),
                                                n.e("770697"),
                                                n.e("318546"),
                                                n.e("123216"),
                                                n.e("731390"),
                                                n.e("854461"),
                                                n.e("936320"),
                                                n.e("190889"),
                                                n.e("146248"),
                                                n.e("790244"),
                                                n.e("851130"),
                                                n.e("718573"),
                                                n.e("418943"),
                                                n.e("784103"),
                                                n.e("958428"),
                                                n.e("643612"),
                                                n.e("809915"),
                                                n.e("34472"),
                                                n.e("53374"),
                                                n.e("710638"),
                                                n.e("236676"),
                                                n.e("631825"),
                                                n.e("696443"),
                                                n.e("361626"),
                                                n.e("799657"),
                                                n.e("252574"),
                                                n.e("747017"),
                                                n.e("715391"),
                                                n.e("39760"),
                                                n.e("126780"),
                                                n.e("401827"),
                                                n.e("499941"),
                                                n.e("515572"),
                                                n.e("761935"),
                                                n.e("592731"),
                                                n.e("511527"),
                                                n.e("11412"),
                                                n.e("478476"),
                                                n.e("103730"),
                                                n.e("763070"),
                                                n.e("193158"),
                                                n.e("502018"),
                                                n.e("757598"),
                                                n.e("495442"),
                                                n.e("400954"),
                                                n.e("787079"),
                                                n.e("61129"),
                                                n.e("249366"),
                                                n.e("115754"),
                                                n.e("728633"),
                                                n.e("314805"),
                                                n.e("173547"),
                                                n.e("599141"),
                                                n.e("278424"),
                                                n.e("434691"),
                                                n.e("225990"),
                                                n.e("539620"),
                                                n.e("636126"),
                                                n.e("562168"),
                                                n.e("636989"),
                                                n.e("244721"),
                                                n.e("222380"),
                                                n.e("401590"),
                                                n.e("377766"),
                                                n.e("148660"),
                                                n.e("30517"),
                                                n.e("577084"),
                                                n.e("844780"),
                                                n.e("979630"),
                                                n.e("236946"),
                                                n.e("935948"),
                                                n.e("464704"),
                                                n.e("692639"),
                                                n.e("890480"),
                                                n.e("440963"),
                                                n.e("565617"),
                                                n.e("766031"),
                                                n.e("394317"),
                                                n.e("744385"),
                                                n.e("84755"),
                                                n.e("179271"),
                                                n.e("304329"),
                                                n.e("233817"),
                                                n.e("887946"),
                                                n.e("773437"),
                                            ]).then(n.bind(n, 714892));
                                            return (n) =>
                                                (0, l.jsx)(e, {
                                                    ...n,
                                                    skus: t,
                                                    guildId: i,
                                                    source: s,
                                                    analyticsLocations: a,
                                                    analyticsContext: r,
                                                });
                                        },
                                        { stackingBehavior: "stack", modalKey: k.aU },
                                    );
                            })({ skus: i, guildId: void 0, source: "social-layer-storefront-embed" });
                        },
                    }),
                    (0, l.jsx)(y.$, {
                        text: O.intl.string(O.t["ETE/oC"]),
                        variant: "secondary",
                        onClick: function () {
                            t.endMultiselect(T);
                        },
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { sku: t, doubleWidth: n } = e,
        i = (0, S.fq)(t),
        s = (0, S.xf)(t);
    return (0, l.jsx)("div", {
        className: a()(G.hu, n && G.m4),
        children:
            null != i
                ? (0, l.jsx)(_.A, {
                      containerClassName: G.Vl,
                      foregroundImageClassName: G.wP,
                      cardImage: i,
                      altText: t.name,
                      shape: "custom",
                      backgroundImageClassName: G.GC,
                      cardBackgroundImage: s,
                      cssPosition: "absolute",
                  })
                : (0, l.jsx)("div", {
                      className: G.t7,
                      children: (0, l.jsx)(C.q, {
                          color: "white",
                          size: "custom",
                          height: 80,
                          width: 80,
                          className: G.Cw,
                      }),
                  }),
    });
}
var B = n(156454),
    F = n(933958),
    V = n(869003),
    z = n(793574),
    Z = n(688810),
    K = n(206828),
    U = n(487431),
    q = n(712440),
    $ = n(134861),
    J = n(942370),
    H = n(211850),
    Q = n(712289);
function X(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, Z.Ay)(z.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: i,
            hasAlreadyLinked: s,
            startAuthorization: a,
            chosenFlow: r,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, K.RD)(t, { debug: !0 }),
        f = (0, b.bG)([$.A], () => $.A.isConnected(t.id)),
        x = (0, p.A)({ applicationId: t.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        h = (0, b.bG)([F.Ay], () => F.Ay.getSelfEmbeddedActivities());
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: Q.r,
                children: [
                    (0, l.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: O.intl.string(H.default["no+FQS"]),
                    }),
                    (0, l.jsx)(U.VT, {
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
                    (0, l.jsx)(U.VT, {
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
            (0, l.jsxs)("div", {
                className: Q.q,
                children: [
                    (0, l.jsx)(U.Sy, {
                        status: s ? U.nW.OVERALL_GOOD : U.nW.OVERALL_BAD,
                        text: O.intl.string(O.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, l.jsx)(I.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: O.intl.string(H.default.eg0mNa),
                        }),
                    (0, l.jsx)(y.$, {
                        variant: "secondary",
                        disabled: !i || s,
                        onClick: () => a({ analyticsLocations: n }),
                        text: O.intl.string(H.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, l.jsx)(y.$, {
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
                    (0, l.jsx)(y.$, {
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
var Y = n(404778);
let ee = (0, n(945810).mj)({
    name: "2026-09-multisku-embed-builder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var et = n(144228),
    en = n(702860),
    el = n(406810),
    ei = n(628284),
    es = n(285796),
    ea = n(661531),
    er = n(785562),
    ed = n(379418),
    eo = n(733391),
    ec = n(220334);
function eu(e) {
    let t = (0, ed.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, l.jsx)(er.A, { node: t }) : null;
}
function em(e) {
    let { applicationId: t } = e,
        n = (0, B.A)({ applicationId: t }),
        { entries: s } = (0, B.T)(t),
        a = s.find((e) => e.id === n.selectedStorefrontId),
        r = null == n.selectedStorefrontId || null == a,
        d = null != n.selectedStorefrontId && n.selectedStorefrontId === n.liveStorefrontId,
        o = i.useMemo(
            () =>
                s.map((e) => {
                    var t;
                    let l;
                    return {
                        name:
                            ((t = e.id === n.liveStorefrontId),
                            (l = "" !== e.title ? e.title : O.intl.string(R.default.OvBwPV)),
                            t
                                ? O.intl.formatToPlainString(R.default.eF1VJh, { title: l })
                                : null == e.publishedAt
                                  ? O.intl.formatToPlainString(R.default.dX2mQt, { title: l })
                                  : l),
                        value: e.id,
                    };
                }),
            [s, n.liveStorefrontId],
        ),
        c = i.useCallback(
            (e) => {
                (0, eo.ZR)(t, e === n.liveStorefrontId ? null : e);
            },
            [n.liveStorefrontId, t],
        );
    return (0, l.jsxs)("div", {
        className: ec.u,
        children: [
            (0, l.jsx)(ef, { isLoading: r, isLive: d, publishedAt: a?.publishedAt }),
            s.length > 1 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(Y.c, {}),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(et.z, {
                                label: O.intl.string(R.default["3nB2PV"]),
                                options: o,
                                value: n.selectedStorefrontId,
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
        n,
        { publishedAt: s, isLive: a, isLoading: r } = e,
        [o] = i.useState(() => Date.now());
    return (
        r
            ? ((t = O.intl.string(O.t.ZTNur7)), (n = (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == s
              ? ((t = O.intl.string(R.default.CUAKSg)),
                (n = (0, l.jsx)(en.W, { color: ea.A.colors.ICON_FEEDBACK_WARNING })))
              : s.getTime() > o
                ? ((t = O.intl.format(R.default.evGwDW, { timestamp: eu(s) })),
                  (n = (0, l.jsx)(el.ClockIcon, { color: ea.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = O.intl.format(R.default.rbAtUi, { timestamp: eu(s) })),
                    (n = (0, l.jsx)(ei.y, { color: ea.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = O.intl.format(R.default["3x/M9Z"], { timestamp: eu(s) })),
                    (n = (0, l.jsx)(es.a, { color: ea.A.colors.ICON_MUTED }))),
        (0, l.jsxs)("div", {
            className: ec.D,
            children: [n, (0, l.jsx)(d.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var ex = n(471364);
function eh(e) {
    let { application: t } = e,
        n = t.id,
        { enabled: i } = ee.useConfig({ location: "storefront_debug_tab" });
    return (0, l.jsxs)("div", {
        className: ex.r,
        children: [
            (0, l.jsx)(em, { applicationId: n }),
            i && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(Y.c, {}), (0, l.jsx)(W, { applicationId: n })] }),
        ],
    });
}
var eg = n(464851);
let ev = "social_layer_dev_tools_panel_width";
function ej() {
    let e = f.w.get(ev);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function ep(e) {
    f.w.set(ev, e);
}
let eA = null;
function eN(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i } = e,
        s = (0, h.A)({
            minDimension: 320,
            maxDimension: 720,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, l.jsx)("div", { onMouseDown: s, className: eg.Di, "aria-hidden": !0 });
}
function eb() {
    var e;
    let t,
        n,
        s = (0, g.h)(N.A.testModeApplicationId),
        f = (0, v.fy)(),
        h = i.useRef(!1),
        b = f.metadata,
        I = (0, p.A)({ applicationId: s?.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    i.useEffect(() => {
        b?.shouldAutoOpenGameProfile !== !0 || null == I || h.current || ((h.current = !0), I());
    }, [b, I]);
    let y = i.useRef(null),
        [E, C] = i.useState(ej),
        S = (0, r.clamp)(E, 320, 720),
        D = (function (e) {
            let t = e?.id,
                { isTestMode: n, entries: s } = (0, B.T)(t),
                a = n && s.length > 0;
            return i.useMemo(
                () =>
                    [
                        {
                            id: "account_linking",
                            name: O.intl.string(H.default.vR0zs6),
                            render: (e) => (0, l.jsx)(X, { ...e }),
                        },
                        {
                            id: "storefront",
                            name: O.intl.string(R.default["qnSo/i"]),
                            render: (e) => (0, l.jsx)(eh, { ...e }),
                            predicate: (e) => null != e && a,
                        },
                    ].filter((t) => null == t.predicate || t.predicate(e)),
                [e, a],
            );
        })(s),
        [k, _] = i.useState(D[0]?.id),
        w = D.find((e) => e.id === k) ?? D[0],
        L = (0, A.qZ)((e) => e.config?.key === T);
    function W(e) {
        return (0, l.jsxs)("div", {
            className: eg.wx,
            children: [
                (0, l.jsx)("div", {
                    className: eg.if,
                    children: (0, l.jsx)(d.D, {
                        variant: "heading-lg/extrabold",
                        children: O.intl.format(H.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != s &&
                    (0, l.jsx)(o.K, {
                        variant: "icon-only",
                        icon: c.U,
                        "aria-label": O.intl.string(O.t.cpT0Cq),
                        onClick: () => (0, v.Jp)(),
                    }),
            ],
        });
    }
    return (
        i.useEffect(
            () => (
                null != eA && (clearTimeout(eA), (eA = null)),
                () => {
                    eA = setTimeout(() => {
                        ((eA = null), A.Rj.getState().actions.endMultiselect(T));
                    }, 0);
                }
            ),
            [],
        ),
        (0, l.jsxs)("div", {
            "data-app-right-panel": !0,
            ref: y,
            className: eg.nE,
            style: { width: S },
            children: [
                (0, l.jsx)(eN, { resizableNode: y, onResize: C, onResizeEnd: ep }),
                (0, l.jsx)(m.F, {
                    children:
                        null != s
                            ? ((e = s.name),
                              (n = !0),
                              L ? ((t = (0, l.jsx)(M, {})), (n = !1)) : (t = w?.render({ application: s })),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      W(e),
                                      n &&
                                          (0, l.jsx)("div", {
                                              className: eg.Mv,
                                              children: (0, l.jsx)(x.V, {
                                                  className: eg.$H,
                                                  selectedItem: w?.id,
                                                  onItemSelect: _,
                                                  orientation: "horizontal",
                                                  type: "top",
                                                  look: "brand",
                                                  children: D.map((e) =>
                                                      (0, l.jsx)(
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
                                      (0, l.jsx)("div", { className: eg.rf, children: t }),
                                  ],
                              }))
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      W(""),
                                      (0, l.jsx)("div", {
                                          className: eg.TG,
                                          children: (0, l.jsx)(u.y, { className: eg.u1 }),
                                      }),
                                  ],
                              }),
                }),
            ],
        })
    );
}
