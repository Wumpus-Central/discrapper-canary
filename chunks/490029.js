n.d(t, {
    $j: () => u,
    Ty: () => f,
    lW: () => _,
    sr: () => p,
    zP: () => d,
}),
    n(415506);
var r = n(536285),
    i = n(996106),
    a = n(812967),
    o = n(960048),
    s = n(511405),
    l = n(981631),
    c = n(186901);
function u() {
    r.default.connect();
}
function d() {
    r.default.disconnect();
}
function f(e, t) {
    if (!__OVERLAY__) throw new i.Z({ errorCode: l.lTL.UNKNOWN_ERROR }, "called from wrong app context");
    r.default.subscribe(l.zMe.OVERLAY, { token: t }, (t) => e((0, s.H)(t)));
}
function p(e, t) {
    if (__OVERLAY__) throw new i.Z({ errorCode: l.lTL.UNKNOWN_ERROR }, "called from wrong app context");
    a.Z.setCommandHandler(l.Etm.OVERLAY, {
        scope: c.cE,
        handler(n) {
            let { args: r } = n;
            if (!t(r.token)) throw new i.Z({ errorCode: l.lTL.INVALID_TOKEN }, "Invalid RPC auth token provided");
            e((0, s.H)(r));
        },
    }),
        a.Z.setEventHandler(l.zMe.OVERLAY, {
            scope: c.cE,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new i.Z({ errorCode: l.lTL.INVALID_TOKEN }, "Invalid RPC auth token provided");
            },
        });
}
function _(e) {
    if (__OVERLAY__) return r.default.request(l.Etm.OVERLAY, (0, s.G)(e));
    try {
        return a.Z.dispatchToSubscriptions(l.zMe.OVERLAY, {}, (0, s.G)(e)), Promise.resolve();
    } catch (i) {
        let t = e.type,
            n = [];
        t === l.BmY.DISPATCH && (n = e.payloads.map((e) => e.type));
        let r = Error("Error dispatching overlay RPC: ".concat(i.message));
        throw (
            (i.stack && (r.stack = i.stack),
            o.Z.captureException(r, {
                tags: { source: "legacy-overlay" },
                extra: {
                    eventType: t,
                    payloadTypes: n,
                },
            }),
            r)
        );
    }
}
