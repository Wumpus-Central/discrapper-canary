(n.d(t, { Z: () => x }), n(388685));
var i,
    r = n(255367),
    s = n(73800),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(755721),
    d = n(481060),
    u = n(893776),
    m = n(468026),
    p = n(594174),
    g = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                h(e, t, n[t]);
            }));
    }
    return e;
}
class b extends (i = s.Component) {
    render() {
        let { color: e, look: t, size: n } = this.props;
        return (0, r.jsx)(c.zx, {
            look: t,
            size: n,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: g.intl.string(g.t.lm1UKi)
        });
    }
    constructor(...e) {
        (super(...e),
            h(this, 'state', { isSendingVerificationEmail: !1 }),
            h(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: t } = this.props;
                (null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        u.Z.verifyResend()
                            .then(() =>
                                (0, d.h7j)((t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        d.ConfirmModal,
                                        ((n = f(
                                            {
                                                header: g.intl.string(g.t.LykQYm),
                                                confirmText: g.intl.string(g.t.BddRzc),
                                                confirmButtonColor: c.zx.Colors.BRAND
                                            },
                                            t
                                        )),
                                        (i = i =
                                            {
                                                children: (0, r.jsx)(d.Text, {
                                                    variant: 'text-md/normal',
                                                    children: g.intl.format(g.t.azKEPz, { email: e.email })
                                                })
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n)
                                    );
                                })
                            )
                            .catch((e) => {
                                let { body: t } = e,
                                    n = g.intl.string(g.t.XcrQNz);
                                (null != t && t.email && (n = t.email),
                                    (0, d.h7j)((e) =>
                                        (0, r.jsx)(
                                            m.default,
                                            f(
                                                {
                                                    title: g.intl.string(g.t.VbTh0N),
                                                    body: n
                                                },
                                                e
                                            )
                                        )
                                    ));
                            })
                            .then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    }));
            }));
    }
}
h(b, 'defaultProps', {
    size: c.zx.Sizes.MEDIUM,
    color: c.zx.Colors.BRAND
});
let x = o.ZP.connectStores([p.default], () => {
    let e = p.default.getCurrentUser();
    return (l()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e });
})(b);
