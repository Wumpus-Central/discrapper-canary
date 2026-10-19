n.d(t, { A: () => I });
var i = n(439372),
    r = n(91242),
    a = n(625494),
    s = n(633802),
    l = n(332874),
    o = n(535558),
    d = n(652215);
let c = { muted: !1 },
    u = new Map();
function _(e) {
    let t = r.A.getFrameByIframeId(e);
    return null != t ? { muted: t.data.muted } : c;
}
function E(e) {
    let { iframeId: t, pipe: n } = e,
        i = u.get(t);
    (null == i &&
        ((i = (function (e, t) {
            let { onChildState: n, onDisconnect: i } = t,
                r = e;
            function a() {
                s.dispatch({ type: o.Ii.STATE_UPDATED, state: r });
            }
            let s = (0, l.g)(function (e) {
                e.type === o._i.STATE_UPDATED ? n(e.state) : e.type === o._i.DISCONNECTED && i();
            }, a);
            return {
                offer: (e) => s.offer(e),
                setParentState(e) {
                    var t;
                    ((t = r), Object.keys(e).every((n) => e[n] === t[n]) || ((r = e), a()));
                },
                close() {
                    (s.close(), i());
                },
            };
        })(_(t), { onChildState: (e) => (0, s.WR)(t, e), onDisconnect: () => (0, s.QQ)(t) })),
        u.set(t, i)),
        i.offer(n));
}
function A(e) {
    let { id: t } = e,
        n = u.get(t);
    null != n && (u.delete(t), n.close());
}
function h() {
    for (let [e, t] of u) t.setParentState(_(e));
}
class f extends i.A {
    actions = { EMBEDDED_APP_SHIM_PIPE_OPEN: E };
    stores = new Map().set(r.A, h);
    _initialize() {
        a._.subscribe(d.jej.IFRAME_UNMOUNT, A);
    }
    _terminate() {
        for (let e of (a._.unsubscribe(d.jej.IFRAME_UNMOUNT, A), u.values())) e.close();
        u.clear();
    }
}
let I = new f();
