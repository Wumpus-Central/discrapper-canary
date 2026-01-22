n.d(t, { c: () => d });
var r = n(735438),
    i = n.n(r),
    l = n(189081),
    a = n(242286),
    s = n(256415),
    o = n(636401),
    c = n(613057),
    u = n(652215);
let d = {
    [u.ZE4.OVERLAY_UPDATE]: {
        scope: c.hj,
        handler(e) {
            let {
                args: { pid: t },
                socket: n,
            } = e;
            if ("number" != typeof t || t < 10) throw new o.A({ errorCode: u.Lw6.INVALID_EVENT }, "Invalid pid");
            return (e) => {
                let { prevState: r, dispatch: o } = e,
                    c = a.default.enabled,
                    u = !0,
                    d = n.application.id;
                if (null != d) {
                    let e = l.A.getActiveLibraryApplication(d);
                    null != e && (c = c && e.isOverlayEnabled()), (u = s.default.isLocked(t));
                }
                let p = {
                    enabled: c,
                    locked: u,
                };
                return i().isEqual(p, r) || o(p), p;
            };
        },
    },
};
