n.d(t, {
    A: () => w,
}),
    n(228524);
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    l = n(158954),
    c = n(311907),
    u = n(827734),
    d = n(397927),
    f = n(824552),
    p = n(975807),
    _ = n(933958),
    h = n(869003),
    m = n(793574),
    g = n(688810),
    E = n(429913),
    b = n(793943),
    y = n(134861),
    O = n(147964),
    A = n(362490),
    v = n(271469),
    S = n(985018),
    I = n(410758);

function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function w() {
    let e = (0, E.h)(O.A.testModeApplicationId),
        { analyticsLocations: t } = (0, g.Ay)(m.A.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: i,
            startAuthorization: s,
            chosenFlow: u,
            connectionApp: p,
            debug: { isSubscribedToAuthorizeRequest: T, oauth2Token: C, hasConnectionEntrypointUrl: N, validFlows: R },
        } = (0, A.RD)(e, {
            debug: !0,
        }),
        w = (0, c.bG)([y.A], () => null != e && y.A.isConnected(e.id)),
        x = (0, c.bG)([_.Ay], () => _.Ay.getSelfEmbeddedActivities()),
        L = "authorization_debug",
        j = [
            {
                id: "authorization_debug",
                name: S.intl.string(v.default.vR0zs6),
            },
        ],
        M = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: I.wx,
                        children: (0, r.jsx)("div", {
                            className: I.if,
                            children: (0, r.jsx)(l.DZT, {
                                variant: "heading-lg/extrabold",
                                children: S.intl.format(v.default.KoK4J9, {
                                    appName: "",
                                }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: I.rf,
                        children: (0, r.jsx)(l.y$y, {
                            className: I.u1,
                        }),
                    }),
                ],
            }),
        k = () => (
            o()(null != e, "Application should be defined when rendering the test mode panel"),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: I.wx,
                        children: [
                            (0, r.jsx)("div", {
                                className: I.if,
                                children: (0, r.jsx)(l.DZT, {
                                    variant: "heading-lg/extrabold",
                                    children: S.intl.format(v.default.KoK4J9, {
                                        appName: e.name,
                                    }),
                                }),
                            }),
                            (0, r.jsx)(l.K0, {
                                variant: "icon-only",
                                icon: l.UlM,
                                "aria-label": "Close",
                                onClick: () => (0, b.Jp)(),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: I.rf,
                        children: [
                            (0, r.jsx)(d.VQ0, {
                                className: I.$H,
                                selectedItem: L,
                                onItemSelect: () => {},
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: j.map((e) =>
                                    (0, r.jsx)(
                                        d.VQ0.Item,
                                        {
                                            className: a()(I.Mf, {
                                                [I.wH]: e.id === L,
                                            }),
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
                                children: S.intl.string(v.default["no+FQS"]),
                            }),
                            (0, r.jsx)(P, {
                                overallStatus: T ? 0 : w ? 3 : 1,
                                name: S.intl.string(v.default.AGLx00),
                                steps: [
                                    {
                                        status: w ? 2 : 4,
                                        text: S.intl.string(v.default.kxF9br),
                                        description: w ? null : S.intl.string(v.default.PFxxJa),
                                        learnMoreLink: w
                                            ? null
                                            : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                    {
                                        status: T ? 2 : w ? 3 : 4,
                                        text: S.intl.string(v.default.S94dzs),
                                        description: T || !w ? null : S.intl.string(v.default.aTULMB),
                                        learnMoreLink:
                                            T || !w
                                                ? null
                                                : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                ],
                                isChosen: u === A._M.RPC,
                            }),
                            (0, r.jsx)(P, {
                                overallStatus: +!N,
                                name: S.intl.string(v.default.K3ObrU),
                                steps: [
                                    {
                                        status: N ? 2 : 4,
                                        text: S.intl.string(v.default["8a7IrV"]),
                                        description: N
                                            ? S.intl.formatToPlainString(v.default["9iLeL2"], {
                                                  url: null == p ? void 0 : p.connectionEntrypointUrl,
                                              })
                                            : null,
                                    },
                                ],
                                isChosen: u === A._M.WEB,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: I.qr,
                        children: [
                            (0, r.jsx)(D, {
                                status: +!i,
                                text: S.intl.string(S.t["Vu/zmQ"]),
                            }),
                            0 === R.length &&
                                (0, r.jsx)(l.EYj, {
                                    style: {
                                        minWidth: 0,
                                        overflow: "hidden",
                                    },
                                    variant: "text-md/medium",
                                    children: S.intl.string(v.default.eg0mNa),
                                }),
                            (0, r.jsx)(l.$nd, {
                                variant: "secondary",
                                disabled: !n || i,
                                onClick: () =>
                                    s({
                                        analyticsLocations: t,
                                    }),
                                text: S.intl.string(v.default.w0pN4R),
                                fullWidth: !0,
                            }),
                            null != C &&
                                (0, r.jsx)(l.$nd, {
                                    variant: "secondary",
                                    onClick: () => {
                                        f.A.delete(C.id);
                                        let t = x.get(e.id);
                                        null != t &&
                                            h.A.leaveActivity({
                                                location: t.location,
                                                applicationId: e.id,
                                                showFeedback: !1,
                                            });
                                    },
                                    text: S.intl.string(v.default.tkIymA),
                                    fullWidth: !0,
                                }),
                        ],
                    }),
                ],
            })
        );
    return (0, r.jsx)("div", {
        "data-app-right-panel": !0,
        className: I.nE,
        children: (0, r.jsx)(l.Fmo, {
            children: null != e ? k() : M(),
        }),
    });
}

function P(e) {
    let { overallStatus: t, name: n, steps: i, isChosen: a } = e;
    return (0, r.jsxs)("div", {
        className: I.Wk,
        children: [
            (0, r.jsx)(D, {
                status: t,
                text: n,
            }),
            i.map((e, t) => (0, r.jsx)(x, C({}, e), t)),
            a &&
                (0, r.jsx)("div", {
                    className: I.MH,
                    children: (0, r.jsx)(l.EYj, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: S.intl.string(v.default.OEkrCx),
                    }),
                }),
        ],
    });
}

function D(e) {
    let { text: t, status: n } = e;
    return (0, r.jsxs)("div", {
        className: I.Km,
        children: [
            (0, r.jsx)(l.EYj, {
                variant: "text-md/semibold",
                color: "text-subtle",
                children: t,
            }),
            (0, r.jsx)(L, {
                status: n,
            }),
        ],
    });
}

function x(e) {
    let { status: t, text: n, description: i, learnMoreLink: a } = e;
    return (0, r.jsxs)("div", {
        className: I.jf,
        children: [
            (0, r.jsx)(L, {
                status: t,
            }),
            (0, r.jsxs)("div", {
                className: I.bc,
                children: [
                    (0, r.jsx)(l.EYj, {
                        variant: "text-md/medium",
                        children: n,
                    }),
                    null != i &&
                        (0, r.jsx)(l.EYj, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: i,
                        }),
                    null != a &&
                        (0, r.jsx)(l.QWc, {
                            textVariant: "text-sm/medium",
                            text: S.intl.string(S.t.hvVgAZ),
                            onClick: () => (0, p.A)(a),
                        }),
                ],
            }),
        ],
    });
}

function L(e) {
    let { status: t } = e,
        n = {
            size: "sm",
            className: I.I8,
        };
    switch (t) {
        case 0:
            return (0, r.jsx)(
                l.yr3,
                R(C({}, n), {
                    color: u.A.colors.ICON_FEEDBACK_POSITIVE,
                }),
            );
        case 1:
            return (0, r.jsx)(
                l.aXh,
                R(C({}, n), {
                    color: u.A.colors.ICON_FEEDBACK_CRITICAL,
                }),
            );
        case 2:
            return (0, r.jsx)(
                l.Uzd,
                R(C({}, n), {
                    color: u.A.colors.ICON_FEEDBACK_POSITIVE,
                }),
            );
        case 3:
            return (0, r.jsx)(
                l.id,
                R(C({}, n), {
                    color: u.A.colors.ICON_FEEDBACK_WARNING,
                }),
            );
        case 4:
            return (0, r.jsx)(
                l.PGe,
                R(C({}, n), {
                    color: u.A.colors.ICON_FEEDBACK_CRITICAL,
                }),
            );
    }
}
