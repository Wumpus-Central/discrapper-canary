n.d(t, { Z: () => p });
var r = n(710845),
    i = n(857192),
    l = n(901077),
    a = n(46832),
    o = n(852926),
    s = n(748635),
    c = n(981631);
let u = new r.Z('RPCServer:PostMessage'),
    d = (e, t, n) => {
        (i.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) && t.info('Socket Message: '.concat(n.id), (0, l.Z)(e));
    },
    p = (function () {
        let e = new a.Z(o.em, u, s.Z, d);
        return (
            window.addEventListener('message', (t) => {
                if (window === t.source) return;
                if (null == t.source || null == t.source.postMessage) return void u.error('Unknown event source');
                let n = t.source,
                    r = t.data,
                    i = t.origin;
                e.handleMessage(r, i, (e, t) => {
                    !(function (e) {
                        try {
                            return e.closed;
                        } catch (e) {
                            return !1;
                        }
                    })(n) && n.postMessage(e, t);
                });
            }),
            e
        );
    })();
