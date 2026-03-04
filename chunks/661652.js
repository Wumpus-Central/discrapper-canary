n.d(t, { A: () => I });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    o = n(873298),
    d = n(397927),
    c = n(824552),
    u = n(793574),
    m = n(688810),
    h = n(975460),
    p = n(362490),
    x = n(487431),
    g = n(587895),
    _ = n(429913),
    f = n(15285),
    b = n(905552),
    v = n(253932),
    j = n(546183),
    A = n(134861),
    C = n(157257),
    T = n(985018),
    y = n(271469),
    S = n(661251),
    E = n(508474);
let N = [
    { id: "unset", label: "Unset", value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: o.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function I() {
    var e;
    let t,
        n,
        s = i.useRef(null),
        { analyticsLocations: o } = (0, m.Ay)(u.A.DEV_TOOLS),
        I = v.TA.useSetting(),
        [k, R] = i.useState(""),
        O = (0, r.bG)([f.Ay, C.A], () => (0, b.A)(f.Ay, C.A)),
        w = (0, _.h)(k),
        D = (0, h.g)(w),
        M = (0, r.yK)([g.A], () => w?.linkedGames?.map((e) => g.A.getApplication(e.id)).filter((e) => null != e) ?? []),
        P = (0, p.RD)(w, { allowedFlows: [p._M.RPC], debug: !0 }),
        U = (0, p.RD)(w, { allowedFlows: [p._M.WEB], debug: !0 }),
        L = (0, r.bG)([A.A], () => null != D && A.A.isConnected(D.id)),
        B = (0, p.RD)(w, { debug: !0 }),
        { canDeauthorize: G, deauthorize: F } =
            ((e = w?.id),
            (t = (0, r.bG)([j.default], () => j.default.getNewestTokenForApplication(e))),
            (n = i.useCallback(() => {
                null != t && c.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: n });
    return (0, a.jsxs)("div", {
        ref: s,
        className: l()(S.nd, E.n),
        children: [
            (0, a.jsxs)("div", {
                className: E.k,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-lg/normal", children: "Settings" }),
                    (0, a.jsx)(d.l6P, {
                        label: "Receive DMs In Game",
                        options: N,
                        value: I,
                        onSelectionChange: v.TA.updateSetting,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: E.k,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-lg/normal", children: "Application" }),
                    (0, a.jsx)(d.ksK, { label: "Application ID", value: k, onChange: R }),
                    null != O && null != O.id
                        ? (0, a.jsx)(d.Button, {
                              onClick: () => R(O.id),
                              variant: "primary",
                              text: `Use detected game: ${O.name} (${O.id})`,
                          })
                        : null,
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != w ? w.name : "N/A"],
                    }),
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            M.length > 0
                                ? M.map((e) => ((0, h.t)(w)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: E.k,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, a.jsx)(x.VT, {
                        overallStatus: P.debug.isSubscribedToAuthorizeRequest
                            ? x.nW.OVERALL_GOOD
                            : L
                              ? x.nW.WARN
                              : x.nW.OVERALL_BAD,
                        name: T.intl.string(y.default.AGLx00),
                        steps: [
                            {
                                status: L ? x.nW.GOOD : x.nW.BAD,
                                text: T.intl.string(y.default.kxF9br),
                                description: L ? null : T.intl.string(y.default.PFxxJa),
                                learnMoreLink: L
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: P.debug.isSubscribedToAuthorizeRequest ? x.nW.GOOD : L ? x.nW.WARN : x.nW.BAD,
                                text: T.intl.string(y.default.S94dzs),
                                description:
                                    P.debug.isSubscribedToAuthorizeRequest || !L
                                        ? null
                                        : T.intl.string(y.default.aTULMB),
                                learnMoreLink:
                                    P.debug.isSubscribedToAuthorizeRequest || !L
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: B.chosenFlow === p._M.RPC,
                    }),
                    (0, a.jsx)(x.VT, {
                        overallStatus: U.debug.hasConnectionEntrypointUrl ? x.nW.OVERALL_GOOD : x.nW.OVERALL_BAD,
                        name: T.intl.string(y.default.K3ObrU),
                        steps: [
                            {
                                status: U.debug.hasConnectionEntrypointUrl ? x.nW.GOOD : x.nW.BAD,
                                text: T.intl.string(y.default["8a7IrV"]),
                                description: U.debug.hasConnectionEntrypointUrl
                                    ? T.intl.formatToPlainString(y.default["9iLeL2"], {
                                          url: U.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: B.chosenFlow === p._M.WEB,
                    }),
                    (0, a.jsx)(x.Sy, {
                        status: B.hasAlreadyLinked ? x.nW.OVERALL_GOOD : x.nW.OVERALL_BAD,
                        text: T.intl.string(T.t["Vu/zmQ"]),
                    }),
                    0 === B.debug.validFlows.length &&
                        (0, a.jsx)(d.Text, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: T.intl.string(y.default.eg0mNa),
                        }),
                    (0, a.jsx)(d.Button, {
                        disabled: !B.canStartAuthorization,
                        onClick: () => B.startAuthorization({ analyticsLocations: o }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !P.canStartAuthorization,
                        onClick: () => P.startAuthorization({ analyticsLocations: o }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !U.canStartAuthorization,
                        onClick: () => U.startAuthorization({ analyticsLocations: o }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !G,
                        onClick: F,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
