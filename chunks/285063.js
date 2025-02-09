n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(916752),
    s = n(642367);
function o(e) {
    let { node: t } = e,
        n = (0, a.Z)(t);
    return (0, i.jsx)(r.ua7, {
        text: t.full,
        tooltipClassName: s.timestampTooltip,
        children: (e) =>
            (0, i.jsx)('span', {
                ...e,
                className: s.timestamp,
                children: n
            })
    });
}
