_.d(e, {
    $X: () => g,
    AJ: () => C,
    Ei: () => S,
    GC: () => v,
    WU: () => D,
    db: () => p,
    dz: () => U,
    nm: () => y,
    ph: () => G,
    x5: () => L,
});
var a = _(559508),
    r = _(696486),
    n = _(263449),
    o = _(622916),
    E = _(101284),
    i = _(394798),
    c = _(617726),
    s = _(899517),
    l = _(454463),
    I = _(163162);
let R = String(0),
    N = "",
    A = "",
    u = "",
    T = (I.m9.navigator && I.m9.navigator.userAgent) || "",
    d = "",
    f =
        (I.m9.navigator && I.m9.navigator.language) ||
        (I.m9.navigator && I.m9.navigator.languages && I.m9.navigator.languages["0"]) ||
        "",
    O = I.m9.navigator && I.m9.navigator.userAgentData;
function L(t) {
    return "pageload" === (0, r.XU)(t).op;
}
function p(t, e) {
    if (!e.length) return t;
    for (let _ of e) t[1].push([{ type: "profile" }, _]);
    return t;
}
function C(t) {
    let e = [];
    return (
        (0, c.gv)(t, (t, _) => {
            if ("transaction" === _)
                for (let _ = 1; _ < t.length; _++) {
                    let a = t[_];
                    a && a.contexts && a.contexts.profile && a.contexts.profile.profile_id && e.push(t[_]);
                }
        }),
        e
    );
}
"object" == typeof O &&
    null !== O &&
    "getHighEntropyValues" in O &&
    O.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"])
        .then((t) => {
            if (
                ((N = t.platform || ""),
                (u = t.architecture || ""),
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
    h = !1,
    D = 30000;
function S() {
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
            (h = !0);
    }
}
function g(t) {
    if (h)
        return (
            l.X && o.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1
        );
    if (!t.isRecording())
        return l.X && o.kg.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
    let e = (0, n.s3)(),
        _ = e && e.getOptions();
    if (!_) return l.X && o.kg.log("[Profiling] Profiling disabled, no options found."), !1;
    let a = _.profilesSampleRate;
    return (
        ("number" != typeof a && "boolean" != typeof a) || ("number" == typeof a && isNaN(a))
            ? (l.X &&
                  o.kg.warn(
                      `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(a)} of type ${JSON.stringify(typeof a)}.`,
                  ),
              1)
            : !0 !== a &&
              !1 !== a &&
              (a < 0 || a > 1) &&
              (l.X && o.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${a}.`), 1)
    )
        ? (l.X && o.kg.warn("[Profiling] Discarding profile because of invalid sample rate."), !1)
        : a
          ? !!(!0 === a || Math.random() < a) ||
            (l.X &&
                o.kg.log(
                    `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(a)})`,
                ),
            !1)
          : (l.X &&
                o.kg.log(
                    "[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0",
                ),
            !1);
}
function y(t, e, _, r) {
    var c;
    if (
        !(_.samples.length < 2
            ? (l.X && o.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1)
            : !!_.frames.length ||
              (l.X && o.kg.log("[Profiling] Discarding profile because it contains no frames"), !1))
    )
        return null;
    if ("transaction" !== r.type)
        throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (null == _)
        throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${_} instead.`);
    let O = (function (t) {
            let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
            return ("string" == typeof e &&
                32 !== e.length &&
                l.X &&
                o.kg.log(`[Profiling] Invalid traceId: ${e} on profiled event`),
            "string" != typeof e)
                ? ""
                : e;
        })(r),
        L =
            "thread_metadata" in (c = _)
                ? c
                : (function (t) {
                      let e,
                          _ = 0,
                          a = {
                              samples: [],
                              stacks: [],
                              frames: [],
                              thread_metadata: { [R]: { name: "main" } },
                          },
                          r = t.samples[0];
                      if (!r) return a;
                      let n = r.timestamp,
                          o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : E.Z1 || 0,
                          i = o - (E.Z1 || o);
                      return (
                          t.samples.forEach((r, o) => {
                              if (void 0 === r.stackId) {
                                  void 0 === e && ((e = _), (a.stacks[e] = []), _++),
                                      (a.samples[o] = {
                                          elapsed_since_start_ns: ((r.timestamp + i - n) * 1000000).toFixed(0),
                                          stack_id: e,
                                          thread_id: R,
                                      });
                                  return;
                              }
                              let E = t.stacks[r.stackId],
                                  c = [];
                              for (; E; ) {
                                  c.push(E.frameId);
                                  let e = t.frames[E.frameId];
                                  e &&
                                      void 0 === a.frames[E.frameId] &&
                                      (a.frames[E.frameId] = {
                                          function: e.name,
                                          abs_path:
                                              "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                          lineno: e.line,
                                          colno: e.column,
                                      }),
                                      (E = void 0 === E.parentId ? void 0 : t.stacks[E.parentId]);
                              }
                              let s = {
                                  elapsed_since_start_ns: ((r.timestamp + i - n) * 1000000).toFixed(0),
                                  stack_id: _,
                                  thread_id: R,
                              };
                              (a.stacks[_] = c), (a.samples[o] = s), _++;
                          }),
                          a
                      );
                  })(c),
        p = e || ("number" == typeof r.start_timestamp ? 1000 * r.start_timestamp : 1000 * (0, E.ph)()),
        C = "number" == typeof r.timestamp ? 1000 * r.timestamp : 1000 * (0, E.ph)();
    return {
        event_id: t,
        timestamp: new Date(p).toISOString(),
        platform: "javascript",
        version: "1",
        release: r.release || "",
        environment: r.environment || a.J,
        runtime: {
            name: "javascript",
            version: I.m9.navigator.userAgent,
        },
        os: {
            name: N,
            version: A,
            build_number: T,
        },
        device: {
            locale: f,
            model: d,
            manufacturer: T,
            architecture: u,
            is_emulator: !1,
        },
        debug_meta: {
            images: (function (t) {
                let e,
                    _ = s.n._sentryDebugIds;
                if (!_) return [];
                let a = (0, n.s3)(),
                    r = a && a.getOptions(),
                    o = r && r.stackParser;
                if (!o) return [];
                let E = P.get(o);
                E ? (e = E) : ((e = new Map()), P.set(o, e));
                let i = Object.keys(_).reduce((t, a) => {
                        let r,
                            n = e.get(a);
                        n ? (r = n) : ((r = o(a)), e.set(a, r));
                        for (let e = r.length - 1; e >= 0; e--) {
                            let n = r[e],
                                o = n && n.filename;
                            if (n && o) {
                                t[o] = _[a];
                                break;
                            }
                        }
                        return t;
                    }, {}),
                    c = [];
                for (let e of t)
                    e &&
                        i[e] &&
                        c.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: i[e],
                        });
                return c;
            })(_.resources),
        },
        profile: L,
        transactions: [
            {
                name: r.transaction || "",
                id: r.event_id || (0, i.DM)(),
                trace_id: O,
                active_thread_id: R,
                relative_start_ns: "0",
                relative_end_ns: ((C - p) * 1000000).toFixed(0),
            },
        ],
    };
}
let m = new Map();
function G() {
    return m.size;
}
function v(t) {
    let e = m.get(t);
    return e && m.delete(t), e;
}
function U(t, e) {
    if ((m.set(t, e), m.size > 30)) {
        let t = m.keys().next().value;
        m.delete(t);
    }
}
