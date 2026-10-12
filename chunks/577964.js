e.d(n, { A: () => s });
var t = e(91242),
    i = e(457827),
    c = e(574172),
    o = e(869146),
    u = e(976860),
    r = e(808728),
    d = e(576705),
    a = e(652215);
function s(l, n, e) {
    (null != l &&
        o.A.getWindowOpen(a.MLl.ACTIVITY_POPOUT) &&
        t.A.getMainFrame()?.id === l &&
        (0, c.close)(a.MLl.ACTIVITY_POPOUT),
        (0, i.r)(l),
        (0, u.pX)(
            (function (l, n) {
                if (null == l) return a.BVt.FRIENDS;
                let e = r.Ay.getDefaultChannel(l);
                if (null != e && e.id !== n) return a.BVt.CHANNEL(l, e.id);
                let t = r.Ay.getFirstChannel(l, (l) => {
                    let { channel: e } = l;
                    return e.id !== n && d.A.can(a.xBc.VIEW_CHANNEL, e);
                });
                return null != t ? a.BVt.CHANNEL(l, t.id) : a.BVt.FRIENDS;
            })(n, e),
        ));
}
