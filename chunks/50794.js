n.d(t, { x: () => c });
var r = n(82255),
    i = n(688560),
    a = n(98076),
    o = n(549040),
    _ = n(815225),
    s = n(556127);
let c = (0, i._I)(() => ({
    name: "BrowserProfiling",
    setup(e) {
        let t = (0, r.HN)(),
            n = t && (0, r.Gx)(t);
        n && (0, s.x5)(n) && (0, s.$X)(n) && (0, _.v)(n),
            e.on("spanStart", (e) => {
                e === (0, r.Gx)(e) && (0, s.$X)(e) && (0, _.v)(e);
            }),
            e.on("beforeEnvelope", (e) => {
                if (!(0, s.ph)()) return;
                let t = (0, s.AJ)(e);
                if (!t.length) return;
                let n = [];
                for (let e of t) {
                    let t = e && e.contexts,
                        r = t && t.profile && t.profile.profile_id,
                        i = t && t.profile && t.profile.start_timestamp;
                    if ("string" != typeof r || !r) {
                        o.X && a.kg.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    t && t.profile && delete t.profile;
                    let _ = (0, s.GC)(r);
                    if (!_) {
                        o.X && a.kg.log(`[Profiling] Could not retrieve profile for span: ${r}`);
                        continue;
                    }
                    let c = (0, s.nm)(r, i, _, e);
                    c && n.push(c);
                }
                (0, s.db)(e, n);
            });
    },
}));
