n.d(t, {
    $j: () => u,
    Ty: () => d,
    lW: () => _,
    sr: () => f,
    zP: () => c
});
var i = n(536285),
    r = n(996106),
    a = n(812967),
    s = n(511405),
    o = n(981631),
    l = n(186901);
function u() {
    i.default.connect();
}
function c() {
    i.default.disconnect();
}
function d(e, t) {
    if (!__OVERLAY__) throw new r.Z({ errorCode: o.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    i.default.subscribe(o.zMe.OVERLAY, { token: t }, (t) => e((0, s.H)(t)));
}
function f(e, t) {
    if (__OVERLAY__) throw new r.Z({ errorCode: o.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    a.Z.setCommandHandler(o.Etm.OVERLAY, {
        scope: l.cE,
        handler(n) {
            let { args: i } = n;
            if (!t(i.token)) throw new r.Z({ errorCode: o.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            e((0, s.H)(i));
        }
    }),
        a.Z.setEventHandler(o.zMe.OVERLAY, {
            scope: l.cE,
            handler(e) {
                let { args: n } = e;
                if (!t(n.token)) throw new r.Z({ errorCode: o.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            }
        });
}
function _(e) {
    __OVERLAY__ ? i.default.request(o.Etm.OVERLAY, (0, s.G)(e)) : a.Z.dispatchToSubscriptions(o.zMe.OVERLAY, {}, (0, s.G)(e));
}
