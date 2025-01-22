var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(873115),
    u = r(219929),
    c = r(618541),
    d = r(975060),
    f = r(388032),
    p = r(262249);
class h extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && l.f6();
    }
    componentWillUnmount() {
        l.Nj().then(() => l.Dz());
    }
    render() {
        let { braintreeEmail: e, className: n, paypalClient: r } = this.props;
        return (0, i.jsx)(s.FormSection, {
            className: n,
            title: f.intl.string(f.t.QQBAoq),
            children: (0, i.jsxs)('div', {
                className: p.inputWrapper,
                children: [
                    (0, i.jsx)(u.ZP, {
                        type: u.ZP.Types.PAYPAL,
                        className: p.paypalIcon
                    }),
                    (0, i.jsx)(s.TextInput, {
                        value: e,
                        editable: !1,
                        readOnly: !0,
                        placeholder: null == r ? f.intl.string(f.t.dte2Mz) : f.intl.string(f.t.hopw7e),
                        inputClassName: p.paypalInput
                    })
                ]
            })
        });
    }
}
n.Z = o.ZP.connectStores([c.Z, d.Z], () => ({
    braintreeEmail: d.Z.braintreeEmail,
    paypalClient: c.Z.getPayPalClient()
}))(h);
