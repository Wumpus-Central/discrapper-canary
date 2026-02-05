n.d(t, { c: () => u });
var i = n(735438),
    r = n.n(i),
    a = n(189081),
    l = n(242286),
    s = n(256415),
    o = n(636401),
    d = n(613057),
    c = n(652215);
let u = {
    [c.ZE4.OVERLAY_UPDATE]: {
        scope: d.hj,
        handler(e) {
            let {
                args: { pid: t },
                socket: n,
            } = e;
            if ("number" != typeof t || t < 10) throw new o.A({ errorCode: c.Lw6.INVALID_EVENT }, "Invalid pid");
            return (e) => {
                let { prevState: i, dispatch: o } = e,
                    d = l.default.enabled,
                    c = !0,
                    u = n.application.id;
                if (null != u) {
                    let e = a.A.getActiveLibraryApplication(u);
                    null != e && (d = d && e.isOverlayEnabled()), (c = s.default.isLocked(t));
                }
                let A = { enabled: d, locked: c };
                return r().isEqual(A, i) || o(A), A;
            };
        },
    },
};
