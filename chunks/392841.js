r.d(t, {
    R: () => d,
    U0: () => p,
});
var n = r(431660),
    a = r(343573),
    i = r(1693),
    o = r(606093),
    _ = r(847572),
    s = r(180932),
    c = r(509440),
    E = r(161877),
    l = r(910316),
    u = r(841122);
function d(e, t, r, d, p, R) {
    var T, A;
    let { normalizeDepth: f = 3, normalizeMaxBreadth: N = 1000 } = e,
        O = {
            ...t,
            event_id: t.event_id || r.event_id || (0, n.DM)(),
            timestamp: t.timestamp || (0, a.yW)(),
        },
        h = r.integrations || e.integrations.map((e) => e.name);
    (function (e, t) {
        let { environment: r, release: n, dist: a, maxValueLength: o = 250 } = t;
        "environment" in e || (e.environment = "environment" in t ? r : s.J),
            void 0 === e.release && void 0 !== n && (e.release = n),
            void 0 === e.dist && void 0 !== a && (e.dist = a),
            e.message && (e.message = (0, i.$G)(e.message, o));
        let _ = e.exception && e.exception.values && e.exception.values[0];
        _ && _.value && (_.value = (0, i.$G)(_.value, o));
        let c = e.request;
        c && c.url && (c.url = (0, i.$G)(c.url, o));
    })(O, e),
        (T = O),
        (A = h).length > 0 && ((T.sdk = T.sdk || {}), (T.sdk.integrations = [...(T.sdk.integrations || []), ...A])),
        p && p.emit("applyFrameMetadata", t),
        void 0 === t.type &&
            (function (e, t) {
                let r,
                    n = o.n._sentryDebugIds;
                if (!n) return;
                let a = I.get(t);
                a ? (r = a) : ((r = new Map()), I.set(t, r));
                let i = Object.entries(n).reduce((e, [n, a]) => {
                    let i,
                        o = r.get(n);
                    o ? (i = o) : ((i = t(n)), r.set(n, i));
                    for (let t = i.length - 1; t >= 0; t--) {
                        let r = i[t];
                        if (r.filename) {
                            e[r.filename] = a;
                            break;
                        }
                    }
                    return e;
                }, {});
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            e.filename && (e.debug_id = i[e.filename]);
                        });
                    });
                } catch (e) {}
            })(O, e.stackParser);
    let S = (function (e, t) {
        if (!t) return e;
        let r = e ? e.clone() : new l.s();
        return r.update(t), r;
    })(d, r.captureContext);
    r.mechanism && (0, n.EG)(O, r.mechanism);
    let D = p ? p.getEventProcessors() : [],
        C = (0, c.lW)().getScopeData();
    if (R) {
        let e = R.getScopeData();
        (0, u.yo)(C, e);
    }
    if (S) {
        let e = S.getScopeData();
        (0, u.yo)(C, e);
    }
    let L = [...(r.attachments || []), ...C.attachments];
    L.length && (r.attachments = L), (0, u.gi)(O, C);
    let g = [...D, ...C.eventProcessors];
    return (0, E.R)(g, O, r).then((e) =>
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
                let r = e.debug_meta.images;
                Object.entries(t).forEach(([e, t]) => {
                    r.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t,
                    });
                });
            })(e),
        "number" == typeof f && f > 0)
            ? (function (e, t, r) {
                  if (!e) return null;
                  let n = {
                      ...e,
                      ...(e.breadcrumbs && {
                          breadcrumbs: e.breadcrumbs.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, _.Fv)(e.data, t, r) }),
                          })),
                      }),
                      ...(e.user && { user: (0, _.Fv)(e.user, t, r) }),
                      ...(e.contexts && { contexts: (0, _.Fv)(e.contexts, t, r) }),
                      ...(e.extra && { extra: (0, _.Fv)(e.extra, t, r) }),
                  };
                  return (
                      e.contexts &&
                          e.contexts.trace &&
                          n.contexts &&
                          ((n.contexts.trace = e.contexts.trace),
                          e.contexts.trace.data && (n.contexts.trace.data = (0, _.Fv)(e.contexts.trace.data, t, r))),
                      e.spans &&
                          (n.spans = e.spans.map((e) => ({
                              ...e,
                              ...(e.data && { data: (0, _.Fv)(e.data, t, r) }),
                          }))),
                      n
                  );
              })(e, f, N)
            : e,
    );
}
let I = new WeakMap();
function p(e) {
    if (e) {
        var t;
        return (t = e) instanceof l.s || "function" == typeof t || Object.keys(e).some((e) => R.includes(e))
            ? { captureContext: e }
            : e;
    }
}
let R = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
