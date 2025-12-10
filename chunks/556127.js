r.d(t, {
    $X: () => m,
    AJ: () => S,
    Ei: () => g,
    GC: () => M,
    WU: () => L,
    db: () => h,
    dz: () => w,
    nm: () => y,
    ph: () => v,
    x5: () => O,
});
var n = r(180932),
    a = r(82255),
    i = r(509440),
    o = r(98076),
    _ = r(343573),
    s = r(431660),
    c = r(690889),
    E = r(606093),
    l = r(549040),
    u = r(889929);
let d = String(0),
    I = "",
    p = "",
    R = "",
    T = (u.m9.navigator && u.m9.navigator.userAgent) || "",
    A = "",
    f =
        (u.m9.navigator && u.m9.navigator.language) ||
        (u.m9.navigator && u.m9.navigator.languages && u.m9.navigator.languages["0"]) ||
        "",
    N = u.m9.navigator && u.m9.navigator.userAgentData;
function O(e) {
    return "pageload" === (0, a.XU)(e).op;
}
function h(e, t) {
    if (!t.length) return e;
    for (let r of t) e[1].push([{ type: "profile" }, r]);
    return e;
}
function S(e) {
    let t = [];
    return (
        (0, c.gv)(e, (e, r) => {
            if ("transaction" === r)
                for (let r = 1; r < e.length; r++) {
                    let n = e[r];
                    n && n.contexts && n.contexts.profile && n.contexts.profile.profile_id && t.push(e[r]);
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
                ((I = e.platform || ""),
                (R = e.architecture || ""),
                (A = e.model || ""),
                (p = e.platformVersion || ""),
                e.fullVersionList && e.fullVersionList.length > 0)
            ) {
                let t = e.fullVersionList[e.fullVersionList.length - 1];
                T = `${t.brand} ${t.version}`;
            }
        })
        .catch((e) => void 0);
let D = new WeakMap(),
    C = !1,
    L = 30000;
function g() {
    let e = u.m9.Profiler;
    if ("function" != typeof e) {
        l.X &&
            o.kg.log(
                "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
            );
        return;
    }
    let t = Math.floor(L / 10);
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
            (C = !0);
    }
}
function m(e) {
    if (C)
        return (
            l.X && o.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1
        );
    if (!e.isRecording())
        return l.X && o.kg.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
    let t = (0, i.s3)(),
        r = t && t.getOptions();
    if (!r) return l.X && o.kg.log("[Profiling] Profiling disabled, no options found."), !1;
    let n = r.profilesSampleRate;
    return (
        ("number" != typeof n && "boolean" != typeof n) || ("number" == typeof n && isNaN(n))
            ? (l.X &&
                  o.kg.warn(
                      `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(n)} of type ${JSON.stringify(typeof n)}.`,
                  ),
              1)
            : !0 !== n &&
              !1 !== n &&
              (n < 0 || n > 1) &&
              (l.X && o.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${n}.`), 1)
    )
        ? (l.X && o.kg.warn("[Profiling] Discarding profile because of invalid sample rate."), !1)
        : n
          ? !!(!0 === n || Math.random() < n) ||
            (l.X &&
                o.kg.log(
                    `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(n)})`,
                ),
            !1)
          : (l.X &&
                o.kg.log(
                    "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
                ),
            !1);
}
function y(e, t, r, a) {
    var c;
    if (
        !(r.samples.length < 2
            ? (l.X && o.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1)
            : !!r.frames.length ||
              (l.X && o.kg.log("[Profiling] Discarding profile because it contains no frames"), !1))
    )
        return null;
    if ("transaction" !== a.type)
        throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (null == r)
        throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${r} instead.`);
    let N = (function (e) {
            let t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
            return ("string" == typeof t &&
                32 !== t.length &&
                l.X &&
                o.kg.log(`[Profiling] Invalid traceId: ${t} on profiled event`),
            "string" != typeof t)
                ? ""
                : t;
        })(a),
        O =
            "thread_metadata" in (c = r)
                ? c
                : (function (e) {
                      let t,
                          r = 0,
                          n = {
                              samples: [],
                              stacks: [],
                              frames: [],
                              thread_metadata: { [d]: { name: "main" } },
                          },
                          a = e.samples[0];
                      if (!a) return n;
                      let i = a.timestamp,
                          o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : _.Z1 || 0,
                          s = o - (_.Z1 || o);
                      return (
                          e.samples.forEach((a, o) => {
                              if (void 0 === a.stackId) {
                                  void 0 === t && ((t = r), (n.stacks[t] = []), r++),
                                      (n.samples[o] = {
                                          elapsed_since_start_ns: ((a.timestamp + s - i) * 1000000).toFixed(0),
                                          stack_id: t,
                                          thread_id: d,
                                      });
                                  return;
                              }
                              let _ = e.stacks[a.stackId],
                                  c = [];
                              for (; _; ) {
                                  c.push(_.frameId);
                                  let t = e.frames[_.frameId];
                                  t &&
                                      void 0 === n.frames[_.frameId] &&
                                      (n.frames[_.frameId] = {
                                          function: t.name,
                                          abs_path:
                                              "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                          lineno: t.line,
                                          colno: t.column,
                                      }),
                                      (_ = void 0 === _.parentId ? void 0 : e.stacks[_.parentId]);
                              }
                              let E = {
                                  elapsed_since_start_ns: ((a.timestamp + s - i) * 1000000).toFixed(0),
                                  stack_id: r,
                                  thread_id: d,
                              };
                              (n.stacks[r] = c), (n.samples[o] = E), r++;
                          }),
                          n
                      );
                  })(c),
        h = t || ("number" == typeof a.start_timestamp ? 1000 * a.start_timestamp : 1000 * (0, _.ph)()),
        S = "number" == typeof a.timestamp ? 1000 * a.timestamp : 1000 * (0, _.ph)();
    return {
        event_id: e,
        timestamp: new Date(h).toISOString(),
        platform: "javascript",
        version: "1",
        release: a.release || "",
        environment: a.environment || n.J,
        runtime: {
            name: "javascript",
            version: u.m9.navigator.userAgent,
        },
        os: {
            name: I,
            version: p,
            build_number: T,
        },
        device: {
            locale: f,
            model: A,
            manufacturer: T,
            architecture: R,
            is_emulator: !1,
        },
        debug_meta: {
            images: (function (e) {
                let t,
                    r = E.n._sentryDebugIds;
                if (!r) return [];
                let n = (0, i.s3)(),
                    a = n && n.getOptions(),
                    o = a && a.stackParser;
                if (!o) return [];
                let _ = D.get(o);
                _ ? (t = _) : ((t = new Map()), D.set(o, t));
                let s = Object.keys(r).reduce((e, n) => {
                        let a,
                            i = t.get(n);
                        i ? (a = i) : ((a = o(n)), t.set(n, a));
                        for (let t = a.length - 1; t >= 0; t--) {
                            let i = a[t],
                                o = i && i.filename;
                            if (i && o) {
                                e[o] = r[n];
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
            })(r.resources),
        },
        profile: O,
        transactions: [
            {
                name: a.transaction || "",
                id: a.event_id || (0, s.DM)(),
                trace_id: N,
                active_thread_id: d,
                relative_start_ns: "0",
                relative_end_ns: ((S - h) * 1000000).toFixed(0),
            },
        ],
    };
}
let P = new Map();
function v() {
    return P.size;
}
function M(e) {
    let t = P.get(e);
    return t && P.delete(e), t;
}
function w(e, t) {
    if ((P.set(e, t), P.size > 30)) {
        let e = P.keys().next().value;
        P.delete(e);
    }
}
