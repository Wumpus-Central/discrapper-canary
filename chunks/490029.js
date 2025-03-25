n.d(t, {
    $j: () => u,
    Ty: () => f,
    lW: () => p,
    sr: () => _,
    zP: () => d
}),
    n(411104);
var r = n(536285),
    i = n(996106),
    o = n(812967),
    a = n(960048),
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
    if (!__OVERLAY__) throw new i.Z({ errorCode: l.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    r.default.subscribe(l.zMe.OVERLAY, { token: t }, (t) => e((0, s.H)(t)));
}
function _(e, t) {
    if (__OVERLAY__) throw new i.Z({ errorCode: l.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    o.Z.setCommandHandler(l.Etm.OVERLAY, {
        scope: c.cE,
        handler(n) {
            let { args: r } = n;
            if (!t(r.token)) throw new i.Z({ errorCode: l.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            e((0, s.H)(r));
        }
    }),
        o.Z.setEventHandler(l.zMe.OVERLAY, {
            scope: c.cE,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new i.Z({ errorCode: l.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            }
        });
}
function p(e) {
    if (__OVERLAY__) r.default.request(l.Etm.OVERLAY, (0, s.G)(e));
    else
        try {
            o.Z.dispatchToSubscriptions(l.zMe.OVERLAY, {}, (0, s.G)(e));
        } catch (i) {
            let t = e.type,
                n = [];
            t === l.BmY.DISPATCH && (n = e.payloads.map((e) => e.type));
            let r = Error('Error dispatching overlay RPC: '.concat(i.message));
            throw (
                (i.stack && (r.stack = i.stack),
                a.Z.captureException(r, {
                    extra: {
                        eventType: t,
                        payloadTypes: n
                    }
                }),
                r)
            );
        }
}
