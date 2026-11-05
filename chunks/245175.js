var l = n(945810);
let r = { OFF: "off", TOP_LEVEL_MENU_ITEM: "top_level_menu_item", SUBMENU: "submenu" },
    i = (0, l.mj)({
        name: "2026-09-try-display-name-style",
        kind: "user",
        defaultConfig: { placement: r.OFF },
        variations: { 0: { placement: r.OFF }, 1: { placement: r.TOP_LEVEL_MENU_ITEM }, 2: { placement: r.SUBMENU } },
    });
n.d(
    t,
    {},
    {
        fM: i,
        rA: function (e, t) {
            return Array.isArray(t) ? t.includes(e) : e === t;
        },
        yw: r,
    },
);
