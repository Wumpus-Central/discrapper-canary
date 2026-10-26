i.d(e, { default: () => o });
var s = i(477900),
    n = i(582128),
    l = i(192308),
    a = i(885377),
    r = i(105292);
class c extends n.Component {
    cancel = () => {
        let { onClose: t } = this.props;
        t?.();
    };
    claimAccount = () => {
        let { onClose: t } = this.props;
        (t?.(),
            (0, l.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    i.e("144909"),
                    i.e("213042"),
                    i.e("188941"),
                    i.e("349619"),
                    i.e("627323"),
                    i.e("319623"),
                    i.e("121007"),
                ]).then(i.bind(i, 110744));
                return (e) => (0, s.jsx)(t, { ...e });
            }));
    };
    render() {
        let { transitionState: t } = this.props,
            e = this.props.title ?? r.intl.string(r.t.Nn0Px8),
            i = this.props.body ?? r.intl.string(r.t["7btfmI"]);
        return (0, s.jsx)(a.A, {
            transitionState: t,
            onClose: async () => await this.cancel(),
            "aria-label": e,
            title: e,
            premiumModalType: a.A.Types.UNCLAIMED,
            primary: { onClick: this.claimAccount, label: r.intl.string(r.t.fiNVin) },
            secondary: { onClick: this.cancel, label: r.intl.string(r.t.oEAioF) },
            children: i,
        });
    }
}
let o = c;
