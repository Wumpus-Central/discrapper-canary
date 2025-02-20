n.d(t, { U: () => c });
var a = n(200651);
n(192379);
var i = n(481060),
    l = n(542094),
    s = n(388032),
    r = n(640547);
function c(e) {
    let { action: t, onClick: n } = e,
        c = t === l.JS.JOIN ? s.NW.string(s.t['4i2vj4']) : s.NW.string(s.t['R/FK4O']),
        o = t === l.JS.JOIN ? i.zxk.Colors.PRIMARY : i.zxk.Colors.RED;
    return (0, a.jsx)('div', {
        className: r.activityOverlay,
        children: (0, a.jsx)(i.zxk, {
            className: r.actionButton,
            onClick: n,
            size: i.zxk.Sizes.MEDIUM,
            color: o,
            children: c
        })
    });
}
