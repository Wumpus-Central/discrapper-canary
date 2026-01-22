n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(272355);
let s = "CONNECTIONS_GRID_MODAL_KEY";
class o extends a.A {
    _initialize() {
        l.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            l.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    _terminate() {
        l.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            l.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    handleShow(e) {
        let {
            onComplete: t,
            excludedPlatformTypes: l,
            includedPlatformTypes: a,
            integrations: o,
            onCompleteApplication: c,
        } = e;
        (0, i.kBI)(s) ||
            (0, i.mMO)(async () => {
                let { default: e } = await n.e("95198").then(n.bind(n, 58829));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                onComplete: t,
                                excludedPlatformTypes: l,
                                includedPlatformTypes: a,
                                integrations: o,
                                onCompleteApplication: c,
                            },
                            n,
                        ),
                    );
            });
    }
    handleHide() {
        (0, i.OoC)(s);
    }
}
let c = new o();
