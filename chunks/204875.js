n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(338220);
function s(e) {
    let { children: t, disabled: n, disabledTooltip: s, id: a, ...o } = e;
    return (0, i.jsx)(r.TooltipContainer, {
        text: n ? s : null,
        children: (0, i.jsx)(r.TabBar.Item, {
            className: l.tabBarItem,
            id: a,
            disabled: n,
            ...o,
            children: t
        })
    });
}
