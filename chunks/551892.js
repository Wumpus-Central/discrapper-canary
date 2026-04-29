n.d(t, { g: () => a, u: () => s });
var l = n(627968),
    i = n(64700);
let r = (0, i.createContext)({ customPaymentModalProps: {} }),
    s = () => (0, i.useContext)(r),
    a = (e) => {
        let { customPaymentModalProps: t, children: n } = e,
            s = (0, i.useMemo)(() => ({ customPaymentModalProps: t }), [t]);
        return (0, l.jsx)(r.Provider, { value: s, children: n });
    };
