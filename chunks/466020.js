(n.r(t), n.d(t, { default: () => eE }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(435558),
    d = n(506774),
    o = n(297264),
    c = n(408278),
    u = n(807072),
    m = n(289873),
    f = n(761508),
    x = n(707554),
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
    O = n(976860),
    R = n(832163),
    L = n(44724),
    T = n(375708),
    W = n(206285),
    G = n(326941);
let M = "embed-builder";
function P(e) {
    let { applicationId: t } = e,
        { actions: n } = (0, A.qZ)((e) => e);
    return (0, l.jsxs)("div", {
        className: G.hA,
        children: [
            (0, l.jsx)("div", {
                className: G.wx,
                children: (0, l.jsx)(o.D, {
                    variant: "heading-lg/semibold",
                    children: T.intl.string(W.default.Z3uXLR),
                }),
            }),
            (0, l.jsx)(I.E, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: T.intl.string(W.default.sS4xGd),
            }),
            (0, l.jsx)("div", {
                children: (0, l.jsx)(y.$, {
                    fullWidth: !0,
                    variant: "primary",
                    size: "sm",
                    text: T.intl.string(W.default.fr7qnZ),
                    onClick: function () {
                        if (!n.startMultiselect({ applicationId: t, key: M, maxSelections: 6 })) return;
                        let { pathname: e, search: l } = (0, O.JK)().location,
                            i = R.A.getGuildIdFromApplicationId(t);
                        (0, S.rG)(e, l, t, i) || (0, L.default)({ applicationId: t });
                    },
                }),
            }),
        ],
    });
}
var F = n(367224);
function B() {
    let { selectedIds: e, actions: t } = (0, A.qZ)((e) => e),
        i = (0, b.yK)([w.A], () => [...e].map((e) => w.A.get(e)), [e]);
    return (0, l.jsxs)("div", {
        className: F.hA,
        children: [
            (0, l.jsxs)("div", {
                className: F.rf,
                children: [
                    (0, l.jsx)(o.D, { variant: "heading-lg/semibold", children: T.intl.string(W.default.Z3uXLR) }),
                    (0, l.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: T.intl.string(W.default.sS4xGd),
                    }),
                    (0, l.jsxs)("div", {
                        className: F.t8,
                        children: [
                            (0, l.jsx)(I.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: T.intl.formatToPlainString(W.default.mmTvZn, { count: e.size, max: 6 }),
                            }),
                            (0, l.jsx)("div", {
                                className: F.Mc,
                                children: i.map((e, t) =>
                                    (0, l.jsx)(V, { sku: e, doubleWidth: 0 === t && i.length % 2 == 1 }, e.id),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: F.o1,
                children: [
                    (0, l.jsx)(y.$, {
                        icon: E.t,
                        disabled: 0 === e.size,
                        text: T.intl.string(W.default.ozurym),
                        variant: "primary",
                        fullWidth: !0,
                        onClick: function () {
                            (t.endMultiselect(M),
                                ((e) => {
                                    let {
                                        skus: t,
                                        guildId: i,
                                        source: s,
                                        analyticsLocations: a,
                                        analyticsContext: r,
                                    } = e;
                                    0 !== t.length &&
                                        (0, D.openModalLazy)(
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("325522"),
                                                    n.e("401317"),
                                                    n.e("862735"),
                                                    n.e("476988"),
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
                                                    n.e("978463"),
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
                                                    n.e("985788"),
                                                    n.e("720157"),
                                                    n.e("454048"),
                                                    n.e("481647"),
                                                    n.e("776602"),
                                                    n.e("300699"),
                                                    n.e("140402"),
                                                    n.e("349619"),
                                                    n.e("599666"),
                                                    n.e("543039"),
                                                    n.e("264236"),
                                                    n.e("253729"),
                                                    n.e("721690"),
                                                    n.e("136022"),
                                                    n.e("161379"),
                                                    n.e("740428"),
                                                    n.e("832817"),
                                                    n.e("398125"),
                                                    n.e("827708"),
                                                    n.e("221825"),
                                                    n.e("416143"),
                                                    n.e("901555"),
                                                    n.e("593600"),
                                                    n.e("276640"),
                                                    n.e("234236"),
                                                    n.e("295366"),
                                                    n.e("28154"),
                                                    n.e("844695"),
                                                    n.e("948804"),
                                                    n.e("988077"),
                                                    n.e("431011"),
                                                    n.e("561216"),
                                                    n.e("50015"),
                                                    n.e("552712"),
                                                    n.e("417286"),
                                                    n.e("829177"),
                                                    n.e("199999"),
                                                    n.e("106943"),
                                                    n.e("232551"),
                                                    n.e("631644"),
                                                    n.e("892340"),
                                                    n.e("611523"),
                                                    n.e("313681"),
                                                    n.e("672727"),
                                                    n.e("675706"),
                                                    n.e("556967"),
                                                    n.e("401518"),
                                                    n.e("444376"),
                                                    n.e("482815"),
                                                    n.e("170653"),
                                                    n.e("147786"),
                                                    n.e("770697"),
                                                    n.e("318546"),
                                                    n.e("123216"),
                                                    n.e("854461"),
                                                    n.e("936320"),
                                                    n.e("190889"),
                                                    n.e("790244"),
                                                    n.e("851130"),
                                                    n.e("718573"),
                                                    n.e("418943"),
                                                    n.e("784103"),
                                                    n.e("958428"),
                                                    n.e("317225"),
                                                    n.e("643612"),
                                                    n.e("499941"),
                                                    n.e("809915"),
                                                    n.e("34472"),
                                                    n.e("652898"),
                                                    n.e("53374"),
                                                    n.e("710638"),
                                                    n.e("696123"),
                                                    n.e("236676"),
                                                    n.e("631825"),
                                                    n.e("696443"),
                                                    n.e("361626"),
                                                    n.e("731390"),
                                                    n.e("799657"),
                                                    n.e("252574"),
                                                    n.e("747017"),
                                                    n.e("146248"),
                                                    n.e("715391"),
                                                    n.e("445421"),
                                                    n.e("126780"),
                                                    n.e("401827"),
                                                    n.e("761935"),
                                                    n.e("592731"),
                                                    n.e("511527"),
                                                    n.e("478476"),
                                                    n.e("103730"),
                                                    n.e("763070"),
                                                    n.e("193158"),
                                                    n.e("502018"),
                                                    n.e("757598"),
                                                    n.e("452299"),
                                                    n.e("400954"),
                                                    n.e("61129"),
                                                    n.e("249366"),
                                                    n.e("105136"),
                                                    n.e("115754"),
                                                    n.e("728633"),
                                                    n.e("314805"),
                                                    n.e("173547"),
                                                    n.e("599141"),
                                                    n.e("278424"),
                                                    n.e("434691"),
                                                    n.e("515572"),
                                                    n.e("225990"),
                                                    n.e("636126"),
                                                    n.e("562168"),
                                                    n.e("636989"),
                                                    n.e("244721"),
                                                    n.e("222380"),
                                                    n.e("401590"),
                                                    n.e("8563"),
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
                                                    n.e("85460"),
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
                                })({ skus: i, guildId: void 0, source: "social-layer-storefront-embed" }));
                        },
                    }),
                    (0, l.jsx)(y.$, {
                        text: T.intl.string(T.t["ETE/oC"]),
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
    let { sku: t, doubleWidth: n } = e,
        i = (0, S.fq)(t),
        s = (0, S.xf)(t);
    return (0, l.jsx)("div", {
        className: a()(F.hu, n && F.m4),
        children:
            null != i
                ? (0, l.jsx)(_.A, {
                      containerClassName: F.Vl,
                      foregroundImageClassName: F.wP,
                      cardImage: i,
                      altText: t.name,
                      shape: "custom",
                      backgroundImageClassName: F.GC,
                      cardBackgroundImage: s,
                      cssPosition: "absolute",
                  })
                : (0, l.jsx)("div", {
                      className: F.t7,
                      children: (0, l.jsx)(C.q, {
                          color: "white",
                          size: "custom",
                          height: 80,
                          width: 80,
                          className: F.Cw,
                      }),
                  }),
    });
}
var z = n(156454),
    Z = n(933958),
    K = n(869003),
    U = n(793574),
    q = n(688810),
    J = n(206828),
    $ = n(487431),
    H = n(712440),
    Q = n(134861),
    X = n(942370),
    Y = n(211850),
    ee = n(712289);
function et(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, q.Ay)(U.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: i,
            hasAlreadyLinked: s,
            startAuthorization: a,
            chosenFlow: r,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, J.RD)(t, { debug: !0 }),
        f = (0, b.bG)([Q.A], () => Q.A.isConnected(t.id)),
        x = (0, p.A)({ applicationId: t.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        h = (0, b.bG)([Z.Ay], () => Z.Ay.getSelfEmbeddedActivities());
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: ee.r,
                children: [
                    (0, l.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: T.intl.string(Y.default["no+FQS"]),
                    }),
                    (0, l.jsx)($.VT, {
                        flow: X._.RPC,
                        overallStatus: o ? $.nW.OVERALL_GOOD : f ? $.nW.WARN : $.nW.OVERALL_BAD,
                        name: T.intl.string(Y.default.AGLx00),
                        steps: [
                            {
                                status: f ? $.nW.GOOD : $.nW.BAD,
                                text: T.intl.string(Y.default.kxF9br),
                                description: f ? null : T.intl.string(Y.default.PFxxJa),
                                learnMoreLink: f
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: o ? $.nW.GOOD : f ? $.nW.WARN : $.nW.BAD,
                                text: T.intl.string(Y.default.S94dzs),
                                description: o || !f ? null : T.intl.string(Y.default.aTULMB),
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
                        name: T.intl.string(Y.default.K3ObrU),
                        steps: [
                            {
                                status: u ? $.nW.GOOD : $.nW.BAD,
                                text: T.intl.string(Y.default["8a7IrV"]),
                                description: u
                                    ? T.intl.formatToPlainString(Y.default["9iLeL2"], {
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
                        text: T.intl.string(T.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, l.jsx)(I.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: T.intl.string(Y.default.eg0mNa),
                        }),
                    (0, l.jsx)(y.$, {
                        variant: "secondary",
                        disabled: !i || s,
                        onClick: () => a({ analyticsLocations: n }),
                        text: T.intl.string(Y.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, l.jsx)(y.$, {
                            variant: "secondary",
                            onClick: () => {
                                H.A.delete(c.id);
                                let e = h.get(t.id);
                                null != e &&
                                    K.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
                            },
                            text: T.intl.string(Y.default.tkIymA),
                            fullWidth: !0,
                        }),
                    (0, l.jsx)(y.$, {
                        variant: "secondary",
                        onClick: x ?? void 0,
                        disabled: null == x,
                        text: T.intl.string(Y.default.cCvdJy),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
var en = n(404778);
let el = (0, n(945810).mj)({
    name: "2026-09-multisku-embed-builder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ei = n(661531),
    es = n(144228),
    ea = n(702860),
    er = n(406810),
    ed = n(628284),
    eo = n(285796),
    ec = n(785562),
    eu = n(379418),
    em = n(733391),
    ef = n(220334);
function ex(e) {
    let t = (0, eu.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, l.jsx)(ec.A, { node: t }) : null;
}
function eh(e) {
    let { applicationId: t } = e,
        n = (0, z.A)({ applicationId: t }),
        { entries: s } = (0, z.T)(t),
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
                            (l = "" !== e.title ? e.title : T.intl.string(W.default.OvBwPV)),
                            t
                                ? T.intl.formatToPlainString(W.default.eF1VJh, { title: l })
                                : null == e.publishedAt
                                  ? T.intl.formatToPlainString(W.default.dX2mQt, { title: l })
                                  : l),
                        value: e.id,
                    };
                }),
            [s, n.liveStorefrontId],
        ),
        c = i.useCallback(
            (e) => {
                (0, em.ZR)(t, e === n.liveStorefrontId ? null : e);
            },
            [n.liveStorefrontId, t],
        );
    return (0, l.jsxs)("div", {
        className: ef.u,
        children: [
            (0, l.jsx)(eg, { isLoading: r, isLive: d, publishedAt: a?.publishedAt }),
            s.length > 1 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(en.c, {}),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(es.z, {
                                label: T.intl.string(W.default["3nB2PV"]),
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
function eg(e) {
    let t,
        n,
        { publishedAt: s, isLive: a, isLoading: r } = e,
        [d] = i.useState(() => Date.now());
    return (
        r
            ? ((t = T.intl.string(T.t.ZTNur7)), (n = (0, l.jsx)(m.y, { type: m.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == s
              ? ((t = T.intl.string(W.default.CUAKSg)),
                (n = (0, l.jsx)(ea.W, { color: ei.A.colors.ICON_FEEDBACK_WARNING })))
              : s.getTime() > d
                ? ((t = T.intl.format(W.default.evGwDW, { timestamp: ex(s) })),
                  (n = (0, l.jsx)(er.ClockIcon, { color: ei.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = T.intl.format(W.default.rbAtUi, { timestamp: ex(s) })),
                    (n = (0, l.jsx)(ed.y, { color: ei.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = T.intl.format(W.default["3x/M9Z"], { timestamp: ex(s) })),
                    (n = (0, l.jsx)(eo.a, { color: ei.A.colors.ICON_MUTED }))),
        (0, l.jsxs)("div", {
            className: ef.D,
            children: [n, (0, l.jsx)(o.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var ev = n(471364);
function ej(e) {
    let { application: t } = e,
        n = t.id,
        { enabled: i } = el.useConfig({ location: "storefront_debug_tab" });
    return (0, l.jsxs)("div", {
        className: ev.r,
        children: [
            (0, l.jsx)(eh, { applicationId: n }),
            i && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)(en.c, {}), (0, l.jsx)(P, { applicationId: n })] }),
        ],
    });
}
var ep = n(464851);
let eA = "social_layer_dev_tools_panel_width";
function eN() {
    let e = d.w.get(eA);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function eb(e) {
    d.w.set(eA, e);
}
let eI = null;
function ey(e) {
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
    return (0, l.jsx)("div", { onMouseDown: s, className: ep.Di, "aria-hidden": !0 });
}
function eE() {
    var e;
    let t,
        n,
        s = (0, g.h)(N.A.testModeApplicationId),
        d = (0, v.fy)(),
        h = i.useRef(!1),
        b = d.metadata,
        I = (0, p.A)({ applicationId: s?.id, source: j.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    i.useEffect(() => {
        b?.shouldAutoOpenGameProfile !== !0 || null == I || h.current || ((h.current = !0), I());
    }, [b, I]);
    let y = i.useRef(null),
        [E, C] = i.useState(eN),
        S = (0, r.clamp)(E, 320, 720),
        D = (function (e) {
            let t = e?.id,
                { isTestMode: n, entries: s } = (0, z.T)(t),
                a = n && s.length > 0;
            return i.useMemo(
                () =>
                    [
                        {
                            id: "account_linking",
                            name: T.intl.string(Y.default.vR0zs6),
                            render: (e) => (0, l.jsx)(et, { ...e }),
                        },
                        {
                            id: "storefront",
                            name: T.intl.string(W.default["qnSo/i"]),
                            render: (e) => (0, l.jsx)(ej, { ...e }),
                            predicate: (e) => null != e && a,
                        },
                    ].filter((t) => null == t.predicate || t.predicate(e)),
                [e, a],
            );
        })(s),
        [k, _] = i.useState(D[0]?.id),
        w = D.find((e) => e.id === k) ?? D[0],
        O = (0, A.qZ)((e) => e.config?.key === M);
    function R(e) {
        return (0, l.jsxs)("div", {
            className: ep.wx,
            children: [
                (0, l.jsx)("div", {
                    className: ep.if,
                    children: (0, l.jsx)(o.D, {
                        variant: "heading-lg/extrabold",
                        children: T.intl.format(Y.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != s &&
                    (0, l.jsx)(c.K, {
                        variant: "icon-only",
                        icon: u.U,
                        "aria-label": T.intl.string(T.t.cpT0Cq),
                        onClick: () => (0, v.Jp)(),
                    }),
            ],
        });
    }
    return (
        i.useEffect(
            () => (
                null != eI && (clearTimeout(eI), (eI = null)),
                () => {
                    eI = setTimeout(() => {
                        ((eI = null), A.Rj.getState().actions.endMultiselect(M));
                    }, 0);
                }
            ),
            [],
        ),
        (0, l.jsxs)("div", {
            "data-app-right-panel": !0,
            ref: y,
            className: ep.nE,
            style: { width: S },
            children: [
                (0, l.jsx)(ey, { resizableNode: y, onResize: C, onResizeEnd: eb }),
                (0, l.jsx)(x.F, {
                    children:
                        null != s
                            ? ((e = s.name),
                              (n = !0),
                              O ? ((t = (0, l.jsx)(B, {})), (n = !1)) : (t = w?.render({ application: s })),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      R(e),
                                      n &&
                                          (0, l.jsx)("div", {
                                              className: ep.Mv,
                                              children: (0, l.jsx)(f.V, {
                                                  className: ep.$H,
                                                  selectedItem: w?.id,
                                                  onItemSelect: _,
                                                  orientation: "horizontal",
                                                  type: "top",
                                                  look: "brand",
                                                  children: D.map((e) =>
                                                      (0, l.jsx)(
                                                          f.V.Item,
                                                          {
                                                              className: a()(ep.Mf, { [ep.wH]: e.id === w?.id }),
                                                              id: e.id,
                                                              "aria-label": e.name,
                                                              children: e.name,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          }),
                                      (0, l.jsx)("div", { className: ep.rf, children: t }),
                                  ],
                              }))
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      R(""),
                                      (0, l.jsx)("div", {
                                          className: ep.TG,
                                          children: (0, l.jsx)(m.y, { className: ep.u1 }),
                                      }),
                                  ],
                              }),
                }),
            ],
        })
    );
}
