n.d(t, {
    U: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    l = n(542094),
    s = n(388032),
    c = n(690030);
function o(e) {
    let { action: t, onClick: n } = e,
        o = t === l.JS.JOIN ? s.intl.string(s.t['4i2vj4']) : s.intl.string(s.t['R/FK4O']),
        r = t === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
    return (0, i.jsx)('div', {
        className: c.activityOverlay,
        children: (0, i.jsx)(a.Button, {
            className: c.actionButton,
            onClick: n,
            size: a.Button.Sizes.MEDIUM,
            color: r,
            children: o
        })
    });
}
