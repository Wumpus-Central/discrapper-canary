r.d(n, {
    $j: function () {
        return c;
    },
    Ty: function () {
        return f;
    },
    lW: function () {
        return h;
    },
    sr: function () {
        return p;
    },
    zP: function () {
        return d;
    }
});
var i = r(536285),
    a = r(996106),
    o = r(812967),
    s = r(511405),
    l = r(981631),
    u = r(186901);
function c() {
    i.default.connect();
}
function d() {
    i.default.disconnect();
}
function f(e, n) {
    if (!__OVERLAY__) throw new a.Z({ errorCode: l.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    i.default.subscribe(l.zMe.OVERLAY, { token: n }, (n) => e((0, s.H)(n)));
}
function p(e, n) {
    if (__OVERLAY__) throw new a.Z({ errorCode: l.lTL.UNKNOWN_ERROR }, 'called from wrong app context');
    o.Z.setCommandHandler(l.Etm.OVERLAY, {
        scope: u.cE,
        handler(r) {
            let { args: i } = r;
            if (!n(i.token)) throw new a.Z({ errorCode: l.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            e((0, s.H)(i));
        }
    }),
        o.Z.setEventHandler(l.zMe.OVERLAY, {
            scope: u.cE,
            handler(e) {
                let { args: r } = e;
                if (!n(r.token)) throw new a.Z({ errorCode: l.lTL.INVALID_TOKEN }, 'Invalid RPC auth token provided');
            }
        });
}
function h(e) {
    __OVERLAY__ ? i.default.request(l.Etm.OVERLAY, (0, s.G)(e)) : o.Z.dispatchToSubscriptions(l.zMe.OVERLAY, {}, (0, s.G)(e));
}
