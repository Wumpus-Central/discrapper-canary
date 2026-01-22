n.d(t, { A: () => S }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(873298),
    c = n(397927),
    d = n(824552),
    u = n(793574),
    m = n(688810),
    p = n(975460),
    h = n(362490),
    f = n(587895),
    x = n(429913),
    b = n(15285),
    g = n(905552),
    v = n(253932),
    j = n(546183),
    y = n(157257),
    _ = n(661251),
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
        i = l.useRef(null),
        { analyticsLocations: o } = (0, m.Ay)(u.A.DEV_TOOLS),
        S = v.TA.useSetting(),
        [O, E] = l.useState(""),
        N = (0, s.bG)([b.Ay, y.A], () => (0, g.A)(b.Ay, y.A)),
        T = (0, x.h)(O),
        I = (0, s.yK)([f.A], () => {
            var e, t;
            return null !=
                (e =
                    null == T || null == (t = T.linkedGames)
                        ? void 0
                        : t.map((e) => f.A.getApplication(e.id)).filter((e) => null != e))
                ? e
                : [];
        }),
        w = (0, h.RD)(T, { allowedFlows: [h._M.RPC] }),
        k = (0, h.RD)(T, { allowedFlows: [h._M.WEB] }),
        P = (0, h.RD)(T),
        { canDeauthorize: R, deauthorize: D } =
            ((e = null == T ? void 0 : T.id),
            (t = (0, s.bG)([j.default], () => j.default.getNewestTokenForApplication(e))),
            (n = l.useCallback(() => {
                null != t && d.A.delete(t.id);
            }, [t])),
            {
                canDeauthorize: null != t,
                deauthorize: n,
            });
    return (0, a.jsxs)("div", {
        ref: i,
        className: r()(_.nd, A.n),
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
                    null != N && null != N.id
                        ? (0, a.jsx)(c.Button, {
                              onClick: () => E(N.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(N.name, " (").concat(N.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != T ? T.name : "N/A"],
                    }),
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            I.length > 0
                                ? I.map((e) => {
                                      var t;
                                      return (null == (t = (0, p.t)(T)) ? void 0 : t.id) === e.id
                                          ? "".concat(e.name, "*")
                                          : e.name;
                                  }).join(", ")
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
                        onClick: () => P.startAuthorization({ analyticsLocations: o }),
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
                        disabled: !w.canStartAuthorization,
                        onClick: () => w.startAuthorization({ analyticsLocations: o }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !k.canStartAuthorization,
                        onClick: () => k.startAuthorization({ analyticsLocations: o }),
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
