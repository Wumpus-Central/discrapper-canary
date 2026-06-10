e.d(i, { default: () => o });
var n = e(627968),
    l = e(64700),
    s = e(192308),
    a = e(885377),
    r = e(375708);
class c extends l.Component {
    cancel = () => {
        let { onClose: t } = this.props;
        t?.();
    };
    claimAccount = () => {
        let { onClose: t } = this.props;
        t?.(),
            (0, s.openModalLazy)(async () => {
                let { default: t } = await Promise.all([e.e("40933"), e.e("27323"), e.e("19623"), e.e("21007")]).then(
                    e.bind(e, 888363),
                );
                return (i) => (0, n.jsx)(t, { ...i });
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
