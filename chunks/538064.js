var a = t(73153),
    i = t(265059);
function d(p) {
    a.h.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: p });
}
t.d(
    s,
    {},
    {
        Ft: function (p, s) {
            d({ displayTools: !0, lastOpenTabId: p, lastOpenSubTabId: s });
        },
        Jt: d,
        eY: function () {
            a.h.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
        },
        pf: function () {
            d({ displayTools: !i.A.displayTools });
        },
    },
);
