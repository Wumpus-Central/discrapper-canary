n.d(t, { Z: () => T }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    o = n(524437),
    c = n(199849),
    d = n(481060),
    u = n(384275),
    m = n(100527),
    p = n(906732),
    h = n(407089),
    x = n(524995),
    f = n(812206),
    g = n(835473),
    b = n(594190),
    v = n(989941),
    j = n(695346),
    _ = n(881998),
    y = n(449224),
    C = n(246992),
    S = n(451429),
    E = n(441900);
let N = [
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
function T() {
    let e = l.useRef(null),
        { analyticsLocations: t } = (0, p.ZP)(m.Z.DEV_TOOLS),
        n = j.JG.useSetting(),
        [r, o] = l.useState(""),
        T = (0, s.e7)([b.ZP, y.Z], () => (0, v.Z)(b.ZP, y.Z)),
        O = (0, g.q)(r),
        P = (0, s.Wu)([f.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == O || null == (e = O.linkedGames)
                        ? void 0
                        : e.map((e) => f.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        I = (0, x.F)(O, { allowedFlows: [x.r.RPC] }),
        w = (0, x.F)(O, { allowedFlows: [x.r.WEB] }),
        k = (0, x.F)(O),
        { canDeauthorize: R, deauthorize: A } = (function (e) {
            let t = (0, s.e7)([_.default], () => _.default.getNewestTokenForApplication(e)),
                n = l.useCallback(() => {
                    null != t && u.Z.delete(t.id);
                }, [t]);
            return {
                canDeauthorize: null != t,
                deauthorize: n,
            };
        })(null == O ? void 0 : O.id);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(S.panel, E.panel),
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
                        options: N,
                        isSelected: (e) => e === n,
                        select: j.JG.updateSetting,
                        popoutLayerContext: C.O$,
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
                        value: r,
                        onChange: o,
                    }),
                    null != T && null != T.id
                        ? (0, a.jsx)(d.Button, {
                              onClick: () => o(T.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(T.name, " (").concat(T.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != O ? O.name : "N/A"],
                    }),
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            P.length > 0
                                ? P.map((e) => {
                                      var t;
                                      return (null == (t = (0, h.r)(O)) ? void 0 : t.id) === e.id
                                          ? "".concat(e.name, "*")
                                          : e.name;
                                  }).join(", ")
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
                        disabled: !I.canStartAuthorization,
                        onClick: () => I.startAuthorization({ analyticsLocations: t }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !w.canStartAuthorization,
                        onClick: () => w.startAuthorization({ analyticsLocations: t }),
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
