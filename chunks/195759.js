var s = e(477900),
    n = e(582128),
    l = e(192308),
    a = e(885377),
    r = e(792996);
class c extends n.Component {
    cancel = () => {
        let { onClose: t } = this.props;
        t?.();
    };
    claimAccount = () => {
        let { onClose: t } = this.props;
        (t?.(),
            (0, l.mM)(async () => {
                let { default: t } = await Promise.all([
                    e.e(144909),
                    e.e(213042),
                    e.e(188941),
                    e.e(319623),
                    e.e(121007),
                ]).then(e.bind(e, 110744));
                return (i) => (0, s.jsx)(t, { ...i });
            }));
    };
    render() {
        let { transitionState: t } = this.props,
            i = this.props.title ?? r.intl.string(r.t.Nn0Px8),
            e = this.props.body ?? r.intl.string(r.t["7btfmI"]);
        return (0, s.jsx)(a.A, {
            transitionState: t,
            onClose: async () => await this.cancel(),
            "aria-label": i,
            title: i,
            premiumModalType: a.A.Types.UNCLAIMED,
            primary: { onClick: this.claimAccount, label: r.intl.string(r.t.fiNVin) },
            secondary: { onClick: this.cancel, label: r.intl.string(r.t.oEAioF) },
            children: e,
        });
    }
}
e.d(i, {}, { default: c });
