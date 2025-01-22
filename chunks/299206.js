r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(512722),
    o = r.n(a),
    s = r(481060),
    l = r(695346),
    u = r(572004);
function c(e) {
    let { id: n, label: r, onSuccess: a, shiftId: c, showIconFirst: d, showWithoutDeveloperMode: f, focusedClassName: p } = e,
        h = l.Sb.useSetting();
    function _(e) {
        let r = null != c && e.shiftKey ? c : n;
        o()(null != r, 'cannot copy null text'), (0, u.JG)(r), null == a || a();
    }
    let m = f || h;
    if (__OVERLAY__ || !m || !u.wS || null == n) return null;
    let g = 'devmode-copy-id-'.concat(n);
    return (0, i.jsx)(
        s.MenuItem,
        {
            id: g,
            label: r,
            action: _,
            icon: d ? void 0 : s.IdIcon,
            iconLeft: d ? s.IdIcon : void 0,
            focusedClassName: p
        },
        g
    );
}
