n.d(t, { B: () => s, g: () => a });
var i = n(535558),
    r = n(431065);
function a(e, t) {
    let n = null,
        r = null;
    return {
        offer(a) {
            (r?.close(),
                (r = a),
                a.listen((s) => {
                    s.type === i._i.CONNECTION_ACCEPTED
                        ? r === a && (n?.close(), (n = a), (r = null), t())
                        : n === a && e(s);
                }));
        },
        dispatch(e) {
            n?.post(e);
        },
        close() {
            (n?.close(), r?.close(), (n = null), (r = null));
        },
    };
}
function s(e, t, n, a) {
    let s = new r.K.Constructor.MessageChannel(),
        { port1: l, port2: o } = r.K.MessageChannel(s);
    a({
        post(e) {
            r.K.MessagePort(l).postMessage(e);
        },
        listen(e) {
            r.K.MessagePort(l).onmessage = (t) => e(r.K.MessageEvent(t).data);
        },
        close() {
            r.K.MessagePort(l).close();
        },
    });
    let d = { [i.Y5]: "connection_open", nonce: n };
    r.K.Window(e).postMessage(d, t, r.K.asIterable([o]));
}
