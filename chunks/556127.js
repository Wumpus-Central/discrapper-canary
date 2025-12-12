n.d(t, {
    $X: () => C,
    AJ: () => S,
    Ei: () => D,
    GC: () => b,
    WU: () => m,
    db: () => O,
    dz: () => M,
    nm: () => y,
    ph: () => v,
    x5: () => h,
});
var r = n(180932),
    i = n(82255),
    a = n(509440),
    o = n(98076),
    _ = n(343573),
    s = n(431660),
    c = n(690889),
    E = n(606093),
    l = n(549040),
    u = n(889929);
let d = String(0),
    p = "",
    f = "",
    I = "",
    T = (u.m9.navigator && u.m9.navigator.userAgent) || "",
    R = "",
    A =
        (u.m9.navigator && u.m9.navigator.language) ||
        (u.m9.navigator && u.m9.navigator.languages && u.m9.navigator.languages["0"]) ||
        "",
    N = u.m9.navigator && u.m9.navigator.userAgentData;
function h(e) {
    return "pageload" === (0, i.XU)(e).op;
}
function O(e, t) {
    if (!t.length) return e;
    for (let n of t) e[1].push([{ type: "profile" }, n]);
    return e;
}
function S(e) {
    let t = [];
    return (
        (0, c.gv)(e, (e, n) => {
            if ("transaction" === n)
                for (let n = 1; n < e.length; n++) {
                    let r = e[n];
                    r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && t.push(e[n]);
                }
        }),
        t
    );
}
"object" == typeof N &&
    null !== N &&
    "getHighEntropyValues" in N &&
    N.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"])
        .then((e) => {
            if (
                ((p = e.platform || ""),
                (I = e.architecture || ""),
                (R = e.model || ""),
                (f = e.platformVersion || ""),
                e.fullVersionList && e.fullVersionList.length > 0)
            ) {
                let t = e.fullVersionList[e.fullVersionList.length - 1];
                T = `${t.brand} ${t.version}`;
            }
        })
        .catch((e) => void 0);
let L = new WeakMap(),
    g = !1,
    m = 30000;
function D() {
    let e = u.m9.Profiler;
    if ("function" != typeof e) {
        l.X &&
            o.kg.log(
                "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
            );
        return;
    }
    let t = Math.floor(m / 10);
    try {
        return new e({
            sampleInterval: 10,
            maxBufferSize: t,
        });
    } catch (e) {
        l.X &&
            (o.kg.log(
                "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
            ),
            o.kg.log("[Profiling] Disabling profiling for current user session.")),
            (g = !0);
    }
}
function C(e) {
    if (g)
        return (
            l.X && o.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1
        );
    if (!e.isRecording())
        return l.X && o.kg.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
    let t = (0, a.s3)(),
        n = t && t.getOptions();
    if (!n) return l.X && o.kg.log("[Profiling] Profiling disabled, no options found."), !1;
    let r = n.profilesSampleRate;
    return (
        ("number" != typeof r && "boolean" != typeof r) || ("number" == typeof r && isNaN(r))
            ? (l.X &&
                  o.kg.warn(
                      `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`,
                  ),
              1)
            : !0 !== r &&
              !1 !== r &&
              (r < 0 || r > 1) &&
              (l.X && o.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${r}.`), 1)
    )
        ? (l.X && o.kg.warn("[Profiling] Discarding profile because of invalid sample rate."), !1)
        : r
          ? !!(!0 === r || Math.random() < r) ||
            (l.X &&
                o.kg.log(
                    `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`,
                ),
            !1)
          : (l.X &&
                o.kg.log(
                    "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
                ),
            !1);
}
function y(e, t, n, i) {
    var c;
    if (
        !(n.samples.length < 2
            ? (l.X && o.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1)
            : !!n.frames.length ||
              (l.X && o.kg.log("[Profiling] Discarding profile because it contains no frames"), !1))
    )
        return null;
    if ("transaction" !== i.type)
        throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (null == n)
        throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
    let N = (function (e) {
            let t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
            return ("string" == typeof t &&
                32 !== t.length &&
                l.X &&
                o.kg.log(`[Profiling] Invalid traceId: ${t} on profiled event`),
            "string" != typeof t)
                ? ""
                : t;
        })(i),
        h =
            "thread_metadata" in (c = n)
                ? c
                : (function (e) {
                      let t,
                          n = 0,
                          r = {
                              samples: [],
                              stacks: [],
                              frames: [],
                              thread_metadata: { [d]: { name: "main" } },
                          },
                          i = e.samples[0];
                      if (!i) return r;
                      let a = i.timestamp,
                          o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : _.Z1 || 0,
                          s = o - (_.Z1 || o);
                      return (
                          e.samples.forEach((i, o) => {
                              if (void 0 === i.stackId) {
                                  void 0 === t && ((t = n), (r.stacks[t] = []), n++),
                                      (r.samples[o] = {
                                          elapsed_since_start_ns: ((i.timestamp + s - a) * 1000000).toFixed(0),
                                          stack_id: t,
                                          thread_id: d,
                                      });
                                  return;
                              }
                              let _ = e.stacks[i.stackId],
                                  c = [];
                              for (; _; ) {
                                  c.push(_.frameId);
                                  let t = e.frames[_.frameId];
                                  t &&
                                      void 0 === r.frames[_.frameId] &&
                                      (r.frames[_.frameId] = {
                                          function: t.name,
                                          abs_path:
                                              "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                          lineno: t.line,
                                          colno: t.column,
                                      }),
                                      (_ = void 0 === _.parentId ? void 0 : e.stacks[_.parentId]);
                              }
                              let E = {
                                  elapsed_since_start_ns: ((i.timestamp + s - a) * 1000000).toFixed(0),
                                  stack_id: n,
                                  thread_id: d,
                              };
                              (r.stacks[n] = c), (r.samples[o] = E), n++;
                          }),
                          r
                      );
                  })(c),
        O = t || ("number" == typeof i.start_timestamp ? 1000 * i.start_timestamp : 1000 * (0, _.ph)()),
        S = "number" == typeof i.timestamp ? 1000 * i.timestamp : 1000 * (0, _.ph)();
    return {
        event_id: e,
        timestamp: new Date(O).toISOString(),
        platform: "javascript",
        version: "1",
        release: i.release || "",
        environment: i.environment || r.J,
        runtime: {
            name: "javascript",
            version: u.m9.navigator.userAgent,
        },
        os: {
            name: p,
            version: f,
            build_number: T,
        },
        device: {
            locale: A,
            model: R,
            manufacturer: T,
            architecture: I,
            is_emulator: !1,
        },
        debug_meta: {
            images: (function (e) {
                let t,
                    n = E.n._sentryDebugIds;
                if (!n) return [];
                let r = (0, a.s3)(),
                    i = r && r.getOptions(),
                    o = i && i.stackParser;
                if (!o) return [];
                let _ = L.get(o);
                _ ? (t = _) : ((t = new Map()), L.set(o, t));
                let s = Object.keys(n).reduce((e, r) => {
                        let i,
                            a = t.get(r);
                        a ? (i = a) : ((i = o(r)), t.set(r, i));
                        for (let t = i.length - 1; t >= 0; t--) {
                            let a = i[t],
                                o = a && a.filename;
                            if (a && o) {
                                e[o] = n[r];
                                break;
                            }
                        }
                        return e;
                    }, {}),
                    c = [];
                for (let t of e)
                    t &&
                        s[t] &&
                        c.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: s[t],
                        });
                return c;
            })(n.resources),
        },
        profile: h,
        transactions: [
            {
                name: i.transaction || "",
                id: i.event_id || (0, s.DM)(),
                trace_id: N,
                active_thread_id: d,
                relative_start_ns: "0",
                relative_end_ns: ((S - O) * 1000000).toFixed(0),
            },
        ],
    };
}
let P = new Map();
function v() {
    return P.size;
}
function b(e) {
    let t = P.get(e);
    return t && P.delete(e), t;
}
function M(e, t) {
    if ((P.set(e, t), P.size > 30)) {
        let e = P.keys().next().value;
        P.delete(e);
    }
}
