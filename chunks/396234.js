_.d(e, {
    gi: () => E,
    yo: () => i,
});
var a = _(370336),
    r = _(394798),
    n = _(305625),
    o = _(696486);
function E(t, e) {
    var _, E, i, c;
    let { fingerprint: s, span: l, breadcrumbs: I, sdkProcessingMetadata: R } = e;
    (function (t, e) {
        let { extra: _, tags: r, user: n, contexts: o, level: E, transactionName: i } = e,
            c = (0, a.Jr)(_);
        c &&
            Object.keys(c).length &&
            (t.extra = {
                ...c,
                ...t.extra,
            });
        let s = (0, a.Jr)(r);
        s &&
            Object.keys(s).length &&
            (t.tags = {
                ...s,
                ...t.tags,
            });
        let l = (0, a.Jr)(n);
        l &&
            Object.keys(l).length &&
            (t.user = {
                ...l,
                ...t.user,
            });
        let I = (0, a.Jr)(o);
        I &&
            Object.keys(I).length &&
            (t.contexts = {
                ...I,
                ...t.contexts,
            }),
            E && (t.level = E),
            i && "transaction" !== t.type && (t.transaction = i);
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
                let _ = (0, o.Gx)(e),
                    a = (0, o.XU)(_).description;
                a && !t.transaction && "transaction" === t.type && (t.transaction = a);
            })(t, l),
        (_ = t),
        (E = s),
        (_.fingerprint = _.fingerprint ? (0, r.lE)(_.fingerprint) : []),
        E && (_.fingerprint = _.fingerprint.concat(E)),
        _.fingerprint && !_.fingerprint.length && delete _.fingerprint,
        (function (t, e) {
            let _ = [...(t.breadcrumbs || []), ...e];
            t.breadcrumbs = _.length ? _ : void 0;
        })(t, I),
        (i = t),
        (c = R),
        (i.sdkProcessingMetadata = {
            ...i.sdkProcessingMetadata,
            ...c,
        });
}
function i(t, e) {
    let {
        extra: _,
        tags: a,
        user: r,
        contexts: n,
        level: o,
        sdkProcessingMetadata: E,
        breadcrumbs: i,
        fingerprint: s,
        eventProcessors: l,
        attachments: I,
        propagationContext: R,
        transactionName: N,
        span: A,
    } = e;
    c(t, "extra", _),
        c(t, "tags", a),
        c(t, "user", r),
        c(t, "contexts", n),
        c(t, "sdkProcessingMetadata", E),
        o && (t.level = o),
        N && (t.transactionName = N),
        A && (t.span = A),
        i.length && (t.breadcrumbs = [...t.breadcrumbs, ...i]),
        s.length && (t.fingerprint = [...t.fingerprint, ...s]),
        l.length && (t.eventProcessors = [...t.eventProcessors, ...l]),
        I.length && (t.attachments = [...t.attachments, ...I]),
        (t.propagationContext = {
            ...t.propagationContext,
            ...R,
        });
}
function c(t, e, _) {
    if (_ && Object.keys(_).length)
        for (let a in ((t[e] = { ...t[e] }), _)) Object.prototype.hasOwnProperty.call(_, a) && (t[e][a] = _[a]);
}
