a.d(e, { y: () => E });
var r = a(263449),
    n = a(233517),
    _ = a(151122),
    o = a(899517),
    i = a(694043);
let c = o.n,
    s = new WeakMap(),
    E = (0, _._I)((t = {}) => {
        let e = t.types || ['crash', 'deprecation', 'intervention'];
        function a(t) {
            if (s.has((0, r.s3)()))
                for (let e of t)
                    (0, r.$e)((t) => {
                        t.setExtra('url', e.url);
                        let a = `ReportingObserver [${e.type}]`,
                            r = 'No details available';
                        if (e.body) {
                            let a = {};
                            for (let t in e.body) a[t] = e.body[t];
                            if ((t.setExtra('body', a), 'crash' === e.type)) {
                                let t = e.body;
                                r = [t.crashId || '', t.reason || ''].join(' ').trim() || r;
                            } else r = e.body.message || r;
                        }
                        (0, n.uT)(`${a}: ${r}`);
                    });
        }
        return {
            name: 'ReportingObserver',
            setupOnce() {
                (0, i.zb)() &&
                    new c.ReportingObserver(a, {
                        buffered: !0,
                        types: e
                    }).observe();
            },
            setup(t) {
                s.set(t, !0);
            }
        };
    });
