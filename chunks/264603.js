n.d(t, { Z: () => E }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    o = n(524437),
    c = n(199849),
    d = n(481060),
    u = n(384275),
    m = n(407089),
    p = n(524995),
    h = n(812206),
    x = n(835473),
    f = n(594190),
    g = n(989941),
    b = n(695346),
    v = n(881998),
    j = n(449224),
    _ = n(246992),
    y = n(451429),
    C = n(441900);
let S = [
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
function E() {
    let e = l.useRef(null),
        t = b.JG.useSetting(),
        [n, r] = l.useState(""),
        o = (0, s.e7)([f.ZP, j.Z], () => (0, g.Z)(f.ZP, j.Z)),
        E = (0, x.q)(n),
        O = (0, s.Wu)([h.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == E || null == (e = E.linkedGames)
                        ? void 0
                        : e.map((e) => h.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        N = (0, p.F)(E, { allowedFlows: [p.r.RPC] }),
        T = (0, p.F)(E, { allowedFlows: [p.r.WEB] }),
        P = (0, p.F)(E),
        { canDeauthorize: I, deauthorize: w } = (function (e) {
            let t = (0, s.e7)([v.default], () => v.default.getNewestTokenForApplication(e)),
                n = l.useCallback(() => {
                    null != t && u.Z.delete(t.id);
                }, [t]);
            return {
                canDeauthorize: null != t,
                deauthorize: n,
            };
        })(null == E ? void 0 : E.id);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(y.panel, C.panel),
        children: [
            (0, a.jsxs)("div", {
                className: C.container,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/normal",
                        children: "Settings",
                    }),
                    (0, a.jsx)(c.B6, {
                        label: "Receive DMs In Game",
                        options: S,
                        isSelected: (e) => e === t,
                        select: b.JG.updateSetting,
                        popoutLayerContext: _.O$,
                        serialize: (e) => e.toString(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: C.container,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/normal",
                        children: "Application",
                    }),
                    (0, a.jsx)(d.oil, {
                        label: "Application ID",
                        value: n,
                        onChange: r,
                    }),
                    null != o && null != o.id
                        ? (0, a.jsx)(d.Button, {
                              onClick: () => r(o.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(o.name, " (").concat(o.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != E ? E.name : "N/A"],
                    }),
                    (0, a.jsxs)(d.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            O.length > 0
                                ? O.map((e) => {
                                      var t;
                                      return (null == (t = (0, m.r)(E)) ? void 0 : t.id) === e.id
                                          ? "".concat(e.name, "*")
                                          : e.name;
                                  }).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: C.container,
                children: [
                    (0, a.jsx)(d.Heading, {
                        variant: "heading-lg/normal",
                        children: "Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !P.canStartAuthorization,
                        onClick: () => P.startAuthorization(),
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
                        disabled: !N.canStartAuthorization,
                        onClick: () => N.startAuthorization(),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !T.canStartAuthorization,
                        onClick: () => T.startAuthorization(),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: !I,
                        onClick: w,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
