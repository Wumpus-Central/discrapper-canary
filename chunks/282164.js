var a = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    i = n(873115),
    o = n(219929),
    c = n(618541),
    u = n(975060),
    d = n(388032),
    p = n(262249);
class m extends r.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && i.f6();
    }
    componentWillUnmount() {
        i.Nj().then(() => i.Dz());
    }
    render() {
        let { braintreeEmail: e, className: t, paypalClient: n } = this.props;
        return (0, a.jsx)(s.FormSection, {
            className: t,
            title: d.intl.string(d.t.QQBAoq),
            children: (0, a.jsxs)('div', {
                className: p.inputWrapper,
                children: [
                    (0, a.jsx)(o.ZP, {
                        type: o.ZP.Types.PAYPAL,
                        className: p.paypalIcon
                    }),
                    (0, a.jsx)(s.TextInput, {
                        value: e,
                        editable: !1,
                        readOnly: !0,
                        placeholder: null == n ? d.intl.string(d.t.dte2Mz) : d.intl.string(d.t.hopw7e),
                        inputClassName: p.paypalInput
                    })
                ]
            })
        });
    }
}
t.Z = l.ZP.connectStores([c.Z, u.Z], () => ({
    braintreeEmail: u.Z.braintreeEmail,
    paypalClient: c.Z.getPayPalClient()
}))(m);
