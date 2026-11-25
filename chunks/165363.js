n(321073);
var r = n(991690),
    s = n(182025);
let o = new Set([s.nW.FAILED, s.nW.TIMEOUT]),
    i = [s.aY.LAUNCH_STARTED, s.aY.DISPATCHED, s.aY.IFRAME_CREATED, s.aY.IFRAME_LOAD, s.aY.HANDSHAKE, s.aY.READY],
    l = new Set(i);
function a(e) {
    return `launch.${e}`;
}
let c = new Set(i.map(a));
n.d(
    t,
    {},
    {
        l: c,
        x: function (e) {
            var t, n, i;
            let c,
                d,
                u,
                p = [];
            function h(e) {
                let t = p.length;
                return (p.push({ id: t, ...e }), t);
            }
            let _ = h(
                ((t = e),
                (d = r.U[t.surface].toLowerCase()),
                (u = {
                    parent: null,
                    name: `launch.${d}`,
                    start: 0,
                    end: t.totalMs,
                    attrs: { outcome: t.outcome, trigger: t.trigger, surface: d, closed_by: t.closedBy },
                    details:
                        ((c = { application_id: (n = t).applicationId }),
                        null != n.readyMs && (c.ready_ms = n.readyMs),
                        null != n.pageLoadMs && (c.page_load_ms = n.pageLoadMs),
                        null != n.pageLoadSource && (c.page_load_source = n.pageLoadSource),
                        null != n.sdkVersion && (c.sdk_version = n.sdkVersion),
                        c),
                }),
                o.has(t.outcome) && (u.error = t.error ?? t.outcome),
                u),
            );
            for (let t of e.steps) {
                let n = h(
                    (function (e, t, n) {
                        var r, o;
                        let i = {
                            parent: t,
                            name: a(e.step),
                            start: e.startMs,
                            end:
                                ((r = e),
                                (o = n),
                                null != r.durationMs
                                    ? r.startMs + r.durationMs
                                    : r.status === s.xo.PENDING
                                      ? o.totalMs
                                      : r.startMs),
                        };
                        return (
                            e.status !== s.xo.OK && (i.attrs = { status: e.status }),
                            e.status === s.xo.FAILED && (i.error = "failed"),
                            i
                        );
                    })(t, _, e),
                );
                for (let e of (l.has(t.step) && (n = _), t.resources)) {
                    h(
                        ((i = e),
                        {
                            parent: n,
                            name: `request.${i.kind}`,
                            start: i.startMs,
                            end: i.startMs + i.durationMs,
                            attrs: { path: i.path },
                            details: (function (e) {
                                let { phases: t } = e,
                                    n = {};
                                for (let r of ("" !== e.protocol && (n.protocol = e.protocol),
                                (n.transfer_size = e.transferSize),
                                (n.dns_ms = t.dns),
                                (n.connect_ms = t.connect),
                                (n.tls_ms = t.tls),
                                (n.request_ms = t.request),
                                (n.ttfb_ms = t.ttfb),
                                (n.download_ms = t.download),
                                e.serverTiming))
                                    n[`server ${r.name}`] = (function (e) {
                                        let t = `${e.duration}ms`;
                                        return "" === e.description ? t : `${t} ${e.description}`;
                                    })(r);
                                return n;
                            })(i),
                        }),
                    );
                }
            }
            return {
                id: `frame-launch:${e.launchId}`,
                name: "App Launch",
                started_at: e.startedAt,
                as_of: e.totalMs,
                started_by: null,
                spans: p,
                dropped: 0,
                live: !1,
            };
        },
    },
);
