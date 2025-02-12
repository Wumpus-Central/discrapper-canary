n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(926357);
function s(e) {
    let { children: t, disabled: n, disabledTooltip: s, id: a, ...o } = e;
    return (0, i.jsx)(r.DY3, {
        text: n ? s : null,
        children: (0, i.jsx)(r.njP.Item, {
            className: l.tabBarItem,
            id: a,
            disabled: n,
            ...o,
            children: t
        })
    });
}
