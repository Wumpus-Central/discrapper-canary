n.d(t, { Z: () => b }), n(388685);
var i,
    r = n(200651),
    s = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(893776),
    u = n(468026),
    m = n(594174),
    g = n(388032);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
class f extends (i = s.Component) {
    render() {
        let { color: e, look: t, size: n } = this.props;
        return (0, r.jsx)(c.zxk, {
            look: t,
            size: n,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: g.intl.string(g.t.lm1UKi)
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', { isSendingVerificationEmail: !1 }),
            p(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: t } = this.props;
                null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        d.Z.verifyResend()
                            .then(() =>
                                (0, c.h7j)((t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        c.ConfirmModal,
                                        ((n = h(
                                            {
                                                header: g.intl.string(g.t.LykQYm),
                                                confirmText: g.intl.string(g.t.BddRzc),
                                                confirmButtonColor: c.zxk.Colors.BRAND
                                            },
                                            t
                                        )),
                                        (i = i =
                                            {
                                                children: (0, r.jsx)(c.Text, {
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
                                null != t && t.email && (n = t.email),
                                    (0, c.h7j)((e) =>
                                        (0, r.jsx)(
                                            u.default,
                                            h(
                                                {
                                                    title: g.intl.string(g.t.VbTh0N),
                                                    body: n
                                                },
                                                e
                                            )
                                        )
                                    );
                            })
                            .then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    });
            });
    }
}
p(f, 'defaultProps', {
    size: c.zxk.Sizes.MEDIUM,
    color: c.zxk.Colors.BRAND
});
let b = o.ZP.connectStores([m.default], () => {
    let e = m.default.getCurrentUser();
    return a()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
})(f);
