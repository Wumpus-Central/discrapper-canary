a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(873298),
    o = a(534514),
    d = a(691885),
    c = a(253932),
    u = a(505206),
    m = a(11039);
let h = [
    { id: "unset", label: "Unset", value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: r.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function p() {
    let e = l.useRef(null),
        t = c.TA.useSetting();
    return (0, n.jsx)("div", {
        ref: e,
        className: s()(u.nd, m.n),
        children: (0, n.jsxs)("div", {
            className: m.k,
            children: [
                (0, n.jsx)(o.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, n.jsx)(d.l, {
                    label: "Receive DMs In Game",
                    options: h,
                    value: t,
                    onSelectionChange: c.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
