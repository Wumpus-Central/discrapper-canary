e.d(l, { A: () => s });
var t = e(91242),
    i = e(457827),
    c = e(574172),
    o = e(869146),
    u = e(976860),
    r = e(808728),
    d = e(576705),
    a = e(652215);
function s(n, l, e) {
    (null != n &&
        o.A.getWindowOpen(a.MLl.ACTIVITY_POPOUT) &&
        t.A.getMainFrame()?.id === n &&
        (0, c.close)(a.MLl.ACTIVITY_POPOUT),
        (0, i.r)(n),
        (0, u.pX)(
            (function (n, l) {
                if (null == n) return a.BVt.FRIENDS;
                let e = r.Ay.getDefaultChannel(n);
                if (null != e && e.id !== l) return a.BVt.CHANNEL(n, e.id);
                let t = r.Ay.getFirstChannel(n, (n) => {
                    let { channel: e } = n;
                    return e.id !== l && d.A.can(a.xBc.VIEW_CHANNEL, e);
                });
                return null != t ? a.BVt.CHANNEL(n, t.id) : a.BVt.FRIENDS;
            })(l, e),
        ));
}
