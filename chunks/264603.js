n.d(t, { Z: () => S }), n(388685);
var a = n(951288),
    i = n(647438),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(384275),
    u = n(758677),
    m = n(535139),
    p = n(812206),
    h = n(835473),
    x = n(594190),
    g = n(989941),
    f = n(695346),
    b = n(881998),
    v = n(449224),
    j = n(246992),
    _ = n(451429),
    y = n(441900);
let C = [
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
function S() {
    let e = i.useRef(null),
        t = f.JG.useSetting(),
        [n, r] = i.useState(""),
        o = (0, s.e7)([x.ZP, v.Z], () => (0, g.Z)(x.ZP, v.Z)),
        S = (0, h.q)(n),
        E = (0, s.Wu)([p.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == S || null == (e = S.linkedGames)
                        ? void 0
                        : e.map((e) => p.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        T = (0, m.F)(S, { allowedFlows: [m.r.RPC] }),
        O = (0, m.F)(S, { allowedFlows: [m.r.WEB] }),
        N = (0, m.F)(S),
        { canDeauthorize: P, deauthorize: I } = (function (e) {
            let t = (0, s.e7)([b.default], () => b.default.getNewestTokenForApplication(e)),
                n = i.useCallback(() => {
                    null != t && d.Z.delete(t.id);
                }, [t]);
            return {
                canDeauthorize: null != t,
                deauthorize: n,
            };
        })(null == S ? void 0 : S.id);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(_.panel, y.panel),
        children: [
            (0, a.jsxs)("div", {
                className: y.container,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Settings",
                    }),
                    (0, a.jsx)(c.PhF, {
                        label: "Receive DMs In Game",
                        options: C,
                        isSelected: (e) => e === t,
                        select: f.JG.updateSetting,
                        popoutLayerContext: j.O$,
                        serialize: (e) => e.toString(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: y.container,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Application",
                    }),
                    (0, a.jsx)(c.oil, {
                        label: "Application ID",
                        value: n,
                        onChange: r,
                    }),
                    null != o && null != o.id
                        ? (0, a.jsx)(c.Button, {
                              onClick: () => r(o.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(o.name, " (").concat(o.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != S ? S.name : "N/A"],
                    }),
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            E.length > 0
                                ? E.map((e) => {
                                      var t;
                                      return (null == (t = (0, u.j)(S)) ? void 0 : t.id) === e.id
                                          ? "".concat(e.name, "*")
                                          : e.name;
                                  }).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: y.container,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !N.canStartAuthorization,
                        onClick: N.startAuthorization,
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !T.canStartAuthorization,
                        onClick: T.startAuthorization,
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !O.canStartAuthorization,
                        onClick: O.startAuthorization,
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !P,
                        onClick: I,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
