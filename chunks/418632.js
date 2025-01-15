n(47120);
var i,
    r = n(200651),
    s = n(192379),
    a = n(512722),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    d = n(893776),
    u = n(468026),
    m = n(594174),
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
class p extends (i = s.Component) {
    render() {
        let { color: e, look: t, size: n } = this.props;
        return (0, r.jsx)(c.Button, {
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
            h(this, 'state', { isSendingVerificationEmail: !1 }),
            h(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: t } = this.props;
                null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        d.Z.verifyResend()
                            .then(() =>
                                (0, c.openModal)((t) =>
                                    (0, r.jsx)(c.ConfirmModal, {
                                        header: g.intl.string(g.t.LykQYm),
                                        confirmText: g.intl.string(g.t.BddRzc),
                                        confirmButtonColor: c.Button.Colors.BRAND,
                                        ...t,
                                        children: (0, r.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: g.intl.format(g.t.azKEPz, { email: e.email })
                                        })
                                    })
                                )
                            )
                            .catch((e) => {
                                let { body: t } = e,
                                    n = g.intl.string(g.t.XcrQNz);
                                null != t && t.email && (n = t.email),
                                    (0, c.openModal)((e) =>
                                        (0, r.jsx)(u.default, {
                                            title: g.intl.string(g.t.VbTh0N),
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
h(p, 'defaultProps', {
    size: c.Button.Sizes.MEDIUM,
    color: c.Button.Colors.BRAND
}),
    (t.Z = o.ZP.connectStores([m.default], () => {
        let e = m.default.getCurrentUser();
        return l()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
    })(p));
