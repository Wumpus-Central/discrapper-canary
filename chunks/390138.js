let n, a;
r.d(t, {
    Fv: () => S,
    Jk: () => C,
    PR: () => D,
    f7: () => g,
    sn: () => L,
});
var i = r(82255),
    o = r(700868),
    _ = r(8062),
    s = r(21410),
    c = r(343573),
    E = r(309063),
    l = r(98076),
    u = r(840247),
    d = r(808446),
    I = r(514962),
    p = r(411571),
    R = r(687566),
    T = r(13379),
    A = r(560684),
    N = r(24931),
    f = r(722778);
let O = 0,
    h = {};
function D({ recordClsStandaloneSpans: e }) {
    let t = (0, T.QV)();
    if (t && c.Z1) {
        t.mark && I.m.performance.mark("sentry-tracing-init");
        let r = (0, R.to)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                if (!t) return;
                let r = (0, T.XL)(c.Z1),
                    n = (0, T.XL)(t.startTime);
                d.X && l.kg.log("[Measurements] Adding FID"),
                    (h.fid = {
                        value: e.value,
                        unit: "millisecond",
                    }),
                    (h["mark.fid"] = {
                        value: r + n,
                        unit: "second",
                    });
            }),
            i = (0, R.$A)(({ metric: e }) => {
                let t = e.entries[e.entries.length - 1];
                t &&
                    (d.X && l.kg.log("[Measurements] Adding LCP"),
                    (h.lcp = {
                        value: e.value,
                        unit: "millisecond",
                    }),
                    (n = t));
            }, !0),
            o = (0, R._4)(({ metric: e }) => {
                e.entries[e.entries.length - 1] &&
                    (d.X && l.kg.log("[Measurements] Adding TTFB"),
                    (h.ttfb = {
                        value: e.value,
                        unit: "millisecond",
                    }));
            }),
            _ = e
                ? (0, p.H)()
                : (0, R.PR)(({ metric: e }) => {
                      let t = e.entries[e.entries.length - 1];
                      t &&
                          (d.X && l.kg.log(`[Measurements] Adding CLS ${e.value}`),
                          (h.cls = {
                              value: e.value,
                              unit: "",
                          }),
                          (a = t));
                  }, !0);
        return () => {
            r(), i(), o(), _ && _();
        };
    }
    return () => void 0;
}
function S() {
    (0, R._j)("longtask", ({ entries: e }) => {
        if ((0, i.HN)())
            for (let t of e) {
                let e = (0, T.XL)(c.Z1 + t.startTime),
                    r = (0, T.XL)(t.duration),
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
function C() {
    new PerformanceObserver((e) => {
        if ((0, i.HN)())
            for (let t of e.getEntries()) {
                if (!t.scripts[0]) continue;
                let e = (0, T.XL)(c.Z1 + t.startTime),
                    r = (0, T.XL)(t.duration),
                    n = { [_.S3]: "auto.ui.browser.metrics" },
                    {
                        invoker: a,
                        invokerType: i,
                        sourceURL: s,
                        sourceFunctionName: E,
                        sourceCharPosition: l,
                    } = t.scripts[0];
                (n["browser.script.invoker"] = a),
                    (n["browser.script.invoker_type"] = i),
                    s && (n["code.filepath"] = s),
                    E && (n["code.function"] = E),
                    -1 !== l && (n["browser.script.source_char_position"] = l);
                let u = (0, o.qp)({
                    name: "Main UI thread blocked",
                    op: "ui.long-animation-frame",
                    startTime: e,
                    attributes: n,
                });
                u && u.end(e + r);
            }
    }).observe({
        type: "long-animation-frame",
        buffered: !0,
    });
}
function L() {
    (0, R._j)("event", ({ entries: e }) => {
        if ((0, i.HN)()) {
            for (let t of e)
                if ("click" === t.name) {
                    let e = (0, T.XL)(c.Z1 + t.startTime),
                        r = (0, T.XL)(t.duration),
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
function g(e, t) {
    let r = (0, T.QV)();
    if (!r || !I.m.performance.getEntries || !c.Z1) return;
    d.X && l.kg.log("[Tracing] Adding & adjusting spans using Performance API");
    let o = (0, T.XL)(c.Z1),
        p = r.getEntries(),
        { op: R, start_timestamp: D } = (0, i.XU)(e);
    if (
        (p.slice(O).forEach((t) => {
            let r = (0, T.XL)(t.startTime),
                n = (0, T.XL)(Math.max(0, t.duration));
            if ("navigation" !== R || !D || !(o + r < D))
                switch (t.entryType) {
                    case "navigation":
                        var a, i, s;
                        (a = e),
                            (i = t),
                            (s = o),
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(
                                (e) => {
                                    m(a, i, e, s);
                                },
                            ),
                            m(a, i, "secureConnection", s, "TLS/SSL", "connectEnd"),
                            m(a, i, "fetch", s, "cache", "domainLookupStart"),
                            m(a, i, "domainLookup", s, "DNS"),
                            (function (e, t, r) {
                                let n = r + (0, T.XL)(t.requestStart),
                                    a = r + (0, T.XL)(t.responseEnd),
                                    i = r + (0, T.XL)(t.responseStart);
                                t.responseEnd &&
                                    ((0, T.Y)(e, n, a, {
                                        op: "browser",
                                        name: "request",
                                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                                    }),
                                    (0, T.Y)(e, i, a, {
                                        op: "browser",
                                        name: "response",
                                        attributes: { [_.S3]: "auto.ui.browser.metrics" },
                                    }));
                            })(a, i, s);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        var c = e,
                            E = t,
                            p = r,
                            A = n,
                            O = o;
                        let a = (0, N.W)(),
                            i = O + Math.max(p, (0, T.XL)(a ? a.requestStart : 0)),
                            s = O + p,
                            u = { [_.S3]: "auto.resource.browser.metrics" };
                        i !== s &&
                            ((u["sentry.browser.measure_happened_before_request"] = !0),
                            (u["sentry.browser.measure_start_time"] = i)),
                            (0, T.Y)(c, i, s + A, {
                                name: E.name,
                                op: E.entryType,
                                attributes: u,
                            });
                        let I = (0, f.Y)(),
                            R = t.startTime < I.firstHiddenTime;
                        "first-paint" === t.name &&
                            R &&
                            (d.X && l.kg.log("[Measurements] Adding FP"),
                            (h.fp = {
                                value: t.startTime,
                                unit: "millisecond",
                            })),
                            "first-contentful-paint" === t.name &&
                                R &&
                                (d.X && l.kg.log("[Measurements] Adding FCP"),
                                (h.fcp = {
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
                            y(s, t, "transferSize", "http.response_transfer_size"),
                                y(s, t, "encodedBodySize", "http.response_content_length"),
                                y(s, t, "decodedBodySize", "http.decoded_response_content_length"),
                                "renderBlockingStatus" in t &&
                                    (s["resource.render_blocking_status"] = t.renderBlockingStatus),
                                o.protocol && (s["url.scheme"] = o.protocol.split(":").pop()),
                                o.host && (s["server.address"] = o.host),
                                (s["url.same_origin"] = r.includes(I.m.location.origin));
                            let c = i + n;
                            (0, T.Y)(e, c, c + a, {
                                name: r.replace(I.m.location.origin, ""),
                                op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                attributes: s,
                            });
                        })(e, t, t.name, r, n, o);
                }
        }),
        (O = Math.max(p.length - 1, 0)),
        (function (e) {
            let t = I.m.navigator;
            if (!t) return;
            let r = t.connection;
            r &&
                (r.effectiveType && e.setAttribute("effectiveConnectionType", r.effectiveType),
                r.type && e.setAttribute("connectionType", r.type),
                (0, T.nl)(r.rtt) &&
                    (h["connection.rtt"] = {
                        value: r.rtt,
                        unit: "millisecond",
                    })),
                (0, T.nl)(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
                (0, T.nl)(t.hardwareConcurrency) &&
                    e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency));
        })(e),
        "pageload" === R)
    ) {
        var S;
        !(function (e) {
            let t = (0, N.W)();
            if (!t) return;
            let { responseStart: r, requestStart: n } = t;
            n <= r &&
                (d.X && l.kg.log("[Measurements] Adding TTFB Request Time"),
                (e["ttfb.requestTime"] = {
                    value: r - n,
                    unit: "millisecond",
                }));
        })(h);
        let r = h["mark.fid"];
        r &&
            h.fid &&
            ((0, T.Y)(e, r.value, r.value + (0, T.XL)(h.fid.value), {
                name: "first input delay",
                op: "ui.action",
                attributes: { [_.S3]: "auto.ui.browser.metrics" },
            }),
            delete h["mark.fid"]),
            ("fcp" in h && t.recordClsOnPageloadSpan) || delete h.cls,
            Object.entries(h).forEach(([e, t]) => {
                (0, s.o)(e, t.value, t.unit);
            }),
            e.setAttribute("performance.timeOrigin", o),
            e.setAttribute("performance.activationStart", (0, A.A)()),
            (S = e),
            n &&
                (d.X && l.kg.log("[Measurements] Adding LCP Data"),
                n.element && S.setAttribute("lcp.element", (0, E.Rt)(n.element)),
                n.id && S.setAttribute("lcp.id", n.id),
                n.url && S.setAttribute("lcp.url", n.url.trim().slice(0, 200)),
                S.setAttribute("lcp.size", n.size)),
            a &&
                a.sources &&
                (d.X && l.kg.log("[Measurements] Adding CLS Data"),
                a.sources.forEach((e, t) => S.setAttribute(`cls.source.${t + 1}`, (0, E.Rt)(e.node))));
    }
    (n = void 0), (a = void 0), (h = {});
}
function m(e, t, r, n, a, i) {
    let o = i ? t[i] : t[`${r}End`],
        s = t[`${r}Start`];
    s &&
        o &&
        (0, T.Y)(e, n + (0, T.XL)(s), n + (0, T.XL)(o), {
            op: "browser",
            name: a || r,
            attributes: { [_.S3]: "auto.ui.browser.metrics" },
        });
}
function y(e, t, r, n) {
    let a = t[r];
    null != a && a < 2147483647 && (e[n] = a);
}
