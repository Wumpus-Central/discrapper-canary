a.d(e, {
    gi: () => i,
    yo: () => E,
});
var r = a(370336),
    _ = a(394798),
    n = a(305625),
    o = a(696486);
function i(t, e) {
    var a, i, E, c;
    let { fingerprint: s, span: l, breadcrumbs: I, sdkProcessingMetadata: R } = e;
    (function (t, e) {
        let { extra: a, tags: _, user: n, contexts: o, level: i, transactionName: E } = e,
            c = (0, r.Jr)(a);
        c &&
            Object.keys(c).length &&
            (t.extra = {
                ...c,
                ...t.extra,
            });
        let s = (0, r.Jr)(_);
        s &&
            Object.keys(s).length &&
            (t.tags = {
                ...s,
                ...t.tags,
            });
        let l = (0, r.Jr)(n);
        l &&
            Object.keys(l).length &&
            (t.user = {
                ...l,
                ...t.user,
            });
        let I = (0, r.Jr)(o);
        I &&
            Object.keys(I).length &&
            (t.contexts = {
                ...I,
                ...t.contexts,
            }),
            i && (t.level = i),
            E && "transaction" !== t.type && (t.transaction = E);
    })(t, e),
        l &&
            (function (t, e) {
                (t.contexts = {
                    trace: (0, o.wy)(e),
                    ...t.contexts,
                }),
                    (t.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0, n.jC)(e),
                        ...t.sdkProcessingMetadata,
                    });
                let a = (0, o.Gx)(e),
                    r = (0, o.XU)(a).description;
                r && !t.transaction && "transaction" === t.type && (t.transaction = r);
            })(t, l),
        (a = t),
        (i = s),
        (a.fingerprint = a.fingerprint ? (0, _.lE)(a.fingerprint) : []),
        i && (a.fingerprint = a.fingerprint.concat(i)),
        a.fingerprint && !a.fingerprint.length && delete a.fingerprint,
        (function (t, e) {
            let a = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = a.length ? a : void 0;
        })(t, I),
        (E = t),
        (c = R),
        (E.sdkProcessingMetadata = {
            ...E.sdkProcessingMetadata,
            ...c,
        });
}
function E(t, e) {
    let {
        extra: a,
        tags: r,
        user: _,
        contexts: n,
        level: o,
        sdkProcessingMetadata: i,
        breadcrumbs: E,
        fingerprint: s,
        eventProcessors: l,
        attachments: I,
        propagationContext: R,
        transactionName: u,
        span: A,
    } = e;
    c(t, "extra", a),
        c(t, "tags", r),
        c(t, "user", _),
        c(t, "contexts", n),
        c(t, "sdkProcessingMetadata", i),
        o && (t.level = o),
        u && (t.transactionName = u),
        A && (t.span = A),
        E.length && (t.breadcrumbs = [...t.breadcrumbs, ...E]),
        s.length && (t.fingerprint = [...t.fingerprint, ...s]),
        l.length && (t.eventProcessors = [...t.eventProcessors, ...l]),
        I.length && (t.attachments = [...t.attachments, ...I]),
        (t.propagationContext = {
            ...t.propagationContext,
            ...R,
        });
}
function c(t, e, a) {
    if (a && Object.keys(a).length)
        for (let r in ((t[e] = { ...t[e] }), a)) Object.prototype.hasOwnProperty.call(a, r) && (t[e][r] = a[r]);
}
