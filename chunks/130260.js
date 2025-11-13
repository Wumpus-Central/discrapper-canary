a.d(e, { x: () => c });
var r = a(696486),
    _ = a(151122),
    n = a(622916),
    o = a(454463),
    i = a(243309),
    E = a(748688);
let c = (0, _._I)(() => ({
    name: "BrowserProfiling",
    setup(t) {
        let e = (0, r.HN)(),
            a = e && (0, r.Gx)(e);
        a && (0, E.x5)(a) && (0, E.$X)(a) && (0, i.v)(a),
            t.on("spanStart", (t) => {
                t === (0, r.Gx)(t) && (0, E.$X)(t) && (0, i.v)(t);
            }),
            t.on("beforeEnvelope", (t) => {
                if (!(0, E.ph)()) return;
                let e = (0, E.AJ)(t);
                if (!e.length) return;
                let a = [];
                for (let t of e) {
                    let e = t && t.contexts,
                        r = e && e.profile && e.profile.profile_id,
                        _ = e && e.profile && e.profile.start_timestamp;
                    if ("string" != typeof r || !r) {
                        o.X && n.kg.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    e && e.profile && delete e.profile;
                    let i = (0, E.GC)(r);
                    if (!i) {
                        o.X && n.kg.log(`[Profiling] Could not retrieve profile for span: ${r}`);
                        continue;
                    }
                    let c = (0, E.nm)(r, _, i, t);
                    c && a.push(c);
                }
                (0, E.db)(t, a);
            });
    },
}));
