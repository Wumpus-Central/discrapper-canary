n(321073);
var l = n(697361),
    r = n(667931);
function i(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function a(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function o(e) {
    return a(e.count > 1 ? e.totalMs : e.end - e.start);
}
let u = ["Arguments", "Result", "Usage", "Details"];
function c(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function d(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
n.d(
    t,
    {},
    {
        $Q: function (e) {
            return 0 === e ? "0" : a(e);
        },
        Jw: function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      s(t.calls, "model call"),
                      `${i(t.input)} in`,
                      `${i(t.output)} out`,
                      `${i(t.cacheRead)} cache read`,
                      `${i(t.cacheWrite)} cache write`,
                      d(t.costUsd),
                  ].join(" \xb7 ");
        },
        LK: function (e) {
            let t = (0, r.bM)(e)?.end;
            return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, r.lp)(e) ? "interrupted" : "still running";
        },
        Pv: { running: "Running", ok: "Done", error: "Failed" },
        Rx: {
            op: "Operation",
            model: "Model",
            tool: "Tool",
            setup: "Setup",
            worktree: "Git worktree",
            sandbox: "Sandbox",
            build: "Build",
            platform: "Platform",
            other: "Other",
        },
        Tl: function (e) {
            return [
                (0, l.R)(new Date(e.started_at).toISOString()) ?? "",
                s(e.spans.length),
                (0, r.Sj)((0, r.bM)(e)?.attrs),
            ]
                .filter((e) => "" !== e)
                .join(" \xb7 ");
        },
        Zy: a,
        n2: function (e) {
            return e.marker ? `at ${a(e.start)}` : o(e);
        },
        oX: function (e) {
            return s(e.count, "smaller span");
        },
        qL: function (e) {
            let t = [c("Start", `+${a(e.start)}`)];
            (e.marker || t.push(c("Duration", o(e))),
                e.count > 1
                    ? t.push(
                          c("Calls", String(e.count)),
                          c("Longest call", a(e.maxMs)),
                          c("Spread over", a(e.end - e.start)),
                      )
                    : e.children.length > 0 && t.push(c("Self time", a(e.selfMs))));
            let n = e.span.waits_on;
            null != n && t.push(c("Waited on", `${n.span_name} in ${n.trace_name}`));
            let l = [
                e.parallel ? "ran in parallel with a sibling" : null,
                e.running ? "still running" : null,
                e.outlivedParent ? "outlived its parent" : null,
            ].filter((e) => null != e);
            (l.length > 0 && t.push(c("Notes", l.join(", "))),
                null != e.span.error && t.push(c("Error", e.span.error)));
            let r = new Map();
            for (let [t, n] of Object.entries({ ...e.span.attrs, ...(1 === e.count ? e.span.details : null) })) {
                var i, s;
                let l =
                        ((i = e),
                        "args" === (s = t) || s.startsWith("arg ")
                            ? "Arguments"
                            : "result" === s || "result_chars" === s
                              ? "Result"
                              : "model" === i.service
                                ? "Usage"
                                : "Details"),
                    a = "cost_usd" === t ? d(Number(n)) : String(n);
                r.set(l, [...(r.get(l) ?? []), c(t.replace(/_/g, " "), a)]);
            }
            return [
                { title: null, rows: t },
                ...u.flatMap((e) => {
                    let t = r.get(e);
                    return null == t ? [] : [{ title: e, rows: t }];
                }),
            ];
        },
        qO: function (e, t) {
            let n = e.categories.find((e) => e.category === t)?.ms ?? 0;
            return 0 === n || 0 === e.busyMs ? null : `${Math.round((n / e.busyMs) * 100)}% \xb7 ${a(n)}`;
        },
        xo: s,
    },
);
