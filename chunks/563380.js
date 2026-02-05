"use strict";
n.d(t, { A: () => b });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    l = n(158954),
    u = n(311907),
    c = n(827734),
    d = n(397927),
    _ = n(824552),
    f = n(975807),
    p = n(933958),
    h = n(869003),
    m = n(793574),
    g = n(688810),
    E = n(429913),
    A = n(793943),
    I = n(134861),
    T = n(147964),
    y = n(362490),
    S = n(271469),
    v = n(985018),
    C = n(410758);
function b() {
    let e = (0, E.h)(T.A.testModeApplicationId),
        { analyticsLocations: t } = (0, g.Ay)(m.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: i,
            startAuthorization: s,
            chosenFlow: c,
            connectionApp: f,
            debug: { isSubscribedToAuthorizeRequest: b, oauth2Token: O, hasConnectionEntrypointUrl: D, validFlows: L },
        } = (0, y.RD)(e, { debug: !0 }),
        w = (0, u.bG)([I.A], () => null != e && I.A.isConnected(e.id)),
        x = (0, u.bG)([p.Ay], () => p.Ay.getSelfEmbeddedActivities()),
        P = "authorization_debug",
        M = [{ id: "authorization_debug", name: v.intl.string(S.default.vR0zs6) }],
        k = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: C.wx,
                        children: (0, r.jsx)("div", {
                            className: C.if,
                            children: (0, r.jsx)(l.DZT, {
                                variant: "heading-lg/extrabold",
                                children: v.intl.format(S.default.KoK4J9, { appName: "" }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: C.rf, children: (0, r.jsx)(l.y$y, { className: C.u1 }) }),
                ],
            }),
        U = () => (
            o()(null != e, "Application should be defined when rendering the test mode panel"),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: C.wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: C.if,
                                children: (0, r.jsx)(l.DZT, {
                                    variant: "heading-lg/extrabold",
                                    children: v.intl.format(S.default.KoK4J9, { appName: e.name }),
                                }),
                            }),
                            (0, r.jsx)(l.K0, {
                                variant: "icon-only",
                                icon: l.UlM,
                                "aria-label": "Close",
                                onClick: () => (0, A.Jp)(),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.rf,
                        children: [
                            (0, r.jsx)(d.VQ0, {
                                className: C.$H,
                                selectedItem: P,
                                onItemSelect: () => {},
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: M.map((e) =>
                                    (0, r.jsx)(
                                        d.VQ0.Item,
                                        {
                                            className: a()(C.Mf, { [C.wH]: e.id === P }),
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
                                children: v.intl.string(S.default["no+FQS"]),
                            }),
                            (0, r.jsx)(N, {
                                overallStatus: b ? 0 : w ? 3 : 1,
                                name: v.intl.string(S.default.AGLx00),
                                steps: [
                                    {
                                        status: w ? 2 : 4,
                                        text: v.intl.string(S.default.kxF9br),
                                        description: w ? null : v.intl.string(S.default.PFxxJa),
                                        learnMoreLink: w
                                            ? null
                                            : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                    {
                                        status: b ? 2 : w ? 3 : 4,
                                        text: v.intl.string(S.default.S94dzs),
                                        description: b || !w ? null : v.intl.string(S.default.aTULMB),
                                        learnMoreLink:
                                            b || !w
                                                ? null
                                                : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                ],
                                isChosen: c === y._M.RPC,
                            }),
                            (0, r.jsx)(N, {
                                overallStatus: +!D,
                                name: v.intl.string(S.default.K3ObrU),
                                steps: [
                                    {
                                        status: D ? 2 : 4,
                                        text: v.intl.string(S.default["8a7IrV"]),
                                        description: D
                                            ? v.intl.formatToPlainString(S.default["9iLeL2"], {
                                                  url: f?.connectionEntrypointUrl,
                                              })
                                            : null,
                                    },
                                ],
                                isChosen: c === y._M.WEB,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.qr,
                        children: [
                            (0, r.jsx)(R, { status: +!i, text: v.intl.string(v.t["Vu/zmQ"]) }),
                            0 === L.length &&
                                (0, r.jsx)(l.EYj, {
                                    style: { minWidth: 0, overflow: "hidden" },
                                    variant: "text-md/medium",
                                    children: v.intl.string(S.default.eg0mNa),
                                }),
                            (0, r.jsx)(l.$nd, {
                                variant: "secondary",
                                disabled: !n || i,
                                onClick: () => s({ analyticsLocations: t }),
                                text: v.intl.string(S.default.w0pN4R),
                                fullWidth: !0,
                            }),
                            null != O &&
                                (0, r.jsx)(l.$nd, {
                                    variant: "secondary",
                                    onClick: () => {
                                        _.A.delete(O.id);
                                        let t = x.get(e.id);
                                        null != t &&
                                            h.A.leaveActivity({
                                                location: t.location,
                                                applicationId: e.id,
                                                showFeedback: !1,
                                            });
                                    },
                                    text: v.intl.string(S.default.tkIymA),
                                    fullWidth: !0,
                                }),
                        ],
                    }),
                ],
            })
        );
    return (0, r.jsx)("div", {
        "data-app-right-panel": !0,
        className: C.nE,
        children: (0, r.jsx)(l.Fmo, { children: null != e ? U() : k() }),
    });
}
function N(e) {
    let { overallStatus: t, name: n, steps: i, isChosen: a } = e;
    return (0, r.jsxs)("div", {
        className: C.Wk,
        children: [
            (0, r.jsx)(R, { status: t, text: n }),
            i.map((e, t) => (0, r.jsx)(O, { ...e }, t)),
            a &&
                (0, r.jsx)("div", {
                    className: C.MH,
                    children: (0, r.jsx)(l.EYj, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: v.intl.string(S.default.OEkrCx),
                    }),
                }),
        ],
    });
}
function R(e) {
    let { text: t, status: n } = e;
    return (0, r.jsxs)("div", {
        className: C.Km,
        children: [
            (0, r.jsx)(l.EYj, { variant: "text-md/semibold", color: "text-subtle", children: t }),
            (0, r.jsx)(D, { status: n }),
        ],
    });
}
function O(e) {
    let { status: t, text: n, description: i, learnMoreLink: a } = e;
    return (0, r.jsxs)("div", {
        className: C.jf,
        children: [
            (0, r.jsx)(D, { status: t }),
            (0, r.jsxs)("div", {
                className: C.bc,
                children: [
                    (0, r.jsx)(l.EYj, { variant: "text-md/medium", children: n }),
                    null != i && (0, r.jsx)(l.EYj, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                    null != a &&
                        (0, r.jsx)(l.QWc, {
                            textVariant: "text-sm/medium",
                            text: v.intl.string(v.t.hvVgAZ),
                            onClick: () => (0, f.A)(a),
                        }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { status: t } = e,
        n = { size: "sm", className: C.I8 };
    switch (t) {
        case 0:
            return (0, r.jsx)(l.yr3, { ...n, color: c.A.colors.ICON_FEEDBACK_POSITIVE });
        case 1:
            return (0, r.jsx)(l.aXh, { ...n, color: c.A.colors.ICON_FEEDBACK_CRITICAL });
        case 2:
            return (0, r.jsx)(l.Uzd, { ...n, color: c.A.colors.ICON_FEEDBACK_POSITIVE });
        case 3:
            return (0, r.jsx)(l.id, { ...n, color: c.A.colors.ICON_FEEDBACK_WARNING });
        case 4:
            return (0, r.jsx)(l.PGe, { ...n, color: c.A.colors.ICON_FEEDBACK_CRITICAL });
    }
}
