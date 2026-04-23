"use strict";
n.d(t, { li: () => S, mG: () => w });
var r = n(922248),
    i = n(630449),
    o = n(326447),
    a = n(875565),
    s = n(272469),
    l = n(835869),
    c = n(128377),
    u = n(754433),
    d = n(231577),
    p = n(778334),
    h = n(826476),
    f = n(83220),
    m = n(411361),
    g = n(690094),
    _ = n(487851),
    y = n(582102);
function v(e, t) {
    let {
        extra: n,
        tags: r,
        user: i,
        contexts: o,
        level: a,
        sdkProcessingMetadata: s,
        breadcrumbs: l,
        fingerprint: c,
        eventProcessors: u,
        attachments: d,
        propagationContext: p,
        transactionName: h,
        span: f,
    } = t;
    b(e, "extra", n),
        b(e, "tags", r),
        b(e, "user", i),
        b(e, "contexts", o),
        (e.sdkProcessingMetadata = (0, _.h)(e.sdkProcessingMetadata, s, 2)),
        a && (e.level = a),
        h && (e.transactionName = h),
        f && (e.span = f),
        l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
        c.length && (e.fingerprint = [...e.fingerprint, ...c]),
        u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
        d.length && (e.attachments = [...e.attachments, ...d]),
        (e.propagationContext = { ...e.propagationContext, ...p });
}
function b(e, t, n) {
    e[t] = (0, _.h)(e[t], n, 1);
}
function w(e, t, n, _, b, w) {
    var S, E;
    let { normalizeDepth: k = 3, normalizeMaxBreadth: x = 1e3 } = e,
        C = { ...t, event_id: t.event_id || n.event_id || (0, d.eJ)(), timestamp: t.timestamp || (0, f.lu)() },
        T = n.integrations || e.integrations.map((e) => e.name);
    (function (e, t) {
        let { environment: n, release: i, dist: o, maxValueLength: a = 250 } = t;
        (e.environment = e.environment || n || r.U),
            !e.release && i && (e.release = i),
            !e.dist && o && (e.dist = o),
            e.message && (e.message = (0, h.xv)(e.message, a));
        let s = e.exception && e.exception.values && e.exception.values[0];
        s && s.value && (s.value = (0, h.xv)(s.value, a));
        let l = e.request;
        l && l.url && (l.url = (0, h.xv)(l.url, a));
    })(C, e),
        (S = C),
        (E = T).length > 0 && ((S.sdk = S.sdk || {}), (S.sdk.integrations = [...(S.sdk.integrations || []), ...E])),
        b && b.emit("applyFrameMetadata", t),
        void 0 === t.type &&
            (function (e, t) {
                let n = (0, u.z)(t);
                try {
                    e.exception.values.forEach((e) => {
                        e.stacktrace.frames.forEach((e) => {
                            n && e.filename && (e.debug_id = n[e.filename]);
                        });
                    });
                } catch (e) {}
            })(C, e.stackParser);
    let I = (function (e, t) {
        if (!t) return e;
        let n = e ? e.clone() : new c.H();
        return n.update(t), n;
    })(_, n.captureContext);
    n.mechanism && (0, d.M6)(C, n.mechanism);
    let M = b ? b.getEventProcessors() : [],
        O = (0, i.m6)().getScopeData();
    w && v(O, w.getScopeData()), I && v(O, I.getScopeData());
    let D = [...(n.attachments || []), ...O.attachments];
    return (
        D.length && (n.attachments = D),
        !(function (e, t) {
            var n, r, i, o, a, s, l, c;
            let u,
                d,
                p,
                { fingerprint: h, span: f, breadcrumbs: _, sdkProcessingMetadata: v } = t;
            (function (e, t) {
                let { extra: n, tags: r, user: i, contexts: o, level: a, transactionName: s } = t,
                    l = (0, g.Ce)(n);
                l && Object.keys(l).length && (e.extra = { ...l, ...e.extra });
                let c = (0, g.Ce)(r);
                c && Object.keys(c).length && (e.tags = { ...c, ...e.tags });
                let u = (0, g.Ce)(i);
                u && Object.keys(u).length && (e.user = { ...u, ...e.user });
                let d = (0, g.Ce)(o);
                d && Object.keys(d).length && (e.contexts = { ...d, ...e.contexts }),
                    a && (e.level = a),
                    s && "transaction" !== e.type && (e.transaction = s);
            })(e, t),
                f &&
                    ((n = e),
                    (r = f),
                    (n.contexts = { trace: (0, y.kX)(r), ...n.contexts }),
                    (n.sdkProcessingMetadata = { dynamicSamplingContext: (0, m.k1)(r), ...n.sdkProcessingMetadata }),
                    (u = (0, y.zU)(r)),
                    (d = (0, y.et)(u).description) &&
                        !n.transaction &&
                        "transaction" === n.type &&
                        (n.transaction = d)),
                (i = e),
                (o = h),
                (i.fingerprint = i.fingerprint ? (Array.isArray(i.fingerprint) ? i.fingerprint : [i.fingerprint]) : []),
                o && (i.fingerprint = i.fingerprint.concat(o)),
                i.fingerprint && !i.fingerprint.length && delete i.fingerprint,
                (a = e),
                (s = _),
                (p = [...(a.breadcrumbs || []), ...s]),
                (a.breadcrumbs = p.length ? p : void 0),
                (l = e),
                (c = v),
                (l.sdkProcessingMetadata = { ...l.sdkProcessingMetadata, ...c });
        })(C, O),
        (function e(t, n, r, i = 0) {
            return new l.T2((l, c) => {
                let u = t[i];
                if (null === n || "function" != typeof u) l(n);
                else {
                    let d = u({ ...n }, r);
                    o.T && u.id && null === d && s.vF.log(`Event processor "${u.id}" dropped event`),
                        (0, a.Qg)(d)
                            ? d.then((n) => e(t, n, r, i + 1).then(l)).then(null, c)
                            : e(t, d, r, i + 1)
                                  .then(l)
                                  .then(null, c);
                }
            });
        })([...M, ...O.eventProcessors], C, n).then((e) =>
            (e &&
                (function (e) {
                    let t = {};
                    try {
                        e.exception.values.forEach((e) => {
                            e.stacktrace.frames.forEach((e) => {
                                e.debug_id &&
                                    (e.abs_path
                                        ? (t[e.abs_path] = e.debug_id)
                                        : e.filename && (t[e.filename] = e.debug_id),
                                    delete e.debug_id);
                            });
                        });
                    } catch (e) {}
                    if (0 === Object.keys(t).length) return;
                    (e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || []);
                    let n = e.debug_meta.images;
                    Object.entries(t).forEach(([e, t]) => {
                        n.push({ type: "sourcemap", code_file: e, debug_id: t });
                    });
                })(e),
            "number" == typeof k && k > 0)
                ? (function (e, t, n) {
                      if (!e) return null;
                      let r = {
                          ...e,
                          ...(e.breadcrumbs && {
                              breadcrumbs: e.breadcrumbs.map((e) => ({
                                  ...e,
                                  ...(e.data && { data: (0, p.S8)(e.data, t, n) }),
                              })),
                          }),
                          ...(e.user && { user: (0, p.S8)(e.user, t, n) }),
                          ...(e.contexts && { contexts: (0, p.S8)(e.contexts, t, n) }),
                          ...(e.extra && { extra: (0, p.S8)(e.extra, t, n) }),
                      };
                      return (
                          e.contexts &&
                              e.contexts.trace &&
                              r.contexts &&
                              ((r.contexts.trace = e.contexts.trace),
                              e.contexts.trace.data &&
                                  (r.contexts.trace.data = (0, p.S8)(e.contexts.trace.data, t, n))),
                          e.spans &&
                              (r.spans = e.spans.map((e) => ({
                                  ...e,
                                  ...(e.data && { data: (0, p.S8)(e.data, t, n) }),
                              }))),
                          e.contexts &&
                              e.contexts.flags &&
                              r.contexts &&
                              (r.contexts.flags = (0, p.S8)(e.contexts.flags, 3, n)),
                          r
                      );
                  })(e, k, x)
                : e,
        )
    );
}
function S(e) {
    if (e) {
        var t;
        return (t = e) instanceof c.H || "function" == typeof t || Object.keys(e).some((e) => E.includes(e))
            ? { captureContext: e }
            : e;
    }
}
let E = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
