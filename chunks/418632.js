n.d(t, {
    Z: () => O,
    s: () => b,
}),
    n(388685);
var r,
    i = n(951288),
    a = n(647438),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    f = n(468026),
    _ = n(594174),
    p = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    return d.Z.verifyResend()
        .then(() => {
            (0, u.h7j)((t) =>
                (0, i.jsx)(
                    u.ConfirmModal,
                    E(
                        m(
                            {
                                header: p.intl.string(p.t.LykQYm),
                                confirmText: p.intl.string(p.t.BddRzc),
                                confirmButtonColor: c.zx.Colors.BRAND,
                            },
                            t,
                        ),
                        {
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: p.intl.format(p.t.azKEPz, { email: e.email }),
                            }),
                        },
                    ),
                ),
            );
        })
        .catch((e) => {
            let { body: t } = e,
                n = p.intl.string(p.t.XcrQNz);
            null != t && t.email && (n = t.email),
                (0, u.h7j)((e) =>
                    (0, i.jsx)(
                        f.default,
                        m(
                            {
                                title: p.intl.string(p.t.VbTh0N),
                                body: n,
                            },
                            e,
                        ),
                    ),
                );
        });
}
class y extends (r = a.Component) {
    render() {
        let { color: e, look: t, size: n } = this.props;
        return (0, i.jsx)(c.zx, {
            look: t,
            size: n,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: p.intl.string(p.t.lm1UKi),
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "state", { isSendingVerificationEmail: !1 }),
            h(this, "handleResendVerification", () => {
                let { currentUser: e, onClick: t } = this.props;
                null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        b(e).then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    });
            });
    }
}
h(y, "defaultProps", {
    size: c.zx.Sizes.MEDIUM,
    color: c.zx.Colors.BRAND,
});
let O = l.ZP.connectStores([_.default], () => {
    let e = _.default.getCurrentUser();
    return s()(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), { currentUser: e };
})(y);
