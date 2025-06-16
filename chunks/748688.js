a.d(e, {
    $X: () => m,
    AJ: () => O,
    Ei: () => C,
    GC: () => U,
    WU: () => D,
    db: () => h,
    dz: () => b,
    nm: () => v,
    ph: () => S,
    x5: () => L
});
var r = a(559508),
    _ = a(696486),
    n = a(263449),
    o = a(622916),
    i = a(101284),
    c = a(394798),
    s = a(617726),
    E = a(899517),
    l = a(454463),
    u = a(163162);
let I = String(0),
    d = '',
    R = '',
    N = '',
    f = (u.m9.navigator && u.m9.navigator.userAgent) || '',
    A = '',
    T = (u.m9.navigator && u.m9.navigator.language) || (u.m9.navigator && u.m9.navigator.languages && u.m9.navigator.languages['0']) || '',
    p = u.m9.navigator && u.m9.navigator.userAgentData;
function L(t) {
    return 'pageload' === (0, _.XU)(t).op;
}
function h(t, e) {
    if (!e.length) return t;
    for (let a of e) t[1].push([{ type: 'profile' }, a]);
    return t;
}
function O(t) {
    let e = [];
    return (
        (0, s.gv)(t, (t, a) => {
            if ('transaction' === a)
                for (let a = 1; a < t.length; a++) {
                    let r = t[a];
                    r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[a]);
                }
        }),
        e
    );
}
'object' == typeof p &&
    null !== p &&
    'getHighEntropyValues' in p &&
    p
        .getHighEntropyValues(['architecture', 'model', 'platform', 'platformVersion', 'fullVersionList'])
        .then((t) => {
            if (((d = t.platform || ''), (N = t.architecture || ''), (A = t.model || ''), (R = t.platformVersion || ''), t.fullVersionList && t.fullVersionList.length > 0)) {
                let e = t.fullVersionList[t.fullVersionList.length - 1];
                f = `${e.brand} ${e.version}`;
            }
        })
        .catch((t) => void 0);
let P = new WeakMap(),
    g = !1,
    D = 30000;
function C() {
    let t = u.m9.Profiler;
    if ('function' != typeof t) {
        l.X && o.kg.log('[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.');
        return;
    }
    let e = Math.floor(D / 10);
    try {
        return new t({
            sampleInterval: 10,
            maxBufferSize: e
        });
    } catch (t) {
        l.X && (o.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), o.kg.log('[Profiling] Disabling profiling for current user session.')), (g = !0);
    }
}
function m(t) {
    if (g) return l.X && o.kg.log('[Profiling] Profiling has been disabled for the duration of the current user session.'), !1;
    if (!t.isRecording()) return l.X && o.kg.log('[Profiling] Discarding profile because transaction was not sampled.'), !1;
    let e = (0, n.s3)(),
        a = e && e.getOptions();
    if (!a) return l.X && o.kg.log('[Profiling] Profiling disabled, no options found.'), !1;
    let r = a.profilesSampleRate;
    return (('number' != typeof r && 'boolean' != typeof r) || ('number' == typeof r && isNaN(r)) ? (l.X && o.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`), 1) : !0 !== r && !1 !== r && (r < 0 || r > 1) && (l.X && o.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${r}.`), 1)) ? (l.X && o.kg.warn('[Profiling] Discarding profile because of invalid sample rate.'), !1) : r ? !!(!0 === r || Math.random() < r) || (l.X && o.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1) : (l.X && o.kg.log('[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0'), !1);
}
function v(t, e, a, _) {
    var s;
    if (!(a.samples.length < 2 ? (l.X && o.kg.log('[Profiling] Discarding profile because it contains less than 2 samples'), !1) : !!a.frames.length || (l.X && o.kg.log('[Profiling] Discarding profile because it contains no frames'), !1))) return null;
    if ('transaction' !== _.type) throw TypeError('Profiling events may only be attached to transactions, this should never occur.');
    if (null == a) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${a} instead.`);
    let p = (function (t) {
            let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
            return ('string' == typeof e && 32 !== e.length && l.X && o.kg.log(`[Profiling] Invalid traceId: ${e} on profiled event`), 'string' != typeof e) ? '' : e;
        })(_),
        L =
            'thread_metadata' in (s = a)
                ? s
                : (function (t) {
                      let e,
                          a = 0,
                          r = {
                              samples: [],
                              stacks: [],
                              frames: [],
                              thread_metadata: { [I]: { name: 'main' } }
                          },
                          _ = t.samples[0];
                      if (!_) return r;
                      let n = _.timestamp,
                          o = 'number' == typeof performance.timeOrigin ? performance.timeOrigin : i.Z1 || 0,
                          c = o - (i.Z1 || o);
                      return (
                          t.samples.forEach((_, o) => {
                              if (void 0 === _.stackId) {
                                  void 0 === e && ((e = a), (r.stacks[e] = []), a++),
                                      (r.samples[o] = {
                                          elapsed_since_start_ns: ((_.timestamp + c - n) * 1000000).toFixed(0),
                                          stack_id: e,
                                          thread_id: I
                                      });
                                  return;
                              }
                              let i = t.stacks[_.stackId],
                                  s = [];
                              for (; i; ) {
                                  s.push(i.frameId);
                                  let e = t.frames[i.frameId];
                                  e &&
                                      void 0 === r.frames[i.frameId] &&
                                      (r.frames[i.frameId] = {
                                          function: e.name,
                                          abs_path: 'number' == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                          lineno: e.line,
                                          colno: e.column
                                      }),
                                      (i = void 0 === i.parentId ? void 0 : t.stacks[i.parentId]);
                              }
                              let E = {
                                  elapsed_since_start_ns: ((_.timestamp + c - n) * 1000000).toFixed(0),
                                  stack_id: a,
                                  thread_id: I
                              };
                              (r.stacks[a] = s), (r.samples[o] = E), a++;
                          }),
                          r
                      );
                  })(s),
        h = e || ('number' == typeof _.start_timestamp ? 1000 * _.start_timestamp : 1000 * (0, i.ph)()),
        O = 'number' == typeof _.timestamp ? 1000 * _.timestamp : 1000 * (0, i.ph)();
    return {
        event_id: t,
        timestamp: new Date(h).toISOString(),
        platform: 'javascript',
        version: '1',
        release: _.release || '',
        environment: _.environment || r.J,
        runtime: {
            name: 'javascript',
            version: u.m9.navigator.userAgent
        },
        os: {
            name: d,
            version: R,
            build_number: f
        },
        device: {
            locale: T,
            model: A,
            manufacturer: f,
            architecture: N,
            is_emulator: !1
        },
        debug_meta: {
            images: (function (t) {
                let e,
                    a = E.n._sentryDebugIds;
                if (!a) return [];
                let r = (0, n.s3)(),
                    _ = r && r.getOptions(),
                    o = _ && _.stackParser;
                if (!o) return [];
                let i = P.get(o);
                i ? (e = i) : ((e = new Map()), P.set(o, e));
                let c = Object.keys(a).reduce((t, r) => {
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
                    s = [];
                for (let e of t)
                    e &&
                        c[e] &&
                        s.push({
                            type: 'sourcemap',
                            code_file: e,
                            debug_id: c[e]
                        });
                return s;
            })(a.resources)
        },
        profile: L,
        transactions: [
            {
                name: _.transaction || '',
                id: _.event_id || (0, c.DM)(),
                trace_id: p,
                active_thread_id: I,
                relative_start_ns: '0',
                relative_end_ns: ((O - h) * 1000000).toFixed(0)
            }
        ]
    };
}
let y = new Map();
function S() {
    return y.size;
}
function U(t) {
    let e = y.get(t);
    return e && y.delete(t), e;
}
function b(t, e) {
    if ((y.set(t, e), y.size > 30)) {
        let t = y.keys().next().value;
        y.delete(t);
    }
}
