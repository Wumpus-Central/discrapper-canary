n.d(t, { U: () => o });
var a = n(200651);
n(192379);
var i = n(481060),
    l = n(542094),
    s = n(388032),
    c = n(261529);
function o(e) {
    let { action: t, onClick: n } = e,
        o = t === l.JS.JOIN ? s.intl.string(s.t['4i2vj4']) : s.intl.string(s.t['R/FK4O']),
        r = t === l.JS.JOIN ? i.zxk.Colors.PRIMARY : i.zxk.Colors.RED;
    return (0, a.jsx)('div', {
        className: c.activityOverlay,
        children: (0, a.jsx)(i.zxk, {
            className: c.actionButton,
            onClick: n,
            size: i.zxk.Sizes.MEDIUM,
            color: r,
            children: o
        })
    });
}
