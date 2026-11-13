var l = t(945810);
let r = { OFF: "off", TOP_LEVEL_MENU_ITEM: "top_level_menu_item", SUBMENU: "submenu" },
    i = (0, l.mj)({
        name: "2026-09-try-display-name-style",
        kind: "user",
        defaultConfig: { placement: r.OFF },
        variations: { 0: { placement: r.OFF }, 1: { placement: r.TOP_LEVEL_MENU_ITEM }, 2: { placement: r.SUBMENU } },
    });
t.d(
    n,
    {},
    {
        fM: i,
        rA: function (e, n) {
            return Array.isArray(n) ? n.includes(e) : e === n;
        },
        yw: r,
    },
);
