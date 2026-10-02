(l.r(t), l.d(t, { default: () => eR }));
var i = l(477900),
    n = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(435558),
    d = l(506774),
    o = l(297264),
    c = l(408278),
    u = l(807072),
    m = l(289873),
    f = l(761508),
    x = l(707554),
    h = l(761929),
    g = l(429913),
    p = l(793943),
    v = l(409626),
    j = l(692969),
    A = l(381999),
    N = l(147964),
    E = l(17928),
    I = l(834730),
    b = l(821609),
    _ = l(292801),
    S = l(638916),
    C = l(871123),
    R = l(192308),
    y = l(294454),
    D = l(366523),
    T = l(67480),
    O = l(174459),
    k = l(976860),
    w = l(832163),
    L = l(44724),
    W = l(652215),
    G = l(375708),
    M = l(206285),
    F = l(326941);
let B = "embed-builder";
function P(e) {
    let { applicationId: t, applicationName: l } = e,
        { actions: n } = (0, A.qZ)((e) => e);
    return (0, i.jsxs)("div", {
        className: F.hA,
        children: [
            (0, i.jsx)("div", {
                className: F.wx,
                children: (0, i.jsx)(o.D, {
                    variant: "heading-lg/semibold",
                    children: G.intl.string(M.default.Z3uXLR),
                }),
            }),
            (0, i.jsx)(I.E, {
                variant: "text-md/medium",
                color: "text-subtle",
                children: G.intl.string(M.default.sS4xGd),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(b.$, {
                    fullWidth: !0,
                    variant: "primary",
                    size: "sm",
                    text: G.intl.string(M.default.fr7qnZ),
                    onClick: function () {
                        if (!n.startMultiselect({ applicationId: t, key: B, maxSelections: 6 })) return;
                        O.default.track(W.HAw.SLAYER_STOREFRONT_EMBED_BUILDER_STARTED, {
                            application_id: t,
                            application_name: l,
                            guild_id: (0, C.n5)(t) ?? null,
                        });
                        let { pathname: e, search: i } = (0, k.JK)().location,
                            s = w.A.getGuildIdFromApplicationId(t);
                        (0, C.rG)(e, i, t, s) || (0, L.default)({ applicationId: t });
                    },
                }),
            }),
        ],
    });
}
var V = l(367224);
function z() {
    let { config: e, selectedIds: t, actions: n } = (0, A.qZ)((e) => e),
        s = e?.applicationId,
        a = (0, g.h)(s),
        r = (0, E.yK)([T.A], () => [...t].map((e) => T.A.get(e)), [t]);
    return (0, i.jsxs)("div", {
        className: V.hA,
        children: [
            (0, i.jsxs)("div", {
                className: V.rf,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-lg/semibold", children: G.intl.string(M.default.Z3uXLR) }),
                    (0, i.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: G.intl.string(M.default.sS4xGd),
                    }),
                    (0, i.jsxs)("div", {
                        className: V.t8,
                        children: [
                            (0, i.jsx)(I.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                children: G.intl.formatToPlainString(M.default.mmTvZn, { count: t.size, max: 6 }),
                            }),
                            (0, i.jsx)("div", {
                                className: V.Mc,
                                children: r.map((e, t) =>
                                    (0, i.jsx)(K, { sku: e, doubleWidth: 0 === t && r.length % 2 == 1 }, e.id),
                                ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: V.o1,
                children: [
                    (0, i.jsx)(b.$, {
                        icon: _.t,
                        disabled: 0 === t.size,
                        text: G.intl.string(M.default.ozurym),
                        variant: "primary",
                        fullWidth: !0,
                        onClick: function () {
                            null != s &&
                                (O.default.track(W.HAw.SLAYER_STOREFRONT_EMBED_SHARE_CLICKED, {
                                    application_id: s,
                                    application_name: a?.name ?? null,
                                    guild_id: (0, C.n5)(s) ?? null,
                                    sku_ids: r.map((e) => e.id),
                                    sku_count: r.length,
                                }),
                                n.endMultiselect(B),
                                ((e) => {
                                    let { skus: t, source: n } = e;
                                    0 !== t.length &&
                                        (0, R.openModalLazy)(
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    l.e("325522"),
                                                    l.e("401317"),
                                                    l.e("790340"),
                                                    l.e("147119"),
                                                    l.e("425292"),
                                                    l.e("209994"),
                                                    l.e("552653"),
                                                    l.e("311580"),
                                                    l.e("174554"),
                                                    l.e("116815"),
                                                    l.e("82389"),
                                                    l.e("132502"),
                                                    l.e("230029"),
                                                    l.e("891089"),
                                                    l.e("371496"),
                                                    l.e("196063"),
                                                    l.e("392028"),
                                                    l.e("124054"),
                                                    l.e("441674"),
                                                    l.e("152862"),
                                                    l.e("148326"),
                                                    l.e("148729"),
                                                    l.e("650195"),
                                                    l.e("67702"),
                                                    l.e("702154"),
                                                    l.e("85427"),
                                                    l.e("247917"),
                                                    l.e("400088"),
                                                    l.e("35328"),
                                                    l.e("915170"),
                                                    l.e("296956"),
                                                    l.e("629972"),
                                                    l.e("334168"),
                                                    l.e("582012"),
                                                    l.e("495296"),
                                                    l.e("879641"),
                                                    l.e("590600"),
                                                    l.e("681801"),
                                                    l.e("916885"),
                                                    l.e("826139"),
                                                    l.e("405714"),
                                                    l.e("360732"),
                                                    l.e("678906"),
                                                    l.e("415695"),
                                                    l.e("64769"),
                                                    l.e("644013"),
                                                    l.e("971156"),
                                                    l.e("260009"),
                                                    l.e("249290"),
                                                    l.e("691398"),
                                                    l.e("266201"),
                                                    l.e("752704"),
                                                    l.e("56606"),
                                                    l.e("227652"),
                                                    l.e("40791"),
                                                    l.e("358404"),
                                                    l.e("996907"),
                                                    l.e("831130"),
                                                    l.e("377989"),
                                                    l.e("529787"),
                                                    l.e("358931"),
                                                    l.e("880150"),
                                                    l.e("168248"),
                                                    l.e("490743"),
                                                    l.e("533240"),
                                                    l.e("962953"),
                                                    l.e("734818"),
                                                    l.e("216870"),
                                                    l.e("89100"),
                                                    l.e("459086"),
                                                    l.e("720210"),
                                                    l.e("61531"),
                                                    l.e("177086"),
                                                    l.e("319714"),
                                                    l.e("189281"),
                                                    l.e("751251"),
                                                    l.e("200075"),
                                                    l.e("896995"),
                                                    l.e("385663"),
                                                    l.e("560570"),
                                                    l.e("896691"),
                                                    l.e("779367"),
                                                    l.e("992956"),
                                                    l.e("7452"),
                                                    l.e("60002"),
                                                    l.e("189423"),
                                                    l.e("225307"),
                                                    l.e("332165"),
                                                    l.e("618416"),
                                                    l.e("524434"),
                                                    l.e("90343"),
                                                    l.e("866475"),
                                                    l.e("465773"),
                                                    l.e("424199"),
                                                    l.e("247932"),
                                                    l.e("587618"),
                                                    l.e("985788"),
                                                    l.e("342551"),
                                                    l.e("888326"),
                                                    l.e("695765"),
                                                    l.e("454048"),
                                                    l.e("481647"),
                                                    l.e("264236"),
                                                    l.e("776602"),
                                                    l.e("300699"),
                                                    l.e("349619"),
                                                    l.e("140402"),
                                                    l.e("543039"),
                                                    l.e("599666"),
                                                    l.e("244560"),
                                                    l.e("398125"),
                                                    l.e("221825"),
                                                    l.e("253729"),
                                                    l.e("930758"),
                                                    l.e("827708"),
                                                    l.e("266900"),
                                                    l.e("901555"),
                                                    l.e("948804"),
                                                    l.e("593600"),
                                                    l.e("695445"),
                                                    l.e("707826"),
                                                    l.e("721690"),
                                                    l.e("199999"),
                                                    l.e("161379"),
                                                    l.e("890027"),
                                                    l.e("611523"),
                                                    l.e("136022"),
                                                    l.e("417286"),
                                                    l.e("832817"),
                                                    l.e("425544"),
                                                    l.e("416143"),
                                                    l.e("844695"),
                                                    l.e("672727"),
                                                    l.e("401518"),
                                                    l.e("592028"),
                                                    l.e("809915"),
                                                    l.e("662174"),
                                                    l.e("425906"),
                                                    l.e("234236"),
                                                    l.e("92124"),
                                                    l.e("361626"),
                                                    l.e("123216"),
                                                    l.e("747017"),
                                                    l.e("854461"),
                                                    l.e("445124"),
                                                    l.e("851130"),
                                                    l.e("445421"),
                                                    l.e("988077"),
                                                    l.e("832823"),
                                                    l.e("761935"),
                                                    l.e("511527"),
                                                    l.e("763070"),
                                                    l.e("147786"),
                                                    l.e("381933"),
                                                    l.e("502018"),
                                                    l.e("561216"),
                                                    l.e("50015"),
                                                    l.e("249366"),
                                                    l.e("728633"),
                                                    l.e("313681"),
                                                    l.e("628439"),
                                                    l.e("552712"),
                                                    l.e("829177"),
                                                    l.e("570506"),
                                                    l.e("225990"),
                                                    l.e("539620"),
                                                    l.e("106943"),
                                                    l.e("232551"),
                                                    l.e("756148"),
                                                    l.e("631644"),
                                                    l.e("485393"),
                                                    l.e("892340"),
                                                    l.e("14962"),
                                                    l.e("973794"),
                                                    l.e("401590"),
                                                    l.e("786751"),
                                                    l.e("960478"),
                                                    l.e("770697"),
                                                    l.e("790244"),
                                                    l.e("593176"),
                                                    l.e("273232"),
                                                    l.e("958428"),
                                                    l.e("121435"),
                                                    l.e("592731"),
                                                    l.e("53374"),
                                                    l.e("482815"),
                                                    l.e("170653"),
                                                    l.e("124060"),
                                                    l.e("240511"),
                                                    l.e("718573"),
                                                    l.e("784103"),
                                                    l.e("146566"),
                                                    l.e("317225"),
                                                    l.e("444376"),
                                                    l.e("486792"),
                                                    l.e("696123"),
                                                    l.e("537894"),
                                                    l.e("198323"),
                                                    l.e("548974"),
                                                    l.e("799657"),
                                                    l.e("810034"),
                                                    l.e("817852"),
                                                    l.e("831145"),
                                                    l.e("556967"),
                                                    l.e("643612"),
                                                    l.e("187856"),
                                                    l.e("577084"),
                                                    l.e("652898"),
                                                    l.e("334127"),
                                                    l.e("318546"),
                                                    l.e("400954"),
                                                    l.e("610449"),
                                                    l.e("32781"),
                                                    l.e("41991"),
                                                    l.e("8563"),
                                                    l.e("499941"),
                                                    l.e("693832"),
                                                    l.e("515572"),
                                                    l.e("773192"),
                                                    l.e("710638"),
                                                    l.e("193158"),
                                                    l.e("959669"),
                                                    l.e("73500"),
                                                    l.e("912773"),
                                                    l.e("418943"),
                                                    l.e("959134"),
                                                    l.e("377766"),
                                                    l.e("565065"),
                                                    l.e("834386"),
                                                    l.e("4780"),
                                                    l.e("757598"),
                                                    l.e("130674"),
                                                    l.e("371482"),
                                                    l.e("126780"),
                                                    l.e("844780"),
                                                    l.e("360781"),
                                                    l.e("631825"),
                                                    l.e("784727"),
                                                    l.e("851243"),
                                                    l.e("220518"),
                                                    l.e("278424"),
                                                    l.e("807771"),
                                                    l.e("478476"),
                                                    l.e("496715"),
                                                    l.e("681541"),
                                                    l.e("406357"),
                                                    l.e("115754"),
                                                    l.e("600330"),
                                                    l.e("982699"),
                                                    l.e("90373"),
                                                    l.e("250478"),
                                                    l.e("979630"),
                                                    l.e("260218"),
                                                    l.e("236946"),
                                                    l.e("935948"),
                                                    l.e("692639"),
                                                    l.e("565617"),
                                                    l.e("890480"),
                                                    l.e("440963"),
                                                    l.e("766031"),
                                                    l.e("394317"),
                                                    l.e("744385"),
                                                    l.e("304329"),
                                                    l.e("84755"),
                                                    l.e("179271"),
                                                    l.e("911521"),
                                                    l.e("837672"),
                                                    l.e("884736"),
                                                    l.e("858261"),
                                                    l.e("773437"),
                                                ]).then(l.bind(l, 714892));
                                                return (l) => (0, i.jsx)(e, { ...l, skus: t, source: n });
                                            },
                                            { stackingBehavior: "stack", modalKey: y.aU },
                                        );
                                })({ skus: r, source: "social-layer-storefront-embed" }));
                        },
                    }),
                    (0, i.jsx)(b.$, {
                        text: G.intl.string(G.t["ETE/oC"]),
                        variant: "secondary",
                        onClick: function () {
                            n.endMultiselect(B);
                        },
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { sku: t, doubleWidth: l } = e,
        n = (0, C.fq)(t),
        s = (0, C.xf)(t);
    return (0, i.jsx)("div", {
        className: a()(V.hu, l && V.m4),
        children:
            null != n
                ? (0, i.jsx)(D.A, {
                      containerClassName: V.Vl,
                      foregroundImageClassName: V.wP,
                      cardImage: n,
                      altText: t.name,
                      shape: "custom",
                      backgroundImageClassName: V.GC,
                      cardBackgroundImage: s,
                      cssPosition: "absolute",
                  })
                : (0, i.jsx)("div", {
                      className: V.t7,
                      children: (0, i.jsx)(S.q, {
                          color: "white",
                          size: "custom",
                          height: 80,
                          width: 80,
                          className: V.Cw,
                      }),
                  }),
    });
}
var Z = l(156454),
    U = l(933958),
    q = l(869003),
    H = l(793574),
    J = l(688810),
    $ = l(206828),
    Q = l(487431),
    X = l(712440),
    Y = l(134861),
    ee = l(942370),
    et = l(211850),
    el = l(712289);
function ei(e) {
    let { application: t } = e,
        { analyticsLocations: l } = (0, J.Ay)(H.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: s,
            startAuthorization: a,
            chosenFlow: r,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, $.RD)(t, { debug: !0 }),
        f = (0, E.bG)([Y.A], () => Y.A.isConnected(t.id)),
        x = (0, j.A)({ applicationId: t.id, source: v.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        h = (0, E.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: el.r,
                children: [
                    (0, i.jsx)(I.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: G.intl.string(et.default["no+FQS"]),
                    }),
                    (0, i.jsx)(Q.VT, {
                        flow: ee._.RPC,
                        overallStatus: o ? Q.nW.OVERALL_GOOD : f ? Q.nW.WARN : Q.nW.OVERALL_BAD,
                        name: G.intl.string(et.default.AGLx00),
                        steps: [
                            {
                                status: f ? Q.nW.GOOD : Q.nW.BAD,
                                text: G.intl.string(et.default.kxF9br),
                                description: f ? null : G.intl.string(et.default.PFxxJa),
                                learnMoreLink: f
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: o ? Q.nW.GOOD : f ? Q.nW.WARN : Q.nW.BAD,
                                text: G.intl.string(et.default.S94dzs),
                                description: o || !f ? null : G.intl.string(et.default.aTULMB),
                                learnMoreLink:
                                    o || !f
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: r === ee._.RPC,
                    }),
                    (0, i.jsx)(Q.VT, {
                        flow: ee._.WEB,
                        overallStatus: u ? Q.nW.OVERALL_GOOD : Q.nW.OVERALL_BAD,
                        name: G.intl.string(et.default.K3ObrU),
                        steps: [
                            {
                                status: u ? Q.nW.GOOD : Q.nW.BAD,
                                text: G.intl.string(et.default["8a7IrV"]),
                                description: u
                                    ? G.intl.formatToPlainString(et.default["9iLeL2"], {
                                          url: d?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: r === ee._.WEB,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: el.q,
                children: [
                    (0, i.jsx)(Q.Sy, {
                        status: s ? Q.nW.OVERALL_GOOD : Q.nW.OVERALL_BAD,
                        text: G.intl.string(G.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, i.jsx)(I.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: G.intl.string(et.default.eg0mNa),
                        }),
                    (0, i.jsx)(b.$, {
                        variant: "secondary",
                        disabled: !n || s,
                        onClick: () => a({ analyticsLocations: l }),
                        text: G.intl.string(et.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, i.jsx)(b.$, {
                            variant: "secondary",
                            onClick: () => {
                                X.A.delete(c.id);
                                let e = h.get(t.id);
                                null != e &&
                                    q.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
                            },
                            text: G.intl.string(et.default.tkIymA),
                            fullWidth: !0,
                        }),
                    (0, i.jsx)(b.$, {
                        variant: "secondary",
                        onClick: x ?? void 0,
                        disabled: null == x,
                        text: G.intl.string(et.default.cCvdJy),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
var en = l(404778);
let es = (0, l(945810).mj)({
    name: "2026-09-multisku-embed-builder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ea = l(661531),
    er = l(144228),
    ed = l(702860),
    eo = l(406810),
    ec = l(628284),
    eu = l(285796),
    em = l(785562),
    ef = l(379418),
    ex = l(733391),
    eh = l(220334);
function eg(e) {
    let t = (0, ef.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, i.jsx)(em.A, { node: t }) : null;
}
function ep(e) {
    let { applicationId: t } = e,
        l = (0, Z.A)({ applicationId: t }),
        { entries: s } = (0, Z.T)(t),
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
                            (i = "" !== e.title ? e.title : G.intl.string(M.default.OvBwPV)),
                            t
                                ? G.intl.formatToPlainString(M.default.eF1VJh, { title: i })
                                : null == e.publishedAt
                                  ? G.intl.formatToPlainString(M.default.dX2mQt, { title: i })
                                  : i),
                        value: e.id,
                    };
                }),
            [s, l.liveStorefrontId],
        ),
        c = n.useCallback(
            (e) => {
                (0, ex.ZR)(t, e === l.liveStorefrontId ? null : e);
            },
            [l.liveStorefrontId, t],
        );
    return (0, i.jsxs)("div", {
        className: eh.u,
        children: [
            (0, i.jsx)(ev, { isLoading: r, isLive: d, publishedAt: a?.publishedAt }),
            s.length > 1 &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(en.c, {}),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(er.z, {
                                label: G.intl.string(M.default["3nB2PV"]),
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
function ev(e) {
    let t,
        l,
        { publishedAt: s, isLive: a, isLoading: r } = e,
        [d] = n.useState(() => Date.now());
    return (
        r
            ? ((t = G.intl.string(G.t.ZTNur7)), (l = (0, i.jsx)(m.y, { type: m.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == s
              ? ((t = G.intl.string(M.default.CUAKSg)),
                (l = (0, i.jsx)(ed.W, { color: ea.A.colors.ICON_FEEDBACK_WARNING })))
              : s.getTime() > d
                ? ((t = G.intl.format(M.default.evGwDW, { timestamp: eg(s) })),
                  (l = (0, i.jsx)(eo.ClockIcon, { color: ea.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = G.intl.format(M.default.rbAtUi, { timestamp: eg(s) })),
                    (l = (0, i.jsx)(ec.y, { color: ea.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = G.intl.format(M.default["3x/M9Z"], { timestamp: eg(s) })),
                    (l = (0, i.jsx)(eu.a, { color: ea.A.colors.ICON_MUTED }))),
        (0, i.jsxs)("div", {
            className: eh.D,
            children: [l, (0, i.jsx)(o.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var ej = l(471364);
function eA(e) {
    let { application: t } = e,
        l = t.id,
        { enabled: n } = es.useConfig({ location: "storefront_debug_tab" });
    return (0, i.jsxs)("div", {
        className: ej.r,
        children: [
            (0, i.jsx)(ep, { applicationId: l }),
            n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(en.c, {}), (0, i.jsx)(P, { applicationId: l, applicationName: t.name })],
                }),
        ],
    });
}
var eN = l(616633),
    eE = l(464851);
let eI = "social_layer_dev_tools_panel_width";
function eb() {
    let e = d.w.get(eI);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function e_(e) {
    d.w.set(eI, e);
}
let eS = null;
function eC(e) {
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
    return (0, i.jsx)("div", { onMouseDown: s, className: eE.Di, "aria-hidden": !0 });
}
function eR() {
    var e;
    let t,
        l,
        s = (0, g.h)(N.A.testModeApplicationId),
        d = (0, p.fy)(),
        h = n.useRef(!1),
        E = d.metadata,
        I = (0, j.A)({ applicationId: s?.id, source: v.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    n.useEffect(() => {
        E?.shouldAutoOpenGameProfile !== !0 || null == I || h.current || ((h.current = !0), I());
    }, [E, I]);
    let b = n.useRef(null),
        [_, S] = n.useState(eb),
        C = (0, r.clamp)(_, 320, 720),
        R = (function (e) {
            let t = e?.id,
                { isTestMode: l, entries: s } = (0, Z.T)(t),
                a = l && s.length > 0;
            return n.useMemo(
                () =>
                    [
                        {
                            id: eN.t.ACCOUNT_LINKING,
                            name: G.intl.string(et.default.vR0zs6),
                            render: (e) => (0, i.jsx)(ei, { ...e }),
                        },
                        {
                            id: eN.t.STOREFRONT,
                            name: G.intl.string(M.default["qnSo/i"]),
                            render: (e) => (0, i.jsx)(eA, { ...e }),
                            predicate: (e) => null != e && a,
                        },
                    ].filter((t) => null == t.predicate || t.predicate(e)),
                [e, a],
            );
        })(s),
        [y, D] = n.useState(void 0),
        T = R.find((e) => e.id === (y ?? E?.initialTabId)) ?? R[0],
        O = (0, A.qZ)((e) => e.config?.key === B);
    function k(e) {
        return (0, i.jsxs)("div", {
            className: eE.wx,
            children: [
                (0, i.jsx)("div", {
                    className: eE.if,
                    children: (0, i.jsx)(o.D, {
                        variant: "heading-lg/extrabold",
                        children: G.intl.format(et.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != s &&
                    (0, i.jsx)(c.K, {
                        variant: "icon-only",
                        icon: u.U,
                        "aria-label": G.intl.string(G.t.cpT0Cq),
                        onClick: () => (0, p.Jp)(),
                    }),
            ],
        });
    }
    return (
        n.useEffect(
            () => (
                null != eS && (clearTimeout(eS), (eS = null)),
                () => {
                    eS = setTimeout(() => {
                        ((eS = null), A.Rj.getState().actions.endMultiselect(B));
                    }, 0);
                }
            ),
            [],
        ),
        (0, i.jsxs)("div", {
            "data-app-right-panel": !0,
            ref: b,
            className: eE.nE,
            style: { width: C },
            children: [
                (0, i.jsx)(eC, { resizableNode: b, onResize: S, onResizeEnd: e_ }),
                (0, i.jsx)(x.F, {
                    children:
                        null != s
                            ? ((e = s.name),
                              (l = !0),
                              O ? ((t = (0, i.jsx)(z, {})), (l = !1)) : (t = T?.render({ application: s })),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      k(e),
                                      l &&
                                          (0, i.jsx)("div", {
                                              className: eE.Mv,
                                              children: (0, i.jsx)(f.V, {
                                                  className: eE.$H,
                                                  selectedItem: T?.id,
                                                  onItemSelect: D,
                                                  orientation: "horizontal",
                                                  type: "top",
                                                  look: "brand",
                                                  children: R.map((e) =>
                                                      (0, i.jsx)(
                                                          f.V.Item,
                                                          {
                                                              className: a()(eE.Mf, { [eE.wH]: e.id === T?.id }),
                                                              id: e.id,
                                                              "aria-label": e.name,
                                                              children: e.name,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          }),
                                      (0, i.jsx)("div", { className: eE.rf, children: t }),
                                  ],
                              }))
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      k(""),
                                      (0, i.jsx)("div", {
                                          className: eE.TG,
                                          children: (0, i.jsx)(m.y, { className: eE.u1 }),
                                      }),
                                  ],
                              }),
                }),
            ],
        })
    );
}
