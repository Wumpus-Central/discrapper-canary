n.d(t, { Z: () => C }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(524437),
    c = n(481060),
    d = n(384275),
    u = n(20471),
    m = n(812206),
    p = n(835473),
    h = n(594190),
    x = n(989941),
    f = n(695346),
    g = n(881998),
    b = n(449224),
    v = n(246992),
    j = n(451429),
    _ = n(441900);
let y = [
    {
        label: "Unset",
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
    },
    {
        label: "All",
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
    },
    {
        label: "Users With Game",
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
    },
    {
        label: "None",
        value: s.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
    },
];
function C() {
    let e = r.useRef(null),
        t = f.JG.useSetting(),
        [n, i] = r.useState(""),
        s = (0, o.e7)([h.ZP, b.Z], () => (0, x.Z)(h.ZP, b.Z)),
        C = (0, p.q)(n),
        S = (0, o.Wu)([m.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == C || null == (e = C.linkedGames)
                        ? void 0
                        : e.map((e) => m.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        E = (0, u.FG)(C, { allowedFlows: [u.ro.RPC] }),
        T = (0, u.FG)(C, { allowedFlows: [u.ro.WEB] }),
        O = (0, u.FG)(C),
        { canDeauthorize: N, deauthorize: P } = (function (e) {
            let t = (0, o.e7)([g.Z], () => g.Z.getNewestTokenForApplication(e)),
                n = r.useCallback(() => {
                    null != t && d.Z.delete(t.id);
                }, [t]);
            return {
                canDeauthorize: null != t,
                deauthorize: n,
            };
        })(null == C ? void 0 : C.id);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(j.panel, _.panel),
        children: [
            (0, a.jsxs)("div", {
                className: _.container,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Settings",
                    }),
                    (0, a.jsx)(c.PhF, {
                        label: "Receive DMs In Game",
                        options: y,
                        isSelected: (e) => e === t,
                        select: f.JG.updateSetting,
                        popoutLayerContext: v.O$,
                        serialize: (e) => e.toString(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: _.container,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Application",
                    }),
                    (0, a.jsx)(c.oil, {
                        label: "Application ID",
                        value: n,
                        onChange: i,
                    }),
                    null != s && null != s.id
                        ? (0, a.jsx)(c.Button, {
                              onClick: () => i(s.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(s.name, " (").concat(s.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != C ? C.name : "N/A"],
                    }),
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            S.length > 0
                                ? S.map((e) => {
                                      var t;
                                      return (null == (t = (0, u.ju)(C)) ? void 0 : t.id) === e.id
                                          ? "".concat(e.name, "*")
                                          : e.name;
                                  }).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: _.container,
                children: [
                    (0, a.jsx)(c.Heading, {
                        variant: "heading-lg/normal",
                        children: "Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !O.canStartAuthorization,
                        onClick: O.startAuthorization,
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
                        disabled: !E.canStartAuthorization,
                        onClick: E.startAuthorization,
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !T.canStartAuthorization,
                        onClick: T.startAuthorization,
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !N,
                        onClick: P,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
