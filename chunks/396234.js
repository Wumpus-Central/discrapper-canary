a.d(e, {
    gi: () => i,
    yo: () => c
});
var r = a(370336),
    _ = a(394798),
    n = a(305625),
    o = a(696486);
function i(t, e) {
    var a, i, c, E;
    let { fingerprint: s, span: l, breadcrumbs: u, sdkProcessingMetadata: I } = e;
    ((function (t, e) {
        let { extra: a, tags: _, user: n, contexts: o, level: i, transactionName: c } = e,
            E = (0, r.Jr)(a);
        E &&
            Object.keys(E).length &&
            (t.extra = {
                ...E,
                ...t.extra
            });
        let s = (0, r.Jr)(_);
        s &&
            Object.keys(s).length &&
            (t.tags = {
                ...s,
                ...t.tags
            });
        let l = (0, r.Jr)(n);
        l &&
            Object.keys(l).length &&
            (t.user = {
                ...l,
                ...t.user
            });
        let u = (0, r.Jr)(o);
        (u &&
            Object.keys(u).length &&
            (t.contexts = {
                ...u,
                ...t.contexts
            }),
            i && (t.level = i),
            c && 'transaction' !== t.type && (t.transaction = c));
    })(t, e),
        l &&
            (function (t, e) {
                ((t.contexts = {
                    trace: (0, o.wy)(e),
                    ...t.contexts
                }),
                    (t.sdkProcessingMetadata = {
                        dynamicSamplingContext: (0, n.jC)(e),
                        ...t.sdkProcessingMetadata
                    }));
                let a = (0, o.Gx)(e),
                    r = (0, o.XU)(a).description;
                r && !t.transaction && 'transaction' === t.type && (t.transaction = r);
            })(t, l),
        (a = t),
        (i = s),
        (a.fingerprint = a.fingerprint ? (0, _.lE)(a.fingerprint) : []),
        i && (a.fingerprint = a.fingerprint.concat(i)),
        a.fingerprint && !a.fingerprint.length && delete a.fingerprint,
        (function (t, e) {
            let a = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = a.length ? a : void 0;
        })(t, u),
        (c = t),
        (E = I),
        (c.sdkProcessingMetadata = {
            ...c.sdkProcessingMetadata,
            ...E
        }));
}
function c(t, e) {
    let { extra: a, tags: r, user: _, contexts: n, level: o, sdkProcessingMetadata: i, breadcrumbs: c, fingerprint: s, eventProcessors: l, attachments: u, propagationContext: I, transactionName: R, span: d } = e;
    (E(t, 'extra', a),
        E(t, 'tags', r),
        E(t, 'user', _),
        E(t, 'contexts', n),
        E(t, 'sdkProcessingMetadata', i),
        o && (t.level = o),
        R && (t.transactionName = R),
        d && (t.span = d),
        c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]),
        s.length && (t.fingerprint = [...t.fingerprint, ...s]),
        l.length && (t.eventProcessors = [...t.eventProcessors, ...l]),
        u.length && (t.attachments = [...t.attachments, ...u]),
        (t.propagationContext = {
            ...t.propagationContext,
            ...I
        }));
}
function E(t, e, a) {
    if (a && Object.keys(a).length) for (let r in ((t[e] = { ...t[e] }), a)) Object.prototype.hasOwnProperty.call(a, r) && (t[e][r] = a[r]);
}
