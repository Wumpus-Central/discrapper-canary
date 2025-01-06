n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(338220);
function a(e) {
    let { children: t, disabled: n, disabledTooltip: a, id: s, ...o } = e;
    return (0, i.jsx)(r.TooltipContainer, {
        text: n ? a : null,
        children: (0, i.jsx)(r.TabBar.Item, {
            className: l.tabBarItem,
            id: s,
            disabled: n,
            ...o,
            children: t
        })
    });
}
