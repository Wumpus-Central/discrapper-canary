r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(789020);
var a = r(200651),
    o = r(117447),
    s = r(481060),
    l = r(783097),
    u = r(594174),
    c = r(572004),
    d = r(630388),
    f = r(311819),
    p = r(981631);
function h(e) {
    let { application: n, label: r, onSuccess: i, showIconFirst: h, focusedClassName: _ } = e;
    if (__OVERLAY__ || !c.wS || null == n) return null;
    let m = u.default.getCurrentUser(),
        g = (0, l.Ow)(n);
    function E() {
        var e;
        if (null == n) return;
        let r = (0, d.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, p.udG.EMBEDDED)
            ? (0, f.H)({
                  applicationId: n.id,
                  referrerId: null == m ? void 0 : m.id
              })
            : (0, f.J)({
                  id: n.id,
                  ...g
              });
        if (null != r) (0, c.JG)(r), null == i || i();
    }
    let v = 'copy-app-link-'.concat(n.id);
    return (0, a.jsx)(
        s.MenuItem,
        {
            id: v,
            label: r,
            action: E,
            icon: h ? void 0 : o.x,
            iconLeft: h ? o.x : void 0,
            focusedClassName: _
        },
        v
    );
}
