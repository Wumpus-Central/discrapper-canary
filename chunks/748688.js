a.d(e, {
    $X: () => S,
    AJ: () => h,
    Ei: () => g,
    GC: () => U,
    WU: () => D,
    db: () => O,
    dz: () => G,
    nm: () => m,
    ph: () => y,
    x5: () => p,
});
var r = a(559508),
    _ = a(696486),
    n = a(263449),
    o = a(622916),
    i = a(101284),
    E = a(394798),
    c = a(617726),
    s = a(899517),
    l = a(454463),
    I = a(163162);
let R = String(0),
    u = "",
    A = "",
    N = "",
    T = (I.m9.navigator && I.m9.navigator.userAgent) || "",
    d = "",
    f =
        (I.m9.navigator && I.m9.navigator.language) ||
        (I.m9.navigator && I.m9.navigator.languages && I.m9.navigator.languages["0"]) ||
        "",
    L = I.m9.navigator && I.m9.navigator.userAgentData;
function p(t) {
    return "pageload" === (0, _.XU)(t).op;
}
function O(t, e) {
    if (!e.length) return t;
    for (let a of e) t[1].push([{ type: "profile" }, a]);
    return t;
}
function h(t) {
    let e = [];
    return (
        (0, c.gv)(t, (t, a) => {
            if ("transaction" === a)
                for (let a = 1; a < t.length; a++) {
                    let r = t[a];
                    r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[a]);
                }
        }),
        e
    );
}
"object" == typeof L &&
    null !== L &&
    "getHighEntropyValues" in L &&
    L.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"])
        .then((t) => {
            if (
                ((u = t.platform || ""),
                (N = t.architecture || ""),
                (d = t.model || ""),
                (A = t.platformVersion || ""),
                t.fullVersionList && t.fullVersionList.length > 0)
            ) {
                let e = t.fullVersionList[t.fullVersionList.length - 1];
                T = `${e.brand} ${e.version}`;
            }
        })
        .catch((t) => void 0);
let P = new WeakMap(),
    C = !1,
    D = 30000;
function g() {
    let t = I.m9.Profiler;
    if ("function" != typeof t) {
        l.X &&
            o.kg.log(
                "[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.",
            );
        return;
    }
    let e = Math.floor(D / 10);
    try {
        return new t({
            sampleInterval: 10,
            maxBufferSize: e,
        });
    } catch (t) {
        l.X &&
            (o.kg.log(
                "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.",
            ),
            o.kg.log("[Profiling] Disabling profiling for current user session.")),
            (C = !0);
    }
}
function S(t) {
    if (C)
        return (
            l.X && o.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1
        );
    if (!t.isRecording())
        return l.X && o.kg.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
    let e = (0, n.s3)(),
        a = e && e.getOptions();
    if (!a) return l.X && o.kg.log("[Profiling] Profiling disabled, no options found."), !1;
    let r = a.profilesSampleRate;
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
function m(t, e, a, _) {
    var c;
    if (
        !(a.samples.length < 2
            ? (l.X && o.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1)
            : !!a.frames.length ||
              (l.X && o.kg.log("[Profiling] Discarding profile because it contains no frames"), !1))
    )
        return null;
    if ("transaction" !== _.type)
        throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (null == a)
        throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${a} instead.`);
    let L = (function (t) {
            let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
            return ("string" == typeof e &&
                32 !== e.length &&
                l.X &&
                o.kg.log(`[Profiling] Invalid traceId: ${e} on profiled event`),
            "string" != typeof e)
                ? ""
                : e;
        })(_),
        p =
            "thread_metadata" in (c = a)
                ? c
                : (function (t) {
                      let e,
                          a = 0,
                          r = {
                              samples: [],
                              stacks: [],
                              frames: [],
                              thread_metadata: { [R]: { name: "main" } },
                          },
                          _ = t.samples[0];
                      if (!_) return r;
                      let n = _.timestamp,
                          o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : i.Z1 || 0,
                          E = o - (i.Z1 || o);
                      return (
                          t.samples.forEach((_, o) => {
                              if (void 0 === _.stackId) {
                                  void 0 === e && ((e = a), (r.stacks[e] = []), a++),
                                      (r.samples[o] = {
                                          elapsed_since_start_ns: ((_.timestamp + E - n) * 1000000).toFixed(0),
                                          stack_id: e,
                                          thread_id: R,
                                      });
                                  return;
                              }
                              let i = t.stacks[_.stackId],
                                  c = [];
                              for (; i; ) {
                                  c.push(i.frameId);
                                  let e = t.frames[i.frameId];
                                  e &&
                                      void 0 === r.frames[i.frameId] &&
                                      (r.frames[i.frameId] = {
                                          function: e.name,
                                          abs_path:
                                              "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                          lineno: e.line,
                                          colno: e.column,
                                      }),
                                      (i = void 0 === i.parentId ? void 0 : t.stacks[i.parentId]);
                              }
                              let s = {
                                  elapsed_since_start_ns: ((_.timestamp + E - n) * 1000000).toFixed(0),
                                  stack_id: a,
                                  thread_id: R,
                              };
                              (r.stacks[a] = c), (r.samples[o] = s), a++;
                          }),
                          r
                      );
                  })(c),
        O = e || ("number" == typeof _.start_timestamp ? 1000 * _.start_timestamp : 1000 * (0, i.ph)()),
        h = "number" == typeof _.timestamp ? 1000 * _.timestamp : 1000 * (0, i.ph)();
    return {
        event_id: t,
        timestamp: new Date(O).toISOString(),
        platform: "javascript",
        version: "1",
        release: _.release || "",
        environment: _.environment || r.J,
        runtime: {
            name: "javascript",
            version: I.m9.navigator.userAgent,
        },
        os: {
            name: u,
            version: A,
            build_number: T,
        },
        device: {
            locale: f,
            model: d,
            manufacturer: T,
            architecture: N,
            is_emulator: !1,
        },
        debug_meta: {
            images: (function (t) {
                let e,
                    a = s.n._sentryDebugIds;
                if (!a) return [];
                let r = (0, n.s3)(),
                    _ = r && r.getOptions(),
                    o = _ && _.stackParser;
                if (!o) return [];
                let i = P.get(o);
                i ? (e = i) : ((e = new Map()), P.set(o, e));
                let E = Object.keys(a).reduce((t, r) => {
                        let _,
                            n = e.get(r);
                        n ? (_ = n) : ((_ = o(r)), e.set(r, _));
                        for (let e = _.length - 1; e >= 0; e--) {
                            let n = _[e],
                                o = n && n.filename;
                            if (n && o) {
                                t[o] = a[r];
                                break;
                            }
                        }
                        return t;
                    }, {}),
                    c = [];
                for (let e of t)
                    e &&
                        E[e] &&
                        c.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: E[e],
                        });
                return c;
            })(a.resources),
        },
        profile: p,
        transactions: [
            {
                name: _.transaction || "",
                id: _.event_id || (0, E.DM)(),
                trace_id: L,
                active_thread_id: R,
                relative_start_ns: "0",
                relative_end_ns: ((h - O) * 1000000).toFixed(0),
            },
        ],
    };
}
let v = new Map();
function y() {
    return v.size;
}
function U(t) {
    let e = v.get(t);
    return e && v.delete(t), e;
}
function G(t, e) {
    if ((v.set(t, e), v.size > 30)) {
        let t = v.keys().next().value;
        v.delete(t);
    }
}
