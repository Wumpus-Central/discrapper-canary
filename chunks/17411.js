a.d(e, { y: () => s });
var r = a(263449),
    _ = a(233517),
    n = a(151122),
    o = a(899517),
    i = a(694043);
let c = o.n,
    E = new WeakMap(),
    s = (0, n._I)((t = {}) => {
        let e = t.types || ['crash', 'deprecation', 'intervention'];
        function a(t) {
            if (E.has((0, r.s3)()))
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
                        (0, _.uT)(`${a}: ${r}`);
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
                E.set(t, !0);
            }
        };
    });
