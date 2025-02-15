a.d(e, {
    gi: () => i,
    yo: () => c
});
var r = a(370336),
    n = a(394798),
    _ = a(305625),
    o = a(696486);
function i(t, e) {
    var a, i, c, s;
    let { fingerprint: E, span: l, breadcrumbs: u, sdkProcessingMetadata: I } = e;
    (function (t, e) {
        let { extra: a, tags: n, user: _, contexts: o, level: i, transactionName: c } = e,
            s = (0, r.Jr)(a);
        s &&
            Object.keys(s).length &&
            (t.extra = {
                ...s,
                ...t.extra
            });
        let E = (0, r.Jr)(n);
        E &&
            Object.keys(E).length &&
            (t.tags = {
                ...E,
                ...t.tags
            });
        let l = (0, r.Jr)(_);
        l &&
            Object.keys(l).length &&
            (t.user = {
                ...l,
                ...t.user
            });
        let u = (0, r.Jr)(o);
        u &&
            Object.keys(u).length &&
            (t.contexts = {
                ...u,
                ...t.contexts
            }),
            i && (t.level = i),
            c && 'transaction' !== t.type && (t.transaction = c);
    })(t, e),
        l &&
            (function (t, e) {
                (t.contexts = {
                    trace: (0, o.wy)(e),
                    ...t.contexts
                }),
                    (t.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0, _.jC)(e),
                        ...t.sdkProcessingMetadata
                    });
                let a = (0, o.Gx)(e),
                    r = (0, o.XU)(a).description;
                r && !t.transaction && 'transaction' === t.type && (t.transaction = r);
            })(t, l),
        (a = t),
        (i = E),
        (a.fingerprint = a.fingerprint ? (0, n.lE)(a.fingerprint) : []),
        i && (a.fingerprint = a.fingerprint.concat(i)),
        a.fingerprint && !a.fingerprint.length && delete a.fingerprint,
        (function (t, e) {
            let a = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = a.length ? a : void 0;
        })(t, u),
        (c = t),
        (s = I),
        (c.sdkProcessingMetadata = {
            ...c.sdkProcessingMetadata,
            ...s
        });
}
function c(t, e) {
    let { extra: a, tags: r, user: n, contexts: _, level: o, sdkProcessingMetadata: i, breadcrumbs: c, fingerprint: E, eventProcessors: l, attachments: u, propagationContext: I, transactionName: R, span: d } = e;
    s(t, 'extra', a),
        s(t, 'tags', r),
        s(t, 'user', n),
        s(t, 'contexts', _),
        s(t, 'sdkProcessingMetadata', i),
        o && (t.level = o),
        R && (t.transactionName = R),
        d && (t.span = d),
        c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]),
        E.length && (t.fingerprint = [...t.fingerprint, ...E]),
        l.length && (t.eventProcessors = [...t.eventProcessors, ...l]),
        u.length && (t.attachments = [...t.attachments, ...u]),
        (t.propagationContext = {
            ...t.propagationContext,
            ...I
        });
}
function s(t, e, a) {
    if (a && Object.keys(a).length) for (let r in ((t[e] = { ...t[e] }), a)) Object.prototype.hasOwnProperty.call(a, r) && (t[e][r] = a[r]);
}
