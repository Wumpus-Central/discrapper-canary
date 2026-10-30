(n.r(t), n.d(t, { default: () => e9 }));
var l,
    i = n(477900),
    s = n(582128),
    a = n(435558),
    r = n(506774),
    o = n(297264),
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
    A = n(193249),
    E = n(939249),
    v = n(834730),
    N = n(320448),
    b = n(444927),
    I = n(17928),
    _ = n(858899),
    C = n(271866),
    R = n(733391),
    D = n(832163),
    O = n(147964),
    S = n(105292);
function k(e) {
    null != D.A.getStorefrontDataForApplicationId(e) && (0, R.ap)(e, { forceFetch: !0 });
}
function L(e) {
    let t = (0, I.bG)([O.A], () => O.A.inTestModeForApplication(e), [e]);
    return {
        isEnabled: t,
        isPending: (0, I.bG)([O.A], () => O.A.isFetchingAuthorization),
        setEnabled: s.useCallback(
            async (t) => {
                if (!t) {
                    (C.cL(), k(e));
                    return;
                }
                null == (await C.q1(e))
                    ? (0, _.P0)({ text: O.A.error ?? S.intl.string(S.t.SDP0vo), variant: "critical" })
                    : k(e);
            },
            [e],
        ),
    };
}
var T = n(658997),
    w = n(287809);
function y(e) {
    let t = (0, T.A)(e, !0),
        n = (0, I.bG)([w.default], () => w.default.getCurrentUser()?.isStaff() ?? !1),
        l = (0, I.bG)([O.A], () => O.A.inTestModeForApplication(e), [e]);
    return t || n || l;
}
var W = n(673051),
    F = n(753114);
function G(e) {
    let { application: t, tools: n, onOpenTool: l, returnFocusToolId: s } = e,
        a = L(t.id),
        r = y(t.id);
    return (0, i.jsxs)("div", {
        className: F.iR,
        children: [
            (0, i.jsx)("ul", {
                className: F.Yl,
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
                    className: F.a5,
                    children: (0, i.jsx)(A.d, {
                        label: S.intl.string(W.default["5+pp1j"]),
                        description: S.intl.string(W.default.UEBUZF),
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
        c = (0, b.A)(() => l);
    return (
        s.useEffect(() => {
            c && a.current?.focus({ preventScroll: !0 });
        }, [c]),
        (0, i.jsxs)(E.D, {
            innerRef: a,
            className: F.rf,
            onClick: () => n(t),
            "aria-labelledby": r,
            "aria-describedby": o,
            children: [
                (0, i.jsx)(d, { size: "sm", color: "currentColor", className: F.ke }),
                (0, i.jsxs)("div", {
                    className: F.C_,
                    children: [
                        (0, i.jsx)(v.E, { id: r, variant: "text-sm/semibold", color: "text-strong", children: t.name }),
                        (0, i.jsx)(v.E, {
                            id: o,
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: t.description,
                        }),
                    ],
                }),
                (0, i.jsx)(N._, { size: "sm", color: "currentColor", className: F.ai }),
            ],
        })
    );
}
var P = n(503698),
    M = n.n(P),
    z = n(821609),
    U = n(292801),
    K = n(866665),
    V = n(408278),
    Z = n(173936),
    J = n(638916),
    Y = n(871123),
    q = n(192308),
    H = n(294454),
    $ = n(366523),
    Q = n(67480),
    X = n(174459),
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
                                (0, i.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
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
    ea = n(961270),
    er = n(645429);
function eo() {
    let { config: e, selectedIds: t, actions: l } = (0, j.qZ)((e) => e),
        s = e?.applicationId,
        a = (0, f.h)(s),
        r = (0, I.yK)([Q.A], () => [...t].map((e) => Q.A.get(e)), [t]),
        o = t.size > 0;
    function d(e) {
        return {
            application_id: e,
            application_name: a?.name ?? null,
            guild_id: (0, Y.n5)(e) ?? null,
            sku_ids: r.map((e) => e.id),
            sku_count: r.length,
        };
    }
    return (0, i.jsx)(en, {
        title: S.intl.string(ea.default.Z3uXLR),
        description: S.intl.string(ea.default.sS4xGd),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: er.$o,
                    children: [
                        (0, i.jsx)(z.$, {
                            icon: U.t,
                            disabled: !o,
                            text: S.intl.string(ea.default.ozurym),
                            variant: "primary",
                            fullWidth: !0,
                            onClick: function () {
                                null != s &&
                                    (X.default.track(es.HAw.SLAYER_STOREFRONT_EMBED_SHARE_CLICKED, d(s)),
                                    l.endMultiselect(ei),
                                    ((e) => {
                                        let { skus: t, source: l } = e;
                                        0 !== t.length &&
                                            (0, q.openModalLazy)(
                                                async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("325522"),
                                                        n.e("401317"),
                                                        n.e("790340"),
                                                        n.e("147119"),
                                                        n.e("321735"),
                                                        n.e("425292"),
                                                        n.e("209994"),
                                                        n.e("552653"),
                                                        n.e("311580"),
                                                        n.e("174554"),
                                                        n.e("116815"),
                                                        n.e("813057"),
                                                        n.e("991625"),
                                                        n.e("230029"),
                                                        n.e("891089"),
                                                        n.e("938512"),
                                                        n.e("329172"),
                                                        n.e("196063"),
                                                        n.e("392028"),
                                                        n.e("124054"),
                                                        n.e("441674"),
                                                        n.e("152862"),
                                                        n.e("148326"),
                                                        n.e("148729"),
                                                        n.e("650195"),
                                                        n.e("67702"),
                                                        n.e("662387"),
                                                        n.e("31544"),
                                                        n.e("621820"),
                                                        n.e("334168"),
                                                        n.e("582012"),
                                                        n.e("166336"),
                                                        n.e("113658"),
                                                        n.e("162182"),
                                                        n.e("860640"),
                                                        n.e("681801"),
                                                        n.e("85427"),
                                                        n.e("698584"),
                                                        n.e("967850"),
                                                        n.e("67909"),
                                                        n.e("916885"),
                                                        n.e("272804"),
                                                        n.e("291329"),
                                                        n.e("449933"),
                                                        n.e("985236"),
                                                        n.e("678906"),
                                                        n.e("799357"),
                                                        n.e("50466"),
                                                        n.e("999272"),
                                                        n.e("701406"),
                                                        n.e("216112"),
                                                        n.e("490514"),
                                                        n.e("962953"),
                                                        n.e("550929"),
                                                        n.e("415695"),
                                                        n.e("64769"),
                                                        n.e("644013"),
                                                        n.e("971156"),
                                                        n.e("60002"),
                                                        n.e("260009"),
                                                        n.e("315771"),
                                                        n.e("691398"),
                                                        n.e("266201"),
                                                        n.e("752704"),
                                                        n.e("56606"),
                                                        n.e("940298"),
                                                        n.e("738015"),
                                                        n.e("40791"),
                                                        n.e("358404"),
                                                        n.e("996907"),
                                                        n.e("831130"),
                                                        n.e("377989"),
                                                        n.e("358931"),
                                                        n.e("880150"),
                                                        n.e("168248"),
                                                        n.e("490743"),
                                                        n.e("245420"),
                                                        n.e("216870"),
                                                        n.e("841136"),
                                                        n.e("560338"),
                                                        n.e("459086"),
                                                        n.e("720210"),
                                                        n.e("601152"),
                                                        n.e("319714"),
                                                        n.e("331249"),
                                                        n.e("257472"),
                                                        n.e("921611"),
                                                        n.e("686889"),
                                                        n.e("560570"),
                                                        n.e("592000"),
                                                        n.e("524434"),
                                                        n.e("992956"),
                                                        n.e("896691"),
                                                        n.e("839460"),
                                                        n.e("779367"),
                                                        n.e("7452"),
                                                        n.e("189423"),
                                                        n.e("706073"),
                                                        n.e("227512"),
                                                        n.e("933947"),
                                                        n.e("866475"),
                                                        n.e("465773"),
                                                        n.e("97430"),
                                                        n.e("131859"),
                                                        n.e("587618"),
                                                        n.e("424199"),
                                                        n.e("342551"),
                                                        n.e("125729"),
                                                        n.e("111057"),
                                                        n.e("695765"),
                                                        n.e("616159"),
                                                        n.e("454048"),
                                                        n.e("300699"),
                                                        n.e("349619"),
                                                        n.e("264236"),
                                                        n.e("599666"),
                                                        n.e("543039"),
                                                        n.e("398125"),
                                                        n.e("221825"),
                                                        n.e("930758"),
                                                        n.e("481647"),
                                                        n.e("244560"),
                                                        n.e("901555"),
                                                        n.e("253729"),
                                                        n.e("593600"),
                                                        n.e("827708"),
                                                        n.e("266900"),
                                                        n.e("707826"),
                                                        n.e("948804"),
                                                        n.e("199999"),
                                                        n.e("205596"),
                                                        n.e("776602"),
                                                        n.e("611523"),
                                                        n.e("110116"),
                                                        n.e("828111"),
                                                        n.e("890027"),
                                                        n.e("809915"),
                                                        n.e("140402"),
                                                        n.e("851130"),
                                                        n.e("672727"),
                                                        n.e("417286"),
                                                        n.e("161379"),
                                                        n.e("362422"),
                                                        n.e("812310"),
                                                        n.e("361626"),
                                                        n.e("646506"),
                                                        n.e("445124"),
                                                        n.e("617249"),
                                                        n.e("445421"),
                                                        n.e("721690"),
                                                        n.e("832823"),
                                                        n.e("761935"),
                                                        n.e("511527"),
                                                        n.e("233197"),
                                                        n.e("763070"),
                                                        n.e("502018"),
                                                        n.e("276863"),
                                                        n.e("955184"),
                                                        n.e("249366"),
                                                        n.e("728633"),
                                                        n.e("628439"),
                                                        n.e("833977"),
                                                        n.e("371933"),
                                                        n.e("844780"),
                                                        n.e("570506"),
                                                        n.e("539620"),
                                                        n.e("225990"),
                                                        n.e("41402"),
                                                        n.e("935715"),
                                                        n.e("248329"),
                                                        n.e("398829"),
                                                        n.e("234236"),
                                                        n.e("832817"),
                                                        n.e("425544"),
                                                        n.e("416143"),
                                                        n.e("401590"),
                                                        n.e("844695"),
                                                        n.e("92124"),
                                                        n.e("50015"),
                                                        n.e("231588"),
                                                        n.e("593176"),
                                                        n.e("988077"),
                                                        n.e("592028"),
                                                        n.e("232551"),
                                                        n.e("631644"),
                                                        n.e("425906"),
                                                        n.e("123216"),
                                                        n.e("561216"),
                                                        n.e("313681"),
                                                        n.e("266703"),
                                                        n.e("829177"),
                                                        n.e("106943"),
                                                        n.e("569918"),
                                                        n.e("147786"),
                                                        n.e("14962"),
                                                        n.e("770291"),
                                                        n.e("786751"),
                                                        n.e("770697"),
                                                        n.e("854461"),
                                                        n.e("790244"),
                                                        n.e("121435"),
                                                        n.e("508699"),
                                                        n.e("398793"),
                                                        n.e("592731"),
                                                        n.e("273232"),
                                                        n.e("784103"),
                                                        n.e("958428"),
                                                        n.e("317225"),
                                                        n.e("53374"),
                                                        n.e("482815"),
                                                        n.e("256616"),
                                                        n.e("124060"),
                                                        n.e("240511"),
                                                        n.e("718573"),
                                                        n.e("146566"),
                                                        n.e("32661"),
                                                        n.e("377766"),
                                                        n.e("545587"),
                                                        n.e("256255"),
                                                        n.e("696123"),
                                                        n.e("128534"),
                                                        n.e("799657"),
                                                        n.e("810034"),
                                                        n.e("817852"),
                                                        n.e("133179"),
                                                        n.e("614784"),
                                                        n.e("8563"),
                                                        n.e("444376"),
                                                        n.e("499941"),
                                                        n.e("509793"),
                                                        n.e("831145"),
                                                        n.e("187856"),
                                                        n.e("334127"),
                                                        n.e("400954"),
                                                        n.e("610449"),
                                                        n.e("32781"),
                                                        n.e("354121"),
                                                        n.e("693832"),
                                                        n.e("488990"),
                                                        n.e("577084"),
                                                        n.e("776545"),
                                                        n.e("193158"),
                                                        n.e("318546"),
                                                        n.e("73500"),
                                                        n.e("912773"),
                                                        n.e("35403"),
                                                        n.e("192214"),
                                                        n.e("846523"),
                                                        n.e("710638"),
                                                        n.e("919307"),
                                                        n.e("565617"),
                                                        n.e("418943"),
                                                        n.e("41991"),
                                                        n.e("959134"),
                                                        n.e("872648"),
                                                        n.e("174347"),
                                                        n.e("565065"),
                                                        n.e("834386"),
                                                        n.e("130674"),
                                                        n.e("959669"),
                                                        n.e("492022"),
                                                        n.e("220518"),
                                                        n.e("371482"),
                                                        n.e("875842"),
                                                        n.e("126780"),
                                                        n.e("360781"),
                                                        n.e("631825"),
                                                        n.e("851243"),
                                                        n.e("748015"),
                                                        n.e("952577"),
                                                        n.e("807771"),
                                                        n.e("478476"),
                                                        n.e("496715"),
                                                        n.e("521570"),
                                                        n.e("115754"),
                                                        n.e("15499"),
                                                        n.e("744385"),
                                                        n.e("793394"),
                                                        n.e("546745"),
                                                        n.e("250478"),
                                                        n.e("90373"),
                                                        n.e("979630"),
                                                        n.e("236946"),
                                                        n.e("935948"),
                                                        n.e("692639"),
                                                        n.e("890480"),
                                                        n.e("593020"),
                                                        n.e("440963"),
                                                        n.e("288379"),
                                                        n.e("657003"),
                                                        n.e("766031"),
                                                        n.e("394317"),
                                                        n.e("304329"),
                                                        n.e("207960"),
                                                        n.e("911521"),
                                                        n.e("299086"),
                                                        n.e("101574"),
                                                        n.e("329164"),
                                                        n.e("858261"),
                                                        n.e("773437"),
                                                    ]).then(n.bind(n, 714892));
                                                    return (n) => (0, i.jsx)(e, { ...n, skus: t, source: l });
                                                },
                                                { stackingBehavior: "stack", modalKey: H.aU },
                                            );
                                    })({ skus: r, source: "social-layer-storefront-embed" }));
                            },
                        }),
                        (0, i.jsx)(K.m, {
                            text: S.intl.string(S.t.WqhZss),
                            ariaHidden: !0,
                            children: (0, i.jsx)(V.K, {
                                icon: Z.LinkIcon,
                                disabled: !o,
                                "aria-label": S.intl.string(S.t.WqhZss),
                                variant: "primary",
                                onClick: function () {
                                    null != s &&
                                        (X.default.track(es.HAw.SLAYER_STOREFRONT_EMBED_COPY_LINK_CLICKED, d(s)),
                                        (0, ee.C)(
                                            (0, Y.aU)(
                                                s,
                                                r.map((e) => e.id),
                                            ),
                                            () => (0, _.P0)({ text: S.intl.string(S.t["L/PwZf"]), variant: "success" }),
                                        ));
                                },
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(z.$, {
                    text: S.intl.string(S.t["ETE/oC"]),
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
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: S.intl.formatToPlainString(ea.default.mmTvZn, { count: t.size, max: 6 }),
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
        l = (0, Y.fq)(t),
        s = (0, Y.xf)(t);
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
                      children: (0, i.jsx)(J.q, {
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
    ex = n(661531),
    eh = n(62010),
    eg = n(478016),
    ep = n(628284),
    ej = n(738188),
    eA = n(285796),
    eE = n(28863),
    ev = n(933958),
    eN = n(988534),
    eb = n(793574),
    eI = n(688810),
    e_ = n(878118),
    eC = n(206828),
    eR = n(487431),
    eD = n(712440),
    eO = n(134861),
    eS = n(942370),
    ek = n(595940);
let eL = "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log";
function eT(e) {
    let { application: t, onBack: n } = e,
        { analyticsLocations: l } = (0, eI.Ay)(eb.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: s,
            hasAlreadyLinked: a,
            startAuthorization: r,
            chosenFlow: o,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: c, oauth2Token: u, hasConnectionEntrypointUrl: m, validFlows: f },
        } = (0, eC.RD)(t, { debug: !0 }),
        x = (0, I.bG)([eO.A], () => eO.A.isConnected(t.id)),
        h = (0, I.bG)([ev.Ay], () => ev.Ay.getSelfEmbeddedActivities()),
        g = a && null != u;
    return (0, i.jsxs)(en, {
        title: S.intl.string(W.default.vR0zs6),
        description: S.intl.string(W.default["no+FQS"]),
        footer: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ek.D2,
                    children: [
                        (0, i.jsx)(eR.kW, { status: g ? eR.nW.OVERALL_GOOD : eR.nW.OVERALL_BAD }),
                        (0, i.jsx)(v.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            children: S.intl.string(g ? W.default["pss/wa"] : W.default["Oyal/m"]),
                        }),
                    ],
                }),
                !g &&
                    0 === f.length &&
                    (0, i.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(W.default.eg0mNa),
                    }),
                g
                    ? (0, i.jsx)(z.$, {
                          variant: "primary",
                          onClick: function () {
                              if (null == u) return;
                              eD.A.delete(u.id);
                              let e = h.get(t.id);
                              null != e && (0, eN.d)({ location: e.location, applicationId: t.id, showFeedback: !1 });
                          },
                          text: S.intl.string(W.default.tkIymA),
                          fullWidth: !0,
                      })
                    : (0, i.jsx)(z.$, {
                          variant: "primary",
                          disabled: !s,
                          onClick: () => r({ analyticsLocations: l }),
                          text: S.intl.string(W.default.w0pN4R),
                          fullWidth: !0,
                      }),
                (0, i.jsx)(z.$, {
                    variant: "secondary",
                    onClick: n,
                    text: S.intl.string(S.t["13/7kX"]),
                    fullWidth: !0,
                }),
            ],
        }),
        children: [
            (0, i.jsx)(ew, {
                flow: eS._.RPC,
                overallStatus: c ? eR.nW.OVERALL_GOOD : x ? eR.nW.WARN : eR.nW.OVERALL_BAD,
                name: S.intl.string(W.default.AGLx00),
                steps: [
                    {
                        status: x ? eR.nW.GOOD : eR.nW.BAD,
                        text: S.intl.string(W.default.kxF9br),
                        description: x ? null : S.intl.string(W.default.PFxxJa),
                        learnMoreLink: x ? null : eL,
                    },
                    {
                        status: c ? eR.nW.GOOD : x ? eR.nW.WARN : eR.nW.BAD,
                        text: S.intl.string(W.default.S94dzs),
                        description: c || !x ? null : S.intl.string(W.default.aTULMB),
                        learnMoreLink: c || !x ? null : eL,
                    },
                ],
                isChosen: o === eS._.RPC,
            }),
            (0, i.jsx)(ew, {
                flow: eS._.WEB,
                overallStatus: m ? eR.nW.OVERALL_GOOD : eR.nW.OVERALL_BAD,
                name: S.intl.string(W.default.K3ObrU),
                steps: [
                    {
                        status: m ? eR.nW.GOOD : eR.nW.BAD,
                        text: S.intl.string(W.default["8a7IrV"]),
                        description: m
                            ? S.intl.formatToPlainString(W.default["9iLeL2"], { url: d?.connectionEntrypointUrl })
                            : null,
                    },
                ],
                isChosen: o === eS._.WEB,
            }),
        ],
    });
}
function ew(e) {
    let { flow: t, overallStatus: n, name: l, steps: s, isChosen: a } = e,
        r = (0, I.bG)([e_.A], () => e_.A.getGloballyDisabledAuthorizationFlows().has(t), [t]);
    return (0, i.jsxs)("div", {
        className: ek.$K,
        children: [
            (0, i.jsxs)("div", {
                className: ek.Cw,
                children: [
                    (0, i.jsx)("div", { className: ek.s3, children: (0, i.jsx)(ey, { status: n }) }),
                    (0, i.jsx)(o.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: ek.Eo,
                        children: l,
                    }),
                    a && (0, i.jsx)(eh.E, { type: { text: S.intl.string(W.default.hQvsoB) }, icon: eg.U }),
                ],
            }),
            s.map((e, t) => (0, i.jsx)(eW, { ...e }, t)),
            r &&
                (0, i.jsx)("div", {
                    className: ek.RD,
                    children: (0, i.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(W.default.mgsmfY),
                    }),
                }),
        ],
    });
}
function ey(e) {
    let { status: t, isStep: n = !1 } = e,
        l = n ? "sm" : "md";
    switch (t) {
        case eR.nW.OVERALL_GOOD:
        case eR.nW.GOOD: {
            let e = n ? eg.U : ep.y;
            return (0, i.jsx)(e, {
                size: l,
                color: ex.A.colors.ICON_FEEDBACK_POSITIVE,
                "aria-label": S.intl.string(W.default["/t3aRl"]),
            });
        }
        case eR.nW.WARN:
            return (0, i.jsx)(ej.WarningIcon, {
                size: l,
                color: ex.A.colors.ICON_FEEDBACK_WARNING,
                "aria-label": S.intl.string(W.default["Wt4R/w"]),
            });
        case eR.nW.OVERALL_BAD:
        case eR.nW.BAD: {
            let e = n ? d.P : eA.a;
            return (0, i.jsx)(e, {
                size: l,
                color: ex.A.colors.ICON_FEEDBACK_CRITICAL,
                "aria-label": S.intl.string(W.default.A8YTO5),
            });
        }
    }
}
function eW(e) {
    let { status: t, text: n, description: l, learnMoreLink: s } = e;
    return (0, i.jsxs)("div", {
        className: ek.B5,
        children: [
            (0, i.jsx)("div", { className: ek.s3, children: (0, i.jsx)(ey, { status: t, isStep: !0 }) }),
            (0, i.jsxs)("div", {
                className: ek.Af,
                children: [
                    (0, i.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", children: n }),
                    (null != l || null != s) &&
                        (0, i.jsxs)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: [
                                l,
                                null != s &&
                                    (0, i.jsxs)(i.Fragment, {
                                        children: [
                                            " ",
                                            (0, i.jsx)(eE.Anchor, { href: s, children: S.intl.string(S.t.hvVgAZ) }),
                                        ],
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
var eF = n(404778),
    eG = n(683071),
    eB = n(144228),
    eP = n(702860),
    eM = n(406810),
    ez = n(785562),
    eU = n(379418),
    eK = n(755380);
function eV(e) {
    let t = (0, eU.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, i.jsx)(ez.A, { node: t }) : null;
}
function eZ(e) {
    let { application: t, onBack: n } = e,
        l = L(t.id);
    return (0, i.jsxs)(en, {
        title: S.intl.string(ea.default.QaMS5w),
        description: S.intl.string(ea.default["8cYGJR"]),
        footer: (0, i.jsx)(z.$, {
            text: S.intl.string(S.t["13/7kX"]),
            variant: "secondary",
            fullWidth: !0,
            onClick: n,
        }),
        children: [
            (0, i.jsx)(eF.c, {}),
            l.isEnabled
                ? (0, i.jsx)(eJ, { applicationId: t.id })
                : (0, i.jsx)(eG.w, {
                      type: "info",
                      role: "none",
                      message: S.intl.string(ea.default.HJCvbw),
                      action: {
                          text: S.intl.string(ea.default["Utl/4Q"]),
                          loading: l.isPending,
                          onClick: () => {
                              l.setEnabled(!0);
                          },
                      },
                  }),
        ],
    });
}
function eJ(e) {
    let { applicationId: t } = e,
        n = (0, ef.A)({ applicationId: t }),
        { entries: l } = (0, ef.T)(t),
        a = (0, I.bG)([D.A], () => D.A.getStorefrontEntries(t)?.state === "error", [t]),
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
                            (l = "" !== e.title ? e.title : S.intl.string(ea.default.OvBwPV)),
                            t
                                ? S.intl.formatToPlainString(ea.default.eF1VJh, { title: l })
                                : null == e.publishedAt
                                  ? S.intl.formatToPlainString(ea.default.dX2mQt, { title: l })
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
        ? (0, i.jsx)(eG.w, { type: "critical", role: "alert", message: S.intl.string(ea.default.oaE9Uk) })
        : (0, i.jsxs)("div", {
              className: eK.u,
              children: [
                  (0, i.jsx)(eY, { isLoading: o, isLive: d, publishedAt: r?.publishedAt }),
                  l.length > 1 &&
                      (0, i.jsx)(eB.z, {
                          label: S.intl.string(ea.default["3nB2PV"]),
                          options: c,
                          value: n.selectedStorefrontId,
                          onChange: u,
                      }),
              ],
          });
}
function eY(e) {
    let t,
        n,
        { publishedAt: l, isLive: a, isLoading: r } = e,
        [d] = s.useState(() => Date.now());
    return (
        r
            ? ((t = S.intl.string(S.t.ZTNur7)), (n = (0, i.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == l
              ? ((t = S.intl.string(ea.default.CUAKSg)),
                (n = (0, i.jsx)(eP.W, { color: ex.A.colors.ICON_FEEDBACK_WARNING })))
              : l.getTime() > d
                ? ((t = S.intl.format(ea.default.evGwDW, { timestamp: eV(l) })),
                  (n = (0, i.jsx)(eM.ClockIcon, { color: ex.A.colors.ICON_FEEDBACK_INFO })))
                : a
                  ? ((t = S.intl.format(ea.default.rbAtUi, { timestamp: eV(l) })),
                    (n = (0, i.jsx)(ep.y, { color: ex.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = S.intl.format(ea.default["3x/M9Z"], { timestamp: eV(l) })),
                    (n = (0, i.jsx)(eA.a, { color: ex.A.colors.ICON_MUTED }))),
        (0, i.jsxs)("div", {
            className: eK.D,
            children: [n, (0, i.jsx)(o.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var eq = n(976860),
    eH = n(44724),
    e$ = n(464851);
let eQ = "social_layer_dev_tools_panel_width";
function eX() {
    let e = r.w.get(eQ);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function e0(e) {
    r.w.set(eQ, e);
}
let e1 = null;
function e2(e) {
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
function e9() {
    let e = (0, x.fy)().metadata,
        t = (0, f.h)(e?.applicationId),
        n = s.useRef(!1),
        l = (0, g.A)({ applicationId: t?.id, source: h.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    s.useEffect(() => {
        e?.shouldAutoOpenGameProfile !== !0 || null == l || n.current || ((n.current = !0), l());
    }, [e, l]);
    let r = s.useRef(null),
        [m, A] = s.useState(eX),
        E = (0, a.clamp)(m, 320, 720);
    s.useEffect(
        () => (
            null != e1 && (clearTimeout(e1), (e1 = null)),
            () => {
                e1 = setTimeout(() => {
                    ((e1 = null), j.Rj.getState().actions.endMultiselect(ei));
                }, 0);
            }
        ),
        [],
    );
    let v = (0, i.jsxs)("div", {
        className: e$.wx,
        children: [
            (0, i.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: S.intl.format(W.default.KoK4J9, { appName: t?.name ?? "" }),
            }),
            (0, i.jsx)(p.Ay.Icon, { icon: d.P, tooltip: S.intl.string(S.t.cpT0Cq), onClick: () => (0, x.Jp)() }),
        ],
    });
    return (0, i.jsxs)("div", {
        "data-app-right-panel": !0,
        ref: r,
        className: e$.nE,
        style: { width: E },
        children: [
            (0, i.jsx)(e2, { resizableNode: r, onResize: A, onResizeEnd: e0 }),
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
                r = y(t);
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
                                name: S.intl.string(ea.default.Z3uXLR),
                                description: S.intl.string(ea.default.sS4xGd),
                                icon: ec.J,
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
                                        X.default.track(es.HAw.SLAYER_STOREFRONT_EMBED_BUILDER_STARTED, {
                                            application_id: e,
                                            application_name: t,
                                            guild_id: (0, Y.n5)(e) ?? null,
                                        });
                                        let { pathname: n, search: l } = (0, eq.JK)().location,
                                            i = D.A.getGuildIdFromApplicationId(e);
                                        (0, Y.rG)(n, l, e, i) || (0, eH.default)({ applicationId: e });
                                    })(e.id, e.name),
                            }),
                            r &&
                                e.push({
                                    id: el.DRAFT_PREVIEW,
                                    name: S.intl.string(ea.default.QaMS5w),
                                    description: S.intl.string(ea.default["8cYGJR"]),
                                    icon: eu.EyeIcon,
                                    render: (e) => (0, i.jsx)(eZ, { ...e }),
                                })),
                        [
                            ...e,
                            {
                                id: el.ACCOUNT_LINKING,
                                name: S.intl.string(W.default.vR0zs6),
                                description: S.intl.string(W.default["136Fdw"]),
                                icon: em.GameControllerIcon,
                                render: (e) => (0, i.jsx)(eT, { ...e }),
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
        : (0, i.jsx)(G, { application: t, tools: n, onOpenTool: c, returnFocusToolId: r });
}
