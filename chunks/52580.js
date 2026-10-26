n.d(t, { A: () => m });
var i = n(535558),
    r = n(439372),
    a = n(91242),
    s = n(625494),
    l = n(633802),
    o = n(435558),
    d = n(332874),
    c = n(652215);
let u = { muted: !1 },
    _ = new Map(),
    E = new Map();
function A(e) {
    let t = a.A.getFrameByIframeId(e);
    return null == t ? (E.get(e) ?? u) : { muted: t.data.muted };
}
function h(e) {
    let t = A(e);
    return (E.set(e, t), { type: i.Ii.STATE_UPDATED, state: t });
}
function f(e) {
    let { iframeId: t, pipe: n } = e,
        r = _.get(t);
    (null == r &&
        ((r = (function (e) {
            let { onConnect: t, onMessage: n } = e,
                r = new Map(),
                a = (0, d.g)(n, () => {
                    (r.clear(), t(s));
                }),
                s = {
                    offer: (e) => a.offer(e),
                    dispatch(e) {
                        (0, o.isEqual)(r.get(e.type), e) || (r.set(e.type, e), a.dispatch(e));
                    },
                    close() {
                        (a.close(), n({ type: i._i.DISCONNECTED }));
                    },
                };
            return s;
        })({
            onConnect: (e) => {
                e.dispatch(h(t));
            },
            onMessage: (e) => {
                e.type === i._i.STATE_UPDATED ? (0, l.WR)(t, e.state) : e.type === i._i.DISCONNECTED && (0, l.QQ)(t);
            },
        })),
        _.set(t, r),
        E.set(t, A(t))),
        r.offer(n));
}
function I(e) {
    let { id: t } = e,
        n = _.get(t);
    null != n && (_.delete(t), E.delete(t), n.close());
}
function p() {
    for (let [e, t] of _) t.dispatch(h(e));
}
class T extends r.A {
    actions = { EMBEDDED_APP_SHIM_PIPE_OPEN: f };
    stores = new Map().set(a.A, p);
    _initialize() {
        s._.subscribe(c.jej.IFRAME_UNMOUNT, I);
    }
    _terminate() {
        for (let e of (s._.unsubscribe(c.jej.IFRAME_UNMOUNT, I), _.values())) e.close();
        _.clear();
    }
}
let m = new T();
