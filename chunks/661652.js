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
    x = n(362490),
    p = n(487431),
    g = n(587895),
    f = n(429913),
    v = n(15285),
    _ = n(905552),
    b = n(253932),
    j = n(546183),
    A = n(134861),
    C = n(157257),
    y = n(985018),
    S = n(311350),
    E = n(505206),
    T = n(11039);
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
        I = b.TA.useSetting(),
        [k, O] = i.useState(""),
        R = (0, r.bG)([v.Ay, C.A], () => (0, _.A)(v.Ay, C.A)),
        w = (0, f.h)(k),
        D = (0, h.g)(w),
        M = (0, r.yK)([g.A], () => w?.linkedGames?.map((e) => g.A.getApplication(e.id)).filter((e) => null != e) ?? []),
        P = (0, x.RD)(w, { allowedFlows: [x._M.RPC], debug: !0 }),
        L = (0, x.RD)(w, { allowedFlows: [x._M.WEB], debug: !0 }),
        U = (0, r.bG)([A.A], () => null != D && A.A.isConnected(D.id)),
        B = (0, x.RD)(w, { debug: !0 }),
        { canDeauthorize: G, deauthorize: F } =
            ((e = w?.id),
            (t = (0, r.bG)([j.default], () => j.default.getNewestTokenForApplication(e))),
            (n = i.useCallback(() => {
                null != t && c.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: n });
    return (0, a.jsxs)("div", {
        ref: s,
        className: l()(E.nd, T.n),
        children: [
            (0, a.jsxs)("div", {
                className: T.k,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-lg/normal", children: "Settings" }),
                    (0, a.jsx)(d.l6P, {
                        label: "Receive DMs In Game",
                        options: N,
                        value: I,
                        onSelectionChange: b.TA.updateSetting,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: T.k,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-lg/normal", children: "Application" }),
                    (0, a.jsx)(d.ksK, { label: "Application ID", value: k, onChange: O }),
                    null != R && null != R.id
                        ? (0, a.jsx)(d.Button, {
                              onClick: () => O(R.id),
                              variant: "primary",
                              text: `Use detected game: ${R.name} (${R.id})`,
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
                className: T.k,
                children: [
                    (0, a.jsx)(d.Heading, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, a.jsx)(p.VT, {
                        overallStatus: P.debug.isSubscribedToAuthorizeRequest
                            ? p.nW.OVERALL_GOOD
                            : U
                              ? p.nW.WARN
                              : p.nW.OVERALL_BAD,
                        name: y.intl.string(S.default.AGLx00),
                        steps: [
                            {
                                status: U ? p.nW.GOOD : p.nW.BAD,
                                text: y.intl.string(S.default.kxF9br),
                                description: U ? null : y.intl.string(S.default.PFxxJa),
                                learnMoreLink: U
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: P.debug.isSubscribedToAuthorizeRequest ? p.nW.GOOD : U ? p.nW.WARN : p.nW.BAD,
                                text: y.intl.string(S.default.S94dzs),
                                description:
                                    P.debug.isSubscribedToAuthorizeRequest || !U
                                        ? null
                                        : y.intl.string(S.default.aTULMB),
                                learnMoreLink:
                                    P.debug.isSubscribedToAuthorizeRequest || !U
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: B.chosenFlow === x._M.RPC,
                    }),
                    (0, a.jsx)(p.VT, {
                        overallStatus: L.debug.hasConnectionEntrypointUrl ? p.nW.OVERALL_GOOD : p.nW.OVERALL_BAD,
                        name: y.intl.string(S.default.K3ObrU),
                        steps: [
                            {
                                status: L.debug.hasConnectionEntrypointUrl ? p.nW.GOOD : p.nW.BAD,
                                text: y.intl.string(S.default["8a7IrV"]),
                                description: L.debug.hasConnectionEntrypointUrl
                                    ? y.intl.formatToPlainString(S.default["9iLeL2"], {
                                          url: L.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: B.chosenFlow === x._M.WEB,
                    }),
                    (0, a.jsx)(p.Sy, {
                        status: B.hasAlreadyLinked ? p.nW.OVERALL_GOOD : p.nW.OVERALL_BAD,
                        text: y.intl.string(y.t["Vu/zmQ"]),
                    }),
                    0 === B.debug.validFlows.length &&
                        (0, a.jsx)(d.Text, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: y.intl.string(S.default.eg0mNa),
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
                        disabled: !L.canStartAuthorization,
                        onClick: () => L.startAuthorization({ analyticsLocations: o }),
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
