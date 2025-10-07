n.d(t, { Z: () => C }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(384275),
    u = n(20471),
    m = n(812206),
    p = n(835473),
    h = n(594190),
    x = n(989941),
    f = n(695346),
    b = n(881998),
    g = n(449224),
    v = n(246992),
    j = n(451429),
    _ = n(441900);
let y = [
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
function C() {
    let e = r.useRef(null),
        t = f.JG.useSetting(),
        [n, i] = r.useState(""),
        o = (0, s.e7)([h.ZP, g.Z], () => (0, x.Z)(h.ZP, g.Z)),
        C = (0, p.q)(n),
        E = (0, s.Wu)([m.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == C || null == (e = C.linkedGames)
                        ? void 0
                        : e.map((e) => m.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        S = (0, u.FG)(C, { allowedFlows: [u.ro.RPC] }),
        T = (0, u.FG)(C, { allowedFlows: [u.ro.WEB] }),
        O = (0, u.FG)(C),
        { canDeauthorize: N, deauthorize: P } = (function (e) {
            let t = (0, s.e7)([b.Z], () => b.Z.getNewestTokenForApplication(e)),
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
                    (0, a.jsx)(c.X6q, {
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
                    (0, a.jsx)(c.X6q, {
                        variant: "heading-lg/normal",
                        children: "Application",
                    }),
                    (0, a.jsx)(c.oil, {
                        label: "Application ID",
                        value: n,
                        onChange: i,
                    }),
                    null != o && null != o.id
                        ? (0, a.jsx)(c.zxk, {
                              onClick: () => i(o.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(o.name, " (").concat(o.id, ")"),
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
                            E.length > 0
                                ? E.map((e) => {
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
                    (0, a.jsx)(c.X6q, {
                        variant: "heading-lg/normal",
                        children: "Authorization",
                    }),
                    (0, a.jsx)(c.zxk, {
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
                    (0, a.jsx)(c.zxk, {
                        disabled: !S.canStartAuthorization,
                        onClick: S.startAuthorization,
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(c.zxk, {
                        disabled: !T.canStartAuthorization,
                        onClick: T.startAuthorization,
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(c.zxk, {
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
