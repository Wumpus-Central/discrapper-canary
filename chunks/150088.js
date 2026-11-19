var a,
    n,
    o,
    c,
    s = t(860511),
    i = t(53132),
    f = t(772805),
    u = s.structuredClone,
    l = s.ArrayBuffer,
    p = s.MessageChannel,
    y = !1;
if (f)
    y = function (e) {
        u(e, { transfer: [e] });
    };
else if (l)
    try {
        (!p && (a = i("worker_threads")) && (p = a.MessageChannel),
            p &&
                ((n = new p()),
                (o = new l(2)),
                (c = function (e) {
                    n.port1.postMessage(null, [e]);
                }),
                2 === o.byteLength && (c(o), 0 === o.byteLength && (y = c))));
    } catch (e) {}
e.exports = y;
