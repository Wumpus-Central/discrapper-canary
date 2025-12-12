let r, i;
n.d(t, {
    Fv: () => L,
    Jk: () => g,
    PR: () => S,
    f7: () => D,
    sn: () => m,
});
var a = n(82255),
    o = n(700868),
    _ = n(8062),
    s = n(21410),
    c = n(343573),
    E = n(309063),
    l = n(98076),
    u = n(840247),
    d = n(808446),
    p = n(514962),
    f = n(411571),
    I = n(687566),
    T = n(13379),
    R = n(560684),
    A = n(24931),
    N = n(722778);
let h = 0,
    O = {};
function S({ recordClsStandaloneSpans: e }) {
    let t = (0, T.QV)();
    if (t && c.Z1) {
        t.mark && p.m.performance.mark("sentry-tracing-init");
        let n = (0, I.to)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                if (!t) return;
                let n = (0, T.XL)(c.Z1),
                    r = (0, T.XL)(t.startTime);
                d.X && l.kg.log("[Measurements] Adding FID"),
                    (O.fid = {
                        value: e.value,
                        unit: "millisecond",
                    }),
                    (O["mark.fid"] = {
                        value: n + r,
                        unit: "second",
                    });
            }),
            a = (0, I.$A)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                t &&
                    (d.X && l.kg.log("[Measurements] Adding LCP"),
                    (O.lcp = {
                        value: e.value,
                        unit: "millisecond",
                    }),
                    (r = t));
            }, !0),
            o = (0, I._4)(({ metric: e }) => {
                e.entries[e.entries.length - 1] &&
                    (d.X && l.kg.log("[Measurements] Adding TTFB"),
                    (O.ttfb = {
                        value: e.value,
                        unit: "millisecond",
                    }));
            }),
            _ = e
                ? (0, f.H)()
                : (0, I.PR)(({ metric: e }) => {
                      let t = e.entries[e.entries.length - 1];
                      t &&
                          (d.X && l.kg.log(`[Measurements] Adding CLS ${e.value}`),
                          (O.cls = {
                              value: e.value,
                              unit: "",
                          }),
                          (i = t));
                  }, !0);
        return () => {
            n(), a(), o(), _ && _();
        };
    }
    return () => void 0;
}
function L() {
    (0, I._j)("longtask", ({ entries: e }) => {
        if ((0, a.HN)())
            for (let t of e) {
                let e = (0, T.XL)(c.Z1 + t.startTime),
                    n = (0, T.XL)(t.duration),
                    r = (0, o.qp)({
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        startTime: e,
                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                    });
                r && r.end(e + n);
            }
    });
}
function g() {
    new PerformanceObserver((e) => {
        if ((0, a.HN)())
            for (let t of e.getEntries()) {
                if (!t.scripts[0]) continue;
                let e = (0, T.XL)(c.Z1 + t.startTime),
                    n = (0, T.XL)(t.duration),
                    r = { [_.S3]: "auto.ui.browser.metrics" },
                    {
                        invoker: i,
                        invokerType: a,
                        sourceURL: s,
                        sourceFunctionName: E,
                        sourceCharPosition: l,
                    } = t.scripts[0];
                (r["browser.script.invoker"] = i),
                    (r["browser.script.invoker_type"] = a),
                    s && (r["code.filepath"] = s),
                    E && (r["code.function"] = E),
                    -1 !== l && (r["browser.script.source_char_position"] = l);
                let u = (0, o.qp)({
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    startTime: e,
                    attributes: r,
                });
                u && u.end(e + n);
            }
    }).observe({
        type: "long-animation-frame",
        buffered: !0,
    });
}
function m() {
    (0, I._j)("event", ({ entries: e }) => {
        if ((0, a.HN)()) {
            for (let t of e)
                if ("click" === t.name) {
                    let e = (0, T.XL)(c.Z1 + t.startTime),
                        n = (0, T.XL)(t.duration),
                        r = {
                            name: (0, E.Rt)(t.target),
                            op: `ui.interaction.${t.name}`,
                            startTime: e,
                            attributes: { [_.S3]: "auto.ui.browser.metrics" },
                        },
                        i = (0, E.iY)(t.target);
                    i && (r.attributes["ui.component_name"] = i);
                    let a = (0, o.qp)(r);
                    a && a.end(e + n);
                }
        }
    });
}
function D(e, t) {
    let n = (0, T.QV)();
    if (!n || !p.m.performance.getEntries || !c.Z1) return;
    d.X && l.kg.log("[Tracing] Adding & adjusting spans using Performance API");
    let o = (0, T.XL)(c.Z1),
        f = n.getEntries(),
        { op: I, start_timestamp: S } = (0, a.XU)(e);
    if (
        (f.slice(h).forEach((t) => {
            let n = (0, T.XL)(t.startTime),
                r = (0, T.XL)(Math.max(0, t.duration));
            if ("navigation" !== I || !S || !(o + n < S))
                switch (t.entryType) {
                    case "navigation":
                        var i, a, s;
                        (i = e),
                            (a = t),
                            (s = o),
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(
                                (e) => {
                                    C(i, a, e, s);
                                },
                            ),
                            C(i, a, "secureConnection", s, "TLS/SSL", "connectEnd"),
                            C(i, a, "fetch", s, "cache", "domainLookupStart"),
                            C(i, a, "domainLookup", s, "DNS"),
                            (function (e, t, n) {
                                let r = n + (0, T.XL)(t.requestStart),
                                    i = n + (0, T.XL)(t.responseEnd),
                                    a = n + (0, T.XL)(t.responseStart);
                                t.responseEnd &&
                                    ((0, T.Y)(e, r, i, {
                                        op: "browser",
                                        name: "request",
                                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                                    }),
                                    (0, T.Y)(e, a, i, {
                                        op: "browser",
                                        name: "response",
                                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                                    }));
                            })(i, a, s);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        var c = e,
                            E = t,
                            f = n,
                            R = r,
                            h = o;
                        let i = (0, A.W)(),
                            a = h + Math.max(f, (0, T.XL)(i ? i.requestStart : 0)),
                            s = h + f,
                            u = { [_.S3]: "auto.resource.browser.metrics" };
                        a !== s &&
                            ((u["sentry.browser.measure_happened_before_request"] = !0),
                            (u["sentry.browser.measure_start_time"] = a)),
                            (0, T.Y)(c, a, s + R, {
                                name: E.name,
                                op: E.entryType,
                                attributes: u,
                            });
                        let p = (0, N.Y)(),
                            I = t.startTime < p.firstHiddenTime;
                        "first-paint" === t.name &&
                            I &&
                            (d.X && l.kg.log("[Measurements] Adding FP"),
                            (O.fp = {
                                value: t.startTime,
                                unit: "millisecond",
                            })),
                            "first-contentful-paint" === t.name &&
                                I &&
                                (d.X && l.kg.log("[Measurements] Adding FCP"),
                                (O.fcp = {
                                    value: t.startTime,
                                    unit: "millisecond",
                                }));
                        break;
                    }
                    case "resource":
                        !(function (e, t, n, r, i, a) {
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                            let o = (0, u.en)(n),
                                s = { [_.S3]: "auto.resource.browser.metrics" };
                            y(s, t, "transferSize", "http.response_transfer_size"),
                                y(s, t, "encodedBodySize", "http.response_content_length"),
                                y(s, t, "decodedBodySize", "http.decoded_response_content_length"),
                                "renderBlockingStatus" in t &&
                                    (s["resource.render_blocking_status"] = t.renderBlockingStatus),
                                o.protocol && (s["url.scheme"] = o.protocol.split(":").pop()),
                                o.host && (s["server.address"] = o.host),
                                (s["url.same_origin"] = n.includes(p.m.location.origin));
                            let c = a + r;
                            (0, T.Y)(e, c, c + i, {
                                name: n.replace(p.m.location.origin, ""),
                                op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                attributes: s,
                            });
                        })(e, t, t.name, n, r, o);
                }
        }),
        (h = Math.max(f.length - 1, 0)),
        (function (e) {
            let t = p.m.navigator;
            if (!t) return;
            let n = t.connection;
            n &&
                (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
                n.type && e.setAttribute("connectionType", n.type),
                (0, T.nl)(n.rtt) &&
                    (O["connection.rtt"] = {
                        value: n.rtt,
                        unit: "millisecond",
                    })),
                (0, T.nl)(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
                (0, T.nl)(t.hardwareConcurrency) &&
                    e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency));
        })(e),
        "pageload" === I)
    ) {
        var L;
        !(function (e) {
            let t = (0, A.W)();
            if (!t) return;
            let { responseStart: n, requestStart: r } = t;
            r <= n &&
                (d.X && l.kg.log("[Measurements] Adding TTFB Request Time"),
                (e["ttfb.requestTime"] = {
                    value: n - r,
                    unit: "millisecond",
                }));
        })(O);
        let n = O["mark.fid"];
        n &&
            O.fid &&
            ((0, T.Y)(e, n.value, n.value + (0, T.XL)(O.fid.value), {
                name: "first input delay",
                op: "ui.action",
                attributes: { [_.S3]: "auto.ui.browser.metrics" },
            }),
            delete O["mark.fid"]),
            ("fcp" in O && t.recordClsOnPageloadSpan) || delete O.cls,
            Object.entries(O).forEach(([e, t]) => {
                (0, s.o)(e, t.value, t.unit);
            }),
            e.setAttribute("performance.timeOrigin", o),
            e.setAttribute("performance.activationStart", (0, R.A)()),
            (L = e),
            r &&
                (d.X && l.kg.log("[Measurements] Adding LCP Data"),
                r.element && L.setAttribute("lcp.element", (0, E.Rt)(r.element)),
                r.id && L.setAttribute("lcp.id", r.id),
                r.url && L.setAttribute("lcp.url", r.url.trim().slice(0, 200)),
                L.setAttribute("lcp.size", r.size)),
            i &&
                i.sources &&
                (d.X && l.kg.log("[Measurements] Adding CLS Data"),
                i.sources.forEach((e, t) => L.setAttribute(`cls.source.${t + 1}`, (0, E.Rt)(e.node))));
    }
    (r = void 0), (i = void 0), (O = {});
}
function C(e, t, n, r, i, a) {
    let o = a ? t[a] : t[`${n}End`],
        s = t[`${n}Start`];
    s &&
        o &&
        (0, T.Y)(e, r + (0, T.XL)(s), r + (0, T.XL)(o), {
            op: "browser",
            name: i || n,
            attributes: { [_.S3]: "auto.ui.browser.metrics" },
        });
}
function y(e, t, n, r) {
    let i = t[n];
    null != i && i < 2147483647 && (e[r] = i);
}
