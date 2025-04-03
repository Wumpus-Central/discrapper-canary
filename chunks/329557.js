n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140),
    l = n(317770),
    s = n(51596),
    a = n(823385),
    c = n(900085);
let u = 'QUICK_SWITCHER_MODAL_KEY';
class d extends l.Z {
    _initialize() {
        o.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), o.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        o.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), o.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        a.Z.isOpen() &&
            !(0, i.nfh)(u) &&
            (0, i.h7j)(
                (e) =>
                    (0, r.jsx)(
                        c.Z,
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
                        })({}, e)
                    ),
                {
                    modalKey: u,
                    instant: !0,
                    onCloseCallback: s.Cp
                }
            );
    }
    handleHide() {
        (0, i.Mr3)(u);
    }
}
let p = new d();
