n.d(t, { Z: () => _ }), n(47120);
var i,
    s = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(442837),
    c = n(481060),
    d = n(893776),
    u = n(468026),
    h = n(594174),
    m = n(388032);
function g(e, t, n) {
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
class x extends (i = l.Component) {
    render() {
        let { color: e, look: t, size: n } = this.props;
        return (0, s.jsx)(c.zxk, {
            look: t,
            size: n,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: m.intl.string(m.t.lm1UKi)
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'state', { isSendingVerificationEmail: !1 }),
            g(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: t } = this.props;
                null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        d.Z.verifyResend()
                            .then(() =>
                                (0, c.h7j)((t) =>
                                    (0, s.jsx)(c.ConfirmModal, {
                                        header: m.intl.string(m.t.LykQYm),
                                        confirmText: m.intl.string(m.t.BddRzc),
                                        confirmButtonColor: c.zxk.Colors.BRAND,
                                        ...t,
                                        children: (0, s.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: m.intl.format(m.t.azKEPz, { email: e.email })
                                        })
                                    })
                                )
                            )
                            .catch((e) => {
                                let { body: t } = e,
                                    n = m.intl.string(m.t.XcrQNz);
                                null != t && t.email && (n = t.email),
                                    (0, c.h7j)((e) =>
                                        (0, s.jsx)(u.default, {
                                            title: m.intl.string(m.t.VbTh0N),
                                            body: n,
                                            ...e
                                        })
                                    );
                            })
                            .then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    });
            });
    }
}
g(x, 'defaultProps', {
    size: c.zxk.Sizes.MEDIUM,
    color: c.zxk.Colors.BRAND
});
let _ = o.ZP.connectStores([h.default], () => {
    let e = h.default.getCurrentUser();
    return a()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
})(x);
