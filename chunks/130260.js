_.d(e, { x: () => c });
var a = _(696486),
    r = _(151122),
    n = _(622916),
    o = _(454463),
    E = _(243309),
    i = _(748688);
let c = (0, r._I)(() => ({
    name: "BrowserProfiling",
    setup(t) {
        let e = (0, a.HN)(),
            _ = e && (0, a.Gx)(e);
        _ && (0, i.x5)(_) && (0, i.$X)(_) && (0, E.v)(_),
            t.on("spanStart", (t) => {
                t === (0, a.Gx)(t) && (0, i.$X)(t) && (0, E.v)(t);
            }),
            t.on("beforeEnvelope", (t) => {
                if (!(0, i.ph)()) return;
                let e = (0, i.AJ)(t);
                if (!e.length) return;
                let _ = [];
                for (let t of e) {
                    let e = t && t.contexts,
                        a = e && e.profile && e.profile.profile_id,
                        r = e && e.profile && e.profile.start_timestamp;
                    if ("string" != typeof a || !a) {
                        o.X && n.kg.log("[Profiling] cannot find profile for a span without a profile context");
                        continue;
                    }
                    e && e.profile && delete e.profile;
                    let E = (0, i.GC)(a);
                    if (!E) {
                        o.X && n.kg.log(`[Profiling] Could not retrieve profile for span: ${a}`);
                        continue;
                    }
                    let c = (0, i.nm)(a, r, E, t);
                    c && _.push(c);
                }
                (0, i.db)(t, _);
            });
    },
}));
