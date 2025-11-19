n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(86419),
    c = n(881410),
    s = n(388032),
    u = n(773307);
function d(e) {
    let { widget: t } = e,
        n = (0, o.Gv)(t.type),
        i = 1 === n,
        d = i ? s.intl.string(s.t["3FdPBT"]) : s.intl.format(s.t.W8K2GH, { maxGames: n });
    return (0, r.jsxs)("div", {
        className: a()(u.container, i && u.singleGameWidget),
        children: [
            i &&
                (0, r.jsx)(c.wl, {
                    widget: t,
                    widgetType: t.type,
                }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: d,
            }),
        ],
    });
}
