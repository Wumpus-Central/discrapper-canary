"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(158954),
    c = n(311907),
    d = n(397927),
    _ = n(824552),
    f = n(933958),
    p = n(869003),
    h = n(793574),
    m = n(688810),
    E = n(429913),
    g = n(793943),
    A = n(409626),
    I = n(692969),
    T = n(134861),
    S = n(147964),
    y = n(362490),
    v = n(487431),
    N = n(271469),
    C = n(985018),
    R = n(818741);
function O() {
    let e = (0, E.h)(S.A.testModeApplicationId),
        { analyticsLocations: t } = (0, m.Ay)(h.A.SDK_DEBUG_TOOLS),
        n = (0, g.fy)().metadata,
        s = i.useRef(!1),
        {
            canStartAuthorization: o,
            hasAlreadyLinked: O,
            startAuthorization: b,
            chosenFlow: D,
            connectionApp: L,
            debug: { isSubscribedToAuthorizeRequest: w, oauth2Token: M, hasConnectionEntrypointUrl: x, validFlows: P },
        } = (0, y.RD)(e, { debug: !0 }),
        k = (0, c.bG)([T.A], () => null != e && T.A.isConnected(e.id)),
        U = (0, c.bG)([f.Ay], () => f.Ay.getSelfEmbeddedActivities()),
        G = e?.id ?? "",
        F = (0, I.A)({ applicationId: G, source: A.Ob.DevTools, trackEntryPointImpression: !1, forceV2: !0 });
    i.useEffect(() => {
        n?.shouldAutoOpenGameProfile !== !0 || null == F || s.current || ((s.current = !0), F());
    }, [n, F]);
    let V = "authorization_debug",
        B = [{ id: "authorization_debug", name: C.intl.string(N.default.vR0zs6) }],
        H = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: R.wx,
                        children: (0, r.jsx)("div", {
                            className: R.if,
                            children: (0, r.jsx)(u.DZT, {
                                variant: "heading-lg/extrabold",
                                children: C.intl.format(N.default.KoK4J9, { appName: "" }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: R.rf, children: (0, r.jsx)(u.y$y, { className: R.u1 }) }),
                ],
            }),
        j = () => (
            l()(null != e, "Application should be defined when rendering the test mode panel"),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: R.wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: R.if,
                                children: (0, r.jsx)(u.DZT, {
                                    variant: "heading-lg/extrabold",
                                    children: C.intl.format(N.default.KoK4J9, { appName: e.name }),
                                }),
                            }),
                            (0, r.jsx)(u.K0, {
                                variant: "icon-only",
                                icon: u.UlM,
                                "aria-label": "Close",
                                onClick: () => (0, g.Jp)(),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R.rf,
                        children: [
                            (0, r.jsx)(d.VQ0, {
                                className: R.$H,
                                selectedItem: V,
                                onItemSelect: () => {},
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: B.map((e) =>
                                    (0, r.jsx)(
                                        d.VQ0.Item,
                                        {
                                            className: a()(R.Mf, { [R.wH]: e.id === V }),
                                            id: e.id,
                                            "aria-label": e.name,
                                            children: e.name,
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                            (0, r.jsx)(u.EYj, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: C.intl.string(N.default["no+FQS"]),
                            }),
                            (0, r.jsx)(v.VT, {
                                overallStatus: w ? v.nW.OVERALL_GOOD : k ? v.nW.WARN : v.nW.OVERALL_BAD,
                                name: C.intl.string(N.default.AGLx00),
                                steps: [
                                    {
                                        status: k ? v.nW.GOOD : v.nW.BAD,
                                        text: C.intl.string(N.default.kxF9br),
                                        description: k ? null : C.intl.string(N.default.PFxxJa),
                                        learnMoreLink: k
                                            ? null
                                            : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                    {
                                        status: w ? v.nW.GOOD : k ? v.nW.WARN : v.nW.BAD,
                                        text: C.intl.string(N.default.S94dzs),
                                        description: w || !k ? null : C.intl.string(N.default.aTULMB),
                                        learnMoreLink:
                                            w || !k
                                                ? null
                                                : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                ],
                                isChosen: D === y._M.RPC,
                            }),
                            (0, r.jsx)(v.VT, {
                                overallStatus: x ? v.nW.OVERALL_GOOD : v.nW.OVERALL_BAD,
                                name: C.intl.string(N.default.K3ObrU),
                                steps: [
                                    {
                                        status: x ? v.nW.GOOD : v.nW.BAD,
                                        text: C.intl.string(N.default["8a7IrV"]),
                                        description: x
                                            ? C.intl.formatToPlainString(N.default["9iLeL2"], {
                                                  url: L?.connectionEntrypointUrl,
                                              })
                                            : null,
                                    },
                                ],
                                isChosen: D === y._M.WEB,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R.qr,
                        children: [
                            (0, r.jsx)(v.Sy, {
                                status: O ? v.nW.OVERALL_GOOD : v.nW.OVERALL_BAD,
                                text: C.intl.string(C.t["Vu/zmQ"]),
                            }),
                            0 === P.length &&
                                (0, r.jsx)(u.EYj, {
                                    style: { minWidth: 0, overflow: "hidden" },
                                    variant: "text-md/medium",
                                    children: C.intl.string(N.default.eg0mNa),
                                }),
                            (0, r.jsx)(u.$nd, {
                                variant: "secondary",
                                disabled: !o || O,
                                onClick: () => b({ analyticsLocations: t }),
                                text: C.intl.string(N.default.w0pN4R),
                                fullWidth: !0,
                            }),
                            null != M &&
                                (0, r.jsx)(u.$nd, {
                                    variant: "secondary",
                                    onClick: () => {
                                        _.A.delete(M.id);
                                        let t = U.get(e.id);
                                        null != t &&
                                            p.A.leaveActivity({
                                                location: t.location,
                                                applicationId: e.id,
                                                showFeedback: !1,
                                            });
                                    },
                                    text: C.intl.string(N.default.tkIymA),
                                    fullWidth: !0,
                                }),
                            (0, r.jsx)(u.$nd, {
                                variant: "secondary",
                                onClick: F ?? void 0,
                                disabled: null == F,
                                text: C.intl.string(N.default.cCvdJy),
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    return (0, r.jsx)("div", {
        "data-app-right-panel": !0,
        className: R.nE,
        children: (0, r.jsx)(u.Fmo, { children: null != e ? j() : H() }),
    });
}
