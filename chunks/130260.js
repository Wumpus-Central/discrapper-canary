r.d(t, { x: () => c });
var n = r(696486),
    a = r(151122),
    i = r(622916),
    o = r(454463),
    _ = r(243309),
    s = r(748688);
let c = (0, a._I)(() => ({
    name: "BrowserProfiling",
    setup(e) {
        let t = (0, n.HN)(),
            r = t && (0, n.Gx)(t);
        r && (0, s.x5)(r) && (0, s.$X)(r) && (0, _.v)(r),
            e.on("spanStart", (e) => {
                e === (0, n.Gx)(e) && (0, s.$X)(e) && (0, _.v)(e);
            }),
            e.on("beforeEnvelope", (e) => {
                if (!(0, s.ph)()) return;
                let t = (0, s.AJ)(e);
                if (!t.length) return;
                let r = [];
                for (let e of t) {
                    let t = e && e.contexts,
                        n = t && t.profile && t.profile.profile_id,
                        a = t && t.profile && t.profile.start_timestamp;
                    if ("string" != typeof n || !n) {
                        o.X && i.kg.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    t && t.profile && delete t.profile;
                    let _ = (0, s.GC)(n);
                    if (!_) {
                        o.X && i.kg.log(`[Profiling] Could not retrieve profile for span: ${n}`);
                        continue;
                    }
                    let c = (0, s.nm)(n, a, _, e);
                    c && r.push(c);
                }
                (0, s.db)(e, r);
            });
    },
}));
