n.r(t), n.d(t, { default: () => T });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    d = n(435558),
    r = n(297264),
    o = n(408278),
    c = n(807072),
    u = n(289873),
    m = n(707554),
    f = n(506774),
    x = n(761508),
    h = n(761929),
    p = n(429913),
    g = n(793943),
    v = n(409626),
    A = n(692969),
    j = n(147964),
    D = n(834730),
    O = n(821609),
    b = n(17928),
    E = n(933958),
    R = n(869003),
    W = n(793574),
    y = n(688810),
    L = n(206828),
    _ = n(487431),
    k = n(712440),
    N = n(134861),
    w = n(942370),
    G = n(375708),
    S = n(311350),
    C = n(38048);
function I(e) {
    let { application: t } = e,
        { analyticsLocations: n } = (0, y.Ay)(W.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: l,
            hasAlreadyLinked: s,
            startAuthorization: a,
            chosenFlow: d,
            connectionApp: r,
            debug: { isSubscribedToAuthorizeRequest: o, oauth2Token: c, hasConnectionEntrypointUrl: u, validFlows: m },
        } = (0, L.RD)(t, { debug: !0 }),
        f = (0, b.bG)([N.A], () => N.A.isConnected(t.id)),
        x = (0, A.A)({ applicationId: t.id, source: v.GameProfileSources.DevTools, trackEntryPointImpression: !1 }),
        h = (0, b.bG)([E.Ay], () => E.Ay.getSelfEmbeddedActivities());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: C.r,
                children: [
                    (0, i.jsx)(D.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: G.intl.string(S.default["no+FQS"]),
                    }),
                    (0, i.jsx)(_.VT, {
                        flow: w._M.RPC,
                        overallStatus: o ? _.nW.OVERALL_GOOD : f ? _.nW.WARN : _.nW.OVERALL_BAD,
                        name: G.intl.string(S.default.AGLx00),
                        steps: [
                            {
                                status: f ? _.nW.GOOD : _.nW.BAD,
                                text: G.intl.string(S.default.kxF9br),
                                description: f ? null : G.intl.string(S.default.PFxxJa),
                                learnMoreLink: f
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: o ? _.nW.GOOD : f ? _.nW.WARN : _.nW.BAD,
                                text: G.intl.string(S.default.S94dzs),
                                description: o || !f ? null : G.intl.string(S.default.aTULMB),
                                learnMoreLink:
                                    o || !f
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: d === w._M.RPC,
                    }),
                    (0, i.jsx)(_.VT, {
                        flow: w._M.WEB,
                        overallStatus: u ? _.nW.OVERALL_GOOD : _.nW.OVERALL_BAD,
                        name: G.intl.string(S.default.K3ObrU),
                        steps: [
                            {
                                status: u ? _.nW.GOOD : _.nW.BAD,
                                text: G.intl.string(S.default["8a7IrV"]),
                                description: u
                                    ? G.intl.formatToPlainString(S.default["9iLeL2"], {
                                          url: r?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: d === w._M.WEB,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: C.q,
                children: [
                    (0, i.jsx)(_.Sy, {
                        status: s ? _.nW.OVERALL_GOOD : _.nW.OVERALL_BAD,
                        text: G.intl.string(G.t["Vu/zmQ"]),
                    }),
                    0 === m.length &&
                        (0, i.jsx)(D.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: G.intl.string(S.default.eg0mNa),
                        }),
                    (0, i.jsx)(O.$, {
                        variant: "secondary",
                        disabled: !l || s,
                        onClick: () => a({ analyticsLocations: n }),
                        text: G.intl.string(S.default.w0pN4R),
                        fullWidth: !0,
                    }),
                    null != c &&
                        (0, i.jsx)(O.$, {
                            variant: "secondary",
                            onClick: () => {
                                k.A.delete(c.id);
                                let e = h.get(t.id);
                                null != e &&
                                    R.A.leaveActivity({ location: e.location, applicationId: t.id, showFeedback: !1 });
                            },
                            text: G.intl.string(S.default.tkIymA),
                            fullWidth: !0,
                        }),
                    (0, i.jsx)(O.$, {
                        variant: "secondary",
                        onClick: x ?? void 0,
                        disabled: null == x,
                        text: G.intl.string(S.default.cCvdJy),
                        fullWidth: !0,
                    }),
                ],
            }),
        ],
    });
}
var M = n(414792);
let V = "social_layer_dev_tools_panel_width";
function z() {
    let e = f.w.get(V);
    return "number" == typeof e && Number.isFinite(e) && e > 0 ? e : 350;
}
function B(e) {
    f.w.set(V, e);
}
function F(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: l } = e,
        s = (0, h.A)({
            minDimension: 320,
            maxDimension: 720,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: h.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
        });
    return (0, i.jsx)("div", { onMouseDown: s, className: M.Di, "aria-hidden": !0 });
}
function T() {
    var e;
    let t = (0, p.h)(j.A.testModeApplicationId),
        n = (0, g.fy)(),
        s = l.useRef(!1),
        f = n.metadata,
        h = (0, A.A)({ applicationId: t?.id, source: v.GameProfileSources.DevTools, trackEntryPointImpression: !1 });
    l.useEffect(() => {
        f?.shouldAutoOpenGameProfile !== !0 || null == h || s.current || ((s.current = !0), h());
    }, [f, h]);
    let D = l.useRef(null),
        [O, b] = l.useState(z),
        E = (0, d.clamp)(O, 320, 720),
        R = l.useMemo(
            () => [
                {
                    id: "account_linking",
                    name: G.intl.string(S.default.vR0zs6),
                    render: (e) => (0, i.jsx)(I, { ...e }),
                },
            ],
            [],
        ),
        [W, y] = l.useState(R[0]?.id),
        L = R.find((e) => e.id === W) ?? R[0];
    function _(e) {
        return (0, i.jsxs)("div", {
            className: M.wx,
            children: [
                (0, i.jsx)("div", {
                    className: M.if,
                    children: (0, i.jsx)(r.D, {
                        variant: "heading-lg/extrabold",
                        children: G.intl.format(S.default.KoK4J9, { appName: e }),
                    }),
                }),
                null != t &&
                    (0, i.jsx)(o.K, {
                        variant: "icon-only",
                        icon: c.U,
                        "aria-label": "Close",
                        onClick: () => (0, g.Jp)(),
                    }),
            ],
        });
    }
    return (0, i.jsxs)("div", {
        "data-app-right-panel": !0,
        ref: D,
        className: M.nE,
        style: { width: E },
        children: [
            (0, i.jsx)(F, { resizableNode: D, onResize: b, onResizeEnd: B }),
            (0, i.jsx)(m.F, {
                children:
                    null != t
                        ? ((e = t.name),
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  _(e),
                                  (0, i.jsx)("div", {
                                      className: M.Mv,
                                      children: (0, i.jsx)(x.V, {
                                          className: M.$H,
                                          selectedItem: L?.id,
                                          onItemSelect: y,
                                          orientation: "horizontal",
                                          type: "top",
                                          look: "brand",
                                          children: R.map((e) =>
                                              (0, i.jsx)(
                                                  x.V.Item,
                                                  {
                                                      className: a()(M.Mf, { [M.wH]: e.id === L?.id }),
                                                      id: e.id,
                                                      "aria-label": e.name,
                                                      children: e.name,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                  }),
                                  L?.render({ application: t }),
                              ],
                          }))
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  _(""),
                                  (0, i.jsx)("div", {
                                      className: M.TG,
                                      children: (0, i.jsx)(u.y, { className: M.u1 }),
                                  }),
                              ],
                          }),
            }),
        ],
    });
}
