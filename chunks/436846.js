n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    l = n(481060),
    c = n(706454),
    s = n(86419),
    u = n(881410),
    d = n(388032),
    f = n(959183);
function g(e) {
    let { widget: t } = e,
        n = (0, s.Gv)(t.type),
        i = 1 === n,
        g =
            (0, o.e7)([c.default], () => ["en-US", "en-GB"].includes(c.default.locale)) && i
                ? d.intl.string(d.t["3FdPBQ"])
                : d.intl.format(d.t.W8K2GB, { maxGames: n });
    return (0, r.jsxs)("div", {
        className: a()(f.container, i && f.singleGameWidget),
        children: [
            i &&
                (0, r.jsx)(u.wl, {
                    widget: t,
                    widgetType: t.type,
                }),
            (0, r.jsx)(l.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                children: g,
            }),
        ],
    });
}
