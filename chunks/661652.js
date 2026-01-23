n.d(t, {
    A: () => S,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(311907),
    o = n(873298),
    c = n(397927),
    d = n(824552),
    u = n(793574),
    m = n(688810),
    p = n(975460),
    h = n(362490),
    x = n(587895),
    g = n(429913),
    f = n(15285),
    b = n(905552),
    v = n(253932),
    j = n(546183),
    _ = n(157257),
    y = n(661251),
    A = n(508474);
let C = [
    {
        id: "unset",
        label: "Unset",
        value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
    },
    {
        id: "all",
        label: "All",
        value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
    },
    {
        id: "usersWithGame",
        label: "Users With Game",
        value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
    },
    {
        id: "none",
        label: "None",
        value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
    },
];

function S() {
    var e;
    let t,
        n,
        r = l.useRef(null),
        { analyticsLocations: o } = (0, m.Ay)(u.A.DEV_TOOLS),
        S = v.TA.useSetting(),
        [O, E] = l.useState(""),
        T = (0, s.bG)([f.Ay, _.A], () => (0, b.A)(f.Ay, _.A)),
        N = (0, g.h)(O),
        w = (0, s.yK)([x.A], () => {
            var e, t;
            return null !=
                (e =
                    null == N || null == (t = N.linkedGames)
                        ? void 0
                        : t.map((e) => x.A.getApplication(e.id)).filter((e) => null != e))
                ? e
                : [];
        }),
        I = (0, h.RD)(N, {
            allowedFlows: [h._M.RPC],
        }),
        k = (0, h.RD)(N, {
            allowedFlows: [h._M.WEB],
        }),
        P = (0, h.RD)(N),
        { canDeauthorize: R, deauthorize: D } =
            ((e = null == N ? void 0 : N.id),
            (t = (0, s.bG)([j.default], () => j.default.getNewestTokenForApplication(e))),
            (n = l.useCallback(() => {
                null != t && d.A.delete(t.id);
            }, [t])),
            {
                canDeauthorize: null != t,
                deauthorize: n,
            });
    return (0, a.jsxs)("div", {
        ref: r,
        className: i()(y.nd, A.n),
        children: [
            (0, a.jsxs)("div", {
                className: A.k,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Settings",
                    }),
                    (0, a.jsx)(c.l6P, {
                        label: "Receive DMs In Game",
                        options: C,
                        value: S,
                        onSelectionChange: v.TA.updateSetting,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: A.k,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Application",
                    }),
                    (0, a.jsx)(c.ksK, {
                        label: "Application ID",
                        value: O,
                        onChange: E,
                    }),
                    null != T && null != T.id
                        ? (0, a.jsx)(c.Button, {
                              onClick: () => E(T.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(T.name, " (").concat(T.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != N ? N.name : "N/A"],
                    }),
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            w.length > 0
                                ? w
                                      .map((e) => {
                                          var t;
                                          return (null == (t = (0, p.t)(N)) ? void 0 : t.id) === e.id
                                              ? "".concat(e.name, "*")
                                              : e.name;
                                      })
                                      .join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: A.k,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !P.canStartAuthorization,
                        onClick: () =>
                            P.startAuthorization({
                                analyticsLocations: o,
                            }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !I.canStartAuthorization,
                        onClick: () =>
                            I.startAuthorization({
                                analyticsLocations: o,
                            }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !k.canStartAuthorization,
                        onClick: () =>
                            k.startAuthorization({
                                analyticsLocations: o,
                            }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !R,
                        onClick: D,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
