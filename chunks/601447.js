(n.r(t), n.d(t, { default: () => er }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    d = n(297264),
    o = n(408278),
    c = n(807072),
    u = n(289873),
    m = n(707554),
    f = n(506774),
    h = n(761508),
    x = n(761929),
    p = n(429913),
    v = n(793943),
    g = n(409626),
    A = n(692969),
    j = n(147964),
    I = n(156454),
    N = n(834730),
    E = n(821609),
    D = n(17928),
    S = n(933958),
    O = n(869003),
    _ = n(793574),
    b = n(688810),
    y = n(206828),
    R = n(487431),
    C = n(712440),
    W = n(134861),
    w = n(942370),
    L = n(375708),
    T = n(538524),
    k = n(712289);
function F(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, b.Ay)(_.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: i,
            hasAlreadyLinked: s,
            startAuthorization: r,
            chosenFlow: a,
            connectionApp: d,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, y.RD)(t, { debug: !0 }),
        f = (0, D.bG)([W.A], () => W.A.isConnected(t.id)),
        h = (0, A.A)({ applicationId: t.id, source: g.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        x = (0, D.bG)([S.Ay], () => S.Ay.getSelfEmbeddedActivities());
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: k.r,
                children: [
                    (0, l.jsx)(N.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: L.intl.string(T.default["no+FQS"]),
                    }),
                    (0, l.jsx)(R.VT, {
                        flow: w._.RPC,
                        overallStatus: o ? R.nW.OVERALL_GOOD : f ? R.nW.WARN : R.nW.OVERALL_BAD,
                        name: L.intl.string(T.default.AGLx00),
                        steps: [
                            {
                                status: f ? R.nW.GOOD : R.nW.BAD,
                                text: L.intl.string(T.default.kxF9br),
                                description: f ? null : L.intl.string(T.default.PFxxJa),
                                learnMoreLink: f
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: o ? R.nW.GOOD : f ? R.nW.WARN : R.nW.BAD,
                                text: L.intl.string(T.default.S94dzs),
                                description: o || !f ? null : L.intl.string(T.default.aTULMB),
                                learnMoreLink:
                                    o || !f
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: a === w._.RPC,
                    }),
                    (0, l.jsx)(R.VT, {
                        flow: w._.WEB,
                        overallStatus: u ? R.nW.OVERALL_GOOD : R.nW.OVERALL_BAD,
                        name: L.intl.string(T.default.K3ObrU),
                        steps: [
                            {
                                status: u ? R.nW.GOOD : R.nW.BAD,
                                text: L.intl.string(T.default["8a7IrV"]),
                                description: u
                                    ? L.intl.formatToPlainString(T.default["9iLeL2"], {
                                          url: d?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: a === w._.WEB,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: k.q,
                children: [
                    (0, l.jsx)(R.Sy, {
                        status: s ? R.nW.OVERALL_GOOD : R.nW.OVERALL_BAD,
                        text: L.intl.string(L.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, l.jsx)(N.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: L.intl.string(T.default.eg0mNa),
                        }),
                    (0, l.jsx)(E.$, {
                        variant: "secondary",
                        disabled: !i || s,
                        onClick: () => r({ analyticsLocations: n }),
                        text: L.intl.string(T.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, l.jsx)(E.$, {
                            variant: "secondary",
                            onClick: () => {
                                C.A.delete(c.id);
                                let e = x.get(t.id);
                                null != e &&
                                    O.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
                            },
                            text: L.intl.string(T.default.tkIymA),
                            fullWidth: !0,
                        }),
                    (0, l.jsx)(E.$, {
                        variant: "secondary",
                        onClick: h ?? void 0,
                        disabled: null == h,
                        text: L.intl.string(T.default.cCvdJy),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
var G = n(404778),
    V = n(144228),
    B = n(702860),
    P = n(406810),
    M = n(628284),
    z = n(285796),
    K = n(661531),
    U = n(785562),
    J = n(379418),
    Z = n(733391),
    H = n(621547),
    $ = n(220334);
function Q(e) {
    let t = (0, J.WA)({ timestamp: String(Math.floor(e.getTime() / 1e3)), format: "R" });
    return null != t ? (0, l.jsx)(U.A, { node: t }) : null;
}
function q(e) {
    let { applicationId: t } = e,
        n = (0, I.A)({ applicationId: t }),
        { entries: s } = (0, I.T)(t),
        r = s.find((e) => e.id === n.selectedStorefrontId),
        a = null == n.selectedStorefrontId || null == r,
        d = null != n.selectedStorefrontId && n.selectedStorefrontId === n.liveStorefrontId,
        o = i.useMemo(
            () =>
                s.map((e) => {
                    var t;
                    let l;
                    return {
                        name:
                            ((t = e.id === n.liveStorefrontId),
                            (l = "" !== e.title ? e.title : L.intl.string(H.default.OvBwPV)),
                            t
                                ? L.intl.formatToPlainString(H.default.eF1VJh, { title: l })
                                : null == e.publishedAt
                                  ? L.intl.formatToPlainString(H.default.dX2mQt, { title: l })
                                  : l),
                        value: e.id,
                    };
                }),
            [s, n.liveStorefrontId],
        ),
        c = i.useCallback(
            (e) => {
                (0, Z.ZR)(t, e === n.liveStorefrontId ? null : e);
            },
            [n.liveStorefrontId, t],
        );
    return (0, l.jsxs)("div", {
        className: $.u,
        children: [
            (0, l.jsx)(X, { isLoading: a, isLive: d, publishedAt: r?.publishedAt }),
            s.length > 1 &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(G.c, {}),
                        (0, l.jsx)("div", {
                            children: (0, l.jsx)(V.z, {
                                label: L.intl.string(H.default["3nB2PV"]),
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
function X(e) {
    let t,
        n,
        { publishedAt: s, isLive: r, isLoading: a } = e,
        [o] = i.useState(() => Date.now());
    return (
        a
            ? ((t = L.intl.string(L.t.ZTNur7)), (n = (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE })))
            : null == s
              ? ((t = L.intl.string(H.default.CUAKSg)),
                (n = (0, l.jsx)(B.W, { color: K.A.colors.ICON_FEEDBACK_WARNING })))
              : s.getTime() > o
                ? ((t = L.intl.format(H.default.evGwDW, { timestamp: Q(s) })),
                  (n = (0, l.jsx)(P.ClockIcon, { color: K.A.colors.ICON_FEEDBACK_INFO })))
                : r
                  ? ((t = L.intl.format(H.default.rbAtUi, { timestamp: Q(s) })),
                    (n = (0, l.jsx)(M.y, { color: K.A.colors.ICON_FEEDBACK_POSITIVE })))
                  : ((t = L.intl.format(H.default["3x/M9Z"], { timestamp: Q(s) })),
                    (n = (0, l.jsx)(z.a, { color: K.A.colors.ICON_MUTED }))),
        (0, l.jsxs)("div", {
            className: $.D,
            children: [n, (0, l.jsx)(d.D, { variant: "heading-md/semibold", children: t })],
        })
    );
}
var Y = n(471364);
function ee(e) {
    let { application: t } = e,
        n = t.id;
    return (0, l.jsx)("div", { className: Y.r, children: (0, l.jsx)(q, { applicationId: n }) });
}
var et = n(464851);
let en = "social_layer_dev_tools_panel_width";
function el() {
    let e = f.w.get(en);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function ei(e) {
    f.w.set(en, e);
}
function es(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: i } = e,
        s = (0, x.A)({
            minDimension: 320,
            maxDimension: 720,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: i,
            orientation: x.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, l.jsx)("div", { onMouseDown: s, className: et.Di, "aria-hidden": !0 });
}
function er() {
    var e;
    let t = (0, p.h)(j.A.testModeApplicationId),
        n = (0, v.fy)(),
        s = i.useRef(!1),
        f = n.metadata,
        x = (0, A.A)({ applicationId: t?.id, source: g.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    i.useEffect(() => {
        f?.shouldAutoOpenGameProfile !== !0 || null == x || s.current || ((s.current = !0), x());
    }, [f, x]);
    let N = i.useRef(null),
        [E, D] = i.useState(el),
        S = (0, a.clamp)(E, 320, 720),
        O = (function (e) {
            let t = e?.id,
                { isTestMode: n, entries: s } = (0, I.T)(t),
                r = n && s.length > 0;
            return i.useMemo(
                () =>
                    [
                        {
                            id: "account_linking",
                            name: L.intl.string(T.default.vR0zs6),
                            render: (e) => (0, l.jsx)(F, { ...e }),
                        },
                        {
                            id: "storefront",
                            name: L.intl.string(H.default["qnSo/i"]),
                            render: (e) => (0, l.jsx)(ee, { ...e }),
                            predicate: (e) => null != e && r,
                        },
                    ].filter((t) => null == t.predicate || t.predicate(e)),
                [e, r],
            );
        })(t),
        [_, b] = i.useState(O[0]?.id),
        y = O.find((e) => e.id === _) ?? O[0];
    function R(e) {
        return (0, l.jsxs)("div", {
            className: et.wx,
            children: [
                (0, l.jsx)("div", {
                    className: et.if,
                    children: (0, l.jsx)(d.D, {
                        variant: "heading-lg/extrabold",
                        children: L.intl.format(T.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != t &&
                    (0, l.jsx)(o.K, {
                        variant: "icon-only",
                        icon: c.U,
                        "aria-label": "Close",
                        onClick: () => (0, v.Jp)(),
                    }),
            ],
        });
    }
    return (0, l.jsxs)("div", {
        "data-app-right-panel": !0,
        ref: N,
        className: et.nE,
        style: { width: S },
        children: [
            (0, l.jsx)(es, { resizableNode: N, onResize: D, onResizeEnd: ei }),
            (0, l.jsx)(m.F, {
                children:
                    null != t
                        ? ((e = t.name),
                          (0, l.jsxs)(l.Fragment, {
                              children: [
                                  R(e),
                                  (0, l.jsx)("div", {
                                      className: et.Mv,
                                      children: (0, l.jsx)(h.V, {
                                          className: et.$H,
                                          selectedItem: y?.id,
                                          onItemSelect: b,
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: O.map((e) =>
                                              (0, l.jsx)(
                                                  h.V.Item,
                                                  {
                                                      className: r()(et.Mf, { [et.wH]: e.id === y?.id }),
                                                      id: e.id,
                                                      "aria-label": e.name,
                                                      children: e.name,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                  }),
                                  (0, l.jsx)("div", { className: et.rf, children: y?.render({ application: t }) }),
                              ],
                          }))
                        : (0, l.jsxs)(l.Fragment, {
                              children: [
                                  R(""),
                                  (0, l.jsx)("div", {
                                      className: et.TG,
                                      children: (0, l.jsx)(u.y, { className: et.u1 }),
                                  }),
                              ],
                          }),
            }),
        ],
    });
}
