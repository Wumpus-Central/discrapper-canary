n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140),
    l = n(317770),
    s = n(731971),
    a = n(626135),
    c = n(379164),
    u = n(590965),
    d = n(981631);
let p = 'INVITE_MODAL_KEY';
class _ extends l.Z {
    _initialize() {
        o.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), o.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, i.Mr3)(p), o.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), o.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        u.Z.isOpen() &&
            !(0, i.nfh)(p) &&
            (0, i.ZDy)(
                async () => {
                    let { default: e } = await n.e('86872').then(n.bind(n, 472365));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, t)
                        );
                },
                {
                    modalKey: p,
                    contextKey: (0, i.VnL)(t),
                    onCloseRequest: () => {
                        let e = (0, s.e7)(),
                            t = (0, s._J)();
                        a.default.track(d.rMx.INVITE_ACCEPT_DISMISSED, {
                            invite_code: e,
                            guild_id: t
                        }),
                            c.Z.close();
                    }
                }
            );
    }
    handleCloseModal() {
        (0, i.Mr3)(p);
    }
}
let f = new _();
