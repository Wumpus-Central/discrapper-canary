n.d(t, { c: () => c });
var i = n(735438),
    r = n.n(i),
    a = n(189081),
    l = n(242286),
    s = n(256415),
    o = n(636401),
    d = n(613057),
    u = n(652215);
let c = {
    [u.ZE4.OVERLAY_UPDATE]: {
        scope: d.hj,
        handler(e) {
            let {
                args: { pid: t },
                socket: n,
            } = e;
            if ("number" != typeof t || t < 10) throw new o.A({ errorCode: u.Lw6.INVALID_EVENT }, "Invalid pid");
            return (e) => {
                let { prevState: i, dispatch: o } = e,
                    d = l.default.enabled,
                    u = !0,
                    c = n.application.id;
                if (null != c) {
                    let e = a.A.getActiveLibraryApplication(c);
                    null != e && (d = d && e.isOverlayEnabled()), (u = s.default.isLocked(t));
                }
                let A = { enabled: d, locked: u };
                return r().isEqual(A, i) || o(A), A;
            };
        },
    },
};
