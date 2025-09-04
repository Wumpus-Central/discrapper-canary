n.d(t, { Z: () => _ }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(20471),
    u = n(812206),
    m = n(835473),
    x = n(594190),
    h = n(989941),
    p = n(695346),
    f = n(449224),
    v = n(246992),
    b = n(451429),
    j = n(441900);
let g = [
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
function _() {
    let e = r.useRef(null),
        t = p.JG.useSetting(),
        [n, l] = r.useState(""),
        o = (0, s.e7)([x.ZP, f.Z], () => (0, h.Z)(x.ZP, f.Z)),
        _ = (0, m.q)(n),
        y = (0, s.Wu)([u.Z], () => {
            var e, t;
            return null !=
                (t =
                    null == _ || null == (e = _.linkedGames)
                        ? void 0
                        : e.map((e) => u.Z.getApplication(e.id)).filter((e) => null != e))
                ? t
                : [];
        }),
        { canStartAuthorization: C, startAuthorization: N } = (0, d.F)(_);
    return (0, a.jsxs)("div", {
        ref: e,
        className: i()(b.panel, j.panel),
        children: [
            (0, a.jsxs)("div", {
                className: j.container,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: "Receive DMs In Game",
                    }),
                    (0, a.jsx)(c.PhF, {
                        options: g,
                        isSelected: (e) => e === t,
                        select: p.JG.updateSetting,
                        popoutLayerContext: v.O$,
                        serialize: (e) => e.toString(),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: j.container,
                children: [
                    (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: "In-App Authorization",
                    }),
                    (0, a.jsx)(c.oil, {
                        value: n,
                        onChange: l,
                    }),
                    null != o && null != o.id
                        ? (0, a.jsx)(c.zxk, {
                              onClick: () => l(o.id),
                              variant: "primary",
                              text: "Use detected game: ".concat(o.name, " (").concat(o.id, ")"),
                          })
                        : null,
                    (0, a.jsxs)(c.Text, {
                        variant: "text-md/normal",
                        children: ["Application: ", null != _ ? _.name : "N/A"],
                    }),
                    null != y
                        ? (0, a.jsxs)(c.Text, {
                              variant: "text-md/normal",
                              children: [
                                  "Linked Games:",
                                  " ",
                                  y
                                      .map((e) => {
                                          var t;
                                          return (null == (t = (0, d.j)(_)) ? void 0 : t.id) === e.id
                                              ? "".concat(e.name, "*")
                                              : e.name;
                                      })
                                      .join(", "),
                              ],
                          })
                        : null,
                    (0, a.jsx)(c.zxk, {
                        disabled: !C,
                        onClick: N,
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                ],
            }),
        ],
    });
}
