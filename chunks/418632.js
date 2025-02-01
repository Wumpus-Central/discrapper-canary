i.d(t, { Z: () => g }), i(47120);
var n,
    s = i(200651),
    r = i(192379),
    l = i(512722),
    o = i.n(l),
    a = i(442837),
    d = i(481060),
    c = i(893776),
    u = i(468026),
    f = i(594174),
    x = i(388032);
function h(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
class m extends (n = r.Component) {
    render() {
        let { color: e, look: t, size: i } = this.props;
        return (0, s.jsx)(d.zxk, {
            look: t,
            size: i,
            color: e,
            disabled: this.state.isSendingVerificationEmail,
            onClick: this.handleResendVerification,
            children: x.intl.string(x.t.lm1UKi)
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', { isSendingVerificationEmail: !1 }),
            h(this, 'handleResendVerification', () => {
                let { currentUser: e, onClick: t } = this.props;
                null == t || t(),
                    this.setState({ isSendingVerificationEmail: !0 }, () => {
                        c.Z.verifyResend()
                            .then(() =>
                                (0, d.h7j)((t) =>
                                    (0, s.jsx)(d.ConfirmModal, {
                                        header: x.intl.string(x.t.LykQYm),
                                        confirmText: x.intl.string(x.t.BddRzc),
                                        confirmButtonColor: d.zxk.Colors.BRAND,
                                        ...t,
                                        children: (0, s.jsx)(d.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.format(x.t.azKEPz, { email: e.email })
                                        })
                                    })
                                )
                            )
                            .catch((e) => {
                                let { body: t } = e,
                                    i = x.intl.string(x.t.XcrQNz);
                                null != t && t.email && (i = t.email),
                                    (0, d.h7j)((e) =>
                                        (0, s.jsx)(u.default, {
                                            title: x.intl.string(x.t.VbTh0N),
                                            body: i,
                                            ...e
                                        })
                                    );
                            })
                            .then(() => this.setState({ isSendingVerificationEmail: !1 }));
                    });
            });
    }
}
h(m, 'defaultProps', {
    size: d.zxk.Sizes.MEDIUM,
    color: d.zxk.Colors.BRAND
});
let g = a.ZP.connectStores([f.default], () => {
    let e = f.default.getCurrentUser();
    return o()(null != e, 'ResendEmailVerificationButton: currentUser cannot be undefined'), { currentUser: e };
})(m);
