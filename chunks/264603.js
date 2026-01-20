n.d(t, { Z: () => E }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(384275),
    u = n(100527),
    m = n(906732),
    p = n(407089),
    h = n(524995),
    f = n(812206),
    b = n(835473),
    x = n(594190),
    g = n(989941),
    v = n(695346),
    j = n(881998),
    y = n(449224),
    C = n(663618),
    _ = n(17827);
let S = [
    {
        id: "unset",
        label: "Unset",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET,
    },
    {
        id: "all",
        label: "All",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
    },
    {
        id: "usersWithGame",
        label: "Users With Game",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
    },
    {
        id: "none",
        label: "None",
        value: o.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
    },
];
function E() {
    let e = r.useRef(null),
        { analyticsLocations: t } = (0, m.ZP)(u.Z.DEV_TOOLS),
        n = v.JG.useSetting(),
        [i, o] = r.useState(""),
        E = (0, s.e7)([x.ZP, y.Z], () => (0, g.Z)(x.ZP, y.Z)),
        T = (0, b.q)(i),
        O = (0, s.Wu)([f.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == T || null == (e = T.linkedGames)
                        ? void 0
                        : e.map((e) => f.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        N = (0, h.FG)(T, { allowedFlows: [h.ro.RPC] }),
        P = (0, h.FG)(T, { allowedFlows: [h.ro.WEB] }),
        w = (0, h.FG)(T),
        { canDeauthorize: I, deauthorize: k } = (function (e) {
            let t = (0, s.e7)([j.default], () => j.default.getNewestTokenForApplication(e)),
                n = r.useCallback(() => {
                    null != t && d.Z.delete(t.id);
                }, [t]);
            return {
                canDeauthorize: null != t,
                deauthorize: n,
            };
        })(null == T ? void 0 : T.id);
    return (0, a.jsxs)("div", {
        ref: e,
        className: l()(C.panel, _.panel),
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
                        options: S,
                        value: n,
                        onSelectionChange: v.JG.updateSetting,
                        selectionMode: "single",
                        fullWidth: !0,
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
                        value: i,
                        onChange: o,
                    }),
                    null != E && null != E.id
                        ? (0, a.jsx)(c.Button, {
                              onClick: () => o(E.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(E.name, " (").concat(E.id, ")"),
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
                            O.length > 0
                                ? O.map((e) => {
                                      var t;
                                      return (null == (t = (0, p.r)(T)) ? void 0 : t.id) === e.id
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
                        disabled: !w.canStartAuthorization,
                        onClick: () => w.startAuthorization({ analyticsLocations: t }),
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
                        disabled: !N.canStartAuthorization,
                        onClick: () => N.startAuthorization({ analyticsLocations: t }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !P.canStartAuthorization,
                        onClick: () => P.startAuthorization({ analyticsLocations: t }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, a.jsx)(c.Button, {
                        disabled: !I,
                        onClick: k,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
        ],
    });
}
