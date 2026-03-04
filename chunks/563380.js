"use strict";
n.d(t, { A: () => N });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    l = n(158954),
    u = n(311907),
    c = n(397927),
    d = n(824552),
    _ = n(933958),
    f = n(869003),
    p = n(793574),
    h = n(688810),
    m = n(429913),
    E = n(793943),
    g = n(134861),
    A = n(147964),
    I = n(362490),
    T = n(487431),
    S = n(271469),
    y = n(985018),
    v = n(410758);
function N() {
    let e = (0, m.h)(A.A.testModeApplicationId),
        { analyticsLocations: t } = (0, h.Ay)(p.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: i,
            startAuthorization: a,
            chosenFlow: N,
            connectionApp: C,
            debug: { isSubscribedToAuthorizeRequest: R, oauth2Token: O, hasConnectionEntrypointUrl: b, validFlows: D },
        } = (0, I.RD)(e, { debug: !0 }),
        L = (0, u.bG)([g.A], () => null != e && g.A.isConnected(e.id)),
        w = (0, u.bG)([_.Ay], () => _.Ay.getSelfEmbeddedActivities()),
        M = "authorization_debug",
        x = [{ id: "authorization_debug", name: y.intl.string(S.default.vR0zs6) }],
        P = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: v.wx,
                        children: (0, r.jsx)("div", {
                            className: v.if,
                            children: (0, r.jsx)(l.DZT, {
                                variant: "heading-lg/extrabold",
                                children: y.intl.format(S.default.KoK4J9, { appName: "" }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: v.rf, children: (0, r.jsx)(l.y$y, { className: v.u1 }) }),
                ],
            }),
        k = () => (
            o()(null != e, "Application should be defined when rendering the test mode panel"),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: v.wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: v.if,
                                children: (0, r.jsx)(l.DZT, {
                                    variant: "heading-lg/extrabold",
                                    children: y.intl.format(S.default.KoK4J9, { appName: e.name }),
                                }),
                            }),
                            (0, r.jsx)(l.K0, {
                                variant: "icon-only",
                                icon: l.UlM,
                                "aria-label": "Close",
                                onClick: () => (0, E.Jp)(),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: v.rf,
                        children: [
                            (0, r.jsx)(c.VQ0, {
                                className: v.$H,
                                selectedItem: M,
                                onItemSelect: () => {},
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: x.map((e) =>
                                    (0, r.jsx)(
                                        c.VQ0.Item,
                                        {
                                            className: s()(v.Mf, { [v.wH]: e.id === M }),
                                            id: e.id,
                                            "aria-label": e.name,
                                            children: e.name,
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                            (0, r.jsx)(l.EYj, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: y.intl.string(S.default["no+FQS"]),
                            }),
                            (0, r.jsx)(T.VT, {
                                overallStatus: R ? T.nW.OVERALL_GOOD : L ? T.nW.WARN : T.nW.OVERALL_BAD,
                                name: y.intl.string(S.default.AGLx00),
                                steps: [
                                    {
                                        status: L ? T.nW.GOOD : T.nW.BAD,
                                        text: y.intl.string(S.default.kxF9br),
                                        description: L ? null : y.intl.string(S.default.PFxxJa),
                                        learnMoreLink: L
                                            ? null
                                            : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                    {
                                        status: R ? T.nW.GOOD : L ? T.nW.WARN : T.nW.BAD,
                                        text: y.intl.string(S.default.S94dzs),
                                        description: R || !L ? null : y.intl.string(S.default.aTULMB),
                                        learnMoreLink:
                                            R || !L
                                                ? null
                                                : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                ],
                                isChosen: N === I._M.RPC,
                            }),
                            (0, r.jsx)(T.VT, {
                                overallStatus: b ? T.nW.OVERALL_GOOD : T.nW.OVERALL_BAD,
                                name: y.intl.string(S.default.K3ObrU),
                                steps: [
                                    {
                                        status: b ? T.nW.GOOD : T.nW.BAD,
                                        text: y.intl.string(S.default["8a7IrV"]),
                                        description: b
                                            ? y.intl.formatToPlainString(S.default["9iLeL2"], {
                                                  url: C?.connectionEntrypointUrl,
                                              })
                                            : null,
                                    },
                                ],
                                isChosen: N === I._M.WEB,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: v.qr,
                        children: [
                            (0, r.jsx)(T.Sy, {
                                status: i ? T.nW.OVERALL_GOOD : T.nW.OVERALL_BAD,
                                text: y.intl.string(y.t["Vu/zmQ"]),
                            }),
                            0 === D.length &&
                                (0, r.jsx)(l.EYj, {
                                    style: { minWidth: 0, overflow: "hidden" },
                                    variant: "text-md/medium",
                                    children: y.intl.string(S.default.eg0mNa),
                                }),
                            (0, r.jsx)(l.$nd, {
                                variant: "secondary",
                                disabled: !n || i,
                                onClick: () => a({ analyticsLocations: t }),
                                text: y.intl.string(S.default.w0pN4R),
                                fullWidth: !0,
                            }),
                            null != O &&
                                (0, r.jsx)(l.$nd, {
                                    variant: "secondary",
                                    onClick: () => {
                                        d.A.delete(O.id);
                                        let t = w.get(e.id);
                                        null != t &&
                                            f.A.leaveActivity({
                                                location: t.location,
                                                applicationId: e.id,
                                                showFeedback: !1,
                                            });
                                    },
                                    text: y.intl.string(S.default.tkIymA),
                                    fullWidth: !0,
                                }),
                        ],
                    }),
                ],
            })
        );
    return (0, r.jsx)("div", {
        "data-app-right-panel": !0,
        className: v.nE,
        children: (0, r.jsx)(l.Fmo, { children: null != e ? k() : P() }),
    });
}
