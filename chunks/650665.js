let n, a;
r.d(t, {
    Fv: () => h,
    Jk: () => D,
    PR: () => O,
    f7: () => L,
    sn: () => S,
});
var i = r(696486),
    o = r(152228),
    _ = r(988097),
    s = r(241225),
    c = r(101284),
    E = r(467510),
    l = r(622916),
    u = r(873567),
    d = r(665909),
    I = r(395848),
    p = r(501684),
    R = r(108185),
    T = r(896247),
    A = r(416987);
let N = 0,
    f = {};
function O() {
    let e = (0, R.QV)();
    if (e && c.Z1) {
        e.mark && I.m.performance.mark("sentry-tracing-init");
        let t = (0, p.to)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                if (!t) return;
                let r = (0, R.XL)(c.Z1),
                    n = (0, R.XL)(t.startTime);
                d.X && l.kg.log("[Measurements] Adding FID"),
                    (f.fid = {
                        value: e.value,
                        unit: "millisecond",
                    }),
                    (f["mark.fid"] = {
                        value: r + n,
                        unit: "second",
                    });
            }),
            r = (0, p.PR)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                t &&
                    (d.X && l.kg.log("[Measurements] Adding CLS"),
                    (f.cls = {
                        value: e.value,
                        unit: "",
                    }),
                    (a = t));
            }, !0),
            i = (0, p.$A)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                t &&
                    (d.X && l.kg.log("[Measurements] Adding LCP"),
                    (f.lcp = {
                        value: e.value,
                        unit: "millisecond",
                    }),
                    (n = t));
            }, !0),
            o = (0, p._4)(({ metric: e }) => {
                e.entries[e.entries.length - 1] &&
                    (d.X && l.kg.log("[Measurements] Adding TTFB"),
                    (f.ttfb = {
                        value: e.value,
                        unit: "millisecond",
                    }));
            });
        return () => {
            t(), r(), i(), o();
        };
    }
    return () => void 0;
}
function h() {
    (0, p._j)("longtask", ({ entries: e }) => {
        for (let t of e) {
            if (!(0, i.HN)()) return;
            let e = (0, R.XL)(c.Z1 + t.startTime),
                r = (0, R.XL)(t.duration),
                n = (0, o.qp)({
                    name: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTime: e,
                    attributes: { [_.S3]: "auto.ui.browser.metrics" },
                });
            n && n.end(e + r);
        }
    });
}
function D() {
    new PerformanceObserver((e) => {
        for (let t of e.getEntries()) {
            if (!(0, i.HN)() || !t.scripts[0]) return;
            let e = (0, R.XL)(c.Z1 + t.startTime),
                r = (0, R.XL)(t.duration),
                n = { [_.S3]: "auto.ui.browser.metrics" },
                a = t.scripts[0];
            if (a) {
                let { invoker: e, invokerType: t, sourceURL: r, sourceFunctionName: i, sourceCharPosition: o } = a;
                (n["browser.script.invoker"] = e),
                    (n["browser.script.invoker_type"] = t),
                    r && (n["code.filepath"] = r),
                    i && (n["code.function"] = i),
                    -1 !== o && (n["browser.script.source_char_position"] = o);
            }
            let s = (0, o.qp)({
                name: "Main UI thread blocked",
                op: "ui.long-animation-frame",
                startTime: e,
                attributes: n,
            });
            s && s.end(e + r);
        }
    }).observe({
        type: "long-animation-frame",
        buffered: !0,
    });
}
function S() {
    (0, p._j)("event", ({ entries: e }) => {
        for (let t of e) {
            if (!(0, i.HN)()) return;
            if ("click" === t.name) {
                let e = (0, R.XL)(c.Z1 + t.startTime),
                    r = (0, R.XL)(t.duration),
                    n = {
                        name: (0, E.Rt)(t.target),
                        op: `ui.interaction.${t.name}`,
                        startTime: e,
                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                    },
                    a = (0, E.iY)(t.target);
                a && (n.attributes["ui.component_name"] = a);
                let i = (0, o.qp)(n);
                i && i.end(e + r);
            }
        }
    });
}
function L(e) {
    let t = (0, R.QV)();
    if (!t || !I.m.performance.getEntries || !c.Z1) return;
    d.X && l.kg.log("[Tracing] Adding & adjusting spans using Performance API");
    let r = (0, R.XL)(c.Z1),
        o = t.getEntries(),
        { op: p, start_timestamp: O } = (0, i.XU)(e);
    if (
        (o.slice(N).forEach((t) => {
            let n = (0, R.XL)(t.startTime),
                a = (0, R.XL)(Math.max(0, t.duration));
            if ("navigation" !== p || !O || !(r + n < O))
                switch (t.entryType) {
                    case "navigation":
                        var i, o, s;
                        (i = e),
                            (o = t),
                            (s = r),
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(
                                (e) => {
                                    C(i, o, e, s);
                                },
                            ),
                            C(i, o, "secureConnection", s, "TLS/SSL", "connectEnd"),
                            C(i, o, "fetch", s, "cache", "domainLookupStart"),
                            C(i, o, "domainLookup", s, "DNS"),
                            (function (e, t, r) {
                                let n = r + (0, R.XL)(t.requestStart),
                                    a = r + (0, R.XL)(t.responseEnd),
                                    i = r + (0, R.XL)(t.responseStart);
                                t.responseEnd &&
                                    ((0, R.Y)(e, n, a, {
                                        op: "browser",
                                        name: "request",
                                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                                    }),
                                    (0, R.Y)(e, i, a, {
                                        op: "browser",
                                        name: "response",
                                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                                    }));
                            })(i, o, s);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        var c = e,
                            E = t,
                            N = n,
                            h = a,
                            D = r;
                        let i = (0, T.W)(),
                            o = D + Math.max(N, (0, R.XL)(i ? i.requestStart : 0)),
                            s = D + N,
                            u = { [_.S3]: "auto.resource.browser.metrics" };
                        o !== s &&
                            ((u["sentry.browser.measure_happened_before_request"] = !0),
                            (u["sentry.browser.measure_start_time"] = o)),
                            (0, R.Y)(c, o, s + h, {
                                name: E.name,
                                op: E.entryType,
                                attributes: u,
                            });
                        let I = (0, A.Y)(),
                            p = t.startTime < I.firstHiddenTime;
                        "first-paint" === t.name &&
                            p &&
                            (d.X && l.kg.log("[Measurements] Adding FP"),
                            (f.fp = {
                                value: t.startTime,
                                unit: "millisecond",
                            })),
                            "first-contentful-paint" === t.name &&
                                p &&
                                (d.X && l.kg.log("[Measurements] Adding FCP"),
                                (f.fcp = {
                                    value: t.startTime,
                                    unit: "millisecond",
                                }));
                        break;
                    }
                    case "resource":
                        !(function (e, t, r, n, a, i) {
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                            let o = (0, u.en)(r),
                                s = { [_.S3]: "auto.resource.browser.metrics" };
                            g(s, t, "transferSize", "http.response_transfer_size"),
                                g(s, t, "encodedBodySize", "http.response_content_length"),
                                g(s, t, "decodedBodySize", "http.decoded_response_content_length"),
                                "renderBlockingStatus" in t &&
                                    (s["resource.render_blocking_status"] = t.renderBlockingStatus),
                                o.protocol && (s["url.scheme"] = o.protocol.split(":").pop()),
                                o.host && (s["server.address"] = o.host),
                                (s["url.same_origin"] = r.includes(I.m.location.origin));
                            let c = i + n;
                            (0, R.Y)(e, c, c + a, {
                                name: r.replace(I.m.location.origin, ""),
                                op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                attributes: s,
                            });
                        })(e, t, t.name, n, a, r);
                }
        }),
        (N = Math.max(o.length - 1, 0)),
        (function (e) {
            let t = I.m.navigator;
            if (!t) return;
            let r = t.connection;
            r &&
                (r.effectiveType && e.setAttribute("effectiveConnectionType", r.effectiveType),
                r.type && e.setAttribute("connectionType", r.type),
                (0, R.nl)(r.rtt) &&
                    (f["connection.rtt"] = {
                        value: r.rtt,
                        unit: "millisecond",
                    })),
                (0, R.nl)(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
                (0, R.nl)(t.hardwareConcurrency) &&
                    e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency));
        })(e),
        "pageload" === p)
    ) {
        var h;
        (function (e) {
            let t = (0, T.W)();
            if (!t) return;
            let { responseStart: r, requestStart: n } = t;
            n <= r &&
                (d.X && l.kg.log("[Measurements] Adding TTFB Request Time"),
                (e["ttfb.requestTime"] = {
                    value: r - n,
                    unit: "millisecond",
                }));
        })(f),
            ["fcp", "fp", "lcp"].forEach((e) => {
                let t = f[e];
                if (!t || !O || r >= O) return;
                let n = t.value,
                    a = Math.abs((r + (0, R.XL)(n) - O) * 1000),
                    i = a - n;
                d.X && l.kg.log(`[Measurements] Normalized ${e} from ${n} to ${a} (${i})`), (t.value = a);
            });
        let t = f["mark.fid"];
        t &&
            f.fid &&
            ((0, R.Y)(e, t.value, t.value + (0, R.XL)(f.fid.value), {
                name: "first input delay",
                op: "ui.action",
                attributes: { [_.S3]: "auto.ui.browser.metrics" },
            }),
            delete f["mark.fid"]),
            "fcp" in f || delete f.cls,
            Object.entries(f).forEach(([e, t]) => {
                (0, s.o)(e, t.value, t.unit);
            }),
            (h = e),
            n &&
                (d.X && l.kg.log("[Measurements] Adding LCP Data"),
                n.element && h.setAttribute("lcp.element", (0, E.Rt)(n.element)),
                n.id && h.setAttribute("lcp.id", n.id),
                n.url && h.setAttribute("lcp.url", n.url.trim().slice(0, 200)),
                h.setAttribute("lcp.size", n.size)),
            a &&
                a.sources &&
                (d.X && l.kg.log("[Measurements] Adding CLS Data"),
                a.sources.forEach((e, t) => h.setAttribute(`cls.source.${t + 1}`, (0, E.Rt)(e.node))));
    }
    (n = void 0), (a = void 0), (f = {});
}
function C(e, t, r, n, a, i) {
    let o = i ? t[i] : t[`${r}End`],
        s = t[`${r}Start`];
    s &&
        o &&
        (0, R.Y)(e, n + (0, R.XL)(s), n + (0, R.XL)(o), {
            op: "browser",
            name: a || r,
            attributes: { [_.S3]: "auto.ui.browser.metrics" },
        });
}
function g(e, t, r, n) {
    let a = t[r];
    null != a && a < 2147483647 && (e[n] = a);
}
