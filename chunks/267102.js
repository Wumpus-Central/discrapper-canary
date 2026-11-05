var i = n(477900),
    r = n(582128),
    a = n(621466),
    s = n(531685),
    l = n(188567),
    o = n(365971),
    d = n(158368),
    c = n(652215);
let u = new l.H(),
    _ = r.createContext({ appContext: c.BRT.APP, renderWindow: window, windowDispatch: u, windowId: (0, o.Xg)() }),
    E = new Map();
function A(e) {
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    let n = (0, o.Q2)(t);
    return E.get(n)?.windowDispatch;
}
function f() {
    let e = (0, d.Sf)();
    return null == e ? null : (E.get(e) ?? null);
}
n.d(
    t,
    {},
    {
        Ay: _,
        Iy: function (e) {
            return E.get(e);
        },
        Us: function () {
            return r.useContext(_).appContext;
        },
        Uw: u,
        Wr: function (e) {
            let { appContext: t, renderWindow: n, children: a } = e,
                s = (function (e, t) {
                    let [n, i] = r.useState((0, o.Q2)(t)),
                        a = r.useMemo(() => new l.H(), []),
                        s = r.useMemo(
                            () => ({ appContext: e, renderWindow: t, windowDispatch: a, windowId: n }),
                            [e, t, a, n],
                        );
                    return (
                        r.useEffect(() => {
                            if (null != n) return;
                            let e = setInterval(() => {
                                let n = (0, o.Q2)(t);
                                null != n && (i(n), clearInterval(e));
                            }, 10);
                            return () => clearInterval(e);
                        }, [t, n]),
                        r.useEffect(() => {
                            function e() {
                                E.delete(n);
                            }
                            return (
                                E.set(n, s), t.addEventListener("unload", e), () => t.removeEventListener("unload", e)
                            );
                        }, [s, t, n]),
                        s
                    );
                })(t, n);
            return (0, i.jsx)(_.Provider, { value: s, children: a });
        },
        _o: function () {
            return r.useContext(_).renderWindow;
        },
        aL: function () {
            return r.useContext(_).windowDispatch;
        },
        g5: function () {
            let e = s.A.getFocusedWindowId() ?? s.A.getLastFocusedWindowId();
            return null == e ? null : (E.get(e) ?? null);
        },
        mU: A,
        rH: f,
        wp: function (e) {
            return (0, a.vq)(e?.target) ? (A(e.target) ?? null) : null;
        },
        zd: function () {
            let e = f();
            return null != e ? e.appContext : null;
        },
    },
);
