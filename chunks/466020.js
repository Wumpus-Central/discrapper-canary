(i.r(t), i.d(t, { default: () => eE }));
var l = i(477900),
    n = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(435558),
    d = i(506774),
    o = i(297264),
    c = i(408278),
    u = i(807072),
    m = i(289873),
    f = i(761508),
    x = i(707554),
    h = i(761929),
    g = i(429913),
    v = i(793943),
    j = i(409626),
    p = i(692969),
    A = i(381999),
    N = i(147964),
    b = i(17928),
    I = i(834730),
    y = i(821609),
    C = i(292801),
    E = i(638916),
    S = i(871123),
    D = i(192308),
    O = i(294454),
    R = i(366523),
    T = i(67480),
    _ = i(976860),
    k = i(832163),
    w = i(44724),
    L = i(375708),
    W = i(206285),
    G = i(326941);
let M = "embed-builder";
function F(e) {
    let { applicationId: t } = e,
        { actions: i } = (0, A.qZ)((e) => e);
    return (0, l.jsxs)("div", {
        className: G.hA,
        children: [
            (0, l.jsx)("div", {
                className: G.wx,
                children: (0, l.jsx)(o.D, {
                    variant: "heading-lg/semibold",
                    children: L.intl.string(W.default.Z3uXLR),
                }),
            }),
            (0, l.jsx)(I.E, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: L.intl.string(W.default.sS4xGd),
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "primary",
                    size: "sm",
                    text: L.intl.string(W.default.fr7qnZ),
                    onClick: function () {
                        if (!i.startMultiselect({ applicationId: t, key: M, maxSelections: 6 })) return;
                        let { pathname: e, search: l } = (0, _.JK)().location,
                            n = k.A.getGuildIdFromApplicationId(t);
                        (0, S.rG)(e, l, t, n) || (0, w.default)({ applicationId: t });
                    },
                }),
            }),
        ],
    });
}
var P = i(367224);
function B() {
    let { selectedIds: e, actions: t } = (0, A.qZ)((e) => e),
        n = (0, b.yK)([T.A], () => [...e].map((e) => T.A.get(e)), [e]);
    return (0, l.jsxs)("div", {
        className: P.hA,
        children: [
            (0, l.jsxs)("div", {
                className: P.rf,
                children: [
                    (0, l.jsx)(o.D, { variant: "heading-lg/semibold", children: L.intl.string(W.default.Z3uXLR) }),
                    (0, l.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: L.intl.string(W.default.sS4xGd),
                    }),
                    (0, l.jsxs)("div", {
                        className: P.t8,
                        children: [
                            (0, l.jsx)(I.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: L.intl.formatToPlainString(W.default.mmTvZn, { count: e.size, max: 6 }),
                            }),
                            (0, l.jsx)("div", {
                                className: P.Mc,
                                children: n.map((e, t) =>
                                    (0, l.jsx)(V, { sku: e, doubleWidth: 0 === t && n.length % 2 == 1 }, e.id),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: P.o1,
                children: [
                    (0, l.jsx)(y.$, {
                        icon: C.t,
                        disabled: 0 === e.size,
                        text: L.intl.string(W.default.ozurym),
                        variant: "primary",
                        fullWidth: !0,
                        onClick: function () {
                            (t.endMultiselect(M),
                                ((e) => {
                                    let {
                                        skus: t,
                                        guildId: n,
                                        source: s,
                                        analyticsLocations: a,
                                        analyticsContext: r,
                                    } = e;
                                    0 !== t.length &&
                                        (0, D.openModalLazy)(
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    i.e("325522"),
                                                    i.e("401317"),
                                                    i.e("862735"),
                                                    i.e("476988"),
                                                    i.e("552653"),
                                                    i.e("311580"),
                                                    i.e("174554"),
                                                    i.e("116815"),
                                                    i.e("82389"),
                                                    i.e("812720"),
                                                    i.e("891089"),
                                                    i.e("371496"),
                                                    i.e("196063"),
                                                    i.e("392028"),
                                                    i.e("124054"),
                                                    i.e("441674"),
                                                    i.e("419656"),
                                                    i.e("67702"),
                                                    i.e("702154"),
                                                    i.e("85427"),
                                                    i.e("51872"),
                                                    i.e("560570"),
                                                    i.e("334324"),
                                                    i.e("64769"),
                                                    i.e("992956"),
                                                    i.e("880150"),
                                                    i.e("490743"),
                                                    i.e("7452"),
                                                    i.e("529787"),
                                                    i.e("309499"),
                                                    i.e("415695"),
                                                    i.e("978463"),
                                                    i.e("691398"),
                                                    i.e("266201"),
                                                    i.e("752704"),
                                                    i.e("56606"),
                                                    i.e("227652"),
                                                    i.e("629972"),
                                                    i.e("40791"),
                                                    i.e("358404"),
                                                    i.e("245758"),
                                                    i.e("561672"),
                                                    i.e("977306"),
                                                    i.e("847980"),
                                                    i.e("957251"),
                                                    i.e("677624"),
                                                    i.e("879641"),
                                                    i.e("720210"),
                                                    i.e("98857"),
                                                    i.e("495628"),
                                                    i.e("390430"),
                                                    i.e("326605"),
                                                    i.e("644289"),
                                                    i.e("460915"),
                                                    i.e("675582"),
                                                    i.e("856943"),
                                                    i.e("192388"),
                                                    i.e("165994"),
                                                    i.e("652091"),
                                                    i.e("996907"),
                                                    i.e("657503"),
                                                    i.e("377989"),
                                                    i.e("797845"),
                                                    i.e("867721"),
                                                    i.e("567999"),
                                                    i.e("156032"),
                                                    i.e("267526"),
                                                    i.e("377265"),
                                                    i.e("400088"),
                                                    i.e("35328"),
                                                    i.e("915170"),
                                                    i.e("296956"),
                                                    i.e("334168"),
                                                    i.e("582012"),
                                                    i.e("781821"),
                                                    i.e("650387"),
                                                    i.e("195719"),
                                                    i.e("678906"),
                                                    i.e("358931"),
                                                    i.e("168248"),
                                                    i.e("533240"),
                                                    i.e("962953"),
                                                    i.e("434168"),
                                                    i.e("59565"),
                                                    i.e("456885"),
                                                    i.e("459086"),
                                                    i.e("61531"),
                                                    i.e("177086"),
                                                    i.e("319714"),
                                                    i.e("189281"),
                                                    i.e("205035"),
                                                    i.e("911680"),
                                                    i.e("267732"),
                                                    i.e("225307"),
                                                    i.e("332165"),
                                                    i.e("618416"),
                                                    i.e("524434"),
                                                    i.e("90343"),
                                                    i.e("842760"),
                                                    i.e("424199"),
                                                    i.e("342551"),
                                                    i.e("247932"),
                                                    i.e("985788"),
                                                    i.e("720157"),
                                                    i.e("454048"),
                                                    i.e("481647"),
                                                    i.e("776602"),
                                                    i.e("300699"),
                                                    i.e("140402"),
                                                    i.e("349619"),
                                                    i.e("599666"),
                                                    i.e("543039"),
                                                    i.e("264236"),
                                                    i.e("253729"),
                                                    i.e("721690"),
                                                    i.e("136022"),
                                                    i.e("161379"),
                                                    i.e("740428"),
                                                    i.e("832817"),
                                                    i.e("398125"),
                                                    i.e("827708"),
                                                    i.e("221825"),
                                                    i.e("416143"),
                                                    i.e("901555"),
                                                    i.e("930758"),
                                                    i.e("234236"),
                                                    i.e("295366"),
                                                    i.e("28154"),
                                                    i.e("844695"),
                                                    i.e("948804"),
                                                    i.e("988077"),
                                                    i.e("593600"),
                                                    i.e("431011"),
                                                    i.e("561216"),
                                                    i.e("50015"),
                                                    i.e("707826"),
                                                    i.e("552712"),
                                                    i.e("417286"),
                                                    i.e("829177"),
                                                    i.e("199999"),
                                                    i.e("106943"),
                                                    i.e("232551"),
                                                    i.e("631644"),
                                                    i.e("892340"),
                                                    i.e("611523"),
                                                    i.e("313681"),
                                                    i.e("672727"),
                                                    i.e("675706"),
                                                    i.e("556967"),
                                                    i.e("401518"),
                                                    i.e("444376"),
                                                    i.e("482815"),
                                                    i.e("170653"),
                                                    i.e("147786"),
                                                    i.e("770697"),
                                                    i.e("318546"),
                                                    i.e("123216"),
                                                    i.e("854461"),
                                                    i.e("936320"),
                                                    i.e("190889"),
                                                    i.e("790244"),
                                                    i.e("851130"),
                                                    i.e("718573"),
                                                    i.e("418943"),
                                                    i.e("784103"),
                                                    i.e("958428"),
                                                    i.e("317225"),
                                                    i.e("643612"),
                                                    i.e("499941"),
                                                    i.e("809915"),
                                                    i.e("34472"),
                                                    i.e("652898"),
                                                    i.e("53374"),
                                                    i.e("710638"),
                                                    i.e("696123"),
                                                    i.e("236676"),
                                                    i.e("631825"),
                                                    i.e("696443"),
                                                    i.e("361626"),
                                                    i.e("731390"),
                                                    i.e("799657"),
                                                    i.e("252574"),
                                                    i.e("747017"),
                                                    i.e("146248"),
                                                    i.e("715391"),
                                                    i.e("445421"),
                                                    i.e("126780"),
                                                    i.e("401827"),
                                                    i.e("761935"),
                                                    i.e("592731"),
                                                    i.e("511527"),
                                                    i.e("478476"),
                                                    i.e("103730"),
                                                    i.e("763070"),
                                                    i.e("193158"),
                                                    i.e("502018"),
                                                    i.e("757598"),
                                                    i.e("452299"),
                                                    i.e("400954"),
                                                    i.e("61129"),
                                                    i.e("249366"),
                                                    i.e("105136"),
                                                    i.e("115754"),
                                                    i.e("728633"),
                                                    i.e("314805"),
                                                    i.e("173547"),
                                                    i.e("599141"),
                                                    i.e("278424"),
                                                    i.e("434691"),
                                                    i.e("515572"),
                                                    i.e("225990"),
                                                    i.e("636126"),
                                                    i.e("562168"),
                                                    i.e("636989"),
                                                    i.e("244721"),
                                                    i.e("401590"),
                                                    i.e("8563"),
                                                    i.e("416311"),
                                                    i.e("377766"),
                                                    i.e("148660"),
                                                    i.e("30517"),
                                                    i.e("577084"),
                                                    i.e("844780"),
                                                    i.e("979630"),
                                                    i.e("236946"),
                                                    i.e("935948"),
                                                    i.e("464704"),
                                                    i.e("692639"),
                                                    i.e("890480"),
                                                    i.e("440963"),
                                                    i.e("565617"),
                                                    i.e("766031"),
                                                    i.e("394317"),
                                                    i.e("744385"),
                                                    i.e("84755"),
                                                    i.e("179271"),
                                                    i.e("304329"),
                                                    i.e("233817"),
                                                    i.e("85460"),
                                                    i.e("773437"),
                                                ]).then(i.bind(i, 714892));
                                                return (i) =>
                                                    (0, l.jsx)(e, {
                                                        ...i,
                                                        skus: t,
                                                        guildId: n,
                                                        source: s,
                                                        analyticsLocations: a,
                                                        analyticsContext: r,
                                                    });
                                            },
                                            { stackingBehavior: "stack", modalKey: O.aU },
                                        );
                                })({ skus: n, guildId: void 0, source: "social-layer-storefront-embed" }));
                        },
                    }),
                    (0, l.jsx)(y.$, {
                        text: L.intl.string(L.t["ETE/oC"]),
                        variant: "secondary",
                        onClick: function () {
                            t.endMultiselect(M);
                        },
                    }),
                ],
            }),
        ],
    });
}
function V(e) {
    let { sku: t, doubleWidth: i } = e,
        n = (0, S.fq)(t),
        s = (0, S.xf)(t);
    return (0, l.jsx)("div", {
        className: a()(P.hu, i && P.m4),
        children:
            null != n
                ? (0, l.jsx)(R.A, {
                      containerClassName: P.Vl,
                      foregroundImageClassName: P.wP,
                      cardImage: n,
                      altText: t.name,
                      shape: "custom",
                      backgroundImageClassName: P.GC,
                      cardBackgroundImage: s,
                      cssPosition: "absolute",
                  })
                : (0, l.jsx)("div", {
                      className: P.t7,
                      children: (0, l.jsx)(E.q, {
                          color: "white",
                          size: "custom",
                          height: 80,
                          width: 80,
                          className: P.Cw,
                      }),
                  }),
    });
}
var z = i(156454),
    K = i(933958),
    Z = i(869003),
    U = i(793574),
    q = i(688810),
    J = i(206828),
    $ = i(487431),
    H = i(712440),
    Q = i(134861),
    X = i(942370),
    Y = i(211850),
    ee = i(712289);
function et(e) {
    let { application: t } = e,
        { analyticsLocations: i } = (0, q.Ay)(U.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: s,
            startAuthorization: a,
            chosenFlow: r,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, J.RD)(t, { debug: !0 }),
        f = (0, b.bG)([Q.A], () => Q.A.isConnected(t.id)),
        x = (0, p.A)({ applicationId: t.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        h = (0, b.bG)([K.Ay], () => K.Ay.getSelfEmbeddedActivities());
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: ee.r,
                children: [
                    (0, l.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: L.intl.string(Y.default["no+FQS"]),
                    }),
                    (0, l.jsx)($.VT, {
                        flow: X._.RPC,
                        overallStatus: o ? $.nW.OVERALL_GOOD : f ? $.nW.WARN : $.nW.OVERALL_BAD,
                        name: L.intl.string(Y.default.AGLx00),
                        steps: [
                            {
                                status: f ? $.nW.GOOD : $.nW.BAD,
                                text: L.intl.string(Y.default.kxF9br),
                                description: f ? null : L.intl.string(Y.default.PFxxJa),
                                learnMoreLink: f
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: o ? $.nW.GOOD : f ? $.nW.WARN : $.nW.BAD,
                                text: L.intl.string(Y.default.S94dzs),
                                description: o || !f ? null : L.intl.string(Y.default.aTULMB),
                                learnMoreLink:
                                    o || !f
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: r === X._.RPC,
                    }),
                    (0, l.jsx)($.VT, {
                        flow: X._.WEB,
                        overallStatus: u ? $.nW.OVERALL_GOOD : $.nW.OVERALL_BAD,
                        name: L.intl.string(Y.default.K3ObrU),
                        steps: [
                            {
                                status: u ? $.nW.GOOD : $.nW.BAD,
                                text: L.intl.string(Y.default["8a7IrV"]),
                                description: u
                                    ? L.intl.formatToPlainString(Y.default["9iLeL2"], {
                                          url: d?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: r === X._.WEB,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: ee.q,
                children: [
                    (0, l.jsx)($.Sy, {
                        status: s ? $.nW.OVERALL_GOOD : $.nW.OVERALL_BAD,
                        text: L.intl.string(L.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, l.jsx)(I.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: L.intl.string(Y.default.eg0mNa),
                        }),
                    (0, l.jsx)(y.$, {
                        variant: "secondary",
                        disabled: !n || s,
                        onClick: () => a({ analyticsLocations: i }),
                        text: L.intl.string(Y.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, l.jsx)(y.$, {
                            variant: "secondary",
                            onClick: () => {
                                H.A.delete(c.id);
                                let e = h.get(t.id);
                                null != e &&
                                    Z.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
                            },
                            text: L.intl.string(Y.default.tkIymA),
                            fullWidth: !0,
                        }),
                    (0, l.jsx)(y.$, {
                        variant: "secondary",
                        onClick: x ?? void 0,
                        disabled: null == x,
                        text: L.intl.string(Y.default.cCvdJy),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
var ei = i(404778);
let el = (0, i(945810).mj)({
    name: "2026-09-multisku-embed-builder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var en = i(661531),
    es = i(144228),
    ea = i(702860),
    er = i(406810),
    ed = i(628284),
    eo = i(285796),
    ec = i(785562),
    eu = i(379418),
    em = i(733391),
    ef = i(220334);
function ex(e) {
    let t = (0, eu.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, l.jsx)(ec.A, { node: t }) : null;
}
function eh(e) {
    let { applicationId: t } = e,
        i = (0, z.A)({ applicationId: t }),
        { entries: s } = (0, z.T)(t),
        a = s.find((e) => e.id === i.selectedStorefrontId),
        r = null == i.selectedStorefrontId || null == a,
        d = null != i.selectedStorefrontId && i.selectedStorefrontId === i.liveStorefrontId,
        o = n.useMemo(
            () =>
                s.map((e) => {
                    var t;
                    let l;
                    return {
                        name:
                            ((t = e.id === i.liveStorefrontId),
                            (l = "" !== e.title ? e.title : L.intl.string(W.default.OvBwPV)),
                            t
                                ? L.intl.formatToPlainString(W.default.eF1VJh, { title: l })
                                : null == e.publishedAt
                                  ? L.intl.formatToPlainString(W.default.dX2mQt, { title: l })
                                  : l),
                        value: e.id,
                    };
                }),
            [s, i.liveStorefrontId],
        ),
        c = n.useCallback(
            (e) => {
                (0, em.ZR)(t, e === i.liveStorefrontId ? null : e);
            },
            [i.liveStorefrontId, t],
        );
    return (0, l.jsxs)("div", {
        className: ef.u,
        children: [
            (0, l.jsx)(eg, { isLoading: r, isLive: d, publishedAt: a?.publishedAt }),
            s.length > 1 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ei.c, {}),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(es.z, {
                                label: L.intl.string(W.default["3nB2PV"]),
                                options: o,
                                value: i.selectedStorefrontId,
                                onChange: c,
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function eg(e) {
    let t,
        i,
        { publishedAt: s, isLive: a, isLoading: r } = e,
        [d] = n.useState(() => Date.now());
    return (
        r
            ? ((t = L.intl.string(L.t.ZTNur7)), (i = (0, l.jsx)(m.y, { type: m.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == s
              ? ((t = L.intl.string(W.default.CUAKSg)),
                (i = (0, l.jsx)(ea.W, { color: en.A.colors.ICON_FEEDBACK_WARNING })))
              : s.getTime() > d
                ? ((t = L.intl.format(W.default.evGwDW, { timestamp: ex(s) })),
                  (i = (0, l.jsx)(er.ClockIcon, { color: en.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = L.intl.format(W.default.rbAtUi, { timestamp: ex(s) })),
                    (i = (0, l.jsx)(ed.y, { color: en.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = L.intl.format(W.default["3x/M9Z"], { timestamp: ex(s) })),
                    (i = (0, l.jsx)(eo.a, { color: en.A.colors.ICON_MUTED }))),
        (0, l.jsxs)("div", {
            className: ef.D,
            children: [i, (0, l.jsx)(o.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var ev = i(471364);
function ej(e) {
    let { application: t } = e,
        i = t.id,
        { enabled: n } = el.useConfig({ location: "storefront_debug_tab" });
    return (0, l.jsxs)("div", {
        className: ev.r,
        children: [
            (0, l.jsx)(eh, { applicationId: i }),
            n && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(ei.c, {}), (0, l.jsx)(F, { applicationId: i })] }),
        ],
    });
}
var ep = i(616633),
    eA = i(464851);
let eN = "social_layer_dev_tools_panel_width";
function eb() {
    let e = d.w.get(eN);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function eI(e) {
    d.w.set(eN, e);
}
let ey = null;
function eC(e) {
    let { resizableNode: t, onResize: i, onResizeEnd: n } = e,
        s = (0, h.A)({
            minDimension: 320,
            maxDimension: 720,
            resizableDomNodeRef: t,
            onElementResize: i,
            onElementResizeEnd: n,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, l.jsx)("div", { onMouseDown: s, className: eA.Di, "aria-hidden": !0 });
}
function eE() {
    var e;
    let t,
        i,
        s = (0, g.h)(N.A.testModeApplicationId),
        d = (0, v.fy)(),
        h = n.useRef(!1),
        b = d.metadata,
        I = (0, p.A)({ applicationId: s?.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    n.useEffect(() => {
        b?.shouldAutoOpenGameProfile !== !0 || null == I || h.current || ((h.current = !0), I());
    }, [b, I]);
    let y = n.useRef(null),
        [C, E] = n.useState(eb),
        S = (0, r.clamp)(C, 320, 720),
        D = (function (e) {
            let t = e?.id,
                { isTestMode: i, entries: s } = (0, z.T)(t),
                a = i && s.length > 0;
            return n.useMemo(
                () =>
                    [
                        {
                            id: ep.t.ACCOUNT_LINKING,
                            name: L.intl.string(Y.default.vR0zs6),
                            render: (e) => (0, l.jsx)(et, { ...e }),
                        },
                        {
                            id: ep.t.STOREFRONT,
                            name: L.intl.string(W.default["qnSo/i"]),
                            render: (e) => (0, l.jsx)(ej, { ...e }),
                            predicate: (e) => null != e && a,
                        },
                    ].filter((t) => null == t.predicate || t.predicate(e)),
                [e, a],
            );
        })(s),
        [O, R] = n.useState(void 0),
        T = D.find((e) => e.id === (O ?? b?.initialTabId)) ?? D[0],
        _ = (0, A.qZ)((e) => e.config?.key === M);
    function k(e) {
        return (0, l.jsxs)("div", {
            className: eA.wx,
            children: [
                (0, l.jsx)("div", {
                    className: eA.if,
                    children: (0, l.jsx)(o.D, {
                        variant: "heading-lg/extrabold",
                        children: L.intl.format(Y.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != s &&
                    (0, l.jsx)(c.K, {
                        variant: "icon-only",
                        icon: u.U,
                        "aria-label": L.intl.string(L.t.cpT0Cq),
                        onClick: () => (0, v.Jp)(),
                    }),
            ],
        });
    }
    return (
        n.useEffect(
            () => (
                null != ey && (clearTimeout(ey), (ey = null)),
                () => {
                    ey = setTimeout(() => {
                        ((ey = null), A.Rj.getState().actions.endMultiselect(M));
                    }, 0);
                }
            ),
            [],
        ),
        (0, l.jsxs)("div", {
            "data-app-right-panel": !0,
            ref: y,
            className: eA.nE,
            style: { width: S },
            children: [
                (0, l.jsx)(eC, { resizableNode: y, onResize: E, onResizeEnd: eI }),
                (0, l.jsx)(x.F, {
                    children:
                        null != s
                            ? ((e = s.name),
                              (i = !0),
                              _ ? ((t = (0, l.jsx)(B, {})), (i = !1)) : (t = T?.render({ application: s })),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      k(e),
                                      i &&
                                          (0, l.jsx)("div", {
                                              className: eA.Mv,
                                              children: (0, l.jsx)(f.V, {
                                                  className: eA.$H,
                                                  selectedItem: T?.id,
                                                  onItemSelect: R,
                                                  orientation: "horizontal",
                                                  type: "top",
                                                  look: "brand",
                                                  children: D.map((e) =>
                                                      (0, l.jsx)(
                                                          f.V.Item,
                                                          {
                                                              className: a()(eA.Mf, { [eA.wH]: e.id === T?.id }),
                                                              id: e.id,
                                                              "aria-label": e.name,
                                                              children: e.name,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          }),
                                      (0, l.jsx)("div", { className: eA.rf, children: t }),
                                  ],
                              }))
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      k(""),
                                      (0, l.jsx)("div", {
                                          className: eA.TG,
                                          children: (0, l.jsx)(m.y, { className: eA.u1 }),
                                      }),
                                  ],
                              }),
                }),
            ],
        })
    );
}
