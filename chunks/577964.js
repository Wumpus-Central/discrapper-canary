t.d(l, { A: () => s });
var i = t(91242),
    e = t(457827),
    c = t(574172),
    u = t(869146),
    r = t(976860),
    o = t(808728),
    a = t(576705),
    d = t(652215);
function s(n, l, t) {
    (null != n &&
        u.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT) &&
        i.A.getMainFrame()?.id === n &&
        (0, c.close)(d.MLl.ACTIVITY_POPOUT),
        (0, e.r)(n),
        (0, r.pX)(
            (function (n, l) {
                if (null == n) return d.BVt.FRIENDS;
                let t = o.Ay.getDefaultChannel(n);
                if (null != t && t.id !== l) return d.BVt.CHANNEL(n, t.id);
                let i = o.Ay.getFirstChannel(n, (n) => {
                    let { channel: t } = n;
                    return t.id !== l && a.A.can(d.xBc.VIEW_CHANNEL, t);
                });
                return null != i ? d.BVt.CHANNEL(n, i.id) : d.BVt.FRIENDS;
            })(l, t),
        ));
}
