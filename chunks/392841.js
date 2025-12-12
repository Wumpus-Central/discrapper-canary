n.d(t, {
    R: () => d,
    U0: () => f,
});
var r = n(431660),
    i = n(343573),
    a = n(1693),
    o = n(606093),
    _ = n(847572),
    s = n(180932),
    c = n(509440),
    E = n(161877),
    l = n(910316),
    u = n(841122);
function d(e, t, n, d, f, I) {
    var T, R;
    let { normalizeDepth: A = 3, normalizeMaxBreadth: N = 1000 } = e,
        h = {
            ...t,
            event_id: t.event_id || n.event_id || (0, r.DM)(),
            timestamp: t.timestamp || (0, i.yW)(),
        },
        O = n.integrations || e.integrations.map((e) => e.name);
    (function (e, t) {
        let { environment: n, release: r, dist: i, maxValueLength: o = 250 } = t;
        "environment" in e || (e.environment = "environment" in t ? n : s.J),
            void 0 === e.release && void 0 !== r && (e.release = r),
            void 0 === e.dist && void 0 !== i && (e.dist = i),
            e.message && (e.message = (0, a.$G)(e.message, o));
        let _ = e.exception && e.exception.values && e.exception.values[0];
        _ && _.value && (_.value = (0, a.$G)(_.value, o));
        let c = e.request;
        c && c.url && (c.url = (0, a.$G)(c.url, o));
    })(h, e),
        (T = h),
        (R = O).length > 0 && ((T.sdk = T.sdk || {}), (T.sdk.integrations = [...(T.sdk.integrations || []), ...R])),
        f && f.emit("applyFrameMetadata", t),
        void 0 === t.type &&
            (function (e, t) {
                let n,
                    r = o.n._sentryDebugIds;
                if (!r) return;
                let i = p.get(t);
                i ? (n = i) : ((n = new Map()), p.set(t, n));
                let a = Object.entries(r).reduce((e, [r, i]) => {
                    let a,
                        o = n.get(r);
                    o ? (a = o) : ((a = t(r)), n.set(r, a));
                    for (let t = a.length - 1; t >= 0; t--) {
                        let n = a[t];
                        if (n.filename) {
                            e[n.filename] = i;
                            break;
                        }
                    }
                    return e;
                }, {});
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.filename && (e.debug_id = a[e.filename]);
                        });
                    });
                } catch (e) {}
            })(h, e.stackParser);
    let S = (function (e, t) {
        if (!t) return e;
        let n = e ? e.clone() : new l.s();
        return n.update(t), n;
    })(d, n.captureContext);
    n.mechanism && (0, r.EG)(h, n.mechanism);
    let L = f ? f.getEventProcessors() : [],
        g = (0, c.lW)().getScopeData();
    if (I) {
        let e = I.getScopeData();
        (0, u.yo)(g, e);
    }
    if (S) {
        let e = S.getScopeData();
        (0, u.yo)(g, e);
    }
    let m = [...(n.attachments || []), ...g.attachments];
    m.length && (n.attachments = m), (0, u.gi)(h, g);
    let D = [...L, ...g.eventProcessors];
    return (0, E.R)(D, h, n).then((e) =>
        (e &&
            (function (e) {
                let t = {};
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.debug_id &&
                                (e.abs_path ? (t[e.abs_path] = e.debug_id) : e.filename && (t[e.filename] = e.debug_id),
                                delete e.debug_id);
                        });
                    });
                } catch (e) {}
                if (0 === Object.keys(t).length) return;
                (e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
                let n = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t,
                    });
                });
            })(e),
        "number" == typeof A && A > 0)
            ? (function (e, t, n) {
                  if (!e) return null;
                  let r = {
                      ...e,
                      ...(e.breadcrumbs && {
                          breadcrumbs: e.breadcrumbs.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, _.Fv)(e.data, t, n) }),
                          })),
                      }),
                      ...(e.user && { user: (0, _.Fv)(e.user, t, n) }),
                      ...(e.contexts && { contexts: (0, _.Fv)(e.contexts, t, n) }),
                      ...(e.extra && { extra: (0, _.Fv)(e.extra, t, n) }),
                  };
                  return (
                      e.contexts &&
                          e.contexts.trace &&
                          r.contexts &&
                          ((r.contexts.trace = e.contexts.trace),
                          e.contexts.trace.data && (r.contexts.trace.data = (0, _.Fv)(e.contexts.trace.data, t, n))),
                      e.spans &&
                          (r.spans = e.spans.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, _.Fv)(e.data, t, n) }),
                          }))),
                      r
                  );
              })(e, A, N)
            : e,
    );
}
let p = new WeakMap();
function f(e) {
    if (e) {
        var t;
        return (t = e) instanceof l.s || "function" == typeof t || Object.keys(e).some((e) => I.includes(e))
            ? { captureContext: e }
            : e;
    }
}
let I = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
