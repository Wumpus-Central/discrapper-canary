let a, r;
_.d(e, {
    Fv: () => p,
    Jk: () => C,
    PR: () => L,
    f7: () => h,
    sn: () => P,
});
var n = _(696486),
    o = _(152228),
    E = _(988097),
    i = _(241225),
    c = _(101284),
    s = _(467510),
    l = _(622916),
    I = _(873567),
    R = _(665909),
    N = _(395848),
    A = _(501684),
    u = _(108185),
    T = _(896247),
    d = _(416987);
let f = 0,
    O = {};
function L() {
    let t = (0, u.QV)();
    if (t && c.Z1) {
        t.mark && N.m.performance.mark("sentry-tracing-init");
        let e = (0, A.to)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                if (!e) return;
                let _ = (0, u.XL)(c.Z1),
                    a = (0, u.XL)(e.startTime);
                R.X && l.kg.log("[Measurements] Adding FID"),
                    (O.fid = {
                        value: t.value,
                        unit: "millisecond",
                    }),
                    (O["mark.fid"] = {
                        value: _ + a,
                        unit: "second",
                    });
            }),
            _ = (0, A.PR)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (R.X && l.kg.log("[Measurements] Adding CLS"),
                    (O.cls = {
                        value: t.value,
                        unit: "",
                    }),
                    (r = e));
            }, !0),
            n = (0, A.$A)(({ metric: t }) => {
                let e = t.entries[t.entries.length - 1];
                e &&
                    (R.X && l.kg.log("[Measurements] Adding LCP"),
                    (O.lcp = {
                        value: t.value,
                        unit: "millisecond",
                    }),
                    (a = e));
            }, !0),
            o = (0, A._4)(({ metric: t }) => {
                t.entries[t.entries.length - 1] &&
                    (R.X && l.kg.log("[Measurements] Adding TTFB"),
                    (O.ttfb = {
                        value: t.value,
                        unit: "millisecond",
                    }));
            });
        return () => {
            e(), _(), n(), o();
        };
    }
    return () => void 0;
}
function p() {
    (0, A._j)("longtask", ({ entries: t }) => {
        for (let e of t) {
            if (!(0, n.HN)()) return;
            let t = (0, u.XL)(c.Z1 + e.startTime),
                _ = (0, u.XL)(e.duration),
                a = (0, o.qp)({
                    name: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTime: t,
                    attributes: { [E.S3]: "auto.ui.browser.metrics" },
                });
            a && a.end(t + _);
        }
    });
}
function C() {
    new PerformanceObserver((t) => {
        for (let e of t.getEntries()) {
            if (!(0, n.HN)() || !e.scripts[0]) return;
            let t = (0, u.XL)(c.Z1 + e.startTime),
                _ = (0, u.XL)(e.duration),
                a = { [E.S3]: "auto.ui.browser.metrics" },
                r = e.scripts[0];
            if (r) {
                let { invoker: t, invokerType: e, sourceURL: _, sourceFunctionName: n, sourceCharPosition: o } = r;
                (a["browser.script.invoker"] = t),
                    (a["browser.script.invoker_type"] = e),
                    _ && (a["code.filepath"] = _),
                    n && (a["code.function"] = n),
                    -1 !== o && (a["browser.script.source_char_position"] = o);
            }
            let i = (0, o.qp)({
                name: "Main UI thread blocked",
                op: "ui.long-animation-frame",
                startTime: t,
                attributes: a,
            });
            i && i.end(t + _);
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
                let t = (0, u.XL)(c.Z1 + e.startTime),
                    _ = (0, u.XL)(e.duration),
                    a = {
                        name: (0, s.Rt)(e.target),
                        op: `ui.interaction.${e.name}`,
                        startTime: t,
                        attributes: { [E.S3]: "auto.ui.browser.metrics" },
                    },
                    r = (0, s.iY)(e.target);
                r && (a.attributes["ui.component_name"] = r);
                let n = (0, o.qp)(a);
                n && n.end(t + _);
            }
        }
    });
}
function h(t) {
    let e = (0, u.QV)();
    if (!e || !N.m.performance.getEntries || !c.Z1) return;
    R.X && l.kg.log("[Tracing] Adding & adjusting spans using Performance API");
    let _ = (0, u.XL)(c.Z1),
        o = e.getEntries(),
        { op: A, start_timestamp: L } = (0, n.XU)(t);
    if (
        (o.slice(f).forEach((e) => {
            let a = (0, u.XL)(e.startTime),
                r = (0, u.XL)(Math.max(0, e.duration));
            if ("navigation" !== A || !L || !(_ + a < L))
                switch (e.entryType) {
                    case "navigation":
                        var n, o, i;
                        (n = t),
                            (o = e),
                            (i = _),
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(
                                (t) => {
                                    D(n, o, t, i);
                                },
                            ),
                            D(n, o, "secureConnection", i, "TLS/SSL", "connectEnd"),
                            D(n, o, "fetch", i, "cache", "domainLookupStart"),
                            D(n, o, "domainLookup", i, "DNS"),
                            (function (t, e, _) {
                                let a = _ + (0, u.XL)(e.requestStart),
                                    r = _ + (0, u.XL)(e.responseEnd),
                                    n = _ + (0, u.XL)(e.responseStart);
                                e.responseEnd &&
                                    ((0, u.Y)(t, a, r, {
                                        op: "browser",
                                        name: "request",
                                        attributes: { [E.S3]: "auto.ui.browser.metrics" },
                                    }),
                                    (0, u.Y)(t, n, r, {
                                        op: "browser",
                                        name: "response",
                                        attributes: { [E.S3]: "auto.ui.browser.metrics" },
                                    }));
                            })(n, o, i);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        var c = t,
                            s = e,
                            f = a,
                            p = r,
                            C = _;
                        let n = (0, T.W)(),
                            o = C + Math.max(f, (0, u.XL)(n ? n.requestStart : 0)),
                            i = C + f,
                            I = { [E.S3]: "auto.resource.browser.metrics" };
                        o !== i &&
                            ((I["sentry.browser.measure_happened_before_request"] = !0),
                            (I["sentry.browser.measure_start_time"] = o)),
                            (0, u.Y)(c, o, i + p, {
                                name: s.name,
                                op: s.entryType,
                                attributes: I,
                            });
                        let N = (0, d.Y)(),
                            A = e.startTime < N.firstHiddenTime;
                        "first-paint" === e.name &&
                            A &&
                            (R.X && l.kg.log("[Measurements] Adding FP"),
                            (O.fp = {
                                value: e.startTime,
                                unit: "millisecond",
                            })),
                            "first-contentful-paint" === e.name &&
                                A &&
                                (R.X && l.kg.log("[Measurements] Adding FCP"),
                                (O.fcp = {
                                    value: e.startTime,
                                    unit: "millisecond",
                                }));
                        break;
                    }
                    case "resource":
                        !(function (t, e, _, a, r, n) {
                            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                            let o = (0, I.en)(_),
                                i = { [E.S3]: "auto.resource.browser.metrics" };
                            S(i, e, "transferSize", "http.response_transfer_size"),
                                S(i, e, "encodedBodySize", "http.response_content_length"),
                                S(i, e, "decodedBodySize", "http.decoded_response_content_length"),
                                "renderBlockingStatus" in e &&
                                    (i["resource.render_blocking_status"] = e.renderBlockingStatus),
                                o.protocol && (i["url.scheme"] = o.protocol.split(":").pop()),
                                o.host && (i["server.address"] = o.host),
                                (i["url.same_origin"] = _.includes(N.m.location.origin));
                            let c = n + a;
                            (0, u.Y)(t, c, c + r, {
                                name: _.replace(N.m.location.origin, ""),
                                op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                attributes: i,
                            });
                        })(t, e, e.name, a, r, _);
                }
        }),
        (f = Math.max(o.length - 1, 0)),
        (function (t) {
            let e = N.m.navigator;
            if (!e) return;
            let _ = e.connection;
            _ &&
                (_.effectiveType && t.setAttribute("effectiveConnectionType", _.effectiveType),
                _.type && t.setAttribute("connectionType", _.type),
                (0, u.nl)(_.rtt) &&
                    (O["connection.rtt"] = {
                        value: _.rtt,
                        unit: "millisecond",
                    })),
                (0, u.nl)(e.deviceMemory) && t.setAttribute("deviceMemory", `${e.deviceMemory} GB`),
                (0, u.nl)(e.hardwareConcurrency) &&
                    t.setAttribute("hardwareConcurrency", String(e.hardwareConcurrency));
        })(t),
        "pageload" === A)
    ) {
        var p;
        (function (t) {
            let e = (0, T.W)();
            if (!e) return;
            let { responseStart: _, requestStart: a } = e;
            a <= _ &&
                (R.X && l.kg.log("[Measurements] Adding TTFB Request Time"),
                (t["ttfb.requestTime"] = {
                    value: _ - a,
                    unit: "millisecond",
                }));
        })(O),
            ["fcp", "fp", "lcp"].forEach((t) => {
                let e = O[t];
                if (!e || !L || _ >= L) return;
                let a = e.value,
                    r = Math.abs((_ + (0, u.XL)(a) - L) * 1000),
                    n = r - a;
                R.X && l.kg.log(`[Measurements] Normalized ${t} from ${a} to ${r} (${n})`), (e.value = r);
            });
        let e = O["mark.fid"];
        e &&
            O.fid &&
            ((0, u.Y)(t, e.value, e.value + (0, u.XL)(O.fid.value), {
                name: "first input delay",
                op: "ui.action",
                attributes: { [E.S3]: "auto.ui.browser.metrics" },
            }),
            delete O["mark.fid"]),
            "fcp" in O || delete O.cls,
            Object.entries(O).forEach(([t, e]) => {
                (0, i.o)(t, e.value, e.unit);
            }),
            (p = t),
            a &&
                (R.X && l.kg.log("[Measurements] Adding LCP Data"),
                a.element && p.setAttribute("lcp.element", (0, s.Rt)(a.element)),
                a.id && p.setAttribute("lcp.id", a.id),
                a.url && p.setAttribute("lcp.url", a.url.trim().slice(0, 200)),
                p.setAttribute("lcp.size", a.size)),
            r &&
                r.sources &&
                (R.X && l.kg.log("[Measurements] Adding CLS Data"),
                r.sources.forEach((t, e) => p.setAttribute(`cls.source.${e + 1}`, (0, s.Rt)(t.node))));
    }
    (a = void 0), (r = void 0), (O = {});
}
function D(t, e, _, a, r, n) {
    let o = n ? e[n] : e[`${_}End`],
        i = e[`${_}Start`];
    i &&
        o &&
        (0, u.Y)(t, a + (0, u.XL)(i), a + (0, u.XL)(o), {
            op: "browser",
            name: r || _,
            attributes: { [E.S3]: "auto.ui.browser.metrics" },
        });
}
function S(t, e, _, a) {
    let r = e[_];
    null != r && r < 2147483647 && (t[a] = r);
}
