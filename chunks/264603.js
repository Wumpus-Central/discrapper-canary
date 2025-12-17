n.d(t, { Z: () => O }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(524437),
    c = n(199849),
    d = n(481060),
    u = n(384275),
    m = n(100527),
    p = n(906732),
    h = n(407089),
    f = n(524995),
    x = n(812206),
    b = n(835473),
    g = n(594190),
    v = n(989941),
    j = n(695346),
    y = n(881998),
    C = n(449224),
    _ = n(246992),
    S = n(663618),
    E = n(17827);
let T = [
    {
        label: "Unset",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
    },
    {
        label: "All",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
    },
    {
        label: "Users With Game",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
    },
    {
        label: "None",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
    },
];
function O() {
    let e = r.useRef(null),
        { analyticsLocations: t } = (0, p.ZP)(m.Z.DEV_TOOLS),
        n = j.JG.useSetting(),
        [i, o] = r.useState(""),
        O = (0, s.e7)([g.ZP, C.Z], () => (0, v.Z)(g.ZP, C.Z)),
        N = (0, b.q)(i),
        w = (0, s.Wu)([x.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == N || null == (e = N.linkedGames)
                        ? void 0
                        : e.map((e) => x.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        P = (0, f.FG)(N, { allowedFlows: [f.ro.RPC] }),
        I = (0, f.FG)(N, { allowedFlows: [f.ro.WEB] }),
        k = (0, f.FG)(N),
        { canDeauthorize: R, deauthorize: A } = (function (e) {
            let t = (0, s.e7)([y.default], () => y.default.getNewestTokenForApplication(e)),
                n = r.useCallback(() => {
                    null != t && u.Z.delete(t.id);
                }, [t]);
            return {
                canDeauthorize: null != t,
                deauthorize: n,
            };
        })(null == N ? void 0 : N.id);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(S.panel, E.panel),
        children: [
            (0, a.jsxs)("div", {
                className: E.container,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/normal",
                        children: "Settings",
                    }),
                    (0, a.jsx)(c.B6, {
                        label: "Receive DMs In Game",
                        options: T,
                        isSelected: (e) => e === n,
                        select: j.JG.updateSetting,
                        popoutLayerContext: _.O$,
                        serialize: (e) => e.toString(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: E.container,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/normal",
                        children: "Application",
                    }),
                    (0, a.jsx)(d.oil, {
                        label: "Application ID",
                        value: i,
                        onChange: o,
                    }),
                    null != O && null != O.id
                        ? (0, a.jsx)(d.Button, {
                              onClick: () => o(O.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(O.name, " (").concat(O.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != N ? N.name : "N/A"],
                    }),
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            w.length > 0
                                ? w
                                      .map((e) => {
                                          var t;
                                          return (null == (t = (0, h.r)(N)) ? void 0 : t.id) === e.id
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
                className: E.container,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/normal",
                        children: "Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !k.canStartAuthorization,
                        onClick: () => k.startAuthorization({ analyticsLocations: t }),
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
                        onClick: () => P.startAuthorization({ analyticsLocations: t }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !I.canStartAuthorization,
                        onClick: () => I.startAuthorization({ analyticsLocations: t }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !R,
                        onClick: A,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
