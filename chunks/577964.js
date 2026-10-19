t.d(n, { A: () => s });
var e = t(91242),
    i = t(457827),
    u = t(574172),
    c = t(869146),
    r = t(976860),
    o = t(808728),
    a = t(576705),
    d = t(652215);
function s(l, n, t) {
    (null != l &&
        c.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT) &&
        e.A.getMainFrame()?.id === l &&
        (0, u.close)(d.MLl.ACTIVITY_POPOUT),
        (0, i.r)(l),
        (0, r.pX)(
            (function (l, n) {
                if (null == l) return d.BVt.FRIENDS;
                let t = o.Ay.getDefaultChannel(l);
                if (null != t && t.id !== n) return d.BVt.CHANNEL(l, t.id);
                let e = o.Ay.getFirstChannel(l, (l) => {
                    let { channel: t } = l;
                    return t.id !== n && a.A.can(d.xBc.VIEW_CHANNEL, t);
                });
                return null != e ? d.BVt.CHANNEL(l, e.id) : d.BVt.FRIENDS;
            })(n, t),
        ));
}
