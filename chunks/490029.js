n.d(t, {
    $j: () => c,
    Ty: () => d,
    lW: () => p,
    sr: () => f,
    zP: () => u
});
var r = n(536285),
    i = n(996106),
    o = n(812967),
    a = n(511405),
    s = n(981631),
    l = n(186901);
function c() {
    r.default.connect();
}
function u() {
    r.default.disconnect();
}
function d(e, t) {
    if (!__OVERLAY__) throw new i.Z({ errorCode: s.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    r.default.subscribe(s.zMe.OVERLAY, { token: t }, (t) => e((0, a.H)(t)));
}
function f(e, t) {
    if (__OVERLAY__) throw new i.Z({ errorCode: s.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    o.Z.setCommandHandler(s.Etm.OVERLAY, {
        scope: l.cE,
        handler(n) {
            let { args: r } = n;
            if (!t(r.token)) throw new i.Z({ errorCode: s.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            e((0, a.H)(r));
        }
    }),
        o.Z.setEventHandler(s.zMe.OVERLAY, {
            scope: l.cE,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new i.Z({ errorCode: s.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            }
        });
}
function p(e) {
    __OVERLAY__ ? r.default.request(s.Etm.OVERLAY, (0, a.G)(e)) : o.Z.dispatchToSubscriptions(s.zMe.OVERLAY, {}, (0, a.G)(e));
}
