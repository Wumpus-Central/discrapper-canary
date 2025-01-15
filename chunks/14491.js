r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(789020);
var a = r(200651),
    s = r(117447),
    o = r(481060),
    l = r(783097),
    u = r(594174),
    c = r(572004),
    d = r(630388),
    f = r(311819),
    _ = r(981631);
function h(e) {
    let { application: n, label: r, onSuccess: i, showIconFirst: h, focusedClassName: p } = e;
    if (__OVERLAY__ || !c.wS || null == n) return null;
    let m = u.default.getCurrentUser(),
        g = (0, l.Ow)(n);
    function E() {
        var e;
        if (null == n) return;
        let r = (0, d.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, _.udG.EMBEDDED)
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
        o.MenuItem,
        {
            id: v,
            label: r,
            action: E,
            icon: h ? void 0 : s.x,
            iconLeft: h ? s.x : void 0,
            focusedClassName: p
        },
        v
    );
}
