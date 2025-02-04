n.d(t, { Z: () => x }), n(47120);
var i,
    s = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    d = n(893776),
    u = n(468026),
    m = n(594174),
    h = n(388032);
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
class _ extends (i = r.Component) {
    render() {
        let { color: e, look: t, size: n } = this.props;
        return (0, s.jsx)(c.zxk, {
            look: t,
            size: n,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: h.intl.string(h.t.lm1UKi)
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
                                        header: h.intl.string(h.t.LykQYm),
                                        confirmText: h.intl.string(h.t.BddRzc),
                                        confirmButtonColor: c.zxk.Colors.BRAND,
                                        ...t,
                                        children: (0, s.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: h.intl.format(h.t.azKEPz, { email: e.email })
                                        })
                                    })
                                )
                            )
                            .catch((e) => {
                                let { body: t } = e,
                                    n = h.intl.string(h.t.XcrQNz);
                                null != t && t.email && (n = t.email),
                                    (0, c.h7j)((e) =>
                                        (0, s.jsx)(u.default, {
                                            title: h.intl.string(h.t.VbTh0N),
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
g(_, 'defaultProps', {
    size: c.zxk.Sizes.MEDIUM,
    color: c.zxk.Colors.BRAND
});
let x = o.ZP.connectStores([m.default], () => {
    let e = m.default.getCurrentUser();
    return a()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
})(_);
