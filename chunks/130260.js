a.d(e, { x: () => s });
var r = a(696486),
    n = a(151122),
    _ = a(622916),
    o = a(454463),
    i = a(243309),
    c = a(748688);
let s = (0, n._I)(() => ({
    name: 'BrowserProfiling',
    setup(t) {
        let e = (0, r.HN)(),
            a = e && (0, r.Gx)(e);
        a && (0, c.x5)(a) && (0, c.$X)(a) && (0, i.v)(a),
            t.on('spanStart', (t) => {
                t === (0, r.Gx)(t) && (0, c.$X)(t) && (0, i.v)(t);
            }),
            t.on('beforeEnvelope', (t) => {
                if (!(0, c.ph)()) return;
                let e = (0, c.AJ)(t);
                if (!e.length) return;
                let a = [];
                for (let t of e) {
                    let e = t && t.contexts,
                        r = e && e.profile && e.profile.profile_id,
                        n = e && e.profile && e.profile.start_timestamp;
                    if ('string' != typeof r || !r) {
                        o.X && _.kg.log('[Profiling] cannot find profile for a span without a profile context');
                        continue;
                    }
                    e && e.profile && delete e.profile;
                    let i = (0, c.GC)(r);
                    if (!i) {
                        o.X && _.kg.log(`[Profiling] Could not retrieve profile for span: ${r}`);
                        continue;
                    }
                    let s = (0, c.nm)(r, n, i, t);
                    s && a.push(s);
                }
                (0, c.db)(t, a);
            });
    }
}));
