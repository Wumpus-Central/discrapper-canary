i.d(e, { default: () => o });
var n = i(477900),
    l = i(582128),
    s = i(192308),
    a = i(885377),
    r = i(375708);
class c extends l.Component {
    cancel = () => {
        let { onClose: t } = this.props;
        t?.();
    };
    claimAccount = () => {
        let { onClose: t } = this.props;
        t?.(),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    i.e("896162"),
                    i.e("213042"),
                    i.e("188941"),
                    i.e("349619"),
                    i.e("627323"),
                    i.e("319623"),
                    i.e("121007"),
                ]).then(i.bind(i, 888363));
                return (e) => (0, n.jsx)(t, { ...e });
            });
    };
    render() {
        let { transitionState: t } = this.props;
        return (0, n.jsx)(a.A, {
            transitionState: t,
            onClose: async () => await this.cancel(),
            "aria-label": r.intl.string(r.t.Nn0Px8),
            title: r.intl.string(r.t.Nn0Px8),
            premiumModalType: a.A.Types.UNCLAIMED,
            primary: { onClick: this.claimAccount, label: r.intl.string(r.t.fiNVin) },
            secondary: { onClick: this.cancel, label: r.intl.string(r.t.oEAioF) },
            children: r.intl.string(r.t["7btfmI"]),
        });
    }
}
let o = c;
