let r, _;
a.d(e, {
    Fv: () => O,
    Jk: () => h,
    PR: () => p,
    f7: () => C,
    sn: () => P,
});
var n = a(696486),
    o = a(152228),
    i = a(988097),
    E = a(241225),
    c = a(101284),
    s = a(467510),
    l = a(622916),
    I = a(873567),
    R = a(665909),
    u = a(395848),
    A = a(501684),
    N = a(108185),
    T = a(896247),
    d = a(416987);
let f = 0,
    L = {};
function p() {
    let t = (0, N.QV)();
    if (t && c.Z1) {
        t.mark && u.m.performance.mark("sentry-tracing-init");
        let e = (0, A.to)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                if (!e) return;
                let a = (0, N.XL)(c.Z1),
                    r = (0, N.XL)(e.startTime);
                R.X && l.kg.log("[Measurements] Adding FID"),
                    (L.fid = {
                        value: t.value,
                        unit: "millisecond",
                    }),
                    (L["mark.fid"] = {
                        value: a + r,
                        unit: "second",
                    });
            }),
            a = (0, A.PR)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (R.X && l.kg.log("[Measurements] Adding CLS"),
                    (L.cls = {
                        value: t.value,
                        unit: "",
                    }),
                    (_ = e));
            }, !0),
            n = (0, A.$A)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (R.X && l.kg.log("[Measurements] Adding LCP"),
                    (L.lcp = {
                        value: t.value,
                        unit: "millisecond",
                    }),
                    (r = e));
            }, !0),
            o = (0, A._4)(({ metric: t }) => {
                t.entries[t.entries.length - 1] &&
                    (R.X && l.kg.log("[Measurements] Adding TTFB"),
                    (L.ttfb = {
                        value: t.value,
                        unit: "millisecond",
                    }));
            });
        return () => {
            e(), a(), n(), o();
        };
    }
    return () => void 0;
}
function O() {
    (0, A._j)("longtask", ({ entries: t }) => {
        for (let e of t) {
            if (!(0, n.HN)()) return;
            let t = (0, N.XL)(c.Z1 + e.startTime),
                a = (0, N.XL)(e.duration),
                r = (0, o.qp)({
                    name: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTime: t,
                    attributes: { [i.S3]: "auto.ui.browser.metrics" },
                });
            r && r.end(t + a);
        }
    });
}
function h() {
    new PerformanceObserver((t) => {
        for (let e of t.getEntries()) {
            if (!(0, n.HN)() || !e.scripts[0]) return;
            let t = (0, N.XL)(c.Z1 + e.startTime),
                a = (0, N.XL)(e.duration),
                r = { [i.S3]: "auto.ui.browser.metrics" },
                _ = e.scripts[0];
            if (_) {
                let { invoker: t, invokerType: e, sourceURL: a, sourceFunctionName: n, sourceCharPosition: o } = _;
                (r["browser.script.invoker"] = t),
                    (r["browser.script.invoker_type"] = e),
                    a && (r["code.filepath"] = a),
                    n && (r["code.function"] = n),
                    -1 !== o && (r["browser.script.source_char_position"] = o);
            }
            let E = (0, o.qp)({
                name: "Main UI thread blocked",
                op: "ui.long-animation-frame",
                startTime: t,
                attributes: r,
            });
            E && E.end(t + a);
        }
    }).observe({
        type: "long-animation-frame",
        buffered: !0,
    });
}
function P() {
    (0, A._j)("event", ({ entries: t }) => {
        for (let e of t) {
            if (!(0, n.HN)()) return;
            if ("click" === e.name) {
                let t = (0, N.XL)(c.Z1 + e.startTime),
                    a = (0, N.XL)(e.duration),
                    r = {
                        name: (0, s.Rt)(e.target),
                        op: `ui.interaction.${e.name}`,
                        startTime: t,
                        attributes: { [i.S3]: "auto.ui.browser.metrics" },
                    },
                    _ = (0, s.iY)(e.target);
                _ && (r.attributes["ui.component_name"] = _);
                let n = (0, o.qp)(r);
                n && n.end(t + a);
            }
        }
    });
}
function C(t) {
    let e = (0, N.QV)();
    if (!e || !u.m.performance.getEntries || !c.Z1) return;
    R.X && l.kg.log("[Tracing] Adding & adjusting spans using Performance API");
    let a = (0, N.XL)(c.Z1),
        o = e.getEntries(),
        { op: A, start_timestamp: p } = (0, n.XU)(t);
    if (
        (o.slice(f).forEach((e) => {
            let r = (0, N.XL)(e.startTime),
                _ = (0, N.XL)(Math.max(0, e.duration));
            if ("navigation" !== A || !p || !(a + r < p))
                switch (e.entryType) {
                    case "navigation":
                        var n, o, E;
                        (n = t),
                            (o = e),
                            (E = a),
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(
                                (t) => {
                                    D(n, o, t, E);
                                },
                            ),
                            D(n, o, "secureConnection", E, "TLS/SSL", "connectEnd"),
                            D(n, o, "fetch", E, "cache", "domainLookupStart"),
                            D(n, o, "domainLookup", E, "DNS"),
                            (function (t, e, a) {
                                let r = a + (0, N.XL)(e.requestStart),
                                    _ = a + (0, N.XL)(e.responseEnd),
                                    n = a + (0, N.XL)(e.responseStart);
                                e.responseEnd &&
                                    ((0, N.Y)(t, r, _, {
                                        op: "browser",
                                        name: "request",
                                        attributes: { [i.S3]: "auto.ui.browser.metrics" },
                                    }),
                                    (0, N.Y)(t, n, _, {
                                        op: "browser",
                                        name: "response",
                                        attributes: { [i.S3]: "auto.ui.browser.metrics" },
                                    }));
                            })(n, o, E);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        var c = t,
                            s = e,
                            f = r,
                            O = _,
                            h = a;
                        let n = (0, T.W)(),
                            o = h + Math.max(f, (0, N.XL)(n ? n.requestStart : 0)),
                            E = h + f,
                            I = { [i.S3]: "auto.resource.browser.metrics" };
                        o !== E &&
                            ((I["sentry.browser.measure_happened_before_request"] = !0),
                            (I["sentry.browser.measure_start_time"] = o)),
                            (0, N.Y)(c, o, E + O, {
                                name: s.name,
                                op: s.entryType,
                                attributes: I,
                            });
                        let u = (0, d.Y)(),
                            A = e.startTime < u.firstHiddenTime;
                        "first-paint" === e.name &&
                            A &&
                            (R.X && l.kg.log("[Measurements] Adding FP"),
                            (L.fp = {
                                value: e.startTime,
                                unit: "millisecond",
                            })),
                            "first-contentful-paint" === e.name &&
                                A &&
                                (R.X && l.kg.log("[Measurements] Adding FCP"),
                                (L.fcp = {
                                    value: e.startTime,
                                    unit: "millisecond",
                                }));
                        break;
                    }
                    case "resource":
                        !(function (t, e, a, r, _, n) {
                            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                            let o = (0, I.en)(a),
                                E = { [i.S3]: "auto.resource.browser.metrics" };
                            g(E, e, "transferSize", "http.response_transfer_size"),
                                g(E, e, "encodedBodySize", "http.response_content_length"),
                                g(E, e, "decodedBodySize", "http.decoded_response_content_length"),
                                "renderBlockingStatus" in e &&
                                    (E["resource.render_blocking_status"] = e.renderBlockingStatus),
                                o.protocol && (E["url.scheme"] = o.protocol.split(":").pop()),
                                o.host && (E["server.address"] = o.host),
                                (E["url.same_origin"] = a.includes(u.m.location.origin));
                            let c = n + r;
                            (0, N.Y)(t, c, c + _, {
                                name: a.replace(u.m.location.origin, ""),
                                op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                attributes: E,
                            });
                        })(t, e, e.name, r, _, a);
                }
        }),
        (f = Math.max(o.length - 1, 0)),
        (function (t) {
            let e = u.m.navigator;
            if (!e) return;
            let a = e.connection;
            a &&
                (a.effectiveType && t.setAttribute("effectiveConnectionType", a.effectiveType),
                a.type && t.setAttribute("connectionType", a.type),
                (0, N.nl)(a.rtt) &&
                    (L["connection.rtt"] = {
                        value: a.rtt,
                        unit: "millisecond",
                    })),
                (0, N.nl)(e.deviceMemory) && t.setAttribute("deviceMemory", `${e.deviceMemory} GB`),
                (0, N.nl)(e.hardwareConcurrency) &&
                    t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency));
        })(t),
        "pageload" === A)
    ) {
        var O;
        (function (t) {
            let e = (0, T.W)();
            if (!e) return;
            let { responseStart: a, requestStart: r } = e;
            r <= a &&
                (R.X && l.kg.log("[Measurements] Adding TTFB Request Time"),
                (t["ttfb.requestTime"] = {
                    value: a - r,
                    unit: "millisecond",
                }));
        })(L),
            ["fcp", "fp", "lcp"].forEach((t) => {
                let e = L[t];
                if (!e || !p || a >= p) return;
                let r = e.value,
                    _ = Math.abs((a + (0, N.XL)(r) - p) * 1000),
                    n = _ - r;
                R.X && l.kg.log(`[Measurements] Normalized ${t} from ${r} to ${_} (${n})`), (e.value = _);
            });
        let e = L["mark.fid"];
        e &&
            L.fid &&
            ((0, N.Y)(t, e.value, e.value + (0, N.XL)(L.fid.value), {
                name: "first input delay",
                op: "ui.action",
                attributes: { [i.S3]: "auto.ui.browser.metrics" },
            }),
            delete L["mark.fid"]),
            "fcp" in L || delete L.cls,
            Object.entries(L).forEach(([t, e]) => {
                (0, E.o)(t, e.value, e.unit);
            }),
            (O = t),
            r &&
                (R.X && l.kg.log("[Measurements] Adding LCP Data"),
                r.element && O.setAttribute("lcp.element", (0, s.Rt)(r.element)),
                r.id && O.setAttribute("lcp.id", r.id),
                r.url && O.setAttribute("lcp.url", r.url.trim().slice(0, 200)),
                O.setAttribute("lcp.size", r.size)),
            _ &&
                _.sources &&
                (R.X && l.kg.log("[Measurements] Adding CLS Data"),
                _.sources.forEach((t, e) => O.setAttribute(`cls.source.${e + 1}`, (0, s.Rt)(t.node))));
    }
    (r = void 0), (_ = void 0), (L = {});
}
function D(t, e, a, r, _, n) {
    let o = n ? e[n] : e[`${a}End`],
        E = e[`${a}Start`];
    E &&
        o &&
        (0, N.Y)(t, r + (0, N.XL)(E), r + (0, N.XL)(o), {
            op: "browser",
            name: _ || a,
            attributes: { [i.S3]: "auto.ui.browser.metrics" },
        });
}
function g(t, e, a, r) {
    let _ = e[a];
    null != _ && _ < 2147483647 && (t[r] = _);
}
