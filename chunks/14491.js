n.d(t, { Z: () => f }), n(789020);
var i = n(200651),
    r = n(117447),
    a = n(481060),
    s = n(783097),
    o = n(594174),
    l = n(572004),
    u = n(630388),
    c = n(311819),
    d = n(981631);
function f(e) {
    let { application: t, label: n, onSuccess: f, showIconFirst: _, focusedClassName: p } = e;
    if (__OVERLAY__ || !l.wS || null == t) return null;
    let h = o.default.getCurrentUser(),
        m = (0, s.Ow)(t);
    function g() {
        var e;
        if (null == t) return;
        let n = (0, u.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, d.udG.EMBEDDED)
            ? (0, c.H)({
                  applicationId: t.id,
                  referrerId: null == h ? void 0 : h.id
              })
            : (0, c.J)({
                  id: t.id,
                  ...m
              });
        null != n && ((0, l.JG)(n), null == f || f());
    }
    let E = 'copy-app-link-'.concat(t.id);
    return (0, i.jsx)(
        a.sNh,
        {
            id: E,
            label: n,
            action: g,
            icon: _ ? void 0 : r.x,
            iconLeft: _ ? r.x : void 0,
            focusedClassName: p
        },
        E
    );
}
