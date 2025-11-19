_.d(e, { y: () => s });
var a = _(263449),
    r = _(233517),
    n = _(151122),
    o = _(899517),
    E = _(694043);
let i = o.n,
    c = new WeakMap(),
    s = (0, n._I)((t = {}) => {
        let e = t.types || ["crash", "deprecation", "intervention"];
        function _(t) {
            if (c.has((0, a.s3)()))
                for (let e of t)
                    (0, a.$e)((t) => {
                        t.setExtra("url", e.url);
                        let _ = `ReportingObserver [${e.type}]`,
                            a = "No details available";
                        if (e.body) {
                            let _ = {};
                            for (let t in e.body) _[t] = e.body[t];
                            if ((t.setExtra("body", _), "crash" === e.type)) {
                                let t = e.body;
                                a = [t.crashId || "", t.reason || ""].join(" ").trim() || a;
                            } else a = e.body.message || a;
                        }
                        (0, r.uT)(`${_}: ${a}`);
                    });
        }
        return {
            name: "ReportingObserver",
            setupOnce() {
                (0, E.zb)() &&
                    new i.ReportingObserver(_, {
                        buffered: !0,
                        types: e,
                    }).observe();
            },
            setup(t) {
                c.set(t, !0);
            },
        };
    });
