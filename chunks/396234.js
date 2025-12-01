r.d(t, {
    gi: () => _,
    yo: () => s,
});
var n = r(370336),
    a = r(394798),
    i = r(305625),
    o = r(696486);
function _(e, t) {
    var r, _, s, c;
    let { fingerprint: E, span: l, breadcrumbs: u, sdkProcessingMetadata: d } = t;
    (function (e, t) {
        let { extra: r, tags: a, user: i, contexts: o, level: _, transactionName: s } = t,
            c = (0, n.Jr)(r);
        c &&
            Object.keys(c).length &&
            (e.extra = {
                ...c,
                ...e.extra,
            });
        let E = (0, n.Jr)(a);
        E &&
            Object.keys(E).length &&
            (e.tags = {
                ...E,
                ...e.tags,
            });
        let l = (0, n.Jr)(i);
        l &&
            Object.keys(l).length &&
            (e.user = {
                ...l,
                ...e.user,
            });
        let u = (0, n.Jr)(o);
        u &&
            Object.keys(u).length &&
            (e.contexts = {
                ...u,
                ...e.contexts,
            }),
            _ && (e.level = _),
            s && "transaction" !== e.type && (e.transaction = s);
    })(e, t),
        l &&
            (function (e, t) {
                (e.contexts = {
                    trace: (0, o.wy)(t),
                    ...e.contexts,
                }),
                    (e.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0, i.jC)(t),
                        ...e.sdkProcessingMetadata,
                    });
                let r = (0, o.Gx)(t),
                    n = (0, o.XU)(r).description;
                n && !e.transaction && "transaction" === e.type && (e.transaction = n);
            })(e, l),
        (r = e),
        (_ = E),
        (r.fingerprint = r.fingerprint ? (0, a.lE)(r.fingerprint) : []),
        _ && (r.fingerprint = r.fingerprint.concat(_)),
        r.fingerprint && !r.fingerprint.length && delete r.fingerprint,
        (function (e, t) {
            let r = [...(e.breadcrumbs || []), ...t];
            e.breadcrumbs = r.length ? r : void 0;
        })(e, u),
        (s = e),
        (c = d),
        (s.sdkProcessingMetadata = {
            ...s.sdkProcessingMetadata,
            ...c,
        });
}
function s(e, t) {
    let {
        extra: r,
        tags: n,
        user: a,
        contexts: i,
        level: o,
        sdkProcessingMetadata: _,
        breadcrumbs: s,
        fingerprint: E,
        eventProcessors: l,
        attachments: u,
        propagationContext: d,
        transactionName: I,
        span: p,
    } = t;
    c(e, "extra", r),
        c(e, "tags", n),
        c(e, "user", a),
        c(e, "contexts", i),
        c(e, "sdkProcessingMetadata", _),
        o && (e.level = o),
        I && (e.transactionName = I),
        p && (e.span = p),
        s.length && (e.breadcrumbs = [...e.breadcrumbs, ...s]),
        E.length && (e.fingerprint = [...e.fingerprint, ...E]),
        l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
        u.length && (e.attachments = [...e.attachments, ...u]),
        (e.propagationContext = {
            ...e.propagationContext,
            ...d,
        });
}
function c(e, t, r) {
    if (r && Object.keys(r).length)
        for (let n in ((e[t] = { ...e[t] }), r)) Object.prototype.hasOwnProperty.call(r, n) && (e[t][n] = r[n]);
}
